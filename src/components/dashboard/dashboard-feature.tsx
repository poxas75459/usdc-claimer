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
    "2ACrKJixw8PobZrDLGXiwgq2w3iRu7VPoDTegptnjggbQSuwqoyNzUTKukywKRi2J6p542Fqr7ssff1HBoNXkqQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39TVHojet3aDDm2siS6ktDmHSpBdxZWfSfqRLPQuRWHVzYUszBuE8iRQNyYwsvTScCGDy574SC5bq9EVADaH7Kpp",
  "key1": "4BReaPpfyHXjQbqbcvfagMg9A4AJKFzNgKfbYvcmRXCQ9b1e9F2nyCsB5V8MLoSKnaoHjNuJmez7zM4WTe9oGqV1",
  "key2": "2DDtizjhsWDA5omqquzWJsyA2HZCUzfCXNX42YASW8YFYygC97duxWHcuCvgdZoHsWk9itoWk522h9fmnEW3htDv",
  "key3": "3VwNAwjQJnnizusokRYRCBF98fseMzAE6ihB7vx3fesxCC2ZiiJEQ6j73nPiVRhLMD61nwpYqUZZbuGUkQsoyD7G",
  "key4": "5rtmRWyBU8UM12PW6nB366CLsfHWzGE1BSuuMpw52zbVje6VY7Bikf2xKfKxKDSUqLUjm8GVm7gQVssjgDChF4Bb",
  "key5": "4deL4biWg8ELgd61e2e5GpZ3pcaYjxz4xewYkxaqd9KmSnfNqxTihSRQ3xvvq1ixyGQ3ygaSmRjsZPLJ6LuZoDEU",
  "key6": "4KijVVsHZbvns8QeqdrkCtS9eYR2J7z5WjUyfpqryqPnbQ6SBFhrMpDtyPeHkmUmQxyVsvnA4MKwZdgtg7goDFvA",
  "key7": "JaMwHpcCR2UsHG3ys5ZUAU9rVhuk2avsafrc3A5xdsp6TtHSL9hpMxaACVEnHW1YZ6gt6pBgcnbs1kWX4t2prm9",
  "key8": "21krpJQjjGixjdQdy7cwtC6dNrpDKEn8N5QvVyQQiV99hmbrjR5EfaobvGoud1hyaLmpaTPrY2QXxC8f7uUyhHo7",
  "key9": "gQ1XfzJC1xSkeAaqAEuGT5zxBWadWV98z4nZYij3EwJoVTDwc3aw1jkqfDjsEuWMqcKGxyvBnZ1Rgdq3po8XJPt",
  "key10": "4Nr2tiHtFutVcE9PnEpGqSggTMcHxEdk5FtUwAxge2eMhFv4shPbSPboK59qTg6REzQyuhzq6az61ygVhecqpsHq",
  "key11": "5LSwcg76FJwuWXrrWZYrEJu6SaYE7KswKAb3PKWKUVSVW2rxtbRgqBZbnVHZaZenMMozrUh6AevANEDoUAYEw4jL",
  "key12": "ByN4FrQp8PuVCBYRCTHiZUvvZYzTv86J3mKs6GRSZQ8P8cyJ3rKiyPE75HXWuY7SgdaH9DYSqJ7MWfCfnPvciXy",
  "key13": "5e8Yb6Cx123m1VHsiUmoABEDMY6wLeFCFFgUxukB4SLnC9essEXnzQffzTTqKNeWxgrcrBRWEWE3aECba1tfLLt3",
  "key14": "46jSZDFfSxRAd4baAkuRq5UpXk7YAfRTeRNQ6spDb1Hn6ysWQ5UB96xviiPXM4URDnMmdp2RQSBfjoDCjPWcmNyw",
  "key15": "4Wv3xj5BbSkAmB3j9kSn4SHvgo7svvZTKqSn49tbjJTauBF6Gf6zt5YzujdeMZPFtMb9gYwpovv67gXQ4UHVw6kh",
  "key16": "5hiY8Q4RXhoFDUVzBa1sYazvsbtnAVgfwuGHgSPQvJLLFSx1gGcqMHc8qLPqFTdD7hD1YunByMV9yNsbsXReo658",
  "key17": "31pBBRq354wG64qref3oXxAxUH3UAomXWMyxodjyzRiKYAW7zEaMCeh8F8RgwK61zqQDLAbdvSFBJAgjfx8vvXii",
  "key18": "24kL29ersbecfqmsrhDCtGCiNjsJgMfWPZFGPfkem7bTd15w2NuLKmhxmAHfaooRoB8gMZRRFHGKxwYCm6sZTgbi",
  "key19": "4PXEejPDtqGnrRXE4tWS1kupBw45QZw93tUgMmEWZofHjPeNJ3kRjeZtzC69ccSRcc6rGJmqVLXseRXZWvoY2jnY",
  "key20": "49DeV26pzkS29dzGdFuHESJEyP6hzS8HtyfcWzcuRrTFvJ7WkUXp5MVwWBeKfV6cHmsB5rkaT5d9d6MWxQJPPuiJ",
  "key21": "3ZFi49GL2sgiCCKqg9budESZajivto4sSGawvNcNSnW14rWVrS4xZU3iujUUPokAoRyydwSZgoDBDjbt8J5wHdgq",
  "key22": "4QmGqagYC2ezbszEha6nJe4tBfxdcszZzLZg2i9Zzf3H8YEGMACZNAKHDLg2g5Z4mRwsMX9WaeMA9P15xWZf5vX9",
  "key23": "3FBJM2Asdik1gPMhWU6dnju9jf3w1KKVF1puSdkPm7SPbZm6QUx9t4c84bzBLAvNAxZ2npc6QjeeBRtmYXL9xZta",
  "key24": "474hksWieAAko5KYnfhZTqKvbKzi59SkvgbizjGEc98BRF7P1YANV6fPVU1yHXqn5hAuARejYfS7Dkwx5uYz2vc",
  "key25": "5P26cCFziNyw3GpXtJvxVyxjLeh119j2zvuMo4HUw99QawmJ8fn2VxbtC3jZ3WH8vpr4gjGQ8HYwrociinW7eEpd",
  "key26": "64T1SeKnTfz2xuZPwd5XXoezNxULKS1iwjrwvE4PYaYgQaZ9UbpfNADwsTLdJnE2tm6R4uk4gcDYrVzE7EniYWad",
  "key27": "4yrE4r7WKkj9iESbouKDs3b2GLaoZnbUANToN6p1pbJjDV4sWZGknZbvc8AqcdV9473fzPwU8EF6kGXpCnH8Y2JQ",
  "key28": "4BiektiPyXXsh1m4Gsh4yFUNx3B9HcpZCTsGDAWfx4swMAFoHUAh6L8PFUF17G4ouQtuiaCGUw3eaFKmmMwCiSd6",
  "key29": "2dK1DNW4Gn7F1UxAzoKitjmqBeWLsEXnidREthBoPe1FPyJWaqSENUdsjx9UkuKoLJ936Pz2HVGB45jiYYw8HMrV",
  "key30": "CYhFpaJmbfCfxH5Xschio5WLDZkt4c3yVVCf5YgVajnmDGgCzwoQc4QmGmJyUmUuF7LVBQKyjDwsaBehNhPFgKR",
  "key31": "4GDHcu7oDQapXJJL3oSSNqk8ahKAvKRibiBMhTbQhRARL8x7YgvsvY5TSjZSAgb1GUJ7qaqwe8uhv1fALe7ShRZH"
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
