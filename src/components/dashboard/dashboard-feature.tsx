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
    "2fZB9VVXkq8dM38tdFKj1jKKqVarTdvaK9YZ9CyzGWHEQ1iS4LrNKLSeMizkdhRKMTCvvwAf5KkQs1xgwuvZ5hRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9ryqNHR7H5qtGkPPqLiKp2VyEkA7XVwPoNfcqy1iGYqe8GRKmRNT4baQuS2Ex4PKdNTby6GqPioNmF6XbsLZG2",
  "key1": "5w4rRzEzD1CSnTzquhXFN4JMcZkv7n2Yk6YpxRsSVC1e5tTuByZfUrDSK2wnYzUiH2NPGEcGpTVLWwxETQv1SmPD",
  "key2": "LxgKxTQpJMqq1nYZNiCQWw2Vb9pB7s8PLvXePuGwp74mNLkV4BiF2kbQFRsBz6zKG7G95n5kebNLgeLfCw9Dqx1",
  "key3": "4dLEGLxB3miVyLSTRkcpyULPerhbB542iAB35wvCtckFdNZUSf98vKMrv4d7HFvatXbh2bokyS6436GnhyMdN6Hz",
  "key4": "4wrzpEEc2DhCWjiqpiaC2dCpJiT2KCtrwiMNKXqocRr8845thostjm1dW27FtwpzJBHopo32fSmt7NA15NSyzt2q",
  "key5": "2qBKQ8PpcTLpBQQ4FvVqKx4AR1YqusuuTyWQuas5AgTQQpoF6Ay8LuJDa87gDtfAPjbA3Ncj9crLdGZNcCtdHxFt",
  "key6": "o7DyM89Wjqn1ce2o9aJWwrNhwT47RWXKvZWacVEwwaDMxTMfFYp3hkDtSvUmLHypG6guL5bdsnUC5H3Y99LVBR1",
  "key7": "4y9PLUb5uARuZUu7mpX3JUXouwuADAXppWL7fLarA2ZsPLEvYWM8AJBuxUYxWxtS9U8BffrMtmAGJ4dxqQaFRpr1",
  "key8": "2y7ULRnbgTVMsrqRH6Rpw3wvF5cvUXffZLvycrX1CM7DYkqdxSRLVvq9zzAb6Ksf6v4Pq5HgUMso7QAbUNXmZGV",
  "key9": "3bh2C32b5dZpeWNJ9Ez1Rb2eeLVVMfbq3RyRaxGUf8GdxRRrN1Zguty8qoHuXk4xtomu13AG28i8ptmEGWr5Lofw",
  "key10": "23cE86zaRjofid7HbnZ5tsfFWJqX6Qz1hBi4bFEKUECsKcBnKqHpyY4si2SUJUizGHAjsrtDCx9Cte2v1KfpgqAY",
  "key11": "v6NNSs3GoL9SQF7Mj9L9xeWmmeaLWyxgD88ntS7LNFdfxph8Bcr8oJf44NGFNxxhVnW3RzhVkrSAPmp8sdVbKXh",
  "key12": "591hvQoRkniBKJtN8AzeZEXvXj1anmnrdwWBJiAfzEUbSnHmA64VfVpDhPHv4MgeyxDNzdBHFq6BQeX6rS6DxkJM",
  "key13": "34EUX9zp2cgrUGfrxCxQLLvCgeKoFtNwcestXJ2NWvuCT7jdGLM2yFCTDJmjDUmSwioQCY5cnmPDvpPgiSFKTJUM",
  "key14": "4v1JnPcfyqgNsNRHy473ui3D3CM1o8NErERte1uPsNNW1E2jbZvbtHdFt6aW9J1PKTKJgqPKDjMhBdvZLZtzjAJW",
  "key15": "kvgptBRBcbyNHAhUfCjqc7bWmc5L3KQcKF11EXRVthRCa3RKLXjfjcLrbTkJVStCks5vzyJyDt4FwrzjAHfsSkX",
  "key16": "21ioZp6yn8fPhMGBUg9kc4VjjdJ7jG76ZR1ANr2EoNpp8fCNXrtr78NKyeAV5GGzPpKMgSmHStMKZKRLW8Zgpufq",
  "key17": "WEhNEyuhE3fVHCaeMPH2xV8yEgvMeHAx9gGGSkQNeXGD6J7iWB1z5vgScriJLJDgU53rUmUKaGayXQrJuNsgYyJ",
  "key18": "5zmozrwhAKmQBYfexiQKr9tT4ZgYmGSVShcndQH299yiMDb2aX1PGesWfNDtsBGxebz6s7yWiXyh3p3kWjtCTmmU",
  "key19": "yrc9cPJp1ZRLkHDJpcWBHLcaTWNHJc7e47JEpgooD7NiNrh6jDCFp9yJuqk8Qj1fxu8NuPUVXwxFRL77vKHr8zv",
  "key20": "2vANVcL4PivhawQQnouqwBvm7nuY3V8LBEh4a8bBo27fXUwSXTba1KiAjVg4GKMs7d585DWktwK9Axj1uFyw94Kh",
  "key21": "ZVfnpMZFezzD1Scc2qPuzRda5UBXiamNYHNchoSVQVfzDKKn6dBNdvNBhEdCEB3HZUu9twbuettX7JbAhUZ9XdM",
  "key22": "2N8qiAwgiShadBP554Cf62FwU23NHcjKVjvjb7AYQT96y9CdZn4bJ6zFTbMQVgWUE3sf1Taxg4fw4cwQWWWpxcex",
  "key23": "2Bh2YjensmmBgd2oG7E1CnCceDFiQw54b9xprK9MdemMSk23tV2a1xvDSReJY56zVXQ4STwWo42nVAtLfd5h4rX3",
  "key24": "2SP7y8szrf7T2uF3jHkWnDzBip3NR6K8LCjJJunh5E2QFwY5xDyG2mgAs2eLScRPSPbCAi9gkgG4KLhs5UDF6JTH",
  "key25": "27LMRsNJ4Vj1Vsy6setMAeSfVgUGjf33H9g8ukkQ26g1a5duCfTqsf3mdcarou2ad3zERC65E6iJvXcup1UJCUWc",
  "key26": "u2JgmWhVagHA8bFwfLS6BTcTJoeBDb2Pe3sdy4pvdz5i5Ct7k9Jt2EKECSivsqrKBmH3QtxCs272L2Z7L24FvXc",
  "key27": "2kXQNVrpk2fzB1mBMnzu9HXzioWBLXG9rH49dUDgjbF8cyFfhoTNSCXwiutnbsFv21vN1rfg2KCKXrRbdgzAqm36",
  "key28": "2iSWG84gTXqESKhg182V6kiVCmawn691XdKE3kd62je3Ka5MN6yDuQnhbAeBjRALx1w8eSd5nz9qv7RDrEdxg8P8",
  "key29": "46GhpG1k5mMVqqkzDkMFD7HzPpAtbnEQrwyxUGsxpnSBwvFAvztmnk49D9B3rhseoCupsD9WZPDM629fdffki7LY",
  "key30": "DvtiEbX1SAJojZR5cUZHnGLDM3JfP1H83NtMwVdFvXjkJUvfiFUiwDWfdC3W3uFK6EGthR6t6QSRzZHBG218cns",
  "key31": "3p9yQ4QMSpMi4BBtzSVqTy3BJFiM65RXLiu62UcPTqjPcqHybPUphq2QrSvnS1qk9BxAVNb6cRVa8Pn2RmeAHMzT",
  "key32": "4wtWSTt2onjLw2pSnR3CJsdhyTGLmByAdUUa9n7EVJAAXQaRPwUz3BNouLyfsYrFhfAj8SLh5nkcPRuj67F1cjzc"
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
