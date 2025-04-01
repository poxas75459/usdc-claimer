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
    "4Udd8RuCNAUZgnAFTP5GRrYvzxZYYwAWp4ZYzZaZaKYUm8iKDPZ8ijSrmxntFWgSwskRCSFzxiBojUeg76q6P8HQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvMhVKqb4GT8B33CF4KqxChwCYUKg6wSJG7WSndc2c57TZ2xJMcoHfAJBKpkspqPjZ2iVSsmtKbab6md3sjaxL3",
  "key1": "3d7ZmVRNYGDusW2rPTZJDNqy7sHFu7QaP8ZQAT5PeaPLio5Lb3j1mcxc165fJqswx1tYqoCSfo8dFLZoDZ7VMxFH",
  "key2": "PdZXA4PUQZmbZQVDXZNva5ijVg3AMwWAGcC1SuxsbqzUwLAw8NJtWzHNZgTWn2SJkyyEPLMBYpHdNr3aFbGkzaS",
  "key3": "eaCJ5uRPMM4ygb1SAtfVeZXzFbd9XiZNC66PzfkjcwRUPurktmetqK7ZzZdygi7EGXo6N1swCHaXX9T1DxevpbF",
  "key4": "2p7TJYbxFHq4yZGzv3sbi3vmtvMauadP3EyWXgy8HotvFXWYS6dKp8kSEq3hjHNmZZ16eNn2r7NRGkXLfocb5i4S",
  "key5": "2HBGQwok9SNSFeS2CdAAaau66PBQt1CX68bmh4SK2CTkUQC5BhcmD5fXxAYsNLaQwziruFNURw8WrYuGWtLmPaCH",
  "key6": "231RxfiQHrvfA46x48MAFMLUkm3Cy7dcHHQQpHsgkAxueK4Gzubi1qsrcMpdKBsxmAjg58myCZdpT4seRtZe6uzF",
  "key7": "2ozWXj5K6rJE5rHYCkyqfzj3htbRxXxyuNy12JLYjsUkD7EgsecyEW1kNuFcxUEJ5RTYaTRym8SuvChKzPaNuXvL",
  "key8": "bUzdjAUkN4ABv9WDPfKJLG3UgE2axhzcuURrhRNGjdcGFuw14CzWHGApodDQLDkN5PFnWVvr862xJ8WPLU1BKAh",
  "key9": "5nFKkMmVpKHGB1Rd5kWd8LZ9SRFrzXjt1aZbgLVPcHjcqMmeUhhf2DduwxFify4T74ddHh6AjUVthq1EvhPibG1Q",
  "key10": "UtPhS3Thnuj8eJS62Lca31mPJ5cAGyDdKfZBxwY8RCnMTqRXiEEXofVs6x7aM2HiudQSxdM6JydLD6u8hu4AtQs",
  "key11": "3w6PS8LdsQicTaTW9JKoBKWJgNuACy23G3SS4dwNGGScBXjYkFMWX48KMpgTa7xUBQCyUjtTUvGpKFyuE8i4efx1",
  "key12": "H9Qw4Lb7eqJum1y6iAG3fRb8kFpaukByfkfxaRUUBGEgt8nrEvENSbuM3RxSEPQ8HR7wEbbsHXygsvjZ5NadP4W",
  "key13": "4ztwar2EtMRJvsuMNPEAGj7xbyMXpjKs4YsZg8h56zpWGwAq9QrZjy7U2K4Sd4ELTvgWKqkUj1CSP7XHYF6dXnx1",
  "key14": "VGgYoLtvwXVavBTp1PHbKsyovKpLsa7JAExVCqFC8297dYG2Xshr5Z9PXYbkErgP2rAPG5HqXKJoq2BnvQnyMpA",
  "key15": "5fkkWzwTuBCRkdMVTheM8FYt26sft8xnEXLRNs9Mw7EgDseQq2imwetx6rS6VNG6RHjx4Shm4rqJzFYNv6BmEh6E",
  "key16": "5QcLjU3HXtoDfBcmMYrM92LPRYpuZScgRSMnp8QU2ZEGH9Uz8qVPnbTQVrt8Sg58PGHWRmSHeBSrZyenS5EbQysh",
  "key17": "2DrysDHWmiKL25AfizEyU82QJyBbdTW83yjjtNmjY6D4JvHoLfoqRWdUHxpNsGqoUvdcQEvNeeJFXhRESFGr6BAv",
  "key18": "LaGW89eWY1kD94VS5gKffBgRuP5tbaKygGHNEmh5ZFuYsj5FQZNbr7mBgpGPvVu2rP6gDCkgRWUxgp39nRTi2gp",
  "key19": "H5E7maxJ9URgbVpzHkDqtVyyJBYz7N6zhzLthCawp62xmGETQYayUEpcfTKhZxAZ1DKYeMrQrgcziT9UbonvSBR",
  "key20": "5kcXTz3Cpiy2zQ9Zm63taiKFELqVMVWXkjE5QtddQ6KCXoPg7FE2G5Z7vegU29nfsDVWbxRMdDtEYEE4ANBVvu99",
  "key21": "3TnU8xiK8AWcDcSFirgpMEnkMVf3toKQX8aWqGLtN2KJqPCaKx6PHAPopyYagvGm83FTQRwbpBzNxRC4SH4Q1gHx",
  "key22": "63dgQx488tBSadCSTY91VEiCBRhCmAki1B6ZPDSjGM2apYPHLkKhSV5rmXppeaUQKVF1aSp8QQKQ5zNjTVEGEokw",
  "key23": "39ik39Q2HFxQPa9RvviDFUPukQAzRJfTkGwPyFLaAFNriscLvi4zSpQtd36HNEDWnj2UzscGuPF7JdyCiFKdBDmr",
  "key24": "4FDCe2grzLB4TfHPt8qBUUSvR2Tv4X1SXmwtE9jmZqoWBHUDwRAkR1xm1QVgV5c7BGiBCDGsfLL1iAH8s9J36ULZ",
  "key25": "2aAGJThmMpYrDDiNvCxaDonXSRpafynB8yaBVDkGNjLSEwLfb6AMK76Xei91zMLxBqNQDUF6fifUeRiGfsCVMqf",
  "key26": "3hnLVuHawdS8ZQGmEaUHw7b9bTYou2bEP9gv3ZHBJjumjBbxNFXuHbu6wZQMTKz8KfdnEBCtKw9WnsHmy3pmY9KE"
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
