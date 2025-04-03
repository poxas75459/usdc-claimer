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
    "TTnrjGwUaNXmHv3cJkpG1qwQeGA5UBVCDu7p7nK6Hpog35TYxQcWtAHSHLat62BDEAmQzN2m655AU8wb974tJGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Rwuy5tNnR3xyMv4AmCL1oTirsW1KrUjcd5ABUrFtPsyFt8UB5EQqeXkrq1BLWPZkFWYpP3TgpZzKtJLciRw3TV",
  "key1": "3d13QVngFJQ7owz5njHmeTmDGMWoptEPqzxnaNpzzAiN42UtK6wCqF6ppnfNTg2YkooKr8UqjeXVRh45ARtDt8Ua",
  "key2": "3UfDDwQxqKPEobUp87r3SoVFBHydRWE48d7bMz5W6C2oajPCKkNr29mPJeaQmCQJiW3YJefDPU5JXerRYukyd4HQ",
  "key3": "61Xoavq9hWaQg6Ezg8MCGpKSS2pCgvKmqVZx3ajnQPhaYnD5DfXxBd4zXwuSBpMK1MRkaPMajGuauCiSfpp94Ne4",
  "key4": "efBcckX7ftHFTSwPL5A67hwFEvMFisrqoddvTUFgY3DFzchu2yjJsYY3QdTz2Lao9zKaoHdEaZ7V74EQosgS7fy",
  "key5": "yughftWJEAAU19tcmsKphtQt8zZLuyAg3S4keFFPsuHHQUr3BMDEh68CcqvWCz7HuyBV394x5H8p3UuYqczhzJy",
  "key6": "4L4j8dTBmxNSjdT6hPwk3wbaxqijiv6vfzTE4sJN7HcoMBVrJip1VTN28YjF16vyuRvVq2zDpGVMwofFcsiwT5gb",
  "key7": "3PEs1Qf2mxpVcZ4FqiGVxHLb4K1z65mo3iuEeWmJ4Gn5TXBcpSfTjHhR2Yh6L5YLT2gojCx9qmZjTGRFYwMAhEF",
  "key8": "3LzRarecddMupJC59kCiRCwbQHuzpX188bNbswK2EkJS5kuuwXB4fUqyNukDptM1VNTtqzaBMHYPu4z12iJxEKtb",
  "key9": "21EVwMX8PDSmyqkgMxx1383t8UNnRUiWcmyzygGSSaavou7JNrTabmMK3XyqeSGu1jf41XXqtX9iqBUV9eN2qG9n",
  "key10": "39YvtU3BUCFcEnxjwCsFF4brKv5XtKkPvHScA7JmCZS21rUBvbFthnRwRp1BHXb5NjSE2e9z7A1n8KBziYR56nej",
  "key11": "5acRLabfh6PLGSt7Gf1Sx1gdDAZLzr7XcqEr2wgV1jzay46dZcuchitSrYmMo73a797515MdUXhDk4CNgeVp4ir8",
  "key12": "4akZ7DfrfE9UpEqNCCb3CDCzNW1YT2omGcCDJdcszep5KMtmdCLnFM4uRD4gG59oMj11rvY3R4goujTaPbNt9r5F",
  "key13": "5rzqH7Tf9vZq8TecrfiDzAYyyukcoT5bZNooAfjb1m2H6ddXRbHkdgrCX9zjs1yerRuEMEotaNxQRLkg7rQ2UhTH",
  "key14": "4JCFmUdHmeRgDobrP8nbB8foBaWviujZqz6aQuzi6PnB1KwSZRtxb7JeQBS5siPFpDSuZXeGNbJ7zG2Yay8tyRL9",
  "key15": "5F2iX2b4TcLBEsAAwNHWMsGQvSWSYrpkNUJvZLR3em1ZEhZVcPHD3qrhr8vQq35B2vedvHUJJPJ7efbGo7H2foRJ",
  "key16": "zKT3apWo48rCb62r6nwCHMNn22HkFAoiyinNqJC2ZDwn27dAjeRgVCD3KUHLuLWfGoijvXpZTq9E6XACNJUU6kv",
  "key17": "3vB6cTaT8CPZ2kpMeRGKRSZves6uc4fHiGDCoGLWPjyuEUxhpTWVC2fCnJBGSFa1s34wKysgKwgoMEpLZaZntr8s",
  "key18": "2mzUYWRLDFYydkkaEx94iccYXonxre1AX8JNjRATJSSnkz2S4jPVgDEdhuzWb6bFQC9LAh5Um2pgtSTjGcdAQjvz",
  "key19": "4Mi2NqwvYnSgoLr7ocYRHKEavCNubfKpE5snDykPp8CFxSxE7CsbRWAu8zTLT92UmL1PcerTC8MBrCxA82NA7Siy",
  "key20": "BQqsUq7N1SBaxd8fNNGEUCwKqVad8nkTeRQ4xLuGbUMeJD9TEFprB7rPLBBuda3UEaT9WjnFZ7AkMsJ9AJTjBnh",
  "key21": "3mYNBpGVhg9kMFJihm6HvakfmG2Wua7ks5jbodJx46Z9WKcztXC7fvAjiabdcbjbvPLAZ6yJhoFeZtVRuoZo6qDG",
  "key22": "4SALyRUmr2Q49yYB1H37pMUcrwNwM2wFFiA83fSTbud3tk7DvrmNUNrmhNra7UPFpJFQ85XDF4S4gWsixXze1VpU",
  "key23": "5uXHW1eNDCFCkayurtxJr4k8Quwx9h5KFsYEoPUg2z6LzKqxSAy61bgKJ73Hi4ckVyvyjjRuhMTZUxpD5o3Kv1iT",
  "key24": "4SWzUHXHZRx2qU1Xy9D34Km9yYKZW8RRcePm4y7Z6qLqF4az7MMjrpuzHfcKRhP4BvuYyJRyfnUHCYZDmSd7Lba2",
  "key25": "5hhyFKbMiHf4XYJzQB6CX1tPRHmVCTuZ5CHeeyRb2zhnUXvLFnfRgpmB9i2JUsmWT4cgh1V3aczy1H1dbLYnzMgc",
  "key26": "3f9bHkESECLuBfbB9AyrFPnzUkez45nnErcPVutWEFQ82fASQHSENMWjdPYtNyCgauFUJCH3yJ6Y9QVpgnCgyecB",
  "key27": "2Ao2jqJc2WuqNxGfA1BS7jhR6TChFSbjCopxmiVrGqmrP1BEL4LZmW8C6gF9SBTCtWx77hxJVJqduTyijc2tRZqE",
  "key28": "2sXoixjx8p5Zo1GfkSMqr24caLEBhXuwJhxHdHXWTUC2fiUS7bhBwQWZBtbvFpzd1gWmjm9AHQ6r8WvdihLvk3Xs",
  "key29": "4tYG3EGx43MayGSBEeeTaz5keKRUQWGq1RPZ7zEhumQXk2byRfQ89pA8i2eAJcpzZGfag4ibRSyLiSHZqrhGGYhb",
  "key30": "5G4tyL4jX42cD1PEsdbfYLUPZdAV9t5pvJ15UrPieXNnVahfMKfvqBgWh5ZwQ4u4d2DFmgWi8QKXhZ3EzVBASKtn"
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
