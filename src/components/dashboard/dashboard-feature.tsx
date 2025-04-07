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
    "5QynECdjMjkoYBnfdUYKASsYfLTsgJqn3rGYeB1pW5GZ9BSttjTXudQDgEzmd2GHKT9rQbyyHsJbZ5D6Zsnt1rZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDcjSKv44cYRoYqdapGyWoGWbH7yezJJSwS7w4yvJegnikFRrQU2krwQp9iKcXZmaMZyqRBe1UreQHPTHZYBYzB",
  "key1": "5nMMPH7D58VGwxekozEqbwW3j4zHT7rTBqyeQkpDk11x4yS2ozKxJjBy84t8cESbQwr9GPsNV9h1qyigEYoVGujF",
  "key2": "5TnvKdQXpQWoGy7cizcyexpi3MHejkegT45FxLkW72xt7TWf5HNw85zo1Yfzafu7TgmmhjVFhKpTXHDFnQW4n3d8",
  "key3": "sRzcneRCg4qyRN6KUi4xBDjuGC1RGyGUjUnHLWpRPQ5hJixpB8NZrrdWr57gCh486g78YDYf6Qov15QNfoBWmbS",
  "key4": "NmEznxgGnXVxvZcrGGfHii4ir1roVBGdWoJ1bSJAhTQbJamHV5CN5Ko9TobcD5UTV3RZRxQCHTvWz3MP6FYwuDH",
  "key5": "49tVfanaSt35xFoBEG6Dqa2kUkWrYpXSV3KweGGq4yAZBLhKvLoHsD9R4kpBaGEp8KbdvcYkG7QekHbkmwKbnjmK",
  "key6": "NwcFc7QLLymKtuhLDpQj5sqoue3k761vAnSe9EQGf1QVPAa79UNRfTPFZVSxFFSudXQ9EuXF4Jhr6r1YdyL8hU7",
  "key7": "5LM3WkohyptzJphcGvcscnKAqm348kh1TV79rcb6AJwa4xo2bEcd4bPyiUdxT46AGCHz59rQrF3GnBTknhqKtBs9",
  "key8": "2ovnEBbt77rDDvSBkAzXD8BNs5ahmTLkYk48PGeq4h8Vh55mQM5BHMMaywpKwh7TFTdhWLaVjtkcfY8zv4hdkaHh",
  "key9": "5HFkF8d1gQ1D79kjcLiS6evf8PcNW2WwrLoidU7fnJtDSL3JwGCLDyc2hjkpNfufETxJjaTRnJdtTkmJURf2rtQj",
  "key10": "5g9fbMBtHbmkHBE1oXhcRjoibVDuYz5k5xzL3Gg6CMQyMssTUiAjezMiTPHrb8EFirehio5zSXVz4XpAHU6UGTcW",
  "key11": "br3HMxJ53dJvPm1DS974GNtyfhTC35NWHn8ScS1SmBBYrM1R4Xek87n8dRybmaDxtfHbNPjB8WHxk74f4TNRhso",
  "key12": "TsRpwfdc5ou56yrYqdSbxZrUZY1CbQCCs6GftaDZHfoWupHx6WmHcVqXoEWT3u3SpW1auWiiXALxqPxXyCdoJTo",
  "key13": "4dV3L5QzEhKkuF3jt3gDQ1CtGpYXyTiFP9rfSiuQ8RzZQLqZsvP1fHZPacGNFEWVeY6p4zDw9vzNQLwweZkbzLQT",
  "key14": "2LwSY8aHehafuL6kZMtpKbqHNzmw44Qv5X82uswfWJty9TAQiMoYjfbYuojrRR1RiQtDiU5Wjr283Bk5rbgpCfC5",
  "key15": "3NJ4RvPY59jbaEwM26iNoRhkmBCZccEbrJp95TgZBHJSotxyPbUnhEuEEXh6r6AHLvnV4Lk1HbnDwpKMHQSgsNis",
  "key16": "2kqHnM2UDhcjjEMA1XdCxt6CxNnmoKCATgyKYzDY9sVpvP9ULuvMhohrDxs28fcykDHuWJhuwwhmas34pEkKBdPJ",
  "key17": "sDH1d2P8xC7y7TvehQ5ewugPkpJcviRVphvdpKBfy8xzqtmgxoK63tGki1GKmHssu84JVJsRpbe6yWe4iro9z9P",
  "key18": "3PRME1Eos2czGQmqWu85TjkHjPGEchRmhXnEVZj2aUCx4yNdcybHre8nkxzgdA4bGr1qRKe3R8xdh5zCEJt4ASVi",
  "key19": "5Ti7K1pGtMH8uLd7fzE4G2XWxWKJgg2YnEuwVG7fEoSYAvJrUkhy4UeUR3PdFzPn9vZKg7fpf1iyje129Bqy9HDV",
  "key20": "36btDNuYw46kraUBgGY1ZUREPVvbCDmjy9X9oJ7o4Kd4XfZRzX6V4DeFnDnTwGj6Lm3dQRT85h9mNi4c1MCvmk1G",
  "key21": "4FwTYtnEEwyNvCeBtpNawT6yNYmWCb8TCa3TRYAJJHq8EbAoYMGSPB9hFpLHs8W8gCmHd7acSgr6CLgAmFxYHwxN",
  "key22": "Bn2Ntt81GPehzs73ycnFLMaRdbZgjU1XiEgdBq5nKfZssFCkqTUzMcr4e6h1RaeKSAgfjpBGLXbrq63VmZwjiEm",
  "key23": "2tVoW6U5LfLPGd93VMfhbFRq7Znhj8NHUmbyxwLuMF9cPT9caKKYX8YgjvyZvBz4yXckERExN2U3QmUSZsPSAnWP",
  "key24": "9VRvFnWVEcQGpfebD8PQDAjEZW7bJZ73hRmYpTMrRbF5veqHpDhH24vkkNeYvPeuGzDAYM3Jkd31kQUahJzqjQr",
  "key25": "5Bv7pv1Tu5vj6u6XZzJfb6bYtoXo118thirBaiuy4PopNSwHp6LuUX3k4LRUJbrcpHHncsqyWjwo71Yp3nVLeyjq"
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
