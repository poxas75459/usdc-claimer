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
    "2kv36Ha9oK65Ka8f9WD6xty7YiMDcuAHYbVotNoWXMK61Z3EUexH4qahpjn5sTPCiuDx8PHJn6PmaM2MLonAxjW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMcJno1U5k2demc2LbiwDeqoRTdz3QaefsNGEugQxYTfZ4uCCcBpE7zqnNB9Zibcbksi6rii2X1TxzmwXJbc3sP",
  "key1": "3gxqDibT4bX1Hbu4PcSUkffVx34uDXry6nwoEaMyFZtrHgZTv8tYnvL21c1cFJCVX3fZbZsjHb8YvfLREvCmoPuA",
  "key2": "4fkjECUnZ35SbaxEvgiqEux1GdCg2Q9WtD2MqoP1jtyHkgRDbXW4oMsx8fVyfXDYPUnZoEtMytCC7QkWTwejmnW9",
  "key3": "4KbqtPYRkv13gwzRpcYeunMcPBaLPE7K4KRWYxmR9ChngoqzSpHh4XMvsALRRqYvVihMXgu5wFSRExaHk3Y9mgsg",
  "key4": "4YfNhftU9UN7R8Gsoo9sF7tNBrVa2F9ptJJpHLYyb3VjivY9RkFQfq8PpKuAep83m9A5nx78QY11GvqhkbBg4s7Q",
  "key5": "4S61Tfuqxa3xZWCZUHcpzZoJ2k6tU1ontZ3enKY7DVnZQznGwLukkYXCJJxn3tatkHhjk6UqWfW9KSgHufRamjK9",
  "key6": "2RjvyT9sFuzSXeP3xmXELhP76r3QMQPYiCyjTMBzH85MMJ8drRKTvbSq3CC5MogoWELjstgVnP1ucDv5wL5gemKZ",
  "key7": "2KQS3P736HUd1qYbChVdW7HjtdzPz5kDdRvtAbFuFZnMAvYMoakptcAhtNmuDycGwfhEhUEY2FD9P85zGV2z4zNw",
  "key8": "5N22KFneoHWsRTagpxsLrfpB9t5w1NpaTfu5Z9b8jjNcZDwhLJKBy4ZBP3mqSp2koEZSzFFAsH9Sjfp3DaxwiEcD",
  "key9": "4xkMBBKejAXEgefUPrW74zgry8b1hBBaUf2EAaBpyzKW9PmqcraLYchNfUHYQoaLHfh9xDG34D9TgvAcS1DCw2Z5",
  "key10": "hC29UaGSsVBCWg5rTmvUzYubTBxC12xZCqtmdXoECE417E6CscMFeFmiGoBXMxqr5zAWZypagAgFgrZCTZbGnAD",
  "key11": "5s89RsfKAZw4fa8hxnh1K4jWrXqw1mVx144grk7YbuC7H9ZuHtNuSpUG1jGSG8tcmKug1Q8mFqaXWvU9vGvXYkWF",
  "key12": "hCue8FtNj8Tikj6UnjBVFwh9AFVvbyCLwrWvTLJn9sisfLDg4cCc4xuZfm3YYLpSvq8WEAQ7m348XogQv9tKobh",
  "key13": "5xiwGNQdhpFRnFrjd7xF2Me1AVT76Fk7q8Ny7q8cuo19USnKBErgBG3qCLkiLQ1n5NQVpnsPukQsf6kpovNqoxaa",
  "key14": "5XLEqmTnLgSSeHKc6EGpn92xFDrd5gGcEU5b5vEVVTKgELEWunWEQ8jK6HCnqLGeWQyRHGUqjL1fCNQqQBsSd9Zz",
  "key15": "5wov1GyNUMGv8dcEfNHFsLoJHMdziZWaZdQ957XcMA4neVQ3qFsarGgfExtPCB584c2nEfpjKmY4DsF22YHyBYoy",
  "key16": "4KBzKXovFoBoUnFH3qyZMMVmaQ56SGCQcgkfPR6gjNa9jPYsDNSM6seFiWMeLq5PVyvnwdrekpAPw8rxhBtYbPkg",
  "key17": "5CPFWk41uuc9M89odSMHGdXN4pBUBR4GEgcghGuPZ1PP4dNoUdiSeAADsYCPG4VPnPhYDTjmYLg6bywdBXYkPEQ2",
  "key18": "5KJgyopoGp34EXkhomtqo1so56F4JySsnqzGGhMw2kYxQ59HKP15SF1ScSVpREz82EnxK1oQHaKvESUAryJSUBRQ",
  "key19": "3QEN97Fij9Eu7AK9iy7Hdfw2GUdXjKmzpVKruKum3syR2D8Vtzr179rJarTpGoRFuFbkby2pbNLaM6ggDGxYg3pT",
  "key20": "4qBsuHKdrCwZACQMarjEiyFzD8QjzgZtrutm5RdHPycwM6wFbE3F231AKGZTVbrpCLP3nG5dSbeZ4LwY7ZtXDjjF",
  "key21": "4vae1KMh3RZ4hdC3Qai6AbY2D8MHnzxrb4KBnox73vd6ZvnKngANDCjwaL4qmSEkkseRRqu7Gxfhp9enJ21h68o",
  "key22": "4bBQFWDnMPq1GoqvF4bA6DQ4iuWDZHMzZVSgcCi8a26rNKqAVinZ85zpAkfx67vx6YfpV16CRcX6cKgyKraWEYi2",
  "key23": "5SFqATGfgmfLV1CnsEkdkWs5Wrqv8zNDdVJnucBg9tP3NWDUHxvQswm155yt5Mk7XCqRXW6fgH577FLb1T86246W",
  "key24": "2PdqC6wpDWemcaKH8Su7gN6bva26dZdVPcZBwnqQJF4tNyF2GdQHXtkfM4W2nVHBRRXLLJx4ookVsFs5vCU9321u",
  "key25": "TeDcNZyzFEsjZKA5WUeNhGLneEiEaHcvRcKdwFmh9bHVyp9pns3kkjJeQiz8vrXEPKhfQHkKKW6Vgy3P8MRbPFs",
  "key26": "2cmSiM9nvyHRNQY8rAa7QzYwV9ntZWTiSu1m3rG5u2SAw9hz73qNCDgLJ3HNvSLhsyCDCoEUZatGr4ywyAUtBeew",
  "key27": "2HWU2DM2mw7bnHFRi4dyMvgTbBqSs2oXJe3NBocnsEbTZw22kK75ZbBYBFqhtykBMsBzF1LupDVAaQ2taJd2xiUE",
  "key28": "6YL4z6D83g1WNEuyq9ZsYS8546piYSgaJHYVmsjHCjtmoyoUqNj3igvsAFwt6aqHP8LqbyHSqzQHE7ftixqvEFU",
  "key29": "Pn5fxWwp4VEXo7QuWzGz5EZoX9kgiQztwmRZ14wCRzyiYG6DX4EyWcdEeu5MikuZcUYgKWpaxBYar6iN22uR9LA",
  "key30": "2exhbhjhx3QqCzUB2yVnJ2WS7vYrTLhM4Eha27stpUUC48ZBJ2SwntmekdrwwreNV2AfJNBKAMaKMZLUmqqJBFFJ",
  "key31": "2gb4CGU9KeQezwQRSRz8fpAzAZ5aRx44WBwKWfPHKG9vwU287gqQRWjsX5PxQBfMGVF8x2mC75wTowYVNJ835nNW"
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
