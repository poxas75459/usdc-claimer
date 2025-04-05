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
    "3TS1LVfwdhYpx8XK7NhG2HkAvoBLXohjhP7c5cjKRnB5bWCYkFw2eTB5HyrpQ8t7ssFaE1QRo2A6hNMB6gFeYoPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcr3WmMeXFuhF6cvBUxrP6JmBMkDWDc6L6s8nyATN93Rnqz9P2LYpznyd4aAq6a2JWZKtYkgbmg4eDnrmk7bkT8",
  "key1": "62DnU3h3hvvHeYXWsnMVTsZnZSf1og1BxdCDrB2xxp5XfnnfZvWbU1YxJMgbFCU7CKdAUzmZoiNXLkxVxWVb2Qdm",
  "key2": "2HZdVjDW1phM432qiUktV7vusdH1FkeYt2oDpqPonMm4YEsKXSUmjpm5dCXUhKdEPFzLzyQS6tm2nZxAsvXTXqNP",
  "key3": "3sXS1t5yWJqrJcYLBprvHbx22C6WrYxw16LxsfhQ4nwGt4hbFfcEccmoDCCyKzNAzE84adXdvncDmsrKopnNcnMX",
  "key4": "2NXK26SL6ksa3gAyYr15VwPtusvEGFv8PikJBvXerqtmTqSoC2zwa7u7xbbdkhZu635hF7AaTr1nDznqSUNRVxsP",
  "key5": "CDrvoGdFuMq4kwpiTx76Gp4SoUJQ6hHZkj5CF9Cfgwbb9tHNAD8k7Lf8inmohXiS17taGshhgUNyFWaNEfSuhpM",
  "key6": "2uUMobwThpVhf233kBttdaoioYPj8E5BvakndoRdk4h3bGRvoPos3PZ5U2gVJG7444bmffbsfoqq6n5NBZu8LC7Q",
  "key7": "63mzQJfXA7xJgsZaQubJ91EGzfvZvhMeUcGVhgwxfYE4E9M6BwpikHvGfV1d7qEnDjuKcPo17NShMWyy9LMBWnnb",
  "key8": "3ng6c7AMPXTsGbp2b3XvrTEwR55Fc1ZXTmqSirjFFL9v2aoYJvtvksmFHpADytXmqfRowRghf2MQ7qfVv63iqYGk",
  "key9": "3hR2EnxLJTrJdSCvzabsMhBTjS1iUSmZh9N4AJLXegZkVA4o9q1CWHtxKUzZiSqCN2EdTvHY82rvxDftq6cDJprW",
  "key10": "3XYp1XGTk15BWBkycVbBaBtcJxFX3NwMRL1Tu47X7TiFX24FnRJaxm3X436AwarkX6HJSzkwVme3vdc5YvAC86Lv",
  "key11": "4vQA679p9sPCdGbVf5uPv9oZbY9CKTgSWpkZFufv5tzo18HULihiapuLNQpuvxgXDY5R8qiao6ozMnWJ3SKvPUqN",
  "key12": "3vfzVMd57TbHu1rAbfKPswHNDmVaDf6B19SKtS9jR1Lq4HwSutNyVyxE4NMSx2gGjYNrnpzreGqJu3gDZJYmQdvH",
  "key13": "4d1cnGzPYXmEUNyQR1STLakcvD6Qf6UvY4hQo5QdSWNR5iX5fAEMXxVfzH95DuDfAChwqXEym7y2d4avQHD9VDoA",
  "key14": "4DTTJGizEZ513sFfnUHD6U3b9gLLGeyLcBdTWve89DmrG4VbVMtgkXFDNkXUojSEkt8sKw5bb64L9n7brMb5piZ5",
  "key15": "35hWuWe3go6FeVGxyxnAH1YDe4HYAxDs9vaD2dNvYjxSyFUopnx85svFYkF13dt8CFjsCm52d1p8yuFJfVBYaxT4",
  "key16": "3p6vc71Z8ozJVLQQuFssgMuWTp8SA6XiNtGTDpWaiz7qt1eETuwy9pK1SWBkKctv2c8GstKqQYKpoFhdKjhN3JDE",
  "key17": "4EodQ3zqoEDvMHczAo3UyN4dgFvFqdP21rCWo71pzgPMXgXs9ttiQRkDi3pmKVATMKFLKHWQN8CbcKuShJgThqV2",
  "key18": "4svex5b7wWpp8f8gZqgTJReu44xKgQT365jGo74E7MbowWaEq7e3D2RRoZEZKQyr7htZu3AASxPPExw7oGi4PVKk",
  "key19": "3YsEdHAFFdk9NXVMPkb67qKgjQoE4NnpKMcZofMeAMur3mWQkVVm8Vy47JkSkTbRDPhwoEqzVPGA6mqxGXFnn9zD",
  "key20": "3PW9yuApxe7WutLBPmxMtATpUethFaL26955estouc24HDLW98JpWje6ANyKN87HApZqoEnsr1KmdU4MoR5iMJfK",
  "key21": "53JapeXRP3cm7CmtjKDpdrT1dCQZZvfmq9pYrR5s18Hp7RXg7aZcpdHy9pFaV49ScJgYde3nc5SG3GpEfhNiwd5Z",
  "key22": "4sV3v88ZUXKr9Hxu9MrZEcHUFMZ3zvqRXAfZFrS8ebevccGz15j7Z8WWJufuDKt6CbBia7PEy2md8KsoM4fSNVPj",
  "key23": "RtD5ciBcJ39ZUm7RWQWBpKzk7V9ydg4ZHQywWsRuixLsjNw84hLt4RadNiMXtHSNMwcqzRZ71Pw82vJHhK8ucDy",
  "key24": "48A9xtAzTu7voohLkvuPrp88EfsKLUebGSVDxzU9hybFhzj57P1TyuKyMifb9hYKXXs3XPeZxMuJKdHFrwNBzkSq",
  "key25": "29PkfLZhsSvDxhgwC8JM4A1DZaJetDaS7LZ5mBbRSURGZPGt6opo1SVA2yYjwx68rsJEP4VU1dPpD79vQYw8zKhJ",
  "key26": "4nvYBB5ez9UCt8H2Ps3FbMZTCZadvCQZEgjh41862QccEkLtCqdrWq5TAMUVMXchoMiTc7L85xJocieJQD9ZfCPu",
  "key27": "3s1kSoxferHQNUNWhmYH14v24aTuFc5TuzRXMR1snsrFTypscBsKDLTtNFBE14eWQ7ChBQJia1vC8YQcye6PrDMW",
  "key28": "4UTCJ2sj2CxzCWEDNSTRtLe2BfxPEHjRd6kQ8bbLSP4ArKLHVwxy4vinCg62nZNU47DTdEWYQCey4VNi9UgJVkfH",
  "key29": "4M3bq22BPG3GyzZbuei6xK6fAfvb2yQoASwrbYk7pieiEhXFX5qWaP5j2KpgjhgtULjKY3JjAP35tH5CZkFbMS8s",
  "key30": "5Fhfbz2e9nDtQCnVh6X2z24ZdRyFDEY2N8e9QBkYoPuKLtkCu42Jfz9gpSk181iSF69CACoVVbTkZivoC1caDNrf",
  "key31": "HSCnCa3Dz6d2251sfYZZVE7E5S2N3HT5kjdghWg7ATraRy4kba7XzVemtJcaaRfRyW3HeWc5QD4tswKDAf8bFhT",
  "key32": "4RGa8XSQqqVbwVmNhXfCMw5DrL765U4NsSA7Kq2mh8ivPXjK94GkZM4sSBYzmaVy9FzBf4WLvPh2RRjZizp3NbDE"
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
