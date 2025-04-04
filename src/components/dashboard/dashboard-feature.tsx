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
    "3yXvuSaziWTabN6JTGNC7VVMuFHyd2C4LHscoyBJHabocKrQs1cQdUmCLmKQRYHzSnaEU6oxY8TE5GRBErYND4HA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zVeoK7AgVdfCYzNZnibWTrSFN7rsaR4jQbmsWo6JMAYHsqJUwCHAAZCodbqnsjrwm5fd6mU6w6UFaTeFTfEui8",
  "key1": "2TR8fw6Rc6kXjmsrAfgnFzGARan6t26fJsdrhV33hDXSJm6a6jn7pp7mmpmjyj9vgAufbhd6t4FuePLeSfoQ9P5s",
  "key2": "AEH9YNL97Ka1Wf2BCuTTn534sihdyqLy2fi5CqZ6XHJLUetXWBFx1WD6AHqLvzR97xgAoUCDXD3D4waVUwXv8hg",
  "key3": "22HYH8zhMs3uM9AP5LZ6Np1852jaUMKbSBDq3yjU1ZrHR5h6L7JtfyjnvC1EpMwE3mPN9UD3GgCS2xE53uZx9LEC",
  "key4": "e2RF7vEp5yxw6zPvJi6jpFjpNF3GUE6sQXJkJ1kZBMKxpCdApdndW1azqY3pa7cFYjtQhxWGoJm8VFdLptaMpFS",
  "key5": "2MM6243bobkGoxMSmdnNpxsUQATwED4KMqhe9xSNQpzcVFvzaGGqZui1SiR9oVCHJXcuG9scqTzg5FefPoyeizjs",
  "key6": "4o89s6sUZb7gUKbkdSp2pjejB9qspj1rEg6pRmc57CUqLwZpKz2TzEEeqWTbSpdXiwXGfAjmbQ8PmoLmN2Ag1KX2",
  "key7": "7p6APoXHm1C3bLkxK9YsiJSQ63s2bL2V8SXjnqYbTAJ4ZBQqRwSnFxGUdaJgXcqDAiahBKb8VDXWRZsD8V93w8y",
  "key8": "YCZ9qtKVxHEiADorYB2sLdaodbSqeuJ8uESyPQ5tsL5Q3YJUuAuLKnWuBShrchQ8PvLRuQEtawi4DrnBJZWebny",
  "key9": "3ckbxt1A6MA9aNfLQrhq2CLLjaBUe9pJS8QTALxkwgxjtAH9JuLbvmSCTWxBm8s4VqUqYy7DTqeVfW9oT3b8yCBU",
  "key10": "37QB6BdRiBvBxshMdrWnc78kLwHemGKzQegWVRJoYvvEJBYSx9LBsrhNT1zLrCLhEZsQ6iWVwKpmAt8SwH6sQpvQ",
  "key11": "4VD2M3nX1rGFfCoTkuf4i9ySGqEoz2CjaSLf2eXMSc6LMERkbTTymxgxjY9zGUybRy2PNXMmyGX2kPmYDSfvKLTW",
  "key12": "3zNsghxAw9WCJyPzB5K62kiYur2W9HaKYZHTP6FFDmkTMGEbCSAeA19j8Bdne5LjGdkoMUTCMGE1VuYoPL6RqksL",
  "key13": "3jKFiWjUri8HrqgQLfm2PGARcdSLgdFBcKqigefkUq6ZfeyTUsYigSKTG1ZfmYRVKSKA1BjwFU6HKCS8942p8cUM",
  "key14": "5xwt7LDXCW9yv7GWJL1HWSiTMETWL8phWVRvxnkWJCS8DYtRYm1fKiLPx9ojXiFeLrH3veNmpNdTKVsgR8BokmdM",
  "key15": "43chFRhV3cFZ1UdkzfCXMDG94WtBBKc222BDiTyJ1h5jDna8aWWWwA96nbSjHeJn9h5JoU4yTNK4bBR3eBh6zkWm",
  "key16": "3SXxy9kyUmZ6F2zh2moy42SUguxyB9sfZWD7C5M2rYe9MLy4EuQQNcr7ZcNt7Hr75A18vnNG9R4ZEt29W8TTUKcD",
  "key17": "GPjQ9E8rRYauLWewRoCgVHysYGEs8rzPTP345uxPptJaa3Hi8ARa9T6AMCmrJSzRGkNgzaKKrfppKAz4FDcQuqF",
  "key18": "4DJ7rWWZ2rPR3omgFLGKnHuLSCHjggkUgQxf7K47PrNN2BSvyXp1kdmhmjCh7kmfidw2espAkkr634Ns2MLZzk6A",
  "key19": "2x3qWjGfX7vTyMaXCCFdF8PKa1C5HwizfpsbkY71Moi6oNX4n48TdAhKkau9GiKKZ5pVmfz8k5xW8cmjWsxnWBZz",
  "key20": "5zAVVkNX2EfBzQFaDAysakKnmoghKWi3htM5RKhmKMJsQLdb7WTg75GEJibuUztmcXpo1fX5egaxmmPvfSi7CzEp",
  "key21": "2vqVdZ2mjqM3njuFkbnZuFyV1yVMtoTwg6kvYr94fbUCtL1Wvfy962WTF2tbQJehKew4oi2eRAPHnC2VNJ4K26XK",
  "key22": "JZa4MBRJW9Yimpr7nVxVfmMSNpY4a4o22CoLLS9ZaMyAVbv9zE8o19JacmowFUnLBvfRSjcq28REtyMgPboArzi",
  "key23": "3kftRxZpJwbAuf1vKYodhGC9QhgSvYuQxG67ny2ioxwdHoNZeqc7V1iMEZr1KM9m5k6sK1eTDPiwNxaGfsXuYDKn",
  "key24": "3TFwXRMifYQcbaMMLsyXNskkMPpPbLTP4EgjNUDccQjwWLm6JZJELE6WteGTPXsGFVpK8NK18b4tCfidFcdtPvzR",
  "key25": "9hNQj8BVXWQRcdfKuaoncGYiSeDSo7g2PVyyxwNvwKuU3wKmEMuvBNF7yURKdR6mj4Yj9AJqN5jR9LvKAoBUe3Y",
  "key26": "bRtnXFgSoeec5oniBXLDbhb3u2bbGc4ZUNCpNDtfcxZAPH7cAeH81dXjZA4X38rxwrY1pZEaJyKEPrrQ5AwBef6",
  "key27": "2U4tjM45QDdZZBJR9y3TQqi5mafMWM74VetXj41EUcLRNTvQtJ9FBdkR1MVTuXWM82V61dhCaKsy4ojteaXpUSJY",
  "key28": "62AXDWM3Hf9Z7Qvb8fWaoWvXgF42p5HcXHrWMPsCMtRCHftsn95mYV7Y4PfLgKr3UeM9QX8JTcXaxQ765J7v8B7F",
  "key29": "CjSiMi4qgcsbh7pXdTbeziwBHno4nsxDQ98xYrX3ZBtQweerPo5SeR6jzVN81voT8r2sqCUJkSQJLjgDM1JQV7j",
  "key30": "Pwna4qTuXoBmbMR37Di5B5hhKszCsEeVcmBtVJaPW7mEUVE7V2db7ckwidNNfRcfh7ELn1MifDeijbqLU4QhULo",
  "key31": "hyVAq57rvY95XiT9FTS5nN8imuGzhqyWkwCBUR91BHnXRF8PZcvWncW87bPYwTNTaJRTU8G4e5iKnC77peinfsd",
  "key32": "3RzdkotvVNzvts5qhrHLyrtwNAAky9G1Hm2bWPiH2bgevmP4MPx5JFH1ioEbkNwTfK9pt2oCsKHdSRoDpfcVXuEz",
  "key33": "4qjQtXAMzAs85CRr7zrG1YCFcDY3ZLHpXrtiCJ6kt5qnPhBomupAn5fqkabKSEvUNRdhS3at11XMohSD1DmPEW3g",
  "key34": "2LwZ4RpTZStXpziw79AnUykE2zniMvLUwjwrSqiPQWF5mEXDtjQeW1tH5mfm62mXufnahT2hnEouCFbokoC3JsZX",
  "key35": "56eHShQMXPwVRDEyE4z3kHKTmce5vK1Ex6NosWGL6diaSF4sV14f4XAQSh8nwRBhgtct1HdBbpDjzhtpeY3BhLzU",
  "key36": "2PwqBxHaw3GFK5WxFxoisnpUrNnkvp3JioPP9ZDmL4mLXtHzBpp4kvniWX7vc6WhRA33UQhD38iLUB9DNf2AQ79w"
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
