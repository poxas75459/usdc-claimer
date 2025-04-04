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
    "rfwuBqXQ1grJS58sfxijQAmw9UhLWSga3bxawxbHQdR7WYjHo4eXcNk1Qid7MfacqySwNJKVPPrMUp4RnUHKTKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e4JKrRJZBKCZKYLoAFQHmyvL3bEU3m12xKYf3dTMa1CMQChPT44wPFDctSTGfAd8jcWnZjBePHcjCAmfazEDThL",
  "key1": "hFUtiPU3Ckbq3yHo8VaQLLLwwShD3UXKbswazq9JcB8ACWezsyBEz2c5RVrovZK2xcS5xzE7dzEjohXDtmttagA",
  "key2": "9bYRhQAk8sEMuctj7c9rQPyjzP81dSo47X9GZpAgpbSTvAP8p5DKpGMUJXaoGvyz3st21LiKRg1FgtK5bk9HPEo",
  "key3": "5E6Vz7UL49eEGh9ktw6JHxiW7hHxB8msjt42atNYBMJFonBzLgsGnLauq3LHNgwaBtjEXyLwemqhuc2va9EgPVMF",
  "key4": "62Fyen6p1TxK4BcECgTZcSbHcfah5Wycqgo4q4GxETsFPHAC72yUNs7NT8Pr2chfpnhbCRngQNAGKqL7zDWitbJu",
  "key5": "5bdKoJfpD89Co2Jdk1Wo4WtZJJjjrQXQNHhWkpnJuABZuDYTc1pR2pKH5DB2br9pqRgBWgFn5Y1sT4gwu1UJpSAU",
  "key6": "2T1yiPnEG7YKbL1yKD7dxRRkBDZ3Ea3iVUjuo89xLMPA4KX8ykWuBvgEgUzCeQfqeGq1sn5Vhours8k4PndQqy1w",
  "key7": "2mPc2aG7Wj75pWVAmKLUoNcwaLs89vtdCNJ8RQ4Y2TJEkeERJmPbuogUhgW8RmCKcFy8qm6h8YVJpjc5X3m2btgH",
  "key8": "5QmGDiDdmLeavbFUE8zujtzkFT99LARwrv19gWXnjam4dcdUgCbJfeQP1onrLML7hHgPuHmeSRzitpAw5C7USyfm",
  "key9": "5X1fudtwu5XPj63EjeYwph1cNK9vBZJugZsyJA5xWkD2W6fH2LYyDsjnFomdbfqZUFzSBcq7upbyss4gjaauZFpR",
  "key10": "oe62X1kSsVCurmiAbe9VBKcuxWNEkpjCPxDF3sbdxTNRiaZmhNydoyzZbdmCBHpF7jPv5Hgx45g5C546fJA8XZu",
  "key11": "3V6YHZVWcZKm68hVjzcH4YeyKhQQsVHtNYhDSjTBEJN4ijT3J5Cak5qH1ugHY8BMQvSNNWZ7LjGrrpjJEYfk3aKe",
  "key12": "5dzoZJ4T1djUkqvni9wUmV8zSTi8KcadtWMpmWypyCZVHr4Hk88ghrnjTrfSHm8bxY6dLKMrvTZi7ArRc6R6Mygt",
  "key13": "3dBj6KdGksBFRvf7BwQktbtnwQTwCAS6cziSRXv6gp4X4buCL83baEtCnxU5PxYcgp2qNnViCN1asmrZDBHdojt5",
  "key14": "4VQcLMKHYi738FkEPkmSgeC8c8DNrq4dkKEehcRAiG1DpE4qX9Qe5pkk1a8wuxY4XyqAhQMLTijPKVebMUfNqwm5",
  "key15": "4CdSRvkG7eV4pB7yiJr5DavBQsP47RRMs6EBLXoTbp933HFGQHgEJiRMkJaAzfo6ZAkemHJBS5WpxcDkxvib7oxe",
  "key16": "2ZsmHqWFBrrfdpktGfb1Hkf7CPLPRWHPxvmbU5nEGMAqBzpL8hLEJ2StigvY6jswPbbQU7vpo4LF64KVBN8jKGDL",
  "key17": "29dw3U25sEBqekaiGmtuQRgnKYcq9RkNExsgZjh67UUqTb1QFY7YT7Zk11XtRcf5iXrz7gNCvt5y4NTj4s2mzuNx",
  "key18": "rehhiSeDMM761L7wfRQ7NoCb6hswAZtmEBZPYktV5SNiwMp5rmRE6SFnrxRjz5SMF7wGuhzKRKfsubtrWDfRbWi",
  "key19": "3quZZqGDAihpxicH6wj8Fdu8hCppdamZkeR8kJD2tfjuYmkPsKwDyyts8AFNQMs6NKEW2Q3mFrHw7iNZ9KRdcbwp",
  "key20": "4jdyNW8QTCBN6rpm4qdMf5CGq1onYJvngehKfeQ9aL2nRT1Xw7KmmB6smgU7aCmtJHLNdYGz4cBAVe4h9CiHBT9Q",
  "key21": "49CiCCcHHVgwFwFKN1nAEyodjvhnDGwSheb7TnDt3AHoiQEcgn6jsto5ZfvZXEuwrEci2K5ANpxnZDNVqChfFNft",
  "key22": "5SFJDMqUytC7gPPEbk1Ww37ZfSNW5f8ZGd52ydr3UmjBBLWdzXXdgHtyxhGGb7KjjhCFGH6vEpPhySot7HL9xjTP",
  "key23": "K9WYJLpuAnztnWb7vNeTxx4dEKYfUKnPZUPvPSBFFFdPB1E51aMmvWSZ9YTrRf99EViWk5aCKLGKgZ5nM5KkDT7",
  "key24": "3wAhB2Fk3wazGkmwi9pAffmUy3sqmXWZujFs7ombdyMGhQ8FMAcVgGBceFMp2CT88tzwSYE9yKnV3kCR5fxV42py",
  "key25": "5xaQkkUxDeLKAFhaRtXaevAXdVJCYTjEQaMx3TvRCpb1v2cHkiS8XbkwP6m1hf6AEXxxyVLwk67yE5svrHYR2pe8",
  "key26": "5soRPVmdfxdzjbB3NQTbi9Bgin1FRGRzjXgch3BQjJD7rnY6VStZjr7PTagtT3ZN4ZXa5cDT33fuYF7H5gmyNvBP",
  "key27": "43hsx8qx6r7ZtBw7CJiMZEmawWUj611GSKVQHZia5pAgP8nup5Dt8A7tL7TdRRXH1JPqamk6git5q2AMUPZ7oeoK",
  "key28": "2PbfrKcsNAimK7SMQ4eUf5JpmxvdMXpfh9epLSVccUcx74b1igBGg3tWpLUGkZp9sFQnVrExS1HRwZUb6LVFjgf1"
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
