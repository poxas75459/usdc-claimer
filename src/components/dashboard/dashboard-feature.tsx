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
    "49MBNX9a86vq7LoAtBe5pZZpv5JYcfDxQ9MYMVmDAqJDiY2X1uvJV7QVvCKaRp2v5DpZPFyLyjhGtkSmiQwmvv3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmzUEHsWrQZtS8FcQkoPSECd2DhvXApUUR2V7NRDzc8hixbGRKbWJG4c53Nn6xByFFZBQBoNxe6GBbPCRGW2S18",
  "key1": "VPe6gyFPXtVbqsa1UJBaCLgo4aQwqdNKkameYmYvNN3htZgMwEnaYjJKs3WGtj2iJuSJ8ttpPedtBnaGk28J2N7",
  "key2": "28XpzRKRpUzbP3rSHNFpYmnikk3zMyqKMsLVz1MhrENpFnQiSr1Ni3GAS1hDPkgLpthXfUP6NAK1NAT8JRpnKeNz",
  "key3": "4Hw6ErSmtNfQuFL3qHCf1ufpfP1JCbawg4digAKnfXu9i7Lx8atBZnXEkvAtBaqhs319RYpM6BgKNmFxiiDAzSKb",
  "key4": "VwLa3UCGEEYdJb6JvpjM4VL4HUqocPdCVM5zBPggrBusDytBh9XrufYdx4gSq2y2Zd4t3juJ29UxKnHTB3Mojnt",
  "key5": "2KybmrYig4WPmcfzrvwVpACCztkM1L3BS92aQ82uK1JYRUcV4MJzw9Ri7Pj9s1uMHKPk7axAv4y6FnBNWmj5LUZh",
  "key6": "2cmJVJXZffF2SyJ1wvEw5NrHoqKRH6BHU1gabcCaiwDjVyiFtxPY9QLmMZH5EVno82izN9mpgC3Xy6U2KvLaKTSh",
  "key7": "65sTrH9Bs13mohZKZQRc7qE6V6y4M2tL8nZsZZexPqmM42LRyhAjg7e5LcipxHtyQzZFZLonpNAqUyk4q7taDmwL",
  "key8": "5iJfTPBt64WM92utZr6bCaJC1YQWJeWawV3qzCoKQsa55GuRhvx67wMVPzq1eUeQjbv1ToeYdkeQymi8HvE6z91z",
  "key9": "58vbXTRdBtWerV4q2181j3aM4edzwU5H5jorU7ZxGTqkTz6oW87tAZ8XDbji1vR9zUnhHvZEMg8BFzDWv6ua8E6k",
  "key10": "4j7148aAB7kvy6UYqoqwVk4y4HvNX8g1JiQdf5sf6PCdi2oB1xH62vZAMQreQUPUG9PXkJ2C1XDdF286WGLchr8z",
  "key11": "4irpKjAAwMHEosA8e4zzCgQo9dgYrRvwV9vMjgFi1SEymGUJ7LJvhQ38a2rFEPLMpJC7sbfGxETbGHwhBo48jd5g",
  "key12": "5B4BXeyLrZBzVesKgu5j5o8zUNyh3cu8bwSJ6CoH5pHzF3hDmXdm8a4oX9CL7awmBu5MH8zAMG48dSMunbZgZPak",
  "key13": "hfJ83k4AzRELz935Gw1s5VonhY35MKNVKTeVg6e6XnTxAm76iHrsPXfRUgmTXs6Z1fwbqYGqPMmNTSRgw5r9XyQ",
  "key14": "693bhXYXSPbbLSniQasHKbewNwHXFcgah5Ew5Hp4vtVSm2k2az3ShA4dkWHZA3y7qm5BBJDtwXs7tY9985CbN5X",
  "key15": "5zpyzEK2NhodwDmFnbn5etpiggdzjWLrY4f1NoudtSMc3smjHtPpBWnRRc3SMhQFSRhGJh2RgmW8bLmHpgPhihuE",
  "key16": "5y7L1pUFqM4oLMoLWWAmxff1t9Q6NXz8HAvSbd2RoKtasXpqYPHVNwq4P4Xf4ReBkKnix49TmqnSdj97jkxEyErn",
  "key17": "2AUSfvDwZXN8eAXqqy6St5tnDrgfDjewWpMuZSir1LJHeL8BUBSu2U4Cfj83eeZzA3vT3HAJ7Wxd5GaFXWyYN9iV",
  "key18": "4fsRLWt6fjFvPgerDpYcrKBQvP2i5TSTjN33AvU5VPwoynYFVUY3dgYRwszuSFUQomSsU4pkyvzPLcTJhwaEikso",
  "key19": "3e1XNxqiXvejZAwFD4in4nxPSSCcNgbRjVnzE1CnXN4H3ek6fTcAnWPsfN5n3obsVXzR1Z7ouRpzmXniozYdhJW3",
  "key20": "3AtpzcTqGWzVbt1KncwBfSNVKT1m1LUufxgwgSTjNi27FDTUT8PWYwfCUykszEbjD5qy5g58b9P3aUriHiS2QPBL",
  "key21": "qJWYZCZyz3nVbYBiTCMsPuBkY1rGr1ogxPmY7BZcjPVuiKSd7hsJ82d4KeD6EWEQs8QYVVXjjG1sNRVjveDCm4M",
  "key22": "3uHRQoYyjWxzXyAXTwtyUv9JkQkPBnmw14bJt8n3nnq79DwEdbCXXgnzaccTL7CFVUe6pUe7GBdNjDsPjwJZ65f3",
  "key23": "4Ni665kYH3thpZEgPMGoE3FLGTqW5WsKGgv3c9pm8dSXfVd13ShSqEi9JfNxW8LvmY3UHfy6QQcBJ66PexLX1HTk",
  "key24": "39AtDgetM6NEERqzAgMsKc3JmCxJLHrxKTHhGYTGc1eMiik8ugHXxxfqatK8M8AWrXFrtiiVTy528VRQq6LF1J9N",
  "key25": "AGCq57iBdXy775DPPC78uqhLsnVNBRvCRQDtabANnDb8Uysu6eptP2Rer5Ft5iPhdCqrwXEvsLPQBvHZ3qT2RRP",
  "key26": "2S8Q8r6G3XKwzfNDh18idzyTfyUgiB1eMsvTsRVSiYuiYLoiLfGk6TcwG8L4tbQMXQKCrCf4k5hX57JLuy8uPbvm",
  "key27": "2kTkQVjjC8gMXnb9XU2CkfZvCce1vvur6z9UFuGLHNmVyq1UrMyoyUyLNQ18e4SEmdoWdcWkiFTcPNG3gcxeCurt",
  "key28": "6fkbEwZeA14WSTCrDWaRL5H5zjC4DB19qTUFFzyRprxq3KeyvBC4yQRtBhz5TMuCs6qhtDbFewm4bCYoaUw77Di",
  "key29": "2JuJrZp6nHAuuQEZBERMjxCTgC9CGuZoUmgTjUUHkaNLQL1qRJvb8vSJkbgi2z1c4cPqonJBvEY96BEjg7Yh79Ft",
  "key30": "2LtrvqTkNvDcN5rrWLV5vaZbmKu98QTghGVnc6xZrJy2gSTgjEYyANv87EX5URwXw7vqx71RnwD7sw255S27VUA5",
  "key31": "64YgwMX8VTR2AeBurs1EXeF5j47Sa27vta8b44WMto8A9d8bqsfRyrGkqfQdPwyDvTjc5rXVsYDTRQcJ8nrkaVUQ",
  "key32": "3iVyiiUNTME4GUdPUpRcPvdeNtE7ZiEL5n3bKuwxF3EoSjSEaKC2uZ6B9aCo57g9tBZxCkqb4Bq1FwXqEj8Pq6hX",
  "key33": "4XEHYZwPpTt4SBQv7BPbD5PeZQsn2mz4AFqjV96AHk9NNwnLYEkuafFyNJigeWc3TuVdVyopt2PdWLWqm3o9LSvJ",
  "key34": "46ACpCwfQcLLJXwqNdujvqPAj12Jp2n46pSoyNdXWgmCRv84KiChNY1xNMPzWHXZQJwWihCPgPuk72Pg8YhiHBBo",
  "key35": "5yUKq7tG89Cw65NPTsMN41oJVjsdumwL81umXnXob2vGRMX6swk3xd4KFqSyzw3HjQytDTH7Mu3E7z2N3DnmfpAa"
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
