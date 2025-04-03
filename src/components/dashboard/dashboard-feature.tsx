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
    "oyBXF1gZK4k1i9pg6cdU1xM7Mw6zHYXRC2b2R2MFPvUSsDk24YmfUqzdHsjym6edi58ZLniSw3UwGYXVK6KobfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjEj1cnKRDefEfdduKJ47c3n7yf34dBcN6iEaoUsVcEAR7dbG7YWaHKv7fhHnD7WN9YLc26kFwYcNxsUhYC5Knu",
  "key1": "5FQxzv555w3bMU6gwpNGnDvGdxrqtqHykzmrfG14taKCqGN77HSZR623yhPWtjCiKBN29e2G4dNTBaHLyfL7bgNb",
  "key2": "2Rg63MvToD5eUo8iZ6Eh1GJAT4vdHgg25k8HxYQGUXNCu5xpTMKUzhX8HQzxYrzQH3MmyQiHRFQngL6bXJLLJby9",
  "key3": "2ZyzohfxqyK1iYyURBYqEqYdonG3P8HpP5fDJ6ZPxtGhCSBCdNKewW2r2jCxFSnTo2SU8AduXZfQ7ScFCqGzaLD5",
  "key4": "5qi8v5nA7oS4vGGZGLnzqs7WBZbGfjftXYYfmgpN8cfaFjSFxsnz2zczYJWa1Cd4MYesN4nnM6BPRnNGbqVfqRoB",
  "key5": "34kkDCirVsXabXhEP1oRBEhb8bL2nZi9tWCnw1ABps8daYN9nqVKuoEJQD7ca3poGdNMg3K6Zx9VrnQVPnFKRh7Q",
  "key6": "49SnovJqv4sMXeqqRLfkaSKXGpF4SmfkXCbxmGckDEqAFTi2d6KYHz1UkZqL6kbyvAgbfYsLPX1NWNZn1dWLFCSa",
  "key7": "2Y4Vto6dt1nPqPRF4ULScQApRh98u8wYeQHHSXqerH2GdGNRbSm9jtNRiAvjKB84zCZoWTVBXEUYdjbTUkBu4GoU",
  "key8": "LYcCepZzwNRMvXFdTKkmPcjGZ3sJ59gXawaSCYFLL4Xa7rZvn2xDza8JzspgZj2pAg7nGQoNPdN5g9zHkMKYsxa",
  "key9": "2W66i8NhHxHzjUZJVCm3MZ2QyJCUuUnCYbA362f8Y14XrXFwSi1cPcDRtJabvXkzM3VahmPVDPTdEnCeALsSXZNk",
  "key10": "2yBtP4dA5ygkK4uSAmfPoGYtFu7unB6XFVfGUxLnu6TRNyR3VL3AqA3TwDxMqPywRdjY5mqNcBBvKYq2qUn6jvDq",
  "key11": "3vmfUiWouqw6893j1agHtbxbdMutWwE6EjbB7f8EKRVVvLoGbjo4F1z1w4je2CUNkFDjd2uTf1V2NEUnZzXkxSch",
  "key12": "53NnF87qgy94HNJj97iBVcExru3Fme4rmQowAiFf9G5d9V5Aj7JghAAVJ73ZiBRSMGAYTpenyXoPZaxRXViijTJG",
  "key13": "3ZA8DUUMbQ9a62EMkhQ2FBjdmQutSJWWgHDpcCLaxEKPqJ4j66xcvNU6jApoWXMvSzkCt21umC7731QEryrGD14k",
  "key14": "5PK2EDk5a9qyaPHkv94vVHJFzCYbyAxhPGE8qVg2yTxh7Gr3myzqonHQmjiUWi5hpnHndCpXyrhHnGSAG4ZcVMpc",
  "key15": "5Yebxx16jeiRSb3URGbWkkGtKg8R89NQVm8JHqRieKYiQXMBAkzGnWwCJyjUomaSuX7mKUQC9k3W2vFh2qqRGppy",
  "key16": "4XtUrdYLL7Cp1uQ3APK1WXqfftDU8jerWbACXFuBrn8QZKWJSMXyYZt5WWC8s1dV58mTyKMyyxx7q8E4jz7LkN65",
  "key17": "4mKgabLG5Je6Y8j2zujDg4bsaX1jvcBcZfstB2icL7g2SFBWq6sM1kiHbcTPvtRQnh1zjEKv7yXnbgbg765zJZnz",
  "key18": "3UHx2VqvHjv6irkR7R5pWRCKVPkv6U18k6uVwQ8fof3M2byc15oitn7zTiv9nDbS8UHfxCJMWChpdp7vXX6S8ubw",
  "key19": "4R6kbDyFkED7H4sUYL7dp781AEnzHGqG4UqpBmDL7boiuPssF46URTQDZrTFTT6eXA9mf73rPHseGmPUpPacUqP7",
  "key20": "2Q47i17Rhvv8X2b5p3YrexK8uVogBAHuJ9CiQbG9MukZK4oVBeWywiEnqoWoKWWgmW1jDmRmiyW4MXxvyJxqwT5b",
  "key21": "CZdr1UdPhpxxfoanYsgZkm4p7wB9z4cyuZ4Z5pGSu1Nw3hpVNk8jqGQ8FjjvdX564GX7NyswjuxWRPKoQJfBb8F",
  "key22": "2LKAG4knVedTDZjYRSV3NtKcBGNAbqdCiPS5fobddxbExLAsk7HSwaU7LmpFT5SUuLijLhNftU9SxJgthSor2G8g",
  "key23": "uZUd4jLVjAJGhvB4NfY24t5dHNnrXLZVDmFcZobQ4he52FN4KFvi91qdxAkLGF5RkMBEvHrZnN1B6drB7BLwdy3",
  "key24": "48gDARgGjqtYmsXzKFNpjuvdQCQ3YU792kZFUgSYqGRFq8HQYuk7RDnqzatDVgm75WfcRvSiva4Mysb7LdZgeeWq",
  "key25": "2zMMfdm4GqQx65AJiohnxeZNVpcabWpneLBBwyF2kdt1esgBwHmEYFx53e9wXpsPhomRq2ngJjFhC6rqxSx8aVr7",
  "key26": "3pinVRK3AdHwvw44gNpZEVfAZzUDrVZP6k5x8SMMihDv6gKAV7Lx24dEQgFnoUd4JbQRpkZErVTm4XqEVocZswc1",
  "key27": "25cm2oqS7mx9QS5ngaw7kZcwm1iRkufBTPERJyewRJJd4JYw5AHsNsgTnSPxnp6XkjfAoyD7xxhHfz3RFBk3sU7A",
  "key28": "tacK1DqbyPcoZSasmtCM7FCb3WzYEbfx75jNjHQqG9oSM2su8tMCDJVsgundQCNGDcToX5YKVvaBN4R6qCe9Ecp",
  "key29": "92uGY1phWTty7oWkGPtMZ74cgD5d7rxPg78xcNUcbiZHzLKFAp9ymzokWbMaXtCLXnT3HHWGkSZTwSSUQjQP9rN",
  "key30": "4p4Lvzz1EKTbiVi2BsutFagRb2GTCUTgae6N35qokWQPbK5qqKT9rcNLTbecf6MLrDt8GASjnqJSZyh8YcMJuUtk"
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
