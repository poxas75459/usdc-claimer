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
    "57V6Ni5zSKWmPgVSwPWcvpVYf13JJaKpey5z6HpCaWAiPy72e6Pz2vCz6ArtFG54isPrMHJVugLwWZW4GXmrV1xD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g9PguXc6Kz1Bge11JfCyrJFkWLqmkupTyLm9Riirrc57T3DKBUBAcymSbEeAPEur9DRg1ykvBBWsj3cDznPa9vT",
  "key1": "sRH5z5JEg9Xo8h8kCtJXkkmZpJmPFKPmgzC3pfSgHBskeWMYyBA4juYTfN8wtuq6QTFAD48ed3gZBwtWBaxzuqy",
  "key2": "4k8XRkHPSrwJDAXB7vNMAuvSQHXLiq9gdJ4VuFUrYbhiQ3KCuLNGtj1uq2YhWxRsyKxcWhUM4fgJ1spHarwZEx5F",
  "key3": "54yS6CbpmEcG7NE7rj6THZtsHKSwJvgfMjEUC6rJJiwdVuP3bpS42s319Knt64wZFFGQnYxJNrnWS5tybgvuycHC",
  "key4": "4KMW7eRzPE9p8XgDHtxEKKBF8ReUMhvw9CGYjyLbUmdxMbTKvireEJrJaewDChsyd92KmaAGbzce4drsfxgSWGo5",
  "key5": "5TekudE9qadBdLcmEARtiv6oehoCiVRqZWb8knPXYpV4hKCVjNQiEnreimbLnARxPLPGxFGUBjHhcopmDUGqdMgZ",
  "key6": "g2ba6MG88BghD3BZdbhuvjBeVvyBUc23QXvroj2KGnnf1rKc7bazqh4wZMVu6hoN84hyo5RqpqRRnyijw7NLfn3",
  "key7": "4Ta7kJkYtJN7pVmmJiavF6HGt8U4fPN9JMxKnBq2vYm2TqXRXPe8ndoXEJQSPAASSsBSMNq73WYdX3dVBnCu2ZnA",
  "key8": "vrAm3zLdJSrxcg1w7KkKtWSodLmkAkhjTpMQEmujv8F3DsDmkhT6SY6wTCbHB5tosuCbVr6fZVsc7gZJhXaTRoP",
  "key9": "U2Jh3kuoJxbKgAFGrpEarYQTfXumsDynLvnQqs6yXMsW9sqGydkZXA4fvCTzKk69GBMGM1X7MREDU2cKt6Tz62X",
  "key10": "4RgWxpNV3AhtX35U4S9AtR7CWGqEA8oU2FT6se3QqASEanz1QjCCyaM3RTKhvsxkWEQuuzuCjWpEM2LL2g4EsiL6",
  "key11": "2bYfHjvNV1ndpAaspWWxCVUXhr1ckn38RoLNRkgqMXuubFkW7RTZwTCWxWofHE1kJ3Y64e5c5D9ynE6Xx5mx8R2n",
  "key12": "2qVsCMNuz6KPRKXFa8tvxJmKuwQiof7yuunbvVAsoTVzbnex1Z35xTV3YaxG4C2BsUt8Nxcriutjh1kTRKs1ZqZg",
  "key13": "4fZg8X94142b18Fs3bCdn1WvjjJUAUkhtKw1pER9xYACKQgdXFMCLWTKvaDcQob4vFwbyD3K5Az3DkwknXk8w1Fp",
  "key14": "vGzKpjasgVjJVPsohMEc2eF8msB414H4rgtFXLny2U2JnWzP2ufpmPvCx82HAYzfX919ez6ZBfoHkesxtHdTVEJ",
  "key15": "4x3GVJMAhMRVpyNFVetqvatJEDNStXG83QinCKurNUPYFySfbby6BRudLHpn6RZw2jAa38qFCfFTKC4TFByfrd3h",
  "key16": "5YZa9M8d6J1EXVGrtDptpoyem3KfscCZuKhmDiFecEiJJ8VnvnGXipXmnq6Rd1zvj1dXUpZnYw8242U1k37nz9tx",
  "key17": "565di2wc11M2PNyxRX31vzUHj3k1ZZ3uqcGGdFMxggedYLALSsB6QeS1iD8EvHXnuZb5qpxFNA9tYbtdcSNDxo9d",
  "key18": "kQNG2nnyZXxFxxtdJA98yeFhy8fxi6V7N4U3X1fHvi8885kakDmbU4uPUkThzVf41bF8c14UgNimjzp91rBbT7g",
  "key19": "2DGW4X5PpC3PrFQLkqLWcAK19dsimdNcRmLkKP42Lw5V6ZNj1qX8ov98Eg8Tmv9LTbM9uy2vNe2eDVRwQAN11TM8",
  "key20": "29Y7krHVZNpx3QYSHEBRgz8oV22vrmzAZddbretkL9zVVo1gZnWo6pia8ZzxGBwigwXCbvZ5dcU3yZjz83cyFsza",
  "key21": "VHkCXWSErEBuW1MPX6TcqnbquNCucoym7FkDixmnS6XLU5gLjzK4PjU2db5uuvVcM6mXx6gY14LB8hZE9pa2cno",
  "key22": "5cnkWwZt68ZHTVUjyCCxLiKTKhDarddXc9rMXU575XdakFSvUD8aT1Zw1C8yQK9ifgQ5A5pqYCA3Danb6MryNzno",
  "key23": "XMH1FiWmqXBmn5BmbrKvVG2j4NiYFVjvQiqXZimqEPkLxQ9ZxBwoGLdBBe5DsTNuJLyV4XW1Jsp7L6eTYcsvFYu",
  "key24": "4uJvqxqxNCtATskT86KrvhNUkP9oY68E7hQD689FCLssEwVAdhJ87Whaer99wGQGxuEev9SFYEPVg9xgaX987jYn",
  "key25": "4JtdennDqHNFaBWAZLJrToe6Ln7fLYr5XmXoQYke6DdLMgHDFQuUyP1eEP2unPXRRzosSSoRcLFWs61mDU3RmgSX",
  "key26": "5SBGDB1UfWDaRJL6d1Jaer5j3nW2CFueUBv5xSShmDFWYdn5zpjHR2aFVAKu8u8Y8atFxfb4xheFYdyDDPJfCJMi",
  "key27": "w18BrM2ZokyJV95T6ywEqnxiDrSiRk3k6viQefNni9RcVRZmAwu8qbskL5AgqSFQ6Pdw3kMWNMb3tUcjDFwMVSj",
  "key28": "3n4pQFyrTi9o1pmWuT6kqV72xTG3ZPcvKYcx7u7W6YTDxfuAXF98XzTYg9YezRo8BqzjPHZ1aV7b9RDV5rJMXeS1",
  "key29": "34Av9jYyq4xPpmEPaK79uWJrXpwxLDPMmd3vJrWDWparnHjpYsUmo3kkYDBimhE2oLuepyDVz9ZdDDBbSHLxfdrf",
  "key30": "29SCBUNiHTfuoWpfh1LnLeoKU9kMqPKAjTXsdvBxcRsMzqEk3bRbUbZ3zagnP5Nk2K2twSAmpUTcpsoGUtL6bPoA",
  "key31": "2bFZ3285FTSbG2WWFdryoxB8mUn62ivooZAgVRSWySoeALnx3pqP6x44Cs4w6n7NxXooxzEcdoTXo29fwY1srteP",
  "key32": "3BMaASaw8wyi5tccsXe1d5zgBQwzUUmnAiqP6pHcDHiywWKZTeS9WSA7sQbUkBdETEYEnmEYQANx1rUM1r1nnyDX",
  "key33": "5Tm9UGHwE1LFQBnHLZupdb2rEZK3p7uvjYJedW5fBVvPf1aPKQjtdKNLvcKdKnwYfjE9Lf9HKncY3W24NUFKYNjw",
  "key34": "2hDpdwk73z3bCoyMvXiyWDec7ZXazBb61fMiiXMt7XwLsbAknMSofFsNwkfTBsqSXTiX7duiLP8cJWxFVJDwMLfJ",
  "key35": "3mnhj3xyoC4YXmSDmpeLVhdGmQRhjenPnpqiMeB2Ya4QMamikh2XoojWxEv6WLLPggTxRw77zNDSQFrvbs6MD4u7",
  "key36": "Eh2nFy5tdk2QdoAuXA61XqtUjqRuDBrTbm1eMLJPrd3GhEGtKQZrV49W16KK5eYqqv6rZyo4zpSfXDjrbricEej",
  "key37": "4uMn6Kkmu3uqyVXZzngmHDzxMpbhowRDhieAiNH54wo89zisNLR9VcYfb45yYsvUi3zqeb5M1aQjHuuihnY4FkWm",
  "key38": "39ozypQ936D1VnDfosoDTNxzJwLPQYXPfueZbWu4HFkPDAEC54q94FUdWVs98t53VHborX73u7xw72XcuCSTfnfg",
  "key39": "5THrPtbFjVpHsEF8i6Zgr6PHZLUTAj141iXmEiMGmRAt7SdAQSMdTb3UCqpXfWtVaiNWtfgMD9nuPbmgL7pDsXSR",
  "key40": "44yecWLiQpafAgifiv3j2TLQTWdcuEAUjX8quw8yrNf8fvwtRh5CUWnWdy691bMjH8ZpdT6CFfaa5T91PLgH7Rwi",
  "key41": "zHZQZqErWjqBaZi3TBC353Avh7gmeWByHqTPbTGU1jMmqW5nzhSCudWwsdETmCEDPqNEvaefdoeDNoRMqcAN4ke",
  "key42": "b5QaCxRrBNgskZX6SESUP7Qm5AP7LyGMUdEro56sqK25uFHSBpbiXKW3gfmA8yGkWegXE4qhVvyR3C6eWiFcwPQ",
  "key43": "611ryf5CxzLsiwBpNFtGWhEJt7TgGDJbhPHMJNMAW7swsePe8PdSNoaWRFqBussvJ8FNcHHDWmPLT3BnmMdNi7h6"
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
