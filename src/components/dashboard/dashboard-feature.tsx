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
    "4KL3BZoHPvscCzAm4HBZ4VC5fSrH1LZgpW8pZuo9xY7Cu2wVhCdBxcsfRXaEy2ui4k7zBQ76UgMcQ8oFnwoTM51e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3CdFH7XBRD2xNVwnhi5kjdSYSKtd5SDWvY3VX8kZMzcAkYqGW4uSbMBjqth8fRZeJ6r7ckYrS6hG5xyboDjNjA",
  "key1": "nmJh5C8CJ1pyGvjsEyiC9EWb3TnMbxvAasyL3qdVFYhBPYufvxiXkKYG78L7PvSTH6WCHsdatQ1Zp9rrYxHsdJf",
  "key2": "2wYGgdtVkvmy6pwLUVyFYxEXDTNdQpofopjnpVFVXyBaMWCXs45jKxroudpBbcmDnSzTRk14DV1jQu2ccQcWzkCB",
  "key3": "2QwJrJoNaWAkgyiBCbCaEyR6mBegE9TGb4kQykKNwcxWXHAfw9TXmBYHJNTy4hBkQm9799CaaTJtajkL63WJQMQG",
  "key4": "3xG7sMewninSfd6wHMRFSnkw96JXBH1rvX3P8FhUVnz8v5E6tbWMkoE81aQS6zoE7NVcXBN9JYNGefwAkJoHnwvC",
  "key5": "4atizQjTTfgjZLxgr1ppGfnFz9Un4LhBBjFBRs4dinKMhPaCsjJyPUX2FSLDbhyDvwF9jgUFL9CtGP9pKmhGjQGY",
  "key6": "2t1Bno5n6DJeFK59ZUg7SFQhx8QjohfHUqi39PsmBe9KyJBXZMNctzVNnYGXkzxb7JmTuuhSMdQBpBMgRuHBZh2M",
  "key7": "3uZmq53XVzkURw74eB78Go29WmmWHmA5jc152te4crdzcx7SJ9fzDK1B6xD39TFM1XXYWeBXg7JFyhzFs92qB8Pq",
  "key8": "3WiLX2Hi3UrEu7GJ5oPvWiCKxbKRSLcGkG8qoQbAR3UsaMZmyEmWMXSySiFgnXdpWBFo61m2iRmkcdHPUrLJrELi",
  "key9": "2QBLiygerFjWadEpa9CHGYehDRxLGW2M4HYv5Qgeq2UNf5zaKxYHTQLjHiDQTCrzCPvtsD4oaSFGK7x3SKsK3M3a",
  "key10": "3UYkcDevEbBGczzoR693qLPCbjxgV8y9nva9nmGFVK1pTu9sbNesSZ6hHcHdNiEwnqvSxkWbG3pHmPNk655yeQMt",
  "key11": "V39UYnEjLTASaDzNNqDmcaMYrCsVbodGppvYHZfHECfEobBbNa7G7wKKvHbKnAtTJTVNSHExtX5TcrEG9o1aANt",
  "key12": "2ZD8o1Fu5B8ocMLDujthng5LgcfdH1NDSeyEZmQy6Wha9ZfMALMN6ykyHwydRMgGyMFnrjB2Tzvrx5SoS1SoQR2U",
  "key13": "gL7n5f4YgXfUVH7YMHmHL4xVRRdDxPbVB8fdqG9TGxhxYCnW1wVhpBwxogQFgx5MRySdb5jWtXDwBVPWmdYL5Ve",
  "key14": "ttqaFimftbFXTSuPzLAexihJikMPdwQWkg6pyQgM3QkuiEFTBQkv8cniVcgpicFPXH9Xr9QpqkLtMJR15PX9UNQ",
  "key15": "2dbqc4Nt5R8rf2pPJDKBrtZEnMTLhL4g9b8zraQG14sYwPcASyi6DkZSSjxfoonGKvPDhcs2Rs7B9nxG6Di37Wp8",
  "key16": "3n9U7xJGsjDXriGsu3UfutByxzsgW6juuVYzEeLzPedERUjB94iMMvMPWQQdMGv1fcgmKaKHF4ekqYrZmwbTyLi7",
  "key17": "3r9J67DDUveVbWpkuW88SH2UCJGrDFhxdxaVDUPusozGED6wFFGaAv5ngVCQvW7FtrTdupjKa3SxPA3VyhbQTCtw",
  "key18": "2E86nisMog1Mu7LtAVT2bjJKEY4pjm17BhnQMqyvygcon4Nz1Yb69yekP8X2nCsNLSB8LKoyF3a19aMQADcySEeV",
  "key19": "2jHN3Y7UjreEq6wRQaM8iAWcxCHaneWfsKsBQigYTfpuEu43KMwYRy8aLFXZ4jRcxQnKuy541EiBdyaThskAK1fF",
  "key20": "3aofy39odrtiie5ezxpNjDUNxHrNmkRcWSGbrWnv6jHHFoAG5MbhYCc8gxTyrN35SMHYVeVmLVrzS9gaxTuFnS1s",
  "key21": "4nVVtecYp9F5j6Wx5nJ2ghNipVBjCYkbmuou2cVFAk2fL4LqGaUFJRguPzqfiM1JtDdZAtxyKhSxErvindb8PWVZ",
  "key22": "3JUTSm4HeMQB14MmBZednVKs2XPNoNoe88crwxHQ7zwCJf86hYgfkEyKwPAomBffFCYEWVjadDxz8C1yJDCMKgoB",
  "key23": "3FGrwuJxh4ER3AmNL5jJ88XAc6KXJMDe4TQSMRQeQgkNkp36oDPVygRVHgWMPPsJmF1gAb7rMf9oWjA5otgjzxo9",
  "key24": "2qmqEpBrupyor1itZCNypaBK4xC6xvW7XyHuKetkhyMPS8CTYiEVAo7YZxPYcNhHcU6GG1Zp6mHRBM1KAcQxSNjo",
  "key25": "5MmzNLSedKb6ACa2Kv4w8NW2grwwBMFqwKY8SMjtUUzuiz4GiffhJMC1d6G14i6BKJLT1Yh6QtAUu6hfhFVe9jyD",
  "key26": "2efT8zqfuLKJgZqy394HCzAGsvNVTzWMJmgndPyMK9jbEouXCsPi6EFcLs39ewMJscYrJ9DuE9FKT9a4FKtQvyJC",
  "key27": "3moAXT6MBra9iVVY1wa3ZqKtBxqNRXU3KWJw5QHUF2gPGQhAk7CDgBfP8ij4XX4GPqEPuKwYttKVYSkBw68Y4h1y",
  "key28": "5tz5CSV6Bp8BgZyWoxvVLqs4gpNCAqZ9CcuRSWoZrT1m4YRTwhSybN6A2aLqCRBqEYAxDcUh4FWSuu5FgQ1PDtXC",
  "key29": "283vkLqLf2N1AiTbwuCanzQQCgmu7yxSbhRRo4KZNg2M54jxSXXH6yixtVgAAVKam11hxxu7w5xjyjkkkNaTYi1h",
  "key30": "fsy6BXv7ktoALZhrAaaLdgDWk99FLEpMd4huUNfGPTWpcnPTarGyj5cmsLPpEy1kKyHzzDHqoRhh7K7APLvHoDk",
  "key31": "4YqCgx5JojvsWiuT3F4huGn1woXbVwpXDdYtSmTLTMGdmgSkC8jvbbnCHctYLiE8hxQWknthudeacvfEVdtfxtBV",
  "key32": "4yzgKo7vMPhuozp9bhnEhq9kTBgqqwrkGVfxm8CaSagNzQfpFWFaBjmPiMf1rN1W5tNvDK1AvyU65m6xKxYjsJzA",
  "key33": "4RtcutEybZU9oDTqmaAQ7d5RVQ47tFDYPEUoDoFHUYwLNUF9zzwUhADoF4dTRycNWuBYCUSqQ5Bf7k8vPiC7YCW1",
  "key34": "UWK5h7mk5guxtjYXd156SbS6Jn6yKpUumcWzTqkqNeRkKtZxVgyc32DhSBR4JeqsEkxwGQAXoRnaJmLJRDBfdaP",
  "key35": "3zbSivh4xguPsSxFetEmWa7r9Bk617bAjxbezRgkLMUEvTvx9gZRfa5k6cvpaaoNbNYNjjfUMC1Ly2g7kWF3cdzk",
  "key36": "2nk7CexSPpQUtrWJMADkE2cmLuSrudSqAdmHjR4ARHNWYZeqzBMqVzDAgKMeUHg2j2ghDej5BbzpCt85KaVN4n6Y"
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
