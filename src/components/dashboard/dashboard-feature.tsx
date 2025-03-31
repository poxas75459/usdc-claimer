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
    "2YP152mAY1ig8fcrwu2sUMXcHk5cSomcmjkbUaGLiR2uhEwNzNYyuH5bx2AEjPHstY3WqcmuajBY8Qe2NuUDNk1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51G5szSzzRrkPzToFwYEphJDB5JgVLWxvBQFxaZYbmke6bJs3AabuBfpG2YZYzPbKFTqMCMr8b1KXen3GfkiPJxt",
  "key1": "3Yd1eBxXSN2GsW4873xK9hjFisWAB4nLp2aBbBTBEJg9gEpPjTQbUmfjFPKJkFaajNQCDVkoHaM9JHwFHLfumMBP",
  "key2": "4ypjgjtkpbFHPbmn5TDwH8g2VLHuYDYBe9AyH4nrxsiG17RcbZk47DsSr8ZG1BUTpw4fScAy2D2e26fafwo7CFuC",
  "key3": "2RYRGFHgtckywpYJaGYVndbLpmpWpU1DwL3xf8fTQ14UPW72DJRNEURytmTqQR4U65UJpeCh2gkRifVfENc7powT",
  "key4": "3NpCpLZhksacXT9GsRx6bZzvFfP68j222ri4xaNrjxAzh68Dcc3G24UbLpXy6s54p3b2HbaiwvYP5gKQVyPw7R1o",
  "key5": "kFcDXhzhXwxHFRMqzNEt2W6hhibPBxM71zZcPmqHqn3hWB9YA4N6jYfd4Xmj4iPMgM5TJC6jH86L5ZL993gcc36",
  "key6": "614T4tCVSDMtKAiCRQMy8e3yL1epd9JAxTzchVLCBoMRbbjho6ycEVuzgwALVsdP2XzqM2iQXbmpkrnVCHM8iSAC",
  "key7": "9DuJbx3FJmXcbw13t3xCUVpD9XNcAYa7WvSXwtoboJoMMfJY4NK2C36oj5ieXgrjwMoC8fa2NwUjXKE8j2WCPYs",
  "key8": "DLnorYG4eUxb6neVwcp5g4uyH7VmhMbAcjB6ybttSJQzGGs62qU7G3Chi94cE2o4tZVAqy3LKastHoXtp8VY3de",
  "key9": "32wz2Ckeg518PYZfor3d6qxtRpKVMLRs54nFqg6Lg8N9kfrxg7PCNm2EkPKefaZiVQxcMPeovjQBmTM1xT31oVD6",
  "key10": "FXNAe2TMNuGYXyzMqhoMqc5hpzVpZPHaHDD85xjmL7kd5BXDtsaRuLpnGyJpUJvT1sGXwFuapy5SykqFyR8ZCec",
  "key11": "22dwrakGGNKBDprkPpxLkohY3ogDbb6kfpSadonbtfk4gHhmpAx3PhgJWuvLCeWPhYpKfTKaCpdGJSBb9wkp8wJz",
  "key12": "5UXvg5qY6xKtHEUzp9YSaNM6JwE35JZmeM4bFFMRZ81gyYEu3bEiBAJK344XCyCtpg8mDJNKUpPW8FHMSyDP3FVU",
  "key13": "5iR1Vde7th4J2qjh8iZeRwuDx3EZKo2xRuEevMddU2eism1xbWoCvaaZj7R1bGz3VpczdJE5NrpgxZ5yK74gGcKo",
  "key14": "3iiQPfQgnyiZycPsmTrHvWSHVCAEpmNNMyq6crGc4NwchUPkpBLVjjtksKeh1eV5g9ZqnA2ztpMvpo3k11bJYQky",
  "key15": "5ttsmu5e4NvixDs6igj4E61WgLKLuBeGp5dYYTsoMz7DgkSGfBW9eCFjdD3fgePB52MQC8iRtPoggY9bfGQztCSc",
  "key16": "je5jcXzxVMCXYqAvAjPaBho97p4K1W1ASAn2AEXRaKfeEDW84LdPk2DpNV3M2EJH2NvdRyEujpzkaFzwomcuZrt",
  "key17": "5o8rDLR5o5ojEA3kbNjFybZj1oyZ3sf2kQ5r5amZGcyguw8aaJVtuu6LcyyAdskd5rc1QfRzuTMn2PBdgjbXEvk7",
  "key18": "5PccVqPNUoJ1xHp7vVX3pQGvY4vDo5nGeP21UurZ86yveAL6TwbYCsnUYjT654H65gxEzsBrzb8v9NYLpbYpbyWf",
  "key19": "2ZC22Enqw6sDnz8bXqHRu5kN3Dmkm3BATSLAo8TQG4pf5qNdZ3FiXkyaaAAVr4QXWycFa1S241EeiFh9VFA7x3UB",
  "key20": "4Dhxp3145S5Lfh3mTrHkSt3bjbdyiqV492PN3WEBRhiymgpAPkXNqtGDQkMD87k9Whc936sjfJRwVhDoiiRxPfbC",
  "key21": "3YkwAohjeYCSj7FtnvsRjjfwRgoUh4g24etWeK4b79gLB9tmjkvivuB7f3sQo9iUfCDzH6bAp9vxwZsVNsVBFS9M",
  "key22": "hPDenjArnMn6o1VPR6wByvfTy3ywa7vmt2VDgUPLB8iPhsfaC2Ywt6t3f82NM1GMzrmzrQf16FYEh29jWW1SE3e",
  "key23": "4sNUJJt1osDUW6Bkhi87VH8uYoWVjSS3uRSYfjRNg1MkfDHnNftU1DMDDcYFteV26uvesfx1pxWXNtLBSsJYF2xS",
  "key24": "JYXK76U5sKjCueHNmkdTNHQzS7yUT69dr6tdH8xtyb6hUR72vQwpKzraxr9feauRT7Gib22vyHSutBJH9bQjdxF",
  "key25": "3qME48iij4aTiLu4XD6WwvANpBTuBzUpMNfDvLfh95vb8DAbLCzrk42XQWAdhHtJptsEbPaKaFVY3MJK5HcUigBe",
  "key26": "5DAUZQZ6E93undn9uwK28ZRsbwJxj5q5XgRD4d326uvcG3smFwnwUXzLtCNm8qL9NaPEpPftSa1H12sZ6JFgru85",
  "key27": "2xFsNo8hrGz8ZsKTFuwGodgk6CWQsypGwLGA2YiLNrSra9seEUVJaJe13KAyyU98kodkH1YpVoxj2oGAgDs3nbxe",
  "key28": "8phgG5M5t81SUG8vGLJD7oN2bs29cW6X76qAqUfHT1QUXHp4BQdeiyAX8kTFtMeAqUGaBQuRYvHaJNT6RgVRian",
  "key29": "4At5DvL3V4EJmLg2ktcBayKR1Ffqb6jm8sD6Q776sSQmcRgZefAohuuJmbGw2tvZJ4BbUnFK8pctDSYGZ6TCVbNX",
  "key30": "425pMTUMn4SsFAH5k2yzs8hfc6wmz6T67H1rBFVaXPmwLhBZodcUV6if1TuALsAC8ak8wzFR6b7B12TCqGQWHZiG",
  "key31": "SSbZnG6L5tjNCo19DPQcJW7WbeDN9VrByi49C45gAaesGvLqoD93jVpoePJ7VvDf8pE4BygfuwUcRaWGpWbPtJe",
  "key32": "4WCKERP8oMqgi2o4n5y7Q7qeKcHoSJgcXTfhrA2STSGKRpMp5AsyQ86wrRXUSKGHz1nmKG5PiG4S6Mtv8hEFFY6m",
  "key33": "55dobtMkR85Zj9UzKRTZoniCsYNsXVT4GP12Cxp62vkKM758vLCyPR95R3dnmR2QXNy8LTHDHmE8Mfkt3Q7NRTPN",
  "key34": "5N29Gk932HiMdESpbV7Zd1G7pVJ1U5rvBffmtjkhBTnxpCFTwmzFNJctc231VXv1UdtF3U8eVjH2MZ8yECwtF2Zq"
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
