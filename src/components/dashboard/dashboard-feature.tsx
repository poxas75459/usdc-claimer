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
    "4JMQVhdkqA5uQn9RtGE7xnvySdwYuytG5suRfY9iEaDzXXZEmcjUmfPmyTybmt1ir4DW1B97otk5VBeh9otXLmgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7xMAr3noBxckeuoUecS71vZno8SBeFaumEaFq8pmekFABWv7HD2MqqfGk7haCQjFSWqm2MT2qrT7DuGga5pZuQD",
  "key1": "sz8PBpQ4kWcsKhiNGeDcUa5WwHnvvoJByaxn5mmNgLrEWFLPDbj9mK5cvsAz6CaySZ53vMfbqQu791oS7GiUYfp",
  "key2": "3iKG5BfoNFQkRRyU9v4AQUu8cE3KS4sfJHFgHroGtZbwyw2Y8BY8xSjkxq1RKDAYkY4u6oQgPA6mGef9xQziHn7R",
  "key3": "3VtM8sHb48DvahRoG6vDuEKAq8cLtesorcy3sPuG8zvdZrtRmnkV3GX9YVigERxY1WZ3LsGRXZf7q2trLyitdnUT",
  "key4": "3x3HGaJinZ1J7kryA6eDsEAdG8pxTBncfJkm3PJm1KJXn943SenkxT66ugh18gnYVxJG4WUy3zTzjksXMP68DxSx",
  "key5": "2wTaeHDsYA8aYFun7bNf4pnoUkQ38ten5Vhfmo8ChmVhdG8uoxzAGphhL4KH3GFzEdUPBhFMRMkuNAGruzGSo88e",
  "key6": "2cFYmu5SLoJxZRyLzrxdcZhtMnv12vC3zntNjuMD7sG9wD76swcfbfTn4Q46VoWcmk9G4yZpV3CuGP1rTLo71vCR",
  "key7": "2NQFaTrrKdjYmeqrUvEvBjdgjoLPp3iQESYh7VrHLQ3M1BegrkPVEKmRvmMJMxonWFCG8ZQJeUt8Lyhq4jk86AGw",
  "key8": "35rRXS8dmaLeCBrSrb74NpD4dTXvDEyZbFaaJ8te5tH57WweZnZUHJHYBq56kJ5HUSGykPKxHdV3pW3512Lrhbsf",
  "key9": "55hRGKQNcuzbqrkUhBQ2mwxuAU4nrcywdPa4Ays62b4XLfaMiibPfhiqCA7muA6mkH6KLeZSHSPqs87h8y4a8okB",
  "key10": "8eoozjiNUj4JmCgS7SNDbNTcPHQbMLCm52veBEmcT7qFS7JVbAXh4FPM19xU7kwkr2WDVNzqu8eMenREVxjTwWg",
  "key11": "3Vy9cA6UHC6dEiia3oqKwBc175doei85o2KWcHtZrQdHjuxehD9Kvsf7Xb7PqT7MhWKm6pA6WphUM6kZtFxyHzCo",
  "key12": "atJScKB96Bd7BXibjdXp7NdQbWbC2ZNPHPhM5K7eNpdHgDDXY2VSAqkdgPMAFwkPTpKkAhV3MUJ5m2VpbNcrqtk",
  "key13": "4m3tvAfY9kpXhpzsxBqrwDhFD5Re53mkyy5z1FoCkFgiu935gCYtNTkcJmT4TnCqB2W8ER4zUdekR1VnGscRwTPA",
  "key14": "22gEdt5e4sB2Czqf27ii2RQ11rNab1S3iRUz4PUQ6Tdnr3AtoTziEgbbm8NJ5WfMCTRpK3V8BuCZDin7d12ZbFSv",
  "key15": "2sXXTYbFKAvttC4FbensHWEJawnbhh2smMD2KNgZRYXe7aYT3QZd1ijQmcqbjd62MQtut1RBEQuqgYbEXbmBv4V",
  "key16": "5EgvWoWujv72EzQdKQKxEJ7uJGGDzGDPTr4Eng36zW1FHUFV61qVzi85Fs9wzC23cvAmHTyMjksCD5tmUxaDHopW",
  "key17": "2k446kQbQcAn8bSm7F5hnLFKxLcTDkHHWxxZ41guo8HCY4mYdGDHKEFBmMtwhiZCVf4DUJakTbjgiPwpBmA5Ta5y",
  "key18": "2PFXMCpH59YYMspmyP2smu8CnpgCSUpUWD6nDh473KbkZwXc7tzT6AaLTibkjsaB1iT962k3BDHYyQcxThzT2vQw",
  "key19": "ara2NbDchNsLxNYixnuyXcH82ahVcBiC3jiBMhtYdmho1FR1FiQt6SuZjtiq6mcsQFpqtFAxuczdFbgZNjt9tmp",
  "key20": "3wQXZ5uhwsJsiVb8bPan684u31zb8eRiYznZ1JAdPYSyXDqHCb5FYwRJ5FGhxPYYiNpuSy64boagSYMBsio6imnK",
  "key21": "3zoGDhs1kLjWGMc4LckSeFpd3pqg9jaSLVpKjZ6fVGibaHYwB9MxUE1Zr4EFzMTYNrsvFEmiaHTDo8BarmJuQXMH",
  "key22": "5e9W5zzi3goP3CaEksq83zYv86fqz5SS2ugvXzbP9eXPcaicCVKiygNVXzkcT93avwjUa9JTpfBtWBWT9oimdgBf",
  "key23": "G93ew9mpw6pmM7NBAqYfDctHduzjvBCDvB4V3ywjKbxUhDZCyxwC7nHqtP7FsR4TSHSQyZ3kpuNPpsDL35zGqW4",
  "key24": "4BBBeQEBsJjnxPf6bwmdMFGBjCVsW14VcvUJLLctZbR9u1vU6JKAzk4M1HjXyvUhfxpKmHLk8S7WkW7vm9atfwaS",
  "key25": "chjjXR2khBnUGMK7RCBvVAAE7akqUYeU43MiwkgADmDPe9kePSsN9GAUik9z1VmrLsY3W2CmipnJNXwQfcUzYai",
  "key26": "2zWhbCgfXLQQp4WkhfUB3omY3doWgoQMnxqkDv1ZLPjZraRhagQErPQA4D5xBFtNS7b1iNhdSnqxCmeow8hcMqJe",
  "key27": "2PpavQTKJfqJiYucQHtcTfzTG3zotC4a5SvZg1MbZZqCL6T1Kub2Htky9RdC3rtZcTpSdoqBxLwSStJMMdotsaqq",
  "key28": "3mG9ZJFR5kZx8dqUuAgUhDnUuZjipTfFT9xvtjp9xjHhf33ckuzwWtZDvK9MJSWhXo6huu4gt2hWoHo8qAkZKULc",
  "key29": "23Dp7MroxSmqgDNb7nkGiT7CbgMntyFDeeKtKVK2b5hCvXXiwKRsVWQBb19VuCqkexb9EuM4RqvhrVAprzPQ8ba8",
  "key30": "BN12QrW8o1QPnN38XbJZwi7saBUNVwagNupRsv8PKyboKoSfTZEGtmqVKGbMj7mpubQSRNC6gpLDxaQdBWbBrh3",
  "key31": "q5Rn9Nfx3KoGwvf5Ep4pDGj4WXiv4rfjJk5Dey2NKs6KJ7Uti1Kb4KwCMXEBEaTMmusjSD94MZo6UtBC636wFMv",
  "key32": "2aTmo9nS2yBfzn5zL668tySmdXqt8dJ9T4w6Ttiv2fE4DQN7QUpgcE7BiB6tNP8N95QC9RE5nHfgZG6y8fMLYKfe",
  "key33": "45iNp8JgR7Ss6kYoBeVPup7g8gQBjbwwwFVRpsQ1StM9pMiBSsT4NKoiG8mMoUwuManfKJCpee1L4nTLHQXW86Bu",
  "key34": "565XDQCi3aW9N5xyhw9AnHQFpFPxYvDe67RCgh22TSRsf82QoW2QdB2fAjLK59L2Q2QVhB7N65sZRYX8xW1QDgYp",
  "key35": "2Qjv9gSQxwGMdGGQ1UxVJgcAEnhvhcDNHdYay6TRxTo4ow8jDXZ3TiT8W3Gj52pwB1xrtru12nLA4Wcf5RaCEKRq",
  "key36": "2iZSmJVs2BGqHVdZMUoZUFQdVm4SCnvV1h4UDv2h8is3vD49FkA9PXRgzcgiM8yyb6HWFgvhn1xbCEWnHXkdBxrQ",
  "key37": "y6m86Yye6f7aFzmBfsrCF5BCp9QRXkANft4972hUhU1Tbn6sfGsZNv1xekAoMqEfje67rQS5jTW2fs2X1Z9Upgs"
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
