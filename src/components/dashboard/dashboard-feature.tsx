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
    "CQqxrFF4UosRrbhMgrytnWivd8kyYJ2dsWmVGUvWjyZ7AzsYdyWrGMSQf7EkTnADF8nM72amuwMhHdYVQBRMmP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdJmLGWt7az6s8CH9gcGqLzRw78MM4dpoDEZnsKkeZoG9Y8e5FxwNAtLTZhdr17UhEPJLXx4xyCFVTVMyp5EoD",
  "key1": "4DfWDDrA8nNptNR39wPB42r9bETo8u3BzR63o9aS3Rcf332C5gTaRw53ChbR74YthnYtsYsndNnLrrwscqEUeGSR",
  "key2": "5VLBee7usrFavLXNY32pHu1ESuYCjT5aVjY2Z32NPyvJ3mE6dwV3hFgxYgwgj4qg5q2cVfpEnszudnZ1o69fQCuu",
  "key3": "2oC9o9urptPqd1v19WUm6nA1384wDNTLnAXqDUq5pNbw98p6DAQK6vpt1ocSFHjWp44x8Si547F8nqMqWhNVf6pp",
  "key4": "5kcKQopiiRoikehHaHcdiAx8TV1eCv6XNFYMvWVkh2hHaR2Nz3VrXN1XctaX7SKCtMc1EXzx6KrhtPb1hdNtsGPP",
  "key5": "tBgBUbrmQsQdDHnx9AY4so6EKzJ9CyGsFFuibrHudxg8nPhhjbP81Z3NKaGLMhU8nk1N8wdA2cWQ6AqvSwcK35h",
  "key6": "MqxCNv8c4Uag279WHGk6SwmYprFFowrUc6dq6y8kEVKbi1xN8d3gRta7agmaFaU98x3smVjUEsMHwVYYPno9usn",
  "key7": "XExCoGHCe9UKeyB3WdbsZLWHjEcUKv9YjdTdJ3VLBdX1kZN2jqMTBMJ1TBEX7nrSEdPXfxvjb8s4cW2vKM7s8kW",
  "key8": "5h6RkhadNG1m3RWAq3KWLLmFRvN7gKNLaLskEdgt2GaSnZvDycuX7KKrUP9gamKutG5ALwyJEVMhqWLH5BHD743Q",
  "key9": "54EX9HMuWoZiz9dxSdp1PMb1VSfC36xqaqswsEkUJh4cFVX1ECybJxrnuGDpETagEAA4SyGxoiwCvbNzhe7qV4N1",
  "key10": "5Hpk4CvPe95tSvdhjG3MXCovoNSQB8rEGtSejfdzczZUAQCvCusYQyGkH9UPVCe2EN5wr6cgLy4mjjLT93EpCmQ3",
  "key11": "4xDNJYbK4nSwGgtoiRgVaGLdyNryPJYjVWZCDFE3nLxe1JVrjLLsaqWdeWQKdtN5WhCBGFJVysjT92AGx6XGJAg2",
  "key12": "5GEQxznx6HyxRAHgtU7wEXF1o1sQWBqTfc5N8aQ2xFCam7CXJoPCD8UhAfRhbJuwLZi7K9iVn5v5vfb68YCNufad",
  "key13": "2nzV9aLRiNLVV8qDFV6XuckJVkgEWR9ufJf8SVbeCbPrzbPYdzQmpGWEcLVVFkRH375P5SFv6Q1Ywe9exqxE7tXV",
  "key14": "2XkFPiaTmpnHncJ3MF7w61uzW9CzChHhBhr5rxz81crumFsDj6wpMjGzJ5e5XaVBsSiwGs1h21CBmQu8pDUNA58U",
  "key15": "wYdydoE7AS6m89cBygyF7AbGc9rTYN6dFqRRbxsWkvWWFqvWy6ZJbt4BCKZHBUdjBNycgtnd9AHHvSes8S8fFyn",
  "key16": "zJ6xhqD9p5j4hy7GANNVxWVXwMbva26pAMUhyVEXnEzxP8CzQxbYw268YEQscbPdwMiuZxmqKkjhJC23wxSnF1g",
  "key17": "5F4JQAkqFzjYc9hG56sgQZr4HYjbcyMCMRvBcwucCCRzVw2RbzmLFAPnD8FYee7eQLGJjKFZ6xpBJvACQZGNbdfv",
  "key18": "5T9UTsMQMGftagPbZKChPZwAN5aXtxS7Qkb1mJ8q4xFUFh5F8XoiXoyEinf5puJCRPeRvc4tiUj4v6T83nDnUigb",
  "key19": "4W9fgtptke2KMPpQsVPTViTTpq75Nhp6UsJMp6NqwkXDjC8n2h8b2JhtSkCusGh4CeEfcETK4Yu8L9dmpUAVegyc",
  "key20": "5XNs9Zv69wSeux1bnir8ZExLBJyUtePPop5fSxSQmap3PGC9rVUztLiCmBgg1EYfPuBEdVkKmxZdCW6NAH8i7sLP",
  "key21": "55KhyeSXCyWMzgroGiGjseHGSEaVTEpvytqjnbFKqA9oSoXfDE7SF4mrHtEs7WTAvHoWH5YtwoWRv4g1LurYAfgu",
  "key22": "4RJ4upoW264pry8zHP7gYGogrqnes6o8hZTmw5Eg63c4jFuyRGH98LQapvYknGHds2Cnn3Cj9X5MEDENqbcWLQyo",
  "key23": "4r3T52m92Rbd64WtbrDcj1zveQqtr6X2r1sFSkpxmmX27GW2Kf477bzJ8QZZNZFv8KgLYkvUxsx7SLZ946kVdETK",
  "key24": "3KQsGg5YqRMa75Bo3rjjy4BaURc6VXwMMs6UV8Yn5Nu1dr3huWTbXn6uztVoRvcxtU1hHCmeMv95VL2RZNb7f6Rc",
  "key25": "5NDjASzG8L5V2Xe7KjvvhAccqN4owCsxEz7Lv9ZNx9r9AdfDswiAxFKLsxmPSJ8EFgQvrnAc4c1eMLGJHoDpu41a",
  "key26": "wqPZ2BiwiJc4a8ZnZYa2xK3CapVzoDk1QQFcjzjbDr5ZhfwpBpBChc2d5GQLk2fgYZ9HobEVANtbcHGDFL8rMBX",
  "key27": "5fvn5owKnayg5HTRL6Bp8XG7Bg6HCxiGQgYMnGMzoZ5sNcMzmf2NWV8KYaQ1MAqvcayVp5hG7F3Rp4MeM12tVHBb",
  "key28": "vDJqbVcFDJpvSLyodSmf9XX3UBgmSWT6YNeqaohWm55HbJmxWaH3iDTa37S4YqRXHLCEddX4sdC44avPH6ikiUD",
  "key29": "UeuxtnB52giBdMhJWHVye22Jtk9CiumwYmRaLFsi86aUVWDQiYPuzsx3K6P34XiMK32euVHehxRTh3eFShwkyt9",
  "key30": "3BThWbyyob7pPdfMomoUG5yzqUFb92dt7HQ7zUA1H4hEn57GLL1UFtB9WKvhfVHG2186rnwyHRWKbSxRqroE7swv",
  "key31": "4CPVYMLc1KnK7jCfCi1ojtmvTyCXfXixgQhbunkYZeH3Kcv75P5MwUJ8LvftWJaiYAbbQ1LgHTNhK6rZYW9vdG6c",
  "key32": "3me15WBC2NiHpWSUF26QBZeH2N7ZdWzDoUk5qcUewdJward9uGahz2B9EN2FKTGVSTrEDRWtCjPSbBtePCkLSVZ8",
  "key33": "A6ZbQEJEQDpDqoeD3HQcqkzjCCzMJ1xTLpR1Fwvbmp5jx1sj4spoGCLVZFVXLavYQAJAooybNuMM9iv1Xc6RrCE",
  "key34": "bqYqAufjpKYZBj79MkCsLUUwjvyH2TDCg7aVSJmBCcAzrWUGfh6oDqbaAbC3fxdGPcJL2VMv8tjBubgybM7H8SV",
  "key35": "3aXcrghxVizQwrL3ueSG8h149PHKKhddBtaTajk62eZiA1wQHmRatCqsRQPZHJRkcJ5kN4ERQDGXsWkQd8Q1n7LU",
  "key36": "4RpUZhETsQxzsy8VRdZ2AGMmMYi8yi7omfiRDVNWZjV7KcwT93iAowY3QqA8C11YgKkTyzMtJBsaEa2Qui8qw1tY",
  "key37": "4NVFrFR3SWgNkKEjN2WAM7txWYeF18PtjbqEL1KX3WLtFVjbjq6kNHbYZ9LtTyZfRUyB1myuMRaqgb6wrn9LMcYP",
  "key38": "47rokChjFc8KN9vm4CFZZQdd8KYhQRWbpv4UZzBoJ8BUmKKdDMEo4YPtfzbH7Vg12tHN5wziYFNahmWtuvNuknr",
  "key39": "3EJs4PYU8Xx6tk9ehJFnerCokv8oA1cBXrMJco3prqZo3z2GM3egPQPDoqKQsuDwZ9eFyoSLNAkfuABcVn2ttacq",
  "key40": "5Lm5wLeiZjTBWcjkWhm143WFnwSbLzDmwhnimrRpoqt1CSxVnPu9TDkhC4AvKx6okLzDiKUVYfmyTmfntaXFK3MR",
  "key41": "2x81XGz4241WVBAL2Tay8ANcJoCVKNyKu16iucwCrkiD7Fr7KfncfSkJywz5DNqf8ii8usbzRGtTpHaPJ1gXwvdN",
  "key42": "5mJseywHFBMkzv9WznLv1X6sy8nrwwuJdaW2WxWajKrhinSgYH2A2Nraxf5J44f9PD8oRGk8M8DMNhiXzUb3Nfgk",
  "key43": "2xczEDoyt65Y2mmsPKMbBNWaUMtYJNLC39wcJTjMa3nr3ncG17AiGuKa2PH3obETzqyvhdRn5zbEMWAPX2vaWKXr",
  "key44": "3yTgWj4op55uLPMhTWgui14xRwsSNNPJs6qQJZ2qiX5fRUFq2F4pFqtdhAxrkXBQ12sm7YGamxxJ2L3GhHmm8iMp"
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
