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
    "3U5CcaiWkYrUwewWp6wnjDVm8dLfo3cnbTjGooN7kSGUtfJc7uXcrCVsWviaWdwF3ZBwJAnJui1skn9VCYZH2QCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TewcmwqaUq72LPejYbmpXSZyHryqU5VNPaARAQ9SW9DhzNoaUfNhgaFxhPYj3mCkwkrv9zkcErY8rXX9JX1RPuq",
  "key1": "4p7XVxo9y2ij4McWNC12F2Gw3D85o2a9kfj8mTJtRdoMr6gZKVGLUbXc4uZT9fAxvpywKpZDQxG4H7wt5jJNWbH5",
  "key2": "4cviEaucPA5Z2yByCZSzBpUoQwRJdsCFfhdRa8y1XKSuTr3seJScfEFnaE1A6VHxSEHMJxGf1otX5L7fcRE4yihE",
  "key3": "4np35qewkJduVD26E3vuJeTzdSxc3Jv1WrxYSreoyTveVK2g511Ndh4NjLq3zXWyKuo53ayVUxgoEbUXTsomRBP7",
  "key4": "83Vq8omfweFVfzAg7KBB38WNvbdRBwXxJEohjKKUowYe4H8poerr2M49ALJxbCeumAH28fJqNuTQmtRg9AqhkPB",
  "key5": "5b5NKM6ffBTSSWUiQJp65NNqyGQt9BbcDKaWkLicoZFgF4YhC8cqMWkYRcVX6Fv9pWdmU7i6cDmuBEWeJ7r7ojej",
  "key6": "4LoKEp9TabnpfamEuLeYU77K75Hf3RKELzMyEHEpURsPvni8q5Q3vcJC5GAUYxdWFwTThK1tPWk5sAtzw12YTHdK",
  "key7": "2qRDaRvugb7xSBTgLRVfTMm6rGEySvZQnQuPaDSVKT5de9Va9PVEFrHYoPpSM4kEX4sDd15FmAiZ3rhajPr1bPVT",
  "key8": "2mySg6byKY7DBimJTNJ6H3vXM4ES7ogXADCKpajYYmGH959AMWASMaprK6yYdR7Uyo53LkQWh9SpP2hsW3Z3yM9s",
  "key9": "uqxe5AnkVJsG1wRbUtGku4jHXjrs9QEZsqWY63SVwdFJpWMAbbfukjid5xHrwPW8Ebdg8kmqMu6rHtyrtmA7ecE",
  "key10": "2g6cSEThf7TcWhTZiViBs6AQKfTtJbQNoQ7Gh3E1bou6AKjEX4KN8114rb5v2zxBPCVco5fbPaRDexmeDcVKjrL7",
  "key11": "4Rn99J8467FSmTU9ubq2VxdvYjyvNFQr5bpsKacsEurLLQTBqstCuz8LQHPQDQJQpSgy3UP1EUUcwTyS5d5wJML6",
  "key12": "5SXKZyVxmkeHLDWWjTKDukxbMz6hWRqhh1DnGbbXvynmufptKvAsFZeWCm7CbMH1MSz2CeWPcCoCFJr4XmReksZt",
  "key13": "45K6ARE5tnAxqZZLkURbuGiSBJrhdFNzZwA39Hz6ghD9C3PbjZ7Ht5esFQJyjp9ZU77dyb7UQCKTuXKSdAyacJZN",
  "key14": "494geS4V7W2658WFjUAPJMhPg3EXDhjy4zvQgz8nJa81zrBHh361WAw34pUXAuDx1KvVCKacykaR7GwNUMBG2ZPJ",
  "key15": "2NJvPtFRXcpAJYkAfXNuk1x6DesSYVZHU3LbDpjGXQ7r17Sn7zc19CbWEhqKKPh6KvdqHZC3hq2x91K1TNV1ohm2",
  "key16": "5Y2PJRUZmMe8YiLW2CVq1qzHtRWuxfgvbuW8tf7BhG54DMV4Wum2V7HuJ1sKuP2MtDqYSRAsoVrkj4YPkZtFd1Gy",
  "key17": "2zTiygJiCn3TSkUMTqQ8ceyBBEr3BFrTx4Eyjv4JvxtjuyhpGHmS6QR2E1zgHuD6u8ize8ru2dnE4Ev4m3rmUrsa",
  "key18": "2BJ55KESFDbeconuenMXi774qSb3quFnDojJVMa4QGdJwipa1u3ixCAa6gGj4YarCPuHdNTAAG1Mb5vKwSeBfGHN",
  "key19": "43kCwkCo6hQ2xepGLbSRrLiEaMRVcmWuQrA55MsTQ8k7dVfcicXLtoNB3iu6QCDqHvUfzag34bv5hfzB9FNP4jbc",
  "key20": "39cQBYw5SkkwCzn2cCbyY7azRTSxdPdprc69MSce3V6uZ3bWADehPvxA17cGdZVuoH3hSqkPowF4NXiEd7dC4pUa",
  "key21": "3C6MhyebaAWzSEhpuaw68L1rXiwcEBPnjQNgBngpEZNVoLKmfWobn7Qoezt8F9ukTN6wco3Lyb2DULkMV43eKbkw",
  "key22": "5xo7hbeKbGZ9BaJ1Reqs49YEHedV9K5acQqFXpgQZF7zGamg2s6GsbLurR9ccEeVHPxj1zXkz823tvEZf7ThQGPJ",
  "key23": "2p6ZehXL1SJaKNsKfgCF82sBxBkdyQfMxFfJLhJ2euGFoZXx9WZ6RbJH7WE3conk7mW4D8AVkT73zrt5kswSYv8t",
  "key24": "KT7iAaA13qPkNZ7jZJNM6QeUZXg5QMF7gzapU6bN9eH2Bm2rr7z1b5iukeKvjvgGzxN7zdrmG3rSisJuWBUzLqF",
  "key25": "3zVBDEjTTKXhm6EJcDKcqXbN1qKTxZkVYtvN2Abv1EXypiG6toJDeEjPmNfzKj5VPLV4RtGput82nViMSsgMPqPy",
  "key26": "p8SK4qQWtAraGHAX1fgWrC5poKLCoQMdW7x2vueGfA6QAYEDcPvZVYS6Atj2eM7KUCQ6Rt9dHQgNuhpkJDYwsjd",
  "key27": "d2rv2M677HYMmTVAqfHS82VZvoWi1fahRZYWTCLv1CwF6rdKGo5CPQX4xGbzjkSX7Wj313dgVhhvVBjBnFS9yNv",
  "key28": "Xw8usL8X1hxVuUQjJNNxPhPJbgoyWPHW1niRuctVNAW5tviKoEWoedjtoAuN4qYxWvJYqe7yuZhqyJiyu9FRYGy",
  "key29": "21ddTuQkpUDL1RwiHEXDm6SejdL1osyHG12kWkL8x5t86rMYHbFCWYnfyxra6ELcjRcEe64nDXw9doVjiUTnJuXX",
  "key30": "48mUBwQyk2bviPtfiGZmVEEcXWgGeShBpX7bbLrnKbUnSpte79HS4ukoEWrdxAJkgkn8iGNNKRvn74nUJeTghiwF",
  "key31": "5RP3zfQufcWqktKxNCGyfZ6v5JwrFKRD1CofqRt8LoSg1PcwLHnBMHYMra8RE3TX89UHJGzmLtTQ85jSovHeA7F4",
  "key32": "M2esp2guiTfm7p4LsfLLEM3NSRhVFp6H5xCTDd9uuApnAQp8Mk2bHjUr2Ye1AKMMp7NMemTmXM9WLKSrQJz2Xwm",
  "key33": "3eCdsYTR78hpwof3RJJA76fMHUE3YPx89KYeAV2231TZSkSiW3NxFg4CztwCN5d6ZR7QENf5JsjCnoWJ88nrPYuf",
  "key34": "3Uvgry7MS2sPXqsTERKUxzuGoQKwEUbggcQBFfcB8rHPK4UGq5wSeXyq4tFNoHdFrqMesfvHNKpfcyPtNapsp2UD",
  "key35": "2fjePw5ULupv1nWdg2V9G3FQ18xBWWLZ2sVhnqCdgdYhx9KcvdFpj1eLPXRpntpDoyWWx9UHbz7mi6v4nF3Wbep7",
  "key36": "KFmZpgJov8cJgr1nZQNwwrbJbSTeYPcL79yXUWE9acoFis6oUSwXPm436cohfYGpobocamsCLPAhurcghiTy96W",
  "key37": "2da8S8maJWMkh5qG4RcV41XqceKaRnPNcqB7RxH3qxWhRSXK7gyfVsmH1c7vPoxEfsf8WFaBrUG3uPWwogBWdXEF",
  "key38": "2c4zVcW24uaRS6nRtUxFVbyvtmmCk8TeXDkYQLWL9EgsQPo2VDGqcFCeDsipx2sWF9nGCH8oiZ3r7ndgCLeCxjxh",
  "key39": "5ktfrvpMPGEdEh1hv7VcJePji8GYyah3KAWzGr7TF6iBnXSChjPqNPe54AAEpGoCNX2Vvx6DPhyoDYfUU4hLnTeH",
  "key40": "43AECRmFNF79g3hn4quEZckVPdyL4bd8ER8y9ETGTuP8VdVHsFb6ceZC6Pq9CD5BaNcLEBJgppCFFRJ9zHqScsa5",
  "key41": "45xjh5dSdEketathGk13Nn45hoyF4mh2tf31MqTnCTh98sW32iAcEQVuf68QHb29k6VyQV6wsGj63ozps6WsbFjo",
  "key42": "26G8EmHNRGGUzrqV4E6KxNqWCVuVtgcgjidG6V2ZuvUiJo6yvEM9cZRXZ1h62KtXkrXp2147Kyz7XQPyDVSsYGwf",
  "key43": "h6wa8ZnKqwB5pkLc5uZbd6XXEztXcDeemxw3cYisdBR4UpjLis52UHpMDY9FEAUawgNsVHz29cxNJKSmomcLgbj",
  "key44": "hfH5XEvkr8pRBuFtY6u9BGicPspu8mg3MhJYvq6fExFtmgaxXQMQe5TaguBpRCQcmrwdE62w7f6fBTbF6qNcHRQ",
  "key45": "3WCM9zy5XagXpydvH92PNAfEianM3Psn7brn58NdDHywMQr2G5F5RiCSbq4EVpb6a5oQGWVPtfqY5ufPhuFVmKgX",
  "key46": "4aYq3zTCH1aSLcew5vs8cVzEGtuVKbXyS34mkYDeubeK7Hv8YWmhSVUNke8Q5dZnyAJAbiW8PQLb4VD5Cu6MpG2K",
  "key47": "56Sx2UfyTmkQq8eCsJkEcZx1Xfh8Jr8FAZckn6vDRmbngGDU7kp9PpAzbSuZhcMNpwPC85AGZqAHkP4CMFBD6opb",
  "key48": "37MG8KhejUfRFDqomrMmCWu7TAuo1AYFBhF34pfuPFnMQRtv7GhHzbRnNyZez7vrUVESH6X3XPYy97PZ7k6sPLx6"
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
