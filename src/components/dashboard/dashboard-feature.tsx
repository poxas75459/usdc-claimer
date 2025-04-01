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
    "4Vm8vzru3JQh7WeBikb6m1GbvFF7E44sN5PGZRP8BCjbYzf7DTwcZnZS2yaYmG16UMUS4fZnA6gD8ejgcirRLn1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3osivpBKgGDUEfyAh6k4PaT8guyv81Wpj7PnUfKHgt2UYXUfMs8wYwEFjEpZegE4wY1N6EJLiWE1rtuBBiWbeYuj",
  "key1": "2u5dgx8BtDuLJEw1DPammZhv1eWe4S1JuJiQjXYYEW9rDR6xa89vg4XPJ4Yy5ogPxc4DS6jgKeeGisvpMDeLE5oL",
  "key2": "4vqW84krtPoqDxsvrN5TWCFCKk5m3iSD8QEAoNPsyJCfMVnib5Bj4dL3bzBVT8D2D6BRPgvSYFin51oGGVaZUUGe",
  "key3": "MGd75rNKR4Ct5Mv5LHReof2hFLg8oPA2mzCPF8SpEHpskVnAjtenNdPhP2JgQgZWXQWqTCr1FuMG6nUkEE8KDuu",
  "key4": "39pvCfBfmv4Ck3csBUDDqe4PeZE1GiZWogj2eSrFp8vzK77fd1NL2RWxQ4WCCtW7TG4JFoNME9H9nq51LXzwL22g",
  "key5": "55QgUmttDJYHhxd4WJamPMLNQXj8sWbRJSd9y9zEExWgNFAVLqBBVh1KLV1bqCKFKX1xtzG1URRKh7D5jXuR2mF3",
  "key6": "4jGKjvqjwcnf5ZTmrsejK2MKnwA1Mtx72U6PPD9rjv8W68wFy9kUnp6Bac7ZjPZoU6JUKuTH7k9tEyD4fY5GXDvL",
  "key7": "46ZgL8cSQE4KxWQPsoinJXXj8C6fLpSLFyW6bnoJecTPgwWRL5NZzE7aDcPoYm8PCEkFSAXixTBFb9MzGjypevw9",
  "key8": "4rYATKQ9mEbRvx3eQK14N4mDxwVj81wwVLZKTvN2zBtT3jrmxcaDiAT64j4DEA8ruUdifbSwh9vj1YpNcDcVdrqx",
  "key9": "3wqbKjzzoXD7ghwT1t58udMdg5CBZuv1YBCzL91LZ7scESWgbjCe3vYgrmETqnuC7Hu5XhET1GFAey3q8nYqAGTY",
  "key10": "3KWDskHfbuS5xbtG3kwrviHft6MUje4L7ubrYKLpqxx4gxZ24i7uNE5bBymY4DCXasSELaKbV2cA4Bmt3bHeA3LC",
  "key11": "3EVZ5N1yWgS42A7W9sa5EbFxqGupFKRBrwSDoZ4AcyJMzuQogPJqX9Qy83Zk74vt5bwtnbFPmS9yf6wyUTvsXrGj",
  "key12": "2G63wkoSc7KsoR4h5XKA4zCqqx7WxLKoShR8GSbqYhRJK7AZri2aotHtYs9UgfDqZfbuNXnNjPBYDbEWaS6HKF7i",
  "key13": "4PFTy1u4daWZugmjYrBxSZSWxRRwz3dFfeScoUppsFNzdphjcp8GJ8fGFuypv5pzyx3pGuqZFhBxbyzDC2paKjEs",
  "key14": "5FYnTUAtQ9dosDhw5LvNHYqCTzoup59nkx4VyypYQeP7Po8ckBumkgtLRmaS3zntcA5Y3TMQEMUmihvSavuEHu64",
  "key15": "4giVoi3zQWTsi4g1a6AFJFDj2otPbLVMGg8ZdkNVksu78GencUySDXSSq6RbhDdaE5g6vFuAamiFzurnf2hbAYai",
  "key16": "z3b94mKQ888cA7oSuCRZ3NEhrR9jUJquLD717B8U4NfCWcVSf9ionaREnGcg1XdHEtabDqhhzoPosmKL85Sw6LU",
  "key17": "5S9M3yQhm4Y21wBucaZtteE36Fo8po1TjhkyUzz4F6bfeGqxhQkkY8TudMes5ySPiEqmiih7YFsAUXGLW7GtaBD7",
  "key18": "3uFwg7y9Snahbr8X1WTtimWUzboSnEGoZ32JMudHhjefanuafpwtTTJp8jxo1sFoPC2kcNy8VndPg3C81z3JBZsn",
  "key19": "33TiQw6YmjV3cbKsyKNWWBiuX3zkbDvszZrdw28wRixJ6cv1UaeX7bWwP5jGexsUz3JzGcm1hwmuUKEwLJ2Usfkt",
  "key20": "5CiFuE69B2AxUBhp1LuF7YVcgXQwnxU3EccffwGUsk6hVjpHetHPJXPfdMYTq3VCvjAYM1LzQZHeuyWrGH5b9q4T",
  "key21": "3gduUDR12yTpDgSM8rmvSnJY3ixqG2fNX99dAWCMpExuURqrhzcHNe2UHUavyhu9GBvYtHkTSLNkT57piFEcoQAq",
  "key22": "4NrBe5k4RjLM2epChDwszpq9vdvvkthmaVFxzXSveyY3FPZVrQQTytehBRsGhMqd3qSaUnNm1hpX68obLK18fxDV",
  "key23": "5PFcra9idAMJafqHdtpGp9Nod1jorNCm79MpiEvWhvRu5DwLgmvHmCbZUJfKN7pvqN5bq6TU9pxWHPtspaPiiH2d",
  "key24": "PhZcAfxGb4z8RPhjgR1xBfXuvD5Yscq4ytYt6xRjn3nvRwEDzhzMF14hR9ewX6GN2zvAZudUisBZymsj7GHiWBa",
  "key25": "5CBKa297zGnivdrx4mhap7kv2EmyxWEYTFZKimd8CXotCzFoaHSLfuwEGVupZzNeYotjeE7jcsEYNbKwg3E66atr"
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
