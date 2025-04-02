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
    "5BmYkP9BDtAaTLq8ntfBajytM2ypJJDnJxxBm5yDkfVf3i7sxW2LvB7ahdfj7UyGuRZAHd6EiLo6w5D9UTuCcPLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hy6FptCUp6y4P5UBWNK9DXCGBDhNaKBrUXVwRMmPn9yq1qntbuowCagVEstxU42YotPwmExe2yNnZHzy7JbwtXz",
  "key1": "23mJQeDbRTfMNdkbLqoWWv19fCE7SBHkPa5vcJmA15Hkr4ixbjqXeb9fiYmsEkMapsp1bF4MkZyM3NZzBiTKtV6X",
  "key2": "3x62QgC5xZtt7NS7LDgevVaTE4ubXFd8HvRXahL5MidigUyKvsGRYmHzF7xeo1aeyBg87pNdre3Cm54HHryQcXEy",
  "key3": "3DoYFbpk4GVDdi5e8Aytsg4d8rZfUhSn98oxWojFudtFGhtgwCQ2Tqfai7e4LcCAMnyoNSFxezXEqrSVt54dY6qT",
  "key4": "5vP1RZNt9FDoXv7bg93hdAg5cqsdWGMMfS9aX97QPcDSnzgHdJSebUGcjruc7WwkfLs5An4BZKGxFBmwzsg6yzFj",
  "key5": "4eVKMwogkfPggtoyutzKoFhVRsnUxB9kTaFGSEZ3vjPaD9uC49jjinFym5oXWgrCq8uin6Hytav2BER5qSLyyC5r",
  "key6": "6ceNkJAGXo8S9tauKQSpFy44Zo5xmJxVcbXDuvDZBh81m8MYQkvVQcToDsvqawtWnLvSES362EgHeJGtChDNgqq",
  "key7": "5jysCRzDgqcEwfVArwZHT1fnd2UEAgEkkSzQqo3PbXNeFwEgdycDkpwzwo48CzaLUh9KPvYymrmxx4HS4383ReBw",
  "key8": "2ynJ3G2DfGKVKZgX4pftrGkS28gfBDKVkvbojpWb9opgzGeht1Rw4kfpz5eA53NPZhYZgq2chiggt5omVvBwPBPQ",
  "key9": "FrTTuPWcZAztH192ihSC1TyXm8mngz15ZThd86jp5dma5GytJ9soZjgKyMuMnb5fd8AzL2eUmDWLdjbagNAfeLZ",
  "key10": "5WNdsdSHBaK2ufKMCwAAvzSP3wU5HbXpaoaJjq3xp4V4Njbzmg1veTqP2on5q6WExsyiAy4wPGXmQi5WwvNkfKLj",
  "key11": "L6R9w7Yfqyz4irmZeoQ9nmgQFG74VTmQkRxwrRF5bfcPv8Zi6VEMbjKB3EZZ9BP1ZnGtZEQ635pcZCCyYGGCWpM",
  "key12": "h6x7yh2VDWhRcKKa4zvUWgS6ygncNA7G9M575s8gACXvTzosvgMGpuGQVYdKwwp1kL7V99X3eFPWFkxzjGXs99m",
  "key13": "249VhJXN7K1n1CqYiT43adhUQLjYaktqB9FEz5UCLLcc86KnzTvoJHtJLGHcS7yxZPBmNsHxrFdbYRGtgja7RRsi",
  "key14": "361gAfvoANAw1CKARtiUaod2gQ3rf3E5N2sZTvTN1TRpqm94YvM6jo3R4XtbSaqfttbmBqqZNLHJFHx3p2C46xti",
  "key15": "3PyzHne8YzV2vs2wz4A9qoaRS7rkxQYGskABrKeZNbqnnLzg3eTgFZQCJQgAidQF5hkk1Vk5fq192QpfsHT16ZN4",
  "key16": "4969RebecGSrmGg3tbhhedVK4GRdDAxmuk7X2mr6X2nB4XPgsGRUFh7gDevo9tygqFV9E4GzB7iaxGVjzegBStjg",
  "key17": "2TBpTMScv88ohuMKMv7tKzgGCBfT4M5ZfhevDM3SXqQNyWQJATtvGJgUY3sdDEsiMSJPr6prtXLkmLrtrpN5brzy",
  "key18": "3ygqzFzUgapHnPrHCPxzmvWpMtsuhd8RaqEQAsrrhAvtKPvo9BqqTtBG3ndRsizwU2xpFrZqj8ryhEZxi5dSwLSa",
  "key19": "47EAiCYmPyZp8ttL12xidKUUpcf2zf7pfwSGowxg4xzcnNVDgkLkpVX9Unxo2m5At7KGJrnc2WdBhRwSmgKDiZQL",
  "key20": "38iPszvHjzm7mVgJioXWDmxC88j5v4qHWuGVNkvaQ7FPNGTfWN1mtgVPemo5PeSvMxjUxXi65WPqKbnyedzKpdYt",
  "key21": "4uAeV4e3AL7yuCuK14iarbRVJUpqqwmafjBcAQDUktQS562mVqSa1AVEo2By81Rvp7xbjtJdpKLknPVBpaVKWUoj",
  "key22": "3so9bxGiK1ZsAtcX62sNsqieznFkruHNW9ypAveQcH32SxuN9qshhyABsyQKZaNZVEgDsHhq56VgTbPGwX4dUDV4",
  "key23": "5YtGEpJ95fj3t1eGsGsPt89qLbbBnzX8ZSxzdFJKs9UBFChMDct5n5o9LkWtBb11U9AfoxnsjpG1cpFnCBRTw631",
  "key24": "4xoQF3E3ZSZSTVs5dt4oiDUs84iV2YRSRQVEs2YSPSj9izFDX1hxV8YV2iY7dcraimggZC6wNgNP2MgWoRFP7ZGT",
  "key25": "2VFQaf8DUYkrVALsYR12nmZogRmUd693QUeF5BR3RxzVDLBVuCFhijStUtzJD6n7ayrQhpsffjzqej38CmxEjxjf",
  "key26": "SockuiyfBa9nc38NsfSst3n4gjM3HqXu2e65WdqBRZhtUQ8jhPj4gcbRHaLDYnrTafHzeEbLmo47pM7YBpXMNY6",
  "key27": "5JqUKZAmA6TUBPktd6f2JFutUR6zKkJ4s9MSKM9sgM2Pdyrf72yDAtsByEwUin81qS4qDjHCrzY7epUQZdKvPuAa",
  "key28": "5MiMXirfSX7jEZjMyH1JF23ya4AR7KZV4WGBEqgafsm7sUPKRmAUYLvF9hiRjA6sJUMoYbGr4R1HJHrFeatu6RxT",
  "key29": "5RbebNkFeLjefzZjwmX8wLpjJjtqWRSHQ3QGjXjnkSc4RU4TWWy2XyWhv5hBYZMBuhCUxYb8dwJYC2B76ck7MHJz",
  "key30": "5vSopmkqC1Hnbrf9hcGSFUKX1EZXZEyjDpUmUmokKNs1AzSFrN8HxMmqZwHGWUw4Zi5zkvkqhT5my6RfznfktxLr",
  "key31": "44rHVe99VLmv8ZGVUC4nUitkjpTQC8vjiRafnTSuqBXvBiYdk5gMdkudmTmDUeWkzocJyu2YuAhuxG8289tz3Vu2",
  "key32": "3xkxRZjppNWqCvGxZsasAMnCGce8i6L9YD9uvUu2Xzx2ffGcP37sRSEiXUEm8uvmqH9rrBPto2Bg3pbMTJCbEZnQ",
  "key33": "4ioj9ohaq9pkcmhhcTQaLxzWLRtskvFMPemy778kzZMKev7mdbf4AnhF4Bj9icqv5wg7m2MFtNR9EeST6QhPvfmy",
  "key34": "YtnVkUczAutBQeBpqAArmxSyuRRwnjXyFFLnscWczEBmjXvR6pg6EmTZ2tVPD92kZ939Daw7xqsMCzAkrLpmBza",
  "key35": "3goockwZyRLZt61EfCNF6tZiN6aWxKpjVGfuen6kvi1QmZ33k6eGdiYgjMqUFK2dMfAskBjh4y15LmktLUJbpzbE",
  "key36": "GGZ95qRQvjRiH1p9TBLjhTNy66zEGJVRmDsHzQoGgYvbLZqEGZWPuh2vLXi3r4pt7iHCZkf8wa6pxEsHMS1P2jj",
  "key37": "5C2hZ8GF8B1AMPzfrcoMKHWVbL28HWnRsrD4wurHYomBiz6PbpzqUrCwch8GVtSQrpUgfAuTaLpWDgvnPazzopAM",
  "key38": "3Lu5eQLfrVDwMsQbWNoqpDbvsLQ6aP1b893x59Vs1e8A3S785x2tong3LZBtLSWd2cLnyU5U6EnRhrgDQ2Nwxtq7"
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
