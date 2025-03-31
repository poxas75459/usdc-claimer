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
    "4SYm7fWZvZ9VEBguaC77iuHUuz2XW81UnoTsFyvFBHGcXyRkeGmK6qY4EAwrj8rC4d96WMZdauSoh2TSfXuAuf7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7z1BZVUD3gLu4SkDvnb1AeyNKZyFzbybyq8ssLutwDzuPMh8sN5FFXQTJ4yWCGkhhymryAeWqwMJGFyFkR7Wwk",
  "key1": "2gSWXqtbt1EMxFoTVBMZ8tyP54SFKCxUqmqZJDMxAiNh1J8iZfGNp2CLVopN9jsd11ea8YJ84ZadjqR3kepFhkj9",
  "key2": "57YAd6mDULbHWiGXGQ9SstpdF5RxFVQwns5Wh2xSGc9TsuiH358ttbbifW9Tf1j8vj2oCicupfHDGWTHw6rNvfqy",
  "key3": "2JASNC3rxG9E6j7MsG3thLyd7xJmfKbainFaY2i9g6JjpZT9W1PdS8rJt1643QrMNonEaC4WcQpVMT3QjHThDEns",
  "key4": "2XzitS2RFrLPpM89AtUTSR38BUe7HnqL9rUVdrBHgDZLooxtVYhahfoKceG9QVoMiWZCwnLEp5doB1U4tgqC38MW",
  "key5": "2m9nZeJQxNL1vmc8JNHwmyN51so6YjtwRhnhUsSnRhyE2X3Xm1p1pyx4yWn7rG1DHstkNH4aAPE1xZLs4tB84XLa",
  "key6": "v8fCy2Rrzs5WkeDspMFtaicMQPnuwJTe2PumJ1Xsz8Kjg9ytrAL1dcieWSq7YNraiudry81bbS18ch8u8vnH84a",
  "key7": "btAWMipNvm8ooJE5ZtV6FgWod5ian4UpLkq1wv1gKjX5WNFex6E56sawnGjd8Ukr9mZbPDa3WaZUhXvftvMJHqL",
  "key8": "pE52q9Zvswwe25giHLgt85fzNJFuwqLZJvofvMGtRvscbbRvscZjf81g8ccLnye7a1yDTkLR4zHBHPALbXvQgXi",
  "key9": "28mtDRu9XoWT2oSrjgBYhM7tekDvoSfcEzNucoUdPNPjFC7GzLNbWGRMXkszPHaFcH7YQUF2ny2TeAqjbPHVoQYa",
  "key10": "3pmQCboNPupZa3NSxitqCYhfYh5Wse1xJTXytS8J5TUGWA3vNjioTPDRDJDoduRSe8wL8SVPiiShVpRwGM87L8C9",
  "key11": "axJGgdaFBcUqQ8N6hfgvQoRovbUL5a6RTnm9USH5kWBs85XZrMtbDRLMYhzyRPjhvb3p5hJifwyrws7ZGWvMMwC",
  "key12": "5FtRtDcuDY13NsLcbjyTVCg26dm5x9BS4c21td4vqGxTQKfabjjNygz6XWidxFGwvEYkPGccSBbCe94gWyCN3B6b",
  "key13": "5FRCSk6E3Y8Z5xURJ4M86gL4cS2h6snRrucoNFDQEBiRXvLiFzCuNA3vrhzaUgTQg23xgeFdTg7WcD5L8Dkr9RDh",
  "key14": "4ZDJDZNmyWDizpUdu9XFyqYmCzpLgcrgnL14MyyE7bJsjg8YgFZrQyCvLhKtmjgU1ZmFrNEsj1xSmYQbpz9p4FsX",
  "key15": "4WSw69v44DrB49zxMvfpuuGmYemFEsAPkapMrNZ1xfSTDLMepikXYv6A87eHFbdJ7vh92JfGk3NdaSmBQ6EJ829P",
  "key16": "AC6T942ioMA5stWYcbPYtzy2dydKfQLY6T5h6JzjmqM1x5cXPm5mWoXscSmXcnpDXL5M3TiiQikk1EsWHJKrzwH",
  "key17": "4Jwfhyb6LDQsi9VifZksoZiUQgRS1ajjL7PQtaWhd7Yn8PD5pR9VVqjMV9LVhcKfxaQnxL9nxQ36SYCiErnh2PTz",
  "key18": "49QpxeidjoWiYR8pn2Z2q33kqLhCHu6Hfg2DFjsS1EtZJtu2pZm6yRpv3ZBsUANR2AZ9SXJRkh55uiQWboTvA5a3",
  "key19": "5PEfn3rN6orkcQm1VDThjrYxqqFh6yePWPzYogDPfXbtChohArzDvBEUnjvL8Bon4rVN9aMEpJ96tWaWFAPCRMHg",
  "key20": "gQADjtaYEfYRodYRmqBVnZSAb4fEo7zfTHFTCm6BkWNvHrnzVSBfetnh8W6rFomjzwXDCqRTAvqFwDhbRFAHCdJ",
  "key21": "2dwLRZ8wxzUJsNgV4pLvDvxKy6bHY3ihvQPkFdTH5TWooP6csAaLULphL7s8YyJ3mQALpzEcjZup6av9FBJNabiJ",
  "key22": "p2ok48hY8NuARDXCdVzp3kzteePVnk1vm7CpCzfASGzqmetzg3ungZvyXVATR8z766bDBp7nDJp34Z85AJrCikQ",
  "key23": "3F89h7Pcr5zFuFvmTyDny11cgPoCvNmESMu6RfMRSKXUgiityCj9vtZvrgp9E8DjyiKz8PPCwFkxykr7sSazDCQD",
  "key24": "4QNebZNUocZFV4HvxbL2ed8thYfP3mU3uvAg7hwCpdhmrwTomvCMqY4DxMb4Trc4eRuMCHwRsH9Tbhxcreo9kyr9",
  "key25": "2Yucjk4Z8ZSJnQNFb2X7JLsYppJJQBm8nceD1uaLShhpUXW9Favbh89uePLCYK8uqwnGvZNto2Kiv1QpHugtkmhX",
  "key26": "5BiSUxQXT5C2eeRKftxQivQK3Ndzm2cTS8RQHXX1K9bLA1zvYRpCaAXQz4JctJxorqrmp75r6F6QRLaU2GvBbZYe",
  "key27": "5TMwP4ZHvRXPjt6CWs3WbCSSBayPxPixLnP1HYKbojhpzPh2N2MJQan2T5qqrzzC5r7xgdwHxvmGLb8zg25vyAhK",
  "key28": "26RmddgSLboSaX39oabQJhSuY63EDuuMUHgRUsGohAfh4cLsdRa9j7Vg8RUx1FUezJRKbqYFm5GsA3xnmusU5Ebb",
  "key29": "3UtEhdd9eoDQstRpqDv1APhm7EDdhHCJpMwCsd4YX5dbn7r8aTuVKm6ndwySRGrctteQSg7dHgRLj9u38D8Rhbgk",
  "key30": "2kzELd9o7zjUWkndBaXsHPgDc6xcMuFrH5ehgv3e1PPoZDtGdpaKs7pJXUjzWSRZRjPXua297ZpvCcacZQfRVpb6",
  "key31": "46uAAgDSgfxGZ1bNQzBhXznw1k3v7By5mQAikgUkqSJTUeoxf6ydRyaUHz8B3DBW5ovEoDjqTaAh3iPiacAJv9JJ",
  "key32": "2P1DLfHbFfUihLUwkba3T3VFiNcLWHJpw98kj83cUCs388GozV3421NixMaxUKNuQoJtUxmEifYjU1cgY6sXsGjw",
  "key33": "24CE9TGXRJuEHq127eD1GSrYEd3wD5k7amFH1e2Kz2vcyt33ySzMHE9YaddWv5VxW68sVXBAs2c9LZohG2wFgZRu",
  "key34": "hQy64urbcJHJP3LXTd17mBBpANJYdXLRfKU8JEZgxMPioDCpxmviEaFnWJRzneMgvkX3HaY1qAFd9Tfuq84NWcP",
  "key35": "AB3RmBXhCsGwh3A28Hnjsxi6ewb1BMS4CYsjS6ZjfBPwZMajvoQWnhfa3qGnNnxi8Pfk4ZrG1TwHjFzjjmj4tQ2",
  "key36": "4PL59HHZ9DPvzBSQzRhTvgYPvTYDYJ1fFXsDCHZ9e3Cng13eeUx5Zm8BC5aUbGaXwex9iVJftPacEuWXjX8YJfqn",
  "key37": "399ViDBuqLk9QNvFSVGw1HNPhGK6JJdeaA4Keq2WJZhrvfru78CzmwK91WXFPcaQjsqMdenB73PcDrA2k9DZE57",
  "key38": "VicwNY2HgWwATtSJbCsrgNpeQY3AxzUSL1Xsii4MEary35LJqtyE6Dmh7gcUtxDJRzskwS6NFpJtzqbhVE32SBH",
  "key39": "5pz8zDjkb737RzyNqxo9gGJhFkwvACBwVYpa4FZpm1h76aoeTLHAtB6NwVK5CCKpeTrJMvf9Nv1EVHm2vQXnkPgB",
  "key40": "axgVqaH2o8AsSAUPpnsnAkVoPnyTxWGr8hmweKEMTjt3PCZH6sCogfg3M6UDz7KVmf3WYvbt3vVGintQWEC7yPS",
  "key41": "5yY6uX8zwWXR8RNtknxnNpxyrpF9EPHPcWCCXQvH1aS5e9RjcfN7zKGgHQ9LNYM4Xk6t61xqtaPipKjoJTGDBq3E",
  "key42": "3cPUc81VsRwpRuZDBvdLDs6LyHH8cXZt1FGx2bgz1ZuKZY8CTKRp3juevVAt8svTm7JLS3Wic2MRDKWPMeaAedRh"
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
