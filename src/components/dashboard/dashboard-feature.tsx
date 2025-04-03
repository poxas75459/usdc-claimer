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
    "4RVGju4wYAALtf37T88DLBkkMGcnVXNqAWHmgfTHRjUZ9MYq4zKqaMs9ZXgvNSYsz7oT5AWvWTMHuBPQrfQpVkSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cVdhLZZozaamSQYdRgTLBfvGkwcSg7U35GuNTQDS8s1oPaFPRgmkZLgD4zftatawPdwKaEHxPZDPXXfMeoWTvMQ",
  "key1": "3sGgFtA8PkrnhFswihF4PUAn3yzQzGUu8WpoXB9Dp8fj6ReQTv6Lbjunc7NuRH5U9VKZGa71RBtMn7SHT93mrsFR",
  "key2": "3YLbsLDAHbpZKZc5V1XX11hzc7NAyhnRSstv9YXY4c8DDSeB76XGS7BDUqhjBea7n2jX8pF7Aebu39qkqRQw37UE",
  "key3": "43eXhSsv6n6iDR3gj7z321E1hm4fHtwo3n7e9DKptSZiiMspyPt7BfcGrz2Y5iMiC5sthimKPgi7A6xaVGcgGcKx",
  "key4": "3FvTaqhphhguVmGK7p9SpsWKceV58DgR8XGMvUKzUm37Erd7okq6zpniu1XEUuSNMvLZc7VSEApzbMqiQbSiYP8q",
  "key5": "kfSGQXmmNxwab5ZwfymxNGhXxnRQFvWjUz3QT3vJTs15VyWV5FRZMXum47qaEu7aNgPBfuuFjQETV7z2C6vbo92",
  "key6": "J9WgSoszG8ZgPkY7pCB7UW1JgwotNZoPsT8XWLjBEWKMGBhgF8QAo1AwyiJ7o6ETMXRKk5BaHaKekyPCL4wMfjC",
  "key7": "31HRMmff3GYu2ZuJTqmydkeJ6jX7ZDn1a8qmz4GWpi8WRY4MCmiKYVhk7gsFy84P4R43qLA3h6LvMup8AhakwU8b",
  "key8": "5SBDZjZBe5YeWfQ8TfiDcwDH3ebZY7kDZVaKeWHyBgdMMVxojdgD6Y1fPT322povQdpQ151n2ZbpUGTYAtkeEPMz",
  "key9": "54jpKq2AH2R9sbRwScdMVB7ufdxXvV5ByGBAX34h7CBvdtdDEwoh98sso6uZ3jozjxbns2ubfrozahGFYkXta5Md",
  "key10": "AdS8n21E5fUrUAprCpMb2zmuH88c8S2QC3CQjmhPRPoBWHh1xKYjEaGyzmAzy4wvbTbq6Vm9eTVnmXfUyw9LCch",
  "key11": "4fMUUL64bBzp1cdcL5oEKbQ2xsbeJMPEaxdVsahhBuqRgbBRASfAW8epeF992Pj1L8BAsRo6ZPJoU67WZB69Ds5K",
  "key12": "euGs87rJHiorUjFcHi8bHMAT3Qx5todGYbHbxmgKTLoXSLs114F5YpcjxEh5uXqaqT5bqb2i2NS9HwLQ74gGuyX",
  "key13": "3Ac1NHx4EPb82JqDKqcYo7e3HNgTY1JVfDLfyMokEVyinAUB2BvemAAx9MTeW8DTkKuq3o2huq2iQa15MJvfh2GS",
  "key14": "jUsFDyzWDfmESRUweZQ3JFBYipb2U47evLAWZyVny9bVLpc4TG1W69AUg4SGcoZy36YjS5GHJ95RS98qEiC7PQo",
  "key15": "2PWpASLkq9SULqKsqgmrt5gUZ8fNQS1AQaBn5kK2TT8TcgDbB6VFDhNwTchzevhW67LNet6YRMHzvXVWwgvuYZos",
  "key16": "5yBiegGkmDSssaW9nAFmDLYKTL4imstJDMeirwCwwazaqL2B14aXWRXftNKKANAj4ob6b8SKhvQdvJ8b12L3ovhv",
  "key17": "3HdMnYpVPgfgiQxnvSJ9VxcNc2hSrVV51V7vmfYdhV66NBmPrsg82hNWfz7pHwYJ8TD1wc4GgGAeaULJqPc6nspp",
  "key18": "EX52osFVjueRbGoDiuqjE7fp8LPVruyRUjbQQbwk1miqGdVBRfkYwzCT9mFtLPRmqTnbjFxsFPQxynNSMMUkRNb",
  "key19": "63PAPG2v2xvcWZxEHPX5EV9scqaUmpB3yUY71GNWipxrCUS29ZBHE9wUwyrsMu9AnzKxZQWPhnF9P6TDxeuhcJwL",
  "key20": "3S6SCv3XBrFzcuuPuNZsJwWm1qKkBKRHvLbRSjeRJDpBNfCFrsy3ymsrTwuHDcxSXSupqt4Wtbnpq1SB3L8Ty6wv",
  "key21": "31r8mo7WbvM7mNq2z4vRDEg27gGaVDURsDvMaVddkUPobDSYaYoE6X7qJsrnEctjKepb3upnUWYh4zpeJScWU6K3",
  "key22": "2cxUyWVRNfv5hyWsCncCG2oF3nDH5pQFV5BJjKp173mJfEyWASodsrtrMBJvo4978xTFJr7frvxMCspyijGuca4D",
  "key23": "3mRx3Jgsuggr1f5SX5mVB5Rk8BmRV2vE861NKrFukMG9V7sBFH2CWoryF43zg3Swwv6iS964v5SxieSj9t7CZiE3",
  "key24": "4aHgeeUvebMpKVCFM3c4wkPnj1NwoFVpUcpmDuUBBn1GqPBHGn7vDWShrfqanEHTw5ogmxfNDrryErjhQP1G4d9Y",
  "key25": "TJcDniaufCcESnpc5TD8a3ShprJ6gKGqTojFpH1dyL7duPr4jzBNC2ZzE25SSHsFiNtBC5Dyza45Sf9W1wQeGJf",
  "key26": "3evoyLGhmuvEjwM5iDF612Pckt643CGCJ6bEznMxfHQPrF14ectrWGFhVSmwu9thrb7PQQBzFyxhPqB8tNvA3mme",
  "key27": "B2PibmB5WAx4hRm2HvAMDpw1Y3sBzuhVBDy4pEMQ16zCK5ZpjjL31DiqLaE1HDPWNhujCCrETdPir3zQa2i4bRV",
  "key28": "dy2phrwULU97dg5qZL7AHKZ8UkRbWyj6Xr5KPmazdstkGq1V9EXZdB4dbHeacVwN3jJqeiK4FGPA3JwNxb9YSYQ",
  "key29": "65yLpG9Uc4HYyiA5BgXCssadUPZtVoVvSex1Ez9BJfBeSJTL9ComGBMFGB2AzTGeajV1r7WNa1CgQc5JxiHoPvbM",
  "key30": "4un4VfTG1FJVjABSKLKw7m21EQb4fBTTKWQJN8QdgNE9Sm54hRU96DE1utS4p3WwFLfnPvMdJNu8mzkjLwy6XPwp",
  "key31": "3cH8yU7P8oFosqU97hECNbU7jyTRC9DAAyQzZgtKTvEGxLnN8btCVEMUXQAHTAKMCDL2G5ZM577NuUxRapikEqFm",
  "key32": "53dfnfkSmKxoYojy7FZjiE1QuJe9f4hJxCCHzn71uFvhNUj6SkQpL3C1i9RB4QkHSgHm7hZmHHs4JgCkRNNnbxYq",
  "key33": "337QCtQwbYGUnPkKB6zARQCkD7fbNsYHPhwwgb9TLEuNHqmVr3fe9abmYv8NvnLpjTTPYDjHTj2f5EgnV6yr46YN",
  "key34": "3a84vtiSrkZ2E1Krx26ixnfzFZngPD7Ru6c8BfQs1HPmDaeNPcJhWL9ZYD2XnsoaJNLe42Xv7qhzEUQ7FAy7Lxvt",
  "key35": "3zEoBa2swSj3HtgSU6es6CrRB9PCjqKj2q1LjTZ8HPqSdntAyzd4Swv2TLLUCP6jM3o3eTxfp7A4AHFMgWu2cPDR",
  "key36": "AHaSToc261cmYtCX58BpA5J2CHxuStxU1UocdsyjQGemyx9gpKc7rxfg4kzZd5yg2SGAj2F97HSfptWz6Ujz7kY",
  "key37": "Df6EMnh4H3AWgbmom3ow9DsRQ13HfuX3Mt9PtTpFm9wyVTT8FSqfqwKy777YgFimmsk33Sx74QYuTo8w97qRpeE",
  "key38": "5eGXx9kNBG4QHUXXhxz3byd5jFwiNzxeXbYdqAZBvKjyNcTNJhr1KkuCT886kkw5WjmEZmDHJeYYbFZwLvoCmG37",
  "key39": "4k5DjA8RdU82Rc99bgDYH7akLiErXVy36LwZjxRRx316UvtQFd8yQ5ry7RMvvxDCBHPU4jtBbPZjxiEEdtVcyHs9",
  "key40": "Bxvp3GWXs9S4xTeRuBzivdhHuR6QWL9CkTJv65nd5PeQC7VAiRgC3Gd3YTQaD43a2igWkhYQdAcL5R4VyG58crv",
  "key41": "5hnmTUFURixySh67yRzqDyPS7DjFUHrUGcDSi71FFfiT79wfRBsw5kWGo41aStLWq4ow67rvtEDPAh5BdrFDPHx3",
  "key42": "2ZWNUadSJKhCYWC42QaqijLgZ2bKGuZmPd6XoiovvMhAe9MaEL1txwT4AGQ39Mp2FNNBBeCXaBg4q24XFU8Ak3ZY",
  "key43": "md3aPwh73XSR1wDWXrH3JKJExiwDhPGdjhrvQp4Qed2BJUQoXCcVKWBiwpgAvaRgtyCQwvL4zWYNC2gZP6D5xJo",
  "key44": "5bJ3LhBhrRRMVkzDqmSDCdcS1z9MopVZFPnvSqpNBg866S7S6CjrEV7kZP6T2xvHYv6un1X87kbUiodvvv32JSL4",
  "key45": "5U24TzUQ5wWcz7amr5UJvftNyQzDtQFbcfpConuxFKmzdZfsyQGYmDqXM4dT2p968rZHv8KqJUMabdDMcDQx2wbM",
  "key46": "3Ec5jEtyMLuVfkH8ShHwmKp7su8wrTPLHshmfYyzeUWnfKoTHxiCLEgd2cooCewbb95a5pu6gq89PvwcydXJYCsq",
  "key47": "5UsozrMiQqqNnDHZHmc5QSNYFeEsvDgMoJVMNfvjxzdJrbB6fXLpeNtW8AmHWKDtpyFHPaMSd3fKNsJiJAB1zx9D",
  "key48": "54eKYrQUBw4ExvmMZMSWnaPrQVtLYfh6SEgugknL8KvRK1bmcs7iDUUsRSt2VQbC8znR5G8eVjcKR4ayasubShns",
  "key49": "nvjWdEMbKKu8NCvma8jnhjDzNpZLZ4k3PsEP8e7Dk2wib7Tsdz6yC1xqvGF7fQT7nEuHMNRDcbbZ4mBdHy85XvF"
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
