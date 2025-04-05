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
    "5TSz4uhfG3imYaE9FDRC2Dq2YXXZfb9wujFxYYYuXXFYS7Uk2Fhru5Fz4uPPYiFwfAF8ZNxVVMGURM6M8BhmzNAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sKtTA2W3YbB94QvwZdrVVnW46qAdaNjvGDLZFcJKtP6EmnUDCd3jMC9mtr6f89Zoodzam7uacCNAE7gBKaoXWrN",
  "key1": "38yfDRxYpRcLHWkCC8MUfp44DE4PxjP7D8chHAzs71refEznawJsoMZaEvNPxMicMgfQWGoY48VgaWFYxLvQXBo9",
  "key2": "2cs62hJNAwWL7F9gpyiUhAyuiygYjdnD9rtrrwmKrEKYm6bbVmxbdywBjnRPcLETML9mWTp7xWqVtXnKmsajiynj",
  "key3": "52GZqRuqfuN3v2xG2aBEt7o2mVgGa5HMKAn53ymB1X6662tgixxnLKqe4YyBy8QS7vwp2Zn1FrGgfa3XiZ7LbchR",
  "key4": "4G6BF2zEXm71sKVxW6bLNZ5CyThcafgHqhQaC9S8N4xSnXDKCBKv69gusfWJjeKY829qqMaeusHiHfcgzXvsoJxD",
  "key5": "RspbPy99FTBPGyjDT6MJK63ZZVAqnJk38Xj7rDocQKBBaKBLC4t1Qxxz5CS6wppGiCGToGufF16Rvh2kW4gvmRp",
  "key6": "5viu7xzT3RT3d6EZodWgpYB1v46sGNJNHCNZs6vZwiAMndHkpMAQukz6adz46qRgSpkFACXdfnwp4hTEp9M1A4Ds",
  "key7": "5uLhDkfBt7hCctGDpXuit8LRzDuvmWB72zRckNKPa2zrYPVKEPyjdsBQEidQDKJquqFz7TXPEzXXZxQCG8Soo3aD",
  "key8": "5Rtvf1cqcUKvtD2DdrTWuFiEmZJvPTog9mrtzaefqUkw6W9ZT33KUkaZdKCiR6w9DVBtQFEbAzqjYbBGmzGivJM5",
  "key9": "4YvLcn6b9d1crjH6ffda8U7bqVwchiVWMmqEPVdUrRJfH1kDJcFGscwsfRdPF1NHb2DZLB2PndoBmjAcGutLNir8",
  "key10": "zHTrXtKYQij4FfmHXz8HX7Xj5J8yteR1ZGFCKB2KQDnY3L81cMM6eSPfNJx9MFfqySv34mfFjkvjyo3EVkyR76N",
  "key11": "3iXp39USnTjuDter9iW1zqF1Az9RCixPD18v8eXTnM13pbo86VosarhydrxfxXBZ9YGTee83WSWJSvJkk2FwFzdQ",
  "key12": "3wFazwjfwj3MRL9Hcj7qyUcphNxkhqJqmVhecZtXvZxekMgm9PUe9FDjzbJEUQLpSqCpHvvSXsai5mSE1NoZJ3Gj",
  "key13": "5r5udVth6iPvqJuF4YfDgcbFauPwKJhBrLHcawyd9NyroSVL96S5eGRWYkFu5eF9SBQhShAigSrtpHP319Q2mVzZ",
  "key14": "Ja4xDGAivAPSt7McveLQxapYYvbJ3ZDnMcDzxs5QFnKqHef8kUCWHHJ5HnJjy4r6RjtJo9RzNBfLsrJVzmK8M9N",
  "key15": "UJ3z9xN5WudZQQau3afUrcdA5cHfm5zW6LPayABVUM3jne2FLmFfcUHoi2yQYgpcf5H3PRQYmDitVBAPHo78jMM",
  "key16": "snbMhqkCKZooPboGhPDDdokVkN8nWoXyWxs7feKuMrvorr7CLU2wD52KApqbRkfiuunanMHTAuuBiUMuPbP7Nx2",
  "key17": "3HggFsTyvtogpjxpb2SDBFN4XaWn7a8tJQ6GicHhQDEg7WCgzpW6NvGfGnz1HJxahDuqwMpV7PZqESwPeJWAZnVj",
  "key18": "3Mg8MehD3seHGZFKFQHyGDtooVy9iFPYQN4vwwhQkuNC35GXRrD3H88VmGq8DbcHpVyqkidvuDJmg2YWeH6BZiqn",
  "key19": "q9b4KDRUWCV7eJV2fixbEXvg8C1gV3Epno7JN1Yp8p1LugzGhbniNKKaYKRbD8qxP4TCeX34k5M941xopGRsgNr",
  "key20": "MMxXzXyWySegX9CBuroXkBWuEX6L6SNM6vriTqV9QmM7WuULnX3BbFLxtaCMuivSvSAC5Mt2GkfJYkTV12DSugv",
  "key21": "2Xbh2uCVx2XPMzPVz6FdMMXDmNN9dWMdSBsVhL9CKBkZECfVfqMd5SahLnkAeD7nVpfZzF76kQpAZEZbcUzgajTR",
  "key22": "66xAZzrhnDJoPAgdKXmP8gMfv115bUq3r2UaXFN7ZZc2xNRmSw18NsqeusVWu6Pp9ZrWg1vRhfTCCBQYZkYcM8GU",
  "key23": "5k1a4Mm4AUYAZtwma2j8sfxH9i5KrhpT1DfcDMv9LMmLy4ebgmByhNaNj7VmyPH812ZeV71CFgTHCTkqdigTrB9o",
  "key24": "PAkvjHteGgxrm1KCbFmfV8f6vqmLRT2ocGesiuBQ51KEM3eEQ1KducfCAse5K5KS1Us5mQ85jaaws7aGPe6tSg4",
  "key25": "53aBqrS7Ktj3zsSZTTy8VthLooGL4qVtDYSvMU45QKPuBgDYXjNBze3QARE7NYAUoTznQpGjkaRQvNUPmgHgsTGw",
  "key26": "Demzud8PPAiDnDo5Q99LLcabArpWzKAERuxDWH2gotVQKLEsoniumLu4g74oeVApF9dA7tUmfgyaBFiWRSdfA6n",
  "key27": "gN6j2Vcp4fxurbrKetp7PvF8UnSXmGNsyFK8M9YA7XpLm1ecFnfLAGkCsAayNZaxPjspbbMJvxB9fnrEBSt9ZVh",
  "key28": "4VemZmSRZnKcjhKpJ8qxXa1QpaAsS3pBrWAXDCvnB6gTS1cVqyLam5uAPCSDEmzLbrMK4ifubCdEvAbvstvFSvc9",
  "key29": "3ScJ7eAAQ3UmraaDGDxE216yNrKsnGy9kdZhouwfL1NkLvANfckH7tPQi1CJVxQ76gSoT2iNhSmToEgAfRPVeaXg",
  "key30": "D5EhfUBTcyV99DTuBBnNfZw5BKsK4jaUrALymsByu12utMMeZpwedcLPU5coj2LzuC3GZ59XAwhRuStR9WKXK4o",
  "key31": "2PVCMVp2txQzNL84BJGQvR2Azjt9641bRj8EprPoZaN4TqxS1eorNwb7wnoRv41ZDjufHUfCo1DpwWskLHW1AMw3",
  "key32": "2QpqpP5P7zwvQ69nuNv8YWWzEBaYyDySCb53eEadgaFqggqpZpXDFJ7Kvah4sZeGzSRhFLC94fRYoitu5pVoH22U",
  "key33": "23KuAHDEHjVaHpxUvQd2oSKMHfG9GDmP2yu9tHeytMtmWiMjHbf822x6Rr2SEDGncHuNehbrgaF6mtNiBipLaMK8",
  "key34": "29JEAo7HG6H1pkc96TuhhZSdbHnc2xrz8DLdAtSRvzaiuQCBSQPegY9ZA4YRUjNesFjEruesiFuESUe2qRfKcZXH",
  "key35": "5tXLwWU9R5KxevzhRCTaka2r4EEnmdkLE3qg8U74wgN2ETdfwQ8ppQDa4bYciY9XUkKfjkLYvjHP9tiRBDmJmTGv",
  "key36": "aq7vpPpDALXLuzLo8nCipJEH9W1r4NZUmns9vVdBomKqeVs6TspAnLFRvHmP22Y6Nnbci6w3D6pCvjTrnXujwbo",
  "key37": "47xidoGEBCm2MNy9ZCBRFmkrMy2byjwurRzY8H3QgGSK71r2prGWorzQQHPRjjQDgQN5o4jBSMTTqMskDGP4yPiP",
  "key38": "2kHyxLXQKBpAAHJouQRo8SThPzdWP68yfQeS9nzsrDCZsJhY2UQ6Hf7gzuphBy9VSdSKjshxvUdSd71SFPudo9eq",
  "key39": "5mE12E6QuDpw6S4yg2jdMGqzbCfU558kRqWr433TAEqhHCL45p8FYbiyKCeUHZkVT2aPS7XbtA23jccxvWYXtTZH",
  "key40": "55mQnpJMvEpuw178hyxWg7yZBAvaQVb7wQZfutuTHNys4E2jH7woFQzPVkkHA2ZHAGGdqU7FvZ7BYdWomVLzKBF9",
  "key41": "4vvbQzNEFtoAR5tiq55MAfahve6j8EdxahoiRMhcSRn2UKJq17ojBPt2guoLW8fwRYaMnyFBmotmPWrPBegjpLuQ",
  "key42": "mo9Ycfkmr15J55NnGJAVVerkFVQ2jJCozXKVBSAfGcjqc39NTLyjqLx43vhwXWvwRGGPJzo7A62NeE4peFoA3w3"
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
