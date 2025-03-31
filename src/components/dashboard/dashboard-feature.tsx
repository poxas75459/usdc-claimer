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
    "29anYa5cghAFWkq3ci9z1LQWt5qjo2WDEEzRms4VLTcLnQPsLpRfzXTyerkoj8QDWJwy3a1cjrM5SbSRP85GNnUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfd7AdjZSZrBV6PvGjoyiq5THbx5KdFWGuxMwPCeubVjP6pa23mYNC8J5FKKKpZJ9C6YXGXPSdheiiJrhMezhRG",
  "key1": "2HeffjVFN4g4LzQLfgJEniH14xrW2gMTpCjHzV8NQBiuXxV1DvA7W9sAnHZPMnb4kkVqJqHaooiVY8bE5FfDfJMe",
  "key2": "57rqG2hrgzNWtNZAXr1UDSrsVJ1hB9gKhUHhUvaTU8vtq5GJEJcvvkYvDzxtFUX4V4jV4NGfVaM12wV6raVcuXWM",
  "key3": "aZ9cHBfxfjofAnppCMmkfTP2QRK6ahjBKcuq6S1eieE96gHamR77rFYuzCRVD69TpY7kogFYPEwCZMgMmaXknUj",
  "key4": "3J4w2VCmKAtQp5p41EKAUtHCR16MSnNMT3pZ2sXMMef53K2cP96iooZxDmLEbGBGFUxKRWekXa8ACjyUbNfSGUHA",
  "key5": "7B6FevprycseWSUuFEMa2BzzZsX1p4KxoEmpFbMHEXzei7sqCqSha9mhJE7jKangkckcPMZdAUwexioUajjk2jF",
  "key6": "9audtBeiZ4W2QeVZZkr6JxvV9Ju23JA1fngEs4zo4gVzAsUobRLRezUXDo9zovYd8ukf7WDfV15tMQaLiTtYj5C",
  "key7": "3HWcTHjcdZvAUPZqTaGDjqWSBLfeQpgQmkhbABKT5gguzocFGExVcN1Hawi5yXWs9Y5xHvyqVtBZ8SXEpzqLbuCo",
  "key8": "4UcWXuSib11mLwagfCVfWfwypoJWAzNvWDHV3DQ7kvazCajjM2i2CDsUvJnsGGpncYiHKyvRFzjdyyAxvpBt6KnC",
  "key9": "3rM9WM7hVtHihd6UooAT9ZzVZPQJoQfjRTsHNWPVRqAcvbGygV2kkT1w6GYXHDr74xgVmxNi24UVeCtLuXDH8vzd",
  "key10": "24VG8phh666VE4YXmftpba1ymwgxFH993NaJEGsiFVTChgRtaL8zqkYYMcQvkp2TGjvfohxzrbvNKxRsb8T2c75p",
  "key11": "DJoS8fXNiA7Chek7MmTZoYzZqwVpLLgGP3tLfg6dzpi1KioQyWGvVPhvPWaXuuWGkusXPgM2qfEN4NKmGpfpJfZ",
  "key12": "V5E5dVHTmmrLiPJyXjg2y6jXcurnBCrfeNkmadFsFFsJn1ciepotbC5bvCzTLgNt2YiTKN4G6zcsRseLjR5PgWx",
  "key13": "5juNJLDDMLGsb1MW2YpFAkepsVx5a1Zcc1vKXzHNUMgEkDTiz3QHyNRfjiJT3jDqug5GERs54jKm3iejykEMr35o",
  "key14": "59EM7NGJxpdWGKC8TZ3ZmWrJWaBPftGboP87J1MMXJZ1hoDX1pctP7bSSELHbBqtt7FhNc9gzvWuBuwAAECWoSXe",
  "key15": "2p8YEnXjCxbuUvPdaFCxcYDWwyhBHBNN7pCpiYs7sHpugzBjojs1My6p66QGVpBUNTVfrP8cgnzbAoF575xSaNaU",
  "key16": "5CH7yFcS4UibeepAmSHWjq1wywmvv1RLQxSQ1bncqVNL3BwU3fSYUUVTXVWbqg7aAnx2wmMYH7atUb95tzT59jrh",
  "key17": "4za3FVtU7NR4o8SBhwMJrhssPgEaCiy34eNVzycVwpEU145PZ4RGbx2qm7zjjHLpvQDmH3N1Jcrw3VqLPJ1FHCxA",
  "key18": "5FuMHTr6j2rYquY765sp7ULteB7vbzS2mkNTMnbmSwvtn3tiDAkcm8zudhoqwMmEAbf8bs8V8i1DYiJoGkBAD93t",
  "key19": "2kcpWjxtrHG64As2Mo55ay2VnBWx9AvseHtrnGzoLTS17y82NCtR3jPFN1Lf2x2DCrS4qa9c71kvCc3KLKUfbzuv",
  "key20": "xjfDSPEcCkV5JXcfrvGPw4xXz7Z4UZ3f6JncMk5p7xL9aSUJDVSJZkN12WFU2oEeT3thPiNunrSadV9qHCN3EZz",
  "key21": "5HyvMkHysRUegtUykTQSYvgBdh8zSZfJABbkEFKYozBqYC5KUa8khx8Nft6U73dqKkHt8o7EChE2RbLZ3DQtZ6iQ",
  "key22": "54CF2VZHPwyQvYpdJAcHTTdciC8TJ8SRLgDtuLzeCqnS9A6RZPZjztVBn6SSPsnT8ncgXtynA4AoPcQizLeKSqXV",
  "key23": "64BDmGGMevxsNEMeyrtZwX7auVSbrmfiA3pTDXRHshiHdCPxSDBT6JWoHsgXYgL4ay7ADhXdakG9AQDp9ha5aeRs",
  "key24": "5VEvWPoYauVUGaBftqd26r1Vs3Rf6Z6paf5sa9t4CB3w8VJiEsYHTrgUR1k1PBH3bCADCu5iCxCNPmXRRqyZGw2c",
  "key25": "ELzYu2dxwTohQDiLADkygSmgfHfzAm3KfsWVxw4e8nDDntaEMz99XV62HWt6zCLbcWRthpsqNXkFEtsgX62pXqx",
  "key26": "4Hr5vaRd4W4qVrnMG9XnZ3ANVDMPaoowNPG5RsCNL8mW7xtkbwsEPwQGUSax5yBy4hL9wW7rd7kBDzExngv9SpqX",
  "key27": "3ernLPfFiYXBKcDeipMAk2ZuHNtW8P7TKZtnyQe4QrDShk9T36b3VJC3ZavGLSq6Ns2brp1e8fQEKZM5FcNecyjg",
  "key28": "3dRKAfAb7AXAyktHbBt82viv9a8wFaQPtm89Qac1z5aK461wA4aXni8u2hu9fsHtXieWiMXBXVVaaALaiMv6Yy8V",
  "key29": "3YuKy8ijHWp9jHpiejy5wk4PdNZYYT3rypjfZT8oi5XDL3PWdVVRcTJA83FsKTPWiPX8UFGadZVb33rTmspdMik9"
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
