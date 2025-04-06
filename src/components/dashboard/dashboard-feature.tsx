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
    "5HpnK6r5xwfP6ZQWbLjftuPfzQuHedpwYJcVzr5vMuJsdAXqCqo4S41TjJEatsN4a2PJEkTFRVxWVxhwZBzCnuNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cpWZZQzu8vjDbnaMdSxHhxeFbrf82jWELtSoaDntRgaoyYcbCHn1eie8iCBej4KSPvBsFcMD7JAV3WQCwxuCiCz",
  "key1": "4Hx7xeT5QhAZ8u9hXtMLbvKmDMxJyFbCJsdk9D8bcLGvFCXiDN14rbdFP1vJ3J1sejvabZqsUJsFAKe7H3PM3Q2T",
  "key2": "E75snkxEKXZYpPsuK5Ludcvq2rbXLQaL7Y5TvzWMmG22dB2QEXi2QbZUT1QdxNbGDQeMhYTENxTCeX8BKHpd7iy",
  "key3": "jaMfkUHQoSyuN8xb9ZdoDUEJwnYGevHyPiUi1wVYWJ9qwnpUgaK6MsyZZdZHduAzpoHqvJ2A5F9ipPcJpR2wgLh",
  "key4": "5b5M9Ysyn9cFWeU8ggZ5rMGp9HL2vjk9oMXW2zRraEv9HmRqwc2YEqoVXmfWzdkK5Q2bjAre7XYvMynYtuy9hsfZ",
  "key5": "HTXB4xTBrgyUAgtfVBwdW1n5HNkDZyqUzmFwxDQnUdLAnhRXPoUbZkA1uhEn393ZhzKBwSGvMh1UDFeXFP9M7wU",
  "key6": "33sXDHn1fgunqkDEWYPgfaQm9E1VZJqCNk52AvhFsRiFHmhf6Xe6UUETNreQXZGWmLNsUy5eJg6kbd29AAyt3fgV",
  "key7": "4u4jhxHrMfHdEJV43TturL4e8UUjrNfDDyiiMwieZ9JvPvdbDrPeqi25uk9mN2yT8rTnHtydJv9pgZsiUJexLRtr",
  "key8": "575Rc9b5NBiMTHqWzr2L5AnzkzkkwLcD9FYLK2NXzMfAp3u6XLtrwb4ra8ChwPKr6GwC5qzjmdosYCRnLCCLboTn",
  "key9": "5fD7dPwm83dpZGN3NxZjbJw8x2qA3n3AKo4MnstpNPLtRiK1f5qYzBhcTFtU6VQVX5T2A9MaQniAz7BfPaUrBBVG",
  "key10": "PFZWtgFkhtnmvYvhrLWXneEHsxaRmVnWaeqH7tRNpMkaDDwPFZpky3cxZo1R1rW2sDPxmb8wC1uvfMkwa6XVzuK",
  "key11": "4XodnjRsXZ95cjhNoF8owZZEc15xFRQMPmZuAymx7M2sUhwcjip4CWQQ5aawPAb4cUwzk2PeAQx4SxsJG5KfRxY1",
  "key12": "2Btc7jvHAo65obVDpmecF6fePi1erVYJPToVyWecrstAjHiyCmxUi3zFbkkAS2vz8wxRiryzU4VaLyNnq2erC86u",
  "key13": "55Axof6WdC1i74qrhtC9BCq81TvLFEhtT7EA2R1gDT2EupciuLLdPKdGdvfdEDr5beNHQ9jM5PT1UoL4sTMeVbHf",
  "key14": "3TTQVbcEmrkcCCzxAVQGH6Z4ZpRSWRRS6gH6vUbaXDJFa7AmttmNqdbCEcL9BCki2emwwJFeAjS6Bid5XN4PskgN",
  "key15": "y8PQjEjz6SBbtSgoa4dfS7HKAfj24JjwtCSEHC3UJaz6zXcDQrUpEF2Msj5wUgcw8YRSrsoxYQnfp6xbrBJrDDf",
  "key16": "3SRKYkLTGcJTCEA6RmwLZqquA887YoWeU5g4Xk3o6dMFS8vEnxm3kbkzPukCN5ycvuwn6hMtkNkto7PrJz8ER99P",
  "key17": "2xx6S6KTxnj4Ece564DVquTWhCme7pSxBCmYvYPbjEK2HZCqwH5Qv6Vfs4Q4VujWM6qQydgAxXu9ZMsPPiEwmfXX",
  "key18": "6w5xrYZLZVM8dbLzDiHZs5z6r6JFptZo2sXyBfohMhdq1BMsatxCtRpESP6WAv4Ri2HwxBa7XZMeUUyoGzwgzWy",
  "key19": "tUz4jM7SQwLWMFhfyUwUBQLVSj55Qik5JD11JwHqXspRd1M1viKaf9WpTzrW334CqNUqx2CCKVyfEc3FKes2nn7",
  "key20": "26dEaqKVB4GFddCMoYjZyHoaMP4zSP315UNVL5uDGYidyRtfnMN2fhhxn1neKALMt444pNb37VCPsZY468SnQFBY",
  "key21": "ud1yqXcTs9MKB16ueZQx1bhJd57eHoSr9uZxW48a4A3j8Jxr7thyt2A62WGLDimnDeeRZyXYVaujpn2sUVdiXfN",
  "key22": "44sbnUb1zyawMdL7qZ4rxbWhjXYyKoHdbYN42HH4zrFJw4iDebreZb1E2EVL7m1bGqtswSXoox5iE4KCg9ik82VZ",
  "key23": "39QC8r2rvA84iBjanQsRfxsu3D39Gw5xd5dwiRtNjaFm2zE5MuAXQCiSuKAH89kT4XjDCzz2JK5EzjmztbT3At5i",
  "key24": "3eKPF8k6k28EGXeFTqvpJQMkh68XkPdy6W3VyCRNVm5KNDLQ7fMWhM3FZxUUpTuzPcYBKY5aDBvwRrtdi8zNCsBk",
  "key25": "2TsfE1RakAHQiEWDdwLXFaEJqAUX8enfW9jo47t99RYVV7fomwRRBMNLvhQn2YeLb3aNFjeLNAd8SgwrkJma1Ugm",
  "key26": "bYFNyEJHnvSMcxTXjMNFSEg2zpQkzFKjhUQDAehR56wgsEgLQZLpRrkoS9rdPHudVPaZs75gwk8YupEWMESnRah",
  "key27": "srJK3yGrZXrRMFz55fLcRxmWxDSEgcNDcypAwfxxABiFqfmtnNW34oJfWLnjWtBk9yxw3UhJBhfQT7wN6fv7RVj",
  "key28": "26zLuUBvbToHawPCABoav88Vev5tQJdmDjj8peXDBRK8DEEfk5njyrvPjM7ACmgPK2SDi8vrA7gwR1iwJU98NrQU",
  "key29": "4j8gYyLzbwGoA6HGxoWWjbaFXDGUxtUQ3BcSFisz5undQERaKUhByhuqZoUfE3dFThqKJMh6GJhPuqtpdMkxnaDv",
  "key30": "4JLD8zdgzjm9B1eoBfG4GLNeD6EU6GRTNjdSH1atyLVCM5pdQTUyWVG1mLvrPYSoe622HcDqeru5ZCVg9fK34LBs",
  "key31": "U2z78mpXspyowWfB5MYUHgGvi9xGeHJXki88uqmkniJHZY3cR4itJQPgWxHsj7pJ5rTC7KpofdYcUTrMD56EAZe",
  "key32": "6LMtZvpLHEAscDaFERdkUd4M8Uif8nE3LUEzYE78dgMv6cWhJP63ct47fnQ3A6TxrvVcf7tNkZyhaHC5GSo7Zvr",
  "key33": "4dKSALNfD1t4ZDw1tGo7jqcXn3gsFhNZhSnCxumVX8T87rEzPEg4MuUneX3HJnzCChEY9vCZoinZrZkCvRQCgzE2",
  "key34": "4Z77qd9CmuiNt7mYApRErFnEEheZw2Qz5FraPYWQDYhE9PDMYWmGNQ382WhPBUjSH5dFCd56CEUXcuQJ99SnMnC6",
  "key35": "52Ex24EDhfddkSuiV8Tk6mh4w6LoHJmqa7Z6WWHu3gV8nbotngRBi3zfDuUfd5r3gwy8uaWyVmqtFFTsf9yKjmZs",
  "key36": "2sBdxDVUwG5G7s7XcDskKiShEMoN3oKJEvqeYTmHLTXRALRezUnsPqFf535NLS4nfyXZ33R645sMrrFU4cEvgZbZ",
  "key37": "5ogbNZzhoiPUV9k3XQ6eVh5LjrAgJJAhE1BGE8ZsRFmYnURJxNH3a9xVsuBFXqGab94rV7GcVUog81XiajEfvp3P",
  "key38": "5t6y1KrE4DeWqCeo3GDgV3QPfm9WXKfvCmv2Vm373Hysa9Bc5bA4AqNHDeys31SCHPo8sm9fx1ADHxFwsvhBGbJh"
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
