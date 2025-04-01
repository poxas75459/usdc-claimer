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
    "5VpNF4S1UDNCMszLWtaB2VzhfsR6tm9787Gz7L8ause8EjPG5HxEcXNWwrQxYMHyKSJNkSfchVLeYuxHKMU8DzJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXckCc5kWTPr3436gJvKdtQYEZmNP6eHtykgu1fa7hrV67PA2smF3eRTTcY3zS4am9R7bxi4GZRa1Rg34UBS2ds",
  "key1": "897TNN7ny9sVGHgXsg8Mj5xyFSXrmQymh94yTU3wsVb6zREwabx2Hrw6dVd7TBUSthZNvnW64rR5g7QhWi4cNax",
  "key2": "SpZUkE7gkYNrgxYdxnqmcUnyfomiwuaj6VshgShRprjZ9xwWz9FsXiyLrZDu879HbP5kdHogYTpPetWryFLewPZ",
  "key3": "3huULbM1iG7cPT9pMVFFbWCiqe8PKW7MSUcEUt7Tyw3Xhp1n9p1YMccftNtxLgZSNUDSg2pAN5nspDvqLXuv4sdb",
  "key4": "3U4UCDxqyUA4LdXrr78Rafcea5HF8fCb6AJquNpgFp2MsNb8eADJ2g1i93k4k7xg7h25RyU5EJqthUz8jfKv3YQY",
  "key5": "2PQXhAgqCS21MJkzAATzPx36jfHCmZZYr6MjWaizhqcProEUQcRf3DHPiKULh4bnukYKtc7vXHAbAvZfFcWXJzGo",
  "key6": "3ew2M3phwd7TQXuH9ZArrizY6zdzqgc9FyxKCw6JkWNdsPYf3ssso7XPqTnxp7UczNKtAy2A9Zspry1AKd7hdkep",
  "key7": "31KHs4QNwidDthnkSxpSbR5expMpaXkSQcJPsRP1xc2yagezT6CAv741S5x1g15tqp9WTdCbSqwPdUs9hxuZhcxt",
  "key8": "5oRSyiwLjQ9pyTfrLTEsQCBx8Sevyv7pemLans8vdGDatzY2yW1CBnVEsPFCRBqT5CXYQFt7omjMgy6gWNZL6gTc",
  "key9": "5KGFNNnowiMH936BzD98GQYS1dRpv2styC7kns15q3C2Bj1B19Qhj2E66xrxL1h6Rr5E3k4v4qYBECDthm5zH3si",
  "key10": "34RT3roK948yHYjPB4YBePZx1mFGzQpJV1UjQ6XGASNZ8QVc594gU2Qk8AHpGZKKX41AbeLrGoznndrQ6WFZUFq7",
  "key11": "2DutXjLcjfMp49eyFZtneEzyuK6VLKRQCKUKYMoD7sw8Gnc5hDtNgAjC9fWvJoFKVj4ZTCxXhAUCBHm1sFszJA3e",
  "key12": "2yNLTSruXUWDsbypkGCjyehL9gqX8mJwfdA9jj2KWaqWoAXReJm9oVu18euT8mdR537NyfLtCCtrAVgbRUz6ULib",
  "key13": "2runSA6FDACHnCimmw8a2MtF9aSAVyne5HhHnNU6hFvDUfARohHk3LmTY34KuVyKS3b2YpRqy9bPcVr2tn4NNCcB",
  "key14": "4U4Qktv8UHyB3FfRNzQxUWFvKCdf1NPnCZhJ6qCYKgaLg2NFM3PeAvEBBJuee5Y62LJyM8RkpJ78G1D3YQNjLyci",
  "key15": "2XwahAsw7vQyu4pkKfa7LEVeXAHooMjHcyWdqXXKJxB5uJuXega5jg7Wqen9XVRHm54FnKjVndRyCzseqLJk2nQJ",
  "key16": "ygArPGxJPQzxycu4cNDS55Kb7XAfKkoqbqt4QCHN9otKGa9hRc1gJ8Yf18EPioS6xTHRHzNuqvkjL6dmF7SLSZc",
  "key17": "278jqpuwVvPe9p7H1Fr8c82vtahxPojAJgRShRFkfsqD5MfNt7qzGzKNqK92tnSHsMYSo9c3kcynzCuoT4psjepn",
  "key18": "4jh7UE4rkhsSQJhPG5nNALT8tZJM42rt6q6YdCF8SkzVZNrmjvtbuGRCFyZK8XUavdb4JbRc9BBf1sYp7qNpbCdz",
  "key19": "32qij4fmjgKszbnJsC63zPb4qAaTjqCDLPpjMZttQwCRzzLUQVHyhr4TQrGtLDPNyEeVL9JFAcz9jWcntFb7Du9T",
  "key20": "rvPFXfvy9S1gNdZ4vKgb6zQjptvJQNQMRVsp2a9HhgA95dQB4yeXEGLsWGBqqjxAmbdAjpV9WnrF6sFmt6stE8B",
  "key21": "5vU5qTTvn9r8GznAaiajwuturUmBAhieMTBEdcRc3xwqZZAM1AAaYXKKPg3pPjmCXyhAjgebLEii9DxKRoKGT4yo",
  "key22": "3CNs1nAa2Qd9vwj7gwdxSKFTSZYa5AWFpjRvsRcfy2EzhjQBnBRv7hKmRdcPHatMycZA8noktP5yKcb6AKyXjMUc",
  "key23": "5jYvW2jmFrp3j1zkHtLR75vmAVxM3p614yik57btdf6ZLwajHKdD2PSLmV1CKavB8ZXdfv6P37id7UTNAYXGPBJ4",
  "key24": "c6rVVYDhCTEesGiWW7H83miAx6hD85W1WLULV88DKPn3Xy8sJJY38FSbjNkemzhVzj3FQazUzFZQkEBN2S2YeR9",
  "key25": "3bpKXjVX78zf29kTsX4iXh8s1fwGrSiFgVaX34PiGS9vyLoM2KmFtoeNrTowa62KZ48k9puXnRtf3XzC43g7yBW2",
  "key26": "5MRYT2FscURkyF951BgKYsYVTmbQgNF6vpRfzN4V2AY9SZ8rriHRrxWj8s1oVC44hJJDQuEmYmqqHVbWvgmJqZm4",
  "key27": "4Cap47TqLdygnBZqW5UFmtPF4eUtusGCWmJRFA6fgaWxuubBfvVWXP2Q7WaQUeUZVZDKZC5oYKwtwsFv6oZtyQmX",
  "key28": "2M1CqzvQpAfxmG8srF1bzUhoYXY6HCHCARB5spp74w5AMUb4USRinvVfngaJgyUP1Dwibprcd3fvXS8gzqogwyNB",
  "key29": "2YxDy3aw24qiqnfM4fhrJfRnfqbWeGQddtvzLz4yrBedVHeX4HgDMXfPmdF4GXjAix1LyhGxGHDikbeGU9K1LpmE",
  "key30": "5WwaPWBJsnUbZSpHdmNbRfLrcQxTD2HaEK6WibQJ5L9vBsGvtzgJ5AZY4xeE8An9Lksbhe7wF6G2iGXobZBDTW3Z",
  "key31": "WnzJ6oxs6SnUqdYbMBTWY4uLxAHzKMUCd6CXjnECQEDxzz62bM4utvQFMW8Djtqo3H21vjdktbBX4ENz8VjTRNG",
  "key32": "4w728WZrpV3DheccX44poXwhttxA5j9tgBfmjiTf6CX8Nu6STyGFYrvyGDH6t7pduUF5gjXt4qmtmaJgBhST4UTV",
  "key33": "5yufyVQX9cJMpeba2XeCVi2Cm52AK4zjo1ektGKmCTzXTPHCCZ1gsMyrHEANGRgR5s6xxjafHUnNtyYeVF4grP3D",
  "key34": "55hRp3gx6sVNusPp3wqovZAtcxuRnKMsQuuyXTtYyXTFioaYTkyqgx1XFYTAMsHHchyGtpDxzbnncaxgKWE2o1iH",
  "key35": "4XjZgVeN36kWHj5HiBGT83n36QovETfJGU7kTsj1Q1F29ZN1k3n2jJJcffGt9akJSAamNkhW1xfhaoLomDcUQ3mg",
  "key36": "35o8yy1H99hPNm9d9yv3aoHY5diBeFRonrfsQCsUgfdQ4985tHTmURwyXuSnSMThJChjWuPjuv8oz2Zyj4UuoYJ1",
  "key37": "5Mp6Vcmkti1CygmXaKskVAbeE9rpE3nrx64CMPU6zma1hQAZ5YZJETpfEUSVAC4wSkuNMTVZPVraub1UsyyGrw3b",
  "key38": "5NvGk4v2evooHq9K9kf9fyN58WeEPCX4D5CT9eiMVujXTxXsPHzKmcHYEFWvkgxbf6kHRDygb82Erc5RqBqvXkxp",
  "key39": "2zro4TEkaFfw9gzLGsXrtTbp2gNsnBESn2iGKiSxdsTtKJ7DbuM9uZKSJBbFkDubFjJQ9mXqACeLw9xop7eCgTy5",
  "key40": "EeRNiVqTKRo29Pp2QwVKpC6kva2mg1LHXRc4iJqDRo4uuEfLCd1dYmuRDXnRa4gBSKxdG3rZ5CAThHHYcDYYNCm",
  "key41": "43mNyJQ7N7uJtHv6bJav9zRTnMia71xWVT19PahNbf6qD5oZGW5ehUroiKLihztxQwbhywkShXu3u9wUJaRQS3aA",
  "key42": "4Dkv3cAoiF5fdQe9VrWL7zpUtZRneD2c3VE21JfuPSsoMDTmH9fY488J2F1HWbJ1dGjkmWBzuaHeyT1SJ6QHPK7n"
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
