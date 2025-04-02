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
    "4jtMaNJAcnVB4yffAVn65qkcwYKYd9zQ9YTfCmuE5LoHhk3Kygje8Unsd1GgA6YTHDrR5DnvJ83KJYxSWWfm1kMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nsBVnUjhMiVte4xp8bTawUa3DfxRtejdJCYGNritn7oRxKNxTk2bPTZQipuZwLFFr5NNG744PEuAvGViscKLCsA",
  "key1": "2xTJXYRFxob5bAc5EMvd1cgLYxgAncMR7n8djKMndiRB8J4pCVmwXGXf6odoWYw4enFiYshp33FiPySHxm2SDxTx",
  "key2": "2wogeFyQJa2ErcQDesvu8o313xwcsEiapNJhgTCtMkK6YpZk8MmBsGxA778XP3658Fa3XgeqWAedqB72o2jNCo68",
  "key3": "5sfyL5YakbHRbXaims1p7E1ijWUuW4QEV499naCSibq2BTnrcdXQ5HRcRcPATDo4U3ZaKLb3cazGFTbXgnQFCVH3",
  "key4": "5vKDFbwM7PyAmmjc66bN3z3vQHPoyVdZY4RwzJ2XTqmYtGg4aHsveXdPm3C2fsR3ZmdVxa2bAnU4rxFS8hjo1sGV",
  "key5": "4kjKx75hBfaToFo59HEgaFfjCJLESXtTAMrSXYoMefKq3pA6GZcmBayf8nfaSGJvrmUpfQTrVX29naCefCXAL2X7",
  "key6": "3hcYLGSyUpgRZfJup7PQgqLQGyQV39ZkyMjy9yKvedz6hZzdrE4fW2hSQvYPy7pXCxzDXrngGBwsuDPXb6kJavNC",
  "key7": "nRrhWmXAjDL6udRrfwTk9ykmVanZ8pMd61QkoG22vWL4Dxbeowq4nms98dzprZLKZjoqL2oVPd1qD5NoWFrVB7C",
  "key8": "2j66epcrRfMQpSXG9oR81Y9GtHQTt3Cs6vG2usGkBFQkv2Poee9i6FNhrXqadwEm6brhH8u9AwGMXe48sxwbpPL8",
  "key9": "5pLEx4Pjui7uVCMPmjWUi2eH92mba36nS4cLogYab6Ly8rcDpuzLqtRXUfGZrtAkFWWNeFdWA7GHdkrUbVCFATGJ",
  "key10": "3esDCVQPDHRCR7sYqfHrPnfajexaze1LzKtXmsmv2DZkmqF76LeH8FH7A8r4Pv9jCbqyrKpdmL3uZzBtSDV79Q7D",
  "key11": "4CHr8By5hiG6GwfaUdc3nogJMsHxSaxisRmQ1QVxxin5zmvgpZKvUiC7FstQ1XTJz9MJ3LSTQJcc1oY3eL9ELpNU",
  "key12": "5tTtEdEq83w6HmruSrbD9cG6PCdcHTyms8yFSD7Sk2v5xCTiiqiqf8osMbmSD6sovV1Bs9FRGa2Z26hNLiU6Rage",
  "key13": "3Yyt1znDUr2zi8VVgJvPqP1yVDXBWTaZ42qoAuFKX7Vn4YpfyGu8Qe4vnwAJA9GzDojxDVShiwKFuJcTMXZsLG5J",
  "key14": "4QNikL84CHAGDgFTAervABk75nF97JBaqRNbiSXLYjUW7Qokt8oZjcoDCY7isSCWUuJZabRMPunkPfbB9EPzv9of",
  "key15": "3gZZfKe1y87eh2NaGCKWq74wYRzMZEHq19BcRNZ13BKyEUdqXZmQN4m6dhiFfjtg3msG8D459fxBWwRR4rXoMdAs",
  "key16": "2L768maHCpJkbZ41TftFjbiNgUDPWd9coCHxWux8qN1mgMk8ZK6wAXLkQF4YfCFSDS8BmZ3sXqEZcwFJbkbNrPZt",
  "key17": "2uNn586owDnLf3xQ2FfWv9FZtnH2Gs6KXhMZeUtkxgVBnWnq2cqcj63RfZ6oZiCsyv5d4KAvVuiEobE8V9qiyJGa",
  "key18": "3T86TUG5CfGz83ciBAiKmsERZaBvQhzhC3v2uGQMQCxYEUjA1qwanRVtQC59V8TiT5VfZjjUTJv8xJAoR8XJ4U43",
  "key19": "TqGiqed9cFTMs4BcPpAbPJ37w8jSJ8kQA7nSDRCXDnnDQ7rq57NFhjsoKVSsqC6ZN87KsU77Lj1rnvMw4kSzTs9",
  "key20": "znJxcveDP3HSCfTgC9USaUdfhL44mmSJV5rhNFv2rTKYytYmZPamoYEQJkU4ZtiBT84j3fwestXbTp8j7i4e5TN",
  "key21": "2gM8Lhvc8iihqwpPrTnAGYq2gudhsjjpTBNgEWzWCDDcDEWwAy2q18FvDCuA2Fj836uhNz32eBhx3bmqcFbnbhof",
  "key22": "2cKoPGHSqP8N7k9tK1d2hQQnc7S2dAv8eFTYydAo63Uj5LpN8mV4dqhCpnp12dkpdyFE9scaStkBWTRYyjtBJzmw",
  "key23": "GF14g5268x5usTepoj8ZPutbtNnRCFUDHVMhd1xNRXeRJTM6ZnDfYdxgpoc5ugT8faAEArn4sBfKpC5HXBZUnzX",
  "key24": "26rA3r2HRfBFDWb38gZwDnoMazE9UMmcZZMoaF4z55hFuVbcnoNfeDNC3j2Fh8GsWRsn8Ec5FCKK6qGjmanC2PJb",
  "key25": "5HcLsAg7EgpC9aHQ5xeDHGztyvDuJcmt6dHT1HdTnwZ15hKDQy7k13mCeGEfucgTQFXYGrwZZfjGVUVEX7WRFgrH",
  "key26": "2HYk9hLeVtYDsN5Bqwfa4zuyirZRGgDbGXhpF8VcEuRQTqMQupLCcuqedNPLgW6siajteenhbv7ErMMCdURHzb6Y",
  "key27": "4s1FC4Ugb7UKRYdU8M5nzSLbTET1npds3xG2eYzSX19XDnijxoQEpkAysnuuTVh44rFuKfE8CExXGZP99LYPFPKg",
  "key28": "2Mv8eJLp6KR3VSXNJ2YRA1XaVPGeJUVXXCHzkuhdHhsiGNQnCv6XqJfzMeE4g5SCLQTRWzvijsf9PgThNVZgZesM",
  "key29": "54uSZ3y2LFHJMDXbdMyZvvQMkmgnypp9Q3eMuPxnCRwg1GtHsQLd8xga8g5conzoGXTvAqLyXYNRW6cqL1WVkhBe",
  "key30": "5V9L2JaiQ4S295GfDVtMgRYPPss49RBpgoPjumqwx2J71vRzhSeWXQKTM6JbDdtot9kvfER7xepNXqvikZ1n9ckR"
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
