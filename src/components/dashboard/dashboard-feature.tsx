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
    "iRjXqCxNLWaCq7JsNupX4p7wrnsg3wRndyrzFRyG4TuSKH6E66ZiPLebXKnnm2RZKgkbfPTnT3qPE13vs4PaREa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34Vv9pSDs5k2ULvqjVSSt8y3KXpZfCXKjDp4je6gYa9zwVKTCXhdtTSozyGHNtVK88Y9ywEGJ4K6UXRMNocBSbKc",
  "key1": "38xHhWnWESQPUFeVzNcz4vTW3gPHRZSEAVMGMZ7GsUdCvXPNcEXZWxA8GqdT4deKr7YHADJspjyHPDC3xWcidnyX",
  "key2": "56w4ygbXyECzViCq1a7oaZmEBLcNnL3VmKMFBFjGRcTpJoNXPkZneRgV5MLxdjPVxmhk833jiRyE7u4qTzoyzPnm",
  "key3": "24XVVQN7uWDDN39LAHUSNbWYDvh2HJrs96cp9XW39R2vkn4JuXJZDQx2NgWMMZCqKVJw7QaoSZJ5YuEExoHqaPiy",
  "key4": "3RGo42EWcwGiXsKjSZTNQxoXPfQRWEQaiengKKN7U6PPLHn9AGEXHj46kSy23M18fZtAJimTQnAaFEeG38mg4VMx",
  "key5": "4zwsWyC3nmziny4jCbKtdbJhhsQrGiSF9oftcfVDoT3PddHQjSGYsch2dbzgtaSzWfGR8c6Pe8SUFeEC6qvPoRng",
  "key6": "2tNGANbhF3UVF3U2oQLyxNun5LHAJuG77YJcAZs7vGSwBv6AvDQg8TCmDuqEsAKs8nkKug4Tu2VyenrGpGdhVVPu",
  "key7": "QL5z9ZJL2oPHHkoLcpSzXBkqZ6EeNxwDqg3LFuFkXPJ89HbXwNfBb46MF6B6tYq6vJEQjiy6rZHeMcLBys55Az3",
  "key8": "5KkzJfq5kZ5xqCPdJwe7DrxZVsZRsu3Q77g5DoENfPhhzWjC6bg4LiRWoGQJA5u5knPnbEEwJLUJvznYKNDGVnrs",
  "key9": "29zoK8yTUFKjpH3bcgyMRSfxx1bTu9emBKY1fwvVnBFLd2HsdfepxrYR8VoUJkdbwPHTtvdje4S7fnP7rx8Gg7Ra",
  "key10": "3PNepbG73NG3gxj6m5nTpgMbLK1qyApcfnPyBoc2AfagPMKex13DQzWyUpZcwEH6HEtpBJGdNWNqnerzGpd2cTqW",
  "key11": "5uRVS1wuwfWXMAUZfkzdsdzewka6FKr6QsUKGdqMML4wHixKxjbTq1BSXEYi4yS27T5u5vV92tjqri5DFz5wsKmp",
  "key12": "VaTYdXFvdbDkCLqLgQjwyvyAF5Dge4GapU6Gw3wmDCE2BTg1frtaSVRi1Q5KexacbiscXpJhxRS2nxACQyGbZhj",
  "key13": "3BnHFcevdcMu35XQcEq6dG2DxQ59JR87HES4WEuLBba9QUnrfG6drTnjvgn29C23sHV9tMyd5H6VjszYmFh7c1cq",
  "key14": "5ohBKeBAAVb9y8YuExZThg8mTk9gpsBnw74gzkMvKBPRLpWds9PVb4SvmDGKrJ98DNR3eVbRhijYQwyQU34udZTd",
  "key15": "3EWCfmr4m8KWLj6oGSWC58NFwrXebdux6gv4dJVAzr8rhqhVP5kAAYa4QpwfKipovYUfm53NHqXo3recAzRg6bYi",
  "key16": "4szvFmq9EwngTeco1M4cFucACc6j1igp89LY5wJbSxzoomhd4jbS1E7R5cctNWwdf6BP8YtUDJuPQmZRhKnzDXLq",
  "key17": "612FGDABocHFVMGfdS8YxsckKmxaC7EyBEJ7aLD8SXYM7brLbHjbH1TcN5reBtpQB55FGq6kqxTrpcJ85gCVJpHT",
  "key18": "2tEpFyEVsGQeD5reypvWQD3XKxdp4xgXWk4RwaJwBLhBSYzstHYgcvLjNcYrtAYCXr5AeLYez3ruc75hDa7XKgfH",
  "key19": "3wPQjcJUyLYxmrQVY2AhQFe1x6zykizyntuLTfjaFkLmQEdXdL16aGHstGLLPuutnkmA416c23XNhCixUPGJZAZ6",
  "key20": "3F4ZRmtiSVKC7dkAU5xkVfSZTt9K7C3BPj3ufGAjYZGL1Z6c8VzTXhbYjabAUM7AaCe3FMDfR1JF6ShnAym5LhfN",
  "key21": "ApDktGHAUvXpJrjKBVBgn5dxvKk45smqRQYNvBqn9zTYYnHr9WZF4cXSC94FHn1pXFSp4VLiH4fHgkJonh23e3R",
  "key22": "4RvBdqcLUM7v8KtEDqAeg41H4Bv8Z4HeYgrXBbLsCwZPReP3B13ruDH5L2kFWw2wd1yEC955BFDt3NEM592pe1kB",
  "key23": "5ieDvqWrtXWL4F2oWzjsWizt9p9DmjqT8Dhz37hhN5ajGqZsEVUmfGajwvQH6ZMEfpMmv2eLMHcF2PUdxK83mtPG",
  "key24": "63TkRiKmuEUoC2UkpCPaxueyK6jwBmkGoLACNMSwCBs3D6TUfeXDWiCfr5VuNCmssWH1YBQwaVzWUfuBZdUMVQrn",
  "key25": "4VrmMij9vpGy2jRVVVt8z17PajLGUf9kbBfTsfJ7VvCUHT4LosYRXTYxioQMXSUAS3f34rVWpNF98ST7S3TJEv7W",
  "key26": "3WYL8bAJbJdZj9vsDG4of6A68sTuunhoBpVyyNEs1WobXVVboeD7gRSEghVFNL2XnXVYGuQW9sn9MFhWPjKtP2b4",
  "key27": "2D57xM85hHG9utNJdvEyg5ozGHL2BBfGbidk71piAmjL7iiVj5ziiKbRHTFhbTkPjhKQXxcqXiR7yKW4KjqNKv7D",
  "key28": "VWc57aw551nxhQpz1xTAWnun7qqGTzaZCdoxRQUVsUSFQ59JspkUMWTPPhX7VpUCriMsaUs78rPT2B3oAYQUtos",
  "key29": "5QUcRKYSccmR7HdyUHw1DxAHa3eeHStc9zHm4GXndgBtoHfvarTYJnz2Ut8WYQUn8X47gPftNzJF61tWKQLqzppn",
  "key30": "tdxWUyRNCH6Lphy86dU8KGE7Ut2oaLDd9NZpsUbhgp3p6nFy2oJ3tHhXtLWrRVHkdq4Ezd23S2ydfFS2gdXRo6b",
  "key31": "4QiAHzC9ATcKXggHRQPTDjN3dshjBpPxDNUtrDaHCy4PW7Cq4jgBNZ3e1EE1meDpp2S2NMD4TGbVzVopGc8xv6om",
  "key32": "LF4AvD2nLZymo9aQvRpHsmJCvfAnFcBQpHtjZzijCHDrwik5DAduGrnkcSzqvM3eVfMimRAd7bzGNFpj6jQNSAc"
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
