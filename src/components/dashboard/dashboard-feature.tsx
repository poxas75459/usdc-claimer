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
    "1szfXLchHQ55fkpYPDjGKvH39UrFFzFsEzh54JbCVUoutY3BdTT9fxT6Lk8p2TzvBFNDWYan9wKjGB21Y3rn2MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvqCwkAFQBujejFasPZwxc5Z3HUbDYkk9ZHatXvhsDKPXbQLfDF5p843cBLZjMMQLhXjrZNzpB3sdSf3WJcLj8P",
  "key1": "5uNTGnUn5F1cF5SQGrMqRENyLiWgeB4zeLvTT7nvcnomwd3BAc5cDdr6Up88oFAvzNV4nfXsCto98NcPoa55j7c3",
  "key2": "3yCo4CNaoj7kDLiVfchGbVWYypoGX1jvHzzvXFT5wDy9yGcgVMBgeeNq8qHUKGv88SDpYqb8coomfzbnmML2skyj",
  "key3": "5vsuWg99wFzQUC8Mr4EQC9qhQHaf4G9tKfMJ2G1Ag7eeXz8dabR5PZ9Ju7gJjvMrWyPNo8oLDBbfSy54EZq2S7kb",
  "key4": "25PFMjr1NSrwF6rZvVTVJS6QF13ERxxDAm8pr5Uf9y1YHwiDZLE9QYJBi9ASXTxkdxoewd4P6FFF6yMAEh3TLnCP",
  "key5": "2ci5TP5Mrpjai9j4wzPqkSvxvSmz6afUdeZbFtf7HyfVej26ctB5L4EHzXzFoVvNVLSVw1rHtivPXV2HqhjhnUeZ",
  "key6": "Q7NSAJYu4tBDKGTYR7Nf1kEKQbFdQpr2Q7NtXceggM29G4kBnSftFHR8f7mvrazSayGdY48J51FBWAA9aCXfhaH",
  "key7": "2d6qGHbgD3o9WHX8NpgX88Y77hvKq5BCapYP6pmqZkt382UFL8rA1XCZkny8cbjUBozMhjago2oqJ8vTc2EcnVyX",
  "key8": "2rCe2aNMQJRtpvLuNycbHzBS9j15GGerBoWDCyG9WQW2HFoS8JfogHfa5SpTN7gtJdtXXnjGoS4QufNzcftjpDyo",
  "key9": "2v3iwsjXkvnkSsZDPkTakNe6Zko4FxWXbpGGqWSn3jtsBiHx5hhELK2gPfkSowUJJGJsfnopU3j6PRBfbH892rfJ",
  "key10": "5XizHuaCKXiLnT5VhfMWjAuJ5dvbSRKTF68P1JhHcwGrsQFQK1wrzUmcaXfMMN7SVkEWaP2tV8p5TnBv3dYjPkT6",
  "key11": "q5y7JdPpeEnNUPPb3GBuToUkeEWNj5z7AX4DePwyXoByj4VtdGahfTfHeHgj9V27E2P8d9Mkc7NYm5USUiY2bb3",
  "key12": "4FBEYsdYYR8XSkXnU4RvNucpcaHBGgajmP5MgAYQnZnDZRW1rUoxpc97LNuBRnHxHYKN72CLw4wRfwSV3eDpDQV",
  "key13": "4QbmdaJLX1ocXiKL5GSfNu2kkyUNY6yQaMZ4QdZiD7arYM63EPnLQe5EPRHavSeyukEm8TXZ1pLBJ4qViYnZokR5",
  "key14": "5ytXMEcbFBEHRsF4JzTb3weRLiHuLosqnBMSMsqRL6M5Y6T7MVA8Rk4FUU4gGKwy2x2cw11n7CPg91AujqmqwPKo",
  "key15": "3FnHVCqLjveg5cCF5muswy6psb9uEAid5b9EpMxeNcY1BnLvPbDXvF56cMTyhWfCJvqqs6fx9SD4kdAsyXPiMb7N",
  "key16": "4FPuJsV5eRXYs8916zk58VoEPsrGYREHLDDaTMzMyyAAXigxHybfxNuKuEPLKaAKZzo35nWYV4S9gxGwX8V1nBDo",
  "key17": "5pvCoZVVo9fAbgG4H8HhSi8yeCSYi5mPqfuwMYAeAvLHeLWc6vX7ixRMNaHn75fATp6ZsVo2L8q6eFtz9ADXcKX5",
  "key18": "5ZPbMNtSx5kVqNzPpVJfL57W88N5aCBc7NCJbdLb496yAoC25qJTo6jwfr1sFJW4M1gwXoGkUMS3TKJnM3QFhHfz",
  "key19": "EUCDpfCTcV6FXnJcCgtPCnRYhWyEdEUjaYUn1c35S7nmfrmFJwu9M9vY1gx2U7NFR8LuEpCGgdWcKbzC4qHo448",
  "key20": "2diKNsGDYt2YfvTxS2dUQiPTz4UzW4AfTTsXApU2c8nuGTcHsZGauQzXy5VqkdjgRKP87qJXeRhNXkotC3F5nAwf",
  "key21": "22A1qzWH8KxMdbpcJEtvQnmAB3SCW3Q4Pk7RTrwHTYEFfCxwiNoaFCzUWswrTLCSfZMk3BaFHuqxaMvtbN8WLku2",
  "key22": "55HdWiXeYXnGLqKJzgLxPaekn6L8CpFbJoKgu3cmfpRZuCpBAaABtHS9UdLomjwr1kK9eakb3M7A8wxKdF1qGBCV",
  "key23": "51wmvYYxTTpJJr3JSbF88KXvKEDwnU1Emddwq2Kv1LWa2LQMbV47AiMDvor8S2xhpmvsfDLUseKQhrvyZeTrvhBC",
  "key24": "31bsDPhvBoCDLnX3VykQFkTE2PZzapKVS474mdd9EfwPHwGJFTwbVdTMLRmEtEb1yDWkKi9o74pZWvSWJXsmCjnj",
  "key25": "2oaKEPayJ1FyAMV1tdahJkW3wmyDWjaQ7JwXmqx6DJY2UV43NPVJP3A8L4PrJfiM33MzVDRT5fWNJ4qCSWCCfr39",
  "key26": "4riryf9skDxrxqUHy2kfTqaGV51qCL8FiWfUp93jVcYNtyYN9qegYtA9KEFYizjzk7Y8TBddV2HvAj935dZwr1hn",
  "key27": "4zPfmim9Q9FjarAgLLWJ4Rvei2FzYut4YMvvmyN912EQuR3NusMj6aDGZFkPSUbLSzSKbgJPp4e9KArfkwSwEPxJ",
  "key28": "z1ojQKTUD5nVU8otLqjqF4dN765wRBizRQVdqHJW9SSLeyNx8ZnoWZ4CWE1PGc3KRmtbZAWPkZ5MS4W4xdbPdVi",
  "key29": "3KArEbKfo7gjZzJVuaRqwStXVf9cxwyMJi3uubECum1XB6WVbGYvQiScphGuCLDMivhj5ADcDty9tV6bxQCufzm4",
  "key30": "2PUUKNdAyk1z4DT8YFfrQE4qBFaMUogEsQhDTWJmrdfv68RJNas5aL8nxMcJ83PYD8UcsgsHdinucZaygp1g3JxW",
  "key31": "UrNPmMXRMFBGbFPhivzM8ArYkeNgKKrWb87s62p9KLALA7MpfgyuwutWtFjUrMnhxVtMtqNWQkXeoRXMXf7rkUV",
  "key32": "5N1tfEuhogJ9FT7oHERG9kBC81e3nEpgGVL23qX33HwAaQ45PBBiHx8vbd9nhS6bL7HEjmRAfu5pE1PDtNV7ipEh",
  "key33": "2G8Ge2hTx1EtmEs1W5h6RWUvJQj2MiQPPMWYGoZWo5L5qdafNuSR6LTKS9ZnvBTvga23qeGsVYLyWMennD2941nB",
  "key34": "3WYQPJ8rkGLNEdCNV2EvpyJwXHivvG2qNeYkRj6cnBUSVVgHPe6seB5NrvUSrLfLZfPs6nbnSn6g2srReZ1AjmRR",
  "key35": "2A8jqMhaqgP4VtRAUxydu2kg2Pj1JJabeTdtFsozcDur16RE25ZHbhb1yoV14N6bNRZ7uGBTxWD2X5eAgmmvYyrF",
  "key36": "3Yn8FcLakKSvH5CxuTPT3oyFgxDpfZNoLGekvVKz6WrkYrk6Ws9sVENg5f6EXu6yAa1S3jh3b9Piq4aBH7foWWJp",
  "key37": "5i6s9dv43Nre5mrkLhY9YPzfR7uSueuN8wZ64hpRWPHiBYoXVNfBcHCzYZLMDrLVaUErHsueLUchBzt9Yo1WfVqt",
  "key38": "4ieSL9KvVgCpKs2FiZaw6ATqytdUfDS5PXDVx1BdME7c8zmqszfd18CcVPZZQj6oWUs6jty2S3EcfgH1aMFevjc9",
  "key39": "2bqWAb8jouGhzcYP52rJ1GTsKiVGJKbdBAfrqNfgo4KrYh7ckrC7Y792tSfcd1x3NGkLJ9HgNgYN7idnTegvaAho"
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
