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
    "rtRnirK29PGXWUWR2Fcqdqa34NbPHiKFXDLnH4WReHLUYYUD3FAVq8c5iuqnvvZriZQvq9muvXYBM3et8Uhzw2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jEj6MDX5X1p6Brxqi6MGdsNAy4PVeN8Wze5y357G7Pi8CJSkkTnnmPXv5DLxCa7NYsvobqB7yKYN9gPUCKJoZKf",
  "key1": "2HxRJiV1ePtR6xMenvujn9UzboNEZQyYCBiu2dfCmhE48r42n7s3cozGuFczRZhdZ4R6nf5uViAGLPL8TVAnqWF2",
  "key2": "4U1uVnyJbmTfVR473geXAmnfiSYK8BKjtb1nqjgVjQZzUHLBNAEirox5rPZ52yEQwZViC6KyNfNqxq8SZnZK76JE",
  "key3": "3vFKXNP5jDqJnmYrbQwXtMSvydvmHZ5bhbeEA2tgro6uwUjkAct9cMBL9ZvdtvHUBicaBpLP8gABRLmhFuRqogB5",
  "key4": "4rzGrCa5mc4qkkb9cnBpipEmpXqmbaXcc25PLvNqZtzahZP8zzJk1gnNvyybkz1d6aB2dGXFaWc5UkrMitDRa9of",
  "key5": "5dV5nRUJuTQfECB6xBL3FzfJiWTGTgFGFeZrkdNVHdNTacjbdHsXC8prt4NRNQiL3WK1tQJhh8qJC49TebamhbZU",
  "key6": "2azPnXGm9ZbKJEATjFVtXqbBXrKVjCmLo7fsFoYR6SRrJpuDr5WQ5fUpFMhszFZkrhsbfFKiZmbVwvhd5LgQvLWz",
  "key7": "4ES8fXUpRArJ6PUDFczsextpoJmEqhgnPMDte1FNktYWQnY8peUDNAJELopLwcss3QEoRqBDv1PQBpXt3HFDwmg2",
  "key8": "5ezWvVdZZQhitQdEDFeKjf6HmnYGzSraiDnjfJRpjkBA6fAzQsMxvWpZ14ZydLpQRg6wdkjfknSgnqG5yTU1cVHE",
  "key9": "3yXbKUBULtniyobrLAoBvHefQxGykJWTcVYQzLCMz6t6fejXs94Jm9SJEhbu95iwiF9Q6GH6bV6anGKrnTB7Ljt5",
  "key10": "5JBWVwLzfTrM8Ymy5LhSJoLM9LVL7vopBqUod5nqysBjXgWJnKGiN2v8N5YnFAKxUKVHNpcQC3hQXssWdVX5p8FU",
  "key11": "44jLDeikxwGm2vPMVGxqcN3Br6F4qtknep7XM9Z7qsThYTWZQcm8wxVZc186oi8aurHwEEw1uogJ95b8n7AAbb87",
  "key12": "2dP2D9KKYkBPYcfESZsAM6HfJNwE7SGJvHf8xr9YeH8Gs28WtCGebtBitBDEXXvFac3jf89ys8BKFm3cXvef5j5X",
  "key13": "kNgwZS6ZkmJN2r2zWypcLWFp4g2RDEANL66zKPKjJqV1DGDHnEFzjRq7ULfy5N3wXFe6UdWRhMJUSsrksDdsbDq",
  "key14": "3xpUCgUz2ZodNwWXeqGUE6mt7io21p4VfvUzkFXTMixQ1ZKd42KQsgEdUArBJmdJXzzKaJDWaurS7SKhoLJnopMA",
  "key15": "3grdoqqq7F3RhEuiu7zJKB6vhEr2sp82puEZJxpiWGuJseYvuWeL9NdndiLeM61crwx7djT9RzcT4qXYXSHXTTBB",
  "key16": "48uaLGNtZN4zRtJYRD9hkoCApMMfjf5KeUmhGf3sC6wjL9RuG9ZZMjAnrcNavH9feoxc2GBWD6wEJ59Wp6KEm1xT",
  "key17": "43LHJe6BVJTmST48nexjaugNPfHg6pAG1VsRhMwzCsHwBugjCtNSTu1x8DCxpRkD65Hqccx2797sXS5JjZZBJNFD",
  "key18": "3SjhoGFpvRGp5A7Ny5bPJxSHyMHGCUC325mXjpGmxGcCFuR1G6RZHWXc6Lwg7HtYj6or1qHAfPR1GpkmbivZaJYa",
  "key19": "3khqnUuiu8zF8mocPYUhGbt8r1pU39ZXdxGMj7GXTZQKsENzCdG5yBbAqZavLgqHumnNqzUoxXJxWFBudJyueAE9",
  "key20": "CtFY4eh65QX8jmYpVpyCGDPSyJcLLFy1uJoLCkxcxhL1kae8sm3S9tqLinBi71HvkpbVK2JEynnxurS1n6pR517",
  "key21": "35EjogYkCEZJTKoVoSCdTdVmr2kYbS1HjvpMbhT59d14teV4zqeMNWr7pAW8i7brbv6skSG54cdFUqJTDvennyBJ",
  "key22": "4JYLrqamN4Z2ju5NJY8nwW5bMua38acTUVk9UoFVaTEHEhMYZqfus2pAYdEaWrsBcwFMZuQeRFh11gh88yZPxvE",
  "key23": "wEch6M59gf2rSkgXTmV6EwsEYBUxs5RpE5pJizkVrWp3n59mQSkr6P3eUZ6n8DyutdUVqWS29Jpbj3rwXpcrKXB",
  "key24": "616fyG2txyb14uXfztDMkMLZv4VCbPxGBcpJAsY7N8wmZoTsP7i6dgcSR9otPzKTbyXBYMfBiQSBh4tWWToQKX7U",
  "key25": "4s7AYRpJTPsFsQAuWBnMa1yDUeQx4D4LtDAGewCWD3PmRi7sZYNAX2vA8iJkJxCVZBxXQFo2dSfwtZnPw7qSMmBJ",
  "key26": "27Papk1tfyGugbPaSRRKfwq7JaPSCdFgHc5a3KRDogCTD56SzfucDtsPY5CUEjpAkhz79v2xdeSkESDVKaNjnN9v",
  "key27": "2moH8vXxaQ51UDTVH6T9VM1T5LZRRhCohkdAbH1EV6fEv3aLKoWG6msUoz7EFokquuBj6ySRKmAbQoY6AjpkZusP",
  "key28": "2c9EfDR95iQ2UCnAY3C4G2euzrK4RPa2qs3Nfzp7p7jJn6Mv1bvPWjcwgCGPXMdcnz4hwyL6fLXzbuSYYvLkCkJs",
  "key29": "2d4emnayThEqrHt7ymDHn89sbh24d3bBFh9fduZQPT5fQzBkSEHCxTc7vRLPwKaTPHoSu9ke2kHa4Qry9jCCCLq5",
  "key30": "2oTuskc8V6DLYX51pwfpPig2a1bRNQy2b8RpkQbe76c6QJaUc29HeizQYvoWJhyHKqqsP6R4oVgy6hCPwPEQgoWs",
  "key31": "3JAGaKhCXk2fbcDLBCRxSPxRsDJSBBiYEUyZVdaN33DoXa5s8bPSaJWSbai2JPGVjFcPM1kL8vvCyRUN2HtaXMZg"
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
