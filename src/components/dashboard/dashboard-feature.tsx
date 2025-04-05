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
    "61sFHYdqXjv5fwbgRLWcitDw9nQBK4RPcT3boWpYy9LGUPh1ULFCyKssM2C5FLAk1AyDQb2TvuZmHhrahvTTjLoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xkshcSHhbuuaB91xXSn8QcwJpawpsUqrjHChjQb3huenGsSJkZMnDAthRsnAbGzknP7W5L43jwuw1xcSZnBMPf",
  "key1": "2JT6uYdSyiQiDeHiP1AJAKC6SGNWE1CtunGBdxH1W17iTF51Ha8zL1srZXbak9qG9F7xMUws4B6Jo5Cw4iXiR8VS",
  "key2": "4zcUa3yfuBqHVDxDoionfmUaBUCM7oha4gw7ZUocgitqtckJ58QsoGd8gb9V4PR8fJN5eCsscQDSZ1SGHmtGwy7P",
  "key3": "49GL3Hu7ei3L9jwbQ26Wzc4uuKHW1X4oNRBxJsZqV4EYXpfvbPvxwXEXAkqJnBYwLKBLBbprupytazVjaddiW93S",
  "key4": "3V5NBQ6VjSLuSArZUvXNMs9yB9fvXtxPUiP2Fe2VDk6bvJ63w3xW12E38XnZs69stXqHbMfmdHQ5d5VawnYmRe2A",
  "key5": "37mSopuv1f37Y2zuhkvLwqbtCZGhkooDuZzBi5c3NfgrjfYR2uwUbfxHteqk2c4tTnPNoU8fAmuZKCYrrb7TzknH",
  "key6": "4u8kR7bTQcfdAVRXDoJpTsA9bkc5TAM85zUxAG63wBXhkg6nrE2UDSNkJeYJRFkCa5HbJdJ8KfTBmke6sxmQ6MXb",
  "key7": "4W4tg7qV6uTUfPQaYW1Q9azgeT3nwL6r2FNQbvD4ZTCNS2GYjA6vSjLL2irQ9NCRvkg36FcrSxDs3h9A7zYR2ycp",
  "key8": "2AwjFhWTJ1y3SXpffzfsBm7AybkqKVNE7mbTQoG8z5JxsdCnoYEFo7W67D31Z1JDBUrQ9eFEcshkA2SBaDug2kKo",
  "key9": "2GztVmPYsR2BYg28B2cMUGxKWjVGHh3xFSYDUzy6W6RUyLGbNyTWVP3efk9Ycb3kwK3nQCqrMgqByTPMCZgJFAVp",
  "key10": "sRCWdyJyMCcjG23ShuVEVRYrY9g2cz8LjwasiqkPxTWZwza1Ss9Hvb7UiHprkBpna1H8YHZVpjADiKJW1Lzr9xe",
  "key11": "4mbN2yRDsjovEmrb5UVnj72GjKBf5BmPKmxZLf23MkL6gZR64kHnVrfCGSfAVEWsxDcRKms3t9o4gW6nHyuphb2A",
  "key12": "3iKJKcjDoBNfRcGzrQPKSsfkS14tswPGgauarvRcc11EP7DwvdpbPJhEfdx51Wg8fEz75DfJQCLEPDgJwSh4sthi",
  "key13": "1qY6dbBJ6CeWMRGhCfkwfQktXWsoYpG71vf4MbBd5iJ13JEunf1v6orP4AGFtdNEBk44VucrePNi4XZA31Hgcn",
  "key14": "2eTuAodAh7NE9Dm3MDQR284jwc9sFPPFwX5eeTpMSKAMjWHn5MTRGdiQcfon339jPAsD2gY4xsgrrapJfMABsgYi",
  "key15": "3fGgW72pMkJGRyj99vcULNp62V7ifpBk1DgXyjHBM5XrB39dgxYnuBz7pXC68SGdJjvqg8Xv6JdJrXAbYsKogkFX",
  "key16": "28wqSx6LkM1CXnXqWnHpQ8pgKhBiBZkN1iDEgLm52EW8R8BLfMQkmex3RdCSsjpKdsfzgg3twHEM6tDV1bnFjEbh",
  "key17": "4z44CimjBr5Uv2deaSfHfEHqdsAWkntAJcTqRKr81pAJKLwgtKfHGqeNLi9jJbKjM4YwwogCy77RPYixseix1Dmn",
  "key18": "5ubDMhKsbWpACn7CASuQmo2CupSfLvg7QNReh3qFFBswxAukz3FgScseRJ8HrG2byfBN7rbih5q2JT5hmrnKF9vK",
  "key19": "3BY6tpyhsNZ8qnTbhE49kx9sftK4PCN8k3RsMD2N4Auxpn9TDmte1Zsz5wnq99LoS62aYKsVwF46kMYL2TVmc2Li",
  "key20": "rdGLkE5HfajxgXQg2j2eLSuGrEvjwKdz4eE3Qr8hwukjSEmuE14U6Tk74whjdJqh8kEwNDBzJDyhwnmdYCJtjG4",
  "key21": "3ShVeZsXpQpeWfoakNqWtaizH7DNFKxZo6eZDA89vkEvWH8RCrbEMCxfRSXjk33hrFhaHviArygiRwEdmr7agZLR",
  "key22": "2MYHLAYLYXtsYtk85K65gvvhVxtAnuYbPDf4q6uQWie9EJMPPVP62JK3z4rzVGUW1Ka4fNAEEsvJq9nZmJpgLmhE",
  "key23": "5H1kRd2pgQLAE496rzN1eHAQgsUXRZaThhXEi1VUtoFVdou5ujvHQnzySbaF5JPvu465QbuC1eUBN2SwS9DxunmA",
  "key24": "5CoFACQsWrhz4z7KxLi5pB6e4sTuEhEfPXsdMV4vye13ejvfwmhC6fXYGESmPMRLn6RKuXmTJqZtjL1CWBjsTzRJ",
  "key25": "2QB8jBwtxwjC614S8XZYz9sqM1UbrJgrccTxefQ5tozGarosajehzSk1LfkvjFJvK2UfrxjLaDwxatk8KxXNPJYF",
  "key26": "4UEMfyN5tT5uAVhUr2tbmiieEgZdaXtZs9yKEAaNMZ29SYqxwvCJryjvo9AiWmsQLUSGGMQWkfGdBiDNaXZrHpcw",
  "key27": "5Q1EfPHCCbDooy33FFXGe6kPVA4kXsec7D2MiQ24UjpWiFoLizhHLVsvmJayKesijRGGUui9xCnXTFJ6eSrXTVb3",
  "key28": "5rcq7Bj1S11j8MKv8pywhBAGudnyEtcUWBDsf7cxNNwuYosT5akmxxfpzkjsf6G7ArTKv4vTzb6xEKLQLMFw9Ezj",
  "key29": "5xLJzNBhtzShB9yikF4xuvkWizaYkfPoW2214BfR5mXseJFudG1j2DPUZ7sEx6vdXpHK2L3Ys4JCp8V4fMY4sU5k",
  "key30": "4KX9MvMJMwJNJDKGQS4vAP3o6ES2vkmWhMibDcFyCwB42Brfv5GA4HW3H123KQAQvvPZTCWj2Ci1yrn8JrQfhnDa",
  "key31": "74ETkceapaQzULr5uiaeqDUZndiLS2i8i4WgtnU51QeSmUB3VApAtFnGyJKNCjVRMcLwQ4zSuNDETFkY5kjemVW",
  "key32": "2Y3579g8fwU6ENQru3mym17gKcFUrRUFN9yp6ddEyZxhvA7hBiA7kuUeFKV6UquzjTSZgAN6y4tNFBsZ2TH43rxQ",
  "key33": "4hWLcyTeRNmtGeCR7Z4iDW3VW6XgQgKeCii6uaPFEijDrs6bqZHRscYqUeiypa59nrYFZGs4nX3DQhvPtgYwqkVD",
  "key34": "3nNsD87WGTHSajUvZL2eHM3rBEMzXbp42tX4gBL3WaRFAn9fe9eLi6omveZPBUS28hD1msdLaBXnqPXfef1GUnFy",
  "key35": "3Jud71RBbgwh1WhytaBsPPE7bMtJwrGDdqinm8e4kPgKNjrbgNAChycNJiT6LgWZkWpoTAoMHiQEPjXTeYokk42D",
  "key36": "54rtS9Gse4cBRhhrXSnF4qm4GhiBTvAs9gYAjEYJJBzAJhsUU2yj2TReSwYNmeSmcdEKARLLXorXbyByVvXDnsAG",
  "key37": "5b9nKPDeSzmNZzUZ3LKRtdoDH9YWacZF8GZiAJpJVUbPvbezeeizuBqjf8peb9TeEXtr8xcZ4mhgtJCGRN3GZs2D",
  "key38": "4BSitf36cCYSAdrjWXAAaZbDAvE6vyNtJrFuF9C2DnsGZ9sJ8YPXLugr4KmEq3P2pGGe8oe18THAVn1cC5jfT3uD",
  "key39": "2kagMnacpw2A8jTpFCzKCkkVp5EofsUfdrNDCp34E8V57LzPPCcvHkCCh7xWSSELheNN6hcNeiQovghBZhHNr6X3",
  "key40": "5DCcdVLUQ1oLwTNYtwwQ4V2HphC5VReFnxsvk2GzBPsuLuYcyysSP1pAKLTCTW2XnuBtRsitdmd34tZemLnpamN7",
  "key41": "3vgQayYZS7YqdTYbZUB2dGnUEom8pSvkqomJ2G4RAjRKf3gqw5UYNtDFbFxjWsw2E99wAaub4iUu2HC2LjPxAAgX",
  "key42": "2DYMWr7NqX7GZGtajm4NasCvCJQrBzfAJToa2usyqk2DrKgNyeH8XHZWG2oXz5FnxrFxJE2AbhdatYXcfbkX852C"
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
