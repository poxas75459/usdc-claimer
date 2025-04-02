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
    "2VDmk1UP6BdaPwTtHqnCFtdXy4A7vCBK6Am6U5BJGVTmXy1AQifQumcHo3SPApNz3P1YF5hQm3VvLEf4tDtYUdmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ropA2rocZvMf4VZeKCLSqJULqrgEZp8QSbyfjNigyErycbLwNJxqwJ9R4jrj7sPL7E8UxxrhboYTaVMyAVZuASK",
  "key1": "4cSA7eSKhwFfHhkRv3sLDLCcLhMJqT1ZE9EbccxFZ2if1fYtJCm7D3wCXv2nTd782FMmgDSdPjsRK4TxpY9vGspb",
  "key2": "67f3XDMvakxFZyYrgzefe39sSd7fT8AXZSqMrEbFh5RtEEzgv1CXso6tzpLnZNTEbyWNtgftESd4wGZMghxvhMw4",
  "key3": "215AMhYMaYBSmZoECoyhBpSMEjSwGQhaPLwbE4QDrowwoLqVsfQGEDxwVY2TEFHgNGwqVQFqKhsQ6HxsTKQbKsrB",
  "key4": "jrvG6gXJTJpuqRVtZMShrxSxw5KnmQsEBs6GRU7dXB7F2eJ7qQa4L8P1QpSRCcy7CMZWerwSdMTEKEnNZGjSQj6",
  "key5": "3BT7Pvk9z1N46G8knBTPwtPgru8UPU41PbewGghqu4BZ9JgNoTi4SwJKEphN1fW95rQDrzNKkYWujSrDKrUZhVh9",
  "key6": "22Vu1XRWU3dfNUw3Eoazaeb6xMCk9DoArK79rp6cw3aFbh1cuMYhb9RVGdDM3pyEQwiKvZWd8GfkKG2vFXr1XnEk",
  "key7": "p1LQwFHChVnB1Sr8RRisPg358uM1uUu8ZQ29EFWZkfGtDDjgmzjhKrewbeuxuzkf1kKAYKUbZp1w1oUuPmgHE7b",
  "key8": "4xayswiqEzxSCzJ7x1x6hGrsyXwsdsDW29UqTjELEr1qf8P9qEqM9zR893SDmuYEyJ4MdkdYx65eg1U8MMfscteP",
  "key9": "3fkzEkASQPKccPtH4BReZd6MmbnzEFW3mGDcYVjvoKvyZsatfUBsf57QDjKra6SnKC9FyN9Siap1Y2skumpYhHib",
  "key10": "35RcU5vhSK7hSdSa25zD9sBMX4CcmvoY4t4UaMbJMHxMi1uFfF3Ltf3JvVUfvgoVz8VXRgc98q9GaNNjc75F5gXR",
  "key11": "29Bd2Q1LbSzysV9ACiUJ6KBZJSxP9aPS1Vh2a98PR2VdCrqF9xBn2rKEz4G2zkdR7G1Q3obKPtguE7G2QrwUXVXs",
  "key12": "3MJRVivZmffiP6qkENJMwCA1K8oG3rzV2r6PuuTAnYM6zLCxSwK57Eq7VUmU6jRMSsYcw9kNG6vFr3sK4YoHSF21",
  "key13": "4wxB2zceRnEafcuUuC6QpnL7wR7SomKTS98DT3df2Diiono5c1bPM9j9JckziRroCiJDdrcSk7Xvtpuwovn8xon6",
  "key14": "5pdN43Qk7Y2jjzcaUVy2xkH7PxnoBeuEKu384uoaADaZCBKhcthpcYwbsAnNrYid8KjoRkU6pHMZVjL3eGNg2saq",
  "key15": "3R8Mnzy5qfmMNY2Cxf6KV3Yf7Pj1CPtu6XF3wssoHnAnGWwyQ69zqfFTqampnN3dcEGLHjHwxFQ9ZcL4D4VPhp3f",
  "key16": "3RfaDmCKC5LWGNXB1ahfmK3oTVmhetNmN8xGwQZFWuevJ7s9aedg45QiJLP8by3DBGFaicViqoYohVFNYPs3UWuw",
  "key17": "2ifG8x4WpyS8Q1vdRVtyJ4ZZhZpyyuStX8GWGHtW9bJw4hEdA25NXgfNd8bdhftJy3Bani6UHHW12Bo2nqkD17t1",
  "key18": "2UjZMLACi9sCDwodWhRz7uLpn99fnS9GAL6Jwj67NCMbjvFXcVt51Ds9CJsyVr51VWAXL3vM5fsSmDrJeoMV5cvN",
  "key19": "3PgS4DUFeDJ2gsa26PSHF5LBibz1FxjTgNtfpzdxjFDbRrxNUCwvoNCwJZLtmFzWyUWjZkJuCwhcVH7sHNBCxi58",
  "key20": "44pJJqJwyCp2a2qUA6nqjRbu4unm4Nqg5C9gqW17svgHe5pNNFhFoh3Y8sDzTmCp5cBzyfP5LS1fAomRd6MLYq2u",
  "key21": "2Etz7LJpHJeFJtdZ2htEfJ9fc91ps5bzx5mixYiMaAiSGsxajcHKo2NRyv5nhwAdw7iNfGnvgtYCV18Y2NLocyFC",
  "key22": "2wmmWXwB8tJTYvY5wEYeXWkVHMGqwdPgLhWrBUCbtV371PMr6oX2KUUiAmFSxqqftEij6Hso53neBqN7BSCJ7JRD",
  "key23": "4oiPsWtxz8WJZhkiEwSUzPgg2gLEMw7R4N9UsDuSUT8ZYgtHd7TEFgVfiXjfBS3gSSHfertW7YDjrAjktUQvRuq",
  "key24": "2arwX4XUj29GNiVvwr8GxQ7AK7gcM6V2UpjYCEmudzvKw7AUT1jCGUH6QiEb398Dkw5UGnR8ZFRMGb7hUuLGUTR6"
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
