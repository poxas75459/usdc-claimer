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
    "3PpFT6G9J5MX8UUUKKjjKpqfmcM8GtanY3tWEmzFxfxoYtQqR6aGykmd2CAMPttP58BwDmTfhkW1qwM8jJp2ePsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WpjjUXD6Vx1ipS8Cz7Rdoc3Z3N4XYzv17Aw3cJwz8dHXaZATnqPo8doHP34u7ytgsFWENNgAxyuX6SGCTKXzy2C",
  "key1": "5BjZyZv4f9vfzaGhzqe7kpTPyES7ZemLZekeRSNVceavxucorL8WhLyE3L7isVFCrEA9XN7vTAeyYEEDQSz94kbh",
  "key2": "mPQ7DUvp2c3SvSVkatu4Aw71ig3mRAMxtwam89zFLUDN9i7yw1rQpFaZ2rxXXma7gbBqxY3d1YDoM3zsgAUj49a",
  "key3": "9Yiy3XdqgFsCw6SRaLcqHGvLBDChrqVoAMv8HyjGgnhybW1scSEpxeroBjsmB5tFTYTqb6MifBTxxfphRwywpAV",
  "key4": "YojobigvCYGy1hPRziS1mUeadYDc8rj8VxJPKBS465My5tJGREDKyR74o3csjTiqqvtqu4ieFBc4muNrWz3waCi",
  "key5": "5fxpWSf8EvVxWPhkznA9MEXL4BqcNQuR653kwNtxvkZVwunmFYbaTF49XJHC43vunW7TGHFQSB5hzfbgKtqvJwQa",
  "key6": "669Js2SEQdijuiaUhK8Sty8o2tYeBdHxvaPKM9fkNUzzKMXJMwnLbo7sFfBPhbPk4bh2VeuYu3EwEGDy3RrUT5WA",
  "key7": "2ynHPzQL3GQ439JyNcy1Qx5yAXdct1RS52fM9nBeBkmP61GzM5zaDBgZY9bixswZLAGS4sAaQqbFCV6Z9pMYanku",
  "key8": "5n6i5MW38AFRqm9G1GCgUKNbJHYjkFyAvEweq6uroodtvQAGrFMMDu5bH7AGL1YG2bweCqQL4m7cmzfj4vtGh9eV",
  "key9": "4Na8LXNg6hKPP1Ne38KHtEP9Qb1vHUBmos2rkjC5jpuhqq5tgUAEEBc4V3qD2JhAZjJg5EGTbVSgV6fqYhjGMjRG",
  "key10": "WkiiqCxrfPFtgve9FxRkcY6Vgg4Na17rZaRzoqwZ6Bs5iTYZceCZ8o5TzQpfyGMoMSt3CXzom7s5eEVLU6ApyGG",
  "key11": "HWMVKuw5osxrgHgCEeo6iKg1iMUGFGep8ckkcJdXxsSsnWXV6w4rrEGWdoKcN1ypGHezU3sznD27aU2hzckaNXQ",
  "key12": "42pKEi5Ec8vTR7RsJnRYLa8oyaRH3geAWXer7xQPYSpjDsqdakRpTryVsjpSDWo6Eka3hTbjhQ8AnWnpz4RYK91d",
  "key13": "5ECARMA2ARFdDfdGjpcHUwDisYpggZCBWGVdWZ9CsuUhsu3rqMuJGQRdwv3d5atVqZbrvdgE29UYFxHDCvi2xw2a",
  "key14": "29sGJDJyTWdmsahfSfA1WJy7S8VEY2RssbaqtSv42K42mddYvzg4xzYSNZV3B7c9rzPK2Sq6P7GphKi9SKqvz3Nr",
  "key15": "48r3H3HE5jg7FidzonxkcJih8rqxPw2geWY7fbGthxezYdUCC2aMMRB86pAkSVgqbyhJHFLtoJJzWrN8cRxJEa6e",
  "key16": "24SMoHBvfQYmFjxicA9WrMqnjZrkNyCq1oVMRUusVQpHMKEV9ToddLnEPnb7zEq3KcMDWKbxWFhQqrouk2FAtW8s",
  "key17": "2U9Xc9qLB8oyTkTZ2pBLq1TYkCpPHeVB5enExWdFniJ7djGxaKupbu8bwwScNdy5uaw9spLSNQzPEDDwgMLPJpeu",
  "key18": "2jMQr1sWws3RfVH2BPHHaJN7sh4zWyD9h6tmgwy1k27C8SU3Ttt9yKpE2cy9Nz4UU1rXYV14i6qXKQbTSy3M9Fiu",
  "key19": "2Pb53raFkFADNuNsJxMGThZmFkgC5oXcqYT2B4e9RriP6KyG3iK6rWQYq4Z8zoNd8vw6LwZCtSa29efbeQGJHKWY",
  "key20": "3yvxTXH66aG1WRtPnkZvGqn2Zou8ZZQNZy63Dzu7dA2UenjVDBTABw4U91WQrnGXFydCeUrD1SRRzNT7X3bCDZ6k",
  "key21": "2vsdNh5YfU7fTpdKDH4kXpyon6uMcUCz6tQbCftpASw3qFQNHix8YVqQpSrRKDRVxchfBA33Bby1DdLFQuCuvjpa",
  "key22": "4x8f6LymLzVP7fcB3HZbnb6UVo9Eu9i73TSd5QLjZnVVMUhEAvEt9KyfEyhNPmPRQfTMMPiZ97eyvYZnGgNg3mdy",
  "key23": "3wTfvxL6eHKRAe5dVb6KgDakmLDSG2oGcCn3MdMMirmxfQ4intG7H5Z5xZpawSpu7TBJVBgRZudXwAdETxL58sJW",
  "key24": "5bq41xcunUg3AFR4udQ4FgBQVFEsRka62eRj6rx7f6XtMCch5EUvuiUEWcYkHqP1xLqxLxa3FchuhYVKjohGrrBa",
  "key25": "5kKt113XxaLcYtaBKxCtWoKpZYpMuaELbNAXFgWBgmHMqkqsUABoa799EtLqTfyLa7Fur8Nj2H882Geh2og7cu2j",
  "key26": "61LbLVPnAndAWXz73GirewtDtNZ9UA1hMEdQWpJYjEzYp8W4LwKSUTe5gHA5DQoDi3KW4WUC22WXnEmG4dKZ9NDv",
  "key27": "mY5k4fvKPGqwN9Hdc79x6cCBAj3nGrUk32Z19oo1p4f7doTHpH2AzDAvTPxLUCDJR4uQJYAvgMQyzqrM4feqTbk",
  "key28": "2nktGn9L4ZVcvC97ZQjnac5KbAuJUJspDfiLpsrjHbmLRwzYDCVkcKwkMk6yNBaHUzFgk24E1yT8rT17k7LBEko3"
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
