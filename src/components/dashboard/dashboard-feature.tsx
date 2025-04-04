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
    "3LyvF2CvR1hoXuHVtNriE6A34tio9QievFuhj77DczHbEnvGTmAUumfCT6VtXz97zUMtG3aCEnw94sZ65Lm4L4zq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oXSXpXqATouSn9fBzzDymTdW5RR7n9yaHojFxSHe5hc28jxYt7EdBod3xDU91HvEHJk59UjffsF8u9pRd8py94e",
  "key1": "3onZNVPKbHPmDZjyduRf1L9qbEBgMz2njQoNgGiAvJembEmWzsYnfwivuxyjB58EZMPzChpB2X7nioQJFov6Lzzp",
  "key2": "3Rf6Se5adS5o2Giep4Uv6uQXubh4nJ6X1UFbF6YdoW3TGcEtovpRQ76m7Rt4D8wPkzvzUnVPrFXZxXuSHuwE5t7g",
  "key3": "4ZUUCfMBoJe4n8mgfxxtsDE152K9DmCpDWXQ5bPnthHzVqWT6cmA2GLM3P1SiRzBQFp2ueMGAwYcSoqKZWsj3LTM",
  "key4": "2yjQ8po8KDdDZ82QmE8vhcidAMAPTVRVuo37Z3Pg77WCb7M2dSKaQDp2YqNudcg2Nw8WGHwaWDpb6D4vuwhJi8De",
  "key5": "2csJddGq3aCW7Xiea2bhsNRjR83Eq5n7z46mY8XfV3PbaqMZcQ1okVR91LHCQBKBPMCRak9XWJ4mG4JxJt6FKg2B",
  "key6": "3KtFm3xDMc2bcZU9afZUq2kZ1ef9JKV12UvMbtg8j9oaXrLiqKJvRKYsbiicicBMD9fvqcpdwuktED75PtN7GnjE",
  "key7": "3AAyaw1b6j3ne1LetxDd8GLQUwTtUF1afo7KVVDD8Ng3TWvtWNA2ghq1v8RkBAvvS9E8FTRLydpm3S9Doq2pxquh",
  "key8": "5VVBkorB7jX5rRqDDqNyYdA37LGgyuSth2vrgPq4Chvot9GZghf5VUHALzdiWpPwovZpk63ajBdXDpzghf44c4vB",
  "key9": "5nYgSdaNqiTmWqqvtF39jDU5zsBHtJCVPDdkLViESw4dBNWxV2SRozuyZMbarxc1pEocFQBocAcTPBXNtmL15X3e",
  "key10": "2JCtM76J6me4nmanH6rXtMBGJvfJ4ZHpFhiC9mW3ZevEH5qYPMv53Es2MiFoAquRaUbmmZNRfMErEsR6TBj1K5Pk",
  "key11": "whxWRqX6sMDCYj6kY9rRVBFoycTzS8aBDKQVTF37TnAHWRZshKJUVPxXqsQdxoYdjihg6PiU5yN3JgXPmLNmZFp",
  "key12": "2iSbN9E9vphNHN5CV7mEatEpyQaCJ4deykduwFRAkECE7zCtrTdULhG9GDqB2wuqytHsjGb97AVhtPC2bLrtnGcp",
  "key13": "3wSG1Bs3Vr7kFNResrCxpuPSKF5Z3w63UGVeCZvrY351BnL1Dh2goEbt1VRBbgKoP3k5DzzPxoA8QTs8azu6Ndtg",
  "key14": "5yXzeN6kTMN2kGraJ4SQhVxPgkBxkm3d9KR5Q4GYk6pdMMRbZEHoPxiNiVYkwruTpa68GpE38CKUtyaNWxWKfhRV",
  "key15": "3uAZ8z5NHQpADKMDWeDatSUT3TDatfLdbP3pgSUQGv3eKqLKpsefPuxACZAfesWAKNrdcTRmcXwUpyAnBmnMFpMu",
  "key16": "DqbBQL57QBwvFTXoZUDt9SDb4GsKr9rtprZLwdGZB1SPqrSZeohSLuMaMw2yJH7BMhitTJ4wSNZQsMHyNVrfUDX",
  "key17": "5Jei2tjVN4Qevcq43QdY6fxWsitF8edNfJeUsb3CyAbzQujqTy69wqk6k6s3TJCES9wsBJ6cK4zgVgBXUtjMLsAg",
  "key18": "bq5xRrMNLamcctU2jPpEnijzL48nwNJQiH6ySWne6md4RHVVgntvb7FVthRMArYBsv3nN42rEXjEWm5yKJjkqys",
  "key19": "47NxJ4ojQNeqbV5pA8GXQuKjCTZqqpaPCzmVAAYMa547k6fd9V3qah1LE2r3arzJ4AzafteW2XsRxQoZ2E4A4nEq",
  "key20": "4cMa7sxV7MT17W4NgxKJwFyfLepTix945rAuKSrpAxnunBRm1fnvJg6xzTdUFq87irSbzJmM5jdo8Mmv8MaeQc3Y",
  "key21": "63e44ErsqqsuDz3eddzAhW8CkXhtZkBF2JDFEdWKgw6BTyhoZdU4tJHs9VMoKvnqEZnnqt5CkNm86piQ4G7TPvbo",
  "key22": "4rFgpetKeSRD69n2dbssMbD47rpiCP4F1Pc6CGNR1Go6U9mTt9PPNsm3ezkR7HDVQRB8anV5vYQgpi9ndJe97tFT",
  "key23": "W9ktnt47hw2xEtnFmJCZxcAkkZwwccEXMPAC9WbbBc2Y3Z8TrJfJh32ckF3KBZXC2hv2AnArr1ubFv3nJCK1qcP",
  "key24": "4TQu8e5CVLa8o5Vjxd1psxqm7Euemc12uyWnztxJDbwYVXHn5urYL7ZUefV9GNmPUWfj8DBjmWKXxdGShgJbjubn",
  "key25": "5TDZwcewjM1X4Hrsj1agGzkuSPcP3aeyrcAqFL8bJAF9LoZYUNGQUjTKMbXkjjDLfdHZ19dJQrAJNA8FsPYqx531",
  "key26": "5tVeEjc2xJ6CKJC7dpH8V8wFpDsZtBMpQQHouwKnQEoJRR3bYEaMhG3tCh2xpCbk94MQkV7UDZv9HzSggNcSB5pV",
  "key27": "5VvppyZfDcPNRHi1RCsZTANdWrJFAN4h118T7913Xqdtk6i7fzjYHUgZ5hh2rxq9FSxWeYov3yBP9UXdX1TEnLje",
  "key28": "58ZMdEFkePvc7aHCb2rQgkehBcTPoT7WeveSz4KPL1JxRdxkkGRciw8zKhgntA9dPr4skPpGXnnX6EvMrn5UyBqh",
  "key29": "67SugFxHUVqGLU9eyC1pA5BzdQrEiK1tyCU1WShS12zeSGrmYJ9UAnwdMMDUbgaXXYa8j6rbycbg5pze7YpJQPfP",
  "key30": "16dW1cqeD7CHmjgpLC2r8oivJ5W3R1RzEpwZUXXF48mzS9sepj5PTbtkS6wMv5NxEtLygKXEfk3h36bnRjm9JU9",
  "key31": "KDwoKF62FH6j8Q7t7Tw4NDzVSp2xr2Em9gHnDCGXKt7Q2LaY38BuXE17n41TniY2u9iJFNPY45BdNvPw1cxL4RB",
  "key32": "LAQit1PsETSHvVTyhGnQnMhHtLtg57Y5geebseVHacQ2mvVmqPx3HZnnFAQN8MzvJCWGWdkeHe5MxT3pKNFGrkr",
  "key33": "QCGvAZWo4CGBZ1HpyhWQyuBKJhDDHoVKGtLo8bpExfkH1KJ74vT1LgDdZx2tBU9hWnzLVC39f6cNE56LJPHhBm2",
  "key34": "cdZGXRiwkEAQyswNMYDkTEaoiJWzBJmWu7t2R58fs7HWRKwSprjbwiNcXrBhiQbZ7EBPAg524KLB5jr6J5wuL7Y",
  "key35": "3UMchuyKW62WTwWugfFvu8Eman3hiQfvcnrcvEG3jgu265moARRFDEsTY69DMfpN8KJb44qykaisP2HMc5ALeJRh",
  "key36": "52Bsikh2TTs3fk6Pt2KRrKTrxLERR8wnPpiusprH3Sr8mFYWmDMpc3nCWjGTtSELvNbtknCguenrcGrrh48kHMtE",
  "key37": "ChGckinpRri1j2hdx1Ve8T7qZAChrsL1qaVAoEMoPHKrxFDkM6yKZrE8wLCJM7rZA4Eyq2E7ReNB94SivN68pYc",
  "key38": "38XrSYkXVLdK3JxdvM6Z9K9Qi31BW9dtVu6RM1u64qDX2vbXyFqfMbnQqVErVQBDXEwVGTnUFsz7CsZADFBSiGzw"
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
