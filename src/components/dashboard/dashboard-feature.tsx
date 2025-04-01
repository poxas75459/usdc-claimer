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
    "2xasYArasNrori3zXuKFR1LhXSBH2jncPdZyZaw4Eb4q3RvKmZU7chDkRtZngsfCM4DuzMXqBs3n9m5xhouFSCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T9wcMnkbhLusYBzXzHchB1UL22KsMQxbE9M6MvxASbZ1jKLgEPA2p3giHmNRH8wpGqK4FbHLUd5Z87WGzkjuDUb",
  "key1": "3ZNjYw3WHPh5GgSjMUYeeEQyG6qZcqSnn8LAEtQDZSE2MHCD7FN44oQC5Nwp6xYsUSuveQPe67vxXmExhGYAsQuw",
  "key2": "4EvZcwgYMipPdxrPBmWHPo11HbQufWS1W6hQFQMNqWfbofq2Nrqf5mg1M64t7FaChWwH5x8Ny3udfRb38dL7SAT2",
  "key3": "22TMQvT9K5nDbVbXDshV6E1uxAdQWp1YdhRmfVDBEkFAAkVZo2NY9wF5fKAMWvmB236WEbYaHKY6KHGavRt2JiFb",
  "key4": "3zkVM2hjzR8ZwWrWp1X3N1dQkgzveu27aP8n4Ln5NPM6pdmEuGb13k5Fhjn1QfEMzoe1fjGa8PVmLP3U1CbQ48FA",
  "key5": "64H86hxV2mojCfb2tH24LiSuH3xPos1FpXL7dUr9d39nQo7NZuUJCYWAwbgJkCuYLemwC1frp5MeQV56EzqUoUnR",
  "key6": "65aXc86p4dRsTGRtDzfT8c7sDRfH5AWHdEyD1RDnU2XqE4g4F8jjfhGXzS4R44EBxVqQrPdaHwU87fxBYUFpY2Ps",
  "key7": "3Mjujo4zWwvXdQRr1sFhcrHC4xmKF1gnVVrZGQrw85Rh1yHG2dDALusSqzTDwqmeBkhyhuAG3nhbvwaehtksPc6T",
  "key8": "42ze4n5QJVqMz1cN7xSikVctJfcgeV5XbtzrrjnmYZ35bDyYELXUE3cYkgt7YjTgy3hwjx3AtbigGQKCiBBrFkT4",
  "key9": "3PsgoEpfJ22bFPFVfy4izi5bbT9ktZkDQufyu7jzNfCFu1NvhtfukfivFkFagW1maHdzAYagCgB8oP6dnakvC3HN",
  "key10": "f9qyPu8sAb6mnQkbNEEn9uvKRPecLdc9fc7SrwQRqBX7Ecib7AoS8Gw2zFpiMhRotf4Nyg7GEZLYrcb38ajMzw8",
  "key11": "cVUW5r8gj8jBu4AFMvhTunPPo4boCLRpbK4ijHKGQS8ydDsBikWYD7VC112eiP7zzUShpyt5ZuhLN89xLM1Dje1",
  "key12": "3pxcJ9oxw3BUZiyAJ8FsA2J5sQwAfSnRRasL2KmrBDP8LdCCw1597wSwhPXZSgt8sYiqUtHVKoYmGbd1QxnNxiYu",
  "key13": "4Q3qJsnoFeuCVwiHEcKqM23dhw2zw2DiPzQkiTCWHXSPuTJ6avWeg14mjQNiNsw8jFee3WiXL7eagWt3U1HKWitF",
  "key14": "5hqjnenHZBky4LVhm9xUKJnyw2E6wJTwoYaWBLDWJZhBLJ1o2CARirS1VTJht4ckGDLr3hjVuEVjkSDDmNqjuCVb",
  "key15": "2Ezf7VyDtHaLua5FT1YgqrEj24rYgLd5rjvx3BjKoYx7825oyUeHh3KjdKHST4xgGhm9ga9DbZ3oGUeCbAq8Kn8Q",
  "key16": "2U9X6kKcdVkAcwy8KMAvSN6fQ1X4QkVbxRj3ETVibMFvVUEX7Bqgb1KiJeWm58Yn7JPSR97WcMAVeBnaeCFFsvLC",
  "key17": "7XyYsp8w3E97VQJvemzLSpnAwo5TcckAEDpQ9vbzVP5abKhJUBiqgkdX345puKFk5wvHb6emxkhAjwH3kJs9e3M",
  "key18": "XH9J2pUgeruFQzgtm4Yd8hRdvabakVze9jAPw1gzvnGHAnS3Uh3yT4tywWsBZ1ejbUkrQ8zFfCMvnYB5uNwxvV4",
  "key19": "3hSwAHt5zdvwdyJ29FK97ePGgTfkFW24C9k1fzdfrLS2dUzNs68gUpzS62ydviLJu212CgHv9nj1mKezWmTyBmeC",
  "key20": "3TZDBHf5Z8TPSa5p6LMPif8ktesoy7svYeMUMe98USoGRzxBCuPGZ8MKbaA15r1ZkkwBofTgr5MjHi5rvReoGg8A",
  "key21": "2Ht9fTidEyu7TdV3rEJwkCshi332B698ncKckyxjaBiaFu4tY8Jm9QmcbRMNspK9BHW63vGYSdYaHtatVQ1Fp7Jm",
  "key22": "2k3xReJbzYuGPh92UzBaV6oxsbQrChtcxTaVovys2pHn2GXCULGFgABE4Tbi6RpE8TqAhHxS2y8GrTgTsTJ3qkDS",
  "key23": "4VmCGwnzeP1kYB7FyL9TPJTeW6q9NuMHdfKT7f1HewNE8UpmJyD5qjVpjPmF4T8DPcNiuJZw1x2symzLDkLZj8Jf",
  "key24": "4pvYqfoagpAxnVbqjGyBWEXBGwDKwVLiGyzqaDL3G4F6YUVXZixaj5QZVHtqePANmpwqyKSuPkc2RqaXYeMTnQuo",
  "key25": "5sQbWBGsadRkz9osUXjGH9Fq4Ay3TTMb1WN5kD9FDUuLc1n7H4wMFXiFtVxaACs4oMWBQ7GcxTCpPn9SBp3B2WCh",
  "key26": "5i6WYCVg4X64LdLAqUM8GM38LjLUu2sB3dXG5MJGvskwnwuUA9XCgEQTczttehsVrntt4ESRDGxvzUsmxEWDddP7",
  "key27": "aKuomm8RwdKqMyXXBFi6cHjizdSGm3WoR74JGPfRP1ys3qS9rJLHKm3Tq3iLN9gLWRhJ7KoFWD4UrByzx4zBY2s",
  "key28": "652kYWYEYfEifT1XQx9ye3j7BAesD1LxZMpSXr8FDcmZm9KUCThJiPJiP1hSTciSFZxJ5V9TNkokPqAwtyuqmyS2",
  "key29": "39xDjY4o9dnVKSwxBaqjUggP1AiX9eZy1ZvxyHxr5Wbhi28sgdsyQk2U4RPz2xV7jpR6Sc8oCXBLBcf3V3MFVLqT",
  "key30": "qSDPUTzS3NeoApUELmqxX3y8notsVPVH3fgcG3awcDRBgtkXmzXnSrHtMqNBDwg9EGnV7chwPaYbLC3Ak49jxN7",
  "key31": "4sD5Do8evsaHSzWvNBhNbLbmUJEuBgB4nKrUWeHKbADrndoNgTB2pXVhafgrHJmTBUkLKjS5sNmxoneg5ixS2eEi",
  "key32": "3K1nbtHwdfAKt9ow6Vm5JqTAiMFoT8KXrUnA1UMt16kH8V1jzo8uMSb4KkT6XVXaMfF6atiKNSniZH9N1bj7T79v",
  "key33": "xTiRBMxo9zKSRvJUoVR1NLTXY9iskMZvjdjwmxSR9NcGPUiFMkavXLEUu9ekTQocUG9f3HdrotrrAQJ6Wf3kaHN",
  "key34": "35xTNunv1DBUVAwyNmkJ3FY2t1j2jfCo56M6NYxphCvuAXcWSzNQEstgiPxarT5U1QgbrU99kTJ98zTa3nRP3ai9",
  "key35": "2vfCwE6sY6Kckr4x1ffBgD6AW7xPyWQDNLgeDwdVRciSmhLp8H6idDYLoGBL1Dkh2GfcozavVmPAY7vrfJNX7RRL",
  "key36": "3FbPj3bwpKCuAxC62w4zCsyFDsPfrNeKB46NdyzoGutFJQjqDJmEeCYkJLZTPTewAacM17hgb2w1iJu1HVobJsvv",
  "key37": "gZUDVTU3vNYcF5N2URNd1kDTcGf2zujQ9pwAsJJPQhNe1GZ3rekUnFLSDnoKj32fGJP2mupoEFncVcRwG19wu52",
  "key38": "4BWAqnbPZGK54vtRENAMVCPpAi6485ZzSgkhVUxFKD6a7Cxd4S3GzuzfPV4VK91aorqNbJjaGttU7dTDs9S25u3Z",
  "key39": "4BVxYaBnctmGcVAtsXNVBHv41hnjDk9b59kX2F8ZnAPx91VcJ6ZwfJyUQ4vRVPK3jMZnms7AYbi2Y1bLXp8wQ3sm",
  "key40": "5tCDHhrzxstb5v9dkB1LkqjBjzGZdiChydL9BrSP8wHUCwJJ6rRpsK5vir2obpAU8u6w2rX2XCfkBt9ot4xzP3fJ",
  "key41": "3u9DNAhJeS9nja8PxVDRU4b9X9PgYtcFMsrznxfYTiFURcGMFZT9L7P7VCoiFMw6suYCYdWfY3uSrZEJxpvVYHpt",
  "key42": "BuLGkMhg4utCrZSe1VjkoygTj72YHPtviLgVwXT4ssqUsaiWxjcPXRB3rKKU1sXq44mZjEjExjZX6NHa3GUnzDA",
  "key43": "4YrZbuT25s1FLD9Bf9q3x1Q3QGV17Bvx5m8K73T4gQ1bb41JknSsygRiL76XtK8K5gLH3LqLCHfYjJm9HveD9URh",
  "key44": "2WqseeeJVbKyXkhPK4zXNQj8xHiBaQqPCD7dphD6KvHXfrfPoBJpZqVHgJB8dRUDUYVWjj4NRanq3VSkPSWSSPnC",
  "key45": "5bTszRZyLp99YYcptUSFUmfad6dBHkEuEtSkAugXojpK3fsXL9Mk1CFeGrJG7DzCQeGshjWrowkzz2FgpF8sk759",
  "key46": "26CSLXCYvSEUhm8X8oxvXq1BLmbv4Sk1kg2A4JG8bHH9U2wBzBwNZhrf5bz67Fujob3u6fDCaBaFvFztdNcnSQGv",
  "key47": "5PTuHH6wyj1fX1C8vNwRJq1Y8QErkeJUgF36y2fJn4FDCXHJ6EtynxDPE2x9uxnxjBTciY45mkFgcqTHQLnm4mfU",
  "key48": "5RDQLS1kknKUKH7SfbQHg7xdztzofiH4KtJpEiJcnbuABQ2mUeeuafFCLyvedDZeE1HAPbgLqrc22FpvTYxwLhQr"
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
