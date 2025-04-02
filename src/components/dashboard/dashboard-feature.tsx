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
    "4ivHUsSUaJdfPt6hTkJBYQXLQzADhs2K5JwV9HUT3tMJU8A6dYwerJFCFAdFTmdHTCDfjYGPEgBacrGWefGWnepC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTA7JC2ub2wU8fBKZKHAUXcMW2XXfTwJtWsWDcrbeQWQVWiu4FjQQGchUnJXnTPDxpyTcRDnc2pF2wuDxCXBwev",
  "key1": "GKp3GGnwjpcXvL2XczsHrUH6aGDPLqtH7htn3iRgkzW7JM2Xik9oBb8mint9SJTBQ5guHKDr1JYhGNXT1xMTXpn",
  "key2": "47oE7NfygdrSFHvHCwF1KMu2jP2x4sC1w9UYngL1aMJNqXAV4vPRpQPDyFM94KKCzPjBYrUfPHJaYGQ164h3eEt8",
  "key3": "3iWYfQdVn2hwqUZ2NwZzAfy3v7UPiYpv3eqTY5bgJ3tvxDc6s8w9dc9G2nJJbc2fFVpJFyuU9g3PdwQj6vdwXUHq",
  "key4": "2RWVZZ9NfLPWLqQ7ce83PfNjFDoc8ub6e81NvGiLBv3pT8ppqy7FkL1fEH6mbtDkj51qtuB7JP4tszYeDs6xwxbC",
  "key5": "n2U3zSu37HqQnjMNKqT1wTBq25tEAG93LLEJY52bCwpoTVefBc4xY1Vp8rUyxroChExwcReS2iyCc1MxokpBGCa",
  "key6": "4JxgExM96JRGLwB7ZsXynzSf7BJPP1x8QcvW7WRLTP3fTjT4xELkVqRw4dGotDsrH4egdtn5YsWMGiazqavBytDM",
  "key7": "NSpJwyL9ANMiqsg9fuGHxkZYjjysGa7MsCdrJfbc4A44B55tdcSBZuKDDefz7ubDg6w4ci6FjLwbiEhq9pEgMSn",
  "key8": "3Z6z1JBfnUtsm4wiiJPKh2XYcs5gDEzn1rgUtXMpjfj8vw3YPjut6ZRZh7d9NVs4vyZVUsdzzqvA7AusGCiMHo9D",
  "key9": "5T3UQLRG2sSdzigd4uNAPBxMycDTwH3kQTUCnqxHkyPfyNGQeretxpS61B5nDXw7XsS6gSniKSRnX7KW4h8fh53p",
  "key10": "61acsewLnFM1C3hPt49PemTeAYfXaxiTqYni2hGejwpgTauhyQXanMDwXGV7ypZANs96pKRMEPXsorvHQqy5WDaw",
  "key11": "33pd31eQBcP93m5PAUM5pe8q81Hr6N9KwubdxiQESSWMWcTfN33Ev35ZmXsemEggNNAYPJZYvvRkVxvuQX1hV6k6",
  "key12": "2vN1aJr88t8QSdnLDQyQxBcxGV1mMWoYoYzqxerSVrNwGNmoEUc35CJ2bDte1CAztDPyWGm2XmPJiW6YG8SFzCZi",
  "key13": "XjhL43dpLZTjNAjtM4sr6EAsqranNeMRLyXTiT2nC9pojNedmXREycoSY6MkzujXxZDwom9Q6CAUUZUU5FedXBn",
  "key14": "2NEArvxq62bCQXVDo1y29t3t1xsBVKa1e9mLaw9ooC7MpdXxqx7HbotwR6gCTexZ3JrQtSvQTdLtwfv6Pvrbe4Lk",
  "key15": "5kM26L3rR1AxtqMWSYLvRMP1DVAi7Betr1dbsCmesCpJRPF49dc6c4WFqi9aBkbKQsZF2HLix9NUUK95im6XBeoZ",
  "key16": "2dZQfGHcZ79wC5aSMUZqYugNgey9SQ5pez67hAoG7pB7rV5v2iwpnkzGsD95swmnmaP4kuz9Lmt2yY2suNk4dTa5",
  "key17": "5dug9dZwcHqKubSyP3Dwi5yozPvhucn6n8C7durpBtXqVPtyf1qLRn83kmnDFobzwT78nz6T7mMZnDeuLg3KJXo4",
  "key18": "27EHFp79gWbRNMfT9ca82BGRFGHHzpr9sNt9cJTHfzKGgyvrVT7nmQ4f83qMsoUecJg3pphK4Kbu8RZB7AZP4rV6",
  "key19": "4RLwXtEH3hZqedZiWNVGcuC3n5G64Vm9UbguUusuBksxcD42cN4EtGZiw9JmzUp9XVWGnoZrrx1y88cWcF7VzoqC",
  "key20": "3wL8icVMZTPTTcF41pGXuGF3BDVKoRXaQsj1ty2jnRU9NhhPjbvMRvC4PVU2NumzqV47hk3zHAvdcs72u3Dazcsj",
  "key21": "5wmj4ayYQJn7qXZ2Egsh27tuR9k3f2kxr614tDt5gYk4ntfngvH8bTzhhWu8HmVX12zB3QS7utuevbdvqK65BHYv",
  "key22": "51oaJ9SVzMPGDaFtjwcM9Hrqnf8cUtqwgL5q924aKFGko2akwjfrAVCqkTzLaaCCjzrBCzUtVJ4rxwFqt4fNCYqz",
  "key23": "59yexZvKV32udkjzwX9M69FfqDFKcUYd9xEvyacrp7XLN4HW97BB31JP2AneTJ4xz8UxHmQSbYipXo2vFtkqW4aH",
  "key24": "2zQf6GoKNDpAdjZk4u7BwgxY4aLe2K6MPt3ZhEFWKjf8K9SR9QcStx5mZLW5EhV7KbPSeieoHLHaxZfNj6eLk6SW",
  "key25": "31AZPQzSP5C9ywXV4cyYPKhtBQCLQ2pL34b5584ZuaggBUXNZY8FgjhtxY3PJXoq7P97M8vNoVzftJB6D5GL2Na4",
  "key26": "5ydN6ZkYuFaeHpDeX8U3pmxa58ZbCsP1EcTyNDuHtTXcTgwWtzeLsQjDGZszERxUnwm82jKSaXKA8xWwMrgw1WUy",
  "key27": "EdsQ2DBXtwXLTR3UnLgNaKHcMFjD8upGckV3CQojW9MGRCrXcHzSSfk8nzLTa13GC62qM63j6Xc5GhuYycjQnje",
  "key28": "3ePy7Hq47PAc8uPN3jrPuFs3L2w5e1wPXJNXqduHVoQPZxQPYH5t3kmAjaNUiFmh2h4nrTBr7YutkkyxQp377RbA",
  "key29": "5fN6WmYE2X3ttwYQWQtpt4Yh21W4bBbL27XF3J1scuRrrkKE58nBdyzfDrbZJHghFsqLNq8ogE2sDQd5QfYwEnsP",
  "key30": "55rk8sCooH2JFJ3XH2KaAJd5ZQjj4vDpAvS6V5QxkqHM5zSh31ASgwAoav7uTxx9yReu1YChVDqMpVm1TmS4MYiF",
  "key31": "2wkfR1qf8ZjW7rZ5vAvHW6gJX7MXvqe4uc8Gr2GbNCigJFbFjf1jo28sHAnAQBKugnWUn6r2W4ipddDyrPVx5TM7",
  "key32": "5CfaP9Du2CHrDvBWQKu74Dfq4cfpgkehsw99c1A5K1kxzTsH6UcoFkLbKpMCPDfeZFChrW3MBf5YMu2voPJn82HV",
  "key33": "9ypocekDBA9oW1Q5w2T2cF8GuRqhDgYULztSrKkmUW9xUR1HzirsrFWUm5zdXBoGQFFVCsW6JHe5HNnr1ZDTbCo",
  "key34": "3B7a7pNPQvFTThU1C9fbGUrR4xfrgmjd5cFcKGwSgvCbchhhtgsHz2FwxqNcErrEqBKiWj3MdMfgXp2tRDsv9mVi",
  "key35": "3zrpJSy9jDqafW3DZs1MYCR5QvCvoL4dVuiXFvbSfR8FZryTSwJNyz3ssMwV9CzVWkTnoNL4ENTpExLUsGMC5xT9",
  "key36": "4SiEQiFU83VshZTzKRxCB52cEkfTSkuqcTmV83qHqvWGTHUJPD9eQ5am5WQSD3VjNimoUEX9jPJe6A6kSkb4LuE2",
  "key37": "35z5hL1RvaHw2VbkVrJGZbehHMEapnqG1BHr8X4wKWNcoBhs3bspCVRxBNw7JxWymJnJSv2KWtDmfBJKZT5diGTs",
  "key38": "4nDiRjeVEKxKTjJNAhev35unvMBtyXVD2UdJe2mGNt7v4UzaA4TsQ9Wdv1QJDgdWJjfHziwWtgxctjhses6XbvNj",
  "key39": "5GsZPcrfezDbYy58WvvoYH4wPAU4qqy1sRpRW9r78heXPbdD19DLE43HCkf96TFQUzuyY49xmvCJgS1LrYePixRQ"
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
