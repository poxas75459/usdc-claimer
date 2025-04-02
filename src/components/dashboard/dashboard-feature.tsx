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
    "2qN7Ufp55xiqeijWub3bEzRPsSaxvXaFr5mqq9scPTt8wpa32skbzaGf2fPovyswo4Js7XPdaF5Y6GPwhgPinUiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEhj48SW3ahFxscnmsAYPzDNBYyLLJzqZH4bJ4dm9nJUsffpDRhaBMcG7gLcCGNZ349FNZm2p3abE2r9P1xZgEH",
  "key1": "4jK4524wQzbFEiq842XffkvQAj9Eq3t5nkA9Q1D8fBxEsZvnkyh6xnjqSxdHnjjJdtgKTkARazjHXrRrRTswgwRE",
  "key2": "7C3n6KEdJTodpA25xiEAeoZaYivhXK4cHSJUx9FyRncTC4JgtC8K5QNtPYKAD5Ac9Q45nYUcGaqZS6FhJZCLcxT",
  "key3": "2RuyRwLa4ZwD4FGFRSZPLtNGmyxR7sSiM8vbXG4WNr8sCwaaLujVqK2GhjnQrYV8v31uKowMVW7Ao292A6WvtbZa",
  "key4": "5JbFDn398a3nbS8efCYAgYCCDLYADn7kK1qsvFyYir6byMb7YEWSFMeQWGPz5gGUbY2BqHF9M1N7RNzyFRTSK7rk",
  "key5": "3YhL2xqHzZPcs7AsCNDWotAntZ4sK6njmaZkckBAomPGicaMvKjLf13hZW38DD7eEYVuvoNxv2QhB8BjNpiFGSRi",
  "key6": "34Yp6rN8nKdBttLqw81SLSgWJr6soqhBwjRFFK8rP6FqKVSb8PL6YLPk7crfTmdwRWAFsxYdVPXC6qtJsaUqvVwV",
  "key7": "4ap5YaasreNLJJXu5pQ93cnvmiLbER6AgUSHTyP8pccMkALVMR1n5zimwUR8jKgCaQXrBmq6SdkNcdYu5mpSPQU7",
  "key8": "2UWCxxttWC2sh1NE5SiCwci7Py4pqq84T9DkQQiL3TuLaASZNDaqERtfDMBmgwueUc8TiSZiNryPFDFDxbSxv2Ky",
  "key9": "49NWoWw9ijS1L3A5a7fSmgqynHr7JQxkbeouVdCUUAzAQyk2eJ6nG6jbwoaxq3Mga7BdpM2ZoGcsG8XXz19XUo2u",
  "key10": "4vsDubmZd1kS8eHEFKGCoqGM7BpZDuYTFKpEjtAsgvqbGUcirejDCsenkXVZDiduXgQhU2jVdb53eUzwjKw3AgB1",
  "key11": "5Kx8Bc7d6qfefoYaxgoo1cFcxfiXK4XxgucrCd1uSg32zdukkiG7AzPHMhMZMTStRpRJjoxfdHMicM3gW2K3R42C",
  "key12": "r6g5s8MAnr1K9gcZdiByhXiboyCJcrA8PU6XoRUAr9xRCCBbBhsN3tfK3oAizPyVPseDwine28YRCiCJGgz1hHH",
  "key13": "5ucsm4ZwqRNPP13dvU6UUyWKBGDCgwrxfeWj1SaSziFq8t9VzbaWXjZgQqxkUuRdVgivetkNuRyHeoDzXHogvTY2",
  "key14": "3oLvxBR6Bi8NnMKWVW2mNCAjptVoitjAsm26t5PRqZmCjjDe4iYyNsVJDvexHFFPpYF8neyYwn1D1HSj24Rwwko2",
  "key15": "5c3LhqV7XiPGvd9XtbxSxuJaiyD3e7SPePwg4ogwJ4nLJs4WJSTeYZz7nqPyex8azbTyWTyk31opzoPZM5zJnwyK",
  "key16": "djCHXxHfWy1x4WfSiPCLjmKRggyTiqHw2xzs9BhEzHk9gu5pCCKxGiHPuUFZMq9k3whixoSWAe7Cu2LshJusSoh",
  "key17": "4NxLR8v9JYGgKDH9ub17gLF7MigrXoGgKeX1VXGLKkw7HccAKxRa17hN8QzXaiwd3BY7kNw96otuPrGZfadCzakx",
  "key18": "4b7UDT2JLTi3ob6xmimZpm9Q65zwDbLRCsY2wmX4eG1jbxFSp5NQcRq67huxMK6pGyKKSA3CuhxMmwzeckkWxgHx",
  "key19": "5KtJCQrrf2gsrEJ86EFNypFvLrEaphRe9G2Gh6vGf2qt5vkU8N6a27j3JGzqnRx7r6GzaanRhZGwuwZdvu76cMvk",
  "key20": "P28XT7Wun6z7yMo7kS3Wqmv5bHttC94E1PZ7iDj4cRSnxnTWeaShP74R3oKwAudHin6TGYFJR3Ttk3QnDxL2V83",
  "key21": "32dEaTghQxFLBa8AeRy6wnMq8bRNZuY3efxUo2ec2kdUHkRp4TBNbW4owCuRw4tBqcsN6xR2efnEZqkUjkemMd2u",
  "key22": "5GCiBMCmHB9CvNA2KLcPSndZjFhdHSKP8R4Xe2fX4Zn5Y1qKeYoHBsdSA6pU1sMLT4DNmfatbPL5jxixhBHpAynp",
  "key23": "5oArQRmFwGrkXMRWdixN9Y7mLxAa1Z87xmAGPHp8vP8PuStiCxuVrcdUQoRw83dWYr7hfXe4phopX7vrApF8cRAR",
  "key24": "PCQaFPwEQVbKfXhgFXM58eYnq5pE3fpuYkTrg1SF4C7ecvtWUoKX6k3fcYGpHFR1rrJLwaFYoKzu1iHgKhiQNau",
  "key25": "494DQ5EvL5oDJCEhzbtmr545rJ7X1AyHh1bQfQDjjEzfX4MetXZ1XuPKHUsHxswq5c8goDr94KgYpNNYDY9v2uDb",
  "key26": "4Z8A9eEEzRpnXxkusoLqt92PUhgzBB9STXA3MFTJRXSnuXDUq75EQTgnk2Zo9YhxvzUvWvwXV21DPFXnzahwa27H",
  "key27": "46u8oARCN7G9E9ihe8cAi47Z849VBjfWD5JrXoz8jg8tPsXAq1eD3QUxXRMXKqVdGUYwg1USPiBTabNaqDwvgoPK",
  "key28": "2DLKZPsR7LGTQ9tEYkou6VcQmHbL6kDJXLoN3bLJbqkuiw7hcBxH4RyqQ5hdJNqZjbZF4coiGWh7M8L3Fsk215Rh",
  "key29": "4cRnzJ29iRnx4RL3MU4xnFAx9G24V5um1mr4Y1n9yrazSWzfcM8pFykBaWP9hLjCPTyPJnp78QUqPYSu4omKSwvv",
  "key30": "5MdM8rrdumFqczA717jMUepbrWzhAG7aA6JcZRtduUGYqySjJj6Umce3DjLFssHTxz1FNjRpHDiPX3KMiRJKsNnw",
  "key31": "2KsLkUzXefmFCkq6JdksfNzycHicB3GvW7Xkz5t4DVN1kHYoaNpDd9YP1KtUMNokn5VpdwmjTVSF9HHQ4Quj5paV",
  "key32": "258Rw1K35e6ncAEP8T5REqGpdQRsPUeLxaobuyGJ2jDiXQA6CbpD8b7oHkFLcPPBQuKB9wvtUm3WzytGBFWzKD5c",
  "key33": "65tiizLhGifaayUM7UMyGhJ9FhvJ9A7o58947KXBYmwGsMNtQxcd4CqrRMKRqAuMrKr9xp1W3Ccjy22PssdvXvgw",
  "key34": "3NG6zyHfRK82va1qLsuN7Wf8snKxQ5hid8LHHHXEAY2ocR8PaiRN8Bm4BPZgvgewyUgvJxkUCZzauUjRCVHa3gT1",
  "key35": "CtX6nbNW6wt8WtZyRY65peWachj4WuUq4Def8ysD1VwMa1YcYpsFdLMQkT9SeQB8JiStzcirJsRkZK9wTxMHDgC",
  "key36": "9CqaReXeFwcv4QVgYKwFjyYa9tDB7oSmrdzvffoG2nVXfUhcKWrsFWvNQr6fgqFx5x1TWmAQDMN9WvcUDxXq13r",
  "key37": "5FS6JvULr1LAjZkk6zV3TkmsUQKBjpV4x4fotnEr72txrbqccT43cRdkP69kU6W34fE86DvfPzwrnW8jU7UqDqHp",
  "key38": "3aAfQKW15N3mQWYt6afegSgB9c4fpV8Av5t18Hus5TAnnPPstf1jjDS6AdsZRg6NeTwcfMubiEdsq23LtdiMTqPG",
  "key39": "uoCKzfee2Tqtnh2PvrwxibtHGJWXqSJ19224J3HBNEV9GbxziMzP5cyvirSuicS2RBcNqjT9EdCe5KuXut4r5Mw",
  "key40": "LVkvFotTG3xiCRhDKb1WYa31UUGUQZWUtgQ4wFSjyTdrwfrCkgib8wTWzJfSC9CugnUJWuRjUxAQ3jGpBZHrrbc",
  "key41": "jZVZryy2kn3p9AztfFr69ucCZzZAd56oRmdLxHpaY2gbGWvnHpQGdfyohhSJfviovVCo9XbnyL1JQreJxJfXjF8",
  "key42": "2DHsiAunc9JPav7uZCnyxcbsDwq34ijFNv7o5qCS1JFxjeZTodK5kChv8hDMupMG9wcrnN8ivPi4oZB9icrxqiwg",
  "key43": "4okX872fR5tcTD4pmWiNqFzS9ZzvrDcrz1Jr4misgUDuCJin5WMCP6mUyPuri9Lm8Sv4mUh2JXoLYfqvUuWqCH2N"
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
