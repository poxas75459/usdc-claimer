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
    "4knUgXwLFoVvhQVw8UPGTVcPdSTqQEq8vZzQcmmZ6v95KnTbuEugne2yyFk3jZBiZ23WNFsQqNNSRSEvwEuWEWiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rfiYuZmbP1meV3ApCKKqe1FXj8Yhcmzb9zgLtxauoUEFoXUc1wbdtUAwkabTYstKapWgrj84uQuX9A57EJaKPE",
  "key1": "66YgEJJMNE1WXSiRCNfnBbKX8VDh6g35BefFrjtd3CXwwXcxM7Cyg6Ha83VrDDSLJ9GRDfKZVKNYUEypB4cbcBRK",
  "key2": "2F7jEra51z3LNJTaqg5VPB6VoJ47sGFrhZzu5KgyFgioua6ZJEUgAFn1zMWyw5pgWtwdgMVberUqUBTX5vZmFjsS",
  "key3": "41bz17ndtQNHLNKVM2u7birFXAH8cnLXPr2hUM8TKM7348gUW7SGgjTSrUpvXNRE4RBLYqfqPwR8hNeLjGgY6Q7J",
  "key4": "uFB3FvhPKrCF9LPsHAAmpn5xB72jW7uqatVmD1DJbQ2aeNgSNAeotNdRGzffbZvPHXCF78D28Q7W6qTyEyV3His",
  "key5": "53aD5ehDJDKAdq64GsWXoSCgBVeMCckDeqNC3ubmXZrNqS5u3mVaU4mxaVDo9L1NPveNC9jX365nbsYcQFZYgtvH",
  "key6": "n38VQMj1d6dndSUMFFYw9qwu5nTVKaq6UQgx7cmYiCg6YqPA36TBFX3t3P1zYch3unTyvsfkLX986kXskENtXKX",
  "key7": "vNbbLHj2B9iXGnAv4gU6C1iKWVNNfbn5sHSTR8Ugcei5uGXWh3sghE6Pq5ccqT2nFhpFHeC1dzNhbJcQNAnpet8",
  "key8": "2ZTdxQS4GyHDBvMe617NFWcfEozc7FZFd3Afhtfc21XWUiYDaWiobSaAhHkiEVxW9TGp4u54GdHdyU9uzE978hLs",
  "key9": "2d7HipGCsBF1PEr1kqA7xV2N5uh61BLtYWCwKkBKvB2r4EZGCNBKQf1FFft2Psb5cYpYN7CPrZjsA1QmgjpxEdqe",
  "key10": "4vWyecSZ4V4AVK71wTNUznTgCjWYyDfsPfMtKqvc1KFH5Q1HkVsqnh994SZF8Wa2wQmGLKcqdo47RZTjm6XenMeN",
  "key11": "3vD3rE9E3GBtyk11cVUuGwE5KoU2ghWN3f1DxMnpc15SwPpD57heRi6pW4d6xBNYBTBjaMpun6iuoYBmFDtCeGfA",
  "key12": "g3E8xRj7WNuCztAg2LCPDxq3ZcKanhaF2BjYpFrxKD7cK3MBkB27n3q36Kai3Gyf8Bs6CmFxhJ5htzkVchWVQSm",
  "key13": "4noYQu3M3TmQ4T4w4xtgcz6uj5hkgRjDXbzPyo4R9bVAktRNzvbrfm7X5WEaUWYGqY9SAYU84KKmMRutErJ3b7Lk",
  "key14": "2A5zhN22pgjVqBAG5U8kmqZk2jx6RbuejGDiMjtshZeUYLMUiwpZUuRd8uEeN3NBkx1b7UYhYACXomgHGxxUNoJT",
  "key15": "26jPgpsmHqACWqQsxe8g5QVduVx5uHp28fYXjFLV8PwNtAioqciM4bEmch5zpd2SPvFQwyRKCXLSNjwYKc9cCttr",
  "key16": "2Qzj5SejgSL6xnXufsJGK6QXLNbPShFi4iepZNFv5CKz3m7AQ98nFaxWdSyzYkh5PK8HmKLvtmqzpyF9vNxU2zhG",
  "key17": "2P823nUonYzKgMcr9tRNVgVwEVgTxznz3Rmn26wB2KfU4yC3pMWkgwsvZ7tZcZTRWBFqDTbfUy2HkonQetmqfGuS",
  "key18": "2Vz5tUuSNKwNE6a7WQVainerzc4LFsvUG5cgLViLkDx8tsNgbnLmNTuMu35cJTVwAQ1Rk9ZNTtf9b2zCumCqpXvy",
  "key19": "5dcYjdokM21xeUq2b6sp8Hvax2jnxiLzbof24WPsPLPCW5zFFv2zKvdGTQ5W9z6vAwvJamsQBqbp4LqJpp7kDKVy",
  "key20": "z7jjgGkh4B41Rc64X4Uthvugyfki6T2uG6cT6BpFzmfDPJhxMHQWa2r9bQEmhVHvRcZjSM1pGq7bkJwBnTsUw4N",
  "key21": "29eoTiwUT7eTu8vA1MDQKQW2EEnwyCfWNr1zddNCivrXzfynAxs4Ext61MG3NCL2h1TQYTvbGNQ8urqkhM9vNEuX",
  "key22": "2C9cmqMejsxxs5BEhuu61pU3YQvRd5muYLUb883cXj4dCGfh7bkqwF2xb2mPS19oGy73YTdrGyRh17WLXo4pdAs5",
  "key23": "4nHzNNhdL5gxQ31BbHTJjYqpzn776aK29DSKy8qWwcdCCgh1PFRsBq29NScqwSzdb6Atw9uJeMRiGiJoGv2vF1Q8",
  "key24": "4ZDqnyN13uoSCZMGLdF7q3F5HVksjAFM5Yv4XMA7LF31ohyobBuzCy3uf6niuh31djd8A9KSxX8z7MFZnwZygP8B",
  "key25": "2vqsJuGPCmbKVN2nQu2KJ7rehmW6KMpVCpfAjHeGkD7uw5H5pUd8k6PbTmx3NnwowxvWRDcHuU8DTFMAoB6sQUxF",
  "key26": "3PPG55hjgPKze2nxwwZY5U9rAiFPdG1U5561KuL35rWw7Ajb68zvVyXsKnineecWbaCdTfQxNa14G9iq8HZ7SrzE",
  "key27": "BNbbwMEYFwptVf9CigVrXPAG4uaiEVxRk6sPh2epDpwGGTxz4dU6UMFJXh99Fu3jFt8NJS8cT8Yqs2678jGqPkj",
  "key28": "5HmX2kdvJajiG7hDnQjBABXiNoBAKK2neKgBHeiiBYcNNW2EUTA3JCv4y79h6a3ESP7n5G7CjfQVwpB537hvzGur",
  "key29": "3t71yZf7yDLFVeM5uNzK7MyktySaYFywaHMMjSG9K5PvG5fNRmppux7fuZRhYXXiuDzekR7F75SnZKpuTYknbB42",
  "key30": "3HP6THAEPtB4X1k3ymMhMxzH5WGKhCwMAfxXYo7kCMS8kcXABr4TqNWfGtw2aqL7Ned2dnK3CTcAtkvC3UBgc9uA",
  "key31": "3guDjNxaYcTAiKoZaa4oy3nJ2ttZJXLGUk6X25otdXKs5AcvcdvG5W8GicEWEWk3nFCA4JjBPajFFTGFsyAB71Pz",
  "key32": "3AEHMMnCLJmPWfPNdtxijLpggtY4PUWj2c63AmhuSyg2WZLPWnHArMCWkDbdbBahkupZkAUfbov7yxSUDKdj9zsG",
  "key33": "5xyHR1AZpE56EjRkwUvWPzNtX93V4Tv7znGrSMFam2wPhb5vTDa6CicEXCB1LHvNh31NagWoWVJkS54RLQSepGEv",
  "key34": "5Qw5RJzJB9jrSRd53krgitt6s7ac4LFTsMR9K48k5xVNjA2Ma8oiXQ1yRx8dxnFLhLvVz2qCKcUUSEyu927P1HT7",
  "key35": "4KPQKDtr4wFJGG9Q1GB4PaFXikAur3N5ZkeQmXpQn11XStMVQ88PokdtZj7qj7Ru8HTit6ZdSobZBmS7iUXvLYht"
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
