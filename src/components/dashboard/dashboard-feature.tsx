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
    "8T5VPbreisSFN8V9TALbCdBmQFeue1K1uer7bffFcRdfz36PvAGpJJNJ9nwBHTngS2YxddwWtRmde8AfPe7JLfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QwMRNVMxhG1fp2fUq2rxdhkmibizUyUpso3iFBawdB18c9QrfeUvLVnWxENQB6dHFtFLbv51ZsXKGEHm5t5u7iA",
  "key1": "2tpDkMpow5ZrKhER1AbjocK1mhwXmEVjHBZuJaJWd8vP28aNzyopJwGs5tu4pEXyzhDGwFS8JhYu3oVDLnhwhcWA",
  "key2": "oj5S6NyWXLLFZbi6Cv28uLCNTbgxCkpMfXaLh4Fw7PRyGMR4ZtevfsBf8Sq43bTrQvgjECv6V75wYkGTjmxhZxL",
  "key3": "rbsfr3kWgAmmYnScb134ij9DwrjSKpULzQVWy9ziGgXJvF9qGZHKfVe2SC6GTSdSGwWfep6HKLrYF6QwxZUHRij",
  "key4": "4LLLZkwhTyy5wRwh8LEgY1bwzX6SypXmBkDt6oWAV1ThAuHMCHvr6M8WErwavTzAgYHo2eYd42wkPXTPVeboCaDt",
  "key5": "628oRY2TtdEQVr5Z6896AUmq8QpCp1WEt3BcK45g4vVCd9pMHRpXBpo9BQZR3L1HeQNuoxTCuWYM2ZHSH8nqZHW6",
  "key6": "3Jb5qFBb9Rg8LSvL6e19HhymqJBv4Dgcdkr41W5SSiTo68pat6B11J1jnzbwnwLGXYybQ6W2CbuVh6frjzLxcB3X",
  "key7": "5qHx24WUB91Ly3qpVaihoJPoQFtcuUdGMzScw4wRj9qrwkdT1BxTLEfB2B58QZ1UpaDSU4Tzs4nof7h4tjGz2VTN",
  "key8": "4GPbPmKBXDg29G549QvuEvYatBofRpCVKPpqpej5Hk5xNW8qpxn38X34tctVHVzJedQjoZ22BNGAQcrQqcC9AKWg",
  "key9": "4A4dBDcCbnz1zTKXcUZdHvyzcRzR3GmhY5krvBVEwaX8eHJU2GKusQKrskEVkUUUDYo25ukEXi99xPNf7nJssV1i",
  "key10": "mRNcUV55pTJz6s3X64YpUzJpnGiMxGQ5oEaG7GnE2rHuPUwqxCzG73kSyPgH2siKH9E5eLF3aDjcY7RDdWDcGVA",
  "key11": "4PTAsYyqdmDgcRVGnAJrfh2hSXywpBmguFHbSNuWVEbqG3VxWp1PhG1zcwcmephSxY2bJzvua57pu8pHZmAsKG9r",
  "key12": "5J4xfXBRLsq3CLcJWuxf1CVTdMT4Kf7e3mKLfGnsV91HPvfiEsQkk8rWzT4QLNqVGf2eYrtMMrHFUQgonWmuP4eQ",
  "key13": "2NbFS7kDCywkoYYwWxsFUqNoh4GM7MHQKwUopv5j9g84TP1sTEJDSDKoNaMFeAH5M7dztD7aaULeqwpVm55ixdJy",
  "key14": "2pTSdwtA5stJSEBebQy5NJqKEKuPyDsHMJvXrzHyC8iV7vboS1ZY19z8rHP1FbKS7gPeTA2DphLJw12kWazwbiWt",
  "key15": "56yvZqMD2Ymc9m6h9isfXiTfzbXNFqKFqg9GdVyUyAfSRaqpZ4tb657YGoNj2qj3bNrvThmMXbxSC6oVVjSMQp2j",
  "key16": "3Um9QuVehpiVRBFw5Ln5xjMcXENC6ce4HqtWeUthgNcSzpLneoWxTKiSbq2KRik2ykozAz2a1bqZtKzdfsWVYWpy",
  "key17": "2YcFUN65ZqKqq63f7yVVT4SVcmsKDsw87SoDEs8Jzcw83jBH5PEcbzs9t5p3hbRwnUR3kJQ4sTuvQyfwmYZfmbPb",
  "key18": "5X6DQsHESC3BcNqSGurLv329NTz1fs4YBvCdNryXRc2Pdz6LiMndGiVDLN3yvmiPZWD64qGfBodNFKpbH34B6Qpz",
  "key19": "5vmxABobA7qtN5SUvdZPzPuxffS8wHevvtgjCHy776PszxecBT5Ly3aLWdPe45gYBZRXAfqfaZ1ami47Azjgk4C2",
  "key20": "5YTbNQ45E3hiVUVeL95sDg8PpHiUcgxn6f675QveUoHB7UJ5fT6p4LDHXNEz4d2KdfzYtv8eMFqm2b2M986pbAyV",
  "key21": "4gQVKMQYmG5XPh9CFwWXCnZhxMrpuS7MKUwikRWK5texA6LauGgngGPhPRNGHNCZogrAjJbUjcLUnDjkZpnNQDLm",
  "key22": "2Roiv15du1jMWxhLpSPL6Uc2vrM5bj3ez1ooLVHn8MYshG7zKULj4djGPZvXS2jtiaBzCgyQtmnPwsUw9qK8eqEU",
  "key23": "tsq8hfZeXQqzpoeVqUJr4tznUwFTe9bJY2CeqKLUGTroAuM4CLR1jvTXVw95ytqBJ6XTwGD37Uw9Cx6G8iV41NY",
  "key24": "3TYvYttX1qkMJnHf226gDHGVtS2Hyi2BP7JcxxViYgQm6GJvHxi6qHFEd75awJ5AnJqUgVfTEo6YXb3Rm9aZGaRc",
  "key25": "MNbPq45ykz5aDnkysTYqJ5G9vmKUtyv9V8jXRLh1d4Vw7beS79LTFCzthp7d8EZ4AuBn6Fa7yVqcL13Ujb4BTVu",
  "key26": "wq9GKum1uyVeu4PXL6B2oZXHqTkmCPFAdKxjtKhpkfJy4nhd2MdrZkhkh4kNbVJD4AwKYPn7qhQBkknXpoxsnB9",
  "key27": "3G3E74SSkMPNq5pkVQMKjdQ5aABVD7PY6EX8NUZPQhJToHhvr62AL8iMSkuyRRBpoWwNmgZ8qJ6p1yscEhWFLMFA",
  "key28": "5xomvq3THgqik5LJAZ1NMPiA9yZEjy8U3vbEiXsnFF7iCibqNHkDqjrMu95PSzRg18GzQH6GR9vTe1J5RJaYKdTq",
  "key29": "2B6hcjm9PbGLCoojj7mPUp5V2WqTCDipTt3QEizFAFWpKjkfDKAeZd4vdnVYSyVULfJUzVxmkk1eAzrbR3JjXvb8",
  "key30": "39M49Fd2VSAjuBBQ6AwLyNN9BxC4wbSKB6zzDpigYEjMzW5228NLhRGW6sbtiEPym1sqf75s4SyNz6eogFMQbUJM",
  "key31": "UoREm64AhvDU8TsAcAo7JT6paaUbi3WUbRDAa4WvuUC9Q1LkWUSWeMNDgWzSSam3jkmM4YU7bN7cx8CpT78E2S1",
  "key32": "5tW5CcteSYPCGnWbiCXSmdjLvZUhP7gsBm9uMd8k6612ULBXxJAkHwsoa3UZgp6fAfCVNUJJoH2L8466icfv6Tra",
  "key33": "3Qmps57FjtFxpqL3VfXgRCWTTotrygSYa7a99NtmEY3rVStgqHVuiFP4NGQUM195czxgiy6MSg9EPV3W4ZzH5v3S",
  "key34": "3E3Tnq1RCwJ2ub34cZWhQ3PmypcfmPgYt8yHmo5vhXQJqubpiasd7D7moXccPt1UfNdmPGgjpf1vcfxc7wKxYirT"
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
