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
    "4tM8VJmWHiwwhUtt97WyXaqfW98hyaawZwLTK9TwiyrhUA62QTprWeHjKx6D2RJx3FCQ8VuVBZbWq8zodCtYx7jq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFVLhhSYoP1YhyLLGKEaBipb5zRSNS1dWYgS22ZE2Rxukr6PkTKRUW1P7F64Ry57Dr7QqzeznqyXtS8Y3HwfQqt",
  "key1": "e2Zkd2F4DMFLHdTMbGXFUzR8uz7r2iTguKUsoryMVjRLGfjR68us78YenjrepFCtq6BMd2Qo97HNBXAYFYhkFn6",
  "key2": "3gcqvwt8aY7iHMLGnCMFMj4pxGftm2esmfaF6asVb1FsWgb7NpuFh7ARu9tUk7gmM4oPEoZGCzC1dzuLotLPSnpt",
  "key3": "4bFTS5aTEfNArGbFCteb2xzkLoDcnTFWUSZBg3DGTo8GpSNXDejgDqnSj4PsGLtcNJNTwjcavMpPbf488F663wD8",
  "key4": "5GdKV3vfLneB5veSkpr4PSAWNDDxcxBk1W64BbfxTrnYJxuBpd2kvtHwsBDmcPXr5hoKrxcTWBPS3P8ctQDzyi4",
  "key5": "yxzqXMuTQjf4qU2XpxRnnLYD2gURpV2MttUYgb4KGNXsPE1VFwT5KmiyjgxTFx6iD3qnBGtoFCar9w9eYsZxShz",
  "key6": "E75ZY82xdLXN4Tbpx5Hk94FhtZ8kKT24wJKbD2bzGJoe4eDDmf7kYLhnbqE7uAzozGnToRvS6HhFohLYZwsoheZ",
  "key7": "64ZoV3N3U8qqJPZgy3HqM8kZiDHr4GoM1cQdxerGD5wRrqtdTKapX6APucF2GajWa2wehcr8PYCQ1zpsKTm24PHE",
  "key8": "3bcuxgNNM4SzikZ6z1nTHeEzVNzkDkdwhHkUXiVM1w57yc6eJcSXmQbiGojdoYSYkSf6cwnzuKnFh2wykstpnSeE",
  "key9": "5DwQkFEpyoQxSffzASbLwNdFRHdRUHcsaLJiGVhbGCxRRjCzbrr8C16PX5kWb22mXnsGKpxeoZn5qQ9TSfnSBWMo",
  "key10": "3Mv9yk7UMP6BxcgcxFpvAXKjoz3DJmanrdGJv7ESdVhiCqcS9qp8LgQx1abCDgtTQXHSGtvWE4naTZZ8MVM7DMLD",
  "key11": "2GitauV5j4BDfP2EBJPX87H2K3jr39vcTfGDHLSy4kVaA4maEmzSdfNRsTvSXARXwtW7ThcCKbh3YPKqfG9uqpPc",
  "key12": "4Buyscv9VDiLiKVx7EJGKcG4wx8LfAWuBAqK9gP6LecBYaPb7DeoQ5e1WB3Z4m5bYNDTRz3iQSoW7wNr51nShrNb",
  "key13": "Q4FHE7jpEzdbaPDhvotV2vkVPhX9dD9vdU3fy8THgBtdc7NPCBspF4jxMeBj185f2uAktzZKar7MdnA89CweZuc",
  "key14": "5WLmAYzyznemhNgrhFkeSGi13d26VVKmd2qm7L3Whj4oAV3s4y4rPuha1Ffrw7WbZykw3pvZ6kZfUfNSDuSv6mgk",
  "key15": "RR2nhhVdCpxs8npfVVtu2Y18oJ9GiVdZL4SDk3rYqYptDEYvjRg8BPTsQGoGGeDEeHdxuRi3tyBoWFzD9P4Z6F9",
  "key16": "4SiteG8KHwnpUZTipqUfAebpMguxaekVWdc3F3fntHQ5XphNuK7Chzh3JRKog7NP1bkpkzp7E2w4r1Xhepgs9q3p",
  "key17": "2qpBTUUiKRzq4E9MZbCUqGkMWfrpUS61HYFW4SmjUYhK2ZxsHaAgCPo2YrpawJW6WwRrv3fsGmL5aVLCH9RtvVFx",
  "key18": "2qWf3AWBKnokNWSWBxYq3kvhpG36pLFGuz6U1CUrMsDzr3JHQLHJ77NM3puEEQ4Bn7FUcm2XBz7Fr2ke1crYpHCx",
  "key19": "4jn8hDMVEYAq9YzL8q6d66skGnsMDp5kPNmnxFaedDh1RxEAHBFKdhyC1g7Auco73WyfMckU1JoZiHVKuPcULpCF",
  "key20": "VNfLiAmSP98vRksyB3szMWAisNz3C9pK8LufG3LBb5W6zZHUm42JqU3jHMwv2W85jYkCDpbxeD784L9yELch7vi",
  "key21": "vEdbxYbTRN6LbvG6SiWJHswNk45zRnrovCdLo1LXJ4neBNk5w9S3LJNu3W4M3E2JQUFiNufSqHSBH8rPW8eVS4M",
  "key22": "5FdVBoMdXKvk16Pq72M1zakJBUYA7ZfWrEKe9TBcFPqbLHEXqLJbiWBiia7pz9XzB8DYGfh2G3ZUG4AxFbXpkhri",
  "key23": "3KQoM7VJwqsghCJ5gaMdv5rmKqYKk498FKyrppYDB5FhCucvyWY8PmjfuanynR6qDFdtJFNpDz5WpuTByi8Eiu9s",
  "key24": "3kDwTMCchXSybGnArpWVqp9VTL9BgoYf5DQuHgHBk7HXL5kKsj9rqRQA2NzPmm8Lqmmf6EVRsxiyBm9jZGgSXUfm",
  "key25": "34Hk7KVmgGuaY8gy5B6kecoDKX8GWJrAXLc1FYyS9r5uGbgnwdMh2VahC4BAo8ZaX2UJdMTkvp4eFdmsdMhJzeGx",
  "key26": "5JTMmydbdF9GxBMuf6UiGCbw4tYzKMdTN8Y1vF3BV3izV3Cw5sMuih5PXKbrqcv4RJhUm5tjVijjiFP28t3PMVSq",
  "key27": "3gfLb7Y3L6oRQx1JfCp4uTjVB9bb1qqBSjkaCnqwfoPohMY4zDJfh9x1jnYrosCwDiJdPrjbrcALTYGeUnALoJpk",
  "key28": "t3Xx2kCWjm9XKX8ukr7z4uJdAyRdoa6EU9ewD8yXujK6NALjTScta2nrNU4ejRTPHVMYjKpkaPkMYvcLNgmfNgh",
  "key29": "4RYCWqUvyba8xTVXg1i4DAwQ8xdxrcDV4bmn7TxGa4ja9BTheom5bmqKMbeMeaR7RdZqrTCeyVkfxaqfeYQF6c97",
  "key30": "3e91AsLqyso9Q7wYHTC9pPS8eEbGTbfrj6XtpfEUoEd4XcUeciygWwXFFBf9yN2rwLiegXQ3ifkWUAfstUoVAdLQ",
  "key31": "61BKpLNjAcNZgACZqbi4gFTVT5dN1ceoo6djTQWL1GSWtGdNKF3NaVwgkS8pAbnN9HXe5vEoNybJHgrTM3umU5Yg",
  "key32": "1UG7t5VtL8obeBk96Rxdmgih6tzhHX3tAgcyb4VM1BKt1qpagUkdN7w14jXbF2X9XXxV5EiL13ADUMrDFH6iv1Q"
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
