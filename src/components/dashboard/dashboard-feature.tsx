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
    "2qWbt4TAqjtCUZ3VVaxfsynYQy9mJDdCNbgtH1koV6h9onXXXjVPdjUFNLuHqxZgvwkreqKdZMb6s1Y7smF5otDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Yozqm6SWfFpecFN6WxUQrcUqLtR5MyNLDjA9J6DrTwYTawxZVEqVXiamN9ZdMdd5F6V82KEVDogFkvcD6Vzv6e",
  "key1": "3SN3QktByNWssPLUktxvKarnuY9TakCcR8QQ2E7ffnJfoS5wL6LFJbTnax15RJSPAwEkWXyqCpNGscx3Gk4YDHTn",
  "key2": "3tkzf7QL8qmAM1ZydTehkSg7sqmLBuh3rjMJsJEyjKEu2Wr5YNgvHHw7wB8vC9dsVTGEJWvfp1RWb518WdCwEdqE",
  "key3": "4VLpKqBZQ2MHkaC86FnKQD4Gwmpxo7RaC5eKSGzg1vhJ5V1J5UaHdGptx6r7Q4Xkhgau1CG95dfLiFhKfUZFiDRs",
  "key4": "4uVJQV1HuBNT4tEmevRuYoPMtmhxv89TYoWaUBdH52zqnT9k6bFK1BDGZNC9qpCy3bAtHBUBMAUnkuj3Nn6eRgGM",
  "key5": "5b3asrVUM7cuWjAPtFMsBy3YKjdtud2wSEE1CqgUEySPBHR4p74Zbysi9vvwhuq7wRzjoGk8LWzDPAwteeCsQVxH",
  "key6": "4Hnw1Hr5MoXp9CYQrgLDDszfC2NanRC8ZqLeAvUvxpQT6PqsGxacWsTFZY5SJLzno6ggwZ1DHxKeqd6Hk6uaiiGp",
  "key7": "52AmXcPUyA3r4iM9SBMFW4p7gEBDBFpfRU1b1RtkPZ3TYM8EYUZH65UWKWrxpBU4w4HpkrJtvoG1ZxyELpji5czg",
  "key8": "4Xu412dWSW8aTcdK6NkGyhk8guKegmNnNnAW1DPsW6zxeA6XBB5PHSRQWwwt1MdpZNr85Vjg9jRcQJq1hiTG55wk",
  "key9": "4K4Wi72J1gawV6s7q1rCe1Dobyr8KKYgpf3vXW4VivB5ZZcqxFgyo8sgPkEcceKU2VFK2MUMmaVwmSiVKBW1zt8E",
  "key10": "3PdMdsRpnenCX88A9fGvk6uvsm3UXp3jzgvHHdSPxy2TVCycy7JF5kdn9z3DSJ4NHCbK113zXTCF8UUF27nv414b",
  "key11": "49GsYMYSKzmvaiZALvv1KX4QmAnMBeeMiHXCM4kppNYsFTM9dG5HxwfAR5y1QiUgXVVTSfa81RC2LD9U2hCRx2ji",
  "key12": "2PpP21UeYXyz1f4DcNpTqPeqBjTwA6XV8WybLT5a4pNS6FTR46MovmpAgk8HUxUkCfpvny4qDJ7Qm52baf1U4fXY",
  "key13": "4y4b5KVhvjMFS4CZEFCxrETbaDPjavuXsdNfTrGAQD5MciPWq2bpyfG3thtSH4qmViDA6oRh3GPfahyoiLXnwWQH",
  "key14": "2KMYBxsTXXMquNJmXdt3wMCb5w2BRoXR2A58FQekXqBZA82vo9JBcJCEyTAGW2Ef1PiATATCDmso7MDLrFkaVfDR",
  "key15": "3xQxxjuXZpZpijVHrW34jZunFdZuMGZVWp8fb2L8o7fqLmjGXHRiZZbAraCwbvbD3Z4zVauaSaCQZvKdpKF3VvQi",
  "key16": "5MuYGCvPQwbrY4bvXAaZkU1YhBrnTGvysmqF4uV3NVUy1GiCeH36CmwkkmzAgLrXhZaRFmWPUP7AC1gcR9Kst2Bn",
  "key17": "5jSAShny5oCCADMrWvpf9anVUTzpmJ1VGKfRCMJ6JotMcmKeUaoDiAh5FgdfcvreC22vSwa75sMHcbmxTWXrrVK8",
  "key18": "4EdjwCU1VJEspHH98AYggWrYHWRGwfRcdLZDDQpXRoLDMMh8re2A5bi5taVZYdY7t6dQAsBfHD8SQLUrXbd3oUdM",
  "key19": "5bVt3c8W71zMxjfq88dkp5sMZTwFwZcGpWDnPbip34bzhjADwryfnkkPYQj7xYWxoMjycDpS3ggE9dWW6zhesNZL",
  "key20": "678w89wKPLyHc1micAc1sitiuThKDjvC1au5txNWYojoupqLpcaKZoMVYAJJG6AafKskt5qgtUT2px9Emf56MGu9",
  "key21": "2UBdRFi1euUYhYUAmuNzCUE8y6EVnjXNKFM8LicNR6WBJ51fjfos4ryZRnJxtrZ7rUxLUzhTzYixbhkKqHC9pWnG",
  "key22": "5vuxACzxdfYLWLm7P4dnEV1w9kKd1ypsaPUDUmmWs8xeKzLZeVwbqtYoZewyQ3kvKYSfRbm2zgHkj4cgxWqUTP8x",
  "key23": "3xGg5xZhbQZQvcCc2dfXLSnBHtgovDwQtBeRVvniKgu3qSH5ChuSSxaJupAb9euG1pt9hdkvANVsbmE9ReY7EqtB",
  "key24": "3Sya2ejvk8QMSKnhyKsQwJtTvD9sDweyEN9yRGzpas2QVNzTJ52KbwnUcw5csPfK7zsP2ZTHWcdyAGxyRd16HVHJ"
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
