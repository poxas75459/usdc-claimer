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
    "28M3F44wgSxePdEPZ2M4AmDtCcrX365U97RLG4kdHunquV2Jh12J2AeYEY3s77DNRURT3ygJ5PSyc4qrFfRH4qrR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBJDfhp6wsYfbx3VeCjpWsu6QMC3SKTvSGkgp7HJ5YqdcrvGaAp7yghiMmX9cgZ2mXX2c9z6dqogPgkUmZh16t2",
  "key1": "3NMgpnLuPxUR2n8mXX9tCMkevzp8pnyRrarPy5vTHzmmin9wDYhSCqQA6LijjvDy623wpJJAeASKvao5Xyp4RQZr",
  "key2": "4ENbfukKt2t6rnFw2zr6nEheqgimozJmGBAQH9DeXXgi2Me78uLp3URmvwmEZvMJiNSMUw6NLXfmGXPExaB7KpGg",
  "key3": "2PGb8jVSRcy6fUQgp1vAjYWvwrWsJzhP77JKNLP3Qq1jRUy64e2Vg6iwHYihLS4fPmDwhb5kYmuXHvFLXg6eES6k",
  "key4": "2DKxJsSasUmCjy4UVtmKA8fJkZXcFpqFV2EdULvL4jTHVPH9f3K12Tym8wqSbvLigftDm6LuXq2KSqfGoq85VvWn",
  "key5": "5XHLCj29Thy6kqLogRLqMCLB2QZTKdgM4jA6n7WgDmotBp3zTU3tTqa1GTAMyvxe2S7jzVfiarM2ByijzMiCVyqV",
  "key6": "2GTD3F2YWPcT3KHbSWfZC5B6qL3qqbznEKTYCqiB3zGJirDuiPAo5ptkNsac9Qc6aB4LSxbhxqtTHdeGHYBUEb9o",
  "key7": "2x3icjAfywhkpMaUwStzSkuYh1o9oM5kj6uu5x6WVAop4nt9ikJnuPWmeiHrFuckvPJ1nCNc4SPREqVFxp795ux",
  "key8": "2TVVktoY8wc7afbenm55uzFJstyNPKUaEDse9JsM7TKa1aBNM4Agb969Fgchqt7VdVoU6fb2xWkBcpx9Ld7Bx7zJ",
  "key9": "2AnCFJLgxnZroAYjMhrTaMPCcjnVR38BwsLkKLKhtXKFgnBickw2rM7b56DVXDpNKJqUnL2EqsyudNTuv7zzy2Ee",
  "key10": "2Sj9zUj49gXoeAc2hAb6XBf8YfPpBb3Mb9Dn1WgHk8ERPUqvduR4LnPpLGHtAVyKhW3oFZ6daYxGuqHDnuk4QY6F",
  "key11": "4Y5CMnmwgQ8EAEUSvb7DRrtwkYEuuGNdVRVGuusaNuC6rFCKvgkU23sZFRZnk1fWRJcBNHmpNb1PiZTXNYEJkT6w",
  "key12": "2s6hWZYfHQNxJAzVUJKxi5CGVDZzcR6JdqbrcAfigmtSSFMmnTiH5ywn2xrfcFw7Vt2i5Q7tjVmSiLxoRLaBj4mz",
  "key13": "3edah869NYkfkDutceAWxcJDymr8tDweRprr2FQzzX24BX7YCMw3diZD1MxHfaJVSBE5hhBTKwAKxyP8faC3iwwM",
  "key14": "55DaSb6JgJkPAPWRG98vFo7SgyCG5DFz3Js8QcpHCTzBJSHQvnDM8tkdWN8NttTuujUeKpiRcE7QjVy3226yud3Z",
  "key15": "79dvi1LLEgHgYFAPfBWzBJbvgpXLFdqJyiiEA2Po36PiZn36NPWMedXh8XiQrw2gSRBSUd8gmdXePt1Sq1ymko3",
  "key16": "3r1nz158FQ5PqDrap5vGqFDvudboFmZNzcCBHPpGAub9fzimVh4H2PixB6RSybBtVL3ZfccwZjQ15nisWkNPk2vY",
  "key17": "2Q4fqSWM63jAoKmeuWTeCkLFHLrRnNjgpJpkpmdEUvgfGzdiNqvLQtP1bTxs1j4wp3Dw4VRbV2CxWwNm2rFhPDUN",
  "key18": "3EJJK2V3Vf2xWEiJJJEztPxnDdPisKDZGyh5v4pfbRRJkBXNaCsXFUj9Rd6jnkFoL2x7zVDyhhuAPr6cLL2Ga678",
  "key19": "3siVMddRZ1cyhhZeBJ3xgF8RBBBhf5Fsvcbbv531GKSLKwcSNusq7M2QXk7kwhgUVELFtAfFe6tZM5yfJmDxmTDu",
  "key20": "2twjj6C9jYYucv6rAz4miCj5hnmBzEDnR8MVqt6Jus7Dy9nK8aDdEknmDkNqDRHBbvwRnvnhxM6ucsM2UhXLTwTH",
  "key21": "43pmqiifKfheZTd1J3KYfeGPCwQNnK6vzn1pNegq3XH4KFusWSn82R3fpffiVQqr7AvWTKycZptYomDEMH1QFeCR",
  "key22": "5CWBhhCWcvbdxemvh6hgca5xY1xAabL3CPAYZpRbiYZTTywaVDkw2zrMbaHP7XMa2hygPM7DTSbrbu8snAMFjmXR",
  "key23": "HjLxLgNmBKuYK2PP8xK4zk4yqgXKxzDWg9z8jGZ6ZzZfBvdJURnwZsvskjc8j1T859d9brHx1TxexEbjvDgiqRp",
  "key24": "EsWzNgHuQ6dhoQHj4HFfphH8Cb4AkH38tRALsf6x18sQSBvdmvzZpHd8cL1Jpqs4oQdQ8DK9U4LhLLbr8K6APZB",
  "key25": "5MiL3sSMUCe9CSXwN9catHbV76h5cyercmhCxKi5LPs9yhiqwFFLUUe96pqpBpsSyZzcMMutNvw2HNKFW4uyBiaN",
  "key26": "5wYjKb2z2AL8MncFG3FgS2X56tiUABVHAYgiYYBgpa1xGCGn6JKa3ghAMLSZ4kCLton7WRs1z3RD65FwYQrX9ivB",
  "key27": "kShedK48WnWsLnZtNtYk2ADEmhDbFYLaFaG3FLPfR8gKiPyznTaRLQkJ3ro4Pb4fV2UqaNepoPyHF8pjDMGBMfz",
  "key28": "M9jW6o2DLSnZj9TXqaE9pCpQpxD8ZftZFRwwwsKbbfRftAEJqyFGqtGo3H2BzyLhuiXL1o1fmepa4ZV4HfM2e4Z",
  "key29": "67X84xFX6QtWghv6YZPFF3TmhJ1v2xhuZJqejFuVHXQsDTMFjQFfPVzd1sEmxF2hzD8pmJrdiTssFnGyeSMiiVtP",
  "key30": "49bWqNqycdrZXVE4dxNUqjuMj4gSRsGiaDy8Uq2YxKYGX1fLUDrGJHkKB7w2MiymTs3i35dwqo8JXe5UrAc6Qoou",
  "key31": "2hRzAtTm9gwMQME97WzuaRCJKEShwrfrZRAztFpT6QvYZZXRP3QjXseoHyKPjCR68jrQ77hpSQXw6sgsQW8Enyum",
  "key32": "5YoykSEvdujpScczsW5y937JhgHaZqbS7kcwqrBEhVW7j5aKLY3VhfsjSSioNffDRawEv4dXmUZaf5Ds3Li9nC9v",
  "key33": "4Euygs53HVg2V3fWKXXLmtrUoQxg8BjJVez4hfA98rSMLJTH4BHRiEyxxPz3QBQ7tafNy9NZnaxgXZA9xHf6vN1j",
  "key34": "2RFqaXk24zDzBZkURLtdsun1nxCqpzbkdfN3dZuQDVKVNUDxQVLDbx57j6ofwYvs6b1z8Mfau5fPwkpoC9Bdywk2",
  "key35": "5z8na9gXiCebhzaJD65cdjhDWag8wkkAvrxe2M9tvRiGyDTDoV936MJQYNQuDFesNeKeDurFGywKojpwKS7NX7Yu",
  "key36": "4GpMzk7zuPKwzyETdJAo8EeqRrpCuXwNRLH2cheeyTHcZvfGGrDvsgWeEDjPBw5RzKdiPZX6oFq4eYbUUSeHVaXD",
  "key37": "3eBjQYtuksvtaHYthTrQKJxD1Df2y8v69fvkhQJ569NSU6WcXzAhx8DJNQNHEcYkDmCiCGWFfJT8SKRVDiGXpoL6",
  "key38": "4PJEXvEFXmWZ5Y9w1FRHTZBAhd8dWcMZpgf9AEomnPCkW7F23en4vjGcWMzczACEG49pHUAjb6QGhYc2vGuMDQH3",
  "key39": "5g4Gs5zz9CzzBtdr8xUQR773CxUZw9h67qrh2QNYtgoKC5ivVkiYjSLYRDHf4oNoFLa2p3X4GdRZDbBsJLQ48zjB",
  "key40": "3mU1QmfjkPKX3hbqdhdkfYR84fCopHHX7jZetCTFMShHUxKA1QWGHwtcGutprpKoVM7MEkwGgeP6DfvkQYPSyBBT",
  "key41": "3xroB4NaKZxtWTLGCvsQ1dKGgG6ha5cVdFjGspoCNcGZH8gA7Bs4woM21oXUTU3eiPv91KMgYiRoMq2yuHZefjUD",
  "key42": "55sQ5sseHnyu2Z9c1zxWxBmdrisC7aHEsgZUuweAec5Za6o9gk62fHA25xRTrxAn39KvVkaAGPRLWZmQWtyfq69L",
  "key43": "2tguwzqW7UaDXr7wXygZtVXYBUcLq4rgUEhxDUArMwLAbpHYZRgmC4FgEAho1Y4i4CUhjpYCWBrViSmQmp7T1GKv",
  "key44": "3HfYV6LfPP184NaLoc4CABHWuzwf2k5rSfYSwsSb6dHGiXDC7LyMwe5Rt8jUhTWEFs5fu9h4sLPDK7wznjH8RnaV",
  "key45": "3e9vcfHPRyCX2RZhaWay6veiB8AXUSSrsxUV4TAUGNwX6ro4MXwRLWZs4vHkpwDxr1peV6eetWguui2kiU7ZbAhq",
  "key46": "538xC2bBwY62GC1aAxLoiTq7rwgbYpkqTBLEoYz18o8nsGgMXqCvJKW8fw42FnpLaDPUXAktpEkfq4Ve1mvbKn2x"
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
