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
    "2fMvQwrE17kiZcKgEKf6Y7qX8EPSpWFTLp3c5sWUSdJqGkYXLthvzzbx22nDRjt41YgHdAkETyr4EepMHUgRVN7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37WNGHnemBKQ4ervuz5Q25e1JJ5UiqAXfWxxKG3tCmJWrvHVaavyDmMX2nbksuMqHor2qvHBgir6f4z7LUT252qv",
  "key1": "2apQ7W1W2hLbTWxWydZFeQtLJVkY9v1sUbqUcCjesUjanEcP6HBZ7zT32veBLMRqTnucXcVaojcPWi24xV3MeD7D",
  "key2": "2Hvr9SMPSdTje4QE3A4c6LaroM4th4FjKaHswEkaMU44zGSXLUEDCHQPhhN34t9tji1XxUvNvmcvHR7rXkVsXNuf",
  "key3": "4JEauwBhvtRn6DV7yLLcZbrwmPLxZUh4SAH1V5sUZWU4fKGVkvR4v9qp8n2Cbm7vz6d6SoPFnnw46DGHMxFFePkf",
  "key4": "ynLTnhQJ9xY8QFjDR4cFwcWyU6bb3F8avULSKwfPqhPU7ttZMmknbkXMCmvvdtWjq5NMrCRf9xCcvL449JJygVY",
  "key5": "3oHqyoccoJYPi2Gc4KhCLmvdTSBEJZ62HLVsZhgCoRzQXhxcMjFYEytAUyo9Xims3QbPs1CjijV2mKBGwUdzAxZJ",
  "key6": "2PrZB6UVPRybKHauiaNCeg6HP2uyaGoX9QLMwURQdVGW79NFpxt5eVRjBmAzKJgKzANF9KErJx1vqGouhmewy1oG",
  "key7": "5v9P9x7pc3VqUjLixiKXumX5hNXraX4BPrgceYXq98ZcjMcfMziyY6BRHTuQ6TQFVf4tEMpNQ5YJffezcqAio7so",
  "key8": "3E2zA3rQyVXAW4qLBiSCs7dsdvd9NusgkadXLzTmqnZNjnEWRh3KPkMqW7vk2Bc8WNFXFpA11K3sC1X4SiXUf6tS",
  "key9": "4hHmVNVMryXQH5j33gYSs3zFbGYKureh2ke5AqLgpJDkdRhbBvHEortNwYQxw8ZqDMkDyYvdJHkCbaXzMe74erEw",
  "key10": "323DghqHsz8sE6g1k6f6WWeMPK2Hf8ujiQYa2yKpbRKYVugqFzqK3fBs8thnm5WFiRgcpXLjAqgsPWwh1g4NRFuq",
  "key11": "47A7AkzwVHMojhZBgBedW5sjZNQyVC2TZCJjXuopup4jkNL8zt9TSntVzsTA1ADKU34ZThQsX12MTuCPmg5hEqXd",
  "key12": "374SEExsXr5W8edWHbpzyHWMoeGcu871WnHqxAJ89J5jdoBMLCboSCEdcDd4nqwqUxqwHhGcfSoBuYpuEr45DyAq",
  "key13": "UtZjSXkmy5rLvLYChgseqSVEDBmFwELbdLCVpYLdochbLyf1UxEMeHnMDYgUbZidCLUxWWLcXZWWJcbzkhFJpsC",
  "key14": "3Rve4X5ro3B1xNG77md9GT7GLGWmD1sB2bzBVStUyrnRCq7dNLGLzGjgANKL3iaCMEUVf8Q6241Ufv6ekeAJJb7G",
  "key15": "WqbTufDyXop4w76PqHNyjRfo7MVPZQ5kjASRVEV6L2awF7aER5pUZ5SB4Rv27EottbTSK5rTzWYxbD6k2E74xMn",
  "key16": "4i1rUAAcwdDpeG2YPLgXbQLnZNBiBbyY75ta4Fc5AUBkBVhUULT1RACimHvjZP4nfsouP69ATg6mwKsmc5VtBbHF",
  "key17": "2Nj5foLpnr1cxgxiceuMZkoMVPwywW9XZe3EgqkY9z3LJgWMtNQYCSDBpaKrVeX342jCR9A8CnC8ARG7NsZrwj5c",
  "key18": "3Zfb5pvAuFtwGCBVP5f1mPgitjas7eAh7sHVSZi2Co92oRT15SFymHsK9WbAd2b1ESaCxZxxUbTSKzy7e5vRmMWw",
  "key19": "4ooLgwuSS6gHNwib8AkyroPT6DatceJi8A77pvkA56YKUCpMRKzT4eAYvxCncXBAVsTGJa43joMJazHQ34Gudu2x",
  "key20": "5XabdxBpmCDUG2E41DjqKQ2kUVYY3hQ59e6Lye5g2gj8edVMur3te5EEeT4WEnpx2Z5Y12YvFK2z18qHQ3gpXuJk",
  "key21": "4aLeq52zJAg78qGLVsg83zzrabRjzetSdnitfcyZb8JgJusPPCRB3GX42fwB4evaJDRgmAGiTLfKUPJ1iq6ZPFHo",
  "key22": "2sshDHLd7WkKCKhpwMwG7uHPJQgaibXdnTPNwxoipsD2d9T5fK8sKa4NRqj2o8HS5SdvLoDU7QNz55gDtvoy79AT",
  "key23": "3Ms8UL8FJDGsadHPPAL6ksDkVVW3743c52bpK8NG6UsaUjXipzFcvwFBpeP8hhPUdrod24VPKhULTqDWxFpGVUr8",
  "key24": "5qHtP3JUk2ANg38AR8ys5p17jWWWS32vDQkpcKScjF3h1R6GXiXYyt3aDATRzLN78w7AchvasSLML7JNuK88CBjM",
  "key25": "67MyFxKEH8jA7AizRCGrp4LmUW52P9Kc2jbpvPyrTH95qUDWk8NvnZUFgujoeaBvNoDdZYtkWnywtjTqxhS3aUQs",
  "key26": "r4gN8xwe8iu2tho9V2N2nZGoHwDZRP5yzfBR7MjSMmUJFZ7ssHbrwU3RQdxhMPhN5VphcHE5FZgm5dbZ5MzbMjE",
  "key27": "2F3qAT5PgBmoNKRQhBo62AZDvjyx5SLaVtuWyQhaWZJUyyQRBFACgQs4A51KE6kPVkxwPAzWKQc3sMsz9FTBYitE",
  "key28": "2u3JfJCjHv6h27UKooxiHjtwBxQHGBUMnRk5T9SzGHNd4kP78KsTgkghmW8hzJ2ercKmc5amrV5erffqPPE6w8RH",
  "key29": "3Q6JJhsWSX27wDMv7foK5YcU8eGM95wdGwBCVhvUbXHzCJfL2D2RQLfrtesABeszWFQPsyfUn8Q6X3qkV5KB5RCv",
  "key30": "4aw5sXXYB8n16dY2KRUeJR5cgimCrvMwCjzZaY7gzaJpXR2gR972D2o4xpZQPz1gHL2MVhGcMc3oyWSQ84wyNThV"
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
