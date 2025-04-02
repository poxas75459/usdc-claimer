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
    "24HqXFAuCrPFt1zHDEaa9iNcDotd7XNCVcbKz3qc8Ue84dmy1V78xb2ehc9bv7SyvE6GKihW2UGyBjLvdRnz2a4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBf2fruARR4NQhawNRbrFv3SmsFCPoyFyi45GktubZQjywCmWyokUPesRs4YTs6iC5TD2xcnodG1zfc9bkkFmpe",
  "key1": "2YTfWaZuZUyQafMt9TbrqWYXLUNWsSq1Zb6d2xboAEgAjtDW4b7aiUYqYgewWzVskHebQNPMWWx8vkY6GhYf7bYY",
  "key2": "28Jrj9WK54qV8yDT43EPtA4KgvcjUtuv5o1BTVG1qFkzfyorLbJzETZzUagg9GWcHJcKezcMcDAs8nztLnw41YYz",
  "key3": "3kTHtJZcjyrH7qTBEH6TwoNzUo1UmZuvYHh65YnfrNs3eXdszdnkJVFjhEuyX3ivNU4574bvk8ogdigTNi95AxVc",
  "key4": "2ZKfGboBBQUBQaC6DfdVfhUiVCUrR3STNuRDCycZ9FCckkxZqkU3yPZdsaf8sz9nSYEoRp79ZQKpVAdgw6Mpy8B",
  "key5": "3puaRDvks1geFmTpNJ5KH22buWLt9uMChLxKrYhxx2br8KiU2KvgRC1LBE5d8iroKXYevJ46E4oESYpGK8QtV5MS",
  "key6": "44zmbnTmTuwidRoXq1sDHhgjzUPD73XUJeFp4nbxzbVeGQv3H546iMYjtS3qdtSVSUptjEpUGMhAXSUD4R4yUs7U",
  "key7": "4kvdt7iiHHM1s72douLwkgnLCD6fQJ8MkpBP2XmPJ3XLCYqLH3C7UU4VPVrYFVWvT5u9AnKrv88D4SsBhFcifzyL",
  "key8": "31czqtKMHEPy5qREJ4oNA91bSN27phMsSwVrwh8sP1W6riDWSCRqrosDj5DtUYiZP6cdvViNjuWnQtbeKL9qivXj",
  "key9": "4HxEe9anQM5iXB62f9sf9qMZe8opQr8UptAmd8v2zchmjV4MsmWQ3nN9WZNzEWvrUUFsBZop1htg9ZHS3Fdq4EsY",
  "key10": "3rLnbGGFVoTcxkxBCqEoJGennF51WpGyF53Wr81UqesD6jEUwsMAgZzGyJjwMzBeCmgYWASmcr5oHPpy91WPYwJY",
  "key11": "2fertRmK6S4X7uYrhHCjR4GcinmfMg9mMFbX7eEDQZKQ1efw5xrRk8dkVD41YKV5KpRGHNXMKEVqYTCRDPR8tszK",
  "key12": "2G9WuuokiAnscCyifKD4arw8wXfLemRCfMHk6h3s9ZWTtAemRzUsXfUXWLp36Whkqy9wNmiCEqQpw2F55DpJaYY9",
  "key13": "2mQyjDTpaZ837GxHycsZB9aTBXSVpW8cdQReVPqijnfThtJh6HzwW6g13164mwDjo5FYxtrZfvQEqfNbHXgjy9Jo",
  "key14": "2NS1C73K91iTKLpAknoqEiVmBa5MWcz1MN3ash5tAUYrLZYHj6EnfQ9EowKvXG1GxRqj1cMMAiCe9EwH2gd8Snf3",
  "key15": "aVGLbBXfaEdm23LTofzZtCRGSgZV6EqdNesSNXZkCh2j6GqAEgtFfsECuByGb64PFEME3sXFs4GsLGrJ21Letsn",
  "key16": "G9igFgTrgAwJnoQv5u1Mw3TzpopsBuJA32AEpiMiFNrxwCJHdCGp4VgG9vYc1xrY7iicP7ahx498gh3wK7KnadJ",
  "key17": "NiMgXtxgqVxKKtEXDJd15DpCVvuPBBWo4GpQ352HUpADDPbVyT7v8igitW1sYXrMVj2j6STGidp1thNycrwXWYp",
  "key18": "4Wphf2JmjL8nQdkoEv9wErkYQmbwJbX4CLwnFkf4SX6mzQcWhxSyKSidDJna3MdVbyNasNJZE4vZTmFCFg7pRY9R",
  "key19": "KQzDzZTpZdi6GLdnHehArerSCrgsSM8qNa1Liy25TxdKdBG2tRuFZsM7ybCAAZuF7w1HxYPpw7h1u5hYEfutX2D",
  "key20": "3cETuYU3AsTAzaStftymaD9FoSFxFatjWVz4fEpRBCmzvqSy1LWbxSB7KhfgQspwLxFW18SLbMhY8UWWnJHGYBBW",
  "key21": "128Ss2qiWcj4dCQAf2rUqm4xRpAjro1KyqEkr17ji3egMsBfFiunLm3Auoyo66Ed5QBY78kCRgA9y3etMKgRre5T",
  "key22": "3ZDXa98SzyM5ejPgvunJqvBYpxVHSygNtQ3YXuyHAFYSYBcauEUJmS5whNerpvp4hkdSDLhAPe2Ue2iZurGjCJib",
  "key23": "4aBFTJhWG9nbvJoPtu4SJXJXVCCti4MtvGg1X4BwJPL8asJmVniCE8UTqNy9Adrd2CjBrMigtxWMmRYQ86K5wWEe",
  "key24": "gsTHhKxXkaymFEFWSEHWjPxp2TyVWqBREhKEf6yH7Xt72QQmyBTNtk2nGThNG8cnQzqatv1H4ReeKpDfSyWBDsL",
  "key25": "4hyBDHfAbfZdC4W4j739Jk2BPh147C5nRpCR9qVvnecTs5x2tQBHM8pVVmdAQcZGMQC7PpTyk3wgfMYJVerE62R2",
  "key26": "4gbZq6y4W2zg86H8yD8Ma81oZ1uMD9bxNeb2vX1tAsnRq4jsTZE4NBkKEy1Dw3dwAb1esLHBcYjg4L364nnjrLAr",
  "key27": "2NAkoMUBL6W4aM4nSSZXDYZE26KTZsuQ3FL4RufFMmRmRXQbBMriNPkYEKgUaTMtNroZgqSkJkRCVcVScY4SRSiF",
  "key28": "4rdC1HuUgcWAwj6r3dq3dHVgfNNLCUFc3JbYGaMBFTyfWoWVjKFAXNaRV5zNeTgECwQhwQpLQzdfCxduLv9Cb7AK"
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
