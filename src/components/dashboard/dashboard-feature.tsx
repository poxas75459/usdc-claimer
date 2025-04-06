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
    "4Gyq6hdnzSt1bkDVSgmufih2DKqsJPAUuAQSzGvXTc7CfeNzMbxgsdWsMqFTpJkwpgZ1uc4JRTk323Gks7cDvSb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rCLPB6u9w48ujZRBPddpbsVcgnMgHATt9SG5qiBxRuq7oEwA1dm6tK5BrFv8xge82YmU9GzQSThHktwdeWN8RyP",
  "key1": "3Y465GpqvT4JmUXTt6EZQiWbqH4cmiqkMepcUxPzx5pRczvrW98dSfx2n8ivbdtux7n8SBuSHCrVKz27JPYV1DRZ",
  "key2": "3v1eE2G5d3cZAk8pXCVPbkUy4erQtPi6B7ajhZmCTCWguMHPwhxV1DU4cbWrVijcQr1yphLrMJAZHqmcN47t6Srv",
  "key3": "4jA7dvTtkDeMNYKwoWHA8CeaMbFLJiBqVjKi5LukrSeKBWnnCzE6kZqDr9UsNX6XmKx96QqwofHDkoLYnWocspHw",
  "key4": "5zFbKtCwxxHS1wa3T9gyxc2cyo8o8JGf164WyM1tZG4HQri9FMox8KBehnqQBoXLKRqUQ62uqRUzHi6GMtu4TANh",
  "key5": "5W4EZ25tmstZVFajJqM1XbEJoMqYoNUBFEamsZcZTqf5w8UuC1uBhnnfVx3KqJnNcaye3AdaGwB6UkXAfL4E42Zd",
  "key6": "rBEcd6Hb58t5UikCqrTQajoF82CBQABmaRYnWekwLJquZ6rp1RqDxcJ7fmGofLXcrxf3PLnpKjdP8uDCu6o7kMc",
  "key7": "2PAmFTsHjeujNbAZzjQbhRLguGqbzmcjZ5tbVzmXqfmGRReM8723dv66Bt8sVEBM9mGBgARcdb2aJup6Tp4PityV",
  "key8": "5c5EyTYExwkvnR3BSaFuCRoJR4TPMo3XKxJEN3JHKXW7XoTPLJrca43DTZ52gkxGh2aw5roNZyWH9m8eL6WhGLSY",
  "key9": "4zwwf5fJJBLqkfYac9cRDuzcgRPBzsGC6vNMM5qDLQ8wR9nFtRwr5WjSj1WjHfF8Ju6DC57vrnEBu2b2K2PsbTw6",
  "key10": "3dT9JGd9QMg6QNReohJVwJzQbzDsvRN12B3oRZ5UAXekctjdCfvC4sa1e4hgF2SuAgNP1Li1pVetWDDHMkQg5FWT",
  "key11": "4d5ZsqkZ61kmkYfkep7h8wD6x4Af47PkXHjr6UtDsdGrJbssc3ZCTUHRy9dScLokh6x3u88feTSLQKm9S4N7XgBx",
  "key12": "3gNJ4CAAzqGduDBYSmxEmDw7RwsxemrkZN1ofatryjgfi7iUHScir3uasbgL4N51fJu2JKQFgxGyvRK23gu1yLfv",
  "key13": "2vv2hQAxBxpT9kwf22ckRe7YtyTYVBRkCMqG2GhGN8sYRDmk1aKHLUqvvdqUVscAzYZ6AM5Ho5r53rs9QWxe3USa",
  "key14": "2w4EwaxuQahWsz9VA9ePbeCgFLcF7ZmuwpYwhLQbeiy18KEJ744SbMuVp8nyt8i9x7qD6fhgYV2LpnLrnCDbuu6r",
  "key15": "4cXKbKpf87vvv21zDZLBAfoAKkZopeN764gFwGgsR45q8rgshM3ioRGpKkRZtiu45evAeTKGF4FUeWHQUW6jA9Cz",
  "key16": "4WK5PfrTz5oegdorn7ifjJt87vf2tJAE2G2rxfHEShSHUnQ1WNPZSGS8SWmdgzgcCSAPEqic3x6dXzekz4dAwadv",
  "key17": "2b4gr6suHqkMj3bRpbjp2Uzn1Pq9LKqZDkUcAPrTaXVTJF97DoqJWtxByEztcHn2MUV7MFj8MZ5snSe1cg1qKP2b",
  "key18": "XCFYhZwttdu3nNjgKes61pHm1ye8Y8QqtZuq1m39UUDAwqjzBF2N5Q9zZ1h434sijnDkkwLbrdSDmnREE7e1ef2",
  "key19": "rsn5x6qCSWSkRTmxLqeifPLuaoAdKpEMmQd3MHx8jR9H7t4MebwfUjSqBzasJ6JGoVivW2fphZEoaVULd87UNrX",
  "key20": "4ZoYTCCGBqJaNQ7Y1cNPKzmsTxmtgt3ee7ATMkpDystxEwFTGup45r1YoM25NDsGokuGa2zH7p9HvTtka3tqAerQ",
  "key21": "3mtZyyy1CiERGurhuvxZfves2pr4o7DAwT1zqjMHFUiy7MKu2JoUhFbGUEJgWA2XNsCHNafr4Wg8vc8651qjcAJq",
  "key22": "3peBUsQ4T43K8giS1or2cohe7u74qPDsJnDuK3iMQ15wWW4HtPfnCms9nCDLmWZJiNYCQRYRKvzDUWQdXq4iFyWD",
  "key23": "5aqNSfxUae4zPnTFkD5w3QBsiLrQJCrnimUXM5DVFpkAnVqM1zPxNHszN1tR1HV6n5KjJCKDHoc3S3XCQsLEVbXD",
  "key24": "3JkDEZbcNThXAMQScoyZeeAQM7h8BmCyZ5Qw5XbrP7ZHM7ttqtrDu3iPwcYPp6ftbfE5V44yy9X9UpyZzXRCEsGZ",
  "key25": "3Mf37o4T9rnZCuzDJZKWY4Z8DKJn4cFXHdfH3sS3jRtxbDB3QjFqPtZVNMCX1Mj5L6zgrK6tYJaUh29MZz4DUVVu",
  "key26": "njzbm8VfGrxZMdUAkTzmzmv49XC9o6AZnsZY3oxiTMgHiAMbG1zubJqL57nh1d5Cb93RpdG5hu6rzzA3prqVqxr",
  "key27": "2vrpbcLh7geCaim9tBiUAQAPZVgY7ik44rvpRDYMQv61pcNFpDDYtc1schSpeDJSFmJ9YZzrFUSecBv3E5pwecC3",
  "key28": "2ZhH2fCY82t8NZYPAow1WonsGrMzZapAB2ZSHjFynLzYYT5iZXEicMpDkKFGQayxSh7hiYDxi4uqNJ9CTif3GxZa",
  "key29": "4ToTKR9FRZUqf8da4CzF9hkLGDTX7n8zf8cPpsZ6HjZBRFFw1QMJT9v4Phz6AmuEgQZ79MVjrnxco1Kqikk6ZQST",
  "key30": "4SYMw7eQWVbDvDR9eXobt1YqMTsZS7Kwjk5fN1Dvu8M7QTTW1hBVP353Gngagb5kw6fiJQv9T7Y3RpaMMHzWBmLF",
  "key31": "2wfj5y1jZsHrp8uox1uqdNJgAWe8QDwE8SUNgUytyCFcGoFLaxfhG261qHZ1nx1kgfGZeaHhXDgVLx2AJ5yKssoh",
  "key32": "JBtx69VFxPqUz9s4PXNvaN6b9byGmGmgaeR7ev84GMNad9GXCmfZfeE12FRPbCLKBuvtJ8Wa6v3z8nnitegxZAJ",
  "key33": "4BmqxEvP2PXZFgsFLWCrQt12GeEJsU3SP3vqiX6boykiuznK4qLVPwjpj2hAvE3Jqs42BxV9WuEtGZJ4mYoMhXxq",
  "key34": "5cZdxRX7SndK24hv1VpHtW2HCj8K1DDWyeRGq4X2u6eebhKYtoK2vyQCxizgg5Rwts4ibhgQ11nVzZBZCrgHKNMe"
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
