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
    "4hZwiWgEjf8oepNkLXCHTDa5842jeDMakmj6QX4mFxGPiRu276nfmXBfbj836bWLGgSwXy3UHmsd8ngbGg22mASR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XW252BoK8ypQGivqYrV9SxY7qsNtwiLMhftKgqNfKL4aFTn2ZVMw5YSEvzf8nBUnnRbzB88mwovKbyM24hS2WyH",
  "key1": "5WUTLMwhRv7MCz63D8JsvfTLcGQjd8dB7J4oHJZMqWVVECm27JSPk2fmHF9QQDD6dd9vdj6XTPGr5tBe2gfnYjuw",
  "key2": "35MLvmWUMsghgL2PTyv4oSyKcq5qUWQCakZFKxJg33Ni6Hbzbz7Z7BbfWDRLKHiNedo79AyGEXbVgZCEXLzcKT4F",
  "key3": "UgZHnBzoxftmwqetWUCEW4LzB1tgj8ybvLHGEKGraqJ916v1FA8MWwAZkfYiXHapRrZwffXikN28piMTD6gCJVN",
  "key4": "66U4vTQxJ5EaHnPWjBc7ShSpSc51ZGc4T7reX6LzkA5qdGRd78g68dZhj5WSejBTbaqbpDg1qCTeguNX62nt7Xd5",
  "key5": "121Xkoy9ecUGWbPethbii9AvuVyxxr1XS5KRL8jHsSw5Ryrz5pXW7J5wNqoVHYd8SPwt8TCNnaoBR97w4YncftZs",
  "key6": "4p32bDdGeFJUyPPgSjRQUBr471zWmeRbSRuefcpmhtCtuWSVfvA2WqRBwzhVW3AVmNz2mAWCfNvcrFkE5DgBXB3j",
  "key7": "64n6tbsgEHR7FfayHWqtCaQDFQKxgDQez5h4q6Rv3DsZNaSKBy6QvJPsNJCUcAwGEvzgxorFEFWkXp3SEzSHaKRc",
  "key8": "AZXuk1xGkaPiK56suycrHKPkDHWCRUEaCuAboYuVj4fXWTCkFWhBtAixMuF5N5fPEU8NZSkSdyiK31Ra9T7gfvo",
  "key9": "5YdAMtZv7z5e5KuE4mh5rgtfa2Cbfv1MTnQjkPHmbhP3omComewx2PyRDkggTbPF2fFCd2AHXujthgeGyxpxQwYk",
  "key10": "3NbbEMxH2Req2e1jCaRaGoXThnZ5WFyiGGCEGduSgQNWvwGfjN3bzTHvNtrHYLutMiTpvogTeBgCytX1EKYn5LBM",
  "key11": "2zt4Geg6QcHNErUyYFJRhpvGCSre5qNEfdnyJDZ5Xsa5RDzJ1cT8uBCBADe5MdDGuuC1KcapE66xyxfvFQDcGDMA",
  "key12": "2KMnEXqrvSWAxBLf1hPLu4Bnao6zwhpR9HHKwcdk7kjZhoSwTR2a5TmY9MnSFVebXHsFHBHzsQNFodmNTJCSphBe",
  "key13": "35cMCbkBmSEnV7hBKqbXVoFesaUmEnSobxU8gzH5EJYYGkK9BnyWXRoM1Cuq7i2c9oG9RGcZtqhvwxmYMmkmjLp9",
  "key14": "5aXLTZwticvMmTgZ9p1S5mSc1a2F5u1i8FEfNad7wqpJvrvgoRewGu4XFGg5Smgcci4FbJZ2gRSqfGqRRNNJKVK8",
  "key15": "5pPkHsPGkwKyQYbJEqVWgFurdF31JA8dqwSQP4uc1KEAcQoTNb52sYELPrMZM8mdXorhCPDmuqmmkTy115ChweZ5",
  "key16": "5wTyKXpAbAqTZncD75SuvBvvr8FZah5QftndMe9D5KgFaeGpoMzoUXEMhNHdN1xtqJss8FBTDSGPFGfgKecKHo85",
  "key17": "66FVRnj1hbpVLvQvyKuqJHWs5p9pKYJKyCJ7ZBPzR38sLNyqYM4u5x6KP62neSPABC4PYeKjR9u61CMRLrXsfdwG",
  "key18": "4WnKaNe8QLNiu69gGY5vaZ6V9xr6SDqHYP1jqDG749oyK6WNHbcxLteZBidBimUgZLKaPPr6Km6qL76A1yLrpBUH",
  "key19": "3hbBzBXioksQWtgD3gHCnQjzREH4cCYMrm6covaeohNRnA7AT8qqZtzRkHNRMW9df7d38TFhcF635Lp1RovjHuJg",
  "key20": "5dmQCScJo9XJTKA6J7FcRGorjch7gbVQywQ2ETe3bW7zvtJSEvfZFPrjxDAXRRFF3GwCmTjMheH3Xudp56KQeruE",
  "key21": "4ry8FVEfMzaPryxGDtkFonuq9PVpVBDzPnFr7idnH4NK87bYR4frBL8nAGjwGvb9xn3XCDzz949j7fdipsuJcJiG",
  "key22": "GjhA12F8v4aRuETEfxkmaSKEiHtV8EjYfLfZRVBsURjjhyeeMypFQGc6NufcXyS2sGivSNGHXCHLxKcgPraFTCz",
  "key23": "2zo7zqPWRsk9vCoQp1wbpufbZyGisZTPVY2181YsRrXkU7qPWDMPqbu8KpYrLcU8YwVPEhevixjrnJoC6GszPfcJ",
  "key24": "65Q7BfEv8jg5mVNMuz5PgxUJ37NPph5ashDurfWwtQ947ATA9kJtiphuvXzdQRGKz8UUW3jKhyd9kHJJ9AFPNy5V",
  "key25": "4fXfuSH4ctqNaA3H9A9ZNJHW9hdzBEfKjjgHSHuPsDVDTX6UkkMLA1szYKRZAUWiENDqa2uEJuecQVqAikWAeQan",
  "key26": "3s1Snp1mxEer1bR7MTE7hEUvkRUVThezbr7jqn1xPnDjeHDmVmxd9JWjhQApgKBpZECCjbFShCC4hXYRMuJkA816",
  "key27": "2ma3to6bcSeszPQLhSoqRiK5fUzpv91GZnunshBEdp1U6tahKDEDpRTg8PUqvV8zfHd3K1R3espxbzjoiU4BSCKv",
  "key28": "4yrtSpJAkEgwrKRZDiRr7u9UMdWyQ6BuVUunFB13hZBSQrL9D5Uu2oRQoyYcJcbMXX7cw3LFeFoHB2uYSYysQFRA",
  "key29": "4dAZvnsHvypEoND5bnDnqng5tfk34FrtZmbSXUJsqMQSX32GHrZsdxBARxGTH9TAnroBcsEcMokkpKnbTWcGj2bC",
  "key30": "3XgFHeAWgJXwu2ii5wA1JHVdJNQUP1cDSrGPCWDJn4nBHjDBztzEZubib4oJ9r56sFHeWu1d2yp5Cedqw8ysN8aW",
  "key31": "48mmWLgH9ztXm9Xud3983LkU7aLsAGgWLMAs3418WB7sawcByt5vqmNaeAwN1mxX6VjaYUYpwLQAQBqfCpnTJVoD"
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
