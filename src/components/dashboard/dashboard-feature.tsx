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
    "2JcmJogNv3Xupx5BK7ZdcfzaqGJA5myd4RhwrvqMcKN5atCvfCL6FBL6cEqA2ZuGwQwUiWCVdrkuress1Fe6YAqa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z89niyfEAZL4s9xYLnM8QAC2fYyDGtnDQMsGX2e47GT46CA9RcdnMgpU89uKZmAwutDFTeq3TL4TJuXttqom7po",
  "key1": "24DotFCcaLgHr7tG91tMbYUvqqnUmw4WQeCPMxQRuncceiHbR5kP9J4mn3311aXbiK9146DjL1dnTmKK9WELbTDY",
  "key2": "28vHusZtShyWKCTnKAgmtUQV2spttG7daVYEunmYuTEYyuacvYjtCtVDcorHZxTsWkMh7MpTUEqY2YseC9jj8Qzj",
  "key3": "5PFyuf2biUCKLVYsS3JMvmzjnYFavdNyP7m814LFGBWHmU89jHvyKwR6xBdUxsHU723hqeyGdvgkaHv87YFuPj17",
  "key4": "53auaEqeSKD9hToPCB1ebD1si29TpKn3dd3yQXTzAWBWPv5NpjbT8suFFvg1USPrK57a2KWEcZUokVwi8duCkqS9",
  "key5": "5iCgzooXPWgozCWK4FPeP9ik5L3dGrEVHCQU9r6z5Y6gHSaVKLYRi1FWdi3tQDge4PyzSkuWDvTbGfhgi6iPvEU2",
  "key6": "4ArWAzz1XCTh58ZMgff4G6jL8ggbvoeU1n7MC7E2pWMi9fsZFtvKPm4Ds2P66o3J82phcH23y72UkyKorCJfsZEb",
  "key7": "4YG3PkGsRN5J5JeVUDCTGbgc8DfChiVW4DYxk6jPAyzoE5xkYxnBztR51UZNongbQSRKbBJF2jhbF4EgPndFyTNR",
  "key8": "3WxxQmhY63gqUmraSCwt9qZCQUmZhiTLKCKVADSxmsPtTo2kFK4Acu4F7teVgfg2ce4PDXN2E1sY5bncK37HqdGW",
  "key9": "3ywvPSQQzxTdC5LySjDRiQKWKfixive7bd3wFnA3LMR8gXhgUpMiVGj8PW9o6b5VNRra4cPJAKuheSnfsBnPtw5E",
  "key10": "5JNKyhzVXGNSZK4tjCnvugtakr7bfjBPLRVhgft8TmqBrCoWaGWdev4VwXwveN2BWt57r4rRENc9WmKnC6eGnv7h",
  "key11": "57jCUieqcL1Sq1MFemLpumPMYzEavqTRe1P8wnYM8AMaaNXiLJy3BhP2PqLHTY1YcYgEfd2DgQRsXaXzxE5VABdD",
  "key12": "51onm8CER8xUBWAba4Wugb7nxVXK2JW6uhRa3MMFLQKovHEDpsDEyCj1WN6noNtka3j3H9sZJqq3YfxxzytDcXuR",
  "key13": "6UrsUZstqR88AxZRBWbUR28hrhfMAVaj88DEY8dmp7wQWzYZdYtenkNaJ95w5HFafH6ThmNhtMfXk4iVZrzehdi",
  "key14": "4kPYzBjoukY7to7pP8RDi8CH79ktqXn45FScc6wtjYCLPoqJaC9BCaVc1ycMTpqqcW2EQGdsukqDRPgn1UgNzNgd",
  "key15": "sBkUEB2hA5VkufTZL5UUYJconGQFyGPAB1RDt8a6VL5EZnZgBehSntdGcX2VvSaSnHVLn5Ai3DmTGZFV11F2aMX",
  "key16": "62ixxpm1gruHmYfcG693N6XaqceAMkBMLHqd7MFXKnJeTbgzJ9Z7f46xw4MmGgmEfNFLPvzEkdupdKNDxW8Dpq3C",
  "key17": "2HWqpRzGuvHCJZatw94X76QC26JFzGpBa59FKY7wQepg3wXd7j1ZznPGXoLJnF4Gp9AFCsXqnmfkpZguow5kMkvE",
  "key18": "5NRfnGqi71L9LFqodRAZJ9mN7NNFdJJB1cRoLahmiHRfQHCBP4Lf7FNgKyttZUbh7fNfXFejmymKGFjd3fUmDutQ",
  "key19": "5oZgKBS4Ruuo3XrG3Fq2e4jH9FKhj9d3Z72UcfaPCQN3eau5FR8HUn1YNVLgXZRmE9cpoNfas6gNz92kYwhoKpqs",
  "key20": "BJwac51LDJXG2EHfPJWdgYt5voC7ZMWKGmnBHfTQQ3mYzo145kKZmifrq5qWpu2H6reevUbqVugZi4V7o56qtdS",
  "key21": "2fAroLdbVk77Ab3ZDdmqSXBzijh6wJtJiBj7q6iocyCYbH3TN7mE9t11WTakGdeoc1AysRAG22sPyBYUsunrdZyL",
  "key22": "39XrUJpDu6coNh3z9qwYSiqwX3k9asc8GPU14q3LHxxta9vGREwhf95spGUPRMd8cBXKrCBw4gRwFb3hsiWZHtWg",
  "key23": "389sF5kRgiWunwYSw7YFTJpMSdBic4BWf8ymitxR6AW9t8EKgFnpRzSRrxxJi4gcTuudv4FiMc1nbzaPGvSAewNt",
  "key24": "8YDUse7UGgTnyKQ4RSUSrsw2aa9ypbfKuxhyvVZuVyPPoGWVwvGuVNmjXRyqAyrqHkMuGVfkRNDeh8qwZmCygsj",
  "key25": "2zyFYuPkEuyjyb8J2NmagFb4afogg3stgSk2AdcopbjhcfYE1AZNNt12gS4pJJZS6aCvqoszCwVmwUwjnB4YuTvi",
  "key26": "CfAyM7jEzgmuwvfnqvSeAnxTjeKWxketE4gka9hUY8v17cKqKuXVdDQDGFqLnwPGAzU2PH16Jbu778Wx91hD888",
  "key27": "3P5DJQDxTTD9i7Xk7esXnNTaaHBAdvimksr3K9YHN4T1Unszr9YAixK1PM75hMshiv6eGAesvmR2cZ5FSLrmxE3p",
  "key28": "3A3yEqqtxZF26MEwd2CvNw8bQYStEWQ4xXZ3VWzc978Xp1xJqupjfwAU9AK5q8X9KeDr44eTyzQ2vjcvFd82cmAb",
  "key29": "3CPNNJ9N8CbzcqjNGAyNXVXWowvEFFgxZmW3gqttZVMkFr8rc8cDCUz8MCQ4es1myMRaFcehYytf8xDzojSVv21L",
  "key30": "4Wv2nD87EnDvxECjpd8cZwmusazHGxQtYmCvb7np6jCqAAhfwHJgEB5HHwJu2bkLxxznAEpGGU28nndSC6pi3z3F",
  "key31": "eExELb6sCDPD444xVbPAzn9NFbB8SdrLysjcLhMLuot6adTrJU2fJMr6yGtUuPuGCFscCx61ZZR7xWTmNs39GPG",
  "key32": "3Tti19k9cd6h1qTECPpm5qYAm5GErWadJvzw1sMBUUcwqcSW57YJnajfBQkwFCMgJCkeMQb1wJ6ZdDfmvesqUYFq",
  "key33": "4V44JcF5p3K1qjbdjSKSBnYoZtMNRb4s3Y3LS6TkAJ5oXJWp8V7xowtQ7RUbwGNimAoTNjA3ZW9VZkXYJABwr7Wz",
  "key34": "4sVmyt4t4pWgwhCEHJLbx1CiSBbjJfFhkzgGPwoeRu7TXmqGfEtFPefyBFK6bcCu7w5QgFS7DaHAGVVDmscjvr6B"
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
