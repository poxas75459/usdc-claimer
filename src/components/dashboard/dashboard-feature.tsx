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
    "3ReZAqBbQXwzxWga5u4Kbc2KaaJithFdMzocYRKgZ7VsZxFmE9fLFB1atLWkbsyjxJUTBSuBiE1WvtvVH9jjm5wT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zBs4mX9hyx6HGWxoKsnZPdNLVQDxyAUJtWaXb1UqejWeHjnSGvtxrmAAaqcNy9w7cVuZTk74URdUE81rWdbWiYb",
  "key1": "5mMUGjrXwyPEVehkHi31BLHGWhrDJwBatQ5vpNSVPhXfxpuH4gMLBwej5RK2imCpG2rWWTkHH1Dg7B5W8kd6ihy3",
  "key2": "2M2Jh8qP6rQHE7TMHNnF4MmrQijLRcjJ8JWUrRTzF7hcjswQpSLJH85aQxGqze4BamihmtedNhjJam2dpJ1a8jMR",
  "key3": "49QuF8gVoQuAsLnSDvxKw3JTzynhif2sWbMXSsKt5KXXxY2rA4hzHirp3f2RXKhZWKX8ZARfPFpQtriT88kbLE6F",
  "key4": "3iM92W5CeVG5y3NGVRGx4NL3dLtiBd8j6YMZ1DwKW1ErYnUTdf5eZZdxF5M38iWW9uqKcvojkf5SVfFRJ2LKoSSu",
  "key5": "4V2kDnkVMrcWfdLP4n5x4WfaYXce6UZUXtFWt5XKMVKV2WaRuuETKSnXS1Fr5mAcRTKmcyu5PecKA3ZGJHn7LyRG",
  "key6": "4gAE6xYufHxZJHNDzWypbErJX59fC8ayjTnQ4on3V6tvYGBxzvvaXLiqcvqpAcig9cyKmR7vq5RvivWaBwY13rFi",
  "key7": "5nW1pve4euvePbAE9P6GMfjt17M1A4iKrD1jb6UKAeqrmSDggvSM4fULCFdBcEHBSauQYBu4aBiQ1LxD4VgcpYkv",
  "key8": "4QDBqc9SkjwRZHAzLM7GyG32KdkLjGPQWMM83QdLhUrCGp9Lg5mjzyj4k1359Fz6eeVy2Zecd65R7HZezdJD1pxQ",
  "key9": "3u5dhepkaM2KZwyJTASnExFdb6ZzJUkN2PdGdcfYVHbDoDGgJWeNvTvgjp9GnojBBgEFrBB7bGsiXb6aDrbDpQJ1",
  "key10": "3NEcCrFft2EoLh3YgTFrGrtag7KmKB3DtMmxt8s7qeFoZyLXPWxxYoBc8D4SsecXixpdkcn4bNqU6VN5peQPwuKy",
  "key11": "2xtZNXg7o3uZGKgRDRao58EgcGgUDnZwEdvwne6qYc6C1v3bDmwD7mkUz2JDa74iNYpXBVGN4zQgp173199SSxX9",
  "key12": "iGP5ERLj6nq8616MokPFSyQEcYG7oi5DnCjzjnpqLemf8e5i37xd66RPgf2tckHfgPGCPvLRtfSmTQ5h2djjz3u",
  "key13": "2nAkKenGsM2Chr8XXVEFWas52ij3KouRLARZ2zg4wAGmrFcqLXkQ1QEMo5d2QiPcvhJxGuDsgRksDaebWGxWR8Xq",
  "key14": "2FHAYtCW2iqVNEJ8aGQ2gpSSDUeNA73vJMaF93sobbYAM5ZXnREjuKyDaeUj3wdgDL4vuNLjKdKCfxUV88N5VsHy",
  "key15": "2H411BJ7pnhEwQXm4xxnEdcaM4b8rCY8kDo3DHpWLgFV2eD6UUDiSzuP2rAnSGpEnAjkb1WpPhyYd1NJAwaTsZYx",
  "key16": "3EEt5j7WbtDFmHmmLGFsN9Pm6u48CTz1Z4AVYh3HXqnXEeMm4QP9Uh7GDcBgFBVcZjnnMKH9L1GgrSGAc3ingfLU",
  "key17": "4N8H31cx22myQNcHUPsC2JKoS6ADKr7LpFSA4TrYHMpNsByB8wfpxvgL4JRFFxz2rr8dArBmysgREU6jmGghkoWT",
  "key18": "2nUuuZsaH8G7ssn4RLeqhFxWKD18L7vFP3tPF7vbK8B5GMwrfJgJBGgoCMP7AEDxY9QFeeJpQd5BLaBcRHdg4bmW",
  "key19": "26V2GbnKJHRMMAhnypbmprpnPp2GLSpwF2qEBCcAk4MWirqT9qbf28t1yGL5SQfN1WuyS4SGav5vcNQTMqKqEwTa",
  "key20": "34vN6r64RjrzuqnYXbxPgD9UMWmSmz5JYf5RcHBordDqnbmft1xsWqYMAofyCjKtzjLedkSfBkof8NhqKYgygqHC",
  "key21": "65ZYzVozG4wfJXkQiaTY7zsvJCFu1YiMUHv873bEuBLTfqz8H1VkiuBJSbR2hoqhH5iZP1JoPwZovwbm4YVBJGx1",
  "key22": "2vsEPHTKWKz32MbCAsBT7caioJGKEkeVGHPLKnMjMGtwUaY9WDubq2He3uFYsvmobfcnfCyFMovPov6dvBSxTUE7",
  "key23": "2N4FN7TXA1KqqQaXWkwxmx3kez8DcNjgANX9WYotfVs3kcBNDrv9A78RkN8acFXGEY5DopfaKnAogaqzz3faMhk6",
  "key24": "4y14jhey582yf4dcgNT72pC5nXLTts14qge7zvGJKDJVqGsLX7FnjTsz7KXx73LPzT4Tj7VBYwXUddyGSDFLJ3dw",
  "key25": "2imHVsxSBLYJnUTyvQe43axNfLGL3XoTH8sc1ztEr1zi7K4LeAbP4dqCmpqMEsc5BBvbrXn1x1zmEvkBD9ZwhhMr",
  "key26": "4x1XdCnjXN6DtWN2vZuP3j2ESvLk9xrktG7S35cQz879HxdhHSEV82KdnWuR2DuxmVZbZx5czQxUrFVRc8bBbfxa",
  "key27": "3iRLwSEVCYtbbx34xajqKZsHfkQBHTiMaNU1YyBLFkepmUFKyKsebkedKrTCgckemueFLkEwJaRCPmdhL92tq7hQ",
  "key28": "2ZNxgbisRYqQw8kQaM5xsH2LgAcUDrMXeSnL8KdxTCpNQpWd9vc2YBSjgbyNKU7RJzs4uEZHimFZnQGb9yGAuaTQ",
  "key29": "5brG9aYXqK6xJjLwFXqVwM2nqzMJ6YwAt88VapbPr8Q8mZxXVt8AiPhXp2worNu171G6SiGAqZjWFp8TTeEBGkLC"
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
