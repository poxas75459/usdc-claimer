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
    "3M9iULn8LfCuyUbX7RVbuGKpJxLcYx2AD29bDwfVC241czZKYFLm5yiDWCcsY9ENNYE14GNJZP46xHMKqGdQAQDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k4LDUvBemwqFSbamZG9kgeocAuMJfLMbL39qyJDLMdBo5nuqymM1UAy4gVAWWVomEcg8ek3RvReHfafD7ZtCrFT",
  "key1": "2uCVf11QNDrBXwxr5itLi5e9SDK9YBTDZSjyiBSLc9ij1HipTxksoPrsPs9kGYFWsc9CmgZTxbmnGjuoWeKkPock",
  "key2": "52PAtyssBLPPtYCE9TMv46L6QhTiQzfgc1mo6W3EZKChba3brjCF8RQbXQ6f22EzfvGbb9KG4QLdpRRqbVDTbryD",
  "key3": "2pr6uCuyh4Yr56PkeKg7DLSoVjxBStzAq1N8AWymXN5QdiYDuoxoSmUR7T8iZFQDVoH5QadGx2cPCwJHdsu6hy6N",
  "key4": "4e5MCr7xUiwawDH4oTGYiefJHWeWSZ7yYtUSTMcDHhgTFtN2NJ8QLFVz36bwKX6sYL15uNtDzVWFWHcDYfBXRA8Q",
  "key5": "3nJtG9mhuNcXd39wADmwmGhsUHejtamWj9kbiDPvmzmsmixng7k6YPSPchtsQcsqLTu8q5KvMxDgfSiC2nAJyMMt",
  "key6": "4xsNwvHDGKBemna2UghrDQXUfP3G7eTzwmHwcfHPMcpABC2gCumiqt9DQacNYLrjh4zpg7HFEVZc78NagSRNBY3M",
  "key7": "4eTPjRjvJAtxkxYQqDFJMnj7aK23nZw5LzDaUVuZfps72Df63hLnxPEhypjtEmjEezsAG7Nzwtae2U6XjrairbTR",
  "key8": "3ndMvpKTiA2vksruGMvveBPwaPefokLRvBoX7W8x7ngmngF1N82vNzDMcUJTXxbF4L1FspgRwe442MSZnqsDxyZh",
  "key9": "48V4TZVr5tMCgATTMtNGg4Fnk7Hf2fGkoEUFX6FH4LNsxeP6nZFhUULwz85YnjmHwuX4e7eDiwWDHfPWgFjrgwZd",
  "key10": "3UtPUuHDBVvjJTShY3k8HFZnJzGHQNp3qc8Dy2uSNmYZyzyseAfH26FhhGBg66bR3PUt56SjfDkLirvZExJDb7hE",
  "key11": "YgeFoKMcg1epPxfKkp87fv7WryqD11xu6cyAUBNBTyVHDfiKznjoyUAZSqNsLUUHxpt5hTwnRNTQdbNxSDywptn",
  "key12": "5WBMKnzRG2G8mnmp3bYKVxdTSCqA5zdwTpavtR5vJRbsHJdG1kb5SoReowFAPHvjBfgB4DkyKu68RMdWM6qnqWsL",
  "key13": "pz8hRjxRzC5gbQMxrzZvwaLrucyZ6accB7UBEWwDb2z1E3em81dBLoto1FBxhhtpNJdr6AaAKn1HtAhXQJbsL8r",
  "key14": "5ZwFx79JCp3QnV51J2qWq6DNczrvda5gKW3wUyEcFuxxapyT3hFVKUyBdDtUZUEqivQsVFBfBKQQ4oQhtTUspGG5",
  "key15": "3RnMi2Gebcby8F1Aq8QkkCFwszsiMa5tUBfD46y6zPtqwimevmPmeeXXFAhrp9DKdRtjQwW2fdE7Xc5PxkS9WPrV",
  "key16": "4CiJ3FJqh5N1FL81onceR4WJ97RRsFiQ28NDbwmBAgovxNQUgTx9RUdzoV3C1qQw1DzgrfJv4iN25ECmRX7g1egt",
  "key17": "L6bUfHEKpp35rYYiSbDMzxW8oSTBa2CeLJT6J8CaRMtuzkeib9EvztZKXUQzF977CSDiQ9Uw7Sm9M8Lb7AhzAdh",
  "key18": "39JEDXSsEV2SEsC1WWckxDs19rW7zBaZMJHAEFF5Ev4eyJSAxXuFSybkTHcijdLynGuLJAzFi714b3qKS3vLne4b",
  "key19": "2GbEecvUhFhwJ9iYjAph5wtbNZGcREygRKVZDfEEoyx53xTnTYFJF4uxcdpeiRd5s3qqoaQRTSGcLZaR6xWQueAu",
  "key20": "qrBD7LTCoYqHxqvkq9MFgUbnAgWnT4pJXozLwM7uXPcwUZ2hXTbPatUuL4rh2867Sgq9fuV7pnjj7G8YTRffA3n",
  "key21": "3aoMm61m1aViztpzDVaqKwnRNqboZ4ZJsYP1N72z7rfG7TaLez31K6QtAekNaPuHGXEgbXGgN3oTvABjryHk8mdG",
  "key22": "3MjsMHt36BiM8YHtZpEBMnb8g7Azshz6e7Fr7VehmFDTC1J4uQnLNGxegmb7Eej8Y9xGwBa9bAssKSX487nn6X1a",
  "key23": "5vFH2bSKSUXnziyCKycgdMfN3A5fxCgXubY8DsMvo7BzrRVEsbmD9UMtVCAan559cjByw1usMRLne96dfQLgZfBQ",
  "key24": "36CCyShBko4oa4bc6bFHmVQYPBJwTQKee97SjjAnvi2gBYjRzQfCyzJJLjhJFFd6KDaPqwG1uRJA54kafFkV67Yz",
  "key25": "3HkfiqoGxMgpCjmb3Hjctkdztb7cXBkWgQHKbmTDs3UhQUXoPmVXbhYGrQwJ15nDKwbFnPwdP4VzZTEXmFKwJxGa",
  "key26": "5ynny5CPv24zWKis7AD2qovCJQPsY81vviMowBebiCD3ob89r6X7ezHWYTGGsyYYcqHf5gR5xKgQrAdyLwX6myix",
  "key27": "563c7E3Rt6BogWnpNyAcwy46bwyAH32E3MPDWsZHpJgs8mGdF998VhEcRiqwCMFYQBcbhfaqZbCMGW3FHVmeVHex",
  "key28": "LchK27dYYWVQJqWfye16MVxWoq2bxjyfQ8TPm9f8GW2DmVNnYXXBB4igqZE41Pc78dD6iEUJAvBHKyLttY77fER",
  "key29": "4DTr7NL2dKNfgjXQVYMc14rkmXNwYGseVjNVfsGk37CbFwoKSU74AWnZgHF35HVxojktap1Ui1pxxkgv6JQVAgDA",
  "key30": "4nhkg5tfhBuxWMqAHRTRyGYsntxqFrP5pkWdDeWtcCspCNxgpB2sy7jvd9GsPpbLrpn2nz6XVVJPFBgiMhWubmQt",
  "key31": "bREanSmUiVDL618vzAWiDnS7gvhkm8ngiUicus1gH6YVTpNx6mvwWcjRNb9gzEqXCyZM3SjxQT7LqoaH7TNyGXK",
  "key32": "s2nhhQqY8sKBndz5dDhxBUvWR6vargXYbgwu3JAhw2qU8YnRtq1VBAdqZ4dqfZxWA7tfHQvx4xq3i4zinvbLqoc",
  "key33": "2H5FaTYXHZ7sTo1QEBqxSP29DmwJMzDpkWw8vJDzka22agWP52yWboQcXgvUNX82gmSY9Q8C6McXqyUJkkgsqwxs",
  "key34": "3rNNFSLSMvp24ir9Vk8XEGbjPD54UHirD92heYSfqsuw9yBEpxmr9hJRXNuuEirHurZqDG22fiGrUcbaSnUHrjFk",
  "key35": "5maeJnHbPQzcoTPAzbAgeGp2DHz2aeUKc9fytkmvYpLg9uFHBdr2CaQDX6G5TbkFFmxdrvp3nwapXVwgydWeeraq",
  "key36": "3wdzjLeZyvVuXZyRXm49iYXSMj8Z8gBE7nbL363KC7MpsvpNjYyVHHmAeBUFdNTLbwnpzdd2KDAwx2HcpHc4WJGs",
  "key37": "3e8HAhFSAovtmPW6ppqN1aTaZVFrc9y8GKrHxReAJAgq2jG5kVe2gx6LoyWWtdRHYNsPL1z3tPRBYcqVs196jhxR",
  "key38": "3b4omTrjzJPob8caDfWuiMXveuzuHwJf8RwQ8pNmRzNJZ2tmLEqN3gQMkefzfVVLGxMDtFkBsaBHm3MJ6YMq7DDU",
  "key39": "4vvC6KsXWuW38V22HCzRtn26TPFyYnyQyt2za2oQA3hEjovdoXTtd3C9igRsEnzRbnHrp9Qpuyi93aupXTQWAtaQ",
  "key40": "3HeGdfbgwoUKcSsawZncRFYD3n7B3kvfhaH7CskvMv7cLKEXAxZahE2CgZEzLM5UoLgD5vU9kLGqEbdiqWrtc5Qy",
  "key41": "5ntCQebboBxDwDLiJekfV3dwETZ451jNwUqHxWvcyiWbBeHr6QnJveWL5U6aohe9KbZBmMNxpX2NR9arRwN1BTK5",
  "key42": "4vUUqM9HMNmpDCCPRvSE9CWtuzuimdVwZczcjVimcJoKvBcavELdJ76SkyKht9vYfHLeLDdy2aNaGQpNCMesPcqb",
  "key43": "4yzbiXAwkuroKGNgxbQGe9in4kRLYNzokPRMxZZsgWTE3aTWiaQtzDbUqohz1wizVLMaqivgxruaUXrPZxBEHfSo",
  "key44": "47NPsheNFd6ZNrvzMjEGZbUymiAhorv4NFqMbky9hzjN9VYyRuuDaWjG3jCAPVY4V2SXXjPFfv4BA4NKC4NJRawK",
  "key45": "5bWKvZhtNvtYVjSWYKYTn8W9Me2zt7BcajNh7YAV1VAhAY9JYt1W1NppvyeSS6uwtnyfc33QM6iSiyvjLcoc9FXf",
  "key46": "2dsqMoJsfVtkYFoKemXtyaf8i1ZcRn8feDCuU2aqsMgPyCJ5oq5ryuPUeuRxb1MY5njM1bUr4e6CoLxPKXKgv4R5",
  "key47": "5N6meDp1YyjpucNioS3QxgpbTJ74LathDAqwubV7xQiGgGKnd1T8HCanZ64ABEBQdKzq8KztNsp1ZQWqBGFtcKfb",
  "key48": "5yw54N177nfG9wmVwqxGoCn52mBFZuMzqfuuzoa8B57u7DurAPPafWcMgKueTHqh2uBu2FYEdeMLDmGwYz3ycWL8",
  "key49": "3R2JggJs58q4UyLpm9Ud2HWSDKB3xFG9fBcArYqXJWQb24cbJNfPWQBsQB5KuoozyC5TDMATXk7uxcNc82P5mr3x"
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
