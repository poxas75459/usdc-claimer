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
    "3qiuhswAt2RoLzDoJUu2j5gRhnuZ3sgwrQVeZbXuZJW3AW5fYHG3NmuRSDUTpGnm9hckDpHjjiMrUM3cLmYmpRF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ckzek8W7XHywyVY1HET3dj69MWg8KUqLRRHTVd89NoTSFfSWGwbZcqGLfHE8jvvmwRLy15sNGC1kPySRqtShkX2",
  "key1": "2Dd9fk1729PcpHAct24xyNY1XS3SkYLLyA2nufbyW41rKDcrUbiD3c3vdNvmAFjdLgsMGZWJvm9XtuboHor9uAFr",
  "key2": "54X88b43bb2s2Q1fCPtQxBnKvcEEo2wtyFAtpGX3SG3ycXT1ZYwt8ARea5WLUHTAix3PqAeLQ7WAZDeMZt6kao3h",
  "key3": "4HSQmzX5YmcYWAK7B8RGZSAcWi45aAHDHXkN52CcnMm2GFm8nCZLkjUWcnGW98Y171NyFEcNzi5APXZv2jhRN4ms",
  "key4": "4MDyLoUKecDVboCB45BdjCyvbLEVJVmRjPwvFKpXxKqK1awhpL6Vquwn63ESQCNmweQcN4kj3P3HpvqgMy56mpdf",
  "key5": "WZRVCAHUcyq3B5Y44yBekYYczWcbP327kz4fom8tpBjhLEqitsyRy2JQ3pJuyy5bmNGgP8iS54TTcHZf5X8PX9N",
  "key6": "4xLvTxJqRrF6r1aMnttrmg9SP8oYBNHLPQJdtZAvmsZGog8BJoJJ1q39i2JUrndaqCxGv8wtUhXf2nLRYZ2nkjQi",
  "key7": "2vE8Tz8trsZHnmVnzR8H8e2powqGmTG7eV2gXrwGZkpmo5nu5a9BSvWefC86CJvqzo5jpqe4h2mDLZZyhyfRb48N",
  "key8": "4vEq7411egtxpKks3c4btyHwLc846X9gXHRiLL1QC8hPBNQHPshTEuS7i1pykophb9iHzwQoswsTnUkPxjjSF8UK",
  "key9": "2NdRGQAHrrDDBYoTioW9fWwS7qi4sRD1WCvFYvAM49ngUfHkr8JzHotn3o6iJH7ZFpwWktDRNRbpiVztGwtzWuVF",
  "key10": "4BcDYKH5hwVAK1jhoBe9jkxjc6HcJG2rtrVsbeTHP9yBo7tENa3JrvqGeBfAgqKTrpcCbRLbpxpvo1bS59vcmaYo",
  "key11": "5X4yzLEmqyYsgAVSoRBN85rYQkc6kcUC92ayCdfE8d3bXQnzCjs4YY4Mhr5NVJBnGydYxSuAK9EUx3m4ejPiVR3D",
  "key12": "VyNxQ8TsxWh2tAsDmXRi3n7gxqEco5V9DmuZqjmsSSsrsN7DDLvaTKaxh7NFtYfa4ECtdEDHCVsNs2tYGzgpiSX",
  "key13": "4is6HQbfXs1bQKDgttknWPjhjwryyG52YLNyxcQaX4c82rCZTbEedz554Rx9UtbwSPUeTfLNY9BgFpsV4ofyoCXt",
  "key14": "C3NEYWau1hBnkAY6pLR3psKPyphoxd1BhY9sH9yvY6H8Eubpsqoqs4Z1bgPdfDdPmPtJQqqgLMG5Dz5pEtjNPvm",
  "key15": "2WsZaziM4sC7vRFwpdnAqYCUPViRYguFpY8onzNPMWVACgGioDYNjAKARyoqWnmQ3Q4CjRBjNhyJ482KLEFtrkVE",
  "key16": "SH6r1pC5d3HF3Tj47uwra64Vkz7nAsCZNV9tNDgTZxU2UYSzhds2dcsxbYU2afNmNrm8cSfCHNoDUwR2aoWDPWb",
  "key17": "2Y8f1zbSdGiFj1YZsQDrBb2DYFriyJope9rarQBjTHQqHwz8PeVVecHxbJ6q7mUT8XXK6NhRAvcZf69An9yLNhhd",
  "key18": "5qJdp8nHsLjexb1E4rXVBkpFtEUf3Xd8jUAaRXbg94zpTNb3fYPpJck7N7DYpYw7651Nftg5RYykXdBrJah2adfn",
  "key19": "2rK1kfhG7sr1GFm377wUTbR74aTtwLjWYwSwsm8CMEZ8MA1dLWhzJdtgjnAXucRu6KtwfbtUdXtJWwLQXNEkAVuY",
  "key20": "2sczv5VtCbx22HWX7MjD1aVowPhzMxFP3rMowd6Nx7tMRAuB9wLuGQDDuPbUCEdLGfzQ888AGFHWkxvTJKsiiivD",
  "key21": "5FEbS8P825sy8fak271xQAtwwiXXZxU2ZUBEMWquBLUZ5P6QC1nKJVeZiqYgkzpfvf44hBZLF8imsuiNMtsSJuPF",
  "key22": "34qQgkMw1YDjkuKRQYdkw1jKK3Pk2b9hyEjatv9p1MJbhbXdEqgtAeGJMvCENAzrDksMo7cKdAg8BcogQhPrZW27",
  "key23": "4pGLC5xZ1YKcswoufwP8pQ55H4Qhydi6TwdPunbDbskHRFdQ6xEhbUuEfgLesyjr6BsFAiZjyisnGfSo2YYtTr6L",
  "key24": "5V3nvdmLX2XewDd3ntUGYYU2HRAtGsusy2FeLEvBZtLnZNm2s7uJLcWdCqEqAUQe9wSqzWttjCXa2MsyZTeXYixY",
  "key25": "3xDCEoJWcAAsaH44MjjuX382ogYE3D4cw6FGchMunDkAGiic4rPr9KMGV6anASKswwhD3wznhFCJhpseu4iqv1fm",
  "key26": "2bNUzYcnLf6WmGV1jJR9HZutxfJuBVcqaY5ii13XKPKq9H2Jkegfwhx6AanHPyTLkoLVe7NaBXT33MtG9apZaZeM"
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
