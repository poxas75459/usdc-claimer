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
    "4kggbUaqshjFSVrHgs7yjHuku423wyhkfE5wQmYsWyGfGZwVYrkzBNvPrRcEphXdd2TNjoGTq9AEpguVZNP7Y8Si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V7XKorKYtQn4TSkoPML8Hwu9EN1cEkJpsfsVLy96BfozmCzx2uaqnC3WntivgvqwuP7Bz62CPd2CRqNnLKJpoWN",
  "key1": "4YHgL3oUdgnaM4kPg3YF5HsQRh33WEa4p2ZSAuQXJEkbqymosck5xoy6dHyPwNKyZZ7hAJMQtwq9v9WtyQJSYmPm",
  "key2": "5jeutZZyZ6DmWh53QYLcenGBGZuwF8mt9RpX2DbzJx8eM7YY4hDFb8LSBeNV9TiFo4C9dU3tHGCguZqVuDjHErwA",
  "key3": "2pbs8XdBdppDH4LBJAipyn4bTjjKLTVVu4zuUJ2bHhXauVaZxdpunMUq7LJ9sbMqWaxSLHZ1BHKKsUmZ5gJJxHxb",
  "key4": "2Yw3mTno9sbrVfVVjcC1njdN5gETymsfWxMN86ApFaDhJ22eRfussLxZKtYBURqZh6xaM3mGxTtFvSdTZk2ywLQ6",
  "key5": "fRSDcFbRxvHTdeuAGqNiFU93RVbZkuHYKqAiX4412yDqCnCR6V6TejK8Mmks3qoQcJvXomTETVJzazd4fLMEaJt",
  "key6": "5sZ3kaNEewsdBtjvA3itBfDh9xwEJzY6tB3awKuH78WcSpqXRGnp4c1HUEFXx8bNCmQLXeeNFE5fCc52SyniZyDB",
  "key7": "42zBZhHhk7jbWAZtmY75dyCKRdow9LvKPZUwYCYxtNAvfFMTp3bXRV7UEURdLYdpcEgS9S2Fb8g5TC5hG1RrL3ti",
  "key8": "4BEs12YfMkWKzF91RB92YQBaBTbhj1ZnvHPrmugrcu9L23J2NZJSGsVfe6dL5UDrDfGvqowqjL3KuHEzKfkwrJ5K",
  "key9": "2Sze12V8s2xuAnjx5qEVN4vn8nXH2XDpMntoqypityR7zmjTRdZCgTm1ozgySgcLmUzT1WQdnbs3NpjW2dj7jKoj",
  "key10": "5cSaiHKrVTZWzrghyj3KysGvsBKr38dkDHkuXXpbJNUT11eaUgC5mjwNgZrA7VazXXmvQdroUaLhyrgkghiY5obW",
  "key11": "3SSBWBEjATt6APzoKm8b44Sq5bxB4NQadMaPmbkeSbZe3EcFSNUwiibarFyQZGreaQZWWDuw4Ufgwr6e6qjRUaRM",
  "key12": "uBpqL7KWadEEDNhhiMEssAqSyFztZuJZVgQwAjaSoECw7mrNyCmsqz2J3Xc6gj7LkTPAzav3nJg1SgiLhm2cU39",
  "key13": "CCbuDS2zSPhATSA3xN2Va8zKDAbnJqJcd2RHEGnQssAXTnVwRvgEo5oDnXjVb5FrkXTtHTgLd95ydaD17RARYU7",
  "key14": "3LoC4kqHyivwTVNRDcWXixcYY1Gmqz4h1ovtrVsbLCjLuxdEPw6YW6Ltj44fcb7BSXeird7bwk2bDKJqvWUkdLMR",
  "key15": "JjYytBRSNdcMQ5H55xUgZDGzFPLBhxmEcd4YFvpkoAErpdhKd1XpEc75BQAodhsNVvWmMhhwYNyLU4VzxGyrQx7",
  "key16": "41m7Stfh7X9BvQa2Skh39kSAAuuJtgybB5xymfuJvpp5ViKEgfwqXGVmNMCYhG3JbBxsaTtaX3676SMzyrpod2LM",
  "key17": "36RPUcj2gtHtzNoCfFmK6gEuF323BLpuwezUqxJWncvZTcJmepRQEjXPK4AfGN8UJ5E2MgUDqSzTNUdJL8Cz78h9",
  "key18": "2kdMGcydTdFE5toCiBVP6or4Siy422TGc3QncvHNNJ2GTU1i1otpocm5pWh7t4PErhLtKErvGpzkH2rVF4xdjuVK",
  "key19": "5DS5VqR1qs5XSs7aKRVoN9v8HVsPu3e3gWC83ikSeExdRugPRfWPmP29ZQ5qUswjYWypVjnnnFwzm6zhdmN2GjtV",
  "key20": "FS8g1fKvB94CNeok23L8oFm9uWQtpeGSZg2UatvWNfywLQdQuhv94DZFzkpSRxbHBytMVKV1xXDceSgCu5KrR2T",
  "key21": "fsMVaPSEd5LSyWfdQwdRuPSK2zrbMwQ37NzVKhkystiJzyDj2XCZdtoLG36NeYqC7RSJ7pRsvzYsbu2J8KTe4Qr",
  "key22": "2gJ1CALZifnUbBw9uGp6QQ5oTf86F3mPFwv1Gx7azk35SQXTHLYxvVJbGWQfoo9ZnkBxWeKXzTYm3CioKyCPdCA4",
  "key23": "3K65kDoxE1C8GLAoh99vP6drwWCiremLK9kuunktENbzEJSTjJuLVzKMWTDYeCkXEb6YrRUaxCBFRL9yNNE5YPXk",
  "key24": "5R4PKWojtgNt6TXsqQniTxS6VXywtq4oAUdB5bQ7Uzq6fQ1vTKa62YYWnogpXFKH3fFxSjcMTKiAiAqUyUEuZutq",
  "key25": "bLfTVAD8oQ3W7N7aJzDQba6Z9S4zKgWyRifqaiAVuLYRa2xaZm7LzJqmEh6kV9WtoeVLcupc3fojhEYymxbATRT",
  "key26": "599oa1qx5yaLxpXtQHQRgNevzQEgMGsAffdc4QNKEhxJKhUDV1mqtKWJnxagJJUxsRdjdVyt1NAFPP3P4HGSPYS5",
  "key27": "5djzesoLAu4ttoJrrQXsUFxVSjLRuLaQXp8x2m3CMZRoJJCKZP4ZpKaLEJvUrZVpp8jDiCLDgfPRiJK99DqaMzMJ",
  "key28": "39MmxritmEaHBANyary5Urdg3zG6mDLsEiMMzdP4v2BzWGAsS37vG4HAbyofJs5njeSZGcAV3HFE2c37nsp2662w",
  "key29": "3jxPYEttedr4PChhwrfxvihkJ3N3cnGUxZoqgDDr6KbSs9rNtrRLbVCswzubNFUTZzhuTqKhFro88uTiRGEhinKi",
  "key30": "2kuaaD4X6ULzZKCEo66o66kq6dc1RPiNsPar7GyWmJM2UMTGjt3fvy2EASyesK4MhfC6neRiXkwHCCVSWMvS1u8B",
  "key31": "5QJa8YkMoamGxEJj15bjgurWV2vQ9sP6pk5ZH8WAkFhngA6GoB1yC7KQmzgyww5agUBjEoqbb753c859PM6TfMkK",
  "key32": "61MHntjaKFSFN4VpVsmCHP9bP2674rLoJbX3diLugWHZ6xshhDWyFazeVMyLFUiee5nqpZFTmfhdSnmQ3wEA8qvQ",
  "key33": "39P5BnuMD2s9CMGGzZ2qctQ9gYtkQ9MdW3AnhW8nCKD8JXnCFfwUuA4Zc5wrwFyGR9w1GxBvjqWFkqNuqUm5nZBJ",
  "key34": "5GB9A9CDcHN5WzRaVsMyxmaCBFnCdRwuoAjcWUcA86T96JkXvFxCMn136zfLycd8j9dQehm8FVW9eDRsECAurZuA"
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
