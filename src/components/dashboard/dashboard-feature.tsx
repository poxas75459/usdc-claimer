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
    "4cphTJbSZVgAmpumh1KqUUaPAa4izLVjGNz8CPMCVy7kzcBHEx1YpA2AdHZawnCEA3WPpPsbzjGwCdzZrQytN6qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZ2kXxcJM97cdUz1UmpAzx3RmaYUaUjDxQ6Hhgki7B4FLm7fissu52ThAkdVuZnh3kMBFDvKvpyH5eTTrCTuWdE",
  "key1": "28wsJF9iNWz9cP5kWydyP5QndduE9sxBf9Ke7Mq78XDUuLjWUmba5GMw6AZkTtKa49EiLLwv5cb9MthGFLoS3KaJ",
  "key2": "2UVFEnoPMKvh8ocCRtyRKQdsXCRWdsQacsWk9LxyN5r4v5NuGnLNjYZ3mpumVHKv87Uu4K72Yh2WvxjPqBMMuaac",
  "key3": "516Eiea8XRepWq6n5L7oD857Wv4XQ9YcuuyGBnmnEnetaF8pF4esjJgHXnzPGw5Zu41fZ762VhkNEbDdcK1wBPoe",
  "key4": "55gQ3iRuFENne22As2WAHNBT3NosgLHDPWGiLE97dZHcHRmMpHsrJefuBNe5PsDVFs3X25TBwMBtAUfktWzHNYVv",
  "key5": "368mgfPwC9sXJsqHtuQg22vyau3j2vgWiDwbYFCFiD2esnc5eWrXUfJgA9UXomajEnS31CBeQkK47DJuxwwCdSPQ",
  "key6": "MohUvJWad6uvrDKrBLnsU5FxNGCBoCoxbBtGJrRjn1DLY7vBH1Cfsm6HqZhiDp5mmGPZ4sieeWYzt98Rmh9kwdH",
  "key7": "2Gc81vjLPW1tvryVdretCyWQxmyKJnu4nkHMQ8b4YQekDoTcqm7WawsVT2fDqKHmfabyh2tsigv7vAfwXC1RsCe8",
  "key8": "3KBygdzz7FSYvz9FdsV3DszwgWt3a4Rt43wjmW557V86Z7Zr3J4Y8u4WU3Xzz4yKWKkbqeJjSMRYn4k7M4H79pJu",
  "key9": "36LJ5B5itHmk6RQVLxwfc3mKiMFrZ1UJa7STuVTDhQeyaJXNJ86aALe3jcUJcQDV4f9wKA9R8CkFeSBkkXcHTtUE",
  "key10": "23XN4vZvRXKgnMCHMbmZWqcoo4Kx7FAPMmyyrZkxrGC4iCdiR4dw1Mcit4sc1yx3nRXwxmNpkwzh26esZtPhKJKE",
  "key11": "FUVUD2uLAFH3qtdsZ4GT4ARrTDxbMuENKh1QKzf27R18jc6mpz7NL45WkLB863j2zYL7hYuVjZvGTPWQqgHJxMY",
  "key12": "4SC1BrAfVpap8Muor9J97SZoArgmChwxeyQK1FcGwMvu8Boqzuj3HsomYcKR6EBBPuG5cVCjCeZhMas13r1WwwVU",
  "key13": "4asRvMhXt7PUczzGwRzE6vd67AkY2nEwPvWxxgQE4qdAtthYPDFrdY92eZ1sjzDCXdCftM6b9TazyHJ5UKjMkmVQ",
  "key14": "4ADi3jmF9nt2bdgQ2b38ACmTVdwoFGBFXMJEBZZ4uDx55NdLNj5NAnXjNwC8fxqv1Jmm6fvcK7MUQGYmQm9DiKYd",
  "key15": "423JZu3j65GGbzDdzi1RKuUUPfJopUrmHfZpHWrYit3xnPr2AZU5LH5d3nQn7cpq73v8KLVYW4TJrn6Whh5K3uKx",
  "key16": "SaXJ1HYNy6xkyE7MS9EhpSAXhBv9ucjj9XWD9RagkvDzXh3A5KieCNsgPwFcQv4bxPawHu5mqy3fTijSwzX58eU",
  "key17": "4ozUtrrQwjxQyAdyY7CR4JK6A9YzQR6pZYPnwMiXNZK8mzsY9VZbD3N46GaybDahtQddjmRDUnDiw8ggU4Fb7S3s",
  "key18": "zHyE6J3SQY5mZdMBCQy4k86dop6tYhBU7Zj36e9XK6KpEKWtawm4wKw5D2DzDwbvX5THu5L6pQY5EHPpCDTEdEr",
  "key19": "4oUE7Wd9JpyzSCnrUvvn2anfWLbPyJ7Gps8xKzryvqSb9v71TabJyzgVkgqt3H5ZD9jTd14YWK5v642tMdSaPEfu",
  "key20": "5eaUHa5Vqj3L43yEN9q5gV1yd3scXKXam9oqJCAU6Cq4NQNQHgFS2Fex91jX1uZZ5eRT9zzMRhFuW5qwsZpSsCfu",
  "key21": "3bqDGQDutxRLaXYEVpmTgyHQPH2AtDYd5phNu2CiJqAPiHnZiCLP8gBhbANKZTE942T1QGuG2iFQVxsdRAodZC8f",
  "key22": "PZhy1s4SutDSoh9Ny1P86EHxx51a54e36drprNFrGKZtyKx2JzzSkHwVpCyVRPFr1nkugLetQFxc7J3dRnuRh4M",
  "key23": "eXi6hGqYp9GyfGpQP4gFvHrZFU9AJCvJzRW4rgVaukLgApV1K8gXoeNFq3hrSbDFL9RrJ8qGmsvHwAvrrRRBpqx",
  "key24": "4QHN3m4dnDWsgUinn4eSNRYatMmmAdNPZ1wgRfDkH44r7eBFRRFeSYPUFZbZ3rfzQZmfaP2Wdie6U28zrTHYtMU6",
  "key25": "2mqHkmz2f6zFmFzwBpc2qw4VY5GHAcpKoZeVDNJGutJHn5MyXyJFf8RMmjo5c1Bse4nujmPgHnztCUSZi7GEuCj5"
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
