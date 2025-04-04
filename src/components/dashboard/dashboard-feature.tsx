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
    "3bKjEM4ySSZmLou8DsQgakpjhr43jajPyEYBm9d9Pmfri56TsTmK3ayWTqbgfsFbwU6X6T5Bq2V6SyqKmxRh9AMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MvQvXMpqYPTyLXd7twMdf9Xbg4PcNW4rNSfufoFYzFL39ye15V8HKENyViM9uWVvBHTDpZizP8txiBbJzEkLY72",
  "key1": "36yz2iMtE63LZVKGwUbrvZiurfvzmUqzrzRQmZdveg1t98RiELJGAEShGaHkegxEvmHEiEVcAjaHPqjxDLxLqn2V",
  "key2": "5jSLMjrBsHEzTo1H33LgYEKNH5v8jqA2ZH4offSjuPAAGcAc19udqvjfsdTWfvo6JUwDoG5eEAXyxYRN9jbCHvCy",
  "key3": "58q6Shmn9CnAHrhT4rdJiHjhPKLiD7VtdDquacAu1TNBBb37vySLdhHJD5Rd7XSj4HMVKrSUZNt9mwTpAXNNTQz5",
  "key4": "43SaMTvHSNyf5DYemq4VdoRSrnA3qEJv36xbn3BmP2NNuhiXXPhfquYKVjf1NWq3w3rvFmZmqoYsG4kC6RyWM39M",
  "key5": "47AP36qrkQzTotXxbsYz2rqRmfw6meG8nRL8eVXpZDo21vznRz2tfJky6xP66fhZjyKFb3g4MNcHjv24bwMRft6p",
  "key6": "3FtaKyz6UeBFLTTReb5Rx9xWb6J2Hk5VWaNdo3MN7WCpCjVqZi7BWj8QvrUNS7k6Ui8euurArR843NqX1yjyoaCf",
  "key7": "5wUR1FtGNqgs8aCZXiEFVTo1iUctKU61uFWAPGQLZtT9yKqQo3VnEE28wLvSefoT4ofyABXMpJAz28oDJhEyXsWp",
  "key8": "53vWs1Fg3BT2MGtgKrAXDkrYXWkYQg86QsGZef6SMbg1p48prUF1gDUJhmXAt1t9M1AcfCHD9k4HrrCtmfQHcoP2",
  "key9": "hCtJ7jJQsVLt4VkHy8VmmZjyWDcjzmLbCwLSZj9Rc46brt9Da6me8SqxG31ryoxjcxuMPwrGM2AtBhDFKJnPxg4",
  "key10": "4mo24cky7pxDTw7f29EnYbXie7A42xfErcj8maEamiaoaKRe7sBPuCPHxJsZGDmKm92C4FYbjYy1M2VpKGGgaRPN",
  "key11": "2rKCkWCHKFWXGeE8TLmTT3eZVnAmjZiHmNwFMLthYnnijRoZULtWiaW9AuFcaUe6HZkSeYixb7L4RGWYHXwDNtPH",
  "key12": "3dBKgrCN3vM6v3goU3cH4SV9RYYzxoL2TCTptRRc7quVeFjZ2Q2DXPETjeUiUyFipprZ5C1VTdmjmkezf768pGXj",
  "key13": "4kyXfAneT5rBkyzaQFFJa2TJaEtMPkx33GWuCAyrvBYqu4HwBUvrZBsQojE8ZEgvsmzfMc4oP8QuYxCgU6L5Ghmn",
  "key14": "2xpynXGZyV2EsUKtosB8GWunVfVqo2zCG3Z38kCxg6FJqfNRSGWyqBFawb18ynVaY6Euipj93Xz2hpUDAWkmaMrd",
  "key15": "3g4cewPdUvBTkDpJFHGA9MgpV4tW1BxkLDaKHrbzns4Kqtqzg7JRoy2n8fLkmb7NE2aWwVn3bFTNkpLKATcuP9ZZ",
  "key16": "29TzW9ExsSkG56TjrBtunPo2LHg36xjmDHnZUrUzr5FcZU3tJqPgUD58K3rwjesJih5ZDkyxvh3bsnwDwEqFt7bp",
  "key17": "2GCJzujW4t87dq72vHMGf9vBvkXNvHoGtTVaD9egMc6NPgaSAX1etaoJ1PdbMSsoYnh3QBmK2coGYhY4v1PcnE97",
  "key18": "3ycbcraUZD5a5kU7Y182i2ncb54macb95vpHdyH3KCTPkpBeGnS8Psk8265Q4jVuwq3khG8etUqvhJT9y8emkp9F",
  "key19": "4tTvJV2F7wxuRigviZN14GbXkKoPycwGo8CT2u3A1MJdZmrQHH5TiC9EsUXrzCxW5k1j2vP4s8GN8DXMh8dcUxZs",
  "key20": "3WmgwtUJpwChMhWgwB4E4SfEoYJLrXcb55Zb1UNX3gYbgdc3jjRsGEpwyJ5Y2iVAPtp7ZjX3DxSbtbmFSbjdhdec",
  "key21": "4NrBTYUf8rQDbBDGLGjmsrJDKGs6V5NgFAvmXTBrcC6P9N4vt7hm9PVMXfWuBiLQXnJv5o3oPPvq8rywVXv2XWGY",
  "key22": "CfJnqYAndwCxJoMuJ1GDic5SuFpR9ncAdVFK81pPVAfDtYxU2MYtSB6dyzNeSDBorgycad4XGTfVmsos93cV2XV",
  "key23": "4nk9cDzgTK1Uk3uLN5VuKJ582e25YsQStkvCnRmkUqyDhjuNSuqM7TaqcXXcCNVRosB85qtJVHmxzMcSmMw3a9tp",
  "key24": "4RCZdvRbyo8qcM9CyTXhLi2eVnM6NHCbQB8cMuHLUHFBwKQu5XxsDaSJuuwTJW1PJMikzGoLTQTFc7Xci38MjDeD",
  "key25": "3WWGJWsm9jiYwR3LtzdZWQQSsdZpqugqFqMz8h7y8vAPY7xjV3cjXgDNVyBBc2NVpLmjFtLhQXLeXdddqqFoWNdn",
  "key26": "2bnQtbSr22AWyHkyxyJYehtwYqAiUA7BEBdZ64gU9by33gBLSeEhkuJTPtCg36pPE9idfntUDuVxcSgpDVhVqHoT",
  "key27": "rqpKZ7w9NktoMMo3vV8N45fzAykfb6W2kYF4tPWBjAKJ8uyZ8BWaKc4x3PmC2AmhqKz7aPEGHmvjeY3fKa6MU6U",
  "key28": "3d96ProhEPZ3MsTexJ9uTnWYh6bLSd5SgbDuavFoYSCsoXZr1AzTkMsuHenJQK4S8iFtEgmP3LrrFGG2GUGgTvvc",
  "key29": "3bsV22ExBvapQBddD77GXVhahUTCRi5Eyhzew5KQYDCitL3qERcoZMX3vs4PSqVRRxSw6aojRVJfS1qAnvwgtpCK",
  "key30": "5k99fxdP1K6HrwJbDxeKnD72n4JxoPDKiejTo3n8ksaVpELjuXWYeu7Xq7ptHNTNQn5z9HxsXEekdDfGn7Lh5TfY",
  "key31": "27sDCVRfnciQVUBduD4znt4oUzdQT3D6BFtPVW4hbHLaaGZozZCzqLoWjZYjjjSK73RyNTfyob2i6UowjDuNV4zW",
  "key32": "f5TvEMipd4t3VDoJFWyuH5WxSVcKyhqidYvh3majiAKYPKwsCWnb2kmNPFzS4SbNTNpYX2L3wK4DcFi9NTWB3U9",
  "key33": "tqfN3XJMVF81f8xMRvnemmW3eZjioR3KkS5qtCDVGXDmftSfToin4Fxt616jUVsZEiojUa7VNiWKX8Qn5YzNsew",
  "key34": "Hq1eiiwF3Vx7faVsnAeMHiSe4VK3i1pQujPaLaZ8hZcutxREaheDV8MqEVKJhi6YZSUBfJ8msorRjQxaxiqaPxn",
  "key35": "2yV1bARHdc5gMn5T36BphDnyC4p7yDfAEwHV4kTE3QaEpH6z6P8HrTSEHRLUKWKkCu1CD4YsANs3ocftpHWwQYpW",
  "key36": "4vLAhmLbj2tQMQLyaM7TMvgKZz5nhS9xSb5PZTfFBZNvvue46mcVpdWA4phiQphzYBKJGdtXcQthK9rKBoagceGQ",
  "key37": "2hn9QK7KAH9ihMeLRjhpBagbgYwK98oKuS74gijSPV9wd8PJDE4JUQaGDdChj8eM1byFUFuhG7s9nfj2qyq78Zee",
  "key38": "2bJL1aVvZwhzppTDkSeQKJXbSUKTDdrhTsDEGYKWcLiuAhBhTaL5Aauvn6Wt54b4ttJR5PGYQ7hFxWXzoodekw3U",
  "key39": "2NN8LDQVj6PmF6qHwpeWGWNEDeLEPsRVXk2Hous1kB6HS7XSLZ45zhtpW6aNb7wZA9RN7KE4KZbBbAvxh5KfqK1w",
  "key40": "36Hf3u9ShXGt4LxpMSKfaAGrtr4iLXC9vgaAPkW8b29dBDuSNWvUPNCeDEYLiuNeA3mLPhA4zkHAJfvbUxZjNmST",
  "key41": "2SFU8wSk4QP6dxeNqCyy3VdtiwW6EAobcNnhp3maUWiiZbVY2DUbdmMiDkkgQ8j6cidwDKyzmYps3HC44pt5znHP",
  "key42": "5TbL1prx8Xa36pdjr6tXUD5iEEDcv37zHVAM5ruFk8Rk4T2Hf4tWfAcHkhVV7XAKuNbjUZ4SRSFbvHviiaetN9yG"
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
