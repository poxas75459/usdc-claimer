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
    "3WVvJ1pJpAxxuYy57h197Vq3seUVEgaNk2SBZqroRb2RTJJdHasfEdnCowbNAU7vCjtXugfPpgCY692WTcr8HsSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uWDutMv9NpReW4aoaVzzafb7nuaz28zk4Ru5qcXEzc6XU8fBAXJBQJZYpPwyjzZrUDrr54ZvryFNR2b2fAUqHwU",
  "key1": "2GPE2Svz5HhmPEgxmm5iVGjE7feB6gaVhp7HajAKxdjozsqjqnHXZLqkp6TvmmfdnZwjG9SRgHtmYa9eTrSC7ouG",
  "key2": "4yqmJKcEpZWVNNc3Je9Xx4341UghrzfY2TJ47uyXEos5Q9BeiqBkUJtADLd1VLxPiuBVyrEPJu9vx9o12RoiRrKf",
  "key3": "2SDj5VEQuYZ2yhgBJVN2j9VPkyHFjvcZQZp4VU9eAnPepsjGrUMoFtuCtBX9EUawHCW1L2cBzwVg95uJy7NE4R8U",
  "key4": "2AJ3vVxrVG11jA2bawnaiwzptqt16JNDdxDigo87X8qhebHkpmbCdXKLCcXSED2fFqApNX7C8d8M9xFVDcS6hXzU",
  "key5": "46V4DnAuQtx1nV78RgCgahNtfHe8yf39m329Kmg1ubVccsg4gZq3qMY7m58JYuy3G5w6ktUqw2CrKP6qvoPFzLKZ",
  "key6": "4cF73CpQBtAUd19NxEPZdQyjKDdppCxTKzVdJR7MZJHnbjs4wc4PkeMovnWpCBHJxaoNfqVkWNXxF5CQumctnpt8",
  "key7": "SKoeAh45gRskmZps6Zx7Kq9sLDSHUCNPX4HntLNBkDXZpE45DGKjPLDHznerHVHBTgALzAmv72JJCALcuxE5YWg",
  "key8": "2xtExSSVspYmCN8Ehk2icJV2vQ39Y4jW8ytXjiyhbfNGczexUEWXvtPpXt8uDkvQDjitWxbm4NVjp5NE56phixY3",
  "key9": "4jwNrUARdAASkVkxLxkFbandaVKfJUybVY2Mjajg5wxHTCUntSRZ9PcQ22zvGX8Kh7E9PJjDAKYqsaUJ1pZoLAsC",
  "key10": "2oVTdENQs2781fAtM6cEG9z8y58zKS3x9NBoh1vvP9mMxtudzJj3pcRDLqC3R1GAzNNe4TmnXnPm3vob95KMu3vb",
  "key11": "4azkGm2SqzgaChtLLeFGmWMakbEq7nhsJuv7oWnWEVjqFcB4C6X2yycbKHjTsHLtqjg5Lman7B4KqcKs4R2R6SH3",
  "key12": "4eP2pJBoYYPSCCPxGKiuvBZ9zcSnjpuPMXsBqbRr8ittbxYQhf3RfEQDTkqGxSM4GFgmpoffZ4WoGxkHPZq8HAzD",
  "key13": "wAadsF2uBr1XQ9DPzPM9VzEWKmWuzyJuck7T5w63ev7PnntVpwgRAMQjPTPSUogxe35ycUyhDaFLfFNYARpAk97",
  "key14": "38wrmCv56nc8m9tgMuyEEjF6dvvZLyDroTtYmLyshgVKSnejXcstnxdweR4dY5dN3NtbdFGrYH7wjTUom6R6ghct",
  "key15": "4HQK2mpcHPDjPhWqXpRi8dyXT8FSiZrY5mPJQBLu1VpYBHrYNG7vVuetaRpRLC5o9nmmv8a1FM2pUVY9qFpZxtiY",
  "key16": "2uCpo4vDiqZuDNTzzgo9m2hAMzbDou8PJsqSqd1m8HAK7hqtS5ryog2TmzWcvHUijsJ5S1N1wKGb7uc4PoZUghiC",
  "key17": "38jDYPU7UTthGdtzJYF3u7BviG352oELNjvkYBAakYUeVCB2N9PsdFsXdrZuuJ8Ap43WTjxpJYNg4Bedo1my5bbd",
  "key18": "q5tjZqYBsJ3cj4TgHoDgc6S1d8q7Awz3WMLSkomUzeLLnhKoQ9urU8eYwGqMxnAREcDSianmRQWrpiPA2YfURay",
  "key19": "3CsZ2iaCeSXbR1Fjgi9uysvH6d8euh9DMsSqeiBa6mQ28FRDMn78gNbAUuDgK6TgR2SABsQtEtz41n4DxE419kiV",
  "key20": "31NVzjoM671umUHsZ5DnTFYToB2W8CBq8iDNX8nLr8MWLbCrpVEyWVRLQ4LDjPorGt4LtnNKLgFpfeiW8BZDUn5W",
  "key21": "39UrLpEDbmVEkEx1mieoWHAqSUhmo1XNb2MgZVbQVTHzSyaBUfuoc4nuDWEcjaDPEe6XCeh1MmGpLwoTVp2JoyqR",
  "key22": "uKJx6eDPjQVLpbMK9hEV29MhT2cdnV4dMNF9qc5XRKqAcnNRw4E5Sz1245WZYxfLsezRqEpYxMY2W4kjZsxHbbS",
  "key23": "3nn1KbCKNw41v6NsGSjU2F4Jg4fMPGU6W5sk4qZiT8FHhCUrJjCR7qPN2WSuMaXfxGqXBymo2zm24YTQ36jhJTNU",
  "key24": "3okgdYtcGNb7EqRUtyAak7HSkqVsR6NuHdeEd5U4SK4y6ZjWu9pmJ8i3up4SV72Tbzgd7iq1chA5vfRDsDJtf4SC",
  "key25": "kqQwW9syHRFv5gwdjV1C2YVMYvs2dtoSEShnx3fMccmPynuwAGE4e3GK1Ay2rwKxJKDfNYuRwRSrASvXcNfKVhW",
  "key26": "3dne4jRvxoJ62juN8HNomwB8j8twafAV2K9TcZT9cybMW9QamzuYim1kXAjbc6EqvYNtUWcNT8gr8PKw7GyaBece",
  "key27": "3TfXP6XFEpvMm9TWqbbqrKqknPotozS1JznC5Tbw7WV1H9KLgMWW6p4G4xJoKzcUhn5NZu5WVrHTnU1mDjF1ipiw",
  "key28": "53AbhwfUz4ZvZ5xTGiW8fmL17HkWw1MieNdJfCcnJwXg5Mza5NDkpKG5Xs5Ytbh1BnW9Zp9eq85dgaEjLM9YWnEY",
  "key29": "5fGnY8D9kxce5wdcusXJkwQ4qM9vS2nJd6dhD9ETuMw4aaeVkMeQx2FQa4Hs51yXXB1kz49CaFPqJngRqXHkwXb4",
  "key30": "4hpZonPDEs1XvswtQUEUJxuBYtAHGyQAqRVCMWWBWi5Uhq7Z385HiT36VPun6msdnzKmdZsxVRUBa2A9HgHVaJad",
  "key31": "2oAR2eRKNragWtcU3ncm5HHKyNnpWsXWnTe6RJHALRib9Z3igB2GmGT8zgpF7vVR8tt7nVK5WBeefn4NPm6A9Bz2",
  "key32": "671ExR1sujaYF8MYCpta1y5UAnDvabfxsR99fGMA53kTDDE9EzfAGoR5itVdb5EFibBo259VVvDcZ1R4punki5Xf",
  "key33": "4eVuAaxjHY3D8rdywfuQvU4eGHBm7Arv7msiS5FvXxux5W7ANXmtM98xx1FwYZXB9nSEAemfL5s8pRp1mnb2H2m",
  "key34": "3mcDXBJMbhSiYja1oKyRthLWZapVJ9TZRgcpYNFMUrZbsgezw4QGwTn7kaZkBjLSFAFo8ZVYSWcbpZmBw7sN7hW3",
  "key35": "2CsJvBrpTJWuYyr4zAo9HYKRVyz657dnoNmVBAkGJ7Je3ogyfArGzVKsfFJFt9aERqiVj7hSDJfMCpFoYP6zBbn7",
  "key36": "2D335SjYggkBfggwiyyqn5yLrwMR68z7KC2k4127tkDG7AbqTsYWzem8LUVdujc5BkEeE1oFqzXdGmqStf5x5hnT",
  "key37": "4bKQ68CxbyAAwMMKBCrYfunXpwSyDjgRWhsXNXkmCUXyvSUkktVabtb57nGRS9A1BFxnbUKmhGwBppmzPu6UaeTv",
  "key38": "5PBmY4n21FqqvfR5krkgFF7SyVeWhDHicHHe2La1QtfiX7PB5j7dMBW4yZgNPXD67sgbREzXi3A9HC9F9tKZuC6e",
  "key39": "2b6oPEnQJ8aoJ8eoswAGT7gh6r3qr2uEmLvDApF3rP5Yh9T4UmNfqEjR3XRAwECJHneQ1WCkuPcHyg6t7NRGkCG7",
  "key40": "5uXiy67ZRX5CNQmfp1ByRmNnBLcPpc7xhuiiPWgKxHRuWkAuYncveGstqfriCi7zHxvRDtRDbNw11Ye1R8KrTUvg"
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
