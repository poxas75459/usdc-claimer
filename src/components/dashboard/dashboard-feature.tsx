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
    "AZboF6YP8PG599GyNvRRfVocySC3vwhq5CLSusEJaMWHM5twphthkEP5BzqiqVANBDiyLhMn8dcPSycQWe4VNKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mi2DWj6x7ad4ZsWKeSf9G78rJJs5vCnGHhyL3ZaBuRxCBoQpYYh7AoBRAYJbFrzZXDwkSNVVDAJYnY3ALxoTTRe",
  "key1": "3KN1fjrCjr283aEeN6TQKCp6byVkZBC9JyubiVbvpS3YShrDXTHg7WQ6XvnHXbiwARM2fYMMuTF48oLKc85zYZic",
  "key2": "49MTq1agCcG5JVhXPJAt5hRFeZv3zEmWtwr6wPu7dNFh4puiP2u1MRLvC5FtDAyzLmiMRjY3bnzBF6PDyivr94Yf",
  "key3": "4JrfWRezTPAPBabJbT4RPEZVqCWYGtvdQA4SsScirPMDhS3Tby2x6za5eKDSWpD3CCnge7q6JnZfrJUNMaW8FxWB",
  "key4": "MZyBGyjZGBsk9xCQgWkPv5EDUhH1CNbGawSDXv445FVniXdksjVNLu6nRfbDqz8vXrf3JH6rRQFaej6wtJz2cen",
  "key5": "27Puu97RKts5vEHUTcBM3fix6Bc4MKih7UX53aaM7SXbVewjviLNvy7hhtpvtCn18L4JC898wuJrGobfhkrsZv1z",
  "key6": "GjFUkFUoaT3MfDwVtoebjeEdPuWfXUcmxT8mo5pt5wFPRLfScNRXtSSLE3GYXKNeNHoc9MP1JtWNbQbwaPvHYdU",
  "key7": "4qkJt8vF3A3XVVUSw33NP9L7HiQCN6M26HkKUy3bG61HpF1xvcdoU5ZoJGDvVdK8mK3wfciUv9hojpekHkP8MByT",
  "key8": "5zxYaenWavBNEUq8oDZE972sJSy6tCxwfcqc8ZKPYLfrniGeU7BEGWTsKab6n2EvHozp2eDLnrAAq59SYg5T3dwv",
  "key9": "3AGp9A4UrLohCe2u779wP66rDoMyqPtYM83eJDwFNig4csYRTryTESzDHRDGobWRNWuKB77gDTNK8DiCjWC5uo8k",
  "key10": "2YcBCc71NJ8NxF4p4du1WN1V6vDS6CK1HM9jp6Haeu8PdpETyG7g3U18LiQPag4wRfrcMx8ZMnnWqSs1r1JPfro3",
  "key11": "4gDe6SJNrRSzqPttueoSnb1GK7AJRavmUVAnThaQcrAT9XBiXzp3G1uHAKFFmRWQWEB7Bzu7UtGqoKxqcTxzsyyx",
  "key12": "3eHEWFNLuYUtVf3Wiu86Uq4NVVbGNZv9ZYXu4c73qJHPn5gmAzZyU5P6xAQdrgfAQj1XNoasHUPxjD6WyeVHmsyM",
  "key13": "QGdPiHpYW6TKTnGiE49mbEsjXXTk6CMHhJC9Xo3SmD1RSK9XydL5ny1LQ4nvr5LPA89bsHf95oEfVxCTN9Gk9ce",
  "key14": "2BLm5RKDp71aHjNvDKCp9MLpbW9EComwtDyQmLMkzRh4dq13YRhqFFCJF2QCNrCRG2KkS7UBo9nSjTDKywGEpL63",
  "key15": "3ZDtTxGQ4VVJfcVwHRann1q64RWWRkePMLcUBSRNYGXAAxn8SExQAtsXQa5ExKRtq6xCSHqXSqZ4DdK7gwgRkX22",
  "key16": "4XncviT1xkRgTfKaZnNbMQK6H2iYqkfJUzs8Ftdw8m2prVNVLhQacoMLkKyioeQBWXsUhJa9M9ccn9B5z8doaCVq",
  "key17": "36WoSeiANyjgH4cCxxrEms2rTVCZnd36EN7SffmikwigWf2dfSjsV8R7629do1RxqNCyDAi68bPbnhXFrQ2zt5a1",
  "key18": "5gvVVmicDgA4ioT9poxPhxmkJEphcT5VbqrECDWiKhnMGUCFx6xBr92818zNFEKLDZ8Mc97fqBpT9WpshRxh7dy5",
  "key19": "12ifmervwBQdMQW3KA6DjTfKmGio8gAYnNZtYwCCZq6kwQ64ZoG45znpaMRLvKPN9qLjd1CwPTY34HSndKSHh9w",
  "key20": "5eAjcEcHLzo45qbtGc7ZK6RUEWePdwyfJLJHFVfAWGg3hR87DYCmATXCATWnTzsTiwfvG3i31ejD53ZYCnrHogbX",
  "key21": "5awQZoVURitpXhSi6wXy37x5dHgWJDssEempWrk3HneR7FeFCQJmyeTvEpUdDLArJyGFSNPm79uKckSSLagDweQM",
  "key22": "2YXwooGGZmS8omKMWn1UAwQXKspWBg1moQA5q2QWSGbggfz6AMNDZS9hqor6DzSWqYzSjCx1JE2rppE73Dugkrdf",
  "key23": "2nqk3ouPoopr2uU1Aj8NSuD62cSZ2DqeQkXtDQarkBcJCwa4KBfkePEWd385JBpMDw1LbrVVvde7LssYpUi8pbmE",
  "key24": "2M8aTnaVEViNmPyVCsqTAcicXPhhSGJbpoK6g2EVyDLXLJtVb8dGJTZaq57N9yAh5gsjPCPzg5yZSVeiS3ovwCmr",
  "key25": "2duEpkGb4Ga8hapCis5dE2Y46XeEbBGFYaDwt93wtd6WrLckZd1vMhcpMFaBfUnixrE2YVs2wnP9PbFJQbS2nayd",
  "key26": "5MQuHC72fJ1ErHTuXH7ExyF6oSFiMXwKGqiC7PwPjGA7g3qL9xqzWK2MS2pYvQLpuMeUeN1RAnrvzu4BGfwr25nY",
  "key27": "5BcfD8pmWBQJzr93fu5ZXyfjiLZn7hW8KtJ5wayW6ChEruWe6iAQGHkt5mhaVZW2DsJfTsGs9VLBbdndcp2BYPT8",
  "key28": "5w3qhAiaUneCUQprtLGsyRnCj7RxZFmjysdLx4wsgYr3Gtxs5aV6XLpPWPeuxZ9fLwq4HgkS7neaeUPBUSvY1at8",
  "key29": "5Ymk71YGxAtR8f4614vQzn9RavrbK82SSosepbqg4Sk9QTHA9zhs9Ak4Hk2PKNpC4G7CTGeC7UHryph7y1iH61qz"
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
