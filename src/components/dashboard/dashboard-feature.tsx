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
    "3WdRSKw6xDW3f6dGbyjxW5BKcycLrEskFJygUXqGDF34RX3Sty6fgiwbDpbPmVEfdpPwbriYG4HkjpprGS6YqnWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4RfBaew1PWYwMNP2P5A7HZWMRSzoJba6zMA5PMU22E7Q3xxXYi4rn9bCcTpk2hLzyohvNoQKkzdh4dRnm3ecRz",
  "key1": "2PQ8pU2WfFBunF2B1oabKvdhUn84MUS4fXvNWsnpnu2baRkqDqHzP3Xe6yR9ZnvoQE2c2avRHiabnMs7R4Zqka6T",
  "key2": "2iSteVWusvHKqujimiWFgTdWzMwbCUHtRVv4uMZPCzPBVdynuXWqDbKpaFVoyUok41gHzb96mNo6AXPZzesFNYMB",
  "key3": "2vKpoFtM1bEzNhvbnVbkma1r8Hh9gXEeTDHbaBNPHLdJy1AkPBHByBSQumsKxRJHdBQQtAPrcvNB9PmRfQxu9ssA",
  "key4": "41vS1YHDF4Yo3mhYVMaT9LFUVfqkkufVoDcMRq48MDr1EhmGvmEaY4xUaq99sRWt3sNEYsmyg7k3jaRfu5BEWu6U",
  "key5": "5FqYbWrGGQDMprtsoLednwk6GUREp5rMGYHa78xat8yjRSBKB39etf1HSpf57bW68H34EbG4ZEtuMCPHDQ31wTuJ",
  "key6": "UsHXmWGY7Cynya2SD4b7sb3JZDMU3zUDtMQjZ77nqQLttgML7ybanPyA6QoE2EAYcvnxpQokn3Tsd1PDAQeDcT4",
  "key7": "2ijDBBcjF2mvUrM8rFaWeeuFtP7jvqopQDRhzweAwkQ5nYxhyNfQqdnBaqKMqsR2v3PubPJmjRoGs4xmi1mSPuLW",
  "key8": "fDBzJ2MjdcnPaacM2FEMY8FHvBpwGyiwrqqCKcaTpAxG7UgUB8Fch1Wydy71od2YBkgWYJUnPzjkWumoVgnRKFu",
  "key9": "4CGWptq6NgjgdZiMzEAkzJqZhNGpatZ3D2tMiTsdX5e6NF2GSF2zZo4usKzLYNtNq3yGVJ75FTPJz9Bd3LCwHUGm",
  "key10": "2qRccRsL1SCrisrd9JK428G295JA7jfq3qkv8n7LydYYSK2RMUMFg8azEkB3BnfQDH8JBWKC3d5fEtvoSxuPWV1E",
  "key11": "47g71vqsR7ETTJfDPkgUTD2HnKkR8yUJ1wxeqr3C3EyHiESGh1MrXNqEKfNzepHJbBZZVQfhguSfApjwY99Hudfn",
  "key12": "MsL3tHjWdkLCy5ZM4r3uaKhbYEj2EBbxH9jCAnM1KMfkCZaCRu7J4uv6TcB1cp7GcVCGiWuvdQAz2zgbj98Ebvc",
  "key13": "4kCP3Gm9gq1oRXmUVM5Ff2mtmMb5tiBcd6XGHF5vFnCkku2nRppCMdBHJStdke69pn44gGhgbKycAQGppM1MbEF8",
  "key14": "2bLohRHcQSg9w1PSwuScWmCTNNim2mDHMa49eT6kTQfiJbUCrvHY9RLGH287kSy2wwKukrE8Jmgm143FgQHb2wNe",
  "key15": "3casNif7yDWweP41Gho2cy2ysGTuvPWViTtNMMideij4UFQD5Zad6kAR4nb7yWtwKkVfQzeaBwBbWSrrPQRJB5zR",
  "key16": "22kSUg6Hc8QYmvCpFbbkUtPHm2LP6GuzqsMVH5CrCBEgGiozJGZox2RiVnwxxjmPF2cLNicU4hCj9sNpSXRgEPtb",
  "key17": "tNRuRokuAHevUxxCy2nNeHhUYxhMjNBxaLa7YZRSz3QRdbC43jw8dQfiBP61tt1KXpwnkbL5g2oCUxDkEtXuCRA",
  "key18": "2Bc58AnNXJDGF3Qkn5pgq4Tk46Wfj2FYT4GkaLeqtH3YW5yEDasoVDTs8t9JiKxp9AaSBvVqt3UU395HQ4EUc1YE",
  "key19": "GBZku2nHZK5mjqzUo2b8k57oUQRD5XJ5pdFakFic8YDBcNZLf76dScimGaqE8Ka2fNtBwUJvZ9JVQD6RM7eEVy9",
  "key20": "3R6Jj62MrFEZSyyy5AAPmQdJr37uyqxHeQxfSBZzyqNWgRb6bnyxyzeWVYkL3XS2oMeZYeax23tG95wrDjyNAG1",
  "key21": "5cBRn5uHoPqmRQip3AtHgi1jENCMYjMiNuqhmt3ErFkiL5gmDKvLSm8w37Ri9PijV17pug5TWPVQqNidyRoPTusH",
  "key22": "GWCdzBriqJeZRQ4jut9Y7gGGLYLx78uBfgRgZvezumS29RGfufXtgssDTjYRkXoyrpN8KqFfokYB5XAnAf1pJHk",
  "key23": "4KfsAhqs2CMEGXKyKWrAGcsWK4xVi1SBw8Zs7izy2imqGJggYWXAvkPXzYHjp1vYcu1yhXKnTtmGs2nxroRfirZK",
  "key24": "DVKYbJi3XJ6aPYHHu8f1pzHGhwuNnGCVZPjQbqeMhhH3w24A57do2b3TFjYwNMXmGey6mGcpn31dHtDLnAXGNYA",
  "key25": "4kFk7anHqnWeRWWwyTUBo3ina8evsPRoj5ZUVnochmNSRQyLdK988fi1qKMCYkjp9LiMNGRCzd3Pg7Cmp8gtX2Po",
  "key26": "5dX6489t2MLQJ7hcB2bPQUZSTDKzbDE2m7ZApUNcPSU3qCCzBZT7QEqT8Wtq1rFBauLqQfoJbKGL4geSnGGyMySL",
  "key27": "5UtrmKbzZD31AUTr9qHX9HhxXfkiP6X9KbbwvMNwtwiLCeFnW6ZpPiuVmb5WsTGRhotPqjybCtPUXyWXAaQriyCz",
  "key28": "2X2FgAQCYdbnCiAH2aLyMDr8MiAEW5FwsZ4HRHLE1Ji7L7PsCwXPyW1bMNRX78gg2UAHhHH5PZ53jFXnEbrkGAHP",
  "key29": "3RAFRtfM2ZY5dQGmaNcaV6gCfxPgP5SxsXz1EAL2W3n1Ciq4x1eBHU8GLP6jK268Nd1Ns7XFCauipuWLKjuicpVQ",
  "key30": "4S75T36HtxsuJRKi8JzzE4wcGLxjebrLqSPSdGWYUnR4Hqzps92syChuEGeq51GET9qhNHGL1inAKweqm2qZes6J"
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
