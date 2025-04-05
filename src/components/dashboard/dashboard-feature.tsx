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
    "2hXoSxyNdKjzkjLiMEs3S2Fn4yVYQvNk575tmsJPwFS6C4WEwSyS5ufiuSPkzXmXH3drWwUq4QUCMuLxyc47eX9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vFSznPp1rJrNePFRE2WgQbzdB5GVaLNimp4Kmkknco6uqn7Vo95bKMfwP8uxteLrXWH3VVVERrr3guAGumv5M9i",
  "key1": "5VRKMeLt2Dn386aahHhUJAJUtphhLhTLFa9E4gDM4QzybPMUudit76fVSsP8tU9z9MUDc9owKfJyR8fkvNFWsxRH",
  "key2": "5NE1EPgU1re8WtDSjVbUVucFN4oc2b5UJesvG3yoKKPeQynyAzTmv7Jng4Kdbo8RNS3SUmLpWUeyj6VYk5bZNTpH",
  "key3": "4v9rS1W1k4HrJ6sn86NMS76wQhpGAkGrNAfGSzYsmedmRmriSrTTCq3VTL2vzyydUsC6YGSJjbc1WiiGZY8dPT6S",
  "key4": "4CYxENHWKnbe3SWdXwpsAxKdU5FFY4sTMDwGqcgHh2JyBRoVQygSbRdkVMHUPwwqfJZpViqr9s5uK2daxCjUkCV1",
  "key5": "2y8WH2zsMfpjYzyhvhKVutMyk9CNeZQ2RMRvWmsV2fcpY64vTtossTfTZfMMsRLgH3yBAF6QXvJk72HMWz5i2Bnw",
  "key6": "2dhHKeqCWrsKj9aaJYjiR1gaxqWvbPpWk2G6gg7NQNWtuLTS8w834YggMjLRnv9Li2U2ER6jCLoexrzC7X73v6Ed",
  "key7": "4Ncf9Ua6aTUhz58hefFeHVL7msnhDCcnfF8dDmEjYVJQPF3cn9wa74uhhzm9Zm3xrLFSQaJPD1PZxa7SCk2yKTQ8",
  "key8": "5kN6dfuoQaJtApzF9NgRXJhBvp2gwUAfzcAKKDX6C4bcYW17j1xU72WM4Nieg4RWk3q3NvvnSnD2f2fznGwp438J",
  "key9": "2KahH8FvWhqUEDWoGcuzQw5TjKQgsuxcLoqd4FeZ2iuW73HEDY4rJ9hhLB7ffCPfWy3RErr5Bx2iztPDjc7N69mv",
  "key10": "5CeYQVn9bdaTK8hMQUNPabrav9BKczTeNHQp1QYgD32J81Ke1kVX1a2XAjSmxk7HybTbuqKn4244ZWAuVxNw2HPR",
  "key11": "4vxuNuvwcYDGdxfSV52Br8HuoKfLrR3KTxgLkBb4e5TXu9AcXVrLcPBe3D9ETbTXZvbQVP9crxQtyeGAxVqVrZ2Z",
  "key12": "5ehbKCum6FoxXGG6P52hQ8nFp7NB2WYU7BnKs48KhchetQitXTM93xy7SMPtPHgqbMoK6qGv8CHfNy68ZwJwT3aN",
  "key13": "2e5j4aFbrFMqNk6zzSHUbJsQQyg84gz43r5z9p74rt2xo2SwuZx4xNHEVa82XvbqQ95YLJVnmu6v4NCeTzs1adzv",
  "key14": "5sx643ryzCG2nTMrnBWNbP5iDQF18qyapx4dho8kyyujoT6xtagtJMUNV1C4PNHE7ctNiww9P8SHaTUmQGNy2rzV",
  "key15": "PyAck1ZovBgTirZz1SXwBRzojHAuqBkwJR77o6mKRavoAFeZkvcYKaNA3T8H6gDtfUoExDqksnHiZUHmfwv2h4p",
  "key16": "4YNLg2xpFRrZkCtXhys4PWK3vbeouSgR1jrRqq3yENYvL231LwgDM9eD2TydTCNXVPkVs6qrfjjXnaxJSTKpQtdR",
  "key17": "4Vd5QWRHWUyHipqrTF4p9GpuDLvXFAezbVtrsGMDiFMFfwHPkF6ZQ5HfVVrje5jzoHnJXJWshsp5QY6mwh1NZhXg",
  "key18": "289Fkm4kD7niunVViQTiZoLNBX5amovodQqZ5iujB1fAoy7aLBdnSHvAx8frMemLLg5hUkJQu9zPjN59eWQ7xzCK",
  "key19": "3x4scMWNHHL8pevbE56eNHHgFmoQ5akY6YHHPQxmErBB8M9uF4AbjTFd2CNd1gJ6yxYf4TKNif8WmtbnYwWJ2Xxg",
  "key20": "5MCoZKoDF6V6jgawPSu2X8byyxXURv8W8LcHhvyhtKKj7q66yjuuibtFTXtCif7GoBcsuV66747NC3YepymixSoq",
  "key21": "2ymMx33zgkaFrdryd5dV9ojhkx45UBAXPzKW63xnihWGcVWJoymMn2cRk7pmex54XC6Pd2qdnV8K9LqfdpWnC4Av",
  "key22": "62xdec8oVZhDWffEqVAD55d3et6nyzGc96CWWfr2WsGeHCoDaEHtLssjd6EB17NMamc6Mme9vXM1vLqiHd3Bs69c",
  "key23": "4PPZyh4Y6Q75gGWuXJymmda17pLEJE7ncw4YtMCedSyC5yvpHnapQ87seMSczKMcczpBCuRQRKgn2MQWXWT7V5y3",
  "key24": "4M22z6mJpDy48ywrnQ9Tpc8pEdBfGr4ZQxFVFUoDwBMVnRgp26kw8ueASSbTEcR21LpLZnPk4Vigv12rPcjGU9Pm",
  "key25": "3mvHWZGah4ctt8nzefsKBsGXeErpVq4gEZehRXUZ7v9166Eh7LPyJuSFikxNbTycuH1Yto8w442A5oBvzmQjPqYU",
  "key26": "3MaAY6tA6W4GKwegYagp72p8PnJZwCbrwdX4n4saR66uDWNQst4AGhiDHaTCpGvd74iH4SPXXTWH5xAJwHk1KAcs",
  "key27": "22i3C7kVjoKmPHeX4nHeDzBwtCVRNkFiJhL3DGW7Cx4BrLcRVZzLpy9ocLtE3ujkzStPi7ZbgCUpKpz4DHPiH7LX",
  "key28": "3qdVcucKDtdv3vVg9T2eZ5v62VBUimywYZzgGGcLSrMnPWa2wACSBNDnp449vvfcJks9tL7s6Ct4BTbTu5MAf7Ju",
  "key29": "5PG67iJhP54ntF1ywo8ZwfkaZTYpunFLsrrLiAp4jeryUMbw755Js6tzmbSMx47Vkt3t2Lu5tLFoYTKsJTGPQDG2",
  "key30": "2vEo4Dy7pohurCMUyYTou3jABc1jsZdArDbxTDJdkDCwbortkcjRto3RZKUsozUQpHHfRjLCFmF6gzfjSdAeW7Yz",
  "key31": "388FEhu9DjDAThdXhtWpqMVjcAapzNnafN5uUhCdz3SHzUKSAhVUPkyuLBYYeCYGbxRjLCzX9Rx632rj5awiEcVg",
  "key32": "GSi7oFJqtFXN5v7KxvdmoHfHeXLybT4MC8XHXt1m67z2nfLCPHibj1Yg6aNSEVgyv7mBmC8pJhnwzJ1QLih1JNu",
  "key33": "2KWaE1qa5bXa9ZbMDU8bQkFeGP8Bb5SdrQ4iNg63oiVTmns1Mptg3QwZck168oKmLLvfwWLhLDQCfnbSLfFCFAsh",
  "key34": "qS4jFsumjMe8LkmrWUaKWRFGJiKyanARzuov6pfwGAUkak9x5tpzHncac7QGkqj4HpMv423JAtyAxcvDK41CBXU"
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
