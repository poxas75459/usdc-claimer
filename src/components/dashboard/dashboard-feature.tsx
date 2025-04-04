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
    "4SchpUZd5kwj5WFLuDQgKyD6epohrDTmbiSt45vNAfrPqSxnNZtxJzozb5emg2ByXD9cFrkuuXV6WX8HVkh715WR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8p7kRt3BSiUkcitJn5vKcSpyzZezpxHMFd8eSdr3Mr4Vop37pWixw6Wp1YAxUJBx2BLxQ8rvsTZEWPHMg6ubx6",
  "key1": "32Ue86Q3X5kFDveSNG63Pm7351cU9tG2Y4QYyaFKpV7aNwR339iorwAAHYJLiXp3yp8XFYeeJxcfHrsZr5nGmxAS",
  "key2": "5BhiPgtnkagb656kyC7gh97eEf41Liafya95RucKzjQ9KXFjH6JfvmmMLNwjsXnFNTrZVfaXFkXk86mWM7Q3R6HM",
  "key3": "2hhobBm35bHVtcLGVvxdvkVHPvamdedfCg1xdQevmRNDKFtKRdxtcvsVAiNaiH4xcsD1ZF66kAzsK9atG5i3azdh",
  "key4": "2waNXwxtLop16b4gzZr4EZcKpDgaNX8QqtTQ4kiJzYP7fr772756tkkeKD6tY8KKmSTcZhvPf3zGpAM32K82EK1U",
  "key5": "3L3TdDr4KcffyW8D3bGZvFD9tPq7QhtmkL9vwETBq34HBR6a9CffCqvQLUhkckPb2ytcik5AMBRgRnHeYiXnf7ac",
  "key6": "4ocvM2puN2x7MnKTtShttPu6bbYQueymmddsWwTR3Y2t5px21w7erWhdYfpd4CEuy5YjUrnpF4N4Qrh5xCWjLGMi",
  "key7": "5AjC3P3TRnBRUCVaoDtSxwZFDKYpqN4eAC9rVRB7wymryC4a9ZFk1HXno6K3YYJJ82DmL4KtYgKaHu29efdgjjHX",
  "key8": "2iXKuLBbSSwUG9VSqM49hPyuH947QoSRZb2bJje7pNe4BEAmyzTBBHNtWKiDyqyKF298k4sJL1ovcVkfepiewwLo",
  "key9": "3j4PcaxF8jP9A7SXdusPxfKGmtuNaX5v4uB8ECU7Yp2VSduXxTFHxbwsgKtTW3iPoX1p5DmkqUMiaKhgVJbT8wkN",
  "key10": "dfBaX76gShXX9BwTHsBpV3GUkDsYA1j6fCR7TpT1h9RXGYyDe1unhAeZWnSrdvPjA9GA9W9R7k2i9UMEiNJT1u6",
  "key11": "3oo5qvNrtQ5WSbip26fJmhgYK3YZY6CFX4PHYdKPW3h1EFECoT3X7y2BpCeAo3h4PmZMFwWhPmrERPoXneLv5GnF",
  "key12": "YqUJ5oUJtocZQcveNKxDGC8oBN1GpjKTFNXCqapzck1Psi32ywV1ZBfK5yYKzvdydNqR8vHDzECWEtfF9yAmEBM",
  "key13": "32ApNZR8h1vh9AKi1bCmwMSBUgYRC3qyidAQB5APD9WEr7MYaZfDvkdKxMVosMp5tEb35miioVnPgYq6EQiTU8r3",
  "key14": "3sfmi5QKNtDML1RRBufv88DBKiHD6YSkjVNq9by11ztxoU96btDYQTPVKpb9BTyE39RudnFsB4bfyT8BACR8MRps",
  "key15": "g3ZnR2sbuFJMHBXrZfSVndffsbLY8kMSS33tR177PFE1LLEgQegNDPqtbRT2oSyMM3wYS5tE4qDn1RM1t3ZkSuU",
  "key16": "5vHqE62FYeDxGerrnXjzrEoeAFQUVLxtaJ85o23P6LLzxZ1t2HJa3x9mqdAuiMQK1FiCjengLBXs8VxcmkNEd7NU",
  "key17": "51Eu5Vg4hqVN6mLbLr7a7d68r5riQtPLQCQWN8Vem8rcKi6RqdwcMdrCyZvjD6wgss89xXhbmooJCm1h9YR45yA9",
  "key18": "53XSLS694yagG7T3LeyEBquavKdqN7rdnkFXXoNUAGhk2bZGaEa5cReg7eoh7jn2d1rUDgdEf3mfKi4fvQUEuXrw",
  "key19": "5fXmGGpxRCBHiDThQeEbfuY3EJQwWxECk6MaXcXFRnG9m2rthv8RjSxmUo3sXYUM8SxZrJCHiRYFrfYf3gyciwGP",
  "key20": "5pVyavBzUwYDirpKs1X7sNxPXbF1EbQZXUGhUXEbroUK5E9iEQKdK1698AHCv4fE3Du3chNUKSHasprrGruvK3mr",
  "key21": "4xaPTBq1oETpcdzjW9RFxwuJBX28Xj3P2zCDYxbuKEPQ3xMwqnexGpZFt6MKZS9q63MAiHtRwPEBJBtSHM3FkU5h",
  "key22": "4PhDcV4jkmaqjaajfg651oGSvYZGA79FrGYLJ1WqqgMMUQ3VcsYTKY1CbcvfRDkmiiAxeWdQttXzUAaczbmSenus",
  "key23": "2jkhmmYdFnT7FhQGASwpr2Hk23NaRubTaZSwmmJKAtxobnAqKHmfVLezUKapBDRu2hrQRXRvFjc1BysHzHvxPAm1",
  "key24": "4tfso8n8BPoaxN7dEqbHJHBP2KLmLZ9Z36smNrzKm1qVedDCwgVGn4ZMHax7x4GQL79M4f23m97pwWyJY5DhbAD7",
  "key25": "56NVhGay3cNnd5kTvRiX72CPuc8DAbhA5FtdSbuQeWWVpqL1dG1nHVH9wjLZuUviMukUsjoFxVAxGBvtKpqHaRFd",
  "key26": "5rpZ17KbKbu5ZBaj5MyocEh8t3Wqy7cAVbW2jKgG3gtneCVf2n4hmdLveuWQkLrfEUK5jKnkwPrDJPXSUTMQewDf",
  "key27": "5AYeLCtieFJm3HvXAC26qAq5ycb4CNuHGpG8aAiJtTWWCN44fsngHagvHWJCq9o9FQQ8bDpn6YqQ5oe4GUnnMqBw"
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
