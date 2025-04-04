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
    "3wtQ6n5mD8D4njsvWEiB17PeLvKKmDiLUPteFMdAZyJG2yc1UPZbfr9iy4RGNw2ZCpQjD78yw6MXKYsHWZUQ5jMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HihSytGRVnfzL4kUa4mVPckbt5FNWSXP74EFVRAak9FuEp5J1agFVpnpgMeBVNeHhQuKyj7Th4XRgTmP7eNSpwV",
  "key1": "26ZNWou9RcaHPUy9KrewZkbivuoJviXKiafH2K3CJSF9j2RqUTFzFL3ACmbZhC58NPbNdw1teUiNVkgDN3vMi3t9",
  "key2": "5ji9LVj7u73cEYNq7mxAKxvkaa4kUuWDAeD8Dmek9XB5K5tBUiAEMeZHrdvCeA1JkSpB5RfkC9Pajw946WjG1uRR",
  "key3": "fXcxCGR1GCznSXdea8aunFpDpVSQMZeMskUT42HwHkad7ioXyCyXNFEm35egYB3bzx84u67WGyzcrg983Xbg96M",
  "key4": "Auz2ToPYpKrhgmYWgkr4jJPjQvaxnp9Jmcep6cm63s4fLHLXWmHBbkobjzio5nW8E2pQDi2nXevQQkxqrE5JfJT",
  "key5": "2DK5hGmjQDHLTbLxU6h41YnDwoD3yhf3EjmWanDttBJoBehwjncPFYju9AyyGkxnVsSZUPUwxwb9uonb6GNzw6Xv",
  "key6": "5wkgKPfYAkBEgsNfR4t7TDSGFC4iAUpWNNNhZqVmGDfB8e3FM1CKEbruAqm5VGAnYZnJHrrDZZH9MKbewj6Ue6Fx",
  "key7": "61J7bzkoXZrSN3PmvR4YVuGGUW1uhVZxt9g8HaLqHwUBMbRML2JH5koFP91b69BSrgEQfKaTZU1QQc92X4WUL79c",
  "key8": "5JJSRAX8PjpVT4cn6Ci3k8xjot7XmsiytWA1va5NSU2fKokNddP33LC278SV9ZCc2sdca8Bg3iVTR8Gz7EDngEwY",
  "key9": "5okVBCwqn5hfsbUEsAhA4FCzvbKbsEPSXQr9cqcnwhvjbhKMz4GX3Poq93CAyFtn7cpmpgu9k17dMUhZFEbtEd7x",
  "key10": "41aFC8cqfuFaamFRT8EeZ1wrChD9J7FsmPZPgadBK6FvAbQtD8voNU1hAJyWB8t1qF1RDJegjqTaGuM8yuAHGpch",
  "key11": "66uUXW4Aa5gyrdfcRfwfoNDNkzuRPBgpFXxX92rgs2shyS7gn1XrtM31DermjZzSJw7SjTT4Xx9Vp5v4foH97eQz",
  "key12": "2AxPJ2c2YhhtnbFSADHX13KdFSZ6B41JLBz23Wm4oBzUYZQYRZCQHLhonbbjjuMDJzV7UzBNXgfoo3YbGRctqfHH",
  "key13": "3NmrgmWuRdTtoCgZ7eV1fPtkGT7zuNuZtyxDa8LpqgZMjk4WnXJWegP1MPqQKTPmKJZcpRLZLRye6z7yaBX8tgZR",
  "key14": "AGzm2oLMHAq2jSLfD3xtcMWnjw2bHAfDHJKFm37oFaG9rjMvVpUGZE56gVA4c88S4brKi5GBkHMs21ci4i7Fyx4",
  "key15": "4Yd9Zz9FhHRV3GE6A4qWkPzsPMEDt25wrk3QxpF5rh7Ku8EFA5Ew6yyqs9BcPcHsKM4DhVQgMd3bkD2C3gd3LXiF",
  "key16": "5gedRQu88t26SyRoTewG5WAcsZAbrTXzaCXmVCsTK3Vsi8pCybU9YD9QfcizJLkQh7Amoz4gig4EBxX7i6H39L7a",
  "key17": "38GKiaoCnNKmBtoragK399U6orHSMq1xDRQ3zSFhmSEUGStYmUqHr6AADzNfaR1Tm2xt3cq1SCZoH2WJmZq3EmuX",
  "key18": "3bte58xDQWouT1GNrpMbSwKqLoV1aFqZdSmudLMSNr5eJRaDzzSAP5cJFBPPYjuBTDnme7ShdapZaWo98M77AEo8",
  "key19": "5AqV5ZCevRTw7vh6fVxu2kbjYVEkURTcJZFHmUhwadpKoNTDLjEffHcRqpLduYz6vAaGqqxFsjPqCZ5KEG5jMZdv",
  "key20": "oMjGZj4uuM1kSAXQmeGDZ8sGUwKBQZSeZx69dM2cUPNidZNnzhmD8CQEGhsPXWgVgVWbnejYXWoiJCRwiN4JaKF",
  "key21": "4czYuU8rNL9aMtipVq165PUt1EPFna7aX91YzC8LYQ79bnuTwK9WNVXayFQmrCUZTEcb62h993b4nTVh6NFfSVei",
  "key22": "PDDY9Xm28kSRo3Qndz9xg5hvZGqkVSXqXY1GGH4esGTDzXXpePnP164V7hQyu9CdTzQMJzkGp1WLGDTwXQdjUiL",
  "key23": "61zgPFA8SyttXeSFt4Xysk3dqnkbkSiajugmg2bYw1shuYKFKssLfTigm2cv9ZWHFf7bxfRyacprAbHkNo8pbept",
  "key24": "4geKhjZgqD2HWKRLbWVdjbAiWpBumLfBVN8yMt5cCJZHptmVAtezVPv2xWAcB6gaeBF6fU8jY8wexagD9pdzi5Nq",
  "key25": "2y67R93Gpaz7buRWdtyifW2BMfWor7R865WQ2hGeJLbbMpfF47q2zuBqnJZz3mFqLrnTxMeVJS4tMFnvP9B616eK"
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
