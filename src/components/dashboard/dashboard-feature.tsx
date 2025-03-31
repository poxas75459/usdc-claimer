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
    "4oENwxQTV1EWMmtvLnLmSbYhXV7p2sek1py6ZDdE5DvCDVGMhWPCWRk939XsxWUYc5pGg7Y5ngUbktP9JjTskThE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fp5MAkywuPQrLGLhNBVeTeVi56LwPBJByssKjfdn5ygMNQbrVVFUP2hgGLBu2HVg8DjaHU1nUpf63tqvPAGwmm3",
  "key1": "jSVoRYqQPAyLY3i6UfbZfhXANirnSpAujhcNLQGiVYXeKaaLLubowrpLVmoPWgv6WXjne1QmUnHtTitsw2crY4J",
  "key2": "4T7D51PNJdLVar9QpvVMaKaqzjNzZbqopzW9ssK25DeJYS1pM2goQWpuU7VmANnnuEeCeRJ1EhZ8Uomh3EC9QGu5",
  "key3": "2nSm9Ggzein1yaM41XL9EgLzCxPMWLdrzBrjcqW73Up5Z1bRnvYbgba6T7sMf5jJhRKCHpWbDC9r2rKH6TuwFaUH",
  "key4": "5nJSXkwGeqQUCbCHkvhdcujcDj6EgSrvmoyFJCvnXzDGJs2nRdGk6PosCaDYb4PTEwR9LWRnW2NcAF1ooCp7SKW5",
  "key5": "4rPz6TZwiBtALgQqcCjGFb1vMxFwjGpxndSTcsKr3V4Xks8h8s3b2sv9vqEYmZawt4TBr8rtLzz6wVvKGWxCRkJX",
  "key6": "swCr8EZ4m6ueDHamDBQ5LdHxxGKNE21LyAKi8TCja7kJUCdCKX99EEdYpf12dNyuVJU3Ea1g8qsdW2dKGkuKDHA",
  "key7": "5dptpQdkaP1NKoEQbRyfAy6oCdtJqgvHqooqGettZk6LTAg5voJ7SDxVLbYwnCtaaJPNgsU3gi3T4PQ8BCYLtiu7",
  "key8": "2zhhbu35HQoxwWq4xxQxac51nee6H4aLAHuirDj4K2bp29XfB5pHFyEL3rgEDDhkwKCb6WKRJJA2TSKRoQGk8Que",
  "key9": "ew86ayo4oZ3hjDhcyioXdpbc8ZbZko4UuS1wsQJ3F8nMC5SjXTaTUYpHxsEeEnJ73uQiD5n4o1bTZpE73oBGtvi",
  "key10": "udHqVe5jS9MsitiRS7wYuM2U4tfV7sWGEcEzkXoSvLMwoMh7EYd6iy5M8TwPaNg9cHZQqZhf56uayuoCU32UDx4",
  "key11": "281SGNAG87SXFQqLbQzgmhL8p7qFKbpsAMXQKLnTdC88gkiLirbdd8qKZaAjnoCFN1Q7fkNLkkozUsLJWVnzv7EN",
  "key12": "5EpfeSrfZuyX7gC3RL5MtKW9r1tiscQEinSJVVo8vjKV7Q6tY5FrohGb81LAX25Jz3Sut4e8s9rGnSzjmCnfmPAt",
  "key13": "4aMcXJWijv8Y9cBepnJGHcDMQeBtUBF5NCsTi747dML3T8zj13bU5oHobdXRGo8dwkDtmzyYTPABeidyQs2jW971",
  "key14": "298zaNi4KTrjZbmpTCW2NkZ8GW8hXCSohy1Yv6aSLEYv8ZGxHQRgZ4HDCqwSKmQF3cMN4hrr8eRpr4ZaCmV72Xr4",
  "key15": "3JRC9QBibkte4Do1psGubdihRo332gzAFMoHV9gwS7oEZynk4mQazyscYPMvvxBCihUzjwauxBAPxv4ZkZHTKif7",
  "key16": "67L1n5Xnd5raZhYszNKbJ1WUHuEcqk7q8mcRdJDrKiaiyYUNYXYBgaUCc3tDHcLAVhWBptxHij3kR1BZyN2DGiyc",
  "key17": "2ybCLcS4Syu1hqEvZwPcJbWeUGRHvrewM6Ny6yJe8qsRTXAETXqG5xrd5MkirBoBQL2GgsYBS66AVxpJbiXzECEb",
  "key18": "5PftgHhJdRXdZMMvadrNCGGH5ymzkydFoZkfVN7WMwWmJh2EWXJ56LaybZtXs3WPUiHfvvpnstRXpeou1hcp4CKX",
  "key19": "219vDMUNEewnkNFpXUagoHS4kMGuhk8k98Tyxqp4m1zN5V4XFX51wq7bhZT7hirMfdMJbnibCKhNxERV7iUz65g2",
  "key20": "5RN3c3M9y8y7YauwwexW92otgR3VLZVLSkSgmzELdHGWmZarTbQZfZtjFLzNhYDo2wFjq6EcKSoaR8MUbv4SV3fJ",
  "key21": "5dpALq45f8BpZevapqu9jdWPsesiY95vaNrjU3X7rgPYuVJfhgLmRogS3hNh8jkosxXrxAFtXsfxnD5ynre69JCt",
  "key22": "2CJNQwhWiZHq6j8JLbw42wubToBTHMtSsD4T914MRqd1vjZc37qAYDy9ZYU7wCrRQijSjNPK3qFeDfKf5NrrZvUK",
  "key23": "2BNGeMzW6Vu2nKj3r5ugpRgkatxNM4kenZVRL23KpKoomafASdCPgWNCMxzspqqb5h9xVQe8ouE6uo6uE9nhSojr",
  "key24": "64afpdwvyo7zSpCuadtN3ybGuHtH53F2TCr7D5QqyDfMedqFYNTNHUTHVq7eEt8FEF8uyqAiBogmn1QY4iRFTsho",
  "key25": "36dNWqHPZkB9my8QZuac8AbDWVw94uL5pAsWp4ZhEPT63sdcyX53Pf3NoG4w4fbkLaqmrqEWd2Feg5aF7G4tRXVM",
  "key26": "4LkQes47m77NPfjeXS1wqJNHpwL1xJfxx43CbTtWrSowWXjUpc8QyUuaaeT7DYSqooYATmvLWLcifNK59ZEeh11r",
  "key27": "4kRZTeyTC1k3UZ4PRHgxKzhYZzCFkrihbtgyc9Rb7MQot8ZhL5JF7znKH1X7Lo3VyANGDaVQKzLE9G1becuQDJi7",
  "key28": "Z5zCes9zjsE7c5Sd3ZnpFWSHwFAAB7CaRWhL826jNe5uzEh38GYxoZfVx8qpjZjkvDjab3V544FdCYLPWiCgXBe",
  "key29": "5jL1XZihhYZirUYaEuT8pZnMyAmbUD3XDgnxgBQKhkSpd1qB8RwomW2nScunpBNrApPcF8mdVki1KokMaTquLkLu",
  "key30": "2BPhmEhPmwMdirpzdeboJ8kk71BBJYow9K7U3thFYQeCVgZFTiFPCzGozHzssAEP9APHjaFkERDPG2zDb9DoPkhh",
  "key31": "2ZeoRfkH1xhGL4rtWkXWafe9UMeywtnFRYNE2UFps5DG9LwCxYSiqbVZotKJ2EkwSDrwHaYNg73phew2JQQQu2Mi"
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
