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
    "3RopDDmkzn2aeceN74frZ4cdEd2UJvoK8LRFpNt9NQyi35qpK33698oD9nFUt1sSoqZFGaWnVMYyXEEQuqyCGAFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbgFsW5ijjoN2jZNEXfq4pDKjewTFsisr7EhpBR7N32jUe9PFeAfqY96Y7ntmL3qzAQfeo79nR1xWZJutDhsZNq",
  "key1": "3EdkvGRuyENksK9ZigZqLxx7by629sf2YWfNfgqPVgtjKqrCLBK3rPFVEPXSRSZok7mt9F1kN1pbZsXbvuDB9J2u",
  "key2": "4mUavcpJUyHapx3pBkvfAWaAdwhtYHoRkL1mpMFoFabmJjgiQbL86kwwfHkcA2vBkdKLLmv9S72p3PLJu2q1UMTJ",
  "key3": "xCumHnF2YGQJFoSi4NDgdZomMteSUFXVSJgKNnqmmEo6JSrDYFkvKet8sbHhh7d9G4GtjXHuhEpyeEohUNp9b51",
  "key4": "4qc41UpPKbeaBT4t8YUCMFBBfQm9bYwQriBQg7d5TkSgssm2B1mnDSraSfE6LnCqPmQchWD8eWaUX8hYENMpB1iA",
  "key5": "3XVnTbzm6TKSAfdYgKTtZfQ4cdhWG2Zq9NB5v5bRTn1jRyvKHtHiLKsZg2fY2nFbs52vSk6R4HByJjrZsK5bZzWZ",
  "key6": "mrqSyVxQ85Bzp4fkWEQvrnszvqm3wsV1H61D2gefM3wdRRrrB95jti3osUuZrnHQYPY8UwRKS3mioCUhCiFX6tf",
  "key7": "42jAxqKJmNUSCKh6UKBkNjhE1zMkpA1PPYjVDqM4v114m2oskmSt1bTg774vrxiDZrMjQreuc76w6ViTbHBfXngm",
  "key8": "7XJstMpdXae1vHs8sHVn6dQyn4ck4kkyX5xUbHXSuV2dWAfTKWnKekKPMgQkJLD7nzwXyhePRCAAC1Etk1HrLzC",
  "key9": "62cH7j1KpYEDsTrW1EjtmFnvzauNqmFSeDK4D9cXXy4PWAffqT8KgaZnR7fXf3EfriKP2QsrLxmdZGbiNqc6yreY",
  "key10": "GHwm5cah33KSAxT7wwVG235YLCRy1kdcdprepx26K6Ec29HGz7dnddn8dDNXbgDkdv8zBmUutGmYcpDBQV5nCNY",
  "key11": "3Uonh4dJwfMorchjhoL7pZe9qKaZAAosyZnHgY1UuCuM1ewYma9fcWVkc8gcsuhkAbfPvHdLMmoUMs8hnWamRGU2",
  "key12": "4XZp8YKKUduNmQH4Sm6vQqXu19dNkPrKrnJdW1bXUcGCGtNrNYXvrHSU3VWeRUKxnDvifNhw2rmnhL2N79DTKtqN",
  "key13": "5gNLfq9J3tsmcJNjinycUjgUzMg7wLLh3C1RTzxeP8oJmrE1HrwSHLBM5A6PWAdfFh431V2paRXqJbaxcBNynK11",
  "key14": "67jwoph2sU4zP5kBzg7vGpUm1N9sGto2bBQYaJEVgn2NNBE2RDFHJUCWXnbGFRKyWC5tgQkHGB2ALX2nM8P9tAnd",
  "key15": "571QGLerg2qnTtPhE3KTRLaSZeo3geHdYUDiEiYjYuzXmT78sWA8WiyMtGUqQsEnSWkXHZnLmh776QBHQHbf44vN",
  "key16": "3jeQXxpsuEhW85aTNhL9wxid2uN9gBGWGdkNn1EL5YKfh99SXZ7ezND1SCSAkY5WFWNKQC7dbWYE1fU4hwsxBXs8",
  "key17": "5zHsZnipkkWmSETVP48dU1ZqD4Dx5AhxFhKu5CUZMvkeQkJu4okp1XJHwWrCZYpzytqMLBztDzYL67ssfTXJvhsV",
  "key18": "AE8XufCnFLGJRKSKV72fMJFvu4K5zPYsUNNemi9fJkH5s7QEUa4KF2yDVVRpyuWn11E11vqA7o63D6cvQ13y2Zv",
  "key19": "3iN8sXfruKEad5uEVRu1tLvwpra4KCm7X1TsbRcyAxjyhGfAcduAakGD1f7EbQXzjEWZfpuTJA3SsuFDwTZhwpTZ",
  "key20": "SwyhygpJkb71SRF95WNbRugFs5hxWqdnWKGhj9dndLzZnMX4cpACxzr4Kk4Msdc6Jv8mVaVVVth6azH3VbKTGyW",
  "key21": "2yQJJqAda88mXW2UzGivQW2ryEsFeMkqHTUimtJ3qtkLvqntzGebCfJzdXwA1Zb8PMZeGt1uPtpXV4iuV2ZK2545",
  "key22": "5j6N3wE4TKatgwhj5CqLpbwqiNBJHUSabCnfZS3SR5S4E3qrLc1qQHYEW3u9Q9eg7p77iqTgqgrZsaJahvLW4YLR",
  "key23": "5ECphxmZVMZLiz8GNaMJeuJDyjiA3Q3Ns5EnXqQZG2NQfJ8eZKwoFM234nwAiMdmsbaUBZ7Q3fCW6TLM1Pruow6K",
  "key24": "32FWkpBrxv7ba7GNBcKEowhnsvcpHrwgQyW99BDeiCPfrpjPGpnpBv3YjbbV6LZ9LZN62qkdtQCKfHD4Pr48qmLm",
  "key25": "2fn6mYkgmWHWaVJyA9hKBTfKsufwKWK2f7rcENkLj31fL6dXqzRnF6xr1sNEHVQtdvYGL9KUVM7EyrA2bSXPPT9r",
  "key26": "2QTjjGKgEovjrnXZG1WnPqfDewCqVCtndQKhDYczcR572wTXdidLC4SR22md2d1XUzGiMzF9EPGXQsDwMjKniCp3"
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
