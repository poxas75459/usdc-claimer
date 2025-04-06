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
    "2sErDo5p8YGUy7ntidP9TVXixJPeDyqqv8GFfjGGzrPh7WiEfaqnnmW8McHYY4Pq8d5f6wHoKmxF29Y9pDmedePg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tR7DNCLn9zavN7g8akypVi89uYZgy8Y8wxjBu2Bn4PjxLCWVywTxdTHiSpdt2ugnYx91CfRbLCSMWLZ3NDo9bqS",
  "key1": "2wNMjZkhSDhyCDrRFSTA9QMuTEXASwVGZmz4cbpnoGu9VT8sA8JZxdAAgJET7nCyecsrdwW1DR94maVLivb4LxYZ",
  "key2": "2Ckwjo1s8fg46qWxXHn8QmBtxCdcQ6vir3UCmfeW8bQzK6DdCxCqXPmpuGjzraTYgFa7ybB9hfVKexi4y8hWdbaJ",
  "key3": "3RHmvqa6y9MPL1xceU9QtzMhEcKVU7s3PfHwuf9RuoCF25htP4e5bJ7XsNbuK4UZBjJhAUsD6hRt65h6uMuS1y79",
  "key4": "27RGWdthXSRDUcMjjBaitYmPUTeocYUZfQoHzpcexoVfEvVm6oj5qAb5Y5D32ppxLpaxwn8U43qoZXy3UgDpDihJ",
  "key5": "5V2KCx2XFJDsC488EYadrLd9xsjkozGtoBCU4MQgWYQB9LGKPcbXsNbiXqzBLMmqt2jaZxcfSKwKumd4zXZbMcSM",
  "key6": "2W35u7qsEzjtDsFi1gqYxYL8jsVuhjdRb1PEYsT8ksg2x4UGtuFRNSTMDoSdH8i4ZKJErqEi4KG2CraLfiRpSoAi",
  "key7": "3zURqYQeGCJZfmhmkzhvXk9Zvg1TLy9PhAXd88ovNbFfBTdFWJ6Ype23hCDffSRJASADX4iufKzzjeVcYmXPA2hp",
  "key8": "3jG96GpndaTaoMaihijCkFCbjdUVQNhkevYwbXiT8nDGQBd6tdfdpeqLLLUfGYf5dhGQLGQuXTBHN45cWRErzEyt",
  "key9": "3tK1vUv4koQNYYGZ3fsE3xPh6quRhgALSHiBMC78BXhpaXtawvNdEj2crKC8cvMMaVp8dJoYKvECQWmhPT4CCrJG",
  "key10": "VLv7dWh8dgdP4eNpGqwXT3CW9nH1Ud6uPX8Fmq56Gma2RRjoyh56Tqhd83Vs8Qcy8URUZ5YTgALDXpSYW5iNv8W",
  "key11": "4gt9C9bG1DzdtWrWAdhyNnqgALghVGY6kJh1ncnp9ynQi55iid5HjEVUb8T1Ecrq5ci2qKd8Mwi5PPeiHypyFcky",
  "key12": "kb4fL71fnHA9YaJRwxQEEegePANSKAK8iiCFjXseHCPNKw5k618HBtGSumDdgpxpuUmQ63z4maAtbWuad4iDmSx",
  "key13": "3yjCTAVwChfN5kpz1JVaES6EdQqSz1osfdWzT96DcEhYYirc4yXUNni7xwzaBo4cwsgXbutPoEk1GGB9UUEMUSxG",
  "key14": "2BGMUZGzSJq9YB5gtu4qqqpd4hav8odqwT7XdPGd5g6msL3JJEnb96paXnv6ZcoskjSW9HjzP4j3cMKNPeSvDQrY",
  "key15": "2n6fHRSkKRn3WodeTkGLocsGsNqJCNFUevYapqUakfykSywxJR3UVEzSoJpAswoM8uXFk1VvBMkj6E3BaVBfFxFq",
  "key16": "3MeuS6pPpRMtrCJncTCULwsWetenbToobdcEBPQFejhpetDRJeC2oXb6pw55VByaaQniz3UtpnmRjbd9rpFfpmqk",
  "key17": "34t9YHJRFcws6YUL8WwuKzuYhBuQL9SLNmdn5scUtJrdMy5CgfGkm1qPi2Wo2chLTZzEDcHYoCK6cXXAtZbEc2ND",
  "key18": "34KRLgavZ2L6eiehhCQAQLAJrE6M6rQkkQVYKiHJ91sYNn5PB8goaypK6E4u49GUeKnZCuK4UZmKNuJRSvgxXzNN",
  "key19": "6qamG36bjhkU4vEEX6dT8L75cdV28hf9pZnvQoawGVvDiUJSQ6pqthF4vvoR9QNU7AfVHVmSeZbzw9LJWo6DqsV",
  "key20": "3tMUFpBVKANx93Bj5xDb8tgpnCkFjbTtBU4wX7dYTQG5k27LSVgDi1ouKkMjygrbXGA9Ed4Yuxw8vKvNC4Z5uNz8",
  "key21": "3oFVdNiEEWsS1GWERaVLtDiwhbRKNN2NPP9dKnA5V4qrWqp3yQhwiwUcKotHmh62cg9953JEar6jbjM8eUWLUqZk",
  "key22": "NMSRG74jGSDZwfzSbSKXRdHdSkCab5VpdEHiVsdho2UtytAiNLfcFCSoeaQt3XYbosY2bKccqiNBa29VJ176NU9",
  "key23": "4D1mUq19MJwSKoSKRiFKVu1ZHcbYuipceoUhP7gvvEQx77kBTntDmKyzQzrCfAuTjfRCcKGiX1jWthLjM173HuGe",
  "key24": "3cnJVydVrS1pyQHZk4M4cZnb6Uh512uHkgFvsk3Uuj4T6i7aKb3zm91bMZ4XzWuXJALh5KZLh7NTj65aaNoWRR5E",
  "key25": "CP3qwpTS7pHy2WX6rUuTcCrVDcsfGGgXEa6U3yXPmj5B7etmekAMvgEj6o5aFvHjrjTanPiGq1Q1NvkMNNnSGAj",
  "key26": "5K1kNZDoGcx6c3RVwUAsw1ThTRoLvxgUAR2CRvygGmxRTpbngSuMQBVQfkrzg9pCyV4pU6UVhVw83JQvzkUJou2n",
  "key27": "46WDLD9Y9kAyFV8KNj5nsC1fdnSbSauHoMGABUZWrJXBy22rSod5hZcZByveTEvRSLNfU37SUva86cC5xi6A3Uqr",
  "key28": "3vRGKq49WspvudwLChJgCDg4v4huXB6gsQugRZRTpHQWUPAtRNc74LsPoqbfWZkCtZGfSSMmasv9Zsu7kYwHRBR7",
  "key29": "8zJgoYpZXbg3r49iAkByi73hc4MCamCLjVK3DAYshAgp8Bg99cr2pQU5KcxWkRbqjWYpuh4VWqRbwB9gCvxmFnL",
  "key30": "4wVphQh2ER4cCvSZidMMzPsFpuKAkFwjiQrmxNQ1xUMK2qHKex3M7GpkAsXoeSDiEk8cvcgTNpEy1vNe6PkLgoyM",
  "key31": "43VaVj8wT3cNemHayTrfrKADMuhaVUEcDtsEwvtxLL8gUetmd3jEfsqRAEXYi9qbsDb9LJsoCXEnJrtw4V8YseQb",
  "key32": "4Ves4BEnhu93XthPhwv9hd6m9ViL3Lo2eRahGXm9GzwkgzhvD7YM7A9DU7UBCVW2b2qbDy8zGm5iYD9LL1pb9xsX",
  "key33": "4XUMpoyJ1xPcDYodBAKYKHn1NCCkbt6XSr4hfrfUqQf9ysy5YrQt92E9kL2d6PEmMyVJJq4ShEkqB3wjCMmNZbAi",
  "key34": "9B7r1Pq6jiHsfGsb9x7rGs13eV1bP3SXq8QQjinZEnYb2qBUYJMAtb6osRxCxt6VzznJd5vCWimVFbNEHzMMQST"
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
