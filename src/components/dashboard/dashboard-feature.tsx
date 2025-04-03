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
    "5aUvJxAWLcMyToMaqm1nQrm4jTT9pHmdBS2aozXKDuqu7CNSpgkK1PTfv3jRcWwN1caCdFzGiLbfsPbw7dN3fQjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MoCRHUUoN1NQHcCGo2DULb3YLdxKQmSwS41z7XzFKWuhymvJa2shtBsyfuZps73TGyDd9R9ont37VV6G9MeX33c",
  "key1": "44v2pnsn4BngjqQSk5x9s3q2B7h1hUpvCeUskNQ7taWBaRseZfnEbMrmzmjkpte5YyHpEBbama3gPTNZJnvd1KtN",
  "key2": "2HEdLhFQ19ywH17KMJ3a7AkmQDWSmyFA3Spo8kPmkquapVhfJektxsBtpv3XLefecWtxdsBZYDiQzA6BZeDsKyF7",
  "key3": "oJD5SxhGmjZZYkTd2DsiqdqGP5YbR7A761J3PvkYwvmSKHVRWjAyPjuEysWmv5vBQqmyxHhbrMJU42rKKx9gTL8",
  "key4": "5zFSHgtSFNUCUU3ydDM8CajvoPnRUYwJzBEb6cpeqDLLvukA1SE24dsTWJ9BYR6B1ECWXMfLMPsLeNER7y9naAdR",
  "key5": "5mCgXqaW7jLkgboa1szTpxpuJFTYSkYCV1NxYH1CtuHdNtQoeGThW7x3dMQXhMZUywF66Fcm4Mb75tcAXMjgLUMs",
  "key6": "672SfanCV7swsh5Ra6rUsF4EJYwd7Q1283AnZYFvUoAe7N4C1FaRh33fMyJeHhv66hUiWAAwyvso6eRESWxg4RTy",
  "key7": "5ip2rJCJr3y1gUHkg6gG4mCKFAp5yqxXG4vzABE6cWnyXVzFLhgEcyLwDovpxacMJN8rd2YJzvvF4YMNDE7zgeTm",
  "key8": "b2e8tV1HosdrnFxzBd1f8VS8HvcANhU34T26xVD3Wzep4nd7EihLVQhXPwNwmJELk9gS4tpVg8Zrnxkyth8Yeia",
  "key9": "s75UD1RXBzLiyFbBDJNgR5WcqDmnDNgMM183N7P9FHTBQ9VTh7mg5uTjz1sVmRNnAuP93djt3wtvyNopqu1xtNv",
  "key10": "5sLN6KyvGwcyHTPG5useqCzyysd1gY8KWupidjThYiitu6YqcApPwQVGRZwxVhwwYHxLyKb8YHSCoq7KphPRRt4y",
  "key11": "2h36kU1JeWvUj7QX2TFzTVqpEdY1XHq7S1hdG2KkeNNkD9xgRQGXypSbwNxCsHcY2huwKq6sJM6Wmi5pyHxTo9AL",
  "key12": "2BJtmxK4KAVQVNMcJgaRBEvg1sX8SmYtTA32PFAi8jWoericfMZdyd5tSibKHNanMdpYmkbhmMxNdZMSYYAgZBuJ",
  "key13": "UqgeRdn7KbkZu8Q4MwHaR1MvhtdgWXR3ShYmudguAFP2nFqMn1hcbu1L2SLde2LzepCF2NFGV91m1ooZ4QTMZP4",
  "key14": "4zHx2tzSoq7JYYWSkHxXbQj5VuaQCmDwT6DqQTFos2bmJXMNC7CDVrFFyWfQmPk4WKXdpiGB8cEziFxJAaobGgBa",
  "key15": "4zTgCWnnLM8qpYFVsLW4aGMU5rTA6RVGKkMM8i9DtWnewNR9AYgChGM8jeucnb65RzHBKzrAeJktUbFFEw224wdR",
  "key16": "5JEBVqRacPK8WR9qBaG8Ltfcaz3872vo4pSwEBT3f3q7M5T7V4GfYBPyQqkzRccurHdeQW8W3BjdtGP9QwVKw9Y5",
  "key17": "JDv9biaQaTziRvNndeJ63gmiSRHg2ZqGbpD42F4an5hWJnxAiqFsHL8fih9D7VHpGgge3cpN6UfPFnU2hXnZ8Ht",
  "key18": "JBRuE7kaaTEPrgSEHB9UDSUxkoPYVbdp4DynqSpNKFYVv9zZ8ep4Xc8wmD3TjdBXsicgjybVMu2AVj3kjTJLxM5",
  "key19": "51JnsxyvTAXHxeeuVEqngnsK2PgVgG9hUVpmYNPv6vzyALobnQWTVjgSuYJhRAXnvAGu5iY1NUrSkNxfJL6XY52G",
  "key20": "5F9PbYQUB91NeaVMPfg83VEHSitBEombXcYQSbyZGntctwZGdiP3mz4cky2ZYKDmDkQLzJhJJYdnup57GLqx5voZ",
  "key21": "3o3jJqfSFf6ZsLMZ5gRJ92WfpCNk1YnAWCtJxyxVZzG9CAcDpZAUFNr54QqcneNricdTWKwZK5vhCQcTtuK1ccDV",
  "key22": "579hsYb4A6xFzck2akabu38VgUBNhW1tovfpBX7PYuQpXEtUB5joEozozQGYsx8Stn1YQSkBJNXBwdxxMfHYHd5M",
  "key23": "2SRFMusuLY2HT9Bunqz9SZee1jaHSd89jWCmNyFqKgGxW7MWRDn8efdFuGhGrNUK5ppGcTaAeUS5eqAdznVvFy6v",
  "key24": "QUFqSCw8DJa3uTNx3sBJqjSKkVg8WVmz8kuTkM88hK7LejYhqBiR4quvnV51mPZaZtLjbDuRigTKXcdvTKZ1M2g",
  "key25": "rqTt5GwmypCTZDj8pyDeHW3b3bV1Pwio2PtjZaAyizYbr2VnsGX9vFeZrRJP4JLqqVVEan31rathk9uZWi6Av2N",
  "key26": "4XwRAiX98cMom1VHWpsVLqSpK2KgAZ4fjArJfVHBQ6sxecSFbKLUSh2ossbbf6ErY8B4D7Uv7KTaB8FNk9QKNs4P",
  "key27": "2k7GWbZinoUscBrqZTsaAd6QeAwdYM6aTYAXFKjb3B6TAAcA17Sw3hKsmEn8m65rf7efkGa6Fj6qnwvv7xiVSsRG",
  "key28": "24M2csCvuYmsAZsdQuYN3AgcMfmbMFRfmtVjoGSTWCkQ8AhA6XQkk7HytktqXSRoUcLRr6iMf8YtTwZkrFGiM8wG",
  "key29": "cDq3iyD4CVzxh8EfriYU4ZPTz9sCiNzM89XHDjybZMhNDh7X9D6CQ6MqV2wqMCJR5S2WVdGXCHeXNcuMct9cWFd",
  "key30": "52ue3pnifmuHmn6YZA3Wzq9znhARAJYysj9EVjyRfBZjNMHzhiSfJEgJ3yENEUUWtEpaC6YueJATk7vBS4adBfHu",
  "key31": "u3mf8MAnHHT89r12RJHtYXwmSNRZSYEyRHGri6xSeyX6RXe9v7jW8ZuZB8qeH16UZPqQ2wuFpACy3LZrdi3wMu6",
  "key32": "57R3Zph6zTCRRpYYT1ujp3U5M54yaHcwCeN5tX1LnuhWas3L2HxtwRut5i12DFEq4XJe3z9Asbri4gMNSE29NKM5",
  "key33": "63QciYUShxjUa4FsfBaMpys73NY4iwH6gu7tNbBLSe4kahG4f7ysojH6fSh5BVFK7h15M52tvowMsHJinh4MeMQ",
  "key34": "4XPw4J6tf5bqLUtjDyQfao5Zr92Kykswvn6kkVgCenN91cUStJsK7mbaBiB4HUcLmHmGvZJwS7pPwosjZu6hiFWw",
  "key35": "9PWqKstCTXmBAejsWCRvUV5Vx86QcVsg7NLZudzRcPqrRj4mAGVHd25dsZAjCCY499mhjx6riqDY3zw73uQ2L2D",
  "key36": "qKuHAqwdZRXnEpPB5z3TPsnWCzkungqgv4TigdqKkwKc8iuTFTEKUJTUto3BGYGQVj7aQww4dDJV1hWgYNo9jPN",
  "key37": "UErMrq1XWHDEMWcBpGa5grsXRPS8u4xR3TzYtTA7tyvSAHgZWiRsXUhqa1z78K7drKUECsbs8eC6L5UdUsFhf1t",
  "key38": "4pE5HUPTAFd5fThbJXirdPvmi5qtWcZC79iYmWr9eLKhxurcYXkoDiihT5xAw2Y7DbmBag9CaHrRkNW36FyALwZT",
  "key39": "56eUL646PsLSUVLhtFc8mPZx6mFgr33gnUxdjkZKzjDFAjGEkhsKApcEMGYVNVQt3fq1Bt3oK2uUGsc4KLko3uEG",
  "key40": "5faEeg9hJ7fx7A2Hmfaokg9pS6rnc28aFdXzz5WprNLqaxgfSgH8s4cxGeHrNUY23DBCgvvvCsWn8Kyr8zzu5wwH",
  "key41": "2T2Qrhm9PUChfwf9PettG3D37EX5hQuVUvxHf63uVzYxqSs34qfwybwhqvXdp3ta4p2ZFpraigb7uWG5qKWZhU5m",
  "key42": "rgXbGYnaqWygLZZiLeYqvP6B8JD4XaknPUb1Kmd4PuondoqZqvn8eXjiFZwQDVEKacjwwfQctDwmWWv4VAiekLu",
  "key43": "3ptUxhZ8YeuZWWC5jpRHwrdSJZRYwZRiteGk6zEYxYjqx7cw97x57sKYiDWfZUq2M9b6ebui1zePMvPsRxxDxoZT",
  "key44": "4Xwfp2G4ipLwmjLhD1zJc4M2NFQWtRiGr2NbYh8ZgBBQ7pr28fxaDhoeajnhgSRhu47Sg99bfHn9LQ6rBpkgthhu",
  "key45": "2izB6m5L6Bxej5bP28pzJPyFzpbZg4cRD2NHeBssvTsn76Fk3Gm9yAsnt2JrYhddBJ6fEbE6E5tgdvsCm3ewbajX",
  "key46": "5E71vnQ4hr5HmHWR1aPcvQDQfxPrD9BrrQqfM3f8KhpLmQGsCndNYodqNYt51s56gHuudtL3iiMZ2XMLMNrXfYVA"
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
