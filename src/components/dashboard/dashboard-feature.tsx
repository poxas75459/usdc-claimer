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
    "2msh6sDC3yKRfvkBiSzaCLaeLHzvimGUFm4gwPxXEJ4AziE91mQYpEd1DRAT6TyRfQ4cgFNeGSrafQcd8sUkNncP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ayox2GDdEdFMktU4s4MBhBdY11uq9qjbRhQtsXtDCX3yvQ6eJytzNX5G5eUtpQtc3ZLsHwoqDZbPknB649cNRY6",
  "key1": "5tWUrVDww4vPPeVH7Vi7rXRLmxGb3N7ob4Ck3SV4ojGT2YwUiP2mLarf9pL3gS6mcZzW6ueHAxVEWCMrj5nS5gj",
  "key2": "4zCFV9gZkfAERgCFb11589GYudLdZPd3G6u9wWmY5pcXq9vpnGsFUY9PSW6KrZdWJw3hbALKP2seiLj4GgetETSB",
  "key3": "5XnRfeN2rTjSKszRmxtNHDsV5uZFUzLQny8KzPrc67shjhFWDjVcUqGNSdDpv9zzuXsRQtkaJJrPxanAbAuNsthz",
  "key4": "KSDpcyRvRRP77FvBx4RSHMHsD4wFkhdvwBpTm8Nfa2bivvaCeiUAFx4tipKG4wKccnbpy9kXwoCmXdzwUpuVQa4",
  "key5": "5cTb5UrBpqgbirzdZKMpys2jRCGMU3d4XNekaoJJJLmA8BAFSUmd1nfqW3HhSJFrtqkr3D97jBP47Pke8KGj1PcJ",
  "key6": "VKszDWDoptEk7F6G4bBAS3TNV6eLgnSGL6YMXuxcFzns3kQbnYGPfjaVxd5xv4e9UdrLmpqnW9YNn9e6nxrUMRv",
  "key7": "2Cxhuf73KiN4GP8jzU6UkdkoFwbRjoyAXJBdxBSvdJm7tCsMsQiijqnsch8or4HrooQXr17B5tKWcyaEMtEcwPMD",
  "key8": "4gUourK97yNMW3YmNaWnUcwNnNokhjvXxEUcd425yRKxydKQsCTzFPzgcC9wDKmJH4RXig9c9tPXkmy1es5wuGJ5",
  "key9": "4Z8tSoGk5eMac865zCPKdkmbTawM8VweAPApPHAwxwLguswiR6kw5ZP3UGQVH8zKEgqKEvB6539qXiEQW41spxg8",
  "key10": "4RKg4ZeQvkstHXD8N8an8ZPRFpauCEnxBVCsVSgcXu5o2jBWkHLSvVf84p6iQmKhAN5KbWeUNtmnd7hyyJyKTsUR",
  "key11": "663k2bgcYKJ8vGue8Wz73Yr826KmPr5XBoW3MsX15Uus8ZHbf3QcZKprdWt6RCxAAcn3NB9xWeCJbKmziKDKhjaW",
  "key12": "4KMvkxJ1Dx3icrANkrfuR97niQSaWYzm2MPoMePQV2vNxFvuUnuLwMPk1Lpvp3YftM1ncUxvbou6Ljktxn9pcHkE",
  "key13": "3KHPcTJt6dhNvgTjS8fDRKtGNqSqeudGVgYHYvHLP4RCLajEAuRKUwCxj67znJ4qx2FbJ88H9kEwqsqok442b1wN",
  "key14": "2h8fihdZusCPKwdAijCT7cjUZjG6anPC6LF1nxtsaYEi1peT99K9u3ApMkdcCRRSbntptbTaafYd8LDTFxj1FSs",
  "key15": "5syjUw7HfRtQEwiiBCjYicW7gtHqizMyJmVDme5muvgNiiXZBARQGsycK9LdKiu1nytWmWBpqeguDjXDZFrgzGEK",
  "key16": "o9ETwA1Axw6Bb7nECt86KMR6Ghqic8ZsugbWjJHBEw3MaYMAdQrngwj7SoGuCNSVQutWPriAbLSCCLfGZpEaMX2",
  "key17": "3SgRoq4eUNWcASWA9vyghsRy1GcV1P2BHFCworJQwcsFqMVu9qUYx9ZsLH9AvqKg9V8VpJqRtfiJzEuHVdccojLw",
  "key18": "58otPMyXwYPVpEfYLQieTEFUFuvubjytipsqJ2RxwGAusb23K5M8isMwokTax3mqRSivR1MqbxsNNJFumXeLZEt7",
  "key19": "5Bq8Y1VxyNiZ2EcHat1JR3NQnXfMmbG58YY3eL6YwYdrKMrD214X8Mg9dMR7Z4KL1fzowLtNjbrv58xhhPtjbXPB",
  "key20": "9qhffY1m2JbtD5DCTQAcpfHfjfmxQL7MKeRvW5aunE7bnnZvfxAv3vMJP9PcHERB3asjwduhwcaKMEqe3FDCxbr",
  "key21": "65h3Faq6DYmmYvN3WoXnShCdGfDsqFdCJ9XsdLL1hC8cJyEVs2d8s7ja1tpHS2J8R1XCNux4FG5YZK2Fx1Bnx43M",
  "key22": "Li5bVt8gwcbj4ghwtYerUpzK2BSGqnw4hMPK1i7QUbT8LFcz48MGQyh4qQSVep1FQgFaBs2sB5D4aAkcSogFbjp",
  "key23": "g8Qt9Vo334MzQU21Nj5QcCbmePXvjWXjsLBanyFVJxZhAQvkF4oV3Ba8WexAGAgeNzHEnEoBqPYQytLd7swPkDR",
  "key24": "53jdeYqNMRvDe4tk8w5dauZHDrHRMTbMraNhw6M47W8D2EigcgfdUtsmPs9cTV3iEzqJz6D96HRBqHrd51Pdj96K",
  "key25": "3fo8ZVZwBDc2tjH8uYVfzpfPcCwDYew6mhts2CZGg1h4ZPX43CQpMr2B7kyT6nooRAjN8wbjtvMQX5VLBrp2BBmj",
  "key26": "3j6ivmseQ6VddZgfLS1JS9VoUbBpZgKsavNbSXRENMHhf9Apa1x2NoYU6hbCazpuBZuVphBktm67vhXT7gpUhoJL",
  "key27": "jvVv3baSeHL9omZtxbKAsqQz18eSAPcz2PZdssbLdcmzQbLXzayT5oVxzsnsJYrfmnFAYtB8RiJwXbM7t7M31yr",
  "key28": "29ox6cfPiJjatU2FzB2m7aQ6FCxdofZitQzuCppkSfwCEQPRD3dGCDw8C6u9wAGQvxg3Mo237gGFHatEwcy7kQ5J",
  "key29": "u8u2JGSH4MgshPk5mjGfRMJj6rqukrLWhFZPfCoTv1dGK2BsMfPScQHcwyXd5zZcbqJ9qHKJJm7zJitWJMayjZN",
  "key30": "5gkPKg7RTG76tqmGaZkAjSooL4iNhv93zSJne1V2zughEpgRHC8jWtCi3AraFYgLBd7GcbZ2DJPsK7ahPYTuayB3",
  "key31": "41dnbpFPf67WRqnfTmn1BdYED1wNRV6vQ7TFGXN4bKESwv5R2je72zg6J5ooTwhPw7XwgHU8pcxTJKcGciv9h8Gd",
  "key32": "AgaziUXUKpf2hfJdfjJkuwu1zZ1CK9f8DTuiLugnzAnhzhAEF2u8RGhfWzKxjTgPKn794oMN6jEBunu1cNWazL4",
  "key33": "3Qoc5GDPyXwtALwgfboWeAVfty24ck3dRS2BFmaJ5dDxmixRzzNLd659oWXM3ejKk7hXrmrKzQjKCA1AQz5kEYT2",
  "key34": "4BkcHpuSRTf2izxojJKPaa9bR9vV8DZ1y7sLjZ3v2vFFmSuzg1yacTa7kCWy9oR1qjEQwUm3rY6TzJ6wUPzEbiyJ",
  "key35": "2NihPuAHcj5wUoB9iNGqdnq8iWQHb4FyAUVyMA2Kq6hh9UUaDwyn5joqgSrn4X3PvxMTfX4BC7Bd1jme2kTdKZAE"
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
