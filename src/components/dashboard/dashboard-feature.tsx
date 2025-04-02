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
    "5uSquSNtnsgDw6SMyPBthmFqYso8WNXhjxmWKffnNLSDWJZGxtK6Q74oYzBCMCfdRcr4DyTvzbzfJyf5rufuMhSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KZrdJPino6uT1KMDmDNqKscYuHwX3UjQesgi2uZ1uvL57kuhUeTEPmSdEvA9ofvG2U6fmLZsioTYd4yNP89vggh",
  "key1": "2vAnYXSg7TE75rkHJmpsJJL5gJYhRnBj8axFLQ17tin2nRbA4ssvcADKsVJ5W5nMPABpbE6iV6k3yEKqr3rnHWj2",
  "key2": "3Dcu24eUVDmGGGj1TojGXwfYLCCh25xVWuahztE7d4LekCyk3rfZvWPUiPKamiqxfoKCf1afC6WsByUM67UV5zMU",
  "key3": "28zkRQJVEFK3jssuG9xGXGsS5DDiFKSgD5gq4smq3jmaUzqZjZ5VQHq4KCs95NMJTkoDMXktDdUKTje76BJ3upBo",
  "key4": "hVR9oMifcpLepdZXjaSYN8Jneaj4A3AkXQhiVNZrp7nosghPngH5M6TetR1MkfxYHSBcyPb7J4dK1PTWxvugV8b",
  "key5": "5VJw9CE9faPsKTfTi8jsppW4R9Syy7QWQPe5W3ynv3Aq8VRiT87DboW9YfXZ2LNZU4QuVUxLsnT59YvkJwbcazMV",
  "key6": "23uMW5L3zFsDNDHwis1VkAWxxHQCeQTAVaLLBEWR3PjKszcii5KRDEHR84aNJKMDsmgCQCTBRs29fu9nNk1xrcSQ",
  "key7": "HH1EDeHLB8Dmnun1V8Hux69mnHVpiSTypYZToUozhBRM5nVWBQhVG9RA9ckoXJFZquVTMSpFjg7xEX5LZvYCcPF",
  "key8": "UJXLdimdrjDadDjRrMeKjzW7sByCxczxVaooYRb8oC3U1Krqj7v4WdBbvxWFFm9YQPySn32LCWagxZe1bVD2zTQ",
  "key9": "3jpSjBZfhpgpd2SUQoX71RSyc3oownR313Ufswi3FjhUBDY14pvBs6c2ga6TUCrqnsSTDYqSeMDPnadotDeSLf6z",
  "key10": "3NDZKN6gbw1XHPJo6ojuK4n3ZeFABArihE5GQt4sDp77ASgSqhyBrch2KHC7VDTA4h6VE3BwRnyzs7UpGdkTAPDF",
  "key11": "359nm99TYFJDHkUkUS48V9SE2JpJXKuX9ahsqBgn5frSUmZGuMyLUmig41DkoCRdsTdTGV87QEEkcEmKucWBFFsV",
  "key12": "5jWL7ppZVeXEoV4LaTrqgeWqppUZfhgoo8VjAeBNNPoddi4P8ZMWzd3tsqe15YkFDrCmRXjfNLuxxVmiVt1fh8Lo",
  "key13": "3JCNjLGE2LmZJG3fnkX5GXgw3DbgaGgF4p3Ri6o5sv5jguQFyv9M2eMW1GGvZpuGoXZBzebQGHcdRuzu7EXdAvzA",
  "key14": "2JsFYcTEWcKLAEvbreXebD9Krw7KWauUKZkDFFCiSnoqq1eSvDT2HNG1SfTSUnvriTEay8Y7ysWWreLmdQ5KCfAg",
  "key15": "53STGdtnYoumTTYxBSYwDES5Aa9T7hna5SsYCJUsPGTGwrEsfKcW3muKYEEszZCLyHRBvPTzunkyrpFQVtWntw1Y",
  "key16": "4Ndr2Ls4NGrGvLNWSyXEfo3qj5McgnH4bwgp8XcXxW5x2GwAPufTo5h38CVfPR82zSPuiTbBesGwWQrqjFzrb2jR",
  "key17": "5AwYjkt84bAVrMv31hcxwdMyGMPmMfxE2Rn1S7AXL4hccrnruWNN9PiRvvdLohSRz6PKVVZj3FBA84aFh43eQZhy",
  "key18": "5eGLZcpoGWHEWEcDaigVJ4dmLauANkBb7x4d42ddmgbJbtPMD2W5VTSRghDgrxBQxVRYTQWLhxJYd8yrz6CUKwew",
  "key19": "65QtyYiJgrGnyQCn8zp957CYo4v994RC45yUpcEeML9EkXhipqi3WwG6L5AdbGFEvfwpdmdattHaWC9DN1dD4cfE",
  "key20": "4YV9UYKoJJ4nMir9kJJUcdHbh9WmP4TX9MsLttqcJswazzbZuv6iMcutFrxYvGh8Wx5vKxA81CjKmKuVvTwYsUwo",
  "key21": "3aHkHUj8o1pSnQH6Nkv3Ru3X92RpXUqPDVxkXwabhZ8B2QUpg8RVCQUUzu9WpcZ8ckRozwyeu4kPSZdHgnqyxFCA",
  "key22": "gwECLNo8G6wZXeN2BZG1BznZhQKWRowVR1ghozKsJwdX3NKyXZKoMrC2C8AXoSsQdDq34n9GZTA6VhqbYVsNTQX",
  "key23": "u1jubH5Z6hoCzEAfKpJbG8975Ko5Nc8V8eCX3sRJUgZMMYxTRDxCZhTrFNkJ6dFfnLnxP4Pq2wUoGjMXYhwNWPg",
  "key24": "WmFrUPrS47XqJdJ5QKJjiNjgkj7ET4scmf44QcJ6xfKZWbm7rLCPvRFRDLb6iWoT4e1mCbqVpzkxUNoBj3FnWCa",
  "key25": "3iKh1kPEovQ9vKZrFYKsbx1MhL8ZjEZmggDmqGz31m2s2KSiwCFyDMKrLctxwz6ThscZe4DhDrTw4M4EkprPitpv",
  "key26": "2Jui4q9dHrMmefVEUw8kh7STFJ7tVHJ1zNxzmZ8kApichdt5KaM1Eauqzs9AsVFYC6GHiBBXTMEERkon9RcnUiN7",
  "key27": "5gn1qLMUAZR14TGnBDPkcPvbUHV9u7EH2M76wJ8kwmH99PQibQpGUEGyU4AWsZUoBmCDDWsSbUHada4Xn6torpgo",
  "key28": "2oWbH75sF6iKTayEyiPW12mojtBcubY5VVbP2AyDCPCT3mk2JN9eiMJhGRrNwaPcVTZoL69ojRYjCawKMWmRLz8C",
  "key29": "2N8FRcUGpedUtEYYniAWk2HPQMkZVSVQk2yXhxXj35cYbtiHcnjZP9m3jzGvXktKmXTFmBnKu8huN5V2ghM8BBwD",
  "key30": "57wWhzEXT4HmRv1MABEYZFFZXNpTHQDnwBd939DjyaqiH4pY9R4eXmpDj6rumyM3K4Yq9H4wqaMAwZP4ziHLQHG5",
  "key31": "5orLsK6WtRBexercjjyicBKFeVFyyzm1h7xErSMFuXo8J4GQqjieogsWRaTvtiXaDj5ZqGWjZGteBdjC6f7XuK4X",
  "key32": "6Qvmz7r9m8NZXf8TQJKrQ8MHR3gekV1Wf1n7oMPAKJFYuzZ2smEUxf36oh4DzYfRct6uYBe279tjCcZFV3XxevY",
  "key33": "5ZSqDDHdoD3KWbx7SQ4KTDncBaN2NZNmh9W5dbboRguJfwMKrTJC8TPtnZRoY7nx1KmDqjAxECsxGqWLXoKCdxCv",
  "key34": "21Zep15M99GQJu4tB3DVfgtrUsigbM2ExPKMtF5j3cPNUGXSAGdotcJytamcb1PYE9dhkS6W1RjSAz3Dc85p7REg",
  "key35": "4MN471qN7z5Wydez15VjqeMbCvbG8VRp6ogYXDBT2wQRhcgxrRkFn3PiteUCWiEfRHCDLt2Qdz9ingkUy7DfchmD",
  "key36": "3dY12T8WmmRRYskT1km1Kv8bbrm7P964N14uKTwMPh9LDpAztpBVWSoSoe4Qup3jp3ykmGwMRG3nv4F8y2E8c2uQ",
  "key37": "5tYLgy194Vy7WoTBuSG7HcJ7C7sCaC7rGCAt16TugHgsek8w4oEM9nRNSkiKJx6ti4QUtf5WLnqG1xpXQEFHc23p",
  "key38": "4og3qWpSDm2pJJMhkGCHnav2nJbMHxQW7SfLxynDgoHuKf3fH2BQLeFQNDQvJ1qkvg2jSp26GkRF4GtvT2MwoUTZ",
  "key39": "3piaa5ZNDMxVrthvDHN62kVGtAYRV2GGVi25Xr8KhWbC7rZBfSaKTeAahGWMkkmr7rSZKM4jHgmjBQJEziUfs4Px",
  "key40": "3HJ3rfTGziGgdPMVS75981B8EbX3rLjQ6dTq26fwWRR8bDJKMsnRXwNozGrJF5HaiULPZu4hcgh2GQChVtKLxp7w"
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
