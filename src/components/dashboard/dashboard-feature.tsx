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
    "3mzNb5mjySJCaxDTrgipJ8cQWdque7M3xC2zioFX3wzCtuprB9ws1Muexdxm8i559g9qz7rtEebbEc74QtZWdLtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZmxjVNw1Cy7AQg7yQDf7xz3gV6vuhtuvPEYP4Kwm5LwxMEEXmt2iakGmL1AhcvAGdAzVbtUphX21kVqPCp1CMm9",
  "key1": "51mtdRxYi9ud1YC1Ve5ARo7saoG4HzVTNYJK1BdsGyjRCTTaNZob9bvfX1uAFWPeS7zR9QQhXqitnREE865KKpB6",
  "key2": "61FUcyQ95fKAVG48syEzfkdCF8RgfbTh7Fpzmsc5pvLRJGM6W9XP1ua2W35tUCE9JdXqJkaHADoKHsXmEX9EbkYq",
  "key3": "49aKhDLR9dsW33qxf2AicuwQybHJEh5fLeWdoSfsb1MKQPp371fYWZ5nS4RTxmwVarrJH7aWGRxHWABdpTvDjEZF",
  "key4": "3kNU5N4KqDDQFJXoGH5TtxmLRGcmkG8hDpXb1AsXkRq4ZufD4dafk6PmhN1mLJTbFj7rgdPtJZEJP8taeTN3gL2W",
  "key5": "36YgGWLMpc3Chpfj9zowFz16UVxWQ746R7kfPXTcB3PpgwmiS2ZYoWDDjKaBKRLgVViTVQYdtWjWL4SzdqFhaHHE",
  "key6": "5wEGB1CEDzV32foWFL4FZjDWaFit1DtYkhCn1dyGBJxghSSfXHBdrGtXSMeZx3fy2BAGzAFHiHpDZpbDVZUJmNCB",
  "key7": "28jAdJun4UjbC7snKeUAgNm59MPu53gzZSQkVDW358bkWPqrb6uuesAujdF3JzZvrkf1qrd6vwZrYkBXyGnM8Ysp",
  "key8": "4fj79u4QVpMWRj7F4tsx6Czzkc2EiNmkHSQEDhF6ewrQTnFP1GdMaYxXojWhxC5s89opky97f8x36ZwDzihTqDVD",
  "key9": "3TWDhQYoevN5jbjM639QLX3d9X332yyC3TiDf7Zg8dg1b3Pc166PQVU66pKY2gHbuUDZHVmTFn7bg2MkbjkRoHPE",
  "key10": "4zbxiYeXUJKteUX1u9T92SWpZjEXJGfu3GEAtQRnibUsQppv4FhBAbAb1zg3MzGtkPFW8h8W7CMdjJ5dygy3pkRH",
  "key11": "2zeLrLGjwhFgAEBPPDSiAgvmErDmvQi7ZoiomxWgyyh4imkLWCpKS8LN8MXdELGXYEVKoCRQHYdWUdEPkWMjBAi9",
  "key12": "25tBDk8cHRRz1hKNTv3ho7wDmxWRMwfAnvzPnzY5LVdx9BikzntgQNNJNYBGToGScZYLdq8oECLNLHhb1SqhXGQh",
  "key13": "Prb3T3q3teY5f2qNbAxWLwby8EGNBsniwvznbFvAww6DLuY6qmmDVAaXc91jFZUDHqLGdNkxCZJ2oLbUZU5qaqi",
  "key14": "tiKkafcHD53etbknj4qQs2FyrhEaT2eTETaVjLxZ1TvuGz9bQXBiJZPaSu8hybKyPABUEsF3S6sBTntdnrCxnz2",
  "key15": "4y33rtBAhJAzWaMsZAehi2inZ3YsbLmVwdpNzGxdaBiAji9mkGzmeLmQdYVXBvRuvjF7JUAxm24PBA2nux87AMDY",
  "key16": "56A61YfoX6JqwhuMzP9Ss3gcmnaKsRKTgvpzZLRQ9n168eWWFo6tH7ZaY7TJNQnQUeXMRFUxYZ7jPs6u9cZ5456x",
  "key17": "Rsj34kPBQPKUCJ7hDvgkro9NyFHqsaDQYVa3JYZ6TyqzZAtvw7WB7gZKyGEgSFfHCKnML9REmmrGVw5RzGxuQgZ",
  "key18": "3zX62dyKZPepkNiYp3vv4Q55zZbqNnWUWmNnD8jy2gmg83D6hn2y16YRDXsvQRnX9k3rTcUVVrvyx4MQ2KMbmuvK",
  "key19": "J7Bedn64q6f13AdbtFifc65AWmfnbGBz6Ms1jvpM1HmG7a1ZAzn2PKpnMCwmRNWDZj9AZ6v8kgKuVuszHQC6E4n",
  "key20": "67W83LFvQJ3kNQW9nMSjACkGRWQUenfmC7Jn8QY8m9e7CysEHfVn5Kj9KcyaroTuHcKdJYiTrwS7eJw8hrjEyLMu",
  "key21": "3rZQNkQsZDDvbpG9FhgnPittvLfwWaYRpstCa1Vc2wo7ZkaxPRwV7vWgGdDHiFdF6NPjNA6dbFgymAYF6khPxoCW",
  "key22": "4yyEZZbaFbYGvY5TNmaYBjG7YTtc7hUKpmtTajptYJeUeDxhkWLxWirFrzmAfJz4DPqfdFrhUWvR6tuYVZXMTjsZ",
  "key23": "4zGEW9PWJokcHDeJYDT8zv2Z3qai28jDUZRyztnSFDiNum8TmxG3x9LQsQuVWVney8ur7SPrfqsQrVLyaqADuYQS",
  "key24": "4sqqBTSD54njp2ULGgfTdewvNHKDVkwmvQTp9643G7P6hg9DoSrrgFPQJHixkakHsnuSrJw5WbsaaPMtJwLBLanC",
  "key25": "CAw2RfSs76qEvdYwKdCgrrsEngRetMfKidBMD3g64RLoP9f6Ktt2s6268qKbTBSqC82etsrShSy9v1nMCyGGjLb",
  "key26": "5dt46SCx72QryxwhNSmYarooqbq8QkaNe1YHxJkaJeNtJNBHNRj3ZeboxQs8EsMrRMBPSP3pseQXLbiR74QjgXxQ",
  "key27": "nnha6b7XxKxX4xBwHNuXLJ5du2fGkNtqvZWqzT7FfrmpHQtLU72zKx5SyGLBj6EzxDmYfMgXytYrLwswDjmUST4",
  "key28": "4D4Sowis58AJbAUnQATaDcy4S37GMXmQ5cBvZoHiZeayLXqAZBcPoVvtPPswZmY8s1uachy8xRDJ8cNJGiT3empE",
  "key29": "5DCTYES2XEmu5dyfhqU2K9vUqUj1KjAd1FmYzBntEBcEWvh5QbmiVWrpPQMogCZY6nY9HH4C3gs61StCqGsWRkWS",
  "key30": "atGqKkL7N4VmtzzfGdwuQRPmWLruNwyYdTsgdZfJ9JpUL9nCkuST2JLRyeqL3D1tY2Ptq9y2gsT5tdSsxdwmr1Z",
  "key31": "5u4yLRMZ8JBCum6eC9gEp3rSdv71VWUkqa3hgTtbuJ5cgqfQQretbTijzF4drdz7kCWsPCMdJemscM1LC7mZerCj",
  "key32": "2XAbaauaoEtVDz5n5UWNZu86muntt9pav6UssmZhSm2fKaXXiPZKUiTWrXUv3QFEchdLPykunegSZXEHL342Ho3N",
  "key33": "2wd19yvT4TK8FodTt39nmDi7DZGjCUjDXrFi97Jwxy5tust7GdT6Eg4m5dMXvSizJ566HwqmwwcfhihLuPisuN1q",
  "key34": "2EsbCrxQdwaD9kg9LFakAyQtwP3YRBZBnbdgokSL4NuSdq6A4fNVVPyKSzeL6wXu6yF7dXHvBNayQExNEAxs5rWV",
  "key35": "2MD7JRMgZ8vWSZffTXXcqpYki2js45UN6jYyhqH1YcjeaDjvMdKnDGhufKRpmpVvYhdjsnfhSckHkGkN6dQtCyd2",
  "key36": "vCeVKEef8ZbpdEvmeHDmZrDdTLMRgY58xXbro3BnpCSTss9WnZ7Kasp4WiTQ1ttjobZeaVco8CmkpcTA7YVdgXH"
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
