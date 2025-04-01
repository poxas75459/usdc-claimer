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
    "3SmrAzPgTBjTDWzj3TYfkoTKZrwuS9UTdc4WHpUJ3YNTXcDC7gPdgXzM3PogTBPne1YwV52865KYa5zwgC3X5BpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465ckW4PPhjRCE3hMdMewFLb4mYJgpx3mqaG39gu322S787u9TCjcPaSQHYuADVQyxeRbo9UccKGnidoubMVsXpM",
  "key1": "5XJQMN9bpMGDvkagsGn6YLqhENyZfmhDsSF4cAmRPpxHc4RR43tS4vJ25un8tPV3DDitsuNdL68ZV82dTv7roNSy",
  "key2": "2oNnyDiF8816gV6QWursGBPyUzdwv9WPVW9BTggg1iJ42hZq5pGtH8SpJxvNcDEsRwbxrFntZhYiwJKFinWm32Jg",
  "key3": "5fqsBqbktLgajQoz5VjB7R34U96kGy5mTpYv4QQYazhsicc8k3Y85Ms73JdQ4yum5sP9qt6gU6w4NDvrQbmazoj3",
  "key4": "3Z1mTaZ4hPtkzFRwivd8aePY8z4qsRXsLJvVbjHyjtp71bJK8F5jTkyZ6M2kqh3V1TdCnjnQdzpUKYtvdiZ3KjKu",
  "key5": "U1dMgSMZwuC5m3HzWNU1keJrYqmhpXFJRwzDqNYV1JEmzMvyC1V7BToKY5XsdMNCSoe568rqVUxsz1cW6gwvE9x",
  "key6": "nkyJGtsK8Ai969GNVfJ2mixsPFkKonbk7YGwzYkCvomSGRqUMwfchCkcRCjwXLhFAmcGvBX2EHitSUSSwW7RWRe",
  "key7": "WtrAa69MMcSQ6oPceVTu8WSarHgXuwzHcX7y5F7BZBDFNM7DKMH5XNPhcuckoeWMAXtt24Pj4Wg2ys9Pm5eTyRa",
  "key8": "56hmgB9GLdFbxLZ7GusBFtFNQ4CCDedP6TFfUrkMwLWyA28Nn5ZatR9VdGaJSmxoXBJ5QmTi9jTVs5yA38tpAdkM",
  "key9": "5ZPVEYqF4ixZCyYb6fcVVsV3nwEX3zimEWjAo6WqA7F4cj6caAELDJNLqaUwXpGnFZaR7QMvYS8mV5wLorJFpGzY",
  "key10": "27ig9dqBZQFQGqBe3drRu9ByaKfBxWofRvKexdL5CcCCUwttRZqGrt9AKnQJDG2EpHBWBeQ7pyLHni49vfssEdSr",
  "key11": "4z2GA6Ct85GtPqWDTkWdRziUT7pXCxLTkwWQNT1LUAGHQZgiVe2K68k5VtDSDQ5MuCDyumXdiRiqSqQDdV9uHZtn",
  "key12": "5HCZd5apgmEbRkLq5JgFGVgnTRwEwpNELtb2cq7EXew4F8Yk1CKqRE8J7wpnqSJbxccPUBEoxCAirKvuV2r6e2j4",
  "key13": "55N4nGNnDVNRkNRRmBVTStvUU4QSHwXqCRDkovzq6yWFUvJHvnFkvJRhDoP22KkXbgZAmasCFtpL1zFhKArzq3Gz",
  "key14": "53C2MSDV3qvq3yTAjFv4CtNnRM6no3hvpx71i4Ack6EeQ4sasFHBtVram4kRCrjhCdTfwVJB9RcSeDfW5TVi6871",
  "key15": "4Wdx8ytQUgkABteQ8JD78ysfK9ttW5Wdyo5wnQSGoFZoCjwsBsNSTyHCaqRbQUgQ5zA2YdSeBZzaLUyXhUztowmT",
  "key16": "4AoHABmn76LdAgjZqs1Ha2aFYoEX9uNkh1DBhsfU6aj9V15T1nHv8joJ1TU3MhiAE8cTWpckwfh59tTfux7r2c2q",
  "key17": "4exoKrs1hkHndN7dhdb24eiXz1ML5AaLzKGDqmvxhSQrUDXxT8Vr7Njd4htE9UR2KPnWzrViGxkKLb6ds9SiqEzG",
  "key18": "3u2rLMtnFGNpUFJbfLHyau5r4n12PZ1qqWSe6cg6m15WCpTyBUDVAyRwQyFksgLyMPH4Za3UR8ZvViwm4E53ZsqN",
  "key19": "2fqQyQfeNRpUfNsp1Z3cu96yAL6dksugofi9bcTctmS5Qcy6iLgi51HnN2J36iU1eYEYx4dvPebae3YvT73V1xDA",
  "key20": "nPouWsiJohVqJCyGPPRYCGQdFtLETH8HyVSWLSgrtZeHZR4aRyc6pFjj22xycS9MPosgfoakHBjKvfdXxNteqR6",
  "key21": "3FZoNNWcUvTpSnjrvw1zFjTZd3uheZKWsc1FfJzESqSmMQk4dN54SvMqkFLcH46AEkiQJLGzzeXfXUfThbbhBKnu",
  "key22": "4nV6ez6Z4dSX2rDaZugUdtC2bUrQjGzSdw7yvARsYEespmPxdjtmypHRTjK2dHcVrTes3PCbAg98Z7LoQQZkaUeW",
  "key23": "5abgyiFn1XzNwKbMvfPoDg5vHSbZ6EygiGqmkWBpzGjrpaPUTnAVjJKBZXFRxqCdYLi951e4FgoAnjBeM6QATa1Y",
  "key24": "4c8VRojkp1TTveU4iyPxEWq82spF63M8JJmuSmMZvjD8JsjwXyud5BBC1kJ8jgGsbnC2z2M5yK5Gb3NptVXMftts",
  "key25": "2pXn6hNmj6cBLAPU4rBtDPvF2tWQfqb54yBhY8eQFJArtYQKnGxXx6jNPbPNm1ji86PyMTKc746eawk2tqAcQ2pU",
  "key26": "4W1GvKyH4pDK6c5Lbiurhjc5jU9m6eDWAMNSAsdDgqX2w9BxrNQKVQtV88x7wzhgyQSWtPftELMFnJjdfr1N5czY",
  "key27": "7TDVMmqBfkaGDyZLxbVbq5LyenZ6WYRKq3Yn6UKLzcfS7s8hX7XF2kX5Nv6DND1x3X7jtDAyi7Yj4yYQsbWetVL",
  "key28": "3EV6F9eVTnV4B12YiRC8ve3BzgoAudDbFTyXPFEUcSuDzKBd39th2oVN5zB5SxPdvxgtCSrNNCwcacMpSWeEjnwk",
  "key29": "5F7qugN8ErtqWSvHXTb6VZQeHFGqgCU7WiinsNVKJxzhFstB5naaCEwF8GTTT3VaqLcACzfWRMR6MgKRWC4e7UNc",
  "key30": "3vpHVPFt6FVPFnB2V3i7LiLnNfTZWMxUHhS1t3doVKPapVAMXtSUBWH6CoeYdmmArBCvcAFcsonToYsMmPGxXtfg",
  "key31": "57keMFUkxbxq2CquhqDekZMDKci81aug2k7m6YiddfqzTp5QQd9vwq158fYs9ScjXrypAdRdUThcLdngCAM91izb",
  "key32": "3HoxVNnw9Ah26NkRcx8vJAqQv1h3QytVDHBSpzk5rYM8F8WRuoSFyqZ6wPMHuaZcoQxccdBLAmbH8DRvUARtWoMG",
  "key33": "4hmJY5FTmzovACVdaiBtwifK3XayXQLHsDPCSg4w6SJ9BwoLkq5MCZbfWaDo7BfeFbqrFFTGXr2V57Qa4k3DsUGc",
  "key34": "vR6h8hKaU4T4y1vBtoMNYvBG9AjFMWV1cG6ikgUwTcBRWh8qKebr4bxzK2jYq7NoJaEnfg2iXdECCQNtabSMhck",
  "key35": "2uf9pyWxK5L2TihdbxgDoGcjqLjT7agKGWsRL3e4E51jqwqVGzGmrntnPDtYBj5KTZkW5KUY5WnSeb7BXpunEUSB",
  "key36": "K5YRNgbm7rDCxe3d7XzSXPvxzdxEsdwRAUM6K3yUwrEyYKNqegsVPpk14Z4KP4zPpfU34CHFPRj7fecDCMVqUKC",
  "key37": "CxLustXFwDjSSXT2vqWMuTBACVj721S8oVz646J5kQx5veFpMUfLZt576tnis3s473U7MzLDZwRTz5gpZxY3WJm",
  "key38": "7DPwELcmr5jeSBzsarhLGED6u4aLediPS8eCjdErCdcmDhMBfzaWTt4g4btpGVjco3ExHX5mUGUX3acPJMMEJ1b",
  "key39": "3QYrNtU6QHsu2rhG1YAjouz9ePa4EddDexMyX2Syf8TQiKF9FQSFfhRT8x1Q5HtFUTyDo97Zndfmgea3DtoHi6fc",
  "key40": "3YzCAcGTDVNXH62iQc825Zdvvv5uCcpinmHCM8ht5tz6mVW8YuVZAHqpNE2REdVZxoRVPRgsYUknE9LjSV1taxNf",
  "key41": "3VFQUN7XPfnaUZQNo7LtQvsDabSZPh3WDXPS4kb516MLrux3FHYKRJgdGvbUV9AEjV5K9vHap5hCaNqimTvj3pqq",
  "key42": "2h8FZ6dav4XgH3cfCvCVPXUKtNjfwA6e4sHpHJd2r9NLG57HXTogJdJa8AckzMj2SHmZSgUmmTtnd72iDLRuh3hq"
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
