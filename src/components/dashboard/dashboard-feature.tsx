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
    "5wRdosPuM4HeeTv8aaWraRb8FLkkJLGxHTKD6hmV6iGeyVASdb8vMpCPi4xDu5Zy4Mj5SJdbBU4SoYiWuvVsZzq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HrDUp5j6VrK6ibMmb1u1dFjZSznFqFhz5RtMer3BUdC8xAzP1Zwvn4W3VzTE219frfT6sVrmXwHG2xNgWpsFqyH",
  "key1": "4QugT7gFaWDVwKhiWRVkKHSeEj5uEEH4aVe22YhaV9QQzJe4xKMyDcBpUqaBDzxhWr84kHL7roFU5ycXaW5FE5V9",
  "key2": "4gx9qFG4qxsTQ42D8Hd1dRPnLdcGWqzXTkDY91zGD9fhDjdXvx8aA65vm1VsLTsvuMTvyPzNNwhSbKtwmgTsJ3oJ",
  "key3": "2maUX1FvrPD4QfHyDbeG2XpKfD3TwNr2BCzzfRgHphP64uJbKhuSMojb6qtBz2Dpka9rrCkDqomY64SZCUuTZUmQ",
  "key4": "4zQ12GQU6esm4Ffsd2i7gk5w4uykT1rxvpT1jpzcQacPo48kzLvuwbT8gEVPe1rmf7EyqAfiLkcQ7CGtVtpAk1vS",
  "key5": "4BWTk8nSaD6EeA3Fm3xVqNJMdb8JQ3tWpedWPmJoESzLeRHXNQ1w47iUPMdPTvKWiwptbBuQbrrf9DfwuLXxmApy",
  "key6": "2VZGNqiZBHmaCYYF5wp29JLvH8Xvka45pNGXvLrQfnUtU4qf5j9p7bqWuNQ6krKqqScRXkfhBG5fom4Xy4fMT6o1",
  "key7": "3tfB1JnRYFmwx7662aeNK5HUcF4XUocXxuLcMNcg2xv6TY8TouVHw8aJL5BFdtVk5qLHd5G2TCY4Z7vR8MvNWS2d",
  "key8": "4tEkvCbc3tKrCbZ9w8iBdjWPp32byimDzhySnieDHWSPE3uJTfNpucet3pGJ88RbRtnaUTdyWUkzRbP4SewbeeL",
  "key9": "hkkk7zxFS8C6S6R4VMgXUj4fLyTcs8at444Xtmtm14B8QXbaidnJduFGb59A3rNKYhbzjxyMBEeey15GZVMB654",
  "key10": "3uFARP9dvymewHTpM1XVAtwzQ51qGnbc7U2eGjPWy1ppx9gkQepZhXSk2EGJtjCRh66RmpJS3LoR6Ego7dXmbR9U",
  "key11": "3pvFjaGTPNWJGSGCHNFjcNfgY6S99GBj3cXdL1JMLMW2Cp2RsJVzS8DkUJcy5fFWcWMGSjJKJ1hE5HFFW6rZ1GrH",
  "key12": "obFyve9xxprHp7Vaf67CtRvaQQ28gdxuMswXY4tinp9FN9CEwL9VgmdSyGHBhHQUsrNJGWu8z2wcsFCgFfnWfMb",
  "key13": "Gfvon1B3dnc4AK7Z9JX3DafZjDDJJ2cW9utzxCK6PsRn2geC6M7MtrYmWUzatFXkA24CSdgaeDMK5ZSVxdx6p7Z",
  "key14": "5rsjQrzJ8bthhj8TXK8mRqm2BFfDYSoJrdh4GsN6pvjsxJguRBwEojBJ3CbxCNxspapeZEfepF15PUF2LrUFNqfi",
  "key15": "2UGrwL6Z2Jr98y4h6fpKzqyL2Xkyuv8QCJgurH5DXEgHMVzF86SDU9zpU1Ad7ppwxAQbqf9UGkA1ksrYJbCoo7TU",
  "key16": "2fETipFb8hzgqtwWU73RxdoS9REzDiWgAFrLcoxjfQc1bHByQNZt94JpmnMPm2bmfBkYP1XhsmTLavXKw4iHF7oD",
  "key17": "3sbL1HT8SqbUECeVZbyU1TZysTA6t2o85MKJHT74XRXbq9VA1xwgTLDggXqzfurarSLMQJmsdXRxdAZxYSExEVRM",
  "key18": "4yauyGKHQYuGkCiD6HA44n1Cn1BzXuQj8rwEjW5r5bQW6CjhpiwcN4i1GZee65CWAcwhgTn1ge3riXRWM9WXbQQP",
  "key19": "4KCsCBSzVHzZUpHYQ5cX6PE3VtQy3yGCsiFp7QVWPCJXXkMDvBeYsCGhhdfoVjxD8yUE3zJHB7tfYXSj5QqoythP",
  "key20": "jLYEiuww9qDyio5pZx3dpGzaxnT5ryXgeRzCKp5sas39FoWJ3fjhFAALPXEecJhTnumHY5JpWHUyQM6RUfk7pST",
  "key21": "2CP7ww7uSqm6HT8K56NmDDpx32fjSv91mKAxkwAvj1Cyi7B6gKU8kU24ns2TcMJQq8Zup7NjtTq2Jf4b4A7p4hUD",
  "key22": "5kp1WWxbfdmpnj8YV2BF6WD54HPwSajVZcrqmaHUo9JvD3q3ZiBjZDnCBF2LM7495FAUVhEgWL3VyuikjwWvrxbP",
  "key23": "3ZsQtTaxwUkLonWEdRcaJRKUaR13av3YmGhyTXSAyE1axPoU2jczhRsxnRZe4JkPbtVfZcwxruhZr1TkG8SPbDC4",
  "key24": "2xKRUqdJhfXayxddbfmdddVeDZytn9NNtsY5TrfpxbhnfspMTXAREz1mnqDbddAJ2KU6dsLFpQ6hZroRQCVxNbtf",
  "key25": "fMzVRWbP73WMkUjvVy1w55L91Sv98b1NvrHHQky5kckENNhgXSGmAUhu48CCSpRXMVGHxq9etzcdXafqZjCzYDH",
  "key26": "3TWnZgp5DwaGL7zPnxqYz9cte4UPnxgB5tZvRfyXRrxGkjoChhUgFre6NRgWcFkBjKLgZmszxmC5zpQ5nMeNe4vx",
  "key27": "2LAfNHvA4En2fCx81rauiK3kGZvbXhXL229qyuAnkjgoDsfdTd4mLcoRxE7pEXUAHzF6PDhwPUmiRLg1WVrk1Sqz",
  "key28": "3ZxHAsVxZy7UVhjcHQspF3AQ8rYfAd7BN5Y8hPdBqu9mRNyri8BFcjau4ovNBvGomzhxA2fKszFVF1tjq7efYyLh",
  "key29": "2yw7ZtJAokbvSkE7kGmacvZBQnzcnLG2CinTM5Ed1uZQvQ4oUdG8ew5CfmBs8J46HGnE6zXajYzozEUW4UuyXyhA",
  "key30": "48QNpSjyAdwGw4ER7NGGMfA8WTnL3u3CYsww3tLupdUEn6ZtcFetcSMQaHtFrztovcG6fBN3TaxdXu1W6Y3hV8gm",
  "key31": "4s4n2ddtdUGK7CqgDLGkmoc7EMSSv7qFvvkswd5AYowqMpjQwF7ywWnxNaDiDTXaVGiTzdjBJRbMQzpWZdGyDzR2",
  "key32": "3qa7zNG4Azgjm19KAonNGG9PmtL5S7ercwKcobMU3mx84TJUuhYavPBLoPDXj5avdNNuUS54TCzSVCoqpkTqk8tB",
  "key33": "2NjuDznvFZczQSsJqFnD2o15uPvcB4PsLjvZuX1ttKc6qgDuBFbXERF3zkvjofL5C8RrH1JW2Yw6YVwyiEnQ6EcA",
  "key34": "4aSH1gSmNrEtJ48J94mYdj9cxBwKFVpKTqaBHivTfWpQ7C3cHiafHxk51UBK2NzDegsmXummK5ZtqR1PGbvqHhbM",
  "key35": "2JNeDXr7iPqLvjHoVRbEy58zybv6QGh1AgVJs6caHo4mcBNvwrUnfw1wNCmXs2ucfoMDKszMSAPnTEMeVp5uX2rH",
  "key36": "2NuQvFR3KBVCFAuXrA1dZdVn2SjEHEWwDZUcygyRaLRQNbEiERVnW5bjRD178kr3aiJarJEZ5qmrPpbGBPTdPje",
  "key37": "2jjtzTL9zawappFurjh3mX5EAaaEFiPzprg4aJb9t3xRQnWiYjBeQdxdebk2DfkVRqTctUoztGCuMTUaxs4VWSxG",
  "key38": "4rMEQ4fwTvDyh1d7S5EyKET5yQgLx18JyVkaFRnUdtrqzmFMXpv6PwEPqS2fGA1uURbqiQQ72kuY4TXiigJNzxPr",
  "key39": "3BArrBe74EGTsknA3uU7uWN9nqeHc911cCaQMCye18GKHAPbhStg6a9tJNDf5g5YCcqbabAXjasDcQb4S7MVH2FY",
  "key40": "5PqGXKKq2hZziSwxnDdssdtJankd7gsT3xiBgaUcw6TCKNeHb12a8gsYqt7F8FKjfRbUCKX22K6VpJ7isQtRQsrq",
  "key41": "5nRS78fV75oX4NXveCtUrHWR82rw75X3oBuJUG5Z6UxfoUZN8aj71aCyrzFcFqfjuUA4pabCv9uuZQ4RXzUW58fK",
  "key42": "52tXtP5sKcu9ZcaJbQteL2bKV2LuwoDZXi6yDRXmLhW6DLd58nB2kqhUq5rguv1JuAxdkE4fTL6aeNqJnQR6pZnp",
  "key43": "2Xpk5KRz5z24QbaPaWFatH89DXRy1oAV6ya57jm3SuBsySBBb3ELCRrTzrCS34YEgoCz74WzbZRPHvyvxeKxKtC1"
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
