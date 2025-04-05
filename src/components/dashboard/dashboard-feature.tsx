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
    "Xs8vN3FrfXeq4rxxxemz8TxEtcehQETHyV8HF4FYT1yFfUHHFKFGKd7zUS9uRgkR6d6JN1CXJgodjDTaasA1G7w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rpz2qBw6YEQEDbnzB7gRVtq7MMAUnPNKMmCgpvKef8p7XFN2hdjV4UcWP9qCj36oFC824DLTzRt5jK1x8Q7zAXx",
  "key1": "VCJp1wrDvH1j5LN5WQR1Qp3MeWC5DCTSsZYD7o5mc42P2tE8Qp15R652UEeRaHzGVfhb34VUnBGpZHnA2BkrCrh",
  "key2": "YjzzZFjds87W3196dYEAYWieNBhP1LRYefk1KsgroaLm4HB4cPEQsWtEpta77fAUU1AfrKdWjhN4bdTei5VA1gV",
  "key3": "3ArNirijRTEFA8GAFuftcwCcqxF8PqGGjoSQEHrLPPr6N2NQcX1d21gHzjHANg4QCv3S96h681CzVsmHSCB8wGTt",
  "key4": "UZbjz3S5Eg3irWn9GrpAkqQ5EH6U8pPZMgXCVet3bi2Wjsz9PBASHuvKsXeLHc2mQefw6b68HHzWcTAGF4eWvMV",
  "key5": "5DsZLqupKEJDFoKBYXSHeGNXM4cchGpoh32HEmsKwqSKitkwgFZJSBmBGNbazAewz6xa1Mo5x4wa1aH55at8qxu2",
  "key6": "4BHRQjvUxaeMyBEnM6n3y253n6SGqjqDq7LRHQCa7jYk4gRpYCT8CgjPpayZXcPVFyQhLvfZpJkNis9eh4MDDGGN",
  "key7": "5WdfbTdthcybwiEFnwTrD98ip4SLVoJV8Th6RgNTf1RmDWouBdT5L6gd4wpPz61iuFESYMXZLMYiugdToZUxYnH1",
  "key8": "4aoKVoJhBWAA4wKzvjwE32SGHxvtBEMKLuL1WbeLuTsXpq74zgRryudAu7RzDqpKkuq2UNHtaKkvJ4nhDEyzQUnm",
  "key9": "56NLm9os6nWMsC1m1BGfRHf7NZKwBARiJuLWEM8BjyYy9ioZNSMap9oFukeLv8qjJjK3qwgWDPnSYLoMakx7CXV4",
  "key10": "H8JAVaWXXwKVoD1nRgqSnuaX8HZT1DeyKYQ4WxQDPhaCPmx7VUYSwoxr1EEAHpEuQMKiFn4tnmiTbpVKYAtH8BC",
  "key11": "2intVU4DRtE6XhD35EbePJjNA96YvV8pMVZHMaazu5QrDmYAYKAoou7khb7NkJ77othiPRWK7VHDSbbPHZywY8vh",
  "key12": "4uqzsDCgRReZi6rSqg4pkeTwyXx6w879QLmkL2T2UPzW9La3UYEh6kDf84zkrJee9SQruhC8eVvDGrpTLJg5DbgL",
  "key13": "2vAYL6PGc2ut9W217KSifSYT1ypFSdQLwJQ1tKoVcVFs9Q8V6ifS5qorU7Q9eJL5vRHYTZDki1e1bVA6zBhMDmVc",
  "key14": "2Jcp75qCUNDxYipwWSFYXVF7U2WFrpJvnt66d16uC4LPnBYizhN8fTbqduTN3kSPtEYPhpeLqs2RkLf9q62wz1qZ",
  "key15": "3ULycdBbVFmhxG4hhkGtgFmSzvrw8ZDw6zMQxdnPWrCf3nhNg9m8veJB8d6YxTiUqWr7hpmRMR5d849AZKmC4My5",
  "key16": "4559LomJsB1Ufo7UDCiJg8pffF33nxuFLx9YtvkszbCysiD8prEqB2r4c8Ym4V5gz1v5QLdeE9pP4oGFVkXP9nSG",
  "key17": "2hPeTWnvEf3DVotLCkxPmT9Wrwvo6UdA24Mq8zSDfsBPJHqyN4m2ZhMnSeorb1bZGBcRTrmKgSMUY19mNTS7huu3",
  "key18": "RwKV1QB7r3iKeLuLj1ikwduGMkgQtNHbyfkQYjAXHQFVHrjLUWFigjJmucqS3aMnLmANy6PB2Vv87MVXXu6xDj2",
  "key19": "FTejGKa84Uchy6TAL9m9RmWVSPkNb1VyHqq7ctvFH9wPmqFuq87SVn9eX6Jajag3XGDHjzGxwC1ySf7ZhefdT2e",
  "key20": "36BbesVtyRYVL2RQ1ovPGoZP7zHi3B8XG4dnipiprsnnQXgCyufGHgL4FyFGbGL9XeXAysN65gGYw7971Q6fQT7H",
  "key21": "4HNbyp3VoRLaxo4tCbFJjhoithKS454XZudXWZ9fFjgD9TZYHTUQAdNWc4DcavbVUB1TLkDQ8ZMamN2ue3Mxmn8S",
  "key22": "2a4b2yEppQXqJ4Dh8BzT7cpfMkN8mt9qXgMw7GTr1b2BQ15cB2mCUzWEezasJYXaTYqEcV4LzjQtWTVa71sT7eN6",
  "key23": "37zW1XDLf61xSPGPLciqFFaDANGbFdRuMWWCs4fhVgFV8vu1ce5gMY7V1m9cFiVhNWpsKm5Y1X22eESWzZ8iYNT8",
  "key24": "2atSdqBc24v1hEgND1Z8pHDpNYnn9sK8W1eCv9bWEaEtP7WXRcpCvwVSSbarGnZcUU7piGcAme9wEGb9gNCCukKh",
  "key25": "61MkXm9anKj2W77TtwbupVUucL976Vjs63jnEtyzX6UeiVGkgURjdvcBPemoyNot7biQaGebpQPCufYNT9KNsrnU",
  "key26": "2mta8AxdnaesUDfEGajEn3tYHM5iaHeMuvWrdaHMPbnw4j7XwAM1J2kSf7y521FjVMQPQY9w8MNBv2pW8k3kJyo5",
  "key27": "z9Cn3wDzm1wEXYx8DksbfufhMoTsTvCH1xFrZ8wgPcxTGEKu7rBFtzSsFAcX8WkiZPupbTev8nSr582XLdszfmQ",
  "key28": "2WZLGA8Cbm99E3DcStKyffddULpYoiqoZqmmrRfuPusDWY3ov6vSppsdYCLUkfntct3HWa29vrd3TscsELMSKagR"
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
