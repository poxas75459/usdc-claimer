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
    "4Q6xutV5NWpeE3uqEmufUaS2xTFybQuHdix7jpZuWzoAA989NMKbA3PhnZYkrJtbpW8no51Qqx3nPMUHtEigC2Wb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "429BcfPWdcHhMaye2WYfsWVhFtM9sbhgEtUtsqRyAma9xrfnRQ9MvCknN1F4gDh8BJwm5JNZL9DZ9SZifo5S1VnJ",
  "key1": "24DE3Y3yaJsyNSiwqaW8eVrHsNonoh879SeW2cFv9ALTmQvb1UsCHmUHNmZKPpXr622Auq9dJBnvF9wXoNPaEge9",
  "key2": "4N8Ga4QZKn797VVKkiLLNvAGxhFXbGdhhCejozZwPRRtv8R8Zgze88pA7aT5yKNQWhTfFqhSZNQrwXcdGpUJbf2W",
  "key3": "53HQjK2Mp7oyApFeqHJQsqAoXKnrjchTyJ52eQDmTXFzRWguaTFELJFmkx6PxErvsBk6bj5tYWLP1sWSGspL1S6H",
  "key4": "57GMDbRgUatpKC98Y8iyRWSmMdsKH3qghFgcWzpVH5bWbsB1McsFWPH4Gf1XUiaQAq2DoDgiBX6LteHSFEVC2XVQ",
  "key5": "3ZcodxSBfBXoCTcJXQ9UqFV2sXGhPRaZYXBySWakySptGyysRznCkjwiuD8QgY7E9CFdQhCbDyn9dMWPL8wZVZQq",
  "key6": "4wqpmGvxAtNoqVUeCmYczdVPti6wBD6owBPukSwDntRjy91dRrNaDVNBTQsVZtwmKt2q8FcHEnr7ezrpBknTArT6",
  "key7": "2vamacPGpCkuuVEz94WjAgfLTeeXmWiFHSHKptJzsfuA4AGnk1czbUa3ParUeFw9dH5Zd8xC5NS3sfoK3dzdEATd",
  "key8": "4y4wzXi3JbENG66xM7hC9haWeX3zbhuUTXdJF67VShmvBVbBLQcpKtBAJCyFSwLFz5K2pwVTWDDmFSm47jHVsndm",
  "key9": "3S4tMvEbciTxpZtgJSsvUYwDpTHSbLZ3qRmXbbhBnRQGQDS37KCPjj2uPFCJC1FpH5SLwTUZrFqTruz2Ki1mBH6h",
  "key10": "5F8HYNUKhugbRgCkqLjMW5GGKBSjv1QR4r4WEHFtK9qAJyPifTGKUxadc8d8uxf4GzgaKWSu9C7E8rbWatc6Qgat",
  "key11": "5f2tXPjZ7k55WQovoaP3WiDB7dUem3aW3NnC6afDdvgQQQR3bV3QrVJgpWdLN7gQ5vGo9jP2CWxykHesEYtMLeZZ",
  "key12": "39xLJ1v2avzFMGs7JPd97pU5zEU1gkz51BWnaDDc1J778KMcSDpnDDejaodNLSBUr1QYXF6YwWzf9eWdhKwtBYak",
  "key13": "5pV8JJLJz673JTLJGxRrHXWymgm48hES2NLocZ9ZXwcWreZU1NfgnVEaF18ogX257KDvBAq3GhFYr6vvXzWuQ7HT",
  "key14": "4f42ZzjXL2F7YvHmkEN1Mk9sSjcwjr2vmTj2H5goWA7ap6gx7thHGAJ7Dm2fPahELnm1wXkzCGFhi6mbXk7rYWXF",
  "key15": "4bB3ocfhGAkdRqLQNZzR6oWKZV8EdzPTXvT1xmQSi1dcZVDjsixXgs5umv3wRZcFYLna2E4gkGVBvmTSJiE9fpsK",
  "key16": "2fdsLsgFPtehDAitRRK8CjP5aHhkGKVSfhLKAwfTCGfHN1drxAEXQ66QdXi5gUhKESyXUJHpSr85g9ky8UD2aFPq",
  "key17": "3exp6B6wuD1gCRy6iev5icNDkXMPDCpxHNeaTWZzPyRJQsbfAp3KNadi83TH5k7WzKMLrPJgfeWfZjSo6hjnauAT",
  "key18": "3kEDGM2UaguspCgAV2uk38fkvUbvvTuDWYjaji51cgdNBzkfQgpMbXCX43Cp7gMjNGzUYUMvKGGqh6HkCqmvsRw8",
  "key19": "3B3FzyxauNH4fKGj8TgBKmxcDcQgupMwMCzWPfNRPWpwtYaZjSGbZWAeFbf9yXEBWQh9hvtve5kn94mpAShQJv11",
  "key20": "549tTFgXdna3y5rGzCHvxZEHNsstDxnSRoP8DvbvPSiwo7YRFbytZLUmZbaJmYPpJJLCS4oFbLciw1mcvocuqQXT",
  "key21": "45piqwDKTnpABWsjPdCaskeZw4sWcYo1j9rX6eVDHsm5kpQJ9Hym1RFyBczvtZKdWZ9VRBNaxL1Vz7X85Vqx5mbr",
  "key22": "3jgWzDHxZ5cWbcnA564fNMjJ2Auj8ZtBj9YGGsQWBeGUecYUbmyLBHkmfvP73tnMWXgGQu29fj61gAquwnWB1mSe",
  "key23": "4Qf41TMoiHLW5aYsgJjLuVeMeXJoGXdW29oKAqy6zJbTuz4HRzN4uNTWWqBwBDRhMGQBWT8SiAer3GV2hzpD2aWr",
  "key24": "3CaLGc55qBib8HzNx2bW9QwEgenxfNQhNHn86jqNAmoRTpYAvMnvBf6UvtvQZmat9d8bBZ1w3q1Lxrc9DLhFwVKi"
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
