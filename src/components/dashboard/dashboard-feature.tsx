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
    "5uLgf9hT9vC5wwpgJd4JWybiP1XMNJfy65S1HNUNWpXpQ2weLFB9buWbkqB1h7Wo9J7NLdE2E4L9a9nAGc3WRrWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ezum9LdYTw4tHxRBupv977kaX97buAuJrSDMEsN4GvZjtuNZRbd8C5SHgWtji1rLEYuZkfWSZ2D3Aj6diWgarXj",
  "key1": "44q25Utck632S7MRfTrG4yYDCNjNXmbr3ZsCUNTnLrEichZNCMwhaVC6j6fkt1QNszQbJEG6A7GR8y4h7RG2R6da",
  "key2": "jxzFsC8RsA4iEczp1tHZnmmEapeqDatSA1FYpauSjekSt7casxNEFD1WzcgAKRrtn2crUwvJ61ZGscBP7LMQVe5",
  "key3": "25H4RXcZSq4JyJrrxR3FQ9jJo7FryNzfYwMki1groRAc6QH8R2u54yNZ8P6JTNBpoY3XuDtt3wwazsQtnrW2vcHp",
  "key4": "4zgtku4iZ7HYuS5t1Yihk7zKLFubm7uvz1uhUmX2BvXvSUg3LSastgq99GSCAZshgUfTzNywzAcy3SuCoEJPsaWL",
  "key5": "2E6x85potuk7Weekdp9BdgGAyu3eQ17GqRWZRBJwdfJDwvsQYDoGZRLDjyM4wtbaJEUWa9p98Fj3UU22RKg2RNFd",
  "key6": "2B6YyHU4LGazCLw8msnBB7CCo3PypFWEWFg4VRuvRyreosxeg5DYx8TiNQh5tLT6MfU4MeZdAVy89zNFpmWpRKUj",
  "key7": "54w2EZACfzfV9iq8ZKGJ4nhgf6X3oV5KQn1suxsdRfQe4fUguAUXuebSSE7TAZSjGWZhGnZZpveCveQGtDsT1BnP",
  "key8": "5nQoSNEfr4HD9g9m6AFGKAwXD3V2uJaxK1xa742Y6eu1HZHngBuEdqZafwZfUcjSywSsmnEUcNStsqQtzvuf886M",
  "key9": "4detTyECuBNht1mHCQ9HbuCzoiFcQuXZQGjeB48548xLsALZJyimMvpGyJMw4BbAExisCHUQYHBgQgUGpqrvPnAi",
  "key10": "4pGHRKcux98ELjU38WuaBPgyKKFCHpQbw3JYQUDTa8jWZNG7qEdF7TWWGJb7oSe9wU3r2Mq4kyUPh48dfTRs5ARt",
  "key11": "5DnPwH2NQudbXyrMZiKR7cgQ34RaZWzEDzvXdvENCGTtG7z4sepvz4Xfbh1HKhY6wJ2bDnogYwSfcTPqTovdsR6d",
  "key12": "4Vi5G421ecyVrQFc9VfCw2sEgV7XtQS5Vxhk3c6faDcAYaL8WW8dCwFYCUnqwjewCpqHFswrhU9ZDkNU8s9MnfHe",
  "key13": "2BdtWpxeUye6BxJxFxF5PaoxPftYXE6DnkxtNHeJkikVTN97BrgV9mZjah4ddBvCvGFooJzyReJKzA1iC3GTpUmR",
  "key14": "4c7exnvG5V7R4dYqtEy9QkRXTx1A6KdPeqSGC1KUhCdTv798ioiGHXKX2MQdtHUgcVQduYgSbN2M8BZZPQSLCNJ9",
  "key15": "4zNU59rYLybXGEcaisPD1Fj1uNsYESEoW3HiEeXhAuo1dnmemegZg8wY6R3uuebvVmmFs2Vmp2caJjJDHd5viGLx",
  "key16": "5Bt2gZYaoY9C3kZv39YikeuN8u2U5JTMMtej5ETqai77yigtE6pXV9xyPztZSxYtXdJd9XP4e9eYoQDDrVbBoYQ",
  "key17": "2VVMnbhNwGAT1qzt9pkBJTwdgJbBWHH6LxvUn89g8Ef191AENg7WAz7iWS3vZUVDrJDwmtcy2TWtSnRLFxzpaJ5j",
  "key18": "4GZPLJiYSwqVXwGtM61HuLchtkYBN1S9P1Swfomd2R76EE6BzXYTUUK2r8XSbUogPLrfA3ztyh3S81de7i9wcwfP",
  "key19": "5mUAcGiLfAqcQTmfKzhSsxbpo9EfEcE9KvQ9tkQrPX4KkfAo8wirRh6RMxtkdcxn1jdx81RKY3E4xX1YGY4SuZ9d",
  "key20": "x18kCbatTC3Ss5wU8shnZF5zNDLBdvouCgotQ7L14eXiHQ3RGvwE2uiG5JxovrpRnGC1kVhJoHN3HF8ySxDLqhC",
  "key21": "5iw95N6Tkr8cAjcmEwoRSJFRCac9SttcH71QVndQNR9GdeBkNkK5jdHJWwWTT8XgmN49R5h2FPM4GntNui5L4rN6",
  "key22": "5Dyj1AyqqztdRxZMs7e8UtjadvRbVDiArYVyFdJiwB4DfC7SDbtivETJPeK3GgXdgjts6jVwYJ3WSaueShD5sg71",
  "key23": "5Do1dLWBTL8wE5cgrkTDy1A4TTaPcrKQhqii7Cxnid1MX2LC4BfC8mZtrL4WwYm1QrYRmA3yC3mmdAEGznpTPjRV",
  "key24": "3xxZ4oZY3SwSiUpcpFoELhjjULZmyKPtm8owikzMkeTDH5td63MV6CKQRuek5gpP9suvB9zRCV4ZwZXdKf1HfyDF",
  "key25": "igYDUp8wtEFUfKhicbkpXmdjWkNZcu7aFwFQNLuNgQUqdcsGQRDWCuym3jJVbLeoUytstHevnsKDodxkEteVPip",
  "key26": "24qjSB8cqiMCE64gGGaBWnRbaiFNTKr2WN4Lu9FfMANJmne5pG73Tc43uL3a7HPCHi8yAiWfTZ1vtFbPY91Y1XJF",
  "key27": "2S2RptmifkdbbvxPrDVRTvhwtvg8GKsxJHN6MEinogTw8StcATaaYqbSBCxLeT4RN1b6F5RPLf8o5ix5pQ4NKGYE",
  "key28": "2odzFNegYxkanwapUQCqBHh17VmssUtF81qoGZwSKbS5y2Mpk2y9DQue5jqHEncSc5NaDmYuC6PjgMftgtJHpofu",
  "key29": "4TeKszzzf3qmBdybQmbbMfgCrsT8auUL1NYmMZJyutosMiWr1UTpGzdjUhADfmkyN1RcvGFkFWwbdDFxxTGAZoEG",
  "key30": "bJjyT5Npb1yCMhYjjbJpDT7FNeTWzqDpac5w2AzSJd2JBSdC5rWh5ggrYMaB1C3hrUy71Zwy1KWWrjGKJutFR32",
  "key31": "MBZ2kmwwj9VRXimNeeEVHoxd8KtyayeNt5cqMFWAaNHuz9dKLTM1u4LjHq1tr3gCvMhSAAkYLNBAsW87Fy2riad",
  "key32": "5RYBs4Cw3yr83ci9wAqj5LitKAMzLV9qWep9C1RQAJLjKa6PCFMT8v3PxWKfiHZuVCEjy47GhuujPhxMc136zehu",
  "key33": "4NpG2kx6D86sDVGQUYPwxHUG3RJPbe8CeB5Ajf2VmcJLmwqkcdX29DhtbYxMuQgAZRXB3cXuGEEQNrdUX5P15WCk",
  "key34": "ahLsYWAgaB4h4fhoenDiF7bQyBQbE5AWgTrPSxmGeWuk8wzB1txcqaW3jEeSCLxsahkYiH7Qh8ixvVvWjGLnFkW",
  "key35": "291UoHpBfDTY8pxTC25B14rhJhwRbtjtrFRwo92WUoWKryTBkRdGYeSb1mUpj2EuegMh6gLjnNybiM15mCWn6JBn",
  "key36": "mYkYZFbSSM6YzsMAcLw6aFRRc4qV5kxkYuWXHgNN1r3fRC29Vi159xmQeFE5DAdoALyesuSZR3rPW1cQG3zsG28",
  "key37": "2cPjdhwERuzp4EgJNmTs8iD36Vi9r618VYu4xrmBmsSoC9Seb5fSwCjPXeNvrRZxNKaKyyqk3ChY5ie6T2dKHJRT",
  "key38": "4BoPsZKEitbGWAm3b399M7pvxqDrY2PimJ5Rey8Fn63otjP6AXKJVjAPcPYGFjYXF8i9t2Yt4geksyDRaFmVQoZz",
  "key39": "67bw8x4a3uqqekNZqZtCHMsJpDQdJ4XWGVEC2WSpPcX5JLjd9CTrjwqHC3h5aeN6thPMpWNzxjk4ZZLujyeTBrgJ",
  "key40": "3Z6R8BN1MagpPrURN71rWE8hvXYc2fPU5CKBfXM8uJHgnRvGsq5EM12X9NA8AwqQPuWyd1C5yqqGmTwiwx886jSi",
  "key41": "2NiMAtsJcYxFfoMnaC3RxBLsgTrHsrUGXuvGyxuWHH9M8mkVAcNgy9sJeXamsx6FaUVNhYFu1TjoRtBXJ1u8JaXg",
  "key42": "48jSjHPhwzQTBtLcmsDnF8a44MM4R3hnk6aFMnEDqjjXiZXFWYpAaRnR1dM7nJbweKtNUvKWKb41DXxJhWDqVxxR",
  "key43": "4dYzSzxWNiGDwF9cQoPfoRv6XT5bmrvokC3PekS9v2M2VMfrEUQmXyJUX5NbSdnQUsDxVMMjHjNQMe9pjxnrqcKd",
  "key44": "4JUco7cMhFuMQRzLuTcKyA4WYYokBNBPCyzxAp413FRJNfr9YUMS7v9xQJ8HdZMc4iTozoyxCiNxchajtkR7bNRE"
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
