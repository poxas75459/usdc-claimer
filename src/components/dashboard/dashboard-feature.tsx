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
    "5ctj8s2i1tnKZcWHZvqtsULVTA3R4Vjw8edXiiVTNqymdJMXgta33snAFG2Uprc3cXDy1JeBSAKxST7jpoXCp5uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STPS1E6baZcs3j9vGXDJgRa8sFfTn6oU6W2pYZjeEN6pLKaWEirBnoB6tzmhos6z4Y9RNDQjGyC9TxKVvgrz4tH",
  "key1": "4kZffGR95k1zgo5CDN1DhgsstB5WuhpVJ9tg5sdfcVPNrHE49zMURQAT8NcTHkUGjHZXikrdX3EVD82PRMC8ei32",
  "key2": "58wgUMXBYHa7qcJBTxqCK9b3Rg7eFvviourWyyxkr6FZJRRSczYs3NNfv1c82732ewZ4yTcQF8S6dHd6N2XjbX1e",
  "key3": "pegg3ESoKf46dRRpXdTRmnGR8Qb49kTLC4TmAREtLfyxDfJKrEn5TTCb5zy8kCbCVRvLhFCrKugftrroSJfwoWw",
  "key4": "4HtRS4e7twpTSw6Cj59GrptWpdRY1VneSQ78ph8pBKwy3jKYNqHR9HT521DwecG1GHPgTn9wJTUWj7Swp5ixLsYL",
  "key5": "vUZetxW9stReqs8g263uD4Vx9DHXYzjseauZaLpPmt9TkDMoQmNUWF7qkLM1yuLu6g63ruyxngos3uWuEfrXK9C",
  "key6": "5QygEtLFmpuFzrKjC8QN4EUw2kUGkCHpBkMVMMHty2CXcAGFgWk5yNgF7UPCg3mRacKusbnc1u5dvaxBe4vUsJCk",
  "key7": "9tDJL1AYceyQMub2nwz9RyKR2jF7TidiYrrXyJ953zzXv8epUTjGPnEZSGqAD2RefY7LyCkG98HaiFq83bbqTof",
  "key8": "5y5PE92PNZYWj2oFGK57HFHPKstnaQy7CVqQerqPnrH7GVSytNnt8yQdMnVfuNXQorangpZpxC7r5hQFho2J9HSm",
  "key9": "4GQoJqEpgGmwKZ2sYABhVoo9QeaT4FheDe7F1f6Fg7jwHUiUosdWZSptLHBc8hmQ4TuHtr6A8FgFdxECfxppGfLf",
  "key10": "3CVvGeL55gn6xgCWdRSH6sYzBWgs4mqRzHzppuK6hyNE7K8YQvvZE24hv1xLCqsFYgrcJt7W6w4iYVd3UcrBFCDX",
  "key11": "3xraCD55ZBoUZw31V7jNpbFxwBXP8j6aXAeZ25Cv9n8kfuRL3p2UikF1LpotG5LPnC74LxvZeyPHZuKE9hWyCdpb",
  "key12": "3RqUGzYj3PojUdwZUrNYa51ozgPEik6fqToGJ7uAMF5kgVoAxmLReW8aXetGiGDcEw2nYQFASrPZyrRbYeUgG8Nr",
  "key13": "dgghPmbiACjd1mEnXM4613JwEc6PMpuyaB6MvbPVvuGcQchC73EHXATvKtv15oyyEUtvpahCeQMQUcjvzwDhHWf",
  "key14": "5kxmJkP3idR2thTkb5EN1HS9E7JVeRrtsEonh36ufad5g8ZoFku2kZRsJekjWMagDhbJfxFQBLHpUMvSgamLhUaE",
  "key15": "XEmJMbiWSrRAmLo6W9pRRm8s6tmcDKtbKm323TYS7gnrbrHgGkuJe4rJudUrSMzcv17uEU24FMTB32LPDMienTv",
  "key16": "JbppQBKB9wuNtrsdAZXE7wDvXVSpYGPGPi2U9c13Cf8LmUrKuHfP7AKNwM5a6Z3PqGxLkFsdDzPpLDnB5xGL57Z",
  "key17": "QmoTHJ9igrhHjg8Ad2HaeFG1n82qgGAXrTLw2bZqtGgPyuRosHkVrzr2xiEwPKp1uJFWASKsMUzwTMZLavYFuh4",
  "key18": "2fU9AhngpzXQgx8DfbeJ2WWcb5WHhuBLZ6fBPufFz6tZmzU764mdffMCMCL46jNhyUx6cHpf8Tfjk9xUHV7zpvUU",
  "key19": "3E4QMZMXWy4KnFbHCivVQABsWKGTEmYAt2BS8aaahHpnTxHehboJ7aEaHfTPRRYqqTmjb2i3vZJfDqnvsesqMxyg",
  "key20": "3G1Bh5SQd7zaJYbUpUQKJYZtCowoFseirrWzBhwaf3DwuXCMKMBp81hS9SwkAFgG6VvdLNY5mVeCGao7w5RzJphH",
  "key21": "5DZBUjscodzG9G4BxkNcHywgmwcyR45RM44ucgFbLCJsFYtjLq2fXkTa9ixVfz1Ad3ryS38jCaXTJVkUF8hsMetZ",
  "key22": "Pyk2gYsnFFv5TZ7MZAxzJksLSUyrmygtskww8ZCkW1ukXWbkJjKoYsgvj3zhsZmDWgvS6vyAbWpxDsdESg1bazD",
  "key23": "4uYpGcFEoTev9oENxLb6Ej9xWxRDK75a3DDzKAmQYr4QkMgm7H2fyGYmdB4mZ8wsZLfwnHsLsvR6kAWkyJJ3WgfN",
  "key24": "5msDuW1X7MTSYSMCpmQDGZA8mkn36rUCR2pBNAFL8atR41Rdtcwjm6MTdL1ibPoEAPrWRdUcozvv1ok6uomZcZvR",
  "key25": "csfRZWcqHLhVEjRSGBFMfdWoFVCAEGUdrnKTsqYn9srvHFakjTb3UgNPNdHHaJUgrwYpHVa88s6Ha7o5qNm33Ny",
  "key26": "5fLWvDwiKofVodhaZxxxCkmPyhfFegz1Cx9WSjxbSQFFa4BNKSjkzb3StoDR6CJ87ZL1iJoaBTYpfh7D4KwcHPSb",
  "key27": "5q2KqLF67U2v3H9npa9HfH6AcwBBsVZTUyY5RdWQNMcfWWabvdBggi2zJo7one987oPFX6FHBRC9hy4e61jDR5Es",
  "key28": "2mSBuD8TX5zmNDthHEsChR4mmwFWMxiT2LXUFmRj6L8NGjhjCAJo6SPr32BGTnfKM4QhEfvDxiZoBbTvXCi27k2G",
  "key29": "44n2SmUzRyU2CvYDeSaze69K4pkfKTLha5resPbDobavsp1nxm9KmYVWowCcM69kSXAUaRfXCriCQugwDyFzEg2R",
  "key30": "566ScQaagT7JVm2ARTmZuPKzGexa5EzmNMd9bx1YrSkBF1wtDreQaGkRACShbdzoCgDsDK5gGSee4Svr9fnD9kbp",
  "key31": "5kRUicmvy4pyEEbyD6W581Eu27DGiGYVRZpAkPYu6gH5SQx93MQBc9KiCWGKrRgqKPvWkcVpwYDrQjiodKk87jk2"
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
