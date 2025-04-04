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
    "5UyB7hpocCCaeorW8GYArSZhLydfaPQ1AVPAzPCMB5EtWMgRAafoqewxTsaKsS7ex6Le9s3iEhLYRUwhm4tZv8yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MvXzPXyxJM7ETcVSASDBbYL8AkfFvnxcnsie1mYDiFQgXBaxHokT44Q4vwsHxiRvwdgRBRMrRv2MWrBKYKYqDGE",
  "key1": "26C2Fib7ezpnQGZMQp14y4muFWu1dUKmJjPSdFNfC9xBWgdQQ2as6rYZiQLkY8vhQTVDTLKeTS14GZ3qLr7rA1Wt",
  "key2": "4VdR2GX921mWEgsGKvhvre6mUkwfN2Vm2CN5aZcfpamKWk8WHtZy9LZfh4pQW1LoLUU5NaUgaqZvVk84DssEToxH",
  "key3": "3CqCHusBvTkMNUKyJgJFRhweqr4N8f1odLXq1JxGoULffkcfM28pheuqC68ae4dfg7bAQsYZxLQW1whLfDurMUuz",
  "key4": "5oNX3MdFw2xae9LEpotrqQvxUqrEFX6EQoki3bTbtQJWaQdmVQgJHbqeUJe71TQGZgXS12fWFqmyQZuhXd3B2VyT",
  "key5": "4TbVKoPUuGGc7Z2FhPhStKZSpLrxsRkFCpiJCFEHx7KKijQe8Cwdk2UuDGeD9oeeEsEm6s3ArRZmZCZ8kLiXPMNr",
  "key6": "4uwoxy8yNrAhaWdnhTipNWcyP83hb2Diudc8fJ9XGGGFdzBAzqTKmhWzt2TgSfjiWN6heEPMKJkweHJJiKSxeuEB",
  "key7": "5K4Y6B7DJR9sgrK66JCYvfxTYAqqjcrnAeru3tqzbTnMPHwU8neK1h65ThCV54S8uJTWe8irQRssRLMgPRt3gYNB",
  "key8": "5tujL2A1zm41mmWkSotm1UKfumyWFJSjv6Gv1cfXpfY9rPbGAXUnQsc9e3TNgHzkfmDU831cjRixT95NFwsnPpf1",
  "key9": "5YgVQsj7zPuGEkwT8EfEaGSKXGxsLRrDXeb5mDc34MqAZ8UydVtNfKADSwHHmaujDPYEHFs9pBp875kxyn81pAVp",
  "key10": "2aREf997LKnGoouDgU5jCETL3DwzxcV1agmPBWoMWPB26SUSgcuBymVysU4idmRTefdw8zsCAPwtoym1ZTQkGTdP",
  "key11": "LbCGo7QqRGmis9aH3XfAgwPc2jfAn1LREo6BuAFS9TF6VF1DgkUgSr98qUx7Do7pUEWgC1b49Uqqga9Ez9DD2q8",
  "key12": "2XrtQYkgQgtG21VT4ijAq6EAh7f7vaxjEAp1Foi32mfszUTR8P8N5k9eTgJfxkHjxh3isozVHBfe4W519Uvbp1yw",
  "key13": "5w5RTuMk49yzwEctP2wDMZmUPKe3TawrDAnWvtp9Upb2JCqLjSvewDuiPALE81RhPYq3NFFZr8QG3pW4hJ6kni9t",
  "key14": "j5EXBemNYoCokD2swwHVnCjpx1Z6JtrsTab4ixrYnhw7dKogR7HFb4peX5eHy8vo9xv9RePyXtMiBUw49aBjK2H",
  "key15": "yYJ4CfYuMY6RbnYRdtoznArqjXzhMF6YnyxqoMz5zjbJPpvG13kyPpkAYJ44DDyNxSAXSAERzmvPB5Kgkq7ouUM",
  "key16": "3eY3GhWvD4gqK3bzaSTQsnM14Q5TcpaXCe4QR5BFyVxoVu6SULEGmTZj4YjCqvn9PB8r6XfvqATdwZn4uAzCoLUZ",
  "key17": "4CveHBRzZfGkpD6vmnxXeGmmxB6GBFCJAhd1sxYhMPd417gBse6eGFXgtoZCwYVgBseGKTZST1LX7aZwyMJ7kwGB",
  "key18": "2xDShjAGYyC4A91q6GxzNKKYjMpbvAJahXc7poiuJt8wp27YidpZrfL1pcB5mdXT24eqrkT6SdURKChj8eZTTUR7",
  "key19": "f1Rx85UX2E958xLdNuqqQLx762ptjZCUxM5m8EMvzCQEm7dtJFFE9orTnyFNUvFyRu35LXTNo6hEyDPqL8An8cG",
  "key20": "4DhaSVQrRw91BuD8ijKL6udosVFebde7jY31oRcS46ZFMaGjFz15zDjEej29qq7GMaXJiCrWmwRTfrWj59ta2XBC",
  "key21": "3vQgYjkYpi5bZS4jbmJr5RZPBe2D9msCg6NbvT35fsr248hAVpZu9swrm6KyyCdESBdAwita98YqP2pv2qcBAMJj",
  "key22": "2cgrrAj4MYgVdhEF5YAzgXb7wysYtNS5ZnJ15fvd7g9vCV7YAxP9srFZ9z2VCGt18ZRt78NMGD5VKza9F6fYUVm2",
  "key23": "2jj1uLft3QkyogjBR7mzrQzz5Y46aGko1GD31YjzfqStVVMt9Kuv53dfn6btbFqqXtsatjQLVadnajRug76hANmX",
  "key24": "TDWoHdeocgtgBHLxMwBiiGf6PsKEjJMcVRVD16qVDjWj7uwMgSxAxu2PCp7Hh8KhcqoKAfGre5qcXZwukDvW7sa",
  "key25": "5ZgM4tic6z3KjEL3gXByPpRrpWDFVxrS1XEGt7rNPhZ5GzDEcwpSaCeohVKRCJcwwNJpCRaVCvTN1C6aBVvPCssF",
  "key26": "5tf8nNocRpeLFnytbjE6417R1PBr2dgbfhWVvPp4t3BFqFwmHXm9inKEZMEHFK7LwUfRu9zh8hrgARLqekxHd9Nf",
  "key27": "DJJGrBRH1dt6EpDpP1CRg8FfgAH22femtTYP3D3N6XNepQDBd8MUYjoWq528meMhdPwtFwrtURnGXXdFuZZEDHR",
  "key28": "5cytBhr4YnEL2RXTX1YmHMGj6iCuc1WF4pMj7paa9ugF9rFuBx17zVjQQ4o9ue91vpCaRM3APf2ARVjnNqRoryKG"
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
