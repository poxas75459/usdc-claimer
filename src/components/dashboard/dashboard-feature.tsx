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
    "2ejazLNYM5iZiwFZc1vurVZJaKw5MGK6W8DbFMpMsmt6gyQGR6MCLSSat5R8iESyjS7hRW2xSvHAnnZRvG5iLcdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Dc8pTQyuhroCp3j1tEe7QSVbRjFs4y9UF3pNo297ubH2DsbR1BU1oiY4wKEoMtGatudgWxqRnDnZJiRqK4caGL",
  "key1": "x5MRmHTkfj6hpPUakwPpgWLood4Kbx6MzG985RXHe5ZDX4XKe1NGnoAYznaHov2uc18t4HgSqtPR4denduhoj7R",
  "key2": "31DXHpBPgPejyeFm2SkH1HS8BpBLgDM6rbBBLeCPrC5tAucshkrecHQLFz5whDRLSRT4dgoNv9emmmixXSW41mFB",
  "key3": "qnsi3ZCfDpv36GuTsdqtxdENrNcj8V1d6afa6duYoDZwVBHzoBuVtpwGoMmYPrfC2ja8tFYMnQ5P4j5qk7gmRN4",
  "key4": "5qo5AZEQarJqw8S9hYBPyDdhGCd1Npgdfo5Hix9sqMSYuG5Ke1p4eVic97VxenYmUiFpAvPHY3RU5oRfsezsvp1S",
  "key5": "28qzsbfbroudqzL9EZExZG4DCL95daEtzssq7GAYdPSr34B4JQYR3Lr2KGm2eUKGPzxF4ShtBwPoQDpoTH7Ly8JD",
  "key6": "5FSgFFw5b4dwbvCVMSMQQzS6AUq6gMCVU3SxzPNw7PE7VX22tufwMX52UZWfHmMD9mzQrhpk9ShofpxBFsjzQUX8",
  "key7": "35zaUQGRwRJK5wUrzXwZg8iKAHs5JvSd4UQ3GK8f7f3rJVZriSd7PMJx5Jt4q345EUUEtF1YZMqSFGmwdpn889rR",
  "key8": "5uJdDPXeimAdvWmy8vanf7tpRRe8UAJmyx72aqX3i4A9ZVGzhg1CTEFHVDRTFDpLN5KRjbeTNe96URhRwVboUDsK",
  "key9": "A4YSR7HpySJR6sowM67wYEXJdnhKHYqJ4nmxsiTDSU2eHN1BdGmG9XAxAHQsQL3SD9cBFr7qKvQQwcAzuKmq6sf",
  "key10": "5TiakTWkHHLm2bSfXA6jrn6AYCS7K1vAaHhqUWuYuRQGCfPjv5Puya2WTCTQqUZ7C44t6ProDmsshXXZLs6Uqe1Y",
  "key11": "2a5fHohGBBqU2fNECWgx58VazfEEFQSvq8K3Djh1GZRPpLwZWK3EGiyGVu2EvTrfkGKTgRXxjuqKSfrm3RFaMEcd",
  "key12": "sUZty2wPjHPyYUcFz3PGavaHjRF49nhmB5wz13JPZbrxu8UpCv5Sih5Ej7q4zju7GzDthPg3dxbgkV4Ae3UbVek",
  "key13": "3fPxwxFstPNARbyUQac1r7Gc6CX1KQYbHMmyRjFN3o6hRDmiZPEKAGs3eAayX2VJGQnccXPkYsEvsubZGM4jGuKb",
  "key14": "2yi1LKgD8e65XcTmyDBTTr9aQSzEvFSkKRoDKCpzyruErf55RwsmW5cntN169gDmF5T34m2seNQFBvxDWimnv9xr",
  "key15": "5kXW5DnHcr6B17nFrW6RgakZtLsYeQEijWJUEYksHQB5avSk9k7GTk1jcnG4Pw8V9MQTydJ3XbgojS5TV3FVdqmo",
  "key16": "5Qk9V1HcuoV4Jng1GAR4RmSDyuUNRNLGe6XyrRVawBgKz3WHViNsFBNeWjH33PWh7xg3foMvTwtB3cUJvGWrhGrN",
  "key17": "4uHwvjyPsKE9wNuWKSAhyykA4FmdCnrs74NS2EvC4JpygH6Y8Gcdg7Htq9NBjgzmrecCw1xgMyHWeGX2vCmsuC2d",
  "key18": "5odN4GR4bAMKQWzqbfhBhsiS3iLF6kh3SpkqA9PCM2nhDR6gLXQmcSKUzQGxL93H23cLpu5ESNbakF9mY7UKAqfJ",
  "key19": "3tfmPjsdgD6eKvuN8ejAUG68kp4sQ1LWvAAbvaQkUtycVV69nP1DEbg3ksjsMsHAAnrtQ1mDVCxeU7EWH8LZJsQT",
  "key20": "TsAaidQawBjkY4ShK2DVru5NRnqqcVnhDGs6WbM7JRRQTU1VgHrsaKE89BM7EbQBu2rXpKiQ1YS9fPiuunc8c8b",
  "key21": "3gNBri6Mdbrw2oEGja3P3P9h4woAhHGASP26FNDseDTatS7jNSNfbiNKQLvyvaZuqMNzAbq1M6Q1FLza6Ro4BeVG",
  "key22": "5misuSY1TBwp25EMWjMiQqmDiJwUs1DEzLr59pBToqUxMnvNpfAzcNJPA5QEt4Bmp1MrdZvArFrNUWJcaVcg6iu1",
  "key23": "BSx4k3pstTjVsXwtb9CLefniGaKkdvy1xbbChFEHsDfjvdJM3bcxY4Hj3uF3dmcemmi5PBv3bKJcwZqx6kFxXib",
  "key24": "BZ2ctCpFpJh1shNPtGt8R9DKfr5GUQwoKJLuwaJUB5Uw4dq4YfT6z3jhEBTRgWawfGMJpjQy8a5ySCLRLovKjN2"
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
