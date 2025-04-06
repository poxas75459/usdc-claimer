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
    "5JUxH9N68dxtsDgQzBmBLod7mDiaS5ANW4jvCQpFhTHjactkd26wWv4vGF5oVh2KC1w1RbrqdGz6gmfDoTp7VVqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cVbT6Qnj7Ra8kDhtbf6h44MPCezWZhQT9j397dZX6iVMPBDK7bF8f88jG8VdJg2haMimmAyoo9GgwsAqw5mXRYq",
  "key1": "5BECa9Z5wbwCm1dQVg2CF43mcMfu39m5Erxxg3pF9sQnv9ZuHjnmjK4eY7pyG91voNU7SkMdM4axAKziaahFxpRd",
  "key2": "67RET3dws68Tf8qnMtHseiXqdiZq1WAyMF3Ppe8FJ9PYSGoiTxMsnMBVbZ5R6ToPcjYcPWkPLcGRnDxaWBRNkZqD",
  "key3": "3piLmsxhG6xagwZ81CXzQoBDTsAd8sMV4C73cVsKxjT1fEhC2Z6MoPNhzb1b4kEN4aBueMWw5D69FU5g9XUnYGpP",
  "key4": "5dfJv1yLNUDHkDZvtft5s5TcCH38AoJD5Z7mrDZFkPZHXJtk1jgJpAf5aC9cGw6JXZn38xhHbN2KBYYViF1Rfs75",
  "key5": "3q7UpGzoHzi8qaPpQsJqgUJxBzRoZYDdczM7TgPwoG3E2M1572VVDQ11qn3uihEbuQ8NDvhuQrkZv9sgV76LdPuU",
  "key6": "5YFHx687FHZzM8d7vUodfdS2qtoqXWeuPWX1bhExep8uZQiH9ht2Ntphs6FTXU57SsT4K6ncRmmD1du5EAHP9Uvu",
  "key7": "hG89oZookMX3a5eDESMwNzyaRJefh4UeVMKsVnPwQZEhVSBfcXYsAwiRjbx2gCpwmZwSyu9FFhYf6cGhxm2bv4Q",
  "key8": "2ERnakebLZW6TE6aHGMkDVfU1EXf4cC7N6YSasqyEE9rgGE3xmxXVJzR9LC5dv5Ki27WsywqasjbcP4Szapb8xkp",
  "key9": "3d3UHkKUyhheGHCUxbXF2YmSy4X18GyKif4vRd2i2669Syqtbghbu4o3qD6weAb4axvA7XcBMJFRY2e6fCu8kVSN",
  "key10": "4aVfMzoecaQj5p8hX3TQqDHRYxVPQUdjBMD1eHfWkmhFHop2qWWYaSCYqSCM4qbfWM3Mbv485i6jJsA974hT44Uo",
  "key11": "5TndYbUzeVyK7LUuQhTx2XSwRH3yJDtxKxkiMpS62SEBw9ymbQwBa7pqhMYGUzLG7cDczSVghzLhQ9YYpDctb49e",
  "key12": "3mAqKnJCSuCFjnNnhW6L9MPUDB8ugxL4SzbK41wV8FpDfYVkNejME56JB7GFDeAXKnv6VYjyrWpCqex7uuB3Q9hz",
  "key13": "3QU7v6HVaBJkwLmWBu6hRiPKZK36dFKcYBWcLYqot3MqKpkaztZj99KbSq8icMBw3NMc9Ttc8cCT6eDnChjN3Ey2",
  "key14": "izHT5f1k3NW6Rjjva1FReJrisTrV3gsYyHHezUtjE1Tjxf8V455ZS9SxUGcsKdZC5keoy7FM8QV5mZEBk1JQ8hD",
  "key15": "4wAwXn342gbzZ76xzykNGtucEAjjhsMfekTwb7Wqa2XmdPTmobFKbuE3xtsNdQj3ScEtwZEUT655r6qPdoiwm83d",
  "key16": "55hLBCBZhnif7MFibwGNDaxJmyhYo3ypVFrsdJkyoJqY9Eh9D1uK367NR1stRLqrJBjozXDPouA1NbRoUSduExm8",
  "key17": "5GSv8Hdz8kAa84Sh7r5RXabSJwAMA62n4qHbzXpMFjUMGYYkadGzduPxufTEdoveuU8T3joB59Go6FoLGk6Jy86q",
  "key18": "3mVRFvcWg5bZs7FVg3KEyPqbwDDtFcTKwoSUuaZwMnnL7Ab6uJ4pHLxaN4Fj9cw3qXuBjPsLA6uo575jW1uPTtt3",
  "key19": "5pDKZzFSyxUisRYeBnN9T1fgf1ULKJBqmKyBH4vz7qnYjiiUrHEgPUB5w46bgTZ4kjf4jGZPvrLohT3TwS6hr3fU",
  "key20": "2EtRmQJ1D4JAdKvmY23gYoUjtdZSX4Jssw8bfh71V8rpPQ1JzMaQTfnEB9drkeX1H2cQo4uCr8w226FRF86zDhXj",
  "key21": "FK4hKW7bRoiNiZYVGTneKm7vBpfFZqRckDsBvWRLksdxz5wojAHAJ31f2ieM5Lvie5RYMMFafrvkKS6RRWJUKyA",
  "key22": "29GNni4SETzVW9JfJhno71EJVjPRxXypUdrJJpdQ9MSxACthF3yNtyNcuvWYMxRzWcywsBCoRygX83GUai6T3z9Q",
  "key23": "3JVsSVewUHcf3DzhjBfZ3PqwKgsAcksF3JXz4N1WEZ8kENuCtpPrHSnDi5Aid3WcigX4AJXsRqJHXx6yS4sKJMJp",
  "key24": "3S7Q7d8fQB1qfPcNzbfe3rFHBoifF9nJ8h4hQH9Cg87hY7e1kNMApEa7vS9Br4en9vRiPqczPt9aKQXGANY4YKbW",
  "key25": "2ho96kKmfijg5oWisowZsSdXjbcZtAYSdHFwbfC9d7ji1gJEJHB4UUD3JoiXsMo35dtq8bhS4UuoR5QY7Hokhyfn",
  "key26": "5UhoMgDNF85jS5PQ6QmypZHpk8X4Ce4E4Q1ax7dxEwK5zC3hFnVYnRREFB9HsSsGhV7c3AzyFegBEqQaNcfsrdJz",
  "key27": "21TSkm2sdAiLh7qq3xrVr1Xwq8fWLVWYSVtNzu9Wibrn5HbpdE9qHtzhWf6weK8zxCf9fGk3eusL6cnxQnLc9z35",
  "key28": "2WNcwCgHWzdyuyxCRMSJS273Woov44m4fKK63pvp3BoCSMHNHM7vk7ZaMap5Ft5cNA79umnybMfBaHFTd1VuoBXh",
  "key29": "hFtMGmbuN9umZvV5vBkc3XUsvEDiDniZH2bCpHXR6bJsWJLr1UsZWcsGrcNBiARoTt1FtMQsUsB24xsTuk5EZ1h",
  "key30": "4AGvDqehVo1gSrVGFm622MoWTu8sAj9Q277x9ZrEcCvptuBTD9ofW94TZYbW2UBRK4rwercSNnNbNbVpF7ikLMtT",
  "key31": "33nAn1vPJ2zaLq8xCnqEU1xsPv2W49TbsJpPShrF1fAbZSD7adgN3oNsKrMMxbubAXKBDAPZkGMoQwyYg7f2zXg5",
  "key32": "2dbvA6VnuCN19oUfCW1G9yQSCdWPGGgb5Vy6jqUeNRsVK6oJjRkDx4mB3TyhZoBvm27pAjbvdkThsLhUH8Zwjk7V",
  "key33": "5yKeCnuQpAmyVSqQfbksFvhkenphBM6wseT3P6HTxWooQ5NQ7xrdBTrSLcGF1ENZZmHeoyFTJikKHQCNunFBdbQg",
  "key34": "5rJh4tp5o99SqqktkHwxhAHWG1CcP6b5fXFXLF9S9RitTfjPYNC5rUveB9DfYNvJMkhyk21asZUoihCTzGxkJxCY",
  "key35": "5mAeAadKHDB4NgQrNxfSDhuqsASqyaBbkHNNyCK8XjCSZVPGBSNcvQauJW4VGGCccZKknQk24hJDWMvBHnbxSWbF",
  "key36": "3VPwN79nmrLhePZbki5C1S2LzX435HUE33tXGiyb3XPBH1QonQxgRpovNEfkqVDP6m56bhu6Lr91ZTqX6CD5YFUp"
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
