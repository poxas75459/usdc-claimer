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
    "2is7kr3HD4Tuk8eQfQeurSwrxBDZFZdioeft7XCtwtJGtqv5wGAkEQRCpY7fiNp7rJ1yxSbxzmRLmcWaFvyh1XDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8JBZknEq8PLGmZodiEaYDQdth7MdRjPAFBsjc56V1wdiSFd9eVdaMCamsgbDd4Yck4NLNxRN6hbAMqMoVLJRVjw",
  "key1": "4fraf8xPSp4NDh7oP1cpcJxLNY9grhQfWBv6MjBaCQrdNR5j6F2Stu9Hifmzf99xEJnuHmWL3JWvueZk5N8x5oqx",
  "key2": "UkX6xKVZfbPBSK92RX9qYnhWN8aDqhGzHUtzFhbjWzPFJrEAx8uisonoRAPGm7u6r6jECv6oaZdaWrQEdyoFjo2",
  "key3": "QE3oDTEu1NUWNX9rLcVprMX2YKLukq7FeDq6GsuyszTxbRMHbocwr9uaLo9fZYSbB88SHGKHX9C36syVDseVjsy",
  "key4": "4ZWm9hYGGj33T4siMsdtkWtu1JAQa3B2pSZkmV5hPqud2xNky3cpTa9HhpxtkGMXXuoDNHBZjZ8HHdrni2Kqu7Zg",
  "key5": "51QXjVHUbTk3c4UwENttKHEy4jxh8geS28K3HfRr3hJagxkZt6psMsCuTCpPfAVps8iC9ybKPv88dACSjG5nseYV",
  "key6": "4XdTBnKf6MvxNo6zk2fpF4uxMiyMqkkscTs2AStLe9aFc929ekLgBcpwDdhL1aGtK8yof9i4qvKzrcoTKf1Htj33",
  "key7": "Z4gCqShYKADtfqeV9jrn2TYFdfUF7xxhiMwnUG3FBXLxYmJQ5NPDMnBQqvkbPD6ghtcq1r6s3QXMgJtKx2SyPqi",
  "key8": "3snq7Hi579nA2krnRSDahS1mU1rnb7BPaTbkTg5CG6npGqov9cD5EszSTMSqSHnJv9z9pyxobYPakk3Bsstu2h1c",
  "key9": "64TtqwVmXBWG8RNcsHTJRV2yYg5PP27ArdXpW3bHAXKmuGTLM52de1nfyLFP7Xo1n61emZZaHYfWAzX8wL7hqpbo",
  "key10": "o1kuRtiWmyMGcA6QhL5aJ6JhSVDGp7GaaUWyxJjynKppH2TbG8ZrL8jszm3hxiQYPbxUF1FTXMXSjxwA6pw7uvu",
  "key11": "KdLmhyrEYRMtTdHF6wBuXbXCRJyH8c37fj8ubCCqUJ4ZPZx7UykHNj4GJcS2iTBRETpz2P52kiR5up25aKhDZf2",
  "key12": "29yk3CTUPP4o8SZVJDQbhCMeSCpsZruBNmUdnsj1qP2kwf2Mg254RabFzoJruJBgrWGE33vyF8Ux3pPvZgxGFKZe",
  "key13": "Qnf7a5AHFo84uuAgVPdQn25yQwZLVrNehmHJzkr4mNp8pcRFdWigH1qCrCzkJftsTBitJwvediFS6TaYk5gF9TZ",
  "key14": "4nohzcbBxfMmivsZahDU48q89ArjVJinMMXAK9FkT2GyZ82HxVbaheiwx938v2CLVQVrfLWLJoK2tFuZ5bDqfZQa",
  "key15": "4XDBxJYpHNmZs3LnenZobF4uDS3GeyBvpVqwUjaZVK3CbjQcZoKoyaAL5HPXnpBC3PePVZLsr3MtWY7iEGDRDAeL",
  "key16": "5kshwHDdhXWiZEunwiAMK7f9VhyU1e1e5DpRDpr461zKnuRWu3dGqevo4Kx5sodmYJxJaU9DzufA96FVKCD8GnH2",
  "key17": "2bMdxgCKe78tMp3ig2s78DuTCqGCrnMkeTufVAWnsnsgzWxE5hHTkAVJvDhjTn4YFvnp83koMyrJ7aUd9YD14u31",
  "key18": "5UuXL9kcXTHsYHfCDc6ZNU23vciohDj4ZckzRuQfgvU7gUQDpmoiHxjiWuRd6g3oiXFqGioPJ8tEmrSWXHYJ3bSc",
  "key19": "2ujFszuTscp2v2fjavocajyPgdEeqhD9oJokVVMquheSSzaDxPzSj7oLBv45rNExcxwDxRW9ppK31V341FCXurzQ",
  "key20": "5RS8VJYiLjTAcPYsMPopfPe5r95S8Z6agGa8czmGKmmAJLviUPYEfFmnyXihMTvF13QCh7bDGPFRVSD62aYGJquY",
  "key21": "AQXDSKUvdmbM5t36VSr6B4wRrEFMk1jfLK6PTSb6BWezdnLhwEMAQr4MMMfhgoxqnmbtZ1JdNPHqW1EH7q52G1C",
  "key22": "4v6CoXV91Ps9KLoENVrLS9EjJzyqd3prmtLnwqmiQWgJbkyoKuBK5vhqkByWSfguQ4z2hUvtrEHBQLN6RKgB445x",
  "key23": "5Qq6yRH3V6roRNPWtBDmgh4c1tyzhxhCEhC1MvGaaes29iSQPzCarSvad87AdkXR98vP4JhpveMZj4Y1w6jSbncW",
  "key24": "31mcNnBLJhdseHmP3B8hWzLyeD5uPdCUptKytHW3DsmgyJCkBTtHpQZru3pJHzVAarFLEdKX7NtUpwUihV8Ze2EN",
  "key25": "4ax1oL9hFTvprcfTVEidRpD1ThH1brs51JanVgJwW1mEN7PvQPr4yeXXjujakPBuvu4CYUHcWywuKUuJDWucMEKe",
  "key26": "RWPpytVpzotVRxDKuxWZt4LU2jSshTFQEc5ezvdDruPZmGEeWowkzXJgCTL92ZwYkmRfGePP6Y9KkY5fgDam7kn",
  "key27": "3u6QsfkdMhCXCAK5JHJAy3T9eJJqgpoztsi7gFftxLis6o6iMyJzJkkPpQPVGQfsGLdvpHeeqred3fSthQ4obfzA",
  "key28": "3CfiZC13fHWdb4S7enfcYKhWgtkRAKzmw5U6KEsSHNnyyzoMWzAi6V6noCnXX7ixfjjKHSvb8dDT3uQM6hzNa7dJ"
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
