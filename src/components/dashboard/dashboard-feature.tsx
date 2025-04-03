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
    "4ZP7ihCf3TvYVQ3ta3xKPfUUTNtZEdp5Gi9h9w8iQd1BRJfGcUwdPGarBP5Fgu72gzoJuAVhHriLak1HBqDTm1P4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARb2Ps44tTinMiv4M3kgN4g8E3SXYRB757WgX23URFNAbtpZ7MkghP6RT54CTWpZ96u4SbG5WF2iDth6Dwnu3f1",
  "key1": "2As5XjnKGnCAQDkwCpYJ1vPzHk6D9QodDU4JifG8MfPyzoEKkMvbumjEp1ViwqmLRrPd17JQigL5KMHVtZQnFjqM",
  "key2": "3VSbsqAZq3jmbe7NVjRnUStSKM75jcjc6N9TJAu7dwuKsf3JKgAFnhxGRWdBooty6u3HBZuB6CceqsV9xJKwumiA",
  "key3": "RnMiMGr896CuiV7dATqBKBP1hSFJJBfBasu8wv8LvEY7E4jWvucXbYfaAcwCDe2pPZoV3hHx3yADyiTRf4TmgPx",
  "key4": "GDa5zZtQ1MPxtsEr4vqPGXe3Ypv1ow8mTjFY6CivSVecpJjwtNLwUFXMt5GFhvCZYCitMnn3StuSiAKmXtF5o9K",
  "key5": "3tRQ4L2KnsxikT1R7unLAPoZbbySa8eVo4BF48i2kfLFrSGpyCbEmrez17fQ624EWoqTwby1VRDwR5o13XkTZKw6",
  "key6": "2kU7VqwCL35B7Ch4xEfRC4k2QBHgsaSWHNUfaYq5hF4G9K6RPywMX26Yxgvn6Ju9Z25tzSMfV42oc4GyhRAxz1YA",
  "key7": "3Ute81Y7YDD7fWCXtpyazQgt9mJWHLpxqrKzdFL2ktNoesqDnANuMRBfeDYMW88f9qo87qmoUpRp88oQJJjqAmyf",
  "key8": "3cAP3k4xdEXzhZt7uxwUNQLR469jT5mix1oaYNXFU4KffYz8egqxMAY6Honwki8SAhYL6sUgzVWpYH1Wos5xyy8H",
  "key9": "4wXaKNic4LCpRtMoGXsmRtdCNVuYA4cMa6MD95NMu9qwndNoD5FeG6pxkD1AvzLzbmkteNZe3rb6NjjE3P5ZpZEm",
  "key10": "CAkSV1rbYJyiy8Kh1popoU4ZVhPuMM45KucyAjR7rjqhw6rAHG4HtHKgpUCgb5MAJNcvhjAaa7Q1Ff6ub8LTUBS",
  "key11": "3viRXyJorGVRkWpjDgRUKSphjyVtuFpdTn4er4VgVRHmzKKQCqkFYDY9CysHmfvxb29XEJ2U4cp1ngGjdbnkMWjr",
  "key12": "2y1zeonNrXh8dSLhuJQyjxYWzuC9biGrvei1tEtpTfZec16d3V5eTQkarP85RGQ5nBoBsQU685hr4oXkSzcNjEKt",
  "key13": "5J8eRYbao4poaFGnxbA3GGGCir1crgeE72Ev7HYTxAXHNyqQBHZyZqMTXHFgztc7jpZFB4XC7o7Ho5n82k8avwHF",
  "key14": "5vs5cpK4brPTDW4Sgo4TcDgxWnbPggp1VQAF8bpmRyxMRG8YirtvEAv6bPDrJfPYhWgzcWNVvdWJnY966gbxAJzi",
  "key15": "rBBR3fCiw3nmxhni3r8zPFJYApsT3T1oX1AvYAS1NYceeT149KBqQ6Quz8gu4jA8rsKAxfmi2gS2nJLDn9JcN6r",
  "key16": "5rDZ8QHhmrSz89XneTBzX86uMhxen7LEFoVyNSmAw8WudBRkoYcYqJnXZQtTnmmn9gV8EB3X5E2mUR5MbvjPsuAx",
  "key17": "4UUtxU3fDPpq2BVkPYYKyoPYfh5AszfAFj6erm1tCkiMaszfD4CZUvPw9FnnQnzkYHtYfe795zS2jjVyRspsnmoZ",
  "key18": "2LQUFqprxKsQxigwTKbv262gZv2ybjcEFWCKRjLLQ3Dy1z8yFJNqZXr7RWPLfV4oRhU9toLNdy5cHvoCLXUZZefe",
  "key19": "4eWmn2MkeGiA8Xn9T5nzyVGTTErycezaFMoC3QK6xS7tCEy48HN3mmWwnaPKZV5CtqXpzqGNv9oBKAhppqktLkuk",
  "key20": "4ZxpeD85Z348JFNkir7qMWLvPhfNLCJnqbChnBZAeXccqNRhei7JrVvFA1ZND1Ze4fQkdtrQwyUpPS2dphw2PRfr",
  "key21": "V5MMNnsxVWgU3QJgYxpcVvAxcHAsh1myiAPDh6ZbESVTo5h2A8x1p3anc8FsXbtpymQCjjqdPEr2FonSpntR44x",
  "key22": "4DCYcziKspsPj82gsoSZsXvsnedJ2qRYoZNVX3KxjNibFLwm1FhKLd8PDqj7nJbjwzZKrrMpUiy6BuGDVAM55Ldj",
  "key23": "5v4jWP1nCYjVyUYWvKwPe1J8sX5C9GNS8wQB6ej467RQr8ncnLytGkMPALwywDfvoKbeQUGKPC7xgwe4Fw9LLKt6",
  "key24": "3cDrSWY6oPi4C6amo9CkAfjnp5EnMy5VAhfempyWoQmQzNgpEaP2QrPbUiMbn3w5bLL85s8vYGZb5RUnnL42hdmf",
  "key25": "ueLNDLdLKpai2HA6YbWqTC6V2ii9MpcyWnu9AM5ufWN5RdmbutpPNKmzo7MWm4rA89xmRfxyczDC4chjsoLKtYc",
  "key26": "3GEJmF1iQsKiji1FMh8UD3478TTKM4xKkhS9pTBt3rfCqht9toKq2jvfCGe2cWVVK7xnNePHXCtsrkLH36ZM9yT9",
  "key27": "r1HtNp9pBhe8K5o3ETQyhHoVLaEqnhP2CgQTdnMiveMhipkcZqQPYscskJuoEwCFFE5aNxTF8MhvJ7VPEho4EXr",
  "key28": "2BzfjBXoTbtCpPjPCJ2SfKk1m5dboNKxd3DJGM65QCpiupyYfvYYnf4UZKS5Jm3jEhdsKXX3XNFbMNo7jb8Fih7c",
  "key29": "29gM6P7QM9z9K8r2sTpnoo2VvDaB3wSbgk3j3D1SqPQCiVzPcqVR1sZTd7vNcGbLpDBViWdFkMGXMb1sehn49qTG",
  "key30": "3cV2zpcRXWHoZYvutcsCJMriVj4AAnmuoSuBMxgCx8oDgF7C9gqbBbXUguXnjE36F7xWE7cucQVcAVwLPUzW6iEs",
  "key31": "4s2LvUZAWQVA3WQpsjmHwojk875ecAqudkwPeJt3FFMiTn1W4cZUTgrwuB1BWiRSkY5RQ1fsQeQLa5jH36vn98Ve",
  "key32": "2NGKoz4FSHGByDHRDPt5orbQnucEt8oW7L3JTUJs1aVJzNt5C8qUz7wGMnX3fQidkVcQbzXww63KEz7AwA4wWEi2",
  "key33": "FrKkaW2CULuBL7bGq3cpJMXfwNYzMDK3fvG2CURBKQvXKTiNth4StZF8tdpTmrhesN9JKjLE7yLdDye65nA6FQP",
  "key34": "2RG8nCQAbGsNfKnE8MbuZ6UkBPJBTsXEVBAbbXbNaEWVXbmzeaE98hk6eCPXQf6z7YnVyVFQHcsrjHfWzCL2xe1X",
  "key35": "TnV4tfr756vhmAwLYp2Dth5AF4pXGCBJvJhzipZZN9W7YANNbuEuDG6kL6m4ZRZEPihTyLDfAUjaZJCf2AryYFL",
  "key36": "2udPGzh5kn5BNDrmjoDPG6P9a28WcV6dk25scSQL4nHooYV2DQBihMH5YoEujVMsjNF6h2i8fUFwFpb2G1AuuakC",
  "key37": "ABfWkxPJFD5FKjBLnXynurjPiSWNRYvQSvoptYdDUdS4D1RABJ9XdcPKwrWYvXDS3eU2ytXDmEgh9BRjTQ1rwSg",
  "key38": "4qqNeGaRoJnWkETfySf2cGd5juvanotRKjaJU19ZtKs3GqtqgHCVahYcQfUmn5jdb3atGAg84KpHytqxmswG9VPb",
  "key39": "3mQR9tncMegKEreAyHVxCu3L72EDwEJFLDds8t4hqdi9JDjR3UbNM2hQdfagwkLmVcGfi1hJLE1A7NE8zWNdVH5x",
  "key40": "3nDWeixrEUqhxAznPBCdagCn1Y2hs3djKo5pkKQBkB3WEcZDp3LRj1cGUFe2f3PgnMv5s23i81NUwJirL6JPo9vt",
  "key41": "5jz28C8gKtVtsrdXu44d9MMug3T5rcxdYezsZcnEkFe6qt9GaH41DePxiQdKJRUJXgzk98YGTuoJCk9uCr6J5wt5"
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
