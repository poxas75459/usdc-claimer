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
    "bZbTNQu5T4sKNmA5jSiPUWLVbqFb9Ygtkf8aCayNR5bjeZG8FGwJR2wDBCAafu1V4B6YkWZzKzrhmQ2ME1gPvmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59V7EEnWmzH2mcV73eDEBb83VWi912bjtctscmaH1xdmfDNyc5By3mS4awJXUVPMREA8JNJqcCKWP8AmY8NRi3fU",
  "key1": "3PXvrZKgjRum8bV7xz1DYYtupzGPmBCRt5t3iwf9SBGU9medKn69xCPLjfbFaAdCs5XQ5ASPHTGfwDBRFE6joyzY",
  "key2": "3iADNKWXbjiG8ZtQ38rDgoMGiLYNzjs1hFzMzykk41tTZafa5nwUPbS7nM4UeaQtfmENS7dtjamh9p1UL3MnxC86",
  "key3": "4z59r2qQDHptDSEswd9kxzAdLDPrUPZ9fy3JTVqb6uxj9iTYXm5Nrc4DRXgMzzbzZ2J9nKo5ZJ5ik5RXWs6dXwNf",
  "key4": "3k7QuZAyQhbDoL8RLn6xWozQwFoddwJpRSFtfK8S1j2jCcVUaZ9S5VUQ8fMew34oTuGZT19eWUijhdnhJXxMzBV5",
  "key5": "4mifYtJh3AjSKvvYzQzUzTFTwGwtnKGMaEj2CCmKvwNJP8FVBRDA6KE49X1gmfaZ9FzcZ347kVNYFUVJrCz9dCJk",
  "key6": "5sLJasPynTYBToNvGfEy7Tj3xZpTabjM9Hrbc1ep8U7ZYEuBS2ryPCjyvwJVygqwMPUUdriqdytSK9BJ65itoXWS",
  "key7": "21FedNAgVJAndkMb3xj3qauihzhZRxkiiwpdXDbD3TSrbcEbZLttrrHSxC5s3dokGDoR2jr5T6M7s4DzxEeM51pZ",
  "key8": "P7LJ3gqWVqW7XnwtRqTGCFx2MZAfkiZNKMpnUkpoTLL3wzsRuKfYJS9v13di4oNqpBc8gNyUjeaRuAKdCczp69e",
  "key9": "2fFFBYMm7K5jZu8DLRFRcVxrdsqDH6peSQP8FKfFo41DtyQRJFZsSL4Y67MnH8FVALhSH4x8EWXdaDtH6NC5Bp9p",
  "key10": "wt5Bw6LSSYJ7LH7NwSZqNs1A1wY5Xi3cyDVKN3Z43sePf4KjRk8NqhyriVRWCeyHtzTFLJMprBgJXfigENNubBz",
  "key11": "63ruMpLHKMuq6wfbLoCwWSLEH8pD8iWJfuhaBMG2kxcnAfrzFD5GHpRyiENfz93jtATXjnhy9MmXbH66wv23jt4X",
  "key12": "3tWR6T8LA1wf98c3nUq62ACgtCgnGxx9aP8E8dkAgZ4y8M8Fh24ZXarvkeKhYRtSECeWXkZEFmEkSsbV1kNvA6Hi",
  "key13": "2gCFP1n8xJYGjfFpkys698p3nv7cxSHk3knJYRCxSie7C1mJEFcPQH6uAqxygmUhEcmwCgMzHzDEe4xsfXimUb3y",
  "key14": "5YC4e8dYZK6zYRkgzahdk5TAD9EiKuWyGx3kQqVABC3KUUcV4LuD2fSMKSoLrcKH3PN67XMT6JHZsifNEVffMS7k",
  "key15": "4QSpJDUxAQLgvLManjaCem7eU1ePZMjCD6mLaViUeLdUZDuhyUVu4jeEsWB8v3MXfxXSUbZina77kqnHFrqnVpdj",
  "key16": "r45pcB5cpHQs4PXkHqoBhTBz4YKJ2Uy8fp7TNxsLKHq3KGkAEbgpMmu1m22A4sKt7wYfPiAFMyLT77Q5ynRFdAz",
  "key17": "3p2rprX7wAYJRTS4qrM9UVjFFKBvL2qV5xntQSVj7wPbRbii8yq4twKToLnPW7TeuoPrj4g2DRKso5TEjqAwJgBA",
  "key18": "wCQ46B9PiMU6N1NGo5VuXQF1BDTNna8SCuAv9ouDHkekShgSkCFTNEA43Y9ujhspfefajMo9eSQfEwHqzgnjg6P",
  "key19": "5arrArttzfXVgXd82VJXaoV6uNMZVSMLnpFaj1L3fMcgyqqCrH944ZKy1qoNRC2QeFBMjcB91umdVrn6dzSdPdcp",
  "key20": "2spAce6sERQCwaF3xv8p8E5AcDVo6GopRb1YD7CFyQuu2LMovVKuaPe8WoYHv348XEsj5T3w35etcevvXonmCH11",
  "key21": "4JtSVFN2sqSwMu2c2nt47LaWC6YWJmtvW9GDGyXd7CUkMVE6Aug2TLruTM7fiESYn1dimfRGJ3hnArfu1LrochJ5",
  "key22": "312nKaULG3FRUiWjj5YGUD3Nmdfo5wpGvFaPq3P6rMirodkdagdiBfBA5wHejvXGUTJewW6y2L4u15adX119bRL2",
  "key23": "5JYMd7XLRxDRN2hD6B9QR9LByasfDoNmEqRTxq5RSN3hbKRDkiWoQaQGjTzipXB1cmSMJ85J2o5WeEYzAjfokm3E",
  "key24": "3oc84ywnJ5X61S6kvoLnzbga2HgrJq6Q3WXZKkMX7swx3T91e78n2GpKPrJXa91UWGQ4TVWheSvmjLFD8d1ZnG6p",
  "key25": "2QHiN6vgYzk8mtmv8eqBv5mpTGTqcr1UXET5hZpXc1SNfMq4LmajpZXNNsF6qCy4YCcqk2qUzTY4F9hpHx4BqPH7",
  "key26": "61bugrcZ34U46baemqx4TLDUdwRfHZcQedQ27w9n14nNAH2HoPZvduT4eLMvUYGp4wZSFrdXrQa8CKKYhZ3EjjX5",
  "key27": "4Cjg9EFVpr8UwKW4TPkDbdxi5W2PKcGuRkyEZsWcUJFJ4nLH6HmGX2dPmwzGZhbsJVgK5VvBCuvRRjjF8ggFrVUk",
  "key28": "3b1ukvbLEFiziFb8BXkGGKW5ksCAi7ryWcoPtd77w7tmUDxLVtEk2rfcf8BYU8sgWE5kcgCm29fW1bh6WkEShxMt",
  "key29": "6S69riMVnYEy2wt1Pn5Yr5E6eyFnYy6Vd6DaCn4AFFrV3zUpaCWnmQChN1UrVHA4usNfKEfwB92EYc9nvGVrMzC",
  "key30": "3on8jKRKVdJYrrPZhuaPCgopW7qUkZNsrzdYW3uqBnnvS3ULQ7AYEVc9GfKKWmCgLVgvzf8FZfMxJwQLWqaZMkma",
  "key31": "3qZ6Ug8zg2QeEQpVDjCzCjXXoe9HpBvgtxFbhF3TkSHtYG6YRj8KiGi3WJi1VbRMhphYAS3B5pZDxih9drVEqBPJ",
  "key32": "3pEM6RZNwfAXgN7nNwvVdyTsfya1hgwaMfrzVyAh6wWZri2nNUUJLXZPCTkoiyKRv8FWPozMMnM5QSn6JAeje1R9",
  "key33": "3k3JahqvLqBer8y4chN7WMqBGfNDBVZnqhYeEWKw4qjr5tgNxWAJDtsp3KPw6MRJ1caJnixLpVVYGh1mHJFnBPXT",
  "key34": "3NWG1nnPfigmHorN3ZTeTt7hfjEgDZmRLR44zZnfexbdU86Yedo7dnVv1hFq62aVusxNTX3zHe4VpbnDdSiawo5L",
  "key35": "49shtvdd21mz3zg2ZVvNFPR2H9amDjosE7fv4ZkSPdKDXhjMGVY5LorhPoSoYsL3kqeSQA57eH3RjSuEdkssY6f2",
  "key36": "x4muREah1NSnbKmUBAeBcARaLomUQuMo6MJnRr9B2wXNFRaC6AzFHLPS3Ryz6sD2FwbPXRsUWPvYTTN7c1XybJN",
  "key37": "4U6Vmjc3uP9cvPS3g96H7n3o344Gs3TQXcq2k93tPdrytMqLSAGqUP229pbdbJ9yY5YqhqNwnXuAFqtXx17zgDK4",
  "key38": "3zAu8afW4Nu3w9RbTbH4bWanP23CvuSDAxv8QgSLgNBWh5kgLzYNKLXdfQna8V6nYWKZwNJZH8CHkmA1yzrAw4RD",
  "key39": "BwnSTgn8snXTFqrVionEqzb5wTcaf27Rd3giXhm99piGye6BQEuN4PyyiSu1ZPRronM2GuDqcqhiUXF2Bc5Dz1A",
  "key40": "4ad3Lvueei82oiDT9GBBe63ZJwV3wUQTbsmHA6YZZVn1BADXCNS4V7E9xihMoj6nntC9PCKPxZVtYYGuD97ps6YJ"
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
