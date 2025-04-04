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
    "3BN8Ky24arP4cejSPnFk81tnJQ7qf3VEabNdzYxnsGQ9aL9WFQz3S7MiXLhBCYxxgEsSx6CEpAtydv1fVNxFycpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37V5q9vE5ZQ7DTohR2nQ2FAtwrtbmMT2VqdkLR99P7WMpm98gNYT42bSN4bPbWquTGxc6BBcwF9qgSsKd5pg9CVM",
  "key1": "54WSYgtWUicxQ4PvmJ9UsGchdKfsopH4pLBJvKntV3WQk7urErDNEYHAcHn5Qv9vr4scuKuU3gZDhvDNpChPdEW9",
  "key2": "2NzofabxY3Ef9HqRLJS9o5zj1XT7c9PEbAqD6sFB74R6JAcso7GxnnbfBdwKK2Sbh1A4xS1WAvCxMVwcmnkCHN5J",
  "key3": "4ecg1hSHXvXLodwMZ5yPAiz3aN5QWNZHTAxizqL7jpUEzhDhQgNs2AVuaFwS3Qfjwpmeg3ibZ1ovkvu2ujrjtYP5",
  "key4": "5SbmAyHXuQhaJMNgnMuKiTSZtmfiPnKQC1xzoT61tKdMY91a4hv3DZCSWudRNN3DM8WghrLH46A4DwbozxNSwLho",
  "key5": "2hdmNyLXXnBYzMkenk1dBFn4CnN958F7wvQXZcAsMwQh8nLzupXCWbuxSCgJWasfgftMyoosVFZsnEy6RnhFXEAu",
  "key6": "4YsGQhKF8H7RdFUr3oRCLLH5nav6u8QTwhC5DoWxQz3Nkd12n271VR6iwTaPR8iRizyHg8PWo39mpUV9o9NbBfCP",
  "key7": "4fCjcGCrJLGYj2FzGvxmSL76Ue8L1oQLL4i8hd1pu7S1Dp97z6vB3dahqr87WahJrBHv6jHwJrg2baFTniHKBbs5",
  "key8": "5aZU1BF2PB16M9Fzf2XtEm41HhaUZYAb1aKWgqkFDMTPoDS6qj28T6mA31EzsJDbxbdbUYM67BqH8Hj77kM5PPQb",
  "key9": "2ybSpsiCkgE5Gz7RrwFsFg1hfp6DFQAd1T19rGmYPJoGxoRm1SGW5TiHEMRCvDNNMSSphFHwBcZx4sAbrnVVr5S",
  "key10": "4L5jYnq59DJh3cY9RnxmoKteZdnVgPfNyBqNvKyr4pawLtaDbZPAdFs8r9UykYiwUgJGn8whVwm21SyCXRtzV7hw",
  "key11": "3Psw7H54Za4ha2P9zumsFVWSEuBUCmKYGZKx19uSMaGWxkB72QRQ7R5Pc5YJtTmRCTAGPFsWh7KFeeRQz5Rz3mr1",
  "key12": "5Xsy7DJfeJp3kgpaybpg3mSxg7EgS6YpjcCsW68nNmWHKnFgz9GEQP9DdXWu28jzh93yEMiehZbR9VWnEc7yF4du",
  "key13": "4oucc3kbpCNdLBHRUN19U5TuUjTHUFXjq5QSU5enNy7Hmc8ZsqBF4vNbyGute5DduNB7ACuXLkxDRCG8sJCFdpL8",
  "key14": "44GKpVVhGjgP8gqSsAsYjNzqYCDbUu4zcBdYiqoDytstr8zcwk4tcAKK3WG8e5uqdPbxWwyMGkyikPMzxj7td57D",
  "key15": "3tJ3KHaxZVo8ki6ks7FBimHQ86GvKbVSbarrWSaDPYJmrwK9wN5Ro1HVmyxtMt2nxhTUzytp9S3FaYWePgthw87A",
  "key16": "3UxyAwVcF4BEpk6NGbzypwLiNyxLDyjM1k2CMcugm69yGTHCGx1X7ykXNDuyfBJz6PTpFHmfhUzBJxnYcLqmTkRb",
  "key17": "4bbcJxoaKxEYEs87L7r4BALtpTH2fC9eJaPABcEgwdrK1rmdXiD7bZo8hyXZ43T792hJxd6kUFKMkdHYp1MjwzFz",
  "key18": "4aS3EEDpL6Jdqv3EUsWfNeVeba2BiEutfF3bpccy2KvWdRamqdev9nT4GwMNUzjeyr2cfvzNNqsLCWt5TP2kKXBy",
  "key19": "dnHvap3839rgPamG4fUdAwkccBduTAkjeTd6zSdvFtxTNcUEvFCHeimLQTeLLj6q4nwVHBk16BPePRcAZcdLKv6",
  "key20": "fE9vEm5vH8YzqmJkmhrFiR6uMmfLtkryDLJQJzhPQ6PnfMSufVat4vTxGH3ueKNfWgLEt3WKwLr3dHZB6C91h4M",
  "key21": "4BjULvMmBa4eisFhEwkqRn1S64Yy7y177gmfojbfsYtS4muFDFrvKBQrXkGrtiwpizTagBozyjQcejmd6TCqwo25",
  "key22": "4gdmytDpcJnFN5g64GDBxU59agoNWN3hWTcDByBxa3JK8o2yxX5RNGTqAeEusnXC5Abqq735ALm9aR8VmEh9wdFS",
  "key23": "2mjoqe3jVBNAR1F5zqyeWj9ovD1tAPEtYqud9dfnQyA6SUiWjLRgVS28Qx6iGJev6a3UPTubeYvj9ngurvN9Bweh",
  "key24": "5t8icVvgkBjnK2Hvad6CRo81ZN73dBfrefwWAZYFzsu6jKxu7Qv2Eh7ZqqX2ywuokey7R6H7NezEKA62sfUuSwLv",
  "key25": "3YhZzuvTFF7Lyys62obf1BNf8L5wwTsYTJ68L4h2KQicfyLv4wRsZKAntGUyTXwmX39x9YiAdzmJuyXoS9g7LoXr",
  "key26": "2jWYXA5LvoZWYYHezRKXMyjsgsGDGLw3AbXnnW8gYJNZGqiiayWWkmTYDGdn7xzUopFaW3QEAkBjqFMyYrr2Bhd6",
  "key27": "4kPtKNzpt6gNLvfkyYy2B3nkbRKQ5CBovcNQc2YydAv9Q1jzT92MGBFvEo6b6yDMKFijoNxrV4zzAAnC3dvjkpkr",
  "key28": "5gNGfLHUSWu5fFPo6CE1gpc2pH3FE22GWYwkRVBBvgWyd9zPS6LzJ6Yh9FgU8v2s2KFePXdSLyziP4ayvp19BszK",
  "key29": "2QnmgLWnYiNF5xMgM3JmgQkcZSaGgWZuuUqM2d6bkm9BiGyh8tBCw9DNphHDfENPTkwvL7dK3pAEDc8hnYGnTf9s",
  "key30": "2GS8ea4gB7cdhNaosh8ZzMwoKXQhNdi88cYJoFQ7cPvVRk7btqRG7QaeQ45y847qNVkWcJ1Yc2jmiPyKNkojHpsC",
  "key31": "3SsoZcYSVKU9RmoGH2vGtVVrH27oyGKrxU2oeViS2cMDBDuTKJpRKS2Y2sdMX3bWGAvtkogjfSkagsznp2NpC4tc",
  "key32": "3m7NAHNBEkbV49BWRZeSeFdV599nq2TaSQUwrsFAbMB5Yq2AgXL9r1yCi6baGPJGhvPpKkbuFYsPomEZaDchi37m",
  "key33": "2gnQhtCPReFkk8EFka7C6Jjha9DpZQQfEz4DWNiRJqxfknYV4rRLbmdGXk2mQAKb6RNKLUfe2VMGpYDMjjxjYiUL",
  "key34": "TTV5PpKQF6UembcNetSKETgKFDqcet9PaXCvwmuGesUFKAesT2XZQQV6KcF9hy6ouBTBi56kYVF5YedXtZQosCa",
  "key35": "2ydsksUm4yYQCxdiVoEquetZfDtbYBm9kjaUvKUzSxvsXe9MEfDpcCFgcRAJF11QDMgfxhej1TGePxM15RCSDgLe",
  "key36": "4NZMwD3BmB3CVveK354m9oTUSGmo5gxBu2VVSxZc2U6UYnG8AZdR9ygJYAVJ1buv8JHcuoTka992iif8hVd1MXVw",
  "key37": "5jA2APxNC6RFdoc3GFS67YsB6yHMLLnhM3Vhuvdf7YB4E23jonVDG5knRo6ivMxpNGwAHtMKDzwL9hka2Cm8negM",
  "key38": "3WVbAfFgciVZ3eGZeNztNPuU2aP6M5qqxoHdojSK3AW23T2ciZqRDMoLbrjfKWEnSec2EtxQsL8BBRsFQKy41ZrA",
  "key39": "46JHeSVmwjh2yNEF6neXQH6NMh3qN7inohJG3nxYZYDh9vSxRxhd5cMBzMB7x5mhcu6JBWNeNNdZGZGdDFMp97mW",
  "key40": "5jEM9eXFwxtsb2G7YT6f77KvwGreYoTvGsJYuYHzKNMrw9ySPqqDACVBEFN11BL6pwWLLY69FAE9rPTH4fmAZkBs",
  "key41": "4UWECv761cyNA3KtSHNVvh8TrhfUB2iEQgxbwDK5xLKVvT2jsocQR9i9C6byXZNHttHYrbkLvjsRnbDKhNVXxrJj",
  "key42": "4NHnmUz1Pz6Z9yjcj3i1ZQigURkJD1b3HztMJU3FNMqojg2SFc3VAvzrDbK4AS4D6T3bsqVjEB19AHWqFrzxaKGQ",
  "key43": "4fui5jKzAXdCX6wWwjuW1J9QgKtve5afwSLfDxchJuSzwS862aL7SEZevrxbz4ruT3rZpbhsks7bMU6fWRZGfey6",
  "key44": "5Y76SmX66p69qC5aZj3rLRKKdcJzuzuaXBvsxrUNrUrw6LV3QVQ2WoUsxkxs4tzUNXUKUiV6VqWWJTEYL68HHg3K",
  "key45": "5EGWhywG1YeDQdtYKi52Q9bKF9GFmkRcQzgz229KE5Km1BkkSV7CD9Pu4J7vmgP1hYTUZUKW6bMDCGfoMB7GuW7h",
  "key46": "56eWSEtPEdApcvyEtTbXC4ByMJ1uDNnjyqz8qmZNGjhV8fFxxciX5H9oF32M2SFLSnauWJyRGc8t4R236WtadH6f",
  "key47": "3SkrdqmxVZM9niEKojkBWkbdKZDnYyFh8MphGv3mVH9PWQJphzptMPCvcqN4DyEQDVUifxph93B4dQkJSzEPYN5N"
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
