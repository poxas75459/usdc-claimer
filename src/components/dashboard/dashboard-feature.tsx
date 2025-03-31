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
    "4UEFFuLssjt1XXuASAwygZXHuz6bZi6eZzdWtF499z7gPQiGkbXqNXwjZzBDMdUhXwxvMMYZyBt76r7pxdauaQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDd9SA1YGu8xfCrN8SLRb87LnRBrJWiGm4j34kRuz7LcDpzqYB62qu71mfYpVEEV9iVudg68z1j6RUufFayW2rK",
  "key1": "3j1Db63EVAZZ7UT4gRVbr49eVMEJdCA8UPTbzoAskbE3FDAUAJkTYwBAB2iXrRUJRDCioDwtBHzK7aANgmBgeNCp",
  "key2": "3ZNT7YREhndUEsTpzHELuqKkhuXwZzqP7DeVWJyiwNiXKReFyhAGCfcLrqBHEWGVwWj1NrbnJSsacfJDF7TPANpp",
  "key3": "48DRHQkBf1QKtN9hN2DtDSTTp4T88H9CTUNKHzgQhJ3RHgqV97spr3ieWnVqmsSFjkZuUVBsS3pgogsitvVFbWWG",
  "key4": "4vPYbjgbeVK2DzGvLUVFahkEWiNEX71FQiFWj4XQHthLz8bTizxvBviERWikGrEDtLoghqZyYLenwvY534nVGJN9",
  "key5": "5uZP8SwSoHQTYMcRneVQoYhKYvmnsr7bzyERwLWR1uA8PW5im1vmUcNYeExvmo43yZ2dkekMSYTDE5vaRsQJPC4",
  "key6": "5mZ8JDBBmShTNmwa4C3QteB8Z7jRqVTJJYvGmhpWyTikDWVVvxx3A1wLdexjgPhwtAiTN9ya5st3WrpH1XNBLF1d",
  "key7": "57ELpbe1n9jMX6bvK8AjV1MdJ87wg1zXMKm5nL4buxjWByrFePhGMcunKokyhBrycXUpPdPT2hMm3o3SpoJM7cBU",
  "key8": "5wZqZhXtS9VjRg3U9G2QwBVUDQVS2hrdKzMQUnMk16TQKCDmRpqWgFQHe2dHY9YSzvn98L9hQbpxcQDRAovzi19r",
  "key9": "5r12KuQ7owJLFKgrAfRggdmQnNKrP5yn86Srn4szp9p6r5E3z4jvVmMvUqbU5GwZfMVGNE9zifEqwaufny1mVWyL",
  "key10": "3cUEDRyYFUSazyrNf9bS1QjN9PP8J2tVTsc8fGWSop3wUxkZMH8yYhm1WLAqDercWAHb8KirnCnhYhwYSPz521cE",
  "key11": "53R59Bg8eAfUXHFJNL3Cxg5aHUFkAY3muvHVVcqbk4LAyqceC2EcRp7Prin43i2T8i2PFfo2e6qe6T7UbmgBeTAA",
  "key12": "2YhCdeLjcU4Dxnt7yR7YG7r6dQYdtaBg5d3sJjndEn2sEpww95TXm8sC7SXQ7RPB9ypNT2AqMfxm6UStUSkiLUmC",
  "key13": "5TVWE5tA13Z8uLB6D4E2kzvXFoc5QqD6V3y1CbgxUxTXYmZq2iyxcdd6c34dApkcQir49iPkx11puKVirF1NHfGo",
  "key14": "2HsBHiAFczbpBXpymu9isr1989Q1KvKUiP2p1Umkf5Kewf5ZqpCxrXK4j8xdwT33VgxFtCB9fkeGr9V2ouXLArkN",
  "key15": "5ybfP3jHMgkH5opDeWknuVvA7vvT6uiuSRqKy1FGksKFinAzUDK34AAVEvYFML414mGCpM9oENr1HVkXjCC7GHxw",
  "key16": "5SBH56y3HRTHSRtvNDJL9TBVSF9paFqDK8WPHFf29Y8REj6fnQxaUJJbGLvHrGpLGUW1BpqUisapJkGjLUcAa9Fr",
  "key17": "3mBbXpEiLuprFd7sFfoC9Yev2Vxx2gik8auwXEKbFzmdzkNY4j2L5Gsp9hpTybaxaW9D6vYsPCGUkxw6RTaVW1y8",
  "key18": "3AipNiUTNP9X28WKMFKyXxUk8jt6VxunuyRRnPrKfoheCRkzt8azXE26kjDoRtCjg2CGifhvnwCwPX2jbdMEfZHS",
  "key19": "4N8KabBuWvS9mkofAr5VQTc5FLqSeUboAVEHDWRnR16qZnmVGmEf67GbhPAaqU6fHRwDbsLWDR74fonYgDm3JYcT",
  "key20": "X4vSwjRBuKystBH16DyBRqGHzjkXbxNKG1Nn5mm81Q1sFdAX5dqKdyqBroZ8wT7rGvnL6PZnAmrFQtVp9jDPcn6",
  "key21": "2fTFFHkzKQ96a2Uz5GHgBTGyPNTMoAkx29k1LSLv7UcRSEqDyPxb5MMXJaSuQ2fUvErbb6UYicC5xNEaBaYH8X7d",
  "key22": "Hrf41ftH1aWd9waJLxcNy2GJMdkNUSTgAQPfGm8WEH2ZdeHig8Jyzpi7cWvPs9xdUrd2JzuduqEWsqgetPMjiBG",
  "key23": "3zpED7HwhMUQdpkLPUguBBPm45C7SPuH5ffiGo9G8DX5TG9k8zuh6i3NJBvkfmjj2R84Q9681RR3kCiYkHnAL1JT",
  "key24": "4LdE43o7gma1ZPfLTiF8kcJppUD6kETKY6PjoUgtmnQM9C1nDfmLuoXh5tft62xmF5vaTDnYaJsePFm3ui7Z4wUa",
  "key25": "t8ocwLuuFbgiqXUBEVSu4Goyj72BVfJMZVJMmhpxJC8PY4yCfZD3Mc8v2dSJRBCLbqgXGEQjGMHrC543uWhAAqD",
  "key26": "3TwC4tsPSo2N3ixUWD58q8eDTRUeWKTMLbucDJ1KyPhCnSDs1dixBYZBDsoNWd7oSm3aSJik7i8JTxaQeDgik8St",
  "key27": "RcCDA9Ac9zgW4VZGp5uzk84o9foCGRaPHqxoFtVLuZfe1kJ4ENSLhoqzecSXUanRqF84DxD771ndWbhhH11WdHJ",
  "key28": "3oMiuTPe8yopP94SyQZhDfMUavW8jKBHs6oYi5p1tSXiu72Etn7HSRbMSXsuh8vEApxY91VNLxkbm5CM2T29nS2Z",
  "key29": "5bXuQCFgJUqNv874oE9g4k8W1vQDiNaZxFpjZL9BLaVyL8yj4NRZPmUkZaR5crmzuc7P5fwpnDBSeEvnD8FaBFez",
  "key30": "4qe7FnstZvjkZbKDdQj9A5DPcB9m4s4TmVxV7HP7TqzZwJTQ4pXGL4BqBN5JNgYevf3fet4RmiNnVGXAAySMjCR4",
  "key31": "2Viuv2cSsxAMxrr5LXdGY7yasygWVhT2qCGCKKpmVKPCyXg2q8f829xHBMFEafgC7X2Lr4T9xf3gEci2vbXtKwCa",
  "key32": "bZm31JvpPrTvBQQfixHwBnavBEX5hYS5RDnzidajbwQ7inDQsVV4nTHwuNNmTn6frEeVs85g6j8pSobsGRnSM5T",
  "key33": "2C2BoTRXU8dmv47bpNKPncQxYNpKDN7WdR9uvor7fkhDsVFSFys5tKh5yS9FmTcHS6WXyUWpqvoUd86C8dSyCjAK",
  "key34": "3wSnebVPDnGYKFxRUkvtcfEF4QXKLXAp6xYzm2Fgn9at2wNBpEc6kyr8pm42LdvFsEa7t8SvsE8oP1sXB1sJowwd",
  "key35": "GiWH7wcZjre3eXqV9LiwGZcgmHo4CPGg4dDqpKFQZpCm4mV4wWN6toYeJ5S7MjXqbNX2vbWaqbHBz1ydGDmVn4g",
  "key36": "3LcjCbpGGZFshfT4XWTyzrNBLit5vjrJtge1ZDmvhxebwYCLgpPKEw7riMHvyrrCPQtzeWqud8dqGpzRd3Gc5cZt",
  "key37": "5cXb2wX7km3w6nBhd1HFAnqzdc74vRHXvtXpxRVaKzLe4rYpPAC6c943AjywLX3JjUFUKgjLYWLkMYktmLh8BwSx",
  "key38": "4NPbaHt9h7ghZ9AdyLai8PnwnnQNBjyDQm7FB5ULxT49LebZXTCq8vCx9E5shjkZeF5k6wurC7gxX47TddsgTV53",
  "key39": "63Y8qUetjpVett1jC4hsHfnibqPBZbfvUtoaVsoFttVo1fuoeEnPKhtjaxBQMP29VmPDSqnskCf25ssE6bbcAiYd",
  "key40": "3vvvTuGhurvboRBR12sDofiEHip6gASTsqQ3ax6Wsr8HL77GNicjTez6gGZfSJhE41ZWfGo9md72xygAQJeRnDo7"
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
