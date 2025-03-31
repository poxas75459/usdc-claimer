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
    "4mCECCL2hZf86meqffjQohvquwUcmQUE34qGRvDwUnZRSGYy2q6oay1AsP2f72eLcsL3wNbAvwqmJeoZ1DiUorGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W67U4x2bo7CxvuWQFfo2x2HHSV9x8NwqLmwa5cUaCaNry9cShpxTxhpaoeUrga9PejgyySj7t2G8uwQYUezn98J",
  "key1": "5MxbzavonGsfM1XrrMixFrLkehNdyxj8QwCTU3giHVj13FQYfrFXTx5bzvXZy3fxBk4v2U5DVMbQnUm1MqmisJsH",
  "key2": "2m8u6PcTNRCWvCui6xhSqqUgfsBVeEedTfdMYvgJsi8s6t2URn1bCNvrdTrjwJ4G7QsvdgGK6V2UK9ZaXxXoBTPN",
  "key3": "4Jf3nSqdebNP7mHJn8nNj6WrZbteQTGusEuK365XUNscqCHXBd1cc3uqQhwVW9WL1aBMZ2t2yqjdUYisuRKsL2kY",
  "key4": "2oGfFNgRPTKnLpuU6FozV6unR9LiUBaoSkZZUpEtHgEaHJUtMUCvHcCrsmWoodTaDpK8VG68RPrN5Rc78m5GhP1p",
  "key5": "5J7EgNhayz4r5gKkM7rTTU3V2GbWHVk8Zab5FSPV7QNi8R95DM4MJnEyBCcBUAas5oYQYv4wuWK3oumaKrPyn6xC",
  "key6": "2q8VQuedxPgMv2CpRNMAB9Hs17UuzFNqHVEL5Z8DaFVDurtg1deSLocozxrVPnbDH51qpPrqCZhwk7XNtCqkH8pW",
  "key7": "2JbV3FvgURi5iEs9MQmghz2a9fi6Yvd87PiJRmKADbLcYwckMyHGhRRkP1BuCefUjyrPJUyjdHouLcEinBZPo6ez",
  "key8": "5KGyHD2EZRzGxPqfS4STUk3oSvvLVrBQMam7Ws9eexPdiWdUYzRw3aa8VbqNtXWjEPtoL8N5oJVk1R5EKtoRoJQJ",
  "key9": "438ho2tAiRroRdCuXvWbXMphYSYvcLaXQgw9BMqrmzmET1nja4QPD1yar1kZBhQJKMMXYg3aLuw3wG89HNDf7xVz",
  "key10": "2DCeg479pD8gCaqissBL1PF1fQYe5VJww3bBAAFTFPYcvRWwtFXKUDou56TBjYrkf9wUJ8zkENMmZkJFsSfC6br4",
  "key11": "3wcz4FHffmwM1eoSfKoDTrNxvknjqQTcTTa3uxYLfKP5A61ZJcfdRm2yyQJeLjbe3itdBNi2yxveQQSEkmr155Ve",
  "key12": "2XB9GgnSQL4VTckavBWQxdSbo1Ug8BCPH4Sg2tS6Qzy96LydX5YNqkxHyRVdhTro4W7HuR21m6GSj6FBjWFN7sAL",
  "key13": "52macvzjWWS7kvPEsdxsv5ABTNgYxrq4oNSW5Vhup8VGZAC7ZUeGHSqbPAGaHhs6sSqNZ5VL9pApwvQiwkXhcACG",
  "key14": "4A4cinhP74q6BJW45QHmAfFf73WtYnpu6d9mENGRafRf9Jc2wpqSvZciUDq4RzhTd7Byi1p9SnEVKQHFiLp1ZUDk",
  "key15": "398ArSYjdvNga2T6gTmmxntaT5KQL6xLxkTDUFn7H83E6W1bXnDXg2vqbFwtuaYa8pAeHdLNSYK4VR7usH7JjJX",
  "key16": "4DW5E5B1em4UHUqGkb3uEKBACdH9N3yjiR53SXs17utU5QUubn1NXcu3Sf57oh94WXaDiYjfJ5U25yaCFP1JsTXG",
  "key17": "pnAtT4nDFGLifh72umsAZNLSXq2q8DWoCdrzCFE1mxJgAxBtU2mWv5979ufrJYJEED8Yargwg8aVGgPHwiiXEpP",
  "key18": "5aFzHbgk8dVL7V7hxjAXfyzLQp7Nq8eJWqYLsZvXKWWqKF5iLxcdCUhP5KJ7ZY2obarxZNSNM4krPfsMeueMZiUg",
  "key19": "3dixvHJBXYRXajEC7x9VmJ5y85PicaafxDoLshnGt7u31qYGFArNStzpDy4xPW9E8uTjFYsjwa1bRYfE8VK5nvDb",
  "key20": "5FHfAb5nmJGDJj1psXTaSZ2atxCvPSctGhk74zVV6voQf8ndRddGnwLeRKQMDCqhAGq2X8xNVQFfpHprVTgy1gjk",
  "key21": "2Cdu97B7KQJUwkJGFr3VCNqm9gwZSvogU5o25z4KVqbjRwVHPGtLE7CaRV5AVxpp9dWxpThgc3sE79m5ZP6eJw2b",
  "key22": "4kRrZsqJLx8y2kNpGw3mQ8GBv3gXvLv4JnTB5UidhMq78cWCUq4AxeykNRZq14CoTuLvAMv8kU2VKi6RdQnsH7Fr",
  "key23": "5QLkyDR3WE7hbUKHnck7B2hzsN75qcxUBv2BMoAdZBvaSr5Rjqaetwv3afg5B9WwLFYYfsKfELjCKGFKHjrRfVx1",
  "key24": "3DD5uxCPNKHeCAJLEovzC2hsdHFdhqt4t6xrnKzA6rpKsqtvgQCG3YjoHRqoMYYQkdpiDmmxD2b9jKew1cJpHEjo",
  "key25": "4R86nt2pAXWGfqe2o2N1vmwrMZURkFKeHMLKXPWWzkgZiaT1Peb55AzsJpsTe6nSf6hZq8wacGAeNLhev5Xk4N3w",
  "key26": "rB7TbfaK1HM9zvZsJVNM5a3cGWDGsus7xReungnEs9FQfZ3GvooBVv3fVPhBMzYfsaRC4jkABTvLj2s1EZ3dSRf",
  "key27": "3k2EJaWpzbLfQy6ngKBAxAR4zcpSQhoDye5wEBhJhCDkFzY8rfNRtoyC82rxCFo6sgE9SWUsSUUi98d6bwFHfa8r",
  "key28": "3synChP8LtWMtRqMA8zuYSgmr7z4G9XfJ5Ve9Nvo2x7BV3dgVg78zhLVjWJuZXQrqhEDLLE2XFHa4HDGtRD9n73d",
  "key29": "42T7mEEc8rXyMioN3ETSU6on9qmALKR7NwdUjSPHKw7my1xzJBqyLo8aDBZJUXQwX8o2xPhjWEp3MrKbztoAFLR7",
  "key30": "55DcaPsTQm3o4D6vxDbV9nG4RhcpuYpcaA34kTrdtDzT3JsZhKj3WSUgzz6uqM2Fc3NauhbgyaY2GmHZuo79Kkk4",
  "key31": "2YnirMmz4AdhB77xkWqmaBZ3yF2ZxoEMsRNQRAxhnAMYmCGpo7ogpiZ8K1iZxFiRoW8Vsd5Fu8sFsQtmsTrqdZ8i",
  "key32": "5BUeeqzPK9pFNLRPjdhTYUXF9gnP9EgMepvqfkR1CYf7uCrMwNwxPcdjcJ1s6yXvJntkcRMqLNKY6Ed7YMeuU43X",
  "key33": "2WmSqnkPiAVWEPKTcHZrZpDtJpyEHMvekVZsMrwbSdQnx2xYxfYdmwQ8e4sBrZRWqcFDZsvCzCbJ5NPtqKLgHSsX",
  "key34": "62XTBNocwSrEgyo65kYTFFyMRZJxM4FoQeJgLRLKX5JnprFGnuyhhZqhwQhbhkAcd7YqLYaWNQpfs5tVT3GfUXpC",
  "key35": "2ghfGGynAZFNoCPjCoD1A3sd3wN4EzWYbKrewEWY9mMtRss2JLBiatPJ86odptv3YC5V5BLg1uXwSGvgeAaQx2WP",
  "key36": "2fmzKFeUuqt6YA4tZmeM89fZNLBLcpwzYU98PGVejD9KBdKQ74EWQbgeuN6RnTtrqoEc432eyr6v3nM9WRQiHqad",
  "key37": "5pgN9TKCqEuXKSS5N8ECQuBdZqXc9ukPcBzAUhiU3XcE7T1huVwhVVpza994Zs7cfrmnN6r8obZoHvG6nUGU1KNg"
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
