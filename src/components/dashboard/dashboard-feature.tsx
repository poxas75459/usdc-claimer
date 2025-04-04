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
    "4PCmEw8ptZt25AJipHu7t68NnUxcvvFh1jqWWhJtWT49TezaeEibi3EAu1c4R5SfhHzoFYxZUg1QNwnHrfePeayn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eNANU92cVCbmwrGXv5UL38xE3jgdAbSD6Tgv61kiu67VeQwxXo7DXHUR4LmkZWJzZ8fG1CryErMEcbZyyNFXCA7",
  "key1": "5XWUAkarEQimwaSGtCyio1UtbZUekgnfS4kPoYsiHcQFMHnRkk5UDqPkPk73cdKtaDPoQ5vxizhPoZi282YYKWDo",
  "key2": "578M6cj5FXsuBmfnvCswJDXZmJUroQEuBWakhhR82ysmR2u54ozi7jZi7KbBUUxWNgWpi6QFa8Rb2TqqS7USCMwf",
  "key3": "q32K9cHHcpNUapM34uvKcJj1u45fhqU2JUxRHwXSCrwr5Z8Qarcq85mGnJ9b2WXdREH92fDT8KYyaXgXEyMSzwk",
  "key4": "3VuxNhqGaMbLWV1qeMZKubMuJtcNuRh2hUJUKcvrHYY7C6HqFNiduFX4eMop7pMHTGmf6UKZ7hMJvt32HvgkkXMf",
  "key5": "hwj97Pw326QL3CgK7mK7TfoBpNLtvhUq3XJ4pEjJbSgYztZW4TZmGNQ7C2XEoqH5SJhoYYPPaLXHjeHf4hKBk5T",
  "key6": "Ld5QgzXVufLsbK2pSKnKWv7XbLwQZuf173ZTikNn1p8csqmtQkFwM4buHwiDdPg9tXMjZ5pN54XbVKNiYNxT3QV",
  "key7": "25F3mKPySXZ863gXKTQmvQNepQqtPGbXKaoGHmxVxCfDkJfeBEeAZ3pdqBxAHWerafDXpAg4ryaaL7RvCC3zmSMN",
  "key8": "49MsEj9u5RMnqYQGg6F1qKn6u8p7AD9auZ618oLHBXKhPPNVomBfLrFCnvGma4WQwt1xJgy5gBXBrXStSwkRSY4a",
  "key9": "2itxymeHzN3zoZZ1ebwZWGXDJTKsPMoug72YNfCRUg5nYnUFra5mJ1dEncTzExKUyX9YzXsXMudqRevF1tt3732y",
  "key10": "4R89T58pZ2u3yZtrCoqcdDpdStpCQucdW5MA5JbsoNK4wvGPtQirgxo2FFajgqmNJVPkzff9caeVAu9XXJGWhxD2",
  "key11": "s1QatCXdrg9ozTEEUDgfD7StMmrK4cYWyaAXNivENhMH1uwyBsauNyC8FRA2WN6CW6ng2ByBdP3Eo3MimmhpTPw",
  "key12": "397b6nMeYr2iYYYZNLuRZzfjuGoKMoR7R5T9MBTELNJ8H1UcAenrJTDeRWDyQzLKtTHmWjaQgmWAF6bmdFQD4BK7",
  "key13": "69nqTQBWwWCbT37zFx4rQimAtu3Rmz1BLvB7nkcFC5ULo594LzHiFNphEiui9qjTCcBeH78pp7RdgaeRWJ7BKS2",
  "key14": "42D26CWauBRoNas2LUfAdiB3vUcsUevVBoJ8jRvVhsW9oSVuHwDD1UUrzHyzQfzuAjuECxgoebme9vwx6CLFEKpp",
  "key15": "25qxPgbR5BQ1RuhVU5WsVNrmiBeoM6qvFxonVq4dKw6oBs3tyovuBMNyfhvBybfRuYbEuWBykFMX81TdfqABXkrx",
  "key16": "dohoAU1445bxgm9x49YgPYQka5BpQm7s7kjU4cZ6uUvv22E6XwoNeVCqWMYtuEF1LjgYG3eaNkNgk63iB6ViiGW",
  "key17": "3pU32AV2zBe1wn5MTNYqaYrkYYfQGEtMpFJhJyEEm1MdupRTvyB6o5etfu3Z46cAK3XuSBftz1jPt8nZfQfqmsH1",
  "key18": "3srrj5TSDfmSywqDLzaCo2HCMbK7UoTTJ1RRB8BJmjKKzUDWJtZK4ud3LDSnYqo93tcy1217jdK6EAVF6Pph6yrZ",
  "key19": "LUi6Eh7pXDtVovprDrr7C8jVT7JQ1y77nX4a6KdSyn65Lyk885LXBwXpxFNNkjfuJAYS3aopcbHXKm5baZTE5Cn",
  "key20": "5KTYpgURLhK6HeuLHPQJXryVrKAJsN71xg2zuLxBdrYw1ZJynU1xJkTkD18RZwoqntoFfEmSoZ1f23CAF4gbW5vE",
  "key21": "3G4A1R5DCAVCLrGDqA7WCieB1oXRKpnvo1WxuoJJavWdSF3PmR3edSF8c1rKVme7rtLVsz3xpK2sbAgmfvJr14CB",
  "key22": "2QJ1iAutNXUgy2iG4XzRAvMjTNbYkkE6F7vRX8M7aHpUVWeaGeH9BU9dJvwzpykt2YNBp7wB1oo7rgTGTjw1xq8u",
  "key23": "3Amkw2GXfWRnarfGqLJEZJcRGmzZAAdQTJqjxK1BoNuYR6WT2RBcNdYQPfH5383QpE86fqCtxneL8TEVPbGZGP6C",
  "key24": "36KK65VoR7kVY9ok2fvEnxXKDkcsboPpuyUbTWk7ArATmeTyXRuXNVk4PQATcGtixR8wm74jbTyCJzFooep4Nsqf",
  "key25": "2Wmp8U9PGm4nZXceFDsGjN8i43Eo7VxoSVjn19GAafz4teoresM3knfrFTtXzR5yJyfqqMxmM2ozoLzZ6cw49SnV",
  "key26": "z9FuHBPqPk8tynGQW7vw2xZZhtxPFQhUdXGwUEf7HkxrUqXC5FiXWmEiYMAYMEhbHKUh7odGg1y1oUM16y2T4KL",
  "key27": "67gtUvMUCqaSw9BCWr54nmfMqxbccgMm4afPgsQEkpusoiYcjwkeuH7TxsSEWgg5E6h1ThqRrHK1pQpteZSmhyco",
  "key28": "5C57L1HTpw4cD73heiJs1puq1MiCCuvkMzqXGm3K8PPCb9HpKgYfwEUxv1xVPVNNFGxr1Q4Zme626FYqYmEiQqe2",
  "key29": "5sjk2CH5ah69WEeVhNwPX8VZzJiTT8FSnVXiYrSVUpHu2ksutUyMkJULM1Zgvskb98TLsEJDsmVnkTFDUpYahJkY",
  "key30": "5dZWyzsNzx8jyvGzFvStRCVbxCsJWJZcHMhHgWXG235tpdYpocjT5aoEQ2wmttZPdGvtGig4H9JPV6iWBhdKcgw3"
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
