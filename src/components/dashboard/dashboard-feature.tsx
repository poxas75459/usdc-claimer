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
    "41cSwu391hibePLKTYqMDusNAsNDHdbz4NiHGbqWwqHoXUNZMEqnf9iEiB8Gum9oEuGfDZYfEvondzLypc3ve6TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQDdxqC4rBeW5JQ8HbpWm4AkVPk1eZTCn4iTdgoCLov5RoCNexoJjVHsudH5SbcJ7Qife8v5TFqVRnRheuBERnG",
  "key1": "2AyiyKWy2S5b1bkDNamrAHzrseTFVm54aWHHDVTdUfgbreWYxeRCpHFjE8o8MCViyJ7K6k9BW3c6tdRE4FFuJF9w",
  "key2": "5dw6g2PbEp6gT2V218N3oF982DeAzCaBbd6RCRuoab7rZ5SXEpV4QN3769MxWvjfZYu9CbdJggpRoAQnRu5mk2XC",
  "key3": "5a78p9w9phkSUZQ5jE4v14Hv9xXvnyBmmNbsW1vUcYHZav3tY5fVU3EKFmXY7utmafBjXsGfuLLyTru8LoheFxEY",
  "key4": "5NywNff39x5P9Q32wxKgFX2JZe3nnm4BXBgg4eDDikuNAK6d8NgvGqoC7mrps2rBdpnrgnZ5Dnc9KWMPjJozdWYN",
  "key5": "5SmXPo6Lc7Ea5RnjYhc3UZJH4bcGVXFZK9xFzi7TH8gGF5hzJ82w19SgNd3JRdk5XCQg6kXFysVus9jfQ4qGTvg1",
  "key6": "2kTboex6z8vcf19LUvMTVA53veWKgJyJMAc6cSurYnUMeBsXTj7rNs9RDJFVxSMNQkby6jbPMEFFdJ4kczpjwzM8",
  "key7": "4CbYynZn4qqnWQWhE93XmFmuj6FxfHZvkZ45RdcavAQrqNVKDaFkYfd17zC2yf2rLMR8FRZhahkbEtD87vgqUkPp",
  "key8": "5jXrg3ed5wQH6ah9PhnFBgZ633YHebb9Frh1AkWirBRru2UwLcpKHYPy4ugYAocZieRN3xxDQGaiMFaDNczZmR1y",
  "key9": "4ZSWHEtFuCKbfkd3qua6wvRoJi97fiUovtHckjwSBEajBuLKCd7cZGS3SiUgbwUqPr27SUaJor2MGjSpdkBCd3TQ",
  "key10": "3FpV8f19UjYPaRJhaxJ1VM3SPuDkrj5i8qRS8Z5PSQZkTcqLiHbDTW8n8hgbteP8yp1ZFKQddCwrRBUjQsqzTozM",
  "key11": "2tU4nxmm5Rb681HtVyhrpetf4DDf5MPFqhjCPYR1SgdBc5BpueebdVtPzN5oMnJKrf3NVPaFrjzybJ2X8BoGsAPR",
  "key12": "28h6r9c35ETCx6hPK9xqBWqEJKbLFGwXRAkpiB2EoUefY2kSSMJ3aMw9gKoVTb4awfj7dw1gXBgmAFqkNobunzui",
  "key13": "3jDGmPGr6WYbZWk2H1eTMBYtLcKMqhzHMbXfBZqQbA2pVNUTij1fwsGPM7hXaZbxrAYVPxdNMwVZokHcU6knRhdb",
  "key14": "2zA9B72r3oGjQf34cbYEdNH9uM2tV9EdJ7SC9tXrF9ZNoSWioMPjX7wn54qQXtBR29cEfwV5U2GdUHFbTpyxrbcG",
  "key15": "3kdSQ6gqyARJtefcLNdtdQ92GB18TQDcvK6KCB1Dpzjrm5DZEcwhFKgJCTaHLnCyH2Gk9ypYGHwze4GVCgrUacNb",
  "key16": "37nnVwVfTMe9w2Myq1VX8acHd8a4BEV61e8osQHoFZFCcTjtQNcUGqzoih7fihHBJThJTzcNNebDVQ6NCYAqDRYN",
  "key17": "KXx7KU5MmQ1hGSFUXoN8FYzm7z41eppYq33PoFrimnchMrHUiSEeJN8xYxb4bKF8ndNSAhLEjxurCGxdyvexwFf",
  "key18": "qqjVaKEv7WM6iYPk218MCRSaRcxPKTSuves3Pgys5aRTFn41hzkJnYqkSk383UhLnoDxSHQHX11VoqN4hwDNkxb",
  "key19": "3c89cfNFnBbcNFTSrujsZ68pmCTKV3o6sLsboZQBMSg7kFbVDK9YPJ3WadKkpJPE4XVEkYb9orvFKzLHskUiTid8",
  "key20": "2uDJS21Mu98LUvWdoFdDmSSiEDGeCMWBAeQhwae9Ut8qfDXDzvTH4138mCcviaLpMSxtyFa67k1bydXzUV7VBBYj",
  "key21": "43W9x3MiL55Wt6P7kjchNNZ74RVwAs2m58iaBcRfEGPMUuicyPWZNgwdQG9k1RP6yzzwjYFcgRybJK2UAo5efLR8",
  "key22": "5qA7rP6hhsbWax4YTcz6ugMt1hLXmRYfQ4EZZSCfTjedtLUa4KwModAYMeCVKFPZzawh2ikp9fGidtDNTqAnJVXM",
  "key23": "4qwQbhzeQ9VrkC4wjUW7WbhBA3Gb1jMTEwSCMTHtBDc3ayzABW6ixKZoytv7cGePr1J9H3nv3yvXzHku7KuGNj2U",
  "key24": "2ADNyFH7tgiQUXLN8an4a847JBaP57DVk7yhm69TDRPiShUKwKXHv839FkF4EW5rFe9FBuWiGaR3NG3Ms252WgMK",
  "key25": "4G4MYk1FHStrH3g4ReNbVqy7xMYk869cSQaZUSPqW2vyzcVjaFyZB4GCp5L6QPQY4mm7DhKiXKCkhfyZwnv9USuV",
  "key26": "4V8xBXvfWonHNhUPdhS9QZQbKRFfekmbi73N2CgoqRGpDA2oCc4sDwQZkUeCsGYyTDH4VyK41iozoGAibLAQy6ir",
  "key27": "5CbdkKmrHDDwD9nnBJ23gbfHYvRnWgCms3jGpQmmigHjYV5vbKSKxAH6nCVZAgVj8zibd8vTjGJGRqb2bTvcSFkD",
  "key28": "1TM7YSPz7Hr2J4e5AEx75iEm6Ceq3JUrFU3b5xSLKwjxNUjbMaCqpp6zSJCYm5DahTZuJBerMabry9E69k3dteZ",
  "key29": "4jMDjB4wgSHqVZc25JZ18BsAQyKWHwpGeNLuohtjfcDjgjbDMCnC1Sy4EitTS488vLo1Cet5ggxFXxWxg9wZdzVj",
  "key30": "2p5jzUkjvqEQv56gSjA1PMJzhJzhjVJM5UdM31mdbfezBQUoxYEHvt6igvXqiJgDxoQXYNCv9DXW9SqgLdynRcUT",
  "key31": "2tvoVfs2H5e57t86X3XC9ULyrKxFnrDwgd4PpTDWmjUzGT99qfM6iPiHnbxDYWNQCs2Tn6eGQmfgWTsgmeTzhn6F",
  "key32": "MLqky2jAW9Yi8ptTaMC3iZh1TnwaoREfFKEtAFTsHSCBe3UxNriEEMiUzSwcmR1b7KBqY4KZx3i7SzrLUESp6CH",
  "key33": "4ERKgHZ7n8PNhxkBkCt1w3JNPMGi2X8LwLZeEeks6n1LzQ784DPbaB78w9pkRca5PHkc8VNTnANMARhBEmLKfxjp",
  "key34": "5mKRnaDiNmVDTG4taFzR11uaLhYMubUdXP3ftP5rAgFE1VduG1waNhVxzEM53tJUHPYC2VNdgzG1BNH9x2ymXS1E"
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
