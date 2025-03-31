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
    "4SdBDnjFLPhrqBbEkgtXyerJJ3VgQUW4er9cn26ugGosBdMxKKqkebWBHrRgE9FqiopfKRGWd9j73sU8DQzmvvQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3es8hfvtthQ1JE4UMaj4KsSY9PszXrdUK9S5JY8WXxiPyBLiHYDG57hTNkQ4FcZWukN8GFoPsHT2M4k3Y1zsRK",
  "key1": "4qX6YeSLBPS8Kex1xpPYxd1ZLUMNK9tvzP1xkksMLVP84Vni6iZCc26w2wdMC2K2o2LysP3R4UJWE6WJcjAAMNDZ",
  "key2": "4eRnXWrVez4XXw4yUZwK3JFRer6H4Z3Cj6cueuPHn5h18R36LmpVtP6vFA3bnnnBANncCdGBkgNsirMotpyiPPyu",
  "key3": "3FDN9Se2rHwds6SKv5NPKMVLgQd6Lm8rHGgUkvc66kxXLAkAHghnSyyxvD5mjmmMtTWmj8BugCnK3zNQs4LmguEp",
  "key4": "47qj8tfzXtKFLKLBRZWiyNrEsjzmMjtctifB7XL1yzaEhhoCWikzBTuKLyPEPsSeoF9y7aqyq2xDiLa5VNZmqfxn",
  "key5": "4dB2rUJXyNyGBPvGeHBgQmHzzH8gXYJeFa5SCdbjgnQJxETxhDsEZYDUpywxhbTJoeaiqdjd9awf7a2T731UTc6B",
  "key6": "2ErGZGkqvC9buv9NzwrDYhHVcTk2voH2vPuqkyMjXKmZuQn96FbD3yh1KQ6GN14Eiek9vuWkpWUKLKymDkFzvVwC",
  "key7": "2xa88CDyM5gvmf6j8Z7SDYvYZJmpouykAzpCu3ygE6gSeFuiQjZgcQqsyDQWt5iytkai5ocXyzrr89ti1wypyN1e",
  "key8": "3oGDyVtJaLPbKKGqDp2Mn1yJq8dL7RCmwqj6LFrkcnfYmWag746jMoVPBcfkLKrZfz7FteTWzLXA83Qgf18wNvaA",
  "key9": "2NVMmFxGFcvjUVaQEnx8qGnXyvBp6f57KtyDvEGq3VSgQ45yYFcah2cDyMXFdU4z8T7SjoUgysf72rn56WQAbgzC",
  "key10": "trJgfEkwzx9CWEMH79bnRwgAQ6s6oWFiQ7kZedQRx2uj3Y5SW3boa2cLgSj2jDEUwUDq4yuKcKjUshdc78HB1N7",
  "key11": "2UgkkqEnY8k2iWD68bCrSKum2BB4yPgfQ4tMh4wsjJF6kF2ZZWsHX5rPjuMTEWZ6n866w2P1FyN9TjxEqesM5LGJ",
  "key12": "3ekXQvDKRq6K942J4Yua4Z7TdXA3SEaKePzG1MAdYPPjQD53YLtpGXsKeNrkp2hUsandnBar2eAMWA1WDASjjcwJ",
  "key13": "3iw1eXtDM4Y6B9HR5DC8bxZMqxham64ZYiHeJNTNLDUKHALNuoYn4MVogZn4MbFypC1i39vq1Dz8vk61F9wdW4cy",
  "key14": "MARSvVDjYL2sKZCNHRUPrekvxf5chYD7UYjHnbUh5CFiC3RJxaLJvMrSERD7Ljgm3LZWi86tmPA2bAYSsuUh4vg",
  "key15": "3RG8w5Wv7Te1Jg98k1Lyxm1aEnANzf6fFUnYLSJuZJ7JvG4wopiQN3Kvj2Q1xSQo3gkxoLDb99m1ZCZPf29A4hBC",
  "key16": "FrNsDWpCYX7gHWeVVurDA7ZgkXnmfgHuJ5UZga7c56hw6uU6cDVTepCbutegZs5tUTw74CSvE7qMERshjHF6JHB",
  "key17": "4YWj1ns9FT5tZYU2iWgR12dZSf9vpUtuEME3Eczi2akocbmG62MD9SaeMLKV4dKS1MMhJYBfWL7LVL9Mub18icbL",
  "key18": "219jX9HHBZEroPYv7rxBLqsDdixPfnGwjGJt2vF6jRMbWR3rvGuP7XN4W6ENTd1qAisoVaw4NaLvP988gdrabv3e",
  "key19": "3dacXGr77wMvCFJ7wzPgcpcRemVWR19Uh5pMNGMFwijh6dRZBYh6rAENHnGxvnibstwpWuMZD6cBQE26429guAgC",
  "key20": "5YPuU3XYnZKRyHnsk7EBHeSHaZkycZKfP9kS3aBihXGRHZfYUrEgQuQAZDdvgqhh8uPbumcb2EHEVXbAQadf2VFg",
  "key21": "2P3oRTHLYUaKH5NCGFTyMywTBnAMbeWnSPXz52SpBJ64T5pF4h5ni9ov1xRMiBnCV6trDxRKGc15dF595Cjq2bKV",
  "key22": "4AV5D8aLf8eVdZDUixK28ZFdWfWgLyvFqPH4VdYjj3hKcBiH5AMu3NhfPgDqtcmF2wAQgCaS8KPoo9Cka7zjnhQu",
  "key23": "4A1tFBRc243mSmjaSAGdS2Kwc8wUphmi9V5jmrAQHq3qKXtNkbu4vm2zH2L4D6VQ6q2pdP7hV548Vb7GkisWxBd5",
  "key24": "5oFsf5G8YRiBJ5fb1M3GGXSo911njyeZtAGYakd5pEHbwev2gzv8VqoEi3cnnF8pUFudhd9HXtQLmjtmu9acwb6G",
  "key25": "3KLeCa3dqghLWHM4kyYAUmh3Butmk5ynHAm8CCHMgrumq9P3KLbZNVvrnikquewC1CvSY8kPJXEryHGxddMnTkJF",
  "key26": "JbUr7ZriKX9gnJA5VPnBrdGSm4W8GjQpaxWDtmR9vFg6Uu8Wdr3SPS2RVQjU8hxJEq2A73n33VsGFAqFsHqKtqX",
  "key27": "2wSp5LCtXuApM1sfa6ngdkfdDrFeEMDsBzoQuDAEygWnbctnJE24QirBDSwh3gH4U3yRFXPauy8RW3CVVZhTPqTa",
  "key28": "42jvgKSWXEEkJkDkgaMey2MWXXhXrqwm61P7JutzjJUf99bCBAr6jyXBtqiWoTTF5SuEnNauu99onc9nE6AXYevS",
  "key29": "2KAczdYxYewaMNgxCm9mEpeHFYVhqW4vLzCzhHTadXmho5qLZ54DjrhREGFtY2W5svFTsDoHShDauUkFxricBr5r",
  "key30": "4KKJqLgrdCHYz7njocpgxriYGSsfLBdUMJEJ1HtmmHYgc1A1iFdarM1ZMERx5p2CPz1rBXScNGS7cwr8dCQcanY1",
  "key31": "52jFsDLHJZTK7i8jVJUExL1w4K966VrmY4Z8X57Ybj4khrQb8kDMALYUWyCQSCUFJGKzk9zU1B98KHMsWXXjrUYW",
  "key32": "3qAcvPKzqPeR9PFpMguKpRNFua9MJHo2p1xtricVaEhGpwz8Zn5bbLZZYtCNgXXSK8xdGeoLyLETrC5CzFUfDFDb"
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
