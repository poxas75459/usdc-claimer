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
    "SgfzUzAz53v99jNVZyKK8ATHVM688QdaUNAmQFYDYNGCzDkJ98Rg4Hyg5zMrVhg9yNd1ei7pZUpknATB7X66xAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m19Wmtm6Nhnc8ECAdo3d5U8MabxtvcPhvKHS4xYJmURrme4F3VYkurV55x73hBxuvGPf2iNr9hWaYTvVNr69wBk",
  "key1": "5pXPCSUbjnw2VgfQiBEjoFMq9RSpmsoB1dCuPGgHfS4Y8CZzYZQpEYFzNNtxZBPuux7oqkzJfyFKEh9EhBR9Pj92",
  "key2": "2wUNBBhRNEtZKJLXgM7r6772jZX7cd9zSm6XMVP1Z7ySahsNYdReethKv8GVJPE5dhsFMna66EiJHVh4vzSrWiPt",
  "key3": "2bnfHgsHBTxdDwnczgpfxn5ko5c7GsnzPE7QmJceanbRfu4zahnfcN4NBKczHRGysyqQ6HPgQeKBC8jwcBiFhRFh",
  "key4": "4ic1ScgL1KTF2dUYBt9BqJTPxFLXksaBs61oVm5UoLUchmQ2wpWnRJZWBy7jdtKwswYfEaj6NtMVA6YvNy9JKLcu",
  "key5": "bvuX9diF1Ut8UsGtCYn32LJsYcKJvgA35NNfVzpmSaAAhWxQxFhKuMwyogaFQjJ6mmshpQaViKsKztW8o4k12by",
  "key6": "3b6oo7H6uXf1S6kXgpSRsGzdBLgfkVPLShLXjBoXx2Sv1HXibVkH3wegdU8qQyEoAGvPTizj6rmQ6MxpiTtsGGEP",
  "key7": "3ReCbmQsBYw9aUkU4WJna4ro8bPiBsPCNVatTjeJK25XEPXWcb8jCphNy1yY3QmV1nyuru69TcN2bG1fWYmzBFM2",
  "key8": "43sQ75bfQ4u7BvXTjjARe6WXzne3Dib1Ch1e8C71oWdFkHi8qJ8ok9XxHdNkjjr5Qs25bTGzvmn1jjqMmRF8nfjB",
  "key9": "4bHxnyZqCzixHVi2m6P31tqjB5xKA1mgrzbw75VfdwB3SUqeMWPKafzAB9Lk8DrwwzKUp3iB7hzkPBjywKR3fUFy",
  "key10": "5KM247KNSAfRMEkwPFJRWAJYw78nQQmDgUAdvQ6zFSb6CNqzBzeFPX4dYLZMJHFJdQzMeaxWarimb4ot7cxLccKs",
  "key11": "2WQNJpM26waKqz7uYNViVtLQVT5KJUjNK7urWe667W869D6ZvfXhyuN5mLbxDg29Zs8Wb5iQ7CzEXJ5SJP6JWjGY",
  "key12": "4ey2viRVRptPeX3AP2vn2hQxPRzNxg7mNMjNvjZRFJxhP4yiH5E9yj7Ks1KwoheX9LHpor5Ee32GDcV5kDYBUFBS",
  "key13": "54HHbHQtsNhgLhGbVAc4UzEnqgru7RjFaH1wmMM9qGAYxCVuZ6nT9dS5nHnNkFiSNxuWuAHZjLKr8VftYBNLKGBs",
  "key14": "nodgjQkfZUG1JFmuj6opRZ86kDiV32CYPr1oa1GzzBJJU4RZarX4Gg3FnPUE2VB7TpXk9eF3JUXBTzaDYBCuJoX",
  "key15": "eHshWPC87XN7cktrNTgTqTEw9veJxMXF8nh1q7KuMgG95Xa6xFPCBg5pNySdT6EwaZfGEQjvm8wXr3LWMAYF8Ac",
  "key16": "2gTvS3khDVHe2y4qGV1g2i7fjx4FaSRpsgUkdpzd9zE21D6Nos4scQomM38uwUWMhvppK4WjDcXrq8roZZXFZ742",
  "key17": "DKPV8FsTAqQXYcir9VW1vqfQ32bdb3zLuJ5afz2j23BjijBGwoRX2sttCYFmtm2G1g85WNEpHkNXyEpEnsFxFXF",
  "key18": "48jp3ywGKEstFXRFq3BxMDHNTX61PbHzeKFJ6mQY1KHZXA2X14WscXw2C82pZEtCPQrhemrDT3NH8YGZntR6CDQP",
  "key19": "2PJU65UzWWJ238oYTenAgdiJPAYsNGLodgYPDj2eUcNSS6dxbuKcRJNRvKgtGntgsLdQ3oehFYukqVDgNmn5jiZe",
  "key20": "3549LtBpRJjLFWNku4FHq8qTnvTqp2FjE3TKYLQfuqbGyrBT87YeMJLpUYYjrtWd4FvhuZtnmBaGQE32J7q5Es7f",
  "key21": "5E1LUaSJ9QhtcU4qB8HHRUBz5dMVNXAdoHWC1zVzUGuhSWHLvqNzSiZUzin7bZwd9N9UPpN7KZa6Ryg2EqQUexuY",
  "key22": "63FeoRGc8S2CeRdjxJ1zMvRUcgacy92oDkeFQruHd6nPnaot1FeiQpuGDHQKAkuTEMKr8NcCKjwGwz5uYYvYet4i",
  "key23": "5va2Q1Hj64ZJbb7a3RJhvJ9uvwQwGFK8EL41Co9bSrNNq1LNmCiNrFJXmeBbrDYJWYwbgjwkudd3EwCgBRviD73s",
  "key24": "5VhPorXuA9PfCEy3bEUK5jMt4xPFuTUQQNf68vjGfCvME2kmKMNW1nodob8LdQ4XUeQjHPA56duuK23quidMK2fj",
  "key25": "37xWw9pCoJEgeXBP4ytebJmBdDj6dAxu8bMGMk4njt1LD7QHSgvkyKbaAwPQAfrt6LBUkvFGL8LyuDZ1iXk7HE4B",
  "key26": "4GLhvmjCRY3GGpkPaWRGy1yYeX1vSamNVjDxzxtL8PjuNNPP9H6YFDn84Kzukw3bSSdD7JUBv1yYksxSAt2dqkpq",
  "key27": "3QFv6ZqE8k2KryUBrSnbGgpfJKhBx266LVfpsiiCXLFTg14TX7GrrGaWJpPkrzxGagWDDzsE9RYNnsyGFnB7iz3H"
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
