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
    "4Y89p2JP7UYYcB4TRjXiWPthT3wxDVPKHCqGcUEYW4XvCxwYpTTFrsc4659bzKvaFtjm4GqJ83EUaS2oyYA3iayG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qQgus7D2PjjSvs79pKKgbtSPZsQjFKLS4iG8swGMKWxYRTviTAkRXRaSKNqSkmr3Zpmqi9d6s21u5LKfhoRZV2C",
  "key1": "4Xu1EfvPiY5MzNjFYMkbb2umLYJNXAR4DLDrVTahTNmAshdspHT6bbW17vnfGrU2gj8yw36wD4CeXYra7Z8Uncmy",
  "key2": "aGsD9H4EaHoMYipge1fpszbaWSf9zwqLqQp1965R2Q7Jd5eHvtDKdxxWbi4LMdQKnuvYWc8MDrE9fj3LsZFBTrf",
  "key3": "2Mtb6Q7ERNiMZKAnDtL67hJ5TYRek1iyLAazURSpbBshw4hnh9mX3Sd3bw6ScjXN6RcKQZ4orm2wEL2ciERFKLRJ",
  "key4": "4AppqDLW78Zs6u3B6PkjawLcmc5JvBWCo4GcEcMGUG52oAoXBawwRZA3qVVmeSVqGM4T1uC1vNwzoRBYRKfwcmkJ",
  "key5": "5ufaaHiNTrMR2vYbite4NZweHMpNXb2MerksVFpUGkBbyF8GcV2frPvjJMB1z71uFmbTTGMGXRTfNB2oWBy1E7Md",
  "key6": "2NyFEfPRJSkacipj6Zp9Ba8dA3hL9UwVKpGU45FUrs8vNHevPbNA7PzBYpvRTL95aXCzppfqaiByCXTDqA7MfTem",
  "key7": "4bQPPb6aoMnu8rvZXhxFowgEoXpdQD8oarDfnRmem7q6M4CHFhA1NFvAKzJreot6Z3Nnbo7gWnFbnMhtXMtFeMgR",
  "key8": "2NBZQxksLSYHbubnAzuwcAaxHuqFGCrLBM2gwq8QcNWVVPJkNfMocFu8XBBDRjboCRpdrcDPb1bTDDQUQgQ4L5pD",
  "key9": "5PXT3d8UNcN2LkewCLmUZKQM9uovz4vCFq4w1dSbXJhZzZnH1oV1VSSWKLCpLGwPSQSG6UyZHRX6n2BSFExFDiUj",
  "key10": "2an1WYyBQd3xmJKp8QRDHs8RDZ7sa1mKPYG2JDvbyKLiMMfjWN5inGEQsVW7tt4d8cbzxUFYdnMJANnqrxJdXmeQ",
  "key11": "2f8bpgrfFnVpxvCxHPe4Vmie5j1jYHLS3EuFQ7FWL1EcwAjJDaBiEmvGZ4ZPCDCXuvQ8Jfswuj6hYQc8cVe4vyEM",
  "key12": "4MHew2XvfoJoVaWvkLnxAuGkBnzXmHWsssWDYUbZaWq3Gzf27AKQNJLKZJEsgE6Jzeo6hy9XBTsxVZv2psz9BgQC",
  "key13": "2hmtRrrtuYWxySVLexNcPgXsQxyWkuEvaQaMF3iHhQMky1QPDM17YNqK215y3GJVJhqypocK922FJCkVLSbvRnRQ",
  "key14": "23Qah4FMiUCb4RzeGQdbL2ZwSmTEmhBJh4Dmzt2M8DfnoqieCSDbwaphGeFV9RWydvxX4EPP9mcVUqGUn1t1pDwM",
  "key15": "3HGhSiQB6zjGDs1d3xZXQg5xX5e1pzxSogBzVuekpP2RLrT4THnWmko5Vj1m4QHHT7uouUMUTZz9eyZQY1mFdXcB",
  "key16": "64cihjcriaTe5iNCeegj4qdzzxa8KxMWMmk6kcZySkkMW3R8gsvEVQbKHahZZskPt6VvtrDgnancHPjK4rJcxTLb",
  "key17": "4kRS24Q6ScWnyVmBWWsQJPNh2yzgigYDvjby6DXiiSwNU3SV31VWrDKe1M6nbTCmyeZcHEX6n7MeRkN9CmphwcoV",
  "key18": "273nriayt44yykqFAKj48sm2Fati1mLSimWMMJSkGmgZRjyxCCZSFuYKCmZ4PACkrn3WCaMHHMK9wfUo7UrVUuRT",
  "key19": "5TMMvN5JFwZ1fKrmedHHo6W2wGcWRrREDn6VPz8uW2NBQJ8WThnDSrNjg4g9odjPELtHxEMxgGDbMGidvVdUxVWr",
  "key20": "5B8JCo5SCGzq6cVWbyVSgqGbgwWYcpFJX1FKAHKM9mCov1izzn3ECyTxLg5gBF8gyrC2bczcMDDNeo5GQN6WBBHC",
  "key21": "3cYiGVGbWT8cormsDShmGCAAYPvhNbeSvv5mCyJHdTYWviuD9ozyCHG45KYYQujJJZRVoHvf6zp9Ng1uAYPJubcc",
  "key22": "5R2T3NiaxjB5aVqrCphNDJuqxTjTNpdm5oWHQtfx4TutQaSXD9Q5j57dvycpG35aJxm3a6Gc7eNECGUMNL91r4yz",
  "key23": "3ZnNwqiMzoqYcpf6D8EYDKc3swy2398c8XoLkaoawLNbrMtjjdmVQspjhHdWEjoBsY3kbejXqDgodAqJqBsYXCW1",
  "key24": "xyxrtbkGxdisb3UySS9miYcVDcYApmCaFwvaF5xAnfZfczHTtm7JYvJqNJQaDvwLj7cQvpnkeGeQnDFdkfPBpAm",
  "key25": "4S6A7NotcHP5kRNfN7ovJRVj4GzxAkAkjbshkFG8M53GaSuWk9yGsUiTb7qY3re8aoF5GeGs8L8Q9bd177c1Zhxm",
  "key26": "5GPkQnM53jnWhZ6jcEeimHxzv3YBnjD9wthvfyGdM2uUSMrDsgVs656Uy1quoCCEQhCHDhnnWB3SJMR8FpnLPbJ3",
  "key27": "2MRyaVyNtws6Tw7TspTzSb9YmMmBFNuGVa45mtwK2ypp6kiB2aDfxBxXDuRVRPMLAio6qNEBu9qohgjUgMdkzRf3",
  "key28": "3FPgf5Fbf6UmSQLKrg2A6A8rbPaCKWyP5Tu6qEoKsfjudz4C2pWTgLtJzwheD1zNMjdBAc8XoRVDiJXqP72CRerq",
  "key29": "48iiUD4MsVdbCbVMu5GnBXt1nKfhw9Jby2VB68j4VtqayCeBN1AdFaEuHURbyR57vx6iwxjDN6uiYsPDg9iqXXg7",
  "key30": "5vf4bNRSNfHGa3y65ab3JVmUKfTHBY3qfzYxMhC11vgj3CmD3Ax5jznG1JgGYxL8Z4X99mVnt3B2EyPzpGZQWQRZ",
  "key31": "3kkzVh5VaNsNup41rfTzg2dt3KUiekEEEQMwiEzP1JwQRtnuCw61eh35xtG4YHggDEHPa2zogz6MKt46rCzbKFfz"
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
