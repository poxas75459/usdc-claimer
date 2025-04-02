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
    "2QLRktgYuG4X8kJB5couKPXowjiRULfuLdHgsy9CB5dUK2u6vnajuTHpcXSdouqACE6C3g4LFfNBLrm4REoZVN7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFbUJmd8BytHVS61PrLMUXnGvDctovSg4wqDJRE2BsuLwKraiBXXzExDNY5zLAaVkhGHrnVfkLZZfPZLTrCtBgJ",
  "key1": "3eYCYZemCfAUToxuykEMSmfzdGeBGJhknPrTmmSsw3m2N9AZQC4QfoMcN5GzkhqHmaCSQnTGPw6Dv9suh5DSBhAu",
  "key2": "2R1w8dKSrKjctBHz9ND6gWLiKi8w7bXXKWpC8x9stT29CSt8nki9YkELSCFJtonKs2kVEcWNYSMRcyNwFFr5Adqe",
  "key3": "49R95hgSUCtEfssn4sRxBSjcnukCtfFpY69noXYwNUYYBdY93dZr3TCn4C13j1LJJTd2aMkLPU2QFTnRnCk6QVCK",
  "key4": "EHtDk2YWzgUhezu2RJwQLCPHwphh3Zfwp3KDh67A1A3k8UbxYBqWMgf3Qt8ZteJ9sNnQDcJzSh3WHXP4rgyfajt",
  "key5": "3TcgAe3wYqsct3g7FehtibnWxPJs1SEJX6z3prtNUmTDEmTXhX4E8KLXGsEVoWoFUKzmBJaH9cu4UQRW62xbi98L",
  "key6": "S2YQLQJ1vWW9mNZnVMtV41a3CRxjca87Vm2pT8uVr4ktxua766RQ6paw1PuoQF7qdDVh42He8tsz2x1PkuRj9cB",
  "key7": "2fbo3zroPBHCLx5QjGc8JvVQYRULmVfAEWh3Yv6URUQhDkAFR7Sn35WicNXV8YmToS4metcvm489Se3Mb31Cigo8",
  "key8": "bqpVD9DZjYx1AiPGjo4NJtJi6ZmHFy4dQTtv2Y5WY3VxiT9dC3NyLQbLuWjNveDFWxVvsg37eUxTGB3Vrpi8kri",
  "key9": "2fJuowECBg5eJZ8ypdCakpEVTkJN5fPoCTEqczMCDZZGynpSkY5sRFzYNMdTfAFRqpLHzzCwRuTizqNqbkPAWvYf",
  "key10": "5hcAqi5z5nSNRc5Ze49XmXco2BEXAr6Eg9tw3eX22URR3d851fqRbn4P29n8AP7oaqqQ4nE2v2ocosisyXSgErPc",
  "key11": "4ZkwteENLVrCgEZmUrck2iySwzxBAo3xRNB4AxmGV8k8NKf6qCBQh3mMWWSp3FCrhv2f9WxQQ5Dv72EUdcxosGB3",
  "key12": "5cfHtkpaajqcAVrXdY8TgouUadeMDYRJ6J7YaPNv3EWSUVBrESFpyURFT3iYaZwgY5TkcRjaDGuoLk9uLSyAVjaU",
  "key13": "k9isva1ac3PvUnbd4FmTATHitsudAXBHTYmCVeLB4t8jnzjKuVhbVMCaMvkhr5j1Nqw1w89Twrk4mVzT87SDDnz",
  "key14": "4RFWHCkRRqTr8Tbt1Gu7e7EVHMuSQEhYtwHWHyUoTNRBxvbAesro6PH39FhGVQV8F3aZwEz22yzt6edpYxhDGzHA",
  "key15": "4UP1HxQMx3MJRP73oMwnHUcucC38LyRXexR786Fjwcqdy83XCrB3nFsPrVQNDtSfrb6GJfcsuEsfwcb1cKmLLpB7",
  "key16": "jyLt8ouYDjMUHs9kPRihWJMTYGLr83hG8oHFNfBHZcg5j3pWaJ7dtusJUKLR8wnn7HVpmQFE54XqDeuS1aha9gn",
  "key17": "2NnTzfxQfZ9wcR4gKNLYvjsqxW5hRnXbAmYFKX95bGDzGrH2pdrDJp8pxFYmNLPv4Vwv8NE8Tv1prWkAZMATqojU",
  "key18": "2cxcrzBZqjEWEtKVF9YRaRXfexNqmGHjwiVCKyUipT76v3QewsynQTejdDqW18juk1Nr6vG7M2Fth2vWj1mxtG4T",
  "key19": "54xa5hwzU6V7T3hP4ADQLn4LyUgX5dxJoabxZnAagEMMZrhvyFkbK2B5gzWQrzeoN4gx9wPkzfTzoEavpLw1PeGs",
  "key20": "fna4owWuna59Y6dmRmxHvviJxiHibr9RsaeUZnhfmtxJQ9iW6z2zf7bEh3mMKBX4JTNdLEBJNxdRbmieq22BxYV",
  "key21": "3CdRMX934pZLoGbT4D91bPKiyVxe6Gn69Pg92bKXZUsW3andH6E7AcdGe8ReGBdPKm22RGLGuwyd7o31CZSsz3pJ",
  "key22": "55n3YW7iSG9E2DDJeV92uwqVLpZp1o96bAM4kTJkqXGviW47gr4hVNBx5a6dYoxAP6iwKaLnihSr6SZWKyfP3yAw",
  "key23": "22iAHCwaThd1oKyEoQ2KYUHzaDMRauEbvFWZF7mbupinFVuAyBgDz2GncJjVaSyfHHZoUu3qLcoLmKLSSq7Nu8YK",
  "key24": "4pwsmPMHWj1F4QSErvVncN9WXu2kB25Vbjfy75e4jYEX3hoXjDcigxz2nQqQrYKsqiKB6QJSiVNSowVGDGojfAS2",
  "key25": "23vueMU1pNwjfn9rYar3UKBb9sjAJBiWTzrSveDaGFk5gG2cckeY7nEdzxkGwrecuw8TDYxX48ok8rvrPeRYcwUR",
  "key26": "617bpULqEJ5JHkVXDFwjJ9AjaSyGuajD3wQniZRYL2hFP797vNDGgT84TrZYkN1ovFoxo5nWosTQthNrbV42vRYh",
  "key27": "5HgDaDbSAmSgPAnYcDzTudp1Vr5QTdTWTjVtG7ir5jvwxfYS8kwV8sii3ArbSAVFNbTivoS2yak99ruxYY9Lcbdd",
  "key28": "3FtxzBxJfbimjc9EbAA12ubZv5abLSYNrGKUeLk8ru7EtiSHPfgyfH4Koubu5iE9Sj6JZGVNhDLTAaSc5EdajrxD",
  "key29": "3RmSTChv4CQDTVyrDuxKMzWefB7u3B4Xr6ZqaaAPVWDUEh6RunLPKe558wMZxKNV7RJpSa95Kumuazu4536QXG7v"
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
