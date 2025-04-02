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
    "44nNJTMU4tzRWNHSKwBZd8zdJpVdW6o8bHtg8xjg8mMrqVmZ2bx1XDBNLJGQeJYV9riPtEJbL8noCbspxAu9pvWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6dc9n6XnUD7H93dEP1qbrHXL7sJT6Z7cPSTyNTkaPmW3FogBpUPs7rkLYDkB2jrinNBP2aVJxZZASN7c9ofG5w",
  "key1": "aV95n2ekv78WpFioWcUdmez7UCo7t2ceCyP13GaYTxZVfuQbobJ2VgVHg5HdLkhKwjMmZumpZRNPzr6Mdb9FzZ7",
  "key2": "34LV7AbCMmBmZrbZPtTSisNxK6L1V85QstLo3N6tAabB7VVw9Y4g7PPbTZECCcXq9P33wx2fsfG3HDvb2FCGD9U5",
  "key3": "38vSBsCKWp6JiXhYB35k8iGAY6wK4TDWHrmvbuMvUhUViFZZMnffde1hVzHHkPr5tCKbGgiDbpXqFChPzKK6YbLm",
  "key4": "5Gpak7dgNLe1zVh6yX16Ws3J96trtGrUWRoQNboDt4inXuJQaVKMCszAeZkSDqh6ZCM65YBRCy7D4yMXhHeDcWCF",
  "key5": "27szQo5FtLgcE4kt4H2kBoJ7fBUrsaDCGisDHkeCNzFymKmDpS2MS7yatFuP8XJSVHqQX2Yioq2kGXedoM9Pg7jb",
  "key6": "w2LMy86G84ybjnJzJotvTeLJnYRzm32ykLSCaJC98otdLWkytvWTQrowS5mtT3AyQZdsTmeJZkhZv4R2cUs2Ht6",
  "key7": "5oSrdziADXB1J4opDPEhsw54paYJMw7hLCTwXspu2AbEBd9CB8MQhzSckzBr8T8531Za9Vqo1MmrSNNNqVte2f7f",
  "key8": "QdNNnrqWYPTrJHQWPxCyoYVQHPcWA3AJRrQgwfAd84tWxrrvQTNBhhCwwc1mSKpku6s3Ci49LvtUDJ7GAusxR8Q",
  "key9": "61hAEV438hj5yxE36VBQ7AktHJBz5Lx63StFUGewufDmeXsgCoNGJqY2Nxa3orU8e2JW6666FTrTzt6prK1gkoeq",
  "key10": "5nQQRa2qnUAZ9HYDVwQrWSjB4xHhb3ZqreZrwBRZBQ63rJLzKKLUNJYsa6Z8iZsFUcTqJJuqoV53r4P6X7NskjBk",
  "key11": "2bxwMU47Lx8tWTJgdffeDnHt3VTDpc6mHNKETGuEADuGwW2SHjN4Z49zGYzMy8vZDsZgXboAQHp9hgUocL1HGAD1",
  "key12": "5ZYgS6kWzLC26rT5puA5Jx5214LuWFXosuCy9vmFtQ5DPTHdbgWfCBSSkKUrx9RdK2onzf4vkSsiuXpyUouBiYZb",
  "key13": "ZD1AVpgkbS1p2mLbRLGT5cdcU3qoHDMW5bKQ46dat1qEgmZB51FSSrDXdsxoDdYpkTokpxMnQ6f6KzeKPKdBRC7",
  "key14": "3c4NtAeVHGR5xbD7wKNZDhL6wpdBkxKEoTNvW676mfDcdm37mWCzW1piFQ1ZCQZ5GH3S3RQBm7JMAjZnwb2rXTCs",
  "key15": "5yxphu5C2p8DwN39wvm14579QtRRoiaudXGaZuNkbob4LpNSeXQotWyKAnXuDpBtaieYfaD6md9erQjStLtzz3Fw",
  "key16": "5KJ5TuHnyrjczuMexi95CVH1VmprwbTc2e9m37oKxRVDZTfUGUQgCyusyVpacpsnC9mDYt5Y6wodHohyCQGVNK85",
  "key17": "5tz9sX6ZE2f5wqDGNq3xkLzfhyYM5So39owhNiJbzqGQBoJRgxtZ91hUqM64ai83UaSgcG6dKiPQ4ZmDibcRCSf7",
  "key18": "4Bi8mpRtWcSz1WFjhgfCp7rsyL2DvSr2cv6VKQVYAud6z3AXioxdqT3bxafTmNaPXn3XewPrQXWgBKVcgSvdccwf",
  "key19": "4GKS1HemrAUEURKs4DAFpaYr9iUa91UQZ82g5aUQGpyP2LbiTZbSLEkD4EiihHQqzYa6nCmdrxRnL8dCegnfBzd4",
  "key20": "4PEYB6hi6tEQLKU4ppngqGqmKPLD2SXLERf8CjRszRwJRjW3TSyyhiyRrqHyWcEvg64FALZMgVyqGry9kYfjp6rh",
  "key21": "2VKLPbzEggxVAene4Mz3kpB6NzudqGGJqTKBX9cxz7vTCH75fACPyYbhfyzpw28rW9EZBV3eb5t6iEG1CwUVXEZj",
  "key22": "3LpbiE4MJZB68nqGNK9HjCR3ohUTXmjW2vBu5U6ZQ5ARDubGnEi4ESsgMdJYcoWLPkJkT37QsAy782GD6MiHCfvs",
  "key23": "JjNaamyR5hiKXYULvTefXbur1N8E2BKvQKDeVjYknZJTEfd1voK7duWMjqxq5cJPGrmkaNqUPrD9HAGGw7qa28a",
  "key24": "2hdKuYeP3yU2kaEKyC6uv1Ew5GPBwtuT38887VeVBiqSGAHb1wbPek8xAfKW64X93c97a4nfFVnEhwoKyEeV3u1A",
  "key25": "34iVwxR35b5QyXedhzZyzhMypVAyEA2ChJQvThLPsUmzbebwGGZLssy2AdomiyMs6MjndMSu4oH2t2gZ3xGSWe3j",
  "key26": "4yuiuNU4RweFL5mhxEMfQaV4rcsNXMasi1v3AdYj3wJrEdjMvX2kdJvbK8qZM2tiHDTLjGw6VVz3CgrCyMbjW3oD",
  "key27": "3JY1JPN4rdWD3WLAcYBSXhuZS8WYrAn6CLN5sKauLdPr8TMta5PMK2Fu6niF8Udf3N3PpT2UD7kCtJw3wKNE2Yp5",
  "key28": "4M5ispgGjqoJGc3iGLQMmtyZXMH6FDoojNz9g41Ktv9ew32wpV333vxQAcsFBVEzjatG35EqK7egjKtHRN2moiLB",
  "key29": "2FXR4Pj9B2rQF9HUrhFuqYwbdD5i36vhbUwq1E5HidTLcrV7i7b9kqn1gp48qQZtgctEPrrXKYGnFJKsUZTfGrbQ",
  "key30": "b98hvgdTQeMv2bjpEaqh11JDYih2k9TKyWYLXd1bWyctCFhSawrieXqx93hFSJHpTtapQxRmUK37BFknJuutXrM",
  "key31": "4LdRkAwxFk9rd873UXzarbH9BDohJ9WwnBy74W4tZbQ2Wr6M2FfH3UXeheHajiA64HW9DDMQjBLPQSX9D7jvHBEr",
  "key32": "3nZ6nFcLDfDfEsoYgTjVQm8e3hgzKyCcPL1CqD5MZmGsNvyqttng6dc5bkGpRxytmf9tXevjv8xBgCQkEyFna3Kg",
  "key33": "3S8dC2Mqrv6X4pWihzmdbsEpPqb2gHAH233sr8JePyE5r22XihLtzhi3DxyZmnvkvzg1qRDrnLacjxycwV2KmdVw",
  "key34": "2ziGWM4X3WNX1bgbUhUaUxkDbRrr8YWbuubexDLRBaACkSeRbisFinpF6jy86arjhBxThkDxxZUUfuoN9FbDoCb5",
  "key35": "2wdd9ny5daWrHtcjCJXiFFdGoigSd6fUMGQdtZe3LpMZjQWda8pGmXN9xwsuPtnE6mwKpULP1PXqqhJZGSAdniu",
  "key36": "3zDRXBfyz53UishMdopBDPoxrNkt8eNZsq1kuD4nMkfrMb1ikcjKQas6yY2YobaXbrskC6FrepoigUye47qU97Xu",
  "key37": "xKuei6ZX3C4XCDmEvajDVHsK1Vy3CyPdww5QqGbKSMQXq78DBdasDPbwpZfUeqp7hKJzztfF3p2KNNfn273rTkS",
  "key38": "2aVxe3dFJf1Ep2XSQyaK6sJprVxJ4FDg2fCmNkWzpcqoYz1AgyPCgUC739Cy2LjhfL8weyQti6PhSQndegmdCQcA",
  "key39": "QCxZzCkD9jT7n3JQVZHZ75KTC12u8nwjKtoSdaeWXheMS4PLVayKGW3q3XdLQBtDUsPF5CN9BNoEzu12PHqTGGR",
  "key40": "159QsTQsMQFy6NSRa18dPcPWyqEtGEAinxgGMky6akGBUNsNGZ1ETmDumu39ZCoBN1jDL3MPPx6f2oEhU6VW4Rb",
  "key41": "UT9cJnNLpnUaVM7QbeJ4SPMeAoqGRzp571NNbpomVhNmLL475Rmcmw9eJjxSpBvcfZ7C8R61pREfZ5U37zbzVaC",
  "key42": "2XuysFaTmBqsXDqDwRuQga4NV1gqFtH63XUsscBYyz2mkzcTBhAqSVA2J9Qe3m7zobfdwwwjBFBLVFyx498khu9J",
  "key43": "4iYWB952yghrVwsepciXboXfgDJ5ULcxsASXcPTL2VBKAVLpUPL8uNwbJL3ZW8APAY34NUFhKCqwfxi1UU3EH1D9",
  "key44": "3ji2Q7bfsiHdhKKYBRszFo66yj2sD6TeXCU2wicyR8V28huxt1GWqbZS86AEqfyx5d5EDSgQ3K8EHN8TTER2rxrA"
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
