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
    "4GaAzQRK2MTQbxdXWdief8WvPn482mYRasgTLGBCikoydChk76XxutDdQNk4dLNsTGgsShZjCv6zFq1AkQPPTcPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hXh1HqiXditR2Hr3TJyVmpwEKj6Qu3Ud5BRUB3dnxUj83FW67xJpm1FhiCgoTrJyHtKLzoKDBRNWsS2xVSfDngf",
  "key1": "Upv4DTELdAnRUTidoe2gVoxPz5EKt3mzgmBNAdNhLBqNC4Liu9CziFE8C2XcaqYzqTteohFgDVyTAWTBr4hWFQz",
  "key2": "4mWgZ3yvdz944fGKYZZB4FDghJpq4MB2nZEiEf4BzTSKqVSeKoetPVKdQGwDmKPRFSvMCuXDesg4U2qAJPkQjBMn",
  "key3": "FHtrZ4qDupUaWKzLoEUy3EyrC2CuGZ7zCHUrWafD6zYjo84Rm9qfVcZ93EMUj4s2LveV4XckQQV3buncmrBa68g",
  "key4": "4yqUwynwbDraadVbY2nRLAR1cqhCsvYLzvh3qFAqm3n9FFeEB2oV79xgQaF33twATPmrat6fhwnxDcEJh5Xh61mr",
  "key5": "5xipZh9BzuPUwGaPXoA2T58dtrBywxh9WjagwfjkQ2pdbkfP5xGqt1V9KRgDAiaP5S8VdWKKv8gtJjdGuiaNQevb",
  "key6": "3C8bKSm4i6D9sxDuQAS8GCa3BxnLTUa89VRVuwj2rQia7U2fxMSh5SW1jFHmVYwbZ3qaVPZfJBqjYuAeUDQohxxQ",
  "key7": "wz2S58FTn6Nx4d3momu96mTEVZG7qd1qEh7wD1FGZe4M3sDAZN28ch8sULQ65YJ2ZU8bHB9gCfBid3Qwky8hvg3",
  "key8": "4aXrt8aQRQeBMYadHhN6s3yjjWiaFWuZBSKtoSuc6vobDMSirQhT1y8c2qw3E5mCxkSAN92H8zQyXPY8jNg7Buy6",
  "key9": "4TmY4dpDDFLbXWBUrP4hLTZgkqg7N3XFpQnry8FNTK4tuTeAt9Ggu5VoZ79ivcxBM3KnDBSqVyxiJTrzLNBaQ6VB",
  "key10": "4iFjyz6zGJYnt2oWF1PLMPJmr8tmY2iz7L2o9MkUZh6i1krpiyCMhQ4BJngRPy4YLN7c1HvsN4My9jD3oysgJoFg",
  "key11": "5rJixf9Q1C5BGTviSEwvmkwGjAeUS4RkeYVjRHg86TgXsZ4YmVQqqeBAmwr8qiguzk8VXu216q5bb7SFFM7YBuXy",
  "key12": "5QQLBN9um2nEU2fTujTurQH7QXyrvH2Hr5ePvwUQoRPx7vC9c2MpH9TjeKT8mwLFqpW3ouz86MsznGykLMa15z4e",
  "key13": "2T7XbPtFc3Z5hkyWMQ8hU5EB4p2gHKTyAzMYPuU1aiAccUHJDtutACCa3xk3e6SchTrACWN34MJotTBANZoVJrPm",
  "key14": "5Lc5xiPYXDejRsropDTyPQnihs3ZwLr5Vtysk9bsM71bcWtfTJFqqzwr4h83xcNpPjSqxnEtvZ46CQSyDbFHiNp6",
  "key15": "2BDr99Fh7chiiu7KYexKGtM9LKQ1yqcosZu9mznGvd9xCa6jTaXsti1zVUmFTjqEGivudde6TCeMhXMbAPmpEcgS",
  "key16": "h5yQFQeGY4ASRDsf23RHSQgT1kskCNZ7Sr8oE3qTQhiHYoZXjYXcMKEpymFPQepCi1ubyYphMnVrXfq7yeXydiw",
  "key17": "21WWNFucrssB18BkMUDM2y9ovr8mnm2iUpfS3egpQqx9Z6a6VPEGUHNpQGQghAhGuP9rUvtebh8AvXp7JNHs81Rw",
  "key18": "5CSLb922sQ9YPjENL7fsaxigJExfHy6C6MyiFh8XhLdnKD3bowZdoPxnuTJn7FfQ38VDeamhBEKyyisUEgXqgWVd",
  "key19": "2ZC53RyaRHfRjgARQCEF1TAuNQpDv9QtmybjvH4MPVKXtLdKhtJsBbU7aCoPX84yZN51FNDw4gRGscv4ijrwdE1U",
  "key20": "2s4ew7LR5dr6xiLU4oPHL4kxkbVbYj6PNgHfDVY6jZ98LB8DW8x5V8Ek3JVk91KuuvKwWGowAVfZSNS7KKpeaGeC",
  "key21": "TmA1MoCLLxhHUD9MF5mGkmJZt2Xi5XRrdRymYwVV9CDas5AMviFkunTEK3Jh194cJRgoTKmvYEh7dm3oeQDwG1d",
  "key22": "2qW4QwhchqxLHCDDZ1QpKQ47WBqMk6bEGsJhwDSrPmVhqJaCFCiz2S9t5BgWpGWeUBXYdekMzjtwrpphLVUTASQ2",
  "key23": "4PJbZvJs4KXGtXz18Hvb9ejZC9y3Kf7dNfbUKnx1xn3cM6tqyfj42AsXrMk4yT1UjQoh6yzcKFzxUXtKapnB8aiK",
  "key24": "3FEM6oM1kqEo2CMCMEc8s7u1HcDqrWFrmPL2ANWntQUifzt97JzbGkqA7Dg3p7R2K5UAG3LWyGPSG4hDRgZuA7GN",
  "key25": "3TsLqsyaUdoYZZEEbvZgtdZR4NbpP1R1BNLTipED5mhbgojWXoLGUhmfRDYmAdJ5WspPQTgXnhouDLYcEZvaopKT",
  "key26": "5JpCoj1jKrKdrWWz5Gkhoa48mytWtMK6oy18Dr2KuSGDe5Sre57NpXtWt5AZ6Lhi9ZUsob16CFiavRu6VEQh4dmb",
  "key27": "5VzMoeVkqPAKj9B6wVjR8u8FemmBFFuGTFeTDYpC91d3qEGfJMtKWvKoYgW5Tby1KWvuPNjJ4BM6m42qj3ESqk5R",
  "key28": "5bDW88o4nD3Wkk5vnrWU7jJwCYXbV4d6FAv1VcsMvd7qc4C3Vfk8sQymLsYLHuQ2pUnsxksJKpEsNaSqjwUp8ASp",
  "key29": "38xLyqfRcWLAG29vJZMmJgRrSnkoHaFtZBdRJAN7qgedi9HgWxZGCDTpP19kvT66VMxqxjbzPNTVRfe8CSoNzDu8",
  "key30": "5MamqAA79TpnCWWsFQWXHWHoJtiL95x9ACrMyGrsu6WN6WKbrkTojjjQaF3hyM5STvLMfsuk5o8146gD1rywhV4e",
  "key31": "61oyq5Kk71SwrDYt6GbWawX4rCfzWMUdzH7VCVhgk36juZys3Kw4h6gdF4hX5ijnjb5RMdqvg8UCMnwd3aKfJgN8",
  "key32": "2jhoEW9C8V8Gdmx8hK4EJZALQuLWVD3cSMaueKpfWeYUMrfPgJGNFPwxpozs7dJrWmEKWbgrCf3YNt9khLfy8Z1v",
  "key33": "iZ1VYMMduJHzU9HSGJRYyGZFTD9PZH8rZBBHs3QyEPJcbVmFu91uPKZoDxdvoWigg3BZFKHeFymzmQe5d5WZN4Y",
  "key34": "3CAU18NiUxDheHrUNq7yRzJzPFwsF18VwPyVQUP6xUtTvV37pfCTaW1nVcqF6ZL8iACBuZX98JUhnTt8t8udHKYG",
  "key35": "3gtFY3smTDiXgq14p4FnFqrCzcjDH6BSwPjbdVrrRa6gk1Cd6q8q8nKqeeVooi9DiUQzD3C53B8gUfU37nB81UPn",
  "key36": "KASZoYkEeuqHX7B4YYCHfyK8hgGij1Z5cQzGxe26hcm2zFn3xhsGvXsG35FdY5Q2WxuhBrk7eJuWYb76vVrmVER",
  "key37": "5hB8YWRwjQXZyZ8Rwqej6DF37abELhKt4vErJUEHRbeUSc5M2Rfjwig4GWhvX271QA3RVySVen1mFBvSZFVC4o4S",
  "key38": "2TK7tVJwwZ4hnuxoS8n41FueQKQUu7DgfwxiedjTYfirDbwxAbC5kWumNCnjapgtkCQoq9fkzZJqw2EdT96LAoby",
  "key39": "3sk3JREfw6siHq183kvx1jySMEhMQRUqWtDV1Yboy2QfWQcgbiiBMKFNroJJiSeuG3Hppi9Vr6w5FvdKgCtUDMkQ",
  "key40": "2Y1yCCUiWTgQZJgZThNpe2ZmxWHNJeF1J5HKr4Juj97FjzaYyKJVb4RfujAs4ZB8VSJmcWBjdjLFRPXDqvTUfJqK"
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
