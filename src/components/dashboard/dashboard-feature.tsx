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
    "5jkjxC3NgAeqdgBovjNcRKPnxDtMP6uifLWjY6HvFu6kWFCMxPKRKpYg5HBg4WRo8JmozP7cg1wir5a7eksBoCFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rj6dZT7YDDu39S7gCfGv7a3b1yw55CZzu7fMgEpkEr1rCtus9Py63T7CM5Efxe6txhfcjgzsT1swbCVsCvaMQDS",
  "key1": "5yEzq2qnyBrUUPM6gJkDhVwxGHk3cn72wFfKcLmJynGDbbGTQGuqU9aZhSQGrCmK5tG8LRPF9gtwwcddfab7mwYu",
  "key2": "4CAg5zbRMc9Tiew5KN4B139T415U563qo1TwLHvjYrF8QLJStL15iWzknWwXsJueWLP5JvXAVF2KJMZeXfqMax9f",
  "key3": "4EmrBhEKbwPLkQUqqLRcvDV4X6h7NzUjsWjTJjYoxwXg9L2avt5EdX8QDVn6BDmUV7TPvKpBzCkBS2GUUAEM1X74",
  "key4": "5E582knmTdj5u1sfABH64xKUuKmqYL5bZnNckKdak3Hg9j2EhXspbnath43j2fJrevFa3pqwSaqYzM96daedRfMe",
  "key5": "LYt7d6ZN1kW33P55LPYJLLSfDcw8j7PnyMa2iHovruaeH1oqaLLBgNBZLT83r5H3dykbvbrbPu7QPdwCffRMqwf",
  "key6": "2w7oAiX1kDPftjyCZqCVpSLy24QH7UojK5vC91WRWBde5WS5qoohtx5zkqjhc6XXq9LDuASUhWuvjFXzqDPyajWG",
  "key7": "5S7Hh6SJHq1EVeKPZRcvZuAzWEW4nnM1KHkqFQXgC2rRLJUfwNLSnvnyA5acM5GNxUDAeQyA5CpTBZEaJwyKjLVH",
  "key8": "565uLoXF6Ce1yJVzVpDG5mYoZaFKtw1nRVdXyF2MSvnaBK9QKG4iNka6fmY4CjtKXzUu2WgZHQLNZyCAHuqktyRK",
  "key9": "3C9pKRkGRKjUQFPZ3y87iRAzuZMoqHCXAdw12Tda5bPjYvZh626mLzZGsAt2WqqUtUYTkfePWrw67WrdipLMnmfD",
  "key10": "21oMvEyu1WiZZXynEqn1VpusP6owRnvNPv35UyFFz5A3MvDEohKjkro9xR4rBaopi9msTM62tN9XvydLQGBtyvVj",
  "key11": "3i86Xp4KEk3rQcuwHLr3dqwMK1EP4D4m2hJr2GvvxVty9q5G5N8Ngy8CwxbVARV5o6Y9wUcMj1Hj5U8bU9SMHPEK",
  "key12": "3mescgPHKvYCjhqKfzN7kY3rSLCtEqYnskK6RyF7VKJaCq2wm3Sfm8fGaqaa3DxZHk4fgQFwtxKSf92jJpQuiVC5",
  "key13": "5HdVzLBGnBXxQwhALGgqqRSvyjRkeEwSL3C45aqu4cvqTgXmFS52pnPinDrAweBEsbjQoWyyah8qQjr1oaPpbt1J",
  "key14": "JWSUZ8zga6fMQKUko7NmJ2khLhmxZd4TEcv7edrsHfrwFGCzwnG6rMjnBem5gSQGKVygwzmb8KDB6mV79uhCMM3",
  "key15": "2YPwCqBwdjBbHDF3aUvoRQJvaZo6y3dJKbMs7HBdMxt3tMfwTh8NnbN6UzBbFXw2DCcTEYRwmGGbpDC8S6uguKAA",
  "key16": "2pAL5ceHzC8D4B3oQpP6co1vSsy7s19p4SrvJBsGwv3wMqASYcTmy55mTQAP8owiF5vWjqfm7xqRswCUnh1Fg5Gx",
  "key17": "3B2X6uEnPaTVYxRmSpriHJMBVqsrtABzancZk9ZejpBAVTtXoVMsixVXERSkcBpys7my19xAHFXRZ1drVGSz7oKd",
  "key18": "46L3doQE7NsD16RgmNskHEyiTJ2oQaSnTB9pC5a2nfTu4Z2Huwms4jUk7eeaVV2Q37pGURnDQyBSW78YTQY5LSxW",
  "key19": "5DAUzjmdWTksGNoumhpBrx6AgTZoKMgi6sp3j6XD1Nxmd68nEvEG1rmNvdLgauRKYJgmt2sBnfDaP8wrrHMjMuAU",
  "key20": "qvzNF8o6fULGdEd9DMx4fkTyLgD99F52FaR4azzpyuHWYWNK8UYXj92b67vVjw9HdJKugpbLAbckKWR7QGZ7nhb",
  "key21": "2v6BiMbtuUGKMUs6UnvJD8T1YyeXStyGxHxQtXA14jM1Vn3kDPeouy82RPKS5Rys4hAcgbhv1civZkq2k9My99YF",
  "key22": "2NXZ25gtqXsCDZkCyYZ3z2TGZG4dznzyZrwwRgJdNUNo63pbejkDzDuSquoJbziikqzDLGnMJ855ZbJe9qwNvMXA",
  "key23": "5Lyb8joMQfMcwUnryUUoSXWsNrLWtUF74zTMZzBhw8Y7K83b1XJhVNTJXUYbwcyCMkYuvLKPT7AiwibA9ay5EgfP",
  "key24": "4Q3Z6ZB7TSXpAJc7JpmVspv3nqt5kvyA3NL7CxZotNmGcdaXx7RtpjgPdvDbGmvvQdH45x2vNALiiBKkazvsQ2T2",
  "key25": "3buZPivfMmzUXsQqk1tp8v3YvBLd3VB43mmeHubCLy5xqLsdqxbtyfsCjCqRsDkh9Z59EBTFmqYGFK641QjDxrwk",
  "key26": "2JBkxS7EZgFkcj5XyatXxE8JDxDRaMxNnQb5hkNVpHqX2wGNciX2J5ukCzZfr5V6L2kS5zE1oWzoXLU6SxfrC13D",
  "key27": "3JYMky9HidUQmsHRNXMPiB7eM62V7gebpwTNSaz7UvVd6RzSLP8uuoY5DtGqkk4ehkbsuhoG6v374p6umBXVhB8V",
  "key28": "2ZESwihGg5kPhjadTcXsGBXLNTJqoBdz9KMEZjwo8kFHfgXkSZfvDHAC9s75mZ6dt6m71Ua49H3fwCjYtiCcpuBc",
  "key29": "5YfPV525EeobLtdkhb3s9XhwGHQ7UYhrDi6YoZ9wfVL54Had3goYQLfPkdhiHuXyi1dp8mZnkctJWmx1Rz82woe8",
  "key30": "5FLugziDP1sCqFMLJrAAk6baddrgSBtLGa6A8Fe1xsW3vwkXpFAyZJyayYp7JmLmajPKCXvAQ5eHBBoQuq61B38T",
  "key31": "37VBXfLVcQbo3Dx5DFVjR1NiGHdzNMPpQnYpwtrsGJDTk31XyhuHBAcZDh4mPv9fo6tC9tcwNE2Cc9ca5ixrgZye",
  "key32": "2UeLMMrUr7Qye1n5MbVagWYasNgqSQdRyTYUFKzkUqrrSUAexom7tJ54BNkKfJaMjPRNgHHTDhzetgVXD65SChzC"
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
