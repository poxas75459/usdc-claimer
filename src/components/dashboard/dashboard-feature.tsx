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
    "58oiBH4seXSASNY2WgWf8wHhPAgE2nSj98PE9tDaxtzchxVwGdWbxpMvpbn42th7kohkncCQzFZGEe3DgMTXGfHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JVB33t9vXoYP8wnnVFXrfQ9KXnY7vkbVYsMMiTNFY7S7svGh9d4NCP5SwXjsySc7bgiGfpob8L8SjygFB4oST6y",
  "key1": "kkchQjksMsVNpmwEpeTYfjMM9vsMyZHmEvpReheawcG6ANfXdstSzisQqeLfy2zT722H9qrs6fH27Qvp1YBXC3Z",
  "key2": "62dPkV39GbbJFM1NYrrr98DcNE5hxDK3NRRKXopBWhLEqE55f1KPrFRY8TTH8dELUdvwFzpyWBgTqUPBg2xiJZoK",
  "key3": "5kdS7zcn8u3Bnm3w33XMzMJSCCtzaB5A37faR1CGQYDxBmu8ikbSwDaVEMndkRPE5UbXTpJbHbQPsBqxzzHQvE2p",
  "key4": "3ej4SkB93GM36L1o6BYLMV8fTu7dyMxbF6UF1cCJ6ZzufY4gSV16MKpot7q3xJEVYGFxgm2mETFDh1bjXMkjwYZr",
  "key5": "QEAWxyW7xouYgJRYXth9RjZUCELkvbSajGsUdLW1ncAdukbp2DZuGb3oHfDSokHymLDELmXyQabJFdni7zfPXzP",
  "key6": "97FBkixx9qS9RWum8q3iodBsFoB89XXRiWdhmsAnrxsV1JBSaYak1an22o9WpNB48Smur7YpLUZ91FVQRwhbW2f",
  "key7": "2nzMNDd8KgiaocsRGXvfcBP9VpFuyLkKQyLu6HKSUxwYDq1ruAnTqA5sYXBziV1LJgPXkrimuANFPND4qEx5Lgue",
  "key8": "HXKii5WrhrDgcY18hbnSt7SZpK5a76gmHN93jjVkJg7Ye8jgFYH7P9uudJ19kpEjnkH2k8riZT5oZKBZxWcMEGZ",
  "key9": "4F6iBYiL39hJNMmUXwMvF88z9XJfmG5to5E4BZDCv9k1tZs9tuUuzkHnKFdisgJTwwHRAGVihg4mp9gmiqmqTri4",
  "key10": "5mqRWWarUwdJA4jpoes3UQjGRhCauCRgv4JWBaNrkigbF4QcWAVCtQfbVD8ppV6KHCNDFk5TJLbWco3vNpJTAZsr",
  "key11": "3iXCdJSAKPR5DC5Qb1hUpJd4pFXDhcfH5jiJKYri7D9hB7Hg9yY1LbZ6HLtmQxVohXBv4uG9cf3ueL8FjQniB6Pq",
  "key12": "4tYuSTr3cFLJCeYBmFPM4G4NiZ86tVVi8nqhr1TXFJQ5xRNe7wkQ8r7L5ptNJNZxySP54mUd6GMbsrTaNJjV6cey",
  "key13": "5kyMeJyRiW9okVQfNkhwodosuEd6QdhLc2K9gb9pQdJrr72jdgXia8gVanD6mMrswsAbe1n2kAWE9CudTF7HJPNR",
  "key14": "4TgLXBFVmyPPkF8iDuXUxtrFaTB1hmgYxJSrnLwm4TogNLtadWCdMBn9qGmTFqzXgqtxCmdfr8CS1wL4wZSuBY9a",
  "key15": "eBBniiadgY84QTXQRgLFvyksUvQ3vi6ZTMpFXeVgi9hQ1wpwDvEgsadzWuDKFjr6BYjAStDMmKc3DK9f8BXkZEX",
  "key16": "4qVPC7ad3FQGe8aW7bhS7ePyq8T5sg6nh9aPkqjfexU4HjMa5mCu8R7NQPPehS16fkM1PTS32rktAFKEkV2Z9TTB",
  "key17": "2cZCHwQ1upePxX4SkF3qSAwh67KiyLoVjKsxsyg2GvNn2ry9pwSuRbLbGLhEy1nhMwXqhFVkTvhxtvE6EE5U6Jti",
  "key18": "4Zboc3tYvRQENRXbLXrCm7rUJxg6YD96AFXwLfXXpH9cwiuDnALwhnUsyhJBkr5sf8DTn1Wi1719cVFTrRyL2Pgf",
  "key19": "3vjP2HVZUbr1c7BGctNbbCcqFNNMjegN3QdsGVwvrTbQCN8jwzzentQs1UfXxBAH4jg3XPxixzauBDF2mgmQYWQa",
  "key20": "3uGKrJqTc2jqLzYLv2wM7Myx3u41vGFsmyoMRkjHd4vji9nCcxYhwwajB67s9XJfbm9AMnhrmoYGUTZdzoNn6ni",
  "key21": "cJrGEPz66nEca8Kakm7AA1HJLAosWeGfQZDegzxoy5Dfzea1P1ZfKsUsA4peBtR7GQ5pikrueJZBWAcs2KNyLqk",
  "key22": "5RNLETDK4QGyct7NS6uUaRuHzVgjSbrbhj1Xh3MeQuY1ajkZqULfXDdedNLy2khcK5Gb4CpQnVWqJ6EGJuNdbKX2",
  "key23": "z3cx8dLpbZ1beZnrH5JKqucc26x32WJNVvxfC5KZ125EtapdLFXmtanGc72vMy3PQEeSr9SapvHPhViwzcEk5w6",
  "key24": "8SyrFTWiMkwKJa8eEuQjvUoQ4f5f2gAWPNyPLtEb9HFKab476QetPia4sK4Nk1tr3tcotAceQohbK6hxnphHwaF",
  "key25": "4qAqLU88mrNsHCokMFVJL5wPsDUyCq92Ady3uouSXc8YtxQx1rfNYxwHr2hEhipFdgsLB8ET3mucMMDFwiDxW9NH",
  "key26": "3PapRGA2Q2Y1tD3nPvBYhDoARfemjzbNXK9R7NGHVrCgJjf4ZffTwcZkQjyqwLsVhbsfF5H1BNRRpgNAYubZSc2a",
  "key27": "4Ebo6WnMZBZt9u4iP7JRFEbUVidwQFf6YaM41kGCFnhGT9ws93rxwjLncntPDkeVHTqDc1dWxcHxAET8NBATFAo8",
  "key28": "BDYsqsjgGaoDm1tKHJsztQg253xC8HCEmHsYqBL8gZ4v5e5UpzJtWYPoaqwwiMKmEEyUfz9iicu8776SsEnGs7q",
  "key29": "58inDy3isQHiT17bzppocNRyTDexgDFLpqLX7YPbkpXufscW196Eq4J5vEDbt8msFAS43fbbrMezru4xR7o3DSLR",
  "key30": "27gP5mnwZ5LSVFFYkoQvpx27ZtQYA76teHAFo9W7fKuz5ia6xBuXhHvQeTAPmVfHxehXjd6BmJpauCehd9HkCYBg",
  "key31": "3iwjqbEVXds6AJQKTBXcW3FV7x9j9LJ1425acFJ8C4E2VJt7akwpJs5YUXS5TJ9uhUiqaV2by8Q43eMaTpCzdQN7",
  "key32": "5QBpnrJQnc6hWz8eM4avPaC14LmKafnrfEHLcHwACjD8VFXjzQnstVcwLRF842Wvg8Byse9iLCPg2isyAczSEejH"
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
