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
    "2oQ8DHxwdGSuFkq5CJsqsmUPgeUrHViEjY5ZvKp7ezUGoRSTuMt8rYdiLFjkWokbUDDb94weuGtcAHpZPr2tFcHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aq5exDuTSczb93s9E7iT8T8C1BkxwbQdjGr9k3unHXfX7cU3w1r6Ds52YENs19A1kJY7UekvZVBoRPKwjjCeeRn",
  "key1": "NRGRnWeCiPquoALBkQJf1nPfby66SCtAXQmHSM99P9AYpjU7sHm2a2ebnQEEFcAEJi7cgi1Gv8LNofpgLrjgtVz",
  "key2": "24WMeKsF7gGC5HZaseWzhrPTS8HWGnQ4puhXLzVpGsx2vPqL5bw2ndsTNfjWToTGmMiLxTiQ6vck449fADGweyvL",
  "key3": "63h8rPajZbafKN1uCbAJDQg2tRtFrCbyc8uJtuzKkgm4wXwrPi4PynnGPg1GT5nf9FF3t8B7nANQLysWL8YnKGWf",
  "key4": "5VDYs98vwsGbhqKTagNvMSdTkN1p5jKig1tV2dLVjbky8iBJsofJC9731NSLRg3TVvYALYBc7txQjwhEa7X3WZeq",
  "key5": "5TkVE2GNtHAEXADmNmoHS2phwu69Vik1x1XKuSX1VEaHwyqFSmZ2bQAoJ3z9ctMpZmqo8FNVcpM198BXKebJioYW",
  "key6": "4QcVNkLjAgU1YsXPXB5inw5gsWSNsn7KtHVRmw9GyNoHvePTdqYTHhcYnQhdFv88G5593ZmCB2a2m7S6cy1BSnng",
  "key7": "2kxN1tt4wefzjMGGEFmRMCmiPNNZdbajaghaarJsUoi7GxxhM11QNPWzASH9JDLGFhujkFjEbihDptmnuKArNpTQ",
  "key8": "3RuhJG9qvrQPuGHgDmZVkqrPxmPgnNAvA7bavRtj7y811EZB1PW2y747AocxW7qXFAbgcJYYwpWi3x19pRosRBQ3",
  "key9": "2w82Uum1ZnQJTkAnk52FnZdpXknf2Gaqcr1SFBJ39qKwjgXvij2Q5rMWxFbo4Fsj89u6TGvBdAYNLds9P1woMovr",
  "key10": "2wohFqMaW121z3UDMBvh1kuypwbuJDVSK8CosvF4KnAd1GEo4sfdYr1uHBCCmxa7nwvstnCdBVEkmgqkKzMiVXUF",
  "key11": "4aTwqKHjbt7ScBBjaU2q5k9bxfMqcCMwibj7XBdttuLwuxezXF1tvWAenKjBAzxa2RyVw8wzQ4RFye1feaHfSZs9",
  "key12": "2Vi1RTi7Q6EZXaPbuKsU4nmAVL3rnZfZYGjiSswvFfw3Y4cBinK8Zyq2fTtVzbjq7QJ9bUZe2NHDBZdC6bvze81Q",
  "key13": "5vSmdGGWFaUCt3PHuzfLaryNvYKaeAdGoBxGSGUze9DWtpFoTBXGjham4t1FNAiSzdyzLuUw8Y7yVpjuMKxMBtuX",
  "key14": "3xKfk4WHLrCiU34rrZYuedZxkSiymFbt7CZCXz8Z68oZFGJZMxgmdC6z8Q9J6f36yWbAdeAddk8hMC7g9DTqAv5m",
  "key15": "5uX9mugoAaXQWBtTjQBt5tSHAAha1HKKirg8sL4hSrLVpenv3jFnSpHWVjFXsxNJ4sofKo76skCxWo1iG1UUJhcB",
  "key16": "3EpfhC7sSWuA5UCMDbfoBQ7bG1WQsczd5vHiXBens4z8DSREU9vv6WnifnvdxBH3nMVpPckHTjqkqbVb48Ui5KXJ",
  "key17": "31zu5dUu7vpQPgLUe8FRaCegNx8VXEgAQmSE7iJuHbxWUY7hdSq7eV8ufj91Q4PzjfkLRgWSh5pegeZrECMNqxE7",
  "key18": "5LCdWKSWqVBo8XAPzcpJr1yYMKkfXAYXsqxrqtqXAfWEjiLt7iN97542ngHCTBmAKrt64DQBBtA9YwLf5EL2Vm6n",
  "key19": "5jVXkXsM7dcdkZuXuy6g4wAJ3jow4ZpSf5DFup4rXb2A4DVLqyfodavpwpk1BbAgEyLALQmy4vxc1pzmtRDpyR21",
  "key20": "4iaUVWaLVuYsyDYd5JDgpXQcv8R1DJCeC21uxLLsRJJ8Xesd7hgycFfioRjg1dfRZoNf5njaiHrFn69ABkGUeXgJ",
  "key21": "4SmzbD4WaaKtd4Qkhw19ht8t3gGXKfNfaempWE2gcoZLj9W7BStP9rEUDtp1tatgZQWrFjGZUk1vT9GTFogjdQU2",
  "key22": "2vSitghx6XQECUm54zYBoYcNVCWR4gmCsem9HL2S9n6xyoFFPvYH9XEZSgyfnM4gqzRm8m529X84kZFVaq8DPUgv",
  "key23": "3ZHN5WwTsUUGd9LkJtqGiG3bhZrFLBHxWnF4GuMENQDBvXpTQkPiCigRJCgFm9gSEAN1yQJFTRyYVKjTv9FSK3jm",
  "key24": "3EoaqGkR48bgD2GFFdDaa1f7xDyoYkLUKDNPajbdiCBfHPKgev9HfqtxoLJDSHirRKhUyvBPajYqbMYSnf8yiF4g"
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
