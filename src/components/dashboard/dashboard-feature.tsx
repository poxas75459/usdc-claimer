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
    "5tnzfrseC3jfAWX8q2uq161syoQgBw3dE3qiWACdmAbr3scV6ZpumK73jG2UxqCuAKq5U49cZcQQMrkEpnnLpBB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQCdM4LSS4Cdm5PyNX44p9KLyL7mr9BZ133AEahJNuA577F2i8VHsBTfaeQc8TiHnttT6Qrkr3fGvH29i3xBQjC",
  "key1": "5pbk71SQ8Zsqe7xuP4qjLFba92dZaC5cpDLNMMtTusHxoarC8ZMAhzWhvoFvkWB54fNgi9W8SkqZTNfosMNuapNp",
  "key2": "3abYgr1NLgPkEocd6rjbPPB1zEHJmx8v37MLp2odMzQPanjhiwgLm2kbLzPeCiN9P4LmmiLFm6ro1uFymqw9LQgA",
  "key3": "5ANs3VKwSvri3VutEgjRRa3vAiJ9mSkn9wFuqRA1ja1NCZXqHNkRYyi6MM2nRGtMqjuxy1LrpJFaBy5cHJnYpL1J",
  "key4": "J6U3gv12oEvMtWHvsf7SuVcY99eJHpZ2eXkgj1UGHkR55xCWy5afX3HiwQSJgAs5Zp8nnTErSZvqB4WEaufYu1w",
  "key5": "3RfNWMi6KeXjF8XnDn2SafyGSJ3UapMH7c3ZjqpmvBmUZJ143yxgKW67haxBs3GLMbHgDUV6Sts4J5avzBKH3wQx",
  "key6": "5Lu3XzbyUjRWCspc7H37wYptCwQ69CfsPaEmqF3rFJQxw4BUBKuim5ZQhxmMqCkPRMGSxCgpzAGTg5zwcAVsQ27N",
  "key7": "4uUrGNC1TVW4pq93fr1DgbcUmbM7aiKYKcG71NVQv1ozCJqw9YiYBSAzRjFkSmUpAfVPYuYfX5eghPpLmBkkbFDx",
  "key8": "DBtFca3RHhu9ugrnS5zCvkAycBUyhNqv7zsXgjzYK6ih7triNcV8Qghpqq73Uis8qJJ3DCQ4yCKCW5xFwbDLWjb",
  "key9": "zA9Wz47ARAyChbFRG4wyt4LCJtNnjNiW31hShP4Fy9kJ2UoWtZTF97J3Gr33f986KLQf71K2GpQHngPWkyBZoDd",
  "key10": "5phqCqL7F5kARJaQDUYCmoPr56USCxPZJ96q2sGp7mMLVXwv3er73UAkSh3Yae6cKv9w4Q42kwpbnxtR6M2HmMPq",
  "key11": "4vG5kAk2AtgcEB8erYvg6EUVQfRfLNXQkeLCdtY4Qgk42mC5Mks4rs3kjU54fj2dQj67xiDs3EwPcWEMeVoDHnmf",
  "key12": "4hceiGRBLoPDPjLSgna6BPwkQceTX7fdTdpCYsarUxqBtWxzqnh3ZYkSQ2toiFid2PyiWiNGSqwoRT161ATeEt3c",
  "key13": "3d16RX3YDUTTWacrn1KC5auN38AURwtUMqrHX8ney6S1qqmWjSUbDtS4MwzRpHSjJchbzcCSASBXjaYTbqQgev78",
  "key14": "4Qk9Ss3rX1a14ngp77prNA5ZACbLyeSooEgsNCRw86jfLCXhzopyWWtkvmDDvBj6e4fuNTwb8jXC9u7kXZwtwb4y",
  "key15": "2ZPqWtbUGVqZKsye7HN2Hj468gACwumEfjCDwgAeQfumZiw4ZjrmZVAUU1y8pdgZzLMpYmVsJxPMxLUZHyKSzc6b",
  "key16": "5n2SrAdAZTu59HviPGywbp8YoKLpRLd5odnGxSaFegkTMQxSwKdZVyhA7Eqt6dYqrtichFPSjfixgg2hWKKx6Zav",
  "key17": "3wiUuDsrXi5F7CPBcBTfrEHTmM6jZwTAuCiDpD5R8BUP672cLB5tPNXLd3a6WVUDphRMDyp77EyHF1J4BbvAnyeX",
  "key18": "jFaY8do9pKdDA5ESZggCmgpQATyskeYURa2NX5thouPJRkPiWV2QheoSuk1bPEs6HFiffA71WA2BiPthhWLELs3",
  "key19": "BrvU2v4fXHrZaGCn1hhRru5vuVjh8iMo2EvkSrpjpMqxcVjRcG4fbDRfnVcgv7AyifV5igfCL9JtpqFV4AFGGRc",
  "key20": "TysVSBG3sVCsaSeKSbjPsw1pKa49bWYRhak5sgCPNfREsaFsHzEwtmtHwU4skTng1ivCgXtd1i4YzvHmiBsdR2H",
  "key21": "3sbNDAHuRZR9tJcGZDKR6h6bzG7nKZbeLMzMaX7S9mHR9EWe9pdyU62NjmXkys1QnoASv6RKCSWsxhKYMraV4gTi",
  "key22": "6GjBvcweFCNxxRCwwXqXYY9NoeCsG8zGZNoNroRnnAEL3G1LzmFeQ3sRNUA1DTaTjsZii9r6Paz1SZoaKmifJdj",
  "key23": "T62qr3v3BuahykayfkT6fbesZawSEGkBGF5WfDFYbzxj9T9ywQkFd3ApU5ubK6hX2Gxu99reRJW3efF6iFLHNcN",
  "key24": "4AJSAoe8EJruHEWsiSXGMfKH7Ce8FvfS8F4e4PcszMgGdgwd6C4VChXTna3kiTTSatqRo88ndw7sWufWPR475jri",
  "key25": "4qxLSmpihbPymp8qynWhBN4SmuFddk1dkfZ3ryC3h5RBhkpnWgvfZ7t5nLHGCossrToM7WkCS1Q29c6thG6Gym3E",
  "key26": "jZjfFZjxL3L7h5n5zKKFaU1ho5s1vCTJaiPu2yLrGDWfkje8cBGwyWhqLk5PBypttMQDVutFj3TiqsknkC4QeUC",
  "key27": "233ABMy2nvKsJPhpbxaJdMiTdrGGkNGZk4wXztyuKiZTCZ1imucpVHhjUb3nTPq8ZVqrAwAnWyv6tYqU5VnDDKr6",
  "key28": "4xyrNfBMH3xrdEDrPPBm5haZ1184EiBb9MxdgsMAj66LcD8D1iyueEbEobLQT6VthTKLrEW1qAhQEShGBppvAgjV",
  "key29": "4waoSfZKEHricw5AYPoVu1pgWe23VpQdezCAiZ4kFUnzY2CDSVdDBnRbJk9VzeswnXHon396QHUEJReMDBrg8gW",
  "key30": "tUg43vxsMcHhn3BaNqr6SMH6JmguVvZdi8QAPz2SpuUqGaU6V5dsdcmSRYzNtb2ehrHWcEf14smXnMW1CeAC4ZE",
  "key31": "553WBftpL2SzuYEJgqFAwAehiNFTo88K4YKW9bbFCaaaST5skdRGhczdkcQHj2Nj3fAdRpTXBaWJbw7jqcWix61L",
  "key32": "15GBsDuaNmojhPFmUr2iQnfShyqJ921SURTa7z2tVxoThcewH1k9GthCPHyhdFS4FbJRDV5168QEpuqj5Z48MFd",
  "key33": "WEY8qyFZojKKHU7AFcVMJd3msjswTNJXycayNdugjK3mNAE8L2B91sRocFeVpVjFhujR4dLor1u7bnjmjgH9M8y",
  "key34": "3qhrEdDhwDwkR6m7EZtuKg63XUjWGeKVur2xm9Mf67JgtgHxeUnvpwd4xN8tBPHubE7tUYV3qZ2jrN2viEgTCLoa",
  "key35": "mDEjCPie2ysbnAn5Gg85Fk1md6znYPVkjHLmBWxbRqAXXcMvo11a9tBE1qiPjiVk38qJQKzbhPfVzmTpB62LBhW",
  "key36": "2C4hojh2rjndFgU3wiMyfu3TqFeEEJfMdSMR4yLKpVP9zR5BrQVHeDzRt6ytJDtmmNUWN3EX6LvGNui6xWQF8rMf"
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
