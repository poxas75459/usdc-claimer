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
    "5usG825VhDCJgpEmXigTH7ozaz2x7pWSKzX9V5V1n4X1fcExagL7bhBuZMBFckjWVRM12KGpG3C1BE67fuavofLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gHow6LCUaPQX4Qt2k1FvYsdoAjRWJuaE2kfm92HsFNgArQUzMVT7gvtbZhAVWR5NvfMZHpMAkNCKnS5mtLshHQR",
  "key1": "nQbGt7KJkGVsHp9NYhAHimwmcasNjnZsEQ8gViDgoLBj9NHJdfKecQdwm5kWQNoBYd8nxrBNycWiyuG2sz8rNVF",
  "key2": "58mXikNRjSVmAe7rffG2tRar6U2kUJ8mDQ5AP7vkzL8TpZLj26MUDqwYPPnoZuQUMw3d7RsLrJFDv9JoNunjwG8Q",
  "key3": "F3mKgobMfZqi2PhJRPXUh9PVvmeqL1tMde9NuvA4iZJEJ3UtBscHcq9s1dxKYFh3S7Ci3hLjLk8SkmTrKL4Xvh7",
  "key4": "Lm9Rj2nN2hVR6HDzzFys5dR5ARxUZeBZPf33szd2gRH8wGmyV8auCkTUau5ACBYwGE826z8Lao7S6MnsdzfA1qe",
  "key5": "2wh6g8SPVCCoMjawmBsRtbUnmBBEKEzGDkqja2ZTVxSqiXUShkpfM9sc6F2n6LXQ9Rudut4rAKtC64HjfMMhZWb4",
  "key6": "2CdqH2x2HxE3Hg9DaPGF7vW3bD6J6aBGSDnktPX6iZmTwN4FD4zgBEsHEeFsmELuRNowUAH47PDefpcdv7LpkdnG",
  "key7": "3H3MYBACwcSGWgw26tPuE89rR6cdr4jbUBnym4KvHLHn3yfA6U6EeCUsiJHS5nJSYWyuRkpgM5AUKEPhN4JvWngm",
  "key8": "ohAo8sbmHA3TgZs1epuahhXAxqFwHrPGX2pfprNBWtjTjwnhBRruEfkWffThLuUGS98NPGiP7kV5sPEFiRHKYbq",
  "key9": "5iL43BrWroG9M6YU3tKAviiMBioK77udbbACunvEDFgwUEboHLuYJmFEQ6C1LxUQjAy7rFxWqBEeza7FJUr36Pd",
  "key10": "5EQpUpYKiVatHFCWKtyFkQM8SJShJCqRrgkGWCvMi7FxfAzxfQRrd9LgH9ePo3y3edtDbBqJFGVcjyqZRsn6zbus",
  "key11": "5dVAo1eFvC4JcNH7BHYQhfYzu3iCamKwJhraNt3ZJFoMpVozn1SmDf4unWce1Wb4uLguKCjGwpdBRvS4tUCATwPJ",
  "key12": "65wpVSVFj1mtdA2TM9RyAVPdS8L8Ga6CiAMsoNrsBNyGotbZb4zYg49vfHuwax4PAoG61RdQNeB98GpsaggSzmyX",
  "key13": "2mLWHBkkt58fhisgHV1PMf8gwGESNtzmWhBU9crFEcJE936CnXbr7JRB3KTfdwEtZk4sN8LLNCqov4htWc5UhbGA",
  "key14": "4gQmZ3NkKQhmBvBqTHwvNCi1sHvUSsZhDV1DxfnR14DU1qNC5n3X3BzmbEEqfgKGiAbS8n8Ld9fcQEDRCpc1SYYz",
  "key15": "2Yv31EZhcZGNnj5uFoykXXxnxJBoSwwaDoFanm414kCYzvNUqvc1FTdjCsxa9yb8xKwyerJnf7dZwxw7YLRbJJAg",
  "key16": "5MrFonNQp9kmxaCQCRf2tzmPGPPjNQYk1Ks2ittVU1MBnEQjaMV4oq1sj98g8xLe5Zya6xRJzAgCWuAYax96RZAv",
  "key17": "4x15m2X3gk5JLRBqndVug8yYjWU3RKHEoYtfhwtyZVbdbY3io8T7VjRbYph7RHGkH4WSnHuYgQijHZKBwoV74WNK",
  "key18": "4969LoWus5NRjEcvYXgQiHUwWczykyTbwzNN88xZZNcxFfe8ZJk94FZuQ1cSj5NKN2DqwzzDdxcwDdk9XBSuwsie",
  "key19": "78JKDE2mp9rHBeA6xvrjpwLXpkjf3j6ZvW9Y8aGZj25FAZsZiFtd6a4Y1JJ5g2RsdYxfXd4tUunaB5cbT1XcLcz",
  "key20": "4Yd6qU1eQxqnQr24mEBnLrJRRup9na42nUjDYSNUzxZrra41WcE14dXVGvmZwbPhLJPJig62WfWEHyeWnDgqNPH2",
  "key21": "4EtkGV3HgkS65Ag3ZCCT7bp2jAwuEMHSkRjb3SghiDHRxAytnpu7TfzbBmE2cNa2ZxtWsp8J6KkrC8h4oi7otJfx",
  "key22": "3svxGor1y92NhVNdtWNYovEoAXzUpqamtofxBkAT716tqZLbNkrPDug71Do521sEZHuR5YbkVBA6WXHkigWc3wzy",
  "key23": "3DU1pYx3aejzZWaFDA21eFYXPZmgwjbHj8NZg2Lmzrx787c2grgwUKFQ9DEJW529TrNtwKWSdBmwFWdMAwp6BtTX",
  "key24": "esEPb8MJxuLvEQ1ZuCUshVpBrsW51aCN4dux3UXtYKVEt4X3Rsx91v1pwV39dQcgES1QYNgHrf34XLnS2cu8NjN",
  "key25": "8xb2uPr6siLCdEKCzTjBsKchCe8gFY4NmxUrV9HPTnenYAXCvQPhCoAK8dkmAto2vraWFbCQCmxEPDgNEiRt3Y1",
  "key26": "3sYDpNLFRuhwumu5XrNJtQy7kjvkJ5StXSmkAEZVGN3kF1e5Fcjx1LuSKShJ4vYbjh629Tgni9h9Ja255SCXHCX8",
  "key27": "4ktQmvLrsFWmpKVXStiyJzZFKayoXJPnxLdg4yco6b8sZADNRHhN2nhZTSoSgFLJUdmzN2Fggu32bFXURKpPAfRz",
  "key28": "zHt9TvbV9TMod52aA2hfMrDdxxktHncTZgXsygupdWATUKjaMk42mmMzKhTYu4MWpdRGH5QQoWQ41iTCvuEkApz",
  "key29": "5tbkWb4PegXsZ6T6BcUAxQRpC9nS2tJ69McFcAoSQJcsqNbXTBobox1i8Js8Hm876mnGVY6UsGPBXPRM2VkkbBx9",
  "key30": "5asfVtyHYyLF8r3oULLcnjEpC6WD26VKp2Ad9xaUicgv4Z7f55gbvqcEF2h428EF2TXc49XjkQNAvKWteNAkJfNY",
  "key31": "2YedgXyCshp63doLoWgjcuvgywJmf8VKVuQPpCrmgMDSC4u9X2W8TauBrX4hhkHepUjgx5yiQiQXFHTGX5HX6tbK",
  "key32": "4cnX3wzXkjovxQA72YJuUkz7Q9ateKvZVZg2nyemY1EEf3x6wBdQYSQniUYLnttDrqMjw3k38Md6W6dJ4Xzm9Mao",
  "key33": "5gUBgxf46VzbdNikZ8wPBCWEbWJFPy5VHzabQoidEgdkPA2L45GFPxsHGidvJgfDyQoi8n8bG8Hu2beTwBayjQ2u",
  "key34": "4pUNEouSM5KhexJW3FvSsQWLdsXSKwE1rWYQ2DNYFWRxqY5FeTKDrSLvXe1jAaL9aTURLHLD2tSsYxzhBNvCQ6yn",
  "key35": "21YxyVvVua2Xxwu3K6oAD8JAZWKLfHYh4WGbMMVSzXjMbRH2FTKnxP4MVbSYcmNQCPuD4PeCHmy6QtTTGt1DBN93",
  "key36": "gEn943ArwmcP4GTMwpmARYUeJK67oHBK4izZY4rPbx5jExi9hWC3PowrH6ANsdTzsusfVG1gJ9rxBmF7ihzW1RW",
  "key37": "2RPHbpbUijTPSeCoBk5PMEztUgChSuDjqTyFzibykuARimKqWrKV5uGGMHhcTxypahdNJt3drJXuW7PYWYWtVMDZ",
  "key38": "B2UxAvkHkSWXrGzE3Vv9LSxb6VrtD2P6e4KFcHwZ6WWSR79gEQTpP8LvKkRVzzhgUAXm9drmcTewhdDGq57pqCh",
  "key39": "39DnGRK9zghJGKTV65nPDkc9ALr23DHYAmuRzDAzzwLfdERVDRvxzdQYiVzmtzAH22VLrW7HSJqdstzy7DA22frQ",
  "key40": "3Wc1EhgnQ1VDKypo3BPzMpVjmW3cncmzhCLBYjwBHBjgxQDUP9kHgFRA1TzVD1KMxSJxKEfMVfW2eqHJcjPDAm13",
  "key41": "4acSCJTr2FjKLWnUcBxss3BmzD1XkMVDEw91aK7nMDnUPUTYuLJc783V8KURSY411eYEupzeLxoGUKYHvzKWPNdw",
  "key42": "5pikuC4ZNZ546xnDwiUbnD2hUeARMP91dCeSFT7CWVxdjkMP6dqde59oLWRq4PHx7gNbTekqWaBDiwXsDfkTcRAD",
  "key43": "4M413h7jfV7k1TjLbHteUB3UpC5bnMcLf9RYFNjeSYo4SXpH1bp6BoWRkDJBqFwuhymdyYznVmbfLuo5h2ULUmrz",
  "key44": "4JYohC9ywuhbvhUWEdE7dozdgHEBJKra5pY7XnNgcPSbYTyr4NWQ8nYAc8VnnnfbQpe3o7974XBmbyV43Wo7HZRL",
  "key45": "28xbb4DQvVMCYAegiLPzwguqvH8yxtnzbfM7wsPpkWiPm6UQsTkMXk55GqtgPzSuwAjCZEWAQzseftsy1csTrTZ3",
  "key46": "5knNTqZSYozihc3HcKvb8oU4TeAiZN2yJ5wzRwzMWyPFmQRh7RM9ajPKEipfRfCAaRRGETjifFq1sn6ai78A42GR"
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
