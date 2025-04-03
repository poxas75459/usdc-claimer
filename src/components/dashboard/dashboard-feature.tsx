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
    "4pw39m4yLmZzG6L36BArmMw7fmUL1C7TGSALooAixCe2CPdGNCgpfhnqvMCpdEeKpbEVPw2oyCF8JG5pVHhRnz8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "636myWAmMyP3iWahSBMGDGasGjY7ADskSJK16f2vzxKUZpSUxCwLtqHpj4q5HtBGGKvcFGpun4pkfP1YPeKrJw3F",
  "key1": "2HJ6sVU4o37B3BsoX7vj1yiveUwYEjGdmEqmGEQnM2k4u4Tb4UJZWKY3PWsaXF2dEj9zZq25kzL3qNsxyMpUY1hx",
  "key2": "4A3q7QYtRGJbJLegTRyHQzYXvPiHHQx8FydvM38UpCJFo1mZy1KUSua1b2zSz3HHihnwTe6WDkyAwErT3fV8tkaH",
  "key3": "3fxH6gfNrLWcKgPHNMtQfyNJyVVRPi1PK5an7EUxRsRUzZiPcizRnhegev2FKyqtDee6VzwKCUqj1FnScU1E9EKj",
  "key4": "AbtYJ3uFovNy9oG5r5aMzNrjVXxEKeByEK5566xcV7jJG8sbLHLP6wXDjdqkCtKBpaFYHAn1gyCpG2n144HFdxT",
  "key5": "wVBc1XWUBrRKq5LqANeG7xNecusGDeBAB4RTDZAuDCnHhZQg25uKZG9MqWxvpY291dSzcVhUoGbFnsr3LYzDiFc",
  "key6": "3y3dAHdzfpVNgVX5CBf9gC1ypVWugPuHZsa42M4XaRJiX6CGJNUHsG2QshNY4mvGbzWvtQ9VPqQshr8KA7oGSRKN",
  "key7": "2yd16sAvQ1dp7idiTtyk5otb3EWMyy4ZwA2FNpFTvocxJa85RfKUpSsbmgEJT1vzPmXjZNrxxJrEnSxy1JLqHgog",
  "key8": "D9QNRcpNnXLuRVY89uRjACoHeJ3qeeTn3STg5y7jJ5BViPcYk5q3aivyd59ki3n5duSTqZ2tivwLaNhMTo3Ho9t",
  "key9": "4PT46SmiCgXzNuboSCHXPDdqm7qfTFeUnCmXkDZhZMAXQXEZ1AcZSqjRQS7ZF1AFqGhJjqh2byX9byZcRFKbMuEN",
  "key10": "3wmT2qFtGoGzyJ6vD9sLQnLEdNd7AWYUazVbh5RCH7UL1gdx2EuuANaVgvXThoZRPjLF23toLHu2244S8w93apdA",
  "key11": "4nfMwXaFrMXFsdDVbDgti5X1XAUySg3BNjpHt7oaToNFufnn6LHs4yRLJEEWGriF7Ljf5WARpg4Zzp7x9QzRNWeL",
  "key12": "41yxcip7dXNfZuWMs8CaUeBRHA8XG4xBiM13Ae3seSEHhtey339w4uNHCH83mERpaKNL8ojicS9Mu3qvLVyRjdw4",
  "key13": "3WLppAcvsATgf9K5yoGt7oViLy9AnGY1Wh8fNkHwLWUF6D7ZU31sPAJ138efXu1NUUEsB8P3p63dae6w5iS1FNmX",
  "key14": "3eanheDGJu76YFMt9WV3PKRp1Cryonreybk4RUPFLgoj7P3FfNmNM2bQwtT4dXSGH4bxbRTdn9DJQMD4gAJ2WZA6",
  "key15": "1zCbiKHfp5e91TLodYdu85yJqLxQVR48qNmVRURsTkphLXNgH6n2NyBH1snNXoCzbJp9r6CtF3kUuxCfaTSJVpe",
  "key16": "638EJWL6wG1kDnEip1C7nNHr78w1tzMq1VEdfkKGjQwTWrpa4LpZBwgEDGdQBno496dso5oFP1kqTgqePP7tbPMG",
  "key17": "3wMqQvr7qpZuoCgAN4BXLTzfno6tUJCdjTaB4i9AfAuQYd1U8ekFD8nR8t8uP2c4RKge9dkT2Zt59ATAR8VQRMRu",
  "key18": "66xRnSF8asvgeE4msfasThes4EQwtdwHwG4j5Bf7vWTdHW8L2VLH97vbPBjx2xVLVY5iixJkJwx9d2EeY8oLpAvb",
  "key19": "3Jm9AJndzzEY27jhe91wJzQqJNjoEiseEBiUULCz7rogLvuHqc1T4KYd8hodLJjwvwpkrWcPimyAU7Nehfx1k8Uv",
  "key20": "5362Df7L7aZiMUw9khiJUtEUjtpav4LUktPi47k6DWR2ae4FTfkRgvdB9zCPKn1EYwTS4CQVvQxzQH72dRAXopTE",
  "key21": "5hzwZnYKYaXBp9RkAvX8LrDx8gvL7Nn98KeTMKDhhRoVbmhLWpdwNz2XtV3EHXAgJdsxAkMiuBu924qjW7Kx3V2J",
  "key22": "5KiFCRQU5n1BqfFFCys5YgfmrSFuaFThCrMb6iKwaqJNuqQ6QxmkaNzQNd2Rgvep2Pr8stuNa2keqgFwBaYZR47k",
  "key23": "2BazmTd18hVixwuEFoNH4u8NN9vdiCsuvYbNpUeGgy4g8fQ1PHdjzsMfFXLs3gEhn6dTssWzeVwS7Fog7R9MyH46",
  "key24": "4fWK7Doi7g4vSDKuBjUSvvowQpHcXKzKDHWr6xBvJDPZPtPY2gMvaZUxx7fT725e5SpdXK2xgenAeT7XF79LW2f5",
  "key25": "27bcoZ11Xt99TmJoVWheM9iccnPPVUdWov7Q35T4bq2BXwHzdQWYKeZ1GT9aLGfNanXdL6uCgH5h4LGN96Knt3rC",
  "key26": "5mM2pDFGRy11rE79o6X6ykuBKeiAqbNMvpSZBMrVgBJidvbBFaNSoTA8XGUn8oywyQVLy1CC7V8X4rmfECcNx34F",
  "key27": "55Ef4rXm59yWueMjRDWyVkDYYZbQCaXVUeXnnkBvGsR94EtfUftwKaNgHkMg6xZSCyspZ5J6Lzk3mRLP3gAV6PAG",
  "key28": "hkC3Ss972orWApaRi8FQQBFnqJyhxWuHJwTVyXJU6FoKVMcwyqHha2Mvgf7RBdfBm5p4cJnnCw86GA729NGfahH",
  "key29": "3HiLHVtVYag5UJzozV2d8SnkRwzWLBWDQ7bjqq7cKbCKmTwfjcXfGdY3Zrt4EhF6KxV84sMg71PbQ93nH3qTALrY"
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
