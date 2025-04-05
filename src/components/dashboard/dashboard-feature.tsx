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
    "emYftREDURVVt42gCYA3uzUXgTdSYMmA7m2bhiiNwXeHXc8tit8oyKzDFgQRFGc6nwSzfnKVXLb98wqwtTU2dss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkk56ZRmLm5mGWhaFdq5eatkMUrEAPsJgF82YaL4ZmHeuaF5AK5fXDyrQ1KEtPmBiEXUwz8sduFvr9MBu7JrrzE",
  "key1": "2UHDBjnrumNzsXUybwxYHLzPcsr2jagPoW98voaqQJ8fa7oqtkWQQ74vLuRcsM8fh6jCnbBij8BCZsX4ftPUE3zr",
  "key2": "DsypYZipbNBJgzG4cmPL5PX37sQMi5AEciELY4muRxkZLGZSkbStTiMSipsg428gdAwH3rjphbMadzz9Kc3oh5g",
  "key3": "5NtnPF5TdFNa6Fc4gfZSN7tctGfPphayxJZaZN3b6yAfTHBLeX3FW73FWrn3b6VdpTqvbcwShQHiYq1Gh4sbX6tD",
  "key4": "5PzGdnu9FADHXmj61jno3iwtRAxMmsWHxihfP39Jci5quZBcWhxzZacu9EkwEu2YkL1sBztjes9FxTUZsmhfGmuh",
  "key5": "2Y3GR715zmsi5rs3sejti5RyPEFid52Dqxd1mZzRxHKjbQ43xwE5TV2WLUMtGUBRigc1L7zdxXn2As9NYU6FVVfK",
  "key6": "2J1kJPNpwiBE1vaBd6jg67Z2KqetYb1w81DuubbNqAVmP4ohgQrGWz1W37zekZUU4uf4BqQ8tpJqx9JCj8bg5BN8",
  "key7": "4mz7a5v78HXYTZSM17yQZFmw4ngphCJa2xcPLbjoEWsSNnuT9z5nahyW1Gc4xvUkLQqRyMdrQoqkLrqhZrvRvF3P",
  "key8": "3N2LoLpAT7nwKgsrrDFaF8k5mFxLdADZfe9VrF6Xhatohrm6sJtqorhy481Fyk5JvcLhLuxcPAG9JCWZMe47Wqpv",
  "key9": "2HXJDAQP7vuRUdTinopF4RDw48ebqaNKXTnuJSaCwinjYRBHaa7i8sLv42T3sd123GfD8jNGJFVum8LbmRLVUs7i",
  "key10": "4URye6Fp1eDHxWN4RzxvMEqP5JqPsfQeH9k7zjaMdvgFQV3fa8dTRE8camfXBwWBqvd8MAuFusxeRzL2ujsZ7ApX",
  "key11": "61F4dr4KKfiR9LDesm8UtMHCF18sMN8DqKD3A2udaXNtMmrzgn6nheaVHHwkZXVWGddAfxh8cSdUhN6zJpXbPAeE",
  "key12": "NNwtB7bTNbwLKofoWNxuGr9cUXaAwMmFFrKYJeTeV76ULbUPKJ1kkUGvcC7rzTmxsaRJja3vPZoZ12GM3KHNAdR",
  "key13": "J52mamNeRHHWGtp7vBcwBSQSCn8rL8oyq31QeFvRYvxrhtA5vHuz72RHpjnLV8tTuowjyFnCghgbH4BK4tRpEdH",
  "key14": "4yHsY2VcdNciYUiwh2H8xxA2wkp47cZYwB2bz7wXdPkyzvYG5uNJkoEinEfoUfaXMiRksmq7rCJ2mdNMkxKzXZC5",
  "key15": "2AabzQyFvgpf3bTREs9BhyUhEv4BwLRHFhKqbDrEfTyfTkVxgv4Bmgjvz5iVyd5PnqYm9wADVQvxpPLmLbgJnkhF",
  "key16": "2X9YA15yGZcjxEVEEpPJZSYZadoPJC3LjzHWYvks5EPfyo3cr78fYDgD9gWuy2A59kVSwok7AQnQA3ftUSt23KCj",
  "key17": "5vvjsps67ZZtn2RFjoeqKJs4C33QQjFDpPdv4dpm86a5BixhBiSnbTUqkHgn1eUpz9zE78qXYSwZQtNzaZvrcfU",
  "key18": "41j3xSLET7ycotGuYEmCY2iHoytGiamNJPMTzrEQSLC31xGbVkaapPsquRJXXu1ZgNf9GB2bnE9QzucmzD71jQqU",
  "key19": "4uHvsuvHinYMkQqQ26aEpkFN77fH36DnZyEFNV9HBovvmGfQdKd1AjTBBFffXq7RHaTWmkQQ9UFCnT4DWy97qcVe",
  "key20": "rXs7xDbV2w9A6rxqXsDg64i7JKJyEs4Ej54WJz1y5kuwRViuEVcA5RTx4s9hLq5mWxwop4f9bdP3pAqUYhDMbvs",
  "key21": "4cRNwdodH24m6z9NgUFS1uP7hnC9fvJbMG1VtcVXVR9hd9AxMXiyVtw5zpmsfz9LajYQkSRG4AJq2AgBG4FNL5Ts",
  "key22": "3cXQgacdU2rQeh7GRYeSyb3DsXzWeDXDEskfCxREPopiM9eJwgQBNfNc8smMWvXQxBAi5sULwCR7VabKSEwfB4Eq",
  "key23": "28V6MUg4JKyaESJ1VNic13tNKyNo5a3okAQgWt56Bje6ognLjwW24TN44ACRzvFv2E6Vib8TiRjttdMiGPkTuVQT",
  "key24": "mAj78x941QHp52GrtjQ6VtXdJ7DjjohNzUbtWk7T6CwKF42E5yYQn8VdjWopBnUxMRMifi9o4J2eAkA8V6jxEAL",
  "key25": "aq5KEhoopgcf3rHQS6GrAABoJ7GPxMohxTApPT86E5UHMFx41XWmR1HA3HqvedrNrdsw1rmp5t6GZSTzvLeSfXB"
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
