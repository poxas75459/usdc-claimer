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
    "iNBwgLorPqKR77phy5sHm7W7rcmgWrxBEgYDCGiBBRm2o3f6Je6A5G1Hv732K4TAc3hJYhCeTeimVqJHeMHncGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uy6HRFML6jZNsreS2U2qZ4VwfgPp4mj4Gax5F5UnKQZjK1hjGGhNNWeATznDJJd6eDVhirhkPruhgueQoPetYyE",
  "key1": "6YSj7Nazua4HRpTzt2XSEFgaJSjZQNj7YDRT3poyrGm5mW6NcwxFF9vZFdMe91n6zncWXRePxZF7kxgSEMxLcE8",
  "key2": "42VFohEoP2EQXWbGAPrMJGdtKWoaD7Mx29echxemjAereBBKakLgjjNNPuoo8jh9N1yKkADTnEaKqNpeyWnbygAD",
  "key3": "3KknaYoePstp6KQSukqmHipm7eCEsSgvWTzSA61Q6m7NEhmUYx6PBMN6E7TQy8cwnFo1EMCdnGzymvkfDjH3E97",
  "key4": "RXDmfN5XmW8x3g4mx2MgB6gYgT7GSTh1266vS4QfU7H9G4prKroT2Cqoo2Q6Ej94JoCJjCLWnLpCovWXmD9LBq8",
  "key5": "uw5kTai27p8xbGmvsAtzWZD3sJjm8uCxDt9U4NUbMadRiY2wRLvS3oVANDNtHr4BLZPqFSHep8JDbuy2r6LXJWM",
  "key6": "66PRgvwib9BNMWKtee518akCdn5PreZp9F7XbhgQdBKpPXDs5bCfqg3TvrXhkNo1hLVEKf5EkZbVApLktGwtNWHJ",
  "key7": "2KgBZDcymYDFCL4c1hKkyq59t6kH6gtAveKBVwrU5SMDL1ertzuSwfyuUjbQNSWSMBXmHMdtJoziLW8Wj6CcKDTt",
  "key8": "45ZQadLSGrdbte1CS4kfCjVe5aUutHzF84AMcRcgpSptdkCjNSso38Ho9VaRoJMtttNQjoHbcNf54e6A9aNsBSdu",
  "key9": "4Y2sMZd7C1haSTndifs9aRufK6S4MiumZYuuyiGdRc1jwAAAQbwcdkGuuhUDto9tvyMV8AybVuvVqhVmUgJEmSDW",
  "key10": "4wzTJzKHwJZc7Lg4arLL2a7rPgDDyhcEGP2jUantjwn7BY5zJXm9uAe113TwJiCmWHyUdE9JpBFXnSs9R4Y1Gedn",
  "key11": "42ZkyawUtj7LBYaNuj4DUSJ8mZn5Xd9AjT3wAwHypLSRh1uy7YktRrhapGPsn4iqcSv3DvVaNVDL2bzgesCQ2PZ3",
  "key12": "3m6QwaAhtr8VeM6DcuS3AFQ5CQFqsBRDUkm9uaEVcYPojPabYBJfzhh1WLR3QgmRfmZfYrALRy1kpkU9urp95Zgd",
  "key13": "2S9xDQAsMhcZriA8N5yH1speuSLQM1Gjxk19chPR7vpAkH6Vwf3qgbuoLERrymTXcFtNDmgZKmWp6FVenKbZTpSk",
  "key14": "2Bd5nHX9X1N6uuJ7EAAG2chhPVCyrTka5io4cMayj6thmRzcCvzTBZLgtXBpm1yevbSigws81EW1RsYfFUmwPn5i",
  "key15": "ioMJykciQVau1ZZ3QmPaQYMediCdAdyxubgdvWrorzZV4XLeTomkNDmx5zLkgCAwtwpxtHdAQ5ygx3Db7kGdw9W",
  "key16": "2dkAGAT3GTLF69PSo5jysBr1hkN9UaMfetWnxBCtQtaKJ7ZvDqzUXjP6DrzLvfvxBC3sRAZfx17CzrgTsQUQrE33",
  "key17": "4MYawx61BVVfrPFnkdmDJgMm1tqM4pR6u8REFK2CeXofgQxpyD9xRyqmhkAE4xWx9KugyeEwKdXn6Ki3TC5vegeW",
  "key18": "3ozUU7fVnvs8opE9opYPUer74W2x75gmZgb1i73sGmbvKtViWDGSbxfpnRgYra6mWTM293hYktDXeWZqnjxp6aHo",
  "key19": "GDgCmXY1A7TbqXdde7bVpUMw2TL1p2bfc8Zeta99XW4nzsujEfXNqj2g3F4U6BTtW5fYcy25dHYaeDqGEJkT4Uz",
  "key20": "5iu2bEnouyW3gjor2p1oHP5nvE3d9ubEcECNujrFjxajQNvdRQSsNf4Kwb2Q6jgtfajsVbrsLaQ75f9QH3Z8cR68",
  "key21": "5zZ9D6mpDebGG6vXhAXCfV7YopyDp8QHsvvnKs4a32PGdgJiYVGeA6pHeXoZC4HtYk5iBR2yYBkRYFtuijGDPbD3",
  "key22": "2nujW5BmjY9GJrxJHCXM4iZ2sQWV7Fg4PVTducViQNkTVNoXFTwaQUe9r54sLxvf1KHxqBF5q7ZdPDEK9ZNqh2xr",
  "key23": "2zU4r3fh28r3PLPa83cNe8eWTCNQPo4aM95VreKxJ1qGLSHx7Rx8dL4LXukPwYcf6rFiFFzCjnd4n7mfNa7C3s26",
  "key24": "5ZD7YqE57QH2k3xELUaqsMxCoZ6igDxoNUFNiExN2BXyJ2URQvH8Rg14Dr59jVcqWEafkRwXtUmuWV8hFWctKjVC",
  "key25": "bA3QMoGwoVdt7bxiHTDHtE4wUiG3wTndF88evLL2KoBzVTskKVMWEeb1hSGBdQk8F7vhYid7E3bjXvPwPjWmtYs"
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
