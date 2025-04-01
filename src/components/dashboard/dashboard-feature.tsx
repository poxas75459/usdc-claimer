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
    "4hbXsq3g8HLg8WZ3H18HzvsXa6n7r96Sfc4Ay6whPF6vYy3sR5uwfeMsnxZDawyXrEUSLfwW9jCAxbDux5jER5wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SzNHjT4aNCEhcx43b95PCGPnSHSGB3qKMjUcZWHEb1gnTMC4rHVKMEwzugpYcfbi1tZyHcP73uPxiWsS35uGdqQ",
  "key1": "A4NaRVsJiznDteu84vCCuPqgZZNLdmg2sshpHd3DD2asKDcqK4Tyq2KaSu2yVMzkMPvi7YUT6L4SeapPw6js3TP",
  "key2": "5Aq813giCDShHBUW8MQihJ55wDscsVbguTARciUCRvZyshMHUZoZK2MMyPPjbLueCzdQ4HmdqHfjWC5TtzmwicFa",
  "key3": "4EHNN9Muiop7hb4Aki9vHTuz7FzZxiKGfkzTj4HToQygM2wa2gtwjC4zQiJqEYxY7Xdyx2ryYvXiZCnhUpCih565",
  "key4": "4WbshbJGnFRt33cdWSY3wAsUQadBmqHzw2eCcnRMdWY4PTCQr2GF1ucDBB8c7xabffshg1UmQD8HSL8JBFpsCbji",
  "key5": "5tpEVysFHo3rjHntFEcGYvc4uh1K9KpQjB3fkU2gZtwUWP8gVvoxWuCytgd6YSbuuZSt3SHZssYUeg5GymiZNygp",
  "key6": "4n6qLGkGFGcBefN8GGi12t15j5qJLqC8yBDfvwJbGriTS9NZxP4RKFAHvhC2PknfQNanQKnU8H5beNfHLnxhL6ny",
  "key7": "5sYJGZgMJcMXfnnxoUTSTdMMVcHRUQkvHtL7KGeKWK52RCKvgSyXPEnSHXiqB1VdWJHmPHnzcD5dcmpHguoQ4wAU",
  "key8": "24KGXoudasg3gdyumwYgnCHN8nhm9tfss8ohKSr51ihGga8qR7gmV7VFh4rHhdzAncCfRmoZMZmpX1ox3S5Ehr2A",
  "key9": "4mhkZecfoZdymsfYekz6izQDtjhgZS4j9s6ZPYEBaV6TGKCtMtPYsh3BzYWr8nUpFgpa33cig731msJA55e9sQwq",
  "key10": "WuDwHpX1KA2WifjKzsV9nzPWSF3FZPuTnet3bsnc7DooMJSjxqvUSqEbiBDfZZYoWMcgeoQT9h2QCwEiBUdihkE",
  "key11": "3QyWwe4k8hujLF5R8iYMkHh2ui2kLwdTjerXTHfv3zfvonEVrwGxvgQ6LT7C97uuhW5ifLWDsPw3kqQFguygwFEc",
  "key12": "2UGoyyaBqR1pbWz57FHMcdSHrLU1y21N9eFs63Hy6zWn5qa1dcKqmTzADVhLnuavs5seqRets8oEYmDQpiFf7WEr",
  "key13": "4gT54dJpCB6iQBYhAuN5Zenyhg9NuKYQsBudkp2Z97fHkaNX1r4epij1ESpTVY3tptMZFXKin4hvYQLPP6GChr7T",
  "key14": "34H4Xo48H9sJkUABd2yRojFGyXosLB3PhBm5F424B4G6eZ3fmhCotmpS65JDB2MSVHpygK3oLC3Ze7Jr1cB4yKAV",
  "key15": "2HyJQKL5FtGYyoWgPjX98ZunRfJLUbWZobcwdqi6pDXfoGKQrEFJJ4nJQBZ86ojJDUUAXobMrqRdiWo7UVRdiKi8",
  "key16": "3M1LGSaSPMnn24f8aRoE5HZgtTdoqHFkTUSiDjRYWjwj4moV1scKHfDjwVjzLHL2BjxLPQNKfxXUxZ4XCbnKZw7A",
  "key17": "5nmBAiJKsSwuJ7HvmV7oG8zeZ6maNXsxyAawu83r7Aq7tEWxQXYXcxXzV8Gh8TASgAYemMKkPHTBqUm5PhMHVV4A",
  "key18": "4Nhd1Vn358ktcVKiUdbxPKkNQWRXiwtJRmw8qjSyKsy5SMBWXXrRMaPhdjcNFtYQ2EZc46N3WQuYMoEcjuxgiyH6",
  "key19": "5jaG9fiCz1qDgZLT69wZF6U1knZgkFAnBoyFgrUxXKK4mm34MTWAW3gLPvKgGMPawRtp1VEcYGJi41Fpwr42TX7D",
  "key20": "3dppsyvWnMtwt5ohQ9BNkbutmvBHyAv69baEUzYATnTGyk2cr9vB7u3anAWoDsPXfGfk32MsXrSrbtrf2BP8KBMu",
  "key21": "53bTMR3JCwYxye7VzsYpfXqrBedAM9aX4Wr5TxLRfmwomdzxY4p1571N3vaF64KnpCtDuMrfCQMiX9VgX5gtVosY",
  "key22": "3ECu8FPMyZrbHGi1iF3SXQePLqg8cE1qRfdm9a5HxqyB3JzQ1NpRND1y7kaqKdfE83E4LL3crzAocBeSZtQDHYv8",
  "key23": "4pgb4hnH4GCaoKyvv4bz6FWP3v9sQG71uhvkuUdYGeCLFyomijxEiCMAZ85TmMHQ4kFtAEwRcRQ4fa7oHgqD91eS",
  "key24": "26g8NfnJvdaGXNRsaJXWS8gVdVhSy6CcanKMiT34zdEqsDdk5MywasbSnvaQ5p78pk7rNkPwyJmnG6iqCWMQXe38",
  "key25": "41XhqqxeuXjxJL7UEm8re2wvTQcHTCqzszuHHrHofGpNEfZHqGRHKZBN2qwRSsZXqbXSXRKaJZeGP1dcQRSu6kjL",
  "key26": "3nE44fEeUBn3d4z7csnPZrpxd2W82dDVXs2X1yX27pbRqaTRksXkvkRyKBUZdrv3jWxaBLbA3Hi9j3UFVfEHnQHJ",
  "key27": "5uAqHFkyCauEFfoU8JNAVhbNUABBBX3uC7oFkQCmsZ5hJNMHrvkPCncWVPEHSjmPaC6qSpjJU61m1BVFrygMfkfp",
  "key28": "535ykcAw7PWLo118dcYvDGg5L3iBVGUcQrTRLwMsXEkA68jcQr9BBWjwHM4CYKi4TnrBqtnU6qWmx2QnNZUHSUeh",
  "key29": "4oi5CdZsJ6uYdtDtqjGeJRPS9rRSHYbtPiCbxQUXnmHDZBfLKjZ5ex1sLAnrmTfkydX9mVMJ2k1CCd5vL8PCXT6Q",
  "key30": "3B42iaMN39znzgSpumbw1aCk8xihDexfuybBKqy5h3wRfaWPDRgC2LdSbScsCN93PqhFCJ8S99q8HiFtx5XuzGvx",
  "key31": "VeC1V8Mmns4JiPBd75BCGDXwoqj64wZbS21gLNTi4cwUR2sqPSLuerKLA4pdi9sAQqhTnhCPRQoETTmVzoyq6Wb",
  "key32": "56yKYGNCgUYn89rNqELRJp1dRGMN6x1h75gJjXuptRjSTKbQeezDggvaxbC3dub4roX2Xf5tfVrbv8M3C9UxWaxN",
  "key33": "355Yshmo9VAqosVURF3246VHCswUuoRnkZP4ioWtmeb1DbR5Dztos3nGriMuFu3fAd7VW52ZxDrRdSqx5bXqQoQ4"
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
