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
    "3ZRNWS8Xhmg1eiW8Vt4hPQn1Lv17N7yDsZvsPoCiyytcsRbBREDJkHSgeeUPsSRbx1aS8ggfvmNoHgaQTbUbqK8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tHb6sFL6uUWow7KzqFM95wHyoiujZyvwB9BGn5k761UiLQE46akFwUG8v7nyCmMoCpjXVjvqak5zAxCgLhDwKmB",
  "key1": "2PNDbLdUgxn1xDfZcCGFqrf3F61juAy39st9kigRxHrffudMRE31rh8XNzHJrYZyTPytKX6dngUgdfQrzK1EiZtk",
  "key2": "2z8pLiz5UYu8EeQDwKXi44AddjyWAtFPQ3c5rYc9k8nm442eKX4xwZsCabN1aVQ5na7DmzxeYnkp5HTLgJPCskWY",
  "key3": "5ngAg99HQYBGEprNeUd6jezi4ogCAic3LNrg3xeqofsxkViaBe9ba37edRrjuh6mH1nhTckjcgfbz2ho45xCUhrf",
  "key4": "5dssc6XBLpkZQyWa6fuHXkYaAbSJMHfMcXzGoTeP9MciVnHdLG7g7pHU6piJQbnh8xG2WivayLrhaVFXA2njqBqx",
  "key5": "vmsCDmLwZpPiEUouSi8VALS4p6dbQj2b3owD6PwGooLnLefJHc13MKZ4M7aiu6yc4qnXbVvqPxerqk3BKWaNsYe",
  "key6": "2WNoLfgSrjjvDKbCNcWouTp4i97fk1nsi7xpWDBC52TYXtE51z6uzf8NjvNSgb9aTrsKqpdqSaiPN6JR636ZXuaN",
  "key7": "57BS1FHwue9sKkxx7pnVajVYoTSPpRuKMVQp3HH9FfPs7BMGLHhKC7iVJWmWSk8DLPiZVq2qjAHNNpNTQ61ZW5RS",
  "key8": "4VajHGW7nAu22ri4iKtDpPrV4oUyQDCWrk4jKnL3uv3AcX1f316sU6WQA9pnoawmRcFWGqeYszVEwyqhaFetReTd",
  "key9": "4UTkzpCdy2gyyvMiSpjwgGNn5jSXXKg2PChEnvwBRGQsVwade4vtr3fMfQicr4gmdQSjcqxaxY2KHQASEVtWGM5y",
  "key10": "2YYZWDjsZXjChseotEShZpsVWHC8CyM2TXZBzGgamjWrJG3Yx5Kr9sDHHvhZeRuPFiw8btn6orEeCzptDf2ucCA4",
  "key11": "1YfqCJ2jZKpcAcxd6RBwB1uqTCQjVYxZzoJwJe38XrtuVoAuBDDBttr8dtwn9zr28R4NVYRPNkr8JxJJLeR5uQw",
  "key12": "3SGReBn5GM9Edh3bhSRkQndyB8qroBpDbLiUc9JyxcUhtsM5LQTUkRo5QiGFMYRYWyMRjodwefckxxFLajG1fNvC",
  "key13": "imJgaEuKna4d6GeRLNdYUft2VKJbovdAnkV37puxGt68fruDPCz3GzDpZ6bhxyQHqX4TVFTPUTeo4XguuvacSiP",
  "key14": "CY9CSeDLVprhYWRVMzQFPkWSX2twqYsqjmapAfZVnZnV6vrLbx3rs66L9wrnb2btdVQnjQhXRPWtY7QT9nvnG4c",
  "key15": "ErgmBhSB3UjQFKQ6MCNHZ2r9NDwexKbgmgutr6SWb9GvGymm8fmx2yeLYnvaTzBR9WuuEGHXXvndRGAdUVoWe7U",
  "key16": "L8fFAFYkKNjJVfeoFn39XQYbRhkBXwCkG4XDikVmoe8fJCQ6MRo7aua1hswb23NNdSjYvBRiUDszG3P3tLCC1iZ",
  "key17": "42BGHhQQ2HpZ6VSUpHRPBVwNA5ZYQsuwuwgx1BJiQykLtmXpUVdziwpK2N7ZFF46ms3DDnBAc6LcpSSSXng6cK5g",
  "key18": "22jQ39R5W2YMzTpiaZBsmwhmxfFY7U3zwq6df38HGgNHKpNJfYtGShk4ybkU2yLZrMhA6H5uiHX3ALT2WKknSnz3",
  "key19": "4jGrt81ZNwtHxctgdFxyemWnG6uNkqQJdweXm8DBDSXRwbPfTjBzh6HSBaUXTkU69N411VKLu5JtMbwhrVhnWnro",
  "key20": "4EZJwtirD4QHFHPwjm3JsyTq4y3KVfCq9hbq6JdAuiGgvvcWT1hq6xZDsowVuhmy1NwSdvBhPS3zJZkZ1vozQQw1",
  "key21": "3YU2aGUQFedAjNuBdEWLDCEC5erFU535oQh35MBkHH9zGhwtQmnBSJkFND7w4k4jf4oUw4RdjdprBTubgqK1bgKK",
  "key22": "4cXrbkWh15tFaWex7dZaWxDpUoyYEUY2DGhtFSbw1Q3QWpFE9dQWn8pd5GAXz9dy6vKXxRy354PnKw4SZMqPgtEs",
  "key23": "2N5PSnLsQ4ePkm3RThDTtMucWYNTgWZZtMAkfH2pZronKoeueAEUUbKQHoR44deskxy7456GF2Sf3aNTRKThuGJD",
  "key24": "2GtHxzkiYrhBiA3D8BxJK4gJ36TQore3wMoxwQ9wkHuqK4qVrmedgx6dRacSMbJYd59Ado7nUGVnk2SpLVKZk82T",
  "key25": "3C9HVbsj5hLNncixwWHmfeht8pJhfpyNeyJnW5Ju5L9Kvwux2a8xQkJfqDeShFDYkBoefpHFoUAUoPJDHxQk6ZBE",
  "key26": "3CGYnKNJtqTLDXwZknZRQJC3JPnGAXypgYkycLQEhV7nCZXs3SR5aWfnM57h7b1yB2vxf2DBH8TopFSxpsYkH37Z",
  "key27": "2mEvsNVdgdEerTspA8dy5ZFiszigJYh7A7pVAQvvc9oVrCCdjo52E5NnxTbQb8iUbKfyXf2ENLsjGPZtAEQYJYgk"
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
