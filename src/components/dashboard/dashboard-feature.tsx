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
    "38naaUFy5ihjUwTSybhNdH6urKLnFUGYhRXNP1nPnPX9STqVfXPiZEKrtJHe46RJFpjVX2fDeLPHtVceda9oKUN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1LTRSnSJx9iVSUCEBrfEFAesPrvXv9AMVo698cR7JkSMhyFYS32htcewnV75KxDbeGSvtoBtrsL8Z3vKAWHjDu",
  "key1": "5YwegsS92iCdvrpu7BBzdRB9oHYeEEmMqxLnuhaWUTzqVdLWfgff6iT9qDKsRi7VZ9sRe6B269u77GYEcFDTD6SN",
  "key2": "5LxdJodduKHJZ8hRvtH3FHwe3fnsvuzCdb6geWB8dfZZGXRN8hA12onv6NEYJTFL7pcbxjadP4vsYLyaA4GhJkyn",
  "key3": "5y4wSfiZbqnDzf7bL7K1Q2Y172WbvXTKsmLbAcLRB4h3sKYTPfsPogV9jpHYv8gPwY9prsoGMJciznCVkDgzbsP",
  "key4": "U32uXQcKWFqop951pqBahVaGSEy6UweBTVUMxwXEhRuZf6FSJzaRPHU2nFcMX8yNs7DFoC4LAQgCSsKBDii4K3d",
  "key5": "5m3sNJRePMRp98ugtSPjvDSYAYu6X77k7cnt4Axhx9fvLB9GPRKJiKRqzFoDsL3SQfzpxjwKmD8mghV8MTq8xfiD",
  "key6": "2tffaLW6ziBqNEq9gt6WMYYbMSpHPK3MZjjiehYjyA9SUmdRCKeq1ynQB4hpX5KPZYZiBsKjPdrRXMPjzYoEskt9",
  "key7": "27HtMbDp27aPmeS1tZ65AqT9GGgpaY8tEtR4WxXdE43FkQnmzMfGHxdAeQBHe9VBcW7JU4WSJkQMB5HR4QRFrE5M",
  "key8": "4MqTfJjdhH8FkGvcsXWhACfoPdta1god5q9gxvRFDFRXG1Uk9MkEGRHU9gLNeqDz6S8bH9ALghBYrLksK99v3Mud",
  "key9": "52usM6zDNfBKJaFN7ZEhrBtAeGDZEWq4fZtkf2Z8FWSBNKm48CVYBvuPFEDmbHRuAvuMggL6vqF4SRm23nYCVw9E",
  "key10": "mr3fdjkhhGxHNexsopvt1wyTv88iJRMgguNRqDL3cTTs3N8n3RQyYz3K26YJmmUmwKCoSCzyH5ub4tDGxwJx5n9",
  "key11": "2q9bBa18ZEzaHRWmSbHeyRyTaa3DPqV8KmJhEB9oXCUDHNgFKM5KravRVGdqwYjGpJdSdhVwF7RHQ897j36AvPAq",
  "key12": "3CeE3Y7B6USeKbpz1FYxuLkExDKckEMmKcgs3VVcGR7JohQs8Eh3rjp73WLjuY2j2gtsZuXdCQ2zRBZorJqnNPik",
  "key13": "2XBPa5LnwhvjZ4zRCHm9zQ7Z1HR6BvE4uDaxnrMfJEHEYWWW1a7VcwHL5dnJ6s4FyeDTnZbFFwQbQDDuyoQqfXZb",
  "key14": "5XELdHkWfv7irhsmmT1Mf5LHzk5PgM9L1eJUSyRdueVRFL1626qriNzzGy2Xaz38rv8sk7TKxQ1Sp46eV8NfC3t7",
  "key15": "4UyUvQg2puQ7VaVSir3jsduSkUtEX5uVW1RbtUqU6RdBc2PAaUfsABe6XZ6o5MhGMMxEjceGYgPUSDJvPzKnTFuF",
  "key16": "2tvCDoFSCe9wW6pkPN4KCBSo5ijY2KA55Tqnvezr8Egh3J1cJiWqaEaa5NAuJffTTrekiohomcTUY1fG3kEYoHNr",
  "key17": "35cqxDpZXrpJ1Qq5TyhPuEFM2KHnDMyj7aKFwUTE4y2Q7zg3udebm1rxitpjgjCtz7dvmuYUnfx5BGL8fFdgYWjn",
  "key18": "2CbxqZzmdnqCmKjFu98TZ34KGPend1jFcJRQKX6EqfuKTnENJHN57y8jh65Pgtt9BYUe6m14SS4jAwpHRPUN8Jnp",
  "key19": "5Eq2kbc5oaRt4kfZrXS4eFAeBHzu246vSpJ6iaeSuinDuCn9AW8AF6oXxGGTpDaFsPn3xyLiNsjuvSjqzJDnhjZc",
  "key20": "S14Y5RgqrtbGQR7B766xqvBtEfEetdpYdHJrJ77FjWkNuzszgDFS5u96T4bvUgNhYh9qAdmd4GRkSGq7AfWz3mE",
  "key21": "4Cmy1Dk1TDxaGxgEEmA9rAR1sxGrXgK29Tosdys54sZJio1dVn9EL9ZTnYfJHsCfeztg31oA5JzgEYFDXw3etb2A",
  "key22": "5hsBdNgd2Leyn7moP1gDKprq5vH8wwnfmm7nfximDjoZKWQPd6dwaZkcYqKrMi8jUvhpgVNhWBV9JEsf3urQ8pyj",
  "key23": "5ZwLQRsQsBPtKZyS7NR5b57MWJonncDjz6QwyPwdkMGWndyKAudZkRbHvmDuiwq2tSynddgbPqdQLF4NX8EBL8Nm",
  "key24": "5jfMk2yPbr3tCs2GEbMPB4XFyakHUXuv5kAqU9vpfLDgR5ZBEhJ5pkeULRoYgR9pbPcJnxm7LGGyKR8dcEtKxKio",
  "key25": "5iJsBpqdptYVYjZRGk1s9C3hvLh8ws7Z3dVCSgRv8yfeQbjMhT85TSRDefgtqK26sgxA7c61AEhoogMt5eVJv8Z9",
  "key26": "48GJNowpKBynx81vVTPU6x419Mw8uCQDFFHu5gSv8fjxhwh6TWAXMhSToN4NUUuoWVTing9iWKw4KhBb61JeWQcN",
  "key27": "5WkzWRE2j8tMkxHHYmGvSY6fZTVoAr5gxMDmVGLy164bPsLV3cBDMn6UXFQhxYXi9TFrbTvCWJFywA3wgjhFJ6xg",
  "key28": "4GmeMDoZ4jr9WYVUEmidUwZszLqkruU8nEu8RrYB9H8goMhx8kueNg9KnTwuQg4o43BkXuyZMSHAXfn9FrUtMtNQ",
  "key29": "5urXv79hBk5BzUzLKD3wRh6sPtuMhja9mzKkqJBdXGbEbbQq4UA4DqLY3Z4Up7iNKzWSsmtbwHPzDNPz4PshnGk2",
  "key30": "3WDzxHndYiqsnC7gKYjDwp9pwwTUWq5XPcjCjBm2YbkYmwKbxGgSSgDdQEckCP63Dxsi8E7Zupw2gZyMGDAWCWci",
  "key31": "2G6uRHqW8D4sghYYghLmu3sC6N2VuCFgmR8EnrcrbYvoczMPj2ymxXzXfEPWgxD4Uy3Z3DJoB4aWHXmo8hSTyt2A",
  "key32": "S6im4aYXdm52u7ffhwPMn3RxkhWtuikSXE5eHbg8r7fV79ztAvf8ujKmWVxQsLSPJqva4MGGK7kJttMAtuPuZSu",
  "key33": "srBUCioBVuVMKDCTM46TsQDWg1LhpfP15GV1RRHX8yft1QqwK4iC9fxyoQ8vYV5MkUbm1ujQDycp6S1bGgXCSvX",
  "key34": "3mfxQrodjQmFzM9Spks9z76Y6zZu7m4TvzCAhAhKX1EU7J8bs6YwEbvxyYT6DZmZjywpNb84xVKrGvq2gLXGvUdp",
  "key35": "3XAKWMW9MVTnKh1ymiHrmXGKEDeH6dBFquLnEjxWafUjBfxebA33Cf7wfgpvRQDQbNixr7VkhAb4mSD4sEfJmehg",
  "key36": "2kCwR3HFNvSmmff5MGHunmdPWyGskHUohNEjyFEUV1Gtt6NDD49uD5qF7TrxBNRGFCxVxB5yzcd29inLFicSGG7b",
  "key37": "2EEsLX6sZX2Z1Yr7f9fgUpm9LLPTRBYHFz5fUibBCeYxLNqRpD1dug3yZfdRYSDWXEYq3SrWkyLXYwNsd1AVaG6G",
  "key38": "4hynKve4vPWDtBexPyhQwZUYUDkQ1h9nQXkJUzpFtHkCYE52PYHcXo8dMUFwxty1sdh3mRxBAofQQ2K5HwsDrR7N",
  "key39": "3ujex35eMMGbqhCqyBmm6Jbyhm27nTtdf13hBHSrpGoZLvhRFMVm4KEorNfeRK4FaGioojvRreM8nWRreomdY8u1"
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
