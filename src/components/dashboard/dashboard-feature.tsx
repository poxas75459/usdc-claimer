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
    "3vcFAwirQQtDaKcSZmdSRoCKPqf3TF3J1dr3HBTkN2ABEgQgxgz2iVr9CJG6DZjQWdG36ESSu9R429qtswRAfYWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MVd4H3s1p53MruAkhqbqsAJ1uiyUUDWziEc1x6SqcSMYKbWqyvWGGadgv7ggqE6rmnQeyeCe2Sgxmf6VJo6DLqo",
  "key1": "5AiQm1dDG2Pip5QtBFxs269Q5zuUeouh5e565cBGDEvPtNM8dZhLmDTMuy1GtEvwFPgAjdUSwocSNB4a9sXksETv",
  "key2": "3nnJqHLLHVLufPnyRf55fsdkbLhcYb2ZRTnfXW63zoyDQ51XWagnPzTXEpTptDSKgah28MX9FWfPa4hMxYHE5wGF",
  "key3": "3udjdVgGuyKKvUsZ8S4bJHDH1zdrH27fzbJu4LqnsB1WAGtmXzFFBwABQ6t1Pm6eYyLBt9u7BnoUogveHDJ2iBKc",
  "key4": "61qaVsjLLVoPa1p85FVhWL6CGdbuNtGdsTtm3dkVjAeyN5gpqnX1P8iW5cyB6fbAmZ4Netx3dKxpZKSjDus9XWvB",
  "key5": "2bVMY6a974TqB9j9ASjxAe7cDw9RGzx96mMQE32uY8YCxcbHeDkqKhtEKBWmpUmWR296KNnWwLa48Dpi1gK3afAJ",
  "key6": "9gGA9WhFLGHaKoPWBLeywDbysxB4PmKEDsKxDJ43K3veCF6zUoXvR7BaHAztdAPnJgWHfm5MBhKCB3KcUJ2ghJ6",
  "key7": "3GQ1zbbtuVKhSC1vQMyHCEnPxnc2UnqK5o33pB3gJBMQjmcMvqXAMcpy9hyeQC1FBzC8JW6LB9UJutKcssGocL1T",
  "key8": "MqhCguehTfqUWR71bg7pwHyFhR9kQE7CnDN6D4fu7CSeiLWZ4MJxMsNQerxeFAVb25bTiRcJCYPMnDtyZEXs6AP",
  "key9": "46YybEzfHtNztXF4CVsCbPsZdGZKwN6XvLQCKdQGEH38rddM5MocNuQqKXqqRFkXokTYZoc2MfHFWcChtYAv5aEP",
  "key10": "1rvDMMKaWyDPATU2oE7MTJtGyNpxtptLLTFZ9pBZotRtMpXpFa1LErH9LCakdWwqVM6iUwnbS4CmTU3rUhgzbSP",
  "key11": "3FkG8oUkBfik9g75xTkHnXqD8SQnZxYLX3dbRtStJSeJxgjLiqMYSozFqG8XDEGtrorvJJpWoaaheh4qiYeFPsCV",
  "key12": "2hcX8BuW1nNCp53xmtGDf5HoARC35VfVXhnHThit34v2WwHGQyGdobzyQiJYuZWyiw3no6uoTCqRTjQhXRLNekJg",
  "key13": "4GpPJutchtZcJhaLgyeKFTnH71WNHGLusHKMpaT2PqW4EDxNddyG7xUwR42nmaKqmsAjY5jKr3yMhitQdpt9RvYY",
  "key14": "66TSyh89riprMJF5ZoZ1BkfJHxPpZcu1Cm83XB4WJRyabVuH9xEH1YpyS8pWEbiWKF4gYFkby8Dm9zgKBVPCExYN",
  "key15": "5Tu5Nrf4tH1fBco4om5t41ZeeDpev327nwMhvss58enNjrzL7GxFroPViFZ9tSRAXZ9tDZqUhsNURgmm7NVJPXNr",
  "key16": "5JppiMqUDQjmru69MciFNYhT1iHyuzMi1fFkwhhCuXBsjL5P5DDdfyvm9u1t5zghQEznkwYvnkUhS5NZMWrLczkw",
  "key17": "5pcXY7rVZvfbteZn5fWZxr3exe6osSWsQkn25ZTF6MwGC65N3Y5hd1vPH65cu27xXdu6vkj7ETe3eLpT6AL29C8J",
  "key18": "y18SGVpd7917uWh7Aavwi1X5M266sT1QAFtdB7UYHz8fCBdSGtSLU9yfNHHjXBhZCCYFfksWAhiKkdzM1jHwo59",
  "key19": "36TjaPahGgm3VGwiHbbNQw6VxNGukhNPGue1LLbHm63bMb1Z9Vys5tLm8Me6ux5Q6KBQ9aee2bcqdDQpffas7yMP",
  "key20": "kWedsoTbJLjXgsiXrxfqSyygeqPwbCHRrbB6YJAkXGCWDvncZJphdGBCdSyzq9wfk2DUs3exyJ1CWhkhsauMQi6",
  "key21": "4B9D77XnPpVcdEVDKtm3Kx5NDGtq3g92V1QejxpoKUuVjT1oxYPvHMzLhwVkf2mFjCr8zfFRurEn4jh4JW2qs4dj",
  "key22": "EhKB2NgrWU9oje8192t7rZTtAiKwGpN2uSPxMMvpUxneYAw3yk5N8D95CBNBoGPmfGM2iuq8CazBUySeUPcxAnr",
  "key23": "4NH3sErWcTSeCuQkVvWRva3puDjHH6XcAdAXknLJJw2u6rMUngU7fQkfUqQftvUreZTVhCKc5DfvwUcDHHfh9nsf",
  "key24": "p6ynykeDf4bZwfrtFtvko725jqvncv2nrU6R2ocCKJ2k2buV9jCjaazC57fYUqzLPysru86hq5Xu29jNKjKqFRn",
  "key25": "3cxYY4tYFdydpHmeFmgUTCTTfNLfmj2vxJ8fxtnnopMK38v5DK6dNG4Jthae9ew6Ptb5JPd3PVayX7Nok4DdM7oJ",
  "key26": "5MTBLR9Az2yndHTvuyxDmqJMZmSYMTYtNXEFxdbVsuJhVZpYrieBbk7ZySYzqAf2HN6qvamzTmyMA3vSEmokBovh",
  "key27": "5hEmDL9CKNy3UzJwt9zFW8dutJscZrxMwpYb6YDiRkaG7TpMVcGmAsk8b7EdHDtmfRbkW8vQ9YUHx5ypecnRvrz5",
  "key28": "2QAJBhjjh3t1vMiVhj8rq78jTx2Qs9cGG8TSBGbeBVdtvQuQNagT3Ac9nX64fCmN3z2ddG8yqMFTM3EsZtXLgCMW",
  "key29": "3jnDNpBFumVYDrxAvMXnmm4qNcHaVz2JUehbn4JdPmEAA41VGgNfzT4RUtjBAier24EVkhsC2jdRQiisvnk7mkZV"
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
