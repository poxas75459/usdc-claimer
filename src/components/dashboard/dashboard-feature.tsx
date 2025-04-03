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
    "Q3dpP9Rz826Edf1eTGHF42MfSCsh3wNbwfzNY4s9Qyd9Q18GVYFhrxF95VB1XZuXhyQQA4XhxhFQVpaTHnKd7qR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fk9WHN5vWT1dC96n8GFcmDSAbG1bHavTSq67xahdi2TA7rySLNjy5aAWcpwp91E14aoyAxN7f9dmCTmHcGpi79K",
  "key1": "2TL3AuaXNty91KCg4ogcmVgjHcdRtGcKmQRzXKZvRo4cMb9McXrHTYHqbY5PesRLJXvGcHP66qWGHQxsay39ZGeU",
  "key2": "5m59Sq8HJyWaCg77FRhCkrfPRnHE33e46uYFezEKjXNiBaxMaYJHNTz9swCQFfQU12jsy7xiNML1cyD3nApEFCfX",
  "key3": "4KQZ8kuVrnERbzbm5gSqr86YrLbyK6bsimYcBjXsjgvNkmebfgLygdZtX8qZiQM5ji5SUcnNaFrZHWpbNPq5V8eH",
  "key4": "RBkekCWFiPcVxj72Bx81o5TQC1HmVrWy9nJYfVfHk9NYfUJKvrhxbKNa3acELXFGqZDRuzsQsEWsH9gLcMWfcLH",
  "key5": "9Zcdcrbcmry8Amzet6jVsZoANPVYqnN132PQudwhD3kERYRXYmm1Ta2ELHy6zcmMwZEDpR3EFm1JXrWJ7HM1iR8",
  "key6": "5zMGWG4qihb9mD2TuVZL8S6JQKzGNZr9NJy6g4FGQTV71sB2ti9R2ESEfGWuZemN7EpgevmMKsYYCjyfYNJAVEUo",
  "key7": "42JgrcFm7TFsY4eQcK1ZWLQtwFPvw134QrSivGi5UDVT2tsDHcmLA965qxLy7dnD2gCjA1XuyReiqjYARxmh3CuR",
  "key8": "4FYvS7R2Ya2kyZNnuTFmRSZm8mVgNN5PyQhbfRHfuGJ1TdpMrSDwwrBuS5aa9Q6U2gNAtVjMGWFwm5vWmxnixfck",
  "key9": "FCy5Vn2Xx7CFkbuT8LQkU9xQdAvve4i2U28QnkJXUVoZjTESkWERGPziEaeu7iy3JNLAJ42HBgrAfhM1Rqto2rB",
  "key10": "5DoCptRdAxNuka3FnT7iCar3VmBkfRzQEoWvytL1Ld1GCc7Ds8p1SVzcptZU9cajLabmNPk26kkJPAa8fNZFSS49",
  "key11": "3wyuqXh8Mf9htRKJau9J2XVMpxW3zNjc4AprgMv1SwqqyEN1LQBJTb67T1CU1uc9Y5sMzF9tyXPgXukr7VXDuthC",
  "key12": "3sQ1XcP4XyqDSE2NHbhp1fS1vYTMzZGFn4yVa7JDf22AM85tFT6WckTbr2bfABD5FVoVgpDA1NrWuS5GS9FyaZ3W",
  "key13": "3cYvD5uR5qar3VQVFnt2XMaGvRcvTRhQ83759WJHiApYZkME6Uti9JCSLV6Rvp4RgijycmewFVCt5c1Tge21GKeu",
  "key14": "1Q5MC6jTn3xW8k5W1qVGMMuy3EkzA4DbZ3U6mHAgqmZ1SfohekwDTjk4X1qE2miKagWFMxLfiFFzb1k256qJv5V",
  "key15": "4CGgpFXA3GbECSjHgvTLbw3pGK7z4cbv4t2rmnwai45vtR1sj8nMhxWEgFY2Tm53BSAW8WuHhXGgegveiBPxrcT1",
  "key16": "48CPGqrZx9rzMxfBM3PFQNMy4pu1Bofe6iFcFaQkfSCKfFX9PCtFMsfBW568Mg5bQ8fyPCXFp956jnW3d1G7RpEh",
  "key17": "QYxsuFrM9AqvyqmQ9qU8BxQH1RvF2Ej2B1CbRJ7LxvFeRgUADUr2X4weDXFyzoEybJwimaHH2BQpAXfTZXzDzmp",
  "key18": "5V7U78A9q5NsEQjBa6RPjFZH9fNSqTiLB4e1J4xfMjUh9paKC5bufZiuthKzn6LaW7LstTA6Ukn9k7WFe8eaYRkH",
  "key19": "4F5fvqwH33P3EMNGWCbLiqmTB8srKkn8EDyuJFX7myNGuqAFrpuRevqJsAjDms7VQzpucDQBm1vcBMj6Q9XkEK3w",
  "key20": "5Hniz9oF24foM9YSUf5BfZRn3nRQuGYHN4xAWKSwFAubWzakNa1MG2BmfUh9KmRsJb8dhPynQ5mJXCmXcQreV4qb",
  "key21": "57HkkjrC1F5mAkzADQpRF6jCWqRqhnbMy7Xs8icWzPaFrmh3xzzJq5XaKseAmJdweiLnC7t32Gp99bCMLyzNbMsW",
  "key22": "2BhNFzxuPGGkuBs6XCRFZFJvCRvzRQqCLQtUwKx8KSFvkGuUgBztoqffNzriWjjXqnBuLUiowQ4vxWW6ehdZ4PyG",
  "key23": "3yyz56DGna3eeeDYFpLAK4aSDK7gW2uW1iamJKDi5sHbpQPxT6uYNstfjeNThRCtFhujbYmKRx8F4mqxEA6Np4Di",
  "key24": "5aiHad6HwHoQikiV5dvLyxdEXBU11kANihnrHt38YLZb9gZtpq165i83zcaz636XmYWCogkF6qZXmnkB94c5YduE",
  "key25": "48sWMJLbASwxzxjvdeWhNM7AGdwEQzNoWSPFLZLEdtDA4pUoEfEGGGJcHbXi5AVQ68epMtJPkSks2yfqydr4QySs",
  "key26": "3HY52GaLqFTyJnQyejQUfUSDN5vBbhxWvUDTnSXHRSS3iv5KWQAyGJbFPu3YjvmhQDhAX3D4cz7U6PbVidA2rH5e",
  "key27": "2CAFqKUPp1pGCLZSdZgkao7DGoUBdy3FegDd2i5tjNvMdVqXGRfC7WtkR9VeAmWwB7VJ5f8VmoaKB76RWVkiqx3N",
  "key28": "3CFnvtuezdDuEYX4d89ZTRf2w2nWtaFoDZEPT5JCY9hKnovam4VFhcn4sYhNfuH9MZ7jxGoaGgJdtbdk1nau6dfj",
  "key29": "5NYW3HpBJfN2uGoXwafQ47JLXx1HqGyCW2pQTTzZVyxKaPQRBXPPFbgxPxDsjuqtUKKVF6m3wtFC7KQt1roui31p",
  "key30": "52TpDgNiEoedHs8SV5iNGfvS6uaTy6DhvagXVUwX9Xog1DsRc2sfcJy7ae5J1P4BpZMHujMhrngF1wLbzfUAVWBe",
  "key31": "121bMX99sTWzN9kg1y6dAGJ77e5x8ubM1mv7r54CChypWeRioYfa1CEXCq6Ujn5Nk9Li4LLKyQxpK14g2pmgVoDs",
  "key32": "3r1R1gbwXZytECGhsAbCaL26Cvy9i9LF7ugt7G3HMjxc1QZp9RH4sTpvkpyCcR5f9bJQg2PyD48JEGG9kUJj2qx9"
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
