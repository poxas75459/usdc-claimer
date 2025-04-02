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
    "2hgTbdEyMRZNjfcZbrSsfE4oREj4NYw1jahGr7iN6FD7LNYrS4KMLAmRXSPEN2zD3DM5ypionWx1kQ444C96nNqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29q3dmVtfPqJbT62vqVkb8KndTMChg8RYTJe9pHmxxEVM7c6eEqeuU2Jgc99Wz7zy71ERM3UymtkGQJwLsuQQtj7",
  "key1": "3CSiuoCKtCicJwBctYs4xKMFCdBQytTk2ifHfrkBebyv9jcaGENzFuNecEHQ2DVjAcqrJrLSrtDuFW89ADdUbRuM",
  "key2": "3mMCLqV6Pev4CmJ8YDxjV2rQSYV2w5QXyWsnKN23VodSZrVRr1AyCLmTBzwRJvoEJ423EVmewkKpcsWFkhyNc7zc",
  "key3": "3zgtWQZPj4nYrHn3QmrMiPRTDrnzFjv7uvoemnd8fG5j8zrnBKrwDj27nV5gWS7LF4P47YqeYD2yxgNVgC8uEodk",
  "key4": "2KYKDKLRBLNeih1aDMeGU9GSc4GAKhCEoBjfejHW3idmmcGJPEeSqsCciAVFyGuk2jqy12RbF5vzzHLz1RJXLErG",
  "key5": "66GKwiT4ADTuEHj2ewTHuTwFqeHRve4uZ6SLueXYMn6nZP4wpq2sZ3xS2dG9iEkRyp5GDFQats8gXiYaieZK9RTV",
  "key6": "9WF8NwrbGg24jLgSPQ2NvVsAZ8Y76nhVZXmjYpq8b5Ut46tiMLkUwKDqhN1sk2qq8kfrda8cDjNSNAYxJZpvpq6",
  "key7": "ecEAZ5y7dLFwQou4ck3iyiWqTTD5Cqn5NQCxMfrp6ADyatfUWJUb9gNBtwWpCnDMkinAYPErjLw8BaQRp2Jb3TV",
  "key8": "5HGFyrArg32Ctu25hYErBfcPRH3otbjUkEWdQi4jko5kmTHminJqKmzoQqtqhAQCXdtW2wTZ7wx19DoaK4tss4Bc",
  "key9": "4QaFK4gNBfp9Y47SqQnratHe6eCJ58CCkkMiaJ9sw5CyRvyUBN1ysyBX4th7epUATXPvHbqcas5GodfcBWast4Mn",
  "key10": "3HHhQe5FkifX5CyvkDBZFmfhSWHZApi41562CxnTQVWL6HMT2vSQQfEEKMtdMA6eGFvuFxqGEr5BPPjYJkKywCuq",
  "key11": "Cqa6XyCLP6LHR5A1S8KeYZXCqjm5pmzgFKgCtxJPooyhpxSxSdGmhVrNemsc7i6oySXWiX2GsGbowqTjsWEqxtb",
  "key12": "2cVvtuGkMA283BdegrGUMN48xV9yjoe5uKMMS7HLJRdH9GnyB9MGdjJcGTKS8aeCpfMa5MpEXCYULeSHbN33xsot",
  "key13": "2L8AGQFWXaNHoSyM3Q2rYYa1MgbXX54Z8sN5fqRR6rtMXDYtEmwpLqZd1JcP4pp85gmhXZSg6pyiKMZyyPLYmYLV",
  "key14": "5mkG3iCh6JdSTfwszpXaG84oxXWXSJqXZKxJLVYuE6bdNpcRZ1BqG6ezdBVFZiivhwzt2SKrDshu2NbLLaDQQVJV",
  "key15": "547PjWvzRveZBZfjzeYsMEnEPNPDFZHztM4TX8vvGNE1ARA1vBoZzgB2CyDMdDoxcmY2h4ANcJ5Lvub8kaSeV1Xu",
  "key16": "27rA42B8FocYc6zzhfEPFgrVhRhxRcS2i5Ccn9BBBUMauhtcqYEEVnEtuEL1xmqDxyx7KpL3T8xxvm33F9MQMHv6",
  "key17": "58GGKyoDkDMr9eNm2hrKKtUtdiwDe7Vd2YGyfPL6QdnfTH2P1Bf57NTygdM4NPhuSsdzZffF8MEa8mPZtk9rhtx8",
  "key18": "56WDV21HunDrT52SV6VW6WsTjVTropangRkZB93SMPbKFXL5M7uS67hamj592XQL6nqvpFF1a7zv7qB1Af32bBWX",
  "key19": "4ZrZkPLrLxfutsSjNX8hpXXi1pANeeCzi1zrGU8VVHTqzLHMor6Siva8n8QsiR6xMYox177hgWyhtu6boyR4gyaQ",
  "key20": "2geuj1YndJgxVMjch1CdfmkvZ98G9cdRmZhLUweUAyyeNgqV6XB6em8ogEbMdeKVEjwkMQFsxFU9c9Yk9MN6V3cU",
  "key21": "44yrcbGPPV4xWqRH3iCXSnQ4izvrRTnnXLKb6sxv2dtGTGQRgxi5qWKRMHY2VN8MqDBBrbuMieN1ecAhbeQNCnQA",
  "key22": "5YDVdVugc5CuPvBktLA9pKs9ftM728b2zPaw94pvMZYkW3XbPRdTdbXCP7FAvQ6VoawR59BKxfGWzfcZgAP1L3vt",
  "key23": "29zYXe7K4YTwvB9mmfDY8e2Wqc8L1BLjSsErwvKN2hgHcNmX1yJrZcutMa5Ygrtg9wqKRtazip3fPoaYuiBWcJCw",
  "key24": "3DebAC26bStWkUBCv87fxr9SKUauEbMmR2Ts3rCMoGkrt22YFX74BTFzpZwp4coCRFnBgJGvMfAhLm44HXQyVo6K",
  "key25": "FkgwHTpxsn9d4Fd9gG6D6zeNUuH2M6gSKNDfLgAwQbETiEDSSPDUPBQdjs2HvbipHtJNR37v9mEkAEiJYKYeJK6",
  "key26": "t6AQtaYhxjfGDNLaSggwuBjsZMEk9GARCQ8L8fAyVkwwe9Kt4vAdht3eAWceRNjJUg3SzAAPkknz1GURQpNYsc5",
  "key27": "EawbsYaKr8obfNVUadCinxaHrE6snLNU511qwTU4Ph1LFW8LrU2dkq6cjYGVM99NpVBe5djK8s2z1wSEkimwcZp",
  "key28": "4rEDeJ4emtaeR3NeEkNyNEPr5cNFtgzT6LkhpH3kiAFNgUgBDvK2pt8nCLEJoDtbzfHXh1vQJ1LNx5wMmm5DJrqu",
  "key29": "2Cs6gSQ3L2jfFcSzxvyNesHHwtzHGD4db7PMqi2rWzbakLBSW3j7TXhHpgS81SLs4NXZjvxMbK21u2CJu5xez8YA",
  "key30": "udaFdtQHqWCxXmpW8bRyrncS5NY5EU1XRYjw4amyTnHynVPH5prarZQHitgKXpHd9AuLmk8oZLZsekquQEpyczj",
  "key31": "5B3hV6WUrgD5S2yRWi4tBTomfBC6DzGv6VWXVCoPquXmjEDgCgSGfwn5Ccphu4rikKe9mPtd5p1PKzjxEMheHzsW"
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
