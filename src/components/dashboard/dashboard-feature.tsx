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
    "2j2Q3JMUwe4yKAs1F841MwnUKXjjSbNPxZzRBAwNwkmJXjHPR1TaCT72UTirKp3GMFe4FkGYrWfQPQm3FMajQjMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fMpDJR2xMHuAgX2FV9SzGcET7YLLQdJgGZpyB5xVJS7bkHiuagXsPucoe5h4wyKk5HsJRzaL2GKMVhfrJT4n6z",
  "key1": "3APMrS4haXjpdeEsA45VSnc6DhqbvDyYiFGZjyuCBhEfwZPfXLspRkthxYzgo5um6tuMySjbwbqCobmevPKascn2",
  "key2": "3mAzTo1r2qLp5cZBF1vZfx8Hodhv2f492dzDGUgrukYc4D7GiR3S9dAYn3Jh6ynWiM3DRtt1NCSkTeAGdvStUe3C",
  "key3": "UrandsxH6bP6Gkgt5UPN45Azos1TSwVuUpM5ya3SpGxyvoZ6BnsH57LvjJUitUkTQNREu8WyyebKX6N3FuZYefN",
  "key4": "4hufZhseYadTaGLAEU9pH1246gXAEfSfN2U626YKv87euE6UdWuGEpMc1e5fTQUHS2tiYAj7Sk9zFJ8kaZE6jGrX",
  "key5": "bdKN3pdANMxjikho3psds64a74JiWyK23zrgB15hgCbE1sGNb1fXUZuDMjEqpWYG2R64NUVqVLVWgPxSUcfFPsR",
  "key6": "3n4PLEB2hA3HSyf7kXeNNkR9xn4LRmqnGC96yBNax4W9tKXuYYEvqMyMkMis2gi9XP9wsiAT4ci5eWpkwhVTkrSC",
  "key7": "373cSFPkTMPsxyab6d6W7vi2hZaai57mNYYRv12kwZiLze9kSVEi5V5fVuRgK4owgR6BD2fmeEMNJky7XboQRLB2",
  "key8": "4f8ivr71cg1u1aedg54q1p1grS4wYahRfTWeYAL1iEpPF3GiY3zrjFzL74Npd4uiGWoheLAskfo7vrThY84L9gaJ",
  "key9": "5x7ibuU7GL8ruQJjg1j5nh9fjBgCK5Wz6P1JuRkuSzSwVcymHxvYYJDFBq4DxkRgE6eb9QuZtB1Uz1jdBFKcxEHG",
  "key10": "n6S3AyCTiNojHRdukS3ojGzMq8RL2dZTmg8g8S77jwvNbP71GFCLSg7TXGaykb28F4wF9wSE9dFNF4FhuDnc6i8",
  "key11": "4cvizphrsPngiuB729Ty8tSkjFrfooHymbsfB3GtpH2qDDBKqpWhDhDpgH1QoYyNG5rBkRk8SP3t1DjsZZtffFZf",
  "key12": "2y1YEJFhYM8zZZ2rTVimwKpLLEMeZGAB7oWT7emCBix1Es1dzzaqyPtvGGLY9yY4EFtyEb2oz3nDrVsr9HJeLCAL",
  "key13": "zbpYMCa6ppsFj1vD4jHqh4CzfG8LJVNY33kta4cANypzx2NsivH8P31eqLQdvAUZkBEeybTHDwU3Fauyeu5hA9A",
  "key14": "2DvYWdUgwT7b6XVrAN1rfAYsTwvRqhjf7aiRAnmk3jMvyD8h4egeWoPRNyRADSzNrbCFJnPEgCQKTnnzkMKmMVeH",
  "key15": "3pKfUKeQij7J84c2t7BJ8QoDgTWCC5kaoU2c8ub1bNKfRxZ2CWviwZ9E7iTDKEUmTvgtan9Ft19B1j2xaACeAFfw",
  "key16": "2NgQ9NzDvkr46x2jnoWV8L57dSmjuPkGnkpKZDN9YGs9c6xQUEi6iuPUbYCxXYXYerqbJFWnaZcYPF2ScoGccYqm",
  "key17": "3yrNYGS9wshEnc6pbXodmEwaskXa2gf7ArsN1tj2yMrenvUzVPT93bHDc5SFuUEwrGDMYVrQoPiQmXmD6yEVK1tR",
  "key18": "49LGjkgBbab4LV1nBM1kCQoVYtzA6ALa9uiVY2RBmyLC5SgYTk9r5XE5PsbMvjKc4U1WBVqihs3kKmkDZDTSinRs",
  "key19": "4n8QbmHhpWkbQ9bXJb6YbjMpiYZxByDyYH4fVKhzRDKfSBxahzGDWJ2TWzkjaRGwvyPCLN1SFjNfidTk3BxGm894",
  "key20": "3xwbuqpTBRxB9rsQFbsTAkA2xYBKqKufuNxufmoU1YbrXzLGQyi231SaRMLSpiNUh12LVehFyJ1rB8tTeReRM84N",
  "key21": "2eqMiU7wnSc9FmSphu1k4UTxpJPK1pio4pSUi7S7Y5KX5pichPNo7repmez7ESMXFyES1tzm1Mfh2GTQq63tvDth",
  "key22": "4eiNpziDZix4WaHLHQG4Mde6iAQ9mUPSpKcoD4ozmroANiWM5Bx97KZTLRterYwwXsM223AYzPcJ26LGnEqif7wn",
  "key23": "2eLhCv6ce9iYzVTrGmoxQaHSxPdsvGpzUKfZtTfp11VEdYDAd9BE7ecHfj85hehWkPYeQCyjsPmDuWgMajZhok27",
  "key24": "tmJUgAjmE2W8FRRt5ehwLrySNvxDj99df6tvgunMxaSk2PAf2qMFX1VSEwc1qjFDCT4xfmLHbhHRuFWxAzTixPL"
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
