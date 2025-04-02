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
    "3wA3BjFeBFSwEE4JxNjhkd1RmuUd1fc1CdFuzCzkiuDEPGMRWutFvxBKjG4e48GAX1ns3bTcs9FCDZVuHy2bP57V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59J8bRib62J8akpC6LR6KGnpA4pCFeVeGzF37eZ7txfnM2J7qGTn1JvEhnDz2ALiUTwjnAg8CB4CQuNQEaBzabyb",
  "key1": "3eMEjC7W85uiB2TguciahqGTJ1imNxXNzQRWpivoTfdux3zDGuH99su6s7hCvrLmWviwU4x6evTyyCCUnPYKJxRh",
  "key2": "53zBuuLEhf9gqTE8ppNeXMc6jnDvGKJ9dsXJCrpK7Hy9v1PTm2TGQmfQK54P6aNvV1JB2Dy5QE2BB4SYyCiQTqDZ",
  "key3": "49cU8CsPULSYos6M1QsaSJFQTcx6kBGzsMQv3Rj3rZWeMfSWddGWk1WQgAUD5bpEiFLegMwpuavYPoE2k8S3ojMi",
  "key4": "USXvppp2kyxRiLiTAjCnws7GeCNdZ2FUfbcCrRJ8hQZrR1D55nVPozAtCBYQwUreahuQoCdFybgpUgRPs7s9WHx",
  "key5": "4EAJLvBhrBCk1ru7hsg8WG5msEpakfZaDEUA5qxrhvXjhMqWbvBr5gPFCPbCKTZuCwyWmHmEPA3eNE1Xp5FZPPRB",
  "key6": "qPnS9ZafNs2Tdto3eBtNbSBYb7cwCW14DBeLsXuM8XR8H7PWdxmKwa6Sqi3gCzrPm555RuRVqGLzFphQ1862Rhp",
  "key7": "4TKrnRzeysUDAV7f33j9FdUJtEJaDeTugpxByr6fBmvMiJASXc1KT3DmhmQWK3n3ZdTytDnHYPZPndiRTDXkR1fU",
  "key8": "5BoyH6e5pLpFLAL7gobp5Sy2hK6aUerSPhs8maqKN4seewcYP2pyMDP2XwcsKrkotnG1bDJLkG3UtgcAShc4Sr4k",
  "key9": "4s2RS2VRExVqAQXvzdSEDewMUmtqaqoxunwpLz78aJdPTsr7XpQAKBAKjozULye5B7fBCTujxLnj66ec9AuN2uyc",
  "key10": "2S7vmbHBa29DqiXZFL3yXCV2jcBoV6fCNGNaVdEUVRfjhNuaoXeqz6wa3wq6ZSPEeeTJ3aadSSRqq7JnmZK3qwYN",
  "key11": "4H5SQGPfxhu9YCa3CztA3X3yJKa9G4T35buZpWpnfQeGWbcCmxiAyx1uhgbpLSvCyzzwzHQSQPCxCphun4fH9m3n",
  "key12": "4Z4Nxj6NfmvhHMrMfeii1dpo6kvq7yG7CeaD4HsmxeeahwSiCrVhwSgs89GPRTPzeqeeYqKcQfJQk1mwmCUK3r9g",
  "key13": "5SmGiszSPr36qxq3VXzygoRG5rQF6p9zE5JcnztP72RQ6B8HunwB9cABdaPpGeWCcGepbAtswHuwTW6aqYgzLyGX",
  "key14": "4oHJYTRJEcreUzYQpWHPGcd8tLkCW6NXrojkCDxtuD3dW4bp1WYbTL6bD6WcYjZZdDWPZpzJjB6GiciosMgYS5ch",
  "key15": "5c15V93kxnPse4fQ2rKVWi1MvrR87azjCe7oq423zyUP9VpVt27sD5AarcEJ64duvmEjiLMns4oFsscJnUSDDe6J",
  "key16": "4dEv1Gv1mymDuUt4fWYDUQ8hTLa9LjUqL73e4LTpq3JyXjQayp9H1fEiETAfGxuDwG4jVZp2jmudxkpzRYCMLdPF",
  "key17": "2GeUuZGyGMLzwGNQu3DktG1tmAYyXkDHChLiuMaMZgGc77cWw3TzsgvcPGm3qjQuya5NkAtWxSMkv6xKUpg2BRYQ",
  "key18": "2REZsKC5vJt29f3nLk5mECSm9AkVkggSM2ZPGZf2sgVLL9VwSF5WTV8mecCPgZM2fSnxCNmpYttqrZWcXhbMjxQQ",
  "key19": "2TXUaz8a3RDMJcmoG9jh4Q8tJXhpkDKzEbkr1CYREZitd1F4GcFf5t4kePMLqdmd2U3NMwcZdF1tiBAQLjFqeTZb",
  "key20": "3c8Qgs3rbEgRZtckC9Lu8CKJxUJr9zVJ9daSfvZyK8amozVon477L3edihUyNTFewnLTN5Kipsv7r41HwSS4sUXo",
  "key21": "5ce8k8RtyjpGf2oMfwLFZFPTZMWMWisw1LPWFa7pZzaque989Hw8Ue3WkCLjmA34u8oYTvKtFnWKAn41SrnHFoR1",
  "key22": "wjrnuKG4pFfdxYbD79Dk3bTkKn3x4jyhyaLNJMRUkfF2coKu33nR4eFSSUgmZJspkoXjQ7CB4yQ9xJdH8Em7aXE",
  "key23": "oTyWnFcUSU5NwBV1uH1LTAUTwwgrB8R7Ck5zSynMhom88Z9mCYLe3bNLyeWrY7JywcAhrv1YSQ5iZF3cHKmc3Jv",
  "key24": "3hHoQ8NiYQz8USJSbAj2HGkKmzAn5Qw7z1YyxkB6Xu8UXJQR98qR2BmqPkq9wL4vLqEAbUdjHrwAw4cD5FaofxtX",
  "key25": "62jFVgKeF1Z1my3QTyyn8qS4sUqUh7YMmDH3eppLZi43zXRhZ7DPtVrRGj9ffSrgNjhDrzACZSdb8TZJBx9LZ6ee",
  "key26": "5a3pH4b79Trr7AUGua1QzHzeMnL1RdRp5fFPQeZu9bnfQgncPeHLQ4qLrwaeJ2teWV4T2Dyqg6HF5qgqJTm7NzE3",
  "key27": "26es3MBEP2DBPdZVmeaZHUd35QqHZb8GLkV5msFzUqAb1Fo18aRTPUB37WQMnNP6jmBcdx3EQnafmku5w3Vvx4CT",
  "key28": "2g561RgdW61c2tExRM5biWKAqJE3gxux4qbeRYFDkrt9dYiBQRJHAjYPGcHzLmZAx5Gj48DzzxRTHC35sM4eP9oT",
  "key29": "3h37KChmYL4SCqbHpQ6JJai89zi5CLEN3X9AQsho9XoCvCd1op1PLyYZ7ntH8aNotwEfxmTeZ2UzURh3gkxVkgss",
  "key30": "4ECPzYoQCnq34468KhyaBW6sy1vAysiTrxQQqoNaTZeHHGo2xwx29YDeDd6ygZDhsYRvycRVJ66zKQS162RVhWuk",
  "key31": "3L6BukDAsrBnRwiEf7Qa4q1oUuMHNMXLr66mSMM1AoCvH7zjDZ7RFp6BoeRwUkVgBysGZr7kH27tchqNQHaXq8zA",
  "key32": "q5eZu5YZdGnk4x7CprrPGH6nwfA4pArbo2yKHENe2TeaAuBsdn1Xf5FBc2BfEkXYf9em2oD6RoyP4exVTh44kUs",
  "key33": "e8J3YCLK7Ar299UdwaiGgNULb3MwzcmuL2iGLXBgyCyNZjE7CQeNaEq8f4ZLcUpDv5Nm232Qm7UhL324iTccgSB",
  "key34": "ZrrDHeMtAxUvDpLFGw82w3JqpmnojARkApZkPgWfWFT6k54m3U2SyxYYy51w8UzehbzuuexCZzqRdLJLQw5VN4p",
  "key35": "4agu4PcBRLeYFREUuQMvqsfn2mBuYT2jNU1bAq8nWG9ToYYLgqiRa69StKqcgeqkkW1rHDEjhmVtKtCcVd8iY7uc",
  "key36": "2D4bWmpjXw2sXuoWBxK1FuHH2CEzfZmVMwYyycFZAL18sNSJCk344yp6huZBc9bfgWQXDix7mhhSemsof8CKRwBb",
  "key37": "46J7312nveJk7Q93GnwgPS9KE1LyKZx9vVjoHUhaZRRQUXTid8DTgNZucBHjt64XVad4jhAgRthzSQwEghqHkGJx",
  "key38": "2KLhLAMmE9o37F5Eoe3hLQ63BkxNXwaCbAwZiT7efxeRF6YUcitz5ZgrVMNM35AFJH6SxD14sVu8TWH5FNmKfmhi",
  "key39": "22p8Zh2zAAd9h9vVQDp4qFR5u1kmjc8MgLW7gnP6p6HXsLTFJqyLZ7yPZFcCbuhvonAUfPVeYVwU5q1jhBE8JmXj",
  "key40": "5MwMjgJRsZzSvGbm2R6BgTCnHbute4Eg6AtsJUocECvj35U1Jagrw8fZeR9qPefESEArnWKBbVzHzLyYKd2cAbJB",
  "key41": "2dXxFn6rqxmRh1DotutATH9ao9gXmGUkF8pwj59dkB7qoaRzYCYxfdk34hiuN849xZimwfy8gV4cjPkUg4yPHGrM",
  "key42": "2jKewYKsbUGcZ4G1zejxcNfM2nQe6RaTULM24AXo7M1Lotgw1wxDXWYsk4f4wGfKck633ZTKzDrEy59ee1qf4jp6",
  "key43": "5CQtGJtVcvxLwtKggtifUkfBQAb6bC3h7i6LujKJZAWa34WbmuZZBohwQ9dMuFv1vszbWXDprgrRrF8f1Zmv3qyn",
  "key44": "23PxhehyQG6e11biwQUTEQvDRE6xDoxpoqa65uCeYAH3S9RzKkDg4JPiRSYtf4Pvq6ftThR7bTdXtavUnaedji9k",
  "key45": "2wXTaBmytbXV69znh9wVnGu514mL8PGkpYaqoyBxKNTe9aN4DCCVi2RJkoS7n7eKZmhhH7Zt27TRwmjK6PXcL2bK",
  "key46": "2AGbJ5NZz72HLaLnk4thVFwJTVCacvsRAEvYWo8KbSqePhpFhWacpfmTLP5dYkNse8DZ7vG9tude4ktwkUne49m",
  "key47": "5Rw4LabR62Gh93JY8zvBDGnSzUngdSj6jsGe2iNbigD6G1kUv2ZXnm8zYFKenkMLfAtum3nd9ZwpoZifP4jG6TPA",
  "key48": "4WQqH8UB4vbkYiDXYrtV7pg24FQn8oeYsTTDUW2GcsKnxD7wgcWG92xyN6uhEpvHR6pZaayJuhf52btcBviFAwQB",
  "key49": "35Q3exxH9o6pms8av5fct34biEenhaXinxyaCHpcACbAegonpFJX5uJZ2LgF7i5HeocKVBkxgwq4D647KKQT4dQ9"
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
