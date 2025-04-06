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
    "5LhMJjnr3WcZ2xeYWfJrpgSB2zYM5kgFcvWHLhiQCCtieHNqPaUWRBMhrx2nnLCgJ2HvvPUBsPCHYSn5EiLEsZkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a3dvp47GbSveuzJhLo3yR1PYjYpvyYuDmd9vDJ9fkpjnPuYL6hLmKEVKgRQGssR8czteaMMb2o6KThdCbAu4Zf5",
  "key1": "327qhCdx3cNNCAWYVcbNh7VtVbJJH8PUhcBim8ibD3V9heRZ5JmTFrwZuyVYNtc15cCuXeP8FFuDUDGRNpdWY6JG",
  "key2": "3RvbwHfqdf3RNDnohzPwMYLe8Q8WgUCy9Yzp3tniFckwTZvgR4JYsiptopfH8oDsEsRD86xJq3osxzWAv5dzuJbS",
  "key3": "41Couk2sPkSrCTCmUQAQwB36YqikX6HaaYqbz7ffXQTUDpdvKEpx5GywHJy4MU1puRm1z284YBYUFE27AU9kMbQv",
  "key4": "2bSaHVGJXe1ejEmhF9RZXrED89RRT34tN838EHEEvdC5KBcfoBKRQizpLrqrwerXguprQLsKVwaBj6FgGzx9whSh",
  "key5": "5Q81VPYK3qMCdxXWBx6tmQCaNTL2Gza1ecmZKxsfr2U9VZ4kzwYkPpJUPrRfwjDwbSqEA9QCH8MELGws5NpDGbUX",
  "key6": "2Gto5F8RNDnsUHwYvcpznr11FpCGJB9f9wVax5sfqAHp3jPXETKmH1R7BZpTfzxB5jmxsSGccCJgs22ETt6ESoBy",
  "key7": "4Mv5GaPqy5vPCgTMnAaTnzW5kv7oStiY4zCLbhYyvcrWjzWF2QJwWLn5sUkDtvEuW4icCxUrnMNjyMe8cvvSwBUE",
  "key8": "4jjZaPQntpW8o66nxV32EpA6Fbdce2R9MXdu65tEc9YgC5fgUn3KHM2TW5cPFpU7RbLJdUoReSQACp46rNbCP1qF",
  "key9": "yEFggqFKEXzMNJsdTs6kAqwa2dNLcpcKzyaQDcxd2fqzETPqBhfiXCJPRAuAiZzNidfoKxtANhdFqRiktRdDJPR",
  "key10": "jjQWaKRyntAAkt5eG6xm6xa41vk8jtCFwFyAXSozcazpgi6xdhKQKYcRpXWqVJ4iLZHV2EFufUQj87QnHJmsmnN",
  "key11": "wwtRejkZEP3nbJq6MAWaiSzUdKT2SKaWDE6Jc3h8bnoG71JdvUZA6r1M2jo1FnXcGZR1BujHcVKga3BkcPoWAcS",
  "key12": "3FeNnmLYSpnAuBMCoDPnxZGhxtxT53tta3BAoXyLF7XsQpcCnxobd3izM6HbN1R5e3gvgET6wpXtqbeRWpTGQvaj",
  "key13": "535mfmDHuw1XvmNqY2Qak5taHj55h7owrJPdVbMPHfmN3abNT9rKvHXvHWVSkYXtGaJPJt7ENvngm5ivV5YrSiyV",
  "key14": "3hMVSbKjKtfqsZKZDe8yNxWS84TdmBNDA2Kdstc9i8ZyFYP5GhxEJkSqhtpX5tmD2M8qqS1Tbmuf68R45nhJWRZf",
  "key15": "oUEzaQpuo6r1xsL5GjjHgx9KyQnA484HJDxNxrPfNrwkPoUKdAQ7kXnmsg8G6wyTieeGnL7RYMCdwxu4bQQacnk",
  "key16": "3cYRtPtbBzajTgDkVNHwxAcHXTuJxob5ewjxWkqaGfDbwssrVe5thav7gkqPzdTXJzmvALwDDGdVgPJCDwmM1RSB",
  "key17": "4Yyvv1JuYiZVfSeZtz1TnKg6zmK3hbt13zTgaxG6Pv2LJhE9XWjrBbTeLbB9634MXkvagE4BmPYpYAHRiSftiHyj",
  "key18": "24RAXs5mNEviqm2bXH4Sg9cWuU14WMW2YB4677rAYkjYmyg3GLSZYAcR86P4dDf2eKnm4z3NxX3hVF1UAfeD2xjq",
  "key19": "25AfCJePZ1pTuQ4WiRSAdFWRexJUn72LZRiUrJcUKYL5tEgpuzuSYAP99WK2wuY5et3e2v84oD2786zBFTF1kgJv",
  "key20": "2WwNAYYsUT8iGmU5ZaS5NCUwsYNvSBGxFnTMfg1F8K6Z3Ygfs6YGauz9L4vFA2CRog3ztofFTTLp9bmLsFhTsBds",
  "key21": "5H44tA6VGZCySKi7wVwgo2kiKLVLBKe3XhtLaYGQqSHNaH4ry7QM1aPX757uNasqXCnPMxeczGDEAwWvQ3gLzna7",
  "key22": "y9dkehEBMjkKp9CXCdxTGQA5KhnHZxejDwvUE1Wd7cyQhjsYfxb4dAqEhyaQdprXXve79RGNogQbmKuDNeEMvmf",
  "key23": "44YxCqPytbvjbqmyoq6w3QtfVX6Wof32cA7zbVUg3he2iAzbrCRcBt1RNEmqfs8Y1Aqx3q4svGubQeHkLnRxsvLx",
  "key24": "27o6TLLBs58J7TwKzkerdUMVxkdMuJnqjutLT27fLKrGd7UcXkNYzRKv1sEhS9tX5LKJT4fCRxPkvDris23P2GYf",
  "key25": "3u1vK28o1GCJYZGrDTFTFu9vJPUb8pB5S7wruE2DqeeWGf1qwsuJxb8fYQzAVgndK6fiC8NKQ1DRhraJiij1PywJ",
  "key26": "4SM5tSQg63FXuucshEdFsB2exqeKmYQFLR5MupwxB7FoGKnZY8MUhtTGaecr2KPK2WW73xa8SGG2VKPAg9tKEdzG",
  "key27": "2RNbm26bFQofRXmM4cZLfpNcNAF8T3spskqjRxYRXM9WKXWJzwWuRsaoeyxNowzMDqN9cZKqaHWXnuS6P1c3vmPa",
  "key28": "2zhAuFoCDDASDa3Hx1tc2gkLfuArg8hJ1cnwWFXTr2T66rtz3ivJvrhwsTSs8BVkPwHYJh9ahcgm9TsNCdtKykPN",
  "key29": "3Jtb6qA53NKxQvWrv6bPNqWv51pZamWDVfu9duUoCmSCSn9MXzosBAYDXaycqbyQeeuxhmrJsEmjoZT7jY27aKyd",
  "key30": "2fjS38oRpzsyj8XzL3E9Uf6cpGQpQjuUM2moBU7gz873HDF9KrgDs6kXtQ5hTLfkHq6sVKSPgeU6uScioZ349yVk",
  "key31": "FHpGHKxCxDmtnWiu7kQNNBVc8WWTcgaru7BtZ6186D4WFKXkTUwWZDmHN1BbEQgPznMevtcHtwgisM8UJe3UXLu",
  "key32": "55AUj1HNbUmdLeeMsha1kJgkSP3jWRn5FcaQzGFLWb5JBoCMAhxZCeCGnAzYBXNjMzASJY4kx43MdHoxq7bDgUrT",
  "key33": "fT4DaqpsSWGG7hUwq2dEXNTZD21hR1vGvfL9KrTHmsSuiEJAJB1aF5u5oxj4nC3vaU5GtsnpUVhH3tGHppYgBn8",
  "key34": "E6KoLYcrphjNCjmtBLMS2ATadn6aSQjQX5rxKGbuigJDJsBHqe7bruHKy74eWx31zhTnJQ5jYdy8E9fUzp2hcaM",
  "key35": "3TSxghCQKYnZHwHnrJi6XB92HSXkoXpUdvq8T5LfNPkMNPjZbmVQy2FpaYAMe6AtiLtr2pzgUS5cXpzL78WTnT72",
  "key36": "ySYwCV4gr2grZ69QVq6SLE3V5nymZWVUpGchVXnqutxiK3cLkaQa7LePSdLFGKdQxr4YkhBeoGoT2Hnf9VqoHwa",
  "key37": "jYYG5oCyK7UUywxhkwdciHhacynnnkXkDxiPv9MPg843YSSSgWezSjcyk1xtrELpjExuW8FzRuAdRmDwLKSKQh8",
  "key38": "5Rg38yXRQPA9KCfJYWkkjhFwuqs8zdMMqJsAngqXC4iqdenzDatsXhFYRWWEdw4DvXjvzXcDB1BiiQ7as4n9fa1F",
  "key39": "26CpyuC85GevhEXwT4tms4sJ92UqWFJstb1naCVFfko1kD4F53ay4QvSiLDCwTpKHaRFsjyZ2oh1mV2djMw2vFzd",
  "key40": "47nwiEQGmXvxVCHpp2MaqXE8DEnSLpTDjEPeZXaVoUwdBArBt8iecf5QdYX6rSZqpzDts24HefrSH79PVyRwN2RL",
  "key41": "2WKhLBm7BfGeJUiXvhMXVjFCdVycnDwx1DSV2NdjwapsFNWZV1VafRvUQoB7W5sset8UeFdrgwV4NfdRhZb11phQ",
  "key42": "3gXeUMrGF81bfpFDc65mYckSTp984dsK9wNz3P3M5zAhnWoXbQtV2Dcqz6AuyyF8JbvEmmTG7c2PVQPpNmcySAze"
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
