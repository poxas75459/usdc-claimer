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
    "2dzNxi5h4htAQiz1eC3cHLF5HNGscNkJQrqTpNcVLu9zUT7YcM2fcfLybjzcE27ireq49hNu922oUUuLDgEwCV3L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yHB37Lx2DTyTjJdshjnUaCrnx1a7mHpD4D2Y6qUH4Pr3TLY1j7EgGy7xqqdURG36jPuNcQ22JECfia77JW8ZZy4",
  "key1": "218QWaHV86VxwacDfvsi13MCzspEfrgJMN7ZNKayXZVPZ8eBjEEVrQCtk5HZjvqtbVgCBz6U6DDdZ5KifKeH6f5g",
  "key2": "4s1c94VMpe56Qf6ZZD3cZ8jxeLjZFRW1eg2LmgQ2bXq2xtbw1YGz5GezMZZVpcDxSGmAcxVaPVbfEQwYJtpjSshX",
  "key3": "5395AwvmXZF7jQXo5EjJEhP4pK8LWZ3rkTeeEvmKdH8xTpUTZqHNAopoxYP6yNVStofbqwGVYV3NzJub9xx6r3Dz",
  "key4": "4sEgr6mfLR5GRQDYKshudD7odcgfcpcX68vNPw4Hh1DpPKoBE8BH1vtD6tHRN6AZchPgzTB6fcwfsaHCH9Tybt45",
  "key5": "61qFFVqAdfRYad5FgXB1gZWSn8X9SVMSKuTyXFDbdi7DNnMCgeVZVRkyDmwbE3FHXrVtrFKP9ZQKKGu6n3gG1bjy",
  "key6": "5CCvu7U6BdKawUoQ6JYyZMqPUttF29s2eEHqVvF9qgVcVaeY3LGaCx1Dc4eyeXjXVD63NBxFvmGzw4cqvKFWd1UY",
  "key7": "2SCGUL8zixDxap1kNYzqv9J3ABDf28Aww88DfVV8W8iHsj3aSUpJGvCBoJtH8zqzLehHvGkZ9HdfZohftWwNdAyy",
  "key8": "5Dy7mVvdmBbdHt15tW49zypya87z1TJVi58U5m79BC8Bz1Dpzxzw5jSV3xxDX3dphk5G9eVTZxYyCrSPKagoU7kh",
  "key9": "9uo3adnRyAr7jXeKtF9SsqNjbmpC2rQcSqtzfvKRBNMKa9KWRohvrT9etKSBxFJDVSKYW6vHyGy3SmBwvjNTTix",
  "key10": "5xdgeH7iQxpwDxkwPfgQ15rj2YsXvKH1Y2Gh724r3bcf1hfD5Gu4kHAKP1vCS1GnmT1UVmPrLHUrPJzaeMA3DbPV",
  "key11": "4EYpyVajzDSodFfXaeXMaGXQEBNuZdnQeqYYFXSEJXRLTw4uXBzpNweFAjfj64iMqMfh3ah5P83Db8b9abpU2i68",
  "key12": "5BLBoFTsjKBtbcBPC5bkFTh71BrinLoGKF94BqAWnBitdSDcJDVg7tCPcyi4Jh5C2atb3sTJLx6PmeLmCu6rc1CB",
  "key13": "YrkF7rQqZRDWYYJd8BeEsEeeD9GJLARG8bTdKfhtD4J3rRuRwddL1WopTuZuiy8axAYjx7hPj1R7HrxVDPdXCTb",
  "key14": "2XvL6iX2yjuQhHzS3EHsx9SEFGQL5duEMEta5UHthdsridkUeZbide1fNKvvhCtAM8xQJhWTF8XX7ujP6beB62ZW",
  "key15": "JK6tidLQHXPiQpxPnrvZtJdbTD3mqutdLdz4bnUPjUKcokZupX6tSvLztjb3cSxRw6KBEULk5XeNL3NYZCt7J9J",
  "key16": "3EwheYvpJjmL7hh1eSLVcrtiKgYEh79AhdjKMeX5ihPzyxKPKsuTZNX1MN7NubPVsk1A5x4oqEzsnMjCy8tXiWCW",
  "key17": "5rEak9nPYmNHmPMKuuoN1EcWjMH2eUHZnagtjSy15VgGAutkGDw88cpmFAHhfNTHHD2Qk73b72XEXKWMWMKvUrrV",
  "key18": "5w3CXbB5RzDYPCtyB8ccrjfxWSXbPRmBcxL5ZQPQwZZmg14TTgVYN5zUw1sbF7JPWKU5Gk8K2G8mBojjvnJx4SdL",
  "key19": "4wGN5xiNfqF5dcWnp4mjrfNUwRpU84FyipindCYh49gjdoDuZY7SUjqBSvi1EVwv6RkcVUckpHcqFD187H1EbVi4",
  "key20": "3BBcj5XievFEVt3bnU2fYaHtkVrC7NcipbMZ8jDFfPnynmFdvp4oaKRrZd5XXLKm4ZwKAHTacjbBDUsf8vKgZEmP",
  "key21": "32oM4i3X5DK9c2QU5NP4kx3Vu4HLTyGqa1fDLiMMRX9mcHBZFbuR1LZhumMSwna7p558BKjgzTfnvsTfG2gbGe8g",
  "key22": "463D3NTjm1pcBozUP2xTJL1KDWLhninsTxdsQWJaMYySk3un3iF7q5tfisLmEZBPg3UP5zMLjwCYkuJEcht5t98c",
  "key23": "uDusfbTWRNSNVs3SThmydaLXX1zLTGn6fhAWzFWrgKkQKNrXVerzNEtARRLhn1uJ2tjA8nLSbswcJ3qZWBPzoa5",
  "key24": "4eRcswoNeeaMjRhBjxqkHcTrnREsfzsyNRHbN9A65T7bVJknyYgRsYnggKRNfWbQVbHTV8y9cYPN3km2RFPwN21S",
  "key25": "4A1JtVyCzawXspR7KoUzbhuqRWukeM9M7zfE19znZvSY1edbCaJ2VcMbgZ69qbpeHF629KP1B3jpvz9HmfmsLauw"
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
