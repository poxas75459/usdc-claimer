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
    "3tN8vrJn1WAYxF1SJPnU78a4YGVvGFem4Z91HcoQoMq8rYREbbENU2TcTDxzRD1YNY91axcpGesjQXxsPPCxWUEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53XApoUQq8HNdj9WCAUYLofqFynKzXyepZxixZxaoHH3CZJN7xRQacwmdPzEpRKozbPeeQb6YC7vvSgR3kPSYG1J",
  "key1": "2vxXW33ZRjvwAJud83j2eG9thZqVE5uixuFs6bZuHj9YV4vTsEYpw8T4zW3UeBUBBErUNrjNKSsZEgw8eSH5wKhv",
  "key2": "2WKuUt4iTmzYXCSi8qzErbFeCo2AD5FUsQUNnr42YGmHzkXWzcHcVoN8KFB4dNxXXsCcXHhcJvw1SdRG1VV8hpHu",
  "key3": "2wjoZQenW4ZmyQMgtomKdYwNMo6hRvFy8HQuA99YgFvc1Rtn1XG7ETnF844TgKdYKB4BisabF6Drdm5DnZdENjEt",
  "key4": "Y8vyDjUw1tJWPMYbeDSLY9PJWsSz4cFbsi1njV6SWAj3GhAQTNuzT5Tbj36jsdg96Y2fx17JESBK1rHnvDxj1qF",
  "key5": "5kMdX87hG12bqLSfELEPAfe6ZWGoUSEd8bgkSZLhmcogY3FpyuJVQ8wPNZhcuh4gYtjs9weGVxZS5brDTeBLwgqT",
  "key6": "jYBqoBv9e5vftuiUmWREbk16jGHXd2WJRRpRg8KGpnbQU6gakyrZWNAhfWTQcfw9Mi9gXxy9NuEEeVRRyAKFB3J",
  "key7": "2QehjZvoBsM2B2W7sp6BYFQuRegAqLX48TfbXmrKVt51SNSjd5zxwJkLEeoYkkoUZTQxfJKeUvq5FzDBS8su1vKG",
  "key8": "5ZGP33HCrYfQRbay8uLwKFVYZQYGr7io3Vi78bKW2vc3hAqYxySVWPGrSgsybmqRBFPm5sqH9Y6nChUgf48MiMiA",
  "key9": "4ZExSfZjXVTfj7hcueX3EqF6uY6ByL93SNunT2UR1wUZqbUWrCgkdxaAQLVmNrVAUkF5m8WnSvFT3S1U4Mx4LYku",
  "key10": "42gskJLQrvE6BT51bBamd2frXgLMcps8wrBJRHBTBtt2QhhuhUy9KD19cZTozsuDSFKp4YMYXkL51L544gDnHH2",
  "key11": "3sWLjLpp1eQG39oho9yzUNhUQT7L6VCHj2d6YKtuNve8UQYfeSDpL8cQyqf4KpryZq7r2mXdDrNZaib8kDKqAVZz",
  "key12": "5G6Xnj497E4QrSBJtiBN2kRY5eZvGLREaGJNAHrfDJiZZaVe64YooM6uxVYDWs3zZUqEgrk71Av5GBs9BM6GLtqv",
  "key13": "45NQiMZGUxVJAfFZ8rAQxA3T5owSU8eJGiTpvZSYP2XnUDeeEhaD9c1huor6ojE5bNCNTDYYNPwBZwYodyFva6ef",
  "key14": "vGyKsNBkug9i6d4raEEcBGz4hsoh6QuY16rG6qcFSNfY9YkMmTkzEwm2QmfFMf3bGZsmaB2zsAEjQv8GFkNv6Ug",
  "key15": "3TAGBikSyW9fsZ5sZ5fv7y6HmQQxQsVEjudUgK16Q6JUFZPppjxUz9SrEAdqLcfZPkV8HqS2qNVXS8jnJfddapKH",
  "key16": "4jL39GwkiMLwPaY4qrGNcr3eEsuM2paPGxencRGYgDPKptF8589TwKtEU4RU4HR8RTi12MYypjSHYQjoXJXhFBmm",
  "key17": "tSV9nC1yDrykbhQQbVvjTnDa59DsZpaisp7KZNFUpvJRLeGWPXCiDcd99GjzakQSnTbb9yFmLR4N45scanYfFQA",
  "key18": "18ZuDm3swfobxRiYvy1dQuU11eBrCTKZgsbshMjsczYzoigLiXUMF2sdxzN9NkRaKqgWLGxT9pJz428jCaSf2Th",
  "key19": "25qkiHDWzeiJgJStoaiEMCniVnd5m2FEC2apPvtKWqGvoAqziwRwFiHetbjBKXpLSqnznoVxHtWBz5qLNSi5TSqZ",
  "key20": "HgjG1LtV4fXJXUXAaEmSDBGfNt23XvvC7UcGSAHnKrf65hi2LiZ14TygFtW1Kxdmr6ksyjfN3enK4VmsHXYTzhJ",
  "key21": "3uMSmXq7mm9MnyNt8aRb5aMvmqxiUf8hfYGM7pmHDYgcFi9S2pTWD4MWJho7Z7ZhYpAhSuQ1Wn68QwnDURh66Lf7",
  "key22": "rwTadj6Xxvj1AmezdWbJXnM9iuELxq3xCZVNZ5cA7tv9NbRbWFEsHNhH8s2wv79ZF9taxE9wwCNbsHwMs3DxJei",
  "key23": "2io6DbbRFvkn5UEHFshgneUk8AdmjQSvt9G1RxcGdwvd4RXvPcnDyA4tzdi1GoL9DU1d1o3zcFUgwo6ZyJGKgZ9c",
  "key24": "2ZGAfw3jDfVVn9uRDPejwP9nd9vvpF2u24h4BnXB4DzJv6xydSJgkt6LjjEcBDeYcvfYpWmxipH2N2DQW5fa63r6",
  "key25": "dgyVZizSNExhGN4v7ALbDdXJ7kEjYTNDEVMD33aYS8wkBaFaXNVaqEK2Y7UtcNEbdbL4MAKAzhbG4R5KYrRQT78",
  "key26": "4VRghBoHF3ittpNj5dsrzWYNSpxTPvs6UtKvVkdyD4p6T6fKqvweauM5uvA2FHkf8nJgE2dEFCwJPAkgt3T78xUk",
  "key27": "3mmkUN79Qx5tX2J7sJtmHtY3zsyzJ5GGjsACUVxcosYi6C1LB3LmatSU1EF7PnFCaXs1UuK6rcWHpmEqAD7F3bZo"
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
