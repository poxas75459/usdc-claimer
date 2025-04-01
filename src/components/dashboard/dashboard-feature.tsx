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
    "3a4aq2ezjKHQdRZ5utatjp7GGaQfL88wTP9b3LcWp8xGxcyzirvbUkrwvgzbW8XHRzQj9XwDjZxy3LX3yc1Nca6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBcBghN16UaWoiuTgohNRuj9GGPpkUtdHFTJVyLm4woTbq1fQ2Xd4wbaRCebV8gvaYYqZC55sHGpMQwEcD31k4X",
  "key1": "5WA5nNsVQMCgbswkyJ8Gn4Zdvby1n2VtiybTqs3sEwU4DTCdhPZwcRwcEYrzKR3peg2NLCZi9KpZRLKr6PyBkcBV",
  "key2": "5hkhhisaozfEcp63wj8F3AjErX4S4EhnqieTW1pxhyykq2QmttSs4cBeaE63fwHUPztFGQy5tUorm2FxdtQyaEun",
  "key3": "2rTKma3TWYBbiqfV5gg5MTxTjKS713FupSiz7kkcZDQuxjP6UGUEchxYrADs4qB4G773EU3BqUnQ2kejzSBaTFbT",
  "key4": "4QtuPUt9F6wmWxvgaMSnP8399nUDoEVEGtKTziZZe4uk3eV6LJf965kYje53PbT3MihqeWBd4x2jGrcA21qxNDvj",
  "key5": "WYjMMcZ8vkgP7MDaBKqomSfBmeVspzRm75obDxoL8mnF7JW8MKLtNesZjuKxE4NivigSZhcNfexv3fUYkrTETbW",
  "key6": "yQbnGXmbMiqjF4SkfGFfQQ8v19S2uSsLmuTKoGi4tH3iLT2mhW3YcMDCuc81yfCGGotEzoNCeCyhWfr9DDXFrS6",
  "key7": "5T6q8d5po5yFv9KoaPtYQZsVHv14aVVwLDE7gMV2uLL5LwhTEhhL93QGN4ywRdpUBrtkT8pm9fn8creJ2fdVybLN",
  "key8": "3Nm4B8wBTKbaEVKjQrPwNP4ibn8tDDaLjYtEz96TpCXN282bG9VqPciRwW39szpCB6h6WebFHVskQUL4i3o9fGuc",
  "key9": "2Jj635a6sA5PNtXxWc9dWCrQJppUq1UpqzpbEZnhSJVvq4frWeoMHBgH9uobJRK3KzLj9vF2BjKFUwm1rB7NSwph",
  "key10": "GXpTANDt2Bdx3oQMHncE6W4C3ou9RsiiAhqxQy2cShgbdpUfLyHGEsfB2og6s699DNsZtihaC8dNHKxGMzcrWFe",
  "key11": "4PcNwDmemnsPUTmxvftLgx85hgXi7FHNyusWEf4PB4ymHvVanRC1dfGyhTux7ydEmGbqkvZu6wXoNhFAiT8ZZiSc",
  "key12": "wEvvJrJwyzc8GsS4gbUWsPAmbiYwG5sBQw5Ssppg6NmXE6iqFTuodkjabk7XQu9GnFpk8CNkUx21P4k5WdwqE4t",
  "key13": "3RUCKtFH9ouwCxdCKejcLM2yfHeh9vRyiG8UoaofkibD3hAS94aJCgWr7hY9jbCLwNokjts2EBzGQd4UxJGq3pgN",
  "key14": "HMvivgkJ8UiytU9DowHgCaUo2Hvszc5GooxuoMn7YnjqhrMGjs8xDTBY3c5eoxZHpz1Sdo47uTFLPDn2YPQs2Yq",
  "key15": "4L8MUJfFZwo5ZHinRvrDWBiV6UWHQ485tEcWQ4FUZXZjTppuEGePXzdpUTMyuQMtr2gXeD9hh1ZX5dnY7qjpN8KT",
  "key16": "72dV2sju2mUCUQftBRTnN28XXwP5FKoXPJ57L4qxjYNKu5iVJqE5hb2xt1dDzXsXJHkXoyGc9VGG7Nc9brKTEt7",
  "key17": "W7RtHBcH9GqzuFs9F1XsAwSRecBAQXe1pKe22qR8iEPgL78wH6TmmmDGVUhz7NAvzGeBh2uJAXvLnVY3GEgZMCR",
  "key18": "3pUZqEn19y6UeWBqvRjKrsNdFHncLgpRkzRxFTvLpGdYY4D8KoThddyigQNqtY2b9ZEF9gGg5bd8C4RE8Ng1CGAz",
  "key19": "2XJPbkRV5PSs1Uqxw92hTnRbMewAoErVDMNNsYrDNerytopiFtUHuWgen66WZR6DxfkEaNieiBn3PVsaaHm4eW4D",
  "key20": "stEtUiGPXsYCVkJnos7NYJhViK25tpiux3oK5GX1aufwV48zSLBh8x4YpjoynQZ6K6TkjF6EEfhEZapBquPY75C",
  "key21": "ZTXusf1BkyVqqVhiRyBJ5nZ7PYzVT2QhbFKHhvkncheiYqW1DqJHcfD74NhaTXSFPpJarfNZaoqwD989kD2AaEo",
  "key22": "Br5UCmnfUpbjDN8P9DSRBJHtCGQJvmm4tdFypdHLcXw52EpfUsdEfSgnikQmhpRRpHbpM5SDrtTUqWTqyXE8kma",
  "key23": "FsgRB2M8D9yFhJMK3qPn3oVb6WPTgZwhjtrLrkDCwrgqp2htw9ZLtiuSYpxg8YEeN3Hv7ofEPKfq3MZj7BsyRg8",
  "key24": "4EsigQZP9GoYnzeeV4A1BzbvJU2cjL1sGpMhMrv7oxWhtKt1P8hnJdEeDJGvVav8A3Ky9s2f8ZsMFY3gneCXj2Nw",
  "key25": "xG96bCwDACebLktm9TYaEu6DHNGcRE1iv4XFmwbqdSReuYA7NJRsi7nv9BWtffKXhLUeaoNaGanfU53LrSPsYTV",
  "key26": "429upbD1iQfvMccQidC9mJDupU5S7kJaAT4d6A6ETQ6cF7uWKzotFhepCrXp65fyh48eP9EUvRtdTuqmzyt2ikNN",
  "key27": "5h7zXe3nZ7qD8acFs9eWR8Hd4gpKwrAjAfecKfzBPhQtRMnFNR6GFqk4YJiv61mpS4eEtXZCbMnSMYX2AQn5yZNd",
  "key28": "2epxSiZ6chUHvQWZunomjCHr5MuJJAT1JneWYd1CH9q8GniX3iBFjqFp7gpeqtpbt2ywwLhqUe33Qirx7CkLTNt3",
  "key29": "46AnZDghFd3iPVmZDnmTUdRJpDrjEr3W6EKeysKu6XMJk6F8kzm7g45bNk8MYVuxCDm6YrjZMUdwbry34g5SN4kG",
  "key30": "338L5AJfr3v3PFaUcxSWCv2LfhSwCu1yQKzBq851BG83f2NXajD5yXVZakZ8LFbYf2KC259b4f2msJSFsJuqMcRA",
  "key31": "2LoiaR1js5KDPKtfAmEBdX8CaDGhbgnWt6LS5TnAXJ7BDRMfnNMSe7SCifrfNYXpeee8DXPmDmaXDwdPrwc1rtXu"
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
