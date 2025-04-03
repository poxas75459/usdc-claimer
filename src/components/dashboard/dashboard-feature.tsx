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
    "2rvgWQrTUB86cx7FT39PCHzKqMg6nzo4iPAZiRampH7igg89Z2qCz2yF9h4Xp87oJQQWX62mzoRiXxZvEU7VM7Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvY8h6V7jfXZMHX8fhu8qmBV6eDmfXRk14SDGz2oH1jGcnhaH2n8GHpXEkY8ziYk7MNzSMz97iqy1qSiuBCiNaH",
  "key1": "4d7vepLsbrukWr1FKV7fu9h8D8V9MNMTmuSCUrKhefzfiAsHBk6mVKJ4nUSmVSkDEb8RbKb35NRnLapFdWt1uixD",
  "key2": "RnHevQDzjkEHfZfYfWodnvnc3VnBU94fnAVqb7oUHiADAAZWqRb64SKRrqZ1sXJ5xtW1bBZVXTPRdUnXTQpUR2e",
  "key3": "5ymAbQxLWA9qHLt5YNmVjnJPeygMzBkDSmBbCsoHTg5uWwcWKUp8L8YUgHazpi7ZQkbvwFmF25Mpfu8ivSnUeJNu",
  "key4": "2L6Y8wDsSDxXSTNpjRhCDDa8YFW4kFmK9rYC9PFubCSqEuzaHRm2XDYizv43H4v91q6ybfNewJyEnteavXScQ6c8",
  "key5": "5tazvN7PpBPwRnFb4u2e3kyhUcjV4bQxk9PxuiiNyha1BRW1CMAqC7PNMudKdsyKMtXSZNHMmJMdtipUKdjqyGkz",
  "key6": "4htBX8N8eWK3JuL4bSVN5jmmf8QuoJoqbQEZ4R7ckLbfU8hyjZpfbGdMxWsQmRdoYtQtJZN2CgA8tRyoCvBFTS78",
  "key7": "4eW2ptBpKDwzBp4hVdMBUchySGXgfrVKYBD6Y5ozaKpjHFskX79C3fnfHLALxUvPLHqh7JF4oD1hBRp67rVYohZt",
  "key8": "h4hiVUPJVkigkpYYB49pTD4R3NAtb1zoAiJt6w5azEiFyzBwT6PkD4tgbh4wATZxLH9CWQnGZu4X73zFzUUjme2",
  "key9": "4tQGbphh2swkJzhBih9bcaCCFFSU21pjSFFcYxHV3Kv44XPKhJpQWR3SK3iNSjC2oRF8kAZJhEAVT2L2RcXoQfE5",
  "key10": "3iXQm72AkgzBM2vvACrvTZJARiwfyG47738LysfTJoYJ35KUt5gPvuaS6fPhAhrqjHZs5DoXGdDXCpMD3ptL8m4a",
  "key11": "2pXodM5RA6WNbkgeXZVUsPUDJ1LNv5XGrawcugEtuWPPappvc51oHyig39Lq9HFGQBc46NVm69wT1CrmuctUdoBJ",
  "key12": "3VRZMAxwHPEZ3XhUcmsa2cMHD1gErZg94jW9SxAdRwwXTLst54mSgBscgHAMNzQ8e9Qf9ELjdnQonk69D9h7qdZ7",
  "key13": "5ic6nBMLja8nLHjL14a4jFwyiJrrLrY3LCdapJiJ79oFNLZMUEgCpftSzQB3wTPtoHZLtvNiBdwQD3NXGRQRG4c2",
  "key14": "3cmEJqUkvuBn6Rn1ziCKNcpJDHvkHXHEgFiM3ayMkiBMTj4B3hHeke9QsJwmf43vYQCmtzYAWAfwtaeG41F1a7WD",
  "key15": "4J2higXb9iegP15bRKwjAzMoEyHYqSSQ36CacAGqrkgFehjKpr3Ark261C3A5xuLW9fb4EmBhSq5bdF2cwmhSDfx",
  "key16": "652qXdaAiQb7NSVZQt2s7vcPDGs2oWHiA2RqEbLtFv5AmHpH3ChnDW7h6k7kMUzZfaFmkSRcs1tF6caMfGz9JNZ8",
  "key17": "5eLf33F38hAgFMBkrQWcHaPvv7ajhKvREsMTz8H4WpkroeVTojq7ixqBfGJaK6SpVoeEHZ1oLFRXLBkiGc7DmaLj",
  "key18": "4dXaiebAwp2UFvinDnYwXCTjV35o33rdtubvGxLJDCFvPwKMdEbJ9A21PvaCAN94XxvHdjphxFcjiyfVEN1MRuEs",
  "key19": "4VUHG5LNbCdHKxeMNzCLUNDxWqHx2G4MAv2PgmgNC5qD8tBiFZZdErT6EerD88a8w4TCvSXTdjguSob1qR67rQxR",
  "key20": "4J2QHDKsrqvMrcjbB5Ye5qYtntAEK3E2baFiAFtTR5BirY8CBMtxBnpT4ySHS1cRfTQT93T116aPpY4CtLuDPcf4",
  "key21": "YsW3SEGcnTTjde7M39HitAaAeS6dNHoY5LciYh2ygjZ9zPVoHKoaJFf8RYsqHNQpPjLXsJQ3jrxzW2N9sYZqUS2",
  "key22": "2DJo6mN3DWNYZdThTCPUMQzP29rZ4iEckJf8RZzHnZUnxSAM1k3qU42K7QrLyE4QGrqgsdTFN3rkjhXC4VQcjAao",
  "key23": "41EWxBB2r4W98CeyCiuDaoPSmD29JL56ZJPExpgrSRq4YKJ23uF2xmzjuEv2sAs5nxN3vEWYtqKVgQoGzBMjeWZd",
  "key24": "4qb2iBg9sLqA2Wr4syHKgC5C6shtBYbD3gbrwDx1gpYMW2bNjfTQ1cvaom4LwojqQ8XrfsZEZahYCNkkPhnKdPih",
  "key25": "3BTnppdHgo3Nau2RoFwfZdUAgK3YmaVknTqvS7PRF75KM6f4WwVr7gZxp5tz2vJQU7AGiapkFjR63e3bLwAdnWk7",
  "key26": "warjK7PCKrxCb2UKBFLcsXcrrZ4c4vgYq3zGewQn4aBwbgzRXKa41foBhFVM4CcRXEmh31oJo7e4jG5iVp8vtor",
  "key27": "65wosgLfNP91usvMXKDoqpYgEsDNf2CDSaDe3QYV23vb3e2e5TFSUsMHs7XvygD3EFuBZEXR23p6bX2KCW9FDmU1",
  "key28": "22beQtKGooQg8eiHdNe6HJ6zJL7QbL4oSMkufwSgDfgv8WtRqPKpAN5Qv3p7Fwd3G9izLoC37tnQUUJfP5K35QSY",
  "key29": "ryb9aJyTjcBDkGHZ58m6PkGHkcxtqmzLLkyfEHoCmv3ecdPwubKEiwBWR9CMyKqtgjRV25DW4vEzN3p9RV5gP3G",
  "key30": "3PPueqrc7mNYF7sskohrWAjSJyxYfNDZpBNLCAsGtrnZwa7bM8Ri7neMj1TLtyq3rwid5iQ6JZ3WzgJmDG7VmjB",
  "key31": "5j1ncGUGTEYYqcB4tx9LNQ56cDy2n7WNFefS646qLbqLJWvty16gkJJC6Xo2DA63svH3AcafWXv3sV4zkvbDqunA",
  "key32": "3hT53ExpnXguVtGmXQLHxGsa3VpGfcXuc3au5qusxuVXgVV6ZjmSfykS2JF8P5Q6WBM9tRWEzYmdQM7pbRT9norM",
  "key33": "3Jbwsrh7ETBYQdCaVbQ4Shc9o67QaTuQmkmB6MmKSMA1TyjMaFo61Ga7Wm68vVqoMhGB9dnH56ciHorpvnEL6vmi",
  "key34": "2yFF7BfwU5DurrhmEWVVxykZgjeFNLq2Mm5w3qyY6MC9GJZWQsAbHQqkAuLbPE2TFHt7RzXfACF26GWgZnQKGm2s",
  "key35": "4DaQyTKRoy5vzTCwLEfkKT3WGsrCH29fGiaeqdK1nXNinmfWEkPmZEQs5nJyF5TygLyHqcpD92ZeS5CpU3RMRUFn"
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
