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
    "248MqbStnKgKrXDTvSvKBTfQugH9hf7EmUkefdqVvd9ZzqqaawqukFNLQe1JWNBte7QCoGiQekWyETy6LV7SWw7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p6MeRRDU7Q3rSf6D1PAgSd26j6rVQR7xMMfUuHbB9Mvip9GZhYrNZUqpJsCfXSz4NYVSD21XfuXMZwtqkWkxtqi",
  "key1": "5aZKUgYNBvP5efo4cSR49VUutCsSurEkRsoTjVwN64CsPmzMoX4t5eeou7mgAEWksdJGvho9NXaEBGnsx25KT5sb",
  "key2": "3Mqhnu9SWTuaQaZfpLFEJ24cVnkFksPuPTnDPf5HdwYEtj5CuYycGesb3323z4WPCvAzdJX1ifqhcPuMd9S6ymSc",
  "key3": "5B1D6PZVp1aTZf2e39B6Evbix5fiVXZxsWaddupgJQmnHJMWL9BanZVPRsjS1KuGD7Rrtqj4pRtbgPZKjgvfG2Qo",
  "key4": "65bGirL8UdnncJeCqu6a3oUZFNCs9mANDMBfvsNqQh6HxeU5HsU9evtzFHHE6aE5JoATr63mHq1cU1VjaGPXV4ZA",
  "key5": "3KXDv8pryPy8sKBPGpyfuJXmkfQp28GbYD9dkKe4QyBoDTBD215vagDNTFmJnesJAzCPS3524Kw4UZw7avdamzga",
  "key6": "y9BDWym3BrpQ4fuexWSK8CwcxhVFzuxkK7bBw1D4NCqvKN4ipCJcHUkXdxL6FxBJhUK63MFxxghTBTvS3Kntk7e",
  "key7": "nTXf1WmxuvRSWKMy5uM5FsjLjRhoL3V2RCQpVtfoAanmrZghrMNntJiD7127ZYCtKP27qTsnrWTyuYugxYdACFw",
  "key8": "38oyroQDgzKMonArDQNS22SFPoPcwj7gCXLiqrbc62RHwmZMypT9xCDFm1s15C6z4wvnuWYZwkRjWAPf2ZWHpLNL",
  "key9": "2gMsbsW3eajGS5mkgXdPQo81QThcHb1zRAHoC973wTVEmnEkXqNfTKWMcna9JUjYA2jfZ45HFYNqMjnW38ie1eZ3",
  "key10": "3RZACbCMAWDaGq2aV4s6tpUGjL7FLytGNJTYERpVwogWz5z29Vq7TgvTnz7yLmBBWofnTXYV5MrYL47mr5Rhox1i",
  "key11": "4wJR5yLAraG3v3QDseGec8kitSbsLZiBDAGj8A7DNPNznGKAhwqmETuEfD9kbtKWpPubMDt6DkmcmHopgDAqxosV",
  "key12": "4XUiLjrmqaqog3YnNz7BBjHVSvR7ZNt8ua4EX2nJbkHUnHfmcpnJGKmXik4Pe8thrEp4gnnexSw9a4NQE84SqSca",
  "key13": "W5BkpXQ2UMJFQsvYzogGWnogwDvD3YUKsifW7YATfmCyNNkmhez9SNUMweeM36bbuPcm8kBgkRLdHnNh8HPLs7C",
  "key14": "26h8udnWtr8WicdRX5a2ogxrYZWUcyLSHwToUon5W2wqKuYUGNd23aLu9cN3NDZtiBZjE8nyNzcCfAxfQXUas7kX",
  "key15": "qdx5MKZ1HyUyginC8RV1UjkKM9jGniqwVVWyGCmzZWwQTi6zMc4Uxqh4rGy9KfZwDgEv8SW9ieBir2Z8gZbtbRA",
  "key16": "4ng2yiNQyfavzvrR3Du45dHkTMz3J55dYx12CZxHQtS8sD6U4KcBTEgkLHnSuv8CDfW3LpFB5qz3LVjoR74eKbPB",
  "key17": "63QR41WJzQf7eKkkDhdHnt845YhKciLcbQG9QS8R1PsuKB5WhHcL4dj9W7QLZJSY5a93HxjooH3riuByreLZNde8",
  "key18": "HQv1Em5b4fgjXrDToC1tE2hGsJQEBqj2RnrCaTwHqz43tJN6cNiLCSvqvbz8JvdvtQJA88JheZGXhd7o2tDbYsx",
  "key19": "2vET9CyUjzLSTV1H2VruukcD9JmNZtBuzMopdUhfbWNCQdkfwEqpiSQaj8Z3ArAyRBCyT1ovJuh6uYABT5AyhGn5",
  "key20": "2WZFExoLoLGm8SrMdWWbGUdnLauQSTBrptfG289nBtrvf3vpLEADSFjvnnjAfdfwHfu9akdnDHBG5RmvJuZ7P4S8",
  "key21": "89vaZ2gSaM4zBKXa1UQxPpJxn9qfqzqEHx2FtvhGQTeQ4TUVzAj4KjFkVR8p8k76qccQkbhhBPUBwijLy3bNMuX",
  "key22": "5ge3jaZGYBTuGhxR5hcYs6Qu86nWJqDuiSbSDRNMKwpLbvHkKyLALx1XBozZyBhLz1PnirSW8XjBtRKmZCxWFCC6",
  "key23": "5FA83KSB6Ls7L6fRdBCAX2y5QHmSnMSrc1bbq2yohRoGg4wH8f9REjR8cMW8xKiG7hEbiQkvh1tyT6XL6nAkFC5u",
  "key24": "2oTE2T6YevkrxsAMvfY8RTxw9mCxjKdiZqkqimRrphvP2ShAf9VrkgikZztiMPn7zfrLv26d1tg7HkREFD8m8orZ",
  "key25": "4wpyHYLZg7fw1HJVfbHpPtixzdJtuiGEirYXtpKXvcCsRbE9LgUKkwEtcQF3QuSgxPDhragyLs2Eqzh47oBSxy67",
  "key26": "4ni4vRvhaT3JU7yfPwMi1A2RWh3xEDZEjVPehz3Kh93kU2DbPruj9j49ENvVdrLwLtTqhRqocxFpkfoBs9f48gtB",
  "key27": "2AaPMCHb2bsmQvGrZp8Z4oHtsJ7wSi25Nu2UACFe5wWFVt5Zk7XTSXU5fR2qr6fMLQHhNbHdTN3JAtVcwJjsjgGt",
  "key28": "2E4F8kTxJ2XEo8XTvSyUbZCt2hD9oXh6p9zKf7bifRVgfuDmuGFV4QmaccRchqPrrSWQNL1sYyWp4LLNABLqjXXq",
  "key29": "4UT2sPtBGiDtutRZJgzNHXFSRA341pZ1xdbqFSxekv9NCvUQehPXUr6pF6ihXT5jWXKT1fcRozUEpUKKCrmk1NSs"
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
