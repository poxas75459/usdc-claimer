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
    "39dzBW5jUcL7mr8uNTX816aNwktyDzCmswBNgpHhFxGt48Q3eYzafAUoTA7gzujQLfVDStkVfJqfvFuvoCKBMnZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ykUZouyD45z9wUZoT5HyR7pvAxnt4LVVSqEfiHMY1dyK3dhNDQK18NMvA9SUvVndXtjstMQ9xRe7aAXNdYPtxVy",
  "key1": "zMzEBjBzmaVVL6xmi2noJzttnhjut4cx61RSEs6ddRERCUh4Bf1nLMH92H1Mk54EdnySfhBV2jK1Z88pyEA6YFt",
  "key2": "k1zZZvuNuxeFoeCxPAC5jdbbqNg47hsGWnigiDnUieFcbdHTHJ92dDmXYkARqrPyH5KRvhXWjW7cCSAW4xD4Gwe",
  "key3": "3CivN7roUokaL1xViYpYjTzTfCBiEFr2ctF1vq9TY2hN1jKLCL52LyFXbDG6NuzTurNYybSu1w5R5Gx6RHhY9ac1",
  "key4": "5G2QGg8vi76TrWXJthZbvDomu6cnMTPHhS5mgZRhJ5GQe3mYRRZRsAKyGWuPLaAMUbQUcpWoXGRBePb3AGrgNc3F",
  "key5": "4kBpynMUUgNpU2jn9C5iLt3enyMwktEH2tmKE8yLUardx3v8LCgX7c8qcv6k8xmmYRnQQKwfSSfi9u9YyDNrnJCt",
  "key6": "3kGorEjjRsdafgKFdrp3z4773d6P8oBjoCbrAF1gGaureWpjVMExWRHEeoy5HLbLF55L9Y4uhqv1w71ZKjoCZSPG",
  "key7": "4gEG7qLXVTyEq2HC3CPpAHDWxm9ZFomBmvGqQtKisJLEu3fdJih9zEiuvdEromqG6hoZFWknd8qP2oo6uxYEKRic",
  "key8": "X1qQuqrsJkiaGW5JkimSJxJKM9ppWbe2zUeqwucyN2A6n9XCmqW6kg6aqZmsWE7zWoYyu1jwK1iwJEvGuF5vU1x",
  "key9": "8xyxco43ZXwFF49t3WUjeXanr8wytsEvemuzEre5Bw3BDCHKeLr7HM2tbkhgK9ycUvAT1axTHYygNxPYsqgwcGM",
  "key10": "4dyKj43yaMjAU2MW15d1R4vku5odkykq4hvMEVT8QPZMvYDSnocYcf3XSDe3bkEnY1QsmoUYPscjQHaWxNWpLyKG",
  "key11": "XtzMMRVfHU7rvrJbguZsp1UMfiT7mBT3V8LsLesWY1Cx5jQbjwsyJY1t9jEuYxmCPmJCSiu1SYiU1sbiRCiHjvJ",
  "key12": "4y9FPkkao66JRxYbGKCorHnA9FJX2N1FPZiaMwsbuokNH7BxEwkvubWNjmc345HrxgsGXjBEdNSLhuJFZJhBh2FS",
  "key13": "4euksKNW8sJNedigsGSsnLSbokC5zaPaEgkMhXPRBciNmFJhZXbduXi2KVPxFgbWJFprpXkGyg27pvrJjJrWWcst",
  "key14": "2ntD3B3Pih1oTLxaG4ETmuj4PrEY41w2N3dYjLcQbX5tqpUMf9XGscnhzG9QRoVkcEDxtgDwsremd4L54ksH45wq",
  "key15": "31LNGexME5tSyvjDdUKEf3sPsL9uZNkbYJTeVedQM2dj37JcCr1Y8GRWLVqsQ49yTSUbCrssG7BfpngVMtWuRrSM",
  "key16": "421GSGMEd1HuoiB5sFcavs7sVVLBj4VxsJoYGNZqUKqnpfFHp8sxT5Tj8qHGFtdxst7SJReucCpBVneoGv2HW42P",
  "key17": "2NhAXs99GbthD7LemkmpYeK2KkhKujE7nX7nWp8EgcGUsTJL1BzQiSbugManyaHAB8M3V31sL2K9XGTxE1A9iQoi",
  "key18": "3T671cwLUTSoAUzaNK2Nvopkd5Hvbu5tkrkRZxwjnHr2ucFVToPKuBVNDheLRSLXrG3kHyupQbrrNBGqn4e6GiGd",
  "key19": "2MWMakustVLKAPHRYs9EHUzavdfeCBXUchETGsXSMPazFxPG5GLZfjPTraxaZH2EGFZBRm9v1f7BLM4yfjvJW7A5",
  "key20": "4vbDqaSSQRnBazJywyTdEmU9PEfDi8ZqYU5TpxiKJAf9teZBrcZksXWKhatWchk7xmtD4b2QdHH3YshTF4u843wg",
  "key21": "5Cf4WQ3b4ZYPkxfV7yPkfGzjKR9mtTCuyonYsPVcY9TUeJLGNCNnHYkfPTPPaTr7rhyPhsKjMWnCECAMHPUg3GAy",
  "key22": "ZfQEnCEyyZgmrE3mfJZN7NMSxQVwkvzpUDonZjq9yf1j1i7XvJ14HPQXqQr7UrygeDzaQ9bpdEUESKjkXRVStxh",
  "key23": "4G8WQp24hPPiT64dpo35Zc5aL5Cnfk51wvpkwg7onZuH8qpuENMZVnHQ1nGTthUngU2sJ351wZvWW9JYR14UwAg3",
  "key24": "2ct8eSDmbfoEn5jd1HYWCxAUATJV76kMnPqgGFBxgcUUZzt293RVNPZzhkbqtAy7REt19pz5heLZe1DmhrGv2eeF",
  "key25": "3id9nGFy4GGiYJYEQNtU6TjocVPXyGJfsxfv7PTuALK2gxL9Xb5NZUUvZJ5fwvSY1J1oHax7YWTTyRek5qcqoxpd",
  "key26": "3HQ7sXavx2hKhcxi5AJNAKBxkhk3TtyLJXChjmSDiaWapW7SMyHtGWxMk5khkfuQ73XJ36SaoT1KX84WoVKxeit5",
  "key27": "5u7QunvnPvsPXHd5kR5oV2KceQ47RkFDWXjNZ5VHPUSvmhkSwv2jDeDtPxPimPrca8KFnjvFYNciF3F253ayxKVC"
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
