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
    "4bhzapqPrVhhRfb5XqFQWF3JNch23KzAiqqCiFPHqBJLRpeu8A2aH9rbdAjL9qbjiJvzLkVC55yt3FAFED78bpkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yb4NicFQgd4daFWYwSuoVghBkJArozCSMpVv4iotoBgxFJyh5NoCcnAwNquh3qqWpLeEsMvq1AzWAs9kn7aT6kS",
  "key1": "3UZshC25Sr4K2hG2oUXpSBWYSMLGh8t3EoQ447yArERCPAPyapyjMZK5rJD8R2uQ7ykHm9JaPXV7Z6kf4LgpfWYA",
  "key2": "4rVpK8cjoNhn9gVbhagHCs1BwKvaYkeg9jUj3JZeYLmiDidWegaQD886KvcyAQZPoJdzFpGq6wPrS4GetTS7feVj",
  "key3": "5cHdtdnto6jj1JdK7C4UUFWcUjd8H1Xu3QxYSmrsZwtrHutqXcLQXHvuLKuSZpon2hzbKuBBPLfWRxzWMopKNwpJ",
  "key4": "4mbsDB2irfGo6cCNGcPFwXaKHXtfCTmSYPhLD59N5TfMsAz3nfRxYAVeBhofbpp3iAX6EZECP7spHbBUbz8D7kzg",
  "key5": "5wm7LFmwsxd4CP1qvqzzNLVRSRRv6khBnxAVZxLfhAH4LEX4Dawjy6bDE5NAn49ptgL3fWESbKfteMVNifW9vL7y",
  "key6": "4ho9xWvDEm3hHeb46qUgNQwpxhh5iXhkBQnWxnpAXzDYNsp2Ts8suR4Zfu4sxvgsYLUpk6J1WUqa9ap5jHZqzdWQ",
  "key7": "ZLMKCAccUyapLBAP5uVbSPRaDSpJzf3ekxdQ77tMMhMveiyg5Q7ouc8pKBKjgrSxYVaiHLa3FdbRJDQKYqtZW6w",
  "key8": "4js3DRSHzR4zDZBhS17rbLxbznu3i6nakkq4Kn1VFPgn4n7eBuQRJKGRmhPXhnmB4xrNH7BACtHFdUPkJtE8b2dT",
  "key9": "34snD9p5hroihetP4oBk4k63uZYHCTzYpKBRrHsAbWKZoiEDfmaK3ZoVEkxE1DrSQ1s4HG8jDcRHeosvhLDEN9X3",
  "key10": "4npn15o8sio1ykCKTDAxNx2pojN1oNuwysse6VkL6q9sjxsdwaYiG4DtRpFZa6CTX3aorC9bnmmKCz265VY1z6BU",
  "key11": "2L8vsGTnWopz6PqrdCoS6Ug6XKoPgy9xz4yRmTziLdJAkv3d7rgvnoAC1HuCQBxqRDE7hHxd3G2pQBHHQv5MZDkT",
  "key12": "zWJgsMHyyAawnzTZKv4jzdQ3kiQpqxTvkM6DF2q2QMY1699zxiyuqtXdorxguSS2diubox4EnrHWxNtdNWwVufA",
  "key13": "U55E7ByaaSvGM7YNHgsaPa5SSNvcoMFQG6oNnS3wBLUNLBsTPyMPbdRi8gz1X252XgCxZhJg9jeBfCJsD1Bnf4K",
  "key14": "2APDcW6WrYzBBbyAL4qRmbCG4BmnuBH3FmwtxB1gGmDLUGcNDcBMaT2pNDQEPqEoUVZhN9qF4uKkzjtRVzWXDRxA",
  "key15": "2t5m12LJxMsTvG3bJedxHxXZ838Y8Q9h5vdjrsGJJ9aJAd5bjSSBcRn4Cd755Mn1YC1wRVGoyUEnTjsDZiCfvXmz",
  "key16": "63LK1iLWe17L9n5w9gxYzCETAn5kFSGc23eqsjJZn3S8v3KyNGMZBJJsG574oKd6wLx1TsNRW9HvJwHZmrfCjjui",
  "key17": "3eusH8isseVRw4EwmzTRyArW8gRochn5WWi2umsaeXBmbFHVf9W7wLywJR6KzKavVVUpWsPcgjAbF7CydZCSdn8K",
  "key18": "3mHuoivD3NRLfUDxniyJXPmm3EVELhPBtTSnLbVaziuBD4EWMAz3GpgPj5QFkkgWpiV29vJBohDkjjZ2WLZdwvEx",
  "key19": "2qaTSvP9QBjbujjbwd6CRnRK49cswE87LRfJKxyq47AbWorU2w19ySLrAxdPoZTUgj9PhY6fwC6qzgwApvztzK2c",
  "key20": "5wvykfdnAjqhJJyfGhg3aFUNYU17tQhjeBEcy1EzSi9gxSwzhCbHGR3bNY34R18uesK6MfJyUy6PZXGnX6F3NMv1",
  "key21": "5CRk75Rv5cXgLLZLu4GA5W3vA5EDajK711VtTAmWHoWgRXufLT9EgirY6TPbCCHq5gTJ3xK8hi5yQruhCp4wkU16",
  "key22": "4pCifj4ste6qZsovhEEpDPbCNxY2SKgSKGAkUv5RVdUwNXKesAN5S6Tsc9jKTehZDGWEhMP5pWnc9gkhh81bYm5v",
  "key23": "2GT8sCfdxFfCqE98C6PURZAY2o8Ex88tV8ZRcj33ufuh2jeQ3ogg8tWz73DNmcpZM7Kas86iSQS7H8ZWVLHtKFWN",
  "key24": "2BTZt2VG2Se7V8gjbukwVzPvYi11Z4DJ6U61ocswVV45e5mp5sQjPi4pp1AqqU2yANi1HkrHussitMGJ6bDAQHab",
  "key25": "5rBxZDyCQLaJt5wotJVaf6qdFvUQBNmYvR8Pd3LL5Ccc5xw9KEDCbwjVqNTncJ4Xu6cuAVe16bhUvpVQZGQuwecY",
  "key26": "3fvj3PWM8VaCtnvjVUvrGkhXovqVatMeMKMYzcbK9DDUWCT6b5F3EZA8PdnKpsmcGVhsXNaSTqAt9w5q58tiXafM",
  "key27": "4rsk93obeUBXAViAPXPH9vQdeWzJJ1Z64ykZG9BPc5R3ujYmoTKcUD1yEbTqunjEoC4bUsbm9ceeSGS3DNvZtXG2",
  "key28": "2VefEa2gqLxti4oCQGp3QP3C9LT45fKdYXDmfZsyxnJsbgHVogiBTRq4BQeY8bV1KahER3mtisFTXQdTB2hWuCVx",
  "key29": "3uDpt3PVCY3yYAF8D9BUvg6QEmTF7VcY4c8bvkz9PGVfg5ZH5tX8ZPeLV5Qyjpj2MYUuBBptWrFu3ZZbNeSvwKXB",
  "key30": "GL12kCQbVTKsM7x3VdumS77fGzovfQY1SFVkuQKbHP2zKh4ULTdNnEXnXdffmAbQSALF9vmQehB4NSa8r889G6y",
  "key31": "4MNj2ydsAJ68XxazqtsRPeyAAGB89EMNpC3baXeHcDZnAre6EppYtRdgEB1Dv3bzoakXeXfYPLAVq6fbfNthrus1",
  "key32": "5VHgGjND88K7muWoGK6YJNNHxHgkxsD2Zef3XHzZt2PeTSLM2G7rzq7H8q7iDuqTsxdBCpgRyEp4yV9z7X8bwrgs",
  "key33": "45BaHr2RHvcJHGSTPeMJo9vqBsQwQCeeSGCFVfAJ1TxLVyCFXvx7zGnxGBMpquC8EoRJCu7JYKqXq9quKkn2dPfe",
  "key34": "4T9ypmhZSeKNPcjqQMGg9pAGNWxbFshh3cpGqD9Eh9xUoarZFeELC7n4oR5jHkNH4uywaaKhRwjMv4KsJcHbMNGa",
  "key35": "48T6W6CdEZzBC3vYr9PB4rzDWM3J1cEFcgXwCrBkMfomGx7fUyCR3H2kg8f8mgosYspekQ2rD4EmBdECC94xFB9L",
  "key36": "213P5bzcdttNVKVipqN68GKYskRXeVqeLW1xMJ4cNHuhinoHzc5yr4KaPRGFKBnE3bFmiAY9yoGzpJG2ypkoyUQV",
  "key37": "5VPW99TroFeyNteo8SXKnesBK1rnnG9Z3zjmsUbnQkLXAn3PbfXHo2ygEFq3G2bAFnHpKGvQ3ME8wbaoLFWJTr18",
  "key38": "5gqEFK72ZAVgKejLqDjzi4kP41T1ixdGUNmroj76taCeSXXmXNm8TS2tVw9uu2YYtiKYMxff2oc4xbHu95Qm9EqC",
  "key39": "4PFgv1dYaq6K8FNzcZeiFp3ANq9FpxBFdTRvcAspCQappNchiW1AXQVn1G6h2sfmR5CP94RW8Wk7JZWS2HB9h8uT",
  "key40": "2NLkmfEnowKShPjUYWRziCSJ7MEYWsBU4pEXevPx7qx85WYGX92sNij14zvYHMH7TwFRRRzs7SwezkKkYmdvjdyz",
  "key41": "TEorEjxe31K7os13a5XjJWiF17K848mboRtuS4oYy3d8r8qhrVFsM1ypqd1M2kPDpecfYeiZvrAcyqZTFpU7mUZ",
  "key42": "2nGdczbDYYU3CfiMLqDT5vWQ2pw8L3AuhvH5c1egivmpFrSbRV28wYzLufuWejW7fJUeSqHWbtGYwdp8cspmA7ro",
  "key43": "2NicLe992jZGAeoNg7FoP1ZM18dhp3tp9KU6VPpCPH15tLGCNerZ1B4drydCERSp3T8b2YPeMTwxhAExf6C1FxLf",
  "key44": "2BbpfMSLRNMUwKwKjL3RMQeAkdrm9KzxhTicvVGXmg4gR1sxigWESLfMeyQHe7Pw7yq9yzosvS2mRjKddswiBFep",
  "key45": "2yiXg8tANCA6fYng4ouTusA68pBPRNNTymQmdMnW1u1AHMqJc78m9bX3JkT2H5NCiBL18uJ36wDdi6qVMCUrQM7P",
  "key46": "51AaryV3sXZhPFQZmyr73DVLzTMSnSKqH53bd1J1pauFVWRm1huQwK8ZguaowfRS6nqyFFT6DrfpMrwe5MeiKnqK"
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
