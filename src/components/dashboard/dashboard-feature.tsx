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
    "3QHzxkRmhJQ9KbyJDsnAXEBehDiiTSbDSsxM421eb6ZYaCbXw9CA5HsQbLFUrTbTJL7ZngJ5vyGvGfFHtyBYt8c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ppcgW5R3pbbwbTjb4ZbmA566UTudkVg9LmCHwPmkBw78naQFojQs4p5Yp62fiWMfaGJxrtroxoTQPpkrpt68cs",
  "key1": "3bUCgLGHAmcPspdz372Jt5qw7umrFgqkHodNX9D45opWm7bEsQJb7E1gyRvkVfvsN5PAZEMXGZAMnQjMHhWQLGDj",
  "key2": "4kRj3kXcyxzdaAERHEoRxMETVXqXuNLVQQ7svzZA63FpykWDUCAgaxfzwUmVRgTBY3trM4N67meiiB8bXRAoFb6M",
  "key3": "2EDzJnPMEjjWceLEEExWs8CKf42AsX7XyL3B1BHG6MAvAfN78AWTtkNUXFfemrzYGVfVYb1y6tP38GZFYMpdA5qc",
  "key4": "26y663jZUfxyuaLaPE8c6gu3YDRmP6hhgiPMhzi13GThnT124cRvrx1yCSziJsgGdryn3G6tNsGLNXfpCuEZLLfM",
  "key5": "x79zgmjeMCqs8iEY38ohvuBqMHTzMLfyNgp9jFz69X7YGm6GSTHUTwwQth8pKddyk5GzZG84yirLH4Tc1kSxUSM",
  "key6": "QWWfXuQgosHk8gMHV1PEq1kfqGdMWyV19WP9Ta6qd6XWShGAeo4MC3wYZcJxCjMQNTpWBxyw63fCM8RaVZxw2nv",
  "key7": "4yJqi4paMVqbQGh2DSnvfvhipsqeGR7RF3DR2sTj7Wa9djrMMWmKSysFaZN7x5wNpj8FK3V55xHGaqDpZRNg1Szg",
  "key8": "4hQgasDzNAt3sQH22fs65jigevDxYNwZH3aWUuucRA6f88TkNFJjU3jrMwCARvoH61KA75B7RtakJM82FMQigSQd",
  "key9": "3tHVy9VCK2dz1syGEqNghxFyqHEyypEhGB7poivb2cs8f2Km7Bf6td9d2Kdi3v54V5b1sUyb52F3xKjyBpiSrh1j",
  "key10": "SJ429akG3quCn3q4mdRYgd7Esfm5yP3SJ54vz2DvdQfoH6pYqK5C16Nj3tv4Vmr1RcDHV6Ze7E4kBtTTL9bebYm",
  "key11": "2SZxkQW6BP4PrXEDFono68aWSd9QfCLFMGDbM6rqZVc4gDurvB9Gh3jepRNPaXXPKNj5JjJyyGb41DHGxnJ8AGoa",
  "key12": "4ebaLg3yjinvHDKjSrhBEELKTqs8yvtmPMx2jAJs8rVgM4DmEtBktNt561MN2KoGfdDFkriq92A6TL8gZnBUpyfw",
  "key13": "Uf43J4ZdoPeGFSwBq6sce1pJZKw8cFMqNu85ZiUC168c1KKvmEKnCXjATxAWg3fwZhonKsoGH3yJpmzmBTcQgHe",
  "key14": "3AdM3dRQPkA6SNzowz48e7P9pNjTc7tp8qXxAy8AQpyS3iS1U82Gb9oAJhw1xuCGsQHh7ypVzF4vdBhNr3cqyt3e",
  "key15": "6vUHouhNMGHyKX1GYfxdTuQGxCMVjrdAM1niLryAK2DMcTzancTg4daYtGTmeFg99m7hJvjpGd8vdPpDZg2RyXr",
  "key16": "VRkrEhmZKjSQXHd9JCMtdDsh36C6JkLqewAZE51QKcaA7nm74HKVHukn9rB7sCSZrMkV4JQA76NChczfAJE2Wpr",
  "key17": "2dHjWoTNzftfJwBd2eJz4bQmNrou92ZBcj1ZsfFk3HiDLfV4nki2tHKaL7Br44mqD1Dgsy5Bn4VaZayt4kM7D8tB",
  "key18": "4VyhpmjFvh2DvLpZcT7AQ2xCiw8ZerfFC4xU8gFbYEwig4hpiSYSF5krr8SfptPXjFkXTUbGtFu1PnsxYdRaZPqF",
  "key19": "121Vhk4QmLZ7r9hw7RhMK9WSwkNuCwtVVYs8ooFq4hkoJ4mugwvhawQBYbaehbZs5pxSi4UmzLAeJxStWSXfh2uL",
  "key20": "2dHak4oVQCN9csEsJY7T7Am1xHWVuAYMChFtD2WrdZuayeP8SZHHxzBnjATBhd4UTpLx8P5m6b26nB43rzasLyJt",
  "key21": "5w1YLtUip1ZpeUf5xZvZr6WjE6DpF2GuFBJPcj1tceRe14y7iXEE3hVPhnQ71xPyth12qcYqFRiRMpmRe5CyKsEa",
  "key22": "3X5sPVz79we6k9Bf7nnCaJXN4e1THsBLfqoW2xdt7k4es1vuq9e58SXvvrZi9w1YBw5y7TsismDKXDBq24bobRcx",
  "key23": "62mhJv7ceLY6FN4F8V3WCTyFiEe48vRETYKZgykzA4SYukMsAZygizhMTPLGXVWCh9p7UgWsbGueZeHBv6ed254N",
  "key24": "mv3h21RkfZv1QS16zrKhwmGATpLG6HhWyifkPgS6wTLRzihWJdN4aLNtKU1QWks4CV6M4abZUmGSoRzcFN8UT9c",
  "key25": "WYij1c5RBRzkhnAFzxKdkCAJitkyHFmQGgQqfy3pdaPJUvD1Y4Csi5h5a89Xee2Qcpu8ft6Q5nXzx1HFxFdfFVX",
  "key26": "4XX2AEM33borTwpTcaf1kkj1ZhDQnMyom3RH6LUEEcdFycv7yk5sfKztF8Vfd1cxMVoY3w2coaW6pexKEHQxQiSg",
  "key27": "3X5ymfiBxznRPTe13d4xo1a4kpbY8QUFsdiMAeYTABRKsv3pYmisGyKJgcdYsuXjyU4hoTBt6U11tm1gkJSnnaSk",
  "key28": "CnFiBC64CVY4otajLnarZGduNJoZ1PqZFKL9ysagGoDAy9cbLmvH7A7dG5ybH5NhGEcLBMRhwfDV9EaEeaBmWXd",
  "key29": "9oei3vsg8iGckHkHFpB5qSZN7rVwZzQT3D6Z9GqHm3FRvXwtSThTmH6Z2E4t69uE2jBYF8St4ouJGPmJ1DJVbzL",
  "key30": "2DJcPBrZcWquCh6e2mLKw4pRTb8JkkYZAVRxqmGtNQE7x69qNYiCsLfBZhtzyW2y1bMbfHDx6mbuGzLpgPohfQae",
  "key31": "4Q4Ppqkys8ArqQodmC1HNkq7NoWmXcoo6c9FxW4FHZ3U1zjZpyb7gN4zdfEkmv43U7vrfqcahhBkqm34hFdmd3wB",
  "key32": "34aUUmmQMi2HaEUmLq6WA4eDqFMmDFArbKti6zckgPAokMREwAKneGkqJTHp5ad4A1UVpdXuht6cu1Wf6jHejsmV",
  "key33": "3YfjfHVoCRWP2XLscubYaGqJpUwgsFWSuqPLvyUU19F5Cbu4orUu8VoMXtm2iCgCoGMPMdkZ8wLaE2QWAzoLCd6F",
  "key34": "4wKJzF8cha5PaMR7gmCbejYpKE2JpvGVvLfpfRSrzqq4V1qHWazmxFpuwid8CRr4PkVzyPDGe62SPSsSesHJubp4"
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
