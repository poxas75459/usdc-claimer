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
    "4yS7W66BfKudu74PYXR74Pn6VjmwVkX1ivK3Q9FQ2Lsxro9RA1JCec6TTvdUHGh7FuuBsQpL2yGCEH29sqsPFFLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUti6aP54Mc4is1uh8ggrySm4WJ5x5H94BhFaPwZ6tzGTqk78C59dhjpLPvh2qf175J1xJ5P4dEWp7rBveWbybU",
  "key1": "2g1uQSPqvmGJ6WdYtKSk1ruoum8gFtW7QDDDPfh1sVj3r5QwtBufevuxxoLwKqY5ybYxf4QxkYP9uFfnJGGhGNys",
  "key2": "5gYocDxrfDTNHTzzgaYamJcJ4QuRm7wWrKsTHp1PUaCC464xJWjvaSxQrJeXDdmkQYxNnFo4HTQEu9UVVC5Uf644",
  "key3": "5E8fsZMfeyz2KMiz8RTiPEeGyP4TfMTp7nDH9qF7Rr4Mzx5SLNc9rZymKPNSEYquaDBsqZJ9awMkTsXwzkZsc6am",
  "key4": "2RWv86E5QQ8EsxJYyLi2bbCkrdyEUJCoykTnQ2morDvR39KoRNxBULo3GXLyeVXb1N5Tp7Fwh1b76atH7gp85PEK",
  "key5": "25bVgCSJc6YbNcVMqqBi6KadYq6J8neNJFzQY8MTR5Nstt8x22E9JbDPBYmu1KCZeYThqJARAV4Y2TB33MZjKV8a",
  "key6": "4awRgYrchQ3rTSQ7ybrg3iRP6KfJN7kZ11sF4NjtLmBaWtkCFgbUZNeD2kcszroZmVJhUwdw61Wx3gCF19SBteu9",
  "key7": "4WiNF99qJegF8VyrNCuDTQWUZX8dPDPzAnYoT6nisS1ERcXtj8irGyPN14SNkfZugC77wquUjQMhniPxvpjptkxz",
  "key8": "P8AUiVWBYvW6J35q1U85XpdJSNcRsn68pVmPm98YT7swvGhL9Gijk51cgnsh22s9vPpqqoGABL6cU24oQFwXtAN",
  "key9": "oBHT8xFVDgWZx2trK24kh2VKcnEzHXtQp8m1v5w349QW5pCQQtU8XQiC8XWVU8s4M6myjsM1Ze6WbqTUgYMdQpb",
  "key10": "5Mt4xoDAW4r2FwfEgJXcCZidxtdGhd4MsPykNcTj7dqAd9EYKb2kvw49JLULGN2HmFhjSXdgEm8Xr8TrTLjfvh4L",
  "key11": "5ZyQhe1DDqeJ8NgDLJWrnY85P1EK8isKHj2NG66eVdsKPiSZ44fnsjZTLuLKs745L2GnE3aEmPdEqSigqkgB4c27",
  "key12": "23KgyuKkUExHvSGKExpWZhQocmRTxms3LhWjeJwmhv7hvnS2rVPadU2iiAcHwJoexc6TZuNT9s1EatvMKaNR2iQf",
  "key13": "5VRtm4oTHeShsHoE5EsGNgdpSYQFneQp9CgZqz2vNo28PbjfxaXpBRyJvF8iXSiPtKzGDx2U8yHp5HBbpqorruQC",
  "key14": "3reZFFZ1PkyFAvN4aHf8SDZknZ48snyaorvZiVig47GLb9tT2iLSW56fEwaViu6a3M8VqyVQQ4nhXuvdhYkFQsSr",
  "key15": "3hj6CnEGN6RHtHVp1zSQezFU7pWoePZwZoYCyK1tZX6t9EUSRZALdNfEPY71TNzWukoQez4r1kyomnHWrAVthv9P",
  "key16": "4XTJ4pCVoC4k981BQnkixZUiA1KZ1gyio6hX9AZYL2DyHjX8gkvx6iaFUxVbvKJTtkBuss3ZDyjXUQYjSqkQX7BC",
  "key17": "33Vh1j8Z7CVE6u9HAabk1Cedpqg2zCoiqtve2EEKyrq9o3cBLPDNkDzBcEQnwzF84fx63mMkSaQ9ULRhNwLqB6Bv",
  "key18": "46WjUBfKYg8p3iWip2Ctn71U3SmjEK11wjetk4d9nvMygjg5A7JpcojmfEfq5YqeLYJsiquqbAGYDEjXuL47nu6D",
  "key19": "4CJmjYXEWNSXTmnuJ4hE7yVRq7HbXrSV9AV1sJB5NKgHayuVCLjpg7qKHEukC9UHhxYbcEbWncxek67hqoSrkGbr",
  "key20": "21iFD21hevtgWwvFJmNjHPf7afJLkutgXWX6oaBXNeqNA9pPnS68JemVZHr4BmCqJdJ8CVQARi79vn4Doibnfz5S",
  "key21": "5iqb4cvTVkCodvh6QWpFYGxdRjNVWJkKFzYfS2uP9SBubcxLt8nrnQNL3LQ2RniKzbTQPmfA2zZX5VgNQsrmDxVy",
  "key22": "3ZLgSxxFuFdhTtR6GqcVccA78FacGAFURakSUGVjL1q1RuroEqp7EkH7ox2JyaURmUHhGaPLAYgqCETfzJ87sUf2",
  "key23": "4RMTrhzZqt69HRDQuEXb9iXeEt6f1p815ErCibxK5W6T17GSjXqW5V1CY9Tmkdu2wPJukcrQ9fzDpX1JXtBgY4W2",
  "key24": "2DShZfKQikLo7e9sVqcJcR7fxfkG8cUtiEwKXEqk2N9Y6TvYmTE2zfPmTtFGSUVish7Wy34zcAoWzfch1W75JaXo",
  "key25": "2XzyQurBS8EbNMV7zK6beYFiXoKbJutRbshCB1kL4tCRRwQfACzHhS76847oasVatoEHa3jtUZGceMrrUz9uewts",
  "key26": "5mhF5twEzteshBjvEkXfHaSYJ3S9J59AAU2BjpVbMNLpvJuaXnB7C4PAPJPrKtqEZUiER4rQRqdqvBp6UpEQNGCj",
  "key27": "4KD8r14VGRy8MurrqejWi5geVxC8BxoAasKMp3c2CefAenRicBN7gjJsh2whb3empPCSnL9m1Brx3yWQ1B5wMSZx",
  "key28": "2gZvHMD4tkdLc2oarbnzcxzpCk5ZdLyYLNkqv8RoRchaL3KR5jHQhZ5YW1vPDgM2XSbGhRuaK9pHoH2DuFx2mLc",
  "key29": "5uK5z89SvxNFw32mxRu3XyDMGd2nwjzQ9gRGFBAHfBdKdBAgBe8SD2bAw91arnCHo3EXVEkBKxxN85naYh7KDjR9",
  "key30": "5zv5ADZGUbbWWTLvtqMybh6kSuYkbNZWh2QmEGn8CouopPRjAxwGRaaN62JVXKLA2eqJYNE1ihikeqfkXstZy9jA",
  "key31": "2nMADnxKhPc4EUPatW1T9WvPJruGcozX4g3VwBQ4chupbJrU23c2jhUbHCj28Ryn54eVEYXstVeUeX8xb8AjUBrb",
  "key32": "5VusZmBz9DTdfoVnSdTbCSH4gVWVTbtZkEWhMXhUxyBZhVRHeMtJG7znJjHKMRt31tUNaRTFjRkQJXjC7scai3Fy",
  "key33": "5fciuLLkJ6WkQ97oa4aGP6XFUU7HwypSLCKHuaH5JzWsFSLkpqT3xhmoQsZa3zE5WTr7PGftD82c1uKMB9bKvoWE",
  "key34": "4dQc6MKAoQvPV3uHgcfECPzYN2AjPzkX1WE7xruHfmnvzUNwoihJksAj5ASi5Kf36EW46zo8J7DuDy4zyMm3gXBM",
  "key35": "5kn9ixyJQmDLgzDrCsSNANV3pRkNroSzBo2xE9A4wmi2C3faRgHd5TwJKeTv5bY9pJKCaEjN57Jc6UFYb1W4H7Un",
  "key36": "4W1anao3F4iA3hGessgFqFTRsSZpE9NESdAGeRsPnXFx9gMRRhCzg69Ux5ezAQ7YrhuYhoJkqWTJxJ4M3BxfmeKh",
  "key37": "Qr9pjK8HPqRNygFhCPDtKMbDVEaCQncCRntSnpaDBSDibg1Y17XQomh16EWdw5gzknzZzhyuqTstneadfLrHCJP",
  "key38": "4dje2FYAkurr2CEDdFRqFcUtFyfFZFbbeVe6LNBbmNP3jUMxYQV8QXsW7hSZsgxdMAi3q17GJt8vFtA9gQ5GiX8p",
  "key39": "4w14QDpKcY6YoZi7DRtgKXJ3PE37tDE69uFRPAxvL1GcasZiEkaE3jvyq2tDteyBMB9NZcY5seekn5N7bW8qpPBa"
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
