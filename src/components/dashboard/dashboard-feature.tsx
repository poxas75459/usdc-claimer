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
    "NcqinSkz7LLni4RNAyd4kDYwTYLwbUqiX7MKG4wKbEfrRYxygpKR8fyEDVsCE9eEQnLyjTFyDoj3z3zNiNvugox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NA9E4FZVEdgGK4zUaFRDWQV4Hcbw5gv3ZVdjphYL69oLYorfiiX1TQ61mYKTW7SNZBjNzfjN2J2aL8hbWWJyWHS",
  "key1": "4n4sEGf4ZU8dy1XcZMS5xb6sYtmmps6dtDXPCbk4rbMerXT3yqK5dvh58KFyvt2Y7BZqEWGUJicUdypmZ7jEd13q",
  "key2": "5WGximtRKG5wXQsAgc4643kCKiH9Qg9Ln87eQiD6mRNFHWNGZS9NseL2nRak9Ln8kpYWMv5YHmNviMDHCRFu6wxt",
  "key3": "4TUPgTVkf9sUhv59mjivTU3zSQ3jGr3b4hwxD7zJQa83KHKVTMeib5YfzQWdfpkuCSebrst7JHWQSGyHht4BQeWc",
  "key4": "3u4cX8tJPpEYFSXBZfwLhQEM5y2w6Gx79MNg8xKg7Q3UjWVTtSHpPVUqS1uhmqFmtdswfmWQPqXWyRJMK3nSAC9U",
  "key5": "HAuhYcnuaBf61wpWhED3pVr6kB45jwYciVx1TgqxrX4SGja2WYAPjm7X3RwUDrxyGSc9T7q61JpJv8eBdUgEoUa",
  "key6": "4aHpSQBG5mYHUQ2aD3i2yPxHRXSRx4SwgZonBGxc9yqcFPBZXpGgPT2XLBEFxC4vwfyVXgd7BscYgPgp1c4RrWgm",
  "key7": "32pGt5FKgkLN4PFv2RnzXPBH1ZMoujHjKdkfzsJ4MJyczeQzP3BqvY9iZn2Yjzj9HuMtJMzGLQTDw1kHWpirENtU",
  "key8": "4BvEoF2u7tRHKBpgapaE6TeEB3Sif9BRcgXHbUzQBZonoaoPSxC7GeuGmZkHGS4CiaUDBKLcce7Q5B6yKBFHjsmK",
  "key9": "3xHN6JTKAET1W62We7czZvuVjUJ4MZatHophRrAo1LBmbEsaMYFrTFPQYWNrXy5mhxT5LkPegGKAppiHvHgCu2fM",
  "key10": "5tfodMki8yxpib66DawDfT6rgbi9Nax97k9Ze9xDMkTXa1LcLjhuNZ9nBrWByr5RsV27zb5B6YxCGQc3DhtA7ydb",
  "key11": "5joD4w6tqhqwFtPrrP7dcSry2rEKJJSAuLiocxuuu9WE1cHa16Y392PU2E9at2h8xikiQ7nMJu7AMaSzHnzwpWFv",
  "key12": "2VE7GqWQiaq7DDNbtjtMaqc5xaJbjrw32kSAxudHJAigRjAYXjbQDchFHtrKKGmNTm8iRevrxvJyu2mFHYQvd9Bk",
  "key13": "5kcBixM1fkqCcZtcAsLGCWvJTHFtU7qzfGcaNaUKQNjczyigZMrFkh3CYGFZojqScZcXWoJQuPPapTkqkgtYZeAS",
  "key14": "mmfz9h2LChuvF5aPGNHtE2ZRbncrhxU542aqwNabniQqWibhaLxRxAraPoBuh1tnH82Nene9UFPf54RVd3qadAT",
  "key15": "546SaxFGU6HMUpT6R2F2S9tNWsQ4Rg1GNhufpxER5qyi8YyYB4VKiW7Xjr7RthPL38EHRvEd16LVRWuJUfZLSBSY",
  "key16": "3FTLPqLEUj4LWLXYBjyP3QX3oQnfefvBHVVCTouiP6Umbppb3W5pJ7eWvk1BT1YnQtb2v2Cy4eaC7ryUxFNf8fan",
  "key17": "64WaRp2YJPsFVHy37ULYCMY3xHtSt37fHV2XKce7N3eghWSaGDp7S2XSPctrGAXPTbb93ZpCNeZW7BJXWgP3n9Q6",
  "key18": "2Rm96NDAM1DFPT2NuXH7QGZw4Uij2ertZMNqso1m6DbqiWnyo4fHeaVagwuM2o9LTSPdQhHVhgHMC5L4wExb2t9",
  "key19": "5AFxBRnftGnPyZLs7ioiZ3PCymXM13ohfz22K6DbcSMz5DAZEYoKq9xKngSbqdZmRY9LVThGXVyxo6Rgb86e1juL",
  "key20": "4A1JSWsiVDx4Wt48SqKiPCGoJs4cUtHVvzuGommvG7Uk5QtpZmr5Q44EpvsjnR73pbAVmhiyT71erkRhneviDA5P",
  "key21": "2Wx25nkcysUVH9MQ9aeiraJBLxejNKPq4eo71MGmtj46vxYXxSHzANq1QWHvs2CebudS61NqmGHHJSdYa8PcPLEv",
  "key22": "KbHXExZ3k3qoJrUtntigKaZMiT3vG23pFV83cDdgkXpUG11UeAXpdo5CUDUZXKYZNVDhW7gWUuNAZ9yqKj8RiAz",
  "key23": "ufhmc4ttKDN6VmvVr3NJ2dfbQakmnLYKuBmz2ncMAW2FB41fo4VxxZvFLpvrGvzzwQt6sGBxE9U2SdXBJo1zwmr",
  "key24": "3MnHi82FBUR8m9aJPVBPMjKS8QoJSZUF8DKur2QS7rECsSvLkGAwCuLnoc9cQxP9NGHNkq6H2G9rA8NGPctXig3r",
  "key25": "5KGE2pWVeL7bzpweaDU8qKqhTByViJpa6jiAUFnErjqH5AWaogd4U6U9mDCchvwoCHbXCXoSNaunNpCaVy3DktV3",
  "key26": "qL38H6Bfuy4wZrRH9UCZEF79iRm6WKNJtQzvKi35tFtJ8LeoUPd6SM5WQiLfRVFx1nqXbemdquTSKZPvnSXPu8L",
  "key27": "622P3WjTW3wqUSgtHbvZ1wwzX5g2UVbqNUdkxL9NhhntqygzoUmtoBrC7pRDqhe5hV9R9Kk9kpsakmoWwvmMALSn",
  "key28": "if2kYriBzn25A9sVRHEjerhzsJfY4dnEUaToYT2yTwjurQobPzsfWnRhi3CMynuQHV15nNrVCpy21XZxun97MHr",
  "key29": "4R4xp131AK7v6sBznND4Gkj973eU6gFMCNAjrhEaAQhSpDEMmLK2eHHyjdtSHUcfZYph4UgqfNcePbnNHBPmbW3b",
  "key30": "5r4MwnHPQT9jmgzu9iFUJxbWWf2cqUn3LgbcjforZ3M2n9VRTNHSe95eRdKmyQC44x545srpYrKZoouxq7Fw7gWx",
  "key31": "2kx33QW9HywFGuGr1DcyEEZ2RVSRAGnJUmi24cjbKJHVYtqFuqsT658yHqBZnN47Atqet5LWftdNzS83wp1cbUBv",
  "key32": "3WtyVrCE5NHK5W9EgfTbSCntpTWUkYyv13SEppghGeFRLNgbyLWL13n9FVYgLcTsViRjmRPjAjAgygEydA8cHapq",
  "key33": "4oeFkyxemguwRDePcQK3bfTexRQ7ikcPZycs4EdzZS55JJ6BmiLZBCLmvJ1NT9YnNFdm2sWvi6oPyLAiprMNX5Jg",
  "key34": "4rnCPaUMSY2pTrJcjxZR91SvLzdxaxuMKraEG7vNgi92RiarEhCV9vFiP6cKVwbgJRcA8DKk28Zw35GU4YzLzJhu",
  "key35": "3hAaE8b89sLLWfcZNfSHgsJ62XNL9orDweXSjTB9ahT2FYp2ePv4JvWmPJ1RESdniYHwbr3FxARGyi8zWoVJF1HF",
  "key36": "QoSNGBQMB4D87HXitiZY5sUL6oZtbbxKMF6n58xxx7hgbmQyp3kHR6e43k1rpvRgLf3pHVjKdXgm3TQmLVx8CTe",
  "key37": "5NR71KxQpXxWVJKmF4QspRtYZYrha9cBtwosYHXdbxV3U1XXYMrWvLFWd41RPqviQ6umwqUmvPq5HadQdTS4ZcHS",
  "key38": "4t6xjcWnmA4szvADvnNqJN2WzsKmjEbiaWmxEPS32rPrPqzbaMqg34vR6EtFsge3vNrx3tpJCSi6WG47NuAyzFiA"
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
