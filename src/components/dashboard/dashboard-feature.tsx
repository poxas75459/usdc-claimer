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
    "2uiNftTz5kSZM8CkBu54WD9Yj27DwMv4EWTgfoFXW47fopobKfFh3UPc8mAkYJfF5ZPmJy9RhjTkAD3X5Hs7xbgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GyQpe8GZH3zdaEGZWLQZUZLk32KExsXvTbv6z2HSJG3aDPYLp9j3YPpo1kP96K2AKLPKuHGpyVL3DDMJJMKpZbf",
  "key1": "2stHRw91KwdsNx1W4EdU3wwhiNpPx2nvKQo2pEhNHEa4Xhd2eF3h32wgrBaQzPet8cYzJc21FqUyKmtzLgpQEPwm",
  "key2": "4itmf7WGuKjQKsaf63QNrz4aWEHUAvU9tXvzqVAq6KzgrAWRUqyfU22s3adzGDC96drPRtBCHChjjrnskvKDuQvp",
  "key3": "4kyKxaSA1HrNbD7FoeGezjZRa6JvbkNCDKZ7LdcLqMGQPuuARqiDtbhwB1cnMTL9sJGJ6JWDhTGtp28VRnYuuv2j",
  "key4": "49NkeXkoLfDHhNHrrLnngW2bpRPAkuHMNJjVPW1Qbv8QX4u7sp1KdN8QWxq9jZEdzqxsNStKQ3q2zGnRzEGKoWTJ",
  "key5": "2grPx2mf8JrXGNcvAZwh2PWZ3xeMEAUhte3LEhubP98oCWEw4qtFAxPeYpCSvCCbBrvQjz3KEd4XBEVWUNpY4jS3",
  "key6": "2Zn2MNFeV4jacQy2FWxQu429H84xkkQ3KPs9WGnY2VHNcBBhrvBHcu1fzZiepm1tdScAnmsLTBi1fnNw6qRCa4Dw",
  "key7": "3WDVxMpgZUhmjZnBEoq8jhckJRiQ8vQnE2MeSPesnmk3mzRQVkjRetQgPCq39p4ssP59PsJw2TjWcs8ejmPjCGiT",
  "key8": "3H3LEKnxWu7V8eVfjuZ6UK1J74eaHtBBu7pH1TRkXKnYfx3Nz5ah9mQxaJboVT1xUXCw64QVLdKntwAjP35R18dn",
  "key9": "3w6DqxXmACEUPZp23vi7DQc7UPpK1EsESwHaUqfyCY6Pfz8C2FLVEbVCjRj6UW6oXv8jGvn5ZcuquFtLm3vEjBms",
  "key10": "59SAEUX8tJmnimgVdhFZDQELDktavHktCwrT8DGYqsLwvF7Hej5X4cVq6vR9gyjLhjR8drpLPSPuCY5ByA5bR2ff",
  "key11": "5CUKBwY3YEXB3zZNzAFQ32U8kAj3TwBoMcE1iTNQriERuefvf2qDUC9iZN8KH5i5Dd3y2rUPTMScfxZq8wk2q6zb",
  "key12": "5f7GTYxu9Abj7j4WMPNQR122V2916gwbg2hW1d46KTgk4EirfETspcqforKcSHqb1NgyPPX7u84gJdJxQ5L6DtJy",
  "key13": "4d4c73XnBR8QEegDMz3PYDyoddYRVnqg4Lodb2G4FcfZCGNE7aUHuEmKQMprH9WJqcyDi5PZG1dpwneMyjVBzJoJ",
  "key14": "2KGhp4vCDBoqBgoYGD8xHbg62J7GyvXLCqbaDY8nSvNv6L7zYkMrBiCFT13jdcjn8F3PsejXAJLo7yi1zJVyzyL",
  "key15": "SRYJhcvJKfgDYfAzy5ULgZRJEw845W6p9jqFr58xkhtGG2M1vSYkNL3EGcVAjLtTuD6aPZ3amFjJpkBU7XTiJyF",
  "key16": "CRpbbUAnAtj4H7fdJC2zFUdeGcHtdoSBzYCtzoXYvCHqDuSrS5SxH7qimU2Yp8M187EgGmJWTjTzdv95Wd1XFHN",
  "key17": "3zStoHMcxioVS3WGrGSMEqBawxdgeMhid7Fp6SqUWJsNMyma36xijkdFpNxYJPN7S2CQPeooQUjMHFagRQRMjMFt",
  "key18": "2UVehWmdAB88Ju1MrEv7Fa7z89pXDQwndP3oxA1UkKjQHBxvKLxr6mKJ5kWLgooZVVvDvdUP7MgZbH3jk8unNRbW",
  "key19": "3ZectjtUUCSP3T1wZLf3pJoLocfMUiXM8Stm8GS9vksExzoA4s9inM89zapWzSTPXNUpMU7eZJ6CvCdTQoE8Zmev",
  "key20": "mF2bsTXA8migaz75bkT5JWsezxuxPC9iZnr7KsXUy1j2sNzVprJQnxnaVdXT2rtekLW71cz94yq7tUijyHfYkpa",
  "key21": "LjAzFHc3qaz9AgeZSbygYgoGb9q3rMbQXzX4GQFuhsgov7soJkZ2csojkPqNKuUhcRMoCHPm5SV3aArJhcZ9Ji6",
  "key22": "66U5roHbzJ66PRxoHWN38rSAJvJhqktW1bhT3D4f4cGfigQ7tWpPYbfY83eHcyWbn6vL8LGQCs3v3b8pDzivxXEX",
  "key23": "4DA3SzsKtK7mCcEnbmRPaKGSRxCxWNgFmoHembfzMjLEvqpiGqgdW9k5wtB7k5zXiaUeXaid3Vz7FFUYmUyn9dKz",
  "key24": "3sGo2D37mytKzDCNx3UqEfQZgw6KaTQW3E2tP5f2dGA9FNor1ibafR8yPX1k8rZHV7mtHxTgp2TU4VydmnLHHCdt",
  "key25": "4Y5ggZ4UwsvRSe2wLhjd3HPmWunXqd4fjhcTjWfBWuAaGbNnHAqmk4SjsTDUWKWb1wkc7L1FH29Y8ipvPrrhvrvC",
  "key26": "275KUVH1YoHRpsfRTeVqf6yXDRr9eiwi7CsRc2CFtPpW5iwbasykC2sjkRvWCW2XGv27c4qsfQvB14wYcXtKZreF",
  "key27": "35F3nCzaGDd4qKrrjziDkUSXK47PaZJBwDjTg7DLJ71WkMgXKjc6pgbJo7utgbotSiGfgE81a3oPqF4yG8q4j1qr",
  "key28": "36jpaCx8EertuEEbyymjXbZqpbCHWKKhc1Xh2MpgfFBESCuPHPYe8Fvhu9Dfog9A52HsaPWq9aE8YJBni1b8yp8N",
  "key29": "32QHEbvXd5rmpHWa8eLTS1e8exY7E65uXAkJpf5iK3ViRpTucn6geYx6E6g5Lj6HFjgrKXe4ehiUGzx1Yy1YBLu1",
  "key30": "5u5riAdqEzZYtPZBNS1aUKdbXcer3EMxYUvFnj3YiAoZ8J2X3ccrGN1Uf4TJ5DLkeQBa35nTBAZQNhqHpbSMCoMs",
  "key31": "5KzDoHuTsMourJEbxDjhKPDdpDyBHB4h3ieKzR8Cj27VSKzLzTZanBKnaEuo2aEz2AtrTTAJgVmCY9DPTi1jKM4J",
  "key32": "4W2tdwRVxyqBqx8JmuN2dLBcqXWabqBCTxVXNrHLPyD8Api4HUHx5UxjuZpEYPGxqWsTmxTnwtQX56xaTR7n2AyF",
  "key33": "48b7EFp1obSWMnRwKYubh6vDoY9Lag1B2DDhcVHffpU4BP5oriJpnUdgxmnps1zLhaoAiGxxusGqRvYU8c8CXTUf",
  "key34": "5BXdcNVudecDpyfEjXb64Vaeqn2XnreS3Z8oKwGercpTYFFvr4vnkTCSwBDxXwXY9EHXHm8uP3M9CRnXenrNo9pM",
  "key35": "5QZWNXcVqaAm3uuPBDLGqZTPTcrBvjGc8b3dZJPR4h59MBEsVpmqpvWdi7E3PL5tT8rQ3s6Q3MsHGqFmmygHYG38",
  "key36": "aZ7sKQgehbfTNnqVV1C79SSAtXPHrdzdEhKmLNqZaTo6mHq8XJD8TJucFkWmgBnyYCSiWRH79dyFrsV5WtmSaww",
  "key37": "3B5VEEGDCPTzFXatmC5UTpNyvLmu6ZufbD2Uy4RVpYtKes3wex9Z1BsAryeqs92UeiPxZsrocY2iedQZ28TYkyuT",
  "key38": "5bMcB6Qb4PvEeoTkzbSw3nGLPcnJyYHC2FHG4d8X7d79jGTAynSKYUMrcRcG3nvj8BR1gdVqAQMppfF37kDKEoYK",
  "key39": "4Sv9bVfAL3X9Y8TGfBxKB4gUPSBdVAT4o3boB89k6grhNuasg8fUrNBn7RugGNfbAiyRyGKihAGJgiFzWnoQmmit",
  "key40": "64iQnBa1Pr2c9DhtAbqonLsHRRy9UH3mSRxjPiAzjL3XdNXyMWq1Qz4JyysKcmKhHMA5hKmHvDHpkXEKXtZ4w8RR",
  "key41": "5JNuiyYL6tDN3B5X4SPqwWt3iPWEfqz72FDDSMoTDRT98LYAqHeG4AYZ9UWxgcvfQCtpzMAYzUBiQzNjEXEtqwnN",
  "key42": "27VhkW1eqe3xGkBR4gg2hHvSaoZCRvS1WrzZT2e3WuPuoVzM1ACMhLYgDRsjniQXuS1Au658gXyUErQHVcc4sxFT"
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
