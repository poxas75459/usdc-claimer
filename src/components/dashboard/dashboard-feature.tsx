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
    "4eUBoYv9iWA8XEY2EYQb2Ve4TF8bxrQMD5xBoCm6wwYP6RnZ7cCgvYYH3PaSjFa6Sha5qbEEFDR2YNeu9rJe3YG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PXsUpRHE2sFVsz8gV5Q2FAv2GHpbAYDQAuaNqSHPmwyUgdaaXpp3i9CzG6kLTcgB6Y5FDto6bhwWLmRuNcPWFX2",
  "key1": "33XZxrpXYS3mzm4TLAkEeFi1u1s3aGRB5DbFt29YQuNWt7jH8Mra9NeTC8PsGb3RWoYPCv1xjmFsWecN6r395MFa",
  "key2": "5TuUdyCciXYaDhCHb1X2zFHWqPrL5AtPQAxdeTCFLuFK8MkyAsn14YMkTWFPDHcLpPxdeTiW3WTeHUBAyEofgeKM",
  "key3": "3pvCuL75uxfwrcbw4jmdH63pjeQXUtmF977YcGoCPjHdiRsqnkP1BntScocEHKVr2TbPBPGNVzrpkBiaQkPPy4ZE",
  "key4": "2KwfFiE1GzpDc7uZyDsE5KB5Eme3uERJBNjbaSTB4wLUSaCrF4UQ7uBrWMUs2A6QyrKMG6fFdSWUPhSF8xqR1KZY",
  "key5": "4ZMr1we6J8wmeSCHCju6WhFdhQA3Cb86XU3PqCsY2NFDLmKmFwdcrg4C2ouEAEAk1HcLHh78ffYANFE3ctLDEsxJ",
  "key6": "5g3mP8tRe5MLiC5jWZUiotGyzjDDm2ZMQp8MSAD4H9ER8Bm54tYaYry6V7bKc7SAupDwXkoAjfSSt8atwunBQpk3",
  "key7": "KTNwwwoXUy2igoHM8gv4c55gH3WpEyWiPDVqtdpR6zwybCCjFvn6YgAhekAhiriFNnBXTuKc8UBZACA1XfqF1g4",
  "key8": "CDbKT6TdTmgFzJEnAsApJX8UZSNNKhB51umdu7CcPKfCGtd9huF6JQKMxGw4cvnyBTjzeRSvQ6ygHNfkUj4GqK8",
  "key9": "5ceGEG4HjhRGkuM4kc9yZEHXejetrjTE1c4JocgbxKttvb3d9tqmEQwjuKE9qvqTXjaUpGXM6BTdLmKMxh3RBobr",
  "key10": "4RVmgpzxzTcen8JwyG55u1mk2an85dnirmnXDEAXZ1v8Bv51Cx9UkzsHtrwoax7TVc8ss51gMsSoxuvqgfPZaH1q",
  "key11": "4rwZHBKxstjFrXjgDBSYBdYxYafFVYtvtaUUrGQTAdJ6DRrGQRYrzwc7bYzWe5TLwRarYTcfD7mWq1Wzta18motp",
  "key12": "4ygtWHuKkf5aCjyysgpDC33rqA2UDKH5jsrNLLzZXVp3w9MH92fg7zNK2okApziwWm9DAuWC17EwCmy5giv29qX1",
  "key13": "5UPLG81i4spffUiRuXXx92x5ZZqbYEp182tvXWDnkkKKnwA9kL1hZ5RX9yf8yEAoNLwBn8DRjeX9BEUnMJrsFHp2",
  "key14": "Ahsr27cEX5FGUQJMiRPaZEFeUxjmQMsSjsNayGDGNjExPE6BUMKTwUiTwnT4w6LSRTdkM3juYFZK4jphNtWydJV",
  "key15": "672hHuNdEH2WJYki69fNn42gGiRUYci1RSriuMXnqx6WAeHnfHbxdEMks9x3VD8jLPD13ykDc8xkg3HdWCyppQtE",
  "key16": "m1yybWzkHhvJiBeeK8tBfB6ezyMvrQY8SWTnrnz32RU841csiKxroNMrx1MksPSEd1yWpaPBSzk2nQkWn9JqkmD",
  "key17": "3KFPYLeNdUTjuvLeSkiKCFqdErDqZW9hU78bMyLVN1TYWZ7gcg4KppvSCPZ7v78CdZVZMEAjUA3qPhFT1AaZeyi",
  "key18": "3bx5f4dRrFDDSoVUfzb5wHXu4gWbXPm6PR1qcgHZb3KRYhDPEkEaLmJLVu6Wd82e8DRmSkmoQNvhpsuHFzA3qRFp",
  "key19": "2FSdFFKdNGj7MAuhu5d6HUNo2s2kS7QzfJJtNFL3ZviL98kbcn5iwbJdEjdoF9NJavaUpaeVLRLEKdCTFKMfk3Gp",
  "key20": "5rZ78L2Uo9Dg8L1kzE9hCxbhiWjSbFpe1fL6yvPoLbdevePkbGQvAHPcugUYsFczd7pvb4ftBWGDKSdzzZsM2iKo",
  "key21": "GP6o5vxwiDkpbivqpcuwV8qBEe8hhdL3akSmWhYDwTZFFSBhYJUeu3rP2YSFQLncXYTFUxRkwoVPGXBNodqoeUN",
  "key22": "3UgXs6WQRw2YPP8pPeMe3ViXKzrbFxPVSYfAJPrf698GiUWcUiBQ8bR9oFPDAFaasN438y9j6y3nbyT9Pq2vscE3",
  "key23": "5agvTsgGych7c6wQn118p8YbbpjZLiUuEH5YjNqFKwxfBncbggbBfmqnnmwMN8A51jDMvB4638G8N4hGo18e8g1X",
  "key24": "2Z3tsxNVWH5o3s36RMGrtHXBa4nP4KPCrPM6jfKYvTqdmp1UNE32NgRSVGffLs2ZeDV5gfZwFAXAWBERWjqJYAw6",
  "key25": "2um23759g2KqoKz4czaXddoUswpkGaJa9sj8xwKAQML5rmssbbupbH1bHotBcSqiCP7UGrkAydJ6Wg4VhXDLHNdi",
  "key26": "nNxD4SjX4GfXdBqobnwKW1bPGp8Da1MbMwoaNRBQVojUKn4YsBoTEDEKQqfdNQM3WF7wogHezeqfQ7dxoskizr1",
  "key27": "5SkuSTBAyV5jpFDGB8m8qHtRiqmuEHmVUi3KWqXvTppK5LwunWmRsLjDrhCK8co9QLDcXTVfAeyLLDF7nvAEocQ7",
  "key28": "4JeZyZyCXb6Hicuqd8Mud8Aqekm6ccs4nDmWZFpYcPuZdJAwYKWje1GyMn71eiXmECBsNZimNtnmg79dqAs4ypAk",
  "key29": "5nWLNGuSPPdoMUVuBFSpjEFkmWbx4j2kE58YvfrfLgNV3UkiVzLAEJWfnpyvbu287gg1rgVwshjuKFvT63TfwTCY",
  "key30": "GChs2xi77vioPzVmV8Aoje3ygeDwbeVL988tttV4dHnSXPQsN7zwk76vcCLocG3DENL6Tee9nQTkwnC6Kzg22yX",
  "key31": "3qgBfHWT79JV8WuwdbEWynC95eB3BwF4KUE9xPLBFhdt9wpNfxFZ3wWVaEpYji1tR6E48z9yxjkotbV27VZhxurE"
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
