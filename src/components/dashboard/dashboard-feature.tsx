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
    "5EkhTnCcZbuJVxci9jfDp99qzhXCAY8vwQafy3kLvKzpkzWpEuXcez5vY8JVhuzaXyz8DhkruEE4C9YYLeV15x6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2564UPQgCo4bMqhyTvcYZuVvpFkczL7Yidj8gN6g8nhg2qhnmnatvfJRrKUCMoQ76dWYNcj6fizpo6iRt7ZKJNvm",
  "key1": "5tU4geTFe7WzDCsJFmhe2wGim2QD5htNN17eNowrcbYW9puYmNEWN48RrfWMe5UtaB7Jd32fcR92svxt84w4Gaso",
  "key2": "2k2SPFUm5HNRU5Lby4kZgZbbn7gitYrm9Wgm4wUCppeMKTp9gMGhAZHmHo4jfjeo8oTnQU5AwLjky27uiVRpm53S",
  "key3": "gXsaByT111pKdjCa1n2jee68ZUGoBMA5uKTQNncLFqzhBxggZTEAmPHQTVu1iAegsfsQo4ueGmSvwtboW22Jw1A",
  "key4": "3nEPkEXJA71xBZgEqdzjcVen79RGeUzChYEt5ch2Xuu3nf3uvnFr2Pn68mFHC9TR7jpeSSW91WbjQvaUYZrf7Vw",
  "key5": "qdaNsZL48TNHFTQevS87XzDC2vuBKNhskXSVkCHvwDVAoTh7TovkS28oV4FL745nj5bdYBwzvy6ZBRQmnBHudx3",
  "key6": "5L2VhXY84sitGwUvp98SuTrkDgvUjLQCJQibEXQY6Jgb4oWFHcpNLdqsCgoebwYAPM7UfXvELvk4teopQNwWjR1Z",
  "key7": "7uprzmiR8jSxQbvM8aRENV6nZXDN2YzTYhBZ3aUhF5uvdQvTnWWpdVHazBb8fdwdAQTVujx4Pasa3YR9L5iACBf",
  "key8": "5ZKQc1XgFL86VTRu733zJC3meybaWFx1WiYJbPVYmPznCmEFuZMRJnA3t5ezB1dSZThpQVoRHmcJu1GmYVmrPDE4",
  "key9": "5dQ3osR4WS2wTEUFmr5v8jQ398EfJL4J7Rq71zCSCuyarYMEHtqNXGj4Nn34f3CbKBC4w6rix3Vnxft6eSUo1Ym7",
  "key10": "easT7uMU4neieQ9pUSFHEtpBJE4wfpSnkxXbX8MMHusSr69b68eERsRZLnRhjrt28s5xk7Uk8ztET9yaxmvCPF7",
  "key11": "Wpz6ntH58EXw5UzsWBCr1M6uELaKVSQ3L9ZTwBPrQaeQaowYgGH5N8iC5dam2m38EhuWZnXwsJL5Sfvy1idqkdQ",
  "key12": "EAYppvj3YiVjLHMZZkYrVryx9tmVcd7nqndMCfk8remPGg9o1J3JDwSMikjGN2SBxpR82ZVBveUwPVVJcgPtgat",
  "key13": "2Ukbi4XFbMaSnwkYBNQ2Z3eyhFVXQ2toCFz1Ao9zZE73ZoxENMUt5KesTno4Mvj2x2xNwCp7Lbm762qgVuCLuZ19",
  "key14": "3LWnjLQRVZ1puMtsZJPmD8ha5BBn7iT2ALWYvNv4UT8CUfdSvhw2wMR3qjAGbpjK2d84MyNQo6285VRxzMuQmnsp",
  "key15": "4mUzzBEmALR4otZu7VY4TqJ1bDHmHpuJphcALd5DqTYvRDQkzhmgUz38XAsrekDmDzXrhscddgKUgqCNBwcCqo9F",
  "key16": "4dmi9wwAfpAiMguxUGPJjzx2T1zZB66stnfBoZn9TFDu6ZpdCE9mgs4E3MPXUKHWoyQFq3R7Dpe2sGHFdGxkJLrF",
  "key17": "4dzdcJqudv4Le538tJMhxqUm9spRRg1SvznTfWtxNnFYG8rXpVNZXzzTw33fNCPNjMwi59rozS2zB5xNzdpCJYYD",
  "key18": "3Ci7H97VBDD3PpnPvzBu984NeqD8A2d6ULGJNTcWB8UkyfeqY1SBP8ENPGo2yQgR7nMKzhKX4zf8hVUTgtNEvN98",
  "key19": "61i3wjsYfGRU4kGBBFRPEBuKUYKrma5GQEF4TuarGDusFedYT44rr21vFtHuXX75a1fDAPMEpdJspDTASZ1Nsge3",
  "key20": "yBrQQdiYGcAbTZrSsrrj87GQKfFT7rNgzL6399ZNPFGPk88dKjb3vd4ynqYGZQJvD8VZByrSiva3FTZG2P5e7ju",
  "key21": "62xZfvzzRRzexHPCyyDuPkiLcUtuh4AUQZfsMkEkaCQGT1LvbxYdGfW5KWANUNdwKEnzqWQ4EMFMnYReXQxVbBk7",
  "key22": "43J1Vw6XyUD63X4Z4VMegbaaGpSTGqYbcLTsNjQvQhoLvD1MGABs3pUDhAYJs2Fqov8q1xLFYaNrWTqqepjFtBPf",
  "key23": "3RBszQKkHAaPeHuwmwjYAs746Pkk5qEquWnL5P4wp2ZPGSey85xghgwZcyDN1t4dyb4ww1eaB6qtGRY9RC9zUiHD",
  "key24": "Xn5jUR5EFmyAdJdQtQzdRZPCpq2gFCdJSL2uVRFWxgxZQVp5Nv35b8WQZfppjP4XrQPB2ASfjYFG17NX9qzRQK4",
  "key25": "5J7zo9HyiKhBVjaFJqUXu1juJf2vTbJTh9uFALggPg5k2MDcJ3x1aFFjUZpfhaQ664JPrfec2vaThyYcw22iq9NW",
  "key26": "3U59wBDQCJmJNuJQX4XVZExpDxgZP6J5J9gvt1fEC3uQoixBqh2Bcrprw4EP1v7SEAfj7j1Ta5BDbS3GdSm198xP",
  "key27": "4aMLnxvQrj38MTE4Lp698nJKCzwniZPABNmLBzLXKJ4uGMfmhEkzbyaS75obmJYrzFDZ2KZoXwwgnMzX571f4VQ2",
  "key28": "NhhykVXmiQFdpTff6FfsoXiHcVA42R2XLhfoDk8PrTvuC5xGYyG767bZZ27eiyQ1LLtBETuvrPNNK5sMRLZZDer",
  "key29": "C1Wn38qHbxrU7YdG9mEUFeHUJdK3Vxhbh1RGViFC4AGM1aLNYjke1G1dnBBUZLa8X2hKsGpP4dHLaLP3ohKwPXJ",
  "key30": "3FmWrmpvjX5LmVBZ7pVmKLyHc5b4LbJrG9zXtxBXAgMS7mJ8GjcLnmoNjMcpVvYAPve7j9PKHZMzAUQVcNnA5HjC",
  "key31": "2Dy2DXptHN2AptvYDUXH1odN8BZWPduuGna4xf7dSWWYUuGUu5kmjaGyuMWfHnZygmpEocuaHnkVs4wZad1tFnRN",
  "key32": "4KnGbGDSski1YkUCHkB8ydrNYu6s7RCUhKGWV1UgDWCBJjEMhB7sTYm2S2C2UDNqvrdHudkquFS1Bp6cLJEW4uMn"
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
