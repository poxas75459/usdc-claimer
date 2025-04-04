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
    "3nAjjocZcY8Pd9AVsn97zPjBZrD1BDEcxUbwZPbJ8SqY7vUhWvBABC3CJnRDfSqZiCsvrLZs5VFb9BjP62AW75JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZdmacfX7HmnHV6NrZw5KfscRuE4527EMpzwQVQjZy3V3rFydHJkvTUJqAgjS8A9ut34LTL6YHX1j1W6wMAZXJP7",
  "key1": "4w1tRTfoACaeTQhhGJbJrPdCjLRXu6gqGEJBdEFG3pxohvrzk3hUUS4cbbmK4ZZfq5kgqvwrZgM84u6XUG5p3wsS",
  "key2": "3seB2ReXbxcE4APBEMWe6RgkP669VqE274Rwcmy1WhZMPoEvA495XvU9Bp99QT8fFEuL5dsdGHkHNhGoXaC5i4wf",
  "key3": "62ZrgBprcRikhkNsBVrFLbkonSjg5zBKg9YGq9bi3Vbxf9g1RhwCKfks9w1tzesiqar9XogKUTWKkbjW1k7BWVDa",
  "key4": "m3F4xnwsrcGfzu59Wp9R8v1HsMsKghtcWtELXPHSv3J33xhA5wBM2gDbokQd1nqH7wX6wk8SvfYsTQQ18omSr9R",
  "key5": "pUyJFzxRELZeeSxVvDHtuLVZU115tMWK9r9P6j5jckydChzou43MJFKToXYdri1DbDm5gnAWEy1g4BozhdB62d5",
  "key6": "XFcMY16as3d5XohrcjQqmUCPKMd9nRyZVrFFpXcMhXZS3oAH3FSNUsBgoFkox2vaLcptf8gDbrkbMVgsvBa6Vvy",
  "key7": "46BB7myU1GQEawF4ELagDfakG8JJrMVi24NF1kDwQZCrvkkHyV8zYaYFmjjkNrfAv2ffWc4yHiXaiy4kfEKVqtH8",
  "key8": "4DnhNWCLiW529RrWyYiKibtRLW9NSjXuvwwSKg8qFQNYHwmhWbCqESGNwxLUruXLQ9WcuMCVrv3HBa5MGWnqsG2J",
  "key9": "8SSu68VAKFScbCdct3U2DuEhcqwenGUuefy8tm54G1ZbgdBnHVTkdZnsSvzPVtYQogYV8JbLpaHs5KQA2e7Lbej",
  "key10": "2WHr7ei5SRZGGNSXoZV5heaHGWSXQJxWSuVoJE5KpSdLqFZXGWwYWiAu8qm5WiRYFPQGNTZk889gLsnRzQPP6QVH",
  "key11": "54mjFhbw9UjBuBSrKTAxcMAUbg3CN5Cm3Etjt47L7V2pW8fZ1WYUdWxpiGgZmwZXXxQE5jRpez3SUJ5uBPRLqeGW",
  "key12": "4SMjnw6VpQS1qWuWm2sZVf5epoxQkt3Jt48Pi1gndj37MaecPWEGnXuAwhYu7t1Bcq93MrX1a627dVjfqqTqgj9g",
  "key13": "4MXqp5gsuTyqpSATsNgTfX9xPLsYq2PWavx18DiUMVLU2kSeHfs5SfTrr6iiosLycHZRjt1tVEp5FjXnVCu9ey1s",
  "key14": "4v1ybqqkf6gUB3hrUYdZeWjPLhSyFMmVZcv8VWgeWv3A6QgYaQh99Sq8rM8FNGeMV3EMB4Ab9rQgFbV1nKKmLw55",
  "key15": "m2nk8z4ErGv4ieZyLsaH1S6SyuMPMpFJP4PcDTPPXbhnRtUYmi989oyFonaCaGjF4QYBUQdZrSnkRXTZGpAHHB8",
  "key16": "54TjXJNwB6E3jqMd4daRDjuD8PSiweZUAEii1pbK7MxGLyRUHVAYBBicgvNtjesdnxQdpkFySstmxLy1WdszPiMg",
  "key17": "57Zp6D9ckVDq846PfTPbp69NUx3m8GcaqVWQuM45iqSXk9eR4MBEsjSEHPTsbie4Krb3pBja71eg12o4fyXvd3wU",
  "key18": "5KKnRebVwdFM37Nofe4Gv2aN12NgfkxdK3tDxPShBa1SguQBKKVjquzFUDxTUkesjwgpiW4wLCYUnkr8UHzCdFbp",
  "key19": "sXG38crRLuKb1gGfKtJKVLjV9LyYY6rj9Fvz7y2fhHh8UnTucMHDFXj1h7o8QesBFxV7BuoG6gkX941oERfz1n9",
  "key20": "5exBUpVSiQgqCTSqoTk7UVatQ7nCSg5VLYyC5ZKSJbP8h2CiqhuhmNWPEkKGa2Dyrdz7drfqSRVFpB92p1Xsdv8e",
  "key21": "5XQ8aPbAVNa8XW3DwWDQufSdnL3sd2xfBqFNDqF6H8hqAavUPuwqsoFE3hXbgy1RUEzzUbZhcP58q3DVL11JAijg",
  "key22": "5KuPcGDvAtufSyGHeKtE6AVVstB2Dzwn2vg3BXji9qxNd9akKJavKUvcFQkggYPiv928U38UB4e3fRkNC1pvDkE3",
  "key23": "3QkjKS2MFqagzv6jdeUhYdGKe8wPHHKhcaRgBM5mB4A2HPXE2THmwNCmN6egKKoAV5uuo17evqTUpeM2aUjh1pq9",
  "key24": "3a3jVgUiRyR1aR25qs93KcJBgXQE47suzu5tgdCqdDHJghZQnDY3Pn7GV521Mqa2CyowHvkmqAciHBk8vjT2n5bB"
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
