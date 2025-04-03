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
    "5gSiG9CVzfLTYCMt6RxAserx6tYNGcqrqdzWpAhhGwuXsrXpH7NHqQE3L5KEMrewcr6n7L5WJZJPoC4BNEUApJBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exydbSXNdC2bAzjdp5cf8RmbmCtBdUSRYWXj8AdYPjaSXT87dmL82QZdYYMcR7thALP8hCDjJv8fUeSGxEbyQtb",
  "key1": "jquPHkDN8xd7ZKzoGA6gXkTZUUvY1uCP6UCwpvVb9pWbFTvtFu3rhDd5k7jgwtnLryam8rn1aSkxLZdQgLbELGA",
  "key2": "u2yjT1jMiH539eyMSgVrohrH3ZQASbXUdZhu9CwZ4N1fqubZBZ3zBNuqbPAfagdvw8T2AmR4Num5tqU7xcgyFLm",
  "key3": "c277vgt6GNMfh5YMRSxmC6LEK23ATL5seoMLNSPJTzcezChTeznnhW6jZfrWPF56vzQgZUwFTqGkMAxWSTaTQiM",
  "key4": "5Kh6c3FigowyT8v1vp76UFEh6NcUN9AHSrTfEYfZLByHJwCEE37LirSXBqn95d6jRTvd6dHdgZwJs3N1XMs59G1W",
  "key5": "1ydirgQa3uz3Mrb52sBxvjbeLXbQWxMiJ9BVdwr1UED77GLnhSM98DycJEvVHb9H151BcFjrmpBtioxP8hveixb",
  "key6": "4er9smeG4NP4th976wVBQr1uLGSkvi7MoCmvBL4QJ6JcT78htJmWgkhm3MpPgxTAK8TzmKoh9Yme3MSisV7uJove",
  "key7": "4SS6fXurWrZGbLXHiGBRp1GvBBHtG9noy8zfSo5gcWatkuMSKZtmANbQqaYrj2nyK7Zy51xGcFAW5C7BMJhEfAWB",
  "key8": "2aH9vPu8S8M3mrRb8E3vSd6tMLyGQ7bnQ8yGQ9cDQxZdYkk3E8hQctgpW6qzFaUgBUDrZymTuJ8WHMnJsmXdvUPb",
  "key9": "3tDNSXddYwHwU6TjRv2yZY4o1vP1eYiqhfb8Yufqn5QQ6x2WvryfnJCQ4tqLLwJWJCUT5KbRDbxX19Mzy3yWXwmq",
  "key10": "23QiaReVMBmQLmWDnDXu449WrVW48WEtZCJyRRxeatSuuFXgjHasKwTy3KaLRj66UtbHaqGZPko2euvAxVuS1XWn",
  "key11": "5Jt2Kogz1pNAY5ojwm9TfVhaSaSKsqDaHp4m6XQ25omsPbDoQT5dNL9ugmRi1Qi4Vkb88dHaGt1TdgHqRLU9rgxm",
  "key12": "2f2PiCGfezV9cN3QXTPGsDRH1EZ8Hm7WRx9u5QKvKaPKULrfwyuiwu19E1kHGfxDeodQPbery59LzttniBL9863V",
  "key13": "5kk2ofbLsaWK34NVW9twM6eh7nMmYaHpiXcYr33epoFpW9kJmQu5DtdHmXPuDoFPTfTVuzWa7MpbMfnoRmX4P7yc",
  "key14": "4eVxVyiLGBn9qYazNEsGii8FmqoGbcaLevXbYq5pfe4z5gALMzRYipk73i1XL6qUYqycyLtzbo779mQXML4YxDZp",
  "key15": "334GnDgbqb4nhXWWzBG4YCto4NXfcLk2ECohNAs1y7sLRYqJkHfmWtiZPkgM3hsAePuHLQstgNpaLfVhDy8W5mZ4",
  "key16": "48oJ9dLyX7ENugfVMvoGzr3tikrtb3cKFZXVN8vFe1jAAJaqEhykjwJjmnqgrjnfiXRvFQyNnZqzZFYAdN351QT8",
  "key17": "2DxVQU4dQQ4upZmYWWPqdcY1pHVqLxv9FvGoknDnjxwVqwxiY4zhDshJMMgTL66qMbopRXZ3fCqfAciT5YboYBd1",
  "key18": "2k9sKyyAfKhBSMcm1teaf5KV54XbZxZTFQ7Nna4Nkp4EXK54b9W2YDi1aDNyR4SMkmRweieuzrkyvzcbQJ49UtsD",
  "key19": "3keGdpgPLWyx1BRvGZode41cGBNSdc5NWWuybW8Ni94y3d99dGzHjwDybfFr2iqUuYjC69KPbThnLU7TH1ZxX2Aa",
  "key20": "2FK5w2CbaRHDcM9kh4SCRYbkQxKxNVYmZW7kr4MZF5rwmRUAiYL9SHgh2qcyutMeN9nED2KjvuQjmbyakggT7ppH",
  "key21": "3xdiY1d8WheZb3yCowYkTBX2QYozQz4Req129oGgvBGt2D49RmHge1ptFaFsQDY5Jt4xBKbAxnn1xwUwi6wqzHEK",
  "key22": "zwCLG9jeo9xEnppji71g5g3eHY6oqg9eAhFgJATtg6DQSwdnojj48cJKmg2F9UCFqedYFy2qRYuukqYsu8wTkCf",
  "key23": "1fMpcorKNxsDgVxwCbd7B8eRCF2bYV5x54oGCYpb9y5reEYVRmPhhpSbfkaMkz9QV2NJks9JnSYhpRYAsV3a9ZR",
  "key24": "5kHEuDgiHMBRrZVnPH6jEV7Q2ojuPTrkUNy8ASexbHmEXto3awwSj65rb3KSWcALFKyzEWz9qtJKV6xEL8S2VQCC",
  "key25": "4imPBVF1kJ5m5UHKj7gjpVXj63ufTB86QUE9FfXGsWXJA5ECUbB6rVjWiYXCKof4bSMiJKp9zrtg6CKcaZLmuWgY",
  "key26": "4GJgHuxpigRgpwEWXNs9h5ovTfu68aun96gTB1nFrzZqwFB3V5qpTGmPwyc3FsVmYokENGxaME5CgTJAL7q3r3HW",
  "key27": "3LZe9BWZL8LNcfDotQcQwkcjwAPw7WwYiszzPdp2QzkVKfLnUKfa6PErKkSbX8dovmgVj2REu1gTDuNA7bLdpwyi",
  "key28": "2y2vXjtpq1SsbhkkSB6xhkBeQLYwcKiZPkZ4fjiicwpfo5xSzDGei7pLPNa1zwMAoqr9hpjNrhUupwmPjwpXhYdK",
  "key29": "LhVqQsaQh6RTQ4uXX1hX8cPWhTyJ4CiKbMhzykxoXSGTvJUcg3CfV2EidepUb12G3du4YzDQZD2c7wesFZr3aQW",
  "key30": "3o3Loem4UdyohsvJSci2Cwzc9oBRYgrw29BbP86u8z1ZgBdumkwErsw24XKV7n1Ch5y5T3xULwdeKcoY5v7jWcoy",
  "key31": "sagxGGVBW8dNW579XdKtNSXDHxRa8WrWQ7syqpfHA8ia2RHuU3FPnPpDCiiQBKxaKa3C5YCpDKtq2qsg8UY1PBx",
  "key32": "5AQgyPpGwmanE2FAQrAzFBmrfvmJaNPujf5UgTzsu6yjTqdNDKWTyB2dpVsY69dxXDAH2FgRX7TnULTjHuovDyFF"
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
