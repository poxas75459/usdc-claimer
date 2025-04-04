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
    "2kJGJorfrxNkFtAGkfyuG7qwAg2KxhJTmgS9dUQCEni5aGjFodmykb8TR6VDyUP6NezB9ajuuw5zyjToDRwbXAdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z2YBKjUUwPMy6efaNV7TRErJqiyQooajkzZeitnoMozufuEmMSN8ar2cPsqqeoU3eBFfxbC1GMys8vBaHaBiHvw",
  "key1": "2sHefQRHGu4vVLjNddBKPB9keyckYjqiXbxCrUrkjkMyiWsoWnbf6zuFn98cFouf23geWCpd3YPdSJRMnsNmciC9",
  "key2": "2iStQJXaygq8sjb1STLVjvqwh62kQ1YqDrxgFcMrjEaNmCBBsNK3ygsrigLBgP3T44MJ4VRQ7kudgihSS48EmFUd",
  "key3": "5hRnCwFbQFC9BdST5j5yDYB42EK5Wh5tgG1UzNbnDvnkJpHkLzeD5Spht73ssY4GPtYaoRRzAfZS1T82htqGgNvm",
  "key4": "4uAaxCuZzscBtEQWwRxeWAXXfk4mrAXp3bGSGKY6cLpJGL9Rh5PcuEzvW9p6iVnp4Ws8tvTJ1zS568REu8pq5jid",
  "key5": "3TMrpnAjDmPgKCeaUKzmzKYZkmG2nCHPoXTDrPvK7JBNgKpBYvvJ7ngNEHtSvpijE9ar49ip6mtm9dc28hf5vqH",
  "key6": "5MDbjQWv6BRvobQa2DdZQKoNJ4MXZF7MzAyCM14tgRZYQoVGQcU4HDLgXvNXBp2PVKMNcd2tpgCCmiDcKE3Ab6Y1",
  "key7": "4xGfu12hKuQBcYZ1c8Eu6eUoFCuzCv3K2HvhcFqVymQgUy7E6aqEpt1F4H3H9nQbt4Gy8rpPwD3TrDJ2sLDdqjbP",
  "key8": "3qjhu3JCTMZigLhMwuAoSngHuUfwh5LXjRtCWHcht5PhTqCGG1q7vaBa3TWgF8yrFrHgNgPbQBn6LRNh7BJhebBc",
  "key9": "4Js4XiUGHnqqdtKbciPpTbUu5eCqgjFHw3kyxL6DwoNUQS6HJHz2CxgsEV8RacDGhAQrT1g1YXuN8FaLLDyRTaha",
  "key10": "2Y1eytY2LH2AiyzyHsNxvKvxBWrE8YPLM4bGcQEMHRSjzxM718FwXCyVy89QC65i8o6nqQ5YfQG7V6qn3rkcrWbT",
  "key11": "4yJqj6hTtK62gv5yji5ySgyK8ekeUm3D3TctE7qYxDWZT4jVr7hGDepwdidLenzqQJZtoCXFtKj41N53Phgrr78q",
  "key12": "3kLodQSJ8b8HADrv3oahT7GQr7kQ1T7gJAWuvLkH7gLS52kP4DVNBvYJehTvaFwSsfs11mkbELwrKA7EBrotUfY2",
  "key13": "36QzY1EULyGQPMhr4i9TWLmzRFNjCA8yGKp7t3By6cnDZKExdoycQ2w77kDi5LFgTNjynZGHhRQsLxLmdrN7P4VD",
  "key14": "3oucHXbhGCtQMPHPomNPLZcDmJ5Rtw2c9YRXQbJpz4h38PyBR7Ch6ovZyyCkvyY988DWGLBGVJy9GmHgSLDW5kdb",
  "key15": "4nWt3QfvqgNDMihbmB5scz4wJuwvWQrVmMdV9t9rHZe19HcBsJNtrE19G9gdegCWjEpeQk3M56kNEFSHBs4UGA5M",
  "key16": "5HfuSuzmspoZPSoefAGuEwehXHcbDQ5ymgRELBQ3p1y8aKnqN5Qfx7aD4eA5atHGpYn76Wxyv3dZ2PJ8QD21h2N9",
  "key17": "4RRVdjr9GTP7jQSoSj5dcMktUdpnozRDKMTm7Y9L47QDAZthAoRwrdZ7h4EHNbQECLKU8qwzX7oN4Vs4xnBhSwGj",
  "key18": "2PQs5SU2uxq9566W35DXHoJw8sDAQWgXggD3S4BcKThAKQntC63yvEVsiPGKVZxv3YGhBKHTX9TSLLKvazdt1Vv6",
  "key19": "3BD1PipS7apr2JEoTU2GapzNDBYet3dU4bhoh8ttVaw2dpZkzy1DjRg71CFJbb7QykfSJ3tBhk5YCRWDWjTLGvnV",
  "key20": "53A3HzzdGhpdx42J2BHgvoapZHWUCj7oJPAWL3hU8ST1WjRNV178PUZ54vGQVbr814BWwRyeaCm9MiaxsVyk6S4M",
  "key21": "4qd24mLxe8F76KXPnT9RcZuDqAvdtVbHZPK7CDxiREtVDDSSzBE8ATaVt8eyZ4T6NPLpkkzbhvTk6iSU6GBfUh9x",
  "key22": "321Tz2REowLihBFnXsHBRv7kvLWEAU4RK4YZwaJTs1jBMUP5aGXwMqtrWyuhX3sutQMRamDqppuGV2chFeop8SBs",
  "key23": "5NXzMENPhq3uW5QdzbhePB8sddj2cXbpWndhxevTf4W4VMhKgH1ytRVCeCFNduiV6QGX1Qid7Nzp4NLwKdFhXKy9",
  "key24": "mpBc8CH9jCjv6o4h6EYEoknZFViCq8LxGborPc5pj6e7Bam1gDijdNmLZwJkLFJXWKqy7XZ47hNg5WaGZQkdksN",
  "key25": "2aum3Gnhe8TZk8RP9szkQ4J6WaYt7eVjM2iDn1dLLAWmjNZB2zXYbXNo6PyY4c24mrT9PZL1amABFrmS6iScR5cY",
  "key26": "3E86ak4cvob8LqzRpw6P7sen4VoygwgnjaaruKSyxvDEpV5nSJjBZu81UeU9ni9K6F3WwsKUoL8ns3E86yBEnxxT",
  "key27": "5qMWmQ1gSMhoCvcXFWLwbVXtJo1RLkn7HLwbeWZgm2NUvys5Tv5LAM7XyCaWFAnrDaJRErrEa2HtaG1ac1L2njLw",
  "key28": "vnm1d9Y7Ag7GYyiMRvLKvYCCVeKomRRiFY99oPzDsbYy2DRAK82VrAhEVrJJ7n9xuz1h4bKxAx7vcQtx9mD7nsX",
  "key29": "3YmZ97M64LDhkb5xyfVkqTjFAhwE79MDpupfYyHT2ZDdKZjpf3sTnHP2aJpkYFEHGNNo84Jpb4T99C6b8hwRArru",
  "key30": "9r2Zxp9DLRmTjrkXT3o3b15732G8R73tkLnzUE3w3ci6k2hzQn95p2e5YrC6oo8VjEHFTqipJWX1fZkKVa8sNAF",
  "key31": "395wkrQNuwFsLXHc1rNuA4rYc1uXtLBWiVuR5Pdoiwe4gY1q6Z31iXa2aApeYsss9NQSya8yLvo1Hq4yXDa69zsY",
  "key32": "3nQSyGDPLx92V6NT3vTWyxhymBqJiBraTiVziZ3MGUdumD18U2AF8UUvXscWm5qxPnesSjij13QhjQZv2q1R7DLT",
  "key33": "3u1ysftPh6MsjSxda7uz71DYba1nAJXrCLcq4LvRVcGRaJWwkHGGYLcdpntKDxiadMrW16xn6xy8MjoPvAbKEYwt",
  "key34": "3XkDnyAzkZM1YTpXvhHFBWRt3g3KyNPB8anrHC47cSedKLFcHSvCsqKA4Viy3QE129pyfPLYMvzk278SPMQmPd9a",
  "key35": "37gqfK54v6NSEnT9VKTppU4BQ2AnPZ8g2oJQ5zYnKB42RK1WCe2351p3VfFhskRLramUoy54zVjTHFpEpJMK4x1c",
  "key36": "25xLWicqqPbfXErnQD8iuMUswUSbZXu7ryXt34Y6F26QbY6o51N2tW29EzyekoT8YMZ5zw1LVK2tottz5e8tzPWV",
  "key37": "4QesLXa1u7DdqqhCZZ4xk5z2oAyNV35QEroTRCtMFXhzQVVUUcW7u2KhEHHQtE5kozHqsUJamTsPS12Cyq5tYLoZ",
  "key38": "2A9L9hRyuS7fKK6Dmhf4qR2iN3AcVFJ9dTFLUyA54CPyeVjNgczJafQewReodhVayXrRLDtx2RWCXDc4DchrCTie",
  "key39": "3U2wq4hbZoa4Xcky9yE35bYbQ4bxinXNCLKLxHC5rqNoFpT9tB1F4AuJQWWumFbLBB4FtbrcPKJTu73Vxmb56yN",
  "key40": "2TsbM5JECXHpSf9tSrjPypfGYSHFE7zwpTfNMGCunJyXP9pXCPFt5ViwkaHkDe6SrsfPx5dPNGaKDu95rAyAn663",
  "key41": "4P7Lgqvfp4txZW3X1R3ynvBAZBu5RfJfF8UWZdbLJHifQbkkDXyXYoeJWCnTE423sSNA9BTrMQe1j9RKvG4vHzLq"
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
