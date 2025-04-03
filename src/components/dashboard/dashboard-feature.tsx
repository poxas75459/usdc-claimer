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
    "3WVR9y6UXQNb1gqEWtZSvBC2yZqZ47UWEWYZPirNS7hP5QdG1yh2ShRyya9za2qgaXvMgu7AA1LTFoZjWUvdw7Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1LxFHdFnFkzx18EEeh5A3C9Nf7rx89696Majcohwa7xfbExgQgFqiPaUb8jwkYXdu8TrxCJExm4rEJEVrqjPPV4",
  "key1": "4JYoc48QATdAQpWY3cZcgqTvhioQrSrWKFbCgKwHy7gUFvotP56pnQm2uzfN7H4FNqpsUtmTuhev79FucfVfLd34",
  "key2": "YAu4QDGeVucqo2NbYE4wxzXsbiygkoZRXE7gHnn79RpaRnBhm1ozAfdHdhF7kwEysEgmyM2gEnzb7RcKFZibtWG",
  "key3": "364t4h7EysuyVvQFrbZUWnNRHQN1y7NgAwUT7R7jp53wSmHwHnqKtocRwNkQFnfqf97gSZHP8ZB2FVPt2gnXYAue",
  "key4": "2ndcWHbQy2cKNoSUJ8GJjX5hFqpZRW1QqcdEGTjFYW24MH6ZZB57G5ue1zZvM9oNviH9c733mFKsZwfuMhjZPfiw",
  "key5": "3vxy1UPCqpR24KErfmwNkRPZyeUZwJWuCTjwA2ddpmp1uoHKvcfnVZ4CGsn5nEANNzmV4zDDNDEDVGqVCfcW2Syd",
  "key6": "4aoNs2uiTZkbAYEdKqE12fVS7k9UP1UxGyFiczCyP7RVb2FJ7u3ufVaTFSrbMu4EBL6NLeKuxq5DHT9pHh8AkWib",
  "key7": "2HkgEKq3gbRnoMDazR1vqjqWoTKz3dHivCJo1UGWWmtYpmox6ZTaeT9DPsp27Twf5WkmNNVGUvFpD4cky7iT4TsQ",
  "key8": "4Kbti4cDZPKRzNyNbqiMBc7Ys8KWdoik9ioQbAmpyns6bRK8zaHA3sfF1kPzfkYVytCAbkuqab7eRfc5UD2TLToN",
  "key9": "48XSyCdMfxRyUodDax5k2jaiLnBc8VQrXiFMzZ7sKWPYEYTFoU6vkw5SfVwNKSVAiYj65Jek3AjtZVNnwsw2dgBr",
  "key10": "2sWX1FpANT2RsXGcRBX6E9LZenHmXcBATE4DGSpnYJPDTX6cfyGDscaxPdTrHmHDrYqQciKqrEQ4LTKjnfF844T1",
  "key11": "21XxqehLmUXwAASoUFEAcAU3r5MSpcwJd4XvUW4WcC4vWmRiqSfTtvzsyf7SW4B9CjLBXFxyYJ2iz5rBoGiEViuB",
  "key12": "2qjGShu2GfV1t9U6GdStuQDPBCsca1vyxrYj1g2HEXkciuKzLEsL1CvkHX41KC2B7BsPadkTA71jKT4yGkVBdFiq",
  "key13": "5RKxED8cgX7JBMDdrfamkV3oh8JRVBvYCWaCLvX1557JtSsmfCqQF4WkBNcbUf7QevmtYE826UVxwpT9cBbt1V68",
  "key14": "3dCUuSW1PDcFPoPNE5VABaFtyQn7vPsNeUBvCt9vYoQVDp9Zpyy1HHoj2FiJjR1KGUcGX9wJ5nQP8Qu3X4wsH8Hm",
  "key15": "5msDphXzKREsf2CUytFthUQMkCRojJifHcDiBEQDrqtMSVVWeHV5CGHcSEv5Ve7YLJh9xwK15bgFfN4hPdJXqWwQ",
  "key16": "4TEEw3UVN5SfZQ6tr8AtoBPLN8NwbCj84jzDZoXA1hoWaR3w4k2zjc7agaZy4iwYZamJqGiY1Pji4dGWxDNReu6Z",
  "key17": "3CQaJt4hUuhqLh36AwybDFv5yZz4XPvUjD1416msTDPhB88LhZYsJfG9rQt3vwWMKvADuKrMx7CUkmvJGkScq9J",
  "key18": "4AaW6FnY4G7j2rPeqgQicEa7JWZDJTQVdS33otWtJAvNes3aska2kZsyTWRL68bJMmfCcUXEJfkfMEkn31wbpiq7",
  "key19": "2JQYmsXpKGEFDqZMX4Z3fYCSMHQ4xsXZ7ufPXY5ojQKyYXX3V5AW7Ja7japcPNGTL9dNG54bCEPbpk8ft48uvcSR",
  "key20": "pzCthRzgpqnDnYGx5AMgarcHeopppooow9wUaBKU6i2HgQn3PDuYanDM9moH6uBSBhZDHUepTnktL54HU9REpm3",
  "key21": "3QXwrskMtP4giPQvbKgJPqcDvBnB4PvsBaN9dtctCxgtX1iYGbg3p3qfBMrwyngEH6QzAyebtgBzb534g6pwv5ZB",
  "key22": "4ujLmL7RdFqkBBQPfFeU2ZU2EGf7WtuMDNo2UkBej4awJy1C43q3FBqUsRaFW1LnSZZ89PP1oFDnxmLyLuPjmLA7",
  "key23": "5nz5SVSSgQA47r3uqjteKJuEYKEgWo4Pfto6FZjKS1iF8rYyJ4UMdjFVuX4yZ4WQot9mZGnDYXhqiXaMXqhSFaVX",
  "key24": "4D2s3th7zyT8BSpQwc6zPLrwLMn9CPt1Bkojh2GBTBNMaZyphZgKeurcRb2jKXZmAMi21HrctxduDyiNiZ93M1A6"
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
