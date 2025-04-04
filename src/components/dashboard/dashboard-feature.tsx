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
    "MVcGhnx2h2VY48HMjQrbKyA4Yo6b4gPTtMEPaSHuhDHArbHuD3sDVhFvx7bn3QkaDcVdmbtmsDgAtk8MSNttmqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s4VMu9rMp3tJZbvQ4ciTrfxw7paLEaQ6sGYJu6fJcoMmfCcg2aoKFYKcHcVg2cRNJLpiH1nZ5CdcqXY8ueCnmdw",
  "key1": "4DW2SiBb6FY5zBkg1fDtu1fVQ5beFwgiFPXenmX5hSmGVXC4xPZCN7TbzmrZUGB8jTjjDx9jNdrMpeiiUfDVKsLW",
  "key2": "gousGokNMFwGJL1EqFegqhrFBTXVN6bgVmV6JwRkfFgzcZ2vgbgs1br588pZHN8zHifSsdLcDaZmGvLLhH8oMAc",
  "key3": "5V3BzLHShdzjtmw45Zsm2oUjn7b5WNggSEc186GcAGCgTEPuUTNHye63pVbbCNKJk4UQPoKYNJwCzcTcNJZHRUHe",
  "key4": "H6jDWN7UypvBoa2YT6UyE3NjtQoCiC1RyTgWWCZN7WzWpMVYHPSTN6P2teL7nhuEomedhnCodgFZxtNwXStQZ4f",
  "key5": "bDstWZiKg3LLYwCL5EwimYQKN2JHYQvKjaq3wxRoRFCnimbko4gZ1YnjDJrnSKKCpEp4ggQbQEQgUojZCD1ASKn",
  "key6": "5ZfzCyhXqNR8x7FVx1uv8WPqhfnyQngGYFjiN8522QqeGa6HBhcHVtTXQGUSbjMKNuTEcAsc1WQMLox1NPESvu7Z",
  "key7": "46aoHSa2rYmqoYKUfwwix2ajwCvYx4DKwJ8sRQZ3bkEMnw1H9BFCgWxg1dMuFRAhvhzo2EMvwzMCbRPfkpv3HC7q",
  "key8": "4E9YvFd8frBncQZmUxUH6bpeeDAftp79kxKstV4ZHDgBNADDz4fg78Z8jEW1bR84UuLjy6qaQEWAGVJGQxtcL6h9",
  "key9": "52K1WkS97LYBahmKexsvfTj8heEEPdma2W4JpfUzVbnLBTNtjAmBD7jsdN9cuExVA8W5spxBcS1K3VEXjetSCSWT",
  "key10": "28Lw9pr4jxnKFTJJUiAoEwoReFPMThQJkR6hsmyWyEXE48NShJWVd9QemhPGm6jdmti1kxyxVAfQ9r1LhGhnWXfY",
  "key11": "46jx8HqNigQsHe7cgxSzSXrTf4bTZA7CTQT8fGkhvDGUemJH4xWWAJUWYTt23synfsSnhLfTkBXjTQLWUbuHQzEd",
  "key12": "45BYxQDKQee9boTCjpJGcLpziNRWG76VG87hDR7YLKgv9cr2DAsnmWbwbbFwhe3YXFBxo7tRmmfTVzKABJohLfV",
  "key13": "5W5ERyXJxkKsdmaXTWMCwTmUf5zNASRXBrx5caUqPa1iTKZUX7K7Ydb7SHQZQPLLfRrSQXE6GUV2AfXNyLDGFN3Z",
  "key14": "4peZBrviX13GuFtBJPsxkk5HFVE2btSJVtN9VvXsNnqvb9v6TwDbVm1tvGG3tAKjB81AwfFpcXrA3hVkRrvaDZ76",
  "key15": "fmfEHYsfn7jFh3v54sPeKQHzNJScibvZnp2FRXU2QdVPKbjAWrkE2TRfefU5rxzY6nZmn5kavD2Jx9JY8MEspEm",
  "key16": "2z74RYyNwB8rjXsFf8fMyVkTNfj1W79xgcuPvYvav9fuVfVzGYJ3fbiGvXq3s2BqR4mW5mevsuGddHetjYXXG5w9",
  "key17": "xhPz3oKUgV9Frf5k6faefPGr3N4o3Z3Yu8SMpaVkkDr2DADhmmhPrBSrgww7oANkwXssqivs7FKscykQnri42Py",
  "key18": "348VG9jwzcrCgxcvWmGmkXDszVSUPV6M8qfppNbRTF2hdi46vmjqgzzpN8ZzikdaMsoie4Ww7BesXhwFsbfW4zhH",
  "key19": "5tZhLPZ91BsSCxw4b1byuF1V2qC2CV46yeyrW3XRt2vVmL1wGPr9sjq3wjkGQDRQhrH9U5KDtHxCzfWLDoji5PZR",
  "key20": "54f4e983mgQg8jJDZtzrsVFzYEvr4M7xYsmAuPwiS9dE4uR8v1rsWKGoCDEQUUwHNtdezAy9ni8AkJKAmQGAQktW",
  "key21": "5eBLLaUkWUhb6xS8dPHCrV2xQhxyyc3q61VZyZU2Yyk8m9Nb3phc2g7E78U9VD4zvZSwW3M3w8JnDyn2fi7RHm5N",
  "key22": "3rGjoJuBJYdParsRT7eGQfaAMqzJYeE4f4SawxVsNky6bqFKyY4rgpuqzkzcXByGuoTmhyoQEGZy3fxdbmk4DVXh",
  "key23": "41J7Dfb63oTyRrafDApgi7vaVxGvixRRprhpAzFNT2yp3VXhcheWXSEsLCPpUhXSgHxFTg2ZqYhnWg6uPZkpwzPA",
  "key24": "2qfXZv6AtbNHcGEHoU2Uj8WGu1r9p5KaedTBG869vgrgqdPs8rhJC3xzYwFaVehzQW2hLpGks8nyTZCiTrRd4Qzo",
  "key25": "3VWCnnGLVjtokCnKZcW8YSMKyWMkNBiXxgXti81S5PzPazS4nveneZZZQdKhiL62yEoDD9pyWaUC6onsXkEmGLom",
  "key26": "57E2PtZFf3NEn1VoPfwcmwWsxbNnY438oYsx9o927u2caHQ9ebYctEf3dM6oUZPnXsNJnsa21QVJK64gJ8cWGZQ6",
  "key27": "5f9MJLdLG3ZfLuVQAeRqSR5K4wGhxqpox4PSfxf5mQrgYCTTcQPr3xaRxz6Kwk7NGn6k92n1v68eX6ykPZnYtpcH",
  "key28": "5ftEoiNYQMkV81oqSLsVQqYWUJcSfWg5RSovQ6FEQRVCcCq55gXqW4fQqfCtdo5yuF6JxVFqSHnnL6sZ6EhoTMhK",
  "key29": "xBuKUAhwUJ9eMyfKvux3wMMNyCYB968YdGdhdLzU3UCrdnK1LvXzXMLRchjiiUk457iabJdp3dC4QxKNBrvrahG"
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
