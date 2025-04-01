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
    "2ZG5om7QBKUTX3okBS7kFRk9PNokr6798gNrp3h2hGaFJxnuhHDyzHrRo9nE4p4dTS6uG1NsYRdZRMxd4k1yh99C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o4iGfamfAHrg8YjhgEfJJTvxWGRiSHyB4gCC1mhSwJKhdTDxncGrHqd2CJkgSvMLr6Z8XVAHt97zPZo3kAsc4tF",
  "key1": "5fX9pniBC49NW5jrFBrrwJ9C4PAzDnKGQzJsj6Ty1HELxLw9nPuBFMSJaFLaBroy5NwRx8Qf7CEeAMBFNG1fTyAJ",
  "key2": "7E7gqNczCmFiyFQCP3GEVLS4nRAStkteZ2GdfsjNumFqE1UQUYFE2GvbXPXJwfX9aecuqBtyTxHomdJorsQh1WZ",
  "key3": "3e5qLmxUxBf1QzMcjnpLXkuLGy97BHtG9tZTvTkPvfwd4pdm4veNTknrdW7LdM4qeFNwKcuruyi47QHx6S7qK7fV",
  "key4": "4BgFQVpdoTpb1KRdoBB8bDK4GwZiZiXKPs2k5TEfkZLfj72RsUnLszPC3yySZ5TsWVEbHCFufjspzKsxQ9f4VPTg",
  "key5": "2Hwwu2iowg4DuUH8QpUBh3CDLLjYhombvUMAeWKCUSTyvUy7yufAK5ydDLLFvaPESve4dHF6scdRAzAHiefmLFSK",
  "key6": "5Cc3cM17DQKxuJgdJSrHi3AkqWKRxXtq9mo8xgMpBXG1TkucGyS2Ab9Bt3iEs4saKKimSj7D4Fuv5e2yumgsUqkW",
  "key7": "4bbXF3ZTVRVSMZn3C1ESSjb3ykzS4S5rpLWYgxChbcAKv8G8PKbF2tKiSSL9b9DnAdKFk28KWLUPFgnJ1YmSda2n",
  "key8": "4HQ8s4FeWw3fc6yDCAKXFQQdSaijDxwUzDwjVgwmd37yxU5HQkdFw2yFtYmzeMByhZZh5ZsgRZ3kyzXfXn7eTU8F",
  "key9": "4t98fwxeywCnahXuPXDqTzaEpLe4tiof7XypkeaHXjEQMfudVjAhY1JN8zMQxz9wwmQbECegL91wa1uPkX68dDrJ",
  "key10": "2KUrnXsbrjiHG91muahLQJjigeR9zTzMhENzWgkHnPrS5JousmpQgeLcS9DubwHW8BiRW3u35mxqaaZt9rFT2nwG",
  "key11": "RoA3EYqnF6Mi7vxAKcr3ee5ngmtKvTijNVjzzLYFGqDXW9at58B41Lbdg3GY1RBX9eZhix3xztGXzEJSMcgM6QY",
  "key12": "4cjAAiBL2jLSmqSwT7UkzUAJYBAVLWfBsTs38GptvLdWNZSZjqrPoxLjuXueRWpdKhwkHkaNPScrgWZBHFGs6DLn",
  "key13": "5Kka5JPb7ziDcv9Ruwhi3eL6K658qfjbQ7pTwPCCAQbsmPPQrTWnnzaM8F8JXB152GimbbWqyR3Ve5mLQyAT4HgC",
  "key14": "3pNETsbVd6Jkq2FEAESyZA8DWLwFPS9WD895i3jwdasmqVMaLtGfobqbKAa4APNixv5bt5eWMsHWQuYHbaFu9mgN",
  "key15": "33hKAjy4EDy3qatkouTuVtme9ATzoRKWhND95Lcw25Qq8915q84KYJ5snG6fYg3JKV3foKx3aQB7e3cS7bzfWSyK",
  "key16": "44mDM82dkQYWTh9uemwaHaHXrnt4a5oixAtvYb7cY5HiUuEnnpbndcsR66t9NB66PK2G2BuTjm1qw9BaE1LceYzU",
  "key17": "2omibtq5vjb6p2ZfAoBzuiQ9f1LBYjHrpYmMMMNogHQgiQeqfA59djwUDJAEXt9NuMN3Ykv66Cr1Y1ghpDa2v8zY",
  "key18": "4ZpcyYBc2DNXUpHfEJKRCWFwwvyd4gCPcovekuDtsbEdsfAZBHA1DckvkH46mEV4brY9YewYzRwaGBrhJ7EkjvNi",
  "key19": "3mCPtSjXxZFMTenWQjXzAzgwELRsftzA4HUX3xSzfNaouMrMbTNHVbqGfJudS5FG6nhDpC4DVzs11ttGcfcJx8PM",
  "key20": "5QTKY4PofKV758rz1vWNgpY22Ezn6SKFciTVbhtZYcJCMroSRJy5uNQC2dktAZP3uf2Nw3A9zUD5J71SAwJXvhTz",
  "key21": "3PRFSALBMCp6N538EirvDbYS1adm4iWP8nUyEi1Pm1vS3QjSqsRKQ7zoM1p9vxhwFoUENxjX3sYVUR6T5FGwgiQ9",
  "key22": "4qRgjdmzvZva2n4u2ezugXdcVDnehBCDXxnJ5s5JCfia8c3TXFWozFeLFpZv89Hj7M2rmUUJsm3H6Kh416hdt9Ji",
  "key23": "n5WQCKhGiU9n5Rw2MhyuW2CtdAAV1hVeLK9ZkzHMwmshTCWzSbcb49HYEhT4JE5E4QCASndQDo5JFQAgCvtYzEn",
  "key24": "2TrE7tsa2t1M61he9gYQDewrrfa1C933ynTqvLhJJ9HjnZNbGXVPhzgvnHSUn5J75sBc6JvfF3JmQBnDB6ncqtsr",
  "key25": "ZEeYJZyr63cFSfkax7eEFwrDzP8xJ98UviFHmPH2AZVjqMCwKM8KGLpn3dLjGeETJTuMfUVVxvm7C2fWJgcsqHK",
  "key26": "4P6L3DZ1VbNRG5UzpBoDGkNBHi2Scmd1DouzxMRnPepXxZRTQi76hAzSd1FBn6UDmqNBmPs1XbuFq2RWFN8zS1Lu",
  "key27": "5C3sVsx29SSYq5ryTMt1dxpkN4iRKzQExeBPcV36C8gWCWj5HaxtDGj3sU6yg6toGUmm7DDdok4zQpJHbKaDGAKW",
  "key28": "37U3NJEf7ehokNFaknXJdt7tVkDmUuEBzDRhSMvHjrKCQvrCG6tW8JquoCcS2iMqFg2wSok5BVwakVKXb73pb9yN",
  "key29": "4KpnPQXDPrxRju3YptQAHkZPp3qGdd6ZbKry5r2tW4c1Tf9ZyfTDvwTwFYjvtmqy4iQ2CfWktV9AZ3Yjvvx7tpAg",
  "key30": "2bXnZAT3kX3vCKSw4PE6CfZrN77gzzDd4SLoHc4xMj1oFSZfA1pfTa35pyhozmngiNJndHWPwPPAjU5dQKMwLoNV",
  "key31": "3zXboqD8h5fWzL6r5gxYyRTdjxdJMYhyYtmLqWnU5WTE5f854z4yCg3m9Do52vcdFy4HzgpxhDN4MEeKY2zTJW6G",
  "key32": "3cfo2nxvG7WocBAnbSBrbPrYhFQRNQznvQ3xXCdnSDJEs5L2QfXRhRTaL3JRFdRkcfpFm9efPQCRJNNpmk1qzN6g",
  "key33": "4e2jzKhYWTNssjuVhwAiEM3WB4GmDZm8CGwnLwK9eVQb2zrV8KvQSx1YpVUu43yFcmjYwYn41RATzUWViRQHkLKc",
  "key34": "4nDecj2vbHQFWZacfzsmCVPHZSrxB3naJXkkRsEBcuzt5mQEVkVbyNMQqWa46AbgHUZ2gdyeL5cudGpwgTiHTABa",
  "key35": "5r9YkYsF6Y9P7AFdQckWxDKXHEZWbdaR59x56N8gQe7bE5z1GGRvp76RpCVqpxEbkk8sehVobwLjbK4hTuNWK4j5",
  "key36": "5xRzrtjAiDwCtqkuzpXZFxrK1PtskV4pHqXwp1zBwdFmpHzBiStCV27XugPKbJKfQTCoguw9vNrXuidE29uBHyFA",
  "key37": "4JVoKaLcWBwNFZgSJb5Psa7vPz5nW6LcUMRgXaggddfyXE35rXvf4Ah8ntAbyckyvPjLHjWUEDEvX6T9cucyCeKQ",
  "key38": "3GwBrt4hc4t9bPFuaGRcbMVAEvTy3zSg73rBQF8VcevMnfYTaGtE5RD41gg95aM9Q4hbnMdnGPF2tY3D7fTU1njH",
  "key39": "2xZ652hBxAmvbA91RFsrgPGYPG4jVrGpjBaRguwJvXCxmnHTDrk9CjzoCznAtSBbaPzPbEwRPhi1ZKqgpXsBqrCN",
  "key40": "4bBe7r8M1crdVr3zxxxbfzMySSkDVcYBDnT5ZuqDoGTYE2b13jE6LKizoHeURixnz8BToxHXoe8j282MEF49guo3",
  "key41": "2xMrnzSf2EGcAviFQLjigZPuxEAMSLvtNa6e5nqBcVJ2ftwyxf2rm57mftUy4viQNCjCiYMuBSYycU8mCdbJu5YU",
  "key42": "64QfmyqWrzVy8ssaMm1YcGV8NcJpikmUz9uSfennDT5ysJPfLc4QFCxJd3x6BBjcg7FwK95whFdZCwdCrp5RnXvE",
  "key43": "2n8sh9kfThnNSpsNC64erZvvxtCBwUhEbp3CFfPxhEBh7fH53dGpiR1wXNLSqJ8Czf8omVmdMkVxRSWkUhZHQKGL"
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
