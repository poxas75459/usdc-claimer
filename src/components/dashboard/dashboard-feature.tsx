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
    "TF4teyV9syrCZEgt1FR6mPXWcfMidGhWFejGj3KKeCJxecZnD2geRRBdMTJqNgJvwrBxxEnYb6w5sJ9NBiKFbqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9UowiKrC9oxiabQChhFDNFXwWBWy1jaGW424AHoiL5kipyKvbknoFBPg3HpLZPepVEHM7DBLyW6GqKSe9DE1Z2",
  "key1": "4WE5mA149Tdoo3c6AJ3pruUUqbtx6ZDmVTgKYoWdDsu8rpL4mMHA8RHnC7TEMHXjz4VbMihhWp1GiFfP4btZjVwo",
  "key2": "4nNvKoZpK9C7271V57ZUPaz7x1uCmXe4USvv8ccbXAqEGYaQ6Ur9Nnc4aRv8aegPQSie9e2RkD8ws4icBPAezWm8",
  "key3": "5MBKLAUMPgk7Bt2tzqsCpUM47cdDzBtqyrHJ95Tc8rV4kHBWVg3tW8rEkm7JSUb9SkW4RAZsTqnsrUhHY698BqUw",
  "key4": "385qUN32TGnBktMEHtDeLbXu1vvTaYvSQTZZtUtGZsmGE9oYHkP2Wcws2hLzZPyr7zsGtEcBFcT2ojXaddmtugZ1",
  "key5": "5j88sNRBcBT2UNHM7vPHSAHx8GMhsubbqHHRJEz1uCSqNwHfkkKrGgo9THszwg9Ede7iTCxe7CTGjq8sV4tJCqz1",
  "key6": "4kyaCXJDV41vURE3BwMw2Bts8iKMuryDNqfz82GbGivdvm1qiGH26GNZjhoKpYFYKkYgTrzDa7nH3H9UWQ4oupZz",
  "key7": "2fBSregxLeSb6p59z76fsgrRFGDwAsPtzVDyjzdWn8XDuKsWR2kaNTroDoANzzdaSpiN8aFKEo5M1BtgcEtKPsYq",
  "key8": "3fBPHBwihEej221airbqj8xxyBnNdWvAAHhpE9qqaFyK7whKT7iod7LjtW4Z3iBawh8TU7w6ktxJ9YF4n4CBZQbh",
  "key9": "5hosbdR6whxf2azUeQM4xGNYitLLc4KoX5bzghuXXbSaFQYLJX98aHgamdnjh7kPRVauin4PcmxtMedJZiT6mgTM",
  "key10": "28uhqAukZkEXBNhBCeRyi8uhtCQU1epT2hU7fbzAUhr9ewbzX5BFxMLG7AmtumMRmdBGdeLTFDZZWW1U6jm27Yd8",
  "key11": "2GNgpVXZAcVvh1MNHMCrPj2MQsAm47h1BJCneLNYN2tsnyWXK59GUig8qppNSg85L1Dcc65z3yzYr4jEKKTUTM39",
  "key12": "3vEePX3UhjnhXWVKVTsKeerXU1B5HwqqV8WT4EbTDNu5ghNNuUfWavbJQ94os3RSVo8PJqALM8gkUHoVYkT1BUmB",
  "key13": "3cfpvAYzrgzuvFkNnYc7T3MAFR75LH5ZmgPwtXEwYcwtZLUzdjFBDjMpJmUj5M6mXQTj95NsmU7Th2RushA3eB2n",
  "key14": "2hbLMbXSeMV3ZgmmhvEEvNN9HuiYFAf7qVJ8wtNHyWgDuANMSTL8W3YzWENYu67Rx9mhbRL5DpboGag1REMAvw8t",
  "key15": "5H1tSrruKPNmsE83Yrcr7vvH6PwVYzZUqKxbaphEes1Ruy7bkFvCmtvN6pHLNdgw7B3WNUhMq2MdxVaH7745YPE9",
  "key16": "NWcWJML8t2aHcc5wqJ7pVbXzH9F3vhhvMkQ4VrJnHbeHy3XyxqugJ2bb1Cm9Y7UYhZZXbnE2Sj7BYd8mdJuHGTg",
  "key17": "2aVxBVLVogHeaNiSUv1Xgw4qLEBNsAbw86PK6F1huZ7cPg2WqpBkZC1FzkfkJgVE2GJiH6uiJ3sidoVetWbXtjJG",
  "key18": "462QRFUVF9WXbxjVFQ2MnBh5crz9fYP84oNKvEbzy2R8yojT7uP6F35KSnG63PVtdWPWn8ojauu1f1rQFxNrr4us",
  "key19": "3DjGFw6cZd8WdhSB9jyWP96fRneNBwNq8wSGeTFXzwyP4bTKLUZACNn4Kk8VPN1JTREgsqrSdCMGS3Sa8zqNe261",
  "key20": "2EghZZ9LanjDJqnZdCErkTeQdsfPk5du45kc7PVbeAP7STjQvGpFDLnNygYLQfUjnwGGXXC4iw2Jc3dtDYm9KwDc",
  "key21": "2tQNtk7C3EJpQGpfvPN2gvvwBNGLHj4D3Ei7s39d1BPRJghtoJXgXTczjCLxiCeQzMDCyh92ikwhRuQcwcj1ihVy",
  "key22": "5zTNQYjqEgg98Vxqvs1YHYy9Uzs1RxBx5jrXKUaD8Ug6BGkon6sCmNUxtXgw8UTp66rPgKRz11r1NAZYDxJgH1HL",
  "key23": "281bu7KazoKHVpC19TBRQAcmedzSWeJPzaehRS9PmyuXFQLsxdReoCAqDeG6eA1gPSFDPrzEpUMQUPqAzxVeJE8E",
  "key24": "3kPmhXTSaWSsTV5o48TBhF2qxx4gaBVHFajNoyLNJZNzEcVR6NVDLpWaDj56VXv6B4BkS9p9rQYRXgXycigbJrH2",
  "key25": "4FcVWvjeYLTQg85kZmNjhJdzQHTM3w16REEQ6usWximhqc6QSjR7pPB1mbXsip1JaDGTDdxFfDuVYcDJ6MqHxPVu",
  "key26": "3TzfqBwTxFSmtjKAJ8yDHe4rm6v6FQMokUcY9MRHBJhpeDbznkJTVq1jNdQRb1BaT2MKhfRwtKxKSkzKNACEgMKy",
  "key27": "4CHJ4e7aXyf9pPKaYL1jKmCbicRmQUSg5FUJrc7AMStjYQhbAjDuDCaHVx2414TzY7UJf6ZXoz1TNBwZ3fsGKc5p",
  "key28": "mL3yHJpAMe9HaBSNjopcDahYcy6j9uHqsUTxG5MQwnEFvGdNWdtS58k5rHF4dsBCtTrrxdrchTexXYi66tYe5vJ",
  "key29": "2RJMTcwpqLi2kKAaDGwHpgvjpsx6UHUM6RJ2zPF7V5ooKogsK5diBLj57B7LCFPvyUdkPHNTsqiFaQR93CVhE3AT",
  "key30": "3VNP94TvRxXeuTbij7PJsZJQA7nUYS8gmp44eBFX4uTyiYepfDRwW64xVU5JWFtUra2PBxtmzZweriUkYhqeUw6p",
  "key31": "HneULvuC6JSTozWiLtHakZaSKKe51YS44SWRK69u4xk32HgkMTLLti27LAx2UB3xb8vdtH4WR4T3XvwPCugZVhA",
  "key32": "3rhzA2EMf9Uw66HSFDrCazpAeN3mz2xZJewnubeYgViAwfRQyuhkR4Gn8kJQr8Z8Z3BtTKzEpHZ2nawxHB4a8BnE",
  "key33": "3vVCJaZ4P3tQikMfvdfxtRndnMxQkfEm8forQMJrStSVhR2XpvSnyKHc4bSaF6UQ1nYZDuLFB595rwVgumc6pwcS",
  "key34": "4M1sda9Z9FseLLftGtKpCkdbtbAnu16aXkmHgmcSNpZdpoDHm1b8x4fPzMt1GV4QL2RskiakaJx3QZjUjUFGqFuc",
  "key35": "21VyVQhg2yYMnipS5jWAW5KgkCKqdSnGf6yxBL9yTqNacPqaYbudLQexfbcv5fvvhSp6FBuhnysatfV7qsgqTNwC",
  "key36": "2hUaRLruiQ3ib8nw6Z1ayPBHdJNisb5mjAm756btTcjgX95obrLG93j291PTc9Lb5H8VneZb1eKaxgZ1Pc45s3ZJ",
  "key37": "3DCAdKaGzgdYPz2oMwxEQWKywTnd7SNb43cRtKFH943c8or1kvNMMkR1d2whzD4Q5HtmYadRp5u8mDZQpAzDKFA6",
  "key38": "5v9MWkkQFPi9K5c1eELrvqxrAVMCLEaocaTx71rFAys1xvfFSPQpMRNddhSu8T3cfUo4hDDReUYG1JZziNazgZF8",
  "key39": "4PfnaVKeqw8nMVysw1C2UEc2qXjiBRG1hwRtExn2CJ3x4gBx6E11X5QTUnqceAquvWwszRoQ1nFtSeWc4rdZRSPc",
  "key40": "3367qFCyFDLsHEfdnKRPedzGxHc475dXnCj1RbSqtDCfY9bEmkKFBvKn6iXoiPbtcbroZbL1quFjbJj1pfZ6GMC2",
  "key41": "WwqwWVXSuu71cBsh9fFra4NoAAGu65M9FWg46s6oXRNz14A6e79Sg4FSSt6HPfD4hEoVAHo3xsUosDh9xvfdoCN",
  "key42": "3KAWQryn4ZSKtZj3QZBQiiYGdNSFNStxxiAc3agw5GFq1KaQuvqZ9MZMfw4vrDMgGjKGXCTEoy79As6sWbNvrf8t",
  "key43": "5VTyqvkUAHYjMhQet8HAdYxq3bbTmzUV1QmZMZAH1t9UNFiUBdY5EYKV66YpCGB8Pw6hob6fQqLn5Qka6ewDesyR",
  "key44": "5e4FMQDQCjf3MG472FgAEXbEmP4gD6XgfmZTR194BnbKA89n9mEZMPiZR8qc4iqNc57uh5SWhbVm2RV3LUT9ybJF",
  "key45": "4qjWwTBGKpUBh91fWkoE8orQVc3zfJVoM6vAq6gnXXUchMdCXRfkLkhRt8R7Y96VvkgdzMY5QFzJiq8GmYb5DBMV",
  "key46": "4npqGhbt62vXTdus54XBKmC7TEzRiSWcKvRfBHiZqa6Fjojoc4EZjGQYboGejUvET4FkD2w8McmgumtP1ibAT12R"
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
