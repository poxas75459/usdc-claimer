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
    "5Ghq2QDaS9HWzADHumhFBbfRdrT18GVnm4NXdHNVWeMeFibXmkosurVFGtH2zSHPeW1btE2XrehrefB4waej5ssc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CkFAHwsvo7HuYVAfeGk76dNyKhYmkSm2ayFiLyR2okt2M46gDm9eQWGzt9XjAVU47UrCacbebkA36RPtrwfGJe",
  "key1": "5xVVvpUAPsErHuSSE8KwdenzZdawvJxQ2LXsxAywwDU9hh6aLttizwqkUxGhr7qni3kFdKtsybPKReFbZuwQQ1Uh",
  "key2": "4mSZYT9G6rBTRyMsyGZNeDkk3s6cESDr8pBmrKx46FVg5cqS6cZyyrngtGsTqgJ3jHqBzCkwQgygL7AaGihHprjA",
  "key3": "TNJVusZrjKDWdCqteoSyoiaL3hL1xq2RayZDkgSEqNQQq89CXqnSendF5bjZniMLftBQQyUcAQJUHMpoe99y9rw",
  "key4": "y13jtF7gqTdY8Up4bKAnk8TCm3CW1hdyeV9Zo1ENFppuXeAQ9G4aJq5W2pqRAg3ez9MPsAYSoDWx8ZAjhtLgzuQ",
  "key5": "6739iBkZY8DPEmZ3a1CHXSUdPPjpUPimWVhnYs2MmcvwHc4dohZXVvVz5DcMT7AB3ZCFE2DzRpmvmtzmZNN12Ats",
  "key6": "4J5Jw4rR6Lt1kT9682ptX3tQkxC6VCjquDaaQM9d8TCErCtZ5972Qrir4pqxmi6hE6U9uLrQa5MMjiriYNKHgjoE",
  "key7": "3DKR4Y1pUayKEbN77TqnfeTNEAubJ62r72taeKReUDgH22gV13dupcwrU7gje5CB4hq6krEm2Lno8VqB3nDS5kL7",
  "key8": "5n2u4qga2rLGKanUX7w7qMkPSDwnUjxtboM652v98HufvuqAAAqwozzYgTD8qfM4X2xHVMJtS3SK2beqJhZrsMjz",
  "key9": "5WWF1T3RVmNEAG6RrfghTjcypiMEpfZxE8VMHf1E86doJeP1yvdfWbtbgWtB5P3wEiVD7aEMLxpvCmVBTtfT3F4P",
  "key10": "ga8qY3gN4izTBL1ycLEubYg3vhgjZW54zbfgyeBj3oWvwjRBu4jWQXyg1yNeUsfztReF4nwmfmLV9Rdrx4qVCir",
  "key11": "47zfsdeqGtzbTgqjfXPyR71BVqMAryMZe9igCiEiSW3bNq9UYbgtJFY7HQXPtN7b7hWjpFY8LhL7BwzNPJ5Cff2D",
  "key12": "2UkfZePhZvuAxUBWzdFGXKrS8QcDR1nkW3RM62rjEA6E6KJnvo5R98AKMyMyTm8FAnoSyUbJfTkAK5cByN77pb3k",
  "key13": "qXWG3SR5S4vfKmXbGwYnynyQQ69cgXWyS3o4rLvqcDGDowdchSStzRDhvVzkFtviQGhLdnkeLP7q4h7jxXRLbYh",
  "key14": "xYaTzZPkVH4Rp9QuQoRBrqr6scBRE1ybHhTZTy66AFXCmx1pcEwLWBsABbiH3vuzMQPH3RNSyPsjK9VP2hR9CK1",
  "key15": "3y7Djno1X6ey4zJyyh3UFqswPtk4e3AkrCArW47vqJ62d8K757xVKkjqMTA7DE7hvzCoVtCfxcQAfnc85gt5Je5h",
  "key16": "eELnNV5zd3KaYzj5brrkDUbstK35Hpqv5cBh9ovfa6mX7dTpWuD7D8DXoLkSS8QL7Py9ikVskHQLQRryNciA6DP",
  "key17": "4LtNvuMaR4D2zw9gTaGfpgGvg9Tcw9oj8aXyjVy3nXQkzZhNeY71V8p8wVN1RHm6MKRvuWkhgrpmicd3Cssua6e7",
  "key18": "KN6D8RiJeDsF8fS1UA7NLBQwabVkraeGnV5RH3XVpMfZpdcEcYJG8WTwfEddHE92iSSeXbkZoVJGYiDsTGJYpJu",
  "key19": "gZj1HgzJ6CdvAo53iuZRu1AEsyqpaRwaiQDn3USZ2UomXcdXEHLEEGdVgpcn5gZEs8bxQ4jQ7WSox2ahzHTrkSH",
  "key20": "2bfKK3thpsKRw8SgtRPsmWPdE6Qh7otUy2rTouSGiZfCCuiYEj95caDHAfMLA93dQJdNz2bRAeGkf13sjJrjw6gy",
  "key21": "3VKWEZ1XnDYoezVCuTEen7t7s8iaLVHezZmWXLeag3aFGLXCJgU72aqjf6bJJPV3KeP1GRro5LtgR5gqA2GVKNYN",
  "key22": "3qwHo1ppNAHw85NpeetehaUEwHZqXx8k3Xt6e3EGWVMBYZxnsdVyqd3PGv82fVSgLiY7UdTs1xWD5DfuqNu9my72",
  "key23": "3TDe2KZoM4vmK2WkPKGkxrEANKk9rkyr87U7MS64a78Z17LWpvM7tnJKbqEPtGhcsGinKfskXbkJGEdJ1t4YeyBG",
  "key24": "4nQraJt7h9SrfGcTkCwcwEQgtJHnUzPDit9CGdo1Duy22j97NMVtDuqL5Vbcpe2E29z4ZoZ7UCWb11VBWBn7HQ3g",
  "key25": "2rSJKhEigNcsGDpg14vyiMSM13jgfpKH1HjabxSgwTCuRuPoZ4CGsYdaSEGYEkPn96Kw3TownCC3tYLeA8QUqziV",
  "key26": "5notAhe8MRHer41ijMZJuq5cGy7zxgCyi7x8dt9h5iiN3RWaCLeiBXgdZDJZEqFVvCibBia3Dt7ovUcJStAkF3VP",
  "key27": "4LeiP1akgBtLfztcVNyqVA2du7BaZwVf32sPvx5DYhJBqX2nu1odb5LGDRb4qVJGUFH8ZmSCv9v9vaGhPkg6VaKH",
  "key28": "2sK1jpbxweCZbKKKXvKpQPEpczHtdwGPpSUZmqx6DznXj1f7nuSnfeZVYqbvs3sX4B85don2ZFvhAqGXc9vT27D4",
  "key29": "dRSHBnWiTNN5KHWG2hX81MKzUgyptrEfLfhLscGaWrz9HSksHYoRu4zoGKtTwQNH8y5NCzDzLsHWh6NbTaEZxMZ",
  "key30": "2kP23V9Ts1e7aaPKFWuFTFMtjYVi6sWUGwSj6Za7MrjMD1KgsWBnyEwVh8rTrwx3RABUrNz7WfgFtgynkpqoCcQ7",
  "key31": "4eFrQMGKe98BLex5A8T41PBuEL7g6f3ZEJ9YNX1j9PQioAUnnmQkaQvjuTvHAM2YV4gAcZ6Rrk1xtNgcTyPaduoD",
  "key32": "2WsrA857ZEhTeEEYQtWGkWfDPEVn3kzZn51Yz4RrpprX7ikYocVLtk4anuoSU4eiw8ke2TrmRDVAeRjCRFSgctPA",
  "key33": "2reqnmi5RPwKPgpca7xHysFZAeeHL3sDFK1o5Qv8GimQB5ntiHjqBfsxqWYtBW1uRvd1g8fxetpJd3CpJvCChFUj",
  "key34": "4uCRng3ZqpyXqjS3EszonQ8nFTNwqZNBq8DnurdJmJVhwGDK7S9nXX7Dv5Ymvau2hm8b2jCLW2fu6X73o419YncK",
  "key35": "4oP3pY2qCMrovDawgJoQFc17B1Fps6i2p6FjgWJU6yL8onKzy5bpzNv3ebmpfKKQQeeq1ARvg3zJUFehNQWbkrHv",
  "key36": "4MZmfEDYAGYrfgvsDysRNiWCpn7YHijc8qygbtSFjRkXNjyj5XvC3JWX4PEL2oapbFTyqSitNePQ9c7L3moEkpof",
  "key37": "43YbYkFcPK1LvjfrYCvC8EBhiD87St7eaodxmHXDJB6xKMDwd1km8HGk3wZsJvWdJFpdo8JH1hRVRCVCCDebuGyx",
  "key38": "51UcJiq1n19oD7Vdu3QoXZLXQKaYeeaHJr4kWZjr32qma7T3SPBRcTdna9UoDWFwtwmCjZnUre8wgCNwyHDVMsYY",
  "key39": "NTYcgjKemaf8BFBAgAZoMLAQ8KZv6UfzfuujGi19ZqUKJZ7aWRHytV8kZcUdWDbVdUeLJmUWd3m7zbJvGjVWUuh",
  "key40": "58izLzgmsnwMQ4RSzhaKFJgxUn74cMPcAbdEPM6nfRKhLh2HtDEmX2qVpDxBiRSKsjwzg7BBavqTzsihKhFmR7Kq",
  "key41": "37cLzMidYKesqbsZ9jByDQzyfZ8Z96yTKgtNUKE3P6h4tWCpzQdH81aDuLTXdSiVQQ498YVsKeiGkJZJNgZPFSw8",
  "key42": "3jzKZjoXPjyK8fo5gvYekfx2SZzT8DR9zqrCQC8KVmJey21s4mkWb8DvV3W3vxXq5Sz1JcBzhsZMsMnw6Sji9KUm",
  "key43": "teTSRoUXfptzPakuZgfT1NT3QgaAdvVVCBsh7nDEqVWbRwC4MCUXCq6L4iSgsfvSB3M8Tv1pNatxFyN2RbSjGaD",
  "key44": "4eg6cZdNemAry76M5AGkAZ4oZnGCcUDGfPF7J6Aqp89KqXLE5oyRZYpsMWXgXkJxAvcddNWUZUzcu9nb8kFzmSRL",
  "key45": "5zHR4uW1nEhMcPJUVAv872Wp4zX1Lg7vPdfP1CgD1QKJXVuRvobhHX7Mvj8AwKJ1eEAZJCn4mrR8bRvUmMUZCWdM",
  "key46": "2yPuxpe7AVErGdu8AxoAUJr9mbEvnevSDZg3Jv68xWxaad93g4KgSVAp1FZ7RsXgN6FaYM88Mc7JVy8KD8drdv4k"
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
