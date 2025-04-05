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
    "2jEb9zWaPXgkCYDLsvQEoZBYZd2WBiQpw419gmaaWe6D81yLMvZQ9FJgNAfKSVbukJa8akrXgzYWAYkkthW1uvsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jSQku7CLpC4cJoip6s9DCttSzSnBs69xrDJkGhPeUoM8dFV8s3SNtNrMGuk4d8sfQLfZ8rPkVT4zwgeoTYH8sK1",
  "key1": "Bmu4FeYkJCXg9QSdhCiM6mwBK1FnV2uSgpCrdZYTNoBLP7N56YC6qMUUCJo6xA4fxZvLbbu3tJTi8MPni79upHc",
  "key2": "59FTg6Laz6r6VnZz7vkJpHiYrtA52Dky7tsoZnUHA68AJcJxP948bK86YazvqowEMRaXPMiySe9ovj4traRLVSAc",
  "key3": "64KbybaQ8U3ftmuugcLW9Mg2vL1WBCMWzKiCNEb5armpWnvQibxRdP6d6n1Uu1iQqKZJmxmjoY9Gdr3PNSPCv9hN",
  "key4": "4KUeCLzeDWk3wePBjHqb1rJM11r1hDRV5oQ1NBwDsThUXK5xTeqPgegZZccRixqdgY6JRMjfa2f8wmxA73mxQRqL",
  "key5": "4AkY1DqqfY8ijC71yyau2HWx9kb9k6EkZqqBVs6TYTarW8bkWXmpCzFcAwhBbhPR1cTstH7xtzjEY8d1pEBf7dqE",
  "key6": "59Pn1a8Vt5MrZaVszEq4KB63rfevPJxrZpYq9xfBmZ7bPahtvk5awnkBQpo9q2eNnKJG83hhCZgnZgu93ydzxV9A",
  "key7": "5k3j5jQCcuKSM9bTdP664sf7x7U5V5XGhUcfhoZwC8YwrKmJGLg77Ta4oiVgmhA6FH4JG2VGiQbvYsJBvvAnvurh",
  "key8": "57GYetafepSvethekmBoXFX6dmAdfR3djZWd1GRL4nUCT45de83BH8nNhH1dEg9UDsogksHZBbaTbJdviyBW2wzf",
  "key9": "5vaPkzg89f8zZUyQ1whLDsPQrwJHY7PmKZDGai1AcbAx6XMqu5YKKCL9QmNRanffwB8apT4hQAXr6CAdaJqJnv9c",
  "key10": "3M5cpY2R2YyseMFGdzW9mjXapSgCWkYw3CJTBWyRPFy1EaYBZEZKzh9ouezeYarJCvoV2xwNknYKaFJMqebtcAMZ",
  "key11": "2tbgESVnPgmFHAfUbeURCBzdbEsAoXEJjm7zo11UtHww2vPjb1G7j8Lcjpxup5V6E9QnP7yap7WyZ6VqmsZFUeU",
  "key12": "3Ei5xZe9TPmcJ8pZbHLa8Jtncwnwfu9eP1wpDTss7s4P78HHKseDewoFf64EM8EKFCG3jT7z24uFrL7C56B4dSTC",
  "key13": "522DwpBornMFsoY6diquKffB4ejYXyzCDY52nHDo9AmHQgv8ExuLx8L35SYQsMrePBRYVqzVFBkvhk8Dt7PhExSY",
  "key14": "5LX6YxUWbZPQENjCfZbxkWPERmg5V9YmsmWKPCc8Ta1m97BFufrk8BHACnKKskjDFKWQAubZQFqudPDmmDeUUVbQ",
  "key15": "5fiLFj54du1N6SjqjKoW9kBfLA2isCwtUEELFjgKYEeUtSeiB9JYnZ5WccVyq5xtL6PKUXpp3nnySECbAWhL1F9Z",
  "key16": "5qPknAKLvhcewnKHCbm8KNnuaXqRAYXm38pvvRmL49KwtUDhZ4uhxasWWREzaAkJnNX1TRGbPxmVDZoiR8oqpB1s",
  "key17": "3Ri29kP17ymtwSH21qXJ9UqPFL5ws61HbsNphWR9Gis63DGMxcjiQeqBDaoz6SDiMBL4PYC4eY8fKW1YcznsskbC",
  "key18": "2atMtEBKxdPEspzRADBH9Yw86zU7gHBniwJB4brHjEpvgFBvHiQtfpFAguTe6PZXHeR3hqEqoxYWdRW1U3bqupDJ",
  "key19": "ji77hWxT71284mrPBkGhJ7z2XZmTpGL3jWywZzr6zAeWymUFL5h9REVF441NmDm3wKZi8AV6NKcec7rNjW1KNwL",
  "key20": "4DdmoAJwCnu8kPREQDmSoAd1aVq2n3ccCQF2umVfC2RmtPjHg61oPK9tj2npQ7M7Gie8zKoJoQT883TEw1s82TSz",
  "key21": "61PimxvkVYSALrY7WCGEsVbRdmZ9do7Ct7FvJkTkvsu6wRXotL8ke4B6PHRGKhcdPXJeQ4ZkvY6CNvyXgjCqoojg",
  "key22": "2Zrk8pSxyswknNr4TSubBUXiFkNjCqa6hAbQrbc8SoBCdoUesfPAaZaQ3ajrUznh2Psbbz9auGwpnxFVtfNGtFzN",
  "key23": "5oGBFjEZdEXtbFhTKci5zkTSYbp1N6uY6r1ftWwnBXCE9YEWMsKGK7QePjuK6zJy1JoEuD51RPieehPTLJJF3nsX",
  "key24": "461FqYYsXDFCQ4Akiq4QYCtrRmUXzNKJuL7yodZPTjX7vPPo2sp4wApGWZ4XG2CaZ4H3jkcWbWP5rezKrXoVmGBK",
  "key25": "2DKpFHR48CbNHGb1Ri8b95Vx9hDo8ZCW1rvuC8cLnj8TpgZXpxRFpUuNKLH82Kt8uBzQevagq9PhSKmMX6oU71mk",
  "key26": "5zPLSAcGpdg9gFuLo3SqZZgvB6Dd3wG9ed6Laj1DrU2wspJgYR6ScPSP6AuWv1ZMPawjiP1BhMmSddBBj7xvNA84",
  "key27": "3pn3YtSvBXgg8i8cvV3oijyUpCR3kY6ge89dUHTrBAH56TeaZVvXEK56b2hGaDYgJTdoiQMgvXDgcKwyUV6h7PXa",
  "key28": "4gakteHW373j1G1qyWXT16SLmFBXbC2GA3LCFioaPmACKrKWfyBBtocrVDZkWKMLVYGrV5zQBqytg1ZnhDvF5uEL",
  "key29": "5cAgwLoBvg9saMZ9DWJJktnHocUEFd4evSLhgzT7rdHX6FGwyddU4jS3B8zTG3Cyhn21pR28dXh5Eie6u8WoFAcK",
  "key30": "5HLHCCG5Cu8cNc8KLvmHuFkgs7Qn3FQr7G7TcZsBtRXy3wgyfquRwvCkdmC8M4XB1FA5mcaqox2zavPpL9tfDVbW",
  "key31": "2uiFuWbyF8CS6bMSS8tQzCooDV9m28rbz3ApJFagaAALxhdWR5jpH1cEWHSvJMVLnvU85YBWFDKkX6y6FfAebmcc",
  "key32": "2reLPEc8wYZTvubbLcn2KoMqo1ERUekCwbTEpjjkgbBoUnQHhqfjicBnGxA1cpjcfAVouP373Qq53XKqNGddPpLm",
  "key33": "5ui4sFqJShUMvniXCpyU6XFn6mJYkjGmXJvLw7cy8jBUcYY79UcPEc3GF2bDsEnN9Qn1y1epRMsBHanAG3T9bWRx",
  "key34": "25yATj7nV2A919zGuFNc66N3Wy3FTmQYM9RzPhrapD18jBG9thmFZRNVLc8hWLdtcyL75eLD9UZRtLo2hXXFBeGz",
  "key35": "B3nt4Wgzx2xTaPvv8aTB8jjVxns6jmoPUmNBEGFHdkGFiZ1iKum41scp7EHT3HgpMMUNAc9rB8hWQRiLRNmUYN4",
  "key36": "2Da315GgXKkhtsQLdjRPNoUSVsd6pKiXVvxFARM6TeBMLYjQGSn39SovdctDJVyc5SoMM6esjDnnHskHF3K4yLz8",
  "key37": "5cYU16D5BRdiN1JFpf6hSZqYNZQfgXSDtXMgsCvgRk2M1QVTf3vmwQVg4RVi3kqACcNB7XZGqPTCaiSvPToi777",
  "key38": "46mQXLUNX2FrqGC46ELxosMxnmEZjmYFTKcL9a4p4QSzADvoeibgSJGn4j2M39qrHGJKPrkWvzVU2CpxvHqd8Trn"
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
