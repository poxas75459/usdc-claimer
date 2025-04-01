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
    "3cdrb7LuCKMsEe3LrwsyquSkmtNZet1jZ3q2o7jvQPVJhyEZM8xhAr1dUxSVZW6jtwXikaEBj7bNPMPqukaNwxzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PKd4t9x54aaChUrCpVB33bR1QYtAwgXJXa1TF6JE8iZqjNQpxKyPy7PVny8x3YoPTuwLGNJdMQPj1MWHj4TdFCq",
  "key1": "65jA2y1YymoYha1pmuBkxAku1Q7as6ty2bYDRUtssy3ncCYfiJobftAWbikB1pfbeHeMWZsWEZkFn2trADUnVSPu",
  "key2": "5K2rxe7aryeZLDu7VXSF5eCchw2WuaFt8wrg1cPUj6R79D72EoeYaXwN4XhRejngMBxa1Ur8QFHGdTRYsJ6HcarM",
  "key3": "215Awy9FMggwvKUC7WTCSuJ2KtToDtHML2fPd4YaDZkjiua61TTih8iWK81DaeYzuypoHJR5AE4JGFXBqzbVLq9d",
  "key4": "4B53XFkqYWisQiwgHA72daHAtEFNxAtZNAo3UuDo5FxqasgvcQMbdv5nRMDzwdxQJeXearDn6YgNqk3yNKbjbhkJ",
  "key5": "2kBbg7WGfoNQdKVTg8VpJqGwEcmWSGZFMVL7sKeGVqoHLoByVg1cPsFeeJHWssHRYopHHzWve16TEHev2aG6hkQP",
  "key6": "dHEN6F12nK86sPVpNekeLtK7yEK72ztnYdigH3BbmxaNG5kQEB21DzSur2Jj8cxAUdb16g4LXywzQ2NZrA7eH8h",
  "key7": "5RC6CkmWQcuGNrpWXxsSDvNDZ8DbXvramKYWt1hmGvSnCB7vFbD7zcH4zn37ZSsAbYgyJhE83sDi5MbRVDXiptPw",
  "key8": "2kBdkA4GdcyrrCx796Fpzvku5j7Mg4a917GJaSASWB8pBp8oKjtdtuXFAVt7T7JH5CbnN3kZk64ZPfDUHWKmDDHX",
  "key9": "46E7ScrnV9wFCtLx4vCFYasURDZLWXZjzLnzCbsxT5dLBd18fKAz7NCQZ9VCR41TGyTQbH9oP9h6RsgoW4ihQzzj",
  "key10": "3DKur1JBMUpH5JkjBvF5jL1zuzuE3xJHQExwaMZaLQ1XbYUnxzzfFe6hdgj1DHbusDRWGvcrmDfkweCrsG9R3W92",
  "key11": "4esovhagfaLLD4Yq6VgF859VEjmwXzH5JCkQJNKwtatEMP1Vw5x3rQLAUPRmyHhBrovsYuigCTzq8SVPghUUWPEE",
  "key12": "37HsH6iPt7LZN9y7nKYEpMQnUeKZb8XsHa3q466sp8jxrg3jUG5dPWC5bGq4cgpvaRFJFepvXtxaZ7KZDdPVgTCj",
  "key13": "5kTWLu433toSFHoza7yJg5iSAvwqRHVEDhiw8EEDL7YpcBasmFUSB6joNXzXmcw5EpDA8aXuMxdhLq2piDBKTdoN",
  "key14": "3Njuw8iFJ2QWtbRM2mrVu9HNohVFFyrZRGQstkxvwAEf9aMmVfGwnYxReyxbhxbWWPZkxBt71HWVKG7VbaiAAmQA",
  "key15": "5UEZUow3smqeqk2DstTKfbnEPncBLCag3kQ8CT32E6hKvsizs2rXpsdMNeoL3aodp1YkCZgR9PgaisTSMgVKnRzQ",
  "key16": "5Fc4FaQa53WNHj3HAUSTangZaGJh7WHaZ6jZFHW9Tjrv2Eruf6fKRBQ7rkdSjHzXKWJCkzL6iKQq39jVQLhTJD3W",
  "key17": "52htWdSCbwA7TYYes54ZDPqxBo65pb6KQEtMaHfQHeybZHdbhK8Q4cTuj4TGcTtKVZwf6M7ku62oiyFaSSrbX4ep",
  "key18": "5RKyoRkbwu1G3mMAv9TnL5ArYj69HsmXUfA9aNc272iN7wc98U3F4cb31grZs1nExxAD4TWiSPmDd9bUACsq4TDC",
  "key19": "5boqg46rtU6dygPGwQ5gvxYnkS2ZyHWTtR1FefjXhyQyAJxeJvP6PLw55U42Wt5xNhkR7VHiKqkJKUmp5k6H1rTz",
  "key20": "4HD9qR1zghGmuGVThu6aENHCJ24ZjCHigyMSUcBPZngJ6wU9n1dcbYVh5UgFNsufB6mPxeJjKyz6zAWJYxX9uCpF",
  "key21": "ZvEYYQu1cDg6j978mC6c2jvJn52x5ruaUV4UdhYF9VRgquYTe5MgPGcGEW94XkbA4eVFFX142rM4QJuWv7YXDYW",
  "key22": "3vJ1S9YoDadXj8kLMMfNFEeSf6gsoL2v5t5Aj8t7xtKo2fHWgmYdHax7JTMHFCxqVEgj9yfe43AoiWSuXbDE9wCv",
  "key23": "5Hw4uocLd9V4rxeKmL183ykX95ChQAvufJacPEz7vyuShzqT3zuuGAfsGKoiCD3ANMrATor8sEzG4ixmLw7WTBkq",
  "key24": "38HD5sBokKSC7yEpMngpe1xf5m2oNVT6RXmBNULjB6Gu282ETkZcExDFNSdqAWWEwBwMfMXoZ7uqtNdSxiuGXFc2",
  "key25": "3HroyyrVYWzHcTxBdXcFMNcHBY2VXuihAdweU92V1WH1AEyVSZL8KSjnyt99xoQk2qUacwWQwJUPjsgUjLLcj9kx",
  "key26": "2s7cg7JhrryUcqGVHanWh9gsC5jdJoQVU6E2C57L4YJojzrTKiTzy7kmwQk1m2KQhrkojmaNYsbXDLD2JAKGCGJa",
  "key27": "22Z4HBb72HUUEa2uMeSZ2hwLvxLjXTXUjteodKCAN46LVh3u4JaTmRo27vFwoCN8s2bnhWiRn148EKnis4Ck7U8d",
  "key28": "4FZdG4oMF2M93nSb78BwRMvZW3ZmApM3dUEU9Gyt3ooUzqNekwwyPv1DseBWoF7dJ1753D9y79zxJzq3nqLbmB3H",
  "key29": "4hQgPCjHxR3G8uCD1nKpbqkRR5tQywZxRKLhemYXPdsxbfSmrHCdDJ7UcUTmjZ6EusK9fi2hX5Ci4mwTDSv9tpZa",
  "key30": "2UC4UXRPiLNN8npxGNQ4HMvkuGkQuBy7R66MnyfXLMtn1yyKUa1uZhjgwKha86YdAyN7PYwSSo5gv9ZTF5GD1uJV",
  "key31": "3T5geWwpAqNnX6fpryzZUn6gGqChaMRQQP8vNhmDruCNHmB2iaMV4bJqyvNfGSnxo5BGv1Gm3Jq3RmBouFoXf7N9",
  "key32": "3X387ZYx55WAosJLpWnMb2bfyfNsYXrdzGQ5qfZTLqaRTrotFK4F2JHEbyRQ5QGUQ53KQ6NuqNBmHiu9Fku1ens7",
  "key33": "4EHmWD6xhLSeu9fouxWBpg1EJDyQ1jJdQmFNbeTmYS5aXftn8KrfrjuLAsuej9A3WnxTDNstd1PnXpw1nnpcKqkb",
  "key34": "24mfNig8U9jtDShh4SVMMdNaBFG39ujE93i4dQMDgRpv4KqcUUfJAYRJyJRGnrT1ZELgckBGHUnfro2WZMX18T2S",
  "key35": "44w9A2SUiSZZqRyBr3HqKz1tegdj3V4gm72hE89yBdbVJNgjDgndGv8CCprJJLETAMWVTmRB9JnUQ5HfoMMujtPQ",
  "key36": "4oexm6rK3oYDNTGsz7h34kgk6v4MNQFEgcgNXBgSHeQ4z6SwgMs4rxmWanNymUopSxxQnqMhHM1okVCjxa5bs7yq",
  "key37": "2gaodQAVMdksQXZd6J2jPahaDDtkCjhtSMqtY7WQfjyj9mBjc8SGnqa4Y9J6FGELxQ2SMvEZhV4FMfe9yzgh7vxX",
  "key38": "3aegJXpUQkbDxzvZv3pJocKE3WNTQay3NQ8hF6zUkktJd3V8Vg6tTsHVaqeYe9pgCXKP6oN4HLdzzFFcPYbs3KLq",
  "key39": "4x2mG7aAuvV4jmmYJnEve6mEgSNuZNFWr53xad3sg6Q6TUMfRtDif4GGsed7gNeUBmQT9amb2JKykYSjry83QBd1",
  "key40": "3sPDdeMRzKgvi2xqzwymsDuiMALuBPDGCHPTWEsb3yaqeRwpkovjQe4ZhAsG13yQpS8mRtZx4qd9EoGr6Ni72FQK",
  "key41": "2LHqcFcZKqB55GAxX2wHWbZAmbzHZgsFuMZGTwJMQYw5QG4gaCBnSGstyDC5PUDjxdxRHfV7u3uk48LBsx38hNDi",
  "key42": "5PTWS9aZphXfJZ1uio8xbmyJ9qi6pmC2gxAgMp7UUkVQd1ofyzAqbZPCgu7PfjyTEBtXSVdZ5kBrFkCRh8WvG6Nn",
  "key43": "34SzL5cWW168QxdD63ir3M6HtHRWUGNoZngQDZsoo7TzZCuBwJoECEaqqNBzZzyCEFZC7pNhE5s4NBnmzbfUMLe4",
  "key44": "5PQR25zz1kMdocbtm3vPpAVutexisWKuFBRNw3FWUGWHpY5zXdyWawtV236kvtJhnxNKz3ynsrDHmCwjjDfk91UZ",
  "key45": "3rFroPVEwiM2YmpdqSK47ogJ16b5gJTvqNUxWVvvfA5jCuAxdTawNZfxAaTMFHWVQMAy2tohpnwAVYy3TjqTMk3d",
  "key46": "3aVybqoZZK6YjwpQcuPGNVzExYipDLqL1sho4aU1Wopaeoe5PAegzMcH3TD1wKZh5Set8Nmvw6eWJXnKEzhRrCFx",
  "key47": "64aB4T74bbf36XHHkTg4Wv8TAxxMq3ZbVSmMF6fsKWAsmGjHZyqTZ2RSyrVWhWgdCVXgJFwKdRv8fRsE9eu7SVNF",
  "key48": "3eZen3zBNuUgjP1YVv4bXrYyYUoxaXoyHN82Lc44yLoGG6kuu1Xd5Z9rHFBSzbGDR9MTE89EKXhQVW42ao8KDMLh"
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
