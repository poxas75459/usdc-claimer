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
    "4RgTDshBTnpYNFCL4MRZRxpGEL4AhP8TWvarR6D2N9fJWosbZcDNUuYDGbqJLmiKDHASVPyRoRnVUCZgAUY8vWpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6iwrcV2KSUJGjmRT6AWNscsMhWxbAfufG6Zh7y1mwHCwGZCDPxKyHsL5j5UReL41iFSnpZdHbSnbtpm66djdFU",
  "key1": "3UoahVSbJkzVhHXU4bYLfAyYoqHwxrnfvQkoMMDBYrrXKnp8bzMbWdf5EzC1WzG4aqxC7qfcB3kncmPLqSQsMAVv",
  "key2": "3Zn9PCvdrCZnPpnHaxhvuM9nCueKkQnhKddjFBcdBDt7gUjWK5w2o5TSEAnXh9woPGzMKPibBQkedUUgYKDBAb7u",
  "key3": "7AVZvd1CS8TVqEbBF8h7F1JBHfkdZ1E6zZ7LdaZ1hiETeQonGMR5uUK6U5GaaPXoTq9uMfZtgJu7VuBtTzPrBtd",
  "key4": "58LyxbfHaVWVghyuChaHpQXxw8AR2K6zeSuRkUF6b6MCWpNH3pfVHZR6pRzhwpkYQSLzyPwyYDsuoHGtgq1eG6JQ",
  "key5": "3vWXp6Hjdya1GNz5e3WoJSvQfphQwQswvpDFE2cN7LccXLmceFK2Vr67MvKnSFdwP9yo5PsTpxqF7sfK4TGsYDeM",
  "key6": "2PrHGA4QK74qQ5XshjVBVDdpCMzAEU5GMvFJpNzRd31vfcLQaHM1HFo6pzSMTrN3tLz8TWX4HXheLfVHdb6q5xry",
  "key7": "2UmhGxf6KNFHKvu5zRkzCfXpmtZyDU4UH2yytZYiKT3QQVNp7RA3s5qUyCc6jejsLjmkpkJwmzKxx1e92V53UnFs",
  "key8": "2X2wJ1JZVQfQW2K9djZiVi6tJ9UHCnTJhnfD1ht2BCjN7cvYoavboFfG3bWgzqMrhqzc3ZGHWcWHPsDhyRDhwyhw",
  "key9": "3mXaoUfUnKm65zH5BMoDPTFSkGUcXecYXC5pyKAYepYm52GCzyQV1T6qqyZG8sN6tDYwFa9AN2n4DyUS5125pTLb",
  "key10": "3WZ4QhaUpMkZPZyoR5E9g9xSocooqpvnqbZAFctT85ti33Bargbxw1svRKkTzhckpnznPavzy1oEnykRuh18iLwB",
  "key11": "57gdv3S1adJGtTdcRmHp8GD84gqUfpnaVG7AzRHYimNJAkRadPwB5xAyU7VULMQ2eBbzcYVLhYCQ7fymej41LqzU",
  "key12": "5rYhyav2ZhaZkdewavXxSCV2jmXxvPTTY3DPnxszTpLzrKmyfewSJ3doCaxE5Ffu9dXEexcZF2zuzEMcBxmu5a2f",
  "key13": "5Y41ihu2y76owCxg3H5S3fCohVum4vpGRmXV9kDFYHGoWwauKqwQmpasep4ei8TQ3k3DRBfFEG3MLPLguz1maEQn",
  "key14": "5UXSancexPGBTQRjKH5pxbcKFkmgdCJAyjBtcppE7VrGgHAaMzN5FVCb155LLeUZeMXy37Q236eM68Bzr9tbnjc3",
  "key15": "5sF27jZp2VvaYCwcn475tD82X5fAZd7iPm3j5moEYxG8LRWauZPrHpGpwkQwLJq2H3pTnZLabMqw42vF2sfeV63v",
  "key16": "3nWZgWA5MTvERFvt2v6d4MBmvye7gjQtPT5Dgxc9XBpJLWhghiK36vMvW6x7kJehFhiqv9A72rtgmffbi2X4Zgbi",
  "key17": "47CztttxadRho1xnpY6JexDqJkaPkcb7qtJs8ZW7MvFyuWzgmcRHNQ2gZaCLdGyXEshLh9LdNg95dtW2qiCt9TgD",
  "key18": "4X8s9cNrWrTXEMdzDsU31fz83WNdsWXpJRmSxVE7ewY6jqQx6cBM2yBNkX9s1W8MdHNbMs1is2NXy9whisW3Anu7",
  "key19": "4e9QaZgwTH9PpqGku1e87cz8ivHrfoLRCBKXd4prxCGURdstPXA6m6sCEtoRHZqi5vN6zuSCP563yhdCHNDtcCEV",
  "key20": "2SPSYBLXXZeUUy9Rntrvme4AZ96mxcHjH7pKUDgtogznvEuTwcS9PKverqvvHRRiUp9GwB7dC5poMdTQsXUhdXpR",
  "key21": "3vCvRTpztk8YMqPVPzNezmZhkjCecdtKikMLFjj6AjUSqw3XKCy4VbaeK51PhSofT1ZgpazX1GbWkrT3LoLmRtZV",
  "key22": "4fT5eFLJ91FXXA8ygz5riEeQ6vq97DNv8y44eZq3QEsbX21RHS9rZBVEefwQ5v2NoQwvrMuyrD3csTxuccX3owXQ",
  "key23": "4GCoA7yFLn1fVCshPv2ymb7su6dCHieGhCbiqv4zzuR4xoVdFQM3HP98iCYQzrGhQ4fkdtdpLW8s37zyYX4gFGbk",
  "key24": "2hwK2KE9dQZg6i5iNMuTK8vgBGQdp2bTtTmXy5iXSRHdZWrVgp5dsDQcmbgRk5wPcukcpEWRoESkYVjvsEHpRY97",
  "key25": "yK15phNwejuizdqXSSfHT59oFi7W5xkRH8rzXhcuXS6LEK5fyu6ZpRw8Jp5U6siEFTGL5BHpmMubrJ26pLKipZU",
  "key26": "2rVembSSAyGGpDa7M5DGH9jsznsCN1F1UHPDqjQJbXtAaq8hDskz62UvLNPXxwTsGTjm4aN4z5ywggAMWBqsd3ib",
  "key27": "3yHuqR7oUcCqT5JA2zvK6soisuo97FLoa2mDW9BZ4eWqU6MwSmnHHjhCVeqHyipnrwPyNm2WKzfTuNdYQsWxJFoW",
  "key28": "55tjsk4HDCGbkJDWWBdDy9ymggPne85DoBg8yrL6Pj9hf5jPPLGLqET9bBXkkgNgqmY9hCLK8aQcATxD9PKK7YZR",
  "key29": "3wPyygri4hSaFFmLHCVs7YwXhE6kWGJdoEEdmFYthfu6fmgNcFqYESkQvPH2Zr79hJv1pB3sBkmJvqVg8Th87xv2",
  "key30": "4y6jsPvFcNvWv6tyZtoHj8rVNA17z8NUGmvi3oP934aQ4FR7wD6N2mSSyBhjhiuA4i3kppbFXmqVYtWzDPkSpTex",
  "key31": "31JfEduspRQMQC8h7QXqhPVcnujC1s28CJiLfEz9jN4BNzU3TWqMnYNoXbKzDFywEpXm9TNz1ddJY9RunnPc56BA",
  "key32": "5JqtVBG6WCHCUsnDTtnMFa4nn9YXsPezWciqAJLHSStSFNatLVhhan2S4JHrNNtE1n5h1A8EBX5FHdryFeDQuxWD",
  "key33": "3k9wUr8jtUCBqnc4ue9QJMLxpd6tUeeRYz8iZqKRQLoo1kCs3rjAG5bGUc1eyjk7WUUqT4C1s2dxVNE17EbSSyDP",
  "key34": "VaTbSh7xLAYpeVg1uQBPc1UaavXi7muc3PZBEZk6hSeiJubuKYHA8EGNLKsbzGhufYqbFbK9KB2t6uWYAhcB2R7",
  "key35": "54DGFSQekBnKhMWp1ybe6ZogN1oKcCnefxck27rRUmSYfKDtJDQVp68zqY14KBoqgUbK61pVxA1eyptFknrnXucP",
  "key36": "5df6maa2mDDm8Kx28uHUcfbTpvqvobc6b1jzokdSdew9eu79ExpxGL6U5bPdS3hNKzZs8cvk889sgCRVeBjEjtyu",
  "key37": "2Lx9HZHQV2VtLo1nQMAdzh3xDrFgJ4xbdrsfCLScsdeaovwCsELmvBRjguaMy8sggDWwyZMGjwMCpB9QQthbaCK9"
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
