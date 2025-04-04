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
    "1A8kF8FkDWPQfwfC8cVvQU1waUc1uJP4xroFiC1Fk3CRFPbzJ33rhstY5EycvkcmvuTU9K3VLuZQZUZS1RhiqVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2guV9NxaYoM4J8G49Pz1QgeBMLGqiGz15kFNwbk8E55Sxbor6oBuq1ryk6Dv7MdJmjkV2YrJFPsMK1dTDziLYctY",
  "key1": "51UMxZ7dCJfMPsPgy5o5vPD45wYVWR45p5TmT3SHDMBwKrqsXPiEXbYMajYy6PsekQVf7xhuj5P4ZvBK415xnnX6",
  "key2": "23ixaPEEYMwL4c2jbCFLVP7GimJjD8ohwcnraJhJgxzpvw1G7kJ7E5iVsPY7qaqSfESbR6mP2RVkijAN4Krypk6j",
  "key3": "6Fbbn8xmLYfSg3ZpS1Rz2AdHscyasACmCR41qWYb4eMaLZPR6rTGeWGuKdFNpMNK6tAxBDPQFvF8JYzLSvwN6BJ",
  "key4": "2TuRaf4qXqyPHq4m8nG3DbtL4nB3YvN9ncX9MgPSX4K3H7iHAhQkXc4ZdsMSfyRaFE8YkbpgzSbZxgE2kFhUaGzZ",
  "key5": "S29e3xyY8Li2TZQLsjN1Cxp7qguFjYGQNgkPPBXabLkvioHZwYUHKRbBXSQT1nrvEcqsmX5PgELBgCu54RxXx3Y",
  "key6": "5auL2ugAfAXSxZLcfMKz1LUpuGhob8kH3uzj3pC5jFD9raGzWwXkJcRZfsTUgVNxhf6sVQzfu8LmNqpZrJrabchP",
  "key7": "2975VZFP9HXYSXUAXd5UH58wTXLL6ypywE3X3xsAf9qNUG4VHsL49KfkGpTtRLdh4rxNktRmwzJsEFFJNq6bumUw",
  "key8": "AFkH1WHNo1vNXXfeG1L7isJN5SMajrJeZyqHE2vRHoMcNMPgcPwvS3KCzC1uxFEFyr3AP2YLFvagktBVfYnhhxL",
  "key9": "3oERjtSrVWzbq35LgAMcwYzkns2Jcf7tPNyFzh9Zdjensa7hDNMo3NKRHyQsPjMAJ1o9Fbm2Nuxce5aRb9BNF2bC",
  "key10": "2SPMp618eJnWux7FNYJnwzPTdgrQaqER8if1zsSXNQ6pVBrHo8Zq1Jpws3MUvhtf5bDN76T3rFWJpp9tSLLVVzjz",
  "key11": "pxLLG61nnLu29N1s5Lqo5fJ1xZJa2JwfkgQvFWM26tc2EdEXxYwzw6TzRXa6JDYdEtp8VHsCvExFSoYwMdLQqvR",
  "key12": "2hGTrt34YepYjiFigQDNsf9weXn2L9k7WVedA8b6oFa8oMYqtcrz5NrhsZHhosaebPt9orHpegzvnYQyAhyLtZCw",
  "key13": "4asv4KB1tDfY9mkcbE3QjmczZonGmq7HpTqLcjUKu8a6CMgBohCbqqyM5BqdBUjhCdomtUMkmwaJgEMZEMD9mj1T",
  "key14": "36YG51p9GLsUwKxAo9Jtr1g7DuHRPnGqAReJiNYXdQGDdQeuhUJxFe653G9wJ83Jqx12ptvYmqvveFLK1HgSqw8G",
  "key15": "4Lw4xhCvfnUaDq87uPGaDkMu81DZyD1mjduyz6hnwSNmBirfy3Nh12qBeiN3TLgMFH5H4Bjp1HZio2pjaXn2v9LX",
  "key16": "5RUMrbeRAu65mvM67NAHL3qqQbCHG12Qzm2bECf7uznVizxFWjJAZu8jRZSSbcbNV1ow7dEcq55mthkhV5H9juMW",
  "key17": "58ruXTUwaw4kVQh7yB46pvxhRPswe4mJzGbXQXEjzy2Csroda1W7nxGL6gHPYD86NsRqvRuyKWgL83dBc3UEsp64",
  "key18": "AJkcWwCP8gCZpPH3xF6iKR6kpVM97swVboDcscWof3tuuuZULb3BMuzpteCogpfcRPP2c2KXRqqvJyeNnurHt94",
  "key19": "2YevpL9AHPHaytr6xidKKNUeAZuys1Xxuacxxu8pHyW3c3XoQ5vU5rnVeQXX7UwT4SajHQobnpXPSVKRex4tHvVv",
  "key20": "2sFCihAypTURD441W8kz1jNFUjXe13Bj9JnKdEG6V8qAwsnKQ4upDag32hRsuBQbut36p7153HvsUHRbkvWHj1MC",
  "key21": "3KeREBLinZzGZoLYCUSkzmYcq2gCgL9mGm4DHPEErxjwesAvC6GzoKWmnfqoN799VcYXMaMMBB7MJ26dcCYikJFh",
  "key22": "xPWMpbMzMxnsAiXjHikurHo6p1sVJmRG3CBvjqrmnisiehCZ57U8j4HKPqRCjtPunn729s7zBJ5XrjJ4TiDNN4r",
  "key23": "MoTg9Wp8wvwwF1UXbirH3TZ5XWjJE3m4A5rGSVbv1Cfk142J5RG5iPQrbg5LiureHPHmVj4A2BhY5J1r5RhPQei",
  "key24": "65vpHKa22gvR7YAJmzRrhEE9nzcvx97L2FaXUswpa8WCeTbqX2XpYMcLQUtTDcwpqwpbG1VF6PWkaug3HqivWxDQ",
  "key25": "3H32Es4uRRDkwEvQTn97hxPpaqtCQ2Vnw4c6a43XJYQRS22LDWBjCR2S9FB5GXQpZ92VHAzfTXVEYyFoPhEN8Qhs",
  "key26": "211cti5NuFvXz79RoSk9FQ9tKvjKuzFWV1G3SaqMKBEyKdV7iobzHZaneVzVYLcbWHY2GrWZtns34ELdVdCoDnbV",
  "key27": "2b2wv4QjesG6s2rz6wxnPSrG3bPQ6TWLeEsREGFChKBc9sVuEr14NkQf5e99Q2ussZwgKaYZscde7rYXWi1v7tdS",
  "key28": "bp73Fm9qDWGGaV7nYVwZs1h7FuWwr1vR49bpLyau5pmbcbcaU1Sjv2VnBcfJYRWeVgQcMYok4xAdFg77PoTnbh7",
  "key29": "3tbBNZBsNK8xnKNCcSvYEqNgKMEJxNwUzQrfvVgBGXo3zTRXxV23rSG9HztzSXoN6PZveCx8rDGzhPEoVWagDXsK",
  "key30": "nCFGt4U5EVbyhQGv5eD69iabSEXSByajpc3TGywjEPvjhfy7AdSd7swSGrGExvALPXun8nUzjU9QDELYtw8FGGF",
  "key31": "4cCGNhs99inroTcsBRheA8eN4e6eyWHZ6cQWdZsxyAAGUFQ64tk2LsRJcxFxSSuRh1KU17TDoiN4eEKogJ7der3G",
  "key32": "5HjLLy35GbuQK41DAYJYM4zc3h1LkwFnj3TiubFSbjotGV1TZVGWbQP4DaCiSPPLwN7iGHEdz69Rt2EH356nsVY7",
  "key33": "YyXJtWbUcnptVdGkyhyGJ7meHzi7zhM6hahq7oqrerhK78fKNSf15BWntP3vKGsL3WuCh5RaCDF6BC8eTEFPu7d",
  "key34": "3F2C7VXh3Qh4HMV3MDqvxzAnXF1XzUntKs1u4uhapyubxj538yQE2jiHVQUiTsNczx6bjaAKmcpuiFsnSCUqzRC9",
  "key35": "2mw58gpNSmbCsN4zgaUCgxUJmVrv1vUNUu4ZmyS7EG5ziFXpmW6p7xWfHpqNwjXnHx75b3d2PQMpiAr6obym7tCF",
  "key36": "3sk7u6EBK5tEAVCWnXrVLF5ku3ehghzJ27cgDZx1fPLMQo54GURF6NJzfQp7RVNPFWDJNcgnSTigiZP6XwFxLbcy",
  "key37": "5wEYGZgRhra1piX5gkPQw5dTafDQfGv1YgYtsvJBpBfS46qoXq3i1CFs3pCfMY4Rm3X1v5ebRkWNWYU6akCSq2u2",
  "key38": "5akenDaYdbU8KDLp7RENiG6re5uW9iUWPoLaJ8QnRVKgdvKV2sKtT7g33RaJXWGLMq64JK6uMJGQBphBTdoZrU6Y",
  "key39": "vhWjmcd1KysYY4PDKcpW1fuh3Xhq3wHdTmvEuaFqCVk1koL3NEjPRGdBvNYDF3Yxj8G6N84dWkhBCUQCNz82gaz",
  "key40": "21WKdoNbuVvhwvjqWG2j5yr5wmjHg2kqn8YvWYcHRnk5iKDss4bwQ7efGNhUgtYtNcRrPvcpHJQUEsvsRorqg5JZ",
  "key41": "R7NAq4gZ3bMJPELPARYs9MJTVwBbctSi6ncbBxFQUedc5njTMaShNKCk1StqToAsJSVc8KLaogV2fPmGgHtR5Z9",
  "key42": "PchKSjBe3HE7Z87aSPANyFnKA8nAdbYGdxnPgB6tgFccV5swT4G8haTTstR25kq3ir3FZ8b6Npy1o3XR2kA7eUs",
  "key43": "5YMKYueK6CXnKwXqMF9qCSBAx7L7msWVTKj6oGkvkKNf6Q3rCV3VJD4nK5geLqDZzjw9MF1osGJDYZd7v8M59Yrp",
  "key44": "qyThwbbS1GZKhPdGUXZmratpNcy5wAFndRwxGBskJGtzFq7G5wHT58Zz9CgefYyr4X1vF6CYT9o4wwamWzE1636",
  "key45": "2qkj3z4JQnr7pDWAo6AkYx6XEPW7ueZNnwbi4N8G2ToKbaSAb7z1mgDJUNCfRhDSQcw5yheHwrkXwNzZjMqFN5b8",
  "key46": "5AcG61YKWSLnYN9E8uus3QcW6QmUDADq1ZJZGK2g5gMrjynefyvJZwLTXeXSRVgU4k9r3aJuBAr6jS4KwLKaK7Es",
  "key47": "3zUoZGzdMMFmcGVWYM28nC3AcZ4KaTY3QdhXxLoKzZo9eQkxjM3cz2W5S7V3uN4ifP1PuntV5PPjPAKhxQgjUNkk"
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
