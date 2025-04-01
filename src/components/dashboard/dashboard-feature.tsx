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
    "5jLdb3vsa2C9esp28otwrzmQqVhoUjeAKH4KPDuwWJsesfbyH8xk5cnKeWXci6c8DzLTsf9h92kV8JEq9LJv6iSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUWhUtLW8nwFBKrQycD6WeqCvpRyFwDtaLs5zHS6S9bzHPdSWjxyZyRyxknGD8W8hn5dtqFhTD669b8zNFshaJ5",
  "key1": "5qnQGqmciSMRLLoTUc6enJYnBMtEZWX5c5x6wc3gWZtDK8GnuisemnkmZQGBKCi1XWzaRy5d2x1K9z2txRPcqNMq",
  "key2": "5wNid6x3dbNYCJMJYhDkPDzkXSUM456THJ4QM2HjbuDLNfGAYadNY7umAFwSe2iEuNnySXdvoVTaQcYiMZTXmryt",
  "key3": "BEmAhVdzHSjQsqgVGEyAHGhxiDw2iAEck8fGGA9praH6CnGPw4KoXanD7rTV8cHhk5tibnet9QnePhht8CTHmf6",
  "key4": "2yiN4q3KnLZ3qshUjmBAV9oJJ6S1umTtFrgpsrnwrsBWoFXLmyMPcnffByYtUNeLuUZ41irt59qqJmNu4niDmG6o",
  "key5": "2wND8mmS2snLGfQQL439jwN1PwnLN13pAoQqZNZMjf4KDmHAxfTxgTcixZNkKSiD5ARKMcLKLeim7DmefpgtiXeL",
  "key6": "42d61vWdvmkHdoR9AQGSnjjuTYYFUgD4iLw5iBC8YZZ1Nu5chiDyd8w4td2PQFeLafVvDMWMYfp35DxVpvBdJyah",
  "key7": "3CNWi33yDS7uGEARRYtBhFYtQTiyt9vJWLW9qzxLpzHqnPGWnH6JLQFMKAFhRjsxSAcQhtxdU3wqDtVWfJDsazY9",
  "key8": "4R7Q6hpvVErYjuqiTB14Z5ouPh3xyw1nMTuDKXsZbijKdf2ER2sQPPzav6UKgXQ6ydgSMNTED9Pt2KVtJeHGiMem",
  "key9": "wG6s6Xpa2YjfUrz2gBdXR2HLz8krUWWwtXSCz1K1WXKJkptkB8rPF6skFWR25avsyW6nmCeMjW6RqfwDzSocY5D",
  "key10": "2DMfqZd5PNyGVc2VPZ3xJA4RdZm8QnP5qpf7K7uzc18AG6AS2y7h98QU8RTecmxgNv1iSF7RsoLimkta2zYiG9Gh",
  "key11": "51tqzsZ4KGMNT1mkyC7eda7fkCD7LNAFrB6StTaGF8Fxizrw7ErvKPapKFMwvLCPEYk7TRCynS5epYrmJgxtHaWa",
  "key12": "42KgFsyCPDh3oqUfWJHHdaGKYGbVHoz7tH3h2LFGEgkeyD4jkUypokK5jcj2HDcJ5veStk4719BRoXHx8jx8LFUe",
  "key13": "miHbsynBAcwdka4D3Z5ByVi3DCCLMh5cm5zp89HGBJHe7QVSQP5yhEKxDnRNwakC4AJreFudptnHBmr4hr1jxw7",
  "key14": "5kqvvjxXb8PyFLk6tTGHpXciJL9ViUbKxx3VY2Z3QufA1xDmnhqDZu2dHgdmUQPJnpAm8KGG2L4CbyH5qMU14ifj",
  "key15": "2R3EBh1KBu5pYGxb69FNVjLhppNbDRxt997o6BtfoZD7i2CVeLcrCqksZLXYEgM2iY8SpTjs4aocEJXDYk3RU2J7",
  "key16": "59eWJKgDuDJqDK4q3VBTsUC95VMu1c9CDHXvCKZpMniNr6CeQ6Q3D7GH9kXT5bQ3rCiKEMC4obEkzBcxcXSf9rMn",
  "key17": "5svWubVpfqb1umhP7GbXYghxhkGBc89E4FvhaNaaiPr95ssTWyVm93ZEXUdpyXHFVedzAT5FPpbtUBFktkurgJWV",
  "key18": "4pnSCQgy9mdEqFCCPPVaFGV2g2TCPy8ReaSR4HJ7d1C39xEPVG2QnL74iGj2mtDaNPH1vYtYJp45oKkwbodKWVRy",
  "key19": "5Rh2ASmbohqZsDRqxKG7sC2bZp48E1PnPacQoyLrhCt9Nrt6MN2ZVizvFaWjJFAEW1sKbuXykwQzgo6xwz5fMDRq",
  "key20": "36XwMk4MR9ABJdm3PVgDrHr3yDPuoj2c6D77nkBrnJHummqYTe9DvYouQyjhp235BDySV3knZtDHogg6E3WGZxYq",
  "key21": "5ep3j4QgvRWhB15488LxBNeUrqVGZmZMxMUGriv3MziQ2vc6dbHf7ARRWCNuTUt8RWeDJJVe4Sof39mHL8pi2eu8",
  "key22": "4Hz4BosUNhxJjbqZhvjrs6WWY7AGDiJg3WjpTWJysWQMWNK3TzgjE7UzEnvvRkNusTqv2ZCjqpCxwVm1e9Mj53rW",
  "key23": "4dHSAxUw5nC2J4rJjjmeDV624yV2cGrKU1a41MEj5VhU2iME7bttmDKt56uC5YejVMA3hav8eRUvkV4tn2NXxVw",
  "key24": "2brZzbpSgkggcZj6Cjg2oeKo7hxFfXv954ZT6pidycWTUxP54DmBtY7VgL5yEQXsRxds6bgSF71GXgw1cxEKVU4H",
  "key25": "2JS38amRVuNCnaX4DQ9kPm3LifLE9ZUrKdFjvbPFyPcYQTciK6cJuq6BrpMqzjb2zDov8v1XmU7YcZVNoFVdHNLu",
  "key26": "2J6Dr8sjWqUPPhVPqwrwWR5hhCnf29dkQCasJrDyRjdrait4ErQnaCgKN7m4PT2PTUxvWxJsiqTbakikSGjRH5iV",
  "key27": "4KPzgYeUGZJq4bpvFYWJMtjjsQYQB5wkdTFqGhrGBK4cexEKCoGjG19Y5px4HqA4AKBRVhCpHPd8W7ZaekBsaAw9",
  "key28": "3phYESha8BAKHwjjS5CGNqmvc7ZFnB6vNxvHMpnM8fVVDM9pVbTYh9A671NHShsqQH3EeHQer4BtSv37fwQbhaMg",
  "key29": "37ATPuuq3EFWk8RL1eSFzkzCZcYEbAgCK1NhMqy6ooVt8sxCyySrvGr79P8VFN7d29fLFsca52aFDiJmbojZtBHv",
  "key30": "64kHsRYBNnweufoaXG2b2hy7EZRAwoVgX2oQxiwHwhRBQEJDfmsekwm3Si4XBimbmU1USyjqG34KZd6TkNxo5G6B",
  "key31": "4T1pZHAAMHFdo7G9veMTpRanivwp3pkYF7pV8hVeFNecGawZsz73suP2XgNRbEN1U1GL59DrYAXyLmH4dDiEkhDo",
  "key32": "2wEmUKQMD26Eme7TcHsZ7VvV9eaeUTEDdjHNduCfUNqPJ8adLwKuN18PVtUDXPcLSqAtbea5Xz51vAFocWsCwMRb",
  "key33": "bRqXEcXFVR5QLwbdAWyLbTrJYEdQhAi36XFnVuopctBGtH9bXpUKQNaEWSBH3wxv88LQrw4wDYVbE9JybCi18hj",
  "key34": "64hJbDoPuv7e4zzQma58UAQBWF2W2ZyqrZkLqitnTD2fizqLuVZQrLgwEk5ikYqmxNjzsX4Gdm58owLy6qERncma",
  "key35": "3u1aWaKxxqozoBimFSgN9qKYMJU9EhkHtHN9xVqstFVDeiVEa3QoSsJ6f9pg5myHH9UszTBENNZh7bymCvyve59b",
  "key36": "3nYAS87q17kKmoCzGKoafpup1ZF6kqueoBe9xmtLY4eANNQFfjRrmHpPHmkgKnWSwhhcky3d22GuebQ9Yfp68eX4",
  "key37": "2BMTqCwKMTu5KaTU3vUgp7eU8qztRu1ngnL4ETLidGJcdTb3eiitJBjLN3ZV7kKcZUgD8UXc1VExsBTkjTUCLrx",
  "key38": "2nrWMJghG2zzkgosFj2vARza4z84mLHtRmua4ZWR8pvHuAKr7q4D3EtraVnjC9urmPp7z4gS1bo1hfknD9RJ7a3H",
  "key39": "2kf9qc2HwtkgKQdMGJ2QBAXTHLvP7Y31nVyJNVRssaaye933r52Fpw1Vn7uiyEzMdWVHf2qTYE3xtaoDDH65qDSw",
  "key40": "3ze3Rths1nE7Do1fhc5jZyuSsY2vQLZfnKMRCinyku9JkVEJvmaoEyoa3j8znQJpVJQ6YjuGT5xZSygnGzZYppJi",
  "key41": "5wC6Mcfn3FcD3gCvAiwNxWbkpHsuyhxzgmM72tZXrmUoVhV7Mxnyn1AW3anWRjdBeXQ23LYHFYc7p44d5n8xSPao",
  "key42": "eBSvt6nbEKiZmweNnf1uXJmvaEEdWBqs2bjfbR9GgkyeiuRNtVyFXf3dv8P6baRQfaATMFA1XX1C2Bg9ukmm8pt",
  "key43": "67P4V4zjdK6X8wyYPC9nzqGiuk49y7PGPF9TLZmrfPM2Bp9h5LsAoXDZXErZ34znE3cnM1B2kURqczwkHHHF3hGK",
  "key44": "4B76Z9ZnBwTYVBT9LXTMWhbtUJwhkWm6S8FE4FBwKfkRjUiVCeSYGahLUC1QutK6eTGcMXbTfbxXKkPuV6YLSaoL",
  "key45": "2nPkxHR5G8Q1bEDmCCSTUdAgRagfT1HZMpeTx8gKW1Mb2PwgCG2Ypaj7Ne6ePMUfenhk3xafZcCFqfAnwNEdfXiZ",
  "key46": "2R86X7U8Jf4ek7jQPS6wWUYMWjMZxANnavZX3uXP4kXmukKFNWsCzhTyEr9ZmmkaB1HjRJciAzeKNtnTcdCfvTRZ",
  "key47": "3GsnGzbNP2vbRn4Qzp4CL8rwk354PfnnzZtZdoCcEv35vBgPQ8dDR42pjeR7UYTbnt8Za3TSKzXPnEH8vk6rBjzM",
  "key48": "56mRBXrvNfvvbqVbDTv9uTu4peKcxxdGdY9ZW7EsL4p6LSEMtZhH5Bb5B5Tg7i22Jarz2xnHdS8Xowdoi3vHz2hv",
  "key49": "4X4PPPFphmWUZLaK13y1eMTosgjAbgucRnEGGwZKKmvf3GSHeK4pqtQCbZh2p7mvXi4wNmeH82Ht9wvYHvTiimtj"
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
