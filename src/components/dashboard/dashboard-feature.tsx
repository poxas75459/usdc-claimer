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
    "5v24Mu9fMyCcVHK9LJnM6rDh7yUksZtjxwmUbKW74Z2AptTTdizXj2Drpt9sFtQk9FU1nEAeP69VhrmN6FNcVWA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kz2scW8izAgAKFrKYQ1LKWZ1teb19jCWKAXURNbdZyAq3MxnpRjnqeVDpZnmtia9zUo2KkB6MaVXyYJT6SrKHTA",
  "key1": "3DesMdq6NeHRzLFwZiu4TJkochmQLDugznaiUYdkf41wELSWJi7QckttyRktuyz27nvsERD4PJoniULxdk2aXNu9",
  "key2": "qNVmwS6xDrHKtDuZgnfwYT1cRQRK5eN1uWwjSQxtt7F3KiQYpT1g5VVs4EW4BxBjEfe85qoKCTBhjESjRBDYQgc",
  "key3": "w6H5sB72Z8gBygobD1ShqNmHg2seyEG57rDpHTNJBxfqjFsS49XEkhxbTaGFFVjjkNtrdJkDRskD3rba2BSZZYa",
  "key4": "nxoQYUbHYbZNEqVb58yN4iiE5bzAaCqHrPN28APNLJCbXbJadWn1bUYctyPViQHqJqmikNbewGSRbKicvpxLBTG",
  "key5": "5RsMmwpjEyz3WipmVWiv6KgYFFLX9bTr2qNnku4ESVrAQJ5SJoznZ6cKQVGnXoqMb9eGW3kwu5bQfQgfupsuCdNr",
  "key6": "3P11w1wv8Bf5QEyBsQK6FbcFc5oSNdnAkcHTiqVKdqPfjrb7bX5bHNBheAsZp3jnxEEGbenX2qWRz9vF8aqQXBMT",
  "key7": "5WWT6GcVXAm4fizjavAQC8MYYDEBYPyzLDaNJkhqc9Q412s92viYXeKzLmW1NshdhexNxmPMFcwLpjuUA8qWoSAq",
  "key8": "5P5R5u9Npe6jeiGHjDb4eEZKCGEXhUx8UYecyzoqKRyxrWyWix7Lj5VwMGaGMvnpeg5DRfttgzyrgrNYccn6vQBe",
  "key9": "2aV62rqr2ogKGesjPQ1adYFgH92cGcQBpXFD4J2yPcc9rSTwGcCQb24um6rdAJiLFq2uc3XovQbF9uuaLtEFkHBi",
  "key10": "5HCWGLHJ7UXFDJWTPXV3tFAKeBA6TfDN8xEb5kGza4xTkratW3XCXYZwvDNGur8Qv2WabhQHqV5h6nHbKwhi1L4T",
  "key11": "2KQd6SzDUar2iMEjooDwp2r8oot3YypkS2BAC5mkLPxVXHUPAr3Ks35Vdds6sWWsWCa8qK2HJsngEJQUfgWHB5fd",
  "key12": "3P5E2EYGzZ2ZZonzWtvS7WAHUbqivcLtacXu4d5Denh6Dj9U7FMYfkLc9cd674S1j1LxbwRjmW1RiaFrVtPQDYvc",
  "key13": "bRXKj7zyjkZmD4QHj6mgXXcbu4cxqjm9QzJ3X3uKGvNevNQe5y7bxbx4p4XHDwK3FkXvCmeqWpLNwLPB7R4KvMQ",
  "key14": "5xGPpCoepfuLTrrRHeLKohN7sDwMaEhpSBYbnbYHKp4cdJU4dNuaJSH1ALGpGZaBQo5LGKM2STs69mUeKDBGxi6E",
  "key15": "Sm5Joh15r9VESAJE8aM74vvtFBx7pUWb2jKui2EuEXg8ySFM86fy8yN4cLYnz4GSeQq1ivxazNd22DD9DdhfYKB",
  "key16": "9r3rhs8V6xcfRN1SG5oJz6qAG6H3DJm8GYZSs1Dhc4w8UmeF7BBGPvcP78pL554fKZaS2XtoFPohMJVD13vM3AJ",
  "key17": "255rh4Esybbz5USPWtP7pqYv4zBoTrWMpPfC7otTJJ7dKHpwcsaTddNE71snob5w3b8G1BxBCpJynKWedVSjHKTp",
  "key18": "3cCSErz1Sfyzf6Tr9YsPGWhskoDwRRHXAZ4QdssfcQYeNpUtE7SSa19pnS25hGkekuYM1RNB2kncsKJfrMFS9bTY",
  "key19": "2MxVACL2grw74ADvJktLs9N4foJFparzLpb232RmAwntwirwYiGDcUJUJAXmCHjoRs79eAtLPFdLTCcM1ReGTN6a",
  "key20": "5spWH289t3RHvu99XPK2qcJrRaZkAzqrGW5oL1Ji9tVfQauxW44PMRY4zn8nCs6DKpvjHwdDAb7pVKFxEUXDzpUD",
  "key21": "3gmrsembqbYNDhhEa7TKMiN5g1iG6xthF7ZjEgP1wBwSu9YEo19uwG1ZfjqH8dAMBs83DpbNV7GuXvS82k2q1mrG",
  "key22": "38NsGdP1aSfizioykUsb5fdJQt3VHsS9bkp31rF2bUPiVFEZWP4iTeqVMLz9hnBhs2SuSS1yXHZFGeTpgYTu1V5w",
  "key23": "2bPj3gWQvWf9n1vYUmHJRW4t8Xqypa62sTguYgWNDXTSDoTSytNVpicwhn7B24GusTBcLqL5o2ibCshQUtX6KsPE",
  "key24": "4ATDrfpFRaQfnd11XgAq4zwRy8wENzo6RGBjwksKVHpGaMjFVfygsetWsSSLgo7P41CWrUu3HjAEYxCXaMgr39sr",
  "key25": "5opgGF1upA2d4yaJNedznwuF8b7awGVas96mYDtpfaPURhhCPZf4KsWad2kdnu2SggGhQu24askmCYt61VmDBmxn",
  "key26": "5qHiofSBr35re1z2879azFkyfZPtdH2nSh9N3y9HtErekhHZpNgsRp2rk98pzv8HmvYqEk3C14kkq7Dikp1CNtPE",
  "key27": "MfSBzXGqCwp4wHFMLiNosCFoXPKCPCQdoTKBGm7KKPt5hedfvuYDi4VPgvntDdkyke5AhnpUEKtRtsEgm18EGEG",
  "key28": "4eGaXKQLt6rVHqJ69dPV59ZFg9S6mntUvdxmEV4VzKgWCtKekqJc1yjxFVE79MPVuM6haFdDJ7Zje5EyvZSm44Wd",
  "key29": "34ztpY58TvQu8rYqzjWsQQtcjUSnnhEngvbfoBBeEsZPM63WUtUhMhiUheCTGTRgXEqqjmC9zXuUY9x2ssW7ZNTD",
  "key30": "kydTy8wnhEQrNqZCWNiuVegDoRS9nJSz1hCqLavofcd5vT3y572hQBW6vPiAgVVjoAAuazCCJKmHP4JehDf8xGT",
  "key31": "4KzT9k1hNySJ8Uf5aqCdARfXvWZkUqS9UDqkEKmb6Qm3JuhcJiFj5u5bDf4Y1LXVHH7BskRbe52pkkszNnVLHdpP",
  "key32": "599eirTtZCFxYxNmBdJj7GxzG5oaCBDgJguDDL8TUSm8QR1At89uyYuxYcQt2HS2C7EjWEedFrCJ93wJHyhuo2V",
  "key33": "2KpSaTo8DrUNAxtY6VwVPh5cJVGPMyGGoGkebq8WsMTYe82gK7kRur1Av7Ur3QRMLmTzowUsWvwRjmQeTfZ6ag51",
  "key34": "HyKEb6EjEJRw7TQiX1fD2H847PF78ti1UdP13buYm1M7JTmRuLv1YxRitTgUsWmAjZPgzkpfG9trV9jGjTuPEjN",
  "key35": "2ibCSkHRPgSYjQGPeAiVMRJPAgr5nzhastdh935kNznMhtYvAbGmRGfuSpDikrmF7L2E35D5sjdZinFVFSjn2a3N",
  "key36": "2STFeDo9ox7TF3hQGUtJvrzN1Leu7zpX84Cbi3GLd4KeJXFS8VVVLAeXGVQd5nXggiebHnqty52ouEFhjpo4yCxy",
  "key37": "4DJSjxc7BonpCsiiYHyoNcb5Uit8M4LRAFsx2qScJqu9h4LwJaTptuhhqXFAG1zY1pwRm8CM2ALnsAzUXCHkATGS",
  "key38": "39N6c8pVzaTN5qo9mZBRoCFTQEJXN5HDKDvesFsPa5c1KYMoUVJJB8sQb8hJsfthtTPxF73ij2jVoeJsi3RE1dZL",
  "key39": "fZcMqWRDonSWbj737RgxjyaLyi8Z3VvWwxk8tJNrcWJcpv5Wb4QS2wiuZDXjAWi4r8S5MUMSqxsMSZ88h8GQX1a",
  "key40": "Fg69eNsfmBj4YHGkqoxGnjCojNVpyfPNkewJEaVfzttniBPK7GxXRK65bA74qiNBZpdjgVjTQcv2V5omnvpX4X2"
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
