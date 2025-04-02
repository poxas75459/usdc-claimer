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
    "5SxAgA3tD6vKwqteVXEyCxEy7Pz7ieJMYSSeR168ABCaQt4QwrPpn3h5enS6tGGT8Bznd5oZKcmPeoWMcrqav8pb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "668BrLkibrcddQLTn5Ga8QDHFdAA3Kh75kwgKaKoH5xPsGCR1kV98yqbTWnJ8idpGddNCnYnkfej93oXJbkQMWYx",
  "key1": "23xjCAp2uKxRtpKsmiu6nE5BUXDtMsBUjdo75Vij8ZTYHPEEBjHVd3yARjG7o4xJfhzNpQZCNSYWgwZcRE8kFino",
  "key2": "2wmSYV5Pnjp4SAi3JjPwEka3uR3X6PhehWrugUDr3tkJ1PSSk4buT9qq22uvnifVUL5EwpNruDpbymsEZoEnaqPQ",
  "key3": "5B6XNLvt63siEjLVywFj21HnWHt1UmierkmFBy3wB8uACAqL6DKCkaFxzb6HX5x65UQx36fwh4Zw3dW3Pqqky58H",
  "key4": "3drULt55xop73sy7diZ5ehVZoujsfCqFvFT1UYiNqhQoqibvA675APSADF7LasJbn5j1UFuY83HRL7DuaowXco6",
  "key5": "5dCu9kivpCcSWQd7HJF5cV9Lt2G3TvX4ivqXC7sbAShNusSHszcDyHbtRE7rjvvapueHCkU4ybst4HvEnf6LCYrZ",
  "key6": "3Dicus6vkq1AZDzr8jxAf3WBGmnUYkE8G9gwfBYdmwPqYTyHSf2VZ5y2db5eW42xKtKD1Pc5oZ1rUWQmVzyHPo4G",
  "key7": "2E5jRDAmgCPr72tH44pdyFSbJWo2coh54LVygosX6gQHXKVsWkKcneREDNp3jVshewJqknKBBnVK7bHePZvqG6aB",
  "key8": "Pg3mxWYvCNYjxjsyiVbSWYjRgrQVzZNn6emV1xcR1oVAJCdAnBDqGuEktWoiGfT3nkcXMS4XAM6KWNGDYKo1irz",
  "key9": "8fyVPJxAzJqrXA3aaoQ2tn8JhbMypnqDMy3SWUquyGzLwcdTfwmEZFkzt7LQwuzTiJF85bnxmwwtwcygA1KigMM",
  "key10": "ssizXaCVxgDD6YoxfWuaAyrMA6Hw1qy6Kjvt43bucXBYK2ZQSKUzu4SrjbAz2GUfk3xVzDuqnbm63cWuQtbzoUQ",
  "key11": "4PDuhMyy1UvJrArr5gTr9CzgUmfvVRuqxBHKH3nzVXAXeyC2iXQNh57mnEAe8G5ab3X2K7RKdcmuFhp4hUk1N3GZ",
  "key12": "675kRY2Vajh6MrNnqNTLA9zpuGpDrBgwEHFY5xdQWyG1CiKeNybTyXeSVEAVJuafowfh1GDBrz7DGLNUaNQK5ZZB",
  "key13": "3HDCV2bUstRfVfZVD2shKNtSAZJ6uPEs1zJwcMp88uynRaHQckkEKyGVSnB5pt397mqf94S3xC7Y2c37euVDfqsJ",
  "key14": "YBshShamwerTE4KtsmzmD55y4gX2o3PZbcoKhEpna8Dg57vqAWq6kE9CowqLqgicC5nHZLioJYM1XTSqnMMdYXx",
  "key15": "3j1ZvVrz3Cqoiw7jd9JvuMpPDWuJ5UrNCaHMnaxSSZTf8ZbonSBBpkV4vhEZ1aLA3nnqeuFfo9JSDaFj9AHgiYZd",
  "key16": "5PveowBLFL42ehTHBfMY185D7R1wU9UipWK8EJpWHzKvdSWri4Q68nka9YLRXJ4kh3hZe3AYrDAz5RWwxyz7KWdb",
  "key17": "2hBab6gNRKuZwDN66gEZknstXwMp2jdVcMQwKjCM774BZ56vSdePpyiwP8v4AQpZzAqChGAe7corRWBgxzQhmCXy",
  "key18": "eSaxctVbqE6yk3rKjmK6ZQ6uB15xqAro8KdEFiz3BhmQttCf6BpaygfwVV583nkZtjqJxwC5ehX1hJVYjZdGnPW",
  "key19": "5Nx7TTrJGVunwth5Y5Y4UvvAW71JAuakCi8nHj7JQkryqXmR1QQmvKfs2sWd3ZBfcwVuPaTicjyBKWnvojEEu7TM",
  "key20": "WcN8ZsyVscpLNFLYhc5YkSungPZihCCP2ia2eynAf2agcFVraDzm3fQbPN5Rh3VDrrvquhSAdwgTra3MYZFwKye",
  "key21": "8et8x3XvHMKq6d4PNNoJCq3LF5cBQtyMEtbTfZ7w9bYmXAKmQha6cRLWEXf33DqU5JdA1TYdMAmsrDHLGQzdLsr",
  "key22": "5xB7Azexz71WEmtCDhUSTGF8XjYSiZjs8Zw8r359Qr7e3S4wWNwBm9zhDvk3wGhDQxe8BaAn3miuZkS12RPg69UK",
  "key23": "38rC1hox1RYRDJMJxJAWWR4XdikbVQp3q15YegcVnvWuZgGKYhhoNxRE127o9H3NYn8zPvCrSxoL3pfcNoXtC9aW",
  "key24": "3bhrqHUDnQ7N4xe7HCfj6RPPShB1ScY9RmV4KWRK7H5ayhYRCqLZ2sLFkJhdA958LzQtrGroCdpoef8auvT7W3vq",
  "key25": "5oocsPvEHgpdubvzKpjyeqSMztXK2MTgQRvuDVssm1QyPEVWFzCCBBETXDtLUVKod1sThLpVCTpF2E5n6at6ZZUa",
  "key26": "6chRPtJTUWVszbS7k9KDjBbFEuPcRFKuCWShaA6aKrdabDtY846q94nCqTyuXjvKDUamAqzWzdLtBcgb5H5TSSp",
  "key27": "4eRwGXqkkjMpcbDTDVYqeAgokH8oHHehyiYrwTzXSyCJMGTRtS3u2fzhbsNTNzg35n8EKagVKjrUu2h9BLAzu3tW",
  "key28": "4LUNtDE2Yn1fg8YnEVcqQ8qgZduJyyjooYzZYiwZgh3UmtuLYBMkMpFjEKJ6MDhajHBxgWcJCewkWSphiMwnq6K6",
  "key29": "2WvU3vxsp4hLfgpkfBSqLoQu7ySMcqNBa24pRXjP1epBSW7wjS4uAZ67oKGEJWqzuHA637n4zUwgKEJKK87d125F"
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
