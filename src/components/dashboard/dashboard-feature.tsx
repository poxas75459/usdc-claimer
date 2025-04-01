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
    "5YBp2hLHUzxD2RTvBthLwopU7Rybm7UhGn39ybWJ7MQpTxZbZe65g1iz3o6MeENA711PZQaWAssCUCHCyP6zGT24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jwf731UT7X9V5S7U72mfcMWzkNifK2RT7PYX6LZh84qyDtoqHXpHAqcKiiBPgVJGkaprYTmcaD232eSWPmz8R7B",
  "key1": "47hMZE6HGX3GiMTk11MUVTeNEekeyke4NdDFC47pY3aWEyZrHHheQriVsKD1Fr2raomzYKBcGjyMTaz8dsn7AfNd",
  "key2": "5pR2HuVtUDr1fn7Z9HqJwtiFCmU5KfbZfvXfdvZyj3XsC9nAiH1boDYYw8S4aeC84d8PUumZj1ka993K3jrLV3ew",
  "key3": "66Q5DYyJsyQ7UupPwdkEmVBpZuBnSfbWA4WC84cFZ83bYzWATtWEbC2SKYgLoTdnXLgQUErPhHvtw1P69nK7BJ1",
  "key4": "3EXeTaUjXvtsDvxyEe392E56euzWh5y3bxEutEKrDUSPEHYSJKtbyde2khc9ATjmYhQu5dwXAqXAA6sutk4Pb5VV",
  "key5": "52uKoaUmXuTzuMbK7neax8VrhwiBvL21afVgVLB4BF8WacEMoqaZ1phgjjt1F87UBqfdZE1hsmnJTVWuqMBmpkgV",
  "key6": "3M1aWBBxeY7WnYMvdpciZe9Vo9YsfrXan1LPSeAe3pz8Vtn9nPFNSafLvATRVL8bo3MDx1QNSsAgDZi9x8t9TVjb",
  "key7": "znpLigtkCHraei4NgRpw8tDPtsWDkKPMSDFTDRiPji7i8o9XvoyV6sRCW4T8gnDW2H8SEJsBGZtupf55Bpgyu7D",
  "key8": "5EnM7x39SCJP7p2ETkPvCjETGvNqbr21uodDKN3XLWmKX7br2GZLGp8KuCfvQpKEqk482AyjRVAYC9PmTsHCyaX2",
  "key9": "2iGCKJtbocJWbkGzcGB69TC4gWqFhNZxX7GpkESXkLKrfApuWiykeHRta8kZfNj6rrPyp2LMrEoowTx5ux2w7E1r",
  "key10": "2EmJE9CAA9btKCFxHTzKCGyrHHYxViiVzt2D1fQmfco8KyFoaAaVx2EWXfeQD74TvQcNFyVxAR67P2amU2uA4upp",
  "key11": "3Kg5TYVqx8knCmpE7R18jyUs9z3wmsKRjFZg8SkpwHDyV1KteBnAhaAbPgqZgEMx1AegEhFSCXuA8nHceuHDKMEi",
  "key12": "4YWFvqn4YZiWhkMDcNv5ieg4sqQj6R2J1MnCPvcBAta8hZubKzq8qcncpSPqtWiGab29zrN6bjDJiC4YkbjP7hmg",
  "key13": "3ipZVijsft8dy8iP6W5TzTehy3SXCjvcwbnQKaNnzEJFU8QfgVphN4uouZTmwoRnTP1K1kFUo4zLpBfRWJcqhYLq",
  "key14": "2fX1vXjmrALhVtWLHv2AWfCbLBay3SkBYcdYcwNWiQJXnmQz8a8Co1p3kAmeUtjWRnnoC1WxDXM7aeB8JbiBikf7",
  "key15": "4njwhuUkUzBMs5MLR7aB2QzpXeuxEeaskU1Nix77QfvyFEjndEH27KZaprm9qgFoLcmUJZLDwU5W5bnKhAtR3xSh",
  "key16": "4u29zWiumRMc9TD7RcJ8X6wpHkwyonBjFWT7UPKAAwHcsMWcQCfqYFgvRH2CppUEFyqsmSKE7XLoxBXZYvYacJCW",
  "key17": "5qJ196tkUuoudiRexaWaBWeDnszArRSgGBzuP84RgAcj8xH8vNrFjY69PRnkvkYoFop2MhoGEvZgzSFherd5PTiv",
  "key18": "4Eg1Bq18VPxAtXkwF1Ss2etSNomFp7WzEDSYURbkKpma3U2SMVuJ3fbHUcGkbzigSLPQGXezJLVzuCCCFewJ9NNc",
  "key19": "4qgKKCkanV6R66dvffZebHaBVVR2fFdWfzrKeBxCcAKrvbmNE7CBMKe2LQWPrssn7EimsYvoXyqoBsDXXa63BjzA",
  "key20": "3Vpg9V2TeQvKidNp8DhpNKRfvqTY56vf4Sxy6NPHV3vyUeZVjfihLPDhVxwbRZZG7StVwoet3SNaKFJNoX1Q82BD",
  "key21": "AZvghudv9qysKBWThS87reV9G5uYXzgLRADJRnWAKHQBLnihDQwKZVsVGpTC6FPaCVJDZaP9XkeMBSZeqLaX8p1",
  "key22": "5iVQLQPmXmkFDW8d946pJ1XqkTvY8tYLMeBrd4w4BqYd5yV6nCUU6ZGyuNpsQNv8wgw4tavEJHpmZcJq5NU2ubsw",
  "key23": "c4ea5AqkfrYF6XqRE8ijRaAJuz3gGQ3uQNkKqtEL8L4Hah4cXnfrhTPGXZEQwvYwS86Mdd13uhUSGLRPWVL7DP2",
  "key24": "4nYHMxKMvHSSDD9W17QYwZRzq8KQhUXL4ha2tJfj233FEqrkCbKHUoFvCKAybfpyGtbuGoFHy91CtRR9j8zmRtXv",
  "key25": "4PRPf9cE3zcwggKVQJukGySSSpPbNtWKy1CttxBb8qsD7DVUh8m6rnVobqQ3CtFXCArUMo3SWRBFtmgT6nvC8aQX",
  "key26": "3WPWzkYpCJfQ9ZJfV3vTMYvDmUk36mpXsokLzpXoLsJWnqNAUwiwpMsgC1UJQNM6dSMPERPJ9Dq6Hrs5SgbnfZsY",
  "key27": "3qAeecV4w4gxvz8SQT4B7EC2sevTKYe8igJu9PFbqXGqCZ7oTo8CBiezy9kAZfvUqdbXXdxb29QNcAKkHwMvqyzR",
  "key28": "58ycpNhjf5H52pQcbDT5quFFc53dKcPH8vSUeCCD4QugbN4mLMKsX37k13fRULrrtwKYkK9MCKe8Wx7SjAUvCADY",
  "key29": "4JXPRuGmP9Cg5mBUfvAMimrDNCvDoQGKeNa8nz8VmweaWFJd3UMStpeZWeVpDUTdvjcETELvRrLwGL88CUr5ezTv",
  "key30": "44nsMZn7pWF3Qrg3vehdvqMDJDjhYV4QQ2dfZHB248Fjxd2obiU5LU6pN5MLSZ4QVEBVvGZqKjQFqczX4rxfc66E",
  "key31": "672vQB2WgEUshBSgeaDEsuJrRE7tXyvaMKD1sTAYcfb8YTvN8o7EtGfoYjZioAWZbC7Yd53BAg51x27qHE7JuT2k",
  "key32": "uzNmVYkxoNvZpVffnr6595pcmJ7oF5bnv1CcYZngRF79T9S3AL16KyupNpAqdgY8Fd7V2nAwVoVg4SDdQENfa71",
  "key33": "n1gbifFvSs5y7nbahAXUbpjjTa7wtQxC32tvJEtU3g37JwuutwRg3nrz4CH9J1vAwXgij11BardJP1waRgfeugM",
  "key34": "3GkJM4dZxepMDktAfKgQJB8mRDCeffpqspR18xorZZGVkpsimE3XbeF8sc4YtXQrY2xkcDGh8onjKiQJNXnxXnxW",
  "key35": "3if3pfH5LEF5iLnV3LXWAP2StxDGkCaEtxWuztRjjrJzq7yztR5c5BNc4Rfdd4PMWR98KJvMvDoZEu9xfaXJP7KS"
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
