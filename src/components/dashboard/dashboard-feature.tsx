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
    "2XWscH22Q5WHFcihYQ69vQjMwAy9Ptc3KHeXaDS3L35C1Am8ey6G1RTWJPdZu5QTMA3QdMZaoJkuu2ZZQtGA5e97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwLguF1K6WJ4fbJZYiPttb8VhP7Yme9tF35YeeWQQcACZTyY4CXdrXAqW7QLKf91PSMeJCG6ygNibVGRLfLkWyC",
  "key1": "5cafpu33z88kDckqurqK1ZrKz1CjF8QRTGPAn4Mb4iNrSRCEAcCiMyCqRZVcGD7E7ayRHDTzksc8j7kCmaxWN1jD",
  "key2": "4iZJ9QcFYnUSwLChG3ATfe9nnkEkqk86BEVEukMk2XVR6xoRbrNkGwYi1wHV24voChEmEzDLy2JwJ3MdvR49kUEd",
  "key3": "nEmbSKhz2nt8qtdAiuuVqScFSni12eNypmSTf4uHzkS1dDBRbppSTYGaYhFZxEU2d92YqPdahZayiYivUgM5aSF",
  "key4": "2H5KpnA5PTG1LPUffCZ47A7bB6EatUA49F4xZEoroWiiVH8HGr96Hrxmzp48gbos7jp84ArZ5qR6hMevFdB7aymC",
  "key5": "3xVXSzfipnq7sBMFiq7b299ZVhHoY1DHJq5qmqvM9o9KPMq3XP27jvsa3QwsgaKV1GDitNNT67FWdvod65VUkGDb",
  "key6": "B4NLaoZQ2H9A8fJKz62UigVn4yne7hN7FxDAppUKDABXLt2PaBEr7Va11PPaexEwPpw5CC1fEf3MrvgFAuDozq2",
  "key7": "46tM7J6DPd9kU55p7GzbTAtgGNax3pmhWHk3D9xeZfUErFdLbu9m8HmYirC4AgA5CAqjqGpa3Lne861khNpKvYvU",
  "key8": "2LadjoePvnw9ogp9RmTiNno6GEPMm6fX31DBhNCCgoqamF8XKkfNBSsGm4MmzwCopAoQHXGFFpJPMF6kG2f6Grwg",
  "key9": "5dhqNxKpR2qAV4BtGcnCxv6gJcNDugJ3Ct3a9Hy2t6EMvUTbLKwedbgFLDrAKHLrrwJAexEUP7g3a7Kia4Dxte9N",
  "key10": "5nnKwG11EXBuQxUp45Aa2fAFFfifzdiUec8R2U1pXw43jb6QyPcqZs1XrkPbaCuoUXfuCkR4VKQJrF4NNYozs8dY",
  "key11": "i75hNxYdtmuAChSwCGdtewSoUqH3ySmLsxyKDbKJMK3VAjB6s9mbMSrTB2JydBYWNwSsVpkaW6xposUtPj142AU",
  "key12": "3uwh5o1SjBaVTQ1fMvJZ7kRETiKbgSffB75A9rxRowZGEEhUgxkCyoF7Y86VZMSEsrDPECpBWstYY5uLjkrNy4ax",
  "key13": "3w4Ncep2y31f4N6XhkazBazrkhqQ9QpGoDH6Rk1BfGUrXr1DtCJNiFqzPdeKbWqtdGuMZ2x5AksR22kXsTDSB8iv",
  "key14": "3YTmLmgcAzGVKKN7uUugc4wRjXW9i6KE7zY6WygaxxrtaVcTethETjuNv6dEaPK5jE1Ek6N5FfqpBGPAwFB7vZZS",
  "key15": "2SQqjMrf18vHsVsN6R8JNa4aHLUUcLD5fWVfbjJCnxwS1x4a67Y38KtrprFLFBNnrduKCJ624FVKMC3uYR9TVkxG",
  "key16": "g7mwCnmocYpKLBXEGLUTAHWeysXARktAdMx4iaJ14fbFCxqMU8agHUudn9KbXapF2wRQ5AP69qbocaypreRSQnp",
  "key17": "4XWhg64cbHBMpk6bFJ9EMCn8nGGAvwCv38cX6gFQ98MMxMzLuUuefVFCT5Y7WSrV4GeMdhirnPawXwtKSHepgu7X",
  "key18": "4b9QQCKapFpSjejEfNRxwRxWcrFYE62Hpq4rsYGxGeosL6oqMiERGFNyJ9UEwAxqkwU6C62CVtoEohFNwVEsy1Xq",
  "key19": "5pB2Q3C9c79GRVrDLLZSrJcabyjPCfNm7emy5pHkmSeyMRwm4PzBxVhAWxRTrwAzVoppVu8JJMSfixFcDp5T741D",
  "key20": "4DFr3Epx12WbJpNTrUoCZxq1g1dtoegTL8p5kJKrvDRoxrEve18ajJD81Fr4LqA3mjVKNuMSmm54ZMJpc8Z44k27",
  "key21": "35wvadyTMu3rM7oj31arPsk6yTqWnTPTsUYhdg8T7T1FZihTwUDbPKMLJVeLpydsBVRTGoNQc3Z58sV97Wi3zorD",
  "key22": "4b7CHBVcnBWyVCdzYf62bkgQiSiC586c59UUFLRL7Pu6wXmPJwFJLh1MqSb48UNoL7mvajkXQQuzitGXaP4wNr7Z",
  "key23": "3GN8wGtcDGhdmK7ySTcxRLT9DZJNkkfEFpt28hRXAkjnH1ESJ5ErP4pekr2KGNxN5DLxYDdHUQzgmwcQUTXwgjUx",
  "key24": "5axbaXM6j8By6hQefZUU5guwTFr6HjWBbAztGafzfMb8Mp3G6ugMdAMseC6HWeCAzZFnDpdozwyhty4DsUbUTvWd",
  "key25": "4dcgqgSGZ1XRoWimmPNLUt42iRXdF64grsCkw94fyw9nXuUhc6UtiF32rPVHDstu6yocKmfQT8ye6urWQUhwMxPf",
  "key26": "33zPgmasQBQpJ645hTUWqr2EffPHJ86aiL92q12ZFv2xfgoFKrCvZWrskgVxAoMayUhjWw5cGsATfGBEC9mNZksJ",
  "key27": "4D6kTYVBQjYuaPfh7oeGBAtKRdxP5ULAbobjrG5ZtV878byHQPDz1inQaiyyqpaTcQTH8dDNAqoDhwUCnAK3ouHo",
  "key28": "4MXnwxbpGQ6sMFhVH1jWZTVo9rAZgFDQGjRimpBFk9h6SXzjZJvxF92U16SNF2sLJUEpjp3u6qMKZ59jrTrQGudD",
  "key29": "2qtnY41WuUu3LqvFbrVoYwhEusLBZTUkM8q7C5RjmzxXUfxqitt6es27f5AGDwPR7bgPmmGDmgvNwL9uM9onSoFT",
  "key30": "64TNFcugApMFypt3dHVtUaC3jCwcUfYHezMZZPoVpvrMQgf91qPewUfdjJDYEzibjCcKLHsKnsYFZyErt6oX6EUW",
  "key31": "4ZeeqVD2PcaYpvKnkUsjTqQ63115nGbXZU8VSraRNGU93Tcn7Zhkb7E1KkQzAysu91YsBYMjFwzKp9hgZkRZdPAv",
  "key32": "5hMtf1vBXGsnXnbcpJvS8MP2dVBKAyggFMpfc267gWot99ezvybxekeiC2jg1xQnTjJvjY4Ax4LqPAEYHAzDJsBL",
  "key33": "4HgSeueriQRihw1yEBQJRXMim7Tno1n1cf17AESySBEyLr5n4hnpYDh2HzFnXHs9oNhG9uRVhYD8nQgWzcHVoK2h",
  "key34": "37af6H3KsPtxa9EagQt7LR4SvHP9ELAyrMZw2iJFqdzAqA8Vkpyo41sP4uzgLRqo86bh4o7gyMfTxexsRDKzKSKV",
  "key35": "dLJFpqS779gbkPJmmAJMnZw8hm3NcYqfLueuDF9wmBsb2eJhMQjda6NozHEhkwXw5YSDM55hFVwxXXxxd7NdPir",
  "key36": "4BK8tAruVhbye9hcaN3Ww5TZ9fsZtToGEtzqZTJtSaeFMtWk4Co9WagwPytUMhjHuQRNQnNPD9WVi8TFXpJZipiX",
  "key37": "5xg6PesqCFL3EXcMh7PgPGYYGr5e48es8VuxsDai9eAzyJjEBSCmrEfiybSTkuck3Lqjen3vgP1JtG3nk6YDH5F4",
  "key38": "3XSwVeLHMtRzW27LvBoP16yWaK3ZH8v7jwtNwCQs67WGtG8z3rhR31G53J7vMNWP7Dzgy5uSBQEiNSE62QwUwoLV",
  "key39": "31yX1XM2wwpPzgM6jhtqC7SVeP2pNxVYCcucNcLHQPDkTV6jzC81zg8yGiGVpVzz5xXh21KipmVqvm1w91fLLW1E",
  "key40": "DimDELy3Zf1RqXBczZi4au5RCZKvymQAEL6D5qAAXDQH87hiNNV3iz5vjCgtna1uXcUQivjhFF4TZqU7NnT4Z9i",
  "key41": "4cGoMRJ7z1RfkrQmR2XZWRZBmHaRbnnG27ryfed614GxTJxFxTBDK4U6yYBPTHJiN26WnAhtkz8FiUSH6EfkQRUT",
  "key42": "4QJeLGFsknto76jw5VjycEBzgPKAqmhbb26jLvNi1q3vn3hcUvYnSd3MRT3FFdtBRWivUmNbKg7YLnVduVHovZMd",
  "key43": "4NicnshBTXgajqwbqo9XiXNotEfbCwjiu8D2p3wGkhTYVXoCUqE9nKqjTqQkwvF7yokyvVU7os3m3oNJgxq5Judg",
  "key44": "5zLr7ptLvVeXbf3cy9ZHehN5kxZPB2BWTLgYCcaX5kLQSzmpwrTXZqmbPMg4hNsixxU3taRNRAuvgeA92ducpotd",
  "key45": "5ZuWGbWqhR2ifzY31suvtuR4oJHtMWM7q4yi6Ctagxz3uJ7r1iGVWUoVkZS2q4dzfsu9Qw21MADnNYbcVhfyWCE8",
  "key46": "3fF2vfubWYLxxjRJEiSEmKAuxptvycjgReZJcut8WZvYGVXE1Thw94UjHQt1PJpnwww53hAKkfHn1gqWQHDb64kf",
  "key47": "3PqXYdyniQNk8WPPE1vCawzh63Vh6BidGiZWXZwFxqtSyiWJdBv8Pi3kWkRKtS2uL5gHUYSy9c26RA6UuooLMjCV",
  "key48": "2FbkSjbGVF78syHTC8KdUZnLsbKtbr7xEYdaHu5f4iL4vdCvU9g6iuhYq7RMyWpU5dSWjaL2Dj466hmaTFdcDobG"
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
