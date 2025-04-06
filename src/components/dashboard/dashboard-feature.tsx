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
    "3MhFrPxTCNQTaHKa5b89QQ7UQ6KMVn45vYm77DTCmw7x2uDCHcWM7Wp9iU4oroTbwkYgQTnoQmXWoKpryxX8yS9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJs2wBEGhD3ej97X63vosJDy3pw7AfMUWvyBA5GmKFZFP2GJp5mxPAqcrJdBfe77gGgYZouz2xvzbJt6ppXLLKk",
  "key1": "rq3eFwUB9AM1CDWUPZh6QFykEfQAi5dsPcDE8VFH7t9ocoUtdD2TsvgU4iH8eN4iUvjKFGA4PLg66rmJXcAActi",
  "key2": "2qJRqoU7f3smGEobHEU3KE5L85WgxF9m5Quj5Fcttjjo6CJapvTKwtb4AEbukGq81q3uvpYvNdYCkqVbYfCuJx6W",
  "key3": "3sRckudhPKCckV6jSyrnNSQBFEN9opMUuYaMQFYHd18Ym8f8wdayUCKZ6bcqo4wFhmFgCvigbcGWoW1SL2E9PceK",
  "key4": "3W8m52RLm6gAxzfreQS2g9ndvNEa8EvaM5DUPbJjf9JHbZViC8JFzqAWoj42PeBdR5NxqUW2es5Sn1GSYCgzDpSm",
  "key5": "k8UJDmbV2gHqiGrrw79tZF4xYUoV4t2aKp59BiTnDRLF48W4tvxoMzPhL2w87dHnovvkYqEvRrKCPbWZPzuQ47e",
  "key6": "2EVHZ8xkaWKErwXAkZDpGc7i8GZPbLXJt6RFrn9nxwrhV81X9dPTnUgDvQKJvqj1qXooo5dPThoNadWhYPk76bxa",
  "key7": "5Rfk5bwa2MRwMKXHaM4aAsLZPV49c1TmYaKHUxXMqd8pB1wvKUhqavsWZK85i51fQc2DwfrJwFCzGAy7mRfv2A1v",
  "key8": "3VS5JVLdHhRHrMojNJJYTBX6Hi6bJ88kQq1BJ4bU6a4PkoWZcF3SUxvzGPRwbzvosZqcp4aZS2By1tG36mmzXauX",
  "key9": "JVNLtPeyzzK9UmrMkirnk6ws4FeyxneWP8W7eg7bFCCZY8DWywGnZ5Px3BFJ1t3WmptH4SgPR3gDbR4ciYVqcBb",
  "key10": "5GyHZFFeS3wY5f7wks7P4u16UsV8HyhbeqFTCeMdoqqDeENfSPwTEC957x58iVk4fCTqMna3hCHpve4uCC5HyMSY",
  "key11": "Y16xiMJmLeT8zpyP1mXVRs5MCVJeVBoF29H8nGJL77gzJDrSNxQSmF9nEo4xfsKgthNAarcqW9ozB7SHnivusJJ",
  "key12": "5KYw6JJ7kF2qJxebfCM2ATkkSyJUfmV1jTSGTG6YWUMjewFScXVK9kmamzvhqSkGXUai7Kecb8tf5xB6sE66XCVN",
  "key13": "cAcnvNvAB9AG4NsEXcMM7yJrkq5fB2wbMjsZocqvTvEr65HGmuVjcBFNRtQ7wqefZc3ZhBPvyyVvcVvJywLsdQK",
  "key14": "5wgoRwU7x8jpm16kqKmcy9UR4awzM4seQw2QbSC6eX4yaVZrCJ5yqPVGLbNSkN2cF15NGd6EMp6BchWEZ83C1dK1",
  "key15": "3D2EwBJ6Ao9gP7Yw3LwKvWbqx5ADdeVhMaWuyjTJLLGg4uuokVoDpnCwdb4t6uSxbWeA17vLPKgQKzanNw3pZuez",
  "key16": "3Y5hN6TDHK3VK82yM2AANQLL8Exzi2qhUc5yKVGNwWM1a82aW8Y9Cz439EjLQKpKGcmBZsbPJSvM1NtUhSGPdUkh",
  "key17": "3mma9exevDzk5mgzsLoHLEwpKY7abaVRdxGuWAtLMh93HhPsdMd2ThVtyPJLwxTiAvoWJ2wmX9mGWidHQ1ecgHtQ",
  "key18": "3TmcbE97d8gYSNSCqoi1xPNFQJbPS2gkcdfipgkNahJESduCB6DoQGmVu2BEDb8tmNLTitmnEupsumL5kxPmXxuG",
  "key19": "3Sch5LpGviBM2tQ9Bupk1pu4oGoAM6zXSuKeqRwgdD9nqsewcmnVfxR4GWcfEeUQw9E5REsJieSD6hvSURc59Bu1",
  "key20": "5MYXWn5dA5mE3PLQEbsCffy9Tphh7ZZZnCXZH6TzmxDQuytMLeC83JKcPXQbuzfFhoeFpkXYBSYXxKhMYpaR3ZGb",
  "key21": "5He8dgHrhFsdzzfQdhW6vcJ6ozaVdix7HrPd3xifBbP9fVbmFfdWTfbv5G6Q25pWkYjabBR8U2BFyphiqcP7SJ2G",
  "key22": "3GkqTqGHUC8M5BaL4MHYRQSf7HGVh66w86tYsidDpeF4JVwVNjL7ezmSvpquqxsu4QPaUJMH5Z6QRKQgQBsLuTDw",
  "key23": "4QDW8iqxzK31BhcbAJ1WYfLnjczpctVvdUNw4SMkTZowf2MJj1p2nSFbheymwdK83XBxJsaggxqaJoSa9rx6H4xo",
  "key24": "vwfviHAN923gsxWdjWtfGdvqm1GAuQk2myW3DyaXPbcuoRAgmTQoWk8BL49rYwicpQS7ZpqiM8h13BQx2dvVf5j",
  "key25": "3288qT4ivyj4jSpS1KmjoNg8NmSgMPjPwSBCX2UJHrtzUqySn6iMSd4Qh3N2GFS83MLGBZUBPzqweihfu52qnQHX",
  "key26": "Ytqwj379jg82Neud611ngENQnDKDisUPnvGunpbwEqABiqGfhFsdG1fqFr3DSvvdWzTXBF6gTZma14CQLbzM7co",
  "key27": "5TrZ1A9Ue3yRr95j4rXwcYTSwZjdcDGyWCW57nWy6YgpyaDwUuoox5812wYWSpLydbq7xgZ4kMPBGS1BLjBZsQJv",
  "key28": "5hV5nhTF69PDj5JTCXom5kxQAToFMnDErjgVekjxtRRfHrnJbuLawU9HuzbRffqyExqaDPaWcHhgxCeBFNNhkfsN",
  "key29": "PE1X84BAoV3K86XArvBvwMxB5a1qwwF7RgKd16rRNFPVUEXfXbLtcsY7shy7NAHW666RddmrsAoeBVMaN2dEN9k",
  "key30": "MuK1FwuQutkAupZEtGKbsdGk3BFKhbmFZdMsHUsiN396bFB9Qi3U6B6o8xpZ3RNyQ6pSSsqWeWEctypjPR4fuxi",
  "key31": "5zxLp986XA89kkp3XZ1Tnj4MZErs7LNzAtunKFyfYoYJcL3cWCh5b24ggsF96sqdkUQmFmG2Fj6v9Te6toaWx27t",
  "key32": "bb6fbAo86DCivxYYLvXQJPLaTyGcLmumtcFX63gHGSSkivT9bum2nDEn1xGk7LLJDc5Ex5w5Qf25uhUWDwrajZw",
  "key33": "5JfwKnW6KUZhXRHNEY62hCEz7bL6X4dTgmit9BqorgvokAs829ZT4j28hYs5XFTVarwiswAUZkA77K8LxmRy52k7",
  "key34": "35grLaT1nCcrEFmpwQ9i2ReMcLHwEx1Kr11Vuagom66fiP3bhby91yMd7pFttPHam398KWYf3L63avBmieMzobuK",
  "key35": "5uHdGoh43ctbfHsxaJLrNX3AL1wP4tkJVAVrmSm7KWyaCx8Ss5Q99sHGFB8LdfHSjbb8NxkJhP8KKaDgc9ztWwsa",
  "key36": "zqfQR3ucFHiXBBLsTciyfrfgprdBtKvtKGiimKXgRWgQ1hGTb8XrisnJuKoPJa1SyrbjTJ4u4GgRHcVdq1zBF6B",
  "key37": "4YTTd9JuwLR4XWFWtBBk5yR5GiXTUG198SFxdxfz8JsgNWA6KEwMijDGKeqJhckNQXqX9rjNGG45LeXwxwzZfEJt",
  "key38": "m7nozwR1WsUMxGJZFvKfAJnEmuD9HCfSM8ex7BjThzPvg9BNnsib2xLuqSrRTnMawkJYUG96V7rHru7kfSuy8xf",
  "key39": "5GkvDYGa2k6L8gmB2XQ73hEFvKCFuQARp3RWrCN13d5hC52T6Z6837sQ6j8DQbHcT6fL3FG1XGKGaxaYANVXR8ef",
  "key40": "2U2xbgvQ3H9sp8GtqvmD8a8AkLgNzAKRx96UPAPnsWiFoPtwCLkzg7VkWecA45xouEhUs4HKddbcCMnHFjDTVmDn",
  "key41": "58akSXgwZdCtqFyWPHPoDhoBA8hp1TG3ndfdzhy3g2C2dV6kZuTz2hySSyvxfJ4FqVTN3SbjTBxRJYPUNk58btyJ",
  "key42": "4xChzydCqC3Qan2jj7se3UeX1pyB22ocd1uWZC7CrhRCotaNT52NormBo6EdgdfdZJxHRPJFuPJ6vm2JGAZMwuQA"
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
