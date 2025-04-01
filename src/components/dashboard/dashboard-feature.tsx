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
    "WiJsECX5L6sNJzCTYGkGvHvJoPVxXrzCCqtbsMmb1BmfAB3EuEJGdCthpPVpow76AfDCDbVzEiUEj6qT5pnw653"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FzQLr3AL6SGnEMeZBFubLTwyHnEovrjY8f3jiLhTGHpXgCKqiZLcimjjSDgyHizNUEGFzsyv9m2J9hLKhXszGho",
  "key1": "2EPeN48GwVanVARQM2VfxtfCPXWUw2h6xZX31At7QZu3i9LqXAHhm28qf2vSrtzXwf8ARHtGvAihdhSdMaPcr9UN",
  "key2": "4mkKsgsq1qVaVyaAHApnLmFaxQQ2LjULcXj573UnAQbUJeSLQvsTtKespdd4eTSRRoHkCnjzhQV5CA1NAjLew6um",
  "key3": "4UovA2sADrfKMV8mf41R9XHZz5ZPdtxvwS46t75dEtQUEcb3KLaqvnoraLWYCoMC23W6P4bvjds8LJSN8vjrtYPJ",
  "key4": "3AkzmriBf1MK5aYXNiL4ATvYfjge4xroMcpLJbCri2CrM2QEtjARsSR72VedtYnGafabVCDz6BndBFNwyj8WrfAD",
  "key5": "3pcags5Jnt2c4QQUGkVh4kQRdQuy8iYfD2A1jLyLAjw1ENhsvd4nXvNoXfVKCpipeGvBaMHkGUEh4SH7YaotKZFZ",
  "key6": "3LwWPgCSn7RN4o2DCuYjeHC7K4WtwvitkqZZWmyaiUqf9az1QUTKt7rntUdu6HPpQ5P1B1zqKSz3vJQ28pAi2hbK",
  "key7": "67ih2ST12QTi1XE1tDv3aGvZnmV36bVgn24Jx8LrAaYwzLvURM9ecUZFYtMHNPib4YtQX1zUi4et85MHndCubPtH",
  "key8": "Nu5jocw2PhvsMB1hutYWRYbXThGeaTwh58JaJuYFizWEG2kvkr5mKS1H5FHsoqkvt9sdScWab3WnQE5wwP24ubM",
  "key9": "2GmU3wRkHH4qHtSbBJe223wNC6yDBZincBbMbK9RY5fzpcqgpVx1MNFg3kX6aqPyitWQT2S6CTDwuXx6MCiwqZgK",
  "key10": "3YLogVFVf7v2Pg3VravSX5FXnHkoMSPXcPfPVbko2WkaFnbcUJZkAtivjHpH3RH8gCqN19FXcPPQnvosocS93jAR",
  "key11": "2i9PVf7ZTfu7tWgnTG3VwsXSmNQipke5WmkWjXaSkCBbYj4FJwG3esj4NeS5nyRHGBb9EfJYXDxyZeUz7MBUvF6p",
  "key12": "3v35A9HauofQyGdzPBEsPpBVTRcv3pdLSiSB38LeEgxZnS94czTqm3GS8yU9VuxxDyT2LJ5xPqM2Qq5fbpLiKsE8",
  "key13": "4UQw9G5kHcPU3mkzBUfttZtNfs9t7FTw9P2XbbRwSUXABkRGLP6dByY5AcEDueXeLmqJyfAsrghADBXZ6pnhgkkB",
  "key14": "4xXZ4wc9tXUntXU97hfDJ2kMaFTFWbtyPWvgKGjLMCVQUCQWgjFSjUht9DSpxJLm1R5RbXgffa35vHqcAuvfeJRG",
  "key15": "4rPruZF7D3Jiu7tjXtuVeZnARLVgtHtKX95anLViFRbC8iFu1Ne2FL4Q7sPnvrLrR1aziRdrFcCLEUY7dDVbN4nS",
  "key16": "5NG24W9S4myeigpJpSAZ2CLd25K1ZkYhZnvWoyN75rYKVhTa8LkjzU5sLfgEPL4cK4PMmbQyKV95RXZxbZWyAny7",
  "key17": "226vaPjDVRN8L6cBXqSTn9coNunVyEkWWW1UYu7LjMdZGzjtzBgSwA27PVA8XWxv5UixBDzrMcqho5MHAahVsrU7",
  "key18": "42QcChgJxA7Syb2zGj4WZNWHd8FmHTEJfyGbBuapnKY26MEtDwhkf2G3xB2w1HrAbBFQKHEQa52abav2vF9FCSL6",
  "key19": "5742JydPdowRce9Bs2TJun6A5xmYJmCAcEXJiBrZHGvMzEuwWWBfGumn5FihXw9VzxdeXE2GiKpXpnM4t1EVJnDE",
  "key20": "3dhTr8Uyj2hykNxY4YFyuagBcTB4M5hC5KDBUop128sfi8VZAFLeZcxGABLvQpP3gzVvqsEA2kDSV9A8wpRKJ5qu",
  "key21": "2webR9fcoskNdfsiSKsGkmFofBek8x1xJFfHz3XzBXwM3fcK9Gq65VBybyXceKj6ruHYdRBeajwU94sz61HTS1oj",
  "key22": "3AdTf3xemuXmUqBu9F7C1gvGLFfWLrK86eorcrHsW9iWuppVoDKAPK3YUQwsG9YXo3MYGeovy9c4874eezmj2Eo7",
  "key23": "svGRLqJwGbCAKR3fCpZ7P7r8rxHoSdwEnHZgF9UBueXJ3ukTUSUtVsKJ75GiqSEX1n8kJGvkZKHwMr7YDXwbgyF",
  "key24": "5aRR2J4vGuFCTzfYQS9T44Z6arV4Tjyskd7VN7awzXMKj595dYtbgppyvcPP3YBne7Scqs5hFFCxaEkYgrEZPohZ",
  "key25": "48atnzYYZqR2k3Zr4D1PtyePHgXNbWNKWGfH5gXgomgdpAUd84A7mrAX2NEEGcGKwuLsyEZjzatQXcKEtV9zULaH",
  "key26": "5FjA9bzor1fcvRhHDS9Mb2x4XQc66SjVDymfk5ZxYfZWH8YvtX8gBdNSwttnBEx5zagpvWMScUzatSKR7LXhsuRg",
  "key27": "9AEz51nUtPGWaj9xpX7FrE4EoNh8HRio7ikALYbuwz6EPWXCSP56QaPJkRjETCc6MwQZuvr3dwPDuSdfxL34dai",
  "key28": "4gojHYXH7YFT4YQoHV6AHabbzPSc4GLFe7Fn3VEwxeUyWWkQDkP5ZCUCCQyd5BdDifkPEoP1KT9ipkffS65h4rUC",
  "key29": "5sKDZbSD3YDHgZAeX138YvtXY8GfaKhhEqbC5MfXsxyoyPPJdoEqHG5up8YoAu7udFoZpBBCtj5S5TrJhbEt15N4",
  "key30": "5SLytW7MDCzdWKfiLSuCU8sopGFzXNhvNtaw2e2En3nPhmkwhSpDckzjyUCqJ62aSTrHPXWFXbzZev91WkNk9YXc",
  "key31": "6h3qk99dLmTfZNiwVEtYSzW1sSDNACewaEHsxVXjfQVNqPkPBDNihDwZpcyvFML3Wh6RgnQyVDMb35D74tYAN2t",
  "key32": "4MrMSctLXGyLEzrsW7TER981Vn3dXjyNQNTYWfJRS17xcu1yGgxJvsA8mvemo72r2xXwKXkv3GWGJ3S8iajfYSoM",
  "key33": "2jpJmV43XbkNkC4xusvKgmGa1MtTRnXtyu4d64gUovj76kS9JJGWo969LTyvxQYxWenLxMrkJ3Qwqe3WtpBBmUa4",
  "key34": "3ihHnmuZfd4iGhEVsdArkjdbAWTQPmUQBhjMryWw9vc1nP3Pd86EGxw2yJbajUjHVvRPgD7aKaYtyvzvyK2PGRtJ"
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
