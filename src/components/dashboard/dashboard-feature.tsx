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
    "3JQUdiuMK3ecuvE2EsNXHzLazEnhMFFpKsz8j92JWP1Vdx4E8uJYWqGDHXC7CSsCURiYesPoBwS1WSQMytyy7uhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "556NKX1Ty8ZJ57ry3RiD53kZWuFW4mqbQrgHX8CwwbAGKi63ZzXR7e3pZhmcfcBUc9PAWqznG8DjrCvoT26jGLkW",
  "key1": "4YJ1wnFuAZdJkd21XNWnZPKVNx8xUZq9rVhagaSqeCSai6SWWpaQTCLVcFkyK7f8r6NjVjxhmrXe34VK5UyUxaX1",
  "key2": "29Azu1MCB452Tra55Fjx6J88S5jdHeJvCywTVHGf9vfenaP7UhwrnCnPnKZNEn97JdCSvns6YofcRxy4Q2FFN5qz",
  "key3": "6UKHikhtZkMLb2iCeyPjv2fT7sUYtUMwdS8jokVLvcw4x4ETZsi5ti6W9RLbwMRkc7cyxSDwxPPjJEYXvB1zW8g",
  "key4": "5A2fpGaEvZfTpp4P4YrEEvhgJ9EpJ4YyrYwJry5bPS3gs48ytp33FsFgz1peJnTDJuwStBUJF2rgeThmLAndQGcz",
  "key5": "2xF2boNGNHp7dwKPUWggt3BzVsbFdiBUCAaew4uEaUAAdL9kQNLzk1yaN3npcu1fdDPFgyBapoiYfD5Xg7rPBxGt",
  "key6": "5tWaNvo1Sb4g3GGZ7bwYuAeEyUmVoYFqmJeq1fwyPqBLmVobaptqa2m6NsS14an6CKeaoF6zt1iGAQgBdtSjy3dY",
  "key7": "3DWD1zrQjy48h958GgJxVwsYZEKSR5iu5LSPA2V48aSBuYHnb2RGrFXhQhsGcAN4WWnzoguktKmfam9B8QiaqyR6",
  "key8": "sp3m7xCz7qiKzsTnQzoNdSE2M5t27pcdX7RhSS2fDRtqBCTCa3oDKH6BEfcsnKZS6GaaacMicv97hJBT6kruefn",
  "key9": "DMnXyTVHX3eMRUK6x9SHiDzWf5JNzM2UwwYE7xwoKocNE4zC6WKaV397QUdqfFtJq9mv5AaPCezpxSfd3R1V8n3",
  "key10": "4w634XYpRzY3Zoxv7qjqE4U7jSbTgBNv7SwsJhY7v6oYHRHhVyL827o7Gwd7dpkGx3Kx75NfXKAtKEKDF4yKysfg",
  "key11": "5XuFAyn1XMZ1Acd9tdXdnnZRyUwC2UfrMpJNUDoB7TaGhisC7eiLxk935jszpcPL5EEKnaR2ioRL86bdEyN9q4qw",
  "key12": "MgwNmMzC5MsjH5brBkrJrtcFfM2iTsUyobQRjdRofWBu4EKiZCQ8yoHrbkFumem7Ev5vhdgrvT8uK88DPZw2b4D",
  "key13": "4LZaiwXtBeB4HLLM7BpAVKF6stB5hZnb4Y8FYL7WxTYZ2QH3yyCLje2d5gXWKUSamjYrnKhwXy6YZafYoh8YqjGc",
  "key14": "3WZ5jTXUBF6Df3Vk32pEnHkpDf6ybgYzpEbTtgEPMNPhZf2YVoh491TqU2zeJKgfdDoNHjtRUFq5XpWpBLGDBKG5",
  "key15": "5ag1sBV4ZrpxKYPv1uAEZK9b1X1aaHk6vqD7pBspiLBRgWmZPgM2PT26xZPNaTHdvnSDqDvzZAB8Fpsopx3a5n1K",
  "key16": "5VrMMWB8TftvMwDudZ7MtxaD1Z6YEtJNSDLJZNSMw6ipngEHS39zpnh4vALdbMyoQaagr6FWL2VR54ybbRVbGSGB",
  "key17": "51V4zgARpnSG3YAbD11yHTgPqk9jyBmGw2V2JLsRwZYugxpND8Cjt22NmA7LGmSV7rpVPo2pZYqHuyheNqRGUGe5",
  "key18": "2p3GyKLvGaNe3PCtNNvvReW1PkzLD8YhE12e7X6DzMALvSjYDHXMkF8M9dNVJbtpiqw6q9pEHDQgxUTTUp7Dqtpb",
  "key19": "4RbDFKZifh5wMDj72cpFFrw6vV8bwDvrQCZLXV5HxGGyfmLN48A7Bf9aUTZbiNRiTJAo8RLE3fS61cUXNnkNzoPv",
  "key20": "3t3pymeuBFEKrYLef9gU7TipDLiP3uVaNsU4DD6tf2gpwBr9LKCt1684V4NZcnmzCgEWrpDkHD7HH9iazDdg2pk3",
  "key21": "3BXMoqL2auVwdebb6rnv6NFtaZ2qp48rgGnFTCtbBaE4gnD6mbPmKTdVTN558qtRiFffzChvJdY4MYNm3h5dnSk3",
  "key22": "2M5ZwXeKgaogBMZgVuBcLYQYEc6CnoPKjbVT1i57QHkwuaSWEEhrjLsMUnR2BosPvUx34QJ2hMYb13YK7jR7CxEQ",
  "key23": "53EU36dBAQadYLdexrPHo1wBRypYEsB1wUbGycPATAFhsDkN9Zrz9TAWufYodY4vVnsZfR1VC9pA4u3RdH7RsVGV",
  "key24": "5nwXJBj6zF9g7sqaVDViUtagbHXD3qHsG1dCyupNCH4ofTFtSBSMGFMxPCUGzSdGu4jvLBqW9c9kdDkfCsfBw8eK",
  "key25": "4wCAdVL1BZtKPY1tnxYjfvz1djmH3MhJhkqGyTUZ2GeZMdzTK4wWboY31wcGijgG1nu687MJyU23f6DvNenR9Q2X",
  "key26": "4iopr2LuS6dAbxQctwLxRFkdoEJUvQmKw7BPDCWZaiDFp8NnKkX5KjMctRub9n7XGGJuBB3JSm2jDbToXfW4JDYr",
  "key27": "3DaFJQHGyAR42yUTehgMDWLZKs8n4SJhbeiRja619NpzpMgnmdSh2xmvoe8n9DMrHHUKakd2dYHGHSpEo6dR8KNy",
  "key28": "2xuExiUh5ivaMZRQq54KUaAiDCAiki1bnj6r5Zp63jDh5Zz8RGNvzMYZJSoMYvPpYZG9pqChNT1k2dYfS254NDkS"
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
