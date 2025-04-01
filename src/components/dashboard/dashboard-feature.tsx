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
    "2kphQmu2J6ZvtwBzsyYJLXNn5pusN9Ne9GnCEkLDnbGBrXSjm3FCBWbDB8hCzmByzj8G4ZZY63oSGERNBu9iMEeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZJ3RNwKB7K56HrGUNYiheFj1tThbaDoCLovauemrGtVkYdJ1Qc8RSwKGgyoiQpkU1RUnLKthLruBxNq2iLvH2F",
  "key1": "3XPFz1zm5Qr6qR99GWf6j1ZskzTkwGiHLzgHSvZ19yw6bzwi5gmrH99MTFooUQ1WoZ6QyCc75hYiBSdGchH2kfra",
  "key2": "5ZR6vEvBUwyLfCMYbbYCnWaYSbwRboL16kCDab5SMunWzuFxK3Wzm1zXyqgemMLvYUmskjVyHnmnF3FfxeSSSpVp",
  "key3": "65phf1hppL1kzyxyLVqn8kNCAs1uZETqSR1XgcT2D4PAYtiRs4uL17Ey62MUGRLxTut6fKYjr8efrhjq299VATza",
  "key4": "5C6aSzcXVRFANFmGXNhcYVNvRQDX6SMs36DsKUom7G7CLvZ7wFubUJonppfNwn4wN9LARcqTzkSRVb19XPCrjAuA",
  "key5": "ZBwuQz55U5uWw1WinF3seus5pZvK5J4po8md9obJ8aVZzua9PRXk863SZmjWvoY9LRjAayYdeq5v9pAs6uZV3Y3",
  "key6": "3PmKwC2V19bJeA6j3JYfr7faH8WwEWbkHNMdXjTPSZCM9YGhpCdHqk1Av5cnZpBFCBnP5KsUHpgGUs8A9PhdFCMP",
  "key7": "2SqyhTiEuXDzYKVCoosueV5YMfix89VXYDvyqEtCFZzHEWHK8SRgmrtQ9iTn9UP5ZMUPy4wjErKGPSiG1Ls9R1u8",
  "key8": "4TvBHxkJdw89XeccAWAZMcPyMywScUVQ8ECSLEtcSfSmFfy7WT54ssakRvx3Lk6CVZcmCUxHqyvSVKb8oXyAuAss",
  "key9": "3dN4nAcVHKmgmYxaQT4kpjyzutyLh3WB2KjiubcQ6UXQpb9JWggWnB2BQv6YcW2puxj1QPoXsYXHZpMgdprqxjfy",
  "key10": "V6fUJjjGj6skt9GqsoLeJMHzNzy6GX1zhAZU3zQiPYYnxncimLQxPnzj4HBvwFAY6DhwEK3dQAVB2MgZ2pFg9yh",
  "key11": "37cTigrzRmDQ2my4ZPoPZJhTR3LrZUm9276AQ7DyxF3WvGDfMYyLDh8YP9MkvYKL9uLYTFeoGEqc9F72QUiaST6i",
  "key12": "3ujtrXEctKGXb1cGRZix9AyqKAu2qnQfRsC6hYeSRHMP4dBWLgAqPdUSsqjyfK5Agn6iGhNSqr7DoqfrF6qZQLfW",
  "key13": "2utHntMicE62taXM1pjweNzgqZWh4DfKhkC6sML5YRP6sZaS77o3S4ZPeJ84uXhnf5UYmLCJBwEtoCGZwt4956Ds",
  "key14": "jDd1EFeUSkmgrgGKAtwrUBcMDmcPJTeddPgXnuSHAUCvu6pN6Bipcu1S2Myk2Bhj9whTg5F3LoYtkjkt6zsSeiZ",
  "key15": "5XJLkbkEFH8uKt5bqHUKNeDxwsaR4oCivMTsPUFaH5pk39nWysLAnTMqNdNeAuNXkWefqfTo4h2otes7MRNZTgB8",
  "key16": "3yNVNPtLdqHD7T78RAB2nzXf1RmbR9c2AE1o9uov1JDxd6XYG6qk2uMyKugfzNxnyYjLnYHLcNUhjcqiZTiEhSRe",
  "key17": "4M463WkoBvN251SNZfX2U38LT9oGM4xP1wpopQEjQGgj4MVnb1Aa1bebetgZGmPotKB6bnXwDkuSPtr157FkTswh",
  "key18": "4Br148q16xvLZBPz6f4SnsD414Ppf4BjSxi9KbGHC6TwCAydjpw2gQcpAUnedBvPSKriX4HKHgoi6MduyPKiQ4yn",
  "key19": "2DrFArgjQzyVSUXvCLZQPFH96DXkvuEi3MY5L15zGLQxaHa6mmBKq7xsHANFxk8s4v7jMvkrDuT8pHoBxocU1JWf",
  "key20": "5CKbLncDWdW9AAjpkQxpkQfeurGKbHLb3kAGWy16Hf1p4mTqiDYqSK5fqhocR1BmEXKM9uE9mHiBWRcohAAmrCDF",
  "key21": "41qU6dU46f3pCmxbaQxe1yBydXyP9taXUTPB4wHCkpvmwHNcYgeNppdiew7KQKkeQ3y2aEUC7S8RNajLQjzmsz4r",
  "key22": "3wN9Z4cE396yALD3MS7wRdNpjWqL4omNKy6VTjs4Z1YErgMFfcmFtfwFUucqEarCW3N6eDxWiBKHyQXFvLZS7rtd",
  "key23": "38GwmDbRaK8oD4MK3EWTHKvmLsMViT8XHuJ3fhwfEXuZcDuoU4x4zxMuuPgTdmuBQFvHoiLFzwxeCxjxuFQgyuKC",
  "key24": "CVCV4EgNe3c4TR4Q1XyyZbZG13vfeyncUpY8KMK4bnoFYD89ZMcPTkVAJvCgrLa6paGt7GVsR6binUZX91cS9bw",
  "key25": "2uVbH42jXqf5d3yzC4miqquT1VvuYMLvk7oYbW4aLW9ZqcSuSNeY2T1ZF3NiRLseN18Pj2dXrBANFex5BdCxfofJ",
  "key26": "rznJ5iSZ7SFsKhizPty7LuiMjsXdCY71goWomWJt9ih9gyGRNgxHghHonapPzVxkHKEZ4Lzz52w3wvzputTrAvi",
  "key27": "64MB3bih7nTvXvae1CeYEboG4zGvCXdKJ1xbN4a16u6rQge3atAgwFsoGdCHZ8KZa6Y97xuZVB9cgQWjUxsynYmV",
  "key28": "3D95VnUt6yYdsJNdGScDDHnR5TU4w78UuQfu4DeXZAMmpcoqDdSyhdoPx1WroxrsYbbwLdToswLpFupsoq81qQ8c"
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
