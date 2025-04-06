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
    "DnmF1SNaDCvcZEPhj696mNmpxNJzStM2ER1mPvPREsJBWZmSkGpXV8MCQK4nczXMvp1Dkquh7e9B1NvpopH5gQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qhhobSUe2BzHMnhDkkVqpVsT6XiN6U9EiNNRb2fspikt6R5338M26swDxLyzGHwDvQtzMHALAvHG3NTSBLr29N7",
  "key1": "dHXMDPHXBgWiURHmjoJjztX9wXgcf49sdPmhWq2M6HLHUy8ecBk1CRyweC2gZd4Bm1eRMRavy2qwA2A1cNbMwTn",
  "key2": "2qHFmHtztXmCiDJyvbe14x146Y5dav2se9SYZGymqayjGZgkrKtP7UmbYTu5o4f7Z6WierFTZa6sgYGUvchFLCrp",
  "key3": "4Ppo28pvUqcTkwufxzjVru7QcmgWJTLP2MQa1sYda46GWzpKQMjmTKvj2Fvbhvg9fHxWvUmP1F4DKgZ1JYXPitNY",
  "key4": "7o6mHih8Su6oHRNoeisNuoNuCsrvUZVMdZ2sXQLK4Ahx26V6YLK7jndMqxGtFpSp9ibGLnefE1fA4m4RstE3kuF",
  "key5": "81Hs6ni7ChrqGGhVmUpSYXDeEssT1KyhZecLa2UgKdzdXhtnf8xjST15UtP1TYk8H1R8H33PMo5ubUBo7QBujLR",
  "key6": "53PLXnWxfYLnLqoKwtuMztPe15kaEU8DSb8ktPdzgee6uYfmijirJh5YDuGyEPWZchteNh4f7Hs81qFDpV3VXe1t",
  "key7": "r1FkBaeRQu1vFTBEsdFBKVbkw2WjN77Q2SPcE4qG8QgF24xbo9jFtZoCm4oKExdxWK2HBEXHnNhqHYzhtGHkUFp",
  "key8": "3YdXenzQs2Xzw8UFj72sNFrvKY4kBQH3FmVuQ81VHVGFjUQH5xjxqrt4ipKM1WcRv8kr7kjvH8LcadmmnihdNGZQ",
  "key9": "3PVnkgJ6Ua6THHm2GjWzhhSn2G9z9G6yK7HQD4LmE3XF8BjRUapta9BDNgDDKB2T1WK68DnifegSd5bHCtoo9Sf5",
  "key10": "3fni5VWkD4Z5xxk6GoG42sptRwLmgF5y6aWYxBJtMvmLjivVMp9XLgMzqMx87KZ8PkXNLpFUWF4Tsihf78hbg3Y1",
  "key11": "4dREhGWrEMwoc1YvAwQrzYEPUMgtj4YAoHQMxNocjBoTAbAvtY9z2N2eRvVU887qSQvCXvbGGeXPEsHZD17WMsZ2",
  "key12": "4NFrL9J1Gq88RasMuBWiWEbtk4DTjcFZCNFeFbXJ9jQDoZwy7SgP56MUJagqbRoBEn9kPq1Qu4Ln3x5SR1EbUHAt",
  "key13": "3wrGaXjinJwCV6BSMQQauBBeQvYJPSGc5MfWRTSjuF2QYeH8ajq5XFgsib3o5RodDTrvkVUFfVBgAQcBdyTkKL6z",
  "key14": "5Hdac8GxLFeTajqQZHA51abCAPsaNbTkJ6ZYJwMaNSTeE9bePuAaEBd9oQxHPSAtTdjPq4hMBwCWZAT4WJrkDtpL",
  "key15": "21nnCuTDyPo6GtJo9484FwFbCj3MdcSCPe1Y353jbFQa7Rqo6C6wENKmabuQBgttG8wpQExmo6hbWgpdsJVmZgoz",
  "key16": "B1GzXb8t4m8HBHF6yi997MqQtyQjGCiLidy2HhnjKzYCCzyL8nWx5W6ndKrAUC7anKqYrFwQkcEeDwm343MfzJZ",
  "key17": "5kkATu1iANsumSqa1t4UAD3QESM3nT1JEgc7okEcBidtNuavgAQJHBg9QzDje9QzxeqFQjAJNjcFH5B7KC7m6KDK",
  "key18": "4b8n8ABxvoHfsMuVRsnwQQunrEdVu4LU4F9VF6VdqLdBaYbXzY332iX7Qzv5Rr71ai7FNv8UuETdHtaVuhCyxMHe",
  "key19": "3qpAAP9BFFyGGcnoQKXyZBiuM57wx3QFeLkUf1Yd8FpcFfcTRxdT4uRGAtxPgvxC2ahxnJhYsCEDHoLGQDi8YDod",
  "key20": "trvNUFchvipvZP7ysoYhUgYiLBg9Usa73NKwMYV3z75GAE8iNxnMN3K9TUhE5rozM36WNGnt8jiwZm4UmALAqPV",
  "key21": "2ZGVAhATb5qwnJEE1xM6b6RmHBBWLoy4DdNm32xR5jFYMBPYUCNargBSep4eqXoDnNBoEFX2rmKGJazc9PrS9hYF",
  "key22": "7bEpnicxHJgrQusqigAuxD8fr5ATk3MWa1TJeDkbeo1G2VSHJngj9qFMmtBfhQ4GfwA9oTv8xgwLyVxf6rwBWs4",
  "key23": "4i3wyPWn4jGE9L85jbJn7Mfi65ZqL4hDrGSevgn3ri73N1e1DbzW7SNf6VyLDxFq1uWKXv7L9PvksEDyrSVrgjcp",
  "key24": "wm5e9NJzaTcNEg6cihnS94PW3qEgDjKBA8mpBGciuFAN3F2CuVgkBueUhc7X4DqXCu7SAwiTjyieygz6WKWt9ew",
  "key25": "3XSyvEDziT9J16a33ZwZxWdEogNKPiJKi9fSdgjvyph3y4phdssi63tLdnLDWFJRiRafRjLAwrBrQggmNUUmCMv8",
  "key26": "3uPdy8dt5jHXnd5jqHhLoa9ru1eyR1ngSJhxKaFkKVZd1rvV6Wu95CTmNgfgRrcahh9MzuhAKLPhPFmDwdjVEE9T",
  "key27": "4ziaK2ZDejCfepxVhp7imR21NK6BtGvGQKWAyV35YCuhxyxuAdRSzdkEXUnd7BYsWp8oyRX2ChNQqYAS6NorB7Uj",
  "key28": "5rotggGV84zoV7FWKANLoZNPosQx7qjFZ9huAbyKNHjtrujNoPffmXRTj3M8fU9UmhdmFDrBcu2tXRjdMdKtczFy",
  "key29": "4KmJu3bU9xG9XqesgZatMTDS6GhAC5vRmDSwMNcCUPCkoQoVvDz8UdywFtL8YT67SZQExUhERTSTTM9HpQzPtBLR",
  "key30": "rr6fNku6P8LgTJKbi5Drsqee1mWCPcTw894oQ4vDH886CUuY1vKtbR1n4bVYBjzYu2282U9r32KgzrSBAKZUNQU",
  "key31": "5oV7FS5R8kFY6aQHA7xiMZsscDfsv6Fa8reuamXRDZHyTdpCxRSWYHyCHmUYD8ka5QFMzhtRoWtq3Xj7Wt56AQBw",
  "key32": "yk4kr2CgRgQsgvZgMMcSZsw3rHJgKV2J22kLdFesnUcQTpChMifCdWe23fb9JMRm7EaE5PjZPUxnqadMCPoS1Qn",
  "key33": "4ubGKsHyC6agr3bMbAjonkAsEfMuRxgtbx7Gi4Ay8Zwb7guNdRrm7idezcqPFvEwAAxy6uiComQnnNhvx7mUBzjo",
  "key34": "2KNXqazRn4AvtHPwGXn4EXKGk6TL7WCWNeqZ4CYzdACeW876EDQKZ5Ay8o1R6fVgzvXgQPv8dMX1prazbFGAnDEg",
  "key35": "4hZhT7yBevkoGdMYUVLbnftHaNVny9thwUvPq9x3VdDtZ8ntgLmmmT7TVVEWqDrTXsGnRE6edqupagNxJVLkM312",
  "key36": "2VgvNy8PzUZzVLgqwkFr3o8xpHfEZ9Wuk5UKbdL1RsHfe9rrqig3z8EQm5tnoaVnL4tKYu8KZdHk4ctf2QVogwL7",
  "key37": "3divXfepW7sQNTV4bhYdLRWABSGNAadkFPtFmkuX2SfDfXujTVQY8Jut3JC4dh6R9gFcQk77e6o7uekmYvPZcjF2",
  "key38": "VjsE7HB3sentyBwGicCqkV9AcL2HCE8RNMCz64drPR4AYKZvRZC37HYsJGZ7v8YoL2GdR4D91ACYJxGn1AnDsar",
  "key39": "2sicA17fiv3FNFSGjxamK78zUNX1RpAK1rcx96GN1B1y8z4MS9SdVceFntNqEqKw98opxE2XfDXXQjmq4C4jqdfU",
  "key40": "3ipg6pdJJszdmQuSrkX9Srp8VqU4vChToRvsizvx6MAf3Fxfg6nny4LDTNUTqswV6bRT2RWdgJ7pvddfD5FzNUHX",
  "key41": "49UbWPvycgEaFYChLxN63V2ED4WuvssHVpJ3uSypEQdFUvKAhJuQm2p8cVUZSBdjFzHJxaJkxE4ErahZPFzMLtY9",
  "key42": "5yyxftA6EnFiSp1MhY4DZFWNzDUCgC2wKVxeyyJtTVgTCbdmSLJDLf4eQNzoveUcNgKb7aEphgbsByhaLSjk55Us",
  "key43": "62zk2osZk9Tjs8YLESHhzxUiCM3Tqvrm7nkYPqH9K5LNSjFJzqC6HABeN5PqhrfqEfSs9AARo4FRuP49JjnUDG4r",
  "key44": "54BeinVRkTmsAmd5tvsYSNghnsax2WpCZNjZhNcd3BpaLwv5ewYoXcifkQzXDGnNYuZYusLCqQ8fCmHAPWiZiNcR",
  "key45": "4LTZSd5Sg5zqd9Z9JchWznVruEQPXFVciaDJZqeqNURACT73hUCiQeZmzU3KD1Myc2cYoZGi1aEsBf4eHm9NiEDV",
  "key46": "57BvkBtM2ePmFjU3Q8qPbaNDwTYYGJXY7WSJow8ExNg5TAHvTY9ZWyVpWhUfGX1RRP9Avxnj6pveohAKGuUEx1wy"
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
