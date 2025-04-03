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
    "2kJuWGCs1zhxH6YXxKxLA1UU7JVABCsBZcDRTsVFrRkTFn7iQbGmeYscquZsEjsrcA9q9NKXnE6RU2u1fy2jNrK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RUHfNeXt4aKgK2Eo289WUQz2EFDMBbx5qJnnqBSgBo7mcFzeFUcUnw8CYKuLyJ2YmBXgMs7L3wjf7csZGHeK41N",
  "key1": "5GQExp2NPYM4nq7hw2QyAFZkECCRaBZd6Ae1hyvkH8C8JPFB5RsAy5XBfed71wxch2TG2Nbc1CzUSjqMtWhEyMT8",
  "key2": "zjD2WNGsEX8QMKh9DZ5u7pbxnbuYkUVbaBX5wq9ELdjMQ52ynAwKZxvAFFEnCuyFqaJg1vPhuoRdEcPefBi554N",
  "key3": "4yrLsoP9h8enyvACrMSPBjdWpMC4rdorm3ENztMhSo1PiaRxRLFxDNLcWXWU55M3GibYWphP9WUnZX6FJp6zbyNw",
  "key4": "4o5BPYqSnbhvzbYxWbWuykcuVvwq2FNGDeGcXQV4CvAbMPdyYzUXiWSE1pCp8T5HuNwUsuXPG51mb1tMdMEqb59u",
  "key5": "2X8d9vcvEu6TwZCqRZmsVJKr14j1rv8v8BKtHR6yjzMjwD3xKGCX1HKn1boPKRQZvrXWeL5j1WSVD33QkUttHuEx",
  "key6": "DMgwip4k9ABHzi6Yd31yS1NJTZfWw8tny1UqdvzrjHMS9pxyvTjJXQR3xEbqo4Cr7E2XXg97jATGpaPshVa5DM8",
  "key7": "2gFhna9nNo8nxbWSVh6F4BQt9FPjByxr56a6XxPRGDuAqbQ1KiRwQ5VMoqfB1umBkRezTwSeejrfw6CNVYGbsdUU",
  "key8": "Uuih89KbBRdmE4XvQjU6wvZ6sufwsRhabUxTGuQsQ7cvB72c4gSrjgrNm37Dwk67n3LXhCsB7y63puVLLR1KUqo",
  "key9": "5BW1x4nAznPkwn2v98RSUSMeUeXqFSVfPQHB5v8zDKF9tGJ1hq4MRah4rDA8di5dGG9NtuGJoJawbazqS2oBsnxM",
  "key10": "3LsC5AamAvxCW7zx34DcDgpLC28Rva1ZHdrq8KNDcgdw9UzagQtZqxmEu3yS4kpNd9jbSVvfyn55DUdt6hHCmAR5",
  "key11": "2H6hK1zYrTo25i6HUYKCJinvcsVwpph7m4nJJUuZc8nXSKCaJcrDRYhKxPZiSggnaGEQtmyfZ2kaNhB4KfDuQS6z",
  "key12": "5VF2Q3qXnGF8EWFBFKAPw3JRzANngpKjHvYsjuAsdu5xnXCtRdRASV1UmzCiyqKtVPhenVozGvuYFFrobngDXk7k",
  "key13": "5njskgiAwWsFdAC7ff8ESpGqUhWhB7RQGP85BHFBaffFYrvidiUwnwge4qV9TyWFQrH6DJJswTUqUUcZDaXj54LS",
  "key14": "38cUUc1ek6KX8K8wdrGM5UJLYmsaB2m4YRbYyWSsnn2pLh6r4BVRFrmFjRi7NY7FeJdyJHfCm527QADYJespaoXu",
  "key15": "56j4bxJHWhPcKnKuay5ZshzpBaBEKJ41K788wzEZJnkXFcvxaZDRpbowtJHsswgPQWXJPFhtZoGDRHYUAj68Dq2z",
  "key16": "3ZPhVukMNVW5MSSsrMaPXJsuzgkUZnkLcCre2iAS845ZpYUyJD1jiFzBEHvRQfJWG1xepjqx5UAVrPsZy8uuvf2x",
  "key17": "2sSZwcuaqxf9mpZdPr9kwiS7LNRRGir1YsX3YhXRpCLvz1Sc3G5ReHD9i6W3bmee2cvevZiT7k6N4pyDxsjdYssW",
  "key18": "mZeDhVUxAZxAm9MTYLwk19KBguoRL5rumwk5kBTXxAF3oumurEb4akKR1mqVVzGXjC65EgfaTAcpHHfcmfQGcFB",
  "key19": "4ABcMgNdz3qwSTvSZ98kSk9xsBVAZhKKq7NNqmuHbi7YzR1j8kv7rG3391yKpZnnvc2vZod1y1s2fG1a8BwhyN9L",
  "key20": "2hWCzRBqG43ysJDp97R4Du2iBo33XTVEb5BZeFjyr7sQ5D6r8KY1JngTh6yLcD6u2hgvDc23G7QTRStCepRgwjYf",
  "key21": "4DxVWuJijBZpNLMtDpQT3gmnCDPYttwdUVMLB2xqzmpaLV72KLjMi5yTpcYtXCTA1GMtjM3Ho7f5LAGRNsqX2uWf",
  "key22": "2yxm9E4sPctjKQCB3KRDZSFMhuPCEdmkQFUYsFsK6UtKVytRSUjSbiNgnJfpuCGHV2q5SRWeFnt3SFdjovVSLZPh",
  "key23": "4K4xeh8YrEoUAEHthuYzQKTjYzpar5Hx6ThmB1PW7nGhW6EAkDTF2o6YwGneTCjyWXFLHmBshAfQB7sHYfR8GFw9",
  "key24": "atzxNg8L8mo6eTkmnmE59pLkbcT3HfvToERdLfXeVg6jkgt5ReegSsvDoDpTYdFJUMrPMv5Kc8GkWdLAnrHvVbK",
  "key25": "2U6D6Qt4Huqx51zaiTH8L3H3gycmqyyk1rPV2yK1BitjgG3SgpjYsRTyEyxq12YAQC77FBKrGH7U7k2LiXu9TMmL",
  "key26": "3WUvDMK5vG5QzSD3Aez1xC2p56hgY1RgpXjuhL6ZGG74K4JADAYnUXJgpioZLJe6E5gBv66c6Bf49YqXojB2GyR1",
  "key27": "3cHMY7Ry1BN2dUgGod2aBRTKdM1hVKf4D4P2T34QXWPkry36oboykmwrCJj9YZJMLURn7ZsSpoqJZnQG8uPstXAk",
  "key28": "5b8hHcms1uwRKwL7fyiGEQ6aEgV9hi9TqpgwPsj83oUvDy5ADKdf9tYvKjvPMQCJM9ph5Ym7J1emFQGcMGGZQxca",
  "key29": "4FDHt9gmuG5FUgLhad7JhRkHDXS5caTJnj9M5xqMom66jabQrR53RnWbHGjby2KUiN8abda3cdoFxaFzQxP4uHKp",
  "key30": "3YxP8yQGKSmXR8rWR5r6esKArPikTUTFjBu1VQGocoVnXWNsMmy4J1UE5N6SZYRczehVY16oyQvavyS3T8M2b5i3",
  "key31": "5ot2NQ1pMoqaJCCPW3FY8t58QLgJNq8KvdRZz5UF92fTAUM3Y27bBdeG2n4sZ7Z5V7d952ZBYj63ckAm4wsPTG2D",
  "key32": "4UQEhenksBUCag5tSUQSsjNpTNWEXYzxkPx7kkRv1Kr6v1y64jpQnRPcFe44M7ubgy9ipYBssExv5fNgFAAT1KM1",
  "key33": "8vcP7a5kVmgo7qDrqXreU7MeKTcquBxxYS5wtxryFbQUrqGkbXTi15pnyrgZVvbJRaJpqKRKJVEAiaGHNy3X1fL",
  "key34": "3Jp2idFN2e6a83XmPfNuLb6eajaqD8RYF9khf7bYuHg5TpxtWLg2wJ1zmNpaHVJmR1rvWHEQQwFqeAdNLY7t5ePP",
  "key35": "3c7pzEZF7ZD9es2vgdcfYMj77N9BcnJupyMP7jRWwwzENDFgLNwpRwNGQpcYUUEgzHNZ26aSwpgYUQ22bEvoNFXt",
  "key36": "5PgF3mUm4ciRdC5TnNsWaRM1wjn4NiJ5JtAN451HFPc2bhnhZsRb9yi6dW3rqPz7Mo53LengzBc8jS5Y3C9FntAW",
  "key37": "2z8nwjZMLc3Kavpro8rA5g11YnEX3i5YBB45aaDaBPV4YqULk1yhtCHebRfmg5xXSbTzcup4HJLFMc4HcoWQqwa1",
  "key38": "3sTLVMtTctQ35gVuZNDrKaDPzRp4Yng16RRCQruyV9ZVQqkPRfbxdJ4NaQxr8XGmWANbPjtGpNDevq4ikVXNHLCS",
  "key39": "2eYyjjVp8EWXWXBMV82nxaonPZjgSeLpPB2ByCFxJPgbwkvnwXsRHqCjyr5gYaJRpsyxU5TYmWcZAncWBGAgszxN",
  "key40": "3Dz5asYK9C9geT6gq3fLXeiAM7sXFs5bHYLWBMMTHiwkE46C7D3NnnVKLqJMqXHKucSfqjRPikigHeaW4iCR63y9"
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
