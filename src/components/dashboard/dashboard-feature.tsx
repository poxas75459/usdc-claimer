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
    "DGpVbZBEDBhGwWEVb7WJKUZLHTK5yMfnwbDKDP6Rn5x6TavykG3Nz8neTjFJzKwJJQJFgVNVpmt7nutycteD6bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qwrw8MzErtj5vknjgcFobKzzNh6Wsh3iDha1DkWXh7PcYyYv1idPZLdJPH7XZaUArmAqL6K1XGt3yh5ubs1bhXX",
  "key1": "5PPXUCdTEZwvJsfWUJ9H7eHnakXop8VGM1XR9Mc7ZSe126AA2tGntuwSvZKspzULfGa6zkzgvNULSNZAGxA96Rq3",
  "key2": "3NKN1GSviMH3Coq3idH4LxZweudvY34r9xNwHEQrpqox6Upo4W9Q2Cc3CfSFktGQgtq8RDU1WsYdNp55vFsMV74c",
  "key3": "5jNPmU8i2eisg48Z4LU4AkWw4CUKXmzoWpit4i39Q8D7UryPMvLJzCp8F8fnBFHAUa8taRBZpSUThysw6nGv2Ckc",
  "key4": "3AFEC3dZorbQ6ruBTpftDnGDib7KTtmvbbDcAzYV7xw6bUtVAherDxMTxAZ3op46tYEFeuMuMtxyY4qG8rPhC6Ej",
  "key5": "4jtkk7nkXMVrGjjyKs7bnMnpWTbFSXGcLQzuDHS21a9eqm6mha5Kco9fWLXGCS1uWrb8EtNjkDKjurKN7bH82neW",
  "key6": "4aVjHDXfHt2ZPesbQeHKafjApvzqgbFZfocxJCG7wM7QFKrTzZcc4pXe6vPegNpZngpAqcT8eNKtbJYca69c5f7q",
  "key7": "5WtUUL7TL5fD16pohDmvbDftt2VauV6JTuD9Kjonz9ko6oLaJGWkmtiLyetcxUXCfeEELodeC4pbknTDv2C8Ukgz",
  "key8": "7TdVqdwaapr9jAb7Fg7cvGEtyhiGKsiAmkrGmBG7PS7wzscfBWbN6UTcYrhPhufC4CNQj6hh9xup6cmo2JKD7p7",
  "key9": "5G4FAZZkoueBqMFGiPTHRdEaJRJsPrK3PVDUuGj6GkBhtwV6gCRRpZfQK2aiCR6Avsk4horzQHZ7tt3ML2yexRfK",
  "key10": "WBMXuuD7oKyBVS9UiMeHoHvDhw2aiB6z7y9RUbuL3YyASzKqD1UMtLBbWZ2mzgNE2XtBn7w7eNZduC9JweVYdE2",
  "key11": "3xnhazat61gJGoBjftz4DSubhF1CMVykMXUrYQQiwqwmifKWgjWC9AVAHUApcdZic1mWgoKCazG6hHiXsuABkWdX",
  "key12": "3xvPpGRFmkfPS43Z4n7bdwt2Bo1AqoXhBojngjWc5CLxfpbFegFKu1n7ZpYMKEW4Zi56W3Ec7NX3oTgb9tcTXy8u",
  "key13": "5FH8n7SBX5WDmTeeHFaqfiUY2SUTnWgwzqFHyY6zUNJyyUd5n4mgYZPrXYsBTELHeGdYjAncEhW3He6CQZzX9MXP",
  "key14": "4zs1U78g46BXAxWPnoz16RWPJMAdjYJ5wp9tR5MMndDuLBLhRkfZwpdtoksVjKSPTiNC7vNdBx4txmfsSeqU9Q9b",
  "key15": "4toGs8SKidzBzK6T4vJ2LeS23FMeSpFeUj4pFA5TNwn2eB4MMnGA2vhtfs9fAZMkZHZWKZNWSWgqFWvajrLxCkDp",
  "key16": "5YNpKkLUFLi5F5yrfMHeT7jcmyJ5oMt85dRXqJuiofEE1oMycFRAk5DNxacLdmHA4QnmMK71c6zefWuBBxhUqsEn",
  "key17": "3AAk7cK1sPBfqHBXrjFyAHhPMUDoso8X4yji415uXW8RZnV3GFNymu9TxYUG59RcbGHrPZJkF1WETVTSoHYobmhW",
  "key18": "5bZpR4twPmYhV25FzoGnSWM6BbQ9FmiiUXrT8vfHsFAJAsEdoNZzQQX9i33rMi4QywDWpk3ZCwKiFLkyiJw1F3Ai",
  "key19": "2MVNUQpwME9VkeXZbZTYyu5ZkRLD27Lk7F8S5vUHtDyTC72Uha44jfBoLMb9xyh7eJ3q9Xhqt2tGJDkh88ZvQTY9",
  "key20": "CjXPe7DaaMmpn1fV5FRhoyzK9JC1WGxMvNgAtxUtrMj7pnaLuywsocoC1gx28ND65sP9vUFXX7AvFBUy424HLPd",
  "key21": "4XqXUoJTQfHGdqoBLaeLFeLhJ7xLQDbLZrXFc5DDWRFZwfoCakbyLvmBHAtgjCV6XMDgk7rZXQcmckNiw2ymnTL5",
  "key22": "2iDbrNRdLvtAXGy7xbfXoqXPkEHQZd4P3YGPSsYBFDK3bsgXWzAipH6V3VfJpeksGCa7ZXTdYk3TM1Znd5ekkzhn",
  "key23": "tWfTX7RYXEBwVABCG1NEo27RQ8bHWZrDKXYW3bJU4zPTvNyU3bEzWPkD8EtizGPPxtjGuof7T2S3pAexGNsHWhJ",
  "key24": "32h17ub8RMr5zRtDC9e9MzQ2vVoKAo4HoGZhpVjiE5XLP6RtLxFbMgzekVLE9Z47k7J5YhW2LmhJc7nPBmA9XSAC",
  "key25": "22eMAFMpnpEUBj1UmFXvXpi3C9EwCHF6aMaPiggaAQ2zNtm3M39uP5qriWhLN88xNg1MiodtfPEzHgYiYwNvts61",
  "key26": "4Zu2sKJMnubCGGpwGA2WxLu7KY4XCZLAEG7LgpCLh3FQqHUNTCDdJDuY89ZfohvsA4kyZyT6Td8kqGMRnN7RDaF4",
  "key27": "3rT1tk7vjpR3W2Xkrgko2Z4o6xqwwQsnuR6qhpSFUsheJvuF514TBGHJqfm5FLhTBxPnr67hc26jghGnGLx4WtpF",
  "key28": "4sMCXWqs34YfoESFTJYWfNuNrFLeja2ksaFRFdmRUV8wMikyfwQ7LZcCda5LpCqC7tBKAdssGFeAwsYTh4HFh9AC",
  "key29": "5mHsLypzvG97wm41FXbhWtgPAu3Cv6PQxCbwp7qn693ZvfqknAcFe33HwQwvDezqNjEJ5AKiXjenp2GouaEhJnP8",
  "key30": "3vHdMCmU1y29bJ1UFu74MrRCumbXFzuHydUFrNNGzVUgHNAXBCGkn86EmLKU3yCdCdgqaphyoHcaRMFQYLrR85Y8",
  "key31": "4u563kh4sBMATiJn7sR6SW9LAoLAP9ryhUykhy14iR5bzCE4Ep8C614r7DrmvtvypcmpZQyb9tbE8xqKt6KJRj2X",
  "key32": "23THtyELSXDDfYSxLV2HjbcZj3Z4T797HEScxVygMsYvXZAXHJib7r24wpzjzxBHWi8bemxQm96YgnNj6djVukvx",
  "key33": "2uqvEYfhVMeTUS2nuWPr6isVDEtcJHuewPFMJvEX2piGSKwpnNM1aSWnwVtBzrVTSPwhcRkgea8m4sSNHoTXxQqC",
  "key34": "65qYXHsGRfzEij71Ug37xVfHHReNsTgBixwJcaCjAqqgaPpQeASq8Nk3uDYvovrnupFkFAkzFdsnKDa4Yqesor16",
  "key35": "2w21GVGmNy6bjLZh6iwCUiJxixek6vUuwx1Zfv55PdEfrTJC9JXxdgkqoAHVTPDmt9R1Q3x4GJtcg1pmSxRxsTXj",
  "key36": "5TMiGpzMNWhtfpyvcub939XR6afKaN2L7ALHDJxtrtoLHxebQKHdwjDVjz6YeYHnijBRwAdsZD9mw95qfPiybZdB",
  "key37": "2osufeQEpWmzL9fU8apW712GoAdS8L2RQuUi9bSG6YCdaqUjMpWsuJrQ6Nnor2LoiLAEJtsUH44D4AmEgmPMXepr",
  "key38": "2dGwLXZg1AAc9FQn4xppQuPaBBYJeKWqvdZKr9ABNgwztkFkPwrb95hWxFgxaReuvPxG14yLhbi5Swm41CqdcfDE",
  "key39": "hEEy5wyM8eBu22RgHHnYVoBKiecPRW69o6oRS1UPk7E2rkQ85RYhPg6MZ5Q5qXAE3NuMS7o6s1v2ZyRVv7aV8op",
  "key40": "3toNBoLXwdRTbc82JPhGnMNoSMFqsYoygMFFA3A9D9XrhV9wnnY5tqHZYifYP4cLvcGK97oHNsD9xnkYEYWg5rHC"
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
