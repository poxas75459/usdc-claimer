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
    "8GGwbSNCgP8AdLgWaUnHgppQkPo5jY1hz8GypTM1ce9hCjEZCJ4JhtTRLtUMSbU9GS9Rg4DQRx31khynxqGjXDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r99S2iMNW21xnmabrmiNsEWGkt8P5T2dHeKJW9m9jAh4kdoVH2UuVraocSQqy6HawV9u75mdxwgfAHZzzNEAgdB",
  "key1": "4vZrDEdyRshZT1USRDv4pLi5Gc53Hrig9VLg8ciFCBziKATphfXYGkgpRAndkp3eJMBoPCXexSyGQr3jxuEDeUTi",
  "key2": "5o4Q91Mgk4UPuJsr2RRP88Yw69ArS8He5nBZunzFS74bRANrcXYRaS7GJHneT57gDN1iG9DcJB9qRKRZjqjYoSyz",
  "key3": "25AAMkir3w1xNu8zozv26xgFCgJ7yWKQFNGj4ZQayYX3UYbZXN1bDDop55eqkLa4iYz7fMFo5zp3yVWs51TG2Xnp",
  "key4": "2oag56habrLg4pL42m1CiNZqsnXALBgAKryCDAW75wm29g2qNxGzyUD9Mx3iKRLiinWgpeUkDLpKh5mfmFLbbKSb",
  "key5": "3P14V9WixPWZ5F2m6aYTBEHzMx3cPCLWHydQKqo7RmhiCtRwn68FxN3kT2zorALpVLEkFC1yyVqWW22kN8SMaAao",
  "key6": "28Bpfpf8oEUm1rap6hSdpP3VZenEw4oiS2SsdvhDyxpes7nTsHPNQktNz3CKc97N1mRskXQwXNkMVmRx4zBFk5K1",
  "key7": "5ivwuaUQvvXXDysEqLMfcqhA7XgMaoBeSWdxJWrmR9s21zCoFgENnAXobTfJ6nHCTL47EMsVqVkXZibwm3NxcPvJ",
  "key8": "3ARyn5ykWW2Na1VjMdx4wmByN6i83QKJphLCumN87UnU6stXvnhm9KW6RC7iJi3jRvtBMN72uH3UAodRY3cqBgsP",
  "key9": "2Xzanqip6ZAvQt2KiZv7e1ecJhLwSu1vSKbkwqx9gCS5wF6GWjhNXGHq2H3T2Y9imZungQSQffEFRo9VpgXTdkwj",
  "key10": "5EeYiGvo4rg3b2cPiey917tqPAVDNbFNptAGq1DKRnJmap72vSnLvRxE4xuS8Ws84hPdUWGRNG1fm74hYx1h5wxk",
  "key11": "7GtDvzv5SyZg9uaDsj1GxBi6Lk6tN7t3R2tLqXHAjUpBDB3Nr9ZoM6w3R5SYBxSgRyUTpgExxf8Lbvm4GWYRWUx",
  "key12": "m7DHevmGfTTPJS2g2WKEZ8iYAabm8f3nPECJgxzBh6yZSsf9qdmX26vVc7HaDNgdeY7BVkVdE43kG8ucqEEC8N1",
  "key13": "4cDMQ4BSRRs8LWLHswZMA3bqC43TEsZizXvMsY5VGv492FvLFuEfM7ZyVnnt7TomGH6CgrwuQoen2bcH7Mmsw87i",
  "key14": "5GbFCSabXBsUSs91yWkha5C54vzgUK7kMgQNWKAUAkwpEcftWCAc5ubmQYbvacAdEpVEtWNcUadbSUUJRNLWEmDB",
  "key15": "2knxyHUCYqVzwiV3zG8HBMmsYLzvQ2RAPHfbyptsS2UHFRMJwPw6y9vP2fLKAzBvQP662EBa57gQbqZpYrumZSH9",
  "key16": "4qAdTK4kTpGRrSWPnHDnvsSBU7CmtnqA8tEFPoRpN62qt2mNt9NbMb45jnkz2dZ5RDPTqqZ2og1njVmeMD8nQ4PD",
  "key17": "4ggovRHc1T73cRZXhiJ4PVE5zADAZbd6qDcQC1JG9XKNxq9hZPdxKMfmmA1moh3ieGyZYxwbmnE54MjKF6pvuQSH",
  "key18": "234ftfeGDnwacanRfCatrHLBoCrPxoyYZG4kFcW5tXV9pteFadBhBvjh5srDVkAnnNBi85r6EPYUkMx9ws5fU3Q6",
  "key19": "n37k3DotpRPGWDrQEBc8Fev1Z48fQqtcb8BANZwFaUdPUDiydtnSMFCFmWxC8P3EBt222ZBd57kdSFXvwLWTGqd",
  "key20": "5YAopao7LYrJxg3szbUxDQ5ZupU3de4dciYAFpjFhN8Fz87EmkEcDSnf1UNzwiuuMSfB1iRyFxfVuG9PR5ntKu1L",
  "key21": "5NDRdpS5dTKSJmEKgaN5r2TXrbF3ib8cdh12aCkggDgghq8z8UrHjWDdMK34eSh7RAqy6dfmYgzeieA5jJ2t6Ypf",
  "key22": "46sqSmySCdZSrC55xVXRgVG7daaa5JEvxFrDGaf2zxpD51V5qd7KJhcL1z6B9Xn6Chj3nGCemLVSXRMSSofTsGML",
  "key23": "4gkGnushmsj2qatxPaQMGUvQkXtqPQQdbKWYtdstgp2NCXvGWCdx2c1RxpyB5URpkpxayd8n2pCwsdoTUK1MVC7V",
  "key24": "419zuadnYa8HNoP7tNYnPrT73yRB9no5xosuFaRPEthsXiYpDWT3fyKiGQUiTGAWo8X9VokxbNr864ZkXyjo9Fxc",
  "key25": "5jtwrZkRzTnYiATRUP28vmqSZ75CRz9YY1MNdrBS9tt2eLH3re25WcYb4zPK2KgF2H1vb5qo84ZHtv6g3VPZb7nB",
  "key26": "4mW4xmbuNXuhw8ureRS3qtiHUYPy6qLZ3HDqDHr22pDjoumczhNQ1QwiR87wXVVi3UhvVS9SmJEXTjtXNd6ZMdLe",
  "key27": "67ZSXxJEQZJ3Cmbgqvf363n1sRxnLfMEKdfmP1apUhJwmuVvqobfmvHBNsXFAMY2opnnKowVuJV6THV3LNh8EHh2",
  "key28": "4unyFyXzFxGEDR6dKeDi7YQnhSGxSNQczvPoH1wDDEaFRwvtxpfbantta7sw5G4uQz1Pv1R8DBYFZuEt9ojpbP1K",
  "key29": "3riVGVRghZt7A49h6EwUoJLKpa1epgXpyZQWwCYchAb3nbncJ1pWzJ67BP6doc1GqJVtEa82pjPaNkwxVyAS5sLw",
  "key30": "4LmADi7APX3AP5nPsezV6TnYBRZuZbKdBwvbDkw5UhG2Ub8oBSLroPXJY47r9LhkYwMgRiBk9CnB7Qqr64F6Xi4V",
  "key31": "nAX3ZbcaFSdss85t8cDnVmaFsyrnkFaarf3u59uMVhiL8vxmshXPXFQpXB5M8vdg4qdidM5dHebUrfw8YGcEFxt",
  "key32": "43dCB7CWCRtYfvUofmfayndofzKtfJfiwW4tmDgJTiCCNEHYtivvKRuR3RFfJaHpcBuYqfyL4BwmWkinYMLUN3yg",
  "key33": "5wiK5UwKHJNH36vrBY2pZVt6Tpo7SiNUeAL7abJypvzbTMsoz5FUVWvSWT6VRwaTxLdRMAgb8xuwkWVYH5UXCWJ2",
  "key34": "2iy7F72SypVCxNVbzu16CjuyAdSPBg7ryrrSFNQYgNr5UjhB9q7v3diGYzyofTeXwXHZ3oMEZTuv7nFLSDX76e4b",
  "key35": "4MA3zHPyVHsRcQsg869ae2sMAcBnA4NnB1ejsjZ2Wjk4wrDwJHf1SctPg6LoYESQF3P4BdeBKe6rheiHetyaXffR",
  "key36": "tUau6xBtg9m5Zcn1xvzkqgLVEngkQXN5jWAgtThKoNiVHfzmxxhMAJepbAFPhohP8wK98n8d3gwthDTCcSQKnDT",
  "key37": "33QLfUrqdAN4waeK9NpHCs9iiNLfZ6d6aiddGQXUbBhfcHsqdnyQLva5JNPwrFtphnfdrmQuMWfUcEYFGY44vZxA"
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
