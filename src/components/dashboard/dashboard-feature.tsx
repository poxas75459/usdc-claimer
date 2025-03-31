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
    "2kapPvx1ijGfLSoVdMS6yhf1yAAGXQLU6qcFuFCFTbUv3pG9qAnC23b9PukhVC3bjuFKhR7neieD82asJHwo8PB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52uk56qFF9SxsZ76RPJQdsSCTyFQ2cTdvJ7Bni1M7R77taDv2TXP212D2WJ4xkjXNKGAPTSEdEbAHiLDiw1aGtL",
  "key1": "5yYXmpeq2rTfBfHRA4Ho6HsJZYyPKTVCcN8rbRJKz9eZ24nNUmAup64keDAT1taFe6W6Bq7wBvD4xkq1CGKYzSy",
  "key2": "4Cpt2jxhyuSeUhijbVLBJLyyz6jfvzSDppRqoUzHhsHe7LhbodKdXep6eAcRNEiwAiX9q3uk66w9YJPv7DZqJE1z",
  "key3": "2qSK1LqehGpvhLtNb1pfkSayZAVQCcvXywcpfE2LDn7rN1f9tbaTpu6a7zhEn2dqyZp3V3ixEKD3e8FtDxFTPjD2",
  "key4": "HkcdpQkAb1EegtZusceoXxtu7K3MPcZjsZWxdBBQvvRQfwgNTngipN91ygySrVeosadLsMaGJPhJXaVH31nvFvK",
  "key5": "3ANYVFzZTw6cavurDmX1bkdT9HYUoi1224wV6GySLL1B3mskvtR1xcSjghxTibwjNaqfB1ssWh4B5aMutEoesAwJ",
  "key6": "3u9d6qpm5h6AxKkPYtvMLUpXheAZ2Z3RDT3jaruJgzrUTgekvmNfKvi4KgPXxKt3awpk1rut7xacoCuG8ejoKDTX",
  "key7": "5X9w9QhFVFG98Y5xXAc8DWAqupaC1xJwikzkAGFTSqQ7xeUrhSupSC2ZfvaRznTtp2ZyAUtGh3WM2JDhWvuynCc4",
  "key8": "2fCfaYWbcNbrZHTbMaoLG2X7Bj7gRgm1XsZ7cmyJqF1b5x2sBPMxi97E2gUMyLhxN3Gs93TqUyw7rfBVQEiL9f8W",
  "key9": "zqcY8pc1CwmKGcs68NNVhMpixa73cUbZVvhCrmu7DLadKxbzNACwseeMMEEwB9N31DqhYvLcJNzrrZdwCfWLsUf",
  "key10": "2YBD6o4DHZyHBdEQKgzM7uzFYRzkfh4xkSvnYjxzVt3TYX8Ld8MZyQgFKJuxyPkUMXzs6kgJsrzHRPPK53Fbidkh",
  "key11": "3nq8iioh63WAzGydEkVN6wdMKDTWpLNhtz2TTPLiUb9qLdMRJDE25zrEHffAyCCjuCqAhJ3uU6LTDmB3ZaG62yJA",
  "key12": "51bfEzQQ7xngCVRQzSrcR5e2MZCtxgV2bfKuostG9RfTmDVNXvwjFUxq44ZiNv1TP2ZZgLCcMAnCPoTTDg4chRJr",
  "key13": "5SqsGbYgnoKhycHgHKCd5VB3Pkx4z2FSYscVHQ8JVwsrkyU4nz8iMXs89QJDrPHii5J7xcfELv1AMoTjJUwvuFfK",
  "key14": "3K8LrSC7VSnEBcaVgPhNsMETEM2iXxpZohQdpvmUKGSHRQZeGd9E15uE9oJc8rxv1YfcjtKyLQfZdc2pf2QmtAy2",
  "key15": "5aAGHWLCjf3wGPqAdGAdk9wCPUumakJtc4WASvdeSeC3bNQcGV9DvJF4vVXkFYJa7MhUrBHZgZ4uwDbMbNUYvwdn",
  "key16": "3jLvKUf7kDGNjQ972GNt2KWLDDbpxfUuYeXPc55jj6C4AGRZ44cfUsbVDTRwU8DJpmBSPV9dfdNZ8UgcVsbkkkZm",
  "key17": "4WKEkLhb58pa6jifzDR529gAwHKggzUtXncQsiHpq8gxwZGFZE25W5bHRDQ995r6L4LpdetS9gCtNyYyMD71fmps",
  "key18": "5bcTThJpWk9uaT2fU9DwGYo2jXZ79rbeuGYPbtAMvhDfrTgasf9EEmaZxWNiTMreb4D82v16BvvmdMNsuTk2Uoki",
  "key19": "3cf7e3KJx8mGLTX39Hwa38GsFMHgdp3ktWw8fQ1Mr7eDioJKMFnBane81VseBLfn7wWZc5Tk4wBjm7heoX2S73DV",
  "key20": "5ciHFDZQeUyfAwZtEiMscXRyh5gaf12uggFLtaN7LwUxR4c7s5xKYkS61CbcemZeB7EYDpZaTFN5kpoWWMV6bevN",
  "key21": "3FWdzGNPoe5DmUDpxUDAtsc2Xsym7HHR7org1xSqSKWvXBu8jtbwgiLBtDiWY1VanvEBs7b4hTLavx9opfzzVwtD",
  "key22": "SXiJqmnzqEkiddZwrBN1xNqrtCQPdBja1NnnrXfDzHJVTkP6DsL3NeGiFShaeUSWsLDTVz3j8cjRpJhZUYHthcG",
  "key23": "4Y33Dp8ypoUDJWyzj9Yh74KW4VBPvdgmjgKtWxiEFxizyrmiaR7od5AMbSBwhgMonCdnvr9LFoMZ1wgJTSUsjuSv",
  "key24": "2uSiGTEdgwcXcqc8Dhe4AGVp7yrsxTJXT14RGfeQM9W78drifJCVfivXHA3H6AgSr1sGb45SJi6gqRNibmGRznFe",
  "key25": "5x7y9sc4YVfjqqvNRSBZgMMopih8dGuDUHnc8AzRek9yFguxAcFczDr8MMYh68M58mB8fjk1wZdRtq3o6RjzpPUw",
  "key26": "3DX8aaU5nRrE3gBSd72q4wbEUG1QqKg8r4FKJCfyPXLWXZajnmd2beWEmyuDYYSw4g3kBSWvaCAsZdgKGBKsNXeP",
  "key27": "2aVL3knvzX2xJxq2vwowBaiKW2Cnk8pmmfn1ZnjMuQUKyMGUhCs6VpmaTshv7ixAS2ERfxfjidp6jk5GA9XxsNER",
  "key28": "56jzBdQhx4wVTniTxJabQRxSBrWMgtu6cgVYwXjRCH4w92LH8jo1R3Hpq5FZYwJPMGL9AU1BFtzUuQ8WL9U6dkYW",
  "key29": "q5R7qCg9TgXaxiKP4TeCXQysECZr5ebpW2yW9DTB6wahexVQHJd791UmsuFHbRmnz5W2KAqkezGrcztc5nwzd75",
  "key30": "2brhoAoajRtz7VLFDMquZDQvHoqQnatvSfmAeAKzhxWnaHzXM53oEZnZnQxrVLh2Xt28yj4d5FA7KceeBVb2f369",
  "key31": "4cKmyF7gmfiu79bKcB6BMwzsm9EXTZHodw8adssxEbvnDm7RjYwMNuKAdZET6999SBNtw3QruLD82aq8tx6xn8EW",
  "key32": "29EHeYABhVeQbrhjM5A2HsvxH3b4DXKBpSaxiNMQ84vdaJebgy1jmUQrXuHePGHNWmpkbu9ZGzFwNGd1ko2Rdd22",
  "key33": "5iV382QdAC8MBCsQcwCCgPxh2A9LZWAwu4KQnkRufyLFrSrmBMmidi9j2SFkCnZyVfhVdmXrU3KHFQphiUcRBZXN",
  "key34": "Cuomw6gonT4DZJk8hoAFSgVXRkQpS8qUXKxRt6Jszhxgw33XaCv6XGioXJSUMsBxF6JXdUJ2FvUWzdNnRLaDDhH",
  "key35": "3SrcL6sFySHNGA1TjurMiHkA68HCsaR9BgwnH1tCinhNKKjGGCJfGBGr3S8cYZHx4AzjbZDdKZRpu2AA3uFMNWjW"
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
