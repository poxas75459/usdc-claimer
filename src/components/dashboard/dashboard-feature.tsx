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
    "5qAYWmYm7hZsyvfdMignTjU1CpUUThzjJtPpZinmsokufYCcQRPknQwEgP9PKQJNBVURrJ3tagFcza2FQhmc3oDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EU5nSRNhocn7ivP2DsmJXr4kUMSrd4YC2uHQsUZqWgrFWfkXBtB5VGUhXKmP2cz986EnR5tmr7Zosu91HKh5RHR",
  "key1": "4A89ywS8NHQerxX8RzTUCN6vYTEdNmy3szbQxBroQvdbUKU5RUskG7kbgEVh3P8ipc7445dNjsmswJoAUvRqoBnc",
  "key2": "5PfnkKocP82zDKfepq4Gmz7ZyAwSbsixNeEas2C6FSHATHTDv6sKHH353DfjttQ2tfLb247KTcqCYPzaCTRVDmT5",
  "key3": "4jDPbpzDoWVXKRk6QCYTAniroYoLsgoBkZ87nkB3bUHxUhKw4L9V2FEdTP1hF2QxhxZXoZj6xoVJdo2ZWph1YCHY",
  "key4": "4E3DLkJhxAKucPoAENa6AReR3LqhnULJotRKM8nh5Bx4Juv9zR7hz8LdgW6AM3iTjVx9sXMjoE6siKcWVrvPcdW4",
  "key5": "w5hBXzSKGsfchMxBey1KMyYgN4ZjHAEPtw8kaK7Zn8pfXXS7xtNXQnoNoin91Byb9VwcciKydNkzjuJrfZaw5EK",
  "key6": "4Asy4fdqLzzG4ZAnLpp5iQqwnHAmxA4jrE25GtnzQUP3xr5QUGDDPBxFKp4dzjh1JPTQQwPBQujo1w7nHFQYj6Vp",
  "key7": "2nHjwwr46M42wvaEAPSwoz4X3rswk5qiBZWmjmgWvbSJqfqQNh8S9mWCeym9oFkGD6nbzHx1DcgqL882kgVwZ6vi",
  "key8": "458V1eJiEjybaP5CYzG2hbzu9zjDtaaShU584gKJTH7trAHkkGwSZGszCj8mJnqMcZP12jvKbJNqrgoHtHopqfwR",
  "key9": "XiaCQmE4W8ksZHhXHeB6B2muwvGoXGsSsLwe3JSi4MzJSPgRXQ1nreLytjCvZtUo7X1uRBFVoQcTrcnz78t2YxL",
  "key10": "5KHtn4Xo261Zupe1K3g4ncgYomnQyVZpqFazpXgQcXi2Q8PVc9mXmirdHuQpPn8jAobZXLWAKcgqdUZFXXtfmSfg",
  "key11": "64iwRtGDhNzcXTwA3yjmLsGJ7NnKGF4cSMsUZmFdt5zh8TcbuVYANMnfiQ1W5Fo3KnVrKQ5mZSHYTCBpakG9SLeY",
  "key12": "3iRWYbvvc9n9DdHVwAxHcnBCdWSCYNkj6cQMYtZajG21Cn8Z8jMUzsTncdErDtyCe8eaaVFCPsTaqH79yy6TWSAE",
  "key13": "4zpXtr274nyicGxzwKvfCMiHEhbBbo5hqyHREMWNWxRf3RkNkvMNR3a5JBybw1kTTivTStAiTFFJRNiizcapRTmn",
  "key14": "3XdVtJzahXBToxXbNES4vnxLhMB9YBjK7FNAV5NYMZFcAhud8c53GLUiPViVZnkkJcriVuZVcGf1eunXWtF1XQSs",
  "key15": "32MnYce9VGoQkXFbqsUv4ffYvPeiL5nhtZKgXRH5eyMVjB4NPMfgYUzAeoXsf8VKUa3UCj7GJg6cz18RQqyoWCVQ",
  "key16": "4mwTSDUVRLsLPMMBkdWt8GaH7XYFQdkt2KaFXJzN8JVncC8uaA38poxPi5FGtHUGEARHn7aGzoKjdrjpGreBnqmA",
  "key17": "4HhtbTBmdg1wca5Z34MtQ4Riko6dcSskqmoMxFzbhdEwBmkTsxCmpss8Ku36MjDZi8zJi7uvFP1NDdFfKvK64iNx",
  "key18": "3NkpCGJsJVafEjnhn61j9tjRbjHZTzvJJ4EPCiG6REdxLFJvvmAXBPtMoEjh2vPYq8tADVvVtSYCbcsb2azXYJ22",
  "key19": "3roHkW4af2i8YETqCrNrftUmhK5T7CM8LzUHK1zGpxZKQrGgjS74ftH6VumWB66nWgkdhfvjFG2wiRSUwyfkTsNp",
  "key20": "2JviNXfh9Xsj6Cu6AqKuRbUEQTLEtmLaNTxyoiNWpFQLQkn8S3Wrf4y8VY9cFsxqvBfJCAhUfvBJbXDGUdMMQzdN",
  "key21": "2LxtGp5NC4sJCgeTKryk3VyKRrgx4QRcZhUdVCbBGFxUZUNwqBj9JhsabJmBTMPJZKUFU63inmJTyAp5tXmkkpdB",
  "key22": "4Sdi6cLNtugYFYVfkQTy6ssT3aBVBwKA3fHt4e74hM1sRApXkqYSaLhYG94FgPkPcDD5EssWwsbiRWrhz1SSAsZ1",
  "key23": "M81mJR1wYoyhpE5qUV4daGQ1LCV5SfASf7QuRxUDDjVatoEhMBevDehs2sKhCQTE6Pdp86e6ZvLiKrPNzb2Ebug",
  "key24": "JGDzXvBTk31dGGYzsEPKpstHWzysaNyXGLSAKXHVco5abLCqPk5xu9SqCfRCdtQZcAsvLLT6tWu1bC2NEJnxDpi",
  "key25": "5zVxYCXui1fmZzKHK1ux3wtXUm4SVTJt65qXpkWLEh3BUccgFf8azba825HjAXZK8PDqxzbWAXEojGEtewQqseKh",
  "key26": "3w3ocP6iB22gsjHTnB71D2iAxGRqdRuY8FLgB12dTAnqo9rpvdgA3cHiVmThMGCwcz2tCUvseWjCALqXSqGoVzC8",
  "key27": "5fEBU7kGbXN5bWCphy45aLjMB2DTi9y9boHtxzaMSdjWK9RnunrNYQBaRyQkvYiD34eAuon5XEscuM6xfCF2Nci8",
  "key28": "2CVeJF5hf6kjbfTud8yr1EGTQgjvS5SRyqdA8T4a3VNyUifdDmhG66eS6R8mPz6QtEEPui55zFRt2GRjF7UeGKYR",
  "key29": "4zvMQb7m1QAqBixw8bjRnc2YsEW2ibTPnXWocWXFA6tcEQ93VneVSeAS1nieFgEVgKnCzLFe5oZzUJ4Zgpjssx7U",
  "key30": "2jNTvkv7fbjhM3TaQUTZ86WYrHMWCkBzftpJjiEiXJ1aLUy7zMXYUGFxScdPteea4WZ11SUxDrJ4fq3Xpczpggjg",
  "key31": "4a1N42zZdUgSvG8dcDC66To2gWdKsYNo2SMkrjUfPJyix8iREEKJDkWexWadNeRPHT7P6nz7Cvpcy2TCFZTgQG5R"
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
