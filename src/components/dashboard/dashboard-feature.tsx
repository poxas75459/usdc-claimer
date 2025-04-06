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
    "5zwjcGAenWNK4YkfWRH4mKLBVJLQm2qQW4VCtEhZGp5ncghQp1ZQoDCDHMZfKxtmsWTn8QFNqhtw14NQ5d7vw6K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2V4z4TgTKdNq3wKkSQuvwwmFvbma4YGEEEmmLngaRn1RSzFLKQFKi9nnmVS4kokVoh5DvW1Zh8PVJQQzAgJ5WW",
  "key1": "523gTbZU3wWPxUYzS8vb46RNxSnVZu2MZi3HcHA1ugPUcf69AUQWprnCg33WN6jL7sieKGUFjqpfQjHkqoMEmmrj",
  "key2": "35ABvrnRtbfM4GbPExqrACYpEM9WuiD65ivo8zwoUBG8bwNNDKuXiR4rceL2cLFkA35bW8rTsZ3oH8m4sZozz1B8",
  "key3": "56k2eazCC5xM8cFu89GagweRicCC8i5sEUSaNqNSHhSGnue7v57KR9kbpxjkjGyYwq1f6D21AiFGMLosQKWwLreG",
  "key4": "3q4GXjBGb5JYtS1axyucwzKqVEtRYmBcPLAVA4G4jMEeAJQ9dJGKMvLHr4HGVDKWD1vJPwagNhFtNPeZRha6SwZS",
  "key5": "4EEBvC4nWyJyeAtBBH6vxAwbgyC7Lzf7zeNSyCKhvkRNgE2PBg5ATu74K3mYHCNEPHTAjT8L1DdpMsZgYN5KRx21",
  "key6": "35rKPw3gPZxufdE2XYem3g6dCGJctvRfNjknYy2u3Jem6ejq1k47VwG1rR9e5t14BKu1YkWveZWdqK9t49xcijKP",
  "key7": "5csRourf7G7VnCjuwAc6kjCF4bGewMZoE8BaAfbyuQioRd2VKPKZ1Dg51RZrLtytdPcNDNdcpd3KQ6tNooDVXMpx",
  "key8": "2ve2L2AAjKvjSjsBp4mKxbRe7ZaWR1HvPmHtneujdu6HKXHFebBj3mw16mb7dGwXuW5sAgaQccfyjDh2ug1QCu2N",
  "key9": "2o6heSGFiB1vZWgHJFLcUTqG1SmCyrDEH6f8M1PxMHkU3Kem6o438E2MezjfxWtjg2EgXAQC2zf4SEFFUvQK4xwR",
  "key10": "n5woDPXGRrkigofEF6TuPPbBEPfdcAC8PBVmnzbHQYx9prxtN269oM95VcyM36RcMzGh2nxffHnEmjhB8Fugebz",
  "key11": "2d3vZtz8hMrTmAVf6ABQXeT5epkECzvPRshFDy1gutbP6M3CKD6YaiTrjAFcW2pzZY9zi6uXtRsmNF9B7a94cTFt",
  "key12": "24E3tjuKh4TdRn4EawB749zivd19m4dNmCTB8y1u3317vks3L7oLniYgGMwmrouUM59Moqh4sNQvW3UZvfcG6jUf",
  "key13": "5kUT4JhTbJgsbXSYnarA4kchUBynzcZkPEoNEGgM8qHV5QSkPP6QkQbsCahVzXP6RkKR1yLPNoRyKAUsZGFAgKEo",
  "key14": "24avY2LgM4bRnKSf7UDuiuHfMGqVWSqWn93BgahdfmVoXooRfN3AvK9ogiVNJx6vgq3r4AsD2F9AuAtqy1xSty5A",
  "key15": "3wB4Nghu1cNtC4dR3ZG5wVpMADrhfNdSqtmfsUZqF4TM7ZheBy5xv33NEtdUkjsrLdZgEpa1FZyfy5p2hyHPrXDm",
  "key16": "3dzfXzXiD7veEPAMHvYrAeMYorYXqFTkL15XS141TtNYHn8GuCvsXd5neNQN4eAeUwrjNPFRKVXxb3ZdfFbyJQSz",
  "key17": "ov3yHP5VfrLo94t4kjdymLp7qmduufTYSMbY9zgqqyaDPgiqchqoHrgUrZskbyNsnincWrKmXQVdp2Ti7hzuQHF",
  "key18": "3psw8W1rUswuh2a38trZijTK3Lkcv5PpdujA1QGaCLL6yYMejYPSAJVjgp59m8HsF8sCJ6zSnqQr84NHnVztvW7y",
  "key19": "5qkUT71nXtEFBvNBkkzqGTzxzVq2xNNHfYAvjyqk9H9EytgbN3tcbSdvieDhC76bvD4Qb8Sp71mMKDkab9HVt68T",
  "key20": "3mHjLR6H9oEywohVxYwLfNaQvKLU4gnAjtdYJpwUVDNexPnd4xkdJnqAwDpbxZUeBwGGXusjZpemuxhorSnRKE7k",
  "key21": "XLKSDKGKHEb314Wz1yNcHvs9uJW55KCMy7jh7L6Nj1zAQmSEMm55rKnqHf8GThje4FBt96bbdwbK95uJX1ve5gU",
  "key22": "3T3H8ceaBHsWcVK4HvYL65QoMTi2n2kb2jnQ5qcGDkxcxVyffrDmC6pZGkkRMzrijcmSAPxZEQnpzcUgQ1nUbp7D",
  "key23": "4dZiC3sqmtqqWKM9gd3ukkA2oVFGtV6tb5heetBjT6JS4vLAAaau3nWHEcsPXQmpqZD7fwpkNBrK594NBByfY4qF",
  "key24": "2KuZWwPj4rACaDMaYrcShU8nc9eVGDGcJwdZhZ8hH1wRUpuwD84vrJwH4BrFZKv2BbgYu3LKKPTruo9pUJxr8tHL"
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
