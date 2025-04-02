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
    "449srthgVaSHBHnGGTUUcYHP1ZitrEZQ7WJT8K1vkBf5BP91GMhaSwQc6d7S4FaWh557QCjBENrJfax4QaxFTAm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mv8LnSUJu1zR7ZKD7KLm4rNbT2jLCmVH5oAh6TUm5pRwykTJDjWKiJfPGLP1zwsMCEaG7MLYaa8KQmbQAe5idco",
  "key1": "SMMZMJoZLWVntC1VJyYFMsQUxc6khbGN7jZUfz74PZJVuHLDEBpRUKMDa7WuoHeFJMg88sLhAGKmeuQLnJfhVRy",
  "key2": "5754k9iLUQMSQ2L8wif1wF21Nd9jcmHcMXBxmqMP93TurkARGJZ38h63T6b5L8isc2faTMbkYQCvErTzWz6q4EiT",
  "key3": "4SkKXfZQVVCHTogVnheRaqZbTnA2wxuyb6PJjtazDaH3bK82pQyR2HkCRgyd6meA4E2FmYPNCQ9vgRSkPNYNhCy6",
  "key4": "5GvzfcSffv1KrPRw8jbtTt4rexoKU6UCzP1ebc6qJkqPTvcGuVmL9rWc3k18cDntwmauLw9wuKNVsTePyzUbV1B7",
  "key5": "5xEaiEaE2bWY29PVonz6N9Ec2NYFapGSA7w9cCMFvrAabLtQKphYBEYkKzTyuvEbys5yaMJRqrxW7nSSWN1WBaUW",
  "key6": "5goBbGhfErf4jHMYCTf79z4AVEyfVcABVEXtw1AZdKzYpTjXKkU5gbRmZQTFz4EoH8WwaNzpdJhJ8nLooqRkRtHr",
  "key7": "4PXKG3i217uPbHfdncVRHd2cRwKoJZa2YsEq5FGi8nUx4TixFAVxz8HgwB8wbrqkcYmZTjrAq87N9b4uuXHm3WiL",
  "key8": "4yZG4dBxRhmaTfstcJPpsXU9Ltx57d4xAUGH59ZD1TEUTaQfdxaX1MtXJeunX7EFbkTbtr8poEaCu1vFXSQS2A7Q",
  "key9": "5Lj8Xz2PvE6MfBht7HZmfrPe1XA8yHttTwmrEyAWz2voGMDyx54SGiu4DJZHqmjT2WjHFK22pBSo263q7mdbvXJv",
  "key10": "2wUdqhc5JHnKakCvjtPVAHBJ5vnipuDcZV9QFx73DzvBtoDfmQPMc6NsLLfo9mJHmZPHjFVbJX4AMcEh6bmpWWia",
  "key11": "3qJPkH68jyWnoTFpNJZa6S2FQ1xV63qBY7MeUkDsiv7AStmpeqeru9XDHUThdzuB4CbdvaXmS5zjCGJyw2u973Zn",
  "key12": "jhhmMgWYN3ijB5hAWETCoyMxHUzRmJLYLrQY4hRV64BqoR62DWQUfQcgysmeDUyqPUVuZGoHvG6hvq8qHtNvzbq",
  "key13": "3KW9crq6SCU4CMDmNZB95Y1wYmTZVJbrgXZZkXfVe8uTtFYnrHLwupksD7o3vgSFYV6fvzDHjGsQZgWpWMH1GmPj",
  "key14": "5hoaUXxngbKjLp6atbWKrJ4KtkRwsWRhePjZXfTJDSB3txf9BrCWUvpdNqdX6dvP7AEj4fXGPg3N7yCjXvA9wZiK",
  "key15": "3dwTk7ogS1N6VCAZEhVbvqKVfMpQ2mjnFyYv3dEDhUecE6otEvexSd2nsWxckMs75zcfUFEuFtGUTcZbTxzzy2HD",
  "key16": "4wMWmWbhXwhoHqKFjdnjhZk2KupXwt8WLeQBuHW6GQWCqHEumGVf4LtFbM13kCc1Rn99yNCqTZuGxNpcU1siS9Sp",
  "key17": "5sigwKi8JMpnzqdiKN1Ck3DDyzxiTRXYShQ3ZjF9pXiXqVVZFkCShnd3GGPpmExBTEvHwKkAwopptkBGxUHVWazd",
  "key18": "tEng4QRsU4ZTVAdTYad3u1r3qx3ak7tdBqDRQUzGdhbUPEpmu9GeSfSAHnX55uwqi17TFhf9wTc4JfD4vS5SsKN",
  "key19": "4MoBhBpja1qifcgMkgePCYFefvMAHYRcvzqYVHZP3JuykVYo8bQz8NYBzb5TV9vc8z2Qt7CLg5Mqs31xwF13JPjJ",
  "key20": "5r1HsPNRr4zuLf7YPWrwb3Up5nMGwikFUs1PYZhGGrav4E9GArbLbuN1hbySVdFqqDykgrPiuTSjpttbHaga1xGk",
  "key21": "2bLeeNtE1qvDZTn9JgoKd3wBcfzZDdj8vDAGNiUz8CNv1pgRxkDoGCu8rziY4cQ9A9y8emeKQ9Xa2RV9CpfiaZY5",
  "key22": "4Ct18KxrPPpTwu9jAajSMRBUNPA7HxU1eoMZ5iYja1vvGBJM84fLBdYoGm8CmcyPV2dkv6oe9FM21S7JPmNvozgg",
  "key23": "2N9xdY2nHx1uf2MmSPSWZEYqaha9KfV6K51CQVc84zqutk8kMnNiLFVqqmdywQanKD4rFcKwcwvA9AxfTbTWD17Y",
  "key24": "39oaMHfGHquGj77hjYqxZHUKGEmkiJCoJRphHmeqEDftoxPTsFARvUVGdU3nKkJo9R5HzSSSEK9wPQv6CbhRjTWd",
  "key25": "5BPrjS5d3j1CFnraVdCRSaUkfkSVw8Vva5bgohXAR8s13V5izTV92YisReQ2cQFet6Y6JyooMsMUBYR6hPLZjHNW",
  "key26": "2QDtFbcATzijyxNdFikCVeqqbztDpreGYFH9TKyrN5HWYLYcwKiPyWAKxhevSaVCjfaRpZPyUmk2qqMFexABHgHZ",
  "key27": "2VM7DAr62hU9jahKfKyhNHaPmgix99tUTqLdS8veTRGY9ksfwdDbDnHLE9hZP4sBrAXUU1Q9aL7LxVNAhboo82We",
  "key28": "2Y3C5jdyWcEqM2drn1adayLgfKHkH2MYh8NMqFyypZsDzS3PVwdXTzYiRAXj6pJN3DEFTEtxtvivkfYYY6wkuRo9"
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
