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
    "3ubrZguyPMZNhKTpNUqPPXG7kefPzgusieghiQmhguRegJNko6U8PyZtFdguHHTXvK3HGvsxkmBcc6Z5BZqNJh9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qMAUnictyaHvDJtDL4Tki6pA8BVsas7qEyJ9fGd17sZwRxHVz34GSvrGrgswmnk9Y43VX65VnVPa6Lmfuwuuk5L",
  "key1": "23PSdZGmiepgwHe9qZ18eqmmbADH3cTo8k1Fk35TY5kkJDDUXhfPCodxRegTyZmBjh8BdMRfxHA4nEH9MHGZhx6a",
  "key2": "8xu8PoAymivMe5rgr6gXGJWN24wxRZysrFcsVRK8fshFKLoYQLkMB5zzHR7jSgLczYE3T99K7imwEpH9Be2wRpP",
  "key3": "3vu4vJBvRMXWUGuKwgGnxDheGZg3BHmkVtMgj1fitGQdcYmQcrvb9AeRRvoZ9xpUyZJcbLhGvhP43aRrfU9VGQpk",
  "key4": "5fFBBt1uNJpgDadiwNfZpRPUGzVCqRrCJfxwJtTrnfY1DGGbQNi2E8vW6kuTruZWJbt9cBnLFqU8fsYvsxnvtFEm",
  "key5": "5SMv6JGWmKF9vwhC4nxx4NjNNhTrAgX2TWP2wm7SBncRT7cJ6L3eFDSRzKiQmGLi9SbspckCBzgCx1HFqe8CHiDs",
  "key6": "4HteqmxchaDFM2Sf2kUSigYL4t5i8y72B8fKfpZCpJJUd1AVvKAXXEEtxfHCLbmAzjxf9rcs9poW6dTcDNJJZ4TX",
  "key7": "6m8M2VAnf9kYKvqfc3vcE6ER8kufqhK5ab6ZM7yPah5du5ntxirmyZkWTnHYuQan749ALTJy156Ne33DX7PV6DL",
  "key8": "5ghCkLK9SQTpYC5Xy6ykBek6JUsRRwUusXDoSytn7EFm4zr3uozmxViQ93Xm22GynaepKZHBysNGbobMSfy3U35y",
  "key9": "32Uf5cBiNqNvGsqj5BP2cqkN5S1TBFULG2VfSAGzaRWDGbpf52nhm5FjAhR4AhRgZ9KRNde7iAUigyVGsPEqY1gH",
  "key10": "3abnZWR9AZtRPo5bZFQy1EKDcx95Roo1ftmTzTXd8N5zmnuYeXyFGyEtFv1bF819GPV7mGbNSDDL1j446PrwebAz",
  "key11": "4RCQzFrcWeMywtb4EoKT5gEzbuU4KSrRP8N4cn1joFTgjtQLbQuzwyPtpJKGUxjwg5cxXqa7Cchv6L7VYVVTNNmk",
  "key12": "2tdqS6gyMj5YUzj7eyz21EjYHCs2pVj2SgUHJseEqs7y6cSjhVABreq5xGVGwC3JcjqiekdrtNx7k213uh9EULfb",
  "key13": "5FNvoKenoC6s2ii9Yc4XweiKaybk8jGVqiZt5hrHQRA6Hu3KoyAKQ9jWMq4KKYQdZvpwCk8ES55rGeYagDWb4dNJ",
  "key14": "LefWuZPzwLemnbBH5wqAK2dnFstR5zemdD32FdRE1rjxzYGCLn6s3X7Tz4rSM8CZXnTPqXJ58WQeDQWjfZgrCp3",
  "key15": "2WR48V5uo5oysJRtCmTzqZt6p35zmb7pBzXMQuDzWomsA7UPwEnByNQBenv6uvLE1BFjuypyDFfYv1Ubc4xWxvtV",
  "key16": "4kA5Bh5gGh72y6e1z6uWNM7MTDS8fXHLWyCYMNsFcBULjNgPbWzevUMUELKKoKFo3oToybr1UmnoJ3roLVa6kpAE",
  "key17": "5SuH1NkweEncia2u3848GRdSogAuzjv7KdZHF6gUPbXAcLRA44Z2yDoMZnRTmvaevm1A26MyLacUqRW1rg9gApUU",
  "key18": "3fTHLu34Pug4D6EcTmhnaM8dkH9ySV8ua6wREFbA1eRuJruwTgP5AAdwKxBqo45bfuax17b3WyTMndyqUDY9WgQb",
  "key19": "28zhJJFCD14dNX1xFDYhxwgqS8XDw1qccp8xatjHqTYBwVSSc7oUS9fFyex3Mk27GupdWYYNMLCKAa8uyqRT5k4o",
  "key20": "ax1ji5aMv28K7vVCGzBER6jWVgXVh5hxpmWsmTavCZhMVXQkHyYbQoueN5YsFd9ETFJWnG97cFeccpb5BHj4PAK",
  "key21": "3XWNCnC3PA9KEjGRScNUtFo7j5WikArnqCjDADY4qrJJxxUuyBLkcm12v1BxFu6dyXqU1yVRCPMGoVWxevMtf65P",
  "key22": "4pNHr3p55KMRD1JnpM81676hrvvsdR142bDTxoHi17KKbGAjwkT7JJkY65QPkHzAAqRnE8enUR98v24DMh3ArHvZ",
  "key23": "32dVxy4w7pcZuSwpxHkhmP3UFuwHwidBJEGFgpr3Thj1AssBpbVKxDQXH4Z4nmzuT1T1CWpZ2vbcGmJhMzYbDPhR",
  "key24": "3w9p6behgHVuQmVwog9AUoUJWTKhe4orGmpZXVV2E16JVq4BKbA3MA6RQ2K1DTqWy7XcGtRGadYTLWEw3CzpStkX",
  "key25": "5rCWMAUNDnPw6zruc11jVZyrVADWXqFm9BHMjnTerxCr8RbgGUD19HUFgxSPyNhjBjnfbTM2DABMVATPXHuT3mjT",
  "key26": "3q2q49VNSXPE5HvL8Tsi1BZMPgHvcVYXT1JzNWGByCcFaNA89E9Fs7pS1V23mpNvNfe1or9qaJJ3PtiFPGbSykfR",
  "key27": "2B8QM5LCun9A5ffVdNmMEZ7w7x5Ev8abzZTPVFxCnke3Sji4yTJESf8oczvTiberFjEUyjqcxNDTXx41W3PfK61h",
  "key28": "yyQgpj4KdBsfoPnWUAi2MP8cSf5ge7PMAj7hS61BzuRiq2ECLhKZ1xzQrE3TUbPNu86tCD9byWLaBCU7scZTPAT",
  "key29": "3GyLVDTKFcxz3gSG4NTNjdNTx1LGv2tvfeqeNGrREYt4xwgu6JNUM3UYcFXAaNwMVsbXbmjQU3MPzSXShQjbmtZJ",
  "key30": "3mx8SqoZt7e6DCfMgUdUnYAqY64WTxyZBW4EF4ZTmWgDcgpn75jHLBQxPxobq2JwiDznZayVkgmSM5rc28AAyJAN",
  "key31": "5rd2iuk6rrXsdbuFMdMxf7B1GegZaHsgZ5F7eo3YSUMXEDyEEQNrtrm4g2osBkGpNKyJDwBLNg6acFrmbFadwDLi",
  "key32": "4pyTkmMFS8BwLdVgbrSL6YGLvZ14CpC5y7Xnz1P2sZVrU8nN5ZYuYV51bCDwwcDRLeiHgmpT8hjJ4PL2nzfA6Aqg",
  "key33": "paLEfaRLH7KeZNGiutijBotaMnBaZYzBT6aaYes5a3y5u6V7BikZD72kiNe7SdpGz7Xm6nkbGeu1noTRMBQ2FkQ",
  "key34": "44zBBrNudPGAw2GVW2SFomXDR9TXtq3WJD2EMjfP7NLew7JvCEPNMFxrmKvw27VK8cgKAvhJhwucwMRiapMi4n5X",
  "key35": "66q9gkffw3S2TkZmghtFng7BgoN1Mh35KWYBFxtK8YePmY8edTLsZYcmLr5CbXuEcs4DbeF2dntkKhuDMuMr5Mra",
  "key36": "2RiuXmBRb43Nr18hAw6k9gqGrr1sHBZNxKQD5ywQNYtz1kcmeRghMTPQ3Wh1pLuuHzHgiTihPnUpqVBefJGLetnY",
  "key37": "65wJ4BRBDS2oKhpfUs114A92FhnBUe6MdAyU7JrBukaKLwocbT63fqwNodoSo2DXEPZzZs5KDGxineu7oBhGKamQ",
  "key38": "2ZxzYJDr7Euamr67xtH7wfSdEuUvcPbnmSREkoa5J9FWUSd1xFyWf6bFTUmLQZDVCTncb3AFgPPrajEicWr2AnW2",
  "key39": "2hmB8WLUwx3W4QjBdSoe4NKJoxTM3Kzsv6xrihxy4KhnntWFtdumaw2sH5vgRBc8UC9nwoiVNYDqm3DJFBNVWQh1",
  "key40": "5mrdskVfiAotSZwEsJx7svkU8Czpm1XXcwb5nr6JiXs8tjowDvGdLLyKp7cdKtdP1RYx4tPAa2vk8ar9eDyUoqon",
  "key41": "4nAdu6sL1b2j86gZY6KASTAsDtgBFkbikGEjB45mU2hskfkQkqwBvijfmhCNbrVuduNh3BNY8kPu2kzb5eRZxpsa",
  "key42": "wFfXyaYLcKk8jCrBo2unZMSaayYzhS9mkv7dahBLM89XV9riNDBp2TpUtLkMaJo3ssgbvkQ9hnqDBqRkwLJbXzD",
  "key43": "5nZFy8u5LT4SL6CdgRj9jQSiAewbmvCWtXu2393KQDZZTszrEK69wgTjmeZ6S9pbZm6yv6rAAUiwmz1yDMWPMPft",
  "key44": "5Y6Lgqbk1PooHvqefiBYN3uhQDvcY3wNbisSurk5Hhm4zM6jaKhZrXQTvvLVPWzdB29qyCMbq95qnb7AL3HMwTz4",
  "key45": "4JzPocQQ6bSbGd8NeXCe9b2QMqDGiMCFtkvypDKkfKcwXxBmDBcQemsWawHNK7GKjprpGXJVqC4GqrFJQynJQfWx"
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
