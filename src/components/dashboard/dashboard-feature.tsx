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
    "3p17BxgcsZjZvuCVua5bM2Pgvw82GWAk2Nhx1oKBzBX7K1D6DzekZGEAMPrdBL727g8mcmfFKox6PFaRWiKDSSo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pNz3VWSMRAdMnFqmPSLhAw13y6DLpR29Sr7KWPYCKJkbv9sVz5Ma9NXNATjXn64puXTaPBENysrPBCRhJjpGLqT",
  "key1": "2F91JL6ZYZ5dD9kn54aDp3fq6Sxn5aes47v8LfBNP7Ku6dzQXdaBKgVFoAihmw9fFPnkagTfbXNdGXYDKz9aHsqQ",
  "key2": "BESGfEDMCVTkS1N4MnoQJX3RAa8MkrY2d6J9gBmgCijzBGuLKqVkzEjXYdQq4T78GwBKxKPuivx4Uh5XPVffoaJ",
  "key3": "5441q9zMtQtNshQi5MeCBZFSBLhpoWtmSeV8f4cUiMicdwr2tvBAkJQZWdFF3zErrSwYzSWwKJ2BT8oLdAuiv3Gs",
  "key4": "2fhdVvpCwvJQpfWuGb9FCtdnQUj7mCp7NRU65nhjncWyPDLtUR9D3BkjKrqkWYkeEmEYpbioxsT55NQ71REpXT3D",
  "key5": "2f8Gyo4arTTxoFvcYiDAR2L22EUzzTjK2RWjzDVAgWyf9CCHaxbgtXNpAFobKHYikooaNiEy1BX9Hhjne9DVJq5R",
  "key6": "5XZNMRidRQrZRDBbwrC2FEtRPexLGTj7KU41S26c3wseBnUfFqjCWEqStda56JGRghxMe7EgDt4md1H4CRT1MumL",
  "key7": "21SHDnQsfaX8bFnppuBjUjTsyGrgeAara7sMfJaPFpzZDkVJCWzUgcniSCuN7mdPyiYCbrqLcbNbKVMvsQry3BtX",
  "key8": "WNNSwb7skBCwrrmz6Trf2vBEMtWFuoLg2DRoyXcm8rSzeijYuU5EcqrMzGSpvmR9b56i5NqKvD4xihTARB7dd6T",
  "key9": "5XBpjVyRT8bCUzk3sbJrARqtQLzvtQpidneL8jR5bUSe66GFfCuZBtzyaxU95fQHq3Y771ZCLEkC1RQZ66PszQGp",
  "key10": "3p58RxBJvrjXudco5ZssYsn9sLZEE8cgV2UohxoV4a9PPm2WTxJb2z1sf1HRaymWVNyKK4gaXiQ5aAtRppjZ3LGt",
  "key11": "646KY5RLrWkM7cXEVoLWVBb8AqLQNDNuV4H5tftPSMSefn4ajwmMVQcmZnmhytX4cPm7roKmH2MYKSUoiVvdmXQo",
  "key12": "2DeXMdEhj1YgcHb2ktjPtqoXRHsxUWFeak7JqdgzRBE1XdLuJCa1kJrpS1aSwW256tBExWm2w1FL8X283Y9Stxi1",
  "key13": "4CEVcQevexozRPwUQUe1SQhDVDN44dgjA6Szk2QFigaMSndgtZAWidadti1RA8GuwHApWpKzksWHq9uaXeNveWjU",
  "key14": "455GAPYGgE5Lp1j9Jy2NNJdzbCm6dViho9fzU4CiZhyEf5WUddRnpGR2h8ukqptmNAzKX4qPDjCW4o7b6JYXjfVZ",
  "key15": "5mDtM18NYsf7hWfdWYrgw1DH6FBq8iUN1CtMt34Re1eu1xwXiSPxUcA7jVSwb9zC5WoL1YHraA5YTvByRy4kNJMM",
  "key16": "2W5u5RMPxAV4VmKCoSaBnayVj3vQuKgkUnaijbY61Dqtf82br6pmJtGCnBAJACwJdu98Yy24EVokgWC5RyERvSzq",
  "key17": "yLVWjm6aKPQHssobgmx8VHpGyXWEdQUGUwAdPPDgCVPyJebkhGzZkFEjqczuaJShnhaESBsdZKp6wb9P6aGpDCe",
  "key18": "5Fntm2AkztBq3tdL9LV7nCyPfJTwWHPPkkqmornh4iuJBAveX37QQ831veBa8YAfmkvwgHanf1WdiieVHoyfAZy4",
  "key19": "2KdzphFukQJsVvNC3AfsDeSon4438GVLCyRA7oDPJQCY1MZ8P7cQxLRQkAHpcWFcypfyVP3riCM8PvxKniQaQ151",
  "key20": "5NgyriREDBTZERu6UAEjXMxsVbKGaaRFa7e4mTWkpBbEDv2J5GiyeqLKgxc8k3hjArHsWXGRgDxMxFqh3goCGTcC",
  "key21": "5D8BCExSJKSWc47sxbcJb2buqmLp3xitqChSHrA92ZKdKccmASszgt56Y5bbNNWDSGPoJLme6MDdZ3QhJzLC62LD",
  "key22": "2J3EGkTtLyhqFqHrUTzPZdXYcJLMXRnLC32oMT2u8oBdn9pAVCiea3Xh2Tfvrbe6GqXAGUPeLsVGzj3CfsKyzixj",
  "key23": "2UD7NFLsYo7GNVxqo9Guez7Bq9keMvSbvBFmvBg4q4gJ6erpAdbet1hyzcw88bT9vQyQt1epzLGPDKYHUWK6KBPv",
  "key24": "3gZjfuHgBdK4yeY97pTq242rVUFMFYVUpkvXGPy7EoJr4sHZpn6Qcj1S6E7eYuvbc9gS23ULWaHVugZvuohCQskK",
  "key25": "PC7Y4keNooLGnJmrNEN55d6SKe3PsERQx2B5HvTARuqq2FW772asErV6hjCSV3mnCB9b484mMmR9JUSKPGunVk7",
  "key26": "3UtgrkPxDVY5pR73jKVBe5bETb97oGXrr9qjUBN6FdpqKkvKxJEMiGHmjZ3e59QXe8W6Xf3SHyhfi1P3DRGYv3qN"
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
