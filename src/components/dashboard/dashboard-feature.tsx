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
    "3RdJ8wFoJTx4dcjHNYCZUxeU4KNwyMNCJHZkz8rUULxbTLhqwNUiWaVjdVEP8NEtCF9KJA8cJ5UKK9ytmhGQYBcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6SeDG83gAmn6fWptRqbxeQDbAN8kYAM9kJ2ew4oSnc3ovVizTn31v1di8MS2L7oDX68xMrEPotGRn6364LxVv3",
  "key1": "53fsiTvHJMqLeQ5fiXzZJiTFLD3tJ77Gcs2eHQbcHhmCz3anDQ1LgNFo44PRNnUqtjcyDhy54acKScFPrZGkjPgW",
  "key2": "5hQ3PBHukWmJ55hDzMMegJ1FfF7MDDa7pKyDZLoG5Qv1f56CpNubRKbc4fxp7YVAgyxYRYYgU6xfJYcmKSHhH9yJ",
  "key3": "3tdmJPRzKzA9wD1qBbXUBjieprZmsToEyauv3b61Qy1fuzRDU13oZHfTN26PtPiHhgBfMuByVhaLWGhvgeD3EaUP",
  "key4": "4WP7h3UD1Q6uBa4KgjML88p2aFWtkekyrAD4aKny5SjGNYBPzAnNXEXMhEhkmfU51uuNtBcxYgQCbTQZXA74JHt9",
  "key5": "AX7aNwdjrs2WURUT194vkR4PXE9vwiMbSfysg1WhZtxGNSPJatKGw7VSCZEw1JoicgzsC5456UEEaSicJZz4dvi",
  "key6": "4JAufrYCjetvm1PDzuiQKWcp4b1oz1JjkYsFKAk9mqvG9WZiBGZcxzYarf1iqekd1BkmfWKSWREzamPgDdagnPdz",
  "key7": "4AEtsbRh6knxvg5Dk52aX1pG5byozFAq42jVhyM9vhYBXfoQQejzmQLW36iG5jYUhdZ9TeoXjPhG2ga9ibUAx3WL",
  "key8": "EAGsnZ5UCxMBV3TAGEVfFo2DLR76CJXyTMbRTrtPG5nmXFPmFQjE4DCNqsXZ6C5jWV39C831tUDxid928bWhWRg",
  "key9": "2S5vsovKWEt2U7AkK5k7nHQsnkCG7xVHmmzHTUhFu8LuBUepxKTKpm2g3qagK7hnYtqeWXrFWwsCbrN7hJNNyGp2",
  "key10": "4D7XgXkMWKa5xxkSW627edWHwpmPwZbettTYQYWuLpiPt1gV6SoAxESexFYMZLsFcHuKNnc95XmwbCPw9LDv5fSm",
  "key11": "3EB8192dSs5sm2vUeL13TfQuDbkgG9Aid8kCi2kXfPeHfKQVkot9icFR8ce8fzd5M3pJuv15xwP1766xcMU53RZb",
  "key12": "2wbNEExv4Kfpmk5WeadGtdrbnvoNT9nkuHFGsY7yFyHgQ73feEXi87bt47PTg2Nqu7aKUEDf22Jh52juvQJ2PquA",
  "key13": "3yKgmuDFeRzwRpkUyeyENdE7B5kvVAYV4BEVNgpLQAYCahAZnDXbrL45bnbzzJNBfwYBeueTPRLJQAV8UWsPM8DY",
  "key14": "3sdjqmBJStMoYLm1Y1CbVGoLLRk8UEgMtrjhu4YCvkcrFab8bJrqofTeQQsoGc81JrWKyNcyRRowJWnGFkvGttQN",
  "key15": "4RXUXas5eWh2PMxvHNYtEuvR9XCirGp1Dq7nGkQ5uxa5jfprw3ZVmS3xMGpLtRrUWToqWsaomufXfDo3NofrEgEk",
  "key16": "3CreyDpCn6zE6adh2bSZ3KzJ8wgZXgNGGzgjFHM38t6LjxyzRdRTfN5aWkh8UAVunuZ5mCnPhiHpPkCmWQtfXjuA",
  "key17": "5VFg2G3jsKwAEgiELnudmxykLPMZPgaGn1DsfFC1pU6irpXZXrzwuB7WmhzXzvGAskFnKFJwCZ2zVVTtaeirmfmz",
  "key18": "5i5va7SguWNDHxpKRuE2sB9PMtmYm8GQDGSufYvy6s7nP7JBkm1dcCWQAZu9nKM5qxR4cmzzbrnj8Yobf5PySJig",
  "key19": "Dunr1P79hsMUt8dqStu7P7jHqLepnMR1WvjNncXmRFYTZbkip9ZQnTrr3zYqH9dF8AW7Shw8uwrx4J25pbfCTYr",
  "key20": "4TXd8237iRRuqbjEEmNowS69BX77QN2T6aVxfrETPiYGzjvJMWcRmMbZWgBNy7m2xixrN22kDcNkQBcZrc6iL9gK",
  "key21": "4SncAsx3Lo2JfjiM2edPPVrMpeeKogJEW3mAY9KJ443S73L6EMdxAPBMc9kDV66q9C6M3okpvrtQX87kq8eGaujP",
  "key22": "2Utfns3ZoiBpFSMWFQc8yWWZrmUqbuZW4wrQ8VKFvRVCFhzjAcAYGXiKuQH8F4BD4cUCKFPdVm9spXtSN9PgY5hN",
  "key23": "3dpLCSyiq6xG8n3HJHEhY5eUVZYzLhHWEsZW8Sya2QfDrsiuc7rAXBpvsxgzCV2Cue5yyrjGQkLHPukxFS9N3ESA",
  "key24": "4jfzG6XXpS8G3tUgAS5D12K8J26Rp7Gz95XC8ZheEBk669BnKdfdshTmVEHLwPNLcVDWhbZEWDk5ZSfd6kLDJ2J9"
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
