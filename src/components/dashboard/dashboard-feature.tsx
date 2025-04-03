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
    "4mARwk6zcneSenyY6UTvNMXCjHL3CPkimoCEL96L9Y571GMusU47imxra9LBdqTAsYMhftTACE9WDstznBWapv3g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TvVZLkXhcqDXnPsoMbrGWkXGmNnnJJbemCFYCLcD5QmrMYhHHQww5HDx4sALwZeQiBeXpyaEKatzXRMLvkAvNTz",
  "key1": "5cDX116EAgXtvAKNZKHfwswH2QqCtnA6it961HG5YzaE4nsCwwNHk6R5MbcDp9uYiJRu38g7TMR5ZRcdYx9Z12T9",
  "key2": "3P87U3avqGPqn3V9UUPA7uFZ6SbFe2qxb3qS3SmPcm447ne3aUxAkUdRDrc9Gv5e3g8MnYaMsqD2SdwnNxaKRLmx",
  "key3": "4hT8s7Zoxj9t4Ns9PNbZP5N4rm77SWTdTP1dd11ri2jHqgFQRBZEJeo3yR14hqcBrgLEP6Ng88S9YST9N1YEjsnF",
  "key4": "7jubbMoSd2FKhye8VJCvV8JJMt2Btm3YBuiaSuCtDgQGWhuRkzATxoYhrLTjKGwagxPgyz9qcKiKKg7V7eUC94Y",
  "key5": "4KdpF9JJAo9UPqdXZXmPMupHbJXoC5i85RKgZVX7vRrd1yzrSPChNKQJrxhntaeMnCzK4QcAaKQSB5K2ojcuV2ZP",
  "key6": "4Bic2zjMFeHWJwbnRo83cnPt3qL9nT8VjHEKh3grYkMmobKTVAa1nDiKLdVzead7Er95VPrcmr2hK4NKG1WhERPR",
  "key7": "594VJ6WPbMYB6ptnKrEan8q2G8NT5cpW9fuPu8qMGYZ2vu4tXfnHYxRo3BYDRSJY2AaGBBdJFcrVCfh8dyzkrb8Q",
  "key8": "gC1XufkwkvrYpVhcYv3tnHaQEwaV4fHHx7PMDSpoWxjE9wFK6m4PKMjnbFDgJuDntMBs3rXBDbD25caPQy1HVMH",
  "key9": "ZLW6bHr44TzXziGeK1dJoqmCGr4sb96P3J4ki1rjhVvj6M8MLkzTLaWTZJbsB5ZLaqwVLh2eLBX7X79tgDnT8iK",
  "key10": "5NVa6Q6ekwyKTDwsSojQdwsJzZUdavCPwi5StuBmozR82Dfw4fkGKEtJ3rnWNtXFq2XVLGQZBh5pgHAmfQHTrjei",
  "key11": "4qqE4ziA2muD4gB4ZUFhHjhcECvg4RomkLXhEgGxCJ1VMaS6kXuJfRDyVi5NDRE5ewBcSHpGzHpajAWMtMmtsE2c",
  "key12": "2fV7GAWQU5mHMo3qzgHSjRL4R8C9N2YMW5uDipdCJdBkSdCssEGqSxaQp6rhkHWFPA8rxVWod3zzb3NS1uhmypKm",
  "key13": "5Ac4JpNyjEKRP4UTT6QZRuDnR8RMDXiP3dury42pr94FGtpwmqncieVUGmfE7ydfgCqzZU5kKbqi3E5hML9ShniM",
  "key14": "3pN9oMk2Vzp23c5beT7miMpvWJpizYzdKT9NeUnUhcGB47ugGz2E4XMnFVVPVEi7o4ckSHJmTzhXspiQKWcYv5VZ",
  "key15": "k3Vf29z58pC7nwMydYPzshNdwu8yVBeLyeDVSYQ2wQrP53846RQpbAbgxyTrBNegchTpZxrCEeM4P7R2ocRD7fy",
  "key16": "qQPQgsPeriwHf4TVeTpWyCtwPTNMiGEBUUVDLb5cFLyGh8pjyVzfUWK2Vhw9fVbTaXePrmGh3ybvwupq5PngnB5",
  "key17": "4u4f47HWRePeo6AazbXD5WEuuLmVYuvLZZ4uBNXxH5gHCppvcj9GYcW52zV1DvVYzDHXSHhGZ9z8389Q4NaDowBD",
  "key18": "459Jc2FR6vPs9wjVtnbXXEmXBxacfKx7vwguXHSXNZ2g7JPm5AAjorZqcXMqjQv2fYakUhxA3XpdAZti1akGXfX4",
  "key19": "34H5TvXY72KEm96JKaTA4W9FUBbvYJrPAJcYMs6jEUGUJvxwsL46SFHPyiXDPV9aXqvyGB8xTAsV4WmjxLXq3gtL",
  "key20": "38m3AWCTWjzxdR6stZuJ8rJWaPwy2ToJY2fdXnTAovTAu5hRJ8ZkeNkrj6H5U6ttYrBxRfneq5QMnHT6ES6P7Ayr",
  "key21": "3vdWoVcgYZP9rVRd92WKYQu7qJSYk9DCtyZcoHnc4Mpnpu1t75VmHAC4rmudKbiCsNaFn64EUdNycik824EEWJkw",
  "key22": "2mE2HYbV7WZrqqQmdetc2kZECBesLiDbPFhg1Eohb4uvCEnwRPLNY8w7DS3Gqe9Xdf97ucRu8omGF7CgnFw5kPKq",
  "key23": "2ntw9z2T8D6jhiXysAdvQ7cCeApL487bwMTbHswVuMc3JjeH6yewfu6WGvRtYUpMdMWovUqKH3oVtdHT62VeTZfG",
  "key24": "3fLushiFg7xsbJ5VDDBex9LDEjaAQgFMTW4Z5iCFHEkf4Y9yKBYcJWdSv7cDW3B8gEd1SWcJJdCcHZtqSbAPP67c",
  "key25": "4UH7rrrxmEfAgZLWqNiMSrz1KNRsDUrr9PtfUnKHzLfDEfwuMCj5qXKvTKeLip3mXGPop8ggJxrnYQgQ6UnagpoQ"
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
