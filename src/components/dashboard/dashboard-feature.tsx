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
    "45r1hbs5G8NviJgkW1eDYQhqCknLNKpx5gePt5vZqnTadJjsbTJoB36YMrTCXz2grGoWz77D6JqWXv7GeWxUBe9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ixw3why1P6gebS43SVLawvqtcQGbbb4mDLPKi3xA5E6zgdCVDQt9TB6LpRCMXwyufyAFh47HQLFC19ZjJsbLGCV",
  "key1": "54t5ZQx9nfHNLp5m7Eofwwk2QeM4oQuP5bur7LKjkvvs7JgzxEopZVYHcmLJ8nhP9hyNnAVUKrz4D8aKDzsVANBJ",
  "key2": "5F3oC8gBk1xc8Hz66C32ckJdtckE7dfYqCXbad6o2otkWnJZrP7WPTSfte282NojzjtVf7SWvzSdDZWbdboernnR",
  "key3": "9jAyuftsVh1mQKESG1rAwnEaH4rm3m92n4jC3cNkCM15pb5hBHqpx5UZpHfj2vDq2xoBrZuwbMzL8eEP4M4aBT1",
  "key4": "3cmN5MVfDaYToqppsqZSKFKLkzs2hPnXTBQfaJhNYsv2WnEWWqe3saEfXNhYHZG8V3tkysed49QF26YG58o8Gnup",
  "key5": "4FCdw3Q3ULf9eiNoQeiGXcuL88jZmbvTzbi4PtctBHfNgBYMPrBZdGbA9fqRRxhpXEEE6KFKkWMdVdizVN5mCBsF",
  "key6": "3ZAgDe6M4FaQj2FBBhULvKvJxPJ1MVsuemZFC1F67R1eRdcxaJUPJ1preXujXMGT6HJ2vBoddcHbFcKfNsQ9gS1r",
  "key7": "5ZcQ6KSJPQB2KbcDb5qmRwgzogD9ioe7muQSp4bFDYyP4TrZ5iD9gX3pNf4tQk7jwnTH3rYpou2imDwhJRYkcEuP",
  "key8": "3FzHFryhcskTogRSDbXJtsbyLX7jxcHpiHNgKm8DXYpn5sLkjzjGvQf4TMMrRTrNusYGhkYodSBa3HAPqhbCx2SL",
  "key9": "317vrHm6ZBtz4ghk1dm8Bt87YKDnhyAmAk5E5TWr2uSpAChrWTHDaDgRTzifYw9EFdFeuvZTq2hv2rngWWKKNnSe",
  "key10": "3tFBC1QCNLdb8SU8FcnVn3vgGJ8EjMqgQjxrvyGu4Zrss3u4SBeLKkDsQmhheNxDGNq6DXmXNX2FCPrebmCQCTnp",
  "key11": "xtB7rM1HqFp1XQKfr5uQoJdnxLXPsvw4dfjvN5WoE2ntfEWPkJtLHFXgXv238MfiENmQk9Dgu4rzeKWSRGQVaEX",
  "key12": "cfu6aJoD8nsvTKsFJuwRniX13XawgHFFZJHsQnpgqrS2XmQf6Gcq3XotxSp75ezuE8mD3zWNzHnwA5BsZZS7LmD",
  "key13": "2VcYbLeBfr9YCd7LPdiiRaXra4mJntaS1FfpyVxNULNtFS7KTi3Ksp166RyZxZqazRhrz4bEnd6RQNk6hxs4SQP3",
  "key14": "43PSqdwi38TU1GQzuw3RWaz8wHkPg5x9spPe3xaaoKdyTGdWroPCUfejedD9VFUXQRH51kJdL4XEeiMfBswmTFkF",
  "key15": "4CxPtCdhRMCACVLENtK28wVPHsBRNsiGAfbsm5Z7m6ij5uCFHGzZnjVTitDiZEALW7mWNxjgv8CBdcQNzNZhZ5jE",
  "key16": "52CJHkqxiVztzuskKL5W3rLy66g3zDz5kwwKHKa1m4NrGdfCRSBgx5RCwDHDsWHfgFJRkPTQgNe4n9ehR8es23VP",
  "key17": "2YtFyKkTjeKb3enS9vWW6wbSZjvy8jLcUHL9WAWHk2x5pRFUirsQ4BLpjKvF9QeBkaTariQzxmFwqMUZR44BYqKc",
  "key18": "RWJy2Uva3k85ojXZp5J3QZuY2shfxPAVkcZ2vNqck4VCg6toe2ysKWbyrMpDezCWqKRqLzm3jdgHixTNKVQwfA3",
  "key19": "5DBcnZgED9yLHq5BCM9WWxwznFh28494gfC2YXKse4DcrT2o3oC9MQs4uMFKR3yy19CxP83s474TkQ1TwtjPjX6b",
  "key20": "225R9RGUCdxUkuEkpePWLfbAgpS9ruXokgZQUs3mdp82M36xkpETfd9kUppcVXfmohUbRVkJXBJSPJA1pgCxCA9a",
  "key21": "2ogDKBbRYrw3U2TJJQxJwDN6JzfBDm3YJqhcx6HVp6zGrTydDbnx8NVTt7JkbeQAe2TDxmXk1tZku43mhmZttgHQ",
  "key22": "4Co4PwZd1JjF5ZR4CnYeTMqwX4Y3rSSJVY29NG7LNXCPHywRxXqz12ju7Ag3ggDCefUHCdnzWGToCNXeYienVSHy",
  "key23": "229p4HVEivMMo9V7EeDNTEeLzPDuug3cJ961ZC5e7eaCgTUmTsqFzd4K58n7mhG3QnHEmR1wMBhYtc3gzFLzK3UC",
  "key24": "5mXLMn3oEUTe6vVqWU7hZXyY9uKJxJNJyHQvK9ftQhUiU2ks14dC5XRHaCUoDnyGXgFxc44qNBVaAXcjkLRyjViN",
  "key25": "2CEMi7uTos74cyKoy3z82m6nQ8x8bguMP6fk7bFTjkCKGjEAPhibh6RHSeE8xvd3PsRv3GePnuvnkesmti568nyw",
  "key26": "3XkjbT3764CPGm9eHTj3DBmQixa7aTEUnM3pcWBwMZvd9chAKPmYXCqZ6ED6Xd7vNWYFfpZytxetMcYFGPQYbkeD",
  "key27": "4ebdnxD5kVwmzxNqFAmf2b7Z8TqEZULso3RZyTCq6w1EYbmFQxYqsYSG5wrpBRf55wCJgDqzweKAouiJD7rTw9mg",
  "key28": "3kyVfYCCXuS33j28dYuAU6fFbYgdn18LpYEbBs1NES6HoWZtHUu9JFe8FRLGYap593azj3yVT1c6yJdWWKne4Emd",
  "key29": "4qGgF3kjujtyVPnScQFT8qoF1z4W57CevSjmVRq9SFVcrawWJAT3NnmhKRyJmDsrWeEZ4RdSZahHoPh76jSHSxFL",
  "key30": "3mx7CujtAWCr3VAEyRCd28w4ZcqoNAFny9yzNxsqp8KhffNTvba8ueVy3cUcZ3tAqWPpNdDqkDTuusuxhGgb1qNF",
  "key31": "hULy6TWFqc5fnkqbJHUrj8TjcpAP8NhwLk1xweN4KoMVTVtoGHLea3GH4JXbGeoeEKByuEjXvTd8TcFVaFynvUJ",
  "key32": "5Wd7G6sguuGi5Tr3jAj9EcB4zyVnizwdhq2dupnNeEKxa7mwEBfj8Eskh2BfsPkGNezKPBJsDwhVdSALFoQLVXiv",
  "key33": "58ppdDFJZ211M3TW5gEANwCZ8R58jjJjXMV25fnDNAMhz1zpxw2zAeYcdqugzyJpGndXEXAauBTzXwBaQeaZwPBh",
  "key34": "3BxTkovcjrgQxczcHDDabyqBe4iCbrEGb12Y9ZoW6MT1LwvNuX5kTNTz6KyphZosdEfgraUc9e2KPUB7867aBZek"
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
