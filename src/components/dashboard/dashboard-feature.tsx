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
    "43XS2Mss1jDMKDB5iGGn92LGAaQMqWqRXC8bn79k39RwUAwSMJL77udUJP7iwNSEaVtzpBrZMDdidHLqCSC44cRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ui1juLQqtYusCgVvDDuBL5C4ViVrETQhjNV8F5CavYqDuJ8BfBNoXtTocxPbhpt3F3YnzT8nrV9PbpSp9AbtrU9",
  "key1": "5q1JDwiy18jGqvfncvf2wBMWxSJ4JciGRPfcwZWZ679pSVaYpwiYDUg99zcPz5Sx32wUQwE5ouJrnSgVzMKuHopW",
  "key2": "4iB3Uc3bBrzMqKiwdrZcTTT2dA9NwaPsRgUkeem7TpjLSBdM8hbccxcFiyisJotMJuVsfkbhkfWXyhZHK2Rq1h5G",
  "key3": "52t88VDdVW7SZwcwrXs3azAVEnLbjTVEAmzogUoCxfVRBWGPVLgXtrE49MSdYScLG6LmWM6dRWJeerYmapoyPxCL",
  "key4": "3uF9WaeKJpqbCWJQktjifzyUxMjAPzWjHjJJb9rEFokrKmENXgZ1gpgovhMc65PVirUTYS4T8azmy1ccainqVwZn",
  "key5": "3TALBK96e65V4afrMhqU4QdoWBKCQwpGfm9Vgosd5jGDPqukNbmuciWZhGHUvSJGsNZdN5FgEMSM6jZCCUMvJ9Jb",
  "key6": "51yczKb6Un7ShLk5M8q1j5UoBDrXnaEuHjTnqF95T6Z4Gifz5fEE2t1Z84S8ooS77JxJ5ECdKfm3Gj5xik3pcpHy",
  "key7": "5MpH63w319dXdM1aaWCE8S2ZJFb8puT7WFsjYkwg5pBrdPNRTH3E56hP9YYudCRioY4433kcbT94WCWSyp8QgszU",
  "key8": "61bmLyHUUhZwfHPkVP3KjH6dQGfH8V8WxVCue5M2GVLdA9DgQZGXQrZFwYET7drLdZz54wgGeqPVPTckDmx2XwWa",
  "key9": "qCy4WaMCixAikyH4XpJoNG1hDy4zUViDDd9sY3FbLXKdEhWkDJW9iAgWFQgty3pUTUwMdsuMvSShZVidoKyYk3i",
  "key10": "2dZaAZ95kmAU2dDBD5Wy4oCa9XPtUz9gHLRZ45qjNZ7LCRKXCirUp7eoKbszQi6UvjFRaDPhgpAbtuGLiDWiakkQ",
  "key11": "2YcPPEL1g3JEzhmYs9LsJMrGwCZKfLVafcybpvqJ5RwrmbmNQJ8mX4hRMmQt57qFxqWuw6ucLJvWM2zWmZsey9Mc",
  "key12": "515VMQ3VumGro1oj42mdWV1BUxZdv15oSc5Fe9TY3XHggRb1qj5XVBTup9tbbiRC19QmHdo8fJrp4UFsgPyJoH6e",
  "key13": "5Z4UticoqL821WGsHdGuMxKcPFgUs9nPvJPWHJSUDxzzcAhGqUiD5qDugSsc75i99uwq7cipk7dniSjBuFbQhfm3",
  "key14": "4zbuMH9ib8VahRvQMzx1fXHk2DDmhkRNTd67CKJrSB9W8oMMvgjFqGkH7bGHCjjw3Tq2eAepZ2bMEjEG3YXmEDMQ",
  "key15": "5qyE88HHoh4YSZeFKPoD7rKxemrZoz5VKZ9vAqSSKTcMEztD7Pvx6A983FEyUgUxthdDSfLCCLbjQYr66PkpzqMA",
  "key16": "5MpBXSWBk15iEHnL32B1m2DNHcMYDV8PriuPBnDN3JKpymkU7WM3KLmAq2vJfvxaMfRRGRVgzWW1UsVpcnS6rQEw",
  "key17": "24JhT6Kk2cQk65cMA1ChNVuUyE3BJjNypHeAg7PzwTVRGi1p961K7vEqXQZMy1oGuXYXThB1gPz7H23pjCyosky4",
  "key18": "Qrexj7joNk9xJxd3g1t8SsjKuFLHXjfNT7iFGf14vBRu6VrwM8R44pUui27uYCPPXWy5oFN8VAdhKM7GcEvXvak",
  "key19": "2bbm5dvw7VS3i9zJH9swwYB5JLQnG1VL2SLR46vf2Z1TE6TW6wegwTw5QsXixE26YgizFnpeRMMe77T49qaMbpFx",
  "key20": "5KUwcRPWNfmzv9xBT43vUmgeMRveRKd28XGuLfkFBbmrgH1bRV6UjL3VJEeCWLVLTegnXJdk1YYyKz7ixp5YrosZ",
  "key21": "U5KBbV51EajDk3dRC7mJVibbtkaxEVeDiUgS81XsUyKCpb84vpj8pvSkbTQHyakzgERdxPR9xK8wMJpR3shzsqN",
  "key22": "2ay33psX1WuNYKdvwYxGAeytQns7s8ThnXfZX3cXcwyMekuMMexTCzQPj11cjroho4a8q2NmVbLUs6uPaxev8R7A",
  "key23": "5JYK12TUK98q8NXGS7MTQZ2jLvkJw1WPHcHp2mBMX63JZHdS6ehKryoG9DEsQq3xEdGBGRdbySN6YVMD2FuSx345",
  "key24": "3u2ACmErU32JtQfX9xR2wrvxmBKpHE3wNbRSogm2dFozZfQohmqH1w4T4P48BugsB3tbwYanoMvi2LYoKVFA77u2",
  "key25": "3HZ3uu3B5JiZk8CYoeqeMYtjqtVqcMjP6hfHjssRnqxd1svDgjMBpu7iDscMq3wiHukpeWaZaVu1gHKZ3pRP5dj9",
  "key26": "3jhfe6zXwkB9ReNwt7b6SeiUC9L2RaaJGNPk4Pe3kQchnUqJKeBCjL3kax4jhrj32kcmfPj9eSkWzhhT6JGCwrdP"
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
