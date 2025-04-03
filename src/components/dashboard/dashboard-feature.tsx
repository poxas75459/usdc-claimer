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
    "2oe5MxeZCkon3nmzM2CewLVamGUxud4EH9LP325PkSmxXV63eVuF7DHYwkDJaRQNnZ4UWDwnT3HEWMC5LixEHU7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LcEYm62M1SrS2mHFBwz1kh5qzwgvqQWo338zoZStav8EGpi6TFMbu2YtZo2timKB6JEaRS7nbBre8QU8rLTgSrE",
  "key1": "33XRihWvUmeHc34j1rzpGV76DN3dvUgVy8MsQDaWX6iMSKTswBYJjjRmgEuoAS4FomECHnnL4uJKVqMd5V2vWCAM",
  "key2": "1NDXWRiF17G9AgpRLHf7ou9qzauUjb1Bg483VFJoXjfMT12FitRDqnquHKHVzYfn2GCBW4bSYJPjoKnYwqUhjPR",
  "key3": "2tSWebaiGwcfRv5mv7qRu4LRuygCrG6RcXfnbzkuuC7hyw4GfEmEQeXNmVk6QXJizKHfge1MB288Z4fmFS3fpHoE",
  "key4": "4inLCvK2A3S8c9DgkSXiJgb2womYpF9gCzPYvRcjVx7Exe4G8YUbqdvr9sYPQntYddR69ib1Wfo9S4Quq138AfNo",
  "key5": "2Ftinkq89KAXLu8AmLQyGxWT39QCDpjdus5BJQNwzY7bUkUK5YEvV24SBSXnDqv35dcPrBmPJLgKYUwu3HEKv9ho",
  "key6": "KXZEFhEggud2uyr83WVMGAU5QNwsi4Y8Gca6UZp6iUmP3pzvDHjSpToL8VnecggvARSDAgYzSHfB8MkDTP8RqpT",
  "key7": "2oszM96n8aSYQw4P4BdUnW8XJauatDMq9a7QbENHiqBDqTUUCM4jsYYBc9HFhyBqr9w2dv8rgxLL1CTxPDpXsDrM",
  "key8": "J1VC5HYQicv8DyhKoFPEjnPzVh4Pc6zmzm19iNvVd5X18FyC2RmuBzZJmLb9woWiewdprVorZvrTcrPn6PNW1Dd",
  "key9": "5rKBvVYKiAubdHdKfKWLKa19RSCWZeGX1D9qRhB4Sxu6JuiS5RWqqu16u5kqmsbB2R6GKZX1mSjL1ebhL8AmRFUN",
  "key10": "2XQCJtGTbrWwQ1vPjxv5fimyzfPG1mVEoj7SK6AFp5GwqCNAX3pCDJ2NziAvWDQeRmmokSnMoimTpGz89HoYwVjw",
  "key11": "zHqFLb5s5epnp3EvaPw1hwNsJPCAZq2xDQqxFrzvheKBZgJPGFpPxWUGvUBiQzVvAix9fbgsqFfpAhAuWTbpora",
  "key12": "5WTbx3GmJGmSWtL3Dw9Fms3TX59tWR1YUaptdDFY28XQd1XfcpCrUCXShirAiJcH4sT5aPC9rT3tsJSdxRbFTnF4",
  "key13": "5M549xx3rFL1HgeK2x7FhEc31162bZifLhh5e3A1e3hyRsqz79UXXzDST8bX8F3pPvP5RM11eJM55ZQqcxmo46Qf",
  "key14": "3GCK81N72mWb5Vx5VvL32ASs6WPtzF46Zs8AcnMq8xUdrFCV7foW5znrxscRRocoUFhfyb1BaXpAfHTGKoJDFf42",
  "key15": "4uENRhJN9tFDxLXzqzacMF5kqAR6S61e5zMpXTnnCSHJHjufDBUAjbyZbujnyg685JYLBZDaiQWz95vee4pn9JPJ",
  "key16": "5LhqPW7mW8PTSLfWWGsNMX5zQRuxVdC2NS5fFA1HU7V15DrhNJgbh3ATJaFjMeueSKSTQRyRaCxDGAcreSD3r67U",
  "key17": "4B15ZYuG1axqWyn71Mi6N9THPP1UrgEqcxW2c6yeKMfbPkd4CQfjrZxzkdPWXj8S6ire4d6g1eZnzKm2t8FjFqAb",
  "key18": "67q86rbUrzAZwPhzsPDYV5n1Wq4oeMxyBoNPLVJmHFzy9t2e7YB7tCk6MZyhEqq1tHy5nGbs2A5jVDmzUd1xpbFX",
  "key19": "33CAgWn229zxSaJswFavHn7tzxWtQ49UfnB1CLHXQQRBQ8jc9rwAjHYspYhMdso37Y6SVk5e4j6K75tobt63rUJU",
  "key20": "25xKYH964ZYmd6dScCuYzJuytTzJ5ZEVJvN5uin2qHZVTFejtepquyeHvM7R9p7xkPRzDSbRD66BM5cpTzZ4ruyy",
  "key21": "2qr1NSER1uyAGJNunLNaxDszSS9pArvRy3guUs6MB54DuddaNgP4QgPgLoMwiudZmdqVJVPaCgZhCsB6f3UooTmd",
  "key22": "nvPSCVHxUtX42xyMPPZrRfaMWuy4btV4a7NsUNptTTtUHQRCt2imUbLpeiEvgzkhka8vaymBW7f6AxBK7zuqnMi",
  "key23": "25RmeoS2jjLkb1VTo98rDtyX1Tru5UAwFKiAp7yJiruJVoTR6t9g3YmjHB79vp8atrLrtSaVt8dpMQvenT43spXV",
  "key24": "4oeNcuWa2yBxMTM5MBPe26NixxZMwUaZXP7XFkNKcd5gXbfCYS18nhAy7XwGVYUqvaJqRKnCBeXSbNSeGHtVj73c",
  "key25": "23YEg2XLDMhm26tcZDufSiuJquEuHPzZk5ZGf4evGJfzWQXNWUdsMT8uKyUGgc8L8NZWhj1LhZcVNALBH5Nea6He",
  "key26": "zVpjfQ9XWVB5yG2qF1zqfCRpg8FcAHDBBWzQ3LJ1t4K4YU5z5WrZhFBxxo1Xcp1bpTY77vBnhwkVuZH8ZcMXvyk",
  "key27": "5f8cYPJPzsM7x1oSuRZLBrnR5WpcbaXSdCNreUCvmxyETx3isCyYwqt88wMjt6sHXysY3S6Ex4zpL9SjY7472suG",
  "key28": "5GyYh8Tb8rEgTTFXhYHV26DoUs3XDRSPcGjvezNQJNMoPGUgSphJD1AZKJpkqEwMYXmcGABr8Y2RoiAVZNFx8wRZ"
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
