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
    "2wYFg8JqCsAHdUtEekGiEFy6Um8BwTv9uCrdgk5F5xzVxBM3R6Ma3SAnkeH2RSy39pXz8dCKbTMCpCSn36MqbBLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38pQPi8V63HxMTLZsuYYmVcKf5cP2hCDuQf1Hh4NBdTjyXZihezV9zDcJcrYqQhEnpEHuWaEXv8vWgNR4LB5fge3",
  "key1": "3NdWwoDYpX4Vy5owGpUoqMGD7DGzud5aqPo64ZSpTm8Y5h48oA7rDYbyqSVGHF7jDvhaiWCFLbQytAHfCVMqpyZe",
  "key2": "3nvZHqMkSkgYzwsEn8QNkhHQvuMvJB7y4h42L6K2KPpd6rp21wJiSLnnhoi5TQdLBp2fhmGvWAaXrEypYGtpdULx",
  "key3": "33VZByFAznx5ijK9SGviVo1RfPJhXnb34rY4D4Xj1mzWN81dv2GeE5W8tUgqKuuWv2pWH6CUNDXVeXzX2Wcf8t5J",
  "key4": "2T6X2VWQDVKxMQzFkRH5g9rrGJuR66V58p3S6aiXozeTce1DSiSxfbhCbUktKTYtZetAGdp2v84p3vmCJBo1Qecb",
  "key5": "2XmCRha2qMtczmsBRpnYPMNV7YVkeUSp97BDcLY1yzwU8CPj59PpLpcBMhoWozzJaKwC96UXm2n48FSmfdbA8ujj",
  "key6": "2NTUprsMePcYGABQsvzhkJasAZsh5QDKKazHuTo9PTwVcK51emgBtqRw6VwWjYeRFvWupi4G2rr8JQQJsSFddb7b",
  "key7": "5yLJDPZpXzoV7KPP5u8bLbSqTm1AtzQjoA5ettupP2zSxGrqsSquZHvZSpWhdnjZvhjmKca51EGGgfrmjfTAjyxE",
  "key8": "3YK3J7PTWeGvJCQinDUiDK7sgcK2vBeVo3VSn68bQLyDQVCp3mzUR4QV6JTgkzpJxTzaP4g9GyYU4sCeSZH25Ui4",
  "key9": "4jHv31HK51EnNE7URKbK3EQQ9k3YxZh7GeHNwCDHxJDKr61GzqZ9WTktAtLWqPgnGczQ2aDgAwHFtoifjozyyxev",
  "key10": "526BCLuoFdPRkvrTYZFgZPHCytHoFSSNNwM5AxGxn1Pe4ZVKjd3i8p3eno5Qi5jFwV4zQYJxZmGpxaXyipcZao43",
  "key11": "4xp3gWc3PGGGKNgVQPAE1ywZiGXiL3CaphNpDm72nnqvT3e6a94xhvJUEyQ8En9BmSfqjqM2PPK25Y1PBWCjxXuK",
  "key12": "5ZWm4T6uoJWBMaKh3dYF8h6BC44Sf7yB3hCnq8evs8sHq6AuD437FKLXr1oBGj8uZcBb9HGi5q6hRxRLTYEyekbu",
  "key13": "4smAoqDhXPzyixk8bAXbg9E86gZ95R6SnQcmi4fNR5gzLHiVkwSo3dX5eMuuMcy7Qr647dDvB2s2asqbuzV6RwgM",
  "key14": "4ryA7siqh71zvnrCbuUmpjNPcx13Bt8psFuHpty6bsa4Tc5CELFfAsyp7EoXqhrdyJBak5DWVbujcLbZ3U9JNJHq",
  "key15": "2sgQDEMH9FqEPikqWwqCfKjKz9qt3jXLnaUZZorNdib9ZMwdDyM3C987fYUEhTsFMpwY1tkuoLUgro1JBguX62DY",
  "key16": "2qnUoQZmSUVhf2kbUVB1DvfPeTT3dEQT1gtk12RRRxZ1bqhjweujjSvBQb5g5P7mM3ytnVcxCpMEEUroP5ZRBAqD",
  "key17": "2hyrUkNN5eDpbwKhtXqyLzL7iV1an5dvP2DGL3tb2HwHV57LGzgRq5rN6Y5Bvbv3wp1fwDjotVb8DdSi4MZcxyH4",
  "key18": "3BEoNamHezaEnXcsYVPPpUvNN711224RfzoFbUFYzsp49dZzX7iQTkDUxmZdmTjYwGgFTc69QTFs3vTx9tRXsDVy",
  "key19": "34GF4WShztMePfficQZzAGkhEXnSfds2nwjyEkiv3xVSFBTvNZ1MMBzu1S55YV2sMqATuwHbPkiR2GTrgDcLmcX7",
  "key20": "21N22XxSyxXaibRjHZp9sn1ZFXy81SbkJfmNrCPhX1BohSaC38U3YZxkBEnfsdeuNyLXu1EPeWCkhVBUa9Mx3a1y",
  "key21": "2snYaovUt3fR1dobfoKxXyy8odTbJoYEWre9sprzj1uN6gHkNbcLjhKSzFArY83chJhi6XDZLWqX5KsReRxpzdRW",
  "key22": "5JNfhx8THNYy9zh26rZ7mcJmVzgxZYicbBNUmh9ZuTAqWZXLLQWwdC4sGjEMFtRnPHpjRVkJPzQbZQLU7eJwkDkt",
  "key23": "4KwqtEJGntyr9yogQb21fZMeZQTfQMggVEeTeFnP6ZzqnQ1SX5DrvGDG17SJqYjtQziqnp8kSy6fKQifx4W7ZjBX",
  "key24": "63dc9bTNRrpsZkdRo1zrgQAexdMPAG4uTcbc7wd6TgZUsnaPxrH3SSKk6wpBTKuZgxjrwThpuNmEeRSyAK2Xx8JY",
  "key25": "5Zrj9m35fX1woGs67wmU63kBAKs5QQa9UipWNJYJpraTAHE8x98oF5ysPCYvtbRTjxMkk9cjbo7TeezficXPsbJs",
  "key26": "2WdUv1HWQ8w2XLJdMD1c5r9QFhFnZpCHyWjcaKdwSJW7nR7xFg5TcteqmvHtCL5ruQ9uwfwsyzjBst4Qg5ZwuDfq",
  "key27": "xjJEfxcpQMNzTS6WCwaZ5k4kh9Mm5a1vZXii3yVEpxNsFNpmVLsKkRUftVjQybtbqsq5fZnfLux4NzcJWQWQobf"
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
