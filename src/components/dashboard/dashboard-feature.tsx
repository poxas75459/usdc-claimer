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
    "GP57SCGqAqGLntJ1vLKZBAf9V3XwqvJSKinSKg94sZRvDrT6kN6TbMXwkHzE32Ux4dcy7qLw2DUQJV3XDhrXfFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26xDc9A44JVoiwn8VRa3AEJxm3UCGGHujiUMRyBGZ2SowqunrgrMtDWhc676n97vyZthfqAg6VsYhCHLwxwHPKfm",
  "key1": "3tLatQKDyvEJy1aerm8m8acCAVFUY9yjKV6VsDwtFdVsqVyH832s2tR91XcjG1XA9UvaxBzgZ8dnJ5amADZxGEoi",
  "key2": "2eCmcA1c1D9oHQSVeTcD1m8kW3iT1rVuTMpBHoqZXiZNL9QLQaWrkkbEKVR1jZVwUT3zTtiJFC6f5LMet9N8ow3i",
  "key3": "3w6viNuLcJMFNixr1t59b9VHqYnRpMnEn8xtLo8cKneLTLKTVF1UYFNsAB9oAYHB7dUdyjXJvXphe4NB6s3HjwFp",
  "key4": "24sbHa59Ys8QgFCADHVNXcNqdRoHvV1BkSNhTnHT2iC4vguwExuEpCkQNpHG1W5gMjEynLMxStLJCkhXsSHeTvEV",
  "key5": "62uEujN3EqP4gjjTkBLbvWhXMkvKSHj4VUHpjntBYdKad8dqt4tUWmgbLceYghMVf63jMKEYEMG6Zkizqur5Ckno",
  "key6": "374JLEHD2GLZAZ3Whv6LoCGnnKF7cHhumZV61LtPACbaTw494V66EU21N2hSzMDvQzMQJBEZnhabzM24wHbYwPVe",
  "key7": "3Z8TUSyu6e4Wch92zr67sPVT4ZciDxZpgtV2Xr85QTTCkA85jdFaNRmmy3krpC8vbS1515YvMboeseNzMFgYR7s2",
  "key8": "5mACuPiUQ7PJXj25VhLkFhzhMuKaaLTgFw9GQw6xUZ2NEEnRBsXAbegD1MA4nW315MqVKH2Ldyqh3bRRLB4WTc4v",
  "key9": "2VGvdoe5g3DF6fEdkHPXEWDYbfabBvyrfuforeXFPcB9ZyngQz4GxAq94TbPnfKEJZYRBBafCthiFCjTrZh2ooiV",
  "key10": "5rPj2vKWMPbzc3AF51NtYREyri8MRL2HVCUNVRCw8vc1FoptG7bEPQt1Y97zupQFAsoc3cSg2d6BUnNzKBVrNi3s",
  "key11": "4psBcx8yfHXaxsu57uzNBY8M5D8KZ7kewL8DerL98jVTcaVgKPbtq2Bxu9pg7MhzYocfMdf7kmbJUEJnHj2Cex1z",
  "key12": "4VYCdEbasPLVesXFKeCNZMKsfXvWgfNchBFgAEoGWnxsfJJesYYCnk9qHoALrw9nxwbFJtj84gUCcPXi8tBiFYoj",
  "key13": "2yDiPbVa7qmxtZYXnp7DPfv59aE9EEDGSWpVwmEd56446aGRkYjJGd2Ks8Dz77LeiSkLxzAwpQ7ycPNDSirEJv4X",
  "key14": "4jeSA2JKA56LkBkqfEGjiPRZPPEHCadY8b9BcvUUuZcAmywNYXm9KQtAj3KFFUSb2Wz64jhPbUdzNAz5YABNwW18",
  "key15": "4cr8qAkE5me9auGjeGt5eTqTo7z7n3HbHbLnoNy65MJErr8hc2wYyiSZGRX6pDuvWJeiekHWVguUFbz3SCKCe3cG",
  "key16": "2KAe9sg5usYmZacxfiiFhCS2BKgmxLG9tbgLukvTzPgN6ZFMap3c8uepjWTLvE4qBw99wwTqucMoTixFX49DNX76",
  "key17": "3Znkq6BF7WUngsMwgVGwadQX7m2XE2zMuwvCJFKqXrppgAziFzGYp5XyGD8rb9K92iidc8hsQVeVPLk6vb35yUS3",
  "key18": "mcwarR7bnNnERdQLoxxHnFQ8B3kgGcVuWFSBDNaQxqaoZDgQ1aUH77aydNT2TBg12WLLEvKui84pMFmkn4VMUaq",
  "key19": "39em8dGCpHcZLdm7WAKxkrBBngZSfXXc77rLUu1HjCFDZ35D8d5MLKpYBEtrj4ciek8ceev5KBgNUB282vaaTHJc",
  "key20": "5hKboX4dEpf4R2Zb9jK6MnA63gpAr3wRgYnKd5WrBrGe4P77GbrypoiijTXsAfUsX87EhUGhU5L9cBfj1CvwU2bY",
  "key21": "4aiWSU3zB3SzW787DDSrPajYEeh3mDDnDx9SWLDCAQwAGyEyRWzV7vAtFposscy6zvhaK6FdoFPxN6b9D613Uvm6",
  "key22": "qGHkvns6583x6MTqmaKhv1T76znXBhyu3BV71816aUWc9F7EnzYuHK9MPYX1iFsMLaVuop81jdineN8LB1qCNRa",
  "key23": "JMXZ3taoDajGqEQoz9DTJBnZ9hphAtRf2sMUh93EQ7SLTAfRTEmvxsiBGrvhxuVirE3dTKHK234Ha1R3CoaXPfL",
  "key24": "2dV7PDBuG59GWxqCf8Ln1WYnByWgZdZobQiQG4QAd9v4nrqYdCJahPaqmAb321UsYy8PNMjDsLCxvPaSydeuH1nd",
  "key25": "5sVV9sv4oD8bZqzGC7WiEgaRr3Uoz6kEiq2VVKkCPK7tPt1wC1RpKxipdw7wyXJVjL74vJug11wr661BkpuFVX4T",
  "key26": "5Q3Gzq4xuSCKGdPNuSro9gqhMvwrGF92YxtidLJHPRVjLngHL5TKjxMfDBeRoWMn83DizhMfHvYB3Dy8KaTCeK8A",
  "key27": "4bN58gGLodbQFeRAVqsot2JeD5qjSWeM8viABkhocKt5pY7dJGhBVRo15WyDfKFoHADNv3mrt7HZ9svzmGfEMRVp"
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
