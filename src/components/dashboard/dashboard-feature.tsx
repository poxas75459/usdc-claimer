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
    "YsWCtVSa18moNC8rqjSNh8e42ziuRVLZiN2p8AxnaeGjMgRCgHK6ux3BJzegVy3fcsk5UmghNXZyKBLvktFEt8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inqWnXgSEyDsGzgHVa6joVy5qdPuZ8XtGMf4FWuCwdKYt96hvEVTxdaZ1TSwAM574M1NRemasswBST58bVK3ZWJ",
  "key1": "3ChiPFFLb1bbTjCAWXrSsQ2WzNh7idgX8fBsZfPqyw1EwYWE4sZLMU2expfco2QiPy3CTXmB2j9fjtDyfTqEU5Pb",
  "key2": "X7QT5TPFqQKP4ewQEbuKHnb5uV2pXa7Ghv2UJCJmZjJWcivfK1FcfHWE6xeUjNBsCC19HSshv67JoGPcHrFxVk7",
  "key3": "56MU3tGp9VCJWfu6X8kvvAViMf9NXjcoRqrcLPeNim5rsExzNRcVQnmrPbaT9UuVcY9izbK1mE3UrwLMj5ojV7Lk",
  "key4": "2YD63ckr8uXuqrvui6JJUht9zWod1pbm9W823xz3ZyGjaccs2DVpZ1pKZAe6hCY9mEt3q5sVejUHWjaDLkvYQ38o",
  "key5": "5GFgJhLrp74X7iktb9JzSJ85Cj9A4DqejtvnbmNdwg8tbvWuoY6nua3cX7ezg6St85B8HNW9er12Vap9ZQLD3srg",
  "key6": "cRk6c1i3YbEaPgRogxwAgtw3Fs8LDr8kjLvGkaehzwRD9AmVDtNGV3gzsh1Xx5DabBnGsPu9hq5m5G4uVTar4Dx",
  "key7": "5r53Kd3GBtiAvWwYzhUzv5UFdAh4tMQsPD25T3vPCuA47wXAAapLYhgeMrhxTRSqQgk6aXLTucfQfB6Aufs8xwVX",
  "key8": "2o5nAue7u3uRTH7AwSPkKx1LVAp1itYbqdcYVaD9GwdiQQATEJWeCBvCMg53iKezDxtspAoDSzkkG7NkCe7t8QYW",
  "key9": "31eJ2vD2gpK4z6CGNvpPLSZWzg8aumnMdFSg5MKNcGGpqZUDS6pDADYuJN1tKdJvbnZEoboUWbxWh6sQ7hdHRxwu",
  "key10": "5LvG9XBSR9VdvHeoDN6xChXDpdMgQfUGU2QuCDFxDJH5Qg2rxuynixsJhYPmobYMHXTw1uxqKaxiCCF5zFyPV5eA",
  "key11": "3muqqE19NeTdwijyWiuhmFGWJtv24sVn3KqeYeN2ahExfgQK9AjFeAZ3QRtjcYSNa9MjrCDCcJ3hyt5nZv3z19yk",
  "key12": "3L3PKiPV9N444RayaGB7CHT8tYrku5KdDani1rR1e98VXiQmfJJJPR9PyEbbkjQEobjRrERovHTzBmRG1SmgXbxQ",
  "key13": "8yjJHss4pKFTDU4puSjQoBMUBsnD9Msmmmh5AUcA5qBKvyiLSqPF4JBG7Ka3fBokM4qRYuqx16KJD1Epf71w4rp",
  "key14": "2gBWQdiDqoh43msKE71eheML493FbBnx1FvnUjoetPFpYTdPg3dPRQUczAg4aSLac6azU11aTFwqJik6VK5YfjjZ",
  "key15": "3eDUFA7rQ6h3W4J2Dz9CDKrLKmGJ8jmb4rtGsyFahAcsTv7AiCn6LcxHZmQxrFnF1ASfEXHL8mKXvJAeZ9U5NBAK",
  "key16": "WjKNop2NJGRmZWQMXDRqJ8U1E54C1Ry3zGYq6xS4R6pYPes8VVPtDw4ZnaHGrwP55pNkrcw9UxHrkPiTuCCJf7h",
  "key17": "58pKPvvkTw2yvNg8NJ2URv3yFQpCqvNVv8ctoJxWGVg8y3BjHTbboT62hCTYP5JFj1N9VYbqSG6N4kuzDwRnS4iD",
  "key18": "4S3GUviCxq65sPwd9Mf6ecGFysGspwVGYYSrcCfHsdQFUbRH5ggJXgDqrQ4CvkYit1fFLXZvJkdMPaKdstku14QU",
  "key19": "2LK5Bn1dX67PpwhozTxE4zPsAsYYyEZHZvF9GWtkNjgmX3Aw3yXKumqGQXC1xcXKU2LUKqshdDmNTtAkHtZ136T8",
  "key20": "CTYUVMmVTER8wBrpG67DrUmBycpEwsLHk55r7ANGSGHSsattvBg8san273xbWov6i74ZF4ofjPPdHiWzyFt9X96",
  "key21": "2ckan1gccinECctyH18kiAKbetP2b6NMYz2Dro8yPeLW6sWWTdU9p5XZJ6KcmtqRaJCLzmCE8APGv19RXo72N4LP",
  "key22": "2StSJat7ezxShDngw9vj6PPZ96nxbMzPE7PjuJJQG3yWjL46CtXMtDm9Cdr2VsEmuRibMpSWhPFNHpjf7bqbc1rE",
  "key23": "5iwFZvD4yrbkqYivN7vkvN1mjd93tzqirn9roJFoLpPMrv7WEJbfjxP7MScx4bbxUseM6j7Dqgshd7GFtyFYXQZG",
  "key24": "49PeMdzeMezJyjagwSMJxJNhKiwMzxtguA75BqV6ku2YegYLoY1UjprZd6a3UD34UT7wAVbqbWuukMYTW4e9YB7s",
  "key25": "5JTSyiJyPxqxt18w6EuF9JDpPR9fvmzTsAfjC9Ui7NUUAFJsUcSi6ozk9Eij8LKY7nkB7XAWWWQ6grwwUgEbEtnx",
  "key26": "2ncJVEarsjvAgTmMU94bMB8BSDfnMapUFkr2mJsWFW4QssKjJj9QSWm8pmpEBVHqhbqadv6dnBEBEsu2hE8sMyNi",
  "key27": "duekFdnku7vPmtSz5cVxAwnFrkvHckGJVypo67aFYQyCAiMCe1Usx2CrxTwSMxFS6bDTSoJx93JEDQagAvGjxmV"
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
