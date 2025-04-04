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
    "4vxMszFjdL66JDr7MJbRJAJvx23aAtNidfv2zSN2H6kXVTgiATLAgrMz4G4hhBNB5Ur8og2NyJ5EY7TqK2DPkB15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b3dD1wTPKepLziDkSJhphqVb6qjrebMF2ZdtepRGmx9xRuGnM44cXnVAk9SrEBHkSAYZNJSeqADVwMUkWM6h9Yu",
  "key1": "4ZEKdxE3KgZvKUwD92vddbL9czTybM741w6ZtL5VGPGv34T4UgKAMKJTbJy6zKEDQkr6CHkM7Bw1vmw6dMSMdr5M",
  "key2": "oY3UuQY64CtYXHB99D4fZBvm1RD8m4YmT4bhyYkVyGoqLeUGUh3UCrScM7DMSXne9Usr4jXdpcJXpUDMktSUrJa",
  "key3": "2tRUbkgUpZecN48Kk5fcUv6A4G6wE7UCCj5CwppYKb5vPN3Mms9J4Jr4uJSeyxDeCdPZbSFuw8RWBFVGtdC5MYm4",
  "key4": "GGke3d2bDKXiMtt14VoKq9jZy3JpEK4uigPhQChfr2tmYKFQBd52TEGemZ9Mt4uMQ396bve8NTeGfKbgQCMQTX9",
  "key5": "5V2owu2DY8NBo34UUYUybovF4yXRzB8a1H8k2gXDH5y14Y7Np8JHXLNynxETKfXn9EDcNffB59cbR4RMBJHhXvPQ",
  "key6": "4JmphJ6QDV4kYbwopoktU4Cob8vXTCRa2X5iK848eF85PkBjBsewpCLqhdN4kFeBLT1crgJNtFVWf3ZjV8cuYPZk",
  "key7": "4bjjW54WkHuHj32bqYjH9cZ3APQNfRohz3u3TEduUP7MgtsAmGWrg6SKahwzSF5ncup5BxoHTYcppbf6uHi6iBXg",
  "key8": "2sfi7dLPxUZZsDc7MTrRv4rdS5UUR1nowSsgd7yU1ffqAxSEecco48NrHDTLkYRVbQafxTYVFrzMtGe1SpVaERcU",
  "key9": "2WZzTCoUtbQnraHtQmkqbE3gzmpZGqrR1BrMZNjmYy7trXF6P4AvowipZt9EfgRVCoGwCoWzqrXTotm8oTAFieZf",
  "key10": "2JaDapafJ9tbMphgzthkrae13qNUu6NmHy53x2UaqGsD5M3omb98ajQkfp2xYVRUR9qyupCgHkgJri4ddqpPk7wU",
  "key11": "3tEKmQvsJ3kfybhcuhEskYopMriZwBbMjzijqxkeGy8PfeAYPsrAS2JPtuQ6JbjZRgK6Jn1vikFSQcNboJHty8Nj",
  "key12": "29uHhHYmqRQGwhjXxVuLPCjTrdZp37dKrub26YJWKE43dNFMAYxxte4EGAFhXj4DiHeujCKVeX3YTxUFc9pi1N6W",
  "key13": "3shudCsh2TdvDtXVdSiJncBNPS2qwngnueSXXUQ6TFMaikw7K36tQbqwBDkgCo9NDnTBWhLuV9QaVrFMsvYf11TL",
  "key14": "4TkzU8hCY2j8c6SjYDpQeRPsJjzySKhePzATb72Jok2BBf6Pmk9ZysNMYG2E1u8hfpqNw9AWmAvdHFEqEm5hd4pz",
  "key15": "3SNGDSLrB155heCwyFj7BDAE4HqS16SwyqDR6nB99Xdre57qBhVfCtHw7ZtaHhPTNARRbV4SWcfvCkdAApozZwmX",
  "key16": "28DxSYDAAnta6iHQ4JB4KAQxBxNUHo4bLMhE57hTVVTkGnpBW3qgNzhXuX3LpcYvu5dtwpaukC3gqzzW7bEidBYX",
  "key17": "4VyTXHNEkfEm9FuVeopas1mGv9qLGie46bgyA3aCaovcuCzjzBtqmJegVCfQNyo9qTFfCVJcjgssqcPSk3kbG2ci",
  "key18": "4c4HQz3nkgmP8WPFEX3TJwjXjmxTLo47wQrwSLeTp1zpkSXKGj2V3rKEavdPs5j1xFNNBZKPYcYymkLLKUu9oVEM",
  "key19": "2buAPcKf6hszJkSMcTNGCCRnaqeBEJt9fkirsj3XGX9jy9pi4LSenYxsAPh1mjHU712takz5tL2uPc3Wd9G1Hy99",
  "key20": "5y72qL3HBh4Y1BwaJUX2821s8cjiqbpPpgcMGX7YqorurgFKV5Thfswq1Poow9R6WYxVJYhyc4RY8o6vyHBsbSZD",
  "key21": "5svMrMBuAVSa5VXZTtPW8FqmZVTMgwZUSXtyUHBSxGTVvHvJnS3aiuxEfY8TBFT5qkJuiQCTpZua64jzDLS65xJp",
  "key22": "3qvs2ScSpW9xCD5yd9tJgjmPCM8XTDz41rufL5NEVWxhfTbPZ8ZXRqSLpf3ccu1nedbRKvxzT2vRG7qKe15TZNEo",
  "key23": "4m1282YQE1q3CUCTrKfsASdAhTiHD234GD3Z1iZikHEbXBaJQVjnDXypJMqo1t9GjjhxPvVr2cABtnBHWgiEhSua",
  "key24": "3pnSZXPUtuv7qtaoCTJTY2LmfZokvtKf9mBHYA88tnLQ9V8RuPSitaQnuJLpU8TavJ2dSVzoD658As4ELrYLK8qz"
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
