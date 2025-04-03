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
    "2mYyRfmZwYsiPL7j87DcNTjcnjmRtNtTSn4Yc5GzRvVpDy4tc2oHsy2LTy2gU3ZDZbFA2W65J8WaMEqVvAE8hWpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NeBABUiVh9eNTXnar176VumJHLSwuZuvMFnTv9J3jy3VEfqHQCoPeKGs5btX5zGVguVYcNwGJfiY2RyphduNTik",
  "key1": "agzFxVSJUt8uBAJkW8QAhsup6xqZ6zNAUYqSPeP1HtrFv34Ff1FdZHVQwd6372rSo51jcVaYp2bMpTrTsuLbNdj",
  "key2": "3ZHHnS9CAHahQkJDqXPcjWLzerx4ZirX4xiCxUwooggQaeXyMyhRnfUuAzNSozcUnwmGgHZDoYA3WGDxYVXQ2FXm",
  "key3": "U42Luimd1aPgRC4F2an5wmViia7zt65jvQ8aAzrQsDcZgMtXFZh9FduNDiLtJWunivetU6yxQY2D9eDwxywp5ps",
  "key4": "2uVsT6MzNkvJpuWkZMEyZCd975vWhfiKrLS6W4gc4EsEtMftDqrCHmXKsauh3ZqviBfEYfJyAMLDTb4yz2nm3Cny",
  "key5": "BApf5fn7AUP7Edv3tMFnEtn2KUhyebXH2UWGe8SLw4tT1m9mhEzrUynFWNAN2yYJ3UhfVeEsUudaGMqJgaFAjBi",
  "key6": "3pzX6aLU4frwSufWxq47KQPUaPwNEVYxCoxXhrwmcpoVnTCmdjmGix699vHc62Gbx2QqbHoY375ENSNBVqDmoocu",
  "key7": "215AGRLLcPtTuSm8gp5QgqM8SvZBaj9zCrBUFdbzAK9diwM5bjhricRHq6Mb9qu5CrvfBZH33qkmZMGYvbYytBDH",
  "key8": "EH1g5E87qG6quKMB85muZNimHcXhcUi4vsJux1er57e98zEQgaGMR7J6U6JCGBXtmaZkKqKEpDmbwBhTNzgTjpu",
  "key9": "4T1BGLXbUMgiLD1GMdPK8REzZbFZtm3Z3puzqjNfyq7RumSTJQfSuAkAwfPcho3hMr82YGxWtQQ7YZpLhxynGGh7",
  "key10": "3hLC9kvbga7YGUS759AXixdhAuUWs9eUmTo6fVTeVrrCKjk3BLBoMX1VrkYnZADPqdJxodAuF8e9WGpXW3Wbu4R5",
  "key11": "3pVvDGNV7xgx9nFNLS3phHeS4N7BqT2LZ7UW7ZhhA524rpL9nC2WGWpBHFoYueF825eD3RzeKsf1j9WGYbroRPpe",
  "key12": "4Fw2c2fzBu2FMVATUa6QoqTbmn3CZnAYC5gFnPrWDARCqEbzAqZBHxsCMGC3XnE1vyp2DT1j7gZWTebrg8txkRjY",
  "key13": "nUfrRRPXvCB9dnEfSF3hYV8Rt1kN69wYEJdQfwafNs5hgsJFkHa3rGiAJ5d14pYMcTqT58b5jSdyp4M5yzdY8hm",
  "key14": "3zdLBkGrxLR8EYhpQejdQucetLxbKH7tfgr5A3FmE6Nc6CP8Vsq8EQ14pBLNamyQKgzpLqyE4es4yWhHud2DLd8A",
  "key15": "5rS8pt3eyhdcyhuY8oAM6MSFbWn1YAcGBqgyK9MuEm4mLVced4Ttz7gSJJUhmJFRy6iSEaW5kpyBr8HuYyjqEyRi",
  "key16": "5mh5mXxfwp7bSzc4g9CLjPwFRFDwv31whxDHwCg5wnDPKc1to6chd7oeK4jos7eVASVFrAnEq8b3uPVXbEkuWx5v",
  "key17": "2ZQVMqp9pi1kQwQd6Am4SZgNA7kFbBAvRL5tKxTMt81caKB52GXPaAEATkWQWvUtcrwvjKLZskgqbTKw8qBZkKMG",
  "key18": "2eELHcZsNQ75mswVMRYM1vKDWY51uJpWy32fxPiUrooWSDbvHnYyXhZThRTmc4GKaSrCnkjbnyB8yXNs6EMfx7eW",
  "key19": "5hWjW3rvf7vspftqcRw96Ne3xNjHAyMjBEVS8zwSJ1e529V4Xt3kT17aGEXgu1ucmbWeCLZkaRzMBFSxqwVsFNXU",
  "key20": "5dKkZdxQXQ9X7DVcxV1F7ASe2ZwwGGAKXEhZJTgYMxg4EaSYMcNtVQf7U8siysKR9i5Lp4fLZ6kjzzMmcxRfJdmB",
  "key21": "5gCD5QNioZVsMfAwzEZTrz2oU8Pq9yJw3EKThyYAetMNon5dsSoMMyiar3Bx1LDQJ5RmkZ5dbaH5nUSNXyVCsTjH",
  "key22": "4JA1hTKp8ufSpHSrzSUrb9iL4nouCgM5AzZGyvrMZR8jkaM8g5jqeM4D23H1ffCvFn6BHRvDXf4UysbTt8Ukw1FG",
  "key23": "3u6cJWJMKD9qLfHB5KpX1L98H84ewvo3aCJG7hG1sS2WFgyGVuW97Nko41uhXFAmEpJNKVLCjiV8rqMfMmVMAWah",
  "key24": "2Adyzvhp5Fdn9EE41QaYBiACvWHFWUh2KUh5movtDF3zzqHLNFBhrxhoZnBgvUfAHB8MP8S19SNEBRqCagCzdnmN",
  "key25": "5phBy2yWzG2cFoSeMYuGkCGGaEmhGBZopEcUCBLNjVbEfDbQ1MM4zkCSVg7TKbNhL9mgvp5PMDdPLkzZCUMFB8So",
  "key26": "3GcdPcR5rqtUxSpYyJN6HgPvdcVQC9LTvZt1Kt8faaEMdsnaAoR4oWRSEjHjLVTyLtmEwE6eNHFcYM7oZvi8nGBd",
  "key27": "hLp8cSnWjcMFfqBhgWzXJSG4LWSkDYHCU512Ju7rgiyKxhdQ3Ki3n284BxjLWS7Raycp7N9nPZGzf2hbMTiPqJV",
  "key28": "4Co2AzFVkkoSDFWUokYt4YLWvfvUxGXrXGpPMiHvE34RkwvvXuLrtdhvgAEwCoAa2g5s8E96JECtBkNJpkfYExrG",
  "key29": "4QdVmVwGcbpPJjn9aPwPrxh7MqURRhTo4umAB9wiFemeqehTs14JMEKAmYJcKwRtMQtrd3B6aBynRp7G1mKUWogP",
  "key30": "5JcKrSrXcVKD5n8oan4pRtjf3E513YdpvXGTAaScjJgxYn5bP57QGGqXUAfN1bQFLuJXXqMZ9NmxG2qJ9zytHwXV",
  "key31": "5drcZ9AWbHK4oAsn4UpL3gpqeyvHTd253B7zneaYaPdBk5pEtJcLtkBtLFLUyDHBxXimkfggswDmFkTRpqR9zTUG",
  "key32": "5f6Dkv9N7cCNL28gaGE7Z51gQVDSN5ny871Nzw7TPMzwi3VYFXsXhdUyoJyknrNFC64vqpJkUxAsM7A6YiS6srB5",
  "key33": "4bZgPQh5ojppYuTv61oAK7jrPSENrnsS9vEhMG3n9aYuzVyUfNvAah6jMcwjCKJJFBVHRBK2F8t2fZYn2BmYEiDT",
  "key34": "2e2p9K3eiQbPErQXjn43BZZopWpTCxyihALRZ7tS5bmnMrZvQDNyignAb9wTM7FjqJLkwm2riZG8Nr8R9rc9uHoj",
  "key35": "2cxM8cGXizn3fA58JXJMxEZyMLbhVQZs8hTLbBSt6K3WiPgPewqXZizpDZBJ5knN8VwqsDByxze62FiYYJCHspRX",
  "key36": "4R8PDFAhrViWtsKE3cm1Hoi33jNSg23TFDtB6TUQMAMqPPaqoRcrEmscGig833bkb3EUEs89AShmUjrGi9vLJuu6",
  "key37": "4WSjV293QRdshS4QgfDq1K9oSL4ZEWcQ8j5eTj58oRSW2SzQn8UEMCypqBQgPBf18CnMEow1jnaVatJnf21h1mXR",
  "key38": "2BZd4wTZ2opdnRs1LBnsZznPLUQXefwypJs4dpLLMtQnPezZMcKWDF4Bdqnb65wE8VjdVDduTfW4EzrEuDEc7SFZ"
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
