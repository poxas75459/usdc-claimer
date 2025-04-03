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
    "2YgFW4mU447zYbWJGKf2nTYYXy5LZcvtV8c72aFCMukAvHK5KUpV3EC7BUKzFxf5Q9MFKpLfCN6yyNfVTUK8uMoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHWiLBvNP6kMjRpr7SsUXuoXK8uno6dh4rqh1gBf7p46T1Wq3PH6JtEs774o9WS3yrQkjSYqPwXoH8pU1BvZjoo",
  "key1": "YkyYQeXhQ6fEVT7Twk87WcQ5Wbrpfvm7JqnBsBV6oqHj2do27yne5HzJHpfoNXoquPUamcb1CZgSPJz7WsSL5pv",
  "key2": "guusFudJSoiTboNBYMvdqHwbougxW1b78P77vUQjqvMvrL18mCxiG3cSGec1gCc1XDzCjzUETyTBmAjK8GJUSAz",
  "key3": "2iXUVyPqAN4eNknSESvymGN2tXufktDruAht1ePWzNMHqawxehMCfayW2UmB9Nr4ZXr3xfa9n3x2gYkS8ZQgroBD",
  "key4": "2YgMWxY43FMjru3GK5u7GA6bdQH3JpTwojonAP8LuLfExyEe7NcRSh4scYWdRnfn14fPBQGve2FbaWbyqW29HREk",
  "key5": "51FTtzu8EcAvFVMZG5ox51X7UbXgxr4MnyiKG3PwaApAc7vdHKBXVkDNjNFBFXnZDLnKQdWnHjC1TQ7QsQN4sRuV",
  "key6": "5RjJgfVHYrPmdFftWLCPFjsPs5Gt6ghQLBfAJux1g9EBzexP5FePF2dnisbCAE3NNmFP1FfPbm69wx7ySWpmtRdN",
  "key7": "5U6j98ervDCzusBUctJpPmsGRi9BBkXfH3ebyzuaveZ9vH4qjjUNUs1fsgCtM55SgSCHqc3b5dkakacBQ8dFg1tZ",
  "key8": "WLA7mbAk3SqPYfaMv3gjCwiowVeZoZmh15yUFx5r2k9nVtHynWh9Y68iLLRtmBFwgdYUEy8txUVKyt34e2W9s74",
  "key9": "5kqra7miUM1NFPK7NKuYsHEFdoifo3GGHWtYHTEdFF3HL4oST5QKnh2K3r9qq3RCaGGjWRmAtgfVwiiGsiaTbXQG",
  "key10": "4sQ9v68p7cbXdUkVADXiorDSaXx1biVZM6jw68Ud7347mwEspGQ4a9ukDKVAbvaTFn92QUo9fytqq2G2BJZ7g4sw",
  "key11": "9jBCK5Sjj924pRfyvLAyN9J54z8ot1PS3QwtdnziqNYLarKTLPLNUWAe3WvYVZAxxN6DZwfbxCe2CgF51wfoV6Y",
  "key12": "2Z1HUKuK3JUpfyd7c6H9pwkkwi6G7gm6QhETToYoTPAEpDemr3Qf62KYLVmxYgqY1HPKZKHDAifjyhFuV7yjzBgV",
  "key13": "5uYneBQKgyedB7mvRRS4aoGEJRGBX5SZ3wAYHdAgYPRMauoFrrKDgFxKRfJu2KtjR5uV3XkaFYqdGnhK2mygq8Ne",
  "key14": "4pVvB1xQP9hBCcEnzDWA6ZHCND3p61HtAJ6hKZxBdY8XUae8WAWhkjMPQ7E8tidN1XQt6BaXkn4PjQUsFSCAjFxu",
  "key15": "nasN1vHb6hj2uc2jA67ZKrKXRohTBeheW9XhWdeoSDmMRRjtzaVnv2AAzYqe2V7wvXaezG2jj8ynMm1pyraE1uU",
  "key16": "q13KsL742u3GRys9HZFFqCXM6uFTkeRFNuBVDVUBLNLRgo9bP8Ym7Kc4fE1vwkMituBFh5UU9GiHtHnH8D6ybUs",
  "key17": "TTEZgz3CmfjpKpzMUPH1FvtDMvBH5LHxQtsh3oh7TXVfEzGdSUQk5rGbdHNHhHQKq4zoZ9UbP3XhYFWK76KJVip",
  "key18": "vR7on6wKQGjLD34qZoztVmRJuFXMnWTqYP3cuZKqtc9ugAVmuHGtSvbp3kNudShaXPtCy1YetBxcengFPZpoVVR",
  "key19": "599v3yTGwn8MnUiUxE2J7ebU7h9bbRYSvKWpZpXA4kgL2R8tHqgKt3H6HSP78gnvSNqsAhJqea56P2nSo33dPhLr",
  "key20": "5GDk5ejU2NpfhJUqT4tx39r65REfUgidk2jEjeNMC5f4se7DGsur63vhTF7seZJwGbMmYh3DncwAptYH8oJGUzKD",
  "key21": "3sEEmMvzhy4Wx8wYwDFKF2VvtdryaAuuAS8dFr8v3UAd9DFQcWJUSiUqRehfEdu7i9sAeSGJb2LV9LQWBEBdWtoN",
  "key22": "3TRfa5VRZZ1rbdNiKrtjntRgEKzAGJeZLgzzP9Z1n6h8ivaKmRNtgJwZxz34wkR8Z6bUDQKFYqPCbbhMbKcaJKp3",
  "key23": "2gmFgGPsqBarbggzN8hHXPUtwoegJmpHAKz9SRLcqdUCNXLwfkezz8KVqejssjwhBHuHBP56s3xob5VT2ScWuzDc",
  "key24": "V492VZ3ivfssH3UKGgKj2o75UpYpgUqM5MN9zEzKEVoAMP1gWW3ETtxB1RWQwVfDXNN9kahBKNvyxkCHQtaA3QR",
  "key25": "3mxW7V1yEdURstxpwVKpuPo9SCSgk7rgjU3EwWvuNhfviDf4UAqPMhPG1WVXz4TbC3m84XfF8LpigWS4Xa7rCWrS",
  "key26": "32fMtyGSRZuApx3bchcjkyUZ6CbuVvTSUTfTZj5Wp86Uk2foTCyWtaibzv2WiRwo9UkjEpvdBQQbq9qUfek967A",
  "key27": "67voQwVgfKd47egXVAHf5MDzVQGFVrAEhtBvhjTfNmV31xSJYgcYXypWvDzF1oVRNcgYt6oprZwGHkcFBTiQpV4"
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
