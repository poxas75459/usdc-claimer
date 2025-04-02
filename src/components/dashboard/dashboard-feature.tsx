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
    "3u5PRrKiisL3GtVEbBiQTqMeEYHLPeoCGAfc2EjUUrrmywXnAux6bp2crKkixyuDx7cr7NELkVi5iVw4JbZHDJya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4czY9dECR3iG5Jaqqc995qK8UFm1PZfitsSn3r3igq4kKgVxCLkmutWUELGoDay4hiQaCJykZA25VRb7je7xAjfo",
  "key1": "5pauicnk5LMYTtGCEP5ifEpSUFyGTjdM2rc8WhnHM49CSLksB9vS1AUksrZrNvZ3c18SPfjjn5C1wbXmqvHHQPX9",
  "key2": "2ngW8dZvMhUyXhsz7axaQ816X4g6RxGMSUVJCucaC78JVEijkPjvHvgxe6AzGw49fHDUMH16TzNS9XmuG95igoiR",
  "key3": "37kWNZZePDVWC1jEpeovd9wki3LgkssgwHvXwt8h1nbiv5fybzeD1woc98JoSqcE7FNqtRzagt9H99k6uNnmiNAd",
  "key4": "5T2qnk7SmeXRV9kFnX277dEqfyLdXbwhRcuV6gcm9Yr873GxCyNs7T9LFa5KVnoht2vahpz2y3Sk6ycGQtaqNtau",
  "key5": "4SV2SnV235jM1V9LFgZ2ScEpVNeyEDaFmzpD1Ynb4p3WBLTqtQqxpghzhGi9AE3qXL82o8YKvRGKjXQrBQmuAngB",
  "key6": "45B77ksUR5U8RygFsS2ekQnv5bJSARV1fnHqZQbYkjPzEFt6PZDDYeiFJ8HQ8vCwbRFG41qZbDXHakCfLqEkjxXi",
  "key7": "5YrgG5PgZYyG5bU5eUrA8nhhAbAaiKYRcfZvCgfNH3QCCN9pTBQwk2X5KPbiRtjVyMorkv4wu2SUBx3SmbeUtw8K",
  "key8": "4t6hxBoBcHctQf3LZvLAxJ2y5to4EkE22p2v5R56Q1uvoVjGixPrpArvRKYb71hYW31bhF4xm3udAviieWMsHtu8",
  "key9": "4dFvhbUXb6ENFbHZSvPEdyqUywbjWUn9GjkzoGPQirQLJbyJw7drfdHPA2Njao8S64PrRmqA28EMRU8kMwXrKxwm",
  "key10": "2VkhnN6KEXjy8QRFTbef9hFh3mbQA52iyjJsjaTkeUFjSgDBhpKV8ERuoGCYreLR5zvD2jjbqCUxL7rFZoWhgrX3",
  "key11": "4pq2upLUebQJ7FziTUNzGKXW1ujWVQj8EWbbDGkETtP6TKBxZGxttD7tydk93AHevVYoW244DHtTS2uzhMFKDT5L",
  "key12": "2RFudEK9xBhKq8nhsfVyNdcV7qw45ZrcWyZui3M4zFPcohVDaqA4RUfTQS2ktk1Tm436r8cbPXCtjymPkUii4hgH",
  "key13": "4hZ6MMnMJ5H3g71V22QgoBnbdszXrd7DASZUk7XRZ22UV4CkxxBG2UeygYEwgBmEfHNWb96xtdWVvH2N7RnezkfF",
  "key14": "Lv2EZoJ2GcBVwyKH7b1QxQWWM8uStQMnhheCSHhEgCZH1XBDx1Fp23FhynuQi9GJLoF75LK9HJJSPe5zwzXm5hV",
  "key15": "4KmjKhbq8dv8s1BJXbaBNCA47MHM8AdZ5DKU9wNVSKW1jUj5AxaZ6LLC37saYjFd95vDtAqMG3NRjmoXkxma6QyU",
  "key16": "3S1k2MQ6uFWar97fgne3vVCvSyMQQCXFyNU3oPFhJV5zrRHonLEatbVdHqTrX2oinpkKH3FgNH5iQrY9ATLhLhgG",
  "key17": "4WzucFB6yZzqtEX7UxyxJ2gDVSeARk7mvNGnqWb9wAkENfw8DRxKbvZE4Uj7kN7Y3enCwnV8N4nfvrejo2RrFypg",
  "key18": "JakbfDC78sWWHibjUveDHxKWgzafncu7iE2vrdgz1HbjfeAgNUDG2XatwM4oxWPEAvaoh2FrqTjefBVqz8RDGW6",
  "key19": "5rpY4PznpxCHSLiKKDPG1KZRqCsu9vfA6EPoYHf5ETcrYhsERzB5y7hw9uiqf2Myecj577SMXetnUENDUWmd8FWh",
  "key20": "2Adkbhhx1E9gbo2Pm8TWYhaQYr1YuGeSPYJRMYEXDHyg32P1UAAbFShKjLY89XkQww3FgbPhmpDVy6YQZTaMyDEZ",
  "key21": "3gygTFkAoEWBcGr4HPqpDiCsagXLUwqyVG1HpBaiDSKSBai1F2iBgZpiiVLRMJi7vEFT57Uh9LBnw9wyi7GXRLvx",
  "key22": "3fEHZsMvbqB5juTbshQHQAyRhxLmNZCsseCdSG8C9BKpPiwDKjZmUPww8cQR2TxK1k7sY1C7aqSJjJzAukCniZDS",
  "key23": "41AwzPsAHLFKqjbELbnswjvqQR4XfadC3Q2miFbTe5jyaDuzH2fcFVsWimVZwH6XJg6KbECcqnLMuSjke9UDowYT",
  "key24": "6bv4HaSY86zzHFfTGUvChWafBxWmwpxiYPTTZuYzo5YoLXeJRq97GPKfZ3R2mXZVYXJapGWXPPQ6vnbDN1tSwZA",
  "key25": "x3mADaYJxGqP5e5gXGfEGTFoV4z1MFofTzMByCU55kFVaqijQ9AaLXf4Coax59Ac4QxSzrtiH838qGsWFBprCQ7",
  "key26": "2tMcMUVYopAuMGtUQrQhvs3a7spXYcPBCcHi8JTCrigoHkSJSeAcUQJGQzGfiXdgcE6deHCoa9wJuaRm4TMWq4HM",
  "key27": "4DKi8cKJjijVNw6Layc1wW6SJsibCKXDXdEaeQxZksaeEfgvVjL6rZsZBWJpfqhJBAmvYCW95ATZh3emX2PL3Wzv",
  "key28": "43f2rVUDBQRQbBiGK4azULs4hrHnR2tsYhhM2G8dy3fghmdKkVeJyZQtCqpA8Mebmca87WQSmKZecMvgnQCAAUms",
  "key29": "5g5aLTZuqbpzpZ6YzJuxQWCBToV7d8qFUCtXMAnWbUMsKrfDBqarsFmNmD6RxGxHLoiXbn4CTANB2jhHzX5D22uM",
  "key30": "2adncZSbkBtmmqswVqn15q21ujSUfSNnfbnzHdFA4HTQKDhtfXhTk4NAzrE56whVjfxA6ZtSEpu1hicubaqXiyg8"
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
