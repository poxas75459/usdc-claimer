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
    "3UDxaKn6qD5hW72gZLRV58b1W2PxQtLJkSm6hHrbPKoAArYdkR18iqMGqFstXS2UdeWZt3HeLqcP6b4g1RTmb2Gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27r9NVbseHEGARwgvN2FeEqG1j4HczX29Q6kTcA1bCYMBHAK5pWKppGREUV7bro7S8EfvfQY6MqJc19qytdDxDry",
  "key1": "b3BZEWnVSQPcXatwdDr3MNUt2Mtoqu1gN86rQ9D5Q9qb31vU9NykS4TTgJ5P9qGsdhWB9owX66nVU4NEv6f5CUt",
  "key2": "3WxMEpTXRaru6xeAHtjf8uj8SQHR9ivX5Fj5d7x4mTnF4WSWew71r9v817A5WumvjoFUh2Wazr4VJtxkAgobNV2n",
  "key3": "4y17LoA2Ewa4YudzQudoAtbPK8tUWAc2CjbTGznEksuTsfGWF7nLBEw4j9La9tdoEVAqPamy47uDjwaeD86fqbyU",
  "key4": "5egEYZqrEkQyaRbGLzqLDppoVRXgPtPiLEoPvcvmBXWSPiPSrhJdNm44zJJ7raoPAqvNJeFJ6GjtS6YLzJvCYUM3",
  "key5": "iyxPwKAnwjFnHguuHyWJbSwaynWmT6NTjvHAYeFZQY11nkkFnnZEJPWfWKzpSWkmuZ7RvC3xsXw72V3rpBYNye6",
  "key6": "3FKi1DNF4GbuoBSZxDUdq78Z96HmTrm5cw93zUXPzCzens82CbRkzLSbRtLrhkxktRMB7U2ibxe1sEc5jtuCnQMK",
  "key7": "3hujWgYK2w6HWQDGRm3Ab6G7Ah9xEo3WXHADfmgzVwuaGajB2s3Uctq5etzPJ6Pzj7tWTfVLPDVbty4GorbkgCv1",
  "key8": "RtusgpNchuvCPEVPcR2td4e7xsuTC5uKwPEYF6rQUTDs44ajdrRTM2MtFmK6rgSZ9sgboPLtZX83oxWjtkj13Uw",
  "key9": "21iJu6MiTCe1gZGs25xdTEtzqTnxSJfrvLDZ59piDweoKCojXu3stRxsd7yjDFURSci1afEAnYi1QUQgF1N71hQ7",
  "key10": "Fr9mfkcDE4UNgNrA1TtkkswJvYJkLxYAnExST2e3MQSzDEvzi7kn5KSrXrB5C9wDVYpv3of21W1zDprY9a1YWsk",
  "key11": "5pZ5gZMF48bQcwKNF9WsXPcF3VrEMoVLckMCikuwG8DBmkc3EmD95xkwfcKeiLUB4CUtVawwaZSznd4dj57VzrY",
  "key12": "3s7QWom8CevPD1jt9QsmAY2FPoos4BUDBieAaUWCcmD9Vh6dWHGrejfNFquctGf9TigStk6juY7wVJfNiRovhrVo",
  "key13": "jLJfNdzNNFX9Fvfu7N1xfjGVCqo4i24YG45iwDfC9apAarFRwJThbDuv88ZStPNDQjTS9Q1nR5pvZoCwasvBhVg",
  "key14": "32UPrAsmWpQGinotibP67AwEvbhUfo8j9pwRED2Gd1KGrZFbBDZDAp3v27rgU1C1dBnXkSy12KEvBBjCpB5otwLt",
  "key15": "4vBpWVw6UK8QJPSmR98U1wDKKiFDo8nvWoCazfQvdZG46nTphGYtJEeLt5ERKDxVw9Funz39bY4GerTfLhfS6mvx",
  "key16": "5BVtmBiag5ZCo25c5CQ1Vtxv8ieZtxRewX4X2pbL33SKaXJoqDx3sLj47iV7e7Two8EHu7YbVgyvFUWtvYH9igvh",
  "key17": "3JGvBZL8tVhES2NRXUPmEDGJ4df6SPCR5gxKpqNVhPhPaJn1RfG3aR7aP3JBEEitrTr8DsnayEFjbu3GFaiUg8mL",
  "key18": "5WfvZRDYX4SjgcaqijqhVzombSJ1PM26FX1eE97L9t3BVnkecbpZtxj8Rir447ijCSeXpFmUM4fJz3KLFpr8ANKa",
  "key19": "5SpugkKccSprn9a3AHL5MfEsEgrLVdmecZaiLHy5645sqsJ6CZGDpK2e4KeVQNFBBf3cpS1ajh7tZrpdtweoBnRG",
  "key20": "2Bf4m41hwkbkBmkomWr1h32yxDp821wX7oKMa7D3ew4TNXMoqs2LodE72TBG1hBRHyTv3sBBxUQUtE6MD1AMNKek",
  "key21": "5vt6ksSu7bK9BLfRwqNT9QwVRXsCWRR3rEP8VDWK6GjtWxUjnAJ57EqGPJdwnzLC9GbkjSgHEi5beRgAij29kGCh",
  "key22": "45NmcjuVBwdfgFmrLVctZaR1Na9cBNLKe9wLrBGfx3Lv9NNRoSBqmLD9kiHB5yBsgP6YkD6jnGtitWVBJyy7wEc3",
  "key23": "4MzVW2c3egZ8sWPojezHbUAbD1eP2goBikf1iE6KraeEwazzFruBmAcA3jtFM3jiCXWcV32aqBJ8bNSpqgsdsFEZ",
  "key24": "5ZnNb8YxNcVdD4VGjmmTNPVHG2Tzn1nupir7n6F1r31hB9zU5sMG8Z4CiZ7GwuCVF6GyMVQwT9FsHKA35o7y3NbX",
  "key25": "35zjMN3HRDvJhc12LqFcWYPyuybCczffgc9txZZzMTA7Tn5vF8N7qADrFVue5nJuKaTeN2Bz7M9z9z5pkt6pyhBi",
  "key26": "3RHR7NXfb7Zt991sLXdQ6fijcqBn6oTtYbvaiewz9Xq6mig3dpD3iXwjiXqG7Z9axa5vtUDmLBP6jnWvohd6bHqU",
  "key27": "2y6dSAJ2LaznFBXZjLLVFSYkg88hk1URPJttRgsannRGWL9QuMy3ANf7T6kWMQEjrDrswSWn9xB5jaYB2KnjNQ6E",
  "key28": "4FNsnSdoWcCutJfSmBmoxFH6t4195LNnPzXwZ8yXiQTRBPrfjFRrcU3cvXWMYrDnxuVc3RR739pNnrSjvSyMx4ES",
  "key29": "8krGLqq6QExY7WFJnvRvbr6khC9ekwvcXuPWXfU7x9sm6Vufq7SpP4DnCWxULiX2LnPdFJ9vomHw33sJZWFFxXY",
  "key30": "3nozS8v8xStBBXPmDT7XhJzHrzUif2LTKW6cGTpsPQZFXSbLnBDCUp4kso8vKm1GqqNP7AnRbcAsSUGuTsdAZegD",
  "key31": "4U34YzoHet4kk6GS41UmzxKC2VoJ7Ht1NVGQc4ovpYFywgT2HdZNuwoBnyLg3TzsJcJbr4DGUs4vYbxP9jsJHrSX",
  "key32": "2EFKfvZbcaDsk5NCLywNWex8ZV7yZhacCcQpxv84PqPZbPCHPZYKKnuzwZqk664Ad9m2D8nH9CaqsyTsC7qWLhED",
  "key33": "fCzMz2sdYhKFSwP857A8YaCyqYNFJwFttGPbhcYsoq4hjD94Uucdc47yM5xHZkn5es2iWz28Vo7UWgBYavpJNRw",
  "key34": "kfUvN3DhHhnChHoXCn2fgXL5haMLB24Vgd6naf4gitJxsZVse9PRGCNcpgQiT8zxTg9PyC2Kny43G16QBVyeRuU",
  "key35": "XLxWcufXUmixFCKz2jAgUtQxXoyVny7yLirdFiZx7dKu7eQE1JPzA8k67vaap3P3rmqvM2dYzcfXWndB6rVAZA6",
  "key36": "cCM5weypNsyHLeDRMh9PDKYuuaU748STCSHuPYKiXAPte6Y2WrMGk9XfaKq3JDXe8Mb2zq1o1VrmgmG4pN99rXM",
  "key37": "3qEKygd76m1UX71tWtZsi5JXnxqLLYpj75da1N7JmB1NKhPgAV3U2Nem9aXqdrVMgQZksJcFDyJS8kbUdY8D6RzQ",
  "key38": "2xJBsasY73X7ZT2ytEwzezPY1gf23UGYURjqRXZDc7KscckTL16vZRFXmgDcVmye9yKDDUf3hJEGhtR9bR3oxB5t",
  "key39": "FX3cDnzmCq7b3HRH6Hb2oW6Symfpyx4yMqUx2JcASx985t2LAbitwZ75a314FY2uQmEEDEB8i5fyrEVJ4euXJ9S",
  "key40": "66Yq154ox1okYD8zGmMQgtFPNpuWpvrKEto1acqcXP5b6LSaJajhT4qr4PKsaiGdwr3Av5m8tVu4upNGDiCdjUuB",
  "key41": "4pwUTqd26KL2PPeJ68BtKc7okDoaLMJjdgRT8baFa7yxN4q3bfEsr3FZajVvBu4Ph4WV2NVzsksGAFNUG3SKuXj3",
  "key42": "5mPTajTTTvutzqu5AJFtHyb1eKhZMwPHAZhZeu5MUuCgorD6JBSKDtjeQuSHo1kcCnQ6ivNfyxL78Go9ir73Kzzi",
  "key43": "44i6agNzZUtcMpqJPUnr1DH3SmKFYYJ1tRbhnaGAECkcwUVFXxeTy3hK7czgza4Jbq7K3kZm2hhsPVcLGrtzhd4r",
  "key44": "EUrVtuf68zowHgGTzuW1DGgLpeWYHNof3YGRC5PD8KB78LQAQSNRuaeRkLcnaRXFwL2avYMk73Zm2vcaWjR8PDC",
  "key45": "ew5zFKRmPUd2hZCnAnyEpkqeFHKvC7wHBtsaoGpAe3KK7tfsvTYrt9F6Xj2GqPPN8SQfztdor49xvJ3gFN8y71P",
  "key46": "4JybmeNUgWPG4H9pYrfsny1eHg36padQt6SWJ6PkMhhxsXyb4fqxbV9La1dxPg5dSgXGs9PcxBszQxYzhpAUYJeW",
  "key47": "go3kvtpKsPuJQjCWa4oYVAmTDX9x6RweHpaWtcmAXkdJ1GMq6GkzDmaFvKb7YnpnkUjFHoFhJoH6A5CtSWLqbCW",
  "key48": "4L5uyK96Nypbsk9h1QJcsidofA8f1oTX6fawfVuPzWubMyS3Z2WWKbpCj1kAAAB13kVsejU1LZJmkazwF2sNVNRN",
  "key49": "2yrEiDS6Ht5vQ7XpYEwf8g4KdtQ8JhPo77wCZKaZHYnRL83bK7YSSgQ9iLLS2kRsd1i7REWbKKUbRFvyHDP61M4u"
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
