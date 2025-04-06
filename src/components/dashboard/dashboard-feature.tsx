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
    "5TzowFgjSbnFzBZVR1ZzyAX982KAyk9W52j6iSLQ7Y91KZSDFw1r8PTEiSMvEmh4Y6Vpzxs18y9fizX9BRF2HwwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fm8d7hzzdy7WjRynbinfohCzoLW5t8PXCocVEGhncxPQkLfbJbU8SxsPyMi8W5ksjUNstoF2smX4UvRsNiSxh2U",
  "key1": "2s7SMaWn9Pysx1cdcCPJfDFG2FcpqKtajqspaQ5HQ28BiUS5no69eFafbgaRVWoMdZWqGerN8ryJeT7ttq7XF2t2",
  "key2": "3DCPMs89BvhpSFaf2D2wtDU3yQxUYiDrYXQ5afdCSGCy9E6Tdkxh9jfAxZqVvgKeu1rrCqLNmjLoKNHiqaLar3Z",
  "key3": "5P4NQxoYuqsnLqqM9MbrEZ6dmZyp53kFWJKoJmCoU9anVCMJg6aNJSd7XuooHjPDYRQUQS5ugrpq73bephhfuemw",
  "key4": "3iETd84ysJvUQm9MJ7ZDu624SMvqMW8xkvTKiWwveiCqJGPg8jBw8tG21QzCZkrJCNBgjUEJQZ94etHSLfHVdiEw",
  "key5": "LrdppBkUt7fEhpCe9fUL6gC7dEoN3aPJVrxHPQgbQXbDkmww2ECS1nGtupy7rpf6deRpRVyiHVrnmGYqVhMEUjt",
  "key6": "2QEGjN5VyxMpvKE4nX9pvVU1AakVjChkRbLEdGcWnXyKkLhWxK4CmJrAYLJ1hkPjMzmSnukvHJ3ooFZZWQn6midR",
  "key7": "2fGx7fFK8a6qqSvCeeLFELRzMvQvWRDFAgvCC49SCBwN4T58UyGH7DzxhExXQcCFW1MCAw14x9MQVP9RegrCELf7",
  "key8": "2xZ88HAaBQgmAU3YGUQWcTudLCjMPihFE9L12zKKfmppTb8Vdj59zMu42Qvziu7My7SqiMGZ1KNpGFvXkWNxmezv",
  "key9": "3SNV1H7EX5Edizht8NGLX1f3aD5ZTEkiTU5Kkn3YdTvSgDgasThybKFbKbc1wKfr7HpKwNkXaK9TvSrmjB4F3jdp",
  "key10": "2R2DHVEidxkRXBXmGVTRELJUebHAf1RxhgHrBjHUrdE1nzHJScHkYVgmLiABaBTPpbmG7FhdEpkbmq43yJRRSBmh",
  "key11": "5rkXhphLEkE2abLVrmVMWcQVdHCLkKX7ouppEWWNuc8RB9yU49Yc6gA9h5dcVY3T4yoUPF8FEWYftTVcvPBsxGv5",
  "key12": "2fZbLorcJdsFHKw4CDmVYGyCY5xL6kANCvmLwaNVUc8bwya2oSK6oBYgygZJ5PuYA8D2rxQVQsaAxco1nTNhqyQD",
  "key13": "2z2mHHpvMcC3CEa5LLDoFXY8Ka4YGuzvLAgD8yu9tP9wNh6Z5sXREZVJUNbwkpLLh9kxELk4PoR9t4svDn1qGxhm",
  "key14": "3c7e9XUSsKJcQ32jPVSUBn5DzxyZFMTmGmQEnqS1knw1vB2ZxxobHRoUpgbJfz1ptt4uCXs8gD5HxSWVUp1Qomt1",
  "key15": "3uYVkLVWemkX9RnRjHU2sAp3ugHWCc14LpeLK8771YEXApQMA93F5NVjvs8pAk8QtEJ9fLDiG5PSQ7esU5V3sMiF",
  "key16": "25DujzSK5LuXHThSSDfePzKry1ZHopFSoeokwKaz6B3t3PJrBrzpowCSC438Y4JiPU5Mw1eLbrr4uiG75rU27nCi",
  "key17": "36L2dwLXNU5dDWeAwumBiugmPPCpQjy7i5fA28p28Bh191qJd53M7ee6o49hmYPaHy1JfedBZf9LYdFCQqSmESxk",
  "key18": "4vrrcY7jx6h2JnUtQHZcS38r1LA1TsSnytYivW6r4Q9CiHVYgQqSCnggZCfj6TVWqFiqZGtwAMQ6xgwHEJyvWSPT",
  "key19": "3XqxLU64cb6P3aCHf6g37jweUUfBfA9TswwEt4PPjw1HSNYYQRi4puNko5fo4jvBmxLMurmt9hCfQratnvzNjqCJ",
  "key20": "4WJnrm7KHPPDLrevxwuTQgEwuzHexNE7DsHAWRPefu2LiZcAuCUNwSHZE7A4sytxF3r514YqvLr1C7QNSYGZfvEm",
  "key21": "2WwMDhMVmH4RoZqnFwa7DxG2GM3ca52wJqQPrv8NfRsp7VCH3sAGB8oXMoEuJo48N9Bn4w8Rcs842o2oaj6XY4yR",
  "key22": "37r3upu1wu3Vvt92FUq3xWrYMLprwigvEJjdF9dtwNucfaSoa1hoKZ1Zvt81zZdcKzzs93xcR7grrUHuMkDGiZEe",
  "key23": "nbHyMcLxAY3p1QCxQkWwLsxE38oBkRnqdxHQ13bFxcrTVB6MCT3BK8UAM3NLsUuf3sZzPbwMhHLtjPtADLxWFmc",
  "key24": "5jjAELix7M7J4WgSCaQGLoU1H1j9jh1fY5c1VfiBovb9gz51WzoB5dPkMvpA2EKjVzeano7tC5GPerKqnyUNEcrs",
  "key25": "4CYisoua3H5sP1NH4wYaWeunKRxdZDeb7L3TccnuUX9yEsNAQA9SL7JYVoCe2kdgLLEuqtxBK43piymNwNm5NuG4",
  "key26": "3y9WZaFDHFvTwMHsLrAP3JkATzQNvpTYSNvbGxEJfwmuzDU5oqSiPf3NRekmjfunPetCP75tsnVdHrPvfPk48JMv",
  "key27": "4TtyUDGubFicSqNqwXSni9yjZaQr2gsDtCMMds9geRnj3LaYrjGtFi7u3qpNfbJMFWsfqD9v2adbnYLbLyYbVy5w",
  "key28": "fCsGkMD2YqgzjnTAZgXRHGn3pKbf7VLcZp56pSgnwBdd7iufpjjVpEgHBxSedb1Vq4RwEPVVRPuLmz4RKu9vg53",
  "key29": "AKNLeJpX5HhZirNNgYcX1iQkqyxGCBQfbWBasymQynKM6hPS6fjMjgcRBvx6pXF7tGFHg21RRK5Q36iY4S2GJXP",
  "key30": "GZSpUsBy5nSuV52S5fQwtdfM1qUMfeGzDGZ7XS21Uod42mp6fnbaNkbGpXL4ZeRQamh7zppKz5fNqQFYdorZtvJ",
  "key31": "5AyVj2XTkKRt3oJCavvLGojKWXrgMxv1bobwBCykAnZ1PqwVWPS1v97rmfvRZNULt6pTmPvqhA9GwxhFG9pmtiJP"
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
