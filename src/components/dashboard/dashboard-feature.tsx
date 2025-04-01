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
    "2qwYqToz7fJrzE3pj27rppM49Su9kSuZnaEAZJ8ah899dc8e3kzpY54aKBDHJzPi91PyC3eJe6T8QHBhLefxXptj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfjH8AKgwmYLorrJTjdqRBYtopJwnAjRJaBaMDpYnonfwn4enDnBrwdii6df9uC3ErmcEB2q5DprU5DXCtCxAPT",
  "key1": "2S2iBByQJdNRbrJQqAv6TK65mxrWYYUcoHHXEsq2g6xaFog9sz12wEMf9CeSZFJ1LUYkpG2uRPoDWTPB2XTqfmxg",
  "key2": "3BrTFJNNhvrjmcFnUFoPvRwijRmn6Mrxu3kkL7DzgCvsdYdCfm9ckPxJLdWnAs6Fzax18NnBc2EGDsxcQdqRpDdh",
  "key3": "2YpwdJFe5rnmi3wfFtgyaTpM83jX6PenZLuipKwqyWHpZ4Qpc3S6Ro8jmyyWi7gAxPx98ZCTmFuK9ezmR1No5SSC",
  "key4": "4k3iG6EG4fqffAbqVsdoQBn2niJFupingfaqa8Sf6rAAejANpDn1aox6r1kjQvijDkECgvFbeHkFbE5LegFvaFQb",
  "key5": "4AshqNQxoyCAZGuxtzq85jyMcC2vS5QzxqtpXnRUYQRJzrhJFieYsBnRB9s4zEfrva1NgSEznaihwE73bHDLZaFT",
  "key6": "2PHmPvVjhX2C9TUmG3Et2Cxkhcj1Hd5bnmysNYtvV9PCsAFpLuBXWQSE51xZkx6X2z97KRUfEbCx6V4fiZ3hyCrg",
  "key7": "3j12CjDPeMuqKPvihyqJphgswSHrSsZYrQjjav1wfYiG85yVnEH9tbWrfjPoxBS2HG46tRYuRHZhSiXreyLNk79S",
  "key8": "tiiNk5M6g7JSjoAGbJp3EQHtaC36pXJNzx5FU8u422tgwBPja2mmKRUY8AG3v9oFUw635iSQL2CPSRyEHT86YY7",
  "key9": "5Wf9RPxj1HSJHnPEZYk59bVXo1Wa5DDX1aGwjq2qq1i8oKad5K1gr2Tz7s2MXJ2zvXxpvyNL8jKNnrPm8p9XY2tB",
  "key10": "3aZvrbvPiusNvNXp92vEviWKnSmVZh2AGm6oMDVZEKg193Cb2oo8UW2eBxfTzoCSFgCD68BE38xHDotJsSv4nJZ3",
  "key11": "5niiKbsPi26CAjg1JkhEePXpqdhryWFiHnj58oU8NYyksN62fvjqoqAGsJuHFemNLwGXDDkJxJZ66TvcwLyy73u",
  "key12": "2XQptLaNbz9qekgvjG6Vfsxsbwa1aEx6JZN2qzy9PnQQ1soNeBNq8mPK3DJhqqEEq6vXB7jaWtk898DjTcPtB6v8",
  "key13": "Fk5GCRWJeZ5H5jZ7woAuAqi2b22oRUpBAUUkYBSzn92Ds4ZTJm6nFF9kpidj8ZJiNWfpQdwWgaQoFNXYrwXbESs",
  "key14": "2CNVFYmtBdd8zqSpbMk6ksPgXK3Y3Jg44zsuJnKgBX5oxFhmMYd5t7DQ6ppmBdiGcNoB3RSR2UZwnqDsMdLVe1BD",
  "key15": "4NCExEgmLnbMuPTqM2DJycVtYR1T5Hwq3NvfcmbPgKX7qm5ijQgaazJ7WnPFpvzRDHP44U59FySZdrexqQpiKh4u",
  "key16": "5FC14R8ciKNpezM2PHQJnC2q65ds2g3LzxjFv5kMJAtb6ZdPKhHHbVSjUxuVnJrJnPnf66h5rbCLbCWxWdZEnQbq",
  "key17": "5Vq8P1rSEiF6M8tocACVXsuqZZTZgZmRZK1mM4DhqydwvvNEnRpFB563EZys2gshN6ZNxtG1ti7JpAYa33DGoBk3",
  "key18": "s2KGd92tmkxHGnLGzBUAFJzYrZQp61KNrnHZDvLwfVormYvkFMBA3KztstFgedjaJ2snoise8r31KhyznUtBJLB",
  "key19": "5toK5Dni1kFykdwc5SPzDzLEATvyTHBdsJ6w4t6m1s17gTbM2Dr69yG9nv2hCJKPFkHUkXH3GHhhtK7q2zuAw1YS",
  "key20": "4DtXL7x19YcgVnJAS3p7d8twwkELjHeYnccbVGWJEYPuFm5Gs4VjEwpHRMVjPETno9EhkUKJv1QProF4UKH35zaM",
  "key21": "3L3uzpEd6xRt4VjaHcjhyTAeEVEP9o2pgSX2aXQNvkYeUHiC7MU1zEQ8wBLTGUZfcf3XPWtFiXzPgvNkLLY2BCxF",
  "key22": "4GGtZ2uYHevsk6PBrPV5kL2dxfHE8P5939PTTNFjhH1ktDxJ5vGSXNKUB5xypNuyvy4pJUvAMeXZ9GGHrCgiXYBT",
  "key23": "2qpkcT9dAuQS3ei4KNdK6NELcC35PDSpsh1koi14qxWLGqefUpw773BtMEZ6DBJtUFVSDZrJjivJ6HdFYTEg77zf",
  "key24": "2rfEQJjh6pnhKNW6Nw1QANnmFihoqwegxZ5vbed3FNBcqyJmmSpWZhaVCN7aq75gzWBbedX5uoXd2scMtRxUe7CV",
  "key25": "4vFWBnX4r8Rv9Widb7KYr7BzmT2rdfsTtzcKViYN5GcKChHG5rtbmyTNRcE5jh8NsqQCnp78eXDvkAsJdx5syvm7",
  "key26": "qwCYPv3LK9HPdqZnkweJTjh4dZjdcQsmQtDwLtYG7fY3FbFVQnkCRS6o5hRVsikuQi4hECzeJS6XcW6m9oQ9aM8",
  "key27": "4vZeFNQyHdffwfXQhV9Hig5yHaa3pGSnX7ySzWSMjMfcVsjSKofoJ4CZGdp5dRUb7S3rwiSCDRATBJ1uevVZv3SK",
  "key28": "5cZjuPowqvCs5yr8pfFoe2AEsGRshJADA8pjjnymSGv1rpon8KAGUkZBryai2bd6JceowravBc9HkTz1hbzr6Ms3",
  "key29": "3rcvWKaP2kwcebLoHCKHERXRALfZSB715ZvwJHEk3o42fuCUJuAE2CG3n83b9twa5ZKdPbkEMVgbH5kBZECHLnQx",
  "key30": "5RZHzhpi5da5DEsAWLFVLsFU6HVpXdZpb4c9c8fESC3nydthWrK8MyY5N3SMncGMVpj6xshTGsLKyvSnB6756V9j",
  "key31": "64ca3UYZ79utuQnzEnjhC3mehgtJwBRxiBHjyuxWNVsTSGphkTgBs82BKtB5ZULKTC65JkTP9GeEzwg9gpEWB49k",
  "key32": "4dZ7DGhgLi2aKQ9biJcgZTtr8vSARZuc4DdpGmQqDnmE9jCe2ZfS6wdPk21g7rxV9dW1pX7TPCXey4LgknF2JJjX"
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
