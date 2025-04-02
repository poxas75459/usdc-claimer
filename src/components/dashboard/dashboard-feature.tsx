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
    "4wRGHjgwMiaQj7nG5G5XDbE3TvXFoHTLXRzRLYvtVjMMHv48yM9ZzZtyA7aLhna7yZ4iio6uo6DH5naDxghWST8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ozMVbSVSZwNC1zvcZWsYbjehf9vShFhvAuhReQ3jzDB96rdSdFdPeWiZAANyQiR263FotcKAX5AYgvrt5ZaALFo",
  "key1": "MgoFbFbkRedFeNdvBdXYDZ5PXRSh3nT1MwckXZ4aVenFRZdVSG3chR16t4qvtDTvsxjKy6qXrXXXMre6gJK47eo",
  "key2": "4Za9vxYckkMAXCQcT9xpcuUbzkQsxDDEvFrRFP8y8r1ZYcBMcoEn8sW7KDWZ1cgvf2ebC6GHNsSSVKUYwiNBSrXL",
  "key3": "4RHVEFgwCTLYE1BW319TqTFzGwn5vXKBCZca4bEwtz6S5VBTJjvk7jfLf18HiWcPDkxAeHxtbUBqJaATtA6ffdLb",
  "key4": "54Vy6htqeXxCfn3nEN9gjnoz9HHLqEULTaUsiFYsHprhiprpJh2uFWNFx5f6xgfdL6StfWrtt9aeDPYZaWJTnczb",
  "key5": "37Gyz1gbpPkzB14rSYyeDVVtFnqoRMbzgq9aQYPMUGPaNbifPPrMMgq5qpm8hSHtPQtRDmRxznW2JuLAYdHRrdbm",
  "key6": "2cisgREcBQXUdemC8pBpqPqxmVJxtg9cuhwPmc1ktuybA3onDDvKbi19CBdxAHMEM65EUpVY8NYyZt6LcvD6WfzN",
  "key7": "2FEX3Qb9gkBj2AWgoWDzJCq63eTfhcL2qHTBsgML4KZD3g8SQvgJfzfe5aFtiKArRPfyFmgG5KzPL42stY8WvHXd",
  "key8": "yy9nMJyWXo68iqWVqoKnQYocQL5BurUA9GJHfTNZviYmc4KTmVbR48P8Gnd8agaPQuobYdKyggfou3VX2gcLVHN",
  "key9": "5wgZWafjSfjCHnoV1Y9mb7ZfHzQbs8LuaG1LRZ8UoyCPaSqEf6MuQGS5qLgPo6B1mxxv7NgWAUPTibzkcBozvQnE",
  "key10": "2wFQJ8Z9DaTwxB7dj22HVzHdXx2nPX9ozsux7xeRnV9Urf3pba97aDRXbocNgPMMRsLWimXYuoUsGp6Avf5VFGrH",
  "key11": "2zUt8oBZ1NfRKHWQSHta9ShJyMkMC6Zog9w4HVgobHVuR4XbUk3AWDoew1mKz1X6sDfk4xSus1FNpQ3FjkHtdSjE",
  "key12": "nRNJAYeyoefeiDKHR4JWjHzeL1g7KAHE7vZVNCBhub3BSJQUWpkRzbajX7MCtFQHcuPk9GvPuKDM8KirMFoGkXu",
  "key13": "2jMdYFQJiwFK3seHnz3hDgjjhzfts5pKbBBfqqLKPQPY8PwduguSUp9aFA7rpsd4ncR6a9HskULDC68o7JV23WYD",
  "key14": "5on4QKkwdDEzXck6uKEXpBqBFW4pVKL5pbSNjj4LHjcdgs6vtDaDRmWjJtD36tgc45fbmqP7wa9qzrXwUeu1G1X",
  "key15": "2BRY9yc9ZWsndpRqHEFYcKzz4QeU5Y5xeRjdotN1tubfh4d8S7J3UH5yQCifqKxo194kZjBDNn2s5PTWJtsLPGsx",
  "key16": "3Ex2j3K8F4hC7UUK4VCUEEHj1caBbEXeR9SrUvUkguTDKBo9ggU77YAs3aPvKxhfKqftocdncvkKwq5kTrgUzFZE",
  "key17": "64uag9tV29vGL51SAwWaS5w1XTF4xhAFJBA6DwtSvq8EoKjCB8DjPVTidmhrMpPaWcMkoJ7p6PnKJZVUxWT2riTz",
  "key18": "3YMT861bLFnmm4gPkMZVwXWMeGVkQnRjGf61RUgBJ5hexg2B7AsJKsdC6SWxFRQhN12PTvLHEsp6wnRfGszaTnEe",
  "key19": "TYpG4NAndiwC35KPU9hPgxgdDVyuJ7TWLiRizspXA58rSTPJTBWtbEMS98iGJzSjHaKf2BXVbBxjaZs44ePrynJ",
  "key20": "3CR1XekEqSaJrzFyfy7vK4N3wqtrWnfYnHzcMtcVivxhnoPnGfYnWgVYSYSGLwnVSTAu2jGhuzTiNyEs9nDQQxDW",
  "key21": "4XdrTioivPmafoPSdZKLHSHkiqAfyDkNWc9rD8M6C6csS4i1WTJjgxy8MJCmsb5UcKQCHfxyk6UN6q88kRnsZQ9T",
  "key22": "5gWev97RH1mKMG8u6wbMLiwX9QGbUtKASpFrfWg6jL4FXpgFrKd9PSZ9SGjj2Dmap2epK44qNS3VDrtKCGTKsyY3",
  "key23": "4vuHatHavW2H3FhABqqWe6KaLCZMDTYSXbwPmno2nfUJ8yo9nPG5rHSMRNZn8eM9DTSj67uFxaNKXuBMAyKX6ebw",
  "key24": "sz8gPWz3RbT1QNNZBEsoJiwUEBeXD2c92LyukBteDBV28FJVvxREwN1VR1uf9ahWSbHPb6eVs5j17H4eQjQTFNZ",
  "key25": "CtdaUN9XhrKsjwkFKhc7cAk8iDRUZr4c9zoYnj7tWwVNRTnUJjTK3u4iRhCJCmqzLhWutqcXTEPYLC9zgKk6acx",
  "key26": "3RRCGZg6fG6o4kkkT7RJuBjHie3rPUz27j3cbVfqKffe7oem7AKEa2acX2YFcPRG9LR65PZMZ9vL2afyTb9wH4Z4",
  "key27": "3FGbknbu5btNxbhL9V1S6uamGwjqnx6mR7YcgruzWCwC5Pt6fVHuzvPmt7yvLrAV8f81qT7BSrevXtUNx4ukCaLK",
  "key28": "2Bmw2QFE2iQRGK7gDbtp1jCmdEEMdEE3drqcuZfCDPuqruTmetpsonMd9hvmthUrojxafkjEx7o2TnA17ymLim5m",
  "key29": "2vswd3aWzHSRjuVn7jKpk5H1CpWpsemggqmeL6jxfRgJEPD8uxQbvqGAnT5CPtoeHwP4fQeAV2dJF59SuaCL4yXc",
  "key30": "22x7aFnuBrTMRgvzMQumvaPZhLYsCiAQViFN9y4XXq7TbQtZ1bvzBZJTJq4eFCJV1ULrTmj9uGxHcF7TTWDaHzsp",
  "key31": "2RYxBcSxVSCmfoPhV9YRoQrs5P6KBbuDpv1EDF4d2P3XbLuwtEFkCJj6tRKp8nTgEgEhkbsETBAQub4B4zwHdzYV",
  "key32": "2eDKaUC7fD48qbS5FQ8moUrm2dabvKgrycUMhuvbPMeUHvWV8zDkQ6z1y9xgEfo5zm42ishYZEnKGZHJpKqdutZj",
  "key33": "3EX71ahNxHeRG1fPkjThErf9ucGceBQJLYmW7c2qxeFuc8hYdGVMUpRzjPaRrzix6yKonFZPVd3AZmBvJqXmqa5F",
  "key34": "4RB5itUREYaESdw8b1ZgWuAasTNQJqiq9cZnoDB3t1V77HdTr2zFMip5Qp9LoF57dFuRzxKkbQc9Uus8n7bM9Cnf",
  "key35": "37rqABrpo7oBq4AZU92iq3rKhdnj8rtQAkJokYmbP6YAHJg4xG3QVE4DXwfSJRahCNkxTWpDUK2f8gi1Ui5wAJBa",
  "key36": "285rRoKSfqmBwbca8pukXFneFU5oKCE9crqSM4hiryqhoX789ormUZbGoZCYz8qH1jitNFwp1JuEhyK6aaSNDd6K"
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
