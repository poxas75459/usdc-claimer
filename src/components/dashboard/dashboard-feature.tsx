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
    "RX4rMyyrY5MUpz4jveXpaLPdYNUt4BUwL7v92NdPLZciqTKVmKKN9zqiin28fyXMnkhRGMKUszR9dPkTYLjM76f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEJf6WnanDw2maQ5tHBzJ6WBuotaoZ5Jh1RtqnjrJvpoV98UswY3UtWJGisxaBsMVmPnANgwnQYfuRrYFFe2kti",
  "key1": "3agVq1KR7CdkX3kAgkm3tJ91cm1EFHtg7NFPyhgwKy2ZJspxuyi4Q8gt8skqSi91zUhsNyaPCN68YHoyVscVMcob",
  "key2": "4WAkhAfheqzirhu9hQq1AH6YEncm1cWx2pHZuRd9FpvKuBwCfUpBcNmpCiaRJza9puYoB5yJh39y4g8K7p8etVrQ",
  "key3": "2TaK6H1uZMhMjaPbUWETJsMxPRnhcvyGshyiPspfD5PMZyVHq4zn7EVXYvjpVqZ4SyyNZBBZRyftSeht2U6EsNat",
  "key4": "3p1Qd3mfBzHNbFuwWSdQRupZVeaJvrtfNeD9rvm3owATnagX2S8Hwr8j6si5xDzgjuM5A3JpVyNxy5R7EQ6KpjBe",
  "key5": "36Lc8sv4Rnjn3N6WuPDeFow3zcVXuoHGjTWor8UWHoQiyvpVJf6vpL8c48Xh2ffcXMgrRc5KHBLM7svjWCT5ufzU",
  "key6": "3cRi286NUzsRS8vkRypybQQryVAYV88s58QW23py1ZH54DKjvGSoXwYEC7hu2ipoC5D7527JnVL82MUHA5YvesoM",
  "key7": "4B8QXjBDRHGfguL7YgdLrW6a8CF4gQxPn7byipLuHafU5VpynijbSsJKo1stXYccGacmYssGcNd3FXM6fabmJjXa",
  "key8": "2oB9BE9AADrrenwosneivRCCVfG6hiHioe1ysq51kcaBS9ohJSb6oTtn6ajEnHsW5PnuxChBpw8oWzJaz7ocRsDq",
  "key9": "2BSQ6YVSJE1LorTizfk3NtdKMep2Mx69vFLW6Cy2ZVEyVf5sgDy8VQpfEXRMbfU3XB7UwrGHTrvKf83AW3oKRwWZ",
  "key10": "2BdmgDzz1h41kdKL4iSnxvjuNb7NfoL8Rc5u5EB2pUVW6D2sQQWqGW96dsrNSpixT9Wm3ervMECbSjXEQuVx5odG",
  "key11": "3427s3uahVDo16zd783uNnecm9EZDhYG3bNmUBAhaDCqhdcAS7YuQmQRuozF9DeXTM3QaXtAqKqHf6TTbjJQnGGg",
  "key12": "3hft7qpMyrGko4t4VHNbH1FLY7f8mfV9qG3Z1nCk8XWVLJoZGAAzwKY3b6QGWaahcwfXo3TWM5ZC4c2m2VGDE5Le",
  "key13": "53njBKwLmckste8pPtj765993t8VPH6hBN61BGEiBQci1KHPPTwSRPpaJR9jo6VUrgvpoc8a9kjFsMM4ageWFbvb",
  "key14": "3t59j9L96s1ZYssesKqveFiuECojmeLDuURw2CM2eQzsgdVQFJH4tHrupx8Jevvx1JBzRs9NKoWb91ZmvhuPqiMg",
  "key15": "55PatiTyPqmngTMNoz9RitZcBSQjGYuBn5dmSVuyzvtFaAoJKnancAKYMdPCcXAfcpQaFbH6LrKgJUshXdAvVSQp",
  "key16": "2jG42S518Me7J9PWSmrnMbFeYtAdRuj4o6iDdN1wDMcewfofX5iUzwXEkPkqoqGFufjkfTr69XCQ31n2jW2XoCFG",
  "key17": "37y7Zpu2ixcP4a1QhYJDDuD1Xu3KEwwQE1T7PvTdoEwGAWjQ9NwQJZbx5KNqQqbmXN3qZ3EWR5RZEJ6TAiGzE5Z9",
  "key18": "5zWxHYeU7D6A64CeAAi5P5EfatRR9FHCzLnFRwxHtNYNQo47TT8J1ssRaRkGDzHSuEAfLM2YfNdd49mdos7AUaiL",
  "key19": "cfW4ibNPVrD8x1p8VznrAj5RESyJdQiSwAHwKmiDMm2LCDeTZzYj1YmYeWK4AVqUcqXRn5Pk4o7TiQhk9xTEhbR",
  "key20": "2V64BZSqmahuYLZ1HhqnVFQj36oMitRCmj6a5uDq6JAVwNo33kEAjeu4B9aVPe635jRue3nkdiUmS1G3tDf2mvbi",
  "key21": "4pPAjSLdq2zFAis3w9DRgTu9y1TQ8wfjUrwhVSV38NusrQ6WJ4oK7GKdHc3VnjiVGBNftVYHUs2HXAd8zZ4F77Bj",
  "key22": "3VdsKwk8oA8ZPaBFsyZc943bM5cUL1ynWfEXUdQvj86R5MqbNgEquj9fSD9ooXzrr6RnjAr3mJXJhJeEmvq45yyH",
  "key23": "53bE6RCngNod44NCeXqFdT4HtSRyetE5UX9HqYS2KgtHijBYqDrGgi7dH8mhiMbaSc8mWJ7Um9xViLYA91bfJzs",
  "key24": "4DBJu6nAW2MZrdcGjYJZj6ujicEEVcCgGj1zcPyPS5i4aYoRQc8CXvaRgaqiV9cZdsFqLXjkLS18zE1YNUb23fYe",
  "key25": "3LoSEvM1uPa5qp39mNdkvC8e68hkkxCfDsdx68Z5tj98tM1g92z3MggSf8kzpFPFVoRsoz5CJ9jgFhQbxbHDQBAZ",
  "key26": "3YpzUDZcZUQTKQzfb6AnLqjhKDGT7A3Nz54zzrQrvdYh7D6Eax66izavriNbLiJ9jsvuJ9gGGhkd83pMFtbcPeyc",
  "key27": "2sJv2ioi2E2K7qpxAs5rY6UtvhuaEBHCqBkuTRbyuBQGqCnLvtQKB71a39mUJuj6zVfKFxcQ1Fy68VFQBWf8evKM",
  "key28": "dgr7pfzDWLfiqHQbN6ezVcgXqnK1Lpr6BRctzRZ8MwmzPMKeJwEtYePXrbZbMYB7uCHXypA6taMCDECAV1oWuws",
  "key29": "4nCEr6t4LUzN9hWNae8vRkCeTiwXrbpKdXeDc1JdbhSzYp8FX3ZvyGK6ydqpJD4aBGFC7CNGEForCCQ35Swjuc1U",
  "key30": "4zcf8f2uXrrW8drvgEiysGjV3QgVa7WZKAbomWM1gSKmWG7FriB668tG9zJT5mQAYBtzS4NbjZUmFazDx69Mbnoq",
  "key31": "5Hsn5dhtmsZBDroS3aGx7cYNvPdYUvEMeVpigDFYfFt6gjQWnkVDKHMYENnvVmHRSNpeeqcmEoJsLP7AbunLiFfb",
  "key32": "4XuT8crP58bEqNcVxKHqELPVoxeBXufK6xd4UmsnEYBR4aidWhKLYy1A4NRSaf21jVgmps2MnFs1LyhSADuRhEd3",
  "key33": "5qxSh9ZWDneVRodnBeMtHxiXZewf8TNkKEZraGL83zGPFZScQfxCyGaKRmRdbE54qjHKV2wkwJer71iZ3fdqA1qA",
  "key34": "4N1j6A5Q7nMciYEcTUbSHo8nz5fb8nSF7xqUu5mk8sNWDU7aD5DGoMAj93hd76nsrTjsUeDJGxTk64rLvvJjrp4c",
  "key35": "zPtVmit9pP9oYnig4NNV6ixf2Q6L1BuL6phiySg9zoQjqD4h8TYsAnKUbpU1R8M7JL7BNFqosazE4fG1asJ6Ag2",
  "key36": "3HH5b2sCo2AyyNsnQ8tzJ37QjxzbvztPMNHcUzgkjQ1JWipmA5MNg5wUNfjwEimssLR91AdgmEUG3LEAdQupZ3KG",
  "key37": "2mozphsSmevPSrnxUGphtoFt72Q9XdDtGHUoqP6gEqrpCN9eZ492iV4c7PbRC4F5U3hvu9URwi66wVHuMeDw9pXa",
  "key38": "vkhCRoyKrbLwYfyo6igcQkegTgjnHFQxheRfeeQFrpymBhW4zv3kp55VQZw5JjeL2eYZckzegtte64epjh4stxf"
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
