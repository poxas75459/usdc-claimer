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
    "C8bqnimwXMPZQZqyS5MTRghHwpiDtGfygqWqDtxo1hW4svePE2W29ahmDNfGjfe2pJkeXhytD5mTDRojUcjNUUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59wXiE7vVffAo3Ww6u7kZKa6HADYaXHTxS8G8iW44chLsbqaRzGHF2aMbMXroZ7b71HQEG5YcNMTnqJdWBdEsnWx",
  "key1": "2nPQQXeqKG8xtfwbmBrPKyEXTFVPEo8fAZg98t5AZqsjghDuE1Cqe3Ud5vuqpvHkA5siNsDMTjCQNe6wmNHMTSQg",
  "key2": "QYdKMyRCf3K3fnKk2R3jG5K9TSrkHG5zzs9hMW6VQJun3bAGQQsLzZsMNumeZDbgv5KtKPtd94ZLnD14h61cBg8",
  "key3": "5K4XtosQCn7KWZ1Jr84eGmRrLF57Fwa6djT7mgEdzsXTtWhHpYJ8WYQG5dCCBPASxm8bQK6TxeYY7eSgJEP8itju",
  "key4": "3yCebqix1tgL2w7XwC4UGkVNec4HE2oxibPwAdRDdnstjiTpPShAL71X2Rmr6cQK4aGdhRyvLYHLHZw4ADqgSoGm",
  "key5": "3FjubnRKgkEhBJSXmGDBLWEKQWEcLgvEc4jBJ4GUU3FYY51aNvn4uwhSryfLVGNabSrmzk9NRr9d2gxBYDtiT3Ld",
  "key6": "SWK1wVguJfYChQDdkyPaDc2RVtEjws8RVP4pwFgAFRmeop9PeETGWj6ncEMAs3dtoWwJQenQ61LqhVBoovFfCn5",
  "key7": "4QwpqffDV3faHURez2o4u7TKtKp6ZALqzhxeKNP4ZSznY2K4JaR39kxawAGdiFKsrgoFuACbE2C5cdxyNGyrA3bU",
  "key8": "36VPD7K8KAcjk35Nnh1m6niXDFPW5ui8HkPqDGgZJdM2De87bcdKbJtnBVDSXjbVHWpPjvyLh2FAHXv2P6mN8YVq",
  "key9": "3YxE4xJ5ToCC8gLGwyXZ4zAZfBjauaf7gPwz4B6Vke2VKRkNdeEeoikDccceZ5RgSPwrPJiWbT3QwPmQT5xDGpbH",
  "key10": "5nx5VZNaucrVo5m7J2pHq5N7kFpxAHU3ExVDY32nPntUpj9mXpgZmxbNTJD2Z3CZsdSCjpBciEjx7ax8bNCsYek6",
  "key11": "SdprRGSnmBKKV5EQ9Pkh2wyruNyTF2rSzmNiYgkgQY3ErtDHSe5mZiARTS3PG7DmBRDvykjKoZmHL3W8uL5v5o3",
  "key12": "zULCS7cLSzx2MSw7EdSY8PwhZEXZYqEsDVJHngptZC4Yt4WzrGrX4zNQSbPuBjYYaYvmReZK2N7dJrVoPTNyQWQ",
  "key13": "2sMpFJdCqxFd2mnFX2Ux3rANsVCNJ5iz1TNJxttk1j8rq5xDAPSMQiWF1UK1EjhTs8oZ2gjXeuxbPGny7vuizwbv",
  "key14": "3t8dxEU6JZmy4iDHxCNGTS8iJJQXerwHuJwWtktGvtBVEBesWTywnbCXeTDdPx75XEnv16VMEuNiHCbUYXoSstmk",
  "key15": "4MfPn5JjiFuDQhoVR5GUMJphMJPJaSK4g2DQYN4SHuMe26GQfgF2KhaXy5mN5E4jkzzb8rYa8opknbQRXV56Qpdb",
  "key16": "3qTZiQeuNMkAXiFFEhy6Y1zrpZtYvV845SzbHfF9MBup8yi7tRrQ8xxLoy8ipnuBXgYY9WgtHR1YhESNHy2mpt3M",
  "key17": "4FwVM1zTwsGm6FuLGLBg9MkmRLVZKEmcfP8NZfo4zxpjNR74m9Pds1GhSmQGsfBsfQanGzLuzV8secWJBgB58f5U",
  "key18": "2uPHNmCpwU8fiS2T42sVQi1UDxsvS2VJVeXRvfi19QLD2MgvjVRj3k9EjMgFpm7CGSVcqhurRmfFqqf5KAV8zPE",
  "key19": "49cnQdh7TWiB6dkqDURx1fUNNmQzT6QWqAbwruFkecppy2h1NaWbgqqpdWFUTMm5eejf2T3CbAN6AGLnmpMLJtZL",
  "key20": "3T59JuH5RGompUui6tZwMfGPKQ9tLPK7V3dGxkwABwGyzBhDv3pUvCBYKEzryt7RYNzYgybMoGZzxsWj5eteNWA1",
  "key21": "5R33czupLpscVCscJHcAEpmdaKEwz263p6CYCka59NSs1kGzoydPYmzjku97ryYytQtcprcUoeAnPZdApspbVWcH",
  "key22": "3cdzE2pesEp2hXT3w1HWmov2ZX9Hz7GRvvGoWHZGkncAHQua6zrnKXTDS4Yc4Fsxtw5Q2c3aowSnLneZhosMtKrg",
  "key23": "5JZvx5MYzjRrJWcoEu6TUYBaSiwMnHDheLvKYfKJscppMsohTegdxytduUDZMidEZXBQgA9SghKmEJqmgjZGkmsN",
  "key24": "3FT5AdhmYAnJNq8XPW3yKFHdbgLev86y7KShDxV4pPB4LuuzbJ4sUk98SxPfwydnFnCmQgoMNczUkLZxZ19BzC15",
  "key25": "5jLKjiXrc698DQqrpPMzbDmGCv3rzRvdJVrehYx3Cp9wRyk31N4ChqKB4BdjnrC3RiqrZqpuPQki5aCrYv1vCrCv",
  "key26": "2DLJShHxutkc7t6HULLSuG1eKwMzhYzqPnjQyin4L2vP1g5g9vne6jFMfbdWCZM2MrExEJTMY6nnPFv2edFTLJhE",
  "key27": "ZXorEiqCAr9zYFtE5eBcAabEU4tNNSXbsm96oPVeE5LoPgoGt1xpNNvqSM9nZJHwCH23giRpCkZ7adhZJ7cGwVQ",
  "key28": "K4FLvuqA5y31bEahGBRjgeYimN2N51fCQcGxc1637CBtdyC3F8QouXCadRBuHbUtSZpgz7pkWTAJUs5PaHZhyh6",
  "key29": "FvQTYnbVyqhm7hSoLMV8VcJxHj4PmDiQPw6BokMbw6mQLiBHVuZbXVgQ7uCnRkq5iJ1v7DcCJ7R4Zr4JiQ21Gwt",
  "key30": "uL3sDNq4JmYVq6vPUysRgYMKfdb3QtxTSDE9f1Ue5ezY8F9cRFKhsmRXQn2Cm3TJZMAxNhcQNzxry4WoS9Mk7y2",
  "key31": "4qysp8kykysGn8EX7TotTnghfgddf1vwmmXLKGfMRMo6YsF9xaXz5nTmyKgFv2PFzTeR1bvsk9mgdPzuZHdhYdy6",
  "key32": "5ypz5AGgrAP2YCN54yDCKYYKcLLKrTswdNnh1ZxxShcjF1TqwrgsTGYtQnhV52nJcxfJwGupAdDrDoGZhRFtkNkC",
  "key33": "5271i1Tq2jU93gDya5FVhpbqDN6giNs9NFEq76ZB4EqDb9fxbDa8K1xu7KRA1VKKU3aDtb1bd4ypHJMqZayL9ec7",
  "key34": "2hG4NeR8g3DHCdVVRu7haXcrzNtH3pRDReLGmk82Ka42ie8MvXu96k1EL39r7jb19PpPfvTiLiMUTDphSAJefezZ",
  "key35": "58TfJzhkQ8zPpqptrggr6xFYmNKqwtt7fQaGUP8Sz41ApYxhYkPhwcuGeqv49KUXqKTF5So34DMmtvbHyvvKcmnm",
  "key36": "48UPJTPZKRU1Tq1GH5FwPft8hrhZMif6hgbRCKELp2cGyYypNm7jawefUFsTVTHCWQGJayMGxCABUghWTmAZediT",
  "key37": "hRUCTazZLrAmpN6jQTbhW8cC98GzRmE3Pm78TdLELozVaAfc7FFqfvTU7si5mKid7qbvEb12kkC74VP84k9pbSD",
  "key38": "3QW5MhYTUXYSynSrvNqpJa4yKTQYEdZHojaXFBSrEZqRDArgfxCkLrsAei6Bkg7q96ziZiqQ5KdUKBZfqjAjs9WC",
  "key39": "5trseFggm99WgrvXmSLBcA627weJ3aZmtZKZunqpV1rXdZRjP9kntQsWtWTTM37NVeHULjEoLokWj28nzjQHrk8A",
  "key40": "2ywUFgafFpxUpAATHcqMQL66AFvRVTQWTmXGwiSoyY3sSizzQLVqK2HYkKXUgiGyjPh9NXRXafUtjxSxsV4QVrgY",
  "key41": "66xwD9kaEdRd9mJ865zZXwfs2EcKaxpXchGjg8rT7T4akFJZ3sdD46w6r4Xu99Xku54FsmhSmsHt6qhQQnMyg2gE",
  "key42": "3mL5ESVc2uwbM2c5KMAarr8owd5NUCDNqVxgXJeqp2uSEknt9y5oD4TPkVn1DWBgDjnn5byv3YvPrskX5ey74JMr",
  "key43": "5ggqnoiMzPTx6T6tzgLhEMa2Hp7eeLjo174NpXGEcPuVCD2buZHfMh3er7NWRH1ZNQzoGQqg1HykKHR87DaBwWjE",
  "key44": "37arCuQ7JFUvpou5VJ8pBHKeMFGbnqQNQUSDM5uUGP6metXfp9vMNRHGmVsCpiSUc46t5wAK7YNFK4R6P1W2Qkhw",
  "key45": "eaNQSrNBX946CmCawYKLaGFYYxqsxvBwMXVkFncZkoaMofCeYggprBs44CDg92LSHAc7LEv3pr17zBzd3oCTvpr",
  "key46": "4rsDnuSdiUMrevErLhcXKJZPxoDq5ZT2NCL84WQ9zbfBWXd6NMpcBWJ69RRc7JgXCik7F6GGifnWQbpSNq1vCpvL",
  "key47": "3qzEvtTkeRQPZHN8Psy6J58JQC2A1X7YNkpHj96Vvd5Abm8ftqThuqFjDvmCuLhUY8mAtM5wCgJ1CNM2pjpkvZxn",
  "key48": "3NYL2DYF7FDTCqCkbutkoWfW89XMyVWSeBEM5Ec79jkNVLhXCfLFYXLNQVPxQZKx2Xc6ifayK6PzbmGaDiBqBfsy"
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
