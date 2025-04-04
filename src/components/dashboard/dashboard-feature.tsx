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
    "4Qkmq8XBFbsRhLwh8ZeCDAAt5sUkBp2B3Du5D1HRPFhgCAoajTtUHQhVwMTKoz4NqKK1n8r47JJEFgxZpw7b7crP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hx78uKk67ffmDFLZPB8tFW67CMnzXb4CyenpzQYDaaKDchXxte7CopddEXCF4Y1rEkvxiG6duLtodASphvUSrZ8",
  "key1": "2tBEPV9kMPHP2YGChuZtZLC3jcphQbGAvHsChnXU9yrcLiQK59ATQ6UZ4ugY2rwWeRbSdCmRvCTSn2BuGvvLtcAk",
  "key2": "4ZibCwF6ASP7G8TP1f5FuMtWE4DfBVMksrFSF2vNrm5iCu62XbmvRsorZewH2mxnijSnDiKMH3x8eHmzVLPsJn6E",
  "key3": "4CvdhqQXcbTf9s1QiE7w1xT1PByAhQduysKrDekZmjAmDX9Xmf34JBXtXJAXpDXdduTVyvEMfkoeGUrCw1gCt1dq",
  "key4": "33NMh38Svix4W8vtTk4hBAUMcnqhAVMknncRY1iXBGgDeiManbZYdnTUsZCgQCkNKCn68qAqJAJjuWzLsLsMvJ4D",
  "key5": "5cWLFExmnz5VTanP9Kxc4DUhwAMPmEiRX3fm5P45Dh6UrNKLQcfstg9sTXPVXHhTckZvFcEno7hezYxWj29pUNxN",
  "key6": "2d3FkQ1eBT4DYv5NXMszFvHA4tJWa5EeFrVboEB3G5TYu5Q24J9K3BrdeVxBpS8G7GA7aJULjF3hrvQP3dD33tgA",
  "key7": "5ymXCTxHGkkFZubVWbrpsUp2GU9KHD5foJyFmhLM2Pzzu3zxEXqA59tpiCJVedpWHcqc3wdPRgb8dzs8ysuaETCz",
  "key8": "5tWzmeAhgkS3yYTQjWbfwDTwNHPs1ND3fPDsvm3jWRejppH5M63k38kqbbXsQ3Yn13wBoo7GUA3mUBydnzWCiEY9",
  "key9": "RELvVPy6mLQMRxectjPfDZ6AweRndiimKFnpk54hKrBid1os9G2YCnFT6S4a2eAXkRWZwNxLRwjkfBMzqBEKzaU",
  "key10": "25ymwhqEgmnmTkNkfwEcRRmb5NKo1KSMhCgmvFZ8ENA27fCmRYV5Nv73riVs8x8KFYFyJKizSuhEVWCVd7gELAYw",
  "key11": "2SbCU6R9jgQXExV4iAbxt16mEu4VuJMjMoxpw9tVjiUfJ677NmUUEWSErPKTCyGm9q6gr3GLopEX2R1YbpDr7Qho",
  "key12": "5d1Z5YeQaJLZiXp3L2WYgFF3BPZHBoE4F6HYJeTffkVgpugH3jYdPSSPEPgcX9iiFho1kyuc7kRyTNNMMGdYysoY",
  "key13": "58ZY36tcZEE2SURki1KwTtzgrFsGef8d6PWiQQNjpsi6iKF9xKKbix5xna28QMdmLKYSKsohLVEoyHY4bts5Hk11",
  "key14": "4hZKQq1TR1hRTd4jR1hwZt5Xbt8iEBHK7TFCh5T13kskKRkSUPFG7KeFXd5fGPV9zVrov6mX6pJhWo76Tcd2aaNm",
  "key15": "3Juvdrs784ZS8vGsfYjyqkCmNzPgpirTiSG51FzkhBF4AA7GdtFYqGiZVzLZx6ZEQTwwuVwW6FjGwvnpyScL1Py1",
  "key16": "5U3mRye7saYYNacgQBADK1Gq3btVC24RCnCcCA8DDrhsmqayH4BXtyY9PECsaKPkdsWvxe1BBuP5adR5FRKWWKJ8",
  "key17": "9aqmYJWGDuXUxNuWLvR8XALc96YT6PDciYsh7fKwo7tuRcTM2EgbByNRdbUnUt9yZTbioGstP9qxC8H8t3983Te",
  "key18": "3HaqmEU2M94Qw1irbodWzKRYsnHzN2ZZwa4Afthwddg2vZjUgzpm2AKcdVDyK2qqpZ1Yur9sWZN64qaqAWJBNtS2",
  "key19": "KFkvtJYWsbr1PmFUiGe6Ety9fDSYztnnF5ccYQ7CZAibNHdYDgZrcApfnVkrvYJqY2tAWLGNsdFZxUWFjCkE5Qp",
  "key20": "2LfpNLAPHzxKBkdGeD7mgKLkkYHGASbVwGBtReyfY5V3TNTJtoJ6nkTQ3KoyrocngF6aSh654LFJPhiY5ngp42yA",
  "key21": "4cURuKkoFFTYqecEe9BTKgkYJVgog2Yq7raga4ukakL9C6nNTFeiuCkuvvkpwz6WyVDdjDL1fxpSyLcqGh9UFnHV",
  "key22": "24Jyt8w2i5kt4FN1sJs7pSWEjEzxMtor1aMwEBJHM6foKNBTxQbvyqUrsVcwGsqc4MLp7wFesSnhDxaJgxJL5Sby",
  "key23": "hChpCsHwqrhGWvWaCwTy8qmTkVoY3z3V3ATHc1HMUx2i2MEu6gRuZYsLDGcm6vohLvsJ4nF3Gc6yeRoAnKwWq8r",
  "key24": "4iK9r14vugUdq7VfPZRggYu9QjuZDax6ApuGRXZNxpVC3118HcFbUWMkiGAWmrrADAijfuzKoAfqDWSXuSzoyy7R",
  "key25": "45Fv2gKdhPiKhgu4RVtyjSUd8KSUB3K6jzRUSuxn81Ku5vdkp6aHx9iEoYs6hVBM5jhHGsimChC9t5kH1F6w7ync",
  "key26": "3iSc4TVZxU8WTZvnjf7C8cWzKMYWHsiwUCTxXuV88hnVweeUzughSz1twssNP5iVsYYbY8zJsmrV58KBo1Qw8KDe",
  "key27": "44fVHz5DymuGvD2eJ6nQuk4tdJ61WyuNtUcXHDTJnVsEsrmn77qo3L7BacvupaEpKFfJMcgfv7mQrmfBkjxS71Fz",
  "key28": "3yvnw6wGbq8gj3SFTU2QEDoJJrMtGNkT7Q22WfcwaCU3ZSFbQctK5zDb16Ft1AdP8R3wCPYScLkEPToz2BDqXtNe",
  "key29": "Axb5B46UoG7pruYtdV82MsodxhaSyWXhXLLWVjNViux5Q81eo2EWCqpBpK5n3nvEiP37Q4CH8q3BD52Wz1vyoCj",
  "key30": "2KhB67iP5D8AZNHGDdS8kjiH3kU2PMV858H56fuHQt2LUwXXp62qT6esMDUbRMmqFCnseyxgimnViHCK5FPhhubR",
  "key31": "5rrib2hVikqtkiYNPRwJUBctmeYeMv6hYVzFv7FFZDH2EKDy65xcdF4zPUs8PEh8Wfu4EBMaYUGfC4zyKBbyMp5u",
  "key32": "5GnH4nJUVYAyYSejsf6arFHnBP32Scqtf5EVtkRGYh1uhvptB2CUUwbyqq1M6qWTawCj214aD31rJ5K13A5Z52SC",
  "key33": "v8dmQnfBMTodRzgxGmLcSvALg27Lcv7NSkWg8fAyB7JTpn5RapauitxZxiRFzts9oq7w4h229dW6afcKqQLNJYd",
  "key34": "j2YwFbfu9FYmGYCGguh6cTG3SvZTLKcrAdScyZaNmNND95PCgisU7p5f29dW3HWCorNR4zrB4rMnUjpLDbzVHnx",
  "key35": "3cRV3JPMqNYP6NcuYP5nWx9crDqN7dYxcBCCHSYgBrXiW7WNPHJqVApHBKPYVaat4Jw78FBMsqPXaoaTtFSiZ3wH",
  "key36": "4ridwqk3PPfgejaGacdbAxXFKKEU2J7TDTc9RMq4bT6Dtg2FEKqxxj8bHqJb5W6QyNCrXThcoVoHT1KCFivgzgiS",
  "key37": "3ggTBxexnwZxwuGk57q86Nt5muP3Eu4SuZGrkFb7WyXLZfLEagCcGtT92mm8Sn9GnXJS5zMzej17u1K3SzEpgxQe",
  "key38": "2QrAH7AnYWwmSyM9zGEuF1MAdmVJv9PRaBujt2eejKnjAysGvvrD7srL8Rkh97vQbm1CyruaEA3M5iJZU3SxUrP5",
  "key39": "2dWe9NcCWfpuVwxbn1yCQ8mCStQRcb2C8jKPo8VL7f6UW43Uoep7DciJXigNvmj436P6SwR3LB1ovTCRzkmyrdng",
  "key40": "2h4id7TuiadhDk85idaDpPn6gQLNwZZMRLJP3vbNrsZD88wPDPbUrTRWXtVv7yaQimpjcM6HchsUiCkgNf6X3UQz",
  "key41": "njuFbk5sCqv2qfGKMni8tm2ZvguV3zgJ5j5np7m8zMSTyKveJYTiKDQZBobqvKS8Gwe5gqv5p3BWKszMRLpFa1Y",
  "key42": "5BHSV4jPMfq4XAAWgHmnHMHbDwaYcUwgTKtwhxv1jmHC1KAkZ1PNH49XUCokS2VwMu8XaBtQqXpMAHitTyrforuj"
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
