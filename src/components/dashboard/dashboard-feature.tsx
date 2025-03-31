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
    "4kCT54NQHrJnZWtFHxGQx8AymvMz2QvX1dKCoiQZx49LCrjk1PhNWb2YMwoamRmkLjo6Gscw9zfLKNPU3er7S2XB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r5Uwztaoaojm8nMz6G5hXwfTqPrPHTZ86CgcNudzyDJDqp3x87YXpif8qwqAJWYRqQiUXLHGQoFa8n8JmK9mNre",
  "key1": "313LAWpW3MhjYbb42o25C6yBDTQzeH3k6Nw8oTs1pQkfqQNiaxhNq3zCLW81gtS8Xr7eEn8SrTi7Zym1NobN1RNU",
  "key2": "5Z8LExygW54DPJmhrEvdvionkYWnxccsjcdSiFVWxsGX1KREkV1ZitthYjSyz4wWN4n7vgCS5MS7iwgUqowhmwT4",
  "key3": "3cpZmysBCLNaqZUuH5DNVoiC3JQGkjb5UrBqcBUgy6rVbtnYjpmSPxRTRCLjbKzJ7gDSsCWPGYaRXaBDzcfsdA99",
  "key4": "4aPnyBxyFkF7yh8znHq76nXwccjypiuy46vpcaVYvgvJS1putmL9U1GJbgE3kiQJMUz4LDZQbrw8v1yRhuMeHdLv",
  "key5": "3CZB9rDcPv3T8BaBGTMYoBcAPmVg8nvUqSVqVVhGpeX1w73hgACW8iC7N1YRuDepEMkosLFiYMUxpGxCM3F2eSgz",
  "key6": "4dU8AWHFU4KCEKMscXstqraYgwAMGHVu4vHSgTbcAkU4wdQh79TkvGGxXkqG7tC7NFCuVC4A7hKz1ijkdwUnNncm",
  "key7": "rp5naYC75vG2ai49BodZwCDEQHf5Y3nj94UjH2CuEn7Mp4mmoJscfpLdRMXSX6TFxnvr7gQPZYKw9yepcGGzFMQ",
  "key8": "5aXuXZjMtKx5Pnf9bFajatrUnBuarsZmiemyXupqSc331Pb9ubrZAZZWgvLCk9Ah5JR11qNbonPaBhsW2nWEsXRy",
  "key9": "3YSpKLHGnzXLV6nTnzJby6BhuK52toX5niwnFSeZqWu5fk2iztsScCh9uPhMQrJvHy1QQYkQMrEz7ouowGEQPpvP",
  "key10": "uccbgBUPUBxKmJXGw2aoXwP13axt8fcZYJba9GAT6uNdM2dd4krm8aG9ixvnynjbJzgS8jTcvdoZqtQfxnbFzq3",
  "key11": "3CFZG44G7pTCgijtQDRMbzBSNUHRVwUQMYQ81DFBqXMSbrURPhvXWW2ASUz6ai62Faq9fGrJ7UZrkvgc9W1MonWR",
  "key12": "4UjBanCk9WFABpNao97Uavu3kv8w7CgvKVwbWdRQhgpJVbxHsoeUpNY6GgedyRbUz5W5XEvmQCrGVJhhbWzHxvN6",
  "key13": "3JN858kCo5rs49SHnMbJ41vXYZpuHrTN2SkBaGK7e1kLVFJujWWftWCmBZR1wz4Y8dE5MoCHC3UjfEE6wezo69Gv",
  "key14": "3qF6R1e8oDPejdmvYWLJ2YnRDQQ9HgBniHwyP1NoiCqj8q1zJHv7ZNdJXiNVdnXRwiHvgTRqC7Bj5Neqvc2c9836",
  "key15": "Ds8CZT2RJ4DiaSSLPJjvk97KLFPEPZ4zQt87TxZD2fQkSJAMHiDnCxpJ9jfEAL98Ya8Hx4x23WdKgJyyDDoWNiE",
  "key16": "EcVdcJs9HKWTNacaxPHtxVoGA5QSYT6Z1GXnNSXAPewHERCp2HmBG8MHh1PCXiJTPEgVTAN5jPChSNVKi6CnvVf",
  "key17": "377DCzVht9nisCHt3KjbBQSqF629a6qKX1D4A4697kwea622Y9oEG3VF5Z7WXDk18oMni7fS2Ej1BQCebpZzaqtm",
  "key18": "4d3KuFrLop3FS4dShnQ9inSoKD7Jt5rUMP4WgmqupJJ6fY5dKLPeiKDEbed1UN1bKp5r9ofyNCx8LN353mNqCkPp",
  "key19": "2krzYcKgYxcMWNzANrErxhguP1szCeLniDSmjRZMSEBFmEnyzdhpga8oPHpVy2Vf1YJqb7iJn1ArVszyde6YdzPm",
  "key20": "4pHYc9gKvAfZnBGChee6r6ZMuMP3y9vRFt7Cj8mu1VdoZdNNhMHazhwFXwcrdzAXnBFDxBc4nBs99tvGsQvHPtYq",
  "key21": "2gwKfR2RH3GWtVXiaMYHSd5owGuyuxeyXGUHLRW7ckBLaXaxGf4uoRaTeK8QUyEybjzZeeVUQuiSpVXnKyDLdt6T",
  "key22": "2j1yppCBV6Xs3DnsMXSYoaj8vd2H8DCyE2oZSYttrdppoP2w1qHofBg1mdSz5drEJGiPHWWaMBop9YzVVSDYGpiv",
  "key23": "64VKr9SdLc12EBAVRRsb6DtfrcpskHCQWn6k37iXeXV6zrUvVSXcGVW9sBbnwK2UBEAhwyAE7toXwkKnA4SZqmZj",
  "key24": "2eaWBYz7pepiksL5ti6cSGJaFGd3MkE6UKqEPi7i7DXCwUrExmihKPgXAV8B3HztKrzbzXWut7ny5LgttxSULL74",
  "key25": "5KacBjZ92P8DJEmm1vSXxciXWbZepi8DUA8xu6GSCFEu7kaW1doUiFVaKZDfxMAVyEhUXwbJHm1BiGX89qY3oZ7X",
  "key26": "y8S9qV3AgwnQL3CwULV9cv5KDEB3erdzLNcpuhmGmbyVEKJyzmTgCgc2mzAyXzVNMQ4gKA6rvT6xkS1b7QcRKpU"
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
