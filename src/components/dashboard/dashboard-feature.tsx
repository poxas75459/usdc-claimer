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
    "3ft6k3eFaJ5qnnsYybAreSF3cPttHckUBZgxa6APeHjbfbyiGfEXb74UCH3TtKbpTKsngGyLiuEmsDcQ6pdzedrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28EQZMUPpe9J6bekbHUHd7CjBYyd2qFX6UH1CgbufJ1eVcZCUpAnMpDsqZGuoXRW7RFUr26844tvcxUaeHRRiQsQ",
  "key1": "5btgma9N8VQygwy4g8YiFrfc6qJeS4SKecqwYwuMCeXjsrWNKq3ohQ11DAzSTp4tX2szxF8oVdRbFCYY9WpqHoa2",
  "key2": "39q3NkpvjxHdcpLZ9tDriCCb7fp5wbahD9MxPfc3qKPJULc1j3KpKew2h69CseFus7G6spLon3AwExKuRXg7Lmak",
  "key3": "2FEeQdr7WMiqxEBafBfJEQqMJrit6LniUNj23f9Gahk3j3Sgue2YFQnX2RgatKBfZx2P6QNrWMARbs5w8FD8mise",
  "key4": "428KW7Uopsfj1xZuxqgDAgQgnYBZVQmydK8PUBxRzTdFq8WsqcwxXDae2463tBL9Z1x3Gpd3y6Gev5oJkTMVr35x",
  "key5": "PzZxco98kPxvZJJMLxbxd4hqkaJ2waUJE4rnZCacTUFoLdHFYw8FYk2dNCBVWSCdGM3af2QYQESeHdRpGoJAzGP",
  "key6": "5XdA7W3zQSJKvgjQL3DHg3vXr7XLRveJ5tXkzp2qgusPc1a1GkyzG7ivAzxUMHYAYYRfkGiErz3qAEJLHtZ298vf",
  "key7": "4jMpfcyQdpEwFd3dDf4JWuS63W6qv3KKRNPrtvWYyLq2RACWT3Y9anm8DGKXpGRqWXzbWo7FnMDFXjRhGjph181E",
  "key8": "59LGarKjHs8tYxDBLV4R1TR2VbVRRYZ1J4CzeGAfUnnGCMhiMhzdz3W8FFxeT7ozvQRao9WRnZHPbf3bGACgV9jz",
  "key9": "3shGq7u8NGV2Y3nGgvuSo2rrswCj2mNtzZSXvx6pMiDcV3PMq5i5sAjhYF59BtdERq93zHUa4PJTcCYBa7QX6nMe",
  "key10": "3XZtecpUa1NgNM81fuWPkP36hcRh7Xbscbinj43Wn7g9oM6zE9eyRPMAHZUsArU5vugpU7DPwjSsjujo8eDNyDN5",
  "key11": "u81P3Ay6acDEX2MZmWsa6pPq1Ykzg2nfeTjyW2X2qYrnDJpUmVGxu2L3vk98EqT7BTA9FXPFXYaADR6XiYfQiBU",
  "key12": "4RPMEVS6x6usC2xVVgGzrFTE3KNNDvZAztTDsic3yR7EBWrVaT2Uc4agcmGVRLRgYoLPvYifLTiWdcgNRk6kdhXe",
  "key13": "2bNtfhZnzr2JypvKYqyos6mQazJpSnkMFCiy6E84xM4nEwqCrfPVQKnd9bwA2CRxBk6eDuURcvPL7hyvQNVogTfh",
  "key14": "4aquQuzCrDkE1CbcHS4QM2ievyvusgxjdZUAad9LqrirGUp9xMdXkBbrQYr7jJoSRWgSWSLjR7A85Nvia8v1Zc9N",
  "key15": "4n1h1RbLNTh1CEzavjQXkUxNQddrRzusmxseR1BjizTURfJgnZzyLSHNK7gP9MjBGgiJ6pYWGoqRTAqtuwRXWGnq",
  "key16": "2kLe71c4vrsr7i33mY1nB5TUG1KnxVZ78tmvprUzsowJykbCiRqAU1cUYbRDX6fAJQEZnGkzAuYJxLtFRoZuhui4",
  "key17": "41bJq9Fm1zD5gGpoaNE5uwryqAtrK7WXb8WBGXMo7VWYQL5QZXiETPBNz9M72nvtiF9aKh8pJdBLcVGdC63c1nb",
  "key18": "27ev79d3KEUxXJ4nvdxw7FuSyUWhLhQBj6WhV1uyENGxNRb2g7DfdX2vnZ4rcpez4zZEmETUvxLxYBoe3k4jf6FC",
  "key19": "2YWFJdhmGgmSHcmsMC1iKYN1nTTgFnen3CoETTvVahGFErHVxk9Y5Qj1MbAdUWA34U4irAt67TM2xBP9Nu7N79DD",
  "key20": "QnpdXy1mnm3vUqgjySjRG9sKpRFReTVAczH6eGh9eSj5Fg4i3X3LKHCmrSrcA9vYiayQdaTjwJU9nmeqnprE7XZ",
  "key21": "4fFvwa2nQywuQePGVrsRNntM9Lgw8uZYmxQdEabRMzdbh9DobQa7jwPM5Gcw7Yaksgg86PiuNatZUpdsyRf4TetD",
  "key22": "3ihEp9hTTAnzJoiU2jSuHmzC2keGFTbUCJpeLiy3RXUnQUHXtDpSqL9BjmTDRKqD1AJnyLDvQdUvdZ9JRLki5DAj",
  "key23": "XVB5UEt7W4433wPu278yyGqnsDRor2ZuXQtQtPfuzNSd8QMMMV2RxGVeg7Jv1JF8VpAQnXuUGB4yrSSY1c1m7jB",
  "key24": "33EG2kpcRXtNRyX3QwFnbX1sm3c5qA7eBoAA1HXXp3Ri2WdEKSnDuookiWkqnWcmjxewesLbyYk8gV6mxEPBEKW8",
  "key25": "2Ra2LG7wRtP8CaZJRWkXzp6Sw2KYPs8ADP78rJkpR3EJTQRpnhwcBXZSJJ8iuHmbkG33ZhJndVhgHxZYoTRErySu",
  "key26": "5Lu2xYp6aX8Mmq9LmekqT9jPT5gcGjpN1ui8T5a89BM3BcpTaZ3P5LB1jQfyowK211BEtdLJHmLnaWzJ1NGgcY4V",
  "key27": "31jrLhY6B5dans7vtTQmbY8y6VkKa9h3hhJS5aRKnzZdSaF4Z5hpUc9c4LEDeWyYzTuLx1iNkJbAGsTTRHyGGC2t",
  "key28": "2huL4cofo3xWe2HcWRNqYPwtGcKRgZZUAAmuecanksMVHoTF3jRAifHw5Pj4Bf1MTZSBnHFeePU6MBQEQWxWWA77",
  "key29": "2PNfU3ekpSc3khCovLUcdNUr2CoYEfQiqysAKGaXdSPXoGzqPVPcVDsASfYYWLKKPQFjVWTf2RyK2ffT4iXZ8oae",
  "key30": "5dUk5mwxYPt7aY3ZZ15TVLj64TQdpxq2vvXJNBMrXrSZffxQaqaq3TnwoTG1Y8dieYWu18vHm2B4bTcJPDjfKDb6",
  "key31": "XYodadgG82fjvphUbyLJktdH6SQgAQeHfwLtqFVYzCUK7MPX7ofKC717rZzxDT2JtPZzW2MyXEd6zLUR6asRh99",
  "key32": "67GhATbSNdiySX4ppjZ43xESaENBXbRzXV36xA6bNMRfFKCgLDT7DXJuKLKNZGS73gvaKk62A4nq6sYhxyAcAZ2w",
  "key33": "5vYgLR5jW2kcK44zaKsPZtNTLVzHbStS4E4M19UCURhhbyGu1ypQ97k9Z5nkpE6QeLFVaGggce52baffXdAzzHha",
  "key34": "4ZpqEU8Quu45REdN2vv8Joe13Wr3UmevoLuZ5n89YzfKKE59UfSW3RsegDx5rnr9DMod8xLtNRiocrbWRxGBWEf9",
  "key35": "5sPGfBfJ6MGjC2sh9Qm4pjNxaWuDpiK1yXKAtyDQ8b78DMBDaAxWz3ehZauoLWEcnqFZAQc9NmnP5eJ7FpcSDrQz",
  "key36": "38akACT3KezshzMCWuwiMHSkVDgT5GZSJqCBbf33XDpSUkD7pcZyP4tanA8gkS9QKHuU41Z8HgvrWvM1a8vnjpjb",
  "key37": "5AwxGUq4ckdhBwEkgNHn91gDHPB2m4yNMPSmatZMrQfUoyFXddjD1eYvMwwWbcz4L7Ey5DDwUeQSt9ny9WZRWupe",
  "key38": "5nsptcXXmN7wwgeD1GKRCcojCXuWG3vTcxVzt5zkvqbmWhtPyPWJnkn1vn7arCYE1uU8Qsm1c4aBHUkhHdAypH5h",
  "key39": "4rhEDXXL36WuHrFBKi2MF3NfXPkEB9h6ujdYNfwhaCgS1meX6ZYEXLTsct741XeqBzMdaL1ixdv1zYZ4G5XsXhh4",
  "key40": "46deuYKS4QJKkQUMeAvrPZytSoyKbwDsu1NivxCFPDiUcTGojLFYwUyVDcP5ESo8vHPDKXL5hZWBZy4cNPXD1WU7",
  "key41": "5WDBpCLam4AmHSgHFBHVrcxzFeamVuYAz7Ep1SAoRsLFTv7y9JhcivTvHoPBfh4MgEZpbbeUjztT3zPMKL3Ykpry"
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
