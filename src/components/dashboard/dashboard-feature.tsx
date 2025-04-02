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
    "kwqcD6VdXWiHtH44HZfs87FsDas45N2aEE7f2MjXEFNVdnYJ5nyoWraCCGdKQnYt9gJdph2yzoAjy1i8RTV7mzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrLxniedEuAPmyFyCT4yJ4fPmofXPum6gqRhhZko37dR18eefJ2stuMuCpK7qY12zVEzodENj5F9CHudBfTPgxc",
  "key1": "5jL6TpHzMBGS5yTeDKCt2tsEKYakqhaPQX5NjVdY1BpJqTTue5ymJ8anX1bYK4M9T3Ck2ijmJ7E6UpoV7PbgLuRV",
  "key2": "46j2nRDjsav9bUWnbx9bxfinTYVqJmhrR4fUhFMFszZ5FELPnohQKFhsVyawoMu5z7MS1qHZ5itc2EzFMHCesKWe",
  "key3": "4gfYmdrorV4wfCyGxeXTMyu6xZUecY6zTvDo8GTQv7PsyUdvRDojN4iSyarAuFDVtGEk1b45sqwU76mA5DmRCKy9",
  "key4": "5BHWE4BLid5KqL5go3u21HDcxB8oR4ho2eBeYo5DV3dPiQjbgTFimHoYJtVW1Sk4Vyd2RCVkADoQKRezguPmG1UX",
  "key5": "2YhSgdR8t2yUfCzf4HekPMHq2pTqiKmgHWfzLJsqoNKh4Vx9yGiXFjuDxP4LTsWawX4KRvng7LGFFDzR5sVNr2Qq",
  "key6": "5W983FuirxYo5emd1a9S2inMH144DSVw1nBf3dAh5HpamKoPTbR3c9aAh9Zg4BAxbHc7MB7YMQFTyrUYfx2J35J",
  "key7": "3iwiexmkmYGEnnjwy7pSMTfzJEYppTTH33R4o9nYxw8SWFYXieGAKti5fzQttkAAtfU8qFZ9WRFe4GoAnjNDgmBv",
  "key8": "FbneGxiEE8WBtFLmW3v7MkaUjbzzVYQiT4FyjJaJkTux8cuDroJ6gouvYu1cJeaWj4t4ziuh58zUg3C76ckvS4s",
  "key9": "26KbCaNZQM6dF7WSQniQr2DGvxxPzqqTxwaEsFouktXfUbcbU4WaUwUKnATK4nTMDHQn22SMHuUeQDU5W1Nw67X8",
  "key10": "3Gam1ixT1wHsg8GKqV3jCKz8ijvsjvUab9HqcwwQmshcsTZoZraoA9ksSZzSrzrxcsDcqqckz7ZAn8iPQwPEmjv8",
  "key11": "5fuWPrgd474jtYUnCEM5UZcPNGqPS4Xejj2DtFQbi48B3ZGTuMCgEV3Fj49H2K4pyudrPmkb7HzeWarA9ekshygG",
  "key12": "3HkGe286uL9VdYW2ytkcmRKJcc1A5EfWzBsJFLTEFMQ2aGBbpdVFaAR317yjZyGhZQpUNpsjFizMVHhiz9iiqvrH",
  "key13": "4Ct72FGN5fnYGDqSpHDhsKFF8B8AVX3VBx4hoq1erAY3Esui3ebbgZpT9RDyYJvUTHkurPSGraM5oNucWxuGWMwF",
  "key14": "4WSZQgdAjpn8mAeLvNCgy6HrKaM9CUCHiRBZPWBnDNrJmqGePENSTYM6f1AFaAx2W6y5ZVtaNNy7pLKeNWPAnaaU",
  "key15": "2iLT6AhCwWhbTskbAqHtTgoojXFRYiTm9Q6spmXnb7Ee9XASjujocj7ctD35arnw2eyoQH2p3WdTZgFsrqGKTThq",
  "key16": "24YCm5dgWSkg9G8Ce3frDodmTbYx5ZrC8H537dGrh1z4v5i7wCVhBeMtVaxBm5UeqfRVtMPn4XYs31kjqgCzZXqb",
  "key17": "oSZcexD2GJxuiVT7XcsYaETCy9xHsrgBDkbcnT6FfpUyEs7K3eCtEFAB5EaHSVZWdRLhgnPm3TsgJ3qjNCBXuRE",
  "key18": "2GB1DNDYctJu33azWvLgbKQhKSrJyszg3mArmxyobjzv4RKsuN1MKjkVxHEfWsQ2cTQf4Kzwz4MjvpbYChM19rVv",
  "key19": "5XesaG2KeCqgi6MAKNjPjwYtrs7Sej5uBNcWvwRpgseJaymMw6hXNeccHSqVQWv214XJwaoAzJeF8xNBychJqHCm",
  "key20": "4Ar3Hyb7wWxaKLPo46WPBG2ax1GryJozQ5KNxbATqYxsbWcMN4XXiHL2sDwGMYwPH5SNcYrFaaPLbVN48VKn6R6r",
  "key21": "2Qo2jvh34gYSKQZi25UEZ53C8g3hBxboffwrZpqD6iTYHarYwXsdjpTzY6DM7GcKdAbSwzv6Y47QkWmUd5gedyKV",
  "key22": "kvR32PDN7EdTcGY1pmPTLbqQzsaC9GxExasF5V5Gk63hBh1AKif7n5BJWZK6f9i5sEFVG4frqXaxKm2SfeLGF8U",
  "key23": "4xqiRxBD41933J57neXfWRjx43FmbXxrAKNpLNKt7CzbK13yjWhp28VoLdy7isGf6oPnzQCD77a6os4zZrRUWJJh",
  "key24": "4hBKZqQzb84V8B8xG3weE7ue6um5zXBC5JqWyc5B9DbMrcqmAqnAMqwCZKXWiuBxVgyRPPQmAmv6w3mwgzT1Nngy",
  "key25": "3zw9SQzinsZRWj8U6qX5TcEe6Az4nYop5cqyZ71yFbjkS7TM5ws2KChmHNZuF4XU7AsUUabnxSJJyoGV9ViyNNRw",
  "key26": "usd7KWuAT9Ppzg7agaz31Lmkrd4mMDPrRgG9GHQsxjngcTrzZiPDyypxueoFxojWqphJiLVYpCMiPE5QSRoz9EK",
  "key27": "5wBX7Fzke1bzDKLbMqouZKRBAogMUfRq85qbykFWoBorooGDN6xVVVcVSq7qXPHbzy1XdxNUyfd3YwAAs9cdNoW4",
  "key28": "62na5G8wMFrMDacq6sr7soLSFoXzmnCaEJLSsqCaBHX3Hz3uh3bMvg5tbq6yvQzVNU1hneHg7qXM5m6TV4f4YEhA",
  "key29": "32ChYAb2p4PZkSsSRdmTyM8Z6vbS2sMw4LxZAuK71J3JP9MkEdFQxWqWH8KhEDBRta1ufwvu1fr75DYZCrqTeeRc",
  "key30": "3UxWZcregqmfjZ54MdQR2cXAVvKMobikBt81ffqfLfc4p5q1L46qcepdkkDR1Ub8eL12jorcwGnjQXxCbyGJ1SCs",
  "key31": "3DzAP36iReGBSVNJUPBSYq4uzd2vedm21iKcm2d65Mp8a9KhyncKhZByWdpj3suVC2UhTYH9PtrFFUjoHHn7Rws",
  "key32": "3kbLwCXk5GUmPDP8b3WSNjwoZ7eLieYQaoZeejK1UZkXDVDqSPA2p31Uk4WwLbWesxeVajoBfPPMDr3ZnfZe8c3P",
  "key33": "5kLLmuqLni2XFNDoKywoK7cN9Z4uNiSavpAbYrVRNmFoPG8b56rCe9DuACjrco6SF2PXV3sKLcwrs4u2A174czaB",
  "key34": "vzZ4aZEJEWtawynstrFs1j2okDCqSregZAZdZa8tPfbiYDccGEkGPcYopSj18Ww5SDbZJ3XVFRDFV67jhtenVwL",
  "key35": "25QDPM6wrREXfGQVWXm259h3TFBYbxvF3K9NUEjpB3bgf1E7HP9ppxeeMnovqiyHQnncqPvFUWEmzuQJRbRon1hZ",
  "key36": "3t48WQRx4QLsiFfz4NH1FvroP72VpcKFPRZdYjatQeMBoqgSuPNXbavH8wM9KTr3Ekr5uK1odZ417KMvx5wUANwZ",
  "key37": "5K2mp18VC54onds538pze1ZgdzoZeY1Tf4X7P3Mxnxz3hzJ228QyPy5CHdwo5Ls4u2eT2i4beXAybnEqhCEFXxVy",
  "key38": "31CRBH9DTENMG253GgWuUDYYGTaxCUEXrZdvSy4Cfa9wCWiedoH7bR7L9VAfV4fEHxhuJufmQ5iRqCgj2SVsPtcS",
  "key39": "3NwP8t1AL9titH2jEWHRxeVVBMTsTX9poBmNKrvbB8QyyRdXDihZvtimXfxaQ569FnqFmCahvRsWciXKkKx5Tduv",
  "key40": "dYsXgdfRffybj3JvigE2s5HyT8FV7v1nth4AVxjhq1p1zMAeH2WPUiroKQYVELQ3o5Rxnkq7pwvrpM5SyUjuSRa",
  "key41": "3BQs7esm1bty1eQjrHjpCpGhna4KHqiv9ebF6MiBNUXTB3jujXZuw19wGVbGkgKa2H4xFEgmNANnwuHSLdYa9cFz",
  "key42": "5MQCUm59BNrAZman1WLDY94aKZo3eKmWbAvkrSG4abmqm2yDnatByoPodqK1dPJtHfqivY3TQE7Vnya3VXusFzSz",
  "key43": "3woyuSUdpKHjuX4dZDRjEALvyKDZenxrGradtymFXWszFaacgcqXzRR8s69GetV89YaVWBBu2rRoDCrz339hhN6v",
  "key44": "5HhntkpzQP5aLapAH92XFLazNEJS1twz7xfNpaoUBaVXK4JtWZZXuT3zs2cDFsRZuYc2dFRJGgfELX1frGYEMquF",
  "key45": "3yeYSL7L6vSRpFa4Hjq5oWBRoKpskqf8NqEZKByxQTAoCSxuJF2tFLxE6oWJjsKiyWXiQWWJKpzU4QjerweZmDYF",
  "key46": "5WgLbR5iD2af67a4RUugjFG61LP4NRjETTPMRKWJDXsktQXFtGgySkJfeV1gbmq4ktq6FqNki4dyzrhLMHJ1NH68",
  "key47": "qkemK8SiFMocpBNqNws1RrHhVrgjZLWmv6t5f6h4nb7Zuzbd9Vk9UNoUBrxU991P71cFYZxN3pyPp3WJQjq7ae2",
  "key48": "51uUjuBHaBerPAev6BZ9oPFNFaKnMVrQFtFrqpdowyBMQCcrrUM9Unw58qrXERswYciCh5bSpYGHqZk7LfncDGGn",
  "key49": "54wMBLDNa14fKBMMVbsWAYXBEjdT1ixog7TEoZ6SBmtbDsLzqy7rBEmRxVMNV5djmpcTTzTwkzTYMXmxHC6r255B"
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
