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
    "2R1ZH1umFYdtQehYjqTKuChXp2P7v9cyQFe2mLaczFN8rSHj9Bxd7taCPsX7HwgtXMRW4V9uJksG9xCHQjtczjBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fB7o71qnHEz4Uy89EL7YrkCys762RhayVp1eY9gbyJEtd1xeUYeiEr4QpNGfK6xZSMxEPLjdMGa1oozMQGAtWTy",
  "key1": "55ix2RzKqTS4cS4sW2U2iueh255HhPBGJNARSHmnQFo69cbAVcuJAhqTHfEgjuqTBXe4edxcHT3UgWnv3qQ1cWbK",
  "key2": "41GDrDLwarsJoEvq3gdD9CrK75aVh1gQJgSzmDwd6xbxhm8df1cbMrBuDLeTyL2dqu1cPWraQKPx2LS3RdJ8RP5N",
  "key3": "4vGn6ZBy3uP5uPC2EJr3tdNdtuZR1vZtJhDnivMxuC32LvFUt69b6ivejc53KFPKSsby98gcaGgEgg2UaLcQRSdt",
  "key4": "wgxjPDrL5aFWpUmnM18oC3baCxEqkdE1HshnofiacXqKhHbdcGfc68ijMFVuqGcEtd7KvmUpEFXbiWdRt7xioXD",
  "key5": "aLudgRkShMM9W6znNn9dwxcGoRHBhnaPBAMJshti7i6RZAwsM3XPft9hzjYK1KiLW6Z3MtazD7KkvvjFoNcFcSD",
  "key6": "vPjqX1wWNyy5aMej3KMqdTebfzMXBQD3drkJ6Qf567ABqSevYFFGZWqFR5GrunNbPVSecZDTfxjmVb3sL6RudGt",
  "key7": "5GNwMcqLomkZo83ch4bKKihgs4o9jQvFCpBWXm9WuQYsE3SjXyk6X6MNvj416kQjnwYQhWp8YsJuQa7AJbXsjhL3",
  "key8": "3EnZyF9SaSyQX7y3kNvC7XpXLxSusaXMbv2tSGVMEHd42nKWQPD1Cv93Lc4b9Ybe5DY9TC5CSUT8pHaC9hrqYb4h",
  "key9": "2YCGrJMVyDQwJSbycwkm9omGSkbmLeqvFCQD5sfBkmirpsy3Gq1vsq5pDPAysTSGd3QSjHyNMLEsCBarLZDozHZJ",
  "key10": "yQwizDrQjUZCfMPTomyeXPWX6j65sHR4paEGxgks3ppjkdrim5aAmcQp4CfXXj2acux3hShf7F3DeDYZ1tDWy6T",
  "key11": "2jMj5R6y3TvKiRLBprNvT8wwZ5eZd4Gq35we2HMyWBwjHprjMCVYdDWnXksnbXk4gVDULkvPSsr1mY4UozqcjY4N",
  "key12": "5ScTBxaUd8Dmvvwo14nze2dUrcbNq8p7MM1RgyKFn88rncVaY16PHqp1egygc9K1waBYbZftmiaEMDVfjMkeeRBW",
  "key13": "5i6iA9k4hqTBRVUx5EAsAiEACRwMmQLydkez3ARdYdcAhgag7mdLUZeHvRFNbMzJc42FZWfUnQmXrebqrWW6iHHF",
  "key14": "4vEizumY3B6RpsqXQRaDvdAZCHiHZz7Exr4vNxULArooav77YyCvpYK3QmbetsMn1Nx1f71SRYrPidYV7R444he4",
  "key15": "57NcqwCwG5coBwaeJsnjJoYasRwVd611SGk4i67Mtc4kvo8hUvyz1ZfAwjmBXcazbWJs9Eb6CRSPjozcNBMWB5f4",
  "key16": "4koPPfz5Bs9wN3JbqZJ51DkxqvfuVPkxrhvBRJsEY9DTwrHuKqqSX9VNsTUtZRuHpEVc5PLDNttJufMbPwXAgEjC",
  "key17": "1kSYCiVDJFD7185o7ndSiCbbpnwGvwEhNuTSnBT8zc7iQtfEggZtmQ3MMQCABXRPSaWU25rDiYp5HxRRYWfCz7p",
  "key18": "3WyR2BbsWoqFhciKxzRTF8gFns5iN6tni4dEbK3z1areKpSzZFfabmyG4jG5FZ8ShZzhaM7ATUeF1qiBMfHQtPhV",
  "key19": "39NaNNr5C3TomwF2QiAsH1Zm5hMgkECmckug2x24pJc1RbGa23WDDHeVew6MoWfVPWoaNwxuesC574qFMGiscPcv",
  "key20": "6xLo22hSTTLJYkk9842oguGwKj9TRTm4JrHpdPfcwa77BaKpFxzVHfqq6YhsLB6v4SA7yD13rKuTL9Pu8U6Wj1Q",
  "key21": "4g5r9GFAKLhh8JzbnShGkhhz9kPNka1B49SvWr9cT53WtFsvKbHy2ATNeR8x9MVqoJ2hGbjJyar4jtXeLw3UcP21",
  "key22": "3ajpUwM8FmzE4NZUNVhDGhJvteUhyTiombaTaoeg7PWv3NbtZLx92FnetUdbdJBzA2PLesP5xZXELdvjs4dk7rxc",
  "key23": "5RCcyJv5DsV48vRkXZnhWY7sAD4SKDnrovqjwkDkYqPJ2UXokx5n4cz4e3mPkSFHdEgPoSCDiKmQjPL9sygy2865",
  "key24": "4svudPf4XYQpHUtsnowpmxDVRBJk2d8J3FkqUuRMiajTVZa3jfyLRRyYATp6BJYxMtNYGmJWwh2PREf9pNXdwi1Z",
  "key25": "2TCSyxrCVbyTMYdUkL7cKFVfe91Smjqz7vJV3fnvxH6rFpYotgS1r1Q56fVXiV6mrZSyYGTMr4nQ1bnk7KWa9yFc",
  "key26": "2UmhA5z9UYKi69ymxcZX84Ag9jpHqji4oycUoK5qUGJpxLBcMEduHERNjAN2CkEscVFgpXsmekAibSkNiyQkcNSD",
  "key27": "2Lvuq5i56jTmHFwrGk2t95oizbsvaV3AMpoS8MfeYYwUGc3kZvYdAMdANaNmfgNf7fJNdsEdafKErujGpryEWcYe",
  "key28": "5MXfYYk4b3f9pwerF5zng85YmEKDkpm9QERQapWSfUhYgKGKwsP76NAEz912TfFAXJXgjmHbd6ndbpiyVMKpBXrz",
  "key29": "2M3JcCdWuvWaL3PdiJUfTenHpvKn9yyCQtXgK1iChhMJnrNDv8htaXMaVDYFMFiuQRTM8g8fm8W4VEqpmM95UhRY"
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
