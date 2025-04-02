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
    "5uBSut5eyxxfbVENuWbZZRrzRU68PFvy9FfKmJ6My8btwtuvUPLe4TjPuWsrdqzs7FGxEaDnth3ipBJ8naPzwaFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkM22y7KzRKesvwM6BXPygLxVVsLq3pbYGtusn87kKJCA8BFAfTPYywktwunv29AhGby1jG7qa28ikV2LHCKu9s",
  "key1": "4EwB75aXqrCtZnBpkN9p7Qb9vMbSKsn17utE4BSbTSgB6TjBUXk8FXSmXAhcRj2CuHnZZjju4E1DTECbc879GuV9",
  "key2": "3sQMWcn3pMk15zgd1vYHvBUEP3ekkCyfzZfChLP1ktGvf4FrQbJ9b4wJ9HS8EoYWEx8YHiGp3XAB9RRKXZ3WuHBD",
  "key3": "5yiewvLX6NGYKLeagFhcUHdoYtisLZ3gFc3M4jttMzbAhZZc1SL7mWPg2VvsiPHjkoQEyjdx3b5y5BqDSbtAzxeT",
  "key4": "5RGvXcYwbFKLgdu6BeQ2UGhDJpXk85UXCzrdFidwfJWHwMSBFMJxZ33TFCf1YoGktsQjZwDswT3o1vhg1awAKWBN",
  "key5": "c5JHjvaWupd18hxMmECCNFRXHwWng2eeHjo73wdU4LTwoTmXUv9po2Wgez27Y29haMVSe8fbSTMKDwLhyWCAaKu",
  "key6": "2fQE75Zarsz6u9BwDDGLrJYZtojBjrLhJNm6A73RAavwZoWj1nesXbJirBPKC22xWhbju5wJBPEFjKTEW1sQoCLf",
  "key7": "2WgYgxorx5EL6ZSSawWzCCJVaBXadriW9hgFsxvtZ5wtR5WHRbtTk8xp2wYgKi9AkhH5LYcVSREs5hk5TVyhmn26",
  "key8": "5GH1swuhBHGR62BiVn26jwifdWKTsSy3pbguG1p9KaVMmchkhMdpH6JML7H851yzuv6Vr28gZf4nf6jqJegGLYVh",
  "key9": "3akD7Qj1h4Tuu3qjgXND3UE5z32xZznViCh94P78YYTkjorJX751yNpC7wLi9Yjbi8d4oCWX1LUW24VCpPKMGcqK",
  "key10": "5WHeJw8z9bkcH8ZXCfc6vUtiibACffDYRkZV2NcPKc65FTRbEGdusdqaYLNsZXKMWYDrQVGxBrJdVfyNedNsRfJc",
  "key11": "2Z8m2xMKwzNzAyBvTpnA97zHWpaiQmcJ7nwNWdKcXiiGDnSzGaWmgGg2hXTC9d5HTCsA83YQUYbJaek1Yr1bGZad",
  "key12": "3UKk9iiUk2MGbZ4RTs8G66fLgRboVLpXx9mcmmAgzsa5d47Ejovm3xMNJ6Tg967X2j6efoTS516hzwYtTYdzj9LK",
  "key13": "2PcMPaySoKThY8QCELk1xh527uGTpPaaJZJsCK7ojGjW3rRriKnqgzxn4pbnipXgdtPR8HMdMuzm43wS1fH1Xnd5",
  "key14": "2JGAXdbT5avX9TkJDyASKY5unUPFXgAcMsGQSEjfjGMEzEL65DozrgseZpk9bGHx61aYwgE5y71W5ZGoFU7by2fW",
  "key15": "4aKzqU92SzcjwZbTtzWMiJubphwSqGPLX4ZoN6M2shGgsFKCfiNf68RmNGQnDQyk4rDipwcLxxL8rkkxHL5Fibh2",
  "key16": "3DSPzrcNi16YwoUXkQMoh8isdW1aPjjaQLFjCmQxQx7q1SVYj9NgcZW7qZHQq6R6txcLXmzhrQmhsLvMEEgQnZds",
  "key17": "5xvJMtDBU4ZyCbHxZpy9GLLsg6KUgG3tddxWGGBgqV3X9bcTjbgHnrRbT83wbteZEvxtuagYqKPnVcGhYA43LM61",
  "key18": "3ZeqfJaWEwY2uBqaPKCjhbRkkSdD1amEULjneN4L4vfFCd53PconrveufFcPT3scsnC1iN3RdXWoaa6ZMKUjs4EV",
  "key19": "56GNvyZaZwpch2rbchwuCGEBFgkdKYAccgaLwfQyLgnntR9h9Nn4gpoCYfT2r5QHAJojv4GALMqg7gsvrzGErUCq",
  "key20": "fufBUdnLwdBAv1etv56UhL9dqLvHaKwudNmbWT1pEG7RiVPqALvim4kkDc2MLTtg8b6QwdcNTLHuARCZzzeARYL",
  "key21": "2XANL5xvgs3jbVgeaBWEwf6DWxXGsUF9XM7AsYkBhjHRQEbM71cZydwWZPyJnhV92t7iEj8Y67FA1BNvTnVSbQsi",
  "key22": "58FBVokCC1RMgGhGVyD2hq4x1MGw4sh2foeLs8WjdzZGepZ97XYbw732ciSx1ANsXVN7L23qj2RXa2pPJQ937gCF",
  "key23": "3HGsN6BpDdwoVbPpHK8PRWyHhSt5py9Qd2s5R5xcV3cjafubWoysHnWEpYrgmYbbR2fWcnhsqmWSw1qUJsfeczsf",
  "key24": "4Mw67RPbbKeDQDtgSXPz4CGH4252SGbYkNrCDog6nNUi6tjV1Uyy4P72NnACtU3CnGAj7g4YwdAx2xsN7WLEG4LB",
  "key25": "4AnmfeekLoYkQCLEuaPELVWpACHz5X9pTe1pQunk6BdpBJ3g6iqrPwjgf8ovgQ8pKGzycJPRCGfftqEtttDFK6ez",
  "key26": "5j2LMX6k8T3p67fGFzwyYoKq1CTsRYPyG2XxMwnTK769juDcaDwRa7U6vm182wteVesoMN2TSBTnrsnST9M6iJUh",
  "key27": "5eBda9iAXbh8xgJt9VPAnSqKGroZanukP3t2NaiPcd1BTMdf4gePySy7TdmabDNg5QnRzzZpLw8u1Xaf78YZanD",
  "key28": "416RB2mbkKRyeJd2QvyAraLokXmmWJ3we7UxaUQLa3vPSuTPvCyCCaxxtzNmVjVJ483kQwP628eyVwxiikRiEkGo",
  "key29": "4Fv2weP2QBsUXrriVRBpmmX6cy48EpbdgTrMsTZDtfVQHgdrLEpiqysJLuiHg5x4rNF2QFVHus3eXsMGyMEa2pdG",
  "key30": "2EFi2HYNoeF1qdowfKE1ASAgL5tzWPDSSmKjEMRG7kV1Rp6PLhVSmHKTCmLSHPsKfjfwzivEqj5CNvyn6HA2oxg6",
  "key31": "2S7C7HJSDJL7TtZrqE9Pj8F5Wp9LBf4nKzZencFVUoHUmhgboQkZqov29KfP8sKWzw1Ci9yuSqyh9wTCtFqfdvEC",
  "key32": "2brzqcA3FpDujPDXE3iZhNwwp5pUnCsthfcg6WnbJDtGH99aknrbsWso5M2ZKNSS2mRvf2yojTAZNRBXv1wgZnUH",
  "key33": "4W6JD5AHS1VdduQKd5vTF3hStXnrVNe4vGo49L2xXUorsTagTJoQ6TZM2T6J9DMxcGcWTvxGo5kSab2pxgDNCYpU",
  "key34": "3unkdTJQGhYzLxGSzpRkb4LFXgAhoGEpx56nSNcGB7g84YxBg8eF5HjyppQkhVBjHPbZQgqED7dgANQ47c5fD38F",
  "key35": "ZUjA8xaoi1ycL62frrkcqL6gFyaP53RXyKa1u9XfeAduoFbrJsTHLM83iAAHovNSFMrPubgpY9Xztm6fqTpXzbQ",
  "key36": "5NCrMPG46mXK399Z2PewwvV7YeUGJRanoYZAF3TzAn69ubxupoYMAQAZrESh1yB36fKm9HvDZwRxV3zgDyehE3be",
  "key37": "5QTEqdYaMqnMkU49ev4JzArg6fWcSfeRtEkrG4vWVpYMXZs7WRkL2SXvynomLHTzrzxDLF9m6ZBYbQ89YjXPucf5",
  "key38": "4T4jBwcuyj7ZdjRRQVE372Kao9KDU7ggoNJPgPTeV55FfmfkE3sbdbdkfRVv4a71Q6vi7HF9GXAkjbWgAeeLPs9Y",
  "key39": "5cbff5URKaeqNgXYf3cDqQGgWjGCTz7VyQLc4szDGPTbscCHVN544GhntwNArnhfZq8MZD8xLAgKcgXTkEpVfzot",
  "key40": "63BVJ91HpEA8nJZGvp1trLaLyi8GEZw4W5XmwyLF8EeCTF8y8nju9D8zbbyXwd6AxFrMyht4Cq7cW2LXpbRBFhzu",
  "key41": "4xWBWBc9XrZ29rDT3GHvCKfXKjM7NYRRCxQzzBab174Goixn2dhns72fpXYzGgbTR916woRs3s2AL7QXYijz5A5b",
  "key42": "31kr8xaEV3rqrq8M4UrzfJQqabwPZDDubhRpMGHxdSvkPk3GYwf9wn7demt8Qej5vrDhkf211gUi8AytQshwUuuJ",
  "key43": "2EmaMWwQhm95fM1xoPYmRJWcoAtCEJUu4FitCpY6DeDVPUFQAaHTvg6dMsScjk9vcQUc6fJ1NNd3yHRhKyCy2CvH",
  "key44": "4sr2mhTatBKcwGxceMxrNzL9Ktm3kBEB9AowhA5pnVjJt4iaLvfQxNUnvCpUbVLKmtYh3mDCBUPcnifbc22U9ujZ",
  "key45": "5L7GNMemRn4iavAtcA1x426ZKojeBspbrmiDDrruCjxLWdZrpiqhCCbxrRFQw9rwQeySTsBuubwezNpvv2S7qjC6",
  "key46": "MHon2J1msRet8WyW5VnVGPf5pRaw73qsGkSBfT4GzpMMzAMZgWyVPSZFRTjCm4pgAaDD5hMu6E9zvxeX7qBon37"
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
