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
    "3KyXVRYseFRTtGYZpax1onU92E7drSmteSWdYiaBQx4M5VV5hvmbCiSTyAiTwNHfMmxm6iFDPMLNVuHjTTud19uD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBpR93gAw7idvC26PmrutF8HHJnGAZV1eNvgpyEvmcRPLzCiJghDur6kNtt4F4s5qW7LsnoYgsNYwACM1hJpjLY",
  "key1": "35GxZ5C1oDVC8XPFzdZ55nBgsWBNByBsdhuHEpXJrWqmTfwHgDoYvYWabzDL6sWEucpgk9GVtgx2WXEHzccR3er9",
  "key2": "5Wy3jpxtNuUPQ9abP4mcwv1y5Ud3qckx9qnzgTyNzvhS7y75VmpXcgKPH7ntaP1fXiM1DQ6XTbZeqUJRv9V7Cd8v",
  "key3": "2W3U1hELQL9515DFZ4e3Ly9EfR2qKe6Mm4PL1JELhpjSQtxxrpEnMRyv1y7sCWWMGrfUfEvu49APjVL3ZGdvg3Uf",
  "key4": "5FqAPhmHLwodDkeStj7EVKfWfmNCv85QeKtvkufdmm78yfZjH2f5RbwzhjB1SfVMJ5TczfTfsy1XbLaHoSgR8jk9",
  "key5": "poAZtLxndrwPsiJTVrAc4Max85dwB3LXh7E5smg5d1ag6CkyFvyafeY2TPtfRPVuj7iXZMd7p93aaRD8Fi59ABs",
  "key6": "2V2qG5d7b7Yrra3ZuRGTmzbgmK2JdZ5Wa3FnsWjFVyHNExq5XVDKJRuDH8AqvzX5gbj8GuQ1qhm2LU7UDT9VhqGL",
  "key7": "3Hx7sejU2WCMLEdnEowphLrmnpfzLyqwo6CGR398xf6EjMLKBhK6nQ8CVLZit48EpuzhfBUjNfbmtEK81KjT1jjn",
  "key8": "2AjewcP5xbFSPC2vTbt24Z9GU58w3BVnJrnaZDYXsJ9SxdmomQStzwq69EPAu4CyctSRtwTBKtCGxMbhzqowfERo",
  "key9": "wUvxDq84D6XCRGzFTAt6sbYWgXKA4tXwTo7BnD1DhzrnuEVKe87kpxQgEFbWehzgDKfPkmRbfCmFEf8xTUorD3g",
  "key10": "4WJP2dthcxiS3QDzs3kE5PymAQJNmafjkhENmTwAD6fozWnYL3D1uJbmHbBAtXSnsJjztYeaZZtGRPvpLhjhUPt3",
  "key11": "g6yaK6qjcecGH9zY6exbKQUajNcDpR2mhXWZgDiGXcSQunUWSgrmz7AVX8Dg2Wi4VSY4tRZRX1riGuANM9rmKEZ",
  "key12": "5tsrDh2FUDYSC4yLPrPesVJb7M2q9JNacXF74P7T6UTkMcgKWEuBqgfu9Fv7bxwqFsPBKkUR1qRDQG14RzicsJuW",
  "key13": "57sTjtu3u96geGA7BgmcHJsk7jWuykrr6WJML7nKzzMyoQmobDSstfdxdYRB3oNt6wzKpjeb86bMMdcEMpUvBMC8",
  "key14": "2Ed5d3aYNVhfza1vNLjwP81FUMv9tk21WspbmgkcCwzTMgGz3hiM653z6ubyuj3pkZKzywNqDJWaqH8i43c4WJvo",
  "key15": "4R3wcjtXxCgiC8M7GG1GXGQMeJGMqE746Fj718RgGMrrZw8MRz2Mwh8dGUkc41WdjFpEr9Pb511taud9rfacVNqi",
  "key16": "4e5gsYzmeaYPWbPXa11KUzH9xibqtkFVA2x2JnWN9KYdghHWCBrCzfuvTs8wbNiubztRhmunso3msDJXaCww7Xc7",
  "key17": "4tqTFJbVCHFSLzm9dc2XHHe8sgUqLDbxoZbwuB4VAGahGHVvA7K1koDdE4BFrbXxR4kKyZsMDtKK7LE4ods3s6ZZ",
  "key18": "5QHLcD8k2XGbyzkp5uTiWvGtxP7k1cZeTMikK4DwiYQWX1brVhrGytqpNGXRwGyGWBPzUbiiZGoSNXVTF7EA5iJV",
  "key19": "3W8ULEaY29WRfSaSXqbi5KouevP1exk1WAAUTinYAV1f56z1dtEFqcFMeVo9UXnNi1287wpUUuAYWi2Rc8ReHLTP",
  "key20": "3aJZMucJvRKK5bfCdpxUHDahMZjLgAKNP7xoGCwvjoUtfcvTNgT1EUZNe36EvZA6QkWEtdnhLkERQi3iDeWWnk8K",
  "key21": "3zqXVZAHdcJcdRFNSgYejPG9Tfd7D3X1gNDWRfdcfWbpJYuDgMQU8ZwwKHtGvdAavcyYHxnhP9c963jfC8EecsrW",
  "key22": "4dhwnPZ9hmLKUP8XHkiExDeoDcm7hBcz84cgnGzgnWHKhHQqe4496SR4cQHFRCT6136vE5EeuGNtX4HSMSKKcjgy",
  "key23": "5s2UPs4cMqMeyL8GkFAP9CGaobKFuijxp8rpMMj9e3jGxG17UbfM1Cf4wwwbCBmsaRVmvpnfbBHSQASAEWrapcok",
  "key24": "4sQaFYTqdihih8StDm9stpJfJSV1C1gW6rV7uJUBjKPrEknu9PUWzGpjmaRP4jPSwPEoPdihW7pYu7nRVqxFPkB1",
  "key25": "qQZ3WSnYukbhN8KcFLPtHAzDhGwDsF5MakmbbJE2vUtBAs4UgTt3KatRrAm7K5U6FBEiWrouLiP6xuNwuVcnppb",
  "key26": "23zV82GMmtDcbu8CmoTDtmXtFxrLXkdWBffMDX6hsqbQUxKVXd2sakhVyHeJFXJ3pumM3ZmpS7aMiGPbbbnfrrMe",
  "key27": "3fLGDCSu1Qi7rgTJgX1FZux39aMwFpj3r5YJQwGsJeL7umZthP2s7uNa5AxuPrFjKqpvasWHTw4ccQVd5FTJCfkU",
  "key28": "MrKaRGaMbM78ooRWuit76WWdUJWVmcKvQJik8cqzya4QG9g4DDMbxZdEr5SawGTToPJbi5kbPpvS8cvrrHqUKNb",
  "key29": "5ZfwGRmFPJZptPg89g8NNTYi4wGaJ4R9ni6jqmy68Tkk9oQRuJKrxyCQu6gw8agdjVYoRBzuGLWmZuRGEhiE1YAs",
  "key30": "2VNxf8zuuh4c9M68Dz1vPuSM425B78qtFCnFHcvW1569wMxUz5NjLQSmHfByJiBZKXNNFWLaf9fe72SuDY7zDizV",
  "key31": "5WpxmtGNd8xhxBmckMunnGhrk1GCimghC4UyoKAymMHGuhqfzrRzFRWR2qgVsf9Pw78F7nbDt5qadxTHZ7xVzfWZ",
  "key32": "66PrR2xvZj49rESfpDjNnR8ixhvMs2FzfmofF2ZKF6Zd17bgffjgMCDLDHVeaoam2Dg2MxuCiFXHVFAyaztpWMgz",
  "key33": "3GPSwxX3a4QM8dpF3Fzrk65XPw9w1aPsuupu4qpXerwKsapoym8FacQxVpVvTxQDETGbzULeYbQZEopDbb4fSBSX",
  "key34": "Nt8nSWUVXm5wRKA2CRgVcA1xmRFY5mQT4fsfi1VauXJsQ2o4shfJuMwZKvw8D3TCZkngF5yrtU6ZckyZnzzXRex",
  "key35": "GEpagkniDbpcC7HzwMuchbS23K7XXBzV13w6Ba5jY1a9GQoRj9vvdxjNpChSdbK4ohmXL1bUo3jdcNw1TQ9oyyW",
  "key36": "5mU9tTnpTCtCwgDLKcvhGcpiM8L4yb2rMLNMtZnfF7tk3SfH87oTi3CZWjvzGuF3ynYnYT7YrS68qnSgo7x6QjUB",
  "key37": "uYUy2ATCRfMF9Dsosexf96D5sWuC6VBWwaKCEaAw71454hrdbJb2h4ChuvXKc2HG1US5kjPhAbwNesHURTiPfKf",
  "key38": "3a6Driafb8D7EpePWyLLKGfwZS2LDRX2fn7UAVLmEeYa8gMUCxBU8UbGcS7egRTZd7LkYUL5gr68veknjCYwLLmw",
  "key39": "273jT2mo3fiwYnenAh4y7ERWkGYP28u5XBmA93q8P4hYAESMUcqoDT4wCH83dgytHq9dDqFwtgH7yT4Bo3EbWFtD",
  "key40": "24R1ks6J2xaPnxsdDMLpWxxqsiuRTUVUkLktb7KfMtNvy1rR2fym3G1pwT8e74u83bDPguWrJqC6zmX92aPFs4E3",
  "key41": "5Wug7RssKEqPpRNc8D3NsaKuxJBiBVP1DbwS8HL9k5U4wHUmrfMTBuD6RdCx11MvRRzpex2TNSdEcBcoRcCMtYsC",
  "key42": "4wRLn1V2xjZNhCkmWDLnQsEGw73KMHa6mHy96EcEzX1M1o2ruxFGwKi7t2yFnPsCmp62fURhbtcbY9RJMDf6pCpn",
  "key43": "5N5kX9uC42FNG7PW5zQm9297QPBFC5ggYxPDJ6nBni75ndkD4u46G3fVaSf7q5qoudtdBwsHJmNhgJjf5RHSibsB"
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
