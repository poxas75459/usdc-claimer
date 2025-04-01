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
    "4RwtfV2Akq48Fi99MFSrUkZFbKtXCAAKpFdyjJxAdbHLweWkKLGCv3VFEr5mFbQH1aDnvBZp2wAYnKJhgQMUT8SK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUzVDxq4h25Xc9kRwGr4HUfDiTX4cjwho9mcQWdwpapJRwA7T9bCV1kJYqpjiQiAouATfyKUvicznvdLfz3e8V9",
  "key1": "5EVsBEpDJ579UaYbiWMMqyHKtKSRAL7L8i1xbey3tvGBG1FD4oidcL9CmmAYLcXx4YD8UvcfkqVyGGNima5SUFWP",
  "key2": "59rDELxySdGgy7HYcmrgXCo8XHdUVPtqCYNpjDQd8mkThvSGRSBdptyNWRwcyte48rmEmxaq1YJdoj9G27VLNmuA",
  "key3": "2qFUccqw78GMUM4M3SnAz5RtzaHFUbdAQc5LzvS5R44DZdPyreNRozU86BxwoiDZiJbXTWPNMMUXidZf5jAVnjg2",
  "key4": "2jkBQUaC8L26bT5dimzXFPWDcUbZq9cW4p9ybmcb2RsQNiYwazy9tJApjDyDeVRy4MQeZvo7rpy2RuFQo2gzsFKp",
  "key5": "4UTCrZ6XLootfUuaHPF1sBR2ATT65AuHcuVz3ZnLKySfSRRnMNwy1GbUtNaxcAj4Vd1K53EhSDufEqmu2y7kMfhy",
  "key6": "2eHz3JMH1iQicmnhGQd8CHuRhsoVhgRyhq17BiyxDWrqjvd59MMLgfSCcB8Jh8DwFiZxfuyxFvHzVkqDc35mDV22",
  "key7": "5LQ3uBNcCpSZzZaD4toTuJWrLj8yCsoyPDFpigC7rjyPjB4CjLM2D4pafDDovqZhcuujHyDnE5whxyv74qpuhdLd",
  "key8": "2zDeTU97xh4s9b7onKTzGtTt81e3ddFwsPvQcQePSCr8gvEMWekQCzqmFcqoqpMcmGaz9TqLUnSAru9xBATehffa",
  "key9": "2bsk82oasgastYzQRBu84veqgjNnTNHeBc2xMKTguv5WFsgXEkQU5o93SKFx2QYm6hsAZmmC8qSA1PrzWeAocUEE",
  "key10": "3a9tTY7bBsGtubr11gCngrVoY6Pn2MfC2hT7LMNCpzx4PgEAZUJ1m8dBAhA9RSkYYuMQ6nyc1fHuFwDNHhRjpHjD",
  "key11": "2ucsUoZgGTenLsbwJUCA2f1AVTYGbFZw8DcSucV8T9cKGjZGR3vpH6UokmUM6Ux3T1ASbjJ5xywnETHChdYqA8v9",
  "key12": "2E23ZqFd1kPfbh9CXt6ajC8LYZqGYebmH3qZa3SgrytkXqcCi2ZMZCAc5K29eb3jXpk545KWhLn9YmbH98ZK8Asi",
  "key13": "yRXQf1YCg2b1zManLRMn2XxSc2BpVDEWb3Zvb27hTorjWw9PLvkCJ5Tk72Hcjm3ZJRdwzifWojwbK8N9QhJY5Ex",
  "key14": "k5afoJzc5Y3bjkP9Ai39VXYyP5MjAhuz8iqub3bdMFkDZVWVtUhyLwaCFXehEwWEKCuC4jYMsGLy8Pos2y5QN2F",
  "key15": "2DEPeyRA3wV6i3m61niF2gqpiLQ9PfYnkFHYnWExtKrvCbiJYfo48Q7JdBvUrp8RyhjBD1suweQqwVqjGH2KUE4Z",
  "key16": "2XmXsfiUTj5qz3MjNQmVHf7iwJ35nT3C87yFL1TYyCuWhGLKXmPKbcERGitg5eJTk4ZTUppYM1VzTf6xXr1xvrR3",
  "key17": "2rqVHDMThy4SnHN8e7KmvGpyABfp9YfwWwVA8o74ZzyxiaWURC86w97g5JkJeWTmiQJLC9tgqtpf1MVhLGNafE5Y",
  "key18": "kgwqVejRhrKNWVc7KjYhxZmuog7zwRuT6RaoegooBoKh9ko9QeSQkJDNowGwjA7qNcxhxXqKEBBdBanbLcaXBcx",
  "key19": "3cZdxHJGnWYnxUWL1CHfwYosfxKrxeWKW8KEyp43q2YdNX1vhE4zt67yYAk3vDHfmkDmEq7iambs8LQESw1e6sWr",
  "key20": "3VLZzj6puhEUdiuSXjXoAfuGwr9cp6Hg3MCcnEf6GNHbKWjtqNchS6685HcWTrVLV82LGFmzT7wU9Vh9MGNmn5Jf",
  "key21": "4KqJHqsgKoJLtoX9StzSNLeuKfsi7im6F2vRqdoaPjn9nXCjkX91dUoatZYpZfMpALkFT4MxoG5Nk4eGZiEke4SY",
  "key22": "BFimuWACZDs1ZaL46u6GnugEF4sZWn4XHSbkpo3t8fGu9yDSvQP2S3BELku68JESFqeWYhV91rCvWdLk5htbB8g",
  "key23": "2Pe3qTB4ZgoyZgdn1Q9Wao49BX4c52LUBAfE38yTCu8KZvrnVJ9BcBDu7Zb6drDjP8tCwxuHuvpnqVzdwNvYgLh",
  "key24": "28PaW1YziJkuvwLnNkMwV7yMuo2FGAS7YksnCc3GzTfZKoKmF6ovx9eikHyPq83wVQ4nEGKKgEcDM1ygMw3M3yWz",
  "key25": "48U6bBeWjWvMg1Bg4VM1RibXq32LnhZPiKCWBWzZyGTLRXdtd3gGuUTrLfbLwkAtsu5Nh6sHy6tBkRG6uhqbvzyY",
  "key26": "3svYdonaFfXUbzYEwMH7uQhmGzb7texsFqcGX7UmDDQCr8LJhhWGJSWvK4QC7VnZmaZYjKwXVRmAQgL31GGAjCAp",
  "key27": "4imrfR9ew9awnKoaN2Ds9CxS7p1c8TCxpXCCf7g8Qp3bwJmxD3N2DQkcgCyGzNkSLVBYzc7FPy2Qrna82JkzKev3",
  "key28": "5gZeD4LfCahMVhngvbHx4FfQ9xFpUDv28smWAroQMHoVmejKVgSFdh8rYXq38B3JNSWkkubjbLE3g9WoSx8BmhXb",
  "key29": "4G4MRsE1bZN4eBqQivZPEscMnf8d99TiZ9y9HCtFdgeMbeBsKpGkBh4iFXeWnpbRHHk1nByfzRc3SrWW5XVLv7cX",
  "key30": "bSM5peqxtZnfYpRnQxfNwMsTy7Qde6sV1p4FUe6wgQwfqcHcpeXECJ8Aqpx48aYqX2MPKn1SfVRP1EAjkePyXxm",
  "key31": "4gGsm1deT5s2V43XGMkWjKWtEcaLhqRs1hbvW6JNbj3oH7SviSaATE5N6GKrQ9x83y4D9SHQfrVTJ2DWRi95NUrm",
  "key32": "4wACqedEz5AmyCSPcZNbycU3haUkj34PWyUAVWMAa7KQVyN1ETaVxnpyGBKMjGkxBcSbEXwsMW2JP6BX76H9rz2u"
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
