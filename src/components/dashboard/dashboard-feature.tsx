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
    "23GHcp7rkNfvwDZ3v87Rtd5FwwKDMVBPG1fJjinunb57N41odBifmTU53Jic5P2bHc8qGxfJRkceWLdkUqyVs7FA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DSENZirDP6NUXGdHTpksQLorfi1MEjeDJBvTmVzWHUBQWcKYGU4jvhJUP5HZPT2guMeYVyTcUGF4u2GrRxvUSsE",
  "key1": "4Y3u6fdrv6E3Ky9J9XPUrWEXdgXoxjhnCB9q5H8Ks9qavZ3vM71kMGa4cmNrzqUqe6zV5nouixEJiMZr43iExowo",
  "key2": "485aJ7x62fmvfo5Wqb6oPjMDhq27Jqt74VDLbsdPWzW4LEvH4jARckEptvTCyuVFP5YtAP6n5DeA7gnrvsBuWE1z",
  "key3": "2sq4BUn6QPakHVu78SuoaS7fPsWt9n9NzRJ2ELkMyHDBFAnQLnq47ohq9sobs5dCQA5Yo96FKgYv2YKZ9Po1xgEN",
  "key4": "xTcpdZhDd9KR3ZFRAbW7RAVRFxQFEN8NT5ZS1XfyhBm3BewdCURrBj1ThmPyF35LhDMkGwNabEFo6XNnggDuRhQ",
  "key5": "3fWy5TnfaefRvAUffZUjGotN6KynuxaX6utUV8kQ9xPbCyty3hLAbUXmiNfzkrKrAJNshc6vkY4ubkKtsAg1zyAQ",
  "key6": "5ngBcwDR599QU2gYKnxoNe39oqfcdpbpPg3Z4QThBdwabWuPu3WgBjoFS92jbf8FpBuCRRJ3nUANFm46CTqnHXDW",
  "key7": "3Fz1Kato4A6Sd6oAgqCdygow995CJV8DL3fBgJfhRn5MR3FPcGshn7AFtj8HS9B1hePL68FXzGReY8G3VpJ3F7hW",
  "key8": "4NLX8bd6dtK2Dm9jWZBoBTXr2iJu2JU2Q1HBLmxcfYKvDNcRAC8DDkzwSNGBL7EtywyZxwLCpFq7uVTj2f3ok5YC",
  "key9": "2gx9XyFCKLdSMJv9ePLayEPud2EaDha4LCAmoikDEnjxVW9dFmvhxk5Ce5yAJ6W6NfDXNQhEWhHQD52fE6mn4232",
  "key10": "4KqJvLVqPtoWKBpjaXeDq9D1q3N7XatWfyJbY54Cm9wnMhXwQV62sFgUp7Fm7GdU6L2L4m1LEk9CWJs3VEmY7M1N",
  "key11": "5e4ciLJRB1D1zGkrRsJQhU5dAPu26BQbJ84RcVVPZc8EUJUmcx69wLtDyezZXdBb7cHcyNNybti445499oTHNtjQ",
  "key12": "4CxiQxTDAP8vL5zTHuvz4TjWsqVJWDvWxp97qq9r7SpCeAqQLvEjZ4M2S73B56nYfiTteWDyujBJqHNHebHgSmA8",
  "key13": "3hGBAJRJUwETMeu7DJxXRuAEg5ZCZioGpUmra4qgog5gJ1KX5LgJrUWSv6Spfe1acPpKv3LjJqTvnhzXbGKNV3tL",
  "key14": "2y8718eT312VTEzZmMzXe199yA78NAMtxnTXY4CsX5FUJca5m3ZNYAtqyXXgpcJZGsRPZFwk5aTGEXnYimXsb6Y3",
  "key15": "k9Rv1Ly29v3Xwi6TWtNsaSspPLdTsZGUScPRWgVch1AxnpaPvEGeBdMrtpDngwfxmRFDkwK1i2QRqUiD6N3fmQW",
  "key16": "22f3HL2eHCiaspYuUTDHFNNLdCvMU9PR4x3YGLzHCULtVdzPkLMi8GGezqMd7wWATXK8tvFeKgtzH3SR6LjCVkiu",
  "key17": "3L8BJHBQkf4NMBEzjQQxYhNW7rswBKkg8Mt2jHahXiNgUtTwbaVkNLxuTaBngaLBPSAafvJdy9dz4LV8jvYTEJEK",
  "key18": "nzCX5qQ14BehnpC2gUs2zkhsSz1fZXic6QHYYoMryXqqPkLapWD1hm6USqxRu5dqHEduiFxNZjcA4vSgpgQTpd9",
  "key19": "378SyyvtnaXjmGfaxNaQM41jmbSkrJ6AHspF6FgG9v7smpN2i6zm9Gn4sKZhH1ccFyMHciicxPCu5aTp5T3J2cjU",
  "key20": "42WXY44cwgJKTNoDr4dwtxamnfVUfP4EAR8UyCTmK5bQTmQLcNtgbMFtALY8YCMx9ErmTmgiFJgWCB75M8h1EW1t",
  "key21": "2AiwDnHqZkHH4q8a2c3UyakprdAA8JpKknxFpyzFVc2NYNiukYPc3ugb7UvZnMDr6ehXbddQfmYfbvC15qJSQb5k",
  "key22": "629VD3UwDzpkbdpphCgV8PUHyFTsZRykaUBs8oo7NxLjjACKKwnWDuwyDX5LewXcsJyZb6VBMKrdK3SzxcMunM7s",
  "key23": "5EoSV8n1NJGLceeXBfTG9rQMcx6CfPPyRfjQuL6M6PomqKw5SyKNGteDnX1XEXLxrXHSpM5gardg4Hf6wtSFSTUe",
  "key24": "2zuwnjB4PiiT6QsEU4aUomvHBHkGwutCXmupfn6VAC9v3SLoNXF4VE7kPLL2XvVHd7mUWQgotfcUyoK6YyjhvRNW",
  "key25": "ZhpQ4uGWHDTN8RfxKiZrFSQ3cyvTwDvxvuNCdRsQFAxJ5xQxAbvBBjBJEs1cubwjX7Z1hC13akAmFCbYNVPVPrV",
  "key26": "3Ygbh9odJoD7YmkC2DMvdNW6gm9zhAzan5sg3KHN6tzUAjemiBkX71CTaq6J6Djjr7BsEtdufhy1HscFEUkndePA",
  "key27": "hg51K4L9meFNKvW93bTNUGhcbCgJcRiqfWhDmSCMSiFisfq6NJYJ8fesjcGMg7hbsPhzQnntYXjLXHET7yogW4N",
  "key28": "4Wg8w3hxGiyMBac1AofScjA6r7ME9fzyRoZs3ESZDddc7ax5YAiszRqCZZdiTAzDfoTnMqjQ3KSb1Sdy2EVZNups",
  "key29": "3y5byPXUwouVi9TeJDwsKt9LBWZgFzku4DHPXyaVvJVrQBuXa7jWm83X53MFiKXp519NJgsowNkaDHi7ZD13nwgo",
  "key30": "3oybE1BPMrW8A8ofzKGPgX3HNEbj1TTTRcNyPYkWU98WuZCqFhajWH2mRafB4Dy7qWEtZ29n11a2PVQTYzfEHsU",
  "key31": "2Y8Tz9gLcEw8xeqXRFivNWzkUi7i6BFT5b5g1TpajaSdaoV2cFMFPP7LwRRiYpHKQeopLC7M17sLyEorK2kiKdUQ",
  "key32": "4LT4KJxTpoBvN41y2vgdV9TNqkpe6f4s6aaY22js5MFxW3DgXgjFg1bbiMWZUM8P6QBiRvRDsQjnkY6gby15Qqht",
  "key33": "5cT6dd872J7VEhd7LGHyuNhzEyZHJASDc6enGFwFsmd4cCz3sCwks66oSFEBfpjGsczdZ97kRG7NUxDUfZjcmkee"
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
