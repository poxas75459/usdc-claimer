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
    "3i6jqURnJrVTrVHbsD4wDXYAvrfsZdU1kSS71KDoPmZEREnpPAVswMdh8q5GSv3R687GvfxG1h716TAYf4sK6Lsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrEtGT3nuVreJpdycJrATM7cWzhBcNcDbxJcu54EmhjWQ1rcTqcExJLGAqWkYaUuExe7DVDR7eqYeYB4mpQfoga",
  "key1": "2Qpmt2SBjaEVoRoiYjpdZry3sbq4GbTWBjcoSmVM7VTK3rfsvNN4YisngjA9Ct2Sd8hSYdyYt1enPSDWZS9MqRFG",
  "key2": "5Cq3awAsFMSRqxCzuXDznE4E5bNucsGpx1dwLJaErpsmikLcgS5ijCPHjhHtj4X8ViokFQLpEKhaSHKNGr6RNGqY",
  "key3": "65F7iFyz1WuxSDZrJar7fBqYpG8mVD8Z9VveGBxiUGPzYGdLEDkXFMxd3woS8URqUoJffhg1acwZDoD5aL2Vj9Fi",
  "key4": "4J5XRjB1eNefFW9bw5THqWNXFMLL1QEYZSkaGMbp2vZhzaboRuCkzhiNfTknc8Cz53CyksPiywtLi1ZQxZBVuCR7",
  "key5": "3cMTj14xaZNt62Q5D2xPo6pzVMLZCqdhdzMwhooPbsbk5imcy4c3JMWBQUHxat61qodqhDfEDpmuG6LUA647hrqp",
  "key6": "2RG8REgo4PXvr6T1VD4w9VoBCZw8yy4qzZsBizaYQFffiSBPhei3KPJ7XDzKjqzo1Uh2wTR621oPx8SvtuofspgQ",
  "key7": "395M85KzaJW8r6cH3BRk7SD6i3WGLZDVphBjLYFpkVi98xn7MuCQKA7r9BKN2w6JtNAZ3B9apNdxoes9BZBpBP53",
  "key8": "5nzP4qscGfmqWJnhJCqeNzYhSBHda2JApyC6EmnoWt1xXov7jiPX5tx4nbyKN6NBDeC7QMQf6g3n9cPr1YoP4skT",
  "key9": "4cf8tNm4ChsLKkKkH8eSvUQCLcoeHhx7xsMSPsRiQJGebk3sMV8h6CeujBbmx3HA7i24NQDfmqqzoLeZobLS6rVw",
  "key10": "qUAc49nrE9JGcajENEsSdQLHwC9Uc39AWS7H4ySBNdXLmhBRNqqk9uUSaZVSW5gcFwCwJa8wGS3mKpH7RwVGiuf",
  "key11": "bE64ArAAbc4oQ3pye9ambmaz2fPLbn8b5UDsKkvBj6sFD4T1MYdU5fb5fwxJkD7wtyNL7BA3HK9CeEkNhnisD45",
  "key12": "2jSDGhKaDeF8yGNKUdbtXn2CukEyS1MJhnpNjQWjNScWsVoDkGdPARqiyVPrz3tLb6zkX3PU6Ha3mQVcA8bdi6hE",
  "key13": "4XKjhqmfdDduxg4XHDetqPWzBKU9GjuhkV6Z1J655SMJxn6kKy4AXvKzAqehfSiinFbKqjXEvZD85tbZaxdFzKL1",
  "key14": "3pxswdVET3AQ34aohDEB4cmMXfcELtbsEdsg6AHxGDcc3x796oLqEw1NYEisCEZnL6rfCpETqJkYozq6mKGVV3Lb",
  "key15": "57Rc4oxmPGk5eW8oTy5CuRxGJ1TgCe25GpkDGHoaQH8AuLyzM4cpPfkT682WQN4MFqr3XXutd49c6dm2vX43nqLb",
  "key16": "62gF7JPzcA4sMAdRp962hXf9pC4vEVqmunfsQSA9fpBgPvWs9uWghkcVSryBVMzWkavjVJBTFeBmrFWRaTyqMa7t",
  "key17": "5hJWgrCeRo9JLa1MTQwhjNWwi15NvtyNtzn3a3GRcDKsNCHs4YkyxmzxJ6TBxWx5TxJ6yD2goARueKmsjwUWj62a",
  "key18": "5SijGPPYs9mvMDmxv1M9TbPyzXrALSpPK9SCrtUEo4V9GnceJEd4oVafgdEZgG1gcLbwzCPwcQ2Yt5mcuKSnvezJ",
  "key19": "2iDpTHarVe2RBGhTxyADXw6rp7EbBgCsJxdYrg8BRizKbqPYtCJapyi9SCv6zBt2aYqY1XhMHvbbUuhCzL4m3j2c",
  "key20": "7yvz2oLna923z6TKhtrpRzrGFKTZFEt2r3JAJoahkBBfNZD3EegqeSu5cHeamfQaS7nQrg5Xc5ZN9zPPhCqBbkV",
  "key21": "5qEwLBPq1QrxKQ2ShR8PURSdSwW1ttL2ZrKXrGUGRkHoS9bJQMtZ6eFhMVG5pbN3wKg2Bq6zPDnxVm1fgBbDLL43",
  "key22": "4RVU98XZ9QoJaWH26NFwU9h9atjBMKyUoaRCwgWSCuNHowC8SG4ZEK6irz1mU27mGXHSk91vAo9nHceFAfWqvXgX",
  "key23": "3hLbJepxUycjDLsQdfmLEzniW3r5F4KujWw6tQiQe7pZ38DFC3NB7m4reDWSmfiaHRsDtTm4vXV3aWTmoNb6VgA9",
  "key24": "2VwMoSbyK57uBrYM5xs4XfD2AY1MPDhyY6TxvwJQgAEkynz6tsQy6GG8hW5BRF7WcAfb5zaVEpNhrwNBbCvb6PKD",
  "key25": "27yQWTXCU4xxAtQ6ZowtKrR81frzbkZqwhDqaKt1jxWkBZdo9tguHzJf9yPhtEcScEzyae31stMkxP8P9qbpbpyb",
  "key26": "32igyoMqYTZNsYWVZGSCfciq4RbymNMEnq9cy9WGRBRcfy7dPLNwVqZWMGP1q9YeQd2rTD3ERXZ2g28Gcq9j2ZQY",
  "key27": "HUGSukLUTiAVk3i9QbupoG2t35KbsSJiQntF9edvdtiga8xe2zKL5tMwJu6Gui26SiibL2PVHzGiutJvz6WEDcU",
  "key28": "4sxz2YcGdRV7xG6SMiA58sFAW2tiNGBr3SoFv8JjRAbKDNLNT7cMpFDXdx4A2QG5X6rthTQZ2vRgEqgtRqS9fn6Y",
  "key29": "4NPjmCqpeiqSwAcd3Qi2QayWkmnUorxToYkvBuMjdDtzvrLxAwzan1G9Dq7Lr2thz2vJePGu3kVjHrSUwd5EQkdD",
  "key30": "XG377HYAQA1TtJhNMV4FayQVnEkAUvXMqpMCzS43UHi1bkSGj48BdHvDBux3ohjGBQaCjtPy7bs6jFNvpdtf7w2",
  "key31": "4bb8F8LmEr1R85LG5SYBeh3MNk7VrS4v5nNFPBDADpa7mRNPsMAPcPC8Q7hzZD3rhFSToCNytVNuJ5sJzfaDMBJ5",
  "key32": "3E62pdLZekrGxxmjEwApabmjGgK7huGh6ENNLKdm292637p9y9b8VnCkyEB1VapKpRi3mjLi8jmb2WuqQAiB9Wh9"
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
