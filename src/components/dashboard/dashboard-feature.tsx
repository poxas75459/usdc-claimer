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
    "cBEG9ezFhpAeGZqPaSgqDkbU6tKnv9h9vAeeXKaXyPQHk7tgEuL5gPRwMjdq9djhQr6GzRpezKkf5Kxyr4X7GBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6hbLfuB8e6yvywRYAQ4J3ZYy1n5c4JAj2AX4Qp8oRvri5k1dSUXmcyNkLm3X7EC1fwCnLykM9yjZA52713bSQP",
  "key1": "FhB6qtZHnL61b6r1j2qckkZHwN7eMxrpbamY6PPoDStDiCNB4tpNnARiaid7Z4pQ9QB5Qe8YHpJNga2MfXhyX7U",
  "key2": "2V5fRnuNZgejCrPTzAFcaDsyiKhT2SzkqDWN9Cj4PcsHNTpRkSAPyHFgyoYn4xy5Z3cNn64Ne8oGxiRGeTx7zMEC",
  "key3": "3ajBib5N6cjc8uB7FJaWN43dPuUqUEW79Rdw7dhK6BPwp1qBKGga4cJAVVkh68aeHz17hqMePKUQ9XmJqgQJVMSM",
  "key4": "45aRE2JAnB9pU7A3irjrBV74Eyt6r7JerceVfKyw4XaP9L3JJGTE1u9dzvYT7aec3hLrTmgDhhbjeAYs5zv2qnJp",
  "key5": "3FZNxSkJHSHxix7iXfSnbZu1EUeH1xbMjqHcxTcHVNVhCzQ6awDhk4QDhnUpnd7tBx8AodyVTKyPMzNg4cKdxW4z",
  "key6": "iVb2i8xu9jri5k2CgPjFvLYXqRcon2sVG7F3KHbeUMku9eg1HjsghwgK6c2FGaskBQMSs5HuRsCNkJjLE9CQsEX",
  "key7": "3bwrxfS7mQBkg7tj6SkKoyfaQYzTTSoR5vTtGr9XYWuyFcFKDy8XgG5Ga8eJHWTudpbe8hj1bfwufdaU1QU6usoY",
  "key8": "4bssGpejvMzaDBh3xuVw272FNEuH35tsJRMZPf9DDNAebT8qGwoV7semvebw4MeLRanxmZ7oPAw9oDjrVc9AAGd1",
  "key9": "3XEVom5XeCqUemid4Ei9BRwYkFhfkp2rLpU66KdCchDR3NjQP9w5iZt3sQoaW9syyeB26XXXSo8WeF8FwMQPzCz8",
  "key10": "4zbKpxmJeVMNhvZ6TFS7UjgVDqvVwGhyTXhyNFp3U5zWG4y6vW3rqXj4sNKWtJp7oxRMZFhTLZoJ1oRQLDKZYiFB",
  "key11": "52NzpBWrFJD9Y1MeR99v9WyEbJ2oxs6UdGyobT9RE1FEgpfAxN3pigH2gQQxp2SPLYNPJVToA18Kta9BuokCBZEb",
  "key12": "K8aRYqShZuFed2D3dJnNmxvWF8vTJiqzYngYLgtMGVD7ChsXULxZH6xmnmNWiEuubnue9djrcqb6r4yjaG4okoD",
  "key13": "2ihGKKK27QC6q7urxXtWtZNariwEmhGDs8mocD78Me2y4Hk3xksK2MLRbU9L6gv2r9u8GQYwXVJVrByXHiFmXmc8",
  "key14": "5j752TKSUXvJPSFfkA22xQ8hd88SH2Jbrz1jk3K57zam62jBJTCLB9o4Ssoknua5knCWSzQREyDssqgWnSXbXxWM",
  "key15": "5thvvMtKUuqUYKMtXXmBGVErhFAgtcjSNHuT3rJwbqXFstn31zLQxqNrMhStBkPEM5hGG2ejVKxi1S8gbHQhMrR4",
  "key16": "2JnRiPBvMhfVXYtFtidF5bWJpMV75m6QwXKHY2PAe23AnRE43dB6HXDa48NwjQxk7eWrmspksgMfHHN3LXVqkeew",
  "key17": "3Tui1S5LmpdSVQqvwfGRe4jpDSZjWTKAEeYoBhVm2LYdY9brUrcxntmUg1EcEEHnkzNw8s53PBr1ALtW2GrfDfAN",
  "key18": "2Bot7xH7KRQ1ibd6PuqZgLYENhMLsBLDVPbrsD9NhxSCSMDW3Kn1QQwgsww5HCauSpXp4HnwoeQrMrLwdqP4UzeN",
  "key19": "2WTT55at5Zw7v3Gj8Pm6e8aaAoXa4gJpj9A7cTnVvg9AqEQCYdEoXUSNqJ6R2EEYBL7Zyhp8NtiWCTJ71znF5BrW",
  "key20": "4zckS6D2PMcuWkuWFSjqxyPPzvdEn7Qpwj9yRPw8nczajNJjWLuyLzpSUxUcomhXyySfq4dxjLBxGMvA9jbihNEN",
  "key21": "5QpVcEfphNtCLB3ZdnhgEsxbC4cXo3W8HLsf7AumkD8p2JP2GW85youWFy6G9kvQ3kvUedpWV62zkS2wAv7Yj3XC",
  "key22": "3BFYwWLJTiRH4qMabxaCKMzinQur7HUZ6B5KGLxLJmY8EoxK3v5MSppxm6WE1yGoVAQPjgy8vJtTe3HhCWxk2BSQ",
  "key23": "5eyNQad6JfdAaxvoyQnDZuS5kPTpDGjGtpKUAcsGD3eafBruRNLXtuP6nbZinQiQUHcP4fmxuYWS2BrV4Wi3WHVu",
  "key24": "56VcguDTFgDz58jeDLjTgxU4VuPjca8FNSob5GZqYPUxrRhEjozYsuoicgt1WH5uADcKtSZUKUHgC37t4moMeHjN",
  "key25": "4JYr1npdP7yLq9kZmFTzXG6JgxAoGJjnsWBtC4AeZdsCX7AcsRbtZF27x5oDw6daSpT8Fx2x6XhBxxxQmeDdCaBf",
  "key26": "3E2Kg2NKcWLKLW6D1k4QXu89YvS3ip56CioApvFePzZcyttTaKyTqtKTpYiQr7atX4X9XfA22BRFqnPQUJ1QqBqV",
  "key27": "4xKZFNeoxCMWYdB3uwcqcmdAHh1YDBRZ2yQGNmULWW5h2UWUZdjweaSMW3DwiWa9hm8QcScWqKrXjgLEfWUmsHNw",
  "key28": "3ZjBCamWUU2M9pK3vTzEwEUTLdBRWKdCZyKyX8KxUAEuctaBxhj2maruddb5kjqbW84dfamdnytADE1swPbwgL7i",
  "key29": "6VVKXweym4xVxvUTVrYtufA97RxgU2i9dzudqaFnZz5Hzk2TBcEEAXWGQhiUzEPTX1mnXNy9q4LfzYUym8b87Jz",
  "key30": "3KtjRPWXPvJHSdbMoRVm3fQ1hdbpApaFDCC4J6JoY3X182QiLUaCAn6owGhwvqs64BEBaEnKXvS6UretAriieh5x",
  "key31": "4P1cs1YVSSKTRARyyvLDKSzqVjJjK3adjYmT2fh1QrKcKyPXPj2HKkEKZU1evdUT8it1bioh99Eg8djVPvc7zzxA",
  "key32": "3WwYP8QqV7MdkuMucW6gF78QRJg4CrVKtdXmzkisAhsN9aB3FicmRGJr8XUEVKiTMFzJSzAgY2vsPRmGEsHYWVVd",
  "key33": "3GQyHGJUxcWf5TJVGEdfkSoBiVFqtxBbgc6CpFnMc5XFHRTYJKT4SoqFhvaepRZQgVjzpAiPq7Pc4muzY5swKPhr",
  "key34": "3G5oDNAaFQsoPbTEZ89VHAGgWHqZRyeqvrYq7GHFk3daaqXzwZYRgibnTLvu3pUnqujKbdKjriwVCJt6qnfy3oDA",
  "key35": "5vqZTYojFp29m2ErjgEJu2AULwVd6rgB7P5hkSzrWo7TRuWHHEDufyRarg2kzLmdFfvNoeafWfLzLn358sRef2Us",
  "key36": "3z6S87kzV4d3qTX9CgdQftTXdikbPNdjYMegvo9k3hfigRbac4FhMMh8RgzdKw83QCffDH5bnd2KyxQGRLop21UF",
  "key37": "2B4sQpfRfPCmGXvvMvKg3a6dvGKiP13nB9hbVnBgXN2VC2kGUikGRQnesTtpQqCvtZKfxwagVPJ4BUncLAvwSKJn",
  "key38": "54G2cndEaFcGNJXtNkZ2CFN6PJHjZpzjoRgq4EUQYhbkMwCK3AmBi6jWRawGtSWbfH8rYVaCTiZeocT9x3cSpdod",
  "key39": "4Gp7GJvXDU4xk8q6EsmbUpmoZcpAwbCtaXQiqNNUmN2sSonVGLt8K1Wz9mLsTy585F4XeVUWfx2Jih6MP7Ew1qL8",
  "key40": "45EUNahK2WZPqXnjZGbHjS36WT7X2wxpiVkitdE6vBcH49G1u6RKmFMsY34DgBQVJKRQ76iDpUzWFW4hcSN6SqTe",
  "key41": "eCszU4cHvNwFB4nqwWUHS6hhhKdge9VGNA9B59tMcwtNyXeA28sqkW1e3EdE96B9UgbkXYhY8nG71DW7RMNCU4f",
  "key42": "4c3xraD2tCofmo9wjKspRBoCGf848shAFoYsGRmTDAgQHLYSob1PZEM6itDiNZfPMHgCvsD795W5QeMhamtR3znX"
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
