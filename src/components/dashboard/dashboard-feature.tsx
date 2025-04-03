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
    "3U85gDFXzBr6BGKDDj5hqji7PzfpNEwCTSbQpwucSVomp38pfreAn2XNfBDuDpVb26qz9Leb4Gm11vUgv2yd1kX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkCLZGSqAfJxJPt5t2bwMRRww3ir8V8ebRAmqMpJ2VmLvuBbcKqHnDZih8LHD8JixVaKr7u2YNdAwuu2JdQ82vT",
  "key1": "3FZHCBn7XdANytjHTDjooPmKgYBtNR2QpwQG33pCJv74h2rSKYeTTS9meRZczoSdC2JzJTy33ZgHx42kozYorLCJ",
  "key2": "wSehSdCo2e3GrdYVCWtcFkR6KKsg5TwXNLP739vbSYjndySL2tLo5S6XC3S9FeFdBXA6UvmrRRoa9WUtADtLQbS",
  "key3": "45ttTcMArRF1SpdyEgnM268FM2vNHPxyV7JF8QMRizjwK9avw73GnaXzV2VcToahFuMdMHnWvpfgLo1msvnhBptb",
  "key4": "5tbgFzxDr2cpPX1w4MiVW5UuMMQuQxJ26T7oJXsLXMofYD8hvL9TeRRjG7ZtR3HePq2XqrkqdQdz1PabAJo2s8gn",
  "key5": "5543tCp6fMifGrXE4fF3hymCixG5HGpqaVvNY8MQXF4Tp17Q2wDmCCp67H6TNfAKA8gcopxkaFiT52osikqfzgbH",
  "key6": "61h2hey6frDaZrdCpG5sPzMZpXiZHEwVG6okbyWYPrwuarhTy9bDH4YKQ4J8dcoreMP829Z4vXhDrMpLjGW9FfDm",
  "key7": "hWXBi86nzRCdmBMrohcR2Nutd8hj6ET51ori6VV32oXR2ht6sgEvufRBwqbU1tFRJ9HC55RVLZMQuXsp9kQyMRk",
  "key8": "3aLote4QSb2s9c38oNkuhZKBDiiE16jt1MdgnXiECyonikDd5Nre7vWNxYEorPeuCG9wSurfHo8w3JysnVrsR8xR",
  "key9": "BmvDFeBPowWZ8dySwUypTuhHjsvy4qNKWPaCfhwVanrLPe1iGMs7yAUpkyGCsSdURSaPJSk2XrYsSTsNLNDPgBR",
  "key10": "3dNJxg9Egq3zWLzyFrW3b4YP9aZqC5siC8XxSGTEF3rYE5VVjDnWSgfFbGdhvRK2BDw9piFvpveHHY4SHdZfVPzq",
  "key11": "2RjyLwALDFov5xwgNps2PpiG4qaUkpn8LT8umGvyXx4y4odkv8NoTrz9S6jrjxpo6kc7Yayub1xH6PxDY1kGmFsj",
  "key12": "3V5GkZTDKqBXuLM2yLkgKuThgzgUtbRX4MXiJjdXQjNBBWPFXcxujsPvvfQ4S3Y2TAzrTBuA3kfiXKqYvVPSa8Hy",
  "key13": "2gELQ14TcpWTw81nJtEHwKccsAvvcqAdVHBG4yfRJ1oSwNrPk17Umx1Rus4kCpUQuosECEPMNE4im1QpVUPvtfYZ",
  "key14": "2dRcgo2v3VwAnfPJN8bPUbxkWALRmvryqorviyeVTj7jVoRc8hX217NwdLj33bgn5uz1VAFk3bDCCmQY9FhK1h4o",
  "key15": "5wcDQAM6DpXV3z13Rwxbz8tisqXkkiminYRW3dj6YcQnftzuUB2yL4hXKe6gZH6uYpfXNb93uFw9RVLqnysj4sr",
  "key16": "3kijGqvb7yznhKbfsNdJF6dGP2aPSHEBiJfj8egmHoiTfKnNXXZzJAJbEZVvaJRapchAU12NUwcY9cyUbKDo3AUZ",
  "key17": "B4rhonz97wbkYAaR523kbK5BvXreTCVYgHDPCDdd9Rov1cQKFZGp31N4pL21BcKaPniU6vZCRpw5zHGXzaRMsAk",
  "key18": "4xRwZH4grV97BzoMMxaHnWBZ38SXkDBdj4N48jfgnMyYuVv8rDydJwyGUm218B7bHxzsgxA3ptT9PDZoTJYVNaKd",
  "key19": "5acP6ojvuQEUbkP3Nu2oLESvx9NrTzQsWsVVCUA5ok7oi42rZrkbY1rz1X8q2beUmrCnk2Ny2sM4xb1zpxtdTjjG",
  "key20": "2SfHVQGvVrWmf9jVxrHz3NDXBY7tuJ5gEKZwenfKC6cNDx2Lv8d5BFou7tf2a2TRdnLwiprsfpjUBpE1CqMfkKuz",
  "key21": "2Q1QSzNPt1F8uUGLxCvDLYpwonx469jjiQX1VsSiicqzpzdL6Gf4R5oigX8Ge9mhDhEDryUKEuXvz1dyY5QbGNaJ",
  "key22": "cTnBbrQWzfDQsWHK8crmR7dqPSafiSQxB8NoY6sTf2HnpLQkQhFJiXPgDGjnSPpXwseUdBbaCQs8hWge7VYeVE4",
  "key23": "HwexYaLcg3shieWS2AL8Kfw1ixyF2TmETgaRLc4gdoEmxqicCxpKv69kGdJUADGv6VB3Dt3mYiR68gFwY4td4nG",
  "key24": "31CsKV8qPKArUanjtCCuFqJbx61eCFoCb6JSkvYh4X81YzJgWtLEe6LD3uYyXVo5mvHCgtGYgDyXzgXFCSMWruq7",
  "key25": "WDdVwMHybnjEmyieT4FG7Xwtxh8eUyXRnSHGzz9ce2pXo2fWsyZ58kFpztZwbQcP5GQCGFXNDdJ47dW26KTiasf",
  "key26": "2LLEBZdCvrNTrP6KDbwJvToy2dAmrQVnTyLJ1RqEw6LrBabJeb8g89UyiZjqeBwBN6mWbA5k6VhpyiV55QTDxWm6",
  "key27": "4NGC133WnNt7RYxZxVUT3VNibsrsQwSFNhYum6BdWUZm8aB16q8TsJnb99392xYqRc7cTUzATB8UCrxn8vN1TQB6",
  "key28": "26LgivX1VqE7a49FYQUKy1kWyNPMdGkHUVoGvYBtWYVzBjihWpS572XxcrXRP56CcR26kcPob26AwMwGNrpirSvM"
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
