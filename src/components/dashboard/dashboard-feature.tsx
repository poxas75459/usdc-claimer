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
    "2iUcYP1sW6w3zWVuTrq8ygZcwQFZLpReZpWS6sPeQK5gDYECfc7zMugrP5Jiv49BrpgXfBAF86f2BXjAh4cmMi84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41f8AY3JRubaoDR8uAK2afk7Gi8rrspGDdWsYK4e5tos64EXrohmxbTnugqwqh7Hry6M69bgPoJGrEcG1XudJLB6",
  "key1": "5FwttBXzvyy483hzZrrd5eZgrbMkX1Gqgbs99zR4Dp9YgPutAYtyofjbPspZCgesaSBuL76BZptdqkpLqbPRTpuz",
  "key2": "M71EQBEqZQdBexeXtXzyi3qwRS8jKffVJUDXXG41zuyvxRiaD7LXCuxsRRsiMBavwgxE7Vkgx5GnHsZKorHqe5p",
  "key3": "5X2iXA3qndhSztALXYXBKE2cbfzDkwR7CvdhDNBBmRn2MmoyiT6ycBxCwLndUBnWCATCouEf6DbD9pVQMpiozwUt",
  "key4": "33oe932uu5q5dobRmDysCqrgwrG4KnPcEP5SojD7eNaJiiED9gAUHzxe2GDjW3Ap6EMEAuDweJYdNdwYJbg2sdWZ",
  "key5": "27N3Dzti6ma3M4nobnmrkRSDXYQuHLXwJaCcFGybkKM2ND5SsM5c3ie6Fzjsbz7y8vmQfTZMVSU5aaT3jRwCMpDg",
  "key6": "5gM1uzieatWX9vgiTijfxJ2MkuRUXCiQFZGJuZHpyToC7rqbJqeTjS7UqCk3BqLtVjzTiyQoF19KviRp5FvEiMYs",
  "key7": "21Bg9VpygTAZWKe7cP96ehyxU5mVb3AM9rhcPMnVwgTG72jhuzQmJHScgvHxj1o415V28Hj6qaxkRgD7VodgYERD",
  "key8": "2keoGDWVENxU1TSmHDRqFFHQfbfPk2tjxGVPkdXgzgfX2LFsg7YQC124adqkiUKXuDaMkuVRJ88iFZtFRmxpuBx6",
  "key9": "eLxwAzTE8PUptoqP1tsg1x1b9TEWerD9oQ2mss6wTycArvamsvALVt9T7DQYVN8TgaAWWfBpMraKC73v51TDThd",
  "key10": "4ntSxf4sN6N17rVKwtQF9TaL4DhN1631tYyVYg4vcuXBvGfzuZzDqgMVCpU7L9QC8n3g5drtKXeDARsHD9Wy2f85",
  "key11": "3yXowss993MpraN5LHmCxtPVShBo5Cw5hcfvFqrRFap6ZHuuNRT6wB7EwtL8kyE4iuikHJMrvKgCbK6jJyakQ5sZ",
  "key12": "5GrUBcLyFka5xsuF3ZAYmLRkxPXJ34XLLVpxRZgSgM4hsQbWqHdVYXnw3PFQtqkgx8v7pM9cdpaSnQQZmvstNF9r",
  "key13": "2FdfnjDBPLsn7L1nXkGR5uw2yEYebnBDjABUF2ck45uZqCePDaSWE7icHHnBVWYdzoW4NSmT9LjHWcwjBsgDEJaP",
  "key14": "47migBhPYVy9PCTzsBbJBHH2t1M8h9x6Pr3BAGy4YAz3pyF6ZJA2kP72yJRkFpE4fWo6LxmUNq2DFkqCJY6Ay4o2",
  "key15": "28YGasCXU1UrjKfJHH4wbdKnVGmuJzRvDnLa8X7oATwY1iBD26uSqeWAr5GZzJ7dQoNX6BeNpNEL3KBazSLxDzgh",
  "key16": "3WwnbVWe3x2BnMhUxVCFCcGsbL5qUAU3EuEyTQLyeJ7wFg6bgRz5ceo3zH8w46bm4jMoUhA1cZ9nMvZNsnfrGNN7",
  "key17": "4tYGZkL94XkibWTwmb2kAeCUm2biVPaHwJ6Zmcbn9EjikiTW9w4VGzLPJxPmb6AdFSXjScFSUBSgMwZfKTqUnbjn",
  "key18": "3Q3BpW7y2CsFNc21iWGWPoqS6CCzNCuSFKwZDetfr5dfz9MwaQFtDTPKuJTdbkYu8ZgxpeBryezEChfbtEyV4k7W",
  "key19": "41jKtvcA7vw4vxhpB7gnjr18hnfrJfq9Q5tbDSvZMVmDuWenp2xVpuMmw1qzfk38M6ofpdpPQ4ZSYJCXyDEbCQtZ",
  "key20": "5bVri6tcPtc1XRpY8XAmiKLvQ5BvVqVWSHkxcLZXtxhxaL3wqTpZ5WE32Et34ZF1ZjrBsEzki9inSnh2ATPDJ77n",
  "key21": "5o5vCeGC1zL41Y92PThdEBPQRHgu6c4528jSU8rEhbv4BJcY84Nim31XzdowxiPitcgeccXEGqmYSTazzR7zm7W1",
  "key22": "CjfWosAcSoBRLjZHRHmnEhZem9Bh6h6GbVrKbVC6PfJPkbZDRR5LNZ3X1cQwkPc8nqdznHSoowkvpCYEUcWijh3",
  "key23": "4LKk6CvFfPZv4ekBWYd1gRd3NMtquwQbTAjnySAmRed6DyoMvpphAGBrfSYwVUSxjZ2e6fy8LwHXLVUxaMKYFZ9u",
  "key24": "2YEhqARwQFuajX9CmvTP68ELhNwbPLmQbSJh7Y8QWq6rznZuAjUtbLTsRsa7PFNfj4zP1YKEHx3aDvo1jy5cXpez",
  "key25": "Qwb4icM2VRjS7AvbeH7yHrmsr8g9enUQDrgVpWEDFCTaDtDV8hMBfH5pdkcWetJo7zpPr7keHkqXjEvb5RibxP4",
  "key26": "4t9YwfHUp6Dvx7WhEnXXqoNrtkhGKCKz6TbrVKQoM82JTBcXe1nTWxHqnrqCJ4Dey1t815d5WDxhvNjhkSb61iy8",
  "key27": "5ZTTaJTwvUnynbPvHiyk26Byna7UcDHn3r4vpSDtANHXjRPBKsRrx71nnMNx8ebbgKfUKHUC94Mi1CfjkPUh9ozu",
  "key28": "3ubJV7ghJosukfwxDtzuarW4A41uSujYERjd6ywYf3oRDfS17WPXJLT89hcE8LNAKT4Bmp8KN7gEY6AcppwDw4u7",
  "key29": "dQph1MDhyMobm7UT8PodZCrNT4eDJSTKovL9F4Nq8om4aUbpxZJVKdUEhddHmBYbKSiN3CGjy7R2hG7qi7BaWsK",
  "key30": "pN2Q16SS62M2d3LDeCzq16njkhrVEEdmKapfnVfVV7GBAXR6ukNgcyUJ9p1dZe1TfAQBgWv748EnbgC5fcZED97",
  "key31": "2pDZJeUA4WkvpDkUcvAQvcFjMA9UrmFhLVvWfAzwbgCuuTK8j5J4Az6St4eotZzofk3o4vKy9xKhP5y6HA6BYF1A",
  "key32": "Y4xfWSqaePDtYwBU9A4DZBFP5gFMoqZNiGL6JHBDHn3xermnNgib46JFVHEikUAWGtMM5qDWgopoA6p5cgw9Tiu",
  "key33": "4Zy8V7nCRH62H8s6XQQVnqj1SCChyyPDSm9PcuqSa97ZJbxuiBeGJPpknj1Zumths9wBpJSwRWGYnYEwnufCwdTx",
  "key34": "66T9uxujH66HmoCJNxEXhhXARsDVSqG1wZmTSCVCh17aMsipZmWFZEFyTAis12PaEnxygXx5S3jasJj5zL7gLb5D",
  "key35": "2yDoA5ua9a8DdBD2yKN5gSFHobuE9WAZ9Re1nSTR3AfxVga6Foh11NvJwDqWGKkQSLYQdpb6MdSjyJCFi27XFCdq",
  "key36": "3rbCfS5R5sJFy1h1B7hVAWgGtkzaE8fCCU2q2qgQe9jLXsavMjvcgwwMQspNYBjacsZn8beBUxbpgwkGdi3XqXDK"
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
