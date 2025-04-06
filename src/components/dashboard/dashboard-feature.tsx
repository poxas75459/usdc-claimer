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
    "5Y28yqYheoFzB2FwQY17SB5MaVQkJhPnSEqqyCWFYZqmFHd3PY4Ys5WZRBvcT6K79of4W1njbBVLfPxhjs3hh6C7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GHGKQgdEVmUyzB6yY6V4FHRv4mfzCPL9nRV9atkDBMux3yzUrsV8iDc8KQFUcaCeZz9kVtAP9L717KfqmVmxdss",
  "key1": "4pa667WRZD6hDB4cGEKibnibAc9yxCygboD5fRkgQMZRDgpegnWYSXTkWfoUwzuVsoxZ9xgDzrjdMyFvc66Utkvp",
  "key2": "5eKdWJGnVs5DC3BVkTiJg8KSkb9hAAMUXXydM8bu2PfgNUo8ouoK3FioBAuaDxbYi1CJ2qEvrHnREUmy9mMzmxQT",
  "key3": "23HNMAL2U8Q4r82TUut57SMpkLdZ6nsM74vVLSc5sdxr1kLxrjh6a4bz5LHsg6Csi8WwZdy4KZmL3PRiaXvy3FYo",
  "key4": "5rnJ1MQcJCdBBogWEvp8S7Q4kfBT9px9RqGoB1T86CJGMCuVwJDQRhPgvZ7pFevVqrF7JE9Uw4S5QUjuYqVQQCby",
  "key5": "4uiXh8Ptc8dPin2jkmSfhuzczcqF1887togMb8D2gBifuie9LWxtLGsJCgw6PZUudsKCGMCnDdNfarMa1HdzfNw1",
  "key6": "4X9EcvnNUG3D6f9ZfCrRgrM1Ly3SywfLnakTPX84KhZSSUJ5ogWa4CU3fGGjQpGTdqkVAN74NneDWPeKBqkHJYBk",
  "key7": "hjQZEz2yGeda7jq2L38eLXVA7XxXZqWjoCwKgfmRYLP5hH9Ek8aZzFtZjHadrpcHotF2Wp29vddMvfU4a3iQsiC",
  "key8": "3vxNRDChhJgeAP4rXVvDySYkJEj6tfE2hbsePe8UT11KnrZTSYT7c4tdhpDEmBNVXEP8u2AmgVU7SBRx3KP8dNSp",
  "key9": "3Ajtgbfwki3qxKEtUkULCj2oX7VNa4zfTr8MM1uiaGgiD5VYMXiLvRihAXywY5tYse2UDTidaRZFK42oXp5RZ36G",
  "key10": "66UhRbe7DW2ZBs9pavWWwMmLtVTQgbYRqn1i87nt2UwxYyPDTtNAM1Yh6BAR8FT6oi3nB784KCA7XmFGMHYiZBGM",
  "key11": "4QBUEchzsMuCuB5uBrxWw48wxLfG4xc1NTrtrLZypA7tZ2j4ig4jcsmRo5beBwPqo45ckzyLmP9KfpqzmXMLxz7r",
  "key12": "2oNUDkfnw2y2VV3YK5qR5ZVNXVECE7kYQe3siguQ9T1eSfrRiLwiiu32fJvFrqw9htbKd697BVfbYBxuXq6tjfRi",
  "key13": "3nAc2iqkweAHzqJ1KWugrfDHkr4YYDvqZWi5MLE1UKsiyTVSBwMDCGMwX3exnZFBc8Gssc2x7V74EYVbmTJefnVo",
  "key14": "2W3NiW5VCzWR56YfSCR2cjgx29KmHp6v21hvrdu7gWKEq7WbNmBWJRxgwrpAueLF5YT3tJGBYhLxnt9wSgpksyGq",
  "key15": "nzbT4hk1QM9rLxnHJp6daf76zrBU4dCTAr8q2kT2sBjhmB2KojEvTgEYukdsSH1xLaCG8gKhuy3QSpqe4QPquuX",
  "key16": "3zky5q4xrFnWYcFBrpEtg4FaJBcZDT7NYEh2t2qnMMrhEaLhMQSqT6L2eid4NkPfsBxCJJ3Kngoaj4CAfjnn5Dnf",
  "key17": "5NR2RmUMPaiRRDUYykmofvR13HojX9F4Mhg4quGucdg51M568Ztx5HAwBNmB9UiyKN8gH3evB9Wym7pDix37hHg6",
  "key18": "2ypzdUBrLVLDgiME8XnWVqvwZ5Zb9egmyxkpTVQZsVnN1WqNCMNJocDn8w1wZqaL6FTX6bEkfeWouLgponJDkFKr",
  "key19": "5R3NiGbZaLvpyCqK67ye9UcytAMdhkzrt6vHRxrXFQ7TqpSmMkUm5TwKNYcyZEQuxFuHmSy7nPL5jFHgwLZcNZYZ",
  "key20": "32gc56vhnSgajyPoycSUxduK6hzsMPpsazzAyCRcDwxCgCeEePw12RrBLFLMc7QpYJAmhN2un9wuRZeshXnWcLsM",
  "key21": "2Cv2nAjXcpVaYWJR6MCYsNy91aNESe38wijEdzDvP4sizHVGPYfuyqqgg8SkqsvYp1wi8ohaqpN9dF2GhRDvqunz",
  "key22": "YZPsFXEwP7eQorjaGgXzsfHpNkzdEjVXDbjxSF1xACRWc7YGqEXRkLCs473iy1ReebSB5bfEQAas2wH34yLfWS1",
  "key23": "z5xB5MdH5hLSMB7FcPdQSoEGZ3eDhhwyitvAg4E9XVBHheJsrxg9g3Vydkf2cbDhKfcbEmrnm1fqmbTqJ7G5qyK",
  "key24": "3zPJfK7S78x8J8AcLLG62e1c9KA3nhhRTkMi66QhNmAqVZYgLUz8Lm2DrV2nvq8xpZ2upEyrhRWwA5Br5JyqKUan",
  "key25": "4dKsMxRajPJdkqm5Fk97DsgvoNQWjDsiwyrPZ4c2vmVGfTSSzHZZ9SQo2m3SMh6WMgz6ubKJU428Wwr8Nm6nMcrk",
  "key26": "2ku7aTDVg2LWSJMNSK2ZCsW221haTPzXSc5j8kwUP8TBLKyPX765Pt8Tt8An3LBHKDiyHrqbM74JZXDDzqJHN8kc",
  "key27": "2RNAUSQrRp9gRU45damfgpiBricYRG3MyQtrXF337bhRZ1G1YymiZdQYrn1YPhQ6CaQGW7Yg5GSxnkY2nojcyQS1",
  "key28": "58UFDYwoeGwdQCvYsPut6QpT2nY6G2sz7QM8KX12FpdVYbEv4mFKCEqevchmn5ASYTxgnxWPY9jzSHHT6RPhfSwT",
  "key29": "wx13RZHjnEtNR9mAt2xWP4VoydSn4StS9wx6UeXAwbkUGsLTiroLPqVPGJyGGhsYwcEjHH2iecBkeY3diG5s9JK",
  "key30": "4GXU2D3ytoBYutbW2wMxBhNX3hdvjUokA6SADQVN9od6vxvVkVrtKg6P31X4tWfmJ6dM1RJZtYTXUJUkspFrm7Lp",
  "key31": "5ec9c38cqQg6XqRFkSZeAHV2vYqk6BJUarUPTqve1bn9T2nukM83Bmt8i2HQ9F5vH7QBbSnLBGaac3X2bcF5Tmuy"
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
