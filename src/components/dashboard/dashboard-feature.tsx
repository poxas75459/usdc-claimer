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
    "5G5VqRXwHUDwE9g7vAJNgP9dtDTSVB8ZnRLLqnJVNToHx88FT7Yf1aoAEJo9whYvw4tcFMijkBU1B6CR9QPQGsxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJZGiPurxydV5APzwu1xuU6JiBWsXNvztBX4fd4korqy1puUb3BAtDRgNzxvVkYzXAFsR6jX6XkUWJEbUoEgg5T",
  "key1": "XfcRA7A5A5HotVea5cm5UBPuTKqjsTZcA8248mbfFT9FVkCbp4uMJPMywafANXMPqay3PLNRptgZ64RzUnLGVdT",
  "key2": "vA6Je4hPHwUnDHLqAVDNocafN7mW5WXKUhABWX6Ph2Ne4vRyVSY6F8mxtGrD7DJfTDCi9f4qRSUjWe2FDjAnHSN",
  "key3": "2mGe8BXrtcXX7oEVwHiVRJZJg6fsmbcezjjcQ2ZU9ieZC92uF4Nv3o7UtLMbw1We7xSKZGGjjjFgaXCd5w7JQyTj",
  "key4": "3Gm5Gs2RN7RigZ9pmua42fiSiU7DxNBgQXF1KLYepWkFokrieqwyGpvL8xi5BSNV7QekbS5Gd66YfdaniVk93hiZ",
  "key5": "2XKU8hrHijN6ccRgR37brYJnJwH9AAvA9ufw1Ny1qN1ArokTxjn6AT5GZu6rcEwyiyQr8vTnTvV64CV3TSZKgjYa",
  "key6": "5vJQ4igRJ4rLGBN53xKueND4WUMkyE4VqiMAR7HjUtmy7B59RCt5GpgTL1FQi9zwrYGMNg6Ay8TPKsj84uDajizT",
  "key7": "3ZaZUDC4yEEYyoZ23Z47gjThSXp4LZfd7kH5CDha1q8saRY4SRnFbhkaM4PX4JS8boTyhp6EEQaqqqHvesjy2Nf8",
  "key8": "2p1EXv7DSEX8FLkoLpkC6SPBxtNzMSd16qovZwo81kUU66vczDxyKCjkzFCJbDzmeyWc6rFZoNimASqC7e1zfzcn",
  "key9": "2hLjSEhAPeeXEMHmxfoC4MakwpbDndhYwuKrRLs2Ka7B6UNsjkiAUAArfpb3rL5Aixs6soLr37AQbJvKH28v8XPr",
  "key10": "5EUU1UsVWdpZA8VEAFRu9dVUDSrd55KK3jCoq37CKqqhwkGgd499bynFEnGbWdqnc899Kht6fHWkygUDoLKKUz1U",
  "key11": "4ZKJ2DAu5TAXktTnQJBrWi8nExt5XQJvWJyzAmJhvAt4PoJzr1DH997oZNogmnpfDFZHL1rkkLU88M9A2gfAYaGx",
  "key12": "21R1pi4scwS68kzc1Zf7CMYoCZKJSDrm9qZp7oLUrzLuak2X5waewyhGuCCx8RneCo3VKuqHhMTWBvZMgnJthNcU",
  "key13": "aaN6QXTfc2W7fyi7VdoD2yMMAhfBmX4XG7wV5VZJdFAQuNh4c1xuFqaLBDZizYXzUVjgtvLgbSbMvZnWRXTbcK9",
  "key14": "5voe1jiLVHMDMEgdWtKDFxT2FMcZEWJ1LMYaxhUq7FuPDrGWcydbFwEG8SzRPd7zXwowdc5bhUmdb62k8v8RNbVH",
  "key15": "3ZfHZ2oeg1XoZWVxhf9zew5aAwrbyWV2tnhvVLoWiw3tKtT29LcJWoJoqBaxriP94HGbD1VY3QjDo1KKZzYKZVWK",
  "key16": "dJBArUZ2AQ8Af7vEjzuYi4z7KxwAdrLmrgaBgYepkGE6QjTUBP2mt8bjTYvEY34vhvvF9NoCSb8bV72XmsFWJGN",
  "key17": "53BkvcsuF3JFFDiP8AP2iypf6mqj4bNXGgGc5Um9WSiANqMZYezgE73BjXC27pUwCrpXHzYUFYYLsBFR1wucBy7a",
  "key18": "49p15hTrk2BkhXa5esk3MaT94X5rKYQWsT6XCDpcNoH4U1GvAHZFshfMQipLrBKWjN45xyPcjemUoCaXyBTu1yaU",
  "key19": "4uQ6i3PcyRj7vg5Zr5VJWrmEJd2GgTcwKguRdZ7aevbNZEFm3gwvvmutXyg6nKFnPBQavc21tWVaDz6p1B1Q38W2",
  "key20": "xF3RcXHs1reDCd3gFBKzsUjbUJQRc36q21b4RheZ6UFvHP9An49czy3WeL2NTo4irK4Jbx4nvRWYXc72EQSzJ2y",
  "key21": "2DzcxH86uFriZduAseNs7zCTosLT6dABg5MfNGchhw9yFBMDCX8DWF443pDLsRqNXTYgHMRDJaXkGqhLwCQE8pUG",
  "key22": "4968ZiBU5JaHnsdY2yfGUVngKZu57v8xC8cKHhuh3o29fJAgfeS2Utv3brzXdTax3hgDEHkmYoWjndYeYB67qEhT",
  "key23": "2kna6Z8KUJvoPMTM5JPCLbvn51Wc4fsai9c62ehRaGaEKGxuYxo8JBciMYf6kYsKhx36CURy4NDRFFkRvRQihWgR",
  "key24": "uyZC327NxtmQ7r6RkQ3gzkDp8fdiBzwYqZo4XMc71RfwodZMiCy1F7btjcZqkyw6iLfEq97RnAEnLptbu2WopTf",
  "key25": "5NjhdXJuFpP9HUJgQbucprM11wDPSgpVkgx28ZGcK3AtPwCWxxFoyV3SzpFe8NAYTXmErAt74Rj6bDtngKR5HU3m",
  "key26": "4VsAPUBLrmeFcPKuBErjis7n2qUrXxuSKQHxP26djbcxr2eqqsZ2dmCrAoDDM1hquH5s8uQcnsuNojyZmDcuFgaq"
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
