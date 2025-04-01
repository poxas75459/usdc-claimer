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
    "5Mdu2ze61qB9iLHAT5cZQC4fLTGyytuG48p7b7T8ugCBdGJumuGkAMAD3CojEoFx53C14pLgFGJzovEmXNpBa2gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sVr9XuD8icSs1BytazvF6DJGpoTLkgBQrvJtrmxxBJLpk6jw9raCSWhQZLcLnf6XmWnBrswHLJEhBcrHtiSjKEq",
  "key1": "4d6JCdH6AjkV9x9GTZ6WrceiD1JiMkirAu6NR1a8YqmbHAYkdYBr9ePQLkm38z9dXFwpbSmCQ9nMDt4emqGNkS9r",
  "key2": "4SqQmwu2mWoy1DAdZoi7XvUbpPN9WsPA3hu5Gvtsau2FGQ9aL5JocPfmEWUu1qQT5NNbgoGASYSyv9VoV1RgRGjy",
  "key3": "4oZLgtKpZg6kkZCq2nmNz9Qz4Te1S2Ptp9bRX22iy2kC9JYcHUqJAVDHWHLLCpVh3jXnsmk3SWfPtjWpLRgyRTfj",
  "key4": "3B7mXPeR6QdDFdgrEhYqj7qayvJpgrQBP1kZFs1DTwCF4oAibtDHK2dRR64SGuP1YcW7mKozbFcWq8VtC3GySkH1",
  "key5": "2ucTpPdkSsf1EoNLTALEssxZaPbfQmbpJfkUJq5mqyMXQsr2KEQ6yJALCTFdPTkbG9mhFWKJD991Yj2CL7dZqhPG",
  "key6": "5gZyAgSS4xJxqQcpm3sxE1asZXPLNcyme3ySFhBQbFZr9Db4aDwe5aVGy5i3cTtJzGoSBFqQAba1mQpqKzai9YiK",
  "key7": "36GEqcPTozrCnBYt68pRXrGi34S3GydPJbUCXefN2DJsZJcqDQ9k6aoEp7kMzoogt5T5Zrpc3yssGrCWkmotbz7q",
  "key8": "5HkL68JsHyEwHVUNMh6baymxoWsf3bXe4LnJQtFBaMeG2oV6sNLfS4TFDBvGyNB9oD9g9u4P8HV1wku8HUgHTQxz",
  "key9": "5oV9riCGLKjbLGGoQP76WZcgwDokrKK1psrqWkkCxY33fQkLUWwPb9SgAaQw4nDNFDJLz7fkgKjuUerYjtMkoEFY",
  "key10": "2TfeuTxGLy4AXPK24KcM89VWbw7ALKVhPXcRsSg5YZVKFLXQ3wsKCpNKZdLSdPJChMjr9WA1xcBZnTJ79oacEFTV",
  "key11": "3Cztaux1RkCCSSXssB92Mzhfd8VAVWibmowHGNN6ycDdVSpwFhDjYjGGfCKyTGVuYhQvBg8HCYMq1G2G94a6ajCv",
  "key12": "DFGa2gz4Bss9wKxfMzME3x5gahZsZ4R4Cgainvzn4Uh7zF1M4nFAkSnGDqDtbnRsBuwAMe5yoKC4siTV1VBpmj5",
  "key13": "2aUVEc3yCNsVt1Agpj1v69uWxpubgyjjfrs1yqEBoCefGctzVrVXRHpRC2FCo5xRHfWjmD949R83kmxkQahF7R6z",
  "key14": "5yGZnJ3yKASHHvCZzxCQGS4u8VdkEC2DN43pAE6SVhDA8Q4SGazUxeRjyjQoueDMvFNK7EoNvPgFaKR1KQ2BaNMd",
  "key15": "skMrUGPc4c8p9HdjixMojqMVf2dTLDbx21nRJBtZdyx5mD8AGfTeTDraYhyVM85F649eeDgUYPJ4cX1gDnyEiui",
  "key16": "4AkzhGSf1faCSEpjZsk5gvzCfyyAgX5YsMGSDQEyAUkZkfESZgNzZfKj2wYyRM2GzKYMXZRJgfq6BN7aR8Yt8iYp",
  "key17": "53QP2xCsPKf28bo5mvyUdXEQajTj3Xkt4KYnZPPxr1QxVdorcXkzEwAU3LBePPd61vsGMb7Z1aPgEUcsbpvpx6WJ",
  "key18": "4MW4kNuw7Cnd1jvEMfUhJXHWVyhbUA8eufoczHS9aiPGzV48veSszzbhgxv5Q9JqF9PScLGGZAGQ8y1c4Bp3nRhs",
  "key19": "2seeZxX9TtCHwgwPS7by7MR2PEyDZevCtfArH3V7seWvDgnh7M3k28AaZQKMo2gEUAtkQiK2iisuLXekbaURiJaF",
  "key20": "8dBWbB5H2i6JYQYh7VmJpFWaraJNBsFjj61ZyxNJMw3fkQTEGQUJUJvrLB7cjeA8DZvYxfXvAQKqMbz2CywDbWp",
  "key21": "4r44gASszaRfnZojnQYZeBqbQ6RcvQu3zX22ZwW8Cc6xXMi7nbd7jub8N8FNstjbfgWyjB9Cx2vjvn6MfrGeHXHZ",
  "key22": "4fLB1ebufUc7LEsCrcKQdaHKbNopM7LwoK6VWspxNvkVRM5BQpEkccUg1PWPqgxwYXV3btWjhoSCoPbPUy7w7AYQ",
  "key23": "JMyvAjZVrjU1tVNscmJorye4LDugetqX3vv45QummqAt6HTvgWp12gV4vAmGqHRzMQda7YvtmpSnoxyEwLBhER7",
  "key24": "2ZsrUvje2T2tfPq1CJyZHGTRisAmb97yefVgxNFESD1EPe5uSsChFnTAMhqFHdQ77x9rVjACbxjNzCbjV9mdS7ee",
  "key25": "PmhEQBgPLoGWr9DnGrumMaZc35eCc6oLUryBPyGXvdWFJZffRpTwN8nDJqFdYBJqCUZo93urjcf2Xnz8MGUJDWQ",
  "key26": "5F9gwXZWWxmiXH9MaNavvTUY9CwkoxbnLCq3uzFB7i9BgdwtLjHD1BEHXjqP5LUh8GP7MZqpBbiT6TeTMh25Hh1D",
  "key27": "4Qe5ihDC4X9o6Fw7KcwvGmCWRwNoPEGST6GwrEaBRTCzifdaT4A5rVektGyxaHCjxWd96qeoLnrjv2srsTTt3o6D",
  "key28": "5jf1hGgjthB7EKXyrYo3JFEptgWRzGG8rLLWARu4FnH6VyEMdGs1mNsYGwt65JbvCtQqJ5ob4QDuMQQG4t4g9VmG",
  "key29": "VKxEZy1HogJYUTViaeiWuRWPZa3CxfSanzD88ohf9YQG2vWCRTuDjw22KD3GUadqL3yLZEMHYP7WV2ztnaSCEgt",
  "key30": "28Pus8Ek6XdWuWcjZ5DhrZdrNWkFXFpinYqxVYyWARtpX8TCgW5MPXPEjeFezaKTFrpUWaZetBnYTmDvxdc1c9F3",
  "key31": "eMjXe33BkQMf31zufAdeVg4oe34nte6bCWbtvsdGrtVpBdu1hZ8bzDqja7iLDKRrhFqkHFTQpDuzDrVybUK9ir7",
  "key32": "3XaKGcZW2FJTMpoW9ercGnKJ1ciFy94j2PkapoHeM8wDfpZm9m4iNxCQSA3FSANGwQtwJN5Ks6PffjaoXTas3x7G",
  "key33": "2BmPT6BPv6QhS6g6n3bTbVJwgyCwKDP8CUKQsAWWGn6PXeivMzrH1FXTj2pFSkQjBUfg3vNc7UdFnPVN2J3xx8Um",
  "key34": "4vPRqSSLTpL9V4kEZSr53eedYFjUVW3ffhWAET3X5fmHTsDV1rfYVmmFL2zGBbPiHTfLCAY6ZShixC1hj1HBj7jt",
  "key35": "4vq6ceiNPps6Ma4e6EgckqKkvWSsKJ4XkL4gqSoXyU8H3T2erXbUZ4qUECUbdfNMQz2zUnvoJbusf1PsEXaUU1BC",
  "key36": "34tLfVmNd3sJBpySLr7h6gPpYMU8Mi4XB1vPQaXyceht2sneTXjKqrNXbU22M3j7uMaasxAkT978RPc2jbE68WZZ",
  "key37": "2dmyetDNVr65EgV7PmN46QeHeAkmdRFRoGNmyz17VfjZLKMCsu651mmDjMM98gSUG8eWRkKwckRfvRbd6GDwmMoi",
  "key38": "k9g3jSB9Jb2DLLVtKJ2Swu9yq4FJqFLUoBM9akMd66PaWc8TSy5x56SdjvrEtFhK1ft4dfT3x1xKZXdGxsvPRDW"
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
