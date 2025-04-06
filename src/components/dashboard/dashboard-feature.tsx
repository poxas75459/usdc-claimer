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
    "puHMUdQZFtuqu5Vi8q11fg6BXazdnNySMtBAKmPEak6hv4tMEGk7sVVhSDTSL6q6Hiw4zRsNfYNXFcoNHF8mqks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJUWP2VZNmxtY1nChUsSBqjibhG7w9X6SauVPJexUHQADLQBxdRtZK4ZiVD38Bab8pSkPLVgJSS82635dK1Xst6",
  "key1": "pF35YTFPytv6wu55ZNFFjtJ2Lg7swbiTnqF6qi1oSepe9xj7VkhAHL9QKSL5FnAZF4UaBd3ptDRaaTkQij6vjJG",
  "key2": "P9KSs1QPonVe4hzNiv5xJhmgPm8H1QasaToHtmzTzvso9wD6TamVcZQHKN72xanFii1jK73F6VxZrVb1dJsY79P",
  "key3": "233rSDBDiT7hvHfLQHqMErEotVZe8jXE6eWGEMi1wVGWEnW9CWNpnB4NZi2vm2jwCZCoN2NX7k6sff6tzkN5qT2K",
  "key4": "qSSSkdbmdc1Dy4a3q4LVpMaKp4Bi8EeL2G3CuNgVUZ1hfc1rX3CFxPjHRYsMLn4j69Dg6bdJDa3eymqyEo9fKLv",
  "key5": "1sfnSnrfQDrtVEMLkh38gLncV9tFoBqyMj8jMF7Zh2J96sGWGwDYXgrWiswLjXtXpSBB7vWCjbgu6SoViAdj52x",
  "key6": "57FX1VM3WeDiyMkaHbGLvgsV24L1nAYuXbzhcpfvXqoPfPu2dStNg6aj8frTF97hPzJKpuDcea5hMp2yq54KDrvz",
  "key7": "57S1PouqD1oKjDzofCJXU9csQjxcavfUCjcTyMS5ZB7FaBsB2UrW6AFM6QwGhosXg6RyVc29AjLEhPN3DNYzEsJu",
  "key8": "3qT43CUe4PQpCaToFpUWxfKMkksEqSZX76ovWxzLimNDGiU2vHPthHT8jKd69ryqkqqCLX3dWMhvGNKBT2BS9TTA",
  "key9": "2ZjFgtvZ9yGwLxpXcfhkTRw2sgigaRtKydJn3ScPnVwDt8SrYipbVRGzrBFxKRmPMezRq4p8D3cgUZAdpRjCPS1V",
  "key10": "54pBNraS47qwGNKmEE8qmjLFZikkny4MXmd5xQAFV82oiqBYKXJ85zcG97HDa3VD64qRCtE1zVVg7ePhZa1nuJJK",
  "key11": "DNLEKXHB4oDK9psQ4XK4QRGjtsR8V8sqv9ycNfiEQKoyinyMZf18KWwop2EgnFyEutpztScwMv5tD6324ZZmgGm",
  "key12": "Cz4VfjVYVkJZbXwiiCoDBDvjeYmVYp7tsPjiKM7Qax761dXaR9aQbqf7aDTedMkx178oC6WK1kUnfefvd1ttWTU",
  "key13": "3ZboF3Z6Bjb8MTKkKb3pY7v42GbfyzE4yuB8ygbQCx4tUqyuP1WA5dxZdjJzETgyRBMWy6oKj7mN2i9C6iGCS6uy",
  "key14": "hJaY3mizxj7kd63iFyURngkn8g53XK5JvgrXKGTziCEG5PCaVv5GqWskeozEtgAYbbiFtGStmUTvxCrFGtjWBZn",
  "key15": "5YbAMpPcuZhzapL22ugWQroso2bHUPMFU2uhaVJUqrTvsp7y82wAXp87j3sgNSyTjudStZ8QLx899ZnxZSTWps58",
  "key16": "4kiPfDxCPTuad4pD93ESudqLoVAbrxX1wrmxQNzceGep8Lcsh8zoHZfHmtBZJEscT6i2vXmKbe6gKynF7YhWUTet",
  "key17": "4fF7bRwCkNx1cxSJSWkpznrUUS3BZLgT66GPTuhYyH793uVdP6Cx5gfSNcecs62G9YQVhSp9A7N6xxx767v4zVt1",
  "key18": "2TmPLdwBVxSNosNtTfZDELsmxSLgBp7ahF1TxKcXSFZyt8cw82CRCSzvRQsgbLUV4kAPgPyNBuWSD152FQSUZUqm",
  "key19": "5uS7EfftW412zgniiRYhhoAMoRwBabBXKKYmcuHNCwHXgLcedgz8KWHEYKN71EU9tUgwBt2E2zfkik39Dw5ct2dF",
  "key20": "2k3cLo5bSmsgecVgA5hDSvX5k2amnnZsYU1e9s35pBWEYNzhNoJmqzR7XRkoYhv5Bkpowg9GNp8hTWuwDwVsSthJ",
  "key21": "3UJNZmK4SRu6DMm4V2n7jwgQcJhGduUtk9BnjanAZo3hCNstj96XadowVbXw3ds6yhrennCUPVVACZZ7uTrvjTdU",
  "key22": "46fbNm9vGATtJT9KtbymNk87npdrmCCdEbLBDF4rwtnA7xG7BucybWra9YZUrVvvo7qu6JhqiWvtFNQqD7dCAdo1",
  "key23": "4nmZQcpdn5PG5M37FPwzgkQ4v5d4nATziVDsuyQTtmYnYm5B3rFYLdQRXxNJQi5NDtQodz1iEK32SgmqwYfxuLoT",
  "key24": "5uhXhTcv3BDv2mW1VLJRCmgWRbrKnztDMm68M8kv9nti7FoEywj1xXtbQkZXsZGYEnKAPNiHtKic9qrAskHSBfHZ",
  "key25": "2psqJMkoVYc9XbCbJHUdmLLEdc1St4GsnHj8wkJNiAGdnMw9gtKbTajWhbv1MTEAQwx9SQnJzygusgmmHGgh5kQT"
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
