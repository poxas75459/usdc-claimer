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
    "UZoNHwwHmqdueD3Zw3fffSWAYAaoyF2TY7fW9nGeSADCynuE7DHMH5mMZorSZvBWZswctWXKnnh6L56tK2LRsMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dqroiRVPEjhgxyNcBoHYano11ZEifZ1R9pcKPKRSfjNhzyEKUh9aqaqKh9oyZdsmUAfHyqTcSW5aofudAmG5rw",
  "key1": "Tv1d1qVzHPya5PCXj9GQrdBRCBBP1Rs1sFW4Sjdt5fLFwnq7j9MK4u1VWj7Q8ZkwGoLMDLRAmsUhCdekbzfTiJW",
  "key2": "5cocRjhhL6j49mcq9SqTeQ3QNZaeHU1qzEVem3yienYrutgpuxh3gbuju5MQH5LLmAeDMYtDqLJaA2wdR7YMifuG",
  "key3": "geFtJ5fuAcWoJFyKvJMsKeWK56wJrQ4uXikbU2MzwQpd1XkzFcaKSWsW2HuDXvdD89mgNHSArqDmdPV9s6k3MrT",
  "key4": "5iyjWWyBYSNQti4VW2weTdwMhNRLGX7wMcZ6VDBcEyVHdaAQqzCCaZLomX5pgkRvGBGKoGyjjWAmcQ6kc5Wpn2mh",
  "key5": "3VAFnSUWWi59QBu8j69xC82mNw14Y8JhtAN7Wt66BqgotBMwHrUYVSmb7e1DLFuVYCJXu6jkjqRVSvcVhaTEYD9H",
  "key6": "2StZag1Dnq6MLKLtNoMMVFdTrDVUMNJSCV84Pafgu6DJTkg7ANVMYwAnJvE2DQbgBY5qnp3dqHjDUahWXKiFbAmk",
  "key7": "S2EgZmKnmuzk8xJ7UELtRAfED81RusW1mk1xGED3TWEBiPHrNQHazg1w2a17LXAcpaQEPMMGPfYaVWPbTTXDAUp",
  "key8": "3Mm7MgWWcb7d5e3NtmWf6J2HQLRBgqDWu5QGM83z7jNtdt8zyWZsdkNEpYz5MKoN3RC28JZ84D8p7vvd7zE2TE64",
  "key9": "MnrguoJwRu3oAFSefstHgo8ibkxYQYA3HaSYL2V67vJGzhnoYVVa2Vr6vCQZu29mzzQLsvPj9XUfqXvHmiQugZa",
  "key10": "3kJVQ9bKtghzSCSF4vj8hC25DtapyfG7gW2UhpJa8bTF6PTiD2u3EtMzvUC4vMn3WAwgkBfAJZaRq3vYC1TgSdGU",
  "key11": "2kwcZhEDLuBQJ98LGx928Jg736Mue3tCp3jzb7WJ2sFuajug8dSCJpmMRLc7FjZhikXiu4rGjrccWN5jPBTBhizj",
  "key12": "3YbzeK9VFUALfwq3qbsVgMRKxGNZXYUvPdxJvzUoXaCvdbprUwifWFWosA5prZHY853VuUy2mHFDi9XSTdZGUFto",
  "key13": "3vji35kFHwhPDCENHoYdJWxBLVEtvf8oofDuH4NTwPuwcsDtU6Jq12RXZpYPtpZSQPrZfKA9aDnTu7oK3hyvMiV1",
  "key14": "2PPvmrc7A8QvUJJAtXjN3iwbgtGyTcoD3txSdQ8t9EJykWnfpza2yx4xvNRVSRfntkx7dAGQ2govmUvMtfsVpX5G",
  "key15": "4v3mrnWTgiXFX8jRAmmwKz7GTprVkBGnnUrDRWb6DKc87DCHtoP4HzMANtJHbJCN7DQoC65S5ghpVRfqDuqDM4Ec",
  "key16": "KBZgp5EkBBNTyM9oNyStWBihepDwfgRxK44H5ziY8nJ83HpULejNSU3SQuBBPBRLEjCvShgY2Zhsdk2dZHea9ai",
  "key17": "4ZwkP8MnPozgSwugmpwr7jBq3XEoY7KJh48iDmeha3Q9wJBLqqd8mNN13dkVUa4KpsDKxoJ2bQNd4Uj2nLiKrxiH",
  "key18": "22xiRYYUni8uXb1911hWnYL8JMQ9DRDZHcDWLuBSszvCMvjA2pQq78xduDzfJLX8h7UFsp9thj6mivVv9HLubHuK",
  "key19": "3QPaueUoKJMHHMy5dRaXYhayKSmdWe28zpTiWfGp79H4KfgNDPmeKJMRJyRAAJyJmshYdtbpzK96c2HsnAU9rpB7",
  "key20": "5EzixLPPiCvgjMiAnrpga3m8cyKAfNyFAStHJoZbtmvVGVEBhMayTbafqo1Q1xJRZ4UdQToeyQgGzhkr1eQaCeVf",
  "key21": "2yFHLENAkB6zTLsoaAH16xYUhrVyDGBk5epzTWPYMsFqddqTpreZ2q92WFGntY51ZcoEvJoEy3jH1eopGVLorJmp",
  "key22": "5No5LHjpdA3So8SzD17taNRzxhfrhXGojT5Mgsr5eDb35obxhboTdHmjKY5VJAq5bM2WPUDFiJ5bcy9ePAnBQCQd",
  "key23": "5EiMc99u3aHT5mjjeedU6qCQgTWdC56r8a1pfYGKYvCvjRpC6S7T1txZzN4Mcv6zEn5d47gMbfTnJneiEd52MbmF",
  "key24": "5rZup8o4oyAmL1tP5yfNRhWRNCfA2XZ7WgyKKUfchzehQRaskJnPifnr28xs5LsiQuo8MrUTCHY3CoVFH7CpusVp",
  "key25": "4XvnXEAkXyVmLc6AAdEWaBYbCTy2ZQkctXC1rtA5ykUUibeyUo7eejbyJNw7x1wjMi9PmE6uSZAdgqkcGPxRSjq7",
  "key26": "55WWdHNunrAwBbeH3KFXhG2y2UwKU38EjdNvoCTHSJBKiFc43fi5X8vorLaPKFzrVLLAvA4p3YcKXBuz855dAYe",
  "key27": "5cJ6uta74GdChawCxVhwAincn3fp8sDwWzsnZHES9EGfVD1GkXh8YcN9tjosja1hsWZJsT7A8bdaAKuBAdnSvjyx",
  "key28": "4eCbFytjUvRFqXnzHWAMhVc99DacsCNGweb7JusgJxij3n6bgpS2VhmeXdKBzZxY3hS6S31pkTLXoKbjF18LEtQT",
  "key29": "2fR18TT273jmYFykZcoL1Fs9KyVsHnC6gTMpr8ik48siszQVC51jWc5iNSmJobJpehy3VUYKjfCWSfjixGJLRcVD",
  "key30": "8BXjJjFuCoECcuNAzbZuQaT16ETHQTv6TUBgVg4Fpst4m8HxoHyqT4rbVAfivBU8J6rQ4VnRxm4rH3UibwCDR52",
  "key31": "2T63xJBQ4sywiEQdFGEE3cHhZpXsdULCW2yqvB285t1ZpJAeqYVvtxKFDh5ZYUDQoMJcHSCvdQWa8nFFm5hn5WRi",
  "key32": "3DT3RbPQcPP1sURQWYE81DawTJhCG2VpFs8fuAJn3ZkD6hwrSDK9roPgWv1f42Wqr55oQ25VakyVRELWwSN34czv",
  "key33": "bCMF8LGkSikiFNsktL6ikFWwPFTnVr1sV5BPRc4iZj7f7Hbihzvckg1Rw3S3T9WgrMmhN9duE8vi8B3CGsv3CbK",
  "key34": "2cCk7RP7s9wwAnt3AM996sufkkPPtZnjNW9oDJFs23FrCfU9h5SmCoSNkT3MRAcE7FCzmMiZcAeQwKzNrdz2UsTg",
  "key35": "27hqd2B5Yb91j6K2CNNAjPXbav6wZjJnYm9AaNxec44S2Xc9PgpjibFzsKcDtJC7mmoktWzw21DTLq5rVF1c4cZD",
  "key36": "SDr1Bmd8BiKz7vi3ZxKsV2xNqDX52zo8EfGLDNVmc1MUZDS6koPpi6fpXUwhR7wgMfWVW9L2KebCmYNAGQhCBaF",
  "key37": "42zs8iQp7fx3SUZmFd4aXEetFrPE4o178HhcsuAbFn3KYdPRXGToN4Xt6ieZX8NxAfT2idDM3Cr83JK1DhdrWwta",
  "key38": "3RLFfF1hoAqUdbEKpVfftGExfLga6NRrkXmHhuoeDYY6gkJVFDeWyfCrS2b73355pRAPbeJ7B594x97mcNJqaAYQ",
  "key39": "5v8pMNUVA39vmB52sapyV9z7uaWUkUVTqTmzjmW5jarQdM4EEaZiSfncgxDzkUqT5do1QrMJEzhLdJR4kSAp9sNF",
  "key40": "2CC3Syt4TUgRGTjAwRK2mb2EJLG9VP2cMV3ffHQ6NrDxEySuCRTC7omwfd2MdtCAFspY5RtR6THszDpvKv3pEs9P",
  "key41": "3rgTsiMbNjrrBs7Vpc8GczZLKDHHNv8E2JbwstHWDjfAwyZGkj14SZV8hc9s37CtFSp1KyuagHcFzHpBkut7Cbek",
  "key42": "TiLFdNu5LyocErsFuVzcYyGenRtdUapYXCa3LzEbANnoiDNJM924muVywY7jipANYVrJ2x1CKFCSotbJQxQYphj",
  "key43": "3MPP1tGRjy9aZtCQqUz55wbbqGQFtve5d3ZfdQNiQUZmeVzUE8PxNr3xvW5mBAL3Bcu9gmUMQ2ZXPwt4acm9JxeP",
  "key44": "4mfwXoX4A6azmB6YRVAV3VHR4DEkjRaHbruFgMm8ACa9YFR9yHJhrpDe4Bavhe8rhocZ7RnPKT829vxi2N479W3k",
  "key45": "3MowntFKddV5UMAHTRZoNiMAT5EEYe2hpWNf915meLVCkwMW37WSyhT9FnC33WGQvCW8fe1KqpNxaf3XuKKjvpN8",
  "key46": "2kjdx8N9EroGVS2ZuKDk8FKyanyxtpn2FLuBFRMt1PQVSeJC1sEz3RmV7mstkGAMs2RnzbFtudReZ4oH4FsK46Dm",
  "key47": "XBtcdVzzKA1AA2pQRa7nHqZq7hMA172h9ANFf7eKdBKBRBK3eoQaN4171v2PF1KLoAomTP8HBypjyTM1JkaTk4V"
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
