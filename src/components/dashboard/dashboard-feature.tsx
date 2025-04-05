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
    "2U6Vxhz2rEsSz5jGSwhgkZoqao2YGDWCYcyoSci7Nb2aXnuzhNDNM53ieZ6kBBXbnfKK42jUjQ2X3sGR3W5qqM35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nECGYTr2ZS3ekDtwogP85zLsJMb6CvS8TqM6kp98M2Cb3crHYfUfZXSK6dG3VVvkQf7HeZ3jPkKjeK6DFyqEBtF",
  "key1": "2bLDLWDEkgBJNAQX9Z3tCFtWRPJRsnXc6UUUvef3aXx3Dsb4SHQQF4R1QgwckiShvnRjBqBiKUcBDUSkeEKLBJrQ",
  "key2": "5Nqeg2DXDJdH3V73uAo2HpXotGgwXyMcyKshNiwnM3yp47GygfKEqxAiC5H6pk2mTrdp718hUEbY6vRRffJEXgxr",
  "key3": "3SpCv2R7pvhu4WMRVkuPUsMgCjJEypVAPnzg3QYupf3wdsjzNaNrccsW4Cq45PWwAFA8WnAtahkaaX3fUeibhYaR",
  "key4": "XQH1vgCcqfXhBRMYbR62aLVweTLd6M3tmjwMt1kxwkEB7rp4qwR1X1LBJyGVukehEJ5fFA7j88zWiHG9xDeu6Hg",
  "key5": "49DGcdEP2bqEsuvHZRHtQDCcAupknSiByuk4SqJe29b2rqaRJuPsZGp351MDVoeDLJYGZTS1LPvePRPjAMXwy5C8",
  "key6": "5WBPDuh1e1i55BG6vhBuXN7yKTrFZgVzSqK4XdRmcS2do15ehBF6rf6hLfQdx24RR2e47jroc1qB5ixnUz6t3TjT",
  "key7": "29Ha3VUHtiw4ZiSNX3FjiNzYUdfWNpCfiFrDnwoPBJnBRktYUVKLe3U4hikwP8BHd5djYzSngGhyPEDEjXA8MFVZ",
  "key8": "HCEks8aSUB4Pk4GNQzUwTBSczvpWX3hMcTpJYwk5mSEkaadAhn5qNT7fTZxAR77FfYNTNkTosYYpA7DiaFsPt4g",
  "key9": "65DaycPZmkR9j4Qn3CtTSox3cC878NSCiLt9t2fbtrhTsmfDsBNSFRfPJmw3qUdhDRaosSD3vibDJ55ihtBTivmB",
  "key10": "ZBiXDSroyJrhq74wJnQHPL8W7EmVhn8PC5yxUpjaih3sD9FUHHWLTRFCTfTL1Hq4ZxdbK7HcEF2JfdmeUGqJ9LN",
  "key11": "qh9JE86Bh5JJajirMz2b5VkMHPaSvSQVgW3gDDXixC4Zd7wyco8KNvQkKKeWacU1saNZDM8s9D7P77X9esoPhvM",
  "key12": "4XPkMbVaf6jkb28TaESLEfU2YMYEH1U75oLBjUpRrgwEomi6zxX79eaNMdpXLysMYha2jcQEqPU6LN4fRXmDnZsb",
  "key13": "3LXKe9n8MFy9W2SdmWTJeQ3bbrs5VaoUrKv9jdYghENodXJmWTYvGupNv4vEYaPdpye4JBg8uTnLmXPiF8Ji2Eo4",
  "key14": "bMRG2wFVQwTcWq8NRzfnovKUqPdYef5ibDqKu8hGfLfqUp96qcRp2krgcLXyaExkYmwPkb2FGzK7AzTVQpkhj34",
  "key15": "3ABPGyhKzwFpKxmymknqNr5JHJdXpG4pM3x7DzXSR8oPaBj52opbutCtSNmYyAHAk6bQgkMVhANF2di4j7vNxQKN",
  "key16": "4TJ4whdfPcjc3uevS1o5QoWrhBTsoisoYdaHr5wCybwuieLiWJ6pxtie6ngzPXU4NrzQxcEKfAMMrZCXKEM23tqb",
  "key17": "28KnuLuEkd3Xfhw8UtVUcWAXgGs4tm7vHQf4G7HdyjnQ6jKhNeQ1qBiLT3eYKMFgFijnuw9G7pSeBDfALQXZBrtT",
  "key18": "5GMC58GrL6PdQZsfmtoDCbSqUppJZyfSFpz4V76xPigxeruGtnyXSDD28brPwu8XcdCXNSY4B6cBXbBDCFkqnNPw",
  "key19": "3rMuqVePokon66MMxG7f2sLPpjC1GL9q1EUkYBrpNKVWjPuQaeX5RDKbS5jndbvBHqkbSHr7wHLAC1QGHVQQdEX9",
  "key20": "4ukNrDRAFc3eghvcJQBPCvwduzsom3HCk4x4o6SUHiKGr36QNTT6RoLwfDSgQUdMP4eqxLjvY2Nfkik1oTXm78gg",
  "key21": "4v1juz2AXFKx3i6AesqqJTTT7aqwKXJTiV7YnVFHddRi5JYhTw8F3tucTDUxR8WB3p4g6gSP2BfKMNQAFVSYqp2i",
  "key22": "qcWchfaGVkmfuW1mnn2nxZZDupnYfVKzUiA7CTcw65zn1XmFxcV3SQezciNgKB8cu1m3n7LWJk1SNDpv1owTfoT",
  "key23": "5akQqGZqLtkYfmQyr3hiZXwvBSzYcmnj1DXrnvpaNm9cYVbTwPmKTwxvHtqHpaxYTMwUHNNqtsyBoXN5F715EM6y",
  "key24": "46UFfnpmiHHhPnBAUm2WRsg6Px3sEoF1xRzSNn5YJk8ZRXopqQn3gsTtz5eVYazwfoLbLYeXRm33THpPsK1fuGFk",
  "key25": "2KPNhfHrVRpKxVyo5xAHTCUKdNQ6Rx7cW7JSKoDNnBcodyN4YmBSAKEEADNrSej27ohGsox4LgfonVjspjPR4bUA",
  "key26": "5HoCsYdavWf5aNFLH3oYNuA6San9h31g1FtMRWaDjsYGcUVNMxDVe4VewL4Eb7TfbZ25eiFEYVNcyqvsJEFZvJPS",
  "key27": "2J4QZShQd1fmqvgEXoyKX3u6bRW3myhSu6yJJcMnXSF2QbW8xbUECHzHYnLve85Jg69nQ2WkBNbiyKWPdYoWSuNq",
  "key28": "4JX3G132xSNZj13sKjs5CtG7d2wpxdAj3iKbxWh6S3NeopAehikWavKdQdf3qzDbK9asKfXHj5sSgs8BUHqTDpYg",
  "key29": "3yfrSTC2z74rDzD997aY7KFS2CEBHDFXT5PNpz1qBFDHcbJgMG2BMg1bhx4qHxBkKt1zS19XoXZxVNGtvXdUe3rF"
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
