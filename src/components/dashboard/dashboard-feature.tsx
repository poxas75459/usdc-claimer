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
    "3m6LKwbeoQeGqntnRBcdMiwjFw95ht8m5Ds6DyxXkwXicdQFV4yJ2TUjwyJiC4ZY4pwPuTHuEjMakhac9xNYhi9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5du31bbZ8Uu4ndC8DqvhkoRTUnXSm7mbyg2VrhBReJv5kFoz6fyytgBuRRpPzZK4s7NrZCEVMTZPQFTtgd91Ghuk",
  "key1": "sSxLi33mFPh4bvTR2BKsNCRnWtf2icHCWkU9sYV7rZ4CKL7k37ABw9ZUaJ4PAR97A9ixyYnFTbkEGBiLQgXyVSL",
  "key2": "4fGPLhWpDRbDfDyunAEmFoo9nMaUDTnXGeEqeZB8ifQCq62PkUpdjreZkw3kF4fAY9YboZifY3JkbYH3qpYK7d8b",
  "key3": "ZTE6HhBa2gXiWabgMeso1Wypyd8g1xv76BcRDvNh3NcRZh39zzaS3NrtMvs9KMysfJQa8kqAfP4Zuo8wM3cFGCf",
  "key4": "3PfmmXD1Z6ozqX6JtxSfQwERumCSh1NUgR9FSAYmk3mJSEkM9QXAK9S8952fnLXCq4V7y5oYD6HWNE88Fpm76LYb",
  "key5": "66i2dCoyNKxJ1wQqzZAERKfo634nvEzQ2CUyfrNTz8Uj6GLXBYPaQ23qiQJWNPNU8ka6VH9uQLmmuj69Mnhjnnvw",
  "key6": "yT1jw9wNvhKZmPBsGpxkdE9oHVgEUbXzx3KGm6MszrzBy3iTdbNZad6yTztrWaovdGrnNj8BDczgWLGAAnPT9ZU",
  "key7": "3bjHdU77U81rgYbVCX8MGbPFvE2cVQYdJet9v9PWHaGDmeSkRqc9rxSEN5nkgHZFuaUgWdtZgs7jBPVmFDiV3mgN",
  "key8": "x9AKA2nQmDs1dm4XVZUoziKb7zE9YrSAKxD3PhjRXkvciy86AxyWN1xwapxWGEQMJHaVmr7ChPaU2PUxBA28BAC",
  "key9": "4djhVSZseYRwTUtFY2RfRGpLggG9NHEPTmVfx3DJbQ1VgNVK8YQ2x2wmZLZ5E9gh1vmWzZptb28pbbuni6XUaEvV",
  "key10": "8MN3QAiQhS6SqkzbGa7ef2NuB3AteeoKefYidBM49NTNAodvDxx9jHkb8Smcx81Rijz1kuXPSbxSpkQKSFsWmwP",
  "key11": "3aKbLiWPM2gXM8wXW3Z1BqZ2K69jYHtjTUYvQWzHotaA4JpCjtnYHH2M7ADNsFQWunNSwxYJJCcysgrRNDHcHM1o",
  "key12": "euMs5yskhkXbdhr7TSssV3HVjvhTje3BDKtzDfnLGrNDJ7qVLwywCqbVFZPiwLjmsLp7gDV8jQ79EBPHSHf4gAc",
  "key13": "27Nsw5AKtHar5nRZFZruQuSC2aTkQj7V3TvqccQa6RfT3jKGF1F7M5RUDJTCSnJt56wEj7cJT7uLM86bHxUAp6Sb",
  "key14": "2By2k8jY88RLKc9EjDkeEkBZPQx5oEkD4M5ELYpaxsPRiGRKL7hSQi5Uao2GEHipidxWDGrm2xkxPscLoUbHZciw",
  "key15": "3Z3GX5k1SsDSEGLKG4VYWG3fHDJwdSMFUXBTx1p1UkNmURDuTdbkVXucpcKiyxhGTYuaJ1LQt2nou6dv4qNBxqZN",
  "key16": "EnHarGsjSeH6fSBPmcmPvmwFs1hNQnqoLAruDAdZ5AyRocdBaAkquH7zrr7YqXbGNAJarEZS6JazFyoXAXb5GJC",
  "key17": "4z9DpZhgh7mF4Duce63H5GQfpqLMSYj8ZkNFGyzwuTazQUcrbGUrStUmuRZ1FpZZgxgPq5ERztR6f99jvbM2FTAf",
  "key18": "26kDegxxaz3rQ23CUyv1LnRswV4evMCYE32T3NZtjGmQvmGZ32tTCecd8QfDbqZQ9E3hAMzzuSetRbqTuNzx6HNy",
  "key19": "4xHSzFFByuNsxV2mfHqr5LUCPzkir3dmARKebBwwxHWxhwd83NThgapq6gHMyb7ykT8QbgkspQgtZdeRsbcij1hR",
  "key20": "4nZvAfCf4mQqFseVEBgZWfw1u5GQ171k6uMGekCspY2Qq7mV66r5RPvxqLvDq9eV61rMfQvEnXkdskBwAgJpdn6K",
  "key21": "2N6QiFkdCL7rnxaNCfaJhHPh8r95GqtHuW4jUrkcCDbrPWRcoaW5wUcXWGi2oWCegwM97Ws5E1RbtNADGgU9YnYY",
  "key22": "4RhXDr5mRRQnhQRmkvEmMV3qeZHdDVi9XBjmyU51cZr1Fm1PNVsJqVpmNado8assYQNHmdrqZUsPBuUvKMgWVPCu",
  "key23": "27FpmMZkCZhkmWA3xNaG9Jze8feUXdFVRNWX5mnWJqbmT2HJSLmzoz1iK3UTz9C3bNH2cLPZ9RWB8hPe5G546EJb",
  "key24": "125wbxy4GPh9j2FiTLKTjyg6cEKpjPSZZnYXJVFUZLbBwo9SiXyNZvVezVRWaSTrCzmYh7HXNVmHTBZpcPgRiPok",
  "key25": "2qcnY92VNgs3UVMjVNUh78g88XBJbq3u8b4GEgE1NRybsNWLPCSFEzWxr9H9yFkNtPZvQ7miVv6f6sbwLd4ENyNz",
  "key26": "572rQbfeG2mFNCVxkVXwGrrJt2g5zQzsfksDqbfjy6d3BafsTWzUqvwnqPxYWVAM77Hz43pcs9hC9CeTW9Uzfwcj",
  "key27": "4Jf34r8mmiUySvg3uDriKHzMzT1sANhp16hPt2pLNrTAV7jZ4L1JYMmV93hPU8ha2h2rmqFgWb3Q6WjbufTvgA2P",
  "key28": "jiW9sSAFLJr4TssKNk5EP258YvpGwojufENgMAPSDnmmrGxUizXjBYF6EQCEH33qoTBAt4p2u7mR3oRAFaJi8Vf",
  "key29": "4AQ4k6GZx3oHXKBebgDnSYEFNJneEfXMq61kU3Ji7kMjamX4qg3hHzC3VheiU38jKbCem7NQUdf1ETrXWsj8aMKQ",
  "key30": "3LQ1Jh3mT9aDjGP2R8QPsuvqBdRwc2ZMjxGvHPMoF4H9Z1FX3eTozUHBoqhYYgPfeLNtao2R1YjYH6EE91iSh3NG",
  "key31": "2JquScS7byQqLwZgDbPrUmUu1vv3ZiwAs7nizkXH54ttvvYvKsm2KsfXXN8WFgSgaog1g5btXDUUDeQMddwmebhM",
  "key32": "2dMe5dMBpjikp9F1SqB4FqS67HCuzyMFgDYrF5YbsudXn7g2sTMCsahtAeqA9s9rVZCE1ktySp19N5CE69v2j1eN",
  "key33": "4JoWTPri1r6Mgc7M8N2wmqhYzhnogwn7a22uymnHmDZqvvtDUVskAv1XdTWsBnRnpkoNd1UQjbuaGKYvWULRsDsa",
  "key34": "5UFaJvu9MSb5YQvDaubp8yWPgi55ML9H2uapR7KnptqD7o46DbZmpuXYDhJhYCd7dDz4r6sVnyad8iNmDkAdE53V",
  "key35": "5YnEQLk3qcmnbKskqBYrWiFLYzbZs4J2Cxze4avcc7WAJnud9Z3zCKrTms31tquUPiiEecVSzbedyyozmU2ujf5E",
  "key36": "2SV1UXQ2MhjX67WexUURaX449epUwwNDyUYZkAEj9CEEBXqyopxUPd6JHkM2WitusPivW5iQ6kH5X69i4omvjSZ2",
  "key37": "2rw7WBh3JNc7gRynrweyAMrfMzUNLrJvBh3BoEN2ycqjuWpCSjb2nGbjWpTiaJvMW92vN5LcVDJ3zad4TXuCpX5S",
  "key38": "5FfRhiYVKRprDNXRWoFjzE9cb8NZzRqYVXe6FtD5LfFkcXUMyQRCoEAF1djQzUDByEG7wUw3ZCfW4KUpfh1faZDV",
  "key39": "3iv8w8yRGcPsdNQ2SwZnpu7fYLvKBWxUwJsNXfC45gcNWegJez8fmCAdbWNNH5gfuuhiu47cxsJA68YzcXi6sbx7",
  "key40": "3uV6CRBEvHtNw7Wvkmk7SEqiUpuBH5ydVDMvMtUFyByXUc7Rp6gww1ZVeyizs4AQf61VWXWZDKrt2JYXJ64RtHCm",
  "key41": "7T8fEQ4daagi3fBTsteW3QLttm4PSht1ZrPSaRC2Shf7jLZ9w9FnVCS95s6VUFweS1arphk5yKoiyuiuQCHhsmt",
  "key42": "td6UVeWhRpcuKrFBczcc8U8bsLzsLKrUkFiUfSoTt4kzB8MTWoaGK4PTvTXShcPayfuJVYes1MjTQiYouj6WUZA",
  "key43": "2aRGixY9Un68xFpcTS97MxGasXGzYxVkEEAJbjbKZ3ZNU73wtN8yAubpWc1EU7ugq6SnwkeUUL9ZE24FiZjR5XUw",
  "key44": "655aGpCJWki66pAAuyU6cefsGSvtGGW129GdBZZvX2RxeWnYWMFrfUNASbmNmmtAoFoDpEePnKDwZUhyNoSv7NQ2",
  "key45": "2yhWZzXyK7kYpjJR3Dv2dmGgoD8dsq5QeFkCLHF7eqvQU5wV3Jk58JL6FPMkLo2vE42g2YccUzQJe5Xcu1BMe5jv",
  "key46": "4VD37kyhrLaQSasgWbZpzwaneAbHH9Bvpm8mKrSXiyzn7CPTdLzgy8Xvy94cUDKsmfF223ojQvyPKhw93yUh7svn",
  "key47": "XuXmTNDbQFcASDUsibAnVsnpaPqJJyk3b4YfRkeJrQxZdGGD3dbNT3ukNyV3LUaYbx2zu7EB2J1jvhkUZwZfZGW",
  "key48": "4s7nJMxkKMdyNkqStwPY5Rjodh1gUpVJoWmYxnmNAY33UwT5gMw3Me57Tyhagmd3xAtDw289HBCtkfeiyNoD8YVb",
  "key49": "qiCwKxVUHTE26hBpMPPaXYGniRfhxoa6oYKfe7HkYjxiGyci79nmZoNPzCXYz8p4LZiEdsqCcGSZTA5kcMnHvtM"
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
