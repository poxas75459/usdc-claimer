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
    "52LbVcGvGizDrWTHbFXr8CCCij7j5Hb7tSn7rPMUHoJypiB9JcZBoGkxw1VJKc9gj8LVtkGgufBuUQTS74WuSr4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22fT1nN5GheWsUsuXyNAiM2JWqG89Y8gjVMREA3D9Vyxf4UyUxYm9URtC5gv3Nc6QQ2v8oCcxxnNu4s5Mf1fy6k7",
  "key1": "3nnXsAjgay6r76daQ6gQmS2drGNF1C7iRaEp9JvXJC13M5nJkhYQsgFnWRJYkSY3p66gJX9UXpUHfxqZ9AuoNAJp",
  "key2": "U3xTT4HTpqiN1rkt3gWLRHAb7EZdDoThyWdFpiAiTohR1QACLoe15fEgQbvRwi8ewYfxYArobzri41gDSNqUujb",
  "key3": "2Q8QMKG3ny94eNnqLgqmUn2X442iwbyD382HyypMBN4djd5dKJix86CcPpok71nE8G3Kn3BqyaJpN2b8rPijuqrF",
  "key4": "5HJyidUMn8erkbMxE4MZWzT6ZaBMKrLsabcYLVwNASUDtuPAbrFsGKMfEdQxhmu1ZxzLWyCvi78yvWFYzDubc4MV",
  "key5": "415dWTaNdW7yKgtthVWw88JwCbje6Xc4m2suW8cWDQXMyGZN1cniH88TQ3Fs6ymQVzEHeY5m9AAkGDQLuUM7nX7z",
  "key6": "5tnUXUz5dYnbfkA7TmGGyA8JtKy1J8kqYYxSo5jDXuMydfygDzq5CZX5XVmE6cWsHDkJ86SS1PLR7CLEHA2yk2zW",
  "key7": "AiZJvEzFqCLqVzYBWxjZ1RfgaZ1eSmrxAmZqG8tmDM5LyNoa6q7koKWb9DBSmcx6BA1MADbQTaBb1uQWJnAzKTG",
  "key8": "4BXD1cj83aZ5zkQpMpK1LKD8FxdR5Qgzn1AgkPxdHTtEyGiGHHoWEsi2oQbRqGnLpAfEDvZhTR4M6Q2nEkyVXiNj",
  "key9": "4ZYHngQ4jSZ3vQJ1jZRakHpcZbdP21XgewhrnP4BwvEnLaxN3V65zsHYiRj2T6L31qREUTa6NPo7X95koNVYYCxW",
  "key10": "2REsURaPGV8UKbaJNFwVDp2z5rYb3jQzWC3sp6LPPqvUkGU9ePoDSboDDtNpdZRCwH2W7Dd1QkCHL75SBR1NMaX9",
  "key11": "WR6fyfHcuo6GXJc4b26fjjwzuhD9s4UMrPmdwgvYFkfzd3UWRpuDSZTigxYGuS3uCbZx7zLNzxDASozzAtP8vhj",
  "key12": "ZhfxV5aDgiqf6QJF3NeP4cTQABd11CQNbs4JUcp4Xhy2i8q8KpC1Uz83Dp9LbiUoMDHT1qC56bxMiGJBg1ch2Et",
  "key13": "qCepp82dGcdFyuqF6SYKZFu5SFdpuCfxbVqLmqQsJ4YseqsaLwMCWrm38ePridscNkQtyPUCTuN1VEUqoUujak7",
  "key14": "4HTSVu4Ek7N925ngBv72gSEttKFfGw8HHe88ELqewECQD7QKJ1jNfjSAT6ZWeKNgHyHTiiGgriRERxaBRsknirB",
  "key15": "3Bekd9oNtvrQL8xfwn1GQJySeYg96H25r6MxG9xe85sVVPuHx5yYpJCDYjbRdM3diEoVLGPvhdz7a1tAjhoEL9tb",
  "key16": "Wno7S2R1rvud3h5qZRmisjSnjUoG2sERGk1obX4duMbY7ghDq3hR1GUdrc9DC4v4YzhMXCxYk6tK3Qpaufz8juE",
  "key17": "5MQ1c7HXjKiFuB1kghn419oavhBXZ926iNm232VaU7eyJ9VLxh3pTRczrWzNMcyDvH1MQZ6NZHeaUBgnUVBjWJX",
  "key18": "5697g9GGEwv9NsxN1rnCroRg2N9SgmxmrdNWQJ8E6p7orwBtnCqCFRDFdernpo2VQe3q5toCY4hyBWmCyAXzQoxB",
  "key19": "2FMtJnLYhnRQzxYQ8uNrPFz9TjScNkwtu7aWLESvE6vdCUSo6dvEpG5Vbr97CMCWmmbjPu7cZwdfEmRJ92sBpkkB",
  "key20": "2U9JUTujDXfphWPd8weLXgaiNcqmjmM44FmZFKNrdiFMPXSfovEBDLg1xXTducPUoSzFHsbNp5rjqVU93zMAxFW8",
  "key21": "4Ngzr7XDCeSaCTMwCSQ1C3Hj9q3YeY9jbNxMq3yjj8qPoupcD98VtsnZrSQEGSmH5GzhqGBm5ku2GgKCJ6dNvpuL",
  "key22": "61bvfo4auAkaE7ymmRsApQy1spc5uD24pEuv3qfhQ4BgP4FSqbFd94tPqA8ZT8FPyW3qgugmYyPeKTG22ybcNy2u",
  "key23": "272hFe3fuGxsMUmmyGw8Pt4RGbu6sRXp1bm8vXm5qs11AeRLEFEvxQX5VcGVL2HvhjHW22T1cB83TuhHdkcJPVdD",
  "key24": "3vxov3fyyfNBwtHwCi97vvy14eofcMVC6foxkh1SPxXfCtnrTCNpMg4Ht2wmzVHauuA2D3rhxnuddSqZE2wfsUB7",
  "key25": "65BxfYo1imRSWXfZxiYepNsioMSzoj8qpnJnZEQKEqnB8AfskbC3uCnzet7Nn4RHj9EHq5QojBs44soVHvGz32od",
  "key26": "2iACjjtNTXhAeM5JNQCTvisXYLLzKxQEm6K9bSAYrFfEqLLXpEN4jKheYDKQetH2NhyY1jFB6iAHAGBcbzcoRDk7",
  "key27": "3p9M1DG427YfnkL8q2CMRA7GRtmT3YHZouRzccPB77yQpqFiFxwPUKVhz7RiXMuqaJN1Qrs2jFDQMgW1egZqQsK",
  "key28": "3cuMPLJr3rLFbhaAvxedsiz2cgD7DSmUQGNXXShuEVBXZAvxiPsTLdyFV66sCRYsgfA7VnZnqoYVkkadbmSdqrB2",
  "key29": "pi4sns4Mb5gHYfvdrDAmMfsyqpY6vhcxiTV15PXKsxdUQHh3ciWtVVgzK5KZDi3Mxi4HPL9aSnbqRDTMW62zHxo",
  "key30": "4rE1ayVWgKdS61D3im2W9xYevUMQoh1piDN6cwvWP1ETpdJUUwneb9mRQhYwpFW83NdQc33fjxjHgcS4j7tmMUXF",
  "key31": "8tTcatVhq5AsBFi489WARgCzNTpEmfSxhjXBTynY3oQrEUY2WHhSF5foZmwsLutiow7CSLLnSrhAjhrFvuUeZo8",
  "key32": "5pSZXQTZyM5M3rSErsCRkKrHfWB3EiahJmEtxZuWwJkpfQc36G7aYFWX25si7jFTgruy4VFNNyT6at6buH7dxNgc",
  "key33": "56QQgAxpYd7UPo83QGY8pWBPRe4u4FTcCuZTi1UuvdwvZwL1AYfGTDmm87ZSoe4nkeEdF5M5beXR5TpDVWZxZHgu",
  "key34": "4z26SZZeoBFzzRPQ9pitkZGEnfi9NEbv26ABaSWvAEQKiAqovMwgWjNuHVz8SKd1trib8mihYjpRam6YiYKLNmmc",
  "key35": "3Pv8AsLQpZXAAtwVZWAYu1dsFfgnD7nuiJqX5eZZZPuvv3tm78NCWtrGZGbSMWxU9yJdLeoStPxZGTJyrgnBzJmM",
  "key36": "oV5xeCv23AmJ1dNwAgiYbp4hamHWtDduZf4yFh1wzKhA2SkU6YnfbcnwJQNVKgQgBphZovLQMHjHTkuPgnscYm8",
  "key37": "3H9r98nAvNadcQdUiCYEjBXB6QqysrvFMkAHb5MSq5b7fSB1urhSoMnKUW1e6Mrt5vpGtx5ZNW5ZkrtraAGHpYbq",
  "key38": "3C3PU8h6z2Dqg7yzfNXPTRaUrE9rg6ELxY6YSVgok1FdrrgRWVy9RFAUZsT25xspPStdPxrLrtQ6TCdFd5PPoAVQ",
  "key39": "3D1zoGRHSc2WFFHcN5LYscJrtePfyTCb5FP4G4qWkKah1dYwxg6ytneEPozjMacppM34Pq7cs1NTxHDpaBeB9EEa",
  "key40": "VLYjMGuZXzdA3NBRt97tu6KsmdbFbHR45F2EKefp99njuAtigkHwvb8oF3gp4esnLDNvAnJDwfMJrajLBmgtMKh",
  "key41": "3wu7MpyQtpv8P3xxkHGgJ2YECsNvMBdJi4tnvDs4RL929dH3P3S7T1Fva5rwhWbz2SKytaLx2TZuahbejXkfZ8oG",
  "key42": "5HxE6aWayt14whVN8MQmKEVZ8oFiGphcwLhqMsgCxbMAnxBLteGYiGjuq2Kp6oonr7GtPL73D18M6ANqLm324xt8",
  "key43": "1dXMXg8wyFHb3MzaL4qHnABzYuZf1miVk8MVWCjaiEEwwYxav4jz8x1QXnGUm88Ff1WUdj7nV8koDqtDRZx7ba",
  "key44": "5B3XmUk8T2hVGJxgtihsPucoXrS89NAWoEvNDfiEwuuWEgREPnSjdGUmBq8DeRLzsqe6okoRm3V725jR2pqAURMm"
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
