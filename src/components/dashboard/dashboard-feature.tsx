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
    "5jjBpHQnFrDcKgkvGvfc2cyxApRyLqjTWuphtCSimHg4YHn7hwFVZQoVbTYhqTUXAmkhP7htfVCNncQbNggV5CMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPdZjP34JKDTr1eTJtND9nhLAu7KV6Q8jRJh8AJPGcC36iaYJVzqFLvecGoki3EmF5UFSkmsdmB8v2QUCQcjizE",
  "key1": "2BfQGpBDcBdgMcifKHXd5czTnSfmmxtrxU6D5bKiV6sXjNUpFgEy2kKAWz1fsqKpiTgwVrPU5xGt5dvQmCWooEGN",
  "key2": "5Uex37RP7Bzuq34agDq5DtGhkoHGs44FRxbFShQQDZi3iZdRL3XjgPNmZNZB2gBkjkUqQWaz7Q88L3KTgh747xZx",
  "key3": "4WyrgB7faLURna2ySB5FS7K2Wd5TW72jpW1d48fMMHLGgojxa5ydobFNoYWjKNwmYoC4Ycy8LvbvfbaqHrMN1HLS",
  "key4": "4hkayPRuwADnCG1n43EokhABAkcQknjjYuVJDmU5w7g1fUc4ZdsWfzf5TBVV3xCwW25LGaVvQQWDYTqFKdBKHseZ",
  "key5": "eZxrPCxjRRsHuNgAEFJs2VxMYNCvA4D1ZgWrXo28eDMyxVYydvzEK8sjkbsrSuRmT1d8b4k6hWdHwUL3vDe6Bef",
  "key6": "336bKhqyDcbZtobtQMY7zd1iwNPJNMqPdQ6FG1kNXgD2CmAJLocu5cU92hEQfcYjS6E2JEWNmTZEXHakaA4EmJfH",
  "key7": "3mRgn4nS8RA8bRvhcuRuEZ6KvTZ8QWCjoSThEMYV1Rza4CwV85H4NHE1Bk9nK4XxtBGhQ7HiL847FZdqWhZnDpky",
  "key8": "4cqxcfyaweWJ7sbDqntouJ7ArreGnhuSWhmppNQJ4qMVNw61G624wsQjtSCDvo5MRSHNdHkqHaD1h8FHnDDifXc8",
  "key9": "3bjtDV6wAZvsLDQ8eqRK28JEK9ccUgsfk9M63V8cDQmmzcrU4NkhVH9yVv2nCoo51qQFJCaC1hhNkhRU9GBZsS1G",
  "key10": "5X3PY8HKrUphMLrC5nxY6Q3Y2aAYfGPeMSECusHGejwezqzQ5So1NzFzhZqY9jFxXcwCBSW1zcFLqmY9FFbGSYHc",
  "key11": "npTSyA2q5rmgZmNtN1u35eV4vM49Rsq9m7iEFLD8Dv5bamiFQ3mX89cCdwQRLmpwopwujhgdEgmFohvfw5vN5Bn",
  "key12": "5Moi3MEPWUQBrpZTBu1mh3mCKvkYhyP9R1iNEexQSczZboy9AtBQky1GQPtzcHP8SXgdxyML5bnYvvyddaRdVkwm",
  "key13": "37kybyzUXvz3CAaVWA446SYdtzZch7UyFNVd11ekC3oxMb1BWLDyqTojcG4V9E76Y4nzrdnpfkqUJXWwzHFSSspg",
  "key14": "2GFVPaF7Ps7s1wDduBt1usRAx9FtpR5qADkRnc8KHWuN4Am4Z133B4gA4heMW4JuG4dpZviLDbXiRcUcNsCE4mfV",
  "key15": "44pDKq5ABVHjYbA6R5q32Ax9Y2RFzebnRKc2KLPjvvmBmacdvSJHNfxqWMqXjJuqgpjGihjXiFiTyATsaHRb8uxa",
  "key16": "PjCb57BuCJ2E31rAeiYEHucG1cFnX4A9BTN27osmYkfBF7MjpgSpsEpvqcEtdc9A2Mh4nAXQnwQKTJanUkVxSeH",
  "key17": "jZPJJpnT2omUmDMohy1sUX5J2nyCRxGk4Zinyo8y5thxq138ggW5yBt8oAZKqn3TofHjTXbc778vxnXSC4vtjw1",
  "key18": "51Egutn6jM7aTKBJXLAQYpxUHGwUEzMoJR3vU3Zw4ZVeR9QDrWgpecr78ESiNyxnP16DjmyNEnqWudUDFueug8Dw",
  "key19": "NpcxmgoKjnVYDV5U5q8C3GTUYN4eFCgUzw8qveexKvpeXavCVUxdSjYuTvTB7Pkng1ScVKCnRDmw93jkrE2CiLS",
  "key20": "3cRi2WP7hPC4JRCFxYh3zqRJp6QmLtD1UV7tHZcxG4EdpTtEMKrB3XbBwx2fyQKWQxt37C19weryQCYQHKAuNJbW",
  "key21": "5vM9x28KEt2zeX8EprA1oqkhtm8GbwQcM1eADQL5NfxNRmonx7FMP4FSDijKKSQP6jFoGLPCcsXnYgtsh5jBLh5e",
  "key22": "3nxTjt29roQEAnb1qFKzavwVw4vXb45vTQBNyAymVTQC6cxbunLGYVobYWxxzTLEGedd6mMPnd2NG4aJf1oRiz2Q",
  "key23": "R5L1BghuqmZjBkvjH3f4KpuxANo2D1eoq79V38pVQaB9FKXExwAH16vabUSAPTEX7pWBLWqKd8ji7XcYmhkWDaa",
  "key24": "tGUPJbUQKYk9JqavjNB7HHdvhmtyi8h8VNgrNR2DUqGVakUBnQnRCoM1qnAL11gE1GxwYyqnEdNAFDHux4pV1yz",
  "key25": "3U2GRoFj1BW3vYnBVgqM1gSRiP4DNZT4ER6s2pBt4NRrqZ5CDQjPanMW18ZJvueQ16Deay6g2rMzEAkDF2y5Xtgu",
  "key26": "3TnQu1Y1YD7YKGivdFjXiRJX5DrtBvLLbRMJ7yJG9BG81kM3qnUst1RCL5VabNqNcPuuvccS6DxtRSMiVquJhEMx",
  "key27": "5tFsVrTvqBcgF49t7q1d3kdhrxkfsAUjsfEHE7g94KQjo6pXtkCausZJdKuBWdh1VpHdGA2NSMeJHofsrt84w6C6",
  "key28": "jrdSkLJrv6rE9w85ua1FtCBJ56ySEBBvHDY3BZ6RLLYRKVVHxUW1uuqarvgCcPWFWqgqxoDuYBCvXEF2nqbAJzE",
  "key29": "2WSUp48WoYzxVEAaq2xf5APAKXpr8hQW5hER1H2yzsjBtdD32HBUeA7Jg1aizaPfxyCoDquhG6DAaqmKFPGvvg6v",
  "key30": "4ot8ymm7qvqBEemSTVBkeRVMnrHBiNqrYRdHsm67Z4QeeodLxnxDdUYFpd6EQzkotXeE2Yo8KgLqbt5ERJryzMaD",
  "key31": "2k9btzkf19EvUsZCwzdopBm57D61Eq1X5jX9tAHg4AZMEUsmqJT4gB2BgZigoND8b8Xn8kWXCc12xtrKQp7X1fPV",
  "key32": "2BS9CGBUEZabFwXggA6DyewN1x8vLNTonEsNDB98d9yiThfvpf7hq7vB3pxc3D4UHFNZCCw7mz2pdt3hWaqgapjj",
  "key33": "5rLTN4GP96KTrnMRF7gCVaAC7b14zHhL1iKwsj5WaXe8pcXZonUHpyuoq66GEv9U964kdB8DNhz5rA8hMjMmFAbo",
  "key34": "Q8QpX4wbBtwNQBMZXnhwXSueLZ2YghPJg1BECFxpwfFuz5sHppYudjxonmFgAcsxBYrsgkYgNh5eCkR4zhihh3r"
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
