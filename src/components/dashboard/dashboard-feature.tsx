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
    "42ovBvqYi3fTiJa3kbX7BriRzPpsCj4kBJomyrnZvyhuUa9cLUTuUHYXyuXwyAmTgm4J496wHK53KGLXxrKqwhEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TgTRcXCFvxQf8nhMeHYW8PnW7KTZxPQrtQ5Gywckah2MCwQTTz2SHYqRiFHqiczpzYYZC9LKFcyxBHwADddLchU",
  "key1": "2FKrCzepmyDtzHw3WT7sXsSKBBe5cU7HsYdprNavoNYnCtEaLLjox1bjcouhByQcHsBgSCLFQh4ya3kyTtmSNziN",
  "key2": "611tKJTi4jxaw6LHjWF6Va4HNVWKxG3A22UPTnz8ERy11xEJZZFf1cwk66sHHfSKaHagcqdef1Ee3b6ykkiBH8u4",
  "key3": "3Diwe6nNt4HXozSrB8p9WG51huPJT2pzXKWS3PCocp5cpJBh6YtJak4um8V2qfvpWumtBDaFQ5so2Xwf3CGagJa8",
  "key4": "4ZcqHMDcztYPH3e7dj4ucfrz2mdJJBP2CAq3Xv1afJYugSuSkAqeTfeRhRrxTJhoybEtznr4C6N6i31bZGrS8vBj",
  "key5": "2EPZBb8byyVUbMBf7BZ7Dd4946rKZiQz6bx57GMoYA1KdQyoQ5U5ppKfLmvak3nf36kyQDbyewcitUxu8kDj3UJS",
  "key6": "bvCWPPaNGtWjHFbuWS4ej1d4AeaSr3vSmB6Bxmw3XFisCDhHRrBb6PK317J5FT4HDKcqeTkkv4Dh8t3X65poCkJ",
  "key7": "DzTdfyvxdLaQqZRPQYRYCyb9tFMtGJcs3zYE4ALHNBNirok1ymC4LD4xRvYHEdZrnUiHnNMk2WqFykz33ZF1pQh",
  "key8": "2s2Z89dE4dqxwMu2DWMJE78QtfM86QupcHoMCvXMtTx2ALP3zPPLZUGeEhztz9pnyBJvaxH3JUmykSHHEwvnUQfQ",
  "key9": "4xi3mEd1vqQDpMucQVrauq9WNTHH1JzWMcD72aJkjqtcqZUWBLtbcte8m27EaaJptR62BxtrwBHshDNxib7bn2ay",
  "key10": "qiWxEUg63dEsy5rUdQLZQ6dSu36GUzfcJVpLL2nwqFEoj2ggzr7dLyjmsGgZQZ8XcU1RKaKQZ3UJ4MryebptUSF",
  "key11": "4TtSzjzZqs3CsHtR1z4CusUvADr2bt1b66FGmCWjZK9p5AgSuc3a47XcsUKiHyzowsoBTjPC3vCxPdCt8jFWi1xk",
  "key12": "VrpMVhL78ErouAfuEhc3FzPjNjiLWLpVedLLBv2k7Z8HStMpohB4kkHbUVF2HByfBZWdeFPtWjGYQ2d8XNs9o8R",
  "key13": "4beswcV2dc57UrnLDRhyy4nqKttrWDcC959HLSGR51sbs974uVGGUmSzPawtdVwYaGBWPQvNt5LtfDyzQhfaUok",
  "key14": "5Gj8BHp5F9JjsDEFRZU4GVyDWFrXMTN6b3UDjH8sN9ECQbvTmQ4y3cx1v42YLyHSb41BFYHxww5R47ifHhWVj9dZ",
  "key15": "5y7Fn8iCVSz4cd3iocFZaw84uS7szdPjMKV1pLx5Do1cS87gBqC9EgMk6YWF627xagCAnBWY7WgsPwp94yjURDFe",
  "key16": "5EDjU5yGLhKphyE25VHExwpoZVi8Y3HVX7FWpN9Xt1gcQ4FXkYd6BGWBRpxrAn5HspJBzW4kvNUWdZsFXm51ibdY",
  "key17": "5wgZBtPjHpQjV11asfsPPC32SAyY3Wc71GRo5Xr45dGUHaW1h34YSTC797xojJzhYwpD6JE3dH3UWrqCb2T3txKf",
  "key18": "3SfH7AJCentUgVBtT12ct4Z9ZUthZUDVxT3qtZKxhrT9kqruPrbY95VqXqS329GXp1S3Avyfb1R4udc5Ff9rjaDf",
  "key19": "3tESVUcx4cTHFUiwDKYsNoqEHY86DxN6zndo9iEgwFMbuCkTHmKfyDdaKZUf3vcGt3zdgvkELiHL97EUk1oki9PN",
  "key20": "38B3RNvQJ68mnRSBxQSzgB8N8ujeh1u7MeNhK75MWXW5oTmfvNekqxkQC11JkMNQpTDocFMZduCgx47uFv6X5mGF",
  "key21": "5GEKDHBbf5rbAURkxqiC4MnH1itN7ULTkfq7R1TbYB2ppgWSh16tMuvoQtk1CX5hcqyfehckMXhvYnfconDeSSGh",
  "key22": "5x3g1SyDTpJbbNxZqu2bGuyLNPbW5HsB1Z8AZrAZZXXGmG6icoZhQsEHqbfTYT2EqEmACJ7grGMNpoZxxsXAyJCM",
  "key23": "2fQx2zAJfBCaQWYNSYsFY32bdaaTVvon53SKc2nPq7hEvwtRNg7Ga2BdBscMSArYK9KQd8AnpZb8e7c9AZ7NhWPJ",
  "key24": "8F8VHWN1f3z9VRx4WvVW4dWGVKHS1vx9tA1xDwbtCCJK7YmrUj82QEg9w399qguVqS7noWHtj19Uz2LQ6UTs2TB",
  "key25": "48UQja75TuNbTBNgpwKk63PyPWgp7fVQjyLi1SagKPNaYE8mc8uXNNcDjUqUsfJWVUYbDMpLBEpkPxuTi5ZCPwrL",
  "key26": "3gZcJYQKwUyWyzzRSQqqtEeAQe1f3EVZuTzWTdeAUGpfcvH3x67oFsP1bbfd3UUdJQd1PLFSvnZZix7VSFSM3CXe",
  "key27": "4Y9dpdJwmwSiLs1eDu9y6tFhhLDuxT4VUX6eh3srs1GKduppzjSLigZa9KYFvQ369SqZDbSjSzJptQgWKMp74aQY",
  "key28": "5YXqKtfTssiSfK2MufRgUsFv2YgyWRFwpMzQXfyAn2zbYYGLdRQsQyWPA1CEzpxC5Q5LVRCPR2cqYCTiMFKnb3kw",
  "key29": "39TykUttmRzvogMAz7zMHPQ5XkRfxpiBJxrFaVzebMFBXSRxMbAq4EDcPtShXkBRohugoqo5oWoTFpV254zCEevs",
  "key30": "4TrQGZj775duqH7t9Jj7eU35B6RHjiiPdW2aWcdWKmCPxJpH22AuuGdyEF2hKyUgWN4XxsRMEjYbmwHAUiX3HChY",
  "key31": "3631iqhX4xjBkqxhC5q4dhGWLSq5JHURg4NWaZdj3MSyDRCwBstLh4VM2AYktTYSCCs8C8Zv6owMgfuru5oSMJBb",
  "key32": "2YY6e8WHbtd7QimRY56x1p7K3R2vvVJCMamqyGW85GLRxi6FGB4gGwaC3v1PE3AKPJLrZEnzqxqat8m6Vrz29YsW"
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
