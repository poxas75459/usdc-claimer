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
    "2AL8hMxHTCpWKCrTBNkCnAz4s8J8CbXzArV2RmiVSLdxE6f7KBVRazzzKQDNTgEMavyxPNjHtwbZt6b1qKNAD9aC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MbaHwHBwmrmMiE2Xi62DrKSEGR6UrEK5XnJbePfoPyYKc8v8ckfyZrtXogLyEGx3JRYyVPcmEpNGrCq2Hz3rDpP",
  "key1": "2jBMB9nXCwNbMZrLwCsz4X4JKjzmHKTCiEj91HFeypbjnA9tCoFrPQaYMTu4Qpxvod8Yx56WoAtHdB9kkodPWd4b",
  "key2": "5Yi5toexcHMbruagDWswix2a7ind31VtPguC8J9Q1GhvNx7SsMEFRZ9G9AvcE1MCtH4EcnKXnsjvVjqqxwZMdB1X",
  "key3": "1cnVwuV5sA62GQDXaYeL28gPa3H9HffHMDNbGof1dbFjSugSQcD39EEd4oLSpM5pDq5EiNqHK1xi6RJv8n7cDH9",
  "key4": "5sbjU8Kcw9F8udinAv9zJedz9jjwsA926rryKM2FdRyo1wqBd75iRdSax4QVmXQrQ6KiPup6bkigrsDAd9qhW84w",
  "key5": "4CqPwmraFcXSrh92KW1U8ey39VYFcQJt3Pxi9WGVZcwd7mcyNYP8q6d7ZujE7tGauTYpidgjnaRdtzQ6mCBwg9RA",
  "key6": "5Pzrjjvzw1rixoSVSfhnGxz9oi6qHEKfJCSzCX7PgtkdhMER4eEqQCz3e6Dsnv19kUoFnGBBpgHNMBNQS3mTH3Av",
  "key7": "2iJS5jb16uFsymsdmZkuLyNL2BTjdskNtJfFmUmseMxLS6JvDyZd4gFs4US45wQ7xEGPrMjiEtqx7e1nmtSs3mB6",
  "key8": "4tsMLVWkRniQRs2RXJKD16o22ZdF5TRe1Wgy4vUq8EXHnthDghCQDmcLiy6vgctmJWkQJ6qTqg5gojssZWdV9K1z",
  "key9": "VE8RWSzYQDRByRxPC1brsEgurLn55RGeCMZwMgCiAQLq8rZ4Hf68GaomiUGB7CwCAsS4TYxjpSJt1EZ4eptCoEg",
  "key10": "3VZ812MowCUdSvW1E83ZbcxH4h4btmLprnTABQCgevGUvr73yqXRxENsUWSLwxGaxP6A1jTuXuiGBLvu1LCXUJoh",
  "key11": "3t82P41puQr83GJa3HG54PGQCJE87H6QHYp5TYTySsGBCtabGTkbGgTkENxvqBZ5mw2WqfhyRA9p2nTdjjWXiTPR",
  "key12": "3iwReEgqS6iipbRb6voP8QhnVC4tP1p54HqiA6fr827E5Ss2WnJ8sDZDQGdt88948dLEhYfqEKQ5qj1smbWT2qqb",
  "key13": "4tozGXh7HycRdJyv3sqhMFCEzKgVGKZ5tHDJD7JNyr9Ac3pacNC8BdpwpWnQeJ5sm9hUjqeA1EoSg3R8fUAuS5eC",
  "key14": "7e9v2QFXP5j2rg9s9NnpgF7s3bmMbp35Wc1XotGxmLpgF8zoitFNaCeMrdoAXmxPrpB9RFzLcPJUBXgZsfTSQX1",
  "key15": "5uiqttjXFPWFH2WJ4fxEaw4q4gC3iH6YydhhdtFBWZZcPaTQLLKwzo6DAASFCq6MGnLubN7JjmpNBJhhJWm38F2G",
  "key16": "2THbo7tbSiR1jugyrkPKABHQUcVb5Q8zopiFu7XfZrxJBoHtVbjZDzmUQcNEeqjGeNQ5Ds3enoWt2ADrtrWz6JHQ",
  "key17": "4fZdkkiZqPXGWo5HrkRpfUnooqnnekuEMAMqn7w3arvd5NBSFs7EnqwM2B3VgkDMzj5pEZmvEUfTppnnHTwNbewj",
  "key18": "2WbdYQbu7v3tE1jqkKyWsRBo5VCcBedpJXvuZ2nbJu9bBTDwChkGCjW8sE27bQ4J9xLcYWpMQPgxeeacaqaiMyPE",
  "key19": "2RBzcoEByK6sBrh4baszRuw7VHHEWJFPvAYg6xKYtatc6ANQzrBmYMVi3RtqQ3PVoyMYchfYLZZpcbDmQeiF8rgh",
  "key20": "3CaX75KbghL3DMaKTMkasdPZj6DAKTGELdDcZvKKH9FndNaJoXdydmBFGZHxLLKR57G7Pv4e1E91mBnCesm9PzvY",
  "key21": "bUi6JgSdue9ACdk8ZJMiZxfkVnJfySy2biKQt8yVHPuJm8fNkNsksPaFxc6M9hpotSEZGeG6J18UN5rKswWwB5K",
  "key22": "2bogSXoysxMNR9Ys3uR5XfjeDDhqyov1WpWBZhMig3d1ioE4Xk1q16nRwiLk6LuNvSakZRh3WpyNAPf2u4BMffrY",
  "key23": "HuaLGqioL2cGh3Cyjf5sbwWAk6Ka8zkw1wES6c5NyDQJtaTnrtt4HFXegnNRn8yh1jAM9cgGqYcd9JmCFSUYio6",
  "key24": "4PkXDAPHx4K8gEHQBmGNtz3ocZMjNH53vyaR4ndEZuPZ8nnsnworMQNX4NPBTtRzVWYwZxYxezsqQCLhKrX1ywxz",
  "key25": "5HNdXCdq8sbv92NMLSf1Wf7KByfzpyNYN4Xqprb38LqzMLpg1hoBNpAGTCvsxY53KJCwbFz27yJn5sdwjJjoTxax",
  "key26": "44r9H3UrSkbSHiUXTFUQ8un171cWT4HHUmCoD1hbnGmDWEfP1XH5bn34LhEu8zbSjN4NARRidhq9s4RazY56Aw1s",
  "key27": "3ZE2Js3PdhPewnHC3TKidbRWMNtyTDPFZkat5g7QsGGTsd4zR6JwCThLL2zTMqFbLZEAJDsrruG1VbLFPqP5QTbg",
  "key28": "22raUraSnTELG39xRuWZGr8S5M7rcPSQzMnLLX9G7gHAYR3oHvivo74izBPsG4ioLkPQW2Dy8Q37NqFy94yAvUKd",
  "key29": "5gV4RdQaghWmbE1EcpQUmmMogo2nGTNMzC2Uwc5yJnhhuRVwwhoLuQ5qV1mc9YXN8e8jaWgm4YFa3DbB2ka8bQYx",
  "key30": "2Zz2cPnr9X9xTwx5Jsuih3F31oZ9ymBnBS7aCFdC1NT39kz8c7NkByMGSrPva72TThpH4dijioxdrhdUMf2zQPA3",
  "key31": "2riCjf4LVyGTgHZEsoqKuiGwRvZRM4jZBoM92PTdciPQLKehA6bXmoFmSkbvsVsSvVEpx7BBz7gmbbJECmHuifh1",
  "key32": "fhtmFdBuyqhPQPtpyhWC2jRFRjCSw4XV3tqUbFj8K5Q6PDmRdZcD5tPoSRxyS9URMiEDpvVZH2dhFDccEMmn65S",
  "key33": "5bPDAF6efwj9i2LFaNqDu8aq3sd5rXTNeasu5LyK3tVbTtkA57YFxbJk1eL1VhooKozCronoWZfUkqWVcbueb18Q",
  "key34": "47CYGrdJzPCToWcLvSkZ1rSckbFZ6yUGgEZYpxC9zhM4gvqaCPRvW9qw9t83kgzoeNYmYDV3fFFBtF9i3vsUWgUZ",
  "key35": "48p7ntkLwAJrLwQJHyZTxb2M5FwhkGYj7aoV2WeB8scHtrz9ENu2BaByen3rSBvXduUtNL7ATckHAkycv6mWncEM",
  "key36": "3VZa5uP9EDzP5Y9Sx7A56EU1DA7LiUAxfwacA4LPLoBcTfKdhu4oHwUdKjSfMgoPvTyL5oBoh39XQoEjhkkeH1Ex",
  "key37": "3PvLCMfoTWPLA22uqPimFsDVLqZXkzEEnVdPcLBDZYvyKyRZT5EpSzFoyz7yLHPxEQLMvue3aFuMC8cr3cD6jcKb",
  "key38": "i6rxTbV2dV6qyojrTt7V2jWTbAn2Mri1otePf6CSoY6LpCfmaYTesK214UAMHXCCjRzZ8fKb7hhNccehcM61D4S",
  "key39": "5B4jh14rxCN7xd6HAJihHFPAw8BJUcs2Y1r6i8K7ScDU9ixXf1m2yjQL8Rw2tA3bACuTfhnvwc5sHiBnpgL59BSF",
  "key40": "3Zdh9mYM5UeBXnBGHxHB88SV26bt98iBbeYTt78HMx3SjXmSztAthkd6RmfWjTjcTqfFacrj5X5rCFx8HF88TySx",
  "key41": "2PfgJeKZW3hrUML9qCg5TpdDBZMLdyLjApwBsuNnQRQ56UmXBLv4XJrLvgNmRctkJE2hKjGPXGD4QfLLvKiZw4ej",
  "key42": "bQ7VK7KLKnyXpCKa2XYeTRtMfkMnkNAy8F4DZjKZayjuMbFLQLQdhEKXfuYtb7iDaX4dUsieebqD9iUjG2527i9",
  "key43": "3Ummk1yw22F8G9UEyVxCZ3uG46PxLC5iip8iGg5DVka1JTX41AZihwp4Bc5CBz4iGnxoVTemfvRRCedBFVxzfER9",
  "key44": "2prgdYVdL2RQF4z3EJpPkTTNuP9bYSikcM5CMvqZd9S9CoadUVTzCVeiSohKWbbdsBqYs9PyvMC8XTBUMUJELxE1",
  "key45": "hWvewzEKmENieb1QHVCNbUxPgg22wfab7kWXVwrrjkntVu8X8PqF7v4gZm1AdZ8hW56G3ze1qvDXfaFibARU3eR",
  "key46": "4PPZke1Z1TytBbUKfXY1ymB1CDFVoGc5UtgWkFuH91sW6S9BDM34APGbAtZC7PxskBngA8oNk5sY7BUogz1dkgNE",
  "key47": "3oHCwfyWMTNCXB4QfW2fTPGnGQNfQSpXMLxE1PaSFttEcuonSJGCQPjet1oA67amDTAqeLs2PxNNbMKvSgoHJ9rx"
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
