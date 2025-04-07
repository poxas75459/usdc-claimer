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
    "vPGFStM2xEgfkDwgedSXD59YoMBRktuJdakwy5UzcXSVbS4Gjs7U7wDs7S2aAY5J72X32YtKLeJsZgGrqNmvrow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Tj78hSUmELt122qNsMKbS8KYH2PKA1qtdGGgwBr1iPBzYC7ceLY3i8hxoEb8R7UmGXJCbUyqtWzmwaWrEmtpvD",
  "key1": "5wXWZTeRRtyvfHKeo7JyitEtxYhXrN6ujkQQu9ok954Fg5myQAEDYGpDK66JgYZddLbehRBcq8tDWN6Uf7LaCcoS",
  "key2": "31ZpFoDYAiSx9CdWhRv1MuAF64ZsH3HsagMResAm3hsiZ78ia1CvyTGWHfY4JvLg98efX4y3WMGLW21XP8Dnjyx1",
  "key3": "36pAckeCkaL59EJksf1gNsnHVWQ4oJ1QnHMGG6DWuNVbJ25P6ycuWqKMoVsxBAa2SRuvNF1WW4pXWLXSEYvj4GSd",
  "key4": "4QP73tqegDPbJM4xWq9PJVGKYUkAwqFrVjUFQW51eiKRt1UpMaNY9bghzs5jFr2EQPatBDvQvFDy9FBqQsyGkr8H",
  "key5": "2xhkns37K2oL6V85BtebJkNDTskPX29CXn4GCiARwswL9VJBQBnL4NjEBrT5McDDrsR1wcZ9A3Gyzh8rhmrhDeym",
  "key6": "vPHftBcLsoxy2yqYZiznLSvELcvn7XoW2jChVpUtbX2Udx6pu7ES1EQLw5zriF96mgVpwVrXFZoPXWkuhakm8cW",
  "key7": "J5MuAKVC1B2Dsrm22UB1CUz8XriywjrUPAVEXyUjVis6rrK86ZY83oyB3Y955qeLuNsKMNKx8CGaAa9utC7Qjyx",
  "key8": "65jiVDfoGFEaJ74ND5URW1KvYrEmWfPeqKbQx1jQ38hcgnDxU61MkqYEMWJHAAtzscj1Wgy7gsR25fhote8RLtZC",
  "key9": "AbNU5vA9wdqxo5NnnxmCuqhtxse8VbStwVszmJzAxAeCZe3hx6yEuBacQ2RXJfvXfdPuspB65LUbJ5mkuUJEYcD",
  "key10": "4TyHNDVcQ7Cgrq1JtHhkRoU7rp5EZo3CmkihdfRtzq13EbAuPp8RM14ZoxidBNLNB43nUHWqpTUkwJt1texCpAc3",
  "key11": "nR9TM33veEmUZ69ixrELRBLifLyvJmovKifN4ioStmRgA2TgpnMLM7yQa8aHP2cPehn1e479e1sLNz9EJ4qtyfi",
  "key12": "Q5HgXtTCETJxYbH9xpGXVRaJBjyQYvDWyTtGWkCXoaasD21MwC6bkjzLbNPfZoW1HuEcrMj7rYCsEyXcGz8gM8a",
  "key13": "3hrgpBbfzjH3ujJyH8gQ1wBjDppatzFqZLVmH5FNkAU457c9BXSSjdgrYNuCKrzpFK2Ws3GM85qRXoY82S5Pdbv6",
  "key14": "5hV2b5gpBBy87FRuQ3nmtWeiiZqPXVdyuW87knFi99hWg9aMUYmxK6xchNvVYQspsQ4HmsaFCHqs9DtariL3j5jZ",
  "key15": "3UQJmGiqtabohkfUhhzZtyTECke1VHx6jvVW5RztVHs8hPfHGCLG1mZ4xSfgefaXGzNE3Q7YB5szNHxzUG6bFjAp",
  "key16": "5Pz8h8kExDJWAYKBzwiy8U7FndcSGpUP2LyxaQuXyE4zFhkhXNH7g443GUCpzrFHVNVSDpH3s7aQDsiL8WNuZbDz",
  "key17": "4UheQMekoceGPn45Lt2F6iz9KAoHeQm277R81pjn6Wq7avMFGP3hGBXzEBzHkCAY7gcFcuPTLbVAQhZCD1GPfEzP",
  "key18": "33wjrS2zyLZskhPtxuzSEv6Hpn2NLQGggwG4adw6UgM7qu2eckzA9H4bXqvrD777qfBQJQJWZTNtnuvF3ch2DtVu",
  "key19": "4mGEzJnMnKWasPp38LVdvNymAo4iRz3ityahRN1BhWzUHRTagDW1HeNYNA8HFzYW7wP7feak2JP4azo7sj7ZmeGy",
  "key20": "3UCeomys8o3d1oDkxfMfGVyPDFxTjJGnEFQuXRXdX2Todo7AC6eCWbo8rFgPrDAsvc3ZFxX4ZHXoCPJ7Ygh2d7Zf",
  "key21": "5QPUQ9hexXgiq9gWgrMjRPWRGKfcDwm8cntiwLJd3jKdF3HfkgnZy3iwbuhCEEAPR4PkEcm7XFjKcccC1wmvdumH",
  "key22": "5axzDK6WU19HXLXJDTgENGpBjLLLsvMHqokaoJvsXMmcsZpwhzjqH4V5d44PDhhFt19jJskeUJ1kmCsNYTQrasUc",
  "key23": "PkriUt5TedRghjo64CMYx5RSQ1EXhVQycCd1nhGZKzu8upBqNoRTVC8UZmYpVTZtdwJ7DYzuGui6WC2fX5AdAdm",
  "key24": "zk9vCAdaSFLRmyUKTJCsaYEXsknKr98HFCpjEpVKauNrBXnRJDVy3pjzScs6w8Uv6j8orgx2pzCrJuqdwuvpK7K",
  "key25": "3YcgZzhSBFpPPCiJnZS6Cj1WGKtdUiM46mLNPybD6R9mFK7MdHbdJ2p9fonh6zJZyUq4y4BJhQKwzJ3rEMCPrYoY",
  "key26": "3WcrYLLyP8kXJBMS36EFZ3o2VB5BUVNWb5z6ebbXjBPLzcQx4Snm1KH38QAHB6TPE6guCk7deRFYGuUeP4sEDsET",
  "key27": "3t5LKWDmDzwzJsVCbvp8p6EjKNZW4wgXErWndY5gSDAqW5gtYyZHA5wqA2QpH4ykdNx2tE9R35ZcU238x5Y3Kmpr",
  "key28": "2mXvS9odC8d2v5sMhb6aH9chWVFCRR3ztQb2x6TjdPRtZhg3uFpVr9VQKigcpdyDje9vq53YEaGKmScewLcgR8TF",
  "key29": "Fvsdzrq36ofUFizLndjzbid1tPpmsFF3xywGxLwxxyJ2N7iXq3JH5BT7XyCAvLtYxLpdwVteF1Deo36zBo18s67",
  "key30": "2eQt8MhQdgazyorygUthG9s4ddgKT6tfMwKF3uquB9x1oXhGuzqcri4ve2LHqZBHz2DLWvNSfSFetSukp6NycqPJ",
  "key31": "D1Cixa5vPa649bZfHxEERftqyQyXy3bFoCpDD852xkzbeu576J8HFrCv5eeQNgZBXEgJDVHsGVjVb8m2knCZiY4",
  "key32": "31qhn2eLYZKDfYMutNUtUoNwCf6RyRGyKEffo4dVzcqYPbaLRpkTp8n8QVuPZVH9mQJv2cXGetvkMAiynAtWuDzm",
  "key33": "Ga8SCp8Fviiv8w83RVyetorAuYgfyeHLZr8kjXTUYBCnBYFvjJPjq2DKMcWrEGDqXRbsFw1Gn1rcvyprZoXrUpT",
  "key34": "2SzKLJnE8UU1Ve49XMpeRbWSxgJyuUzGftfpG2V7ASprAvQU6F2KmoNBiZpzH9K4TC5uwH51d7HBYJKcp8GQfbha"
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
