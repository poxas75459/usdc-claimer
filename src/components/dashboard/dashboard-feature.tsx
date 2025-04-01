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
    "QWiseJWKGAyM9F5nxky4kL1q8ZsRYSJAjXfzxNkDsHddZ8vSTGTvsJTP9odGrcMnaQZ9kgpbjjjZ3gbTNQhCpDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XWJvGStWhdhemGFCJWXA4Wc83NNhkYtDf4GnoPho8muqdovEMhFdhZHLZYo44abgPxzg9y1dASgEG4NzDx5dwm3",
  "key1": "4Wv3Ei9kJPcRDsDwGiSLJHtHvUEENZGWDXEyosHWXE6B68MQzEBtGWbyUpzXYtd2WBozH62jXXBqgX1TWmkkbEi1",
  "key2": "2t9hLL4MCp3TdzGZcMKnAX7F2pr1FB1B45uiXz4KKJqGn1piwWzexc3DjnWiBSNLxbaTsETnQMaRVmd12U8auJra",
  "key3": "4nVHycHzV1nQfRXuF4nTM2qqgVjjvfA6unBsgyC8SFTPne8vZGkn39wfHFnDAAG7nRWEpdvP8Ei3HCet56MjkvwR",
  "key4": "49j5cbC8L8atoFwMc28djLxrjgGidPfXVXEzczJm3rUybWMNAUTuoTHxHDc6kxiARtnvgyb8sEtmWK1ZFXZt1nZA",
  "key5": "3VmStKPC5pU34tNeeiC3hEBK6kPc7qu2VcR3CSXRZf53RN2Gyc9f3Ee42ivJihPUnJ4WLFea2cNhCkGRxoFAj55V",
  "key6": "4KT1RHjzbrLXdB3Sn8B9LE95pbYtRrWxcYzhvqyr8iSpttwpp2iViuMJHaSwgpiTU5va3WFx8WsAcjJ6f1vJFf33",
  "key7": "3PhJDhFmRuxiofpurErzJB4c5qYnjhb6QR1nUvSCJLb6taJYUJxYBgMetefEv7ma7rkXXhYG4NCkr9Vo4CcsabAA",
  "key8": "5GbVnYReQdGvgzw3pku15SrAoZfzSAMQBMQVzcR65wxRPCBwVXaeKX1DbRCzZJuqub8xq9WijEm8iTEkqneF2viN",
  "key9": "5cqdvjcTC6Vcacyr39ZFA9EpGDs3Lmt8KcBuRVaYo1S7zTPXRvsAcSvQ8QtXyk8h62mmr6CaWXGatEF3XbVo4TXt",
  "key10": "AcUmnL3aAo7PApAUwzmbu9YaFYAELLkubD2y8vR2WuJpSxrKrPn2x1RuQD1qrMMEJ5N9FFmYAaxPusjGFAXbJv6",
  "key11": "BYCKwF6XN1q4HZMBiZJ2TFe2bRumaQcD7dSZW6bwYPPhdd4fDuktX7gXYqpype8wqiKVmmntmdc7RHk9rtYLaAE",
  "key12": "4RrwJWwqX3t3vmWq1k9oyj7a5J2xmyhjVZg1HtQ3KRysX6m96gsGg57ZFsBdFRsCY5GEETWQzpsyJTX3Ejb1juts",
  "key13": "2d2uWMcypGM3eqPQEaSEopHVZv6RP7amrcsqe9GAQbnTAEK8crGuikxGTJgkd23Q4hxiz4TQLdF9iAmmYGJ3eGjN",
  "key14": "5hhYetagNwigcGEu6Wpe5kYyxyK3YUxU1sdhpBqRWdbgf8VSHoXcR1nUGW1nsNbysNYaessm8Y2hPMpZ6tjFes8S",
  "key15": "4nmX5XFC2Rvc9NeHDGBmxuXbcbiQchCvtf6na9uKRZ1FhSsAoDR8kDks9HzGRTEwy6ZPDUXSKKB63kxDZM9ZFnrk",
  "key16": "2yF4QB3L3xsFMWNu53mZcwnLNjALKBiTfNjbG839dha2iLkr6THYSTHGrT7PCrDwR2cE2FjUfv9wQeRLnnYAXUUf",
  "key17": "647WGJnFv6JXANj9t4LeC46CV5iTWvkk1n91vF5MbTz8oLui14nYNY2ozb8MwSAdMNPwdyJ3aiDNWS4KxDkHnybb",
  "key18": "hEM9Dq2rXv8ZXKqSHJjGrnSnTvLEx8Bs3pos5ApGjf5chpC1um8ry94zGAD3Htf3MEBwNYApjCR89PAL5us4izD",
  "key19": "yz8intu7cY3a1282Y3uYRrHpFz1HxnHdBmqtMXhcTGZzM2mKQkG8rB1Zity2AonoyKrEzj4KGsgk7ZQ6cAkPqvV",
  "key20": "2TQDdkBNkrDHThSg3hu7H7hKnVfK1tVNbDt5y1MdBYpZXMBRccfyZQgs7XL5qYVYHmdrcm6sYatbemfZZ69E7Wde",
  "key21": "5YgV7ZashYJpJRuvUS9jmKkq8H55bJ5TYEWvXdLWKVg6MmqhdxVsqZdwBDw8LB57phxCv7GVp2zTnTdHqLhFy8bK",
  "key22": "4epLFC997y1QJxaTe5pDg1iCji5TWHmyNAG4t6amnktyxpUztS7n5JKghjFB2sEEkAvehHL8ZMZKCqfqWaNmPTj8",
  "key23": "L7hFtty8JK1n5zQd25CUrsscvcsMBDxNimGUMvPgwQL3iYjULxN7Ja2zeoJL34iM8tHPfkYY7KPNczzamAEoAGh",
  "key24": "5BJwiSybkVJjyAef72S4RCq1Vg6XLwAS2CDgs57bbtmMMArN5nowFW3S49yPQ7Gru7KWgYquPP9FyjxEJCV1SinB",
  "key25": "3LdRFCHJqvDMatJtVyWe8KLhMMzc6p2G6n3vkZbLYC8pnyZtK2Hk5gHzk1jKMgY6vBHiZzSAHjnr7rjUW31Eh3HU",
  "key26": "2mKege7zJwj57aTeTd5wvuX6TL5XHRTdsZKK9yf3UdcpsA7xWp6Gg6ooPW6dS67aermDPEaV4xRVXuDH3L6dFvk2",
  "key27": "37TyhjDUcNxYA37osbTWAzxU4CktzJsneQKokrW6f4nkYk8x9o8TWkfhAdQVruq1HMQpr6R761r3ocAgzZfzLtFC",
  "key28": "HqcxCj2cGt6R3nrn6gPrDPNFscvDMmS2mhakDY5vupyxHmoMcpjfhgyzfLqq6YLpYzEf77dGQQV5Wq6pVByczXS",
  "key29": "3knyhbFmFxB37otHgypJR91pCeZGzXNqVSM9sYRfexYM2F9Pv2sapHgvwjjwgXEyGdApkW4dMfu6WKiDrJ5d2hKb",
  "key30": "bYRC65BktrGYCCkUhCKYa5YHPhz4KxjjYfz8Pnyr1p6gGSrtubS3S2hbYjpfGJ4xezzMgsNtqVCKZxhR8F48Z1h",
  "key31": "5X6HTNiy21QNTjxRNJ28ozJ82gLaDnMdN6hpLWuZv53Ng4Cego9jJgDdqMWRHD7hBLkeeUwTYmhCRHgZUQzyaQ9v",
  "key32": "4iDBWQ7XYS1srD4TjFystXXZCDZbXETBHZw6FtobpVkaEZWDV2y33cf2jhr2ds7V7zVnUeHBVnnnUE3nYBvYJVEA",
  "key33": "2TqDgKeRpBTxgmQp7htQWHbbmDDTNaTpP8i2XFd8RCjY3xjCMhk4v8cpmi9rdxQubvgwxshhihdJJ6is3vGyVhZ9",
  "key34": "3g7rLsyZoP4ru6yARbomFZdddz1PafwJ33dQVp7N3EcwE8fkK5AhVZkeuBeU2sEBiyfHkeqQKdgvBNqz4vyqrYyr",
  "key35": "2BxNScFsHjkP6jToSWFJcgQ3KL3e3LPi8A6g4rYhL8sjnvt6d1bBokm4tNz8p39SfkYCT83hkpfLMKmCZwZ7smFn"
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
