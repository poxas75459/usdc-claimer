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
    "5DsRrV4gid5QNyy61hPytB7fmz7BQq2jFrC5cVzGttxng1DNcbrhvDzjoV6et3wMxRcDAhNBMoPjVc7DWb148TTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2uxGfKj1oASvVm6r11r9QcqXKVKyyxdfYYU9VvSjtMm13EJKZT3U6eaoPi8t2iQsfkwr6d4ABFghDYhw7YYMsq",
  "key1": "5cMxEiCU7kWFJbS1vuwLAmFbJ98ao3DkoaSy9YEF3wUw6GLAyVZCMJ9RibWbu6WABmCwBwE5mLUPN127gGfMiLao",
  "key2": "3MWUhzk4fd9bU318u6Jm8aYbSfp2qNJEVDtfotoFB7SAmAv5XYt3ER32GGcNqRkCoQa3Qz9hSG2fGcnVSUcp8ct6",
  "key3": "43cdRjSLYKK31n4fyN2KPsFHaLbjeoVnMMRVgg1PqM39vSyDK54PWndZpZrHb7scN9fDvgfzpEiaNZQtVaibRATF",
  "key4": "32ZyH6vqjxSx1fbVJ5MwKsyeyeD1G8LsifFie55uGET9fLnUXHWbb2UYRy3NZ3bwKhkYy6KppRFHEzdVjPUif3md",
  "key5": "3mKCxGJHHNJHW9ytxFsyLdvUaYNpMXonuPQP3EiTizk2SALQtLqEAnXQHVuAAEuzQFBbgySsbZut1WPMeUJ3s2z4",
  "key6": "4z1MjLW1KPyqTjuxSwzyGQvmW5373dziZ3gNR63NXXFUXSpZBZmSqZ8JTgNFSiu3eS7CLUmhbnUJYKaw4vzxNytN",
  "key7": "3VWrPkLqxD4i2aZhb6372SSvZdwem8nDkqGWLygMm3XtHsWAUf8SLztsLTB7S3kaz5VzsggqW1HYPZydbCifLXbF",
  "key8": "2GPup3DJF792cLmtrs55MRjMeTdomJ8eJyYcUkEPWrMHz1vfT6qHHuKpDr7jpwmop4jstWfEBy8xkFSuCeyQ64nd",
  "key9": "3a4o3kHNXYyHwn7KZJJz2UPk4kgmi8EY6CTQ7buzPMSSVoynQUK5azAstU5EFcdBfPsbzeqhpJt2XRBRJb4wGbrb",
  "key10": "27x2jXDdcPVsF2h6RTPQh2zEdch16dCspctYaAdiqfB2YaAX657J2Nt2DXwFkgdt5WiRJG7VvzWvhp6nZVukLKjP",
  "key11": "62RV2WAtGpVeSvzwvswU84SRXThJ4ckVcPxZbKucJ6rvmXEydVUshmEWogPWxXw63N4bMpgtLh69p9MGZtLHCxSR",
  "key12": "2diknZVwaRcrWM3FK13fSittXyuXFzEpcqWnfgJC6jaVC498PwWLJh2UQC2Q3Y8yr9L3WgPNiSRNcRnyRu6qgmKL",
  "key13": "jyJehKKHYcR4jtVsCPaCsjXwSu4CgQy8VcDTFT9uHa4nGa8cEgwCNmvdwsZYaWPkmRVdGDQjawMks7st7s2H3eV",
  "key14": "4YMjv9jUR6vt2wpLbdnHy4HmG3sQL5aQ2DYAuCBW4xQ7KRATaL2JV7jSEvTuvkfmhh6FkxyL8pbXo9ooyHA24duU",
  "key15": "4JEGH9Pi7dzt6BHzpxcVJmr86x2yvPyg9jpqC8ke5PQVKykUqUJUTEpnzHvfopDMdebNRvB32S1iRiKMFd35yxg4",
  "key16": "673FDdneuYeQ31YKaMhCpQ3NfYC8x3UuVCW5KSi4AY5s2K3UKRiWSZP3PxhmDdgrdvnaZsoHCB3um51jkHJRoAip",
  "key17": "3kNie2qqyXJH4S6Ep8spLNiw2RQofe24UjrxHMU4h5K4AQTpdTFaBcrVqctLAwKXD4xyLs72gVF1CW1mFC8LS85Z",
  "key18": "5kUQMJw5dtK8cdWLPToKKESp4qCgoa3C9eS4DTHL2kXGVtCsAxdGu9sScA72trCLmbfQPc8ppLarfKb8tYtQHXri",
  "key19": "5xrQY3XdcEDUCkiVbk8fXHu7uq5qiHcD8X7kuSVgY7e2WbWQxGFYcnDihVC2hYJHBnoTAeiiFymQF5EZzQ6jaWZk",
  "key20": "3dQNipsiN3H75YcxFKN67BGfBAsBEsp9EE3Nx36ALbqgUUc7biKj6ours4Qf8p1ptBoKedvGnHXwnbe7H4D4TdmK",
  "key21": "3aFhV9DR6zNxMFVAEkAVkifezJcj24VGMN4pgVHEuxUnpdA6kKoabTqPRPjFxVBeWbwh2KGHL8DsupJgYNfHpAdu",
  "key22": "3t9CQYGyN213J9ndz9YiV4saeJCJbDJAai48s4zj13BJrFexAzmmcP6M3mzsQgfeXDDybWD7GsLL97di4SR77ZoD",
  "key23": "341x6cqFkTLJCRrFVJxMgP1NgTr3W67h8XbzhKXNUpcPk6w2hqACNY3bkXYWr39Em2FeNbvcQmRBGx12ZfsHqdtN",
  "key24": "3gLwXKw5CR7RiDaSLdatSx7L1Eqzuvx18sBo3cTdp4iXt7GAbyVzNXcrDZTQZ4TdufUUKxU1rGD2uQndRgc5eqC5",
  "key25": "3tEWr8TaF8Mgte3F43UeowDBqfA6ixFL4Ear7yCZJ4iYee1hzHmVDvoQNaUTciVzpgNJLAaiLYvBYGfygkmM2m4V",
  "key26": "8s4oNeyaXvfL9E3eJpuYyDFRdkCyJmXnZ88De7q2PycLBmfcpjowh3UVbMkGHVvB8kRsFdTFRqtbwAgJsosv5xU",
  "key27": "5vi2SNTBEYwVLFYFEoeyStfVUG24JC7KRh623uiVWcQ1aLDS5caA6E8HgFyN7aVaoGq72xQ97Cregd3wDqba8FVS",
  "key28": "2YYBSQwazcEdVv5q2hiB7T6ncQqgCjfhCdmBgzumgmjwuXcGu9xhJFSmfJ5qnfDngkWgRtVsnVuexMXA2Mu8vxd3",
  "key29": "66Hm9rtR6qfjTVYs4uKUJJhmkDtedXJ9rH3nggHmUU44MP9TuMdRgXoq7JU7ybsxKGnPS7MMKaADRWFAzbC4h2uv",
  "key30": "2QF7kutSL6nukDnguSXRJjqYdVgvy1iyuu13vJwaApjJSq4U62DwubvN1GzFYx5G5ykdFUZLXJBr8LXaa2YHCNH5",
  "key31": "3z4ht5aaSzjFED3B2YLDSmaVbCdSbqACEroixsxj48BjKz9QvNEJUW29NmRpA778LHhGUDdUCMpBQirLijgh7Dnj",
  "key32": "2xorLvds8muFdoHJ2odrW83dj8o7CyQ1yBsvnGaKr48h88edRwQ1kjr7QFyfSNpy4vKHVWiZXUBkcmPf1o7sL2yN",
  "key33": "161DMzp9WR9tJ1gBJfyT1UqfbuoxPeLigFmhw2DTtwXAKpSwo6pyhD7co3jy6vFmWxpvFUxmGgoixfXTgHSJkMN",
  "key34": "nsfKjFXfYkjPpEEDap6dNawTcxFphzUWUpu72Lc7ayAeJ5G6AjLw7yURwXxpkRwRXugEMdMAhfpXeakiR9A8AuB",
  "key35": "5gKH3XuzaJDx4oyRz1CFZ7eYWEjjhJbuGsqpeUht73brNt3tYkfnsVcFexJ3axxTVeoxVm9AedXHHdJ3LUuMUqUF",
  "key36": "649ndyVumZK73Xe4HxLXSiczxWNxmyfbrTxJfaZJ1WcUEaNhRpkybDENJg5R4YLPotwx2TPMzYDhFGhwPr6xAze5",
  "key37": "2Ca1bidcLVQyFAufRS6SVZJGKJ3UXZ61KkPHi5CnebF2iJgzjS742Fmb22boBXAxoUvjD8L2w7jdF6N1DhG8sPxC",
  "key38": "3cattPnHYYNfGV5Ma9zeM16tx7gQPKvv6pUrRAtCSmqwPoZPgyUgrf64BSVxvZxPvykmYkEEAaJHa3xBBg1rovJg"
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
