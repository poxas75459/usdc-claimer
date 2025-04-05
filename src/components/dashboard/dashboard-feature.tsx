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
    "2BsWrv8p4G1v9hujxmfTY3Lfmhg3YRsN7zvqvzhk1jfsF2rjSVYGcTfNWU9hMKLYWCwpdvFCWxeKLPk1fm9ptCD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n6vcnjy4ez2LvSXtThngRBo6Fn8paMwPt2xNoGKehSzVGrKakgupTYpSmoG26DkCPESthnvYK3B22U6orQcgxZy",
  "key1": "4w7KS7c3N8isSepNsUmCfYtNceLafgBQ1xccUqLwDapfe5N9nEuvAM5c1LM1M3UGLLJzkwZPh6bZLtunXc8Q9b6C",
  "key2": "nUN8ATsEqHNetvjfvuqML87YKSXzoxPdikippmt1M2FAmSZGtgBjh1QdpudKkpyWxRiqR9X6RPbpg3EdQM7Vbef",
  "key3": "67AeVnhF9EvpBgCyezvEWvzKpgVjKuu2QVfxtScrmzbYG7Np6UgguR8xwaADA8S7U6NudRBzeAtwiiwuf8inMTFs",
  "key4": "25ZzqGbnvrXEBuLZVZGego6HzjndmrMemA8xbeHYTLLKXn1dMS2rVaToyAVCY7WHmFaN7nT41WMGNEV7tmVpQqrF",
  "key5": "4vzcPbKnJSyK5ZvxJ7kSHxu44Bw5Ayz6Dg1paGHdTyi6cVTKvuUsoXkrZwtTPru7CfRxV14mAWpFcMCRk2vAiB2J",
  "key6": "4xavPF8wAhAEbXVHWQQfikP4f7ziZYyj6vA4MhknhGpi99xv7fqtGVTiVzHB4y7hWjbtYKQB9ig7oYDyjhciAgEp",
  "key7": "zebaAsmxgDZRxJZip8udV5LoyxBCp4fYb3qFo4ppar52Xr4kVfvAwUJMh9UYzRS7nNMNGD2matdQtpd122hTUmw",
  "key8": "4g6j1tuLf8sc4scfh7n9v1Ytsk4iYWMtCJk9BSYCcXqoeev7imJtAagKbah8DwttHKpdkL9KQyApMsXhKNhqSYWv",
  "key9": "4ickgCLbyY4s5hbJMYYhg5kEuJF97rfG4LA7YWbXfkDKUhHs32C41bQo5wpziFuCurgkGZ57WwsPbVwMKU5PEWku",
  "key10": "5wPw7dvUhkUeDkBqVAUHYzvpsJd8XUf72n6tenK176XvFFP1ShunMKrUVAgTZGyjKunDYt6S45gRYoMAxnb6YyeJ",
  "key11": "3U3nBEsg42JgXFJM5H8P3bFh8vsSrv8MLLLsnoJAz4DFmxF9zNadftFvR1i5oQHgTMH1PS8GHAejHsgsd1Yb3JEF",
  "key12": "4yzcZSRNYULCEv8pLVL1xHwMKup5EvwckfpKrxUEt2fm1JtR29whHEGhBqhVoRLvKgTwFxqLLuL3M1wBWzR2gc3W",
  "key13": "5f3BTJCV9Q7h3yTZRvLPpC5AWbaMNk9yWq6s1iorXGRzxR3Jmx3ma9QzMGQEoeRXFDWUigAP2cT85ZEUX3qrg265",
  "key14": "3yGAGYw4Dkih3zKxueVGW9JkS82xMTmPJA8RUErhVndGWUC9CJ4XdMswVpRHs1AVBWQxSeXQHNbbD6VgduoqDvoj",
  "key15": "29XnsqzLm1rpdmEciSZH8d7g1Ku7235YwedgBqyT41X3TRdR5wizcaRFBGnhJXLDtjRdrVomjuPU1qYC3nZdF5FV",
  "key16": "4m8s9uLwxr9xi8VqgAYHWFVD7KLQW9XQVSaLw4Ti1E3s4Htv5NFzFWZkcn8fUAzHwnDLWb2ze3e4VSLYxvkfcrwA",
  "key17": "3aDgxCNjDHiRFKbE8rj88BRBEtxM2fRNoejrXsG6PkDUS1eoFwKQ5wqgWzXBaYxkD3zXtrspTdFPpQE5vCUg2yiB",
  "key18": "5mpmBzLCu9RuukFChhtF6qFS8nEGwFq7D7QC8ZdeJ1vmnWbVLPCupzVapvLRjFBdqwYYzwqE1YqNtB1v51tXGoaH",
  "key19": "5vC9uerTQ16MXy4sTgnk781xY5C88CmhUx5HkngbrK4PxGsBfzqwEuA1EKSchtfahqKErQHGH8v94DNSdKBhXcmz",
  "key20": "5Td8WR58vtHiezaAxR3UG4wbz6NEuxYXAWjLH2Nix8E84YTA2zREzG9ke2sSvFwRSLrHkR53eXTJi7UHgUG4wxnx",
  "key21": "4jP91pNeG9zGMgN7P8CZG5QqFnJm6ATUBYGwEk2Cdzk5Tvqv5cHEmKJoivhPEyBn8RrvB81jK3aoXRqjctrnp5b3",
  "key22": "2T7jG3nUMw7rQi5qD7vRctvdNfjL92Nd5MfZCtCFV9C9kZsmE8BHhMUcAhpwJNuw3Hrs7hpxksuj3ceQdxMhbBki",
  "key23": "3Xe3vjiXJYiMQnqR2CmMkxeKBdsHHfwcZizNHQNRm6t7rSZAS7nQB6DnsmMR9PwELMQCYVzAAZmgu4QQSCDm5w2M",
  "key24": "4QLi25APYDTo48r9juZ8zxCQKdN5jq21AFJETeUsex5MZdivZy4h5z7Qb1qG9ZWB4MAmWa4q2TgtGxT6iEYxoEGg",
  "key25": "42H2ZrxYdLWdpdD16jRBzuCss8QnmWCBEVowgyAX7V3R7ytNGUAoMmcW9dfb1duBJ1erpmAqXSKEtPrwSGYF2iRP",
  "key26": "ArgmSPY4ygxSoUg3DZCrirD6SjdBAi3nLrSKj6HeKyBJJ14jomSiCdXwid1BcN8bjMjvgq3FoGjoGMER3GbAxWx",
  "key27": "3Vdq933dD6GgBPa5ULjsQM6gMhzRvYCnAsLutvZA6nY9GLU7wfuuTASNr6RcRaGc72nrkMGHNatVmVSm91F5ukM7",
  "key28": "3gRyXinG63EVZpq4bCAMX1Jp3fJSV9TV4wrP895vXe54D9ReGAyUWgz6YhmSBGgryfYN9NN622RnzFpHEjKqUfQD",
  "key29": "5nZ3iDBnArqizpmTnbkk2ThPS4DVzADwMGPAWhj76tbLmeVPfD1x6BN7nfqNSmFzfMyDgj3JFKF1sFns74JqiJ2p",
  "key30": "UXotN8AZgqfYojGaCgLkz7AuJDdzZWAEEUXNn7pVNaFgy46yG61mnhrByuEpDzSios9NuWzG7My3d1xYxCrytEi",
  "key31": "2T2vUqGdVRMGXCivTnHv57C8KgR1axJPAYffq3BJswVyMRYpSfhjpBSDWKZaVdAHmg4fXcKvFut3U9aihT6ptN8g",
  "key32": "52QmH9qPXYUzQYFXwrt5zBAsZYoBCzRmi3G4ZQBucmBVSomctSb47KWAHZDNddyBfQYuFefvgzW6YtQXqtj8pFkz",
  "key33": "ijJsKUyozjTxhFtL5KBgFYZYsSKrjD6wLPWmc8eXUVryMvFNeaqhMqZ6P3EgUZ3GwGRsxBzrSomqiFUzwUUGZC9",
  "key34": "4LQHYRo5bPH2HjxN6H7o1yg42en3pizxoJ7TwQPsFYCmBH7XEryamLDrRKRqo7XJT8fWq3iTRMRDp6LYm6TpfwEG",
  "key35": "4h13fRXXYffVfkiE2LxuJ96BVQsspFeygtK4nMYFP9rz6hyUV1b72ACG6ZCFhJcFQi2CEeX6rokhYaDHDbdVdyjG",
  "key36": "2Q43iFcbfV4Nm4RPbHjhY2d8GXXXuxk13MmYR4BcezsFEzfKiRZq4ZsuorMLt1YepyS9CjzttojLwa7ojoWCz9bF",
  "key37": "3ccNXvPTaFnJKYU3MhYW16uAronM1aCtL2GesDotokz911U8Phbr8j8aiDxGoyuQ3eaiTFL1xUcp4n9YA3cyQL4j",
  "key38": "3stSrEMoPYEpq7BSMZovqK8rAzsmLsg5FwodFSstyy6BpCFhKS1iwBbhH9YhtQpoH3i8JnoKjbxDKghSocUVkaDC"
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
