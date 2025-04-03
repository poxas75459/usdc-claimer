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
    "636mr44gFwkoKsjLeG2N5XjMx9H4iBESySP8kUzDyCJ496f8mVuQDdUd9Aay9uYoSut5Zt2n5w1x1CAPk65me8WL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56aX3g7DBW3Aij4pqgZyYqFH7PN1oszHSkTR3BiSPLZQa3ess8VccuevW5FYUm4JUJXFkUtnHSUgoBhC3oqw5tUG",
  "key1": "4aPVU5oDsYN8nvwXdRingqvZpek3a74frArRJD3eDu62L2cQM8FpTzohZ8vtECQHp7GM5QyoqxgsLQ6Ft3GpeXCe",
  "key2": "hbWGKE94UfjUZdHh5AtkwwXLh8E8WnHrNkZ7aKnLCoptmEtewrhTsjQcN1ydbJGsSfwGowkGp7E7qB6oMMUmXr5",
  "key3": "4HA1VxcT3WomcTGBtULYvy4k5x5Hgxcui4CRcLFrsUcHy6nkbxxyvG5Rv2QQJ3QdBqZe3garqME3rpsEKuPLCZyr",
  "key4": "2zK7S3FRCrkVcGz81TCKtiMjHQhqASwfkJ3rqqmYVeanuyWe89W7CyPasYbDiCdME7HtiTNBdWa9cUu6XjzD1B57",
  "key5": "3JpZVk4UkCPiMpFqgKKVhncoq3R9jg1z9DUcNfVZxwnHzzfaud5hecvviXTQq6k2GYRK7ANbJPhBHwNm8qoRTS36",
  "key6": "n61qAFo4wUrCDbgsLJbqJHJrrdQFVR6r73bf7Dp7XNMZ7PAxsMZHKiFCTRpnHoUVT1FHSp6LcQ8Wo2VBPEEtUqi",
  "key7": "2obscaBBXfJcxfc5eRtHT8c3mwVuQaqggzF9Rkk3DYUzA1y78kakgTGJYtWSmfMfwmGoWpoRJzjafWTj4wcaXGvc",
  "key8": "zpaCFxZ62AbS5SoJyqapCkQJ4EUD7H42NoXnNjsbU848tY3Ys2rZhwNW5fTbTQSf1Kb56sctyitw5wssnZ86R2j",
  "key9": "7gcQ6wesQvSjynPTgw3yiMJq788o5hfrdapWKYe5fp3jbhxo85d6aNUVT3DznKhfBquaHdPj82AoGe5c76FnhgR",
  "key10": "2DKfXKU4yTyNMjLhYtRVgp3rMzVx8gj5fcQBtBzuvNMZmxAauy58MXUH1Rbquj2k8UWUu9bhFnhPz6gWJqAH43C5",
  "key11": "4iNefo9rP6nnWW813m2NTp7PZW49hiqNcPhDDpqphfczWmrMi3DfLBLYs5rDFNZKpbKeC4T1Tmn9fu82KY74G52v",
  "key12": "4khruu253sKjhmqUWBgNuGygfB4Gi2SKtEzMi2cDa2XueXoNW9bumCkbG7YZ2mVspr2JdgdpVhA4tpV2NFaEcJEU",
  "key13": "4ZDAHJv7vdvy5kE3iqe4wnf1wE24jjJvcWdfftSAxUHVvJPVw3T3QsSwdjWUMs8osiVPD3vQX57sDDxLAXnsm3yN",
  "key14": "YM9YRrDk8QqEtwvVqYL4f16o3H5A3hUNXJSwuFPv3htaQ52ovKUBiwUF9HJmRBFZQG3fzb3WVScWbfPWPjU5s9M",
  "key15": "3bqnhJftkDT59vNZ9YcqSWV5FrRPpgY3fpXNWYCxeRN4rUpdx9kSB6ZqLFiqPC15XmN5gJRUAQW8MxhY7rVX7Coq",
  "key16": "48ZebkreXDNMFSHpnsEiZTLivWNWs6vemZYLFpQ14zmkrP2hKQDfLSLhtfQULgvGVrWQ3CnMyCEjKg7JPuC7wn7z",
  "key17": "3EUzM1pndSRPgv58VPypgwE9qjhS63V9YwBkEdhxs1cKoJHg3m64rbxiPy96fufUBM2DFhpKmNgfZEXGyspuVvTL",
  "key18": "kf3iXbf1c4Q9D6XwZB6RLURjCUEyKMABDCkhdS27Gs6rzreAeojmwbgozci6DcS4s2UznrxaU5cApsyPfVc33pc",
  "key19": "2N5TTEY1z1wrHtqhg2SA3anuey7qn5t8LQWwx5nvnZrAZN9gUNp2teW8sdqcz3aqHycaD7nLRDQDxqxfjTbWGadD",
  "key20": "5wWeEWmj7vQaxXP6oVgw8u4MkkZGF1xt3Qh9LTNF3r4S2GiCeu26ZzyjkrK13LXbLaKEQuGnMEfT1Q8cjGTTavEJ",
  "key21": "2mQYsPFm128cyT9oGgCiaQ5R8mvnWQHLEDN2r1JcCEGN6mANVYhjfTS11qGn49CeQDPRvpkQGDf7E8Xq5P9Bsb3",
  "key22": "57V9AprbFJ9EoR2qJ3NXaAe1NFuXgDddH6cB3vySVTR4nHAV1CEiEKiTb2GtrxdLJiP2xgMrHZQSb9F25oyp2dVE",
  "key23": "eojRcAAtcBfLWzZiLmfYiZ1LFe3EZwTd7z9MhPRGtmWbkCA7RSFUuWsPD3e4tgaTo3GYUaN56fvc8RjrUNG1vvw",
  "key24": "LdYRxwv8ESHc6ZadfGbGDiqoR3MQKsmcz3FPAKqGhkbGg3E9NpNqWQCRbJ6DboES6aBv3E1mSTF44DNJTSiReqh",
  "key25": "63sjV5dmPs7ujEsyRJY4dPqn2rdvuSvgwEACEj8EdDfDDgearQgtuSUezQADnpc9LJa4aEfMXgiW3pVFJopqduLL",
  "key26": "599UQ1kSE3JvC6rePGqWegoMQYxd9jZfNYFujsZ7mhKNcuG4ditF83rwZPnEPNcGJSMqJCy78MNStJSMbWia3rHt",
  "key27": "2gTodr3MidzAaMqzcb5785tisjLVDkiWk3nxJKVsM1SypbaJsJEZN6EySm3gpEGSEbgtvJpMsd6wUKSCdZ5bnyeL",
  "key28": "2qjTD8BJSMhKA4oUmanfm413649uqcTsznR3omJvpQUnzYWrckUfqY38cKS3jmThRxe46BhCVWwABHxFsENpc2mB",
  "key29": "RFpu7yv9PnKNPRLtGFQbLyJx6xC8sLptvo8YPgum1tzTxT1KZbx2NhdY1vv5pM4EFyBp381PB7fRgfk558mvCJV",
  "key30": "2sTMb3jUc5GTP8xX6Si8pYdBDhGqNCkVkAAuiwVBNMbCP1UkpYUHKmGNMH7PDax51Z7b3jN2DSGG7vhFWEto1w1w",
  "key31": "2KoEWBHsX65nscdzhpnCWZhBf8u2CS4vKfzXrrQRMnyuBJhqdM2QMNFxr6FXUgRPThXb53wzdoT3q3HgAP8goiJ8",
  "key32": "5qcZAiVERgMMbGZb9GyAT1Q2pnCwDsYxrpMV3bFKSZu4ZzDp8Rw7MQkwMgwB8bJoCWVyV393wqWoiJuiW9sA6aD4",
  "key33": "5rFx6GQ8zahgtKoGfcvSFkjueUpcrDEMiH5EHsJ35U3HnsLCNyoyj5vDHremUgNfEuxngw3Eerstje89D41zZD3D"
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
