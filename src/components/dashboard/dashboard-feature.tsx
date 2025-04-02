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
    "4A45yB5esRodWxJ7dS2abv4Ea1KNBAPZcB5VVtZwztFvkNswXMqsCyvZABD6VBs6ZKvNMoPepgMMpeTiHAiCQ9MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xr1oGexKpaRY4m8TkmzvyX4rFSkRTvqrL25LXhUKqeV1AKUA93WLHLbF64JKweBhTL8Eh9F1D9puLXeHN63REBy",
  "key1": "2bBECXJGZDoJiBaBY9TeSLWgHKKfrZumNyDThxBw9FS7ms8PThfs2d75F9JxMrPVdmoKhErcVudQhLLGUdACiu5u",
  "key2": "3EF4QU3i4QhD2XnjbDASHUqd1FjRkFe6LHpeCKWdsCWrH3X9MthRzfXNDZNQ3hHz8EhPBt5P8RxuXGvhaxifYUyN",
  "key3": "4xcFnZhPQmMGRDiakw7yTs7qcUiYfPNsJAp3FihLgW9tWsvZNJyBvxztt7yZtfHevPNvdZ1LBNg5Ccb1Q5NYtkPt",
  "key4": "4zn2BybZ4XDDchjkzfYziWif7prdczWmpfstSe2kSinTSeP2q7nLZ1VtZx7JPh1AYwcXs6fL3Cbbzt8WJdj5szxU",
  "key5": "5qGgrffj2hoF6hkiA6Kau2aJc7ptq3AqPNqUoPZYBT6ucTc8umgsyzejM3Z4qd9VczVXErpHsNdmxUok7Ngfeyxs",
  "key6": "4bhMC6aeq6WdCPRvJVJXL1MjXmsSH3FSk4S6Z8rC78cAqfy93dZGpcbxoNEsEQZB3QoeZxuCn1RG5Cs2TEittSbN",
  "key7": "49HuqbjLU4uWoPotkmXe7Xg7SGAZuNfTUmFaUHochD6aAzefTYh4ipiasLqBZnr7nFvW8jsogpAasCipM24Aj9MD",
  "key8": "41pipDcxLhnjikF7rVjEP19VzEycbVzgsCEJ6E6cxN8GCqu1KPqoQ8KjGm1MxSWkpJqNNhCPHwTPrNtcwYm1ZAPf",
  "key9": "2P1DCWfmZ6rJb3fQGgxxZMK4NsCy238ssn7JYFgut3B7FmS4MVCvZxr1fCKJvm57XaievrFCjxJDLbxceifD87oq",
  "key10": "5m8E6r1WjgeEwGfsCx4gfnRp8wfvghZzaZvYEmgdtHcHzcxriDaaMt5NYiCTnhHjhmud8PacmLyYtkY5rDxZpEnV",
  "key11": "32geoJ6o5NhgLucCFj8HWE5RmwDANCbr19Wf9Z4s3MJeiYEsK19Jr8DnRgzam3YbPftfkZNNCPSY7uABEzim4aiu",
  "key12": "2kmiFDxPciaKJ784WRUyrQaGzZKbPkbvGNzUKmFcpm8as2tZuHvyuYdf22esYf8CppVXw16GcJTczBChABYejcVg",
  "key13": "31hBxcMGYnwuzNPP4f1zHMfxTPZARks6vNkAADHkUY1j36Ksd7wdq8gev4hQCUkDbhMFSbm9XnqnMjgS8n1Y1Sfr",
  "key14": "33Xv3Ynn9KfQm6wQH4nGnKCup2ZY4Mv4BrD7tY3hRiKVGwfkhiLNAHPAzaBrxkTiVbXdfpzVYuj6YfjXQoaWXa45",
  "key15": "56Cbry7Dh9Qza5rVsvzw2TQ84s2FsXNV63SarFvpENvavYY84iYoYCiwGhRCVFHHanBsJYpuZjLbpzLCheynfvUg",
  "key16": "52PGfrALMrXhcjr9i58tjA3wWaGTu8fyrdhCpzrkeLQhidU3vRrsrnJ7Tw3f49b9ao2m4eucpg5vXKVAit43M7qP",
  "key17": "56zc1ufy4wiZZ51kbqH1iXfT8Fq9kbPLC4kVgaHLbhGGZqhfn5HNQFFsY6Rqetc9TR3JEDc4ELnKxTaMHSWrmFah",
  "key18": "54DsRB3cDtoAY89x7bUTR8uPQQjrSsxSRjbohMVYCx1bHU6QbdY1M72u5xfsCBKCZYvbhZianeZ9eRQ4xFyWajh7",
  "key19": "3kzrcxT4NH1SX9rFcud9VBCz1kMMpGBwg5zjBNDibRQ5dVvR9dhUqaQkL2PFNmi1fPxzAWSepyFb7FCcPxRUse3L",
  "key20": "5GYbYHuojvgBAxfwTpGpNAkAx6w48s6Eho2GVUXboC6QacRawZ2DVPToPr7RViDAm3VKrh61aFUGXhPmVXWdVJho",
  "key21": "5TdKUsjMULGiGqDaywySvgSVcLDHyEtSbh5NsxirDEEtRSrKLZaADRuV74BWovxe8P8z7KYRQJWMwStfK3AUEg9N",
  "key22": "3xXsmYJ8Gxg2K8GnKqVJMWsC9bjSSB7xMS74xfSWkdmxjkiFNxWEnY3CN7Y4wFJGhAJDyAro6yqUgmJx74B7Xi9M",
  "key23": "2YpdC6nQNX3E8NTDERAisntwdeUPngiLV31Fd6boViGje4goohgJ1MmtDq56CB7yWvyUqeMMSngUfRW7khLUBJfb",
  "key24": "2Tsh5dxnrqucPcWkSmfC6GHbcpxeGHFNBxeUqauwiCLbHvLyAv9zDBgFewazd8z3EjvGyGCJ5nCXY7XoMn3C8Xzt",
  "key25": "3SuXgLf75fj8MUWFjAzkBaXg28KUv5hTzuuZJzUFHF8dMfDLTaMDWUR44FGTkWJqFzCuSoQ5BpTUMtrYAQpM39ks",
  "key26": "5RpC8aQZkrou87mMfexXteoJZBv6KAvw3euxxqv2R2SH3MDyHhUETqnARPKMVvV9Pq7NUHwqDydRNhppx4rF2tyP",
  "key27": "Zcmmb5FKi2BcSubCS7osnumUQwNufsEELrbZpt2G5sqGtevijttedjGooGtHgSq5esm58rj6khpp8R4PoSM8zQR",
  "key28": "gxbr6jcQmMwZnGceUrdDTb1gWdohFAKoTbtsDZUKLt2EF5b4MBuiedrvTFVtosvUMGzLHamzCdG2oQteWq5cZ9S",
  "key29": "5V55efsbJbdZsFSHCnmpvghyg4sZ4C2vBpavsH3iEhJtSYrWFzF8fgftkj6MZr6dyxZCuYkh2nd3orjaDzZnVnd9",
  "key30": "aXvoBgLVVU8skArpyLtSk5Y6PmcA32npL6Uz9iLGAsNkwN6QaEs2KG8kbSg3RysceYMj1bUzJeTXmiQjiKgzHMG",
  "key31": "2kCUgmio8amTYGTMrAVrMz3ACszykLV7iQFdznLFJrKhJBr1nmkgc6Vkbfg8sSRfY8tb9n6khrePXTnSzptd4tqe"
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
