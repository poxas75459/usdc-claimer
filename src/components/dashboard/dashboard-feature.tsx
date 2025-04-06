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
    "3rcfGsxpSNRBaD8bwHqngRvmzxoeiqc5NvidFEwiLw89JWTzP3MYCQ8bPD3ACQ2m15EtwgHvuUva7SZwdXrfsHxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjBaLvpqQjdUAMu2mo45vFZBHLRH3EmrZX36tCbRrmpPqxx2c2aqFSZXVQuqY6ysDvP7ua9FUiYk3ggrrxpWeV2",
  "key1": "5GCYE5VwdxFHDMopyhGUR1PtvetaA47eQt2htc5RRW8Z45QZKcNBznHHa8N6q3BCJUAHggRjHC5Hxc6aCStyB9M9",
  "key2": "5r1QuCWq2EYDjvpCGUfgcNJbUnEDcooZcLYA362y5vqBzYCspfDBcqtXj2m3tC18HyLGy31S5PWmZMxnZfhZy2EA",
  "key3": "2ouyjDUt98YbLWT82oHQtu2UqDpfLA45QTceYzvRmcmtLKbyHK8Q6LuCz5LvGE8cUcoe8uvhmmBhR6j5SFoXJHfF",
  "key4": "ueUX6zPsg7QPKxmgUBn8oGkJvA9NqKQLEyMN3MPmN23mvC2dqHGAkXxgZ3WKUi6NpYsCAbTJ3uFV7Jh4Zyf6J5R",
  "key5": "4xt7RhNXeTf3Usjc5frKhBoqnYybnkewK53hRJWm346ENB5NhywhCVgHYaBvjhPnZSVyJijeudY6PoZwDNbhhTqp",
  "key6": "2goeoCR5RtY8BPdLVArc2Cqqo11syUQGod6VtzVfrsJSfMpb7ukyr79b7NqZat1iSuxC4wEtidSc6dHUekkwdoY9",
  "key7": "2qzW3UZg5CT9NrDiJX3s2bReGtQku6G5kdMLrMR1VCXLdtSjJuSiNXCPfUBkR8jKWQNwPugSWm6m8RKaUdLqftE2",
  "key8": "2hFx1vp581SfSBoWqKQqCmXJx49pRFU4hP4e4SMYUJbXgbXqGWXQgt7rroqKPc5ykpnrmmYwuc9jTfRLhpEy31yH",
  "key9": "2JCMsP6wUc1TGvWWMA8EuUWATJCG7bmTQCZ3VZC8Vavc1g5j7YfxjxjmWT4GTj6DdVTHHp3PdE1bD4EzF8MqZS6r",
  "key10": "zYsoHbsUqhg6ZmhWocnyH1QWXiwggrWVd5i9MpKmqUc5ocGwGy9jcABUDj2n91U5fo4huanEcY3Ye7cS5Cfqu8F",
  "key11": "5xg43agYPRzem3CjMm7PoR51f49B7y4YMYEUTADUp2AveV2Br4YEZAf9YcBmjhM7hjcuN9QN47BvAkKFebtwtDPn",
  "key12": "3B2BqMvdYXPBvVa4Y7EJFxTHgQLfJmDfomSTYnzkXatLP6FuhzFjthLYdALjrfSu8BMDCx6eUG5VaQvn56EcTjhG",
  "key13": "3PSZymEc7wbCkbP51H1h7uNMBb6nctyvQkoRLsCjAvw2XMeD3EoXqSdVdQo6AK64jPAhLuj3Ugtvci74Qmd6Tj3t",
  "key14": "YjrhBxZRga5D2xDWr8foMRXZrQsiHtdKRPbecyYjKH7hZp7SgVjKFacbZPXezvfH1Kuten2eG1fRMs1WswnNVUz",
  "key15": "5ELWpeWZFnejxdD1Y7dzfyFFRDwGyCBkon9RsKVfecSBFPGFwv2ibXDCqAruH79yZCBcNvaxsqvkkS4pAUBCBS2j",
  "key16": "1qFkctWGdinhnhbRWbbYfMyozrSDvygAEffschaN4L4dyvegaGVGmdW28Yn8RMTMNwEWYmYRzZxNvdaLbUNV1Zm",
  "key17": "4hvX385ptRhS2utmwegL3P8iZYzJZQDwECwUWMNdoDereCqwXqqwXYbqJjBqpMUbpZZ9jseLqG1UjMAg5CrxtbNS",
  "key18": "54WPDq6FNY5y7Kdf7WX8yZvyJYrTD8SHFaT9CKfcJ5J3mQiU3yGyXc9z3MmVNBHP1BSaraPSFRKoxED52oevJ8M6",
  "key19": "55HeyJZRcapeoQi831R5mNZ4YMNMBMTXCadgCaRRu8BcJbWb7DxXiDwuBZsBa6A7tSn1a7AcJqr4THPVV6se4GkU",
  "key20": "4XiMx2XQfaLy49cXkr4jUSrpfirHah7hsBiJCF2GYadPi9SDMSNpHg8X7hN1EhHxa3FSJfXRweXL2bsRwoh8qRVt",
  "key21": "58rc1DjHQH5BV24HqfgbPwdtKYbz2qvuX3snA4zUYNZopXia36BjyLPBX6BcXZgy82LT9TUzYB7Pgjh5iudn8pKh",
  "key22": "3kqPdPxVpS6js9EVy537RpN5TkDNYywzHNRmvLv8EGZvz7jUE761uHsNGtW9ks8brfShftLzRVW9PNSA41P9YLVc",
  "key23": "4ZzBZHWpCsXXy4f4W4TQyWrTrK4AbxV8XJmQTPz6SqWeM7sKgrubgprDr5S7bz6Usaubhn46APgeddVTrufyzgY1",
  "key24": "47NNrmgtoYj27DJLLNj9hMPScuRsBzsFKGVL9CWhbgDTyjrt8nxiU7yeqaDZruYLNrQpwkJK5TSErTJB3g7Rp2E2",
  "key25": "3QkDSFDTWkVgrS7TxD1dG9J436yZd9RFMdzV4B4yWswqXG9kixNgJPJ3dfSyj7b9AmsF7roHhm9bujdH3sD43A6s",
  "key26": "E396XFs81aaBMTJQPDg8QeYoYpemVvLwYs9wUBvAtCr6iUjdSgRagtGbRorUw1jyNoKVqvW7TGcL3qZGTtR88tW",
  "key27": "DPoUiVpK2RYC4gKjQe5iD9C4HW6ZmUArkgHntjj2XEp3qrbfZsdcbk6A8fqkYLpqcgNPPQFVtUW4AqiraB7NbMN"
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
