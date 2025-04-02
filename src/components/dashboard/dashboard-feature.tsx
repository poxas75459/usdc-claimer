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
    "3AUtEca9j6ebeRHhef5rKhDq7foyKYXDQPrLYfFRREQ4dSU5ZTbPEDKstjWz2nww3V6XLD5RW6yrvEyH78oMkP6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQ5tcDdpsBNjXcvHSWKiaFnvPnSYnHMNicZLpnL535kxgz2fiBZ2dmEuogS1TQ6aYaveC2z7nBh4gVyqbu63Zf8",
  "key1": "4eceVAxKoRbPT2XV8VthnrapgdatFXrN2wgr8USUddVHqbTQBE9dN7xaY5YRLiDWUQnvTaq938pGZMzbDyNGTLx5",
  "key2": "41NtuGseaX7VCxRLnuq8uJQ86mNH2yBuJPVZoud8EgcwvhjdANVuiWYe5tc6nXvRAugouAPCSxFgQeQcWiqvxWht",
  "key3": "4qMifkG4mfPK272uoqWujDTpTmLi8wwkfiNUyntR9z9zUAAFzm8zB9Y6KhKKiW9Y69qQzPqHFGHGoHuAKGAhWCQa",
  "key4": "xkgDX36JEftMugb1jtckhGxJwBdsEXEfXRC9jK5hAyazUAY76bXH3LoPKSKTPafSYeXMv38jFEsAJJVfuucWSgo",
  "key5": "3ksyz5BS8fSxgpfGWLon7wVCcaiuH8TFFVCQ36LHQfig32v2oNte4vwQxT1EMQnnNZg9YkvxRNV6u2KLux5spofq",
  "key6": "zMTm6qowdVucGe7bmsdpoqJZ2wMngFpsJb58KJ6uVatC3GEXetctkidYVVPMsnxrJh7vy2uMKCTatZMopu9hZNp",
  "key7": "X1eYgbFgLuJ1nn1vmesRFxoLVbU7Fpz5wv8jG7EQkQDCfTgi5VNBSdwhZiLeAr1zZBCMAc87x2zjB6zyiJwFk6B",
  "key8": "2ubummaGyUCHndewhY1DvAXfete5E1KQzXzrtsUUy4sBiXVamGUGhuYFGovLHyJMqX3J8YKsQLts6WP49BvkzwKh",
  "key9": "4b7UBtk3XRE1p7DC4ydPHVnewzEteZSFGTnLURMhRvqmoTok5ZZz7sCh6qw7czAotEhNzuHoqUXPf3vNvGyWgPRW",
  "key10": "DiBjvRKuf8kvtS5MrZ5zGm2sq868y2rcot3MNpxFTEbK3SAx2ydnYaP8zFtgCx6H9xzsTCmcEGBDBjiFd3uTVfM",
  "key11": "4qcC8ZuqwVymHo9AcrkmPHbASDcorUrs9B4v6N7ddJxWFU97kD6PLaxuxPyMajdZZzcKkPYDoqkh7kVcAMNoBbwb",
  "key12": "4mdDhqvmuN28KRwmnapqzouBK1biGmN3M44LGYtQ24RfoESpDa7hWWzCr6P3WyAHfEmp8XCgHtBMf9VbiTouP4et",
  "key13": "3qLpRxigpEPbEejYurpTntX8t6SAAY1Si6PbN6q4rSdms8fzDLD54coKjCWq5eqjjEY3gT9DPZSZXXax97oQRTti",
  "key14": "4Vrggum5K1oBbsiVx1KFBbWRqjtrForNAgfLZbD9kWdE45e91zhNhd5nQGBmRF2hg1T7N75Qc8vXk6TSKboC3HJV",
  "key15": "3A5hhnenZ9F3sW3HFXgfUqP4YfsP8nGtN2i9iC6Tsx2LSh2AdvxPZBTrLDDtk7wr7toRGwSqmreCe1m4gRHSvQMv",
  "key16": "hHfhC36Mf3qKsbDkTwsvLNNTpkitfsCq1WBhtFkCSXVxCav4gny3hQGX34itj22Fk1B8yqMo8ser84mmJ9PDoRz",
  "key17": "hV6VRVFZWmwJRqhtWZ4k6uEmdxTHCkm1nPP1DNX5SGTdtXVi6csbhoSquXgYkqnzB9vKxFy3wHA3nCLGAGjqKXm",
  "key18": "3yGfGytscfSAUZs6CgJavmsb2owDVcy1k9nxuRorShq314qoBmszDihDTPSVCmxVbYpfZ8aYKKWZPEAu3gMWKMbS",
  "key19": "5JtZhaqpvZ9BE8BiPERic3mAFErfuJUDRWWyGZVJHrK4tcUXx4RFvtJgwWzTTr3Vti2aiWeEujN8H6HZxFpMQFTo",
  "key20": "4b7xL9ydMzZnNtwW6zeWHvfY5ZZHb3iaE9kjCPYxWmxX7PM6zQTwSDTPCfkr4Lpz21xzdVT3AsFbt7U1T1Jmf9MM",
  "key21": "5s9QnVhbTE4HyZAYqudsgiooBoBqEjZtgR1qxvPgotTUBjn7pP7wjPEcxFyBDPk2eS5yusStpii9pG9fUk3sko38",
  "key22": "2DbhRCz1zqs9NcK1soJoo3CoJHRe9EedmxLF4aK3Np3EYQj26nHsozyN1YFw3KtfEHCRyr9icuHk7zNiKrTW8Qjj",
  "key23": "WsmbkzcHPbw8SyMxhfMhvhzinDy6r9jFCRvTUEDLxxjxVTs3CWFwN6z85qtH53DhncTzTwCdjN55vduyWSQdUDx",
  "key24": "4hKCdmBF2SX13mMJtavW2gdppYkAszNxrGjnKnd9yHMmArxJ74zLPvWRNpZZYrimFzyuudeT297mDtP8bb3cePUk"
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
