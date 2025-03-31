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
    "5L5WYxfYrmqF4KA1VgpoQTTqEmwdcCzw2AUmTeSrERBciXimcgbsvFwEEgit156JhXkDruzJ3TTdVifGxGHBnrEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mTC7ULApBqtWp8aqNdGcUF368KJHE8wyoHnjDsj9bQuT5ExEYts7EuhYAPhc9eZsSAnAHMLNEyvybCRUTREqRwo",
  "key1": "5CYF3fsmaQwS13ah7pkzsRXcMd8toaqAK3DY3mp857pTrePz5jBRuii3q3QZWSMsMmx6hE1zMK9Tae5ETBvzhCKU",
  "key2": "eX6PKff9jgaCaEkBSEzrELNJA7W6EMRb2iCijqiNke2uQvJgFqydVR6UkPv7byYnDi1bo5MViyWtji6haWE4P3T",
  "key3": "5rGNAWPXy6oP23mPkA7nMhFAfVNnzMA4xHzKBx7QUd6i889yUkAmnKHC64uMgH4NEcYM362wtm8W6gYiD7uFqFbo",
  "key4": "6651khZ98DB5V1Ynt1Ezu4EeNDiPsqqXhckvK29m95akTQVwDLwQt85bU6C18Ppb4noyvrzAX8U2WKyjZDTTsQgh",
  "key5": "4pyuTkNFDR1jSWcfb7R8DqB2s76f94ULHMRENro5ubUtNAXd6Eu9mKFcpPrtD19y4aZKknN7S6W67ECTVpFKVhqC",
  "key6": "2qiQZadngUGkenAYMtyyvczrrqZciBvDtN9Z59R3DnvGJBP8cyCvjbD2eJNuZH2oKmmNHP5cZN1sYxgofmV8HD3r",
  "key7": "65tCvT97mewD8ZzjGaKJEZihainQPHWpmFa6qAThUHq7cL7cyfQphn657Vu7zd9PX48biyixr6wwMxX3ftbTHRTy",
  "key8": "4h7ovwEZ74etVY33UQj9KBW62nxEfA6Nf1JW7D5kTvSyUpk1JU8Lzd4TWwpYxnkXgU7cxDT3cdQJFdUiJRhBq4H1",
  "key9": "V3DHgYz1vvf1L1Y4tK1mHTBqhPMuwqAJN3DmEDvk1ABQ6txP4AdUVd78J2PisCRP61rVUhL89eXdp7eTgAhMVsi",
  "key10": "54EiP2NtFTF1pkmLtuxTDuYdYW5LJi3MAXUvCr8nyoZ9Xxhitbx8Te4eaqj6UHJ45sto1TUCdKboRKz13wRgj4qN",
  "key11": "34c7DA4LLVJnuw396i1S6zEkebYWQ8863YpZC7ga9GatfpUuHLRrCGNG4uofgefEWMooi6mt4776CEmUVoVsL4Yh",
  "key12": "27ZrqD9zKAAxSQqBcsUupoR5GPtjsgVq3ivZh6czX92dQxLdtxukuzwVdjTCkxwjuD8ShpbkK3Nnzdu8HCG3rUkX",
  "key13": "RLM3SoEtLWisqvouGQ1sTNZgbKkGToTJNqqgu9Zwwr8kDMYuEvxRHfBtHLU8zyTC81AHTUSHqUA7xxiNp5m7QQb",
  "key14": "5d6yc9uayyt9DJrRaupxHy4Sx7fHuYyp3LpZmSXQMyx2c9KXqsTpt1tejU5Ej3kqBaNSyaomi5ssAFn2L29jNmNa",
  "key15": "uGhDwQXgSRdRosMHbaj5Yw5CzsnnsMnRaKZ4bmNrijjp8PA28hc9wVNZN3gLy4wxPgrqt3Km4B7NNuNXxUAn8kB",
  "key16": "3q8qMEgPmKUoTqvvb3jLgbpnU8YR8gPvTth5QBJkMXpnxtr4FAPK3EJzN1RmjVpWBfj3HWftDVop92JahRkY2BrG",
  "key17": "5y1zuuBsocx9fqJcobtNPrfeCviPH8vbH3gqvpRJNhpZdEUkdeab1MA6Ye97AabXd4Qn4Zc1enj1rqGzCryeJS9F",
  "key18": "3NhLFBQxFL2FQ3E33Qg8m1WbLa7pVKiDpqJZtZ8jLyS6ATc4qX1Zf6sfQRykWRD5W8XQWH7T2fSqDVDH5JVcYuAY",
  "key19": "56bncUHJvWbust6WiapMnrJVt8sknttGSQK5YGPW8YrJgm7Vv6cLkaVvDLHD6BGBGFMp5i2GoYNtKcrD9uhiKdGs",
  "key20": "4om1rbYRrb4Zpz34edrtCPbJEqHMFmVgPBdJGvr9vWHcV8XecPBWJZ7svZA2hnbbMGbPa2W8YVCwATtqL2RLXkNj",
  "key21": "3BeSA2C7b7Rq1RaMboAY7bVrWjfPbggCaxvmNJ4UKawJauGzAgUqZWNmRNe1mXRSbMGrtCtzzaZWEkcRmEUzeg8P",
  "key22": "JgEn74CsquFZtAX2R4tD7HdBvRDaA58kBHTaJQghDfykJb8JTcLNHczsHvabb7vbkeh519CZ3dynXXyZcbHLRDj",
  "key23": "2WxfT3ScxDeUcbd8jTGNQeFjWQKVumpk9Zc8nmtxbtWvKx7cM9F9hyysC9CNJrzdfsXn3XeLkfA7Dv4rbct74UQh",
  "key24": "4yWhUmPvXwP8452nqmtGQ3yfzwCCEP3rUMmCJ34zPsDJkaFej3DDdBF4tzfrQojnHWbEF2W78GJK19BscTUMsYmp",
  "key25": "gZJTLd9nv19qWQa7ZzZzMoPNxmmmzroBmdG7jrRAYFs2y2QMF8RC1YF3Su2eq6aJLKECq9YRRcAWE6W8JCxVfmu",
  "key26": "2euxSXBjkBQwepDnaAvxbAu9hmgwEzSTWLxrY2dLcLGwXo7ccRE1stkSd7fq8nmeYF6L74VLpbnxoxQqK5u8zzDj",
  "key27": "iNztdiEFCsKn2d3yxLJB2my5VBCjPCYyhrS4nVcwXCyh9m6KhYz5u6RJW7n3ZxE4RZmAXzPvKxFFkPMjJBaEZaT",
  "key28": "wzN48orXz26FMoaWK1xUmBxHHyjJ97WkpuVH8FFFFtAge6zLGQp6nyiwQCLHiZ9x9KxKx6mLRkNyT4g3vxxNSA4"
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
