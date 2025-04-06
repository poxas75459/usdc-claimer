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
    "4MTVBFry1vUdaUXjDMJmGMo8mZyDa9vfSjEQAmDKspZjh4gcLCVysHVG2qZRjcZi2ruzuWf4CzZmyYwp8MhqKYsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i37V4JvmaLhL45imAvt1HYoqZsUiLjHBuJ73Fd984kzR76Xd4iLu3V6W27nPv1fttQPKE1Ws99D7A4FSXYmtMme",
  "key1": "4zpBecdPKHEQ6npCLEYAb2nLyv5Aip5mqxd8ijRAvuFttbsLiLRLnWP3SFEE3yx2m3CvrLLDocPEnuQTGH7nfAD",
  "key2": "38FRueyWHzq2jvC1xg1bAG7vXbYEMYuZiqh6TMRXehCvW45nomLFUsMiioq8UKnYfnkcvPUKvHN32mLsrXvoQQ1E",
  "key3": "51PfJYJsHekqbQBGgSTbkTnfnVgPUUs4v9ztiq5P1Ft6NZa1SKyKSXYhcbsc4zHxwKaE3iaVdnGJHDnQSCV2haNE",
  "key4": "5PDpMEF5s7FdEPShd5Mid3yhJMUae2CJcooiRgNyXCwqTn5ccVUoUD6PKxX8unWLcZgUJE1NZuBi8ZB8Q2NrSVKa",
  "key5": "4QzGA6UCgB1yqaAqsb6WhZgw1uBec9Ro8Rv2HWPk9PqPzis4smBe7zudfH2mRc6Z1hNxgTnWgKses9vH3vxEppVV",
  "key6": "3wB8knfddxCSZwQoUJ3eUUGftvKjS1JGJCiR94sSGMsg18krLwsprm2TA4PhepmrT9PTzE6eHmrzaU3UHUiGsMvu",
  "key7": "2j2Pi8e62iTePHpKmCDzBja26KCVELfwbEFTMPtvRXNpFeWyHbWGchqqQjuBwTg777hJzxFyPY45ZSms7NWUYizt",
  "key8": "3EZWisDQTLayvUcJauTXCdgYQMJRaaVYUWUUSgMvdZHrzZimkiDcawT6zpmYTvpxUVaKWdztbCSq2uHCV3Pq44D4",
  "key9": "4eYK9XdHKJdxuKhUsRokuVzseGFXTf6Ax9hT7rzBq3poaA8dfQKMDQnctnQSHrXekEQtquGUNLp2EZuXERQmEq17",
  "key10": "imNgUUBLz6GgQ7u5Ynxf6kB35bWk9h4Bd86hhTfESUReMqDJEXA1551DBR55vEGCXBLTBJDzhHbC9FrVYjHt3gf",
  "key11": "67WnFFA4GvqAoEUGbkcaTYuNC7SxxwxTtjN6jZmCpWaR1DffdkFucZDn1u4icMqybwjfVBY9NWF9aKxrqXYP48qi",
  "key12": "615wCbzutFwvQtkLzZ74kznWbYMgh4wDqeAAQVCeY2AMK1SptZ7sh9kMSi2mgEthL5KU5X8FFpacKtmpWG1EKP3b",
  "key13": "2bLERdjAqPaeM96Z1jCbABk5bttBrBtb6sWBq7R7C24FVrbcYUrWHgqCogNMTp9qkFe2hQLAyPvVjNCxkMM3ccvd",
  "key14": "2HkdG9EevNWBSG7WQAreiHttCQfuoZ9SqVfSwfqfH9mpKya8kqCH5L62dPtZnXjR5sCLCZadehHei8JWDZfRQmxZ",
  "key15": "22uNXRRmwpn4sg8QPcuuas4ChEJDzxWk1jXwqtw7sXR4SxEJaP9qkomV7RSCGq7sKD6PVqC6iApP8H6NX5L4YvMY",
  "key16": "3Zwd88qYFuFQrTiTpZeB8R8G3DXJXHc1bJ1nzEBdppNfJ8vBYx7zLqmey9WRuxBKicfWx3dTTsYMyeGd7q4EBz4p",
  "key17": "gS1dVLxRj3p1NQiPNuBCYcLiZWoZZSxWU44sWyw4CGZfuTbzXvSBYRQya9Ng7pLmrTrnnsCUZZdBRsvwpGWNfoq",
  "key18": "2uRwFKtrJRS2HqxG27GqM8fFDpkgPbP1zazFT2hS3EWWrz2Ba2acCoUHYZWza13ad7zvMFVbUxJM7CU8QBmATmJq",
  "key19": "2Q7s6ZmE6ykUH5sVkpfDAPayPRikQsR4UWPfycu7rZRXiiPHCywa1EJht8TdYyoJZExqMXsayTtjizNYHbhLiscR",
  "key20": "55KUtVxkurSAiFG47KV7BoceEWG4jJLEsG5eQRLVKdeWxfdV8F7YLQihTMdmiGE4PxCAkSiJHyvK3wYtzv33HYoC",
  "key21": "2Nzm24WSTauSxfGmuJjiSLESsUJPUBbHFrV3GELGsyhJuCM653fuE9Qs7oezBzPktoiUeLKzp4U82xnBtzJoS8WF",
  "key22": "28kP3FQmHY6YHxRkNm8kLkytssMTHj24CbjnhqB7HFepVTHBe7xmYDqev9TukTVhEPq9b7wZZNdPWBYAKwp2jRcW",
  "key23": "56dLR6eJLAiVzorCamz65iFgLjEgdn8d1rvGsYGYjw5HwbZYsV2EpshKzS4V2aAse2yDcRxk436Dj7u21UtJYd7Y",
  "key24": "nn2nrM9Zouv1M2KX8Ctg7Be9NKSNJAA83ruEGQA9HgMvvo6BJMUyZUH65WFDeaXFnuM7izSFk3DK8SoHCZBZmCa",
  "key25": "RMQzGPbZUJiZthtFo3phUFCKe3snmZJxSGrUKZ9KeFbpz6FxH2c2KRmvo5qJ5A4gY2kTEEucazjVwDbigJnZ1k5",
  "key26": "3R4k94FPcD7RzmqyWMPYvhBTAAFfA9kv6gPose1sVqoEe2tMKzqisoaWBZ57GiUyK9keVfrbRByYzTTnJLSQ4JjS",
  "key27": "5DVeocVBuB9osY68YEFTFgewSpi2777A4ANfaqjXUQKFBqRUDD1WEFghnnQz91d6tjsNoWtKHvwfdqgwmsE79YEn",
  "key28": "4wQQfMPirGT2457Bj7pDXGVy74YfhP7S9o4bQULYnV4qkUNWKkkysmvP3Ffdmc58GCh3enAs1FLUaZaowYGH53DX",
  "key29": "58Xw56A3gViJN5Dt9b45YTmA4GTfERuPNpFXiCWGKUZh2CfeQShYkXXDqXYmANUtdAHb9gmUSiowZRznxJJy8P4C",
  "key30": "4Q85VuQVFVNQLL1ngc2fsv3kpNqwgaT1koWTz9engGSLvWM6R4x8fER5GfPtf4TBshd1kauZQiPYFMqAUGoR1dni",
  "key31": "9yyq2S5i4gz9rjSsz9YARdZEoyvC4JYxddmREw7zrCgp91ypwDv2Vc2R4uBB4DJgK2kvrRAVRFqSQFuXfGYLfda"
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
