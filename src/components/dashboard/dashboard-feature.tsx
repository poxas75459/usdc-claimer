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
    "LAr7iM3v3XDQbv81KziqoEP6LtA7x8faneCZuhacnhdaahGUUZiiKbVuSczAyJAqoj7RhdFxDCFT4T37xYZ6kvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CwrSKq4oupGRUwDaJHD2ytcSiQd2neVo5i8RxiSCuBgU3LANuXyDNyVLiMjrbYb8qeiBitEwNXbeB6Hq1eQVvEU",
  "key1": "31RNuaCRFgUTpwm53HvaxBG3cqfhhvAweERNR2NYapFwptgvwk1NWzcSLxYJTczvLXvkHpAtedqYoSBs6xQHhYpj",
  "key2": "2ZimMEXH4SNdmuwPhRqv6uYeGMpLeVUjgFqsvgd6ChqeFys8u6UpJkzvMYJHm2aWbb5myvCqhZusXNz5XEeeToWf",
  "key3": "4NDjn5qqVytJa7SCXuNdbF6beiRbgJPxQFVtC4SkEqRvo9dG4qchdc52FWeet8cKroBq8cWh7CFByepWE6yerUWh",
  "key4": "3ACbWKPaFoKNJu4jhSmbX8vit5rDSxCqmHr57BbtfvX929qrKTX8pj6PH8yPhJiLtibaC7zW4LYJiVoCx9RbZ5Jf",
  "key5": "5QJizR1f8jv5nvkjLiB3VTSJ6buE4Nf4fvu2SHnRJxD7yqbX1GmyJxAdGsMHqJfscdXupwUaNrAKtAGjZ6LBhPuV",
  "key6": "2GjB5VqmH2JtUMZ36MPckjEqtz3kGpTxY76gcqNkhsrdpik5F3rS8YZKATirfyxe2Dhi7ySjoSQKBoRp9zTSnTyt",
  "key7": "4XY6MxBfnWCHUqnpF8XB6rVdoArzGU2GXsDaiXMBhn5eFwLgnyXoxDGv69SL8vKJjTBm9RKj3w9cSAytRFiJo89D",
  "key8": "UkLLWL7cwYWuDRz7MUq41caZiVgk1T5s2YZjpJphou7hFaCuvsSHadxRdGko7qydFjTBTwAB8NKJZWjSR3p4Rqu",
  "key9": "2MvTQMm2tXMpa7q8JZW7UhCh674CHQyqbtCfs9BmkqZUcPmoqehFz4crpemyhAhkvTqxgMUNB7pfZWZLSwJYWE3t",
  "key10": "5WyhA68CeWCdBC7rZ4Hzh6zz6H4nZJgGsqoZX99KidTikCC8rTNwg7HVKh7FNFCjnjzYhVFprXTTFQG2vqZYiWMY",
  "key11": "2Ak4tsGhxmTn4y9Xd8AcEt6cH5epatcJPUJ9VeeXCq9BtwiEJ8qh3ffLCu4JNqDAb5PaHPQZvn2KSdLMLQf5dDbT",
  "key12": "34w37cYaCRJskkuZDktZ1zAJKG1xnjt7CAQmZPJpSNGpPVwfytjWMeueXFao3Hssvg8CKz7xprDThVt8RYs3y579",
  "key13": "5mvDYmmfgYypoEK5ewV1ZpsPE3CknNNkfe5R6ytWeTPnyp7wgHmsZjigwjXg42Tx5W5mHoAiBkSttFQZydtiYoVX",
  "key14": "4vNxTYwkjA58cwTog6zbBmT5dBbTDUi1PDn3CWaqTE9B2xkPpVsod6PmimKGSvMbZZvbTNRdCTvTXNFZpEQBfmV3",
  "key15": "3cYMxmWxu4LdxpwcYpcmUfSgAibyaKKukXsVBK2w8r66A3Ty3aKRfYRUTGryMDXmfqAh7viRsGFqBdfYns2FgxZE",
  "key16": "5D7S1xFE8jejoyW1aMRy61sun34rrXG8TmKFPEtCtJuaVyKRX9iXqQVyUNv3JaEaYC7p8J5AhqvKyTJ1dEL9vM5q",
  "key17": "3fQhV5WpnxKzVT3yPet6p7BqnzgCwswDA12Frjx6qajN7jdeM3sFFg1cLcn2gkwZ65k2r9AUMj9MMzDFRVHbUuiE",
  "key18": "3iMz6P6WqYHwkcKDhAwWS3FNzDNrr9y3ioPw452WsehkLgMKC2qWJHk1HhmJVpDQegN2hGTicsEAQVXNnF2vjFM3",
  "key19": "5nA6CwWKKU83YAbTthtLMFmSJ5z2oenoTx7UMbb6ByG7kJw8DfxCXVEu31Ton8zku8DK4GpB8qgm2qc2fnwDqpop",
  "key20": "4FXWHZ4piV6iBMHjdKhqNzEAiAKeFXEk3tyePF5WgnqZqy6kDkiRjpsbBm6Fbn3qnjTko98VfqcbGMFU9JiMhQer",
  "key21": "4cRoHnaoDt43aUxsEwXP35FoB3V5q1h5v2uvsjup33Upy5MiDCpx8Vi4UC5zxGuBPo244Di415wj7M6Dae3EQxF4",
  "key22": "4aU7tfG9gKts7RkMnbJh7cjaB8up1GLFQiLUiUt7X7oxec7vPc2EhuU4s4mucy4pX36iSh4oXv5m3ZyNEmgW4JnH",
  "key23": "4VHY8RiwGKoFL6FDu47o5WFp3w2CdUhLATUkLwbc8HUvznbHozhRX8qDDbCPiHr23haRwYyFRAvgvTbhHdGkcNEu",
  "key24": "5ephqWoTpMABprjouzxgfzfX9yGXSVM34qbriyKCgPi7JAiRgokZj7L6G5EUUUJYA19mLrN8syChoMCgyNmxFEbC",
  "key25": "3VUU4LyZp9jo3NymGj7V6pnarACVRkydSH3TS9MmtwyfkLYzwg8fxFw5hmZUHvsz1jETZrPEBqdNpLs7swGXAbJm",
  "key26": "2a7wKuDeLGTUw8cKaFfx1ydaWNYa6PnqQVWXJd8RyXaGEdTbUsbMdhEstVqLkV7oJc73AmmKUFNvFtJjpEgPAaYP",
  "key27": "G5GaSUCmuaDwzFijvrpw1b3FhESg8AQSF59qWFTUtj6PJHgkqAoPBebWBnK4NhC4yBaGFakTz9yG6V23noaa9j6"
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
