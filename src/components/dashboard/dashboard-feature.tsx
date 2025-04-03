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
    "51dWLW28jwvi7qKKLHxD5K4GSjMN3bFk47J6tmph7VrFy9uh7i5iq6kJiid5h1RCFC8WZ6m9yY6JQm6DARPmkawk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53XurpiRRydRcAoyJffupurgSDniSPGhuVEfNAjZtn1abWKwMtM8LgYraYtPfb5aiDinXyzSBs14Ne3DkKBTbUo1",
  "key1": "4LzdZfLNF51a6CK7Ldg5Z1ens5MFTNkZQChbpBWAsqD9cudhWvUZryrpdRbuq7xFmtTide2PhBPerZZgyi1SQmwP",
  "key2": "46YsS453Jjfj3WQNiuL2xXmLaCuS388GcgdJ2MSGm14t35ddgpmApPgw3q2gU2MBEXeazHYsqZLieZnLkbaperBa",
  "key3": "v233g546S1BejqoDC9aJwdKiJnMKXVeRATA5J5G6sprdgz6DjsbvAVQGEBMPnhbGqy9u9NySpy8KKYiWDxKDV6o",
  "key4": "473SFKaCdQeH8Q58drB1AWDmgWmwLzrpAaC3vxi8v1BdEaoQ2rfApS14uWT5xKbnw6mzLrCPQLGFhMpFY8KgFNi5",
  "key5": "5XoGmNAqr9gkiBMaFaFktAJMWzHyNa3EqS9NnKmkn8S6XTmd71M8gbV3vaCug3HdiqHAbjm9gA4u6PjCqU94o6Gk",
  "key6": "3burwuAoCX5Tf51MhvpxYmFsSf8CKG8RqjwqKtTc91UQPvy16VJJmFcCqjELnTd3EidBopvCKJqpSuuy8RZCNi4T",
  "key7": "3E7zZaxFRTDCepSrNoh9PuvucHbq1dqC8oMCss1R4AiYS25dPjzygj8KkfnVkHyxMGe99fSm33kj3Vmx1k2RUAJW",
  "key8": "23aWbHi9ngE6Egc8UtEZMEApu7JPYe9ZdB71uxbqxnqcfmMFJM97iomCRaNrv4DAYHrh54kefpd9k1YEJK6Bnsf3",
  "key9": "3eSV5zgGUT3a3Apkq2THwyuuKNaKFJbrN7HWkv14D9yiBpjKG1chVCZrzcBxfpzZNoNsKAJ2KHCoVtqzn4qT3bjy",
  "key10": "5hQESTXNGonJUmWLxCdXrzc5D3aVSvryvptDpH4R9ERKRJhmyKZRzu4n57BKqi3tpvSQRadqV1tpQW5SW7kCLZ72",
  "key11": "5zAkEiKBbCeo5VLicaywjcxCM5sWxnNc36nu3ndXWeSmCLLjXqAj8gDq2GDQcMdKS6FZEiRWivHEcPKaMXKxVGQU",
  "key12": "2iHvghLbrfUbLBvs1Py7WmfLVGf29MaWHg2dfbUTDnDtzowMrVFMwBXDZi9eJ66Xan6A3we7gvtabWsAMUVzDUcC",
  "key13": "4nhHfy9jtBqgJ9ZacpF3ahhuzesJrE5ca2264p2ZiYefT232V778pijZkMa1uqeNj4DktAQJCat4eNFMUTrPApen",
  "key14": "5rrc9hQCC4QvK6VS13rsNjjwF15P3sKmLvJFfXEgVV4skJ4vmNpSUinKQMwxRoVvB4tyDfVfpRiY6L6mJp95uMEP",
  "key15": "4P79647FkVdLD9EYZcv1EHBMphJxxMcwWSmotwjPxRSntjLibPtcL2jyrphPdz9sGeaoEeRS3rgRJzo3VcNa4jyZ",
  "key16": "3WD5i3HpE8JfJsbCzqNyVVLgfTdKLntj6QPb1qAtyEXFrpLezhQqzRFBRU71JPoJ2V44sZwoTUN6RwSUpr2zAWBm",
  "key17": "5DLx3pjqcnCxHRRHPbmWmqgU1BvYeyQDY7ZBYPDH9agmFrHL7nV4xXNYRo8MBvEGPYgNviu7tbaCYQ33bXFjQCq6",
  "key18": "2VEQzJb89TmojX1FxUZw3FKrs7KfcN4o8SntaNrkX3U3jnbHb5Wg3hFu3MtKEX2v7QLnsXMG6r75yJvhfW8NqWm3",
  "key19": "Ae4GaZN2YnJjTMQBxR3bjvuJkSLS1YC9Qfuefahd9eHkoEY5uz8o9PdqMhtih1ohkgw4o8yNJg3eL6KBpgDkLWm",
  "key20": "3fPSjUwyjDhkjDSb7gypVALPq1gK4nD23WS35aRA3oJCUWkazHeG612DQimoYaMkzKmfRHApmEcTggmtzTtJ5q7r",
  "key21": "2CmQ3RGjnhAp7X7zkZnwUz7yvc6UGcH6yGC7vnAAFTFmCZC2ATFSq4X3vpbJ2ZTD3fDWGRgM7E8RVZchSnEuYnqi",
  "key22": "51HjuX3e8th6dUwPXSEBRcqHue1sKxFsHAJBb2ebSXXsa95w54SpC9wPHuEn1hfdrJViC7UmNWGsc3QpfhJpEpVc",
  "key23": "5uzy8EZsk9J9sZNe6JKbxcfdVMGGfEa6THo8m4LXm4JPqiQWSLYi3JMsD36Wj6t5WbZ331D3Uce3gQoGSq65xDoZ",
  "key24": "5hC3c6GpGSaeXiRJNxNWLNAM3uvcKwXwLDUG7z82LR5pwdR4qKWC1z8KWU9aPEWKvZj68fBLyatTgbj6dsq8XnES",
  "key25": "5oEF1fjFHyNq2BPH1vzYjqA5TemoiVapHQdxSHEngZKrY2rYvzn3Pva5LEfhrRK78rASEz3nSGKx3wZDpLKxYXif",
  "key26": "5W3Qw8FurmWEV4u63aihtp4YqSxNL4VrbkL7NyFWnrcjvy9KK2gcezMT2wvbcbvNunuSkgP3EFoVuZmKJpwEf6Bp",
  "key27": "fUQaa8WffRAbeWUY5UJYZgdnVYGvXsbYPGiAruiAaUJFnDywG7dtMxpyrjcMqp7SkTUx3kXr51ihgRZVq6wJK7Q",
  "key28": "i2Je7NTHDFKKpjMo2Vp2fPsnC6fcmKo1sLGFETU9BDSNXYTXC7T5TG6ZXeGYi1iirgiRPbJyPkbqh3juYBxiZvj",
  "key29": "3GoqCJrCemYGnjrFSeUtLuZoaqMgBc9auxxx2zhbDRSnbCZ4uJec4fAKFcS7rLcM7sdhZ4tF7rZHNxtNZk77ZrMr",
  "key30": "4ZCYxMzdCcZJZTnEUChgg1585VCBrsnpJLZpxmGuhMhkUB9E52xUqqaQK73gtgfHqa2oXXs8cr9qPK34WvhqJeiS",
  "key31": "2fgVJuFB4VkTx1UzRLEmnCa38i51qDVkmQtiDizno2qd7QX5A5BTkgXrLNibAkWyFwgXG7CnSw8fGzPqPxtyjPLC",
  "key32": "3WJ8WACVjX3maUCH2sP8QVDFfiNvH8apamZvPD653C5qDK8UWsfHybRLCW9rB8GW8xoyuBKwZnhVws3i7wQQPXrt",
  "key33": "2DH8BU8cP16Y6ctaQirJVySv5g4ivto7Y73pEKKxtmMWH2ZD2wXdAQaMnQkzV1X7ocrEhVkk3zhBon1HSJizF3ds",
  "key34": "3wKiFuVZpsd2SXn7Prbfr8EY6LtWcbe3ri3nXRURNPrJJSgEhxxspTbXmBzXAswP5KvNFyMrrweC6LhPu7AkGLtC",
  "key35": "3Wj15YtaTKNut9EsMfN93iFoyCe2f6P4Nj2UzQySDta3Qg8qg72CXWXFrJCTY9C7NwFFir2urXPiSwb2h8AjcTMn",
  "key36": "5c2fdUnC1cp8qiE4mSQ3MtHDUnUo3DcqTo72WQCgCH911BtKUNdWxmuvtTaR2Nr2sDSJDpL1CZtx3iWHpKM5UNGj",
  "key37": "3AKsQk8ksoEoHpvWTNuEi3AwfPonFuUbLrmnW9J9pQL7WUTinzSYnWqZ5j3hUXw8okesLnZr1B8fMuhqirHqfUir",
  "key38": "itjBwiZswmDBAPTYDq2utcmczKH83zNWWTESfy5s8RrJyYXArfPQ8azG3KoPFF4gQYrJ7Urkegh6nEMWz9sukM7",
  "key39": "234QDZm9FFbpLj17dnxt97oowLd7JADAr4Nbqetrk3TMV6LrfSYCutkuwPA1AMqJyztehEoW2hchZFGmGh2vYCNr",
  "key40": "4vs7KhTy3gaTdNLnEDSpWYvUwvgL9zTc4iLpmvtcAyujgBBCCzo3A3cBJ5WvP4WR6cqmHzkFFjs3uKmQjtPejAj1",
  "key41": "2DeL1PkZjMrAfgDK4uLZWrzVQTo2HEtcFvENcGBK9YC6kQix5zQwnUAUPdBVn3mhThcCoufivMwo7vDwPC7AXJpg",
  "key42": "2dcK2UExYmNaeS9A3fEK8zrt6Y2oyLNNQDNk3guDJABvDYtJ4298Di64fNaZmeVmTPxC8Z5Hb3tZ5xwRdoDc6wHS",
  "key43": "4UQw4YHqJUZ6sm2ib92d1GAntTXLXntWpLaRRYpUfehcNGqE7W4EUKBj5o75ck759SRMxXBFaL2z5QQdPfkcHxgF",
  "key44": "56p2duLuqRaMQWXH7gSbSEuKdhBG75wksuw5fKLPpWUhJJFkzYqGfkZGrnZ3GUosNCz4bPKfotWWkEdLLYSmxQZp",
  "key45": "5boiVgmH1a2khjH8CLve7mup3SGCh5Di2QW6N1rixrYoGb9HToqsKKTLDvx3Rz3iwBAD24ssm3oQV5nM6is1Gswr"
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
