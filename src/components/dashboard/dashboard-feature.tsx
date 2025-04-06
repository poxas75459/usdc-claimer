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
    "2qwav7srnYm3YigL5frDUvnesJS5AUZzJcf1kMtHrVD6iXFt46DfXakbSm3r5QKiBRUPCRexXwFNMp9ExswPGDug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dsVDR6Dvpa9ApmkcMNEp5ufFQWMoKmun1QtVXLrCi2GPQ1Su5CJjuehw3d4D6NXt1LotXgRzwsJ433uRVGdHW2P",
  "key1": "2B7k5aLNPdAxvS3rQ1zv4wmejgwGFqTLQVXFpejuoCzcedbZHLc6fxVUsHzBZpW29fBW7fcVrdykG9cbC13iQYGV",
  "key2": "Xq9hf1bZDEbQtcjg722WsDrc5ZBSncNSx9EwEgdiqkyZgrarqvQPihvGAjFdNbiqKaEnQgwYNavryShe4wKaaXu",
  "key3": "5YRuKkf9mTomfsM65fTvg3yyxkQ7NMojhNNpjFu1kUqMdydFDEJK8urSmPmntwmov4X6znQdrX71N6nAXTUf7YbE",
  "key4": "4Dze165Nt8RVLpqF8tqfRvPabTbdCN546e3cy9JY4aDxYcgysLwsiWkDeAam2RZLZV427Eh7hJWxDmMgXJ2Gd2np",
  "key5": "3sx63gdLM3Su9jBuKLSHdjcpcrvbqzgFcoR2n8PTYzBrjtn6s8yYXTYECRecppmCqZo2KSyaKFedCwT5YvNyz9ME",
  "key6": "mF7dD4oP1emQzpGLKWmxzZLQCWwx5JKXE5ivc6NASYzasfTvj3KRFxW6xUrRMNxpvt7usprDwcgjeLAJM84XNbH",
  "key7": "3tKyYufvrkKgNoFnGmXMXUBaPdodvwhhvwtYsXTbLBUT9Dc3uDUXPhCJPVpV4LHmyw5HEh8AWQNmd7kkYvg3rwAJ",
  "key8": "4FWr5MfJ3pEfds81Pj6XyigRiVoktFkowvTnCBu1udyyi3Kk27NzXjP9kLz3FfVF8JJzxYYRYqb8JgxvscvueD7Z",
  "key9": "4Hn8Ncn6h2iHydj9KLfCuhRGr9VkJ5cHqnYTnnkYCFZ3A1CDLbr483nNFq8FUk6RDga9CXCwG34QF2aZXcZu36ye",
  "key10": "5vSUdnZ1h57hQkxrmzDhXjGM1uexvChchjwqQWnnou5qUmzbabzo9bFDorXPxfwbQ9Fa3Ua7sPGPaDQqPM1JYmQu",
  "key11": "5HMTndzvKzNwZUMo7VQGgMpJ9aVkFoqAPX7JR6HCeoBUwWaFGzTziJDKNpA6C3MP4fZuWACdnuCPx6bgpZDfaj7k",
  "key12": "5iYs7pAAdkK5B67B8CrUgfc2mhepqqmEisE8oYtoWmXMFdqEqqUvp8DDz6p9egU5YACdRpAzoiFG18FVGVKHBpcR",
  "key13": "4MELdYPTEfi5C1nS3h7vh9WBrvgo7rtutHc99bL3AZVjwMEPaUtwHREaz5HPT8e8ekRye3BrQCaLcimoAuE2andT",
  "key14": "4QUuRRYDLPJqWSoNYp5BbCgaX7CC3adDn2TYC5j7CokZPeYXTg75Z5ZGUSp2gdgARhoJhiNQhmD6VVMnJooBziD3",
  "key15": "3qSF4ndWUxxTmPQPbWQ3ypZXDC7UcKFSqdUHy9UbpHny33FvwmDGCTmfFQHh5ucYc5wgFQ2azgYLaQwaBpyoTxrD",
  "key16": "4fNXku2RpMLsvVUXoopV4HB5F3t1itxWMHmAm7yyhmGnknktFkXsaq2dFfEX4gbmTvv5huQ21ocUHk35AsB1QBXn",
  "key17": "4ixbDzT9rJQYrGqA6ZgiYczZTHhWyNPsRqZtYjqsLHdrW7WhMU7G5ZYaMGXkRbeVcQHiDctVgHonKmgwdFwgZwUZ",
  "key18": "orDYyaDZ5ngMJYSjcY79ui7u7Fxsznsf453zAAiR5j95YsEPGh5pxZJJoKSHjQsKb2MCcJymE4ubE8EwTTHhqHt",
  "key19": "9FEn6GvY2d7SQBXi2cNWNFpHFuhUwx6PG3JS3i2B7My8By2u2Kzw42ya9uaVn9QhuC8XPuLegXUgMbkDKf8fL8o",
  "key20": "3HoijksGNMN5WdZZHPNxaAMvWXcmPevZk5xHgjh6Z7hCphr92JCRUThuGTECEHAvN9sXraLt1tDUgvBs7ajr8Fsf",
  "key21": "5Rdc74eMnxG19iDWo7BbSbjZhxE7eJvCerruCEizeY7zFJpa632UkscZkfHckURVYq2aA3WFtBxAHcQjwERc2mhT",
  "key22": "3rDqseVfiVBAc3hrJWGjHWyfxq6qN562Jx6BG11e8Sy8646eeooFcaHFWVus7WBRGKd4YmUeJdbd76ZwCFHGVGP3",
  "key23": "2UvSqVGDEyytj1odTW35JGgqMVuG9W8dggw85HaRfbsoJTtSYEvQACCGtULATgBZnKDGbL7f4Y5hjXJConJD7HT9",
  "key24": "5Wp2mWGj7HpPgY1N8zSHgmAdpe9qbciQtCEMp9tk3bPHxMPa7vQRS9zgLy8XEfwpNV4LiUGhePCjP9xuy2DQ71qa",
  "key25": "132z2HS3mLtYWTpcyvrPUvFrG6grYShJ4iEF6f1F7T799L9GbrfMRqPB7KsPwgkEkeh9dFXNzN9QBMRo5gePagk",
  "key26": "5f2rUtu2yYmnr1J14VRwmS46npSEMhNnQFC6e53vQqWp9zMuZu2CmoVG42B7A4wZv54JtGBPgUiTebF7LcTCjVgG",
  "key27": "2EuaTqF7X11j5gvsNjS6Xrd7P1wCVo17kJFaSSaeq5TPtiTLXfjsHafFHxHmapuKX2Mzom487bK26XDvC82kRVNG",
  "key28": "4Csan3K8QE4HwMWW8TSp5oHRtvY6ZY15qGdWbBp1eoY7G1rMfer1EGWHkzERfncQSFEv1axPKMz67Ld9MmoWJ2wQ",
  "key29": "3qVNKYadVWcLxfbXEmUUHmUvUZbCqW1tEHE4wDFAypK458hp55TW8qzeLywZjCCd8wPnRHfiQKnbgiwUQcvp1Qk4",
  "key30": "2RtJNhAyDzQe7YuAx8aw3xxr4QqFy1Q3pgPERzPyCxfWXr9EiEJ7VY1HEh5ZQq5e28GsExqzqHcKq7fLHrxx4vHv",
  "key31": "5iHfVHY54Tu1EZJM9yL3aEWzPyqnMECS5GPgoSDeZbsdbotC3ZDSQK1rxiK383yWm2gBecviizZ6no6vtHn6EGcr",
  "key32": "5K3Mc1qtcaYc1pSrXEvaMR7znjyMi9EVVqBH4vSvo85GCG3j5Hq1ju7HoCNiSjFxs7btZ7wUYqHW3Jdq1ghKYYJG",
  "key33": "63sZzHMaDxTAGHvwVo3axY2jJrminK9KU4Uuonq3bAAqTazCXUkXbKyBZwpxQvFo6kw3XAETyAEdCwXNippvJM3R",
  "key34": "4QdhboLzawCAtGapcofickPgYtuQ5v2tBtbSEAxPmGu6fpTujAbgqhhAZKnsJ632EL7zu1EGNd4oRDYsYsudAzQy",
  "key35": "2JSfsastYbhtRFZzGLPDWR7qwjKa6pUvuFVMDcpJnMx269Exdjq3xTM5e4DZZ4kVu4WavLtWtbZbb9vsRry2gUSh",
  "key36": "2nt4UeZ1E6MDbVu49JqLgUUK2sf1YsbsfWj71M3dJSNpGCCwgxq9gcWJosmCBnm5KTT1CkyJx1pZquJF4VJncHDU",
  "key37": "5nFy7RpLUmRaL6rE9Y7MW8LAvFJQzQALjGKuvxyDwkTTtqaMV2ZHDMjjhyYFB3mctVmpFwSXueVSjLLoWLmmrEw9",
  "key38": "3YPaz36suryqhsL6eTWmWGdVh3qNbwVjGXdTwgiJXq7gmj55Pnd6QtiJX1mV9cQUdiR1dKk48zGtH6KnPBtrRViF",
  "key39": "5HR1CEo1xTsTZYFKA52KN8EPnrT2CpsUtsFyDX8oghagjt36TNpkoc9yDSKz9XvfhJfjVQ68FhSPu2xHLbPPdokv",
  "key40": "2st6AnRDzeaFET5LfFx8DHrovfNDP8N7bJM1rW6nuZaWhu3pgNCqumZ4oZ7AdiPhXAgYoBW6ANzuLBPDzkQJGGJR",
  "key41": "2QuWjy9M7tHKEA8Cj3gwrRsbYPSFoKsP6poUHRuabDtHFvsLqt46vknqiNCNYiKZWfEofbZPKvr4pGLbN7oU3zWm",
  "key42": "31iMEvGxxsWTLyw8gGfeswBY3L355oW6uNHJg8KjR29s6aT2mFsQFaHpeqRrozC9MTrxzQKxdD2moAWNsviS1fZD",
  "key43": "29esc1kdNP2iAHU7vPKTPToYNpu8uso75ewT9z2rQg4AQTW3sqHbr1tKJ6oCWWCrXbWzL792SBbiT8EZ8eQ3VJJS"
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
