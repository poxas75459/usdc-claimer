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
    "4ZheEf1AhGCyCYFTGDgmG1Gx1acv2f58Gax6QWWixzyr1ng8ebLu64k9u1JYPu63iMLRVNARNfUid2DzuvWdQF8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9Qh3ZAkh1evemwy32U5WdBhWjaTgkHW5DqzELRq4RHiyRoDVkUXMXPoMpa4wEQqdzkZi7pF1eD6GJk3PEyTUZg",
  "key1": "28f8ZGDod2c547D3qhHmJDDybd65SbbeT1ZbmmQNB3EBbQjeW5S88Uhe34ujHmT7FhHxKaoKgigEbsRVqQ49GR3y",
  "key2": "5TAQWgLZWB4ZDrDHFcEpxrDYKcgYjrpoYDAmVZKEqGC5xH1s1DNEh1goxFAYp9TWCtC5Tvj4GhBQn4BvZ4oppG4S",
  "key3": "2ZPup8f2tezeSKfXNoHboNpbWTJJew7NzYFXsrrC5sYBGohkpS6C93qz3dVAbpfHucDkC359j3npQ7x41L1zEqDh",
  "key4": "5im7Zu53FXbrBkFZa7Ahfi8yeS8mTNYQVeNHnz5W9M4MKEDPgqfigmwSifMg2rdTc5TWMdMJuQUApqBrZ6RNLYBd",
  "key5": "9kmHpk6NLi7XtuCyt7NzBUFUn4byr8yX1Us2yxUAa2RBhRgkreU1FcAZBUHiBmRmvvfjKg1kWypSpYTaYosnY4v",
  "key6": "2rAA5AQUwdr5fG7zpKobVitKmHBfbwnpaTASr2GZw1Q6he2iEFEA6zVsiQJfKd4QJDM64SerHyvxLKd9tVGbBpeN",
  "key7": "4ZpujFtFTRb23FwsQuG4crcEqrkTh79xLk4HavRXFpjqn9qDdCX1fBin1VZZS5o9r1WxStFTEfTVu2G6vmgvA8Jk",
  "key8": "4etirBzJTPBYqVBGfz8iEZEYyS9gL4GEyFPAvAorDF96b4aEitwsy2Sq36xri5Mv2qfPvXGinEPXXF5ztUq1KZ91",
  "key9": "3scWyqmRNtzSjevLCar6wjRnGE9rx3Pmrkxh6oRnVbQz8LukocoXe2RFMHw6m9erd1wGnEXzjCHjh7ZdxA8YJVnq",
  "key10": "2X7kktTTaEg32VY6egJ9pyK9T6DQnEtwDXW2peiNP6owWZS6VG8VX3HGuEpuPe8GD5K4vFQyc7fX1Bx4S3egP1J6",
  "key11": "3FzniKz4XJ5imZLdSdKC3r1vKBZgCexn9162Qr7i4JYUUxQzQNaGzHfANEoFTQGWDDDaq6NeaQCCqdN3i4JPT8j7",
  "key12": "4MsoaUPbV2QPQ8xxLT7Fzz3p1TdAkHKZheCqasZBBA64dZVyzzgQA8owVEmTKf3QMhfVoyZap9FKhLyMy8mLnxUh",
  "key13": "5eNn82DoKn1LJA6Eanju6LMiPXjzhqmhbTi5isa5RDNGRBFTNeoizNawvcq5o49NeiPCqm98p9EHdfiEQttaop4X",
  "key14": "5LYyWKwcyTRfYrjohf4K8TutYVv9SY2NFhn4GTWTozWvyorLmaf9SZmV4HkM1RMMTnUjtaTMTKMuZxPDVhh45o1f",
  "key15": "Kw6W4GZEcvjXbcEPci2cYRXnypFuf6Ru4qZDPgDQ6ftTq7KZFto6TjZmtQjEjjHbHAP2nRAzKhkaK3yDZ6dn8bH",
  "key16": "458RWTZJC24R9ZThnmut3dA4NfECtREsKWh1UrwQmRTPaSu31x6cGvSMtV7vSke8eYSEWEyHEG77JdkzWiQW2xYn",
  "key17": "5Qdn7No6V6i5ZZ1aqWVQrJzdT5jhfZbRje4Lv6bkghYn2EgEmRCbGHmXjcT14sFeeCWXWsaSeZ3JapKogt2C5buM",
  "key18": "3DrvH5AQYM4D1sqSMMchdWWfePe3ramC1bW3AkdXaWjcTmhSVCfD6VZeFVVQuVKD1TF2yrhwiYag9iGgmaiUrFT6",
  "key19": "4gznspLRkrwjnhCZBkFJbAxrmCmyDEUTt8vf4QLMQQM9ccGKZyMZ7uQjEcE6Sfs5H6yGye47T3D3eauhjcnLPhkX",
  "key20": "2pQ7AjAH4YMVs4N44xPmfXKAbsrohz5RQrzFo37JYRB3z9GZ5NbHsRro7EaCnMFJ1CCimnG5Ytp3Pg6fVnqDKkGV",
  "key21": "46o2sEJYJdY1J4Y8eSSgN2fPb4aoEgtvVVYYK714Z68cg1dyjQoHW7PHr2dBp1Gr6U2WSrQayuhV8zSM7uzS1GEe",
  "key22": "9eSKWnFs5cwgKH62q9yq9qfL8LYd7JptiR43sKPUM6aXoUar5LZj2Uub6FQ7jnfuNuTGiRxkmV69hMbMvu7i1jK",
  "key23": "n4uVg8BiAyUEHWe6NzVTxcK5LPUiiskfjbFrTmFXQ4wkzporzdzfsiExHSmoGJUZwxsDvQtZV5JTQtDxRspT1iV",
  "key24": "AC38trG4YEFjZCzF3m772t6fkpH4yqaLy6RB5PCB7SAJghNbuQtKujKaHXBzvcDnj9m7egjeWHknhFtiWUc6ugA",
  "key25": "52raaPkoY2WguqU6UBjdL1q9RHsduEKvrXtSP5XupD4odqWUeJyi7DnM2RizYSU1kkhjMTF4JDE4tyzJA7mcFf12",
  "key26": "5o2RuK5ywkYKBbDuz6JuNKJcMQdY614JuqbCzemhctk19zKZNkwaPfSDEU9vBC7bnQ6E2WE3foQf1YnLjsQTrG8U",
  "key27": "bqQYoudXAn7EBmuxouAfZDBLn7mj19mG2oNTvHKo9VxpmnHtxy2uS6nwd327aBkmBQyh1LzP5eTeGefsUVuuTvF",
  "key28": "3W5zSnaFeiqBdKAdSqSrQKsZsZ85jkt54EGMudH3tJG7DVSDtkgj7yYMT3GD1cFLRFAr7w7DcVd6x1JJBnLqbLbQ",
  "key29": "3ZxhaZP4omuhh6EZC58ZULU9KvA3eiS8AWHZWD5SfR5GkZKBjBnZJqq6vhUkSxDP3ecN9cko7Qnmg456TzLYAjNA",
  "key30": "4uffTy3x4TjcdMJVaFzB32ugKpHdjZLUk4sdVmEtZ6q5h6B5yoAdA3PwEbtgnQwnPtA7AL9kGFQ3Yky3p26FHhcv",
  "key31": "eKoiSjRWkXv6FQCMiNWneeeSNMD9uhL5roieVc1kYLBWQqkKJcTWJXYyDQw6senbUVPqupTH17tENGwPy8EnDaX",
  "key32": "5GAwAuG9rboNcZ2qJKwqUNQCwD4dafSwKidsFSfj7tbURJxqyuASfLMVs9jnu7PtoMFepDcgoHbpd2Hf4bkXKq6q",
  "key33": "3MZwxqnhAXbmgmRHavtKxdhhMV74isRibweMdvKje7zZay69Phky53yNfmgAgTNEeMBRnGavAgAfHBj2dXfBsWb7",
  "key34": "53gkqr9EKDjChLCYU6yZdissWawu3qatg8JkXmrmYk8D7jd58ahr39HREzboyxUvDTbjRSdZLrbcDR3HhYxqLTPs",
  "key35": "DV5Jz3PAiUnbHx7gxyLy32146nfoGQJ7YNDoX9ENqneKwaoGT7ifTTbUEuDSxk1kKBecD5bGc5c5BGz6fuE4dcn"
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
