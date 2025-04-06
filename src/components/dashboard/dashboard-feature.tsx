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
    "5g5K6pd782J1X8AAukZaFELc4VMLQpiUbfekNNLQQmuU6BLAPTvra4GJYGbQ4FnpUJhsu8ZHvSrLxpyFPYdHnmMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63uesGCweMWPUibpSBnpTdaNBZPPZBQZsgvTwMWBBpjvN8Qsxx7fTxqFLctdLo9ZwuP18LsvjsYumpSFKyAcJkDu",
  "key1": "2PgAxqoGKsreGjMWJ1iFXbA7W7qn9d451nL1oyQJjXgoK9W5fnbKLrKQ28sAEbtytycZFhhh7hyZ1gVyJbtPL5d5",
  "key2": "25fbxfKGpnPCW6FSMCoB3KkAH9RPHvp2rStDUk3aCYGG5hovrcRs6A4732NfvvyCW5DPnjf8ZbiNqbhcF74n84P9",
  "key3": "5tVA8KChiq9N64kBbp7hovZ8SmBtF4PQC3Tj3RG6W2f4SpvkwM5H2kh9REB2ERFVG4CjustjrrUUkbQsJkXbGtM6",
  "key4": "45NwiaChKzsfXnVLEzmsCPvecJzNDk8exKLLnZQBuUxLvHHXTUmqrMDWYEjRYXTjBgAScvAWomNX4PAHreE8Nvkm",
  "key5": "PHiM5FtxbW5KsY2BfmWG9GyNAHvSujxnrce5zeMMPsCNf4CaTCvZNFA2ns1QMc67xBU1iQ7CaGoYGHe6FA22Efu",
  "key6": "5Zogtk444EuPnntcz1WUn7GTQLajUjWRt7DMAu5kd23RuyK4eUSScsPcquN2rCahgY4m2S8t6Woha8ze2wVrtVFW",
  "key7": "2xdpLGeP6zzGztvqE6Bbh4unNwmC71SdiVYYX19CUWUU8hfn48we15d4x41x1174Giw3WNDEgB6zqmoWCdJznPpo",
  "key8": "52cfTc79SxUaQSPa2KcUbSB6vTCE8faY6XyoYjzVSQtHAKT2bYfWwu1nTp5kjgnkuTv9LwZEYuaRcmUVYakPaxes",
  "key9": "58atdALGvxidMcwaEuaXgRM6T2GXn8S69661e1i655myme6fCMKfYok7oGcvE6uXWA6wc6gtjxbhYk6VJWqpwP2t",
  "key10": "XP7HiNibhdJHbi141kR9sKL2Ker9zpKetUCG3mkjM6KkzndiRKEytkUXhgxR4d5MDRi9Pke3GfMxUvGYpGAhfpY",
  "key11": "vSdBpHNs4srRgSPMeeSd984NtUsrywGVo1NGPcd9bo9xYJKjbQSQ7BURKYYBLUKjWmUrPTVrKx9QDpSzXvFAyAY",
  "key12": "5vZEr9xPsXEhsPuLNGhGWHbgh2bubmnikS1wFd7CXoKRQok8dkhNekxDxEA2jFhp9J5MmdiTHSnMzUhKRiYeqRU9",
  "key13": "5GHsAKwuLZu7FYUYM7KETh4EoYy4kkdXYR8zBc8QdzN1SFmQdXzCNyyW8j4AF1N2Z4rPssWSjnWSQAnpZfKesyTZ",
  "key14": "21Wedjh4uDxGPq6NAePcFUL4FyFq37B2v9mH9Mb5SunRjHNZEaujpWzbaiSW1SCb4BekNWzEFaLc3GF4CYUYG2Nn",
  "key15": "5QFEzH2RJ2SGFahoyUEMN9rP2rwDWKj8dcDBAwqj3SGTr6TZwUQdtN91pwj1Qb7uqLxaRkr4ckbspN3WUHbNAPbc",
  "key16": "SPiNgjEH19wt8Akp3h6D3F5dFTXYgnR9jX7Nca5Jzh5BsKJ1ZUVLkj2F7v8WUcYEpnCjdKxz7V7yahvbWacGDMH",
  "key17": "c6thG5LNZ8gsBd1zeZ2u1rRrVSJD1KGRPi2AFv7VjvJz81x8K63xVcVM1JfmpELcnDUzUGyEvcYRfxYt6jt4ocH",
  "key18": "5rmrUyiRR1RRVDw5uTZ3vo3GBQiCdETPVHVvwq2LriKBfiLn9g7uaiga4K8uGdvZUTuLt64HFGw25qz3nsYtUver",
  "key19": "64XCKjs3EKP12cp2zadiSdRg9FyBqqGHtJeXT53hweKQW98WtCpHaMFue2xjN7k5qMjXpMxRmEp2nNwfDHKW9K6h",
  "key20": "4ouHfKmqsk48hu2iFe9F4h9iyx3sMLda31M348Vm6gvkF2WRomjLLAUzanvvJgLKBEMN9V9Di47oy2Hx56fpemxY",
  "key21": "2ocvTrGJbQujZKkqeqyq3vbMXwccGNJbq1Qs81VuFr9rQJVeLAfaT38dxCNt96mnhAv69Ffdx7fpU17hmRMvW17J",
  "key22": "2BMQAP73L7SMYaXoosngjA9TKM9mASzhPa3V9AbJJqzd4SEyyED1UQ99inHNxFcHbShmo1gdgWHNhmND95hVD534",
  "key23": "2hMsDurdokP6t8UwkGbb5qRXRJxeVzHmUe3wwbs3QAbbARLay6qtys7kGoCiqs2xXuhpmiaeKN1DVFMCnJWkwS2X",
  "key24": "4EaNzhTqou96YzEAMXf8vDcdH3EA8BQnHb8DtFchSA4atSA1v4PXnWoFU8mRKv2LwZpveXMLH6Uw1C5oqbaHgvFo",
  "key25": "3uAWc3jf3DhbdYkDTmUey14vK5q3vkuBhMz72c2P6bnBtscTCMLHQ4T5Z97hZEeiqYBPn37jBeBigSGkutH6xvu1",
  "key26": "2V6HgHA1GsFH3Zfq7z9WE3N1ocNDoEpmk5B4xeieqouMWVbeeVhnnv3vBoNWPV2bYZ6UsQm27AHCDkJhdhNDXwY6",
  "key27": "2EVnnxsYuhLBMowasvA5MZNdnx5TN3ueoH3yBi8x14NWrvSB8Aoxohvgt5fNwX5tijPiRfzhSuBUwGR5VVnyu6oz",
  "key28": "4bDZqNpG9ahAAiu1KiTDopf7xCXhqcdG1zYm9MHK1WptnjyFDyfGsxvJRyAuADUsT9ocfEhzH1KsiZxTpaNf3Zx1",
  "key29": "2zU7Lb5sBDroZeQqZy3j4fsQeHnptFKGFASzYVpC263SMPgMn1DfUt4h96hRDZzXgVuKGuTrXUHDZBVybjZ9Q47h",
  "key30": "5a1sQasKoZVqWcGTQUXHKK3WtAemM7RbVSNmbpVNmJfMFdgyGfUfrsQfS2ZXs6CsG8jjV2gUrEmcXwWmwgNZfB7E",
  "key31": "RLyFc7HtvfZMYyBkqtuPGQynNwDdXyCA29xYYZGb5RoLhMkJpyn4XtjEAx3n7b2Kj2r1dRvRh9z2m1ybueWWgAV",
  "key32": "4q7MKVdVf5PQehKKCi3AheqgzjMXcQTaL7kjmZ2dHtgZi2KAEj6R1FkKQ1Y6UhFBmy5KqmEc93YJCovQjPdWxP54",
  "key33": "5ZzoWMKwtHbhe7XA4c2gyCizMJWVeu95Mh886FoLy4s7DE8cPow5zoko6eTP4VbqbzD764me96c1z3haD7HSu2do",
  "key34": "LQRRndxskpbabXqVCdxNYUqXBDnygReztQoXzqGyxYW1QTSnQLPL97CAtMc2A5MW6iQvG5PpvupC25AzoVstxLz",
  "key35": "4aMm11HXQzrKCKMoHp6xD1L1ntZBS2A36j5sZt4sBZPyn1MbnARzPyapWEY5bGHxvZvRYNU4MSw2Q38FRBAzy9Z7",
  "key36": "WR7g2RPYtSyV7YtNDqVRruXHJb1eRtguqeVbzkA6CWoHFtbKmYBzgnuyKqe2zL6mZGEgesRnshkDH7sjRi6HX2n",
  "key37": "C7SstjP4GQXHZWSgPczdhEpzoHutBnbBJGs4BhnZHBXAfw1tG54CZ9qV7PnVwtcRNXaZcKuqyeoWdd65GvacsiF",
  "key38": "Cx3Be3DV5GNG2FabzJyi1awY8PLfpkKjdRDULKmZuVn16L8rE2AoZCgv9ZNGfJU5C9HvqdwvNrp1TrCT6aBTxvG"
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
