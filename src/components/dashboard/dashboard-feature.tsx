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
    "4AkH39RyxBmnRWKKZfv717ahpfQLEzN1T18bcw2VXNRhe1R4NcGhPF7SQH9qM8BfB8JdaFKAtbgubpyQ7MJ4kX9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBDfbaaKwucCu4ix9Fv7mtRBJsAnLiH2MvZngMTYLB7GnEfvZG1PH1QCL5xxkNAubrPVz8QyDS7wia89rG13vy9",
  "key1": "2mdHu4iVTQvbcn1voj7TgbhHVgDeoeBeWRp3ZSLTK5KLVw8Nfw5SSWRjvpF5DSdDXuqggLhARtQdMW8kScEEAteW",
  "key2": "j5XDPbNvtb1T9fLgAfYDd24ZnFFh6huW3SMNDF8YkkPAYJ1MVg88V54jDLXEzn8ShkaWMJbBjh4bszeC5TUdfJJ",
  "key3": "avAS9t3Jnz6s4Va8JXrFSCcLWyTPajHiPrABToiV8kqg6aUgVUW1AXHVS8BrTrQ1mZova5v8EnRhbhht8RDX7hM",
  "key4": "3fNEyMtNmVPjzeAXcEfFoNhc8N23Q8LXbiYCG92jfhSoaPyeHXqS4LMGHqGEoXsJVN5qjk15iNmZz1Puq5XaWhCK",
  "key5": "3DNFYt9XZNrzf8WN2Sbz7wQgP1w1U2o3Hru7GL5KWVkE29Zaf9RBUwfhyy6HBLSAN5J5q2544RtgsguYpz5yUUDg",
  "key6": "MKgzUueMBVJoV3Ebb1cY3HfmGyZDbuza3ZMRS1j5Mc66BopwCV4PdToazK56FfpSuMb9zakYKbJ682yJ4R9MYgw",
  "key7": "TyMdy6PdnipRDDFwbkf1cr12qrgYWiPKdpKPXBUoH1v39Xh57o7vJVDX8zcT61ouM7gjyH5UkMAM2msvxB52MTz",
  "key8": "Quwipfa4woQTMKAUQ8SoZAvNGrjqAAjHJjt1491s2LnAREE5gKESp2KSBMnbr8Yum4vLHGgTEMQ6bbPH8ycqqnG",
  "key9": "4mY6iLE1pMYFooDp43pgF6nUpvmYXNtxSD1XJvrkyH5FXVR9n1AeVyykagL4i7wQnvCQcqqZ6SS8yySiccbYkiP9",
  "key10": "5XacTn75wV6xu37DMmKzMHzDrPNywrNRw26jXSYXNvEXgNHyf8N5C4QBZdc8Atq4htzYziznEBwXzhn3UScb5VNx",
  "key11": "4veFPB3Vj4go8ewTHtot2oza9AiPfs7Bvz1KrPs1pH1CPC73kwn9H4s9q1P9o7thfSaQgqFos42fSdKweHmjmuYq",
  "key12": "51MnNrwSGVcipufwnJtsM6xmRQM6FHzaujcT5ZKyCQSXQkGC5QLpjX8i6UBoNom4AYVx1NEBohxqhh7xwasbmkY2",
  "key13": "K9zM5Qkj1nXbiuUiHDApB5kkhjaMUF8puHkm1ELJx566RGSXMzCkZcrMbLJ5Esq3n7pnCdk9qD1qTXMRTkYSc5x",
  "key14": "5nuKmGt8EwXHbYDYvPVQvnQKhVyaZ4iixUXoAzzmBjX3JQk36CJmtycsmH1KULKKT3VEZXc2tu1dJtEFaMbQy7mw",
  "key15": "3f7t4rSH4iTjzWdLPSxc47RnRXtb9b8ESLpJ6Z2iQpa3KPz7Nor4LtwFcn8LUg83D1buefzXmeTBb5L2xrhR3YNQ",
  "key16": "4ZaJcQisjTpGehzgxZ5YtrH1CnfsVr9QEuRPgN3yoTDNPxYUNkRGhaRHGjr8PaLkRokHGGaC2kbNjkEVZ4SeHgMa",
  "key17": "D6xqJxfkMPTk3W4YkQ69sMVQ6wkpuDRjkVmXhv8xeBnRgHjCetj7x25ATzmvwz22BRXjzbpjZy4FWEAUSWoD3JE",
  "key18": "2hcezTHMj3j9ENh779MGzd6NM5YVS5bdHwYcnm5duiunjRKWqCa37t7xjdRbUnuncemYBhAH1vT9YGxziJgS5uQw",
  "key19": "2k1XCtfHyvShsQhb73eH6S5GkAGambqPGmVZPCXhPXSdQYbjd5qudwVWv43xKC8c1E89hZwiQaK4YcprQt7Lij3E",
  "key20": "62V3P4RzfYoHPFhmTWWnkwuqxet4rHkW7beA6RMRUGRYUwEnVEZaePPpL7yog4etwec4ddt9GpZenJYJqXhCQXu8",
  "key21": "5GHxkg4rNGmxQuYo3R9Xqku1sLUM4LTo4Efwqi8N7U4Hz5Cw521iXCkYdVsPjXrnXBn5bEXjTVbixwgxyNn7GkSK",
  "key22": "JrVCgNT66etYwdx7XqBevGy9j3cm6cQT8tM1cKuVx8PMAu2TVdtjhzDhjVNVt5jPGuzba9V27Wy6xKbtEK9K4xV",
  "key23": "3Vwu9p33SEtwW4dJeDwVDtMWgkm7pVhNRG68rCd79di9vG8ootXSNntRbUAGpSTq5EHkwLDmHEE9Q7bY4R5Anm7P",
  "key24": "2aJS8Exgxx56uYBTdFK4BCtFDntHUhMReN7v99KoRUBvnEdSdnbzYe2ZjEHLuNtN7V7f8whwpGEpUr3VQX1k3YeF",
  "key25": "dn4rNf9MkunLyBntkR3vCu84caTNKrCdiWdcLrgn37sCRX2sCw76baFfyyk1o3XJkVk41JufqL4Jh9vqcCyzHFA",
  "key26": "2JY5C3UajRRe6mrouuaYwUr3EbhNFoxUwAU5wLt1e2wMSg5Q7ZHBc35n88WPQrco92pCP6DukqhssZDtRErY3RYv",
  "key27": "3RoSsWWkDbEMb9ESaYtQD1neFknWfJDvA9cfFss2uhPdSwgSw5BKRdenz1MY1YD9iy8kjkvDoQ3sQVaAGLxybNe3",
  "key28": "4tjdY14RYTdMBpVyayvWuUFzZqaeqeDqDWFnBkYeA29PWBZKV3B5Cs4dLBwe1PRDxd18vLMbCbpGRm1d3V8k1rx1",
  "key29": "2ZLTtbMrEdYpiftwhVdZmfbe2ZRjSgitafmem1LZGZzX8NnKEeFNfUR5gGUJ1PyCX1wux6oFtTGqsmpY2XFY9vkv",
  "key30": "4KeLGHQzEyY8SdhAsMTUN6b6YyqGnwqHKf3hqJifBv52krtRT78hPH6Q5WE2BQXbkzfLetAmJXRXdLXmKJF4A4dr",
  "key31": "icfkazEotx8F4BbC7Asgzu23hGQxsbEHS3Va2ZNEqj5gC1xHEmsVv9fKD7GXk5DiPFdXff6BiVF5g4chXHDR9h7",
  "key32": "3r6TT23KdBb16BAsXQU9JMrzjEvvMZvsNhaFzmUULYWvGbWmX6qMv8qc7YwDcoHHBumjTvV24AiSTbVuL2n4Jd47",
  "key33": "4c67aXBFYYzgViXegJgVw1q1kuK2QNE51Va9xzMJvasiFUWFV598BYemKvA8W1K1KExuGM6pA24Nh1goV7spmBdv",
  "key34": "4qMUzgefWqU1dyEAYv7ATBdnuSkHBKwMpcMBbkxMFvaetdq7twUZ3SwWiDMDMVJs5BxYbWMxnu9PUvqkyoaqAiMW",
  "key35": "29wEDmoBVMVFLv43aiErGniCuQomAHs1NHvoGXB8f1r1XAdgLuDGV7V1KTsXJXFh5XoZ6qkQYvMA4u31fv6WiLhH",
  "key36": "yyte9BEPNrxRSunFZeDDPLWj4aZLj1k91QdvCAhxirHMLLrmYXazd1mkospzgu875U1ynAShLRBnmePmZUk29Vv",
  "key37": "4E5MuJ6oDMjA66JKgqwgEXrRyDb2RwKTW3RWn9TfWz2xJ7nDvX9LGk9C6X8bZ87U1HVoyLn4aL4KZ7ticCvjK5N7",
  "key38": "6M6xNeSAHQqP3DK9NwdzCXuDEP8hq7y7AEmrYruKaGZXmb43DUeP5mw5sCeWtg9EQzy8fM6ioosgWgx7sjMUvp7",
  "key39": "4VrEok7AtqAmZDZWreGxFgreMUtufHKEc3dUuNKGh2AABTimzEAgr2k8Y1sQqexZd7RZbjH5JGJA3p3jE7Uw7WhN",
  "key40": "4kaVR6JEPXc25sxMRppSNQjtpKSkpzENN4tCbtFcX4TfJbnvT7mF7tJNo5jLpNk3FLY67KyfRPjeNpdhw7tRUxWu"
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
