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
    "3UojTjgbNEpDNeFAd8B3F9nWUhdTA7DkxJjPKfvuFV7nKjgGvBTXGwYiaaW6nWSXed7vC16XQrEVejT5kqAxHy9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Sd9offq9ijCTDXbXXquyAbQjBaPaEjvegDkfSTgvqqojVFLjDBLpmxTH2jQwyzDQroGMS41ZYp3YuuWLYkQLom",
  "key1": "2Q17AP4f2xQ2138ziFT9KPcb6esqJH6x9yfXHSdoFW13Egk7jqGfNn1mAdrD5wx7tpNFUq4gaTUr8c4d22xV7VsQ",
  "key2": "3JNLBZ45YBvY5ro7KTEuvp7cZJUqaBdTbRf5jJ1L9uz4RCor4unh6LSSJx1VB4nDZhWMnp1WS7svkkYzqyxdeuZz",
  "key3": "5H8psKRH8XogaRpKgVQDEfDP4fmKmt7P5zfcavpiUDrjaKh7MeAA57UGNYrH8ayzJnsckpuVndoyU8EFW7b8nbeT",
  "key4": "WwzrKDJxVmHRFPJ2EBLzQvhD5fMyK3zNfm5bZVQVCwiW3SjTFroZdjZtcTZgygav3Bx3yyHkXHzyBR1o2y3sqBu",
  "key5": "33gvDFM8Qtnxm61BLpdTdctEeS1U9EuzapXj7qUrDCzHqCB74Zth92TJBzfbTFCABYBKqV78J2Gm1CZ2r3TT8Vbs",
  "key6": "3N4N8JdjR63PiLoeBQJuyGVJCHw21GEVJCPNXnJDNt8cfAZF6nRfRvqVc8iWHM9o87TTbmb9HkTacwR835mMW43c",
  "key7": "2Lv6EMCoQ8vBo47zstMh6WpLZcPhxCFpEi9Dpfsw9Yuvy894Rvqa5c9RvZvgQHZaeRiEPBT427jU1eonrUYo9ybb",
  "key8": "2CZeSPQYaWZDsENGXeh2skGWMYkgLE3Ep3u6MFN5cnbiMFco2GcDGbtrqh1Uzh4T92suzBmxyKDcZH9SXcFjpKtU",
  "key9": "1oiJDWgWys6MxcKEWDSdE1gJs8sHyeb43PYVHffnPgbnjkZDUiMTVTL4NfTpg65juDGsrwAzm3Pf9J49NmFMYGg",
  "key10": "2fduSSX5JWkpSRYhQTNZiDZMkPy1YuGKLW37LKEaUt7CenfcJYhtbZYrjh8oAuY3VHcQqQfFmtK3r1dmkwg3yFAi",
  "key11": "JxE2nb9HNwf1RiYwvWUXkpWZeXkwRTijnayj7hUf9uUrMDLCWENo9mTVF6ffUs9BsqgEkvoa5KKVxki9fQ4D2c6",
  "key12": "2odRTarxH1jg5fn7pJJDQknUhtXfZr7M3n8ooKNBgmNmihENq2n9WDAq3vHyue1PkC4TewgWLdLXSg4Rc7m4HXCC",
  "key13": "3RWJYmkH7byF99uhsMNSLZNrRdydE7sKfWfBmk1RGoLnFQs7xXqCyKFaGgcLyHtSBh5syakB552MAeqds2aUMh32",
  "key14": "5NtwMXhLLHPxtgJ5PR7e834wJhny4DZuzPCmzWeRrMpx7WdbLQmLnM3cx67uAVJ71xj8dv8Y4QcSnogKDxMJU49v",
  "key15": "3jaR4LHkks1n71LKxii4woGzXURu3Hn6bfMTJygDNgrR9HWsUY2G3SyWn5YPU5NhR3HZHdXAJA2BHv46jRPs7UaQ",
  "key16": "2BhiGiQYBZTyrVEBtzHHsRtHSAGWERvhHGUVdkeb1xsgtC9axB95K8xi97JcNo33kogfb62ZvUwH9gPo1bFL8rXi",
  "key17": "2PioYzaqLBkEHdiSLtMb4z6VFyp1fS1QFR3RZxV8NopsWsh1kmfYDf2AXG2sKAgPyQuRbCajiuniW5fu4SKPc9bK",
  "key18": "2pWhPEGhcZvF98UifwHHm5Z7VjnPwQwqxGnnmuGF7H2DtaxTfmMFKaxVECsu4UFAHqazeNYvSttQoA7NdePF34rm",
  "key19": "4tJvUR9bAdu2cpMVyVgDJ3acJ4bFaXkT96mFY9VCUtwMUzdDHqhvrzebKSR6NmdS4Ez61y39uYLpG8ALcCdcfiY6",
  "key20": "46bZzJ9wzAQU42JJvm5BJsmfj2QaZ6xvCvyzt2J3KfMD2mHyWU6yc5eW81iztk6kqkfmBZ7bwHERnTyefY7dkxAP",
  "key21": "4JppBY9e4PQPS3v5ABZ8mM2Krr8vYEM412pWXQ9p6CopSv7rwetu43D9PmrAJf3pm1LMooBk5gEieLABgVT8Jbda",
  "key22": "5siNFsCdN6yA7MFLeMHoYKph9RoEmxXtMJ3S4gq3Bg3cHWLgRtQwMaEyNeBhm2RNmv9DtUN2sSDEMcenmdK5uKQr",
  "key23": "2H2Z7vzQz5GrHFE7mrVYF4mFCNLgdjQ6voVj29CAm7jXezvoBtxMXUrmw1kCxbkyrXJfAbde6JPVWHrhe5A1c9JW",
  "key24": "4xVKb6Sn6Lt2pbYceWyn8C4r48ZJtARa7qfFy7wZ94aF88J913szPUDvc54ebS63Hkk1D275GyeRc8qgn7K31xem",
  "key25": "6qVfGRAMugMRzkTtDmbcqqwj9bq3nvfjthywhzgr7Xu41a8BdPBm4SEyxsGc4wKrLoxWGRkfUZR3BbHEskGVBQH",
  "key26": "4RETQgBFtGBTaL9YPBVRHHrivLM5J2b5NYB5wTwKN1aAbHSJGiMti5EAifCkEjRCkhgR4eXoapcfMGjbhDSMQj6b",
  "key27": "39cx2LsPuS1vH47nrmSrcGBCyB4MoTJeKCw1TNxNrJpBMYxzwigDneH9pVxSQuSex7Q5wVantUZuhvMN7UKLZ7Vf",
  "key28": "4zZVzpsis8S5vcRT9G7Drp75oTWZ8j8gMKYnNyVb9CGEpehrtcdKoGHaCGdrpm3i878rt2cG1ozD8qyAYXgFDGU7",
  "key29": "2aDVhLicKSRSqTrSENpG6RMgV1qbXCFhLzVdVXSHp1zUFzaeW4K2gGSDmeFeR8KwsosjSeAZWYgfo8pkmBkiQx7B",
  "key30": "5f3TeB2wVZgRpTepnXjoMiqqhCh1RauRz8WxV82W3LgnwJy7HsfP3sWVtBzp5dWw1Ki4jitGosXEhaFC2gkBA7gn",
  "key31": "5RFs1XrMSrdpLon2vnhX3WF5UJtY3vnPJRsbe8jEfQmZU4c9h7rfaBUd4pXaDLiB8RMyAypHdE4HubHULRyWJpQe",
  "key32": "4uymXCZ1XPjgqEXNMLPNqzZKBNgC9km8SqCtHRWB32zrJo42sbqDB84WN9j4uxTB7e2EUMGUQjDhLZyV3qoJ8AFP",
  "key33": "3ujprfBtqhKzBmmutKiB3uQHG3x7PFcVzBnSqLoghQ1Au6p1Z7fs9HK7Q1CXBSzduui65itWzp5n9QnPkPVy8ezy",
  "key34": "4exo87ctkKvbzm2ZYm1qdiDaRc163zZt3whni3qgVJEMto94fdb4W4czsRgofuWwbDtY8qPHodwbm3pgTd6wD5uA",
  "key35": "poGqbeNcgnwdfNNDaTrBa38UiRwoxAhTUk41wnCPaHBNCnraw1T8V1J1B59Rcp3uFwttnR8kk1EHyu2adKjmEzv",
  "key36": "2HA8SmoRnxG7GUS2N254aV5orW9uqdKC79AUfTkkKcEApPLB1tz6vxZXb7PmFViV5FRSucoAeCrZKZr4m5MuzJ8H",
  "key37": "3n1BSx3NmWyWC52t8zSqndK5e3zf6th9HR5DUYVH6KDmJLag5aZyvF6tD3mv7SyUotmb8JYjRj1vrTunW9qLPxVr",
  "key38": "kwiaLiegAoP6epfWvrwLwbfJt6yCMCBJ6CDLCwbTBCFkfShpKRkSUqmkPUdomn2LsaUigt9HXMwQPKJYbyShjjN",
  "key39": "3ymCQcZYT1kiBsWLHsUAY6jyKGQUdo1rW2vmPtfmYmvoKTQU8WnsimH6fTJuTjCDGPqnDRJQVPLZzeADM7ba89sC",
  "key40": "67VFxrVCQcnwkxe31f2YDAfQFaszYfNDmNfRyPB1Y5WEzi87vW1yebMCEkQrPMpkXZHpPveVELGfeP5BYQjYyN7u"
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
