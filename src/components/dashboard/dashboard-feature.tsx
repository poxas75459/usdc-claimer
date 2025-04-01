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
    "49m2wo4sjvtKHo3voJKhF3ytighnkMcHKHH9JdmTij1RQdpZF5uab3rCSLYerD8CnkzjVpb51FVuR6ccVf7BcxAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDyNNYXSKHJ9K2D2Ze2V916xCGh5m7y2Mg1hhg43SXBfWxuTmWAogwic7QJ54cGAXjFVPQye2j4nJpYpkuJyXn2",
  "key1": "2Ern7aTxxVx7g9VtTQ9UxxyHXiFAt3NTpYpWL33bwXRnH51VryVMJzNsmWiSmXaNkcfntKbshTRrsZJNyhpERC8V",
  "key2": "5tqg7PprPg8i9rksZFSrNriiZWBbRXoUZpHg1D84vVpJLPqpwMMyqrGK4A49QiqWganaRsUUTgAnstARPbL4ExLy",
  "key3": "3bZEGD1dMYz9AhiHGg4ezM4xzNwTQ2N4nZRByxVw8nmNLez7gAPygF6yeyKPAFVsTxUTyYUd9MSGijZcaAh6knd9",
  "key4": "4gv1VbyJNS2cL6SfuuCsN3CKTKLYKSYk6BjwYFPzSP2AN7iq1wadRNvxcfTSxaCFU1vdmRnPg43KRHmHvWAGTkwc",
  "key5": "5yz1Ma8EsKkJhEturau6RVCJP9XhqWfUQFjQzdUXvRunPQyfSBXgbmxmVeUy9HHcffrFvjouqNkMEiRAZSZDG9Ue",
  "key6": "AX2NZjGr1rK1aoyyS1YJTkm4UNsP3AtrFBgg8TkbMWMi8N85cm6tXn8J9zWBgJfaWddz3grk7QPC6SMffJ1n6mh",
  "key7": "2EC9uK8b7dxwSGrzTbamA6EUqcLMQqpRs8x7JQuVsAD3khtVYnj22xbdxug5W518QdBT5vKggMJjNRFB5ZSyRjrw",
  "key8": "2bgCsYeiMupGdycsqHjmKiPAKdrSXnyvjyiw9GPB7Xwn3Fo81Pty8gmW21xrSfQhZMU7sG2tXDXPJWxwncoHVTFg",
  "key9": "3wXGAMwEfpRzXZW1vFCVPo8EDCSded7y3Yy4pd9yeRPLCexHqUBfykcJwR9Vy6bPe2m89CSHvSwvCAx9BgGd2tMn",
  "key10": "4om5KuYA1v4aX11pfWvNc1Qw4wPXMk7FyPEjLBGFFnX6VKRAcY7i5niQBk6bD9dEMd6my3ANrfUS858KMZ7pTzot",
  "key11": "4chtuyZgTgeb4J8UCBihwiHqqnqwLmNk3WEMvbUE8R4C9jzZACZTuhd8gAyyDDTTYsFjQnipandqAuK132SppwYm",
  "key12": "4mWqDobYhYMUArMmVXBZLvWmuCU1FrWVX58EiWt12NzQ47e6Wu9womjXwGvJNVcrd68ZfvZbX6qcmj9XxwaYdW1Q",
  "key13": "4QkUrsVfTsmdrJjP3kmU56sxx99BBr1fBvQzcSPer2ySnwZTPNHY8pxTmvfNxShtk949SNMU7eSNGRPCUqMEavU5",
  "key14": "3tkj2nzTZ7Aia2bM2tsaZgojGMcaCCVDPNLu2SfHDJuDYEvxEgtHowhM8CqNLEdHXGPvMgPEzZm4PyCBNTzge5qm",
  "key15": "cYCDz8HyuUWzPsaw1RNUsZci5UDSCguAbQAXefbgq132t6JH9FP8wBdHV6WtbakwxZAXMFNGTXv853Bt4Ea6vDz",
  "key16": "4vFgUb8zVQctKRfKpzHWqPyZw66oegf1WRuUMeC7o5SE6b9huYBz5CFo1uiWPiuAjcXZUyhUTcAAGCibqryGYvKn",
  "key17": "2RKqSZtRmcGpvK1q7nuJs6ntDbRSrhqMSY2dJMu39WYTjZLLHqYLuj5fRMJdTpyjYQLkpVvfwtRt6Nqdc7z2cW58",
  "key18": "1Nry2GDKDNy9wjfZSUDKsM33PMrg3FW3JS2DxMZJ1Szoo4M1YQZLJvuRmVZ8GpMWsLidwHkoJKHZNwKCCUWEPmL",
  "key19": "56qnSAKonR4aBwSmxhRga3az9U11G53PqAFMuiceervXjaxzbUAFzZdtGjcBuPPDfhkscZuadjtGx3rEtVwhVvcU",
  "key20": "34HdT1LPTB1gqbqwurjcEA8gciS2EN67WrEsrFrEf7xxfWR5qCJUUxLSkyi2AQS6fxcFpDe91ydbWaoicCiDb6J4",
  "key21": "31k5ZfunjUvms7eeiwkpqk8Rg9EFoLgpxicaxfZC797RfZxgv3rFazQuwmrFcsDR7hvgRHCUBbvgjv8vjxx4qWak",
  "key22": "2hpipZuBQQ5vpP9uPHUdKcY2youNMF2wNCFxYBeTyjgS8sHvKttRBGSSSvnstppzX3MQmccTM81zdaDEzaBZQCPW",
  "key23": "5hjeBUyUt6MHKr1jt1MZtmJCqW71MzvpHEdJiDeRroBHpesAG3q1G6cqserjcgPQCwZn37nbhdR2jc6wLt98wC9U",
  "key24": "3N5K7pvJqfFageGoqT8qb6T8tDPSXUXHv6TEZg59bEzNnsk6nkmDP5LPiZeiG3paWSqG2NNvvrgVkhtr8SSYrhKf"
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
