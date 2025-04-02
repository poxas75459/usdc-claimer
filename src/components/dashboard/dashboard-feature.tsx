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
    "62trbwL4MA8eojBCPBhN3xnJKeRn3pKD4jetv8riq2uSYWTztS1SH9Fv1EBW5yi5DkS48cqNtqpHaNpsSz4SuBms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fdRFpBNixgBtLXWCTxmxteWSQTNuWrJy31n3eEJW7w8yhepdo7aBS7g8mzpUJtKUFfTx3kK1qmLdnDrcjpFp4kh",
  "key1": "4aSPnRo9eBcQZVki8vtdoWfdC4epgr7uGZKFxn8pWQ9TgBSt9hHgGHsgUbo79bK5opKr9kqUeF1NioMQQ2hxM5rE",
  "key2": "3XwvzP8YpLVBX27vS71srFcNJMRf9dQ4hYyZSkuBpwdNJb7KacThknMw1gS8LfwcsEgLs7njF3cGnHnDhz7PFwqK",
  "key3": "5Ui3eZAjq53LeS2m3MXLRfdEwjAZmKHacCUxrnKRk3mWe6yRHhHujp7bqqZx1nR7CaQLAUHEEdJBqaqAYkbgoKhQ",
  "key4": "2gbpAWq4sYZhJDrhcQMTwAwQ8vevtT7zvgQG4Hx8UcWHrPcAPFw1tNzHQqDB5Xormd2hjteb63RB8JPeYbwPuUoS",
  "key5": "53iQx1Y4XJitMrsGGeeKy8SDmUPPYZDiDwzmkLZ7nu4BMiKnExcjy6KiyTQH9GwgwUwgcDwegFo2eatjYH1HJLEm",
  "key6": "yGf6xvfQa81bLdowC5k6DeEj9z6Mv6QcyochYVjVgX33ptr5ekhy9cYeLYPQwthPe2bMomwZrsXX1mtjmAK5QXX",
  "key7": "2mWM17Dk9gJcdv7jNZdhLSME9FEExcAm7rA7wjDFGaguoXLd2sAT4U6N1rYQg6sMw81pfQoXfnjUVGL6kimAN9LH",
  "key8": "snMzDMkCBFyAW8PEAepnXvUSSkRqc51xyMr8J8KpmFFVW9d9a1oa5fDT8FANipLye6LuCzaEkR9CvSHNrfHTEW6",
  "key9": "2GWJKLFVFE69r7SyZA3YFfGBn4tBVLPs11JWRGbU5oM7j4miDtsYjaxMYbugaeCG9yq1kM9TcG5jxAiLJzwBwqsq",
  "key10": "5vj7Ld7QBoAtHPB1miZDRzWRJZfHNgN77JHbmFV45uKgq2kVfYNxoUbcFB4Z8yvwjiAfdeZRT1KmVUpqpRDtmTH7",
  "key11": "4UoRWMMrmxUnxgFCoMqy6TbrzdvpBdhwMN8CfMEjEs12Yc6hHmk9DqkGUxuttsjqHimGYPmkzwkYi9pKALXfpre5",
  "key12": "34x8TzdAYHetHVcGViUWZ4aFq3ghGNf5qYnHkRiRihCZ3NK1BGJmejSzaGAznCM29WxpZdARwh1aNtkJyrn5QtnU",
  "key13": "5kzosqjoB5C2VVwQp2pvH7DBBJ3UR9RUDPJJvFXZGGdTtp8a3UtGBWPGi9XhX5vgSbPnfRL6jxXXvo1SKgCcw9qa",
  "key14": "5VCtnmk44vxD6tdvj6Rh94HnmSEBpuQ1fdLEiTPJhZ7x2CZKqEZrwB5DbG17UPyfkZWKaVSkUTZ6Dm6Ch8B1JubG",
  "key15": "3GVV79SxNqjWf6E4hcj33praWPc5DF6NMGT9QxXPLJrjdNHDLF1qWTQQHd2VHoVXJfZ3xLnii2dPmE1KqTF7KCFz",
  "key16": "2U6gUafMsCvUDsunuVH3qtSbyEKQQwXQKLMCa9eCHs7hdArHRXXqF84wbVsCawiYrm1GSuag71rLASHy2N41hz6z",
  "key17": "5TD12Njzvi4FVSLw3kTSj6bR18Mb5v4V7WnVg3FjyXHopzxzZwCwXoaTqS72iftuGGGTt6cYaNTt3NjcQdDUib98",
  "key18": "4ZXVrFncSTKMQLkLz5pciZcDhHBDxYX3BGJiKcKjhvZrMVsF3DTq5tMmScQTmE6SnZ4SaN9x5mGhP3oFfesVFQUt",
  "key19": "2vg8U2MYw6CrVP67vd1qA8uJW4zWwTUNA6WsV69MVLKjarMzEJCKqxCsFsNeP23xDamFYnx3GVPPUnSvRc8EW4Tn",
  "key20": "3uS1JDvBHRc1nRcEHZ4VFahVtoUhQnsrC3oZBposbtzS1qwKZHZ9vvrG78nSYKqAKQRXKKnn2s4bvp2vDYPn2cXP",
  "key21": "2eXdk3bRCFfDqe5TnynZQ53Ea4g6c3RsDeqhEjU64CL5hD7ZZLia9GuMrnbLSSCcmtvuAvdoKLWJ13QKNkwx2C9K",
  "key22": "2qpWFjoujyWtHfCtKUuCe7bNHwM36HSyVEDGPmuJZAjsCRWHZrTMsp1MJVAfcm8cu2sEX54asfL7iQVvEAPQKXVF",
  "key23": "db2RnzRLBfE7NrEj9SewV8Y1LBtgecghgyoUBtvsS4fKPTb91bycEZZBFGpCQUFxbsAkfHmN5xDAqeA8rHoP78d",
  "key24": "xVZEWHMPpTTVMsaiLpEHwxrNjqBxe7zaB5XqgvoKcNpJW4Numky3q4o4WeRfgQJbuwHQdWqZ8kiESijsFYT2tpZ",
  "key25": "5vtuNQrnpZBD4oFSsAzYXbzW7TeLZLFimjietfZZvMuHX47MfzM3RGAEWAj8m4cYCpfmdnA6iFSjFxfjVmXGNj9C",
  "key26": "5SskpbkuWDWDHCSzfMrneujqMKGLwhUXWR2zxWEfjgs7Fxz2SsELVFwhy8a3FKARPJ3yh3wxdnfHgJuAooMm9s1A",
  "key27": "6pT3dLSXic4PWHb2BPVQr29BjW7vG1aqzrdYoXWahabvhrhnt5GfqSczb72z8MDpGyVMu1xdiqNgz5JcGBuotv5"
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
