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
    "3gwm3VjwjkimrQiGPdMPz49LdgBfdz3xYFwTQMW7MUv8p1RknPDeC6R8YikemVygj4qBFcY19kGrd4Eau4sw5dTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Np3qQydprQ1VmpxFDzbmMGbCvadmMygjKSWryu5hBQ5qFgKf95uz3fKvUfKZXobS2Z4868deohioxfXuBvhtwYg",
  "key1": "4Z9DofCqeFaT25Xv2pw6wLXdAPKKMuUch7FGdjYi6Y2b7vjLQirgD1onuNQm9npfbJqJTgTq1md17D3YYQDCG4h9",
  "key2": "57YqzoG8DtHrNMDJ8P6jShC883QHLXVt69YoVHX1jW5vhyu9zc2b8xXKt5uQEDiukWjHw8cFqy9Tf4Z6nb9uLkCG",
  "key3": "5MvngrDzbEqaFXaU3hh3zQKfzLJgWR6wi3vdtryBmZ6t8HNxE9veJtEUMB72HHgGoPM36h7BdBBJPir5YqVjngdL",
  "key4": "59fr1rmigjpv1YDwkLZ466cBEzpsiyotk2E9kex3xWWzabT25weB1s7mKonwCww9i62zA8UXXW2YKEEGncWNMUHF",
  "key5": "4tSuTXhP2Xk26XMhpRHnwReTQjT54mig9Mg5GkkdtHUgmJy6dkQBoWhdVGs5V5mr9NiUNbUA59DBhmuy8E9MhiqS",
  "key6": "4TccLsH87cCQiF1FafMqRMTKqohE3mkwintKiSn9UmmA4unNms2b53Fv2ye6zbAPPUzCkYsqQFnCz2Q65gxtfxLs",
  "key7": "QWR672Ns5ZdiAdMkop9H5ebeFYgTxhodMCziirKFvL5jJeMu9QHBxv9iQxNNyzdShxhpb8V8jhLrazpvr9Wi2f9",
  "key8": "5pxvVWYpjp3KjSg7sx8Kqhf7TeqkXuskSDAgeEQFTR8cKCfNUHAFkH4UsgsADVkB5CRFCQkT6EBC9yBqraVwrPMQ",
  "key9": "FBs3A6nCKw1wXzhjE9ELVSQquLRZ1t3YPjmC8H6jiDrgNmXzdqdb6WNKYfzLau3vaiiSJLyAULJ6RJHqiSrADoJ",
  "key10": "56zxotFQUX31GbhHMz99yeiMC2tGQyfPNx1Kt6Rq7Rvy3DJAobnvQJvhyXJ9RFUxVcwny11vTKbU7cEGaRyW2abW",
  "key11": "j3mzZb4744mGLpZ4kr2ZCJr6Wj2CWJffzkmXXacRSPYEQXFofiiiGH4rVbam57LMECftEV739Xq8ZA7EaAgLgMx",
  "key12": "3draZ3pvL62o9ckvpBEkvvwRfGja1UmAb5FdCsET7Jr5rMUJXMHqfjH1CpL8pQwq6TZ3HLdoGD2Wa7cbzW2mJCxi",
  "key13": "4iq9tk7oj5485Q7NhJrekKVLyR71rG3Q8MoCfzJdrFidsAQYxt1BbMvAntuZfqqvqu35RfvsyEihH3PSJyFqftRe",
  "key14": "5YoNaKV277FQwN68B9K9WKvALmz2YJKLqgcJHJrE6u6cXPhW93AcnZJFpAXK9upYeFY4WzCcTc7Lczw7RYpwUgH5",
  "key15": "4uVQTw6HRnkDTNPVqfsVnPd5JU9czztCmn56NAtqg9YctyZt9rJYMf2uT8iRpsT8XEWTzDZHE8g6n4ZBp6PbkJo8",
  "key16": "3tBGHug7PdevnyUuvnszqyP8YpL4Pmyg8oey7zMKMBAePUWp2TyuYe7AkQe3evYkE4UnM6AArFeSbXTaGuJoXKMh",
  "key17": "4RQTdYBGXvC6BoKRibic3KV4iAWSd21DdvLoNKEbtvbRW2MKxhxTVRv6xVa2RNiwBu6wK4ApkQHtdeccvwNS8ytg",
  "key18": "3sKCfH8vGCsjsHdjvMEoFuFXvLZvG4ortWy9SEqxUGHwKK1QD1pHMMBVEVXtdUBz2n3wfQ8oC4nPBemmkDftLUo5",
  "key19": "2irn3hPvchPWbVHjjY6V8WFrisqjto2qwHkQzdkTUvk9FQHXfKj7EMqNtdzhrjgoJae2Lw9NbhHiXGZt54acNmTp",
  "key20": "4ucuTGHPqviUSmk1Ajd5KawkwstsiUHfQ78gpsoizm6i7L7mByrqahpPTjYTEZeaQfpUPP8vRk1JBp91nDDqm5T6",
  "key21": "ihKVi57kTsPsnAWgVd2sr5eASmnkYB9U7h3ZJP9PdQxJ84C7cJSanHmYU7A54H5pUHyUzPw4FDLTmq1QaBc2Cxr",
  "key22": "7JyfH7K8g6ud9hYbJpJP9YE3twDMrLweLt2L5KdHWZNiua51DPte8RT7HQzoatDn7AZRL7AwebJZKhEvQbYXcvU",
  "key23": "M9whGjbfGqGwudbDqW7Hk1SqKu5rsD9rxUbZGBge8vkmNnefVkY2m3obVWFgfPeuMMNxWDqQ5cZKqDmr3d2N2XH",
  "key24": "RpSowcDfENLYysPcntzEDcw4UVrg5T1W32sDb6T73LakrjZTjtHbSKEjdRK7DwawfKPXtLX3saQXo8JRZcompRE",
  "key25": "M2YL4zBaT7Wasd7kNsfHJDqdZZ5s2ogaCemhDyTKtAhUfDet6c6QDgMyToA6z8xoD8UPFGmuzY4GZkdqvPfWRWe",
  "key26": "2oiHfU6AGsuH8HGWc6G4fe4w6PiyEb5wa1gvn5U9pmboSyeUWyAhWUwBgeE1Afjf2nTou8B2WUZqZ4wzNtBwT449",
  "key27": "5cqG4oLZ8DWMCAawDTVin79tFGwypu5CYhoLGMSdMs9P8U4QAKmi24tDEpCKxA2XcYHKW3nUSXdLbsWQsz11GU75",
  "key28": "4tS5X43VfKPa1fqzU8xdotYtHack9n46Veuito72mx4YUausCGk5Jpb4nfxcfX2Bu63xtNU64gEf6XWbtTQhRw9v"
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
