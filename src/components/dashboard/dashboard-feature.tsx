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
    "4KwMJjGZrJbvkmi756Yr74hjsiuWDsQQQ5736wjSBf2VfQaRbjY1Z95Ljop2pj1USVz7pj4HoKUrW1KExoBo8q5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KC2uLAdrF6kxXHtYTpQfFeEAvbj1K2z1gspYJTbpXecYfma4PJppXCPJeBHZ44qKx73igeU4fMiL5aBCxr5W3Nr",
  "key1": "52r7GURCvLZ4XkocrATv8Xv6WB9TddD4HGH6dAuX6sce3vv5ztBiNxxBoV89kAjogMuKxii69XCswF8hCVKXGv2d",
  "key2": "5SuArPx4YdWMDMfUfhR8T4xpnPcozu4eHnsvhaugeKfw1X5vLYwpVUWFQiFkHbbyaCp9dYYrskc5Q35GQXrTEGgp",
  "key3": "4RiuMD18RiLcxjNB39n6WFup8D26DW28nzD4fxURVoWV7gNmMpyzZB8dVuUxzwmxQqu4YVbKDTJhLssY4ZcAfNSW",
  "key4": "2rEytd3WvPDJhDUUkSpus387WZz1go6UWxYdRqyBVGzDWuGDY2fBYfy9EdoBFjT9WfnhB22Y3K8EmHWmPyFpCX3N",
  "key5": "rcTLQdz2CVn9ncpa5dEbS1nm7s6LnQJX4pvU2icN1iFAPHztxDPbFxAjwiFjpE2GSVfJ1x8tpegsJ4qXLNZRE2u",
  "key6": "2uvH6kpxme9UmV91WcfSmS3FwDwKp3QdZaZzK9kuFKHCCjfGppR6aAdYfjP6oGuFmScbNQorXAmpncnn6VBCwXKu",
  "key7": "56FrE27g9pjVxDxiC3XP5eNWeUwogxGJkaxj2G4T5sU5BCwssPECyDUYoeWW6ZMvcNi9qHCCjCfQjrtsEF479mXr",
  "key8": "9yjR1TwDtYezeFN6hMGtUnkLpw3WyYxZbCRanpxZGg14FhzLs5WmosHkkzuFWM5jG9V8nqZWfdbChgNP5LSH1Z9",
  "key9": "2feVXtaBxKfqKdA6XXKmRwnjMdDsEzQayVsZchAYW3BGuipewjZ751LuigsoefQEirfTmVhkPUTmXqNwHMhXjDmH",
  "key10": "2qYh7iPjCapBXoHuZSTMD6zg383Cqc3uV4WMvwj7msqb6sonkS2D9NBdPYENdGHJuWw5kGAXL6sqthm4nTRDjJpp",
  "key11": "2tBHS9Pk6bfm3FWW9hyaugYkzqEgRNnCF2xDsr7NgjL1PEAwJyMrwyV2uUsw6UHYpuD9KxocYYjnzbj8putfM7x8",
  "key12": "54TGcA6zo1LYowviqoLmMBw8EZR621h4FcdxeVjRH8dWgi79fEoVBjwBz49BkSq7gv2Gcoj9as9kYTVTnAaW7un4",
  "key13": "fHCDLVscEGd3MVuoFCHZsAwvdK9CU7QUBSHAR37iUkFyHLGgPa3YaC4qYmhoYRjKLoSfx2aJr26YzX5AjaRA91P",
  "key14": "kfAzoHjPkwMTVguvAbNmyS5FkmjswXE11MC3vrd6jCMjPa8m8Kjde3Dk72xD6ibRCBrp4zTdysorziyUHQAcf8y",
  "key15": "mDjGez9CaoC4ZpCkobVBPDQLiBcV8pLowPz7WmqZHEtMUySW2S939F6cBf3JWxqMKMoviGKADVQiCP5AweLM9Gf",
  "key16": "2b46Fxag2ahyrvPto3vvsx1gdqzSVANWYyniedrhgWYs4HfHegQhastCqhVqzqS9YfxH75gJXkwzitjErnSukRxM",
  "key17": "2GrRLaELF67c13YcXbXDhdYJEcso4kQMF8pM7UbN9wFeRBarWhzd8p4LMoJq7oUraQDFSb6h5YVSQg2wsT3bF8rz",
  "key18": "3eGJAM3YRRewhLiDB7BHBhzCYSqps18336RibJHW4xo7TXFGUPZWPnMGDHQ2cDXfyVhFzinY7MEHR8K2zQJhFN3M",
  "key19": "3fjkZ1vPzPHUNKsgJ81rSpuwR27GYkBPDc4zPkEAUvyVW1HX3qRqEo1aEPAdyshXpCE4KVXkeRTsWRPboCbYpR1g",
  "key20": "2tK1bTSURPT9mjoGuAon6wxRxpWEGnmxu3Q8L6kmJGU8tnmUqrUTaxx1d8BHDDBSs5see91sxuapEJtxJPnxGg8C",
  "key21": "28mZtX7oMLo4RDw4Eu9Lo8sCZHo8YfWVLS6fGjcuqu5J1hEmfiXfjuDUJon6TrMQcuKe866JiGHy7h47T48woFHB",
  "key22": "4JmFPnv5DgBiNdkZ6oRAv9KdKodjgKngLcySxFDBvoWzAmQ5dkQ8gP2JK65DwLs63zbKSMSvXc8tnLjsczsk1JgA",
  "key23": "4hX4GrkWRxyosCmkqwv9uEUyLDYz1MU1EeULps2N4Bm8nJmtgWLfZiCCP2KwSea42FER1Eo9oKGCAD5cALvsQBmn",
  "key24": "STcupYQQy2YvLppwMmb5tRcNa2crSAiyqgtMMuy9Uj9f1efjMarJy3E2dX54Jrb9svRVebNrutfWMeFo2fMeVWb",
  "key25": "z9GdxXpvev8Aqw8oaqQQxRBQJumMK1tHkwmqJpmDmchxfwTD1LwwGtL77oiV3pCUfWhjwLACsspAXuMFAaDQbcF",
  "key26": "5L9wxU2wRKNRab8rubr2nx68BG1zjqYBWf5in4vVLGN3Tpj1FWsi2PmMoQtMKvkjpo5XU9oJWSnTwP2rzBEVaW19",
  "key27": "5AMwQbV5VwyTRTQHg4Gnp2kuUENPncjQfB8Qh2bxtPuiYBCEckorW2kmCLuCMhxphrFwDt1iuUnPQnSAaL9znHay",
  "key28": "3NHRp3noAKkZG1jbuLGfTss6YxBkB8Us7dVQ1bQMy69bwqpM7UcVmoeBwwiQUL9Z8c9nrGdopXNNYHrMpdHj46tP",
  "key29": "4TmpwFaQL92gfCMWosqVRBd4xrW6LfPiRMFSbdYDfZaSGXnuzJuBDromBaroyt9gHPXKAfDuycc8jNYxwH9o4Qdd"
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
