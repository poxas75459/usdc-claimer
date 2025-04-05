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
    "4gtkNs9Gu92gxHSGVzsn4iHA2VevjnpGo4oaibsargNvXyZ8sjH4JN2Vhvsj6Fzmpgiho9Af3SgPQHycjXLrUAvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DpyuKyqgooCe2aMSsiE8N68T3RKGfKX5JGgpZ9kuphrvR572h9vqEeyW5jpgZchPhfyrWwnkXyE4EsaxwYTMvPb",
  "key1": "3uCMxAWnkoVRMQbmSBhQmmD832ECSsjr1sS8TGorjby3uKfTYr4hKLsN9AEDx6CLGkmPZVQqp3HbGfC1sRZzGidg",
  "key2": "4dbhCKXmmSBK8sie39QsihZXem4FXm7dP3J7NE47dxjE5MS72R1dzLXT38anGjrLAfcnQCKM338L8Pcxj5pVGyPD",
  "key3": "5ey7bcvosJkG7bk8jUrW9Yv6VWVxKjcz8SkgfnVBmEbtH6sNigtjesgekg9mVL9QFHw4BfeHctF7vawp9raGCxjJ",
  "key4": "5rZK1cSDeDRhTcbzrFs5JgbjvdhBH1fnKbNqxDgPoDFV1F9TSqjciqmf1NhfbjJN4hgYMu1ZiYRD2owGE8MUEivK",
  "key5": "5t8voNAHELGEwNDDk2n4PbBhyBfAYmXPuQf6i34MppaEkjDoPWJpaGKdGCdEfNT48wZXCdBTTLXzrj1TU5yGMZjW",
  "key6": "SqTbvdCpb9tSwPSSh2F6ETfsLkT55rbZRW19hQpf1omRKLWpCVt9Cn64ZHpkLcVDFr36gx5JWrSKaLDSAtYEyD5",
  "key7": "2RfzY8P2aYa1ZpYpFXqST5oyKp9m9MBroT3x5UD43qC9MBaQUcPNK2hAE1vrssqBJofmfmH8td9ce9mQcFYmicU",
  "key8": "5uDBLD9BQ5XC8i5C8nNBQQjrSX3rAzoqpfPMXHqbRWW5zQoxrUwPvUmuDGTWnJKYDg5C9Aw2txT5g19R4oVn19Ko",
  "key9": "4qXZrGHRnpqsky2bHQ4ErA1oDWhZwhUDANzm3x1ebtND3oxt7RM2SowV11DpKCZ4qSLpeKxXvKB1yTQPWRCxbvrL",
  "key10": "5xkUuzb2CeNU9zuPtGZFmok4oriHmUSfsXfq3VRzQJcMQHQos2BMXEsWDXafQ7ojdGaz3VS2DAbHtKP2isoSgvPH",
  "key11": "4CFbhbPBsPcyKZ5cLdVkfVMpGBXQKh1m3jjBUL6JMwKf7rYpSTyp53EVLx7sAm2dB6zVCS7wSK3Y7ZzfGig6iF5f",
  "key12": "4KyfLLygpYvaSCvDMDvBB14JvyNZ19UdNP8f1E9C6bhdrC4QXrNcC2bZCQntL3L8jhBAeLEBcyThxRfNwvbdpVbT",
  "key13": "5EMtVCP2qx5rsTAoqzZGjumAwp9B9L3KYF2Sqr4opPjFTpTZqywCaMUPtSPHP9zHeaicjUsoCDNdQgXZ3LRL6Jh8",
  "key14": "qtUEBbohnGzcHHkoYzSNFRh6XnTjddNrpkBB1jdy4TFpnWoZdKDvCQxkBQrf4DWYaKfPznkQAcLFGEz1SU1jnnZ",
  "key15": "4M8t6qUmYA9wwrGpPQQHk9EAXbHapMGs4zxUE8nbur629N5s4cHggCsW631xyjf2p3tXRsU2T5jXGetHxk4buw9q",
  "key16": "3eLnYYzamEv3SfDebxqdUDVQZDFUh4R4rowKW6Uh3WP8W1S4pbrn1mdojqbkfYyHrAXStAzgVpPGmmDkmXwQKF6b",
  "key17": "5xztcMjL55yod16WrqJkJJzhmPvQe8wCEv1HGvurjGuW4LJfdziXEHWcFDXX8zNieRe7L87Uf5LmK2mPSN4Bvd8T",
  "key18": "dvxyvc8rrF2XUWrLeRJQ5Ruyaargb55hVrBAH5d8iP7W96NoDqtgXnVEK3DMTkVWgG5XfqxWs6edGZD5TnLucNF",
  "key19": "2cDvSPyfu6CoxhrDNSELQip5mkWyi6cVAQpFREDiFU5W9EVfDJybN9hPTePdx7nBdwKYjFwLQRMCiKzV1wGe9jbD",
  "key20": "2FQs5yWUEYEJ5Xj3QDoaZgYHVzyX5PRwiHnh7pD6BRqwzw3obVau4bLwPKVBC8y2ApDMdBBELfkHXagPAZdZXy4k",
  "key21": "5NF68k2noPPMbZiAF7tUXWxegwhVuggrX19iYMLVcTFAkKSUtSmVyesQFWiDP6WoZQDccV9NREpRFxL33uhMd2Zr",
  "key22": "3yJXb6JqLM9ibboDmDB7MvUF5jHexQNuh7r8F5FQVGtWuNoQqT6xFwxQLejRXdFAEbfErSUBC8pLQbeEs5zvEbnY",
  "key23": "5GSsBfWfw1TEgU8iR9Qo3wnvDgnsccB7KCxX4pb4PLd6NC9MnzKPvL5EBAEUjh2b1PBUqE5D3rJixuaJTPXGvPRi",
  "key24": "5Z5KNod9dRHyomZXKGWk3iQ8jGyeDhALZRVzj1ePKgUmbmJyECiXDRxjywwfM3aU69cTWbz3wZJbFKUotLGFYWZg",
  "key25": "oT9UUyvEMwCCPpJHE2oHGJDFwWBVGWXNBHfuuR8GSUNGY3yzGbgE2XMXcN5CHeQAVMXxy87MpLYjP1HrH32jq1h",
  "key26": "PtTuYoxEv9skLhsBRadW3HvqsEsoNL1FN7MTT635MK5Vw9kjbgBRZRwni6norLhmqECrWVaJFVkPqFSFMqREcVv",
  "key27": "4SZHUk5Q98Mce6cCWbFiEeCyXrQVLYq5CCfD5wykMCxUKJ6hZdD1mj4S4fSR4hzS3vgnwspUc3mGF2xmHye5C6GD",
  "key28": "Sq4dZUV7G2ZQwy3XuLKM45NSd91xL8WvX7SHLkPxewSKT7dPwmFZFMvM5S9XxuaSpwWDfxwrotKV3vu5M43vPcc"
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
