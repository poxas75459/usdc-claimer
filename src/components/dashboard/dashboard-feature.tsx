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
    "3ji2b4u73voGp2xxLhkMYyZ4aF9fSs5FZT19Vf4U3EtGAAQsuMU88LBscSZYuvyRbY4oKCTbXQpdfpA3RDEfTKjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48FLd6Ado9vdRFDSzboXcSP8rEVMApEuWAAXtUF34mrr9mHG5j3MXkYpkD7uCkKAJjRrdJYs4F8WrY3udwUSHEgV",
  "key1": "4kSPkDj7DCjuHdXnXoWzActLJihZQ4JAsgKv8KBapjHmfZf9PgcbuA1pTWkjVDzqJeZmxNmyDj31Kx1ALwoxZyAR",
  "key2": "4RqCzGEW1imsRUX6VmDzcAf6k5rWMJoh5axp5qG9tmDzjuRRhUny6EXZJ9CoeSoUmrBRdeRPHKxAqWPatrcwDiWZ",
  "key3": "4ikTXe66CYQwvLoMrYcFjFsN7npjN4sEb1F8DKwYheJJnZWdtY8pR55DsXUSZcSywhgjGn68YYGRQ5AvCZDdBy6",
  "key4": "ryaRRJLTHMxGBMMGg97tA3sgjcw6S9Wr9uC1NEziNnpjsP9PsVYVooyiDHW1b3VvpCyXP9zxFKaYEZakMC8J9Km",
  "key5": "2kpFvhs5tbRQkq3LQtmSfBxRkxUFjS7ZUQjUjiTiSPZ8tteYpEioLUEe7BWvM9gERq5YGGJZ1LAmhbhfqqsPZNZ7",
  "key6": "4qonYddxQ5MSeBq2xY5TwZBc3QnoD5hVQYAzw6msw6RLVByfetbSULy4xGPxn2girxZ5AHGLStoSX8Wsjuk8jwSw",
  "key7": "3hs8StQ5nsY6h2Atcu2NkBh9wy5DkYD1VMbMxd9NkH3ehFj6wJz7Wf2ie7EYUierJPtvv5gfJpXVT3G4DSed3S7W",
  "key8": "J24GtmjCBQL3BcYjXhcWHwLYv7syAY98QWmcRKxr5P7hGSvym1hfuUr4KyzV6dxv3ch6Nw4nMmGUXtSMgMd9PuH",
  "key9": "5tBFPRo7oQuFvidfX4sDHp84qFUUNff9nVgcuKLRebwvoAirJsHWpKCPfjKoQuycUzNAfmmkjLNnyxkma9j4JBLW",
  "key10": "yiqNT9buoGqV2MsmTKpFg6Ect9MTUMsFsQJB69LLPkUupLKJTt7PgzKte37TfBvfySmPsuZKkGaeDxY4YRK5NLv",
  "key11": "nMTR3mkmN6G8fVXvT1nUTJGdHYpPzxgpBss4WbabNUsdfEB8tmWChKdNr8GQHnM7DFQRdMXGKLK8X7PUMGYrQGz",
  "key12": "4RgCETNztECaU9FWL4P37yqJNC726LgX6QAZ7ByCCfQUaRnUDhJ8Q83GVLsuDpxV7XiLPdDDesyF4mJ6ZtNyDNzH",
  "key13": "DfP54knJz7LdnBXY1mH4iJy4zuE1FYsoCca4xzB3LzeDr6Uhh3n8NeH7E2uYkn1EbuvpcT3HKb8EW7T5AZFpav7",
  "key14": "3VoP7HXpMHy1pavDwV77SGn6j4KzKDzdXA39KiMG6SXtW3A22cbQEa7D4xgsEc5WRZWNeRtCJhfHtcP1TVB2CGmp",
  "key15": "3Lo7fc99zxRTLVgWrKAriurFq4HxDLwJajAX2CpCfYzKjFEZ68fvX3e2ey4pUxZiQDgtmjTm9AEyg258AeseTGrh",
  "key16": "4qVSj8aFDNbbxri9yqoEFRtqs8rK1FMwSBGWX8kWqEP89GZzC9ZzQzdmD3WoQHyFfV5y9qyzqfFqSC8HHumBZcwq",
  "key17": "8P6SFKqZGzyz34zWuzvL3STRHnkJuPYct3hYnmFRnFEDX4RDJq8wJu7ZHNbERz6nh5mxD7qpL3URZYnyL3z3YKw",
  "key18": "5kgEjJUB4YfBGnuTSPh3NnAYAcJYrFFzJ9ytm53NSyKHcLQTQH6vPP1uHAfK4AVnZwYZpQRgkSxrpihfGAd2nzut",
  "key19": "4HFEHv2ydfvwCSoddhGYukovYTqvXUpxhSC1BZbdDagvBJ85z3psABvmLekJKhesyujfds3MaTKQJqPfLNWQ9mVe",
  "key20": "3YfxRrTsaiTLdSpK28XKFqy1LMxA9AzoXnAQtjszs2kGysVLRVSSjMKWxGLWHzsTac5LUqafLKSyC9xNHS2josu",
  "key21": "35WrjS7hYTLUmegvSXWfVjuV7eRmZ3F6Jk9jjoyQjZBZVHA6kPfbJxc2NvPtDcLwwWVTmJcpqN7V5iUZPjqbpTpF",
  "key22": "x7PG95gr5bwjd6JnDJXZQQXxWT4kL5rXeZrtkRnfFJxwkSLwRHa4ApbSrNPayfzuedHXs8jsnrskr7hEKRhAk1j",
  "key23": "23V2QnvMmzFYLDcMipq2VXWEQhBt1rBHkKxiE7so4NJ4fYToYWXMs7EbJtonz5dG7is3angtXEsxFHDkXVLKZjb1",
  "key24": "4dzWAGtxndTZ7hECZje6vjTnmeE5K9dqSA6hto6azZrxA6k6YXUxqdd1McL748DTSDvbkp7ugUxrDMAC6M94Sjpf",
  "key25": "hBMUhbQoeXgUzSLBQWVTv9bPpQ4BvuoN4cnV3CHvvf8LmRbFRFEK3FgeDDUZmJWDheB6GajSDJ1gVAug1kQhbTV",
  "key26": "37b5i5BAkzuvXm1fproBtfMbSh6B8mWJyjPvqJbWHFRFGFK3tPwZhY1mr6EkXAzbzoHPEyV4LhxajiRXoAZaVXfA",
  "key27": "irXWggYW4Pa4q9o3Ub3fkajUb1Q8vBfjXzhwQNjuaWjnPCTZSeWH1UW9E1pTYN5pDcXyNQPCLAuPMCwDDWSHzBi",
  "key28": "56MkUi3hptPQoNGowqnRrcNNpwThQCzhp23iB1bqmwABJK9sEXvEXSXJ1LKsfPeppkhpFwREiZYzjTCT181LdHDL"
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
