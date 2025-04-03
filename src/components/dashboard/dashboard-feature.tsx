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
    "KZv7mu6uwy4EaB4S2QJR6AgesTdQrRJeNQwkagAaJADiHayg1mQfQpy893iMDWpjdvjKT9ALsjsjQkLEeveSwyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eByDeDg4MqKoApsSC1znr1xfGZVuKn7JJUcBXSXzGkXvZnKTpX1fdNBYqZsAELa17t2u6WtoeQKtZKeEejZagjF",
  "key1": "31MdwqFeCQ74kU4F7JiW7UwJK5S3diGQQWLUasEwZf4d58HYjvAEvSWVixYpKUdYDkEHVNQydaaAASg9HEnK9T5b",
  "key2": "5f7dr7qEZ8LrrBggL18KDqr8488A7nx2ph7QreHH1Ycg6y3eRiVa2Ts9WjXPgaqXNS6LSrqFYjTRgu9irGSv9WDT",
  "key3": "4T6YSR2jwdXev7tequASXHZGRcn1vAmTpKMhKrkmHopRzyXeJ3RmDrxrSonWYao6URMtSsiAHTVnx7bBPvoigUns",
  "key4": "2mhTeTFzRJ4U9sjnWHLy6cNeC6S5rURrFKdfETncs4KH6zHTrB7Z5Te9xQRmLZwV9jUeEMHYovVTetdLYidmLCXM",
  "key5": "4SdbSC648wg4M9Gm5oZecRFURKbLHDL9QkwYvRtmDh3g3ALYoqBQUkJvhEmwvyFmqM2xA9i5hFLV4SaTkPCykRo3",
  "key6": "3Ub3qhmXXL3kFvwUGMdEgibEYC2vgofHxt4PBTRc5trxqqWc7LPFCVS8bq7NQGC5NfAFR7FFidEcWSSMMtZizjGt",
  "key7": "263aAjKE9SiPJrqUVNhqZS6ye8awXG2SJ4AwkfPqpCJ1YNBTB6JpasXgd4ZBKqQtBAUKxzJx4uXME3GvBcmKyTMt",
  "key8": "4AUZpnnEBEYnF3cRXqVqryyWFRQXFFAh3jo8BZjN3VVLKmAgika617gMazhGvwaUqeLxSfpufJobZk8khUq7jY3z",
  "key9": "5ZVfrKYbQqbkSz9KufHQZm9UtpG7j3sAJVLtnfrSuv9AB85nyhtoZcaJikeKC88hUDEu3iYvgMvTeMHWdheYMaPU",
  "key10": "4i1AoD7WcoBxQZmG8pNFGvdXgCRFnwhbuAyz723LLrtGiZRWKAEjVL59wo9ZSEiDJV2NSECT7EJXFnsfVU46UKYj",
  "key11": "5TS4PPpgrJNzzY5jkJkesH6VoUGoEyTW9Z18G5zt5Bc8KsQ7mKCtWQXhCbp2LqekiNtwXLvrkEAWKScGNNAvyfea",
  "key12": "5UZ1a2pAjPmfMLGEVETGC8AQv7G7tMKXEWZjUk5HFXcDYAcdU9YwqHYMbwZPaDPjhqa7ENqMrVhNhDWayEQiv96a",
  "key13": "2VJ8wd5Nc8C4YAaMUFTqZvzSLwWUpXru179j8j95snJgKF6qD4c35THfv52xMxaHY5q38ufQbVjMojRAwudguUaU",
  "key14": "3GpJmrwRbweStgZzrqW6LVQyQXHKNc6kbQQ4S3j17C3RHZnnz2wxysFcznj6s58cpHAZSuWbVK2egiT6uRs3xTQe",
  "key15": "44wLUb9H7gv7tsUCrhQ48Hg5g8prKmCt7BRUTNo5g6cLUBqiMtqwcCEwrSKJwN85KTtswC3VdkdLMtGQYazpA6nz",
  "key16": "4VSAbRnZQbXcNmS82BduTvb7Wn4A3xTitqfe97xJ3Lvw5HciUz3tAfotWtWp3ECf33ZURCyqtCQRA8N53jUntmLM",
  "key17": "4dyD4YJ7besphZDbK2aVyMymbnHNLTYHuqTTrya3ZYHunfcNG9ooGEgsTdBDEmrV23ErEyTSu3BWeHoQCr81sVTM",
  "key18": "4XziA1LrkkG8astgUUaweWM3zvbyzgwCKDpa8gfoyHwkXE9Lmx8emmQaryzCpdwH4dYQRMKgbVxBGr753QV19Gkc",
  "key19": "5rSUYXdXoS6noPq2yCHgMiJDdCLMW7w8TLLqzFNd4Uy1i8aBLqgdEgeg8ZL9E85qYwU3wYfNPNV3bQbRyz8WFZ4m",
  "key20": "4rK7qLTJFAyVAoz2FuRNPkVxiEmFLFXzDApZsuPK3uieZbK7c6kmNadxHcHCzdFuQqRagh1NcBNPmdaR2hGqNp1r",
  "key21": "4kcJqYNyFW4KxJkdYNvJG1MLF57Wc3AMrSwo5AAERtJMFkHyF6PBHbcQNiuftZKWphn26Smvm8SiKWD5yBgXey9p",
  "key22": "4pCUdoiMcKRUQKRqDu7cPoJgR1KFoZ56oPcy4gskeGDibtbrVGiG9oS1ZX3rjQ1N4k1LYXoKJzyLt1KQgVTdpgkK",
  "key23": "f8oMobEF5PP2MDz7q9ugVNagA4hHPECr2BgtgmoAs3SeBkLFgk5BxHgzuA3isMe163XF1ZWRT2AEXNzKihhxpXM",
  "key24": "4zUjZC9Nx8HuSPBPTfKGCDtx9TckWTLQqb46ct5qVQG9dAk42Vk3hLNbXKsCABHmRAHYkF7fSBXfWJja8dus6gDG",
  "key25": "4vxTA3ssij1hBghHREeng9ojKJ23BuWmSz2Xcn4sJvtJi4MJrXXBEZoQf1KRhZcWTD9PxoyNFpzrsE3Q4UxKNFfd",
  "key26": "61WrjsD79wXQEUiaBeoXFiXVpiuJjoR6PAd451yvfpswgxgCRNdy1rnG6NU4WySSKNNpVqE3L6B52Uc1jfGFHut1",
  "key27": "3rawusnfz5AaTwV1W91k5C8KZm39R3zA9YVGg9ytfJQ2qWGgapfhV4v26U8LedVsA1SsfJ7M86eaCgA8oqEPeZi",
  "key28": "4cYa3c4KLVT3cbJuKVpubQtL9yzZ1UPXtDWgo8p2N1L7ctRzFozGRmMBLuB518Gh186Yaf9GR5yBTD2SergkXroj",
  "key29": "5HEFbedSRXuhCrN6EoCqoZ3wLJzBsVFva7wNounekUkC2f7DQAhDtMKn5kT6Uwc7DBP89AuaASudC53CiqwF8TYf",
  "key30": "3HVcosy5dHQU5e5VegtkzAtaFbZEaUioABnnFSoAn2QfvRBZso8PAt5CViVbmnvg4VrombyEp92je8NLKVggxu4K",
  "key31": "5qaCBvwPGobZXAX7BYVhVTTBvnJxBs4DUy21pybfzZKGqwakAs5SrteNVSKzmkXUkASyS9B7arbBhZT3c3fmPz7C",
  "key32": "3DJG1As6HDvqXRtoyoZSqB9qCUoMNep4vUow4XERaokb4xtLJrPzcJoMvUpbLiTXwa1c4Kb66Z7etzf4BLZHMU8u",
  "key33": "DNDLxALFUDs5PsNMWh8Kq5737FWFf3WEoUpXkD8e5Fj9VKzqYyCFzmjh2bGpTgGFLHt1WKgJCVLtY7x17hca263",
  "key34": "532PGtjkdRAAp8fe2xJkTiM1yi2JjNMrTk2hbzCiF7F9VVKEWsaPqmmZ6D2K1BmCYR4AW6dsYRBBypN8J6UnMuvu",
  "key35": "4gJMVeNRbTswuKq2VKmX8hXEVZRTnnymik3V84iAQiajUqURBxVNfZNjnKqRsVMdkC8XNadx7Lm9Y4MKzKcibCZo",
  "key36": "vdCuDNt4iapCCJmERed2HHXHPUszCoGq9AwHq2VbX887Fnm5mCStbkcfVYHb3uRFxC1eeAzM9SARrTn19amaYwb",
  "key37": "4hZr7gCdsekwENEkkPrFMKmuhygxurSRdtCdcm6V5cqjwfa3dgBHwqRnrqGNBZDDM8g2iqjyAvr9ZAM9aqiFkXfq",
  "key38": "pgztYwHukPHVFcXbaZzgbhfb97Fucm4JMbiGD6ZfEywXZwR4pkFtGJnMXXTtPMpS1N8sFhhBy897GoLBRDiNGvG",
  "key39": "2YKhXFkgyGRbDqxEbD1vBCnvbkh5qPjuDuo7PKgrhQKjUmMbthXbu8rNXW5axKWX1SwP9c6h1ADP3DCmTyEGCWxV",
  "key40": "48K1VMG4j95P95qy1d3WaymbxCK2wsKQ84ko8uTjZhw34TjcFtDdvUG9onBamhSfdeCy3s9tY9Y66LdPG6t4pdsS",
  "key41": "4o6FEGQERLjybb6U9pHnbqnehsbH2jpNprpb5w21QNzMZa2ykRmqZHqbnruMax8uBF1ZWpkaXyHGDJvhyPnLggGg",
  "key42": "2vKXTTCYM9pBmJUtCHC65f3dq2NM2KkraVN4fGSqiCGrVaz4V4uVaQQsgL1SwJL1q6UV73ok19NmEvN4Zv1dF7MM",
  "key43": "5kMn7azkscLu8zdYLX4upzqUzdoKJ8nKr2uzi535NNNaM6f86oktJsbAsCaQJJbqMuMYrS4myjeapmYGZuSLgWzP",
  "key44": "5hXxeXVPNvkW5eBjva2KrFzV3jE1ShF5ud8HPJ4vjJeq664QcAcL6SbScdcqofCk82MeQmnpxNXhXpQgJk82wdqP",
  "key45": "mN7dohZc22bRrmiRFzWHZM1xvtePSshAtgKwiYT7hhhhNtSXpvFmX5CFun87WvtBomAELEcMLiRXgfqnHs4sjR5",
  "key46": "4SBXzK9t2CYGonFHKLj3vsCZkkeEbJjh2PkHWov38YYaAx9qwkRdQpca8hsUroCCQ6YEkovdq1aed1jZDbf6J84p",
  "key47": "23mZBCEMadhFSbsHg6eNs6CWTsE9mKRWKN2B17ApUvXFmZFNbiipu6ahkfziFjVifRkEn9E5BtJXvBRC6dV47ZRH"
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
