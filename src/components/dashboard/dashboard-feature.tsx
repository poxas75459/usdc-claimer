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
    "4yQzvuYLf2WQrnhaFF9Q6fyzJc5GuGxVSoedGQmxvqeXUHF7zmoqWN1A5KtZRvNHswz11xMCh9FJCW3AbjKubnaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Lks8WLfRBVTRPHk3PsQ35UKnuKuDnCDe1q8jdV8gtMtaMAYa86WewXVY541BwRqvRUkgFoHkww7sANKKXKuFdQ",
  "key1": "4K1EBUH2s7sRzxNLwgtSpkQw85UcTDAWyQfw8BVkhQyA8z2cvGyF41mhnWRwPNwZhjJh1EnpHAK19S9igpqpbMfc",
  "key2": "2HFyjnEmmjEmhEcJnx4cbSiBrHM8daTkXEFu5s5ECQt2o1ymGRJJJ1XFruE1ootZwWf35Y9aUnKwBtTrpEdsPdWA",
  "key3": "U6n8PnjsyjT9pcopUoGwq4v6mgyhXTUuRK3zKomYJ6guZpTpevAPibTAaHNGztEwzatM3y1aLKCrxgwe94VcrbB",
  "key4": "3K4oRbdWdc8RDWN78ZZ8XPPsmeqfuKVTwuWVGDQtvm3qetqrfyKqKrJwtYGHsRKRgQz1keXQSjhK2afCjYtVSeLb",
  "key5": "dcpYoMeeMqSiL4JeXK1uEhVwEZ4NEMNM4c2LWWAEJK2ZrxhCfQfXiivrVZG4WXEVs4KyYv87DVzW2toXV76rEit",
  "key6": "5K8gRt9XJGHFfYGah4UZngBY2ueSFvQnJRQ9w2zgt3Yymhe3hq1vES5rKxBQwWLfCp3k9YHkmY4tzRJDYZnX6MRq",
  "key7": "3kFLr7Ct6cg9gvN4Fhs67PeMwJ2MDfH5qkHRzFHvJa28kfHNENbPAGw5Gsgy7PJuDeoNFd6bbisrMknzwiJNrxhM",
  "key8": "sinJEGorZPE1FHSWLP9ngornpDNS41KJvCm3LiTpsPqcaAdw6RXRYVnzeJvSZipU6vc54ytFiX4eTMwm3tGgGW5",
  "key9": "5vRDuF2DBzNs26UEQ2yVsVibrYRjMR8LHT3K9N4YRyFT3DPNsLt3JX68GkJJ31CewDM9NzXLVJY7WJua5f7AvgWA",
  "key10": "2LY135A97gsJ7MZ7L7Wx6J4EMq3ahT5zdtnrfHHZ2sCnpWFVS7XdCVBNFkCPi4n35vxRVwFd6r5Dnz2FjDPcZ47k",
  "key11": "5BnYn7NVi5GhtgF1nywcKRvZksvRWktaqAx3SmWcd2kqtNn7mRyctqECnEgQQ6tNsqvbVMr7emZ71TsKQnhP4hMU",
  "key12": "4bTucHUUrZcPFDBKycMiYpbL9qkbPYVFdcJhSZV9f3pFFmC3orTKWbLsyDvx1nNPNnBM4jY6CMwF6nK7e8igbA9G",
  "key13": "5xapowc8pLfLo4cYjPGXGeefzeSX5ncgdeUwq6ytHX1KvqhwgnJn2sHu1y56FGMPYvHepSYFFKxYfq18PHKXAMdV",
  "key14": "4j11oRvjneSbkvG2Rzx7de4dLuDvCzid2JmLCigMiX5SC4jRyURemQUzU9gnPUWWG8hVFCPh5zzdEgCHuAMhQfN6",
  "key15": "2RddNHRZVHoAybLW2v1hajzHHGHZR1X4xT61TPp1PgGnWwkW3CjWL8QniR8DkSH7wcSNLCi1khXbbviBACfZm94H",
  "key16": "3dkZcNBb5d9iFMyAe1Uk5Sn9j3T2Bdbrqs9x12z79dj7hGXVTKGf5ohCM3FNPyKWpQibK46tVR1RQVFwCkjPnd6M",
  "key17": "3ViWc62Hz6h1qiGkwLwQ79TeLf9N74DTEmUxgrzTLZ3xYRVghQL8C34JrsmG6txqMxUrhWoErGWWamfVEy8oMmcx",
  "key18": "2sgiidWAsGivwf3b48EP6iBsyXeycA4vzrvS6jHLW5xKamzr7wQ85CUUkrct6KzAidiqdX7vvp6BdtUDDhs6iJeV",
  "key19": "3QxJoUocWhXTXmmPcFU3wWLHVscyA22xe6z4tVuCFijqBRpPi6CFZbCnag6vkiZwiLdwyxR9uqRYJdDnM4HCfHkC",
  "key20": "5ukHWTvAgVpHaZ9EVH8QvzdreZTFd5kNu3HrBnjQosKQcQtKAU8wMEcNbJyFBap7UGMo7utJvBpfM7qL37MY6Ymx",
  "key21": "35j3jcboCm8aX7c6UoHdhy6ZWsJeWqhy8jrVnDuxy6ohMxqiszoSwdJKufbb6Ah9mM6RpzR9wnqPXQyKFdqrgFec",
  "key22": "5zqjW3HTEW7yGcnzRtrQK67gW8iz5ResW71YfDFrmFEgg2rwtDbzgyVvk8EwcR4whwKtoPAnsSRkPUZiYKnim8et",
  "key23": "4y1D7Nozqgo9Gd8kY6U1FLJ3MSxuFMJcZGR5e7jmYb6T7W2jg1614Dxb9NJVrMWKJ1MYQ5d5wT6vBkQmGdtoEvT4",
  "key24": "4CwEpZ52Rp2pqHcxnwWJcBVgbKjbyupdy1qXVmYcdnmz9FQFE5kiS6DEhRuj7aAmz3tSq8FGCpNzusUHvjbMPYCc",
  "key25": "3EJM1EPjRoMMLHG9de2yRbdLqAgBhyKrtfEjzGGg2Mt6gaKhnQ7xxckSERmj59337KXuqKMNtNnX1aHp5GErG3T2",
  "key26": "3Yr45xQa8UUfEQixjmEGC8Ty5yMxFGVF4gakUV8C9AxnPbUhQkiTigpfeQtL7erT4TPRVF37njVUQ3GBjq5HFNKK",
  "key27": "5zsAR6PDy19APxGaptbXvdTk9uTmcNgQqkuL7jjaJpQ1Me6288955TK1Pxx8JpXUTDePGCMKHWEh1gLP2pSDLJva",
  "key28": "6SaxYx3ouhpU4CcT1Q4ZLqjQJ6LFkcHDD3pKgMexZnEz3v71ftouWJuadW7msVVUxQksyUZzZ4LRHWNAMKftamH",
  "key29": "5kaQRAQWsZHWE9oLwKwZqstcyF7iD17GWRBMvfLaDhB8ZyYXMBSDXqTRffRqvNeptNth1vy8pXTCYPbppMTnypR3"
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
