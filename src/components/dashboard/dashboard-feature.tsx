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
    "4XyR6eRwrRS3e4Mq4vnrq4vsscNawZjfvR2oZVtdH2zWqLYQJ2QfuUGwTnakEWanxjfC9Zx1AgUiy5XDNqCukfxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4paP65UxmJy9DAFcz2SDhZVSEwJe2d1PZtmUeicmMfhP7ozyzt8111agN7cfiDCTn2bCx5S9cysbnTn7ta1wKvFn",
  "key1": "2nKhJ8gbh6DSwB1S9Hh27HaeSaoXvETHyYzaraZPqjmAvBgVZF1jNiVNUV1hNmFKWQnituCocCvk7cfLCYKFEYFi",
  "key2": "4KBHBeS6atPjZgZ9srAwicbMSu6CZAxPxpsgSL5Z3sU8M4aWC2S7SQeSVvPBxjAPHHjhES8JqZ6sZEm4eqHjskPt",
  "key3": "UCvhjAvoSWmHbciUem5yCgWNXARpc5vaNd2oqiGBw2uFKSgKohBxgvh16AhY4SLrMeHbuWNDTAySivgGoZ97Rg4",
  "key4": "3Hg11qybKimH3AZEifeEK4RZMSGTp2n7BXcvKFhwKKCo1P9q5mVbXwPFuG5rCZdQwqKERgsFQaPw8R1nQQZMTDCF",
  "key5": "44gpJ58FV4Qk2VAz3UyCRGFeawHAUwHEu5Q8L1NDfrJie4FD7FD9S7ubkzE2iwqFiQVzZb9QhDVw7bmGoDpH9aTA",
  "key6": "5CDEpSPShtkAkHG8fL81AWHWJKFc9NP6Qw4qX99zeVfQQeXpMNbxNbvjrN87vaM5Y3eEKY6uPzSheqAbckDJX3TJ",
  "key7": "49j6aoUuy7E1TcqqXGb5y75puCbdsVwHQKPo9og38p9MfDEvZaYPU9tL7rb8fkX67X2yWamLT9688grj3RVR8D46",
  "key8": "2wizvSoFU4zmj6v2fL6VSvgrN7vywQm7JchEpZ39T6kArAek74dch4hTS4M7dUGJJwLh4E9JT5uEzxfpi1YEqofA",
  "key9": "2aPJQzYB3pVjmhutT6WpWEtyW5cBbgy2JBnfYWdd575MfDxUo1pL7vFyExHvY4N7WLfByLvyefDEXnw9wYmQEsn8",
  "key10": "45c3kxq8QvBNhEPkt9m9dJEEvAdMej1rhN2XjZravv8CsyZRM1oHSdYcqe7ayWNvXBiShMNRdtrwyNYHbkXiQfMp",
  "key11": "23sj92ERtJxsGAJtcR8dY18TPhWaKD3izEqpujZsShNCKHH16bGjQ9UVd8mugj3cV6GJz4UFMeKQdfVmhBFwXAiP",
  "key12": "37JatEt7Q35CaWkt4Xk2RdZ7eg25THPPNJYwZx7npABhBBtNzBBq2EGpYHerBGs3kYBKJpS3ckmGJt8ukTsrDiP7",
  "key13": "4jQrohe798nwr3v6h3fbgrr3pHrfQdcdcod4LpmDPR9Ymz853J1zVruujwWugPasvhBSPjwCVbiyiFvXH9Pt5yzC",
  "key14": "2PzhiN2WCMyNu6QPP2HM9bvtQMYrM72UppwwWkYZ3W4UsrAGt45ykgakrHmhAfYY73undj296vsAZ1PafFQmJ2Yk",
  "key15": "4mgp9D8v6KDpdqSBCeoZc9JViVtJQhL2ty6Cmh427f57F8vAF2pB7iE6sfewjyiN3BzHonSdbDbkZenCG6R1aySJ",
  "key16": "2DqQdV7ZbDyhGJfPy4SjsczHHzceD2qaubuxnCyeZpG9nYxRtjjR96LBAJJzXDKMxy3fgHLhvKTt8FxJGEg5UbiT",
  "key17": "7ZNUGwP9q9zPmPJwoJukhhQtvkvfuQRZ2X2Qfq4wcoxNr9XC77EpR1bQnP28GAhYy3AGc2gXxTA2j3yc11tYdNw",
  "key18": "4ufy6agPnj6638ih4SwPQKw7CQNuH1mZ7PtKMt2pFFiFXBmRyVZsh1DRAM9rW5GXna81FbmngXaoyniw4sb4L5Bb",
  "key19": "5feJRK3F2dMfSroHtgSd4q29grUWeXMkBQm2hxWoX4wgubkFgXFaKqotAhVCCjBYamjrMGtC8vakqjrUyuL1Meh4",
  "key20": "bLazshr6CCnhhxaAiNSmQX7PGkR2ZPbSsFxPtAUvwY31CZifL1GKf6QfLVbTvqNBkR4WjvUJ5pE5itLebja9XGA",
  "key21": "2ntC9xchXsfonxrPtz5WRZs4BUop9mRmxWuaK5sK8KXeoTxfUJzTPCuLnizz41Ldx96NTZkGtuyrjbzBHfe8y9YQ",
  "key22": "3ncJqqjxy4gChuGgurHYypFs6B8inVeNkU5gjDPsUj2sJWmera3jCcEw9daqpmedUVU8FoWFMcmk2iWdo2t3tewD",
  "key23": "3xXrFAk3t8A9tWHNqvLyY68ryEovWGg98xwwWSi6rHd8J44Q9yLSqVQwLCRRANi41Z1s1E8xYrQRz85RvxtDGtwq",
  "key24": "5uGQji5wnrG6CxiSBJYVdRfa76SbJczYyV3dg7ZvBVEByk2KQ1t72Ne84hF1BPbQVCYUgUresqw3z2iEFNHQqFB8",
  "key25": "3MwbtMoS3qgmw6bibCyppsQwhZrEX6hgMEkQbnaWBFcd65J4UBvGBMfzbb7gBvkTMRP2epyexry4sDxraBEnaiWn",
  "key26": "4Q2sbL5eXbDqzEueCxAARG3sZkpyq3f2mdAmdTrzbnGwEEf94cdJPLNkLReTAbCogm4WvDj6hu3mcNUChv9NF8pH",
  "key27": "2ATTzgtctxAbK5DSVM6ZbXh9vFRuKShrWPZC7EKcZkHnthhRfYHwSaZScNN7H9Ava6B4rP4m5axCJZNtaCDHkKPQ",
  "key28": "5skMheJPERdfGsAfszkQq2XvK7biiDPWoPGfozW8KyUPPGZjHNSNR2ajpJy5Cd6TrPNgwwJdFckYoyE3L3UcodAK",
  "key29": "4pYzY5WMFZogYube2QSQQgvrcm9U6wHgYXNfWUw17ekqjsNNR1p7nSLq1ZMh3cUAzzATmN9gTJnjt85BGLPr8wDx",
  "key30": "63fdMwgu1aCxCKbixiGbkoEETkM2THUFCDjfVZ2vjNp4njQLyPR9mV9NWeft5PPAuobzCrdDZE5sM5VhWZpQSk6m",
  "key31": "3t8hvaGyCUoZeo6UTQH8nR7ieWtjJidm3Sc8jjTYd7xAVv7brZWhAdhmhp6dddGbVak45QQ1hPcjTykeQDBEtoYR",
  "key32": "3AyxPdPUk4hBFDQJ91ubJByjghiRjKgRkZxPJZmKY3aQqXswgpstuGXmvrW4YmjhZzufCiv2t6i5PRtiFMNFHUyE",
  "key33": "2xhYPcRdD7uz5py6ufcVMPicPF99Ci8r97uBguGjZrN14E1oCSWSeJfZwPyvsBs7tEcVPPUcC61ZD8Ao1WiACRrC",
  "key34": "5wJUVRhX13eeN2kHkhrtpfLtHdBQNR7qBEoi1BrG5MWYE6nhtGzwRUmdgNDvcz4LCywqjoGDfJX1mfnF63uKT5jv",
  "key35": "43R1PoYTn4j1JbjNBFoUKk7Zad9DBpbknQc8FH9mSYSZCBAzZ6JBK7est5w26osNHV3LJTFN1WNPDdj5VT4Bh9NH",
  "key36": "65hVL7hfZA2rYwmAjF1PqqCJi21pxkU9QzKWefDNBgapj68QPPKF54JEaaXVFV2cfLvhp9afqE8LxueiLwEtkEvQ",
  "key37": "5YiUSTm67Ucy3dAMKW5whzr3575CcremZwiuZhy7Wqg3skyfz1y51Cozv613Nv7rsTZPjNgeaR7t8Q8pXhgAV75x",
  "key38": "4siWMkrqrwHPh8UQweUpAhBeNtbFKH4NKR6mYaHdDC3r3XyivbpHqfK8G3CWBN8omKeaQEQPzZkmz2ArFqKJc7sP",
  "key39": "3bRGYhmzsDRTQiExiDnRKbxWkAP19cM3exPdqhUtt4FF8Z78UgesFVsfktEr5jNXoFRiPic2yLRtWLs4cD8qMNjH",
  "key40": "4kwYfdxb1oGyXUPg6Bz9GAk12cGbkQx2wrYXS3UN5X3QoraEZQEx6QaumUY6eRJFWhKiG4HD5xNy1kMnK2RRRfEe",
  "key41": "4U95U5PiB3Xr8XEPwhsC3fCsqVQGa7wYZNgHrJ5xRpbyxnDS5StEwDbUbfte1v5WXptqZYsxznxw6t1XUvwf89xS"
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
