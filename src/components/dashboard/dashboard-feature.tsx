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
    "3u57QjMmnbg5jTCorpjLQjqs9rmEFtEeNjCwNMdgY7WCBU9G5JQLWGvwQknLgzKM6FfV6PD8Do55kM455wCyjNcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XjpuqQdfdCeY3E45TsjjpH9iQ8mTinmw7S15dRN9hM6AuD9sGYqDickFFMyESpE4ZpV17VL5tURgSJBKewxBBc",
  "key1": "WAas5xk42kR1vKw9L77wjF4UY6qgXuV8xLhi98RHVAJLUT2Mt9UDdzzWZW3LzLDA2mGFrcRVamTZogPypoyjisV",
  "key2": "4djDGXxEo5mnrxoDJ1MX8XaszYRZ9FUrXfCmYF1W2dVtvA8BQnbKAbox2wR5bCW7D3M7YFjShCajSwc92CfcUiJH",
  "key3": "5FK2rtTmrFkSYnrBFPFjokkTH4wTGZNBi6rNCvPEYaAVDXPaBwzgBt1MhiJsqzKeXjFYf4A4ba3TCFEm9XNdv8G7",
  "key4": "47HyEoQWyAQ16Nqb7V9NfVBtdUe2xqEuH6BWFFEKLoc9FXpV77QrsyMEGL3GBXoKeufRcRXyFv8qWmqVBHaMBoEn",
  "key5": "3NizsUiAgGEmpxMEqBsmERWa51ZUvpEjCfUZBAQLWTMP4xXZgfoVDneANm2SgZTgyver5tZYp6mXSWSXHj4swNSx",
  "key6": "365sNZbWLQQFRUrUtN5X2CSpVPbJZSMmwQvJKbwyyuGiuwietem3U5MxNLyfV9aMXTACSTuZL9f3CgXECwZ3mu2d",
  "key7": "28BQGF6tjfz8brxdscppZFSoWqmMsrwShAPqhNc7EKXW3fC6GVoSfT6C6dQPXjwJMs16e4eLLggLj1F1rs1Aqqzb",
  "key8": "45giweuD3tJJStqkUe23YV13WqYfTCFcutF83Q5HVrV41awwGnKv1XFyCiJsxdUhzeBAYbBUWySeLDQY1Pp2Nb8H",
  "key9": "6KR6aRwE8MBuupocxMavG9yJtPxHActKYLR5BpcERWsk36vs8mHwqe3EWEutJH6Xgvu6x2hwXVJZKy3Eem7FPBz",
  "key10": "4P7hrsaMmSnQd2bxTT5NqgTais8bTsRbBgfGMRmcarFYN26ZBXZJDGpSKzMbjmB4gritUNVm35PqzxkqTwjTRQhx",
  "key11": "5b3cRJP5jpYMXmZjapExrknmkzc95NKSJG7kE3nD5m5pMtn11qCgrsPFAbchuSoDj8N5jCTYzDD9keU6DX7S2GkC",
  "key12": "3ymxgzt3xfMwge6S5m9GX75j5kRV1QHPGz1sBQmnXttsXVLxRHhLcCbsFyCfjVEyfKwnfqKZp6oLNX2cUjksGS4B",
  "key13": "3KpkV4PHyX4uaHH4RwzbFDbUiH1ioA9fZPfK98GQCqFSfZ5DkePcJHuDkJH8zfBrxBGw47xfwpDo3LJSZPp5p7aV",
  "key14": "4EoH3n6PkycbSte4wm8c5iXaZcxYSX83DPh6GgDmMdUhww5t2rDRScNGSuAXMjWexKxSnBELogTLQedgFxbZT1Lp",
  "key15": "4YiYrdAqPR73FYrGnrkbFwFrupCLcHHUiFJWbMyogV6P7TrCaGr6NzY7BzcKfKiZh19teRwvLBZqNdYygG1YtBVT",
  "key16": "4bWFCGu6YB9hqxrXUCwEzo8M8b425dL2AtyvWBqTrY2skyjiHKs6ACBRVkNfvmMTLjug1PkRbnxreKCrxwiz8E1A",
  "key17": "3G5sUd2UbDAiUAaoND1XqzZ9HQY7aVmYEPSkbBay1ketGKegHwX1Jv4LirEB6p1c6YL1Gbcp6x5MkBa81Sa8DkTc",
  "key18": "3pbYAz3S9SJ47JFKJm6wvYWZNChxMUjdJpTFqc8YQfEJ73fcGXRDFwqWBwFDVudtAGfpADsC3E1F5zpjVNVzX27U",
  "key19": "3zK6CvnmqKGNAantKJxz85auSWwhyAYhMtpNoMzPVoHNvu2vsFTJkrnh7hTupL2Hn2aEiX2fZ1t9n6KedEeZP9Qk",
  "key20": "4tzuQZe2fYFw6X44rfFJBRAkhX8E3grrRUicYbZowLi2PD6YAYyYPmuXpCbsu8eKjPsFZBZEnraJpexBYJB5oJHw",
  "key21": "3yxQRKA9H4jpQjpZ6XjNqPK677nwyXnz5wcz91YJxvENFnP2B2Q2y2jwqBSXBFB5Nam2Y6M2J4K8ypiULKwRVKR4",
  "key22": "2htwZ9ZkvH1oHtWURfCxxJyyUWjJBkKu5isY8BEBsPuLvnwbZL6hq4HsEZYWgaR44VkmQeY1rC84xwiVFor4h5oj",
  "key23": "2rLXxheJwwceCJFiTZPySxNgzcp1BG11uT4NRsE3kfBo64gnEeC9MsJN2bEwgY4ogHTm6i4KkY2pt3ZcQhvmeWpz",
  "key24": "4da6yJK6kkyLYzkTZNJoFaAJ3kXMWrN2fRHpxgLSQMuNE7bQb97oCf2ih6Eh4cYu3XVHrBU5GxCPLD1mqFEDVbxC",
  "key25": "4KfBKDZBT8j1CCX2CuUw8gFSU7SyyBeWvidPK5i8hcZYaFFt6PMqaY5KHiPKzEDk2RDBLSiyVpXjcGzRcSZHoswt",
  "key26": "1mJ4fypxfVu7yia96cds6UakzkubGtAd93zJES2Z4ba3qfX9Y32W6R8gLSbGi68LHW4dnDDucjwDAcCHLn1ZHKP",
  "key27": "5JtRtXy93ZfwCNxJWSTaRvHrApfEW2BXnF2fCfGsZq996AtnrqNVhnvJqbgcX6Xud5gDVJusoRM7zJiUpnWfYKjw",
  "key28": "42ugEcXNkRDV2Ys6UjQ8FxyEQURBXMbbhTWoKgkRxzeYzLNLDN9gKAgDXpBDsQ5xANd64WgY41wJkrFViZrUpFfz"
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
