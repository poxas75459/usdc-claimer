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
    "3jaTrNamHzy7kgWHxwfTkK5jJCPCGdKBt4bjs63x6YM8q4SQ7ws56cARJTpznCEPv9cTGCPo3VjS5KQtEjiBh5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gtSTTiDWcV9tx26X54J2Rt6Z1i4dKexbYjHwQsM9Va6CFdVGxXKK3pkK5H3nWo4wMFDze4VMBhx85whFY3Syk2L",
  "key1": "4TQamRP6oHccwok7BaWSXjckvj3WFg7YeuBPsy4ir2zKNP71KSbHGdcR2xck8eDijJkUQWqcLvRxPFm8bPrQ3YpQ",
  "key2": "3FB5gwBoWsGqrqmhoXnNbkXqvdtxyWgEYak6LwPwR7z4uYA9mk2NRBfHW2nh2CcT9RyTFr7inGGxoduKDJUoXqeK",
  "key3": "22TuFC4Ht1FZrgbrwYx49nA5vLTFWaveHqfnmWoJqiYesZKiabmLnWqfRmGDdmTXqPCSbFybFqj5EFVEaZ7Rxqtg",
  "key4": "4yM9wamYZ1aF9cq9BMG5aMJAzFoBGvjcyKpUzpzdnUAPaoJJSS9EjMfe2dFzL5vKN1YytxjkopzvU25fm1RfsjsV",
  "key5": "5jRdcpTLzWNCgzPDXiCdZW9BfXPEjhiRvz4BUVFp451dG3BDTeqqyTMcNvLDTm57oLzcwCxzWeK8Wpd6Thnis56g",
  "key6": "3wGAkFjZPimWmJmyb2xhMunU4qrHGxTBnxGDuW8KG1RuzYzTJV8TLEGm6oQpnxyZsRjiay2yggaJvXSUbyWSpjEX",
  "key7": "i4PUz3kfdMGtEAU1rLWkxBVtYabTixtMeazf6YT8TEctpjY3rX8FwCkZ3GwveYgTj7Yq7n4yYUwUoxdymJCiYUM",
  "key8": "2ukkGBpkuRCTULrcsb1jnDws4pPHExSXQygaS22FcP6WicvzoeoChsF3imeNvNHFzkBTR1UQYJW126esZ1qVHTs3",
  "key9": "4WyCSj2KYQt6jZxYP2r3oxhjLC1RbVuXxAZVmSdwdt8MBqpaJwmEkDX8UTvh8kN6PtTGwt7xXyuuL8MSPEZP6xCX",
  "key10": "xZUDHg7tGeXsHVuGsrcSC3UKTcJ61GED4EksN5kxvdmQMMrDt2rn5aXumeouMnXxxWmhgEHoHSey4hmaWpTXYvG",
  "key11": "56t2woGNbHstoJ6pyvtDjhEyFwvqNfgasBG8sZmGf2it6tcpc3eXgUo3pbofrQpqedBz6EPsTL3f6RaXLBTm6Gwm",
  "key12": "2YoKjrQ5aVCaFjiB9nZrvD1mDXiVQPRxghUkiYLo5mRvGQ6ZTZxBsCEtwSGGRygAxshSZs6kFWsPLPqFyjkvUhAj",
  "key13": "46Nrh4T7TDfBpPHMb5fGCqMeozMjzSQ6ampqT5Yhn2ebdrjE1rSA5TX1eviMrcWtHd6U5jqLwNFtgSg8G8y1fJ92",
  "key14": "54CKpkGcDKQ3MoLpNoqKDi8DtgzibPDwiUiXN5HxVhFPQ9t5HP3YFL9Pd6na1XsbmBmMFvV3dbZxtQG6uxcgfbKb",
  "key15": "2ntC67XcKEGvViaRX52HykNKcvwBWtikmAZu8kfXufswz9DM5oKeyxT8s251U6KCK38aZH4HCtmRiK1qGCVMBeoA",
  "key16": "5WRgEvfi1Ge5qG3RJqGvBe7uLhsW5VoCBp6cPBdAje7djB4XKZ5HNRkPTkKKAUPzu9Tip7gkCiayN8ioFBuYCU7T",
  "key17": "5nspPu64jz3nxkkev1wCBtiujCHNxM4KehAHp9b6akKTbzUoVF8bRAFy4cVQxiemfVVih9q8LBjfP6huZ1jpWedi",
  "key18": "5YaWurf7WuqfAk7JpgFPjifsmbMVJ1u3gpZ6QHdpqhrFKAk5PAZp2TvfCp61RDf4nmMeAcXAW7vjwZENbWSPbK9R",
  "key19": "4FyQno9ZbsLeWbkCbSsibZQxZkQk7grmdRmBRR841vmxV9UnSvaVonb1LgSoWuBh8LTbdSzsaLoWQrZvmVeWF2uH",
  "key20": "35fRZhjez6b5YLcdS1edBZkbpo1ui1nEgcLkhug2Ch15WgcnqBAPQRq9R8oVfKb8MpcdKJidCf9cehrnogbotSHU",
  "key21": "cA83oNBKmcah6ToDXraB2L757NSRCjF27of6BTMwnwKUPTjut8AVZRywjfF7XBQ8ybDB6kcBNs71dLJj7LCG3n4",
  "key22": "2pLwvfiZJ7WczqHdaiQXHpzGShqJ56zffxkyJWWj5g9yKvFbuENPTBpCH2TUG38jNH1tUbvKhEcsCHD61UXMcjh1",
  "key23": "3VA3Z4ioDKD6RQL13Gk4Bizq7HPPQ2FpYoosKHN9D488icF8mMDFLqqxTnrxqTcprVMZFawqvVjVifQMK8qT4Yu6",
  "key24": "5ztBByikre9fjkyQAAscTC47DbLQFUqHfgGgbYCojioDM9N5XXWoSFCb8WBtp8ZoX1utVigPuypqrcPfErM6wM3C"
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
