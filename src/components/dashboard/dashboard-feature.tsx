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
    "M7Ss3wPFJevnfhBkW3G1BzuyJpiZ4HSwtd8q5QBJWiqNe8xQbKB8W2YqWG6hdhT3wsfQTiNyh5hGi7qmpjYwDtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKuqQ5j2pLUm83BZoR9nSCYMNYA4DkqyFP93X5LgTyEAWLLgzhmsCYyB6xpi4rCBxdESBcg8f47AxG59EEBxfLa",
  "key1": "qnjSCnaeqwqwnYPDpSCGvpq4nfwXERZDy6WBPdJq4GGP8TSTmgMEDqwPF1WkrLeLv4wH845dHoex3Wr4aW3id3r",
  "key2": "5psybsbXtFSYSMvZPdNEhqASnLpauk6mhNYxFyPbuVzSMhU6VGtc4VMCU8uDZQXK4yHGAgT9zaPdQE48vUcdbNMb",
  "key3": "5A9xS5VqxNbHfPiyx6vFPtxGbZLYEVQVcbcMvCgRkktj27QcEPEwHYvmLNvP3y2ujysYWzejUYeEdjSrQqcpBaPz",
  "key4": "2nr8hBJ67Pk77a9HQxY396qCAjZKysn44wuBgjHbaHTdquHPFZbzbyxW9J9QiW42ZcuN4qiM4VxKq9e1nSFMSzwY",
  "key5": "aH6py7YuLkxd1eD7HMhoNrzoTHYqWgMGrW5NNxpbDX27tzjs8RkhxShsH3mAWJAmAAQ7ac1AXijoTMH37pp5cxE",
  "key6": "5oAfq5QEcq3BNcvuJWN55MbtRikJ6mHdtdoKhM7nuf8FcvU2WqyB8c58YU6vSQnsfLTb1vzA6Pq43nSHXaCXxexB",
  "key7": "455aB5sNxgoREJ7gANrwyYLVb7u6hGCbcCet85wHSVicF3rYvW8TLvwoWjjK9aWkEdN3qm72CU3kaB88PMLK1XNz",
  "key8": "3HgoMWh57bZ3RooKvsAMSAdAmmu2qUnijAhrWq2fDJfmuFEA5qVN6fPyZ71129g5AWdoetE3vGEsYiEM7GaPXm5u",
  "key9": "465fNCk3zHCYrSH2CcN3rc3efRcuUhf9D9yRAPAaDt1xWqtfCesRhB6hFr6N7kmujaNUMDNfWwRgVcs1no3LX9fW",
  "key10": "4oUstSd9LEK4gUWuxnwgwN4hXWmyvcuNub7pGjrjGSqW8vDPevMs2WAZJPzDdgFwn3v8XmbGT37Wjde9sik9seRw",
  "key11": "4GEtGDArprP1pbuAraXvXGkz1WZi1k2QUMmLa99krCUrvTErGFLfoZyommJKT5QpwRYu1QZ376DX6AtFYgJokjEW",
  "key12": "3dV4AE4TxDsw46NwLCqLAfu2Wohjccigx6qqhSrF5MfsMs5yRrgwRc9pnm3p2cPUj2w7Hv6LcRBvKWJ2Qmdv4PA3",
  "key13": "2Vh2TGjvDAJPF95JT62ooKEzrRqMJnTmhQ2dzQWVCzvobMsySJsVo8zz3yrNXumyoqQkicHS73dBhiGoEwq3TYFx",
  "key14": "2v9BmG6jAWPJ3oFZvE5msd6kZwsK9XjUj8ZBDcN5VMrPjMeMC9A6kS2rz4vPKSNbcLGNhkoZZmX9yiAQv8nVNrXe",
  "key15": "3GLTrvtwD4anKxReKNJUnye7xMkyTD3PuaeHYZi6vYCiARf5FrszwBj66v1EbKJPLXF3XLtCuJxTanWYhsvnNG3q",
  "key16": "4UT34o3gtzLxApCAndsk5RYYGMvK7TJx62DTEtP6N5R8njLHi1g7GTa9qwvYi1LyGdnDyKC72Q6JNdvhsbQA2c9d",
  "key17": "37xiV8j59uGb697WEfMhNaNs7YdpmQ21M8zr3t6QNeiDZgAMwsXkGDFLQf6SeQNfZGe7KgyBZbjsFFismmi6xNuK",
  "key18": "3n9fV2mP6EqiNgAFumbLG9Ytg8Gesgr4EYQ5bzTLYNCi2a9wrotWyZddcXNW55JdpcWsKLWnKJgWoj2ktgWBi9VX",
  "key19": "3JvMttJB3ubdcKoovBtgDPyedX3pgn26uezcMRad7vMSbReQNX6hj4ZrJX5txRwy8coC7QDdRKkkAH2wmAWohZ2C",
  "key20": "2RhhF6LNp3ELpvM5pbNybmPsRvttsiB25aa2mpAZEUroqPV2StM2cNfg23xmBSqjZ5e7iNEea82LTK4gLpeRqgc3",
  "key21": "4VTXtLokwSWT2xW3E7vs6qbuaivwtD8SSvVmhyt1qDBSNUf6ocjonCYkyYAhQNJCbjp8BUPNXjZyVsnJXyGUh7SA",
  "key22": "2ADHsYCbaNJiU7uJHCrDf7czatmYR7nR8JYFhBo16sV5pWEPNjbiEhfTM8zvfGAEVSsfWLoRPhQyMMjxBEGcgeNJ",
  "key23": "39nm8WvSBdDvQctCy6ws3yP569ExREJxFYK7LjMpLzpFkjRhrJ2d1n1d7cDLNTGXQYRFmSmctmQFSV5HQAjNX94b",
  "key24": "4Q91VKfkWzEFSFX9C2TcfWY1xLchfDHtdTZ5Fkr8817QMSxrEsD62VyF2NnUyzuKpE53eJN9qQ8Vi8Nm4cjeWt9p",
  "key25": "jPdpqj1H9F3BM6tJNyZdh3nxp2WZ7ZHiwQbquS87CjxCFpfUTLMFFoKoACgZLn5x8HNKSp94QvLtodeMwVFtTiG",
  "key26": "3r3ip1eijMET2WbSjD9tgFkXquFsLjp3S2PoEJMYsKm2Ac4riBhuPvmbXQPB9G2GR2fAdNgq5QRELr76Tq6B8p2z",
  "key27": "3Exq4WNUKzrkuy9BSCBrpGrQDtxDavz5n5HgppK6iMMc7cfiRYn41JuN4caeXVDNRZNNomkbakAQkXAtqvozZPfZ",
  "key28": "61FAzZXk9Sk9U4gQevDEH94KkqNCbCkNwprNTRBUFGWaJfobmAam1yGyQwE4jw5ZLJTTzsS4wNG3U1ceRGzx9AfE",
  "key29": "4nrSqpp7FZmCv2uWDEGxW3d9fPT7aJrrvLMivmHdZU975Qp8GyertbW41uJRSP19h6VMAD9BTvoL5V8t7qZZggVu",
  "key30": "CTsBsj9MfwKRFN51xad6ApxghYUfQ39UjFwVF3Rgh3zAXjhUQ43eGE44TKUB17x741U7yP1QRanJ3wCeuAL4AU2",
  "key31": "mns5d2z6HNXgC7g4xsexwZ3toGMmNDuCYY6cgnFUnUL1Muna9EM9jm7QagcMRSF5iWnjk9tsWnuzKqRAmfetTut"
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
