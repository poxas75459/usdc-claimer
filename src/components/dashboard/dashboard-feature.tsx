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
    "5r5F4vc48dUXNtavHmD4Trgqv4Jpq4vSZdvCMDVRjQ46ZsBSU1W6GoW33RaswJww8HeHjedLzBQRpepkPn8j2Xzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NscAftiz3a8w21CR1xpKAhmNSp9dkeDSCYyiuHgC21pPiFHcGHpf258nLwLdZMLQNGdLHBfLksosb5vrysE4RvM",
  "key1": "4hXy9Pjik1q1w7ZtuM6DRMxF26Xtz5ufsxM4kHxYAUvYRWEZ3MjiQTNi6zuh6aAcCLwYMqhCWXennH9ybsosWcqp",
  "key2": "2paaw5E7hbdSzg3pn5ns6BvBbocKpkRkELoRrk2JPiQyCErPGko4tamDVoF29cnS7zRkxwBJahngWb5VN5sWkvnp",
  "key3": "511CXGsVXWLnJtWaWsy2H7TFhKK2htNqcVpU9cWdM1AfMWui6PswCvtcjGKvSpmaQVq3hx38JidmogVKh9BhbVHQ",
  "key4": "4KYMHKsXmANuxzsj1pRuM6pWCKSXiHpdcwDEigjA9PBvpcZrnqhRrBof93GTugD9AffokYNLhbp4Xh2ztxsBsyn9",
  "key5": "5M4UDyiXbWucpuDrUSWnC5nR6boaaX2wF33KAqVSVnYv14z3ZtBhQKXix1cAzJy2eXP23bd1xpgii6ocfiiKP13A",
  "key6": "37MovX9fdzCETCtBZjpwvkRPrh4tSCf1goMD5suGq8ggKcBmMntSF6koFq9BaZcJxzjanjZ1rDhEHMuFP2fTWvfF",
  "key7": "5F3KWJ2HHSzerB65UAvEWxWTLccEucECHSG1nzDMGrdYKnKQvUZwx8odg6EDth33UVWLEiDWAVRQzTudDzF1jhu4",
  "key8": "2oZyohpx7GptKgnffEYfzuyUaDR76coZ11SWxeCHvDEHfKMU3x3L9AzwVoFU6P2WdYMkkGFH7vMFzZ9LtJ99QkF5",
  "key9": "5F9PAYroFw3ALW2nB7CjrEoVo6z15pf8jQ1yA6xXTiHQ8tC3ENeSe77zcqhqLMV4V81izPshPpvjN1HK6KUngb2z",
  "key10": "4urn3d6f4xeYwn3JyaKwZQiSJv9yYRHM5ouENd8kqdZhGdpx8gboSVeJ9YuKkbBtHgWF2JUYfohVLDEo2t1CQbkA",
  "key11": "wT3F1DmJHzDjzfLCZFY2iHdp2wKvwSWCeeBWNaNzKfA95z91WeKGuoeYR7MEK8qu385vH8yuGFBjShuNcNnnnSM",
  "key12": "64gGQrEb18YjFvk5gx94bScKuxrDAtXvbk3koq5xuBJy5qHnszsEFFGryxF6MMCFmvX2t2VvBHNskrUmk869Aq1x",
  "key13": "4yXY2tsqLgbbAZyGK8sBfyfDSrQJzXbyjf9J8hGPE8JtR11AonH5hrmucp2pdQBGfcbgQ7mnfSU8Kd35FoMqBFhf",
  "key14": "iejkR4j8jBEqxMnEXbn28xJrtKKpsQiYq9iNKicTNRAK6ZKEHRsZZapSPBwfzz3jqXeZRLUiqxBqTUKyqiRQvAW",
  "key15": "FPdbXZbEFz4nHVEyuRySyuKtBJEqdNsM7ZvU1Bgsr16xg1scDzjD4qKKdYCG8Lk7Q7XgXcJJ26rF8d7AsiXh7nY",
  "key16": "38EB2GGwtZQRrcwgxL7kaMq147teCrQeeKKkDM8BU5cYxccJ1rxkJ1HERzqUrnYmKdoZvKzrfMrrSX8p8h9nn7hQ",
  "key17": "5H9Dfgmw7wPLZDZeX2Dq3dzUeoBFWnwMkCxoa8WBvSUy22GasZ15sF9cfpKMSYVSTxVGf4WvBQDWYADWgpdt32f",
  "key18": "61HGbTgRaLHgX8tdnDUSehjZxZ6Lt3PunYGMiKGm68Pj5X9jtzQnP1fqzrNTAKzJwVQbrMkv4kewsFpiLpS9hg3w",
  "key19": "3WcrxUhJMjG5jJVTRpzYbpXccobZu5CMaAPLpL1YnhXocRwKSvF9d3zcbnruD9yY9pe9AbxqX3mf7FRjeE9vA6pS",
  "key20": "tmuyy5qDaG2ERkEMEcKYeekyfqKi8feERhL7eR56cjjPJtuGz2XDbF8P6ybVMVBc9sw6ktqP8my2GwvykDJsLDJ",
  "key21": "3gP565zyK5jCg7WviYRxYVCRu3Mh6cKzP26TVBy5gjDGz1VkyU9RUSdHDdQ9EhJxPQXLMHZPmVRHW2piLEjaESVh",
  "key22": "3Fwm2UCHW6289hUBUf6Ybh4ugzTSUv5tuW6JrHmPdsAmAQ4DKGsC9qJZXEELaJ4sTFJFUiUKb37aix8FFgHE5w9",
  "key23": "2wbZMGQ3ktJ5A4xTU3NehpdatngXDfUMb4NEozuzYRDLiQt2nq8H65EZQxeXfxVKLHgmZWmUDwK3ZnQgnJN4m3cH",
  "key24": "CAGtXtSDybN4MWaQXQrRMhF2dVpL6Zea1DwjFNAMxxu6zCYtiRdxKAxzkGYE2L2hqFeGMVDZziJmUVRNUobkJzy",
  "key25": "37TFJv1XVV8vQa3CmEg6hjPKDzbuuv9n7XoZkibaXXUM71awGKrdUeb4FkeQKf23VUjpCqmfvuxAUs6CkUSCnsRq",
  "key26": "5yDG1qo7XkWgkrDgnwA3aGAdy9H9JCbn8aNvyjmwMXDSnLkpDj5Uahf8xGPkLL6ajrdnXPD83Sq6deWzjebpnaii",
  "key27": "3K9wqrPMLdgmMEmAAbRjU6tfe18LkexQog94UE3LZks8jaTpqcQZUkc8cqjbs2iKyCMCF3aXxtpzgvSfiNNiqHzJ",
  "key28": "K7u85aM8vULn9tRTsvZpKcEUKxgu6b5h2WVPQxFjcZVfMkzrfhFWk1kwMjseGUeZ3rUaLniUyUnMrZB781uzUTr"
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
