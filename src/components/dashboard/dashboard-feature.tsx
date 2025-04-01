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
    "2hvjQPc3RZexNeuDffArJW9WhBXng1fLRv5Ec8i4Zm8L6CYxDTM4kdJKeqLKVjQjthmgkL3Di6hd2DRaaqXUhpdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48uGw3eLBf3xuBfRyeFhCBADEAgoUKAiGZ5AheKkzK58bnu22HKhn2Do5WM1uvV3Lq8QbTpFaiCpvDSTziDvtVLF",
  "key1": "yF7JjfMt5yKPZSKUWG7cnBwv2P7Zi91gP1dw2aUXVakRJqE6CXhVdGsgE8e4PzQZ6THUF2LDvfiM8bDGMjH8M4E",
  "key2": "44Tahq2NPUc9H7f88zoVPqevmVCBBAP42toFeZq6bsWJGqh32cM5gDpgJuS9bBW17hATBq5BjkhKJcaFvdHdAu4U",
  "key3": "3Wt8WFw3QrVLpKsi4f9XZ52Z5ZmK1d5cPsuMJ1cgYnKLYrENgXLvGeJNmL48VaEB17ByjCMbmuSgEY8K54kiyV4d",
  "key4": "4KV3mpJD2yXqeau6GtYdmbzuXXo78DjzVxVdY3rdaTpGK4ra6AtFiAw65se5cNCCd73zgMZcmo2GeYfakdd9j12U",
  "key5": "2BP7PoUVcZhVL6VMhYR3818t29LqceqfaEXu5k4FAhFymiv3Pq1g7aPeQAzSPmPDTdFzvFWcfWsAnVpGMPJVBaM3",
  "key6": "4fnT1KE1F3UpapR2TXBDzRrjCrSePqcLsnjicidCaqjPvuAjANq9oGGUm4YpDfjR4xzm8P3qEJQ3aWJiSvypzypd",
  "key7": "5shLEZ7ix4UTpYLo7m2WCjHb9sEJNcsi5Ly5PiPFN4XY2MU9qooJvpdav7iTvb12ygSQ84VNDn7fKyspvnvYww2A",
  "key8": "2TvkUV28vYUcHHue24biejF23y3ADDA6skqvDdzRNc6p6AKhkPnYLRfuqgMcWLW2XgJLgn8Y1WVKrPcuAZAnTDvQ",
  "key9": "2B6XK4ejFAM98MXagysNMZoYqcPeoNvyhnuE5ZDi6Dgwp5MFpvw92WraKhm8buKJtPdzXUkRAEzuVa3EAYGgP6eA",
  "key10": "4dERDAs2xXN4qkpxcoDnDJXZcYickJpwAAn8Dw3S6EF6FAvVXNVP2Ph3myg524iwmTeevJx2SUfivGGoFP9DpwVF",
  "key11": "3ebpCqwBuzfime4cYSCaFd2h6mPs6mdiRf8qxBVjJpiTuZiozpaCnWzu5ttu3vTTLnj1Y5NKn52xswBJWfDL9Ats",
  "key12": "3bKCoXyJ3ZTEQqKUfNP8pGscYZCHtfckjmFcQAwo3B618JbxWTdvLx6ek5kzqGxrdPCc3UvHDg3ecPbXnUF9jNvs",
  "key13": "38kkkLXeSuVCo2pBLUeJUPn5uRqV6ZwjYWZr1284R1Pe6gk7keDNcaQcHH4ixMmFvm8VGXhHN63vMLjieBKvqQWW",
  "key14": "3fWp4rK7EMEK7S3uA5uhhb9x6XLPX49mcG41zVqYmcjSgKBkS9aj9dy2x7pjwc4LbbPxESTJB5RuWb88HX9AFyUe",
  "key15": "66LofsV9vu2WyABDseaeJeH5XNPbFzSP1F59RPhKiT9ZzP4dg51ntG5nyQ7aUHZt3icKFoTtVFSdzRfPi6TUJeUq",
  "key16": "2bJ7y7gniZrhcFikdN5FD8jvaS3CRK1qBVYTDkvQestkUDVptWZho4HFxAHtKNxsXRGQ91DSk9EPCQuirWKgUDXU",
  "key17": "3aUv6PFxHa5N5wu2vtcNpt9xSXAuV18fpFj1bHcgzAx1134iuvNgWZR6LbuGyHRWcy1eXyXbYgfHu4rZz125yNJk",
  "key18": "51bS1XQmVnoecM3SLZg7pTyvv4LGKanRDbZK4ntKGdsTvFVXZNkNBjUC1MtinP5tA3RbcoJoGmBjMeSG1P65xJ9C",
  "key19": "3ABHZvXvNcU4nns3RwmQUmG9wLcnwMr9NzaCyrqnWyqE79i1vv6EGh9uvHBrvtR4xhDpNNmRwKGJpW5f29F7FZX",
  "key20": "4Fx52DapjvHfQU6AWXHyZjeT75fQataGaY6Fg9uvpf2ZEWiVw5j1zcQVMQnRhzuqU3pxB46ufYJcMHHZeDZxQqHV",
  "key21": "3aCRSTWp7zwozdnNPUzPJwdpo5wPSN1htchXvm9gPLP9GXMUjPcRncjkwxGGsxfZ8tc1Rt9vYReq3MqSopDWfGj1",
  "key22": "5uQrKWaRdg8QNWNBGC1D28QxGX5crNcpFQbJKTMnzie5XG95earXy9WuX3rJJtAKSUCTnJwCa4gob22Bp6LBDyeo",
  "key23": "cavJ92kAhtLvtVQe872v3UenTBnudtJ47PacjkGKphGSjHP5V6MSCkZ5UF1qB1jLGvJGaVEXh6Wbg1jENrYvN2x",
  "key24": "3s1VkDRokecd359bsUasEuLGQWW2jUQsAXEKgMwzGGwQZTXRPGznAjVR5xziUWmSenjuUWZqZ6eekUsDm4ZndAxt",
  "key25": "2dbRAkK7Q6u1hXe33sFKRPWBdAvW2BhmuFRZpjvJHgLyHbj7dMt4MJzcUpMeLfCL5cXiN2KsuwvizVUqRWNTmkaZ",
  "key26": "2WeGXYaqoN17G7RxFJ264pneKDpyKWgJXn3vuWz3S6uAQuQ53eykdUEXDPik5mHgro5t66avbi6ZRE9Ht7ViQqaU",
  "key27": "43sCsq6oP4QrX7UeDkHPcL4oPAJT8PtKTxLLnCMtZNqwNiige1mN2vaCCVq8YAhUCf92EFYJLroVFgCWHXhZW14w",
  "key28": "4YpgcKTjuQBEXiUu2yNkLzM3vjDn8SNFAYRRr9ogPuubQuRgXN8rETzp78jAePUL6GL3yCMMBmSYWFy78bpCEMK2",
  "key29": "bkxUMKw8y3CTFHfEAbYHdNywD3wyv2v1KSoy2ARG2AP31U2xK4YrF32JePvXcY65aALC4PniT1dTfd3z4trSY9B",
  "key30": "YRkD8em9HvqnUAVrpxXMtZynK7V4VcsuLLVeKBSPqjFRms8GpspEoHXnVDjPVM1bzZ3C9zMoH81UEPBhzDctCEj",
  "key31": "2gRyB2rpMko4QToo63RJ6beKXPSWWtSjNBTm8AsAKXtD4asPVWqmaBV28wxLQpuC69Y6Q76gZfwpUd2KDyzKftFa",
  "key32": "4uDgLMZN1XoSt8AJHGT4NzYYi2eX9i6D7mJFqotZG1uwC1nvcppUBVsRo93nxDuRBE4xoDXEkbZBCqB4m8qnAe6i",
  "key33": "4AQ3sdsUM3k48yNdvoNqkzk37KoQC6dSgCH9zmBfdUq3QmmqQFM5FiuCGFqWRpbaiGUtUcFU7tkYSywtdZZBUogs",
  "key34": "4VGjCsAhx6bjjPCfn9yTegPdmqPEzeBdgBJxDTUgQFbhy6czpqEbAizkFYbJuodeepVfzTgTTpHKh3r6wQn2Tpwv",
  "key35": "cN4jKT16dq4LTF9CAvtJ56Si7zfC4xdrbZdH9PPPvUM3EUwo6AziNVGNRmEFgM2YAeSiV8eKsJUfgx4R5WMhQ6L",
  "key36": "56iuqWG4rffNBKKEj8u8hx5xhyihr1WDDFXMeuYy9YPRDYfZBay7EeViCBwsFaXiRtgmjYcLFRCPjX9rAtg3D2rx",
  "key37": "2XRxF472hDcFrP3TharApJz56WjpqonHr5rm8W8ZrkjLQT1LJWqhPDSMu4mg5eWPXtsUwdh6Bkz7eGWvhbZrvvwR",
  "key38": "3sHpncMtVnFhtUf8f45LBRMdYV8NogMdtJT8YFoUh4eZYXMe6ijqzCkezf41skzVNtt24dNq6if5bV3ihDS7f974",
  "key39": "J6JPuZt4wrJoDgMfbZZ6KmEqf7MB7GBU7VaHbr5fmWPH9geRcHC59jnSH85Bot9pJyLDDGRmxQqPmuZC2UPqKpH",
  "key40": "4jF8M1V1KcHWU2zFCSTAGn27STJT4C9W66VXxJfpsapwJeXQCywFRWUZv6jboohHEkr2RcMNpRvnvCFAn6AMWWiq",
  "key41": "3N39NNCgRLhjDUj3117oqVrD4iaP6DDiF12tggeK19in7MzAqYtA9X73e3xSBjadamLDQ27XV9Km9heQU3RGnxRh",
  "key42": "4zQziGvKGnPM6aFBmPvRhnwL1US2cL6FPZk73FoaZMqBReUfkzF6BYctRFQHsFGXunryog3hfKFLbHZcqNJRcwup",
  "key43": "2wJDKqqq1mqmUZ4DHQ6A358A71kzAqfgTJhHTuAL965DgaefD8fBVoaoo7w21tBE52WVjffh4yLDSmbzDkWyyeeW",
  "key44": "2ZVrD7A4xrpXs6VHqcdjWbmLBGN4Gez4krWei1NtNPoG4134bHNKAMNV1cUNdwCANx1tQ2bbeq8H3rk6qX4TqRep",
  "key45": "5fbZw6gsPcYH64ZAQKh4vCMCKeXqywggz9PRrLXbmcdptkmX3Mbmom5WioYKEANi8tES6RWC1XVgoAcJPi4RqSqf"
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
