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
    "5pSL17nDyi8wtj1rHSfNgCuXMTFybunNZAYmFxzUxKMeFzw7h9BZoZKaFwyRirNfjBcYThThPQFokez8C3nak8Bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2scHNfLTB8GWBbZtTFasM7bgUMq9NnPEFLt5USnP6VvGvt6grp81x4bkouAUhGnVYLUnUmJjPGVmM9SmiuWAaAHm",
  "key1": "3H7GHTRkBGuUqyb24gEJ4Fc3eebuWSpKD7yEGBNDhCEJ9iAcxmRA284btW95dU2o421zkyyH7tp2hFDSV5TBuAhk",
  "key2": "8niwr5ds54W4Rc4xtJBc1gtnzzA6SyUHhk1FNk9wJc5r46HAcC7yreef43Cqg2713WiNDLk8S5YAnKRTHLqM1vM",
  "key3": "4166b8f92WReFzsYkSBcSLYV8GAmHjK1T2CUtDk3hiFWrbdVwJjZLAWrmwsBzQaDmrUDrBdpdcY7zqbT7C6pUtuy",
  "key4": "2nmNvBFR7fRTzC1xoDMwHMdgXckFRxeLvBXrruDajQVj4gQHcXUF672Fefn9NceXP65JrezvgBs5KceUEsJGzGpD",
  "key5": "5gaJVLH73a1vM8vMMW5ptGjZmJ5sEmzDP8Foi868K1gNovL1VuxFWmKXzZyk8XW7zZE7JSRQD69N4tQeSM15MtVx",
  "key6": "3YG3xaTEt4fuxvsHAGJJWCYKpw7mBKqwohXRgKM5AAGYnsqGm9D82ZzzvS6esACSXgdYeyN35n1dbSMjYd6dC7vx",
  "key7": "5kJM2CikaC3MnHtyhBWspWe5b2TzxGQLDGzvPBWsktda3bDTj5mAyyL8eEW6skCVZreT7jFQwADKLNeZSNRNUCsU",
  "key8": "4FD1XK1S9bteTEJ2M912trQASrjkqWPMsKS4mF3UaJb7fQPh5xQyYCnJ7WGBmHEwsiMogNKjLyqE4ybdGxVr9Qgr",
  "key9": "5Ujgh8EmT1B2z2hHFDNjdDBWe7wB6f4ViCs6nB4S1SotKaEbLLKfdjsXet2NZMw2uudc57Y7PEmxpnuodQkWiYoH",
  "key10": "46XPo6xSc57ZHTWPVYgLjjpDMTqL1cKovUMdX1L3eJ5Ri9decinMBRC3doUNPLvnkCFw7iwA2DAaQ4YGCVcyAqTp",
  "key11": "meMYqeMoKqp7CmK1bQS6jxNypz5LjY3cqNxVwQwXJPPAgLcCZYzgcdFxvAr37pLo5vR5BdjZidxeMThhreGXVmH",
  "key12": "5kps5WyTCUVBv7WYpk9UioKbm2GgTSzc63snFrRyz9gwTS2xzKxe1t78jCaq7phTf5KRbCuCpTwzrAmB2LgJxpfX",
  "key13": "4jGHiXQXf8E42hF19Bf9URGjBbiEot6DvTTM3ES2couQrBrXQUKiT43G1Cp9GvHz4SmRddgXrjGYoUkJcDECRYrF",
  "key14": "3KBDjdkZXYyGR5eSbUx2UgLwWircVPeuFcWyNisnNLrp47PK12nhx7eT1iMYwYw7Jb7wesdbCKKgX3WGtGQBdeXj",
  "key15": "2HqEz8V8fejijWRnpm8L1P9jZ8Pt5uTT2BPKj616mMEx9mbTXPq5GqUdeXENGHzFKhCiDiKHP8uG3r6d1wrD4GRm",
  "key16": "65GHKcuESvumhErxuZaviCg4erfEyeY25193u2cVVHBBuX4k5o2njMy8en6Kb4soJ9bEEhG7GYYtSEzt2UkusnMp",
  "key17": "3qpsdVTqhrLXbHP7sHaFrrJYaX19F34VzPqevi9fRETL56zF8CmZkFK5idPkJH3Aw1RH59PucifrLzoSFPCKirbM",
  "key18": "5uGNgsydsTze3eQ8kvzDQ7Hr3J1AxtpH3dqoA6Da4ZKWcopvo3WFztPhTj7MQWDfFjwNvXsrjVfFbiGfq6hPqtC8",
  "key19": "2XFbgMCmKyL8cLgzj7rfcMKqtWUv48JPL7A2eWu6RTcUDnmacjQexgKFQQKZbmaDpSjAxEdgDExCLXqgG82VTYCS",
  "key20": "3aVt4UyNXLe2vJpYwAhHZVjFLLerSux9oLwHQoJB7w958FJst4fFYHRjtkui5tKyhZ4ZLGM3t8YojroymKEw58ya",
  "key21": "2LNLMiEHAGjq2mWTFdGh6uCEqoM8VFhJtjtJFxZMQprvemectCL7qJKTn3DvGMrHuKCPEbRE3dVuAcLEYBuDHntM",
  "key22": "5qgm9cRwJR3FYrK9hFTHV1MK7i56bQfaRudDbQoGVZ9CxYKimihRr5d4hvvWJLs1dUwNRk6egPpdUVuofCXMoxCa",
  "key23": "5whrAZirMqdSWLBhHP1G6PxxwVvpfFYE2K7F5Mhe1y4WDmhQAEgQrPb6fmoJ9QReCt2HWxvTczMoGwMwvE97r3Ub",
  "key24": "4b7sqyTiaESvLVAzEbbdZqLDLhmP7BCoKpUVknXRRuuxNJav9Ahu4DGVDpgXbRPmsPxXjBJxVh5MdHoH7WVz8Dw",
  "key25": "2ds6SE56thcJyJDZXyxCuscE5LVHje6sEB13GxR9Sx3G7Ezx3FcmSTZQ3avmKvtq2NjZBvN5XwZCqwqNFqRdmkC1",
  "key26": "4q61GcecJzRZcyvDGMZuCwTznhveeJm89rT32kkJv6jqhEQrPGB8kNAVxs8fetuYGaHJrKrkXG5mcLXZ4zLLdRZm",
  "key27": "5tbncJnkoPRvNzp6gdn8wv9X1ACCKp7cXJXTZURfxNyTrQDYYLt8RmYD6N1BpkuyvTyi2edbUE7oLcZ23JPrnyBT",
  "key28": "DMqMjj7ar1VWRu93PHnQqTCuJ9mAtZhNjmZTvY41LMzPg8QbbWwDvC21scDEkxZok1UJtEL2AqBGc29PWkPkfhw",
  "key29": "2uUbharn6Ev13wdaBHZ5G8EA4CwHSwabK4Yv1Gpcr23ZRU1tKrj65PpTVHjWi1kBuDM3GEC57qfJxRUjwe4ZqwXk"
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
