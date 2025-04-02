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
    "2EeVGZVZEbnvM8L7Smo96mp1vPg2wZ3fwqUw2NpQJUzhQqqBkrnrPHLN3w8aX4UtsSAPaviSKGWKpaahtmKgQMH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wRqjVEACLUdU4UFtBhjLaNzhA7ab9M1KPPEM7zEVdhKUVoUJvnHnSuF8B4wvbbcjDf43gAKGa8ak1vZm11UphF6",
  "key1": "5Aa8kGXrKpnZZKQok8pDqqK62bkkrBti247dRvWfotnzY4PtvRFezZFtQrV6TxkDm4NMUQG9WErTxUVJm6vpX9Jh",
  "key2": "gSEFpfTa3Det4Higmu7VbroWLb1EGFdBASC2GTxKMZACQ32zAQEui9DETQuJRhvFvNevdVUUCLYRJCtrTeBvnFW",
  "key3": "2pxFyHnb4rwEyND2R5WVBPxxWmzFALegknGMvLXEEH4DHjKiDT29agAwqopa2gWwK3y255SeEGsJDfbZycPTt8NN",
  "key4": "2JEspZRsmtuWRhaXMBkfHvuDcP3EKFhBHagBEPWhdzGiDXVK9UTBVjXofG8hLLDnLUW2Mc2S8wo51zgJJ1d1PX8x",
  "key5": "5KjCPNxftneGbGuzYY9AyDmV3wicf59wDzo2sPhzZ9AdFm9EiiwKPC6KS4AhPv4QbbAAHjbTCKaiM9V8eNEfL2e6",
  "key6": "2BFJE1b3auw2oZFA4kp9SeajajGBm6Yv5NLJ8JiNKmeyRh1gmTjhkN3rdRcgdrZ2U9uyaE849prsW2WLyerXPBdC",
  "key7": "3rCbDszceeWMsjv56AEs7FbX8NQJALjswwGEfXq2XefwK5YzjETynYsUR8Ksbfi5gcJf9jeMqZBLfTUBXk3xfoUu",
  "key8": "2CHHZ8Q4tR7vh3WaQfeC2bogxuNf4BCNESjSiqFUD3FhSSzWcyhbpyrTGzzsfJPvgJRHD3N89aDTMLsE2MwNJVJ6",
  "key9": "55pCN1mQUH18gnMtW7tFYzoFWupbuvhrLxzMzA4V6uNtLMXdfZ5PvVYhe4rkEoxFNxDRB8pMBa2e6M5YK3iE6DFW",
  "key10": "ghpMj4HGjtLu5h7hXWXrsU3BLTTJGAwcXSRadZV7xbX9NPE96rKQQKsnWp9SKvWoad2c2AfeEV8qmhWRQrxmGhq",
  "key11": "2GcSjYdXwuYptQmM7okbD2QJ1ZJJ4Wiy869GesMf9F9wsXXquEHhyFXt5via3vAmA7SVmcoSQq26AYKdRjzHwDV3",
  "key12": "2hGwJM5miKxwmAswAecT67TKZPrxYQoDKcN8nHjT44pT5xbzvuhgp9GTmQCqYXu6cNftxJG47P7bcMAsAVfa1GH5",
  "key13": "65HCc23nXfhQUp8WCaBkXUYPuym4P7YHXPk5ubvvnU8RvnY7H9aLHKwq6Cf9qnSepmsjtv1wSGBh9e3Ffw8YZHvk",
  "key14": "2JoUsvtKmpdFMjR58sDRHHheq4MfDDrBmn5KpqhwxkHfzhgzBSqdMUNWQXzwnAWXz2X53vxRbDK5Qerwjcj3sDkR",
  "key15": "4qSRhqemQ1ev8a8BuMWjfqiYVR9jYfiMZKZPiikWoE59rLTRffmVk7LR7pBM9Q7G3YixBRbArHy869gwreV47MBo",
  "key16": "4K5peEEHj5qXHFGJMC7NF3ATkCY81SFzrNcxnoMiabo6XTjdTKKL9yBCTUEREN5Ce8nQKnj63kBdinnjTUwzhKYr",
  "key17": "3YQp1Rj1u5sqrFfaGC7kfdG4fioCY6mFKxrm2ne2XcL1xKrR6uFRYQK3YbVB5pPScszWAfc25QZ2uuhgPv8Lu4ov",
  "key18": "2vHHsAs2PDgmDhLrtw5MnpEQXKo48k89g73WkhesJB4AetUmkyvh9axdhfNoqzruZboNKZ8r5GYqb8auD1AK3G27",
  "key19": "bUaYo9UwgL4h3PT3q1pjX5Hk7NW3fGGEghV3DpyFUVCT5bnGsMUHoNqwtDxizTNH6Z2HDk3dZyLn71xTb9NY4Kp",
  "key20": "23akgf91QR8vZ4sbsrHYQf3SwyZChca25JbS3SKUCotMakqrfYeRDk7Yq4CaHgeQNNyfnjrC2XW476yMNDkBEWCQ",
  "key21": "5Ey1rikb1yESZZwF1iyyum2Lbb9nPTrorC658gPkZvj7w78xVtSL26VL4aPLdAiTaoDaiB5mJQ7dsLAjVje1Udi2",
  "key22": "ENZ6zFE2VFKwtxqacr3JD1C6VQrwgUvUsZMZ3yudoYWWNzgTAgBuri2GvUL9f1bs7bEwCn7MVGAABfEjiNoqAbQ",
  "key23": "jRKcTpuGzxFx2DDZ89tTFRC1q8kTRYKyDuqvbjEXkx9RBeBKf29GCgNQdHx9oDzyLpiHfQ5ZEwjrjNkJCf6qoip",
  "key24": "1MCzafWgzMCgiCjE4SqjN2j4Qx9oieg3vnER9pDCVb7iWASJcPYnsCCXu6EUfbT6XrDHdQnBRpmfc6ep5d9GkrA",
  "key25": "3t8Rbgagkccsw8FHSXfpQ6Wj52aPppW4brfN9XoxrUqw1znCS5DbbDAooPnvw683zBxcGSqwUbHBzSVXdphgTKuk",
  "key26": "2sGZvQCJTfC4ZWuecmmvHnAKvLexEygkVHtgPkx6axxYCWjDHX4rnLCP22XTdK3kpWbfbgCEs8GcRqbTbjaCknKG",
  "key27": "xSpN3zmiwPTGF22K2BZgwGtyKQqhdosL9m3eVTPfB3rvX75bBStVDVLfdtnsvzhjPeU5YtQ8ZxxALhb5cbajfsE",
  "key28": "n1fcAYKS9YDsMYAoqpsxcU8s3jQvor9TrfopLoMPg9XAKyAJGuz8GeHykZW6NtbaBAqb415vCAi4a5QEcifsCyH",
  "key29": "pZqohns9Zm5FScQiKthE6fV64mmanVnKn6xRUzzu2q4Z7G6Dq1WZTCWcdrmfEjahEub7ELY98DevfsLPSzgL7gv",
  "key30": "4CxUzMNk8LLC6XQrYbFx9HtgJGNKx7DVS7Cpa2VCpJHV2WJcoS8F6DEygKuPJRkq1nZhkGgNSgjDfmR7SZoX2yRu",
  "key31": "MHMsWqywYMskgDMwgAFNKKJThiKhSQb9WKoUd5SoMLoaxaoPPCx3pAjokrU82QPhNcK5Y8cLGgX9PXbYXrTK5th",
  "key32": "3izjaq3PdRgqcQzHr2cr2ftY62gMAT2Gc7m2Ti55K392cTuc8cNuYanLzTQ2jSDtvnA92BgybfxcCfmKzfhexzjc",
  "key33": "5pzouFN1pMLZhSMxu1fpRHt3drfBaFSPBruXDAYGryH6Kd4rTvzdaLruthhEWU1upCC9PbL9YvhW13BiRKakXapf",
  "key34": "6voDaFdvqFrVH5WUzCnCBf7hSRUVysw96MSSLjLctA7qFmeJbm2j4y7Tjrh3DtKCcSXPMb6GFAfbJ3M9GfndzSb",
  "key35": "67eZUis2ywL8ccNcnPXUf3eNk36SAho2gZdC4zXidho9aMwhNTaf39ozh9myhxJyrRTmNT9BzLzvBoJHsDre1nzk",
  "key36": "3S4wEGAU1NdezqQJZ1LNojE3Pzad3ao1A1Jm6vedEfSNepjp6XCqsam23bpWUELkgnfdi6NsEngiy7b2tYvV6Ecj",
  "key37": "2qBps6Gb4P9NezEic7k5DWw9LcPEtBpyg6Qy5xbUsgXL2R73i5xm9mjnSY1idpZpENfQo8m2WN1zBZYKNMjycbVj",
  "key38": "3RErAffVXQRPj9yEAWYBbntNX1BHkGp2noyCgxr1g9C4Rt3LrLV9iuRzGLjVcSJwHCYfpt3BSuqf5tXQqngZhBzi",
  "key39": "2vU9zx72uZRcnPSWf7hWjKcXXEEiSVWqrLRzRrvchxxNsu65vfBPmk2XzcPHxydYjLpaqadoSDTRMbNSUULnmrfr"
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
