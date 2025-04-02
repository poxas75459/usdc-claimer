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
    "eDgqwNnUxrVfEb8x5MZ2cB1ztSeGEsjkGvv3BbU7tPvR89rszLw2aPzBfyELmeFeApjwMbx8D3ZXYZK4Wez3zL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvqHAfiXXY6NbFMwofKSHJ1Xd7rQuAnvRm5mwAbd1uJXmQNcqibG7iCHangwqC4hBEVxBZLr82eqD2mtE5JzsFx",
  "key1": "4Fzd6yDgv5S36W7He3gqR8RqgvotJd3VKgkqCUjaUL8ZRZsTYbRcr54p9392AvA5r2Mfve8WVKiJoMkkGnzmsbWP",
  "key2": "66qoHS5jNqAngeoBwh5q3rtv6hD2T82t4c4hL1o9jGsXcTyWtkHWcbxAxbXXwx1L9yubwmQGGQJEs9uGXLQUD36D",
  "key3": "4Pb2bHDonVoWTsteJiTy3bsrwuDPLjEknyRir1Q44vF5m1Xzue4ptiwfapCiNAWbwkiDrE76jwWRhBEsHUVCVip8",
  "key4": "4B3oeRkoq6QfiidSURcxkFT8n92cC6ALKNeff2SWuUz5EQ9qF4Jny7MXUMVDhWJhsbnJQzEigo5nHVJXUY6Lkfz3",
  "key5": "2DQhuCUD9GYot4EJUvjuFeACHqtrKnctmAW1baN7SqFC3nKrMmNf8DVk9BprtvHmcryzq77L2TN1q1iNMCKiAT93",
  "key6": "45ZoXMGyFPGcc546WH8zJESyHBn4jf6R9NzqwB5dvnpsydN8BSTrD1VTKYNNaQ3p26grK7pJnw6jrQdTxK5g1orH",
  "key7": "3TZemzoWEh3rTtUD12jUVrabBQZAB2XfqvQe2NzXAAoDPZuUvT4jGQKfpW3rBzprtaqs1WmPv24LyutpF8ZycRL3",
  "key8": "3VpVQ31HZdcXQAgyVN4ypigrG2WAwhniXFFaMkzBQJ6rLsR3Rvshk3jgzkyA82PkWbyDr5eX8MtJ6cvEC7rhRj9s",
  "key9": "TCGbPMQFsEwBLbHZUMnupZa2oCthvopmb8jEXnsGm395jw7v8koVWf2XdBixE3cLb1byBAnwnE2RWQPefie9PRv",
  "key10": "5T3AxD5KwdnTfqKCmksjF72yeK7mpjkQ6KSutdk7iQKo8roZGxa938jU6xjVH68zoN1okeiJfCBmK6HFnhjhmeik",
  "key11": "4kpt6QhcFDWcrXoivpFXspVziuZeX52HTFgqadAqFhhuwhsHeoYCM8Fspthwyv19jZe7CnusjzFuDJk52mUHE56t",
  "key12": "pZ4yaKHbnv1mjhnLgo8Pn64B2HU11eAaa2RFUXsFe7cjZKsupAn6c8RzcsQpc2psYjqiA6sdaitf6k9ZBoaACmK",
  "key13": "3MEMf7MmhEfvzy52y5yXeKxK7vWocuGZSGNhR5oVjDUgXzK8B7vPc21B4PyDvEC2pkes7esimodVbhU5cVeEHnF2",
  "key14": "2pMeVBA9y51FCUucZovmNYK5Cxj9fTpCPci8Ey5mZHjxM88y7KFThCVzNSbEuDEvyW2FX7uvu5eYM29p9hdeCgPr",
  "key15": "53qXUC157prYEbSCkC5P441VBXCjkVowaKTSMyBRDrSi6NvhvdudEp6Sy4ZDdnMJ8fKKsL8br6mVissigD2yCT6x",
  "key16": "5sDGqKkifxK3ntUfA9D4dTwok5n2Js1964hBff9YUCmHnB2rxSEvbxEaa2YNXLQkpF9JqTtAi9uDTaqoB55bdbVE",
  "key17": "6V3kegNuVvV8pnE8pDs995ZNcry137waLjhe3tYtMidfjxRRq5En3CL3VsUThszeBHBt7wusVo8PNVdC8NU2q6g",
  "key18": "sTiqb45s883KyBqNuVykx8vUDckG97pFsTYEG5L2TTfjx2MwoaRThmRoq8ptUpQaksPZc4rkFV95n94skNvrZBT",
  "key19": "4MwqNVDYAAtX5h751kBun1iBGnNisuVJfP4p9moWvwk88JzdhPbRV3dyKjWcAWsEfL5AERFJWprQbx4uVceWt14E",
  "key20": "4oCSRqcTBfeLwGzmUP1EAhibme1srTM7gd9Ktq8Gb43yg7KVRakG59MRzbVBnoorQdECNnY5LXXPYbGzvupcGQ18",
  "key21": "xiCX5UezjP6zjqPUQD7gaK92go7gD9hdzj5Xn53oRbrXNABV6W1nGN8zMs1EEMZRWHgvtqmncaJ8BWmi47WiySE",
  "key22": "65kejBPxHUsgxiGETyQyHWSy1bVsFtr3Kq3GdQdthmovMQfp4iLkhGDurjcTWQ4gsH2oR87ndY5Z34jMi57EQ1ju",
  "key23": "4ActfHB49xHwCYvnGY4RkZpMUZivkbbY8KiBxmjrMFMKzuNyypasrfNUXoLsySCV3spBzBRrmSir8mTyGGPaoLUw",
  "key24": "irxb8LfGFApASDhSMq4Rpz9a2nWD73zNhww2UUqePVFqSvmrioEUyTrHiajCGD5M6LEuJPcHuzm9CKzjA3j75DA",
  "key25": "tHKoK6GPtxFBhWivVYN8nu4Sz27fpo1UzwQkWumXdbqDtAR3wtzjhnAcZ6pd1wDz2qDVrPMLG1k3GMePWzibAhW",
  "key26": "9GxzfireEvzATszJmivVc2QDDnt6i6HGJa4hXkJjPPpEuj3pexSvhoWYyTQAH2wwyxqQGCVdpcaQaVYjdgHqG5z",
  "key27": "51BoRwQKXw33831KGNJRiRH7SfTVkuSAyaMCAxHeybddpukzZ8d1hU8gxxKRczDYCtZtrQxo9xYwanBAjcawiSeY",
  "key28": "2hVrfT6dtwDrMtrzAUqTNiViVhDPtNNTE8AsVVMNLoAzHp84Vt2rrkxjMvop5Pba3PFFnRt8hg8XbiLsYtG9NbXJ",
  "key29": "4r4WEMCSeH2VPLYeXztCv3Fa8dMekeJgGjfUkwQQiB2N7oMBPgC9jWR6BhKyK6KwQd7f1KdyfCGn3eJfaYZHEtxy",
  "key30": "TcCppT92tzByVPm98cwXzTv4Lj3XG8tgBVkDZs1g4o1pfHMiG7s8nKpipUYwF9vm3vBxQRWJg7Pz3f8CdrC2QGx",
  "key31": "3Q7gVJRbrcpsJ3jYenKsQXCXygvxU5FjqVRxY5fZJ41VPbFLzgjwxLTggAo36NtwcRzim1V4rcBxCzJmGXrEVe5M",
  "key32": "5iE9f6XT5GyyvtWS72PpFcTk839Nob4cZTXv869Xzw1sHeCALR4W43XVeMgcvN41HoVkiH8GASrnhauU6Jiw4Gwb",
  "key33": "3zXEDdusiPokNErpcHCKk9Ccvxh9AwTVmJ8vYL5U253CyBesxetnabNc9XLtzYivF911JusUS6f9JbuGEA1DB4ub",
  "key34": "4FKTAkifRaWnhmtx6ivCwUPfrMk5SYBmksBi2KtXeE3krupYzbkn63yHAfft5DxRYCbJ2Ab9hEC1aQ9ybA4mhvL8",
  "key35": "xuKWJ81HZPZ8tySPvXuKnLnLZaoAwUNeo4msDWje45HPNqoFTFcwAsLJJ9VpaRmawkywt81ZVgsQrwMe9pk9X4g",
  "key36": "2PnjivJh4bsz94En5m6QrQVfEMfVYMmmFcpEN9tJ7kC4JXFhAb4cp2qptdGLYsv1LCc3sHZFWYTMUGs82Fmvsbs4",
  "key37": "Z9ooujVpmA7PhVkZwV9aG6PHPGFH5i4FSn3B2ToXdtMcPTD2NPABPV8VYV1bCkE2CnAPHgESFLJ4mxUPVNkGUc5",
  "key38": "516o1kfusVRXzgkdfjW7RutxiW6wRHjmeKBJBeateec6Kz7onG1xB1oyenxx8Rm9wHFmPuhdWsG8iv9GY65e24Fq",
  "key39": "5zCToEWv4RicTK6tgFemcnfGuqiyBBRaYe54yH7LTmvrSsYDCGbzwQNF3bwGjiJASBb2qfy38mTBmkfbPqZArPLE",
  "key40": "3sYWAYy1hJXKYhSmXcJFfpyPgvryjTYbsFfU7zgLfaLmViwbjrQq23xkZLZ3LNxsS26Che1vkheVZVKBfQrD9JwN",
  "key41": "4RCikgFZcF8dN6EJeEgeauFYeyvNMrZBBVWdESJQMnwe6bvXTmN9qoDXeynCft9jEjW4d7fTkKKVhGsCugHvJH9M",
  "key42": "5xdfxR4sZYJMzLDSMjXHKkKNoHYz8MDBx74rodauhaJTz5AevdVmUiHZ1kKZBoDK8bXXvYM8a8FTAzmBDrWD8XCx",
  "key43": "maG8go2nAqTcMBM7aUVCT3H8t4RVQXFXcW1ZmYMqkscCC8AqS5EakPScH4FZkREqyYVn4Et5yHajZmsd34eXEBe",
  "key44": "5r4EK5YsaZsdd4NkhLHBv3o3zuWvSPS2ujgc3EzAhSkkyVdPG53uSspNSCPGCZ2pYS926e5petFEiU8LVpiZfKuM",
  "key45": "zgrQNeYteiBtiKwXT8fiDJyHVNDbxVokpggVURKQ8pzBD9smPFESarn8Ykn2q8dihTNLJ5yTgcjaZ51QXg3Qmxr"
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
