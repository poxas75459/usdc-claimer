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
    "42NTSg81gAj9qHToRnoAjhp29cqs2vf4RQ78yE7aKBLTuieQvcRLCw2gyy8iZtc1vXBXW5CXiCobYS3CTMJRWMFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGQt2S9RBMWNHwJLZ2vDzhoLPpehpSHho7YEAoYt3ZbGEsSH4p64H92v2bMxttg5tmKdVZFherbj4HrQLmn9BW9",
  "key1": "5f5NsraPTLMFSpKvkhcq1jYHYPb2PPw7YsuuFHhoL69c7ps6T7jnWjWDdhNT5APhcrPTDVCD7MeZoS6RHud2pEwx",
  "key2": "343QPw6aa43o3raMs6GZ4kaaV1Fk8uX4VSakgMxGeZcH4pGBcm6evYB3ZP7LtLJRM2dUT4hM3X7X74HU3QKdV7Ej",
  "key3": "VUgtqfT3QxUUGYxDJNnt54ssgrZTUaETZaYR9ec6ZtxxDRrP9a147vqnAsPra3yvNWj1F2J1WdfBWocoU31hnBc",
  "key4": "62sChExjxCcY6BbPckzfswqA1u6hqc8y2Hez1nWWvM1omNXcMqAd9XEwidfiKof5aZsYK3ZEs1qX7tf1gR7aWKfb",
  "key5": "5JPCaRhDDPbqMJEVqdTQDb2z2G5jn1S8j1s1Wuyy9Kd8B4gS2zb29FrKLHvjKNZqq1WbPfvXPkP1oYwyJSRkK2AG",
  "key6": "4Qx9c164xnSKdhQ8afE7JWSFSDx1J1D8PKPxiwFxLGBdHVHzbE9pxNykkarYc1oSjRtuqiDooeV5jou51GqX12Ec",
  "key7": "2Ha8Wu2fWBCAkBP4uyL9vL5oaZGmFiwY7B4AQzgjyj3G5BQAtLh5spmcLP3Lnp5AqJYAeydg6vGLLbsf46aGxizB",
  "key8": "5DJP5JXBXAFjP6GH2R129MJ5gC9nT2fSThcLe4RwKc1soPkZoWFBZHSYYBRYsxiMoRfXQA3VmJcCP4dePX34Grj5",
  "key9": "2V7hq2qABVKpCB2AyffPyzfYcN5CDhQ88ixRSyY7EndAWmPsrRNhGbgFiqU7EdMgZjT2AS1ES4igb1GwUra5zFqs",
  "key10": "4XSE19BgDEhL7EvUdyCPE9CV6KgwpUcFrc4RwmbmSYTnMDpubrXSBVazgAMrMM5b9hvYCTw2wwcWNpX8UruyU75T",
  "key11": "3ynN66gscdyAHLYNe3g6SpbHHDAzYe3NgjnqT1geYgRbExMaGMmMsmRCu2pyNDdRB287jPTriDebF4zKRe3HnrLJ",
  "key12": "3hZ8FxpZcJXvvpZQ5LJM7Vrw6QzCL22Ntxb2rexH6ZbqPvf7acR1s3yyW6HXJVztkwQpAKMJoQhvW6vk8pcodesF",
  "key13": "3kJZSWMX3RRVhsSrxwS2bLv1WAWBmvpX7BLLeWA7oH15DW5pXVEnBvQKyrquPYmKKa1A41gr8NLBjW9QKuJokfjz",
  "key14": "hUArhtjKmJKAEH7RHdmbMo4beQCE3cCHqVYMdu2o4SSUxdyvYyhTDK4HNRYc79pfQpu9gGqRPu2uts5QRE6L5eG",
  "key15": "3iWK6ghz3z4M64oqsKXseuhx4VptioZy5ECMer4MDsYXAnuN8ZQ2hwx4C18vMS7E7wbziobwJTpXBz973unbkKgS",
  "key16": "5VrZyTbGguXYztMmekxQawvayYz5uwxwbSYZQSbUfcMWvE63r3jfVbXsSWN9tKxqj2rihS5oxp4m5LrnBSjk58By",
  "key17": "3YiwH3n29brmdLZ3eSk8yJGFJCxsQAmVPa8p6jvyUyajzpm4Uh8qMrwgKwy6pXjNBEJT9NPJfmCS5rPPpsNKLR7Z",
  "key18": "4k8aFdJCNgpHhABkfK8jU7Ynp4Zuan1PbWhbF12XFUfkNxQGXRUxncVmkTeH42RKqu3a8S8U68KcBcswEn2Zfecz",
  "key19": "2Z9Vrxg1mPDCXQqrUR9PZizjwwsdZz23WaKXnhTeTqn7NofsAYuh39oNzrYAnX3PyfJpoeG8QrQrLZ1y9vrmCGTX",
  "key20": "3y7umugCJNUHSLbrDdVW78NKkmB5MbijkmnHTB5rKDbwVVYgG7KDnriQEaRDYvZ469ZHnyNaWqpcu1x42w4uBmW",
  "key21": "YADPCYAKR26ssLTCmHiXceihUAFed3H596EfCUt13iNn652UxPrf4WKpai8B5JDJzw8Vh7i8eyEgU9gKe9Fpceh",
  "key22": "m78uGnAadXoVn7nuhGUDo8bMJfQZD7XCJNwvVAAnSUbUB49UX8LA15LsCTPgbjBBzHwzSL29xbEQCDwns5erw98",
  "key23": "5hWFRdSLoYtge1hzhosHZJcCF8CzZByECretMibuwivGpDWYfYpXGjXbhkDB7EtgQEgTHjX2XxihT1NHhaE63P2T",
  "key24": "4pUPNQsJ7yFFKtzPVVKZrLqgUGhTiPwqqnmNkgXK2v8zPypzhQ47LWb62VXgNM9FLG1soRPG4a98ZBwK6hHjLPxq",
  "key25": "661jN99KcyAt6Mj2Wz8Cj4MQrDp5CL97j5cZbtgUSWaLFeaA6WsW4EauXbJE8Kkc5LZwKpN1rAWxB4NWj5hH2t3s",
  "key26": "43JtMJfgFtjnxkozpZcjsEVfZ77FV8dK7JDcTrPR9NtNVRwFcACk11dfa12La7KSTUW4NLXSWB4BYcXSS67GarLy",
  "key27": "2PLX6N7s75bUNADYgisekUKp1Y7PqYdtLcj1sg5n5C2uSLWZpsJvMyJrCwPQgSURnFKP9jFhtNR87RfTh9qDBBSz",
  "key28": "2xzrLStKSUqPmxhffMSgm17yqKRx6BvJJCwmjtmzCnAdd8c6o5QBhHrxegTdfxm6EKYEiZcxZNQMm24HjHcCEr5Z",
  "key29": "cg8fwsJyv6KCHbBNzxH7DexnefeTdExfD3WXaZwsirgXfSc72BNBmkLc9fjKwa9Fu6eR7Tdzm7ZErMhED4ZKRb8",
  "key30": "KGTJfCRVVTWYbyBeThRLcYidCcz5rzi3hcZzw2T2fgJq7pArrs7DopqLpVfaPwyU5oi4koY5XTpBa5gzUQ21nHH",
  "key31": "kbx2RVrDbpmovtMbz1FdbB6bR3KxPKhEdcdxgB41TyYBNEb7oJ4DZcwVuz7cstyvUmnXdzG1dhdUB28z1hHAoqg",
  "key32": "dnGRKwnxANGMvEruttrGu2qotqJSnseuiS2NFGKtMBnLBHQfgdEjY386hzP9eUEJpMU78Utrh2pFg7AA565nNHC",
  "key33": "2oUxETNvqVByrCEDWV9GHsHfByb92fmEx1jENarpJ58HsPvwSTKeZsB9dqJNQYvd8MEiRvxZxuFQesHwp6WCvBNw",
  "key34": "2QfMeYfkz2ExsY81YbFAmKAMd9sYywbKXidpFB1ZnojWNHJYVfuU5ne92rpRwBk753Nq8prBFupbNwijxbkTPrn3",
  "key35": "5YpHpE4gn7UMis6j7RGMqpLc4DZyRJrrt8bEHTavBFwuqa1CZ4SVpiaDo5vfMkadFHPTKpohW4uoNXXwcc38P6XV",
  "key36": "2oKj8fUC6SHakJVJBMz9gJ9Wjd6BxnZGkH7Q4zgqkvXF3mgW377H45Lsp8YzuVBvVN2gGCPm2dqwSU3tXmFWDM31",
  "key37": "34LvgF8VGqtEN9cueBNck2p1YaZNxFPcG2ev1brAE7rHGH9KQJeG659xwvKvpBbecgHq4WHUbsuSrasrFJMFJPDv",
  "key38": "2TayeSMSRWDgeJXy7GM26trRtxRF1cdk3ftPdGGhB8TCXbSTwCDAJHwqwcGCeeLqYHoCynNWs1wKHxWj9vcXobyW"
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
