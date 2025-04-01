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
    "CKZCTxTphTPbAjegAxtuvyvLdkg67sTe92m1CZ6rA67BW5FDsHaLykKykWGNPdT5yfuA8m3MpSVeheGeKvHvz3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ehxDAWykrx8v81LEdasPiiXcEywcGorZLRSSShnGXqjXXtpL6qw5HHSVCYA7Hgcc1hZVAvAco76kRirgpVpM3rQ",
  "key1": "35ELpHAskBSwPhaEKLCjjH3vNjCiporh6GvaEEBCGHKskDiz2PvLZbLcwtQTFrpfCvFYEtwX6hfTgUYv8wiMKh23",
  "key2": "4WbYEAEx8uvLBLavXCTtRgh2X277RhvxFbWMq8xcMcM3q85ifNZh5fxounvpVSdSMenfe5Mee1QFvz16T9KUSpi5",
  "key3": "3w1FWYsUSnbzirwgaaqFvguYyggjNazXgm9A19mLhZKPBUTpPjBLhwN1tUpSUweQehaKLuczYPZabamjYJXb8xTL",
  "key4": "34UdGistLX1NBx85bXb3ixWjEL6MRenis673QZ29UXbA6kHxp4uYUffhWP1GnfxXeL5G4KcBeCgdfYqBCBpw1R6r",
  "key5": "3XeJA5HDiVMfj7PwXv7ZpBvWn8Zy4DaUKrhbVNHbGFK7VcdFKfC3s2x5rPP8bGBxx1TXDMo28zGu5uENr2aqv2Gz",
  "key6": "2R7ku86uCTbph661sDU1B3xwJXNCjwbohXJa7PoCSZiCtLHitirNAZU9m6w44M41iXhRiNYrkoEV4rkekgZFQnt8",
  "key7": "3oeYegL5nGbFD4xNwFjdVF7vyK5sik77duoShd7KVuGADAYkG7imoxriiwbou1YvUB1cLTV3zW6Xb33A6vv5j9bU",
  "key8": "2R6VvaNaEpKXsmHhvqviguj8nAv3WzCuK6fuDog3BT9WLxHjpDn6zjyUsJwjk7NKcsU8w1wwq4CPb6NACFLGh7eZ",
  "key9": "4YwPPzbr4GV5em3k3xhw2o8axhoXSwSWt9QhZVC8WMsg9HWy7NZyeDKCRn9XiJvWMmX714ufv56vALwVniJa7ahB",
  "key10": "9yM99FaN4p43VBB3t9krTSdkiC3grFbyNUEuEwG5hUco59JXLgUZu5CPcqWPpCsvEmiU5okFG3hp3LhEY1QeyWG",
  "key11": "3Xjz5y8rtR3HRQLhE5PsqthXQ6wnhT8REdPUfVmWAAqqx7evPLqNQZm8af6HSyR47JgBuM7NAUmkRJX4taftBu2r",
  "key12": "YiJKDbJLE6MJqEdwNuJ7dqgVsr13JcSWFDa9NDk2rdSu5zqai5nQt5Eqo6GgCVSGKU2Jm7saPBEDfq5iBLK7HNs",
  "key13": "5baPEPWT3qNRGKA7dVLXEBkQfn8DvXsE8yBdjfNCPfcEBoU7pf9JU3NZ5Sgqy546DAueKAG1CUqRzhCDbyvkHc5j",
  "key14": "3xvjnU4fs5K6FF4EXiu1ka5kX8j1vq82TEXf62ejktG6WtWqx1f1AYMDH6YLEMjcf1YM9a4R88CFPGri3EsDRgKp",
  "key15": "5TgWii66YH9s69dzLjc2L5UnNW5haoBTrvuP68GH8oHUms9ehFVUEpo5oomgND8fbQubMfvZ3Y4ZgdA7hz3ZaPXD",
  "key16": "3QG2TgsMbLEiqN6PmWkPA348vEaKfrazwYYEBq7DyM1GhafYVcGhHpbWtMt8tnAZTjUUMUBZXtu8tN7BM6R4k6dW",
  "key17": "3Sv877d9SPBmFYztjBu5s529ft2TeT1c32HCNM9Vz7chRmFoEtKpeBih3jLp9nVswLNjoei7NLN7hrMrtCcj1KHv",
  "key18": "8RHNFk5WvkSC5pyy5apgxTbXTgdkomRdRVRLJdKuhqQWmaNTc8C1CdjaHqXrYasqvJPK3GjJKRWNE5Uw6YyubA7",
  "key19": "4L18eEvPNvXcUfFJVWAEGXchxyMW9JFoNwZPytBvGU8xh8NMDJknFfN6QY4sMn1h1DdDiJyAmJbUf3ZwBeQpe4oJ",
  "key20": "4vAb1Hs56h9BtfvxMsq36RqZUkk77xCHPNFWnSNtGPSBycimjCbR7B9WUMiGbWhdxd4w4mdttbBMiRDt6JudzQjA",
  "key21": "5AjXJiPMPKDdqkDbk7ozRUhDt17UWzhxsZZ26s2n5eC4jpdgsTXaFMWrqgQv6vubSGYEnBdgmEkpxcjbvrjL62py",
  "key22": "4tspDCJJJSRAprL4hngyQQqHXoFVQUp962NXG1onBrZPwaPQZbN4nEHbMPjsCqHDc4rAJcvuzHMZh6i2CQdtdf3J",
  "key23": "X7CuBkuorkc3SLJBznWAhe6Hx7rcKFMYaN2XSwrqQCJg1Vct3NTKpKwyZpUawqmUQvW1NyETX1NkrXdEnY8Y2iM",
  "key24": "2Lrap8wpQdWnK5zkCnjHQLvmxzLFjRAo6pNSTnyHPUoX1FQYXgipSjZYAErVUMyFKaHNKiitL9eQX3YMS46jqzHz",
  "key25": "5F4H3BmWB34Zz4fAbCJS3kFKDQDfVLpSKFNeiFtCER6FgMX7St2V9528b8APSQqxP6jiu43KGjSZqTnvtHoManjj",
  "key26": "5KMw9g8HjGFhri7ajzkePx7J3S3LijzWpJuHwxYxSDR3EowrnU9UbJC5A6jbkwkRaK4ZV8ugUVVCK8uADyZbMvj5",
  "key27": "2PruczA9QLPQQNCCPdPr5m72N8oZmphMNVUJvY5ZwYK5884FqEETwoxSLNRHmQoeDZpEd6NvMMq9rvj5f2iFVYUB",
  "key28": "3Va4E6SB8VniUDVQz6ZNRod9FbDaLUWRCmLZK1i7FK4QqMKJaRiwLtgZjvqmt1yZ6mxVMoiRv6mNn9WxLURjtupm",
  "key29": "21ZK51YrtbFRP2B5ckjM3aciuCzosnNsmPAEXSUp9rcY6sQoqRrW1XGy79o4dqtXREWPnEHNhiwVVxEjDCNUUhjk",
  "key30": "5SdVLWoCxfxtLBowndPe92wiNYngLYGpMtv8eQovR7G1nbuTXNacmNRPuc6d7L9UwWP2MaPtftLoyg3sNbuN428b",
  "key31": "2gJbKhmnNpNNZoFT18xhqGGwk2vCQGnen1YMnoztHHvM92skxDc3ZWsrEk31mXJkZEUoDw9PWTey8ktwukv6kDsk",
  "key32": "5qfWHaCLF7t1JED8B7DVTN3uLgPe9ATB6R6T1USDodUbG5eYLwVzqX7scPBqefb9Dn6d3FbrptitCoTDCRJC26tQ",
  "key33": "4vk8DgLyS5WjUmVUFZAsX3f7svpd95Si1Cpjmj5CcPi6ttRDCLPEK1eQFZvVwd6orun3cwTv2KZdMYVVaMq1LTSp",
  "key34": "R2CWVnARrCoae3KkkgZiwbPe4zGjpkh1q8iKRSQ6QFh8qHgdskLXEuv6drZuBjnVgcnsnUoxPcGirRhnPKqU9ao",
  "key35": "3xeH2SUXC6ibZDYuuDVSuNJgXpXRKktqs5M6rq9zP7FWdmfHKdiXWpVKnF8WJNGaMmEKomCZNS6T2fxP83GvfP38",
  "key36": "4XVNBNF8XSCXkje5MFAKahFtzrQWJzyZrJ1PDp3X88f2WHCJnmdmuJGfh6mteyrhvemVmLTNjDeEbpoM6YUvMrjx",
  "key37": "4VP7jFw5S8gD2oPxuszK21gY93Q2UhqL2rP4tRUz58ULdsJhw3cjb9aNG7uh3tNVbQ7nwCx7CHD1sSPLGoymgWdr",
  "key38": "2mmbFLr7UDqaqqzNVvyoFt4Ny6XxDrWPSrR9SokocZAdMnAKtTRJndp9rQLNhDsQsXD5gN3LMzTmbNsAx6HBVpkW",
  "key39": "24yAwkvtqZRgiE7H7fHN2wzxwcNTmRiCBVFS1tsTKzLjvS3mVDCvBJtHQ2a5eSwCc2rDMgQ7XK7hFjA5atvaVHX9",
  "key40": "2cSmS9iXwfA3Pm5LJF1qce9CEzxuMHNs5buBUX6pamrCxjDGLWc8sf8hzjkceSvCnEbXGEWYDwXN9rY1BnEzMeaT",
  "key41": "EttH9y6uwUggmvXXRHdE1bow2jZ5qWgBkBEnVNQZZKDrKmFmDQCmfKmbCKPuev6JUJ5YKNbB2nJmtUjDPQiCU3Z",
  "key42": "5Nmqm3T9hnghnrsVaNAjPNEthMPJSvVM2v2yD47VaSvunNMWztbuiqyy3AavYcdYc4rracRSmweWvJosqN6Yntqr",
  "key43": "52CjmM2aEfB2VCKdbzRgxganWHjzKMLXDzhiv7Y2pqrGh3iBBuq8BQQkQqVEvC6bBB1cbim6RW15JetSTx3fgrxz"
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
