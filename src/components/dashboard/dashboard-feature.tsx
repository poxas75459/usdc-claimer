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
    "2KbYXYzezSCa9JnVuwEQhh3ovuTNV6NPQ6rMGMW8cD6SHqY1UXrU7N18JNqw2Ycu7fiRVa4z4RvchttcsEfz8BeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DbzXcvxHGbnxsCcQWgN9VLCVuKkLCkwUNkYV4nav351DW22mub9b8LftoGPVMyxB15pJ13dkUyRq5mtUR3i5Fw",
  "key1": "K3kogcLLkQV13A3iTQmnPSktyPVoBe2bdCMP9nn8z8ejcc87mESvsEt4UhMZGUsWoa8LcUgT5bZ8Tbb3jKcZHqY",
  "key2": "RLpJjHaNdFCQLUrMB8VQdSVGMt49PKumEMmjDpqwVJAyKLSpCjiGKLuAwTAHaYmcmkuZE15RWhMquq97WhUHFAc",
  "key3": "5GWaptJVkDVP6UPVwwMtgWuBK9xEUjYERpShQtYcNNB3Y541LxWPVGJiF5Ffou1audZJJjEgQ5AANP4mzHSBLxxU",
  "key4": "3sfRcxH7zAuSn3RxzQ1joqPriTt8ceWwNh7m6e3xc8fU82UV5MJfVtyyHEQNx3vqcWBEF7L2qF7m5BGWmA3AmDch",
  "key5": "2x6fTgeEV8fai8QHVGBP4isPJe5E3sK1qDbkVpqyU1dJifNZbon4ELwJ7vJrDdi9dWERpfbP1nKeKu8gVYPMquCi",
  "key6": "jy8T2MqLDZG1aQTnvwTnjZmosw3eh4qmP5u211mLpQDdzWNgDYwLa9qSn8MarcVwUzp6yu7jtr4uf485xH2jZze",
  "key7": "5TsemNcx3YqdEMmdNpKcGgVRK8Zd96x3LjkCyToiEJdnKeASuq3sSywcVaM9RsDHNwTQ7Vp4gmnZ9cceGVvZdkms",
  "key8": "2zAEMDKuYKSTExfJiyxY5pdZ5AgrEa2YKAdKDiZ1uXfM7vxXUMvdvTTJSQFixfREWgKgfewSxgB33cpCAaXH14M3",
  "key9": "4NgNpRnVRTDaF9oH8nEWVpKuak6FyjypoUKNQxBmk3cTUQYwUXeGHTddVsnbrWZXWvKi1KeHYHzBik14WLArybjh",
  "key10": "5dEJrJ3XXayYEuexUUyPd9biM5mPKenjzxvg4GsmEw4mjFoQfi8GeASAAqQpBpoZtWrGRH37g8Z4zgQiQP416fMw",
  "key11": "vm6kYdS6ZPqe1fghjySgFutuewLFsKuJfvKyfLb8jBN9NS9dnjFRektYeq7DPr4zos6Q8N4KVFiNd9m3sQJMniT",
  "key12": "VwuP7ExGM7bTDix91fBx64kbY6mQisDCVKuk8rF2HK6NSoBserNCAy9Q57wuZYPc4X86Jkf4m5Qqawgp8aqozdL",
  "key13": "2oeAmz4aQwZyfqVEN3k6Gybr5bsKTfjUY6eAQ2abNm1FdVENnAWEzKkRdx9oo36ahf8f1Yq85CpD6SiGQhhufHGi",
  "key14": "2N3P4DGkebTkdCkCc3G6An16zeewF3G6zusSf6xwnHms8WGFZpzyJxZVeC2CxQGZkDyojkavgeyX9Tupv1CbTbMH",
  "key15": "5MJ5S3dTyL8iE597CXEPekaS7D82CbVC7ozVsLS6TBhSRg1oiBWTsAqnPnQ54YwwGW9pBG9fJ1s3bxmfAN5dQaAG",
  "key16": "2t1ic1e32DWQvC66PwMSDoVjmcdtTF3ptPeKRCuVeCi3DFCXqipuAztjVjLXApj74GmGCgTNtkPmBBAVvh3VjVij",
  "key17": "HxH16ZzD4mYAGo66ak9PnLVHBgpDiHHFXajmpsV3QmGfXWs26KMnPvcM2bnqBcmC3cFNXbJj8ZWpYtRv845EMES",
  "key18": "2MfT5NRHTbnvjXHTyv6kikznQK16urahEpLAjY14cjjKajx7obeGS4rsYbm2f2mMFcAg5CUyMYYmHWdrM1HUXpvu",
  "key19": "34WVMVG1Bjf3jwjokUvs6PTESwm75e4fVSBnot5QLadb4qXTvY6GhSYNqToLGcaT8jcG3KYDZvGXk24octMnBSHZ",
  "key20": "4MEAMSRuqAsDFywQxKcrv2unfXQq3wQkb5f8rcXxH4ZHRfYRYro5t9KpCekj2jQExHnBkoR7zqUV3AA5wwBAVhem",
  "key21": "2a42jGhBeH7xNcPnYPxM65gcmKXNvV4fYwxABJrzLJmQsF39sbHYWrKP8QciitWtFDgnhNuYgkJxycmYFMESxS94",
  "key22": "4EFjacdS6oZgbkdqaooHizKMtVSyZhU7K6XQXT7F5J26mWmr4c3gxMmid5x5YChmgGXuhkCYrzKZj8pZHFQCU5Ji",
  "key23": "22nveo2ySkWhW6E4LJ4M99HQ4F84fKkCrvhkFY8QH1Ewmk7G4ovov7VoP7w43pLioVFoVVkm2PqwL7vnyPJqtC6G",
  "key24": "52sEVZ9mpdXGoM1ZUBotdvkd8ywaLEhFxX7eNPManDDTm694ubYxSuP2rYuMo3UrRLvMueT3n3jphepoCe66RVfx",
  "key25": "5qdTYRh28FYuBTdcTdX4X1ozajbNCLxPSvxUug6yixvCMDComq86BjosNKQiNVceJDsKYxYN2vNssnb3aMS9zg59",
  "key26": "4gB4tYs8GwCPkq2ivbrkwa89Sj5HBC17ZhVmnZXPqJ9Y55SFp4mtY7Uy7c9UQvbgEv13adFKgkQjnw8FcQkDucxK",
  "key27": "4BKkoCcLy4ozkV3q1cLTeDxJJBhv4qxBTtuCTNss8Hw6HrSEihe9BtFf2e4N1DhzGZdNvxGmid3Q95Pne5Sims9D",
  "key28": "E73hx3f3s1JkWjbr1DVoyv3nCdciFQqianushoSbe3ciit2YCBnz3rzDMY1DYdNuufZCPyxWXqbaLxJ9tTRYqMt",
  "key29": "2Fp7sasLJYygxCQsaVN79juaNtWttKQswsHKXxoD1CrEvF9R7GUgGjQpZXEYwzPzNGLL92rAuck13Tfv6ZWLngjX",
  "key30": "5TxVKxyRM8uPDTMAVb2jyZyKBQSzVv9WZaadheNSiCm7o9znbQ44c8472nEeqeNX8hw2ZxNWJoQ8XG2BwdLPYPuP",
  "key31": "2UFe5AFsc9ZA83YQkYrkMbtA42wsvZiG4ZRpJDK3HHUm8gyaZtABBxrUnj5JxDP97saTaQh44V6oDwaV1Qz6DqhJ",
  "key32": "5kErSW3C9PAHkzHA69d6vZEPqxAFqV6fwaCeSdM9YhUhZkP8qZtCF6jJ6JsPY5v8KaBq69vD7Rg3rdTm1kewMMke",
  "key33": "4ro1sYtC8VsQD7fcTUnyMyxQSc5j5UvXab7kyqy5ghRH1DHTTv6NuzY1cMYSQ4zomKKDhnZknNSbT7h5ui5D4GAS",
  "key34": "4GSsmyawxLob5pCJCJPC7SeMXViCtW8tRZDDvCWz3HroA19rVjZr3NCTa4ssGNEyVUDEveDtf1aZ3LgxJVTFzvXN",
  "key35": "477zNBmFyU5nLNxLa2togoh7BEnLJ9Cn4qpYTpqqQyuDxvHDs5LMT7B6vU6aMkQf3ZckEmKfAUdCt2NVC7Vs9AFX",
  "key36": "3QqmAqwtEa9eN3yWDZba28jTEw7J73ywMueGtZkPYqvmXmumWYNNEmHFacVY8tUmtM2k75dFCYyeLK7ueWYWCpVb",
  "key37": "3stQoRmpnLnyPTZC6aSuv6v3htV8MAbdxmLN5EkmQNsJNPgYa8VYP2MHbLjBbM7BdBMZRHgenAXgUAoREqWQiuNx",
  "key38": "3zbyXSBmbZ5kBiVZJrJ5DfHCyFsP7bfLTiaXcPhf1SyGSSyrCoNd7SDGGhhpgbqrupNFj5juEdJ6jQ6mJTaQipxV",
  "key39": "E7ucQJbWKmbUnJGrJ1CXAxbKBiJwpXPdN7vndjy6DfcW7LQR7UMpRXDKPBHDsRgKZZfdjm4XL2rkNDwSpyTZ7of",
  "key40": "g7Uf5AELjgi16diJKeY1mkNiMDAzRtCkFk9md5arP2QSod98kMpmB1wn1W5dErogV34eDe8RYLMfXcZGTK5QxU6",
  "key41": "35dU15Jh8YHmaQzJJus8ru4r7vpbuoah1x5EjNb3HhZbYncCMfAgVkZvPos8P4FyU7VJaHUcfCPsZAR82Q6dHSyo",
  "key42": "2bXcZPxBeetRuD8syYuDz5mA9y8TwyN3Zvzpvj37ac8ZYsMg4EqMMcjU7xFEScMs9U3jL7XAEucpnsrgho484RSR",
  "key43": "2WaEm4xR4w9tCM4TErUc9j1pzyT7bCBzfUdDzKopU359557ZKPU5VQfLt9k66jA59TvQU5TkRsVofTzSTWHnQu4N",
  "key44": "5yKjrg8vbSFDGBP9k9iub43HNK7GsmJBBJRgsTvzrcg6Vp9sWLTsfPPLga4KgvxVd3rA1PL7MiuWfzPJPxqoqpok",
  "key45": "uB9jPgk2VceeUWvjUj5Xyd1BS9Cx658wFBCgF8eFubGDa7LXFX2wBMuioCiwDxxeaW9EwUebjW95mW3yVK6dKvq",
  "key46": "4VT9iKsuhP1zNPy9QzDFsGFpnTxfSEedmmaNwYubrK5CycqnCSmB3kBftzKcRXNrz1GkU4TWLSczTazpMiZhHYaT",
  "key47": "2Ef8KTmyveGVZSfP4qC4UsZCAs8eJ28eGGoYat1PPoKcANQKwhGo8BpHX3aKK9F4Pw4vzQJHQ9rKZAACeTr58nBN"
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
