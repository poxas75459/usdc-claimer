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
    "4oFoLZ6r1x48Zm3frt8EPF2RuN1xhMwfBe5AWT8NiWou9ppTBjkfo4YjzwxUpG7omtnhtCSsUy1dVuzkSvYLVsAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoctAtomfXeA8wy25CJZy67EQ8xvsiKkzUYY11idV8XJNVu36Fwh9kftg2BA7smfeLga8DMddL7AbPkgqyAX5qp",
  "key1": "TNnG3AxkgnardYZcqwQZ3TTexVu6RevKFNhobZGmZPafa1XYp31RAsq8WyQR8rdFX9MG9V1VizVyeqWfKuU1C6A",
  "key2": "22y8Wbpnb7xuG5gur3bfSi8EZKFjpMYk8tNJxHfvjWUVkgu7u6egz1QFEmvacWZETAXtb9xqZHqhmpi3yRJSFqUg",
  "key3": "3b71EKovoU9qrYRMYy5VvuCm7CLayQHzzNtzmP2ZPDwHLrPgpLEm8SL6vZSW5TyUwAbG3iDva8CpDZ9HfXyNbdRd",
  "key4": "4fLUMrwDHLwxQi1r8k314sM2qEHeYH1jPS2zqpXmAQaLpqN4dsq2rkJ7JVKGEqiSnNUeuvmBk795ukhrCYt5Snaw",
  "key5": "2yCFhdAhSWauFxNFe7Z3t2ZT4xoFcYfpLN6xw4C8nL6DaZ8u5mEsfHPrVUxWoWhB4YEa48NkhJqwMQgU5DvXMoiz",
  "key6": "2SqxPuGZD5iGxi4aSbm1NJ6BJf8VBZPcxvNwvrsCWbhL4e2qFgpXMdqpcvydp3fARR8aA7zavjw9zpQY5Hz1A5L9",
  "key7": "4GRLRuDKjPdYXv9jKFnGRPVcmZpbzxbd9dFVV65AcSy4sHw1efq13QhiiJtCWfXYgzzV7ds3RmAtYLi8Uuui8z8h",
  "key8": "jRzGJSQnrPHTRBvq5XA2kYwtCSgqHAt7Pd7WfEjh5UQGL2wSAH5a4DymwptFzuLL5R1J87GwW8cPMA8qcWLngmW",
  "key9": "5HBreE2vYeNAFr14LGUqnBeByHdhYMN11P3xHZe9FQ8LjDfVdSBi4LQ6ysMzDKy1dPxkEFNn7CTsgjKomwz3uEDd",
  "key10": "EkVpnA2zzf3M7RM3fLcuDzfDytkVTpya8mGnvsgW96xtCcEbWtvAuUYTyUahHKXQx1sHHAfHFsU7YLVbFvWjvmQ",
  "key11": "5r9LBbCnnqm6oR1B8DR1bUMTnyJCArHy7HhwFfELWThAHRMBWovh9tbJgzgjWZNmB8B8J7ZPebWV6vNNWyUU4NWw",
  "key12": "3mhb6deZSxRqAFz3oBgwMy8pFbSKybuGvGELpHzGS1UtBeiY41Yg1S5ThgcC1A8Rffeps9aaoSCUbVXx4Z3mVt4S",
  "key13": "YL3ubG3HtAYUDzR1QFQ4dJsGJafNRgEY4i7sWMNK22DL8bpfX5hAA8nZHgmL9qn7zBX7F6J3vCSXTi2ix8NJpj2",
  "key14": "38FMwAzLTyN1kwwj7eHnEmJ3GpT12CALEjRRsEbRA5kDjqqPiHbNHM2pu457KkHX4JNSt1dU2rDsiVgnmSJEaUyR",
  "key15": "513ucNx15fpb3ZKGQN4zsBTx47YKLRqJeFGuE1gnvSE9xcw9NkeTWN3NvYDk4tyt49q4YqhTdEzts7gPiGqbk5az",
  "key16": "4WszhMNvcJZmVS1gah5oXuW7QQPBKweCfoR3xra9oTSz1zsq1Mn1SAWUzhyzw7A2xEvPYx9iTSVjnHKETGvAFAkn",
  "key17": "4PTEaF1xf7JkYGwTr3rmi6Khb2h3Gs3eqXc1HRwMoPjmr2TR6UD5FavpDCx5T1WkeGqbMg3dUiYhR2aMnD4ZGk5q",
  "key18": "3AS9Hz1eBokbpSikAXGmqhJttw9tWEFTgRxxeuZf9gB5hBuSBpzPymrCqgav15ddaJM3Ux56NEeicLsS5qpk4EdL",
  "key19": "4EKgcuFwDNfZtdxX1SUwHyRdyVvTJ1VrKhumuJeYSuWgfmSPqUeHE966cj77g8jXYSit5gG4zFuhKbjr1FmuQcbn",
  "key20": "4kbYiV2X4KZgbEfKZYenQ6wWn9E7ad25ZEkBTxoH9Lxx9y94yK8xzUQijmaWT3FtPdtwHnLbG7U18ihf6BGYGSGa",
  "key21": "2DUm3Zp4xZ3HcF14D9JTFYr3ic23S9SxCntQk4LQJn8xcz8oLma43PzVSZ3yg9X6rvyc2Z5J5nm4FDugLokx9Uaa",
  "key22": "znUkadLKSPLYgfrecZvA9ScmUjs7u96vHJ45ijSbZ7gGre2TPNqqjErpUWhxG9YKPCsBq1DsAQQX69ydtkCqthC",
  "key23": "3KNLrBTaNSaH1GDXQTM4eG1p9mc1H5i8acvuss6YjinYZ2iga8phU6YzSQ6SZZZpzXNkBZLUH4NTMsda9efVzSu3",
  "key24": "3Enh7kJgUZtxCBwG1xWeyu2P8eSuX6Q2WdZDPXFfGGpUgQanqPm4pZaYqbmt29zX57ZHn5yZYPi58AaSak8j8eEa",
  "key25": "5oYgrtrXVq64vZuFdgX5Ck1uX2e6UypmaDiJQ6Aym1MiV3vVCtHhjwQo1gULpZXRpJo1cTBuWaZH1ze4z6sRDY2Z",
  "key26": "5pea3dYZhPBbKPzhYkztA6NKfhyEXEhKRGJtpuVLZqKnZKf5fxBTGk7ER76FpAb4zozQmvzRieMkySpT9AZL55zU",
  "key27": "3uZFDzLPK4w2rRiGnXxSXqWEtNwMaaToDERUyzsfkD35ZTLLpsXfXuEZw75iM5AgykJAZFDygBo2oZVghbpjPKZH"
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
