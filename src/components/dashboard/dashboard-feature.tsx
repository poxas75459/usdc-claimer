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
    "51by3zDqC4vUs1YA9JjtGBzGQtwBz71uKXHg9Y2wQXJveedoDMf65WGYbrXfE1pH7kWZ57QXXx7XM1XTa73kedVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33PJeoqwMqJcguZvA9n9KbuNoC2Q93cBv7jpEPw7dPXXA6JGVXPbjBrDf3sFXyaL62qjvqAQ64mXsbUm9wB76mmH",
  "key1": "5riVin4ZaWx9Xk9UzQcNDE1V2jz2w5dALpXdnTLCwngzDiZyNTmJxid1zCDTCUpGUf56UrkNR4Nmv8kSbpVRkEZH",
  "key2": "7BGJ8JZhWhP9QSEYwmCx9ZrroPQaEvW4o4UjChseuozFDLQcf8vPRd7bZ3xbB3anJ6mkd2iqHxt11QUFuxcxqz2",
  "key3": "4tJvc1FwgYUAkqRMzZnBgiR1wdULg5mwymg8YKKsHDQMqUAQhKqBvRytbpWN4CL3RrGMGSpwAVBhnAWZKkXhRoXy",
  "key4": "3EPStXeTnELFW57yZTEFJSPLQGMXfUji6BWu9deRMULtjWRaoNixbcZKQ26GNw9EpF4XSiMSdDgPniCbY68dG1MM",
  "key5": "5D782hShhNzME4PtQG5xkG7ZzvjEU6B1o4dhGmQ92uoLbVTyXuingjDKdPGED5U69vbAoaUnAGG9RNNRyeLmiVoF",
  "key6": "65BmRdeZiQUsGd1DbjoVziWHPr29ayamy5GpntxW1f4QRg28b1QvQVKR3txqpfu6dsakNjZ3YWXXRKQC4K9b4y3m",
  "key7": "5zfKXB6crKrPGNXyKGd2skuiaP2wamDscN1f4psAc8T9MgvB62LwRJrijmiD7JEbUtKUShDZExtrTnziQr8ycvyS",
  "key8": "66mbynkuPjSZVdKXAmsoiCEwYzY7VKRaoEhcbJDDCAFRHhRrwKmNfjoi9S6L35HNKWZMdZ9cNo6qgkkejKDAz1oo",
  "key9": "58tWEkn5XAvhjanBkQXYRnYMkBM5P665A1ViY3cLDda7BTVMUJvGvSV7YrZZNsgxrEccG7Ger6KpWhRVGQCLJYh9",
  "key10": "3bmRrXqhgP2XQLQ67zvXnydP9cmeGWWLTMWCmewcypmbKhoeCxmygKYDBL7ZQi61SAHsAPMvC623KtvPotv5AvjU",
  "key11": "4G6Cjsexgri2VC2DgYJvq5ZjjugmtdXxNtj8NDFPPXbP7KPfmTmDP85miSHnP5qHwKwAfS5zXLAGhNj6AM7YmWNN",
  "key12": "5NiXebCxdJN8Gf5zyTxejcYpeEJVraD57ftUedSrXWNJLbjkQjJYMXHUvuh1gSaTb6mt95m9MgiqCNcd1aw4j9DJ",
  "key13": "2ZkCHSEDAtmsTde11grhPngBKuKr2jV35cfVpAo2qntxjjaNnsmqiHkMox6Uut7svKU1T6AFSowFYLUhERZ8Ho5f",
  "key14": "mbNzhXcXryntvan6XXMdMDBPQ4ryqUMZEHCuR2LoSzsheJ4hR2jDyufQcihUNNYjeYJmivbWjCSeWZRwPM1KvVT",
  "key15": "5yVFp7eZfkTE5WnckrAA3Zj4d592YFXsWTzvAswrixTQav3r4KzjwRFSZyKGW2KMbipSmmGYhg9TRiffKtAkGWsM",
  "key16": "59iVanQLdAKiTrJG4X26TK4xRrTToP59nVSYc8UoJBs1XPGhRUWsRUn42J9KbkNFyVpSG4TrtDQmA7RM33Xqf8c5",
  "key17": "2hQx815Hh6phmtqtz2xaU5w7M4VjZs7E8uQm9VhiRj35aKotWgZm94kffoqZKb83vnzuougjDNUcK9HYHc8qyN1c",
  "key18": "3VRGYPcCyRYoxA4qrAefpt9unFonFhqQDWrrvF9CW4zT12WckSR4wSSTBxpnbC8GrPTM6m9gNEBqmcTP3TCvPJQU",
  "key19": "5tibF4m6r6vBYMkc2anT6TmDNT8woAM3eFPxMRABbboydkVnQ5jwx7u7TDUSozMCMLTCJHAUNTMYhsaj1WsK8LHF",
  "key20": "4ZrHBMbUgV2NYYLGgTfSqmc4ZLDE2npdeuD12pAViWvH5Buof6to2NehaDcoo7pxFcJtPiNubnDCkocEv9S38XAj",
  "key21": "665z6N5jKkB3521nPq1DQBMFcB6mSpZjJaF4fzwxkiPsVk7Mk9xPAA7JXpuh8LZkhfBZ1ogPmWNZZE8BnbTmVUB9",
  "key22": "4RTfAqeNM44Zuyf5HBv7c8xWUCyjtz8ZKMC1Xf1Z8p7Twr7uvf7R25BCzdRTB5D6F9RSvQefkrnEAbrLrfPovBSk",
  "key23": "5kSdJK5VQ4Jsv6eP2JAU89aGVz3JoW2sVfXPHFRxHuddj7iGqULrFgLdgR5uCBhne5xCu3MWyXMwdJXmcFbt4aUs",
  "key24": "AJLK7DpjAjfzyTdTLh9bUGWVpumYRBxR73or2RsGDQdQevEfSeWAxq4VgLptkKssMe7TeLLQpW9UHuje6jSDm3W",
  "key25": "3X8Vr6h3CvHxYmyAbA8YXvKThR8rt1RfurR54tXWV6NBHypjFB1nRLX2KCErBP3pffFfQmRiENFJxGv1RsXF1GLS",
  "key26": "5EPDp7FrNWVE2ATW2WWku66Zmh3VVEaxoTyCTYKXx3hfLWJ9zKw2jfDmXh7pcFKURpwRG9WBVE8XUY2yVPaHHz4r",
  "key27": "2EQg8uPcyhbCWhKNnXnCxFdLobUTGAhnqS6VnYyrc8drYnuYxdPje261XNpvquAibKXqgqRkmyJHkjUBY7FcSHYt",
  "key28": "42ZNJrznmazYpmR3ZAU821bwE1hLRFpTpJU4fFxM3c8EbNiXhfv2RGfyXv1DXqHSUCVJ6Gii4YHsnqm6kM8ZF3jZ",
  "key29": "24r81RhTS55kheiS7b2conT6bRY4qMJTYaNdTQkL9tSgUzA59k3a7dxtsXA47HvsX3m3JR6NiQGCNvdg5QXWi1RG",
  "key30": "MA6FuFQRW1zYP7Mg9CCHiJQptKuPhTNJoiuyoz1V1siDFzUwW1W8AVxES2d1dgBBwN57XTsn4BQw2uoaAayx9jU"
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
