/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3sqqEQuYBFRKVc2c9i4UiHhYfKT8VLNbBhP54855jhbkVrKhQkTDRAP219Md3Eh6DAhAA9fyzUcaj3vEwwrxw43Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNBv1BhZAiLvQKkLHh2pfXTJDNHZA6xUribVzugSVrqSK6n7C9CBcRtqPpmXFJ2WRcYuyFB2sn88fRCCPwHih7M",
  "key1": "VQyQ6XPBpfHyZVWair2Le1eVGqfiFL2zpobFcy4FqnyY8dMWnyc2DGeJZsVUs3Ja45rf45teUTQeMG9DeX4kaKU",
  "key2": "44xnzAGN7QnZjU1gUjwSzx9E9qC6XERbAGDGAPLFmZPDWP2hKTNJam7yZ3a4DGzFxgPXzzA85cG7Sb3PQShE2NYV",
  "key3": "2Fe61F9X48mBGySPz2xBEbLicbXyYgRfqD7c8tFQKicwrze55vovMEAMKPZ4A1Uj8AFw36MzhKbLoNKTYLnAkMC5",
  "key4": "8qVi6do4GEDE7uhod7tnL61kQU9AUHJrKvPcEaNudmXrhU2imXTAB2w3JLbaQ9PH58PaLwuvNahMzYHoUz5Qi4c",
  "key5": "5CvnbmAHXskxENBDuyUgEohsaHAKvjvzcKuVaGPToWdXwfVWBgDRmMbLseaqbWXkSZhAjCjSrByuJH7TDruV1MST",
  "key6": "w5irnosZsGhyqVMy9fGo26pDb61E1dRnZrZ14jVEmWPkvmHbZGfgVu95Y4cVTNq9qokbd8t8TDjsz4U7JEn1abk",
  "key7": "5XyEYYgDVYvtvVneP59Anqc5WX2VAev5nyGcJtVt9hUgeu2HN2vHLVcbptMxdjpuZ5difCm72wuVczLTosiDKqp4",
  "key8": "BQFoKBgytGmMWADnsSysGyTHCnrNTYFuezEYkLM9r1LYFZA3MwPgnBatkyKPBLnWaKiWPG1jFWymYrKdjTxDtu4",
  "key9": "3EFvAuuRHfSVhUBmLrkDmFsvEKdC11e9WpmWtHwQuaZVKpTEym3DPLvgGRaPBmoP9qt4cVX1kc6NHZh1mGZwCBSG",
  "key10": "3Uq3KjsuxrFyiigK87Gd5GgcGHLuf4Tc6XsEY31CWUsT188bzYn9c88b3gafdXntzSHvM67qKqQkwcoqwMb6sVR5",
  "key11": "1PvVnEjQBJazfpD2jUetju6khBo8EXQcVQPBpDcQoAw3y1TiVomXT9RP6pa8WmpKd9UjXATbJtktSnQuUcEjSRV",
  "key12": "2jomvBtKGpjjKMWxDbX9DeiqwJanTgegwvLSEFh3VLDLzkLmyvJRgEhgbjCL7sUp6zz5iP3ZmHjBuXirdqswygSn",
  "key13": "2jQcXhYXJ2Cnb8eDMcgQuAxssDU3wfu22jJ2vSBJUTbWGkoNo9Wh3JL7Dg3fkePSMocd1ZYkG5xX2GrSrUL2cxnd",
  "key14": "2WXbAmtYnAbMhVcMf7kLNzJrdE2utTPvJcZ1cD22neFdkELGmL2UzHt6iT7cw33aDPFxCHUvbRgxzEXWJhaYt4Su",
  "key15": "2dBakR1eF6h9tKe8UGbvmtthYR92dDCjZsMvRpUowZV6tFf6gdGxVKYbcrmrPXmcZaX4kZd6rqZ2Jtyeq7uPtZpm",
  "key16": "4iJyKV3k5DsJ54HiAwhdaydYAU2sf2mp9imdEBsePVQ5SgLescieSboTa5Wk8wFqogEDrSr55xw5abKUgEyGQES3",
  "key17": "3aDnBN8egvnnyQ42dXcP63AXbTzZcXiwuXXvDAfDLPtuubBsqsVvuJYqTvDCeTwrXvKKQcHrTRrLtrFxMhTZqPAD",
  "key18": "55FaVVNukWZedV7Kq1ESdHyWFR8n7MQ3q6xYYXq3FMPzFoHmkxfNbLr9zWkksUk1xPNF5bTACRdbt9H6EczgqEDG",
  "key19": "GKuefNNipDGAJJBRtQLjRgtuw4L3dcm7eGwCGeVSnuMJEPQMNsCssU6yDy8dXiZXbEztqicxxpbPiN9sGhNEmAY",
  "key20": "34rYWpMb6Lw8MKN7d94ptVJ29yDuSaybyZ36tDkufrpPq1okN23xP2N4jQYBKdMZWNfYQZt6Nt963kr8P5AgHAhN",
  "key21": "2DHJ4Qgw9QYFUQtFAfgzt1h4d4CdSUCtR1oRX6exAoYESKHUnt8MrZUmPDWocx65qjsoVYxgsReehjnkMwXjMDN8",
  "key22": "5g8jPtHD2857gVtU34KbBPwumv1fTfiTZetQw9n371Vy7w4p7kA7BB7HEyykoLuXqKQUHBsyn6JhMxmge7ALRvJo",
  "key23": "2SBjCZAxfRsG5PFCRexFwunGwUzMnppak7DTLuArQkiZqywtZFq7H9V8LVT2DppLRAVnSBVACycZnHavNwEW9MAv",
  "key24": "5xCVMKBiM4FBfCis1Ciru8NzyhsDkJaM9ePqnkFuKfH3ZijgHzqpURmqm4EU5SJq2avipG15yhWNhiueFpJYanSv",
  "key25": "JCdXN7dmyrufYnqnwBbxzvfpcyAn9B5KPJBpieRavqbq8h6jdTdJQPwcSHRcqi5mazNmAFbjZxPrTA7H9fmWfVR",
  "key26": "3W42yzjfMEh3vqjpH91rqyrb82Kg3TLFJ72dsP2aP6pMjyz9aQcj4Prc1PYUfofvVjuCbgf56K4U8NzfVARnGE94",
  "key27": "5XbAdPk2XJTvzNP22UunowxpmrPt9PSYJZpSJhKqs451qzEpp4MZJmeagfE8B7QEgWhqh29m8kuq5eFwoYjMj1MG",
  "key28": "5ZSpKrh9KYDj1CjKptzx586qEkjV67ND788r2u2pcfcZ6sN43SgGJC3cAw5rCKXV7ZfqzUDoCeD8mCpqmbsYD4vY",
  "key29": "5E3CX1DqVreeCn8QE65pEqz95wTuBGvyif25N76Pf2VTim2NTbjPq9UjX4PQkwhAVaMyHvRanKmrhdxq3MdL6Bxj",
  "key30": "PeZwJUHyUHw91QMeMcaAk14QVksCbxf8eVSVD7L1P8R4SNDwHpFNMash8puuiHMyhe1xZRHKYfzAZzhy6CAD7B4",
  "key31": "Ne4dsWU6M9DfZZbLoSrq9yvSqyzj1RVGJaWHDxkQ8v7U3MzFDBW1h7dxqpMMSgtQ98eDsBStStPAaumKY2w4w4H",
  "key32": "4oBdrsMZ7e2sKmsnyBs45a1aKWXvWuXEvgPJG57LnoathXfkwupTt7MsMnUw3sMCYAkb6CLoZMNGuQXwSLzs5HM8",
  "key33": "4KNF89gh7oAanZhGick7JvqxwEdpkJyRZpAgY4MP7UJTk1uRSSx5yucugLZ4F1B4EuNSjiwfWPYNa8GzRiEdiGEM",
  "key34": "35d6vTi83qYx9Cjsk16LBPiHKvv3TpvX7SUeUVnLUSsom1pGUSpMJwPdcxGWubuurw59XSzJjU9QZLYihBrxnJMi"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
