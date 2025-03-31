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
    "43kC7mdy8BoKsD9YThzYvvAvm7XYT3iEjzWhupeocs3rwVdpBFauDTFaJiyVYcNSezjf7HaCfvPNQB6PocmRvKft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mofds5YtuE1bpHkWTzVNUzVvdB9WtYABAVjiCpsFu1EK2Q3a9TGbT4tV3Ri6aamQJRgy2ao1JdoYhgAS6rL2nWd",
  "key1": "5S8RqzaHMJ3ikAUNWUrS2vFiLfm4CaNK3Tz1oGJCGFJMMaHvWfbKv99rWWGaHMCCk75ZwvDFcsh6zswbHriXHtWo",
  "key2": "2Gwispe1F4YiJLGHeYxszvhhosSo16of3AKn9R9RgoqMqTUJ42SygHUtvEf3giWNgJj2AbyPGSdDDuhGR9ioR6yC",
  "key3": "4UthARccSkY8fHDQYMYXSiLrPFe3j6pHUJbhYqKqEyr8P8LAg5LFZQ6GXdjd8rmioZE48RmhM6ca6vcoJVZeSuBC",
  "key4": "345rrivYWDDNnwUTchCkeBTSWGqFwpRzQ7JWbaDYqV4dL4sbV8iJF2iSZjJVDx1KpnaNw2fJEDNU9XFfWoHr7JnK",
  "key5": "5KadnzKcWhkFGE8oKS6jaHNjtBknFUfnMTGcnb9GE9ZhjaSnPZ7AaRwaytgcSMyPJzAEszp7Ji3RhTKjckrar4MR",
  "key6": "4r22opoyFXzTNYkCYNvvs1EjyrbNXnCWd4WY1ytqXaftsped9BQJcJZpGCgxe7vii5S9bHfyYtQXsnxLtw7BYYdL",
  "key7": "4wUcufMNTaSaTDCwWJVVykw1vrFm7SuEHQ8aNtoatGQp3XArZsSzLYbjm9oNwWgUZUMsrogqMo7FSTmZ4zBLuVWr",
  "key8": "5CqBzEBN8XjzFRFJiRF9vCp1REAwDVXQJshG2FGGssbiJgUvv5eTDxbk8s2fCDRgF2183ADMqTZKuHCp7simBgGS",
  "key9": "4coL5P5qBrBexrUefAXvf3TRfj4onpi7nke7q6i6wrJ1f96bp5usaNSBbdGFcNXwPNoy9E5QkZ69GX4hVPFSLEHV",
  "key10": "5HcVkt8yVvb2DopM2dJjyMDZ8bX2Pz7DjjC1dT4acNeuAtgj4kWbsz9napP3er8Sa9m4ym5JhLHi5Em1KogYuWpG",
  "key11": "3so8MBNwtNQW4aCGLyhA1Nc6GJMmoxn7nH5N8HF5ALzQrJQfX4xbfKhAqY5598nz6adi9xpa9tbqxHgodHgNNC8E",
  "key12": "4LGR577SAWBnkjY9zHTJGVKNmRSbGv2BkzTb7zQxUcaWRjcAsPEX61ZTV2vsymayoYDjejsHouZc5pzfmbTCepLS",
  "key13": "2pevPxbbQrth7ri9i3yQDQ3YLsycY8XUWQYYT3CH7BZnGVpoo6xNhXYqREMFavazJRAS1agGaWE9oZK9f1A8zwP8",
  "key14": "3okEKmm69TaRNfqKn8qgjhtpit1TsHt7GKRA3LRthAfWF7fzSmgWqUyyQepYEMFr4P5q8ZQtcRkj4GWhynKDRTS4",
  "key15": "2ZB74jVXBrMxoFNL5pcJSq8x9Dn5c2AKkHZMTKJSoDZ3xekoUNY5NQA48nvBKSiCHondgxC2dqqiHQ5zyPym88FR",
  "key16": "2GzU6r5V6Zw4KZqTVmbj6PTU53XugaNqbVyDKZRHUBjnrDNSjS3LHuqr7XCGQGjowK8qmUmc7ks5fAdEnNoeNsEG",
  "key17": "3taJo9kJnSYygkLVD7UZkWLWbBX6fqDDeJBDBNikGmyG7JHMeGQkoMLkkLBtBioHBoCNLDnm7mkeFNFmXAfUYRmy",
  "key18": "5LuFMi8ftbxHnvMWByHnher6ruCDE8cmtyN2w9QPrHAu3HSixEdkSjwYVYZ9LMWjawKE3WAEhgbB793344hJubyG",
  "key19": "B5dJAYRMbghtRqKjDsyB1ihmPyDtXA9f7A5zrRtoM74Huraf75AaFCGfvMZnMjM2t8y4UfodHkqHf8USaAKhVAP",
  "key20": "2wLd1b5MDrvjHaEXWdy8Retk1FH7w1Cwciwa489KGbK25SZq9aZmtKq33CUeden2XBBpx5pNv2MRigjunQYbcNNb",
  "key21": "5W82RB2UGmdsa7bHAzNxKg4tiPS44EC51UwMPdVFfUr3py1Cg7LHKePbbh9bfqkpZiad2Yeaxg2nZimcbJutjpLg",
  "key22": "62nRE9qk9eKP5gf72yqTk5WnwMQ9PQL4AaffWsx25Q3WYpAf9NUygrFraeBRaCaVpfApwUG8oneKP73YMdtEzvvH",
  "key23": "mGYCyrD9Ci68CCWfqMUzumU1deFzCLeKogKrzNUMdgAACryWCz2HrCQWCNDiHLbH3g8Xm21NNYYPV81hTdqDV8U",
  "key24": "5Fr2xXqSEM5L9itZvWFoqP15VcyoPiKFj9Jy9g7J4KFwZbiLSRgFKgZngApTzSDVevrccvK2Hb42VWkmEhhDgeSM",
  "key25": "4Urwy9Fw53he7VD8QeTQj7zmVs3cir9kYqeSio5vYA2e8Go4j85RL9vAvRvS95JHGNxyS8MuR5Ag5Gd3HSxW8Tty",
  "key26": "5CfWU8xHHGGme4eYMNdsCsziA3fmN3cA5r6sy1Yf6R29QhUngrcPx69nVYfAMzsd9e8sRaU7MLf68JwQxXGetKGi",
  "key27": "4dXToKTbBdwBJr7WvcxHNzezXj7VHQk1YfasozuMc69TuCsTGFGQ3eHq6rGk8n5vCCfKwVvbRc1gHYhbMQYEVE3v",
  "key28": "3ypaYvFcRbKuEeHhH8WwQpZ4oNdvxsR5xSmEpsd5noKBEYkgWESr1qQ6vUoptBRW8KKBDtVbvEZzGMDnTb7tCwHh"
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
