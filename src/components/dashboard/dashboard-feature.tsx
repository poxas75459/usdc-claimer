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
    "4woyV7o4E7QRYzcJAiEe2KQvcZazokiAi5Kx7DeD8iYYfR2xdmknutC6ef8giCrzxbsVtTUAZ9Vr11fa1D8zkTs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TE58VsWmKByAU1xjdp9rykRBgt1a2nc8hszS3AdzeGQDhzyxYmbH2ufBbLYgMu5NvuZVSYRqSUFW8ytfU6SHVNf",
  "key1": "5W5jR2qZDNBDmoNpecWmTEiYCRi25qAKqDC9Yho8anXDCwQ4S9kTNwdM5mnSTtDK9rSDYyh6PwQYpDfz12w5WW5N",
  "key2": "5sgwtngx7Mg2obv8XVQdCzWCNoNaANF9k6fcHKSi8D5odDUtVAHTHH4aDzmCd1eJrE4jbXwdgdukURaR9UoJKEwd",
  "key3": "cJiy4SrjJeDTRBQnZ4SkntzYw5TDUv6Hhgsrs7rjEsov4nfjcipDPMGuwVi34yt5DhqiYY9XW7eB9Q4NoRRrenE",
  "key4": "6516qfdbb4gFXmLrDy2VCQHvfnvTNrDcFwabWd9ZCF5oS1wFa6iJfa4rCJAiM6js1tteqck6CJ7G2pttt7Togipx",
  "key5": "4VMLF68Nt7tqLQzVnaqeGS4mosSMwrYzYEjjMXeX1K92tdmdpM7Pg2u8vvMhNatUUuMKtmmvnfyh8E87WPJGzAfx",
  "key6": "oRasDsNWc9ervw9d9nvTM38YhosAoy9LkVPXtPoZSrr7Gx5zGocoKtKiPuVuVZL2QxHfymPrec7kjR8jH6sPMG7",
  "key7": "4Kpb8U8ar15DNubD6wu92VwwpGAuMubBRQwd8Rs82bFVrB3NCZG24wM5gQzTzydCKnY8FJFAeZ4voirhwfszFUPn",
  "key8": "7SE5WwCSdiRe1nwhvkLPg9A3TBtP9bAAZpBcSSgss2iTLngN4Crywtbd3GUnHPfDkNxdwXvvafeLQeg6BAoNexN",
  "key9": "3gh9kFc2h3zVwwYoj3qJhUEuws4ozfsMuR1HGzxshCZzFxSeawMD8ZhH38WBRE9xNcNWM7b2mDE3j4PSrpBSrepk",
  "key10": "4XppEGmzqqYcdLEwxba7UPKwWdGvd5Xe2wZkrW1QhLptN5sdHh1hR7QxPVMcgBch591SFb6jjX8zWUSbW5dmABfu",
  "key11": "4wQ86mRFZeBbGdnYjB6ScDqTPsJYSBUCwf8f3EzyB1b1jFf13uvCpqFjH5PWtcuwySd4TZZFZiQis3xpqiWJwpse",
  "key12": "5X3VBYV57xj6BTL9CZrdLRESEbMn5QwiDpE3Wfu6H3SU28NLE6X8EPPmiW4HTtqH4vXoQew8GU2R5pos42RNS7st",
  "key13": "4AtJfuWkyUnmXRDSnoUVEfFzESVrRk5qEHDa2xHTqgZRFA8C2bfHUFyF7ZxzoqT9MxYhecUxY77u7CEgxFD5ofXX",
  "key14": "35EDvJC8svauaXdH5CA4dDviyg44xkvRVU45oYQCzghX39QU4eXgyUNqzgji9VnsTgUHRghUBZssoSuDus1foqeE",
  "key15": "3KiRPMm4mF6Rpsp9nUNSWReLEfznmWCVf9Afv5Cv6weKWELvSVhNQ9XU6cVMVNkcpoyUNHJ1GycpMbBvdaqhVga5",
  "key16": "4gtVC6wMx6jbqnpKqBVuwngUjiRv1YeAeouWs5vxtkENWc7S3FL9WaX7wSnhKuAvWuSqoxCtaFLo3Qsj7APyxo7Y",
  "key17": "DyVZ85vJKn9QrM2ySRQ9oGczjADHX8dsfhvZaBo77FVYeDQkcbubHkBHXWSFrToHG6FqXE7KdhRByKKdKBUsyxc",
  "key18": "K37zdp24v8CHA8xMcyMh7aP7J9zpo2DqMVwDAH6xiCd8SXoLMqZUH2YfEZoNaDuXDG7ewzYt9PFs8Xo9Lw3zr7c",
  "key19": "5kTib9bPcr9zTL46b7TfNEnLf9HrTWyrGXuNVaMdSgEHs9B2xs66pxxK7zyLFGLuZBFGBgA3x1A3vsLvvutiAtAJ",
  "key20": "2t9y88kHTyj2Q9atbYpxbqqkMVESDtBXB1eNz1iq9JrjXceuWNKcpcw3811u3TpRBHwDMBfwz9vBaMTXDaJ4PdDJ",
  "key21": "4xcouDAvMZogENmuvUsFXRfEafxEM7zf8zqBNUwErfUqAqAYhM15ywhjoiWz5Z8Sg5hG98hSnzmADtWrQcpvexm5",
  "key22": "BrUVenP3A5iy3LFgskchPaj2hJ1JVx4kqCgsEFtfZaPUKM4kjDH88t77Y4ySJsfDiJBSRsKAvCHA5QDxnMANuxM",
  "key23": "52gt5XLxGgA2kFgk5XgkDEwEddouvY7AA2iXHRM37mT8Wrzf9LuQnzY981XgXnFMcV7CTmqXtprmvwD5zHiDwpx7",
  "key24": "5bxNqFJ4bvR87u6NA5w1PB9bkqcMD4n7cnYDvHP9BFXR8deLJkt9KWwjq4YsDcneGbNbH1XJ48D5L91vx1pkZhN3",
  "key25": "5NRPmwNUCakMAPwq8dKu2vhN2jvKcQ2MuMx8KdLmK1USDN8ftiKiFEmeyVsH5HfkG5jPFMnkDHSn3jkE3SMyLsfr"
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
