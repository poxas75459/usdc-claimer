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
    "2XYm5hvscwNF32BEZnuLd3eDi1WisuKkxDsCzCBTstaiJcXLty9hRtgC2rR4jKBy1dqMRzEyXxZXnvEH48g6pQcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dccW3TcMDhNVVJag4UQCnRR3eCAW6ec8w8crGFx259rgNyJqFvow8tLzG15DEos9wdbTZ3syHVK4mRiQ4Sjkwzz",
  "key1": "2U2g7ytgpsm4efMG3fHEZnnjYVkh7gtdyXTNYyrzoZ7tpw8WxxhNQSafvcZrpoppFDeCPUHFQcpbhxPs2hubi4uh",
  "key2": "47dJcNEX2qQPbJXToBmPxnGRajMoNmJyLBV6cAT4y772YGtHFqCxViGEPpcSEmAodPWSZZPN7WdCNYDH1d9qf6ji",
  "key3": "HfH69zdV7eYSMyQGYHUYBG8Mg17vcYSc5nMPdWKWLw83EQdqSd6T3iRhwRrk4MhgX1Rhpi5W3WW3bojsvtdfkV8",
  "key4": "M2iFLE9xK6mgpnKWsSdRX1HZ1N6QyszBRcoLcsNzcVQVP6UNAL7XYXXMN5LqQ7PDFA4XwM5gqRr4wDzfyWJBYR3",
  "key5": "4Co4fr6396dfDcHSyRFm31tcaZ2YkenXxp4dhFnkWnpjk1s2rBsptjQWFHAbcYNYuhhLjE74C2wTwnomfSyntscG",
  "key6": "GrpkrnNuWJvD147ehjGZSs7YnkJ5cM5674HSpZVQT1tTCVRQVb7gW4pPzM41tHX2zo8nPFwGrHFArskZaEXF4uE",
  "key7": "2sNe7wcLNv9jmYCqniZctwCghaKLRLXYwh8gyvq9fEKxjxNvKJ4bHyTnX1Nth6zMc4Lkub1Rp81EHNTHgCe8RNDW",
  "key8": "2rKHYRcfbM9yq4X6Cg3HFS8zgDipwGa3ndB3oGuZ5u4vNR5AEMnhbVEf7CHZa9PmFW5263GTB7dNFvPhMuof6pTL",
  "key9": "3M41JCLbPRDEcxL55xk3yKiHZ7anm2gmGnM6NFZAX2dYfyaBbu4V47offu7GQVwtqBVNsUexN8G94mAjnk8mirAt",
  "key10": "5Jo5TXkkGAotCSRajAxrbQSMev9KcYf38EEeEJk8AYvu3uMFVZ8QTuxBd8zYd3gUwbDhANNaxeTLgkje9Xungjw",
  "key11": "5gtBmLUPkMp69YkAD9gNUvPyF3q6kFNH43VYdoxNARS8iHccVEDQKCW6EmSBrsKLyyLXq7znLaJ5yWLDvucuHPuj",
  "key12": "wVksyQrfhpcya8nxAShoUSMubvnP24F9LFweocsANEHnrjxwrZ1C72mxyjoDpyUVtxRv34CuSUpkAVL6XPa8diS",
  "key13": "5wTSjns78UPhNXhUKcKZwngEUWBSabHBvxtycY3qeLW7r53pqbRHRQFt5gV6EJhTx71PmNAjJSodcBdh4xevFDxe",
  "key14": "4YMZNxxU9KKAvJypc1HpGsKa181Cj9cwV8b6d3Ke3hD1Xx7o7HZZmi6DjfV1wZG5xHQZKWA65CfFzKNCTS3UVwCD",
  "key15": "4e5DmceE2KP7zLSNgw8fy9y4mTkwwk3QfEVWoqUKNteML2kRwq39PyK5rMVqS471jEN1iBGtyVLZKvcsvfDF7BGj",
  "key16": "546wKE7ZgXekkaTK82CgGGNBzbKLoqbCiSuTbokAZof6R2vkoX5yRgjMhP9KmWqNf6EqHte4BCpVnGJeyzHJRs5V",
  "key17": "5QAduBb8RbE6rBaBXAFTZumYxirs9HBwL5NjGoBNNYrWy6EQbp6MN9J3fCkfaYhUsvu1hSEhUBVonPPfdnhuG588",
  "key18": "34ypqh9UzAJqdWLAEAGoYo95BpBxpmaB1dT29XehzQysrfeX5PdtSd4cJyoSQWNN9DP7Z55rJZ23EqCKFAgKqfNR",
  "key19": "58cHtmpgYKHsjuKGMP28jtbfrBwqQKWmToXGmtWyj4uyu4f8Tf4PmoMknnKW4ECECdhKfYVLRhiv925g63VeGEPS",
  "key20": "3ywidV5DDEoy6jvouckBQR2eEGF9n96NoXF5EYMMoXHuTMfGXKUk7oMUMGAnve3iaNchJkcwypG5ZuMpWYdorvFx",
  "key21": "oMFh6T6a8Dxm1NYS8aEG2amhFKDF3tnvQK6EpacvgxH97huRzmPBMkH8uTK8PgBBh395AcjemGcuXJVeA81R4c1",
  "key22": "2FgMNCWfQhju9EBUJ9Vur6CwGvABNnDUfBfhTJWMiAgBgETSppcSsBZbHS2SbtCJyzz6ythREGemYMjJqnS5B29s",
  "key23": "5LNC9rAuft8w92n3Ebk4362JWWs9Trr8Rhz3hJ4WSHHairKj9TsGwXJN8VVq1qPQyHza3qSV3zS3PgWsmiM81Ev6",
  "key24": "3eTzAXQms6vfNdeWYykceV73s9eB21986GpXePzJ7NV9rAwYEa2U5KXQCXRGmWWsnbsbsPLAB84nAqXWR315gkD9",
  "key25": "4UPStDyAzVpmPMyzTepvULsGfcdh7htX1ddfpLFTuMxZuHndkfpHrtJdm734JDmQysQyZt3XbC8bKQWBUtzMMLNt",
  "key26": "u2ksmFh3xKAqmUEELfpX7XhyxXhjt7B3TU22nUJCf4BmemYk8DueGe4JtHNCm86uWrp6pDxrvUqyHDtpUTGx69S",
  "key27": "D73nAG8K3Hecp6vEDagk3QRwJLZdA6GjGe17yQAhMS1c6VjKXHSfSRuj24HhBNzsPPg2geLxDgUWxuzyTZ2paaf",
  "key28": "4xYktxjMdiAb8sih8GyoHAAqgsZ3hhvrGLFGCyTCiYXKLhpXGw3to4e9U738bF6Hw2ZC3vVuRu3iyFoz38n8wncZ",
  "key29": "3fwSjXD8Ji6ZU9h17druhntKBQnX159tco1NKkJ9sLEC7cYag1fgDqhmqWWj1aZFBRb8CtYsGEP8jAPMfDEkYjQc",
  "key30": "CASXyTTtMkxdAdq4joWBYHBgW1mmc1PfXx47YoJWrydr5TVXAfRhtHk3yd2fTX18esR66ZAe5gN5nKBjYGUKYqZ",
  "key31": "47o6w4miC4oABDwCSNYym113PxNpRgamGGu2ijb4pxuX91YLHVP8D1tt8G3vVYuZQ5H4BManeqFWasZS49sguXa",
  "key32": "3NyHj8JgeaVzL47TUCWjEdejWG1sMvB2z7jyyPqTz3Hf68iQbcjhBoVNkb97LE2UYZJ7xzRKNxywiYF5tnAMS4CR",
  "key33": "5GUD9XxvmsCdzEmhKbjJP9ZvXvuN6eYgcqjWD8NANBd7CFp6Zc2txY6zgPg4qXvkoGnwarDvqADJBMNZLwbsmaEX",
  "key34": "jG9EaTXHUykTK4uRnuvrzUgmaDRaPcURCenU7uRkG71J1NX3i4f11c9Q7JvVQhYeFqaegoNCqLodv1ryXfFn8v1"
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
