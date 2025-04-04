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
    "351z2W1qnTKQkRkCZ94NxWv2qtux2fmv8e5NQ3gbMJ8VPbk6mQizC7zbDYiU1KNQCpyyxUoCYaaaFdAh3tpgmm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vTdf8gZRtwNee6j78wEAKmuDx9t2FEqG9dgVxtNZbAGNSPxqDYpi3XMDMSPYNG24Qk3Rp248a3Cr7Nm31uBa3uM",
  "key1": "2jdrFCygJkkiaWVpkQ5v8qNnAkQP5KDAwnZjvkrSLEbrJeMgVafRFnYknpGQsf6oCmyXGueKFnFSu4fSNoE8q8Bb",
  "key2": "E5TqD7TZWvYjdwrqMnU9PWfpwa8axBH9JE9wakb3vnoqnPMmiogwzB2Z9BYVjWNqYGRf8onnPNMDP5j92afeFu2",
  "key3": "4yThjSo3ffoCMFK7v8wpYCUpp6UTSfVgB18wYJC1D52groS727baBf5uGSPFyCzvwBrXLwvYpSKJrpEDCfbDpCdp",
  "key4": "5xjA1YckVcqZYcnw7QCWN2G3GeWCPKRo9k6LMoUkVky9AkLR9yv3hdx6cBKgWViUG1vEhcDc5noDh1mfnukx6dR3",
  "key5": "3dLRrMEsjVNZs4UeZ4TfyjTnRtvavw8y42tzxGJc1MBcvVpAW1SwfwabeXEFAW5nSvvNVH8zrmE3L4wvd9yeAnaL",
  "key6": "3jTHQ4Dx6kih8iCbQaBCUgPGnycwPF2oSQykwkRkdcsNg68EbiyUG1KWGetFfBzutdrCuuGj9SeutxsQZwUnu7JS",
  "key7": "5yBnsiPcxxA5egysA9gNwxb6dA36CukoNBL4xVuK2dHt5BEKkoFChKBtwmB2E5qZxmt2YfqsdpuV63X8QPjhYie3",
  "key8": "5nvpeyF7AKDeHodLTHytjYZRf1FUmbgLXHtaDpLAKhNex1DqSTFRGyuoLjLSAA22iBoB5ArutHeW15MXLDMKjWyB",
  "key9": "3kgCpDNPNFRe3N1iqtpGBL3GR2Crs6E72yMEhCUaNYpqCtRPVhnCHE6YJtd8cyqK8ZRBp3YsmV2t4E3Z3AxF1Cg5",
  "key10": "2z9ceHpREHLPmo5uYpm2vXHvSGzjYj7scAJQpeAPi3a9L7cjNSGK1qCw1rSLaqDzbLfgp2f6miBrumxmWpiTMREr",
  "key11": "3dET5KUinQvgQk8ZrKYJ4h49iQUXGSiCEQJhGNY71vfEFaLeMtQC8v14V8KonAt7nQZVXq8uEAv6zsBKFayobdMD",
  "key12": "4BNMbQQNLLSkBFX8sgVrtHbpewtPnMwDV5J861N8WZvz6zhYv3QohrNwMjPDR2ApR6tGpCDRrvUabCEV11HKA86F",
  "key13": "4hUsD3HRqeEjtQnKhMY6H7BjkU4Ndw1NZz1PmBgvkUGsmvdbcRPvnzCss8fCd46Ufpj1SCUaVir6NCnQWJ8RamTs",
  "key14": "3vYhb5ATuAE11v4KQN38ZUyWDmK95i8yfZRDi3D8zaVZd16JQ2yKhAXUZrGKe77FH8TbjQj3cv4x1buAyugQS7gZ",
  "key15": "2PNFx2GRxmAJh3h25jgcMdXkE11tEuDSWgVYBFusHmJbkkMHcUiSBgrVAZbwGDbKrxEn2CNLGZc6rhtHvPyCmB4P",
  "key16": "5jYRUPubuWCCGF3XTfAxLvRRzCcaLv6VX7hbaifEcrDMQkcVQcX1oCWE8i1xrixjPRZUJnyZ1vWCyFG49eYGLeY",
  "key17": "5BwPes9vwddzzBdoXNcyZXNviVRPAhsmYmsB68qZrnzqdoQbUMifmfGPHCnFko7Vt3wSgpcstKz65c71AyqzpKvh",
  "key18": "4BHyF9Q9buaLtnevx4mWi1MAy4FPtSWGJphh2Ejhd2nHg1xcoPiYYTpVueRUjHs1dcjSRwhpcnU3JmhUVHCZxmaa",
  "key19": "5VZQGmU6RLfDXtamJbK1zW3mJJfzV47osZoERKgHtgEN9PmrSWdwztFbKkzv7wN5PrbT3WKGistgr2nnnHkjGJGi",
  "key20": "47vci4aPzHntdxQnqforyAFb2r3xSbkp3WKp4YZEpBuaPKoM17rDmURYhWU19NwZbH7xGUnX4mktd8GgDR8HoY95",
  "key21": "37aATXZX9JSu1fgaDepa3uYRfCpoiUJB5uv4V9PVdSQRzr46piUTouMsBz9PDbAWuoiLADhrSRYCU34WyJiejtFa",
  "key22": "3oNuyksLEVweesVupvPsEFPvFP8ssCiTNdnkKTCyeHVHxjhsKsW1SRZMcCbVrD7sQr4KJvYoh1Ukp2C85dy9ozg8",
  "key23": "pHS4AMangTFHSW3dhj1mHE9UrsdPoDuWTQjgveLUKGAHz9BQzz9ehTXhLyX6StN3PY3WxM42wMH39m1eJY3NHg7",
  "key24": "S2V1L3BBQTzhXnHJ7ALFqsaHoLqTYfr6LMJFccSZ2yA6cBLp9jvf4TMjpVXAH18TydB2qAYcXVfQSt1yzgtQixe",
  "key25": "4MHK8i4FDW5Jd591nBGFK83DTtTBayVv7aMWKx9AdYJRtKUtndFrWVS8e7VkksNvh554UPpsdBHGwJrtHSCpQJ93"
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
