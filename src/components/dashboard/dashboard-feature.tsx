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
    "5f9kCdgRquFjf9i1nppevCk6adNb3BitjXjtLyUefwYi5cPgWfkLs8tP9DLZBMAHNhpSHgv8Thq3yiGrF7Yj7cUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cRdaNyJA4kwNaKFmS9QxZuxdajBmpwCfMiUwXa8toYeW7V8ivCQaMYDX6gYmbyimqU71TrGyWpoqrzGhPgmYwjW",
  "key1": "32E2ux8EmKJWn9hhpRn4Pt3kMqPG6JHPjBjDmkpFSHJouanv2XrbP3UbRYAXFSNktWf5o9HRtmSC3cQMJtTbzLns",
  "key2": "AUPk9VGCYXK8mMcSBaNhyUoXtFnb6ykqM429DGVyjXSH1kxgejvYtt1qArgo4tvqYvECPCvinX7NkEPQYT8kZd1",
  "key3": "5kNqvJJf1ANFNmpS3a25gvn3PXiLtXARd1o4aYMEPUCGLYQ4JXEsaCr6JBLA5QkhdpMMCe4beEYomnkbPijKb5Bd",
  "key4": "5dN5UiNy81eHec9uyjTRbXs2iD7tuTfmFJnPRvTJfpQwQq7fysYFw1FAjevqLKhY4QvQiX8wMpvLWTQmAhqoK3hd",
  "key5": "VWMkmF8d3tQHPTFkBoHJgMkhNGXbN3m7bu2QXb6qSEtFoHysLpcHyJcGzGiYkfUW43QaGtXsPAMW2rWiQWh7wHT",
  "key6": "3uZpCpCgpQwmen6UANYF4JwofY2aJMe1dgePjWKgL6AAHPjAexqxZ65hpm6mKfZLWEwqBBh5iiKVBC4ZJGDxzfA9",
  "key7": "53dRHgwGq1g4eXWa5k9tUX16ndgedt18maRsZyenwVnBQX2Stgv56h1ChmP6dRxByH1So84dxxtf99R7L2cjCMjC",
  "key8": "5sKpU8fPJF6UB9n4opTYL7PqkybqygvrdnuQQj4nV2mPXgnAHCfmo5Ps6Px14eL6yRAxZZEjhAjW1Qse2t3RLtsk",
  "key9": "Gf9Snjup84xWcWhBohKF8CckDXeGmNwBfhvfoJJeUpoQdbxs1kdUoc5ja8vfxkaL87oRav532Xdwib8f8WdJmLf",
  "key10": "31rKfrris7P286esPGMXNASEBEXY16fApRbDxaDa2dVhNJnSYrSqjFgqe3MCbbmzNoDCCQj9h3KCBQHYHxhHXHUj",
  "key11": "3awgrGeyeWvf3zqmVReyWuoAySBU4PW3hKV9Fzify4vLTHb4wypxCuUPxZNFvtMfcYfFPbwYSAEZjiSi1WFBzHC3",
  "key12": "64YZ9pb3qsiHQXDdknyPSg2B9w5tG28ZgYHyjKSMWQv2CM7VZTBskev68VVCYeyUHaHkfBq1zdwMaJE2f69wAmon",
  "key13": "2frK9LA2G3P4kKihwqkeLo3eLBXXGWtqoAPa3QMra4e1zpu5pSKtUHbL3Gvfu9YcaqMjhvQMuf6nM3tG8SUzRLEx",
  "key14": "4j6d2AzSsagpLFfUorD3Mci5EA76AUaXCYQUM1Lv6hKW9AKtJnTF6Sxpztk4uR7Sfrx2b3uDCTvsRaw8Xnt5GxyM",
  "key15": "5RD2WMvxsGFEUWJxHLyJu19XHeks8tfoXD5vftspn25HACHQBHWZtiwCPmwe4WZb1PnM1fxeoEC4frVPTT8dGFMt",
  "key16": "TntX4prZjpTvX2hApenb5skFosrPsvRLjmcvdLNSHJhKqVVS3V4331GC5G11WdTe4BsJQygYVqiSTPR4aW8zWkQ",
  "key17": "459C6QeSe3KJZWmvU4sXBZHcrXiVZAsKtaTd4sspTU8smTJhuMSBMdgMEha2KJpCKLFY3wJouHKh2BhnQPfgTidT",
  "key18": "48SB6NKrPxDM2hUVxMxrm3Ydb11W7aiMxNp3NNP8ZWjr4hv4XUnoADXRjb4MDThbF4RwXnkqw7cqpoGzPm69K3DN",
  "key19": "3rw2v3JY7gCVKp9JVMB4Mw8grEEJq9bb33BTsaYcovcRFqwVdjhvMUpNMHjJ9DmeY9HWCqLpTiifJD2k8nm3M2pW",
  "key20": "3mfYUzb9u1N31EYRrEgcY9CZDHRqaVXi4xKpLZgmhxmkiByZxL7ZmWL2CL52evwLyE9eLVJSp4iLq5PjvK1NeThF",
  "key21": "5x9zHB9ytoE12E2omhaoSFRexavynPZ6ghHc82yLPXdc2BMywVoBTgC7aqkCkVPzWMY3xhvEmWWiYcAdk7ZJkpkx",
  "key22": "5CCfBGzsieJGUZtHitsQATbAWdin6DK1K4dNk2AcXaCo7hh16Rs4uZVSg8EoWLJbLu6QmeBsDNSKGdWtfK8RF5FZ",
  "key23": "5GRoxPfkUkuhNu5ADfB7niZLuc6n6GFvFgsBj8M4fUB3WW9HqE3QHyLWtm7y2tWzBn7owdhxEP6pSgsBRMcJsuVy",
  "key24": "2BAof9DAJnh11DLD4gCyv1ZhdhZDjk2bXLAXBLKiqYc6VM9rpnAWRYdz1cdp52btfTzopUWnxSqfFeE8p6oZDtEZ",
  "key25": "3XbX9Yj6omvDtuep1HG7Db1h15zw975nSmhud5DhcSi5uAF3FVuEL5ukCBG7tATR32aFaSAtgyViZsPne5brBfPG",
  "key26": "4Awd35Zqp479GwZvAyyQSj3DiFBHvhC8Sy93D2gbwSJQ9JfSPPTUr32FbBSDPteqEa4xetjcGZWm3J91n9KAbXDn",
  "key27": "4rvD5DYgEvCZJTh8Tyu9FmNesUQwbNkFPs4MgSPkD6EUhfmKSR8UzXcV8HwNdFZ7T8eKWndhkVX9aUXexZxX63vf",
  "key28": "AGJUoGqoXim9n4UKLHhcoMheqYUZWqwjRZLXDcSxntUSReFEYgNMmc6FxyMVxiQX9CSQ49unRDQ6VVzF84Dvt8k",
  "key29": "5bw6Etp46bVoa3Lj5M18o8NKwFBPaQ3DSjb5DndxFLjvvsVUCaJxRoGYKCRARankU7BmykVjbBBJCdPzjxCbs44G",
  "key30": "78qeeyujPFnydCz5py3XSFADWN54fY6rUUnU5agD6wxN1p1ynCnvCXnQBW8eQeHzzCbDMR3YvNQZ1UtS3TSxz4R",
  "key31": "3Zs8qFpFybBuovsx8vinAbFapdoFCYRwAcNJuRYdMttSgivypRoWzvv6S1hPyStGf1y2QDX1tKmogyVxrDBheeWx",
  "key32": "3opfRxM1FzFKpnaBWX4jk5vr6Ajv37v655yhegMNz68fsRrW6T4JUE4MSgnsGSWFMy8PNBE9R6BztRzMy5JGA9FC",
  "key33": "9ZGMtAc5Gwyn379dWRx6VDiF4dr28DHHCNQnzzBYd1x86nbayH1aYf8BVysvk1VeG9SkNvSNGPR7wZtthaXoAnS",
  "key34": "2XTAD68SfyiSxjTutLM46vrok83Ucn4PjgbeSh1s6GcZzaktjrVKxT5RZXNzCeTMtXTMVM25hFxYN7FbUYCvp7gR",
  "key35": "2tbFqPbDVAnyg8cYcEe9hBNMLJK7QWNUDuNSPEC9NVJMhVjdXahHyhMkkwFmC4omkCAJNsiNjhiXNud62GuyV1BG",
  "key36": "4VNXq8kNedCptCJT4JgvmDkqG25N9QEhwMrCJHHRZZ3G67JRRALe76FMeGmwNKT6K6o6jMrHDrvbBVnYgjrWn2kc",
  "key37": "5aHA4vRXoSyV7Karp1MUtAKGE2q2PaWGEtNKT3aydDE4mdX1SNVx8vxUeHZUSfrrrgw4A7ke2PRmUcBXAofrycsq",
  "key38": "4A4K6qRoXj5RG1KGGSRdiD3MVKPPEWb8bbwur5AtKXG35UvrRHFL1SUqgNpNTAfBg3zcD81GxQf8R5AheHYoGBT3",
  "key39": "4NfpZZxjxKb1dCykkkJJy7esXrXS31MDKEYoGDnFnWiqMAXXNsAN9iYtwxKgQhBp38cuwoCsNW6HQGYjPQLDTAN",
  "key40": "mks9py5uM6c9HhNGNUmfbaR4pHzUheutqpswLJCWW6iFthp9y6gUmgETUHoFbem8jjUd43CkLyRZa9HPxAiJrJh",
  "key41": "4nq3Zg7vnUTNuJ7gY1kZ3bKz5Wpm5sQXEpsREUSfFepF92N2SjEmvZTkR9ad9fRXBStiUdJJuXgpUtTYo6jQrvtj",
  "key42": "3H9HGuihhoRDcNHzJ8kBYMjqHEP18BwoDcxEbiQqEZVjuSR3Cb26N8XtXa4dHUGcyCHPjhKMEFfdMinVsy4dtQJg",
  "key43": "4w9XyaLUkji6R4y2kc3Fak8JqNnfa6vgt84Y99UAV7CHQyXJLBPMVrYD7vzaBRBYZJWB2bLj1s8Vs8gV8C7NPz9a",
  "key44": "Noo3STL7LzfHEWnrRzzRVLnFktSqutoSS9oLKbMP23PMkta9k4QNiAt1ftmZhtEY1zhvWDnfgbaguK1Jn7zbC6T"
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
