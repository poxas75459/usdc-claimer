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
    "rzRQncF2rEyj4Xyovd9wGce2j2LepsrD6UYqwkWfbkj3VMFpg5uqb8HSphpdWeTTRweu5xeRcU7nDjUEhaSDcim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bn5fk49i8XPyQfKpAaPVFRRggtKqQzocG3GXy9WsyFYaXXyPGv1H2a4FSDxYRysLEtDKjbPtzYfHpAKUFxyoZGw",
  "key1": "2ChZLHxiy1oXjWFhLHBgHeiWgZcz56tr5tpmxeZGaFnaG332g9fpBGLvGAsXv19Pt4Ubjv5qA6ut16eudK6TJvXB",
  "key2": "4H8U4z5smxLDjRGq86QfZLJnKk8G6xeKFMKAxorBjeDjBRb5V3sP4HRMiS5FnsNBjiHW5ShA7KbeKkJWyQjCWoSu",
  "key3": "4Dyx3joDfzajTcztB12hptQ3QFSPSepqUrSY7dq2gbCeD2QyCMwotEnhLgMuT164qovnhbepFWZUkUJD8Zz7hY6X",
  "key4": "3GFrPZ3dFJAvF9UYAATMFaJEw7RvNiheTjGeyi9knxWJ6oxAsoEoPdA21RbAF3i3AiavWunuxibqptdWJa5GaQX2",
  "key5": "3i1NVYDaAK3ErBCKLyvRuDYRPPGp8CvWYjd7M1RTvNuX2fwebujfp5YDR82y6sH7ZJVWx5mtL2KJaRRjGg8rysRr",
  "key6": "47az2gXkjMt2ELreEeKnEvp82DopBjgzBHDrgiNZZdT2GJLCvn3jJDZBnZPjuqpPUi46NbmPVYodKmqeWdvCBiRq",
  "key7": "3EGRdXTs8o4Y4TQC7jw5Bo7doBEWMKYyH8vFj3X32F1WeE1yr7ZpD8eyofhvhU2oobkhzxbrUMqMbsHUmqgXXgCJ",
  "key8": "Bo45hoi56MbieRnqMEHgehbinghED79WhLGXV4j1YCwbPPT1hMFeBwXoFyw66CLGeg7F1HNZQ8Pf7BMHLGF2fYH",
  "key9": "3JYvT82wdmo7EnMPKK8RQpWfCgZJdkeWuMaYm1TN3ATSUSyKi1eedM9nMA3KvwETGAjpyKrTHG8VAw1UMo22ah3T",
  "key10": "2Q2wAaNRqUCDvAoCeCRgTtFMB6Da9qMnVFCi5TU7mssg9jVBmgn4KtMrGnYxgudVVEaxKc1ugxqqR7drfWUP3XtF",
  "key11": "bPekh3iaacHnw1ynBrBNKerQnRuizYegr4dC45GikeAbF9zVbjf1sM9yx4hUqVmz8a9WChXZpAHCBckuy8C6j2J",
  "key12": "3rLtWgRFaSbZDh5pzFbqGNECrJ6bgT7ofYiZFW2Z9yPSDExbqX44xhi4iz5t4uhjQXpCbm7j2XCyzDNXaaFgoHoi",
  "key13": "3tp9PUFJPijvNHYbeDAVh6mq9NKCpFTkXbkvRsgGwZfckLERntdGBjrYD7vQPsK46EUTq1W1irhRurE9uuTsryfm",
  "key14": "2gpN4rcazqakqHKcNzipyrhRME6iywPZxt5saHupfsTPjLHwtTKSPvc2E2aGYHpYxEANxz6Ca5M6CCd1ojq1SqbP",
  "key15": "5JR9aGoU5PDwprb2MwuFBgWzxWK4Sap7JMfeYKH357ct7vS3Qovuzo2TnoaRWCXNx5QpwsggfqwsAH1wW9jsStYw",
  "key16": "1R27dqehYfAhAjstDk6n3Yp2Zy6TWDwaPvxCRyLUUctX42JRgELHiu3LTsNPuhQPvK5swGye2yuG1CwZB4jMYPA",
  "key17": "3QSgVgHon4LTpYMRZvykbm4GwobU6Y5p5tf87NKyn5WiCHECNMtSLkTC4wFKwoN19L6iRzi9VsJ6Yj5wHWnETtts",
  "key18": "66n7xEwUTMoWfRG4iigxzxaeqz4Tiq2K9nzqur3prnmh6xNFXgpfC3KpGvkjwgkg7c1C6wDqGcwWYJp9ssd41EV",
  "key19": "5BcNX4QeoZoLmEZxycaB8JGcHCD8mHkSLVsBUGw56v3rWBgeqX9qTUzEJEULMfZT24RabgSoqrkXmQYg9nPhaoop",
  "key20": "4cMSUbFYkCwAkyYLweT4Nf6oFRMp3etnnncdDR1fnC26txfQyxdJVVKngf1NnCRvkvrpeaY9EePCtympkNqm8RnW",
  "key21": "57B8jZrnhyAayyC8WUkTLwKiteiZJcUPLU1LiJzQKc3SPzbBMdkBrzBHf4ox8n3UDuC7JUeSxXmKtZHD7XX2Hd7i",
  "key22": "3H7AQ2Lubysrpda3a13sVsQFr6d6wwmCsEXN2hZWvoa4hZRav8jEeGvzA9c7qLrXG1Tqk3M7m78RpMg6jcRJSjxp",
  "key23": "4BWq36urpjexYwfJvqu4wAbevNKfSyhAnmSKH8g8tHCUaZeHMDcuxGSHe6xfPwpm3xjgYE3wHVFH4GzuUAJq7dtF",
  "key24": "2Rah3ncroQB6hHUNCjEr7dAw4uyeS3kc6FDisUMLYHbMHXWfK6ReX1Lb2y8S6etNq4ueRMvPHhbc88dYeWsxcevX",
  "key25": "57NCErfFCBEAcHEXUreHPvVXSH3mAGtP5QJU3LgjTdpRfKwCFAGrUyJ4kFHTPP1ReSe4wBmqgeaPtUECFgLq73H6",
  "key26": "64TREDZXxFj84rc4w4kpU73ZqGpYreLHsSDjtaerqsTaVsu7uPx2is9FY5gpWQxkx9B44AeLYd6LXPVYz6Xmyo8v",
  "key27": "4F7gzhCtRbeXa42eWDsf2nYpJMKhhXy3MoeqcvGyBsxd4Df9a8SWyK1W8MMBkCtUc4wgw2cKxpzTNrs61Dda1SrX",
  "key28": "4XJKz6QNiQojDhGHmaHbWqbz8oAvBGqjE4GyzwSfD1foaTU1DAEr3LBmC3C7wFrQ9rEgg2vmKSZPRJ2hEpF9CCgB",
  "key29": "25kbxZb5q33YuEBvcAAnKxy4X1eMVN1bs9jBzNpVKpyVyMNC6wo6m1A36XBreQxP2FK18TJfRR1zcptzjXYsgN6e",
  "key30": "2H8xgkXpeCYsJKTpuoBWzTvcANH8pXtWvSS9G78zqYGAzzUJJa7an5ckTFBeckPEoXXUbn36veewuGTBn4J2Phhi",
  "key31": "55aQpcLyv92EncbchizE7PXsb3q1ERYh6UronpHJZeHfJD439nBSpv5EjFEwts3JqnH8UKttUp8xJYnQByN5zL16"
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
