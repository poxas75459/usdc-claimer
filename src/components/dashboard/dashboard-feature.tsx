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
    "4gCRDpLWwXkD2MxHxcsZ4Ehw1EoK7zKw1J38JT9DvpUfnVfWAb7rc6KTEqDnidp2rPUucw7narTZXWSXhiv4k4e8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SPtpRKQBu3ubUPfqN7A7i72ww69hzr77B25jqmjnr2CDFcwteUMiTJr2faCgaBAw6kXowzhecoTZQhANi9EDHdt",
  "key1": "A1TXyP77FMpntVCPB3kxaViwo5swYjfHLgpe9tCW91wpDFQhK9Tip4KXbRHYpQPeR5d1Rfd3B5LLfH1i4KYk9Xh",
  "key2": "4ErdU3NVziTj7Kn2niFqjcBz4RLpaamX2WFNBFR7CgNQPXGyMt68ijVH1e2QuCro5tM7T6dGWNwBxwD1HmA83qst",
  "key3": "3XmCq4eEcEFNiT4DQ6hACtjxoWGahqb7iQqtrCfc3RdyRHCDCmiX476ALksPtHfqStLzMgtexZ5mNb7focgzsMXA",
  "key4": "5Envvbs2dx9YVW17LT7Leo5JK5BECTxGJsZm3Go5UDq4r9Li3JGUML2E1oTTJjA2Ng7AYafH1BdRdUHFwZQaW3Lc",
  "key5": "3hC5wtAZKBHJ8GFY1AdfZ2V2yDJtyHfSPDnCF6f2yx1buJnCt36UzQXfDd6KnTMU6GUQQozgmW3mSfZ27Z3w9tGE",
  "key6": "3AtX9rJ6A1hiJ65ddeYMhJp9v1bJ3eQFmHgox1hnZk2z3CKADxCHJoEopQnaxJN6d13hfzXYb7hya5aZ7GseCgmQ",
  "key7": "4aBPEL2uKufagNubnDigMfGzLBeF9NgSRLtmHbDb8aaMi9GJnNS1ouGk8fXnUhS4oY6fzosYq9ETNehXVopTDRbm",
  "key8": "5eSKHo4qVKj6QGMsdq1aFzC8a3ZChjZVpij11KHE66bWnZZDjSvbmWKXXR2cB5kSeHDrMb2NbWqrVeov5qwGZKtV",
  "key9": "2PMYTudNuAQbTXiBe3aF8JGiJ4vTRvb1revoGSkg7r6zL24MxBWL4f48YdonXMHYvvzYmmA1Grwt6qzqxfyAadxn",
  "key10": "5wey9CePxxGfpRQrBiLuadb3vUXF13jvyvUSUg6XbFonhxTcyVsC1PLsm4M9M1m49MtCzcVuynhF9J2snFZb8hAA",
  "key11": "4EW1y1CvmgHxZH2py5zmTgWoQmCMMJCxJ4FWbfmgApz47BLEevKUQhXNVK8dnF8smVuBPAVqFzxU7g9f4vKbru5q",
  "key12": "2AgomEKWttgKyeRj4maaeP3G3djCUDpuvhAV3tg8HrsFbHTr89qFTHHCMPW8rshKygfyff7bFteidKyWgsuXke91",
  "key13": "5eps9uHEYZ1cAtUTPuULRxeZapEGyS8Pun6pi51kWMoWb1GqfaRnSFK2n5dQXGgk8bHprUZUUJxDpPHskjoiiC5g",
  "key14": "J3iwppNCjQ2XZoszQf7hqfNCPRY5CcUHYAiP3PYsSDg5PdCi2yZGrbfEna4YpYuizoMgXWYQG5JRkKxeCPoFetL",
  "key15": "gQA6MQDzzfj9kyrMAvzpdGTyJPm6YAmMibBwESuZFtTLreno1x6mXMTHigPNpJdVyuArH5YGNgxkD9UVXKogNpo",
  "key16": "zMNWNmksuSPSXqEBaszZfWSBeU4iio95hhbhUn4wNaKMgEXWcNBLrHh4jLP5Jx54u9774PxirHGcMAtKDwLDPwT",
  "key17": "2JhCTFKms6NZGAvWdbj5cx3Bs1HnjzdN85s4h8hQACXacYaC1v1aA1zpYti49swXvNuipNm1A8gGxgoCuv11LWLm",
  "key18": "28ucw48tMA4wbt3StNnqg2J7AdgMvMG9XMAEXRj3kdQ6Q5kXBTtvz3JdystuJ4dF32naxypsUx2cWoqnv7GVCkep",
  "key19": "MVeHF9xth57UuguHuBEcJsiVwxJfobDHBQhEjfxkeQuWrFW7ghWDwrH9Qkg3qVKQRLK7CMYF4TJ8JceKYth6vkH",
  "key20": "38Hw3DeUPe5mBYP9iaSNdHQSfdjWduJwddnhaQJBcwjBLfxK1wrMsjN6u7WbaVGoJE6XBTKUL2MzDJzc3mcmv9cs",
  "key21": "3vvxyBs9fwctcEgdXgDLKEHNykRQLj78a8Ksq7iLc3eKh4ZzPYGsjJuqvzAmKB5Zu2h2aBmbG6rKVrjx2WoEPta",
  "key22": "zTzZFYyojDh3aSRCxSSt6yXVq5mgjSXQdiR9swant21buLWthbnhZyamsAfcSf6sHNYB2X7Td9QbzfLCBUWX4n2",
  "key23": "2MHNTmy6Yhogxyvg7xVSgRh6GJW5TzLbAtyd6Rsg7nwDtdtTtVGgiPqT6qGBx57Aba5DdcwDHX2qU8gnkYX6ZspN",
  "key24": "4Fx22LiECRo6mwEPVkj9NstBCkMBoFboKCeNiBsWn64PUEenEDdeeL9U75GAVTiq3fhYQRfWG3Lhef5fNyb1YAMz",
  "key25": "3qhYqZH4ehs3kPqnDpnpCkzYRVzTTXNxNPkNMJFJDA9WRwdjtZoLRT6FRYyHKBhc1Wa7bJTTazpdVHxw1aHmbxg4",
  "key26": "4KjJKtVejfLczDp2gxTY5xtM11GvQhUvvhvLstVumNhf7iA6LB7XhuWBzyrvBT4VRY7622skRXDzTK2WGs28STjh",
  "key27": "kxo6fq4zbmpfw7U4PnR87awBSfdTyXJTKqGUK3zuweJSCyf7z4PxJAS4GrwPdK3Ed48UBz3D5a3rJMKGUKxtThR",
  "key28": "2VxtHw456WSyern2ugsPykrjA4xgd8xPxAwhitzg1SvSRsVzikydC3QASRzBzumyfkcFy6uFFKwjxoLrcFk969WH",
  "key29": "4weDGj7HBaAuqFUh2AnP25tHkxSnTq3SftPQ2JQ8cPjwp9YJG7oAkiswhAVjQYpC8Qfq5KWPBjeGM7u57zzCyoFh",
  "key30": "5LUY8cDaFExSkxzrXuis1NwMJa8udKx6258Hv51cWwE1WR1NfxqfDNFACVN5MP75Zgc7cGMNT1d8bH2qtUW1FfxL",
  "key31": "5fiyPYKv3eSBeuNRffUgJzy66hyjtbdJcdtHJVnT72ipXBVpqW2rvRHoubPy18ukMoSp22NTbcZPQYa1pvFcLHo9",
  "key32": "2iKhbH4T38bQm4rxoeabq62Bf9tH2GLiTRdvj6Q12J7q3SwnuubTJ4isWHpmo2KUuyMPfA1gLz72qQwXwe5FYrub"
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
