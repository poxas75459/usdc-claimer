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
    "DHLLCKAPDygyRYJb8Fu87Pf9ykunxy1H8uyQ1AkZ1zDjYnbFuUUgzZ8R8u4RoD1whm693UqZa1eMe4hXB4noK2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfUEeoD77yhpvGDMW2mZ1xxFVf9djzx7WNQRD5nrtHWC79ZakxNzdzmGreHaiVDxMcyJB2pWs4jVkt9k2TdeQts",
  "key1": "2Mu6J4hsNLMpXdRjzP8JUGwXB8KUTdFvWwwUGL2MmMqyW8FvBwpbm3wBxCjrHYtphkNPB3HbYNUEajQTCCBA8vfa",
  "key2": "4iic524o8DswJXT4sYjwUnCEGdzRArSuHq2h4iaioMfHnHYSBexnNCJuUeT2WpRYhe1YUCUTWLbPGKrQQV1yf9wo",
  "key3": "5kHyYUoW3zaKgHnDudRmubLu3FAigNNzhu3CzB6yQobNa9grYYMMoRzBphxy2JaNjEn99NJQwTiRJ4CuwEfYvQqy",
  "key4": "33EtKcwLtj26j1igveYNgCb25vMM1cg4Q4UhYK5mD8vLxwpC3LZ3DLL6t9Bt7iwLat7X1W4UjyxUYLvdjtbrGCiy",
  "key5": "2PZR3SUE128aCV4qa3JMxZyorb5evp37kRQ5pNqPJD8gFTS9BhgtVJ6gwxmGcjbmR5CzpTxEStzoqvb6vmjsKANS",
  "key6": "35t3z7YqnSXbQQeYhAUPhLbpqnyHmfFaxLRG9itH8gCACSPCa3JUXCqRFJRyUvPxAAwh7uWoMEY2SfeY3eGxmjvX",
  "key7": "5TUTyCuBV5puZnFiiN3sAZmaMrtNwrmHRRzvnybMpoe4tXs45Q3QLLXFy5PVsXYGjddSoXrCrzw3boEKiyzGqv7u",
  "key8": "3vxnjWJfk1ZJhS6Z1sgL7VwvFvfoX4SHB2vRrAwGCNQDaakMFH6ej8f8CsCTapDFtWoBc6u6Cxc3NmJGN9ajHSaw",
  "key9": "5ybGNi7g4mF7yVeFZMe7nTdG2qsWwaJatGKHrCH5RMjGkWqPKBkwvgbxAL2Wx9EwuJ1qviD2NCJswbq3PWpocXUA",
  "key10": "3gAYjr89wVyWG6p4oJMJ2csfAuG89BqTxC61jcRXYnh8LCtpKQKh2UgdzdPjq8MADi2zUV9E1uDWuwgSNuZ7Kz7Z",
  "key11": "2DNZ1in5XZNA6A5KMiUvbbA9CVqmMzJ7qT3oesFrmz7qc6xi2JdE4u3Pp6ngGCtZEzTjg3bh9KDbbTFDADKnADWZ",
  "key12": "3MWYn5o6NmGJ2PULu1CNKLfa6ucrsVu4bDgVQgkqbqXA7cFkWG7EK6ZbdtRaV3rBfet38aaVC2bLLVZF6zigvPdA",
  "key13": "3aL8h2iKMJu9kk3mmpwmvQYWGw7EpfFjvgWzhhxp6Xhc1efJ8vWAr3v9w54TQU9c9SdQH26xABcjWG9SzkPFXVfd",
  "key14": "5Fg2iyRa4Rh1wrTvg848yZiDkYFQpJ8fJpC2fKyemLt54Rgw3i8BTRLKNvmcL1Q3zFWUHmsGHnP8KNmoNKJs84fj",
  "key15": "v8CV32Unasjx1y9mXBtvG7ZaC43qEsXCKtt5c5n22Vo9Cc1tezz3yciE1cxsSj1LEALPFstxCkyMGHCZ4syUhXU",
  "key16": "3fBBrZnQi2aCnyySnyjULW9X8YkdBDVw5rt8yWS1NGrgC9jRxXc47FLcbap7gDNrvR1Pex28QeqHB3dDAfUn3pQc",
  "key17": "4HwH2gsHa9xQfPjubzuYMnTRr9cf8HCBzdge7pMSc7EGkdnnnZzsfKzWDtfN1bzLeWsesUnRPTFPyEBtuXdw2LGg",
  "key18": "2KJG9J9m9Q2GJFShGCrhHoUseDFkMWrj2Zxz6y8X78C5TLWV4Px38T2L2rdSniXtRaHPGk7qSd2vhnMtLHfeaDuB",
  "key19": "4um7gWDLo5WpXEqcgURK2vYGCtbD5s8QS7c14Fnjuw8HcY5bU4wnbEaPHyx3cLetA9KBEM2J5WHsdT2SKs4BWtm9",
  "key20": "5CHb1vDNVFJHqvVURK6MKvdWkow57HbchQQ7ESjN62gWBAKZ2nNCHNEwFofuLVQGF4b6WzjyQ3qdTrshWrmBmhZa",
  "key21": "3Xs7pdkz5LVwQR5wrJtKK86qmDQQGYAzujT1cxDC1YbiL7JNiBdZ3wSwTAR12DDQLYYs54to7gxE33qpicfrhbAY",
  "key22": "4e3mDEK9nGKwhqoqCmHnaoV7UdxDSvWgHYmDKTWu4fLR6UtPub8wySQB53nBfXx7xQ643FcLhdCdHyh1dRXsd8Rs",
  "key23": "3BNa4ancPer8A6WaQDfHnzVhPLRQ5K934Y21F8KUU8Y3Jysuz7VkeG3TDFWoUpWQhyn7ngTAw9hYcgiCW51i4smk",
  "key24": "4L7ag4rqn9qogVF6vHdwA23KXEd7PKTNFvNucgCP2ATZDtV1tLGvGbMZ3kqfLytKvkvAsz1EbZSdXpjsDYYn9thZ",
  "key25": "mp4toA6DWwjnEox55R8sadrmw8ZYKhnHRwygXGDXVMjqst74UMBQtTztUWfK6nT5dDnXPtTzPieCuxbZ3EJuFZp",
  "key26": "DSWuZyvAA9zrBG5hq9iVBXvvsufcfPumuJ5N8oZnW5j42N4baJJYZQ1aM5LiTTjjGUwjMvPNT15iRi63dpKJAhS",
  "key27": "4TfDjtrhn41n2jUbaporGru6A7xGWGKmqdp2oK7bRLHtThcmXajtSeYDGX4Jo6ubTycBZwqCgYjM1YGtAeBTWDDe",
  "key28": "3gEGEjUbC3TpBTybxpj2PE1WxwdudP16JK5VpCQpivrZvCpksDHtRP1Macj6xBSJzwfWsNasUi2JAqswFJzwhAgp"
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
