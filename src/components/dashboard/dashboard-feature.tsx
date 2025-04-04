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
    "aCYJTjmvcjptzdnPubxpZNzouNC3FYn21UxrYLjAuea8wCq1V2NkxQ8zXNkcGRmA5Uio9dF1VA2AtS5z1apnorQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eo3Ug7XFk353mKrVqteZib2gb1QTsmjrNTVVocGAg52gByDp5zqNeeLnGPpnnkdxLaZ46HhKWHXt6AvU9jpm1WJ",
  "key1": "1LdEyeJUoeEPDZssgXw454Sg9CCw5AgFMZxm8gsdRTfPjDnKKNVGQRjZtECvKZfhSpvvow39EToF7A7xbi1TS73",
  "key2": "4ChheVWi1m4qGFVN5vEMwdH1CEyGCYmBrMdHdR6EijmtwftAuUz3B44dqEVGeZWyHv9L5xoY73JQt3meWH3wnFgd",
  "key3": "5erdv3CvYjpaJuqFRddkeWb5isvX3JFaq2h26gUrfkBsmMnADTrj4fGgrPahsRgPbuosdSPzC12hhpUJ3KZ6qvHf",
  "key4": "4edHza9LfGeu1Nm4psxsYsbrohM8dvvRDJko6ozCoema4Cx2vtKf9sSSx4WAsk3gMNeS9n7whWHFDPJwLkDesAtq",
  "key5": "3F1ub5E78JajT5nTHmkZ1kjo9P1wru6jo6TdygXwqR2vJhQHGRf3EHPp4RHstz49t8ZTacx749oXSa4F91sjBGbQ",
  "key6": "5GbmhzEt4b2cSgJq7qMf9nGbgrcrxP5q6Bh9mDZynvyJ9kk8iHmELgqbawjcbxjKfow8pMdJV2q3vtjriE5LqF7K",
  "key7": "2z6cVnkHjbV8pLggpK6dz2z5bBDnbkhSF6vTBFCHGtHgfmVUwHPHTKA61aG6Za8Bg3tELhMds1RPHvUvZGETPvKU",
  "key8": "5PqpvLZQCBgqiFdQXCzLVq5a7y29tuRJEJrxGo1rGjhdDV6KHs3RmcZLavn3fFYiWebkB5zGF4TxXcr54CyUhcrq",
  "key9": "4g4BDfik4eyou6QxpbtVH1qbM7TNBxhsGXbcxBcwJ7bGwzRYzzRQ55cKAVmggQ7aaaCQEVPL6R5TQt2FpDfT4bQ8",
  "key10": "5p9LTHxuXWe9PpCgWot4MhtviFvKAT6vsDDo8qQXycYL77kBNHTt9jemJAHk2s1krt83ZDYpZo6Z4dkP5vVVSFv3",
  "key11": "4dXpyyFKhswWabC6XS8HnWsnSnc6SUsX1EKMBGzAFa6v5wsziuhmzq4uaUh4nHraWbppv8SpdpiMohduiSKgA72W",
  "key12": "4PHj6RF9BoyfxgG3reE94ZX4qkN4B5zHWNATPCzULgHakH1rGwD4LWBqmrLTEA2kMwtKwHawhMrbhGJYKtLXcvVe",
  "key13": "3Gd2L4x7JXwKsWiodiE4Sg6jjc3KBZccfY2x1sArwxVoxdyeFkf9dThZBsps6EebxoRMpWE4m6uVkBSfQ1TVFHrx",
  "key14": "2gZzUozAUZpTwRbvzY9zeTWtX8aw6xWsK9pg6SB6CP9q3sX84zT4BvbAfxZTtRkFJVE9w7EhFAyL945mFZSKxm2C",
  "key15": "2L33YYcv4v99EeEpagApDqtQvymC9oYGF7DLnhXcCRpNzJYv3zcbVYEodhiNYgkVpdzveWqdt3xUJphYRLLSk642",
  "key16": "5KCBXsETxXJUiDeLT8o1K1zpEQ5GhHRSHJvUAFoPrfp9r7XhEK5MH9UKM14PEzh1AAFaWDnfW8SRh4Q9dL7BC5e2",
  "key17": "2AZoeTjUevAgguiD33Fy7DCi5pQEkYqk1ep1YmWPAeGxgaXpVsUANHV5po7uuffGUabsHhs6oFi1QUAkrsgYZncq",
  "key18": "47QX2Wr6nHL7uECtmCeZzgxrHWjT3zsefDTuExxzS55mmQhrPPHDRZYJ6BsrtDPhqm67yvVU2ZaPdXCW88rPVFZw",
  "key19": "3GPS59AJoy5UJWhcpEFDvKaReL7MQAEMX788CQHdtLUz9WpUzR26J2U2dCKWuuyT54ywVy8aQcZS6gF3wmwQgtJ2",
  "key20": "5jsPrPnmWK8a1AVWpAJNzbnd1CjY78jEKqbwfwRZ4SvrthAfNmj1MbUQ3BtjedqNtR2LnwWN6tC9bKMKSC6j27Gg",
  "key21": "3WnYwnRuVxdHE5Esikxu8pZmDPujos2qkEjvyViZiQfWrFpSTFngTtgTfrJ9qknYHjf6QqP2g4YpopASq3VcvP2y",
  "key22": "WJpUBU2gWzTRjeAvGL1ct7m7hjwsji2NrnfHMnUBcq7WKdJsLhTki6m9N27cJ6btEwusivS2aRtwX6Mr9Nvr44E",
  "key23": "5NpjMYYbP9mYKX1PRvDRufvLZX5TeWVN1wNzBeY35XfuiqNkzFXUJU3BXKrHqdWQj2Gt1oRBqrEjkENkUfBLE89z",
  "key24": "5714kWXkqVvC4jxFkHHVbaNfMTufwWvhkpeqmiZtShinkyuTTKCPUFhynZ8pXH4ABLH5eoZYsznmFQhoF8RKTnYX",
  "key25": "3eNbmhEPWyivFPsbXzJh6LazftiQBff7LnLF6EofLcGaJ2F4tygG95GGJujKtxvZxknh5ZBDuudb4qWMWzsiEvUz",
  "key26": "hRoc4vHc1mrJRjtAQZKpVg8MUnwt8rLB8zgmZvn3CwcSqE3WHWd1EmSNNtDAMXdM4FpshrAiVRDUn2MqUE7EH3d"
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
