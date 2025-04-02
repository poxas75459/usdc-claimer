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
    "3zDVoNLifjaB9TKLNHkMaBuzTPhnEJP72YVEFremUi7Fi99kyr12HGVpyfYbh2A4v2jUsQthkGCwCKqmBcG7BYpU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SgEH4jm9jussK539Vo37P4T7BoUFREfHfjGmbXxrVGNSx4xprgBgLgrBaPdW2CpKyk9m5KjXL2LehZMrviNLbYo",
  "key1": "TQSvWyp4buZe9423UL9N2D3hLvodPew69xyPGgZu5yBx7czo7C52Vh57FXiEd3vDadgkhPmzAE4Uu5xbbofwj5x",
  "key2": "ooJuUhNFqvNrBRXKztQPETTZMV7355jgKz5RmgtjfN1Lcw8bEXqw1BaVV8d6G7fpAuBEGL9Thug7QF15o3zJkSn",
  "key3": "2vqCtA9cTGV481oEaj3SMuJa3ZjAwK7S2NBmHTzdZNiWrerDE8sfPUa1Dkv3LpauXfrwNom51Rh3yJwSZzCuwk8h",
  "key4": "2i6P2WTTqnKMFyDekY95U6AkUa12ke5kcX6mBUNeWHmY1qvPjr9GagPgE9Z5jRYBCgjrU8eZw9TghPYgHPLEN1ar",
  "key5": "3cxn17xtRmSp6oN52rhWVnEzT4gXQpnJkMskRHU7My6pR4rEUEjsH42ZwZKk1ebceEKxQnMMVF9378VkZpDwHazU",
  "key6": "2jQZ27PZ7GoUsKX7hw7uCiDsQBWSmLCUiYo3cTpHtMyLubpf9sQYYhZdK5EbW5ELhAUNAapWH2n7iUoGMrDt3sUj",
  "key7": "4Bp5FZg4AXS2vMzm43962z9uK5Xg7R9JnjxJpbopfofvaNyDeNPMgz3Ur3kxdhPLEj7nUdRsz2Fu8MtioDvWwGot",
  "key8": "3iWrw9UVe1UBYFXAR4oqw37d8dTFrspFmwWkKyKAF36F4srfvy36R4c5KMEKk8A5jqo1mgYgMbpWvhdihJPVNc5J",
  "key9": "3ue56bP4i8FHawgTD2g3Gx5FmxuqVfsavmvwqKmdLgKupkEcrPAQ6hT33tvc9c8LJkBZaX73QsthzstUPCFsf3vb",
  "key10": "43uzP8V8DybtVdStoSxEWkRfKmcAattkGsN25Q8bb5Y4Z6WvJHszJaX8z1K7mNGeigpgkL5vAo36Gws5UQ3PFoLc",
  "key11": "5feZec927J6p8KK3o7aghw7rhuMHx1SfKTcb33hFu6yG3tU2PUpmB6jbxHnC54sZJehZhg1PzU5J8fZxH64J4MdG",
  "key12": "3DMVzdGYx9dvEjLydhxGt47nepMWBodFSrn346Trxf2MgsbSvniNdAKVMGb6ZTSdxS53zPjDbGcuG3jz6Vy2rLoE",
  "key13": "6AEb7N5GUCNYcX7iZ6SMAGLKcKShc4jChMzJTd81SKtYAzGHWcixtyafdgAjAP4vwnidrykkTK1np5Sw2dHwsqR",
  "key14": "275ZGeJyrAEL5EG1Uss6fqwbfHpSaq6RHs44213wEeDVzidNTNpsr8DJpsaed8J4UEgHoqct4CWsPVmPb41XSqha",
  "key15": "5w4foT3b7wRhdtkdYtUKjbYGCQ1kVcp4D2HKunCWJ6ASXG1aSxihjZ723Y6VJGAzLHx9m44RGAEJnWE63XJYJT3Q",
  "key16": "p11LG2ZbYNjmtH99ahifAun3r2EtA9rTLpJHe6uBj6TXCRJhQpiYbpgQ2RZEF4cXMb82KeU6aX5H49pfnzCRd9c",
  "key17": "4JTpgHwz6j5rTnyBvQaC8GG6Ub59PCrbT3Qo9sNErqnVdobd9vdsgLVHNpHsFdpsKRdgwLLFMn6rHccCV6ZfnmoH",
  "key18": "2ni3n3j9mJxHZ72B3JEXxwjUXXBrUtJTKqCCefiWWbWVLjEAh8Wv7p27mwNRvKMWh6enMGtn7NjY9ZwPEQufQ4C4",
  "key19": "49gGq1DoMBaiUXWJhsci6hWtg3MppkVprfKecyh3FzaYaQXau6Xgmzita4vzC3yZwaYeUtkP9mewLcrQKuqyaUUm",
  "key20": "5e3zKn9QMnQXqgneEovdDDdwgAM9fKk5LJS9AkZmTTvebCLqNAXoe1bxVKhc1uUiu6cGoVn1HDrBdiomtp6xLE3A",
  "key21": "2znUErQPbsMFt872nKCdpa1SxFs23k4c5WQB8NC8pNRdVPCfSYBBGCLpzuiYswU9f34v5v6qa4uQPPKDf27wYY45",
  "key22": "5CcmM4mHkfyVhF6ubABHWZAFxEE5utqfiZtuMtPaF9TT8bXzQjp9FfFQRtaCzg5QSuVCCdnSG3BG2zX6B6HWy4WP",
  "key23": "3zX3XNthUQDadUyb9TqHfpzhdQ3KbraCoouPhH2ghbkSAtuWyBbhrpc3Wb5as5Q1aG5XtQBFv7U7ps5KtAD6aBrh",
  "key24": "5UyL7ef1J2TxUHv5mw8sBjJZs9tUm11H6GMuh5dUYoXWFTmBw2e7nnxFm2MrXjqDEWdUSgD8NLrJUbFBgKYAF9QN",
  "key25": "5Ui3jaCoNKg4tPZtpnAyM7q97wUW4QNjoZuJd4h3HJwjud9PhkEVsx5xZ9XmyH3VLigXL7GAY5BS2wdrdnD527eZ",
  "key26": "3K8FP9KADz7rmZwGKN3BvcmQ4VAtbmQzATuMiixJPps5xpvY9EVFUz3cGFzZKtz4fYqZZWQevAjfrjSBfNjkA1jV",
  "key27": "5V2R38ZqxCihHkVc3yCFQ29DjnSGYeVWNGzavxTBTPpSZLWqq7TdKGDLDmKBq2D5FHG8F2oNd28i3iUXt358jiUZ",
  "key28": "51iTQ5uEaRmfj1LxLct1PtwJgCoaBomHn7Dew9R7XPy5amSek4Z9M5PacYBPofaWdTGDYpjaNQF72TAp8ZZbLpuA",
  "key29": "4LDufuP3X2UePSCWik3e3mWGxE6rx4zpR2zu4B8JRMVGhDPTTx65zN1KRTmzbTXYfQMKpxDeyZgcEZkoNu7LsRV",
  "key30": "2ekcrkQiDNwmhWDtjytatQUorisLxDh5UXzVfx9W3FxcdAGdEt2wUDpiWE2XGR4qk8Um6zCSzScBiKKDybPYLmV7",
  "key31": "V62xrVXQwyaUqau35bMncoWFawPCVJY7h5XfNrY5M2oNp8HQi6XqV3UAXVXbbwHbXvabFPBE5CMbjbX7fBnCiKn",
  "key32": "4waoj4j5F6Zx9BDGBK8RFGDgmB1WxLDCVrJWUwqgt2AwFQ1AKzGhoxYse3828xvHEUAmKNfiuMkjoayjNXoy44aR",
  "key33": "5CL6iG8j4ExNBzCaLqDboWhae8DSsmrPgFGnHpkbp4XCHQaTU97WDskH8phFHZCfVq5cUyuadEAqxmY61CZZzWQD",
  "key34": "4kxAqMoxCCRhVaAUFwG7UDqT7Q7CdxyUhsARnjGDfDgyxtMvt56HraLDCewsv5xHTh45hZmf67EdAF8KNQ61WjUX",
  "key35": "4G3rnfqMYtwC3JTcQrVJiMaAv5WmMbDJrp95RSStJK6h8aK4wUzQ3YDiC2f6MjPd3JE2rcogZ7XLvuknXuRT6qRJ",
  "key36": "3Zio4xKygGobzHbN3em96JhLMLeG91D3kRW4pa8BSZ9PoKWJWsfootjxNmPB8QLzjrVKtdcsRFpf5fs3SHXELNhw",
  "key37": "4EALyASSsp7JVyLFpFJp2LC4SUdGfHEtwS4kfYc38YYDeAkgs8JfeEWCWqgV5Qde8RFdwaT6zipSNvGL8VsuNqzr",
  "key38": "HSdSh3WrqGYmq3nivJGhMciHdQa2NBc2xWbyN1wegCFPnfDGkUUrUqHEMnLcAymtBsgWjE5VtbptDSLvenqdaxv",
  "key39": "MEoa7xvizSw9XJaPViJ1ZmatEwG2foJ4BDHdJu4NPo39kKP9Dn6YbzsampJhbsuX3P85jJnUzZKXbZ3vpXCYEfg",
  "key40": "28tzchePv7HZHUiPRU35y1Jv83HgLDkRkpg4TekTw2EexhkpeN7pFt8VKFK2t5B1UrEHvPZvpddB7qoAiopr4V9D",
  "key41": "fxR7zETCHSwWUUuCeBkNYPR6kx1p8TsnYFe8hNdYg37Na99AVu5JjGkofdP67NGQJW954BLJFRyVoRA6t5pgGY7",
  "key42": "4f3vxQFVi5SAHCUvRFE5dY1jK8PbdWe3jkf99YETRYwYAy5b13RJWYSJ58HJSHF6fjEXpA7NLyhnf3MRRMJCa3Fc"
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
