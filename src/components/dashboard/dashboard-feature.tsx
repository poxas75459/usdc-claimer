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
    "4V9rmqKAB2XH1swWS4V9TbG6QPbZ3yi6RSojHcZcuU94Mj6xSpmBbWdTUPcmXe8HVi4g4esu4hKP41spLZCLVfBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47LoqZJmq89qPE1dFhQFeBEP9jzXoZvR7eJPDtaUMDMgD5XaMX3h64mQDQHss9FzPJ83YcyVuKA9eiQtE1QNihE4",
  "key1": "3AeGW4jEMti5LsanbWABoSd6xsP8uAHq3VqGad47KaDs1L5r3zEfRV25seZAcdrcaUc9d8hsgtXBGba43Mmo7QKY",
  "key2": "2bRdLy5uhW2f5HgxFEP5xWMavM9zemmrLMyWNbko56ByaPBSCxNyrE11KknUE5JvUazhHqokTz8Qpki78QbeBGpM",
  "key3": "2p6G9q18rNux84H6onBamCz3j9KXdyv2rrMoxHzj7NyNREFM8DhpfZAGr5o3Z84FfDTiJXif6nFbLitwZAWR47iK",
  "key4": "3nTJpnimqcbSTA9j74aKxFLPwbYWCTa8nxfbEMkvQnGiBWNPWVVrDqfLCC6STD9MrLvSy2urpzC3H8PDk7UodbJC",
  "key5": "Td3aGgdn7TEtJVvFkyW1ZpUgv2u5BhTjBQ2aMqtLfUJdyCXAbuRaRXLEdteKmHTpDUH4QrVEjZoNzA8GbnimQnf",
  "key6": "M2w9Ry4igzsc8za6Vjoyca3PqaqEBvcREcaRHnm5Fv5APHgZjUjtutC3CGhZDSqLg1oMd9V1vSMh1458K4Pm9Up",
  "key7": "7pZuGAEhLdohzsgWWCMTQEe2o94sssBhEVwsuxBSpSRoq6QhHSTRDTqvQ4vVCmv28o1UV3jJJpJVCpGP3Q1ThrU",
  "key8": "5ZWaKq14MA4o6YFqRja327dbVWskMpzwwV5J5DqN8DnHXUpJq8G8WfKLizyJQGJcMi7Z8YAGSrnTUzDccxK9w6kD",
  "key9": "61tZEh1FwFj5QKi26jCGnMxkEK6S8gFh63sqdKp4DpWC8BTWhVSCfzpfmXwqSQpuqhsm2JTPJ4ujbowMoV8biq5R",
  "key10": "5tX1np96isd5btbKGm6Ah2GqmNsnopM5CFbBMEUKgvyWcjaVfEUGhV2ZFYrWc86QqM7tDAucx8MbwEkdCdKqRDGT",
  "key11": "5B7pa5yXXguBPBgdv9u5vUKrCPb2XBVu68zadovpeTmVCyDGVc5Rsw2EQPhCEEfkYb7aHNTAvtMqGsAytf3EuoAa",
  "key12": "Dpf7ZkJaEpEHp5d3qudi8DPWv8NjRddGY8Q84m1SbETnk2sBDZq1Zdfk31FwtYyVsuAzTGBh7CCeF4DvkeK18eC",
  "key13": "3ggrxPq1WgYXWYoCZ9khDqbRGJqS5jBHoEmgt7uzES2bPeF271FYQhPRtb29ZMA9BkydAPYMKREcjz8vteTyY7yi",
  "key14": "e57nyWUJuJbwEVJgPnQUBKPa9NnZNHq41heD4zws8ykZCM38bVruqJDMQuZcfB6dvYjKsA1SvTtkmZD35avRiBY",
  "key15": "63jqM6rksrm48usTLABaAaBnBLBMphWBMPk1oVKvmDYNKo9EJ1p9HgyYVbkGYzZUT6naVrdUXM2Hjv7RiQRdssEq",
  "key16": "376YQ2g8U3da8yGiRqT6BnxnyoaBNyXGbnWSVErXrg2TKF19iowpCViV9dmZdZxywfsc8xZbo4b9YMdf2MG5iWEK",
  "key17": "3LLM1QWrQWABT1s5RxQXAt5KCA4P2WFdzXRHj33NcNwzFQLVQ7AA5BfHM34nSR1itChPdakogbLr2MpDhtrG6Tac",
  "key18": "4D3EVCkCumiPsDZNQUbmmob5dzWsYMhmC8hpJ9uessRqx8MpSZga62BksK6zxXWQvRKyygvf1BQyEupDBFjJtHWx",
  "key19": "2KbhnwT5513hmMpHPVnK5hzLT2jt97cYMEH4LZcZTBsJD4G7PBVqWighu7NjnkZiqYoPGVMTuLfVkZd7dCT98u6f",
  "key20": "3Su2jqSWN2W3o76VN1b9CCjHi6mEcrNv6k7XjEKLr2yGQFYgjvSMERkLY2XmFdyGYxVTiRHTCFy3xi6dfnRZG2bR",
  "key21": "2Swz1HnjDs74iTqcoG9JzFUiG3ZkauBnoRDjfJf1GCnHJevy8BT7mk4ED2fnBBmzSvHERSqktVzwen9v8b45k7i6",
  "key22": "bxfzTv2XDgJzfPqvdn4gf8MaRkYoSko4sjBDtkZ3Zm42iwdYtHMpvgbUEVFpFdhoxdSduaSm3NnFh4osuHkGbmL",
  "key23": "5DfXJZRhZnQgNZaaG8XPWMjjHkKganJbceBZEMudvEAEGGQ61KkcPcfq5vZDo7eBcQq45T9qE7t5ePvxGMGWt99X",
  "key24": "27pVSyvX3fgpkxzjtxe1Qyg77VY85AR6tEP9Ni1RNqfH2vLNTJtLn7MZ6R6Lvm72GTwXzKYHgi97Wq5s8vkr81Gz",
  "key25": "gwg7GJvpJqbMqDv9xmByza8WifozHjbEEZLaMXzk1BiTFuai63yMGUdxMA9ivJ1onbP1NSQSc9JnhpiNTg9Xn6Y",
  "key26": "5ok4HKuktiYiGHXVLPzw8Sssn87Sbo96gXjqm6bnBwEtcGN5wPeZqauPX8czp6LbL1PriXrkcUt5nkQu7PGX9VHU",
  "key27": "4NAhHR68tBzVk4uKv7wcXALe844LbFJWdMY53KKQ6mjiyTNqVWkfmQn4KJizAVV5cNKMcQX1RMEiY44B1CY1YPXr",
  "key28": "5D8mTNcraMkvzMNrJpEzgQHY5MWRqTCgSEow7YLBd9PqHCnxk9QNJxMQaPr3ELihUKznPnWUy1CbaVBCud7mdEyd",
  "key29": "23mrsMefk6tiPCTN4kh5basgAkZujYTJ7FRmw2sspUATtmBDqPpRacpj4JuFjGtyrZWNDkgxUoNrYVZQx1bXP6e2",
  "key30": "ZK5ezoo23EVQNzQNg7R7hWCjXNxZWJGRcRwS3prAD4S2ocq1WBSyTFi6XwnPFhrFHJshVSkxo9csvrSovcwWb45",
  "key31": "5rtiRiv5t1ZPJFApTsqhR7euupgot5DFhKfr4a4i1DueohH7UcMBf6BAJAzwdRxxXjjAQaVejcqPukc4MgXs1FYJ",
  "key32": "4NCsZZNfcmSDvDKP19Luitb5sGKoqmj1fDciJQFUBSPa5MJbZehMpMku561osHyKGJQp2iSexWLbFyTHcrfywdLX"
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
