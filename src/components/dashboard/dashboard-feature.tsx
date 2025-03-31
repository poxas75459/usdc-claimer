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
    "48RyPFJoZEHmSxa8fyDiTHWow9DKuGiXE9V8mDJJraRooTkKtKbRvtjScGHV9u6igoE6EJVo9WmRWBFDmdxh5G7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SeFpn8EJM3vFZjWYLSgY3At9XUNsGzuYNahpo1ndtkxLu4JvGkVEzrwn7Uh1QSCnP1X18Vwaxbzp5YrWytHHjVK",
  "key1": "5SVorq9AzvsQF5Ebv1eoBoxswyPgdXp6XG1vVwNkm5NV1N86atRjxJsondGsDZ94pcwQtHh7vS5ZXtejqhSzDxqG",
  "key2": "247fsYYtBvmoUqK2LMcrM2VkgWMn4jssxg77eJhG79FqngAtuegfD7nM1HZ7tS22vBvQ2Yq7Cyztp3YSUzRdHi9d",
  "key3": "2en5sDQWxV5Ha7wCeux8owAxrhrxSYcRgyLe9YFcftH1ZgUzvPsejrmr7WGpc2jVpR1vQ6nRSFaiAPJgVRDREnEF",
  "key4": "4jjysFDW4KY7PXVbx6JC4bCKdvFgAsj3MHDUwBETZ5c8w6TUbPCqwVfnAh5KrJc7dX4itQRhtNgxky4bjt5GGSmL",
  "key5": "5jJgVnNKqidmRYnu2Fk61ZoRLJSC9dmx5bddmUSf9FMe1qfLYYXoEy8Wq44Lts3H1JAdNuU7uQmqVmySVYsZo6rt",
  "key6": "2SPZVwLxaTiXpL7wqm4ubb888LXvZkfAqC4LmtBX9NZw2sb21tLzuuCP9nyqE9K44whDDgBs7MReDEMNM3jTm7FQ",
  "key7": "3d2NKUwqERCTeV4yC2gL4bkUFnPzWQ74ZDFDDhk4oYWm53oMGoxdtDH17FyGt8VRzjRjr6KhpYHrX9UDnXxKckxQ",
  "key8": "5zm7nhD2WPZn8YcBEoLNFLNxqquhPX92iuNTWCikNM7u1V4wANgJG91AHkpMozoWAEH9E7kaj6oseNYospp4UpNh",
  "key9": "3hg4cE5FcUwQbkhY2RVCKtP5rsmg7gUcG3LRb8NMfBVVdyV7CMrYVov6VNUDBLDnZ2CXGBitCdVR3eEB6dwcTnUN",
  "key10": "5Gfb2wRYeHHXUMMhf6Lg6Rau8yvLk6sXonKSZ2tZPZ6FyRDE7Pwtcf1uHGc1bSSTMttFA4GRxfkoHXPj7bHiq41t",
  "key11": "MnSqREtSGDf1dvSdzCH6dcoFpkVqUgSMGC6DGqPfDTYeSiUdfwASFDnDcU56kHoS6RtMtGyHvCM7TtBcaHQ2184",
  "key12": "4Xhv8XZNsQA9tmETaVSfwEwrTPJwFePYKqXhJcQ1ELe1b58E91EMNZc2N718oBJLrW61UsJfLAcERVYeZG4LcYnK",
  "key13": "5aTPCopeijjqTF3QWzLiVBEnZT9i7L7eocuC7pvzkbHPcTgEu6VLjryQExkhkQxExtPCZMQoHVGLbaD84XgD3EAP",
  "key14": "3RbPmSKU91girYRQopWRhwggVxtukxAS1Te8AYJdRi6MviHsFrvYzpNRVh2HDxQ26mmrnExPvFbSoeVxCv67xoW",
  "key15": "3JLzuMTr9UeUZj5jNMpUW8fZst3sGRavVPaBDe9wVbtXB2ZwQMvoxPzbaE6AVZapNUfmHc473Mb5SPKdep76uBpY",
  "key16": "2Z6r1DenZyGFWKjVkiv6gRp8n5Am2bPRoQm6UkLNEDkB6Mc1f2fdV2fqxA5jmqYESHzE2uso1kUutcMX9Zu5BTzT",
  "key17": "3RTQPE53DuCvjVTwpEMRAPHe2EYwpbgKvbmERinfVJW9U7Npuvt3zNpGVBU4Ty14tG39ZsfA22vxBBgBfVPkXHY9",
  "key18": "2fWkwSC1PZpxCUkVUk5aqF5JYnZvxc7qNnAcKRxnZ8Pg1mQ7tg3FEqSXB9HSSeRYhW68ygxnanQUuhVeqL82YFQW",
  "key19": "2fGGY2JFA6eoW8mW7e86pMQrzvUUkFCpQfGH2TZsboCc8DtoAwC7g8nGBFuQAKACsMQUWPR3xXNg5gvDnCsWmY5y",
  "key20": "dazzUNYxQSNbQ2kcMSTdVGsffU2PtkF958hGqCSD35myFnsgzPp7V6c7ynuWCbzysd263RVL5uBg3V4Mi5xvw56",
  "key21": "5seZ753u2GC2ApUrWLsjVQwAT9NPwjMGeiZVLraoCaegELtZKKiC5q6UWCsNydKR88PbJWtrKsiB8jxUUhw9un5z",
  "key22": "4Ja6xMTyVEU1Hj8sbZTrGmPz6wyDMQF3UEPoYugvWnjBXwVEFHpx7Rf4RMaXDMhMTJMoLKBzCmehQGnmPrdyFut7",
  "key23": "ZYjQA6i2rc1rajPwF5JjVYoehtDRVAk9zNoBqsCeiEP61uFsLRRKZCihVS1m1DhqrR7qd2auPWozzNUB3EpvBy1",
  "key24": "2qWcapkYwcxpiWSRnW6yYiuyzBopB25LcJ7VjVKQ9x9je2E9aA7mbaVBdc143v626dmKqPizsPhyzNLnubR47s6v",
  "key25": "26qRxmUeyP3oC8ae9W2sKgsdm3F82anDBha6qrUncVWwwicAErteLSuuYVfKasWJFQ1Frb7BScSboTgJ7Wj9YAfs",
  "key26": "oR5WoaSoX12imiEH2ghfcdbscrM74Pg1SdYiYQSiBF4NwVNaHJRhSjxaEiuLb4ZL3MXKMfNojbAcdcQE5nzPzFP",
  "key27": "51veb5rXGDYg9MtQ7dPp3MVkQ2PDhL713sPvbiwexnkGsKp8ihECh2VLnoo53yMzekX4T65j1y39BqibuRDckZhd",
  "key28": "3eHhHuFCUPJJ4iuXMNSEaqLT8pX19E1PbeRf28gt31Zf6h73ntqQ7SETiMsrhoPcYscPguvxx1kExvVqN5vLEaVy",
  "key29": "s9Bbya7YW3ekYTf1RDwDFD46x5XwZhL6L3o3zFTbjjsJc1eWiPMmzV4e33E9aJyV62yQmj6CW6htdMk6gTNj5aV",
  "key30": "43uztjHYNszs4KQgckGgEE8uqL2B2CHArUfgcLwdwNwxgYdyrV3wB2zuT4aaZdK7Fp29YVzm1BhEKBWmYR4kLFfF",
  "key31": "2Lu7JheupCHEHJedEfMk1xhVbRs3LJuFmb1NUeeEjtsGTGS4PuYMN2s8DA1HXSw6A67CnVdFhw7YbGJ8KRWNBJqB",
  "key32": "Uhcw5GBb9rpVEdWoDWz4VXjZW81zk452TSk79JnBs96mFg3mZe2phrr6VewibTxELnDmdD9pWkpnHz64RZEY6P6",
  "key33": "2v3RfpSZghqNdoFFmpo2u498AEatmbeGixMzNFDvPVHH394TkKf7dXopaQoBmBEuwrsisrmwXJ3oPzEeajiHTntC",
  "key34": "T7yWKiMyqGwppMqkRfmHEJm1d38tPpDGjcaG6of8xtotszyCegY3fc7BEkQ6WL4JrbDVbThFKrV7m2gLtUvcDHK",
  "key35": "3SPu1UzAnyfcPapei1n7NauAweSnmDoGMbLMHsPYc2kzNT1K2p5GvoYYNPhfbFcpT82NfzFxTJmDWbQKKzE7MJeG",
  "key36": "34xkKtQAqHiU91yv9aZfAJdMEzzii4nxyU5qz6btBEZJKk3XkrKfiwJXiWzAEtSskA1K7rEgaooxh5TecBKMZw7V",
  "key37": "e1oepR2CUaxpj68MRy3gj4S3cGHwTh8nVAcmwbjL2GKwzfei22qqAyhPWVWncG7De5tU3egZHRLCTwbuhLFeMGh",
  "key38": "3iPTb9WGxm2q47Fqpa8qJACEMgqqWhX3bP9oZQ6a2wnf62uFNoiux7G3wEZ73hhEpfYC9NttipAjrubxiBXNtP4c",
  "key39": "65CqriaUp33r8vLFpmaW7jNWXYTdg3UkZYMyAznT1Ptrenc8xAeucTHWwYvY9oEpjH18RkfLbEQLZwArZ5Bqq5Mn",
  "key40": "bFgkWrYPaYjxj286F8KBeubP5dAVeoXRL7mBvdUY9sYW4VaGcs6SHLyn6kHdqvoNjH7oca1KapnMFmZAM33s8gB",
  "key41": "4nx4t3Lr96eVsqRWC3sHkMiS1nvMhpNhxFU7CToy4iomvyH615xtRDi1UgdCAChdUv2pPrhg3niPvvX28aukBEh",
  "key42": "3FceRZiFudqGxnsZMRQse2kU9qBptpyYdDW1cizB8cgP2fbsDg2keVeSscg7SboiHCCGymx4TwMR9kiEWnA1kksm",
  "key43": "4Mef4WZRkurknHcMumCwif2ENg7nh6khfjyRAGyp1o2mY9rzv6RQdRBy6jp2WZQ9QyP35b8xm9cJ1YYB1XEcPGgU"
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
