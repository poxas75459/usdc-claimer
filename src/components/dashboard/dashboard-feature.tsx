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
    "5CgLMePpcNy83ziyRP5V6XtH4H4smKZu2eg1JsjBQMGNohXAXFiNbbPBdv1m2toauyTnjeMmf1EXiZ1EF65qCxJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BbbZxRNKnxrtt6J3BTqs3pRPsLW2e9RZk3fSePXspRnmDN384yBMdizym9s19hGQBoe7kE4HRDZE9CFHjzWSTuR",
  "key1": "Ja8BdVqD7vFwfEyTLzhqcJ4V2YuQkyRSKo8RjKapzcLrMpdZH1cuFExWKnRJGj9q38EhbJ3Cvs2MKNg265z8aEJ",
  "key2": "8zTLESC2r7VeUD5q3PX8wLJkVW4GcJuPRB9CkCAWMxURGZ5LFJshd7mMyx8FWa9ZQQosudJ9jpJiQv5bp2Nnd5q",
  "key3": "4sEYVSn5H5S33FXW6WcUikbz9u5aaF74LSmGrmu1VFH2WwpQGG7zTTDqD1dPTXwEvpj5dGzjsXugRRpPCwnCQRBs",
  "key4": "3Egv8ageiwT4McKaQVWq724z8b9tZ4gzyaYRyBPaSiuGWoA341k94eb7d6vHvdZJGV2G9eGqLjzQre5b11Ear4z3",
  "key5": "5ThJUVGsXSzJHTjxmm7vrAhS46C9RSmF17K2mrbWXCX6QC5mgkharNg8NNENG4dhxY5Bnhw1nMBDJu5h1PHC7VA4",
  "key6": "nGyjPF4NM3n1QzKhGVokjkpEqKSm2ezLMup58kgPvx9MYcmgCo56gnjehHcGYowC6ynZvNUN4rRQAbxVDSsRXnf",
  "key7": "66qcN5KbnciLKac1Qxpc4fHPSYkGsC6RE2phCGyqMmxrfLmcxaCB2q9vU6MwwydMgYCmj6Q3b5RnW9f32minkH1u",
  "key8": "4wC9fpqtFbffF5zcxUPtuiP8jt1Xy44oHPzEqJxdGXXDk77YUQz4LvDCABcqfuuRaYJXemgAjwaMFpbjGtawYxeJ",
  "key9": "K25nnRduvPRKvAY35jTqoFVqXjM4fG8LRLPN9kDHRBk7qwxkfdQjWaALRKfzEJoWHYuxY49V5HnXub9QhSxomn4",
  "key10": "X6cKfUFQNPJ5tGY7j5hP9iaSnvoN2XsQdCGviHJ2pLVkiynr6GwyADEi8UYxQM19L819XuAoqbD4UtFcycSUrTu",
  "key11": "rceRmKSeiB17P7JGw94NmwZxzc7MqHVP1kRnoya4V7HDHfENFS3a3Xp2vtU1KDfj3PeYHMy8qVu8YA6N6J7owck",
  "key12": "k4jvZYLbL9uqgeKAa2tpfZ23QmbcnhPHjMHp4MJ5Nxo2PPv6SSndTyU5Sbmy8oatS8CoqzXW2cswt4etE5jmd2Q",
  "key13": "5ZNuMjir1rr8yRjC3vomxHoHok3dwQ4KGfVua1y55bJnBjAFiggSGaLCU6LvAHnM9dc9GWycxiPooqB8H3UXxLcQ",
  "key14": "2hCjVVv7AUzo3ZgVK9V8AJgR1Dpauq1C6thx2xz44kQGLMKpSnhorsXk5etewh1iACaGfAr4R453kzDQT3kz16Bi",
  "key15": "4esMx8veqTjEH8mvsSK4ZwdW8mfENX53z2pjj1xm9Ab39uAJRtCwzucePeupnyaSExBg4UGzoWYjmLwjMWeBRuur",
  "key16": "64Ubatg1euZuzMU2GR2JJyhwnHBwGGLZRCfB4iSFyyhDHPE3Tpix2XndunmX4oPefHD39HbvzYQCf3GJHJbseAYa",
  "key17": "jvsQHcasLcNdo29hhY1j2u2Q58Dyg1pBcWLhsrLQXLiBd7gg7Qnbnic7rqy2VEm4Z19qHBCzoNdbSuVC2eMKQaj",
  "key18": "3foYfjEeQJndVw6q1gxGeZqLyeAzNG33q9ubwRVFwF79ePGfCjxgmKVkByMGWAsk46RETiFmnHsPJZLUTzs4qQXw",
  "key19": "3jJjyBVcXhZjWR3AdDbXYs8Hjvo7fhJZVjLTYoMHN6QmoGjWjf2DrYPCwbGikTGpSNY6DWWCS61Xf7gWJP3KMaTm",
  "key20": "3aC27FxQ4ZHTPn22fb1qgMEJmN8aH7siswVxGyc4NQ33HYz6cMM5RZa1gm1YuZaPsuW9aCJTTzaVsgNRET6CotzE",
  "key21": "4oZzxEWVwkgpZnDY4uxWpmh8A98mxX3MjL1oXh5JhYgtXZQg6z5GfoMQ6NNYpZmUFZSp6Kd1f4H8FrKhE81BxXwJ",
  "key22": "TBUiM2K1fSi3qkyQQDiESefUBN8AXhcNG7J18BcHXbFQT3RFJX9dDGicYb49HxRPW3jaEdRhEy5xMVmdvhNypVE",
  "key23": "BLyzfBma1X8YuWxSZPDzm9E7epAVBrtWypVkiSKuTHtfdHyhgVreX2v7z12ZLByVdKNaJHTpMKR1haKcHgYkeeN",
  "key24": "5BbXcJJmgu8QWErGDNqJtWTUsJ8PkytJ3AA5Egz5XWLRgCBZ9WFWp89iCkeVQuuRDn8xxYpf3xvsmruxouSy8bFH",
  "key25": "NtA9ydab8bDiQYws98gvFZYE4RrVaUZjMHp9qoELkxmPUgjZ6MKx2t7SbUm7kyGYiJUr7i8zPKStFRvr8nkAXou",
  "key26": "57RvhramZxZG8rYVdjiTPEKyGzKYDoJU3gDQ8FTR1M1ibm7Bzc3efiYJkPWwDbE3svLhQcjW4Qhw74iaMPHTqPez",
  "key27": "23ALiWUWTiUaYnpK37b4mXV1JEteqAJdjDztzoFCtWJXzkqFSkwCdnVepbE9qEcehbrGQmboBXr36Z8aHdFV4Mgc",
  "key28": "3eNeCkUbxQNG5k1eYYygio3UUG8kPMttDMfAWC5KCNHuu285E1RRcct5m3pAZc8FTxVB4WVAfSMtQ9EnwyRoxZRh"
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
