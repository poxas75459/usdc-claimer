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
    "4qzP7A4dpMJha4EnxL6fKobnNPthKABn1e7RULJ1ShteM41rZhkwzLqgWsJRGyD4r3Bmd7YFteZUN5kE58rcSa2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KNxCPALAJabkv1NS5d8GPzi2BfYTXx8383jeq3zDyJQDPVqZhSf6WgV87WUPkYifFpsnx3NrUC2FFKgd1i4nFz",
  "key1": "2FU83ZvT5UuCsQG2w7jephBSjvJtoCAdcbnk8VExWp2qLWTJ8AXbsvK9x8DRcH6BgZop9VnKRmxb34QhKb2FtSDh",
  "key2": "3Y2n6vWLzg6kVduRPyUCcwFK4L5pdtJJnjGUzQsGF1C5VKbm2UHDFRCQ3YvNnvN77EoFgn9oXFhm9mEfqe64entA",
  "key3": "2fbQKeonSL2wLiBqmPhGe26h89bdM3kcHLrcxADA4H2ETVjZcTmCvRds3wXYeQw19cbEUvQxjGX5QUv11o2NLzjo",
  "key4": "3JFbbyC76U2zgp6rEYNpSpbWbWi352D6gNqVi39z5P1RqiXyw14s1syxuvrPhCzeyRKyzmuEBpcDRkFfP8efTkj9",
  "key5": "5ZyLa3VfgfFdmCsvBX8aY9zYJzsB9Fq6hmn5TyamG7J2MEZ5zEJk6vY1JeVdQmPdqovMJj4p1GoF5HzZ8CtdtXBX",
  "key6": "4UXkPGd4tZS5h8WAajxRwNDzdwM6rssXVgZEAGerLuwYgx3LDA1ZWAWXCFWS1Ss5Qci3Fsp2QDNdCJdEYaqaFg94",
  "key7": "26My3sT2R3oSWP9Vzcqed9GCHTfQtKxNC6iyijvzDo8vvjiEuhSHxehHPWcsL8FpPmxQsMykqi6oswsnrdbqQKYN",
  "key8": "4Ljctcn2JyAsXxkSpuHs1Vs4AfuUSi9xaxcrbqfrRbNoWeDo9wfrh5GRJ9AnrZ4xRpJ6n3NX5K7ZrXuBHqqbVQEk",
  "key9": "3RqXm4pwAAnRPALaNKH7htmwEgRVmk7sLEuFHgxaKmPAhPpDcvrQt7Y9jXLbdFNtmjt3CPhoSXpCroRdm3bC2jcD",
  "key10": "31CesF3Epc4zRSPNsbNYXAkJX3Mza19tiQUES1L6Tv1ELLvxPpceCh7qAfwT6LvkToqFkjAfXexdYj856uVRBveS",
  "key11": "4pkMp2ZWTtSg1GmjpyqH6JnMT54mTNj3if7dMHnbuzaTHc2GqdHUUPxUYPw9nD9HsEVnU5Rgh24xRJVUpqvFEK9P",
  "key12": "4gB9rf2viJvijW7u789oCTgP4LQ7qydYPKZeGJvHsbxVtzFXmoa2K8h78GLGWzvCVMBgbGgNtFgMmBwFUjW6ibXT",
  "key13": "5c3YGTpE19FU2Z9QQgDJpkdZbjhdF26rUY8SAr24XYp8hPWaws65H2DzwA85wLTT9LE7p8U7kbYS1gpU4CWSaCTF",
  "key14": "wMXWKjLZ8fQ9z4ZwAD7GtjnziPGd3TT2iGPqLf3f3UZGeVYbtuwBoHdAB5bYvW1Bb52tGGZ5U1mLUW6ieXTBgDK",
  "key15": "4Q2mnEbbjz6tJPvW4T7YngCE3uQYh9U7cCG8ER1zxhCnYSfu4PjMiYs9AerYV2aPmVkoVZzsR6JmsaxBEZ4jgwcz",
  "key16": "3FADemcvZTKdoVaacpEvm8n5kT6qrs3L8FHXPSSyGgRcwX6UZ6wRKPefuQdS5787wY65mkmFQbB4hMvB2SLUQgTx",
  "key17": "FZEBDZ91sQPLxbXPeSM75kGT4zsDMSiF6R6Q1f5npQr86uWXDAuPMmwLZ6RA4SmHcosz67L5jbrdJSnVvC2Uza8",
  "key18": "yb94q9U9Ar5zBayvz37UReeKWDY4ZTJgMxTKDG3ZmqDNetMY23YGjJK7wdbYPKCgN1uNSsBi35Nzw77Sr1orJcQ",
  "key19": "2MrCnSKtX69iXMXNapvUHKVMAotvoa3hunA8VaL5fcSBxVrBL6hhKTpMt4x6rkSMyjoSeuDBKCjnyrT623a5dQZo",
  "key20": "huyS1FMtSpaEL5DAdn2AFU2onqvDsaMRsUpqSWNzr1ZHnhu35HVmTuXnbHW9bkYvnb4AZo3DrsNECAo9q4qvFEr",
  "key21": "4qpBF6S2cTLuM3sB2HdH38H7jTwRtbFUdjpV8mpAn43xxduSfgWobRw8RdG3uNSkSoKEXtioYzxEvhsthCBVA9fj",
  "key22": "41f83xH1wbgmTGK1SQKUhoXXbt7nc2r1zvkx7kgEzTzSkLXbNgqnDFim8fMTaVPEU3rrRT7AWUbbjxoVd26CNacz",
  "key23": "WrSjPzMaq33tLVmmWWA2HhxrRHFDmDEfBPeMqTQhvaDUsiPaCbnY8K1Jb5S99kWQpF5mHD9wvJQdh2VfGEKL8gm",
  "key24": "3WPNgYcUoNjSiE6CdDDBLutWxZajjyw4UrKxH2tqTH6r5hYRBdtSkvYoK6GdqKZohWhzkqzHAGuY1zKwX2ke56Dr",
  "key25": "4rcpKKHquUVacHrsF7xoEQx1YrGe3aXenutuivLzkgvSNVAtUVYJjdeHQR9rGyUVe9hUsAJUMuB2GDetDfz3aKZo"
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
