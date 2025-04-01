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
    "3tPbjm6kQT9gqqPcNJfiVbuymMvE7cu37365Dj1rhn2wMcrqiJZ3KwEwED5UiTYwowNTmSvxrfjk2wk4yKvy5z9v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ttbtLZYsGENPtfHaq3DkzE2quyAaGPsDeAUkR31QLJnknu9VrN5NkCD5SRFC3mQ6g3uLvPaYLMFT9xZqwPAFfc",
  "key1": "54Z3qJriuQVqE5W25UrWC2XfxjEhBF34synkKt111SnoWciBSYTZYqmByZxUZmq6Pkaj9H9UZFLdNiQhcPeNwdd1",
  "key2": "5C3tKy9VWWTSkNSxzCjSEbwDRTGqiPaqGPWX6GmFVVt7M5E11mwCenDBYyC9UeeKf5LbyKxbFdjAUyA2t11oCPzE",
  "key3": "4dJUeczjx4KyBnt5rfqTbwNJz2ba9QzjKSWXfetrksR9Y5G4KsjQNY8ZNn8NEyehWS1jNgWH28ArKqzyQU3k3kSC",
  "key4": "4tvn5PquBSMLPfpHz5J5kscyc6LkxgMGvuD515KLpVzqZ4b6dZ1w8vcf5yzCVuUS5XqPFicCxdg4Ty1estBrH4gv",
  "key5": "4oMdV7LzK27UUNVy9u5NzYi23jhVPKDCB8dXKp6of1HSy2vC48MU9mertJCNNLqoKnrsf4RMY4RKr55LcC6fcNcW",
  "key6": "34v7hhmq2TCxQ7XpPHAt9AoCNkpnau4pfsM6SHrHYfgMYJznvEgwfwVLqe2tryUB8aSbqXfr26PZTLZGpjZACVjM",
  "key7": "2R96goshb459uGCgQrZKkdCfCatiPEru6KE2QkSjdAbLJSDjdYUH2AEoFsgttQZADRC92ZDaWpGQCTkAwrJVhQP6",
  "key8": "4sDS3h2FdMtQUy7vaNckThYvdJZNGFUNrzLGewkbsJazeVepomC6CQYjBtjS16KTUideyAaiLforbonyGPLpY5LA",
  "key9": "5ux1k9GkGEJWZcRyvX4FEk6DjdZJQ96ikPCj5UnsdT9BNFjUEpe97ozgsCSwURbYJ8urCBJRurBXpnHsTvLDEi9w",
  "key10": "3xzCCpTADbpr3t1aUTGAbuUi3wU4VvjpQADYfnwBTHKTQwLx2NzHoudvpzyWndDS7vku3X496YSnaoV1jGTRBZNy",
  "key11": "3nrSSkyTdSwHjvWhHjqZ3crChaQ3RU1mFC6ZcNwhrdpZF2kanwsUa8FXm52qNvhtPYUoPELtwDFjKMqdH1xSgHqR",
  "key12": "3jJYtr1k32b8r3Up4AxZ8hsK4JARtib4WSUtaCvznvWapC1Ui3Y5NMU6NdNN55gTPsDtMFJAXh73LqaQ3SF195G7",
  "key13": "2topWU32vxvyHkWPSTq9UGTQAjx9HsFRtNoMwkdtEHJ3gKpeqjATuHYKEBQHCSpcTp8hDK6yCaYeZURqQLNG7D1X",
  "key14": "5tkMmzsS5iXkxo5yMGctXPmQfp9jPndfUXDXaWWMBPWk5FjdwwW12u5jr847CaLNSxp4zrr4aGDniwCgq8J6iUfc",
  "key15": "5oZc7zNVAEEpYESLA2Y4tYxEULB3p6i8WVTSKKof6ZxLuJoxD6o7K8umjWZpuhmdCcPk67CP6KkJatSpTQGR2auq",
  "key16": "5quoqXiRXC5atP78FqGaS75rrThEgd8haEV9gAgBKASmZoZCp7QogyoUkfyhtkQvvsnBCNk1Li45SxQ3cZCpuQgA",
  "key17": "yXm1W71J5uRg5Akjt5C19fnLL7p7fpVLMtw4GrUu213qgHdS9nEZSyw5sd9dZp8z6usjr36ExiHxbLd3XExA8zZ",
  "key18": "4vZUREP7E1dY3vFrYEPLuCSo5sGsKVLpYAXDcm8amN2V4tkD5Rx2RstkJaGmnFUwQkrVane5Zz5FWpqnoid9Twk8",
  "key19": "5fsb9dizJyQyyD4yEi1JPaEXV1vZU9KdXTmDH9eoazyX3jnDETFVJnBBfXP3wC9Jizt3c8ymTr27ajRS7QBzowxR",
  "key20": "2asZjxERZdGV5ZHapg2vHvyaRwDgHnF6nctNszVeL5ceTk3SfB8g33DGoxn7Hb6ueVRm1k8VoxKBuxuAUuEgZ7kM",
  "key21": "3q9KF2MqxaykKUkoWXPFchXuvHj3rReZ4svM3kHFuGuNWHCNF9wC6CbXdnQiZjicez1XTCDSitgxCnYhNdrwRoWn",
  "key22": "5UpVGH8ZMdZZPQ2Npmbx8SkLiDEa1e2yAQ511Ys41vN5MGykmSM1FGR36yVEQGHPznLPtPWuQ2mvfaXtQihCxkAv",
  "key23": "29DJmEmstvLpHT8DXbYMeDMBCyryaAmGEyVM96xeqigJN1Ke3CJV65paZ8nGWE54CYX5boP8t4YFRPFCuRRsG9d3",
  "key24": "2txe6G3318J6g83bdEwQo72h8JipDuQASo4KMjY21PYb9J99PR1PyZxN47ximHTfMJR1Ck24xwnN2gbN2VW745eD",
  "key25": "3mrhUnfM6rfN5A5DymfECCGdj7Z4zPa313WgL5mMaFZnkFe7wRjNteaGeub82Vs5WqGiEjRcz3D2x3HChFkFsurb",
  "key26": "5pvcVJvowxNokwjr2kzH4WCkgFey1sMBp27vx5ZgVqeJVShnLF2RMRDSdqdZh2hucTiv53jPfQc5Zp5uM2zedr4k",
  "key27": "27tb7GxiH3zXvFPRz8n224jREbEcHC6jXKJyVu9356iGU6AMX5hYzcAnPUofqDVRcSt5VswccPHWLgzF2pJsEiyK",
  "key28": "2ihdet87MZXDK9wKs22PP1YuaVGfECD2PD3mKVEcV616Yh7NasZpfViAxiP4mBqrQAxosnmv527VWL3j8M9LA2fY",
  "key29": "2phA99SGTEbt8b4Z3xypLUmELFbvq6YSzaum1ssAxxrSKhFKFjjovuUKv1SDbr2saEf6RyqHdFgtKuQFYM4uCaHW",
  "key30": "mn2uwkenkhAiHt3XfXwatnQkCk1HcVwT2Spig3roCWwE2WnvnG91Fuqx5MtAWU6cXE6GpraJUzmKtebKtz8BSpG"
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
