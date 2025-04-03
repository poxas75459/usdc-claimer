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
    "2MZupK9eyHLKTH7uVBBC75gGWs66fJ4q2qcA2BGUpqqVew6cKNY7W6x2yajadD4xNae7CN4XCyveXUyXCDfGWRfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "taHh77ym11y996gVSr7Siv1B73eopha4wy5NTLU6QRK1JfH547KbcJitBnoemiGij2Dgkkc65yWz7RMoSJGpzfz",
  "key1": "4ki57VwpUCLgmTYf7BPCYQxFgpijU3zArxbBGhsAxjQkSqDshoUZfs3jqYSeHSWEkxD7va8556cjSS612eR4PRx9",
  "key2": "EAHrAGnEfoZbgb1EAiabHbfsdEsURdXbMLjcVpP4NxrY1wYUo56WKMpqs8ZwgJRH5zJzx5Gkebf6LvHFZYymCTP",
  "key3": "4VNnLqVKB4ZkGgHaePh6mjdfnAGEXJTPGLSnA4b1mxjLk7FhiayZ7qqdRKJVWaHs6bWg71c5YEkm1nxCSqdYWcbo",
  "key4": "kg7eeHLBs9epZvSEYR8BWZUwwqY7NUgCjs3E5UWRpZQftCoF18LCXCzmSTC6PQcpEFKbWaJSCLWczH9bA9xg9iP",
  "key5": "4yVkyofbQyesVZFAooBHtFncXLcFusgpXCZaY4zNF9LCAuQcqMhK3dZNbZFQH1hSX3Y9JfTTPwDGMNVgrPV7xxxa",
  "key6": "2hK6ih9cJ1tFVabKs9LTUU6HrYoS9MwNd3fvcd2Xp4iP15EqNr5t2SS1YaY46kVpmCyinx52bQh92B2wEdDYRJuv",
  "key7": "2rCV5BbLht3ENFYtA4sYRHHvaSqAKjNXx8cxpd7GDB3gTh6NEwtVzRiDXvo26CzVvhaxAUWJxg6kQ2vhWmnGioo3",
  "key8": "rmueEU9zvEfCoMMbTpdtAV3FmKmyMeZ8m4jV64bX5RTNEr4WLct1tZZk7Epec1M8RV1c13B1ssDVPcqjpMPD5uc",
  "key9": "ZYSHP4nG9UNKH2KuufDKjkMQzEWBku9CmfTUqxq3hzDjMCUBJQ1WpzX27eroWUBcffax4ENEtoh2afPXo7rSLXN",
  "key10": "53sNHSWCtkc2ZZhvGVFB8neq4kN4vqbLkXNqyoZzW8zu93Ldr3ZGbg7xUWXrWXg8kQP2UaRnmB9ZxBRnW2Ehf3bo",
  "key11": "2WA4TFksdTrNQ5aTD8iLm4MYofiXLAATwhZfKjVeeMUGSHFFLT6AN8H5NhNUnNwg4PHWcggtZ7rTS6Lnp9zfyQzy",
  "key12": "4BtgivcSZdw1sKPd1AsSUQTwzrRUifr1ixcZYfUJB99NrhRuyWdqWp1GY6qXSPxETRipVjYdT7RHdvu8ZQo1TVDS",
  "key13": "2ZjhkMuGU4biL1VvdsR9p76rUqXVHRt5qLd1yrrZ6uaKA1B3WP8ocbXPvj3EjxHEPYoopCbdx7KTA6X7s3Y47WAX",
  "key14": "27ifLKYPYmDE2YGJjzGS7Y4ureG55biExQkzzVqnJsZn9PcRx3on7ksacQd2Q2r9bTwUpLjTgeedRZFHDLCawBMx",
  "key15": "4XHnCxu6UU3dmFZc9h69zByATzPL8kgPgkEwgS3dv297ZeTefsDbZd6fvgXNEt2eT84Vte5KFQeKW7Ly4P6RdMHS",
  "key16": "5Lg59goar3RdvvgPpbnufHwsabYdZz5FJt7oY5ot5mteRYn5oqe3noruoWSzCn8VG9B3iWSeieXeFHTyHwYe1yfF",
  "key17": "yGwZNNcU3XkGe6RVpqCMNrK8duYg9aepJvYvQvgFPKcuKhq4DkoV6kL794xZGdaDHzGqYAkhu84AWwNWNUGe2tm",
  "key18": "9uj8BGMzQyMMt9gLWbQ22rHtxEavpw7FWm6jWiAJhzBe3QzrZSPfYaPpYuhkVLaxYmmrBuWSSvPxuyTufBgShZ2",
  "key19": "Lj7gfagkrysaFYi6sSrXQzGZ7LWACqwvGh8jXrgiTRyXbzr4MXLi63RjgAuFeMacQe95nsZBiaPsmn33ESS3RiX",
  "key20": "2BTLVdiDj2ZdqE4KGwW4qdYorwzQEH8q95sSdyvr9gYFuLCx1NpeypTEhvPJFhApVd1dGbhhD64D4rxxpjAvT75W",
  "key21": "4WjEeCKxEQsy1zok5GMHuj1JSxGHpi66XNCoJvb8iMtJe3BdKZTXeyBizcozDzfZeiZVkRp4Aq86UqNH8tT66pRL",
  "key22": "4Tpqqz1FT3vDWDDxcCFqLPMsPk4HvCzcc8mxKZGeSyifsZpwDtPzedujJJ4exjbKv4xeNdgGTwXRDdJg8ouNhVeg",
  "key23": "mRGHW8MQUY9JxxK9qKQx1TQhQ77wYu1sQ1uZyafXRXuz91f2jnmPmfbzCFA8eoLwt4EdvsBZ4SiQZBdsEAmyx5v",
  "key24": "2fYrBuX5Uk8c1R49yEdA3XmvdqEue9P9x4PgHq5Ug7toPgLaK2gD7cpvzt7imJQdbFQUYZUrFrKTCmrkLCuAa2E5",
  "key25": "5outnMPRNH1CzkLRXg3KqbjFyDW4uRh2p9Aap8yV14g6cjJ8iwAzHKbQAAoF1MJRpZ8apcAZNRTSFHVkMNhQEGfh",
  "key26": "38zBaK6driQbKkkXofYMKXDpUyxRiKbLoubW7vwRVkKqRhAYwqDVHC9AADvpjL4WiHnzyXnTDq6P78CDFc2gY242",
  "key27": "2Epn2gzR466uXL9njpQ1urDaasFSBGfqEjdcbBiwkYqDNunvai1kvacZEpDrqEZwjcareVL66mdm5VzHd4mtWBb4",
  "key28": "3AAoRWHn61m5jfjNedXZXGk7pXNi26hwnqKxj2dya4of9drMKnZti9riuMZEKVhimsi5bbJnPYWwdctMLUwCAVvn",
  "key29": "29bjzfNLAjLF9grn7RkcSn7SUW3KVjLHs8rjAM8KCJAot8Jse8hyMrbnfskD2LjpZPEG45SsqeBYTgLqNadWH1xn",
  "key30": "54b6TBbSiKSSkerDRLXWLqJrS3QvQKqreBE96CF9vL7ryhiNDpPussQJhEpYmCNym4jtE23bMjfE4PdiawN7zBum",
  "key31": "3GMyHMMdXrjWoLGc5sfXCbVvRZ4JhtMEf429SYKVwjUXTCJ1Bf6WXMu7BQtANrN3D2tpQE9AtTopcjkM6kFiUCxy",
  "key32": "22rxhv5PqrhS3zCThLcj32kmnjn8GhXQ8Rit8m9J8urwsr9xRmwXybh1LmivZPBrWBDe3J7YrK8HMww5tRfBeGkS",
  "key33": "352N6BLMzTswC3dwhtj53dYe9qaz4EtfxFTiZSBugegQRbvbjgvFULMSVDwN5f7NvKwpwVbmciW4KsquQHmZAfi5",
  "key34": "vmoCMtDTuH2JyJassNFtPeusZKAfshwShffPLh6mBZDL1SpaViE7567nSPzR6yN9D4VVL7ZTjmpDAjyFxPsoU27",
  "key35": "5KapWZPAGnc6V3BriaEekSpBAzSDjExUaUjnKyqMvPs3Apgp8Hozoe9BDxZKwQEzxxA2rVx5cegV1E27Tjmu7Ygr",
  "key36": "3JXrSNP2b7n9KnJ6QaogjQvuMXScGMkpwowRFhyjPa2qbdB5YZGAzYrBcyR4uw4nGZhM39GQbndPCLHKeWWTV79h",
  "key37": "5Cgp1D9hRZpfMFukRbCQbrp7FW5cPdSP31UirJihLEqUnaGPfBESGfkztdMvip771oC1Czp6MRddu8Th8Fkpz6dg",
  "key38": "56NMnpyS9nAzvnx52FQkvvznVhQq6DFWeAbeDjP4wph3FnWBqRpEWHryFJwG6ZkeneVbPuLsA1oneEjuFMUjgZpf",
  "key39": "5hHRhAMiEAXCHLSDR3zGAmSJEWJTmjzH7gaExpSDy48mt5vgRzd6xUsm9g6BXD1wegjrVi7B6PmtmHytREKF353S",
  "key40": "3LCJ73ydjhG9Z3bpQcGXG3Qc2jtk5zQBvhTCjFHYdN3TS6FkFXXJjATwSmu9cp8ssWMfPRjMsvpm6jHJZUHxEXyB",
  "key41": "3Rbkspvg2U5pT7xVcA4w1kyN55ZKyVjCnxiRoVwruLCFsb74vFHz9SXmscydUkUNk6rFXzHvc47qPTYyNcrqGqQ6",
  "key42": "3r55wKD7zfR1wcfeKizXBcGCfYSp3b6b3AXGRR21hAWvbHgHLnmQ2WHf2bMmcngq44Nr2cLAoAQu69vT5PkgZS69",
  "key43": "65NZpE699SX29p7HbTwm7Gj1UNzUA7xVCTD7RabDjTQqR93jH8LaLjxz8KgX18Zaj1K2Aqrtr5qPA9JvxoNEjP22"
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
