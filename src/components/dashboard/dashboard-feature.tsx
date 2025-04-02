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
    "s7cyU6wBMRN3au5ZUZRyKvWSwAEzTvm5CBAkHhrJ5A2xAKrYC8uhNp2wYjyxG1CDf4KyHQ3WvQWSKm9QFwfvMoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TWa8trS8jvpZ3KuCsGRxe7KrC9SSdT2q2EAcjKDDKqajxhmxBuy6dxNbGhZE6eUF49iFP5Q2Xhz7jVFmMJdG2bw",
  "key1": "4kPckTqrXXcKaFvFmrhbGhdAwUcsPfwd8YVYswgnuPHV1UKZL8Fm1GqSRXU1uFoSaPUJMXgsyzrRUKALC7BJ2Uv7",
  "key2": "2xthb5bt47UgjV13UAZVi5HvsVQBzBJKJcrx7V8chPj3aMSLC4C28NZ9fMUTUnYUQZpnyaitrYmagjyT42HjCZXe",
  "key3": "3yZyT6YhjoLNiZt3R4n9VWLneaUMScEyboneQnXzad2hF9ZywZTsziqnV3JN95xx4vjjtwXc2BzRH57UeRCWmXkb",
  "key4": "4rwD92Pk8RT8yJVZKHSbnqmFKUAGcNnvoeq7fLwcJwcSediY8r3NWPKRkutx1RPuvmU3cN64t2L9rMybXrYU8x17",
  "key5": "3HnrxKhDnX1HmeaqnRfNeMUGgDNDhPLUknv3cBxkVhsNycZXM4thukd2LbDteTD4vViY7Ed93tESkkPJa4vSyGtu",
  "key6": "5PRQJZXPQ9mze7dPkrKEb43TF8R94f7LqsPZXRX5EftVbLDXjAFzfYBJxKJ9JoGUfk6shp9NQ2x8sc1gatVphdQt",
  "key7": "54UimF2CJ1g4vpmZzn6awg64gA7HcJRbGVbPuZ76GfEFdLXEUYdhJVPsPefyjEQpzMcXmsisRrmHktUA2m6RnZJS",
  "key8": "4vQoASCKicn147JDgveXjoswDywpqY6akKYagoMZDkXHU6FmzV7CA1MUvAeV4k2rpt4tfSGg7cJBuAV6fDZHd3ux",
  "key9": "43w6FaUkGbwkU9q2PNVDfDSsx2ziSxDvk5H9czJz4Uoay5A5N6PjJffSkPqVhN3QX7hD3XMNyS6oN4NYnqsGVTLF",
  "key10": "4MszgGji6JPUMwdNNg35hvoACV7EGH7gRYVhKWFzpAo3drDrkFmcxGQrnzAEswTxtRc8x4i8BH8Etft2Jo1ZPEHc",
  "key11": "5giSKpVP9ssXH95rgFwp1DLMUhH9z2cYyDMo8z8qibxrSBNZhWTFsigLvXou9EvS2DyamoL4PPUQTUnbUmxwnAhj",
  "key12": "21AWCiguE4FXCEZ1QjbYBsATmB7o1HGbkEw1epf98N6pJHPNKRDMWHoGefPNSYFuRondsKqwULaTj6MuUksvwy8v",
  "key13": "7Bwk4NVbvNPZZKgteknd5jCqiXKHk5mBAx57moHeS2ej4zA7G54npiAD3TcPAC9RzniCMv5yW4R4BFRuWz2KhS9",
  "key14": "8NGrouS96J5tPGbDC4Su3cvTyyuxjgdtG9hzUjMh6WtM7vtNmv6qU2hUjytpsM5JpRyfzSkquvUr56YLCcUvumK",
  "key15": "67mkqNd6fymmtTMLTo62QuUanfTV89ak3ibYExBA9MAWu9x6cbie8BU882hDGmCK68szcZYSw8xh6g2SvBS1kJYS",
  "key16": "3JCfLavT6cNkiJKM6aD5ULVhEzy7uayP9fPsDkityBRsFEbrZCu9izd8dum7DoYnUP3Rn2BoQL5dfS69o8veUSZU",
  "key17": "4KMuKc3vT9E6zRXBsKCYgpSWRzt9oPz3zXLkjcy7J3rJzhX3nE92aQjeGyTRJHk8TdjdpJHjtJbdTTF6FTGn1hB9",
  "key18": "2xgmBZySNzEhMNdi4qwGRJSSwajgu7c8NiANd2vYm1tecCXCvDgW75SqCWSDap9j2Y8zLpg8G1G6kAwYXRm9VEUo",
  "key19": "p7Rx8TxRLGVfzypFVKLyyyUnzRm4wX3ZK4j4qdQQ3ukV2XuWt74vTxeBbBbwngjwRLbMzTHsapxXocNYCsM9S1J",
  "key20": "s49rNKjFdKXjhjV1eCb6rMPymXaEUE22pVyZdfYAwGdZ1mcbMJQVAWgo6yHDMir3QwcaB15PMP9THQCPvNMVyAT",
  "key21": "4Z216dM3E61NMD9YjRxodcgzA9jHw16r4REEN2NkgU6G9QVQ7JSmFSqoReT3YoVihznSRkmAf365PBPjoEAmdrjF",
  "key22": "4Sw2skwZFH94ZQmYMQoSESR47nJLizaBTAK7TaFCJi8iqydwbB8ANxTEmGyUq3VBmQd9FtahAumQSDGh7h2A8au4",
  "key23": "5enBxRJmy2J16msw3onqVCvT4q8qfpcJTwPckpppZWYxV6A77TbPNYjkLAG4ujGdM2LEM7tDLd4VqxsYeA4FSLnC",
  "key24": "3SxB1BPoR4NJHgpd3qoKiP9R1tgeVoQqpkUTuMTgX8Pwji5r8zViDUCwBUucXXJh8SXamezzcpSHNDddibYUyKjQ",
  "key25": "2dhATXs4C8hhHGZ25FUU4iSzAxwq7EBxSnB9d2W2jH4gooY9JvWrgsrk35PEFnCWjt4yKW3s8aC8yX8W32aEvynu",
  "key26": "3j6HGyBD3aT1DFvYBa5qc18D24UfYjiutTFFwwMCENWqfLxeLjWfAtf9RrdtMczjifUWXnR5DX6j7oqY4THpAEnB",
  "key27": "47wbdyWoCzXCgt1zNM84W34PLarH1BD7C36Le3tzf5VNgU7p3MkCNhsifUv6uPmZ4HmgnEhRjEqHGgPi5QshMZqt",
  "key28": "2LkEZAEjhFDyPXghjyM3whKWG9tYY5NzhYQZ75td1aaKEEN3cY6guo4QPVMC74hvTtF9RKerHx8Hje9uXQTt5b3e",
  "key29": "4N2oXvsjQMbhAx73Dz1LzPEiKhBjBGzgK8gEPF8vXcwWj3DZFF8r93ZHTDNtSFfopVgSkSbinZ96mh73mffWdaGg",
  "key30": "5mDt2T5yaehp3ZLJdKHFnEV3ZmNSJgMsVSYU482qNWnNw957qEtyg2XhxnUZP7TjwBVA5bDHMhWToadDpCcMt5Gb",
  "key31": "4gZX79qjBRQwNTWWHiC6zUY6UfYh4GGzcctxhhwjKUbWP5FS7ajNzbQPBeeyAjSXcZ1J1LxMTL7Nm98D1Yy7x2qr",
  "key32": "4CgJ9fcxm3XxCWAYvGK1xzsTKcUPvsCZnqMJcdE5iRxnC2zJ3DRFP8c6K9gC23KPfhUymkned1kh1433kFJq6bbX",
  "key33": "5v1ytZCJ7ax58LSEV44dFwWVFXC9HWCFyGVwNEwcF7m7bks3Q6oija2Yfm2isw4zMsxnTnGkwo2619pKf2etoGi2",
  "key34": "3W4cq8i5cwYm25pgrLBA5BFJDmrMJM4zEtyw6LAs2fMCSpKuPjgVNGbEGmk7GCfE17mNwDMztvTBvNq3Gvha24Zr",
  "key35": "quAd7fCRXm1rMPgPpYtadmhQ5WkiioYcmLnVA7sFj1jP4QHbqkwL7WCtT7jgpnzcgkGADpW88f3WCqFSaXa4kbS",
  "key36": "41cr79zux7ZfCHuEhZWTs6JEEVxq6mEKkkvUnQbRXYYfb8Zd2HRr8onvuSEnMsVzKieVNmvsouo7DQgVC9sftqUZ"
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
