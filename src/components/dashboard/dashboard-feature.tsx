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
    "48gAKz9HsJhDYD27ACGigpCUggmG9pKr5rx6LwjjZWBdTs9DWAt8gZuej4faztMqZXFkZJweftRxR4ZJvP6VBShC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VgftjUbKiaFLQJvTuRJ9Kjcn8Dtkd5SLMhNjKA6DKbCKsd9To4fxjiYFWbtLm2wHomx6mh12vCNurP6eJTVXjbj",
  "key1": "45a12eF2HQ3gCfVfKZP3Dgerwj9epzqBNeWcWMjkqjCa65tPVMFyi6fux1JBFSNpKv7haJqNW4ozq4ACpnpZmJm9",
  "key2": "1ubs6KzpPCCEYepXwAquRCwBeQz5a5fFHXSRjLwchFpw5wNhZKSkBrpTY5UUs4wUphh6yY6vJjzeeGVLmZ9KR1g",
  "key3": "2JRvhwz8TJP8wSvfmFNQgDFkcFEeuRHBeUiEKia9gMpK91KB2FSirfUSdUkhroLTKBZnkHaea4mu51sRyvHdrGV2",
  "key4": "27HvXk4y25Wg8o3q49uv5nT6pCU48EfkFuchZPVzNEAzBy7spqnMiT1KqfcJ18P7oMkEquQADshBsXHfAhwUEkCr",
  "key5": "35htnzeciyFdxg21b9gNmuXxuKMadGPhbH6b5SoTKVXDvdHsvVQ4TbyHfraDzT9xKab7FYfchjRcRwhZbdqyU5B9",
  "key6": "4nsd1AxvQDKahDra2Rj4Add1SXYZu9Tk6VQ82DjdUFuFbaeWBrWpnrxMn2XPBUVt8P7K2jz6k7QC5iCf7vZXwucj",
  "key7": "62C5hNvMwbYDCSTYyiGxwmopwRKsmqYtiuDWcwwCYCve6MbwD4Bba7mb75t58ptp35QNPyQsqPBy29hUUsuBrHVQ",
  "key8": "4cD89gnkxFQro3Ju3mWkksoNRN7c6orSBePSYBizsQcvnASaLLzXUygB82vio3hrX2hu3DACrY1QcEqn9Vi5hmyC",
  "key9": "3PWZgJM7FUcJH3VdVV6J2yXdw2z73P6AnD4xiBt6r9SpQbaP6scYw9k7j1WaQQgJuqgmRb3P8TJpay5o9qbcyoqp",
  "key10": "29dVFNSX4obe6SRjQy3Cu92Ttu1xSk2xxxw3peGpStUbMjo8YSAbWwUbxLbx5mPGEhQYsGXafhMFqaFpPPrjLTw3",
  "key11": "5wJVwpE3JqVzFSgEGLLzjCjuTeYGJG5MVGefMw4cP2Pjcy93zE8Jw7wsJjqESEbpxoDsAjJLQtKEo8ZviTqg8TYW",
  "key12": "3nPqowTvFmp64dCHQcAWKbCy96wfyVTQrMAhzscvMWuWUmUhXZGLW4qtb3J7tw8jKfdWKccMTZQ5Spu3NnQ3iAGn",
  "key13": "433CbUtsCcut941mnNDTibvPYSgz7ahHQ99oiRYWFMw3eyw5wesEvmLRd5ToCSSVSMDSQDg61D6JUhGiqJ5RLKrz",
  "key14": "5PmNMNy7GPP84RTPFHApa1Y9skXhRHUdmR6v4hU6YD7ATi6qUs2JjkEyt2vDBa3QsTac7TXbWVamuMCshfLDcpdA",
  "key15": "4eNPKzKrjWH8h9LoYKJnNR8sFPNLBeuKjTHJuU7xJDgUYvLfQQ9MikQR2ZBcEobZVLFCA73RNV6aY9ZYXtFBsrDD",
  "key16": "xMCkxYshB9G7FW53BaBoui65EwdbAReANqn4etZKJrXMsBushi5S1c5RmE3ye2YFXSFTyiP6Peye2XbLMpKYUuN",
  "key17": "4ateXSGezzwyTH3HPjdgM4y9W8sLHKkLVFMcE8YLUNeH5GCHrDuJnLi9dVFY6kuHtEMYJZLEzZrZtVpVeUoSDW2g",
  "key18": "cxhP3W4juZLY35YSoF7ik6U7ZE369djQ7fwfvjPrxevpH6sSizto1HBM1VCxwnaNYnQPvr51q8WUGQ6vsk9uDR1",
  "key19": "EHL11zMyBFAi44zs7UVzdXPEAgQT1Pe5zmsFM337MddAb7Uw7cfXPbfunNVCPSJm5vu4qDRnQYs8aPpuADSMdRv",
  "key20": "EUQvbC747n8sMfD4BxNkVM12GgLKo2okcbcMtG2ifkqj1Gp7KD3Bc84geXqmDvXpE37ny18hupZASmgcWCvwEoe",
  "key21": "4FGtQcjZYsQeEnH4bZEFfCZ3JXE38yrLuL8xs4zD4kxYzjFkuLYGTH8AZwD2HV5daGKe1oQ1A7yKK4MLx7bYugu8",
  "key22": "5pfbZFgGw3UQHyioeEBRf3hhfr66mF8HhDaKzxxzDqbaCgp3cxYweQBQHVDWWyqRfJq3AueKVdGxV5BsH1Q6isuk",
  "key23": "4FopfFskRJHTdY53ayitc3qsiF8vpQXnFtTstp5bCF2b9i1TchMJbGSXxdQGfvuK3PafB2UEqe8JxoCzhFNR8N9w",
  "key24": "2EMV4kY1sB1ykSVd18PuW6JmfmqC1soG3GptepWE1aoFWdbzCqfXpzmJcAssrUj8cMnjgvMC6ro26YQvnEmi7i43",
  "key25": "GhRxp3k7E5fBi1Qgdc1RjLbcnEGMcA2pngFbrTNoP34iZDHAvnefCCHAT9eyaVDmFXoEcNfuovcAxac3daRrBpq",
  "key26": "2Yfa1zRHFwvPNxY3N5xnBqrx2i6dqoWKRFJg32borXpzSCfRRkS9Nh2vWAipGGyP74epBKo1XvBiBsmrAYuSJnPs",
  "key27": "zNWgjenR5MYj49FHuCwCnBLCDaYgsDDif9aW5hA7SgXnob4n1k9riDAt5iZykUdAzgktbiuNyxhGfeeLFVu1FsK",
  "key28": "5L2unw4WuNFzDCfXj3fuWa7yqHSVsbYhaxJuwsTSTnLBnwC7dQqAhqUGy977A12JsR7QMV7CwxDTu96k3mVvwnmi"
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
