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
    "ZpmY1U3ovimoXjoJkPSfanJFTHCxpQCBqwCeEwGDXUCPZUKQtcXHrb6FM5dDosgb1ztRQkNzKrWx9qmoTyyuFtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5dFCTwtEW78qWvWFif4pxPhtRfTYaZWm2gmQjJu4CcYgWKiV1tg2RemHu3ePD8kVrjQePR9sN9cDwXAsFDaVCm",
  "key1": "2bN9VcjeXFgy2vTLGPvzzGrScvvjyqP37rVjn4EyWKBY3nV2acWsdFQntKFnfN4HMhr5P2Vg9K1rYMYDNyGUrr5",
  "key2": "3DEcdfet4kSSmRwc7GhL9Yx3Lo9mp9CtWrt2HRK9aJKm85zWKZGvKdagm9g9jyr6h7pET3puWYpikYP9j47efxqo",
  "key3": "3XRajk3K6VfNzKPPQPkeKDtXSSeTcTWYLZxoTCkEv3FNM9n7N3vBU48LwucABmXBTLdDUwMWoDjuYKjukJzws8gz",
  "key4": "5EZALJukUzGF8myHhNfgrhDToboVAA98zBvWFYQLQjwjdEtgCdrgo1sq5Bc5pRsFJr8mJ6HtPqwu3EMrsQHV6Fyi",
  "key5": "4K42WPP48uAkdrxz7U1inwpYPyUNmEHBwTw2zvqeqF185XqDApB7XdAPysn51uRphivCkTztuUuHJP5sTjegkxUW",
  "key6": "4nt39b3jX2q2hZMVXmH6qJHaidb6twXFuFG8PHGGTniSt7bUNgffhH4jLnKjsUUxmpvPtwp5gskuQmEEypFapcEt",
  "key7": "3ughgryrBTTKonUSU3QzbN9RtbXDed95Yvxt6kKZ97H188dzSx2jsS7hEJYGRCNAKfKoGvcRpZDhrWnAqFhAzXdU",
  "key8": "44ukM3xZPsb8w2fBTjaKgVUHrHahdfdcFf81BzmucN8mZkxkP531bDnKDtW6sM7AEGUmBZa39qnk3gs9JxzdDNZk",
  "key9": "33MFVV4GcYbeS68AZBqmpZEr1xv5cYRpQkAYSA2HQuhGKLbvR1xnV2AcVvkRsTtW1fTQpd46xJHRTDAHqvMCJsP",
  "key10": "4Q4hP9yqEQwqdySQh5fAtsY1MBAJpcpzNZsGPcZHz5jMJpiHap8HM68D1eAEnADAZa3vHMWun3mjZ8JGhPnWj1Jh",
  "key11": "5F51y4bvvj2bzSohKrm33af8kfsZXA1acS1Qq1ANg7gyExp7qPTzrkvUyHz75C2T3XFSatWwbMxnsrkZ1ZnBtwzH",
  "key12": "4keFBjh3nxemNZ4eGqxf1z3ZWKFbseiZdUvC66Ey3pnmegwFE8mvZ9wguhC6DBC11ffJgCC3ySBWMahnoVHookrP",
  "key13": "2EqdjsQgmuSbEMJrae6euuy7sGJchqUQA7GHSvRLkTiDpNQXrx23x5AfhEzr8uwvtM3ypA1CYuX4HMz5yHhJx4Ga",
  "key14": "5fvmiqmsXbxGZrsxBu5C6iErmQSoySrPACEw34UvdjJTLwTkVW33WBkWJHi7CycyHSWp6fDTcv7awDMk8SMU3M8N",
  "key15": "2Fmu7R2PHbNHwVzNcUbcZXYVYHPXrK9d2yu7eNdsLysiTe1AUEVuYYNNiT4mXJCSfHiSPjJKMtJfrtr2jaauNyUZ",
  "key16": "47nQ8iVL9dEoT1ZFm18LepT3BqtSRfB9vH7f3gzB13kBZUAKmRHvyDgdqHSBpvdgqQb3zcFAnynmEmJK9ai3orpe",
  "key17": "3PmeWcN1VmioqCYCUgapTLPoNAqT29aMA48XXS7koKbn4jiBVQddCptvYtc1So8Kn2854WgfT4YaSfEdXv1DqLQv",
  "key18": "3FwW4WCKvbXM9AuBfAiK14HqXxkRvkHFZc3pGQd1iL3CoGPkEJDvp7CDYm4yjq3KseJw11frFb8kk1d8j1bu2Zfd",
  "key19": "3LLtCnjCULa3y8KBHY6udtzdZAWkn5HTGdL54Vnro8JdpJpfjbCxUXvsjqFg2n2mzoqEazbbwHF33cyN77Zr1fGa",
  "key20": "2j9HNCcbj3hu2vTmDLGog7mKDrTFhfqgNnaEBY368WBrjuE8R6gHiqwQFmEopWNAE71awtxvwLXFveEbuP8mxusN",
  "key21": "2meKXFvesqox32dh6JZ2ThK41PdAad4cjpEApmVKM6qfD1vwb7oWtd5oPwWwgeiZoFSBbi8uBkWnSqLPoy3Wca7K",
  "key22": "3finRKEVFPwTrnpEWeeuaiB73Yd7cWUrucKPDTiV3PVhy2EAAfKHSBzkM1BkNmSNYgSbPnqqZC1jSgfprW3HZGuf",
  "key23": "636aagBvtBo29JUYdPJKypq4nKE8xVvkSPcCwb5MYWFQt7gyih4qMJGYoxKCYUaJosmjradJBAQ9whJTUy5tVfv3",
  "key24": "3bBjyeTSjMohUMzXPC1yXunXxmBMpuMWmQ7Wfcdm6YCt6uLAR23gfCMqqQgTomiNnH83UMWwmBfZY6zQsbcKuJXq",
  "key25": "5E1usBLicgwpmvz7XUjLsCt2erqZGXcEYagMnJLsXyh1pFZ6QGnvEsMNSXMpPgfjtLMHQvCL3u9iPjiWXa3gfHw1",
  "key26": "uuGBXv8vhfKb2nVza1eGZA3HcbMz497oSZDPRB5jMg8QMBxq861sVzEc6MHtzbv43igXBkzcMumo6fx5qmxr3LS",
  "key27": "36QbrFYPAApD731CNgo4yMEhKwQXu7xmY94HM1EYLZddPV8y6of13oSk5GmHRgyVXMvGACSSsogsBh2uQTGPKtNx",
  "key28": "4C9rcJ6STKHgC1aEzgxfYRtu72VhicPRFFw1dxPqYZoEVaoB88nQL7wGrPnazj6tzLcPqSSG9mU32hj3PkT1yuyH",
  "key29": "3N2XZYuzTZEC1fDZJt28NhrHpic9nVbHee8FqMLrpeGXT5YG9XHsewDq98c4up9yRCZYRB79iWTEsbNmF3YbfsXt",
  "key30": "2TzGBvDZLTND52H9Lj7tffNLmi8bU7iDzH3DbdtuXT3X4Vg8nbRdoL8MYLr38KDv7BWcs2KG7HaCM7rEruihXLUi",
  "key31": "5Uw62edVv7RttsDFHrh71y19VPMyZ4xRQF9Z8bxGYxHrwZB3BxfBFHd1Xvg3A4ooHH7XHJVdi4uQZGDNQW2Vt3xj",
  "key32": "5J9fTg2Z8wJ1b9ikV6gcjSTBjCSi3jC31zPs1L4ZYvxvZxkRc2rTM2grCB5RM39WS56bLFc3iMvXfmBTavbFNhoX",
  "key33": "2meNd8E8L4Hcw1bVErCistbdUQMHse9PyK5pkWUPJYivnd73e91HePGag9mM2G4xAWDCqPqAU6mjVjPrxQKcwtht"
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
