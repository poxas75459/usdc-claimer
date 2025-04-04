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
    "4XFpJVvERuVBHjQeFf6RQTfTMCv2nzpgAVtop4VuHhTC2D7DTTsptH79LDC5XxjQgmQDUSbEmkhEdxg1aEMUiwSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPk13qiYMsLfSj6AkWHZgLRzaujr6zvemUtZY4aH5pjDPno49kYH2KhP265WTr7bfYQMmBWG8D4GN7hwXT43n65",
  "key1": "2VtChiWM33Fi8VoKGgyUCwAB95iERKZAagdjKQMpXkNnMUnpzREqCLYSp4Y9NuHVjVUT8XVBDv85iJp9pw7VFshD",
  "key2": "5gxAEuihS8bK8LUHdYkmnsXV5bEHu9RncURAX5dkEPGSDUZruWFZhdubUQSDF3odavJWABgVSHM6HTGuMN4kyUtK",
  "key3": "4pxsqvdw5JKYyiToYhp2HhuWqFMexNJRNgoKZPNdzUtFJxbUXMdwZf9gRHvzzRa1M7fF2Kf4pQB9PzDqLsD26BjV",
  "key4": "jWPQXy38vYVrmGsuehj8zWM6bvXMraXNFFL5x9idJsNJJwnUeniA1bySiKmMz9xQge8AhrE5n7qeXVoebuc9c4v",
  "key5": "5MiN3soMqLb8wEUe8CYypcTC8LrFQC9LLAkgr42EazLxzSLGZiDvocmTFaUQJuPNWUChTcwztoK4EPFJqjCtVtEP",
  "key6": "52oDaWyKn2v6ZzMvoEe6T8dDXAX8rAGCpmoqVB4hyvXXvr5PiybTS2w2dvSMJVvjRWMwDQKEDiryN8TfxSjALEnV",
  "key7": "39QqSehUT9AtHEW9P4Mi6v3WbCjP1HmtA3U18MWrVH3x2aq665kyCFAzqkqevc3RN9dQQvxSsudntgJMTAZ12rWj",
  "key8": "2fzc857fQEijjYShmGdHCsjhYfMqpPYms1gS9FLsBNSbHZonCddaajg7qoGYHK8kEXEKUAm1tsgry5dS7MxMDPTz",
  "key9": "4xkSgXGazk3jMNeCAAhAMcxvcTKpjJYkF48Thdxm7vxWYuybJA9bvDDzqDkYYHDVD3jFQtTKXFDKjojKEHcoesMx",
  "key10": "2ur6BpNtGfJ92dGNc4JbM8bDFX7sMe1nydCGWTYREohjzDZd3WR6DiWjWPGCXtzzef4bAhi9vZzGtfUoPaVHd7M5",
  "key11": "5pnGyvhUBpRzFeCC8Pvgfaq3vXPpPghsWYLx9D6sxEKuERCdHY7ffKQM7gweKqbiRf7BLWT6pNCH7w5bqqT1R3NR",
  "key12": "4ejhqTJMGgxdzWdy2234KMBUFYkSVfVTu9yCbu2P4G6MPFk2LeM55Z8511DV4ak3AqKbtA2Xvq9J7N2pS3AqRu8Z",
  "key13": "4e6mcCu9B7p6G29PxHr6b8MdFApXXXZUTSy1D1tEhz2MeTLXWZzv8T9ZFG8k3YfPgAh2Dd8971kc2qDcUu7XEVR8",
  "key14": "3ubAZiwGEQUucx56U7azQe4ivCFTtB1UUiRLQy9BVWzyXfZFkxnA1Kskbb4Z1AVyWxiNyCX1AYHz9PsC9PVvvgvn",
  "key15": "2bRuR3zSzcNqyUn5tC6USyqwCpQmV72jEYnytjY57FA8AoJgQktKydLhbdk7zygKcZ7wbHd2y8Ev1WzuUtKvTd1g",
  "key16": "KJzHL7EBuhex2icirmuo8cX5vrxmwKLDYoAzcAn3MY9cFzWpNLMCHpXdU3MigXkwBshA1DKjMKXoTWiuEHGVGs9",
  "key17": "4AHGCG4FEfBF4z6n3oJohqwiks5zmb7Qhv1Z4hCkgndRoyT6n8Bi1AwkMgtQ8BKxRgvoGnEYM4qtKXrzymrDL6j9",
  "key18": "GJgvzjHGtTc1jgUEmq1DXf4WBQyGdfDd2J8LzqZzXwVpVeEGf4sUMTSRdYbzYYuDwxYcA7y5Xhmb6RKjPriRWGK",
  "key19": "3wrrmF3NUPqksyhUfkzgvs1hYYd4zfkJci72doUH5M41fuW7aN8bh4ATvKzFLvWSLR8vRkUyg89NTDThRcCkWLts",
  "key20": "XsXGRaCbAEdM8oe86dDKpHSnifV2bXAnRFKxNJcFGo8YiZDz26cjKk2aLD3AiHwMBiB5TxdN1zLxPjPnk6rKCHE",
  "key21": "5CbQezNc5M4AoJ6s9pGc7NxAT6wEaDaJWQctcogxe4ZrAB6sJZtTSsS9QjZaJ1NBc7t2SvLEtMjFLjyJWwPAbZAk",
  "key22": "4JiJAvEy2JEK3BWuEUvHXZayhFzK1qzkmUmVgehXaU6EjdxYNuEBofW8pWz53w93KsMeVaPFTxG29p4kYPCaGDnL",
  "key23": "2isYGtD58857ckJpRxYwFRam32N1sFnpeQGnzT4K4MyKvM52cyNbe2FSKRVvrUjpdPgcy5h9RrFC2d7k1ePJVMPN",
  "key24": "2PmTh4f9thwy1tWzyBMj6rM5MQ4zYcQ4BRPEruknALXt6sjnH5QiEiq83FopYiQjfMwScwtPmYHNm7kivJk3UcFc",
  "key25": "2SsErm2QUY94DpdNo1WE8xo9MjGsgVhoD9eSnrBDezaQ7szMEokA2DjxpMZUnLKLSTh2gSt9oEW4uHDoTqXrfWCq",
  "key26": "3jC88pXSnhYrTwX9LABaLUuQJFGka1sKaNEmcafDMhuFivZwADgaNUw2YEScSoMFARGUmieoPomKMQp5fzbSL8WQ",
  "key27": "3GqiGE6kwW7T6PMPuqgTaFGXCfrX4F77NQyjeLQGmXG1MrDbCTPTDXw16muoEegAyn8YKqsvHLjnQQdyqxfxxFMU",
  "key28": "4W4pcyXdft4SUn6Wvnfomo8HHyDD6baLN3sGLZoQiyDf8NK4siPoegKYQMxtp68gGPPbJzSwt1CzBaTsApWiqfBR",
  "key29": "2Y27gys1cuyQX1V9piPtYCANezhVgT9Kw6s9hkhyMCEsKJEcacW7jEVywGmVpdWhL1AKQtXMn6h3cFhomd5WkCXa",
  "key30": "3muNG2NSYKQeGx88bmZS1ebgGEbFfHcQWPmHNUDg1QvFo4V2yAxdC5GJBRPM7Q9rCgL58fAgAMhZzsP9kzG5XALE"
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
