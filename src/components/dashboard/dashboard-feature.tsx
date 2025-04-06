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
    "nhhLeiCK3rWWueycAbZiPPo3pMAB1AE4KPHib2XBUZ3Xzzn1F3hk8UiAuUmbX6xNzsoPHW1jNRaootNST2YzyfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sB2XsmHQsE6ooJ61nw1UMJ6UKrjbGhd9zVGc9rnzD56h6tpgjzTYs328eK5GVg9W8inkQY6PxtXqhKDAAUMR3eX",
  "key1": "3cwGWqMn2fFRrh52BUsc7xmfmXk1NvduzLMRXeJQK4zrZ6UNnb1u7BSak1Dm9DuGy3foHWH8pQgEtTMGsqTBV656",
  "key2": "52e12GtAkTHZFzefR6jnrMURTPWKrUj3XDL4rwaTpwrJj7ZtsvLknYS8wyxgpFDVwtZbLG4cnzaXNKG5u456LVK2",
  "key3": "38BoCYpia83eZqb6vdWkMcGZXN7tALwV5hSbxwKnUtCNeGyzGotSPMuiSbgFKtdnjYFnoa3waGLcUaGJKsQpKRno",
  "key4": "35j5bUvS1brsSVgR13TJa3xb53YoBxpjnbDvzvLtcnuNfVWGNhmxGgywPbDsV3ds5fw3yXCjGHG4z585ADZqVwb3",
  "key5": "2858WT3n6SDTLWZbumgd1aEt2Xj7buqn6vSYmQYV6uQeX97QkH1YeXynnPB2FU5jhFWq1K2vKL8wSi7ELJX68UZt",
  "key6": "64HEuAf9R1tz85NceYUuM8s3TByFJyajNtnhBqKJxrFx4EUavxCRX6RRqKAtoBPCXBFz6bJF6KZS8m7k3CFtfXsm",
  "key7": "4d1rMCfjyPJsFFczZpGhdqjF1CQU79BG3BMFu7AwXgRPbomhTXSyEvuhzZEY9hh9t6Y5zbc5s18MtaFf2am3bihD",
  "key8": "4DUNCTSMYkKJqhLhPrwSxzpcBkYQ5YUCD2m7izBFXjQtEdwRMZb5QzBPqLy9AU91nkkwaZ2gEDbMCAWZLWBVByj2",
  "key9": "5raCgJMuN5G9JpCEceYf6L4pViNSctSViP8Jy9HG9GUw72ur6LxpvpW43KMSu7UdRtTYZYq8JaCzxB8PjQpVAi7u",
  "key10": "8W7BwSuTwWansnZDregFB8xPgQddQqX6kWfKbM8g8qxQfcx7UjBVGyATEtknKhPLrnAQdX5H6znLg3PEMZ2a6sf",
  "key11": "mxcXdqCuxegMYTrMzogkMeQU34KorndECs3WAcCHSVYvxvZpi7mCSvArHZQaV3TxuauAwxyJngiUpC2b2B9BxHq",
  "key12": "3UzG6Dh45LFEGuScE6WJCZS7M7F2PksmKPWeddPH8Z7R7TaaXrhau5E8Si6g3q8VdRSAL6NZ57JaV5rGpWSzujGe",
  "key13": "2QeUcYmPBa3NpubTwmdee2WvE8snT5ZT8NcAcFkJCSmXRS5Ldn9jxRNv8sG1Sc9Dt15Zd9UkqwMWn8MD64cRf3NX",
  "key14": "2jHvJksrua9abitj1f5RmJuKB9veGDeunReGtxpYU5GdmVt1ndcdPsppuZf5PR6aynqgjpEdzkbAngnsXpPyxrE9",
  "key15": "4zNSnnQyVeBGtATtunuMBCCvYUSL1nepjKYmSDHLwFCUHUx4c7nKwqHRE3mj3AUugi1VxP3Lp7s62qVHzGEtNc8D",
  "key16": "3voDtMgtJGBTRhe5tM2Vdgf5WeGzHmpg8ZJrtrqUcMmAM2qF8n5VdHSUViYXoGKyJXQSkHzM5Y15ehdouuS3yAE3",
  "key17": "2gX3AUrMuRBSxZdRNfiipXh7cYSrTN1LRCFFfxK2iTcCsSuifsPDxHQanmaeKLUNDt2LbmpuqkStimKKuhemP17s",
  "key18": "5KzfAD5qdp1gwshwx5LoXFEFZ1D5MeBsC9QUttpUSFVJCGicg3m2uGyiu3ybV9nDw9NJkZCX4UZiMMh3TEM584FF",
  "key19": "5ebeZjdMP5rthiJBbRoPC5DhoTiWFM4fzTc3DChk5415iXHCQwy81TNcaQCJkg7G8JgoJ3aesARU8XohCLbLhBEw",
  "key20": "7zhjRemkZMhBfbb4DP1uqz1ha6unuRwuwAkBXahUfqMyp9BwafGNGYMkVtguwds22hvijvD382C52FqtoCFaqHM",
  "key21": "4acz11C8ML7N6BA71XN93shgvgE8FGuHrbwivJQMk3yR2pE9VduBX6M2csKJxyrrCtoDF7sJdsaj4JgZALXhCzux",
  "key22": "5juYS9nhhB3XzeEhBBR9RxZG9WZ1iAJpz5XkdVJneMhvntyZZSCc6pYWK9kAZxdNNsiL6ejCdGu2yvdF2vcXDWuo",
  "key23": "8uLrtMJgsyniSdn3tYECVwYcZ9SX1651rTN9TyQwBvpJHV9ca4kmvNsouTdFa1wr6REQVDf2cNKu4uoTHMuMMvp",
  "key24": "5dx8AZg71h7sGgw8HMy8aFzLfjSJxQfVZCuheLHFCpLTboKGrqBV3QjGqgnAQPq8UGXwrZ4rNF8hzeVdptBEgrpy",
  "key25": "8Uz9RnCY1ypVEwBSa6BgsNob7uBRRL5VsKfViv3g7y3fdxv8quWZfmdKCLBqr2oR6DpnQhwpWAX6i3if8ihebTZ",
  "key26": "5r7XML6vWDevxBh3rsvtFheThJKdQDj3Dj5zta78SPcydJU5eF19KPv5ieQRXwKC7m2PT7vZT6vdg7nKWtD1aUNr",
  "key27": "36Pypy2LZKLX249mYyHk7Nv22gznXFDAeLwqVFQNqXMKQ84xN4WrNBQL9GhQakUfDTwRbz9EqytWPnEfyNFsBx8u"
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
