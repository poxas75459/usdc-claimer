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
    "3pR1KCFGyCGGo6gF63VkGmE4MRyFj9Tovvu5WMjnbm3M2JQaB5Ts8zjejBFv2WJ1R3JwvNTRnrLJC4toaPYRCEFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kQzsKYizeqvNWt5mpmin9dhtcMep1DdjY8JhejkrHz7985tTDbptRv2w6RSTEstWoWBZUHpoRCB8r7BkuRi9oeo",
  "key1": "3uTeooEWDrC5UjoR4mBPUYCGwe42ENLuPiYJirksYaycBEF6J6Fb9F5bKgaRBnhBPvbMhoi81vJ1BqnEVjLjEw1Y",
  "key2": "39WytGnARDRDWpY5vSG5Zngzcx3NzmED3Ppku2d27QfzNhYKe8yQjM18HQeYNnr3ymeTZMwhoo34FvqCEkUkrw2P",
  "key3": "4i1sRwvVeiEGQ1aUGtDsh2N5FpsGW8VU5XZ3vvfUq8sqNUmBFHHVjFfzvG2svyvjsPbyR327B5RSdfr2LFRBPs8u",
  "key4": "4RhpJzrC6Lg2fuXsa1sKk3ckep6GTmVw4UKcADTmJhmrWda79h8gAXzSpM6xQZCVHoS89HuFDsVLWXF5p5ZZQ6ds",
  "key5": "3LkWsWYCRmPMz8VQWSnw1VY8JTKEx6c7Au5FhWfsdV71JKv66MTdaGxdk2GjJP9nfsvhsaroHJhUKtYURsrTK9LU",
  "key6": "4pt5p2gRdF2EPnsFGq1RTFCCuzKj93xG9QbZrLLWNh3HzP3pLvKgqR9B491c7XgogeU2nUX7Y6EeHNLqrYzwn51P",
  "key7": "484jwnQi7xjzz2vEg2mBdSXNHaS7fqNw6fnCNgWqLAoP4VRyYHfDuuXGbnttU2Vp1a2z9JoFTrhMBp57zo921bVy",
  "key8": "44t2vumQLcMXcJ21Y31Ha6khT2tF3DX1Js8xFrYdKJCK34k5Np9rnhy6nRGUNpKKiZR4upJXGifH6A2xFQwFEH8Y",
  "key9": "3z3rbYZG4RnZKwUe4Yh7FAv38HQ9gn7PERM1dUHbmFyT4ZuzRm2KjNfqtNMPHkcKcUsmA7rzundVJebJ4oFotX2k",
  "key10": "duN22Xc1E1PpuxyUqvDt2suqtZmw4PqjXhXEuw7ozmJjosMr7dMDnuUuPemymJyEqQVTdnzie784uGDqFKKrrCJ",
  "key11": "21KBSxwwU3Ky7MYv4uzbBHGPtgYnZzd5KNP5WbjM5NZ1XXXpbk7jLbZoUnzejLbq74CDgPNi2HE8ZV7EsPz9t1x3",
  "key12": "2oLt4w9spLTx83K2xS6ZupaGz76VgG2WvJThMqiBdrtTcqyEMpfWWqKZ6zww6JfkL513iXMC7rVEiAAor7QYtyRr",
  "key13": "5YeVDHTB2DJ7J4ZZ1bSEWGGXdhCgwh6Se5XwEAMtrExmPtFp8Q3kRaw858xTGbSprXCsNEEEcfQBZraeZ1vtjkj4",
  "key14": "5MVBmFKyifmHWKnoBMdBmC7SrpfhkgNAcZJMuGkX2q9ej8akR7WALDTDzkz3irQ97koXTBVSg5MV8MWLLZkk676P",
  "key15": "2iKC2HVV5HXSpJqQ33fSDB24BWAhU6vkDcLhWX5tSsgcDgpNdCN4MTXrfyeZjeyaWBqirFqcg58Xe3cwMbEoWEXi",
  "key16": "5ph2NAjp3hdcNFHCMTw9NsNfdbTsuPRXyRC3UmqqkC6jZDMDZLPsQun29VatrSnoF8tdJQSNEUC1WvZZMrbazA8M",
  "key17": "25gLvdVdRG21NydigwmegfjXCdQBHfVJU21AEEz3Kyg2Ky5XFHPAGxBZA9U9UZTAW6ShGVUmgfmfPeDqPEr4so5S",
  "key18": "5xnA5We5SvcNEFyLxsK6uu7V1C5LeLn29Ub5DGtpfK5HVo7g3QzwAQcyhZzdCzb3du9zn22CAYhveMSaoY8Mw9MK",
  "key19": "Xv2J2ywMmT8wY6yqPuZTNdJx3EurDSKMQRbnjVFkbu3o9X5cNu67Q5Bu1KGTTa1k3xMrFKMLg3TEHzgc5JoaJC9",
  "key20": "5caLxhhYiux97YCTTQutrskdL4Q8i2Pd5vFAhAVMmGAjvLupiJPMKAdY6uGfA75RPuLyZAAqsPoeZivxYK8bpd7b",
  "key21": "3j26qYv8V2GhhBQ7XGwxmrVRPep6K15UcKyT3yv1UjqC6mChmgC48Hjhees11jkTADeWVnZRqpZpMoy4ExT6iKAe",
  "key22": "aayugRm5bfcAJvA9hCcoQnT7Q7DEafXM9977n79yvWrfKTbb1TbKt7gFrDwZQAGksXPfxWcD1ZWZZBj114AQF7k",
  "key23": "35WR551iaCNVEsKgaohq1cSHmfSAWYgdgazdKD8G1knv9Ai5nPdrhQFxqR4fkrEU3AMS4RvRR9KYCAiXiwxHupTk",
  "key24": "4jQEXpSBMkYQ57ucAkajsV723a3NVqjEcsM5ohemzKyL3Ku8dEYyMWVnfWMeZSkJpRa6q4iaqoTm5z146bZJcsA6",
  "key25": "8zbXFmCZ99a792LGM1DG2pyx6X743uvLqcu8Hw3kvrPjsRzRR2SR8196xYnCQ186Xy1pNcrcjDyNsjZTvqkcpDo",
  "key26": "5UBCh6YYXrqxGACdxNRNUXCU2q1WGcVc16cjZvqhBZyVCKQMDdTAUbDWABSRBaFyWQ8vd9bG1p79bH2ZWjCzG1Pw",
  "key27": "5ACqbQxZA2hE6TBBrg5MrHuzBiS7bBzRjH7omoX8fN2msxNhPWrHnEh4uSDKXFjiW8jxsBCEoPwhux8G9RuohG6V",
  "key28": "4mRzgR79FoxfjyZUMrdZBep7VxiTMqex9EwCK1RG4w748NcpvW8G3qDwSxzUJpT7ACRDdTFcRJCN2PobKzYvdMhW",
  "key29": "1MjUwE6tquLAW4pZRqvGrxeBjTHnYsnmWbSpH93FaYUiqqF8hqZUpJ8rWvTJjiCrHscTNXTFjLcRsE4yiHsTAWN",
  "key30": "6Mft2cF37Xh4qYSrRXJgvdfQAaX5bewaa7TeVh8NpAcfEdzTambhVYiCiiPC6gDZwnUDzhJ7hFn7hL91jU7LMzY",
  "key31": "5ymB3hcNXBdJFRqmJU9zrpMPeDPn6c17QNN6B3MwvdPGBGq1NHHyToYpVtoNbpHf2knqxtfSCLn5MxLaA4u4QtkZ",
  "key32": "4HyrrUTiCP8NHFrLXi1d1KPS55Z1GLSNkKQ4KAWF7BbjAwLsook1tcM4QvGSFuWRPdx5MqZHPiose8SjwvJPmKvC",
  "key33": "W6HXm2LdvzfY6UwhNvF8xriCZQgbaSMwwcJcZiKJ2ub2yyWjnr7WjcsEfxm3Ln47WAx11Y41SfXJQGv1donK6zr",
  "key34": "Wh4iRak5GoGiXp8hwMWFdRzgkN4nQaupNYiiGekX7ySvneGxb34Ek5FUhHcTuqbNSMavFg8QUKQKYDCjqQuzzZe",
  "key35": "5LsRCSTugKL8fFLUfwHz9mofNMb2iqCjYGfWzLun4ohrtmhRhqTB5GrsVKJkRiV8y2udqkWompnWokQHEBH8wA4d",
  "key36": "Q4pxLh958rSG946B9EeAkVAbG58ao4Ki1kc4bXEG9S9qkeTnSRdMXnyPo8gjePqNnHBjBTvcW4wEV7cA5RUm6yY",
  "key37": "5BqA5ABVa54aZkhvBjPqMKVDobb65ofyuLDZ7EEWLxVzvD3bdsS8Z2TeRbi7avZCKVdL523XoYEXdnX1GVyiws26",
  "key38": "2RYzzbdbQzgfDE2fMEfyvtJtoCBHgBTFWUbQvG3FAkbeEz4vpAeM4kbG9fA5kb8aUZjndWApLigTBiaxeCeX9aYa"
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
