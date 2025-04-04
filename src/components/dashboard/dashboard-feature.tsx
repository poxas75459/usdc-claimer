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
    "57KrKrNBmmQ6AL58sEwsUSzkpa8Y4w6ptLpyBg3snLNeneo2HGEtW4BHhAXfaWx4TpY7eY6hU3q6nD8SrGXYJbfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RRgeRTG9GGnB5gUi68Z2QHinCd3ioghziioMHPTGTjsdQVUev9RL81i84BPnbRB3Y4WbNVYYZ787YXiAwhq9KEG",
  "key1": "gfc9s9rq7aCGyiznBKUSXjiXhxFdfHaXT3w5wcAAgPUeWuJzwvoA5v2g8FSN9DkDXnvuFBpAcQMxxhaaQeCB5js",
  "key2": "5wiJLbp34ymVaUWVbevnxbJTcbsYyBKJgATtzt9ognpHEqoiLcvRUhpoSURAGLf5KBRVPEKLUapHi9Xn1fspmeNS",
  "key3": "TSAiBqbXPLUKctPqJRUueJyt9BxrNCuxQvvxMMz1NmRzG8yhQsdaMEYHA9aqjbgPxmptKbe17KeZWL4y1oXnGz2",
  "key4": "5hhabS4LPkCMVq6KUmbqtDo6xDN8VnE7sh788GaXehSEpzqHrcHoqJFvv5F7Yw77eRVStPqt6kFVh6PqFvk13MmD",
  "key5": "5UCZQCjmatZGpCQC3VTpjeiB9qVCgiVMBECaTGEprYXprK35bVfUxMiH3cAdySqSsLcqVDzN6CgSaV998w7fB5Ui",
  "key6": "1YW8r3pZ14yYWBDgVXgi3iNoQcbQL1pwKQhoi13Tyd1Lrfc2GrPuCVakGg7umehUdHUPna8PrTRmaXSfY6FPUSs",
  "key7": "47hgtD9r36jE9crAvmyxsmPorat5m572AXd28BzynZ8HqSY8MD3p8tt3Pe1eyRq1JjDapXMbUAw2fQTsw3ZNYndq",
  "key8": "4mBg9z37cfHUu3oqgHsCacVsqtDmU5v5DYXg6HS5hDVS5p12txsnWhq2XaoqgPCSAkYHGe4ZnQd4ypMxkHPxfQWL",
  "key9": "4312nWzt5fDwc9rRX2HQNG5qx8wMETqHecVcYv3DJm62nL4KYE4hH4iRLqP62MD1MMQwDD1LRm1DwFBxbnXS22G5",
  "key10": "4pYeuKaBH45nAmSGgv3RDKmmG3bKFaxNcHc5gmBms2sNdW9tQ4Vk9Vg26ryC7tbGP1neNU9pQuSpkaXRjmUNrdD2",
  "key11": "2qwc437yBszX6Mju1STc8juqESgihjWtwkVGeRJg68j9wQKJitmu2VV422qfd9WrHz6k2Dt2su3z29GnRNcZgDar",
  "key12": "HhDC9M1yRqL3hFFX729diKy4aRR13JLPQqMsqLF3HxCf561524f99oNNzeDt7FueKYaBe4bXgPMfLDvKWND4wCA",
  "key13": "HTZ352SekNPp5LcoWG3kRYo5kEM2xDjRGcE3jJ92xHQP4x7nLQ98mD1fHDEaAqVjBuurNLKQ2kwBXqijA5Lmz6h",
  "key14": "25xkZY4MafvfnpGyFwfBCXreG4tY21FzS8PARhPNRX3Svc78hefbHNqq4K49pBRGZ53aT3KANLzDUZAYMD3h2iWf",
  "key15": "5KGEKpFeVtL8KfeANGwenmxJLbJK9dimFJxeUZEHjM6DTmykLPjJZcT5yKjSYb2P5YuoZvNZZgrGjiwKjBVAVuJU",
  "key16": "4jGCU13PXR8irReTtKZ5NHaBQCJPPoc9M48HNL1FByGLGvqRzBvWNUJVn5aVVuxajhBQ38dmiCL5W13cegNhQnud",
  "key17": "62JhusL3sUxz7gEV1fg1ztbg2JforSS8jK9cU7adVAMbDErgJZxk17BxQL6mSnLsWeWoZm9Y9zjHJ1PLyDey67jx",
  "key18": "59gdgDbKH5wMCBpjYUhtqzeKEpVL4NasyV3EnbNRRw1rknb848DpAo7X3r5WWDMUafm7hsiMqtcnHXZaJrrwKzWy",
  "key19": "4EU2ftFCRB36xBF2GaztP78wA8ENbCvCeQBTQcf78citztiiCwz9BfGYoUt9zXBKBGtmpcxX8CP9nzizBkabZEYM",
  "key20": "5gU7Y7tthSE7AwowHMG36aDbnPrEbycuUFXUP6dy8hcRrqMab3AXyCT9hV37nHtu64U8vTA2HLaGghu1mPdQRkGc",
  "key21": "ASU7W4YwJioHvrjTHujmYKGgVe9uusxH2QJ3Mx64t7WXWh8PdEGdP6w53Gv4crhRwWbtwpGfg19ERfYskz2PVjk",
  "key22": "42d4rdUZkznst7cx2Rppr1XCm1osTtg8r6TCXWUGCA5UjwjrVWLbuhogYwkbddwv83YCrrMaUoPeMYt8XENbbhXL",
  "key23": "4YjnVuEAqh3BMBYXCheSJzg3H45rAJMcQTnXfedF4UMVCVxzuFkNDQmV93bedYY3uURUpE8iNehheq69as7Ww1VC",
  "key24": "45eDf65rjqUET6qfdbfLA7gQddiPd9964onTiz6P2rPH4zsYzWFYRpd3riZZZ5CcnReC11QCtAwtRyAoJoAedyvr",
  "key25": "VsiN3HYdZhaZQ7hvXaEkqQowoeVQRCDjnDuYB7ttvYtUfh7hEU6HkaHRMSkmWVUn6an51QeHrwMux6m3Rtsjo7b",
  "key26": "vQb6JqrDb2kdAMX6HMfgfoVybdd41k4GcAJVFXfRaiDghv4oPfQqRT697a9jH3eZBSfe8g6LoVaNx5hk6iDerqd",
  "key27": "2ddAGzyZT3NzD63JPcsmGKZpUE5VBqwVBaVACRCgkWVPVT8mjo7mJXXJsRpr7RXFAx2TTfhy2HrNEBraoXk7Nqhw",
  "key28": "3JGESJ2kiM5qbsC936KV98om72Wn9kShWjbZHwdiTzo5UpSDSTohcKuSx4XMEJSyvR6dZ6nwmvurH4SJ6SvDUFUA",
  "key29": "5hgtRHy34CuLKZ6BrRXehhX8XFUKK6yyC6hTLSNcBMzEYZVGBXwCKbuZH4XDgh1o7HR8VRNeuBHzrVYGamhEH4hq",
  "key30": "3r9zXesvxgeKVFrAZHvxr5svtQuq6tUdT3kDy49hbwJ4jjrJ7nffuLnHt27ERcBDDG9xFK9Mz6hJBQD5wy1WArbP"
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
