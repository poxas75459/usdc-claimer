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
    "5Z2aR5vnHRjL9Ht9nMKRgEgbcCBtFwfuwxcyHfMdUmUTaDk7n93zRu8qBqZ2ZnRmRfx6PKxBp5LR1cF5YXt4o1Ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FEQ2aicyzKWp5vMe9cRJrPMLzchu93GPKQ1NUanUedwyu6Nm8YWrUnyV8ehtJymdNnzzUWatvbpsLHKBpMjW45",
  "key1": "2iwfdTKbJn1qasJZXoZafko2Bv8AEeZY3z8rwN1GfgHpCRqWr1NWnNhLRSaM91RBY8oSD532oXNfJxjAuxvtbV7h",
  "key2": "nWsnuEoNPUQqiszDzFdHEm2frjtBjV29DEJa32atdgLrs8w495TqYzReJed84ttcTq8VbJbaU7PpKxTqdZj62vt",
  "key3": "46gS5jY5jVooyZg72bnJzkysrua5h6E3KaE7DLybbSHNfdNnsRY4BxAVXYzS1LkBiwsWGiSf3xP4kfiVmw6Z745y",
  "key4": "4NfSX5RieYMAjYu1qmB4r4LERiXFuBiV3jXChyJfBJZ5GvYi3desiZf6TSEEkUgwSWrBo8zA1B3uMx8CuEfcyQBC",
  "key5": "e3ipxDM7v3htTFZ1YDoGPcCQgAsVPSJz3Tk23NMB6NDsQioFTfYZXhA8XJjCYG2d8S4oYEmdpV3ix4MntpkiNJU",
  "key6": "3HD4Sauc8xgigkony5ftgQEVFWkoYBUYw8MLZu95MeawzJAtGGEjfaD7LL4vRegnpXYenqSEbUCteTdjKPtUm9LM",
  "key7": "2hN2RyJBYGSHyEYDVzgG8BUATXYUEZAWv6ruEjEJKNpr4i7BQQrNshdDx6EFjgN647vJ8GwMXwpVyBJ5tN8hLhRz",
  "key8": "3FMEDLaRBeu5D3hfvBKuDGCqkSBorp8H1HE7k9DFw7Lrs8ip5qLGtBR6hpPiY4vo54UNnJBFt79QsUsSLhu7mAZs",
  "key9": "5wBp7TfWyqHMztw6KDZ1EoR4PsqeUNAc8o3K5WsHPHAVDmtMujLPRVZT42cpB85aR3CQa2MLzBWAVPM2vzaYyQxW",
  "key10": "5yJgyH2QBkWEei5qdscVDR4JAKnTsyVzH4J9im9d2oNEU6BLKcHagS2s1ppmPMYgeo5AkRs37ZMtN4hK9uwjCgXN",
  "key11": "4beZcmVCfdz69P1histefafEUKEgA6N2kWeeuxBmHbc4t2yCdRDj4CrhHS4Juoqb3e9xVwL5bBpdZoeCBnDny7ao",
  "key12": "2zN1KYrEdV5BukCS7m7wLuJbFu8xvyWLpX2iTCCopxfomwCNb6UcCLceAqdViXKkGPCCGG4sKFBQG1y6HmpNVLsT",
  "key13": "4L3UboK2RMJLYgXyqz1Cm25nsThzyRZsYHRrZXCyPPyy6WZqqpA9a5omzrgjMte5wXxPKbttF9FjSjwDJjRa6Dqt",
  "key14": "3Vffz34mTUsifr66mHg5vmpFXufQMDKw9fzC9PEQhn6KgpUVd8LgNQuPyTwTru6aaJkHKAaYQ1KGPAYDcKMvBJWa",
  "key15": "2B5wvcs52i6LV269rpp4vTy4CW3uK8D2THE4HkdiSnsrnCjeSSA9CoWvQibxF4Gkz1fQkwkYX9C95igu9go4mFsA",
  "key16": "2Tdx4Zo7Anh8ybjaxrJFToJ5NXM3zvfYPCYwcTwsZ5tMCzVJSWNc6eLvJiKyfbU18Kg6ccHiXRETDy7BTWJjM1jR",
  "key17": "5MvsA8ipatfjUEn3kmFTbmQ5m918AAJWqHjmeoPYcxayeJdkK1dp1Hnu2kzb8N6W6Yau5A38zJAaBScixTjjKDeJ",
  "key18": "53GDBP9z33PcvsFnttfQx96EAo3BEVtgXKSTNP4xSDz6XTaAhQqGderZbBrPm81NwPjPkHLKwPyLgoBYw5mCCXNp",
  "key19": "4tPmBzdVMBbHWYos2zXxQjmcYm39z2jwY5WcCWvZsgukGZ3dZ3RVY6r9WKfw657vBeF8uEEkxG57c19iW5xqPUnN",
  "key20": "66aL6rofPDVXoQPRYa4FUPNoRXp4TEdDpcEzHdSSaXCDx1cqm9RX1yWzYb84KhWCmYM8GXWsGhpv9TL81BfF2iWm",
  "key21": "58nX7uiXENd1bMu3Y9knd8GHnq71PfTZroDkENhvkezo9TrkGcu99rZ9V1n4rkdrtq5APHZhE3WF8b3X4x8RfkgA",
  "key22": "3t1ftwu7UCwH8B7w9vZLzD2YhZMYHRWDF3drqZ1ApVhcTCJPowen55k5ZZGEGALDaNrEo4V6fG7G3Y99ihLxiHVX",
  "key23": "2Q992X4sqANobiBzQfyvtQyvzfio5TGsch5UaKP1b3L1PPXX4JoexEm5ep19M3uc6YJjKjyPCA2YoKYBMTkY53KP",
  "key24": "vM3LXGMMyRfkjoFFbon76XFuHNEok3vxTtrTW3ps9k935xikdFAAib8Vd6UTapear39XFnxMnrpvjHRM8m3oUyD",
  "key25": "4Kg1pqeqGGA7b4oBLtYkVpMs9NoZYergjFVxrDHBuxRfCnML8i5GigMPHBhTfMPa7q4rQrMbAaTEGCZSnSyX5s5r",
  "key26": "128LpaxB7T2JyQQYu8Zb2oV4Ab2RmDNfh79tXhV24v1kTXZDNXESSvnenTf7TWQY3yQDGt1c9xdWqNxGNRRxYLcE",
  "key27": "5WLzhea9jLzrbwXkWTBg9jCQzAMsci719zC3po72zSgcLgn9A6JUfT7vdbF23Nz9tdEHUUnCPU7A7CzwmjAQzknM",
  "key28": "nFTQuYSGivXEv3GAsUgjhGS2Frn7Y8LTwpD8f629RkyixjWv75SqN6XL6vMUvHFtD8o796tSUNBjmJPuxgdgWn2",
  "key29": "3noduZXfdCS2GQh7rDdFY7SL3GSMPY3neuexia45Ji8u1kGo2ruXrPXk6qkvR96FRoGuiBeLxg6f7ewhbo7w73Cb",
  "key30": "2JNWZrdFA3VDWwvcP4SUGm9cSTjLs6Qz3bZw6sLWrrkbwDfyERFLVJJuizoJGa7183viQTEJCwyfzszJd3hJmy4M",
  "key31": "4JkSVqudhwA3xWG4cZDx3xr6NepVVoGNSj533frar1DcMoY7LqFjT3atoBhRoE5kssGJc9X14gmRY8eofxsx6Qkw",
  "key32": "5keeR1BzMcHEYci85au24hAchsEY3NcPX2hCtfCnMdsG7GnEjSKufpfmzMkGymRmUKVgUoTC9HBbSdVAkBcPzB8P",
  "key33": "xf5sDTdcbcHm6ftxAmrf4ozeYgmKPzZdnAPpXu6UEzicRMYNtH4Cm5xkpQTFxBdMzAk64yY1xQB2poxbRvgnEJ1"
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
