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
    "38y3R3M9NtCAisByD7XgjBJTYxVxWecZ5NQh4C31Wd8SR9W8eituNVSHYPuocxzYTtHCTtp5rXXpJqE3Gvvf3KyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdFcF5dQmar39efh6MdvRdrkWBhm9mFs8Egjrjn7AUSdPtxu7HAK8L68xSJ4EmuGg5HAeMKkzmiLYanFMy7tpED",
  "key1": "21myT4DNmAdJQKtTKCRif2bCJYKsHUVUQDzoWbeYoaVKzg7VNWW4qnDpy81bae8uqw4zwcSAH3TH7B754MWTa5Y9",
  "key2": "39dMD3joXWxbKaxzyMZQYCL9ZD1YrguLKayXGk2raK741pyE5F48vEV8arA4oBEX32HZ1qZCUZgirSTHs2gNW8MV",
  "key3": "67UKrf2KNpG3QKbToTAxyebaV8zwh486kCvmW8jtju75iLGzoS7X8WJ5NkVUxR7AsZMfTau7vcioe1wUQbgSpzCX",
  "key4": "5ksgfNehejKcV4yjd8otUTfjxF8scSvibNmayYTg9AcGosgCRg5f8pAC9p75vojD7wtDE8wbX4jwCEbqhbRMCrs3",
  "key5": "2HVNEforXCzZktjkUjUeyGCzVpBTEahF82btFYiKwm7GvYsbTmYME2ZtwVVCgQZUo975tEN4ccYXjNufgPwofWRg",
  "key6": "36imyppbMM4JKAafmbKE6L2yDRKPMbXCVVYNWXAT9wP93P5fCY5wsied2iBvdHGfPoxqvG6MQTSN3ZDyA2NcvUdV",
  "key7": "3xNjPr5RuuB52jCQLGN1N5Q9WmfLgNPgpsJwkUmzuDJgTmBTCzFJUPT8XaEUuxFDbbLmi4FiTodi1BziPAeoGG69",
  "key8": "3NyVEY2L34X43qUD9eRvVgWwRMgXhy8QnJjpek1NTAC9LjtceXgrAgAd2ktj7cWv2YGbNkjnCuSpa1wvzFhoYeYP",
  "key9": "2YmCyf1WMLwgWiVxNbRmmyaYPjvhiNTCdGZiiyqzeBXkwko2NLjLa1Pz27ZLn2kqzUH4ZkmpMJwTeJxRgTF3Cdrm",
  "key10": "4exuR5Gby6qGfdnLjnepYnfNjc7YnvhWTqAsNqLtwzcdKkysyKq9DqcZuQ3YsYZQ4x4Uj5oNCVK4UuFEMgYpjWZy",
  "key11": "3iFYwRJuqdgwRXd5rcG4DkUq4SmkL1aFCJ82JA9HZyWwQcAqYasQ4ZJA5ZaQtWNNrwDjJZoQtbVWKatgMrBDQ6JN",
  "key12": "va7bhQkk4YfJCtNZfsSshQ2aYpDUh19nFc3PM4QrodkbqAoEfKFTASGHkvJ39m5EnaH7ka4d5Z6QB86fh55NRXT",
  "key13": "2nAnbz31ScrX1TEMtWE8tshYepTp542rHayL7xmazedx2KJy17zViuowF6bnEzbFqdenUN8VBeLHNjcsq9Yq1GPm",
  "key14": "27s5U4zFihjzEeucR1aQ4ce87f7yYpniCHH6cLfZRwpQt77sfvxDRpuAkMzNk4AHk5YYij8dKHNuAPFLe2SacxSP",
  "key15": "46nNSHAFGQXjdUXVhPwqYstukaNqCQAvsAHGkP57j8jhpkx88D2CYUWgtxM2YJHMS49imNCV2u1Tunzb6mvBcBwh",
  "key16": "4cVFxH1zRBfBKDmHLUnLrj4CsYZu2N1DQvz1KnWmkpfi3bNTNmrNhURgsFLkGomGrYofXi4AP9a9Ays4BcEpNUkF",
  "key17": "5ekRwnsokkGCC5hnj8sqWXeEGPKbwN2Z8KyquXfp6Deze5fY9uqVnbAefuviZzADm5tYkgWFq1tLJhTyKHfnjawv",
  "key18": "5F2YgcQgZF4zDKk28aoahcKQVLSHnkCn1pDkm5bwT7DEqS5sXS9pk5QH6QUnqoRw4kgR55NwdSBxgMducBEgWULZ",
  "key19": "2Q2iyBcSAWnweQGnYMpsY73dRNoM3JVWottUnLN3UM4AY51LeczeUUYHcNsD4awZCkofAMuJjGLhmpvUJN5siMz5",
  "key20": "3tx14Sx1cqkAZjmvZbD4ZAJw2Z8j9UjgHf7CL4hxVwDybH2cF6yCYEnPZ49ZfDwF2rCtCbdE9PgwLq9V3tcMeLgi",
  "key21": "3ud8BvvkYzHpUygXGExGCZERQBxt2Rue8dSvM78m9aVcAy7VwreU9JF4ZwWEtcuRYDiSj3ETndytqUJvThYACYP4",
  "key22": "34kYkGsk37x8K5d9qRpPbCNwgi8WKRMTr1f1EG1z8nXKRZkv35TUQm8KU59fBVw51hKvRmpFnEFiHyBvXKyrVUTA",
  "key23": "46FSSYaeryYPgFdGW6pM6zzvc7MWpP5chhZMiCunX9em8nftVveUqRFQnJe1GPE93BTuCmNJ7K4RTEpenGYyfv3c",
  "key24": "5gui8fLr9oemHvRYqMF1smruVXSey3MjoqaiZheyoK1NXG5ZfbSddXTLbtogyhjkPkc6Zt9oAUSVeENzJhcbhnvR",
  "key25": "55U8KYCHzoYHTYpGhUizQjyxcqJkDp6wnrjwzKRqvfcJcN71ehJXnc3zj5WpQfYWp5xsZZxdHXNwxXDaM3btvTDR",
  "key26": "5q2eBYthvZniqsxxdvqX8m6xUwr8HszuNwnML5MrP4E8GgDkQ2EndZF8qoBY2Jbnavf2Sgha5atAG3FmUA4oxZnA",
  "key27": "4yRXBZPjUgrDCSEQERoVr7L61TPbrAPVyGfhow4daMey9cXZYTyJ4NNCEYyCFy1QXf1XaDavuxwjbtSDDyn2vGmV",
  "key28": "4a3CwMEmpejYYxu56yyuazSPs6AqpFKVYEBCj9zcVnVQGaQo92jrW525i2B4yuBxgzQ3WRYF3V53X24P9Cxby8om",
  "key29": "4sZEDbiGpK46KsDwkKsYKT7rjJPVJVkMvbDErr13LXHQSeL2BGcfqJrD1i63btLa6qbjm5jfLJnzyQmYYygU36BK",
  "key30": "4LvhLLtZg4twkHwxPevodA6ax8tFP4vEMX5L5udPjkUg1MwSV8M3C5qFkVA9TyytKKDPgRu8DKccc9HB8PLiHBwy",
  "key31": "5xHuuUchijh5KwsehRtLVZ5ML3c4CwBwoF5yqYeitJc32HbMFVbm4miDdCVzEWqdfnxPtsrGonyNikkk2NeenbjY",
  "key32": "66rPYtmiUWUthkw5ZrF83E7kowHfTdhRcbyCWx4eUPoExYwFKV6fyf6dEokcmusTTpnjjxZvceL9XwgNgdTQHJsy",
  "key33": "3KEyik6JWcrrtS9EicoQdCHHLNtVUS5JoKphgPuFUBSx5Hm86caEdf4bKsVdyknm9ZCGW6Nnc6EsJE6X8FVGQr5T",
  "key34": "4opBVSMdSJAHFAM5c4nWn4LLS2LAVg2Rp1aC5NP7F2Ji59uEBfMv4QKFUKk6RDbQzNfKGRvxssFQjbjRCUinEZQ1",
  "key35": "5se1Fq69kA9t2KHy24bgsXNNW1emPGTFmNNFEGBuFrxQdAZ1tsWZ3NnYZ69t9MV8trYmnsGEP5CdwhHfcNPYSjXP",
  "key36": "fWdcPLZ1WzwsDTp6jeBuFVNEFpyWqfsEgNN6rCQ3hnVYTZ8zAHP9qmHGsCkzaFJ2gNBpDamJZtUUbACReySwXcp",
  "key37": "5yRSSx3Au9y4UbRL1ox9hr2rMsDFyXZFzYfpraSoBk8bk9kDURBdh22uNN6isfxwVAMu7BK8SmnnG78iWDpvvqqi",
  "key38": "3ifzE3A9pMHNhLPSjwupqkgB4WyFNchxGY6pXkdefEso4zE5DekNN6MxCeBuGLVy5gp2q1EjC9RjqfS2asDRYAkj",
  "key39": "4zefBWF352Vysh2Vgvp5yo36HFTaUJnGDgzEcoHKKwpjPAPvtSuzdtSL4t2KwTLSnTMokfvrCEtSM7gBVDRWqZjx",
  "key40": "62tAyLZrWGo9KUhfSh8xyVVeYhcDorG9T8tTpJdSjGTJrLkFbt3rxRzRWXK7SxXeetquN4Uv1D8dTE6qmJZCjo6T"
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
