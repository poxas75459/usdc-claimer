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
    "3XbfZhv6GJAjg2dpgj8JquprxzAofynij3tJm9DWeXtzdFvYMsfwdPntvsQN6WsCzqQuGFPnVZyyRrktkhK12Pt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HhPhqXosWfFQXR4AQcMRyCgfACu6yBVKma2TxEM6Sbab68m2kXnQucLwX3wfGpMAJmwpGJ9bxaoNF3SEyvmDzRf",
  "key1": "rJWZgxoYRPLVM7LU1N9eQx4ZyVtGEsaJZW7UWDwsv3YFuVC6UzD3QyKLwSZnbyJNePzjeMqSiXcPPwJGs9fbVLz",
  "key2": "5AGmdLJ78R7g7hSmcaYyRZYnm42NskVnwgbTGwcn2WN8uw1NiPH8QhN8TG1asPJzEzY6ckNUFkJTPrKHWeNqjUDk",
  "key3": "3mvDWb2YzxLy7zVGtyvtMLhFNffSaAnaainJPxzv2AgeLkTTwv6AaWRmqbj5mpnUy4RqxVAyDLxrjTPiovSGWzSk",
  "key4": "4ehCwEqavUNaqV6ksCpRQrNuHPPcaE4CunyVZHuy1WCQUD7qgovRB1mxqtfZRJNhtm6xWrNkYteEY8jFY9qyK3HN",
  "key5": "5FGcnjNtedNqXPZrjZfKceBCxLfeA7TnvAMs2av8Ah7XCAsitpfYHTSPi2dYZRfzqx4fJVNg2Lxex9Qwhhunqutx",
  "key6": "5aqkKJjVcLL8Jk6WMyuhyGMJfkthFVXTpPRHUoG2r6KmTPRsto2Mm9PtVmGhSfmgwrKwkNekZEEorxp35upBeYtH",
  "key7": "3tRUVBn2vveqc15mc8kzZZKpjsQdjVMSuotGTu8UBSF1xXoVJbCT3z9M3mxC6v5o73Bq6xo4JpAFdPcfncCqvN4p",
  "key8": "2zH4veLpSeigywbBAch4msoGPjXJcnziEzecXDxSfcQNuEpCLNzyNoXzAzC5KyhWWZvYpoRoUdN1GLMgGCzrNvCE",
  "key9": "4LH5c7QH7RC7QQEegtYeKJsXJ5F4t77E3xoAirCUZoPYfQXExCVSfVN9rN2vQB74e5dFvaquotxCdTNkweMqdQtJ",
  "key10": "5NV1SdyqSHe8ohieoCFZfGBVuEqsy5MV6KJ943FXdk62xLtJ8hccUdSBx6vfJmGDVYQgDcfiethJvTLkUBqmS2Tu",
  "key11": "3Ah4eevUknzDNzE5gX63LqoTux42UsHxLmmpAnm5azcxcgJdY7K2Y5Q37iZdLigucckvqSmxMh9DWA4WyGeeAz9M",
  "key12": "2h9jrMDkxbydAWTjjcfuJ1nsYjPo8X71eXK2zKNtnYAoaEsW7Thrbzr8kFiTxHSzHyJQ6DsuUkpeJYQd9wREUB1w",
  "key13": "4fYCGjmm3E8Ujiv9qJGQpFSVfn7xBvUFMhbRp1EzBKVUfDFNZJdnJYgSV7UMhB6GseU162N9EuGc9ZHKU1QPpTeh",
  "key14": "4jvecHsygBbTZiR1qqmyLKYJrdZwWGSUigvRKTxP2RXKbKedjTsE6vB7EAXSVVvbSUciZ6ucjiNJyqoFPVQVvD7h",
  "key15": "1GDV7ckGHpaNUkufyyn9uGAd4NxXHLnqWsNvetje7ToJdB2N65vnoDLHAiHpZTZiZi8JN1fMrBEJN6WFYQvV66Z",
  "key16": "3RxkvXwbXEPYmVWfNFiirvqCT2CHCAdmiPm2iHH7JzZpKGUFWc4nDVXwVdgYZ6NYhaf9isTPj9Kxt1R9aes4HyEm",
  "key17": "4ESx6qkFFBLowqHmmH9d9rhVosCWXozVU53r1grQ93Xc46SLtbJPy1E7yAMNovYECUazWDs8Q5SbBo6BPwSdMxb6",
  "key18": "4UTpmt3sX86r8DbmPEw1zcd9awRRvWkKupHt8anpbgET2tKZukLTGbjNcSQMRsWU9rqMNsETC7WuaKVhV43TkpU2",
  "key19": "35HkkjsFUXvKNRSar8kMaA4sYavQc6fec3LLVh5hriauPwZfwAr6XY5ma9pDfh85cZDMr7fgAvR2oX7REA1rJKwz",
  "key20": "6Crj1MYyJ5TMZuCMpNLqDmmUyVmsoanqXmp7wgwpHkMnUkPv8K1E4XHoHjpTroj7j4hPqip56WBSMEPVp4wzetd",
  "key21": "45qHHLH8hRYcfo5jt4LvCw2DvCu2dHrFyfoAgmTG6dU3k9KMC1384TNi4v3hsdu7zZRFxKJBS1hQarocr2DZVUh6",
  "key22": "2AVZ7QhPBF5aN6qDKkqDXWV4CUfQkE8p93P8VaLZ8RNKQJpEnNRQLZM7heDd6fxcKvjszsnm6x3TYQFUVJa9cJS9",
  "key23": "4Ltg3avWY1FY78cf6fLLQxZB8PMvC56Dy3VRaAcoovUjtpBC8sPUsq3c9qSY2Per8H5DK7QH8mqeHhnp9ferYyqZ",
  "key24": "4Up9RekErYm94Tnq9t95QeYy3bLAt5XgJxkS3MdwVNNrChqdUouYt3wtvPDkiHZDJuUr3vN3dr5xaFCj2SZsXQW5",
  "key25": "ZZT8pSWQGPcSdRtQVAGu1QBq4UZGLDKfcFjSDcviKn5UZN6x5FRyNTSxtZEkp69ozSc4n429DhDZQ2XGVSoHSk5",
  "key26": "4xv3wEFNzUjbUJBeq4Hu8rh8DYYpYhdJNdNfEUFHYrPenPEGFfbkQvFkGfMKrJMyTJx9bdddBUKduZvSBixxuH9p",
  "key27": "2santymjc5bx3gaQG1CVWEUuw3oS5Gx9yoowCKmTpT6x6TV8qbLJ8hYUgKcBaR4ycRgCUmVZyCVNb6pLhfrJaq4X",
  "key28": "3o5mhJgaX6WwANCLastTNVfp5BgVgwAHJB2hhKfbdronXku9PnfFNktfvfmKQX7TpgD3Mfe3oRzjCW8kTyNKb2Sh",
  "key29": "61tCcArs8zyy5RH38QoqgPiRZydvJLk99G3XmEN1iwEXt5jvDD6286aA1ArMYnbA1vm8PQbSweAoWhKe2mr56LVM",
  "key30": "62oPUTMNSqUiYZcgJfsJGT9V8hzFPiAHZrsXQjDxzcpaqkZswPyn23zieHK6KLtqEeNz2e9h5KZyyKnCpbjxZkCe",
  "key31": "39vAzNUDMddbX9a5SrSkQsrqfY1WR141emTmJrMc8NTNEb381RW3x8Dzu6pnouxfnjPfW8iM7H36r9JNby8aoeNx",
  "key32": "42busicuRrQkrKRGcoWBFNkZJH8GYJLt3B3SivyreYpaZFMdUdXeJWocKDDZenxrcbQ7PcwBMZGwsdh63HXuQVfU",
  "key33": "A7bgFoke1L2AcnHxDfb1G4SYwwCxb3UvAC3TBPg1fX8iSNsvvXPokXULU4V8bw5cdyeSfXtXz9r3DKR4paL3C5w",
  "key34": "61wwvM1XqdfSPMxHuULvsMr1iBXNg82FUHo7HtzAPkqynkVHfe6kz1VVNTmkrSkJzEWCYUq1ipMjgk3bvw9NhXxM",
  "key35": "5uACkPafPcrtZbZHsaBi1sAzr2sPc6kWRnweG5gk5XhymbodJgt4CkzwWivpqEhXNYmSoDRiuGPJzmqpocnxEU4a",
  "key36": "2TPbXTkAHKSoQep4tN7qkfeSu62JoFdxwavMw1B6J6t97qK6FrERykThjaxxbvrsTtu8hM6kZR4BrG9PngRyXca2",
  "key37": "5wWz2h2ErTxk1n4Wk4YPKpfFeqvBhakNdg2djeQxVWDvtSCTMwbMVvppzeJynpWfvpU2xPZrPCxPZpgC2zPTbX9h",
  "key38": "5G5V7s1aJ2gkL5mvHqjQmS1WSE3PApFdgMDVrZX6gCxpZatetdPuS6r1NLnWW3gbg7GS4jLnR3ZZ5g6rY6YDfqPj"
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
