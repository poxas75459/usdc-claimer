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
    "359UGnQiJWyC6GUM7f6E1RvNKqDHfE2seVUAG4Fb2WdCdpQyV1VpEn2Vow95ybiH9oTRToNQxZANDBBwxECj3LjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AXrqZ9CuaMAFTY4wKaqUvKKh2XnpzgvsQXqbH545cxDB78rUYUfeLvZJaE3g2ZV8DvbK3B1vbNfhdBAScTUrJFQ",
  "key1": "4rbmccG1cUFjXceeSQEn8XHS95P7ky1ucx5ecnNhgpkbJ1MTG5n21XnC6hu9VRG2PA5UTx6rEqf1FjwxAY3myj16",
  "key2": "4XQt5quThWNHNpgDz827JSa7HAWaB9yJdK79mNxSGpU6FrpfxpQGrwpD1xS55t15SnnDqLZtrMTe8eZDZXMY355",
  "key3": "2Y5i5FTT2g9UDXnCgLX73jNVaJQZBKqXoa2Fhfns4HbX75PcXfCv5pj6Qw6bHZa8HZSZrKC7dduJs7CnFaSs9vYt",
  "key4": "KcdANViWPaquV8AAfGi8s8XZUK9mdoeCcpYDxMohkTBw8bbX62Fnfo16uz48pn5ZjjqKLa7UfemQVkuKtdTUUxK",
  "key5": "3qvGyKdvp7SKY3zcggXJdEnsMxvoftmTZumkp2tJ7MX9Du5CdoN1tRkeSoj1bVCD8Uh7ZRpA9S9bZEXFBXyT1xBR",
  "key6": "2MpWgzwwsq2nAZbfGrVn3E2DHR3xz3qpRquspNKWGRXSDNQZ9nrRqVftAD2NJncaJX3XoFr3F727HckxtZN5ShRo",
  "key7": "5YkCPbF9qBxp6j9KZpJKRY1XwFq54jMH2ppr2wqPQ9W4WvcUmwhxss1tXjnFfHdGxdoW9oXF3zD7BRZBG2DE6rZs",
  "key8": "3CRWd3EwGQXRzRAJ7pgpeqFkvJK24AWq5kku1WXX6y5qQ8XvQ4aiz8xw1HJCfLPCjM56ZZLqLzuTQb6uyaMu7ibv",
  "key9": "2QJs7dd14piZJwAwYTW9gSQF1Rd5zg8dSzyxEr2o2Y14Ev8xJXKLBaqLd4KhxXShoWPE3YCBuVFmnzzoVFSmWq5t",
  "key10": "2trEy2utTCGQLhrhGSiCwGV9HWjCpx7URXp8kV5ywB26eyHGsRipKMZjmyFSebYRqeczqtuguK9KseA9itFeh7Tz",
  "key11": "4esnCRtsxqifYtDn6UAaRVW1w2CP3fa7CiPHJADEskqmpUmLmZm5gyWthEscEiMpyJXiYEx1ScRJ1vdwvDxTgk7K",
  "key12": "2UgvLPzJkMSunABkxvy7ePKdSUZp6xSBPUpRtAXF97UhYkQjK5qiKq9Mp5mPWKm5Pma84EYsCzLW21seiEuWiqDw",
  "key13": "5XnvA2CMs4J3MbQrd7L6bXimCC9TRtu4qrxZvCDbGW2fjbwEFBCunPFdzBoD7hSBpceXgyYLA8GFQ4PhBYJVffee",
  "key14": "irdiM6EeJx15LSsVoVEb7r7AwQtxs3oTPvCiLcEm2P6ShqAE8iWpzn1bnnUH2qGdYZMfuqurG7g71a5ARFRww3B",
  "key15": "5iPdcMajW3E4oehoHZSZdJBvX5td6U7v2ZdcQxDMkiQcGhjNhTscmcVryrPo7nSJDdhqiRpooEnSQFPE2gb21ZMp",
  "key16": "4HshtEPCBbBuDYSUcPPnb21VLMamhEAnPm3fk4s7G1akqXBBjGyvpFJPW35uyuG8LpDqtsPuDtCVkPuAUuiNhqGj",
  "key17": "2HBE76nF9cSNBTDno34RBBDESbkLz3XfyaB4QXx1MLLWM4pG6zjK6L4XerX4iERndnFk11yy1aECVR17U8nsCif9",
  "key18": "2DFK3TeYbvGycLY5XvjFpLmsPf3trq3d3jYrzm7RcdRES2Cd3tXV9mEzBvPKVFdRp5QeHMcZdztYWzbqhn4AT9xX",
  "key19": "UquDFPABWdYk6BfSUZYiES8GeWQbR5d5LuGBq2aktPAujHe4ZwBo2Xzry1hk3i8WvV7xcBxpSkMtd7KVBHaxw8r",
  "key20": "Py3RrcoFqSTm5sEcjhfkcBV8tcD9WpAUe4RcisgvSWvVhqkzfaRMnqA66o8kkLsbsXzZsqNY7EDk4WiBZCnybce",
  "key21": "46DzgaZ1q79V2HeG4SCC3xjFWvJE1ee6emvZRBECxH8qydDxSYUZcNcicUPeDkkTLQYV3wRY1twQgTXLYEtD9Cuk",
  "key22": "394AAhEq4hPYwUaEwXPTbYK5jLTcA2D73jQG6Fd74L7mzcmfnxeDuc6m3UyqY3NaMJNcRpJTJjaPhuKU27G3sLra",
  "key23": "4s7xnu5bA68c1kRzT8y8ZRGzBDK6jfH9kfSKzLPh35NDPJwk34oaPrBpw6yVJFULBjwiK8GcA9tMfzEQXVmuuijq",
  "key24": "5Nu18aoeARAUFH4ifcKXbiULFkmuyrM9rXte3Jv5jdNHX5D1pJwTYumNm1DGnnUTZMcMy9JrAnkQRCPnuwrLY2yk",
  "key25": "b3p4PKQaP8hE3fajc61dEbgySQTgQwa1mezp53aBv7xX8MaQJY4F7QTSNXXPfT7fYrd1fQ6EcGdhUzJgL8xAC2f",
  "key26": "3dZgR3DpCViKe1hCFXB7LV1coFTJhmJgsHPUUCkT7DZKekK4cNA7dUopBuioGMmSSfxqDhLJuPh3RnHVdKx2bY2F",
  "key27": "5ZfLajc4JLTq8EGpVi9CNtE8UPxJ4XxFzq29hMtUW8m6uzr9gDF1E2EdnQMzE7GquaYWSuqrRmyAb331DbRFkSDG",
  "key28": "61PRS5qtptmSWW2YP3f8vjaMyCg2TPKapskmkXXrcASA4BikSUbcUejzSMQndVx3ukQmXYMC56twJ9qSbs899Pop",
  "key29": "5hub5iwH2Bh7BN9QeRcbZoMpnosXLxT5oUJHzzz7wtZykRSwVuxxKFKCbHMPjWWPfyUDUX8UhHvo2z48cDhDZjUo",
  "key30": "29mG9nqzY4FGyCHUpVRRQ88jyXjMBAgHhfCmf137zUfobHm6D9wiAvatemW81JdZFvScpFTT59vho9NBnWWUMiBZ",
  "key31": "4DpiJGdwQdk9MXamum2B9AcqyLTr8YMuy63VpRWzXip1vM3LQyVBCvmkpKpmMgGxQxShmB3sZgNdErWbArMVg3Ja",
  "key32": "47aDgFEUnDXeNe9mrGhnXqUMiBCPRVN8ngT22Hju1EE3VdSdi7MgHBNrJERRzN51rB2aq2mx9CnDxnn1nJRzhZck",
  "key33": "5qN1t2axPcbfBsQABUdpYu93RVcaguxh9tLpS5Vqj47UtbYA6mscLqeBjjk3R9nQm46KfTADxeBuBFu7weG85Sae",
  "key34": "2cAoKKZu1g2Ecgrjw81G8PwvjHDACLz1zefg1ZdCMGuY5hzrLQ72WXZQoWDVZs1MS2kMSM7EC6tkh1etjg8pxerX",
  "key35": "5onhz9B76yS1MJ5mvr2MJDgiXZ6ixvyUzxSPpDNDUEKj8FBWqAk14yYj9TkugogStnh5Bt7pj4nez1D4sJAwUEgZ",
  "key36": "2Dsne9RFMrCYrnapFEdRAGFNc3nmwF584T9nThcxr1SgkcnNE8YDGuA8bi829PqywE1uPFfi91BMaMkddoWrJhd8",
  "key37": "4zAVTr9uSKiqT57ETpuBDUPYarCDbeEwhts7W1XHLo7TxEjK3eXcazGmxGL416XuMD3yrKCjxvuJGc6iHuvRsqkC",
  "key38": "4waR4oGRUTqLzMkSu3SJPwgmj6D6Z1xHN37vszEGHh94wSLW9qD77jyixBNM1c79KyrfsMiLWcnr28CuEgjvd3Fg",
  "key39": "3CaGsRowN4pHf568zoeL6EeCjJGmARmd5CjjK6upogof5213xipdT3gUJdrNdpKx8pU9DtwkA154f9uYcjrm2s5N",
  "key40": "3VUZig9HhZwqHrLegQMwbNJtu4fmC6Zt6XuAHGGz1CPmJxnWZK81zEowkCnFFUm8LoNLksF9hS72ZFtMjpbUsvq8",
  "key41": "4WALc357ihrcLcSDK6X1c7wit93iqXKncxyM8sALxQEFBFrLx4c3mYc5YwcEXstSRynyMwTkYPgUysjt2UD9dxEM",
  "key42": "3eK5p3i4ohzKSbYo48UpkDZGhNJmHi73FjTd9UBtuaYqKaA3vauNNazT8iqEyPMtEYARU25bkjeXf1ytiqU3XwiA",
  "key43": "5MdLN4gi7WmWQ8Srtgt3EbpFuatp1Dt3H6evGFaStXmRJTQvpEjL1Ef8mkJGarizhBp6Rn4sapYjN2ccbhL3CYDY"
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
