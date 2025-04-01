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
    "8ANo2hTWT3ZZ8jd6m5o5HWcJBPJeX6mXgpDMZrA8aY2d8C2HrQA3fbQVdowMsicYJrhZrr1KmdNkr19xXC2R2v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4KyxHzbVdMRrYyHcFuxBCP7uJ75Aag8Vae5Rnv7CkaMvHF9BzVjW6ZQ5wfQhtzznCaZvVHgzXorUBM5r3c63TE",
  "key1": "KuLnHxDuMgxigcfE7UWsbKYHdBoa2pTn6hEruymsvWuMri3PMnRXGabQ2aPQcPXYtK9R5KvkjgAeJYJq2aPY19v",
  "key2": "2aYnPkEtxCMgi4FLVo5BQydVWecAtJjQMx347DoV6Wi7T9sLrVf56mrnATULaqzEbKPikB97N7T1sE4swcmoXsMe",
  "key3": "CrzfL7xbRD9LLm5HYwocyHdF9zbFdcKc2gQ2jqJx7H6HSwCfdVcYnmz34Wp7PgeGTZg6rQ6F9x45koqbTRnMuWo",
  "key4": "VRXY4gBrQgopeMsHq24zoTQg5tUtko2cExxeb46pVvprbe81XLHmsCrTZgR2uChc6pGVJFS7EsczB4wpkVVvuMC",
  "key5": "3i47AAMJsbRAsAXBsoDCrBRjCqocv9fuAKye2amkRcU4JEgppmnE3pe7syj8TJTvdp1Vxy5AK6Es6ahyj3NtnNn7",
  "key6": "5XDsYrX91XdZE1CV3CvvfbKxoEveyjfQxKXhnmMuMU8zPz7QbKrLkyF7yraaJnwxjrJMY9sRTK95HZJTSADc8gmU",
  "key7": "mDqQRxVrZd7edGEKQTmpmwsHLPidtJ9XaXmHPkmhwZ9ikR6mXKvaFqNWNkF6M5KDTeRsR1WDNgioCbPhn5sCkGq",
  "key8": "m6YWzuhkQE6P4C3kVu8NWj14o1f6nmyqxwKZTYK7QtW417jiANk3rLWSGbpVrwKT3vzACZQGW99KXdpRw8s7UgR",
  "key9": "2drqrTjRU3fCNQ36DNSpMjqpbtomUpXhACGLFh1r9dWtEXcy8wWJHRXaDY8eTxzy1F7AbQtBgb8e4zgStZ7kWjXa",
  "key10": "QBFq5HZjRZEWMkAQ9cm5BGsZLVKK6j9dQpbcQtpaBcXuSEaA13zzpdHxLLVYbMAsQgCgXtvDwWGuwHuM47gtbcf",
  "key11": "DrH5J1G1H8yFV4NiPnqbk9Upu9XKqjcNA5qHEV5PzWdPQDNUhzCsMHXZH9K8EqES3xyRypy7sAv3tajRN69YnNc",
  "key12": "3Mv46CCYWFeGc1P7N2sAD2L3KTpK8NX9n62gfgyDmFdW9eX7ptpaFhsqs9P2u9QZoPxHEGMn1d6kw1F76pqcz3AD",
  "key13": "2GrPt9CYtYRxan4bqegRDawQ5PN3jKSGZtaxA35vR2GH7PMZNfuCTwA6D3JfnC9xiXRFkfxk6ye6DKqqe8CM4RSc",
  "key14": "nvm4edCj4SutsNaJj93AcSHLA5gSqMaoXCVz3S4kuUZY7cCWYeRTesgvyLRN3Pkbudf1zzMfpPjUfFJjzF3Y8eJ",
  "key15": "49Ux5Lta8kdcwKTB3FRB1cixGjd6CKkMPuCGRgFsWC8QxNdRpaxmdGqfyeiwum8WnmwBw2KFmuyYfVGgeWvVET9H",
  "key16": "4W5tBMTVHyZdmB2mqMReAGUa6FLwfjbTBSCQpunPegtzSn5BoPZHmwGrCywvGT58B4XDbU3tAkkHuwYek7dVzKpp",
  "key17": "5ntk8iPb9K9h5gkQDpfxETVZUxMVHYhuixerkGauvUJ2iJHEeHRkEsCaJrTKqd2K79U2fL2YVAYDLvXJ7YXN2EEv",
  "key18": "26QnSFC7CcS4WVdHzxNG7hEA97ocydqTcTHzYKptJ2Er6wTDVKen1i4nuUpc5L6CCas5x4i5tdgzpjNP47582Qij",
  "key19": "2NARudFFQnhVrKNF1oLFQprABFQAnTdaQLENjSG9aWia2JW4bmNSyJ4pcw8mPLW6zE8c7GTaUnTmTSWhPCLwaKxm",
  "key20": "f25ZNTbwfiodeixmewPtyqAZU4URqTjkC437KpXxRmjsscmiML6YK2he9Kq5FqA8HYefLsQDkGp9Jy5EnExQvv1",
  "key21": "15XA6nAfcWU2cdxHCgqDyWYgN36Mwc14WHotze8EQuVeqjGSw1LAdewsvTKDhp27dNiLE4MnHG9M3LB5wtESzjr",
  "key22": "TEwguxh4pxxM1wsH7xG3GVgNJ73sDUUVAJECz8oD4WsCWdt4aJ2hp2YNkEsxqHfemkq8X9ozihqWeyGXK2r2E45",
  "key23": "cW8DrTaA1UtAPUBenw6XRJh5zEszVoNNs2MQWY5156uXJvRfW4t2izMAChjakWGSL8LvWRViG1cxb6jV6aUxbDr",
  "key24": "56yus5LdrfHzjHku6QHGYBUCFtQATfrU4hkpy3accEHgaoUMRV6kTW5sk2yAXDjLUauan5JvkWtixPjSWvzf4KbC",
  "key25": "PXzoEbsCmT6MuxNGUBozeLsY1oc3LUgGcRyyGDXhfHaWczyiKFs8xP54tqvN4RvbL5PA8BpRYcwhhuEUU2fk4Mk",
  "key26": "3Sj8GZZ3EusPAcakmDepaqM6N42qTTjPa5rn12MWHYqBQCtDtPWaJGC7bxwXsnviETauahspQtKsYnXeHzXHY6ZM",
  "key27": "iFfovf3s9YufCrSbR5sw2HpAwznHQcro8v1AqgYjNALJnX1hzUXNSiVnXWviGiscgnFYW53Bz8S5n1eSiKCAGEh",
  "key28": "2Lib3CQxyc2QArNPQTv9GnrT9xtDAjXRBDxjMAbtTAB9tPggYF7p6WPsQdnZQB5joTMZbW3E6tch4KLcygA9aUhA",
  "key29": "Bgr1vsZTB8neM3jPDREUGp3r3nXHDvbf1Q4GbdFTUiDzv4RxwzFkDxQJHV5oN5XLtXk8RYryKDNGeq7i9V9Foos",
  "key30": "DwtZA4iQu9daphjxzPwSgcjxc6F7Xdqvv1eWwnSguMzGDfxi7UdpotVexq6PKmp5QifzBPP2XJ2K1zHKEkgi9ge",
  "key31": "5jjUK75EcRg3DQSiSVd2rMNbo4TgV69apx7xDTCBqufSWjcQiv1NjqBGn92eB5E37jkAbV3z5HCmKxCEo4xECEco",
  "key32": "4kQf7GXWyxHfqTgypnYbznotzrDrVuDemWHWJDbd64Z5pc2wn4fLRjafFHAuUisvHZYo2Txn3XZBeeM4gvBGUwQx",
  "key33": "44nyzywdPHbTobnLJ9hthEaeWAp7X5LKQ4i3R8ZVp1Dg5nM84q84HUMf7c2tVj8dNBc2t2KWoEfmTQ3HRTb6cHk",
  "key34": "3AszmCmGsdH7CxgK6DyewPapVbg8o3M4XwNKHMZ7Py4BqymM5wzdfpTBxA4HfKiFA7br1KM9UNNiEHzrnSDhUetT",
  "key35": "5WvfSf1RqH41pTB97pv9ggpi388cNCdJUdVtuXVBo8Y5akUN1NxQzHitYWmuGYcYYfrX9U3Rt5M7euZWbzJVxrej",
  "key36": "3Vrf2Vno3TwthDtB4ycff5kfVtnLrpVe6dTpBV7V5zsNDPHU4yaLKf91oELTkLbXbTvTCA2P3KJaP72HqGFhLcvx",
  "key37": "66oDx3wqJnXSx1f5GiHAYyvuozsJHARdug6CqhAMzj3XrHyThFN5bktay5T99GDCzzAXe53r3mZdduZiQ3WwfZAG",
  "key38": "4MpzrLYDryXy2BNwjzBi132m9cY8n5jr8u4HBwZjT3nAeKfC9nJxDTRwkSYRsTAXr2FEfeDwtKxsdhcewfA2Johk",
  "key39": "5pVPJ2RRuYwCCvBgPmLgfdSMCCqsCKgPehm6azoVg4EdY9qQVvnkJXzdn9849cfFCwV68QzwiyoxNzzontBzndyB",
  "key40": "4sQqW73oCWdjY5qiGyA4jDtXHJsqJS76cUUVQFHUK5LsQLYbXjBx6uBihiqcbtJns8cHUzQJPHiWrEaQKpa3RvNy",
  "key41": "2HM15ydehNf4ThdSceQfSU33Ff4enZECePE5pW9reS2ZQF5cSYyTdS4BJiwJkQfUu8WhAf7rPWYWyLbasDCKKaRj",
  "key42": "4gLH27VDjsU3k9qhhDmPqo7kNtsMoWgU8AfC7Js2k9KhEcQWY9Fq1CZiE7KousedPAZshK4dW2ucVQLC5TfT1KyS",
  "key43": "3q3h2b16GaPYyCKSHf4PdrPnWz24MrziUhwrYwnQpwFz8D4rtbJrU9DipbzEAFw4ifpWGoShCxgNBNufdL8dhnbu",
  "key44": "TctjgcSjxAgREoAdz5BPSY9StLE9WG1rpAncn8wL71gunfiFeXPcHGtmy9fFA1X9oDTZtLAC3GqATi1SHYxyfqy",
  "key45": "3tG9m6kD2qZxNDVeN78Sx4QaJ1QccshQ9mpvzLa7oGJyCLkGbHCTzGASDyNW1kePcLRLG9mcmPEK2YesqhzWR9Z1",
  "key46": "61Ng1BVKUgpdhJx7xPiUhVTrAVMmzWCQcrjvvvVgYQogcGKAPH97h9upnedscSnrqaTjaRa9MLgbUcpQZDe72gup",
  "key47": "2mBhtzjyn8xEs6oXAW7dAXR8WcYo3v9FSdU5HpB8FQBDwYQjq1nwMXctUV2PJFXLRoWTWQg4Sb1yvYPJTT3R5D4t",
  "key48": "3m5VYb33DYJy5Eja94nWpc8Nds6fgRpeKxqVdUcHgyBLzFKmeB1RztJ8AsKUGwwBHKKuUQCTkdrJGqBbgWncdxph"
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
