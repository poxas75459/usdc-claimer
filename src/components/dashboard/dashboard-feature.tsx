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
    "4eHfLwBoaMpxM7hC77JesoYBvYvTDASiTwWRQA8cMNUB93C4gyz6N4TwFPKF1ctp8YVAk8jEi3bzYMoeUVHHuhF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wh8x2M4sMJQ8oCkiSetBvSit2t1iUkfLbHMJeonrJLPWjwzmo9jnhpai6ryoBXY83EstwATtxXwU24d6ah77Gq6",
  "key1": "3P23JTrh27kha6thheWCoeug9xpKTjbCvccE9mutWKw6gCKab7QD8Pmzvauv95LQ2iw8oz7SwYnZb2nCyYwqFGB6",
  "key2": "2bfkKoJRCaA1S4qweh2bEtj8JFrQ1WgkCQPzZE7g3CzTdbhJcphiKQNqSkTi9vMxk9jmYRnPYN8tXAtxD7QhZ8tc",
  "key3": "4YdNrPCnNmuTagH126NhwEpRZY3GEuED2tgMMjt4EDDoygQt3vu2sjeMmtfUVbhuXAU8wy6qe4HhH3oEY1SzM4q9",
  "key4": "3711DzjuKSRfUHH7K1G148KkxKnvfS2iqcLjqgkzBpAaPL7dzyHxvmrfz6zFCMqnx2Kk9wN95W4WznjsYhfhZKRn",
  "key5": "4iDz58bGFeP7hj5dAbuNk6xGGRK4brk7uV1cwVZCNXZimQ1BJRjvNAoXqMsPRjawCEBr8CVpkGHcX43Une1xHhHm",
  "key6": "isWK8k3x6ucG9ZeRkoks5ZDo3sX9djEzFdQfoTu6TfSVkVR6bcabfXVqwLNsEfLR7FeFFyg7FbiCeMP7tsrbeCA",
  "key7": "2inBXVidPQXSJtRTfu33iTtxa458DDPKd6foRkZVEiK1iuaKFVGLpF1sVBNhCfsYecHeavu4HgHMV6JHLfg26vFp",
  "key8": "23g5M4BSxbABQrDtbEQkV6uKQoowf1bmmxGGKzwjAw5jGM9jNMLWrevQ14gHHGr5566KEGZhfFfiy17GxWssXaoB",
  "key9": "4xDYjUYGfR7RTVju3irtu5G9Z6sYHiYdVTUaA7koCGQz79wHjXtnBG68e15s9egcXXXAQpZ1N9wKiSQ1siW4VeZa",
  "key10": "3ogee8fDuuSwmRgFMi7jycfjXHKMmSkY1CV6PX2ckYg1FoT1ifdC23SUySrLkGocEaG1oCK7YzzRf2g7wdK5y7st",
  "key11": "2di1anaZPdCe39yDKseVp7Z4h1ojeE8Pr3JM15EHvprAdN2Y3taotZF4BzNzGJFfLH6G6atonhmvEt7UHNx1TY7w",
  "key12": "5hkio5aYS4Z7A18uijn8PCrYNMGDcyktwvuWWoabH6cF4f8oQJSw6r3WguGA6q1v4xgcbKpvPehzZmwQyRmWQR68",
  "key13": "2EyAaJWxss2gRhFN43KCbxvgUYaN3uYcdgajmFiACPEx3D4R47SswMBKSikNorgTuN3NH8K751Mchwp3gXkcS82J",
  "key14": "2FGdG34niBTv2qWu8rKsZhZCPTZtVw6DDhpNWt13Dp7TRowyAczv9h2ohoKBm7w1PRWSTpU5Cp6Nu3fRgQz6ynxt",
  "key15": "2kxKkdvjrq8F2XsXA1QNV1B9UGykHHkKdHGVXJZAELxZnoK6BHT8QYoChvARfqaUiPHhwYrxEsGNP1wKV3L3BLY7",
  "key16": "425Y53Z4zHaDP2srT7Lz3NjX4PmrGtfSA2pUQ4BoQLiuhUG4VuPVLSQ6s5N5uPfPLB3NfJcX86YoRtLsZYBw9uzi",
  "key17": "4Dvk8c2tS7NG5LYwT67XSNvuGhAfNoHLqCd2G6iioAnK2M3HXqrsAdFR5R1ji2Q63WiRxUEBi8ayFUyM4NsqYneC",
  "key18": "ovep9jRUQn2agR6HggC5CjYSPRzvFrTbeZhgF3HVJsaqu5HupDMksH9LQ4ZChYxuChBeZgb6hBSvj5mdBxRLh5H",
  "key19": "4jtFU2rtkpeVoLq6yBpmUSfTVagicFbc57TujDTRgXFtjP2y7CBLmcnsKBthdJfwme1ebja5YCPnTS2JwqWGDj8P",
  "key20": "5MBF6sYWDWjcHmkwyce6YCZyUiyxCVmuKQWZkkynUvvWqesbbXJTyQrR46fKGXZgryNkXrJAKTXnsE8XPhPpeuQP",
  "key21": "3L2hMhBZdyVYPd17YZFDzSjTRRvudgVvH6wCymxrhZS6hfwieBv24Yjzw7i34KpQEULEp5J7MRM4ZXGF9k8BRrY3",
  "key22": "4NWedjPcRpf5di697UGrgxa6BRAoQwwXrw9e9e556qht1E97WgoLbZrUdLV9ZwSvvwyhLEq4dzQpqceauCbDxGQg",
  "key23": "39qWPZkMuMKHJFp9LoiLLXpkNhKCwAL6Z9e1cxTyCKm41c17FQC1F3n4mBVZUzxLJXx2LCsqqmn771Tjnj1MP7Bk",
  "key24": "kGzvztQvj1zGeU7XHi47ANKFWUfyyacEUCooGfms2MZreuABW65pYQanLXuyTY7Xd7K3NW4wGBjbdrnhmfFaW8F",
  "key25": "2MiTY7LAgZzyJxBUxRdn9mPoy2Z4gpnH7H7BDurkUKYgSvVYpTyuv67JpsXowBTG8uQUonYwSvfQw2G35jZLb4SD",
  "key26": "2VMt6jmBjjjXMQn8DTsC9AZRkQsBjPV27qdiF5t5bvRrRbGeLkoyhm4yhiCW72ek2giqDXAVxMjLQLpbddK49MDA",
  "key27": "4eenoDczdS5qtCuh7i2oaHL4V5gdMYo2PA8ULxFt9VKAUTiY3yJHWcF5FtNg1VJFySHCtP7V5zLfp8kGwJ1LTPwz",
  "key28": "2Mcp2hhAe3Bt4VDKgDT5JxLHD8j925Gk5NQNYWnAJUrKwY5FKajsRWRwY55DpwWPU8BDUsVzVJTr8peyFr9Kzr3G",
  "key29": "aRCgManYA3vPCng1ZWSbunuUqHieA2Qe5bKAXD47rpYSojbiGsgrnKTcmpgJ7xjFsttd5JfArK7GTof5nuwuRVd",
  "key30": "3e9TF3x6Rgd8mY1vkTuTyWgzzMHsKdsw6WB5rrT3nJdYMyNgrmKLA2WSiMmKaoWNaEuLH4AGLxWtMsjZBbUnmY6Z",
  "key31": "5xktr9Nz8dZa8jRYSCFsz1mubugGP2dmqaT1EYvY19xbRwjhgcVrnocQYo37G5ySq6UQdFreNmyRKN2scgLQMjF6",
  "key32": "xz3XGjHE1xTtXC1KhV9ppRMZgpt1ZN24CNg7rckGVE9cXNMusY99kqFRhrwCRxmhcNLpNSkepPmeoeemMfDmUs9",
  "key33": "4a1WRr9a2MxMrpmo6LX2eQyuxc84mVx3oa9783AgFc1BrhnXis7WWnRkRBtrapZd1bgJgPb8a6rLoytz3vHcNnYv",
  "key34": "2Cv1Aa1j4KJivgdNzVjmxbw6UXvoutTqkyXCHSocn2viLi1p7pDx4HjrYZJSrYDf9jfzUjuFuJL4j5g12idf213F",
  "key35": "2Jz57MdJi6mbdkNSBroGsr9b7S7Cqk2csM4UuXemU7dB8dnHSF72hnW3tUw4NrdYJx7Lvy2D6Ff6noGCXxjM9BAL",
  "key36": "4A1J6KGumueTSXafD77d7ueXezUpMNvsQjp629iVEhHw9j9yUjoicbvQ8sNfJmYzzr3px71sBrr34Z1EQYsJN7zA",
  "key37": "f7XREXJtfqpn8LJPoxD6yhTxuJEXkbgnfnNanDTFfc8W1Junc9N5sonFKjovrpqUmBQFreRufVtUje4in2Dsyc4",
  "key38": "3EM6bV4oU5jT9P4JS8BePkbADjeonHhVeoeEkMzKq7i8W8p46zSReQa4Q7Zou3SKtyF8DJJ3Ep4pxDXCCc9PBka5",
  "key39": "3dyAZXzpykf8jT6qSpMbFG4Eu3hMCi3Z13HoKmzfUQY2P2MvdcBieURDVoukLZLNm2E157VhTTuYpSXZMpow5PCB",
  "key40": "31PSKWhYJPNzyx44t4ZZkSC3tk9rTJZEZ3R2E5Stxqt8CW8Yfray14XcjoG1e13wYFbbosoSyhjks4UyZQSTxSAr",
  "key41": "43wksA1oJjrhEAjFTFeXY9QCgHRQsWGPqcK8U9mpgo18yggrTL2uRJZx8KgfGpHN9Jn7MLtzCNVyhJoCMAN3MXin",
  "key42": "28xfBMdox8gJ18aZdSriFPNiuygRXmTkYx4h7fzNNjUv4avUXj6JLbjv7zuNbHTV6VKxZ8VS8iQiTFn73MDePMuB",
  "key43": "5A25ptPijDfuxufqfmcQNyqMTU7gJCoKpEPrg7mKZTzqosqLTQRLRZVJMw1GiWmP9nGkwnBqxwfGL4DMyVN3V9dR",
  "key44": "2PrvRdsNT4fxs3Mb5yjjAx9EkDC7QojrLoGeLWMhEo6wuzufvJCfLqV8P6Lzk7Kd3P4PfnbAqfP1v8dXA3UXgcwX",
  "key45": "5W41hHAw7M4KQT6BR5nPepqgbA1dRJVHfBPSjahe3H226Q9hjD94nf8n5QLhPhtWEe8uwVUhzudZiSxpadi1A3RM",
  "key46": "4ArXLTATKHjMhn5PP1iG4Q9csKG3KgnT2PCD52PfkYw4Ez7yt8AWp1CKA188g2V5RrpYtqpz29x28VYnDsMTidEu",
  "key47": "3z5ohNDYyFqxEYKCBs99t3noNW2scFojWH18wHqY7zFALpuz813ifZtVGtq9iv8FD3eQAmzZxKNQL2iy8k6TpVCu"
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
