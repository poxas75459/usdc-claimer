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
    "3egSEUKRJwuKi2JdjP48A4PTkw8Gjp2A66yXSEDZkVLFchTYRwUzh4XbtaRS1fcLQfAX7t7H5szPd3DGwZSg3WWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58DqdHrmPC1A9BvCkG7YLvu3Rs7fH9V3CSve3BfxEUbJBLCjp7bQBACT5jhKpm1NtjVKTAffqZ3y1xsXenKGgjhP",
  "key1": "2D6zawUnaYiTQaXaKvm7UYJh5GzsbgFd1P2XeNcp2XA6cNqRfbkbZTor8n3WnvMjWZgT9K1B3VAdro2n9F5GLy1c",
  "key2": "57PYqdgNxoqw85kTEffQQ8GzQoCVkBpHrEYSa5JSM3SBNeG1dpMgRiHyLVMQ185io5wW7ZWsfHKSEHcMQtFiwN5i",
  "key3": "2KdLTetzNt6wzMxTChtq8MJCS2w4eRcPEs7pRXVhojKYt1gzbcoChwiZT5Gw1z4r7aRgf3rP8LwNoJubqXCyFezv",
  "key4": "49jwP2dxGsPpvXZW58d6PtGU8wuMKkFcn6FJHmDJKo4WYYyrSF9djYzR74zvefjCxcMKGMWm5d1riyMd3tNQXuLB",
  "key5": "4VKvBfadVArii3HVFmwwvKpb9ZLqYtvM2tn9JPuoVmvDzS87gsxESUQcaqcaY6pSrf4NubecbHiJ787X6oJWJE1",
  "key6": "5KC6fEGBZRbLnWVs7DjGD8V6keKPAvjwQTQ8iSt9wPXSxcDmYaU8HdJK6MvygTzf9rZNVBBLEw477ifCJdPtvdgi",
  "key7": "671faY48o6nJ1mKARLBuJEDCgupvsTs71Nu4zvT3F1Q2rfhfTFggepWSXredb1VwV2v3aZmzquVUsesWPuuCNrC5",
  "key8": "Uc9p3yFscULQFetSLMxcSFq5m4C47sV3FTTTW6fQjpdexvFDFrdsXY8yiMYnodn6yrXUc2P6RsNcxXDP5S3a8ZN",
  "key9": "5SSdo1bSWqx2X9osF9S3q2Q9d595bUrg5shQKgwPskLk8BNJ4x3pK2KsghW3neRJc4SLPkBnjzBei4xBCEkZYeEn",
  "key10": "27Adfp5hnWkVb1MZVoUSZsVK2HuxWof6VHtgZ6HGj4AKLRiUDxw9M8pxcrbthZzeiAqmmwzxaCYkE43A99KznS8W",
  "key11": "4rJqCoZss8FVkmGwAEgwNUvzAW3gYBUT6x5swNkDUyua8dcwqfyCdfbmhM3SBXQ63iY9E7cLC4qAa3xbgi2wkPDM",
  "key12": "2u4wgoYZBUPhufGQcVCvU6n25ePKLcB5aC9doMZ2SE1v44qDVtUgKgiote5DR38DqwHgnEc9T9BsdZru3rEwh3wp",
  "key13": "4UVsh9ZBz3MWwvkLg9uV3qpAg74MCirjnja7VR4u1EwWA3g3fF9BFSoHTpqmjpSfVQmHCNgyFAgkr6uTGHL7rTrM",
  "key14": "5Kr56kCLFNsvFdFmL9X91AWzJptqJfRrphqyWChVCwMMpaZC3dx6GHnSave4xqPnnZ7ikn1CCu6GsmGPb7LEecBc",
  "key15": "oRJDRBPQm9A6jPrbKUbnnNkHUQBWu6kLJneP1thcLBTrkMcUmpdrGxJQ4yDYb6GMwGHrLM1FwQ48AmZV3JKziyv",
  "key16": "62vgoBmYzciTUzrWfG2hxfUw57HeFekP59SduEk35kHnnqFx4VUnWk1JY6xJ88Tt32qsr356sw3LhRVitWvXxi9k",
  "key17": "3t9EV9ZEsNLNH5f6M3qqc1FaJWVYjsNkbUPswr3P1rgaeAmazCotkFrSchnPD2mkRssGnxRYWC2ZYk5i6AvjL8t9",
  "key18": "rXrLDT941EeNPZmeHjzn2tt6tohQiJPPWJd4izkoiViCqRHvCof8HAkbUmTsMiogRLduxNaTntLNkFqJJajMUMv",
  "key19": "4wuxeh3mDXBrMLzH7dzcYVeksFvyvuMGwq3YZoRVnALvF8Zi21jWBg3y2Am7vRVM68MuaXx68eSBeVjfn1994SvS",
  "key20": "a7skXatPf4Kjzudux52UGN83qTHafmF2s619b2biRGNCjyCWEseX4FpQ5H3nEsCS3qMEAPpSadsYrkn27ybJvp3",
  "key21": "5g8ohNzSi1F8JPToGTvZr11zH8ibzn2vggj16DnujSKo3pwHPhjHnixSmf4AKu3osBND7NDwzPwnHBJGi57S6krj",
  "key22": "5VytjUDM5sHHstQn33wf9WJWd1Rjb9eP4Tin9f48BkqNiriQuLzVjNxfcdC78JdpwDMiuwPwFWoo7Rsy7C95aFHF",
  "key23": "3xac2B8H353mRkXGQEmgZoMs7jhSBrrQf1nHDKc62FwyqATV4YzTd5s3FabP7Z1VvLg3NhU6eFJGv4B5Q3W4Z9VY",
  "key24": "33U44UPVDKt1ZU39eqEdWiet6C7qxeDbNhhTZQopMwhkX3yH6coZu3HYTKGhq8D2Dt7VXUSYKRKFDtPghEdnwHog",
  "key25": "dfFwJ8X8ZkBCfCaFvzF4xwnxqEiyJWhKvnQEDGwqJN6QA9Zr9TkGoQywPjBTLt7nKHXegszkEeCeswGnvNtgHsg",
  "key26": "RzZ9s4acyCKgRtHQzoGcjzV35kyHigtVNzkiuweMXXUa5pvxaFp9qGz1He52hnbM6wCvzcJFFtgsGhCRsSjBoQo",
  "key27": "4EpQtVc7j7uaj5Q8xmgy1N7ZrGamMN9WfpVyZUQpV8oWkqdw5Qcsf6McSXTcR8ugMG18e7n8rPZ4KnFj9fDzxVQb",
  "key28": "5rjhzP7gr3zQWakWiwPZtMnc416ptCENKtTpLmbsQ2LPN4AT4L9TXvqZwBKysDPaDw5z2mCCzDNuNWgR41HcitpR",
  "key29": "4yP15jy1G2xHfTa8148RXTVLefmV4YE3kkrY7YeKW95TBW2Fyf1dis5ytSUEcHp5NMXpwxPLkoP4bbpAKK3sb4Dm",
  "key30": "2y5iBWEhoPbmGPx1KNzFqmW8BuooK7reP6YGN18ar2uCuBvbbrywoNS7xpHtC9UZD8tH62FHT57wNVAHYyCdi4eY",
  "key31": "23Mf73zCJDnNCU2YK8FVzQzfziDSQy85GnP5ecH3kPzyQUz4deGYgfJXN33CfhnX54ySqQwENajLSCrVGfydR2UE",
  "key32": "SmsFZkNGznXgdRe18EbsphkSRp23NdWFsoqafGeahoQQnW2eNRbFNpVyW5ZURS6Z2Ywx3pu8UbtUJkrRoBhmcr9",
  "key33": "9J91BLsTEU8XXcpWyhgSZhir9xtwVAA9CntnyFCC7mFdgMehA18GskLxT945iaU7uzmF4DnbDRiVGJh1n787xvH",
  "key34": "45fWPycEcn5gqrNNtEC4Hrde9KoxmwHoha2wbXvk48mTcwGqU8CC96Y3FoHpPmHTpLmder2nFsHfmXXaEhbra7gK",
  "key35": "42DNxMZnSQsnRT4mXMXaZM5XePP3UoBipBaFddN2UMQRjDCBW9uhfNemAUjrWZvyFLRjrAWuu3jVnsS7fjBqsxPk",
  "key36": "5k3w4H3Z3poda7NetX9RTYzihpL1Bs3X5UGxYU3FZqHkkW3iCGjZxKj91LkLnpzYGiHth2hQvMQu7ksoJPiA5icK"
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
