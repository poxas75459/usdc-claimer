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
    "35hq6Ese8BPZWHb4q9Ad7p8ZQnUB52qGgWMRAza5PMTzdQv6d6WDqRHZspLQUQSwRes4VnyR397zaaTk5cx5P5NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6PZiSkNFLNuq3ofsTyZyhJj1ZTjdQUKPSdXgezpFjGDNiCbQhkp2FHfPxUbKKjDHazHuXU3ikeVy9MXspvUVdy8",
  "key1": "4MdUe9KzUkAxQjmnf8hsYA4USFrirYWDHcyQboMSFzySbpcKeMjPKhRThvCthyjpjDurmMjvv6FtJs7NcKwzGqBL",
  "key2": "3NVxCDW8ZCy2C2ZNtCStGDj9NNZyUyCs4a6nYK25YLWLu8V5HdiBcZTtcFBDfwf5drTfEN6LwGmkHDMuJQxgUr3E",
  "key3": "4GdJqo1gFabFMdaXZFnKFmnFGTMJdoL8j4VDfq36zZ8hrK4fJVR3NhRzgjDAXUVJVFuD3BPoRC617X6WgjpUGThP",
  "key4": "4EFDTfiUnDyC3WHesrcPhVFC9W6xB5uqyLdQp2MXQvpLB6z7TgDKHerLbNYodsvRcpcUVy8E6yRb9j2iaUAhn76n",
  "key5": "4XbBQFs5AAGhmMjU1noxEtvwgQNVC5gNU1iTdGusun77Tp796b2kcK4GccyvAAswBPznGVKrtGLvGzRwWzc14xaZ",
  "key6": "2EAuRKFgVR23e4W2qcnhiHH944garvTvb9stD74TrffSWM6kJb6nwgFkXEaugWAwpGxaCv3Gn28So6xp1CoQvZtA",
  "key7": "3VdcWbWCboPYxKZ96PNtd2ovjSEa5kcX9jXGGi4FbF1F57KxLTiCGEheioKiU4Sspisz7Dm3bMhGkEwqFLJEd9Cc",
  "key8": "5ZihwY75gMqGinU4ySpiq14FdSr3V7wXtK6uDJbp1DHsffrP8yLkqfKuPrbr1ECgPde1ENwBAR8vWaRgQnSKsVhM",
  "key9": "7KSNNb4pBXtv9D7X6MiM2BzK54QVQ1mKgecbGhbPgNDwDpqDGHh6Hko1NN1j4rNirAPCEXVAt99ETCW98U3dWrn",
  "key10": "5X8hHHoQsUJaW7mvXaN2NSXcLQXSkVG7zR5m8V5odhBT9GjZPffh6TAhoPvKpiUngUEyP1ryKCaEKaG2Y5WMvAgA",
  "key11": "4vnwo2hd2V7BfUdprLYvCbXs4zhEykRYWWsnqTQRiNpiYD5wTnFQAbtzPfT9VBhV1E1pqHs76N6AUdGtyU3aRKRp",
  "key12": "2YKmgkqamVbpr1V582C261uBzx1xbtoYpjdSKTnZBh649njDZLJ5WCYtAMhxo4cErP2PcuBkcKobiHX2HHT1rFN4",
  "key13": "53Ko7pV5uBPEwxNxLYXmbtt2jsMrizRC5eCafd4vfEh3gnvSwL46VM6d3UAhaKPac1QDWx6u5gbUuc2zHV37utrs",
  "key14": "32TjigJ3KZvjLFTPBo7mndcqJZQah5SXZcFPUjEP65AgbHrZc9kpn428Sy1PisMTtrHSS55BMw2k2ugpPH8bfsC6",
  "key15": "5NDUxhQ2VWoVungXV4XfikBSNp2bvGFiFLzevABu2TMXeYubAziEYfcAiC88nqMrz2UKzzBkByMvedQqxTCiHFhr",
  "key16": "U7h6vgpCM9sRvTJPqykrkDi537Q67mKcPw2kmVQ62D5rJWr3BMUUKGAJxyhBwSjJWzZ15W2Ked5ssjbGvii3BMt",
  "key17": "2NevagsMR9J5zgGXzy7WMyDbev4Mwp7xHCYqLYHwTeYcPS75N9eeENMBgLvV6R95wZE4i4T31TziVPq2YXk2V2NE",
  "key18": "5WbY8JFFWB9qVNpy6PVPWRo2GPgrSYt4x2v8F7LZRLbR1jfXHjTbKF3i3G2wVeR1KaMgsWcqp5xTswuqahX1inog",
  "key19": "2RSCNE6xerrWEubkfQ77YhxYRbULRjtG5dFN75yDr55nKvigbBZHsRFHEVdPbijBxmu18ehcQvF9dThQjqmLdVqA",
  "key20": "5zxgwWZStvUYSx1VumQSADiRkj1tyUXz4B3FLejAgMFe2ULtLwegvcXhZHfTBDW9fR4TTtGSLCwueYj6hYzCZDX5",
  "key21": "WsqEnY53QzzhHCAN6GBbt7f4R3tmYhXqz9nduUxMn9eniEUwmsahKGsXkfrCJZdAieX14wUt9fGGbMSFk4BPbQn",
  "key22": "5RypXZtSgUc9imNF8BAvcEGNHbTqP2GveeJnYtRsZvrSFnYMgcHLSpQ5fqkFabjSH2PXt2d9hF41xw53cZrBaK2L",
  "key23": "3aZHto59r2jfhwwea9cGm8pjoFENNLacXmEeSqokpQKsPGTkw3Dquu5bqmmjyqMBKdTk6x3HLR1jN5h6fiULFm1V",
  "key24": "5zauGcgiTCD2VSDasX6yweabrZwHdFCr5TELBHFrbPkarhrycgcmc9chatmMp1wFbMCVZitT8kqNsQNMLTR3ntLh",
  "key25": "2DwEL8Hg696YGjo1rNc9dAb75f7eDEVN2SQyWJUdwit26rg9n2cNRZzQpShy2VjKg95tuNw6PhaVyhZG7ruR6eUr",
  "key26": "3ufwtDs1EmXCqB3hgrZaEGY9vBE4NFs9DRDYZaJZQL99mjN4P3q6xMeNBKJ347R2kxRYVrn66dx8bKA84bK6hMAL"
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
