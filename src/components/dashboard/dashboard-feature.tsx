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
    "4NmNJLj7tHpP41gKxQUD8GwdPNkeVGpBmYJbfNuZM5xh72ApLZgtETwtBGPtVMbFEpUicrFKqKMrt5GR7cqLxs5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1NpdJGx63jEAfMpj6SKaiBfNVRJezEdejy5jQc4FkqQpytZJSFmyG5CwiJUZbafLKj6ZYx12NCThL94LTpb1n7",
  "key1": "2F3W5SFZxntHMtCTbn59Q2L2D8GNHaBLiNNkC7A52DGpuGUgFbEQVG5DdDHBxq1qzerTRaqyAFU5m2DY7Lf8f8MU",
  "key2": "3BcjgSNRjN1eCh9MZ2BM4apD1FxeJBgwQUrUKW8G2rp4sWcTeawTaV3vZq8sJSh3s3DQNZLT442VAFNiNTZF6HT4",
  "key3": "9rhYjc8u7ky11GrbPL49F4fjeiPmnoR8w5axLT9NkC8Tf5KwFkL2WE3SbKuMEroKMC2pHKNux4BH8uixDcQK96c",
  "key4": "2vViQxABZA8iA2ycLWPkrmeic7DcWkHjGKYriCjeCTtjFG8Gk4RvGKhAEgL7xTcQn3MSmNiyPiwfNFjUifxQ8YD1",
  "key5": "3ed9f9cyFGwZnu9t1JxoZZuZypTQcWDhSGv15rRjSZ9FsnwsiuDb4Pp5r5EbTAQfiE5NDsdbSPSL2W9FkUeJkG2w",
  "key6": "3DHWV3SdFgHTanWKVS3b157aGYtxCXx64Y57aoUQDc4nEKU7HYmfZ9UozpMHLAWPo7WHPShoYtYVqRC7vgHqxvRY",
  "key7": "4oSCQN66dPmTeM5ZnB4dMLW2YUWRE8z5wTE222eYZqiWWcF2nTG2jbTm36bNnHXrWGjkppU2coeB6SprznC3hexq",
  "key8": "5qubTqakge84GVvsztDsF59eY6M1EJpsR2fmT1ZmYzszZwMUcyPSELHbYWaDMGpveKzfsXzGpRWsNj9sT5bHjUjh",
  "key9": "4TTBYFv9Q65kM3rUx9QPezBqy24bxEsVjiresyP8v127XvVntzSJzYu5YWxPCuS1KNQmhGTuT2EE8dVJSCjrbffT",
  "key10": "2v565HmD4bLMS7cJYjSgyNbB52qvEiJJ2bzTVG88MBzagQZaw8egX891wpoWwUzYMSZwN9YqcF12zGuBE9bLrq2c",
  "key11": "3WhQXUdmwT1LhVxhREPpugmL8SbxKJxfJeYGuz59QR1RsT4VpE3kAtj8C2VsANwBrc5rp9upAJoBGvjgrixfgzsT",
  "key12": "2APiQwey2mA1idqoDQLRHr6L9fWBhaCXSRe857XZ1HdqMhQutoHsWXaobQhhu64HhfJHBcmoBLj5VhH21o2vSu9z",
  "key13": "4Ncyuv6JN6EWRjrJsrKswCQmtrERQ4XSqFNQWEGHA5qHPz2bYdXzNQNZ6ceeHsAd1aEKCw3jUAQLCLW9ZqC1Bquw",
  "key14": "5LtuB8ACHMZ36r29ZXaCTUTzPi4Akz7FC6VLRZAXCXGsfoC67EzzCNB4cAjBgieS4rgQn9XAwVUXBd3cXk3t5jF9",
  "key15": "hWunrK37JLSL1dFkmbYHJMD1se8rBp2V4PprkCb8z2WwwWiZ6E3wwaA9baeXwVPYPMNXZKyqZm6hKNJz2G93Wue",
  "key16": "4R3QM2x1DfXY7Sn3deLt9QP5sxiUrfXX5856XeLMBvbHVB7ZXuhuLgr484moQjpky6moYWAoidZMYwshxufeKWN8",
  "key17": "2iaZmLw7SbYVcwPxBspng1CcYx7VCynmQUHEE6AyuwD4VRqTE3x32V9wg1AKxzDJWCZoLKGSSH1YnFkH5wUPxKVj",
  "key18": "5kYJkcFZsbYSbopmiWUz1UhJLi6tyKQKoN1d9bfDjgUm5E6HZe7xFJ3ysjPo5T7rSmzRoks8P8R5TZvGZ2EDCraY",
  "key19": "3Yi9gPCY5pZdGx55XDK14ppPb7bywvwWS3ck3gVaXbtXActyokEUrxzaWcqWRD2YYgTQB1NfDdC4pSNaF54EJ9uD",
  "key20": "YcaiyD9EwgXs7mGuDXZMcfd2ZfPp6kesashAsH91PFig2Cr2Am8ipZFhzYxfYVVcghpDKPbEREXdt74CdRRTb4P",
  "key21": "5DzFpU7ZZoerwrRiY8J9mgXDTYsptqYjwEbrvciXH2G3mwCa1vSzNa5ikNUzYm2VAULs6RxYDL1BSdkLrZo7me2V",
  "key22": "29QU6d2ELwEeju8Nar8bMo2oFN1qECbZCJQzvNv71ACbHskm3Lw6a7KpabGbffbuhj7dxz2Lx7ExpeuoVGYWcS93",
  "key23": "4SLSQqWBM5X5XfYocLo3VrpyQBXN5foncD2tBqeEXqE62Cv63zPCaq9goPBQPUHVJ5gCEnPjnX7MPhhvHkRTZXRb",
  "key24": "3M16bvqV2QtMDFyoJ1ywmMocsRUCnMsLNcFeNa5M2ycfqofBaMdHvEv6SnwmvUxf918VnwnkbmqytwJZp1LtMyQW",
  "key25": "ovPh7VSwVoaA3zqS7BcBDtu2tKUoYC9RKF1xPV679XzoZyMrbsxJUvgiuEkzuazoxZLBuQzPw1gDxKE4zn42R7r",
  "key26": "5Hcd4z2WEKQi2W4N9z3CmEFSamk45nnmpXCBziWytMuE5nthpse6DgUwzXf62Pq9LZoAjmf8ebJw5ZUdCK8oawKK",
  "key27": "3e5z6ciU1BWW1wdKktLpgcqfg5smfqWJzz6KS4C4JypQKtnf1xUK89y1PFvBuy8adUntJxHWoDcmuEVjtTLcSKRC",
  "key28": "3JEEEvUVqXxEPDf5FM7UDMg6sx7AZ1sgGbRZNyevH8SVS4zDUfy8XatiL19SHVkomBatjqfZTAvEQ243vuNe74LF",
  "key29": "4ybSR4PseSa2Xk7h8MtFqdwvA1JD5k3tAM4BanXVdisKxyKphrQEH1JwgxwtjQY7geLqbTD2XQLxZZ418L643fg3",
  "key30": "MMKs9jPxfpoJZTUQGspKNNcd77cbzxjXA2XYbwmiPMUDimQb4rTG6Cr2gLb6Pcn6Cwfe81qTmfDP2iufzkVe7T9",
  "key31": "3YEcymmXpm8SLnryrUTrd2TyqX6W19QUR9sDYx3FqyMGhzUxSJnwgFCnnz5etq7EZHsCiTByo5BkDfffXL9Ybj9C",
  "key32": "KAyeFhAwDZgMipqMVKkFjFEtVuWPD93eFytXy5FqaZUWrFHExmAZZW5yZcJECfXRxF8Fa6Vc7HB4N2BAi1p5A4F",
  "key33": "gcyFLSrXdpyNv4irEzfq47PrBktJ63tXDfHQGEkyFNaCK9T7DY1zfADwbjnVCmni5uWucueX47YybZq6PPUxVmV",
  "key34": "63Pgrjb4J7kTqZPyt844dSZKt2eX4dfLNSnS6a31cyF4Xq7T4NCyq2SVPGxPHcPRuYne3ysda7QFnvKSQaGSSDEF",
  "key35": "2SeUTidd8qzsVBNTjAtaZkyR6vk3NyDVDb5k7X27NQFYwgEZSt2ikrzREHvC4M3wan34RjjV22zKN2mAiMkHct8V",
  "key36": "6ia2pZwcWoFeeKLyJ2Y7roWNCHTG3n594ajxZFqkpyMJFfNktmhMFmuP3eVV1Z3V3tErqtrmKvqjniPtkRsRRFL",
  "key37": "3ScwfxzHBAR7ZwWwqnUpvH26catwVGBz2kAtp3y3Hm9LxEJnMFeVgYuD4BaVqjJ5EndL2xGG8UbaRQGpiP2Ex3Vc",
  "key38": "4zfGZVrY9AWAtB6a6k7v86DZBstJLiYXc7iEXPubuzwiK9Fd3MkFmpj1F5aE5kBHXaUbSUALZzmPhwe4bnsK4fYo",
  "key39": "5SdsdGqtVFP4mWRzzNhM9tg4qMtNyQ7JrJEAUPEd8oTUeX7xekNDm2tPgypmmHtqQz2nxABNkWwerHntDPhmSwNZ"
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
