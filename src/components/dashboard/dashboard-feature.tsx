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
    "4YjWBMijXPgbp7j3WZpfQqPYQa8oEM1uotwLaZYHERLEyCMBZrhsyAZM3EiRwC8cJtN9SSeGHT1fTwBf6LSbTFaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45tjSFsFuYeiyfcySeAqhtCtjStqZC68T1WtnQDiva3LPgXSBFuYBHmUoUvvU7oJXDPJboxsy41SNfuyZqth8Y5D",
  "key1": "C5WNj8uVtxru2hvxtzpUZzvyRCDBY9Cx5hWeeytr6EmipRPZj7e2zGLNwyhvCQAmzR9RrmfRHtq3pjH6ShwTr19",
  "key2": "E5UutX5Bznay4AYh4VyngQ2A4nrYT5zVEYjjXmnpL6wXNhY2g1wno6JyN752zgky8oxZCfxhLwPqbxCScQXjQoi",
  "key3": "5v1xmsSnZQ6pLQnyoQzDQM84UVgxJ793dXv4X4SZ8cCAfexE4r264modDqE4wUhuqDqECrD1UBUxaVWSDMzuanFH",
  "key4": "2mTxRVptj5AtfunRMbA6y7dx74E7L7RegvVpjzvq1XyB9nbAgYey1rPmEf8KHbKfLU38d3pAEvbBFfNpdzgezweU",
  "key5": "4a5paeTUm6xy6CbJzsCFEwALqmATUbCaxpc1gkWKaeHoWgH9z2NGckRyY59r559rD7bSSyVZquSnbcEcQW49c9FR",
  "key6": "3v4Byc21XN6DazGLshz525gZWpafj6N7SHVG4mZaZZdqzqurLFbvcmZqCJuuznyfsD7beNjfypyPjQVBqjYVtLV5",
  "key7": "GbRGUNMPCT4PTtsx2EJc5KWyUNAkxGi94odfJRK2UXBeg8BEvo6L2jT5VAo552sAcmEqHPvbUMTbcN77Xd1kRnz",
  "key8": "4EkqRqCZe6s1JPt1bXu3eSmWtwUUx1B8thv53jsNAw6VxyJRFcMcG9qZnBdxmTasXdZUDDGESb76cmvCMMrketoB",
  "key9": "2b18vFoCtBjUUXB8cH71ddAjCBEJsiXCJ8zo7BAts56Ko3B2wTupMct2JrLxRgiyVYJNB4LsrvAQZnG91ATYzQcy",
  "key10": "2DAzs7CgAqm5cqofifQLZqBEvUKbGN3UWDprdt456moUukjmaSHgfpo4sXvP155EEERKkrRr2WcPXaEov4KxbStF",
  "key11": "4rCMcCCk6b9BJiCThBHLXVRTZ11VgdcxLdnUSbmerciB1WyAG7HUKBPdGJJ8uT2xZAJQZDs86abM9gP8MnfrsBVJ",
  "key12": "5mqP6jcbehQwLefjdYNGpRe2niD8XhD7PDRnzhbNCNPn3LLkBNxztnCYh7gYNB4VMrGjkdRw1aYpw9jazKARy7a9",
  "key13": "23WgyXgvgFRswuRruspVjsztoEH9JgHSjaxayWEqBfkY4PegMYiC1Q35AdLhQQwZEuSx9Xtg2pnDr6999k8eaRoY",
  "key14": "4Ngb22sLUBz743dHYxymRjS63QiNM6t6taJnVpvC35ZJzrK1vYSYsHnzhwXXa8aR1eJHQ5Sf3Udw8RbnrDAgh9iG",
  "key15": "5p2RZ7y6BZs81FXA2CSmuav2cRrTTBbDEyKC2KsJiPUNTfBd1bh1wtFLgcRs32ivPoM3jd8ddwhbJfmFLohbSk2D",
  "key16": "3e8XssXLpkd7xsqGd9a4vLoruNcaM8asJKKdzE1REWU1ag2AKDdKcKKCBiUurKxpZGUxJGPX3rhsQkCwdViLNPQy",
  "key17": "2qeg8dSFqdrXgsonvJ3BbwTTPeaexxkZRKiJmoxinczzehvaJhcRqEq83LARf9bzPoMgWEddKaYKnL8ppx1kMLCG",
  "key18": "2t6GJ1NyyA6WxS11GtuFRXfTNnXUzcuY3gkeZApMHRkLvHw5pzU2KdHQD7u8LzjQM4eoLW7KB1o71i8fP4SQ1sZf",
  "key19": "4GaUs21JyXfu53eKApYfPF4Jt2qwCL1eJhiKndkWfcJ9xyLDXzrJbAgBbnFvvqxkfdG1rNk3Uc5Rwcc4oq8zHqbc",
  "key20": "4Nz3397DRuRoRWN94PiQASKNuu6Kcv1Pb1xmXvt2g6dzEzQK5HwNDq4xhQDyWbrZ5PVop7LsqbhgZL8eVtksX1ba",
  "key21": "4GDc4UcgZr87VFRdQgXGqdfKXErhegqHeDz5kcZXwEFf8KVTjAetwKkVEZKfQvPBwZMhVoNPgpkKGrnRDqm9hixt",
  "key22": "kdMmvjdPiUTjofqE4YdEeE4sthxVu74KM46LcwPSLyVKg3cH5BJVFznTw9YuUndfwicEdRK2CYcn9szY5592AJS",
  "key23": "2GWBwyz9CFSfWg4ZiUdA33nBxV55z7YXhETshBAyD2BFvC6MyLaU66TPAV3VSSf8tf7Grrc5FAofNXGcLhpEd3Kt",
  "key24": "zvGP566UR9KPMCnDab1bg3pjA8jUrDebFmjwpvXtRtqeE1KXg7utCJByhwwi7ssfTxAK9cJyDNt2oAJWVUJCFUe",
  "key25": "5ReYJtq143Kh1JbKMTTnbtQj3DrLRtm6Y97dXg18BGPwVYanGSKuzFZapQg3qhn6ZFJ3MK3jPoGxMdHU5PB7N5Xw",
  "key26": "37pzJvo4zR5PmcpqGeSvHEtRhKx8NkThJXfGRcbCTUtFtXUyKZukeWbeEq8wV8VfzyXZkHpFcNXiVLJcqsZmMnx3",
  "key27": "5co7dnV3v3CdGCzrKPMdSjPcFBEpsTVfz3sv3sX7S6M3vmoSEDyRqZsUJpqjHhPNYvTPKMwQs11d4mC8NXJeDc79"
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
