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
    "UqnuaiMWxniDQxUJRDKcaFJ9P9u1wa1z2KBnsFJQAm3Cw1Wz9vRrtJM6YAohkM4PmdMXv9X9VUS6gMt65GeCCCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BaR82xprvuZY2qvfykftJCZK7GT3RjPGUzgzJBaG89xWXLiBVRwbgogyECxeMS7y9APKwcnAvC1RGYjmYXki2r7",
  "key1": "2g5mVsxNMRq6qRfZDLxeihfw6ivY5twNkAXLAPpsniFXyugM6WrBSvc4KcEDd4qAFvPPnVnwuP9Q3MXWzZSbz9Nr",
  "key2": "5PMSUq21XXAoZNYarUb2bfssqLXQ4ey9U23oq3Ntx5e5V8oocub7ZHyFicgJsgjydzEGkvfDUT1WP9YaFrH6uPgW",
  "key3": "2o8GcQr4anPtJSrt3TC7PC1hYoUtY3garZbb7Bwa3WAS5rnGus7qHXoKhgtgreC5Y1K4x4k2QygKXoAQp95zZbCC",
  "key4": "5B4vQcZG3rC9Qu7tzHN9v2LiG2WftKvMDeGa4E2p4Jx1qGcwC3EBKfQjM82AtuRrnprFjNeAUExBsssaTz7Qv3Pw",
  "key5": "2uCakJyc27C9p3iFjN55bUZeTMTq3er1ACQE5NVbTBJGYYvVT9ESAZm4sNwZfuR6gykN797TRzcbJUPk9CovE6Jv",
  "key6": "4oU84hHHpbLA65QDydtVBwjWTfRHtausYnBaWuqkBXuQuGn32ozSQrxyer7xjme7K9FHYYvmWYjST9ptVcvL1vEx",
  "key7": "4E44Gi5Nm79KTFF2MJDXZuJgy9JZVZXcCKKygZj6MRYFvkmLtSTANiUZ3uoXDeSTthgJNrPQtjsi5TK1gbDM2v1Y",
  "key8": "2sBxe2V7hCrELGC3BT93pWhznrzE9RL5vib8hpa38jM3neaRTSjVoZrr8Nn1cYoBadbrrFSdCaMzSbWKyaeUo1Rh",
  "key9": "5FWNps38NVUDGQjT17ooneG6h2zvCA4FEs6WAb6xphUhLDE7tRCMs9EddjSKjgLNbisDmYbHxktNjzgdyh1oAPh8",
  "key10": "59S4dyEZAr3BsvCTnng4smzVUjzHsvxQFkAk67sZQsfGg4qvefMZ44xJnSLxEJTFw9Nq1fzCmYSKzWf8eP53FmgR",
  "key11": "vfZjcYD9iML6Qbs5pbfzUGLUKC7UH63pPfdrxXLBB82NdJuihm5YMFG4iya6BQt4fVEAk3z4ADLRP32J1uNcLfA",
  "key12": "4rzN7pYRdyWdKMXXFLww5CHZHgVFfBNpRkjp3naSavb9xXuxBiC431rNqosvBoPTT9UFRBJgPxVa5LcFWeKLF43T",
  "key13": "2yUvKx4n353BDYyAGhCpAzMtSmGFftkcf6ASxx4QPBzqa3XNgwfS3eW51trrZSPCYcryrE9jNHygaZTREYLZQcF",
  "key14": "3QyGsKJqZsNc82hxUBHodxMbddZf2cnLp62Af72TvuEfx9J6DhXtY3XrhMBBWCJvP8L7nJEvjSkNZLfGmAmEQb9p",
  "key15": "ifsEtJXeKwdCPdAYyYg42Gb4LVfbYzojizNRVbvM5hF6L8fS7rC3LKry7eViuW3kTBwE1ahdRL2X3mGknHMUAUq",
  "key16": "5ApFyDHWLxrsZcNEYSwShExLhTeuRDvCSao8byRGcPqS2FXww99D8i8JRFovD7ehqVn8AS8mvgoFhLpwQhzZzt2o",
  "key17": "3xn96BmhQ6h9bNiC3y4b4yfrMrwTfxWrR5H5tLX9fhAT1VKHtpxqAQaGVaRskccWKKMqfugYU1yM3TecEogDjmRN",
  "key18": "5SU3v1uXe6wspNZARXWH6dPtTUTQTHYX8mv9saLuW5zCivL5rsmmDUHxVcSN6BsZk8kn1PR8fSUcLcQXjUm2VKrx",
  "key19": "3SFB5bjW4Qxyzp6ieDQvwmMGsQv5hiM5NoSvFF8UnU3jyiUpKV5Uo7DrcviabcCKVhVQom6gwZp74QJkTCHM62j3",
  "key20": "fRWqCX9BbULRuEcYT8YuK7mRaou3XBMRXpdcvGzSNpViT7ni18YHQWaKuxHzPHm2zbuW7st9NW1xGBsErYnbr2H",
  "key21": "xgwJmgz4G1BtPnkM7yf9ZcJk2z8kxxvVaGBfZK2Bn6chrssUX5n5abLKFvDcahtjVDsBvdiHeECD4r1ZCfqFsYa",
  "key22": "3RJLPBPEqTom2jPF7RPBgnGbnQ9YonKpkqg5GzUZg31bBxfGYuEBHY6aMGBkeXpGKn94QLzUStwXFoMzoQLaFfjo",
  "key23": "2b7nD3yxMkJimFCFxvHmG82ky7bL2ZTieEuRL2uhJC3opNARXHTS2Qr9Le6Ccxx2rFfcmgbjdnLYhJ6kkFRRxq9k",
  "key24": "k9RwQFgxrC877MszdRXSqEz4SgnC1BGbFcRP9jRFAVvuHVB3SY4aCdJ3L1JLwXfUTDSzEB8pW8o1Umh3UHZL9xb",
  "key25": "3AzVXBD8tgLSDVEBt7TmoEq8SKibvBrsWF39ZVu5ZQFVwSZEAd229bvkpoTYA8i2TTQVMQP6Af8UF8NKwWwS2Aid",
  "key26": "44CdFBHwN2jcErxhhEQqCi6D9VhT9Zz7JbPTfnEK2MD2y2PnL1UnbsuKMBAcN4e93wj1tkGo4sqPnHgLiUfHnWUv",
  "key27": "2q8oAJS3x7iCFDEDUJtff6Qtin89c8KmF4EdnHxRY35YHuaXxNedu8foPkfSoYCmxpt8TM2U4YPGpCcid6jnSaJd",
  "key28": "4rhfpy7uv2aZvAfRQx1z1c8nK1xCGQ1bDPVTZyYUwt89h1BwctHeh8HfQwpBMe5S9VQ496nR8LDwhrwuesNUnBwz",
  "key29": "4jXCMMQN3a5BZARr1kjMGFdpW7JhjyS1wvx3sTgbBbeu1WW9Cv3qevodcvpDodjPWp3uP5kiuMbUJedkx7TEXPwi",
  "key30": "5Uat4xsgbDbToKNYzHLvkaq5DzgYSCmDd54dyxTLZBUgUX4QKvRjtFqtYgG7SgqdsyDkDQG5TyTM3MzasFoStFbz",
  "key31": "2z8wwFezpNs9Npzxod26WNwtq8HGZz9ZbtCTPYMJKDT9RvcXHEXLGPEqES7TF3oVMAghnDZuQSDumEPTrcVaofoL",
  "key32": "CBxHa2tNs3zBb84Ka48RShCuxCy1v84r26v42wPrHzBagGgUKFmUdjuDdpSYUsjCdz1hyEeWw2CpXmWxyvoV9mP",
  "key33": "eL5NNtZ8GgDEGHLoFenJTDnD11FNSh7RdCZDx4n6baBu4pMB2n2qfRqJ3oSyghJrSz5QGcXTWGe8KnGX6ezD2NS",
  "key34": "2HZKzbxUoSvTBMxfYjxNJDDQ1Vfj4vRNbWPmFeF1vJzxFynqgF2qXGYJhDVShSx8Qw4yXkfsYUTu9cPALEjkiG6q",
  "key35": "2x5Z3n6GWPs6SX6wfdKTEJG2YbkTzCGN2GGiGmAACEVJdexJxna8s824ERqTsNXFBaLN6FLQXKhRMx5ygm6efQ8u",
  "key36": "4TPe2QG3yWjBcKWbm9pEeLEKBGUFb4Kr4cvbLoWMMu97dRkfDRMGTMXGN66QwjePfZX5rdoF4VHTZK4VBG3fyxE8",
  "key37": "wVSZ8xGhQ75Uz2W8qFhQznZ9eKBTQ1vEB7EMiWPZ4GtgoqnhFqtqyiGQm5FHqeV7KWu6CrwnEjS8XcQoPm1zpDX"
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
