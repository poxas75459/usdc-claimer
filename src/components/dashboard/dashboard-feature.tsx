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
    "5nkvsQQAdfLKQ2iQqT2gYS6BzTquq9GFqq1eZZPHqBqNU9iMk7XFYkA6iPoUYaejSf6gaoYvqxjuUzaWsd6pnp4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DsbZDGghgxyzejPT9dWWmdiC1KsnFbcGfiVxbxv2eQY4hZrzATpA1PzBdsPrkZoBeuSxBH9PMH7NguNAUHL92yg",
  "key1": "2wse3MAWWZubKwn53wY6W5cM64eAzaHzduhpVijxq1tBtFumaaJStYnfWd66tsUSikS6A8sVQhkPxWkLRpsAp2kp",
  "key2": "ZFUmyD91uiYLwgDXUB25CF1HNpwQq3dCLRaJM5Hjsy8dbVV6gaWwjx51PpwvqRSWoGrwVHXRFKHVLnqqqQPaFjV",
  "key3": "43gGKXU5YDHX4HoxX39h8RXStMfaPFZJyffuCmmnUyNjasdR7zsV4XXWkbVzimqtL2sk1v4KXPPbtqXAGnJWVoMP",
  "key4": "239mpsFeWQX1oykj1w4H9Cmqfcdv8i71h7Vp3KRgrtYyR7fJKxcsq3NgMmJXC6Au1T9Y1Hdm9b2fiehzvv46zZU2",
  "key5": "u94RszMXRCKfyL9zBiQGSXATD2aPTvJMF45ags57aqznxtFNnyGyUexJTLHHDv68oEsCjEAaGSwcoVS66LwAefQ",
  "key6": "28Ev2csYvSfJC62NjBP8PiJwRR1yLM12JfrUJsSUsb3CgCBYMLsXGTuoQTmjM1r7iioacq9zFNMwYCKofH2oULkr",
  "key7": "2t6wSA81CEipfxCdyQ9PEQqeJ8nJfXfu8B8aFzsF49aEs6kduHn2XJVtP5TngqZGRnyv7BETGBBfMeGQpiAQiTqH",
  "key8": "5cdxV4C5Ywf6mkKzJqweKcSCzh3ttbbpg197ANHd6pqUJbNnJbLnpX1yu4oex2Rn8RuneWeomqXH1u4Cij83WzMh",
  "key9": "3ZBqYHC9TyDuJbQquPWBWmXVN6UQxq1crhTmk7hqs9MegTYeumkShYzE7VP6bEx1ydYXk5FwyEKjLmSAmNQdbftZ",
  "key10": "5ZNFLJi7AhwFxPiwxNWQBbVpnZBS65sqPL3fpZSNhZLiQLk8Tbmdyjwaeyu1Uzq1U7nQnRzM68fvSCjmeXDCxLbg",
  "key11": "prdzswgKNEfVccuYH9A6SWU1sFRQajtNxCsKieepoSjQSffMkKgkBPEjaqnp4pNtAk1KFouxTHNZK937CFQJVR5",
  "key12": "oFMYsMhevBKSDsnUjNuLkxTzqUSqPmm6jwKYitLzNsC7BSjfezvWzx4GdWjDATt4Hk8zT2dJierNnaiimqqAECa",
  "key13": "3J27RGpduG7ogo7pu6KfLxrZWhWuXgjL5N4Ea2hphYTyoQj6JD3zkrxGL7gV6PGVmqcfDGE16Mg1kpYWLVpLx9gx",
  "key14": "yi1d54i2znHJZdj1ty6UFTfqxKNUddArc2mnsbSgjpnJxeqs6HEFZcx1apcBcV6gwFp3iQEABRnyL3vjYGScK6x",
  "key15": "63z7k8nXNRykpgEnb4G5N6jQmorQVLBafM5SSznQQ7M4NKbwZpSi2rU1KSXVRgPqhT1Esgjwz3FdzAEuVhgjCtJT",
  "key16": "jPup829mSY42GDXw1ntvUEmZDPmHjGBUZ1KPEwRs4xcnogd36UKrGNLJVj2wVG4hy6ec4Lz76wwEkQRKiaQw8Ko",
  "key17": "4yWHDS5xCTqEypsBHGd6Tu2yD7qRgkDZGyyEjhBLWMtkD7HpWuVWJbTfFNWtEVDqa4g5V86BKrPcdPCViDUQvNUa",
  "key18": "KvXZGtx7KVAvs1D124TLkPJyZGWBH9xnecrVhXrHRL1ymU1KsuiEkYU75GRwz9xT8B1WhXUYb1UyNgMA4roZPoi",
  "key19": "2ihRy6tRJKcGvivJzHqX4tTBFdajayKinQqyR8iADLF29wruRCToAQjR5LcjYEE6n5Cn6cVYsDUpCzVwisg1ThFf",
  "key20": "23AN9y3JjAQy5DkbLq442K4B7TJMfqbuktbVeBmgam8jLtRBGy96CoYLTHkLERvVUyghQPSGb7zz6hDoFMJawF41",
  "key21": "4H8nY6gzJ7EAJLBBf9J6bnAuUPs2GaS5K8m8kpb2PEM7CRzcowv5fPa5ztTvbJuoDLpyETzgNAUz4D78nQE8R9pp",
  "key22": "2p1Ze2tw1xiXYSuC9FWPuyTh3skA47fT8CHiD2yCvquY46PpMFzoZAsEQdGZQUWdNBHbY7V3U9NXDrQgsGzoWfJb",
  "key23": "41bKazA1hAUfkaGuvDgARVzovmA5d9x3pZygJ5b5y8n4DcuVmozX3xKzMyD8TTSuvFo74Q7ogTNmhmm3VokANrTW",
  "key24": "X3ebghAgYKtoW8uL31hZ6xGRwsiiLipmdpZvkgppJqQ9vuww8JtnNvkqzUXGebJDkK4XfGNEyMr2wdffaC481QQ"
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
