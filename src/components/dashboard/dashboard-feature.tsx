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
    "4Xi4mD93jenG2CFEmbfvUMiNtMjAgGrLi8oCuk2paJc6ky87a7vRe4WjV3yzso5tT6SdTPWDUDkufqc5FfUUyNPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EMeY2XNZxd83hWutzMovc3xZhzudkXM4PyuZDWaBXwpwQCmbsDCYFaDAfcM52Zwd2tfF6nr8Hh7AsQQ5emSgXsT",
  "key1": "5uy1ax5TiWei3TBYsnXk5jTPKdcHYfHxyspm3RU1ExuUXqBbBeuz7bVDxn5aic3i5wCxrCTJ4CXUdVWCvpd5gsa",
  "key2": "4RfcoQU3FX2cEyMkbXaWEtiV844yWn8pBEh25DdBHuf6bb8BJo3ZMnndFpKvHAMNpCY6uRJK1df9xoVp5W1n4Rzu",
  "key3": "4MZNRX3UayyPNSNTut31dDwY5HPi6aFNee6bGoXemnFFDvekfw2tfuwEQk8A92Wc5Nrg2uxGUdWmvGGduG7RA4X2",
  "key4": "4bWnEhFq98xVaNavCg9nJBEQDVkJySTU7TP9opNgwFH775tsrLyayWeZp3fLsauaXeD5Uo1MfimiZyQPNvcG3YwT",
  "key5": "5G6E9yBJ6aQyc31aHnU6XgqHZM6RUD22rtjSkLBYETxdLKr7ijjFGhTLMkJBq2esJf4s3RqSAhnzZLo78HxnsNVB",
  "key6": "48bYcJwQhcvBNSM1oSChEF3iQvaakCq48eeabnH9xJ8CkLE3aviYGKVGiGSnWhDTSpEBDfaacvUJ4DZep9DVTRFg",
  "key7": "2aLB2EDwSidNEG8nhZTyKfJJiAuy9aXFfo7FobMgAbH7NadUVicSBnL4qUusK13EXwSdwvDujewnTPxAuDbBWcri",
  "key8": "2WFJJx8keNXZre3gkumGsd4y9qpyz1JdF3ymUBiBr3goAmdMhCExNUo8GvqFhEo3KUS4TPZwup1hXNKHN3ZbCYKq",
  "key9": "487egNzZZZut37QiqHrKqhGTFgxB3z3JCVc23ELCnsCMSn3CnPbzc9U5r1UiGpynU9ZdQFoMGNLX2eaUNfwpUbgG",
  "key10": "4N3SjVZW6QencBpZyN6YV6xU5r9n6RsMNdyLSz9E5Du8zHzEYWrhN5QbqJN1ge4CogXH9XYAXNAhKNvf2KGdSMvH",
  "key11": "4xaoKnfAqJPP9G6T9vZndDaaT6YV87tQMyGEAGV87TCi2C7KieHUbTVALsB45t3uHrysyJL33bSq7nhfghMpubs4",
  "key12": "eNRY7UnxsMA9bSFWCwcBcmoumhyRJDV21myuKcjWjpeGbA377knKygPZPiaRJqywJwumsPjQBNrK7KCdYs36qXC",
  "key13": "4zcVExV5gV5jpZg6ZMWNPZHafG1XJcv1J7QvSttSVYHfUSEBBVQQE1squLgorBibeZ3TwVggJNQkhodP6459to3T",
  "key14": "fFDYkjzuHCyqqDyvMb4avAN8NTyZTv4J4TxvrdLhgyjn7xdAUoSEHQrZt1k5FS9KvMvfv6VUZWPABoSMvsdYdx2",
  "key15": "32L3p9pCR27KiySoYZgWnMMT1PUXu1ZC3p4djQ2BBT3fMMpb4VFdxyGQrE3jTPR6Xk113iwC2fsZRyKMDhKdStuR",
  "key16": "4ft6qDMMgqw17fiASH9JVqmyLeBMCszKL5qMX5JeVw7xwM7w32DobVLwTnPdyCwCSEeVatjo9g2TvECospYGxNo3",
  "key17": "5mYXUHTu2g2TYQU2FCYjo3HN9XjLYYujnPcU4BwffSXvBZN5XCfUi3w4QFVcN4DPPRT42Nut4L8f7PM1w2bTwDJ5",
  "key18": "5EniTanKZujYms8Xmje2WWcQTwrzhatcQtWuMMtwpmY7GhszDcyYVM3HgUKFSAkQAETn1vpZGkrrsPZWT7edQKe1",
  "key19": "5DXgdj2p3Futbo3hxudqf8PzAT6zNkqXMQiuAXJbrd7pbNbZNMjGTJUdM99cLbaKVTPXvDeQCCzkwDfaEQLVcLZV",
  "key20": "3rkVDyB9PLqE3EKFpHTPnspuatRaeU2T2MUeRCnzm2o6NjzQzar2SokA5ahnGEPQZbq51uW126b5JSEMDVTPFYJC",
  "key21": "2Z9e7VZFLx84zALJtf8E4qp7NeyftgqRKqhjfNkPxwhxvEt63wFGPiaCDZUoYd7FN2wwPzEhnVjqmsn48cYJHhgy",
  "key22": "4SUGT6pExT2SiBAqskrH3T2UiDVzrf7nNvMmsLsTvh42tWSoCnZvLX2V5kBvJNYjKq41tTfy6TKWcKGE6UdZWQAV",
  "key23": "4xHJRnFfMTh6ZqTKham5wRpqftuvheUxKqpP2wjKTqjCPsA7GgQcXp1e9CArJA2W5nWYgXXp2WvUbw5bq9g6G9eh",
  "key24": "3WR4qYnYDVerPrYBLutsxskBtyhV6oNN45Pfbq3DmPVPxQWz4B8gt4UmmBGHPBYoxgPkivGYQEX2dALhZjVtsvHD",
  "key25": "5om5a6hDZXd9Yg53d9xyr1SSgtK3obkqtvDjoNf76m7iG5XstnJV9sFHgx61RZzUDkGVs93AhfHgYd78juDnXphJ",
  "key26": "Q6WCJ7k9wetSmP898MNytifa46SsnaawZzqZxEH4851eQGGmiFFm2EY1fjW2mNC5VYyaTYdR2Ck7U8kYDH4aDpy",
  "key27": "3SNB6dfHREd2rexx6hG9f7xJHTvhcsP8ViSsDu88dg32XMnkL9LfDfBBTWjDWQjXPrQudUaQTff8nxyJcz5RHYPe",
  "key28": "21MUfuqVzfYxBADbu49j3S4VzVpB47sUKm2YxXpGJeiaP1Vr8ZfYq4WcazKDDuPnABqA33ig5budhrSYWa4CkYAe",
  "key29": "4yB5YMbAp3ywnPM2N2UXJ2mJzLe2kKiXj1z96hB1ABNk1pDnhr966U1PdTCLbwxkGKdnPJSi382p5ABrP9CBHrr9",
  "key30": "4FccNLHYdk2GyDDzWBB3Aeop5PKUg2dybfLK1AJEiNE2wLWwjaC9fzr7tnEgrDmywvSs4mZh5eEBXN9YW6gwYzZF",
  "key31": "4x4XDZD33TuPHVDSo36NqC9DCzXX5Rqi3dnPNUCkYGruyQan5TFUrjLEhMWgQqcLwR2QGKyXA4PtEXXBzZJhT5Zz",
  "key32": "27RVjDZYG4QUYz4fK2g8JygtiNrRZabwtVjDQ6YwnqCYHnWmBKKm5LgeV5rGCKbaHP5creRMHRxZNEKcEVvVNBkT",
  "key33": "2j7GzfJjEr6EiwupDBMSTJJwaYaAJFPyf3roySwDHJtDGpbeSkBo6WmEJjTCazkRoRCXjitwtphqGnorZ75388YY",
  "key34": "U1Eog5Gq1o8teCJVMMLcn1WZpZsU5Vtadq4zbZw3DpJrPqgNRc7QNZy8W59M4rFTzWRWsCgQEasQH5VdeAGRHpP",
  "key35": "2MPhNwJGieHdaDkBnz55UKUcnG8wtoYgJ5rh3TejBtDm8cG7hjXFCfQcQ7Fxb21PSmhDvuuEvLerwBEtQmKhxg5x",
  "key36": "2JReRYQm8RUBbWECbq7KXomCvZ5R5YcrrPwW3GCWrpZXL5CJJNpEQ9e5K18HvSKPgnjkDtpTn9TbHfVqbT5EKHvw",
  "key37": "uCt5ihUa43ZwTJSthV2VSJi4XbDDE1zqkehCiKJBJU7MLtpB1qdYJf83QRWjR4Zs9Bf645HQK4aYDBtrGCF43SA",
  "key38": "5uEPUq47dTscKGzAdghXNafidc2sCDcKg83BZ1BgdPQCGmEdhtbVarZfFTiGxJPfjGkwEoLh14QVL8KaWu39dF6c",
  "key39": "GmnyCP3Fg4Dxw59YLaCX6W9aFpBKhjgPV5mJByNZg3CNHcsT1gtR5iQSx1bDkqGAM1KzP1RUL1GVp15r8wwXKwo",
  "key40": "EPHNm5aaBBPH4nKi8t88vKP3GN5GUFpgEwCvjt4rLLvxcRyPa1jUyFxCBhCeQZ6obB72MUqhV2yxrSxhej6A6i1",
  "key41": "ejenfRLU3rDS5j3oiro59TdDLrssKz2DiPA64WpPxMr4nP6ZqRJGMPGUbLTZjt7yTEJDeccL96bPBxaRBxQqSrH",
  "key42": "LkH3NbdMWmamp8bmhcmnURFqJtvoK6sz6rKg8pxaq6qaJvBkZ8ccztgWna4joAURfBkesPJEjAHhavXn6kaH4DU",
  "key43": "3EVt327MGyJEiQ4NWw9R5M3H9KyAnMvheiXuwPMB3BD8Qn8X1uENhTn5ahh2GJPdTraXuqUqR2q5qUjcbFf3s1uD"
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
