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
    "3dwivveuZgmKjxnM56yGo4q94j7tcvX8coTPjT2TfeRgcgK246XycaV57nqF9c22yAhpps2eYsbnUGG6t73vZQK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nG8vqfjeXawrQuuQnPF6iun31VnyRyLKa2xdyGbpkFPoQ9kySSrnMBmz9mP59hiJ9tqUm323ErZNnHje7NP6qnG",
  "key1": "51vqySt1TgowWsFns7sABgvZ7yj6ssKqvYiEVYwQfJTL2zgKLxAzLLRQyPYsS3oPzWxrZs3yxf89FjgpTDpyRTS1",
  "key2": "4BjVCyxpwddpGSVLK62NtUTeFJs8Mp8joKpdoz2e9TUKDUJVMJEc8A5wrLCSRCEYr5WQ2Fm4YtsroNowA6EVQ367",
  "key3": "5jppf7i4hr96UVPnQQajaR8uRBuNqvBmAZc8g6N15F5Bhh9S9caaMiPjRR72GsLvBAYBu4H2djaiiUAgp3hJyAyA",
  "key4": "2SNVhq6z76T7tBUZkkXs51QbKQTr8ztSnu69BrfoEePXc3GCri6h7eWMrT43VoFfuFuog24Td2ybDKAzVFzJzABg",
  "key5": "5ayP1uG3b9RZQ7xp3AErVw7BAeHUpX1oPoEko1bxAXvbBdUj6XSU7mrxAnB37ud85Rv9xJTagCMFKaemHHRSKLAv",
  "key6": "2EbnFGN1A5DjUDHdf5cB7GFYWNxroTXvw38981wedTSuiGFfSZh8rwNNqC4pGL5BBzgjGBktjjxUJGD4UbKnYSnx",
  "key7": "2PtUNYPpyYfG4hexho4qwCB9i5c21XnY9gZDHsuZUEPKXZG1PriWnei5dSRtBM43C3VKVJbo8MC28SmqdSfndS34",
  "key8": "3HzyAwiGx48GAQK9BBNNVDj1r1CbFy2KwLeULDuNnxUNJAFmDbgm4MqVPPKQaAaDkPXqLgJKzfXMLXyBCZDDdUVC",
  "key9": "2w9EBKhKh3J1aQ2NVyU7G2Ghy2Mgp1xZn1XdMwwJop2otm9wjtxNbJxtFP3iUoPiUKx9ifybsDZE87npGtQtZbqV",
  "key10": "4M68tB3Vy91y8dEqJAfzoyEwn4GT3DEB7ZLkY7F34iw4TJrVj9bxQj31DPRTScoDz6xD4RjpsDbKgG6ZqSTbvkQq",
  "key11": "5SGtgpvh8QXsapG4TwBDvmi6CbUXDWf11MfTw6rTPWMXtkUS8U5xnfGphUCtG96qRui3s3YifDftP2xWtJFypfut",
  "key12": "5Tn4z3wVNRs1eSgnFM8H3oiMxncRuA2xzZSj2EPdpcNAMq5GEfCxAyMcVQr9rkxbSZvZaW496xjaFPRHuF6yhPg9",
  "key13": "3AGSiTTwjdPxKLHN1Y2CmJ9wuAYbAkj9U4z9nDwY8NeZyTNy9LAMtP2Cb7Pf1Me5juT4gTtTW9cEUYGwScTTWbPt",
  "key14": "5W368yLMtDp8wZBQUASQ1J98ZKFmnRWtDhHT8eCiQ26fesmp7bwsuGPsTAR3Wk4qefFEufahMaTSqGTKsPPHDxPw",
  "key15": "4JHGz5zCTrnjE8nnUDtBEoPeDXosNeCxMsLuQbVFJi8oC2QNsGK8JpjLcTit5U6E1MZUYrY5BsX9wDAYG8rMK8Dp",
  "key16": "4XkzQGMfnkbzfwtW7egoYycmG7i3vy3LTne1F1Ji6zDcqAHArx2Z76vNqupo9urS8rvFkLu9Q2gc5nDpww5bZxNt",
  "key17": "2nUfnkULtBSKijV5D4S6cf9W2sStQD7jkZTEKBTXfiF6UqyThncz8229bMsw2Mfi4Ztn8DqkWr6KiZ3LjyaaP5z1",
  "key18": "3eGyNzuZHrrQKp5A8Wn4HjhALAf11VyFXvGVCJEnXfCCQykzSpQ4wLwuCLdAzGTT84DNuyMokt9AmWxKp4NSemjJ",
  "key19": "2xiRNrbs3zn9arVNBrqEz3XykvhHBuEH5cKjozs8b2HkUwaH8VPCbbSPk7E8TSifkQZCuuxVY2QqJFUjWcTTp7Ys",
  "key20": "2CVeuuaAYgG6UAe38NEJrjjDfRAkcXRmt4NN2i5ZbPL2EFiwbZfJwG2mHTQ5TjMDfqQxdZCAYAAZMVbq8KUBrv3t",
  "key21": "2JJmdz22ZiJhpDzw5nXPu4DXctTerDMnKJZpSefnKnqW8ZFph28mbS6p57nTrtSRXPrQKd2Zn45cCWsgtbwQ8HTN",
  "key22": "6781prVnExg4mZvMtcB5ZoG7Q9XQwngMg6inASiLodFvigZEYVh4pD3NqpcgH6yVAKcLVYF3HvmLiPr37xMMsns9",
  "key23": "zJTi5NJkPURT6XWhiUY34mhWf9zZm2E6FKnLx8JQBXf7UmaT57v49asSWxPfSrHguXEEHx5zmWR7vTJiEyAfTL8",
  "key24": "3UpBrBoFzuVxTkGgdLcdZh2HHGchUataquennqfaZrk9HkcWKRy6TeJEBebNCFwiuhdeBFggXMTsFEiBpGRmBnCi",
  "key25": "4cR3ZRG4ScCYZcJjGrS9mAa4VRP6wHqFkgm8EeLjMtuHrZhGRPdHJ7eN6xAyhtbhjvTyPGDSiSGQd6wjG9vEkHCn",
  "key26": "2d4UUiEAUCrKQ7KLbdASWoEonbPeHimsaijFwBi9WpZy5ZFKK5NB4eRDPaGAYctqZNEV8jf1ArC2S36gV4G3au4W",
  "key27": "TyVeJjJ1Zqv95xhqBwnvCYmzeBgPVsE9PSPCGn7rQKfk2KWfAWmAbwoBBTum1tdxSQn7WoJ3yp1zQZmJ1QgMdge",
  "key28": "3VpfEKvaJzYLQq669e5wxjGmBho654Wz96p2WLdAzNhZLGBU8uQPeTtLLbZz9pWXVFJZ9rQGiAmZHvNftFbhLJmE",
  "key29": "3PT3mgr6WzVtQADMuKduRE1bav1XzojD7EZXh5ofkfqsJkPP33cWubiP639Mkpf2eaFZMywPfjZohwthfcLr1Hy6",
  "key30": "5MBc29v2xEmmuq4ZDhV9Kq6MMB7U92XgHJp2diCxB9poWSvTCXBj27tAC14vLy9MsF19ZJK25TEnC9A7WnQ83f5D",
  "key31": "5iqYojjzMBWa9urZc63ohAJqoPqvt8gBxS2CW1thi5m4fs81DFhoUqyGek3XsvapMgDxa1ziFaZLqfa6peKPKcwW",
  "key32": "2CPwTzyES778mM34uL5oQZgv3yuGfDX4umE4ZR13CQjRAnK8wzh5UugcVyMfMkei4UDTBo6SHSxcGA6n2xEkBhuF",
  "key33": "4KMXmtQNNAUp91SnfxSJiMuXu151jKcPdxPER7fJ3fhsi28p74oLQMK4HT33LAAenD253LxYLCbbWWp9w82zyNA7",
  "key34": "3sHiKd8HHcTjq8k5a5QLJQUaivik9UkYi8PJjQVLST98zL8C7f4CogDEjmbQs9qWCLMeU7TgCZdwyAox8ivb53dY",
  "key35": "4EtZnMDZwvTAjrHoKcRK1X1XziZFHEj51CSrehNZKFotXU9goy3ubCbTmYM2c5BUKsQqR7G4au6bg3Tn7uMNn2pm",
  "key36": "3WQZycvcXBSsracU81ibVifyPCkoottryxxtZf4GMkxfrQdcsroWXME8MpgEYLeNp3pht1oKTmYKWLbri9yLZKfT",
  "key37": "2cgH1nc4qxHqkJVhhgYFkThF3FqUJajPaxQrHv84ZoUmh4GgEgXcZz9BxMhjKTBx57taGLhQLDsK3TStL3qgzcoV",
  "key38": "2QsTCik4TKw5zkXQ58JxVBBCWR121XXaCe7sLnHNX7mzefCKNxLxeKQtoB6M63mvZQSxTdbC64KQM3f77kSgDWdP",
  "key39": "2yJVjw2LbfQqB7UzG32tQK2FRgPMVrweN5NU925y6VcAskmQAbhUfqFQgJb7vt2N8iDC7S46U6v11zeZ36SSSFW2",
  "key40": "2hQhCJEtXM4NyzdkrgFRF8VkRJeKP3645ivpQxVc9w2RQqM1X5xuEgp5iUr9TFJz8F9Wp584qqDQFc9mmFgjKdkD",
  "key41": "NSavX4aJMbKRBKyk2kwE5Fwogih6Fwc9zQwDMdTi8DBJijijJ45U4szstS7wNomAReQAqyutQk89hejSoNBbBYX"
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
