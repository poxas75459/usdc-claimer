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
    "NdFAj5p3iyWczeC1NXNZyQZ5f83Ws3HweirhjHS3XCCE7ihSk39uE945CXHJAQcuwWMQ8BvoUAudRsnj9VbMKbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62UnjjVrH3ka6drtFHZVcFaac8UVdowuAD4VWw9ubGerMoHAcJE2vkCwzu7mok27UNVk6gvMtn5m3d7DR4FUnRuV",
  "key1": "4T3cFzSCFpitBsxDZrNGQgk8HT2wwcifcboNQKzXrSnoN5ZfmDeNtEWQf6A87VrFa5Z1btiWSWD2byNPXARKUnRF",
  "key2": "3CYRWx1fwd4sG1EdHGgKG4nGj3hUozc5dsGrQi15g6ZGuMzmWLyG9eYnenP968fYGFZNoPydboAJGiKb53vhUqzi",
  "key3": "pcmM7tL8TgsshAcLLoJhcURuWctKkgx7zU6QEVXUdv9cNiEmZUeUG8JEyQLuYQiM17CQH3Cxm6YzCJvXTmxWXJt",
  "key4": "A9V9sggPszyCLmRTcR32QZbUBVMSokJbDApGDQfAD3NveWBRyAZeT8uxpRmCEa4oPDAB3YSr4mTf4hg7tjQhnZK",
  "key5": "iXYM27E8TZJ2tL9hPe2hk9u5LjKE9ZuD7c1yE9GTnB5ABcXgtHkK6RcPJQBWss62jp57mPV5wLrhVysaHhBT8xh",
  "key6": "5Qhw5F4PuRcWi2vAHSvTjkSYeNMmjFhUbLfuG473zs6kMhBVP1n2TPYVLLL8m4qyKNcSVpvUxZkvpQ5E62MTqvfY",
  "key7": "3Z9KngTep59jJEj1K33v6Jb5AKmtGqbxow3VvoF7FmDBZL2Wj6JNrW4zBg7QGk6dnnVfTd1SZ8PkXW93ufXkXT5u",
  "key8": "o6KLBxTNJxr6LhweggsqXcnDJhq8WCzGYC6QMapdsGirUp2jBrZZGotJX46EhRrbxxmKyvU938ugvVBQHKgLLrF",
  "key9": "WRhUcJRK1ADsPoxjAZJmNCoK2NLbNbc7xisojGvsz46x3AWCwU6FS9ai4zu8q4vY56ykBcvW1ZsAHoRCAHSxT8Y",
  "key10": "1EiTxeM4ebqsQZ6RcjPqUPVRvFPjuXxYnMUeBG1w3t8WwzFWoxY6Hmtvx3u3h6M1TRuFXv6XmeHwbV4gSBUvzsF",
  "key11": "4VsRNQYNPGNSVoYnQPSnKCrpKBoAQvW5u36T5N2bf9aHoQGZbAdxsWNQGmy9BZJuR83uh6ENKRXmfsVT5aKbgJD",
  "key12": "3MD96MjcbxGpJmynyVmJwAEHNsRbVnBRTR4zZd3Qq1CgBEvdXkUPoMZox8tqKLy8aWPpD1hNZ5UFUZogJYAUDUo9",
  "key13": "4UiCYAUP4a6QNuctC4XNJFg1ELmknEqUFYobKzyNTsDpsfSbr7AXhjRrEdQEMEATAdQbzjAFWhedfwotDqGfhGTy",
  "key14": "4Bkkwz8UmXjpAPMcSXzcKJwKm3uXyQ2obi41dZmFP7biKr8X9J7NQm3QQ6FQzCq4tbmZdH6WcwjwstezodRD5kdF",
  "key15": "3yz4E5cHf2JmcbJUxzTu1jUz8xjYbzFXPdpAooinst9qNU1eHvL79JDC9FNgVWPL8JUGWg3JqhNeYMVg34tHwvNM",
  "key16": "XUxX3NdVQVdBB3QAX7YEFTDkZFeHofDPxzA1C4LDqExxK8FtAimdXbozsLQHm8M5BdYiEhqvw3KTkpvWouMHGDB",
  "key17": "TzjYUx6FiqUZndsn9K3QYQaRmaaimr45vLwsuuuzg2pq8kmXDjc9NRgkNScMiJt1LmWwLfmiaR3DFENTfhSRKHj",
  "key18": "2EWp2yCXxeog3WFPEiBEV3EFjobvJLWxZTUb7iWqqUeKM7eZuwgYTH2Y7zTVtoJMEA2Ls3uXXVjWD5maTtpCKNQR",
  "key19": "4Wac9wrPQcgwRDX4ZiDscJ7sYNdSqntf1tnBNwV1p7KwuFBXCFcUigJt2wf9gA71Cr6gU5JYfkKe1ToUjrrgrPJZ",
  "key20": "42HnHhR8kVZG4Z6AFPXjfptsU9coAYPmqY9AXZnbSkpNA4TicxXBxgMJJKmBKcy6U2TQQ2SfLSGUjVvhnahtg689",
  "key21": "2KnBFikbnkTC3QUJEMDYHsWGgf6L27bMZx8Bx8zZ2YzLS3EZAJZWpHF9QezUBzVigyAUz41yvUSFa9cibC83Dvm2",
  "key22": "2gTFPcR7pJPxGAgZ9L4KAwhLSAcMTXNhJW4BQvbJzqSBwE3tYQdp65dFJfAbSA3sBKtqn59wL5cdCiWdTa2SXoeA",
  "key23": "647Eijyp4g2HufACp8mgjvmS2LeoKhK16ZNp2dTgKR9jcVh2N9qUTDij5vXQPrHRuyr7SuiFPg2C16uA2aujq3pj",
  "key24": "5NTQWRw2obizSNVeESJFg31rU3XqqzG8Sjz7ESGQSzPNmZD1zv7VRfaNN29QR1KMrKEdfQtdsjUfgYexM3HE8cSq",
  "key25": "F9LVy8Zpk3EYjo1WENmUYFQYdvK1hHGT1BNYhZcfvgpYvo72t1tHD6MgLA2bpPcPj6aXHjUypukyHW82a3UEzjZ",
  "key26": "28NitktUZXnPDmHa5hWxakbMDTqU4fZgzTgvd4VqCBtQ6UzYSydtFzhj7H7ouy6patdVkvCqEcBs3gZPPyhbSNP6",
  "key27": "4KuvqkGrgQvj38dh37fS1D9VCrBjpsiGh1jv5KvSKhbhG71J8ccKSJ5Nwv41cegbngcjTkh1Eco5QnvyCMYc7Vks",
  "key28": "2xFqu3u6s474zFL8F5dqY9qVxHAAw4RLjroZa4For46BUjn7MpijEc5ApH6MsuoCdYRfouueaPAMXbD1StM2FLaN",
  "key29": "28XPdRNBCHCpBuLRVpUsUJ7VwbjC725WE3kwYqv5NS3aGumnZKiUUiXYDAmW6cKYf8zhQDMbfQcM2FuxouhZ24tq",
  "key30": "pebBGpwH4dfaNY12g2TQzgrevdwJqA1jdo7RXLBp2BxWNJZrgkUqRjGEA7LdJuuShAA6J8wT33o41yX73hLDqDb",
  "key31": "3mJbu3M3W1QQZN4xji7tStZaCTvFVpAsrnTD4EdhfDwGGeaYZuM4z7EQgL2ng983Byy9W7rmx3DoYByZdixMHMFH",
  "key32": "2QK3wgJJn3yztPEZw7hMsyRUP8Zk8ceNuBUB2XxLTZiRxmgg9EXFURN75sfjftpK2WXZryTjACQ5gCSujQ9RnQXy",
  "key33": "2dNKnEwX9o21bU9BeSQUZkv7ULtFgs6cDsDhFdAtLbDaUQPwZu1otePSWq69T84J3GywXKX6xNEJ7wmiGCcHkobH",
  "key34": "4roEn4WGgSGtjBrzbWj5ALQakfzjiDPQdUWmhhHtNJEumKrqgB2ePwzEgJiDYFUGVEgXGVXFN9c7T7ApST6aFuMC"
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
