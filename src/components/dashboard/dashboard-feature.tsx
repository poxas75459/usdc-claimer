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
    "2jzzE86EjQPUDCQ5karBLTsFw6QFTeUwqBJcomqPKc3fK6PTpFJTrve7waaxDnYwPraXtyNY7H5B3gJBXZZbnJhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1uLaktEMysLhpUyK29bqqwCRmVGBCzwQPVLsmxddyKa78A9grQkbyTCbAgjyVLjxkUXUaqj1ivjbozUMkXjrfA",
  "key1": "2xzS3EkiCVkazvfJt21f9EkBbMvThoX4Y4HWD2fF8Q32XFcoSdZwpiej7U3wxtacR26Uv1L63AmpxU35YwTJoiJj",
  "key2": "3YhiVmA3FZhhK59GENGKaLXxWviZo8PXP84CUwNwx5QeHjQMk6iLe4upidXWrdsNU5qkNZm3MFrcLYhhphBZoXvb",
  "key3": "31vXzmj5zrY5KvDHnYLRJpNa5xsb56mwSeWm4w5sk8dshWn4M9gs9kfJsWF1N9hM85C3fZb3gGxMBT4ceY1yr6yi",
  "key4": "3YrLS2e3Z7ZZMGCrLmpjfVbdpwSAdFMV6atsr3SijknQsVsM1y84fH5ypnjjLpgyYWZkVskdQSHf1DhWe2BUX9kp",
  "key5": "4uxLanPJTwgyXBLahESfYyPXUJCy2JPCvs3fd2x8ysDz4ZNyYvCnY33CUJo37JcKDnU1DGWUAUFNapdtZoEGfYkd",
  "key6": "fiQzZ7cRdwjLMv1VTsVNJ4af8VwCChrXxDqSCi1oLhvQ1togN9z9zfJUSkcJYjzrf4GveTbj5bjaDUHRV8o1x61",
  "key7": "3Wjzw7k2iDLfk7gLd1JaYBzYHJBBBtWHxcnQpywEfUEMhVyWT7zcyH9JmU5v8UnU42XUY8Ce7r39n2nmyKKSRpTe",
  "key8": "48dqrWPc8SdPuA5msKQAzw6pb4Hx75G2q1StTpEv6uVAnZhXu2TRCSqxZE9d2Cjuap1z6Lp9p4CzVKzMFqY298sT",
  "key9": "qnizgzicniUUKnDghqBRQ1zpipsKqXcEocXcxhwwf3F4uc3hDE1sxrFN7Ks3y52GqXqAuHLkSqy7Y9VR6QzUGuH",
  "key10": "5LicbUaqguGgN64cTmogNXguzLdrjvTSh6gXepoSM49Emi3TFH3CKE8ySeHQjPX8WmgRoSJRV586w5qtGrN9diJ",
  "key11": "Xt3GgiMcnDqgVmJM3htX5duYtvaPLoyeLvQvbYjHNcwNzBN2oavLjP4L8cb53PdEeRtZSCygWpmHgYwbU7jj3jD",
  "key12": "36f9dTPFP26GphMKud66SEgaK9tuZyxVY1WzjRsN6XYQPbi4Jn6XwL8HyqfX9Wn4QUSFNr1HWXSJNH3RGJpUvnDK",
  "key13": "2VRJ9mVsigN2aTHEgbcYNS92jNC8dmR7LWcqT32AJRWgzi2RNWRS3pU59jQtYYVVJdkHG8a528ewW9JwE7NGhnhW",
  "key14": "2tfgqjdGDwTQVd2NcpLLenPv3mrN1F7nhWhU51DLP9KPY5Mf4Vwk2kSbc3L9mJqo8zAGdk5cmd42Ssb3rFsu5dK5",
  "key15": "2yqXDRcuEJLkCHrxnKFLWdebvNWD8iUabsBQkYHKYa5Q7mb762eQBU99vLdxRYuigV9ET6TieAmVrkp7XuFNm53o",
  "key16": "2GYfB2boaAM1tv8DJ2QiD93FVKMWUHGJgmB6CBJ96nvmxw3WzcGNnvCmBDfxf1D31uiqUw6HfyxPSnTCJqAmZotX",
  "key17": "3dkxDcqMcbsswvx9P27ALVr7aEDMBz1rsUzNmdZ6Kk5W8aUJwhVDKte296GZiE62otoQ29sDVAnVEFX79Dp3xPqG",
  "key18": "22RjXiHXKUEqmbebSki5KLEtqKmNXKEmWLvtDgSpMa4KAcPMVhnGhcTWiWGPoxQRKa64inPMEFwfJKVpsbakF4dQ",
  "key19": "5Npp89DLqGj9XrVDzyN4FuaoMdABLmEnXjWGjnocUHYh1agQX3Uc2FVqNFad7cpWcct31CHfZcsVpbasV5YAqMWm",
  "key20": "45HytKpV3QTtEf9jjSSc2LuzASGgrEV2FUkjbJdcEXQTec84e7SEbtq8RM2uHhG9CCgGYtS1unq3ZjUNZZw9oGDF",
  "key21": "63mUGweW9M1Fc39UAJhBQbKZKoBXECe1quB3affVjtxdkRbqmrtcCUWzsbVehm2R7zndKZYgEbwPMHVUQF7qDEry",
  "key22": "3aMfmG8McJNqHGHguZGazkeASqr2888xDrf7CtAN4kPtTXYRNwdJLJsYfrpyccMFY6XUdaWN3bnyhanw5zM7JMff",
  "key23": "nYybjxn9ftMa7ufjeUBcQ8UvZeyqc3pQEG6a3ZWEq3YsWwcM4tGeAYHoaN1a9Sd6xuDPAMoM3DUjFGH82AFyb7A",
  "key24": "2aNSS1XZ1zpWgankdPWG7px542YFBFU8iEQAsNbHKXzFxerR4aCcKD4MMnsxNdtSA8aEk9J6FsBNF6qtgaeZL2Rv",
  "key25": "5Cc8bzCWjmQ9E7qdqdRhnQdXzGeAAPe3dDJecmyJu1neNBfFHQ2ffBwHrreDs9ZxQbFnUssSfQrySnybEeZ9cjt8",
  "key26": "3jVzWZZqh3MqhAPVcNFbGDw1yUUvbAp86SYTgDjL2EHLRBLDLq7WGpz1sp6XDVQWbupkviAapnC8Z6aR9WtZXhBa",
  "key27": "4e7p13y7ppaXQperpQpz4mzYvdiVHJmM65jSK9Uvfh7PPHJQ4ZLKVcLaLuNKDMazazH18V1w4MHJfs78MLjWgxcG",
  "key28": "3e2Xj9n7Yy3WiTNCa1BcUZjXxaWJHkiE22DnEbFjjXi8bPA2r1RYSWPZ9kN3NHC3hveU7w5a3duPnEvx4byfY6Wm",
  "key29": "5yNPGYtHQMcZb1Taxa8pk4jUghBBb2DH5FuCoBsuAKziASEkjuDMcQiG2Q8WvWMioTWYdiKH1NFCs8N99u31ARMm",
  "key30": "PwREB4jzWd3NfAXvp1t1xrJHFn3NTvWsw5KZRxyGveSA8DyvTPFNcRbZ1e59PVwqR29HyT2TTtKy955w27nSCCP",
  "key31": "35ov25cCnSb1ZapEbk162gRgvU6PDnrVo7Jpwpg8TQZimDuwHUzZZLhGPcxwEdsUt5dwj1ELxSq7dVBBqnSjjdx9",
  "key32": "3UeBPLwnLWsuxVt3TbHkCgnjZ3QTmv3CMUFow2voyVZNQnkLmm7fVoCgPGXYynqttW2r7QWZRCCPkk58tz6sPpdg",
  "key33": "2SNht5VAnSoJkPHc8JmB8eHhxHitrVvFyU8dDaHsSePofjobPHnaBUgJWVntXgt55atfQoQDqct1cKJV4PM6vGHW",
  "key34": "3XETeAz5ZT9RhbmiK8VFbet9NN5AaScVWKeKFUZ3ZyFiffYzg7QnzwH1BjJHBfdbkHXTxKPCrmJLCnMM8smjf7T2",
  "key35": "3pTaVHXm7dsGwWvErMP6YnM8q1CzjF5t6wWv7VDJxDY2BeGSaZqyF2PTKomim8iCUrEqXMk8amrfTiGKtmWvSqFm",
  "key36": "oWwBF1uvFk5Mr68H2ALYbzMsakfSn9EU8uSBMR1Lrxu4zaKHVeubBznCxHyXFXbPHBfCubYaAyDepd5n14DrvVX",
  "key37": "MptnUecGEBP8edyUqaLS9pH7wes54qWtQaDYyUey4fFVgk7wPBdtouLjMKVSQcoGht4qnU9PsPFxEJepHkjk2LZ",
  "key38": "KfarRgfXPXCmg3FN11gtZEazyikxabiU6mWHS1ffMFK2jrRCSXBe7iWP2BXuk1xPNLTM4GbSyxK2WPQhUX4NSQE",
  "key39": "DPNRP9wUeVZaWgVSiVG5nHpcFB2su8ENg6gTzSbtrPD7RzFcYjP9cnYejxQuKicJ7tvaS1x5RhmrFiuxTSzevQF",
  "key40": "2CSPup4reX8DLjaPs5joM9YLZye3sES34Yp1VKpCDTnPorsDX7jNhnMuZJ6GCUdYigrtLZeowsZyKHhMYN9WAaB8",
  "key41": "WkkqENuNX8MXFMa2zBZTAEQiQM6fyLHCyoPooLjf4T1yTdiuxxEKogt4XArtQXb1V5vGysvk2Uk8aeX4UV1vDma",
  "key42": "4bwJNJAABoZEcBbh5Mdnrth2Zo1ri8oyGzSH2ytbcKLSpDVupzWCncyhambkvNtg12AoJD85h7BsjqPbZCr5MNhw"
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
