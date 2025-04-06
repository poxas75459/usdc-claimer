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
    "23bAYF6ENAJmBpL5smvRZR5ZHLTPmRxQyQSDtoUNz3mcHRCWJGiz1PuWFkMxPGGBGzKpvFwittpkQdcfCYwaYnko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3283PhiGgZNmkPYgJBZ5GTg3ahatSHGwMV8euumyo9pBhtFXn1crbVDdEmBzwdZMozqVKPMumy5RvCfAphGeA2MV",
  "key1": "4fNUN7aEgSGCscpqDLpMqA15md4wVcRufjGtVaoTihbkb6AfmwBSv4DL2XZbctXvWa2P5zy7gDWbheBBFFNkaByH",
  "key2": "3R25cdoJWWpwXy7d9Bnu1q3KduyZdEdPjzVJd8hKMnoFP4s54i76h7ReXUQSqJ9sxS3spbTXzeXYfivctpF68kP8",
  "key3": "4C1rhc3gDDxhsiDWbZPsWjNVNC1joJX193RAaQAmopPAjQNFtRfazXCsRn2hzGtXXXkaEGH6DxptEz4axrD2E4Ld",
  "key4": "4BNVCBFZHpK4Vy1toAAegW7dHE544iWC3h3iqAwNCKpYkWpwwQj7oCmpBERAMKo4vuzSu9QycHxZjPCfhyhutXJk",
  "key5": "3WLdLAzugfksKmjKqmZrDA1AZ4FwLHcqBaAMNyUktyr8KSyDmmUhvTKJXeyqFcu3fQhgehzTnLPQLLAEFM9sq4JS",
  "key6": "2V4vphKYkW1vtS12ih6YszF3S8onErCkHK9zpyPBW8eggiRCUfFQoZ1TQtuJFaTbYNDgokd5f7ipneRumkuD4s2w",
  "key7": "3o8SCvmzXTLiFXsVEdvTL7XqzvRW62nuBffrQ9GegWqufvS3XtNxavb3YfPTZMXgbzXcbUqbMZ1ARbL9BLxgLKNw",
  "key8": "5rm9ftjQyTho3y5xkddBEuJuAsAjn7ZrSChbuam57Fg7eYyvND2QYQJnYmV8zMdo9kKh52QLFVqxMUabwC2KXbMM",
  "key9": "5GcWVLNmKZ1VWVXswikYP5tVJ5HhCwADReZZZcbGfrJqWzZbqvugSER9RyrQPgTxy7uro5koyPynStEc2PrxjD5B",
  "key10": "4WdXke2WGVtxchKmbCV9MrJDfnMTw3xCBorakw4Ti2mm7kzmBjSc5X27XNc7cbZ9AQif91KK8KRsmnenm7f57b4C",
  "key11": "1hZEiMJgJ3NxtJnLL4mYhyKiznCSrGEppnLye2f6Nek1ULtp3FKXcBps6BMG19rD8oVTWGC72AmKH1Ga5vviySC",
  "key12": "pemUuqoR1oVPym3TDmCMkRDy2tTmeQkQTH7HUcNkJa6RTzeE5uHCXbVSAoKiAS82M4R8cwQwLzpkyR5Yj8ysMVy",
  "key13": "46oug2NAVGAmaPteQJjidJxnwFAnoFsKrTXKUoSvqnM5DUq9qYE6H1SfDopERNnBa9TwsGk7MMJZFfXwSNzakCwt",
  "key14": "5yACa6ss8gMrMUSHNFMGga5mzYazsbR42WCHA8rmDCRbzpqcJzDQc7ddMG4YqKBHWGfx9GoYzqQdV6GZHJyHCx26",
  "key15": "4NXvenmEgVAitoTZsMXKF1vDaXkDzHfUC2BNpUyv4asSgab1674KKATfsQvpcrBKbVVLQbUzTw7jTG4jJW14TEHH",
  "key16": "2wo64T7dCSvSr3U4kmNAH4HeRCc2anoTYASSkiPJQb3UxnBH62HcXxDnmRPNx7w8Fm4TzNYqNieGfnJ6gh5RWUyJ",
  "key17": "5XjUbCYqHN3pvbdUvJ5upS6pJwyVPWVHkMLBxmYvtdJAbbgGUKS33svA69QHZE1ZhmLvYDdkpwXaZuCeqBbzMmBh",
  "key18": "m6vhGxdSCQpSqexef9hipXGRp3LxvEYFSVzre13ZkQb7xioXHSmg2aLGpenyAyxmyJBp7SrB231dxFtMAsxhLrD",
  "key19": "4AK4coymrF2uc7H199SfwLGRFPmBuJ13vjsbKLb1m6aQGD7CYZye9LxLkXb6downotGvRDf72zPdnhkP1pHJzFJr",
  "key20": "5L5v87fiKHzc2f95zuYu4cnqbkDZsCBEmbkBJ8PmJ1hatsvTjuG2g7NTr2Q3UGR5PvJn1aDmXADcd4eMx3zqvroY",
  "key21": "4FkCKs8QZtGzZ9LBXzcKjYjM8BkpiHS1ox7LdkbAPLcHT8KtYr2Ktx1tUTvxRyLXTm5jaivehrkcuhyFtArxzRz8",
  "key22": "5cyLA9VCDvpcE32W6SYz8VBTW4yehpHdZjoqqgXs9AoNDWT19nrrCoNGxwR9DL7GHnnEAhsZxV75j6gqoF9RgH3u",
  "key23": "5c5aNV43e5TGrgMBpiQ2sPzRUW9TWbsyPtEarfUibNcTSihCVxGAdsUZBzyuA8Ens58XuKmiUFawrMJMebV3ExUu",
  "key24": "4s7QP6mNjRUuXv68FE7nfvt3DCCmd1bw65ZtapC839QPBqEqJYY8QhMTxJqUepk8nbPXxsoCqrhbUDe52uv383QN",
  "key25": "4J3Gi4fV1B1UEpcBUBiMGd8wfSksmWv9jEfPVwvcCgHbGS4MghA9ku5mnLRzbMhxDVBqJVbGMtPZiF9WThRffYiq",
  "key26": "63m2UfqazDPmE7to39iP2Gy6sLwGxxgydHbepq2Xxx7vE48wbJL4tbSXjEXvDRWSiugbWq1GYVtESzkhnGASvD6D",
  "key27": "stW1nKPkB6qnvrYqZMux15zTByrjrnhZv4PH75pe6qUSM65HAaQKXXQWN9c98S2xHPWv5bP6X3CLCvLFd6NyLBU",
  "key28": "2yEu5Q3GjxsBLrYaAdm61Q4bi5nJjBKcJ25sZkw1zeFBvz6wdhpXwdrFCJiGRYHLqfpKBSVimndCeYFRDUd3VAXb",
  "key29": "5vZqk9FvVfFkceNLgf1U2szsvFhJKeDwFWXF1NQKeKWjG4ybrz5CMT6beKv9kPzbcEUokTVNwHqPR14CAiNEmENa"
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
