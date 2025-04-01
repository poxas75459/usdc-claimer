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
    "wmpuFGQpfDZgHVgUzfi5PZgAopRVEdiWL92CrgwMMcCRNHixowNBuTBaaULCxF5M524vwLWZ4f51EVNkNwHQPrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6uhhjkxrUU1DC9DA6YixUssc9WnNqmrhePAd3tY6ifTiLrYC451rwY9VYqZgwcgDFgRFiKvDzA4AySymFYQy75",
  "key1": "25v3ssQw7b64C7tKpNHRnMihJ65yaUXU1PJYAxnt4afhsa6DByNkiEMJ5eTRLRNYagDXqiZ3jP6gWFr9qvexrHzb",
  "key2": "4XuEWzbHM6AH3AYAyE36Q5mC8ECVHFUGeWSc32A1Td9pqezG3nAPb1BgW8vcCpj6YjbuVhCFp38f37BfWbHMVNB9",
  "key3": "9ma4Puykc3W3uJ8EscA9zTxnPe6oNFJJ4cAAAAeu3bqxnfxqfUBkk27j73trjp3Ek1Gmt2ZLAfwt8e4cUG98mtT",
  "key4": "5gDnsjNc5eLA3QehjEJTDHqmwmDp7GoMasMgpzhSrzUNN7YnTAGQDCYY1si4cfoWnwdZ93wHMTaGan9jSykyA8SN",
  "key5": "i2SR3eHwrBA8TSsV3JP5TUn85UULgYWbXexbeHVhtNpDGjbeJ4zFXPPXkc3ppTb7wwAfU4ZUsXKZu58mNutbmua",
  "key6": "2jdhmn86RwdPBy862BjxiVRbXrF6oeR8Vr1TaGKxkPTEevs1zXbvDpPfLPndSvAdRiA3K3spD2KVhiebj3t8H9FG",
  "key7": "5n4Kz7fT6v2VxPP9se3SrcBhWZLggx7y7npz39ATWXDCiFCZzMfTaTdoSvXZmrgW4ZNacNPJhLGnRPsXHYA4wYhV",
  "key8": "M21vY8pNQcHmExVvu33s55BczpyJJmeKHin7voULG7CrGY7wRji7Ffs6YXqBzftTFxErSBM2ku8PW7Ygjekx32C",
  "key9": "2xk9isNQQpNsAPc1yJPKckNcXJQtMiB1YeokQz1KFrKsPGaKgHXXYxaaDFARQgiRYmbyt9LFjWhHA3EfVAuQvuLD",
  "key10": "3KacgtccFo6cddpyFDNqjNfyFnQK2QxYv6FTUKAbE2ZKWVQtDfV4N6uP968Bw3wRWs63EhTnkmoGtzz8uyvMrGVC",
  "key11": "3ujFcczk7zGQ6HPiZrZnDobZyWBN3iDsWR8jtnkUoxmdeDSb8S8ooN482MRrEmLJ9MxVakcbd9k5B7xQsaxmJmnW",
  "key12": "EVnrPTvzGf5U7fRZ1PwNJuVREgEL3KfPawdNwbFfM5Vjn46FX6UFHfDedjaE4ajcsnE2Ljq2T6hKLrF95eXAJHW",
  "key13": "4XNy3pYpn6Z9wPuWJB1XTyyD8L7Mg1vEzSU9MneYBCa33xJfHMcF1ExkrSMrQ7hFGBKxhpj4bhzE7b5dJdwDTeK6",
  "key14": "4ekx6GYZKfJRXiAVWu3BL6rqCmmtz7J3DLQFvJQdBjcyVRvFNkCpQcuCCznDrn2Q2GhJnxB9Lhmps6cwmjkyZEbM",
  "key15": "4bxJh9Q9dX9eKZeV4mQ2QFi542BWcKn4TTmn1Pz2WjDin6CtDwojGz49yrYDC398QEn9cH1FGL9WbW8NXG98iN6m",
  "key16": "eC9S6EaWbMtqdzg5P6DRivu4TMJ6Jgu8yTrKHotNwtFvdLhthmXGUJrx7gZsJV1ATvcbZTbFuopunjjKPpNDN3s",
  "key17": "2su42xZ8BmJG8FYxtbpDkG4bmU58dyfpAWmagZnq5HSg1BJkaxGoVnELgjUgZUpYdCQehjgMuNkxwHygT8Psepcf",
  "key18": "65bzTAgfiwSDSfaG7mi15yui5cNwrrQg3tCZkMF2v2Qp2tHa7YFcvPqWAzxpMfKsdiso51Q562D1o2JirCoUAqqt",
  "key19": "3kDJRia5jEWVHy4Q7irdSszVDgsdGvMhGjZUH7Gz9hgxWpoMFF9Ba53t71tTMmzWE56fJ7ktPzErQPvA7cLDALBT",
  "key20": "5kYfNj9jW17nqbbyq3AqB2smMz6xrjAjvL2gvE2fa9BULkpdsru1x1qdsMDgYsburMqytvuDbGsXQVZkwfq1cdMb",
  "key21": "mBVxLUL9NaLxUikRXv5X1ymfELx4HY7VdQxgogDm1L2BfLEsBMRmEErd1ufa3decHSM99UmzT7CUWdsRnLP8Amf",
  "key22": "5w9zZ78jQXr3oCQbdaJGNn89pgLyB6p6s5G8AczUjfnjfeydj1zSoHPTZSK7nrrD91eKe9ztfDLs4xmvWhz41pp",
  "key23": "i4p4e6NFjTHSnH2xLoaBD796csC7uxnRYDNuypcVrfR5zXXvo7QkWzt3cnny45TtfDJjnKcUikQnpJUG891SY9c",
  "key24": "2Z5UfFXVFihhdmo3JQC4gYPb6hYQrqpw7SUr2qKTBrvxrASsTC46aP7unbpHe8EzLRHxThM1ttFT6tDHp5vnD5Rf"
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
