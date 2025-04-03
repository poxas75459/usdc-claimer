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
    "2ooU33e2PUgjRYqN5N7Wc3CSVKWByfrPc26f26Rvm4dPvMECm6GAF9fVrsXT4LsFcbbYbybK8dudqiN3nRanERnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22onG8QRcXuqqqo5dT25z4Y1j8dLsGZEXFLkx4Q8Cheb6BpSNaQPJfwBto2GbV9BazdYVVSXGtY27vPDK6ZXP39F",
  "key1": "5BCTPjny4hY4aiwv99LCoq3EMg6yXex7rr2mQ5wvKhWDDgERM5dY5qkqU3wx1GqA6CNmcuQQ9JYSyvuP8Z1U1Ayh",
  "key2": "mBqAbtQe6aYXunVkS7FfxfjtHQVxeDwpXB1Xt8jCBFrEo1SdoiXumgb9bNzH29P9jG5RCicR23fnyR1Sx5K5D73",
  "key3": "3ixhh6LHbu9tpAPFswJdxGufRZ9nnQFe2tEjscYYsJTUHykjutNiegF1ZaeQgUUMdt7u7gY2LM8zuU3q8Wr5WesY",
  "key4": "5d3pWBMP3fN1UtoUDsQWArZ8NSooUtJ9RfLLtXnZ46YCuGytbF6fSZqtPcSUKp5wdV1EpdiqVZGDTF1kCZruXJHn",
  "key5": "5ySLSm1GTaZoLoznYpFP76hSXLD8dZMjds8jH1ZWCkB9BcbYtoKqkaDDMPWhokEUgJjhcn9M5XVk9RM6Q2Dq7oEo",
  "key6": "3Xf1sJeaCsBfmz7n7jcVMtdCZ7BKWd94KGyJRVC6qooa2u4wzo3SSQnV7wnU7bSPCwmdLvFQWUWM74hMjKWsiyNt",
  "key7": "3WHSAjN1vpjfMjsqqaQuzmDagqd5NWRrUyfQJTX4r38ER6sW65iaFYpQ3y4Gj7pHULQtnqFhkEb7mmMe6GQz7rGm",
  "key8": "2XgUbfPKgswMghmonAZnT49bBvsUUAo64x8nJ5ZjrjgF6utiJR3LtB9bbB59Eovtj8j1HHMVBBzLTbk7fULB7s8t",
  "key9": "4cXfWGxVvPfc3qb9uTxbU6bfvmQDxVi8BdsUE15ZZtNLumKGviV5LU2WDLdftoxDmGcEusPG68nRdZX9TUbW4Jc4",
  "key10": "4Y3bC9pnzQNH9buMCeYEAKTGJMQ9eEhsUvqi7Xg2wndyP5oWPD2m7Mcn1PSUM9Ti8UR3xaaAZwnEwwj2R9Yi7gnd",
  "key11": "29nmLubmFxoJYCq48cBbLyLpQQ3Q7Bb6e7VFMbppKMMvA49NTXEHtDH1o9vYrBVPTpedJgDXy2hnF8GvNaxsu3dJ",
  "key12": "63hi1LCNAWTwGUqEL1s9c5oEgq2onDwEmVkzoPi3nanrkXvReyWVAiSTBsaPP7mL6BsjT9jMGG2XwfHGxznpwAgG",
  "key13": "3czJrYGzjdVMeKFdhF5XjTcoRAs38dNnHnbQb3QQoaGM4qftk17YZfNdgD3V9PRXjBS7o8WYwDR9aKnGwdqdjJjT",
  "key14": "4SLeeN7xPqvn5PSbdLMo5hZTRcYHJUUM2fbde7bAyTUd9HE34VQriQm9p7Bka232NYNE6ZJU9mhy21BZNmCQFwtV",
  "key15": "2rtyhRKH7czdZwSCcnmAStetreh8AsmWwG8xv1ZYvHWxcurSjefQNBAeqPiMNBWof3wbXkjHRa1oLVhPXdtaMMo9",
  "key16": "55y6zxCfrGkBAWMCoYtfmf4AyyRCKUmaAKnvKCKjgZoxZmxDiSgeSGFVn7j25yVC8Cuego8Qef3E2j3oGzKH49xs",
  "key17": "xTQWDbsTZjuPgdEzXoLN75J76hqKgko84HRW657hzPojvuKENg9LPfXZ1N5QxqrFngLgiHy9aupgRpiqkkQ1gq8",
  "key18": "2CcQyCqgcsbuGEPpnRirTaXQCowHCMUu2rzRoXsjjeYERuWmTEy4ssi5U8NcLZUWx35jwtogSrdahLRF6V2NTkAf",
  "key19": "3tKZFTT2GsLUJ3GwHDcztGjN5eXvUQTLbichApPWtGEH7ipH6BRgmF6Xmbrr94wQUqjwtkZZ5nkUdtPB9tisRNm5",
  "key20": "3EPQLkeXLsD5xgZ3fvD3grGuFS3TtkgBQPC4oPgFCsx2fxRUFHwqMqFykXH74u1txw4GCDU2eb4jyCdF4HN7vqo3",
  "key21": "2umrPQLTnZQ9CNCubiNruR26GKM7mZjFeLPzZqQKC3Pwo55ggvBqK9tK7QAYkNGtaQKc8RPcYySVpEVrAhZqZHME",
  "key22": "gkrMxzifXMLpN3fLg7eM4MYKSifuTBvVQiCarUtvekz9Dafip6M5JXdi2onQ4CkRUuxSUnb2cP2k8NMoDYvCMXR",
  "key23": "4eLpQjvbfFwzLw1yFyM7t7kLQUmF7UpAHXBEXSJpzWvh9azSGSxuc1tjBmi4sSSNh1pvUhgw4iits9pEb1WVQRPZ",
  "key24": "3CmT5ga9Rehve3hMh2RLoTxkdyXmb64nSvWWN1bu2zfMikrFe9kNQ1nqZKmXkARWdaw84Jmba9MvDKUBXhobFstb",
  "key25": "5My4vjUvuXYfBKTz3yBeNbNSUnr1hwnyHKSwnJdaXDFrrduCySkK62hMWhLydr7Zc1SYKGYLcwokzygUw2Xi8QoC",
  "key26": "2xh4r1F1RurqELs6dZGhsZTYNy66QPqkFFaESutavfk1aZUQM38m7SkWHRPundw71SYaykReNnvko9SpdpxP4LwV",
  "key27": "2ez8Dkk3TPp7NmgbAKjRiChA7VGGkWVmWTFEoxbxKxeZ5bvPQrBgoL3MKQE7z8KaqKYbnzbNuRswzxeNbwXhT78M",
  "key28": "4RyECwiHjJcVALkh7podS8P44CRUiByHHb51fBGAAJxYrnrutf9DF6QsztYbYF2DDTtgmhx4mE1aKvYnUmqPhYc3",
  "key29": "32tTddYYDJGMvE4TPNooZXs5j8JNVa4pdAqA62xcuBjQ2d1P1sZ6RE7JHrkUcByJzmE1dvrKaCRWipj4nuDQCnut",
  "key30": "4WhEwQa2q6qqVvwEaqG2tfZU9pvaKRegs4UJQBPieKPy4rhzgUSqYjZ1J2na3nVgUj2sUV8h2qJ3WJ1srSfRR7w6",
  "key31": "5Xba6LPKZy9pBiVjiBqFx3Wmo8ab159roqC4a1bHZpp5p1YNaJAE6VrRBfBSXrkfsqWBy4bz9WddHL65mfnuFudA",
  "key32": "41GM9uizwQ3qK15zxvUYtA57WiuYdSy471PYcThVXkXnq1HVrkwEs93pMhtZZ13Uprqery3UZC6hsdMwhq55cTmX",
  "key33": "4u5ECziSgsgkokNExHcSKBSir2V7FXCuZ5NAVxoYHkPeymaGDKLXaLM5APF8L5tPCtUfeBk5wwpPzJtJYCmEUgGB",
  "key34": "5JuvsVNE5XALv4zNcXHCKzH8hiAaha9arz3yCvyrMLHcYHEMZihF5SJJ5yok8T6GMeFrdBVZzt23pH2oUrgy6dYh",
  "key35": "5im1sxvjWBn2c5yU23T12ssZPhrSYNwug5NbNffggxYLahbtnkpsfWBakPiHNLujG9EhEGYgduWHDbHJuxFmvLPV",
  "key36": "2EoaTxHFkC38UzKSU2KqEPwuTWb4fFyYQrnUBAQdx6DiN8fCz6iDdmm1GX66wRgbUKznznMiC3TxywAhZvttQviR",
  "key37": "3a8gfXrsuKFnWwgXFX23Ff4teN9ut3QCdPuu21aLhVhYS5P5m8SQMD5Cpf87tjyGJh2wcTCnQTrzRSBA2bpdthtt",
  "key38": "4gP5J4FHQyZKGkEZVN4QZ5YT7Cj1dwN8ujLgAj9ktThxVtaPSdJmW3ZgZvA5J1fHUXFUEppuC9k4tCozs5BtT1aE",
  "key39": "4PbvMgvLq4QdjeyoZT5taZut3RjVHgkrXWpvZYtgx7ddTNSCZhEfyvpiAtxB3GiaEVnMZpEZmYouaX3634LAb4qS",
  "key40": "3L3hNByMBXpWCHrAUypQSvNEbpX7HpVs1bBCiJm7TVPpqY9c7VRzVXR6N8SDS6jGBG2gVshAShhJggTp1p4i55Cj",
  "key41": "4JeoJVfPis6mF92bWFwduHGsGR2LhrU2pKBb45kWNvqf3GERt2Rtehodxgo6AVRFN7B8gXLWCEoswwP51FU6VUi8",
  "key42": "2hvSKuLh3QMWGUw63LzGjxojabYHi4sXTES8qmvxhYGNAq8GWTKRrg69tT9iARBzHspJ3wJ5v3QJVzmtTmHw4sVy",
  "key43": "3muBWhs9VkGf3DHuvuhzpqoXCS57gbobujezfaDh679mWZzqB67ZYFD3J6ooBUikp3MdoXS3gtYrU9i5YvV83fWk",
  "key44": "2gwTJgWohsY42JPcCyfScfTzR53PofLKU9cCEPN4fVqWHDJb1xgyAQBzCsUkq5kxvDxqtxnBMCShigYurELH3dcL",
  "key45": "48VHUwdhfzTFHu4utfJ93tQtTamHoPyPYRiLGPwbeymJf67ZuLDCFLjJaoVkhMX16hxXVc3aRbHWY4vKzSKsCg6i",
  "key46": "2P5gN8RGnbtCepssqX62NCJ9xCK5MNhkk58sE8VveQnKRNCqY3hnHoZyBKStrANFCVk1ZuBuGmZ6DF5Uhk7pNT9P",
  "key47": "3mJfLBd9sSsGL1BrVhfovi7tqHW5dd58aSHqksM9rsutQKErwkC73dXYXr8DL343tj9eaMDNhRZWFPRCuBkuU981",
  "key48": "21WPoQCf2uddPUY79LP67KJeYX42YvoLShvkoWfHzYCx72ck7GsLZkpMwGHWmvvPKzb6aGm8GtTw2aw2smMMyc2q",
  "key49": "2k4ssRc7XoT4jV2P12P3eATAE6eLvGwWaZxZ6d5CcZcGZeDWZ5kvJtBywzBJSmiZF61kZy5jg1aKRbFYARnDtsSw"
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
