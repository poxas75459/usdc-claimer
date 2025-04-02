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
    "48rUvsiU4Y4ugfv7TuW7s5hqsRG6Kanv8cZDsEn6dUTcsvCtmZXYX4m351J2wn1c1PmpChgTE6Z9kv4A5wzdCPoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WdYpvYGakuRWsAe45Q7hEBgaE1Le8JF56n1tX34fTSikEvMQVMRrUh8id7Uq5fbB7iXouS9DZcfH55NV3zEiMWU",
  "key1": "3NrUwU1fSDdW35RJEgxweUdEe2qdhd2Un4ow8jhJq75yhs2biAGD1j7JTAbcK7PVmZ8hSFJYUVTHPT8qxzw56cD",
  "key2": "4FszG1xGmk3C75xmKfjcZPguAKjPyeyJ5JkW13NUZmzb6PyGwStni7HRkogejyeg2yVfD4sxhZT6TX9otzb19Gik",
  "key3": "5HVweM8ut5V1nx3V9wejsNza2dX4EiGawVrHnsrkUad99h913dQKL3z1wk5zj6aDcbV2xViGg5TX3Jisj4MW2UBn",
  "key4": "4zZUymNtEDmbZF8oSQEq64BVoAHaZhMDgUh4DDERGUGrNYFj3UPLCkrzNaBcqojNKiSZaW9m59grRuYvTYqq9kB6",
  "key5": "64JdcHXqiwhrJV72J7vuRuLYjcouiySVWr2eQkpe2ir4dAFi5Ya4LdBAqdK9dTRvet2LCAdPD8aZvBSFAL4aShyi",
  "key6": "3YPLna2CbyvWuqpZkPKaFUcWn1StYKFZsvBK41A429WScWVuUiHko6gVd1SzGue9VkPpokKxWnKGxjdmwJ62qoyH",
  "key7": "2w3RGdd4Lv8U7GWwT9N3HwoiB9rjFYxR9LMsgUGwoygn8v22Fu86BKnbhMC9e9pxrsTW21HhbesB5qJAibTn2AXS",
  "key8": "4VH1GBKAPU43T6Rb7nYzaFwQZDnLMzJRonsLuuZXih8EXM5yNEPu3D8JKvkiVyig8jp2VG4PK3s3V6oDDuatmwdV",
  "key9": "4BJpkV2tpnCF3ek5NTefeRZHR6iEZQRGmTfidBSnqtsBMLz7VaBkHPj8RmXYXHKBEGbFzYtqgHJTt7xywd3RPVwu",
  "key10": "4mRqQsmutKpjUfCymuG8wUS3wQmZu89hZjnh9dFkCc2Ce8NR2SxtbX8UtFGha3aMRLuFws7np4zUf5r2CBAJuyCa",
  "key11": "5SA6mUVKNmy1AcvoNzgRFG2fQfJMukEmQwiCJF5wXPgfJYJEMjtbcadt4sv5TjwJm9c4GssYWkaLszyasXxkpLvE",
  "key12": "5Jdz8TPS71pLKLqPd44HyLDTYBe3GNavJGx3MCwDCT7R5BRB2cKtNvsh6t7hpVrgeWTcwns8DsVSxC4j5TGnqdHX",
  "key13": "5CjhvDx5gF4ZnipajBMMZVaF2ff9dJ87SWEvnudStGMP8pFn2bMFUNwZEh2xtVFEiudqhGZ6vzzAMJQcQR4ktNHX",
  "key14": "2VnPwnRFpTVh8FriHnLGTSUZjCTjZDMCWnpRgqondbG9QgTedWKSg52KLBZQoxTRfRPrUGjvXYmmS7ienfoojpkG",
  "key15": "4NUv1eaPNRKvrqtMfSpN4UCsYaLwP8k31hXwVprjswfRsa93nhUJCTbLfWbtz2PkCGNF6XYpMk3MwTcKn9LBenCU",
  "key16": "wYQJda3fdr3z4VaUkDCLrpTf5dUitTXkRQbFcvfrhqj5MgsCjtYfrQ5HBS2aCZuv5hkAQwi6NbynDRD9FFo9zon",
  "key17": "2yPZhPkaHGXjVPmNgZdT19jYXBukASAfePV7x78hLneX7rTr4VtNAt9MKPqP74b5DuamLfXuSxGfEAdiSXyEjVLW",
  "key18": "2uDQuHqc6HQCagWwECpf5GKLgnTGSoQnpSLhBV89PAXU5U1Xpms3jDTUJPkaeuzB15uP8Cx9jE9TNm5rsy4JTRhS",
  "key19": "3Jxz93djuzFFpfanbKJNbyutWLsnRKDQX6gyawiKNneLamY82kWAfJ9UNXyYq5CUSB4Ey2okXv6gX1hWD9tbdExi",
  "key20": "3BUjmRPPGJFKQaLnC1yhLWGiFn9ae9L25Qo2RT9JVa2sxWxFsdKYFnVD41B16u1cdF4LprVZTd4Y4TMyDDPPGFeZ",
  "key21": "4A3dQ8hF5yTSiiof1Vy7zKCjnsyjEgFiZBv7heWCcZsLCJ1yk9zdZ4dZchoj1LwDmHXny1bGt2Nc8ardZAiKnjSe",
  "key22": "57FxGFeDMraGiVB2U1aLCKG9LtqLYtrMs94xMKFXXAWj9zkZQQu77bLkLh5Q5gzsD2FyrUDS5tdpwMJGvAoxYxsh",
  "key23": "2KAqzSPaidyyc3GCi7K3JF7cNksP77gKkvpV48k66aCKbobMVQvGEHChg9kkLUpTdLAi9TAoFVKHujxmtYpFVM7d",
  "key24": "2pGaLpyiqSf3ZkBBwgopFDhjbmhYLgs8StmLff1HGtep3v12mA435zjoc9AxypxS2QGBJUQtxdqy4yFUbmginxoG",
  "key25": "3iLHHGE9hvqzFomXuSijCQvzaVjgH8dQ3mwN2DJknfRmzTi4gF2ranXfTQFQ4WDNYYEmzNwpE6i1kqkufqZc4J52",
  "key26": "2JCiyUEJvALMu3QUCMvxC6Y5GBQCFqG6Bw8DW8S3xMTPoCqJSUkJve8mACp3TC5nsGkvNyYNBipcx6hFsGuB7smx",
  "key27": "3VNejGwJKXw2QHVbHHqny3ECF78B4YMtsQJ4NuioSRzYNNWx4WHEGgwx6YFsHGg5UfNgiGvVjKqPspiZ5hppUbE6",
  "key28": "4VCeMcxude3AVQuxqpuFVNZmisg8tA9dCjs1rQKnkGsKUEg3xKBYN6qgFfGkxUTWuBPjssNHS3LzdfwArVchLYtz",
  "key29": "3LU2EAQbAUZdD9pRmJqyn7wschjAdNtbqm9CwNq9kcg11jXgcRuVjVGZ94VAY44BHr9DqYwtCaiCKxr8mRWCUVMZ"
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
