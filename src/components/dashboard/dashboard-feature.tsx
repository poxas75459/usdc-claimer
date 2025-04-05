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
    "5X4Ed9oA3qH5aS1rbKvyE8AxjcEprAtxDpagtm7PRZfiQyrJ4GfXsfCNtGMFaCUKzdubmuatY4Qm35QhtvP4gQoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YVcPricKSK25T6aPrLEBLfSd2Q7iz3cGe7JhDnmbq7qprRmbNMC7EBjGS6TdfAY22VZRS2PaforGP6dKiuQWLfn",
  "key1": "3cyesyZ3ekRV3jruRZLwPsJvSLhyfkFE3xMNmXAoE1NarX7RbtbHpyPu4mVoeD8KAVHDxowqbNbakhV7J4XN7bnE",
  "key2": "2U5tf8irESaUaRPLz2gdwoq5undDCsTPXHxLsjYXhzZ1vDP1jJigcbdSFha2FWqgjKHZmFCbXpxjHQwC3T68SRPT",
  "key3": "5MtFVRHsLE8btnyXLu25Ztm28YmrY17vaKNHbqjYg1YujtqjgxFb8qwVpeb7HPXYr5JJ1XdgMAiHG3Z13S5w6663",
  "key4": "2rBm8eAZXGnyFdF5NTVLL4SRkyi39z5PD2hjzXn1DS7hjFetv66b2avMzVgMXW5bipxuzwVZKxFB5YPaApW2y7Ah",
  "key5": "1Pi8YXdndEc5HvtMEa9QDSGxALREdK91V9mqVUKW1LLD46Hsj7bzqDhDMeXACA4xSpyENhthwrRV7k8sspwo4Ha",
  "key6": "b1NTHCwwoxy6PZ3XiL9RTLSpYDHSkWGAx3J3KxBjsxZFRYDGBZvAh14MuXPosvgcmhGgyKvTjzvDMadcjLoM1H3",
  "key7": "62wMDV6NwE7qgwM2QXVDTnBwmFgHPjvuXm1urEzuWiBVNfv7UNpSSdogVih4kgQySPFtApUc5RaweLYc4Msxx469",
  "key8": "3r8U84fmADkJY6KPL1EmWYyjxKAsCLrXFZkEkt8S8ngRrJFQhK9QKn3MVfJJ76fZqYAniXFjHyosLmG5SuvGkUDY",
  "key9": "4581jNeR8Pp1sZaJKiRKr3twbkPSKHEULY9CNCNz4HA5hx3z6QkruvSjM7NFRswtZk5bu9pepE7SBt3eYN1pwduu",
  "key10": "4W5ATfykKAPL1vF8cbBsUgB8GVsJ2djbmBM6NvnHo7ps65xDKuDsohAqKrC2jHxrWTZuDAeS3U7V5GovGcUs1X9j",
  "key11": "42XtGGogCpFVi9NYurEzS46j2Gc8hPECnBntF18fVd8BgTMLynP3rM8gFoKPuMzVZE2CTgQpLybeqkge6aCdPzjP",
  "key12": "KCuVyrNAqLnhjJDCFGx5tVv68yWoqhJQm32a4yDMvZS3cAgJWSvfJbGeo8AB5aDX4mLKgfypaupcNFaLddTTzMJ",
  "key13": "2aWYcVd9Cfh44xuAPTmPbz5tg9x7Gdydtu7royd9zHZyqcQZcCq2wKDCekesJ4LURrXHYKhSewGs3ZUD3G7b8Rzm",
  "key14": "4QSx6o2iA9Bwyv5GnXng4XXyMGZNuMYrGM7qcsECxgefdwvWJTV2ncpGktZEohhWeMU7hixLUNwfi6JTshUKNoMr",
  "key15": "2GftWYnFTPSo8N3USoQvajHCMiunzuiU1AYjCUudwd2AVPcCJxRhJuAA3sD8dtNF8w1atBi6fpLqDMYajKvRVguQ",
  "key16": "45Nns9iK9KPFTjykfcdKckpjxANUcCJt8KUJ4u6rWJqMiLgkHwEk2CBtrd6ysxsQimEdunA2ZtD1tSY9hmPEQCeV",
  "key17": "jdAHhtTmtStodfjsSncDzT5DcEV3txdggE3WUwEKx176hpeu5oPpChHaWMRPUPh4LSGgepsBpkNRzdXddw8ULB6",
  "key18": "26RwD2K4vNZ8DVe6zA89fWqCZEDRNesC3j8sUFfV7yBcAADz9mSXyxcvJxmgsJaKiuG8oWVcvmyW24uomZwLGSrY",
  "key19": "zUxWA6V915trUxrCfGhotJuq64ccFyVfwVLFZ52Lthv658k7STWie1txovziKB8zCZ3sdk8kv16gobnBtt12Gun",
  "key20": "3UYMrNcTca9zqHbSQR421wd7qzKm6vvSS7uePdCfpS1azET7kqcdeTmm1K22Suz3bvV5jynnMzyvHPXps6CTHQok",
  "key21": "2cuTC862uu3zzzqVx9CcDhATBMe8fkMy6oBkxcUSdNENo91iaXcPdaYxXK7MpPUx7VtCtz4oyL616wcLvW5rffSb",
  "key22": "5fYfEpxoeCHMTiGvX8v54i89tSysSveNU5oDP5H96uB9LvrFcSYZKSqhDDW5tjnNUC9WJW6Xd6sMAdu8HQvBL7mE",
  "key23": "3sXY1GcM3dPzUka3ViAWnh9isApw3o7y7qdsPcYTjHTN2t4Xo8LpoBGcqUMTteK7Ya9wn4YMJ9fFL99xwF2iLHXC",
  "key24": "2Kxwk2Uafj8CKtbUs3zhAcGgYDVKRpry2Mmj54kgESLtCi2e8mfpDKMNj5VwhpNBehPiWqqdfqK7UEVK4RMmmqSR",
  "key25": "5sQCpNMzSxjsMgNQghjzJAdqhG3mYUzFhLw7HikT7PNvbxjLsoqNetoCH2KfjUi7AaeFRP4WKxVxqzfmxHwSxJiF",
  "key26": "5Sgrsm8rRXVowcpwG5nYRJBQdXEVTpajCmkcXsjLDSVHL4riBr8h2dciFtp3WfJFxtT5vUyiPuJQdbsyyWcpz7sD",
  "key27": "42ZRRUbpqR2LWgA3pZ3at1LPZj1ehh6aRsDgE4ympATZjKGqNGsTLpnxJcxn2E57MtqnYv9qusxAYR5PmEsQbfqV",
  "key28": "2j2MYZ6EgGrX7jxxgAjSJqP2iQtdfV1k1rBxDu8QjUfyHUdjgM9C6CW3N9ED5Tasdp3cqptL6aSnkAbUVpgf5zxy",
  "key29": "4M3aoKe2skBVS943soaERZUppjrPyYVYP8u9khkKvwTxxTgqropVujQVMJUJigjFHRcyuvpwM1864XMbbZwaxux",
  "key30": "2weQXSZpB5qCJeUjXHLJnBUQ4oVZDFFqnr2cw3MqE73RWvdruM1Nw3sBjzbduScgbMv1zEsq7EVP3jxRTtDcSoyK",
  "key31": "37RS5L7oa2HCCkUMNTz6x7F2g7Z3kmRZCU1EioccyQ3DdXncpvkiatGJjEau6FR7S9f6q396jxZrbSDM8ZcD3CAm"
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
