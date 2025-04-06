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
    "5TPTDHELYq8Pd3eWn7Hw9vGDN1jwtAGeTPb3ZqParMCVfRfDzfAZ5UXRXkWbDRtvHfatRQpPU1MMmkCiWUMsfq78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxdQTiKvsdR5Me677ACn6buXZms6C45ghE1repdWJKDWHociQ3uXUfaLD6w6aHzTZwka5P66xSsw5oF6PCindYz",
  "key1": "2VvsxDRAqvVPtUnbU32LpkDzQZLVjZrmSaqPXrjNMEcH2cA6HpbWU6GgrSD7WLrFNq4AooWufsYfv51JnfghqzDT",
  "key2": "2HewNFt7Qg6yLNmpKgJFKj4NrSqrsbhuLEMNk7EgH8jvV4P3E5MUuQ8bNKcpi1MpAwdYV8xoWaKSPFhU2t5f7Mn7",
  "key3": "4AhaDh2r4L4K6TrT5GMduKbTiNmGeLBbW3NCsp8TMCzCedgVWjzT3GT7qJ5WadjnxJZYK1YkrmBVVsru9MScid69",
  "key4": "3oVByHLtTG5ULKAiNkf6tYUFwTJbdWtiwoxjFqxdfBhxEEnB6LbyPyPaSq2DNEmjWhK8gui4ifuPSk1N1yK1pyp2",
  "key5": "4JUo9xx2CYBSTUcvzuSZNpv9mSyvXPu2rRukicaQtkMZzAiKjnuxmEmCfECvV4HgCHzKgZoXXGfAPbUhErjB198h",
  "key6": "2SvUQKTXEJKTTYYDwiY9PwGZ2b4bX19u4V42Dt3uDLjFD6ixHBWcCm8sV4nNRijb3vowMDnYYzvUbH9ovZae2bBZ",
  "key7": "5LjAtfriLey671yxahCQxvh9PRGvkSDbcrsw89gS67ktkAMsXT6Azg27Pj62TRViV9ezkJiWpHmhCQiKLy4u2UfM",
  "key8": "4iCimTnDLVWt4EhUyFT9U9GT9JQF5ppT1iwgkbes4ZM8ixJQj5y86GprTb5NML5YMiw85YcWXUJoDYZE3VH27UAD",
  "key9": "5FidbR6dyzqvHSKL9H59UVygXvvknpHoTiRmDJ92F1zNjqQZ14ZaPQmC3xvonqGCxsuqfhcRGm7Ms2PJNht8SpyX",
  "key10": "2HFnYb1sXRzS3ER9rfDb4zp3r8RHXHwJfJscv5rirHBxsuP21tC2iK2uAqTbcWynpndSKvj2pXEAt6daorNLqrMs",
  "key11": "2NB2mDXFrCQtVvFiugjBgR41mMcR1hWdTeFPbQdC1piGAXCUMuMDGt8GJKcjnPoU1x5hY6mXy76kKF6Vfsxq8Fce",
  "key12": "48fTUsg8dJ4sL8HAZ8tnVp2un391iGCyNEFG7XTF27ypNftn42aQmnWKtoAXTxB1fXXqJd9HBDCk1gjkVanCkXr3",
  "key13": "49fXnXnZRtob98Bp5DYzVgx6QX2HT6UQViGmCC4zARvKRHCbb1quPrw4j8zv6oMMyz8knUaEAmX5kXi5BHPiuutd",
  "key14": "CGezQc6vRuK5r6pGHSrLyEPoLCNKdo8Cpwz8GMoAMaMKHDCQZrr6v4LFnRa3myTrhWSnRT1ogE75iCXFGv6UfN7",
  "key15": "3v6XqkxZunrGLLcksT1M9wcNiYEp8AufpMjCVmHxVwRCvdtrwbuGUdreEmqpChm2qWPnHVw9ZJmckvKdbF9xwJzC",
  "key16": "4yxfJrDdRvCHbC6x6ZeHfJMaTssHVkBm37BoygHMBPYYFseZEYJYF7Tp8cfgNT986GRyXZ2fWNoj2Rkm9LdoDtUm",
  "key17": "3NKAXw3UvJsumGsv9zf4ze8ZDEXLuufJ2BezAtqXXpDJvkpGHRutbPEiJttTQJuo7SPxLRYnFHUezRftGx41bCC7",
  "key18": "2yEk6hBMXwPZ1WdpCd55pjEJGdAzvbjSdtKn4eCwEdWxAhavb7sQU6wrH7iagmzdJdazS2Mhz9bHXQhxQbZUgPnv",
  "key19": "65CsUCttgVxqrEnoHLa89sUnYA4t8bhiWozRf2NXQ25Ki3XXno3G65zdHdKuKxanqnPMU9Q2w9SxgoAMLLK5rVs8",
  "key20": "KnNPNPhnLswSkCWKQMHFwBgbVwJPQqmZhpJG3nCRByNFa31NCETvT7k6BSZxVabrTTbBy6zFj31Lk1qPp1Xei2J",
  "key21": "4MRyZQy3M8EknnaPpoq4BagGxMRBovng1phL7XEY34wXEk7GaffQXH1Q6v74QKRFNCUSnefpnhatwcwT2UHuFoxT",
  "key22": "4uu52mjgah3SAfiKRsgXKVAGEgWRMTzadFcL39kzLqdum4U7Cna7JrWrfjjTvc67aJJgKuU5awoSZFwo1f2yJoVk",
  "key23": "662JwuYEEnRjr4Dcbr1goAhzpW4gRMoMavtQdEevfmTvwheWtwW8tQKYmiRQxkvRUuThD9T9pqRoqcf1mhXYp6GK",
  "key24": "7NmBMkT17P1hNGmv5mPEEZDDj7cibgGzPkdHornd2S52RKVXXkSZMPo7AcZtuqUcFis59UGwmzzNbDC95P48bF5",
  "key25": "5A1LtfkRVf8FAJ7QNZMpZKtju1khaoSc12PwUyu1HJouSiSSmho6K759HCq97eBDKTnb5Yh66Hto699hZ7D3S2JP",
  "key26": "4hGFUirAdqDKa5HpehrPBoynNVMQjATdKvJTAgBmNqfdjEX3p9fK99st5tPBNrJAFnzVsNPac4ugiVWYX3ppDM3t",
  "key27": "4YQ5LzqDyLHSpoAqvC1idjBBvHgTKk35QxB4HdjoZaqVKiEBmaBhT6vDxZ3LwsQn5kuUY4TyH8q2CAnseALS5ij",
  "key28": "3VSNuXMxfkFbfYAqCFzSuqdhRdmRNSZf3gKBH3csSPNxDeJzFbtzaAkXWZYZzGD9CVPpAbdbZZDfBKFJh1mMR7dj"
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
