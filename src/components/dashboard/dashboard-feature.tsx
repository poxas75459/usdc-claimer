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
    "3FpUYGhiRqBRyCYUX6RGci3P96K4AshNF5BZEWtn2THtDJnGKQw1nNMQdEkyK6fupELnVuGD53vhCgFCzFXNWX7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9vrcai5aEVoN8XANQdD22H8J3EUTqUtAjFBNkiHVjiUC6JVfsZZYrKcaXCFK2izRgoECuZRsGoPdKaj9yYzwXg",
  "key1": "oxixqrdyWrRcv9GsKBAVCJ1m6RGRUtqqTsD7fmyr6bmBjKy8i8eJdgMSpcsiU8epc3RdrSHcjt73qx5oBaPBHNV",
  "key2": "47whexmkntKDhVAdtfTQjNYN89Mjh3Uig63ccDXWh9aArtk28Vso1MR9kiHTka8GNSxxHTh5cwKdSgXEmu5jN89A",
  "key3": "3ZYzdDASg6x5An5gJ1BSWMwBi8Y7N4Zjx4fZv5pVfWVCCeZ2scJTTLj4jP5GRLd3rShLLQ7NsMe4HnqYc5bSeMTJ",
  "key4": "4ajr5UUjwxa77yKChHv5YvvUQ7gkx4HEebyUHbM99Wa4wpQqyPwX7kptNDADeGRLCbkGanxt9J7fdEnEHFf2HkJm",
  "key5": "61yhH31x4u6ar84cS9cngnHbeRhngX827sJPaEUkd2f5AXRXXTQG2SNfUnijqDKQ6Jw8MdZ5yNHkAScQKgYMPZ8s",
  "key6": "ZVZZG9JJYMZgv7ZP5KhseoHjzukM52ttUBhdDrjAqRr3p49o9o5QodpDAZXjRAo6743cjRVH7SK82AvyzA52h1j",
  "key7": "2uQvC6oaDXxD6DxsbCypkrsLdrhZXdjZ5fJiKi2312aGHJ3p1f4SvoeziuwhM1M5ET1GS7mwb8veipZvGpV6SUSc",
  "key8": "3wvGZkjGgoBwaKncDmqx6SPujb2bqRBGRfz3S11ft8fm5THuJ7cXYrRtQhLsMATssjHNTDEcUiNpYMNx9HzhRLdz",
  "key9": "3ZmnwFtRYB7j6267RAGBiH4jN9yJZ2KqKXWTi4gsq9HBRzhTHXcSsRRY6uhQU34AH6Y7m6y5P1ULbGpJ8SdtWQv8",
  "key10": "2dKfj5dQjwxr37cQ3id71LHNKJ2gyevc9K4uJfWPFnPhzy4RmYWh4vpcPTVaCMbhFMRbBCRqBC8TZtHHcpY7Wiik",
  "key11": "Rhfen2R1xxkiQ8gc5tozZHYZDUMVFrcrMbe9Ba5UBWiPryYYXdvBxcHapRUSRVA1qh9GV7JzXQHyfnsXxWo9oyC",
  "key12": "56n55izQKYr7y5c1cyR992LTuXSdQvA49cBrveZAPTvRAjPq9hwDHPG6HRBKbtwnscDoWUqhBXJ7Q5N8AMCB7Kco",
  "key13": "5FGhrUyqbxm4VaGycbM3F2Dk2B7isMJ8JVeUen9eVaWs9isZcemHFgvw6pJqwk6AUVkDo4PwRCQFqAVcKsoidmiz",
  "key14": "4zNC9Mtp5wk7VtzGB73qGC184fPVpfDJ2o5MXhawJMx9ytLzeT41Ut9NQBCHzuCpL9goHTXq9CrmHVeaCVBgJp6t",
  "key15": "4PLqnu7kBoU1FW32TCXd3Ax6RZb2PXk6sTh5zNao6rf3TfgGJwgqSwMpeTAutt95g6XRqN2jdHEb2qxzYQrLsiqB",
  "key16": "22yhoXSgxif3VeiwaHWtbUTtcCNXoTMivpw3Kp1ENewfh4uzaroKU4qCxbzxUXnXnxEMusHkfF8djAmkNssJJGPn",
  "key17": "2CrorhmuySoZRcMSXhuUkzF6Xe1c9At7XJeqd3gYgjoJdRwyb9e5LbT8abgGsy5VXF9fk9muLef71GqcQ4Dc9sLF",
  "key18": "5H9jMXPAfT9C4TGLrkTqNirrx6TDWUaTNJ5yED8s9Qbjm5oNDayq5JJhcSoYCNjLBCbX1yhPErZzM5GcG5kpsMCz",
  "key19": "5SWMeeR6ULJ5RXwKdSAJrx4EvzETdQiEUHU7gC3nRDCX8NKpF3u39Y64QvQAh2UiuCRmdiUtEqaGwXXgPCwGUa2g",
  "key20": "48HK89rh9HSEnYnVTfCNfH6T98a4WZ5J1aWJsuo5EHwjNanz7jFjjxwqVUuy7B7ZaJse3KKJF3oS6vftnRnKzAKi",
  "key21": "Nup7vQa1rYdhFt7pieLH3x4eXowUkPRYg9hLSzBKugEAFeQZzGcMm4NtXg5UXaSTbxDif3PqX8FC1nCqr4S6i3p",
  "key22": "56QYmNVKJ2FNGMR3GkrJHQBjSxA9gNmmPGcNJ6hAZUTSwtZ6HsTtsQXpx877F9s5wDUZDJ2qrFxnDeZ7MJJ9uD75",
  "key23": "26xQmLfgL58qmXYQ7PCRED9eK3cTev8XH7G8XLM49SzLFkPawG3zxQ8tCugmvThMw5KehFnWexHqjpGf7K3dNhUd",
  "key24": "5PftgrED5e2kBMFv4z74VSoyKHnfytDGyC92Dg1oruxhasDnGvRDgxs5245SXTU6ax71aRB6cwYmiPU7LdjHehcs",
  "key25": "2W8QHiYEkhh5HcPCGysgVibk7PjLictEcTXLtvcf1CvyrJ393xNxrRQ28YB8Cxo1jsiekvuGLUC7D7DTnBzSENxE"
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
