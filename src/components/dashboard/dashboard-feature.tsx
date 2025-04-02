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
    "3Fm2j48q8sAYqtwCkchwNo4891KV9xTr3JgFykwH7ppNDwMiK9icYqtnCFkQukiuugRQPNvLD3mDpZDwzxnpmW4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLSAzEpB5oPBpV7DsNi2Cb95S7iEZgRA9pp8U2XBESmyRKn3JYsucpip6qyPxjGizNWbmudbUPRDh7bKimhNRnj",
  "key1": "3RvWzgacBSzR9YhbL85W9NQ8xP53ZnaneqwbgXRjzTztUpALedXJcUQi6dG51ML72Z9mtgWQ6Try4WfFWscs7Ek3",
  "key2": "HYJQYV465Xi2jH3hS3s7pVfanRFxhbKpEFF9Mgyuimg8R1oMRfccsdXmLDKwz4JJsbtBP1nAANTCDiSLMs8Xp3a",
  "key3": "2Ej314v3cTeKWQEUw7jxYLuoo2PyCfJvdKY82UF8xXtsVrivr7wGPXREJE3DnNbgJy9Hr4MDyMWuJn3QfswVsLRE",
  "key4": "2hMpiTTPjJmiApJ6HJzVwYaDUrwHb8pWiTDa3hG596ECCTKTYiggyf8QZuSUKj7LqxNCkcFywFxtcSkqUvBG4jFk",
  "key5": "4T3aSuy2aawT6NwBcqeTswpdhSPYToYT15RVNidhDuoUCAKe5UorXuGiUuhZ4xinYi7MMhsfdxgspn46NNjYR9wN",
  "key6": "2cU7DY8CEYHVFBZaLksiiBwCWmMygKqGA6veVaQwBye3yMbB5udp9SfFKCb4aZG5QVDyqQgRyoCRvwjECZJfGvY9",
  "key7": "3J5NmLNKquEdSqwGF71RrUSWuZPTjHdGU6ZbhZBphixkvqPzo59P9L51irT5perf6Ccp48bPfuopsrwxfzW6zgqG",
  "key8": "5QHefJbX5uSzGRRy7qkrhy51i5xHM5DCdTgGeHDtscW2vF8JJL4hdWMiwhcLzXANkdRQsnXYLqzmPTYvVSV2rcx2",
  "key9": "4CZbmXZRVj34tHvyP1x4pUhg433oCNs7WNXPyxh1nkfZkYGSviXn7qnUjP3D7NjgKEpChdSz4aYbpBDQfx3Yn3La",
  "key10": "4ppfsH34cS9fwo6EzFjJz77vYfGRSPBUor1qaa7E8oV2cgjH69ZdXrHf1xeLZFmAJ4J5ibaQfPNUJPrHSpqvqhgP",
  "key11": "3j7uNDTjhLTAzMQvpprpehYLTUESoEvXfjFowX4ZEvE4hPPV9rYVyuJFWwG9uTpPX9Y76qEC7iGHseojq6cKfquP",
  "key12": "XFHU2ZxeLudX5mt5ReBuQmy476R5waGvcJc1K7hBHJSn1r81iJTZzhNkvwpdAAVz7zHepu7kSTciWpRmcguybJn",
  "key13": "2pRzWACgSoZBYP21LrpiDp8BFvAjFp91CbMCUBTSqCaLsAPDSbZRwUMGsi7AGkoRaHEHQV1d61AwPppdiCF7Tru6",
  "key14": "59X8SDQgK14EwgiEPZGos86MY1Dkw9T56Zz76gLdaGn3k28a2cACVFnBb9YZcCYPPNhy7DWPLmYiFGQKyvkngDjs",
  "key15": "57PeccTBAL47Rsh8fTpdk4jfULSAhv2h95QLwXCSY7nLEXBsf2TFpBA2FnqfirZXb1dnJaTiSnG53soFXwMmUwxu",
  "key16": "3SHEu1feLNZxxmMvcupNucFU5kupiVQRgmvdhdahesCJjep7siwayxxakKWc7k6YEpfF6ibrB3uhXeV5Lc4WGEa4",
  "key17": "3rgCLhp2HF2tRXBFkvjr3xeNdH6wrFjbqyLVmgZMmfQe58tMUZizk7kSSXXhQ2Qmf5VhyawpBnF6oDp14NtFQCae",
  "key18": "2S5aKpnNqP1UfLRgjP9tpwZtsgKDjS6zqj4K56UkSvtrcBikApwmxKeHaVD6LL2w9uXttjh5JzMJVYGAhPHEmzjA",
  "key19": "5TGnTorSXEFouZJqNoUNNj6qDTR9Vc9WMtPSbydRorxvU6TRyss81ZzzdCn4zRHNBhYYu3zxVkvTcsSS1jqmMeFv",
  "key20": "5H15hQj33wwwJgQ2C9dEiYdDGZHZNeE7TAVnv8moLasRuvq8JpkpfjKwxkHVLRjofWGivgygTUjd6SkvesPaCjvr",
  "key21": "YFxcR3foDTB4LcCJS2W16KMv8vDZHjWXkikfogYL8Z2NQsgyDqbMZiA6hNuKqFjYCqAPTmSQmEJLAQsZwybX5Yj",
  "key22": "4VVEjhybzL6KGKgFapRXiz4Q6V4Znbgsn4vkvroNZdfzeSYRctNLGwA8HxdAaZ72gam1AYqAM1CEtEUVd6ZCUp7e",
  "key23": "26UShUWgPzfrYmz9gQABm3JvbxPyUksfJtyWkJUdcu2D3RMXTL2SxWhtbNZAGaR1aXFCyWA8qR2qZ9khP3r8r1kz",
  "key24": "5BMTNZVay92pjXsXN5s9QLSeGCvyvh18rmRrGS5LDP1mLwBsLZyzWtGTQDcbRb3MKFrZWtdRvHLeVPYNZBPoQd6B",
  "key25": "4HjbaLzJUMwvA6393g767adrcYF53WwhTQKWRR8WdMPqZZvj43sQgFLorfaCDhYW6jXCrWmdPwMdbqKtktfjvYXh",
  "key26": "3B1qy4Vtkwo4yQbsXzuY8WeLfa7RXAx9Z4inskJL9EW4358QdzkHoiiUGyxViNwqdyKGSUKXWMDmkAEbKGtCKR7U",
  "key27": "3jdjmMppBJhgesvVztSfmfpcieaHxxNjCbA7oq21EjR1s5As3g3XnEmUybWBKu74QPPxCyMzmKZvoeT6MnQMHPTK",
  "key28": "4KMm8ga32pi21EzXLHgToKjgFBh8fnWCZFeYyPb8xZXPxo7GzdL7kMfjeKsWeE7hfvtTB4oqg3CzepwBEXPPb5Ej",
  "key29": "4hLzRTzRFy3Uk9ShZYrX8cGuSausubbC1fRjWE9X9jK3qjJPMLZBf2yYXufF9JAFy1G5jDi7NATqSZMo11eptd4a",
  "key30": "5XgKCCJLkpw3fPERd2AGDAemXnNtAE3qS1MsdoNkdJ1naUNsZu8qiaFScjqKN6dpDMiixRY11qsU6K6NgdbQ3Tdb",
  "key31": "5dhUXkiJJHiPXXmUVkGvRZ32vvVicHBYhMZneb79kjEvA2vvnbaoPWoULHSzaitM693RiMi3JbCjJzf9GYms2GJn"
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
