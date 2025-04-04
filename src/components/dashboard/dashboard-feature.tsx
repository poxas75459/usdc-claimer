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
    "2J4uYS6fmDdy6vzufPH4H5zbFdhgX85PwoFs3YTGFisbb1eNzKjSzYbL72B6FjU49avFviyeiiRWRYicGBkm1SjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zb1xpoKpCvKUpc32LupDGrBmcmBogQFTS7UfAxDeoqZZTDzWiDCL5pa1sXcoQb5q59Lt21UJLXqkSWAmx4EuaTd",
  "key1": "2Y3C748fNLZktApDAFK13BgKmnomPF8qdhqE9pWtx6u4gGE1tu9tzLJKmqnEKptV9iFBbrzkYwy1yT9o8qktYujF",
  "key2": "3kj9hA1wsqMtDgECKXxVRPog8ADVotNtAJuZ79QZZmTvkwzz597NEtbY8RGRe3eY97o9WeKWi4owv4ha5R8YL2XS",
  "key3": "2vagDHi9C6g3y8sPZLBgCwciPRDRTEKc7uCeU6DtZgGZ2fujE8yaREYYwrR2R91LQjeCbUc52rZjndaju6F2a5U7",
  "key4": "5cVgtHfYUxC74evDFZR4s4GYAeZkGr2vzziuyK5KSow5hg5of7S5q4kfmPBB3pBasa72t4DDtzHqJQgGYBoh78of",
  "key5": "2A6oJKmzvhfSdGDu7ACV21CbeumaCUr9joTAdFxSdkxoU9epxvtTmByVMdTBft5Nz3YU26tzNJVzUr4PQmaAXuwz",
  "key6": "8BibEN1tWN2XmBxeJiJHpiJqPdbbwZa5yokrwVM2NMpjjYWSrmc5NB99LBPfQkoBZT7Lwr7Gw5cPb9XrEqimCg2",
  "key7": "24ETNPW2Ncr3SkNqZapPDPezp85yPUiDXpj53rkxc42jjWrFHxq3741ET3aStmeKhbrqn9qoys2oXvTtbd39wEBt",
  "key8": "3nxd4qSraS1VxpQGbszsF2kmWjwYTXRwts8zT5BK3tSmnoAnwTp5Qbc7u8Vmgq8wJMU4faSJsTr79gPvjpjxmtJv",
  "key9": "3smQ7brjpwWTDnx2Uh7HbcwdACC46dwjCrWrD3kBVBch6yJ7skR5hqQAsfxBRbiRLHfDncjEJbfD7FAHFwkq8VTo",
  "key10": "4Yn78bmnt2Fs3u8M4Njta1g448NCXmkEg4S2gyoGzsddNQFt48nL59FCdXHdNvfkQbjvy2JRtNNXspdDUzAQKDnh",
  "key11": "65DGLkpexxzEVin8C3McS1L4pnExzhzfAPQ6rnGMmL3i7uzfkFAc4kmenNTKHQcLL6ZVaRoMhFE3S4Z1TGtRY4LW",
  "key12": "2HRaU7cwjsjzQJfBEutnzyA4kfE6bPhR89m8zXoLvWjgB555nPan7NT9rg3dY2qTsQ7feGgomtZYWVeGhd3t3PMS",
  "key13": "2g8KSY6Xy4WstDqBYpaiYT2rpMNQRmYGrxFqFoU6QS4s1XyLdPW2o1qDqLriEHzmbTAtQ1w7V7YYHbHCiTL5qEfo",
  "key14": "53o23rEaKND59xBmBK7odGryfdfFXK21Fx5cfHPXwsF8LS2GpeVfXvbuqxtDosPp1FNXR4c1VMMaQMKmKLLAnzJe",
  "key15": "2rSbm8mDvDBWZkbByp53Pgwz962QfiXZE3ECRNuynvCMGXvkGVnxhYgiquNYaNbhn6ASHaFecFvSoveAeiCHEK1J",
  "key16": "3me32in5Cci8aCbeGb8e1c4c1mASFb9LaRkPAj9UDjaJmrg6xEUbxR4m7N6Btr43zT8Grh4bm4Ax2PXZ2utxzkxS",
  "key17": "cwUWhui1hYGNhF3E6pXseMm7nemX8TzzuLM1MvpcEGppMBQKmyyX19h73PhdP177tzTncgumFogsZmteVxi6fi9",
  "key18": "gq4ZHC3kWS9zuQ63VCXzjKkogKWDGSBeNYTRbDURCerU68UHb3BrBbiKkPsDH3FLCzSx7sgkkQzVug8gsGwSvuX",
  "key19": "4EY8LXZizZuUkucGecBjP5yyAZZVeb5TvyWbZx6XeJ4U3hktkdjjnUEui4zLXGkhFyne6ZXefaL6oUs5whpqWKQF",
  "key20": "4LV2gr4PNLitXEmQPsuskuSJ24wyrVu9xzuKmoWE4ZUytiVLs6t7i4RHUbsc2zNxBG4p3jT8TP5ru72MGKBL6AEC",
  "key21": "5vBbpnPZXAcmWLLoTfhQ2QMnjUpfdLp3y5Nt9zyknLNu7vByrKqsJvYaFXAzVWh3AtSKyeSPsT4J8xnoPxAZE1wu",
  "key22": "FnYJVx8EqAua47iiqKcAayfF2vFrPGrszmPjJnFD3iSUSBQheWMaURJvkrwDEi3qS5uDwRskVfqg9Np8eRxUA7f",
  "key23": "5zuBTv5hyQDGHEo74w2mnFU5wecMNFgHYX5EJRF5ahsMn64X5wLXZrTWm9ty72eQX7DB1WX17anrdb3g3GrD4huw",
  "key24": "5QGGt4ummS8BwiE2v4FnrV6qukNCjY58eVDs49xUTAFdFstKfB1YL66xy6qYdxEM5ofSoL6a3FyirNau9QYvyVMK",
  "key25": "TuCn9bMq9jFeBELVkkS52WVXKgAEyvBHQ6WagF3tAmDv25M7JMLdSAmJeDAu4EE9fY8yEqKtV6qBZsK5Wy81YeP",
  "key26": "4XU9rpeCjmaWXHRLtVihwrwUeHEeiqs3YV5mXLmDm9JQyVgW3HmduqnZ6cLbzF55sqfGho6DvwcNbPp3uLrT3Z9K",
  "key27": "jMG146ozuNzAyocniUhgzcBevKViuNeSnQZSHnKAuEDEikuWUqzZa3gLCFMM4HowMjweaHkmCvrVameEX6Ss5XV",
  "key28": "4Td7LpNK9F9yivKkGgHBn7UGyy725eHMZ2bF57pTtVb9FYTzWTq2fpftyt9a2soUfnw48YF9Z94oiTg2Vuf7JXeS",
  "key29": "3UiKSRCek4Yp8rL5TKFoyNFiqDuyZRcfbsGN9Z2RGwrxSMKRB8f6NRkdsEXDgnzyftLDjMnS574SaUvZdXgqnSVc"
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
