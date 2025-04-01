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
    "2eVEPeF9zXLiFQGD36xwRys3F9PLJ6xmq19EDRknZiM7bhWFKm1xxm7hBdRNSd62sR57WkPJavB64MFmN1XP69ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PkRXgPPGDYkkip8Gio2TYHjFX3q1HvMS9V7TDzkWe3dxKYwe1gxCqZ9xn1E7c8Qjd6vDktsBXMsmZMcHMETjpCs",
  "key1": "a1WqED7LvhZAhiNfDPHqEvELDuz7dMessdenZdx4783DH3pqfXxccEa4VGyqYAciwXAWFpHjyn1HErtTBruBuRq",
  "key2": "PbCxUPTGyfZYe4eavUnePo7PHmeve2btLbFNCtqcQJ95W16JdbSETudXhDATGygnSnE8d1iqvEFVr5A82iHtUZD",
  "key3": "3N9754sxC2pdUkXuYZUuBSg4kWb6X7Zq219uuz5ybXb4f8RvY9RDbVjbyZcm3A13GPVyWoN8X4TB9WdASYcyvsWx",
  "key4": "5ELU8DvA5iLGFeJNLW9fwMGAdtD1SYCScuWugiqRHDaawbykcr51RLNN3dgBLZttK2ffRErnjnMfSGCyBhWFAVby",
  "key5": "5B52fPg4CJ3MSe8apcSqb3eAoNKWmY5yWNE2D6a81eHy9tXiyLbetgu7xsnyJwiMQy6eRAbYbkxEYRjnEXr8LTu9",
  "key6": "2zuYXEZzFPqjDCH1VWeV8hxNm9Ygy6hch62rRpgFeRERje5WCF1q7HeY4rKSWi6oTGTbw3SXewhFTiDnQ82oN4j6",
  "key7": "QH3ToYFbafjKLnDsaZbU5Nhw4Pbj4EhPd2BB695deybv1mikFmgjQkMSTJSXGymb2F6o6tJFx7Lyi1A32X5bWub",
  "key8": "3PGt2LoRBn89dXhJ9MLCdxLoecr2rFoSoYhkXUhpyq8QrdtwLzHJTDKohBDgnzwPfxWxscShmnD2TsPgPVBLfzqU",
  "key9": "3T8hGpkoDmmuuJvESGjShAJN4Jf4EbgNPRymgAvmmGBLwGXAceqATEqSDzLH3iJjEeL2icoHZ4gbHuEzF2VuCdU3",
  "key10": "3BibATVUnkg1qqgvovSNJeC3Kbxn2tsMhX2U64Zgyap7izB6deFNFCUTFoPkhaRfdLAmeBBefMTtazrKM9ESjnxH",
  "key11": "VNYEzCtnpr1dmvBE3Zwrn7fqhMRnSCFKXo7NjvqViw5c3x2z8d7xt2wDydd4BCsbHE3viErCgLTSfTYJFyzjMGN",
  "key12": "2LCSbVbW4bnW5319WdWDCDfnFDpVzvLFS2F7tGGMBsShbjXC1qGjvyB8R2FxFNAWXRtvqJ6CCre9NfVNQgQfRZQ9",
  "key13": "XoHFfp6VtdKkpyYdd7Fg6kRPmqZrbf8RMKyMqHC5SHZoybp3dxE8DfAcEFfeJYQaSXAhWVrWrqdfTHhPBHxerWg",
  "key14": "2Fq4dqDTioWeC5vniABHddNp1ESTYdBSg1UUGkbZ6L7a2cj4qA3Zipm1247p7jwTAc73VpVv6UJWcp8MUdreyFkQ",
  "key15": "3P8D8gnKapsLTrwoT2MoGY5VcX4BnpJVibAZtncht61o3ga513hwjgrHW9PGjdTEmLrqbSeQSt3ton7VeT3hvrRs",
  "key16": "3T3EMYs4t1CtduMuv8APJeDCdhTQ2HnH8sxNZeF5fUwxLVdWeckrD5AHbdngwmNtna7d77BNSDNDXjjHYEJ8WQDh",
  "key17": "23Ur67XcSCUzNifRqZSxXnXtERBj8J747U14SLJ72vCEMJ1wpoib6YqXp8bDiujeSnMAL4m4Grrv74zp8z73bHFs",
  "key18": "2Vm9cq7wD9QVkwExT5SwsDYNrT4KeBYHrM9GQJ6Vfyyg4yVHhVJJBKmm1JbrhzwdGZW8CMiyXDTDMPkAVXSHh1w8",
  "key19": "35j2GBH1YyJgTdmnYsyvLh5HBX7zeETi5h64jn6CgmqpdBoUPXXB3LVKVQABvZ8b1sgNmJAj5NG3ZKvh6tmgQptv",
  "key20": "4Lq1XkmWK4wjeDpYhZdhpygh9FwmNR4DDNwwEn4WtR7pNHh6pXfb7SKphrvV3og5DFaqdMywko8tXUou5NZyZFiz",
  "key21": "2cAcKid1pE4bt4JuG3obUdTAQ5S7QhbS9THpqa7NhKuJrZcCZzsHZxzaKGU5hvrELCHr2feUvPn9evvxtNzrfFBH",
  "key22": "5jx7hkcodtNd1jcaZMBYEftnF2kaXEzRqXGLUSRyTnBJ8XkWauLs1K5uHKbrh8sW3yHCUWgPgK7T4D68M1t54Ysq",
  "key23": "3JUTiHpS3fu7XoDUAsf3Q5ALq9va1XU7BEp1wn8cxVVBQPUUD41eGaT74YBEEEKk96gPyafuTRe9xcyAEWQXhsoM",
  "key24": "3gfXRosQsY7uvKQzi7moe7EovKsMDBYxgAps6M9FLomBFiA8pXySRJr9tujk6Ww1owfXGy3hdhAeeHD4sYvLdbkn",
  "key25": "2unHZh61j6ffgnhoddN4hr6vhG1GABbRaFoN8EB9dSP98JC39aVq9LPzGNPuAFFsSaWvV7gHRoyRTc997GZDUzFE",
  "key26": "PRCx3CjfZbjyBfUFuswQuXhat2yQPjPggYYdtCDBPEpqpZb6zWKayKcCds75WgithiA2J3PmvCeQWwpsxBpJUZ5",
  "key27": "3zCd1JK9X6uYnuTwMGo1ZPwyHbDqDggqkMhjqX6TkmjUdBKV2iXa8KDbhCvwgtDwVbKEHrBWfJi5LmuGtFETfTmX",
  "key28": "4EPziiNPK7t893TrmjKVYujkNxLrtorvH3s4KVnHquynd3UQRubW5Do2zdxFk18DSEVmypNEd4XSZf7f3frfqYch",
  "key29": "2XEnGpp6b3NaLt7baZDXarEAXyVTJuX8HBWP1cgouQVJ2U32ytQrJTQJ1SEaB2RUD4SEBx3JnpK7wx3SYbgSxhnT",
  "key30": "2fKMtB4iXLAr4Q7fpmWg1uffK6vaR6nVpYNhni3NmyBQw6YLAM8ZALTzfoPpLQgtQAcnafETwQafMT5Y7pq5HpgV",
  "key31": "5bCpfSHAZgfADPNjCyBuqGUSbeS98Ho5eF1Tr5yqGag6j9MdmGWE3vdScFDQhnjSxrTvRTSeJNBMmwYNEQ3xKozV",
  "key32": "5CkLNAKMJ5MEGLKKzDNpZjQqmfHpPQM4d2Sztx2b2RSmZ3co66xBRYPkB3fwLBZSpmUHQNhVcqgYn4TW7NErf1P9",
  "key33": "5dNeURiWWCkHVc4qf7bvdAWmJaeARJvjTTFdDyXc1pfr5ZgmQeJzLZvFxnn5Bi1mo5qvt9YXVC9wXq1DHWap1MDP",
  "key34": "5q58qhftSmrRiQYQLbcz7KyR6zm1oR4Ke2bmx1aHbiViFsWzgjw9UgXYA9zZDdue2orKHbewkDwNtLEvMsPtP2Dm",
  "key35": "25v7p5j8tSP3apcXC9qzqJMa1RLdY4RXYH4Jv3MB7yuxiotvg5WUrJrKpn7FgfHsJXk8vbyT5v88kheLrM8ugWh2",
  "key36": "iHz6u3eH4mEkoCVNC99uBCndVhAnePX2xYvy72CmXyMDURZ6C6F8Q4SZzRZjFdxJEEiEuZdPavjVSExuXXzKeVv",
  "key37": "3gJrzk6xrWUTRPNaGpZsbKgNLAKWjjrLcshf6Vn3J83qJycq2poHZowLTCbHX8ngDvMAPz9R6HgZZEYb6fqUzNju",
  "key38": "3pE5KE7R1VkCqgQBKhS3SBFarrbHm6TTKQNy2FdqDVoDrGZEyLEwbeqajnc9fxmvUhHVKQqD2otoYaZyS4iEvDcm"
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
