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
    "3KTedqYBSpyxQtVUnypkEECG26QfByyFpaWCQufSYDfLfKhsz8CbtbJprM51Y5ksVAnf2346n37Z3zQaC6LBbnS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nk3QT6zmSztuy1GtQsh1JWR1DFP2BZhpFicQojDaWWUukXeHUDW9Aq7oMtgYQm8hcBLfpEQZdTmx5KJaer2zh9r",
  "key1": "2ShM1LC62fPMA1UT2sY715ujCmq2piCA2F2SEKsv2LMRsudoGvDCLND7vJKsh6o6vcSv3EXhbpwK2SBzoT9P5Jtq",
  "key2": "42exLnay2fJQFmsh6SKJb8evAXqSnCkAuwaGkNZCGuVz2iWhULQgbxL2NscU8uFo1U6Y8SR7SdKPvwxmFAF38gKg",
  "key3": "41kCkseSnETgn6e2NSPqGaftrvoiQSU1capM5cGiVh64wt4bAKAnqBCndgMJV2aPtVuoWZYb1gJE7qn1bsmXZj9F",
  "key4": "3d7NCFTAnm82RMFu4hGrF3GN9yfkJT8PzBLBYaQ3HQzEruvDAT314R7ny98B1nAZtYrPm4rnzSQry381WiKgPbyP",
  "key5": "BDucuTotG3hmTgVN4YGY1vWjjnAA3NLLYQFWCn9TCeC9uJ9bW3nqu3AJzW9dF6mhgeoYsTKEXgdxRQETqsxKECQ",
  "key6": "5h4uUuEVLV88V7Va4Rcp83hxRuivFzxvByhspKTbDXSMSXrcrrgaqn5rwmYffmwW5Yr1oSAgwmSaKm9fSTocqXtU",
  "key7": "2hMHDbxinp1Gkxn9bh3HSDtXojDSx4o6uvMCqaS6jmJ9iq8ZZAfozTRQD3J7XtUgqtsbfhS9W15As4iLuMK26sod",
  "key8": "3YhC7E1vXM4ynp2QszJYmfQg5R8uVQdZvHbpgN4ur6wQa5BSJRwLZtiVYC4zMGkuCNPYZrz38FXuxJbnCooWDYb2",
  "key9": "5WdRFKvspHcRrmDK9EFaH2LjmjUt5QXRZbhwwdMi2WNkY8mfqoMXmgw5DMzzgKQZ9qwsJNfZWALYbPHrkQ3doRwE",
  "key10": "4CQTGLUcBmo23nvuJQwm1Ao6XQ9MfMiMu4HW41AmhDxSZRidvz8T8o14mGoULUuCSom46p7RUtt5aWnHLmtw5rDN",
  "key11": "38DLb95C9rDWFGdjstS5jd8C5QW9AubHtVCKKRLFQLedCAra35sf6DThdUR6MiSxLQBJG3RvVsu9YuXvv9DjkffX",
  "key12": "5eF7baLDMjDxQDfSkr183R7AtJoF75QG7WnZFdW7WKsb84gngzfo7oJgmGY3MWK9bvFFuVBisVwTtE8R6nAmFPyW",
  "key13": "Fc3kRJwhQRaS55guJLbtDQGwT2bsmJ333s64NVMfTfJdi8geEdSjJeCdbxex6dMgkMfmHYKyjPC7DZeJ8qqvHLT",
  "key14": "3nacZvadVtEdUhTKGV5Nwt7eTkZLJT1ysNTuxqBqfkKmhRs78FUXcaCcXqG747xTwtzeyZoKzFDCHTcec97HRBn9",
  "key15": "3FdLAD1Xp2YeDNaQ1YkdtP1HthVR5VTxmHHiBkEYkUHs6ZsPgVs2ajsH9rwH8hUXpyT9tbBTHcTeDNudcJKfQdGi",
  "key16": "4rMT8NRerV1tZtc2rxBTMqtEfASvnai5xoHwqmcx6d4XLWCuKqURhjNYxnHuPXtwBuCpFcou9pfg1Z2PiyPaMuJY",
  "key17": "2vEqs6gfWMTXLqXV1P7BZuB2CwspoXvYGDkgpNfSRkSTsAKmKjx3TcffZYqyKsvmhskZWjvd2iUEMvsJusqmtkxa",
  "key18": "3ifST96TuSd1bFhdzxD77AvszErFUR2pAHpMWtLCbg7HYJXRsD2YtiSDr3nT3t3X77mFkqfefqwhEKWdbSuonjfV",
  "key19": "3KRKFCdY3acv8weKgT1v7XfCdPyNzqZPigLZhRpNgy7ucUs1amRYNbZ7TEsHWQqAuP41Ta3mv3rH5RXi1D6gDZPh",
  "key20": "2i6XwhfrGNNHdp6W689PbsDuiFVMZTpHUh94huJQGfBSV5kNZBoucawUrRKiMRcHp9G1x9Bdg7N3ZmftHPr6aqy6",
  "key21": "opNf4bXHf1XSPjCUWYi6143wun3sxdF3HsCbTJwLJP1N3yPBwhSRNNENJuvJofTS1xVs84SyGTDPfCF6uwAeQco",
  "key22": "3rVa5itmYek3XBssLtyQt1TQLd3m5xGy1ejXbuuNMVj8uTHvpVpMQkQRCUuEQGziJemazfFLcRjXyvEzsUAFj4g6",
  "key23": "23Ezmt2HfbQAThM6jVyfxfXMstj9KS1aWJtcpwR5LfWyqEsKcFmHvvUtTfwPK3y2Usbj3EDX7uH4zbNWoeuLUtK6",
  "key24": "2GUZZA6JdU8HLVWwMtPVEujdSXZNSRRNYCXhzX64st7Pm57iYDNP4R4J3Qexpw656iEwR3pcG8vKd7FcRDsz1jwz",
  "key25": "RBsA6h7ZW3Y165TxE2BdzsifKBJ7x7YhTwSGiT56Jj6PP9pN9VXn6kNg1LqvZMsiPjVxauUPqRfuwNupuMy8woD",
  "key26": "5w68gfEfLjUfLCYPHkxEk5g1tgx5DkutHEKw1Sb9BHVycHLsdnQJ66yn1TNVAXUBoWwufRsfYTrrKoMNJbBF3HAA",
  "key27": "9PtRiE5F6zxArm5E3RJMv2VWZgXRY896MH7CSG2jRMcfyv9c2we7Wb8c1ipPsFyWK6QZV7Nfx8onBCDww3MG5Vx",
  "key28": "5VcmwtqQzmYRvC8kyD2VpPUzEtr29CLxZPrdSuvUBMGi2UsKgSCtAqnFKvPtNoWJYHFQMW7vAquNjpCx8Fzc6aGX",
  "key29": "5tSnFFxXcBAcmAV2m3rjKunY7yMoTBUUBhbxo3bxXtztKqZPPk1Cp8jAcJyMUE6dsqAbUTHgdSP8bvnaPhMEsZRE",
  "key30": "45TaoWV2B9eyMaAzoHxJMXzcPFpQDrPeCnMwD8chN3uZ9HHQbDXr9L4kYvHgWpHkf3ss4mXD1L4GJjiANt6Q1wRw",
  "key31": "42hK1ZZsz1L9Yxt7XimH3f8srmV1zDFiEv9M9tGjzYXUFyrC5uSvrQUW7TfwNX88cpPA67vvt3TQCYskFJBdec9M",
  "key32": "48jV31kGy7dtnLHA12xSaBsPRDGQ9goGRMSCMkniF8GNN9HMkFXDfdwzMKceDnDMLuz5e3HdzpJCgwMXonPgk1UN",
  "key33": "3zwtL7aHwU9yQuGjgXBx3WAAvToq4wdZdjKAqELAsup8fPDUwyvkTycAJ8i1NTG57Rwqo4anxNLuzmne6eJs1UF9",
  "key34": "2Hy1fHaoJdmYj4q5qpgZ5CeiMQDpYa1hVjNaj8qZWy5PZ1wxMsxoxQDPh5mfV7keyx4iwSH1oVasjrUko2n2B996",
  "key35": "55aWY6BtNNbRazUMfHVQ1NHF9Ach1ZiuphqNbqi69FFaqVbyZL6ztewUDxbPDKkQ8YQWRjTKqcA2wZBPCezdhEzN",
  "key36": "5ksEZHi5C6gkVzyPo9vK2h1Hvojq8wAFgKrpoUdCCDUiwmoW7z5SfPwZyVWEadZngHxKs9WbEmmVmuqjEdExuDTa",
  "key37": "4EphtKzowMny5cJoeDhfiDKa8G2NDP46xfABZsvvxHUxhenni7Fu4CFSq4kp4ZWTm9Ur4E2vsYU5vk5NWATP9TPW",
  "key38": "5poSeGW3tHPU3vJnBvf53x2nbQTz2FN1cyq8JpyCNKh5Fsc2PQp6ZSfdUEJZ3XcjE7k2aAA5iY69uVpKkHaWuXiu",
  "key39": "o4PeXwcx7EqoarJepi7KJZywDetfw8KmG6tbvNXFucaonku7p5Pn29wydKDsnMiGLq1b2wsbyrhZs5SRX3SQG2c",
  "key40": "3kKx5VHUrXAXVBLjTgsJhR516YRyof8oh4RY5vRYzV5WaXJs57xLxk4JqNkPrzyAEfLENaPLh79NSx4VFsYaKSJi",
  "key41": "2Cah4rsHQJkYQAJrkCF28rsEdyTZjVLThtcKNbHVvDGkz33xWTa7QABUsPncp7hgAKQ4skgYoY37jKoKso5XeAxd",
  "key42": "4QarVNoHJzHUfeHSurhcL6NR5okTAK7gCtS1ENLvV4Zofm4ahS435tvAdABX6CT1QbQvex7mPxv4VZg1iP3bNyNX",
  "key43": "21kon1uCH8Ec1gfkf7EHTPb9NFe9LYhfL3ugnajt8rQnfiEq88ztoKv3CXqsPEf5k1vrMcpGoi1uKXjYHmsWs28x",
  "key44": "2bxW3FH3487PBC9gmmsneE5A5MTPdyjvGcHuK3GEbaYAm7oCFYCntgFwoTc6RSQbbkG1YKwLgwEJZCP5TYpUxank",
  "key45": "4isBHNq9EDrqRvzF2zx1mbmLDYPHQDtJuSGtW1MyTNPbPhCzbrEZLQhvMd9qLvpsVbpesSbknSG6W4WjQsWWTeph",
  "key46": "3zhu4D53ij1YkW67zDAzzQJMj5jAerf15XGCGLZ4HnuV4VyEnixMVQzw8wLqtmE3rnQCPwSrRZfWtUNXFPBKV7iz",
  "key47": "oMucTjguqo92A93fuyrJvZVA1suZ3eBmX4z5qyFFHNJNaz8H36nAuoDbCpsYHehBGdDYzh5TZLWvdaiPGA1VPpN",
  "key48": "4AeTJE64WP8oGY7Ls62JYVzNujx63AHtDd9dJpV7s1MgrttAyVh2RmHHGzyvVFUUonn4PCBS5nDtN3rCJ9yNpaQc",
  "key49": "A3j79jDm2Z3TBVnafMTg358zQ3RbNyRbeTRAyZbcSHgSLWzjq66833Xo39rGzMjuhLAcfFqRg3DQ8ztYNdtE11F"
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
