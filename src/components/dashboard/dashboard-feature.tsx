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
    "2ag6dFLbvV7pz6nczyPHThHX4TrBcJqHASEeSURniPCYTy1zEoQUEjdJjJZNMzQFtvQrwd41dud1XtqEU4kgX3Za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RcrCWy8EPDSv1ddMTC7792JLdESasoZC16YJHrbEhTPG9Ny4stgpLDDD9hzs6LwiSj2YqkUUqZ3veseYpDM3sQW",
  "key1": "4fuwPJHNDVRGyPWYGoHyLhn69DjAtoP86Ym5Acj8ErrtD6Gj3GUwku14Ua5bMBZNM5TLhhPeGueJBXJAkQ1oRsmX",
  "key2": "3uM24oSeHVm2VfLNRzxzt5YsqKggmmXQq87qquJYNYjtjKzoSh6q8K7YqWLpp2tJeaA8zH4PYUu1shALaRaXPnV",
  "key3": "5Bifc9VGyQPEzhGn4iXoeeisCByLWbBQzs2xTumXkp4j3cRquKBU8ZKnVLAdYELwmB129Wq2npYnfUURCpc5wwfR",
  "key4": "vyHkA4QkhE345aEFtint7YPjcHUcqDWk7HYMSziNt7NZybiM47oTNg7ZFNtnC5cSP68HxZK9WkCQfQxBgzrD8Ny",
  "key5": "2wAEneTMUUn6fn4Uq1gzQvUwNrHLYPpsurXTHD5D5NCnUD2YzBV7v1c2eNDbKuVPDFMyLTfRvQ4JW5xEbEr1Ngyi",
  "key6": "51FCkDEozi68vHnnHgisEw7ZofiNurVn8FiidEpsdQH75TdrLV4gKdfh4Z19pzGiECfLYEgawr31KDqvdWBrbifb",
  "key7": "v2vGcBYbZVkVeeRatvxKB4mk1sdRDSnQpmtPURRrCJMVYZY43ih89Ta4CyCLLCnB6pKNA29fwoaebxkjvdAQGFA",
  "key8": "2P7ds6ZCj1R7e7pVf6p1rn45mcoZKwRj3wtZ2P2K9VRNGmF4vDnevCzb3uwTVHSW1VtWvyRmyKxQ2jk7ed9S9Cts",
  "key9": "H7BDZMFZYyiH6JFUheGAp1EQTBpkAoEbNtW2nVh2zWjkMKFKURXMsFVueqJnea7mgoLN61rkKCF3Bkzvgy44mKj",
  "key10": "5wGFMFpBChxxnro2VTYqncbbwhQLW4xFBsNLtEm35FGtvMHqiXuypCUMnZ9WnXy6GjJ8N8ihfmCcWVpFF1QVUgk2",
  "key11": "4JG9qvC4BNtvNjS3vyiJ2Kt9WcL6sEHrhEe3WWtYdJRcSCnWnDqnHyE18GZt9YWryHuK46sVimCoqQVyAmwp7jsV",
  "key12": "5dZiGTu7H8rTCiXxAMuprCfwkukq4TGfXFcU8CEAwW6DZFw36WH4dqc35gWf37CGaVmHUESFYfp5zDQeRhmXHd2V",
  "key13": "2mwdxp9GvDDCNQiy1Pvxr3aTWviKu2yA5jtFek1TYUuoeEBj9ihUHRt4fDQF8H7xKtJDme4frFL91axPZnjJc6wD",
  "key14": "nourYANimm6852hQSNm95mTWDTaH6R15YTgAE9eoKCH1mMRVKsXji3TJbidh7Q9NW1QnSpPmA7D1dtT5k1GJFb7",
  "key15": "3BrnerkqQRpEBEXSBp56Xkm7mNJwQQJ8CNb95i7pGJus9RwP3Akt37J9raog5CQxjK7JADBZ7Mo6jX7wN2uhCZTZ",
  "key16": "HSyRufWSDKkTVy2R43urAnstX9HkESkpAjZHJYFAht9QTdQMv8Gs7HV7xx5T7newurRQxDjSRyNNbLjo4u3XQDM",
  "key17": "3eDxH16xNEorvYYRUytHdt8o9adtEkdEYa65ny84N6NpuvcgMGtcRHD8fQiwcbq1Cj7dkjy2iR7uC9idqPivwaxC",
  "key18": "1kESqe7wdPNafpTwNc3FbxyRVJkGyBkKy4ScY6p4uHHXLbQGaCszrNDGCcaLvNt4sbMycZRCWzPUKnsqmngMAK7",
  "key19": "4eXWEhTpFarP89LJjtDyuZDwqEwyFxa9rhwTCENRxmChdaizJDJUuQ3q5Nn6P7yvPZYFqC74k8hCyohoGHASqJuf",
  "key20": "45hUxxYtJiZmFE7sdsfbatoAC6CopJ4PTuy8rRBNUCCkcCLT1L2eeQh56dxYfP9fxqm4Nxz5oXDbi7gRFL2ZXGms",
  "key21": "46RLwebxkPQk9UtYL87quJGEikFAHA4UUDCbsv3ierxAu1GrLY8Zyom9y7pDXZD2F5AU3X2fGHeJqdXSETrHvy9E",
  "key22": "2qTLEuE2rvZtdPYeV3oXDaivdBM3Er2an8d8vYQdG5Us226NknuywEbLDU2XLMYi6B8Zn3zfcjTSspYaSfTQaeKj",
  "key23": "4LK51JfjER5fURHkaVFwe8QGb1e1EcwJxXQz8E9v5H7YKrsmKTkennmAxXiJbg4ZfBNx8Z5vFSy8DPvMVvJhLhTp",
  "key24": "5i1h9EcUrNxVMLwjVpaePNBGrKdn2e6rDsJLjnCmt7HoAuru1QXGt5GVvBELTyCanWEpscd8gWqanKzMW8JJ8vim",
  "key25": "4rxPwW2tLg2pGaR4nhCK8LhfHDGwKDeJjFiDYA5AGvGuVUCE1cnFyAit5BuJE5eoZ75UaEGSCX6oE8ZwYDJEkuM2",
  "key26": "5e4LDAfx3gEgo6WcLPpfG3BeHoXJrSsM4CQHgyMR6adFwKg25BSKPi1fsVrrWdD1ko2RXazf1GqiVq2ZABSUMnmU",
  "key27": "2tP5HDismrpbJ6BCJ6x8VD2uymtfxjdqwobCi69tDqDdsQTTWUZ79cQCF1UcdoLon98aBgc4quN1n8bNa3bgXiFm",
  "key28": "2mrQtCnagBQpfBbtRHyF2jnz9HGA9js9WiRnHnYpCU9FuxHuW3VmEovkCDkw9BiZUYcPkiNHX11gqNZ7gn7sbA7d",
  "key29": "3Qbnin1wPsDnd9pbAiZBWPziV6DZ9caJHDXX94aCGBssbPrsPgCo2XWhSZzgXhjZdCCCZAtMAJvNUYgHJjw8PFPb",
  "key30": "1SZgTtKjFDuSAY4Suhs4FU6bry4JayEDymzXwZ3JWBZoadbheyZPzZocSaWEk8WRJhDjyLYZBgFQqDK9ZyQN6Aw",
  "key31": "3nKrzw3vyRdZWT4v4ZAS39bviRPLQZ2rKFq13uQWKSuXLfCnHdnfqBdqSFqQ5LEoVLS2LJiqihtjr3L8chTAVoJ9",
  "key32": "2pgnBYNKQtu6W5tG6B4rhwzy7sdbFZw72afEcGgJkQ3bNow2AFZX6QNU1nTxzScjjJhFKJn4sac2Qb53H8jLG94w",
  "key33": "2KMdtU8iqmow1EVFsbBifQr6juZSr2mZkqE8JhzMGtihxfEyjaVjSWfsWwBDsD98idHpwRAyLKFNTX2ZmLMPFGcF",
  "key34": "2CQcMf2ibFDdevnGjDKetdoyZddxEPgJ7LGpnypmCHtALWeWjUCCxxdBdmgaF8cKxGo3durF6wzU8G7XZM3PR9tN"
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
