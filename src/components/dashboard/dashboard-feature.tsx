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
    "5yCNyLYW3BMWyAhioDadHQn8bTtNky14axbxZw34WHH3DPYHgM2MiD1w7rQwhSmGicVZdxfLeYpvsZrb5SsnzreP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tGTeUDUEy6wNyRMgBGQckAnc6jFfLcY7NEzZvQrSAEoQ9oegmhjTdTL54JczQMLwK8XHqruh4GpFihRRpQXKWsq",
  "key1": "5rrJyseYhRd9qeRSnZHN33HKPnXS4wd2MDiPaGBSLuPAcJgN2rZVZkifXKBYxMs5H7vWSVtWmHAdrSNMShqsCCE4",
  "key2": "aBSwPsba4u2H5u6cGEw6wGiKS7onF7tA665TqiZadpG7KbbuwHMtbkk2ztxidrq5QnPNKciPvM83r1negyGkoN4",
  "key3": "nhEcHGDjVQMsN2r9wuTvR3XY2RqW33HoyzECSnDog3UU1w29WMkNhnsQCtQ19t2Sc9qXdz1Kxj6MeFq1ysJrwgc",
  "key4": "2EDoaKoRVT4BCW4kqSwTsUxtuNaC4Dth7omrvHpKL6sFBYG8PeVmweYVfLKSNBfXbBpcdJdQfJHkpAgqSDgwiZQ5",
  "key5": "2xt9Apm5Dtr4MsJcTpQhuhsewV6DyEBDCzvEzMURXTpjjJhrnEbpyeiwNViUF6WSHiHQRjHBC65XRhpe7YGV1o3w",
  "key6": "6GBTJShpk9xH6oeERBv2cTyBcq1z7VcAGmJ19gG7kDQEBBx1DmxaZfq2jnDivBhZkvgwgJGGtSBVioZo43G9Xyv",
  "key7": "35haVart3zrLLYHMkFTYESVJxnrYm3SVZWeuQqUAyo3CefG7mpJYwasLgXJFyzK91NqXf5enbZaYgHn7WfEpq9wx",
  "key8": "2Yju3JTp3vgFLzvVoLGR1mHsoe25StbXfmxfueMC1V1xoRpXXBrQe2wjyqeyaw8PeMvHutYvgqfQTZJfmuFsy2LN",
  "key9": "64MBGkM59qZpi8bN3rQfSrNTyDyaJ2BniXV6Y6CvEkvhCeaXkV8tuj8FHW8MSFgFuaKrjtvdPaPq9ibKYUAGWuaD",
  "key10": "4HL3N1bAeKV2SxYRsmDy7QnBEZ1Qc92skoKqpkaxhCEaAXYxL5ReEYPziJaQL95txx7Vk8a7gk8aYz8VvwtPxJro",
  "key11": "2Wqp5qyHjV1AJpZj27vb1nbPMdqCaZVJijR3RhFxs8nBfmCw2KLt6NW1iA1ctrSBNW2vZagQovditVKsQAm1FoZa",
  "key12": "4Qj6DRv3Yrp6nPb3MpQNQGjS81Ssb36kTSLEZxfRW4ZZ5oUFGwDqxRtYMbhHCqrgymX8mRo6743oTLiqRxcJkRtR",
  "key13": "2TeXsXsBiLzrEZDqYAorSx544E4rvZ4wmqXgGVr4cx8VCok1J1LS8H9PwPpuN6tuJCLzTHMWm4Arm9vwA4ACvEJT",
  "key14": "3nZPDMS8LfuZRDBFYkVLxt3cfNww6j8wDUFjC1yYhEw92gicXA7bGWTSjjnkVpC6CKbWUK8HQ8EnfEMJPUSUmDDN",
  "key15": "4SxpVQDGKWip6ScFqTMqrHnDXczmPQQqHChioRT3pubmB9UVB9fNotvTobs26hi8F6HAtazsJJ9FPKaZHVbJqbQz",
  "key16": "PR7NoB4ho7NJQVkANkpfMEfNLtKELAgcXtJCuFSybDL59AmXxMvWxAisTmtZPQPXQKxrWy89UgSYrq6n1tHxw2k",
  "key17": "5rrTfsMLZubD7vWqqAyySJikx4RWnJwzorHC62jyphk6BfReY1A7gTxo1bxD9MycDbExe357quwKk88wigJYY84W",
  "key18": "2F1HXK2XqYtBFWQcAzLaERAYSQu1R1MLvkF4psSjYkppyMRb8i2rup3zYzvvorfrsk3czS9ARynwxoQPZ9SxyaSz",
  "key19": "4YfYkbpKPBa72CUXC6spnoL84nK15aRmwxLjoyJd2gBx9kJsd2D3s7biho971GFJWoig4L8utj8Zut3b5tAYgs9T",
  "key20": "2hpQC8xq45hRtomwcqmbfe5vDmv9dmbpoDQ2tHW5Ha59sYit1y7fUEbb1eB28a3qLysr1WemGBnKaujFU8ujFCK5",
  "key21": "4y7doUqJfLzUkSFkLXJtxDyJkcMJXUKyLkRvnEWEu6oncD38ju8wWJiXMjdww2cGhVgUKMVoVfDYe9NwBvYj3M4W",
  "key22": "5LxjQX9vAVSFDJjpq6nyiMnVZtE8qR5o9MpDitg9huQqfBnpRaq4tmQW7Zd6XRJaYDqG22fPpwXd1RWBTiWNP7tC",
  "key23": "beHBZ8s6Uc4r9JfP3TP5VbKszVepUyDDWz4ZXhCiSs2XXM2rYnBSiCwgULT6UJD5nxPeysp78y9BperB7XdHfam",
  "key24": "4ngyxGfySwNmMbNEQ5jwL3rREoFdaFexdWAM1pUj1jVdPPQNzfpcaQVS5LmUokSdchPk6j5fRnjAAo3aLLAvwoiG",
  "key25": "5eLAupUTEZjyjYzBYNQnuSKDGstPrN69A5bSCHkx8eWQ8KWCZtUcBPamMp2qUAL6aFr5cTFEQ71KXo1n2fn1mw8J",
  "key26": "3JAH8qin7DEpjrdAsmRUdakX2TtSeMGwkYAn7TPAZLMaGhQZPh4WYztu1Yx9sNYWUo2knLgqaf6NJQDXJWCjfXRr"
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
