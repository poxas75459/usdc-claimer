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
    "5HYKWar1dLHDVZaNheGsQRRWusBag8XGTUmbwvURXteAEmmPxsxEjUMvYUwGt7UsJzrWuN6byR2gMHUhtERQFXC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DBtDhZwF73CyhAbnhpnfKQP19qEEuhCgFWmMximR7SiZFu7C6ZfZg7ZU5GZHxCz6S2mT4UoXzek7MdjzycfwT1u",
  "key1": "4T1oW541CrMTE6EJqFnVjvghBVwd28aGPfCQQoFFGNmZsD41DLrV1BTqhxgWC77XXidqH3d99oUcf47iXBCS7btp",
  "key2": "32515cWWiyu1DcFNp32WAxrKqb9n8PTGzM1sWdnhQnafCHpjNvXaUsDNfXE75MnmxHWdLydQjiU1bncFXS88L7DP",
  "key3": "49VLAMJBNxgSqKncxNn4remgWVfxy6yYTQZ3rYdPu8vHG7udzTviefyL4414JoA8HWNUSmWwVVGW8kdLj8FmLiuT",
  "key4": "3KtGtBzdoBcesWMK7QoWrMuoRgyxFUcZi88Jkx6HGMxcMDrvEGpPWceuYGj74wLtLuQMUUFZLosgxgUN93ZcvR9W",
  "key5": "58YKLgHr7VmXYQ2JTLWPYCipuMoeteJR5QkNhgC99LVuZxhXQmwV4PbRG5R9rGxgREZZZqPaZyscUy1KSjsfjSrm",
  "key6": "28NAe3tZmAQ5rZ2L3p9Rxukee65FfcYzqQNEpbCeJb93CYBvJiinPEiZNBent8UWov1fadUXic9gADyRWTzJkox2",
  "key7": "4fDDDorEBWmRENJKV5yaNL9FR8aQvL9AgCoDr8xy7yXUc9uGcZLnCD9mSCFZJ9UtXpJ5aCsm3g4oqgxpm3Fifn6S",
  "key8": "4t2tCwm5UEn3i2x4esUwG96xtQPvgQibTpDcX8wbNx4smiLLZDN9VqSaZ6vASuxpmVB82hGptFqZhvafhkSMDBKm",
  "key9": "64b7ihwPgAhLzx8y7H3ezdYDYgAj1gDzv9fydYGW3q86QA1pYHPMmipXmY1DWJ6zhuAD2c8GuRMDfiryCw637HfK",
  "key10": "4NYVMhA4Ypc7V3Me2DbADiN4Mfxwi9pKbvsF6JfgoUNm4KWYKdnx85CySwPoQNKVgSiSZdjgzvG9sL6ApqXKs9c3",
  "key11": "3nJ3GZn52r91w2HjojXRvhRZSbav6EStb3BApc7LJUEbtkwfzeMKJXfmSEJA4iHCaW8eVabNCtBrn3GU1md3fF7k",
  "key12": "3DFp52A3CZxFpzFgmSWxgLqoZ2ktQcCXUsQNUaPiT1QooWm4TsGVxN45r91TuCt3kcs6ipNDfuNYSQXUMUTYpt6L",
  "key13": "5T5gi5Sz11dYupLsxAR8hzbFKheQ6e6VZkJjk7xquqYWNV9HRYM46EU1GLZfJeAuaYWgkrVoqqParD2M5hBWXngC",
  "key14": "5M7HKpserGYHCvBvK2AXVjueXQKMZQ486pBpP3PpZVqoRC1be8X8sKtsXiGPkQded4HxW9xcLJyeRRCac6VpKAmT",
  "key15": "3iekjvSBaxgvBViAgpLen9dhATNvQgztcx4gxtMLoh45pSWqYTVHFto4QciPPpBN4N5YPQ5x7vaLMG9SmEmdRhy6",
  "key16": "3D8qrBstvRpAPQobS2g6AVtVPkBnPFEQxe8w8qrTqUSJbWBJxYACSQJiZJD2oxgLYHaJF2rcAAQquPxMQXD1aydY",
  "key17": "2tkbw5iUVtEycCeXtyW6ftSfpXbwnoWSVvVC63T8yXLoimAAZeDhu5HSie9ZA7XdLj7immyZCdRoxnk4B3oLtnCR",
  "key18": "2HMmk6h4J9RKBBrM9LzBEYPgxPyJP6t8rELno1W7bdCN2WWv9mHg3YwqGEXZmSryWGvF5SaPrbG1FNNGA4KENEik",
  "key19": "2tTrJ9qkNgQrvUpFAUuStCcHWwpVdPLTXaNzksiLHNPorUmsyyVJCqmBEgybwFEY3Z12uUimGabJk2eJz8s42vgb",
  "key20": "4nsxhnahWgriChNWqS2ikWUfBr2fhqT1v2KoT3zVbrYEW1RYD4BTo5wGeYQ9mVbyUraR6hkNW5qjvNRjS6UqAKSA",
  "key21": "4FYRB7xkY6VAtx1cZYdDJ6eR2gc7aK5mkiLU8qH6WBiWWmcaTS9SVK1ptMHzynhnVZR8BpKs49UPTMY8UaHYcHWX",
  "key22": "61yJiFhcz1C1o2iFCctpu4P4GSefJ1tGzUbFEMGZxhb4USDJnwoimLaxmg2oCaSmpbEMdtMPX2D2wPkt1Y3aFhNt",
  "key23": "atqs42DFiYBwC2rz57Af3qhUVhfZk8DuPBHYVFKApi6w34CxsjkWVohsQcmkAW7WZaf8hioxg6AjAKgA2GqVK2v",
  "key24": "5b3uqQoPi37oWbVaETZiYVFH4KsMGkQnjuqqMtUUgT1PVzg83TQEPqoHCxnLLYFJt1LQqYvYGUqzM5xwYNMpR8wH",
  "key25": "xiMYtcEES5V9r4AeYzMtAeMF8QNe3SqzsPCuunemEyux84jp4YZzvCX8qX8dAEPdh9Ybf55qQvWd8Yv4t1rbRkD",
  "key26": "ujnc4qwrnywrdGj6jBewLGEAPbQEaEkyi5XhMpGsYLmzKASFX3G4xFthGrMbnAWNQfbmeFz9LtqZaPWLs6RMz3Z",
  "key27": "2SSCrxCvXkeaj1LugJ1CgVT6oi6eJmhYREUhYwMXCyvksmP9sPVXiLE2PMwuoUpz7UER5Zs4h8bwY4Wo9egemyuN",
  "key28": "2khxcjuXqWomrQ2upbF23uVYhAtVWCT8DhH4GmTXXNYftjNuhUKyu7ALv5RxxNJzCPbgefbNDVEKtvESqkQnD5BE",
  "key29": "58wxynDwSkWRSqdNeNKmxrAtJxwU9KFYnxSVW1cnKHAKJQoo5rimtmjkk5Tv1dx7TbwW2fZU9o1wbvR5Y4Kc9GL3",
  "key30": "3ixoXWkvbSTDK3ej3nZXCi2onRaVJUvRauwfDCfz2JcxUFyhSUKx6omVh5wHi3naFg7pqHWfarZGPPjMsz5mvrcQ",
  "key31": "5xrccH3d69qL9pyxC6VjZg6CqxKLjNo9wVkirDjMS7p98PfUG9dr1hvs7KLWnxtqnXvAcPNsTnjt2fMEA2ERaMwT",
  "key32": "354tj4xgYG68N3bg5hmwWkTAq7EuCehx1z1SGGtoCioHyBPGcPQyR3NpUXKe9xhvM4sX8XmmyyUGc3YJUbcesJbu",
  "key33": "58hmRZHtq4DrXUEsTfFhfPCki1bpAfAFi3ajop1e4QNHkwXvWYBGxKa5guXpVCbw3fndRN21GJu2u3g2WJSMCgUZ",
  "key34": "5G3sZAQcWHokvJRJ788aBSCAK6urMx3qsvgN99nLD95qtFt5B11JM2kNHvoKZE6TKaDuWPMWscodcFYbtLzwmhFM",
  "key35": "4XrfjJPy48mv7G6MRyhQTrbNZ2iXsAKyDiwUzUPgob5QmTjT6EjHEWJZ8piHVuFZsk1AcfEQnqEdW7qXFEPv5K7L",
  "key36": "YYzm4Frj3YK5irLZhhiTWhbLb4qGotB6UKF1QtUpW2uR8HSbUag94Z9LeZU9w1o9VrTiTcNFSengZhzQjecXcBh",
  "key37": "27MjEnRieWDktNK3WkzGZ8k3YibLEKbZSWnJV34xRnqx5rWeN4ByeaPKzp34uySovZF2G3cww7G6a9kyWYWkNWgH",
  "key38": "DWHrGq8gKjb65hq98EbuukznwQNzonNkKUWLLbnYRLrwYQswFHTS9KvcDV6TULnChLb1v99MQmRHnGdk9rTB4mp",
  "key39": "3URHfKuEekVxUzjn57SRfCSzmvCXUTm4UodEp2U88CA5ExabCaEg9CUNwNk3jZVFggxwqipvMUNdc6cML7R5iGvg",
  "key40": "2kgQCyQ4449bU9vaj3nx5XWWhLDz2Qisx9dXqMwVPAtfJ4dEZ9QHDRpRvp3PZuQmUqGYWhhjgzNULkxiCsXzyZgp",
  "key41": "3351bUCaF3DHHSfdffZ8i5tSXahtqdg4FuQzcNdR3rfeuu4tXhSAYXYrUejCQUevXTCGbGQPZ9QBZW9pky43upnB",
  "key42": "3Rrv1c7ESvRVumKJwzEErH14NBjBJNdCYZVGBFcYuSKQx2hX1dTmRnhw2cGtwZfoE4BmoWSdbzUgXxaakUJZ7A1z",
  "key43": "2h7BnSPB3AfqVC1ex6RYsa2nyahaa4FW19QbqvWr2GBikHNubAfJ5uhuvadXPQco8vm2JMBhc4DRDPsVPftAfD8Z",
  "key44": "DUYc65NAcVusEcesbBFvX1ChvaMg2erPxtfVRVYeXH1qL8SBrdMJWspb223V7NrG5rQWShEL8xWthsgoAw73ies",
  "key45": "3RCkygEUtojroDNtbvfCFzf1rsysuv78d9Q7iE8cgyAucUrXzY8AEiTTN2HpzHGiTVE4ZrstLXckfvq5yQMyKmRc",
  "key46": "2oY8vjXw29TgmdHvHobmvyoAvPXfRfQj5pdNgCECcrxp6yZpd2xD1xJ3tEE9EupPKkhLzjDLrho8LpjyqKoU2cBx",
  "key47": "2jepcJXPbcz8Waq6vYMRdA1ErvL4CaRf3aFKX4nk7eMsFJCnB275Jt3peU5gvt5TvRbqgvMaGSpasmyAaVU7GQVA",
  "key48": "3rrXSoCyayiWm2TGbPDsGxWJCDHA3r1YeXaaihTwVeCgPmKftyGaiogzX3cexEwGyHDQwBW2R7gHV417KJxB1MSu",
  "key49": "2acZdNC77EPSeAdiahwPxJhse4SbGCNaPtpfCbPg363vVuSa9UBTXUBtCgcbpMvQNpRrDJoGnWKEUpuZkE31kZxd"
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
