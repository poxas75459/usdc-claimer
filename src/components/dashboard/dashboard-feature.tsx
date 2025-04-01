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
    "5Ri3y2hR21aRnN6oEpRbRzBox21paeM2QcSeyLe1rU5h6dvLaxuZbJWbUQ3r9Vvog3sGWTKn5VSg1bzCtsY5foNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F3mecNxbofAW8r6sQyDhvprb8CagiHAH96ev4pNXGUhs4bsm22nBc3AKWAdTP6PHQ7Z9qhLhcCXh23iwK64RrQu",
  "key1": "4JDo7r4kGuaDtwkp58jHVnqrR2pSjHbLectziGnj3jhQncK5zkYZwur2wTprpvw22FZh135u3fdpebFqBhwFFW9i",
  "key2": "26FGYTzUjtKH1jBJ1ZuT5PQDMABn5JhsqvSxXY5kvubMPDnqJYX5UhsHC9t1hzrKCVDK6CkDHEXHNjfV2qd7AAfU",
  "key3": "4yJ1HRgZxHcRXQwpm81wwS4bZ4JwRRCTjuVx6EEX8fcKduPCGfV4C5HupeuoAEXV86pBuoZEM5xK16BLZ64iCxRb",
  "key4": "saASbb2Vs7UqkxoqR1BSWotMjFbdj2b9MM3ppx4qxyfWHMib8XaFzJmVFYnMyHiaiZmp9jJxjmJfZ53okL31uk7",
  "key5": "3pzVBHjXFqPGZ3jaFBqTzjTphZTS1cjb3RcAt1K1awmheYZ96jXbqgG2d87SLkzh3PYvNfvT1GzuYc76PDWksKWZ",
  "key6": "4tFzEqXBb8upXEz2n88P4HQs3b8HYoteAx742kQpXDyV1np5zKkAEwaGdPy1ER7i6u1WFatbk4HNr2SVJuifHAiE",
  "key7": "4B38WajKxRsx4t7EpDW3G9vC9341bRL2pesbsGPMDndNBMbJ7eDtshgeLKrj6oHF9cVEvqbv9daeVbXL9frcwbmz",
  "key8": "T4guWU8nsoJ2hxYcc3B796LxMLg7GaCpwffx7HqgNi5S6HxSX1kT6UTyPNURiv3bNRkU2q7k5Sei6acEEfirDaZ",
  "key9": "P3YfLkmtfgh3RKyc92EGiK2AjgMYfLCwNmJQyaGoGwx9T8NDQU8racx9Rr8diZdeQu29uGoStv3TiM7L1q4m8rQ",
  "key10": "4QmfS98KuGkz2SiEqsuLQw5dLn1dhXozYQYZWtGuxDkrTp1r8BFCrweJdR3QJ1px8mJ4MYcsU176mXJKRBvicFGt",
  "key11": "2wqaPafk8VWz1xAN74ooD5wzaetKmqUXS8G9Sg2JpeYuxietdWBWjWMcHNi1ywkFHEWpGBSR6nVCBawrhnnUhfNh",
  "key12": "4Nv88nmtNjqvUfYq3izJJFQC8kGLeJpjJtbgMPvxLv12VBeNJ9t3DQPmqeNmspfXJWdbBt6TocyyqPAcAomRYtAc",
  "key13": "98wW3zrMmuNVfa5hoqVp5JKUADf6bKbhS4VrM1nj6rd1SyX4ByueFd6gXi7gxGsGxuPXxa64aDH53ivvYxjCUTn",
  "key14": "5bTrB54hAjRg9dVLqinT3M7NH6X2pU8LtvemjAGQuS4wUwvQSV52hZukXpEvjxpkTPkAZHavytrMGtt5EExtJrai",
  "key15": "3NjX8jt7ATATZ2ApQmaMDjCR9jfamjfGo5sB4azFFSnmxh27zqXjQ9VgNNgGjKTXZfpnRTaWo3sqkjqSeGVDzuAh",
  "key16": "5wLLDKaRX4HYA5RByxCLC2vZTHDQXaByZVgTZu7YhNVSR9qDdxgH8KRGxWASJBTqjBUTzbaFUWNJ72Qj7HSTLPTx",
  "key17": "4LXPVsSyHnaSALMgtZsMiTBqGx3nV2373bDZCP8ZJaPKrU3rzHwEYCJsN6cw2HMdfYRjPQoy4J2KjCfVLUYu2RWG",
  "key18": "2cP2AgFc3zAFPPxv1YdXpg3Yd9jWRDui9LLKvLbt6H2jJRL2AwhErCFjiEBZBhTw9v7R1GdTMost6E2i64qSnaCh",
  "key19": "2MFuPazZT3WBZ4486WzwpBmNGgE4nSwtj9sgNsMDRAxHDeWFfQWTHUQh5bDRdw4iaQngtHQv56HoLbKGF3VZ5VB6",
  "key20": "2wXEJ9b7WbUiuUzPtH79cdhDihx2uC7VLvgCW1Eu3GNEdX25s6v8Lp27jkW2LWK9X2Z5szHtfbe1TiLmriD3BHDB",
  "key21": "5pU2nX7QRNd7MzBXU8Gjm5MLRJhi6itRpwtjFEzwceDa6AozVZiJjR8zUqsnX3fLdcdFt46vv28qzMNkJnj6M9Cv",
  "key22": "8sPjTsBdT5CxREbPf9FsKaSrJYzDYaKm35bbPhvaPaQCfWpWT4U8sJuTLZzvSt9sHDdpqXMTcPfdPbpceiwjeXY",
  "key23": "2m3dU2dFCax1uHjYSUPPNT8EJPWFHz8RT4u7XzXTZNbfQgYzBao2uKLP5PjhE23yqfpBqmZHWxF3qLbWV1KMvahj",
  "key24": "21QWChVDgCT2RR6jdmEqByRGksJACC73L3ykjsfaFPtB3WnEztp5z44D4rJK5MYSuiykDjqtpUE3Z93ajrt69mKG",
  "key25": "28BdkEeguiZkyLz2NvT8YvY5PPSZAmuzyEkctWJXRdtJLWHGx3KxDUEzpho5CeNcBrH2jgHydgq3BNFiub3o93MA",
  "key26": "3pzJ3SqQMUu4JN7T88TnrgoMakSraTn41CWndnCjYKUZNbUrQbL6wPEKwPCri8zfzdMnigTmEtQ3m5oRLmW2twP5",
  "key27": "5MLbr7wfAvJxtXqozihDyFKyLd6Zx6TiK5H6emtrzPA4MWfoNAFVCCabdBhoYtkqCxEZCNFnAtnYTAdLnLyQjGYZ",
  "key28": "UCzNshJJkraDcmgMC8PLqFQ7SobNu561yMMQzkMkSZmegR8y44yKV2z5Z48yTEFygzxso1AxcYwBBSUCLeUnNEm"
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
