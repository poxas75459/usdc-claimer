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
    "2BWSzeYLPN3nXnt5JQ1rdFHBAQBfRjiJQQkVTGpCmEqGEN4NwBo56JBfbCHCYzJBjbDTQtRy6C6oWYPpjoGasozi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qm9jGX35mBN8gmNDAeM8kiCKMq7P21RM4PuVM48795iAqNe1AJUuWCXZPVSJ7DMUXXyKeR63VkmaDYsEiX64sYj",
  "key1": "fcCo8ipw9AjWo46ZSiYVd9Dr6SnrzqAu4DqUaj1EAKKgGkKHQanacxCkK1uR4tQArrJAEy1ipUXZcRkFF3LVEa2",
  "key2": "5erxQKqPmymxu6kqm1zTU3t6vPUE8QnJJ7k8otVKfSP7A5rKqctx7Hu4eJv9Yzh2noM5hA71nPGAgqZh9WvZPYsa",
  "key3": "5ad8hetfQS685mQJKRup8JB26KTZhxPaC2s5jwrVGKUo6Kbk6PFKmrXB3aXMCoK3aA7gHLz8zTE3xQawCPXqKeLk",
  "key4": "MJB1kPms5NH3krVsAGcZBdzhFQC5cPtNNqZHB17iEgwAaVcjCc5Gz8s8TtAoWPh9T6r3VKRfZ8gq73kHuh7PZM3",
  "key5": "2UWBePg2vS3XhyTVpgNErHqHsfuxsf6xtc9TYeiafYmguGsvYyCQydfXxzvJ1TWMiVnfPhNBMHiWWSTG3KYxf1W7",
  "key6": "3B5NVR5C5ojhj8M8gnXRB8kwzYcm5yrLSX3j5YvuDoXcYNzAuU1Ho6Tj9X6JCzkqCqJA5fArUD4mb7tAsGv8rz7b",
  "key7": "3GcQ8mGTSyiDas1geWD9TvrUp26KTzVvm3MzQimox7Uj99KT1yJESLVbExdZpAqUtthiLENhVGwnRZBFMdvRaAb1",
  "key8": "4LenfoQ4GbHj4J29nWvcegXdd4kGCFzWdsVvigBqB3tKNvojYdK9B8KHqjY6tsqfysFhDoWuM5gXGehjga2h9if1",
  "key9": "5kZ4tB2SUVk4Cy1Bqwt9pWc6YMJ29PLFuV8S8xHsKiYoJ7aRJDpikkpGrTmGmpuMh3Aj4TU3jyGNpHSG6ZprMJox",
  "key10": "NSvBX6tY7btSxgrLawT2NpigoYxJyXd87zL5Jqwt66hvfEBPRr2gTMPeLZvbuC9az6cx5Lr5iwE6CMEcTpXan8K",
  "key11": "3LrNBCNSd6S1up5BE5Ao77Rtm9zMkRPG8bvhowMerRnnm8VDKbtBbKjt72ms7M86W6NUNnx6WsJWTz74Ba7y1jq8",
  "key12": "5hJxUPfyjLqyu2vRCLkSRUFB66mfnYco3vjcvfSnbRNHDvqFumNJLsxY3X8Sops57uRkTLvAoPhDM4KMBwKKpgkv",
  "key13": "25qS8yxCMXoRufbtWdw4vaSaHWVHCbdVCR5kU3AtyTNMAq3r6yiowgQRYQU4Zq65mQN7sDkSAdAW5u6CYLrQwKDs",
  "key14": "4DEXneic7afLsKMsi4nKSQ3D98BDUwCp1haqekthzdpUCY9JTiUZZrTRSdHhmTCApZVG8wwKzLbhGNxnFuye3KRR",
  "key15": "2j8mq8xwc4BR2V5B69JRoBuHd5QVcY6tLtzRtJ7RDxB5CnEBVdb7rnJ5FRTj3n7UPLPsRJsZREyhgn3EfGGU2kkR",
  "key16": "NALXQ2oCvEXsDtxsCDEXckeRJrqJS2VWTdNG57rAK973aW1bMct2R65Ds5QT5bcQyHMYg6xhwNS93qKGZkdPsiu",
  "key17": "1jnAgds3BiTiULj561r5xRjtbyNnybMgPNYrGDCS9YeFBj2L1pFcF2dj2Yr2uRTVG5uJx3h6vw2RXPGJWLgeVXY",
  "key18": "5tj9ozJKA4jVpRnTxKk2nJEaZYN7ngzqEprgcoa8ggtmKDVy33NrkHJebuthnqxuk1mv92vVLGotAdU1MSD2eGEU",
  "key19": "4u4kxCGjUpqBRyWgyn4vXfu4KEKeNY9fGSb5bcfCcbYUysTpJigphcXGunPoyXcTzRsULn6SAcwmpwv4xzcSwadX",
  "key20": "3FLc5MkBzc1M9DZTJk13Sd5UpBnWbDjYwvtZtLhdnx1rWhMwTQAicoySCyPegH8vrRM9Cb11bRSAuFH9eaA1x1Qj",
  "key21": "ubPcNkeU1fYmsmfqZ8NBFjafSdYzLnmVSniFGJjzmqBfg6sFjBULEeCTXsbhe92LFgZxRub8JQ8gEGPrFJcK3Ha",
  "key22": "8dAoBt6LoJSGPgxP4f6uuaqofPTBCKxSXnm7SZPWVnQPUBYJETBxAV8ipRax4SreC3wJprPfvVEhbAibnzLmcpR",
  "key23": "4HcMNr15rVAfMiV6ehjNNrJhiaHvkgXFNYWcBoiFdziVQ8Z6Yk79dwALuvqK5JR8pzfkifYwdChXD67JofTZ4gE2",
  "key24": "3zBiGb4HHxX5BcjZnV1R2VT8rVVQopB4rMQeWqAo8EQ2xHZifkckH9QRBx5HhiWMmhBoWt9T67ZoVvQ3pN5c2rSP",
  "key25": "3ACAsSd2bDfdDMXFzKTNWg3DRpGPr8vBnQq7soYZY9eHJHT5fWQKesNUiFR77moW31WidpWkCRsEUC6dNHtvg9u1",
  "key26": "5XaKVWWnngYUPndoUYZSJUZewoYH2JSjCiSw4HwputBkWjiZ8YPmgPq3aoKCv1AjEjNWD1SNNDpqssy4TAzoFDr7",
  "key27": "2EkAfujutyJvvWnef5JAHN7xKF8uFWiR3gfVBtKx1Fdza5pAYViFyNrBzncdgKPxmWRk2aqrbb72579Adtq3tqkY",
  "key28": "4MyJPxgzocqbk59Y5Y6nnXwc5LKdsCAAcRcuTKj1X9CV1WZFDyRzx5Gmrc99TrjiYKWAzHVX7p7ZPoRDh3bwYhSZ",
  "key29": "5gSTHYBN3hmyRW8ZVNAQJEVx82jvCXZKCepuq591rPbJNDMxFLSwKyLUGUmin3jCQAfJd9kPfDLnwCFjN6ucdYyb",
  "key30": "56aVtq4hfb5KveQFwLp5pKLjdhhQoVHcut61yGMbiyUgzZCiwhVK4P4byheqvNrZn53HxS3wLyzmPGz8qvU5D47c",
  "key31": "2HLpmAm8hUY16ZpqqD44cTXEt9ZRW8i1WPhHa7tExP6vNcVnpewCyZiqRHTKWQjdGkhpzBszDv3JbqzJXU3RgB2",
  "key32": "31eN3sdDVL2W1atgDHgxDNmfrb6cvB68ZVx9PSrrJYxUwJZ7K7YaFraUZzUA4ZZm3AFEETw6szfxhmgksufDqfMz"
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
