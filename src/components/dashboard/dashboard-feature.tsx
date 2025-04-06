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
    "ZVtV4pw2mzwJYUGBZkz6xTudBWEhrxCxqoQvYugY8rSBtpLLqG8sfMCZ2rXUZjRUZ8ob1X3o3bGMjyoJFXSswi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yta3pJWgyQm3aGaFedbW85LVAzypipkJpjSYzLkjLPACMvasfNvJQxNCQEoTd787drGRsQ3AneBEwU1xYE3WfPV",
  "key1": "5c7vQ2zDr9xSZhiHtbYU4Q7dCQRxRFBJFmziam2fj2C2QBz48YXA3GZMQwwxLBYzuY5eqfpwpQxqeotFXAjLSgxu",
  "key2": "3YiNpXtn3QNadY3QnhZNTFpLnWj4aKHFp1k6zi9E5UN4vAmcEvAm9HVpYuNfpvgwC9RAf4Poq47aTcVV3RdGwHyk",
  "key3": "64G2FaWqdnA5jmyofpShgpYTEj2P73c1M9WSmiRYbcuqYuVuRZvUJ3HLvdTTbyheCvoCdWuzFET7PKt7DkAaWa8P",
  "key4": "3oovwv3PBiWSn7xcU8ctSCHtkMjEga8EG1dSg5E2hXx4Rt3GoJjCQmWzeyXxkYbEhdhrkzukqdsxiCw2sqNZy7g2",
  "key5": "rRGVdWtkYhYmjGu6S5eQ1vrMugRsSkwGVfj2JNChgbfKv5P1vcZecuQQLLAQ81UFZP1ZWCH88a5oxBydCaCJozi",
  "key6": "2GC8JqiPUpQegnvAkY8zmoRELhP5Q3bG5hXhcraBkDp9ysMLGn7TAUEcAxyoA6SmG1nzNLYSb2wWYpzd9uhNcvvz",
  "key7": "Djox5skHgYRYMJTKoD35o9bRsjMyGMCZzu43HmMCpFu1w4NDgxHzxY9y71AkBxsR3DQmkjaENLXHuKiNyaGUPkX",
  "key8": "21Hc6AzCye6WMeM7exeiiVhArrhJmqxzfg6q9FxzpzRn49w2iPNyj1yKSjeRLsXzQBXcQ1x3F9PRaBBbwxVDH3aH",
  "key9": "NtsCmDyZQd7MZYggNNBzS8i9yj72hpq7K8doAuiM4hBNRJQFvnzpe8a4AkHU9yaQUp5hEqt71r1bLGyyrDp4uJw",
  "key10": "6rePEnwbgWvzwmEis48iUJNhqq21oBo9dP4cWkdqD5FRTLPDed7Rytdep8Zww6qDphGE9whrz3JShoLZZRtLyf2",
  "key11": "5rbX9ZEdfoexNkC4CHvrApLFKcLV7K9xvRxCUfithZmLHyqcCMdrFBFybVB87LgGiHyJgo2PcD19psveQyCeF8v2",
  "key12": "28VT5QsaB2bdVcsXL3qDkZP7JkZHuqdrToFTnuimsgNDNYXsp7YbWqTkGjaRzZ5Eu6jT93UKu5qpWS3kYZKY17sf",
  "key13": "q8rKAW4V2XnveojKDVaqaaETmMs4Df53WxXQZDtTtwb3QsJ8z1rTtSut7jiUM3n9MW6wcd4EC17TNRvdb4m1zXk",
  "key14": "ecfTakF4FDTAVvi5ghzavSyMNGCgrBJtKu7punGeuFN8s6Sn36TUy6xGCndmR9WYX2Wm5gNJVR35Q6kHUBTUmEX",
  "key15": "2b4EGA1NKRmo9zLZXJ7BEvLD78hxGbep5rWCKABbsMgvt1F2UXtnx6gWEP5vCcMsKJhzgrekpzDgYLMATMjXsts3",
  "key16": "2bEoJ1iA8dpSwxWBf7hiygf5GhgxERdxU9kwRzzV6WHw9HysGdjsnxS3snqwNvtn5xK41k5B6S2WrTCwrgBwyZBn",
  "key17": "5mcw6b9VcrBSQWygitcHwcVfJRSL7NUJhKVwaFcKeyYqwbHsEWoiDCjexUBei78EWXMhe1ejtkHXa6KVUJ5ajquo",
  "key18": "2haEso99r9sy22RaHkKPmibZqoJL8YTnyhxxvrQ6tWdRaxhLiTHTaeXjKqRniW8bwmX8XsjhzM2w8LCU9z6cUama",
  "key19": "2au1xgA6cuwLM1fEeqaxCY72uAgWEYkYBhrnMCWTWfL8hgiQBBFKRck16DwzQ5qCwe1o5ynJYjY2dr7hooMHpvA9",
  "key20": "5U8WeUt8hGWhSM7WTvNPvjZ96MAHoy9qNAPNg4kb1BamdB4r6Kh7XQxpwfJ1s2QA33NabbCrske3a5GyhAsghje1",
  "key21": "5HMjwsJUj9zNQWF4EytTiRH8GssrpdTmM44kuezC6zMn6NxjowWdB84ZWmtkePV8YRu2pPoZPCksu9UsLQ6yPtSX",
  "key22": "2LedVSzFpeQdHVxo4PzuouzoaWfGCfifE4H6tXTVp2e48jwqz7txUwoNcLvnYaqvZWKakNedEM2s4zzoMcxfQcm8",
  "key23": "3dnnXhwoHJwLCsSVM4BhYQ4RPnrXsWofSC6N9PXAeWnesonTb3ZBuQ4r1xqqM4K4S5FskouvFGcQYzuEsaRXjF8D",
  "key24": "GAq1iH4qQ3kN4b1jiPx981M2e7riSwmmKnbkznc1nKRxuDUyZ2ZuzkV63PevHEcivDGAUefiXC5spMuGdhKKY7Y",
  "key25": "31TiDBaEzDzizrHHVpDaHpVCXPvZ3Qcxsxk3wBtU8doQkEK1mSZAj1HJ2UJDMvGcYgcBJow4n6nry1Xxgac3SedG",
  "key26": "4VznoLuB6UBw91oy93zKGpY5ph4gHuTmbsopuEUncCdX65FgzLeiLnS3N2J5CpTuMH2ykuQFpBE9bsjpfSstTUs2",
  "key27": "3ms2NAPCctuN99Jh3wcdpuo1HMt5qEK41UfntjfnBRVFV11ufv5UnXoVpMfiZsRuY2quufLAuPNx2v1x8BqweEaS",
  "key28": "5zRc4JEKYLf17E7fbr8AphNm86PmRqdNFSSAYyx1FRBKE9QJrPkvRJnp8Uvhuc65EXSF8XKkSpkk7mTECfipCMK4",
  "key29": "4Fh7J6LtiMHvsdnFZNeq6rWU535ku7kQxqPJ4kMwm2MbwGczSt7xuqnQcYCtdcvF1FdGkXoWg4zHVrq1NzBGz7Vc",
  "key30": "5Wr4H7KcXg6cog4Lw7SFEE5teL45iJ1XrDHQvoMPE6DB97r3CYqbABjcL5smXJdM2AFhSqaoFLiiNmQmg18U9LUZ",
  "key31": "3hpVLzDdjVRkwgHZryBWvqfynFWF7kvB8rryVhMzaZsQnZLvTCMZzRz47MiQ8QK84bptjQDW7hNaPwY1aDSKxtsn",
  "key32": "2bQsPkkhD3GivegZHFzBLcJcf3PxyrTzRseD4yoTrGzFP8NcAHiDUZGrZUB9Jq1Ek3Wj1G3DBoHdUrC12LxWRaMU",
  "key33": "LaQDqwfE6MaomEmewEKHzHMzvTfAFv9VN6agz6npmy3HzZPKdQwL7aisJqk56JFnhtfi8C4LdYB1MwESB8x6oAi",
  "key34": "5LkYQxLGwCjLU8gHvak8jjST8o3dFE8qdb1empPqwFqgAiogXiC7CqjCMphrhccoJiRtxZerxUaAVy998KVjtLnE",
  "key35": "25tnwW1qVP45N3pokqKJ9bKpa1B6eKy6uz4vTN9GSPkEkiVakmXqF13ZTp9HZvf6nYXbvd12729YcukXpdBVjNJW",
  "key36": "4Qp9BFwjYHh69vrXnjWNhyXMQcjpdVHMtfZmwx4xM9JS3aRuVUbhKy7Kwro9NVh7yzqweodZdTvGVZ8pkYchE7UH",
  "key37": "2K4jNrr1giDN5WMkEN8ANPRLGNSJvyEs6HawPNbgqCseanUXQdtkoSHeo4Pv64HfjcfHBKjSqV6UDLS4VqQXRiSx",
  "key38": "2Dgp6vi6E56dMewckdmsuBeNtaS2bfzewkRX6TRaqbmg3Wb3QTiMVyZ2CF4bknw5p8SkpZNMuo1oLnd3RKJLGQyt",
  "key39": "VZxoDrgYuan5QgtxQft1eLU3vnv1avLZHEJCjQgKKPUXjejFF7NuTJoHKr5TFZVq4XQqzA97qEoKUHYGeY7qDi5",
  "key40": "3vYtURAnQnAtAowhKuj4Do3mkVK5toWgTs3Ynwf5z3wCC2RLnUDZiaAq36LAYUZ5ZiLDZQy6prZ8w2ZnxQEYAtpp",
  "key41": "3yRwzyjbUNuCDNgUAQARAdLfL5cS1cwkfEcf9cG8s48TPW71cDZMMkbt7YtrYF9XtM5jHvJJXAXF4Soe8XH77mUQ",
  "key42": "F3aRmXGg2RzDYXUZNUN7vEpK3DaxWMXXHQzJpEdZWb3S2zZonjuKa86biBgfXACUe7nBoMkhD7EmHkQhy5HZ8jp",
  "key43": "9USf98cw9tGfBsejnd8dvN2vCS1HVmLo6yZp9v5woY68PArHgJVsKrA9JpJ4EsKRjtGDTYfiKGdz7utQXxJGj13"
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
