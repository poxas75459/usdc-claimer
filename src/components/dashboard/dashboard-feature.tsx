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
    "32UEZ5sqfTs7zM6k94ooJPKmq58KdxkrtW7yHdtBzB634aZZWqEK28SbPP8Wo7amV9ueEFZenocjXFUKasAmAGDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GpRhkST2PvHP2u1Yno9VB1qFJUCp3PBTkMF51ngpjtetH2bhntjNN2Km4xKxhb3Zs8F38Ax5oQoAxwWDR2ZWZnV",
  "key1": "5S3WRpospNLyN7noboAJUw8ujibaEVgvpKFRHdb8ki9T4BcZL4NSa1stKxUHs8na3ST7icHD4Trev73F9ihtrhot",
  "key2": "2w4yRLY57v8TxjYgBvqxiYhPAcN1WtbpJH3ztDAKnnAtHWMpU7yztW9cwiK2UuYXjz1naoGTs9wVgJ8UkSvT4zJP",
  "key3": "2zma1eG4i5f7QMBa6wZLDJ4ybJoz6CofAYPfse7pEsMoHktrgyeTDdSw1p8fj4B6crk4wvKjjHVGvcKVjNhYXk1h",
  "key4": "paAFL1BA372N6nqYpVLVWGYHZrF9f51RKfe8PCDgA1DiekeFjdPFwGR1EzQDC31mEhzpu81CTR9BBsHn18QhzHy",
  "key5": "3LeG5Gqqxwyx45gKpsok5Gg4VZRF8Abjr4LEDi95vwNnZa5bYPQCHPQpB4HtazTBLzbpwuB9CFAbGcB6NkToEHrG",
  "key6": "3GcG7Nx118HoLAgmG11cKPJV6ehaZ8aTZoCPa4TfnwgofV1f19sPLXp3x41kxGY8i7VpVMBpe8awdj2WQeZHZg2D",
  "key7": "2nREcwrgRRLywx6gFYGRMNGVSjk848DfLhTvagsintbaCKnFuZWF5L1CrqArEmXNT5nCNCS2r14gRxXNaWjtuPPw",
  "key8": "DHwU7oNo4EQGALcAuNbMPDBvtmXdNqLiHGwh3jzXkE5gCqiF7nquBXrC4XYBHCFXAL2QkNFD3iba1QxPpDwT158",
  "key9": "56UVH1mbf4CFfvfNWGi3ZXHvqtX376FS2MSFBVMKGS5j1deZ3WZ2Anv4uU6nbW1pnLoYVEEpQ3eG4MkkHmKWJtSY",
  "key10": "AdLJhTbmCmpdxvwue5g4ukw9DRb9NM2vVrtM6SazSddp6qcqE8ARzAeRwjP2VVkJ4b4jLorpJmV76k27dbJiCB1",
  "key11": "35CcT3JKXqTu2HfGKr49mEYYm3ay2ouarGYzkuGJdR4QsULLAbcKG3k385FqB4e2wjjw5d9JhKHmrhZJU5Q8Vuf4",
  "key12": "BZrb7ABCorZE1f6Dz7MdeG1GRdeTMGn82AToqvKNS8gULxeUtkPFLnrY99S2vTLRdM6X25KQgtVM58DssAkQi7U",
  "key13": "mGLL9fT1M8MGFGaksqaGJqLGkPKDx2BvcbRuzESooUYhLeccykYgMGsAwTHMeVqJBenaJorrFitJ7TFEq7WJezv",
  "key14": "4EtVbQ1napCYBmaSkPne4imsP9JeDi4FacXgxznbdJ7dsoRQVGTJ3TPcmLwbqUy6kiRp7HM6mdEK17rhjKmQr6FJ",
  "key15": "2gzZF9q3YuoAoaah2mpmP5tzAq5s5zg7TKSW72vtTbhFbxyzYjACRirJuHQ9CNKf4UkH9mWurvxGoCvxDt89W5AK",
  "key16": "5KRb9NsBtzJrQCzv6WzgYJtTLe2mFHPe3L2h85dZweu7ik3139TZ1oofBrRq1yanGQSEShLL9YNfByKEWTLUHV58",
  "key17": "4NwJYRUJiKdKYFfnHQU1Yni2UNvBXx9KcWwmbKWueV4PmZNRifjLLxvJTi4FQW36iby8LUdGGrCZZ4tZojYgUiyz",
  "key18": "2Px2vnJGSRk1s8qUuPMkxef5PeLggp6NxffBC5mmPpeEscVSq9mB7BczjRiVfRn68WTTrxEwEHW4uJgrXiC489VS",
  "key19": "3AH5xmfaWPQ1D1wjeZLHrbkX6rotQ8jY7r3koMTXhxw6JiDNphzF7grM1hR6acmiBmgUzcJGGmQGThZUWoM77zJc",
  "key20": "5fPdYB4U51hZYfS8tCsciiXG3Q9AU7qCNVvtv3jNuXiBPZ9Ybah44qmbwDbBH1PdPHU8U2urCjcf892FvDXCGTVi",
  "key21": "36gX39pRd2rTgR3Umpn3hWy1oGZaLGNH48wdfvWV4zp26CYtpctBfPSeTnps7o4qpNXrDTzxaBmMp7VrPts3LYJY",
  "key22": "2BChMSpRyVHq1sBZaSUYL64jFCY9f1BzC6weZiagxvdka3NEgCEg2zoFba2LfPZSUE4GXMGKat9rX7WmtpbWjqhg",
  "key23": "EenBPuxpHiNLMSTS5GqAAcSqEmV8AKJDzRSz7AdKx21kcjbKGHtriMLMGEKR5GNeXWNtv5eCSCu1Finfotn3XAa",
  "key24": "4ifexPFjjJGYKkiZ7nYmnajAwkLyJp5uyGckcgyTgnfHE4nqfS9yjG6fXYojtTjJkd7gDYWnPEZAXCoX6NczooQP",
  "key25": "4xU9PpGdnQS3fXC2GY4iUvLdDnBEsxJw6t4BQLha5kHQ4q8k4N7UT2xPUihqz9SzpW4QhiznHePFKeZ6iTo6yKq5",
  "key26": "DCYyKPJEjcQ2Y2vydbythHg45cjbPJ5TEEVGCCgZ21GuaMRVeveBpGeNvQ48et5SLdmdPNq7uqucwxv8qgAoNiG",
  "key27": "5eT9cRqQYaPfijb8sYR4C4eZDNp2CuLkJi8vp6DuVTdeVi64vhpmgghsNF5HhQPH3w4D1AEZENBr3BmqJyHxkqPa",
  "key28": "5JQoFKLtQ3NoGr2pi3q61jAeQjrh698mUSHtzoNXtUKCewSwjmsNDvfw2xdwBGtom5WAVZkdvGx4K5rcdsm73Znb",
  "key29": "58ADSUcdSiS22k1CuXWHqgHPTsYqcTY75xZMC8WDEXFmpq5DqomhJhmWHsMtkkY64fVyQjPVZUM1LDHiJJYqx226",
  "key30": "5V7YJJoZRXhXJ4qqNqurKRhuBo2RNoMp64dsJR1HLXoL2qLRvA4KmhG5REWYbTpUzGgh8Np1y16BkFTKhudR9JRh",
  "key31": "5BoXTiNvUd1WmGU69pz1RCq41pUGQqagKNJzZPSJdGXYn3Ed2ncns3U3pj4Xha398b139ArhNwKgBtrCaYPm3m8J"
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
