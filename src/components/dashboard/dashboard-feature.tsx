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
    "2wv4WBFevdjLmeLKBAndVQfxZ4kbj3QNzHhi8sFSCWK1ZBSnkDeVWTDcGocDYAHxAUUZTBfbrMjTMLtsiqc65Qa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bqsJEyBtrVpEfb4kLaxTXSPE7QroT4EXDDuH844eDcCaDpKc6xDsSF6eQZ1kSJ3HDYF93pVtuiSjGL2ZUgZwexn",
  "key1": "qytgXAf6tiDyEiH1UxEUbL8SD6PuH29Gd32PfPaMEV4WfGSy5cfWbBqPxymbKu5U4MwnQWs1DYMuACzwzcvg5SC",
  "key2": "3Af4kQLAyVjmHyFFeCMZ3gfmWbKEab3jYjSN7mqdH7gmXAitjMxm2fVjm29hK8vesPVBzACSuK3qDVv7jg392Wqd",
  "key3": "5TPnG2cLVz36nKaYeG34dJNcAamkDarSbZkWf9beYmwmQvWABtnGVQxCUdEtWXFaK8o9DMY4wkjFU3qkVkbuL8yL",
  "key4": "3m2LewBKhounGRF5FShTemLsB6xTx14WCZ6oj2Jk6ZPe3bDUZD9qB7LjxV8G35TqjRBMqXHk9VnaQqHLrFsDnbTH",
  "key5": "R7Eb2RjFUZRgcusbxNpHr2KRzSj9DgL3XprN52Vu42pJSVMk9uSnM6paN8r9FGEr2mkej96TjZh3YW7AUkHejod",
  "key6": "4icLZPHprkR9j3x9QifnG1v47qTYoKPfhk5nX96cbk2gz9rSfbPc5pcwhaAb8JVXWHXFp6YhpPMD7h8TXECFbRcu",
  "key7": "2qnbukJ6xQTE4AdKm7U8ZJc6r2P54tVPA7BwJcLotMjYV5pExVDfMEFXSmRT1bZK9o2Xq2J7pFr2aJpD6jctcrr6",
  "key8": "5nGPfvMQccRL7nwfb7hZTP7dtevWUcgir3k45NQF7aqrkhpV9snvWEMZVdoC7gLGhaipu5mS9i3hLk3bcQKLEhj2",
  "key9": "3Dnq1WmVksphqAHqamkfESN374ABA5cUTzvhLX6NpdQSCrH55g8eXrg7RJcR3FN9RS84syALNGURpdkqAZm1J55H",
  "key10": "2jrrzAVKnvJP5td3gmAcptQnWXacrGVL3hxJZyW4g5cjrUudbPEzyjEWQ72LjaVjLSNdY3DNjRFeW4YUGh5pyE6b",
  "key11": "5azk5GSX2kx9B6Kx9goVrxo8JUC5TAb2jAkpXoDdjz3ih6fitunuuwnmZfy2mfu9srSwmmR1mDh3cSbpvSf4da45",
  "key12": "3k7GHAuq6JcHfnHDpTbYBynFAysR3AcPmBA2sKih7he7zcibeUMUsH2iEJzCwiUP7Hp3ChSwsyHWVi4Sirnutfx3",
  "key13": "5ekbepnbTejBLP2vTwnbMq1W2AkiQK9Lwhd6VGEbZes3NeRc7uehq3cpdDHFrhpHfmW7eqVuHh2MjB22fKUdmTHa",
  "key14": "2MTfk6yK3eqxoiEfbByjWf4wzKBWTzjNxfKbe5ufxDpizCTFf8f9CjUokL66ex9HzJhVCApP6Fvki1P3HoBcc8rJ",
  "key15": "2PtRrs2f3vpZ2Lw1jaa5TVQMYxt1rtiwSY5yyoBg1yWepz9D4YBuArBJtEyGHymGyyPAEDmAMhPkrpqS88UiSNDZ",
  "key16": "2iYYj7heik2E9GZWGg9p5BWbVyk1cmS776LQR91XHLWuk9PDEpP8Jvr22kCGUuuM7jNT7rEipJv9Pmy3Tv3mRXUi",
  "key17": "3w6vd62JNWUtgZhEbw62DkxWfJq148BWhDq3ZtjHYHp8EnYT92gDzaiLmiNQJbwTAh4ezk2mfi3pFWUhZkiXKujh",
  "key18": "3LDi9Sz9KA8brQ64CJY5WQ3AcZp5bvdD28guYpkecYaQXsZ9BZge6Nz6BXmEx5isB73qZnFsYttxoL332nK9Qa4V",
  "key19": "2BNUfUeEZAqcUAFXPU9jXEXgfJgdLRKnHA7N13ME9zAsharyXiHRXtaFzYT7smjZ3EvU21nT6if9LhGpWji1G8m2",
  "key20": "3jbQWbbcq8peshEgMCSUBxm8hfj7AHA81UZreouSGAEeCK9JWDhNn4rgD5t86Lx2oo9eRedt1p1FrEfxsL3rRRX",
  "key21": "5Gg7gCKEm2LpgNdRnXtS4p2NrCpv9Rufwarci6LbeSPa3MtDkpVP2VKfeRjmKvYzjuVoe8CScSxiVCa5iM7jm5a1",
  "key22": "5TzyxLNoL3XZCjKW8HFQ6yj5zVft5nU146KfNtH4tChVkhFThtCXhuquTdpNScPeeLbbqBSTyMvtuW12dHHy1Dba",
  "key23": "2eS5oqhaiFJGy7BsQTtgsvyQAjfRARSkSCZbW5ShLmFdXmBRHpKz5Twv3Zx8jcE7wcKuWNprVKv9PNKQhMFuwZno",
  "key24": "4FTPWsDwctrr5cjWcbsYqRo8fuyZ2t5Ryrf21ddgzmf6mu4g7Ns3mzwHkzDNuMpR3y5AUeEqUQu9aDPqVuxbuk4A"
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
