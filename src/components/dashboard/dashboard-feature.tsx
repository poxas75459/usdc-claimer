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
    "2kotWMT7ebK4jycBhj4hvnVrznUK9NnKj6srJKdKJ929fNRB3t3TBeHPi3HyiEjGYa8awnfcidTn45uGcNCXN9tN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sUL5u2dQwUuJzUtZRpSSuif4vTRmL9xYQp3xnC9MEnucMRh9WRccxq8dFV1fsaiPTLqD3G9kF1FncnmkLmzM7Ad",
  "key1": "3X5HzSDWiU85PNeSTz34qADG84xT2gijc9ripcrPSKjCMYK9EP8eYMbzajGSZ1yU3P7J2SgXF1oneA9WHkY17pCm",
  "key2": "GtVizANQh2iAu38AkkYmg9S3h1EF4SWq2P6qWTF8RuokjyKKJippuAqvCmkT8CoVqLAaVKpGdxL4BnV5bLsbjqJ",
  "key3": "2rTswqXPy79rzXen9xR5RaYvwJhTiCZqrhoJmovBniezwXeWi3ZZMukpz3zg2ucaMxW3ENEK249i84zBjN4Sowfd",
  "key4": "QVWryVo24bYjC74gGruqtLMxZRDSKmxQk7uAVgriRLCLtYAzhmj1puMWmLE4X6jRQJpiXuf37pzsEKGyuZzvrpN",
  "key5": "5Y8Qs1nJhdhWucFe8G5ibFoJHbYN3PR8RNThLu79pFcdcckGnDHuivHHkRFJkbqnxAPGJDqbkhSmS57CmvFqcj6d",
  "key6": "KN87j89Y4q3v3ToQKSvdoUf2jP6U2Qtty1xDm7Ezm2kuCKk6Ncu9c1fJvxPHvZimK27e47bZFTaEAXPr2PYYBiy",
  "key7": "5VAdVTFjZ2jQ5QCCgkupa99XaJKg4JP8Y2Wnso5BCtYR5nV1Fj57UbMP7LCYY5pio2bocAXj4ysZCMrfZvHDrgDW",
  "key8": "5TaAHNEuZf2RJ73XbKgsm3L8KQDm3E6aimte64WGFyvyAK6s1rfVWcEj3BeGaTR6riZkRs5GQ2oFi1eXmbaWQHZf",
  "key9": "3V7CpqppanA8bMTuMquv18dLhxmMa4ZB27rYKSnUawn8zyejD1B1gis2qDoFnDUuWNSC62MbYfD11xJ2HuxpfweD",
  "key10": "G1iy6vGNSB3AjS5pxAfK9uTH74WZjbVe9e7PMWJnFwN53m1qB9YYqyM8xE4nquzKyLUWRtMLVTBbi3JLAiKowQS",
  "key11": "3QukvEfq2ZUhhVkMwHLPLVau4XrekrCxRYrUyNw1xNeBUaf1XCByKQdxSz8AcWm1irz8pHCjGtKyUH79i4JRL39v",
  "key12": "3RkCnbnk8Q4gD9cbJTrg7PMYkVVCHqTCmabpAakWk5C5FSqSXAa3KwZiyQSjn5dm1b73CAWK5ipoXL7FoV3sAgoG",
  "key13": "4TxwzYo9ph4SYXpFQLGPNEzdgS64119JMH2XHBLjVpwNGBgMfCKNyfxWkt1F5xVifqbTDnNjf39VeuoqaMxFFBSN",
  "key14": "cw578spqovEnB6duQd9GZxmkp8kZ1wsuC2ZjunMYJLX3p8EF5rq9Fxhks28okPEXDrEaWkppr4MjQQb2MCbgwkx",
  "key15": "4CinUrrgdbg2gFwwvKJZaTc1WsPCayXaDPf2SMQeAxVSLyxopUGNQSWqCn5fj36tF2gqNkBsyZDXqva1JHZEEaeY",
  "key16": "3kwmf2Cp8BSd6XCJogeoGMGgSLeq2iLAET2P2BSBnv3sVbzSxXj9JEaB6PNDa1Gvk8kHvq6QvjDwoLW1M538bqVj",
  "key17": "5p7p9jRJUATMWbaBDhp8WkNHMwDBU52BoMEgJ9E2qEoQD93V71Faz3hF67wPqsQ9m87kQ6GL29LeK8Es3RDWDyFV",
  "key18": "3burtcpvx8wj4AQbM9rQ3gKvsfr7Y1mQk2K2iemwtrivNicvmxSmugpWg2chmjhCPLjhP1kfrnjVMycrEsEojBbB",
  "key19": "2uShKArK9dnie8SqcP3aLwsPbWrpuCMXK93Dxkdmnp5zobQTdhNeE2PUybhRAu25YK3DeuHBaF3nVhJGVQdxaMfH",
  "key20": "KqMyqemHWT1tLDnEe86ApTfuoU7yHin8zwoWv6SPopJAfzsWxGwv6JZhUVKVXiCwSHm9rHXTq6JV3PD4rYiPWmS",
  "key21": "3i6aofCX69KDrq71ALEzm7Xvdfweb5d4VLvpqegNRP9azc6zwyeefsj5GtLgW9TMLDQRLmhmtVa67iVCt4UPNzCV",
  "key22": "4bwpNqjyiWbppdTszH3NGC2hNuiavCbxtBDD6n5ScPU4qUw9qUjpUS5nmCX253Qemhz6SZ83Vdcc8G1akjgAcw3c",
  "key23": "59f31TyXBC3pKcrLcqAPGpbc8wVTL5xcaGKj6FhA6s47dEn8KeBo3dMqqHzxtTQFLzAamCJJoZDUWjD85wngBbZC",
  "key24": "3d6ww8WK1hjRxmLrC2bcec3JacWAzYfntcykYtJpJqkUvpNaSaMyLAFQahXD8aYhBpm6BTdPx2naQJqsTDL124gm",
  "key25": "36SCH3zWoPSRUd9FVx1MwYfcnBZiyeoKXpk9UCU3usu4tgLTEPejtyFUbMZ3UV1waREZF5wXtzgrayBr7VxvCHA8",
  "key26": "5ehZmAqjjNnDTmgPrYk4fqhFw4ogiserfM2KLVEzSJuDrvTVj8Co8fFbY9zizyCUUqepHQBQGA49BLf9mxyUFWzk"
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
