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
    "5bQTtTRG4Q5wQsfLQoEPniLkLWUijB2whnnbZaeQpdTYodGPZXJvJw56UVtiuFDUeLAvcYAwaqsoAd7Wh4VBTUP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQV2YxZCsqWvzbsNP8ZyZ5JKaJuCMZJ29yMRBAajYRnbqyM5RK8zwXR7gXAWz2jHK1BQNQ9mFPxePTNB5HPpq1S",
  "key1": "3RuFKrAzPqUbyoXwbfWMfxBz3d9nj7aFKeQSrt2tY5e3k4AoD7zDpcQxY31WqYC2KKvyaxcabG5DK7UA8TCgnDM1",
  "key2": "2Zvgfskt4GwZKhZLkV4pgzLv6y5qNXmMkDUS2u1dGaaNP5fgcBwxPUb7jk4AYyKW8XVTVad3ZHtebvdBS9DVEqR8",
  "key3": "2qUcQVGBmXmfWVwKMvXpeEJ1ZzUgjD9gsnpsu62wwBK33NzqDFfwHAPFtdLAfQvyETphyYQFH1WayBBofg8Bdg7w",
  "key4": "4bn4YiB19ZBvxmwcZvUvUiR5eztyT88t7nKU5U1BeegTGcGFJ58Jx4B2ASobjqy2oa4KgtFmBnNE5fM2LZTCjBvY",
  "key5": "4C6sHA8SajhNShwa2xeJPU1rD7XbwpW6FHJkRfX7f9hLQtuj9WWeZa46fChn4YiVeiJHWGNqzEYZGMmaj35A1JMP",
  "key6": "5EiWZ8KLLc782jvS2EiTBFQEuWPKnqQc9T7nhGNcGrW5pKC46jKRqRmL2Yiexr1Uvezi2em8CuyBjRK7eNFfPMUb",
  "key7": "667dsGZzBnB8o4MhLkEKbhK5axk656stVchJxUr6vmDoX1Ake2soBJxwybZyyNrVAcScZ8XqhRZoPJSJmfTD144w",
  "key8": "vH8tqq1z6NVcU7ivp5xYG9ik6PrQzxt62PYuvx1vQWRihg5L7Cr3HLeVDASGKtSAgmWRefaiKAFVMoKvNHMyutb",
  "key9": "2UZrgw9MbRLTX7PYtJuriYhYzL4AcqbtfCNJ2YTspkXv2MzVvSSK3F5HW3iS5MCp8Jq8pirZP92btpp4Lu4t7b6g",
  "key10": "3dhWFpey5cxDju2Xsq9degjUR5P7Yqm7ayABGXhWXa5LeW9BtqSZN7sv9RzwYCD1hVcgB1mPtbFMPpSSHGJN9mu7",
  "key11": "2sWYmGbTimE7zEM1JjzHhVAcBgNCEK6NDgJYVQxhhCq5vNxXiuXPAxksvKSsF5f2DvJs685TFT5HLgZQgz9F1hdx",
  "key12": "2RKL4ZwYkU4Xy2ZVLegfBzDipWLb33Fu9ty81jsJqPrSP6EUhjLbek4zKaxEfE7LbmKQUY9RujRhAnTgi1AoWvKk",
  "key13": "7A1qGNr5ZhbPUNJjXXirkarLb6oe89KUBpr82aKettrdwnDBqQMHAEaKkuabsEKyRjUN7BrzzUpAMQiKscxLyeu",
  "key14": "xEdhUdXnkvcKpi7YAZxPaEYz1UwMr8NQbJEMgtAdJiMVrPyAULK82FQTN4b3NB6adYtc3iAfBqTYsLsvr5rFB82",
  "key15": "3YaTsj8ZTR8RuuHTZFMP7NtoY8jERNRZJjD29yQR8ymsmZJCrFbHC58BaFtZ6QFaN1fXE2ifEaLTZ9YiY97b3H9E",
  "key16": "3RY4ULH9seAiXEz6Q9Ym78XswbipqSdL4RByZ7JVgsfsd2fjCrUyKvxkLcsMmpDS4CpBBJkg2m6JpCzAHqJVuEhU",
  "key17": "2Euvu2wXvGz4eJG2duzQiiMbeWdE3L8jVkF3vsLQw9haY51UHDjPbyV11b678XXYoaX2KrQw1tABgyYFzK83YXyf",
  "key18": "bRyb3deySce1BfE15Ji1BuAa1BPJLntbmYQyPq3afar7WGDqhPYAB38RF1AEngiswdvJyEFj21oYeK32u9WFqtp",
  "key19": "5VxgWAgwp377Bc14XE4orgfRSHgRd8VGzU6KAAjxvu8sRQt3drMtoyV5hgb2GEtd64LoU2HVFZvFuv3Gu1zWjuKX",
  "key20": "2AmPfrFvMy8BGsVvNP8ntrpNfMBNgtwsQBeGRqZQvUGaVsz2Tb7wPbsMMUFLqwG8bTXurApQKevQzJ9jPuNrtZup",
  "key21": "446EtWZjGnJdDN8NhUC3gYS3cqPGvsmwaqCtsmoquVrud4gXzcFL7K8Kst6f1iEC7N184Dbr7icC6CMC12RWzyUP",
  "key22": "4rkjNnNauc4AoX1nVEBCnz8bJH5XJ5EeAkM7MDiHw7NEP1fpZTcKnZaZibzFyecez2oV1se9KA6MyTrwKF2Kuyyk",
  "key23": "5SjA8CbuJWoKb8bSvpaUxRcP6oMK8jVVnUcEbaAjBKHM8xoWpHBCwNiTmfFLhwRcys7E5Q4XYzVbL1bnP1wjYpXF",
  "key24": "5EzF3uxLUaTDA688onstGwTWwyFmvVevjxbSCa13RfR6t3Goh2Cep9ZyxU8mpBLF6Hd4LgcXnqP2t94Rg6e2N2vw",
  "key25": "3v8rFnhrjwFNcVWtYiMkfMaBS279q7rs2qN7Sb7MdSntEt9NTVKspaspKaWZXaTp6ghbvJsgrcWFf6VHZCZ68oAK",
  "key26": "dro5EykFGECauBKya9DsLJuBa3CJz9uco2LCBDkncUjuhLMyp4ww6Bv3tR11jEaNqbHnf2g5mGsZWyE4ekhTYj9",
  "key27": "2vywAaim5YUsbZ66MFodDoYKbwThyY9d7xUfkDQcSkNeUF3GaEHNngu6Dc23KwDmsSUPuf5XqQWZvA6TdLLMC3pR",
  "key28": "L3LY5nucgt1ciMWLHT5pv61iAm2k7YYFKTfhee9Q7udSe2m5jQr8eaktvYFf1gSHmVdjqfGQcsYjMkoLciSeadb",
  "key29": "KLQgns8WnPriS6DKGh79ZM5FaH2AV2LyiiHzHzZGnXpsSMXhoLajp4SEMYQxtPUFEKV9cwjDXUPFiKQCn4wowxw",
  "key30": "4deSQCfHhvFKdfu6NNE4YtC49yXSgrosLWuTXn5dYFxomr9UN79nEwLcdcY4nuKgq8obfrTubbfaCD9fry8HAU4u",
  "key31": "H8kbgpnxQkd9bqpQV9n3Xju9jteRrHzXpRfU5Gnu98V3wEr7i35ETbqrEcfxr6KaARTsnzjidZjWvXcmEoW1taS"
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
