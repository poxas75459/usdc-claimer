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
    "3T56FnfeQhQPeNNmvJCr6mDYiEyaBseXVRnPpHQ6Cezo8CBncSjfFS9t8gp3ihku5dRwvRHujTagVt1MtzVcisph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DWENuUNHALLT6ePjAmChvVTL3rywAef4E3791HPn1bqFTLFtg2nCeqbtZpreRpcgeXTpw374Hrbd4iybNTV6LPN",
  "key1": "3DkMuTGaJVoDn6P833LqP1Ai4W2rEqunMFNeCfkirzewQKpB3tfkrovCEfx4WvpHHnJxC1NMQzDetcjxJFJUW9N9",
  "key2": "RGfWWqZAuoaaVpZsKHM4oug1EgfafipLyn8o4JNANAkRuJQcVm7ddqVQdCRSaGj7U4rMLxfNdSbCkVbqieqcpAV",
  "key3": "4FLXTk2t1ZDYb7hSuEtou8Bw5EHMKxZCVHWvMLZr4Y37J4CzyPkn5bBzvTCwQi8Ctex8ARGWVm59gR9iRYdh72c7",
  "key4": "2vdT6noPHbmukpdbcACWJY6pq4NqZHxt45aAz9zqoDaHsjLErtYA5A8fsqdsQEAn6hhYZQyq3PpPQrY3QuzQPkEN",
  "key5": "3t791BBtMd21fDaZyXw4p4Q1Ji4iAvSeeApKe8ZJuUFT2BXeFWvbaRQw4mMZipC76gtoudosWn1QCSKhPXnjatCk",
  "key6": "3HvXqmRJHHZV12PEn1dTASFcpYNZRZhymqL6uqUCV2mVUfw1pDAG4Diwcxg7ANL2D8Bt3Qh3nvs2caPvKUkrPscW",
  "key7": "3uovwmQ7RVW4ksNQqtdFgBjzmtP2we1krXLB5i4xLMPbUhhbnj7tWW7b3pKFTvLoMu1m4kVziyrCnQSAoJp389Ag",
  "key8": "2u8d61ezDMKBN1rkicS1wA86xxg8ti2LHENmt8sUBW5GL17ev8b2URyanwczhQNRnKPaV9JtbnjWAEFALR43zHHu",
  "key9": "hpA3gyT32npLviwn6njv8RS9Lbh4n2AMjYY7eDvyBKmxbwdXDFM8mBg7Re92z6nauG6CHKVvjegqBcj6mWB3qAW",
  "key10": "52rQfEhDdcFJyJE4CR5ngA9yzQYswLpsq9MYJMKjFZApCD52v5SFzU4RDwoUophtoJ8DNjnpENvCEPxVRJPjoghN",
  "key11": "3bk5gStRvv7B8yS1ZdBnVEpUof3Bm9ggL1niwaGr7n9E8y1pcjgCiMfCKfzvrEJgn5osMZwhvqECipgktu6xrAti",
  "key12": "3HxecvYi7Qpvav286xazZXYt5ypS339GSKSWvxq18GDYsBbkgoJyi5Y7ATjA8Qx6DXJMg8N17DDNMPXxpzjRnGqZ",
  "key13": "JjJ8vW7neBFuzFJSwL1yKrDYXgWY9fGgpNuDntcVPDQbQKc5yTSoxnz6NdQig5mmBNQZv3YRxgWf4CCzbDgjXRh",
  "key14": "2W45uKnvyfnd2kUmG8zywnjvZygqBJdneekACmZkTdMJ4QvRZggbNQXpTEN65Yi1tGJ3kRmtZrqkEE3JQCpVQZPB",
  "key15": "4sz9G5yinzrbvoGGrYJt1UKwDgZ6oQGZZqDRApvUkYMoYag7C6ydmGGq47bJDmS1tLao7Nx5vJPVjkw8eC6ZxvWx",
  "key16": "35qmfrpHj1AiUfsek826rE7vmhdtGyiDf2xH3KHhowLJNTkt4h8Da8fZiBXVTrRuRmThbXeHLgk9psuxsz9pn8gd",
  "key17": "2RXTNoARPdopMheVptZNSF1LVBPLAn1Skaq7ZYRuz26kebnpoSz65qDPiVUJ7AjT52NkrFGMyY5yEEGaXzt5gR8f",
  "key18": "3AtSbHdicmUrWPsbsLD324qmPEuRbwR8Wu774Ugm4FYasAckiKszBizB5PtxEWXGszTdvox6xgyYit3ArEdqix59",
  "key19": "2qYafhtW9GkaAGTAM9aY544bTdt37BQp1Sn8L94pnee24J7mhQp8GrXtc5GEk4vhYeMV6miPTTB3KDZzMwano6WU",
  "key20": "4BqPUqyPp29Y9DEFnBNmeNEYZiNHJmFCdbrZhsKYRsfdJHyiTGpv1RjN6eo6PQTndjvojjBinxaRptsa8XLyw2kZ",
  "key21": "4v4r8yVvWWz6Ppb7g1swiJ7nWNM7wam1SNiJpP1X79nx8N1hDfp8zbb7twRKTad4bEcsE8gfTT5ZHLWN9LbJvB2R",
  "key22": "3J6nENa8moJoU8rvE5W7wqaMCB55dxSPLdSGPkoqMFAbLd5xpASPWAqtw1tw1GFq23mGfKYcataMz2xihoDyYTYv",
  "key23": "3V9wWXZUjnJvJbeCHjySM9nXPUMBg4TcLYSpj7rhBHookHen3Fqsjx2zbQGYErxRibs7EkW5xoV5X1urAXoz81GM",
  "key24": "2XBFEnhYPpzVZck3a7d89g6Roax7n8gPywsgdo7Q1x4AZSL8GgpWKBpVpVoP5jNni2wxUWfK6eDgTu6xbF3EHypz",
  "key25": "4iAD5LYHZ8fkEA3xTxV3XrcVH93rnexmZXFRyKU2ypPF4otzgSYvbcmMHiph3SrrT3Q76hJJScVrbrpBVAM5pCHp",
  "key26": "3M1SfmpBhYx1qFdbvRr6Gng7iKFnSbPeiQgTmdeBdx2qPtVZJ3cTPyoTRUmSZZHFeNFKgMbHQC3PzX2ihCZHBc5p",
  "key27": "4rPLphAx8N5mQm2x1eGUJ3AVXhjH8VU4jGm77UYHnE485BS9m7zV1KGvtTjorNRtrfaomLrw5ofqmQzFoC84eCNS",
  "key28": "4KchePwarsoy4CFW4w65pvTuG9wCGwt6nPjuB3N9xkGsmoibJYXy9YXpKm823ki8B3R1SXrMaQfY9VrkHNd4jGtm",
  "key29": "314FhgS3oiGAAbWGMhS81kjAwytfTSBiU8jaE4avsKUfZ3FYFXUpoMMMKtfujRgcQMDEvQadM4SbFVABGqEVDNis",
  "key30": "5AdHLyDf43N3di62DobfKauAKFkMGbsBtNHqYpnE2HecrviG8ciLHpAS8Bg7afdXhVsUACpg5P5ZACXxeSG9DCUy",
  "key31": "3PajBcTJkB8zHMeqZaJHYi678tWGMhZzkoYRGpq11ePssZNknGczkXvRsCZZhs6eUJRHXHgZjpvRfbrFnDbCnEdf",
  "key32": "23bDR472CVmUe9FXXyegkoATVgENGxY9ywXk1symSgEhoazYsA73Tm5Tqg3voTvfmFTc2SyUjhXy1pG6vs1kGPjA"
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
