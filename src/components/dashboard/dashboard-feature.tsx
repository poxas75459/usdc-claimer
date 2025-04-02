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
    "28Rz9UnD5rDYFBB3sCGk1QT6GEsqvqREyNKiVGFFtN4uwvyxGSUTo3SCt9ycxKqMGH9EHYk438FTBVjZEPeFsHyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKpp17UM2LKN8w8ymTkCBF6dpm6ecMZMYZTzSb8AvNBWRCzCzADqRurY23KWJzVSx89Am2K8DG2ewhRJ48n684p",
  "key1": "3yy35Zo9ApAsZY6vMg21Ki8kdThin23HGdwQQcfB5uyWNUymvYHpvoQHLgrotJbHyeXsCYoomxZ9XEd56Q7gLgiT",
  "key2": "2f8mkQaYfrKzMiXqfe7xGkrvkiPsWu3tUV9zsmQS8fCv19VPi1Sq7sgB1TH9dExwEKfsecETLMCZTnmUzgdg7f6R",
  "key3": "4DBTpR5qUmCpL5RbJ5oBuSP9uA4xiCUFg31McNo3BNWAueXmQWLBXumY7WQuY6czGfQ4qsxYT1f24AsCirA2XCSo",
  "key4": "vC5cpraHEjQ6LfdX8ZoFUsnXjchP9MYm4vAm2b5HkUcc4hyNZ6nUZaqfNiGSBajWy1YrACtbhskjc6w9cce1ES4",
  "key5": "3ysjVhF6r9vhNvtZW6xARnP1Y8zBm8kY8H1VqQZZ2BJS1zEEYCcK6tEDPFsgoHqRQS3c3p88ANdG68cVdrxnzsB7",
  "key6": "3oLQ8cjyhu4xGmdWK55fsnUdXqrCtjtFGaXZ9vsCJCSy6vg99vsqvFr53Ng9i1M1Ykw4RuAYvXeWGhau5ezdRwVP",
  "key7": "52yqvJQV3WEfoERbAykBenKK9YZejfUdwNqx5bnfxRpdueusEgKpsWUda7gLRbU3uA6GUdTTyrV9MNMj8Q56Zons",
  "key8": "4QRTXUtpu4uXvMvH849F3YPLiudjMJx7v1VuxyJx9K7mRs1y7f8oC3wh5NvEkjxyC15qLCDUKpzFB7MdpcMLrYcF",
  "key9": "2FDcgA9Bkug5A1YnQi9S7fEkonB76d3gumvx1x41SLnG3QjBp877yut3ab9EEYhXwga7YEtBsTuD2cFT37bt2Uye",
  "key10": "3meYnKX8do9GqXRbaDMBtJZpAfgoUQUka5aPyAUpW6L2nYEECtriRCeo7R4Ls2pVrf5h4eUTDMSCDsPwoceByLxc",
  "key11": "2QQVEfSgQtz3mNzoLBVCHGo86YjzJ25ssYN8dkEbPVEBCHMWEASeQmCkdjkTasZq4uZuaEyFGT9wU8vFFGdoFHAU",
  "key12": "577rnjSp5JioGGrNg7dd9VtCzmJ1ufgr62D7hytJJ8ykxart3D9RVEtagS5BFpDxtRxjG3MkEM8nMhpebhDFvVt5",
  "key13": "5sCdu3ruWnmcVgafocVNS8KptFeNdv56bQu8qWeQMmxhgUZpnj5h5TYLd152QViYQA6QjAD7rMkhdeWU2eVjezHE",
  "key14": "nSvwcUqjwdVCSp1vS5aV95AcULAnJgN4BcQQgSVKkmduif8ubVanhuDKtFpZw5Vy4UEtnDo6bEaMAPUUdeyt6Ej",
  "key15": "H5qvKc8wsFhW9YSLXptwAf6VLectTcZKtAkwJhfPBHLFZky2jBexAyGxoaL2N8BueiZ198YivZt8BcZQbfTj2WV",
  "key16": "44qKHMk7VEUhdNmadn3A3H1eN84b7Yq8zM5XNjiBRWK7QKnfbxptXSam9KAPr7doyK1QcEbCAnD6BDHEWdW7SmHN",
  "key17": "3Hw81aUarTLxo1K5u8cT1fvGEAtdwHYENieT7x33oqugfSuh7juqBMEWKT7qdte4PjxGwuwxa78VNHor56WUUjHg",
  "key18": "2gqtc16xtejmevVCKMxT9AFbYEiAL7TFQr9L7Fe1t1Fz5DdnoAfdDzcADTKJgxrAQTXSTaLhbKMf9jx93TzbG6jW",
  "key19": "57Y4H9mwLc5i8LdVLrDGEx2EQsFwCa73JbYPm6WucL9SdaoN7QJZ2nY51VojzGZYiGQmhNNRpuhtU8B6EGfRimYM",
  "key20": "2EbcsdcQtw4unDUdYLHDL5bontYAPpPXTuHo5381ysjxsRXYfe3vWKU18pp9GYqQ4MfHEqXGC21zmztMVC1kzKwj",
  "key21": "3oT98ZsLPZkqJjJdcKZv3xeXbT4Lap5MFLbV1kQ6UM8Vm16eUwikSBQAn4roEgh9LkE8Ue8Pfg4Mq5YfCc2EEWpj",
  "key22": "5Gy5cTdyDNdPwJX75kUUj5LLAfz6peSfAHuyNJBnQZGdwS4jDS49f4zf16cVTCBBWJrjAKGaDWFU8KLQsh9dTxWR",
  "key23": "5QRTy2kkfL9R1Uza5FSZr21HedNVVQ4D9soJatqgkJgeKJTz55M7q52Y3tApNsjiYVNVEvQicFeiN4EM1SQJaW1e",
  "key24": "PQv5gxa85cMMdQvYnMtJmwSGheDGQRrAmX9kHSoFhCjHth2udNdsVrLdNC2L4SuzfFgEqDoPB2mWG1WLegxovaN",
  "key25": "4sAJcCKiAnrp1MEmnpGvb4oV556P9dBsFFQ9jVhD8B7jeQh1ZbSz86Zrdo1g7tqw2GPAkpzSHffJUhsiarsV5pgf",
  "key26": "62XAXZaZhg2qT8cy2U57nz3ePVTcfzsmv2oY54pRJ9Vzdd63CBQB2SixG2mtPgp6LWDjhmqxuFsvvBHwRyxzvmR2",
  "key27": "2daE9mE2bPHcGnD3Z53zQhyufuiuA6gQsG5jHAA8AHg8UGSq659JAQAoVfTREBnnPgtdnppE6gTkttZah2QHWbaF",
  "key28": "23uYZMf61GWy7VMS3UHVHqgLBZJeDr5WkomhrowYcagpfChqVDer7mki1ViuMEngfZbVqZfs6Uw6RFBo4SfpLj83",
  "key29": "3p2MpeWFBTeVhED6RXPmbf7wVegLdBSdVtoMiARpbpV6jiVMrfkgBU1W7axENWugDZC8Q2aM2rEoecdDDPbXyEza",
  "key30": "5sp1uzrALoNYz7CPnECkcoLRxb5XTT5vdDD1ScTU9yAt65aMHhUp87ARt8HSXpeXXpE4tqMkWHKs5VDzgTn4kNwm"
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
