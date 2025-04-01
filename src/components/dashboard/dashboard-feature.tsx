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
    "ZbRCHnvNDyqQrmv6bEQvndvwtRrpyVwbgCb3JV1DwFfuUGaYxmaVSyA5ERZHDKcEYz7WsQUCCrtVDBEBDf9uPQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35SEntBtdLtm3EeBbNyjoBYtccAHrGBBn8i8qzrsQSHxDPGcJtHN5GYSgGXLPhuyq5JNXjgiz1Ce5WtPtD5WAtDM",
  "key1": "5kHnRMqjqzuTQP1yTFrLYxpAfQ3qn5MAM6XPqAu4u1QrASvWhn9vhNdBpam4M5BphtZo2VNRoQ4LmX34aifGkY8q",
  "key2": "Z382aWbU3jo6yC9MmepJNL6G5SfLQ8gdSskzzBchzL1stFMCYHgoEH9CYSgJcT27fYhrWLyJ2ywSthWfKNLRrHz",
  "key3": "5A7yfz4JhZUZQRaQEr4g3ksbK5AZ7AEvqZMtFGzfaoRaEVheLHiWBSfgaK9Nz1YyQkbTUPJxjpPuG5dNv3U7GY6M",
  "key4": "3695Rq6x1kfxxWo6AuhNHH8eLSCuFixdAUWH5TuhVzxyqPQvEaQPMEUTojrrN5uvV3y5rpyjQ2S1KC6U1xnr8xHv",
  "key5": "3QrGhnNUoENXng4zHZdisF4yjNxeSmYospE3vdPgTzdPgeQ1Xua8F6Vntszq5tkD3tJTvNpxHACKG1yjMUHwKRKG",
  "key6": "5kxVhE6bdA7ELNKFLVWK4NFLjZMwrZCdeJdJRepFV4Xaut5L4CZvp1bXQLJzPNjiU9VCvFrKYiLLUtCr9qbiAtrF",
  "key7": "3W6u74XT621ytPmJd5t1wQteyDV89G3od52sNK9GKpDPZrrD183oNzDNo952Mc9qfbkyTXtog2i1JkzZEzaqVLKR",
  "key8": "4HaAG9QfijnxqeZk4FD7L57h2QEdTi8MG8NmNbSk5drd78P7imLtpYTkKb58w5ANMViwo5nqLDx57V3VHrcRet21",
  "key9": "aPmqShBcRkSjUevXuA81PtEMVpPtUdmfgKpn36X7Hdo6J1hoK7oVKjtL8Yom9dAqmubUAAY18KHLKAZHqJvguf4",
  "key10": "3xPJwXiUxmy3oTGe2XyJxFPND2EAgCMgPtg8SfjL1MNYtMZ59FhASjKKZ6JLzJvbb41VjirSfE7JwyWq66QuB1of",
  "key11": "sKLkVdji8UNhXZgYgSzXsFu3ngM1ByPHNMvQJ6dAnpBiPmbDdDsnhPQHw9KMH1n6htxDvXp1fsntyyM7sR1Dck5",
  "key12": "2PJuPHj3dx8e21Ne1ud7Cjr7cN2QUsEm7EDsgDqQe4M2GR5guE9C4QWhBVNvApuwz9xYmnueLiqrHrJsDBQ6xigz",
  "key13": "5N6XLd4bg74WPg1zX7ubejpnR5t9SP3wcZ1aopjUCLF2vJnmEJigJRMUxTLiqN6KwYaNsCtqrL5SbNB6XfikmY9o",
  "key14": "3t7pLogG6hy8BLTXRgjtu8Hv278XceRvCDjtexQc7a4XqwCHNh5rnmZ2pQL68LvsVm3AG7oLdaZWBVTxWrgoYHmS",
  "key15": "5J238amXz3ALuSYy15Se7gfyRxvEE9LUZWBxUFMhJwCZg17soC4K8mso43WDP18RxFNLWWzCLUHvfz9EZwJQE8G9",
  "key16": "2psdEQpAy8i65neHfJtYtrZxA42UF5QdZnVDLM2siSffc9TZHf4cHGDKnzzfqcZn7GQMZ2f5LSXdWSskaCX9cB42",
  "key17": "CkggxPUJxinCaFbEU5YvsReXb2gcRT4v9cAGuDPdHTA3kH7EHdhCDD62raDhEsYENfzWARYWfogXaaPyAPHmGty",
  "key18": "4f3xc6C3sNuJRGPidokKq74tdiFSsNJDrQuvnz3PN665owejuqqpiMq3QgNnyUZUaCJ3Ntw6kTQx3TGQwBABLk39",
  "key19": "2Fd9vwcfvKKKYikpUWJAUgvC1zZkY2VjRz1pCYdGM2uuqZBvVaQBQN3vy7nAJhWooFFzbCvgXsqmVhQG2E5GTCqV",
  "key20": "ZoWnyi6B7Cabp9LNKzvUetZqh4Jtoc2NCh2qF515tQZkCLcVECRbMtkA6xqMc84hutM92dNCN3X5auRRvPABWMo",
  "key21": "2vMobyXEQC6PPv6bHnw7AVo6Yx6JSWvTFGjwSdfjBWmecn22AMDiXSw1dPhp5zUMG1bpj3qvWaxzSDidzzvMTYmZ",
  "key22": "hwqFCS6WAZ41us2Kop4hMpGauNXmgqMBeastfY3TPh5BC26Fi5MPYmUfH5o96Up66QBKNjMK5PsMxrF59GJPVjf",
  "key23": "Kqc4BCVZVSaPazbdZBanoJNXFhzMyFWh1SQWUJwFXxMUhELHZYgz1k9feUB6EjTJoWznejdst1JdMVGps1D1Cv1",
  "key24": "3KCUV2uYWLf4Z3dbuv4gbH2qVs6NTnr76HFB5vjNEyYAqexT7dmyUUazdaAwymMAfif89XzxTj48GNnw1yynGstu",
  "key25": "5EBSC7U4DvK4k3EQ23Q7zWiY7w9T4NDSVj72ackNw2sHex6UfTCcomwr37ByyAqjBru9iHjgJCWbe12nNhwYQGg5",
  "key26": "g1V5w51cHEANpZqZ4vHcYWBMturwvJugn5u1dWwREp4Lh5hiCrJ8jk8F26Fk1ffU267wQAHGi6cvNSTFWws7kEw",
  "key27": "4WqthEjtvkKAWJrPmn19CmVgYk6eENS7FE4TH8XWNwmpW3oWh7s7X9NvNx7fUyf68MjWxqS7SbL47TfiE8Snezze",
  "key28": "VXTyPYQzdSiCmQkoe5cynh6MzkVMBokxjREWqVTGajeCdFxQm1CgXhLYf3XCCvdz675Eq2qXXozWpVcc1WjQGQr",
  "key29": "2bvga7YhHDpwf8Cxw81buLRhp8EJF9bZrJk6EWTQtM9VqPqEVQ18QhJhrRHJseKsGCvovsuLvpEHSEk4e87s5sHK",
  "key30": "2xxH893MTWgggUqSvhsdLXLAsLbxRbTt9wb4wbmVBZsREKxmt1kBXsSaNLG6bpGKjjGNqFVCgxKo6zX17VqMe6Lo",
  "key31": "2vMLKM3SEWtsiLjmgtnbSLVTx3p2wHppTb5qHCqFYUUF9rp2jvKhFahUSD2SFTiwmNjEMSeyEWbH85rK5kFVhFLw",
  "key32": "2AMNenNnMofPyGyu2GLnjLgJnmrMSxTUBHJFh4RkmYPq7DvbV18iSZ2d6SVdYyoddTJhac2mPr2jd3Ed6PyunQvy",
  "key33": "3EL29KB752wqGF7bqLh16TpxEUMRup7DKPNbhTUXuf6ocq7odQbRu12PNME615fEC6sVS2BnzB48hWNQLJd4ATSk",
  "key34": "3AZTabTbMo8LaRCkT7Zj5zQKBVSVMXRDDQfozswYGNQYURYAeeQ5dLNmqwaBTeDpx4qvTNYo8aXS6h3s6utmKLLx",
  "key35": "2xVSZDWTjD2VkpWtEUQsh3DdxhF7RXheDGXGzffDMTQ4N2QNGhUPjvRDKYpMKdZPKmuLUa4h4qdshmEYuf6iVGEN",
  "key36": "2KoPqgJCCBhXu3Mc1tTcg874ZC1GRmsVLUZ2wwJyZBeiGfWx9R3Rz7n7BcVkuSk9MWHYZgCdVnQyh4hxTjNmhvuW",
  "key37": "41PfgGUxJVrQo9jfasUzeWebF2RKyTUzw6a8hVf3eSEDcBLVMiK1Heu8jJiTFs91iF3xiYvHe6vZYABpRq3xLQk6",
  "key38": "4Tt2VJVRoNcaHgzcSCdWN9zds3VJiycSS9L8s6o1Bg75arjnEdjr69hsYZbatgZmYk27CoHR6CNvmWu7CqgPybpQ",
  "key39": "5uLiQtbuRncv6ukFyCuNVgdtV7ZUQ5SinaHNuiE3pcwhB7u5pWS2kQ8Yk7aLHhEmty2moj8MLLGFuKu2uzLPJRgR"
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
