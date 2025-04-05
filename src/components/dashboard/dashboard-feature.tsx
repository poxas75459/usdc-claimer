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
    "4VdLDvNcQVRxx9YDuQ6gyi3xpbk5UzzkZ7Q2Z1vVNBdSiSVRVpG3YGMkhuyo3Qeg3XR5YBxFcsCFKH5GMBhADLnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HZVPAm5c4u3UonJer6hvYqECPqxtgaZ7JY1Niquspf8y5Hk9Urs2m7k31ePdsJzxmSfWyoKzqw9iJkQcqvhbQHL",
  "key1": "5r48tTfcBf4mmVmcXPeNP73LaYAy2ecFcZ4FyL6kjVH5jw3r6hKw2GQdWqnG1CwNEkhtopQWSDMpDSqrr3ZzfKp2",
  "key2": "5uAiYZdnx51X4vE6cha2FuX3NBFsXJ9FuVpcRJxy9TL6aVzfaittdHh2yzPyvQTqN8owUmPFLKVtKFirMRH9U3M6",
  "key3": "fkYh69ne2V3ev8aApJkMf3Ev9SxKj3AtakBEufGGcvyjdoyhE5V4onhqdLVf1CLwH7wEoNZtLEw9bzNErrTDhTN",
  "key4": "5S1hBEJFfSJps9qdKX2qLB9KggxKXo5ArC2i3RPnu3AYXv3vfUqPNzYNAQrW1tXNRHYE1L4zapDj8WQY9jU9sxg1",
  "key5": "2zTDhrWo5YhEDjjTNwE4LUzybEpqztsQqTiU5CBWr5gJr1UR3Jfii4FZTFgsEiqJVf5BJ9tqJ7TdM8qK37euN7t3",
  "key6": "2cMFUDVGgocxz5Usyp8eTFaz8bskuwA32SGTzbhgpEM7cTs6ji5WZu5iixZzJFC64MaENB7Q2Lof3FQxTE78bS3c",
  "key7": "3SPKfiDdVAv6MqYeA71nUoSb7rZ6r8QQmmHiVtVNQnTJzfXsXMwoibJbWZpQsHM2MugnM2oHajKA3St7vEqs57Ca",
  "key8": "hCtx25Pb4kKLHU5mpquTmQuSyVifhZq2G5qq7uvbyencdzHdysrWMZeXC5W44Si5eVbMuWnJD7a8dCSJD6PsSoK",
  "key9": "67eq4xqmDa61pyWi3QPjtnMdTuJJvAAUfGgjAA2YYpWEFWwoFTHQ4Ux6jhzoHPx57NzALxPqrWFihHcA8S9M9o2G",
  "key10": "Qko9vATcwwFWr7Mt5Gba5g4MGsLpRthNQx2SuLDxSwK393U8zHydLJqzprN4vbXrUvsuxebZdHmo8myWCiFbkWG",
  "key11": "5BUWqUPeUGqHEWs6NDNguUsGkGE6R1kYV2Wv9xu6GM5v3EzMFoWWDQV31D4Ywm5y1dwGKBYTWmDBabNkPUwSa3Zj",
  "key12": "5TKx8YYSTw1PLcdHZDi56XpubaTTmkWkKSEKq2YUAyVDdbjRRkTnENRmEuUopM7fM5zDsdgY5KSHcuEyHoTph5pV",
  "key13": "cZgbdwmQ745beHndtufVpRBw2SbQHhMFFqfpQJRhXLErK94XWEA8cBsXWNAREKruboMQc4akMUBBLXLq16raUsS",
  "key14": "5ELu8KjfJWx6uRXLbfxxBRy2dc4uCEX8J43XKasCrio2UH4RoTeBzGoauCwj6qYZgxPThbTnN1SDdGL1k23ZhGGa",
  "key15": "4DdBcBAd66j2oFrf2kiyss8kyLt1KxiNGVtm4FRU1gaA2bxSS6i6J3WkpvdyNJ3svfNa3r7weBYnWaLM9UbA2A7H",
  "key16": "66u8gYf4YChVWTwVfBu1mzr1cHDgiU2kdReq4HuCsnvZVf8edNDcdQ9npuo6NPEQsu5fifpHboaPNMgP8mPGZuay",
  "key17": "mExjPNB5kjk7xcWtnziuDWkBx8cdn8CEvWSYuSChSyJ1MeGBvKzRbrSQsa9ijJbboQcdHrRJx8X9dnh3tC82tAJ",
  "key18": "iGcdK84XzHp4ejpfRK2FC7JA3cx6UsTidN7iPo6kogDqDpiUUYvSnXZUKRJL3CjWuRTHUDc2TjWzWPNAixTz5h2",
  "key19": "2Az5nC5bbsofGXVnMLJVKtbme5mwXMgLKfrriBXvu7J7Sg2ySSoD1YEgHGf2wYaPviXm3LiuLEHVnLLVdHeX4JRm",
  "key20": "2XKvdd3U3S1xiTbdXrDYY5w1W67tKN7hiWowm868oK81irYNd28Qv6Sip7ymqSUnMsXfhvES5zuLyPejiM8FqVev",
  "key21": "39FRo71SgVYMQYbdvRxGSNA8ykdPd6TL5HLyTvPbjuZ9J4qL6yWxbzBsschSCX18xaQ8SAQrgAk72CroP3yyajYK",
  "key22": "5uTVfmUi9c6gkG97wSAMsps2xf6Nk1uG6CFJPCD3Q7ccgy2W5weNdRSidFH4XR79Eqzo413mYmdsfdNJr8228Hz",
  "key23": "5WZv6k1dFVVwnCGsimsq8wUx4ZLejDKYUREsyY3p4U8ihW7uZXeZpafYbiyPZzF19BFsZgJw9X5teZ8DXYr6dFjv",
  "key24": "3qHcmhoMk7Pame6sLQiReWktk7NG9FFTowMFDBei8U1CB7sYw3KN8T57Xkt9TczYAdvDwYm8ZcpWWSaAE16cRna1",
  "key25": "4PqMK6dbVm7uvF4yoam22ZTc8Zh5BRcFeDaPHLkFLamWVQ5PET1s2RDaH2kbtR3fbEofoyBuE9VUzoWj52NdYkuE",
  "key26": "5mHq33zoK6W61jbW4Wp5WQCUBsdmsJYC2jHDnZ1WpjYMBgxMy9rZS6RqDjLc3rsCo84JKRX4uC96Bq6Fp9HC29ee",
  "key27": "49hixSw4iDgwu4SXMfCVTDuEWEzHqmKbZv3wDHEHLa3GdsYWVhrzhN8TgdEH9yXykvuAE6aUdg3qndekEVY6QhLy",
  "key28": "5Dxr5xc2wSeM4pZzgzE8QFeG4gC8DU5jTB5qkRNFEPFxaXEiWxp4xdbUhqfXuM8sU3gyxq9DmC8UPenTEhPgnBhX",
  "key29": "3npV62VaVomCsaz3ufwGnWrVAcA6YT9Waeidm9xZzgTNcPiMRT6Pee1P1dy5UaJu4AnM62QuUYZW9U7DZuFYosht"
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
