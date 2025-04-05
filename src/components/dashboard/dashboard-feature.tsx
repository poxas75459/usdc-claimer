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
    "5szQP17oJgbHkTkiLyVar6KoSmTwBkBPdvkCushSwM4AENtvHU9PPznPZb4Gs2cauwEv3smgD3GPSg6Q5nhBzRtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rSgDE7nnbhBoYGsa8D4Udtfnnx57u9y54vH9ZDaVWwdMvRfW2YruzZ9c5xex18ER9kGByDE29SMEkHkCL29hn6n",
  "key1": "3Pqs453aC3jM2jdkey23ZTgDX1qCeR1dGC1wp3Wyg9cdrwHhQFLV7bPSffJ5pFSNy9UWANhbH1P5me4Pe77GhLj6",
  "key2": "5UMfJZsRreukjf26QvD1FtgzwYA5Y1hRwe7VSnvcbaceG7WyhBeBf2mbwgYx8xkMY4YpJTKRwjqAp2NfzpRWtHZX",
  "key3": "2eFmp9vE3atpXFrCiNys5u9ShNvgX92a4xu8G2cbA8ZCTLiF8hAJHZSk82UMdTvFBBRMSet4X97nZaW6hJLaAwV8",
  "key4": "5JKfvEpQ9sXp6zr9tFL1THrGMQXFgroFGSwDAGa4eta35xgikEMa2Evuo8ogy2Z19n59sWESWujTtT3ahuYsdDPm",
  "key5": "2GeXX8chwHD8zrCybu7uCEUSThq4yNTvmU5zxKnXNTkv4jTuyKvehzPaqRQxWdtxoyrfYJ9eH5g3QCUJ7SXdya5E",
  "key6": "56pBnRSgG8JWJjUaMZ5AENsWH6KXcHiGoBimNpC8w2dT6G7Bfy4kfdAVmZjfLcoFcoqqc9tsVaXdC5pfVekFMfWE",
  "key7": "2SQEf3gggKTukbAdzeFsFfCWZe6E8ichwwipi4VuMWfZTEPqQLAx4dQjrF1xc3kfjEpg8U9xgJ8TavtqcrRGt5Se",
  "key8": "3sXbocJGABpsRcRAR672CqUGiHXiQJKjG4RNUqB1yMZzAbsgQLYnmCkoS6uJH7RBTjENAjoQMqXzKJeHjJUVJFh1",
  "key9": "2Sj1ogMZZ3kd8A4KQar61yshMfmoVivoeoAXMoziHiDT25eoNmndSymGRPKFVhx5ZPRieL3SACU2dfBPKHd129mp",
  "key10": "4GvNoU5pYqLAccR2xYP8YnB6sx3EWAGCLkEkn3NZsyL1eMtqLEz3hQQosTti7b9msbDUNNGyggaPhEeDbYNqx1T6",
  "key11": "5bM4usyLRZQsZ1EmFYTtv2Xxmgo1Y6vVYeVagmo73XivjmHXem1J4NvmBPmUBDZVWyfJSnBWoHSqc9EWU2u4M564",
  "key12": "4iSDzLNWsEvSURMwYsKf7SfKxvssaaGY5NijenaxjXAaLDAqYQgz4zBHfM9tnufR2GiCRU6HT1KAZrpJfE5XH6Ay",
  "key13": "4pcX9ftLtALyFH8Mgdf4QHRcxg4SswUVwCdMkQm4pKi68mfLH1PM3xgkq4seJUgvHWuQYauLzuQpLUZaJjk3vb4W",
  "key14": "2miRt2nCdqmvopBzdGtZtootLyw9tAfHK3zBrFjLuariFxGYofe25jTkX96ucwaesKFj1GiyKMWSc7A4WTzN3vEr",
  "key15": "2vgHgvbwW3Z65nH3zz9MFaCJqtdGtynfnB81aoQkJxLqYqyfuLKiM2AkwmASX6E4y1ZeK8kBUWJRyMtBhCefXqAF",
  "key16": "2mfckdYHE6zUjBampPyNnhdATkocsqJsKexpVLRdpuyCPV5wbZz3GcQDS3e9HnJtBLGysw5T8rC3VYF5skfFhxW8",
  "key17": "5G5Pcv8MKKPd1SEtrejxiiRiHUn5hVKr9HRgBFZJHhwT3Ui957RwcTsxuQb6ahxcy85niCuk4PBEkSX3vGYfesre",
  "key18": "XWDa1o2mkWMzUJg2zVZYHFkjgTtoguSDQfUAkSKk7HsoTvAEzTA9Jway9Sv26PXc9cNWz8PBCorTq47eDUS5UZe",
  "key19": "5DDxwd4ms8mwRTrbLxhyz8VuQREBwm4JE8kUWsZuZwJkcqautfLFsAjkhWR2cEDPLLe4bDQb62tSvy6JGd9zcWcr",
  "key20": "Q7FDtrWLnUP4mjBycAEpHTqLNtdDaFoJEuv7PH9n6MZ2dFMwNgi1bV6SAwyMDk8dyMwAfKQBUCgbvvppzaZeKDz",
  "key21": "3RufKA3vJUP28hc3Xsqqtwciji8UFR6Es3vK9UcvCoBaHPG3HrsGsTEsHf8fNoai1nNPQCVD8Jj6tbUHDfMsPKh4",
  "key22": "4knJizVeyw3h5Mabpv3X6hCx1jxXyHQaJw8hkrSkX6CQ21Q3NyAmgUB9Ub5ffKBDePZQHBkXgmmZ1uAbhRFAhRRQ",
  "key23": "kvvMnwtXuq9sqYHA5U77GG7SCfu8pb1gMCpKtab2SsaAUDiNECBYiSZ9s5Ns4TWwfCLnwri6ZFqnZCwNXqLo3cU",
  "key24": "3pHiRjp7Foe4VqpdN7QSwaDer2nDXsU55ha6U58D1J83AHLF74ReJgNP7Np46U9h1gW9BuvJPpXKC4iWsXKVkB5",
  "key25": "3UVddvDHQ33UVmhBd9NgkfSCFJbt3aMvRH8yF2wrBWBFBMqe81pGQHsxf2CgJ7UDbfcAcHBJZBcjDx1GQqc3Ebjm",
  "key26": "Ni7j97VSJJdUKaLwoHNjNNEUQZtuxUuTh6YaspUQy7aMWXqNCmZ7aKS2VWnRpJssQGFUnGWsZx5X7HQeneYN5vi",
  "key27": "XNna4H47KQZ4euoNWaWDpDrMRSXDAE3YRjhqnAzdBh8FKydLVvR8kvdryxjzDnN61oYV64vMw1qLBcXd3eeFFa9",
  "key28": "2evYQcjeWrreodSNaDdziwupEZAfVq6r8FQWX8kqGut23Nrxp366V19LgVeGjNrPk5qqF32Z6A7audt55oXzjAL4",
  "key29": "4YZcX2ttvYoGHXR54XG5QXMsTZL67YyRkTYfk2VT6Wae52yLQ9LfjpLG88WN6keFz5z7Jw3tShas3FJE2PQYKs9a",
  "key30": "23FjLxrwW43VBsQfbbsNLYFBxQkVqUVvKzZx9LadgZYDN67vxWzxGazCwCqTGQmTSp6ZJxENGbu4XkNBcdqdNwWB",
  "key31": "2k8VPaKgj4ZkT6egz29TxRqViG1s51YmcUjQXZmw5Sh6Q6jH9uuabAKN6RaVv5PVYBH8o1vSYuyGCudNvQf5Sguj",
  "key32": "2NLPthK9sDS3VRtRozQgSeXVFk6Qj8RLjKZDt236XtSVzHFKeNXTQVZMAmytrb867xwWVctVFt1zBkfaYuoLB2rv"
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
