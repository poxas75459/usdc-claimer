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
    "5fV2A2KCRBWrZSo1wE3nn9wjYHDfei8mwmvEm9gLaPkYchuoGK5NjPFxGvKpxyNjmxjUD2cDdwsUfkx1HjiDdwC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V3XwAJZ4petCV479JUanGHqzrg3NPrgji5RjSP31DRXuMpedrXVsFiQq6QupDsM352Fa69KL9n4KakmRruJrAc6",
  "key1": "3mXimMHZdhfnkJuyzrRVhNRYrXjSsLadgdbmt7YZ1iaXnRxeXuTHm4wH7P4h4wvKN31KfAJ4SUzDxDPhNfq2avFR",
  "key2": "2p39fo4iVoqBnCwVXoVDZD158qukWzSheAQDtxdXxmd6F2mrABqu1qsg3cp2cmEjzpbDBknhoEk4MRH3uLtF8jRL",
  "key3": "5rMVGQHgUZNoemtzQunt4afZM9gDF6MDCwLEb1VfPLskQxDCEd7x2jfQMXjAtVDeTW868aBF998zoUYXZCBPBw3k",
  "key4": "T6yTs6R48sEUBb9bsffdryVaFWhTbY3bsVfx4TyU2N1Rc2HFmjtCasrnjVEanV1fM6MVe8K8cGCyw5bPZh6tB8Z",
  "key5": "3qpUHdUUu9pYfttRuBDS8RZsgpuctXtVrrN3JqA79obwBo2m7HN1SJp6kWyiAx4oLzR2awFUkeTTupM5KYkwAwJu",
  "key6": "2WybWHe7tbTvEf3dxnGCufVZmvLgp9KvCqnjveUhMwUXQigtHHNhZ4tb4n9mD9RP1by9eTjzhA8oQijaK4risQWr",
  "key7": "3YuN2hg4sYBuktJ59Ey3bRM945bd1SXkB5RDCw3jqX1VMUrLNqgce82WLgTJNucMmZEmKQh4TqHBN4ZFMeV4QKz9",
  "key8": "3oGpWyycZ6oPf5QUeqewaQrXun9YjCf8J1BU128SYM36Ss7GYSUXMGPqvDMfHPhAydhgZBqvX21Bju5Vr8kj4cuJ",
  "key9": "36jgk2Sq3rL4VEuNSnR8XDJbqAoADnU4Rg8wWANACd44MCKnTTwW4u4dEA2JjZPXXua5ApqHLLczdVWpj9WZZWV4",
  "key10": "41p8Joc9BaxZ4kFCtv9mmV6wFGwAYJ8yyG8TCLTGNyBQDpYgsaPJWAx9uo2zdnwrV5S5c3cdMRhktzaNXWsREkpq",
  "key11": "2T5zHkL32bbgAyE4YcmcietmiGsoNK7LgaXNHzdfJCXh4dc5GxB2HmhnsCW11DhdSLimzDMhxBWbqEWDYiHg64p6",
  "key12": "4GmzVYD1TbDT8QhFmXQ55YsDKUbN3Cb81GXfhCG661qmRH3a2AXTDbsphWFNRXtSCMHSwg6JVHy982CPBrqhLXNH",
  "key13": "2vPyhWvZKwAiwt63UmZfGfP7fns2MD5DFaFKKZQT4b4PSKYuxTCV2LkAHtPb4wmS8qepWhiQDGBb15qTVUURuYCF",
  "key14": "fgLP2uBHSQZGd1qksVAGGdCXDtDABNKepfCvQcFhZQuA1tUyiq9pa6aG91tcVUTjjAkoZrQL33uhmpQMRZoj1PQ",
  "key15": "4HK2M9KG56k19swPSxNicYAPKadDyQrn5HB98WSkkh8chCEAnorVrdfzurcCpB1XT2acFnpsSsi6uLZitPLpepCW",
  "key16": "24brgepLzGkYRjiquUUb1ZpxXYCmaCcv5j3jtRsSZUpgegQ68K2pXULJeffefD5wtxE38W8AJN3a9evFcZ4Bf8v3",
  "key17": "B37tv6tPEmAigbAN3965EgmqzCerPqmj2hwyF7qxHDsanzm9agWTUSagc4pTR6rweeerUU1SbKgd5jyAvy8o58s",
  "key18": "43HqEr8FnvudHEN5Ts5YEcBdaL7d6HaTtzmZorBC8d8ZBbjGrWgCh14FZXC9mvfsfYrxUrDczCQYZtwnA4SWnf33",
  "key19": "1oACqQEiBfs8ZfMEr6trEJFTL3XaqBwWiz3pwJEDz4qdvpmzfUDbPghFKv1NdAbYujuxS6XKTj4J1TiuizYgSma",
  "key20": "4fDzPqpnjEz81c793q9rVv4zDkNSoJVxPmQP8CKyij1xUfjJAF1RZywYQyFntW7V5zkRWwtezWteav1iiMbj9Sq8",
  "key21": "4ZTbqXGSHkbdDfi9pu6erTr2nhUZwwyPqJWrVmzW3ebBE96ZtWJLREYS5CtMm39RBksCrdi1sosMDsJh3t52WQAS",
  "key22": "34G7LrnE27LvyGaRuWnUxFW2pjaQLEevduA63eJc4fYoFk5F2cSLoXeCEmU7DztTrZFXcYMKwQG19rULVToiZGRR",
  "key23": "2yoP5JywBEZB6Df6FRYWsdy7yK7u3LnEaXjxeRPxUHCD4zgdk94v1VZU6hCyhDYNu3vGVwTTN36j9wKXwFhdgrbP",
  "key24": "5V4P3uJxfEaVNQnBk4VLWo6dk1Rts3SbfjMF5q1GToSJ17aNkwm3ouCSjoUxnFFoyyN7QxnFyrqX1TAqmUzzzyFf",
  "key25": "4dg8KhWpEmAP8chegi1emKjrRWFLqssDTDughMT8o3exZn2qN9BXgU7WR3Yz6tMjDXoaSeKPWXPW7KTq6EqWSCzN",
  "key26": "5K65YvL2R6e7bJq9mnwScBRPSg3oZ3jNfxSXg25wXHZKP1HnhkzwAxsXiWRagpMEZmJ1b5cSA71xLJd5M2jWmJSD",
  "key27": "5HxJ7vWjT5G9fApEt9kzCzUkhXSJxWFZVsqiaNXigkVekNasMr3Svz676Xe7CXvndHoze59AjS9v5CT1JfMrG5Ek",
  "key28": "4bkewLy3yQaP7gKs4N1in9EnnNcHXqzh2d9XfUdDUJhnoyMDC8WPhc3VzXYYkdPJJEDAgpkwy174dF16RCAqo9hE",
  "key29": "3mWL8N3bgdvhakPnSnMaSEo7mrQrkApMjMSAM28eyjYGS1Uq7MXS18xVVnRkiu5m3CQuHGUMeN4BDDz4FNqa6KBW",
  "key30": "3YeqiTgWrKaz5B3FkxyhkvSqHrFeY9dE9X2K7pYVeSa3RF7F4jWfrZBgjdR5wSMcm5jvjCkNy2BEbFBqJx73ej2c",
  "key31": "4XKCGLyjNcMoVfV3dvti58Z56TtPPf3CmyCGQhb8wDAGFrYtQErPR8hEbbX5iqo6QbrTRCx5McZjTt4nt78FimR2",
  "key32": "2iVRKPaztiBeXs8KtbmCn468S5ugfwNCYpyBU9cKaRnXBkvowfwXhktmRXWXQYUNvZ6ahk5EYfErutnoAescZbJM",
  "key33": "4ciWdwmVcD4utgJkiaBMwZ43vvbS8mfaimEkBfNRvZ3w6ELjZLtzdauagM8MxuzRxqPxp3oRiQmuGfLHMx7BELBX",
  "key34": "3JzvehSfcFeQnvhAim2cPU4EcphmoC5HPSN1jQRFd6PYkCn2WSCV7TYFM8c93S4qNMTuHH6Qu5KTAi1Xh96dYmhF",
  "key35": "3fXMvY1Xt6VVk5LiScqb4hLnWCr77NdzFio1N4R9CLEnQujtVdHp3TPT7R1xTJH5vA7XTtpBbp5DPZsB2jbyLhzA",
  "key36": "3MsX6q5GNTzQr2LfbA4NjDqWi1Hu2ZNF94msjsvHBsJbu4ExZ3ar8W2LqTyXewPMSwG2vZF1K3HTG7BEyBXWvWmT",
  "key37": "4bvm7rmkCusrp9Dxono2Sj2vfX7dV35vKPG2on3Vo9QeD3m4iDiW94YnZmGpaFSAHpZmgSky6byqbrCUieQBba75",
  "key38": "5ftUNMK2jyER7q91fTPzgEJUkdmjoVVeCyhpwXMBG3cisHjvCUr3CH7Ldm9ZsxNH2HiSiUNaURF62WxhypV3HFJ7",
  "key39": "31BSJybmHfSFfiDPKW4B4YRqguS77pAu7keHBFpTUDHysEQCLoaijmpNJQ81vfxxdj1iV1VDUMgVc3tHT6PGQzun",
  "key40": "2MPPp6pAWofxntP89xTRjP84mf3MbnLUoDDvfgp2DHd16QBtrx6Q7zGLwjPpHYGU6fimLQJ64MHev9P9q5jvh8WP",
  "key41": "5ZU12RQsf2SQHM7jDmGjgib5SejPsN14UMvrzcLzYqvMSyUVuc2yAEmnPFYGSpkxdepqtyeVd7bso1bEGkkbPGYh",
  "key42": "2FeubjkV3bB98rRRVZ7xKcrZy1rZ6qmjWnid3JiUy98gWo6TzmvrtgB6LKz6kuhaFmp9FADHokCYiKr3J79dAQ27",
  "key43": "8J2jW5dRrWnB8neHwfNkdLN1Bb53m8f4mqn8CycQK6cYkqPQzruEbzTmt3MEe68BMaHgTCbVZGVznxmZvmyYzcN"
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
