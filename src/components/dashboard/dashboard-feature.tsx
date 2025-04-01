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
    "5C41QvLQ3JY1hHqX3VYdEKFwk96chA57x66XRyxSJn372UHgVhy3rpcCRTKeuEv8cBQtDzgSCx3kwKpx67tU8FFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPmfBV9C3MFijN37JJ5GkrjLsUcivPKqL1t3sRWDzhGnsNwVnxBdJjYVjMe2cZ6HBehDM1EpS1L1vaMJSUssGdn",
  "key1": "41ByXBWz96UizrS8Gp2qvhFkrTYfRkUqWmS4ur6UtV143EBeLR2cowYpzvH5Y4dPAESU8Wpz7FY6sYVuETGLYqRs",
  "key2": "fZ6tAoystJstMfVt9trmZniJwzp7vTiKTbzeyJQQyvpiR4VVnKe1hArcUePEum99f7416we6De6FwabnbvzMhFV",
  "key3": "37ybRLZEUsR8X6bffuMKsBkJKYUcojnnH4nvLFAA2oC9iLwxzc8prSj9y2aWGXZ8eTcPLRqHQVPt8iAz4u7Fuxk4",
  "key4": "5GkUpNPUUpJAMD6e713aVXYCNnfFYpvX6EspCiFNYBKsCVYviXLg3gSAcQScSYQFoCXMufRF8Xb2fyhsu5CQdpkG",
  "key5": "Pg7GEUe45RBKjQGzdfbqCPYjg3moRczWDebQURbPxBVzzEcz6LKzzPEBz1dAeB2XN9X4qEDfBijh7Sr6diSgD4V",
  "key6": "5Wbok3EQxbhx7XyWeaLrtp3B298EVWr1EMf6xaCAjnssme5MpoeyYfRuJhi8ad2ReJHeAZcsUFHNSRqwCGae6xtj",
  "key7": "5qEFHmj9t8HPohpSw4khMsYRxG9rkYVqXSWoMRYZQBn4QkrxoByZhXDY3bSXiyNwX22zMXxJu9vxVmaF2oWzdUWn",
  "key8": "5kEumQyk6MZ4H6uP8AXZys7SgkrMYuCSS95KfT88EbHqiVpvAfjKwKCpmQbsqNquphjNk2dX2dX8T8NygC3Z4sUh",
  "key9": "4cxqnMMrbv2YfGtGh54axr2ijJaksAMmDCmwh6eUCPgWwSv4msWVKfi4yWTG82FxgcHorqaYZnexpj5WcHmqP3Ma",
  "key10": "3RvaD8QDCXqYdEHAZE6HN2EKWdnog3aLdFSXN8YBuTZXWBT3nvc5ae5JLR3db5PRrkBq6YrRbo11zDJ1BevjF1Z4",
  "key11": "5FSoTwX4RoEM2LovkAHbAvgYVsuFoitdy4x8wD1XFoC8pKTdVwHsvSkABaPhQv8E5xWi1bMBsmUN4iBibjkrHEpe",
  "key12": "5VQx4VeD4jKGdFJky51ifdByfyanb1F7tzSmBpYe6BQqdZx4g9RtsDudUXJMQzu74i5XRFSJZzf9UeQiXzUCume5",
  "key13": "4Podz4ou6zTMqrVSqJ8wNn7XGTSreencRKvvQqka1tjK9Jw7SDjScnfp1GMhJPKDe5oSBwfYBmNtRzS6RXBUyeHU",
  "key14": "3mqP8s2E4wMJjKupViYDfoASXjtcFH8nMpv1bKSCR8vyThk8d5YXdoejJX5XtcKk1ZtUGiCswc1LVcz6w2Hc58Wm",
  "key15": "3caS6txbgirvcAy8P1X3sAyXsx6CchY6MPJka7USqgtNJ8gpc1zVUHfrAzufAyNnA4RdXVS8GQh53UqNEL7QbdtM",
  "key16": "5tx7uY36KAA6UZcZZzgBTq22fiCLvAW5f4tw2mJ8Bgt7BfuciH28i7BTKEtBBrkRg2kC2TUgN5fjgiFyPm1uHE7s",
  "key17": "Kp4BRpJaWUgzcYfXX8Htq5WL5tE1n6DwWCyjvSNCwuBEjc6CQwG4vimULBJk5dBXE1BKeZRpJNK8Z23X5NFTeJC",
  "key18": "4ufjwKMJsynmVMWVFZ7CXS9HgaUQXknmhzfJ8dr8fQzYM3pQQe5qCrXHPNr7mobWNNXksNc5KBG1higcekhEpeuW",
  "key19": "3soHNtWd86QBKcPLKr1PjM7g8N1cUCLBnRdT12X66Luuna2TLmWfjSAzd7fbPK8SqEh5TiM13yqLUirCG5xXLVMo",
  "key20": "2duWMm6LGUtySVrMiDii5ExczmS4nspvC8KKWz97HLK6E4X8n2wPdZJWv2qHAyU5idaWr8tAGAZd2afewqeoZmNv",
  "key21": "5dWocaoHXuLxS7W8VrmMLoW453AkNY2aYRZZaroV1XkYcU9QoSa7b1CLqCeBuhNg6wMcxt3yYvyreEPusvuCHZWM",
  "key22": "5qg4xk3hh4wwZKVqELBiSkAkJJdmBsXwAw294eC2bQtJ73GRZFhYAqt7Spxiqd8CgikEsHjGN5d4qie95BS1HiAz",
  "key23": "3jFFrnJZd1AZsUiC6KAufJWjiJGUtxx13U7FXTVgeXHoaGbqbZvME4dBtnV6XRRLxmLF5u8YX4iQbUa6F5xArwUu",
  "key24": "5LLKgCpJSTyuVcxzaQ3r1AvBtrk98YRCtb3GYBUvQbVSjFjCYPeetjh9j9Qk62rNWF5c3eN1eFUXqrDx4wuJDHPd",
  "key25": "LvrqK7WARg8itdayQxZGgSDU5XBbAyDVopNGJSZWg3Up5CQKkN39Kxq4XrVabPWX4GHmwZ1zZhRsVrifEyrZdf9",
  "key26": "k9cyJ4CfyDcXhC6ygFxCuuBt6DDM2jmd8vyXfWvPaNH9B231p8ghT647t5TrUaTqzBp3jf6yQx7NGC8HWWuxnme",
  "key27": "4odT7SywTSAsCgsSPfaZpRo5M9yEmnJEv3W17AqfGN6BgLsBy1Z9P8JxZqsQyRh4xae7FigeJrJcg7AF5Tq1kgWe",
  "key28": "42P8iSqghuHYrvtJMaFFpSGofTRHXh4ex2XXLCEAegizW5hF3aY8ddY2br6nErFRKVniTGzwWaAuHf36hNd3AdYK",
  "key29": "49vasbaEqbiUcEQRMhSM5VrixbJuaY5ConVTywDhG67HPRPREjuRk89Wt8SCjm7zc9uzTH2wpJ5jLbzWkb7kBCy3",
  "key30": "4e3p3rkLdtkK4XE84HZkU2FwvFdjuM4MmGicDsop17HK5KMW3pcMc3rgWVJT139QdtBfe7J2ddwGCq6Qmzpby5VS",
  "key31": "2Ruqh6yHApDHT5sArKi6eB4tq8bjj6cRESopJ1Zhu7Nekuc9bGEXkWYxd6si5FpCGDvKbV5SfGfYFCXegiSJPDZz",
  "key32": "67qeFzux2wVmSUweQWUk33zgDxLC5VjHCCevf98bq6SU83gExVZGDQq2o5DBkcT6YjEogmea3CcSo9kFG6tFJrKz",
  "key33": "h5ibfs1BMsfHoT8WXS4teHh5jvZmJQb4Q9KuVLpYz28q3jW299KVED2X87z92DS2NbEZimsjbcC3wUsQM9AjsR1",
  "key34": "5WkghviUSLyCGsZrL9qvZ1pVWzKbei6v44RA3XhDiHZdaYV45aVmie2S66eZ8nWsQFJNEkGSKy5DXHWmPAvm84qR",
  "key35": "3su86KDvjjx9dSpUFKZ6C94oPQ6gyuu4vnvcRbLfNzaYJ7fBptryssoN4GJR28MFn1UiHjFkjEfKJKoD8uoUeVKV",
  "key36": "3mTr5LdtadcQdQ59XtRZDpPC2uvSRMZ9rFTQTnPJvQcCESVQD1881EboVDx2ATV5D85p6nDvoy6kfEjoGQQw1GcW",
  "key37": "2x4yjrG3vfDvWin5Hb6mVgoNJiDr98Z5P18PqzdHCdYqXGyiv63YorrX2uSftnwXWABFdATLm9eEidPNob3HBKcQ",
  "key38": "2huHpaAQueCv3aJgYd3bNKc9JoX9Spf1iirwCBDzLsy88iNKpmFrJuHqm4A6Uw6nuwVw2pCC5QKmZ71ADz9oxFKt",
  "key39": "46CgAEWWdwuSr4vkW4qhoS3LRChmXADFV2KZD6teescR65v5dgG1tUm5TJMEBAgSoL9PcuHG5eCrXk4Laiv86xSB"
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
