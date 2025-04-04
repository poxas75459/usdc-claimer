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
    "3gSsGNbHAWyC7zFmEHoA95br3Vc1Eag9A34XaNTkqCXHKc4UstPU4fNGkojTCs7BDqZ1UwwnRyoPQHQj69L8X1L8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVVrNopo1f9gYpj2BkjmaWZ7JYvxbodvKD4ZTnS64zc58xcWwjYcj1RKujzeEEvLedhUNwJjf7UFCm6ASNMivCW",
  "key1": "56y9ZZUp8tZRdqz2AqmCwiTS5428B5KL3usVkaw4Jq8ovLDn74tSRYdZhwUfxdokwCfr9CzvSY5om9wdQevjdPwt",
  "key2": "8wqPPZhEg1JoMXRbKDMvAxgpuekN9KUeyyLUPgpZc6rWQfdUQg8BPXo1m6GGCZwbGaQHDiLGBvi2ivCshkR6TQe",
  "key3": "3U7dMpMRVSYBV867HGHzQgd75dSuEfsLoUrY5MA7pJwiNTH8rdHJbS1hAnuwdDiQWQaKKahh1HhtN7RbSAzJAF6Q",
  "key4": "5jBiV1iq1D2AQMTLN7DTTcYxPykbysThDhBcwcQ6H2D1DJCHgujLnLdkKgoN3DbL3AN97XPVkMPD5JMfYPCB2Y5v",
  "key5": "21fZzQbbohHZg831vZBx6YmWLwuCB23ddh46BnD3vNUvBqaBTkP5aazMkh31uatfuTvUXqsFfvDkN2jntVBCuKxf",
  "key6": "2edhEcSgGs2C1NVoNGvxRctBaEoZPSgAdY3gkKmxyk4RboBpcgLQDu6G5yDpdJ81LYWAN3BsqxM99MbQPSTYJcSA",
  "key7": "2PNyvFqmr1BfYKUn41nvYfGR91Mt9HGvQFT3ayzpBnDpZXSafeUAFyMxwAG9Eynr32UQx41Pbud3YJwg95o6orY5",
  "key8": "26RX2dWov3ZvWyZ9XsAzcX3zRd3Pb2aCyf1gULCwoZ3kAfVg7fBruXgb2CXSQnd6pY78E3XNUsgiPCSh1dn6wNCk",
  "key9": "5s57HeApQLoan3KSw1vbbUQC1buZnPdeiEi95VTfupvGyQQrMyCVrnVLy5GXWyYXYRdePACAhufhCUYz9VeVuJb3",
  "key10": "4deiZTttkCz6Zy8CFgZ76VwxrxUvkqC3FpdEPCdgvReiAq9UwXAfpipYJZszAahD4v8iUujaHM2CFwsz9HaWgzcU",
  "key11": "2RWQbKFz355yEDfVTVU95poEyjqrBGxrMNCok9oTEcJeQwfgh69vyF5CpJysavZgfk9sfXkvDUsjMBxTczoFkS36",
  "key12": "mfMEE4hDuLQb2zBe3ZxUE8FTtosWavCBE775u9jYRjJaZuBGod8L9Nfj1dCY2UWEUtETTHCJfuvCTokfV4pq9VF",
  "key13": "4xp53oaqEHNusbti3JoaFS6EytiyYAuFdHqnWgwkKQh49xEdGpe2rktxn29bFQoppvLo7vrTAVrghNqUA8f8SE6U",
  "key14": "317HWyQsV5Z8t9mKH7iGtZfArk7d2VtqkL49E8MGELv2LUCAzfTmBAaZYCYY66Bfx2TBr6F9HjqzeiEj6WpcjgW4",
  "key15": "2RXUyKUsT5QWpo1VUfxinhNygrfQTUGr8usgGqg7fkMtWY8ef8yVTnMUwWqX8pVELbf24tF9nuKPMrqfiw4PmzPn",
  "key16": "9uJAYYFhEMck6stoarKUZURGgDxxKwGhKe6VNg5Zt8brge8p3aTSC66AubF3dsCjJP8H9unT1WLLccGNmWcPaEQ",
  "key17": "pfrsa1AUyKXDzHJ4eGd3wV8YtVxwKQ4a1heV1Z7LMWHYaNspyFF18dVGff5emQLTRSmieUpLHprgGBeXCAv9BYy",
  "key18": "5wEDsgd72JwMho2eUYbSwj7B9jxSHaG3VWQzaaba4qiGqk4voPfGJwnahUEWxKM75dJhMdW2D9m21zSGJPvKbdxa",
  "key19": "3Z1cNJhivUNSVGtXoP25dA4jAHVcUQbDdUAr132vYjwSDUdJMf5XyiS8xnbTagxuEXfjUgGMehdys6As2o71ebAr",
  "key20": "3ueNsW55i1tnRtw51YVvdD8RNNov8voDaayrQ7QUTddLJZgX4aUKm6iB2LtPNXGYVtL61jwMAy5mQ5D48JkdKwiR",
  "key21": "4n1rFa4AwrsVsRwqoWcuvpk3eL5sEus3xPdVajBMiYAxHbGtQVudrG8fNgY4yiQLuX5po8Hj2rYQ6vFvpL21QBt2",
  "key22": "3JMCip2ARvz8EYvPWbyqiFdBoZ1HpB1Lx3HyaypG7ssqpxeDj54V1SHQ6Ax1F4JYGZBRzdH57x9pKYb2wQa8iVa1",
  "key23": "3XwBMJuCQ273dGfjR3fUM9A9kh5m28oKXPb2pzXgXmnRDoELGmZ71c5EqyoXwitTGeh3cYRWVUkVMxhwmSYMXXTo",
  "key24": "2MnUxNdtFb3RoVLoSQaYWZRxfg3HRNfZYqmRibPkemwD4LquRk8FgenUtcMdwZ8AcFU98DL3MwC1ZHvfbp9w3yz4",
  "key25": "2LK5wzirerMSJQXsX2gr64pBfJBAUBYrAf8RJbQb8QwZAFVJQDJpq4mV1VXysArbuAqJWvVb39WTwJT4du6Tq3hK",
  "key26": "5JvfyRM9iyVdTg2afCvA9zBVrcLwN33w4SCvLzqcUg9aB5FQvtdKcqtDLjfTLzQJb94n9Q15UuJMLuUnZxQq2gL5",
  "key27": "UyGbe1K4MNVr3FnaQYxTX67FTfde6HztAc8kxtasCASRq9VZQ4vwW3rvxKQefXmdfqKGn4TXv7kFwrCPxyh6AT2",
  "key28": "2oM5uoUYywfsPtGx8tJqhrTE9M9AYeNbGitYfMteEq2P8o3bwQFnhSNWFDVxD4qPgKfSULCYR48TbEvpWm5qJraa",
  "key29": "4697wX91RRr5RJRaB593sYLjxHDUViwxsNRMx5XbDXrpG61fEmQ9SCEJ1xjoJZ6maDrVUBoBHLBSYYPpeeaG85RE",
  "key30": "24oc4qFLkHhViTFaEfUzwtFijFKWVrTKyHeHWRziC3m458MXmCiqnGUtbiePB7gwKesPRaXzgg13jQWcwoghJr8q",
  "key31": "4DjKvKrAhwA7M7My48BNSmccZeQebk7CFaep55mQaGzjm1fPk8jMDTSuZGeUE6vfUp36zRwG9fB6N298Ek5KAKAp",
  "key32": "3eBbgt5T1FmXofomJKwGRmD3KHLdKBZGbmAV2jn5xdwNhC3QPQb5mKWwMecEQerCCiCQDY3AsHvSWQ8bSrq1UqRA",
  "key33": "5Y8pitEd9VVKAx3PcYz27yYqrZjaJsk5rbwUT5FLvNA3oSQ73XGALmm1kZsqYndbicm2j4MsJTEWnQEWi6vUxL6S",
  "key34": "F5xdyRSYv93BLaakSVbRWTVkvbcCj1YhGxzN1DfMQoVsZFsMggKbteSLma4FNxRxwUheTDfGdFVE6sc6SqooEGh",
  "key35": "4V2Ba4sFt9LJhQwUwTfioVzts7WtT9YSZ5VNyRhxJx75rR8K1LqKJBrRbFYVSyqB3eyXuCYcefUXZC4s5fkfJfj5"
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
