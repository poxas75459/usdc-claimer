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
    "2Giuf9YLzF1Tzdu9gttV23EnjyxtsFLAz7wCrL6Ps2SxKxaLED8aFQb5NvwpsLpLzJ4eceuB9rZYYe84RbnGnfaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXdekMs3rtdijsXxjbqeYYwPz6gTbGFBDbdnS6pFFo5X3Fp6Scoi2Bep9p5Qw6LfYJfdpvUR5hVih7Mx2abQQUK",
  "key1": "2hFDkcF7DfYpiJdaAdu5wxqQu8xrHCZV8yA36ctXpffeaViohJKJNpgNme2NoSdd4ohn1CikTWfiRgf8md5L5QUt",
  "key2": "2zZj5KMrqDG8XoXuE3e9e7tzBsBJECih7TNiSufwhPr8b4pcw6CbU9r8EnyRe4CCJWuxrUM2WSHW6AvUbZFBgnid",
  "key3": "KXAymGcQJyUghTbTzMT7x7nZ1ik3hbZhSZ5ieNRz2DgMWKw42HaLpCW4HrAownP2tRQPnMabAoC7vuE74gCRyoQ",
  "key4": "44z44aEq1ngi4JUTHAEfJoCfxrHtZDmQtBYn6BNvz9XpVMBAPfEQLBqtXi4nsLU49q97R5juKocTkjHpKXEBfPP9",
  "key5": "4usMGPAb7eaKcdw4KXmk9Zt577Sj6rM9G37wb3ndqBFBgoJG1kdjiedEQmT621azwktqym7bkrWtL1ESpZMqkKYY",
  "key6": "3n5uVxMSZq16resHcyAHjyCNxy9TbMBuWxnc2fFaexAd3YfZd3tXqbV1XWoC7HY3q1FTWvsdfmSPror1vLm7vvrz",
  "key7": "4NBZ62nuyeebPU8EKDc1ZreEozxhxTe5JRA1C12JdrYrq9WpinqpQySqUSbWCQVpxCdTRKEfCZzRygvhhz14hRSX",
  "key8": "3yMTPrbHpCJ27Smm3q7oA2ctukXHB5fLT8f1tV2F1JMXQKZLZqJQp7y5nrXbxopLh3uP5JppU6VWaVR81HJtwmqs",
  "key9": "JQRZFeyhF3RAHVizUoeqqAo4c3d8cYTrFxveqGcRXj1h7nAzureG982P5uujWzHuG8jEyQpR6zkd9JNDA1nYkxo",
  "key10": "2vwh1Gaqjp9vhCMheEE8Gh1meM2LAuZbqCez59XQFHsPUKutfGorhe2zLr8C3aJTCKbPqVit1RbGwAQ5ApJhY1C5",
  "key11": "4kVP5QnKNGLDJhsZKMA749BeWTRZi88jgAGfGxpiFBnLeNrCsou6cghHXeiBnfkW4TFtTjsUJMH9rkVsJrSeGPFX",
  "key12": "4wwivW8zQCTb6K8Bm5bCYqykbK37APJUEqCnakJecBdSp2oyQdabUqV3KZybW2r4eEUqv2nH5UcbkLhstdEGVcLu",
  "key13": "sqjtH2c8QwBMrLxaXgb7f8EyJFwXsnw7FLxAQ3tTbkFkHfiF5xCzoEoMgESvtofsfDoVUmt8fwZ6nTLcK3att7j",
  "key14": "5UfKtWkPmvQjeu96HuitaRMTsWarEo8cPAEqsP4sWqBCwDM6G2Xh6fBkyA9DBx5HCUyt1Wx1TeCqtpYUvvq8swaD",
  "key15": "pHhmLtkHPsEZSncHjtc1c2ezauBth5uYcYhbqF1Rxa5xfQMXwWceR3ojeGER9DAMEhzDmKGJDjP6kuREMrX3aJj",
  "key16": "5jus9gAmmMuA7fqfwxEzCARHcQok9zC7A3WwdFofgr2gB2Z8pgwFLezwoD2YWkmnCaQQyPkqD8vBLWwiei7ZWZPF",
  "key17": "TqR2xULFSfZiYKRCgXZBYWHowfrpLRHGU349n3XJzRjQSS76Cwaf7bnmxhzYCvhngT7Uvts8SvT6vu89FWDoDmb",
  "key18": "3iNsjchM7NpwBhakzSM6KDeLMLyCKg5yAyxuF76VRG6Bx32deBFg3W72GE85b3mLXC9CBhcHPcJKYYHsjp2vg8UA",
  "key19": "4DV1epovVfoAShakQ2vdbdL3XSTvPiBAG9KGa5z4hHBkJDUFxRRRSuRuAPauLMtybFhJV1U5MdbjFQCKQXfrLykN",
  "key20": "APonJ7ZH73cDCGY9f2STeuH5N6ZMFgccaDG3pDvRqFsAKzmxxrBfX3BVCqSbkLS4pqtkNzvkDsy1ZjcA6VkK1Ss",
  "key21": "4FZpSVA7R3k44tj2wcfKBceUTJRSWdMLMm5sYsrUNBjvXEp1Pipa9NPvR8KwfaWRgxXLAmyGoUmugpQSp45Teh1R",
  "key22": "46xGvAhsE3gm8kFcZhV48ERxAE3EVvecHXy6hqkc8oDyAZeNUnXwHR6zNUqVuZjwh1c1UgppVuP4ZUNtUcovHpCa",
  "key23": "3HJrNSvK213YoqVrgwDMm9VPuucGAoBFNrgKeTwf4SE1ucxYrnQoJTFiTaFGxNeaK9rKi7wmuyPZEAWnu6B5Ad6B",
  "key24": "3CLEkgkZUj5DequWQRrqKReJAq3KJJ2PTMhqKizL6pRtQPQkhAsbdosWPTjFULd76B5gCsRCKC3rLn2Ve9UPYtey",
  "key25": "DzDNHLRWbnYJtNQ91cEkDePrHqzqLiUCmz9d8keN639um1eSG5HuKB8gZ4hdK4BzLcto1KVBSMPoZPiHMNtc7Uj"
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
