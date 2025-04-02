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
    "Pws3LZgyqXhmkQDE1FW6Jp4MjcBCTNPTu7S1bzTWU4owBdMP2bMtYjeqGgXs9GBD5BKMTq6BT6CYzFGczkbNQYN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KgPCk6zwY6H3LCWy2nz9ynFcjjaJQGMCaJMeVvvS7ZnQgmPkfyDosYTPRtoybQS9eKppbcRWr8Jun3XBJo7jQ4e",
  "key1": "3GURvu4SW69619gQp1bcK5dsM1qZHzPgRkY6XivtvGMxQNgPxo1o5CA3tX2xeJt9gJQumtRuirdmxDs5F5hT7rts",
  "key2": "YTwgBCwERZ3fuqiPsBiHzbuCxmCX48LCDcVL8FbfiRrzSnN7mu36PSusVoG3ASiprfwSVLVMFJG5H6qnTp78WUz",
  "key3": "2AsNZLLHbFQ8zykws1M67CYBiyLpzqqo2YAMjpDoor4NGUQbpYw88of2P4J93R6pe2UhGjaqNBg345xWedLxnpZN",
  "key4": "63EczjsuwMED8dAWkFoEzR234HBRLzTaYWkBeQu2aEpNJZULULXV6jiWqBMTLK6tWm24qrsVwkSWLmHdHW1pjb8R",
  "key5": "48KggQDMM4beaWhoHFFLAh1BVBRU6JMkr3hgUnqdTQX5aB63J3EfcrNdo5bZikcAxaEfXW745ypBxquSpHpgJLuw",
  "key6": "pVmg3nSoFo1A9yE5RMLjtpztxRZYx7eopVfaJTMkf8Qf28FKqqEJKibUhg34svvc4f3dM6qaKny5JzSA6xGTxYU",
  "key7": "4bpdBjznRAWZfZ3WNZzkkKKcYAVbnXV9jBNtqBRyfWRkBUXdVPTsdVhD2oiRQw1Q1H1Aw8zGEEGFiqVrGU4sNuUG",
  "key8": "64hRubN3ucW3ZSYoui3WrpkuLeELZAwxG2e32WPPZh2AHetav1ToeHQnDDXAqoiaJ7DmyxRMHRLgNe8u9cp2SsYE",
  "key9": "4mVh3F8tCeE17aZVW3WfgfcWTtDi9b8D7GW2PNSdJAZobsGmsWrzFur2FtuwHe1SjxyrTV5VS87S9d6fQYDK2fwf",
  "key10": "36KR3a1uvhnJ3fUWEvf28VYagz3FyXMNNsbTGB1KBiHzzv9Zx8D36Ye3tWHUiijPsmtBYBgzAPhCTyKrNuPMZdUM",
  "key11": "btAUu9szU2eLhNE9zxoMx6vVp7yTZyDKU8vWw6QMeVC9qXeUPJDyMobdhf9Mfj8Gse9UHvPy13RW6nYrf5sAb3S",
  "key12": "2FHAB2uhA1NQsZd7G8xNcPu5qRWCZZKBdz2xpg5pzvV8pcx8ptCQzgVgbG5S4onnqY6z7XDBvsRjSDwDi8tN77Ts",
  "key13": "54uj5JcE2c9PTxA4Pr5g6RFS2bcNXzHDH3LNcAeLBuP4un32yEUQEre7N6vxMUA7PRvFAQPDmNtqm5Gp74J4dWMN",
  "key14": "2ad6Ds1YmUky6dzjMhphzoG4Mu3aDBWvWHkC2LX6qno4f4YrHtHU9HqiQVFymYof9kTfvE9dS8K4N5S9MYr9rbYc",
  "key15": "2jsoC2CGKiJCa3KA6jW8D9ZN8cQkSv2Nev7gKcHe3nf5iCF9moVaqHvpxs2r7acpkCVZn3MQZ9CGF7fp6vvn64Mk",
  "key16": "akYRBeupbdWGaa827WcwHbp4jvvUmp7pEeQNnq2WiWfYvziUAuZrCWMRrXw9Mzcgu5ekbQZX7S5FbPTuBgf94tu",
  "key17": "3CKdjExti9UJJaCmFwPtsirzenJ8MQMHej9rmeEL6EYNSSQzoDwdaUDgQ4WaowtfRGYpTASg1GjyVwmQFAksybtq",
  "key18": "62HCgPBhnSqVVUwe99VRuukXtdG6sYeNK4nKMxZh8cmqjHMCKgyZjhkQXHXBc1Kg6CvGyHtZAbJeogeZu5Goy3n5",
  "key19": "2nKsnRNGpM4G8KLWdvZ2Xuwgb9uuzJe7Jd5Z9XfFBNbDyhqZULBJxhmaYx6LgmdTZqtdRoNTGaZEArKsktagbyER",
  "key20": "nmhFot8VaqrezrV9kUfSw4YCnsZBwsrDqsKps3QXqpfNMkMxBpMDAF1pwYyzpVtkvavN4Fephbh59M5mavrdezs",
  "key21": "27WT9jjLnK23KXQFMdFTfbr1LjqqDgp73TtqHCc6nN8JmfyvFRkKtDskYAUpLDPbw7S9xr41oBGHsLj2uVwyANJ9",
  "key22": "4nD6ZLW2mc6WfMAJRyUMtqScaVSXiV7BFjP1xcHunVV3CDZEC1WVcjS3k4j4xmSUH737YPvYKqqwoZHKvkzPEfaB",
  "key23": "5wK3KoaHqNBDDuA67q9pmXxr1aU81E1YVQAiaUkPsRYfCEcb25iFDnsS4USYdRv5WP5m9uchLvNzKKYRYLn8Wcga",
  "key24": "4Yv9mAyjbqqsua1iyNQudtpfy3sHrwkurNFVhwWXSJg4sNRWnr72L2k4jXBWNjnkDab28QaT69LnmFNBg2F41hrm",
  "key25": "56ZSS97FqmejjfAed4BJ1mhAqotZeaZY2H4Mup5fPyAAJMocoABsDk81WJ57VgAqKuefXCwjepauUJECXVkxivVH",
  "key26": "4E13gVL75ZoMZwk3vEN5WeqX9V6Jr2kDuZPSzGbyA73Rjn4cS1WgL7LX5grocULttqe3HeW42vVyNFThsHsnSJuS",
  "key27": "5yzjMmw3Qz4gzZHTdFTAs9T562x6kNrjQK7npSr1eJQnduEo4VWwGWGEkyR92YFr7JPJs8QDPEsVaUeJq1KMgZ9H",
  "key28": "3WBWiCXnV6ZkDkUNwqs6TZTBhVSvFi499uNAWEu9AZxY7oi5NFNgyWfm3ZmnjeiFsF99zvuupeRobjMBYMpqstPw",
  "key29": "4htepn5mE1adimHw3ZduKf1DsGGDPf6YQRLhYLQjk94JHiNiY9kjBgvP9bHRHipP2q1ay6FY54uYR1H1ddYgMt2S",
  "key30": "5MPdB283DxhBs932kVDoS2VndaRXcqSmQZfNPifPDF2xiWEpNoEvNbD2WmbZYcY5eg2unx9E9HHMonc9fUrhozsX",
  "key31": "5aGg5EVM8Xq9tehV3zktsiHVAoGdHg6WxnWkwNWzxymk1iYFS5W3ytbxrpA29svsxHK7vf6qy4GD7HCVP2QZ5v1X"
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
