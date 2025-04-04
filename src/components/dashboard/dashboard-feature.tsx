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
    "2ukJqSEPY5V4QqDaSWr7xBqfgxUAhVbyF1q2wsswg6yKvQ3fp7Xo1g3o9jQszWsGRzzC3sdQQXpUVtRMxu39Wg1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51TPN8XXpMRz21djBtTSY9Ef7y7198uZ3CsmnfQzatb9gnqfhFHf9DXiotaKPDHvkD6xzjZ2G2SqhR3sCae4m4Y7",
  "key1": "5S5thK8HdBAEPZfhgSrECGCQQ9T1TsTKncyHZJjpmW6kYdKr3vqKVTmL6TDqv7XWCbYynUeq6KHu1muMEAmiqu54",
  "key2": "AGx8A7BAzrxKgcxNfDBLPQFkQ6Y4gJEBJFetBdW1CjpSdCEuySnvNxDS2UuzA3cCiBeYdPzKZYJThUfDtq3JMDV",
  "key3": "N8ufucg54K2gzRJb2Ev736kB4Q7BGD4exELjm5RrbodgLwnbXu5p7RiZvfaDzmAT2H2PoxoMVJxVDUREuseLfK1",
  "key4": "5sykEw239bR9A5yAgMHkkapMNx7E9BfA9H3GBk9tPAgHhFxRrPE9ndNatM4mQTB1TTL5GL7cNwkLuyfyv9VAoeED",
  "key5": "2aHzUB9QFR1BaGei1FJziTvbaes3pSnK3Wo2dw9Vry4153YCGskbZ4EpEJ915u6Jw385ncWoUdGhvhwjjC5cSqMa",
  "key6": "2BtBFJDPm7aMT1LxGaYfkyx6zjT6tzLDKh3puU4s8Hmokkh5gFzKnUnBzkdVk9A35dVx3khRCyE6R6eRPSYCqrSG",
  "key7": "aHxBTnyTkevNwYDnMfqcFGVFH2WUF9YfFkaMTJW5d4KezFeG1cAJ1qoHkoXgLWDtxLrdxKo6pz4vzGaSjxzbjCZ",
  "key8": "5Wa74nZMVKYj3ccaXEguNfUCekr6EKc32w7TXVkr3bUTuARVuEedno33xq42czHhnsHBaohDRUtoyTENNBd5txVK",
  "key9": "5RESGH7C1FpsaZ1D9yoQ4B2miRowEskimyXtT8NFbURpFZXWUELkTuqLu5YRhGm5MKhVBS7GGkvDb6QfULtygaj4",
  "key10": "tQnXsBwRxH2cCTkpPFdtwjHm5dMsTGbCNfKJsGCCjstCmb7iP3L8rsFXRFHXALUgSoBbJpGsRysWSUwkr4Xdeoi",
  "key11": "3VsjunXCzrQkmBR9CnRbmoUTGLEHbtf8RtEH6hUocq5qPiHpAbVrwYaWxvJ29Qavw4ib7fhqfCuwVjHtkbpAHqkT",
  "key12": "2JGZQmAWLZeEWvr3LgoJwM9tG6F8DnjuMS5Si7mKqmQfhqDZFjqUJiutUHmuXituvbsrKDkwas2Q5XPt2c2P2j66",
  "key13": "5fd1FRigtNpe2hJNb5yHk9bZ2HqwkUf6817ofJm6NMrBZD5uLhkpFf2wAtw2URxkvTqcg8G1DMvfuSPrEnJSfCTw",
  "key14": "5uxLfskCXVFvy5BUkDhJHd1vAZXx2pvtKH9jUHddEYVcABZM1uhz6CtiiHn2CgRVpxGjPabb1KyG6oFSmweTXHwt",
  "key15": "2TUWKV1DrbeC1oRxnhWfN9CBr9WDaPn5dkpMup5bMJqzH8dv9BeZXwWHHi4MgNtrnrzSkgjCf6UmQBjXjDsDiXVh",
  "key16": "YqFtv9eNF7WmZfwJeKtg7V5eic2SGGocpo6BmZ4S8AR5VYBi5br6LUGCrzdTsdVVtiePiZGX7DV4sjd6gbXtPtb",
  "key17": "61Dth1BoYQaWEr2nrSZSVMr2EoaBSGXRkexVsQW7XvLDBTCqBzg7kChCmezoTcjfACBfg4PZHE4FWudEJb7UzuJE",
  "key18": "5fkLK13xPpWpHr12zqkDs9Kvxx8x9d4mnsJoT3pe9YbrKWcUu1ce6xbHpqExvmX7juVZ183TkDvbixEYEyeKNNtD",
  "key19": "52SKu6pR1udECQ878Vncc7tMXqUJiMrDtv11s6ti1LkJoaquznpJbnhsv6xpqru1x6xSvQwu4Zidtbsk9xMfpXGn",
  "key20": "4z1DkRBbDyMQqdyhB93JeHGDWe4qASD2xKyAV63G3a2opfxY8kyD9c9S7Jyf7RMLMrdWKbduLrp3NxF8MZu6kAtD",
  "key21": "5oyQchVT4ZCsy5u6XuQ4JHWrDWS9cfmvKT7ajic8tZoeAHfbKdBtCPZFszt7WRogZa3Gn3NSumbjLtRGg4vZdjPf",
  "key22": "4VaDECjBtnPviEKqVYwSJ34C64HbEmWtBQfugtkjZXj8iNvpnSwUJXt6SccBGom9VxrE8VNWvrzBhiC5pfxEb8jh",
  "key23": "5ZPNxdhrrf5csyaWPnKeXV2bDfJ7BYmhN3cCvykaU9jhf3CBvG56CdEhQRPTkV24fzQRYt8RPKtvrws1BbT9g8ZF",
  "key24": "4fWDie8LsxtVadxgXejDbUfrMSqqMiX2Hkpn4tGVNWZnnDJRDstYMM5doaqKXMuF18krHp4Zdwimb7za3YfkPJyb",
  "key25": "2NuaG66SHUME5tT6CFZyR6pEu5r1Rx4NuMmhLRaPJBhdbCtooc7J1uewDb3uDFR5cygqgqpfXEBMTcWkUNzDokDq",
  "key26": "3vF2PPdJSWN8Z6GUjWNP7hH9kj3Ro33ZhN2X1BygvmKizLApQNgBmzhKytwAgDnEgYeawx559jih6c58npyN4iDp",
  "key27": "27xEyMavXa7nEmGhJEVuHsPV5VNwpn61SzUpRuthsqf7BE27ZLR9nS2oDsPStgrMheDXheKCthhNZirwUcwcDxhz",
  "key28": "2PoUtcGfPCv2tiK7uCRrxuJPzhVtXBpiA3nXF8s3FwxbpBDD5pJXGWUExx6uiSMGwAcnjv2WG14ugHrKAsCJkGxi",
  "key29": "2MrUMdkoagmYPWGmvQa1R5Z5ojTMjUD8HQf9hf7V34TA7V5w1JfeUwsXCaf2RwgdwgvphUjK4e7Kp2wrPDghahTB",
  "key30": "xD11oKTYWSkeiZZqqfV86Cas3YGvLawq2s9HZhkB3WU1UvYPhAAaPrLnxEiEjgscsn4qQthJxrh6uufXCka9jKx",
  "key31": "3tz8v3RVJGAkbMxYvRWo7KhmCtaR6RDvY8aekE5553v4TLsMxT6EuqCUjb7umtNkQyKVjQh2CBoSqiyMjFQK4DQF",
  "key32": "2hDtJfbLNfFD3msiDhX4WAa4zKmqW2BKQqoqq2pxpaQSmceiopXg9y1g1ZeyBK93ykFZEgq1PodUq7ypHq54CSU9",
  "key33": "MnpqwKVWyLTEYY8j8ZsEosci9iMqvemY3jqXerM3Bh5JA5i1DZMY6QM7pkDbhsGvCXTd1c8RYaW93YwkieP24hU",
  "key34": "5nusYQgmYNBN4QqEQzmenMwLSysUZx8uzaYpYXtWzN94Q3vG7EKekvZZFdfimpQmJ8zyhDrtsvrjLAgVsGE3chtV",
  "key35": "2DzK4bKebSTbJC1j4uvJp5RhYVrkcXsypD6WC4LsTrLCtAwXU56gJURKD32S6PCYyGVZjPtNCL3BpnXvyheE1d85",
  "key36": "2ZddaQTzWogfR12Ys4NFi2faEJvWET677b5hdQCJQtdAXoQregDfyADRdz5VTCn4dAY6wJTZRy48DqmcPq3xe5Sv",
  "key37": "3Ck5rZ6dHTLDPaXQRBHfUe6ndC1GdkjLRNx1ZA8x2yqGf1QWqhVroJVxL3mCLFunhXyUs3mevhyhqRbZpqkHTRy",
  "key38": "38ZN4fwazrzajvFjrLTFGpQi9W7896BWHUXNZzXXNEXPFWkVy5dD83YBBc8tSA248AZh9ALZ3mTj7qDgHEVqeL6V",
  "key39": "5cQQwFf8Kno1FZCaUyP3rg7Qvoa336xH7xnpnZChtwyohZGr2m8vCtft4voaYH17hgzHRZEuQEhzTsYW5Ztko6NC",
  "key40": "3kDMgnoYoj55UhQ875gWzgb8MUQXJyarBa1SHscMaxHk9EXLQvAUovWsWSRKAZJNfMrJ1uzN5L3kCm4JXhngyyb5",
  "key41": "4nDwGA8bxSUxyLXhFFEfymZS8S27GDBeS4vJDe262HXBtkYntmSb8C7Dm1g2o9qY2SQf4s8t4M6jsn8TyCBgpr3Y",
  "key42": "3iFPWKAeqWrzhvEJreQaHCfMStcxnreNMaGb2MuLY2ocNvgW1h9ZxMNZcDhfAKU83cxMM7FsnSc6N1c5JuLus7nQ",
  "key43": "nPzRMBhNhwcFWfLdwRAiXcoDGhEvScojGxRGEimmWFniQW6Sw9fBp7CFG5AFrmw8iQzzg5GzvuwA64oUxjrt3Mj",
  "key44": "5wDXhkGHABrgRhBuLRFpweAjyutEPJpuAh62hYuXCA39eDQUc3SbdDHUzXub7Kd3L4D5ppaeNrF3hwSwMqkvfiw6",
  "key45": "2BWjWgACc12Wsz9N3SzXZF5fHKdQ2sVM4QtUwDsvgAygmPwNbCXfE8Md7972pXbHAkPCsjKRyq9uauGw1PU6sWat",
  "key46": "2qGBdK6Y1xWuKxSm4VfDeCggcejwXZYu6uBoHfLjpSTzCkiNCL3ycm67sEonizuMEJLKoFzNWXDDGwD5aoqAu7pF",
  "key47": "22wjaRms1Gw3uKFW16q1iJ6Wd1R9n54TA6mjoCKuJH8gQ9PdHAomkJtpmSTMBfJv7y5uUWB7FmWZUkrh5AAvpB3s",
  "key48": "5gDMAfNxTv2eQpJkcjLekzPHUEDaokxYD8oHELneUCdkxTymWSSPx2nnPSAi3G5p9S32V5PMDxhgmJdagFCaAjsC",
  "key49": "43HxjydNnW6rdWusw9QNBnH8Q7pQVGVjg4KQYVrptEYTxtNYURPyH9jNrRvZy2p3YxLP7AbBBuVpxPmquMztrVgc"
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
