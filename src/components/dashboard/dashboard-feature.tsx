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
    "5auWqUHVgdwEtqBZSmaMG3DFJKKb2dGRmTLoidyANaLSDADBNndnMiE3xGafy57nX5CzjJyRSemsVrLCfH7YZenP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38A291CAnYxCPxzuqzLXCeuuTPeTe25R2nHsjMXsSMdKbq2xXcs6iApd1btWhSsYRCU9g3s1kYNKuNHDAr8K2XXU",
  "key1": "5hsVhyBpGiA4E7Ki7BsEaCUFJdPM7jKPwG2ccTuAczELtd8ppPxhFc6yifou7DnEQtamJCskvWM8eNZv3dLyC6TR",
  "key2": "5in26CivsGjDa8GtYsUdTe5tc9S1ndnzsF8Jn1cSawD22inchBGYns13c8qYFzpJUWD1NYccm5mPsZMnhc2rKAcb",
  "key3": "2bnyt4oj5KGepA8emA3cRbP3MkdikddwJEj7gXAKCkKip8nUJPPQeJRTSH9KpJ46UgB9fFT98123gvFhudhFtRe7",
  "key4": "2d9EwW7mRuqzXChryb93iiHjEoSmARcb8P4tYQDAcCneSr7h7qTg7Wq39Sen2rGr8sFoGepi2XEqAThaR9YjSY5f",
  "key5": "uy9krTCaxx7RkwyV85gALp2iHY42832AkgYr5RAH2Av6MX4ZQ9coYeWrT5G5FZFW9mrG8FfnpsXDhZASjxU8gpe",
  "key6": "31vR1xfgqQE1aw3zn6hmda5Z9NP4Ug7sGSHgeC844HdvnhS7AxhQodegTwhZUzMW9K7hYfFhKKP8iuYGbrfXikFC",
  "key7": "38VFNc9JfjFcQpQ6oAUdDpLrAKM1VbB91fjPTratGhyDcXWjYBHwRpzNyZsTzb98TV34C9GYF3XymA83hqbB1a7A",
  "key8": "4Rjj6VgFJe32CNPpB5VSxU3gbFkTxiEQcWPYo8f9ixRkvYdWJDw475tAVUNrwKPPT1fN7st1EZpPXxn2kvqCEVmm",
  "key9": "3jrFSGPopbP2WgfkV5S9wuZFEZU2wRAJhREChrBk2B5fHdjYeRVgPHoR8T4ZF8v65B2QCtPr7SLCDsKfJKQ5JMjr",
  "key10": "4dXKb6pPTGifDJC22Excr9juzrNbkPv2qWiMJc3xEWQoaZAXYkXvqwzzFpzvB6WdjfJ8V1sfQJCHTzq2QYbdYZwQ",
  "key11": "5eAfpynrNcEKT9v6SHi5yYmFAn59pJVbAJajVQPot9bY8AsGUbqjm4MzFD4LwWxVoT4AMWvSLZ3GcqahArgaCiFu",
  "key12": "2pYzztuwNSVk39c5aF3hx4NwvMcbtnzei7rECmd2FS3NQpFcRY8wCPRTMscVTh87Kys44eGCveyABEwvr1SCXAgQ",
  "key13": "f5oYidMUKbRY4wggefNYNAuoXn7yMxcGtwCuZSw8jymzzCFshCDfoCSDS7xfCRqthgULSnVPotRy2BmGLRiZ8cK",
  "key14": "2YRfbAqJiW7GCHvWVLfTku9HVw45FfuPYweuaULtAEgr3GTr8ttFfNGTMwLvAwB1Ui6sD1TT1ts9EMkn3u1KGSuu",
  "key15": "7tQDZbFjGB7VMYkYx1UxdRgPgHRbAVmFALzT67xBQ8zMnZdwQB7PJBPwhdsS2CeSR6P9WMKSchJRe8Y1PmLywwu",
  "key16": "ZbPCXnxWvd9RSKq4UXUgG76yBRMw3SD3678Ut3bo8ZoV2k7JN4yjrx74eykja93PBoHZE43qqZTqKszDvWucFAE",
  "key17": "4rkBMuJEHz8UknJjb5ZDNDyJiFMyRgRj5gejEBbe5PeMVxGnxZo9gFgKL5wWA4PtedFZKF2SpcLgtSv3daeu6Mdk",
  "key18": "35CSuKbRUT7HcSDzaWrsfJJgNhBfGCvJePcwwz1Bvj3oeF5G1xhENaxSrw7aQGJUo18fXkChmyKFmu4wgYZJJvRn",
  "key19": "VRiGfkXQXjhKfBTNZ9vjDXZg8wbEby7DJxeeeMiUt2y2PFKfgSYQjoSa71sH9fqQAreJhfy6a4832gqDAzPi6CS",
  "key20": "5msjo6sVzmLemRwua8LoXfSPgYbk1KKe51767mptQxhHBfk1z1EaN7dqxEmPjBq7FjKpi5nUQKXQDowianDWjopN",
  "key21": "3rqURdCzxqQtgqS7NXKZs88nZ5xfys4f7zRj6ohLKKLRb18rystYPSVjqytpxstLek11iXJbKhtxeSCJwoxC7n1j",
  "key22": "3e9XoPwA1FLP8QL1b8yf517eS4fU1GRP3eiB3fPfEtAYu9m8vbFYWYfZHMPkoiFmCkXn9foNrjsL9eLMrFkbBFtK",
  "key23": "3DrAMk867dGoDCaDrrR3LAtpN9keKNnfVZT3BD5jNg7dTsPkTB7P5eD47gDXk8iqRWFeE9RCGV1Dxht7SYJYMsYz",
  "key24": "jAS94xsNEFM2SqzAisFXgE5DGVPZjFDVomaMNUUfozEZtuPespWzHwW477WTXuHbj9AWzCRM4t8erjTPRRuvfcd",
  "key25": "2VMHxZHFzqV3sbBJY9vqFrjq5BuQmtL5oBkms9U3nYeCBS12rN83j4Z2SH1GCgxk2T6c4qre5J5VwvSXrd4xh7kc",
  "key26": "5Dcjwqa5kHz6b4jzRWFSn9cUWTV3gdcoNrxXHR6V21ippSYDu8LFKkhK17sSXmoNQAG7zwM2AeEBH5uwp5DD694Q",
  "key27": "3zAoQ3JRM1V6KHHq5rYsNQzbDuDCwC9zawcfbTRv9JbC5cUCeBJQ3vTtcum4YNgX8ywQA8qmf5V6HAbEVw5QF3hd",
  "key28": "qMet1QRTyXBNdBfkYCGTi3JmXqnYou2DsMXmxNQ7KwZNhDS9Fut5GT3ynSheBcJjp1GAKx8eZwwXgS7F75WsbZo",
  "key29": "5PED35NxXB9j6THjLQtiudMRYv6fayBuBDDLTikED1csuWsW6hVpHUberfh63CEeqXWLdst8jaTdh99e5RfKfwWd",
  "key30": "5Y3bVD3W69CcecJHXzKNdfc7VLuCzhA5tdSYX2n4md6FMEUGDb4XhQGuAGQyge7zR4Np49y6TKSkwjMWBwsP3pTV",
  "key31": "3bb6fVWjy2B6YRWNp2cubSPZLnyMPKN6bABaTJGQpFJSLrtX5tgVDgypx7ZUbhN4Jbp2bAj4YCFk2fJ3UehFJ5dP",
  "key32": "e6hAUsrnLPBzfg7unN1h4VNcTVb6jPsxsL2JvaphpjCx9HXLNB6CzZ8zT558fXDJzEQEFaiqFqBuzNRjQNvMkVL",
  "key33": "CTCCUuZhBd7v5vyBmg7U9ZoP8WuChE8hsu7XnmHDzoXZJ8AGgqRR1XBSQ6SXrCMqyzv8aGazGBA9gLbyH4krrW4",
  "key34": "58VGatpJ5JnC5YBFXQXDYMRXwAyP2p82v1zDjoNkpjyPKP3kbS7oUsA9akm2HHpZNnGsvNxabock7MWNMKcGgU7v",
  "key35": "3wSXe28zNMroVJZrvT1QTfHprkGyMEAyLVuerH53LV4otmSuztWLKYyyPNuR5Lpi7iYZFxVBtE57uQqZHqMyPbvi"
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
