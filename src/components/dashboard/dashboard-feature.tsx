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
    "2jZp48poWWPxKiwWdpguMzqCDHDrhXA8TNGWNYxdeVoD4mkF9mTqHQo8XthFNCWDZW6BEfJhZWA4Vw7CModaVw1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cf14mPapiKPS5A2bdkf9kohie9jsd3vyctt1qjzUwP4hfb14v3LkYsymnWgJmB8HqMPnDZ1edZr9KcqLSazGJTk",
  "key1": "wBLfVwMXu655TgwcsQBqqq9NmRBmJqUSxN9Y57QoWB594icX2mtBfBxZa89LsDzA4Y7g9LYXUqLKMeKMbn4aNwk",
  "key2": "275t9PggXRovxtVQjtENVoU7Mw7CDPCNtiaTJYHH2DqKgdiuaBfMKBD5jbA5VLy3SBXZU1M9xHcZGrzzdYuxbT2V",
  "key3": "5Sh8PbkEvo3PVgYJiPZ83NqRzpehc5wi86zBQgHftD4C4UXQ43hD2kpGfrApDcPZtW5HyW8acpp8o6a7rSsbsyf4",
  "key4": "3BrMNTghHthyANP67wobZQDdhu5FZWpSnZawtLFKgoiete9GbdkmxUCFT1LxpT7sweRKQRm18rkpXzWvbEXzvfZb",
  "key5": "2yxfgVt83DQZSGZsKa5PRyW5ddeKfBcZUwsKHaXgCVUVkUQUinHLAS5F669qtFRWoh5s2XxqJzpLtfrdYS8rDRSV",
  "key6": "5ThGvW4CSN29mHwP2Fow8kgrg3xhJcviXfr9Up57erHFgMqiwGFJKEdPK1nezWQac6j94A37pdeFyj68C3eviu1y",
  "key7": "2rCU5j85r7ChnkLYXNp414UkvH3ny6SZbqv4bw1U6B31qjHoELuNxGUS925GgAkMmn2pmeS44653qcHShLMaH2pE",
  "key8": "3V3F8Nw8dXMCNLbbR2vhUQoL7zDeQZMJxmDtNnEdGGpKdkjGdxN36YbMpJKLDneCGZskFRX1N2ZzkxczYaFk1JEf",
  "key9": "MgBYpiMfbmimSS8qCB1r5LDwPBnBscipoHYNqd2UNMokUNdmfwDUX2vbumwnLANXkFTge4dXwjwe1TTMFqxd6UD",
  "key10": "4nEo2PdfCpG8pU3bZYR2Nd6BsnnQcqQ3Z3y7nBFL6voCRfmsgYhCTALBYxVM4fCGESGCPVpomSupSfyAub3TCgfo",
  "key11": "31qYKGncG2YJzBe5VqQ3mZsoydFonFYqdwFFyQppytM44aPthDcmjrq11VocSvSM1Mb7j7rVAVCEiEEkDbSngjLS",
  "key12": "5S8cdEEXPwqMLHQReqxPKGrphw3U9w7KE5BNi8sGJxrzTqmKsM49bT4qpY1zTqqX8MAoSte3FMmamhC1XuHxukhA",
  "key13": "5tCHYUWBYWCGJxNQYubZWXeSAZ1GLMTvtzDSASTtaovXtZQ7k9EFAEyqJNBqYJZFExNpVWEbccwLRfrZoAXug1eK",
  "key14": "4dcgiCKZQ1JeEygxyRAXTtJ2rS7C7rFTK9tUNjbz6FS5V4Gg9deubQHVoFQjjwvZZFpg998EwtuE46hbccjY6y7S",
  "key15": "3B3aLgSwEUJ4muMaTEcSJUsWf3h9879Yr5fNtsD6u5AhbKeYauqhrBewU8QQR5WLYrNys1izV7crDUYiHxQ7DQVF",
  "key16": "59X2dwf4GMgKdxyWK4Lg1DAuDnxAZc3vRX5dWh99SDVZACYzAWgx1RRgenytzYJLsL5huk1Q16Kr7DqjA884St5z",
  "key17": "5gjAT9DpjfedN64j5p7pL7S2xtKNruKpGJuy29MLB1GtcwHwXN1yYUnY6i3u14BcJuHVeEPcBySpnJCGWy7sy7pN",
  "key18": "3dE6AGgFdsuqpR2gbiF8STkTuMgRKAwqF2PjVtX1Pp7RvbBhWv2SdkoUUwz2DnS6gcBNbURemJpew5UZz8xDpJmw",
  "key19": "WQzHD41Q2tntXRUgdVv1TBjdWsbo6UQHsWXFmfN4xVubw98XYE7d1WRop8vD7borjCs2Bdk48htUSdwccHvz1HN",
  "key20": "zpTouJ1kr6ytjnLDJRNVSc51YUbbzhk8yFn7DwcxMCrUtXzFicxqhNRdUG81DcyhAMPtXxUELeHMQ2r2dVooe5h",
  "key21": "3giRtFPkJPSkVCTq1izfKJS1turWYCTzhnrxgAVUfnmUC5LPstq4RGirizpzpJyY6usBaYR465Th8f3bDG7uMiCq",
  "key22": "3xSLNTdWnLy5dZghTNF2zVGJbH3vYv6ytbW35JJnmMLMYmrPjNKbpnZQYDrqkbJJwuanVFb5vPE92HjFnzz3Szcy",
  "key23": "3ch7uF3Zf8CCMAG7BT1V2rb9JnM78uQvrR5J1r3Eshonzf2UNdJ4pdaAmKspe86dwqXQ3BRbHCoQpyQDY7sxLPgG",
  "key24": "W3Vj34HDP6kxzFtBrf7QwpykKntdoUAFLz36xJh37AR4mGmgfr5q32U99QiuJjgr1gF5jBJDyaVTyrRH3qc45NY",
  "key25": "31CuPwwsyDzeogqbPySpxkL7yiS8vEG5KD4LFirKwCFpH7ppYhukmQBYMq3yF5j9aRePVUWRKirFp9vSgZcWGU3u",
  "key26": "2o8AfVpJXziBvVdDT1dphUFuXJvb3ALQSu5Etg1Q64s3QzPsBXU1TU1By9JrmqaHjpuZe8rzaWnbcY8K5LrWhCq5",
  "key27": "2f59WSpxh11SSfkiyBjFBk7TYcSJL5EAeXcb5jjcrWLeCqwTjgPnM1y14CkfUjhpFk4jsHgsedVyUBFMao2ba7dK",
  "key28": "3PwD5FuGVnXTTKDxFeuWqMATRVPsS7egkNadNVEEd7vKycpegrMUQ72GXd3KBpQTRPHiCBr5nipnGzVzSHXDgSpg",
  "key29": "4AX1vf6q3bLXCwF61iqbvxWeCUfYoen4wvsZBkgAacrFd45VUbpSjQfN3JC8epFVKg9e2z9bBPDtkDtW7WYfjjp3"
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
