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
    "56JQxaXjEFA9Hirm8oEQ3fajELPQjmBgZX9hvWusQBdWGk8nzJDKhD2ESve4ZQTx7oEHvVBeQNB9UH1AyFEqLdCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NUAxDXoj7B6GLnpGnMdgBmK1F3ejLW1PDMoKja41jFsKqtzcbG7bMGX6gHJfTNxk1v28Z62Zz4GCJwvw4UFfGn",
  "key1": "5HBXXCdcwVPHkvEHTZpQxCAKjjUniYPhob3hw93a2iDsyVjDnyPfBNsTw8zM288WycYvP2WZmop1PjJPnTUGF4zy",
  "key2": "G7vKsRJxygTkeeD668ooEcYx6bBYkMa9ohyZfqv66d64e7avQnenkNSra36RwLtuprjVrfkcWuttahu61BtYYuF",
  "key3": "oFJyhLDW22FB2u8hXKrhVzRMnAr57b5bQA7QK4AtsvvdWmqxERUsTimrbG5Ucz5jR5xjYCHD2JNg2bREKMABNDQ",
  "key4": "2jWeHTgVJ29GHr1Rf28os1tAURYsspnSJ2RLAwYJXrpVb8QiQFZTZSQJYvjLyynA5CWvNF7dGqPaZ48xPFPDDM3z",
  "key5": "3n4Rsw7FAqMZCDxAHQBSpgrBqkf321adcdxPN4wVpmaH6ei9QcyWatiMYi3F2You3eibnTQwnk6KgZSeojH8XmYQ",
  "key6": "5ssc76HoPsoTN3tMaf7ZXEVzcT17bbGKSWQJbehwKZjdEwYyNudhN7Yz2DpL12ZkW5kAxyNKnh8tNwEbjxyYHoLD",
  "key7": "3S8r2ZYqnmnrDVsrdAq94rYCKhJB9nEK9v3B8FH8Z2eBoLsBmeGxkH3PSP12ca6RpJ5WTgzBPb2WeDbXwh5wQCmS",
  "key8": "2fJj6qSKTtQBGUShQvWnT2YpCCDP4j7Rr6bPvUZ7QQv2hpqQSHUHtWHX1PvNNbutXReoyDxMF9wZZRS4nKVfARjX",
  "key9": "2hHhKNj3F6KWY3SQpFCXE2Tban9NtBQRASPzZbZD31wp9xxSbxV77hC2vtNBXSbJrQe4MUJq2e8XoFkJm9s5qeCU",
  "key10": "2eeH6sf5DpbhDXMinM51j1NZWWxCLna9tnzY6vyAZ7FkLH2nr7vupvh5ow2pdmZt8QsotGzXsmJbK6UprQhtntMy",
  "key11": "251vshVod77oGwKEU6Vw5d9ewaiBLbDZiYZAXZLJgUnYLd3btGMSokz14TB3owYRqxhmyhSNUCZJNii2QcC3u3iS",
  "key12": "8rMsqcCuc1MHmgW7iXfHpq93gVnR9qXQWBtsgRYLaZVLZxPScCeS1VFNuvUSpMeF3mvXqN1my8Ar7gL6qofQinQ",
  "key13": "ZSpGw6qTNUvoVwGreNAybofYSTvrHiz28XCFGbutzFas3KYrSGbDSG1UFTCJBZcgX3PENYnkZh5Uprh2KuCHs6H",
  "key14": "2c2i1GBso9hSxZkYR9BD2UgxsGaCuaDYdfmy3z7dSKg6qrwQvi9tYCApdQUB57JbuDuR9R9L72q5vxsovL4nurmp",
  "key15": "56SX7X7cCWDTBdXovb8HHW88UvGpthUkceD97DJZ33SrMmF9z4KqhrKN7VcYDETpKHrtBK8bzaRT6EnLgKXeDwdC",
  "key16": "DARNxVQ2LBU3ovMT1hRBeEdVqqFNvDDGyZ9VesHYb11s3PhmnYHrUjnVQhVfNxZQbeqQyA2CefGApecezjWQH3A",
  "key17": "2dzCSzdq4F8vT7yNZPYMAdK56ztpKi8eetv5aRJzQD1zbgM5F1UELpYG5hwcJ8QHgcYp6VTmbnmnzNQ9dtBawG4X",
  "key18": "3YQEZCi6RVbCB4RtdB9pGfAePbhF615viUf7ye9psRCQ4RyPmYmCcsQYRueVqFDDVafm6TbDJ8pUq1WUKqs5G8M3",
  "key19": "GbFfk9wzZx7wvJMQXBHq7YerKhE4Ui25Dn9ipmLhLQpmCkSLbiHdxrYYudBeGiPZPTjD9QH6udwLPHGZ9yZGEzD",
  "key20": "2dPnQjmwxcRpRKNwrMwJMYxDRxNf47pqMMmTkUHcmn8LXstB2Tf6mTmMwySWrmMWAt6NKdP6P5QSFztffaNXGztv",
  "key21": "5AKnS6GVYvcehDWaVBv3FHmuuZ4nnhzDNUQKTTYSniaY4YyPpV8XJECwRgr7BLyXJAzTzKpAK7C7bSuS1H1cGB3U",
  "key22": "5fawzcbJf6uyn7do9MPu4j7efH3fgzjbUYVXsrrUvYyvLABNCEoT82dLuWXsGZxhzcXLxfZWTpYFC1orUbtqMCa4",
  "key23": "2tZkx1Es5VwRNT3z7G6WptDY58i6GqAjqQSUeseWGZ1UNDM79Ta1xrbQb3MFFHjQtGfU2oMUJYTfsxMHiuSkY4XV",
  "key24": "3eijsdoRwPpU1yq9UKgeDkoBDvvpao5wsV23UNLVX2wd9mgw93shaFqKqFrtdxS9hC75Ww1uKiUdh1RifftoVfbj",
  "key25": "3q6PyoTEg161Wc3ygwbYHMR7JL6UAnvqagkyeFKMXodnpbbi8z6jEgmWGuw8y5QrceQouXwS5G3kLNhxJ8HuZXTX",
  "key26": "3nD1mE2G4VmV5YCA3BLqc6DNkKztXFtXFCpHXvBQ6pkLyc7N1zu6PoXs2JBQRAG9p9pTdWJyXAUqdqs6SFWKZZAb",
  "key27": "5FJMHuFRFzTWVYFUHRMDBVMzfF7Sa1bNqqtPJEtQMY5fxUrRnd4S2JyMfVDh7LRHJ3gCEZp9pcXt1ZDFmomb9Nuu",
  "key28": "4oPk35JrZCTSkR9ZpQ8nSSW3aCosaC8Z7HAisdwZ6yfxhnE7jrDyFKTne4xkaAzZGzgSRTRJLheCVJfnKez6BjCh",
  "key29": "4izr9c8vc61hRYcx8iDd2tFNxiFahPJJbCrAuwyqVdtP7fReQiaYRn7VL9u56qYAZUcbgfydHDexGDwni6ZV6HZr",
  "key30": "mppbPuax3A1yTqNy3rYXLbTJhiwB8LFVHsBsmGw9WPwYNkRQ7ksf6J9BLeiaGffz9buneTz3nnSfPCbnZBaRz6g",
  "key31": "3jKimnUzt3PsEQZtrVfSdB8jDazEEJoKie8duXiVFLFCH84RtkxpteyDDmfQwQnrU3QE5UhxRDBDscYRfwtFkn85",
  "key32": "4fJHiwHwPTDi3fZBCGVuvDxiEV1UugmdPLFYzWkZZoePKiuNNqMRa4Cg9w1pHPjitjqFngrmZu2rUgfKQbWSsnEi",
  "key33": "2zPCdgShsnmbjyZ2fCcj4UD8hu6cBAg3TwXTLKm3MW2YEszpooexLondg3Y1VC63rq3YsoMCzgiz53hAvz5TUxwe",
  "key34": "GoofLLJQXUNzUPw4UjqA5e2yZ7eMCWcma9SoiNSEoK98XCLj2yFLX2hBiZ7bc56RZdGqCZBiW6Z4jGGj2Ji7Npp"
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
