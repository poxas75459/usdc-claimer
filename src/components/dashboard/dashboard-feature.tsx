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
    "3Qj76zLeAQGCvneMoXSUyTsdqrN3U42VY3nQ8815d3SkpcHvFK9ynWVDZiozwebRCSiLEa2SUxd4WbnQEfjbKRjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8HKBxEYukxvW1ZjNZVFKveUAuH9MPM3naM6ksSh8wRBKznxexLZkt2FXjsTeDusjdNd2Qt8ob4n54yBsrDbrXn",
  "key1": "3aoD6CKq9KLm7Y2EXEdKxMkKkvt9u4joVUPGScwnyD5bK7WkQkmwYEtRHkWqaKcMvebF4jHKZwxG6CjfxA2FjhFV",
  "key2": "DPkTakk8BrVJjRiua5GMCi2p2QbFB229UXLEqT617tQYj9TabcGRBNPtvMuRwbhdKBpW8hxLwaSKiXrB1oJ1wui",
  "key3": "4XWrKhmvoXXdaw81srqJXC2SNapBGEwkk3XMvFdV9vwQ9UUoHsNFXdWh1fwhQCEcZmaMtRr37sRNfZhWpvhRAh4r",
  "key4": "53MumZ33uHK39hzibBaQL9eKB2dhQ72XqvpbTrtMnS1HAW34CxBSEJGV5G2my6jhENzvKxfosMw5F7Qvp3VywvfE",
  "key5": "3QgB56iwMUPKVpyqWHY3TF4kvQHeF78BW1rwfayctbNe21hbUgFxj2UYzJ9SWQtteoNm8DreFsALvJiVBaL5qZmp",
  "key6": "4LN6oXUQyZ1gECmGCwcS37KEHvPCLRD2VmB9neeBDGDZwiepCKfa8Yo3BSAd1XcbnyyH6nFLhz5xNSbVuRzSZ1ex",
  "key7": "5WAvJbi1CGe7U2wsyWPaYyeRyjhkPGCqsK8c6Dcns4Rvj1f8kgkeQpngCPuLsSh4sJ25M1iiLQwWb2BoXnTCBzPR",
  "key8": "2oBRuPT7zqV9WdVehNMDxAacEXuAcaX38FxeehpV9SgwCgg41Vu2eHpFpHw5TzwXbWB1awm5tirJ6Hhe9qHfMZXQ",
  "key9": "Nk83xUnivEfHEaS22NV5ui9ehqtP48au976ssHG7rUjXQZU2aAzHMzhPRmXCkeRoSXw3YiMhLLbu6yXPwvct8uJ",
  "key10": "2ispr79tn3cvRF5jrLt11YP9rRdftmWLdjKzZeRX2RkBpsbE9Ei6VYHj2XWNQKem3oACw3NSSkzeLBDqasvmAYqe",
  "key11": "3UyqCKrcRHCVsA3ofAwLKgsyWixdxgdGRKyFgiVMmoTVijGJawZvgbnMiY96p2HmJoByA45KPGCQhkPnSCwjT3j4",
  "key12": "NbUY6o7QFZnZWvzuzvwEWBToDLcMHDuSC46aYYqnCTop4jNwWjxS5EycwgWSPAmETcKWGPDXwkF2Bwdi3mGVCXv",
  "key13": "3q184tU5ftc9Ck853kfkBnJ24CFBRFdUiVBzEZsrr1eJN3dgNUcr9naGzcrSfSsv8daKXSkfh8MWGuAdrr5VjFPs",
  "key14": "5QsdohJ7zvvqZz11qZEVmzJ268HE95yxTiNk7Hc3HdRWpjK3S3hAJ4gbX2iQ1Qc3yfTgUyB6h7MK4VsG13C59hSF",
  "key15": "GkCuATra5TWBussVwrKBx6iEoPFAHyJbMrjnuD5jzG5iW3su4G89KzBiV96QQW73BanG334u8avRiCUu7Q4Hosa",
  "key16": "3EoSZXDjvHwYH2mTCXTp3L6aGfYZzRMkDHz7qrBGXgySkQfa9mL6NP3ima3SGFXbiipkN4mi4nESRydjfFAjqRai",
  "key17": "2wQzivEzANJtiuX3RVuqZwCa8PCupBYyDhTErGqzZkAtdu2mBAxFX5B2zSfb561Jp8SgAuGqUKsGBEbkikhbEmxA",
  "key18": "2UbPKvHhwVDdKL28U2vMvP1KKnaX8zjvdVcg5U18m8NdBvDQwWGPs2pftA511WEnKUDW5oQSmZw3nZLgwhJsRYaU",
  "key19": "4LmYX95MYJ1mrb2XiaxFUjMymb7pwvbnWh6jPt4MY2tfWn94b6dyezMuyxm1nwapMPCmXrTqwV4Vhi4868d4X4F4",
  "key20": "uGJR3czPKabCSgRXnckJyWMFWP1FAFi6atZfQoGFFuLmGTr9jZupALiN7qwjsKSUPvppvEWtppBHGX4NNVWLCAA",
  "key21": "3UrxZ14MbiinAocpRnMhHTxRHuEf5XQc1FJ9Nrv18rY3aE74Cku6id7RpWR4dBf9Az52EDt6gfGs1eXJxkjXv24J",
  "key22": "34SJRRu3WqodJng5GrMX5Yow9bZNUYtqsnNFLgywLxXREcNCaYDsmscVSKNQYWzjVwAPrNNfDitTfxo3DEpUYhTe",
  "key23": "2XNcJVSzL2mZhBwwF5DJVhYJJPSRRwR5ukw9B3jWTLrx4hiJhoRapZ1EgBLoGrkZpeX4L6QXVQurKBdBrn1jLGUn",
  "key24": "2YpptCCyvCcuSsbHHyuR4zAHxV3xQpDevydxJ2LcV7JdB4aY7KEUXWosS3i9jAhRdBM28qgMbqXQUfvdxJ2XuUQF",
  "key25": "3hMZUmesKuueedMexMvBe5E2913FpJUMxdVt8Mx4bah7z8y8i6uTeaazibUaAWwd7Dx2syP9kgAaAeGVBy4Abag9"
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
