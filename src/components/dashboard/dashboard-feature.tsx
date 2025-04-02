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
    "2TjUYmbNNgCXrpFR91UuYPpTrSJzYxdF3HNT572BggoRueaTaCf6RMxBM2Av5DTkStTa1y22SCXcAmrxyGmDTaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LwV42ySc8KqWa9TTLzUc2XwqMBVrFD3BjRM6nqDf8Rrp2zdFYoQSf8c5ALZfZRjQK2EMEHxvdD14Fgkwn1wmszr",
  "key1": "5A3P7wibs1bHV8XrBHEWd8vjTK6tNNwoPh9pxxAaNn2EbfRrdPoRNxX3GQxgNuuWhLP9ye17S1CjTCKu3ESTEzPM",
  "key2": "ax9TfkUX3DQeKG7CLr831tYoJjBK4V4VuXxp2gBR2ZueRcXDKGriQg6xQA6Gi3Y5w4CXJkT2JGW1vtq17VmDQQo",
  "key3": "5WXwNgV8MZ1XS8g48Rb2W3eF8MgmhaK74enypmPFveijHyeyoDJzXVMKBVEfCcPzgD8nyYAWmLh4ti2gwhxzyf7L",
  "key4": "3CbmzH21e65jQF4Lmaz4wXdz9h5m26ZTC4qSk7rZkHGpReyir1h7G4WMCBpCN2oSx7nb5nKFhT3ptXn9YxkYnniM",
  "key5": "cpZFxTRyYda7NCpAeweRCcj82g7vhAiYnUUT9EYtTo9iNwzyBPuNYMQftf9ovmobQtUVJD12Wso5SviUZW8akHw",
  "key6": "5q2L9svo5bd2WLYkBfVZc3UQAKLYykhswYFqPDUSvHRz2QRAtff9LpKMh8d9nemrvecA7pQXKMFJT2NNUuSf9qGT",
  "key7": "266sQYAZSyMAtgEJfiH2yUVEdTfCiFG4ZmCiDEn9nXYqNGk1AEs7nuJ9Zfb7VCGMAfGBPVqFMKMqjg71u88AhDUx",
  "key8": "BTWZcvBWDRqRXZWxDUULoXTGvt6NvwYmLdFXDvtUtwVcTuVGQWMjM7fbbXG3RXFAPHEDng1BB3dMXaM2xE7C7m9",
  "key9": "UQcxZgnFVZNvcLQbgATij3XKfzpou1yyenG7Ur32pErHQomPXavqUu3f1yaM5xe8xBdja8sszqvKAoaPvi5Fuqa",
  "key10": "3Wd3zn16QPfVQC2KRZK8fvLdq5dHHuyjyyxjSU1WeY3XG7y4FYFQHfpTibEqTgzLgrDRQ1WPy2KP83Eq1TafXwiZ",
  "key11": "4jwkMZuD3gDnnBuXvVXAv2EcYGh4tNR5DqhHRMxYUkhSgD2eg4tsrXdvPbhHXj6CXDsQAJrPbGN9dvBmrBhB2GYm",
  "key12": "3baj55N1LiV4Jp4xDm9Qb2FkSquKTGq4VpXdbB3JGipS4bJKBZpxYtrqj65zR2sQNiGBQktNHD5xpjiyZLz6pH9",
  "key13": "3cc1W2oMjyTuP8qJ9RuD8is9wV99YRRFSZgoeqGksAXZiS1yKreu7xFD6JmWXGmPaw1ViKBhjdaS5fojFCryKsGF",
  "key14": "2XueRCvujjnwZZhq32VfejauJqLnPE8rop1PirjQwEk3KKrXqtYao6tTkrYapndoj3v7qXx8L6CnkZEVWboY5YiG",
  "key15": "4rZrYqcQWpRHAvHyXsPmuyHmnNBrSuDWsTVqNwfm4yguXtXpNnvuLmYztjzbX6ZNhQ6iWGohR8z1w3Sxuj85rRTe",
  "key16": "2Jh4gdMMqb8CPhYmQDZDwiyVCEginYnPwt2wmyiuWe7cWtCPKmiz4kfEectXXvJVhSRnMAZsJJxdN8Q8pPZjgRqu",
  "key17": "5eCMRP6NVDRKejxZBGMPKxQsk1KtUgd26XCt2Zt5nXkFkuDFxcvyWouzuZknnBmTCbGEUjczEdB98tNF3fYyXGS9",
  "key18": "3jZYthvFpTshTWs2YqHiputaNJbJEWhi9wChjVZ7QvDCYUxzYdYjpewwR8QqzTMSNMrD3Wjin8Tcgh1ionPmabsX",
  "key19": "5xpsiiFMhoaF5bXbb5Wm5VGo2QbsQmSuWqN7An27VRjd2BqjLcXk16Tj1hFEww3tmEc2C3syAQ1JQ3UJMwWi7SWJ",
  "key20": "3zZQcYMyPkCvpMYs3humRzVPAvfueFwiLdUtuWKavGKPDg3EwF5sG5e8MYrhmcAG1HLi1mW1jPxCvSZJSsiT3cht",
  "key21": "3QZL8nGszuWNshWRf4ev57rj35ph2c3TsEKAaNS3Vzmhss5ya5MwHW5zdx2Yg8SyDvCs1CgYuiFbTHDjgdLJYCeY",
  "key22": "3R3RXJzvF6NWnQg96zoeBM28NvEHHnyVWuQLgYyenML6EnDf836r8Lx8qV5kPZN3NUeDg5Q7Sxbh6HRqNtcQWRT1",
  "key23": "2RjpNe1UYEz7fDbhUieGjRzeieU1sP7cdrNaLckXGJgBL46v4qW7EJQtsiRLXpkXYrkxuSBKFbn2W2hCrpYwztys",
  "key24": "2DpiGPv1TXpLQYvdrJnq6N5eUVLMUrZ4AS7VSXSkJdL6iWQMXdxTvYF5wQLVxf6szjS64LBshnvr74WTq39hpFH9",
  "key25": "3mziBTxvuYCBsfo3QDS6vCjuKnV6rxxfkyrBbrDhnXdME8NRCt6AsAnrDSqXv9heyCepwTGSbXJycWnCuk9SZPyg",
  "key26": "2L9QkY4aVKpcS6hfek29UEWKAvqyAZ8SACKUUYNyeUoZ3tT4toGqRSSundHaJ77D5VaT5QxKdBogt4d29xwmsDuP",
  "key27": "2zR8TzxQkPp8Dvx6tg8kahREpvLsDdfMZd1b9ix5YHqxsNbnjpM1tfM9D5Y1Kinux3mnCs7R1YwHp1ZNACu4QucE",
  "key28": "4qXtmmiuJYJb1A13GfUnrT81fAjfzwZ55DeYccKCxqLV7Yjhecoq5NLyjp7jcZf4Pqpf5XJZyRePghLDKBNWzon5",
  "key29": "BQdotFKub5FMQU3yWCXk37hhntfLdtnV9VrW2vxjee74Nf56Uc7SkEKvUeb7TCD6yQiwLGjLqSrdCTMagoPKW9B",
  "key30": "2VykPwcVfoX7kdq95Zk6ThHoNEDNSwaHoddmF2Kq3oWniFT8PCmRpUCnacbudGiCXwpSgFm2zt9pL8SbqSLRph8E",
  "key31": "5q6bdtK9XzHRMgprVb7Nqw9on9Js54EhG4gdNBPVpjnFprfUtFZq1N2bWCkaEXHajryauozrRoLgn7tqcP3ZmgoM",
  "key32": "4NpmwYrkTdKqBWWfPgwg4VySEZkLpPJmWnYWL7Sq4StKBaKEyX3tHfSFVuBEwvzsvP1dKbJU41GPpJh1EknfATWd",
  "key33": "2gMqvTLw4QTqWKCCsVA7TDCX7pbv49up1HJxCT28QBd45KD5HcrtZM3sSrtVVYrhD6o8Fr5DjymgQFEaPA6PjHtX",
  "key34": "4mfugC4CFqgxyPpAuSc45hSyQbgFUik5yDWZubf2Xy3ggpfpotitgwsC818s5HgQoVa5Cd7poqLWTXvpkdEU7usX",
  "key35": "3oEZMQohXnMJmvR1yCZLU35uTA7bMzPtwP1aFvZNLBQwYAB8zkPiVR2b43XhQWDd9Jtp8QiU21Y8VbP5oTuYHUd5",
  "key36": "5SStpKHTcSvNiASmezQXe7e4DJXwuQcuhZ8aFkmKSaJ1mJZSAL8hS5gbbT8gkzoGGveoSDUvkif2aAs8jJ4Zmwss",
  "key37": "XMrtBpQKCXUy8TYzxSyfTKy1k7uT5n4wVwuS23x9J276bxb8jGeNz5zBooepERU8gGCApHy2xCdMzftiBufHv6h",
  "key38": "65jnjYgTuux2NBkUCA11PDccPCBBchkqoyEgw1ZQSKSobfx6V1j2i2Gn4bQcQCyZewJaCPNq7fHSCc5hynB1vKaD"
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
