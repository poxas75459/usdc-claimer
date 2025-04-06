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
    "5qw61bAgB664UX8b9x23r8Kj4rrgw7BV3AsjEwxWY4F4BpChMwP722MLD9HWoEcrH9C2NjksDUPaZjwUWJSGH6Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LnyKzHDySB8vYPdr73owFreVngAjip8jPTBxnqT51tnBoE2L8FHrdLFJW3gpCRZ8EwegXAY4XUFAiYHkp638w6",
  "key1": "39CQpqdrcWuY4NQ4cx4sVp8ucgXtEhZ6CWtAGHdPiJdapiiAcsDrkrQJkPfFxMJ4xsyZ4ESyvQECXK1fu1UL5ea",
  "key2": "UVshaCHM7u3GkGXe2rEQgTGAzYy1PeeXjSVjHooyR9BspkmqnusdUr8Vtxnhv9M6xv7pJTihcGNzL4peMsTeg7r",
  "key3": "3UYHg7xyU1TB42T7Mib44Tr6dSRXu5JfK5b3W2AU4nUydkvnjXXbu7mBD5UQeMh9L6ZZ4eKtsQR5zc94Lbo1vC3b",
  "key4": "3WccxL8dZsQBygSmNq83dZ8dZxMk1tiskp1iXF4cDHgZZDAdGhAc3CJGDrSjLFsxx5Y49TxsDZxanQdzQEHodLL",
  "key5": "2N4ZtpDtnWZyg7T3GsExToHx1P417NPVCESRicQ9K8bSgKcrcwykZvHoW6m37cVoiGxayJxovzJZbcenHhaKbBos",
  "key6": "48hYxkgiPbjURKhoePMmaxbmL7VUy9RUSvz92B1F7PLPMSs43wwnaeR18LLV97vChGCcj2GYH8VrgEedNR16Pjz4",
  "key7": "5bhXKPkr7KkxRhfu1FtRDfn5UJkzzS93LbwbRsaENNWiKD68u4S2QAZ56VAyhAy1aP8B6kh2WH2j3uva2sd8Mhhy",
  "key8": "5rnxm6ujNioXwvC2JB78cdwa9UpYyCtcPPwZihJgU1V5GqyfuwkUohMsU6oFSCvZ8i31QUS7sACTcDqmpiGjnm1z",
  "key9": "4jT71HGrtke19uSBzvy1LUiMCm2PQzho5QBVjorJa6T6CSNWhftGnfxT8uuYn2nohAGj37eQjBMan2n12SpHNKAU",
  "key10": "3nCK6broTMahofYYfCP4UqiBnHVZMp3jucej4yBuKqoDUpXLb2qDPu5SjVMCqbGndLT1HoKZYxD7Ly4q3n7r2bKn",
  "key11": "5wbqHh392qnPVzhLxdqUhUTfqTwXqkXoJePJbqjvou5sb2N9DDRwbLEmYkaMCpHhzJt3tQca428VMwasad21yXks",
  "key12": "2ieuaF7FFckPxVmgTwrRf4ErHMuUhUD94r9t9tao2uTustxoGfdMP4tHXRdXf75GHvDXvYveQe46fwNzZFjm9vDc",
  "key13": "3JHiRL5FBDEipUXSSYZGpBntUEbvvtiDMoFxLFHMyueggKiFNRJZzmHBQD2UrW9TTzYa7JqLm3eVGVbkfndiwBPG",
  "key14": "xfRBm7n85S22wvgtCETLfQaeFYd7oRGQz84xw1fJRnQnsz2QqHNbAcqgSymuU1Hg6iPh6PWFMzxDaTB9hKeWYDA",
  "key15": "3FW1j7mxQQ1gcHLFNWeRsCxYNYwGVzF8a9MG7Eon4E5RonbBZNPhzwJGzmq6gPhososZhggt65wnkd4mmhkTDuUj",
  "key16": "5ZzycZ1HwNbvKVZSFkn4p1zbSDrbJM7cb1S5JkJGoaSjYqVvZXFNMfHfDHCcgHicgXsWXzXFNggfy2xDWF4nwmux",
  "key17": "3VR3GEqSz43yi1sXfMgTi6LYYH7YuJL7etNAVoCQN3ZxnX2qpJWUj4g4txom1SzVR21pGPSKYBGcE8JCTBZ8Tu4h",
  "key18": "2bDYzgaNauiaGczEi9ME9R9JbjkiuFn1FMNAVwPZMknhDE5VKf6Dkc9WwgERNP7nbnviMuf7uyg1XwbP92nrud88",
  "key19": "5Z1RCnAEsGWxuasYndenzcXygqx3QaFntzfvmGZQpdugHB4HhHVv4B5obkQ2yA3Ez6XYAmgnmzkXhh7GWcsBTHkj",
  "key20": "pSUt39L2Vn28V94DffZhBNVwa9V8X4UGzhsmFesnN7VcoQiX7HuUXDoaBtPek5pM3xqzTMqvR9w2YLwRATxZuT3",
  "key21": "FdZp1Lafi9mC3NKzGgfUTBGznjnSf3sAJjJ1PJKPJGhmAaP46mPSL4kkWvpAJSTjeP5pPPjjXuBguYWGXbobyJR",
  "key22": "4BmaN9X32hepMALnZv5hbMLr1YkKEvQ8xfwpD1GVahVN3LecNFMAuJ5jpEm36Hmt1TRZdAiLwihEUQB29poac1we",
  "key23": "S6QwAE2RkcX4TaFDUXamNu7XCeHnGkZnfsvafNdCvW92haqU2gDkriBbEvnYTSBH2keSpN1tjcRuVvp3f24XK4r",
  "key24": "572oatnakvXe65xMJBeL1kaujwo4pJZLr7bL2uBB6fCYV5QgoS7b82Xa24o92Swd3xRUwC9b6rajBdxKKJuoDwpZ",
  "key25": "3SYjRRNvFhEJxztahYHnriMCHAycxmuGB1DLgtjabKw69JVqekuMCh1xrbTFcq1wMfkBSA62Vnw35MrpbFEkvAR5",
  "key26": "3kBGtXBNNEXaZr6EoTFLiw1pZkpda1jRcLeJPJN9jD5SvJrBN8zdWEaP8HZyah4mWRFx99tcigbF33rnTZTQMwyX",
  "key27": "V8EcBkU1PPrMU3e5GcitFipdgYWJdHTqM7o8aaJMgKZmAuQ2Q7FiZfYCGfYzo9ZEfnPjA8FYvK1HDNXWD45Q6nj",
  "key28": "2rhRDgSviHtXxueQh31uK2TEy1yFXgFesJcRZEFvoqTRpYTSD7ypPp28CHdwSvMUyHRHFxDEtsrefuJvbTCxCehP",
  "key29": "3xasAq2YJ4M1LTap7cVxRS6xb2D1KNEh49ZSa5v6d1DodjHcetWFfE8U3V8V6oApPLRHjGmLVLvo71iuz2UWSwse",
  "key30": "328Yb8qKMwvUySjTAMjkBJJcADBqciZbLVz8qP1sHpuLSmbmnQspAXN4UuPphudB2rDTBKsj76puYkcfRqvWwSVn",
  "key31": "3oUYNbE6Y3kutttHgqFgJZaNhvrsLwoS8prZioDAMsHiTZ2PraU6EujiyTWBLFF81P4RM5LJx3hkQL5J9FyWhvcT",
  "key32": "4g1mxHmSL43ucQy79HAsx9eAWrZ9XaQSGutTGEZJQ7kWw19YGfPn43REJpP4EXqPg5WqJYKQPdHYgDNPXvYFTyBT",
  "key33": "64vAT5UQdPywfgFhTrJWcr5eFx1WYK3JpYgjVJ7XBw9qwBEvNs8kwNa9TMp23buq1CKjyg4wYV5nmx2EzQ8ahBDR",
  "key34": "3SdqTh3roYUeHFyesaRDaVsWWZrhZ288ho2PC2GUdTmdtQgXfmdrfUvnKnBdBnuuyn93cR5U3C16q5CpkM9AmqZN",
  "key35": "9b5zfF45UE9DjEiVLywMb1E7yvmekv3i2PqzY46Zmy9h8Xuc1cyGkrHyo119WcE3SBYubNVv3xo2aTyoCr7Msub",
  "key36": "5fHQZnjAg29uDobSYW7ExrpeecsNxKGiP8oKQ8QvUk2QVH2WFyUk5VKGR1FY6oBfwUJoLae36cGBCCUDJf8ys1L8",
  "key37": "4ynSBRVJVAJmGtaqsw4HS6TjmRoGxqPb6nTg3H3cWsHD7vWcM8nVcbfE7JMK1hK2vYzeHRjpDhJpHvKmUkZSDVYT",
  "key38": "5XEKtUsqEsFxXBqzEEaucnqYEd5L66Th7qcshqjRCHcDbqvHPo5817oc4qyUMFPvK2JWRFQoibN1vNKZKpF3qR2f",
  "key39": "5uVjCULQVXtL84SNVgJTPhY45TicKmCpKM9UxdZdPKgVTmK6RRRkqu5LQs7JbsPB4ZNcrhqcsRgsKPGXFYgVCGhH",
  "key40": "3L3PeCA4btAUsFgShJZbUejsHE99wmJkcif9ENmAJe1h5wFAmMzLK7aBZVBkbYBSKzA6dCZFRGn1Y4frc3nMr6TQ"
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
