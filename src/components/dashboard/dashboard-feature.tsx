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
    "2G76cuzJtySdKayM1tjucuA3mEFay2qCYajP4wMQ3twwSen47JzKNWDyuHu2oKuS6KiuSU8V2dMa89nPBp74Bdq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tqRU67PAcNBuA6Cgip7GvbxnYFdVEruwuGsxcBPWBcqwvMPuozKCsuaRmUb9FAcMCUKWpkNVazvmXcA4UkvUvwk",
  "key1": "4Zwz7f27hiB55zkxWLKFQ7jGt6Ea8SosogK9FjadR5yYKgi96DBW6F2SQRV8Ahg1azG23cWQY3ZLvqNhUe2Pz1JK",
  "key2": "2Wk39podH5QrqcHDPwor8gP3JWXWVGNoW86LBkhBdz77qtsfXxZ22wmNE57zduLqGxEywsxnbApkG1BeEs7qSvHU",
  "key3": "4jW3ZcAjS4TcGeN8zHUg8EaczSjyGmUMrHJ7NmeBbCzf2wfPRTNk7FpYaLLRUs7nFq87zzeUqLGUiRqkzroYq88G",
  "key4": "4EAYr6An9yW4N9jeZsVny16tjaPz4J2MqiPodHu2e2KRWTFnmUnJhjohYraaE59ccdjDJCj1k4YB5jBRq8U2g5xU",
  "key5": "44TAWP4RU4Uu6ET5eHNooXmEidUnVW1ZBsR7zLusAJC5ziEDivmAZBYqJtevVNZomAPP4WMejAVo5zCgGsbQMvrE",
  "key6": "2Gp4T7JsPxWv8a68xi7KEzeQL9oCWLJDK5jnuw7mzCQfLpPQRnTkW5vwQ9HDJRjNcmY6GnHMHwbiqWaNk3p9dNuW",
  "key7": "5FH3HM4TpQjCMGdrHeHJGWcYsfnfqyG4WAqbDTQb8t6uihhuZYHSpogUNtqknkPGBr8YY2SjvJ2tRzLxvaZTAqSP",
  "key8": "yiZtJVFZ6PrT5dtaEHLnR5VADNMBxsR5CJbgCmbDhFRQkz5SGhxhN8TJyfhrwAXv4kNyt3QSbywBuueJLgDGXXa",
  "key9": "2e4JimXWNN7ZXKTGkjJqMwE1Am1z56MSGocnx44uwhQGHVxqasa6jxcRYjBNFb2756nE49ZM4nr5k6ep9AayJ5rN",
  "key10": "5qQRhKHz24YtPECb2rityMSWUj3rph8hJJBphpVSMAiNUdfFMoCr4RT99wcodP7Ty6Jga2hSMAc1J6Ri8ztwkTTb",
  "key11": "28pLTkF5XkuRc4L2kJixaHLCCiWGfagdjH3ZsMDNxYRLMvzuCrBqv5BQPZZ9mpjwabhW4uWWQHkqD8FD8PU1SjGa",
  "key12": "gVwZGTN5PfUKeKGnevXwPaU9iLLEunT6sC8kHdg6WzF3t9oKeQnhqkRMW8yLodMp8pU72NQnHp683W35zEmyHAP",
  "key13": "3znTAMYJMU68CikEc5TnqqKAQTYJ1zzmdbuNLDUuxSUCWHkbnrXxXEZLFv5ym2yoaGXm393p2gS1Qgzpn9LjGGpg",
  "key14": "671yyqXpMENAyhBZVkNS515QtVhSwpJLWbjsEcHS4GYaTQyJciLU8SQX2tPYEufeNFRMNSWgt4E5qFoBtyFgBkjA",
  "key15": "3RLkZ8FUcEJEbAPxvWpwLQGmBPA2trpBgRbXFhaJvJGu91bmHsJSsS3f1P3HtcDCT5QzTSwA3p15EFjVJWV9U15g",
  "key16": "4eUNG8UCvAUTY35cRQ97o7e8gMfjf6wTpA3E9VgNQBYY4JVcWKawhvQtntxiBCA18Wj7jPhE8EEeo3PJYbTUTo9P",
  "key17": "5NWFrYgJKEtdfeCd2bAzSr2innZUNoQVA9F14zT1NiXmaZAGp1HPtKf9zVwLV7mzsFVuGdBn4U9uBnPvQNu5SxCZ",
  "key18": "eohw3jnqrCb5EvKMAXvL7BKJhE4VF52ZKdgdAUK4tFVy6HfHoGbhAsViTR1Vb9ghQQf47yA9dnsF53vMsvauSWp",
  "key19": "HQv8ZZMhGhvT2itNd1UjSGbbaUTfe5zrRe8VuGwntthJ71DXopREXRMfkJxu2SayiWkHm4wrkERPeqHzSjPTrq9",
  "key20": "3dS29vuQs8xuRrkT4YSEi4iv1ZE1cVxD165Js2ZmMrqzXxC9vqR8Ri8QzVrHm7neZwLRYp5CHtJ3MV9xstPfHGQ9",
  "key21": "2uTFfxpiMnZJ1xrouHXybfgtdqtUKG8GQtF7BSvosyQ2wM8xL7Ks458Ecr31Mpwe7X2o2FJhwHu5fEF8Lh1V3n2X",
  "key22": "63SG8AMrwswZrXHd7PYiAGuYx9dQMz4oS16dgk2Qvs8ouuSXsZURCHj32jXuHL6QJRCisv6HWaspHZyW5yKPZ2L3",
  "key23": "5yFcrWMrDQDBqivnnGzLh97hXLq32PDVUcMiYqaihYwP41V6LwyghHNgvqHFeNMkTv7FMczSXN4hqxtAEWHy8fVr",
  "key24": "KgLNcsdKjsYw1aZDXwCVZ4g6sSkrtEMVrrHZ2umsS3Z83w99fqb4NdxFJCWAQFWEe1He91XYAiwgSkxAEDyYATW",
  "key25": "5czkwz3anMFXNdRoEfQKMBGpm3pjf2pxGwRWcMWz4v5MuiFjT8rgi8QMeFBy71vqFsQb4sV2R2WzdqgSCjYYU3bP",
  "key26": "43geEcct5CpiT6mvtWXMpLUkfVBA4YoYT9yzJapLnsMfKLQ3GKLsZiWLTQGpk9u47w81EbRwqKhhEYLReB2BVaZc",
  "key27": "4PjPfkugjTdo8mmtr2XrvCWohDkXxa6YxjviS5e6foiyoJcqdda8xtBao8YRSUwGWssiqBTkcoXMoNYKZJf8Md3Y",
  "key28": "2qyjn3yBx4TgNRGczHctirrF28kuD3jH8PqGco3Vxq1YKzxwscYqwD5aiLa3Ro4orJX9UhnrXLM9VAiSa6uR6oa2",
  "key29": "2PU8BswNpJQaXEiAxUfD8Vb8ntbnSGnZNiCmPLZGH2m3yGTijhjGMUKLmZKfAvvoBUKaNWrHotXpAaxrJPkE1LaU",
  "key30": "3hdg7Fu7ysxPTV9QAGVy5bUf3Dw2sLJ48h1J8MmhVCVrUtfScERYda5XCPpokc2xczS9rFdiVj5dbvL8WDioukvV",
  "key31": "2L8V6QxTmwGQNqh8CynTGkTgPktWstcrLAqvfBEaMrx1XcMCAtoLBubz5S6VrcQAKXSXoTpT3xPzd6UWaXap1m9K",
  "key32": "4gYEix4K8dhh4i3EpvBLXuHJZQzTkEf83XUPKmFnfjUB1anFr2Aw5w9dnEbwx4PWAHkAzonarHYEjcZ8FkyxuVLS",
  "key33": "4C9Yyb4H1mxBHQWBe8GZTNMqiE1mPyBL3gnNtn9Huz7LDJRzWTxqthBS4ho8Dvnd574BKz75X2ZptvBxyPajFMqG",
  "key34": "4y5z7YGXESyvfqwxF3zbzaBBdZ8bLTNX1iNK7vtGrBpNtkWFPcwCY3fjZ4FLsG96Z1jqmkQ8UNLLdaz8SWfHh2H8",
  "key35": "73atK6nqa3Y5Nz4YMFxdA4wqfok9Xcsd9qgBP24o4fZ7AqjHuP2HdvU6X3t9Qfcx2XpX8bFBzKD9DQnW3sbCi85",
  "key36": "2WRhDWVy79YuogzK2MEW7oJ5pQxq3pQCrNokbLyX4yGs3eVZqhKJYtGfisvZoWTfPNvkL3e48YVkZNwSD3N9t9sC",
  "key37": "4paG6YYTsigzNKa6LSae5JwXvezQCTgxrKyShhpd3ueHdn2qVAkrCHzzZoRudovWwDpZCzmFFWZmgSasiE9Re1As",
  "key38": "5CxTVJ3eFhv1eFZoMx5mAzAyvmyhjXCADxomdUo446fLBdPQ94LbDYQcz4wqawyK728eWhCqDivKrThX82bdUU2X",
  "key39": "BzM6C2U6qpPoupKAcMuoxK7zekmbEpFZrbTuHfDF7AaLgkHK6W68jnkJ1h8i6hWB42bXe16V9YgrKYQ3zx15xs2",
  "key40": "3T1GfrrJK4TAbTH8uNrtyACa4MYFocDXsbf9jXR7HYrhujYM47Rmkqpr3LQGz9SiTLr4hEpXiN98xYTAXuorLtK8",
  "key41": "2MhBHfNbSJiB2DrKbvDUuh6QHvShbQtJgsmev8ikZkPJEBXswGB4sUfwvhBB1DxdjCE6c3bqhLBKXgSn7kpk6GYX",
  "key42": "JTMyAQTzyxnNRfhoEdf31hrGUGhVUApjTGHBkfg5cJ87G2GHczir3iV5WTdsPD7ELkG4DeGMqVDdbZAuzYJ2HxR",
  "key43": "RKic7BqJuyf1nsNGjMYrWEYLwMuAqbBH81P2xYR72Z3k9u3Km3Masfkqm8HAn2RwV4At8cnWpmGuUoiny9J5tfS",
  "key44": "QrksSotGBeYr496cdmSMa45aPHVJqErn7UwYFuskXMxZJUy5oZnhR7iNoMR2pQ3jGSx8fRFQbX6q9Pfgt6PjH6L",
  "key45": "iSbHNWbM26m9wggEtGUZhwp1zppBR4jTKbMAaV9jpe44VgHS1wy7UAytTUWBmXLf2XqFqhFaqRiW5eiFeXMMoXB",
  "key46": "4a1SuHbkpMafYtywcGzKTou3E3ZZhGgRAD8tDXP3cAKLeQVLPRVUfq8Gb9AcdrMmSYageVEWfadJG6iUQe4EpttF",
  "key47": "5mm3yrfJbHCdiM7p86C5qovGZhHTB71gP6r9WCdGmpMUE8pA8P7FF4jYxgVQ1TCW9x3aU6fDS6exavwL3GW1uJC6",
  "key48": "66BjULNb81FE41WftoPjJ7UxEGKSGzpDCCHiPaB1XXuMwqjKnHKv3HsGAHnznQthVuyPJd81SJGG64zVSuT6qApT"
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
