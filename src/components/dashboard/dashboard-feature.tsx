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
    "3TU4NfB6qSxUr1nzznh6p962e4QhUPJV6D3Sph3wC8b6pbuUU4dbyPKuxu7HmVKFpviYh25sSUuY3WxpJEKfS5k9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKN7Xw26CsCAdBmcRVqwbiwtDsZx2s5bScQty7GyfVsB7eubTPJrjVNQR1b8RYrwFuvfeJQBv7te8pwwSiXYPFD",
  "key1": "2WCVJaDTpea1M8S6p4KpbMtfrodmbTW6cFoGNqAhpTSxrrmW8r9VU7thPWdEfSM2xWE1yJwRwkKhXERCxK22UTrj",
  "key2": "331zbDjPow4o6ieXm7LwMHu3cbg21BcwE86RaiC7JKAgvfJg6hKvY2vkV2edfFRX36gofhZkQsFT8p4Zv3vbxPML",
  "key3": "4RWViBK7tUBkKY5meGqAnToyBnoJeGwq2LwSuesG7ssgNdCxvdD17xQ9spJpGMbnkbjeQeVGtRrCHnUjsD86fomw",
  "key4": "n1Tp33QhaqG3z45jiEcapNDA7Vcv5r6VSbJLM6BRjqLLSQE1DWbfHC4V3SfXL2hZ5uVTHHfNnJKnbCubSfRxxTB",
  "key5": "4JHM3RMiBKwVcgvTZEbmasTmTpmn38QLqeW3SLwgX32LiFfDqpFUUySVYjZREfd9sesDhRgHwyo7dpqVKhuqZbhi",
  "key6": "5bY6KnUSMbtSdb39NS82ySz2HTDLMtLFyiScw8kZd4uVDcakREBaGNASyN3h5VWpZ2jVKsfnYYt3GTkh4Y4NsbyT",
  "key7": "5CNtJGcLobMiKKuysa959fd4LhqwW1FRBLLsteBvQYQs9nUsLM2iTGymvqfGsHcUbMWhKKu5huB3WGv2JjRW93YN",
  "key8": "4VRdBh6PftfPM5jeQhn74gExzht7bjNfxmZvyVuQpUcn2wr55s4P2yNZTeDYbAs82FUN89GdGFiJzYyHv4kmu9AD",
  "key9": "3XCmaPa9tzX3UTWGUmSmbSX2iUgSsZHhiKfP6poFM675fjJmvfFgL3KMgsfhqxThUiQwZ54312yvmEKDug7Ky1Vj",
  "key10": "5gQNVcgraZKHaysemTMHANbVPG4uhhQveeB1LegwqVZYMmTnb4NTMLGy4x46T75N89mjTRcXf6hMUNQ1i83iq4Sr",
  "key11": "2F1L1SnxagGLdGNR56UXdPP4Si4pRcwNvhd9Ps5bF21LwHW1cwvfSZNypxZj3KqvnELGVWtkmmQSv6i4WpUy3hNS",
  "key12": "xAHRbhDhUNtLF71rBfGWWggeT28J5crh2QG5xTU3Gc1hFb85nEemiR23gWhZp7dkyqXCMTLVtmx6qdH2vuvThhB",
  "key13": "3ByRhQwsMtqNtbueMNUUv6B5gRWvH18nDK9PR3AVeP7kH9JG6UwDtEVM3APmbci1oCHmwqN5in7qmqzJG4kh79h9",
  "key14": "4Cn5agZcWGchcm7KqqamTczWjrzTY6BoG4Zi6WTJqt6f2b6skwR6U1AgX3RX7ALzhpJJWE49spFfbg74NfaBaMtt",
  "key15": "39anTaBg6FG7iWfTbSjHTh9ZV1EUVyszNEcg4T9HoojkB7rWvwMUasyi691cuUnm2dmM499jL5b4mJSX9Vs4tWa8",
  "key16": "34JWd6z8aKQcPUsGnrN5JX79L84uHGS8Gq6iM3aMXzPox4XYvw5t2vHMc9ShiTSnGf3pbmYkueCokv6YU11nDWrQ",
  "key17": "4Sfba6LcNfQbTLF5FaUdxBDhgfEEmSgvunf8Jke4KJRFJhJnJoWWGPEbwzNbBkk6qPbEmgSJUQrxf966DeGZUSRR",
  "key18": "5AdWu9veUStC2VL6b5w5WAwXKvtEZMRv2zdnsRjiydp4Uwv2YfP5cMSKkYqKDJWe8pMP6FZVxtPxfPSzhNH8L1CD",
  "key19": "nALwWz6M25dkDHyjkesixpbat18UNKpdwTpA9yusz3wh61xm1NN1vxydSdDP6fsQwzMYYJc2uwtsdVatN41jqMH",
  "key20": "4ZFiTV9eL2616GKtCeWyMaxbFnn1oDz3PZa8BdLkZ3hptvVHnLpMWzfos4GvYhVL1n1We4sfiYhXRDTj3ggaf73b",
  "key21": "4V5S9YRCopWvXxqWuHWgcKznCCfyFAD3uW7BxgggYWUZWGACJ442mJDbepR1HAh3dHnNiV9PfDgvxzopRNAoPTTm",
  "key22": "4xBkZkyptXDLc8FNjDVsL37Q1RAfYK9Wmo9fMzEf6neafv2uQXz9QNiPaeSaNDgx6b1qDeAvULqecQkiN7Wx3zUo",
  "key23": "p8w4ru5qDNvbPgLM1QKkmgApi6EKuxyDyJFUwk2MAGsMm6vGTPuHXdVNzD5X6aBc6w26hJAd4LC7Pu7zAuK2gfg",
  "key24": "254jpkZScDpjSwtj2iBWf3t8ZSeaq8YsYppL74T5SHrYs6SF5m2tB1Gx3MfcFxGyDekQn3cMfwM2UmN5n31UbsoZ",
  "key25": "5e1MgvZ5E25JUbT3HxGCaQnFq3VQqFtocuorECzWiSCqjTaCabWUpA7scXgt9HmAxFs873pqx6g2Gkr34gcQBpko",
  "key26": "KmB1oRbxCCnASWNrW5B3HR7P5o2n3SEbV5u65xLY4XScUjnD84jaXupZZJgfbtT7KvEQRqQ4pyTZ3F8iMBUggGS",
  "key27": "24DqKe22RkbtLmaKns3MMTGNnRrrJkR9AjxeW5LfpTUTV98utjLtXeq6wWr6fY9vyckMta5z4WuzmrggN1v6kjW9",
  "key28": "4WcbMBPd9gSSCyvsAF6ZHnHS8BKSxrUmmboeRgZpCEQQtBz36hxPF2BUP8p8fj6Wkc8mgz64LNfrL5f9mtFDVyjV",
  "key29": "7YMKFuu3XQdjzPqR1aW6bfndRQH6SWkPpWS3ML5ameLsgm3fV75mJrsxCoen6bSdidEkmv92t5zrFhXtXemkdn8",
  "key30": "2oKiSpogKDwsbS4dTixbJ59DaRv37dU2Hao77J8wsHaMXW2zehdf44HN8dkNbT4FjiYX5JJHmYPB1U4aVJTMX3Er",
  "key31": "35t38rVrTYd1JmR3ubRQUn3CSs7j8R1hioe2cshL9RTHZtpAYarr2vm4oALUJqaoW9sYYYsZKuRU17dfCi7McxHC",
  "key32": "4n131QY6bB6GWHKvTAwsAyr4tiyazuLW1uo2odeE2WhQH9aYUhpijpzyzkrt6NVyxscGAnTXQAGgqR7iawNcNAJ8"
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
