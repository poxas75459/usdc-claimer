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
    "DqRJ429dnoLYi3baE1pix2UFRx2AWJ2vHywq2Tu9s6H5RKKabvWKhAstvVQ1qR7HAnHEyjgVVsFM8XmLK3Nh2xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gt1xnuZZGN1uZCcQokJZjeLGgfkL9GGhCaionWEfB2WAhmPrjmro9drcPEXTzE52GCuH8zSdtcdBcYN5tvJUws8",
  "key1": "2f2z4Dm1YopQD5LCWWtNDi5VVeXtvG4KBvr6vPbZZR8zr72PjCJ6UFbvmGdJexyj2xa9MPErouDrLnGdJKoEs5gt",
  "key2": "3dohD8SHR9JMpoTEyMCe2JBqz6h7uGdBCaYqJVgMKxRm9x2ci9t7dMhrmuPQRWVsLQreBSv7W4AFSTPGeL7qWhvM",
  "key3": "4WX9rN2MBM7X2Nnvc7q5Epg91LjXqFwM5Saj3J7aDpEB3dc9XmuSgm7Yt2H2NufPvd6V2fZ22wWLuZpEbC49Lpo",
  "key4": "3gxKPMAaT2DkLfiDd3eKeecZufXjCgzDs8CzxZqdF6CobAxJi4H9ZiKgCTGxcxHkyGy96EDgSqppRPhaKMi564Lb",
  "key5": "5JGw5dhp6ckvvkWDmgxizLmhxa6bBohJ37iRZLv4rU73o1tRiPj4SrLmLrT6Bp31KZdpiS7mSCJejiijHuHYHAK3",
  "key6": "mdbAcpBjpTV6HnWcTUpX5Fpt4gBey6T3m9MQssHALfyLiS3WZE21NAyE2HksWvMSveKi3CQdn3mDBnKMF6F9hLh",
  "key7": "3Sg23BTNMAzeYB4EYL36GPm4c4ri2TSP9yCd8UXVBmNiRorMegKAvduRZCWBdwY2K5rEa4WvBz8wcWG8SXy37emh",
  "key8": "5WoPBRpgNM1qzbTh74gomLYh3wpzs75oMyFFBAUpZMYtcgbkjyiLLEGp9jmX1bJYw4vm4Ku2wQutMvxB2BVDYFCY",
  "key9": "3QuFynNBoaQ2Xz9x3TgGrdaj1ZXqqB17z2Q788ye4gW41or1ugZxiVnrkPThvrcDmpTsUc78mzSSmeb4tvPnkv96",
  "key10": "7zfntK7oCaTsmzu2viBqzjipfeV44b35PJsB6bYNBAgykiC4eTwMpcGAzqb4Saqoe5Z2b61DctMugfHhKUu8wtH",
  "key11": "2FwHgwuaY2tcsoBrTSrEYckhwJcj2uy6C87Ze9ttMXH3Xjp9eZPQEAJaQvrr5hdoUYRc15W97TrdmZRy8cV7CANx",
  "key12": "4bA4jbAQFQmQwoyHz64znr2Hk549abumxozmugvr56uwLXdsvmLCj1FtBfehHRuy2MXHfJ32HsbsjAQHDJLNPLzs",
  "key13": "38QYhozGW3qiwkkdCoA5oNLyWoPs3tAXBGU36YsDk5bekpakWRExRyjaPh2CWcnKeifgoA2jqQTbShazS8YFJ2n4",
  "key14": "5i31ysKapAB1GdGTJ2krekLdvqRehSwsqr6VXE84qdhPVV6NTGoJiRQV5GQHUVFT4ThqkefcjLubdwWp2i46WDSW",
  "key15": "WaBbYmiK2B5yBMmJBNEJpsbKGhdYxf48yq2DWiqmYaguiFW6CjYq9siFgTpnaHnvXh64bmiGtfCsBN77zvGresC",
  "key16": "558TeqZKy6pzn4Rhttc9gjt3hFD1XaatAmMd88vTK6B4UyHBkBGbitYWdtyGJFCvu7mL6vazqhCjwcTrg4HA8dg8",
  "key17": "s91DLqegcmwCq2PvNxd73EtoFajSYNq54wPeh7NDpkrM193tKXQprdxKs7w4a8RhYpXS6QUsjpJv82WNoGWdvR2",
  "key18": "5oQnWKbYjMrG38sgajyjYEdScC4AZ3QyFC49gMjJ71SF9dBNrhh8KcMgGNg4GFpKF6mwbnaboTFtTABwpCVnoCJG",
  "key19": "2RVYSRQJ4ffjQTL379jM7qLEHLx9pS73yBJAdGSy5CHX82AmuJYngmh1yKWuGEKnH12BrRapWXXbfXDVi84hWV5p",
  "key20": "5mdiTJP46fHCx4Lg3LAneBAtrrBBNqrGxyh6ZZZvdgciJUR7rEsSnFRFrFCh8EwNkE2DvLDxTHkcQyiZqTy9qHQw",
  "key21": "2LR6ToNSPz4ia4xLkbbSy1TuG93sScoYzZKMuaQyZY3NhKPUoFnmFmvWwKFSGyqRNuakS4z6PbUsc7EJ9MB4LqJZ",
  "key22": "mjfTsPUjK7otvWysWpj5JAm7nutanMPWrQE6XD5XiQtvzM9VpgHCN97p2MRmW5CheCeT7vu5WPo1HMxnvAsbVCk",
  "key23": "3MX2qoQzKDuVqcF2wjFc8vw4jRuJGBhPsFL9DkMNEZwhSskiCLcELfwFsmU87G5bXbT9PKa7wKFacmVWgQjpGq4q",
  "key24": "2BdTZJoMCvybnasgab5dhxVs9tT5pZxCkAr7SpiuUAFa3rYRgF7VxVXMDziCdCP3msiW9fZ8Ua9v9cBgX83ZAWt6",
  "key25": "3TAZ3AThfqY8pgiuuFc1LDJYBTP9EL1rWc3Gxn5qp8H49NzhNyTQnmBpTKQzkekjzTFhq2TbdZEgQ9EiqdDWeSj9",
  "key26": "Var5EUh8AWTU6WkJSB7Q7dhuTSZosPnv2NqWATBGVRsCUWj1AaMGgXmMqtMdi8iumSQkj2jmxBZh1e1XnWkCLWd",
  "key27": "2rPYhDEip74AbdPcSTr1EksM8EHbiyb8LiwTSGBLPPumHMHEt1KH65Xc6hbHKKzsm8pVwETRG1Uf4UJxknPqsL8g",
  "key28": "2TcRJFfioQ7qEHTcwVJ4kbvBrxZUyx4HoiF4Y9p1gUs2oNhFFwuymj6mVa2z3WFNBTTW7uZZLVGZrNSTjggdLePD",
  "key29": "27mQuJiW3j43GBGDhbGaJoSJPPntZQLDfAzFmYicriydbSpgg7u7MdGPxN9cGhPTUQgsoPYdKGDQKNzgLjMyw6TW",
  "key30": "3E2XwPgTnqcLpPYppQqYuxUxjg4hnz3NCSi4aqWEDhPhJbvr9Ey7J6QbPxBz9caoRBn2fsqy6wJVjRvFrV7dcBdq",
  "key31": "2nahsmuDbJQ6MS8JWyWq7F1xpr1ZJCw6LEKNc44QP93XrgymMgaujbDdqc5G65k96PCFZs2FEPQ6M6jKWsM93Zrg",
  "key32": "3Any9Gbhrg5x6xvywtcbne3wskamQtUXsinsihDcUGq3sBjLnG2kNc9JsAFh3GAVz5y99wQV5pQ8nKGoVkV6BXdg",
  "key33": "4dvvNHQBCNsq84sdBA5KDdUNS7rUDsJK42fJjH93AJu4Cn7McpqYzVFBh7cPJA2fb6fhjjdPhgmXcHfFyR7tjQJY",
  "key34": "EYJjpJancXx5eg59A1SgHJBs81TWp6pCVRyM5npbgiZEA9J8GyHGVUjUD283R98i9EpEkLkUucYLMvCfZscsGSk",
  "key35": "3CNT7vndRTMFVb9pPfaoimGgum4UkooWm6r4XrBxz5PRcNBaf4GpY6WVD2peowAhh6L6MtQDbf2rw9XqfHCNjGST",
  "key36": "tADt7J1ctpBUgpmxmDzGvbMXwsCaTQgGJZEf8K25zMrx6NE73SQzYBvFC1bR6bPkf99bNzE25J5LnZgnHv6h42d",
  "key37": "3DpygpH595RVfzoGnUyd9LLRYbYc3BcbMVnDkUPSYezTxzq1uzSKmcmD3sZY6nnWa8TNt5BzEC4eaqb4GAbMeAjr",
  "key38": "26XonjQCCSnyUvCuAyFm6rMag354Zbibk9PcYPAzrQCd3PBVrGWEeWcWUyHKCipit2MRPi5GrggwgEfYDk32rG9q",
  "key39": "4HdAdvFZjEUEU97CtGkj5LgDpBMpRqmB1mmjUMKNtYQqjGw2zDbcpVghx9WhafH55Rpw9psdE6AoFnmiJW7Dknk6",
  "key40": "5savCNspbkTrtuvJ9rGHXjNXNsggrBrxRyXYoUZPsmX8SuCWfTEScSbwCtUWgVYzJEz67YkatV4Awy4e7Enomi93",
  "key41": "67BTjPrxvuoktEHrV2CDJcmyMQNgWRQQa8VX7yoxgsRwtJ43ii7wMEgdpRh3LvVMANPHEMRD2XuWzm9bH2XuMNNe",
  "key42": "TVwhiAc8zpxFNsABTpUnv7oJmYPJJJC5k2aKcEcM6C8nxY67rP9uWwwmxsUrS84o9GpyDCpVMQCd5jeRZb4ZryF"
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
