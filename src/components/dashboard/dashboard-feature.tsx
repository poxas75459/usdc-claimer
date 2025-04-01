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
    "3hyqr9oFRSkB12e6VuWJpnmms1gQzGpGfSXub9Gr5C8fZneEKRsLnRmG1XrQaHeochdzMrMqUwon6KzYdopqkdiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rS7W65DJuoP69MatFJqqjLCvX9Awt4wzQfMDi38dCLbsgoviWd5w7kKSge353ScBLHJAR9LkbzMqQS7Hr8ePjQm",
  "key1": "2YJMn6DvDkqetzuFZ4PSWLiX3f9izaRdRRt4B7VZ4twv78sX6DJh3MmYWgPmeBYYcNjdhE3nVtGKiG11yqHUijZz",
  "key2": "527htzfGXH5j8qEnAaG7N8UqzxbvNrx9pRGU57Jgw1huWQYtszHz3b8JPL6pHbDgs2x2idQhq35Te7N9YfBmTgJi",
  "key3": "4TESJTEfa5jbSiXyf8wKUjw4AdVURbdYQ2DYbjU6jcGkgNSgBnUdkmfGnphQED1SN75My3VrvyA9R5LUVD7W8XN9",
  "key4": "ZhxsMBikHaM4ubPVvQEWymWjKUeuMJnT3BzzZ7rjotdULZK38W1KHs4BYFZi1DYgcFy41QuAxnGe2ipFbPzD4Uc",
  "key5": "4LDQjuxMDX16jmKiH9tJ3PVr8iMeU8LTZsqyNa31kES6Xda5AXFe6eiH84HzDenLVUaUkEWznYijccZP6m563u3V",
  "key6": "54Ee8EzNVq5Gr6JN2opC25uVx6vKFAt4kfFEcMkVgjdkXciEb3XLFxVj3etMd1ExAayxJghVZEY8i7oUd8vLkYi6",
  "key7": "yXwiLLw1sB6MNjcCmLbGUNZ3XMXpZS2oii5FMWiKPKcRhCKSDtPsUqA5p9XJe1Mk3hkPrsWA9HsTmQE1xDdBJFa",
  "key8": "3cVEfoBcyXQFM8p84HajzAiLRy6szCMwxXwBYnFPiDuxgh5jECpGb5bTcKLqU6pjvLCmzxjLy1nQXyiDApkr3mjr",
  "key9": "4nQUSAJVgeaNtCWaqvCY3eTPsMUbUU2XhmiVyTEDwTyfVQTAnF9mBdtfeb32bbkxefyn4CbYsgCSfTNyZucTSazt",
  "key10": "4kmBncJj9MpHMGnKAEosncm3ygkBYnuBeU1fScD1VBPRKnUAt9z8j1au33VRBVEb6GnyPxZpgSvMp6BmbJy8HehL",
  "key11": "2aLpt39KU6mwLd4vxZcP9rTSebcixZg6LP9xuKqQyxDdRrQmp7yP5QRU82x1mxvZhpEkQtgRgz4bPNvWBsvW1deR",
  "key12": "4aVArrGrgjNVe74EFpdYZudWtRwBH21Y2C4JceW9jH49azESGJbsZ7rJVWvY1a35ZDxFE1rKJmybXrwNJYsYPa42",
  "key13": "3c5gEVGENUS7LTWk1oZNqnGyrvog2oELQXKCkufZKNs3tPEue1VGyjzi9SM6nSEpQ4jHVTP32S9KQfmBXborGCWh",
  "key14": "vsGbwPJMqBBxLe7VBnf5yM39FEUi2AJaD9TdkqheuuRashuoQeqRb3T7rAAeEJLM8WaNeSTjSwNVNQk2jyuGwUJ",
  "key15": "5MkPsGgBPdRp1bQEvRqwXaPDHF8V5TeafRDivdaU7fa5QdorW27xsUTdC6vSCwqVLZtYkTcf1R1ZaVRkiRNfp5rz",
  "key16": "3p8GitATjLN4pVYbx53RqGkhgddLyN1SNq4tAsgv1z92QkigEb5UHfAh9yrkzCW57bZJuEKsGVS89Vzxpy1zPhUe",
  "key17": "5vG3VN8eg8Xb6jASAx7GT3YVfCCLqLSDEpQ3oWBGfyfFU96omWogwpqtfddxXvnjLFs1MnWe8uc9Bf5y54joBpAw",
  "key18": "5KkGaCKdfpZoVYyKkavmPi8poNt4XZKUUHKtvb7Cg16jK7PyWnxYZak9bmxfkmc46f5wA2x9PXNRHu79QnRwYnGa",
  "key19": "3FD8nSZR5wcgPkmpdLU6c9uQMoYHW9AbAd68KD6THaDJenrp29h5brrxZTT3JtyxR2Vxg4ZTxv8dbXxkWhWiroSu",
  "key20": "2eSSa7R2pWpqkcrNKusPkJMc9hjKFZgRumCuAjm2TLJ4ekRHTEauS6Weqk2zARbZbyH1ziZVSRWVuyQLTio4xqLq",
  "key21": "5tHMagKueunSYrbJjZFXKtdDgeqTDrB5PLxG9EzMdvxuUYZbE4DYudhcgtaX5Cs1RDomBimm2To5YP4s5FQ2MbpL",
  "key22": "3Z4cv3EY4Au7CuP6qBWpaBUaJiGMyQgb47js9s6jge8UeSEuikvsukt343AaxVvyYNQBChugHBxZVRRf7ZcL6Y4J",
  "key23": "fT9sktTQiMPmwwtbat3t3WBVEck2EguoQdDtF9DpCGdzSKF9gBqR8fnMiWTRTgWdzPBhaaGSk2FAC5msyBjidC9",
  "key24": "2WKAPViVetQdriKb7AXGhoJbD9noYbohdVMCWMz69ynKgnfmFQVXYbkqFKY58251Kst9rSL2832VuzAs4gjun8c2",
  "key25": "NiKqVhr4GB5M1QmTsfrbC1h1urf4oT4s3uJiA8VSZtntkiPMR4ccgJVF11LmiW7PxXTySTZQv15oXtPVW3tEG4U",
  "key26": "45GunYbVuyb7LgtoYamYpP5sMu2nVDpbEybooUzCWcPqgwL8PkUXp2ea3jYZ4jzY5rbR9KC298RTpC7TxgtudnQE",
  "key27": "3YYrhZLh32rKGmoEHZ9Eu76C6HqQpnKXcNcWteYuvJc27isGsxW9kAD83oMZcJ8JCBbU5Gmbib6xohowY4EAg5Nw",
  "key28": "8gDFhkYa8z6v3mQWW4UjA6NhVvshRQXtfBbextMHtc4qqUXfcHQ8AoEshokjEKQ1G7iByueYu5GMAR8965FXmZM",
  "key29": "3K2Geg9mXpHf3e71sWr2EmCYfRwrp31oMwY6tUFxaj1Eu8btuV31xMdQCPWXgQ3bc56SzgG8xceYWKTXELiD7dYS",
  "key30": "3XCBXkzco9rVyWqQ66iGZjwf5hXoLZqoFmGnNmueVRDFTU4VwZn9udUKjyRMvftgixBAdPKkNbcP8qLWwKU2NtYM",
  "key31": "3G7AJMQJFTUr7hS7EjbVpSDNmyUijoPFnQnj1sdiT2BTEoaDdoUBu7NvRYAgPT5JbLk67bvUmmLcUqsvxdkHugcg",
  "key32": "4KSCn8eRdnnJsD6zJnhJVyitgN71irg4H9XjiK17UrV3mYXRfNDJQTNqcqZAX33wy4ZwStxZJtBf3yw8fT1tMxig",
  "key33": "4h556hguoY2KCBDva2WjjtNUvxdZtx1uC5rJwhrragDT3WjRWqE1oN64jMiYhZ4WfHr3VeUZ3LQjNdC8yHmqeCJa",
  "key34": "1TVaLuhAY33bhgU7gcNdr9jgaQW3E2eqrXp9t6GXMEGwsaS9MGdkP6aT8nzDraVPZpMdgvnKraVoPz2cYw3WgVG",
  "key35": "nvznRwXh5LqnBAhdbWSXSCJ4oriueg4JHyaK3zuZWd4rwP9oTDmTTEhtZDFkE2ZExm18ehAsZD53Ww3Kvvdj4tJ",
  "key36": "2tj96whb8fPcvc661Qizmd75ZUPWkR2Uz2xSw7YtB7MKkZvi9S5cuigJCHA6PVqc2uWGXqvWk9PeJCtaJzwpbSEs",
  "key37": "3ZFz8BELbRDa6qQNeDkySugmuec4ypfvu5wY6WfGjhR2RBkp1BdXuLRKQxDgR11mpyAhq7MGAcFp4bWGFeV8znsw"
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
