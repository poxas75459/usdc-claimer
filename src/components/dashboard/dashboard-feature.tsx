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
    "3yQmexJHdWb3xxC6Dd6mcTjjgSWmurqqrkbLinw5bA6ij2SjE4HVLH4FVyLsZdHBajHAQkB7roozeGh31WwPDGTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DduhZZ463o7Y4kqQHUdvQ1p1SD5fVep9j5bNZtVybAJeMTp2caXwgkqz5kTU2EfShhLTMiUxfQ8gQAdiWSBgB4W",
  "key1": "fQgdidzRKL7YxRogb4jnah8TXfuNRXbQnv5Dv46oHVYF1miPwGU3b1XcBcp9BK4NXAeFRwwFnM1mxYhM5WnMDzR",
  "key2": "4zsgMuMXPBEviHkEfhrmgxvL221sgbmtjr2soj64yRZV14iTjmeTV2dx2xEnEbZFpoJZocFUcXqkghdyWzmwXty1",
  "key3": "3PG5sjL4TQcuiFb6JhrWccjx9ppR9Sq17KnQkexJeVFGfThymAbvyv9CFMmMcxUMLNVcHJBQmcMrW1fE8JKUBkmA",
  "key4": "4nMvQG693gESW2cCvnQkcvDdi6rYfTuzDXHjgxqMiuvLo9TSnwpAMVfmUdyVqwVVsEFXtkP3wWFQ87BgHPRHjmFD",
  "key5": "29yyVUyFsBLVGHB6xz1TKs6MQGNMYiVySa8pZC3ReroqieZQTfpTfDANPAovbwTXUkgK9HR2NnVZj18dZNnArD5Z",
  "key6": "226DPKvqmfpR9dVuK2bhtbRcjy6do48HEGYuKnfxVELtqQDaEEXBRd9K8SnZL3W89XapFwfrL3CcPwJYSewdoz9d",
  "key7": "536RqZh5ympArMJE4Rk2rrSLxBMDm1sFTuDcq4LbcUf3k7xKVRbrpUcP3cEU81V9sVfFVQas6oj5fniLaBzQ4VD2",
  "key8": "2wWKyzR7dhyMt3Zyp71AuFoznCmGSjpkr82ziDGLDWMyT3hUrQwdTubDTyat1rnM4auwSaYYHRdjc24tHc85hrb7",
  "key9": "353ZJeuZPCeS6PSmbAn6Hs1mHtJiMkTLPmk6BSKqPMBuL4E3xfxfGCQMMcvnYKWqWvSswWkT5aFu5UyUsJ5nuFDZ",
  "key10": "4kCPVYbjRdG5hpbKQWbdDq2JqUQUMLRbMunUYFPBiVykCJAj4WNWd1YP7gnTmcPazikcxh1UKnepisSsPt2f8Guk",
  "key11": "3HmpanyMq2XT6qVRrJASMdrnZF7xdNGjvkHgH2PzJQGabk3Bcf9iy8u9nZYqXje97e7dd37rCvk7U7LpUBDYYsRp",
  "key12": "4vbZxdxWTBmydo8NUUmk2jJz24f8gDuAvBcqbzELZt7BrJpLD6npmhEpYonHvbCMkJpkQ4cCeVBKF8p7uZmR1oUS",
  "key13": "4iPsQkBUrwtXfuYPHM9pMgR1kQtnQA9conACxpwRJ6ZN9Ve6SZrh6tpLrchNsjmw9us1HGr5FJbWxeYpdoxEYWjv",
  "key14": "3RDXUWuXFxZR4DwZJVUu13heQUyoAAUQybYugcriybLNBUfDPg7s43QhHjPdhfgCozaK9mk8QfaJmTdqTu9LV8mf",
  "key15": "5gxEngVsX8MNXYB7haSEo9g2LUqbEh3K7iSU7uWRGQi7NEJ7Uf7jScbQnZabBrvgmVZFueDd8eioPpp3Sp64A5SD",
  "key16": "qxNnYgPSrWSZuDY4gVL66XvteF52545ykR4QogMMenZbzuj13Aiko38QhcpVhhN8eGnu6rZLH9FfBE2EhsvgdbC",
  "key17": "2ytBmT16j3XVGGFGTXrB1wBAViwvjX38n7G9NbvLFeDh8NZtAKSk3xgYTWqbQ868mtLK2rhZs45gbSjvMycoz6mQ",
  "key18": "2kW7pZijBaFwEdRnDnu6wfE8vZemagLLuTxzBPhRs1bNsDpbz3U4PGp6TJ2LH1FijmXsA7h2C3eeUzew8Mkpef8C",
  "key19": "3bTPXtug7f2dqJWDwGKd75V5WEXjq5cfP62zHBa4giC1RX2qsotSYJMUoKkTeZoaBtP9ko78sPnaEiyyTBRpSyM9",
  "key20": "441ZShWLfEfScmRypAgSETpt1geKn7otK32DwHRH9U5JZDQ7DEyejdnE61erETEzyqGvS2PF5LLnWpVnVgsbcoe5",
  "key21": "2vibbsBc2qLQCFhrT1tJwWJdGSYaCSzhR4oW7mmZgGbP7njrBkrXrv7PCYrXPfeRVc4kQPRbgZpaAkFEixmeq1o",
  "key22": "2ARdmwckheNpgwQN7LRcgRgZ5jk1iyN9skFLXKFhDLn7uLau3p4hwtYAaCVhstrf1JcU1qDGi7NP1oHmYAAoNTnz",
  "key23": "JZRTLSME4pYUuhd4K92c1dDZcVCq66FvLrqjCCq5MtW8zrGFeTNuKEQoXFPDdNQcpFrxN4Lt2QhyphuapYMV2Rv",
  "key24": "5YktWMo4GBEE9JUibGsQ3XHMTqUfPaEK4udw9wJhrRHmqLrKwauZ3VUCY7DyJXoosfkmG1Ws8JoaCsbsmYQQ3dws",
  "key25": "xVFeDyrG3zc6X2sTprVTTbJFiKaKquCdAeveZRXpLjpbtzGHbgFC2YJa5LSEH5MQq3veqHTR5ehUdGPd1y2SGcJ",
  "key26": "4CcsTEsYG34n6GJNtg1eZyUsaUL1NDUyyRupCZ1N71BGbrstg2q7sRPpoAUVXM3FEaF9ZAHjRmTGsVRQdVk9ug1y",
  "key27": "5wbMWrSF3LFLvPZjWZUJbpKUi1CNDoUUfA8CmsLHQsFELHf28khNuSQpgwvQYzDoKPXkwLmK5Q5k8MMggme3FKu2",
  "key28": "2DkeZb62dF28siPJc1RUuNA5Y6w9mUXH8UXXvYbAwTRXMhAqbreaz8RAXttfZCYa22PRaCsUzKDkbDFcMVGw7hxy",
  "key29": "Lkd6bZuVS7TYErHdVSLDf63Pew8kJZGhccVNqut1SAvC3TTzrGj8EcYASFN8LMkCmx2VfFpBtBgrugr6WVXiFYU",
  "key30": "3VPJXkVdrpT1RYMRBvCyfbKe3CNpju8m6Fj8hiuiFyrwgf33QzBNPy68uZAt6dynRERuEDANh4Z6fMoMLQats5mE",
  "key31": "8Wn38eGaqK5Gnjb8d1JVZ6z8xVUMskYdVnAKwsKRUB5ni77Z896gH5pYj9usu2v1J5K4Sr7VFh9LQfe8dG7TQAj",
  "key32": "36NSkNiuLkptHa8ETgFqPpuxqzxf1a6keYXwn5Y7kG9wRvqw2fmg5KAgydM32qyoTFuyeBfMpoFWgW9AvTSR32jt",
  "key33": "3MZ2Wzj9Qt3XSeiDYtAM9LfmVXDgqaMP2Xj9bVh7Tqh5PFcNSAjovmsWUqGoJ5Uf4Ty2FxgEXXD1QLeWM2VtzwLb",
  "key34": "3BCAXgrPeiY5REESoJGXXWvnJnqroUbQX7vSoyw8kNb8ysfHXxfreRKZv91cL4u4kNKhx6hAXeHh9A7TXBWsxQSj",
  "key35": "4cbdZ2cTnawtmSWwBrsHy73poHqemkqjHufY79wBCQe2X5epugekNfNEbzXpmrXHGmZzt6euAziLZfDckbV5f2Rq",
  "key36": "AoS36gE2LkED2oYmv2AsKJsBXcprCEgF5YSRtLtQk4U86A4DjDf7xxvj177yB5dJxD4HN9svZq2SLNxJhDpHFEf",
  "key37": "5pPPeK8mqskQLjHbEKMkRQnC1TRGE6QHziAPqMXnzK4TmVf4pY7vERGzZPHUY7pzj6ajojXYRp45wqxGgz6dAh9r",
  "key38": "1itJUjJmiwfiVUXAVZYy6mRYVZAcM9axuz1jbSEGHjRtdiaqEVUUoG4B746rPd3ppdGiqE7nt8XaMRZcDPQGMNR",
  "key39": "2xLEVAK1MW6JHvJBqjZyD9aAWcUPtd45wpVAsMM5ZYLq57aHozCmkStR8Ld5Z9Qpq9EniA2bmo7vLcPoba5zERrh",
  "key40": "4RGKiMC1cfnNS3yv66p24esc9gp15W6EVmGFyKQyuibx9AABa4gqYg1XdA9T3s8qEkcEJrjKJDaQ21of6a3akXte",
  "key41": "hEr6cV8BRLE6AnZDN1marzFSAf2vZQCLf1cURketGphHogkk8EvtaW1KsU6ut4WiGpfT5TjFy8AA9D36gSLwkcr",
  "key42": "Egs3pEKBHh3VLYRHgjqoMPdKvtbHpAsYU2Qu4ZNo2VxPduRRgESQCvHgmHtMJLnVZCakkc7ztsMb7wdCP6FpA7X",
  "key43": "534QxnqTwPjhG7cSzL5MmRj3oAFpfgdV9EdbwoLW9uzAzx57NorB8BBgPBWsjoJY27C3MAfQC1u3BoZ1dgJ8FpKc",
  "key44": "29dVqDEKzH9pdPAzad97EEcwhbmAxEkJVnsuHZgof6sX7Q6YbeNPXfZUwt3S4XQbyknMoU2arGpdSaKERJgw2dsu",
  "key45": "2RNgTzxyTiDmudKLnkscjXh64FVz7kNx9F2amQJBeBo9CqWmcmWzQfKrSSNenFAsitkvzzAES48EYsPCcLDYhYdF",
  "key46": "4YcKi2bSDPVdGi29YSosZXif1f1QFQnJhUspKKVe6156WoUMx8pVTNQi3vRChFkp5RWWKgBoYBo2uD5Wg5DZJSNu",
  "key47": "23fxWqg6HBTh1Fq9RCmjbHBKDQP34inupg2Mf2QcgBMEQsSeb7azXhDA6UBo5Ais8CALFuZAWPGW7eHDGPTyDXeP",
  "key48": "4phhGq7aDn7765gQ4aPG9FEJUYRAM9xdn12MBJavf8JE1vxX9i5dZUWEmgggt86qSeWCq1hvGKyd9GFpppw5rdYN"
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
