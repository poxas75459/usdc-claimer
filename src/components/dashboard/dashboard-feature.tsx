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
    "5CpHFEFmRAcbJijCB4PJN54AVdNWrhKGGY7EnS9ozVdRenPnVBDoqUXhywQbuMnneD1ene5wS8sEqQr76f4ZojyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vukUXhCwkq423QgWPpmYbgLk7hyc9NH4AxyVXVKanJvHJTB6cYpV73Ga3KwkL8Q8zz2RZXo6x3fZLTuwhREsAzx",
  "key1": "55LDYFZaYMgyAa9F4Tod4YjcqzS58LNNb3WSNE2F3ezgAGLUwChnvrUDZw8DDpZPYAMFpxJ2ypefd31ENAiE8cG1",
  "key2": "ptXku3WdTm3r75T4EPqJxYZSSR9Jn5X9K3Ms87tYGfAtmZXrKr3gNqkyCoaeh8AWE5i4eucoEJ4xZ3Fyhq2cMnN",
  "key3": "5KTeDuS7ehbP978oRraqeQG1k7ZEaKWP5BYXFMdKa9LkrYRY8hdA1SYZMx7nLLMLGsZ1WrQjvD6ya8zo8Bzm7PTm",
  "key4": "27bZMFyzebo4q2Ev3qtZoB5rjak7BkKrGiMYE2JMaozE32u5SPaThx52yTT47Cfw15mW3TYh6tTZfDozs8S8D2SF",
  "key5": "5mu7muYNKCqDFAfVBXUf71vg5T9fEM9SQFToNV1EE4tvnA9naK7WycoqBr1bYFe7gDEfxpgK3t7dhfHiFPwY1ZZJ",
  "key6": "21j14GcUQwq2f169tkDoAD9Ms7RF7tyz9tzJTRoMUJenZk2HSrvzu3cGxvGroxNXTWtuP5TNAp2RD7xa9KSFg4ms",
  "key7": "2xskSSkwwTjusrrJoHq4EFtmcqJr2ePXjogu9nauVGwda3aCu53QCMkDn6F8T3ufNpvmJmZxX3EUWt1G9PKbiBwm",
  "key8": "zbtfaUXkwRCvPh7igVjmPSxzHFoaV8oAvu2kMANmMG39o8DSgvBbC3Hw6E7Jbpy4zpiAj5sZJNDmWoXWASRbaJK",
  "key9": "3NwgGgeQEx6fWsnS1tySgouxif4XJkB244zFxCqfRESmqoup7DcmzeKRbDdXUQ1soTZd6LR4TrjLZEUycgTc4Woz",
  "key10": "64hVevbXFNcLZda8SLkGNWm71mcK5d6wDLhPMLfd6FDDEyJf4RSnYLDn8WS38jJSDW4aa99zieWbENr21HUi7DTX",
  "key11": "5TLAoa4Qp535RDLwPjB5DUttyWa55VXV5uLUX5Z3Kxy6S6L7DiqkMp94fiEdQUq71GDkKNVDi3hp9K9u9iuuAZ7u",
  "key12": "28cXwM1CkrCfiiFzmtKGa7owcnkXdYkfyHJ2r7nSnNCTAgPScHPkWcth6JXW6cEq7FPzr7y48RaDkSn1n72Zf2Ek",
  "key13": "2pRKp1HamYmkXnZPXUrkpwoEKQDZqLKw2zabsGSMmo4pRkBBcgVj3eTAjK8dzLfier9tweMUxPTZPR4GtgnJzx9L",
  "key14": "oZCwSCwnXRqGQk9sgqdkVfKME2NaRU1W5X9FHKeihddke3tyrDgbnaVogpEzARRe1uzMMAQT4HJjbTxN2Eb5fXN",
  "key15": "UwF6xqqZZ335ijTCdGP3ERSiJM1R4Crd8ibtQvsXJd5RsJUtrH4fcLwcitMsWuK4urx5Y5sLR1ofKQJdRJvfStw",
  "key16": "3qCvy8CZ2eaQDvy5TfaY2bu5zrWVvFC4tbLG79PFwvbqhqAyBxEfeJuT6fGuMY6gytay2w89TasSv1cVzTVoLAku",
  "key17": "3m85gAEhVf22kuPYu71ytBF4DaKyYrMs1ryan3NNwDwAa6pbr9dE3nEWNBDrvoAEUTNhjXRySmJp4bmMzQYz93GA",
  "key18": "5t7EPkhQRiTnimNVRcVLD3pVdbD5X5JmMb36Zn6eHsKaLb7bi5PRyVmPpGfspSPmehcUJPG655tZ297bjsuDVTs4",
  "key19": "3oviCxShD5RN1dF3PBqpAGqayBN9yvYmLP3Yjcd5S6bB2DBumnMnqwisMAWk9stU75EhAadV41gaQ6g6ZQX2XaUm",
  "key20": "2yu74brHBV2P5UeGZ5J4GPBqgaZ2C26vVZMFiqJEPffkhENxCjhDMx3ghB29MffnW1H7Yir95wHMGJA1fNWqc4v6",
  "key21": "3X53NcYf373jnu5P8Qn3Ho52uad51cnEygfRBHYdMuG55wZobUj6BfZm7nVK8yqMkF8MLkypRj1Re37k28yog5wV",
  "key22": "349fP2kvB9oo9YXRLGZzoJV2yVe2c5X5Ut6WBh3i2rRzA73ZrAquUiNppVtAD1F3SacKwZ4nRhBnjKLy6KSvwuJ3",
  "key23": "3BoHN9jeBKVQqP6dk77S9naRddC3EqEyAWiXQta6iVUTSGm7L9Uo7FfhbZec2cz7Mxenfowtnc2iwbDecesBqPRH",
  "key24": "5edQaEwyFADyAn1WeNLMBiVUT5hDhWst8os9Pgxjr7iX5MXdrC6Sj5c9KYrR6wnpdpsLwrtdrW9BoRs12wFin1Lk",
  "key25": "2niH7JfbET9hKNLWu3Hq9J3GzJu6zVjnHo9oR244BLjehP9dtJFQkFg7ArtGLL7MRkC1Yzv12nsbvCc8y7cik84Q",
  "key26": "4znFde17gg82KDbrtKoME5YmcZDtaZ6ftYDTUjYvZrY3FMvZDmaP3xEroFdf7F7UY49oFp7oRDwuMSAjQHrB6gPg",
  "key27": "35wm24R38y5suQVnbMuXgXdhGscqtdy249nBSgcmcQ8sVjv4uJnY1jqd4sguk37AT1qCbfucpNBwkw8TXPNBa7Sp",
  "key28": "36i32umXasQa3vuEVXT8hwM4yAnLrqk4fQaDMoHcPh482xRShz74SKSsnJk8yzpjL8x8UGxbxf6BgAQNKK3r2fD7",
  "key29": "3Zverhs4H2aKEECLLJY3bsFjs4ALL9fMRT8psdcdbfuGCRNteKyzmGoCewt5LyTNTLDBYoAc5krDGMPzSaogWuWU",
  "key30": "3do4z2ocFprVf2gvxg2rDrdTZky6aohjAGDc6WoFLUW7VCwHC8U9R6AdH7yfZMbdWxsYvEpnRP4on5KGGNmdgMkS",
  "key31": "2f2fHRnWsramnRR63JB9ZZeKYoUrsnLQrMZooCCcS9rXf28QnbPv2T3pg3R3i7yFBbdG7h4pTpP2qPiPXs4Ycz8h",
  "key32": "2kssLBbVckn5xkjswY7dZ5K53jyEyaepxG1NZw5u93JVfDfmaSqJPwWuytB8RC2sJDZfuFgNy9FfUonCUHnhggc5",
  "key33": "hYjr4j4hoqMTuWChirukwdzWsbsLm1LfMkw3EiAxcWuAgtH3GY9D3bmqiHxTGtyE954q3PMg32Z2nqJXgp2ztz5",
  "key34": "65GuCYtX13pdBe517VpanPyyMaECpQuZ96gtAPwFsiZY4Fq3916Kv3SvszwUmsGnYMurYJ7AkT1PNR6QJW2w5vKW",
  "key35": "5UjxVyooQrDPK8u9Vru4ttjrGzFRAZt8jnS8G33kF2nvQUm5WG3kGK9j8MRGtwYS2qraCRrpUHjnU1vFJsbAqwqR",
  "key36": "63FPvsnX9c88g6byGjYtqH3SjrnQrSq1CpM3LBdhenmo9nu1UJxQNgoKisaQpXGykkLGXG4vN7ekf5x8BNsUWh9T",
  "key37": "2mbKoYacBpgqqwSnGfUHss3AoWsZtkicEfN5iKGiFJpgCUJnp86Wcj2KcHRi5yYrLsWsBZKh49ck8qsnuXDhPpFU",
  "key38": "4QYhQA9zsUDd4t68UCr8898eMTP4Vy2vTKN7uAGu6L7TTwqeURdT6A4beR6CAFrvNgUUEV8HaPBVY1P3GTUsShWu",
  "key39": "nt2Gu8WcpQCbRGBdWKwUkvYwJgWkhCztnCtuzqaSYxMxCvJDLnNagiReGyMULcWQU8CFyoGNbUWhmuSRHwJhfpP",
  "key40": "PAWLhrQDhJoBHksn7T7Rxp1nJZJ9dKe7QDfXQLBwK9rBTC9MmURG77FPVJVAhDY2YCEHaAY7iR2YXFQBJ3CbYYT",
  "key41": "1g81Yezcnf9dMGce7QRhqLEepLeu9K5tE6YRq7qs5qZUtzXn2Jd3vUJ3gJAFQBtwHf3wgXhECi42Y9kq6BDBWU4",
  "key42": "5zs6RtFW6Ge7ju1L7WRZPaUgaWme6PW9x2GWj3Mbxr6wHVjRS8GQU1CX8TMm6Eq5t5nqjSVY14NSwC5zDNwb3w6Z",
  "key43": "x939Y2ZLsBQgiv9nykiuuGPyZu2Ri7wgekZGwMBxPSmPFkWshXQXhHsCtkeV1yn8kZwpNd3Pdz5ev5TVS5HfbUX",
  "key44": "52xK8tfkLpoYxuH1eFfw3vzM9kJXoopPsqbcFJnVx27kw2cLLVdbC74pWLcMLs2YQD35K4Lv7PZTDUkaC92uKwjJ",
  "key45": "4se4NKgr1gW5jihMp6FJfZr19P8jd7e8kEThzAhxvEqVMjMUPMJDMdxfQtfzQ54VXUPUjM2VkrFmBDCRFrJToMiv",
  "key46": "5h1mS66494JqPVokyHSGkae7XqtCYMXTsffjDs8FMub7RKyfAorer9fc4X5sAyzsnaoZaKzj8nmKXgPzJqx2i4nw",
  "key47": "4UMvt4Eh63JfGx4ubAheT5NbUjR1WvQn84oNdSw89shiu84Y2TtcvuJQbmmYrsJtHQQGjwGfbfywfn4WTu8rnqN3",
  "key48": "54T3ywUo5F8qywgXAAdo9316AQiA6vJbk99tXJHNgaahvbTsPVueAij4zs1vEjMPhBSgEnkAGeVR9R54MgvJDzoF"
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
