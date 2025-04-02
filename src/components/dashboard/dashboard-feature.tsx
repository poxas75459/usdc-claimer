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
    "54G7zLuBNhvA5gN5u4BS1DtjbHpmdyZbFPxJAHeZWKPqZ5XhQehTrrQGiR6bchDCPEB22LsWwZL3nc5s7kJShV2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVNU49hXwXv7dDqqevo9RwDmNCr58QtU1JZPwNCsKr3XP25MtXiTpnzpbtMWxGDUgBUdqTv56csbfLYtbKo93PG",
  "key1": "5LFrEFFt1vscV7qb8FhMPcCUcdeBWQi8aLApVUeTnAEkgCGwKGm9Wn4rbcSdBMszJLqMSLZXjNbhis97wUK6gdtj",
  "key2": "4wc1FKaJxF3PTd4o7DaYtfiYSwWzszCd5xsga5Vn26Zo3HaCWGVEGUw5Dv5gQksuhxW6R56wm6Thcwc5P5K6prKy",
  "key3": "5mQhtXqGw3gnVEDFRXRroefmHjsgFyUnv59QTWc8fxcfquy8zjCuTsk4FdoWsBhSC4TtVr8115rjiN7LE8hqGq7q",
  "key4": "3n4XXgjvE33CjAbhMRN8YYgSEpP2rCLte9mvTqqdB5hoNMc4BVrUg8WxPYfs4VUVezGz4L6Cm7cz6pEsRfWN6rSG",
  "key5": "55YbKpqkLbjYBvuv8kLACM7ZJrhSZDp53ygBqVNQPQ9A7M6qEhvoj2LuqmxsmHW8rYSSg8ZF3xS3K3TLTmewRm2j",
  "key6": "22WqVf63yULunRiapm2gPPmrfwxZWuBn8EiZDC5VYFREAJYDphQGYQhhsRrTGGaVSVucmnKtenSQmTvBA6qLkvaM",
  "key7": "2XMow6HV1r2YuV6bNooCpfUiT4niNbVzNK5KQMdVUQFQwgfM3YdX83shKDJpTNzW59ZkihegzGv9ZoiwQ4sofkop",
  "key8": "2PrFXQuQUSeX9wvEfaueRsv6ZUrwQKdHChCzQZezv6A9qf7z3kq76r3dDAhrWAdu2Yt7m8tuRs9TTNRWbpzQmDG5",
  "key9": "2qy3DsSg61oBu5DJEMrQwLXNrdu2MQe7dHSy5XzZvKQ8nNDYWaNfYAG26PqsndrVyfeMKLrGxwjpuPwq38UGo9VZ",
  "key10": "3yLFX8MuwoKToNFycaLbCLVFf7Ri7TScGMPc22p14mmM1oZYqenvaGs4ZLe36Z31ehoza1BhFZ5fDLgWeBP69HQS",
  "key11": "B9QJDhVbbT9qoZZeb38rTo2F1nNxYhBuYW8SEfWq3hEsCCa49kzUk3KK8ViHrSXT2mWKvMSbTHTo9HkcAFfQ7dV",
  "key12": "2c5aM47JwufQLCXjLuiPoXLGSsoGWknFxa7wb4U4qadp3WFoPvATrhE8MrPM1zxMd5wXzVnUbeiicxXyjgeUa1Dq",
  "key13": "2MeRrUAhVx9CkJanszpr8941RW1CB6P6bBeogKwLFHBMcuPCqM3ozNFKAd94iACc1mifbQfW7eAAtu94E8sGhYQq",
  "key14": "4rrmq9LBTHQjhUdRNh35k3v5LfVBtVmLc9BUQw8q1tG9AmdaLcMGk2E4w9XawMFHLDNa4cpwkrK2ZSTnMsxMTYXa",
  "key15": "66rT3m2dJczduK4qMjARPT4hJgp9vT9WvNQhcUFVVyTWoNCn2bR7NFCErBac8erP7tsZfZp6J3bcs1rFt8qMfasw",
  "key16": "3LR2BBWX8vNnWajVB849KJZDJ6WJ2oVjwzURK145XTNz2mYbDBfsAYyvKdxenSwZQw5Yh2gNWEJpnzZ5GCAuktFY",
  "key17": "2cBfmCYxhfwYGFVKRs6SPiTb437Ki4GhjBFFRQmPDjLk4gp84VKTjQLAQiMKTwgMp6CzoAPTCfaK1KnLyHivjbCz",
  "key18": "ERcnsbYWKTStmDC8afGBVMAVaPxPgUrNfgLp1ZpzVuywv1JLtFNQJKPHp7sdhxNVpGz2jsKCThqchvrbA9BKrn5",
  "key19": "5n54teLAh1GyJuPivbyEznghqc7oS7vh7c6XpVCecBXsrhs1kuFutWVAebTG7ALUJDz23MPrgrqSqfpMdBXmCsw3",
  "key20": "22Kkdmw51gv9Dejb6Yghc1gw9QLHPXXMEhHaW7nKcgAgfp8jSDJUbuT2jp6RHYebU19vEaSCMqNZNt19vAmttPmL",
  "key21": "4nAMGpQQXUdhKrs9MUeyyrZHo7ryaN72nLyFw9c2wFDPxtdphvrbRjP195hwuvpw3oANR81f9mVCgUwYdPRcHTyJ",
  "key22": "9mUnKofu9WTRqGTGYTKohpDZjoHaBXCipS6DU2gH4ZmRXcTqCg8uKXBfvvp4UExxYyDkugZwoJB9b71kVDdFFpr",
  "key23": "EjuK7ZK7NwQWj59t2Gbw2NaMH88WXcHuJeeQo9TxKbaeREDiRKSEqZM1bgzoMZu86DCoLR9WhH1y3kxFvk5Ss7g",
  "key24": "erecbPVwGfxumdLraCEBSeq93mM4SmH66yxcqS7NwqNjAZnTUx1r4AKiZGs3SgniCx1d6x8Es2cQXq8aqbebKqv",
  "key25": "3ES69jHNFzdjkjAaCTJemvJt9xLKM4hmqXrwGtituLQRz8sBopa15V4LFv7zFBh24P3KcAPvbWdfjCcoJgLHXYZA",
  "key26": "4f66ceA7aLbSDYJbZCHZd1SnHLY4qxvQXs6Yo6ERPeo367UJ3n6NkPFzwhY2be9494utYVaRX6v2GgDGfrVTnL14",
  "key27": "3NssSMSuJe8erwdvsQ3cERHWpwrF5oW82qVSoD1W9UmAByVYyKnovvmX8M2C2cKQENDmKeWUhhxpaQu8MzauhT9K",
  "key28": "5aunxtJ1L6qer9NS5UdeSGPt1vkjpLHPzegu1KtMh7JVhxAXLDonr5qGF7WJVxRXKB6V7nLoF4ZQN7xpEnPoyVef",
  "key29": "3kkAVfFqLnYCHFxXz3ZkEKAVhiF1oK2pATxZe7ubh8DGc5EUDBRprVxuG4x3VK8su4vK7hHXsxP87quvS9Sqend2",
  "key30": "h3dZhDsjud8Bjrd2pZMKDbHVZHVJ9UTVFCh6b7RPGJbhrPjBo98b3fqhbkb5e7wiyUH1AkHYx2MZNMjJaTVuGGc",
  "key31": "3Rd7B8iKthoA3Mx9BiCB3qdP744oErL4ngLZnvR48SCEkP7sC1ZPNwgxWUc7H7Yzpucz8KXKEdcpDvPDutz7jtce",
  "key32": "4XFC34SSKkjvCpAwc73WS8oF3aZaHdeJjERYNqhfewJF59h5gNLADHRxMdrBn834D9aL9MJohqCdbQtifowpPz7H",
  "key33": "55agYvpV5fkQr3ncBbLGXmhxzNhXrpi9hzC7Eih1rHJ8dy459WbLiwFCRKG9aCZ8uYs1j8vVLQKfzXCJ9W1TZWG",
  "key34": "3wLPF4hN6JqRqeBF8A8anR8cvYhbANB8XBjG7VPUU9WjT7Zs8Zzhbt6mDVbc9FP27psKyf5TDAvHV3Fj85ha6SDQ",
  "key35": "2uxpjMYYG7z3WEhttGEST7akdoAq6T6RXgDkarbqtHFQEdNEZZdMPJ5KF6hwNhwCdnLh6LDarj6BxoVAJLXVtC3n",
  "key36": "5PwkoT7xLcWTpLYZeA7KK6du22o5HXog9conscdqXqKwPhgwYAaV1PVewJvsgC6xwgDHvqzpFY1Lmysvpry8Y5Z8",
  "key37": "4JNFkexQ4Y47B5PjKE68VPbxua5ZQejbDnxao1EzXweC83HDEBekfu7kg81F4go1wYJZ1KKm5UtSDe37Es4QAJME",
  "key38": "34A1mzAY1KDL9BzJY6yAz2kvCFhodvv2xdnVvdyRWHCqtpi5uFUTFAyUDeJw57776KNykMVPfEWF2nJPwvo1v3QK",
  "key39": "5ukgGSzBEf96gCxdZ7cjFabyfdC8kNo8Mp4Rvt4zzWTxB5UBZisErqA3xsiSPkMD2pH5P8ez2CHtqsm5UskQTy4f"
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
