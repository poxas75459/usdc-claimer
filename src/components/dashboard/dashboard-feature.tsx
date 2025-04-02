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
    "3coYXAQa1Mz8fp7aH7b3apX1NMzW1RA7vYBud7daLPpqU1puarGkrmb43ERV33T3EWLL2LfudtoEsEkBZCCX7s2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dRWCq5igF1sDoPbgH6S2eLbC2RgtwusF2ZSojncEzsiyRCMqhnCJ5QArzRgeSGUYZKUciqnfEciZN5r96NrQL6z",
  "key1": "Foohmbmap8mV6GNaDLpzcvMR7z5eHYJnFPeMP5aB7xEhovPT9fcjYZgpWo1R2sCSh2SJy759NP6Brkh4H5jrGom",
  "key2": "1TSFXTsLXNBEXzLyfEXdiUr9eE4FXNK8LRnSiGUCfngynUur4XgtthjcDi8UW4Z7tZDu47LvUNzsoQUJBaxNG2s",
  "key3": "54y5fCz8H6m63sANu8PrBEXEKovJqPaKppqHsXRBWx54GwofzfjhGhvQ2wyM57yokrwEk7nr6k9d2XMqqrHnFY7C",
  "key4": "JRhwzD6KZnpmneAJHyX9mFCwp68zkMULoCo4XQZE6h8PztXcvtt4nhbQDrvqxxVNvSghMrHJJPz96DUeSWk77bn",
  "key5": "tVCFGhFWnC9vt9ffh35uDW82qPoXs2MmwtJtLungom3dFhSM1sVR8wwZ3pCXk7g8isWF8k29NpZbGKzfZdQ8sE3",
  "key6": "DceRPjD2auwMXLWADkL7WMf2HLGdUrMpiFvqarEj8ewwaUiyjLTyi78CySLts9QFRhuwdEKbZauiezDpP8pprti",
  "key7": "5Mmhw1JTVYxDV4pctH1xrHk9LSTeTue6DuXTekZgxEmu4yZaNKfQPTafaCSPhJXCBwVGd8K1kPFZAp6gcD4m4R3e",
  "key8": "2fgVBAhnhBpbfZAx1yZdP124aiC84KgarAde6ifV34h9AW9nCSwJsQz2ADVRCxvuGvChSq5yq1wxejQASgFfSoVb",
  "key9": "3Ymm28cXe8ECMiduLwaQTwr7p9PRizsE4xneofeAAPGvhPMThYsvdKua9m8toz62tsSmzg8grf1vMQFvEzbs5PDD",
  "key10": "24pHBJJW1WNej9FoaHfLN12ZvErGVsHD4eHXvMWBJg5djmajvJt3Lxo5gWeY3FS7PmZeJXtZep43crW99A99Qvwg",
  "key11": "4eJ4WhEgNLRjj8qc8NdJeFCSNVw9kuQwAbhKYRPPRzwaN5ck4kUX7gPcMBrfbcFLYmSDdZnNnMxhWHxgvk7djC5d",
  "key12": "4n86Vy6ypTeUNCc35ctvjSWE5bvd62845wPvEHGsuonJLwngkBxYCPbh8dfvs2hTGsLT5Pvv1g9GwN3StaoQbHdW",
  "key13": "GbHBxMVGadA8Va5L4fo935YMj7qn8zWQDBGqegQfJAxP76XknPYtjhs9Pc4FhFYi8wz4dKspEJ1uCrfeKqi1Vis",
  "key14": "28wvim1gS8iyi6jY3B5wC8b3r7Yon7zs9JRjc7Fduuoz8wzSyY9vPPdNxM2AWk54qXzvaGPoTVr8uQzHJhduWbiM",
  "key15": "2xc4KX9hu6KXGGs3KgmmZdAQzfFw7CEUGXXMaRuvL8AmZe485gq7BS9fqicmZDXak2LwTBKJDLjJFqdr9aNeD45n",
  "key16": "g9ukNC97AfUFxwErDtGvkfSeTDta6WiNxF1sh4f1sbabnyo2YmQohSG5c5Tp1G7JBhFvVd3MhpVYEHGf1N2E4Xr",
  "key17": "5ohCipT4qv5Lyct6DdtzFk1zQdqibFv6va9oHarDZXqrapv1aomF6owDhFZPtbrG5J3MTyQKyYo9UZ6w3HUSi1ia",
  "key18": "pkwZNQJ3XEB85zMdL4aNSqu7Z6345nnT2kRThPbcgWBpBDHXUvpXCythhwhVhDtgn43W7GuDLofmS6PTXWo35HP",
  "key19": "5v2E2vrMKL8FQAeXNzQWbwF3C92ENaKU9gS7jynQRJLn6FYmL8iSHGQ1LEUuPNhgyu9BK4uQXk9M5cvhpt8wJwZo",
  "key20": "4aN73bDq9h1RFWmG4bnYBPmg2TxsMMwJVJsu75837JyxzE41PvNFFB73yrSDCA2mhWctZRNBaH3VLFbAfYge5djB",
  "key21": "JrVfqiAoGchBqXhWY2qPhHR8QZvw6cp2M11LL4eeSKQBf5Jy1XEMeH8hRLRQPeJCP1F485da7p5Ko9BU4mCoNGt",
  "key22": "3yYGjNiFmTFe5jg5bDC4AUmj8Ur8DVx1Wim1mCwMzYhfHqx938kohUKA4ZzR7CJbEVKvotaHxQtNEcZkmLjokPhZ",
  "key23": "3sFyBp9uzmmEXAwQG3JZPUQxFEL3gP6QrbBtzYUPhtL2q2KhufDqfgiKSfD88seJq1dqzhKeeWrPjcgbXdwMzuaY",
  "key24": "TDwnEv6WqTvHcV5pf6z2sZLMK6sdPqahfkQ52rh9rYPJrfDTYdWFMKY2tCYUZ9U3JzVTqWDNSsAy4muD27r9N3U",
  "key25": "3CHmeXtYiLPg3UBxvzEa8MhvYxrQRw1TynXtA3XUecJwydbkBFamCj5vgKHRCwpafF5FaLhjeCPTSAzzfjzmWEcB",
  "key26": "4JHusoU1jg5ascxh44tKfR4zSRKbQqjgANkfYtDsJ1g4vuJUZFSuYzfNFnJ1Ky6yGLdnaWzomU6YvysmgoWv6e4E",
  "key27": "3reizNVmaUBHPgz5UNpJMobBRaos2fUijzqPo479E5jUDzj2Hnba1pDBU1NDPa7BtsD9zHQ5uChvpbSammna8Bd",
  "key28": "3zsWEffsuMsrmfisvPBGb5G1HvCEH1wKeiiJFZVmuakp14AFr5Mj2vZfHL6aMKAaSMHmR4GPK5ahDDQvMWgWJQpa",
  "key29": "usr6PV27sMt49gtrLuvbmXazgiujggZRrFf7EiUa1CFH99Lc1NSBXRAvmN8rKsDhRcq2j5BhFod78sS8r6VYaoH",
  "key30": "5hRJQCe1XSEK2FdEB2gms67VHMwyFSegckjPySqA57bRVawUizVsMSjo9skZGr4r74YD9ijYngEemCu64ksuVVdr",
  "key31": "eNRcpEfUhszF1JoYH53GybFZ89uirhJ3GrQnqKjTkLgH95pphHapUn82gJhuzyfveTWLLcaG2gj39YcBQ8T3TFP",
  "key32": "5Zhrs8uRz4Lo27NaXdKjzwvkZFbpcCPsgbiCR4zEqS6p4LpRDCDMws9sCtTNfgGdAkpdRDMQHheMZ9ahdiMHwX9M"
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
