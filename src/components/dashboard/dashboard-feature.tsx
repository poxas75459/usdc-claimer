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
    "TpXKBk5C4h4mjAzKR8KECC8n99CWN4x2pbypHSn3dQRy8CLGmuDbbSxTTjT3AxDpY1hWjFFovjUAFd1qSmzBE7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GsyvDRS9oJRKSCmrYLpb1NsEWAJ3MB5Pz6Trrcd7EX766pV2gHGcrGLecBYYufAwND6KzMowuUTB34aghpixLGg",
  "key1": "5xgSWZykx538ATYoCdAwyfVMhYArz3TGaRDPVCHqwPcsZEMZfS92ZdsBm1uEcsRLkDjQFXeqmUeE6VaiouCfrHXt",
  "key2": "55EPehqbin8qy3SSeC8dPYuamLaouKAbzwnANBRpR1D9BZtLnYeQQ7ANVAvcyGrCNVJp6CXVKnL9CLeJGRJwPqGt",
  "key3": "2DohNL8mPD53jnGqGg8Mco89BZUJKxBkUeDsmmsVFoaedYa8VY541yCkk1F8pgmfSCdvsW4PMPvY3m3E5hJ9xpy8",
  "key4": "467ZBXB9pBCNiezc9pev8D2BmawrJTD9tiQaYRPKevFNNpTvD1oyQ1cBpa2KgUcCKrJSqGrDbzQCAQrsBf7DJiDt",
  "key5": "gEYfJ2V45RtffH9LufRTFQgiocWpKgSQBxykRnMtAkBN147p52xwss3ssEa4V2nz34fjTC9xZ8AQsCxUg8YKS4r",
  "key6": "3WkJsHsgdpmJtyEYTTpir4uC6XKsYNwZv1aNSwHup1u2QTVzMmv4bW2ogpSdW5kKRxPKHjqFwWLFPkP2W5g8gJ7U",
  "key7": "3vMttrTRJ8jk6NH5LocSoH8bmhJTWwkezRMXdHoJEnC5pH37PdmXy9gTYmtn7skCJ7N9RCR9aegMUKsLAkKayZ74",
  "key8": "5kWCRygrrdGK6Ch6Pd8pCnnAJqD91ae2xj75N4dTmC9RdK8QjnqK6ehaoQbH51ywNHuzPWN1GBkNY3W3EvVdbqXC",
  "key9": "4wHPV8Fbzmacp58WzwYuRbpiRFEX4DKSHP9gpvWWvFckF6fB9JEUxeE4HcUi995ZLnApcnLQu7i3XyAS8vfXuC8P",
  "key10": "qpjZ5JpKdrc3RTohY3qQXfxg5FzvJg1PiJVpTHduRp5uNLVCQM9c1tTV6PMQyEF1KBkfH7pHmuKyKbjr3ZrT9bi",
  "key11": "2wqEZmA6REsdh9uaoXTktCEDYo5fHs1mYHrCdHHsJaEaMTjMzKFsATC74hvQjz7TeFtuJLMVJsL7Yis9vHMXAMZP",
  "key12": "5wQso9KDFkj3aD5KSSYYNVekWmMSKLXiUUU1R927HDAmiwuNkceHY53R3U9spzvgK9fDMU78P15KpXGYvUVvSxGR",
  "key13": "3c1ghhaEMKUxFnC3YVbkdNn9avxG2aYTGYYXuHorM7KTYbJfHYLMULTaYZpXKphuPEKSMujSwFKuqkXCWax2KuH6",
  "key14": "4A54QmnTYfDQXrRxC3zZaHpaGuknCKkHR46d4KNxcg7qC84o9s3sCnBFYLP6BWKGs3PYbdw8L3knLXUa3UjFu8yt",
  "key15": "4m1AzcMEWoDYrJYLKJnrkiT8oq6hmU4U8Vk7uMJi8FZGi7J64Lc5FmbhBsvG4f3yjZNVw88JZ7FcomqTFdC5q3dA",
  "key16": "2GrzbFQnHaE51uw8G4toRTEQ3ou34gvmRtDk47GuFbvV1k6fVNz1ADeNcxL4UrSmtvnDvKG9RUrtN9verJyHfFTj",
  "key17": "4sFoPoL5h2Uc3rsq5m6HqD5xoETwoDbzAsdMB3LtQfmgsRNTn9rpVabNtWgQ6DG2Rv83TM6DejVSKP2unLwHoqLj",
  "key18": "3B3PU3KLogSoMjRwQ94GjXxqz9rXbVUVzedHs4qn4gDJSaLN5q1q5EKWk4nAHu8VMFrFQvA6ApiLzjimqdUiqQRG",
  "key19": "5c9caPyXEDJNtJPEsnDrSA7XJDKkUWPFigYkaH1UnN2wo2dB4QnFzyTFa3fTbybPAAS6UMjyDezgDCdRvkcCjFqn",
  "key20": "SuSMqBFumi8gAwBgo9y8zcYgF5vMdtgyXKaMkurzJjCzXbRgiqZySASTPLAUTXZUEjs8FF36UpFEVqBoK9wVjvG",
  "key21": "5i7VeW9s1P6G96cKBeZ5yT5Qx7v9tmdCRjjqYkXKpxnNtE7HXsPLSgYBTewUgeMpRg6DxALVvn6a2jUB7mFDHZNm",
  "key22": "fUC7QmBhkw6haAnNiNLDgupSUhfJp34j3WYAY1fwLYzNfPw1iyexZN2R4XDyavu3tR11s9mscN4nQ4Bdc5eKkDm",
  "key23": "3trbYiovriSJFekD4tmx6uW3bX4gxVBi851ZGBvacBNL38wbLMUnrb31678SmiprGcagaVPCCzAUzEYHnbuzVvTz",
  "key24": "4Fa8Wbkjjb8Lj3ScNSSzAsPrjd1stbyBDqMVGZnucjWSWey3ojjibDJBioDMusdgAYscuuBeQfCSUjdNC2BEkKMK",
  "key25": "2fDDemUWNQWDCMSycSrnPCYvEaawzCyZRGQPRnmdTPhyQLPR3piGtyiWzPHt7dauBzahxn2zvoWPccnpeRXr7mmg",
  "key26": "27ZYVzoopMuutQ2PrWxGZGZZzJwFSCdPmJ8vzWQpxzNRJjJjUdhFQ88JUr5zd34rsg8j2yAChjTFuxgKEkAUnPXi",
  "key27": "4onFdBpDFpkWtt7ewnocYUxEbx9pYa6kCS7jrgSSnDoJMQgqyyXPomTFB8prWAC54QRB1t6kkPVneNcgAnfjH51K",
  "key28": "2MbqKxSDJsbp7rLgNRCfAUuPmsGAocmcUwvuamVT1UyNd24SqqkyduUWRUKqZSA1fsVvPkQshBjtiaV7StpNdhXD",
  "key29": "4dMUwi9JzMRgypuvLErG8oiUGK5tWE82bx59SzYuuJ2RiXPSx1scawtHxwpFevYuZRUeB7MRt2nJQkYAN255jYt6"
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
