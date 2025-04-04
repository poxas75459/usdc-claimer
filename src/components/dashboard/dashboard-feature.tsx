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
    "3bE6WRCiuSJeuFGwL6knHfRXDbfB8HV4k2Ro1jfLzgTccZdZX6yM3Ao4e5KWaBafF4mCnwLaHC8JSVeLPtnWyJhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YE2CoA1VFSDRKZzQvGMqc21RJxTdmgZKVkqmEWM8Vsv2RDiYFfhcMNcUzx7TDgErN15SJ5cRMWYhaKFUziweQon",
  "key1": "4UBm2cCb8KTHuK7Yj3sYqDF12LYmuFsg6GoNMvDuDgy6WjmbqWzCSgYraXvaAoufejdEgWQRdHuL5BGES72CZMxT",
  "key2": "2nKiPsPwJEW8EkfbV5z89NDk6QwwU4aH1d4rtH3QsZFzARWjNGjSivWmZ3MTMndBsuApffV7UYqmUs4GzbBCh82k",
  "key3": "2Xpz61FRtsQeBNPSQfHGhjiPjwpL5HuLfxWU7beqLhzuMQqPhZ6HgmC7MEMTrFFXu9rDW9covpELtynZKgJjkLE7",
  "key4": "4tiDbZTjFMU7xUWux4fnJfhMgKcbbLUJZzv9vBM1jWzMmy7DAxsquE9LSmTpj7vvitjxbdyKpEa9tQWosiru4Bn4",
  "key5": "4mDpUETJ8d1NZVdMu4zPtcnbMDEU9LxMkCAs5gc3sUrcvxNm7egiBJ4SvYfxMrd7noZSds5hr29YVtg66xMi2zCP",
  "key6": "52oeQHkFapk8JLG8hK1tnX2SipV3FCNeqvuw4zkuTSAFSTg1SbcrSJA87LRzeT83aJiLAL6qqiQ3KLNEH1Mnyyuz",
  "key7": "X47wWK58MsxnDTmToCzHX8eYxAzgAv9u65yk72YuFDuYNGdk5jPRsQvP3WiPbG71oP2NbtQ8He2BUEhUNTnB8i9",
  "key8": "R4onnNqT8fkfNwAouPgysif3mCPFTyLrH1dH2cZMXmaRXfLoM85rFrN2NeyvducYMpCXsHSedPFaJpNkDY14ejb",
  "key9": "ds53LJznUTE82ZUkHVtLdpamcx79jezXNAMvJqozeYscjhuz4gHNb4yx5pQs7TFd9LrKTsEwnE3ZVJ5FaspQVqs",
  "key10": "3VsmzGmPxppU39aBDutecK54dwQJRF3AzhVfHReL3bTC9PGqn1N3L3G5oSPMJw6xhP15bvquRVNZXqFZ4ZpG23YL",
  "key11": "4LAYCsH6p6i1iMgpVA5nCEjme3LrT7iaPQtZSvBkNWV2TzNMsg7c8fS3KyxsAhNC9fE5LzwLsUDWFMDWwaVRbG2y",
  "key12": "3GevNxHxDfgRRR7tVA9PEMFuvus2sAwqfarmLhxaj2o6uWM1hEVNrqcgrRXCgJ4Wkz8PZtGK1qXcqtpksHwZWBv3",
  "key13": "5gMPuUZpSRdq7EmrTDXcDEkUVJ3aMk2NTL5XQHNhtRJznMLjPPKMyysqr78pZRQCej8URxsWCAzSa4YW5NEN8rUB",
  "key14": "3uj5mECaz1wfm6GNec9mBDixvGwZbXAqntKFPpHgTH4euaUmWoyEozu9dWBCwDgGurPrxpEzsSM5T2G8XGv7o9eB",
  "key15": "7g8CuLDuEkwNfEkovpRYeMUp1BP3hXDFhqacbTsdrpHKN2oV7HCyY2SoGtxZnmXWQLCY3MBx7Eh2YRvegqRyn7P",
  "key16": "2QhTuRfNAGneD5YAv7gxx41Jiy7pVVCdxKuJgUbeWDvZF4xe9H6b22QKZXtjGPceJ3A3qj8tcUhp32nCgTyE8kuM",
  "key17": "55UG5vGYuZbA6vEAkkmpnoUT9pjY3pt9oYiJ3EMpaSygXS48mi3SUrhmXGA8jQcXifBKVESUwGLX23HJP9sCCmAv",
  "key18": "eSYyd7nJQ5WjzAgCQ2GwqzBrXEP4AdRqzpQbzQSPzekBCA4jvBNoMHdLnSSyYSv1hUULK2UcN4eFYcD1obzAjdV",
  "key19": "5RQGyfEoK9jSP9PQaaDpaSt4WFSqXi5zKa6iXwrTjxPLaqSaYbZwpMN58i3LryDDdHniss3ndev23ASMdHXBUPCw",
  "key20": "5KZP3PjvRX9pAt4Pt4apRonHrsEGi26zfk9vTQCwnbRTB4BZV7T7s5sTZ74iJ6EwK6XWWsixifuuGY1F2J18Ebgh",
  "key21": "56wm3LMLSkuJJZtZe8aTFeCP2zerUSHiCR7UZq3VgXePx2xUchqvs46xMRkuvyVuZDke9p6Kes5b3ZLzsYuM8NYV",
  "key22": "4Q1EPyfpT1tYTdk9rGYfSgUedPbsZSigh3pS7joDrPeu5dBAL96bcGqCQViefpJQMD7Eqqe7zXA8bYsfg5nVTq4p",
  "key23": "GdcuMF9FWiL5HjswgQxCG52A6Z6xSKABZa4avm6EhfND3rz2oS34NukYCCMzsturZTDZkT3CkgWUmVQrdzjR5sd",
  "key24": "3YedSSAeg5dCirRsouKJ9AJ2gWmrw7yqFAVqt1UQsBtiK9FrBzouE17MTNfFo3U8wPPyNWDfj6aDdDa1Temqwq4S",
  "key25": "jC2mQ4cBE6Uw2nbPwFHvLrK863p8Q3NVf9YvZZC7q1RoH7XdBQEDEwab1jgqggWcAUJzzyQJGrvGPxzSyGgvz79",
  "key26": "5jDibKnsX4Q295AYEWChfy5VeHSmyBgG1JNsae6NxJ16Y2rb8XE3VUTH35xogRhxmvtP3T6KXSZyXesa9rFTC5kj",
  "key27": "2Mdd8Yzd568bS21Sbb6ZEfP14P7cw7Xbjb2jiYD9pQFJ48uKmo4jCzb4ogGn9WwUNjzYyTEsP6vQsvS2ie6s8hsm",
  "key28": "2v16k9EFTevuuEJyEEQ1vPr3ZQbS3CXTt1dQGewebSruBZyEmCEgSmJMsHijApdZy2ZxoeJbiAu6hsdc3bvb28f3",
  "key29": "a3wuyXFbLqqK5kDFQ7fzJZzhWz9efmVKSknZnCscXiV8DNMWp9bVyMAY3wjBcF32Wou1znveBznnENzXyeT5YLF",
  "key30": "39DB56bQvLsQkgvH2knbjLSZzBPZj6oYj9PiM8XLaDvBLcm6ah4VFDpLxw1UNWedn3ZfBfyiRx8zFj9oocDck4EQ",
  "key31": "4hUzL8yQBU8sZ1LrfVHQHveXh5bDpLq3LuggexgTMFw4j195bfwpCjikkQpSxyjffyA5ZFJJaWVUhmafZ4AqLi5K",
  "key32": "2pWrCN8MqoFXKCh5uDG4fzvnauWxRU6dNX1w4SCBDwr9Tk4hz2Jpd8XpnCJJW5jYZNjPXwwAKvrQR66MEDkJAahN",
  "key33": "j4bbuZQev8ET29uxgPynG5R6eJagYEmtQtzHvxRgqwZJsa1wWGi3trrkuc6y6Xt56kxompWiKNtM3PDhL3zKm3r",
  "key34": "3k5q1zjkBVdnPKbJpj5jnLesRQq2Ht4WiekEFmDPgZ9dcGab12fuEJbc1pQspwF9RumEoRv1dpSRCM2cC5TwjCv2"
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
