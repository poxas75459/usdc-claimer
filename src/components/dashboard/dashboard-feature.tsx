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
    "oqtXsh8tzWZiZtJb8wY7qokVwRQLd56JrrH6J25a8DKj1HCwFLJTF8AxNLtvidFH48qzifN22weHhP6XhcSPkEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2fx5SjaRjbyBLEBRa8pn6pdMdjc2AtZwkWjATbfnGrtqzSbKfosz7TueeYinriCyhgcxbAxkgLvYN2svLJJ7DU",
  "key1": "3v2MKhqCrB5W9hyUbCbxDLENq5MG1R1u4gQSHyHe8oQWG8QDwNHLUcpFTguA99NT6DDBKL5HSMG4AbgfwwzpAxdt",
  "key2": "3LLSi7T665wmJyUNZEhLKQy7mjoxScMaFMqemsaM6JzfyrDucUmJrQLgh5GKvx2CPvJuHSxGwNyQAL3ZhstSB6yQ",
  "key3": "4ZUYEaHEu3ZPaDSxVfGKNionee9ZUpwt7P4fzmK24kjrWeMowaiEgQsi3njQJwRGnGLeMbKeR6DJzjBe737XaGiF",
  "key4": "oKYs1KLbNAkcZxheSvraGYunZH9WT8wVSjf5Xmds1Px3rHaiPyvoaPa9MKLKLs1vzeVMPPPBFbyJehh6MaZ1mLS",
  "key5": "4ZkqdhFNYM9C1RZ9Y9BTbNrdADCkuf6iRWJrv39Xt9CaDFJitaHPt3dCGb59vswhHGW8EWtwcVqALL8vJCBhbtNE",
  "key6": "5C5EpR5JjESK5h2Ab32gHcWzrbnxppmxmwJr5GjvfbmEQaCxar4isDEUuGQNid2vaRVMpaFfLAuW1hNDkRj5Wifp",
  "key7": "QZGHy3GAC9wV7dRB36wjvtLmTfqggA1Gn5Xtzc4ix5q7hGybYkJNsJoWNvcdvHeULaumMVNJ7pJyibRCP91pSfe",
  "key8": "BupsHEstAumcx4qoHMymo8hYxnRgCeU2vTAVevSjC7EUwEPcntEzaojaSjsBLsKeX4e6TYsmmbMEV8K54bMAPLT",
  "key9": "24cuSGJpqT86p5ezqCQoqn4PszgscYP5hUDL6QPUT59s4YkZtWC3Fu71uqgfYojhcmVG5a97xKWiCF7qXZd7W4UX",
  "key10": "5vmdmsdLXBMvSB5VvAPjcWzJ3PBYFpQp1ucsPReonUJDUR7LqBzw25jfVb2YMrFVEvSSLddRZMytJ5eUSFdLKuc3",
  "key11": "4U1zLxFMj71yvknYw5Cx8UcGtp5upV7aK5qNxfZCSzbhnUhSDqi3Tcde6WkYUKPJnU8qDkkXmRtpNg3izTNYepdH",
  "key12": "5eyMRXz3ZHZNupSrudELTUrw2Fo7kS2MVGNoVQ7D3n5BNSojh7JLCnLHJ5zLtj8D7F1nnJ6S6NH88UEG7urftLGW",
  "key13": "4WkQkH5JbYbu8i7AGQouFXE7AQJhRW4gAwTAg9o9hxxbymMQxkNEmCYs7incaEmbagcy8wzXg5tu3Gygx1F4skoF",
  "key14": "2qDugcMRayZEV1EzU1fvF9P75LGYKUA2X9fHYMi9T2ma71q6d9pp5bUBPKKBFufVd6eHy6FSJ62TSGN9Jtt6XM1F",
  "key15": "3Z9JHA1vcP79C3osTVnJjC3HEUApy8Gj4EGfr71Fi9gae2ZozgkAkzVtZsrQ5KTua13DbQJtr6rjMi8fMyABkc2m",
  "key16": "58NXkbfxVsrbNWuvJMEmLmNUjbZ3mKyVgZcvtaXmEaZcuZGxaXdpAfd7zsYDBKFbfj6NYojVnEAFs8ZQsQQuyeY7",
  "key17": "2kLkeRi3WfQwSN7Z9q2Jzn43xfgC9gzejxKB1LkLdAJm1PESQYLMz89Qxrf3kHwu5mwHbctizZPSB5tKCQXKDcRs",
  "key18": "4LDC5LAX7A7UHYu4VP7u7XdyxC9vfej4tiNFuvWjMxkHg5cxD4nD8mCSTQQKZs3PfdN8svjVtQn9RK3tTCy5KvFc",
  "key19": "3CSgFhFkGU3mbG4UA1hChz8SmxdFFKvWkT8QFN55we5SjnEYk6Nrcy8rfjNVMsamfTMF3oWyp7AyHbqok62fzVjE",
  "key20": "Z6MwX3uEjrkuonxjYMQU7f2aAbkHnJm5LMwxhvZG6n7CPW62wMho2dkCyQvoaQjtjKp61K2eqNiiMuHhwpM1w3h",
  "key21": "2mGxbQudQDYxMVRSYGBZdCE9RFYpfGNe34CSRYzwpCYSLYmgAouuNCrARamnXmz9rE8qg7u2rLCfNwaCU9kpLHCu",
  "key22": "31dKCqeiJ8aTFFSeRemVC3vTse5bezexFP4S8BQJyeuMTWSe6e4SP664xYpPCCEDseUp8ApJ9UdubVajPxYaHcLw",
  "key23": "4AnKE84akeTE7c5a6CX76HTZwq9Fa7Y45RuComuoURozQ3qJM1psdCDEiPUmeKaPDgpyPunVz9T9M5e9xQfZGvVM",
  "key24": "21dA2UrWLMkLYdUesnMKR9QajEg3wEzGzva424kLg7yBwynBnnvTQ4ZyJnwJt3HWisCRXE9nF2J6SiXAhn8Uof8M",
  "key25": "egHMFTyfkxEKjyJv4d6KYx5m2xoMgbJKvegNkQzX7fAxc3YodTPdwaCAMkoYroEMCQYVvoh2Vo8fJScs8r7yF6U",
  "key26": "65ZPMy3eC9pFUNDLDLNvyAEUCfqmJ9w6ZnK7HRitrA74dikwTJEqNye3LQbvaxTLaV839bTopPi24JRxdonfyv6J",
  "key27": "dUQQkyuDWThspT5zpzjWZKC5cDnZzLZrzdke5JFkFiXknETTPpPN3vsSnkv85i4MgdrXvK9yjKCGwx6H13fn7b8",
  "key28": "KqJDLUWRSTm7Yojs7b6Vf6BNUXJBJxSHpkvoztSottb67f18yyNKEW7A5bMZkGRMiHTXyfqSFjhQR2wzmCu5X2Z",
  "key29": "2kwHbLXXbtxEUqEvLyM8SUY3USPhZce9zyKUcrUAUB9NAxfMuSxkWSnmsKN69CV4idHc17r5AtE4CYe1uu6qCgrL",
  "key30": "2xUnrcPVPLffLhGaBYjsCYmthtWAgX347agcDGYhUEUoKUaDyPpm2hZoV4LVtSksbqkZXoCGSP6Aw8LqbFodkEV8",
  "key31": "4iZJ9KgmLu4NXoV77KoTHE2ubbePLpze7ZgC6D9Maiwd5wEyDLFW9RmvZByjDK5L5badS3RbhGUn5Z1qvoVX3XKn",
  "key32": "2FK2waeuyQAX5aLeowyh57xFq7VDA65rtfAttVjeDzSJtbuLQtjVWKU2a93k95SSRXh1BD1LZsL3tsHWdPZptosY",
  "key33": "5qe1APHvWQ36RgFH5kGXXL37mt1d8cepxNwpRvNqLnMSLHN1eN9GjJcYGisd2A5iTvj5Wsvi6Bgig8eCvPgnG1ye",
  "key34": "2FLDmLo8yb1PhSL9d5hPgCJrGcFDowRcA4AGSXZSfnZnuUJ6K8sKcbTNWQAVXvb3LtdmEsGVL14RAMaELb5QcT65",
  "key35": "MqsuxfbKJtX8B879GGA1mkdsDJGpMxAFEKQnGit8XTKympCjXub22a39SZC1vfrHDrJuKDzuGgo5RLycBkPewyE",
  "key36": "51edECWmsUvmNb448CndhutrdCbsmKDkmXRYWbNXuhNzmzrLy1WDXibgvsURcd5PbzWoqzA2r1iLvFE9VtffNAkt",
  "key37": "2uZy2dP7T3ZQPUXpFivdyvj9JjeHYQTGVvK2tycWhE6vn4SqC8ALegxWtrBPh7d1Mz5987hditSbJdkd6VvmFmMV",
  "key38": "2kc1nVq3zGpKkNDr6cZQJpNUfiyJtmWJNswMr1bdkdcXYwRDPxCtUd4REErX5yr5xnru2b9U5s3Fh8YZ69efaxCH"
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
