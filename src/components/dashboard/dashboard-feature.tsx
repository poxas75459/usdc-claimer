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
    "3ax6e9EnHXgLZrjjWAgfuaiGvEzXwjdxCP6voWra4bpbm9ZkdMJ2b1aSatvZNBJ18WPuRHML6zPesT4x2QkUy9G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxpDRcVCRqikFre2KaYtEHGfjwye4MGsLKEndCdRXeN2JenVNp2Tt8B3waiLV5sL4ktR7hg23A5visBtEYP9YTU",
  "key1": "4CihoGDd13dPc5nQWFbchXfcGPndJa8eeEqop3r97amBPp1q6ERvbisYY5GrJZoBcv4wkpLsNivdKKKmnFxEnDXq",
  "key2": "Ke23obPWo3LJr9YrBsKG4jfzfQC7iCHzeLyY71Xbvpn1cATdX1hErD3drM94JV8Jh3iR4yUFBhRRCr4WSEzB8Tw",
  "key3": "2vbXBrx39afyxyxH9aUbL1yxVRufy8D2YVzhbWqu5umQupRdyCVLrSLtsmrj5mrYFAuoB7guxejqXeewsNf2GFju",
  "key4": "3Gj55CLRUGxnvuvr2waeT8JCikESrpDCj7eErCcQyCzVyU3GsW74i9XZBwAtQ1XXf4QvdxhEdUExV3z21SM9rngs",
  "key5": "2wgb7dtzWXdeLxecUkQ19fuEFofnQx4VKrXobqhEHzTBYeJc9F2QaGGvypZ5bcQ1Z2EBdUmVew4Q4CxBAEpE7MP4",
  "key6": "59XffXhm3NyWUpY7Bgzw3WVbxYN8FgkBKNGHaLee272L1Y3MrBHX5272vqfUcuLjxHmi75EgRpybFgV1YepbY2FZ",
  "key7": "5g1MMFtuK1KSLWukoeL3uGLeNeZ6hX7B21f99PYwzzg5gjD8bUF4VgYCCXsaUGsTgsdXMdEC14C42j5DsnUpLY9w",
  "key8": "3ZHLgNMo3J2zQChBd2ynQmSdyEAndBcRZnbpDQ4sCLRLZ3HkKNVZSiNj58ABAWuQ4x49CW5ny8KU6oLPTAPw3Uix",
  "key9": "57jiVmDhSfE8gc1ngrywQT6nxPKsQWZFqMMT8bxGnT7NXvTt1bWvvZiDYLtM3E9VxZb86URC1i1GXTLf38f9Zpxi",
  "key10": "3bBTCzzxTMAyAQJf2GMLGo2HpSs5i7Kyy1XaAxT4wN46v7G7EZ9a3LJRmHeFNz9VutYAdJA2d6temPJFniU7AYcp",
  "key11": "2GdJ3hANAbJEvrFjxxuWfoq3kiW5pZX6nuGGNwcpVA99h3nX1RMqt3cGqwooLzZ2phvfg6Qb3tECfPiYoJAWfq6p",
  "key12": "cJaSczhSZvn23FHWCFAdp6hSiazFUsaQWBYLL29H8V64P8LX4kZuZZBuKGVQ72w3Ech8emtkwTmyzHZAYP5h8UH",
  "key13": "5kRkuLD4GFp52dSQhn9Hc6DsHPTiMPBn5KUHkwCpZRm1jnQQqc5nkwUSX7cFgWvir2bf7pMnLWuu7zEjBRGzDMLe",
  "key14": "4NMhnv6HLB1GSw8dAz7Z8MouF6XdArPgENWbS73t4SCifrpT6gpaCQ63Bf14FcXZabqbD3LGMxW2g1YC3N6dcQgr",
  "key15": "5vPDafHfQTmqFKckPq7rnn61NNFhjzey7vnifFdRZpPAJYBBq8UEWPtsyFEdxEjrvet67oxCzSHeihu5VGE87zKB",
  "key16": "551aNj1zXuquLd3iNYuXVsN5ThHkvhKidkqd8HmmXCeB79uPseqsTW4CmgSAvBD2NdS1K2J6aMgBQGgwfaC51zox",
  "key17": "56cJKiL2V53BCaaBEkpox7yDWrGcEWp3ZDvH1wB9zB1nnv3CWNyXKWmWfHbpnUaMjztkRbi4BVv76Jn4HTWwKgAS",
  "key18": "5fToEXRNmLjTaCq7zbjzVkKsZhQ3SSAYJVKYWeuNujCs7pYWKAe2qUU6RVK5ZBMVYW5FNE1qRmVe9ptmz4rfLSqg",
  "key19": "3keXh1xqtya5nXhwVmLUxNW6JcxipaQvax56bp3SWvyaJhtzNLt5ueiYscYPLy3MS83KGqL5XPFr91hMgAWX5SpB",
  "key20": "8ZkM6rTZ9DRARTwwvTKKKZwtUFqaudTjBEpQcz9KAJP9mXfSdmWLUmKc6qRa1dQWfKs99t1Pr6nW61RFTqYHDWn",
  "key21": "4bHpSZ7P7hEKmbPQak3jVKNz27MG6XorNcCeXn1WsCmGoNfEAGuw5yu2UzZbQzbqHYtKZ1yxK5EGEQibfmd3fi2B",
  "key22": "4gQtfLvycuRfT32CntgfC3oMVntthVaxDPE1rQqm7jZDDZ3A5Ztm6kp4cD3RJF7hBCgib6VjWjsKfcnPBZGCq6x4",
  "key23": "36a8dtPZDjizRhJ5s5RXaN1u4XV7hrZJpb2RAvfFmNLjYYA98Xb7xMTAC2QH1EoDwpPYaKYGQxW6bkeGT92X39NP",
  "key24": "D6TnaWSHhT9epoGtbTgciq3LZcyPv5sMYy3Qte7D4Cqfr6gmZbQ1uj3FSKFhq3JgEm7ef5KuTXsuxkoKBwMuY6T",
  "key25": "3KGEH7aKupWWMKHuPpxHT8f9QvZQEGv4mrfr8MD1ByLe4nsmjV2oUvgX8se9hgfv6cmU3r7HQnR5GRjWGRkMUfaq",
  "key26": "5iN98A4WhY2i54GKFRTQzkCLWwuRxYkirRQKQCf1LC4cHWAwEXGKH7EsogqbMZnmvViaW5WCAS5gh7vXHNNUEpSf",
  "key27": "4USNkLvDKSWhiruELEg88Vb5wDk2AsnXYTsV85CUgCLGr6fRRAjuZipbSLSN4xGY2FbCu5kZv1CvKmwEu8oRky3q",
  "key28": "25To23drdgJjHnCSWrHe7ct2eUXWJCrTuLHQmgZwuFX8prTeMgoe2vEEF2dZctEVSPWtzyzAkMzUkRZ681GGua6N",
  "key29": "5RVgaFL1A3X9gncBGMGUDKt8KhbRvMR5tEDFp15XCgfThLkxfPbbm5UEV9WwU1PYsjNKX9tmpqKKgJv2Ub6256N7",
  "key30": "4hUYXLTnKRxD4c6MnJXdXRxpudN1adi7x3WTYZJ8RAx1YbwtD8w7EvodsDsuw3sao9W6uxi9souCC5H7T5ZX8pkA",
  "key31": "29dCYjonaFiuicVLX3CFzanh5RCpBEuAuS4NRkDcbgnLQdjzrmbk52w2FDqVCqrTep8BQR3CtJf1Aeu9uSdgUUBU",
  "key32": "3KKXSEsP2nm3S85ppuB6YrsVBSTHc6VcNiaKSt3KeHL8RZ1nNzwobVvnAnqcm1QSG3xWFsuKqC2kfpgQLS4JvY5f",
  "key33": "2R8E7FvZ1u4u5mVECGU5kQqMHHgDsFzkfAJeLzRs4oLzcTsnrPqXPt9qAC69jSKvxieTUMKZFXHVgPz9NTLNWFAG",
  "key34": "moF7jfz1zooPqYTni1p9Sz1DyXHjkHNocMksbLLHSn6JbpEMYdATQpKmZYgznaiwrkVUiGfGAy1JPcFvsN5BmPx",
  "key35": "2WevEhBcxsmobnUkq2g5DEphgfo9oTiArWR5iddvQyf2XNoNNEG9VXtJvD5SuWMHNrTMrYYLQSh8nGusUaYnRvGW",
  "key36": "3tXMKyjpFhuqCYGYBttt5mvBkqG4Cfwi3mAhrUTMxPgqc8L81urDqhRmugmSrLZEoYob7ycNS7Fp4pJCiMSz6TPC",
  "key37": "2KkUkpbxNTDuMQ8WMcXaD1w9NcETPCcBVYzzjwz2ajricBZ7addSZf85GFRDtbgfKDhmB4L28oq3wDGHLHjCzri6",
  "key38": "JyQzEdAAdGn5oJ3sX8QzrC67ojMS8d2LHP4oFKppd6oZ62JC9Nug6UAhvKT8YfWMzZ5d2tGSknPqBuCPas64Qrc",
  "key39": "4e9pPvkoWmfH16ErdAYdCAFmwEYeRHn3mv9LsWmqF5Fr6z2NhPbaMhUomG7hG5knGp2Fd2pXH6u1T6KXtLkYHLva",
  "key40": "3x6Xce4iHBiAoGa5nDNwy1VWzj7Pcb8F2jq8YzdMJd8H9FsctQ3JxmDNMfkkPLhSH5w6uHZKeCFvSMnerLAH4X2L",
  "key41": "2VtKVjCJEx9FV4wrPVpQ1hixP2boLhkFvtrGoDXnFaxU864mqSVfCtW9DTQGTLrB7Fphz2rYaXFuYq1PhjEMDAnL",
  "key42": "mcuwEwhbGwP1yjLuXAZZHQ9Yu1qfBePUy8cmt727W6kE3D4dvwBd7gPfghwz2VqZdTfdFoJfHYkzVrAaUkW4Rt4"
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
