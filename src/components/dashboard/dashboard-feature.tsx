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
    "JXyQkc8AFr98JdGrdZzVmYY3tyFCHJmVCSvYFAuHkzrp8s8ycZseU3wZf16tC9K4P3VnBobtmCWBP5hUfJbAZkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ndgCJNQJqk5mgitzrcomXPwy1yNW6eGx7w5RHeeb9cMJuZBC6DMULWvdCP3XpWCJ4HscZrLD15E3j7QVXeT51K",
  "key1": "4q1uEZQZxPD2H5gzLLvJtUTuxR39ezfMwHV2prsaS5xpYsFkR2e5ZrULnUs42ifuaUorvRZ6GS9AJUxY2W4RRga6",
  "key2": "3RuCY55P26PuzuXqyYciCEPYzsnXAguRcJ5sirjTwU1ShvSokxrUcvjx6K69MF5QqQggAaugbupZDBvfo9FKK7QC",
  "key3": "22Jq9kEcfZDvG7mMcCuiDdsjRny5Sbosz91J4XHBH7V7Sgtf9XMpqtYRBdi6oTfd7dnj3Ehy1n9tqKz3SRcBHfov",
  "key4": "ejxehjH9DHhirGwT2CysEJJESi6v6XP6NN8EZYK3pLk4pYwrgfrU3woVNQroSsmmNFCVmXVGfKQ8EoPirp5JYYZ",
  "key5": "2PzFH5nMphNuzRTWKhKPGCTfdM7Apegi3jt5ThKAGZ6RVi2rw3pU1JbV9RPuWwP7oAwJqdQgo3VtxQw7iCsJjmwt",
  "key6": "2wEcuwYYCzJUz8Wa5hYic3SdAVFboyrgwdvphjodGFLn3ezuBRFe4967zzgWau92NsLndJaaD7kfpoiTcPTgVHw1",
  "key7": "5ZrSDDm2jvjVSJfncBMbdaVDVcQuVwoXPANTkM4ivV7tZ4rZH9Q8GiLEhmUsppjZ36cEs1Bj4nri7RMGpBYPngmS",
  "key8": "2UmkT1GbpKC4BtCapFspqpU3v6MwFH44EDm9vHFkUS4Ubvh7rjPpqYszLKEBfihwNLUh6jfycriH31WgaMgRWUys",
  "key9": "3qNwSoX55eH4WvXgcaSXBLGyfF9YFbXu48LcSrGwozbuwzhxiPTFL89qCpbTV72ah4ifyhEYdT4CqqFbQibc6LH7",
  "key10": "2GrDgtEiJjZMeqfeWjjria5Rg18XUni43GFC1yh1mDcd3tYZqhd1Wqm4RVrwbkKn3hngoiLuTsaMAFN6SGcqLX4x",
  "key11": "2xMQNJx1zSqhm41DJiu1G8CXHcYpk4TFWWRqcKwMXBAUwr21ctvkUbjY9LVmVSmeTyyHpmPKc48XVGNxG3RT4gmq",
  "key12": "3jr4CZR67b895Qdv2MMisXBgg2aLqcBmpqTRUN9qjHLUDck25bD32quj82zWrBBezC5ebgFHEPRNvMqAk5kKZqss",
  "key13": "3cRdobWf41gXCDHyDB63wanwB5AtaW743ABKg2WZ5g7KtGSx42WMcsTLosCFDSdcqdKwyQTpQUEAtgSzZf5kuTUu",
  "key14": "2LyjyxpBRQ9TZ79hn7F4EkwY6UKGo3uooFTFMkqVDhXoBXabD5AUhWTqCgXTkMo3ni95F7gxwspxaahdoL7aeK14",
  "key15": "rdPAocHPmszAMkqXeT3CaeSXhxzekx5agEMRCzqw5UzoQL36WeQFtoRvXnEC8CFarkjiaoqGcCtcd2nHgaJRzva",
  "key16": "4PPVLHfrc5TWVPffCYK14rMsDUJcE7AKyrhdB61SuP5f5gjK6zFN2vwMcgmzqUxPAjvZNH3vssPWrHXjhGzzv2AS",
  "key17": "5DJGnZS27cUTN2BCvkjQeXUxYVRxbjaq2VSQ4X1igT3ybPmwBKqDgoN7bsUUZnBHyBLBVRzL12XHVv3ei8VsnQKB",
  "key18": "8PXJhfxQQVUxYy8LG341HQ6JZTi42fQoun13oRBmNKVe8YvzYX3LRVqt2yb8UG1pdKXbw5VQ1i35cfThxAYhCC2",
  "key19": "25zfNuDU456sv8kRRoaZudVRKwJpEGMHuKNqngGQNRnn61AqZntTi9ZUPuTHbtSKNRKCd8STB4SEEnW1sB7Tn9wM",
  "key20": "hDofVefuytQbyRXyrJ23Zpx5x3M6Z6jFVvxncxo1a9wQ1dPcHLtSTx2vyuVJfPcEMZ928pmBGRBDv7vrwnC54w9",
  "key21": "2xj5qFZtPiNDna39GfTX7rfbVjQuLp52gBF3QLoB36HwXmW6tEHY5Zk8eZugUgHEkuZU7Tw49THt5NLk7DFCCz8p",
  "key22": "DUL9aiDHgCsDnag23w1ewTodaWeQ5YGcjFix53HtJCXZWM4yDsZC7N8BLd9vrQZ7qktc8w8Ymax4TjEd8JeAesS",
  "key23": "2DEkU1AG7uRpjx2aGthJtE9jPbrQNniFa7uiCJjp3y2D9PwjLMXfvG6PtLS5ZBwqsJp65ofhjfnzFcMnDXmM9kpQ",
  "key24": "5f6WyR2KFFMK8rsP65T4tWbdjYXcdCLXSjuZV2JpB9XG14Aty3Vm5Ey1EJD8KSBSjzTLpj5BWBeuZNAcbNd74wKd",
  "key25": "2hycNybSVBP6pLvMNhdbbmSjHoE4qD68dp6Mnx2SB264tfxuG8Av8q54KBeZeiGFt5vxCwzBn6ZFMQUfWBtdPfR",
  "key26": "5zX4Sb1ng4o4PtG19vUxse1up8azcgMHuH1sKeMEFS4Y34Y88RqYzeucoCykJqmuD3cptyg2fHKYKmcZtV75R2et",
  "key27": "2tarMGS9qfnBMqFEEgKgX7fCoEaNBPZEdUQqZjhnxY8KMnJ6nF14KnTTA4cabwrQpHRSpnmMNtsNr8meUPXbCMt7",
  "key28": "34cB48xnL3anypKst5Tp7zTXtxc6FEEWK946Ukup6Wg1R8v1nkAKNtzDrb4efYsmsShteYXwbuayZ1s4Dk998Xmh",
  "key29": "5jtdvohJBq9KGcjpscboheC2d5cnidNosLNzBEXYpdyoMxripXSNBK6qtNTdhggwq63McfdhfAFnLHfSVGxFxCmf",
  "key30": "24mGEh5H7XP6V44ycCspTyzT26wGM3HmoAxodP3fGUm31wxVKMnMDkoZKrZEzko7XEw1NEmzryBHWCcgr5zc3T58",
  "key31": "223ondTMtQba5gP7dD1LUoUaQvdB3EeNrcFJ8peS5ecngnjvsCjBVRXudqf533vrNyq9qtG4fWWN9CUSQWB2bRgG",
  "key32": "3DgiynfaL1DbbhZdbUvruYCzJcYmzHhmcp4gbXWgr6kNwXksNforL1FQ9JcMXkaF7HQpuAApWaCvGdrgrrjtFw9s",
  "key33": "4L7wVqTe6NnJQra4dXaWgbMEAcuUNK9ofMDHxAkK5NfZ2yoGfXAAoXx7qeHdfqRj9rmP2AWUentmP2sRvWw3eDby",
  "key34": "4BtFPDp9QSAC2GAjyvHtsMkpNraTjWDXuiCFsURdV2K8XwDScg9i6BFhLeiFZpVVtNJnESJHPDivE7ewfteBkRPD",
  "key35": "4xzCjoJkeWfxFpjJ5jWbGjGQ7M8kURuLkz71T2mhHrcCzzJuhQW8PouHBBj36pMmfB6zLVEEE8iKjyuQjR19yW6Q",
  "key36": "4UCV3sAV8wa8BaJEX63TaRTVJEhVBZmnJp2NozXQ41saQSxCHihKMqLgwACAGmDmjhnBPRvXZEiYf5FGctpV6utL",
  "key37": "2atd23k8QJVbZw8pWFHyFbWR5BA3hfFkRQ9ygadU4YcC4WvSxECBUVC3E1NpNB1hWKA1TbcyxowoaiNuLjNcSPq3",
  "key38": "1peHNs1LTW5MkaLXSVJXiu8tf6HH7c2SNcHrKuJ6KJBL417YVY4LVwyb7NojTpitdoDdVzBLxQLWjc6E6rDymx",
  "key39": "2wf6QyaWcNrKzhWbHYEFZtVTmFnt43yj8r4n7uvpTfjdsYohnBeVQ8a2RZVWJtGxGFdQ2BwSiy2p6Nu7xzRwXxEG",
  "key40": "PbFLGBub2EcYvUxiGB1kjjfTFD1b4x2va8LrB5EZG5G3PDaRYRcmsnLJwcBvtTmJtFFNigE7dgmnrgeHKTcLNps",
  "key41": "32eWAsD8iXwufFmVbCBvHp9TiD1MfxW8STGQvvwBsMa663Uit8C9ru4cdNTy7t6Zh7DKSaKNkhBAPb1oDGYebDP6"
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
