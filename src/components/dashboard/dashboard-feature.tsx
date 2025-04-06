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
    "otNxfmmiQ7M4uLaqb8YHZnRUgtb9c74iyWjMt5Hh4ndg31sQnbYDjBGaLsxiM2riVcGV5JE6eQvkPrNSZBnk8zH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HUfHK9xAFNcAbGevQNCYMb2HLXujLDSVCunoNobHcChGhCvDsjNecSxi3afYWwxFgKjSfSjePBiXkTG89p27e3k",
  "key1": "4piKi4WHbr8cq5jEQCy5cJxa3s26iLk8skt1qF9C68vAGYbrykpfPMCiGqHLFq3W9D284TP455kgXL9AWV45w5Bb",
  "key2": "3GhyQqK2TorWehAu4VRRxuQHYFsD4cSE8yayoQn53XTwAcgzvKeotSYyWAMbz1dKHNd8zNriRp6iUWTgXRZVWQo8",
  "key3": "5k7uiuZywLrGWFBoEEgoJwLf9EZAMWetH5JWBtv3EQx2sQHZuaeuSRGVxzMDgW67Y7C33YGXM1PVjokUDevWg59B",
  "key4": "5Mz5sHzaRHDuFirkzcB35Lq8TVk4fUP96qEpxv7D5kJwogM4AyLdvV1gxwGCtx5VXpoiwFyue5P5CVgjt7P4nf7h",
  "key5": "qV47PkUfFnPCRTK7NZcDipeCHPBSQnU2aRPsZFzNcdjtR52ruxRKfw4T1CCKWi2UKiJ3mAmWTD1DLp2eE5kWnKT",
  "key6": "5P5etQoHR2MbLYcpqVzyxzJKEkmsjkgpKh1sGMaJxFASsSUEpSuD95mEYNyQnFfeW6fynT2i2gAsz8Z95feAW82b",
  "key7": "3s526BYBTKPdxexqHtyg4KW7R44jXkYmHc51qjED2fuHAgNmnt9dLZytHU234d1wir8StfnsCgMDqUPfk4GXH1jP",
  "key8": "WATzHy94CH4opzbYZZ2qWJdMyvViNwx77HPhnuw9yitaKzR9oBN3DvpK9T4cUyUHcAa4NvVLT1KcD3gG8XAEuTx",
  "key9": "46gYEvht8D9phjS5oYF8kAWiuG47CQ2eedTcwysdJnUKg6Zrj45kYMPCSv1zoMmMoXnNSTMD1rKHFtb4K8iPNNzN",
  "key10": "K1RgbyG9jjN1mGiACYn7Y7TFzSFp5cPVhGFuRQhZMUQc6DzuVwCDgKpmXbrdRNvBmgXBHgX3XZuApHY3uCnz62w",
  "key11": "3Fzi6Yn7J7p3TLncnfZHfRFwkawTmK4NVBCvvRoq58z9v3fzfMbfGex9Gxe4rYx7LAmfrgzoXK9VDHVkTDKTXZmE",
  "key12": "5q1wmzfeDZ8gDTEy9Q8MjHb6aXmo2zN4s5AJG9jyDWCSPf3Nty6TkdBxAMgQfZaQGSAp1XdQB1QSfBZXcm6QuyPi",
  "key13": "43SkGM1WvNsUCu5QDYLLnWFkfbbXSCLHYTKAyx62Kj4xq6tAB3yRCqAP7KwS3ihyGCLevHYMKPzhsN2TiJVLPQZu",
  "key14": "3d5amSraWDEtsCdhyBXzr3FaqkMgM8o9HuYrSLVk2xUF7Q2Q7dFo2fkRissHSV5zWxmzopu84qngkU5zH91eeZDA",
  "key15": "5YW3a1DkHRibi2ksQvcRbRXajNLzcxJaSWj3gHqu97o7hWQ6bhn2EjKRYrDdEVkcoxSAwtM7rd2b365xLkjwhyPx",
  "key16": "5QPzVnw1FtV5ubg25earAUeTTu9AuwXUPDDi6wgijft4pvUM7XK6QEnunqcScWCSEjWhrhGix3Vg1H4fxh18d1F4",
  "key17": "4pEARLjKYFyTb5fiiUZ9e8gfkVvQcngLtnZpHz43Z12rN3gSZactCn3Qsh7M1bdsNjwvXmafWM62X4RQf8iZX1jS",
  "key18": "3MVFqdX2xiHPq7km46NK3cKL3KhLn4nQ7UsLo1rDW6T5sgHRgCQWSkLcBrKEkW41mBh1UCXfDvLByajs9vzP2GKo",
  "key19": "2XXXQPCc8zvzqHNcH5cv2uSd1N17ktQMX3GFGMteYA247kQUf98vuFPdNJ6ppaQZ4pbxz8954RzoiAhfLbPxjcAC",
  "key20": "3HyfSC6KTXNwrnqffZEc1MFtSr96dzyepajJW6YsjTUzcf4LVDfKox2ewu7ZyFV5J52DBFw6M87V6wtnVcAT4XWc",
  "key21": "vAVih9vSBBbk7oy5WN7ofVTgQ33pQHHemnaMMEmNmWG23okL6sgeUPbVpMnNrGLkxnjqkmgR6EyYx4iudjhyBE9",
  "key22": "32zmCwvVUcYKhH14qPLkTjRPaM3ZXkE4JwtP56oVVRte1cTBoha397SyVfLXLCE91RMjJzEaTFK1LRjhKFcN41Zz",
  "key23": "tBFEadoWRS5zfqFLSKevKXFrYgYGpQ78gnQNuLuxRZ3BrnimnSZRJ3phvAXW1dD1n1BR49oovpv6qAcjxSGD7Bh",
  "key24": "582vigQdGwbHid6AxKZEkD3RsbNAhKqS2xQLvdxFakPaHENeCoAheYcHBGsmWGeYmYE9wUGojPRU7TEdcg2jbymf",
  "key25": "4cZHn9Ss8B47pFnQcM9xwDxzrGtQLCSZTkRw9EfirqcDPTbTa6QLN1Ja3EgHZkwKXMUktXbJWhmSvsUKVzCxbEpt",
  "key26": "4tcaFBzkeYbDVe2qb5kmC5B5244fDxv5czPj1NXg3WUjg7UYHA7W1s8ktQAyuSoDNn6ZqjdGARCAMsrU3Xavytc4",
  "key27": "4JDbPEeiTYNsuosLxPjtH7rGqrXA7gWkedD9eWNjSbFoF4wNYFQh37hB9srjMsv9YEV6qdmJUF2ztHwufKW7J31K",
  "key28": "3sz4KaCMNX4cGrQ87Td1akPHvu5gSCpWJ1j1h5Bj2Nvpg5FBAhtnsHECZdUue2ZZT2TzNvQtFThBLvyW4Bz5FibA",
  "key29": "3EKp4KJSQsWJWuf7Se97DaF17PfNmJhAQZozdggWVXzbPrfoz2z95GswXK9zgd3izXb7U4sey6AkBo83UuRbZ9md",
  "key30": "3KQMrRS2Z68g2sb27FSvEYEoPjKgQTQjLFWyirdTHVRD5SpU5N18ueThnBWzXpzYfrc2MC3RrjAQRUjD9MavEEAU",
  "key31": "3RnwUvmbL2UFWVZUrAm4q2ySvLBPfKQcEHaGmSPcUcdf3gGqx7iPk8bJzWaVef2aNKUZ4E21W88XhVA1qfsJ9af9",
  "key32": "5odihMUPoA5SiXbX4ExTT6jazsEFoW7nRe3XcUmZ4W8LJvUHBVWGAMqMPFtsXaYp3KzKEhX2QCEZSCWfrJoyCEi1",
  "key33": "nZ6YaiKp9RmufLEZZc1EEGqVYC8oDgT4urf4X6SgPzgRzQVEyNqRfWN7WxmPFuoTQuAHLyc5zgU9VHuSnWNF5Zr",
  "key34": "8DgUonR3t9LZ4kwBqHaa8LKaKGUa8GLK3hdmMCesU1YLyVrf87R3WLaVL9yhwXponXQ5JHexmqFB5q8aU22EvEz",
  "key35": "27FaiEhTw23P74P8ohtsUoKr49S85Qi7cAk4MTCrAC8ywvRydBYurnEJt1E9D7i9TTsN7bMmhbyRFQx8gKbJYaaP",
  "key36": "bXo2WNCrWq8vc6L4Xisjd9o8EYQ9qqY4BVCkYo1sWt7njSb5pUGo7ovch5NRCJ5JhM4uPFZwNVtyLiwtGD8gA4b",
  "key37": "2gJWUodte52WkcR5KnY9hxHmZJ1xCBaaVYdKwQsT1SGdG1pGi3Z1SKHvLUn4vbkCps8ndyRrisEUP4uPDzkjcSZH",
  "key38": "4g2RwhXgv7NFCNv9ZwUCmve1Bd9ps4Un9vjPbkt3zoKqXKPZZfW8T85VFpbizTbMt4KVa2jUceJy9y64irj4PHjB",
  "key39": "3czSKhfDWcYyFYAsPorErdaEwv8Tkp7utbaUQZhBvKJrdA1tzRw6FmjQVY51ME1GKCFsY6nXnBLK3rbV3skfxKUw",
  "key40": "5h96W2XRFtXTND86HJTweU3utBZoryUNokNdvP5hTTfrTaCZv1koroeKexaTm9sQXGd6msY7273VR1wwdS5XJzkS",
  "key41": "4hNzCTndEXLTk5yGXMaEC2PXmcC1TvvVEHq8Tqx2oJqyaC9jC5dcVtEpU6L7bTxix9c6bjvmWdA1faRHVfYfRavE",
  "key42": "22PSQcqQDbH25KwpfPzMudVS5ypjLyUMHDYBEjW3oa6vToMxDmqQCJpRNuTU8wryCzMrowksKCxNECs8pZGE2s9V",
  "key43": "4sXDJkrMKqHeNBLEDweksHpxAzuwpaRSxrFK2FXweznJ81873ZJ8yPbVharjGxoWCAuZA6wKbtThtJ3GzoFFjM3w",
  "key44": "5QGSaHbSe5rECXZXC3xED94fwZ86ENUdJpmGDSdJPTjyaCJeSNkWqvueRo3jKonuRDqNEBv3hh22xbt9CjLq8oDo",
  "key45": "59x4cftqxbPqjGR1fExrnKA2viBEeGn3obLjX2VT3qhN7C8iRpDwPVDr8S7m6R7yLdbnXdh39dPeFvd9uwctAdFY",
  "key46": "5cedAtRpvkCzkuerUp3hWfMrsGH88TPJWTJknfTAtiSfggT1PNWaY4YnmPHjGQumXzAnZf4EYWyZ6i3yv5CGg7gf"
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
