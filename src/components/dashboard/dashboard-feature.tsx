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
    "5pyZupoPxrY9hJT3Amhi9UgHZaHmjeu1WZy7wVY5BWFxvUeZC3yaJjRJLyVqDAWZDvzKruRz49gnYvXyeFvseoXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqEfGXQYS1BS6AWkGksxTYBTpuVwcVrjWjSjm3AU3hu9HAieHbrn2wErVZdM2JxzSWreoSQcjQXhk52GdFfuRGX",
  "key1": "52AFGuCdRfMXD7p9TnMuiana3quMPHJ2hNtxqaMKrp7BPTgRiVUb1umrAJxUdBr8njg4rVehsBE56T1UKKugHw4M",
  "key2": "3GFvdy1nijcMqsKR1HxBT87rcnWCc3pPGkZ8HFHL1VELZ12Ee68FYZa5A3BYz1oTjh3F3F5UNh28nbQJZx8sHHNp",
  "key3": "yUALDhuwQkBq54dv42zo9AnoACFxriCXgnXxNfdN1aVutrzSCmFX4m1Me2KCeRgwWQjdbmGDQUfrYtMDWFdJzve",
  "key4": "2vKD5rB7zpzpaMRjkNoWFsZ1VbC5FHnrRJpWXYghKXWBpQu8fFGFypCsXD4gP3fDtonJ2CkEGvjpBkxzqbRBGbaL",
  "key5": "4Bo7u3Eom4Q5GDR8zkrXhcQE9ecyozVYCrjup4jr8iixyGyK99sxioiTFooHYoYJShpZzf4dKTdQKkR5ZXpRqdGh",
  "key6": "5c6nANXTH2bVg1hCSphYHsVexHKX19YawE64EahbrNcW8msEhweZFvaH4wgpyhe5wRCfVvFTuhT1e4P1rD55nQPb",
  "key7": "cS5Nuztr5i45VLHGJ4AF4HuSrh5JYSkRixwFMjhMSw3vnxm6bjfERdcTkpB9B8iVNucVu8bxkbkKbRRX3AaNbNn",
  "key8": "KViVKLtHpLn38B7Hn18qB3jftX4oxGk6nw3Kcj1z7GyqxeCzoFtgEJQuQHFdWtW5hLdgdXAbwcc8bwY92Lqfyii",
  "key9": "3mcLoUoshtyq4uvkDbRL2ZC6AiLzsESr3ZzjXWxymNSTSmQga8GH319UUUAjoULSxC5wuruXKyuZMLbYqWJSXJ2R",
  "key10": "3L72oStpmvAtiKntS9Z7mBAJrzNqfCtUNaqZyVLJRg5qpfsKFdvJodacDAHFXGNS2vWb9pxsKzM4HQRUqCMcQSWU",
  "key11": "3wywy8RdpuCAjuM6ige9VUYkig4muRWcFCWYMSfxbLNDZbyWo99Yt9HzEFH5tvDZhSDnkgfLztTw7xGJn7xsFer1",
  "key12": "EzyV1MXNfqSCTthSBBE4MKbnk8huoASrRf3j4PjYuzYKZcwN5AdGpoT1Exbt2fff2MH4cX8U5NbCRbvqZhYSi16",
  "key13": "7WLgWiFiovTeBzYkWaTdgs7NiR4cWEVs4go8gYqb2dokeZsoejyGHbZKhXbY1i3v4SPSH8e87HL9edEisUA9vXH",
  "key14": "4BXeBVJRnAnsrzSsE1CsEAskhZ17xVFa2n55D3Kn2CVHRg5H5crLhY6opLqgRRprozDgoDFm7rp7Qw7sQK3qJ1hV",
  "key15": "KNkJ1M8sdMq5Hdmp53VhAha4XbDAXgZ7ZJrySEVQB4tACF6eUiZMT38MNpuT4pBLmpqey4C862jgzDDJwYafDqz",
  "key16": "rh5EQGdKDwk9JcxJnkrLCKS3TWvNL2QNHkLPvdffKhzS5rGBGS2RP2Q22KXwagVQ7jfRfnaXzshDgEJePfzRLY5",
  "key17": "2EenKDuEh1ea1E6EMJavwjoukxe1EhKEckeRRgiPjjePEqcnfgq9MQRJUVbVmJSnFzaUWkF3iQWwKwC7Q7WybpcX",
  "key18": "45eZfbm6y3hpDKyVqqdeMAxjKHpoE9fFXZKVPJSKwUu9o7krmTkC7XybkWj1s2VQQXEMcb8UYVCkUokjj76yahny",
  "key19": "yc3AbnScFkFTSutSsfC9J53UJ34ujCNG3TvrxFS4vcQ8YbGqbVSVTBrZ69K68tx778acmLNgayxZdMwZ1kWWrVW",
  "key20": "aTqAC1YtdxY6Wp5dGK6UE4cRVRS5CEircYCjHY4455wwcFq5qtriDDTNExuQbfL29CHjjCh6siLoocgbjzsUsbE",
  "key21": "5QSwCpAorLNzS9nfW4cqsbaQqdChcTBB2D24F7SBWY5reh2pU8xQLuqNy7XEHmiEpR84PpzR9iyYyMipVd2Gajxz",
  "key22": "2M4xj3dWQNsCvneJQjy5Ftb9Z5wLERG4NT58vR2WzUxHZNfX4MiJH5dgajvFy2amuRs3fqiZSKrr4vMvwbYnDcDa",
  "key23": "53xQbGhaNCzSjayUFdJ2z4qYHJciKdrdZLbY5UqDvStdwrP3ApPbHCdsZhfJX1cqi2xEHgP85XxfWk6mpNcHpM8H",
  "key24": "4aXG2ksKQNw3NCAX3JSDAAYWTbNf6YSxiTdYM4f182cL3bDpBJdXsHNfGBGrVfneTjCxT2XbQpaz1tD2F7hxZdfS",
  "key25": "3ktnkzfpkjKxDFfEem26LAp47S3f54JnqjLr3em6ZZqQRRW1ho9pTD1jqmbsp6U7tAuShwrYTbHVWtkPQMZ62DsY",
  "key26": "22Yg1g5613VifV4UGRvqKwGq8UVisEGrSiH3AcEMi7PPw1FP6yqcg4DXMkY91uwUDiUrgSNXFrw24F4KmHUR5Smq",
  "key27": "4sFNMFYoeTPinDAbPAC1F5TzLGz9GC3rNDytp5z59sgWii1iJLR1BJBLuuRWydABnKuGQ3TpXhHT6s8VoTCVEJ6o",
  "key28": "4urJBB89kT2Amum6FpUj76FdDttwoUUrT9Ca5y44SGpT8nphnGc9TijooHn6b4HUbYTcCx7er2JYTyR25a6G6CyZ",
  "key29": "easCPBD9QGcE1QLkT3JRtT86LVjEPWFauXhaRyzgg8KPJgvqJ8JpBrLtGPGWTSA7xXXQ35TRLGfs5wEtQSCfdJ7",
  "key30": "4VcahWaNYmcE9E85uR1eKvMLuThENoKUpHrqcMfZeQYX8fQxbWkJVpsoH2HE44MuS7hGDZVmdSZJ7Uk79SSGmZsX",
  "key31": "aHhmLZpUPGYFuraBAXP9Bz6UfCoUK9aU5V8BUrw8o7VjQbGoPnH8XeVhu3CE85Cr1FiCEqy8HrrCiKJFGLcfLv8",
  "key32": "5R2Ge1ATjMMd25zejuQV7QxF5d9YQ8BS1q6QwHxDCETuKUWrF3eB5xderhSXALp23v74N3cyJkvtXcFpoyU78KtH",
  "key33": "2zD6i1AhbA7RWGqW5o1EuGd9v3cSPy9Yq1KzRKabTPHi5QUBuuwNkbUf3NXXKTViym5jSwJfsSdjunLNvRtJoMgy",
  "key34": "63FjCySHKXSuYmWYn4ih2FKocFWUfr37kLaenDGz3HDWgPhdGKp4EPAfcaW3zJBZcrpfh941rEeiChjxPsWb4d65",
  "key35": "3ksrdthEqcC4YVKHVyZfSEnPHNXGmTUz1fTcq7feNCj6ZTYTcGJjwGmUythSGouahQu42pwhQBW4hxyReKLNr1ku",
  "key36": "3eXqvTWHYkuvNdK8ru1ZgdGrwnw2HWdt4ZCzK5oRCmvcmAGAT8VnpWCx4vpr2Gagny7PXEAwG5koRPLmXf4ucoeA",
  "key37": "4jQDX7tJTeBEq2HrYMqZEUsL7m5iJZsBAhe5JLWgDVgVMdAxsdL2mTNP2EkYwerc7VNiFeDVH5LQvziDr4hLKzEJ",
  "key38": "5q3K8wNvjyHZ6LoUuM96HdkUHH77uuNGxcPnZVnQB25nsgVLaVaw18MyfM7FCRGCKpwz69mnhsc6HYW5sVY1aCuL",
  "key39": "3K916UTJuvmNV8VZCY3zx76KVcsNHCM8rrRB4qfSsRif5GrpgzMBtZQ1DXBM4SRUpFQHfyES7JPbXtEVa7o4UuNw",
  "key40": "2zwEUErAjtMdswrYgsgdUPNhMGF6ebbkbkcqRoUL1zMfx54R5n3p5gn2EDXVJ4TMNddkjHzNBcjH6YJrdtJEJY1i",
  "key41": "3Tzzr1Po2ZG7TwvNeHQVHdQheSyjB9rjpju95uSj69dK9UtGA4Efw3mGNLF3kdWa6ZoKc3jZWF8SRobjjzo6Rnqc",
  "key42": "5bsKtjBztVVHzzr3g4qV25owPAViu2LtMjELcs3nUK33ses5QLjZ66zR9ynHgvw5uE5inyhTRhkhnghM5sGZ8Ndh",
  "key43": "4Kje4mJxbVPF6Uupc3b7XCmnBASGBQ2DsH2ZFuP33h4VbudKcEqguPnBVj4Q1dVM2RWfSj8vmt7fUfaDV9egoXAr",
  "key44": "3T1BFPtG7vwN9detXF7BT81kuDNKCRAJeq9x3re1ZSP8oK39ZyYdhTMTTLYzB2XyNLEPn1X3kRXN667tFbks6UGE",
  "key45": "2SUka9J8Xy6UBRLDty56gfje7VLYmVtQYV5jdf62pJQzXrbB3sAQza6P71e52HuFMyxALBZ1eGB8X4jjxxhtJLXK",
  "key46": "5c9obq3mrQf295b6hJ99BQJ1ubYkYoeqeHf6KZnd41r6D4LWAG7Ne8JbopDRYWme71D1vw1xvbLXtNkpgN8aRbfT",
  "key47": "48F6ySQ7WTUdY6eUpztjoqgogsA7BTLcuvdZeKUA5SStVbHbgqK1kBhP7ZwBKG5cWAJiF1igEkfoWsbRmZWYUaHX",
  "key48": "4hU3gkfkHDjaS5EDuEtNFgbdNoLKZXiBwwnYBMbVXPy9g7EaUzRRC6WBJX59sYKtt1pWgCuENeLCiVCCgFhFntGi"
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
