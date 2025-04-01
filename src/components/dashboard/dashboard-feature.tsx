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
    "42AGDzjzmvkv3WH8QGY2giSnzjHRFR734YoYfNDRDwEoRzoYvBWh6ZK4MQh1hkkrBmpYm6z4frafSz7JKXemi1iX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KAX57ZL1J8W49upx633HGmmFu9opshAkGwpMjFZkP2hGT78gwUa3nkBXVhREQaj1xJDymf9r8VKwcQhZGbHeKp3",
  "key1": "66Mtz3j6i9eUjc44icG38FDh8xnGA8zDsU4zc9H1d6exMKocy7fUE5NZiRqks2xs9eFczRK9T9Py7v92whhk8V64",
  "key2": "WGK9BcjZLatfxSMsBkUXD6Yyf3FVhoTBn3WNhHMFR3wfAfUFvRrGhuDMBxCztpRX8WdmyJXuKnpH6fy8arzi18h",
  "key3": "4yjEN1eUgHdw6w7CYX2zQkWfeHAdAhnrVxLLsN4SXJHofTdpFFHp9Hdsjg4dyYj1Ttac9ZSKZydKSG8VnsyCQjmt",
  "key4": "2eKgYuN9HcfdXL97faGLxpu9YomNWRsU6zmAKULvNUimFLkWBQvZ7vC2eZHr7HPTWwNheVX8kzXfqY4xHYhgp6NR",
  "key5": "3BxEgY8YC7sYwCo5F1BdVmnUESxF85PFwTtApx6cNtteL31h1nt741FYvkjN3c65hvDh4tBq4A2MAknwzrqNSxbh",
  "key6": "vyfZ47WfyXNad4rDdd5YRK7dAkDd5G48qj1AGZYD5YV7CTCPvQLfjizWxEVnH2mBwDYdXSoQydKqbMdjyN47TWu",
  "key7": "2TZj8hpRqith5siQTwDz1E9ZzSFgDK59QGpjDNKE7Lcs64gNmgmhBENordtp3zmPaZtGqfmNVkXjw9hHrzckDXx6",
  "key8": "5aCwdn531oqTyd9Jj3Fc7MwzuDXYx2BN6g59zH43qNi6mNDiNaCY6mCY74JYcr4SwP6cunRawZJhrYcRRCh1Xixc",
  "key9": "4TL5sanFj1vMffASJHkTJCtggZNYPrGMZYw2bs8zjkLvXapY145sCwcj83P9mr4asibrnKpoGJk3q2bst9XSELY5",
  "key10": "3erQp2aC1PkrGmUJyxqYuZr7B66UgsgkdqkjQA6Eu1eJFmQ6MAGAe1VMt6VVHf57wvxzzhKJUUEjAik655kmoQjZ",
  "key11": "2jDjmK146yu9WruqPJv338pha5sjbKrk8JxCrKxyB4KnwdJjByBQedHmrieC37y9PayBcdiN6LrGge9TnszwFaFc",
  "key12": "4suuBh6h1oa7r2MwfootaDPBT8LGpuEYs27P2Th14nZGHmuPLAT63MxFiMwSDV5g31bJa8nupiLvdfLMYzGkcjuw",
  "key13": "q3dPKnLiwERpghxbyMksnNDgVmFLTYYpWQPBKwrGngjFrbhJUzKyc7SCmxwynoL1CYW4SXHTho38KJ3g7yGk5f8",
  "key14": "3vWkBi5yL6XWx8o7jYDP27a4JdVLWpxwgfRLJNpb1jzNgLsgzHqJnVuE95f7rN2UjB4t3QZQebnFkjBf26sYAgen",
  "key15": "5Zrhq6byQLWLcejPEmxvbBfXAJBndkrLD3Mf7eRPCTVs3QQCuRpFZzTm2LHMqfNfRdvzm8aRL4dH1jb5N4TgDz1v",
  "key16": "4G9vdSmYqAiu8gJjN7yUjLmciBZr6puT5ipG3Yg3ug1WgSCKz83QXCq7mL6KWcs3QkbspKofJxcZkJvm37ZfZmgq",
  "key17": "4P4WGZb8qR9cVHMqUBGqi6v53JJW1aKSwJts4FkdYEvJ55toWueTekojtJ8QPG79RzMF6wqDxNCLHVVxdLg1Ne6u",
  "key18": "2roDiEqNXFHy5B9cizuHnvV8yhwxALGptANBY93tDKqCfX3wUwkLMJ98TwR44AA3nhzqBn6ndASb7MCfw2RzrQsy",
  "key19": "5yWAKkNUYBpSXr3KYbiBFWPUhMrtyxqqKem32bck9v7H618FTiLXR1EMJmgwvg6JGBptGpYrZznBREgWTa6RHBMB",
  "key20": "2xy8p52c1LuocqqhwyHJrVu38AjHCiGe9TJgscdxW4xtbD8LsbSZuNT6BwWzTmjYmWws6p8UfG2hdTkpEDpdron2",
  "key21": "28WHY7TV7cEBKWE5w8m1NhxwBDMpMg2fdJXrYBBniwpUiGRzos5K51EgQovcatGdqS1Br5mvjZUFy5ojC6XN8RUS",
  "key22": "Dev8Akb2UveRai7peUaXSWgtJtjHsbRRGrQpTMbF8CstidquE3F9U5Bh9CmVDGhu8ufsjng7RtJwLqjqH1boc1A",
  "key23": "zwzRUWjyNyVJAQo6nwVDVonpUbqnhXoqXE612gxNbf2TgBoR68LuiqXWmh1ywBuwN4ap5Vtx3UisbH1MwRWpupc",
  "key24": "62veS5oCsPCdQN2Mq19oc1avUJfuQhzdq8vvZLjeih3sRaxjgtuhrFrNjR9iBDkMdJJmTeHV8WMhcSTKjQ67cPRq",
  "key25": "Mn3Q48KrG6LQ8WQy3yBWeCLbe9bWeN71QzcK1cgRsTxxH5x1z2JfZC5CMfLZ37iENwMZetR8LJAhLyL1ddgjubB",
  "key26": "5iVs2v8idux5HcFkLVUkMWiHPEK1GyRVo3rwBFtYFwFSwXiZHXHnnftyNvebukXjEWgTabLkB9Wp9AXP1FSuPB4R",
  "key27": "qcjxX5gWMGmQ6kWZxJovazcnRkDJCceDTXccA75fdTRh2YCY6nThLDfitTcBYAtsya7QSd5unNZw7vg8btwfV6a"
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
