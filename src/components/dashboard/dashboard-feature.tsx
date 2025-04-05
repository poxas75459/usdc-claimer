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
    "3oVYVduegPL6PHzaoorPNTQkYisQygu1KU6fFpBztDp6rnEc5ivD9NpeUzikgRuMDZQXRAWVqDKhtZXFDe63wZHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GbEFvoUEDCJqAmiUPwTnErj9DdXgFUXa7DWN6epNUjoSyr4vaCHbg9YgraYawYDdHocF2QWKDyGghFaRP3PajMN",
  "key1": "2LNYr4uDg9jYraJnxq3wHbRtZw1iD2kkdYn4es63uq4mK7q1hbZfb3vxyJr2CFxVxrxHSf3cUeSkqHjWSFMQFRwr",
  "key2": "QTgqfPkHjAYGyTHNqYDXhDmSupotbiYRxryaXUrYnNayLRa42N699SRUYjggExs3YQULqs9vB8LnY6f858e6GM7",
  "key3": "5e745UsySqmA7WDkfjzs8DscQCQAEcKhgCk4cwNYtqfvg8QwDDdGekJRfdDR4Ax3Tq7ith43iN4c2y2Dvrc8p7QR",
  "key4": "3naCEvgw2yoTq75dXuVdcYCm8Hw8fwuMnV8A5oDfGMSpX4HWYeYNHZmi2ofRK27hAez4KVva8WtNk5tPyNSG3Xzg",
  "key5": "64d1W4ApkdX4nTp5r6mJd17pCASwGCJrDKVMxtB8BE8Jik9NR2KFcPrTqpposLkPEX9G1pr1t3c7UWhRGUTg74Ve",
  "key6": "d1pCyWoKSwgZnFfH1rs8xNF8Bk8LbzBCid3ruUzW8ZCUKRt6t4BjdENUTS5y8huPFKgrHjfUw69vKQPJ5Ao9qtU",
  "key7": "2vwK7TZYjuBYjRMoZ2oUg5Dpcb4JmmKyoa9WHiCSUxhhFKq3dNkr59L3aBySqB2H6yhNb3b7CzEN8iKDVwJMXNkf",
  "key8": "R59JCWEcthLVQNFYYJoXGhAgMSpHmZk2DfJuRjWXU2J7swMbmfVrh3kypamLsj1iZP2pj6vrCqBQezTTuyp5Rm5",
  "key9": "hWFMNYCPmK4jdSME1ad5rZTztx7dBvetTXe99ACEkxgVb9nhZ2tYfjcrKrEGVdKK9bcKzcDd1jnuizNrDBuaDdK",
  "key10": "3Pr6eX7W8FBCRCVFZ2bFmiPfWY8tXDPpjDkZvU4edf3WbUniCKHYzQAhPdLvZodzFfhuczHkcD1o7sFpWcMappS1",
  "key11": "2qhw4KQWMF1bvcP3Zhzefd5Du5gwmj6LKZqSF5gtexSGGMpG97Khv5NgXadbkAdBXR6ksLNtocLMTd2suDFYKKR8",
  "key12": "4YGGoHDHuZXogRy3CXEyyXC9WBZNhYaDAgm6MJeedhBMYLYkHxrdDhv4fXGDT8a2ihpckXEbYemZWzKAphQnmVeF",
  "key13": "4CedXmuVRisTEapaACgmqxuZaeudwwcPBB7ns3G2BTJnBaFByRcdMW7wMb6vAH8HzeDm8zhXePn4DXmPQfNqtpNc",
  "key14": "28gyUHUZouu9CDbyhnMHMumnynkBxtXsj34CCWC3QH8F7BVpz4gdQEqy1CkFcXeAbyNKq3PzWESkFhbtanRkfVxK",
  "key15": "2KWD51ga8nmpUEymZ89d1rt71tz49Sh5v1pYENvoXqySTo4T25haNVdmb2HPsRAnScfu5XMqyUTzYqfg3qghT2rG",
  "key16": "3ZqgyX7heSYE3Dn9uVF4SdGJZrbKc1CsqBmNpS1FsJCCJNmuea7KDW2sNMkngXVEAWkvxk8Dj6LSzMeQwubSWfur",
  "key17": "3YB8U3MF537JSRRVzaG8qHrn2nV9QWM7nPhujsCvKVDUMxP6Uh8nJnsvPPcsMkPU7vRnxBbNCAmz3wa48yS9gJcr",
  "key18": "2j8osyakn3bVrrwDk6ZDrCM3JPEULJdfUPVpqfQehibc2wPXdKE4De9uHE1z9y5DeCVDUZB5tjprPSiPSX5pyLSR",
  "key19": "5Ts2MjbffgZH6M7tLnijeTZx9aMJKMETmcJSSQA4w3YbVsn4mi88zM7w7vxpDsgVRhDmBdfY4bwyuD7nn5JC6QVF",
  "key20": "2LAtuXQ775RSdnMEmXcx1cLDoW3PTFEnDp1VNuwMJEtoJ47qdsgndRkPZBWWJfg2zQ4iqiRd88zsC8GBrUnj5ucU",
  "key21": "ZghyNvPyHmwith8bnRSUQARKZKdXjPDLBRRcyo5vRijA5xTvEjbuQyzARm1roumoAGBkbXhjvoaaJnLFYSpwg5X",
  "key22": "5FU2iwZyhPiD6ydpWREFD9ZrV27A9BLjUpaw2z3d6dNMKAw1zbkDFd6hEeBVivDtKHXwMn2778TvZ1ADrQrvXy7a",
  "key23": "58HLdngWvTbuEzRDT5a8HatT1vRcqfmrA1bRYQQfc1nzEvccMAPi5FVkDj6txLTEzPSk8L8uKTPBWZ9C9eUL9NAE",
  "key24": "5YkWtTp5X8FSP6r6cyi7Jne71tDYjUMMFDfM7YWbt5g7rYcaynQD5SzfnLXTiPA4hvUW4YLpv2uz9a2mCeqed1aJ",
  "key25": "sFgv2zyQCW15NuLzfZaTeXmBh3gNa8ySrbccErcwajqfEHif7DPBFxbz828j27f9z6JUTmwBEyEN2xHno7hZJaA"
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
