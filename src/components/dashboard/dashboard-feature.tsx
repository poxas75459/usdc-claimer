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
    "5AnjkhzMmpYP8sDT2tSPgSQMS3FZzWTk5NnKx8kejwqLuQ3DiNdviz6SA5WERy5r4z9Q8qsswyXaDeTnGivDMeq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNmM8LDRSMV4Y3KQjoRUGsxAzMy7mcM6iYVpj8WMjxL41bfZA2MacdzUYGGo4hWdVM2HQduCHfS94F5UADFZAK1",
  "key1": "XXWTrb1HLKLpZaSoBu1NbpvCFPqyANG3pFG6GfA3FT5mVxTRvskZTQEXb58Ladvg17ZZQv7Ve2LRrpm6dQqugMi",
  "key2": "JUwt9aSKNJXmfLoiVg2rptoU4a1BsQpyy1WyUC7pd5kNuUU8MnenQF3VEQNwtB9VZ3QChQjYQLyRry8tXnAiyD9",
  "key3": "3XX17SaCWrkAogLajNq2u55sahs9X1eem19fU1jaSxRgY2gQ6sVWATVDo7Wc6kCNAUp7iPpn48E11dnApujKvqmj",
  "key4": "4t4uZoLyatNDKWfFkUcumPoA4dm9J3vxr7bYp27c3Fym5Ndtn3jLqSVo94bLLk6mopPqko9fBbWCTGk1bL7hdLMN",
  "key5": "YaRDwUc8SJF1955A86TwZuvsMrpTBCunLwZkbBKCvUrsc3dpLj79CFDbqxnfKbAV9Z18syngqTfLZHTF2cYxKj1",
  "key6": "5Bf7Zv2iKhJE6eW7MH9yzm5UpGZcLEVw3YKRNJjKsRB1oJQiKZbh4nVQhgJWHwTsdWNMNRwJYjYowUhGiV6euddC",
  "key7": "5fy1KrMAoDKEJb1bHWydgUYr8qArVq8puAEEdWnYjkmfRuezAbsPC5D1EhSKzCfU88qMfqLrPmzP3BjUFTubaeGA",
  "key8": "2Po6xX77PeBBMQz8cxSyW7pMsT7kXBRjCudgW3CBmpcwN7KajcBds1cCkVqL6dVZKrX7NHJiNGAEHmBquQScp1sQ",
  "key9": "4u8hmcebnAXTvWCKbBkyD7tx6sNgiD5JTT6ydEW2jNymCc5d1e4t1rZYR4tK2bzgUGKkmg1Zi2xLjQx568j7vdnv",
  "key10": "3GvDJdjXuAgf33sdwYhT1sCAebBFmRjU6BFyTYyNFikZDek12NVcX7foWppvmrVYCwmGTcfr8zsAwiicfjZsxsjh",
  "key11": "53PvktKcKfbSfPSENBkLn57GrEhdk7E5SqSFpynShYD26dvcQQYWzvzhjZwQipD47coGS5tnUoEmtC5ghSkwmP88",
  "key12": "3N8FKvwgHphY9tPwFGcxm9oGrZLLPeVDLsHo7tE4Va9ZAVpuFwT7N6rCSHnTYRvcLy7pemj2C13QVuDAAQC29qT8",
  "key13": "3DoitzMnTCf1mMnMhpYTvwsaZQK5V8iWXMzVWDxEzNbnKajC9dLUaJPVcbnBUv5qGuweq67U35ZQPKktAuQCbRug",
  "key14": "5hRmMK1FfMwstBaeKmNib8kvvKjAjDRFiZEEzh6KLsaUEGVL6HaHNKZVKnEaGfR9AS8G5WX5vEv22EPw53hnhfF2",
  "key15": "5nLu1eYXQ2CK5g6eAnxeGpZp4TQePtuRcgn7v1d2T4kgVPDDfa2GbfwWQQ95GtmCMwydhFiB9q4MfSCkw1MdvAyS",
  "key16": "GTQCKUAAfUkcTZmSTGccNPA9EvTLvCsCzGtwnpcd48Tt5W6bPXe3TEoe9ANKzBas1Xad8bAu5NRg54jyh4ZsZHW",
  "key17": "4e5Sg7Yexz42UwvwDrttrztRzMts6APTpAp2SQdwUS7KHg5pfFGhpRhfCjen1jsQUbbbyKWP6fDKsBejxigfzYfj",
  "key18": "3VYwKFBwDwGw65cxuC3ZNnP1JbkshiCVjfqbgbsfX8Fpneq1x2A4fpwsUZnoNRUwwKn4kSR2q1Qr3yKgLuPpKdTD",
  "key19": "23t74vaDBTD1jQCATFd1q93JRdWJLjvAZruBfadUE7DrLXV2QCKUxQ8CCQv4Vf2iKCQeCZT85rpf3utnPrhfi9Nz",
  "key20": "45nqFwv6LiuSjEfiHrhqu7oBsm6fromiSjAYUyBfgUmjnTWByzHmRyjD6K52zn1h64rxmRQNZsafggiGucqzXj7k",
  "key21": "4f7AAhi3nWUqyNhGz4e9AS5zUeZgNbScqCWMCsobQL1ZithTE5VoMcx7E23T4vLyKjxcR99tKkjVM8UMEA1idkoA",
  "key22": "4aYpdoG2YpvXYCsd2yRfg7SDcW5eAe8PuSaMrRcknrQr69yeVPs73eMFFqft4Jv73AZ1YqBiqsCfcacS4JBoh2tm",
  "key23": "3NwN9AcyNVynxUPRY4iBnHg3G13CuxRDfB7PYQhqhqLJPTmSr2fLC51L9Knkk1zwPiVPVCZDKhn47qVJwrAKe1vu",
  "key24": "Pfemrw5W89VBryXzDaJkttGmWUq1CfGMHBXr8iGyQNhgwkeFXkYnWQ1Jeb9kzeBADmb7RL1wxBSQ5FufDS8AodV"
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
