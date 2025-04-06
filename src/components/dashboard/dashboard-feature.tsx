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
    "35a2joEUBwMsZrDQxsFxsu4yQp4fJVEahs8fxEHh1TBhUg4p9bXJdvmrCabHoCpQERRSFk8n21kZGda5VJLJTJgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QhQ2MCLot7azWYEwkyxBTtpyKqyF94rhP1tngrAvxcpzjbiiY6emdty6apwvJtAeued6rqHik6ZYXA7Ec9PCknH",
  "key1": "5N8bsf3nzmn892wrPfJEAuzZkuggrGVdDgQwyKvoXHCbcTjosPDJL6ERvn6dKC54xXYXQjJiTN3ftJ2T9gPRdfgp",
  "key2": "2s6RhyEJJkeZkRWFsK865z1ZqKX3qk1woVyucGcyrRzw2RSjCNoLRGmroyafChAXU3Pf7t3wgumSHoPjBYb8iM2",
  "key3": "34PNbC7tTToWCw45mEUakbbzF4SLZRs3wiUBQGhm1TcYGcTV8bFmWhodhN22tuCgkycZ4DBBSpfbywEirEnpYW1z",
  "key4": "YFsm3wCcA9bGnBPHvWZrDV4Li3Kg3BJYTDRhrf8fXXrhPv5FPLETvEhJmfR6QPhxFgwmPVPzkWeSrTenhrS8dp1",
  "key5": "2gAyoiXoMHjvYE18Btz7ipBfF7bwqD91jLgK6b9qL3RedHNqTh5UTQbEfYnnVHQqcWgVN8Dho9FEnpUnEujCP1Zb",
  "key6": "4yq7nXDt5tqoAjYX4TNnwtuYgp6gHauS8Cmfyc9T8V1DGs7QkVbWbqgGkV4zB3mzutkcQoC93syqoMVccp2E6r2W",
  "key7": "28D3HX1ur2a5NBejgfsqW3WNsvELL68r62txGUnwxpENob4vZktzwLyVf3kDiC5xr2eTvHNLAfX7tBW5fhrgkgqX",
  "key8": "ibPeuvMBxAcvgvuMHVi3m6Uco45tzJiUMcUAD3jwJTmNhNvDbJcN7Sa7yK2NeLPoMchUCaXeHrpLLgSUMEf5pr7",
  "key9": "5eC2sZV56M6sjquPKKzJzwwbBdayvFgHkMTU1kqcyVwK5kcQMSbasodcQnw9YAn5NxfmNR7vSRxTGxL3WobrVZaB",
  "key10": "3VJc329EjksRXHmePj9smfRMMLXL7X2TBGw7ph9Ba9mcRkvySG35jLoeUzE9BmgEE1JgFBDHKthSYoFFU5eqr824",
  "key11": "6kD41z9JvZL2WxZfrUohC52b7yg7kqeVdmAb7TPB5BPm5PSyhUeYSn2FFYARJhxtenfkbayiFvdy3JimpBBaB3C",
  "key12": "2eP13Te8VdFoBX73hZTv6uBjFru1hoHhK7LpuQZ4TktHvManWozNssLfFpnMv2dwpw8VHES9Br3v1smA2VBYJxTb",
  "key13": "5vX1eHu1Nk2SpV5ndKMCkpxFnyjep2sCm6swgqK3NqSJgN2zAwZN1cCz4FR8uFtMhxbWARyQQVSGRD79CSSkCrwT",
  "key14": "2RyBhPeMVQ6LaNbD2D4iGfEvcs5t2kLAuPB3ytdU76zaBE6L6c8Kjsm8Pgj2SBAG4FbxN9Du9A64p71iZ6tMSvFk",
  "key15": "4wND9PuPaE4hwWPSJxFAp2QTtN7LMxdWGxpBQFP18vGVEkA1ytJA3eSHGokD9cK3pJY6YQ5PYrmnhibCgUrzUbCf",
  "key16": "5hcnnG2hjad1TgVC54nSvsfsWd7L9Sqvm7sHVDYVpzc8fvwg6YJiTRy1FVKKV9NojzvGsWVnG7ghtR5Gnr4puf13",
  "key17": "26uF19Z6dFsG8DjvD66GRqrCfSYyaoxesrPWGUBLfKwuubZZAgpyEBndBBdqd5w5oCmb2izaWXKm6kQpBZk3Wcxh",
  "key18": "5nEEkCmUDovuk7i3nsM2qGDWpquZ8muoZLHFbhf58k7WHkMtrsAj3V6pzDq39qrkhdhfQQiUrAivaebpkheABDim",
  "key19": "4fgxRwUhXEas7C5c7skwEUbut2y54ULN2VccHhQKoS7RKXwMubKUihcdH8Dikk6xatomGW9AVP2eTo3EfVzmkhoo",
  "key20": "3RudG7Tt9wM66cnN7wBd7XTHRAn3cqHb3UGinT6tnCvFSXw53G911bWLQHt5TWXavUmDHVFuCvb7KBUg8xgcjTxL",
  "key21": "gPYTxfGTrSrFRgoVWF1m8Vao37iV2FjpUpAV5Vx2Sh6Eya6ojxM25FakWQvT82arkaKzzXNuoywkG7sg3YQkiLQ",
  "key22": "uHDszNuxxxrGscHzLaJ1uVMUKPBn3tHJkznPisgVAWG7MCMok4ouhnRe284ny3b8beuX1hR3F5YZYWg2GWuM9Au",
  "key23": "3XwhjA5AsPfDxBwmYoGMyTfxcZ72F7Y7gpEeiisEgV5n8xZagFNxvSzrYP72pQxw2mx8otASRtHiM8m4eXszNXEB",
  "key24": "674CN3L1D5vZujeNjyhtvThfxzKUoXhAnfjvTkZ76tYYdnxmW2cFqYQvabchpSuCZhKjannNx4t6iNzzV6YSUfWy",
  "key25": "2KqpJZtUAmbjKMLccwTeAcz4wqbxmwjAccT3R8kJ6LXgT1WMyWar1fZkWqmLzmS1cXWcayn4ExH6S17K8iMxcUwd",
  "key26": "22NUid6QTMU6P35TBtupU3mv6YeHpRVKAxMJM1mh29gvtDULmB1LGCpnFRQLWsRdQBKFxw4rFEqXcCHNWzYqZ81g",
  "key27": "4dvRKAvSBCMumSDJY32u4DkhPHPW7XJsK1Jy4VaTmBP2nc559HdEawTcZDqis8vs9DuL2L7FK4RDALYAMYdXdn1p",
  "key28": "3xtuve4mxxPzvwHpmonkxKVV4rjWsmKWsa9ojPEoiiJDgspBQmcjEU5UutHAGTiYHQxkuUWRAfWWpWuepTBY15KS",
  "key29": "5uwJFmJV2RHKo8oBoNymK41otfUej8u3zALraVio2mSPDir8DEDyEngriM4cGH1kaVTnhqQmX7WoTJMdSPpuUCV2",
  "key30": "Zh8WabArFojCWiCESwWeRf9LAYYszum6khQcyv1pvZHkyA9BSkdph49vsayXuvmZtjnvXXxTGyuPfCWhdTKSUtW"
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
