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
    "4h81Xsx4GkEj1fx14LoST7rQpum1B54b4E3SfsSXKReWXzeLDm7stnQEcr1thUwNJRon671wVQMPuuhi1kZoWS2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtkWM96fehH8FNvKhVA2hjPBZnZ4UeYEf7wKWEqfPxSyyGiADbXRW7uXpTSEMX4TLpvoRVFNcZ9GendPEQDE8ew",
  "key1": "3GGycRVwhWHX2PryeDn8ayZraYmD81kdAAfxC2mhtkceUaqnemGQGuamHxDqkWYk2b5xV3rry5BSs6x3CJ8gXbzQ",
  "key2": "5UzUq8u1uwoWuhENJ68AKipStAKo9iD6HsfZW9bAsFoYygwSan4M1wvfqLjFsbYhNourVJ7twrrw7Fbyk98yKdLu",
  "key3": "5v9Pdi6RSr22jCV9Ktiiaue6yBF8KRhCuBTfB9JDZqGUDWbYLro7zELaGXkaLSay4AYTB9nbYKAS7d9srHwcCcHB",
  "key4": "42tqEuanSHcKjbwfuupvxqU3kTLb4ejehBGqND8vuwyFVmpqf7VbyEPBd8saHtD5aeR2JSjU69rb6EPenA5Yvdmr",
  "key5": "4wyCyrFd25kFdPbb7G91XJgAFy4Q5YiFH4dC4gajHpj8idt5qQPQ3KvwceyTtaborSERWqAXTpsG5xhHXeLBpqfm",
  "key6": "25kvJpeQVaB9h3hKrkqZmtem9WXeKYEGS3ECfqJzGs2daQfsF1Ljp9MW1LHufobEWehuBzigDnVrrMLitW7DSJeR",
  "key7": "3MjGSMUwAsM6sB76BUDnwmbfbHCcUbJ4f9SoLTt5TSvuTYJ5ifjux4Py4oaE5bnuCGNLHV8QTaeoEUHEt3LbLBNm",
  "key8": "k1G6BTVp5SyQmvy1GvvqHtLiiGXJBzrzGezmGDrceCkc9ZJhhahtggXh5CmZqxN4NXPJnmaot2HfTo7hP7wNxUk",
  "key9": "TpTvaLvH9j7pKXJAudNtMN3dbXNUv1ydAP7Td7dJrnznNJJdKngA75t24ktKqcRFyupaiTANXk1MWipap3f6B48",
  "key10": "5oWniMdNqBcyC4nGGLyZXasS3PsnksRGMBTLUAeWGB2RfGG3h9tHgTXeJTFhgCTPwMzoGFJpFHAdtigKpo2GFYCs",
  "key11": "3CgCuj1zaDm1E18b1D5JgPBa48S1tj3dLqsMbojt6hdLAsNG3s3BUXxWL4rvuRhHGDbnbHKNogY5LTETtsT7E1Mr",
  "key12": "3mGLtwbrkWWNs7jQDWWw4Y6Wu2E189ymGFZBgEgeW3Q6RYTNiXeefnHK7zpFdPdCGHiSKPQUzuhraS4iZfGRCrRU",
  "key13": "4Ei1F5WyArCZqX71PkJ9PdNbE431MgCXQkMLvxtwPTtWNXAaAP9mZLofN3fdz9XHfPGKW7o8V73ssiM1k727A3hc",
  "key14": "5oxXHeP8AdtE7PAWw68YiAJjwVV8mn8CC7TwY7x99JVdczcJcG2Vho75cxYaCXDHPUeRN5YB6vK1xbHEyUJAQT9W",
  "key15": "2skjgJZteVzkQJL3p5jmTAQZXBALNP3CyMyLfA1L227EgSKam7ZNr5nNtNem2PVXLrnyvFX9p9e6RCS1MeXhw6nG",
  "key16": "3sthFzwc9Y2CZizvaj1zxpXmZCQzMJ87K8zb1fypLDXWbtp1ANVXZZ8rZUFVhS8BTbU1kTmaRSPU4vsAKF32QmKH",
  "key17": "53zYCerHJdvW97Wq9m3qUzsozs3DaBNxWFTkdaE2xWzkBjQ67GFMw6gKkiNbinCX3oF4dVonDbMdz2RMoGi6n8RK",
  "key18": "47bNowByKZcjSogHDWaQs9hPy3Sor8TruYvd4J9JFDCzPcEKbmMuhwtnkeP6LqT18G4RaTqgvdNnwye8Tov7zTUt",
  "key19": "5WUrYseSGRQ5cFNwFRTg3qeifHVa3FrzXbvTMYdNWgDAAiZqgJByzRuWzZBwd6cDSF3vRDQ5pz75qYTidNEDW7pH",
  "key20": "G2cAQz9XgkySr5g1rMcU61CxsbFeVcTSAxaEbw8FWJm7eaEQmtxDvWyETQchfdrZmbg8Z5hhNNKBkXtvTq1FqGG",
  "key21": "3m9jiur2Dpe8FTQEZ3eDxZLvqZcsKMkvzwg6erjkgDuwteYayp6hidYWQ6L88nNfKjY7jsRP2v3HsK7ZUWPza2Qw",
  "key22": "4hwHvDgD6nPVgXw64ueWACjkb3yvA3zAMSoRkJkWZ5sAM2Z5yandKvR4ZRJtM1x8BsbFhAtNR5v98T5MgzvKfoZF",
  "key23": "4suntB82wxKrdz6iStTpaH4tmBYdDZ6uHdYGVefEPkfUQiuGJrKcCVpJQLTSTKfhFBcsYsiqLq3NgCTmuq5vYwp4",
  "key24": "4EjHRtFttHgjTrQ7pD9Z23ybaJ69qPgVU65yrKv1cNGHavLqaKpYg1Psabif4FHyGTh1p34CKftRhp4qF3YsyfKS",
  "key25": "5WACzVNCXQfvY8FV4gRGHahpPQy16qjcbZWcLwZFT5z8MzMhhFR2Xwf9fgowcErQnK6eqs79pH8cesh5Xf18pTKo",
  "key26": "5SoTH5iQNcodbBcPw5nkXZ7TtLXVmo7HGoEL1ALpH6comkR4aMWMmgtBvWJL5eBJYD3rtQxakSyFNF9q9vBmDAzw",
  "key27": "KFWq4f1QpYHZwTHWPA6bvSgGYGVMm4r7b4QCZ9QsH5MdY3Hpba5zXUqbDAuWYr9y4bJ9132sM2VipLQdKzrNqLG",
  "key28": "21iJW3rz5HrrNm4eEKAHvF2dEB9MFFiTgTj2ydbDswgoqWRGHZWyJqkseWF16dq7sAiq6GLswDBTTxjHMNzpSUBK",
  "key29": "3AVhN4nK8cwVAyvJe9nWarvSf77qt9SVLeEAyansbXBp4XiL5TygRSDomQ1i9jpAfihpxt5Rh8BETVEUNsWd2bcD",
  "key30": "2NRmcjuSw5xAGq3FxdRaNVM3RLh8fkEXa4WGCniXf982aYbwjNAE8amoQStNjnotCtZtCPH77DqvaTVhMsTGdp8b",
  "key31": "5nbXe1RYyYPvU6WEBJ5MeAVzYekSE5zYSmqrovdbw6KazubrqmdhgRH52wQfmrCbkHskfCKaGUvm7WyEdnWh31sz",
  "key32": "2pKyWrvc2PqcH8CTxy8aqwvjSdj74LnDYm4SqGxvH4DAYvM6E2aqZ9esdC2Z7gZkceTv8N7pEbGbAd7oxELnpAqm",
  "key33": "hjLbvg7BWF7NyrUgPh6rqHQiViCYUVaq6XN1yCazBKMzroBEHRkYVVC6vVcbRwx974q4d3KpyXRb5MPtJxU7Wpw",
  "key34": "3gXQDW443Noik3zEUBsLBBVLUG5sqecpXu4PWX1kVEFqyr46biPfnj2Ao6M8E59Vy1XhtXrzDtmUqPkPCE7qAFea",
  "key35": "sdy1DiRYsnLXFRN4FSicn87EmYfYatFofVJ1sscpAenamVhuex68pm2kbEbdC8rTboBTUZai3E1Yk9NpRsNtXW9"
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
