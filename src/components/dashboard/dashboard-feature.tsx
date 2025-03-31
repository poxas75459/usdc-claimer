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
    "21CggPAhjvFY7Jjv9XFRSpoNJz3x19yBAZZGDonNn8UQXNjFiJ9eBT8GCHyeftfBXCFGWJwH8eZBjFKBdFs26Baj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuqX63h2AN9125ptmWbMJN32fRjzKu9m8W5YC7FTS8RFTsPmh7Z1mhusSUpLEtwqtfe9jZrXaUaciCCcdYd21iT",
  "key1": "n1mVGExsQYhtnL2guM6dmjH2kcRLcMrxWX8DesUzisXjzmT3V7Pxqmu9DB92qYj7ikAixbFQbCK8YHaqb3sJyeE",
  "key2": "5vnUtkwUJEyESSxj9DhxSEfEyxM4JcuYPffJFV3vroMieXBkZkm75RbmuaLTHFuKh4ZWXJwGGqRMX78YmYpAZNfg",
  "key3": "51wJAGSoir4R8JpVtLAaUTgPS6JepCE6k5EiqCKYRNe7SaVMEgmQf8wPFs4fN6SmnsnV2yyjLhdrYvLjWPkbhKUC",
  "key4": "yrchQy8QSUfgCZSgC4hxebdjytpAqXxhkJYZNSne4wqcCvVEGZhJ4eJBQ36Kb2CDgTTvR7fidPmZrLH1VnMLAQL",
  "key5": "Yamw95p9cvmtfsr9x7Bw4HowxfMHSKAaGR7NipYkxXzSQYxrduZkeUuoDW42293vr4Dg6fWQr5KHYAZa6DJyy9c",
  "key6": "3Bp5D7MjHjMeChhnDcrkgq2z3a3yvdAxZn1QXte7AunTsut3J6ZRqKobKikekkQL6deFivA2N7p5pJAe3PcPNCpa",
  "key7": "3vJh8Ra9qifR3LhNeLJRySw3MYxcxwg9pQV2zrQig5JbaWHCEokTjAFUD1fJgqPUKr2yUir3kQ8ZwUQzPStNRMpL",
  "key8": "27uUkGHcvttwXPjWDJ9sMdcTfyggnDQRRKZHEsWMzmyJYbtBriQruDfxbmBSTmurvag9ji3oxPKk6gFcqUANhwZq",
  "key9": "3ypTvLvVdq6d7VHaV1Ue7kCMwzVsNCPGcau9LfSrxRVcmbeMWcs8iBRw4dRSb3aFwY7CfUsdoSVxG5qicvuDaoNU",
  "key10": "xD7tmc7wy9tnXBe15PysHEddDYPoMtG3GNVa3MRqpojnR4m9zx62s3iy46NJa2sfj9RuoCSvAFZqtAvV6wnGMi3",
  "key11": "3tzDKXejQKHJRTYwB9Za2iAM72xoJjDq41bHgEF3ZQanXfyfnejWPVYbayTvQiuWE57VZUyDBzmU7W63TGBdEb5g",
  "key12": "4KPanuaVkm4zaD4YYUeUTqjrRd6qKtbcsGe86Jj2GahX7zF11RWbkYGe68EpQc47BhkVNfCitVumLYaYuUWeV9NP",
  "key13": "3fKz3kCPAm2otWHW219Yd5oYZJ5rQ9FC25xx8M31GTquzdAnN1sob5k46SykappJnNZzGE53NL1GukhY32o6vSph",
  "key14": "Au6StQXLsKaq7di2Mo5b2E9MGbJvHkbq6J9vkVLAhrb8CGMamg8VcAiofnQ5TkAL56zEybWorF61UVgNj3MhJCs",
  "key15": "4ZNoSb5n4yJbng3YQ9Nmhpxv5b78BNfrhPTrZQWAgfJ3JixApeH9yNowy94YBnRVemGutKXEtUVBYAGyrxUNYirp",
  "key16": "4dFEEr8KhVFETTNU4BC2L1G3g34JW5gYqTvYg9Ygu3rLEbMQaPTFoG7KEktt3AbwXhB2yMRLyympJ7ZDsAcj4V6H",
  "key17": "2yfiQzSNqm9UAzQB4ciny6f1RtKdRfHcCRKEUnNr5KjPsuNX3xGsAzYFTyByZ2kuvGBxozpB2n2EXGiW6MKxd11w",
  "key18": "618GmsVnm5TKQjSvE1Ku6ch1DPHjBzEc2prmCtcVP4rNcJmHXDHt6vg7N1zE3NarXKm8Kzu6QaLxEbmg7R7gEuuH",
  "key19": "C3mVaXbcLcF1KoBueovU4pBu5TFYMdNiXJJTbb9vV2bnjvZrG73CaRaJyc4g2AZxcikTyiZ6YEYRYmfkXiuG2pg",
  "key20": "3uePGjszvSxqcvdgNSMgod3G8k4XPNejvA4iCdgZXAPPUcnC56XyJ1qWxkgy4dY8SZJmETfSNgYjDMffEopnCrNL",
  "key21": "51dPdyjq5TzULRrMFoiCHLnAxs84v7wTsSqjRPamBwLJyaidSiRnYD1NM2xBhAC7rbGxtyNpXdrycKuv1rf1jdGK",
  "key22": "2yL3yndqXGVEbhhBM6zdkUREyxqscgaDXVjpBLrhgpV15Vq4qGyqtxWByA72mnar7e39HkRW7Gi7yD9WFnW9aQZb",
  "key23": "5GyTvNb35LnNzw3AYqq9odJ2HoG93wBikDvk94LXW4Mfn7px1wM3CPVzCeCFZ49uSwPaAW9RMcunZrs1afyh17iS",
  "key24": "4tHMUqzyi1rJtDQgTj784AuUSLtoFxdv8hQeLLnaQFveSrRZKWWRX7SDTwG56METze53xDFs15oAiczs26VTUneM",
  "key25": "4KUiGTh3ioSKmtoEphSAY6WaxwJijrC3obAgf4HnfsPFBb9fJzfw2p6nBugmxmphy9JW2umLqAjfKdx683kSuiUx",
  "key26": "26WAwh83KyAphzPZsfkm6mozDkrbHxpuAuYEXbrYqbojCSU7DG1v2M3BG7LUB4DpASoFYUgnZCU9GqzMHyqmmuLY",
  "key27": "2vVzNCKEYHVPezUKcKDeUDrrWofQAeVFCTQy55jtGPiCn3R7V4wnu7ZLEQiLdrUDWHgtfmAVd4hjSMHhXYxj3Sxs",
  "key28": "2Q6ugq72VMVJgkfnWTE8jeGrxUwaUpSRCGNLScsVRY78Vn8GDU4V9DjSdxNhZia1CknnByEo192D13oGm41rvdPg",
  "key29": "4AwABVYVUUoM1zRWNwD746Lpimzd1qoHDdKs3A42LaSqbC9nX3yZa9zNu6MAbrMjENkJupenb5oxwQ5qG3onprmE",
  "key30": "3YdqUyPwsjV5ncaSsqwJZ3gDN2FB4t9EApz2g2caU8MFs3U2xYgMAoCMPR3kC9apy5oK8Uov51PM9eaJQqG5zUDW",
  "key31": "6567Dmgr1TvugAYmoQZBPh76dTQB3Mvc58PkAM74aEhBnvJBix3NH9sJMP3UKZBdvynBiqeUEc6QkQe5FvWdVPYk"
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
