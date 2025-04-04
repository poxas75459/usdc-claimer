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
    "4BQ7zqdpNCyqsAvzFcM4iPLJfX8uYj8yhhmBDZkMRuJD5DysCZk3PqWD8LM1crYjgWsqD1hd8q9bSZmePAaaK13x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MysDepx4GA1ZsBfxoJfVxNunjNyAuGPoZGM7kus8PP2zLzqx2GabbjikqbwZtzizgDozRWNjqHKVnu18xVf5Txs",
  "key1": "575a4sZ37H9gKed4a7mEVNMtuFCxSQVfEPqctc13cEgeRyu52PqkRkkgmZ6hj6uP14HUhoW9PEzRFP7Wiovw4ZoU",
  "key2": "Jf8Kmo4ZXxVEHF5AEAAHNaZtsom6TF4txM7dWThM85BNQksT4qAenaqgd6zAyP3H4VsgY7L88NwLui26VLi5HCP",
  "key3": "4EN1TiK22R2aKJ69eHDPkFV2ugY5JxA6qd3GuPGYZ1cMbvjMXjFZsmKcrXtPcqFyQMLN4zcTmYy9mXV6ZAtdCZou",
  "key4": "Y6wKe8CHAgCdPTCrs21E3U2TsHZUG5MV6YxB7wJRx55Bg2GVwhWR4x9mWLcLjn2yVogzscMaqm7cNqfwYL9EHgB",
  "key5": "3sGzmsdh3CxeXsntHNqPeUUuYb67ZeSuM42U3uhXChHDf1XnqQX9QGh1u1mkrwD5JdrYfDMbSFBanTAT2F2Ti1HQ",
  "key6": "3s6XvimbThpWdS56Q8e3sw934TeYURhAv52kZ9aAk8mfkaNvQhpZ6Fm8rmYHBwPG6Hzp3ofcNZ1ckRN1UzdfdyE5",
  "key7": "3BwysvF6ox9NfBvqa9PUMRG4t3BkDR7F5ydmHS5eavXpgaPT2rrU8kCoEfP2i2V9NVzyHYS7j7ksmLqMYbu8D3P5",
  "key8": "3qxax78YP7a7HwbL5pJrNgT14sL4FL4MLthYwBxyURwWf67KGWpHSVaaMo2haxGuyj1NYKm2ART658mUDqxy3VmX",
  "key9": "638sNszpmfxwoaDSxMLYzXBXbBo4MGefwywChF189YWtftQyPQeKMWBcjj4s2xhKjqaKXv6iy9JnpshZ3z8NcH2W",
  "key10": "2PLdR9FL2m7K1jqhS2KS1Xn3NVGWZJHWV8sfTVj4Jv1JcQ1xNdEjNgUfxmDSWqjs49UCvRqSgwranp4he8N7FBn5",
  "key11": "678JpdURjxFBVGs5yGPbvMxK4NsoM7hhrgAVWqBGUKKp1AQipiPC8qzFXeFHiFtzuKGmMxNNSCMNVC5i15BBacYP",
  "key12": "5G8Ag87cnt6EqNDPd8fRjbTWAfPRGLNt47cVQYac5dLLeR1XRnBJ1NkBXRLwKYbzVTcJw585NT8ybiB7QR5aEijW",
  "key13": "5TR6LkCRgES3uUTvmCZ3XBJ5UxH7UWeJaiiLapXvtjP3RRNt4kUNsoQabKSFUsCpRfMRb3RrhTEpfvJJeMvbCD9a",
  "key14": "4tXaY9rmSyQ8zLMxqKCS2HGkcsxAPa3ZMYz4QdyXUNhhDa4P5tbx5LzM49j3SBjQPuF7fAPpykTJ6h5XxEXpUG8",
  "key15": "kJDkt79h1NtDf1v89rbhURZtNN5UExJM4px5QBND53oHKTexHaYm2a7kADNz7VdvChyZqLbodsWVeGos9VRFQqD",
  "key16": "2FZBStY75HjJthbXVtqmQHpUpzTvbAffM5vXVtwCSiETbVQLNXnQauqcgD9qrzgqcNCRrQsc7LyrLyqTag27FTMJ",
  "key17": "QdTRYaS9g7vQWMFoyXRxh8hhSJAqWQGSiDMp8XrM7N7PHZC79CjM2FGYRtn8qRBfdWnHirUZK7fBwtiS99voHyA",
  "key18": "RW98eft8TMz9CrjM2wn6Qassjyk2ckfpMs1skqFxunHPKBPdrvbRsLCUFRfkHwxH2iQvwTUwcsCqoHWp1dEyfcn",
  "key19": "62ojz9brhtmMeVCFpAjQBcqMRwW1tFQdWjzuZEpW8DzkPHiLnLUxfWJms3ypgheBhDoZzT2kwkKTXCKmCovXseBW",
  "key20": "54AEiCRwCFQPHv6634N283vZWW9ysi2uigMFETW5D7gvBiypDx795xDU11omzYU3U9pNzhGnqTsMbq2RwyNR6MJu",
  "key21": "5hKTTmFLKvbqYNbuarR9Wrb6ZvUYfdoctzkxpXZ9xKrY54t9LeC8XXkWVLLYgwi5kD3EfUtRnLmH7zM9jDNCgorm",
  "key22": "GVyaXJHeaTmosRnpjmYnTCpKJBjA6YTRr15cKZJfUEGTxdmpNG8ogyYoD5Zjkv385jWBBt8FGEXKvXfP49zKptu",
  "key23": "2Ch8W8XdzPbcKSrcdJZgpjLoZqQxsyYsDJFjJE3fUmFfEAdiPG3HCArg2V5BAytBYRENNbceQWgVWkvg9ZY11Zq5",
  "key24": "4xnkG4bkLEyFv6QjcPcT3SPPbcTQqhGDbhBx3mjDLrSeCxJ1EttpbHKYDoJQpZK8ur3RZbd1t6cv7VBMcp8rFmZs",
  "key25": "4v4fNpEms7nYCxHNTkLRG5imLVsuwqMuFQhwuSMC6Dnsf5R3Wvk2Sg1ihhnfKtUkiWNuRgSdPtEgJ8TFijWyrnB8",
  "key26": "5cKk8U1GS29cbtHc7GcX8b4GKR6gry1acbiHQbKKBD6HcdgMjbWLAyWhLibVySNS5oE1W48csLsN9qcQxmuBHM9F",
  "key27": "4HFc4npKe258DZc5atyKskx6vynBL59zJK6D1sxCWXXPGECKihawtGoP1YV6G2V2bZUhmfTexx7Ze8uPFXhvtXff",
  "key28": "2vrnnDF3tHKLBkfsChgSiU1hCK6P45NTpMVqJu1WaFy66Ac9q4rBM1SKW9vVianZfzSoim1om4fYX9vnpRTaSGCr",
  "key29": "3C8Prv1T4kdg5BwTjQWwNQCBDNE4n3aGndrmYVUSLjGJCzfNJL4i6myyUKkhjBW8uQ6P5FKMkGgV2K25zzjt6Psf",
  "key30": "3tAfdVeUKmmWbu5wbXNXReJ1nPfLAe1n36Ph9JEe5eAyYPBNGNNXyAeVh9HJmMRsAtfCEV81B3MAhAYMLpNEJHwp",
  "key31": "5Mh6Nw1zHiRzwWAtbiz1EukdiKmkH2QXRSdx9N1C4TqsUyLVXSkgjPT1gRTVvhFjLi1X1mPcefzXrfQk5bUuvpZ6",
  "key32": "2HgWuFov9LxtkEd61gSo93U2psSMjWTEB786NtMKoi5b6qV4DNJUH14QZrQtaibucC3eswRecArHX3eMKEbqM8vh",
  "key33": "2EYiSEo68C8fwdkFea62gB6XtkAA8FubSFkFm9zPDpVg9v1dxdRZQCm5Av1ZqSiwFRxAE8sNdwmCT846ZYXVb59v",
  "key34": "F2Di84XA92Q31rxBGSh8gzVvd8V1BVjGWN1upCxm2xBdw2yUcSpAwetzXFq8rRJ73FrFUeWyA1KB2BX3YvCtHoZ",
  "key35": "x4zmQFX25oRnPd6X56REkvaLzXo2SEbVzsjsRQDqecRZoh9NAyRbtdDsYJE6dXRpMeGu4w9BDDujAVwvq3aNGMJ",
  "key36": "3qcakKNQwz6LARE55bXW1t9xNcobtbXr5DRZ3UJQxdDXtztWB6uEyaEpYhmjoB3r1m1SVR6bveZMVk1mPRq7v5aF",
  "key37": "Q4u3Bf9QqF7BwftuFPJwvz6PUHsmVmassZaQMN6fj8YinniwxDknfpWtqbGEajc8qzaCJ2WzVgXDk6jhJ5wXzkW",
  "key38": "3c95BEREKFpYDn2EHXwiEjQEJDtdWtJFyRoMqNYAwPizyDa1jVcHeJJGU9dfGj17p5B2MtSy6jJxVXgJcjHdEEnP",
  "key39": "51v3bxJYTSVeY5rZfMLfNGM2voQ6gsP6xCSzhws5GSzV2J2RhNMVLDxamkBgSMG6hSCrS5BySnSfoejRc6U8YMrq",
  "key40": "5ZEWerFw7vCWSJe8t4M9wT3SfeJmRPQTR13LN74U2ye58Dj2VaYeDBdMadPiA4wjVebPcYVeZ7bjxkhCCRRyJ92y",
  "key41": "4K29HQiVTC7rNhyfeQYGjUn6Hwso37BFh3UGYBDNzmMJKxrmYV1ETSwbDHB4HimWxxwYVMdbEaHi16kBJqMK8rfs",
  "key42": "4aMFKY3NB1ey77wbYCL6nDCj3UGsGeXnwVH8cJdyYmruL2WT8mC2Ze1sBDScP7GHv2uniLnbz32McHMqkFVieP6A"
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
