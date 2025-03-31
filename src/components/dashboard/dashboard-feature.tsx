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
    "gT21MBQsgXuhfHuLEHyxnD4h6DNJ7WckTkQTfEFSv5kuzWucBu32JEyUqWK9BxnQsXLCbt5yg82XGEtr27oaYeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zX9PHDLQuXDNabJvj6r9AN2FmMM6voo4CopHuifQQZnTTD9wBU6tfEAVWXSpUjkTyJVF1v6h4oC2vyq19T3Vd85",
  "key1": "5ezQo5Gei1d5MctPx8fi4Tb83up99TjMke3TysC5xw8Ea5VJgdtssj4fEEapvLYEjC6P1fsvzKAUoNuEGBUJLBLU",
  "key2": "3TEoGB5o3r8Y6N4Aqx8TpwmYPjk2uzAmHkkvbDLapCQrg8Mu7DRVKqmPwHhCzCjDDr4Dv3nRhaxXJ28Nqvy9NTtJ",
  "key3": "2iuCqFAVahovMezCMyHLzPPtLi6hMeHZZQ3EprndS77qi4GhY85txr796aySeGcWPx2vYLQascEf6JcrR7Wd9TKr",
  "key4": "4seCVZwxucrNMJtN4tAQf2oBaxjg4rsTyz9WDYPFxvokuTPSGa2muUN4wZ3pCNfMj2Z8cawWBHaSH5jJiAjbC8xt",
  "key5": "4LASfS79uCyp6ucoKJr9bpNm8rg4mhDBFtSjJkDt2UYVmmvL4uNzMP8yhG8TN9jqz6T35S9FhJMHLuP7beoUTXpS",
  "key6": "24uJ2KJ5yxCTCkrT4eY9rQmV2ZARv3V9cirhRs9g9dPqNbJGwu6UxMyHwA8KfP8W8VZ86zx3K7SRB1WzdVbWWFBt",
  "key7": "UmtJsMTBvuvDmzMeyyWR8NuYs47AJerFkHGzc6D77M7DVyncqVEvBTSa5fAoot25yiRXCZzbMeah33F78ha9uks",
  "key8": "3FJ1rPswk4sr1cyuJHMZYFZuGAP1H3RMPaLdS5dtuw3mu4k19uNit1xVQ4R2XyW6ADCjtm6fgjAGeK82FwPi9W3U",
  "key9": "2YBQg6jkEaDGNoyWgBKo3cjVcaVfVpLAcNasGodU1agfei4zbVMeA3U2wtL4277aq2EET88N44PeDmQxWFXcjsaY",
  "key10": "2aSeW8Nm3K9KPkmofj8rdmMachjYdfUvPAQy7C8MQfu8JgjrGz4rJxo79UT4QG8RLpXHdh34fRkwQXPVEDnm7yjz",
  "key11": "5XhJhzAgCHEeVUQ5yEFezX9o8om7GAcFqNVc5Sm3K2VzdS4dpHrRvuyU9tVGt62QfmU5VY14FMTVZzquFL3ApkDa",
  "key12": "47gq1DCT1dhnxewzkXxg55PNx4PfFWkVdKZV9o3zpyCFpFxbuhsetAqZyPHMAnTLs3CwbyG1q6Bv55GEP2sRBCBL",
  "key13": "5HuVykeNeqjTLAyJoH5hdJ2AwV3tV6Hqxmo5Na9Y2KtjeRrCdHmHfERGum283KZ6KmZPe5uUi1z66TSLvVcM6bv5",
  "key14": "Q6bRYicxFgcRX6yPj8CaCKaxVYvzETGq9dpskidXb6i3fiukF8pv1wr36SpCXqJ7obhyWS4BGTNMPy8Ba2JEtTn",
  "key15": "s7cZa6x6Wx8FcFmyAxeej95vTPA4mwN7MPjtfSHDtNS6AAh9tS5MeuN2E2oWSoTvyDqqCVCMpeYNp44oTZHTyde",
  "key16": "EQ1AHc3qkrb3M7eCpH8X7hgXo1bZ99bGFhDkFRjS8FrQac4RdUbZoz9ytfKaEeP7Fndwmhjro9qsLKAHnHTnT7d",
  "key17": "2sxA9uZNAUAUBMpo1X3XayRbPXmN8VdQhDdFw4d5fhGD59jz4mT8Zu7aPnBWmM2r3pX5Pm1QH2zsppQXh5p2hMKH",
  "key18": "4ywa243ir7WZ3Grd5rvdkUok3pFVhRkcUcurLJ9azuznJhnsG9ap3n2skGuYco4EhcUzj8xvr7HSP5NfJaniXmXp",
  "key19": "5LSpUckLWEjbgUz5eQQpQLPpyQZUHM8i4Sixgu95g5EGNzanday6zqe3aogJnvyZXsRRQPLJSkeehGX5dMrpmfYC",
  "key20": "4RgmNEVMaxfq32NmMtndaHfrD5ZydXtYfYp4HXPgvsmnJ4QDY4fHoXnqDW4QNytrH4n6ZqfZP1x7eBPZrjYkNNRE",
  "key21": "qrp5NKvySiMfFDN82NShLLqRdWEFgmdc2adD5arWn9dm5qYSi6K2ob6PF35PFj3yTdr8qyaAzNsWkJuJkRa5sbM",
  "key22": "4bmeiW2P3ENqHi9L3gcxKnLoa4hNBLCoh4rv6HWUTcQLV6E2Nm4T6L1GCkxvBUhBZmzc73cZrUHLKezvMDneMpmg",
  "key23": "5iWWHWhYSSrVU3cG3hSoMZHaEZi4YNJVpZoPwU8iqNVTEFaTb9471KbaBXVUcvjHUbGK39QDCd55jL4U4cfQFREv",
  "key24": "2nCzyp8UrJYheUzcj8K1TKv3VE8Z5QtGPBaAxS8whxvG9fn3j6oo1d8zW3hi6BoCfAQhAV82QEWTzPayTXne1uZC",
  "key25": "5mtpjNuwTkXYbpuyjZrzeqtR7iK6JC5TCMvnQBJRcorxZeCyj6QEn2PzCNWrbyCju6qoUB399ZWwJggni6DJNBvg",
  "key26": "3fQX1Uc61AwDDAGm3E81FPNEDaHH1NyTH7SGSMzuUYLSCH6oUidu4ANwbYojfg1MoDekQmsiXAor65BnrMYeNgEM",
  "key27": "59pF4Z1yj6XdUypuUq7a1RpRXnBXh9D2AA6j56JQ1o1YHGbWFy64WYPVfdLjRwQrbPGkVnsDr9RhSd9q2hNv14CZ",
  "key28": "5jJYHHt5x9rQoWobx8cifh2AYupgzm6EWheK8h2x3kf5tkVw2wP4EcV3utJNTcuC6RSujWXeovXnb52wvjH2FBuH",
  "key29": "2rnxjgJPX6CQGTHLhSNjwKiGxWEwv2S2B3vmxEUm6HgfN3MBv4LB75wPsw9puM7dFQqYsY6oWMsnRK1GevRXfej7",
  "key30": "gHCMx5fexALyy1BoRjHxJbs4f7dn7kyWFebe7zdDqUj3miPgkt4ph5bJXRJGJo7fU5TwQbWzsb9MSRYc6HFss6H",
  "key31": "62fiQpQrpQxpFPo4aima3SqD57mDYG4mwwqRN5DvP6iwySdP8MrnCJbWScKyzPAbiKY2d5zspDH3jaCH6vsAnUhw",
  "key32": "2qK5rp9uBoHFiLDEB2RnoRDjjq5oVUrxc7BCqhJPWdZreCfzq6pxFphhx1Ld4Zn4hipaNT9E8VP7zUjshermMd5s",
  "key33": "5EmD2iyzTzSRVLYUamAyZzQ7ridY2psT7Ke863Lfkf4sAaxHb1xj7kAeoCCoCzhPDJ9Y5szTiaXPrgnGVxjhTQ1w",
  "key34": "5gNZbW1PPgCX4TeDKuPGftS6xvtPqaubBbXtS2oudhQvWL4KZ2Yqpa5xVFFV94WBCggz9MfJQGXGaCEyunKoozc6",
  "key35": "4R3uFrKov29SaRgeWj96vAWRE9uWFLHm9rqHVLa2mTG8n1oZCEUTEV14utBCy9JZT3rB2fFwzNxBterYNtVu2VYb",
  "key36": "4KiZi7MEWXdgXW1YnmX91ddNhP3NJpooTrQo7y9JYvj9C3CKYfMe8zYj57cb3mMnu8wJreNgwHzih32hXFx4mci2",
  "key37": "5BzMA3EJZaj3TAfvQNZ1rxfPAWD3ioAVcTDzyKWr7jPiZru4mPbLDa2DwkAMewSbQFdGEdAi3FMQuNcJwrr8FKwr",
  "key38": "34U6X5qvQ7P9vmhLGwawYMnNWhNaj1NyFCssGyM66ETZ2j8wkA4U2fsJ3hNyjMPq9ThCK9veNmSwxUB7dEj4xUzG",
  "key39": "2wu3XEdnG5Msp4CUBCNodNtXCq6mj3uAXtE8ADtYGp8tpeHnLsrrvcfy1qxQJEYstLPJx4VtwTJYpHmy6qfe1dyT",
  "key40": "orF3hgvXShyKQCuWvZ1bmje24hoYCwiAMtvCB93L9C3YM2VRrpEzmcXu9qmq2EobpD9HCPi3pnUD8zKircsrrxS",
  "key41": "4PS9gozUYdrQXKcB3saNbDz1HazqKskcL5bJR5q8fG4MfqEkmxVaPDWmyvCaegfcXUHXg95XpZaYDbmydN9unfgo",
  "key42": "3WbinmP92QKHko5BrnbM9zRnTTALJiDZUVKb34SAjMAToWqGHvPfdZJQ7Fj9Uwosm68ykpKVaQb8kTdsemiZFEdF",
  "key43": "qSUSFUFnxfTKTHNYzTsiarv6zVWPr6iFqjdY3EcSLPR6iqjgvBUsyYirpe4QVt9142Ci4a2NuwKQdceUaWxg5us",
  "key44": "5obxWFmHuAsFL7NZR5R2Tqr67W29WhRqBbdDJzm1TyoYoYhFMqJstSCQVDEffTX4Bq8A8NTSXvtzFjZBw4kdqcUp",
  "key45": "3EX2UNAUJcgUWCiSNcoAGPefW6KXQ8g8Zzhpb8ntNPLRYH2rSt2BinVgpcno1VmdJBb8Z9uHeU9RHtnFeLKK5X4W",
  "key46": "6yS22tuK5ajfYQGaRSWLGryFQ6ZWSAioimgmZoTu63LH2DubQmbKBgxdaPfk5zXyrNjr7zpgEJMRvMfcZDz1EUp",
  "key47": "uypr86WsAWmyA6B3wcW3qiPQ16cA2Z9BEAWRst5e6pg8YZiX4yC1NXe41nQReEhAitXC2pUcWUh9AhVBUqD9r9q",
  "key48": "drpxVNMgHhZR4FwZZa184qBcGze9sbQZpctriztauXkRFxjo8XraS54puijTRjCMrYHr5GavHxPyqvGVTgDbyz5",
  "key49": "4b6QvvsUqbEZ8LoBJwkKQqosiNQXpfb3vdY3Nep2NpoXE3PXnFjT5VGiEpHAvGuHj4sqM6vG6xZ6hBEpmGfxeMJ8"
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
