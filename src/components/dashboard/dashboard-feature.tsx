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
    "3c2AAPQRqLtQDSpev3ui1v9FzJGoBTadM4fUxA3rATiHFYd8Pws9amX1X3ejZF84DYR58W9h2VbMMGf9nfoNdaRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQjhzohRocyGdi2LgiA8UYB8LZTysmFzLDLSXNaNyecUcrXme3CmQdrweENrXUnF6BPjZfoRBV5puZp1xPoTvVK",
  "key1": "S36c9fxVsHZ8vQFp6NPJiPq6vzsjU77bVmapPxh1U74n6ZtSTD8ZTkaX5dw2wN8pstaaKS8JgJ3ordLVtu1e397",
  "key2": "4hdhMoPVgtcNKGjxY7iHWLoB9iMCyFcxt858szFKGj3DYhq6x6qVcTScsRmwtr9L92JWrakrFs5LuXPWdQiKV8wc",
  "key3": "2e8ZD3mcSNdheEzRLH3xYMPFmFF5qSEwytA6ynshkfWJgFYqEB8FFDsxW8sXEWbFUahPJwGfGoM6VfMrsNhz9JYk",
  "key4": "3kDFiUGRrxT5FMKNinbMkERv5ToiHnF7zPqZjKjFESEuYBV2i8kVox5cfSmpPVF3UsvXqLX9GupZJFVJVaYTMtwD",
  "key5": "21gaG7Ue9TncdhFuKm4rX1gLantQTLjZmksWKWUQLtPquxMTowy61u8eg6yPWrfJHB2JczbK8bnEwBCvxwLydS3P",
  "key6": "4tFLLSvdSzA9VsAnWRyvNyeKndzS6uLoLL6sanmDEhpM3JY5nkY6WepisAUUBVtVFoBLmgpJvoQ4EzbCt4NMqH6E",
  "key7": "35SmwZDjRAHiNgaC9wyNdLKPZqoQohC561xSSXFRk7Rj9PnhFDUWEPjyt5UM6KG1sr6x12CNSApZLBLkHJBhV6nu",
  "key8": "tWa67751boUQ5g1kKwribwNvUhLzkJ6Nqat8qx9kUWW9Kz9UfeJLRofYginjTMjjGAYEy9JSpbnd9d7PQyTLor1",
  "key9": "5GFt5htYrCS5KGs17hjZuLyJHtMZNeCeTANX8vUFQmRZ2htXpS8KJFUptB7e6ggqD5HAGXybrjpSBE6s6541irA8",
  "key10": "5ENKgvU923R5NqVHdyGjECDpaC8VKbWnoZLTqYudH7y2XjkDVyUKfGKZPNCSWsEojEFs8EDLYYdHPVkUAZkTxysx",
  "key11": "8z6L5BYVFa9b4gx9KCBnTLdBDhJS3wecw8KLcT4GiRgDastRdgRobC8erxLouMbrzs9X8GYg5nX34wf1or3W9pr",
  "key12": "3R6sxxYmBdhwVeoYt6nPx9EDHypQ532odZA7nrw3BZuVCnDKoHUUDeFA3gzC8fGfxHvpmYtGAYtbViSp8XXXPhqT",
  "key13": "3H62yiYeWPShMcDxAS1xHEe24yYCMAaM3W51WLPhhLBuwYwBq4PSYFQxfyFvFSDvZVGoYkTU6uvf1fb2Hmwirj6N",
  "key14": "2V1kxyacsz1wu14W1821Wb7ki5DfbJ4rfcqouZyLfhrhBNe1mTbmGXiadpwPzVunJJhSnqd9TCbKYRXAQMQU5iE5",
  "key15": "2zecFY4tydexqjYx8bqKTeq1ASV1T6J13uEmo8pyHehGRaFvavWBw9b72UuKFvNE2P63U6KdtFokTFwo98XLax94",
  "key16": "3jQRXCBMHswrqWaTUwosG8znY3qjewScmrhLFeNJ1K2efKUvvRgQAzwbxuNwZ5EBEQs4g5Z9jDSmsFqkmkyvy62d",
  "key17": "2dKZm4PnVfcSD74XRGSKSrnnzG73NjKeoW3Qi24qzRsQcCjejXnbCoRVcUgkkF3wohToDVw7aeD63qYJfUQZJdMf",
  "key18": "3bajz48vZMGNjcFjAqQ8jJR1ZqsqJsir9oBKrMa9tQMdhA18RR6h5gpj1iuusRv86hX8KqXnDpvgVrwBJrMRsYSg",
  "key19": "49RCjXLQhmcEqEnhvRETtY9ncgqT9unHKVjit4nwXui9zfQXJFdsBMvrZ9vw1jFM9FSSoV2d1W4w5vzpxfQcNSCh",
  "key20": "2EX9ASEcvz2sqZVxpf9qorJN3ypXm3jFpj1AcpBiosUjFPyhPdvsq1Fp849MW9hrSPnTjDwaRKBjzoiSFihb8Pd5",
  "key21": "4DWHSgPaASBaENMTtw92oSp9jXfGbsUpxLSY1bMtT32ytg8dCdqE3J4Rp5rc5nzDeN8dV2T94bU4PXiL6jD4eDeB",
  "key22": "DcUwTvGEeATs5bx2WtpWWHd5tPtG7GFWohCJGYd6VvuoVw7yZtGx7H6gfZjexFNDmSmWGEvRg6wxmjXRZgTtEQQ",
  "key23": "4ic3oo5C58UY94gyibsAuGanXAjFYiadAjKSpq3DfTU2dVSZzM8RhLC6yPYnw3cNG6YppNjZxbkEatVXoXS7zqoh",
  "key24": "CVSBY8gwxJcpkkQN8xVd6ZMn56PzJ7N9FBVKquHTNmsQ4PzMvBfrZhsYpyBuoaZ521cMZzJoxwN44RnoDUWESoJ",
  "key25": "3wGd8bsDuPAQ8mU9a9BZJUPZhXLCWLybxtq8azZnYREqdg4Cp4iGsr8qLUxTvL25fqVvCQ1NmsR9z2oVdaDV9TWb",
  "key26": "cDKrub45NMSTkwnDhEqVGoscZ51v3hsCMp2DAmNtwySB43SfaMH7YbeHv5ADBHutipPjJoWxT1QA9FiNb1Bfmeb"
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
