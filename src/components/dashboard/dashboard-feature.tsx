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
    "YqZh8J4r4JQWFs9MiqJirEXgsXW98akHo8SebQ9LKksTcS26qmFDjHpS1T5NPSbfbZZsDeT3V1TaJ16z3ibCSBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYyEQUvfC7HDuawVd11wVD8EV6vpLi8nfCe6XfUXyMHyfKWjTQJwd3hNnSCJXuHQJYkoQxMr8SGjq9LoFinJXdE",
  "key1": "4ABZgiagEdCmkGh85wWui2cVgwFzKSbdN2Ps9qsuWkt6zB2rGnGhpHKwmAHbVyY94tMsbwgrRft5YojG9R95Jv6J",
  "key2": "1J3ychdZAQ2TiLnbU1acWT3p2eDvcJBjrEdzZUE6RAepZpH8sd4B7ut86zKUGmX1C8xM7CwY4Z3wRDKTmVHzGDy",
  "key3": "29PasHsxVhCAb7VqJ4nbyF4C9c9L9P5UAXNAnrRwCfGHpHqCsMuJXxP93gDSKErxvbJ4Fx5yFkhqY3Fnb5RMVtpm",
  "key4": "5DSa6sXvEJG4uDRVrrP91zXhA1D6kuBfwtrMU2nbK4h6Ai9hKNB2wo5kSXwXDS9rKuKv4cWc65G4d5hM2XTL4T93",
  "key5": "kcimtgqzSLUJGb4YJ2LyrQfnquGEFayYqJRcrP7Lw174Q7sFsv3G6Svx6AvT4bSvannCN3tepjn4oSQwGChQtwj",
  "key6": "3o7hTmW4tZuA8grDMf1vyTLPiN5h5qPvbcmCCCVNzimLyZGFVJANmRYNrBEkmrPiuszknrdEGM2ctwJ57D39kDxQ",
  "key7": "2ZG4Y3JWpCcZGSGck6Ze1rF4F84Kk6i8o55Jo88WtLmh71PBBqkzBr1RjLbLgSPvTgYknGFPCifBDPJCiwd9L3Nm",
  "key8": "RjyyrwFBpSS3D1341CcmkbrfYqYVoXVLA37nWfmwx3PPmY7FqAGaUmgzkJzDktTNY1TCbWdfNtMvgNWn6qaLR9f",
  "key9": "Ej62P6M4bZPyURVktZqyTo7ghgUxYB1TxefZLtTQ8uCcVxEzhjAupLwqkne2D2DMpjxNg9mZkACPYxeqVoGWsr1",
  "key10": "59dF4R3ft2YALggsZe19xjZ76ZJEN3hkuBohs7Cn3Uo1u5EW6KRxCaJSEA1fMSXxAQfQKewRxrpYZrXpMB1VX6b8",
  "key11": "4kNY2puUEy3qr96nLv59LoNn542Ym6jNpv9t3qtNMTFCf9BACNg9tpWu6Y4ex3RzHoxAhJ3Kd6BkCvEAjV8ziCnK",
  "key12": "xWBM8LapoMe7c6szB8ENXmzY3tJv6me8WVTmtaxGCtybhtUa8gcBphjrUHGjSirZdkmc6zna6c5mQGVD7Kr7jdb",
  "key13": "AXuPmEnRzCvJDRBdnwUybsZYfMEcLJUqoVxeGSE7LgUPtsWDfeNthSzYLLNL73a8ecyXFLqh97aHwdm6jinZjFk",
  "key14": "4RCE2KHczAvSzQVyjK8pPZJ6hyeG23AhgGaYSEkgjaRb8EVyJCFpgKDDudPeR2ZdTW76K8SJCn8rie3WXerofmVJ",
  "key15": "41WCXhKo59nfJFE2zjpRQjvURWpw6gAz2bsvS2rWcK9e8LWSUSAN7YWRhJG2ELMo1c77XomFhUs2cKyvF3s82QUD",
  "key16": "GVPgqbih466wo3F7YrvEcRqLRp2uYUDLj5ijMrtzvRk1zV9vXKWvNCz6rFujeJpk2UFV3dZFdMpfWqLg6K4eZ6P",
  "key17": "3H13suZv1aKu2FgtbASUF7GxrjaBisYpoBS1fNkg9JDUkhLivg5YbeefmvV8fhFnow5uZ6nfdjw9iFcsfJzBxy9a",
  "key18": "2uxL5xwZtdyBcdtGjamU8eJJvpLQcho34Vmusn27dacs6nTXz9ku4pD9e7QsrozkQuQQSS1xTA812HwFAzkqBUSM",
  "key19": "4kDkuDowQ1yHte4wF8b2krq8Jjr1Pfg1VhHgoJRCXMzK51Yw1xFaEwZzzLrKHnRpYMZMUmrRqkHETfmxCwtGCY5D",
  "key20": "4UXuQeg1NuYAucTsCEMeBiAkN1FQ1QapE3cakNswktbqeGpNw6Rw9kUN5zDg7tbdaYqU1DeLJhtpbEFkpCRNtqkw",
  "key21": "3pkHTCtuQRFfCjaSh5XsBr2ttZFWsM7sjghHmLLRqB64urSTkJ5tX6WNQZ8o3rAJ92wTYjsChKZgfFj1BaxFierv",
  "key22": "4iYPw6GJtZbCtaGPns4hW2KT8EdRbh3m7jwXm5JFMSmbAULKAmKpNcXTnpA6Q81wDAe4pv9L7isFCQkY6V16L6RH",
  "key23": "4oChRpe1hL5K1vWFHqU1g2BePWsWDPjP8mFLppMcm64HL12hmrvCtWjCTUPNXARzVkrxf1UDLjy1fyPSZLjxPd3E",
  "key24": "35sb6dmDEewmPbbvqr68rFvTqu4i5ReHxe5wwcDsuJ1TNTxAxZQtnH3j1DYvTxdunSPDvieVafdrvcgoaDb3DRAt",
  "key25": "3miZKjBFX6is1yq2vxuQX3SNxqEviwRkYK1sfEEPY8q7K9PaLorby6EfChQi3vMYcmWc5sjmEc6AP1mu3LvrtdTK",
  "key26": "2UXnCSxxNvnv441DTTYejYhnk3YQE4G8fAWrbsUMttxd8hJ3MNtxLawuiKgPdXdeJxt4wk46mFUVysLLdjGNQYqG",
  "key27": "2g5bPUMWv9e4aRebkFVunyXXNp2rc96KoXEyLC18fWWjUjYyB8A4qHihaCet2qx5k2aZMHJ1kMr1Jrj4JTWAXb1H",
  "key28": "2JwPUwLGHthSW6Wd3LyH89zx4MN89RuaVrD545B79jKPnqFEn9GeHkitk82jVmGKtnPJZBbaMebvGZFX2zJbBs79",
  "key29": "2hibfx7wR7evK8dSnnraBhW7ZoeFSBwwEwAjfXghQGQybHy9pLD1Q9nst71fAPAPGhtExHFFxaLzF7CErVrZWepb",
  "key30": "3JtF8YRzV7dYeBHeNSJmwW9H2bLmzqiNThqMPu1gutLD8VpgtdYtHM8jTn7njbkxUuhav7PA8ArGNpk7Lvj2iLvE",
  "key31": "2vfNkpdwYKnvUzL9tF1a4ebXyho69baZN7xKcpGXfHXXw5Yfk7bznpETgk9Lx6ikh5iKtGcszh6XGjgXHkzgB9zx",
  "key32": "4H9odHaZtaqV3SrkXuJ6j7uHiScQiEPcDATDFajD2ZyBGGiQfePZqLMyeybteVVJqsZwm1Y4aubnUoMRprky7ysQ",
  "key33": "414mA32jA4KcQYaUcBPtZxhtF8bQu9ck3jJxUAm4WxBwhwTvSDTfvkEz48q9WSRqJxaz32WZ5WpM48QHdgZRHMKn",
  "key34": "3D4V952gPN6AjiDunGWB1kMXw4PpRYpMmSVgT2pmmh7H9Rfm8VC5ahbMVtUZKs7d8acGzggaQ1XSezQDZ3mdKCa4",
  "key35": "UvFPFd2ixrhv67sZ1rUpyxLjA2Nu8BTEowAUBTxLsHWe4DJgrW3k8jre1k4iqddL2VsEa81uxkL6pQb4EbbPNbV",
  "key36": "MXqGkhiquJqLXJYYPDbZHHWiY1yGZTwn4JmdZDDgw7jwRtwyTYuL58vX3tkCNN8fXDJhw9jyNcLcLKfsuEFjwnY",
  "key37": "5A1KcckPfT9WiKhW4axzxsRhWXUwLnuakyy5j8X11YGTPnqpzAKKHHR3WCD1RvwxezrxB8MLXdDgQDPgZj9D3qPH",
  "key38": "21dteLpPkBKRPno6Zqmp8hT3QumA7J9saM18XzdiKDzTMKHZsEJbXnhDYkuauhsMesGrpaQXzL7nQnXhV5R78H4n",
  "key39": "5S7GF2DEgxmxNJKH1tuDvoCGMVXBu5pJQmfNCAGeCsH4hPWMBANfrQmxD2ZDu3iftTV2fsSzbYBxc4DvtSawFmem",
  "key40": "43QvB6SadbAgSHGedzWkSc43wD9YvWmhR3DLJuvD8ivwpubfAczvPjGxVnXYC6qBjuW3v6VrnVUQLCEurQdHYSnQ",
  "key41": "5GcQPMCN29ENYyyoBb94XXBRtdjBJtZYg7JZE5RqyLviCWJYVVXZke9tW9G5LX2pgARvb6KudCFfqw1WokQ4usxH"
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
