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
    "3zgUrZcaMN9rfd8vL29saPPKTxm4uLreogLpU5usJWQzjAnHEtSb4aECnjrrYFP9oascGmf1tuLV8y6CtBURxVJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jv5zHmJSjz7vHm2H1VZBfWeDxkvczLsS9NrfU2S3zafmvS9amqEomsFYwxorJdx5Tc5BTsYG9h8MHcx4st4hawr",
  "key1": "3LQVkmQA4MhW5SLmYGVEMHaJF78AvVq9uhAe6x2hjjfJmEH3ZXyJPNcJF1fyJScHamsmPa4wfQGUeD8Djs9puc5A",
  "key2": "2wS8cvhqKNpj1oyVybd1caePPzjjHuGFadqB8MCFNPZjQyN6gHwRf9qWJ3or1SiM7dmgCYqAK88CpCBuzsWyXuGK",
  "key3": "4sbmnAHB6oT5zZa7RyHp41M2pmuoPvqxbNnqyTGxADaWhN74epfCVn46zQF3LoqP9bTH3ko4HSdoNuax2y9Gkm9s",
  "key4": "3jtA4vmMDWHkSFqfKShZKWnETGJobWGo55Sg5gBtUyN49Qi6wNyDsrf2ZHXD6Pc8YG3WmAGrtMWPbqdHUDbhtRHH",
  "key5": "3vzDpEz7xXZBCDfAjragvX2Z8WSzFWyPbApjkMr6yiuphkfBSuUs7VQwPtYtLPhaPLwg3M1NWhSgugX31cNLgHiW",
  "key6": "4dfAFnqsHneaQJ4shUKEzn6xZEm7Wjpbp4ieyYzAKx53duYaygLx5tWkQiBAE2PYkNqPTT2WKVgdDEDyZMJagtic",
  "key7": "2HAQiVfwakzfQwJsFwahdhpiSKnRLoHZKomyJxX6Di7FiBN5Pyozhb6eQTvQWVcxWxFnvEfqhY2gtWn471kDRrkG",
  "key8": "SDX1AhDAj9PB9fhhCha3pg4XqtgbafNJfSDVFNLjtrdMAhYH8iTz2631rvbGHPoeoPqiJdXVU4w8esb84jF8mjh",
  "key9": "4s2D6NDQf6R8i9ozqBdDvanuut2HRBuSLpyz6FXT9q5jWK97KaTUb7dMj8PsZxA1JAyr7oHCzyeaCTVy56ch4KK3",
  "key10": "47x7LYNfXeuD12WGMAHgF8K8P8Hdx6JyQGSfoh471mMSXGTBbgwMkatUpr3LyywKT21e2JvYRxsfaLCsJDpAH9bc",
  "key11": "2SaHNtkorFGmFzEGcToJ4CdtP9zrCKTKRNVTFBf1ZfUL9HNE5hs8275ycTxeRvE3ix4eUfkijz27Hgyz7EbimKsa",
  "key12": "21zQyaaxgrf9PLWr5DjHEzNP2pjDDuyNnQwYjtbsdCvgt4sfEj7NNSUxbTHL6qbKRy4XkWg5tzehGe7PgFuaJSU1",
  "key13": "56YJZ97QD16FPWqdzAFxQjqxrezCRJ3Vrk7harhsjNc5555wRZKAp2bAg2DJi7YbvdYsdRarxy2VxJnqvgRrPGPR",
  "key14": "2ZceJSMLe41B4xD6uvGodDKD1tZotbtTtFm7FFw4eaWeeQW6JRHnUGPdsPfcYsdto83yFvdVhBh5dFxZdw9HCfTf",
  "key15": "2JmL7jkVpzZUNNVu7anak83vd32mUPh5CxwisEwkDPws3LhWD6nxsdmNZ2MTf8sAZKa6ERwRH8jH3ZUHKz38LWqM",
  "key16": "3CgDbtPtrFDavopizbnRiDNAjbB8nSUstqXQBAQDJzcoAMjwr9k2c2MAjsrA7kTr5dGBnj7tpHPShMQPnJ8z47UX",
  "key17": "25iQ2rMjrsV18Bk5qzaEGMcP9NywHUVZHLGAAnoQgVBoNQuwh9aQ7tUdwGiASW3RuCC4iXguKHDTKb4sjRrdZPgx",
  "key18": "3dczYH2jfUrHy15VswRj7WNaQDinVPrCDkDsnEgNCfyZ9ZJWhqUWao7478zzcVEnFUZJ49ZuYsTf2TSu8Tfc8Cid",
  "key19": "3LdmbRvGoBTdnEUppaQSdL64TBbPcd6PE7Y3VRmqcbX5TcKQ7MXU7Fa5ADuy1Rk5AEuxWdr9S9ifu1Wxmx1vTnGb",
  "key20": "QbGYEjL6msZG6SKCZV8EAx24nvZ2fHvuSeQMnFzde4AnoaAZEJZPqS4s92JVchwse7s4tACJRQmmVY14Tasm86R",
  "key21": "3aidsmg1jL7rmGfsdY2jbYaQgSpaLLTrrukbofiCCjznbMETbwXPYtGsXFEB1MhiNFu97buAKCQ8VLgWMVW71G82",
  "key22": "5uJ8izFaZ8PY4YS6hxgrxzxxLPPNurhKacC92XfveHhdQ1PRBumTDzu2rTyD1tdXn2Bdf6UPQ4tshXV9qPfbPAjP",
  "key23": "5ZcyoCv7GfG9naWTibBSu2gJY3Jzr48wbVZN4drH16a8yi1keqd8qyRfitE4J2fvZdE4ZY5hC1vGDyzrDCxiDvgu",
  "key24": "63PRLvfoLNZnRDg3gcVpzMFhy12zMKiWq6777m98ypq5Qm5JtN5gWKqR7W83uvZeeFetmiShCqh4GzWgnRBWW3GN",
  "key25": "wb3ZBswWt4RCkW8RGgKGTSqKEANVyjYYqh6hSpiw8szBfUxvS8iw31mGxyv8VEX9oa6Uc3D9smsidV1SVSVwn3o",
  "key26": "4xLBzKmJGW8aMSqtzUw3ALYWvKLdCUx9WcifrXDJSDK6mW55wbxnqtUF4aGTnoxrED1jwarzhM4oz7TcF2yKLago",
  "key27": "2cyvuwHPKy8a1RLjNWHWUytU3k43wdArz2fxs7i8kVhaNAqcHVQdiutGg8Sm5DtgeHPWKGs9Gvzx1ucN65eqf3cF",
  "key28": "42sDNEfaJDrE9YWaQjvMAdeFCSbd5ModUk7PeCx1rvuEGjsgBSUhRwKNquEpRg4inQCvZx8pTYqEr3pUQnuQokTq",
  "key29": "FxLgWs6bYXtFGceV2fk1eMvyDhJEHVN4xY4cJ6avTZJfALuNXZAhaW1GJiV7bqcNSMSuXjwsqLUVZGcZ8bJBhPw",
  "key30": "4oGDiFc9pipcorgjJrYSogPxP6eUHME2wsJRb1rYPz26cwXMLybye3D4v6Qxr8cBc6c2NrqLsHQfyaC9KR91bESP",
  "key31": "3LZrWFxAJdQJdzCQxGc9RCeh9L9dCnT9WTfyJKAgqZHDEna5B362PwGTQ56r3hXZEvUpLiK9PL4aZBS6rrvdfn1j",
  "key32": "Uyr5amEqgTwh6176RDvo18dRj89Ac3XVg1XpkUm8r9trCTLvusvccCy1AFbdB1eNCRk88C4S2VWv53f1XtCLBq1",
  "key33": "3BXm9FUsh6CHLu87UaWxrXxijNpQVc63xQurV9abVRoeZtP4bRYcE94VEzSNEeRXQTGZQAAiqFu8dTkfR35EBoA2",
  "key34": "2excxMX6EXwMoTFDawBV26uX4qqV6C892iW37bx6oxw6QC8fjaPNVpfTjQYQBdxNEGKs5PDfgFD8LwJSoCmLpHhM",
  "key35": "47nmkEWELFYbH8kavUHqxaFARrgcgjgWDSdFcwQXtqENyE5XEHJnVtJuRa5ep8NeybjvK9kEsgmZaTztMwL7kZuQ",
  "key36": "34GtmF8cDEQGL72SQFThCK5xRbzYQg8YshVNgwMprDwuGux1T57u2KdktfToSnLXNo74jmunCv5Eub5uDm2VJMAT",
  "key37": "2rhyk1YenuCxPFpW6r7xprYW8DVGVE1Xx6SoZJcCoSEfbThT4nD3vxKvZzPwU3tsnUS7kJFM7FMSVYszwBwKA4At",
  "key38": "2LEz3keGJLc377dWKabUSZLcDe95N7AbUVaxH6KmnuZef2qGJHyZBQtYGsxJ5q12KDHQG16ToVrRsLainmQJybSK"
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
