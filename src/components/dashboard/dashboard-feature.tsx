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
    "2DsxG5TpnkLQi3Mywu2QNSsqWo9gFH4QGUbtpUBUKz9nK6t2T5p72nW8jLDrnjz6PfGuXiwDdoENywM2KNF79k7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XsjA7epEW5bJ3XJkKa5oCrMz9Pwage3JfdULPAtej81B2CHbTP6wDtU4n3arcPEosHNTdnSAAjQTEHoug69cYhh",
  "key1": "4bEtvxhm5dJ4bof7xhvoCNok3PNgLUDuptDwWAahz47jGvpbRMpPTuyQyfakYRJu1oJTyMdXbmeXf4as6ubDd7Ew",
  "key2": "2oX5HEF8KF5af247dA3oVHrkqCHQmTMWDEXATNBtkn6KsaZxkB5SfRa5HmxUhxBLti7uPKcQJcfvB6r61WkEbiAG",
  "key3": "4HRKbuHzm3Q1o1pHyyrPGZurE96zFX2MvHXsf7oWUyfFKBHj4asJ1vw6UeSZ3Wngjidx9zXeRjp9YXUzrSzgaTJo",
  "key4": "4EE7nSmscdnWmJXSdkWjWxD9qrYqaPAJoFZp6fvNwrwDi6haN5dRqb9LsgdRyXxbi9L7wBVBL9f9WBzRZoiaTjgX",
  "key5": "5dHQMEyGWWaFTueSgdfQCem5afKpwVDKBG7JXwzsF1p6febS3VGAEH77ShcjmZRixqBHFMZQssejWTDTYd2DFP48",
  "key6": "4meb8Rd8q5oAVkiq7LZpvcUCqY6s27QM2KgHoYEk2b1RGnfibNQEG7BmRcbp3GAZ57LZiWpGCVh8igoqVzrrzqFi",
  "key7": "5b59tApMVefh3qaUkeiWAoRwWwHNQABup7nMRSRFCodDssnzPtawS24W5uJ6oT4N8j6rLaLCizhTBdeUTutKd3Ht",
  "key8": "5rGk7HoYshTfu5gryACGTUGepgyFsoJByLGVJ7rJkVobfFYumWi7CLv2Hftb1skyJ3KQTuPNrPWsPZ4KtPoZmMAW",
  "key9": "3MeC68E5b2oDq99uRikfPCtYGcpgKQjuoBNwJBjF8nZ16UPC8j8v2bGe1KktrwkXQG1E3M6XLZekhDtxmufPxct6",
  "key10": "2Q2D9MnefaJEei2TA9enDwYaMtpZMVDtejpzSdz3Bd2jidxsGTbWWSLiz4n9AoFY2M4NSUKpy9qNMz6BHk4dpoZn",
  "key11": "4Td2QcMLvQ7H6U5EGPuBhy51HByZ7VCNrsx9RZLynTWDjKakbgbywPgni2aDz8tAevL7SZ4DnWWRSRvb2q2vsA5k",
  "key12": "4RTmnFSy1wg3yX3xTQ4PKSnZSBCp91A8Sjquf3NDtTxWGJbkxY9hgpnBawdf2tpcWJdVxWaGSMRy1F8oPnpZppK9",
  "key13": "2VTRZ4YJuBaUHdYYjQnK3B9aWTvTVvGVEHAMvYZCgwtHN2t2sdGQA2MykabHfBZ1qxUnaU6ZpcAB2tcy36cNxvhE",
  "key14": "TmsenTnZwGPL6LuZqR9Ty5KC2FHwPTytDbswUPXVr9MMKD8UzNm8Hz8hKsUY7juQjdPHXggN6WfyFCqkYQu57uD",
  "key15": "5iYbiVv4U6cB14ZcGzqESWiZKdHGfph1KXu3YTQx32CPhbsmAu97XCbUr46s4M2JRJUxkWL2x3vZgh8J9GbvRoKY",
  "key16": "5W94ghQvpHU2jE9eMFXDGwtSWXqUA54CjgUrjgjQNcczxtHrrobu6atEVggjJSe5ofeeUXBbyLjXvVM2zkQCFKQC",
  "key17": "FNQZeA5dUJTTWWDC54af1s8eL3VUVy2rwm3Eo8umL5Ep2AbEWYnDo8BrttYMuNUseH8W7KwaywZYHCAL7zf11BB",
  "key18": "3et6BnnYEiyMSWJ3oo9VdPobgvcaZwJyQej3uhVKVwXuvfgMwgogUsG7baP78rsY6dD51FEeS1gEhr6tJHQxBqV4",
  "key19": "5RgAzRwGtwcFQLip23tm6UJU88SbT1B3rF4F6cFEKJDKs5zBYUYKPVg43g6Lv3ay6eQWoLQHU5JCZmAPG1jFxmaF",
  "key20": "3TeHA4txYHigknwFgRA5J8tbYzd44PERT3NtdGbziGAR6DEB8TXbPQYRpUgUenueGSYR6bpPsSLfLoH1P4HUCeSD",
  "key21": "3SLK2ReHkgBooP6AywW8cyjzBScd535iTiLqdQnNDFEJpRqyVvSoLPmG5wkxFSfyAZAoikhrUnvw5L5t2CYa8T7X",
  "key22": "3rxiuN6kgfkiqdiaiFHemtULREsb4NTLK9HW3TUnWvYV8Suhc7hTzhC5ReWAkogP22HNbRkeGXXGSaRZSMStjndU",
  "key23": "5KGTJjkLdGKWf4QKPSQSC5525RWyF4x4XTYc7XzE1kjaeMmKYTyUajyDARDRwEYeVqQbwm2csDnXZZUS8ZCTPw47",
  "key24": "Y4QpLK7gQR9FEvr4nKMnp3mk6E1qcG99u44cjRez8ndABen5qCxC1BzxfX4hLzoCpwE5XJPkeckyARE64NmA7dV",
  "key25": "4omEHNerzmsAeXNYcbJiAg5cfg4JJdBvaAphk9orkdTs1ZEJu4Gjw83KbDLR21qXG4Yq8T6PhHRt5KXWPdm9t2ct",
  "key26": "5FrjwoSEhvjoNGo47EiaS8RPS1tZSD5nVtykfnxMK3HLVuGVMB1WpkdipFtfumt6ud1QEgWLF1J46tmf2JZpPMDb",
  "key27": "5nG4wmUR5sKVRdQNTef4Non7WooPnsT5oE1LyicJ2v7pkKot5AyWYJCM5ysecWJc9CuTSKkJWz3DnnbaUvcZXMBG",
  "key28": "4wkBbv3KiFJZrxSiXtgtGhC8MRomxUPaVavzNwcL7scuP2cJ8SaDos5H3PZ8jrDVyMsNuoHHN46n7E5wAeNw1XWG",
  "key29": "3K6TZTMUJcrBjsmg5kGwquczyWA2ZXCpqNZTfoumbYBrkxE5uL5bMD7d5x1D3FAuf5X7SYtWSgL82r17pHrnqzx6",
  "key30": "5BJNmA7wBg1xL87SLrMEay5LHxqBa2c8kt7EL4hx6xfWMy6MfVwCye9avwDMpDy9jBi3cV7eF3F6sxy35MxcRu9C",
  "key31": "45EZBZHT71Sb5YFKubsJ3PBXkRGruLFNuidoiHGfmWkUF8pu4Bwe5A91q8kBAKoishDjsdgmGmEuF7JSaMynyvhU",
  "key32": "3WBmZHdAykWKwhnTWmfDTf1QNuQdgPPpnhG9zqypPHS1oravpnTSFpTE7tuteVX3Sn56UJexUmaxHpgykoVXPGGM",
  "key33": "3z2i5ruDZ96VqagM5nSJ39t2JrLb5d5DuDDduHc3pAu7mvSSoFG2UdEmRqTCkSqTb6x8UVafZ66VUKLkNrjnodu4",
  "key34": "2WhjWDkkwHu2aQFJaUXGNRacjE2YgywsZJHpcAruDfJDMaGmCtYA2vpSrvUntGS1yYpTTGKhfjLJxoq4oDQY6C16",
  "key35": "34UmYrCdjgJNs4gSKw3iLWv5D6hdzSZb2QYH83hvqNeE77Gd5NHydYh58eNJEM8L8kixufTGuVtdADYqWuYh2VMg",
  "key36": "YUifY9XpK7zNAvKQmNGfVuqweFHVajG59xbu79q2LP6eJcBGhsnaMWdATuYFjxw8q18PiBHdbLPgQYLEAs1RfmQ",
  "key37": "4MVm5KHqjTpA5cnnoV1XFKSP4avSHrCjneMjkyBhXmsAAgkFQCDhZwzB49pVAyeJ9CCwGwfwY3bMnNqc3FH1NNik",
  "key38": "46pW9MJf7Z6iCTPhcxeF3zs8oKeEVk7V5M3Fu1hqTh9GPMXmVGGsPJ7LbakXeqni5gvhB5x7muztd6x1kZ8NpQY2",
  "key39": "2Bu5XHoiCZS11EvhYqQ3Uy1XDUTLc9AMvWgJLyojvq4qkFLxEuczNw2jwwe8bmPFRCKwqukbsydETxnaEYDci7rk",
  "key40": "5cS9X7CsziPRTbwchVHBhNHmqxeEG8JhBemAbJi9WErLoYMzTN83ybyjD7aefaERpdzcQ7dS1VHoKbyGNDp5VRiq"
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
