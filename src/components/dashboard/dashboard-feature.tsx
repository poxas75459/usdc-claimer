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
    "3sTs7gBkv8hj84P13ezVQauAmEDu1pHDv3wowp67UmMtNXerQrxPoWyasGVAM3S3a4TXhPRmr21T17KhynGYJD18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GQZ5Qps8PhvWsqYcwWY9VvzZT39fZS8axN4rWzDptyrQfQ7bZZAibGZdX9xLHJJg8x1LjGFynDDB4BnVs69HBLq",
  "key1": "5XGS1VxRZ9kufgQ33qUrbyzdDki6X4EkrC4q2bBwkEUN2cDDrZs16ujYfepDkMkAkJy6tF5hUw4Ydicu59vjqPfp",
  "key2": "3RS9QdT6Ks1ZDyytUhtEhfKztUqryAK3JZAC8oeoxt7zsfcZS9F4p7rsSTo4QrsRPg6wcGQsFtqqqBTujv4b5k9K",
  "key3": "3sqkppJgcD9iM3wQQ6gRHdrovojY3Xt3AxSBbRxZKQNjdGPu7qw4abztYfpaLEzaKs9pRf955QfjEWdMEPgWot1F",
  "key4": "iG8bDi8KHtCew9VmNgSdLvdemQd1NFDfsrKXkKTv91cWsUW94XB77rnpv6hAGS4cG6Wh3416vkWHhkENyQuDVqJ",
  "key5": "3sBSuDnAHHGqYLyK1tiNUoy4we6tAqS1hv8CEHU9zvDmprNTMib5RNotMuj79bS4gEZrdriCYhWhD8mEBYsETHUt",
  "key6": "CUZEqfuUNeia42hn7RZy2agLd6S8zVPhPVMGPQdPKUGh7ZoncQffPiD4LKMURMjASo3ezTY4S8uekRPpeWiiYBS",
  "key7": "sFvp9EgKGDYYKw93eGd9zUsCUBUe7T5qy5EWgCKF7QiGQwaKNNttbRLTrQ2hvcv6t83WUxQePzXxBJQCFLqcXh3",
  "key8": "53fRjw9mtBW4aXJj7J8aV9gxieamijkmFFoMaJkYvPX6AWg9Cy7nwfv1TiqbwPhHULCVm5k5EpkHWGMUTLVhjKy4",
  "key9": "5jQwy4zqPNJNu4M2ZcofyZ2m6TqwCJn86b3gqrpbBXvuS245EQSp4DcCG9skeUzquDS4iA3FxyPnPBBWPPtfosSJ",
  "key10": "5J3VhDTYDBng4JnVWnvJMPCitShssNEMmUwTEg6XkXJkZDrF3Ka7vr1XSj5xw23dBqG6FkYFSKsjHqCvTWgy7Vd5",
  "key11": "5xUmxq64Ldeqj6dVqdiTzoxJJemBsCZBR2BkfXABr1eHd38JZABi9wL5J66vRtMpAi4eXdh8R13zaohUBPsDzCCy",
  "key12": "BjjhAnLq5fYcKuscVeatTsmaQSoh94bXY6oBxev8rgUcweSbHGSfszhMeVrhn2SFhVtcXR8QgUTAtqHNDK7DCP8",
  "key13": "3a5iiTcK8uByF8w5iCFg4RpGn8xSHVpeMbZbnuDKQF9bJQuqA3qYdfQaSXQswEYCnWVoiME622WfwqcVf6vp77y3",
  "key14": "6256e8VKoQDZLPL8Y1HLjBaya4D1RtPjvfb3jrF4kUB1shpMbz59h1wjNsHyN5Kj9NAZr1h9gkaysRH1ojVR9uDK",
  "key15": "4icPiFsvt6MSDdBATWTtRCpJEPmEytLEyYoAP9VmJsstCgpPfx1eM7rPZXcRypiNmzeqeQTpmP9ky9UrYKkmaqgp",
  "key16": "5qB85RtEWFKk1qTw3SfX4FnF1SR2eKu51Qmcb8RekvaYRXcBtwpUL11cLdYVZa5LA4JBw77LezbD4oS3DHVNFUpL",
  "key17": "3CqejMvtk42RJhzvCLU9e3KcQKQfHkb78JjZocF9fiQwJ89JqyYd8LvhUVXNbpteTwnfKUoiqAkBqFPbdRnUXPav",
  "key18": "54gSRboAWhCbxyv6mxEYTJ6VdVnBy59fg2MzTA6uqAzakRKXFS5Z4YQ7zPmGrfgxFRgxUQv9SXn326aVcytVCY9m",
  "key19": "4SJYHPgT9GMVXnRgz1DwaeErcNRbKH2JDGW1rQB9MrEqApdQG8S1mT1jfoMHKzH7FEc54FLTPXwaWNMRoecAjMFy",
  "key20": "52mmTWTiZB37yU77dcYT2g24gtkRThQJ5Jh1gHyqtuDBhV2Fj5LtZXDYAVZRf89tQdWiBwkUQZAPT19TqioKvdMs",
  "key21": "47Z3NZ1WN2SKmVvgffLLBitmcuBvGxiRXyAiQEmmvrHLXCHFGzJFteRoBfnGVnr1KmCJ8CgjaoE2GPYFNmRJnqXt",
  "key22": "3SCQH5wmXvgfeybxXKtzh9oPtPP4i3WsQDRbZ7qa6tKEw9KHMZ87Xxge7nc2V62eJNBpCKzuCBUrX6X5Tj7FiJvK",
  "key23": "4WEEca7F1vqqzxQeaTjtYNTr4oeuURpXnAuqDTGqqnu8vFGrgqKZZHnvCZUkxHS5GhRZdTj5k75ev2oDoyrNY7Cu",
  "key24": "kCsqpGVzsCipy39dHZPQUoy5TSjB3mjRxH4gAF9n16PpuSAgzDL1325Zx959BhYY7WF4grELQ54wafqU2CSD562",
  "key25": "2WxzwtZEqQynD2WMw8mBaLgCGKNLP5cYhqPU9VZk5JyEpB2xYD4VxTvpeqAbNz5Vbp8VXgWTa5mCXX2zfAT97qE5",
  "key26": "4wHrz2A8HU7mjjzEKHGhTDpUDejUmcx4ELUuq4Gw7fDDVo91MdmVGCvDqFbf6zqSFho9m1q7Tc6ntLX6HZZNTHDz",
  "key27": "uHfeD2nXjbdUck9LA8yF2g2JGv12jHxKya7tZh3TWbTFzTM4xiQoAK1jGxzPAoG19SgCrWqriY8SJRwd5gbA8RQ",
  "key28": "4G2Jton7Rejjp74Vmfydb8WXf5ao89XKAgFh5okYvKwKvJZUDYzNJFfinQNGixDtyiRx1iYG2qXADctamEUH1dSB",
  "key29": "4UnwPPGRrQPhzzXbejwqw2wFnx7e4SBXNYUCNgRn5ztCYvPNmBgFx9ftCGuGLnwxBuEn5K4dT9R8kYgt7qLbqteK",
  "key30": "4z7RNmk5pXkEn9rkENgouCUgpq8cfCTrSZRwrXK2AznkmEihxj92UWwdP9Mzf71rhtGt15rPuzwEEx1tyr69ETZF",
  "key31": "4uHQis1zgNLCFsphwReUXm2gqJNooA6uVTDXN7GX3Sk7rtBvyJcokufFyAufKfiWqXtRoiPkysLPPsh59FqyjHdd",
  "key32": "39ZErFZSMuoqBn3RPP3RyEzxQ3Mmc27jYoGNWTAVLkrs8oXBsYcMH8YpCcGRYtCWNARUGmDwNezGLNyQZsGXaDmE",
  "key33": "27Ue6p7Vcg4YY8w1QauJM5sKpHRPorqhNaMjPG1rayt4ruxVm8FKJeb8LkkTFdduqPe9WoFbevVSMgGVRU8QtgvJ",
  "key34": "5EuRZDgTPAXdqUVhhxwf7Wn4g7M6WFyoz4kxgvPqqE5R7zs2nAGSyFxDxYS1vgv6LQKVF9tjkWzM9rVMH8RoC358",
  "key35": "2644BBodftx1J3GF2VYzYUkG8uLcQTgof1dRH3N2jV6jqYRf73iPqCVyEhZoK6Gw1fHGHJfp3vYkiFCcLRQY4eGC",
  "key36": "3Pid4tkRRW63prtvPSwyWJhgmBfA4VQx1ReNKCbYmBwdgUmHCLrtkPQhsb8QHvQixSmpmLBWqt1ujDFnKpBhhEor",
  "key37": "3ma7vh8BFC7QP1GMV1wBFBiUTyw9gLtY8WBPTXhb5VrXfQ3EdypyeaYxPFCj7iFAeDzuLa6TfcYnYSjxSnGUXke2",
  "key38": "5P9q45G5Rjcry2cejTwJTtoHHSu17SsKC3GH62Tvx4oUwrR6kA8ijCGFxdRZYqia6JFN6UgbjUXnjCG13LuRy4QY",
  "key39": "49AJvUXSx8quZqnRyXshGqP2EiqXAuUEYgNbGgm4NZjhigAnEZ82sWjraUrsaShrcsfc1keKnDASu1DiggwJyRYi",
  "key40": "5NYpkBLSkx3fSM8zFAdhJQyCjN6wZjm8Dk4a2ansrQmYMYKmZGERaz1ikXke7k27nTwfACyLCdGcC8w7nCrgoqCo",
  "key41": "sJQDiLs9445Vryjhtxq2nmDNxxCjKiTyHqzRFfvYuu8v7CHPgPKoUWNUBa7MkBHKbVbc34eCnM4RnSEV9YGvcUd"
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
