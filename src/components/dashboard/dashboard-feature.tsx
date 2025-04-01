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
    "3EHU2TbHbhdYpR6BkVkojvRnhRYrP6rg1EWaHWJ88xqhSgZUJkc4KSjoeSDcBuEPNAFAvdvPz4TwcGz2LAsS536u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEvHuhduTQzZ8n3r3BAdPhbjkXc5UA9GmdoQr3rK8vpa6yEn55qmpbtVQkmZcDNNS3Qe7bA1DvCrQbSV5JDWD3o",
  "key1": "BfF21ft3DGuNSVA1bhZVcwoQnGUstUqQemjwuzLTNEr1K3hocj3aDsoBWnYX8DRix2Cp2TpxGdqu19wX9t7mGRY",
  "key2": "3G33xNocvNW1MidcSMaiNsFYgd8ftmC6V4sNwaZBgMvboPwXmwSZhwF1kZwbTWusZ55ccmHGx2VETdve2jqGsXqx",
  "key3": "57c9vtgzGu9HnDnTsmDDYT5TBfYWv81sAP8qgUcc4GLx7KJyythqZYhfudBtgjmkFsDGHX4r8Luh8EWFAr1CjRJx",
  "key4": "2qfeTnQtn8i261iyLZdtoLVkYTMBf3izeQM6kv7uvMRoPUj1Lzb46VYspEN7PxPpz2PXq6y5oR2hN1L9YoHcncr9",
  "key5": "2qXZMjBHqYRnrxtMSWvjQSj3f6it93WZNEx8XdGS9EqSJhgNtjqmmzuo8mCSJvL1KgPzfS284n77JEf24Q9VR2gD",
  "key6": "3BcZ4KhrhjVfGdVEsayE3MHk3buxDTptApCbMyfw8acwcJVxrnS5bsCDVNARARHjw3WCEeAc82PCr4T5Vysw2kEk",
  "key7": "3A1tLdTR9HeRkJbptyf9SiumJQpxmgGTpSybqBjX8N42PcfF8AJvcsBQu1PRMsRWbCBQnzFsNm7pyr91ftxhb4LF",
  "key8": "3eJfwBf1zGb4gXWKeD6Y5LUvNPEBvJk1HBpQdwYPvcaLhCxJ7V7k4hvKgiCaZYpC3V5BCwtANEuTJGQSb4xtrXum",
  "key9": "sWZGyXMmaEsSWKVNVUuvgp3Yr3vsV8aNYwhTzh2qEGFs5kydYmvLJdi3DRCpZR49F71aDwFyNT2s9NgxfRWfCyg",
  "key10": "2CXxfUNxRx82i1JBUpZYwtrxWe5q712KZd4qXx6qyxeSEK7ZGc3G8Uee5g8tEPgiXYJYJeXY88Jvm4Zi32t2Hkmd",
  "key11": "47AipQicmCEM1jJi1EHpsMeiUnZYCS2sijGaXWuiRvkagNQXxUzqgvaZ55GCBRCPimFxMeMDXKYaWb6Dbi4yAnNk",
  "key12": "4BvS5P9h3A4ae7c76V49NQSTaP66Rb1WbMuzVkanp9SEJf5QZj7tFTafME3Fw6Hxx9P9janVVjrMJ8iqkKhPWmgt",
  "key13": "2Tkdaa7f3LSKpcgJ2vF4AK93tauXt52hNbTiP4UE84Vj1kBGnQJkR48n4kPkCJ18hZb34aJMUChc63Fv2i4dyVTf",
  "key14": "4jZrpx9MkHFbx75Tt1pZD7bywbBdrPzBuDrvjANkbXcFuWot4CBz6q3ZGCTQ2ZfeQjxT9p4mtwd8oGAoX7SXixLG",
  "key15": "3khbqQ91TbcqigQJ9SiUrPGLzvKTY7Yv5DoNQxm6z2jeMnNCGRBtmB2TLeWmb32mjv5UXEhqYhZitYxU1tDCuKHV",
  "key16": "HtnLNRSitmksCHgDNGUdqb287pXuCHSF8Bm9EfcSQafJWQVUfa8xCjnJnkjzCm2SkPPYtdDqyse9rdxgWkywp6F",
  "key17": "2u2YTnF8JUMbo675RY2VH63Efy3WbTRa2dWKc52Qu5twTah4DYY1fho8sbnzeSgVAeQcdDUUmhTpagxZHDeXcZDr",
  "key18": "3Q1Wj6Yv41AAiuLMF7J8pJvtQ5Uh4YhC13T5SXXxf6uWrnQF8TDmZpU1g1PtHCJWtNZ4sRShwMdnoesgzBwK8kGm",
  "key19": "3XDfsNrsSjkQSo1WX8qZBUvxjN7NW1XjevKePa3vFXxJm7UqncqfR5Nb9EyvmYHbVsbgkepiH142pSacL3SKxKqi",
  "key20": "3YAmR2Xtb3jcvufgQMKosibxgeDksn9UpbgsCPsDKVSuMrF71ZCK3sXoYq89bSSXUiyxCLezudtcQHR82oxRPngZ",
  "key21": "2gACncVBvJyABYPrK62fjdhdbAHGi9KQv1LHDq14iiUiuurV35MFVq1u29Y37h9SrUA4CvmxS74M3JLXMZeP7udo",
  "key22": "2C28v4WRWSFcfFxUP536gwYPpFf8FjWD17TstFqLd1xugqCkoeVxLjTTH1fXf1pDrXKpUeYToCsqocXvuu7VVXUK",
  "key23": "4jsrW39UFzdAtoqUztF2XKbjWdNQG5RBhDcyxSJe1XoihPxoD4UmNwoazhUKFi5DYKyJhiLaEMbYUQy4ub1ze962",
  "key24": "55BBtk3Dwfe8bEYNDe4fGr2o4rVhSPSsvhoDUicTdmhwyHuavuM1VsNcQfkjPC8ai46MxMfAJGC4EgWFRxnbYZU3"
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
