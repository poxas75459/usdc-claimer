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
    "49hxGkKw1QPQZ5MNFKovxduwEcVbJ5i5fSaY6ZsWJdCBgspTofji4CHN37aGa5PEaBjLPYBZxRUMyUw9pdDmSp9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k4iMcG2GiMUU3PeLqfLK4tcg5eTzB5Yvz9XMW5rv1iHNhADEuazygi7ihAMBCTcMfzCEFkEN1ZjZu4eksGK8t13",
  "key1": "3e98BtwiNa292W1Nrz6NiGcEPRBocSxnxG6YpWaHSPMkoEeNFPd3SGbaLtPSqNmEZHDssnwM7cgqddiucxoQxo5r",
  "key2": "4JXW5aDSSLrRvYf9EP1jEbPGNN6dX486WFQPsE6WR9jM5ydjADF9tu1eZezPzyRBUfjhS3UsaZ9u4wUoRbApNRzk",
  "key3": "4NnPwTVEw6ZGUaQMA9WNbe4GxBzv22y1JbuJc9queJUSUUtNUSqdRAHCQXuGe199ngdpjHfGnCxC92za3WwWYtgt",
  "key4": "5Vtws17fDxrxX5ojTGLWNPA69qCZw1i1WFmWXMiNvq4TUUiwVxXpJdwGysXpvUPX3D5qPkax4yhRAP1eFXANiczG",
  "key5": "5Eb4DDmdeu3cULU4VGH1aJB62oe69EJHYWfqKhpJZraQBGUaZ6ZnKshpWcprqh99HJXJfqa8xVLTaJtF38MbwQbk",
  "key6": "3FMT8EArvfWw3ftksFKmaZ5WfS1WdC5VdA3dNEkLT6FDuttiQYN3dTwXAdEfbAmmu1AQ9TDEGRMHAg39TpWDXAbX",
  "key7": "2ETQYZZiNjncjSP7PiB4tqMyh3yBuB9Nyrf8Dc8YuXeJStv8kyVJY3p5GQMaDonGohBuxqgaMsgx52XwkKuM32Q7",
  "key8": "2r7T6TdkfTLsvKQYhmQ51T3conHr3Rs8Y9cdp6KvbigqfjNbr4vTgYsF4UQU1XinuG2x6YpfwEPJYQ25FBVucV6E",
  "key9": "3gZRsHDPUnKCw6s4qpQTTdRCtaUdJBHa18BkDJxtXRWchrEKWTxtHPscLbsnBPQoSD1ofSuwTRhZW2SRZ1vyrqEy",
  "key10": "23RoHVXpgWXfaikEc6nMB4xTwdjxHEmF1Qw3bStuUd6DF9CKwzVwF2dii1BmGvbRxxAWwGFJXzwAtevDy23pgHbR",
  "key11": "nyiCiYv1sMiAbqbsXM2NU6zdXiDMk9xnWS9W9VMoXSQh5YJ2ytszqdiwi4KP1Ar6dedCRPCo288fHeTeUkWRS71",
  "key12": "wNwUEt3j4NXEVwhEJvCPKXo1kE2ziVZC1zKb2Nt7itce4SZV6TjpVbdcnpKNKV9UjL4oX6n8CFbNy8rJnDKVMQv",
  "key13": "2PtKogTRjzJ8arRaYqogwUahRJHGoqEJkRmip3HYvGAA5wcqbBhiaSK2aD9RzURFxpHg5JzFgk4FR8j3nhmuKb6d",
  "key14": "5ctMPkkRXCR8rTt4p7eXZn7XnDDTuLkCuQi8HEwaDcMDRnAUm2Ni61F8KF7r5DqYchsVe5SStjA5AfAtL37gx5u3",
  "key15": "61tjXu74Cun2bsJTM6qBGkpJuz6vMTVTrVRBPzesCYwfGhe9xGBWfH1v6PgGXWJwye63TANCUaPkvETco2fnbnt7",
  "key16": "573Ko25yzJMoX6KRMcQyNfgRgSj9r44pyCUatU6N9QY7uaiZLY4RprRxEqoCS1Nw6nsnQn3aErL8UBDPsfw6MSq7",
  "key17": "5nA6sEGntKgsER1cUDLMRJxu5sbWwDNJLqo8BH1ScgUeSso4vFLzCBqj1pmkc3WCFRzHpA77zNyjeVUo1ikHw9kt",
  "key18": "QgToPJ3N8Cri7g2DFbXZg3gyySRVvXszmbbj8XWd8iYZeQaN17kFQQ8nUo7664vGkAtv4W9hTJCnbQ9KiFY9JFz",
  "key19": "eEybNQv9exHUWzNvVoqRPLnmSFCEQGkTJ1hm9yWMZd18i6Rb1npkEixeQPsVxcYubg9AzQRxBwxqJ7xN1WZ6mfX",
  "key20": "4YD8T8DKGyHEnfDUPFQYTLLKQotBi59Jh7kJTuVJvod61JAmdppobt26h4d82Vqezypc1DPb7t8iZySVZZ7S4aev",
  "key21": "5fjXGHEYfLduuX3pz2qMSULQdYWeNs1watuwuF2hzThGLcgpREov9KLW9PVNGecMmZYTHgGEZMLZYSYpUTP9PEoc",
  "key22": "YakuyAW6aGhnQQCN7Wp5MyJjL1Kk19XW9ZAvMn6dWdC1EcLcUC4G8BPeCz24sFGm7v51yatm8PxjzCNVD9dU7kL",
  "key23": "4nCFj1QT43gkymWjxvk4zESLeoJFcdhNYyoYZQczGsFejLzLFec1mhcxuCG6sehph9ztTobTm4F92aqbE4F3vEFZ",
  "key24": "3sXCddELFWLLe1KwrUXX4Zu8ixjogpgF3sdt3uNUeRRrgdjdSsG1cJxwP5d2YcW93vTDAh7f6Sz2Y1HRMpZhZoAK",
  "key25": "q9ivEUQ95YjEhDv327ebke2fs7gsV6oQ6XPKV8WxKhd5kJxkSTZoQ8wJFh6GX3v9m5nbFcvqvMgMHkmZ5yRcqA7",
  "key26": "3ixPp5JU97VaqgromJCeY63pT2e26x8esVwD4R1a69vTBYeMbwcwAPSGuFMB5haRAitN4DpABirdP9CbLXnECgLV",
  "key27": "4vG6JyCk5kgtctaGdUZ9m7HB9WhGwcmv5BedDkHVLMarffoKcszwyG37UmE6QkRUFkmU2XqUQyEaUE4YE1FXuUMq",
  "key28": "4zKyEcdNTnwNMXotnytAkMCarGkqYhjTZU2vj7t31NpyzzWaj3escVf6Rfa8NFGuvYx1XpR9wggfaBQxU3YT7rS6",
  "key29": "5E6gA8uTyxBT4M7NaSXZytGntezDkDFVFL7KgGKGLUe4BmJxtnb9DQt3zX7uo8iEvgizY65EtY32UKX4hSkMNAb",
  "key30": "3fkKPMFtM81KiqjvoTZVwKPS5o4nWiWEVn2JQju1t8Rhhbp1MrRR5DJAZZPzpYn2fz9a2wQcoBEcvYAh6eVdyfEC"
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
