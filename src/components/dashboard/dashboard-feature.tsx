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
    "55csExBZfunXsUUfmMWE6NbaNXJ8VCvWS8ujsDYcvgMep1SJ2qo6rS4RSashHEQ8MAaw8j8ShZqNb2U2QcRojtK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AudwwBpXxeasuAc3bEcLRhm5SNFJt3CXxfuZqfbhN5vJUhiUnCdoQQioSpUZmnm2XSGZvRrPZW9Andw6DtLc5V5",
  "key1": "54kEEqMx8XXWu7c96VDLsfjm1wrugWAFqmWN9Mks82AjLWZxPjnbzRWfYW8KC5tBhxnd1Y7fdzhNt7RPRoyXPri4",
  "key2": "3FBbbgVjeKY72VoZ1AxfM4o5imrGxE55sGQ7XM9sKpPPg3c8s5UJLofqwReDwqtsYnJovKPNThYABCvArutzmdqe",
  "key3": "5eqv16uHDRvamXBpHhHafLKLvGHaMFBT5Z4ZcZiLjF6edYLF4M5TJhiW2bqagtKwxaxD3nJRmCYBifmZi7Xh6ngJ",
  "key4": "433cDgWGxtpio2K4yMXiFGNUkSxKYywha5ujbdXXTubAYsPMeYPuk9jGZ2ccKpkKqLyWn6bmuJLH4Vm1AoZ1unrG",
  "key5": "2xUEYKWkCpiQU1174sRJZ5Y1aHciwq3oMb3TG8XcXodfXREhqSaQok7SYRHpf6SQX7TETgTsxKp4LzoqMd6biNTQ",
  "key6": "NXTqniJZa4cFK7ncwADHLS6wTPi91X2R14T5woVTWoidtofeypmYqkchG97zL6fwq9CaWU3FiYYgbgWdh38PfUM",
  "key7": "5BDEMd4CiTxpZ8MCGYM7PtXq1tiL8ppuZJJgxE19ebh6iSnhhuYJp131MH6xKGFmtpNJCcj97QVqwKBhm5qyTeQc",
  "key8": "4RLAqwnDZG9hSf19t68CfT6Ue5tGkyELqSB12G8QSk4kRjxxpLivH5aYxctgVj7WKstuQecwnYwuX6SAzY8wR7gw",
  "key9": "5bNfqn9i6J3wGpXapeXD5MSDK2U3yYJHuKwoV4bZnYyLcVzEnB77XGXpxKbX6n6vrxB94RKhNJ8aqnThJoWEkcG8",
  "key10": "3kYqwC9uQrJKjieZ8ptRo7h9MRdx1d5BfYnLr2XkEFk14akHCWH3t7tHwKAwHM9Yrw7ksAQ1FH2DirWnPNizk3r",
  "key11": "2jWMzBAvUG5MWMBtXeSLS9JVB7fXTu5JfeqAn5eokxs7oYhdcGanRbT6oHCMMCZtU9rGZwqqaGACoxeMo4FZtGwS",
  "key12": "61hxYqxLwCSx53Y6UmD3xBA2eVuLDtrANicbojX32SbVANAYzrxTz4yw8qxjiZWLrQUvHhZWPHaBgb7Un8HqFjRT",
  "key13": "65MUEfuErGx92ahAMzpmMyNPZGndL3vwYoLvgcSmL71j64TbGLxTuExkKADBcEnyMJNvMJ4ziKL4DmBY3Hx9R2o3",
  "key14": "5cLBA5u5XmpzVW2FNLMQVLAbBbbHyaK5mmCKP72aHtD6mDCgY3XAn3FocRaCZVWnDfJkPNhKnxAEUqBpRjKngFFC",
  "key15": "2WkM4Gru7B72MJwJzu5XAp9Yf94fMvpVKn6VDbChUfRKaXuSKfnTdnrbjVJGV8MvdVpBJYTnzgadAQaCCSRWonTV",
  "key16": "39s7dQiZyAq2sjvDwfTrudSzsoGGjp324Hx9kxbMTrvsYwvnGdqcbnS4evX58f493MGXRJLDNSw3NTYLDVAEoz2M",
  "key17": "3xHXCt82awsU2d8Jktz4tmEauN4gWmPRHyUPUFa5yA69HyfeoeuBNjv7HqDVThnpg5uAABNTrdAfoDaQZvNLgPMV",
  "key18": "4LiwzuPBW92yqpRYn6Gdeo11iSWr1W4AA7Wx59sFHPcUXrHbMj127a9RwRaKzv3wPn5ujc7awHbHhTLQKTUamVrU",
  "key19": "5AmyPmZvG63fGGeqxSxpWv52d5KYWyn9CyYG3VadpJVY4FTQCi3QHJLQcVyhGBJKFA26WgLp9kugq95XZfqrMVJy",
  "key20": "344eSgxcK3bJeoQpnXCBQ1unaBb3CDkDizcppzxS9NUdcJjFNSb61vjzJcRJ7Q4Q42HDHakwZFf8eMvfrnV9VX8H",
  "key21": "Q71drgrQMvpU5FQoEUxnKXtJnkBNjmkaUeExZVwtLBFsiBXFyJ3vMQdvKJrSsP4vD2qJ9Bu57tUntKXLXP9fB6F",
  "key22": "UgfnBCzR1JQAmNATtegH9hdH2PZxMNGEfz8k26LrjN6sT8Uxme4zGcMijRd8HWF4xzyP8rCDiU8GvM1wUjDDrfz",
  "key23": "51npMdqTUN6XQNdeUfcEgMuX9J7fTdA3RJbTVNUddwcLqE1hs378jEupYZembUE2baF5dbFgD2ZBSkoW4A5g13Y5",
  "key24": "cLwFpfwBtnc3LtJB6LR9dydEZbta2NhyuT69x7fzkkQwwpGa5muYjRKdszGGoFuC3g7NpfxrS7JZWNSiKm4iWCk",
  "key25": "2oKy4gnYZPaW9wWadYEEWWpwJGXzy4BMQ8msmLdPAEe67oUt79GYaoqR6Bee94Upm9ATqpMicuhWNTCwJvXfCofU"
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
