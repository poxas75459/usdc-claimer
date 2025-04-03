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
    "39CYzir2BoH9K7R5nsXixn6XbZsJYdRC9F64tQgrKNH2pSFcoUAJ6jxwZqafmLiQtgha4GRC76EgBgBX6tqMsims"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gYG4KsXiJac2y5qny8yD2r8zuyCqo8SEogCSaydtGGCnoeNwbLPbuWWpy7T6QV8qBGQAZvB3d16PjEMRtMb38bj",
  "key1": "3tW5mf8o9JHYdchibDMVH4aytMjQ5D6hFx5ktEMf9UVnVJAgEbZgquJ36TP8HTrUS46kUEHpcCcYWeQrKmhTDmSb",
  "key2": "3AbWFMj7SDAfBfcFgVrFQnQHeDSfQQhL2Jk6iT2P1goXRG5S7UGj4gsgqaT4pdd3YYtcJBGZK3dBXyiixJm4uUy1",
  "key3": "nMbynLPup7RyXLEMTWAb2rH5PvrJ7ehc17Teu4Xt1p7wZnNVtMhkyE86NkBS7exRtDHJsf32oSEE8vfVXgFfRv7",
  "key4": "4uARa6H8PKwk5AAcYvRQR8gq8UJLcX2JinNYJMBgwzUhvck7eYiCrUsRsJ5xJiK8m2PxYvt2AjMhcyADPhe7TzYK",
  "key5": "57za7PDiJwBGcqoXCPsxc5GaC5psrQA4TW6SE1fFTZ8DwRrigh39Kj4abi3ZjcV5oguoHSibCKxpozsLMEuZujLh",
  "key6": "2WDdabzLXVEJffU7sTvjywxGPtUC5eX3Had64mCQzgcpRqrGLgXS5NmNwj1F45uEpLaq5A7urQZYwufmrPfXFuxk",
  "key7": "3Z4mxnuziHecUoxcyBUZjXDSe4ZGq9X4wV7y39tH9BDQRE6t6cWLBXMbKozD8WLDvgPhAzUkeGpsjw4tzE5UjxhR",
  "key8": "UDFeXTAx4c3fFp4Ey7FowsrMRm5rGgJzLUjnUUWvDWjmNFkHrruMQRoUsKY4rMD9GKGaag16SzqzQjSRiNxxN54",
  "key9": "3JfvTRLcLN4YH6WQ5YpTzi3BA89H5DmJ1QYWzCd6GaSm4EreLAMiAxRsTxeTRgZzyyWa4bBu4WUZDMpZ3DQnrAKU",
  "key10": "3LtRL6L7uBfDw7TBup4UJZVYdUxfDxvaE62ctPdRoMLHF3u5BVuWU7FukmqdgvP2B9ThT4tLKcEiiGjYmQUN6ydy",
  "key11": "5cA3u5HipcdyjJUP5VXrjHoAgt9fDAo9ZTDncbikn6ANAZMpKNrUFxVds1JfJBcAGWqTH3u4jNY1HaCYyHjh4aVT",
  "key12": "39sC6YYvHRdfpbRzsprySC7ir4kw4eV8tdizdubJR7xUWJAMs6cn4o2LSZjrRUDBvJjHzFs2qm2MX8HFtsvCAN8z",
  "key13": "2ofspS8wy4T7htcEf4kC3g4BTnyYrVMJaaY8bEnzZ2jn5kjCE4hioSK9bXHFbabv5mrJmqHE7iSrw24b6buuECe6",
  "key14": "5Vom3BWwoSNVZAM1iunFP3c3dJwkKkQLpStaSYuRco9L6TkdGzKdZTTiSLuMohF4GnPLCXCkdRzHQNmuhNgsssYo",
  "key15": "bJrZCFENGRz7HCpqhfzumMJBM2poBUhpD9HvbSrG6PzKbAAUXzdqKMaxBJib1SJLEi4F2zgPV19x8Eqo7Cparr1",
  "key16": "yBk8jHkiCufw5AnbnhgiXCQ2kLnrZaZcLUpUxikRKDfnA58hifd1miEUv2PiCesdYdmyzhZFmYB1MjrgchoaQFe",
  "key17": "2WNHTKhPqRk1MPXzjYJgRKcFv68qQz8YXt47qmqhSFak685ynYToN8pC4gs5dxXxLytwmtLmLApzrFJ3h85xvGui",
  "key18": "3F3qF95jvif6BkcG36sb7CRUJ3Pp6r1ne68SxS8o8VgsXy4axnzSDtMMtVHS3Np6BdpTbGknPXF56H2EfYEN6dUy",
  "key19": "3KuN34MguoniTnqJhSwvXFYNMb32Ad8JioYDcgoMLA2bDih21U7zMM1d7BSi37RJT92886zsQ5XwbEQTjohm96BS",
  "key20": "3ZTK927oKKAjtDHDVGaVkhhn5GM4ZQgRrVtBem3UbKDgJfwcov6sAuBpfTdsTY1naa8UtqaovLFaMkzZQwuijvLV",
  "key21": "57ToZHQTQxLDUHnvmtbA6VrWQGhdhF2yYicnyCKab3toe1tHcYix7WJxUcYMxsDcPFDpjVorGgp4rHbdP3RsJZAM",
  "key22": "w4rNFNrpR4JCKe6wARD1v3HSgP37WNv3p8Grk4ctgrkmmrGUZXT6ooWb5kZUxipf2rcidSX2LuMcdYgLhAPdoVJ",
  "key23": "5q9evF9XuwzEvs4NJmCPwgqPrirm5h9ZwemtxCMmRdGsW2GwvW11KifV1RHE2RD2LNfTih1KGGCuxydQRxdoVTFV",
  "key24": "28fnCVgFa6KuG3gRZVqeyVuuX1Nh8MHTG5R9z3j7r7pBVLKwi12hubWaLYsNtcWqGuPUtrKvuf9Lc3iRYRJE4cYN",
  "key25": "3KKjZYjncYdTTAs7Rjt7PeJobHXCF3tQ1n8BvmqkCLzb1VpR45dMC1KV8nJCN4FJGyYeUQRn1QGt673XfVkQiVfb",
  "key26": "4JPH7Ct4rzAjtCDKE3nmCL2XXNcHXf6J5gnSUGbeFJgowZF99B3X32UbJvTULTo9rxquJWjGMofGT7bGhEmzdrek",
  "key27": "5VqMUhZv58bNyu4N5Vij8BMxCdVZowq7hPgRcJ6mE9yMFesFucPonoqeLkF8niuQCV5pqPc5SQ6eDCCeSFHEqFew",
  "key28": "3K61Lb1ursswiwiJTDV7LnNjjWM3v4rEkA8rfk54K4WRK7Bz5hJ4JVuuD8DQjZpWhk9tpgzbZRT9mLQWAZDpjGZt",
  "key29": "3n33zaMT9LMAS8qtLUTb5sBvxrQZKW2H2cJQ46dNFHx9Phs1tKdLooQ9VGf862PVqZ1EiwcLf6z3UexdwGbq7bke",
  "key30": "5KPWG8EZybtk6gvA1USrnWyvi2w846F97ajXD6mRYZgVYvb7Di3QzrBxnKFhMVruqieFrcW3EQGiqnAbyzPmMq3H",
  "key31": "GMwMuHeBmbLPcAavxyGQEes4rfMT1wdUSpFuXMCuZ68mJsbTZv3UmsgyBGLvsgVWhWmxxqEL2kEMb9LAS6YmaqS",
  "key32": "2YC9bYaP9s3jXG4YTfHdLG3mW9jxVY3exKKXFHjiNDgWrXxbeWuALFrrtP9ZaQs5wPYFBAMPP52Y9mQZDNqivLmb",
  "key33": "3CZ9u4Gj95fkJ3BeefbbZBkjGgYPgEXNAoEmiEgG5Kfzz6kUhspjmGMTZvAygoUx3mkCGUw5ASu7rVip5kk8KsvD",
  "key34": "48PMBy3fAajLUsMk6z5Jpum7SNHmkUYYJxtYmqzZpqVKAWgvMYwn3kK2mN2pgAwKC4JXxfAbESTkMfWSA3gzi6dU"
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
