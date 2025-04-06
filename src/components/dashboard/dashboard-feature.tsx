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
    "4qbx6gv2nzVeHP6VNGqEmbnkiTRqAhzTpEq3WanC5esesNGDJkQjVhWid8kNGBZ2pJszTXDDEBSvSmFHFa1CDS22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZqQWswkqXQxshRJH5MxxorFPm2tz7yA4KjcU9WfTCjkMvL6orHCj9uqPrc4WtL5YrpmNtfx1tyTjtsTZXwtdSW",
  "key1": "5dUXSRWQyjvq8uHLRvDfxdZheEiCo31aSFvqiExYUb81cAvmrYXrXiSy9WFFkdTnLSd6pHqd6qUpxA1qsEnD4GEb",
  "key2": "4zDtsFCGcuiLt9iZoKgtbMyX2aZGMyG18guqde1jV6vkA6sTM5oTCnUy6Cvk6Fh8rzvCp9SKSaRSk1iyjbJkM3mN",
  "key3": "44bTLRdorLfkweNnXx2q76ro7s8mwZjy21eMK9h33HQyv4mT738uzBtQjRaTRnynzMX5Pep15bGbdpf14BVkkHQ9",
  "key4": "32X4yH1VUK4RKP2fay93NjimNACm4PQ1qz2dzB8vGVUxPHft3n2dZrr81mWdMBA93A3exHKewYh4bTLP8q842F37",
  "key5": "58ZYwdmYjNHt5PZwmEYzc95dn4UGNvpnMJ2yidEYfL6dvq8Y7yto8BxijV8FEUZbyRW8FADtrZZSYbrAuXgkFUg3",
  "key6": "4JMiEVtdVezAUx8sfEBvvDyrfu2v9BwwzxrVBrQsJmfSyPmMWTyFD15xFFSjnjM7iJWJwgDRcveNLGPmYGKRvFwB",
  "key7": "2HcquHizFzfVU3nXnkkihEfSbecfBQDLqSMmULSMTwAAz7t3krrdRSFpxGjqfU6MGz5afsKaNJtRX1V32jihF7mL",
  "key8": "4jaShuemfiD4Tv2Btsh6xwf5vAepx6Nbi5AaivXY3SJ9xuFpVeoMem8zwK6CX5437GhBt4oZpTyuMYwUJZncwmss",
  "key9": "aS2YUekumjD1mpV1ZmZc8EDXYFikqLYyPEGPbf7gsehsnSNvf7q3YnB8BXavo7cBXA7xDjz2oJCpBHD3AL1Gxor",
  "key10": "2a6XLxDn1dAmnX9KLbgnkn32S2WRMJ1JFJmf5YinbQE3PiQLhf1JevJ8YFn4Uu7ZAcJazVRPRwCv2d8iGV6SKvN2",
  "key11": "2Rf7uvyiP4tx2uSGd4T29wnKsj7TsvUi9pV2RcmSXuWCXpGkNQDovP9gGhbLEPm7qvrxrXkPVjuaSx4evt9C9c1R",
  "key12": "3fEyQiw324miUs7Z4AokcanY7q1rmcKQos45SDrMLjfafLCVECNtMiNnDSSFwPKk2DGti6LiRzadDL6w5cEKf2wM",
  "key13": "36P4gVnZVQLh4ck4E5ML6aNmtz3LPP4dgGUeRHbuP7q7JdAeqgNynGzQ8fX48SS4qrd3KnXrHDzLzB6hDNifp69a",
  "key14": "3FWrcssv8bpb2eCBXubDyt9KfA2T2VgLJwoFETYxxRv9XpWNjHZbiPz3eBFu92aDbzTH7oEoaJyVJKP5eBDqejK4",
  "key15": "5jNXpSWHdpskinnHKnG3PFLgkQkjh3QAKnVNDSSUnZdnVg3SxwERs8HkQVx2Zsajr2Sdk3U1ggbAbHPSecFjJ4aJ",
  "key16": "5YA68qt7FuMoguPf4ni6imZZgLNtujx3pT8NVhYNNFuy82RrmNc5aYfKL4zK4oLgE2wXPYv3uaS4vGFyrtwj7DJE",
  "key17": "4cH2H44Vznsj2wLnq4vptPaswNEBrS4irdfejoYGrgyVLNpiniPaZ2pf9mpUWgcTqGuAcb3BZCG2xRRWNKmkomsg",
  "key18": "3iL2Bo9UoCWkXxzSzNqNe1gNiH9d937C3edwmgWCaxSL7okty8cAnznE5BJ3Vb4s2nbTKDH9wWzhpnpTBR89Mkze",
  "key19": "5FrgoG2fqSJnhbfsFZjnDrwLy4EG5Ud35TZmsr6SCAtnMvNqgx3NmhQgjZNFGzCgJTzdBuy9mA6chBbKkC3uxtWc",
  "key20": "3QbWxH43jReKC4V59mYivSCG2WuAWy3RdnXHxTUtyYLCTfXCFK8mt89e2GTcJMFAnRXf6p2ksKtvv2FAGfUPXvHC",
  "key21": "2LrABsWWdmHzwgYDoJj4BMoxbTcRWzZUuUdeCg2kPB5KfaLiNY2fmGriFJ6V2Swts2FwPXi6DRTM7MwKprjME6b6",
  "key22": "2FHYAPGgxu1YXHRARCFJ13K1WyyLEZSH3RkpkgwfMTWRus7ZJkZ2WLFaDdDudcPW95icyVXfW764kqibCFVWUgXx",
  "key23": "5hjGmooc3UjDLYwBMVfzcFvWfvDHzpX2AkF171qMMEqbSmBkQvAe3dR8KgVrdFNzH4ikAp33i654ztQ4uYkRD1qy",
  "key24": "2YtCVZoygRQKhokP2EXgHzv2Cf4oVMGhL5KEWBq4uYYyK5GZTwuHRAFY8RsUrZ363dMeVtbJKjhZYaQ6qE3GMpTR",
  "key25": "35nw9h52FsUTvC8ZhGNWha1ZZsWU8HBhS3FQ25bbMcu4FuABCqNZkTzorhhSKqtCWQJZfxTkSQTBFmei2db6iipd",
  "key26": "4UiWadfDK8Q4WXjPhNq7NitBh5RaZ7LK2BrTMPM4eHoppqx5QmtBkqxnk6TvXE5giT8RSNREmPyhSnrH9EdJ9pgv",
  "key27": "tCbsbMV5kqqBsFHmSMfkoHmLTLmfeUjpTSsQAw54vLqjXARkUDjGDR3MwWg4r6uXWs5tiD5QdA7fcAZjTSzGAYw",
  "key28": "fivrCgX9hgr1onxsdiCBn4X6NfbtoKpDVPnZo3DEe1Z6wBvV8CCCh1paqH2oCzRnSBRzyQzvftCeNHgj9Ny4NTr",
  "key29": "5W2E5cDgLj49VuBKUwLVnFbGk82RMGMidfHqBNYLAT5B3WsuVbmGSf9r8YrDpD5LWQNM2pRoZHMW69mSSkL8jpME"
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
