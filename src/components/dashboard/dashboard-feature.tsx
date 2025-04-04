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
    "3YCDkakW6d9YbeKJzaPCXX8hUwpyNWU6Q7bjMti9ewUoPeXbwEgLgisvqm3ZkNUVESKkFjkVPQ7AXGJWjhhmXCjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXqEYaY6oedjoVmxFGEoaw73S9BiSGkPPgSeazEphPsDPjkC9EBHTEmBL8SLKqJyU7uoCvTEW8BQyR3VyBCYsQS",
  "key1": "4MZw8kUqJ3VrYxRH77d2N6yLMWsoiyBuxt8znRRq2rzqdAyGrjdgzd6KiQ5up16dEqkpsAvTpM8ReNJn4TBD74Xy",
  "key2": "5Aj2fMFK13NWS8Jzk3YeXpUn4aQWntDVBqUKUvx1kebyK5ZEMtkP4PoiFnxeinYR2skvKFJEAr9nwjTvfzhB46Xc",
  "key3": "2yDiMdAGbyikwTiXPd6ojhjiSoZq9QB7zq696eWnMAKTvpkKbd6RWymEKUnspkrLsZAy9LBCDbg8SeEBf3VqFjpU",
  "key4": "5KLxmJnuhyyt7KMir3iBrhNt8kBX46dix34j7JK167apV572mwcQnpM9Cr5utBdjSgA1YyfoxFrvLfNrw3DEQtjn",
  "key5": "26mGeKufww72wUxnXqo52uKLdeQYCRMw1Vh27P6fsA3DNDZnuoUiDFn6xmPGfpDBUPraGf2f6j7dpYxGVPFGbux1",
  "key6": "55oDAhpRUdkXcGSqWd3UhQFcHyzQo3GoJ3wwZUPsux74sbjn1mkj9gEzw9EzvPdgVGhSvf98SNptU9TYqwDaTfTC",
  "key7": "HXQ8DHFpKbxuKiFDapFwLdbTfUnEPKMMKpwoCuAffA3zjZ28F53cu7NcGEDMf7RGcniRh66vrBc3XzKzZnUSzMB",
  "key8": "cJ9zoztU89vB5WGVwXaknGTzTrL5tjez8886iKNCjcj5jDuNrU7NRnvT3A2oHLBnHdEUiSfurB2aV5NQooqymXu",
  "key9": "5oarU4xZCWE17amy3S7VXBGnSWZxiCAkCTMK16E1gMm4Q6dj2q7WEMKRduNeNwc1NYgtCBd45Gf297vwa56uiFbT",
  "key10": "9caphK378yCevTfe4y8u8SdbMZjd492kg6fka9i4kYBPe5XJoUEXxFaMt6KyLTgRJf3Hguc21HgfAzLKQwPYyC5",
  "key11": "5cqDJTqb4npdhRYnXU76T7WpU9JkwcBgqVzZ8gu9sDtmhnCsHVADayNUvBqQNy2fYqyJwmd7Vzx2ZTUr9EqFaVM6",
  "key12": "5vf3N9A5sMbeXSddHZTkcVxnmSNoFgaAtLzJf23JE7svMRYyhzwauF4MptJUtjGF5ice8uLqpYfMiQDdz2jnz65s",
  "key13": "5bbhbeNDEyYi6QxzXQGQTrVFjrJkfsH6FfpAoQURQGVmyEvpzoh2peYkQCEEiTEhRgs7nJnayA4mHeW8cPdUMkQX",
  "key14": "2BGH8WGr2zw35rXPhFeYPL5Jyx4QhxAzCEBic8V4cCcjLkRDeyHm3e5jrTLbzBSBrn7rCyDjbMgyS9PSAKTEYkTA",
  "key15": "5z1jEsfJRMzdWdocG1Biiu1E81X1RTy4QoYPxQxouinJmw2DpuyB6RE4NTbJcZRogjgKBWhNHc8npveijbUfgq2L",
  "key16": "2V7HezZFXVvEPqXwnzZx1E2AzF8ETCXA1sMzMhmfoEaF5D6TeFKPj9PC18iDSWEmuPcuiemHT1fvCZneBHKwn6zF",
  "key17": "4z7aLWZDvmZfpng34gthG6FeDxmzX569L6FdeHKMCxjszpxHTAytXcAbFat9Qqdz1ExQzVUKEDd3Hfhbn8EBPbrA",
  "key18": "4y2wgxm1icQiojViy4oSo399KSA1DJtXyNcwzfWefk2EeXJd1QD5m3LoCtoYq6njihEdV83gbJL2KWTEB9LmFErk",
  "key19": "2tsv7mWpRWsVVqgs65ChxQufreNoZDvPc67YJWStScKp39u3AHymkuNK5xLCj9vYjWGUH9Y7KT7ZYvSbTYjy2jDs",
  "key20": "5Cup9Pa7SzJLwyXpfEYKw8VFATT7XNkGQBhs49goMLMoKeDMVzttX5a2m7WJNMKCmpiyMvo4zweoM9aqbNmfXYPC",
  "key21": "2z8pgYj2fL7onbrKBiqxAAyytLb7mkYkB5ZNDdxUAkW3BtxYQwEdefnBBsYfGgbMsUEXVnswwj6PExAqzpW7SYCM",
  "key22": "Xj7sXuB3dtyraojE7Yi4qim5ocGr8BRNbsSYmT2UvwxzWZWSEnWTcNneNARnweyS5HdSMLZfk3XqjT1JSuidqi8",
  "key23": "5qk2hyELs9emDHbLGqwdhPU1t9ZU6SwrfbDqz6sLNvjiS8eSUpCf6RxexSUVAYjMGKB3ePtzviL6d4voJcN3KSbz",
  "key24": "2bBHPX5mGxbnj7Grj5sX2eZGGrhC7ZwjkUeTGrTwmzd3ENnj8b3UCkK9VE8wNcQGtMnygaZCUWHiswsgjQm9GipM",
  "key25": "3TuwCo2kGZjWSYUhAvTq4djiT7aGcteiPCYGJvqyFiPqzyypofNKK4kEwZwnRqnS6bmCLx2Bp2NjwoiGfHWHab7w",
  "key26": "2dXiV8Cvc8HLfGKQHCSaRxbqUXLdcka5XrhveGY7SEJKHVXU3NJKrW6uAQRcCWGSC69xRdg8VqyzYJ5J19Xsu1Jh",
  "key27": "39ZNmHH7UHz88zztYXHJLyM2HhJyRtC2kLNk9TfNPUpfHNQ7jkAUqCCV5zGh47pfgPSJK4vRLMb28p2gUzcJUuBP",
  "key28": "3dq8C2ejVCzY4sTfdDGVcbPJ7zFhQp4PLdoQmHQjmYNC2YNMiSFnHsRkDiaZEdChDiRiAduqpa6EXwLLfzYkGQ7V",
  "key29": "neK5qjEf45knpNGnfDPuBqR3StmchTbSVfACWN3QHgovwD55xw5gp2DRyKufyevhX1oeL1PipMG7wNixYPKowLn",
  "key30": "3xXfqn3DfKRr4ZAqwiF74SN7Q8DcRJq81pzRFE4jFeCjfEA7acsAnisJoPbQuj41kfZSTA91eNVprcXEQToQ5KVC",
  "key31": "41528XHMtKfRKspvXsqskfYjcpiDYGexUGNyEZB1XF6qV9oZ3FkYcaVBMCXLVqNFAMfAfQHqipkeDhfTBuAH4ooG",
  "key32": "TbkCeRySWowhk4XEivg9XqHfG4j3UjWUXGqvkFCXPZqYkRHn52gomgh8eokxbAdC5yBGgZm46oQYrMWwrb1rmHU",
  "key33": "3AqV9bQhDqZmonCq2QXbi5uWanP7kCmDpC2xHGUjmenGHGeW3M57TbGofH3gPsuauZjHxRAwfJaWHnTtpN2ieTD1",
  "key34": "4GQL7oL1BEuoqQixKNJYTk6Cfd73nEFpBmZ2Pwjoe1TuJ3RJw2NsAwKSFS7ZkPoCMdCXNf6uVBhCfm1TuXfx8r25",
  "key35": "5DCtZrumm56Dmb1YK68VTQjWrSFNK1Ga9Qwn23TugzXKzE9b66DV12QAMhx5XLRw9yWmRjxqsRNCfSgJkDw8DR3j",
  "key36": "3LLaG6ZBk9dXdg8gP7ZyKmCAkzmYqZEXG7NUFYns4WTUBHsdyiWZ1rycMD9STSzwT47GaTZVUvfwARPX96hdDVQo",
  "key37": "61sbRTTXDzmx5cCeWrATRpCgcmDQucNchmR2FB8yo2bsYDBnPRTCGpdQAMdA5CkZSEzWee9kbUW7meXo2VJPvbYz"
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
