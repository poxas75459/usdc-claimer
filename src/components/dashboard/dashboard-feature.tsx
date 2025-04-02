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
    "2AkEXQ7XH2SgpLXoh6Q4pSgYMQzoFhiqghrvrvXKarRWZ5iirCA9QPzcSkYrVAP9eqgTTXR7mLqrfH7JLJPLhQGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25toExshxRjxJ2a3siETkQM3bgZ3mJ545eSvpe1Lp2p3Wes23S5FmsoMz6dDmfPE6dbHTVtyM7MBysC2Z1n4dA5G",
  "key1": "3oYo5ykUdwVKaz2A3xfu1baSKArn3GtjUCrdjcXLJ9ViGpLqkuipBb4uBAQu6PSUfEYfkT3zdG4GfLzbnPQdyTtD",
  "key2": "5kWyzxtTKj8emkmKeKwmLmszzwq8hJ8U69CLxMFiATNcfFPDTWH6cYXiwYk5Zain2QunZ11sieH6S4rthar3K64V",
  "key3": "24BTNDkbcewKukfHSpTkMn8Hs4bpLopeqPskNtymDekb8Luh7TYrwbJEEiv6HRo1JLtZhEuwdpdZiSWk2xK3G91A",
  "key4": "4ZehtMgqtaixAWMpHvdJ58dxFaDUn5BkeFQM7NhbLRAHVgxDY8bY3ZfzQZYyxSL9t78E3dq7yLDkVc39Qb1gaLpW",
  "key5": "qX5CuRUxK9ka4fWXM6ynQBGUDmP5KtDwoQkKZNDJjkVCKvnuNp7yxRNB614ZzSDcHzvxG4hhCK8aGVXHCrbBeXY",
  "key6": "2YuuYrksHYVmDJcaGthqoS37jyBrkioxHTHbpLthutzvFDZPrRtQzrwf4VDJTNPP4cez83mrZkZ8EBMcionKcxoE",
  "key7": "5EynMQaLXicgdysoGbUzU13jQ5dzAteZLCiNG2EbrdTZmi6u6Vgt8GsoKb8y7UNFLxNKiaoi6X3RWbXNoBwse28P",
  "key8": "2nbg175FrgVskhmzJwfG9tZBrHbfpwzxVfijiWUebQQjA4eGRKFSfvHR1nzRYjv1AJB9i3JsWu81YnzBTXqu3qXi",
  "key9": "5xgZXQsKfpzScPMLtAd2rQFiuY4b43A2bjaFHo47SN7J3idFa2VfPp21FHrg8jqEd1QjitCf2GkLPF6jdbLUQxmf",
  "key10": "NFDCJc1o3CPhHEAgsydtejsi4k7bFVN8J3FuBsZAVkL2s8NLvXQ8VNC8WstYRopQHkLhP3UtC9V1PppQ3mnUoK9",
  "key11": "4AH6GNLmt8JNoTpheKsbscor9MXPh8kAEv4rBMZhhsGpefR3xsSQHr33BvgiCbLNyGSgfLoKAvpxKbWeqEeP4L2U",
  "key12": "4icryjxPnQ8afAgSa3GgQiHpvzoP3Q9Pk43SRJu9kGmGxLRX4kwikRXpocLZUDFCRcSgAn6nvdCrzEyUDQiPumgU",
  "key13": "5a7ab8oK9QNWT7EQLGQMkb2hmo2BhSRj217uMvwzZEH6u7bBjErAQtYFwZU4M1SkiC6gx3sn23UvmDs7PeUmBcGL",
  "key14": "34U9igJGeeYgc2iz9TjknREhT9QQ2GSe1TWDTYV4tJi7C9dwGn5TfSsbE8FrfWoLQ2LFa2Qm9fpnMw5Ld7nkR19Y",
  "key15": "yj4gQMmiTfhBaZ8mVX5JirokxL7QTeFge5nE487tMQMJGG1jVYfZw358qvzdpJUpjfWhU5oRVXrhYDe5vfcAHCF",
  "key16": "4ozt1XqcJdyuZHiTTgY3uCHmiR16SztHQnwTjWBnCwksBtEE4oc9K4NmU2YJN35pjURzQzevGW2zVu6pvY9zTfYU",
  "key17": "4qp1zvK18WcdxSmeu5WBsGGPwebYRwgFCcLoK8JC3BETUFpEgBcqKegKZtxWba5ePReWvdD4ZEjdBdCfcUmGFsT8",
  "key18": "23nXuUh8tsHRiUC1B1iWbuhrgUE9rGnzWy6R9Qsoq4RztqqUBMPRrFbs24EGt39dCr9uv33A6txXWVVndkPM3wuw",
  "key19": "5HusPCfF7U5nWdMEUKk4RMDU4AnHyAkaN6p6zjUW2m4JBXyFcprbowXGVNUvwqTouoA24Ha8R8KXc471wDfVZuRz",
  "key20": "cTmK7ioSrMayLyYfc7fEYv7sQ97nm2piC2acFSbBHfR4b1VGgNL1Z1r4s1SwbzavcbsJKpQjfFXzYuKLA446Tsg",
  "key21": "2J21vKuzoR7eRDWtnMLHBSweZ9v9Qpr92Pfp3fK4Nm1xDc7UWSZJvxxd3VonRb2bCMyFmxthZErK2sCraPFCxKdD",
  "key22": "2xrp4EeJhvX3qJVYo8roMn87rgQd6HyqwzPTonWQMRPgCd9SfDzb68BArXZVkR48xZubUxMJmTX1ytLsRzqfo535",
  "key23": "rt9ALeFaaks1oJNqJYDCbJFVyErgMHDkYNYSVt5f6fnXwLhE8Yv9ktV1F3LBUYiPr8HL7E378jFCS7DrqTRZff9",
  "key24": "35zLLXaCFUhsk1kjqZC2QBwmbNE9nt4dnGpCYeYCQSzAhcWdzW42A5sMB7E1Lzve7YCpHNrYADsjQLYoRJ7nJoaH",
  "key25": "jqwqiPCPrTAEBrKyBU7iJabb45YsUgURY6nmZwHZbB3uz1mCE1rkL8jtBxDV9EYXaSrDJecBx2Ynq5U2E9Dwrf7",
  "key26": "5dznmgrQGVBfJojTEAtM2e4fqx7WexkXehZM1WZa6ZzNkm3pqLwMDw7rh61TMMNgoYZur66kdwhMfYbbJqJFj2wv",
  "key27": "2Xyxc6MavgAwbE2sJscPDmrxrGfma8CwsmkbfdqhnuvY4gdZvsZ6LiumUM2jb4iyhBajMcLb6HpdkJxP1MUgtMMh",
  "key28": "Uw7qW5NWXsEs1QYGQKMubyggq3BukY8reDP7vgpvE9C2mgZZGnJ5jxGc7nVzg38AkYtqHYMYCdmcpp8KZ4EjLqK"
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
