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
    "5ogsgasxbiEw4pwoZ1h8JqsG2GvWtxeV98R5YM1qe4RFaqfZckgnXCTwuJuYYGogrLc9rkdewjR3Jezin2X43GDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m1scAj5jaWjM7744BYBFEWbouRb1q4Xk7w9Pzz18XdFn7NzebRDXoPbPrCkf4WXEm74vk8uXxCZqQyQaL7mwsZe",
  "key1": "qHmEbPEJ2MUXcmbKqh8UVnS29f61LC7RVhRpwge3ps7HpCiWj6BrmWPYSgPfQyEJYCzGAcN2Btg5mdsS6LPvueF",
  "key2": "5yFLgSw1SjE4JTi1ogDwY925ccxfMWq4z3vcWnbtPQ4zpZEV3EPAFacvQxBiLgo2rzFd6g1PPbqUsbQqLtKVYHkf",
  "key3": "AH2eTpUixq8DUX1mAWBnqHY1sxApHsnh5pfJfT7Vtaqmm7ikfbLV4dFxB6eZGSbYtHCXtvttkvkKXUpiGye3hHe",
  "key4": "2ibEFTC7Dm7neVZYmrBZPNyFSz5sD5q4fgyZnbRzQFTR3dh48PeKgocwQiLokjAWSK99ULVrEr7oksDKmiWsRjJT",
  "key5": "4z8c6g7UEUtj7LbNLo2S5MD2aakswzJfh9ZVzwCDbAtR3aRCL3ixH66RfyBTaxzQyQ2VrWXgQCQ5EFX8j9JXKp1N",
  "key6": "33A58n3sVtLokUqypPbu4UWSAMuebvp2zsquEm1t9H6AzESpkAcDtWnDtKL3PL6EhS1JnyHzZoAQNaU7F3RgWb3u",
  "key7": "5PW85ULoao17KBVh6PW91A9xPYDsbh2Cmfcsc8seitUE8dszYkBQsVNeK7DSy6jkhXiEPFdHDk5sEuADJ5SheQap",
  "key8": "5yreBWiSiE3AdwUv1m9i7DcswW3uzcQ57VhDMfeGV8L2GKDUEUYNCyNjUkb7k312zraPu9RVLGMM9XyCXbyFeoER",
  "key9": "gPvWiwsGZ98qBK4EgHKfBRYxy3C7VwH5WTZc2J9gW5dVgUZNuA2nSmWG5Kz8DZnfG4noBoX71fNGKgAjpckQofB",
  "key10": "5Fxf1h9WoMbXiwc9bFSHTBFLnEe48JkZpdf4pnFfGNnKMoz7GnHfWeDuNULdFKLvFmvZPZT1D8R3hzG5caFHggjV",
  "key11": "2dqkjrrutAE5kSLYM3MHtMx79wJHPRRqch4WXGWLCMKUiuuYLFAkXRN8Q4ZjwNsWF5RjdPzSUkEDE43f3BC4tXqJ",
  "key12": "4uyf9raRHJqUBwNTRacC1NBVUTWR9XC3e4UKmDEu21e3w5amXcbUAGNZipPoVD4Jv4JEY9kwwKpEXQN1cXsHNFAL",
  "key13": "jymwS7oPevwpYBB1d4g93x5AoXBBhDnYmRwGEkTJswvTgFXb4e597Z8DLfmyPfYWW7QmYvsgYCriBkTfnN7mdjU",
  "key14": "42TFxhM3XzFeBnNm2v3vbMLJLjmopnwnvQVVTScwzMZRtB6amA815b6pt4JjydMJqefFGhDx5DMRfZPFijeTPkeA",
  "key15": "asxdSmYnKMwHSzna3w3NczZD6iKSK9yTSmP81y8DAdj4rXzccBVZuDE22AokaoA6BpxsvgzJpAsi4oxww1PE6XK",
  "key16": "Lx18By32hQqoskBfohBaAi4qUHvLrgAKiDgKRJGicnHXSWthoiU5tds2HehQ5f2BKPHWmjRAjU96df7W4BpUufn",
  "key17": "3k2LHWpRkyJpYU8R7xTNYHLSYT9P74VZVserJTs1pNUbQG5JXAn6UGgveBoynbvWykzFV9YDwutEsUcSBfcwsrQR",
  "key18": "22gkXoqgGvuJF93idPgGXnbfjrHKJ9yyTQ4e2Hq32pjQPTMaGHZaKymLirxyoyRGJuWmM1LdxQaA1NbWZawYgkce",
  "key19": "2apdUF7sUGEh4tquJhs78baDi6NhM5drjWgxFGQpXwdf1ndpb6YJSoBGMR8K8Zq7MCV1bfjJvPuMdfCzvApFeA6D",
  "key20": "5zFoT7C3TRjsCefVAxR6Y5bqkFFAbuZU2WnaZxfTgobp6JRo4c3jY7TMnJ7Ti54LE7gNsFPDhrpqGUgktgC6xF72",
  "key21": "5CkhqQ3MuSHKmxSvcV4XRibchPiG3J4vH56dS3MEwrbsbnXnfFUyt1E8bzynRieGE2jGSbM8HxsvqToSBokmMw9C",
  "key22": "3sqZwXxegMCAhnnZG8FRqVBvvUjQG8FMqsj1oGgqFAytiLox32mHF2U24dzT3ZrN2Fz6htSsDt2Y2TmXFRX5XvrC",
  "key23": "2gwDFL2psaKqRZsMGV7jc88RT29Zi5Kv9u5pVMj5hScLb6yyiNosDyqtpb7bUjrcqDuJeCabYYoPZPRXB5L93hbj",
  "key24": "5ccCzoKBY7dr292yev1o2UfScQJqQ8A42yvBhwrHuuC1Cbe6LiSDLxzXfQrJPsT68Ky792qab1abEchYSutznDu2",
  "key25": "4tJa3BLDDwCYWQCPo78mWZSiPg9k31nB8fPUTsatLFaUcDAG4QrKfNEpfAd54hXDwq28gS51KfejkkH2okuHgkag",
  "key26": "3GF4ZkW8SFX5EdpaunYhzyKry6iZjg2f4XBK7y21r7RV6xu4PJwLL7R47uZ4UJ2SDj46UoYFdWxrXw9Uw8TJq4bw",
  "key27": "3KCkqJVYXqe6xzaZnsiYTsCTwpJwDYTctgxnpv6dPLzGaKzPyiNHv97HWHzMVyPp67YrgVjyAWyb5nVfU5yaaeSX"
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
