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
    "4d6V4ZcfNYXojQgzVn7LKyggSTRbUBZmo3zb1irNKbLpYrKPqoHPZx7gDG9PFwQqy7jiRUkTpghfTvm4BdXfhobL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GaYhiuvtSLXQQD255T6ehTQ1jSho25CCMpXQVWMTs5n2uRXTLa8GPu6CmNBHdmm5komMYUM8QSUWDePoc7unPm6",
  "key1": "5usTun9NMJHY9EpmZLMNG8NXAat61sdiPt1MnDNiPckTXqW3wQDWE4Vbjrcu1wAh5VuEgGezoMhsZCTeBtq5oLRw",
  "key2": "2ZTZ44AdPJ34Xaybw6vT11zsfM8iXq6qumVTi3REgnVEficVtjR3uYawRC6m4ibXZV7er5es9nQdi6PRYkPr9mVs",
  "key3": "4WxF5LXTyBcBeyTB6JUtcvvTxjFip7nbXjFGnKRmb7GcN81GtMV8DH2CKGWJqHySGCz327T1z78kP9aCjq4bkW3b",
  "key4": "yD3XgQQytQfWPRsjvipm1745ieDpVmPuvgT9otEj2xuvdbRLXxARp4aRcGbwe2v6KLMPKRX4aLBRWwCVTr1Cjcj",
  "key5": "C7SWSvWaUc4VJjcMY6kUhZUm5ZERzSbhS6DatqtmNqk21NQD5cssa5qXCq7y2AkW6eJ4agnZEEqEt1WNXvZbP64",
  "key6": "63JsqdzrHdii7AS8QGvT2JdQu5AtfvqHswpGm6k5YdZEydZeiF3TwtmZDTGj5LKWBJNm88o8oAM8C5Rx9EZwXZH3",
  "key7": "3praeSxdpUtyd8Vs64tPaYmtL475S9mm7WHE3Jr3hVDAbQyr78tnVp5zNjUaDWtoeB4kGJTcvH82tXTEuNX1Nr6z",
  "key8": "39jPN8syv2WeiesKY2jutRA67K3tRXSeeDf2xKq45wyy9n5Af2Ad5LWJp1nQKMhPkrb1ecLWd2J7aCeXSqFkrFs9",
  "key9": "43XR8mySbpgVfeTH8m3zR7gk6ecTZT4HCNJRGbBGK3p32GfPqminEev7VMnEZNwH4XyxmGfDNWLbiuqQTmS1LZha",
  "key10": "2juo4iCdMcKbwan4QgghR5jMf9UX61pMMP5PokYTkBAzDXo4t3quDABXsroEm6RxxyqnWu8ozUueXQ9PiQf3ckcS",
  "key11": "4JzjcuJ9yga2UkaBacb7rMbGUKzmZ2w5nSuvCbUT9wYoRRwz96P9gPFp32cppQpos6t4TeVw97dd4ugQP2sPtWta",
  "key12": "pL3w8HJCGs7zRjroBqqqcGmhMNVerdcrwjryK3G6B81BH5rQf9HykhWNQptxt6wWasBwmHT1T7UsdtT3gH4qNVa",
  "key13": "61VpFeW74ct5tdzrCyqBNqF6Sqi4Fr5tWUaJ5hCDCG3v578GtbXDdMAexF6crGt2NDFyktSXAxy6TBSjCHpp3sNB",
  "key14": "KoDdAXkBWJPSyxpwDRk3Qjz7ZGnSUK2FMd1Ghv4SEHf2hdRN9ybBwU5ebetY92DGYJ6rc5gm6i4rA5WcBdVVot6",
  "key15": "5cYzAMmGT3WufJuKPUYRSsBSvkmdssz2h51wjwByxWmbmoygiXBo5zzEfiJX8bUfTqjD6EEbP1Z6r2fEtoKGsMBc",
  "key16": "ucCTiVyonnTPH3N7ruxAyFz6pJ3xAcJFheLLBCyzXGHyFQPARM5Zv9eWF6jbTd5dC84fciRUxQQBpJC9MYLtrTR",
  "key17": "3BUgcnfJUXQ51PHcd3JBzpsJ5WP7nhKknCyf4cq2RzDApDKZnSkNx2s4dm5d3njSVGba4FCW1cuR5mrBcjQe4afA",
  "key18": "4MqXqhECzNZjLriPVGWJJqCiUfhiZBWrEKN95t1UQWgigYaRncRGifPkqjqNoKp6Z7n9cG3jK2FP9wrwk8EEycsJ",
  "key19": "3jCH7xXa4RvuzRjcHN9KDdmm5Cz8ZXCyAa698hbq728CgPKodFV9MwsRrmnov2FaLZuSB9ZsXm993dZ2c3xFAXxS",
  "key20": "39dvYKisuHXcpkS4uQKgSK9HXrdbEcDreArnzW6B4mTzo9QBMhCw7NpmGTeVQ78hGahcTUGVtsoyHvGMZ8N9vpV2",
  "key21": "5X9qmdVcnD8uLPuiCo1VPBkJhQbc5tbWWkTZKmJt56GP56XwuvNLFVaoPHCdn7Wt4ALcqtC2dshV3ApNpcyTqMqL",
  "key22": "MNsbaug2HBJo4m5KZCc6rQ9sYvdbBvbk5xHnnCogDTnEuogzJZ9nzYz2iwx1TDP2nuajceDfXBiTcSNW4BTgkvz",
  "key23": "2bovYeEPZsEfY98KSEYJGH4otxZz3aiMvMuXE2j8cqiXi3YGYCPayBibd2uS7mVsvLvKJq7Jqkvj93rEjAkq6kDi",
  "key24": "5WRXzZ7dufvWevWPcVaBYD5kWBEuDV4Ut5mbGJjLGzXSzdByFR51fDwDUNsv9fT6QJm4kt9WXMpno1tTBbSRBgr4",
  "key25": "5HjB4AFS2sDvx8Cegq58FZesnj3DdNsibKzYkxwVHLGD66PvsW9X1aRpAWRjwMAweivbT7ZoH9sNXHsVCbr4AS3a",
  "key26": "2ouuw2dh5x21k9V3r9TVyBNfCgkdcUY8GdncWvELBQ12P8T8HR9MonbBjLv3YuqrcMctiFVB11yRR5awKWD2P8jH",
  "key27": "2zckyox9Z7YpgR27Q127xrJiVXR75NawV9FsUMvNMGAbEahARfCXWYmaCFY6tssigTCVuwMuCwsApGW8WGhmhkpZ",
  "key28": "5mqnVfq2qDqp8ShGyvPWr71r9XeoCCm55ghkRZx9NrhNGgva1W8EBT29MMEHZk5qoNdA9dFxEQwaTYUSjKaNF4nL",
  "key29": "3Wrri55jEUuyLYv8H5ceUpJNrSmwYrxZLGwAYEqSqRfpgMNXpR4xo1nhbymbmdtLbuFTrEXbYewFQ2NEExbrCmpq",
  "key30": "5A28CxgfHzQPB7R4PBmbhe5Px6VA15YbqyqqqyLVWCtEebZ34H8NK2roqE1u5f12D8sA8MLkEFBizDfUiFRx1pqf",
  "key31": "64Ex2NQVr6axLbVoX1KuxRN6Q7oqJmNEskvc7bKFV2iArJKezmFQVzSsTSLmB2rytCh2zTqD4ae9ykydbgZCqkH6",
  "key32": "3yWFp9WxBm2uEPU1QCaEXVWU3dJri1pGA2F4axdCZ3KsQpN17LW5wYM3UQRNVugYkvgHf2quTFs7Ti85vBrzoVPF",
  "key33": "o2oF8i2Dv7SPdLWWM9eghWVNpHRG8Ex9r2g21JN5TnegjemEvEVCX4gv9k5jxU5WbKLPGDHZdR9nK6fbUuQakev",
  "key34": "59FKJWBvbZyqwkB4rULgoLkRTcAFDcsW7UA4U1WEzkaw9YqTDyHu33QfzdkGFdFXxeQjLugC1YMBTTzzN51XwgJy",
  "key35": "3dix6u3L3qwg9ZFAkgP7wqrTwSQqemR43PgDmYUizBxCQ5PcP5VYvx6H2w5icX7riQKtnj4of2b19s5ZGoM5pY8i",
  "key36": "57GBKhCFphqJ4nEYeTpvsB5XsfH1KUFgQEqTmYwqdAtGCCA5Up7KbAqPQdR26UAEQv6VTYXTUGYoxag3888RJU1m",
  "key37": "5ibYQG3Va2BKgezFofpUWu2CQqh8MwEZ8foKZe7o4oSQNoGYujj6xB9ygn6U2AwUpMGJMweM2tpmuQtSgGXcgRgo",
  "key38": "2DdcDXDJF1NMH3pyWFsyRKMe2S867JjEsExBitixvkMYysosgj52N4n1EHqzMNb4RRycWUk5mN7pV3Ytdhy7YpEw",
  "key39": "3uXGbrt44UNcJUTGLTwkoeMXczX5XWGwMwYN6KWPtzfvdmv73EmnAny1sgBKCeGM8Fn6GHf17kGMo3yb2ABZWB1Y",
  "key40": "34XYL6yDEx7ZLQcyPBHuHmu1sc8pnGo4ekiMxw31bwMHTtmh8cbnPuacHUndixVLqbVz4wjATJqYtHrAoYTvZm8H",
  "key41": "jewKswvrGNCdTnZ6fkesu32qChWf7smMC9e2cF6rrJVG8bu1QJwrzTywYP99wmWSGDnTojXvsUiftoR6hEQFCdS",
  "key42": "5JBtMtJgpuEAVQUfbzACqxKsNnftU4e6sA74hcQY1qz4MaNRCZfXVCz6mfwEPeEqQHtS7AfF8RvwVFwFEq5VYpMm",
  "key43": "2kKhQBxeccjNJuBvCS4ZxxjvY275kV8Q4Nnc3eVhrzpA4HBydCc6u3pWyJdogojDWTREtG3JY8TdQJ6pGUvN47e",
  "key44": "4Ywea8UpumjoBvgia8UWdSXwt1SAt1Y1vXuF7fbyeWKPJ8jqotmvUSF65CDJHWx7fKga6ar8149FJ7piQnK5nyVy",
  "key45": "4sW5f7jQ9b7NVLoDZypL86tBBBtie3HGCAve7wun9wWkiLHGsR3ZT2Y9395tM52PnaSsGK1LpfPMmhuycYQiXxTc"
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
