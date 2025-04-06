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
    "5LXZPWGYdAvTX2snMvkwSdKQj4teSCUixMd9y2V2ZvAvZyWwktKNrRYcabF3DbVoy49nsEckh6gfKw4A73rhY4q2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T4bWXJSghH38sMZ6L6ow8tHutjV6Wd5gdW1GZEMMyNLug5ywsjeLrco8ovxfeMQSxGobJxpbdbmi9pkayF8B6Qo",
  "key1": "2q8wKteY4fk6nLZjRM4EEHxweyQq1JbinzfkybYkhWqzaWqJ6zr1tn4qJ7jaN8NV4Fq86wdCQiN36ZTk2gWNK37e",
  "key2": "4ZyRBYKbCf26GuRFb5ic61pd83pq21H8fvPjoyj3T8vqdko8mcMxyaSHXPoRzMkBiWRZkrtoMxUCNuVW5D1tTd2J",
  "key3": "2KbD4Rp3wcY5acskuY2W8X81vYbhivhAMPbqQYChGcLiBGPyLCM4PAALQcz8iKgN77XKoLEsK18y13ZUMJ446CCs",
  "key4": "MiUdCjdruZptW9rSy9SPuSCSgTyxvcQLgo3B465St8mU6ndX45Wqw8PW2cbu39PHzLxzJbcpHm7iLghi7MamsC8",
  "key5": "pYxCiMgGGQPMarHEeKUsCPxYY79BcdoRLPqqkbM6bMqnDvkGz4D7WMLrXtbbzSpDTbyVMWYtS7cah5n23osKg67",
  "key6": "5JyNtUApkBNUeEB6FhapzDttsErUMo8iJDesogNUVBKfzsiARHAhKttw3EnAdMR7yZi2Qd6tY6ari5wtx1GNCVh3",
  "key7": "4avDfkLufwLaU56egc9rmTUTffhP1fvjbtmdDX4NSLTHQKKL9U7EcyR4Mjr51xjKNEvdVDUopLKDeyY7un5z4rWW",
  "key8": "Yt71esEEk7NELiZcvihFCKv7eteaUYz9R5jfC4N2KKQgkKd8mpR8X5ByZUeodgexibk8tPGEQo8uPcAe3GYhiuQ",
  "key9": "5uXY19wQV9Ye98oDYv4rmAuLQYXKABCLhZjcS47GgxWxd9kv4EDCFSRbEXytg8cn8E1KfzQVcj6xGECHBVn2wagJ",
  "key10": "2siD2aD8pXMpHgbpDfK1jNSrWGTvQWfcjM4a7DzWBU7KwpSQWi8zoi7kgDYmmequs1ExUD44ofdtHjZUAnRPZdC9",
  "key11": "4936FZqkda6eKsyALZmRSXcCyK4ysmobsTAk8MsJG8tPwhCsZkjWTMM2qpQgAPKWwc72xoe7Kff7bUBDTvNfasqY",
  "key12": "5e5yg6Xtq347C6uFedHPHPw72oLFL5V6bNGiw1WqXzcWgsLREHXFGtcEVGqD5EEYc36XPjofUd27ysNkNdZgvAv8",
  "key13": "2dMxnW7FrNM2hz8C4XTC5rgvukacoSMcjL2wWCoPm8NJP3GXDxiduzyVpUyXCMSDkpfMQBJtHixskutrdRs5soSk",
  "key14": "4P8jXK5txZYyTwWbWM24gAHKq9SFiArKSzmMcGX586sajVejcfxzov6w8RXThBujtvDF3Usj51hdEAEe5ueq8moL",
  "key15": "5k1HFiYGwwxvTfZpVu5FGm9AS1uKxEUMn5orZfs923Kh2BC9Q4g1W9HhLowjNcRYfRLBhgq79GCQRK5omqAGkcSE",
  "key16": "RPaxBaUJqGMFzGLDLibMmhEg3nzNkNH4JYFzmp9DyBYXvp8FSu99Wg68bmh31hjXQs35XisY56Dyo34TSyb19yP",
  "key17": "3BXrtKEDJYGZrtJ2boLjZEQBpFMDY5XFmNWGzEvW3qX2cod851kjNEt9KamTNMaBFMxcf4otn6Dt3VN32331hyuo",
  "key18": "3ENw9e3yoibAgjmrKwhGQVAzy9Yex3qa95pSbuVptxFtDAVpfipFWzyALb1yXvSbh3zeZUTq7e1vWSqMNN6rMRp8",
  "key19": "5nAp3KZWPbnswxGDHxtVYLyK643XTANe8zCg1sgkCsiUBa3WJfLDNE6RZ8eJ9mh9KEry4KWzCFtaVR1KpoZGtwi",
  "key20": "31WaRtHCCG1DFVP33KTZMwviudpYkKSXLayMELHSsg5ddhQpfbwoJNhMLioWJkmHqojTzVEQ4K5MDkqEjZHe4a8Z",
  "key21": "hz2p4NSRJNCJhuJnNM8myewtdW5LYxW2b3UQRcggCu5KtbPb3iU3tSQkmbGJPiZSK9b3QGg66t39jwg6cD6mQ5S",
  "key22": "5VKAqMKBaaaQUvxrsb4W1FxG39UjoFguTgwAgQzSQv8u7DfLFt67CUrafevsUAvk6XcNRWScezX6JedWSqLmbwhm",
  "key23": "5nZCW58qTJVUem4DtKARZPWW7oCynSJYMLR6d2kmYTZKbqYCvUNdfqu2qDidmhr5E65u2UPjqkW59ruwMggXWbY6",
  "key24": "4injdEWZrqxRFAuWBWyegPcvTRg4PagN8x1EH2rYURTWF7HGB9kr3xvcufUq8qvyVUJMSh2tmcFz76acQwjp7GfA",
  "key25": "3KJnGSNvuNHVW4AXC4asznd7vdBYcF2rfVVrGLLUnoqveecW9jcsEBCcAJsKTdwfTLvmM8MTs4fzgZw74KfUYM7A",
  "key26": "dLW14gLfn6ktZemomGd5BrvaCtr2XbDnvqwJdwPBiokdtK5E7YrTwczU1XukNXXCVd6csV7i9FFNmoopiMuZBeX"
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
