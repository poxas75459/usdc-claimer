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
    "JVqZdHjxqbePGMmeB7fUj3bVzoQSjiMK4ZMxMYvn5QhuMciFRiZXupuAdA88xZNKRbHx8Q38a6msUzuVr9hE4AX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36AdjDxtAkk5sHDryHc3DzwKCja5a1jGD4rSDmNHVFUw2gt8YgY1qeFd6DSf52Z3Jv93fjsPabeWcLJzzDUocPVp",
  "key1": "3H6C5BAC3499MK5CxnAyaJoRZmymW4QNtfZDfh1vebJKWrrfR6pehZfAVh2pqBAakWEoejCnSUjpbNs1QxTJ2FgJ",
  "key2": "4UduktaJEKVCR3NhHsa853gwNv93qAKh2X6aTwoyqh2L5Ehh32hPfAkVdDveEkQhAN5usqZyeJ6ViR1edeHkYXvD",
  "key3": "4JRWbr1o3SJywCoErDpoYcJjY6SasjMcnFAnjoj3ZKsQG6ySx9gRBdPusurRwwAbtjaNwemNzFfrQve1LebkLokd",
  "key4": "EeYPa9oRvmz8ZQSbvNJyoU7c8hw93Ph8ccWXtX4m2Xp9SCPGdnR78zbr8Mot46NpN1AvMbgCmVALiZyCA7gLH1T",
  "key5": "2W9jG1zufnBK9jSnkMZwyXgNKHcf5yNTNaxnozGYaQudGoUaEEgNRh1N3S8myKoSU5uc5XSVhUhCY4BeFYqQtx4B",
  "key6": "66uQpHeMW1cA2BvU8r6iQ6TmbHi6LRVxHztFtKPBCQVBAbp35R2eTMF54mFAhZ4kPHWMhcEt1x46cnouV4eddyct",
  "key7": "cFR2wusk9WPLXayWd6u9fgqrdHg3HDf71e756po65eRoPwPird7dBaYzn89ZVUbnZT1rRrm2yC4RKKu2yQEu2mG",
  "key8": "2TqTixJbWZdsDBcvEnnKBsER4UmgSGA3QR6Ah6fUR34Zf21JS4bWLeCqH6nMoYg2fzW44P2A7xLoJYSceAakLVSm",
  "key9": "3B2TZXT13XQw57RsEQYAxB1jt8egfZXdFUwCPrJi9qf3xVQZ5h2LJusGdSjWw81KYuUfVDF42Lv31VpUWuaMA6xS",
  "key10": "3Fe6gB1kR8F9VacuepfUtZkfxJpDzDCRQpdtHapJYSc7gHJV9qUiQ8bDCd77beMqTyJgmcdfNSySdQTGXnMiRFqz",
  "key11": "32Eea5GJAifSmDAKaQ6mWTjdFTKFXHZDBbe5QLb8GpDzk7Wqd95iR14c5UFjEGvviLpvuTUAf6JMZbKBMiweKYYf",
  "key12": "3vXVZMwT8w5Cv9tQP3DUnh1Dz2xMF5Awu4tedBtdU41heZJLkijVnyFMsgNkFfP8cuhTGUaUwhaLAPAT3ijbuRP",
  "key13": "Pjk5BhPNdWp72BsJpyeqq9G2kALxiDH1wa3NcWxWUPKX83bDQCwoMDG5z4TeqLHWYfTLqx9AG2mfaFreG3Wj3WD",
  "key14": "5PLbWKTNUZTXjg6dLPLSE1ceYCkrcgXDgyV8vbDz38xRaGK6RT1bBMfdSYVAt9AGJHDxobBjMeujHw8ouGB3sqeu",
  "key15": "33HQ8MYhmfcS74ZULfJ6TWVwR74esPsvh8GeGtSgPEhQnVipjEHBsPEgmAz8bqyGPeDaFN4hxK5UGBybNWStBRXU",
  "key16": "24MYB1siejCNThDosU4Tp5pFD6FXgp4datHSywa5qziL4BVhAQDusrurymhoy14CjCDRY6wYT6Gq86AxepiJuMRq",
  "key17": "3scDTKkC4SKHjrgvpxBR2M4kYw1Mz9gi1ULm52Aiuciec3qqkN26j9TUkvcY7FNfnEVH14iEfUhqcN6PcjeUaGv7",
  "key18": "5FNGkHGcDZDTQnsopWei5EHtcbjBQe3RRfuQ3xHcP6QHN32j2xJ3dz9HwQi71QhQdm5UoiLHg4qc35Q1x7cLitEk",
  "key19": "mknJ9ph9566VfMT7uA8CbBA9ATAJqE4yv84hajm9eVGSQtHt42eFGSTY9DUzJvTpbgAdx3kHrEcageNG52bN8RH",
  "key20": "5RyeWDy81SuokeBQ1BEsZXgqvFSr6PceV95eaMWMKWvMWheFbiCSqEHj6u9twS5jDZv2TMNUgLp28vGiSa6cy5YC",
  "key21": "2pJz6pvxovrywFQ2FFmuYsAgVY5ZVpJeZ8oKxQj46y9WTiFeLtpSmCVFYyaxKL9iNn9zQrVzcvpSp6oWKvBcGyz4",
  "key22": "5kjHxmEy9Hsiuw7w1297UZjqB2kC48Nepv9ZvuPoWXdXcchVFmp6jsnapnaPdVobFfjQL5ThwPywgAjffmrKEYCe",
  "key23": "5DGKhbekw5YtQmb7bFtT1YjtTgAuSEkjCprXkoxHMsC9LUCRHji33rF6WUEgchmUYWU4ioHFH2W4yk8faaYUNAeE",
  "key24": "4D8B67iubFzN6cAnUZcDJXFZFbGqNwQgdKUDXMdasvt73VzBcHuR66iF2EZGdFJqZksiC7QrDGACRu4zmcA7W3vr",
  "key25": "63WjJJtheYPCLWpQpMQy16efLg1hmsGHFmXmwNeR9p4AcorSHCQm5UjbBjG4BXH77aDiauRwPgJW3QfpySWMcAsp",
  "key26": "3yVaGyK7nwLynRZX6NAWrubBXtgFuGojWYcGyU4mwacvLL8WoaWrt92tovNkTWBT33dUqDSQuwBhmMq1Grwjrttj",
  "key27": "5NUe8KihzunZtMAw1RyLPw4iqhH6k83Ppv5Wo8rYF2ACfT1mGrgfr2zT8zpTL5Up9jxKXNTumLYhBYMzVGyms5ai",
  "key28": "5JQ8tn9zoQMTMisNMRC41tPQxQcsViXBvQq5yF9YEpSYTeTkD86AvVs7ESX1L8uTA7XbUVhhFSUzok1uS7vEmfQh",
  "key29": "4UbkZBvFK46PF6SP7cx3oy94ootG4d6gnYrBsk6Xrhs3yXDL82PrHFxWpWEg7etVUziDdEK5dQWaJxsUdzD9PY1e",
  "key30": "5wcnvkxbVymqq3yHkxtBLfHgm1757w7bLxsoS4Nqxgnt7mRZBoLee6xfFdYT85pfSbxJcgReJpwMGNw3qHAYB7z7",
  "key31": "kAjVPBd9WvqWtRns9BZGK9FoAMYrMMMP4sZtgYuDPxui5zeA49exNcXY42pcEHmKiMNirhoxrzL6evvRMVr9T4y",
  "key32": "2FdCc16d9EQesnv91SdLxRixmh95chZRhSWNNBGrQ9nk2yj781TdyVV4GBWzxvgVjrc6ttFHX8344tUQC8fDJoxE",
  "key33": "5Varum4PsBdagA9pvxQkVYgLbF1vVhkfp6e9T8UcqwV4nK4R4XyHxpH5S4henYvJ5Jt2MHAnAauuaLdQNUfmVXoT",
  "key34": "4KVNhEowbMJurWuVgz8sw7ad8QebuNKNaXBFJ3UM9bbkKba7zGUeUjbH7ARX6QJMhFtzTLhVFZUFP1JsLV3YP5iF",
  "key35": "2HGyquEcTm9x4GEFnF8nf6wcUoJjx28JzMdgJ6ryg4QT8Dxu7aAapUki2M5U8QukyY7uoVkGxc7kNi5Je7z86DNe",
  "key36": "5GvppTEdnwQgRWJMLTsBKpArnYe1iNvDf4x3C11VnDVcjmkb9zwTDR4DUBpedvrDhCoqmehTmZszv72i5xBFUi3o",
  "key37": "G2FSNM7jxSCv4y3nDdZvyqAu94NRM5XM6gWtL2fR9iYS9sj6UGWmhKeRrPTJjGnwC6R2DFW1XS6bUZBo3rMyxT7",
  "key38": "5bxy399tJdYLPpuoUbJMf7CMGaZvJfHXmW3BQWJYCHTtnuR2pe8gyNuw8aii7fE47BC8xVpqu8BVSqcsRMRTnQ5",
  "key39": "4hxif7aK2B97JT6nq6s7Aii8kZdvtsPhdiBkdmB66tsiKCAgVoErQum7mh7kSTefAmgpCya27tKLGP8GNo8pFwaM",
  "key40": "fCKDu5ZtV87E2Rt2sQEabsamzJrfmezLMNm2AyDxo5Mf6WHRsF5frgPmK8SJxpPavNgLKGLi6SBjD15BaWCcZoa",
  "key41": "5nisNoegyKGyKLwCXa2VhmFdAdEomjk7hM2Yvtfhe8X1TVVFJoj6SgB3iQKvZXxGVSGMnHnvZ9errqZTkZD2vWRG",
  "key42": "2SDBxnEroESvxHCSEeaJdFr2wsZRsXLw2vHxnM4u6MWsmTuiRZQeAJvKXVJnEsMUbxi8SdqwwECXLCcUgzMD1R1D"
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
