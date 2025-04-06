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
    "31i2vxk3nMsXZrdzLjWAjgQpRN9Eaetcpc1fEbzm1MmFJVfJhFLvQ1ztvcsZSYqm7UjsZ3NLYmbdkwXbztjAYGbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65CW9ss8knN9iprp7nE96Dqaj1LoKPBdEjiTHrL87ueGrn4sJ39Zyx3pcCY6QDJYU71CDTM1RF2Tj7WhTMsSwHrJ",
  "key1": "4j8FLLsmqQNhdwJ8Pxq9YZFAv3YEQ3RHDmaVPYKnL3Xyc8HN3UmdWmxDtgoVXiNpiz2zsM91sNcNVp6a6BX4Fj9U",
  "key2": "mV5eHTs6iebQTeTQBKyfZJPAuJ6ES6kni3YvUmMMHoASdkDp3aFGAMFdFR6nAK14FM96YSi8hLYxYaRrxcvwXMX",
  "key3": "3w3QAWz7LAdr6EsNt7WNz2GbGnrFBKhJSdCzQVdJ9QFsStVpZqQhtF4N8szFrSMHmA7ED29g2c6iztoBQrV5bdqW",
  "key4": "4aFX9q3s32cLMwMYxnDcYzPyL8BZjaWtjCUxZB14iMD5pHB9kMyXQxbJsDM12rf1Wa2L8asXNfGD8uq3ApZwmUyA",
  "key5": "3gFV1tKFjHSVtz8Ao7iqXuaExDhKEcCuBq2UP9v5UNzfh3VYuW2T2D9TEWTznMqWzFWCH65ovDPDmUURUVnmqEzH",
  "key6": "46emhfhejTqrpHo1orNm8wq1GVCdLcC4v2AhFbHgNP6Hfz6HHLN9kqbyPFSnnL6DVveJpaiC85VMUHwXSQKQYMk2",
  "key7": "2Jf3ruBRbyZyQ2KHGNRLGHZv267q5uYziF1UKtw9zJBLsaWiMNgX9CuoRdSq7eKMudc12ks5onNKWP6LW7YqmoDP",
  "key8": "2jDqhfKG8NggsupUXpK4B3Y197W1e5xRbDgwknA8iYoKCh8TyV4CzT6YzokPejDa7TLUT8fg7Cb97XS1ZTduccoM",
  "key9": "5aotLhmQAe3LYZoUwLdmFWonJeMERNU1GkRFSTBUTAGYZkejx3DMfxbjdbNEKX7J23bz4Xq9Ym5pjpvfqM6j7Y6R",
  "key10": "3poZ2wFnxK1HTMsw2odcAagnLWWFWMHEzL6C9zn9bPZKY8zN916x8bTVeytv8tUygViN19ZTt5zhLoQ8qYvtNqvZ",
  "key11": "ykmdNLMgDrCP3BbYKpZYgAzvqv8jQVCaxCFSeeKEhsX1m8ZoqXchFmnQxv8exp64mNZGXxrM5TdPAx76E1EmW4K",
  "key12": "2Bf4rzsWEK7YMvo5JkNVTgL2cHoz5ffx2Z46QZBWnj39JfXiCTz9neasNb8FefuDnN25fQ3KdSFiDLtGbP4vZAew",
  "key13": "52t792XqDBpgaYMqGpE1MMUi3ZRwCSRjijrAHfhtnGb9aPN7CSrjmf2x73H86MgFyQcr5gMBXr1vDgPVRp1ByQRr",
  "key14": "5MSttVe11VjssAFUrfsFA6VQiKoPtudu5VRk7V7Gn4KqVtJWCPAi9SEEG5EDRXVBbKkz4MZHdRT7Ds9pyrZRNH41",
  "key15": "4i3dQuwnW2y3D333vtaaRge7Vs4pQ88EGQgrBTinDoPQ2vgWKT3bVvvjfQAdqKPdB4RnFZmJmNGiZaejRy2DMcNx",
  "key16": "2VCE3aryuKfvHY2CzFH4A7Yw1uzdqccUk6YhqaTi6H8bvouRvzykZMC1NeLju2tcyCa8ezjWMh1CqubgjTvDRpMG",
  "key17": "Hv1fomkjdpsT5pSBGbr2LGsPLJUf7UVsDMUZWpeAU4ym7owWJ3rb8TrUVYpBveG1RU8baiP55EVsJFdJNcnWJE5",
  "key18": "4eWn6ya9kqgmDGoe2MCrtAjwnpo1ap6vxo7sCN92QJv3Y76gJXQR59jtmybwrFFjagzK7x9UFjpqUWpYBBNpALXM",
  "key19": "5pdUM1MRRMJHog5CdyXxjtFRWfSFi6JWeFLELZWb9eh8BqCfzXT8NvqC4oNXVJqSntytBHg6RsTWBBX5xv963RAZ",
  "key20": "52WBjnrUAhhSkP8jh5D2qV8BN6PdStH9VMgwFtLaAEBdNZqjDpRutww1mk6DitpovmWFunCFN4E9i8Fziwtnq9f9",
  "key21": "653tRDiQ88syBbbCzF58jLLSHjc2fvxws75xmmvTfSYTBZfyJ7Hazxf2WUVY4HH5Gua2xhGLE6JKoguwgawQbECL",
  "key22": "29H4Eu3Bt8tLEhmA2ZJR3jqJKbod1KxcnnVCLGZByoJS6KAcNgPdvPr4se5xkFMFXHGR7xBdS119cSjUsEuoBfgr",
  "key23": "38PBzAc1XAnWJeJyrahS7kzCXaK41svuNfQ6w233zrvyKEYLQspkpdpra5RK1AML9A4G6fs8xQCa7iQ77AKZZGUw",
  "key24": "16JdpxjRdNwqkTyXwxkw6P4oobaKTTVReAy7s9voQ9gve7oJn3P1fvfYd9GiECHviTU1E66EhP7QJN1tzkdNaB8",
  "key25": "5T3qb3twATamAoxdkSHz4WNfzXdt7vK14Q2R6oidWwSBuhghyPjozUSKrMio2S1UpwE45BoERQEAEot9iQ6GevGM",
  "key26": "41RpFjJqwSSaEkNVshAMRQFxaZm6zvjSpzccMetQGzGwijLSNFj5at4qFD9LmFYH8W3GKrdMgyVnnBWBUnebNK54",
  "key27": "5oKngght7qwoJpVXF7uRCbu9R2xTUwYadxQFCTKdZkd4s4hHQjJhaXiKa1No63Ka6fmHug8peFm9d8ULbkNcPeoq",
  "key28": "26wZPURrxffZm6Tyhu9qzTZqANV4KL6o2sAsudX4uVSuf1jmMkNALGCmwv8jMJM98VyyWCbXUkFdMiwPfhQ1W5Kw",
  "key29": "518eeqphzDbTXDczwkkj6c7FfQ3ChjJqkuuEa5R8ckKLC8y6FKGCAAeDnVtikgwinF1duCvqnrTMLsRuktNASD5x",
  "key30": "vnqfNVfTqe5kKftwUCwKzpRvbEp367oUW5gmGh1rkZn3wPuidkQCupyPt2uKikKxLBZj85B9onyBftjcyTJkBHv",
  "key31": "5tRV6xYoUyn1kNyV75vWxw9bT9HwS2BCqWBdp12FvzgKWCujJR3NZ3TTREVXjhUrTJr2xmsfEEtsqFocCiKtsvCF",
  "key32": "48e7DzPcygPy73pmdw82bFL7zfD5NTMwsdCui9yndqR21W2bAwoZfMCYiHKQuEESyJrRtpWL8bL1qMKPnNgiLHJJ",
  "key33": "5VhRkNoB9AzAeV4ehtoS3qnWcFWRurK2EVGtKqTq5aq5GwTnbtZKKnx6uLwqPTZAPiXANR8oprTVHRDkiCVWVL66",
  "key34": "48w2naZ78EYLrmdJRC2oc794PFPENcfdYMkMmBvnm6p9pPXdSgipwNEFRox4FXYL5om6FuHKend5Sof2WQUQycEe",
  "key35": "67gugy3vsne8HpVPhxRDSnYzwzyFhAxHvtA4gJmDKtfWC9YceGm6qNRoMpG9HgCPPqmBXRg9RDf7qqA7h1LojKdR",
  "key36": "4MgPFU7s4DupQdG64M8F6KvbE3rFYVXurm6Ths8bVrQJsUbYB6pSXZQn4AJKZWp2UtWHZjgQn5oRkGnH13FDakdv",
  "key37": "3qbiEfhS16ufUsnSfttU9QqgNFeWNxzYHktN5QzmjDSuZAvGcRkAg7CfUkrTDgFtiCK5xYUgpSNLLsMPVGxdPtGi",
  "key38": "5PoPcZxSXfZg7pyLSqUYUHQFHoDNZvwxk7T1V7ZCEjEzgimFkhzxRnQCGw6eQ8z2M3kWuqVttkfoPUzPMbdvSR3T",
  "key39": "hbi3oknGUtT8eUKHEfXGtQdpEm9XFpbT2HE1t3Y8xA39fygdKoW1a5Gczn8b4JnPRnDrTg3qJmnWBHEMkpHRwLb",
  "key40": "4cZiX2sKQiy8C5YaV5P35FJt4wS1P8anWEJMY9SoBeNasQ3Pnyi6ofPCk8ksEH7Rmpt7hgeTCEoftRYTkZXPaTrU",
  "key41": "4N7iWwTuqUhqdSnTt2Zogr4bgtPSifPoCAizvibwE83exc3Z76mdhMxju45oWpeaoEqVmomsPx8tb9JzyPTqrg3z",
  "key42": "5Vbujy5LQ9E963mW18cWryFAM1ypas2Kq6hUdQwpMPXMwh8pRhNHUkAnRcJUxWp9yFcCyJ4btQ3a556FkT6vkYLi"
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
