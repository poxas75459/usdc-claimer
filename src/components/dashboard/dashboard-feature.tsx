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
    "RTAd3XGeA6TLkWRdXBKthdtrrcxp2TEuEnUYuRaz4yL9aBnqH3EwQiL5FAiHc5nuKTrjUnAtTmNM9GSRL7LcbQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ntmAKDEE4fwe2KMBvR6YxaVNDejBNdpGgy3Ko3XG1QjAGPy4Qi292ZUjuWnoUw8BkF4bCUkWNSNAeQM2ePRx3Cs",
  "key1": "3Uu6JZrzStJrQsGR1RovjMmzpuH1BaF9iEDjMoyURqoWFmh3EtRcoMAELGSSH5TXWFgFnEgSqptpFmXLBFfEp9Xm",
  "key2": "4jZDX93jsfeHvb4bbNpC2svWRsmFEpkufZTLmNp7FwX9CMph9TihYZ6BPGpv5h2VuZZ1tv1KVgLspCT7hVzGWaH",
  "key3": "2EzwT1rTezTTsL7HRp866k2eN5vtPwiM3buspUvyLQYTLzQGRwGiTM6QU5SoSVFWUQcvagi7bAvPz3yTQSdeDvqk",
  "key4": "5HEVPf9wXEivkELyMqUvTfkkZgfRXi71YwbQM9XxoKdFBjgVKk3p62qWJgL18ya95vQtXkEkwrE5aTzJvqZdufP6",
  "key5": "5nrpvEUiadMKgaSsLiPxRsXhjdpgrkfj3EaVRM2mCHmhNuJtrVJ2YpAeujqyPYSYtw4nXfCn6GSAw3Wwt751djZ1",
  "key6": "xBu2gg6CK12mT2kYpU4ZJsD3sKZZMZsLjxpbDSFjEPJnf11x6yLWsUNerh5QVm73F9435FA7ahq9KixXPBZKXiY",
  "key7": "4TVFNAkLKEsbgp5nQbMJistCaJFcs3FsGNius6gcKxjn44SDgocLh9knRgQBmqh649huYPADRgZ2824PHA5vzNzt",
  "key8": "5VcnqeesLdCnzDNMAjLHdbpsMCwvPDhvdXahCgv9ixpXVFHVsAN8pqk36fcGGDXxBZZbMTJwim9bGmzPkxwibxkD",
  "key9": "3UMJy9xp5TuGCiPfWfT2indEw5qSX5ckZCmtocDgtwBu9x5Kapc13nrN4LSbpPCeJ8zo4VTKXjFGup2Fq9u5pAPp",
  "key10": "TA9nLU37rnrt4WtKW89qbL62o93dU2w8jg6hvu9v5fC6DRqZ22L64tm9LTiUirvuQdJpuzk8DYCEipVFek41Dd8",
  "key11": "2aQAHTbReg5aBjHGTcDCXqeu6ESPN1xDYRagd7gC6TuoNbC3LXMH6ujyUHR6KY57obikmdKLVoNoPNFWyyg6YDLa",
  "key12": "46i3L2D1jXR92invD7tnqoauTr9Sx2KENy1qKc6DfSf7xYzW6uoEyDvskxFXMSjD4dTXUVHJPiynQYiSdEQGpCdM",
  "key13": "5ufPHGKQ5MhBST7xxyLn6aishKrFZ5hJhDPz2dLC4inGy2bcPo1HGguC8Fm9G2HUD5d3FA962b91XMQbM32DyzZa",
  "key14": "5UEYDdtr6yQtVYXMBoecannCHJd5DmVjyzBqRxMKNZeGBfoFEvErZCGjgTpxJKXAVtTRcqH2xQ1dUqDjGENTDy6F",
  "key15": "3xM1MtdysRHbJuctQSs1DnC9xU5fvCTgU4N35jEvk3ovx4qTypxHb6db59PgggacZEhZYFWH6qkTRTVWtsYdnsW2",
  "key16": "Xjiu9g6uU1f8tAdXkyB9keUBVxP1BUBtBe1T5FVkCxZhn18mVFAvh5LBzSJ2KfYDmuvQKWEAxotim4Lu2A98Uxz",
  "key17": "4jc7Lu76JYr9AtKGTX3DoXCMccWadwJKwR2a8Fb2qkbqiRbAYQH5njTjC7XGuqLSCRu4HjQG7dbBnVpGJ2HGm5HS",
  "key18": "5N76w3cAqrJLazJaCEs8XAwiFEWuV2cBcsNyciPSM5LDZ3rJu1szadgsuPWPXEpVD1CXGkJcXLEN9nZP8suvWh2d",
  "key19": "66isLjzXWQXZdd7qMXdnCiM1qa1ajwMhG1THrPvcB13Ln1yZznUse5E2abz2V8B3RwKDyMki3A9HQX43fdnubGP3",
  "key20": "5oyZiNV7X9uNTt7hgCDaCeLri25SAneogHkCkQtRHMTFjBRAQEBUjrmEKHfXZw1S518zFdRnTeHDDdizYD5WwuMt",
  "key21": "4DJmkopHFZmdrUBvAoW5D3YTrrEGAZjJ9VDbs6zF8gX2j8Gmq794ps2xWDtyEEKHeFEpFEMD1RNf3xjeAGN6YPJP",
  "key22": "4ut4PecEgAQZc9Efd5FBLHRBdMju6M1z4iCEE9U31RBjeGtiLAYvr4at4npwGjXBnxuzW2osv6geHyszYG3mmsLB",
  "key23": "2oB5YgedKvCQxvZhPiuoVYJ7DAcT5ADhn5BCaNq9sjZDvthiE7DyNdLwjrH9mogSFFvrqktmFdPJQVcC1rabezaX",
  "key24": "5KR3Dymugupf8bjD6EQduXNi15SyhXiEoko6tLjfXh45St4YnfazMNEmokRB4zAcEJTz7rRHygx6fmBYTRzRxz4r",
  "key25": "4mVCeQ1meY8MVmERizLhopRF16CaRPLJmujR2vsjPi9MjwsDXXGARWLhwDa4Ji5cbGSLgMYqqfCoyQ2X8WLQj4Ua",
  "key26": "fVbReFzLUn39yAmwk3g1nErQ25CTLhsyQNjAjfy11sqoxDtYtAX9cVAe2yLbFNKe7WVTtFYgxAur2SpStQSTP31",
  "key27": "2ciknKyEmkttmmr4HCQkT7RZfxn8rv3UpJ8V96GYtKSUembKdB1Mx7ZB7W58hfV8EEt5Y1syfr9AJ7C8EwAcBkyo",
  "key28": "2ZzX3t92eRhRDSZMpJHN34X8TQGvXHPerJJjuGXmoNp4BGujry5YJA2uTX8VDRosJPJt9JPwFFnHMPFuCLY68NGZ",
  "key29": "4a44zws6mkyTRST5iFbw9aVFtygEvX6vFcLjBz5MwfJERAjDJrzzvENXTtfLToh5KaH86TYsKcY2gUNkjXXSJjuZ",
  "key30": "4ohkfvrwLUcpZsk5ghe8xr2XmTkofFbhv4K1wUPXduzEx8fBP69jTdB8ebbMjASuaJdfzS2eiWvfFLd4szkT9FsQ",
  "key31": "8uPDs4mZaifqdzcD6KuR5EcjSwuQQoRfcFStzSsQcqhfrNwcZmd2XFiw7SxKwgVTofviVb2svmaYp637sE2TH7w",
  "key32": "2BVgZxGpSZDTbYQeDoadWQ4M2FfAWsAz3uWyeT3AADjhjonwmTayhkCUfc9hHAZjBkc7WaJDyaRKtjzCidm9TyG",
  "key33": "5q9tHvkvPQPtKtWeBpRgSt3sMAK1GV2BsG885R32bcakyqvcQkUjoxgqFhJAHnMS855U94NiF37La4vWMYuFeNRp",
  "key34": "4a9FsJW21KVxSNYKP63SWoaxJEicqmqySsnMmC9hWcxKh4nVTDmET4UBYhgpLJcqjbH2K4Xo3LVxpobXoPMjnyTT",
  "key35": "4xG52AMG26VSCK19NwHat6nWp8Ygbii4KuRHycEQKdXcAywiL5eY9xh69pGDd5dg2aNCW5PCVCz8tA7ZSC1ybRhH"
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
