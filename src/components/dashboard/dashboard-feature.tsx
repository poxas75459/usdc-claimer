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
    "5cDjhB3h9dQJCvKzJjMFb54WqxQ3KZQ2oFS1xH3QUreLx2ZsuaUyvEJV96yyKhQVF58AjiincUZN2md6KSg4ee1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h89dvyiYRbXc5PerDiUkVcvGUjfaQ9Ug9cKTLxDwH9zpMKoJ33v6yU9oDt1pqdF2Bzdo2pzBCpBiE5V1eD2Gtb1",
  "key1": "4wxm9U2QwLRZHYSncU3BnY9fvJx4CGVBNXZ3FEnM4UFCtU3bnDi2vKJwuviBypepbcnBu1JADb1qcdPmRatnDQkW",
  "key2": "44d4KJ7P7uVzNAfbsno81RcPVyf9sKk99zX7JqdoKR2Yt515Xn3dRhM3eqqWxRXTKS1UPpFRf4DGYVwvKWFwvRbq",
  "key3": "5SarWq1EcTJRjai5KuSGUJBQFFThYDS3CfUP8QzmGohtct4cG9d3eTqS9QB2EGPwaAzuPFDMJXfyb7V27bhKSwxc",
  "key4": "3WEwV58tCun6umMyPEMZEqRnZESkC6yYoeDgRVCTT7hJnnAGtxq32iynqgfbfnBfTW5GrVzUuPR9PyGv6gLJSxx5",
  "key5": "3dfVyPT2SxD5LD6NqU2z4ihZaSz4BEVX9nJdkCibgHsRTDYHWwrDLbXGJZeWr5d6wkPsBQzQeJKAwS45Z4KvTLNt",
  "key6": "QytqwnePv7QQj5XqpknxrEaUacdzfWpQi8MQATP7TFtPjLGovu8Y8vXb75e1qmeG71jWNG8chpE6ArRSFbo6zZq",
  "key7": "5rCNmxn8juZvKvG9h88g9QbXfiGwmFyReVPwS2Y9qs3fwLUcMnMzui6P3ZNGRcu3gZ3rG11aDMapsxi1CyxKWQ16",
  "key8": "2YsAsnGMXgTMe1BGbzwkv1MXwjQKfzvUavQGMCgBqm97ErRxVeGCoeiobY7B4NYpC6Jbu3SDK8nL4pDQn7FiUdfq",
  "key9": "4XgEoLEc4CWDxeecK77o9fGysiec5Skh4Ytggft1r71aAPpD9gMArdtu2mb4No1vD3jyYggJ3RPLGdicpeWnmPM",
  "key10": "47XjsXYpY6inzwzVgTN321CdoKzd55nAuu6uhsNQQiLxa1NWS1yGkn3hkdYmDbFmTF4uTJTDAtwR1mgqxGSSNEM6",
  "key11": "54qmpsAxr25NHoPSVttbCxS9zKWKEGq1ZGrPsiJjexEoNvE5s61uyXnDGqdnMNnzm4ZFbukQzToXcXDikRXcviws",
  "key12": "2nkpbYE4AH6uYdwRhQ34DbGUUk1Y7iCovYsxtCgVxWqfV9P4BqJWQhtmKgn1MBpmk18U4jk1Gt43uomsjzqBy63N",
  "key13": "4he21RVtC9CdDKKs36MTxBFW4QpXdi7k1aLkytg5ntSUZnhEmZdTebn9HonJzxNX2beJnVXFq9PLrvqFTP5H8Cfm",
  "key14": "pNZkGxGt8ahfFGgry9VjobZJUqjVUA4cLVaitvF6WjTHhcGfhyw6KMytPu3TTeuvkbTpbBp3TWUPNmBY9R19ZjB",
  "key15": "3Rdmuw5CL7F7JQd5SN8jAYqrdfEAMfBAPM7WR32d5GbC3tcyempidWhLRLiQjupkz3xuSTCa7NfF8US8rhsgwUq",
  "key16": "41mRWZg6B1h3DmyQau6pFtdMecGvpSdrYxez5PEg86sxLr39eohPc3n9dBPrkd76i74LPsTzG7onCpCHAfzMUbgP",
  "key17": "52uFgHeci2WLxARX9mZAW4YV2AxXf2HH8jZ5UDfLZha3ZnndhZqKFFEvtQ2Sq99CeFVEZkkS6AX9jK6zCW7LsDNW",
  "key18": "2wXzU948VBix78SEvEBKMrPQ7XfgWGydfqEmUX6XtQb52rWG6GSiGpCSsaP4pv99YuU7t3c5rD5qeT6dRS68u8X6",
  "key19": "2ACFUEfXJUn3hrsGuhwY6acbdrKtAcbuUQQkHS9X9yiksfP75jNGStcVE5WRFabRqjwnCirixYhkwC5AGwh1oi37",
  "key20": "5K9FPeM2hjFquC5Zj1inLGF1jko8wxASugK594HJjjvBPhxgDTdXf9DwjFkZz8vUEUaJN2dtCVrwdHL376r1F9KF",
  "key21": "SUWznVH9CgqdBZb7rpgSWmBSg4jPEKRaNEd4h45TD5sjeWydxNkF1Kt94ZBpDTjfjQJs8ua913V9Xahw42gRHFC",
  "key22": "4vAkDCkwyDwswtRMew3TAZV4A4JVbh6hsCB8bRMWo5u4TABn6QBrsXEeSrBbnf1XS4WJsWnkEC2y92F7kz66SSDd",
  "key23": "3hDbZ1UopzetGyASPfMrr3tFevbccAcpemti3eiggqtYAYQ21dDi3iQNsVidc7W87b58m17t35uuv8BZLcyRjk2n",
  "key24": "5nj75SKHQsCSUtNYaKmhw4ikWaruFbnGeqo1wZgK4AkdDGQEdKEqhiN2nE3MuidUVt3Cw1pDRBT4u4EYNqDUGVD3",
  "key25": "3dzLp2KantNsRseBUPBGo5S99PKAZ17yPEzjYfV56MrvEGGArnXFNuKqfmNEyBmiYh2jmjDikMYVqvy7dWBpYwT2",
  "key26": "3Mj1rw47oDRT1n4Emqg1XFrgkQPhXZEdba7w5m4Menzasc9pZmECgS53B7g3MXAr9wSFaanhXpu7HVdeYXmXmnDT",
  "key27": "4VAfbNXk51c5dHGvj6Kx4KNAcmTiBCFXhfxwaRz2KZd1J2n3JH6DZCu76zCpcxCFGyf3UYgXL3pnMTp7Aptnjtau",
  "key28": "4gd4BkoASXGgC3KeJDv7AdU9KuWyfoohioC1jGuLWKtgGHHFW7LHpUvUcqL1NEV2NhTvqCVkY8pjcbsUr3u2KgZD",
  "key29": "5v2HULYERezg9Jpq9rqLPzS3RxKbc5vF6YQJ8JDrF9j252hnVeCsV2tTRRqy3aJXuuej2EYVKPj5c5k9GTzvKb6v",
  "key30": "3xMegzJo3vBCtMCSobnu6j5YQUn9BENd25s6Z48UsbZFgwnbamHp2MUpfbzerM2WsKot8GEFhyKF6j2cApqygWTr",
  "key31": "4fky66Jd4SmgQWCVhcgiA76iDoNBs4KTDUfCmsvDqFV1U1GubUzykyMD6nWJWLfvaybNiQQBaE7DsKoxcgh9sGCp",
  "key32": "51HqdWZ6kgys8xwT4MNxXiSTbPKovPRfLeDbpjthQLDXB8jAjRxGoTdrzn7EfgVeaKHRtj7hVHMW7AdVmVfD8sSB",
  "key33": "3JVXCPGUibgqf3e4ZcmHwXCsFc1VXo38yJQVb4kvCtBhSrrhuyr5Qiabpd7rHhr4h3AEptobUMXBkN9vaHHGTeSW",
  "key34": "2PtjyxB9pmCnH7E9H5uVA8pZYVSKevPovCo9dWrEW33EdH9wrt98iXiDFaTEVDT3z1FYHc7ZG9GLCiwZQbYTt9PH",
  "key35": "664GX9KxYbdLFCwVtCPqurU5Zss7JoQJTZoSTcmFtSnAUNY67zCG5FreX8a23iDcVN6QEPsz1d64161ZiaZKDS9C",
  "key36": "33prbNiixWRENQUuiAWaaJGPSEKnY6DyCzKgG2jjPTfMKR5qhfYHkWGrHXD9MBNxbxakxYzDDtsPXcLHa3FJi8dQ"
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
