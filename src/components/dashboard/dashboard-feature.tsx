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
    "ZU5iLcyojUKAraPZqpfBh3NBg8immkibA9ZUpVDd4opwcwRmfpZmmnzVF3RFCbseAnvoBWUXh2KC9pVBSLKUXS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXuVZpQkhzsPyjqthbnuK5wxgLB8bVmwRBMAQzhMCKRyNN3k93K149wiqeUVxTMEEQSwC6s5Kc3dz3YVnNA97sS",
  "key1": "4aC5PTExc2oR7kYpbdQjrM4rFYsmHLJZJUKQdd21xKTcUygbgovDwEJCbj6pVNToyvvCVeJrRpc2WSXoNNk5jTrC",
  "key2": "5dfshUWkKKTkVLmtaXYAyoHdhY2fVSLvXRJRCVW7tXCadKwZYUGPbWUb7bUAnypxLNEeW38ckQMaQfpQM2f5YCkT",
  "key3": "37wrGwfK3m1eYKCBDKaDmJBfApprT94uRKnjpHr8GP9ioJ8HwyPoY1fxcJtLDwL6riSAUfYKb5yuKXkD2jc4KYzp",
  "key4": "3siKEZmf4CyVhgCWAE1EP2H2hSpcPU5xvtzdojPTd9ggLoKnVwsBM1MjVNYVjZcZjoEyzYse7kAZ5u2m47zN9RLR",
  "key5": "2ib8u2EcrhTdB5JBUU8VQiCEvbJaJa7fbYbSXHxpeFanFi9PkQ7Kd9rP526rq7w9GobNhkrDfRJGJQoWUH3qezTu",
  "key6": "2gw4AK1HenxNxK6rX2nA3zaWyb1cCq47z3ALVx63X5BdxFM2UEuSGWKcvBPVqhS1sC54pwV5vUqSKBHLoiQkpXsT",
  "key7": "3v7ZxG325uWyUr8kFgSziANSMTd64zuWALntXMs3uDAwoLjGsozj4njnV7YbMjUMUXy71UeTEDnsJaAnE9mZjVdf",
  "key8": "3hsTDYE9G4wgSVVEKKHEdmamzdhzMZtZsSvKWJXCa1TDYS5cFcZ89gGT5xjEQBDQKYWhao599NGyrSyGcG9djk3X",
  "key9": "3rrR4DDXtHt1DtA7HhWYXa4AUenty3dG9mN5JbkrCikmZC2LF8BjuaNfiKhBhgdR2CpsTotSEBk3FckGQuGyLRFb",
  "key10": "2DxCmyqr7GHJet7wxBZxYJZNpev4eUnKa3ASQcPwQqZZ3imZ4KWgxvZRo7haG8RrfFwePq4TJ81rNrRLq9iXdGwm",
  "key11": "2zbyJJkh998csvVqjr9tJJ54kHe2pUPA7yX8HG4wYjwTDLZ2bfkgWY5hdvCLY9KTQKnonK62uv8Jw6T2GBZf6uj1",
  "key12": "37kx6xH1GghGqimbvE3AbdAvDitiLH4iRYmfFuSGnjMY4dSQHxBqetgwqtPtDzcwB54hpakWJpbv451JbuKNKsGX",
  "key13": "3LFuskq3czCL4ZFrvkPG6mkz9H5zoaGQ726x3FHs1RdroL2ZK5jJe65FZMmmcpus9jSHj3tNTpjhRx2vpbUauwZB",
  "key14": "3tcxXvcWpPXKK45RRTk36HbRX56LZv93i8ebS6UT9Vd3NvPNDUyXQR5ajbYs6XSGQYvBZJDsCxgqxLHtUpr95139",
  "key15": "LMqHSg4HXMWc2disysNMS5AYBttmKgaA9Jd3rt3MGHYzLrnGE9eVEHf8Qt4uZovfbvgDTp6xCrFRKADHWNjD1Jc",
  "key16": "4QSQKMYZWsB2vz3cDM4p3SpWSPMDV6d749wJw7VDiz2HZUDXEc5irZYs1tp4H4rn9fawLwYSExNhNp4Rt5T4Uu6h",
  "key17": "66oJ97sQRBHiyY4BBFs5KAsoJH6eJqYjiLvoUudfD88kf4smzkpZ93zfyHPPC7M9c7v6qAUE5DL6cMEdvbxqZb3S",
  "key18": "iucaubgniPAir97t2hyxcgzPLS5HoPtCpBtMrqBhPDrwJe4BSuhEtXo1v9wUCBzoFUTuS5QmXgss26zGDTJNiaz",
  "key19": "3UcmKTVEcqheFKLcfBqzN7H63KnEYmMh5UuYAULY5c5NZmzrfjUfFQKYGhewHWANLB4qNGNHw67jDk6gteRu5XbY",
  "key20": "21sXXtRWbKYiAdSM2RYeVQBmLzHAdz5HZn9bbsg8pnJdP79Z93Qa7BMpmMujesw7PGv38wZtSFYJz3ysuUqvzuvh",
  "key21": "4RkGSKxMMVKw49eDDUo7uodhaVSLG2sLUPxQ6nyNvTamfo1RmtuPJbz6f2bjLgYieey3jAGZ1j6PsXuv2sioeJjm",
  "key22": "5rYSfncXgkMnQzXRCvUEJqQQi8DE5qrQoqBhpQLkFsyJymdEvJT8KX6de4VBDFiFRUGsaEcCbL75jeA214JzYJVL",
  "key23": "QfrvYSvXuqTPMpyMGcao3u8zr7N3hq5PGFYyWfiywtF9tsiuFFwrccMzxrRfbWJXAjzqSDVVMmc5pswrab3iftT",
  "key24": "444vyLAWNbFH48X3FHEa3bLpFZvFNAvYGmevFjmq2nFrEeQw3Aed5BFGEq3FREbLV1EHS4c1VuYCcF4yTD4rvyw7",
  "key25": "Hp4ejuzU2b575KYFbmEVHkKvRmDUNAqHyvYVkxZqmbfJqAfkpqCCu5v5bL5csd78ySpQsShCHiqEz68i6jvTw4f"
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
