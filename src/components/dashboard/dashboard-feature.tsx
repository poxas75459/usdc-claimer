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
    "5vhbnorPkkkkmy4XbqPzYfFBySfDR7PiqMkTusWgo7HTd1ksbfGavFMa4NxWSvYFSPASzSQZR6EfUZR1dHwpkQxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWjpR7VwrnkvshqCEQLZGHWHuWzohnfFz49AsPd9FcEbovuqxdhdv2qtCjmGGNkLpnaHjaXfh1kBb7YMcKAEiDz",
  "key1": "2u9aQNQ2iYLYJYG2JrMcKEUcf7gUsPGNHzBAnXhS5raxv5mZ4o1S7GLQepiCRdg8rUN7YpF5aXQj3z7uVdFJABTu",
  "key2": "46kKChRWEs6UzpygYMxUFWwFEiH4QgCsp9Dp6Vt58SN5FxdRcE6ifgEaoti2bCHLsviRFSz6tbVABPVoTT48m8Dc",
  "key3": "4JBGrZfDc3xLh6BGXvp4qAzjPPcQ983TUdxd3gg1iCCYTG5gK4Qpjk7HA3MeiSkDcpn9bJAGht95KSuLSUcb3VCS",
  "key4": "5nd4mJjZRFrgbQb3xFgBFnYRAmuEKmQcAxdQGNfwpaP5UPMCg8xbwDYmAHk8zpYLVwnXJtv1J7a3kffkmsrRJUty",
  "key5": "39nTDwxpLzqnDEystAV5DeC9yXqmsxKy5iosyBcdQc4VzJKb8GJvtxDqbz6qmCnD1mHSfwQRphEQ3crFBZ72295Y",
  "key6": "5T1rEJe6KjnLhQnvQD8KfPePLPEvqezzpRYCiWC7UyJNvbYWfjdrz9Ei5BNexXYUoJPVogHiX8hdBq2eCDJyD7wP",
  "key7": "41osVPJLPTsXy34hYxqtWa5SBDDvvK2sHBk8MExV9t1j4Yf2oDBZcHrNoxbmtHDvCyGiG3bFFUvCZWzoqZbmwtNB",
  "key8": "129oQHGEcgCJuEUVoExg5vV34PGLkvbDtvuYmXQFhhHz2KjyY98Tm3jUnRoRiXQxsyxC7ELC2kCmNij94zMVAzjX",
  "key9": "4ncWGZXd7HECqbBZGcAtkuHxHB3M4tZHZxGT2XHoLkrbSTtooQ8hxbTNui1ehfuBYQQjnnUBbfjuoNmnxgfFiZFm",
  "key10": "5Fp4WF37r61LZC2YeXc7kP81am2XJis7EDbttFkno2xQ4vYZAYsZWzowPs9GL3rnoD5nGxwnpfqVHJNE89DPDdAJ",
  "key11": "duQnAL1FeGdiqdLVkR3HrtGqBrX42EGPbcgwyHpXuwEG1t1Aa5BgqgSgc9huNtFen4SY4fmyxBpwm9nrRcigrgE",
  "key12": "3NNrCBrPKGPDv7qNrfezpMCw2bfJdSL7rjWHFMepy7DaumDUUtMgWXRArdGiNeHAp9kh5SRaxSZvsYN3XPYrLTTU",
  "key13": "3qrB9fZMstxHquf6TuvmUGFFMiGYNFVWUzVBWN1ycH7hQRhNShPBvYFGGVJdMYMCb72AwjHDDY38tgXxQVESb4oN",
  "key14": "3B4RB9SuwJkyikUj9RxY7ehmWY7VDs4hmp32hKca4krXnxMepo4egRYupHVuNjSzFLG11RHgCHCcQqfzBWdHjzMg",
  "key15": "5KHgMKhxRCQHVzFTa6D4JdM2Nb6p342EFi2jSgwdtTho3SDJ9b1UGCG81rYhaqvVVtV1MRgCBSRjYFcMaDGkq375",
  "key16": "5FgtU3CCg4XPYfzsWnDzbyxcotKTfdeDWTrThyfH8PPUw1MfTFmuKxVuL9yMC3s3PmAGA5QHHUVtwF8moS5qcBGa",
  "key17": "3oYyqz7tpmKwyexmVrcwQcCgKiw4wkFEhucANFp2Q9cu9CSrrsnV3qayREMVLJoh4L214C2bLjTaXpstWMHr7NfW",
  "key18": "4gLNBwqoRw251DArmmn7Q9RRn4bDPifTVNtaJoAbxvxvdUUzMziEnxyV8MrJwx6kGCNcvfCrPjNEjvLAao5CMF71",
  "key19": "3cpyBW3vFtoPpcSRaGFcK8QwayebaCEVjTPUar1VGkvhFdBwrSTEdfs4HECgTRqxMM2kpQ8tKxfXKToc86egaFnY",
  "key20": "SRAixopf6zTHSPRXQRwvt8Zzj7oSxqNvfcforu66exoaR6D7U6mf2zarHZXCsNB5kBQWj2Aa1b8zrzE2C8vj7i6",
  "key21": "NGCSLVJHot9dfG7zMzW5FwmPByjMHFLQEzFydWSUpQqMuPGmgpcMY1Dx2o4Ez7WXuf8ri8LCSpu4AWzmr2pQDJq",
  "key22": "4jJ8uPSfQCf1zGnqQsAHbjJAbTSekhp5GiYfriSMFq3KbjmkrxWgCYoeLNhpjTCkmKzUFya6m9AXZpXh59uhj41B",
  "key23": "3GMrAzuSCb6A4fyMHrZRrPsuegu5RzUg5qcPD94VDapiV7CNAQwQ2xnmNTqGhR2iwtfnA5YQVWp7r2PXbBsq7WJd",
  "key24": "4YPiFVURmcGDrQUgZdGev6ED74THWFbPMosmkHQ6HWaYXHyny3NKYbghV8uWJVZ7gzWseHYYR4mfAkKtZZ2vqffU",
  "key25": "2Qqvm6AnizmeWi6w1TtVoPEt1aNgzD8bA6FwQZFPSeijrzC6NkwmySmHSDd9htcr7Y2Y2odUfCqfJeQcsjjoqV8z",
  "key26": "4kpjFDM8Pg87m9hjhTjNuQSeNJyHmU4XqgdHDkQXLokBGFHSy7bh947xXVBZ4roUsCzLRg2uVxAqkZDE8H7VRTy8",
  "key27": "43xdfe1k4dNrgtCY5bmWW567aAHmvR5E9KMBrRtjsLp7aFVSqE8o3RUSbgYTi1UhSjyE3kxqJkTpqXMFTRv33S77"
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
