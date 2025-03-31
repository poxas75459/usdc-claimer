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
    "5ZXjGv8Bhb4b1uSM743mEaAXMkUPWSBr4XnsbJwYVr4845CXTZc7mZJed3dRax5XwPU77QwyMxJ1HwM6M7YV9MFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2YyFfoM9BJxPUEJyCE3uAwedGxxyksuubdz4bpxRZdmKa2QvGf5JKASAig2oUgAUobDdQ8bzQGRLH5FWsvj1uq",
  "key1": "2Cpk5SzpzxR94spaxpVEDE9kWYBUu6bBdeUNPwm9xwooeUdQAjxTPtybkM7e9ZnsVVrXDtXrdY3F6fEXyWSaM8ys",
  "key2": "4rhSnchkbZp9EpMkfudcscPTAmLi2PAyrVKdcUU6m1jy8c2XhF42TiqrT4BJEQ2uaiF2CGdc9JK49sLJKJFoBv4S",
  "key3": "KYCKaM1YLm5rLQGAv9HsQyRgF3YAwiXZFRYypMnzcAeFkzTJ6BXXVyNDU9yuVimAzfyuGV7bNuMMGm7YzDCxfkE",
  "key4": "4Eatiet9yi4KyRJK4ezzwKWQwvYSwNDntcTZLqgoFxfB5Kj1i1FkLaHDgeUrBYtUzXWVxc1tyEKHoxLM3gHu4XQm",
  "key5": "Hjn3GAnLykaj7JnoNqJR1pbisjtuLBvt2S1fAAaTBJxMT1mFNqFFFc78EMZDkNFjh9VhzgUdKFrGgtgePMLZ94S",
  "key6": "2Cd49pvXipDYHPpS6PZux5YDvfKbGnkc2vQNqXEatWK5qS4wiAw69V7mSXeREUHXd8qr7dEe4CWiW8Wtgk638StL",
  "key7": "5JQEVe8FjfeqYPC8JRvp9zRDjywomRWgo3LQCEHUL1Gsa6UvZ9PdUaeswyk3f8siQ7Q6fJA1BfZffQvfCmsVtBR1",
  "key8": "5adqyPP6N3ESaUpPQ6Mqke5YUULwyfBs57MkggxXi3Q52rXuB9hQx74D3XrKgHw2uvZhaPZ4VULARStEkoWfEfEj",
  "key9": "3rinds3xMPGEfGqokpfBvC8xNsQ5V7RVs7WGXC5ERaVYNaGKUX3RrtWD4Ft1tRJLM7vbL9qv6rs61WguE8SZYvRB",
  "key10": "QazKmK1D8tFq8i9XJarx4Wqo7eSmeWcbvHYVSHeWBgF5bCgZ2GPCSC1N3pCCnztXShBHFDWyGWYjLvLUHPoUjLG",
  "key11": "339s2NLubVkY2SeBtNqsMgTz4BAvXcT3udmWm8dKoaGw6uHDgaeqhScqBg3kSrSiNgBYNmT1iNNJWJ2NVNpxxYv6",
  "key12": "3xZYUF3wppS4nCjy6Y7inLZHKXXYuxhCozsK7Nuye3A8He2g4D3jHWBP8WwGc46xwNg5WvqhNh54YgzyCvZxRNQx",
  "key13": "34VAW6CLJB7tbkao9BvXTat4N5tPgprynA5eHLMuBkNbHmMd5gTqhqb1ybmipGbqqCyBhqbmY2mWvh6BMsAuUTNz",
  "key14": "3La1iEZuWwmWfpxSp9YM7FxPqYQygoYPBuxReyP95jqZyF4V4VX3Q2BPHxRRfGV5bMhcN9J4VfCSTo7ns2RH1iRp",
  "key15": "7pcGQAZ751daKyETcVTkq7pUemhjERTrjQo9bjDy6PwPKaU59isVoQ6YreioFTFX4gFtbfDedMEUfzDVfkpKyjD",
  "key16": "48ittubcaYSjkWEr2ypyvodFM8y5iw5BsoEkS1HkaaG5XHomabAUhgCzAEKEseuPDWq8Ph1EKM6M8qFX7xcJNT27",
  "key17": "2ce3eoja24ccRAk8C4UD9q8VK83bVgri7Jf1NEy9vMK2HMbPn9auQSMmtTWsSdWb7bxqhqAGKWMPa5DGuQgBJ15q",
  "key18": "8trsoNuXBKZRnZewupQezFVRMXgoewjr96KnNgQPFcMxWggWktvayWfCTJh99dpkUGvdaRJsD848QxZwUfJzhGj",
  "key19": "yTYtXV3TS4gQczyrDVicRxvMBzJDueSCXh2bVv4u7LnFsGvbM47zLenGz7duERQdVmizDiMcp9T77b9XzFrmwLG",
  "key20": "2zU6pCTmLfdkUZ3LzmUPcibjxVfaxAmGE4foxcFrCrKnTdrdBUcaLzXGRVAAKT9gySCtRpQ22VLH7yprkUjn41wU",
  "key21": "52rCAHvphAc92CsgbaKRc2pzJrWY6Kb4PhX2kCLkbk7SWxSSyX2ibcaEzM2MLJorXJthwCxnPiHKnMie5tdVByjW",
  "key22": "4LdEHbs4DTg2apTXHhfnQB998DVGU9QVsz4d49phaHVpQhYvKXKC7gwNfDF8Yu3zryJsgyXJrySPj2VV7q375jBD",
  "key23": "4sW1mR1bZNH2poAjrhZ99CxYxX4hK2MNdBYPuA2smSgNAj6UW2UrdUcXYSRxTrhubkEEmui9zZRDdfLJ3WAYFuvN",
  "key24": "4Y87dTBFyV8LUFi1svqHSdijQuQ8ex22EDNeCfm9wnSXSxsyeBUePmNptd1GVUouWUsLJJZrgzymVx6pRYqZbcCx",
  "key25": "2wWRn1thKH2B2CfczPNLzDTHtHGx5Rxca64WKFfhHR7JnPLBFXbzMcFBUZ5zfTuWpojg12C6jHvm5jULQrDxjnUZ",
  "key26": "28mUES2pSEs1Q57bg8iUvGSTuyaCaYTuDrbmBGbgJobAU73FqHXewcRzFABRf6tBM8JTymACHp9QV4RVRQFKY9Lc",
  "key27": "fgF1z2gpioee8F819gkd6MzWNSbkbnEwUixXUaGJi5SQeWioNJ7oekzPXnxvqT29YGZiMaT7EAbanrtEXVg94FA",
  "key28": "CWyhU85PTUrTsjdSTNBwjrwfPGVtHd8ZdMfRF9S7cHoTPuXSj9haa3Xfq5nRRrBpcKW8QEaxiYnjLAC7TAKioHy",
  "key29": "2JKzwyxXDFds96FdykBc88whAyhyoUhcXk12bL4a8YuUvSBFFr8xwGeh1zCCmHwmZGxQd7iLNgoP8E6RkLDuB6d8",
  "key30": "5zYsLYuJeNR7hFNhC2rhpppseBYhMSXBKis6skpx8R5jeCDw2EoEYxn7G4hRFgKbpbGi8dzpaQDJNtL9cAPyMPMS",
  "key31": "Cig37pzUsQQPcWvmoTrCY8qnU176w2n8ZqazK1aK8ewfCrXkKjTAApYuzyR7seVWKe48Wv1vtWqE3hJEr46AV6p",
  "key32": "246bUaAfdpv3jRPhoh5d7NKGKvoQMnAx13RWeNQsUUK52o7WU1XjPmRi64vDaAunrUfJYxXpvjYBxGCC9vKEsJt6",
  "key33": "3uaYhhRp9o85eK8ZvEkm7HdpA8ri9Nj2t2Zg3F6uBS8ckeC7fPKWZLZGT3MSUhje5VvLm7oB4QrrFG4RQZQL8ynZ"
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
