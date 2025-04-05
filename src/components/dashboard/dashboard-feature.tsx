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
    "47kCjf2CQCzjaVwX99oP7DqE9uuZLb4S6CPD5XupyPpakt3coJEtQDF9KKxX9Hcy5pjEGaghYP2c5zosETGWT9Dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxfNiy7GZHK99HGbKSxtT895i2YG9GhU4pM2FooCna4FHTKhp53vQAf7aV7ysLGBTUmj9oLCkt2mFpvK1aAJSuD",
  "key1": "4vTUzif3jsgN6ujvHVFWaes8eS4sNfLmXcMuKH3CsCdxm2erVmL17FG3TrcNNixExKYWZEDj93hYkdZ9vSstSexM",
  "key2": "3QDez3515ixSZgMAj4ztHQhZDzttVkfNP2JxYnYDT85XS3VMZmNqn5KEPDoM7ev4x4oRWWCMhvNMw6mM5fKuBShc",
  "key3": "4rXnv9cJW9F4gYzhG6aDbacg6oMzP3JiZDfGGZUroCM8dEksgQVjFrWcEuPonfktcvu62ZDtTjHLMVQuzf1W7ewC",
  "key4": "BBKTbbX8ajW2ngp8G8j3YxB5rZtxs37c97vNNPuXLwi4B7UGLUUwHMAPZMkEoYqV8CvsjwHKC7h8CzaXaXnRfQp",
  "key5": "5JLHMGYRExiQoGrvTneRpGEqMbv4FHRMpEDX879Jwis8e4L56hZtYSqtGXsdD5XmoVuHnaCZCwvBQgFj3aQ3xiVC",
  "key6": "3YxXNJu4QtroiVXfm2uhccyNnw8AUPqdFDQKGM6LWiy9zNKs1V14S6wy58vtzdR1Gs4wxTp2pChDwohnze2Pmb6w",
  "key7": "2E6wvZkPKzPikzQBbSbpAr2vs8omcwLTyo96vDPaEN8pHXUSfBzsdDAw4zDVFKa3G1xmPgKpVwy8LEcLfFfPp4Bs",
  "key8": "2x8HZ5vnFBC6r2bh1Lr71ZHefATpvPhqGd6QX2wLvj6oDTX8RBnBQ49f7iPjNwovLzpNYmeJ3Yvssevf3YTx4PMU",
  "key9": "2qrb6QeR3yMBi7f7Hw8qWdbg6Zcnek9dHo4iBmP9mdrmkkGE1voj5ATXVeDse1EsnezzjSt9Ce1o5ngpev7SNCZk",
  "key10": "4AHsjiedwXsHV7vnSvocwSrArxtDmCV2uAeKnWCaQ6fHj8guVi2nS1YDx5GHkChn4oaAB3GzBHhyJymz9G19FguD",
  "key11": "3nwaDBuUxeJjiWq7ZaTeat1Yr8cicwbeXxcoseVae5nY3tRY1i1oZ5UnYkYpfMv2o5c1GDXiVk2ZDk93p3qwdxYD",
  "key12": "5AfnY3FGdsodUX93eAfCUsTd6L4z3xKdQ1gTvXdhoqgSHWixdzyijfYErD5NBACyUKoNd42UgUmVvQqzdEoRAuxR",
  "key13": "12z1RhacwYsjEpWwhDCJdpnZxjx3VMHRUazfsMdMpEaHUKkn4FMnWqHRXbpUUs2evaEDp52W9Fg5Ho9JXkh7pNW",
  "key14": "tz9qy74WSUAUJX2DHfpoNLneVEZ6NscEffM9gCFkhYgqy3g2yC3YGTbiBf9jLmJC3WFmm9gYLckyCxzTPoUmbHa",
  "key15": "3PifqMF622pudCd1E8PbHce6JGLtzuEzBnFeeGMqBBCiRCva9Dxuj5T4DGMfFGJREPzoZPmdTLWQxWytwUAjAx7R",
  "key16": "2ey3F8HD4Mj2A3xpFNjdHyaif8Z28qenV6JxmXJKcDZv7wBZAF15vNHVdZLqdw8CK3hhpbAy6MNRjmaeLHrRKEq5",
  "key17": "5v6jMnCBtiVgoMxKGrCsAGAaf9ABzE6quFePooi4mUPvgkvoT2Cm38eGEt3AWvLF95wuQeJm14eSeeyCCXR8zUXf",
  "key18": "3S44gYBanghU7Rgs5Y8FBkTpdWsjiQ4X9Ytn9VxQaEM8NsM8hbVqCeLscERxvbco57Gqd7QMXP4QEsKiKexTGM1p",
  "key19": "3GoiSxWfnyefyPAZ3f7RzuDXyjZ7xmwGCWA8y1EjLeyvzLicehABL6FpGypLCqzJzaw8c7WdXfEkqAYJgNBnHBkm",
  "key20": "8eRLxX77pqPdYV2ADDgnAM69SX6s7cAGaG5b1MznPeBje1Ez1KNGDvJxERXWnwFWLGFW7pPMUjfhKA3eJBcEWc8",
  "key21": "27NSFeJeo8FXjekQtzyYdv3deRJr53DVex1rK7dpxpRA63NFvSk2qTreaqRXWQckeDzx3uECDE6VxnUwwGhiMpGK",
  "key22": "62MhfMsLwAJGzgwp9rHJGd3irsCziy51wq1n15ZRb9rX9nA38vinvuJYcSuGUAU6yGTqLRzwoYa1LckYiQw9iHE7",
  "key23": "3zbSb76TW7z3Dd8aqCt1K6e1Rv31MPf2tPtCQdutBMD7hiTXs1FctcHc3PA8GQ3zCUtNFGQTwwWHbkuyjLW6sYi6",
  "key24": "5mGL8FWpwHS5yYfyHMLMNpTDWkZCiGHskhW6PpqM13Z3aHyA5CFvMCWxw9wSMdf64rx2UB6ZppdRGtMPvq7mJTy2",
  "key25": "5LjcNmWEQBQ3fRLh5PTRYqg3dy554CCMcQX1itMYTtjN42YjWwWxB7RG6Dh9yUCSxxqRUipseJoQWgpMzkR5V8Qn",
  "key26": "pnCPM4PG8Hb82H4Jg4kDLqykZJJavqqxpb7Vq4sVctxfeJ5h66sFwRdwqJrYu5WFtm474nWmWctpZ2iM4F2ou6a"
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
