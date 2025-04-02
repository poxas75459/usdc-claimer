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
    "5JnhkuXXtrP3aEdqvi75nrWd6ePtrv71XHVZDvvd4dk65JL9aamcjoQhpZ8qFoUrvhT6o6x1YaRXcg6ZrBc43bUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hiBgWGHE8ASEgGZxBHt5rwdvCR8t8wu3WreNYsoGLqVcEfBNwmQdphFGAwykhafkcmbi5jUKxPth6J9n16KFRky",
  "key1": "63ykGAT4JMmhNxnW9S5twCWEs3eAT2rC2CUEteVviF5D9HH3askb6848fnbaP9Vx42ohFtm1xg4QNnA3Dwti9qni",
  "key2": "4PBXqpdh21VThrTQNHfmN9qk2gnvjxe7r4LCwvaa7mkcbtymFPKtw5XRAKvuL98y6Ak8sfxdsLcKxCvQmCkvhCtk",
  "key3": "3aASkrWzNS7ZiD91wnrjqzxfWb1XX4YfQxmwYUkenmy3yfFhDAbjERdMfK1rG3nKhCXegZHoLpyRaQEX9Cfwo7JK",
  "key4": "tSnZSPY6dssvBvwLGv6ZoFQiiSG55xTNJVvXz1zfADBC8SLsHuvugna73AFKy2N6MVr55zjM23aDeqwr57M6PN4",
  "key5": "56Y6PLFZTN1xextS1SHoTn2WRW7kJ3LWpPbnkoZdTp8Mcx9nwv9s7Dsh75Y67geEafUBPWWUx67zNZTbhoTPgFXM",
  "key6": "36fFUoYUD6QLENJbzmd2qdoqqk1QGaL6cNmA1GZoGkm3Kx7h48As28QbzELYcico4Hqbye63PntVPVxmQw6EBcwT",
  "key7": "42sH5jViHeYzqdUJqUDUB84eengsxdB7g3LepmAZoiKR1QZCQe8oGCCUMob4jTpN2uJxp8BgHUMoZZv9iyS8amza",
  "key8": "4EhuWvQuXH5FW11TuAiEWEmAUSEeYzX2CZcCjE2TwKv74uVdS66TuXthje5T4JxWy6xD27jzJ1xSsDipSbv8nJbJ",
  "key9": "55KKdBSNVucEWcC1Ra69LRSCkJGSiAajoUosEMS8sj9RNi6EcFbFHKbuDcV9WYKHBHvratWhhgtPFRReGn93ZPdu",
  "key10": "4uRcUiBkRgRwan6aHqSX1QmdW4GdQ7S1bXo5NsgxVao4inhwrWyHDvgkQf9fX4MZ8heb2NJTXwT76YQNyVCknjT4",
  "key11": "5SAsBB9NLuTHDX9Ev76H8KNampiNDHNbU34Phj8wBgyT9tthEnBeeY6fJ9CtY4bppBCMfJzjKnH8WDDFVScH49kf",
  "key12": "3Rsw2rYcyL1iPkf9qXrwaiakcheH3Q6udv65UciJfkTieBpVJQXfVFYkcXdnkizyc2kLL8gANppCkJG2MrCfDqe8",
  "key13": "3LqDtwwKBgwyV8JMpgR2ckhPRwbzhVC93e4fZPuRTHLYyyCZz5udJ4KdGnyeywP5ajt9Gmgb9L6N4nruXFsujYy7",
  "key14": "bpiNfoRaSTLCEe52fiEd7ra6Nk8zLb1wErxe2x3QYg1kYShrtFkXj5upMMc7Bzaa3bfUgf4JjPTLvXeqAHmggp1",
  "key15": "5eHF7YBKVyyjvHJcrgRsv7oppWd9oiH1qXcYxvDdEjsQF1Tnx9pQS8wk4SuWFzTchq9iaNnnGjgh6sRFQdzw4EUL",
  "key16": "2NL3rehHGZiotagnW299BAxDT96YscaNr7sxmkiDbtr2MavYQMFxzYkFts94y21tJaVuXWjgk1W5xdNg6XcdXbJ4",
  "key17": "9PVvLqmKAHZ7VJrcrym3Dj4rZygy2bSGxn3qV8h8wjHLVCUQjxBXrsU9gVPT62b4upJ9oZhTS1cvRB1w7JkKewj",
  "key18": "4y5biGp6z3Eg6TGREgurgMKjaozNGLd5zA6ofa6mup8Cn1SKfXTk8dq5SJDdchdXPDgD4HRQMFD8zN1vDdCiHd41",
  "key19": "27Axm1YMA1STvbuAtYVzFV6BKrR9T9KG7qWw9zKUtNdTAxvEXNMuQCzFbwwmwQxLFauGpd9kUbcttcueCBcLTh2X",
  "key20": "dVFd2k3gurG5TLxuya2D6HDnQzRDwEFtXaUmMXY2BEHmE2C3SmH4AtwbEBEWZUqNrSGMyctrGRyuJ1xDE1TLkDq",
  "key21": "3RSoS7XwT9GuN7et3ESwzaVR6nWJyFuNEfmBJyDXwPMS9eDFoyg1jgB3TBh19fNkfCd3wp3gtV4T1dT4NnThYQxy",
  "key22": "47BDUbZp1tLxcEDXC5FVUeJ9j688PCb4W2yj3RWBJy2At5fGoMsmd8aP39H6aWwvVM4QDMHEyBkKaXwnMpdP5Fkr",
  "key23": "3ipmkEwE7Krxq44pinb7qAbomuqV7QjKptfisS5rGDUovjFCankeiKLmfFBmu7jdjpQgyEithYEdnZJF81G1o4ev",
  "key24": "299qtrbVF698gCnkq6gQ4aMAZPk6R6MMbGuNPBaiggQEvHE9nfYwCRchLXAJVtGxbJEVzfsVqpJetzHesq9M2YUd",
  "key25": "3Hnq4rpa2KKfPPDLSXEUkdPyS8F6s5sx8Y3ambv4zV8xndSy4RB1UiZKSMPHjkFg8xukSSyGjTr382Gw2anio8qK",
  "key26": "QSuwCMd74C6CJiLB43cQ7919oavySuNv5JLUh2gQdfa4vig953TMr2sY61GHxPXAXdLEpPGaxj7xJpC4ayyXBRh",
  "key27": "guhpc4yvBg9sHKqDE2vvtGgCAntbLsYkuNDDG5fsXSir6RCWdaTfmfPVpBGQP1y4girMn9m36DaWjF4RshtijJ4",
  "key28": "63jJFb3fT7L9FdHsjvAuZLtPT3Lbd5voMbRM6KNsehd1aituVTV5AYBkRGw48GaGNkGrnL8iNK559oqt4Y7W72t7"
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
