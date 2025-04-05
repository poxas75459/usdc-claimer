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
    "38AUup2LG6SzoGz5DFw4ZEJDPWwcJ66ah1b3FpFSfQqmCddUvsaX1Fa7U9CKr2f96A8FJxu1TnRHVrC1jLAKk916"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CG1UHV9PN5sdZB4YjPaokXbNRMbshPgmgQtonRQK5HhCKDd3XoUBtxVidC87drqMa6And6kgwMktHP9L13PRpiE",
  "key1": "3tfphYG1vxt5mY77kSaN9TWpp7EJCnwYoa5EjNV3WY6p998QqyRTd3tX3XXwY5xQ2nimgqN7pUk7Hsgx2z7yn3kf",
  "key2": "JsXBgPY8ewz3ZP4YgSzdPiXMqZZaGefT2cCamQvsqhKLpn8MPBrzDgnTBfZjWTihiH4XfGnYYR3apwwNnJD68JX",
  "key3": "645yZxQ5WSotpD6EXj5W1mrGdipQ3rTVK8Yw9j5NQMfpATU4zPAzVJdSfKENBHkd2oiL79C3ZhZ5srfZ99WZKxhr",
  "key4": "5STAXxZxMUFAHtWSWohNywTqF6ejywphGjh3XV6LgLL5xthqyWddKtgZiMSrPt1pow76BU5GGaTLbRrf5znYUQSy",
  "key5": "3SnuTb8cTmXBM2aDEBPxu5uHzdmhFda43Qt3UD95na5fBGcx14t9bqPygQKxbbLF4SS2jT7rXcapWQK6rJVCE5h1",
  "key6": "4Sx4kNAvcFkL4cDPHnkMeNoJ2eg1MdQWseUpQV7bcLwb9Q2vUhJTGhH78iSs82UTjLABPGWvY6i9mmUiykxFLp8V",
  "key7": "5jximT43wmfiZfJ3kjo1Xpwb4Ghr9wVkReaFLe5CFSuiD18ugq75ve7pYFkGyF4ywubWfpRzgnHcp35ZDwhucHt9",
  "key8": "5rv2tdVBRkutpceW4MSLxBmF5NSxCTpDh16kZqVhiSySGPjoE3VFPhbw7QspDC8DpbQi2to82zsTsSqJdtREZpJq",
  "key9": "37RHHhHgv1HvXBU7qqhu4EoDPsD8Uhb6Dmfrep7jvJBXuGe9TkqaQupqSCuVhNNpEJB8AA4Nk7nJfGwtu7HFJ3Hg",
  "key10": "4BWSgywJUgrHw2WwdkKwxRBHNcNeWiuaRF2GUGvDqprCHc7zfyvr8dUvk6DiE8NMk7CHDL3wyC9rHTfnBiUdxPKm",
  "key11": "bFEtYXv8LcC15GLvt6ba6BKAzeSWYG3gN3VkcmGJugsJwABNhjgsrSo1fUhZkUE4BchnwxWCHvvzSjX7PZjR9vm",
  "key12": "3fLruURGzCMFoyz9eoddK4U7andRWhjLmMra4vcNjChMiQvHQc75MXWu65nWUXJ6tKhfayEcwEQ5MtPcDgztwtMJ",
  "key13": "xEyi8fojoWSE3imUfXTLdKKhQow66RRegE2fymXcb56gC3tatr4Nueq7HD5FmpAFvysXaovYqaWQ2TEXzYyekrh",
  "key14": "56aHKWQuHbAgvsp4819HCWz64FV6W46THavjpMC7wVj7E4d6DWTEy32KP8GR3sRjJU2G9ruksuLBvwKDEnyrr48D",
  "key15": "5M5BLm1HsmoqLSYKneuF8S3GxyHZbdnj48orZNEuGmxjMAUnMU3dqitRN6E49VBV7RzZY7KYVxk5KJNATFQkT25g",
  "key16": "24xVPtjtkejZqnuFVGNHtR7xngN1gJSe64ruPmy6F26NiADKifoF5S4Zxwdgc7oSXD4DFuRgDidBQmtfn2iDKJwc",
  "key17": "2SyjAFpysQzATpP1LaSfAvhAwWasX72xaakcy1Y79eo7GMtbAPsZQNNXaVvakK5HSZy2qRhaDsywYMK7owtPqQNB",
  "key18": "21ZXnuVLhaQ6F5k5KJZ9oBfhMKZNo5hUb53xwLavfBukk24KiJMw6K5FPwo4Kri9bn66dFZsmqa8GQvHqpLFqB85",
  "key19": "3cdTKrVBxjKhv4Um1ULDn2RMw34whz6MZRyurNnLV1H6M2wtKB2SABsWvCLkhDJKH85HBmsZMWx7CZpJ4Can3uCc",
  "key20": "3LRc29cgkEDSqT7Xhwiq2buvrDqaCuYJeWvNKccLs9D27ysmtqeYuRpWbg1YTZKNyWRAM7LagtSYieMJEZkpDqaU",
  "key21": "2B9PFh1U6zYk46tpKrXjphgPbM1h9gmnDbto6dpYhMm9b61kVTcBsJHPyoEgRG3Q6dtC7tRaXXZzp6PABUDU5Tw9",
  "key22": "3Kthvj2Lv9E9Vr2XMmXN5XHpXih9xuoupy2pUJERxRcMD3UjVvUHaHVaQqwwyNJ6wdFsAWxndtAD7H4ti9fA24dM",
  "key23": "mcAKvfDdw1tK5xDpQ5ykpzDQNCctoNNMmaxBkLczxRYnjKMZw9a6eLbWs9FvJ9nTFisS7FSDmsEP3utUKzmRDoY",
  "key24": "3uvAecthMamnyx1gjtVNCZYMcNmjZ92obV3usjwb5rgu7bcXZWMDJ2NdCYu7tvA4gsAEkLNFVhDAqGoUaSzpyuqx",
  "key25": "5zYz3xTUpsxMBTT3edqhEgGCKodAxV9X9J9RquTXfhcsEtAjbbhfCqt2yvCNAj5Gje82g5pLNbEnKjH6a9Dfz9XG",
  "key26": "ySeWw8Sr7T4Qez9VipXAwWTdkxFadFNQRQAfLC5Gdw766wtTpdkFLyL9jHurVunqNcKWHys7ubD9cyYrTwzHc1q",
  "key27": "4bv7MHwVQXd31yf3zxD7nPJzbvhd25B8zwP8mf8QQ1eVuDRY2Tq7cPD4b1wDdSH5t9mTN4zLuRLVRSYw7weF5fPd",
  "key28": "QbGyhu1475ytNkDRVnzQtFjU599vBzxn5wCLuSYp46A9uEquyXX1Hz54tu5DmZKRQDUvAsm5XR5VS4KrrjePG62",
  "key29": "o35cqwa1dA8BA5CQbWYKGTnGeXkXcuPeGQ5ZKgprRRXTMRQ4UV7efgb2Co6UzsLRwBjJYL4bCFr8iaGoazoGfhL",
  "key30": "2p4FqwxYe4rgQ5f17Aq8uPhy3somYgqiQiC4KrBLadF6dUpKcmuugpymcg8WnXXR4L5Ta9SU5w2EAaGVt17kbm18",
  "key31": "5EvLiSjQUhXLKA7TjjHBFC3Wp8C9wvRT7ckZJVUp62Bxe8bbC8gujbbkqWKgW2KApvE5VU41Ya9pVdt9AUn7jGcA",
  "key32": "655PDJ9v3JBHYnkZcn2BF9MCDLo7KYBzooFVqZDoofiMAtNrQfEfR4UGoVtJ7n4BNxLRqQPsx192K1swY8acUfqj",
  "key33": "2X4eCQhbYZvpEMXJyg5reWYg1yeH65TyQ2hWAHk1EVbks3aGKNMvXgyVeHUS1hjAmcakZDoydctqN7nF8SfnU1vy",
  "key34": "5RVFWnRQsXuX1FEk615wpmdeuDUAixYi62GjXxKZK25MwuVgHn6iobXz6Dk4ecU4QqQgV4hUQFYauQHc2ShPPm12",
  "key35": "4mVRibNB8xvYKL6R6rjFvCvcVU62P5tjwMEBLENN5oYSqkDwSdiUhTjWDW8d1oLM4JqtJWDMyJxSNeJgU48bqVQ1",
  "key36": "38wSzR93U4A7EjMQ8vMK2eafZGZa3NTQtQiy4TAa7rnvPBYuagEErFEpaVuWhvotANpGifpakPKbUZDmTkGsXUNG",
  "key37": "3vuNCHy1vNFtAc1qADZ8jEc7v4aVVyrzGQAnttXj9Vrq3hdQo3y7kAmaAPgzc4MhNtapNkQHPgcumkLBD7YFa127",
  "key38": "WQdmgtHzAtr3UKXrGUW4KxujnPktxW25JB6A4PQW4usDa1SZpxYZG3MGhz4vXuEoub77eNJNNS7xxa7jn3JFNvH",
  "key39": "sVe9FyTZSqyrGZsyLNbkmMA2F6iT1mgbNr7oLZKjfz23mbgyAto6ELGESxoCMsb94dPBK9nUX9WDYMHgejWrw34",
  "key40": "25svbSjr2EmbgxpQ7GCeWZ5kcSvSEwgRj8RLn6vBh2ZkkjaTXSa6nVDCjheagn9gk4wE8VLQusUGogT79dHwTLJi",
  "key41": "5mp7sJ3eMjkxTcdDcovGSuAPRCUCwhmbLvEdVf3bd7AkrWX8L3rphtJf6iAZhKwrHV9jsg6vVZutkeV49DFGtund",
  "key42": "2BR5iv6xCnifTyQxnS95F3tFAF6PA3ACrTEkbangppu3KHGWVfMHP1F234UCui4xh8i58mFSCu9i3FUAx3cC6dyc",
  "key43": "5qxY6ZBg7G3oo78GF3r8o6heQBWq6XTHSXahe29ucvVTiT7MmK4aFi3BXJuFYg3SSTQaS7VmySFmEQxyqApPg1vD",
  "key44": "42LfXkEowjYj163qXAPxuDJ4im4Y6eMKn2T55pHfawVmw7kFYYCrWQwiT2AwwHBctNXcPhMZrbbAMoDqdHeBSJce"
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
