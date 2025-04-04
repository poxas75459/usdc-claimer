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
    "4KjzznXcDqWmsqi4W9eYg35wBet9zpjjnm51K2xiv23pJGSiTmYMoGUMmgnGRpVWmGjMTkiXYGZJeAPiFGYYvASK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mt64dFWVdpNuHxFCwJ2rcFZs5CqTnkci6rG1K9iXBC9UfeFuBBZURRrDXFRoHTLewodPzyMYVVf1X4QEa39K4at",
  "key1": "2XHJnyLa294aXTzyQdM812V14hUvdR1nffi5NL42pdL8WSokwnvGa6UrGARtE6XSt5mWFyVfGjojctqe6sC3Zgu5",
  "key2": "4KZnLbLYcptep3yr7Tz3AmfzfaAFYaEuYtJremBKwHuPw5braavgsuUYBrEEjfQwFPFYHHm5B8emZ7s7Tha8Xtkq",
  "key3": "4uR51JXd5zq6mFqqnUaSy3LnHVomX7SUWGm958NSgqsjQA6pLTEH6tf1rea6JxTs7nNKpgC2sPH1mGSbWpBTL178",
  "key4": "4jWeKHKSfBZCQ5Qtza4xQLiHZ4ex3tCqAeFZwM8DnYgaksrJQiNxxjSobRtJcSg4p8EZ2yRLENu4vqdW4sdRY74v",
  "key5": "2Hv3Nv8cPX3abkTuNjjBXm7NXHuFUFvYRmWrtUrbKUsFAVKbaqNfF8YMt9JTS4mJacf9tNeGYoxtp4Mn5EUye21M",
  "key6": "24ir5xVmdohMr4To6GZwWdd4XEcCXsgvSYM69wm9ZtUbUUAfbpfyxoExDoq7fpSE41XzXHmRUvmJkLZVofi9QspK",
  "key7": "jHeTLpzDjqjJ6JySAwfEraPo5miyCrg4foscM1QAbCv2Bh5DeapjuNT2LeyMqCSzrinZTBJfP8a2zCeXrgXwGPU",
  "key8": "34sP2VMeWg3iBVCqM2Y46bALXzU7s9Rvc9hTJwk4bh85yxwH2guLLBtV9txQwL2HtwZMivLT29S3nLxsDArrW9vW",
  "key9": "25HgyQf7v2f54HdFn7A56aAmHbCNSzbfX5whckG1CZiziWBH8msk6s71opaeF4aQmoqdtvzDbwNagh5iBt8Ymiyo",
  "key10": "2c9HtCZY9TA6khj1BZocYCi3pDs9uQ1uDBm1sNwSNscf7TMB4mzFGEHrWE2DoW86unLmzrJfMsS6CtwgAUBB3uJQ",
  "key11": "2wWdwB1sMsrD6J7jFGF9TmDCVviYP4KD3Y7xbAQaLtz1nEoXE8qB7mjWC9SSEGfDYkau9oNwiZpEwTRuKvaku4nJ",
  "key12": "4mrEV9Zr27N9ewttEA3TYR9LXb3Acu3x7Cv581AhJb8KypYDYA2CsFJVgZ3bVwHQ3zMwTkHXSTHNffEH6wAQs2AG",
  "key13": "2G4n7dF2HbVWFAMj2tUSKn2ZFALEf2Jn3ABSjFeqpk5XaPJEQSStYAJ3KmHhiHmmpoLkacs6jZuAPj9popAbpmUd",
  "key14": "3psbSpGapPg6HRoSXpepfovjkHWrjJAeuTP34PpBPv8ucsMpF3GQGECiZSNzaF4KGVC8BM7L1ymdUHdePvNGq1VF",
  "key15": "2hZF2StTq4UfbUHQonyrmicAJCH9e9J4K8niG63CvchZ2buvnj3qyNGqG6YSBYR59kP3dzFicmwme4rkWMmAirpy",
  "key16": "LiBwQHPCrgNzT9BZ6te44yHduYZ6EyATS7H6uoegCrxRrMHdwjQnsNT7Ws637gmn57Ee5hSzqE2xiXCvqkJuG7W",
  "key17": "2vvDX2JtFTpqFC1vV2q3V2ABeNfr967qydG5xHCFWUrsRYDP1RV8cdi7Z7QahL97NJg66iwtLXUub3Db2WtPw7Ms",
  "key18": "Qc8xwGxoBgWZacorcEmsF5SLnKjTAjTmiu2KXvaNW9abrdtugd9651FgQxa3uER8wu958eYKSMPwrvgGWMgccYt",
  "key19": "P1MYJVUiQZHwjRBEQyK9vwp7jXDKXDwue4D8zQWcf8a1NGchKRHRMsqyHFvghofxXNcVRBXhn8887uBz23MbwHU",
  "key20": "d54mH8PN8WLzqSBCCpUkqHV4xPwBnKQyzb1EBvdTfw6onspzUFszMnsQJksnWz3Ya4r1Gqod1wAs4C7mhCtETp8",
  "key21": "5PfXNPLdNSEsQTskjaprAvBp6T9J8sAx97Y2GuqhEYwvPM4K2xpaSoPw6ezTgHhmUvZHqGtWj2rCZpBmH9PF3jrK",
  "key22": "4UX3UVg8ALGxNcJDFywp7XpXgJAdiZjidnAPPXGPEhoxy71qkJvHUg2EBhHunNz262SHcKgxwVz6nrrBV2Ccw5au",
  "key23": "4rJxmRMM8grZPxUyRPonRpTz6xh9H3GGLDPvVche8CsBNT7Z41zo5V79gxPiNE4q5t2Go2K69cSiHm2Levxx4xr8",
  "key24": "28ztewrGZi4yaiqTATz93qfJKYMJqDYCSJfhG5v9nH23atgySRNvVir37PpBnyXhyuN96kSDpMoSxFbYcU7W4uog",
  "key25": "29JTsBEiqAA41EaXe9r4dcArLa2kGZJL7uSPZ1ei7tWtfMYGoW8yC8dzBzDGjWYAB4PsLXboLqo1HiZETyvvHA8y",
  "key26": "XmvMY6AHFadzTT7u7oaKvFkJe6F6ajauxd6zN7vgPK2VNhbQgzzdFzJjn38VYr2UcUhyH1eQWAtMqGRyxeqRSjH",
  "key27": "rCMmYKDFPf6Udb9LPfo3vZwJgziR6p6A21JLwfmtPnm2WwVPvv5sfUCijeTFR7xwZHLw82h7hkQXsbwT7ZuHhpn",
  "key28": "5yLbNgTLy2nYVyyTbtkBqgPKWsraqhxySspNm75cM6d1KD1WczMhinYpFMYdsDBF3g4ZbZtU2Nm2yPQrFcgPYNF4",
  "key29": "5KxuaBHBDm32cPa6jhvP9Evq9vtNkzo8msmSe6o8y4xoDskvWhsfxnsjQ2ZxhkNa66skNYpVunNhHXFhQCgxHiy5",
  "key30": "3zW6fMAfRp2wL3WdrfH1qatLhELbBCQDokCQCqwnnU4CvtF1jPUo75d15Fc4G29rKMMg23qmxxWspN3dNuTfyVd4",
  "key31": "2imieVoRjSWmUzRmdcGrU3LxM4zSWctaNgtYBsvF7ZrVN3dor1WMet7QXupyrybKeKSuiRvNjVpdg4ydH8DD5U1E",
  "key32": "2YPYfj8EPnECtQVMkdPuUCLVCyYxqNLoK8wWJTK427TXvB4CfpPsjrbefiSc6XZ4RKz7NnRHkE9ReaH3RdrQ53gq",
  "key33": "5QW8fHBFizBL9VJMn65xnBcC1zRCGmqyKYxYSH1sTVfg8P6a99wnBzXvyrr4rC7d5KLmwUxMMnFWsR9XTojkhks5",
  "key34": "5NPJHNWoYqhSpjiiD1jzHys1b7Yz7Ms7sTCY24Q9xEFXuU4jEUEnnBUjSDjETH9KrGZvkMP58tYFpWXxgrfyRXBT",
  "key35": "4JQvHF1gG8ceHKo9CMYnHsefXFgAeZYGVLBgGsVUEAPap1yh83DaC9WpgHKjwFkTaaXZifzFVtmJqhfS2w2TLv44",
  "key36": "bEst4vvBeYHBT3hi9TMoV9z4NiLvA8S2QiTZsTnDbetChwtMPb8yy6N5c59hJiUNvjr3syeo2ERwzPbSCBFdj2x",
  "key37": "4QN2dE7Sed594G8cCTFhwJPecwSuiAArDWurQH8ke8hTuuSQpYj4CQNdJtLhA6WYHFtYmgyNffGGU2ELYBaYFQgo",
  "key38": "4fLvmQBdjTnojGipGbu1imEbPX6Y3pcK5wKV74zaQQL7XjQ9S1WSs8w3yqW2pUiPr8NV9rd9LoCFMkvWGPiitjNd",
  "key39": "t8bWVBT5QjHaUxYr4DZHRAB7SP351gbWC9BvAD3vYfrC58iVTNFQNKy7cWciXuxANTT9VQWZf2RZ1GaGULqqMJU",
  "key40": "3Ls8bzLXAjXSrrZjnLeVZjumXgbRugqpWkvP3eHixeHBqi2kiqLws3CjzvcjjU5E7MVsjPyxEY6Y8FQmi7Vjt1zA",
  "key41": "2XwjXfNHXMCGi6eABVhW1rpHFQDHiuSNhv4xgBbPBbcnjoSiepvpAvU6MTESRbwebwGZfyRYrE1a148seWGsiycT",
  "key42": "3WHAmRET9ETZsHNWHqgtwVz36StbtbiByUoW38XweKzhAKqoeQqG2MjZySFMiV7g1ftwzGiMq4ujzPzkgfFdZjoz",
  "key43": "2Bg99MJsNEmrgJxTcWzqxd6aDFXpA74L7Qc2V2pgxPr2KKqmnHCe9jgoCepu2Wx4fD2SisMJYRfihYE7RgayzUm",
  "key44": "4QXcj6pwu4oBUg2J7eyMvQ8y51ympTJaomemkd2P388tMngT79BhViYT2UbXhqKJ4JAjeHrThiWmW4fHHN4baLj4",
  "key45": "5wB2KM3cNwhYNnKTCWA254gfgaM3LQ8DKSt3HKYzvyzsaR1zAyUX2WBZmTqbVXPys4zGK7w9izZgM9XHfqF4xTzJ",
  "key46": "5DJtKiy6ESfooBVEQEsan3WaPHyAmS9oveQgxvp5hGPbSGBCq9uWQXNU4guo5Z5UaouzbNRAvYZPDjphtuXB42pS",
  "key47": "5puYPTMJ9K61iGLsyaysXCi3vfxgpFpfARQNFK3r62Qkbnd3syQcdUkaXuMAgBjS9DheVByx9mTSeGA5Bbu3sYMe",
  "key48": "3cKHZXBLxynjA3wpA7s1iniCUmKu4qcU5fRR6WUe8ohN87QkfdcHqET4KXb2dWN8bH7AbUwF4EszhA5Tvg2xcSwE"
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
