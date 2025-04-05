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
    "5h3WGoB84HuC9Vhv1ubDMHXCzLLi5TjMkudBpcjtnmX3zyYQqqksXh81dax8mi8QvbW761ZVm9HxJMtibkMxtfkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNL3NP9JS2uBW2cgivCqxkXsg2xmrPQMoGGsNKrxL61NWEcYD7Lb1dELs1SZshvhR2X9C47xbo5djEMVj9yDwsF",
  "key1": "mRwKETniZju9bETp9HwcmBDmXKMP6QbLk8y8pZjy46iFwgPLNme8SaExZoX2B1TXvFqXwphnX5px8shhDqD3DuM",
  "key2": "3553Q6af39XqnRWDUftJXggLMwLa2YeXjxcFgj6keiHQ2eKjJoBqMWQLLnuTXczPNk8CDJhLdHNbQAEqNUcQxoyw",
  "key3": "27NgZVV5cAPx7boyZtPz5erFdnW2UskA3TBsVWQVeso6kqHZq56Tpz26Fyi5WukEDQrBiSeFi5vp9E6iDqvuUUec",
  "key4": "NDWC8dXx5RSceFCWxwFk3XsSF3UKxN5vR7YcqW6FKg7pMVe3Rog73j4cMprFhg994tQeskxzPE9UsRPkraEddQj",
  "key5": "5nyHKzJ1VCekKqsq8tJ5cWACt4NbAMRPfWQL8PtrGrsLe5JQHg2mBMoQLKJd4hTw4iWWmPokCkEbwzH4HefrnQno",
  "key6": "2gSzHwwSUcnvKhxXgpPfku6W7yxs7PMX64aD53RhyBAbUTWaYFMmhrpV9YQn4jM1TVMaPpYBCTBBmy8nakgqaS9b",
  "key7": "z4Mmzsw9s4GEjgwWeGbaMGKgUwRxBX1z6GPX9mjsY77tPLsZUYhqGhhaXrq7Uz8bv63pacckigsQb2jre82QkMS",
  "key8": "5c6jPGdMGMNikgdGqXTDVUBg46aTLCPgVUd4S1Ntuwh3nmq7DmLCyRNmNxPTwhpm83wCUc93heBRmZ4Wv8u6RFAu",
  "key9": "5G3PjzYgGSNy81M4wzeo3eDPCS1QrAhseHarW2B85nsrFoGB1w5tNJdS53tP636ECL2cxor9U488FWqEjMGWEpNN",
  "key10": "3ggog59XEF5x3TxcJBWSEEg4ktNmQyhMa7RXcCrWB9GxQGVubfCEEKmJw7atnPgnTiTcfvdwyrzKsThAGJ6djPsv",
  "key11": "3aC5k5cu8F4pPCyXigAGTUHzR79CgY1xTQvejfNog2JRA3nxybpa4Ne1V3u7vhgMNPybExaLJp8yXcd6jZtyngUH",
  "key12": "3G7PJY5nPTMgvF7Hdspwfy55e5AqfLJHsh3SpV3HTDSLYP1BwxA3NQVjyYoomoSdZX25uGMaakUL1vMLiNn8bk99",
  "key13": "2xghCMEdQrLrocCznHKiLqmusewmMFgZhBqLgbcqjtQLQEHkgnRjCvbMYQLWvt4QxGThzdbQpv3kZqD9ZEAWEfyr",
  "key14": "3vnAdYRakF9a4oSQFf1Jvp9eaGcQgh9PgyV3jQdTyiPKVRUCZRVcyJXY3pK6F9YjqyWBVZgtJvNhbrjse1WmyvDj",
  "key15": "62g3ZWrAMLny9uEgHoZQx1gSux6xKKNREXESyBNUmyeAmnnCjhLB6nD1bWiv72QLDUQD9HCgE1rZiJUwU1TyCJZY",
  "key16": "4uYnm8eWsaG4MgLRzkTsfMSVgmFJJJHoGjY8CtWz7aWHs6eeXXLw323DJmDU5E8r96wKosziWpjNcQbSBdPJwv96",
  "key17": "2XZXC1BtW2p3SFH1q7byxFZVBo32NrFsP56k83eTxLNAUfVFzSpsPANssrk2EgfJ47AXRz7xMy3VMHMeB4io8cXs",
  "key18": "3Y5JsiNju1ajpjEqhr41jwYQbfCUek1e1pjnvZURSGZAfkrmTG9JHSV8H6CZz69QrmoYYnMXpTNz9CN8ELPuUoSE",
  "key19": "4PAiaAKuntrhrN6kh7NJ8JKumCcacWB7DA4KLxbYxypeNxmRWpbYiaFLm3TQtbHQkEzsHbYzyMAMDfaH8FEC86k7",
  "key20": "265jdu3yyBBY3jr2tCKZp9GcyfbffxgjvCVwwLsDMAUeGmFqwBEwEs3CbZ5QHWUGNAmU2SVjYTqpLt1pyZcN35sr",
  "key21": "33tEePW7WTA1BJAfJFck7NZrJDcNVyN4jKt7qyiqpBmC3bTVys5zrwpocsEoFVFbvqADqRC8Vsfzdvm9oK3Bv7hZ",
  "key22": "4W5ovfC9YEztAU7yMMQXzohveR4t4EZ1wbr7pbwsfjUapi4tKypwuo6NCiiVQojxs2CsL5vsaJuiAKTZq8sjqTk4",
  "key23": "Fkq8xBndU6JjZKpLioVa8hVfQutJZRtWJmRs8vjbGvJ9267QYPTDW58S4pza9NftxxcpzDHqWRHpu9Kuyifm5VJ",
  "key24": "4366mTp75uryf1Doze8mrzbHQ1yg8sc9JwPD7BLMePYPf6vuj1pEsjfPWcWadVHH8egyvnaSRWMeJN7K6KxDgi5j",
  "key25": "4XcThDPLQeuz9SrJiXswxUHYd4yzmP61wQ9DiCZDbePHAWZZADND9j8HSAGG15Gpgx1sts8dN1cBnnBhpruR7qoN",
  "key26": "2kCbg8rbRAkaUJJWm65RMUHjgU68KSZ7BhR4hckmhiv5SmtoHm9uEsdkmE2oDBgf7D1WGeFiywWvLDdLjBiQm8yW",
  "key27": "5JJtskeBU3VegYAkGt1KPPR4NWFcZV1hPNXG4ggkR55aWepr7e7bNrWD3UJfxL7L4SXjog6CH8pjSkdyTMgpJfna",
  "key28": "owwjNnZSym1MjrT9R8nZqjkBLEuq5waZmewp8uoG9DQuSs5Au75fuws76namXYqrNfLvyGb6jcn8rXauAph3qLr",
  "key29": "3iN556GYdRPkYad5AKJFu4a3NmpK9jTLLWcuRNjmxdL6eAvqZPFv5uFz8yuSSBCHLEZYFNaW2SjrRrNw9K1ufxBy",
  "key30": "2y19Cr8RSFBVG7SDvvMKWhX59bTczFFnA76bEmesXYjXYhpULdWsWubRXrUZ1DhPDbJ6ty1xxvBttrJCgaQZncCG",
  "key31": "5VzcbSCAGqptYJn115FhX5pE78NKToodKyigM2paUwiMEzv9AfzDZtbTCPDp2d4iVRWmMBLqWrz4QPYEQecCurrL",
  "key32": "4ic9PaSiWPGboQJysyV7GcBwKUGQaYcHKMhAJwdw1LrLP4CjdVc4sHRKwPEeNyot9zd6TBSV3s28QN8j5S4woYor",
  "key33": "2KrFS8DeHVhwuLuBU7F7MqWjzdqn8Xv2kMhzM6yFArzvvsJ2yJcWR9LKkKQtA3HBrShwhfvZ35P6Un2xjVJLJaMC",
  "key34": "3TB2U7cWUWtoh4vtWCwLir95yvjUVpMZNVSCcQJsoRJtvsDM6PtgF86cQB8PevEqpkzXT4EGZe8Pkdue8Zb6BrYp",
  "key35": "519kNtA4dpZotovWncUJ5MFbVF7r7He4FAUhA4AG1KFrgexyuYehnLa5DSLLuUVXhSGkAjzss4qmPX9YTjpVbG2q",
  "key36": "3f29WbiVpCZEBYMwdCNyfgNeXGi9vboFay729ZG3YRJyzDbhztBPNQG9ZnCKYTeHxAsSPeX7bagii27qMyiMSDug"
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
