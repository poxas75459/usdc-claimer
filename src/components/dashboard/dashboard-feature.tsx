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
    "2dGoc87PAF9fRoLrH9Wxww8dU5eACYZ4JrSeJMiQeM7NnQbijBQobYeTSNcVsNDwJy1dNDFeRGtribMZyy2CiFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ntg3RtgAsoGDEsNhUKmZWJi7DxJAMxwWizNcNM56Rj8g6HjFxoH5suBszmS8DGvwdjT9vUMCYq4egzJUEwCJ7iY",
  "key1": "2JrDfFc8JFs5tDCTbWNKAWXkqT9C8seLLNGkNhSaxLguuLAb3q8Gud8aHZkkfqdPJG2uBscrMKy4SdR3yNicNKY",
  "key2": "5eFLim6sM2biqrj1fQsEjEzPbNrsMaKtVX98Mb92qSpvLM3L3rFrtA8adbF8L2SmZVCVmCtQtAhXihGiFSMKgFoi",
  "key3": "2z1cLCE7Kn7C6GMub9tZPmhy2HXEUxchdr8G1w1QPgvvzCpKXmeoohXMESzVan4Si5JNmzvpKEGyT8LrWFPu4XeQ",
  "key4": "4rPgX8g8isB4knuby2EY5hVmqqBwUdCmV5mVonZKr3Dc8mnJZDGzkRCWryzLwmZ234igf2y6BYTpKbDtdZfJm6RZ",
  "key5": "4Cudf3HvPfHVKFZJdpFQrFLcUdhgaf85UGMnhZwhjVcAdTRJyAT1PmCU1idXqD5d3D9TvMnNzJ8PE5swuHAJh7bQ",
  "key6": "CepXs7NB53BqgETbB9pUqKCZHQJ4MmUKp6Tur6CCAyNk6BeihRxKrH4M1HGzUsQjsQ3vCnG5A3jLit3WTN18pz8",
  "key7": "3544KqRNhL6Wg9bVW2V3qP87z41ty9xnSGRPcbiDQXeuwguGt4v8Noeron4yQ6awSi1Zm8ffzBpeVfy6y5UYkydY",
  "key8": "2bkn6qfwtgJmMaZHR26k5885iy65L1ufxVhDLg1D7ZiWKH9DTNCYb6nBetHi7ZPa9aKgGEcv1U8MCCQztwYQqovm",
  "key9": "5CiY4B1Ao2FFiN9f9afwuVeswamdqH4yhanaZ49Zm5TeMe9ce9z4jfa5CybtLW1iHB3vDWDs3S5Beu5WetEsnLFo",
  "key10": "35Y5ectdiz9owHiWHdCkR5bVrNMGoTiGG4cebJeojwY2WDDNGrxnzzRwTx3ovcJfpjHVp2sVW68eZvJPc9uLVMLP",
  "key11": "2kcGiPFMDHcpoekKjUuzJAhH3YJQ2QJsJyecKPJcSHwihKrjRuP8wU5KTrt8na68W96Z2wZf3bDTuoURE1WKJyY6",
  "key12": "57VmHQP5MfPy2wUiFx2VPzrCFViQjb6fiWKsvq3zFzXi8XuCstPPtPE3ZjNNH1w4eG9i3mKym39j7cvPLX6V55sD",
  "key13": "sk7f54PG8LBmfZnAmC1GuzpthXatBdi4h4LebABmg47sPvGPwBxH3EooZ7zggGu2sn6JZVKc7nLP7XrAo1se18v",
  "key14": "4eQqhyN9jGqPVz6UCwH8JcEtuhAYW1AwHewe9zPtx4brXF4BHB4fimP9mFKTrKs8DEXMYXoF3avkzyGSv6uhxnE",
  "key15": "KXozKiZS7CZfKdRDo4Vtr8YrPAjry8L6hn7VkNyLL62Yxv5cyHZYBjDPC2xxrAw7oqx5D7s4qU2QXNEQciKdQHg",
  "key16": "5QLSMhkQFNF4H4ABPL3NeTvNzAG5b5KEcMhPGHRYdsEyQrWgJwQWTHgqdMHK7wXBpvSFbDU2AHtjfk4xhWhxmB4k",
  "key17": "ohSpTDCMaJMzJGeLxiRMTGRHSjgFRjx1hDjQrXCQN3uUdAMMfmqjADdcaZ75tbAToJzeE69372rr7RPBkVVTbkC",
  "key18": "5nshYtXEJ24EzNByP7kB2cyi7qQnxWSyagULA7NiC3rn29iRUMxXNuNKU2xxXqsJMUxhBKnSP9taAfDhUgAqATam",
  "key19": "3ncQTrfQ6juvD3mA2DfLE2Lo7mpmGdoCCiZdGj3139mBUvmJnAzbkK7U46MeYjNum7JNPTcbjP1DSb4cGsLMV77v",
  "key20": "4osw5iFDhFKMreL5qVMdaH2iBNXZnYR5SiHuf8RiKgZvR9h4xYDqvpjGG8u6uEDr3GehRCLFoDtxTs9qnHebGB8a",
  "key21": "3w9ytSZoT7gkk1vohkS5j7gsA6Rbj4cgEMYHb6bgfSgi366i2dYB3gaxZnpQyhKhBZcsuVd6PLfKQXF7mNGbxsZZ",
  "key22": "g2XeEZMYfc3vrns9nEMgkyawoh1AS79cjNPCBeDacTi5SXNW8FQtch8my33mBX3m8xZeUyDDNLpVRy5QxuwK8cL",
  "key23": "4caJVuqmTgwSt8yR13tyJtEYNrzfwKUQ4f4Ub72dogEG6PtUWGKYshSdwgJkQ1qX1Ge3ATeWRdLFXaUiZexJXjtw",
  "key24": "XSp1APRtZqYWx5bZcSkoWgYja5u6pepyMLoRg1uuuQX4aMAhFwDPApSbhtqvq48h7qqf6dYmcD75Mbpu8ma2A4f",
  "key25": "65mt1TikJMprWevHuDLcqDfaoU19pzmbov2mJxUQQzmQBsbfmBHiPChK36XDX5fz7wcQFeoYNrUSUyYKGQFb5krf",
  "key26": "3ujxUKKN1UeyZfmGorX7RxuJd45wV4e5opQGBhrzHLj4k3BgY6vCaxscckzEfLWXsdgTEdfuKeqUzozfqYZTqbM",
  "key27": "5b5Qi93rNaGPeVHKNdeDFjCauqJw1z9WhtfJoWWqBEfKXiMU8X4NrLCM7PFjUgqsemVEKwhKEiaFbKYExS9N98kY",
  "key28": "4rVtYQBMePL5Qt51Ch3eKXzS9xMXtBHP6XQg8e7XbLRmN2nmczhqo86JP7798P9456VqzS5n1NPoqJ2VCndXhDso",
  "key29": "FgK19KreCWiMoojEDbnNu9vBusWJKMure7FhZHBftUx5UURH3Cra9rRSQ6g1zrguTVfMCZqY6WWBUrqF1rCAcuV",
  "key30": "5cdJPfWmSe5fDoXym12xm6w9DCrLCK1Qzs7BveFRdGk8YanK2CF638ubkH1qhsLpcM3iQzthxiRLVbR25kp9qkzv",
  "key31": "5pEwcV6F6SvSoAW9gfVgUztXQPFrTCkcnp4EXN54ELhp5CzQ8QfRChhRvM1hDeaAiWgRxVgGdECWPn4ojepqcVtp",
  "key32": "29W4kdf5xbkDuJWHfV6SUDQM89zV54XCXjTgDDFM9PP1yZatoEbXSyrGfVhNiUeqaBszCynvkbrRxncFQ3H61eBD",
  "key33": "94zFARtywwfLCk1PyE85sQhnWdc7bETAQ8CtRgypCMPWSaNXCAajL5AwaqvLx6e6YJHiKZgR3rfn7k1UsHEn1tR",
  "key34": "4TPLmK43DBFtDBKvQMm9M3DM1mrE4QZckKxfEPCZeQDpnzHBNjr9x9tUkD7NtHG3bULDvcRrAZdzc2Dvk64yeJ5v",
  "key35": "5eyyHUUxLPTKGeLAV8CmoNWGVpnuWvYAqX8hykWLyqiTFDHom5vuuGPVrgtnnNcy3myjiyrgbhnJ4eGCXWLG9SwD",
  "key36": "nqmps92wewcAZcMFmoPGQMkRTupHRhXYBT2JXmVHhdUd9dPNoAs4Uy5q8ESVAzLLjg7iC9ukYUm5meACgsdTSFE",
  "key37": "4Rx6ToM1YEgfnsgbPA3G1R5TLCYRHm1WW6Ry42Mn3ALogDUszRBxfmbDx8NZbvCwU67214fYr9Kkepn3Vrmki3pV",
  "key38": "3Lv8WUXSL3q3BLMiJTS5MsDUqHbrvctXmZnZ5BT7Hfnrhv6KVE4UPzYQqu5xFfz1Xsirab4AahF3FVNgbNsCNkBW",
  "key39": "5kveBrgFLAWdZcbsHoANULBYNfiTWTrqhPc5i83vjKgxkHxV4tbhdqP5V4xoPE9q34bmc1qEV2B4Vsq2HB6CYEHr",
  "key40": "3J96agNinsc2uHRQh9362hMBo5c7HBgqqMcXW7LstRigqkGuEfBAyV1mWgvjn1BmDqEDxai4P2ii6fw9szR3xdYK",
  "key41": "5GSUgtNLJHMm82budggYmaCyVU1jUVd2Lw3ABiteHKcMs8y6jE9qJTgdMnAfTR7DxwajPoYu1yRLcCSjUPQpVDY7",
  "key42": "29kwd586hW3SitdFNeEeXaiLfmd6BjBPrrK7rcLWTNyZUHiBZcG3a1iTiegezsUaNLL1ko2tCSki3FZJPbxYvqmS"
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
