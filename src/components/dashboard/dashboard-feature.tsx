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
    "5LMy4e1HFSJaDyPgSUH4DfW4CPu1xsJdY1iYTbezB3T3tE5ZNkJqDuvrVHDV2VKvcGJ116CnKmcuKGX5bjoTLf29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AovVdmTBAtTqA2JUr65TM1d4GTk5r353ajDQ9EtCi21AAhK24WTscrtqJE7cPtrRuiZjHCa7yWna4GRQVxdf6EK",
  "key1": "5bPhZzUtsZjSvDUxbG7aAGnArBWmZEM6jBC8iP19T3ARoc1UJCcjCr9dmT2w59AiBCEA3NA9LBRw2XW4v2bBQG6G",
  "key2": "4xjFF72JYFxSJWZPWZNpbVCn8x2pHLoyLeuHcVXiCMGYjDUzNTCNXm1YzJuXqT5NzekU8xfVhoaT2d4wzuDFYmgY",
  "key3": "3Jch8bm65RSVhBLBVj78UxTAVQhkMRfnyd7dvFTttVPNpKfzotCTy43XuosFa5An4B499J2XtSdG3fGzeY34hB6r",
  "key4": "3VJdMSqkVE9sKp4uPozaVrmfo1fBbPQpoLKrvZdJ5fiBW1kR3w8T4BYWjRnQMQUWgF68DjPzu1obHCpJNhTGiP2x",
  "key5": "4D5T1gka7gmPxT6y8c7AmvBqVK3woJWhM7ghhmcmHATVxi4SxrqqK4vw78b2MHCVXUf9aeo7ouafukz5h6Jmtod7",
  "key6": "32adPiQikKBHDn6HuYo9Nae2FmJjQF6Ts8zUCR57FSfStByxyVThQjaCRKu1jk5CPiXjieL4r4AZCWMuPz3mtKKM",
  "key7": "4TSTSVooYAjeuvpiYFTUDahH6ddM2gedRcDsmCgfVEBHWitDMVbukzYT1KawHs1hJQuicZHxzygMAPx5ao1bhyTZ",
  "key8": "2V4KSH2r5zMNW9EF2KucuRoAHkF5ZNa1kkosdrsDFw6zsAxdfMXFn4eKBLFMYQVEzy9pgq7uGpgCkRYYFt4cz7fU",
  "key9": "4HqnDHwru3KVnXqodAjPJy9rACfzcKMu5rh2DRjpCZpPcfpnP24vP27BsVTrMuKqMHVJR9Ge9cdPjDAX7sCYTyEV",
  "key10": "uw3NX6SBPnwKYWHiRWHbvhtjq8Btm6vXiyhkvQtT5SfBKRDgf5HexPcTQM1NQ8J2CCksgEcrgj7Km5o7XwXo3Q2",
  "key11": "4tJhXTmXEavLXVzPBDoz9gAJKJEpPTyW5nBUMb5zXyGmoqZ4LxJsLJE14ygm4wtTH9VoB8toBNXgkzcqTmyTWnCp",
  "key12": "3ejQxU21bEjYrjSy6rHtGgiyWgdekRe7zZdMBmGeAwNSizRQEcuWYMHsUuEJ7F89RsGduHzx8zCRwmcN3x3xExFj",
  "key13": "5GgjWJ8Z7X784pJ7bdCDMtSswSUVuFTBgu5Gwaya4ggfKBg6V3GxHUWkRp9nkGAJC5syPhZqYdjYY7pvHud5oUXL",
  "key14": "5mjuhqaFpCdBE7RCMhyq7nSp1LLCXZtusfz1LvwZ1dnnaHkbQjZhzURnqQtwJe6r8PTab2uh3HBTi7XUmNXuECg",
  "key15": "2bZYcFVF5LrRAZRHEoYppnuWRugaNdBbvw4NHu2gLvh5ZjA33JJk1MY1CLNnFj6NwsMtgkB86YxVyKyjDyp8QAKk",
  "key16": "24BLbbGyHETjnH1fCWGe5oq7Rz6pRXgGqNZekMJDMqdpMn8AJH3TegRh85tnurYtQdS88VVQQbjzQwLsj3t7GD6i",
  "key17": "2cM8hataWR8ioLjegiebrHHhSHNrK1U6ByqAUDaej7uq9YNqe2hBdnUXZ1yDXPdLP1FthSEasrgpyHnhm2kQFYsX",
  "key18": "46ysLGnPwZVo7qBm24CpjcmFmSVFtu8pbfz8JaGujjMkXSQJWqewAoahySFnN2kafyZ2vuNz2X812YUxfUTs1RYQ",
  "key19": "2Wi3vLKz4opLgA9ytzLVPZFgfLxyARjLf8AiYZRmdm7SQHAMcYWVdFx4N4mPPdr3FPyUHVRtwrJGM1yYBpL8vosZ",
  "key20": "38PUXAL2YHcCZqsVfPAzkZJxiveb5TC3XZ6tap89D3CqhYDoYduaUVveyb4fTwPFym4Z7cw7izMkEdk5sePvJMXk",
  "key21": "49ZSGy1zL1hah2zRHwqWbEZC1ZVA4BdsgpTbPhWkEvwpYUYGuzwjsLxsVZt7uhbGSgKA29uZ28jgEAAaEBfUSLni",
  "key22": "2RL5UGmV7VsMTnYKMDwMVTGZiwh7Gb2uJ5c5mWH2wx6jZ8AirXrJV4jrwxK1G3w1KqLBxRMVWHa6TtMszMgvhpv8",
  "key23": "4E34Hkgv9UE3azuS6BGQsG3TtqfJ6LVu1QN3gtf3bxS8YjvbkWP7zWsUbKZ6uq7MZBraJcs9J2KY9B9LYeGpdEnT",
  "key24": "3sN3KsbDPATfLQY95HS73UAhAFWYDUbwTaJ3LwTB8YGjrUjUbyUvLJa9UzDJCAgd1XSBAEQDrAKcFNqzNcAx9X3k",
  "key25": "28UpUBrjf5Z52FXrLtVh2Q1GhX3vc9GjK7D8UBYxs3VGV2e5RB3qQRwGmebvbHbnJrZJcazGyqYdoeWRWPj2KTzB",
  "key26": "3gU3dreRXJmDPviTZz6961QzYDRZDjQicXTJ3pD6vsEctwocoCdCDQZ9RFc49tn3iTvkF8k6VkykuRp3g8uAad8B",
  "key27": "TkWVMkguStXgJZBgCQiyg1LoZL7SnJpPyfVNTUENZvdbCUoz8H3q9EZWgt4vb8NxHSwAiiVxVUaLz5Kg7eu5uF2",
  "key28": "zm1mTE5jdCYJ215sDVMhpyeMrUTPJgci9JqDtJc3HeSZeXLpWbmhPwQ5BEMXTesEU6tFQ3ESaaaVxCenfFGykcU",
  "key29": "3TcoVuRQiyn4TSm9Ucz74Nav3nycWRZinQBKnG2XtF6aa6fgHXxy1P1WpvEEdy3TXnLBj38Fk3Egmikf13Lq6sHX",
  "key30": "4YvJqXqgdKnSV1GFuPWeoBhe9aozvz87fCiTSwVD8pttEr5gSyAfAtyV7C7zSsmxoEtkY5gbgNT5cTR74H6Gj4kp",
  "key31": "5MUh61awf3wyjL3NKKfkpfghNxnBCVNC5Z458JwKG3PYT74ujKE8tXDwecRSfVdHAXvabNt8q6Vk2d912cHXxWCD",
  "key32": "4UuhGo6FAnNjitdJL3tvt2BCxSwDSyL4PLqz7VTxg4h5s8afDLbMa9aA4mun8XBLFaTi2WbcyGWLKhrCXc3HEPYN",
  "key33": "29n4YB539jDsQNTJd1F4GgG43bvyhuqej5vs3WUuwnjhfEdTx6tvRyiC3LMSi1KnTbhFbJJsiPiForXjnFdzKzF2",
  "key34": "4gQcnKQhozTnwewVHXmjcrAYLRkCNY5TTV6z3uHbEnybbkHc8H9ecvLeLW8p2Htb2uMBGMoEDWQfCJHELoGUPapS",
  "key35": "2AxwZgCcjEnDVLDx6xU5TcoP6drdqdM6rdBZ8u8gaovz4RZPcqz89qjSmS9d8ypYw2EuBFWw9ftkdKsu2R8UUN7j",
  "key36": "21rJ37XobQr2iQ7irbnPZytSMHAbuDBwZo6tWN1HqxW4A2D9nmMPDfA2kkVYv2sJBrK9XJx7WA8DqeQQZKbCC3wz",
  "key37": "38K7AsWD4NnnS3ZDsYe1ka1tpnQc799yHC9ARwM9QX3yjcBV7ZKMwDoYAXhZMYEhMwNdGgZnXXbQ4hB7PNHKj4yu",
  "key38": "5LB32oFUUh5LW6eFabgfUKU8WyD6AMX1Y9JhZZeJrJofMMe1Toxv76Z59AuNb8cQBjxZCgivG6gQfyoaCVFiSA2",
  "key39": "25NrWFEipH7kqcJ3HAFqPZKYqXCaQPjtS2cgYHRrxMD6yYjKemH9Fa46LDxEugXPuCgwwahq19Li3qsd5YoVaG4W"
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
