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
    "4Q2aA5WgKsJ6qW4PQzqkd3uVM9SWHeAKGKfN6XfN91PfLAK8pNwHHF2Wr6ztTwCXYMjW1RvffBpQWWP7B4srTNLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23DfbvmTWRGd4UMr5qrs194CMN91q4w3tex6PwWwM1gKrhy23Nd6ZvNwfF4VHNbbkGBosZ1jMcZn3AKKmEpgQ7sK",
  "key1": "mMEfCwyJ7azRJvtjYy8hU5gA7UbGsgmMeB4Ue99RFjRwBndftfH5ZFB6RFH35ZJQte3EwkqSBjj5Xfhny1maKQQ",
  "key2": "3Ajd5FX2aC7bh85t2hHt7qPyxo3WCngmdMcMQNUSWTMG2J48ePDBQfx32EuPo9QWf5HE41aBS9DvAozg7nNyBCki",
  "key3": "2nS4Z783ZGzU8H2obd9die7z2rM3WgU38orWhVebygXsKCFkrv4AuZenkhbS5oLgtmSZUHFSCj2MRvbhf7CfMWkQ",
  "key4": "591WV7kEm4XdnKGAvzMrz6uBiAdo1hxNxnfL98WkQBxhmXVibTRfP7HvzuCHfKvDRprocRLZWi4eY83SFUJFnm9V",
  "key5": "GqwkuhnjKc9z7wNXmYwpm26Bzu4YxTGKpHbjgKBS6qGnvBFSXxJSRw5XCNpdct89FsjKiYztSwZTkKTKCthWwrX",
  "key6": "3Sr3zJpo2xDL1pbqwLJeVy6DA56fb7TznTjoxXvX6zognsUkW23hWu3PjSscZiusVjoSQGCvPJso24PEcfJPu7EK",
  "key7": "5aEteihWZREEY2rkTW1yqGVAyMsSwust9SXLw8XfRz6TbEXkB5FkHnzHRNfgYLeJz5kjpu5TxHLX1HcpReM4Gp5A",
  "key8": "swA28YCa7PgRcDsftdBJNNuo4jYJ3A4knz5C2MaN4vt9b1GajN155vx8kfAEXHy3WqMfJu1xzrr6zhZZaDWRtwt",
  "key9": "3jNUnsV3pGm3XsTj3ewHnX41krhvYe7ggeEa1uYQcJqYyixjPSsECVwMKDuRUG3XZBmzqtu1qWiSK65qC4bDNqof",
  "key10": "inNH7PMr9D8yo3PnGjZgNfY77kKtZiE4fWjresgxG743CenGqpfrFJrK9EeunpBy6NxBQcv4eEDmqxbxTF9utzn",
  "key11": "5Rgn1ibT5eAruF7oKpBRWAQTGZhbekR7XWm7WNvwE6qAyJMXLZSBj7PE8S17ncyfEuFbdPTqwTaakHf9GVyNG1xF",
  "key12": "24PHBBstZ1b9bZqCwsyGQzGRrFxvzaEADRMnkMeNrsrJkvsatAykTGyLmSn3xGkZrdsY4dwWbWmiwfJCd3efcQbf",
  "key13": "5UdZRKXQ1MLUaJ2m4KfiJfoK14D8t8hLuXt7xZTYbHWYXry6SfEQd3YE72NeKFFjyjyZvJcZgtLdX58c9gGFJTDL",
  "key14": "2Uuo3mofP31X4EoxaxkqGG4CzV61mqBDmuNMCRtC31pqwjbk2nKXNTbp5W9KK3kvcaLUz4XLXesMf612u7woAJA8",
  "key15": "AeV3iaF2bx5Ybro6yTKA2eW4jWFq2kzb61Xs9XDvMTw9xacSZgvTZjz877Jb9HGiYCvafKGnhedBEhRZTpNLbhU",
  "key16": "4uswJ36XSa7mKFGHC7CMntVT31GenHHN6WjH5Tm4DUXUgtvCjrDPQa8YNBvgpvBKcwiUw6N9dxVQVxp2gfrNKjUH",
  "key17": "3RmvBerJemfoLFBwfDbzC3CdgifhnRJtVPuFPfLUsY1Acpt6LnQt5EwCGDR4X4ydhWAfaNb4p4qhwAyTmoPxC492",
  "key18": "3QczvgHoeKfpidgpQ6TRrze8cUx5GgeLYSTM4icgKNcHHdQ6MZeTUQ4rEce26JfuRp3BDReGzqsjrqJtkWo9KMjG",
  "key19": "TbViZTHv3FKg2kamcQPR2mQ5iC74jWfLAU9KYne2kyVWgFKGksEaqxLBronANkUAL2h1b9mie43Lms47tvGCWMN",
  "key20": "3xAKemsRsRRq1DAQGJ8maNc4bPC3qBLtKXwUumJC882MmHMU5wud16YSeFCyijMmMrAu8spvGnJSUgvunYjSUFwZ",
  "key21": "4pHB1ux51FTZ2TfG51i655XPC4f3DDicZZT52h57iZDtx9fL4h6WabMcESMzzgCJso7j3mn351BY9jqifaExi4VP",
  "key22": "4FgnKB6iZcZYVsjNjBVyH9p6VebAQn4HKMmVL4qJG5ah3NKNvKS4KLxB3Ux2aKbQ3gKqX6PTBcL3GBfV2yBnDzGX",
  "key23": "2GMVpEdbLwxD3n9UHXYoKj4Gu26aHHktc3GYUXspqRsdRHgiGJ1LdZBi65dr2CwSDyEBQKuhjiR883tgntgvgvvN",
  "key24": "3qjessrfmwVniv9hFWyEsTh3W2v9dZLitzDQhvzExwurFUfq4sHxZe31TB7LARCCmeLVUJ5XcXpDZy6jNPmUJGHS",
  "key25": "4ZoChAvYzUT5MtB3zJBiF6Byti6baVrgrgGkTAtwiDXBHxMFkasUdXSdxxe32sUrAFsqotfUZr8ZE4JamMWE1PaS",
  "key26": "3EpfofnAXg1N2DRcMRRtA7TYrksjyqoP49ckGidJRsr53QtJdwFd9aChJXXw9yTi33KCnr83DpoPSWRKb8nmy81E",
  "key27": "4ZzmkVKBWAVQDqbueeTB942NKEJ8RscsvjCChGSmBRQMB2YoG27rhvCegN1H2YF4K4FnJPRRFRsgRWAiT4oMyCxe",
  "key28": "3AwFu9wrosPs9SUvCSfaRDiMy4uGcmLNy6fz2QGkpDGtDYvSipVyVPCur4Dk7QDdgqCbuzohBjMhU8sQcukkcEmj",
  "key29": "4Q6Mfogdp9HkihAPGZYtabnsgQJm348DQyAvP2TmUtayiMVCEiMVRFZj2t4gow32EVEJZdDzWBMTC8VgWm37d7q1",
  "key30": "auCj4MGcA2a8nbFXhCGDXknLGEYSgzpHqTV4PGkmTc2obViD9g9c1SLxig7t9C1XKvPYPdsD8m1TLw3xfBKFSKt",
  "key31": "57r7hCpcH4KUcBXUWEbr3Vhp4ekcrm1RBBVGNNHb4j8Tv2CACeHTBKhqcWjUGuJvTAkPYRLLtyURU3NKjSsMRGrY",
  "key32": "4kj2Jb7EnYBLohiXEHdVLaAscbn2iiCYbWvCkJbprPbHrk9sm1qhzHiCh41G84iBt2VJG4KauzQYwsdKd9T2RPgf",
  "key33": "4cZY7H2FfhYrcNwhEGyC1sGYzhiZ64tKQugNaUDzrYGYpqTjCvRoMbU55hAzEZDhZpCVbekQrs8useJL1dUuJgzm",
  "key34": "RTdHtaetooAEQCvf8BVy3y9R4BQeaVnX3wG8Pi1PmtSsSE2c9jWRDpc6gn2WxfbuLy3jqqf5sh7kmcyNpQA4tcS",
  "key35": "5bozczSsWMAjtVXkMVAAP4dTMGXAPPSzQBBsoCgbzxepoMH995uLrUYDBo3tVoAogzXvPWDTdUfMmKSvP5kjqRr8"
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
