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
    "5puAbwZFZnrsuUgHythhqq7ZWCpmLpQz5ax7CG7Yrq4Kmj2TQZCufg9CvnHRzKN9hewhfTTthv2qWxDUgkXm9gtr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7RTTf1KvXFoCmytM1hzGffEnuZM18jeeAXymeRXDK3qQZ6cNoAERrD2VkjCWZiuCyiUDMvWnwFGU8mtzMabQiz",
  "key1": "4TsUQg3M39FyN5c59CK1V8TSuzLsjnPUE5CbNw7ityA22spuv4cNTmSt5dw7Aa9heDqHMDCjtVDjMNRtAkZRYwpH",
  "key2": "5ZrfPUJKZLN72nBCxygCYYWyt4m7WjvJBTSSionp3t35JUtkA8osR3fMF8hPMsCrUGyZyRAeeHewbWUS8r7NARC9",
  "key3": "5XkuxiFz9R6FEPyhw2EQsu78CR19659wftCjvZgirCbKD2kiE9SMX8bVrRAPJWapxqKYz474JKUXKw1iJxWQi58Q",
  "key4": "4ewnjaRsz3zG9F37CAjiiaMN8K1PcsuSh5fj4K4KxuCEbXrZZK9JDLu763gMiiGQh7UGjrccz7x5B7QCZXxanNWd",
  "key5": "3v3i7jv5HVsxGzXnrQx57AUHjaq5T4G9TXC8x8mqTEWY2irVpXTnuF8YFg3HYNPtHQtPfQ2efoShvFdWvr6Y6KqV",
  "key6": "4NY3AwFcXXkhLHPNGaNPQJaYbJkBWPF7Ak4dfmHZNhzFgUtT4LEyjWmH6wMdnVdjPXd2ng8UJXQrUW8ytrEZTXZ5",
  "key7": "2vgJTih9UaLymX8wCYs19ATppFuPRnXu1qSHcgw6AbHoZDK2YZCfYovNoje1AYLvsyhgVANS4N3cSUDqUDUVicfr",
  "key8": "PNRBa88BvoyihzyMv7UmGcKQApVWoFY7pbNVJDA67DgDYi6JDpNLDEcv5vh8qsQjmy2AqL5StnhxxamjAiNSkxe",
  "key9": "fgxGeA7PRqpRh6wQdMYzxAZKaq2d8W3zsjjt3te1g1xcrF8yjCQbAP2m4J3w5zeb2NeuYGeaofiMFswD4FjjTqY",
  "key10": "2Z8wD6WoPKd4jJoAS8dgZCUL3oZovLSU7qpNrVUa5HmwgAc3HL9HAXj1jb84vpKHvDYsYN4dmneG71oi2ueM38KM",
  "key11": "2nZZDvuobQFY8DmoY892KEZFXoy1aD5hTpNZH1rnbhFwPstoVeSe3SNUW2UGhzA1oQLf7taxVtM4QGex8WY8V5gY",
  "key12": "3qjtnbgRsQu2MLZNf3hGt4Rdxq4RZ35K5KSNsXZkokbE9icEuZvxSd5AuVtsvCc6an31NP4PT5ndFUJUSCDgaDsq",
  "key13": "2LNy6m4XYyCJ9bVeApjRxitn3aghPegk6N8sBjuU3uogPVhv5AUrVDcSyWyHRHf9B2qhTJf2jUZFmHdLo5jbhSae",
  "key14": "3trK3KG9iV4xCHD7N7Ks9wnxhjGrXdhEzgHh7DQeMkLxrggV75BaBgyKsvuPQMUepbvPHtJbx914QvpAWRHb86A4",
  "key15": "4zTjyWPtCDcshZsCC4nLxMtYWRqcLcGQajr1b5szVY7pCBb6EpomqbLx9VTSkb2YZuHLH8w7QBUfiWubDS3HJzQu",
  "key16": "5E8X83gU3JmEfksg8DZVWnNWRKTiwMEDxVUDNaVJfEhr1YxtL1q4y1sHyKL8DWWxu9smhW5JCPWPFMRYwBb4Fh3q",
  "key17": "2Qz4wyxmZuGKiq7gP6iaJsipTeGmEGFMQRyYbPfNSMaciNjK6iye2yJcqWVoDr9KR2Zvfm41rqNe7mZsVMzUHVPZ",
  "key18": "5ceHKx7EUi2MV2kg6aUPAEsPSLMCpHJstgiPpUXHD1wV9w5HjE4eEZretKu5jQfbd9WJnSG16d3iwEUFc7YxRjTc",
  "key19": "3WfiMPBtDrqN5x1mKWqhaHr7f5GeQXpGNymrvZmcvCEjryds3bPooNYtzcFJacDgrxGwaLP1cfygsU36qBsADzsS",
  "key20": "wAB3j5LfqAf8NnpT2WBuh9pXuiXoE6dyVGc2Y6oeCVU8zKN2jGZ3nnYfMHN7KAEvVE5ymWsP31zSN1NyEauHSmK",
  "key21": "2gbEnqQFRTvTvmbGzdhHBWtcvTpCdQeLFJahdDoUux3e7ogfWceZSmNtf6k27MmhbcRVQ6E7F5NL41qjfU4NsN2M",
  "key22": "xoYChZRedegJCo7tWLepQC2EEz5c9gkEye8akde7TYrBrNu7JrQPFWzScjPk1v6DeF2RFkbC8h2PfYKPZUemEtS",
  "key23": "2epASRQQRARVAUPvvacmFYGsSRJei2kUHMAVKnJgd3asvpKuCUDApQVtFEi5zosfZSbFdEJJeqC7VGME36o4V2d8",
  "key24": "5agUpdP42yVgmLUzU7PET3jeHv8rS3bNZTK4aRXDbmkpxpGRPBSwZxf2ocVsrBSNVWyWikcM1hZtR1xtFVFFfiSn",
  "key25": "3JPgWLcwyMpUMiuVS2tYqBevmZxwR7XAHaDwerPmQzb63vcF5RcGkg25AFQ7VRVT5htJYzbbWN8aa2gK9J9bQBXZ",
  "key26": "2FgDNhYJvYux2csaCtJcUCRGHgcNjhusn5SgJtgT4Je3ouUiY2JkFpFFAHkXKUvqBw4nx4mFmirZciX4zGKJ1BgE",
  "key27": "3hp9HRJ66WxpzYt6RSiL5SBof2s61tCNvMXRWzGxHkG1DEyS3yvL8YKSEgRCZe2NSvKxWviqueap2LE1sZxBSfGJ",
  "key28": "3R41ZRLy8my6Kk7ufMgS7dXExZED62cuZTGJtHUPS9RzDmX8qcHChwN6tHrUUK1cgX6Dt6psDK7wbYwxtwf7sTgb"
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
