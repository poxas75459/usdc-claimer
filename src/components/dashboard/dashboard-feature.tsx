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
    "42HWMjWXn82u1XbEMaq61XsCoXYGhaZLY7hBf7YxjbGQUCYujmvPGfyELDDXwhoCe1yL2PfRSbhLN8hwNpTxTZav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTxn1wP9idrHSsTg8BK3R262n8jE96itNu7fBchX9VjB3az4fCGeU4MXu8862cQCtnNJvCtEudNjyiTioAuEva6",
  "key1": "59P9kj8LXBEnaLanHAqJVRGcTt9cXfccBKvUFLhCrCGdsp1kvZX6NJFW1YSezbWszYnJ7S4rBfSJaJ9ZZgC24JB7",
  "key2": "5yvwCYYG7EAb8hAiZ87yX1dcswjn9qGEvwPFRESKRyfS7iMM1nhzyo2gAEVQSw53d5kUtrQDuBNe7477qvwiisJd",
  "key3": "2UyeyfruRKweN77jR1hwz1qUBYJwFZmRsKWPyyNtqBgx5d25wqMKsRXbjaPeZHMXntbtob1FqPLi3KF6PyoFM9F3",
  "key4": "3ryQrBdmLJU81jFXVbQrgNwPX3x5s7yiYkYyCeTuJuLxMqRg1ECi5bSgDTWrxDtSCz4U1XXrfNoGDfTanNf4RRTf",
  "key5": "4C1Lyke6cBb6Q7wpLC478YZgVZm2gnJYawqUveyX1LNAiW8nFxkpRgWqKZap8LAEUCUq88DDH6s2CEbhMFjuEDkt",
  "key6": "DD35SmXfWWHV75x57rH7a232883eEniZ7GUrogFbCSeVrSVGwY8bWbkf7WpVSs7p4YaqBbPjB83qHwvVfb6kbhT",
  "key7": "2b8KDqCMRyPbZjDVZswEx3jpefcTcb5AeCAUe6b5iUzzcsKJiZgGD3DreWiTyvJRZ4fgfVqZH3d1Pv1NeEM6Gxsd",
  "key8": "3QA9cpDzQLTysjcDRT5w7fKZZ3VvL2Q6aiuSW7rZ9mUiR41PNprZWtZGdX5Fs7coFea92uq1svhYbR8eh5g7u1UT",
  "key9": "3TRzvt4o5FuXJeoZmgFwcuqvZdqD4ggEKa9A6YJ2JfKNHpf1skpEm4YLYfaiMoV8ZYdFdJfcdqgBZuxunZi8p6RE",
  "key10": "4E9ps2PUwA4tJhLHJJXaGHQCfVkCDb4gvsS5zJiCBGg5KV9mB1KDNrC7Y9zF4JHmL1LuyySTefR4jsMSsHdZUawZ",
  "key11": "4DyUChUwagHvSKrtUN8ZrYRKbQYGCjsGWDTbyNYN4pXeDwetAbzktDTgw1zYQpU1gENJ2QtzDJddHzfDJ5jQcR5N",
  "key12": "3edixvVM5MCAwKZyAXJU9uUnnT3bWhgEVXGUp8j4yUmHWAcXxPjDJQjfC2uTpowt5qdDQYr3pZfp23SF6QmoBDzb",
  "key13": "4kxwVD3G6M81ZV1cCcsudraLhuMEyYmXdncvqWsRphE138tNFvSSZTFUcHNooFtGdm45baXAK1btLvc3UuRtubGp",
  "key14": "2owbmjz8D894ekH12CW7CpetLLuhVojh3RHnWa55CbmUDam5kbqcqKLr6MGzAL7oxnbGg4X6b678f3J79qdCkccA",
  "key15": "2eMTEYazPXRh9HQ2rD5GdbNYHGg8DPDU628ecPD8F2sUVaATi2Fb1UqzzpL3UmrHNFVjMoYGXahvZdm8xLjbbjWC",
  "key16": "5uujB41tqLt3MNL4kekapTHwVzJUpb1hzXC8QxFXzC55ZPEnTGrkXo9ESHmdP12XsgzQyJzBRr9PRKJGHTavDVSK",
  "key17": "5TR926oH137Sqz2J5GiavFtpG51Uss2TJC7HT43fSN1PUYvnh2D416SM47a33uBSvazTXLnDfkUg7JedrdxAWkB5",
  "key18": "5vqjRTzcVqw9u1NpNfDA8CsxXGhQLK28J8BHAGRSepgptbWzboLj5q1bUdtAeb2edKAAFuUFQpha7VMmbCQYR1WX",
  "key19": "24TNmcMmYTsddpvvQV72as15zQ9ZTeiRZqwF8GnTf6LFrUhEKqo3B4ArPtCRZoPZ59NXhxHsCY1g7UkMb5CJX15D",
  "key20": "5PWgEZAdr7EtZtxqSFWJRPkpduPBK3zdEtDqc7Yrc4fNYPhsDQFvyoGw38HQEMtp3ebMEgBz892hiDTn3r3p12ej",
  "key21": "392GTmrQJcenBkw5uvHARuiojkaQw7syVZreut6QJorszUk2FKcgpQQR3944omZzNMaBkx4GaCwTEKz7Lg9JLpUT",
  "key22": "5et111HXjA3FgZTq86ftc7Snp3wyppsmFDQsmLSgaANsM1thsf8yuHSwbzBoL5YKBkHwXUeUAbYqNCXUgKBsLuPy",
  "key23": "4guESZEYWiru3sP3ffvov6Vhea39rCYFVod2Yj3TQ8yeVuGWpBbaPRvNwQxgM7w6aPyt84sFzaurqDCkAphurna6",
  "key24": "RosYEPrw16365DSRqm9NpMDM5h1BJfx3kjayZ4LvSWCHJW5DHz8AJKcuGgcn7RbQX2uQMG5v3aZ2P2BRRPhqEZN",
  "key25": "3dpCzbaXruXUHK6t985dGSRp9EH379NH87Tv2ZV93o4N5QszZRSCPeQ8reDmfSQbSr2qnoyRKkVWmxKPkQRawVdh",
  "key26": "39r2vZfGZLYcE8VqFn72hmSEjBy9sX4dG43GkWCiwtjNGrV1RAu91onMzE9grs9GqRKuU89c8GPchfZAfskUqnCi",
  "key27": "2PrbUfPRJKBHY1TviqvL892SMA1trNacj29SznmBUPvCKsZ2d4ihsKdeFTffzbmac8cAQW8jtzBwWSHL1VsWz1gk",
  "key28": "2hkykDBv6DHcuH4Zf35asPn6LGDHeVi3G8cGdvkB77Q6H77G4sfNmv1W4F4hRYpeUjYqBmQWDo7dJtdEr79Au8a2"
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
