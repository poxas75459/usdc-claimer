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
    "utkP1SAei6TyQwhCvMWnqtQXCV8DFvGzJy1u4q92UXf6dqSvbLgnrWpvXnjhYTCbiws7MEv9cVRUgfkYndtsVZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bB6NrgdEV18gryjRqoTRMYZ2CocJ7yPwFhQNtD4BtbSxetxoS8y6NHrRzbNJs1p5ykecgtAC4kXXKj9jrEA4YSf",
  "key1": "1JBtu9m6PXZS8ag3cRV7B4vK8ZDK6HUyapNHfArZgBjmKgNhFj7USss5BWXjgV62s2VBtm83M543FggZDFUGyho",
  "key2": "5GY6t2rLKAvRpDMQjUHSAtNPoCxk2GBJDT9Bn8yg4cjtVecEnkvZrKKsctUwmj7uBgiVhQjSKxFDKEjf94w2sUjz",
  "key3": "34cuL4VmQZ1woxvJ53caDD1fZRpGDwonhKqMuBioG9ybiAeRDDezgkFxbcdrg18fSoQZN5k662VYogzkfHVBXobY",
  "key4": "2bcE17ukC8oScc4gXZLJS4kocmpf2BnQPMDkLUhgdhryN9DvLTGJPADwkC5dxMC6VqM7xWB6WnYwLpdNwsY6zhrg",
  "key5": "U7Q5Xxhkrx9bFZ3ZVadQ8s27kFnCinJsH1CZvPQgxHwZ8hLiikpkJumjGJgnYEVwKggmL17yd4mzzKGJmncF73i",
  "key6": "2rGhEBmvYV4uUtGoCLiuSucHrmbhYLAWPS76qVH9e8rEB2fQs95DfGxpCRs6dss98u3jYcKd1zEQXqpeUDxe6yJz",
  "key7": "3CuUkyf5qjccwBZwoMUuFdTWRqUa7WgbBoVMwjKsFZGVcfx8Wv1HYD2aUgLyhwnM61roWnNxYxx4wM94QQvKvm58",
  "key8": "2PqAzq1jKbWAt5giQZATr4WEbhADxi5Qf9mK2RtnwVFjcRUJj2UHMTVT1qY7bFCTMkBc281WbC9CPrQhwuXgcyzd",
  "key9": "5s5tzvTyhz28kkXX9fpvAbUYgxd88mqJgBptdphnKMvw1DXt12dDaSfcxbF7u6DNPTCer6TLtTnTRmU3bM7xBTRa",
  "key10": "3dk7gJPoYu1dGCrHa4sBydT4Yztgk9gGwGfghYnjawBgj9Vxb2dozFQfkvrHvUJMnFD4zx8GvfLj8na9eRyy186a",
  "key11": "3zZ9uQA4ydvUpoipTPCcRJD7BMvy6hibDSsCVLhEbqi9atKmA8epDsNtQWqgDTkdtQvDYfGVWvFH5hUoxvsFK6F6",
  "key12": "5nqcenJHEY8nh8LNXNnBfBQyrpSWBHoFPQm5vYP7moZQiGKqaFZnFeBpiZ28DSEjVt82G94KU4L3A2WRukV7s2VQ",
  "key13": "HZYhJRxu6Wu46DLGqzdrJ1UAkj3nZC5aVAHzPXU3JsiW778C3rqwJksndNMBYrKSDwEG958JE3W4NGqZfF6SpeD",
  "key14": "22vcn9ktp2Q9VvHpAhMUhZw76NbdfCPXHES3LF38LcX5QrPY8JQmd3nUBsGVjpCDNcMeRBi76Cg4REnYdnEKxyT1",
  "key15": "4AjBQCHdfiCSvGFRwP1Jk8NRYvLRhwHj6SixAvx8t9TFmDmWXxjoVBsRU7aKogFC9UCcJ3JKitM1RFPfBoeZFSZT",
  "key16": "5Efr1zBb5LMZ9edQCLNrZUSacP1F26tL4yhcCxWRiyU6hYtE2jMuqRS63JUGMuZNSdsDGNRAm9eRNfTh3iW1Mm95",
  "key17": "q6irmeKaTg1LKvEmPQ1N58B1AJmHgZUJPVcDKUihxNfKKmPMLPwBHynub3opvxKV5MBmVnLsmjEAPXkMoomCMAY",
  "key18": "4m4cPPcfubMrTCjANAS545J636otGoq4PMEMhgnY887WnUFWvggbm92UNqGh3EPcZwN98BGW2weM3ZZwtEx1YpiR",
  "key19": "4gqEhYoiiRVxnBxamUSxLAZEV2ry7oFZUr4hbEhDCtmpviR8Lkvbzxq3d8w5Vs1hftUQsRucN5HNuz2gPRAni1fJ",
  "key20": "3gowez4qiZyFafssEjQoLEKUqTXreVJ4XgogJjLxXCes8JG9PCTkGSQyXk1wZ7bW1iDvttRgG91Y3q34AhQzQ5n9",
  "key21": "GQowXTjauNPd6vb8SWGCinabb6fHgom5NWBhP33hFdjxWXxkVVMyqj785Pjwu9cbrwDRW6jbWLi62JQYub1XQNK",
  "key22": "49DnLtqKsATHtC79vW2bbQsCXfZZ7QADgqerGXuZPbBef4dDxp8icpsY9EpsLnozeviRMztFcvKZhkgtxxF9bYB",
  "key23": "37z44rZffBeafm5F2dU7axbSeLevge63Jjvt5VJH2tXmbFEYEGE5bvk4gKQ4ouAYCRQFbS8EuXFS7oyHDMdicqv7",
  "key24": "3qhjwbiJDmtcYvD7QBob2VrL15Rfgev61qwgv5ADKC1zfYA6bbGgozDHVdN2RAatExySLKLa7w9PriKizocVdccC",
  "key25": "64TbtMpAbGJLd5KBb5R4z5tdx2e3pVhLP6NnpKkG7QNLeg88C5gyKxStbyaKbMtz8WDzJCbVBeKJSqbQ9Tfx7nZd",
  "key26": "2FG115tLpo95tEJR1JQxYQNnxmMH774qn6RT429akPxpjscjVAYj4vBvWMQEMkthJPyFZGdg36gmiJHC42zWrMKU",
  "key27": "2yVhT5uQCmJg15E3fbmAFxCvqXyHPo9CoWCkQemGnAUQ5yGb8wmeJVf7vdeS86cN5brET5LvFN1pPKpLa76VkZQH",
  "key28": "3s1yH9j43KhpDUZaC8rhnTaAVmJ4zMcrvKpt9ACi3WdeZAYm8dFCBnGMePjAHve9ERB5sG3ZHXLnxta2P2y2N5PN",
  "key29": "3Y6LFbZHUeCG1BjN7QScJnUE7ABZu6JZSsLtDRWJFqSMaWKfJHnQJkgRqksDxF4Y4Vkgwsbh2kaqxxX4JEui3wAQ",
  "key30": "4hzmxkaDyQMtNAk7i7gp9TTRLsCFqf8vJpoCZNGLVLhiKwJR57tNWqD3A9FKAqnqpWKgRXCBLvx8j6BSaNsEe5sn",
  "key31": "4rxWKussUvNhiyYpZqWb7theDHvUpxWm3wvPcUBS6Eq9vEoyMuDATF2BstyojHWU4jjxCE3jLEc5PCZ5D1wYhsdR",
  "key32": "5K6q3WLqwnBEAXCFLn36wfkMMRyeA8RQqCcRt8g388DWRPW7V87fJ7uXBY8G12RLUxZRYhfovoaAUzhMNqnHPThh"
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
