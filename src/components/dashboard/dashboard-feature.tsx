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
    "66xkUWapWBSfvhH77utHTC8uZSeQS7sFtDXi1DTPX6YRGHbxokH2DC9oib6wAxsdrgZutKRuhf3c5GFkLYyp7RA5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5roCkAWnj951898vDAafPXvX9DofzRGXQUuT18Deh2dTNM7dprU1ta2YAsr3nwuXt1AQVndt3bBgE6TwxehLGQxn",
  "key1": "5Lu9hvq2fNHmYy1832MYA2EGt8SdrjJMQkS3zJPXsDUoao82WNeecpDJHDVpfxQA6DyMdUqxosDwEBZRpnqRDv4o",
  "key2": "466pzwk4WUseKWH1sAfcrUrcFqEm1Buzoekw81p1wekrb5cFM5TusQZhfAKc9Md36mqox9VyVpam8g9jYccm3DBP",
  "key3": "3xLYJVzrKa44x2pokktrVze5fMqWpEAvzwyCDNCCYjVLjktwhFxSxhZCN9XKyqf4nsqeKbRK8XghwCKcgRW6WAHy",
  "key4": "5oYvM9GFLcPxoSEYZWyPqbiGNVDUqRLMAm6oYvgYQ18oC251MsMWdjJJBFibBVQMV88nQnER2QUcZgSVtRUz3CXg",
  "key5": "5PnaW2TBPfzrDAxZRj2pcwddMFvU6MWGkqXgqzXmNbQCdkfRPL7QtNFj2QasSADPjynwwhCnpo6nqZHtzKwFkui8",
  "key6": "2DH9XT6cVR28XdMxWGBA4pYw3QgRP9rBinuJTmvPFWvkFaWbCQTWikAKLov49hq9pzd8Ufd3g2dkgr9eDmq8pDBK",
  "key7": "3dx2ukDYM8pr7DM5fSnuz84muu9paQfJztjfZb9gwTgcV9qfqwJHj6UqV2otDNeQVy4MWjd6yRXNtZvpWSrZ6qGP",
  "key8": "5r2AaZM2LxV4Bzi4wQEEPmipQyYi8LGzKBzK2yTVDj2aZvsRS6BgeDaT2H8MVJywgwnHGjnV8CXmEP6Lqo3d91Hg",
  "key9": "4uwFAQNEYoy4MQc3FTVEpWKABQ2KXuvM5hm7SdkFqPZ7ohn4oEDdJprhp28SDzNeM4Jucob3w4DXCVsMKWrgkvx",
  "key10": "61TnWShGaWFTLDDaX9mKWDB5URm5gx3RNFPghEUSiCciKUqbuikj8ZE6F8QKWivuSzVbfT6AJpxAYiRemDophK77",
  "key11": "3eWCEU88Hmh7jWRCq6KtjxVZ54trBL1bVXdnxbYuViER52YEWUs1883SFDGoxkFMv88i77MigY5CRYC2yQnUPutJ",
  "key12": "3fK6eRymzq3FZUYgYD2hPi6CuHdKhnu36tidnMDuksL8cPG6v8vtAKocKt6qkBAhqhuHmteEsAs4uDkfEqSXJJ9a",
  "key13": "5sdvz37FmEwUmhQhXizp8EmggFNi3qooGYLcncx8y4HRUqJ68jqZdKCcTGsdivm1u36yk2JfiSwjeSqNRQALswmb",
  "key14": "4C3n4SXenUiASwbs5EZY44CSe3zFrCv2AbWg8j9vs8UZS5VX3hqXajb2VNaWme5FYTTsQrx8o65NS5DdYZ4AJPGF",
  "key15": "41KMQ3FiZdkES7vMZ1kcmephxbSzCCyohqiDwRES6sFQnS3X16kLUyvduFWnqqMBAPFqzQ6aMCz2fngSk19FQxGP",
  "key16": "exeCzCeV2hWuw59zmatKy2fenoBn796U8cL31z3DwwnDo3ksw7tKSKSZ5QD3hEq1hskqrUWH5sYDA4cwYytct47",
  "key17": "4A9gEnc6bzzoDRY9Gg9xhZGpJejYd44xBL1hVWyawT5Mv7fakE7TUTzVLeZwBCw6d1ri3V2Avaj94wJqACvvBSWE",
  "key18": "2if56T3Gaw7TSxDk4MxheKUMAvWG3iDyfVNrgZYFL43fG5d55PdC77NNHvad97JCpTCrZdKicT58t29rf7v3g4p8",
  "key19": "5RToUMZ3tskbD7sMsd8AZvBk3QsQxmMNyutdCwJNtaYZJmN6XbHjsTN8QDUvodTrFznQR1FXDxiPmhoq5sKdHPuZ",
  "key20": "5zcGr9hTL5Y7zHWKdjTcR4Phr2JfjJXgsaQ5U6vVYV4j6Z1z2kVhFLdrouMwAFvrTky9nfrx9XLgKLKk37hRFcWi",
  "key21": "2nrDUWJoAwtyem8kQBFbf7oqiAD111C2t4dVKKt9mSX7J23TC4bggn8GFhuNEx84R3x3i3SDfP7ZDJJzTAEcZBkK",
  "key22": "2ayKkMcZLykFsvd5EyuB8Uz3Tb5EwLLczPmwSq6GD8nAv3syMsWTELmshjsfJ4iBngFdXttxARJX9jXdaS4f5h8J",
  "key23": "3vSWkBDnqGrDFKdgXVQ9J7k1zR1UKxW1eEDMeCz1YtysDnVxJVLsKiBaGjfJzJ92LHLu7rws97HpzP6EndxLuDTU",
  "key24": "2zC1czuiyeqBBMK4WixugQFZcc8ZjrJKEqTcWn6Bw7ZPmn91sQFfVxiNyRdYnZ1TzjuJGba4rgTVWzHLtsrqpVmn",
  "key25": "3jdqgJ38BwJc24s68oBmJ3qZhmZ1ppFgmEBVZ7qW4jtKN194CtZYjycct1XhAXYe1n25JthuM4Hqy7Pm4KkczBPA"
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
