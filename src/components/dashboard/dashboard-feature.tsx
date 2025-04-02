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
    "65HeFUUvxLiGQqNcYzpogjUEB6cQ1EcZZxRL9tf2GXc7wDcyjsQkor6jHJdAdaYtRG1YTWDWCBY2TLh3Pkjryitf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GagR6bgcwvPC1shmsBbTQajS2i9bgPAaZ5TujsrcAnVPyvXHn4iXCfuz5gw5mbFNjpJArEKQhYziMeKPs3To7bR",
  "key1": "z5zQzRkKRtSRRkCAJ5dPfA3tmjBQ4S4T8LtTqK7apcoRi3tHbHtNxaZx8sDVov8ZmYsAsqWRoDMGC9SKaNC9Sdo",
  "key2": "4WkrVbMCvmnB8VzseevBy2DnBA5z7mdZeKhLRXuighwPiz7G9PJWJ26Ywg55mzCgiJDySZSEi3y9fvfVvXZBbsAK",
  "key3": "sUefzFD9puMknM6gUXrmAXtFvE5CiwW5a2GesJc91433rKgewpy96zPpo4AKuiQC6jE6ocpo6RtKGavSsG144c8",
  "key4": "4iYa8fSfmJjaqirNg6YH5bJ1NCQVV53hoi7ZhT2X1YNoj5AkxVGwWuGUiE37Jygxtjq9scJCgX5J4ipSwKTFgMt9",
  "key5": "2je357bdsHEV5CsFF4KsJSrBEMgaW4RcAXiGb43A7hmKg87yRBV4ZXBFTbabrKHj4J3EYSuVdHxJWVRrVFMRC1sE",
  "key6": "ePnzYEZWbLwjWeKaQ6LtA7YLLN5S6rnvoAirrPpzmSuGieYwhTTXgTnZnY6Dq9YgN9DhtcJeGHYcNX5n1wrxVPb",
  "key7": "2FAKPbRAuGcUu1aVVjoL3ady7ipqrB9cMVB3HX3nmAjcPYDr3AJ2wdREWSfWeikisffAVbphVM8WtWCow5jRKEbP",
  "key8": "4HHbvzYnFriKcgVKvkkPJD9VF2FF4zfKR7J2TbnhxFWRo78ZtB4jDfEipmSGw4k1r4qAQvqyUEX2YqLGk4WgpMem",
  "key9": "9WAsT7dTjMzMMee7eAmDgQSbz7adagFWiHSjbdQf5mwwRZ5ZBq7FwtnPpaNT235wPYdRrKbdo1UMKszLEHB9NwW",
  "key10": "5BZKzQHrJM3EEVHRLBaWuyMpuWk4B2SM8AyiEkNo5qGgDG3nBYcyc1VVEsZBcrb7czvv75Ydp8EKmabH9ekddiga",
  "key11": "2xrr1GVH1Tk3dwrHvcCdJmPS44D4oBgtnQRmghc3mt4nZ4eY5yjTCVTpArQZwVsLxgNe1hCBPzaToAp4JCEcNigw",
  "key12": "83hTAwK72yrbpdqheLXhuhLQMtrXZrHzE6KJXbutTDCzTkbpE7WnBciKSy3kqYusecihTeu6rJJrdY2VZuFcbsm",
  "key13": "BKAStwwwFbSme181Z2p4iEcJJgiFcbWuVPnoYnd4vmZYfPpvbVeu8zmMsRXoFwgJkLwBns7cmW6XW5gKtNRgnhP",
  "key14": "3toqZ6RusLcFBnmCyQVwRciva2gkaVy5JvwiCFkbYgvNchRyr8csvtWZJTLcxbxh79292GCEvkE8aN7pxmzg3uvC",
  "key15": "2AQAHcEMBfP61oh31Ru4x8TfftYDTiht93bsqGPgAZP4EgsXPamusA5bUXVEVcGxUTSc5ag4kSeemhtfxnKHENGq",
  "key16": "tgKGMvZkRsk9ZuQuXm8cRmasiwRxhf6vz2fo9eTNeRQxs23ayUmNfaZE5K3hdtVQhRAanMAcTNSGXGWTbB8E4AL",
  "key17": "5cnyUbZUSMbYK8gtUvP6yeNZ2ucqrxF4kvxbSxx9oCdzMRV6WqsLzGAiVn91JTMTTUkgxnbinw2jdNQyx6oEpgtu",
  "key18": "2HHjExTyc8rutpgLX3HMW4VMPbYzJ1MEm1undTxreZsyPWdZdNCjYZ9TEFwN7qM64nWpLR6YVgF2TGbR89DZ1HEY",
  "key19": "3WRuLkeyefCfpmZXn5Hb1E4jy4yJxKW4dHM9PHxjXmm1g5UZsYPBi8Xcqt5Zx71j6HYhjbkohw5ojPvapToXFqJD",
  "key20": "3SyMBByMXcUGLQAwnEaevn1r4yf4V5cQ5NuisdYj5hik46MWMF1tveS2HA9Jmbg2ztBcf3T4YDmVgk8AY2gfoW1X",
  "key21": "3FdjgmMRJWCK1B4fvVitPJWfUjPVLQresMFRm2feXv6ebqWMypaquV4qrEnx2sTnMeAu8obLyfWTHGbmomRWQqrt",
  "key22": "5SdVAivFMZkLjccTsHQQQMewa21KJzBATqP5KPfg3phfpFEGjYK1LDHidw9ucmErTNt4K9RQEvbSVjhTVEwWv3FR",
  "key23": "5bRANtTf7jT1XbsYzqA31jB5Y8r66FMt9HPUKe5gDyhhXViw8jhdipjC3sY6FF4uYZwTWKz8TyztgMUDAFyJ9J3Y",
  "key24": "5GDoAE79P4aVdnTyBzcfK4ihAvKZnbmULcdz65eiN5Fh9dkFjziq7e5nDeJ6oNqpT925bwVAaCKthhrHGFfYP1NN",
  "key25": "FywdE8QQ1VemebSJV7ciu6XaKtBfVzfR3Cz462tw1sRP67hxDwbDuubx14AeYoZrRAHC5vj2J3XNx9hRARaq6pa",
  "key26": "4arHgrHYkZYGW5zj3xZiNGLnkW8QBZD6T8iTtHSuqUjpyPCdwQ57uhRUf5ir8brcYvGm8FEJTBokZjRDs6MbcS5r",
  "key27": "52mheeorJH1yEoWQJno7tDNE9CmC4nw7GMjTTywox2XhMfiRKvuWUJJC7v4YJbgWEk2qgY5qeE7z1pRq4PE7LN5P",
  "key28": "CG8ELnjLrXaTf5Ui41GKVm6xd6iwZtdcBKSDz7mExWHNYvn9LjBqfi6VpV65W5pyzJZwrvSTJUPDz5pop3nJnUN",
  "key29": "58DE26QFCSHS4vNB9kKYJit4DzgRnW3oxnnJGmsT6qC2u6J94ev2K6nkwujwA1EEGLTbroJQNDnv7SFvDcVHLvBf",
  "key30": "5dyHkFcaVLcWL8yEN1zrXyuNadnvWkCcNekszog5U5GRBKc6gZ51icG7enjEFSpy4YYsdhoVjEJaNEsKkcNUKGfW",
  "key31": "5jJFs3AXr4uHvReiW7DAaJuRwrHrQV76TChhvythPteni8JFmxdks9byJmk5bFb73fFi2CUBPHeQk4erQgee5FFR",
  "key32": "2jFZExH7o6vEXtzZHFzATunWfCx8mgYJxCywdgP9Hw4Vr3ckymAyovt4N6VF1UVeEiQgm3VYJiD7i1Q8fBd9jY1V",
  "key33": "5D11bdofHuqGiDY8mp8fMQtuFZ3GTgo3muKx6cnRpMAKaYLQ8bpfz36excMoAFUrXziANBvNNihCwGBkrWNLUoMU",
  "key34": "65znt8R5Xqm3A2tRUjztjWVj6JtZLLYLT8RruGoqpa65Tur1pc8AxaNnRq3CuBZPzTc3hpD5gerztdDMMfPZgwZo",
  "key35": "zh9Wi9qwqTy38bMLcCVoHishZNbY3Dxi2HsG3K6pz2gcgt5f7F3Bq4CuV4Nc4DTH8i41NQyZbo44HNKSvaXWEZ2",
  "key36": "5USQGjWw4uVic91q4qnWCzzgkJjmSAvYmnPue8MfUdyrcjiNPB3UacwqXdZTHuTvY8k23XnAAzDDuMnuibV1CWAM",
  "key37": "4A3RthtwWA8M8Wmmvwe9J4WwZgtpUF2M1BLEiqeVrjwEmnuVoJcobe6kkXcMhDc6EWTuXfAzwEWUVyYLsu9FTjih",
  "key38": "xdmkXaRvgcdttPG3nQuxrsgQJCv7pYCqZN2jDxPne7a1dpV5k47cBFW1VdRWojjz88umjTrQ9iwJCiYwrLW9vii",
  "key39": "5ZA9Ku6r8x1xMrwSjnV7NGyQciGsBb1yKxjftVXXNDBM7kkrgPj9aNDUmHRbBBW6bHuft9rBPG2ohTyiGAtYzEYW",
  "key40": "3CjpHLps9zhQzfwGAJt5Ktnhny3cHGePwsU47pwNGPdXzdo4wBbTfudLPiWjbQuPqYTUYQmHYRyBwJHtZmHNB3XE",
  "key41": "4PfxNhwCyufGJuvusFmuX4rL6ymbXhUAPUyqKh1Rh88QctZd5xXUePQsXAR9Bu83NN1Pws1x7Jhh4sKiTkWQkj1N",
  "key42": "4xf7uDRGWJE561w2UAE9zAsgiX4So7DhCkaYR8WuN6AsnB3kntDTLuYSzXLwfSnuVZCtreAqPJhymW6d9WxpWKt5"
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
