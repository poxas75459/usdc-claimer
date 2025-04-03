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
    "3v1Wy8a1JjSEUrrgs6qQY737QAMo57kz7C9x29dZbxAjzdMxpv7wHE1Lp5HyVndQHYTvs6q3fabrhd6q8Mk9fmaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTEtM8gYGVxkaCDrXmKza8Qkeb7ymfSfGsdNuPEnEDA8sCK4EpsZptMKrVwvvaNgcQShseuvheJ8XnttQmfZcEe",
  "key1": "wS6YKm5FmAfpyHbtEi48TnzQubohX4foRoRQtN4rPKEkfG2J5cp91cLnty6dJ6y2538q4srXvafenTt3GeK9Msn",
  "key2": "5vKPfuH6BMRz31VWedFrWj4TyD3D1DCCaD1yT4zfhgsSiLu7xnr2VPcy5gqfCGCjMyEjxBmptfxpbeqrX15kqKUn",
  "key3": "452ZBcmTzTGHCbASHxu8NAJ8kXusCoVWg6dsbdB9A6giNCd7muzUaXBVDY13LDGwZbtUmQGYGuJRFr9qrHNrEfwh",
  "key4": "4Nwxziaiz3nm2caPjVV4sJw8hMof8nttA9q5ButY24BwUkbF6ZiJMs6tVKakBGYYKZLyyTdXK1dhruY6emozyLCS",
  "key5": "5kbqkyd8a5m2AVens6KSZV5PRnKdtm7oW5Vdrp8nzGzTmvJPnRJvLAtDaJNza4nKi31AJsmj9N9zC8Xh6XQH189n",
  "key6": "4NA8a4mNKCaFJoGAG2wHQN6SGFj1pciQWXhN41AEFDgpqi4eEkeRavG8GZsnzNLW7NkcbS1NmyMANuoCRTAjWuDN",
  "key7": "4FS95EjuRRqNGH9Qq2X38WaDjHvbdnyFQ2EMcWcbum4o9VSWdC9xRfXV4L3jy2WvYynkSHikiypkN4ciPCxH4jRD",
  "key8": "2bF9ziDK7zbBdZdq7nwRs5zbs6UZMHHZ37bV4ZcPH8o7jrZAZ4d2Yj6RHr479ZgGo7cTtF9f59B49GcaEuL6728c",
  "key9": "2KcTr1PdmYtJXRmoLfN5yy999FkSBtad57pKsWuQ6iwnivdkneMs5ZF3iw8swRbiFS1Nowadpwnwmt5gbMVpH4QJ",
  "key10": "3hCs5vCXXSqMtCWd2km6dwNCbL4zk7gB23Y7KtVAhQa2QgpcTxHDAhiyQcpm6jKPShKavWxMqEvgK8VNdU1RYgvP",
  "key11": "5csCDXQRqpALgaK1miGnsqmJWC5xKd6xrjngqARDEgEx9Bgi4UaMteUtTyu5PUy6996dPL4eeooR7aeE8393nvGM",
  "key12": "D6BaA1eMiMBs4wqAREKbUTT5mSUA1FeP7MaBTxEv5o3kavaqz1ngsTKCL4z2VC3wZMA2LqLb4rxZb2ST6WpSFtZ",
  "key13": "4Q9eapkecTXQuf5RTPs7Mf3TdpQAyRtACwYzaNa4HV5DGwpLkXCXysEeULKd7aom1JNFGQcq6WGLDrp7zsAVkMpR",
  "key14": "4hSMkscEZEKn5QpthmA8KLa7TpcPb2QW89px3AcTiFvxtqck95PVQUrMxRNVpMMs8J8YnzLZtfE3JNHmKiUvadKL",
  "key15": "mMmzrJ1eTjUJvU9fAvUwAybbThSbp37KaXPDV5pnFEstWWDVmZhqx9DJgizX7NgNsLoLXyfM24sqoCzCA3Nzsrz",
  "key16": "3nkacJrzpBrGDrpi38tZ2Z8sVannEdsT9ymzdn81MiGSNXpm3JTaSRWBfbnJAyiZwsjV6wwmCQHcZuExovsJVabN",
  "key17": "2JKm1y1GXna9CT5swBFkhMUgbCrVyYUmpAEdR3RBRUgahJR3uCFWVekxMCC87KDyfZVDoUD1HrVcNxvgeLB23Ee",
  "key18": "5uPLvo1bkq4SPf2YS35PbvCy2CEu3mrQa2MxDR2gP1zabWQBGbT8dUr6gadC99bEjZiKSF76StQESS6oQn9prFDz",
  "key19": "56unzQ3BBTeECq25YtN48VyhYhtXxb7hJ6SFhWaPzLHTor5ijuL8KTMGD4VarB5EhHfcKB4eMA41cYaRXT7d1cwb",
  "key20": "vWMUMNBD3BZHuSX24ypyxC8KZvXsekrYFiUDXMmRYzfnndCrwtkSyWiDJeJVxbvJWQAjJ38SeyEueFjhpfesU1D",
  "key21": "4Yiqt3Hp1fzTHZSW5P5VaD6U7TB126BL9WDKxv2aZcGHNCcJVL8pffKpKGkVJsvw8U7JHwKf9kBhw6SuLvzXABfp",
  "key22": "423XxLn9XMEArzpM7DeafMbnLDqjCetiGe8Eqgm1kgChi93mDzJ17YAb8E1ZG9XVJdHwAq5fDF54paiLmdr6WsGk",
  "key23": "2zA1Tbp9trwxnbPSYZ2MZUi4TpZjttQqFveJjgUDtKMqcC8K26hiv5sLHAHVL6SBYuJMEr8By5JBBQqZWjmxVM63",
  "key24": "4kZGi69MWNcndbZWWorRK9EUraf7CQr4QQVkgaBen9NbyCqT3cyqgmTwmSbVhd7B9DtJWqQ9qajYBiEXWD227qhX",
  "key25": "2FYUvEDRXC4xdgsXWkALSvrZqGAzwaVpWVhZW3LBjaw35ZpcDSxMnntynszkGi9wbo8a3GSwUG2b6DmKQrTTE2Hr",
  "key26": "3AEPnkyt4BybwpCy8QxfAyYLP7L55wi6S4sSZ3uWoxEjpGSvqTWmq7efAcrZzB9SeUwzytwrfpQavq9bpF7J5TU5",
  "key27": "3r5ob6yhsjiqqpW3DwZt7xu3nCz6fN7M4z5yupy6UbTLMxfi34Qtpk3LRAhuq6BzjvKjzFaZqL6iN1MZqJEHdiGh",
  "key28": "66tyXtLbxnp5Dspk5hNRGEPnhbCmqPmGpVhPxSkQaVXdKG4exV5EPeTXM5AvN7SEs1T5TuvdqwSBeLasko4vWYzg",
  "key29": "5C2ni2sJKXBHAb3HPVXHhENyHPNLsq3aYTyFChPKJ1RtDkemZprimL53uBwHTp9sXuGBDGVndPChbSCs7YuzYZHs",
  "key30": "5jtFVGnCspTZzHrmnyRs8toMAXt3V3MoHdsA6fK6rHaADu4hETt4ir2mAncPwgRpLDJQzdC7TVhu96CoWAadeNGZ",
  "key31": "61P7a78efrmHFkvnRFfSxL319JPiUaueNRivq16V5b9hKrtkg7MWohkAAtaigKVqjSEqiBjzeq2uCsNb8XSUsaix"
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
