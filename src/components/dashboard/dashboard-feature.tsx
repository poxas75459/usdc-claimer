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
    "RFspiU6RSDE21jcaZGZ1Heu2xuFmp4db5QSNhoHATm9eGLq2iFCmfRznRpCFJ8dLzcCNZmmkt8wgZWt3fdAoMzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645eCV11gnwHsGnoNiJ7tGXxG9oX6WaTDdji5VFyYZc8CRNNxrmSk7NUsKKHmFKbEnBsySkjTbUcAV5x6G5jzxg6",
  "key1": "5B5AshbTQcCKJYfT2ZWuXPfsADjWxCni3qbAvQJib2XNt7QuL8FxZMs6am2JSKA833dgRXHAGhw7ddRMv3dCWmk4",
  "key2": "5cmnKmk183nSPNtiB5kXt7xtoqAyaaL2Nrskgf45q5xePSBzdNrWQrg2NqnwFc4Myyyy62octMkr3wrSdKDbQzZd",
  "key3": "285RJ3m2Qojixw4bqfRPG1BcVztRV8vePwM43R4DenxMfpXB1NrADoZJaHTwqhAkWKQ9gPg7i9J4mQSZpfaZWUoF",
  "key4": "2nFcNyxjRdqaaPenq2ww6xCR2aXrHXUvEoK6GdunUv2WnF9yaxtAJthEmHAdNYx882TbJAm2DSgw7g3AccV2Ur64",
  "key5": "5iNk9gB1KariC5HoYHGbYET99CZ55r5T3bgMhAGBQTLM5MWJzifXLrzsD8yzvrpKek1SNq8XE22bXNuhxmS23LL6",
  "key6": "2hBR979ZeRDiLA9KEkSxTXR6tTXVWsz3yDS9MWFXpz2Xhp8DZ65EvYq5jiNgNxEQegfWq4sWEkHqBSRDTXG3EBbm",
  "key7": "5wbbbpvHWH6nvZiP7NeLXGPFHUqBVTwPyqVLobfTPNrNxU5BjT2L4WeL1ThbSoAvTX8TC5vXEfiEKrjNrDptxdTi",
  "key8": "P99oABSWDc65Nyoh7XDoEpuVdsp78VGxMsKoXdXV2fBDKcZzrCjeyFSjasEJM6e6QTU4HSnb9D2cYECMV9nMsmo",
  "key9": "3Q1vWyFZPaZbmgmjEmKogm849m8YsxcLRqzYCiBRsTXkydPLCp7k7tadQM3M2os4EH5rqMfnJqdq97frFEaPVwLY",
  "key10": "4jDgh52d5QtUbQMmzWyrnBxxCYgjzdWUMY4py5ETvEbiCymAbZPX5fr5QTk3c4Tuy9Gothra9bkYeuwFUaUDppCs",
  "key11": "524QJbs97HfJEgADp8zCKUX3CHMrxXSSivZdGb32t3jktneGAiMFbYKuEUViiqtkTi9V25EwYiuUvDRw3KAJJWtC",
  "key12": "4Eauguqvp66Hsh2H15Vs7dXYAXohoYDbNiTXFtQ4SdjzGvsH1aZhes2qiSdP8eMNMyPsGPz5w6XuU2QQst8aYp3B",
  "key13": "5GFqnXFMjazjR5rCt1ZmcJxvnEL9psRTteXVuFgg42cgtH7KjmjCd6XdvobhUHHtMHMiP7H9TMn3NWwqdNWoetd4",
  "key14": "3ZwxZTgWAgX32DcEk91j5j99kZFoEYRUqWYor9m3JW7HhpxxN2wjvj64X7rBj4khFPrm5ZrSUZsh1CijyMYCAvWW",
  "key15": "27sMKJy8mSTNWjPJ5ovjf6hY1LjH6wiW5SeDkUjnvf4XocRMDMkn6QFgAP2tUdSQ69QmfMBf5EJHmktC1DxNarMf",
  "key16": "HJ3WN7cDXvSRdkqTRwXYJAF5AQFyF3RdmtUaCuWLMdM3Kn4dsXNK8FK1PTD9XVCVL9VFSsofoeZhHGLEV9mLBk3",
  "key17": "46k93CbQikuCwxeUhtuabc35zdjca9obLy7QyWAqFuvng9ZYu6ZLhJBmosDjtUdaYmVFPLZEF73Tm9RmrQKpzxh7",
  "key18": "v57nUETADTUL6e77Hc8K44BdJJLJc8EQAU43uFHKGv8kCHZv8stUjGmpMC2FB7ohxquHG9aoVBNK3JJh19hX7U4",
  "key19": "39yfwfwp7XigDCmK9CkNiQHnGvQSjb1cvC53gPANcmGKfyzEWhm7mPqQSAP7RDSsL3TSka3E7LHtfumBcD3b2Uur",
  "key20": "26bkzPMHGZf7ZWkrnnkqyXHggZ7TX8HCM1a7Z3PRRtcJxZsfRytFeQGZ4Q2PCnhh2dXnoawBdCA2R9KjKZJwHhxC",
  "key21": "37yyBvQmkU4aqwQhRyTS8gvRxhDkCNthyw9JWBynQooLZC1xiLfjGQgZcgTfPZvPw6H2To8hQ2uLR4Kp9Tw5KPoT",
  "key22": "5EUgZkKSCQ5XxjsXmFpWTGvsKdrmnQBKczSEwy1qQCsypsP9zoXuLF23483hTQKLG8FX7BgbuzcJrAQ36QkSxdoU",
  "key23": "67AV9Gqx73qA7Drd8b7AZyBv21VYX41HiXWK22k1dnXFFTFpjRA115o7uioU4bEeZfBFHY3idJawtWopixgqdfmg",
  "key24": "5aGvk6PjT6AFw6dtZMqwsRDgdNUuf8gqV9ypR1oBRb25PwBNGJApi5Y22hzUPVHtUmQL2uHQpc8BDjysKanr6yZn",
  "key25": "mCzrLAJg3dToaByu8Jika4ZRy8y6KUBSPvWnJs3f6xwzdQ5GGJEM7Awo5wRX6PEH3w3kUHbPDq6vFGABSkRURvK",
  "key26": "47iQUNwLTVm7bMnGHv8ed7pFFDdeFNogvrMdHhBnwhq2fYJhGb4bb5jiP1VxXs4qqgNwJhWwkLQA7ZMkUHPuknUB",
  "key27": "2HGyHaLuUF17Y1ypZhrZQ7TMJci6xmD1TgKJUCxpc8hueapCwMci8zAw3XMsxAmFeYGFxRqy8AraDb6Sof9hC63S",
  "key28": "5Myek1N5SoiF9soNcgP4Kfd1GiC3HMoLRAby7YrUi2Qh9K5Lk9BBQn3pJy4CPz41yMoLeVFid8A8Nx8tib9g6Eid",
  "key29": "3zLLphah4CGrS8CqFV7z86GUgeLhkJerqdtjtaEawQVig3rqVJEyoLSrSB3J4ERLUmHES2ybVwrf7n4PYkicK5w9",
  "key30": "2ABmTDM3WBj8jPeUtqXjbyawJxX4SF8yAmDYBoLqVkXgmfwaY4g9bVb11W7U3ZDvs6bwHvFy48x6yJRCuzHw8zvQ",
  "key31": "5hJ5azhrW7ouMhcwiRLGxnK4NKcpgWCw5VqRgoXQn9R8ndKn8KEGNad3bhLKQaKGjAfbbLLfVhC5MhNmD6NjMrkJ",
  "key32": "53SJ8y8qd7R9ZxnxMr1giXSgFN7rzQejQojQjZCQ5eAoQ3X42h8TuppbiTYkt4vHitxoAVY4i8TkZwxSmnmSnMMt",
  "key33": "gjyK5eZdp2QW4hXWykKwEF4ZByQ4mb27FxpZeXS92UMUrxcZVkLprikwwounHSpCHMgiJDjgKvRURHoxdcBXQrr",
  "key34": "2odhyQBsWUxRxGd7wHZZnL6c2spuKZ4NhRBBr9N7C2Wmpu5bhfnWnqQ97jjXdXHtGYeZ4ZgtVwbffvgi57gRoWW9"
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
