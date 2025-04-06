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
    "3PCeMLXPMfRWeXGjtFkdkrtuid7h3BhGBcAkzvuQAYEvnpnL1e3J2jAKzLek4PR4ahekoUWFJRcug1kouaM7jKqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgTmqynhKntd7DUoSd55vh4V8vfM3qVS7eodaKnhLVgJ5YLNviK44Y3TUFRQBoiWGkPcsiTz4zmf7ytLnbKawvx",
  "key1": "5r3u1VQ32HZeY9X7QobytU4ABHivzJhCZYWSE8sQoHNpDfThuQJYh2KXDYnTCgjXpNsokthYcThGtLgBFoW2jvfB",
  "key2": "VrDWh8KrLj4iPZ3WqH8C5uv4o4pbWYVfEAGqzq3ebhpgXgR3DNNJ7WEmXum2Uyw8gCwM8sSHT9gjsFimA8YQqqV",
  "key3": "5RZ6L9kGG1H82jZ6Wd8eRhjxja9AcurAMvK5ijD6RNEPgQgYySGoK9scTbZEG1tbepbZRmH5LRUGU1j1QY8Jac7F",
  "key4": "6XYzSb1VCH1zwLbZFEB6GiLp83FqzT1LM8RYV3EFin3HRLwfPeV7AT3tzdkeSSWTB1aBMpAUSErnxrUnG4inrs5",
  "key5": "hqxrV1houQfrAQjexQVtH3FfpVXgqzWQRuBPqHa3MV31QRHF7PwF3zhmPLKem7uGf4etswbGhm1NQ12My6rCA1i",
  "key6": "5TQMtwLrUPFqDsGLAWfveTnipJ7yjtmjAqCc3K2LrcDgGce6gSf2zCgKiGsNo7KnhALnqnqiR6PReKnoziPMrURZ",
  "key7": "3NSEd7K9RVAaydMc9cywPNBCavihwcvbx7D1VE65cGUhRJGGe4x1Ti1YaP2EiD1geGsqVXB16ZCMG5nH2L6SWPmt",
  "key8": "3Amy7cAKPMBzuDkr112GYUgsgRLoCSr2W33Bza9Fe18vY3MtnNuSjo5qUekhUsqCUyhhsQHV1G1MHMCNBC2wUPP6",
  "key9": "2SgGnVPHHyuPqxZUhYk8tZGzrH5TrSnLqcfF8i7V7vJ625f2q7ippRRAWCUENoD6KH39Y3NweUKyzRVLT8BGLV4C",
  "key10": "31HhwKAekGXkBztd18oEvtxK5NVQxL9XDUTJwaZhdaVzE1Jev9ot6dNCYMYrnAErX4MQqLcwWs8zzEjZz1FPVFAA",
  "key11": "3xcMHAfQZt6XLYWCAH84H64oZJ9SgFcWMgNb5n4HRvAYhkYnkMepKv7CV11jPAh9dYFtZ4QxbcMqj7nCdzfWtGSw",
  "key12": "2fkr6eVLnmb7X8NFVr2JB44jvzFNLKotgFutTNyoPx57FTtGUkd4AmDXaZxWT4NYYcT17LWMANy2HoP4Dvg8JWUi",
  "key13": "23VcfuJLG4P9M9eVF4eqR12rcyPa43EmPwKXQH32eMLyZxaXhcewc4y1hGexrbrKPb4Bopvy2NCPZ3HvUo6GDKfb",
  "key14": "5EuCtQUGP2kfY1sNvYb6grhWNLiK4UbAApCDArsAAL3hzEapvUsg8dNmJLmEoY1SW3N887Wh32ZQcXxRCZopQnS2",
  "key15": "2eD8FPy7xukYUR77CoeRtGycPCXS3QvvffvM23Vyc23adhE7cZinNUuEvGMyu5bkvb5aDyTVTmihipt2pdrtYd5v",
  "key16": "5JXXrz8PjcbD2AdkKMPyixaLQinLQ4kHnoNnnrhAHzBkowve7JCcampjk9LPq6DFnc9xEEVoVfUvPTgCXkP41gAH",
  "key17": "2kQvrj9wCxnhKwfD8WsKQrvMXRus8vLW497adWeHZZ32ET4yH8wuQmBXRWUJigv84oCsgZtoyq2uAdFCcLg8mmXL",
  "key18": "Cuxe4uN2fXmHieD85P8MkHrjFx5mW7ENNV6WxdefhU3rGHAuNPH2EQkqiVKMPS3A3Eq9MW1vDTTAiQok12mrU7G",
  "key19": "33yWRDeo2axLwAVESh5d4YeUKuSyihnJF5V3ksAVfS4dm7RtRjwGwWTmZjp1SZaLqTzF9FP5xYwAbdHT8E6NFwNT",
  "key20": "622SY6ah9vDKnuH5tKX5PSvWirx9S2t1o17L57XGNWoUdCVCv9RaVPqrdXv8eEj8D2dNS5Zs3VPWXDgsyhfVGE6W",
  "key21": "63vm3eYhSxzGWEEogS7nBLyeKoMw5cF4VeVdCNfjChUwpasc5VfkYL544DoHsHq6EfxAx49vb7XkMZLKnCdC3J84",
  "key22": "4wGeHwvBAqcPzVws3QREfbmFZ5TQw89GYRCaxAaQxsMYctqyJmedRZcHEcGxMkHEKsH2rQznhW9RanrLdGqPnDw8",
  "key23": "5DXjn2gnVEfztKzu2zCNFpUhFdwD8zrC6Zf38qx19LLBiiLhm8j3nGBanqimvsUi9hK7cb9HUVJu8euGzTAc5WP5",
  "key24": "2dL4SS8zCYPCoNADVSHj4f4UBG99NFVRwKRbPewWEdYgzVQL5X6yFzyHuujPDFJPKq4J6127kyLsWnDwwXKue6kZ"
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
