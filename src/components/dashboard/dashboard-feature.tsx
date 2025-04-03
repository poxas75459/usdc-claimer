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
    "5nV3RqBUB18CNwVSh25q4uBtPeVvL9PioXYwLRJjyyRrFQUd23MJWkFAypXLggBcuZgx4cFKk1w6dhMeC6WYic3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49X9xSaVasp2qztjaAcV7wprxVAkXjUts8awC3V3QFmPfoz2Do1kyQKx8GPa2K3i9duKoj5tTWLj8SCcQWLEFMW4",
  "key1": "4Tarpv4fn3YwPjKwzbxFhwguMHz6te94KAZbA54UP3R5ac7PYLuBUL3Jye573zs5STNqarqbp66khMX865dnJeK3",
  "key2": "4F6EVwMhevtv2khqbxTNEtkGgyghAnPKYNivbRwH8Rg7v5q7Smtq4SkWFWKtWLCWQgiN37CkbRuATx5yopv5YMw7",
  "key3": "4iPeDWdyogqULSm8ipD7rX1xBdcXM9edwjaNxN8qx8WuriizYGigivMJ7djbAtd1ienACguGwzjBBk5jLQ61EPD2",
  "key4": "kVKExPCHcK4qNLpFscWfksj2vAVgxLgt2PYoi97RjBPwCTrcqsmPB8QgJ1RRLp8Y6aFJyv26wQzciBLdpeFbBrS",
  "key5": "39szPSjvQogGZvtKXQb3HCMA83Y8P5wqhoxDyYMf3oC8xJC212f86azfpc9iJcM6M3nguAkuJCBCjerSsKfGiqCi",
  "key6": "3HXyFwpYHHJKmgBCHE1vcWjLeKAZdzbUxz8km1NzE5QsFJtEfdrMV35x9uoFgPsLYfM6T5yXNLfyYhsbixhnVJJe",
  "key7": "26yBjJDHtN23hsRZjmimEpwGvKaP9U38kR5cDcjbaWiYn7ZCujZ4JKHoAJ9VzGbedzfJX5jtZtUxk4wb53EbSB2w",
  "key8": "3GpWZjhtJZqorYCTNVXT5RN2NkgGy2eP9T6csUczU5Diwi6Ggjt77Z6wxH6sYusXWGTGpKa6QpzRevY9uzQJcD98",
  "key9": "3DLThHcUufyyRyyjWdZpZRwCHaCG3JN1vkrjCbCu5ZXqBjSFY17NTA5oxRkhvY9hf77h81u6jKjV5pHcedAmLnmk",
  "key10": "3maL1n11HHs3LvuFSYQSgcgZDgJPgpYkgZFvL6wXHmx9ZhHCvenA4utV1naCmiJSUB5RuPiHgFk8qzrbA8VXye35",
  "key11": "3aE95n8viWZ8iSiauo1CMeeUxr4WNJ9UY18XdARx2wdpBk5a2QLq2CLXH9uZJX6qsKYFoC6JWN9qdaCSLFxCAJjU",
  "key12": "54Gfd2xQyEW3ovs4RFHrFAveytBqau4Qa2uBZTebx7RMMY7VABvZBhLaykZkQzvkbL9g12aVgTqQJCmp5nwFNvoL",
  "key13": "2yhMQykAZ3ehaVth9xs4ikUCbGJTwXxsq6atWTpBECNa4qHCeSDMiuWdHJaC4d3iJ24vGa7MvJR7EkM1DgZaemKP",
  "key14": "38yisFX4skborvMDQhwdxe9Q8EkJWbgeNBm8eNL7KktQQVaxerVXypnabNZg41JAgrdJBPsTteLHq5tv5neask9B",
  "key15": "aoeTaQzNh8GN4FbpzNhn177BcEKk9QZTTbgWouRcdtAuRPjUoeVDfgLteTC9jzCMcyTgBsnNacqHSWSeg1Y2Eep",
  "key16": "3QyXa7bigoPhzSy2d358WbYy3vdGbyzPodYRytfsiVV8RtUeqxY6CwbHyAi9gKCrncGJv1oNzeA35KxHUh7RxD9u",
  "key17": "rCkFfCZwuLCqpgJ4mWP7Jw2nVdUUiz8kMc5GpMo3h1Lwm1w8WKPHX1bNMzE2hzmretJB13QxrGQddGRpj5hQPcC",
  "key18": "4LTMuusknTQvB9t73ruYBSbsbpWWAoCwRyuGZfyBNb97AN4Uc2T5xuB8YPayBrPbi1BGFMzwtHTsRX6XWwrJqNJm",
  "key19": "3sA84cxoT6tg9cTKpHXLTqmyhNAtbhi8B4qAqfk56EtAdcXBQEpPPewMgBQcEEooWtWE2emKcpjtBrPYDUHa1Y3F",
  "key20": "4qbt2uyEWZFaa6jM6tn9j5Hgxoh1FuvziaF4TXfYCUMjj5vucZEKaGkP72pwgd8h5wTKQjKHYMvk8YspQMC8FcjY",
  "key21": "5qckb5azVQhmdrhGWT2smBtmzZGEL53apppxZPcTQESXsJ1jEjpT4zGEy9fV6w5bVA7vE9AAPD7yYcbfCfHLQ5E",
  "key22": "4pUQJUVAcUHDbiFDyLmaaL4cykt6cKAEPRk29LgnPdAmkTXuWizLxAAo5TDXMqi9569d6jStZCj1owgKRhL46XBs",
  "key23": "4n1s63f2jtSsAbUaf1HDXfx5SzwaLccr8L8Hu4Q3P3Gc8kzPMH78Vk8ribLgGVVowcLXSDWtsdAGV23Wc4Sg1TTi",
  "key24": "4Zo8rozWSUPSB5LK9TdrScD3vboCHxsCxjWngsuJgs1Pm5V5CWTeR65NUk3pcYeAJUGnpW567Wvbrv4waAEvaMMU",
  "key25": "5GjAYfbQFMnaRMmLreobkrVSfk4hxZvn4xkoSQ3ouhnvHQApJJizq2VUBpfnPTH64xDjxXe6tMJAbqg4FxnjycJN",
  "key26": "5JHtsVot8z8LYTdiTYHYbPTEkwz2eGR4g6caxxbEz8dmJYN8P6TTekn5R8HGKd6NH4dfSHA8tnWzgDVmwuS2Bnmn",
  "key27": "5SmmMyMv8qvFXStYWsB8TutuRXC1zSz3xNbFRA73p1iubJNN4PL1SDDtMzyaWkwWN8jgmsmvJ5xL8ejiRFUCYSnN",
  "key28": "Xjpiyp33oL6nZdMM4rtRE9jwrdbGTQzUwRD34qULvV5t1UK4k34pc42fuvPv5UjYt6vRkN3ByJR3rXzDZyQG9yQ",
  "key29": "3whQtfTDhXci1qhAYG9hqrTvzDcf52EiuoEH1A7Cw7N5R88ZXinfq4rsC5JCsYnR6Nor1w87MnTmVhQ5zRt8GXPe",
  "key30": "3teYu7H8fhV3CZKDi6iMAhzt779pohwmckPYXznyfEennnBuBwcEStCKQn92U9Yy5Mqt1g7LEezq5tJq3ZpLa5u5",
  "key31": "3c3uabsQwFBJkKhttAFrsyaW4RpGncnLju5Z1BYkU7qmHVuVsDxZEd9PCrmuHzBpjJHLJZhA3qEJ78hyd7UUJfWu"
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
