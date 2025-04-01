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
    "4v8CiD1Je13QEkMo1QMbVt489kNj2KkTfEFTn7X8j8QVfyPFEdsm2W8rp4ro5LQY3MdZMma9V3a6ju1LkCGgmkUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kT4geVWqh4nsAPEEzkd59S5Khrb1MiDiUZGV2yqxgafXWkeNfm56DNtrgaPeF3KHmJ452Rxgw8WXn19EMxDjtCr",
  "key1": "5Lg4bbn1WuV68brfBnfETFGX87Z72CD3AzvqYWGeX17Vvn2Qdv7PS13zAuaT5T14FnDJeeBtvwNCMp9N1FTJQwAS",
  "key2": "uQwD8weN7RPhx7hKrzgA5WXVaW64FqADyeSaccz1QgRqf8VmqqJR4TLvd4i7nUbCd7MvL29w9ZK1QveHve3y8Lg",
  "key3": "3Wr4vDXKcpxdug5Y2vqpQaquhu64omR5aifzhP5BLc1NK17KKhGvQdQALd4A9pTAN1XhXmAuDZii2N89up7Z7JjA",
  "key4": "4p2Ps3PPVzF6xBEa6UXgYWoh9hp4bs8LMfAxcPUTZ7299CRs1r3QfdJAHvUeWJy1qaw1ZSsmUp6UqhiNqefYNTur",
  "key5": "23tB1eaLuDi7mAwMQokBuxN5EancfV2J3EvsGBpGxASfLb68SPMUbPhBxrAXM551nagmvURgkKnybPLNf7a2z8ED",
  "key6": "5NzGW2bvZA9cbA5zAwVxG4g9BjfcEfE42UGqueJA8h94wyzVoHyq5up2isn4cMRTPPsUL2CeXWt5aL5qXCJn2xpY",
  "key7": "9oSsDEszoNfRWasc7ksq4pm852fG8pXA8Z6BzqXwKjyUM6HGJJb1aWajyZpPXXDBqmhtQ3P8KL4svFAnZE9dkPu",
  "key8": "2cm4xSmZf35oRS5mb5zERgUGbJBBGpqJzfhK4qHR4HFUiUZtUC5y6PnvjZMwGd4AsbUymSxHoFoyACGyhWTz7xBZ",
  "key9": "4ng2ioGrqhztMT6z4pLBCxuYKYfaVvc5UM4dMq3Nd1bh1BUH9CJN35DhiVdcuCyeYSneCnu3Wmaron3caVGQV1BZ",
  "key10": "3PL7wUbNJVseAVL5WHpUBJoneD8bEuoXCoi96VDHWP59P8L6G1zmRUaeQ5z7fe2xTZCymuzGC4dwQ8SoEk7CYt3d",
  "key11": "23ByozWgp3bKYDnJms7HHqDtzFGsvGMQDomUacXjpszohJp6PmbX41Nwud2L7jaVzTAcxRsaqqxVyH53pKWiLJot",
  "key12": "4acBoFddqB3XzwTwdvqohbWAnhqLTTNFbvbrGkEzULKFx2dn3FpD2uf6FzNotyGzuU3snaiiNbRpJqjY1HHirUSC",
  "key13": "5uRX8DjNepuQ2ifHKH5WjYLMHkG2WV9WgKHnrupgqzhsnJDFsmS9KJr5iy662kmaxJ9F2CRHt6Hrymd4agp5JNoD",
  "key14": "2ME9H7L5sz7HVDeZLWwhu4nc2z3kpLX9Hti2PPkEZiaEm2i1rUFRJYJoGuufQApoTnjsHv5qFw2F8CjRBCAd7roM",
  "key15": "23edrX92Q19aAdB2Z6X2TQyPuEkJUW7bFMR9rGCUVUhdztFXGgQCHEFUVvhPvT64XGp3J9nBmjLpCT1q4XKFveHV",
  "key16": "5Y2XZroDBv1bQxZsXgJxohDY9XpJoM5pTCGPtw4P4BpArU1sbACJ61n9knK8CKS5HdKAWouLcbEPkaVm5y6AciJr",
  "key17": "2HixDgGHjVCetba9nihaM3Dm9UumBLzF5NxXRwaYcFDtPfxs7FeRdk1LRzyGdgiiHYeZxdsnnreEejV2yphaubMb",
  "key18": "4iehs16LAhaXxTZHtPqmL4gYvmoRpXkFmh2VxhfVos45nEFySR7wnVURGfddLCqEHrW88XvaMFSHNW31Jipr6BTy",
  "key19": "5wGWidY9rQxfergVMBKSWLhCCpmbwtJiXWsvvrQ6egLTcQLiJ6DHvLBeT7wmWbW1pUnfcRXAxmADpntEdu5jHmFG",
  "key20": "4XguxRKymxApcKJkvk4oNYy15EFimRfAxQo6YuaAqwS9ndCqCFKcS9VZX4ams81ZoFZPNwvygQ518hzGJqDtZkvy",
  "key21": "3gVzuJJxLya1WMQmEfWSqNx9M2Nv2cTwdec3x9zPWaC72nzA3LH4wyCeHP8rCXLxgub29o2zZdrnx6EzcTDTDunH",
  "key22": "2a5vQL44BE5T4sn63jrDjiqeoBaWFJc1ag9RKq5BZRcrhWuizUcPX9gKM5ZMDyELbE4LphgQFBYrh3BjbpdMQicn",
  "key23": "4qy2ZY8NvXbAkBx5jKs3k9BYcQdBf13ir3jjnAcjCsYiVaqiUSUiXmVoWFritKdNraMv3cGRwBbyUXP6FXpKTnSr",
  "key24": "2fRmgjPkwahQJTXLH29PmVGFs4MHo9AVC2qD4GroBx6XVditEXtqNRDmYb9yfGw2AmJr8FWSUGu5bviRY855A98T",
  "key25": "2Q6jVS8e7XMohYRdcDV7SZmF7GPYLUwr3G35jL6SXDhSDQdCYorga66VqAFcwUccuRfZStJtegVU7dvjzVb2vWZz",
  "key26": "4K6e7fyHXiv2pY7HB8DmBz2EX29HURe1Xkr4LXMBQ7jVVKXXA4SCFKPFA7pDD7t9KuLFCDGdQCm5gFoujfvLkmG1",
  "key27": "39nFQx6TSbuiceuvncE3DWV5EtEz6q1a1Aua8d7yYCbezfWp3q6u37uEBh1GePYXgc4bSpN8L9HkPb4av2noVTx1",
  "key28": "5ZE7eZSKxwEXNn7u9cQ7Rn3fzUsc1abR77qRuG8dTC9DeJryK7uScPvauB3F5yNPDMCdn8CgQqUD7brYCtUaih12",
  "key29": "45YfJvgDo8xGENQBGKKZxkXmTf776xLjbfAHMnpfApEi153FE4jDPTWXDh5Fh2ADiR31cQaWQEr3Chq5qufWv36A",
  "key30": "5q24pingESe78Xjg3wCm9dFimveyzjK7NEXgumJdQSTT7WkBxpFnKYooM7WbbEeDd6VGbdDbYXcSpvMwXH85KmdF",
  "key31": "8686daFi1AB8TmEg7ECeyznJuBvzSBJUmomA1R9LEBph9uuiKNDa9Qgh2uewupNqGXsd4TkHRLfQ3zi2EDEp4Y8",
  "key32": "391nMDn18oWfmxHB3eyrsn4oof8oT424J69cXqTqZUKm83MTuxAitNnsaBuektW4xwpmzrQSXk3fHDMJXWksHZVr",
  "key33": "3kxh3eXAdHwZiutVs1f6Dik4Edn5knZM6R8PUvWEYaUNVJx3na8qpGdXDL7zbm9DcFnmh3B6ukEnYYKtpB95c8Ha",
  "key34": "1y5me1gYjuQ8kRpCdJBRJySNNzK4qnVLeErudtFwNCa7mVAnsFqMi6JVap4jpbJJ7PD58C76GsUkv1TBydxe2UC",
  "key35": "5x5Jucf78CqwCH3hfa2J3K7TZhy5aFk8ofqGmetqYbBqX52ypXFnMkyJtfULn9XLm4p6kMVPXq2RqoXWFvrMhcuY",
  "key36": "4pZmNRVMGMnpeQZZBTu1jiKhSUjxWSNQaLm5x6yhJiC9S1XeQydaYPufkmEs2HEE4h5RKBNqotgKP6vEoSDWSYVy",
  "key37": "5NFVsLNeEscUmsnyh84JzfFEUqLzJQA7NRk8CL3fowEed19Lyu3V3bYh5WLYTqd24gnPgNzLLz63iEJ3tGsXRcKi",
  "key38": "2TyBqyHr9iPVJEw99skmZFudJoUbgLqdgEArbJ3vjzewJnotGDdxfrTH66ZgaNjYj1nw1ckmy3pAijA2YktkwReB",
  "key39": "5Pq2RAX4LjMMqUHSDNYWF7aWP7SSVBGsbgtje1XMRRQG8wJBud56QMWBBdqp92f3g35HjJm56W1xmFsPspv72uuY",
  "key40": "UYathWjHgxvp99XoSx5fx3mh1nuEgBAGPKzDAKXXwCqroR5zVoqwLc82pXs6kpXUvcBkDy28grYzL2zGoPxu3i7",
  "key41": "5HWP2sfYukuTJStquFEySF5xQn8idLGtbcNvvDZVCWzfDrV4JfTbDwVw5vZB1hTMBR8DYQ3p9DT7HYV3hbmbC4Xu",
  "key42": "56ENJpErbHfaq3PWBgJcu8N3np2wzoKrSboFUChisDRVyEre79fMovyV5WvHjSA5tcbrg2y3V9hfnQiyuXEnL9UW",
  "key43": "SbmMfhKKJiWAGLnxnHuVRXdg21x4DEMhg2wZYfuJhRrCzjDRy6q9Dy2MjRjMcfAEZmPK4jW33J3J6TTg6DxsnZE",
  "key44": "7D7uVpYkYtzRSVkKP4REDMrNGcy7uSCT5wG7aTryAfdAtQTWT7mnsxoa6SqETnJoxSFQ24juKd8jkVBe2fNKtPL",
  "key45": "Kcw28VSugYY1beYrEByXp24W9daoyjA4sEEDA1pdfdpq2xhsHULJzyeScsYqR6QinoAuZN5ct6HVWxiacwM8S3n",
  "key46": "47GJ6U31BMpJ85ntWfJ5SPPfuAzmhv75cHReSQ8JDG14f6jbB7Ze7NUETwsdQYz2NXUf2KmoqYZWMUb2dGTFgzYy"
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
