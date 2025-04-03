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
    "4JhUvtKpaZUfDDqbYcgqokUvvq2vLJim9p8bdV5NBvZoqAzwyyQamB4V6nG149rUqoM7Qehj5FEfUJr9MeHx9R6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gi7tJg2wFym9RC7cikU8vGFNT9PetQPNeipT6V5ZEZWs4tSuBAEjK2mAYtxiF6YtbDDE1R4reWAUtoEDDNuk8dH",
  "key1": "26LMUgogdcH7D81HGVyyUF38FsCVH5ZEGTRxQx7mf8HTUQVCLEh28bKuJSPWNvfgaBbRfnoR3YDpxSefM7VMJSHM",
  "key2": "3JiPW1X1tXipCw4nReEgSPjFh3YEJMYWBHKiwyk8CqhsnboZpMziveYdgo3A8m6Qv2BWoMuGahXtiS66z6JEbNfV",
  "key3": "4ahydhi6q9CmCLaBASUqKgVAbzxwDmRfD7bSExin5XBLUHpFmE3VUDm3wXTKhapMVbPGMP4DnAjtRQHtxATf2gC1",
  "key4": "464QeAHQPJFDwFz9KGkhpT9gp46j8fhyDzFaju8SaaNM9CcY9GJfaSsF17gdzDWdNvRJayGVhGST38VLGZJdxsuJ",
  "key5": "24sewGVS3F8ToeNK8cTNbkinUrtMk4twyxSK5JUGnt9hw3W4ywA6WLqMqCAJavcadzL6WaDE3h5ozTHbF9zRyzr9",
  "key6": "VnEw1NTnfjxFt9b4W9HbRPFx2G8L49FuVy9r5e6zZKNvbuMaL3VZ2MaJXfM179VTigxvWmwbdGfxN5t1F37Sxvs",
  "key7": "5RYb9qqadUTFTvcyntSho9VFzQAmQmjgmx73gKR3YWsyGR9sdN8BZEBD3oB7HJn3kVucRJZDyz8BytACyK6PuEL7",
  "key8": "3uMyQHbhaC1ztuRgEDrTQbo6Z826J87HRjhEwuztyipitGkKqYGqwWhayTztN8vygJLHJpoU1pv5tMSNKTVjF5Jw",
  "key9": "36Ug1ADuBcxaETckD6ajaLhbuqiAeo9uFz2W14eeh1YZwxuLw6WghkeY3MwHb4iCq3PNxUjNLwPU7BAuu5zvuG7r",
  "key10": "5GCvHZQJmdN2UiP3QoxunR3rkRRMCsms5g4YGP1a6pRdH3zQgq6P799Ujopp5v19ZiUJZtY1a6w3bye4cE4zfA4W",
  "key11": "pr9Cq78KFxt3N67L4Ymrfum19FgLKG6B9jKse7PJWF5E4VqfwsSDfvtfCgknJbU3jk64ubCoP5SegtostAYXhoC",
  "key12": "5PrwxYkaqQzCudPhbrVkB63PqJmE9MwpzpMG5q3gota1P6V2Q7i2bEirY9zRYvmEDyVszDxteGXpQBkvjgTGYEDF",
  "key13": "5YJNUjsLCM4KTZswWnJQ3x9U8Mnt7vgvjHtgSiUxXEPnQtpe4bjje9KHXgqNZwtHcnQGR5gkVQN2E11G4mKBzUvJ",
  "key14": "3JsmDLjshaGUisxt6N6FVnenZKECL2iupTUx7npJzm9HsJEsvV5LfqcnsjpSYC74CS9rVuHLnYbpoYT55LKxFqnS",
  "key15": "2CSM4WGr9mpubbsUAxinF5iXeQZvEWnCACTioH9FY45qMKqDhtHZW6AWDE8ujHdiXJfjHsi4oeDbZxE9bGUJSxs4",
  "key16": "3kJK7pftMptBppACKy1W9K64M41UWM6BoNaP9BdurWvBjW2E68d7xttqqk6UTVLiXKioUSiuPtHJKuU4kC9emQJ6",
  "key17": "4S8UwRUr4LfPdsD1vxCZTGeBCSm1FeCUaWbtW85bxB4g3tNtCHzAkKTnHw6m7ZcYQ5odcGAW8n7o48GKguWVxAYN",
  "key18": "2QLPnFv6mkzdLAqqpiKhNy9dCsxFa2izw54ddYhL3M82MsrLCvauF4gg1JJxu1m9LFdiah8hTTakUpS9qbeVRzbP",
  "key19": "3b1G4MVe4gGHRy2SUjsxgyxxciJ36WKgRrkK98LjBy7WEm3JZ2iy82ncYFX1AyzcSEfT7gh58vkLBMPow3yuQ8iB",
  "key20": "3Yg3QaCWx7y4Gu6HG6UHzAqDRthCq3TPeJwuZYC7ipRMiTBpnXfLZCtN6aCSsADNdfQRigQKFS8oYe8yYASc4r5S",
  "key21": "4PDGN8r6aJP6VnMcYSYSkxMoqwFynY9VKe9uZsNuwBLuLoRdJgY6orGCiLbAGC7czHyDehx8n7mhhgPwJUoD1aj6",
  "key22": "3kakmenxfjWVJnzcxDQPQreaFMjm19pE2xXgUdZry3pXbMPes2CKTW3GJtBqi2tbNPsUbhVx99D45UjLM6ZAgFXN",
  "key23": "35T1Hu85WGUcGUCDEbcY8XkZDNjbHrBhcx4MXM5jHsWM9pSi8ckEkP2nEvGiKAykumRhwuq9TVgjGmnChYqkithp",
  "key24": "caDzqkPBkZtoui6pNRZZ7dEC4iEqcZg91D4p7aGMSHf3cAFBWmmwnvNvnd6CzUaV7NHA7Cx29EY3SpjDVA5g38g",
  "key25": "2y5s1edndctauePDAGFpfrQrmWPKZZxKZ2iVzH28NvA4fGTkVSSR4gfv5Wrkez7A7yARDyAXspYvjUCUf9WRirbB",
  "key26": "tCPNcatzA44xD6EEne7HavHat9kEL9Y2sSQQXfUNiKmRPwP7P6BnA8cDe6XGKk15ejwSBJvSzpZw8GzqEKLgV2s"
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
