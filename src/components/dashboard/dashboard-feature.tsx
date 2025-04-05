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
    "9qPT1VciJKa2JDr7sMEADU4Mevn8HtNbfnkoo4GB2dRsXxutmqKsEoBwfVmMnETYxzEzZzCuNDbxtPsTY1q5bhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UMxrjkfp6mfKEe3RfkYkPXhcQ2RLmeiMWmKDT77Aug6zEmhcCX8ArWSnnqvMMag9p4Amhnbha8K1ZhBe5PmnQjn",
  "key1": "5pkvFrLyHau5gzFHVNJMSJbzwKn1jneqas2y6tXXNGiRtPKe4gT5PSCnhYW6kFJYCSnfZz8t3VaozdB8XUgpcbWN",
  "key2": "2HgA73DPiWXF1EK7ziRBxeHrY61CMYa2GD1v6enSRMDjzavLJYL77bJyigbgeyJMEsoxeguZhp3mfdFLBCz7gtt8",
  "key3": "4PfCp8mCNktBWXn2emEbF3rT6JyaK8ducJoc5ZimxY2wToFGLVCU4oR2oJRTR7wEP2pUCqH7By8kNYEuTiVKbAks",
  "key4": "3dR8NJrZrNNtp1hML9pvVApzPsGj5p6mLT18cMRLyQRG3iBbGaXd5HyURAcRBtMxxpDFV7veYk2oSPrAF8LRQh2q",
  "key5": "yj8zWkEiFxhB6Msc3yLM3WX6MsJdydp3dQd9uN7uEaCxGsMPkTAC4r8g4bR95VDnMzrDpkGt13mewVrBSzwsApH",
  "key6": "4o58ZqQJZdVE6be9CH1q9UM2jKZRqd4utJxhppZsXLgQN3DSfKc8BDgXstCKy36azZwcMzscrs5ujjbvnxu5ZFtU",
  "key7": "RCi37BbrU4oKMdESgjXs12YgM3PYNA4ruXUMThsDAe8TjEFkDv4hk8HY8WqyWKfi31jXjoNupcjPHTEY2C845Fi",
  "key8": "vQiZw3Hmyqt9mHt4mD6BnrcUXatTTsg8CTCe56vk66W2LpVnKhixg1ysMWwfTJJFCmziSpbpRPrmiaJRVnq2L5q",
  "key9": "MXj5rgDTzwNBZSUavgPaa48S7qgK89vuDmyX1ziiXzo5b7NZpadL2nySQ73FkLQyX5erQr9w8M6FPZAYvCUqgFb",
  "key10": "3F8Sy6nGxCsTe9MbatDTBNrEsWvxAqEqBe2SKkHXXm1azPHayQNjcaY89wXYySkTgUYMfUuRbh8hYxq6wCmNN1pK",
  "key11": "3A4UUJa7UnzrqespkxaAUkUKbRPxmY3ySFtFmkeWNNFcAAwGagAvECSULf1qEtgSWiWQKjasnosCvS733wWi91SZ",
  "key12": "5i4M45rjMezMNnPetNWV82VtXVUnXu6JFBdqheQPh6XR2V8eacgQ1UrrQvrmBS3fQnsBzXB4F9p9ukKNB3cePLpp",
  "key13": "3z3KGUsqTPMMPuParaLK5xqCyeJX1DwG26U72eaBr1ttporgUeeKjYDNAs2aTxD5AwSDe3QNWE5VhezqXFMr1K6S",
  "key14": "wUmSbH6UF1D9JYrC3Vb8i8kLu36SXF71isw6f1j7LmjBBfrsMHTpZZ8fEHg1dh6x8Xd9HACyqRTmbGTL66pTDxi",
  "key15": "2n4zTW1jWFx4f3yiewnZGagjMWAr4PPXqSb476LKkEx6PWmUQo86GeDiysprkPLCjjXASnMQqEcDinCAz12GTjyn",
  "key16": "5feqkf27s9gAhgM1RgvFg3mYopiCX3dYjiHD89j1anrFNJAem6BWYLRanKo5VE76dDZ7bVnfvbmn4bMXJTujVcbQ",
  "key17": "4mgR2nF2PwjG1nBNn2RFTAXwhSn4R4j9aA3LZ7G9JEDZgiaMpsr3K1AfbYEpWLoPtAD3igTgVx2i4tu3XNHaahA3",
  "key18": "F4dCrBzzDpBEdGnMUGcNaWiNWs3wvJdhm3fxh3ytWgQrrYpHsJU5uRPrLJbMZEMGbJNSVS34kwSRh6yBnL77ZvL",
  "key19": "4iDyt1FS4vXt7ZG9EMoT6xFjX88qQYvHtRhekxZD1YVYSffsvZ7mdULKt5Tvfsw6YLNkLkhjrgdbukt47Ce6u6H1",
  "key20": "5whbckTv5RsxVhzr4AVAKn15sQy6AvLk7vSwpyjGevkwmN1EBzvBqrZRdx2GVfbuRSCMT5sJ1z53noTLZtyUZgQW",
  "key21": "4pQ9vhT42AMeMyZFbmhKkojzAeQpbXvMnPcrZ4jPwkBZ8chf6MGgPdbttTuvsf5u7133pZwZA1Cc8vyJgLoUHS8H",
  "key22": "4mSDMMvqd9w8rPdGhMcPcAM1BVbnra1maFmd8bb8mBgCVXXBa4J2heMykVfCxtMgQTDsRdTLySKTdVW884y4QtUD",
  "key23": "4LsGyoHCfkEqu1SAKhdKWjbTWgjbKx4FTkoNYjog5Ppgj6TDqtF2KgdCrbPMPN7LzKNnR55xeyW7QJm1ayeHSjSd",
  "key24": "65JTwF4U9MSBu4iJfujhNyrUJUDd3VhQ26rywdnkJmM4tQ7WZtG8vxx5xKr9Q9SXhk9TpaGCVBdKNpAyYj9TSH5a",
  "key25": "2YKeQ597Kt8khZvejsmHSaWCds7hDPuC5gXzN2c3YFiA1XHVvVcrVBTwTvSN3Xj4yWjb4SRMiv2nfX2pr2Q1poRS",
  "key26": "3PXBErYQnPk5jxjBEpzaWjyqUnBoiYomgPWyKHFnjSJHq6td8sZn7NxLdZ1S6fbcoE4mcrwnpVCm8oHoVrYRoaL2",
  "key27": "g2pPVQM3mVU5rRSUr2YbmZXkNt3CpSEuJiPHnPSiNRZDFQEb4q5ngGLkpir2gHAFis2CgP2q2mXFaVqUybgXAZw",
  "key28": "2iNEneBDxxLAgHWZhbM1huZNLfGJ7z2qhFhkoWmyKqgyoqhQnCcUdJbGrNy11mEzxhV5Cj3e7cbgkJY1XxcbiKoX",
  "key29": "3hT5P68YbAeoYw3wppXW6U2DfTDmRY2SDb63jxyHPVhgQ2LwzMxiFchErciPBynDgBDAydydNFGpiopdPdk73fvF",
  "key30": "32ciQC6o5GEQQm2ZjEiykwuRg8XZs44sCLXJB145oQxMyaZJtsJh1kEvdoHwoi7A7LPUYqHgDQTMchFsExrxM3Gb",
  "key31": "5ygmaeREuaW3Uj6HEFPGvDkqui51zMEjbSA46cfq5ARknLZTxyXi85zZwWvyTx8SVUezSGLiBaqNgiFN4GutPwHt"
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
