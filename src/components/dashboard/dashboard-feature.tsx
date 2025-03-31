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
    "4kpwLC4hKqs2XY1KUPiLXMHfrLBuxLeab2NW1KfQcufFTXH9ktG6CsXpVoS3Ta3fhmQmvnLmzixmoGpgrWM34Agk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LnNYbeWT6tXHcrmRmjLR71DjwwHZGb2etMoP5jGbbgJFa1waQ8tuNHe5tkWMSNXAdGdCaXz38xrmBNmiANWVymi",
  "key1": "5WtYu3Q3opCaV7qCJn5KqPLxyUFu5m1MX4yQFnZKvULyf24B3TwjHeP2j25LiibSfWVvS7Bbftf7KgBJuTVFf7vN",
  "key2": "3ASbHbRsdMJyZQ994z6mXV5Q6kvY4AnmgB5dKxjyQHJfdfwuSFwsoVJux8qEScVpxj19wBQ2YNg3mfpmBC1x6aBQ",
  "key3": "2svfjmsmo3H4cwE3NW6gBmATeTVXKhpNbjBiQDU7KrDKr9zpTHfpsg42qQ5a3LZH4D57KorfpoEWABVAqZDWBHyz",
  "key4": "3syJoHQ5XbZjuNLG6iSLSqkjf1WwHazL5Y9WSpqxppcHQKaeZHu9nMMUtBEBGYrs6zKkX6mDZFWTSSpHn8xvd6cW",
  "key5": "4gdYX27nTDsPouAjrHdbfxp72Vq7oSXdhUDf78cAoofVBRg518S5xT1ZNnRivkLTKcf3qM1uUCthcVfTGnmLj2p6",
  "key6": "4rd6az2egGqsJrgniTiHxzWNrzLA8uMwuESH4ghMykChn6SgCFxNeLcS8eEwrsBAhZB13gXWDaBkq43MFaGeBbks",
  "key7": "4hGsLVVsQa8hcJRutAsmtVG8L1J1hwy97NTgq1Bk78wEtesb1o4UMpR2EbjHSTwpjmkifVvhSsNjJyWLu1ccPssf",
  "key8": "8mXVjmBisqnfAaPXNhXJUcdhM26Ngdzj2depEDuQy8QX7NawUtw66EdkdpL1iRFjw68yQhZ8ehJNen3nJCicxma",
  "key9": "59bVzPJAyBycKjWKA3yL9HvNUuTWvByibUJg7hHw5Lj24DV9GTaX7MFLtUStdiyioCG6ZQdXDogkr2wV6PYwDKxV",
  "key10": "3xUm1bi512ZMgHxgedUFbKR4kHsM5Ey6h9aiTMhrPf2hMhpCaVkX2o8FURe1fS1v9bVCk6J3gL5Xse2XZR1W5ab4",
  "key11": "4c5tKuXNhVifFC2tsMmi4RSKugBYDzAjU75ErXidPaFm7BxXbrEi9s1mPif5Te5NmJVCHZjPoXNP4zbtLPnPoF3X",
  "key12": "2Qh7bUmijHyff9HNFRLfgkP9MMx9Jdu8YjCMMguh6HYJ9giwjKNcS2mdohEuXXccb4aGfE6wBakRz4D8jW22myYx",
  "key13": "4gwXGRxE98R7SUYqXCxFopJTrmx3V9zJPPJdod8ARbA1ahxr7ZfgBS6gtDK2Fapp9vJS3PTo8kFBb571BWWpbose",
  "key14": "48x4DmVs7ueqtdP4ePedXeCV4m64eADGBLz48k4jiiMzsLdeUzgWnf8wN8CCvASkkRcZ425GZgMXDBqHJK4D9Sfa",
  "key15": "48fqsuaSrvbQRLVa8a7dc54287vAguhgJCQVyRHz7iqVHYuQFqn3AiAHZwmmnY3vhmMcHzp6NrR1CdzbRSeZ1yPQ",
  "key16": "2p3esgCwpzo3VzGSBkUxwEfCRbBkP9shVWMceNG9L5ZeC67YKgtVFwwMLyEXsX2N1mXxnwUZRH8daAWUHSrAwWWx",
  "key17": "2pHXwi2FrLjd2xvjiqo2b5qQQTK3wtRM8rrKnpyZRipsdjaVfkNAMSdhhxGFyz31bux9QL8bCW2y5QmJyGVfwsXD",
  "key18": "28u5A5xwTq3EFBNU6GkGRPEoiDzf6raz4vmkditeiM96LmErjGawjMia3HAJkw2WAZzhwpFUnfxMhDCJVkJor2RU",
  "key19": "4guNPaYpKythTf3Tz6MrAX7UmtgJ94v2q1YTcNZkMF9GdrBa4cCrnBiEkdhcSgM6c6vQFDWNa8awNhb2jtvdxD8w",
  "key20": "ApgH2JiUJkYnrMpRRfCiTKdciAWFEos7PsqDm5sXfB2hMzZyU5LYKDMKjK7ukGycLD3KaG35k8w6AKMY6ekdYUo",
  "key21": "54eZJRqnmwkisDkjenuAK9CnXvPJ3pAKy3qvYHmoCLnJ1SrrxThxmzdvNMYs4v29NADeMN75a27kzunV5Zb7npK7",
  "key22": "FasDzgkVbaJeQ8CEQp99RjKYUo9tY6U3anStU8vfXsuFhzehmCYFhjYACq6XDxp9RvV6CaoWqyvXRMiRnq7d3DT",
  "key23": "63435JGkP4Na6n3opfY4iMTqfiNERLyM2ze4cKrW4Hhf7e8UVMeA5cVbrrLeJzQ9tq38GcL6DxnPg29GcDAfof3Y",
  "key24": "32S9ibL2MbMeNDWvmwNevEF5gyQ7dAhQNMiCEoijqyXeB24Doqcuoj3249TzFZ9x6jsyTY4vEh6G3iG2FoGuef16",
  "key25": "5cBQP1RXfus2Sb5Ha4TKZyGRTBVUNh4PNyJoG94EjrSwYzVL3QmxVgKMkUYn8abZVxrw6chLWrafSxxsEFowyu68",
  "key26": "2uaLgubeRpr2C4UwF83Bsc7f2tkpGBu1d4UoLjwZBu7FfFZnAdPTinx5tZs47hYvnqo8qSjhy5rBji917zwz56Zg"
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
