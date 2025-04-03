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
    "3jWYR7sqYTCp6ctXypQjzyPwkVcEeoLfQYWxnodkPPkW1QJsgarL1wZRdd93c8FeTdTyDXLMjGzJJdgjk1HTGJPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nD3Vasq1xou4KnaexFSopyq1JKdhMhRUhSCYjZmT4cwRbrUELHdouXwJcBhupoNCxPRhUyECxyDYGvS7nzK9UN",
  "key1": "5Ma9hz1iRJN3aUDMKpxR7t8eZm5N4Tv7m8rYSZLK4YA9LFwpaEibiwwFBdtMBVLP4jf9kNpHNWZtKjtSCENr56FL",
  "key2": "5M3yo47b9xArorNowqZbvFxQjWwBFGr26co4iqn3nZsAN2cexvZLA3f2NF2LqLCfDeHG5KwTg8UvXi14ptJCods1",
  "key3": "3Z1Q4eCHWYiXRHbE2HrqMbCd8kVqzAiPXykXsb9niR3aoVRdCzsVZoEVDpKGL67TZLQMtDPa4zB4ePXJxPseN4xm",
  "key4": "5dwuJrYGBHW15eJGgye42jwuAoFfp2RHr35dNzCN8g9zKY8bV5y4PsVeWHibsx2nZzbMHAGAPKZE4U5Necg63MJy",
  "key5": "2s5q67rBMYuGNzei9V559bQes7muMMrp3JN5NrZwmEZ6xf1vNg7XsRDokZ3aLzTNUtnYccc9kvsREvE2cyAreS4J",
  "key6": "4bFeCxPgjVKXUm59DHzKfYDVSJpSYFJUs2MfDKR1kGLaQeN2ENNc9GJaa8a6nSrT22ob4GB49smajbTzXiBgB5Wu",
  "key7": "3isMdGcLMXV4mXjqznxo2aYCFAgeVhQtTmJ2zrM6H1UnryaL6m4JwJXz3EUbU2hnKtiAeabBDf2gXHkwqYhVnT2D",
  "key8": "3ZgE58gSPE1L7uuyn39PdBaGX7jpViBVc7jaKiyTEXbY1DwTaF2V4wFsqsjpCviWfW9cDgRSMg6AVKz2mZLRP5aH",
  "key9": "63U4RbXTBnQjgw7iJmM6rrS7izZq1rhYvxaF7jNbqB2kYjKTnBS1vcNc17UWTEXe1qMyd1Eo7hd5ST549yEsZe98",
  "key10": "3YqGe6rTxupMAhZXwo7zaAHgPau9JiFyAw94hw3TnRnWcAWRa5ZTSkj5ibscUGf9zNYHSQrsM9o6QTVANFFSqSXK",
  "key11": "3jQs7CciBNNi8ztk2K4hezkNjshEUUhUmbzKYDFXcBAPuLC1Xd6dChxct6kJouCUE3mwVTDaYR9byUnwRyPKKnnE",
  "key12": "kzdB3d9BHgfV8WxdPTeJrvQ1iVfpDgVqfbQj9iQvdCyk62pELxADbXznB2A9WTjD1fwD4CtcbVrvXb4yb2T2xCi",
  "key13": "3C5vYZ5RjJ88aHP42AjVsF9VtvYnJH6gX6Yv9jBTuvUCr8j6AJ9QBttgea73YJv9FGrjDEKZnLw8kdAzExPtvQ13",
  "key14": "4YTk9xMUAoYqrZakE9EgPbYuuNRpY1GMiNhyYLdKisn1BVasQFfhxiY2qVHqLZvzsXXkwkGPoygDw5ta64G28Wfi",
  "key15": "NziSzwm1DTyZgiVh5s7CWR2hg1u8oVapgoEDULvTWFq1ui3KSoEU87h2XMNiCKeeCqiFNoZnAFQSDmMSY96SgBJ",
  "key16": "5R8qXrM1AKAfhRENjNY3Q9URiG5ERPdqGnyWSvhR2KxNSRXnLBqBRkbtPfeR3ZbqcnCYPWkniYwAUcUiJ3Aarkkf",
  "key17": "LUYFa2EiNSuou2FASjtpntp2u3sKhvtvvrWkGoLMPZMzRzZWAZgyV1bUS1oiy8bmYuNX2X61NWzd89kwNNqz6DD",
  "key18": "3EbiTJFApeZGVmBx2KSsgW5C9Nrib6ugQDNgvtkJ5Mg1tF6Gh9TkbX9b3URhep2Gu893joX7oX2azEnHdDTcbJXt",
  "key19": "4aLEFfSYJNiJshqHftzM6j27m5RSLAJhuo8vjinAzxDzRtFofGz3vQrWQ7itdYKzN2YpkKmT8vmgRkCVC74J37yY",
  "key20": "36MasCjhMJNAWxdDowBchYaRheZw9BbpXnDYmm1iZcjB9CbNrtiQ6Psr1tXf6U6kvSTiLuyn9EH4ZikJpmxgqejC",
  "key21": "2P6uS7DJbnFNfD72679WvUXVP2KZEL8ffqPAJk9sJNcrdZSaEt1cGm8JGRNWVVA4eSMjCEanfCk8GNFdhwkZBsRi",
  "key22": "4M9q1DFHFig3uR6gWxFjGmpMgo5rvoLF9Bx1DuRrYgCUMPfGn2btJsY8k5ta34kG7qUjQkudiW1o4NzCmdcgjgjC",
  "key23": "29poABuwKZW9D1cCrrJ4LqiTkdmcmYXzMCRGe6LhjFFkyMZ96A9kAcrZDJFCAGsLnpivdGSJGG1d7H8vmWTHLHq8",
  "key24": "GpEBrdq3YGjSoL5mvgkZbig8z4UvizMXyz3dc3D1u7ZExu2jA2m7wi5gRkXrg3dKLtYsxhJrKPWuryNNYL3iCGh",
  "key25": "p4y9qzfxMuzQzqCRPdbQXgGQ84herLGywxQMnbXttzX9tkjQzQQWGUqy1e4kYruaaZU1mGciboPPh29jeeUkTG2",
  "key26": "2iHTdweBzwd1xFrY8MUfnU5tGGiALTsJosw1GcNcZND5bXhpvMYqGXiterPRkaJeM3T5Xhmb1JakK6FtiprMsu6C",
  "key27": "h4fKLtD6ZKnpJvi6bmnAHxVgwyYAiUkmtsJqDY7X45zyNE2qTNFbN5U1Emuz4q2E6a6cN4VRAs6kKGqxTkShqtt",
  "key28": "5M25tPxyPFeqH6VCkUUK1cdCSrjguuRE8tULhd11i4nFuzonbRGyEu3unX6f8bMqkLZC2jGj7Ddx2cYov8yRJ2B3",
  "key29": "452wCxnuFo6epotB36riN23RnngBLAfZdGvAM8pY4ZCV15GAyma1WbP6DinMKZSagkEFsEjsnVtFbjrK8knmqAzj",
  "key30": "YofqhgW38mG65E9uKq6uTYxUPHCvkBSEB4WJpzt5MdRfZ8QUgeuKDuuGS3kaxZjSM3dchqGYf2KKFVqFAbtJBj8",
  "key31": "4h6NbRYbU87CGEdy5FEcgmarMHCNiYyZ6qnvooqbcNkHKTpmiPcsuVAfbRzi5octNzMHQaLbXfhYtGbcsG8CnuwQ",
  "key32": "2xJEL5AkZNouNfD7UnbE5Hx9saBLzecr7b7UufWqbvSuQ5YcL4RAKTv36RV41M44motWxUrshUJdqFtaBM8mpUVw",
  "key33": "4im5ueNn1c85tdps6neJvStRbHMNTBU7WgmCK47SrAhPet1NhQ68xtbEpJJatNtMGUZpyFTsfKYL65C77nXmLP8j",
  "key34": "4K3p5KA1mu2Zpha9WyQArjeD2LG5UCQYAoGEdNggdjDvz1iNm2KAZUzDM7EMdPRkfRpSKx8RZ5kuVEccTm5QJLaF",
  "key35": "5UuRhxX1SW3n37XzSsx8hLra3kamnVYXn6pQaorRdMdjdnFdfUAw7Mz63pSDHXKJfBqNsk739iMb1reN4JBwQy43",
  "key36": "3sw1S5b2KDAbTBhbBVmZN5h99RSLUtuFf9kAntkjToQxzQLJ8j5tM4ncwhjgtS5GtSei71391vWi9g5fRMLQ1QwS",
  "key37": "4pzHpjhV2LxzBxkVs5Cd39LeteM3dbtvCk79CcszVFyLLuHvrFxLZiY2E4m8iNHcGRJD3uxtVm6ckVdVqu4b9HLi",
  "key38": "5HkpWBkWCfqdknYT3wBNuCDbxdNExKUYzGaHwYJ5gZqPwz2CoznkvryD3H7GkQnBg78ZuLLJfrGRTtsTwEKhbUzT",
  "key39": "127ekzXk3h16BBv2yNqgzPTjisadFYkYASXTZkBvnn5JUYLvBUE3X2KQ9urJWWudqDzzpA72MLSv2dVMuEUoo25z",
  "key40": "4Z8g8zfhyHw9MuwA2pAtNsqVC1tNawyEmiac1nESHTUdH1vFinAia7uQFq4NufnNprR7ARN2BQNmSxoycZNkTDiC",
  "key41": "3dfiZr7dJzEomUn7gXgVQr7GG2GigF66xLVpBDc1P4TNJmT2HJfzTaLj46KLzmszx3vFKvUi8mQGp9WXifMfWqLP",
  "key42": "KHdaEv4NRrqPB88zSui4qD8HS1xz4TWZbW4mLiEDthGdhNRiQD4BfBvBW6ZrEU4MKVvbZyPuGvtzyJEbdGuwzjz"
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
