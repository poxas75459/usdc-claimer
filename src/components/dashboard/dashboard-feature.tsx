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
    "67LjaxeVoUGKxb5V79c5MzYQkTwi7UxAXT7rgPpeukL9o7AyXT1dhg2xzc45SYrjhYcjVira31SBWhNVpvPhAySr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sdrTvsZVmYSQPzBHA9Apum1aSxRUxBjXk4zo4fC7xaN3AQJv3xYqPbCieiwjurYa7P3hgddQbqdJG4U7K27ajK",
  "key1": "Xas3uhxEfJU7c9Pniyw92NEZcybNREqS2SK5eoh3iRNGjhKUsSqz4rhofmKxYZ5Bf5e6jgemy5PbayQNsuo3nLR",
  "key2": "2TALJh4xYSW7PNgqmXVXV5X9yvAvexPTo2sBbX5iC7gQKkks25bBMqEnqQubbHcstLzDoJUtRv1pDgY3Sqw2ub9q",
  "key3": "5xaewmphV94q8Rm6piUexLDBd564nFGzF3eKwY7mHnh9KX78zSPk8GTBd4CrnV28XrMUuaQHQgCBuRELfMNWS3g3",
  "key4": "53wfS81sVjFapUw1NoAyycMR9ae5hKKyt8jKx3qfV7D2qqhbhU7Mbc4jDQusRC6qPQMiTiAthiFxhTCVDphbuPhr",
  "key5": "dDwhdSRRXypGVVnH3v1rjxuAxUPyvn9T7VadcBDSyPgDLKMaopYNYmHRKhng3JHSi1bgwFfqsRggyoSDQS7ybdY",
  "key6": "4QkeRdYejezm9hKLLNGVDToSrQrG1zJxY1EiEgWupx2AMgaaeSygMdvLt5DPYcr6j9ykFWE8dLupYeGUV3ZosGMc",
  "key7": "vQxmP6QxP3KMxkiigNfDc5LNyTb666ZAaDYRrsZZsbnVfo86o9GkmG3MKVxTq6HPzB4x3RES3jpq1vpG4sFTAi3",
  "key8": "3um2aPnddwDgmU5nG4mbC4TuL4MboiMVUJWn5Ki2bEcQg4q5pMtGZHSeKEi2xGGf9DVrSSzm5QwiUxZ4Z3Nswwda",
  "key9": "4Q3xMr5UhfrMUB1jeXUgZwcwDTzgDgUWEJvx6PQkdU87hyDs8AoatxDPZNdvjWfXRJcVXoHYTBvnthBcZMTxBcd9",
  "key10": "2shQpU7wUDzpq77sVPBaPCRCQX44n1dEz3mQxKZ62bW2AywfwJYLo3isGyt8rRvAAa1r9T45TBiTPTpU9TZo6zYD",
  "key11": "9rvVZRgQB965QcYJNcKojHnaFw5aJFokunarzML4DW3bJVVaSmgtLVea4Ed9uZsRu9QwBkFHHhntzqgFxQyvGRQ",
  "key12": "4GtTJrW3bYyyQu2xconvzZqEdyQ1A6u3WxvdghJfcWQrtUMTetabM95XmVHA9AtRRbr7WbhuYvDnAvqWigXzesmJ",
  "key13": "2o3aTYcPj9kNbihGqAb4Gk6Ws87Lu65kyjvXPPpHWxw6JAtkD4yqGRYqsqJQqyU8jk49s77X4TzhNdeFTDuDnhG5",
  "key14": "4rCmjyvcrgPxogNnyRUdPHX7TxT94xbUAF1F1iWeM6aXQf3iCrDf78wcTo5ZktPB9pjhebwM6MyDJ7PgSEy8E5TZ",
  "key15": "sbNSfKkKtEaz4eDxenYqnUUFd9NZqBG9esxG2rgMaAuCqPVKJNp6VGwRBb1d928L4pgq5Day9HjYKC7VmZm5DjE",
  "key16": "3VDDW75ewSUcf7kBKJURywZYJz4huUvogVMg8KUiDtETYTGF3zUFgFqf1WM1cqh7uVEAvVALFFaC3HdMWN6c23GV",
  "key17": "4sWw3QH8DdovThfwNUVFZCXBY4L1rtR4vMkeqpe1jVSVVdrEfjCHhpyfw6fXAMKcNGyyhb4FXwWAxiLyC6arThPp",
  "key18": "3ntUK3BUL6foj53ZduACqfwoeGXdWMD3Z9p1c7qZZ1hdgew16xrNwM1AE8FDgRrbxUgtX8sNjHux8sBgE52Uy9Fk",
  "key19": "3bLAgvPtSchJuDa1bhJKf6YQer3mJHpgvKDEBY7Ysb5WUhqfrz6RXQaEWpvXLyGBT91kqC2b7DCmBCazdUKUBp6v",
  "key20": "vP21XNJmXAm4GMTn3spSeXgVHP3JyGnVj2d9hWaGRpmyL26S7wD7sczoZGt6t1pMsSrY9aB56rTkLZYKSafZPgw",
  "key21": "2MqBqwnumtH4D3XkdHnCfKkDbS344PYL1sgw33BqJ4aBBrEpKZGi6DKxPtsCkW3YSH6J9BMevoheLesV2feULzKq",
  "key22": "3kSXF4z2vuoLec414RS333Kegu8H4LVYN885KW4xwAXkt3MK8Rcyk1r9qXBBct9ApwvAQT9vB4Kkz7f1KHc7dDWV",
  "key23": "3GkHvccEp419rPxYMK2f1vXsUjoAzgNHhivmSqG2fyG7ryjqLt9jyAfuVoCpqB5n2H99bDqmMph7SBTaYMT7HMfX",
  "key24": "2x89p14Cro6VND22K26BhgghUDUHP9DHDLqVRWGhSCVVcbVB4GMFZQbTHFDRsx8p9zmaaLBdRZKuLffVMXteB1nm",
  "key25": "4DZ97wTLq1su8fPSB53xy1uWj58AikY1JnbHRMDdzdCoJhTKRirHrQLFXq96y8CUpjk19qNHTrF3QJtVb41W1crd",
  "key26": "2Py4rF53gb8AuJ4FBLTdLSPdWdPMM4vd8tfM2LkrsqHJisZhyQjmPtwpXCeLwrNynmXDcUCC5sK37X7Y79TAY7RX",
  "key27": "4U6Z6nhKr2nN2HXGecr2zpSTiT9ZFXyHUJs3y8Urt6tr1C4BuK4XbB4qLpvdbr1ZGuhAKutqysUQXYsAwdVJGPT9",
  "key28": "4vjPm63Y68XKtsGctyns79GLKDiaYDptPBxz9hSMw7P6JH6EmGPGSB6tWj5L4gCjnoyBvegoKRcoB5C5wYR3jcQE",
  "key29": "22EL2vNwBq7BLLMCw8QPoF9jwY1Jby2tP2ps7inbVyCfWfFFzhjTRPaCrDeqQnWK124QUjckd5Lwv64xV6aatTr6",
  "key30": "3zDWJqhTHgbNGGkVGnWU5KCiLLkrK5g71E8NouVDigAVZdfNSVwh8A1YWhnPbZWzPfud7PLaKffqS2xaJNqNRDPu",
  "key31": "2hJ5osMmJ4bqtpqhHFhXP4vVfM4zQCtULGP6HF2AdbQEL3Qp569WBZfw3rUdFSVhZw14ywbmuvcprzbjwTGQDjWK",
  "key32": "5rEvK6XFbethRXYb8ZTQt4C4E5mRp4SPWZzwptrAwBjqLuuBvPxPuJSL1zJ83FJjAQ297kqnLkFLzGNXd8XKynQs",
  "key33": "Tuy4yRJLkmGznzaerykfPwJigf3C9U1HC8DQBriGthF2PHGiyVe2SkL3uk77rigfywdEntfwvsAtkSipQAfvJ2Z",
  "key34": "6uRuCX6trUL78iPuYCt1wGiVq6F3XX8r7bq69WVCW3DW7hQG9tdg6wD9Smz92S1WsVsbxb4CqAeaKDCEDXEPiVN",
  "key35": "5vaKigKpz2WXVdxUvHLHLA3furHJWR5rU52HiRZu4WXFGG7aVtSbYEzxgaaKShh4o61b1U4rVMhfodpD5XKLiUfp",
  "key36": "4yEqbZKL7KKTRvf4THJY2tZHSWGAtansqN1mqeifNwNNNYovayQzX654mBt1MJVTQPv7RfnFeSSF3W8wdtZKLpgT",
  "key37": "5CnWvW89SCWqsgMMRysKDKTwAxnLNWhUjt9N7vxfVLtuEV1XB91ET362euE4oAUsYKDRhpLvS3Lf2pFJuAo8nJ6t",
  "key38": "qTJG28GfiZ6A67tHZ2yDtwmztfFvokcNcWdJCWScEMVzXoiBfhU2oXAVkSpUERjYvZcHC7femKLjRp43QpG5emx"
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
