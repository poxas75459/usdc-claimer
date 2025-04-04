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
    "4s9R9Xs1n26TquniDfHLJiPAtyG4bXAEB32adD3pek46s3qyGn4UMZ85jyAZmwQZFJNVJB3sMxyJ8D1npyAfuRjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6i6rC8tFuSD6uvHzLrhNgkmsiTegkGSrNXqzDqn3M7a773TRPed9TZ48qPhuHEt5mRtSg79nD9nFTv2x4ApRHtH",
  "key1": "7cgoqUBHVJ3KVJPeDW9rLvw7MFwPbmfR4pdYDTFUCVFNjByYAYaNHVrF88vqBtZGM3ipFuab78xyFXbdQvB6p1F",
  "key2": "63zTdUfQXV6hwrS5v6rDzeKNZRpCbLRDeFqR8iViCqjrJCP3m7zsSCt2cknMfskJBnLm3MdLrTg3Dt2m3cxnSiJo",
  "key3": "xdJ7fD6q3NJdi3HjBvv6PMsBFkNur8X5GLBW1hMVXA8MKfWpVcKRD9wsuHK57jPAFxJqHk2A7xQibviTw6xGVKu",
  "key4": "2puJBfsK5WnvLXMfVXtqGFsv9xXzbKr3xWEfBfoo6VuUKNddiN6C14ieAtbm6tVVqxFVwmc9FpmbjuveAHvVYynx",
  "key5": "4RNe7SfLYdT5C9kjMYVZcyymCWRxaprgcahgpm3J9pTDkDdmGp3yWqaPfdaEj7HxToQm9cNSB4g7mCLZeUpPUboV",
  "key6": "5DRJpUMpY1wKXhiMUsx7Lx3xipdzRHUcywT36FcdoSHar43tmf86Rn1yGNcs6XPi7vLVtU1UzcKzWjZdyuHgE3oX",
  "key7": "3fvuRXNUdRqkvSAR9PnKgpBH7oEN26qnk3zkRfk3SbBXU6P8dQgeZS1L9EcNZrrybMjqk7DvzB84hFp933F4iqDM",
  "key8": "zXP8VFzhUSRp4czsTNuXuhDxGn5qX4bmz4yVQxQoKedbFM2gx3vG6EdPufGoLcnsJf8f31RPxaM76rPAHZVpxCd",
  "key9": "5vZkYjBFQ8xHnKsbMycyLpE5DiFtBPVDrv3SuDemwZgHoT8qsUpxjR564gxjPdDp5LDucoNQmkVzZxxPybfAZVLe",
  "key10": "4ib4G5PbCteNkQUVMuZMyzhFaHyUickdqrRVyxcDuhmb4Xb5ETiga1FKkR4wnuhaDhEf6C8Y77XUs8A2hax8FAvq",
  "key11": "p8L6KNarpJtBytMCQgbVCcEzGA7qGwEvXxGtsQxYTAg6CcAzzmKuTJMA7yvbc8Tb48q8RVLzyKUghM1M8iBsVPm",
  "key12": "2JpEp16Pw6n3BS9WXmPJ8tTLzVXRPXNpQ57beCcTMDBkPHvCm9ZEKcWGb2GJTmqbZWuTm4ug4ahw2kB5taAjDmYg",
  "key13": "4XmZTHvJBWZF3Q2p4YJjRmTgiFWpyzC2muvPiZmQC7a11sXMQFRkTpb3LoMHihgAVz4H7JEX7hJ8YCpAgxSFAvAU",
  "key14": "5ACiPH9bm6kCi8VFu8HGVVa5R52W1WfuSU5amvjqeYAoU2UWvmmiXSaCFozmUJvDPp18nhGwAsPuRqiMPS186CVy",
  "key15": "5nAykr4WTpq6b2jbKnM3RxUmph3WRKXAc3H1jmhbc5q11DxqGnZWvNhUgtNwJyUbPrV4BnLsL5wYi6h88X6a6HkU",
  "key16": "4cYc9CzdK6zVYqeUewj2HWt9d4uc7AmfzcAzxdtFJP4rgXKbKEjRBwCsTUUhMaSdq5bAQMyibTSNMf4xPZu9frKL",
  "key17": "iLUAX9aVPDmZjbM1k23x3PCXF6pHycpByPbn17SiXcVRoADGwNwhofvv296jhZaaacrXM4Zj62pEsiCrA6LhVJC",
  "key18": "FeV3QRXFyADUGerzrdgTx2ihL8tNDMV8PAURQ84AxJbF8LbmtZvrbAeJDYhJ8PRa2hVEdbBtRTCVXwiW3j4sCUc",
  "key19": "2yTtwFDaxvSMZX5srRgrTnyUHaYgs9Sa4mrGPubTycjzR9xM86UJ4zooK6KscJjH3D9oxVMUEH5fZwfZcg3fXEG5",
  "key20": "4tUZFkEad5xDYUmkTQAJBgXEsL77by1yLGKMHaV1oZuAiC1jKnLjuEqquZjja4HTQcAcAoaL28HZYEyH7vY46pSm",
  "key21": "4rv8absmNa1dj3KtG254U1M4VHUNpgQgNWD1U5qrqUiR8AK5JaVbZ9Z86NwnsSQqvo2nKDfKzMpNGdijQp3yVN7e",
  "key22": "5tBwCD6icfitiYfhPRch76EJHZkxjeSwJ7Dso3h8kRLGuHPbhV3JYSh41ELfZHk1zWzwcbpgpE1XrGPyMiYzf97E",
  "key23": "4gjQh1mV3LWmiJASDyww3ALofgtJMvxgn2kAo4qHtMnU9r7tTyFAbdNQvGXVVNjSoUnKMYiH1zpHEsrmyPiTfaHd",
  "key24": "5dZ6Z61aYNt4Em7d6aNPkb3n1FNhDa4Zrzji7X4RDPjtHnxvAij7Nv4NFe2jtvHC7n2tgAJbkmfrmkYnbgiXEAVH",
  "key25": "3mdyVcxjmfTf7esyUEmUjnJkWcHY2ZDC6ZDW9qRtjWYcyZA5atLT6e6ZNZrYJQ3dLSDRWdseD91yYZiG3LsSG2Mm",
  "key26": "4zGgkddyuSqF7T9SUkfH5kyJgsE9V84vBNZDXggEU44svmHhh2sjcpAQ1dVxTB9wS65NSBh2vKTMbACxaPyWcBxY",
  "key27": "2NgRB72TTZEVNTnh6FyaR723d5Z8QnBP9YjV6mgiNBMk1AvQUSbwQtGyHojn1wnxQwhDCzgBwqrJRvDpUnudFVyQ",
  "key28": "53qvfemMGUwXNgkiPLdDe7u1q2cdLEsmMhegVbJ173VA2eeS2KYRCHhwydJotsRx2SWb72iDa6dMwXohi9nn3SEG",
  "key29": "WHs1XockVz7DzCnTYvnmCKK73iEes7dYP7u4RaPkviBUSDpMHiXToUnBJSQh7fo8Ms3JeVg8rqH2sLXuY3YomkG",
  "key30": "3pcYniy5VFk1m6acX1xWxyuNySV23dC15BrpTqgLydHRjtvwDcWsF4xERxRphBZyv75FQydwVNiCEMfQ7ReLBRH9",
  "key31": "5cFdL4zkRErJk85WjDVtJetniXRgBPcUgAS978ncMuYTKCP7pDUz6MWE5WZR3Em5fQUKSywVWrU8wFzkeAxPDJ3D",
  "key32": "4t8jK7RfY5QEas1XK8uZK6LA1xxWnNsKzNvPepaESUoZy5R1r3QiwywUtxtKVsiiWNnqWg7gkiVXBXGm4grk23We",
  "key33": "3SvfeGZVEfFrFX6QX4mRrEKEwHtwe2oy4sFXfbH4voDPu1dAkvFCkQuQ6wsQVXhjRJJSgUXnfZr3vpRnryQbFo6w",
  "key34": "3Ct74m5pPECLHbaVCWTX1rAK1Cu5Nc6GA9mECpMDp3VUH3fFPv9Uat1vTX1hY2H6hqvpV9M3U8m4XCfLZgq468ui"
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
