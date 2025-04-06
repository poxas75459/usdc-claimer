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
    "5NYsNwFv4aY5edMsqoNLfenkgi1EreDPgyVH7n2LwLRSdoMhvTHHSSJ9PxbnE7uP3mqcm7GwJ1nd6GhKs3ydi72g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Fe61iqAe7chpT8vFyqvifTKMvkXdzgaKBkgkdiUEmH1fFpMmZDo7rgWZy5iL71kgKTigjPdmkq3KJaf39DpdjN",
  "key1": "5bsxiVSZBHAJGR6Nfouz3R1mUC3vsvfJQicPgRBeAwcwzYxFstKQ7KSjFzLkDedtSZHUWMD3y4SnNdhYUVpRrd1r",
  "key2": "5UfQhgVcyM3GFhDd38SzNRDb1aZg2fp52wdBtk9Fs4NErrox7hHY56Ud7n6ccvTK66bR19c8zvbTWKKiD7bybzdc",
  "key3": "3CQgLWefKwF5AFmJ9oyVwBcSt13h69SC5aVA9moycRuHL8r4oysvcA3KBaWEETUcJ8CUaMgYAx1qJ5itX1K3EFXk",
  "key4": "PWm2GExKyX64Cq7J53RwvGDRvQ7pMh1FFWC3iSWVzvd7Y52NZpkUwetNxc9MoYYubUaoQ62zuFjVhSKgiVzBRnP",
  "key5": "akDq8VyUzTp2jzUSynQ4wxJWbGE98dvvtqX38xKGBSD5H3kXAD6SHGchdgQAYCSNFGr2qdSjmfTWgjrzq42S3EA",
  "key6": "2UtWXLzYNPNS1GUt3mEi8qKQNuTBe6YJ88GbQCgBVMSkZLawkXBX6Uyaj8RUbk1vNtsK93Pvqcqadr68Bwq5P1YK",
  "key7": "eV6aUfWu4mhJdp2ee1HaEynnSqZJkcZssNMmUMAJvmtjEH3mRSWkiQGRfbe91k2XxfCvN2N4s38QGmi5oMKToFd",
  "key8": "2t28YBcSdhngDBMTyWz4JyaUKUJn1hNhdMhT7w5x5p8TJpgjVFeANTfhAR4madAjk3z1dYR2YmWqHLKi5p7jRTAe",
  "key9": "2dkPE1gVHBxZ3rM8MQE9oN3jV9fTSTi5qLZYidL8gybr9vu2BwETdsxcgn47wTN5qg3egCMd6NHue4UjcdV2EaXP",
  "key10": "4xu6S1TbLwSbGbVtTRob5KJHi1wnFdmZgRCzZdsVVHyy1npnwb5kE2iR9vHmKPvzTpkUujvCpq7YojcnRdSh4gxN",
  "key11": "4vT89UMknmygi1AbEYymALDX3y9f9CaeRtebEfyGBkYXru6na1pwzcwyEW61u5BwVHixy1zZZRdg5iHb9QySJ5LX",
  "key12": "4XSYz8UBHwyeyWZnufDQUFe4HP2tfFPpRLEL3cCE2z89pg27j3WvEUWSesncZUxarCXPwp1kjbRqRBiMkYH3yzBJ",
  "key13": "33xGwu1nd9TgmJcJdnipYXVtuH7BrGGQHVzKHeXDrBqSYj952oBUNKzWzWcfoBTZcrywa3igaVfUJSBqyQ6av3Y5",
  "key14": "5HyTfGMibquogBqiM8YZghEu8p75Cj7yRPNuw8uP3cEyrM58LyUn73auqLT5r5fT9NSRTWCurwyXsZ2kUF29ngaQ",
  "key15": "3RrgCTJasfQLFs4ubrHipcLqZqfy9AdC3ZMHNF3YLe5Bj95NWFj4FM4izLAKYPbhRShPmynZoUy12gMiykgaP8xo",
  "key16": "3gU1MRoKUp2GQXUBMZ1eUjzsMRbh8KAs4dGkU2EeFsNp2QSVo4ouMQ8f3B3JaLvKjDePDtXt4M9ysmBYEq7T8xzH",
  "key17": "4jHpGC7H8aKvLwL15HGWwVrAQQZAYKeE9FXRnWRmFksoCyqKF51ebnFfze9NcSRrB63E97PChJMvXMoDjUn9FLVX",
  "key18": "iWBXgQUP9V1JhbXq94moK5AFR7a8ZjFsvi9237EGB7f83nwYrGkqsc35iyK3zzQ7dM1XoPkWHU4KNusaQ9xAra6",
  "key19": "FXeqosHQNy43nkRYgbof789rGBGqnw3Vgofv18jmdaocMmWyQ5DhDkcpELaoTuuMK8TRUzjpvvKaRNyoBKLPPoX",
  "key20": "55MQfZTLwipAjyg9XkUm43iZtETx69MSW8XJjzX3JmvyT9ULLNT2gbTjwisGTaGPtCWUfTw4yfv44MrkE2UMBM5k",
  "key21": "5k3rmpc9M3cQUY8f23HWcfUKm1NM1xRfCFJA2s3xHu4VB5GfhzZzbc7YwvJ26Up6No66fQ7koUPa3veShii2Rmru",
  "key22": "2cZu5qEpkVau1UioTGK41Xux5Vk1oAFLQ65eaYsZckf31o8GwTNSyQiYY1XDGZg9KFJMuUqqbGeYC8YBPaqKTBPB",
  "key23": "4VNiiHQMRScFQRLiX9mEDX8nMJ5EFA84jLzzPFFJSDyaWqwoZEwzKVdRRmKjevmnpy262Rp7pPFF9BWdKdsJE59P",
  "key24": "5GFXPteE9GQa22QvTTB2EmCj2Xu28Z7qiBFhT9bFaeMY3PbfeMSQXUBwAqexxHNsgxrgMwmCV3qyQVpMKHLkQhEf",
  "key25": "46fuCjY4A9eRs9uqMFoFeiiTyYCMQM17XyD66D5A2fDQCwCeskG5eZ2XoddKnehxEYrv74r6WGuFFc3rrtoHZ2QE"
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
