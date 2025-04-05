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
    "5wmUx3T5CEs7zbuz1BN7qc6YYuxZeAQ1mXmNt8orL5T7oRdNMy1VXdKVaQ1rRGm4tWYZ1kyHTSY9wQb5nMY6XdP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VCCXRx3Vg8MvjF8H5fHeEr2haM4QNruVffejK8ijvcPdumq4tN6Y2VFkYkj4eJMNUMQf51yXM2vvmZUcxBe7L8m",
  "key1": "icm2DVCqagNrwtYZR4hu3DSVAix7r66bRpiojXxZv2XmDxvAGpxWZZHjAmiU4vksLCCCWA6KTaDm9bK7BPoeNW3",
  "key2": "3T9EKVLsiRmKf96SVkE8KUzZZhxW13ke6rJ4uBuhxuXvB3qxT9zNFtvfVN7HsAsd1VZhHPBsdj7ZgPjWmcbPMd6E",
  "key3": "FkCgMSd4gmZrcm96HZUEmm2HnSfegSJBWUvnKGH12G5a9sRNQJXZNEwaBTNSHSF6hCwnfvHpRv13aSwJvBm8PHH",
  "key4": "3tEueHhYmqGzfYWrAPrEZQCWhxuErgcgg6RhfxjtYzzD48EPj1WRXHSn42yLCY7fpCdEZ2msDYQrjiWXJD18pGT8",
  "key5": "5uN1rqko2VDA573pRjWg2EVFWyeqVi567eDSpxv4GaqGaD965CYn8AfzgSRtRjWzybMDdtjnC28NtmPCH65uuFNA",
  "key6": "44LUsnN2UKyN3QLwE984H4TyVPWomvj5WE52W6D7HN7bUv2N3cCgE3Fivrzd8ihzWR5ENy3CDQLFPhf4Rnm89C7i",
  "key7": "pbvaTxTTeixw6C1mK6SkQmX2c9wkUsm6mzu2nNcME6xVewni1G2xhG57TPzxGHZ5PxQd68sywiEjptvPR27nzLx",
  "key8": "5ZdYLd5TDgXhwofnBPt28RLxATq9fJnZUMF68a4tvDSTsr9xC25tiPuahmPsF67oh4Unfhrqy742ahxzFdUSnoQ7",
  "key9": "2vkEqoZPwL57EPx6FyB3F8BXRMnLc4qcLbw25q1zHK32W24gkLfJFQqqV5Ldcr8MgnGr5hSrv8X2sZki3fBfgF82",
  "key10": "29pxkXmAGoNS5PmhWMfZAZaoPLZUrnMespghWBgyuoTRa2r4roxXxocHWP3dASRtum2pRf3Z6qfK1vdVV2jWTdok",
  "key11": "4gMemXFwz1bQbvCpciLz4VoTJ96VkpPk7UYpVXEbJkrKPYH6h3SNTJEijp8QRRR6nAUjBybkhzzLFGAAbEJUsLiW",
  "key12": "4VacRohkBHsei3LSKyxFXMXCj9XZqYybdmkCjfmbJWqd161p2qXwzd92KAs4yPyBFW2gWmdytBdpH8Y49wyLv8ZB",
  "key13": "3kc8M5jMGYuhBtfVTbBWHtYpx7js7Pm8G7FW8Cxs9kF9ncWo8ccWmcfAwgoheYPsqiJBHiLkB8KvVBQB92ksCHun",
  "key14": "66pNovenXBVXrxsnMsPqVYd5NgGUwyKV4jneAWQSeWi4QM4wvZzBWYLJTDn2H2aZuHa5fkhQdYNmRT3QUCDbPJzx",
  "key15": "23QmesrU9uZCkmEiB8VZdpbS7axEEoCZP886vebfGcngus1iJ5y7t8nkDywv3mLXhgcmzenZS7nunVymUfWRV9SJ",
  "key16": "2WrkJPoiGjkqQQoKADhx91UeCH3s79y8JdLUhrPziu2pCMhoB5yX5LFT9k7GMuV8gtKgfDav88WhPgBQbo55XTv1",
  "key17": "65Yn9Fwj9rArD6bg5g3PSJVXbDBWjbFZgHCTJvcfFgi4gGp8Zw5kgPzpbrpXR2bbfV9mLHSkLiyNeo7QMMcLfpw1",
  "key18": "65p3ddjUmqf8dhDFnfaJcp9D313ukBi8qgqUSRBF9ThBNCgtjbK2Nn6HxW4sAa844imHMQj88pRKPzCswrvEYhTf",
  "key19": "ZzFA3L4Yn2VQGRjSmQ82eSTJyACZt4KgdXbS113HMjugSdaQBMauBB9r9VYBLrirmGkMZnMpBF8yVgdrqiCqxp6",
  "key20": "4A9xjx6hEURUPWxVRyN376R7geSohNTxV6uKeR7VQJDrkALQZNLSKRhyXnLBobCMh9DMrd6sFXmn1fdgixVMFTEC",
  "key21": "TUgkavPGcZLuwjApVzGXrFmMnCXfqFXSyBGnSmf7CpMyMnDTonMQMAjDvL5UtRXcLwincmoYepf3oJ94sFWJNW1",
  "key22": "qKZNcpSNArDHyBwE2LycwWVMZXVKYhZKXCiFcCyuAjxPwG74KbBzcSgV9xsZhRwX7fnA5Z6agreu8dUortvi6u3",
  "key23": "ioQhwscq8EaKNjYLY432pXYPJ8VAU3MRtMWubkug2aksPogcD2WmWiptXtJtwAdo9RWAXQNmKgDT7ToPM9zkwwZ",
  "key24": "3MJUJ1EonfUj3QY36b57jbuFSWTsgi9paYDD8xkUcwjVQNu9qtf2uEXb2kxmg8UjozzJVQNGV8ZvbX7yAyrS1UHN",
  "key25": "24vtmAjJ8EHzuyPmsY7LnZxabCgdEepC8ZGKUmYLJp2oDxMPqCk6LEbYmU3hJSjVXEnJMJZjGgDBZ65N3wSqXN1R",
  "key26": "ycqqYkbCC18eJR9b769kdyPoLEtwr45UwXo51oWTkVBGZcaEgbi3qZDHLAxPpjZQAvRafLS1mLzr37qUY1cknt2",
  "key27": "2mWKDqifyTytsSabKs3MVv3LM4N4u8vH5EJkmC9Dyfzq2HrcZfzSQKxoBSjBUa4Z2CUCY3aqdBhGpyqGz1Ym7csz",
  "key28": "64sdAjiWMgHEtJk1MrPEqmC3x31bPjjAZ4nXtdWxuemdLf8v17aAKbyKmTNNpb7CM8GVhCPBPhBBZHK996gGUjM6",
  "key29": "2KdHmmN4phznGUTSNp6XJw7gjdpTMqy1H9AKkG1bFAr3DVRmEFfFXMP1j8rSacKmPt4xYLmKWfQ2DJ7Rp21Niqxc",
  "key30": "3UpNv4USYwaxQx8c8HS2gbPGDQuPT84bHQwKWMS9ZcVzCoBWdpWCxwWcpvPvwHJTPaQisxy9PJ4vBEoeAV31Pja1",
  "key31": "31h25XbXsM2KKLAz5C53xf9X4CfNCizYADihjXSKZYFNLuBv9wHqWMaFXyfMQ6MLCY3QZVqSGmLmwweDMCHD4oRQ",
  "key32": "3ir1t8SvctuNNTrzNNUhxRpFNQD4YCoiotV9BzouneCHUB9zQ3mXqyJRZ7w4a1gWKaG56Aj395FMsifwFZeZsVfZ",
  "key33": "qnPeeacLogyENHnpvoLctaEqDM99i7GyDbP4kDEDmbzP4ttrcubdnS8kNdwbJTvoVdfT9e6RpFAF3NRdRLsUZKR",
  "key34": "4Q9oJYvnWhG78DDfEaS7XQk8dH22993VbArVJaEZf8Wag9Tor6ALQG1bzCi3itVco9V5zJ7DJVbUfPNYGkG5FDcK",
  "key35": "HYgiQdRhfJbkcikfgkzqps48y2ydmDEJJ1nk1VjbbpDFQn54diPGTavfT56Tzz3CZFBvhgc9fPRTbv9PCdKrNdz",
  "key36": "mMcVeCQFGojcDm6DFQ91426DwfrPzznptDXqoGnhMU5eencQMuJycc9Mk8tB8eXDkhRMjG3TPh81V34E1UbLV1q",
  "key37": "3hkKvV7ncrnXjqqSoxLvyifj3s6Ajeg6vvZpRNHppzDshUXTMWFh5fJUbYhVEqCMDCMVFe7LEkuvEFwddULzG82p",
  "key38": "3ahasFKjSJd3C1PnBPYcTUsBFNTyQwG2t8CV8wAz1tffPZDEVzvhbyFD9aEDcN8wSoNZoJPvxxNZVZvC6y2GMXnC",
  "key39": "4r2aqFY8anLA455W1hdyGkbz3FgnThBPFysDu6NADfWmZyHc22AazyySbxhBG53kTtWV8hsMF1J8PZarV6Sd81pF"
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
