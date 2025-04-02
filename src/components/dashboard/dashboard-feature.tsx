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
    "4BwieLxcrndZX2T9Gc83SUotNRpEGW35F3EE1V7qYanjxQVJediQ1b9P2RvTyoz1aARNUv8RryoqDUvMLkAvvr26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgKJvqKjA5n9KCYYL2feSfffrz4Xeboz9hh1bb4j9qTNnprPYX7yfUswvAa6jLYt6YpKpqynwyDAJe2xWk5uCM3",
  "key1": "3XBvGJXME876riAdHnRG5Dy3rpD3iYXtESMc9pXf99wFiFam7QimaKQWrHjyr84UxeSBkYpHwbWAFeGykhxoRP1L",
  "key2": "2K5A9VSk6XWomqVu4DabDN2qXKNugD4FZxTdiPSQQAvM5XqJLiA3YvrM62r6irQ1LfRZsg2xzgPKx94ogZEorMU4",
  "key3": "WrFRmKJ3PNNo3eNF8P6RiCYjKF2oiVDW6MGoJQpW5t2GGfqdCQwdBpajQYozPRyFoeB8EaDRauWm4cLm94UxSe3",
  "key4": "4zEUEX8hAJjEbYw4t6yYa4HTmui71AWx264JpgChykUvwkWv7Ze9H23znoj9noYFaTj46rie1CYgCtuybMKZkKtN",
  "key5": "642r95gvJhGNDheXqj5g5Evf2gnNVMjSwpaLU3VgWprGF4P9kvB15YodFrRQpCxsBpkPo6JEXD8NiEtzJkPtWjNi",
  "key6": "37Rtg4aw9AiASPU2XxkLtKmP5faQmjoWvHTiVY9avxjkspe1tkPHVZt5mhMRqAC4Mg5cp2EtjQVvimWnoJ5MHi56",
  "key7": "3aJ2LqwUsNdZrVDNXvEQVBZtDYyMEPaf1nvmosPPu4oBrTKpkoAgwjksM1uy9mdVZXqTaSoW2iPuMBpQoVAyHFtj",
  "key8": "5DDecUAaHrFq72T8PFcCZcPuu8b28jht6SQyNrrQmJgVb8wRnNXXuPrgijM8kGqTdf3kkSHT242Huiqvu3LHBAwq",
  "key9": "3YFfhsiPBFaich2KDVkniL7gvNWvcwCYzBo8L2ygHi7ui4Ad1CiTqtV7K9TQWJ1vydMwopfVABwAo1NZHjZ6g3Ha",
  "key10": "uF7dfQiNhE4f87wSDSsWms8QcUjqdYGAqAhDaR8TCFF7y7Y3YjQ2KZ22p4ge793Don9JatbeybcRFPBqVbUSJbX",
  "key11": "5JSftvLgGpRKoSUErzLGyU7JPSuCfD2qkt2vCh8PtZBPYBxcSFKEqYiEaHX7yewPHeyMfTU6dsZ8PvZR16Fr57dT",
  "key12": "5AngddWeq4yCMDAAHaQRtft6VKRJVvCNYU4Bs1wqePbVtq5BUDaDwB1eK9AgM1xKut6ogqAWUicUF21BW2JT8VTB",
  "key13": "4kdeJFQwcr9kndMBsVkTRXCqc7pVCjRzD3CVwZMPfQufJpizkCifmUk1ENiFG93xSMeopXqGi747xxouBP7z2ohB",
  "key14": "5jotQH45VaSSatWMZ8TPCcr5LwZkhS3xoWoNYchVnwvanBPNrtYFkdb52Zdf6qyPZEXh3PaRgAsYWWGCTzvxJ9uo",
  "key15": "3bn6NA6N2HSAc9Kz8T1DQGScS8LrDGQPqGV3W7AqDcDtBawn8JYVtEeM5WvY26EutPh3sdbjUxKDku6eovv9eeBU",
  "key16": "3ucnE3kzfzpvW57BUQqAY5CBqxSRfD6UffJq3UhJNxrdNEFLtwzX6t4PRh6Rf5PrpFe2CD8cEfsTVDPHmYwTJu2i",
  "key17": "Uq3gc3U6BtrSgdpSmJ5yvweTZ2ZWNuw1nnnUkVpho9a4KWdMPgFPFFyC45WHsEa5iUK15myjLyfamcjqWuG5sQ5",
  "key18": "575NiUPnbuVwW5xe4pZ7rEThoHiAarXhu65um6bdpykvPhYHQMzd84qGxUTUzQtrhVqH4PpL6X27baoyXjvGXiMv",
  "key19": "3PRhGQYbbesY35aj8kD43kkPtRpJJCVTQimGbPb1XEiaGCe1jV7jKZUuUt9sytFsM3RAvCDXwDS8mqRETwFjjiVe",
  "key20": "3Xi87iSLoGbePhjxrNQiR2gF5hDv8ES7W43GKCpamYyoB75MN4qnbG3nn83ikwJpKG8WczJauFW4AcR3UnJLJ68n",
  "key21": "5aGwpuWCj1789jTy1wjRmEiy28wosYHMvPJBysovqVT8JuDvrDXgnAFvpHAqL7zxmRSmQUo6LmqeG45kGK7cy31k",
  "key22": "5sgSqeoJshVwLcmPEjLXJSrSxRGF1EnR1RwMPano3HDT7MZLBBgycttSP5vApWETW3supfHgyuUrNgHqApvBvRh5",
  "key23": "3N3hmi6MCMFuaZopE7RsHd7Cp7L8UV1GZ8UC5frsotgcWwbZv5ifbVx5PzjKvQmbwcbvGvpeV2K7xoc9u6xAZJHE",
  "key24": "3jLLhpsPyhdQ8ZUtQQHUaYKXqqrdWxuLYaXCwaMzLUqrSoapryyisW2wYgohXk2Bb8Wzcqxw9JtmjgiwsiHote19",
  "key25": "213Q7MJ6ZSE3eyzev2URfvjMBypF4mnWmKaRMJ3uVqz8AzjAmxcveuEY6yrGZoyzF2kBey5ACCch9o5iFrj8GYD9"
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
