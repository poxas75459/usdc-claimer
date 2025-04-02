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
    "nCKGRR5SpkejSLUd1RuWgEKbt3iKEge8KomHNrvYbu6WqjDGp2FVgE9qo38mPMDvjRxoACwUtmrnbgRGsBketsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5htor6963VaFaMXqxohDdCjQxnRSmKDSZZhAU31ZRtTe22kXRX8NgZE6BvpsTrZGGunRaAr99KNbcMAfxc1jLHv6",
  "key1": "5p6JV8dAEjJqBRMf4X6XqpU2YGJkHEDsqdf9bJmFrK46Y9JY7LpyRJDCQ8c5sTNsSkb9axvWCHXcnmTAtQ3kk16y",
  "key2": "4hrGxn51prKY4fFzggk1jZN178dMWjy6eMEkGTv6EAEdSTtyVMVVYhGg9krxz9s8UEQkVoRBuZffqqytuYx2xtxE",
  "key3": "3RRVPoYXFGR6ra1DFcq6BV7JgsGYskpy8MRRjx5tLN3c25c5hSBFWcyknTDZhXYoXUu1wUwBY8uF8WXuopkYEaTk",
  "key4": "3aK2fY7YKptJmCS5JApR8A3vWASUAx5i8FjEos1HQuHNjzTVgc2fK8T6uokcmMbwk2B5teyHAATBK9EZrQqHHLpx",
  "key5": "2mRSVhEvDLWwwb7njuThXoKiKDtGPq6JaUzDsRbnC3qtSfc4E1vM1nqRvfPYHgPFUeUsqHFTm5ybE6aa6RT1CzfU",
  "key6": "585v9NHPdDkmHJh6BK3w7fZ7mpxPxMnfJFgjxEaz2EorU9BxMU3jv1n6GLMab5R1RBUwVDptKr34tQLgAX2F8pa5",
  "key7": "3QaC49Dz5MxDoybTVGqLZW9mZfan9dDm5xQUAYmvktqjiniUUJDwHRFZxNXYQSb1Rs9tdtUtjttPznRpzD8B7Gq6",
  "key8": "21spCoaHLbTeKEjgC4NxpgfNszM5uyJf5yxEzfJX7yViMbUsGmGgMXZxQsZ2jyhM6LcvAT6i51sYGjhY5D29PWi9",
  "key9": "z4czv1ReA4Q4tM5QV6khESEs1ks1hu8ajCypfH8RxcrsnRwQfau7D1Ew9wuqqSf69s1xyYjPwMQvjMdn4vusvrj",
  "key10": "5NiRmw8GAQNvZBmVFBC8GicsLzxKu6mdRnXY1RzcT69tMkpCDeoedpDd598LmzFTj2FJ6SrCcMTrap915qawjDi5",
  "key11": "4ozQJPP9mrZUmTkvBS9KmJGzfRwkVMtWGNU6sVy3d3e69AKRW48P7k3828Hp3fh3rzHrda985ufAQ6pkivYrfTo7",
  "key12": "5crSwNNgFGV1pXYd5LSVig5bZZfaoaUL5sc9FA9aTF5KqykJW9zvPcbk1ptqGSJ7dV1StEQUWVSuH2FLWnmNrGbj",
  "key13": "5dFEbPBosgP32BiQAEjvr7q6TpfFSGke1WyKnD1ZzZnR5uU77rzKiEuexokEgDtLwB7UZfhLYMTGSkSSPvpPCAy4",
  "key14": "3ivg2a2CYJDSqSt36vNUMnPzpBStps99qAH5PJ35xG5U6Uy9N37B56PDbhNb6NDQrd9CZjh9P6tNPo1dfCK7YsWc",
  "key15": "4DHL6wxvoB37nMBiQaEpLWBnqPhaDhyd1ujRCytQ1q5BbXkCjh2VQ4Q6jdeFfip7fsSq6ezPoupd3FfemqjDN1Wb",
  "key16": "mWYJpposk6GrTG8UBjTA4x3C19Gb5fx4awmL7TSdTVwPMzHLkeYpoJjPgCvw1aBjPJ23R3yJXp6ssU5aSuCxshH",
  "key17": "Ac8g921hwRBtvLQ5QPNRpVLihv32HxBKSCBadRijptdD5EHVaMXNRFsLkd5dJ7Y8sAcC5XMP5Hs5Hw5hLDc3DCS",
  "key18": "5HcBAX3mrjB1spKF5bMgV8XmGDfbzCVweGQsDxGaDsfzazExJNCTf58FgXNujUG5HZL6zcyQZzr6SUsuBfUGf2ap",
  "key19": "3SNzfc3ZBTzy2vmcppC9jVv1yyDXQ4R8EdHaf2PVWxSHFvxavNDLZxZ5HZU7UzqPPd72dNsv8fH6wMkQNKbo4eRZ",
  "key20": "3XvmvL1yiCqsZESGPruZowKdWzX1xFxYFC8k2uLEDhjivHGAXiutn3pPDkBdkHCnYV5wZeBH7AiqqQgXEhpwWphL",
  "key21": "3xAn11iw4Z6mjo3QwZ4K55ENi9Z4DCReDVQ6kqTvKr3MZWq6wvRrc7mU3aot1oWCfVMDu4Yp2XFDQMaPwSEsuZUY",
  "key22": "ij9YBJkWSBaS11sANUqCE16tkn3KSAhL2JaoKn3eCCBVB5w9gcisXz8NfFWVFQTB9ieosXNj3TzFau63f4PaD4n",
  "key23": "5EAVX9E1CAE2gCFwhhiKpvqf7sN241A9K1MP53JCnvns7UxSF88qB5MU3ef7sD6ZWzWzVY6enxuL5uRLiwCt7yjg",
  "key24": "3zW6Ltz6YgPqujwUNWf8G4omoidjPvvBDoGLankCiKwxEJMhUn2GXRRxNmGB8zBjttv3LxDoQfszGqph85csmCL2",
  "key25": "3xdYdabVwJ7wJ9Zt1x5RjFwfWsqBVGt5V5S9BuBvDTZG9fgMsviku57VmEF7gh1Txt6QoZ45VXdm1ScXMw7o3NgQ",
  "key26": "4yLJX3p7e9G8mvsqJBNkC1w3i4NaP4AhFZVJRCjP9PDHnMHnYc21vnHxKKTwjZJJvmSfp4YbcrAa8u7vUkftvVLC",
  "key27": "3oXszsM4afib94ePG2jrowiQa3H8abfnLZNr8rctxecH2bagGvwvwh2oKUGaNuupftBbdvzstWs7tL5yRux7WLAG",
  "key28": "2xgCBXkDMwvNnq7GxGKMgKAQHdhHZv2ygWs978R6A2r5QPgSJ16KWaKBsAsjKQNhXJaxvMzQHWdy4PwUkdvkMjR9",
  "key29": "24PRvvpDbgLT7eMNjeM94wU7mgLEaMZZRG5jhQ6SxNZojwwergAdAzvdgAGbm5x6dRUDUhwYqSJSTct4F5G35jNR",
  "key30": "32LCV1vobP8vuqHTyzrbsyEDb23Fnx4ravGwL6EfHGFCD9Px6mbr4tTnjE2YR5exKteKnQRVsWG3ZVXra4YeEVhV"
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
