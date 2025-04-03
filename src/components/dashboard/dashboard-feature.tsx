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
    "5pcyDT1L7YGkVXbzYcVav1XfyhKR7n6WUjKrHpSLMZE2gp6t8vLTwDgxFrMPj6QBxzEXoyjvuZDfi6KEbyf7biFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usaMSu79vfXbJGDX8QyxiAYgreM1UsrDnHJPDvmSMHMaBLuqPhQwiJT4HMYxPYpbjT7SkrJVNkc9XwALtQmoq6M",
  "key1": "2SmfiU4nZCfGY6pn3e3YuqbEE2vrv2SJWAJF97irNSZobdxikUwn7UH3vgD9S8aFVmNWh5uS1Hhv695qRLfwWJut",
  "key2": "36xdpkP5KVQ3v9eiyHuaNWEgUEhDGA8xbzfVPhJ58swfen78Mv9aveR7MwsakotpiPTEziFv2VTXwF1HtxJwPmbS",
  "key3": "61A9erwhiHpMJuiRuGn4kkh2ZYb7YpHJDp8Pd9ErDX9HBQzEYRELgRJeZnyzHKh3bkNQQV5PG9dnTyjNhTorm5Br",
  "key4": "5JAutGJWjhkmFNRKoYCPi7ktshz9uiy7F887nuZzQJC1iNkH5KW5by6uXbaSQWks1H8hzomCk3CGvgop2QRNfLwb",
  "key5": "4oouuQX7MCzXw1buCsL2ukHk5CNYNAFkXdZt3qwgaRxTTCD49zhfTWeiD3QQtx3TYuqLCrQUzoPLDAiH4XnXarx2",
  "key6": "L3SYfawyYJPQ2EG2xqYdyheHdu5RR85Vxu1d48RLvYbofxpv7xeZvza9uT2gu8vZZ5o8HkL4ndz9zVNrUqobMpa",
  "key7": "4v7jkXqSfQQ3eyFkR58vqCsEW5BR8oLmiN7BDAcFfhu2pdS5ivwPgxYknCyjXy3e2NpHPDJtFKApAMBZUxjHoFA9",
  "key8": "pXJzU2jgRkX7VjhiYBhTUWL5qFLsea7iVSq195wq8DaLWZhER3BsTTCnvD9tYGDntNjSBc9FdgPN4Fbbzeyg3BV",
  "key9": "2UrM4cGsrJHsPjxPepMN5JE7jCSzG9cp2H5SAKumzKLGCKqqQvM4ufCKP3SNzRYpsApUDq3KJD9h1M4nZ4ALyG28",
  "key10": "2jAmM5oYWVcF4oWM24R9igNTY6AYQCaz8w76xYQwR6HqdTNtzCRLHvuwZnmf1sJmJZwwYaMz6qGENp8a9EFoJLWk",
  "key11": "3C2dAZr8P8wZFH1c58RdPgqoiyQTgb46vPV4Z5W6WV1aXfx1BAFEhwfuY7vXdY4DRYsyRZG5yr1kwh5hCoY9sSqv",
  "key12": "AtZoQNg9UXXUryV2ouk8x2Z2SsJAVJTiQtPCXBtHddRfpPuGqiJrCiXHXUMkTpt6JRXZXbaF1ENg8FDA29e6DQ8",
  "key13": "25wgNyLSBNDDLLV5BKDoJTSeoPDWoHZm9wu4S7peUcusLGheFfFoGM16t9PTbAGc39h6DGzjR8y1TwtsVV8ggq1U",
  "key14": "4tdpkTj919TB5z8GZW5ZxkjKpHny4NY62btfnruy6mePdmVq8CT12rdobbqnQoAfA1fWzJhkRrhPdACzbAoVTCFg",
  "key15": "5jdYMfWjEqsM4K96ShffsGo48aqrNbKZaT7DGXRnE4BfLaevS9bwiozpQWVUmzpMVXVa8SUTjLFAfyiu7rPw2dLt",
  "key16": "47AMtHm24soR6jHpqcXYqyviqKoTvuJLbiKqQxpVChCpmghH5ezLQh3nQ4wCDCJ67AvkpQvhoPhJL9nmKbZ3yjzz",
  "key17": "4DhTiSubc11Mdymup7HzzBZpQd7FfCcuuu2tb3ABrCUjGeccT7XVEA6X2LciwvAjF4G2uVz13PiC9v2TGEUi4xnq",
  "key18": "LSq9wQ18q41EcmGTo4rcnQNPahJEnPt7jPWqmEw2pQ9ue5REFSQQ16SNvPZ8kAkXneWwT9SxXqw4uPMkcxzfkwz",
  "key19": "2JAMA1cMmvaNTjmeAiMfSWepQWyMwJsXLH462MxKMk8nZqvbX3FwpB4efpFnGPCzjmnaZgABjqFmkgG8T8KtqWhP",
  "key20": "4W6nijyjdDdizwyJ6q69ULbgSdDWMjm65jAR1yqrfVnoGXDBSiMGLYvVHTwyH8o4V1oej86iAew8Yb6mRK2ELzyN",
  "key21": "4atsHa8b6Uw3v6TyXvDfAh7wGgw2Cc4Lp64t6xLwkWGu5S6pD8ThNZoE3ub93f79EoHC8FHbxuAfMicDZoDkhLKc",
  "key22": "2JpCHd2AsgZfmaqbzxDsdvYEbMBkLeYcDFK4iNU1PdqVeeqZ9CKExuYUY9tXGfxi7CbxSiHUBbC84RVT123kEmDo",
  "key23": "SNsWQsona353VrywPEz8uZ8mssaWyD2okpHwiAcrR7JjnrC2KkQPS979mMfY9PL5SLw8eBfhsjQWiZ8nFgoWtTP",
  "key24": "3UjDy6HTVwVEPBbsv1KaZNYa1DdiQznHZsLC8Z3NoKWvd3w1LbQi5N8vUYUgjMtWuHVzeLSrEb1bzN1eE4Aes3qG",
  "key25": "52U6zwakuz5ZszsBxiAGgARtQiM1GvG2RYCMJiqGkLBaBBREmXH4j2KEnbDrndgMUev5mYfNGS84HyYDF36f2noh",
  "key26": "3mVo94saaQ2Sdhfr3Z4h1E1wynSKGj1Guvc34ZwoSn53xRaGJ8wk3JSJa7ePV8pdwxE7cuzsi28rcu6SqvAaxmkZ",
  "key27": "4ApgscCz8Qk4arDdmH3JXGmGoTNq7uQvxPXq8BLDQGxdeXybZnB7LoRZCqwTCb1QEFLtUp6DbMeSXZZ3tGnKeXo3",
  "key28": "YNoRdSgeFhBKubtnhafDWxwGWf975jYpvtEZhiCesCJR9EZMG2UBAcJtAKNTK39VqoB72u8sudD5U9nWFXcG6c2",
  "key29": "L94zVLbcuU3JxRSdcA4GFox68skQ3fV2kyVEv8EQtMZMSZBmS8SbXELJoj7h449wSCdKEExvfe83vrt75bRkX1M",
  "key30": "2tSqvxmdnPfB4MumbdHbhvyCqAd6E3N7X1f76SBjUD42oupghbCngmrpANMcBSRzQwtKHxRqwCH1YZ8qmfex4Xnt",
  "key31": "5QGyaCfTK8tAXXR35C8j3NERMzJzUmWVeNBUstJkDQY7Dxc21a8uu1PAqZQNKjWd9nqrEMuVDcj4bL6TE7mTD3TB"
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
