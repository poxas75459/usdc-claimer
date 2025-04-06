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
    "2oHQQtR2bveNCAbyU6XGftY7ZMqa9tjtabo8XQyFZW3nZ4aX532Ua1iLf2Vc5qmffe5uQyT8dmT8GxmRxR2niqeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dbtCAUwZdCWkhdBPBsqbGnnc9nBpafiVB466wwopLaSe13DxYrnQJdx6BRYbHks2pkbqqGRB8zX5YUGEFm8hYBC",
  "key1": "5snemYUuqdoJJHKV5W7PzTwDx9J34aFraVKyr1D8kQ3UgrnHs9eNZqnMpSRv9ixqS7j7tt4wDza2p4X5mnakyQnZ",
  "key2": "41pCedhzHHp61MCZ29wtVbmErY3KPa3r2fLEfcaSf6vwgnJKjQFK6fV984CDeVGSdCB8h7Thw1M3DLPT5sy3qtRn",
  "key3": "2ErhfNJdbMoVh6hpobqRdeDh2KrxEc4rK7N1jTpK5RhxmMQDwYyeYwxxfqtfV8LbccNzVZYZiadztoZQq4n8e2Yr",
  "key4": "4uNUo3ebzLe94SL47adZDYSfKdhGxXrXpGKUJaWfCBoAVWAA3PTM7J3LMq4CYdikFWkf72nqNukFuriy2EcUxD92",
  "key5": "vFLzqWYpTC5AMYNnZHWdoL69ijGmxfCetZjkyDZo7EZThgC1WCtemd4v6o4HVMUZKQUUh9otD9dfKFFPrLHQmcm",
  "key6": "2cvu6XLsMWrT2LwAY78bCS3yrzm4w9kvaDB69EkCp8qjbA4F62MxAtqzbG2cv5wU9NFNex6LxD31y4g8fHD9wf6w",
  "key7": "66x8TFzp8UvasvSKsUpBNG543MsnNJ9Q9rJvpj4E9C3vMCD76vMFpDbGo5xjSXDjjK4aAmVZwREW5gYmYtS2b8u3",
  "key8": "2631PqYgBUYw47qXyp79qAuzNcaXno7XkkG4fSKnhpyMZRxtTXd9Trxb65DmXUwzKP4yZyMCYfrUnszzgc2coaiA",
  "key9": "4S6iQVDVpUuHEeVGZ8zcKZrnmNjeWycm7uxRU1Lp6pJAzxR2HPo8pLzZBw1mwQ8xidCzBNZf33E3X5T5KiWt1f1a",
  "key10": "4pLzcSnoqrXFhh1cArAC5xx1gnDXAvo1Fh9Ry3uSJNurGv7ZoEPdNJ8iHoFM64n17Zej23ypYZptVuudv4GhQzGu",
  "key11": "2CYuMxpxLCy24syaT72Ek6sZcxx6Fb9RYUHH1HoiwPtqtWx6w6fVFMM4kURFmP3M2nbn7wympVyrSTkFxBoP4u9q",
  "key12": "2mFSwuqCPTnT2kv4WCCiFzxDG2g7FfXa7RsqrzmuW6xwP9HEdBtyVnEUeARAkC3aCKFt83hxZykARXBMPgsNz1AX",
  "key13": "NmkX7D3JrdN8iG4R8Ct5XcuQG6RoAErzyY1oUwZTftkUuDsaSjggk5FtGCUBtC6mHHTrdyPYct2y6mZjwaQop1x",
  "key14": "4BCgufEKnwyprnSJmBy9z2KQRaQJwgiTArbv2XHyXiCCCKZTwMqbrUkUvJKsnyEYRwHNcrYbpDRNBDmbrN4gXtRw",
  "key15": "2SCPRRxLvzrbzxA1mAx7fkWWUhoBX2GMc1wH8w6aW97CMQuea6dciu6MKDEo42yHWbVyNPPiQ1osMrsgJxwqXgYh",
  "key16": "2xEJNFULXxeXZsvVQAnJhH9DLG8hR7fK3RsUxnU9jxd1VbHApCqFzbHZQLUWycyksnyMoUq69gB4Rj95VnkjrcNV",
  "key17": "4bEsPW6yzz9waoPwjReepUUxjg6LAWhECr2ddTo3zPeA1FEL4ZLawS6VP39hNvVbja71tbb4mnxKK5p56Jv7tifs",
  "key18": "3tF1JCgmAGoPMVyFhv9fhYHPU2h5utH2i8JCzFVuURdiyikPp2sgY6kL1MBX8sTFpo9NxzQWcFykigt9sDdmoBzs",
  "key19": "PR9bWp5qeKjgsFKEjMV98WWNU7L1eZn3ZZqSvdYKhVx9GkdE4rbSh55YgHpR5P78p86iVV7dt7W9SfqPzg71owt",
  "key20": "29FXVc7rbctrw8szuJGnLgmCZUwKQwo1T7z64r4Aj5tgj7hMMAPwV55RTF3qdPyT82V6rbXDgABXwV5RaezViAFq",
  "key21": "55EoGyn8BbejnmaMcD2sHYFszfwxssJ6genm8MkXNGndCVjEKY9gZfkLfGvoBjK9MytNWdmhDQyu1fYovhrfB24b",
  "key22": "5awF8BwP69NTVHH9q9u7xxjjy6JitFReHhTsHbUGfeqFyCLJwa2hQY9xT5Z7JsDuaz18TpQk29KvuU7q3QnTgQcv",
  "key23": "4NqPqPrR7trpymvfJdCksQAs22BPkuoZ5CrxHCZEh536o53wFeUGb28Vci9qEc4XQwyTwQ2pDiE1FaMRCEGSe8qt",
  "key24": "269EDaY8ay7BkJ6PvCTYWgVUpq6V8oe5wjzmiuz3UdD5UQmbho8q2UR4DWXpZmFzChnyd3RtPyDyneKfYhydJnjy",
  "key25": "445gHKhTrzPgbz1t6AZtvEExwT6cstYypj7BreoYsUPWJydvPVULYRjWRaiFfxCWmzuh565gR5xJMsz92ubToswo",
  "key26": "5AZkWRk4KMtH3mwAiG4qKLi1dqP1fFXHbJCZ5hQoyv4rjWFtd7zKA3Ktz46Jy727Mds6poQHaeVXaZzoWAfYW8zv",
  "key27": "dU86A9H2Cw4gq8RTgdUfbxhJct6n6Gzw1KccVhi2oxrswL1KVoEhJyRLURPW6Fa8VQpvAiA8GqDpZCDkGP74SHS",
  "key28": "ndkZyAXCWbsrGfSrJgUY6MxR4AQJVpKZAso35S1WgosYthHii6Hze4QCVetJd3y7t3LXS9h3Q4JZbe9EQSoZfvM",
  "key29": "Uy4j8ouzkcHAFxWTPEC8HusnoWuPVYDbA3AMuCB5aRaovEeoLbcnrZseQwFx51X4qwJ2Q4r5PZWBrwBJ38URsFX",
  "key30": "4FtmYTxt1QQEeybLh2sUt5XFJkwtDpRs77EQdkKMnUDUSGhxgQF61QUrPMq7LoKFYhGwZSxPekGqkFrnKco1Lrky",
  "key31": "3SCVy16ArrS6jPaDZ9sqVd7RtHnD88EW4TDevtSmMfwt9zUEdPfPusqop7rTAneFdEAdp9qZ2qBvCsbmLcrARCuF"
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
