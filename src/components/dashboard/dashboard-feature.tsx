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
    "sH8uLt8WMQgV7ZSs5jnpPmBd3MTBnhUHQ1Ajjc8CHged4vCooT2MhV7G5cxtQWPbvWTg4fNFifS8fHjBtE9RUJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51RebTZ5Yvh5ceA7CyfTSmxV2DFTqXq1k5pDyQi59qYizS48bk2bJeaT6nht3KGNoMyP6dGcQS48QJrfa47sPhJy",
  "key1": "5BKWH6bBkMEcm9oTHGYzdNrUGxEkJLkHWkpZgrRdRwL5f3gHfSyNotSs4qcRXtzuhsYTBTFcTcKr3xnXNSdmcm9T",
  "key2": "HQWyte6Tw6ag8mLP8TJo8SQ6RYV84CiXkegN915udWvM22EbEfFjsm8jRyhqqyp5muJ5wreMgoSFYS9igkc6kFn",
  "key3": "awdW3gnFtnLufTvNwncWMSiErw2onVksKQd2wSgznJZ1ZAwxgmC8tskXxSGCKcjcLqYvDnK5vQX4RyuYqjFhbbC",
  "key4": "LJPhYnNJo3Are1TxJ4TQnfZcpZZLjMXjqVXoBEa8XZ9KAeaepvbaj43nothbx5v8L6BsFZWg9EZkq3LmAxP9NGA",
  "key5": "2VxvfgxkiTrRfbzKEXEiWc7K69HT278fhWYYaosshgdcYK3srxo5pFjcieFw5aZpVxgV6sskpmM5G73PwRWgh7KR",
  "key6": "utpSwtiuKupCBTgAPyLHKtfsuW9ZBNkweU1J3zAt57Z6CdrSbVU94t4tfyQd992Dr4JDCAeqwTYsGb1Z87k33eC",
  "key7": "2giWadogdk5szzH43qAmiGT2jUXF3oYEHGCSYGZGHc9xbRz1Gxqkupw23UTR6uRFpv2pXHbDMXktqKYrFJzAmhgr",
  "key8": "4vvN8htpzj41p9oi4hpPKEwg8PqFtH5Uugx9LpYn1aTH5J7UnszJaN4XrZn8QJYg3GMYSTnASCJ8JuHXygdGZJS9",
  "key9": "4NFFjCDkFp5bW13zrZ8PRfDJwSowiHP1uqeBH7zdUydW3hW2kzPaFkTpyfhK1emiso9C5mgpLuDQH1eDyovzje7c",
  "key10": "4Krgeh2SGn8J7vSSM3Gn4fQf8kWwB2n35754fr1AovqhtaS7f17XoVewwWYP5MVDUkNnwpuacY5mDUSVp1pBosfx",
  "key11": "2z7YCR3piCmR447pgQBT1KRN8TxHCU8E3kQEzAuoZGzMkuPd3W8Tb36DFMWJY8cuzKuE6hAFTauF7jk1aAkHTNfA",
  "key12": "BR2KCaUcwEhiAWKKVwpFxbc6BdSJmEjeDg5Tjx6STDfDwnowAciDmMD8h53P7CG41FcjhN2LygqS6AW5xkDaEd6",
  "key13": "4Q8VmZwhrmCi4L3DfizQkWCrpacAuCiKtrroQzvyw7eyS4zqQKLdvB6cCufSob3p5WEEnZL4otG518PqmfwajebM",
  "key14": "2jkFTBkZ8Eo6cCdjR338XHjih5PRpEstub4ndebZ2fMBY8gbaxmZ9tsYTfnNLaLHvPy8Xa2x5k9aeiRKPycejicw",
  "key15": "4XT4dZhB9Yn7vjnqHLaxZmbFVE3QVoLBG5WagBvsChh2DJ8PYC7aGJJXq6e98fAEaWudHfEXkqV3PdyTwyhuXkj8",
  "key16": "4csGFRnFTq5QZTrSvDNHmPoNdQ3pBSg7aaX9oW9M9JVJf7Vbny69VwYqxhkxarFzUNM7VtzZzUgtoR7W8Q7YUDdK",
  "key17": "48m8cuCwfokngzorSfgHso1PhQUtva8kVggbEXrtyoLNMyMVxUmFqHGr7e4fsNaQsgjCMue2TBZ1ZcuTJbUXjhfW",
  "key18": "KkDE4J1o9he3EagUN7B7hPE2ZeC7VuAyNtrAZtQdZLs4ANHgNkBJ68DQsuk6pb8x7bSWYvqAUdWWjXfvRwTAQK2",
  "key19": "4yGQHj6ocPuSYyZBfa7xou3ba3h1YaJHiFNp2juKUzC96G2UCGvsXXDRd4Y7QPej1Z2UmnKHsdbatzx6mE63qyVm",
  "key20": "5YBwS5eetVFbTD9SEUNfpSAGVgUU34kysJXbRF5yT4qwQpGe4zffdbYAFPsDewhLwMGyADmb9Z1enWkPP7AZR41Z",
  "key21": "4VBZ2PxEM2xqSBmGH4Ne7AHYo9p6smjhLWiXcEY1i7ehrikThmNEgzeysQP2Vi4NHDc8CU8qvKsMrK2B1tvvkXsc",
  "key22": "3U3HN4JBpcCJJ3WVu84zxFVzgrDc7n6eyXJvSqNJ4VzxSYnPCTZ5TGu7nGtzhA6c1ipa52sKmaGVjBCUvQmNYcCG",
  "key23": "5bwQgfYifHwfPKoDTbL6Grgyh4Cyey6S39gmhv9VuhCJQTnwcMCua6Hmbeerpk4JPsRgxorCDzBEtcQ5QDFgU9bk",
  "key24": "4J28keCacEBuZp318WoGA8wvZFUVHDdoU2Jo4EpwqfueUfj5sRMuP1eABWXEaL1nup1YXN6bg4ra6JRi46stQGqa",
  "key25": "3ddoianDsGyDhtAU5nWpyqLBG2nvX7R5bk7euJi7D2WDv5ktTMscDcV24uv5BvCJ4ozPGjcpRST7dBivoYHFYFRq",
  "key26": "5LVmNWtQJZSe4bqVNQxdE2NDxmKc9w1pgjvK7DZizHzH6DphasBQ6dmUugvcXRK8tV7UYPbV5ZSKtzdsH1eMrZuK",
  "key27": "3t4yoQKcRHnHfqKY9deznFNPXn62UVgZBzAsJcadoo8aEdxqVwTrm9ejxTde2tK7bPb5ggd4AXzipAq3D16tMNxC",
  "key28": "5U5kVWJtxixtumxPcnRNTm4e7JofppoxQUnCRAuuojmDGJCzo1bYLFcnxUV7jPYpS5dzQXYhnN3XrBaAf7b9JTkM",
  "key29": "4TQh4HZUD1cF3RLEGoXYRVozt6MqxddiUjkmE89NJExf3JQEL8NUZCBD3Qo6akyM1361KJNicnbnHSXd5BjizHvu",
  "key30": "51zE8naDHW1Ewbw789Lh3SM8HQfEmFg5VBh4jgqudppVFpvGXck8rxW6qjmoGnCGS9kGgmKJqYHdknZZ98LCHBnu",
  "key31": "58v3E6CM9qRjzrZ3iPYmDefAunG7Ywyof3GUPVV2XMkSVWBWm7erWYo4k9Nj9ZK59HNy7vSFMCSCEgNaq4DVZeoN",
  "key32": "3zqhy9zywkpbgwoRumh8dAMBfGKoxvQd5yqi9YnS92au7wttF9jhEqGBgBb9socH6ojRbe8JmWnuUyxoUYz3JJau",
  "key33": "3rxjgvom2YmayZ7eEFwPMmT8vfUA7PXzaokr6NHatB24YgBkURp2dLBL5vuC3ULCyZbGSHjLv7TBDM8ieQjVJk14",
  "key34": "5mEReqEqTejsAyU22j9Zg7xHQJ8cLqAAyxMUNQv2hVk5TPDXRDEqX3zZZ986FtbatkR9bgH6VbhHLUBWM4tYVabT",
  "key35": "2nda4BoG9nYoyeG92JUw3Pn8ZrVH8CL9QJGSEJDPRGSxr9MACFjyLaxrXUWanBGeuKHsnM8t8JMhAagEQevj2upM",
  "key36": "4ZaghieUY4vjENuwzREcQPZokoCwMmHykbPynBBs77yFHSdhMfwXKyws4GSwUtZcy79FiyvPESxFyg7hKH5JjaLr"
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
