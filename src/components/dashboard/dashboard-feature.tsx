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
    "46pfjF6GRCqfhSQZm9PrH4t676FF6ZH3xwqMMVhXZRJr7WbFNh6JB9AnRzX5vfPTLsKq6DPq5PBvBmzQwzGYRhtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pT8GLsEvYeUBffxBu6oMWQWqENpX7wByads6AfDhN9tf6BQeDDMMaZa9iqDHHbi8a4etHXBWxZka74Z6sev1Coq",
  "key1": "2epTtrwdZMRrW9szbeeCW7vc5ddD367xHGCBWTAVd8L3aXfFghjb4d5VKK9Eck6EZNowEPqUBkw1PJi49WHZ6Nw3",
  "key2": "XLs5ffhUQm8HAReiQFipGhfdg7jXgmEywPnhhMBTKvpZTRwpDEE2bxz5PNDkXQr96W13sxRPKeEArKBTJkxRQSt",
  "key3": "5hM38Au6XHT1E47rKqaDBxAVxXbbCFgJ4uEbAWCgXeJNCM8qM7wuBwFy9R31sJu65v8wmjwfjU9ic1ZWvmXb76GK",
  "key4": "2y9d4aHBFSLj7iyNhN12zEw6eub4XvgMsG1BCEnVmQitL8AxxqRq6NHbiHmTiWPL2Gimtz9smg6q6W28R9PGf3oQ",
  "key5": "2um7JWrHFy1UWiyiqUSCRRribAcZH7ySa3jq5k2CGFdFrKm3c6Tb1f293ztkeSr6Md696bKSAB8hbyPhxz5FCZSN",
  "key6": "23X4RjGU6Gd8CZffGkYqzxwQo5kCLxha7fMXqZdHJYdKc3Togs3jzVr2C1YND2MKotZ7cX65He21BWLE5AGB1J2s",
  "key7": "4nmZxoYKQmsJYnUgpmufNV9bXnzgTB4CPYNifvTzAKuhhsht5Lg6StGUaCBo51p6zdb19DNn3J9sAhwk5pJEP9oR",
  "key8": "2u8M8Ru1siH2ivmHq6qiG2XutTtmwKeiJm7BN7kxd5yzpFwM8H38H4EjdphojBX3eEs3aXMVkqBhCrFxojoxjitT",
  "key9": "2A54kktNzRWMZDY4mCEaohiSE7NuikPWjy8h3CEFa7eBHiNbJf41miHtsGvAFHycTrDdFK1Eac56pEALtZ9pCiVW",
  "key10": "6Dgt8BoaeUGjkHDxcVYdLbR5gpy8fxLygZTQ91AmwaqT1RXWprFnfySEBCSXJHfrp5vbKwz6beL3aLMD1ezZ5uV",
  "key11": "5bwRPysxerNRLyyR76HEt9H6oKuad9j2MRypZHM4PNriXQJEUM11ify1jDWtEfueXntQCYCwwbDuXmvTTHdxBg7D",
  "key12": "3fhXDb53jEFYbU3g3zHHuxYiTeX3nemMwQa5HvURbKEh9AYLY3w2PZpRpdqvYWub19ZxZuPT6qUAXu2xPsgoj9M3",
  "key13": "39sNHMeb9czbRXxbJh3pWftW9i5ushXCGHXdsQeqrgyNd4hY6L5vvApm82r3dhjKKKCpyuLjxXge2AgXiftRaMEY",
  "key14": "4BXMEdUj9D2gN5ZbNJJpcY7DJRKp6d6Cn9JwCpaxSsWt1UUu8emaLEJCmRht1rG8MV4dWrVAt4VxrRBTaqAWnH6d",
  "key15": "5HgJuCcpyh6aH3Q3RYK48jbWaeA2BWqJNtCCUbCbJVDUmYLYeBtditq7Cc8Een7wADLziCSK2K7gCF362GVYZC9J",
  "key16": "QCKWEtQg1yrNKTbd78mvzN22sTWhzh5SSPh4Xn1WPDcbJAgA7VAhgwyxFsunjUuWbxBhRRC3f6DxJpyTiZYC8Qg",
  "key17": "4qraS7uwH867YBknYtyh8LK5Pxkw4QiiY57jYTydsxhBn7jD87G99EcreXi2hF85J6keRAmYxv9vjGJqeerFA7Nf",
  "key18": "4NZKPiXYhva3aGEjMiHpT6VCVGjvd6swtSfeZNQmgcVPJe9bskxQTWVFBw6YfQSA254jBbDKeSLprEdqSu5DVmqS",
  "key19": "4W8CD8HbbQzZNwFZCDzRQBPzSAEoRCWMWp4sdCatiAtbgCRLjZxk8uyFYuT31SkN8sCuFrKKjZh8b9S5WmRRZd1",
  "key20": "5viUoMNsozhhZbjyJ3MKaF2ZM8JoXQrswXhU3ANutyH1W9MCwdCNgmAtmHokg55iP37ttQNN5D2BNPQdqE8mZ7h",
  "key21": "FoRzTWg7uFDUFpkDrqN6xFeTCcSCu2qdoWZEuUX34hFZNHhcCori2cZkQwJ9x5coyDq8hGxDaBBxEZFPSXkkW6o",
  "key22": "2A9VUjo3p5nJY9fh9PcefT5SNQXr7zao1qQW6fhXfNyPakvbGcKmpc2x1DB3WsQL8pSAjsxbDCUWLRFqNCDj6tSp",
  "key23": "3c3mH95YohThoRTxUVMgiy4Z7V8272LRs236eV3bGepNrmEXWKarap7y1d4bxBcz7uZDMh7tbK3qGLAkxWQtz2Db",
  "key24": "3T89dA1A3JTCpxVVjttbGtUkjkW4sMVkiwpW5JS1AqGUEFeHvNFBrJQxJNBZVi7PzNehtgAJqkS5uML7xUzQtYyG",
  "key25": "2vtvw8zUVwQZrAGtjL5VEBgThxxuuJ6KKEzQ8cEiPMezher89TrRtdDkjfHpXZpd1CNe2fMdzUPP94h62AMfYJ9U",
  "key26": "26tNfmYqJokfr3ZEbbZMEZsVTGTEh2PBGbQf1stBzKg8xr5g1E4PNipKQw7W1w7i9RAf1ERBRe2NnCPAcvAvXMwk",
  "key27": "3izk6SsC96o2NBjT2uZ62pmvmJFozhehUKbPR4RQcoB7pQXn2cnK1cpy5wMj5drE6hZRVx7ESP9yEZqfn1i5ZznB",
  "key28": "492RGXGJpsBB9vQsz8gPcN8SJmwX1VqvopjC67jjPgeru75r6oG2FCuE7YXZ5n7mfswtmxa2k2GLRbB4fzwTpzb6",
  "key29": "bRbbSrSKskUNuiLrih48PtpoT8s1gwECsyXgxsyq8a9NiymqQg7Va9XwesGGVx2NuNb3vbM5D68SwU6irvk6ZEU",
  "key30": "5vdpsbhQz3G1jp6Qmc1xiM4DR68ZRgTZcEw5q4vDApZaNhE5qqeQCqVwitNCf9L52LwyMzk3T8qfjcPMKe6gPdEN",
  "key31": "26p6UfHx9GCCWw6p4c9g6RhN54snV2Je3jutXPnW8DwZxxMHcaHSE66YjLv6etLMKunoryxysHfLJ5mDZjpYSQV2",
  "key32": "5BQBsLrCPbcUEA746Y9DvCyPfVpnneFWWes4kTXeXXRdmsSueqTgGLovp5yPMZZnhzYk3Ei7rKebYbFnnSLw31UD",
  "key33": "4xi3uTHaN6Bb6rxBn6SZaRCtCCRybXG4pniozUNJkzv4gq1e7ZKwfN95JNdijrGSegYzEz1EJS3FYKKnympWHhgN",
  "key34": "5G6Sh3dbPrjPpt1rPtmbHTfuwT3zo74tgqQgNtcfAwMbUA7cbjTMvqZnUgg6VPVvPGAbj8NZb5tqU5GkCFMcVpgt",
  "key35": "28ErYkATDM7XBVssfDkKP9ERHrTyguvvHMXskYTchnECdGQ3tSCrsZzX3K7dyraz2arQzR1R2CUVxdya1Xhd977N",
  "key36": "4K5gaPvj8G92VeVLkP9RTKtcDDCqevx6EnNfsJgDL9JkDg1NgdDNQkbMQNJ8jhXYAVUFSbNa3yxrtHDgvgefyY8D",
  "key37": "2T4us8bb2uDbnhDM71L68S4mdazvAFC5tbdYKtU7Woky4HrRBBAotuZXnUu67tNPgMDpz9WM8sAoSgsfPWu6kdeW",
  "key38": "2HmmYF2QzuMatWgcCykK1my6KrFp43YxGe5HNibDzFz9ibY4bA3SUEgeyFz281JADCE9XfiLVhtvgrtpNGcyajVz",
  "key39": "2cssNLES5CQSyb8h2TFkt387HXCCH1nAhVpm8NvJn2nPuz5jemdCQo3qAe7gneMvwm2Q2NVjSaC6qpq3mU3wDQRt",
  "key40": "3iQHHT1BFGSbueDYzLJXVRi3tozCpv1gcMB7RdN3xFs4xiMR4iYTK7LV57K8q8cgRvjgXP5ffxBXEovQLzZWrACq",
  "key41": "3qPvygzhR1bK7skMUwgRTxXyMTM2Up63UaHHTnBFzmAWfHiAhMhLLQHEvwTMhwpC4ocW6BDfvG3MgAeUXLwgNrd3",
  "key42": "FcoF9gk2cSXZjN8QpgSL135RWii8RvD1TvtfgDPqj3SCY3Ra68RzS7LzJA5rEVDxu5rsXy4QVg5EquabwW9e35m",
  "key43": "3qY6fZxE6eyf3Cz8qfzHHPrbDY74wqcMjYa3SiYYoxE97r9U1boqZDVmdZwdjEJ1Rpv7cnmSquJFioCYWdj6Yzwd",
  "key44": "1upmtHrYSvPcAjwqUztzg9uJRm6Vih9nssKrryzApZAeqgmwRNeFA5UGFz15GXkdaJ64d5arC5pNmfpAVYtUb8c",
  "key45": "2F4yez8exSD6BQb2Gdbite8fd2qzb2FQHPTZtTp2hhrcVK8wihRkE15YB5H7Afvn8YmPFxh1VRFA8q7pfLNaC2GM"
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
