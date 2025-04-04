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
    "4jMBM9J7ZGLDygWoGMRoZsMgsHmSgVBRe35uyFBrCz28V6ejWmGGJsbScnbjamt8oNRkG1jK7Z4msyUj6Jsz42a6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HfkniZ8QodteU9AYJiqCdviU6YJh4oY3z5DLzAunrhdj8sVQEMZD3VhQmAawvswxYtEeWATazCYcEKb2fMQyhw4",
  "key1": "MT7ZKM71iba5foAzC1XHz2abgjVXBwsoep6itid6E5gzsmV2Zde8wQivNKapPPdQ4v6hVsbZ1sorcR1ZoThS9Bt",
  "key2": "5LBK9PRPz6RVXLChW6attK4ymn6PkWo27VSaF5bGkFhH4KxxoEqNmbmZq9Q76pGtVTPQFZjmXJXAcdniaDLy9jG7",
  "key3": "5sM5oUe6RwgS6LiENPprwFJi5izVxRXxeL8PxRnTT7c4RVumeYFgL7CZu1g23MFTca95CKmTPVvJupYDhWyG4Whb",
  "key4": "9rBcB7XherV1PgPdoqyniYSbpBQmTAf9qytJgjNYs53jAwYSu3okQFNHPcVUKFUoiWVc8mBLJ1dWQWE1dcFVua6",
  "key5": "4jwGxg9FL3Whgo1QwVZeYAEKgtLRWZf8vBzDMisuawZVuWepVWUCNQwFRhQGivys6QHvda5hyymcYLvUiSpjfcAJ",
  "key6": "3wSNVrg52d2qTCtokMF6QoiYVg3rLink58NP2s5ZQypVDviPMBE8ibT2YUnfX2HGKRR3ccTn5drjpGJAhiKPPTvM",
  "key7": "3L7yyipQnDGarVThwUEzYZKNvWm5Pw8zbCnjAejxuuACSHFCqsEwRL4atfzg2y3sjAG2BsRfP81TdnZmqw7SiK4j",
  "key8": "2zre5x9DvYa6LU5CCKgvSCqZfhGGpj8apC9Qr5euHn1pzasVmWCJutjnRJVECTg4ktr94zGpn94zBMD4UsFhhLZK",
  "key9": "5uqMkfsqqcopZ3JXcXyzpdiuaMoe3Rb6tz5tEiWoBHuFWZp3QmeWUxbH1M48noVcDgja1nMbPUDAUPY9oupgGtz9",
  "key10": "5XhHEANUwer2WZGabUvDp2yXxfGEzui3rNJJLPQY2DcM3Hz8GsP5wWxc3VCQNiRYoTmzse4ez6Fc4QgrQRzukZsc",
  "key11": "4JqpMHZkRboe8CB85pCvFTXcHnojG1sz7nFcrCEuZHCc2uPrS3JBJzL6nLzkeShUby7aj5Uh4SiNSgdnBu178FBq",
  "key12": "rwS65gKNo2X8yzRSFuRRZgHN31MQ4UbQGEFL7t31Kv31fttzWrHF7q5JNUqtVvu6RrLjUUuZXWT4tZPA6nSSXfN",
  "key13": "214fxAVZoSdCZ6zmHjUv7b3BGWpeUzKPZTYzk1N2NLMgNoUr5eU9eBoaH27vCDrPSyMtKcZidwqkxxwyvhsw1t5j",
  "key14": "pHMo6pBLLFQGY8akizqEAEwCf1VcvxZNZuCoreB8w9zyUwpdhF6hVE6jBJzzv5wRhPyx1YVdEfKBWaLeaVyxyQj",
  "key15": "cTmyWVSijgZaxa4Xr9Ba2qbjo7HNmv4nscKzKVRMa23fZQBZXDwxCkvgSRNCZdXhsQRa5aiXDyoAWSkZ5FaE3pR",
  "key16": "HBSYpArRo7vo565etu5NqcL7zpbAoQUyLrFbxXv3uHLdEMvbA6yMJRFSgLWTVmq5gvAdnzRVKFsrEwMtYTvE6Tc",
  "key17": "56qD5QPVuuPKapZNvDK2rVizw7bbT7BCiK19piwSBnWK8uqYLACqjYukosdJJ8BYpN4tr16Vz6PfCYhYbe7dfKHm",
  "key18": "uzfZ5TV6h5K4CgP9bzR4AvvKKehskCKMT7ZYwS6pqaoAaekq8nvy4aCKGsmLsYtGvxbSQjYqjE9TdV68QSVTZ3x",
  "key19": "37GbVcUnrJZAhcp2sFhXSC2oPKFqt3RB6rfc38Dx1gkKTCjLDPEFfExpoe5g6nbQSUoykfz2eBCshXs5h2QgSES7",
  "key20": "2nXNnrs47iYBarpwtCB6pSWTHuFc1WGgXq7Tc3jGHPwrsMeSAbUedpYsrtQiujREGXBtLBwJ4DUQD61JKbkSg4Yi",
  "key21": "gE74h4xpgFQcH1st8wYABb17jUGrCeuPAuLZQQWUiAyMRUdpzYnRsFKCN1rGD3TuFq4nYVbUp46bVoLRe42DShN",
  "key22": "5pRwJzDbpNsrVfphD3s7mZhK1cRDJyDo5kajN7eN8LrrkwwQ8rHdygiKGT4e1Lnm1r9WL5rgUmhWhXrmzvtr9BU4",
  "key23": "3yNnDedwyEUb53ZzVok4HhrL6CWstBDq6Um4Zww9MysKnBUkFBuS6jaHULpshGoDmSKNCo7KEPdaSFHaMyWGnSMG",
  "key24": "37FFN4XDRpdZCFtsLdTTGqgJVSCU1oTwMDT7NnygxRbjXSzNGZi6f47dDRJSo486VWBFWCrjBtLsNGgWK516xCpN",
  "key25": "4iieQuBrfgXmsY89GoLckyQGSRpZzqdvxytGyaXgYPuTyDp7FCELAqTY4Mx2WYsPYP4DnkE2EsgSqEa24VSBP6Vw",
  "key26": "4zmh7yjJGTy9F141wXpRBHic9bWEmK1Lu43A4PrUBj5zo1MjWHruiECk6mjLDcKikQx9CVtasaoNJ15KKdsAu6CT",
  "key27": "W2G2MhU4ruzNmZ6Jf6hxqaZeTigmk3bwim5fLvZCTU64oJWtYJDwwsgMiYZTzqGPSry9amHuyh93YGpyEp3axSG",
  "key28": "66ZcyNACo1E9YVbWuoDM8sJ6DC1DU9kG9vEu9GuHq3TK2L5CestJhRmnhB8TDZZ6uvUY1pwmpAmx4cWGV2VsHUEh",
  "key29": "2v2XdfquNQRPGZVnbzEVthyHY7X55aqh8GJq3s9kWAnEUi7KhwnQ497QGJC4m7h4yGtB3DmHqXjqeQFa5faG6yc2",
  "key30": "3Citvw1JcRZ2oqWwnb4ATPNGN1UTNsETAVk775p2MShA7V16GBAW8xGFdpBg9gYxpSTcJBvaHJGPKiWvK1GqpECu",
  "key31": "54jtQZiB7yWe96RfDUtrDNy8mixseBi2UFHgKxgvtBJEQ98ypNpXYuUh31WFWvtXXmd7dt6ieNrxQcarN9XzVnd3",
  "key32": "2aV75rZecRrSU3dPeZJ4XuKGXxzjKDHXQUftYmsMsvXpnHQmPqMuJ1sCatHGGwHgXARRboMKVMefb14gduZ7nysd",
  "key33": "4fwaXvPmZLp7437h4vG6gyJ56zprwFd7cQk3ibQ2rASZA7UERGLHAjj1SADB6n7Nk7BugSHZ6Xdx9iRP9cVt47az",
  "key34": "4PNtk2eyjuyjrfp3eJp4LgjkVKRpaTJEnm94hwJALJoQmkr6G2q1HEuyNH7Rx3cHZCTSQ63v598nDkmfrcrGDJJe"
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
