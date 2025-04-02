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
    "2d5rhb4LHsicQMpqWd6m5cY6QEKGpiVtRfzB723YZk4Rm27QVg3J9fq4Bcmv1Hpufr1xePkQmgG56pjKwRcpxCUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pCVr664XzLc8FpeEzmPCxDLjFztngvooXuwcuCtsysKqNPLiwNMbvhW59yvsJBnuGqGzRF1fDweUa8kRoogW7t",
  "key1": "kUVaxMB1fKnPv858Bi6afjx9yv5jZVGL3NWANYND4hB2bTZNvCCetcJgjjuM1u9qaeyNS7Xe6Tz5P8MX7Wp3VfA",
  "key2": "jNWEDDjYjpz6cCxDEMAGSHoJRKbu6WgE5DMyJh2pTjDSBP3fEVJtqromqLFbTT2b1m7Vne4j88Za2cHtigBMRJV",
  "key3": "2VGuLaxkbpQikAptxg5Cjgw9fBM2j4RF6gVubXxDZTgTfomZzUT6vcf5Wxx7NrMTkTqWLYXg4N4G21izTffo1NwF",
  "key4": "24P31pVJ3EBi8AJWqvFM71vibvT6cfknWx5dAe84x2235iRi5isyNfzqMLH2SGXjKDC9HLsZ3pKWBJitSoSahhdg",
  "key5": "3nsWbjbTEmR2WFV8Gpmdfqesxh4A84FVpXiW2d1f8J4Czq2R24o7DWxe9kabRXXE3vAcsLUA5Soiv3TYKHsXaJm5",
  "key6": "UGgmEvGg5JLfJ7ZoCp6U72mWWVeiJZEXCaUMMaFHrD4GQZmk2SZYdKakzAWCPDGgcKvbCd4tAWYpu4aigXkV93c",
  "key7": "PhuVANZD7QXsmuwNFj63Kp6J49emD9mQpCHTbVEeD55ca8jBjH91otuihjyxpMp4KJpuQr8SnN2dXAm6AcMKxpB",
  "key8": "2MbVjBkcEyryMjTg6QfEKxkf7JoSBR31aVxeEUNqKSdQ8Bh4kx35MJaWCf5CQbv3Ds6iZGkq74RJf1kHU1gt1DES",
  "key9": "2vcjaVzruJtYam6iFDbEMxnigz9jDRuJyZ6NtHamRXLGvqrNJa3MywK1vBnsz6VARdBgqM6JuBMQNUSECzjFGCi2",
  "key10": "eyorpDwxwqNqUT3WruPrhJ3x9iZYdV5tRqECnL27KrSfNVZYeBuVczPKH67f4inc9b8N7qzyWovbgLRvHX82KUU",
  "key11": "4RJKajZj1ebJxx3NXuPNxwEBJtsMw3su2xVbNPPUKtWX14dQGS6iur2DEgJDQFRy6TXU4Fjx2zz1qjY1sGv4fN1k",
  "key12": "2AGDPWr8giJPLbH3fANAerdMoe4fYBDujpAWrh3erat9htcndFecSy3dyWZfCXLqhL44LMUtuqzHm2fCYjZxifsg",
  "key13": "TWjYZ5fk5LvVF2o1UqnLW1xyHRDs7VaarN89VZBbnQNWr1qtp2Wi2kJeYBGwu42XkQbwLFAmySg16ArpDb4Jkfa",
  "key14": "3kR2KrTVYMJNuQfMc7mqpCofUaqTKRN1oN58TFNFwXf3ZAGwkAsyDhuAs6Rbwzb7RBHUoWub1rYNHF6HTqCoRrxn",
  "key15": "24jQezNWAWHuvF3TUZau38rqkjtNjGyfJoazj1sSJ5EfpvLZg7ykKx8bviZYxaq4XWMVHLdRThRfqFTc82YtLnn3",
  "key16": "3rSbcddHa75Mu7eGnpFytboXCG4fdVRDaTk6s1d2zCogAwjTkX7smskPWNqAiqBouHq9wEM4RYUEkR4dycBVcm49",
  "key17": "3jBzAU6RkuMXF7gx2Uv7TJdU2rDoNMSmp58DitefRZTvF8Z95R3ghZV4uPfaDJZtMYEzuhAaw1W6YXNSXe61YRdr",
  "key18": "4WyLbnB2XLVPLC1txK5Xz6M15kzoQytxJByE5gbgUXtwqVL1AQ7djLsk1gJetE5fChK2VRqUKLeFgAW98W2DWqCF",
  "key19": "3J7an7W6JQj94eCcZd9fMX8Q937Zaega3hFqBXRMMjnXkYCMR2mjJWUsBUFvNjHeD7APSW4S1C7qFQxcV1HNJbig",
  "key20": "4QRNjv6AWaB9z2G7xVcCBY3XMYDBXCsQvg4AaJU1vW5c6ckMmBkCXhZaxzycZq8hhZ1KJuSbkG5t3VmmrjPdLHMh",
  "key21": "5rasf4cuGzAaAGRFPjWtQhTCgXxkxGXP8bHF2FwRxEFUCvGMZ41xhoHXi293drAouSYXd1VJ4YsofHWPUjJZCUUK",
  "key22": "8P8YG26ecwKcPixBUCfjerkZsvQVLmoeVP4HXnoRak8ZN1dxkTT8Rxj4jZ5d2i9yokAFVHd8ve4HXvUBA9o3dDM",
  "key23": "5LVP4QaEzBDPNC3sFDVMhx86aqBGjgYv1XeBwH3o7QFMJnJaYPjVgUsydJS8CjkLbWqNEqNFn3vYSWPDjUtADYx5",
  "key24": "3GMx7jLpjjBnXQb4C4wXmjLLHsZzUhrdUqyMapBJvHUvjUJxCk2RwDf5mYJ1EXA31GxrcAQLxNmrRxh8JddVYef2",
  "key25": "5n5LkJiS8WkKRvXGfoasufaNMLVGnkEZsmzUGVTFQUq3g5cK9fFPYPza72HeiJsjQgamrNYqW5xyUQBpqBCQRybL",
  "key26": "5L3ZDTLCnfWKrTPoxgvvU14URb3xK9HWXTx51jLN1VfgSdxvf5vdKQ3WjmuagpsyA2RrJwtkEzhgp79xv5ncKKUC",
  "key27": "66au4Uns4kgW4VBQQ3oz9aMYarnbfpDa3wX2jiYjZzeLgDyD38xPh9MixoqiRJwhB9tdesC1RAU1UCXmpTmSUJNn",
  "key28": "44bohiik2vh3N1FZ1xixpxk7mjRmWMWwLM94PjYt7AqaHtyZrYLe9PtCJxmUMND5BVUmjmicSUWJxkJNgaghGcma"
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
