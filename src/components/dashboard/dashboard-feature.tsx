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
    "4P5WBdTqHCPAPztdBSbeteprpNAEzm2y2V4gdLZdkionf6YegLyuL92N29iAPVmdMysAUKPiJ6CRCpynowuTcqmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MKvtbdx4Ug3Uh6UG6uDqYT6JWK2F6VW1uNYDugw1vXtsMiLKe36YT53upVJKXCwqeXi7H1JzQgangkgWk9sm9am",
  "key1": "3zgvmN3PT6daVVQBYFipZq46XWiwJ3SkM7uACnVkE2n5kxqgqbK22PVx6CLWo6PjMyZWHDcmBBMrBKSYGqJ8aeep",
  "key2": "j24dexqjaAhpwCDtCJh3u5vhzHy7RL4MMGUpeF7LZqoUdtwRyh8T9prrWA3vNmEXNAzbkhBLD4x6nG9MxFBC6q5",
  "key3": "3w1HDjpQgvRG1PkDUrKQd9HvBq4snMWYFudGACe9GQh6q8jKdacz4rh2hV6Y2jJBduEk4H45qx5bNVRDogiXT62X",
  "key4": "5b9PdinwR5ktwujvv8NMXNzDsgzN9zfknrCEg78JPcwBYgwrbx9Um3DdVCT1JSieKsoszaqVRaApyfovv84ocUt2",
  "key5": "5CnXx6YCwkfNPnExSbmL4vFPypzMgV6AMxMUqDRfyMA17WkiMAsD9EmdsBc84L49BGMwpAfWmje1aruHPHRXu4ur",
  "key6": "3AWa2GJvMxP4D2LMfWv1z5BdQJB97xeBbm6feHVBQ4jtchvgabQtknkJbYnKaJdHZF7ABhFHdCAQwsNXB5YZhzPQ",
  "key7": "kNbnFAMZPPAx3eKAZvixTMs4Vps5Z4d7UfckxkhHoZ3A2LRXF5rwki4LbGZRn4cxMKnz983fXWKQGN6oqQDSS69",
  "key8": "3k3g3rwrUGdFb5gevFHezNa8wdvNki5LjySWFdib5rNPJDZRFCW8g9ztWQjHQboaPY1sth1pQBDA2CNkdUBPaQJ1",
  "key9": "5ddHzCG5FKqdbsJgGaHr7Y5c3yixNhs2KCpY95p5yT9gHCj5Gq1r2SLhGy6dTqsGEdWHAqrxEchw1cFqRXViozsC",
  "key10": "9ZXfW5cXgoMZUz8ehi645uUPqqfKKTeyUk5fcxe61sUY4Efwng7Vj3TsMuog8uSguQ1pYtUJ7GdL9LWsM2BdtxP",
  "key11": "3oUw593pkdmU2MArHc93gi2N28vgd2cHeAQFY8u9QcnNhrs77zk4hSV4W3nCHb4T3nYN6o2AMxMU4264MqDzu6tN",
  "key12": "26iNBiRWLZyrA9Wia3hWWoVTats2Xjbt2rFJenf8FYbmmoNzCbe9VFXxeVaewS4E11qsCyoG6Wo2FF7FCao5qLst",
  "key13": "5DJ7XNNfpfJ7CzMZ6eb6Wm221GqxLe2TuG8T4bauHkL8csXzR2BLa1WfJriYvTAFj9yT2UNF8tNzVvtTfmFWWcf8",
  "key14": "5oJWxs5X5rYcfYtf8XWBJapy89uyZTaDUv8qaW2nsBmR3hNbz9oMsEr2PpAkUQDWTkvFgqaSzRp3wQck4719rjm6",
  "key15": "2XMKoZYLKWRWrtNxKuhsvRicpUdxNabX6uYXsXeUwDU9wZ5aEBXh5p31GqnGTmuKcfkTVLA2njRQgxvdCHQpasqT",
  "key16": "5PYBoeTxXsN4VRkLVUCg2FcsuWr9Pi9Ao4T4LwzjY6rG3PifD9pzMpm3aQJjf1BwPhPZv4KZTVXKApyXseowEMTY",
  "key17": "4ACDSNNZc4Uz2w3NGYDhodynzmxmQGM2xxDP5f3R5HjKUzLWtGLjWLmDGweiSQyMgKcigaVJME64pEBPzEhZYTzX",
  "key18": "2TrCGuyBnez24GipWBWEtGDxrjedGY5Xdu8DWvyNPGAsn6Dk7CnkEwRwtR5ScYNv3bCbBMxgHGEeWHn6S8RiAuGd",
  "key19": "4WZdHtQCSWQavzZbYrDEZgwpHAvJY8pHjEW7hd6ZfkDnuPU5DCN8wyQbpxWCm3uXajFRqFfRi6Lp5Jh7483YLn2",
  "key20": "3JLoQ2N5LE9Pskm2Hdn11cPnrporzNzmB8H5K5iXc8px1cxe5Ejf7koJWx5XizZHQqBUMDedDfSFzgtCieEercwf",
  "key21": "x5SChYxN4hTzxFABRUTbk9c2nDz7HZaBxe9immieBfekFmNCUHqLELMbHDnr6kH2PUWw8oWgShYnxvG29C6vTDW",
  "key22": "4m45XfWLJ9cjaGuzxAYuMb34we1uVw2di4Tuim9cfTLSPnaSwe67aanNMz3wLaDNi14K1RRuQMb5PdQfSqsKNN1k",
  "key23": "2fWD4DYe3yHABZi8vm9zUeU3aG21vjCR6q5deZcGJnbHDYTyJ1FDBFUQdz2GkRwNkwaLVtY2T4v7aJzizknowBwp",
  "key24": "29qfCFJL7SvQCJmsZ2bfRprt58o15KbR5y21DWiaAwRnUPqmDepKyEZRQKXijdwVpPPjMs9yh1JMm26AiMaVNMpR"
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
