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
    "5QLdSg8fitCnXFZnpj8UJM8591e1CoimVCfWXFkAnNDNqhrB83kp2TdqGLBxEmvv3LMW4RQ6T5DHfv88GvmNy6M8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1SD5yi64JnbbSYhKxDnXnAiXRQvc93sZManLSTYos6z4GubPDEyd3dkKSBaE4yVrWoGqyxSFWCR1cA2s6rnbHb",
  "key1": "33Aa2mUzEQpVmvjYWSbEq8LF6zabAasPcQw6G5uTjN2DHF2yE5J1mLEUpQP3sp4Hk2FDs2Lei2k5rn7Dnn88AKyi",
  "key2": "67Fbz1Uwy48R1xx39aFdw9Pm31VAsfQfWMTVf8JEfAyKXhX1hjrUbXnbPGgDvd6bPoTsC4bgb9tsgpDnNHkrGcxi",
  "key3": "2tybN6HyutZcocgXU1e4bNEkP8uHTMhFHoYsJ9ZB4PQsZC4zHRr2jSUpocZ4dV2oKddPt3dKn8ZSyvGD33ZsXqns",
  "key4": "48AdjJUAfjwFisw8FgdyvqJPZtZpKm7Uhk4etgMKZHYLJL6ifcHtpp36gMGySY6tG1Dvj5kg5rsXkc6FDYY1q2Le",
  "key5": "3W5Atj21JyPt1aUbn2K3FbJFqsU3vzWJmtUL6PR9dqy8MANT5X3DyVprqpBwEU47fsVRWPDZnpTpyEfP5DupKRE8",
  "key6": "uFuZFu4MAQ2JmX1kRP1X7ppoHwNJqEj9djBb3zCSbmvKEzGpYUp1rHRvpBmgVU475ZXXdXKbUanyY9N1LyY8K9T",
  "key7": "2FFAcHPyxFimw6fxtEjgoXo3spUhe6bPEwtWhbGVK5Vcv5w7rVMMWWscjwbdJ7KX5r3eizKkVUaJN4eCPvpNHdcW",
  "key8": "3F5MvXUCLq3FJenTzx1MNLkGf9PYgxgVJtCT5BN7BFuavpP7vY4ZbG2KAe6mpqPWe9mXnMzu6131pCVmV68buo6L",
  "key9": "2TbZ2Sn3guorZdFTBBop8wk1ohVMMBAxd6GdXFUatvSwhWLeVqJ72SpwTGAuMLcvQ2gKMiTkXoRS17i5FopWHGN7",
  "key10": "BpaGT7hGYe1V3gwmCA8TSk5vfbmDCia9Z6rWVnMmVq3YAadrA4Byjtp8NA7CxgWwYtKHPjNpcgjLYPCSjTRDx3o",
  "key11": "2mBAB4JoT32ZNJRUVU5kEhotYuzGw4TcNiivTNzHZsA4AE6mzydEE6tkggAjLbUMh3bzBDqYoUxH8n1HXVgKbTb6",
  "key12": "5QcSY5oougqdBmyMtEmzZniRdhBupXejaJdWb2M8cpT3UrXS1wTKTVaMuoubp6C6AxqV7i3HU85rqkawiYG22Kkr",
  "key13": "2s6xjv8LDVNHyq6BvL4Md7xzpBHn93aBocikfTL2obmdxDvYzrQjnbcftu9ojX5pK2yq3ZfTo4uinx8ADvBbeaHa",
  "key14": "5NALjytJsacTgQXezCnA7Ue2EL8YDLREQz3F4b3V8mWnSrpfwzcy3E2QRJgz9C7WvCnp1Hbw7emyRQfmrW9Lr3g4",
  "key15": "uqu77hh1e5yGNZiZFWfxrjtkvdSLwKB8AHpZe7DnZT8WnfqLHjjN7ExzFbp8FtgWMgdw2TmqjsZrDzrNdetTedQ",
  "key16": "wNiP1TxhMr3dP27EDwxd6tvDLYdSgyz1mTxjJf3ZZYPjM2wWBGYSkVjYGz75CeTM2kPmP4EM4FJ2nJ6QRjugtdS",
  "key17": "PGMv5RRwfDscoFxdSztgbrzz5GuXWyeZgM7mWNdkiupHRcdfJvjCi6MgZ3KwqLNhQGBbE6NLrxiZU4sGHabQQ9z",
  "key18": "2iBsMZ7ZhsEGrKHaxkUu8LTMnbEKTiDGcGAv618gctzadWZDH9RfCfcPiY5XkxofV1HU1hrcGhzQucyt9vrtzTXk",
  "key19": "3c6BELozaq69vjTBaFjx2J6yusjZBvPegQTpA3bhF2zJ9oxS2GZjBWSE36oXK8ZKiXKV3QNon7k9kvsaBNSbTHKX",
  "key20": "2H8Vc3YR4Zb1Z6n48iToeeTnFLZk3TJjhy9Qao4mGc1hncXmaVjxP4upRaRKSBepE93wSPbNXmB3AXRajZ2Le6Tu",
  "key21": "2tgbFvrxnT87Vw6XqLeGXRL7WtD621FJuGk4AgKtAFgRKiSrPeWMVVHpf82Q3gZ3JiwgaVHjNfUNS3kcmdKJ8zdV",
  "key22": "5291kJeZF2K95XP5dvBXvcqesmUj61NLuVFqusjkdTPQ57ePzVBr23mYDLkT4gc9ZnzFwoHVaBFeqXh1XP3VUjcw",
  "key23": "5gHXtiawFNZtH4fHm5T81G8nNCHprR1eJxRavBjc6FsuPFXKKRPqYQKbCsCvbWn5dLYMfUtADQACjPio4yjRkoGU",
  "key24": "3MJeSG1rkfxyU6ChhiPJTNN9f22nh4c1SAVdsdVTL6UAxCqzJQ1M5LH7gzn8vh8ZxtQLFAZzpH212M3iAgPvbuRK",
  "key25": "3u6AFtx8GwHBYJoAswoUnhFSAqYmkCmySmcJd1kNu9LkmrtsH1q6QFaveaEwPDScNgCPpxwJ1VjQigpnp8ADBb6z",
  "key26": "4jHvhUGzg9YUDpnrpNQQFJbaFRNzRPhAxcTyJbMHTZBphqQnkQgVojMmnuNRH6fRrobGAuN65YhZXtfiJchQDKJU",
  "key27": "4X4JYW9QAS9ERwMEnCYytFhVbf72vjdXPHthFF7B762axMR6EMMAVtRJ226CMhg1rKtdefV5BDeZaxrkngn4Wm6K",
  "key28": "2dDTe9qYtvbcfE5HNgj2uvh9nSLQgpa3EyBWeMstLQJBTRcVxo3HBobwskqTuW32nqhTPExDB45rsBENCjg3cSET",
  "key29": "2o9RpyjqKR7o8Hr1aSUaYjvP4nJ4CdygozcnPMp795voBPQevzDi1Ww9a24cq5WomyiLt2vo8cr4FANTMkyFTTRH",
  "key30": "ycYCGgjKnjqT8KyntCuEF6UCPdLjLpaZPPJFpooh7JCnzugzqnasDtgRudDPM8Aar5J4jQ11QbqCXYxEeRZqmLR",
  "key31": "5fzGUZuPVDzxGHEkh7GjHYH5JPd1VgjKi6G9spjxteLXVDNGkc6FwsoDjPN8xUKuCub6Psi4i7e9mXBqcQzKhiTA",
  "key32": "5wksnLrLQujeApsaZDupVV1tMbbTirTW5xssyQCsDuVxaU8DiEgDZ3brJi13K2j1Z555RGQSniFjao6UXXEgUzEk",
  "key33": "3CJyoKLuq97TbbK8R9kNyW7jvgQXCGGKk72xYPwBpNBSYD6k1ntApjooZ2J3DYUDJviSEAbjKy5aoHtNy56AypGS",
  "key34": "MwxHvrkjdky26u6oDJJQkBeiraD4kHMux8m98XYs7VTcXnBY26wXM8o3WiBV6i2ppmrzcDue86yFzPAo5GCtHXb",
  "key35": "4f4DpycAGcb19zohySsH3DDxEHRyvELMw7F2M6vy4FWtN9NQmA2p2zxLJfFPCicYKU2HvwZAkDwKkd1xqwn1q6Q7",
  "key36": "3xctftr7ReipbxHxASAKUEoPwVLh4rzWKjneuV6V3k6b669UKiku719sLa4QrayZDgu5Siy4nooZN3bg6XHe5S5N",
  "key37": "4PMTAbf3eUgyrvfrUpxds9zVSM1V3hv63k7dwut287PFaSnnFizhpobLeDWU14grY36hLMuygTAZ2DXudP2jKAwD",
  "key38": "5FPybreQSSvKvRjpmwGzw2AjrCcHr2BT8PVsWSwW9dV7LyS5XZBRVL3BUAM14MEz8aTXrumVvw57JhKdLUfrWSKi"
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
