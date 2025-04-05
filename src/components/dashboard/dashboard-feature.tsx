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
    "5P76wVXa8ui6g8ftcQyrSDjbK2UdYS1Qid5LtK75ufwjD6cxYGKm8J8tVmUjxHEX2K4shf6wC8348SMsWo3c6ZLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64yoyd3y2PnMzFws38TSbNMiXEjWaaYhPREaBypmJcXTi86C7LPHXwrZ9L3x9pLjGTsreDAEsfJMX13Ryg1nS4WA",
  "key1": "W96nHAPyX3UsZUhT1iVFSjmjcBYEQ9G3TAfzofkzqk4ns2UZLaJb4JrifrYipVfBkM3XUv5CqSLrYaw5d6Cpwxt",
  "key2": "44TuNVU2mUzdUAR2jThHu4VshSy6cSVwGE1dZMxBbpE5KaaEGp7YByP8vL365A7NQeBUivp8JdUqSNXTbeXAUadA",
  "key3": "poaecvVbkKiCZZZqqpMhmHrXQs59PW2sfmf2ekEPiRTWb4ZQX5PWukPsGQtYazAnxcmHJs1PGWiFdiDKNkBDxo6",
  "key4": "4QrwKE4pngAJDK4GcWjzURSqz1V1CAnBvPNGhFvNeWJL8F2UgSG1rH65aNJZJhRLaXTV4pm1kwCUrVqCgfLuMj1s",
  "key5": "4gWj2Vfgd2P5gzKZzJx7VXBZc9XCgoSALAPjCKxaud24ybLgKFS9zmbgge3Lsse7794jJDXjNu9YuWr74Fbjj9j1",
  "key6": "5XPyGu51uLsH3dvmiKAbPr68tGAK9GFCNi1BbvzhCNKN2bJ24oiBMn9k7bRZUbfFjZFTKHLjgZjy4e3n9CrjTvVd",
  "key7": "25okNSWLBVLkfp9j9CYT1NgKVjLbnpqxoWzkrsWeSqAiomzvH6nCoHmTQXW7mKd7LDme3gUzzk4pTqcT9rAJSnhy",
  "key8": "25SohXCX3ETNYXRK3Z4PAD8qybNXA3AcJsEmmvNwYg6JpJgj6YMXzi2k5CY19Kx5gWBwRnGbP624MDvS2tvPZaog",
  "key9": "vJeoskw5rmBCHewhFMoNFsodtk7bsgTpycFJ5n5RT8YbEJowHaMsyWC845jUW4TRRnrXANRwTpmT3QscLj9pwad",
  "key10": "2LrjpN5z63WFD6X1vm57Fbz664qBcSVocTj3ByPYH9k1oQy46owpnkMHLUjULkEtYiZCMsTWgdBDT8MSaeW1AWbY",
  "key11": "3YMkhhWra6LSzGGUMU8QPtfh5vWWsbYyAEpsFGpMjNHJHMXVTwcXfZ4a1Rg4Jw6eeefSe8dR66QsRGvTGv3LCTK9",
  "key12": "iTo5thECah4XngCh2bCxWsjgrWkHvdt1iVG2p3TsBvxFYANoKrGXMRAXT2J6JFFfXiPEwyLxCMCh57rojbHKK5b",
  "key13": "5btpnYYaqAvKwi1Ep9P26p4fAyhe2P4yozRjbPxgzftAjiuKvkS5pQA2gUikQwu8c214p9fjrd2bBx18pdvxe9E8",
  "key14": "qptipCwpqAovoSpMcsimu5Fy66GiJQtbUEtwEoVdXmEfQRnP6LkrMvdG1s2npgzVkVVqR63nHm7148PppioTeNT",
  "key15": "3GmUpHu2UNE4JACssddTxTtHbhPH3CefCxACNjg4GgzRPSKSHMkss4JhFQ4TT8EcC5cQzir7LQzTnVjv5DgKdP1j",
  "key16": "3N64J1JT7BPD37Lntd2H3XeXpYDhjcGphbscCCvk3vEMeZSfCMqiLhSyrcqFQMhZHSAFZ8XMTjPNfWdLMZ9AP7TL",
  "key17": "41YY1LtWboLwdPsTAo1F3VLntdEUbQxAK9yEDicFJB7DXCYjeDMPVfxj2QkBu3CUz4qbJXNTbc5yAWLXT5BRt6XG",
  "key18": "4mrTksbBfuzhKiVdg5BQFuwHHJRyhRDsiEuVRuNTWHEwUdgcWkjBLtUzVNPwsDZUPqKT1yy2L6e4VGjDx6qetqDU",
  "key19": "4EtsrgcZAyzPwfuwe6cPQqiwE8pNutWe67CFPMbeT4FBs7SCC9rcUrozf68Stg66fdYtkrRpdrgifoabr3AEe55w",
  "key20": "48rWpC7PQy8wGQaMTeD8qMRDNEKTZEyrbsmgXiWN1rCrfQYWhZNEsjK8FKrYLQ1PGHJHaosKVsJ4Gx5ahitsTwVh",
  "key21": "3Cxnmi39UwaoMfGsXjzWsjhQATEeM11MkmWeoxPVLpPSEBevAPJXc1GMZuW7ScftdD1P4uV1FghhBAYyeUEW2zPp",
  "key22": "5JJPCVUiaP2UpERPtdaHbdAGBvKSzvacNAtfW4RDZ8Z8UiJEBKvmyDDULah7DgVH3m8pbnCgcuqaPH8eTtRyJvPK",
  "key23": "32bQyiD2P6YWg3t2EkwHMuPFxN4YmWMw6zmcagcVZLDFxckft2gcDa55k6F64vLXywruoEr6mqkPyRGgH7U1cNPj",
  "key24": "4jQbeW9BnPBUUZJq1HugfXgerS3TSKKSw2eKaaMKXdkKp5xZ7ebMuQRUrcAUad9n8xNmnNPhh4Lzj41rEiyoWJGf",
  "key25": "63zYAE9XBRnhM38ihXw2ViLWVvGA1rNarYhw4Yy26ZyuxhJdVYMbDQbvd7hdib8e41CtB9KGLjKjHhGrsXHwJ6WP",
  "key26": "3V4JD99TTyybNJWGV8w6tSkURsZ3Twc53BcpGVc7owHPpsuZm3g7mtpya6sznoCJMWNUtnii5PE4k3FeyDuQmeZk",
  "key27": "3cAhnhUcHcWCHejGkqBmUB16gFVRck4G14xtbGBShneJgepMexfEEi5HU4aHwxzewpDJNUYvFi5HVJvFnbb5GQCD",
  "key28": "38ViGTFarj1mMZYjiE4ZXW5vBpZWjtvYJVs4KbZ45zJZdCtLKRjAPNadrqMciYEsLKgsRYHE671hWG8CrTMu87Eh",
  "key29": "4iLjox3vJ348YaJismtzEUBTtB4cCjior5zk35n54fbBghuP1rmkMxLVvofeTwuXxGKyub3WibGgEQYsX4Yqou7U",
  "key30": "2R5A7iumpNMgFSEnQiCDApSknpWXA84TfZG4QSwXvwt1Devyed8V1YrQPD27YwHY4p4px2zjEAgrDaciak8xY97o",
  "key31": "3GGVp1YJFEmiWQMZanKo6wv3QxHwt6QV17UWofmxrAcK3By4WCAm9VHrAkKcNfrFj2F7Fi8jwZZ3pwjqixt6TjZm",
  "key32": "2UzR9DwYtLcwY7NnyKqfLxS3QTxZaYkJkMbwQnZZp8aixF24axZGTueNvAX4jfjxWfqLXia392YLjskgiShpXvBi"
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
