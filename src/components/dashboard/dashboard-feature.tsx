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
    "5fyBnw3WvD1tBYVfno3ghzzHQxsirPjfrwgdGEAU78QJsvxWaY2CrbKoJAqcMYGUzzDVzet5tNNgJryzQgd74X5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDFubfQLEonN4AXKAof2Nvp3HaVYareTfco1V8bYdayb5jijoU8TQ34CyUio4bJAoQkA5uYN9nwPWFdCBK5bLrz",
  "key1": "2HGs2ShgRwNQpFYEwpT1CxYDrKxNdm5AAPFP3bresSutiei8XNQSJbEykkvyyqX9asUK95T4XPPVr5CxLnhu9CLD",
  "key2": "37UDwuBJ567hj33Hvah9FAQPFDuVRdjA7qEyhi32ucEYYBGyFcQSTHAQD15cRzTrzfokfVdHXKLBEUfv3hw4AtyC",
  "key3": "45A575mHde3nKyCuP6WT8VbfSdqJ4WvhGKF2tTrTfnedVDv1XX489opj6jKvuSWdFKXwEZQ5b23HadUNMhHxuxmS",
  "key4": "2Sh4sHGEm3cKgE6egiDv6f7tLxzt9KcXsJNwb8HXgMqjR4RUzhXarqM23n8ncZUQspj5LDgwjX82rdtjiHxpsLCL",
  "key5": "5WSawuJE79SxoQpzqVPdbzp5xjToXaSuJTH4fMDwdXzR1cn1NuQGu5vbLoJ9EWddFivkbU87Hp5HNcaVnSFpo8ug",
  "key6": "53uL1GKUtHsAycmjx8xJMjtQXjGKqHx5GF8rNAaMC6WUCysjzPneMXPYeeZYc1aTm3BdZPbo1LPQSEohMaghzqQD",
  "key7": "AoS43j2ybaq39jZDHaKawvQsvu11XLo19wRmb3xinLjCMpb3LNdPLW55wGVoZP6255Qv1G3xG6yN5o4b3tAtxAg",
  "key8": "4nZmLWPDPTfXCQ2w55tP8cJJcsheaqQCQpoW2AgQ9xYEg46YtiQdjU6dZhre7uGs2SdmZSTST2firHAzuznupcaN",
  "key9": "5XWj7edHCXAqc1UFbqTEXNhMYSLQNCcsM5KDnRF7PHHTN7mydCi1GikzAuw6hL4RnU87CBhumpJQXZnrFhFENoGi",
  "key10": "4WmuHdK9jCNSf6y6gtpHRYeuHVB2ND8AFPp2RAT8eBCwdU656oRDLeZF1yX2VaJPJ2K6X9SDhyZgLQCm5C3JpC16",
  "key11": "2AdYdHjh6unBjehfD2Bvg9KKA5Sdyk7FhEiLXweaVdkXqiVV2nR1gj23n11svnGN69xYr8xSKrB8d3s2b9gKWmTC",
  "key12": "5wwSiSfMYgv9boXrj8VG7NmU52UTudkBjsxLtD9wfXVQKYPYm4N6pLi9fm5HHnCpAsqVgoJiLh6GxSZHKVbjHzDu",
  "key13": "5HfgEqAJBAjwTMN28aAwJWWLUtsnAmStEewHcSkWmRC8bcqLX1ajPbko9MVDrf537LEHHSu8NjYdGXG8DjJFBCJs",
  "key14": "3AG7T1qYsH7v16eETfwEAVdkWyzVK4V5LLp2o1Rz6Mbyd4fVeyWohWu5YMgwx9fBCiZXzfEFtJ6EvtYCDtm6YgGW",
  "key15": "3PXLDmixCPnDC3q4Dhe6oQZBFj1AwYAiMLb2XBUGbXaGxmw8nGoCfuqk1cLGE32ZHCMjsLwcqSi4iPS8yQQ3eCNA",
  "key16": "NFm2svzBcoFnYNPKpo2kf6fMSxAUW763YRPQEeLZQ5DuF9p4sbu1ZuJZJvRWe7mGiUTkTo2LhBR5EW3s1HWVA3V",
  "key17": "3tHTEriHSt2Xt4CDJUMrRoyFq1LgBP1pMx4g6faFbRZSw7RevKNbZ4fW73LbaNkqRhtcwxeXnfZECNv5VAs9p5ve",
  "key18": "4dbuYNbxPD5V65hi2BoN7CVG2AMtiZT6YP86zBSm9QDCQfDGjMBGunPbfHFfTifutBdRafK8g8wzddpTgrxdsgxt",
  "key19": "34TABtSz61GMWdX5BZysdyok6AqvuyMyXWCM4g2q3TrcL1qk3QYmjUVhyqzdxjUMdRv4Pzza9WvrHhPTtGGKNDKq",
  "key20": "38JTgLPJzo3ZMvFCPKTDYtPJucMW3AmwamncfVp4xfJRMq2nvkKePpCZ65J8d3VSkEcpz6KHQczoZwMRHTBX48gk",
  "key21": "235r4skdupMzvVj7WH4XnB3ed9srp5FNLYsyikmoxuRs4dWps9syiifJcZVXaM1ghx9ATPFaeTAEuiC2sX8SJfTW",
  "key22": "2ZRwSis6beXjRmf91D9NaXnzXo9B8K3SwBK8BEoEAdoosqGqFQANdxeTNQnu3NUNe4EskDCcwmLNeiczEGay6dg1",
  "key23": "L8GWDs9v25JLWGRdLKsKkKYDocUufTKd91gdEfuPK4PjY4GND55GUj231qbRnNPjvUCTfhhchwaEC3Kv57xuQRW",
  "key24": "4JFT482kdqt7NK1YVWB9BVUEaJEHmSAZj2joZPCcT2HzapC9nNSVN7mZaGXKwZrohjhJzGXb9Rof1QpQ9me8Un1i",
  "key25": "BYABMj6kzu1HZSoxnZBSvWKiu1A9pBH83fKs38rNBeYDQ6pcXopjgojfd3yLC97chuJiLiqArhBoDbHMtv71oSi",
  "key26": "41feMWNs9DDmqboummjfkSEeSzNwEf2BYaSVxAsFPRmNcqW9egAaJeZRqbggz4QZPoYkV7EekLNwTt45q339xXve",
  "key27": "3bM76MbG69V3ENUBqJksBYFwHSbAGciZqZmCBYtRSN9V6ZhEn3qHz5fvmUqVYxzYu8TY2HRdbXGQgoy1mMHJjBFd",
  "key28": "2o8NhRkRAku8emK3EELS7d82V5v5vQxvLejiyz5Frue3g669M4WLAHmaTFAzX5xsFsv4sEVUcmye88BEWqsYqAN",
  "key29": "3hcZx9odKSEemmbmHgnc3i6yFu9EDv5Hs3mB3Fie3j7ayKXUWxhhgP74nGzh8jJhwUcQWLqu4wtqRfrekdbtaz9h",
  "key30": "2ZpjP5pHdJRbyXAEcGCLSfur2A2AU1oqUKs8d7SicKnfZpsD3ybdnhfP7jevpv3zWt4czo4CvWWjZX2FvpPQQQd4",
  "key31": "25gJDTAR1N2g3mYL9GUmxBhESamfEvC4LzuTW212KZbcBWmgHTCzn3wXxbVMWj6zimKBJ72Kjz7YpcGiVBuFr3FZ",
  "key32": "59b7MaHRZ8P99Y1snfm1pfrnsrP86Gk1YEbCVcR21xNYVW78XZSQueESdsehRPBSrtgrJHRDf7RG2N1EjbFoyTHt",
  "key33": "5GEaPS5BsBSyFpXgnwDcAeehKcMZwu8WMtZGvSPMX5PqeUXkZphN7NqwukBas44DpQaWsuMHUg5ZKY3zNyaBAnwG",
  "key34": "3cN9XFmJ4Zri7aeQ4wnEoPKWoUacVrMYnLjfpwkk5Dv8sjFTr3bnr9fxXJEyLy2eTQS9onEvcBWAJa7PaKkSwmCb",
  "key35": "yQiKeSHpJdtq4AreWgGpqghp5sLNqPejed7duRyiKnZytVV3vPPjUzDz4qTQ5HJQAGGZRTxvQhtnQztZ1mFocnV",
  "key36": "9BiJmSDo1eCMeS3G4j5VocLqFf8Yu1Us42sGL1wmzkMLLKBw9azZsdj5R6HegrTX8gkL85R4h8xARSW965KHuvc",
  "key37": "3pr1CEWezfyrFWckBc4CkAh2MVfVGcHJ1kqdtFq97xjSQAuuyvsFhNcg6vVHGmhZN5Fy9U3WQ9fHdPsdSdrnjbdH"
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
