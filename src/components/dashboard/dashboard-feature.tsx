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
    "Bibtd2GttDQe9yrEoGpRL6s8FYLgzxdTRLiZCR8Y8nF5AG2zFkPMRAM1J2hGaf6Sjjxra4B5pgFPGAvuytSMcSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q87KmiY1ePSXeDWn4djcDbGrXWqeYkyuh41jnHTSyA3Vurciqjsvmi74szJ7ApFrQ427VPtzkc2kcXHUNVjEVZc",
  "key1": "3zPL8gdQp8j6R4P9gqbk2VxsTjeVmLPsUqJr1Gp8vWTVawNGNyjE4dYigoLiTX5o9W4K5WaetbhB55gbEfduZkP1",
  "key2": "2UxuqU9k6Z65y95YRkR1dbgstdrYgJBncxd3mDoDTvHra9bsP5LzDnsLZMTojN7nFeEywWQrqENwkMiqfn2PUL7S",
  "key3": "2bCcML2qUFLUA9FGWuwUK5dFPNG6B9tUaK3NC6dA7cT1xy2QWH7gadmxF8uCmTYY2CTCKPZvR3BDtLQs29CSXhsu",
  "key4": "2Q4PsNnzN6Uq8viX3Di6CkTRERPKRySNKPeATeMaU6smoHFjiFEDYUbDVWromdmk27BsHpHhVCbr4nqgC9AARGSR",
  "key5": "4x6Kpaz5pusyZBi54q66xF6AdVmt1sPeAn7cLV1ygGQp1beNdtgPcmjUGfYLEBxY2S9MVvX8FUwcB7BtE9FTCpcK",
  "key6": "2HoaAybTcP7SQXZwg1efQf7EpSbxBLCaKYNeTgrKuKj4UhNkuKgALSgCwVJy1Pf2w59R61DUVQajAMDFVV6niqw7",
  "key7": "2pXxaJ5PK5F9KsJTKY8Yx8qrxfn5QEgLesGZapXise7VGS8ysGfByCfA6MESXqus5c85royzYLFkjGE9cjm3qQRA",
  "key8": "3qPVt6khscHkJtriQd3wzUvQjR9tvvHEbK7wCFFCuikxdAwAfJzZXhbVqM8DSPaAewy2QRVqGH5DnkBfQ3QHiRZ4",
  "key9": "JnE9SDe722wq9BxJuf7Bhzgo9kEQsrrhdDhENVtcTik9ZRR9qxUF62gqa8sKMafzjKAP9TYZHpBtL4md5mDqyjg",
  "key10": "67ETFxUd6d8w45BVcm263gTJh6suPjZjqHt8PLTr9tswfWadKmfMhBwPHctDbFBvx4hcPjyemK2JqZgYJnGGG1St",
  "key11": "3SAKHdrGJqpUMQ6EWtd6y91pi9Py16MMbCaz7e1tEwziUYeK1v9NyEyUNC1ZHBuzVQpC7MkKi4H2xw3wbyqpsYKp",
  "key12": "39Z92N9gaF8pyAexnPXWeHkLx7TTbh8rbJuFkYPH3n7gE1ba7z9m5WkQ6hU8B3xwr6XFZpCxL8YXFxMDA2FmeUp3",
  "key13": "5sHmQcskPr2dXGeFs3WzjVMH8HF7kyNe1mKh18h1A6jzBcWTaXWUUwqmn2a16YL9yFsdE7zsdhJPeDm5R38C4GMG",
  "key14": "4R5j7gUQy6SPqWHz1LeS5k7rrqUJBEjUJsgYRHHE49WZAf3pcMxiL4uvfKDgzwyrnEtMQTncJyNSxbd2csSGyAmE",
  "key15": "2KkCLeJUvGZHrUPpjyXpWHpV3ucDuCy8AaREGx6rXCzZStS8NUKM2FZPPo2u7jNqZuMFf9FVn83c5GgYCoVc59se",
  "key16": "3Ys5rUJtNGh4R3ghEgRxbmMic7VWQGADNsXGPzpQZfGpC1NfhRPq7RHZKM874tQNSey4FCiiwWTWjc5z8CzNKxFC",
  "key17": "2fsB3zzUeiStqZooMxsNdZQyguf4KuHFhMfnX63FnJPs9S9zJ6Qm7EuFqjbaqke2rbCFXKEjyqDiWsCzHnCPVspP",
  "key18": "4ZqSZJmCtmrr79XiQCt6XiqE4KK5qFRDPQ6mnsa2EhnPjoe4p2S9iPGxAWtSG2PhoD97d7gwqzQqe3XfyYQPcnVL",
  "key19": "63aNNYfFiKff2UjNwKsfAgWdN5xyM7sMstuQn1dTyijPxYQx4hXBSxFtCFqUVHUaWM2QvyCPRkwaJiYeBpCEnM95",
  "key20": "59CVUmjeHPqJ9iWqdsGY7R9UDEUFs1L3cjbqNGEqEZNEn5kX2Cx4zdeAo2aKg88nxetNWdipwsjRMh5AVY2ZjPY6",
  "key21": "5vxK42ykpo38vbRzRPkDBxtHLmwnQbRFMRXQ98SeJ5pcj2HKGABtjj7WdNS6L3VFdMjNyaKppWDvek8S5Rpw5VAW",
  "key22": "YsFXYy8Tr6mqQESY5yhge6MTXQyWBgDCPZard3DXpSDw8trW4GEnwEvuBVhpwhkqMePYMWX7Y6sVApoCEwS3KWs",
  "key23": "4zUBJH5pesRBZYCScjqNx9bCuAgn28asQ4KCAFhSQNpyK2mxAT21ExnyMHaWYzMyKzDW5k4ccedx3XZSxogWGKkP",
  "key24": "2JK1Nnj3gHmq7f8nNhEjadtzGF5zbFg1vxL7DWYEoQUKVu7bMDdU8krcQ7GurcPGem1bThQvw7eXCmtiC38XyH3u"
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
