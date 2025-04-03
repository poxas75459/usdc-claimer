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
    "5DSXPVwxp7MZKmJHXZDnM2jf2tpukAgXYJzUccDPazy5wtK31g1M6uezdSUnYhS44dX3SrjwCeRBBA58HYZGWjJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kcgcaRQCkaEUJ19kgkaxXTKeETWHHttXUSaRpLfLmtaqSEpuaw5MU3yunZovGtX5Fz4kJ3WKHR8c1CcEXQVRAcj",
  "key1": "4HvtRnyFhpq3qo7VkzsTWZyzRUQPZGH2pfDrcDnSpLc3mD9JKqFxLk7fbtNXGSJuHQ9s2Ayd952aWi3yzVZ7536V",
  "key2": "3B3YRW99gwC9irmv444oMS6yAbaNut46F5NS25w8maKStcTDp9BmgCG9UMkSDnp4dFFwsMZGsM3ENUdRT5iGm7NN",
  "key3": "3PYtpcGFeLgCKcrq3QL2mTwyjHNEfyhDpW2bXMVnJnsSWbhEiWu4e6cDD6XVCc6m5tmEGEEqBufEzercpg5TsrPT",
  "key4": "2EZAneTb7jWGZmT9KdZFPaTTTnkZ96iVbjsN14b1PieUWDUUVdoyALDWfV7WZye6Qo6ypw3AgqtzBBW3CQuUxxZ7",
  "key5": "3rGqWATiLttBytoy6D9sQYeFYvoAzzi8RAxUDMhxWB6XWZZEeyMq4TzHPHUrVKb1kBFMY7Kdr5vJsC9hUcLo3CrF",
  "key6": "2chUo3iVyogNyB9eBjuP5E3E2yfncpFiJVkZ2saoabsX9mHt3BGuNv3h6Agx8i1chDBEuWECqV5yKtTMKwRrHjGf",
  "key7": "5K4pkANck9n5yLuVps9B5KKi55psUHPSRCQ1n3ofprcns2oby9UW1h7cshweJC9WJEyEoFemrNvG7faq3nEo8xuV",
  "key8": "yBBfQUsxxrgvC6v4hjv2ocRrawC1RaiBYd2jzJX3cpTpwqLq1BngjxZiyJkQRAtUBy61v6rYMayitLHSnEjcNDS",
  "key9": "RHuAwXwSbkzcKoNy3Dz1RTKMF7WjQcSdnLs539b4VQckZsW66AULn15rjaW3NdjawaXWLG8tF5duMYAQ2HxFZDs",
  "key10": "3zFGKPd7QeLrGmv76U3zoWcSDW1ew9WSYFMCvvosuDts1uNetrmyQ1wexeKnp3JoXNQ5fqMjwfCxrcAPFDUGWTDp",
  "key11": "LN4hA13s9NxA7LgvfDmijgjuMf38Y7dmWaKz6DmocpkyrzZPLpEfLB6tuWQqrqvikp4EmiToWaGVXpbtNREMivK",
  "key12": "3DJ9qU137r4dsAbuBYtSMryq2cYCXHEr31zFWf7xcWtzvGZmbcGBQ3F9Z4SPLDHhqa2qqbrorXjQX5FTCYT8WQzH",
  "key13": "5bdX5RmMFHk3fXw8S5ggHmSZdG7BHHmJTfKmXJyUVff6q2Fk6CpJMbCo34MpyYZptJmUuYwUgjZtQavJLgkdKqh2",
  "key14": "3C1pLM8J1V3tdjKD2TP5PpfNdeYdEnafvrNWSsTrXGt9aRfKzo8unhJbav44iWX3M68zkKhM9dAXR26jVjDg1Z6w",
  "key15": "4b75jWqhYdQPdcSQTHNDAeLDSNY2DoKry2cFkF79NiEEnD9uVi4zsTcfqeLGT77fKKjR5mVj3X1ck7F4pn4qeMsx",
  "key16": "25VENrN1b7eTr2oxJVGLEaibaTZt38tcDm1HGYzvVY9dfna23NpwGu71a7pHHFLbnJxrQhHduEwtNvZAAaRC1mmk",
  "key17": "46qnQgvCuNpL7HMjDzmt6K1cQN4nyEKSVPyJKByzcD2qt3KUXTWcyB9SEPzbxcJzre51osnQNBr5E1RvREV6SCQ2",
  "key18": "3xYmB48RArWfR7ffCK76478yS5UyBYdfHJJaxL9yvM8Jc2RCWrypPEP7stQePwVfHt2Yb9rqp21V1YWZPVwPtrBp",
  "key19": "3Ezd7NMppM859ZqZ7mwes4XMr6ACU4QUMmj34nheTNkA5u5Qx9fkZzJ4cpyeqxAuDwwtAHhLBJCFRXKKxs1rYcXE",
  "key20": "4Nve5wo4HYobuasGFehEsEvDVUKTaFGkeJDrCy8WEnTqzsceXcX4gyCNxnNETp13oMa9MmRzHoKMptWUGvrCVpA5",
  "key21": "b4igaR2FNMU9GYnVZbCAkTiYW2BfY9XnUbaJ3pqEByP2oE5sNvfnrtZLGd9HWzjbsibYQiKcrVcrNCkKhHhtbqy",
  "key22": "3UMPVGc1EPh8pzBf4gQFHBbCg21EuQ1ScXnUkcJMoQiKjUWofecPPFZLe3fsj9KhJvhxRvMBZzSYZunNchG5x8Vf",
  "key23": "3wRzGhnuuhK6Lq2oPaXfR4g34JWd8DXvaNFEazMmG4VDHVX9zuMysZFUgKhwr4u192pHMWhMndzWKmSQWgdCpqLo",
  "key24": "5PbHUci9pn3QPQLfkHJkyJ7MEJR9D5QWisxYoqz3ykobe86seaRJ9BFimfKeuyr56mNsVsg3SEgWz4etYRnnJeup",
  "key25": "336iWu54npAxg4tXLWk89dFM7JuLbUWG44NRf33dApYkMKYwbZ9KZwFfAXd6rRHxSYXpDFu6K3Xye7fvZwAa8gjj",
  "key26": "2Yy29iiViBoKpZmPcvN9frnPa86haro68FJXa72FbPAvCB31U773H5cEPEGMVp3FUYGZceMr9G7fPVWywpcMbYtL",
  "key27": "5YphRr5dSnWKqQxFszfqA8tovdaPmsTZDPR1kf5UytMoJUqxAviq9dwWp8g5gwhMH4zmGskuohad6pfF9UbdiiSg",
  "key28": "3YdaJNir4EkoxyUM7Dr1eLjoq8LybdGHNjC413LGgwM5NCWKFWriGxEf9bPmGQWjNvBqaNNGQgmFxw5Aa6XxN6Px",
  "key29": "5fYNTp9F1rAbfPMnZJqH1MPXiMpmR1bhGXDeUdKY7E3Jtw6bHL3dUGD9zDQfo2FpcUyv8KZeY4gCoHHwU6Put8tG",
  "key30": "3eFWUVmXhwoqV7fFfKnsajAmFdq8KNVXgBG9Cik9CBT7PFbfDjtwyeVr9Hvv2FipEY4xAe5aKdeXvZpP8QfGBAog",
  "key31": "3rMXcfArm515P5mmAUr9BuCSTdSRWDEdfGq7gZKpXQNhqA8azC4ReEb9zfSg2YY6azHRTo1mXMfQ6gEVEh9LVUEb",
  "key32": "51M4LLWbg1oaojgjDW1cYMyMbz2c7jYDUgW3Z68cNqWeDHsRzyD5S7HnGDDRNxTXAKrCHYVLeF8VGE8WJ849WTGT",
  "key33": "4i5ViwYGw6fkCnoDEptdxk4XhUUwXM1WhE48NYqW11E7UvTt3ZJkaNFYmBb1V2sQCm3dUzRSnawhySiFX4sEiijR",
  "key34": "51x28QTpu87ZNvGCDrohDVnRUNDG4VqaUT77uK255jj6uuL2MuKoJavoQFPNfGSvpyks2Xw4K9ZpshkLK1xMa68w",
  "key35": "k4CrPupcbuWRnqaL1f4xgQcnFNX5aptC2nyg3BQC2YvMNrNxnm9EnAmEzb7vygZ7VtChrCWx4hzBtQQfbtDSvqD",
  "key36": "4sN7nSqnzBkhXvDgnoxEupHgfNCU8LwjwxRiNcz7muWPUatSL5iEBPEZrW4FdDaALJysbHZgNzSJTg4h7Mh1yWQz",
  "key37": "3jAardG9cddNa7q344rwUiCghwjDvoAvZb6zQXphJBDP9nPSK9Hx9aarES7Y9dvmrua2V6WfoHMb7U3dEViZKkHz",
  "key38": "2na57iAxfv3YqQAwQqC9DSRYXE2eEo93gXrF678K1Fbpr35tDGZJxfosxwBZetmua4oHyYYQz2XJAtRZjzfEUpoA",
  "key39": "5w9gRRSfGrbY9QRijonhJEwioPg74CmTX3KUUaSrhFHcWpycefcyMytKUBByHQUtrkSNuezUUmm85wxRdBUABjCm",
  "key40": "5bCugv5tQhomYQsrPDt2zBNcZVDn7YtYurfMtdco3wu9BH1NpAvcqr7dDm54WKPNJ2ngK3TmNm2TAF3Pr6U2qvq6",
  "key41": "Uo2hPPa3EXv2U4P6WLbJkwZJjkz8RogM7qUto1X9BV3HUz1wg1XVDQA9Q7YqFP2roArKVX7ybjGcp8pf8booH6u",
  "key42": "2T3Z5m5anvFxUttV2FRv7orRNW7uacfbgPALEpakDWkrRR72V8vo7nz3fUD2ATfCYCLRH1SeZTCN5bZgujG4bumP",
  "key43": "45nKAtQC2D9k1zagfTBJyGCafDjaqznJQ1iC6t4aN8AWM5hQsYcGuR5opWFx4LEW3gsgvkRyMEkfnEmGSAbcY5N5"
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
