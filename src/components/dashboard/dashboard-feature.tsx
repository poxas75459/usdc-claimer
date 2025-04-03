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
    "5SocntLFsc2XYCAZWHQstzyjV9sVppZJNUYvDtbmkAuECnMzaKZswgv2tGArPoiJMbaZciis76ktW4C2RXXVntzB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMNwE4f2sGS3vwcKjgi1ckBeMZcaqgV3mmh1HKm57CNEwqwWYygwkT2K39P6BU1w8f7mcgePx7C2Zf6eVKK4Pjf",
  "key1": "59c5TaaqMzoy7bMJ3vg5JM258SdC7CqCrufe9diKrny3x2CiHPySHij39q1RwxcvuzYzkjwKLf66NJqom5rS2HQ1",
  "key2": "2XsC3cz9B21SVWAaZANADRAZUaoi1AbaoVtGmrTEs42zFpBhtc4mdYHRYDrUzYGgATYWd5F5HfhKkpyxovDTa88K",
  "key3": "2XwaaFD7sjHyqC17ubMXsQyScsDPmKoKapwbxuMKCZ2Z87Vo41WxQ3FzoRKCp68FzjLhp5ZCEqRWSe43yZvdt6Ms",
  "key4": "3xZx6a5Yo41SPCGHxgjfcSPmq9d3wYTuwkLt76YNeMhiNnEoSHrvbwzA9wJHoUgCH1zwZmeWnWMP33eYhpBF5F5V",
  "key5": "2W8ru6ZaeUSuGseeYxv7UX82eHRsrymWLRMV7EUs92fKY5gwrmmvEo7unURRPS6SKDezepTPNBBXRkSGGm1XkbYW",
  "key6": "YtKKGKJRrGhhkBK5YsRyYUHVdJYD8voUkhLUWFBYnD1TQouxgT8cKmwGT7BHa1hhyNGMSrFFdys4JLeUHoogSAa",
  "key7": "oY2YZnRNDyZTXbf87nCYATvPMYRU5EaKGy4jWMcMj71nUUsjUnAtcThAupAWBFairBTfzPqUM7JvnkrZGmY4Hq5",
  "key8": "2z1Zroapj1WSDPn9Lsnt17bmyobmgw481HorREqmFyFUWSvpgChsSpC8WmAuwkXp8iV6WeBPKvQD64sYSqRzdVBN",
  "key9": "bXEr4ADS8HJLjVVr53utWVoQYpLGFWDJZ6tYJN29csnthH5Ut9RiFLrKS7x5QTpMuQRyNYbGYFG3sTPQ3Q23ghv",
  "key10": "2LMiWWFeMTJSDob3KZ6gf98jEoEfGok2CFqxAtJcx1da89Y33YLPtrCsxJMYqbLdUprVTPSyKykgvFRTHBttv4hH",
  "key11": "4QmBkJ8iLia6G9tTCR5EP4Xi578q8BtddwJj8deRYkHP556wN8Fg2J8TrrgqtwZm2gJ9DE6GxSMN17bjB3DeZGJL",
  "key12": "4G2sgh72u2GARzxFjmNCF7KzAb5zc4VspGH6Dc523HmK6VLthcPhHXpfj1gBdd7rgUTF8ZaaRvNg57ipKTnNsV6Z",
  "key13": "36Kdw9amjuGurrvt7LgnvhENbzJwHVeHxx117CD5oDPTwHcBBWheDRQ2CNAxTDNgxJGju98u7J9r7UnLxXaLDXnQ",
  "key14": "3C9iZjskzEHLheHniRGCNZ6rxfZSzSpap6EGYhg3Lji3bMxm5hGbzbbXotLMaFbSaGffT2zzud8e2dYBhULi8dZM",
  "key15": "3oE3b9K7GNe6F65wXHyKLs7RazzyTKGKXj4aiobFdRXFCpb1xDFcH3ZgnWgS242PpABQrwHav1Wi4cAgVtuJbXvA",
  "key16": "5mrB411r4ksCP5A3wbhqPprC7GsKNZHP9BMHg2cMd1wnSomwbAfGkW79xkTFPsGF9atuBw8yJonFpRTzerGkpz1S",
  "key17": "2mXzzwhK6MtDsCZFYj7HhtbTYUmF13oDbXBknawZMSwFSFQvLxqCRZ8qPnzzzJEaswb5rkQ7iMqJ2vBs1u6HWFJM",
  "key18": "3d3R5GyDKNW3bEJn9nxJ87QVu9vAV5cQrXQhKEekypMcuk8WvKdEiCywkvwEgYXUSFWbNCT1CWUuGtGnEMwrugcj",
  "key19": "3WGF6S7VomSNKTfBYQbsq4M8s5eBJ8hn5yzj721Ntf7U53JFLcLiZxFaDU96HCFz4AjLqhzbMdtpEuN6byYeYktE",
  "key20": "4cwg6znVFQA6b6yxHaCov8gT38dXSnuMARSB7DaqUkTBKzGsdJqyG5LowmB1XaK7zq2YZbDsKZv5MFgTJU79KfoS",
  "key21": "3GdH9RT7rRJDsjgkq3qa2EFdFLF3MpX5A9QVKTkStF3imBEPrUa16i3sfT2hWEAACgjk3Z5tRVkuQwbfTaUTFxL1",
  "key22": "5Kzn7sCDGks71VVZ4zTjM2o1XW4XgZ72ZNjuQW7QbujSJifzopfwX4P61WoHC8VoJgJF68nzqiTz9TznbcuwAw6n",
  "key23": "59WjByeSBZ9Ccb3BeZQ2WEMhNvvgC88EJvE6sXaLRkKFDFoyGFMLpd7hnnaXGmg7PTEEKPm9V2SEWeaXGUm9LjHV",
  "key24": "7vFePSs3jTN7WFziWTRZiuY6D8iWrmwF3dTg7Usnr6Kg77TNS7WxKom3ZC7FFABRPK2dPFDmCjWAK9LqSUf8Qzd",
  "key25": "5zRXCQGyZRMH8hsv9JRvDcMLPcRVZDe4EZXaaKKd6Kix7AxFmZPYrWQrPAqqSNZBosEstyPbnJQANFURw4nmDg1B"
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
