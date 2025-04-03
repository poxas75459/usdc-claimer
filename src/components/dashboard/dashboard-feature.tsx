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
    "5CoADUCUFd346exnsSQVnZ3szmcJqfX8ikmiacFdqdQtD8scqc9cXWGppi4tDSSMrnACT5cXcMJtrKQYsXmPNRyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CTzPRmoADZNimYxqmysLi8EwpgmrXNeyCz5xSopqZQ3Dr1G2nitZU2RjuxVJkrRegAswn9rddTC7cuz3LthBVff",
  "key1": "3TPQAP4ccks1kA4rQT2j3FJgEVDY7qfuBusCss4qiQ2DL7t9TZQiU7UFP1TQNWqYzs4q2UZ4fAJj3UEAmqPF1KvQ",
  "key2": "48y88UBXyG9aatfv3bW8yKDoUnmCaLgCpHP6uGSWZZAHGCDqEzmcTd2zJwmpggZLRBLwB3NCcij3CjkkLMqZyfHm",
  "key3": "2YoUA6dZnW9CGj8seZifSztKMiDDhpd9XZ6JYmg9y7tihJk6Y3VAHCEFdoFKLW8L1hSL3zopzfghwLjUktHp9asm",
  "key4": "3fRULBtnqxSthS5SrGPaSSuJmn3t9tH3vVU6rLUxKB45MwZB1Dxm9SnMwRfFwzRPZCTvCLdkbVrf5TyBMxpMAKvT",
  "key5": "4t8duFg1ccMDKVTRyn8ZXn9QMAynVdLJXcc2czJFA7j7pb1HhxbXjfXiSmUyaKDDeswqnb8fRSRWAHPZzyxa28Wk",
  "key6": "2oduNCtVNYuLpiPHoxEkRti7GyZgdQZ8FUNhi1ucnrj18nefAm4fNvvfFrorEChkg1NC9EPeizJw5x79koPhRVuo",
  "key7": "4LXcLtydPCkYqSi1MD9xxntasqYVqwp9pcCvTg9nVJfFVELngXSN6a1xLUwZMedSNFym6zAh6yxdsgbxqsPmPvDE",
  "key8": "36tj9KTELNBxeKoBGgz3bUswxi6mee9sh9Ar1ay6X7Qr8DLPWaGt833JjuFecLfzxdHvNostF4YiqduZsML4GfBR",
  "key9": "41kf4FfHXTQNjWBuojJbKyFHARwJRGR427MQeFtZde8GTCinr79AsnU3kg8jnpTRoL2hRmLw9wy8DFC6ZeeCnHLh",
  "key10": "3BFCfdJuXCXBziEzhTp8ESYBKPYBCvwaKe13KADS6Yj3Zgqq7kAvx1ypXWjAq5XRFYxPSwJEprtPvYBsbKZexPVS",
  "key11": "4DCUuVcnfGQc9SVcZxyKqq2wRLbiXPjjcF6C9BGkcigwMmLXxG95vrLxnsWnrLsPbpPXMJcg8VrZpxbNLMpezkr2",
  "key12": "4gsjgJm3QPoWvqsr3FHDe5qsJATWBpz3ZWGNDD1tsqkeB7fgWnknnppabboauNSQpB4rG4MjwPneJymPBKGbhK9H",
  "key13": "3zUVK4myWW7KaihwBJi8F7Jrw7h8dgiT6etaZ2MixCjL1WLpeHkatCtrWP8TvaDcQSPzw6tZocZsDeQuYBUTv9g8",
  "key14": "5kBvUkDDfYEkRpswvXcMCodJPRx67N8c8EV3Zc41MUSCQV6wc7m36vMmZ9poiQLxfSYA8HNBWKXYJzEx3GcHQxv5",
  "key15": "2ft2wcDBGZcmW6vjHuavJcq9Kiitw1FskzG6PaJkz2PUy3QD2s7xA8YrRt7jg34vN2d72RsScp4yhBAgHe98eiEr",
  "key16": "21DVf4EodEKgfiRkP6wjszZzak3VkBcwSSxKYvf36rPV1f22SUV6D6t3ixasD5VMqC84ZwKNtFZxCHBvMQapLXna",
  "key17": "bRmQG6cLbrkC9Zkoh7Tzroyq4sBHRbHXUbWGxp9fhetFF8s5i1UHmxL3VxBAr6vKvqiymmCudsaksyHifSgbGqZ",
  "key18": "2wDFieQMcCwJyuHDX7QC1sVNSWWNQxaTLo9WtEgqQsCgNYbJ9DAeS7HszLYjUFvuVcLEsCWbNBq3nt5TtLJ1VbNQ",
  "key19": "2QBkwMTotuJdNYaqn961EKVXWVvWoQbMnezoMQ8ZP48ihA6sP4HcNyT4qiAiqZffLKLBCL2TTfGLQS3gpgoPtTQP",
  "key20": "5eFAHWyjgosXkBiWDP8aUViKqFQmCpfVN5QcdP6dnXXqTHH8NEVMMZCbtAQfYEenR5Q3aAoeGahJj7HZajrFHfhK",
  "key21": "23crjThdDNCD95TasRYJDBqkJkLVSC7RVfyoqX3vqvmgcQPH5WznQTW8Nvn5ZexxJM2kjNiKr3vu11uQP29sUY4o",
  "key22": "WuUjjiqg17jXFMjpsanCR7FL5xTSdHP1gc73uXnt3u7nPMfH6Mnv6pzk9MB1QmeS9hP4rXbGAbsUP14kTxqZA8E",
  "key23": "3qwWDvPj53Lq8iqjXtnyHkn9V6HMRPKAJasbQe9h8wX8es5rdBu3YHd7ckShzv8GoFbawpRrge2iUZyU6PJCKzaQ",
  "key24": "4Xu9vhcGr3Cb7UeGNGVm2Tgdh2bDu7ZXgosp9wqtNHpM8MPgF3hDaxn38PiPcitxmtDpGFmzJmzFwDRpR9yddMoT",
  "key25": "YC9w6rFno8HJkMzj68e9mytBvgrDxtmSdxo3rB7ow1QftBjPnZc4uWibJVEuXHLNu9jnkPoCEugMVws58XDJPei",
  "key26": "5kc94W98Ck3hTWBfTeimijdfokr4hEXkF3f6Vx6LQx88Ptae97vPy4J9WVhwM8kiEWCjYWUuiQASobazhhWd1yL",
  "key27": "3WiopBHdyVoMP27LQDXUFCAP3nGN6PqHroGysRPuxKSAoU6JWgFVcjCiJ4H9TcTVoo2eNHP6tSPLmzeBMu57sdFT"
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
