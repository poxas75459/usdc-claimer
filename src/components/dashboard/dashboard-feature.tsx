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
    "63knybbP2XaaM2S9pSh6msLviZZ5kpJiB2p8AmAgprAoG83AMGDt83UhCWjzpU6QuvnL5G9aacr3kPwwoeAfpPyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53M24TzjbRGoatoqcxk3pC2Ym4BF5xjoZkicDVeNCHuRFSrwFSmwLxV9DV1rBdSCzejxq7Mt6yWWqhDkGNMjpvVm",
  "key1": "naDBGyRnsDxdJNYntfEnDoFDR5RptmnbeQT47TC4DBFVpiSMNiALkCPTkaqEbXqXVtqbxjpiFJWKsFoX6ML9r8m",
  "key2": "4VoFPBMutii251uSYhSVPbjZtbpjDPDBxeXPCf4adYcPoM7NvuVwDLDtS9hpxeqJy2dvGLQKDG2UGkPKY3UEsPCD",
  "key3": "5oPDwXpNmCwwA4mxLuFULyAWyFSBuGwYs2axjVqKKBYhRWaV5ZRyWMjWqjeiz74L8XTQo9KeTjQXt2W5iyuciBt2",
  "key4": "5qFC1LzdiSDsN52MELV1dqrEmUhNifFgFAYYTvBn2csvTEeXUm3Z7aMfDcoSxDmxYLTRKf2rsJSM4KjMFd6WeGtJ",
  "key5": "2nRdqzNnf7m1FLVHLDUN11g9v3qJnfXsZuG4oamxpdUAihFKyad4Vi1PUALEVViWs1ZDeJnjX79t4kaqpPbLfgJj",
  "key6": "4K38yhZDdcjKuw47r9dEjL93X2ZjCiLuUgSsdCr766Ppo7VTbf5XJJr4pNHPnBPntpXkASKFjDktacyiBzTNprUw",
  "key7": "5HBuyM95nfvSzKPfBKL5gDVqQTwvAcYcH3MPYKbn7sVssjXuoCpNZprxJ38VjBM6DB5CDNBUGhiYXNJTgawqhVCf",
  "key8": "4XYsCMs3f3chSxSUGei8vtAGcCmrpfnWo9KbRoWTfPNGRDJf37wpvE97jxSughDwWxQcMRPNoC8Ctqn6sfyk7b8o",
  "key9": "28KdjG53VQKbw5Jzj7TQ4BWKTDKQ1xh2ivfrPiWXymfCRzSsyyapMAMkNmX7LD3KHneQDMbwMsxKfZawtwC5rWQn",
  "key10": "43qPhtf2QHzSdBt6p6WBFXMCmhok2peL1vWTBAsttm6eXDwF7U3J1FJmPt6cz8erX8MPZH3Pch7k8EMZKzR6xD9E",
  "key11": "5uk6wFzfhYB4Wt5LDT8NKZhBj6FqMXpBZciSFC88XW1p93uDN3JiJ2UcXYyGBCnTVqXrfAuirmWGjSvxyr73V5mi",
  "key12": "26xjYK2crhZWwdA4frsmAHVvVdy3ntn3uKiZmyZ1ypS4V2vnYKtHsAj65QCMQJ5vkHhFor6YRKb7XgHeKWTe5BFc",
  "key13": "uQ3hJHnnzNUxH9GvHcEUGu2S3PKpGcqPVJPV1iedV5eANuY3tb4mukP5QGX4ZgCLcwHdzNwFXNQBgb7CHknshz4",
  "key14": "2jEecCVB35fyEu7aNMJPfemEW82kLk6rwXam1NdB1Tq2PVL7H2LmtiLXuc2FLesC2ahMnnUZTsg9kopErptkHU5q",
  "key15": "5wK8XJyQp6WnC4DXUXny6ZJDofd48u4qUV1kokneNKXCvttXM1VF3cKwiFHQZWf5UQzotpLmhi2ozLJaM6SXyybi",
  "key16": "5TmGT9Z18LG5vbJjynHk5GN4MiG9N4jpdztuhDfw2rMntAkH4BcipGcU1ZoZkxnLZdwAX4KotFZ3WidvWkk2sxyZ",
  "key17": "WHoHRPjhGZEVEMJHdDrNPTiDGU2WYdBdj5zRVYTQGCRx3k87jjBJuM6aKp49KfVAGFbBYp4AjSe3iva8qoLcPQc",
  "key18": "4r12oxcBzY4be6kLuJNf5XcNwSzbJtV8JwVtNrb2Uuk2hZHrvxpAVenT48zcr6DZeNUN2DFaQUiz2qC98j97Ghww",
  "key19": "5qTx4rGfoMZeS9uBZTvWgPGjmPwSbuzPnHyH4SjY7M66ieMDM9xLiXAmzYo23icPPM2PpYwGrYxXg34tmQ7SztNe",
  "key20": "2YzrRFRh9iVbCMNKoNPVUPCSUFhcEz7CLRN2xbTqPWfyuTqvTkVpdVYtBNzgzKNnofMAAF8Lx8StYfgWcBCaWwc7",
  "key21": "3sbdYd2cw5EA8bMxE7NDtPAAGBJdEkXqVScpH5eYgSnmLQR3JUePDCqkKy8AEoVg9GUj4io9RzpP2bWsMwVEqJ25",
  "key22": "65c9uDAAHijuNXdhSswpfQFYJxn4qomvPo6nrscKVR1V9HMaB8ZtYkKyRmUEVgw2D5txh2rGXaXuJq4fRHEh12G7",
  "key23": "49FZjy9MxEaKpCvmoppCWMBgo9oGaNVfej3UHHY23eMbafAUexAWPRxnob3pzd2NCao22gsMDQbzZ7qL57YVa8vg",
  "key24": "5qdn4gh3tDh4Cr1f2uyd1iwEers7ehmqctZvYCa2N29rVbx53AuYnpEbxpaFx93VJ6FSA4J7Ma7SNVhVuJ3NqifY",
  "key25": "JhkvkrYQWjWRaB22M1qtNfmtvkqP8F3rtn4yDWNWFeYFYR6wUUw4KAk9wJQZsPxzLp77yf9ws53Wd8oYA7k4oEo",
  "key26": "39pHEfKEuA3hZZnQBJsWgZDX4nJRGbt4BYwuukLWqCjt8cNy4FGscLotvwiVrwc2zSjHUGMg4vXzyikyBFodEphq",
  "key27": "AaWiiYXUsRGTWT4Es2tu3HAa9earocyHsryDjnB4ybjULhZD9FNw73LiPcptuKW3YVf2Z2PQjhpYGQg5C7Hf4Zf",
  "key28": "5eaBKJK1TWmT39CupFmqzcpnRV72awmCiZLEHdtinHNZ92B8xkrVxFtiTPU1KbzpWLcFWBpx3Mf6ZRwoxTDHG2xy",
  "key29": "36x3jHuBUvkU3h3ykETMxkxX58KYp78HsvwPrYMsWpgjsq31PkjB3Py4KqznJkqsr2bwctpQBGaXRktwPMx3JjBg",
  "key30": "4g23wy8DJkv3V6dCTGUTdQxUhmNZ6PSD2rQLMATxijrXyjCjutrK7TRmStQiM4JoXR5bgavpLei6tnnw7CcMqMfZ",
  "key31": "2aoDzznwLtvpYLzmLn6EZGDm5A8F9uno1ryoA3bpRCufjxXG4zyTWkx6ZxHqowWu8Xg7ttwqK8SHQMMyndjKY4HF",
  "key32": "62ECuDB1EFJPhxTPEa7kqJ7nFHBn5UhwpB7kYgqpyU5cVbMva3aV2Thnn2pBQZgjLYpahBsKMT8NHCoRryoyqDsT",
  "key33": "2Qop1mwyKY4w8LxN98Kch4WZq6QyQKoqT4pWRaVcUwXBZdfnSKB5ftiitBdHcoz5YnptACp8Ed1tJt4k2hdmB3Ao",
  "key34": "4vZVS69EiuUcXthkvUaHg6Z9HxjKztYDo5N6SuMCDFR5Dzco91xFhbfbWUXE9pKPAwno8xJZn2sYxidkXtVpJxvX",
  "key35": "ewPmf4k6m9TrwW9ogZRAJSFNtBiUEs4MbWLzPKfG1zY1R1BHpqjp32CekdM9uBBH3NkCn1JDuY6hQmKkzSC8M5J",
  "key36": "5Vzf7UcbiLHnCLMN9sdZNLHBdtiFd9xtVw4qvmF76ARPaGAgXUjDAzVe9zuNvuez25NAoMcfjiV3duMMbDaeb5qr",
  "key37": "2G9snSrz6z9p8ri1sycphcfsfvwZJdzztgDrWiU97LjxX9kseZXnpPZUWViwoH4E1vzp1dfHEa4hMgEMNEN5m89J",
  "key38": "2xvTyVQ4NqcEAJscZ6L7sA7Kp8AfDxqKejpfgDEPVi5XVCTT1Nv8v27m7y3qPVVhQfWGecNg6aJEdXMjvpnHZpvL",
  "key39": "3CcNsVKHhBZSc2yLRgZzfcvSfeC4hsa5utsSxW5TAtUEAMPSC6kUi2syDFeiQHffuP9QHRKYHgAKjoCiPNx2ZakZ",
  "key40": "4mPNDR9n3bHWnb7C4LsvZGt7LcAj36VVDVnBWpswTC5TV17gzPgmy8voYBYquoSAohN4JqtbmGMaCwT22zNaEASi",
  "key41": "63hUsiaqQSDawv4PTKThKieUnzLzMfP3rLG3cuYK89XAPBneRqT5BfUjXxvTjNbwYf6vgXFoVxWsaL7u9AiiZv1d",
  "key42": "4NE8erj3kENXQEg6G6kNe9caooLf4M5y2zJrvUzx2N7KCNLf3NLBX7RK5JbsS2Cx6J9idwHhXqGjWBnJ8maSCd41",
  "key43": "2C6M8URqgJc8tk1QHEfk1HGxpwFW9fpDpTZDeQvrCTQcXwWtMrjv9VrWL3k8tum1kg36gXAdhDdXDHSCvJ9PEALo",
  "key44": "3jp6as89j7HUo6myBNHYEaJNVTd2NSpcV4c5GVJhhULFLikEWbxcirXZxpRZxcrJBq99tMZbACsJz4pvAobTZMyi",
  "key45": "4UEHHrRKGhKiFbNJRfKaWZBJ8HE5MitQy4Xebt48uFXfrDnXSgtgaEVhixmRPe4cWdatC5zmxUoLjuzSacwFey8m",
  "key46": "4NQJeRktDy2PSjjzaTrtxvGgKrsDzB7uo4jhAX6iepBKkneugydWQen5R1iUB57HfDXuQcRxnvjcf8Fqm7exz5hi",
  "key47": "276qoqJ4nV9DKA9s4KTtaMwTXUziSM4ehCaB4aDhiENoPRsMbCqy6vXbaPfEwvuLBM34t1F7BmFDFYs9vWr8HRaq",
  "key48": "4dCoFXgX1qwu2gmtmza55wCnLXNx2NAQBjoqFGXp1oQpvoRB9cdYR2pq8qW3e24cJ22RA7TbpRZgRL16azsaqpnf",
  "key49": "2FD9rX2R3XeUFNm1CzVLpxiYfwCyPWsCkVCUCce9ryCEVmwM2pPvsMCgdRWRXyd4BH4Lw7HB2eY3yrFhNAduVfnc"
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
