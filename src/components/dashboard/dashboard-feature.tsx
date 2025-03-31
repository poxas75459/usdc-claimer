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
    "2zhFvNSyvyVmYpPJF47NNdNAq7oYxx8MHG2KXYzn7LEVeHpyhxGqw9BiKemvLV6PuAetvvLhJNYGz5GxH2dCwT1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHp3rvXoNqBQVwnqtc89QvjeuqDakusxPmjWFQPofjurSqhSxyNn8TXjPJ3G4Y3y9aTkKLec6qWNTys94gY5Xox",
  "key1": "RLpPcRVtWjAuTJ3ky9VwfLAVjmy4Ed5zcFPYcwxx52F3dKPg8GD94UJLw6iAhY549jqf8JK4sWB8djMyUdULpnu",
  "key2": "2aGfBEPa574iKdSmGwPCid4SEUFntXzVSEDvVGcyKjWgMWmoeiJ6N94M5YPaSgqtCWLrWxC2xwYRThjCsPDtiRyR",
  "key3": "5F9cQbUGybjt7x2jr9o5uueCd7uh6SynjAhrtJW14CtAz9vLKCsEyHk6fUHosXif8xrh1DJXS7hsLpRCkhXtr16e",
  "key4": "3NpiRAfLbykrZ4aMFcnr1aB9HXeXNQxyJr9j3Tso88uVCJB29pVhnePG3RaiG6CTNx4iVN6DhtRJ44DSsRSXFqFE",
  "key5": "5567rNkk6b7EVPYuEAYx3rRSx2abWgokDGcgf2dc6SQhSJpWwRr6XPVxZjKA96aDr2QJbwwLciyVb4PzRbdi1NEx",
  "key6": "4q85cgY7B2i2z9wWyXsCbHxZ23MG6smhwJed7L2dKBzsg7eyHNc5gg3VX8nESeccdsPWNFacWoVGHvS2KBGwi8cR",
  "key7": "3W5bVzxKyAwPDW4Zh6aPecQcqDnfXVboLXmRTkWoATq6CYHtttLuhxkh9qQxR2YhNeMKiwkawf79rZaRQYnrJEXN",
  "key8": "25HtyM19MusEc11TyTxGg8nSg7HseLLwdg5RughDSCXxZ4ATUYjRbBk5g7HemvXD329retwWFCiPK9b1UVTCMeU2",
  "key9": "5EoWUr36uqbZMkCikuDanEP8C4AWJpufnjgGc15uczMURQwnEgjMjpkSbSYiAdyR1He8BJYCqTLgwAWZo1Kma5Yt",
  "key10": "Lw617zWUaUWnrCb3fYJ4Uqot7NjLeZoyCnK7vkxstJBiyGLRXHV15EobhLakAFRePFU6qAkx2911fw4M8PPEr5w",
  "key11": "66qRkAD1PFEvegSRM7hSgH6as6d9jGEBEHKnvvoEZJQNJP3BtLuuj94ygXFZVZ8Fxuff6TEfajR7JShGUts1j1UR",
  "key12": "2W6GjBTUHMhj5ECX8rYSAN487ECqnoPWcu2wBABeH1BgFA5kwyviaxh1NPHMrspwguaHgA3sEsusT6ZuVok2MkMV",
  "key13": "5TyZqbVxcJ7ZaZg9h8ttnhvk6xxPemtiSqz3fPqF6j8qoqkzfjzsibL33frEA6nqAqVoR2c4Xb1sj9BTvYmB1qHA",
  "key14": "2ZeXbZRaQFzWhNVguZYaotqr28Szrmwph5uKiUNM4UaBWtNZSxhYP8pmWxpJo6wdQC1qLFepVTC3DesCyEJGrisQ",
  "key15": "5aESXWGbthAJK6u6V9dnLtuDTGHfHRVsKHDjpZ2SBasR3XfX85CFkec3khqWPEsyB68rqijy9tT8Ry6rkRQ6v2WJ",
  "key16": "5dXYrsxh6jmgcNgQhJjPyWLm6JUE9uSM115pnw4afXpwRafyv86Gz6bHVZ57Xknhsh1E5GifYNzG8fziG47dsqe4",
  "key17": "62GC2djwHy9c5ecVrEVajvi2mXKDveynK9eoteW1Wx1XTeRcV5L26pGaTLB2e3jemK2nkYJHgCGgBCcvdUMtindS",
  "key18": "vDiqoJZR78fDYcJQQYpVZUzpoVC6h8pA5A42zba9hnJ731hDUBa8tofJmQ88CQJAJtjKFYXALinrDBUhqf1KvL6",
  "key19": "5x4j48DGpHH55wHJKTpujx7S5UYrLwpgV4zgq61ALN7bZ3cxB2pBcBu37ppk6CVW5XiBupuyTNt9iX4zmjesfXft",
  "key20": "2Eg5GA2TrMSKghAmHJmPSDnFeiYLqKWSTcxCyN7zCSifyugjrkBArSY1m6jYW4bxAgL8N8VQ1P3KQJmWKiuz8WRB",
  "key21": "52hr8XF1LVWY8Gfh8tzzMKC3KJzx2JscuTpw35MbeGd6xFq5ddmgC4zwGRs2j4EY69FxpnsVv95XTQKw3a4KcnSt",
  "key22": "4xCfVWeNP3uwmNw8qqRUrjYHWUsszNLsFmoCn1xsYcGUsNr9gxvRBDjEj4Fz8NdExDdAEaUWUYSUySgn5EaPkm4a",
  "key23": "grTAMxnpaCWNgnQ1VhhFcH4ivg8uaQLjNJcaAP6Qs7AqJUGU9UyL4yimDWp5CnkFNjVxAC3xBDAAjCNsQXwuCYF",
  "key24": "4uCf6LFXoDFhLFDLKSW6F7NuW9zsEvxZoAL3oBG57Z1bcCuHrptNhcCxmCbneAA1XHfk7Zr9cyT5YE9UnzhPDiZv",
  "key25": "2YMCDgkjGG8Nwz4VD9bGCyskXpNQ9awvXaR1b1mHRy8UBckfTrCzDHqNSWU8Ryq9UABawohtiRwxr6KeZ7Jq3XAG",
  "key26": "LAwvjsH6eofYrBJ2BLDRB9czYJZNNdK9iZy4EF4GhxAodvqGff6pVyxRapEuye1Dzq8UCXgQ2kKQT1Aeb8tkH9L",
  "key27": "3gQCe9vXbMnyr7FDh6BB8idpfXaCQ9N2REKLe2WeiRzaqHWt7f78nPpA9ppZCpr48dbNwnmgHuLogiHvvRwEiY4H",
  "key28": "xbACbdxvexsCjHUKwdMDcZ13rng14j74nyGVfcABvJ47ZbuR3Rmm6xtMdAeGiqMHZkYa9WLDuM8u6EyWCaoMbaA",
  "key29": "34XSnF97SeL6EC5cvMW2LHAYFTquve9rL4iJ93WLJUvfLNAQLhEXST5Drz6LhCUxCWJvvG3AJjVgv5C1pD662bHx",
  "key30": "Y9uCXa6bVxmH299q4AWNKLsJL3eBMgWXfbf11DHuCgqHR2opfWf5PCPnX15nmBrXAFwQVXyAXLdqYspva6za2af",
  "key31": "5aYsj8EjSQdcgTR2LJupMEmV5t72WdP2Tn79yrN7WQpknChYkZgaUGukgknhoibyC8MsYszvZXQaJ9zZ5QySZ2Ae",
  "key32": "3GJtjBvqeUgroEsxJvunJco1zAE8FBX6j16CtzBVSswAsqvjxseKtKLD2EuHJEV8dmyJcEdnRXykEJ3jBm4G98Nq",
  "key33": "e57eB6sXfGadexLUnRsF6dMS7zBPY2UiBgkGTSjoYx5Aui1Af9i33pKiiHVKz2GTbCPCM9qtMZu4km4g2kcFCaf",
  "key34": "65WUTkiCDFizX7c4Z3FLwBgoj8tAuZVBgD1xt4TzGCb9cHChe8Z1eCVNE1QYaWTQgxjddv9icmcfjz9bDoAZk5h5"
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
