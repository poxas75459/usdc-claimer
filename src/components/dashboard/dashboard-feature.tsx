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
    "3JfL1sBT6C1GmU9mXLXWQRKNPDP5W61qNaFgA88YQ8xwGkHWKZz1Rhpui7DMX9mrmCqwgfafxbL3JzsacAwWqJf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Yxnqg16AiY1eX7dhnZTC48V1QdfiQsxitxfrQdgvTVpVVtuNFmWgcq1p2S2n2REUayVqBNGixHRFrcZqytxgFc",
  "key1": "2Q3bfMKpMZPUoPtvtizsVD1DDAC4vePjEcV5kSSE7DQufCG3cXkdWxZ4EgoC9bqLJZmuqCgnAbvCt1eTnCY6sdrR",
  "key2": "2pmEAwnMoQCwXLPpfz5wTVaLs4Xc3Xw4GsMrHU3TggRpmpzDySbu8cL7XZ2dTDPvk77dR453vHioJr54tiThwU8f",
  "key3": "2M48jjkqgQ7cEBeN8UN8X132bBC4nyYU4k6PSUvDxYrB22MFdXxUAzfyvt3MZdkbXVqJaKzKLsARjCe9XZDBYDZF",
  "key4": "3dvcqzL5sfipuAoQyWRMsugfHTSWEDKo5hikoMY1GV2iZWG3q76UwMpRu4HPwvoHGRU95cC1Kvn3jK9jfGKGx18G",
  "key5": "3me7jV9FTaZCkUhB1fG6hU4miJrDRiiYg5Ys2PDkDtUoKzs1MaPQ5dugCVNc1SB48gvaFgieB9smGWDUCueVakxf",
  "key6": "2CixvJC3kRF2tvCzYwvsGccERJhTs9Vcg4H9CqbghE5xjV7eZv89jLHe8EGAwfN4dtaNAgdV6g8siPMeQpiicxpz",
  "key7": "2wZL65H9MHm7BHQD2kbViwDVYivwbVsKYgh2ZZgkjgrtjhNCr4aLmbrzYcJwSRrBygMt1eFALEAhzgvfE3Lirc3u",
  "key8": "33xjLqfToU7tSeSbKANohqxha2jurBPPChdB8UvFMP2sQki7vimqEAwmUkKBf2pGowjXCAchBzhRwimg8VFv7QfG",
  "key9": "26xacDJLzbx13NuJDUY7JaAR3WAyEy8pApJUw6v5kZLbthvCGzbuAuSNsj6gg9BvQAK96K1wK2F421g5ULVp1do6",
  "key10": "4qEC8QA1NNBJe3qGh8u5TYRkqWmdmLt2UMJUGysDyuy82tGbDucFghbMtNppzEbNKgYk2iU1icGZ41apWqrndCuk",
  "key11": "4S1aiNiTBNm529dyf36er4HyGVgx3TCMccXb2o6Mr9Byqnfu3BBppDueowcNP8wrYi8XxHNadPYL7L3WSrm3hBEU",
  "key12": "5gSjtbRCaXfKPRBVPD11d1MAZWvSh3T4vjfK9DP3JjP6Q1su8KYNZR1tBLZTmirDmfCqke4xFzAJVGqSYV3mHuC",
  "key13": "571cYYEgiwb7JNUPgpqHVbB83Um9RSsjeY1JsR4LQjKdg6qQyveMDKDLiDuJxXSLXGLGeWsfC2YkXZizaqN568Z8",
  "key14": "5bHHfxHaGRVNm28758gzdboguDGUoNuoA4KyBZJsH5rAcaNUomeguMAQ2C7PvdG2H2jF6JvmroFCAcvWpuy3SWmd",
  "key15": "3afdWC6Z9ZW5QFTJB8dD74edXrMbuEEbJw5XjhDYxyAhW9LdbuSby259t1B5CwvTWLg8xwbMa52HZnMPxTEfxn3i",
  "key16": "22jSkjgiGjvfmjvgnmg9BGXsVv4NaCazM4Zb2W9ryXcbbaKpRnZM8Mbm7d7WayK8LSrmShxwPoR1ei3B8EPq2J47",
  "key17": "5vRtruLDk1pPbyanznMJknnKKVTZdFgmENjLvwHAQe7mSDPGatC7UCAmZFLLYgDDk6rquBAfhTEtrA5VGLj223bU",
  "key18": "CJVz7UP4Hz12VmReg185am511Du2AMJ3zbM6ViHT7fHVWr3a7CSsirfTHJ52ZoqYXFoKZoADrLrEghmXMgsoQh9",
  "key19": "64dRG92k3N1txKpBR9NU2yGqjMtm47baN5bzL68TMinFbGJu6zLrj78fEZPhMSijGXJQVofcZjVCj1E8WSoyxtKT",
  "key20": "5JrwXrLkRGJXRXxX2zyCDignapdbuS3gDhBkPkySnB5qEYEWxsQ9giRtsQJBQfZe1WvCj6X5BpiMkALi47scrBLt",
  "key21": "bpi7pQdRdCscgPb7CDAEacAipEmV7mi9xcj2Na9ukP9BZzAmUevfvqBbPa1p8bCQFCHPHU8kgwH7isCrrzub1hZ",
  "key22": "3jxvdgezsQit7eZYP35jS1kHBjSDPUUHv6hF2mPGSGVRjQFQxnsPxGUbHA12WdAWbEmJwgiLGzR9hZPjYmrmejpc",
  "key23": "4Ku97ck5HqVdJKnDRmNH12Gm7V4tEwNLHn21zRoTSA9R4QYR3AMj2WWxxK3zwj9efdEfRHQQ1diHHy5GbqAB2Ksh",
  "key24": "2krk8FHUxrELCafuGm4vScpuNoGdazFXC1LbMgyVNGzBwTRB5NUKFS5PrqGo8aqRec34SXQctGDs9WsitXGTqW4p",
  "key25": "2EKkdyetpXgRx1WjbPrqgeLhjQTsdRjLpkbzASFnxA39a1psJpYxd9K3cAm4nzDy1mYEyq9bfxKFG5ccB5kX8Mhm",
  "key26": "Gz4Ue9LCd9UyKa7wDuNwFhrNQkKKnTJAQFU9Pe9SVgK5gLx3heR6fWf2g8NQJxrZDnGwbxP2ABC9gJTQsrcyoMt",
  "key27": "4h8xe9V33iF3UeTHefPyvoSD6jHE3MJzAURSisjif7WT81J6gJBWLnxjf2VSMKbcUBnue1DUGDSYPyFWu1aWfbp2"
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
