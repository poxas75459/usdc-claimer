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
    "5dpRSr1UyrpbQ5RWTANp8j3GZdFdVY5TJRLHjcPQT8cuszo3WtZ7Tpxvi5bX5PaPyM2VPcSnKTqVvpWjcJzkpxPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qLYGejMper9CwGqBu7nEujkFTDKfUuP3aDrw2QmGNEag88uGFdC1jWoqTzWmET7ZEaaemsnSSL1wsWkGt2gTNaC",
  "key1": "54R8aqZ6Gvw2r2X1gP8kF7woy2VCpTmJdH6n8WYBxuu3kQa819kHaKpGbt8yM9D7ukh6B3yAc2Ca362MgHoVsa6v",
  "key2": "5qi7DPhkYn1dVW6MdpFkyBZ63j8vnLe7YMQV32Dw6DDrj59emvNCpHBmcLtYkWKMovF2EnVK5XMLqMdnLGFFJKrL",
  "key3": "2HXt4AEQpRZGx9kASpmrJU98SQzQc7tdtweDfKBhSSHw4WJU5ddL9StVDps3erN3SKxQJQ2F4aLQA2SnpaGb5qGr",
  "key4": "3P3JM7MKczCiksDLRj8AVigAWz89gjQ7PMhZvX2bT2Dvn45oG9VdbPvJgp7M15jB9TdPc12g69EdqSh1dA6yWV7a",
  "key5": "48oTMzsQPoxBP4xDwrzJTSV4MLYHtxfNVeu4NPvQGvTs3iCVCn9Dxp2DU1XhgVTEyJTwzgoxhHme6gmWBvnS82Yu",
  "key6": "4GpQfPbg6Qv9Qo99porRfWECpqdLLYqQgB7WbwQ4WSiP3EtqAjwXyYhAkb6KAL5RfxcJAmQso15BELb8oemarBsU",
  "key7": "5FDSZ4XmmojNuthwjdDcrE8w2iHa6NuQ8z2a9SghTxozGei6F9dhiorf4i1T5MQUAHfXqZDivVqXv4RGESu9o6dR",
  "key8": "3HZZhikjZBNVgXU7AC9JS1eSwrZZDmHZyjY9T1CvAkeLAZuBvpTT3RaNqRabYB91excqVJHi7DkHuEY1pD6bzcd4",
  "key9": "4N7Xqj7VkB5PSW7DiUnBscHe4pP8k2KYTGCEJXEogYtmuqzif6mzcGcQGXwWq57sSpBMJicDr33GjNFmDziUXcrH",
  "key10": "4o7AA9PzQDrk5WjdwenjX77bMYTfUbmwBgaDTWMaCCB3GLYeopAfCFYeCzxmEZGnheJewEXrtaohtVW9pPvRi6w6",
  "key11": "3jJxPHep61xMG43bXvjNybyoneP2Lcfamk9Y56TyEE5K3U5E4mUsXLawPLCv1sXGdQbuS6msB65nqx42DckVrge2",
  "key12": "4TTKrfCtkcuvRdZZbokN8cnoeEKQi5t3dSu4CtYxfAnFr2btTYoW9QmZoGsofuwZZnpaTsYbq7sipBGbYQ4DN74f",
  "key13": "4ehZ7uMxLk4kzTJwx1JbQv11UyyzdGVAMG987XzcymJWji7tin6PEDaeogLR7WKZne7iSn94JSKW8gSGFiwRVoiR",
  "key14": "3BonmtSreKj3Uzx3M27EZn573VTn3wn8USV8VXJu76GUCCx4zPPMJykHvgoFQcaM7mopK6wYRGNkj2CDC4MmpjLG",
  "key15": "5RbYc97xCmUiCNRZ9AdoD9cnQ2knVGJe3y9pCNBqXg28QqRvDpmh7mgK8DiyTgAihtQX1wpW2KLgrVoKSWE15DnP",
  "key16": "CXBX3ixGZNFM7QpaaPJYS6hZWopuWaFhwdAWophB5PpxrRkpRUJrrbXb5nsjA53WAd8xexbuZCppiRk7RnQ5QAa",
  "key17": "46Tn7PptN3g5hc2LgvXCRRvFAUojZJ5qXRVysEPJYLbfmisNDG1oF5j8yKSK2NsefMKZ2jB3yDWQ3fC9mePZnDpN",
  "key18": "4gRsnjZz4CPNbv4xx4Xmq2XhrVZ39cZeQLkNoCqmzMYdkNvCey4PgDn957JEBAHxaHzWzSUUcHZiivTCXyziJF9B",
  "key19": "2CZNFsNgQvWyhVsZE4BaXH3wy1pHMM4ryEi8N2CX5R8wtZSGSUSo4HBioChsPGfr8p2E6wG4XpPBeowWm5Aa8dcw",
  "key20": "3Det8VR8U4jfJNq9UZXWuPMEAcNk6hLbGUWwM85bbmnyKFdo3VfqRszpT8KtPeRGLj9aEA2pfaiYMUq8B3xw7bYa",
  "key21": "HYUtbqcAt6B4MpsVU223zye8mbCnSjyiaFQWVFf1KT1Myp2dUEXNmU129UDqH3iaEfcpkH4t9pDiQAMvDEoWLdn",
  "key22": "2Unm1YZHspKR3Cd5d9amMMhkQmSXZb8NkzSB6jSdPB55amu6PNVG3UNzE6opX72CgJxcKZzctWXdRjL5i6KxWu4r",
  "key23": "5eCiRnTyBjXnAuVvWaTL4HfvruMLZ9hXAuPyKdLiEoPyVhQwjoQa7tYoHhnz5gEk11TeZp3MKzG3ek7ZcdCnrFHp",
  "key24": "2ekxcewJrvHne8HPPU1krXBL357QUfy4i7xQLtpCEzuKfrbkAShxAFtQ29CNueeTCzJCCetM3uqBmxeYsgU4uTMK",
  "key25": "58vM9vYrUG4FXKtPj9CjbqjKidAgMy2TrKwn5dsDAFAMZa6anLYLW2kQbX8MHVBFoSNG7paaDtvZrfaWBZaduYhA",
  "key26": "5QPgvyVFJ5FfgVpRy49vZNsuR2PzGT5ong53fJ9yB2rGrnFs7TSJ9J7Wi3GGoNuaKyFeEKwfjkWVzir27YXj2m11",
  "key27": "31theoUx9JrQajekrD3HHqJ4M6SewpKtYMP7kgYzGypcoNDa8MJd5WyMDSo5yqy5Ed4drDPYSoKWv77uupF4iqFh",
  "key28": "4jdR4xQiMQ9khoTWQie3orU8HKwfevWZ3PJLvz8GzKN1oaeBncuQ2xWZhu8eh8YoMFBtknHspdUo297Ude4ThGKp",
  "key29": "5GjrymncAWCHMsjZFnjt5WNX6277pYHtsskmVgxMmTK59Argi6fz2A1uDr4BfpRvvE7Cd4jAmW3FH1d8HV2H6MC9",
  "key30": "4gvBoVQv7xfP4GJeoW3oGrZjUu2E2Y6yixfskWEQLbeFiHLvhbcNLjB5h9Se6gRYD5xo7QkJS8PQF6pe8Fu3NQ2S",
  "key31": "3ZVdsMgro8oNN982HHbPLahppRebewnG4um4QT9qW9GgALUmAVjCS9oUJC97eAVed57QXEEfYFJ2xtYBXdFs5UD5",
  "key32": "2jMLoEeTzqoBqg1aKubYvLQeganDGSovjjVxoRfiw5ozQekPhUjenJ7rVJLygEWdbbKEpFqdqCFDZtQH3Xk7fDrV",
  "key33": "2doYZtzRNC7PeabUWpffMazpmA9g2ekXezA2WFo4KXxH9oiSWSrnLX9dBfYDEo3aA839TNQtrizy81RGmbYsUeEq",
  "key34": "v8NUvWo4Zx8u4fPPSo3fpASioA5ECbuoB9GpmQGVJTNmfWhMMrbYGzzeerEHHix3jJtrkfnDvs9LP7p5r6P2HZs",
  "key35": "ZYUSnWSXTEUQPUFvTdR84AU2ixo35HzgugxBUebRXX4ZfJQiAWWv3sDHkFnErbGmxqkCq2yJwJ6w2691ybdV8Et",
  "key36": "3WUXgabjVpYLeTVBUZfi95vmy31hJzh1aiBEbQd3x3Tw1RkzHWoKi3uBwmfkrCFeCVebF6KrsnSw4vqZ6bWwkLP2",
  "key37": "2hHCuSvBjy1SU5sSJdCbV1dgaTE5aE4A2GhQVKd1RzM9nRothEavLYTEPyMYzw5zzGAYsGEfVdFcMmn2Kgcpietx",
  "key38": "51in6wf6QsfXfEXrJfZiKLov8an74tAw9DCXdfxQRTwHFNdZMANSzx9MVA5qTdng5Gz5wvAP2VqqXW8xrm9cUWkz",
  "key39": "2BWwoRSiYfbLwgE9LvhAUieiFwmGJRC3cdh374pSRmbBBb8uFYaoXNNvLjZAwENJDGQpumehxz5ZJnkui486DvWK",
  "key40": "KXXRfANVyyxB5Ba5W5t5yaYJw4qDjEwPt99ALdqeq9ifLcp2FUepYhiYHuABKTA7iQetPaWYHHQc5EcrN9zMrXj"
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
