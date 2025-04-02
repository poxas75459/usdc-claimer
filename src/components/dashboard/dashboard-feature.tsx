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
    "4LDzFx4XvYXpWRvirUYRgzU6T9LaX8aL9Sq5k4vQXWJdAC8kvERVYazcwfhRQ97kzndeWh2ws64ncfrqukGud7R4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnQijK7gWYsDhDuPSTQwa6L8KonRj4Ngn1WhE9uJrbR8Ac4nAjuvNfL8CgGkK3Jbk7ez4JYb55WZe673PZGchhZ",
  "key1": "4moY8KzsjeaVeMuEBi1sYuUge3oeF1VVACPhEMyGLeqQZstYDLyvRAEaWgVrcCxCt7YoxMRFJizCHz6zeYyJs93E",
  "key2": "4egUGyfeAe1U8ZiScEhyw7izsXh87ULEJCDhf5vSRRPkVMYB4fAJYc73zRe7GEGh2tepGW7mhGZkBoQqqjshvow1",
  "key3": "4WUmoiCWzDB4dC7daMFf39wHLxRC7eneYcd2AdnifroZ2J82p6GEafj351Eb5gBP2KXvctnqfcHcPjNH5NZZCC5d",
  "key4": "4zmiQtFJYTBpWVXybNRDD1gFMLMYiQBnKvU6onTPepeyp68yR9H6HPzKKJWwGEzBssaDAmKJz8BUPHwzcqNssQXG",
  "key5": "3JZUr6gwbN7Zvuu8eynnMWDNUBhT7oGssy93TfWvhX5RschuzUcAuogpiFuqehpZzrKkEP8UX8R1AAb2NBcXw8L8",
  "key6": "2KhXY2cTVtkggkhgvc1oqmRfJ7iM34TtGkSzNBwo1r2SLUncQ2GWRm4KqAXudbg9XZFJThcWma3drgrX7Ko73zj4",
  "key7": "294Dyh18vC6CXen2swTL5QWZG4YwWSjLgC3h8pi9fnTPmYBMYygKwwAuLpBHxqUm5R5KC1faeZpZCbJHinmMF5xK",
  "key8": "5cMRGr89wi6goJopz1f7z9X4Y7BShkzZx2Sn45LkXbviGdBP23wp7ZkRAuA9o79ThY8nBqTCV3Knegzu8t2U12sp",
  "key9": "3sDYVDS2jwbCYikcyUhJFzasbmVwK7LzmnJTgmk8gWFgvhY53fWJDTRFHXp5k27W7SrsjfdeT5bcohS2FcWAR7oD",
  "key10": "4o7SvNUBSxPzmTEzveq8M1647gXfubsvBsCmsDMnq71hNBXL6z5XUeXRm4ePzH1msicv7Auhh9BpoHE3BfU4GzH8",
  "key11": "5jo2oHL4oWA6Fyg7GkH3n9ikTesUaQfKTQt5aFdLXRGtjBkthSsShpPEZUekjfBn4VGz81dKNv3wstoe77CCUhu3",
  "key12": "4MSVLm5Aw7dcoFjRUn1m4qywrEQ12hGz3gYvRm4YsJ9Ymv3CN5Ed2zjnq9Yw5BAmbm5C25XKJzRXjKaLYuCLvGB2",
  "key13": "zz11HvvL2VXv1mAFAmGw1mryDrU1H3jtk2maJDqpst64CK3d1Cu3VheTrxoyqPptBMEBhGykGHw1STpZ7Z4k7kA",
  "key14": "2V9eStZ6hNw3PCz7N9fENCkGZEbzRtmuaFYXMWiFfkA47Dmuio9BAGS6tk8mEU13HpPFYo6Cumbt8GgeZ14jyJyu",
  "key15": "2qcDYHbaWfKtM6YETTtDVEYCCB32bsc7rQ2Zg7kNdkVZr7dSgeVEgvRZZZ4kB9dugwfGwdezoabFGEBBWZXFCSh3",
  "key16": "zPUXez2yo4BMvWAuqds42caeveNYA2pwJ7J9hmqafFndFRJEKejchaaBBjaidSbT2pAbqMxhzGCy95viqW3A94B",
  "key17": "2r76mcGHTxicScnYi4FoZMEfENDDS1J5fpiAeuo2Lt6kb4MoiKRbW8imZAWjFhFrLuoooJ13pfmRvDR9Z2Hvuzyv",
  "key18": "5JXxFsY816Su3NDKh3877dJcx7QQ6ehndMc7MnDPxq7bFpeGB1JdjiCqYoFWvnjv1yiTDmHszCZs61CimCfhKNb7",
  "key19": "66v38fhWEHEydX5KBfEUS1ps46AuxYx7vXCFAN7zWMs1TcVeqo8GFddrpsibi2ij5p3JpvJHGCXQCiRQhcoZyFSG",
  "key20": "4bV5DqvJD6wQFgPTTJrRktUju3axNFW2VwzzrFxq646EevpD4N3o3kQVqToG5dkRWo2WemqF3JDuMUbtFxoRcoBe",
  "key21": "5hDhQkaKy8gT43XosfzsyRPeKBRy7f8jhKCqvfwZs8NNpt138QtNzoKTgJEZRggG7UCoxZM7g8tZFP1vxDBhaGNk",
  "key22": "54WUDz4kifwXtwPnHbLx7H37kWx8TSUZuqumGvwNkRKNwnHjtGrJKXN1EFHzzPZzxSFCGcFdTUiTR68kHeqaArXV",
  "key23": "4teSwvLEsxpJhfqD87o33G7CVd8kq7vw2c4X9nGkunbovAFhxA9p77yScRLKkxVjReTqTUDCBtTvJWPvrZYcLpzh",
  "key24": "2TMuTtyfhq29tM47xcBxVYHv6Y1ZNRQ5ssFKX2HWCvx4bj3wpX6jYezxg6p6tYbBce4yP4ycCnTK1c7VNz4gB9mw",
  "key25": "21jtrJafCrDzPWNk8Exo1nBgnK93NgWrr4Gsnd8mLkoKy6ozZwuPm6RJ8pFTpTSF7HvT3YQ9LGRe2Lb2Bd82oagC",
  "key26": "3xj2ZbKWWyYgrVEtwNiQybXQFZXoJHsZjEHnm95QGfQXKMGcJux8hLcRmkU2GoVd3QJuE1cjEKPoEcWpF8mg1iUo",
  "key27": "5LBTQdUfZao8JhqTz7UVnp5GxccVC4D3kbLNmg6nZ3TA6si156dY8PjraEwn6kojxuienW88UxDXvGLPBrR5du3H",
  "key28": "32Pdn38XwBEaexa5SpYFRZ62CktLbV4fZzx1UzTLbNPUhKMGdyvsQBabnVwMpMooaRZyJkWyb1BcLkbZcdJGVsiH",
  "key29": "51npkF7KJ6YBoq7qknLAs8X2JhdRnSNFJ1y1n2dK3b5yRLwxktXVEhxQsSqCf8dsBDB4cdE3QCzVLYAASAx8wTyp",
  "key30": "589Wf7QvGAbBqe26R9gUpdqaciWh6ArSx3a4Kzh87gMYAoQZemitS1gJdbXt4ABQG472N7Sd1sbix1csGVLR8D6e",
  "key31": "3Mv8ddQuKpyqfavs2XThkFk6H8AXkHyYiyKnMAcoLPXdCkh874jctCQyWYBBJFsFUUgGTiFR7n7GMpXjFzVy1YRe",
  "key32": "4arJxfwAcekkKtzYRGK6QUyD3XSTASEwY45buVVazQWMBeGaN97mqrjtZveTTtgBfddZ7XGe5jfV6t6z2yTjqJdE",
  "key33": "5sNGTzcE74DtdgUJdhDT9FreBKV7w4cTkNGp6GcAeLTeuCJLQzh5mQ4pkyheztBk7Dm84DFGoPwo5nXHDE6oepac",
  "key34": "25LF4G3QUpamUUiU5YMjPF4CsXX7WQY1hw4ptvHKK3js7e6QoJzJcrbYZuTvDFcnenaUMZX3WGr1wWKk3Xfkqbeo",
  "key35": "3gipsPD7ENwgLGFAThbHKWGp9Dy9dCKPofEu2EXP97Xe81HMK9NHaajB3uWs5jr1yPonQUhoF9b5H79FeTV9Fnmp",
  "key36": "5ehQoy6dyTNR53pbXwY8sEyxwW2sovVzqBJdknQ7Y3M7GssXqYEDgHo92ffkRmutQJXwGWDqjgJKm6yZfER3jEsX"
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
