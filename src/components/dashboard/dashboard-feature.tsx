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
    "5fKEQSU1kcdYgmnRE9zsPM5rU8ephvjChS2ayZD36DwsSkcoDxCX3ukEAR3ty8bE85Qmsh1ojnMubwzq2HksvZqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62J7AkkMbeuMv9NwPFtaysLTf2qFiJHvxkyiWRi72H7uPDcZQNAgJyCGCs9HPYPxUvYGDhgXTaeTQZoctKkSVFt9",
  "key1": "5neKod4XRPdeih9prEGHUDMBRLTu7zqegu7CUgvPmMxqTBDEjEsse3jh4VnGk2mVDMeV1PCdD9uUsHJGTHbmeKtp",
  "key2": "2RhHHUhXZ3BEAcw3y6du1ezoRcT7jz4vzdL2fPMzMHE7X1izxnkZc1KA9VuiH3uqyzyW6d8uEEvUcVfYLTbu4EUP",
  "key3": "EUJaWUUCwvcnRvPHua2jYPqve8sZbMkLX9nkmtE2Vg3N6WGFYhnkbynboo2vvogwWVYcCCSVXfTrfbzGeAXT495",
  "key4": "4Kk2mWLog98d2L6KCyaAn2gaRLrXkR2yPu4DamuusQCT3MU2QCCC89VPYmsRMtJRWrqb337qwBagj3tHZ4NKKu29",
  "key5": "jhnuj6wjnvhMZMM5eezBkBCdfG2QpAWL5aV5sjmttgu9NAw8A6RRnPiiAD7gZUTqYSEDAzURWfHsMmV94CZ3Cvg",
  "key6": "jgWfNBhP9wPmGQXa3KWCvCtpFaW8q1F4oDmahnvfPhLqiVCGJwSdSQjHJiqnt55SeupeprbMb84N3mLED49MWBK",
  "key7": "dcnTzZdLLvhkFWMQumePXRXjJAiUJMfMv3R8TYNb1SteRBD7dCdrfxouJqc8puvnuLAk76gqoVnAWnPbp8vFcYj",
  "key8": "4BE1pejJ1G35KCTb6NDsRvWWVjGNFREwzJKJkFHo8dZ8q7X897jdw6bz4fVQqbJ111vdbu6gRgZkZeszg77LvBoB",
  "key9": "4s3Qr3hvHG31zZ6XRQnkxhb3QkN4gMTAL8XVDpjRgS2yN61vpgwmoYgFTU4EWPapbv8bhZhN2HWR42gbxDWLkDfk",
  "key10": "4tT5X44zCS4WuZ4zXCSkrUWKPA9ieh8Zy6NebQdd92aYk86afhSMxN7MHh5rSC9UPprvGpm8C3DcaheJ6ayXLLUp",
  "key11": "2Kp5cZtHVrpJwBW6PrqFEnpzGTJf5btgjgpwTAN4AeHEYDSwkEtCqcKz5fNN2UufEp1RTmK9Gb5dpifbwzWvPaGp",
  "key12": "5juvmx2ZK2oB4iPcwjRvptfPqPAgcipAKXv7ohPoDBbJgFqwYQvZbZFLNKaxneEyroxCG7gD8o35QCSvqCacTKb6",
  "key13": "2RkrHmpD6VtmxBQJrnSKmDXKs2HmLubTjrtbs8hJAmPnihgVTh6gTcMwdGKNzLRUvNEQopqNDZDSjdt3DhfZu63d",
  "key14": "5iZUMbyG7UtFGvpKv9G1vEQxQfpuLBZQ41NaYti8UzWjjirG2uo2j9c6ajk2fodpvFkz572rhK9GvS6NTLJoeUYz",
  "key15": "5VY2fs4daWE9LqmpwyKuP1pzvXWJeovwu1YRH1U9ARjVdwiFb8nZsowHhDcEUYs4432Pbmr7JMJSQRYNbnGnrtJD",
  "key16": "3nBU6R5J2dAg2rhb2QC9jevL2uzdhWr8ZpaBaK65WynAddyQqXKVXziyAd7aieckV3MN9ckqGBWJ78bHg8viGCxi",
  "key17": "YAvS6nDMRDiRf8npX7FTuJ17gnvVAWBiNpw9MtLW8PpbK8QwHS6yv49pi4CxDquWG6zQtZ3qHUhWQ2g217U72QB",
  "key18": "32xXPgpjMFvJiXz9XgDnFe4L64YQ5MfPzPfTRrFUqJTwAq7SNUF2kqbWVmX6L5arAg3niukVjRdtVk1vKzLEr7tB",
  "key19": "3FH9Jb31yjiGYaLSKpfpvvNoKghigwJKmFJ5kHPg18pgBqRGXuAFCZ4KKnbGCZFw6dMnh97DQ3FW5XPuVeJDqqm1",
  "key20": "5yDRoHhRUhBwvuNvrL7GNxgB7ZGJJXpk4xZhcCZHYaZJR4suRrc2PtjsGAp2p1x5aeRFZNJt9nvSmb8ytW8JaeEw",
  "key21": "5dYFbM8Df6ciEA3SuRhmwkkpM88TnN4xpXucnyrL7fXhUCULrJS4nKfC9WpuMKimb8QyJLvdufssMVtM9pVoagsb",
  "key22": "4Rzmjo4ukhPk331uJFS9gN88JjdqxNkfbYxxTa7PiWKcVXcLg8NfftNM928heAR68HxLm9SnC1ooatNvUhxsPd4m",
  "key23": "5qQ6J3XLVM9sDWoBiakKQtgrHZWfAEzRZkKfHJ91RZTnqfV9dBtKvnPCVdFtCQ2VwbyVVZNYEKb9uKhc1xDLzv9f",
  "key24": "2f7vWbtJ3EqasMipYkZdtWNE8RcXyY3o7DwPbTV1nCEhEnRfpaq8Nez3HNA9WH6FfPoxvDb6oWdDn6iN1cpJ8Rfn",
  "key25": "mEk6egCNzoKB11bii35xXHSvAHVswC23GUFpEix4Ms6X5jY22FbS6N2KFmLwAqoTa1aZPhxTuhscamJETPFWXdu",
  "key26": "Ge7BBWZBr37d9eCCrbaxLntns7fMZTPkwjS4w3vzmuitMp65ve89ZydNadeYJg2Bpa6nLDqj6Lo8cyiq14rkxEn",
  "key27": "epXc3aJ3fZhC9SpKc8qzBrCEh4tFNqW2bhvjrvdwPiVPqaCDgxkpNuhdbLptH7vaG119SzSunMLVPXGpfkLayLL",
  "key28": "4RWW3QYXg4yU2wCRDGNf5ghvZrYh8shJY8kettufdLTnD6er8CoQYaWcwymyN1ZWxV8CxH8NfBETTJH3ivuDiYD5",
  "key29": "CNHvaVFeYHkx2z3RixaHVbFmhyr2FYim8PbKpyU3vEEAwW7nNK3iEfoP6AG7jAwq3rrUa5m4k9m1gkfRERYA4rP",
  "key30": "5YcrURHWR7gqfBfvPTB36dug95eDXC5VzPbR6JZEZ2vAt2qNbmKPNKSiuTAZrUGJ5j4zuKNLahG4D7zhAQamfeks",
  "key31": "xyLA3pcCkjENVWsCZ4mVzpxm9NLPHWFw1bBqYcBTBGEEHYwqULwPBctcpxepDkaJRSu4Uxnnk7rLWmueMsos6tK",
  "key32": "3YW2cjxSqgMA928W17RS3HRrSdNADWt5ujoac1aQq1v67UPni7nXvrnoKurrn4ftZcyeWHzJw8rExJPLMTyC9Cg1",
  "key33": "2ESDj7truaQrvqVW2oZ7b3dWwjt8XyYinZhWTxaD56NJH1CHS6UhWZG5JjwENw5cKhEar9K7XN2viEFmbwbkyQZs",
  "key34": "3WBo7nvCYujJv3iQFS5YtgEsBXNyhFDxAEYUMcFH7Kwwc36hMULpjecuiFurzWFyU3VP8HyCFtNB8ea77BJgDJXo",
  "key35": "5f2KySLmgZUy78bQbFBPnFvTicMS2Nfz1CX6NSnh46AdVQPpaSYTrRNJjhyvK57TC4sTGy4QRL2Rq49Amm5RAkFa",
  "key36": "61CWighDZW1iVk7aGwWFJj2eZKaDX1CrgBmgymjv3cJenoerVcbMaqtoGQ8wDAhvB8S5oh6uZ66d8LsexYkED3Nf",
  "key37": "624qxbkP3D7FYdeJMkmvqbiZC6KEfWjPBnh9MQjhRBfHinDdeVYQGoUV32wHmnPAM7cpYVc1HoxY7PGYVabWhJSh",
  "key38": "3dSktBfU6hDWkFnPygucZcHF5t7bjKQV1v8cCJmAS8vgWpp4GBNTSJC2FYSyCKN4BkZHky6mJyyWXhgKFTfrnLef",
  "key39": "XHQSYKNxiPd8rAxqy2u3Kx4qiDj7biTRQp5ZjCGB8SPuCq4PoopD26GowEV1iiten4jV1vcyLGbKeFyErx7pBte"
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
