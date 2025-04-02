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
    "23QB9bMG3PdeEeevUSpcZdh6pNWBN1j6V1Zz7VqkmjSzr1rBUTFPYRBaQCZdshvDAz1YpqFHXK2QYXWkcNCnM7rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kFf4RwDFhusDSBmDPLpEhGcnWeLaNzVatB9mds8N7Yd7RdCFrH9pyDsJh7wEmqN7gzQVUTpNVHfEQ4FZ4YhdGQ5",
  "key1": "2pNyKr5EUFzFZYZU3oVPRUi9xeVDN5Z3udNYbTxFX8H5nr5gzXpPWDSVJUQp7b9vR5bRsxNFvvzdhgn4Fb735K5",
  "key2": "4wq1LaynETbsCCSESVC4fbi8VvPnNiyNZvxyJVgcAdRaQFRuZMC2f4VByAh3cBy4piihXCynPSPFNS5FEEGiYg35",
  "key3": "5LoXhZH4v77x8db92egf128g5uTCn8DpYpxNY821wKdPSRiWamFm7a94HVBLimm9wn72bucNxGL6ihhDkHAKZ9zh",
  "key4": "5JUW3x8TV3YSVckg1YWoUjjp8t91KhfFmREmXeGxBwXC6ZUEa3BmVxZrfR5zo4jfg4xP9qUKydRzEUxzHTgVZF1B",
  "key5": "5Sr836xMoKgcJsKJP7eX3QYx61N9jH8ooi41UHKRzMfaegzoqQ1GWTYfiSmv5zmgRsHwm54BQ6wqtuPpPScWYR5Y",
  "key6": "T5ae4ouMLXqHz8Wdw2tjczPzeCnXGJda6xD4qgtRk8cJFUkZRaf8Um252xnA1dk2QbcNdmsJeGzs2TGNk5PdXVR",
  "key7": "5U7HE2w47cKvEq6R84LQ7x6man4HhYBug2CsPEEtPrpdcM3WNrH7hLxUwaMo4rJMKVRZMc7DCfukiPhA1qwBZYRi",
  "key8": "4oksBfapDivuqgjWk835msciNznDZonfo1s9S1rG3dJ3YCBK3Y2adraEXqY5cRPUYi7epexQ3w6stZVmZUUpfuiJ",
  "key9": "2ma4rQfunn8AdeAjNfPLt9vmhS8SziStg2L8EjRFWXhkvynBSCZ1EQv8XnBBNq3Z3UaEB8uFCypibtwrhcSUsMBE",
  "key10": "2DkfXpcPSmbnhYmkyMBzsCJJ6fg1cJLAJgQM9AcGxBQ9F5anYpsqB6VfyXPdDyc6xnvCSKnsdNns517hpJwmzHEQ",
  "key11": "pngAR6KUCSfBrsoHDCqyh6wDqigsCbzb1y6rC2HC8cAa9cM19vb9SMcPKjDfKzgBwYFZzrt6tvdyRJ6m2DoF39y",
  "key12": "3K6QDHmSEBjaK6HLt8tLkRKZuy5NCbWm9nWh2A4p34A1PBKcYSwfyFRmmxcCzJqXYCmzAwhFX7kvsdSvMUtPkZk2",
  "key13": "3ZYrhGa4mZvJeGDxY33MpHQHuJhDG98NkGkiarHBUwetib4MTWUqCWT6WR76NnQ6FTLtH1A9Tn5CzXeWHYNovJzV",
  "key14": "4mn9nLwY3Hu12c6ozGVrWLARVpjQCJSNL1pC89MmxmbxUV3f15Bk3T1AC5fXt4umupWRYVyVcbLatQGYeEjnvun5",
  "key15": "4SUmhWKAKeqVSQoMk72mLyabsr8Jasy2UjTesTeji3QTVUdcUxTpZjAvkjv7RkN9DGDDSjMRkyvR6PXrzTX5mzS1",
  "key16": "2sgPGPSBEL6FmTwFF9uGGupJGrrp26bLnXD1tJeyruJ6PkzUVZJuPBayFgEdowXU1YC2GVBHokFgvGm6LXn4KCci",
  "key17": "4AYyQ97vZtq9fqgHoY1vczQmJCRr6eEPcSSpSoB9Q5WnzL7qePCPMLDh28dy2JqhEFP7aohaG5igUujNpQ3Kc35h",
  "key18": "H8oJt6wVpFe9Q6JUpZrfRFJ6c2m2io58UJWWzibpZyixktWPnUpp75Q4bapKnvrDcfVij89Ft9m2QXJXH6PmBXA",
  "key19": "3CQH6q6W4wb5aBDwMCTxbEy7MM11BCBECCqYxqq3vUsGbmcaecFrG3oRzpNetGcauSYbDPe47rRomVFhTakiMi89",
  "key20": "5B2zdnH238ymX54hgMXqcwNJYTMZnBQF8xHGp5EdytQ4tNQnR8Le5exCfRf8gjEgqL9NKhmd5WaoRp78uhHdmfrf",
  "key21": "e14wXHLhhBphqsqEQU3viq3oDib5G6VgknRzFahusoLJZk5G98zo7bKpzLVP2NS69oika7mJxr5WMyJ6PBXwaR9",
  "key22": "UYzwu3detGotk21rBLpkwVHLMKKbqaeXtDktJihuKxJUPA31hBXcE1dmhnYw47WQG1PLybdwwcrH7xVo1tJiYgN",
  "key23": "ncEkq1dkPzDrzb6fMLrt57Zk4VrRoLtN2mpgvEZRjhKmcWHTGJAAVoJw7Ffz7f4HE6RBBJqKXxvW5wiUDRUhQf2",
  "key24": "2A9t5nBiWn8TMn9M2GBfCCFfVGHnLVgGr1WiXaNEWhhE56bRajwxnVB9d1xu7jKdRxwSZfKKqsWu82z1FafUV9ya",
  "key25": "3boZJ7EXDzR2KE9h1xiN6Qqtixsm6rAureqAEBPjrvCQxRH4DbM9q6hvDhMr4FcGato7iaK6gtBuZjikcHFrMZap",
  "key26": "2amjaVitdzEZHyVwTsd55bJm3VtEvNCkLCZ4jH2io1jtNRmMMCTSKcJZk5GceUREttiebkrjEY6VSCgys9radoRk",
  "key27": "wXbw5eA6muG6tdJVXypBW3UcEdcEhhJiBtxH3K3CeKV6Wha2WzeAdkPvTP4zQUH8kdVmg9YL19DL3M6KFKYNy2J",
  "key28": "2fhnwtwpLb4oWdW7sGJrvHcPDcHDYqfCLPGxnGvAMxuiPcu2K2eWwE5kccHAkbVqGYEBT8d91RYumyEhi4PiTGfj",
  "key29": "2cVBaGP2SQqhkPMbHvXQxwSZnPmabKkeF1hKvP6e3VEE3Ct471NAuTFz3MKjNRR3q2mmsHkycPAchXfwQnabdxm",
  "key30": "4x2MMQbpVeRDhtdbWLSjanRAmgYKf68XgzGee3Z5dChoRfzUdpndqh1gzkuXr6MRkpnZHUvQDo4kNwi4SmfXVcb8",
  "key31": "3HYBP5WHRCgCFG4jqRxQGYXZmsj2e8tqQ5NyEjUmSssU5sVHdRJjEe1gfteycpKCqZnkt64oHQBGoL3ateUke9QS",
  "key32": "4b5KTNdY8nWCBDE8TJw51qiikorBto3SJrFxhM5dfV4GLhmptkXwKsRajbrqJ8rgbh2R9PSpUeGW4LAN1zzNVvjn",
  "key33": "5ttEMSWtoNFUrGNzevSkBKunHpuJHmgKW82KNyyqkQ15FKZssBdYXZLJufxX1vpM5SWyhSQuzRxP3tFXK2Lz7UbW",
  "key34": "3uBbk7LkXt1w1hyfV5dvXRHocbWwwV5YFroMof4w2EYyd3KTctJhhw2VWe3bwFVHbSLUKpoFHx7X963QfDCGivfj",
  "key35": "5oELVNHwaCbPDbtE8HSVQX9aUjJF4s6CuP26rLpTSidUY3DeP5qb8XsPXcUwLvw3XZguMB1xREEwzvSvwSTiFE5a",
  "key36": "4QDXuiANbAjQViNoX4ZFMvJL6fB2d8zUKvuxUvTfkRDuavjVBmiF3DQiFewH2hPmH94j2M6ng7JAyP8ELnVq8fCe",
  "key37": "3MLWL1QQwfBU3SjUboc1fU7LdYtHrHTTs8zChHQxekcufRDh5C9eZyWUjTe5jHzWHMSR71j6uEA771eHG7jakAv7",
  "key38": "3Mbof1DBNcbxXrr96xP8XT8rbFKLvNnwhjvmxk4sHTYLXWtrAoNvRBgWKCS93Brcje4yoKZdDaS1WRK4g1UC35Lu",
  "key39": "36z1EKFb2ueT6JQU3zabD1MfUcy2uxQnUEzqoxu9ttYniQoXh3KWh4XJp3Qb1Nh9wEzz9XqFEFVkvyZVwfcuiRWn",
  "key40": "2gVPtgefr5bHv4aLL4Hok6rFveC1sq5PreZAsxpAeNBX4SvD4SH8FQag9c51ZcKG5dQrNFyhaTgBRnVHvitoqvfE",
  "key41": "4MtxpLEiaLugVh4MUmP2tj8FkJef4Bi6tNdfgnEUVQqimsrfhCFC2VQtiB4JtkGQ79dqhcBJ9wuxgX8TjvRfbgoP",
  "key42": "5ci3KdXU9AVodSX3DvjkTTEkt8cKDmJFoiNMfD8mXEhdcDnQpbciiU571dfH7HqqKXBDDKmbekUQES3XzcSeAmSy",
  "key43": "4yjY8faNPdmFXxhPzx8aTGNnNS3TFcn9dCM5kTy4ky6ZoJXGELquyBjbGFE1ZeWpMhYJLyhcomkSxqEaQ8xUNv6g"
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
