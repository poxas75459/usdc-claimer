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
    "39khn3AV8nDviRxNpGQR2Uh1AMc9DDshTJNMDmYr4H54EcgMmXnpx2U9jyyrSekuFXjmKTg2J9hPDVUj41AFpeYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q5utL1YypRK21xWn1ifepq9ZHJwgGCjj2Ffbmf7z1RmaLnaLXNLUBb3AK8LrTtfR45yUCoyyCcaWP9ATyrCmDJs",
  "key1": "51scTk1rG2daVoN74cX3kADicRFftLovS2Gt6u25p8NuLvuZbfGa6N5GQEdbh8WidwBY91BRTjbQb5xz3r7bE1DH",
  "key2": "4usBWrV3KgqeeYSf9QX1yrvJUi1ZtPnbJBdqTa49jLXyhosuvRtWHLobbNVhx3rco7P4TR27ciZp7TBaXuAJMjpf",
  "key3": "26FAZPF4LgZdxs4CGryDw1UoFcEcWcxX6waBcQ6j2XW7pp2Ko6ou8iZduf8JmmGYVHPgvxkrJxxjErqgajqhTmUp",
  "key4": "4xTsAHWqZXfrnhcNPySN9Sq76WphW9EysEPY1Ax7DVz5uZzGh3FgXEMrfo5cGR18yb8S7rouzhwKdh7oiEj33yjo",
  "key5": "3xRXeM8fX3itCsAeBpiwzRbrwDpoPtu5edPh3wPNW6xG7jQyY937bx1oPeg4Fp38fL6yfBSrJgmnZ4MfZbhB8Xn9",
  "key6": "uew19tT2acYRCaLJTr1GrkxccDEKzPzk6bGNoUiURSpRWipmwtKupmbvK4dPU5GA62RsuNmJp435z5MsCcd1rNz",
  "key7": "3rqarVaezfQmHxpX7ecWwFF9JUjL7N4AXPXZZjhmbWfxrW2CRQ2WfpTrH8A3HqPZCd5emqd7BsMGpcYyJPyRugVA",
  "key8": "5ggnG1RXv7mpbxqg3213UZRxzYqN87xPDDiavgpskaiRynRdC8nWR93swqx3LG7EFmkhHZ5zbPGqzdPzu9Ta75yR",
  "key9": "4tEWWnV7yE51jyDpTSYUMKtRUy1aDWrbyqwULPcW6ggCKubkhitRs8bShkRs3JrtRaDJur7AJQQX5Mp9Mf7bxBdz",
  "key10": "2t7cvN2LcsBLjcmDDPWyFfeq4Bv1KxTjo4cRddxuBMtBbtzHDAtwTG521FiUMGgf9zmZe1zSGRqzyUKvrefBQWkx",
  "key11": "3XU4A8xuhfP2qqQKyttaWgseqMBLpPGaH4Tb4Mo15Ry7QYq8BUkMX3AEZCAd485WS3fgoteRJNThorU2HfrsSv5i",
  "key12": "25vWsGEfmkFswCxGSCaeoJgqp2M4rDYZqmiznra5QdHcJKpZYRS68jGVkxNj9nEZ8shTzveFp6LpuyZFhxAeCJVe",
  "key13": "5UNeXp4cUQ42k3EyVPU4Y1M9PeNvt8iPkoicpTBUHUKZypXyADxaUjPY5sfhzi5eSa3ysioQNdrRQmBwCw7rQ9PS",
  "key14": "2X7SdYEbS3NSKeut54hb57bQ8kc3KbxM5wXt5eikjNQNu39oPpGG6mdaUn3enaptWfzWa56c91YE6bzcGf6rWL6h",
  "key15": "3ecGgdkqRbSXNkDnSkBmvuKVK4g3wCYawmdc5ZiuKgxqXuUBAMShnMRkj5N8bd5cSFLVzN3VRLVY6XLeEFjr74FG",
  "key16": "59YYFL1ivwSVg2D7ynpV3wRMKbovY4nrD3GWtPMAAMSs7Tte7aaU7wLrJtT9PaxUMSAp24GNpLi96KfvNd9hwkT7",
  "key17": "2nESTQyuCvVDDRuFXjLFFccPMjNLwVcaJWzpovFVziQRPFvCVCxwr63KwCR7MthgcEro8qgQtEbbkyYH1qneR46r",
  "key18": "5rvnn9PHmt6qduSrrYzyea2TWWsSiiLvh6jnP4ZGeHZDyRmXr2FpYfCFHuDrrYLnGP5T3AszS2cxHuyHqXXZLUik",
  "key19": "5SEVDVnkdKyWSLPtjjsBozPwajCsL6cYyTaZzAwP4wgi9NMU1Lv28WWnWEjcfEpn1BnQYs7588TyriGfmxHWXUb2",
  "key20": "4GsV8hc76UYEBEBZfnuNwXynkeggQp4c68QNMxxNufjarbFZ2gJQJm8waqJXeXkLRLnJ5nDMrMJLtBmENYjy6mF6",
  "key21": "4ijL7DnduvMCKRX6BpYkgPk39WUBjKBJU2QJV7Drd5fsBWngMsHrGmxmpvcbyv3cZ64fTYy5Y79fiwyoK8HEsWbd",
  "key22": "sdiRaCqBtLoP2qfo2tB8Yy5ep6jB55jpTY8ABTd65PBc79u955zwYi34oEn1maPpq3JT3j9srbrhM5hY8fxcFft",
  "key23": "2ACcVM362SWUzPakSYpsFsVQ4SEMXDjPPuMazNFPME4DknF6JQCFf2rw9Cfi1Ncvmt53Muf4TgTBLEC5RuMLchJ6",
  "key24": "619H3JqqEuTorCbA5zRbEwznuqjD4J6FuMQyP4QZvGUqjgYEqzh2eyUpiq4THZu7Z1NvmMoxS9EgBjquiYRbLgi2",
  "key25": "4PdaKCCEhfKGhr9a4K8tzUXfdzzZYWdybpx7XaVx4ua24mQiQcq8aagQPBWjQ6MEpvNvkzWjr9gTVHfgKyj2ugwX",
  "key26": "37psRGcGeLCW8raHFm8fhFsY1Ts3nBpaUjd2ufKkJ7sFRCBzbuwfJR6SAsLJPgbsLoMUq5eBQ1nNbSEVSDhYtGJr",
  "key27": "5uNH5KbUbL4a2BFWwRTNPpwQXqaF7gtUb5KxESHF1E8ncLmv1yynNBf7813SdY5z8hHDpYh2QFyqhLEqLzZm3cAn",
  "key28": "41Z6zS5dqoZzBxzU5zm3poPJQELJYydU393SaWeQPnptu8W8NwmMC4CeRaF17V1xLcBzTjoQT8YqFx2eRUP4jF6o",
  "key29": "4vnwbdE8jq9RAQGSY6nNLL1SQoPXUyHjrUNVZ1r6YjMKu6Mrx2Rx3WQmV9ToJrVCm2a6u6QZhFJ7k6Jgmpp8rjmm",
  "key30": "eHQkk5LAxZc1QQunRzPf9qWJbvY1Zyib3bWjY3McGvLswDJF8aMHsTWqqJmKjL8Vadk7tuuYpaBzo3ZWZeT7Ryd",
  "key31": "WmWeKAmxW2k8mCkQR4yFuuCiR9hCq817SAi2in4dSTRy28Di1tsFM1hZWhXKCfA6SmN7Shdr8U1Tet9fmzXvwa5",
  "key32": "JP15JQbUrZJVrYCrAZNA5HJq8vnFPB5hAaBjXA3XEXAcLUQfNG6gEt8CBwkz4Ri48NSn2MfJMG55fFQVvsQqBSs",
  "key33": "2Yi7gfQ2dENvd5Ts4RNqygADqbSyMM4pC4EGdk779f39sYq62wBry4Z8aQrckxEzKD5CUQfnrhVXGG2mHiQ2zJme",
  "key34": "UnZ2tMbZr2iYdu8KZNTF99W7JCCrezcixXKM2V2tiKNNhCPKfSQh4map5PuvC7p9pH2xEdQq1ZG3Wvijzq5Hi5h",
  "key35": "Xia6TrK9NrvKeYnEFBLJiLxEDQy89seURFzFFrM9vx4APu3c3ZyWxkcQShkhwAyRWNRdfTtVFJdAoCVF8km6qR7",
  "key36": "5269sAU7Z9T1nZn4Uri7S8sL4hBsu9tiJAJGxcw2bUSWXfG9Xnv382zb2QE1jjuupgc25x94AY2sfp5kcd1wvfME",
  "key37": "4C2vrJ66ffnGZh5w5c8FV8sxx2YhqpS1WPq4Bzzbr9vcqSeSBBDUhYbTRoUgeXarp7AKnMj11KqUbGTXLwom5dYD",
  "key38": "61gwxZYV862K2pW1AWpTKv8UrDPJ31SKBuzjbuhik3Ta62ej2JCrNaN5NqNFvJdgWNBmopJ7ZMsnieoajUPiKvrE",
  "key39": "5aYaFuar5k2rdFvUtYcFd3a9bkhJJ2SdJWdfAnHeUFjDmvxxbweSgPMqVsAHgzsztJcJVuzA8xc5buNnyoputgRV",
  "key40": "3jsCs7NkJutSSwKAoS1rfWUSNb1EKnVhdcTNujCnu8zyZFNSpVxrdWb1MpDd88YBRrFZ4XpQLDFJh6jnX1FAFCfL",
  "key41": "XAdAWxeUyRQz3mzAFsADguy9BWbdMGMYrBNjVSqi1oy2tv4k8VeeHdnF5fq44NAp5eYLMNCopoG9eDkeDx1Yfsf"
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
