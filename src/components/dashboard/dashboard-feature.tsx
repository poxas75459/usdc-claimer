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
    "3HMQgmeiApsc13xUNNbDFwCaqstpekf9mxF7QvZTSADuJeN4Vbc99ki37jjnrMNV5tffcAGUuRpdTct7ZoX1dQ7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZRSr4odErEJ9DxSDpNsGen3KCLhFrvY2nhdbF4HaUjtK6qcfeWsUQgxJe6n3FPk93AhUsfJQVhp659ezXyKa7H",
  "key1": "5pttKX4cpKEjvpWKnTvAhjJwVnBZvAC4arHsXv17jAGcXYPdE5ETnyDzzg727PJttatmVsxecgSKHjtPQScwGsxE",
  "key2": "2GbwXB2afuSrfY33GPHbsFzMNpCzRLCqZphiHoWbsL8a6P7xXdPmJuka1UpZ4zrHVdaUXsU2kz3WFPjxanFVYhsP",
  "key3": "5ooEJ3ZkLbBo8aSSYVZURbU6WsviQ4azao4wFpLQ7Ns8xe6255t1Fjz1QNEPRhAcSucBbL22DYMuLiNximYnX9RR",
  "key4": "aw6hMjvQ3KTMWymF2e9bD7Af2P2FKBdKpLvDgKwnC5S9yzPTUVhfb5HzoZTZjprSbFthujwapNAdxpXu7EYvyJc",
  "key5": "5reJejKAE7FeEuhGpim67Ce4o5CSmPJLQYWWtQQ2fsNLf2UTvz5jF2t8R2FRVip7pxP5f48ZtHoXfuGLJBs6MoWv",
  "key6": "3J3HdMPg9Yv3m7rR8iidqm6PTDzsFPNUdABJiF31dxiD66nyjpo2NTJzsDrKo3XxKnvGKUEty1Rqsu9xnaQj9EJn",
  "key7": "GUo7ibm97e63DDyTNzANw5joacsjn9uLmBqYuQfgYi1FT3Bdc1NeDWTqSM6trKCQnjtw5PFywrvCRwzGABi2f14",
  "key8": "3jTcPStizMahR4zxpHXFpmMdCD6LMJZobQgtME3nw8BtwTHRsnX82nLpjUNHVS4TX2KvQ88rbjkat778ZWZ41siv",
  "key9": "5Pg8P1APxYmjpymhJCnR9sx3GiL98vKe9Gn9rSFcKQBWtGp4MK5SMCRcNCrFF9E1qosgDT8hoMK2ghaxQyzHAQaB",
  "key10": "5Lg26HLJyjBWpe2CAtMjdFpo5qxMmdkcZLwaS8VVNxc2YbVEbMRztWzTwV8AoC7Azq4brDVgsEM9XUbYC5eUqo2N",
  "key11": "3f13ybH23g44DyxEdoYJ5yJpycwGaQA7tiE5eK12VkifLexFrrNy8ssJGvwBGL2ea5SPRF4kUArPGnn3bdQF4Qfe",
  "key12": "5YABqnj9S5obW55cqBSPLrrPfAJGAou7vAkFHE5tVpUs27TiCHqeadpMYHko4cExAMBy2ey846xL8mbMppAf1c8k",
  "key13": "4jJnK7Mm14fsipzHxyvgJi7BY8pcDKjNnDt6uEAUrF8H13TN9oLdrbNbH6TpeHNhuQ43EqvbD93MprCyFhc6Sv2L",
  "key14": "5fVYaKfa6FrT5MzmJNhs2ivRScznCeJeTTnJoWBgDieKyzf4CLqQMNVetqy5BiM2nmnUVg4baGSeU6GWN9BST89m",
  "key15": "2fmFvhkb9NnTvKvQkgN9uHGb5KPc2xsAiCEh18BMsXpo3pcUssfMSWKuUqRvvYoGsH6t1g59Y29NYjJDu6idNo7Z",
  "key16": "4T3Z5mUSSCL7hbE5dtw6DAPxLtA5SRSoqZrMUTsuf1q6F1iC5DjPyxTS9RL6nqr4141rbSsFvMvmXzaYs449BnJJ",
  "key17": "jpzi89CoEgLqhKgq2SWZhDNfYdi1zbNZF8H85CoTtCH1rnwAiwfvRqDdo6rx1xTtMMdwmLTWPhov6gBHygH1Rfv",
  "key18": "4GwwD9BiWGLVNJgVsGxpvAzxVJRoxjsFHLLxXSQcDz99sXKL16VxK2u7sw4TwEVyJFx3siJ8C7QkDYeu7hd1pwA6",
  "key19": "4x1LxXCkbmCgqQkioewwB2d4MP7ujCzSd6tJVKcyPfDjsDHS8GHYzkHBma92CVrLxrHKqmi2Txsut62NtrzvAXFr",
  "key20": "5hRmCEgt1xwVujFHecAjGDqr5V1uEhwPoc5XnDadPiVeBqnSmjxY8Kwm5BGeBbg9XpaPo7h28TApvB4yg7t6z3e5",
  "key21": "2KsGAQwq789kkxLFtiL9o1YRZeVutuZUWMbwMUgtXLX258VmqdwnNJ4sT8oQY6Y4QuLC8uLCrCUkRDbkwUsy9R66",
  "key22": "5dLW8hftop4GvL5EQFbPf3TaG9dE2L7KTFUvAwtyMQvqnrWpK16gqfJ9RMGcXPhenF1RSL3cs3g4VrgBerandqe9",
  "key23": "4Bg4u7sZHrJP1D5QhbBXaL613EqqdWrUMqTA2VkP2myYpGLKYZ3oP6bhwQcvCHbjsbk7Y1SnzH7UXLfYwJr7UpxE",
  "key24": "2SsQeyQNg6YRq2K7rWsV9TnTttbmvkpxbWMVUSDm3eKMCNA74Gg8RHuLXewtQs2R1YNKcEvnKCgAr5ZzTsajYZp9",
  "key25": "4yy3KZj6joNMWC3fqGxas5LtsTKQpHfGZZkDWZcgtapEaa12PcwEtrVPEpkPWGE2XYjtQFzjGqj5jimMYL2XBifV",
  "key26": "61g7gBXLPi2m1cy3YfGSs7WEH1G3mugseWxwZTfgEms8aMv4gxQBtdALbW6aZZbgMpEt4zJiw8gxMpKp5BeGte98",
  "key27": "2Q6pJRRi6LQUS9xnUGR1e1f7xcqvjw4wygYF6QwTUsJ9DYCJB2PComJ8BDrGiNd6cvv7GLLZxVXu3YdvcpXdKvoN",
  "key28": "5VxQPY9SeaLoN2NZBtoYbWVS6jv8F2dwu7VsLbjY1Ez7oUogj7N76Trgtug2qTt5w7JSTDkEvsoWbMzkTveJX9po",
  "key29": "2GDzDweG7jN1eUn2sVCnUnhQThpYnrKM4xmiCYFdJaTNfNSuL8nUkjyxqeTgASTy22SJqxMjdDqWbwHXFEXgNQrF",
  "key30": "4XY4VBAeRMmm6uad982FzZsaXyhGj7odpSiZDEm4XRx9aAcKJwsnb3EgNXLDMCoHAPGN8BJxWXyHKGAA1GzS3dJL",
  "key31": "588i47hnZJJ7y3EQHLeo5EfPZnCXTFngHzf3ndU2JN5taSUNCShwUXzdUaEaajwSc8cW1ZJpRnoHZFUE6QV6roF8",
  "key32": "4iagbAvNn432yzKcipBUSs52GVn1mKLMiyUhM8rRqA9X6THfLgbfQwHFXiBcTPtRWBqgTzYmtaM4CiDsYGZj5EHr",
  "key33": "2qanBamtbKthSgiyScb8R6SXM8WCvUfVhyRzPf8BUPep34XB551znL4z3dsfYty2TsTJWH17m73YDX2L5uVXq3mC",
  "key34": "26Pmaywu4Bewv52GSkP8SZjnWYeusBspViasdHpKHewYZcEK9cp3vR6jGMGL8YtERJN7Wo49anVRuWZVY9r3vcRw",
  "key35": "gLriEYXDmnUj41QyDcxLdDCE9TSwe5Wwqy4KUm3FnyWKms4WYMirPXr96wmxZm7XnBet6g5LJmky1W18SjcvZWU",
  "key36": "3pV66DfMW4gvNXqfD6DMq2st5D5sMnUVWRD6qU1wyzVnwWFqtfedUeGgssGy6ZwGGaDnKQCT8V77zWVTu1prkGHA",
  "key37": "2z1jfXyUPxVS24GrfjdNkytLsgStNpbHRaBBcx7HaGu872zY6XKBpUN156Wy6ocQPhRybhZGCMmNiGf6pokvCZ1s",
  "key38": "5R1bxr7eGfuZZdUAP9eJGo5wrxZD6YbMeHCK6mVioVbcSaXuxHUMc5txte6ef5GCZGg28EyYacsXFiX4EXJTNqs1",
  "key39": "36auSTDBCZqdADS72nAqKwGMhzpm65D9Kw6xCL8jQC7XiFKhbrAVScXgufGMkDeByHRPtiM8YKhDHL8XwW5traTN",
  "key40": "4s5Q5q68UUWP64U3Yy2ojAX3wfHGMz74AVwVdXVcJu3hrgvSXcgva425LHbeyoZMCunyD1AxttyVMYiHsPaG6jnk",
  "key41": "2wf5craKpnLKSYncVJkP1H9raULUYanBT63T41LNzBkCmFLWLf4UGMK43c8BHqgiaS2fKQVLKA6yFdN3WKQfsSxV",
  "key42": "2oX6VhG9gN6Tr7xBicwQudokjJTjMT4vueghn4tHUxubkULwuh5sDF4mSu1xn3SXTsKecYaMRquCbm7a1mpX9wrQ",
  "key43": "Kr8VZf6x2yDwn6TEibnaqZb8GH4G6NkkivMpeqQErtYukrMKgsvfjAg43oG33f4isc4gZp3RqrZEQg6Wqrb9pNe",
  "key44": "2zGuCiy58NyWGCd2EaF2Q5i9UTmBy3dEx9NeemA8AmUb7T1UyNdiz11vUvMQijb2dPrRoH9S1uWwWrpevS3eQfua",
  "key45": "4UpWN4tgGe26qdtZVqP9N2X2dLiNJhdUKvBnrBgzTbZthYPV2o4ajeLiYaMdfLiysoferN16yzGfgUWkYTiRQGWP",
  "key46": "3oANn3Y2SXUWmUANMivSeEaHxF7d3PmMpNJdBQwpmwcH8TT5VKfLWNJkFXnCDCecwwwPqvYZmpSHY5f2sQsaEwBF"
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
