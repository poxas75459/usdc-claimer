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
    "3xVyEfUBvPkSzPf9GNpsR7Fi1rTbVvimAf3tqx1zGhqeMWrtEWmYp5Xy9oSy1m7VS4xr8UHRt2dYJabBQmGnoh7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ExdGwskMnNNgBR2YhcyLyQ7WvKxHsESekXMPoKywnU8cVAEFVQ2RnKeyGqHBu1dCSfHANNnBfVmzxrb4dZm42ky",
  "key1": "52f5knfMxGtz1NnuDJFrtfo8cAtnKdCDvWxoojzhv334jySj8NXZ4nDvEriVUartsBzw4bKHGKBaNVG2VjctKSmS",
  "key2": "29DouW6HA64S52rsbHiP6aCBGzQ2bVY5nWnFXgtp3RSe6DLydY4qSycrnq1ZvVqc3cWVP6YnGUyGcsdsJnhUmPxr",
  "key3": "2i2uJjEupXPfbDFxwe7XYoAXfgYhvyDY2qBin2RutVcXrKhHjKEDombjvGMB2A2Rbd7mYATyG3z89uvHQdpRZad",
  "key4": "3LrnGJvkuVgsFjLa8TJzyLWmQNCYJAeDHZCFW4WbxkiWLT6NKeqsfjTofstKdQktUAfAeiutY1Q83jSFEqRPXYEv",
  "key5": "hqk2w7SjbapNpga6JFLXrvPuHV57q3QCsHdpRiyRSfrC8Sn6S1KTRmRF7C2cQDSUiELzWqLawcwyfj3nNkJsLZd",
  "key6": "2KKZ1mTELn78cs6DxKNMFP7qjgGojZ3XDGHSVyrm2nnoe38PzxhPmsR8PRH4pHjBRh7cDNb9v6qDfzY9fECqetkT",
  "key7": "FkjFqP2oR5ZEeGoLzCaEjHHWY5bi77axk1p8AgX4LV4VfF2r28DG9q962dPfo8knmBrNqF4EdVtWGwCxdg41nht",
  "key8": "zJQF9XRJmsgsbqaaDpahguU3EbhxNoWpUywT2JsNf9mCwPLisAF9FEbyNesaLdJZeJrCAg8WR1f8Rw9gj2cTLhy",
  "key9": "3hWV5E2WW5bXcZVkFVUHQWR8dJGgyM7zBagE1LmaM2LuWaaEmCKr7o8uDyisjZwFoNxQYxgioJQQWfz62gvfDVkJ",
  "key10": "4XwW3iiq8geq9Dy16BJMCZ85YwXBQuJiskUUPhAE1cWcTH8KnBvEUXSaWb46N3AhmTmdmLfuojvQUo2bJ3vohqZe",
  "key11": "3jmBNH5MuCPZe7g45Swr45APQtX6rDqQp2BujxSCJKSjyPvAXh7LnHukdqJMaZJ7b5cRXZjiVg3d24vVT26XuF1d",
  "key12": "3bncQMv1iHLgv8U3dpXiMukv9YBTxW2sF9grX3Y2S21MDZbFEkw9sqCs38WPixjkiRDhDsEb8him4Zv6H1pDy2UD",
  "key13": "56chYQYpUhvgM2QKhEs7JxRa5kVny7Fy4iQAtwCi79t3tnu4qDkoT7WqPDJVbFyN1qcYK6SK28HeQt6w2UptU8NE",
  "key14": "591NqMSQvCTunkj6o92TJeJRfaU2EJzaG8jgRXRdbpzK1nuBYkgHGGnb8eKLZrWAC7u5bVjHNnYWBUwrs4VVXGT6",
  "key15": "3ndWfZYWc3RY6zvqQSS98GNKPHCig9stCeLfdJ4pzgijzbCEaptfqXRjcxRvysYpJNg8ueznna6hsetryGwQBRy",
  "key16": "5n4FLRrNALJzGKrEAPnEZjh4yAkL4An59CHRv7VNfVNGCpnHaN18KnJgvVkfauHpA1ZYAnaGP8sKm67jYkT6MAyh",
  "key17": "UG1xFsMD7e3SvNefr7hC2aG32TviHP3NgCQr8mxFHmjCFxL3eUtXNNk3xRS9fE6oMZpCaDS3Scrj31QtoYYFhcg",
  "key18": "3Ht6n4trKnLju7WN54Ah9FS9Wxpb6ra8b9WewV2SWscpiknyYpAXg6fS6wQGLEptYyeaaZBNoRXzzLKvsLbJ5akV",
  "key19": "2Pvpmh2DA159QUQ6g9FY6YqGuYfFGvrahUJQRNeCwBXp8Envb26Jug93ZCoQyve8nepydHPKv8EKUWX3nGaheNZB",
  "key20": "4N8NK9NZy6TmV7g6s1k4UhcNy7igogpaMoB7UFDdiy1e2NE1pLiCzWtkg4LzcpSE8t2SSa3nCuvcvS3rJdzpx7NT",
  "key21": "5mmciTAnY4LMevr9XfmzJjyRtuWKL2vQT4tr8vWw2ThYiW7opdtYxqvu4Q4oHAp65XSNebuPTHTU7V2ZNwMvWk9N",
  "key22": "4Q7WoGCh6xVcVs3iw56zeAhsLniTrtqfCnErFLAiqAQr3apC4d7Pv3N4XVexYMtEkfxuvQoLxoN9WR5TZSH5r9sK",
  "key23": "54MQMDQMHcYn5FrYc9HocCe8aua1QyJt7xU9KkV9ePCeBpZQ5b7XAtF3qE9NkwcMszsCV7X5BEAVC62hhEMs8aEN",
  "key24": "3GJqK1mZc93mex62qpz8iAEtrUBkC8dXCYgGqixcGkdX9ZJGqJ6mzUSkFbAcY41dAABDnG2JMohLo9xohRe8RwdG",
  "key25": "4aoMypDxDm3DymmaSzUCxEMVvvonoFUJxwRuX8nLScYZoGw8UwHB1oX9ehXKuQH8uX1cZop8q1Tj9UJP4gdzz4np",
  "key26": "4yZMfVbqYGujfEd87kyqBXe5EUGhZrwwbY9cKqQk3BSAfVHn2Ea5U274ZQT4NHYirvhr1gCd54VB8ZSi4YQdfCv8",
  "key27": "5x3j4KeB6vo1k6vvopSTeqYkVMsyKYy7wuKY8UQL8ELdjhAtPGP2WqUzyyQsYdXLrBSBBo13JxR7FG4cyrPeTfR4",
  "key28": "4gUwjNiJp2VahiSCTBcTvXcvrXNgVP7dNAwBvnsHKAK1a8pRErQAbCocyHGyDKousXvpd6NzhYTFzo1RRULxu7AU",
  "key29": "2NqPbMu2YUrra7gy2UTnuH3uaMbsE8T2rgg7sqome3fvMtt21LKZqsGDZ4iGyaqufXcko71XEtQ8usfXUAVfM8Y",
  "key30": "5sgasRKU6tFvgis4McZUfW9NwAHXRZdwagC4ns9mNycL7TyQqdP8GXZeQQGvn74xB59jjCLebsCoRKf6rsoEZgF3",
  "key31": "66Uv8GNn2XaeVcGEh88MaByeC6n5KDZ4jYzgkWPYhTxFQaKyLv7996YRogzjezbVbDADqTocumF3anmGJ1igwFrk",
  "key32": "5LvevmvKjfnevMA7KoPpekr5mUYmdQwEq415LLMRK4Hi9bumWH6YQLoop3D2vuYMnyv41g8bQwweNvCrgDbDGzUj",
  "key33": "5CDCryP7szLRdoCMeX5cK7paUsAqNABGQWoWU7yqyPbEVhCVKVSCriuks9QTYNAV5fYYGrZvdK3SZ2zDMCnguVJv",
  "key34": "yfG6FXVaUSA8ai3b9FMJB9pvhEVGxFfZaoNvizqfdzRXrKiTK1gVCfoZJmNT29ffjBL6Nahy3o2QAyJFyNJYou9",
  "key35": "2ZWbDdiATKbK2G3ncQHBDWG4zihCETnRkKoujChknPCUqLJTi1n9n2aVoAkYSHPrMDPzVWByq5KqM9ud1UXnMZEa",
  "key36": "4JUbT5Aojw9addS511B6JQgxBx7PpRHSvqJwZy24RYghTwjcmtgqSuTvRSLXoECVujXfi172rxjVE3FXr8aXnLwY",
  "key37": "2EMhVTdU371Gg94tHDZxtbEaHu3TtrVyBcygVNcdNVD6L8efzW4Ctis4hp4rdHjSmjgsgNsi9HoprUeVyZwXn5Kp",
  "key38": "Jgj8X25oehJWrD2rdVppumEhmToF4itxnmAiAxEdsMAXjoBFXJYNevyfhJBrB1NUBzRJz7BfVjrAFWZfoeyjGcJ",
  "key39": "3zkV9hk3rX75Vb914eseCzB1hh3ymZjgKAEWmktq8j3KJwPnMJVjkFNonKDpmMr6XYZvDZNXA9Rc62JYubspC24R",
  "key40": "25DRrk6Kqem4qhiP3RQCMJtWu3iTeDDjJwfJohhnRprriZ6vh8tdf6PgMXpXkVBQU6VXUMNdgJ1G2C12VipjiBjA",
  "key41": "4hRie9tgUHedYYLnnTBxCfMYzqj8Gn3F9vpqYgQFcpNUm9vyCY6nmTLongZZXMt1EiLXdoqizx4qtxtKn3fjspR3"
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
