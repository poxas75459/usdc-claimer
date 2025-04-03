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
    "RfQG3iMQyN7FQUPCSpYawNMc5nyc6JmxAVYLBBSFLUvNr74jyZBcnUVRkgLiAZF4Ce52W2CizJAPp2MbwnwSzty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MV2DGxk7EePwEzFudbxg9inNzCCHBFsjgcA5wKpgbDPxKdsxwLUvDXsR7SwkySyXDtNRoPztkQSqEbGi8LA74jV",
  "key1": "5NPBgtbXJEiE8H1NTzM55fzjnX5L4NnEBuiAkFqrcNP2vfA7Mp8jBjd3257fM1kxnck9XwzY6nRa2Xz6wttd13Ln",
  "key2": "5dk7sX5DwzQ6g77uQoGTztinChHQtcsXmxPa9uKSmhYE4wPruHeoxUwDRDF7DAYNreSJFG72uBr8C5chtPFhsfXK",
  "key3": "3rFPDaCdbYVkfjwt2XxKaPHmdvXsQ7p6r3VLbD84ECk8yvzEsoHnpki6eJMKtpCfFx2kwuuaWvaKVdAbLxoPQxxP",
  "key4": "4r3nfFYmWqUuhN3YCc42xJVwwuMpxYFSXa5kTVYsn8tAVsZtSXEoPJUssQcKUJmRFZRkTb4UKCZMfwMNEG9eUrTs",
  "key5": "3x58mXrVjiAHAxy4pLtme5MMhsEbpNfCWMrtgQ8gvhqunJRVzJowv5MqNvRwAYJzRUvwkGZPvTMzwDRQ9Sjvv55w",
  "key6": "5ohJDoGdPU9erEYEfLgfoMs88wW8QMhWUc4QsibR16A1H5uWedKqZ7Mye3cFKVjvyB1HURRMVmHn4KcmGtevk9hb",
  "key7": "46Bn8i52xvjjMincEWZQh2rqLQtw2iefDgFHs7FifDd2KrRC7PBpZgZJNr6J6ytE87xnE7b2HGcNegoihJREncqS",
  "key8": "5PBE7xV7EG2eYq7vCpLpTd8aCJ8Sjke6LouagkReofYPFoMbJcxa2NLCPxPiVoJZZVEwfZRtkFAALhQYV5gyJC7u",
  "key9": "d32GmdCnufmsCkRdmZ6U786na31YMXrYTXt5DfGQkoM3REQqejATgp9QByzBrXkWtUAfRrHTVXhVBBeUxKKLmf4",
  "key10": "2rTETisCchSJjN32VGYQRmhAefKmd1gizdbbd94YNAKHPBdgQKNzrdxJctX9DiFeehDmTrcRR8jpGJRgeu9raTtZ",
  "key11": "5ZPoGe3qEppFfomx4h3k3qQA38dVrXioEXXp757p1uTSHAPu8rs7TGaJvariKcmcR4HTXPNTfHon8BYVoQZNptms",
  "key12": "XhWDwcs8rYHdmihNSrSAvLvb5v3cUSSRdEFS3AyYoMfs8kodTYgNPRTEHJVVMHRqpjqdaNoz8VMECsn2Ge6FhU3",
  "key13": "43kRuv5X3cVqrs9QAKeg2MiaUvk8FLmoMyjbskYsD8kUH5TLhxb9QbiTbNxhXCpmWc8pKCtZ3hXtBK7xd9jw8wom",
  "key14": "5BbRPLab6cDXKzvPHQrVf8AouhZF2DHSLeAGh6qxQwaXUre4TsUxCKL2SJLCEG6hvAXquVbmWvLJD6B4kmAoLkeh",
  "key15": "24DcNCVRxNZxkNdZLXeB3ZKU2WYx99yYtbbqFdt3b9rgzhRkWur9sGQLXoD5gwZRZEDqBzfG2TyosDPRmEBj8BdV",
  "key16": "2MCCsH2tUi1Ax99ZMDcp2TD1ccvSgF8LJvmakJcy45g7hNRvYmTZxySQJaC6Doc9Y4E47jUpKmwDRpNK1QmW1V2",
  "key17": "4GwqAE1Voag4U7qbDjYLrNtoGyDR1ADAXE2vtbfaMm5EtzpmcyU91K8PirJ77qJ7ZNNE6e1sL6qe14U785MYCE7M",
  "key18": "4voLJzjUgMRpuereoTTvYvByigrops5cWJtD7VggVFCyTktwEijYC6352HxY9PFHhNtwQLW6ATYtLKYrB83GLgSX",
  "key19": "4AnA1zvc8JkdLagMKqktGwsUJSc8nGi2xMinYHEtHg6XLWjNVNuV75bNYiGNhjc14cQUEnqvZ9D6Ug2TBjcah3wH",
  "key20": "3WMkvJKdmJVQpWrPSzFmy5m2u86EKjS181X7PkuJDVtktzE1Q789FJFFqgRCW47vnYV8BYFQutj9SCJVfEyJxpES",
  "key21": "2AfwN8397GWUfp3sBRHufvve2Ay6ctyF6CYYZZVgC5YW9kjtYRaSWC3d12PVCpmSu2R4fr27UsFsR3pLasiWG6FJ",
  "key22": "5VYP6yXaKjTz73CrRU4rokZgTPR3nBxJp9ajGkFJhpt8KhXbrXfQKAdVh2Vr7FENEdhuwHm6aTPJvYzxH75pnAVE",
  "key23": "2uc1YsPxHQK8ej1CKSYyroMmNoxP7nvLuCPwox8VWuu2kqnaXXhWpkrxUKdxPGrWsT8Hrz1m583gEJhxtFjHq3rf",
  "key24": "21MKN93L15fDb2FKwnNqHzwvZngaNWTnmhr3WwrHwWPQygjFHC62tMWsK4Ji4HUQTksbL3Q5Eau7aWPBzki8WLYx",
  "key25": "2Fw9yiyeoBo7udvnar4MCmxirQUX2qaf7ThQf7KkmxQs8yWf5EMYRq3q2ZNUALJ9sDpf7V62uTpJ6b43sAS49BBX",
  "key26": "3iXiq457v3Fj9EYQbnNPMErXEacEqe3gZDc3DfoWL4wd6gGDPmkpmKkBcf1LEpb6HK7r5eTa8QKqNZaGqLk3arcC",
  "key27": "5SJJPjRaeFs4QiAdqH9FFue9zhMpTdzhMNBC5MxBMtozmdQERssd2aM5z88LHSRYHY5Sv3YvJZkUuyfzeUcJRpx1",
  "key28": "4kFLsVH6ahASAr8DXNkFzKp6XTjZc5NBVMASChpgKeTvXTcLpNB3BpZhxCqoikhr5BwhXHBSJEMXTeEF6iqXfa9K",
  "key29": "vJKQWdHmvuvcz2wcQdXPVCfDbjBtzTKmkwqUPvKL9bzDhxUjBScTFu1wvuw9fxjPxDAT8EDU93xsYVxUeFKSH1a",
  "key30": "3q8KynwhavCnEau3ZG2mUHSVGiqEBi2BUqs4NdbCSjDyQLSQUQJez1KGDFiUGJHs4TDyxgz7YrVxMdPwF3uFdVM8",
  "key31": "3u5YLUpgfy3xJ8eBaUVGZxZSETKehekVtb4qqFc3dfyPQ7wJFQA167U8Gu2VEc2BJoZQZ6wQCTJbDc7TGS9qaPjL",
  "key32": "MRiPu5tQhUm5yUGUWWdMdHYuwbatTD57Kj98Bm6iee9NiHywdZsCBiFz7E212rwt13bfv4fMNBQCo5UBp7mbxod",
  "key33": "5HAUhCchGzChYcsWajbbdw1ucuWyq2TYb9vx63652cL9e9XzAtaXfDW1SwF4LmxzaXkD37m3KzV53aoxePMMb9aE",
  "key34": "2WZgMktqNr9TMT4Rz3cD4LpUMUAshByTPBG1We6WKW7MWBqPK1TqoKLVuHnHeTg2tZV9EYfyzEKab2adasx63GvS",
  "key35": "4A7DodByVdG3kAAjwwERWGg6tU2zoTFPenN9a4HTgVYKgYrno888VG1SmHjVDFL23nmwEGSgaFu5cM1P9s9midt7",
  "key36": "2LLsUetxVDEyL2cZ17cnvtejsyT1CCWCZfuCrfiU5KAL72rrtvErmVKH9ZxxbrdhM83TCrssPJcuafbB6zzzFcaD"
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
