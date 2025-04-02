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
    "3qRuUyjiycWraLkutdvKeq3MdChyGmT5g5qijsB2gBfC8DghRUj5YU4scnoa1ELX6M2uLhgfozku2DTrAbJEQ66s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZJQEb3XjA4xAKqknxfmwtsZsrrPRmyLEwzoLGbFWXTiacwBrA3pzAuCASWgeJQTg1mkPWyfYYHijQ9FoQzLeZJV",
  "key1": "64gb9ZZg8uDrgMytvsDcsduyY7iVtSxEgsyZiJtRDFWtduwzhjiqqaU9revsfLjFVawWhRYec8xnnQK4Jd1DTn5g",
  "key2": "62CQ7SmdqqNKgR3kXn82DXDbxri9AFSTJV4BaQcP39wtTkdwVwADEkbKHSuntyGwUqzXLu2oKiNoYCedBHsAxJPy",
  "key3": "3a979QkEBcV4tC31P97DJZwJvv62jARK6v9K3PZyW4sd44HZcAtJdA6nUTVAuwvF5PemTJAf3VoV5xWMUuxs8bVB",
  "key4": "ifFKpiqDm6yri8uEjMLss5tfXv1idvGk3V4Kw4qLZm5eUBbii7T8JJKhdRHuwcVaZzVyZ4rYYiZFsRqPMCsaR3b",
  "key5": "2uKydYsmc3V8nuPptsYAPQcgfygTLNEts1GpBtkdnxowktRmgdcwxdsKWRNGLXGVLvhsCS8hQuSgrLLzbfUDsVFD",
  "key6": "4AGkKxaALf6go36wYZNAKYNCpNNJb42vfTDdPVr5tP4t7LfuRUdKLJq7wcLdmARhYX2XVSxDabDkB5gsXUNhw2LZ",
  "key7": "3mjfggaks59C2Usn3XkgWiRyEwwA7ixiKwaScsER4xuzZ7j9EMQkCYJCGAamjzBzUzC1TkVKvf29U5AgZbM9JUsV",
  "key8": "63qLnqayWjbskSAqs7fCCbrtEoSeZh8y24xrdMy2QxAwjznh7XNdDF8dejJNsReZiN8sJz56vqawNyYK1BgcHaSJ",
  "key9": "WLyVVzfknRf12oofcWXcnErvVG5tNvncqXGYpUi9DNajS1MnviTJJ9tCt9MM31QByp8vxUypEEARBhL9896EwD9",
  "key10": "59T3UpLo1TqV2BMgwUh49RoCAAR8RbVA8As3VENaJDrLmzpCGWJz8a5tBZWvVtEJxbCpdg83CgZy9Q3oyVBJ4HKm",
  "key11": "2G3DTvKj7GZW59vSRwtDSvobfZSLUc7K5s4VRHPT4XyRzv3tUyWkmZVCuTc9jPp9cnC4qbzm2kf8aQpG9zwvuMoY",
  "key12": "2a19TAfDJ1LSB5PNsWPYw6g8mC8hBCjWcftVMrRkbAfYNTCgNdfzHLX5zeMuGsML7HgiWAtaupYCWwB9x9P6GbAH",
  "key13": "3e26B9mR5acRMCecKNCmwCDUWph8rrkbrgYwT9XnQeyqq4tMpN9xyoUrmGVFmBu2cGS7qvrJqiQRN7wqkocP8zq8",
  "key14": "4XdHQ3EAfhBxEqYtq4NhQMvsc8vbhc2BJiU8nHBBBddw2xBDGBGYNuKgJGCrUAaQkZPHoD8SnFRbz2C7CdTZ79vG",
  "key15": "5f5Lwzo7ABzhxpmyZYoWAkKVR363HoV247B52a8vUUcndsxRua1uPtcUCt1o1y5jcbjZVdgT3jf1gby5tcDVe13u",
  "key16": "3EeV8Bsgp64PHXFAtnKPj2hcP3qeUJ6byhJpJKmPbKd8hu22JEXFxHnAJvasYeNogdpEHARa6CJc219nf2LjYdVc",
  "key17": "4bKgeLNedMfJFbTRzU17bpfzywY7VpV5zBHkgxZFoeUUCEQF3c8d8NjoDzgm1JZThgMqNW5dgZwAjGwm2yp6Nzka",
  "key18": "5R35Ux6iYugCms3x4HiMrv4jEnwWEVqtUJksPkWHc9vSxQWHpt9RtSyTXkiKZBLiq87ALH9zSXbpcw1vpadtWAA6",
  "key19": "MBh1Ac8VdZvSgcSHUbSyGyGdaEvjDY6w1p4sEeyhz9wHx4BDR182Fo7U2XCpAiihXgyv4geyzqEoZGFm75M9EmF",
  "key20": "4gX6qf8iuyREzsheVEcugkzdGEM72dcdbYaqw3Pdo7LJEAdESPAsqa9BnJ14WixLXLbAka2wnivRyTS9DaUgRTuX",
  "key21": "5Js9SUxGh4JVfFAUMdYxRLXK7PcGvg1QtpSMgndYY5ga45Xs5vDTTqAnwmsysv6ThiFWbT1EXNEP3f1cne97eyqh",
  "key22": "4UfcqjSf4dvn1kjvJHaGzA8j4vJ5xnXxYdWxamRPkESttHdncMNPX6d138mcHpLwxBjpNNdBQsaqj52d4TiaXeWn",
  "key23": "No4XiDFr9MjtgjzyF2CeA6bGFTMweCsau1iGBGV5eLxmXwjsffmrGQBEGAv2yEQQjzW6LAXNyPzFh7JJSDuNJqU",
  "key24": "4a7LjzmkKddRfCf6vTEtanhceaCQf3viXKDB7cNJ3dDKHk42NBx14bxVWgL85LXJDACLQmp8VmEswvJN4f7otxkN",
  "key25": "YMs8XhL31CGnVT1M1U3oh1pUY5u76V2sucDku6EqAvAfUqaoxrNRej6Jiwro5BEdF2mvCUBiUAfPqvtEAFitFxg",
  "key26": "4HGcB31A5zzfkmenviSYN3WUSjmp4koEJjKE76kV2H5hz7FfCep9HSo43VeULhxivCZatUVrM9si5PqEh1XXdepn",
  "key27": "2c84pBV1ZFru51bWRwYjZR1QczRuTTA5FrsSmoRhFbTHCd29CoQeELwXJX59oYegv6Jfec5Yu57WoKyGuoAGF4sj",
  "key28": "2VE4hYDi9tnBYAUmWvJvfppEAToDsSMC33KciCoNFjKg2bZctetWCKeyoFRkf742541s5oJHfVF41QmvVgoaSV6",
  "key29": "5bVvbe3v7sPw8hp7w8zepHcUyo9hATBUG1chHTwvFY9vCQLS9euaNtuauPBFmKwvpCLkAY4cbYmQuJnJWaJvHs8r",
  "key30": "Wf2TLDKPtML8hqukaGQ3bPRHudyMEe63zYThuPe2kUSWVzZFqjjyeTHX2rVovsANzinedZk9jT7ENPQBt3MewPb",
  "key31": "66rygiwF7XzziVWWha9duGJrJ9omuvuwwfhLWMK1vcYvNMshbvHwyo93P1Lf1KXFgzxxPPMXpXTJgbpfXeiEKhwi",
  "key32": "5CjfukTb4Upye7vX362DHsXVMomQy59L32H3JH4pLjpiRDGRCZyZWpeZqx5sjBePjN2ct7cgWFv4jhqVUGk7AGnb",
  "key33": "emUZc5JkjqqEMwo1eGRakEthBzDj5eRY32BCm3inLZZR91VKKz1md65QPqgja5gXRv9FqnjVREL44qGmtfJXRYM",
  "key34": "4Fg7SE7n7nv8BfPHrSM6j5GTGLnajuDfzGWMpAa2V3zoFkk6oeW8zS53j3mW4AeySJSRhAgj4mEkrsTHXdgtGkWR",
  "key35": "gKoXknU3ePhWmSuVMSGtAwwxUqKesd4Y6Cgonf7LLFigvXgXd1PDYGpF9uTv6sWAs9o1soBqrpLMX29fu2zv8XB"
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
