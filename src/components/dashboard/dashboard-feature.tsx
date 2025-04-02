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
    "3g6mZgb1b71zZf6K6x9JA99gZCaswKUPzTShqx5bszME39o9NPNCn4kQb7Xxkc7eQt6gyHXzyQoserGWjSBJh8VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48demvfxhmGxkU6gvgheVMKT5bcWfsg6y5TtHTVkEDAYuFbWPUhfNpoh4qrXagqf18waSUM2z2RpxvNz8ojrVLYw",
  "key1": "3XhYcFhnHfVRiP65p4FWKjsDBRLEVyfZxMbuv85aVES9o9nQ9FzTQpGZV7cZivE8rqCcU9MRKukWgaSGw1udiCZD",
  "key2": "2EYmpWW36tQWRYoRJZnfBTnnstrM3SPrgbTvV7mt1XxHomXsnAujDHH5LCMfngrKoV93McsegzqdUdcihXcnbQtp",
  "key3": "t6yWToeVgNhQyGGUrr6A17ytjuZZVCKxa27iAdn4C2Ggb3VrcfrStkim3udM8smX46BGModfRfb2hEjcCaRzXeC",
  "key4": "2nP2sfwwrDuonciuC2N9AXZqD1zvSUPEkNJWn7iwXEzkSLi7yJ1nQKm8V3UtpMn34xvGhWDGg69pddACU5uVmMQR",
  "key5": "2NnrUmZQY8H582K8Cj9MPd3SAbm7vjS7PTpYiXuHSgDfheUZizMGpxKNCMn9FUqgkSUVRgDNNktYLd6B8tp4ZHx7",
  "key6": "bWkHJSjhHDpjQEZhg4UTinB6ekwgmnMBGMr7FuayhVK3UNQUQLMUGgW8U9C92kVTRPfeHMRH1shbgRusBere2mu",
  "key7": "2uRpzaUvKBPEZjERyR4QEgXoxJMMwZBVeKj4WC4zMWhnZWE1fQu755nt63bhFa9HqmLAqZEHYTAMZD34Czy23xh2",
  "key8": "2qgnfqqTLcAYNrvRpNt6Przo37D3hUxGu8LWH8Xr5Zp7HVRgRBUZdmyNn2U2nxfz3CiWvwsQnzegPcRsn3Nn5gLc",
  "key9": "2QmTcvEn6Wumrxv7wfWU3kvvmQ4nQEuYocGgruffY6Uc3gR64yyRchiARddhARvqPWHK4f2zCu4M6rfbhdPvbAFJ",
  "key10": "5DTd2Znp3rpo3LFCCXmxfgiarbpMcv91qLi8bwbj4GCwetNpMTNUCSNUDWEKp99eJL7G8mngo3tx1TocmTj5ZEhB",
  "key11": "5TiAsvSAEX5ohQfifTofDR8yLQqn8ZULJhj1cvA5SvVFXHLKiFHCV17NYNDJv3X4ooKfxQ4jiJE4FT6otwYeTGnZ",
  "key12": "CZtQMiSmwWGn7zg2dCpdg9jZePDPYpHBFan6v4DMTndgsEfZx7eWjN8yePoAqazuz11ijW36wqKpzREZzioxGQr",
  "key13": "PaL33SsZL6523gUoGpdgSE1AnkzC3nR26eU9nxzZGzQ9zAhSW7jFPuKiYFpaHutBPSyNWCDz5MTRK4bgG8oY4Jm",
  "key14": "3ZmH7jN1yA4mLCyVB7PwnFRYdFCuUovt2z1A4y9ZRddkUt6sVqHaYjC941UwDZoiVpEiMbZzuEo8Fm7YfD13mbqg",
  "key15": "3boEemSEVhmBEiy6yveev7K6GsXaVbWRyG3wpr17YCGaVWcM7xroBwHVvokaHrDTgtCPqqgS7T4EB5bZgznhVjeu",
  "key16": "Epzixc4oHMnoa4x5BSPTbYr3yYagScXjdVAFRFe5ZxRthj2uF6sT9iAHXqZkQL4a9KCzAwE7beAHUU3iDwhrMHG",
  "key17": "MaweUf9qJGydTtTyV29hUcYo7Je2GGtkaxgoHWJYyqde6NiivTC57vciLKmov7ELZb2C9xLvuYLnvkfZpuynVno",
  "key18": "4sLsAopwFAAbeMFTpbwLJWW4B6y1uYy2KDH63q7YRZffSQJhehgBgQhYxAU9JjEpbGJFem2fseqvvp4F4AiPrdrs",
  "key19": "5ttsguoY6VWMPhSVSmLkL95KzKyNAg4dA2M8WgkM13KPkxXiraSTsMV17MiaGwZxZnJy18Qv8r7PMCLMUa29775C",
  "key20": "3fDirYExDfWerA4AyR3yaGYLvib922MGZq2C85Ng8bD7hcfhm4Jij1Bk5erwprZ1Aqz6dwxAG22YHvXQvjw3pDm",
  "key21": "MT6uA5qj12h9kCnfAMhjumxfmHEHfzLaPwoFC1KJ2Q4mpcfvzPGWg9oEfRD5ry9iJgy9JRvBYkn6opPDSY8ancv",
  "key22": "4gUoich7fx3xbu9neBVeSL5Hu3u5aQsSdeAzEViCfnvqgmSReAeW6ov6xR3XWggyt9kbLMfTaUETCcRs1b29YM1C",
  "key23": "Kg6wMKKMVAHuRu2JMigmrnRHcVC2YaxdJkapNXFpYUi2mPRupAfhvzHGG7nWkWhhMuhr9GbFqHAbLrMTu5uN1m4",
  "key24": "SUSSpAYaK6z3J9c8hoxasN31H9o7MQrvLUb4qw5nWUu9i9dfjFg2xaZJnBQoMxDXscPhL6u9pwD6AmsKqBu45FH",
  "key25": "54FcsAhiB8vZiZnAJ9HyA8Y496XB3YsLmepWRNn2nDFNmPfFJvrCEiCvhpz8WgTcCi6QiahTkxWPYgCgaQPYoD5V",
  "key26": "3c3m8NiaSALdaeeS5Z6WrxE7b2CAETConegnkKjKvZuUAMUAMb82B3mejSZiPrkqT1tS1qCr8ep8sgp89SvkFpwj",
  "key27": "2PoXYvhbZokR6paHX3WhP82YfA6TN19LkFjKEg2vAz1qsS5FfJJyMdoJjUkZQ3MCg6gQTEqFEVH381iTaZLcGhuc",
  "key28": "4fyXza7p1A3vnZypdBUHhKoHWERP6VzLpEqoC9hJMr2cVk93yqJ1ZNqn1S1QSZEwji5gjKBAPkhHPbsCAPoxj7H4",
  "key29": "636vH96Lm8gWTVH7r72N8vi2R4FdtcDrUr558iHXXY53i2akzrqVmisoKT97y2ZrL4KWpYfk9RMtHAiBRauoQJwG",
  "key30": "213818CbaTzU4FMbNfBVwuw8U7ckDW42r94Y9furks2SkdVUAV4uroaaMxpN1Z5KLw3kduDr2KvWbazuWnkdxGJs"
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
