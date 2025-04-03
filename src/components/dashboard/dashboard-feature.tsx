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
    "5VLsQsWbuxmHaUfYmUF33HpneVwNFGjgdxsMgEubC3ninbE7q12fMppj7TBR35xWkNRbw2FsrXo9r7FjfXowevtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29akXwa1KFBVR6ZFXfyXT73aGiF7gEwwj6ZpD9dvnnXbrKn6CAbFPBmU6hkzPj6HPoPcVsX2e2WCMEx37uewfqKb",
  "key1": "2vJNVRaYWoAsuFDKU3zjMv8zf6ecsy4FBMV8FAhyGyZu5Y9KTSWcYaRxNyDBShc1P9tVH9oedWuKaCZkvzGj35gF",
  "key2": "4Zk5trpezk2VTo4yS1UZ3smDfYqLbrUoKncQsQsD22kVWsFpMUVposFKnCaCvTxhm5xviWFJXcRSbStpUZ7PVmNW",
  "key3": "2b1dnZegCox3fmo63zBAEVyR6caKQoBbAd3kj9CkHoy89huLeUW2Hr1ss31NiFu73btx6qP4FpXLGJe9Zc7w3LBc",
  "key4": "43VEpnQEuuJvzw8Mud94PyT2mBqoSAxK4jW73Bm23sjggADhR1DobahdbdU8zBF8d8sccZc7SBrmXfxcTD4TMBJr",
  "key5": "64LA1dL7VmwuMyyKuZu9BE2HzbpeK2WoZummga9YgMvqs9jFn48Vh7tr4MwqtSBhn4aSJPJ7DzW2KkF5pJaB8avi",
  "key6": "A1xZYLmRabQGcfytk7N7J9kzH2Rz5JxeJh6S2k3GK6wQ2YVQySb9Gy33FAo9atmsrysWWZQNpmewuTdjVjJocDD",
  "key7": "59c1EEBQHoXMkbdrisJF2ArfDAmwKKKfQf17nARd44Dgh187Dqp8cqMrUpbodFPWDd229nP1Dsu4A325qbaSbrw2",
  "key8": "3U4WknrzS93mypua3ZraFaXkwqxwUMFqQE1rdctrwuFkarosxTVzwQLgjJrFZDuMF31pqUVpfVordAamhb1kqJdZ",
  "key9": "5VyqiW7XEWqAySf1JZvwK4tn6vCVz9zvcYG67pSNbW5SbLX2JFzMwX1iw7JsBczsV8sM6GzoYhEG2DuSZTAT1Qk7",
  "key10": "hrpQvHYJQ46Fb5GrdFfL1UnmoQKdqTefPifTcGjWqYepDkt1ZHiGmA45xLtzUtUVWtaR4aEQyZER3gcT7QsS6om",
  "key11": "5BgPHJvydFhJwA3pmcpUohtMoFL2CJ77AUhLgfGvF7v6Wmms8GAVaAhATjR65BaBUEne65UHoJndmvQrAowodZvn",
  "key12": "2bCUcBNQ91DkpcTx9aXzeeVPcHYWK7vCLMrtdyrgg2WUBx1gf2FJhoTZNwQpmCh1LPWcGguFSvxZg7mHBytJnhsr",
  "key13": "5rXfPcB78kc9cu6i8HxZgFa59uscsfLSfpFu8sbZSTdkUdwXvjq323n67YrRUJNEPMcnaA4vWAQATBCPXpHG7LBi",
  "key14": "3ZHEsfn8m6zbpJ42TyQZ2TtrL3P4F43FVVhHWY6ywdEDHQq1D1UbGySHyK2uUUgijjRMtjwJvBfJZto8HH7P2Hak",
  "key15": "4qENX6aGeDQVq88RoDqkdmXL1Qv78ATMwgZPFzNfsHTsSyteRvKeycpMnc4pmny8247ZDMf6jsHVMsVtgBZGmSjW",
  "key16": "2jKx2wVvASzoJiEL5M3f3Dxp36B8YZJnnu1EKsH2KtgpuTnzekTVnwWs1GSqoijzn15ocVMDfZRhaRrjsX6S8c2B",
  "key17": "3jHDcw2Zx1yzAq4JTY2QZM23tvoZjxFN7vsDD6ssy82bKL4GWAPwnJryMrQKboB4EW3MWcrLpJ3SNJngDKR3Wxaj",
  "key18": "2u6AZe7CUuxdjTfaPFj2sjSfuRK2TRGk8vWBD7f7d3Ga7R8KCCfkudCjf2XXJ5CbW4Ea7ft1DNRKWn7u8HJwCicR",
  "key19": "3ufVRCzGkNEFrdE35efFqMJ1GZW3QyXrzKpE6MWBcTDNvcvPCHHLBoTKbe8CHRtsx9vpxK5iUxJy1h5pTZufJJuV",
  "key20": "4ejJCCCcvTzsqctj3bLLFMSMMEPsSQH1B8tVaP3nYbTxMryD4Ta6g1A6cjNdWqfGMSg95jDTRb6BvEDsvj329dky",
  "key21": "46bETwDMfjsGtocxeu4NQgEGy82QiBgx6NHb69E625pdKGLU78rwzyrZqTbWPdGqyvEtz59WXFKfd8FLyCoxGKbr",
  "key22": "4Ysv7ipBCoxpd5LCKT6PFF2xKtdTdZx7racbTv3A54MiP2FvJqRB2nnCNZLz2VkwgmbDW4QRVvY8buU1K8ZhXR9J",
  "key23": "YEdt227hWaxmRxXKaTUyJHELzxLbftSm8cw39udzStk7PNgTenqkLGxYLAa6feXYMPRyTzdFdQBcrv927dCeyU6",
  "key24": "487b8h9mnWJbMwkSiyrJHuxbxroSs4EJ21BbR5EpCvd97dohSw8BZhrBdYMBgaWsQuJFwf9qW6naXQiMX2zRFNEx",
  "key25": "4rqSR3LhJta4a6XQzQ3rtUELEv33bDRotkJbsYSUsRrnK9dGmZJqdjBYGaJxMFaon2fS5JLQn8hiadTE6kPce8G4",
  "key26": "4zmCLcLNUaTpirV4uGPEdewaZNJ4CLZ5jRFhk8w12p17QuvdhVBJzgrTM2LJqVzW31xT3izVj13afDfPaE7mhvm9",
  "key27": "J9YKGz1iBxu3HDhXWX51jnTshPxEJXxezFqRP8ADv1YgGkLgBfkjnpM2gWZSsahdKpv1cjX4Xg8NPBexfg1oEVy",
  "key28": "VGgtLqetEKrcHwSFZb1RHTWbMSJctB6ETVLTYwUwrqhPds3tZ6H8E9Psj49C24E8w3Z56n9XeY8Kh34WmZrt11S"
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
