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
    "4oPYsGixxqU4jjb2KohDcXcmp936eYAAeRUgVPCLG3YBZWipSJ45vG7CgyTwTv2s5mb1mgfVqzjFmx9VC62guZ6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aLV4TLTQk2UAw3JZr8x3TmJCqwpujqGgcoHBRbBtZJ5tD3RE4uG8KP95VG1tWiBaGH9guBg6E7XTnvSzMMT5yoz",
  "key1": "3yQVndJhsdKEn5nsQjn9gwAwdmQLnjX96DvRU4mDanH2VLYUsrCRQy9Mf1MaaW9YyoPivWErhif46QNWZSwrNneG",
  "key2": "2xFQ4empZn16LAgUsSZvzCqWhkG1Sm5BiHRtgqSsh3jgiwtS4TLDuhZ21Em4zYypj7oPhHEbKD8x2jgCWUorp59K",
  "key3": "4nkcrxmvFQRiHQaim8G9Y33wjS4hwYtJSEMD2TVcTS6RfNiR3TDpA7udHvMcGrgwFgX6x3sh5BbHnCSei88ysq8Y",
  "key4": "3n311U2XN2nEZ7Thyf2zAt6rnEpVpRscKVvg5hBG5r9ZTGqGAXje9a491AojsYBDjBbpeqJEnvZrG1cGmGYpRGRc",
  "key5": "onWAoaBJd2Q6rWsAP7JhHykABeANFJDYdbvYUUfgER8Xa2Agg7tYcfVn7dzCdQHu5MiG2aQQKoT27aQw3MkMJma",
  "key6": "4k41YM7bjVw7bvtaHGWtUwo4z5vQvgUF3DfiRtnrFB7PqjCgvznfvKzS7DvhwneYXtzjz5kVUMWPPs8QkW4xRMn3",
  "key7": "2NzHPMJyGhLX3e47uNHDfcyKRwDX1FLke21NzG6M7TbBZQS9EDmAVaWuBThakze5DGENLrHozx7UnTFUASZBmCUL",
  "key8": "59ctTrUY8XE3g6QEBtDW4td2pijQ8NTm5hLHZa78WEK5buEYVAJ1XV4KemGFqVueY42RBo12No44GNGwh31aaJNv",
  "key9": "AWLgNA9omV7jcxbgBg2qxZuFYPg8cKktvUSQj6WY2uzNF2Fyh1FKFcbGCaH9sJ8zwx3uEpNTnTJ4RQ5SJeYj7RR",
  "key10": "3xTeXW3U7syGUCPTscTxtchAsrF8yrKWYqbk9RAS1mWeXQhVaD2ZUJ5BCw4HRrXmWswf8uyyj25tJLaWFbx1fpum",
  "key11": "52ZHt9MyyCte7sEetveBCEsTDedoHSeZCDpMEQZB8pG18cpYciA1tMemjihmABu353mKFESraMMcGbAhvFuHQbKX",
  "key12": "sBRGPddRSAjnzdenq2t4VnSgnSjfjcMybL9SSXyttbjubNqUQrAxCPZKxYbFSwnorrxUuKzkkM6m6ZPesPf4w7Z",
  "key13": "4MMzk25uhe8o7V7QDFQNXXmfryufCAuBvrJJXNnF7i6i4aEL1q7VvJnin85LLCMQv1svsChnvesMbZnH3PC8TNhi",
  "key14": "54cZsUTgDhBA7rEXUji1n89KJbJq1p5tU9H15dt2ycNbMEY9mJQ2DK5RQauLPfZfWZ188S5nxT4yQ9gWTn8sE8XT",
  "key15": "5AnQkHivD1nJN4pmFAAT9U12xm3FUeKQtoZ3mME8yYP9ZzNfoT3HmgKuCeYbb2Kp2XxthDndWecywT3WPTh1Srmz",
  "key16": "23pPuv7YZxEmJq9jR59oN2g6yo3mthdxz3yf1DCLRasSM1FMDjtFzD7M4xiW6M4xC8ZS3LZtbJ36WMpzJDZThWvr",
  "key17": "ZLjMxpunpLL5ug4vfDfJtrGCJ8zmRRStCFe2AZRf529TVhtJixHWvZB1gYJup2ua7H6kskiMej691yMkpKUihCf",
  "key18": "2ANrPjjbe6qNG4KbQMgsLcdrgoLKLPaJdCCA9FWnGo44B4PSrxkdctp9qrYheJboMiF959r15AJooryC6oVvd2aJ",
  "key19": "rhPMu4ZxUv6NGcCsKJbw7SYQG7N1gU8gp3yLPULfPMJS6ZuoWj81hyvSyrvjAUArwvJnvPedbwjkEuXmkePcH9a",
  "key20": "66wB4D8VaLZtyuUfekdHcPEdsUdUi9XPwuGkTZDAHEZPc6gMCyQn8XnEXdLCZUnsTkeUoctb188mB7BJ2eR1t5HM",
  "key21": "3vVK4itA3HfDXPjva8TQTePZ3YRm9rQE9CCf3NQmMCENmUAgHdcXufo8WsiASF76hYRFPkV5txhfLxzDBnJWfZVT",
  "key22": "4PwQJTiXmqSEfjcoceqQXkL7Tb474eeED3zeH6FPsvPcYSTxPobJdFsmJf81uEfu6G5oGu2cK1WPKxt2VSS2Mhnu",
  "key23": "5EqtiPJkszhw7DBvVAYXEsVojNsy4qSjXqmLvk6PrTUtsmvM7ugrJFn6X4NvMWs9hty726XRwBdejPHxvHXtV1ij",
  "key24": "2WjeGTTDA4VfPaXnJitbmp3WWRdNWqR13AYwtT5eXSm4b7NYbGxiuegHjsZHKemS8gRWdUe7EhTXydzB9nJd5EcW",
  "key25": "2DvmjkVBSwE8dZTwmqdBWPXVADqkU4AKb5DLRAugd16VUFc8gVzbPHp3eZXXCLtaFD6mQfGnvjxSUZx4iW7TPWbf",
  "key26": "2B9xwB2cBwn2QTu3qN6ZkmVuiYoqUFgv859WdgjTZTDBcoM6XuFnLmxZhaxJEoLs9fwttLoWRhcXaNhJSuDV1SpL",
  "key27": "4fDJBriVHPW329Ac7sqAAM6LeDmD8fZFugy4qHBoiMg3Gb29qeHAEWMAqc6xiUYFN8qrPkAzuPRj2zmwCbDf2kQv",
  "key28": "2Lbb6Ai9fA4gQVo1TBHQSUrLfuJVYngAAgrF5w34tarsRhfv34PcPMMWCqqkoKXTJnPWdfsBMcGN4xpjZPZCtYv8",
  "key29": "2h6yaNd3Pr7UekvoT9gwsBARQUknGYhpUgjcq4apfvLaehki6pd3tRhXQxyFxAVBX5keFkR3sBk2cNRjedNQzxeh",
  "key30": "5Pb8ztkdDU65ZFCTJR52taaUayMixCHM74izx26WyJJraCg7j4gYypaG3uCkUhiKg9DekaczEApW4WaGNv8NgmCU",
  "key31": "3AbpEsYnaVSwHpwb2w9ryndLAdhGUL5bQ4X5ejAigdXJUnX6XwacevY6VuT5uj61QpjrT9pHQwAdUaRwRafizzia",
  "key32": "3xzDsfMT6UfBeyeyMEnmnkLY9yDyvm8LxTx61WguJB6ZXCrCMmVLa84QxrJAeJ8SbXta9HhVJ6zUQN6xniX9bdWB",
  "key33": "2fURrmrZQKvTBwmSVE3AQZwjqaXPHSitoRAS35saxcvJvqCd2hUq2BBmu78QiD4VQiXbZunxLnh226nBq2miKPkK",
  "key34": "37Qy5gzMdE6NLyjtA43DcZPYi2DDiXtpYD62TUfCkNQLJwS7F1AjN2gBrwx94iX3xwDdxkaeoYt8PH7sNKWyqNzg"
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
