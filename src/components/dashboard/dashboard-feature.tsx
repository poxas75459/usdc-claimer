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
    "5trxYB1NAzSx7r7tDN7xfZvfkwu53yzsqZ4XiAKcrk7MHpLj9rKng1FotvzqHCDnmWr8ksggYGmqr2JnTN6gLCPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jUS4fE7hdYZDU6gb8nU1YSCp4bLfDEYUmT1kPh95gCrHeHKHV4hi1WnjfxciRB8k5NBRvvPcArddmrEwGTnVTSH",
  "key1": "4K8NyrgXvwtnD24QSVuqmGikJGAR9rDhTHS46zahJZ1qyY8WYABySZEYBWMxzCBzAN5SYNPj5RKSru1KNt26Z1LJ",
  "key2": "24fkLE1vyMpN1AZv1e1MGwxVjbEk3CSFADRgiPv1wCwrEEbAqHgUfjAeay6iCkXjWyTv5YSwcwqLEnaYDzZAM5uT",
  "key3": "2zBH6SaKTAfc1khmk3ZkW2tnfPiz9NW5wsCND7X5tyUmo4t7JLc7E4oFayGsEotWt3t8zbSximGHUe2yVdwFQve1",
  "key4": "2t5aEffVypg2E7iRt7RLfyQEcZ2KB75yb1PgZzPbriAgc9GhXHj9cEpC4VjDWr1Fy5exmqkkWwad2oz5aMyXXDqq",
  "key5": "58WMZ5Pn8YmNpz7yRicV27zvEKPNLmYBdDqqjxV4fpChW6uvRtkCWsm3UbNaGHL4gR2ofZL7AmGC8wAxdqga4DRe",
  "key6": "5E5xaCyoBfrKGbWhAEubPz8qBvwFYEwZwLtRh1ikEpbMsz4bWhvqGoLsBouHBvTyZ3PW2QBw3WhXgrMkoY3pqSdH",
  "key7": "j7wjNrPM87iT6mcGTxXHLyTCKGqh2SfEyE9iEHsVnnGvwBp6AsFgYogU2ZruRYC51HwftskgAf38gTdvqpz5CLE",
  "key8": "3LGLpWww5wG2Q1ZdpNjG3kqESxTUMPmcfdbPxvXLLXipyvaPZuGqHhzRooALG6JruuAe9NY4UfH9etVk68Hee1b8",
  "key9": "5KPpS1w4nvYN8Lrsy7fmyhUdpKdHLbxGDPGUFAwaAesjiAt6t9VsxKMUeqRkBNhzcCDkqqmsTuqiadKfE4dnVxZb",
  "key10": "2aorvEkZZv4CsGer5QGQTgWD2gLsvgwgmKizHR7XBDGAVaGbMywJyqgUZfJST1Kc9GAktVxokHrHGoHM9yoUxvQh",
  "key11": "MX2S71k28HWotSMyoXZPKUokXJ9BMBw89CiP9KrFGGHYjubPpiBHhqdhcf4SrpVn948Vtc8HZ8EEEbbzKTpCsKb",
  "key12": "5rB2kiAwn2dyxCTpHYdCu4pd5nnNKLw114AmFvwJb6nM9iCZwfq14Ghcnr6iZxksJzw2cNHvua6P1adJRkTmoTkY",
  "key13": "2yZwqugMDHRYwzZdmN8VcSkaYxXEdnws4FBnT1ZN6sgqVfdAim3haf1hVNvCMtme29WEDUCCTtmLB5TNujQAoyxt",
  "key14": "5rTYfq1KfpP2Xgwvrivb1x19EJQ54jBK3yRQ3PtToVjNCA3a9YX1V4aubccn768MuqDzPq2QQFwUabH5hiJwr9v2",
  "key15": "2svKzEKG5XbscWVSeeg2MxQ9QexZt56PAPJMJjjRETrr4YgMSJd8bYW4G3P5M6sLyqZV6sPYTcZ56DpDPzgtTLxY",
  "key16": "5cg1tziEX3fJf7i5ubrG1zZ2wp3BWhnF4KT64GQUUHxfN1LwHHFrTUcXuH8X9H55YSvTJkZfyKk2SAXwhRwf1qcX",
  "key17": "5FKH3svjTvCe937P48GXGswNuYucNe39s3VPPneJboeRQyn252V3YfNUR4L18MfzFuXnWnSbpG1XNsWFXAL455ZE",
  "key18": "2Qbg75ZEKf6ky7xWgoHXbkh3uXxHixutYMMu44D7xcMXgjt76EhTCqXRr1EmUbF5VwDtwJzHWP578wXHfHVshMoo",
  "key19": "2Zy2MxfRk9uvuomL1WTAzsitMoSn7wob8vnmBCGdieqUfR3j9dcak9ft7optwLZbQo72ChtCTWk6bejk3DrtJvRW",
  "key20": "3JbXFo3Zz8wk4qrsghP2YtWBWzrE8uo51J7onPJ4AEfNqjAQjtMiyfgQ6sSi7anRUBPceXE3BvAJbXP48EwN2REv",
  "key21": "25pLEj7Brk8qisDjTQ4eiXKrevFBhbL9KeUpXER2yrVf81bzZ1L4H8Q2uxg3xGYdFaHfSgyL16qCdeW5LdqptZR1",
  "key22": "3s9gupvKHsdxMbkKTyjooHWiqdWmd6AkVndLr3poc6s2X9fqSAMcfe2CJe3a5S3Z4TZvEHLNU3Wu236ZWxMGTkRy",
  "key23": "4wJXPohoaacyqmPgHt7thQwC6Jx1yyBqX8cS3VSXmG1gyF493SdkkbBnKswNhGisk3JRor3UTDrCztGWdDcCfaLu",
  "key24": "4YJGUrEPWz2j33GDnXKNydP5QBeLLs2xkpTFTRGbfmSd7E7mgR27rJKAEW5HGSPfnzVW79rrcMwFaUhAgJEQKD44",
  "key25": "3eXAF5f6YyzhqXyBjSVVx5h6M2qgb9W2PbnAGDrLjagnDgak1MGYRAKeMrKMaRKeC4QhfKSDhjNEp5388oosi8hT",
  "key26": "4YHas6uQPn5faTBAMeiL5CEoLNtf29v2iMAbfgSiyS7fbFhCqNXWpMfnSvU5xsZzMzChtSfEgVnRoPVrMKb3ehE2",
  "key27": "3Lxg3JZecKGXrSDR729gGALKatz9qNetxyQ3dJfiZ4xxqeefSe4u3j2UZsC9shyqCM91Rrf5AUjxjXYvZL8v1VGR",
  "key28": "5oKWzTbrax6D5wsPSvTXyPkaVVNZpdB5FTaQECGfJn5ZkAu5uHRDKXKF4rodDhNHBnRo6jq2K1QNeE1tqbaWNHZA",
  "key29": "3yLdMpU8BdAVGVsFF54LrKbUr9embz8FS2TF8ARcvif8bxCRuZjJUZ2k6E3Z3rjtUQBQZmWxDouVHoZjZ87YwCJF",
  "key30": "3mePQBwuGoWkaaWNaJLCZmDjPZLC8F1spKt8jUnzZVZg86zBMJHyBHeVieUXhmST3gTu8XxiCr5Qd1fyuuCUuUML",
  "key31": "4vtHrZ4rJNYmrq8cF2ZH2vYP3FShkKzB8f2NHxWurs3cwTwkmH2hts89qV9wc4yxVr3TmnB6HFd8gpQzmjXE4qPT",
  "key32": "xxMFXsVvVg7g1rsGQPPeoG3JFLhqTKnm2zPazgbrCySCqSy2pCwg3iTdxAiVM8VkzNLWNWbWqzvAfqywcKquE5E",
  "key33": "5fhu4TaoZ3DjMzDgtNVY8G9rEm4mdMFK743Ah4fUFcUVCqE6VBnnZEotux2EUGoBvnm59QwpP7fa7pkKGsw2bRE4",
  "key34": "5aK3S4e3f4Hv3V1R8spsajQGnpL8i2gdogxiU8nVEkTGWetNaYCubNS97ZHLbwxAMrap3NndwTCPcBuZ1PKtYNsi",
  "key35": "4UcH7GqEhDj8dyKzSuP2jvX3eusWZENyThsMC4bMNTYLZJsujUxivpv35Yr8uyCKSpcJA5AAVJry7dxa2P2MNAqb",
  "key36": "4xhXkz5rEjXJ8Afbn5NXCxhDvBzjuYXC8eURupf2Pqz8FFo2LuDhnLsXL5yD2n1fU3KWwsZJ4c5xgQxEbz37AhJK",
  "key37": "2TTYiavavTUwaqwj9qSw5Hcud8844iP4RW9yiGrfxc2AYpqaqXMYUcQk4Z9F1qhQKy5VBBX5C9eHYXfRCZwA8M7g"
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
