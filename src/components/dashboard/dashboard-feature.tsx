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
    "CbS1eeSfCfre5KMRSyP9Qmck8nDCF4uPPqRAAieJjQSZk9stb7FZbebAismD9N8gGWtsRXZGXstN3t9P3iUFX5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p7tehGuKaMH678TUQkihjC2uP4g1BFryKVRYvjxi8JtYouaNp8xtG7v4Swmq1PsJEto7f5sQu1ftYPrr681gigs",
  "key1": "5DLRqkRWcwD2Xi1mdjY8ob8TJBQjjfAZro7bPbdsdcVgud6fQWpU4uwgzTHEW1GLGDLiBNpGVnbGm7bQajyqAffy",
  "key2": "53TD49LssxNu2FqnncxewFVtFXNo7G3pV4pPCN3JiRbeVMHuA8eVEZuTUo48ifgZ6MjzS1Kk2f4iatNKP6x9vJEj",
  "key3": "YLp8eVSxpTnxqpjG5qCMyq74KAuvvxi36Aftkz8v2BuXZzo5XuJcUyDwvRw2QmYsqebnNhdmYic85boH2Vjizuo",
  "key4": "4fv9NGXotxy3cEr5juAAXZt3uXKaEvGtWgid9B8kYwL6TLzrAVRY3cp43LYuKu2Aq7h5xPS7A41rfPSuWURxbDK5",
  "key5": "5aXjCAWE8LGvFWv8PoCTwt8PfwFEj8LvEfWSdgmMzHuMcZgSZKSah76VKyoEFU6SFLE1t5XqcD82Y1ivsRgq79Qq",
  "key6": "5kZ958SYstw2TBy2GvbMjq2DtrwU7ueJG9Ud6NHge4uWHaBYQ8DZjwZZoVajMM6RLeqM19mCrqoTyarNb9fYgMbM",
  "key7": "4Pa5Myhn1orztvEWjvMxGJqo2eL7NvHXZo68mV9HYhCmJsmVWx96N4Rf4gKf9CrZcnm3ij7STNTW9bfkm6oykd5W",
  "key8": "2g3SdoX53hgMaCcNq3ai8J1JwtQSbUfHT5HLkYqvgr1FoWEQ8Zocq7uzzT6Ko41DS5W5bDqkFVDJmKyfqrZbqVUm",
  "key9": "4K1yviT4qgZm3j4RGSZHdBqCtUXuGhRQSKckFPQKc3W8s1XsC4ULhUsdyCnB7DNqCiiLtm336JYVr9yVRsAR9Ubu",
  "key10": "4sMS2jatLXgDQyxgvM3goHncDqvBCsbgPVFmHmHivaGaJJHCYmQeEZaBaRh9fYBx55EZeMTe8XHPmWLCabQo5cqd",
  "key11": "66rALxVY5fA3fV5mYPmjw9UFT7uqMEizqzXiTypk7mDrrBJ5HB1DX3Bt3bikP1BxKFUMKYTwS563DXyXpCmPy2tT",
  "key12": "56dDpsMqbxtmcCYgDGhxoL5sngDVXxdBGJv6HkvicpuFi7tFigFe7g5yapGGB3gQFD4E4qqqKboRHAt34SWmkD52",
  "key13": "2qsHwqnbpG7GiWcWLohcaPVrz9L8zfZ4FAQQgoVWuLcT6Dw1fADHzkjNZjjdcWPaxZCKepYjKK5go9t7jkbx1nB5",
  "key14": "4gWPt8L1sFF7JSGGRpkvbC9e66QHwzr1RUJzvBuPPAF7G88fwZ8hHkTxDxrk5kFenaVB65X1Z8STa9J6xGEdraGe",
  "key15": "28BHhz2xhNRjdzQNbDdpbdkhA1MCFZmJ1oBvuuUA3BuD3dHZLUdoJ7e5oYHYxXeTg76zGVRNiD9dRoDcrerx9QVu",
  "key16": "3TNuuBAvC1SbeYq8fyVF3zdZn5yvmWb9nyueMRHVMfpHYf47JcD4SpH2xjGVfUdLcTrA2SyT3FVUmqwQ75XYgn2u",
  "key17": "4Twr5vTxmp9bstAf27TD7psSbUfeVbPwcywC4ZnSiXyw6QVitkwSExdUN2pCK5gYmrpa3xHcMYEfZZWaD1K1Hxyn",
  "key18": "5abu96TdkBeSh1qjZ9vwgCT2s1nEkE4opSXgAZ8sC6QcHWDx34CYCjh6pSmcSkvK5HdUAT1ZRarR6LDQ9YnKDbFn",
  "key19": "4pZSkqa5YpgvB5LjfKYzFnZHjEixqfaYVL5GFQFgHFJ8DLng3bo7RHmaKJaLqvncziyyBJyaMnbSP1vjBthMW6N8",
  "key20": "2NpTZWcT64nGNprshrhKJ38PEgze6qLcbDTaAfFNdLufhu8DU5iyhvz2RtFxWDpmbDj7iNYdLeHYE17vRuoZz8yT",
  "key21": "YFNUhVDWN53MammCqBxkCNvYFunEyVfHFYuoVAYR4n2P4NxqYGSA54LHcsXz1UjrZpy1H8ZvHpBQXiA6gW8nU7M",
  "key22": "3Rc8X5uNJTov18PHkNiiLBdMzkPMvvRVu5xtvML5QZ22jTVLbX9JzuZHZd5DV2GrKpQ9DyCE4Am26uxs6Jh2nisr",
  "key23": "4E55ynunT9bxMDqjDCMSUkauz867wdp2zXvNVmjXJBedBMsWkpyyKS6iNYzBw49aWGL92kDY6Nh66ah9cocGUFMi",
  "key24": "AdwVyJooUJKYhaSiAG8bzALDUtLdm8U3J8Rcmf4biFxfCQszxUs3gv55L69wHeADbR2mVRnM67tCcEPuh36xkQf",
  "key25": "531F9UNJbtu6GE4RJwwA5jscPDgTa1F4rR1bc1ttXJQvPRKtHhFK23KiYcasSuGgUWn7uwCowGucvsrEnwjEg1Ve",
  "key26": "667rkP4Aam8dhTUvQADf7vtyG7LgdpWBiuRLSGSPYJaELGd7krMMoKoT8zA7grjpxTA3ou6iAQ4sKQE4st7Hc5Zr",
  "key27": "4Zvdm9FsEjxE8Czx21CNUKuSgAvvuS4U8gA3RX1fW5uxXSQCoiuXrmoZkxZwaWGj5LwgHgxaw4XFJ3UduCYX46gr",
  "key28": "5k1VCxnjeNDrKrXxfru3GVBkBi2ZEvezT1zUH1JBNRcuuEXyGqeWF1s3pGdExR7ou3Y2Yvs5fLyjvK9ocmAW3Kbu",
  "key29": "mSFFDyL9Degyz4o7BDaKSUitwTWxnZAdmBKsmuwN22my7RrYuxTCYJ3czob6MCR6LkNomVbSxfPhhfkp9R15ZTe",
  "key30": "3jxb9ajVfNq3wQZwPenGQF414ipadj9JHWfSvHLFFY1dtpoqFqnSew5Gmqsk8cANrfwhMuPyGLqBQHkJ95svKJYo",
  "key31": "2aogHP4yhZdcSQgy82h7TvpeEQ6sx7hd1XHyBccvRwiepKbWmwENgJUN1EovfZCyRmQP6ginNKeMSdrconswgRBf",
  "key32": "yzeCNNYNWpo8MNq8SxxPpA1ixWpeVKMQpP93ZksX4yAmXWmiUdTipf2AUDayZ9Y81kV3F5VeMKiipfpwhMWAEwS",
  "key33": "GxmHYdXEsv4e7nye5nV2irVrb5P6worC2WRYY21UXf5YadDtSQVL1gN9yEFk2iNvMJPZnNgRUhZbQCbVDwMFKND",
  "key34": "d8eYmsBBYwXAHTQSvubuPmgP3QaqqkUwTurv9pqCqX5JZmjBto8qJbPxHdGhgHmqUpTmKqA9ceeDW1M5EastXPV",
  "key35": "3vYXhLsjSYfysMUoWn1Hizm74zGi2ERRatKG1DgpQUWeMftL5TwKKTDAYLiwqjM9dKZfzuQNo6hXxgnj9be5if68",
  "key36": "2DqruVQTgHNQPtz86wG5QJEL52Rjn1m6VD5yDVaMVgTWxbvVUHLG7HzxxcxUv5n7FjL8ucp4e71txNjcP1FqY4Xt",
  "key37": "4xM3DFb89oQC8BAcWEEi8Qy2TqrFyturhbk6rhLNbuNfMGjQ1YYxqC7DudgLJabaYFeVoR1sQD46LW8mCNrmmDEr",
  "key38": "2jvxfWctnei4Kt28AJ2AbZvtGiG6tATmuSV3j6mVG6Jtqsmf1f2iLDtEtopGsvs3RfPktNoYv6xcgaiFnYZUB3mA",
  "key39": "63jPM9qUbqnASwB2JG5uzdDoupCLoDxDZm6BDrQcNppn9pZUTTiK6AsyKnkbjCaL9CsPXh2LuVjULkyabQjj8T5T"
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
