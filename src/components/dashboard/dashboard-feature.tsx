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
    "p9p3VtmaaCXBfVHybUc66LoY75CUWqQc9XX3qtM3cUWLtK3B4AKRwqthKPwXerjUYoM8uUCSbbjNMQFmLLdESLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mg4MtGUCbiGveiDQzpgyDyCHj1rFkDvDJjYq7rtCyyk91AXNYxwtfU2HX9ZuDtwas5WGictyaMbU9tB1GZGYJt",
  "key1": "5eYb7jNoaQfJyidDYu5dtdt4tTCyDsYiGQVyv8tLmF9dDk2bsNjcA97qtZVB7GGro7dQV7ZHKvdyTWgnD5YSXTu1",
  "key2": "62Lb61MQVSnGTtVyuQYJjZg2ZoBmYSnaoTgSB6PZhXrUGCPfuRvW9zFtGkGvSM4zDF9kYGXwiCe1H3yeY8V2aByN",
  "key3": "2ejH5sgrdX8TjyVwpBHiT7sQ42jxQWKPvfrW62T2N6x74FSzwGeyuJ6k1eg5uh3n63CbW4eW6fzj1hZP634kN99b",
  "key4": "3CBpJQYJXBJoPGSySsbAs2gtzBHEgj7Kv3ZxcSiypGWR9YwmaBpSrafVBBLECAQShY2egwfPB3YFEZXAUnYkKYhJ",
  "key5": "2n1KaG87MnjkxhZAntk5WEzKehXFJtUPEJhWAn4Lcqu4mJuumYXWd7Se3Yo2qj1yTCRyVZqZyc8k4fPdWL6KNCv3",
  "key6": "2THzsAP4cob8SRbLLF94JqELwvZzhSDKpkuXArTmNcwvDr1fypREg6FShcPo1soYJ8TTiBpoc5bebvzu425hiEqq",
  "key7": "2tPJhrB7Xhh487pNnrQiaZ9LAUoZkoCcs922eCdxqgMR2h1cod8Mjs7DpJHawqyyGVWCG81DH1D3Qbq35DtKvozo",
  "key8": "3MPoFZZjWaAqHV9Q7yosd7ADQSLcQj5ZQ73j6YpZ2K5aUogtMMRBpHA2q9BWPGvsGsUXPf1M4uBkaLJ4DscLX9gN",
  "key9": "66YjCGPtQKkiX3t4QvPr5n2Rh72vGgruQn4cFnNgNqvrUbkxygcnyToVbEdnhwWExLPcWqAdALZFweLmZGnPtj5s",
  "key10": "4Z4KZffBs1q7JMrfzHzZPL9Cr9nFk7F16Hn2AMLcMKbsAPpb5jneDruYneoM15dV6ceVqGDkR7ANCu1FzZdQPBTx",
  "key11": "5NhRjBJTMQ1RbFg97jxFc4BDjHNUxGdjb4njWbhhtmoXqUKSpiT7Ea1r9AZ7WdQTeuzHDo861RiZtEEDTJYYXcc2",
  "key12": "413rYUQ9vLVsSC5jyFVwfVnBBgxGwRiMZYaTfXF4GUAd3hNiYGifZ7U3FsUS3k5pMBg3eXaEnba1pTFHoUAunJsk",
  "key13": "2bi7tBoyzeMKkwmN5Pk9BfxrX21L2i92bRVZ47vvQbJ28E2fn4NtYHuw8Nobvoc6e6iYEYnnhbwrpfXGpW5j8yRH",
  "key14": "LJs1s8sXpZZuD33sUzcyhi68bjFcU5vvVbWmmoj2nRSPvHVjGiJ4SxD8Cz9Eo5bWYpAbz9sxYxVRSspF7N3huCa",
  "key15": "2NVo56qBQpaaJsTaf827VfFx9FYm5ZzJuewaAjhjZfJWT2EwmDehLMKKJWz1anX8oMcAB2J76YHifvdUHmS4gJtr",
  "key16": "5x1W5eEqz2kVbTofhLTKJ31KSHDV3BambopXnMNTcJXadffbY8bGz8daifhQmg4wD1fR8weD1fKXswtkyDBQGYQu",
  "key17": "3eke9QSJwykohe6GfaJFMK3vyW2TuAdyGz5YrpTvVdG9fMwjLBeFqz66HirRJ3QFyYd2azzmcR5WzKWbo4951KyP",
  "key18": "61RPHVpxT4fUwig1W874XKmMdavSajkt7popA54Kf8X3e3Hn9bpZ2JZF7yPMZMgucDKYUhTMNGpG5NXhNS6HnKcQ",
  "key19": "xHX7SyJcKD5tT19Fy3TGdRKqFuLg5RKYW3hpU7hhRRSkpJKZNvtfFpzU8yGHoEMWkzCVeYSBfE6vcpiJDZv3dY7",
  "key20": "odtvDy1yAuS3SnwpKu4LXTz5Yc76eTEXmU8Y5mjWdnBR9YenHwavpbqfvwqA2UUursyzJZhQpS9bvDqg5ncup6s",
  "key21": "hMj9TVpieGoGvhuyEJFW5XweAYy96jjNCRodGhrch5bFZWoFPL9wW3rqawUX2a9wgXmD7s9NQ1ombB4xqGaYeRp",
  "key22": "svHNt21CFyYKJqJsg34Nxs7amFug8cGCVtCchNiv8a8bSo8Q6UTWLqRWSPYvc92v5xDWxxXG82qcMWsLUpwK6Hy",
  "key23": "3bWyFqbVf2BK67k1rwFymhQHdDGPYxG2DurdgE37pYxWF9uEFfhW7m5XddMZkuwUqV9gDGrB91FJmBhcSowAerR3",
  "key24": "KoVkEejs1Qduk4yf9Fd2mcvMFy991pB5tphE1zPqzS1Aut7bDJLZxAFuRQtd7w8o5rBRHJb46VHgxcfrHznbFrn",
  "key25": "4UUc71C3uQhdzEGkPbiHgT6KHcwuc18pKGEkPwVgCtnrhZdMbLuZBEbZE3RKEwcB67d2WdkALgMfqDz49WUTribk",
  "key26": "4qBDii55iZCmajboJwcHrLHmWjmECXX1E3VMKvDk95EXE7mXrgZtSNatNC6cxtPigZxcwEYhRZdsPt7UCyKCDWpD",
  "key27": "22eLACJWczT6MTYSmcaX1vGvtH5X4LGr6Ui1cNWeQtf6upsRHaSyaJ8T4J6KFBkn5gb7GTMM8hx7ric5qMgenAz4"
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
