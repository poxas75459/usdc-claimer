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
    "5BcGFXmdbm3617Xku2VCMJEsia6o52qyYbsNViwDiGQQP8fF2LN4ZPKo398jtc6HafCgzvSjAeobf8m8ud4edDtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ebf5xErCXtdbvyE53z8upLwYXkGYPxCGzKqUe8frH2sEkRbfA3XNZ7L2jBwpRfMKjnnsraR58Y4PbsKAfZwJsbR",
  "key1": "3VNk6VkQwZtryhf4vqeTmXsjey6Bvosp2y7WNtZ2UfhEsTPhV2jo5snAqwA4q2uCftkGdzABCe67ywivusYy2t2b",
  "key2": "VL2bAnqiBoPK6AWDWzFBZGNicqzzXn6SSXEiLS5ikNXmLZcaXZgL64SySvsEx2Mk9cwfiH2VoN2FMd7E7RtJvEK",
  "key3": "3m4jyAqrQXyhqpSMD5sPaNVSD3JxCbfxsxCDDJRoMRPujRsQ45LfyoUp3G9xwgsPgGLa8UGnLrbCy2sS3UvdRCzH",
  "key4": "4MojbJLJrydMyHDCw7jWYgigi5oz7QEL7B5JhLiP2jpi1YXQjjeQmjNwtzFFDy94by4S2cVh3XrpmYoTdvQufXTj",
  "key5": "5HeLV6SCoUzJgrrHUXHXEqgk5qTnydN7GeDjQXuSUyeCTh4xgDqbDtaveeeSpATrCJ6Z13YVTG1eDPkJCmzLhdY5",
  "key6": "4BE7KL45WSAQyBX7gK9AhAkXaKFTTe8UPxXWbd5fcUBowbF7Mr7uQr6xEJkWTdbQKuUZywpJeoJ9TXiA4kJxQEXr",
  "key7": "5HkBzAb6RnMcWZNx4qKUqr5fk3XCQ2KbKDEXrP9gzDYa5LmFjRByZ1YdksMbgFwLp7JWbAhjV5ecRwJ1fakr4eYu",
  "key8": "2qmkHPhypz6mwomjRYcPo8bje1KmG6zDpVjSyWtLhUrQCmqEhYiwWwxSpAU1gcFDxdvaZLsVmzr6zz3mr1vRrEHC",
  "key9": "4GBuJAFB3XkeBcPrSNCaGah4DEZdoWTQa3YRmzUuTJoqsq8Gf5pDpHppuarYoJWUHwh4CMaodW9exzG8QQjiC1dH",
  "key10": "2TH9AsnDrrh2ihS5ZoSzHqB4F55wqd1S99PFzgyExGsK3A5t5pSaeV3WJTXT3g1Z1iKYroFrAaZvuTpaYpmWTY9G",
  "key11": "27uSJocnjfLnjAc9wMY3SEZwPpGAHfsHVEtn2k9LuLY9DBz5aHj1PQhx2aBcMeatA2pNNnKn1C9EkbdcPtGTzLda",
  "key12": "3A3x4wM1vFPLXCk8rZKjGg1xnACbJYgajmq1XePQnaTSoWEEJA6chjZWNFKxz8bqRN8k3Fn9jfKhFVPDJvHFoPZq",
  "key13": "2XYq391E6VqRZ3bJauMnkH636zpw4sWtHvAAQM1X2yY3hxQVQM66AUG69Kon3Bw73ffw3twg6aXrWaMPd3V4Bb5s",
  "key14": "53DZAQCPAGzwAVHWhqvQ2nWrXUjqNVonM6cfdCWrDb97a6Tampgu8eQnKzqcsmXLzBV4FHCBZPMCPQYdftmb2c7u",
  "key15": "2btyFVKXFHZWoH51bB4qsbF37f8eZwKXoSXFL8Tt4UPETtVAkmGUX4rNcrA4KJqKibtkLKS4JKuvhkUVhW4QzGfi",
  "key16": "2LgHEC1Dz5UhEEL9p2JqCmftQ626EwikmUT9HHYZeJifz1PQjbmDjMcZYWg7QDoa9FieMu4jgmyDUCwYgCxiZmr3",
  "key17": "2VyA29GPLixqWc8oWFDKMkWNJycNyA4ADBvjcaQTKAy3e1J2z8SSbLLLEPAhzrW9VDh4tzMpuKsh26teUoufyDPy",
  "key18": "yVqNkP1cN4sLZ1r8JeiApvct6i3LEhRJzfad6pbw1uGAzVwZ8xu4TGPdV4XQidBJ3vR5DXzWd9MDnbdkdfjmtKq",
  "key19": "5jAGLGH8zny6iAjAap9tu1KnqLSMLTaVkgi6UgQqXUMq8oTtGSLutWPYq5qzM5KH1LQa4EdKhy2ZXFjVR7T8dY5c",
  "key20": "52iQdSroH89FgU4KtGj3S7X2qa7VJejZ8EncKdTomB7qTyoaxtbFRjMqdsi5NgXQnBRPBq2LQzL2TJ5xegWavcCS",
  "key21": "4K5fzrSjRMttbcGchva5ac54fA2WSsmJXE2Peqa1SRNtqnYFbPSjENnaFeYGLRNLU6QkKhW7SBfkdWv5R9bgdgrh",
  "key22": "4noqA7nz9AqQ18prBoAproCSSagTHqPYoE3GuGPERTM646qVFenQNhpvApEeZw7rxXQDY2z7511pbfQGBP1rk162",
  "key23": "3igr2K5GkQB4htpijdGvvKPDh8jrtLAnNBQUhHwAqzSHKmu8UBpoQSAjwBScVTEUXrovWQ1pxGPBK94Ca3WipGtB",
  "key24": "EA53d7nLiAvhTnjRgzM9edra8GCNB3DJxmehCxrWuqp9NzuA2mDsBdUb3LW1vBDZXg27bp7pJaCndAhnYzZdBYu",
  "key25": "3BB5qtVb2atTzn87cWBrzN4LyqikyPNybDmwADZ2zZN8bw4A3bavzo77ha2nD8jafzoMHrnMnDQobr81guevCZNY",
  "key26": "2AqgAjJf4fy7BFQSqKah6tP8hJduZAhRf15A8BxAdwcNnctArkk2QMsKDaSp5PTthM6boxJM8j5LQRADhimoBqTb",
  "key27": "4PzCA1qxWF62tWkM7eXo6RfYLNWMV6hNKnHXTvswXFUzFoKji2Fc2qoyEoechzyDRrWyT7kaDqH2bE3toCd5EcR8",
  "key28": "4i5CxSGGQkBe8X9FrLgdfJGMinnVmErwZjU49XDypKckeWEec65hZD6cHCkoVnQ7Vimn9dfrUkxCVxvaHZVC8ZVR",
  "key29": "51B6CjBNzdH5VegFmjk8AaswmxLQHfsVYf8ApRuQjfV65RPx7BT38PQCo2AN9JiXWA9uwhzget9r2XdPjTJZ6x4W",
  "key30": "4hpndL48ZdWan1qZRStUEBighB2vbXL3Cg3ADe7d4KNykN4zzR3bd1GdPHzzEvetPGUbD3dVTrsd6MiZkHrzJHEM",
  "key31": "4qrT1gz4XXsRAwdTQwFWazsWN8GKxAvaK4D4Qr4vFq7i6fGqd1KgKk5RfQ1kMrHMmM64EBoxsEg4D3xScVNFVrYQ",
  "key32": "AmWFUMcoFeJTCV787s4uD6snSyPkBuoicbUtjZ9rBw1w9kG5uaE9yuHZ1CLiyAvBgKhAsb84hnHkvqGjkGFewDR",
  "key33": "jXZDFNDDuihWVTwoxBZ9rNVixgpyRfBaMJtyF9u8FxVYod5TYAqeq6Gv6QfR9EewwckrMqfwskezNJTduFJgXiM",
  "key34": "2Xycv7VCo41zTuZkJ2R9whJvkTHWisdyWrZ1nqnfqE3jVyUqWqR2SB6Zd4mVfTC3CShsadJAu2fdmA8bGHnRjnXB",
  "key35": "34bHgqKqWezdbVQqRgsKAwUCtq2Xaw6VoTo78ubqCSU6BfnQ48vf515JZatcdMFThVeWHgW2Rdjkd1q8W9snnFdK",
  "key36": "1dZutD7dsrrgMN21PKyUrcsTNLMZTKVxHma2xjKbjCybqGtaufp6RmowmzTtNmRtm3YAoZwNfgv68StptXzT9m3",
  "key37": "2mcii6fXgBzenrugPy17ucCnP9mQBufrbcVepjz9XjLqqCLgXCP3F9P6qWHnffbsYASDym4bGsiY93bQSeitweEo",
  "key38": "vaiZJYNCbhgSfVxifG5Mf27MXNKvVxzHuQAMKQVcnVV14w48amwLwQu5b5tACi47ubDoSPnxnjVNwudwssPZ1c3"
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
