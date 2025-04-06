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
    "5s6mt7Bmo31AEa8EGxkEP6xd9dm9RBEqmeNwPz7E3WvmKQNGxBYpVaXmyJWRSTSkyk5CNUwbEwtQLijPsd12yUyE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zi5EHyTh4xjJE6HDGoACYkwaBejikMcxf9k66q7avzo9um6AZedesob3zZaafgTyp1SuDFGjPksHSJ9aTGavs1p",
  "key1": "n92GCUHXLvnRvGEpkuxWEJx3xBfA5ok2H5J2LUkMPU2vLPdTNGqrF2mu4QKY8g2BdWUUE9CR39KbFxse2XU754H",
  "key2": "DAhY6VCF3cHhaag3EHFjVkqngnzAjW5hdsTXWMnQ5KjHz4j38DDo2y3bVJHdsQ1c4dkAmjtBMw3adjBkv3gf6Xx",
  "key3": "hi7H8e9K4QyjzuCjw7yAcqLacMBBQMg8JD6B1GwF4Y2zqK1gHJLsu2ktMD7Wdu9pDrcGDNVPFir2WufJKtGLo6o",
  "key4": "4m285an8YKyGtB8ZGExbUsw2WJeeUVy55QCey647AcEHwQYMMx8w6CuE7RLCB956dd15qZJaAHELbhBEkC2XwgyN",
  "key5": "4JBDKK7hAjRmLHaNEUJicVG3ApVQdUvpcJKXRs8gVCbhQR6WQ2j3ok7Fq3He9g4GxR2TFo6VnfGmzGxUy632tm7S",
  "key6": "5KKcrWXKZvrnMnjuDLma5CGWJC2wRuQUisbYs7gAhcDASqmWjX3NCTDEnfcEyXeE3BbvgDVmyRyz78YmfhH8sWk2",
  "key7": "2EXh7Cj8hCkCb4mnXRtnoJcJUYSnKY6afDz7Gp4aD9C5CLnNSeufPUJMnszPmh2E44QxRXgR7XSMWPm4cKM9hFrQ",
  "key8": "3G8xDqJM6SqpDMkuenMeRTtKfh32K81TdQYqU3dW6KWDzozN544dyGbrhadgMS6GoE79EsZDvnKfv7isjk3q6kT",
  "key9": "3yTwdRvg7884siYBg8N22PKdsFGiMiCLYi9GLrAr55EMSH7wQbft5VjmTfgASDj95PYhcS9rMGP7zFFg274j4o2q",
  "key10": "4HtpDXQPcjnKSc76CBNCjLgzEYo6owU16abmtg4tWZZL7WbVQegqPFmGo3FiVaEQR86ybzyAHWRZHZ9d3A65L1Pa",
  "key11": "4egyNivzQ81F9P8G8r9XVV6vWMuKjunL1fgUvW1HjQZrKPap7t6AWyFu5wUNT5bJtfZ62fiDhEsFzhUv8KHNNzM5",
  "key12": "5NDngssP2EJTKiLvjzzhpyACY8eGz6q4FoARQ52otCHm6xMvYZQrfVtnYoZZKyH6E3ypNEHpuNfa341s6yxhM64A",
  "key13": "3NVQpMW3rYTnQTTo7kGWiKA3ZANnqt9MUDtk4opnKqcFpChDMAn6NWMsRsF18t2MSPSj5xe4P4fWx4wZdJAXcJEH",
  "key14": "oUVrsdPy7TD5k67KEmGKvDvcqJniQaNty592omYYTiD4893ZoFhRtd2tGYmSm4NECLXbASVrmeonfCAZMLsNJ4G",
  "key15": "5NyaWBGp1NMaqKkdqoWA2p74yrvGtanHaZYGft2vADFmCesPCyUCTm3eYE4fsy6SbEvLpcuPtBvyMyb44MAmZ7mC",
  "key16": "wSaGAWvFRJszUeFN6MSdL1iHqJJ327qaoUCxdk518q8TNrGGEAaGmwowr9XymDdx7uMiDPgTrUpWhBDnSCK3a7Z",
  "key17": "5p8FzHk6zEK5nyvBBVffE1nAHbVmtP99QeuKa6wXmKTv128KEXD45oy4tGyXyfqX8gWfMeNhegWyVcPUDjBomZtA",
  "key18": "VhGsGMJJeUfK51E8Rv6WGACbUC2u6KKrNpCFDu1fwa2YVj12jCRSpHzR1BizuTs9dcAUXCh8p1aGWNcAa9Pur1T",
  "key19": "49fC7CwYwsDXU1riNDHrnWaGu3dEyAaGqkKRa2JSKTwHgWJWXa2JnLCwGAxSJZawtTrKa3oazhd74YxfVnNbuPs3",
  "key20": "2kcj5vYaUZNnSv1RsRUGsFxSnqjjotP2xj11XJfV54gUYGPSZBpeY7EW12NHQPgVkhDaTFmzsaX89pLX1cXT45Pm",
  "key21": "cLmdSNB46kWGeXdsHCA5HFqzcGW6znUQRJY5Lx1HBwUjdLfoTafiwNtNLv5Sm6KUcHmYRndecg79HJgMc6g96oM",
  "key22": "3ATCcUG298yN35ATiYrCUnHTNuthKo6ModdvT5XZSpfZcLtL9GTKhPoe7HjXGFL56jFunLA6Qi7pZpTUp1u1cuSP",
  "key23": "9P8jigvUh8WDZwA12i3LRrXbViqd4yNjAKPnaSq9wsHU7S98gicdxR4hmkej6akgs3Kd2enZWyLQZKeb1dB1i7Z",
  "key24": "fuMxVH2Gg9DLu6wMQxQWLQSTGQrNYHdxPFMMoWT1rD6uRBNyAsaHdJWwq2xgZaKg8JcDWdt2SUA1qFyivWGLM9G",
  "key25": "5xKp4RcFTUkGVo11jxSpY6hqSUo17uZg7iduD5w9YcP7uYc92Vuc5E5XVnUk8UYzpkktkWVdMA5eRJPFi21nXGNJ",
  "key26": "621UA2K6ALJbB4RoNwxgG2cKddr7AazBHUTYRaccEid5WumrKeMdwCFTojBqiDqN3U4ZRwcEjSaVXtwQEszBEYUH",
  "key27": "5aVHdZnxv1574yXNh36DNPVzsaTKbE7xB6AMUVFFNbKBFxYfQaQX3KnZ9YiooUG7L6uRULcoaZwgVMZafj4bjLtY",
  "key28": "3iZ1h9pgxjRRNyJeBWhd19T75PVupLquBuYwjKTB1ZD8YD5DWWijwezRMrRSr4qB5qKokpaVAsgWYfVx5ifeLFAC",
  "key29": "2DRgq6iZADkofYJxUGjPdN3LtSD5QkPnpRPTF3f1byts5GuwkdHQTwMm8CpwXCoPnRHjGaBwtsaAuFDjxHv6E8yU",
  "key30": "3w3iaa2JcFPJmKX8rF8LRWEx56d9UUCTLE5dS8kxCvwUjzDPHv4sioQtUkyyhH2a4XR9DXxGzLDGBAB57PpZCgrv",
  "key31": "4173tVHiWAfn68HENuZsxJN89HcpzS7ZGovVrYDARk2P8ZVZsr4ax9yd6AzC8nXY422QvGq9ssA1DYWn1xQ3hSGz",
  "key32": "4RdULBcKZ1EmHSVrCmxKH7hziXkTLA1Hgv5Q2jL3TS5tu9LqwTDcBHX1XFdUKgmVD2Aa7M1nRmGerTNNpifRy27G",
  "key33": "2MQXytnL57eVZgyfn1kteav6NGFTxjtpxtqiRx65P8cTKWxdFYm4rCeHaQc9Zy7rNxCNRgWoZfSgdwmSTwTLiPDj",
  "key34": "55Pi9LAPbo6n3e2beZQKcfF9KUZD6W3gQxxXa65vHMDQqqMkHkctnNaiapjeDuf7pt1Vx12sEbXxAhNoeKxpSuU6",
  "key35": "2BmkUenBLmLxDyfud1gWQpsRD6Ym28HMi5AZsrMNUiUoRgUJBjfqPn4uf3aqH1sggJPTaniXjraZp2uZ19Lm467N",
  "key36": "2r3jZZ7bmaygxA5rjwkXWEt7M6wwkTvaNQP82DxqbFhfqC8wu9BEMLfJ6Xrost5ncxabbCmZy2hrP8hffjKB32y2",
  "key37": "MbmPz8Rfs6mFJqdCfq2jrQvKFDp6dNa4m657p641LFNwNHFuhXfYyfmK2nAVPRH6rTBXXCttEojKbjmgzHkVTam",
  "key38": "24ZDLLHWAWWUNdpxxwzFveNKYPovb3RaiEXpM6TbZhrEmwDSYLwrn844yXE8VQGtm7wCwfwEnAuuER261GiRaBxN",
  "key39": "3rjRiHobGrFkBja5jXcJ7aoVE6CpNHMReYZjjcjjZ6zw4H1WFj8NsEqHC2cSKi8nNKgBHPE2ws9VbgPX7LszYHsb",
  "key40": "e59DoSWMm8MXvbi4mQZUcizEh1H6jUaXvaM6Br9ddhvSTWuzXzahJgHMPBmZZTuUejyaSY4fWx7VRgFnH4LDTko"
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
