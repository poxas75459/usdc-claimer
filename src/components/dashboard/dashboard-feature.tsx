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
    "5GaBGW3xeXscCFWCNWXEheTwFD1kzjqecjwHWUjcmJehC83Pqhoiv1vqKiN6P33BGNWuQHFSKjzQvkibn1fZVKX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "369oFbGk9MrUEgsipCyKE6eEWh9PJfGVtSyDueK8ASRmMzjyKf5K9nqvoFKfF3RjmwRbhpFC57Usu8Q6UFJAXQVs",
  "key1": "5z8T1Txsoc9b3o7YCD4wbAEUsB7wUyZZaoMWDt5F8ttHmHa5tLUYCVAV91n3TicLmsLKyfgcnvbk7Q28MJVAfC4d",
  "key2": "5w4hJJpDJTSn3fZcfJDkN4E3EuKtAxzj61Q5bFdyoeeus2J8qesKmEVSyZajyvfZyJTy1m9ZuF2TDXQCAn96zC3D",
  "key3": "4TvQVkorXFZ4tGLFTnZxJxddqY7XhtNFJp1qkpqybgFfr2SWjWwnqPEDBEmuk6jYxyCTNK53UTxe1hS8KremAi1R",
  "key4": "3K9T9RnpnTgpirmyS3LYuwFu1E31gUtTMmRYU8LKHVdBRUXWxu3arsugV45ZoTDfqF6ia5NAQCsjJGwBzkjfSCo3",
  "key5": "gdskKqwwSxdYujt6qRWjhPQmbiBrEPEZRhFiMJ5iytmoKum3aUkZ3dFhTGFCUA4ZgArQotajdHxqmd8x86ywa1n",
  "key6": "66ecBbGqSnseM88en1w61WL6YHHmUVbacvUFtpAgkswZL12jTDoc6hGqXpvSiTVaxgRo2Uey9d6UnrRqcUA62jzF",
  "key7": "3CD5UGQ7FyZVjA9daD5v21pLeBMMGdiRAdXwDZyZiY95bvzFs7eV4KnmUrr9pciZ5jaDzQjLPsqhjrAA9ittfFLN",
  "key8": "4hjGqf6cG6kTKhVnhDXopogpxfR4ndAdTUjR9Cmf8X8vjhhGDrkUiUiAZ55F57aMita8nCpJnLPsUiG1HuESGpoR",
  "key9": "5kDj4YGiLRXmNg8pXhQhDiEt7pWsB6vM8LieTzqtX7PsP2eXjoZV8Gw38CburModbZwubAvUkyBqRWz8a5nqjNT2",
  "key10": "26QcZD74Td7M9QhBzR9hNJSSodPUeZmcWbUPGzZCpx775eb2pX1Npb6RLzAJBQStgzW85mJ94YPQKY23KQ5a1tsE",
  "key11": "LEiBNkwYH5afFjk84rWXB5L5Cr93cV4vyvHLyRY21bojTmr5e6m5SpLfFEyHEpQ6WEwUcM1mKtUuKvxhTRRqhZp",
  "key12": "5LVt535zXL2ynQd7tEp8j9vJ6eR6ePRoSGJ3JBqusU4urWshKk5TCbNgEBHe4Kt13zfPsMkdaqBsRPETKfFMwae",
  "key13": "2unQCdWxMNC8ZqnaKtSNTcg8miduswruibW2rrMuzsguGKZwdtT7cfwmReojug84tfL7bqjy6DYWjSxU5EG57njA",
  "key14": "2bGhUvs4nb6nyUMpLGoALrKM27iv4PUNkkYzyxg9s2n99DDQd5dp98a6M7DiZsd32rDXGwiQUyk6fBfJ75buVP5m",
  "key15": "4X1W7kYUZo4hxTy2gyEXT9tEXGmBX5oaEBAATMndwr3P8Fy4b6bi6joACZi2Uvv7sULzbLdp7HJSHWJkvWv1ChXm",
  "key16": "4phabPUyT6n2dXZw9s8wQFo9EaCdcP7W1WkrwBPXJpizSEdZxi6sqotG66Kt6BoN7UjdvjTdtrJGocfy2xmYwwQh",
  "key17": "61YkDmGKebxerT3rmgCmMhYT1ZdKE962ZvnyVNStDHckrxeFcHbniExE9JFLJd5EHVwdhycT2unhHjNaVKD7PnUk",
  "key18": "5bN7HnNaVMA42G7oazJBFDA1WS3buQ4C7jJsEx5dZF4cSPwJZW2CfTxKNA8HgBuGLy1wgxCnAXEFdaeJrBP3vKBr",
  "key19": "2oh6P52ahBE54FKKmGo1N8Uj26KKPuv1qxfrp4QAYkeMFmBRsP5GTLE3SVMLvGPeZjUX1kPnNi5yCDBRxJ8cMqkY",
  "key20": "4inGoxoLdxmTYZFTF2dt8bNpNAEyFX1s5eKmz4gqeZLstAczSBSbef1GdQq3VYB19NxR579A7mSMAEbJ6B4Zkp1B",
  "key21": "3DcoKxgge1nPqkqSYX3LKzuoB4qzSxNNFVJ35YU8pkX4SqaFh95nBvWDD7kJvMFV29KPQUMEk4ZYGzrAyVZZFZjP",
  "key22": "4Ytern1FWx2nksrnaiCL85EjobJCqExNph5WxjuDGFHExjKcZMWLLtoDLqCg9q3hKaFAopGuvnQ6Wwh7ScacKNAH",
  "key23": "534PTZLWHYZpw8PnX3iVFcafUKcJ1C8b3QG6e9nK4pTJHEFYE7Kfmwe8MVHpTrJaGR1iJRsyRnq38PJy5EXHSEDM",
  "key24": "2s3uZ6A2viZ3jqVJQFQumbvLdzsxMDp3gkJwRBmLkvj141VzBTgiJYZ12s15aCnwzaQ8Scsrfjg3Ky17FtABX5rA",
  "key25": "4ZJ6RhYu2WMSeKkoYY35QoHmXrvBNie2ATXcMnFx36bE9AT4FddMj9zS8umJfnfMojiiJs3TmpqHzb6yhhMWhLAK",
  "key26": "2jqkDGZ8ZzEoTwkZEqqwv9UT1eYVLgMPRC6nLq7c7dQcQJx6BrZiQApYXp3NifP29btRVbeG6yMnd8KUL8LhoQvV",
  "key27": "6roshbK2GvmpLfaeavXVXH51mDSLAPPw5hLerp7PKnJ3Swyc1V5p6jd5vnUvm3eAoTiVKX5DC4gRj8T6MCE3zFW",
  "key28": "3uJjGxoa7mDU4hcUdDteHkb1p5Gf8XThah6entyBhVChzmkgx8ZAbbcF9caRQF3Xh5sdtgks6SUR6yUQeGXJFMP8",
  "key29": "4bdHee7yDhVvkRdYiMiAcbpbmMX9KvnzxQi29Nv64v3gdByCrMBQqSMwDybwFCZ3VRozB1nuXAUMrF7EFiLZB71h",
  "key30": "5DbXgcDDANyt4mqrPkGrJZTLxm2qLTuLbC3c9WbTNUmbxDGCyuvgCPCf7Kaq6CHKqF4eMqvT4GH5DjiLoyVdTASw",
  "key31": "HmTgGWfvkUXCEBjJrKWm31UKTFk7ZXDYJZ6YUf9Ax15fX4DX4yL5z2SLbYPnY57cqEMdV5ak6t1rXSHtxKdFjHH",
  "key32": "5jxeZym2WNQUUd85BaWcsTBWq7WG5St17n1oSFZXdqBmWkpz74aUPtN4GrHGQmfZ4PMcToD5juXj1jigqaAYYRPU",
  "key33": "XAxyefxetD9ejdTWbKpQM6gZUsbav6nGZMWHqcumz8fCQYkJ4SAjex6ZYyoKQFGKXpdXDehtJmvFPH7nsL9JbRt",
  "key34": "3ZYwyeNwZrmPonN6Ft3fZ4wpmoAqaYEHvCnFyJmjoWmxqAYHeHhqocCKSA3dY39exG6Vzk7Tp139cZpvp7NUUo4",
  "key35": "5HF2NJEwNg7qx4AHAtxgxjrt4swkn6YgP6gZ3uMXx8fPtMNwQvC2zsrx42V6ehEXzyWHKG4Rcm7c6nnqpENaR3V2",
  "key36": "pALxGCEepWH86gyM9WyShP3qJ7CJVw4tk8SyqBtNiTAGBygfqwvfxBpS2a4SrQcXjcxefA7u4cV5tKFzvu5pH82",
  "key37": "UjyyTG7faZe1LNdaQgi4cnFUatxeEp9E9c4893tacgULdxUn2VvKWni8u6tKiSciQKyJzaTUENrTVzK23curjm4",
  "key38": "3aZ56T2WJx5UhMUNuZs44MLpTNADtf3DVWuHmkguUqvE1TnXhoRBKBZqAZxMmhtZdkpB6WcQqxuYxqZXQ3Udny5P",
  "key39": "3ejaAYuvUyZACzPxSFKd2atCQqFaanv3UUPLqgiP2kL1ca9xQMrzvDRqJ4Qi6kKnKqgtn4VMVo33a19ax989X4vJ",
  "key40": "5pN4nfBKhYQYHm7vXfYPavqht7wn6z9Zr4SbdtMccvfvGdTzS4PBUFswxytaMWic22vRs8ZR6zRRYSvBPiCD5VB",
  "key41": "5eDjUDy8zV1PVzp5paRpZqpiomLkQZNHfP3hY7LXU3S12zxxQb29MRyE5nKPoBJLeuKz8oyxrFwLyz9GYM9gDwxX",
  "key42": "56Qcz8xGGkRAXfSKkZ4GtSDN9GBRGQbJeeU3A2XKe39SowRph56ULWksV439y3PKCKuVesre9Prg1PVTKMvbJYDB",
  "key43": "3nwARtoyakHSf5a2txBKvQpCpe4cMAfH9YonPwwYPgBhtzHJE1ucZe1von8zJfPJzasnDir4JJYbnEjnqqRbduci"
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
