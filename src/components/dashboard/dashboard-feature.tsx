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
    "2Ve7FoHx34h2wUdsZ6eteRcUeaqk5dJnKWGoAnnYcyGnhnHrGHY5Tdm3kv8WqdZMkMSU3VSyUypRw39ngZHa8ToZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j6rKmqQpP56HwA3bCf2rYcNtUpED2MQ962kDqNsXxGJTwH5TaCNRGedbscNCHfvikZ2XCReJ1SUCZ1GEH12vTzz",
  "key1": "3zT7zSUYH9ZhJ7kgVQ8cME35oN6kgsVXrTyXhELShpLsFwB7Vr9aFPzn5NURbXjtQwcwgS8NPRQ15MNW79oR4Bk9",
  "key2": "3MLwzkecLbd3oMbbpAqkzcBryDWaKiQ3QMnmeAdXNYL6cKLmE8JaxmpLSkXNbKwTPLv4RSXgxyUoKefxGkzxGZzm",
  "key3": "49zwRJH2UqjTD9rNYn7iKEYe4CK7rh1eVrXaJKKoo2pRvaT71Gf1BueDGCdwabsbstrnn7NdWPx5sd2sMFSCbtGC",
  "key4": "2y7Js2cFHpiz6XhHKCGvAUYovtX6w6CsYJKoYwSf8YT9GNgGaXpHvoSixAXRkrx6SgxsTKGwY1SjqPNSoanWB56Y",
  "key5": "54W9GAsuqtep6aem8eMUmfC2PrtHsq57DEU7ba2iv9QWtzmQNBFEt1LXTuxAH2SJV3rt1u6fFaCCsDJyaLpFqtiV",
  "key6": "2KcDi6zRKCbC5k4vh1UQf2PMXsDgDK3ie8zvcuG6ZSRXtDTqeppayvYN8f5pYAuHkYLgxcYXwkErfkQb8NucRcu1",
  "key7": "3Vw7Vfo9GtJXCmd8tbvtbgeRYCnjC4KDkt7qdfgJAws9Nwsk88YD2amaH4EP6JHeYsQuptSpf6xRb8V6iHiRYsMt",
  "key8": "4BPiwVTQiEfC6DfCqso6mNnrGah8wh2tehdZL8Fhz5MPnFYitQCWBShp8yTdv1HYTCEyu8kAQ41egU5hDn8gWe6m",
  "key9": "5WMkYeJ8ZAv8oGUvUuCWW3D8wuCAcjWakPuVhjy3LAAcbQPY7BYuqkxgzEuo1SmsdcBVWybY4YEUMQmZwzTn4jkv",
  "key10": "5V9PnSgMrk3wQAagoWReicyDevhEYyo9pRGhfwsmM5ZB7xprNKqaz8fdVksQNpt9k3LV8SuJJCh8B3eHqHcdXiv1",
  "key11": "3wquQVcwcUpTk919TqyW5FaD3852cYRLgZ6osny4DJVRZ74gouAmsZ6nubJuk6N9ueog6ohom6E1iWEb4n95cm4u",
  "key12": "66RWcWbz8Lx6CS9pLsio5YYwh67SVS8D9M8uUAkmoBVhzwJUHB5WwDr6rtPhibWeihLWcBxNX9xHqVmddyQsfkWq",
  "key13": "e1cSurhFwt72mDSt45bzA4LbKaJnodgk5P7uSdpeoZH1NjELcjCx7PeT9gMymiFXnY7sYN4Qby5DknVqmJsS73o",
  "key14": "2gWugKfPfCAkeV3JpuCtMpjA7tnx1DXWmfAjwoHThrKh3P8ydXxwL3JYBk6gSp7VeTGkWTFZaEC8CQr3agw2sLq1",
  "key15": "XaMPa9LRdHoFREHWmiwtzeBgHz1MLJQoKFZyGhMxAmXk8sLhEhdDbavGhbsjrLhv298bgY9Xg9emxtH36EfgkhN",
  "key16": "5JKxCLFsavnbAQf5Sb7tTwqPTyc8Hs4AUvi17i5DJcBdYzFYyKHEEBEo3KtRrinm2gXv9Ut6jypDvWSFrHKUSzkF",
  "key17": "4tsxpDwj231hGnCSDfQEbL93SYyb4c9rw8TotKM2txLcNoHBzW3PqJDomAFy2H33x1LuyRcpLaTZ3fQPZLoa9eL3",
  "key18": "5x8QbDHzytkiDZEW94gHdbCbQvJYvKmJJyLYEJ9dxEiz33D2xiufDqLPh9NS2aXwsrE2Pt6NsqQCMac83rbJFkg4",
  "key19": "5apptnYkz3nh6BSS1TkWbqQscBibs4dneoozyUuruCKNbNVouFxepqkVR5QCEkruU9dKec7aUxaA987HBwP9b62L",
  "key20": "2byAadDGdzPGweS8Mqg5xShox7BxoYbFZy2iv1LUcu7YjN2Z9KUN3taj3Dmw1cMX9251pgALdocRxAY68YhBPeCf",
  "key21": "37LdhkaWuCxAtWFA3Eu1RJyfoiyRcG3b5dK8jPC1Z6H6H8BWz6UhX63JgiZUq7ZHiRL3F9jT6mKRSmpW3T3pEg8J",
  "key22": "2QZ1sXLK6AgbKkXD627ZhsbtC4NzWZPFi2D6Ky7NTnj6g49G2uTNZDsLPr7XeNZ8kJnr1kkw51KauNWnpWQXZhDH",
  "key23": "65PpTn284Tku1UFQpTkJkSpTACgcykdbT3W35n1LNzJ2sDmYEDzKPtjVvjv4ZFeSeJqFikT7a9uoQ6yesWFW9qVf",
  "key24": "2DxScwPNFX5BYCfzMtdmAadTDPcUmhBuhrhyKeTptt9z2GMh28xCTJwjUQr6a3Nm88DssbgtLJQy8XbobAzcpyke",
  "key25": "39gTkgevou697TrJxFjcZCdv8BDLQHSeUkej1DdX6uiQAtiGDvyGyqyRyVNf71L977LzXzedCN7g3aAdp7CT7xru",
  "key26": "3SxbLg2UkEPj9LCQ9p4LGNG3rURDNTzsDv9oHeS4php8HxtDooBd27FVFj5G672NYbHdVEpgq9JAKhUH53NJBX3n"
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
