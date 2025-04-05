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
    "4ZB1GqMcNRMJnBisfuTLgU4zBzS434ActHgy3QhEvVkVm1iFSY8Xufk3F2DjjH7PBH6BJJwxbumYAh5qpxgYu8EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QtQo2BH6Us3gEyU5Qc8ya9257tLezScq4QLtyoFNnoWZ3Af6kg6h6UmrBaF2UvW8PyngAwheB2URPkUrjSHjvgJ",
  "key1": "2ihPX74MjZpBCjYcP7AMyQivYDMBJ2eHryEcYFbmSe9uWg1RFmjFRat6myocyBkSGSUojLeCud8UurNGe9RxPWqW",
  "key2": "4xRASRg69ZbqJPJpJ1Cd98czQnJCmdZsJz21AVgT14kTjfm7GnhJGw9PyF4L5KPQ3enDKowWoxCBCmXTLUxbTVyN",
  "key3": "5j4B3XxFZDyQ43WgZRVE58bRPjxB9kVFRXoDgv1XxoAh7y94gB1DdWvUBm9KK4eFY9MGrhEJF9KgrGsDmoV6PuvE",
  "key4": "C9KGvJSf7kF7WM5wAt43WLpHpiEtDWJrKPowcz36YKYcFeyih9gDMrpBWLFYgq3X76TLuLJsKKTgcwaABg25Jrg",
  "key5": "3PMiEd8DmyobULiJ2qE1cjf1QN2UfBX39MFAvp1zQiVNPjg5BE4E19fciXYGr1CnXy3YSF1CnrYAZQ31zGoB6F19",
  "key6": "3GvtgKp6jBxAf2ZMB5dh9wEbxcstKFHzcwa86itVM1tdxmEjvtSiGzipXn1mnmEggiUPdR52nHugrP2QpXUcLgW8",
  "key7": "5UjZAT3hk9s8LUvWYMMxPzAMz3aAAknTH7zviFpYszg4wKTrUMR14mnRZQuaKrpVgGCuAicJ43DxgMqab1QnDpxU",
  "key8": "5qQpg7JkxWMfxh4Vw2DQhjHwJ7atwxBiPnyYGkpWRtv1iF83J6bL4VedXa7Tc5iWEabmcVjEETX1Udf3MaTwcMhv",
  "key9": "3QARh3e9Dx4ZACDdqdLvrZGVYN8AkAjeKDtTHfYXiGmXaBFuLJpk1EHbgjF2TT37RsQ9MuZjAi7GUJakEGXRQDB1",
  "key10": "5BEpKni7vRtHBnxNV8K1w3W7pEeY1yzxkebd7YEv3rx6bjEGhTxPtAWBqpkTvGnp1kmtnstLpz7pqM3x2g8EbGb3",
  "key11": "4f6PdHteLhaFKYu7nrNHoGonmQq2ZEKFVPAzY3PvQbqB5SbqSAbY9xKPDisniwh9GdNDGp27MSAt4nipVr1Mitqn",
  "key12": "3VbeadMBtW3eCKACyH5TcT2SN4UJ45yaRnQuy5JaXJsjXoShGqai9K8xmYp3mdbYZ858HU75bZwpoA5w7hmwiZrP",
  "key13": "4jhyG92fFYyX9kfwNyYPxw8Zhas2CpQtrWVaErMkhMPNLaHJVrBQCF92fmeqYQcHKWD2j4ni7koaBnxC1EWzH8iJ",
  "key14": "9bSN913xwEPnCbmoU8xLg9JWR6hcxEfjDCb8Vjuu8JGdD9JMtQBRjNpAjZ193MeBDR7vLSx8fdyunby4pa36kQq",
  "key15": "5AhNDz188mhRQYa6BiumixkTf3X7M9VuyZDihfMHM3wv1r3irpM8pXj6Rtzauh5xydNZDbHm5K2ywT8yXp35X8E3",
  "key16": "4JMkReDSQNFbCq6tDG6pqh4aBvaJ7HfSB9LA698Dc8eeJ4RV8KAz8WrwJ4Mrn1TkmVA5ozaXQXFQ5c4BDmCZwTPL",
  "key17": "4Z9HykmDDbV7re6uVWNaKgZ9LP5RkB13QofSSVaxboeUAuUPXNQhPgyfGrRNcSkQv32UdxMR8VTogTfgka32Yzfh",
  "key18": "2Mnrj2rsn3NfFAPgk8rZE4yPQ9qtvyaRMQJ6Ya5d5yZNqECEKeAznVkC8bhUu4W9XvRBsy8htx2ax8mdWDyhFqCm",
  "key19": "3bmBqpFi6Y9Ju4bdiY4Wrn8brug3ozMu1vLCsFGnh4V4FHFsu1kiqcJv53AJ2izKYCFoxF8UokNvMkH7Ke83nJhs",
  "key20": "2r5HabEywKbSY17RLVCX7EzBEWxiW8w5ahoHnU2XamgrMF5dxtbTo59yyKm9Kxpa3UPHte5VV3gmMraUJp1X3rtR",
  "key21": "5GvpnAc8wo29p7SFdScyK1xc2VMNmKyirHasKhrffPtrgjXwMSTNgvCcEXuxCv9QaFT1wrYPLjQLBPfTQGst2zM",
  "key22": "2yQB2EnZ5e3vbURLT2WpCA9GQbAA5jS4kVJ1jFsg3nbeggExvLyrSt7cJp3igKvNR19pYinpu49eJb8uwycsS486",
  "key23": "3dD4LQ4soxYqmHSHVytFMdFsENhiFcB3YCteNpbRA2CwbvrjUUkFZyxyZ3Q9tfqcj4m5J45pruGV4wwW7VRjgvJL",
  "key24": "3HhUEUYusfpRABL2YQJsJwQqmpRKxzRwwPhfpUaU8xKoYurGABgj4S1osWdEB4k3NQDU623DggNmt5Quff1eUXJG",
  "key25": "2s6Lxi5SHvohKZE44AZChQWpCy2q5XkNb6UZXqm5g9FF7HUDfKgdDJ1xcxyXdyEKXwCzopcxDb4mg3J7PUk5PWSm",
  "key26": "64isnwJLGxFySrK2C8Qj3zvGzCTKi8ZsWY7JeqFookqzmheANNnxf7QREihGTyp6gm78d49U4iHbRMUBAEZJYoin",
  "key27": "3drdLrCfPUf3ve1j58QJMuhx9B3mkH4VCDjL2LuM7nCL5aqexx45rr6F6VE56uUcfW3yXNXHpJPMuUPK8ibT4cvB",
  "key28": "5TbUkEtgq1JKeoTokEBieRH16gjQpxuhDCtpKgRe2HraKD2yBNmrGnXJBMmjZeY3EfwA71mF7WPFsm7nRTvX5zeH",
  "key29": "5APL71aFhgYqZuHM75uGsS8yQoUpxGcrLDgnRifhHvfcpMSCzMaumqShid2nW1aUnjuqcZxBVnkzok1UC23EpE3K",
  "key30": "5RDs2sL5452nU6JwKvk4cEdd3rLKZp1t6xpJ5ftduTD8x5udjbaLobxnHgR2HBG91jTmCHzaqdaJsxUQbKCQ65G6",
  "key31": "5jYaFERFdfAqCDLdcj6rjB2gYG3HXxEiTTRWN3qqnAZ3GKT9hbyrNmbyzAaCLj69DNkJff1e3gqxhS9oYkg78DPW",
  "key32": "33scC9tVCVCK4bX7AkvYnMhNTfaqVNDVJcyhF8EFsxLxbqDK4wzXjmiG9MjTR2mS6FQVtXUWXW8TZ2gGoiQ9PM4R",
  "key33": "21nXpC6NTsoZwqh2rkg9fHcAeWVYUCdTdGC6dMHb9gvWpb7FBwAzbEr8iGTu6HSEjNiqnDF7X83PA6P6ydvEQEac",
  "key34": "2r6ruu5v8JS9S4dUdrkFGnraE3SQ8mnsBCMDM9sF7gp2CKPFXQUzVggSbCiFSPFqAqYB2LCVj2enFBcUWHD5d5tk"
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
