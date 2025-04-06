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
    "38pdszjButZGC8f2QiWYSs75WKt67NQDZ2w3ohKv7o9rqnYhfGRXmejUW1EXSAP8SFCzkdKn67tMTpZ3HZUer9Hz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irS5CTDuVTkb2fYYm9onGADBRE7Y2knCaBTiiHVefPedmRxVRBBFAP7fUZbNmHWQN97ewMxD8CfRNMxFWgdaxGY",
  "key1": "51zSDgh1d6W7rRJzZGTKXS3xTL1GvTpSwPh9G3wYJaBdwDaAT7obTT9ApGmKqqv6sCwcefZHYeQeu98CEh5VMDmH",
  "key2": "3JxeNpfN1q54oRzMUbzVVCBPwvnWzyD1M37KGUjjvQexzvdi2z8D2K2Q7B2nsi7xVa2q5wzKAGTs9w144wZrwa2E",
  "key3": "3pv9HqX6L5yGMezgAmLTYEtRanTrMk7CLhCccEeHWgHbwZDreUsm9FCsD7qHMR7aoGiou93TCH3v9dxAhSLnxeex",
  "key4": "zMavfvJkC1D5QrWk9s3GjnmU3sSTr2LVmPWMnFhusVFMZjvp5gxZpdJZSaw9p9tphu1gGnT3n3kR3JYxJYfBUBW",
  "key5": "3iD8peEfjgwKBEw6aKrGtzZ2e49Pja1vxoX2MsniRbiu6sUgJW4SN1RKAeTX7LDerTN77u3cwTJEmUKYtYzZMHVW",
  "key6": "eAMVqDVUcgRMc6Qcxiozmv9wWw4vnFE7XJwGgs1wUvzQXnDPYdKkiRcaPuwxgRZhdLv2ZsbxPrcz8BsBMudiCyJ",
  "key7": "44By4jr5xN5z56Eg6Y4SjqCwgpYFdSKZrke7qTxYCFkpUc5pCs9uidsc28jbnofPTd4o6r7Z5fXoDp6hJJkgeSPN",
  "key8": "2XC16KW6mWDRJPW6qMTEUHmi1iNrTaY6CWZtwxeQF1VX1gfv4MsWtFr1BvRHJwKpB5yVi2JtLCZQBmk3DH4M3PoL",
  "key9": "3LEmEmhNyUfuZuzfv9P2a5FobPqosz9RNcgxFKZ2GQ8L4uJx6vJ78sckRiBcS1w52nFUoCKABA58mM32JmEv6oE8",
  "key10": "36f5MjWPMbDjkazLfSNpyQHC9Hf1FbN3CjMuACF9mVEvVLzKAhqtFNKZbM6feH4XhfFWEzVvKWhAHSZsG2j3j3Yr",
  "key11": "Gts7N42sZ5oCkvsSVvqeg3dNdFCqnQqEcQue1Fs6CdgRLXs6qPP6UVSdd96Gw1PTQAF8xTSYiQUn6LYNAWLYQYc",
  "key12": "2ZMq4EiutqY7CJAvp1uZ3fmkn2We83BSsw2svM5gL72yyeifwDWyz2b7jKBaWHi9zhLTwTa5hNTab4VU3C1fPr2y",
  "key13": "4fZmHvUCLHCZtXiKiZQ1FXqmNWYgyThi5guEHoQ7Vgcr8zUNn1gKQrsZCZKFP52YtQpjmuABwxNJcxmD37ttaELS",
  "key14": "GWXGwxYwW5bByPtWTYZiywDsuYE383WcBxgT6V1YTu251hwpAzps9G1nQHAgywF6viTiZQjffux8D4BsMCY22wK",
  "key15": "BvvuuM1s5JZaa5FrSC1AZwwKXzPqmAah7jrg1wBpXW6Ni7HFeR9RvzjBvGA5yBuG15Lw5rRPM6eXL8VNwb4xnne",
  "key16": "kbxcrq3uPAcT9SnHunjmevJqpEV4y4okCNoxGSG97UvkQgweQr7NfSvL1waBoRzo6EbL7cb4G3NiUTtU2JemQs8",
  "key17": "5mLVzyH5cVgqhjquXi6c64abkyjkhPBjMBzJHpiXzhrhreR9AK821cXSSKM9mNNnfAafa4Cr6CXEM52FTYP3sv65",
  "key18": "idJED4q5HumB5BwpdrYhpuJKwW7HWS5HsrXrgtURctWPa8aoxkn64B5DpRE91oaBqiLnQDyP78nMDdRe1d4h2fk",
  "key19": "2wFEokXkLzx6SFrwAw9XDmn92tFd1R6jnzbE8QiohhXfsY87tLt4EFHJ9fLfW2yGuYu6Aq3cEe214wAdTiYUjhPK",
  "key20": "587aS9duCZuHz5a5aBWut5nJgC2VdKzCN7oXxrMotdsFbwxta4tjymSevodezFNJHPyHEHm3o43rjvoHXs4bmQWi",
  "key21": "oQEpMSjsBWfvWd89BEvamLQexckWohaYJRGNsCbXJg8KGbd9cWxgb5bn5MKKxFD87bwCr2KyHpinX1C8LCWfUmv",
  "key22": "2sAWLG1qjNfa8wSshBp4CyCt1osJ75EAHRQatCbFtCeoeEmeStETNsZj44228vcYnF3AmT8acempBAjDnFqxJPaM",
  "key23": "4KN3F8rsWLGYgUBVoPJ3MWitES4UfS53dCbqiGU7z1CoDFDtGaFmSUVH8bNLwqN9mYvnXPRQKinZaHtoK67U5yak",
  "key24": "3vdVWxdL3zkszjKC4CkFJVCtxjoN2LXoWBHWDHxr4e98T6wz26KsdGSnsrsZbEGUws61MTNg68YLKqEVDoXpQTJr",
  "key25": "349U9DXsrgvG29iotycpF4Z34MTKLnDhsKJNusH295oL2ym2AFjgzLKZoo5dtZTJSyuv5EbTYkGeJzSXzooui5L6",
  "key26": "GsAzCnpQqxNVVWtxGc7GFqofBbpb7L1UhUDWr8ATXBh5Kr2iTK41DJYi5J5Bq2AQb3cF46jLUN7T8XBFgfMaZZb",
  "key27": "2edNqfctXkwgNTxJPHgLotjUcZTdn1CzzCBrJLfG2Hzj6hdNrHBMc1aBPXtdCdB9JyE852PPUgfnUL8c6Jme82q7",
  "key28": "4LCbtK27iQBtYn3ksB9LbTCFSVEJSD1aK4tLdnLnRYEo8TZNqmv34USgBKEnbpEb78v9HCAhU4U184dizS8g8TVf",
  "key29": "58AgcdpvjME2fbrnpHfsESvPB6eG89SUQnuR1AyAB9SMfHrfmaCfQn14zTLmnGFZsdC9qb8iRLe4EUX8zhzYMr5m",
  "key30": "4QH9x2gD9QmF8gQoqMpCe95MAwUXAb84mBPDhzM9iGLod5EwR69AndZLBpy88EYj2SoVzSGE9ajNWB7s68X2fLyK",
  "key31": "53Q6iB3ZKffh4tUwLxTHqftaWvkiYUnKQktU1qVvNLS5PXPEyATJJJ6XakqVj1RE4uSgfd1XkeXzG2V691ujYTGC",
  "key32": "4VyzTru42U8PJmjeGh16K7SiLUvMNTCm2e6uUE2Jwm2ubTZetpLMmsLpGBhcR566V7QBYvW7Bjw4789F1ZesE26d",
  "key33": "5CNSetvDJy7inefNhfnvLPDGtpSaBwyhhj8YYNbAcFhmbGYho6fX3NkLcGrnwT2yNT1RrUaEFA4H7oAMLv8AkSXg",
  "key34": "e7esr8zPajAzkJSWk72mbrLRAsQkucDuiCseH7PZdreCWHrsA8isyCcg1mJvKxEjevocZ3vqj3h6TzMSMUhhvad",
  "key35": "D5RQZNR3Mc15gAKrgsRQXF1TN7GhqhsvyJ9TLZw4JhmqUGynJseXVKpfzBkzhXzWxAwAAZWnNoWDAbBqr5AR2Xe",
  "key36": "61VsvHDqLPWvxb3ERVyidDJ28UbjLaYjCRdoMwvKNu3gBp7sZQRdk64qTTfchUFB4T9P8MZFaYbfqRUSgvujpP4j",
  "key37": "4xkmp6pywkgjnqdwfxu34mJvRQv8J85zfiFddMPvPQ3JZHAaau4vA5aGs4LcW6RT3PuWprYQDLWdMVqxNLzYxDVC",
  "key38": "4HA8xiU4SFGt6Np6UsyqFBYC6YyyXSZo6pzyDEx4tuKsjG1wqpBf8SdKsCnzpZCx2Ezb5FFaCUyB6tKPJEHHsVM9",
  "key39": "4yCWtd2QCt6JkuAVX3jEmakVNCsqmgTAU9iaAskkHp2AQgbCJckbMMC1xUFaHqSZFQFRPg6WskR9ytAvr73T2URh",
  "key40": "nsqA9iqJYNFRHbnaQcd8MxpKpUtJYFYe8UCnt22EfHRJu8JZUPhf6wCtLtYsb2rTgWnCb1Tmg1kMVMWvR5Dfpvy",
  "key41": "42iXpqXEqXYSarSznbqH9hwTQAziiirTaHRCSpAMmSZGw4qPBCXj3ScXaMigsP5KgKDz1ma5R5SciRbiUQoZbjHk"
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
