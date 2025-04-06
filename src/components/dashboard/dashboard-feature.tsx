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
    "4z992w1WRUYGApyazzUu5hytNfmsHHQYhWarnsVcR7VQqW1BLC1c3MjePQmibQDtt3ki51HmGkfC62rkAZYq7kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Y3sZHQttvwmx7J1pd7i6dSSwuXqcPmaLDB4LBTwMxtZeCrxKCbicm7PTHyk2AnMm3Ppj1rVZ3vWKjcGqKz64vz",
  "key1": "4879ArkU1xCNXuwSojoUKz17phEJAj9BFCc8yUJ1Xx7GTFbmxYXV8tBJNB2TEpY731N1fXAL1542oKXrUbGPkyvQ",
  "key2": "3ygwtCs28UBF947CzfY3LKRCYYqZ1ZLqBhwQhj9dozbAP6ksDmWijd8AYsq8X4fUouWBNN4PuM5zVt3GMbibqexe",
  "key3": "5dpwgcNZFrKoTBcwJxh5YmMAV4UrDr8TA3zv5KKAsjkkebmcRdAHfVp3UEq3NvV9hLQa4QhjGdJyhZXGNAZcWtS1",
  "key4": "5i6mwUEuHMnef5jAXkD8nYT2XFqZ78EstJ9i7T15EnXbNupEqGVXNaNFRb2dcBQFA9KnmmQFRKCCAyiFxstVHPXQ",
  "key5": "5QhqvgwPyLU5VDKbTTrtxrtXKMmKJSj12RhPNgLmEUACeECXRo69yHRQ3V2i3wCqiadQdcbQQDZ9mxX1fPYyaH96",
  "key6": "4a7Em2pH1dgEPJeLZkp2pu7uadatNkDrF81ExXu7bTHPmDiudqSvE1MBeYzqcpdo3cSNmqpMfQx7RWoK6nSCZNAF",
  "key7": "2MUFz9xyBoe1VHABECfGSiphADhFHXhHiPyqobkmbC4L9iFK83T6eS85eap3fuTNb72yNZaq4LgL8aoeRBre9wQ",
  "key8": "4Ck9hXZzJADLyQhfYCaHMTYtuCTuvVLZoEP7b5SkmxPDt7JhRipMhbDuk1zR71RDxZYG34KMbTJgYEEA8mcaHrbq",
  "key9": "2iUq86NHFzUh1rS3swqh2pwG8RBX1Ve2i6TM1wTM64TUCvGZZoXdfQTqoMx8jjcPRyasmjFig9ABkB3Kk3TjiXxd",
  "key10": "5z4pgckQtYPPFSkoCxn4nqWR2154gCT88mve7qtstt9ujkkW3yoNiTqGwRLPP7SF76eYcKK1nMSyTbBZ2jeViptJ",
  "key11": "38jiK7dZWYnVSdjvRL8NhuFnGtD4yienHviNTtZJw6JUhBsmgAmzfcJQ6eYNL8Mv9TkB6vEneKFHkR1J9uJ8hwbt",
  "key12": "2LveAspjiJbMenBtq1LJkcmzHJdXrDfgH9vEHEnF75ny2uk29ddV2pjtMKCyo2ShWoE7qDKWWDzfFqYUzGnRqMB8",
  "key13": "353kEUkm2Qh85X9ygiEPNuT25EwavH9y9BL63mk21GPg5GvRgcqs8zX5bcQABN1A1izuDH93YDaCg4gbMMdNwqMA",
  "key14": "4MvhDoj5h3GuFcfx2nAzWmWUpjNRoEhP49fAxNtN8DQxmh2PVF5BPWVPCKNXcRwR1A5BaWR7GqPAc7dL72gCPLAe",
  "key15": "4AYjbD6BiRYe2sgJHeGeH1MKnLCkfyDM93MiR5xU8CSFr7Uw474pFbqP11we9KnwXbV4c7h1PAmzXAoBJafxDWcc",
  "key16": "5hGTY3cSYGQGwbWv3SEZnWFxwDEjagiN6mCRYAtAwtJ2XT9AzJVpZmgxNGL85xxkMtRSASMYvvxWcR2VKxumWitk",
  "key17": "4HC1pjw5XA92JJxUjSLCq4Vbk5fHAnpcEK5gifVdW3QyA2aF7BUpJrcJJYniKTULLuPHa86LT8ZGyAjtuQwVQrux",
  "key18": "3oCUFJoaFGLoVjDNjCArmX9KsiZKsYN7eQqaQoQeLAwKGQ7f7ue6oKcpUMAYG3LVNFrCWYy8dYKXvacrUJXguqyf",
  "key19": "4U6MTvQRLCkdNoDQ9RJ9AtJut4kzmk7ta2p642XCcoUTE4BDHiVAc22k6wnSckBvF3EQfWSjDHqzHQ9VRR9XNyAM",
  "key20": "5CK64AfhVwgzRhkMJ3cmAQeDnFKxUyY5u5jAFbDWHYBvpDb6C3sTgjbCVqsvRtezh1hq58S4TUUVpb835juKM9HH",
  "key21": "SrEhpR3vvq4HEbhgAGmFHJmkwxYfetApD5R3awdt3e6xq9NaacDtC139UTmodtELh5rZFJovuefgRuia3uXinqb",
  "key22": "4bUUP9mr17659EwiUhbwxpXoxytZ15xh2VwnEoXCfmpHq2BGXuTZ29sTpmGo6Pf5qf9r7p8p3QjZrD3kq6NjMbSR",
  "key23": "YGJNUNV8JYTNMriFyYUMHrng2EY3W2JxjunJQEaZyZ4mJpfsqJJgxVsXdFpuEFEPCKfh8jYBsEUATULRcpmL9Lq",
  "key24": "4F2XpuAnQU1WbK4DG7JUPVJGZSHExcZcrJXR6V8gd8vJgWNBzm9CzZV6aAE9R13vnpN9gRfunUYBZqcDnaTtHZv8",
  "key25": "3rjcR7UmCb4hGbm9iYgfyZB41FpseMMkmvNNn6A4MHSnN7vmfjNKkFaAzyTPqXYRJaJvPZJe3LVdD5hG95kF6DPQ"
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
