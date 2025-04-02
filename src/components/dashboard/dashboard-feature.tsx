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
    "3a23nd9nD5bDXXyTcQE9yFKYnKKhjjr1aXNEfdHZ5UFruFNoWe3oruefN8sSyBPjideMdqiqju6623fUUxBWXnSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zf9tvas46XxaeyJxpVuDvBy1Mr9XrsqH2TJUat5Ei3jCAhDHn3mVSQspYhF7HFa7J23QWzUMurtyY8VEJSdg91w",
  "key1": "FMg52eWn15sTqjifH8kSQk6RfQWku1zWqWPDKsV4V12aiKosPMqsdFrKx1vsttz8saZ8CHxUwTeWt8qkwnDrQSY",
  "key2": "4WKx1Btbc9pCzL51RjmnFtpLAi8ncDhtBfEND69sVSBr2M3qG7D5WtWUWihaBCzqnrsNKPtCSYVkqEQxARMELDCU",
  "key3": "2GzZgpBmPJpcDZceuDebJu7CPeYHcmvQQLHqatotntj2Ch9yoPgSgRhwFXh3TXmWWbKwgYmKWoJiR9B2F9zfKyAE",
  "key4": "2duunBVjp1f66xdKqZfvZ1KVTWJ1Ek1j4mri9p7wy6SvgoETrGviwyJEmA9jx97HfGkFxvrZH6eoLXZ9MdjQFntW",
  "key5": "4q7k4AoZ4P8ctLcsQctnvXfdXGW68j6fXuGTNQREWAtRf21Tp9q5HHqpHzStyZ3jgBhQDz1zzLKzH1XsQdKfoh9T",
  "key6": "2jAEpLZnMcnFRsCoUUJNHaQEKUZt6isEi6HrhghvAkAvhDJFQKXzYd1UFa1sWH7vUNkGTMWiPJuoLGydhC89sCdx",
  "key7": "qgL7f8kraURVxwHEdbTzLGsTvaQreDnkgk9Js6Xcme3D8Jbztg1RAqvbBR7vMNpZvDqJNgEuVVoFx9fn6kK2r1T",
  "key8": "4L1YTFXqqoyXczuydVKumw3oZrv5p1brugopaVZsWuafd3ieSARksBHR1FCCPAhjsdmW3BDF8j4TnBgN8TJSGd6L",
  "key9": "3MEmSBaP1z5cAoXStRN9goWHcuywB7D8WQPVhY8wiYvaG7ScygfT6W5jg9kSzjdzYt45UDjj3PiWVsEobRRsmxTM",
  "key10": "3nDDQXxNRDHF4hhEeLHnbjsfZTtDQe1UkZbJzyUQfFFpkCFTKdSMaoTbGGjzEtsrxmNRfD7mKuRjdPQUtsDMCYT9",
  "key11": "322dFL6oCXfJbfdRuovn9DpeXxaizjNjLF4jckvJxk7CbXVh6E5NjRv4xzPRias2i4VcP8N8sK3CUJSKysZqGm2S",
  "key12": "2J1NRYE4mQ1SnJLfTRKMViCHNC3Ysvwd6Nvd5RTyhL5MCmuxUyU44AkfBNJxz3ThJVqweU7kqm1SbYYPqapjXvcn",
  "key13": "VmYibZxe3wtTkafEQXbU4c4Vz2wHTniFa2DoSaJHLNk1AvzVwwikNGcbuHfekUd7kKnh3L3VDpGqyihCFL6b4fG",
  "key14": "8Egwj2fkqmbpzFAnWqaPcMt5QQGBkeJZnNmLUtHsTVU7764sT1JLyKeCckMYHpMc98RRG4RbvqamTj5tCaXoN3y",
  "key15": "5YajhA2jLXLpbJzfk8aFxnJrXheiG5MHfopGKuCfK4dtLJDXsyy6oN55Mk4gfj1RT2Q8Popn4gS7rCV1umBB7fNA",
  "key16": "4iw9WHrYKrL467wBwYXMfwnrMsLJFTtMc8gU3doBiyZxwBedDNX8FiByx9oKWgGC2Y4XUFgm88dFzyeLtLkBaxSn",
  "key17": "ZCMyrFJBVHzRhjydbL32PX1RUHXzvq8cxJXQtkLCMv1PgYEJcuuVfQKTWN5jgusT4GqgBAqxb4doMhgvANQdtFj",
  "key18": "2QHjRgkmHu27W3Tp1A6uyGnCan1eisrmnbesxGpMzKGvxc1JAcAchiTdT2UU3WCXU72mcDZeeW4LWyM3RPykziPH",
  "key19": "2GJWdG2KGGDU6EJC8dG3utcj8cYvvQB25wzyPTHioxPr7m9ivJS5Vh3uReYPwnx8e1pUeTmjn8sC7XNEsbSLix5H",
  "key20": "2iPEdomcrHHgw9c3v5fD1KEb1kx3fyEzhXLPRJXMwEybF1qdTgyfwzUF8mpxPmJXoZGcHtEmRGm6HpeMVqozgaH",
  "key21": "3Fqu2FMMBSdqgyKzW1y8VF1FaDQfrjXqc9wQhpN5UdZGgNoENdorpGmtKBd5hLuKAjW59M29XLMvLuhB1YcCxug",
  "key22": "51JLvP1JP3jyJcw6yfsorJTvZ6QhNEF1UAS3Ghqe3eJCys97sPoKD9BHegwjJnbKxk8zAQBZmQQ53YeZ51oMb1JM",
  "key23": "5TzwtqWTT3iYT3FtDoP9VnDhMdNVPekHa4iY7377Ayxxb19CfsVG9WqpyZJP5qSxPM9pjAt6741SBFVdi6NwKLE6",
  "key24": "T5BVtXb3iHNGCH8KQTU7BMmbtkFqEC9LurQMYhmLnswZn2nvumEYq837avA2Msc119YsnAWGM51v98AXw7HfRtn",
  "key25": "48bv8QefqLr7YB7uDw2uybwQzvR2yp6Zj52c4dPJruwfGHJ1BBEcUWFD57nazCSaPNoVDfL5M9rQRxiY1CiBtfW3",
  "key26": "5qwvGmZtiertFNGdwQfscQ7REQWG97NKb9t2opWM4hTVQTmj4n9TxP8gFz1ZFGUF1GxVV5BdZqAPbULTkNqXLVjE",
  "key27": "35NG4WLm2qsiftVpDP3B7Sh4yrcx81nfafjibxGmxR9KqNJA7cNnmaTDCg5WXJdvAQQWVuH6k1ecSVCeKZ9bSJgg",
  "key28": "2NKuEsyTjvYVDTiR2eSuw9mmokVgq89CCA8KE6Akov5X1Gn8rr17sdNEvaeV1eTQ5waq8ggjpQQQ7NUHJBzXmohj",
  "key29": "4HCdNEJhSuAtNz3amhz556ba4MW1epWjVcmc8HRuRh5rXQeeNQW4KXA6YmJ6SXdycJ8qMfqutA7GQAmug2Rdg2X4",
  "key30": "2hBBuYFKEuP3cxsunruXBJZa1ReMukzXftFQiGz277ePHeHgio5dJAYVHECjUSbFk2nahapHPQ85MQ8Svco4YX4Q",
  "key31": "57RbciUjvfLnrTariGkBgELupDWoSVEbcbbXWrYR6GNqRUfPMVDKVNy4qs22P84QWFy3Ci4nPYABA1mHJKwEvisG",
  "key32": "2ZQ7mNaPUmphPR7aWndLyp24yeq1pFHEDsCd2i3cK82Y8Y1GihmZiogwqNncRV7gntQnouV6XYFNhjJLCYp5Cg4b",
  "key33": "5hWLW7WxQ2fRNjXBVC69afoujYVChELq5C3Wx15UPtRGh6bxBMA7RhZhGPT21HJ6ZFVhr4tEYFLDNtJvrzdnmPFc",
  "key34": "GdXaq6579owZMrd1Y25fDMxDuxfLdVPW2A7FNDfQsark1rc1cqSKSiLpGrhki7xN639NgN7fHzkTYhFJmyNwBKP",
  "key35": "37pH2sRLE2v6dUfvSSwG2UZGJq5VkNA1qZL3AkySH6RTSTFkMTrkYH7KvSrS829nfgqMREe2gPuwhr1NaCt6cFhf",
  "key36": "57mE9cANHWE2Tjb5S8RC5xc4iZLKNCWKLHQzmXCgCRLZ4RRXDRTXRWNMhAU5Jt7iJJsnmgtDE3LofJpkqF2r83Y4",
  "key37": "5ZvWijsAt6v6ujzw8MxPEYMVHTg2mA85Fzt5N3iLLjtphwWeCFf2bbiqajphvq8hKcjEZeCuKWSGpJE2Rk1W56yZ",
  "key38": "3nsTBgKQCM9qsnoKdBKtYP29QSu1Aug3Um1PGGrYoKXx4EFtg8pYEeoen1K4awwk5MDRwmcdhTRWimtcF1wVkV4E",
  "key39": "4SwziSRUYUqArs7okykSERZSTbGPVeFSAgPzPqnAat5CTRX7iQrXPCRMWm3wBiYRN87CjCQiUWtgdNCSaeK8msGr",
  "key40": "9oE8f6g83GjaLHRourTkpvCDDgDfFoKThStcur11fT527zPaX9fWKBsoKL9RtzTDHidj2o4VWB9TcjjodJoVqP2"
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
