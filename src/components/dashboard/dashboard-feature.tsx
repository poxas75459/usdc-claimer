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
    "34kvxZDFKZ21LHaNfc36UTYxr6ShPphLEcG7uZthX6TLuYL1cmd2NcyaVSTXuuZyz6FF72TkK81vx2j6ZSZFTTAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B6SjG5gMRYj5FpiVbrmZvFkDkro5DZP32zEb3QsKWuwU92L3o3jM4eZF83f4y9LLvWcbqeW3PFNBgFAQAddGrt7",
  "key1": "2GXgwFCTqrzW3KaVLeksHUQLwXUYBzPeDz2rQSYHWZU9AofsTvngNT6QfmHV5GxjaUzikEYvYZ8DXHhLwx2QgXPK",
  "key2": "2Aku3Bhzoz3p75a59JvKNp9u8bDKCETgNMyDFqDyxqvR8qo4Ln73d6B8bY5uohMdsGsPKid2qqJX8dZLoHLiboxx",
  "key3": "nMmLguG3oEuYwSk3fowsLkr2ZA7UgRzv6FyupVsFS8UHuguWKM61NWjxMRnwB682j1q9iqG9AFuL1qJgP6nbUsq",
  "key4": "5XcyN1QoxLRrGM4hEvFBf2AyfWgMgMiuTXW2o82YZAjn2ttVEEqTvdbZegh1uYVq7HmW75eeeC2GDTLHCNz2boVS",
  "key5": "484CGYphVxaMEFY2uTpGpEQVQcb1Qo4crYfgWTYHj4diV3KaJ6mCPQaZvvpwbwmxr48KrqtogMm5kNByWJ7pkQdH",
  "key6": "44X7CSbtbeYH3os5ZAHNm5QdqQnaMyk3GuYkWNHDtYLPwzqwcAadopdTF6kEGxiuVNpAGGcg62FvRG25USzDFrLA",
  "key7": "5PURQf632fnJ891qMdZoRuJpgaaKqk6eFZ5k2T8WfXyJTcXrCAtb2R2zYY67yovSZABGsSpoRSXLB9BQNAWU1E8s",
  "key8": "2D1CshkwT8ZmKtaV5ZSVYqATuLDPxXV6qhd8VTUFFwM1YMutLEyAkiNWZ2CMwg2LV5RGRvNj6PVJE8yE4muzWeYK",
  "key9": "eCHbPcTUV846JKjthuuZubKoPHYJF7ntdq6F1FxSzu9kQ2tVdC5k2X7mgxCUXZyDk5YD47myGt3VDZm7BcvxNHJ",
  "key10": "42Fm7a78TRHC7ZyhhD7ryDfKatvhrTh82Z7dUnK6hkTPNS1sSizsx88XFqGp9q7s3gxVz9zNQirHRxgLEXhhQ38B",
  "key11": "45geiWDthbzfC6RWmMKF6L3q5stVjJqm5gZ1KCnuAoJFAMUwTRS7gjCV1snVpipCFqHXyh3BWhKUvHKH94mBqSGw",
  "key12": "43xmNZki5CSoca4RBJCTmrYBoGbjMGxU1XFf7Huoa6JicjgRzLABzALoC4T6zCraoGSxM71H7aZSZx42tAA4f84N",
  "key13": "29rP68C5cAj5R2hHz9XajfH9QJuYdL72uqwM9m9SmMXevsjoekXfFpnJuoYwCGyJuguMb2MuYazyEqHN2bi9eoLh",
  "key14": "3ALh1NU7D2CKi43RY4nNwN8iEYw3fjeThY5wPK6A3ZGCPwtkMdPak91wrRP6XqcJZ2mgk6JPxyzVvNiMpj5Cb6X4",
  "key15": "5Krr7e3UjMkWV5qnEupfuTCmHnBe48cRA6MtgGnuxuZi4MFFbcmvKTkfPNJnUyms7nzichrwGcuBJ8DwjSoDAUHH",
  "key16": "3RVWnminjkJX6he6M9DE5zrPxHXVzLLzS9UjJUUQzmZMkWfiWqkM4wbVoS2q5ZJdxnzzF4wkveM8VMbcN3XT2YA3",
  "key17": "5AqQaWKJuenKSU8c9pTBnqu2eUbdS8JSHps248KjRUPettzZGpmbVsv1fTDNEURjewEpXVfk5GyYYisJu5KtErec",
  "key18": "3Dt5usHFwmTdVgJCsT1oEzp88SMviqDT5Ni9P1edv8cLhULz95PaEgMgAfQvoTq5FroHqc8RHPWXP84jnMrF9e5M",
  "key19": "34WqsfevE68BAWFmMmxH57RVeD1Lwfg72RtpefdReHBfrYzezWWz9gLBLXZbfUn9vZivq7qjRj44WqWZGeetCF4u",
  "key20": "5bSQWQTx4L9qKxhm78i5WqRrvMzxBdmxB1rjWRuxnQ3KodGCS8b2UmT4RfA1eb65LRPFth3ZyihrkHWSRuA1LuUU",
  "key21": "1X3uwNyp8J5Hbv5h2gbccLpzDRoeU3vjexX7Uo68iTjfaNuuoBGBCcFsLsmHAsocbonvzxe1txtTzjSS7q3y3wk",
  "key22": "f8awbj41Rqx4ap7wrQooxEM13NceJerR6prUqaAQtoHCYy9637PV9654SSGP6dQ7xGpPbNaVeKCpAwNLnphTni4",
  "key23": "5XhP6KCbH3A6u9wa4WEdbtxyXuLV6YZcKuJcjGZsX6syhQ8U7cmSnP4oWJgp4KTFRVVVMPvgHQGiHaP1Jt3x8f7S",
  "key24": "5v4DKWJFAr46rPckXEYvwz6gNUP9G1McCsAWP6uumSv1k28eJxt1nFfm5aXfYSMnTceeCe7iTRyAbsmQc2KipyuA",
  "key25": "2J3G9DhhwKraUkMwpiowtV8Tw2MFyTmkPkP11SBaRaeRC9GMcgcBARomUJPyycpcdSZLw1HB9WDwGwQVUTfTy69e",
  "key26": "5StAet3ZvrjCRvy9gi7iA9SgJUbXtWaJGNwKUzrR7s49ywEtwAapzMmrTiXLaewqZHnupU3k3jX2wXEyZ8qSFcbM",
  "key27": "3yk1LApkFi1eKQ4VCgojxcDz4usau7RiRfbdjkxdNuCgpxf4RDMc6hSNBzi1tcCyLUrH37TkcDhmWnvcHLYfiyCb",
  "key28": "4m7JYxXA5Fpkf2PjGZ9Yu1iWT2u9N5EHTotftbVd2Wg3HGvCchzbFfw3HFjDPDPkPMkCxVaZTJix72dUdEzhQtEf",
  "key29": "Rqic5ft6ZSNtNVYrca4SGpXz4zgbK9P84wkZAFDLGpvCJBDdLjxAtSqPfusbJxLpu2wkr1MAHMc9D1ksrLmoC2U",
  "key30": "38XEkUfBEHButxeJyoD9CgN6ooQ1D6ESDQeNdyCvwZjtbCs4WV6KZDd1u11HpQsM4STRZ334UX47Jh9W2o1ekyHi",
  "key31": "4EJMnbec91P28ujcLXTLT2GK2cpryPjHjSrDkdb1YBngqigGeviDhHCFiS2y7pVcjL9kW7dhBAe44M2eh1pwdKnx",
  "key32": "9DLgHdRi7EEb4TkbV4VUcsB8uA6qYxfaA7A1ssapHxnPSgECqh9y5RfgaM2n95DwkjC2PgS9VaXJe8jmJpmKu2D",
  "key33": "2sfu4wWsfxzHRywUpvc1aFQFqb71XPw2kwcXbdzhfkQeAKKbohcTPGk9QsNnoKxqsbuvbzKdx1YtRa7MGQvwUKi",
  "key34": "3BXtQPJWm8CAy2zjiQ8PmYyJJ2RFkoeVmsdVbB27muLs9txWve2TzX6UMCFb2yMBq3TFESuvQDEJrdEzDL8oBUjm",
  "key35": "2NfqZY7XKKbyoRkwxK3gbpuftb4UuiSZnoAAYtWmV9kXJjwbwHD2LAgrwc3nJgLQKufFMD5WQqteSXGmKUBsv9E3",
  "key36": "52X6yVAfYLfmNZSh54nBFJdTaVYwYRBmMf5Rch58dcsXuYuP4z76Whd7A8o4ffbQoo3dYVU2FFrCD33vXWG8dXip",
  "key37": "3x3KGB8rs9j1ChmSq4dJ9a2ZYonFs3Fzf2v12PTabNp39CSje8KxQmY9BCcSF6eaqNLkCCogzdPXs8F5zr5QaZRy",
  "key38": "3wdwCSaz8Tg8cWb9X7aGKaswAF2Uyg4ABSkU82xL98gmLHGXPK4UdjsnbGRkciCPhnLMAsW1x8hcEth513pxn1Fw",
  "key39": "4Akpasvy4NmkH859rg8BTY2TYqE3Gh4kSRyC5huhth3XM6aCmbvXpgnusgVErqjZRf8osTXYp9gwVjsZe5gpXvh5",
  "key40": "tAN87iUqrrkAnj4xNsxQixuSj22LMjQWVJcHwjWF3PDMvCz6FN6Bf3k55hp1uznjAVN3Du8HTJrps6NCvz5RWz6",
  "key41": "4yc19sAmJdB9SY5uxWwAkcERYBttJ5wq7aenmqvZ32g883MPcBpJ7snQgHEGHQWd5eeCuWzBcSZ5VGvm11KLxCRs",
  "key42": "4Z87Kny9Bks7huV4LnqFq6v87j7M5T8i8dXmgAgC7qRhDUxTtBDj2erVynAvwkjgkFv8jZktCQSLgFUS72PNrXnj",
  "key43": "4NXQvmY1ZGxWT8jwCVu4u2G41diRBQfxLLcHMm2B2PNapFedGBCKm5Z5iq2KLpxgXSgGFRvVjuBdXwhrMGqpdJTJ",
  "key44": "5oVhFogZeX5ekDrgKbHvudayZUSQ2JyYFjARhB4G3NfpWLm6MiU4ESZeFPPpe4Heb2deEkmSSQpNrM9H2z2pXLec",
  "key45": "29XGbYTV5Y3DZS7dshToeq5KtkCqLuAXgpk6YmPVGKm5XaUcrLWaLzNbMDSKcp1RFi1p4cCgKEpZsxrabwMfsQwv",
  "key46": "3rmLpD8dP5Y1BdkC2Zy6iuonGHoPdMxz4n3VUgctREtw38Y716frAsJqHdLoXbHsK9Ve3cJja8NJkKJZezNCnVpW"
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
