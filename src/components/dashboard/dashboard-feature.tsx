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
    "3Y7SWQNTcVdSrZe8y6hNJzU1eXSAkkDwukJAB7LGM1XvzqEDobYeqte4xmxftsammaqcam7pZhSmA1d8jRn4KTAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ThQUjdA4R5rABQJp1x1AZsw4mqZEmejjTNasWnsN6jzuRtQ6SmWXc1AGdWQde45MdDmw2WrDXgBpQPr5wwSS7a2",
  "key1": "5o52hcZqSa3QPjUUeiZb2mA8jguQyJhUPcReJCL2uD1LyC3kQogAKqXP9rYSYBQzqqrQc7EhFZ5spjy5gB4YxQo6",
  "key2": "2iXnpkVvQA58nCtLxT8NKb1MpAv5foDq385waMngEAzSmsChXnPS3YEwyvuxkGdjjhtVXMiTLcNzhQTC2FdbmYn4",
  "key3": "58mSSjN9P9G4rLjcuCSumSV278kcUSHkALDxksoiRpcgzRq15Hp5uiCJW6TnNxt8w9byrEeKbCNBeZaNj841CeD4",
  "key4": "4bECd5Nv5Qbjxuq5qLyZ7RpEZtzZQgqUB2cZKV9ou4h4AcQ43DfzT4NdNYnKbireEMYWG9CAxwrPvieyvADcc4ku",
  "key5": "3gLTjcN9UWrXWERCJTRHJfGDQ3tdmLX7SM9nWfgHhet2xwDA3PZBqwE657kUAmgUimV8hcsoatxstNmVH5VQ5Dtm",
  "key6": "3MC4E6DWRPpcXMXUgmjdrbBcEZiUJpQRggkEGQtC2UBn1WoCqTg9LteQ6j8vmbYrozFDnArjR7zMTTSTuHjptvQj",
  "key7": "4SurkScsUCRcPn6BLmSScSWjnVEfSzMBqMWrBYTkNeKwy6BDyRbSj9DjS7EBEVJxjsYjUAR6NSqaBJDyxL22GMpD",
  "key8": "4HQJSqpiZHFNtHtPEp48uWDtNEpG6HRdocvFztLta9pKEWPk3cz9ZQDcQsi8LdshH7a2itzNGjArCBQhSBEMbkd6",
  "key9": "4J8JZgsshcBa3WtPHHEaRpvb5CFfxCzZvMbpsvQgsSqmKAJV7Haxn9qhks7Nknj6xYYRicUtRZHhAZXFwrohxDqg",
  "key10": "6bhoCrwta5BG4x5Wm7Zb5JVcHQBntjVaXLUWGs8xCLorbxcqoW2mAg2ARat5tDMPvdnt9YvEBQetTrkLqCBrESg",
  "key11": "5rXAw2XHwoMroRK4xEuNA6Fzx9zuuahYHVRhLEnfGJA3sHYMVwSjXA964FxvYhSqCsw4CBnUPcz3227F6rkAkKbV",
  "key12": "3grDBd8dqj3WWGGosggzkseqg43X5UhdCbqiwioAvVhZVr9S2bvd774FiQ1YeyXwLQxAFQ1PSNQ6M5YSJqLT5tLs",
  "key13": "5ZduQbkn7G5cWtL9gb5PBnPDVtEgVsmJMVgLzCydodj8Lz5L3d4119FUrcaZYaVA5jWvm3wmm1Ab1uwvugTbtQHQ",
  "key14": "4i4guZ1qUiAHyn3byrPs8h4XDtgCnDf4RmPXgcVsbXQKw9E7hSdKxcx9RJWfxh2bTEKPssszweuTFyEEaag52tpP",
  "key15": "34fspbNDxg57H2mQn6uTYjAxx1BbtnZ3dJGKwFDXKDzZKiX4R1rxUZSSTNFviNB4hRM3mFRo3gVvwqEKRZQQWWSa",
  "key16": "kCDM8YhJtRG1rWKxvmPKnKbsV2L7HYr34kRdjQz2XWPB1UZ7etbZC3KQto9fANJ2JjgNYZwVAawUhc29Tvov1UW",
  "key17": "uuHBQZiGF8rLkANgPA6D5etrNXxr5f3uacCmn4iY1nWmpCWo2uUaJfxXEVb3roGYDB7xA97XuNULopvu52KVvu9",
  "key18": "2Tk2t2FuCb172W64Ap78KNVhH9E8hvCXLbEeR7xW8zmfk8Tjsd9wpLVZsR92N9GYxBdRkGsjcFoAouV6XBuQJinf",
  "key19": "Qe5xq7UpgJhptuqLBzJGJyNPuLoNhV7gaHNtBkcVEGESGqjehxhgRJzS8gp1UDCFUrHtS5MU6o5rhnF7gHLToNK",
  "key20": "5NshnpC3yxY1aBYD6KYP3TrEvGksJtDeXcZD66qLw2pRGHvLJWw5pwuxT46i5NuJsFkncWAVxaywqdNWngaZAfzg",
  "key21": "38QX5y2NZBqekJya7qq4xXbhgCPLnUq3zqwzkwURBGfENp4NmqWbhFE54o6C9egeRogaT52Q54Syjt9KTPsK3U2f",
  "key22": "29awiSnigvGVsaWUtGkXfXktBQfBfpPS4XVGsEJQAkyswri39bkbarCnYnCPktNXjFsELbVLZumT2wMrnfBPJN5e",
  "key23": "3A1yf9F96JivAbVsbh62N6uoGgTwCkkK8nkH5d5ERsApdcqHpu3UHbvJwGW9tfATXpTGmEnTv2aW9NoLV53KzZfr",
  "key24": "4sXjMsrTueuWcW723LyAmqKUmmb8GfmrfR27WhmWWenYTxYhypKcXEADduGFw9S9EafoSappS1p8ENCNVSo8qNMT",
  "key25": "4PwX6a8jTBk25zWYZCgWgmL2Uz3bB54Djoi5HfG1wGrHpogg9iEdcWdoVkZGGQ5z1MscyqDFDd8AphcYso48k8ko",
  "key26": "4D1QZuJyWfveYvK79gqApVvrEwKuveLtu2naxwgJYo91WdEMrtvWkM6HDfZ59SiSxjZ6RSPDuPF24jZsEDhRymnm",
  "key27": "4dueGwyHpPZg1aJayVukXpfh2LXiF16DVmbvdmp6otpQUy9BGm95Njun3E7ZVP671dSfgyMub16AHQq2r4rygp47",
  "key28": "4ft7zNXny3xJHtH6NNYXq9feUSQbhBgjdtqAnuFKRN3u1gSwJidK7no8tZdtyKrKNRB9Bb8FKHEpj2sDrnvtjjyu",
  "key29": "27ZD4jxYdx7mzy2ya6SiUg8Dm5uXNL41VkJnsGm4hXWsckxeVz9Lf75RVkweWxtxAJfdEuk3KV7HvJdxAKF9FrdH",
  "key30": "3HA26EeeyeLXBn4FHxfwfZPnc33fR2ggQrijWuEiuDetYoMHdwS6gUDyzBNXMA7eiFZsJwuc3wpCXSfDQxHK6QuQ"
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
