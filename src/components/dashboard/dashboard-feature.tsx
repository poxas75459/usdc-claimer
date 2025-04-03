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
    "4raGSW2h6p7jmERPuhTQYsPWhXFgfeNWvtphdo5XGCbg8fDcfJxvKftT3jQHxFLFXNDQ6yBFTgfoUbrZxmBv4ryA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3AGTbKteqPc9Gy22BPjYa2K3547sQpV97Ex7bd6WnhiTGgLDwf89yMqife7QBb1d3z73vUdsryrzGLAwXnPpsg",
  "key1": "57WcjbULU73ZSWnR1foA6uYdKyTqsg6kKqQ45Sp7iNm9NegxfGkE6rmkXSP9fCMk6zPTDA1jVnaSGH93mJ71qeND",
  "key2": "3pZE3YpS1cv3hhAVWsckYo7pRQFMySMgEo2JGK2ao6VSBkcGpAQ5BhVUwpSM9b9TxiBUS3v4gXEX1wLx3nNKr8Q8",
  "key3": "34NT7HNXJpDoXF4h7abwarLPFSahkyDZCTiU2haS5SSPJFtm5AdYWaHRhBAxvmLvHry7wChdcbt94xSh2LXPgr5G",
  "key4": "5RpeabUpmAFH2LeURckyitSEs3p5wc9VHF7nraXuNEGSoysf5jnWBRWz2R5xP8GgZb6YUZ5x3XNJYvCTDYthfwwR",
  "key5": "4Se7i7N5Xcs9D6xSJu6ce3HKSY254kEqiqStgDq2syUCdQc97fF3yzv9d2Q3uiXjVGcCun9CDhVF4PV2GAozvest",
  "key6": "iLBQX1ZsWzyTKE6tELtGKTd7SBZ9tRTfTtLVTHvR7MxW86mxMbVU1jX3qq8qZNNdYZrTibTGYJEmQBJnxYayejb",
  "key7": "AGad16ELgqxp4yV6yfLHb2G71foBRVUH7rW1k1V2U7t5dU1sSq4N8c6PMK2t7LsBNpzMu8z12kHFxSz6MwAKWed",
  "key8": "Tn7J2PLS1RSasxQ6zPMQpXp81V5WqcWK8ggPASFH9gA5cqb28f5kbaqjYDaqXAro9md1arw6kMFunSqg7pea2Ci",
  "key9": "3UiTUhA5qy9vZKSpo98v4DU63SmiWtTP65WxxSG9hZac84y9dbEqbq1n7Yrumc4orgGb9Veg3XS196k3emPyxZKh",
  "key10": "XLrWWZDsZnmVwSxdxroevMy2mNL8ZAx8xrVunaE1uo35vnGsQngNpu4vJxVKqZNLR7j1pHQiogriydsdBoXE296",
  "key11": "5cQcmQc7P7rzzYchdtG5ZLPxaGj8oSdfo56AmeeXbY6N6J7eTyQTaThYMJYJfMkmWk1VJESLAWAztyqGJPfPnzXp",
  "key12": "NX55djjW15RHJSwgHfp7CrKqM63feRt6qQkEA5NhF3nEL7AXVpZDivEYemMZhtPwVUedg9X9GUHLQ4f5P3hobjE",
  "key13": "3Ks2TJs49XfokMxqbobZpAJQ9NSpnd8rjgoTdJmq5wWkrMWUTDn5KERsU6GQWD1zTiAG6gwF2KxdLVPd6nouDZFC",
  "key14": "4BNiC3PT3iUaEWdvJVBYVE5o2aZNdzmTBh2oMH6xAA5JYk6LU9myRh1iu2RBWALbXwEJSxFeMCPD9gjvrTyPmfUj",
  "key15": "4QY3ajLupAZPXGXLQWoVcdrDDFUDog18oh1WsYMAz6grFVFk8tyJFt3xTmLiJGA7uqhu2AA2jqfR6fvi6yq8azgE",
  "key16": "4BMwrYsNNVoSy3odw7bjBk7WPAUW7aD6uWbbHnBxKbh1jsBHw1mCNcT5sPoPzdJyE9xrxRHBz5sAvxdjhpu4L6WB",
  "key17": "58G8JtCvWNYhhMG5zZw6uekdXBAwitB8nquZT8WRZygnWiDcBMQY6RitVyT56EHTcpHYCmrc9F9QREYkaF5D79hb",
  "key18": "5KUT7KAfor1Eunn8cwsND8Zs3DN4HvigTPGpqXxYADWD9Qz4LD9yM1UewEoAM922rewzP3orUTd3KbEa3E25a2Vn",
  "key19": "63URxDAWvEG8dTM8rHgAah5QTKXttywuRdkjVqqZ5j3PxEAzsD1ghYYZTZTfr4siXR2yH2gCq3rGDGWjJioEswjH",
  "key20": "2mDjwXBidWdTZicMnFJ1CPFqjMgPKhLU5qt1oEWLdDSPhs9mbqrLwCeR4sVAsJ6bMC788oxVND4TzJMXTmgkVTkm",
  "key21": "3MHJUHZnFBjpxvTjFAuF27PCLvftaRiMXFbdu9q9nmKgRS6dqVuHaTrTzPe3NcHKuDovw8B3s1PLHHb1bzw1j4er",
  "key22": "AyxUzNq8LjMVUB75NCuKUihUCQU6AXFGoQYW1Up3HTFfPa5Es8NvizQ54wEXZ4NXbtrEZFrLKnbae6jBsBXoKDc",
  "key23": "3hvq6NkrEbC5i5mUpGHSrTyj6K9YLbE6Ja97CTV1ErRbATry3X1m8E1ggvSL4qgp7xQNE3V4UAFYCE5CKgR3ke4y",
  "key24": "aHaHvAceM5FUAKAvs4NZm7uYGyL9vA5QkgsUb1B7y9avuu2kgP8HuCn7Nzt2mpfPS1kdsUy9vCcxH1sciDHpnpH",
  "key25": "4m2bgw5D1ZwMJbUd5EjVxgdAJntNGUEYYXTrNdLMFELX5ZkmoL2bWgYnrcWDwHArkhKmhDLwUFvTL6ZMJ8JoCuGw",
  "key26": "3Z7eFsCsrsk5Czafo841Gmev7DxGiDMjmq58hUtLpYJ6uB55P8K8oUnCx5EEG9S85Grz4NyZAVK76Vo3k98HdVSg",
  "key27": "ot9TxG7DBgWN9Ns45a6HWmHmPxt4N8r7gsrN8MmLm7u7wvDqTNnw1n2bQfyU7StWGk6SmXAatZBVBeUoqR85LzN",
  "key28": "6377PWkPpGnpbPWzaA8Ua4s4JYksaatc3NPHWbKi3qdNErD2GUsGRAUhUJN2DQgGoNWVXx8PnMp4V4Ucjncjce1a",
  "key29": "6QVL922Da2Fu5MQoxJCeEoyEPdaQrQTmByVR3oPvB1ahfhyUv4atPTSxW5d8V8wzP4KK6UneuTDmn17NwPmcxYP",
  "key30": "3VDKgsXvcZvX9QWHj9s6AFZVDGoBhssy4BFsLNF22cWzXMszZ9uZkksRTkmUhhJmxygAUBMcUeYw1Uqc332aas9U",
  "key31": "4vasZut7VRWNoC4DtmgmSFYCi2nwfQEYV7Sy8NTXx4J6QhdxgcnDywFGPNpXLnZMo6sBs3xnBmfqcBkfJCxiKApu",
  "key32": "31FmZJqsHpfh9GTnkwPm4rYTwjpAVkd7SNVf3Xp1fiBZ1jWx7PHZfUdFcKgeDwDseojqKd3fQaD7Z1yxzGzZ5Jfz",
  "key33": "2pJRDokMjJG5ApVducDo3sR3t9FJPdn66TpTKBMPowuyoQhztqPQY7dnvFGKPnFeVU1i2wqjKdQU7WiBqoagEoTE",
  "key34": "4v6eQDqEfKNJn7sZMFh63y6aRopS75gA1coyqFsRTqWMRmHgzp1EmVq2yC7Kxk5X4BJ7Kwz13ZdNLqJxYpVT4jZb",
  "key35": "Mhy2f3yVRePG1DJtE7kFmSpe31F8krZg6rBABeGpDSbwTws9LX7xYn1RDYhDC2ZxWMDcGetuViVoNDs8HcKjj3a",
  "key36": "4Etb9GqkHtns2LHVcJrS8Eg33fngapF74mocrBKw1nw2A9KxkgEnvZEU3y85MJiBfmWbrBSxkUwLriD2BEoo599h",
  "key37": "2BtB224NFWRPsQ6hPrLzjnDG5XR9GkCxFhb6BU9FpXoenrQLD9kBHAL3j8dnZTTnBu1A6fju4e3YmG53TrL6qn2f",
  "key38": "4uZwf5Fmz11JH3NdbAkPsLAFWC2D1BFGSDGssEFpj9nA7m9L8mVA16ufdCF8KypGwRfvwW5BLCW8gUb5kARMyjTB",
  "key39": "43xZBFjhYS7xH68P924ez1hM3yMyJ4m8Mknxkz191pvbysoQCiuE9YziqDtz9nYs4FZLCPbt6efeDRsWPVuPQ2Zm",
  "key40": "4UZSckHccgNyvZaBSnUouRCKQFQL7LmgqB12tkNx5jjcP8g468PkiPGco8v84qhWgSuy8uwCTksxHAbiuRvoM2VL",
  "key41": "3yrntjegEv5E4fbNWb3yoYb8XZvQGaZzX5WR7fpTS3J5MPUEzLD3H1EDVk3nw4c1wKsTmW6Ju5WTMmVgkQ8NurAP",
  "key42": "2dFVr4MeUc5zuoYw1fPpr5bDte5WZotQxoNHRUHABcWW1hbaBhmzc1gLGYQhYitMM8Hd6ED5TyZ1F2AmFqUE4Ckn",
  "key43": "QavANSxojw9CExoZz6aosr6E5iofhyPZiDprMMtW6oDdyy3bZ9nkCvfMEjs1RbqSpnvxL1Q4FuMN4EAYYsrC6Pg",
  "key44": "4tC5uJGPT5tpbwHU1QLtFautCHTwWHUgPigQ8nRw1SXoVKN7gqafFWLye7VpXc114X6vPJCvrBm9DVWw3Yj3MAbU",
  "key45": "2ZCZNYiqRGjzpEbFVKZSAmoqENQwtv4t8FvuvnTuoEfVZCPBzHXdVv6YM7KfXPgcyXwYf581kLo7zFLV7oTecja9",
  "key46": "3dj8ed1BerxxGBciAMHJEAAsSN3qtL6ga6GszghCLkX335iguZmCKivwWaAyzonoxBUD5c6J6XfvpGQDxKgVPRVe",
  "key47": "BFzyA9nf2evvqm3z1a97kuWpSAtWqgStfHJq9sdsecprWgKv7KJWTYrNLf4Y4ffeyocK95nrBz1nKGgvCUFk1Ak"
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
