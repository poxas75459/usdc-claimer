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
    "4nLLKcBv3N1o3cwjZxJiBBEHCKnCrRPhS2j7sQgL5LaHV5nrfx5VhF5eWrMqbEi3VPTNKWtoApVXeLtjzetpWPJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mSMJM3rtga2HdNRbLJN1XvpTEha1YCE3KMackmWz7t4hWJ345hisFrWEgeSe4cnAPdDgedwRt16p8pWqBofCms2",
  "key1": "2xTayiUuaqGWs6w4Hq4sLTcCh6ohxrLC4VYMTQCABWs1Sdo5XfqdbNkCu7v99GaEa5FuSxsiBpF94DbRjgLDrVJZ",
  "key2": "67ooTUuJ7jSRdL8Fu3N1pfqtnzzdDepHCiQAkPJrFnWJLi98V6FZpfXncAsXsEs8Stc9Wdzx29bqmtqNP7kUCcHj",
  "key3": "3uJ4bPN1EpkfTd9ixoyrmXEWfE9mV99PtPJfFbXbQTLHsGGY8u7kknAxxLaTfb7FEFVhCwcbgGdhVCm3YJ4J6ofU",
  "key4": "3vxfT6JdzJSW4DuobdAoLDDSDuZCxfs5FMJBjYM4nycCzzBZVy3hQJe6jiD4QfQhU8aCe4wqppmsUDpihWVAaQnt",
  "key5": "2fF8VXAzHMCBxjh6JC2jRKXvx8J4PnYVJMnkkWs1PTVCmu9MppSgi6XGPCXAoSjU7st38YwmS2q9heqHoTYpETtK",
  "key6": "46tn2kUJY76k8sNaoZETWP991tDEcY7AhJmbw3ko83duo2r9LLoYHC43jN6dRiEFq1MC12hnsZzssZJobCBHQBxq",
  "key7": "8wNdu7uA6xMwHwKM8gcvNWXmdKo8dQEJad29XCKutE25gdc2skiNEezKVh2PAaMFMwYkYaQqAF7aNnPyhTgfpbm",
  "key8": "2wst4Kr8VT2d2bZaxZCPDXVps9J7SA3s2DkexQtxEGABv7k5hrox6do7g3eiFKCd9Lp8EEoEaEoV76bozNwaLALm",
  "key9": "3ujUrJbvdBNC7tMEmpP3v1s3Ry9xuA412GZPHfsurRkee44rzAbxS8mwFfQkXbKaFkENeQLwd9pFFpvox3mZcKGC",
  "key10": "2jurSwLBsHyjLtHEJVCfrwAg36rPwWKrhthyzFbN97CgbNRxw9183tYH76ctDR7ZkpLV53ENvrXr4B3hnLD2DM5F",
  "key11": "2SKHtYiEcEaZ6nNDxqivuGxzG5mjpoqMTBSAu29ZGpes7k44A6HWS6L9zFXMCFvhHiZc4wKMXdiYYT74hQ8KrzSX",
  "key12": "Z9BqBAr1xjSmb6PmvyhMkdL5d6h4qeZNsq7gUeyEjPqo6WntusKWVNGr6LNXvYKp8QRkTbv6DFHHt7ebftJiczs",
  "key13": "2NQqYguVpcSzA5iiP2mFt172NhhVL7tQg1gfgjDVM1acLR8ksdCx6rx2qH4RiuKMHqGsgbM7Aug9cfFQ1vv3VSyD",
  "key14": "4JJGSu21BLZd4d2rizFbXD2DAMxDFJzMjA4StnmYuTq6ekQCwwdu2CFi2D6uabvvQefRVrHCMPLFWz1WvuD6eMRP",
  "key15": "4uEcZQRGVPCqQwC6jg6NB7NS14MkhEL78vQfA7LzPKAofXthCGCC6PPq2T2Mv5vGUzzME7o2dZWdgdpq2XqTymhP",
  "key16": "3op8SonZNxi5wSagmbAK9GZNFtQdvxjjTsgoaCEU6eYgMfm2Gxq4WzjrKFxEHhaivmqYYvJCipsVrXjjxMsodP9M",
  "key17": "3DYe4yjScymu5dXsN1arBjxANGfJTjetNu81v11A849v9qWLAy7rCikUCirpunFhsVjy2PdViMTXvN1H2Kt8n1zs",
  "key18": "4mqeezPWF5Q4CLynxu4n4VVu8dPywPzkuPCDUzaXA2viaaXL7CiX2FVUiBRYhTpxVUPRbij54wrjkqw8xsscshjp",
  "key19": "5WDDnKqKuyJC6J3AaTA1bU9NY9yB1YDhKaYgRg1d46H95Z8cXFDFvhaDzXWagLT4z4zf4tS9Y3WVZR4bHEdHU2bj",
  "key20": "4LYexqt38mLxYfkEPZ8fqN2pWDE2KQtX5CaPBQ7aU7Ft4vZ6Mhhj6X2VsKdzUF1rftw9zxS7kvjVqeWdnyfmCpZZ",
  "key21": "3mxCRysCxMRcRJW5Rw8QrDSuya3ZnQFBShXa9PXNNYuokFqd1yztrZSikZ8PcXHuv6A1uHzpW5nVe98Pvu3rA8Lv",
  "key22": "3E8uAT7NgmtbSDYZSa3kj9M18tkKUJAQPydVrseTY62tGd8nkY8Wpp2Xcz5E9dwPe1RHL1Hf4biT7JiM1yZ5TUvx",
  "key23": "4oCenHxxzT1c88P6niXxSLPkiYcMEVzVYrBTQT2wNu4XMCts4ZMCpa7Kg6mHAYn75kiHm7eLYt4xJCcds8csGiJa",
  "key24": "4UxbnqUc24g9tpeEFTVWFVdNS54RT5k3EiNXhCjWQN5tdvTHSRocf2RpFuApUsTTDfBHFPPzagYxsviXW7SfXd1R",
  "key25": "Lt8M2GHbaYRLK7gmPCESyvy6PhrZm4fbHzxqkyozijpqqKD232Z3u2hAxyVH1aEJCFtcQJTA2LmGEiGLS5BPJrD",
  "key26": "2Cg6k7L4yJfBrhPQN5GH5KHXZXT6Z11vf5FBvCG1UQKept3S6WM3agaBsVs6AZybMmeA9nUXky5PfjEB736G3gAV"
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
