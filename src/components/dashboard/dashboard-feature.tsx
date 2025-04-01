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
    "rZpMqtRSbNkcpGWgEzgiFrQx39GYVtjJFnWWHNwo75rDFf7yAsgTcVbxDux2rkKbC8f13Xyjmk2t6VFHS5yZ1XD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tLCg5kHeYeRZvxwU4FG5W7xv1sLcRhz3JctBU4wLPmzGbCQbw21WUyW52AHCaWJtTsVa4RTYktUFuYUagmQG4Ls",
  "key1": "2EdsnNN2D6sR64TrnSpcY9GWWNhgPK19zPh1r3hsaxDojBK9Mg2H49zHTgJDgtmDKTHHmHSGapNocHzpYDn8whn3",
  "key2": "5cxtKNR6CrJd4ChJuGqHkSbaU7TbB5V6PPqFTwRYVrhPA4RaS2szpUFED9RMFNHuWzKzwEpFEAhKEmMAKiEesqv2",
  "key3": "ApurUHSy2ZcXeZVfsV5pFfLAuZD3tMCHiqenocgVcV6YpWK6MpQveFkRr5ZWEu5hS4ywpvxi9GgLbpt9gifYqHR",
  "key4": "rLu3r52cNboUc6j5y1ftMZi6RHi7kqQzqHhSyBffTxtVkXMru8EtXULYvWtQmndNAT3MNFrAm6HjTxTkRPL7qHF",
  "key5": "52mFuor4ogqWCzqTLUzEoR8JG35J7fBmF6mWRfEu9jYL6daKioePw5TFK67HWFz5gt4k1FC99HjauftZcTviFFVH",
  "key6": "4n7j4UU9UAAG33cSdUpPxkJC5ee2YTTmsn7GE46iK1mKytQ3Pm3u8fn5sBt8i8gRdnvQNm1UfQZx5PnFhK61R4Nc",
  "key7": "gVqHZmHsfAzymDt53QQ1cdYaqTLZV7eepLzsj52rWnR6grS14ebAjpqEXvATvqRe6H2uBrH1VrizxHWjFsH7mzt",
  "key8": "2hC1Hnsywz85wps8AzeEHhcUMYyfRsLbD9BF2kST32Z4R2PijLGjG9JABrSJ3qktXkQpPo3GQxR9GZPdsnsyDuqu",
  "key9": "FUoHwdEMLq4afpQsHDWWgWBYKdrBf6pgph6Pa8LRgPNT9rNBLgnAcNKLDMiyPMUbB5HAcrcfRLzk5wmjexf6ojH",
  "key10": "3oPtyWi7fsHNzC1QSxnD1U3CAEE2XSNNzK1eVnNz2mzngDPYGfSz5Ki35vdJMMy97MYq27nVSDAMRBc8JYGVm8ry",
  "key11": "3Ts7zd4z7S1jtMCCEREhCb5jWRrHtZKZAnm8Q5iWEknWbyGRGUdf8tmN2zyADmkTwCx5XSLrGX7whStCNQAGvao9",
  "key12": "5X3VJ3kr1pigEqimnqZfLZko9FcsmXE9MXPhJybrDULu29ic6YaE9vg2kHDkESqZtq7pjY8Q2X5tPDP3ZVm8tDAu",
  "key13": "4d3HXE8Py7HmAKjLNmUo8vSwDQWhrjKaoWhp3jDEb6g2D9fnBiGFAk6pdKgfke6vghgJAAQKnpAvTG4ZNoBKNeBP",
  "key14": "5JPHyk7UEPe9A7CFXToS3m8roQrnB2RwGprfX48hWAefTd4ff39ZkkQLbT8jyoqCf2WnzuJAg3SneYTjrhVPfTx4",
  "key15": "5LKVwFq8abwzs3Hy2zH9hbGkthWvSmpwALgX4jrpKDBFkEyxJj7e2meyBbyEUqfSerWAD4kyaUZTqAPivpvK6zxA",
  "key16": "3oGPufJ3V8CuSpWFXgwU9SLAuRnbzBccPGTPiodjHnXebWVNwS5odzcyv8Wo4XzzMecbyYest3jLXYb8aqYZF3a6",
  "key17": "5NHYm2rHCKLQZt86EUpD89VQc5EC5kggCduuuGWQ7iPTbNKvzvqtaJjUp7pSwPoH7o4MnXGt7Bci4m5aVu863bbt",
  "key18": "4jwqL5jaiq8EWAEnDVxm7jGyy8zjvSaYN1MZzSKNX1SiDJ2MTjEX9hfqcrJrEJ49SzFePMeWMcJeFWL55z3AzG1T",
  "key19": "5mbKqR2PXNMWRk3BgsEwcBmZVtHtpNxeRihCXpmUspaXpMWxduWtrHiME9obkJQDFj2kKfgi3sSXJUvJMsmaAQnU",
  "key20": "9FRZcy1gc5cQtyFnM9JQEAgqi5eq9GUbFxVRMZD3NrCPMtLKcWqfT7PXJL2mtJgT4ri21fYyNaUHEjet8NqY5Fo",
  "key21": "3iPHNHTsv1hyNxk5tRa8KohtF2sYo2sNpuQ6sRFoyHvBUoZadfQe2tWwRFwA68eXgJoCVqw5PmFhmrpyqni94puz",
  "key22": "Mts9oJcYsgU3RybRZLb1diZYW1T61opMF1pT8eUqCwHrru1D7Vce3oWcCVJB9Zau5Jq4RqgHYc3VZUFyY9ZBP8H",
  "key23": "fQXEfcRLHiF3oQkjjc53xWm72FqDJQz7ttaDxYADmtn8mXfLvMD4K68uEdPUo7cywto9HfYYoMQGLzEvdkkkzUL",
  "key24": "5MxSyz1sgFkVFm8rtu6tjHJ3jefjVMWg8efWAtaH2kXdQJQNrmhGuomUkPUfGewsptH6k128Np756bPc9xdVqYov",
  "key25": "2fWz8JdMqiug14BZGMHXdcHntmRWCyCKjTveMuSM6knMDWs83J6xxEXjtKBqiJevssXsD2ba7CiA84jJwYsk5D8x",
  "key26": "uMTrWsY4AVymekYvsh9GidGDWCNSgjQLg2YkKSXYxPS6XdXNuUghGwJh8YmkUUBB715WBY5CmuN2gS3QJ5pVLqa",
  "key27": "4CsCnArNTadr9NPvxiAopHsoJRPnB8VM7MjWmMAhR7VWWT3d3pevaZA3u5eoRPHGb2fQLC66bSBB1GojyHWhgvZM",
  "key28": "3ttdEgbRxUZ2RQunyjPr3SiBmqWXGdqhdRWPqFZercGNcVWHreSwaoV1Vv81EADFKpG773GmJ5jhDgoUqcr4k9ST",
  "key29": "4ZPiX4Hp3eESaQQq7Pijgmit3KneFpGuTDKrZTaGbdqvSffT78LD8pYyRCgDg6J4HTpWemSBHerffzt1DvfyL8Vs",
  "key30": "n9gAwCNqMBqyRzSsi4Mtua4VwRxzRUwR11PqpQzfB6KtqoE8LWeN4uy5M1ePL6HEWpJowGNoGaWEdXM4BQNYvbY"
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
