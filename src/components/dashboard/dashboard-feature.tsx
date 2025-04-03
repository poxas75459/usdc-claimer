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
    "3ma7W6YJBZSPd81dA565tfwuoqvNKq4XWYg14TeGHCDDenqLNP95rzRgeX44f61NrURyKWAwCyLjfNZ6GnhTmwa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ezsCt8U1UXp4WtCiMuEmLu1vY19eXKVyum2W1Jm55KTo3wwtb7W6Wq3mYLmUQMafQJ3Q6EBVfLUL8DQ9XKhVbJ1",
  "key1": "2wpNKw8S6F954BvbpvyUnxjgdJRerpdo7JHffxsSa7TiP8HRmThUviaM9ejN6foG1dbB8ggLToPfWVSHVociocgT",
  "key2": "4EfcgiWJN4mJHhGQriNDPdhhakJULFioPF7RPRHoy2gTdQrcFrCm6n66LpQRnpFv47GoHtdfi3UWy55ipdKTA157",
  "key3": "23VBwNBSKzesGmcrcZ7EDTLJv1J7K3L1rPWJ7xjnUGSfJKJdwnHibUWCeaCZnZLzCjUuNQ3UMfHZmMRYE7tC8bHz",
  "key4": "3jQXn4HHbWbSpQ8UuY9n39tFgpR88kYb5pYMKfQdG58aAaRE7F61i7KvM4cQDUksR2cjUEieXjpnbDWsLBbQRJ3U",
  "key5": "sZuqVCAvTCseqcnpaexyvNKSzhjiA9bGCyqSZqk8cSzHT54TwineaLzRZCLmKEkTRMivPULH4Wp4AnjNxL8stLe",
  "key6": "5Myi5KdbcDqhN9Rpw5VM6infcR2tGaHXUF9jJDWE3aFijQoq9ktQrKm9HG2EPVz6QW3A8aHaC7m3aK8zTRtqL1Ut",
  "key7": "3vgEBiXE7xYtAg8J8HXQDBRav5KBt9FEChF7W1Fw3Y2YKzdJ4D8V84TWvK7f1nX9VWbLjb3fbhiKUum5jJUkSm1X",
  "key8": "nx6MwTHuiz99yG1JMi5uXpFeT1TV9XcpwMpSm7i7uqSaRGJAL7BJnDjJd1EPQYTDMhL5EcmrNxpPkEWgMQyEubN",
  "key9": "4qmU6VqditTmqdBr6E2LmJDgvY2pEHfUywU8hF7ZNMFpsqrM3R1C1oFp9pFs3EgACNX4zUAthZQTttjpK19bd8BZ",
  "key10": "53qRJx9jaxNpwkVPioACR6ARpr9wuhL6pcdhGhtMZfvZFtoNveZhMxiXtqvCFHcrkRh5CYigmEQhHhvhvRyaZruJ",
  "key11": "2EkNQyz9mrmv1weH54m4UFSzyimWXZttgw77BYHdUCJQWRgf9an7goW6JXA2UuboSn4A8f7zNXpGuiyyYbgAJVNc",
  "key12": "2SkLd6ZQ9zXJKBCGFUjLf6NdfK7FQHso1FgkM1ErPZDH9GatdZqarYZ9hy2sZrPpmvWmX87mRMt3We5pYqFWio26",
  "key13": "5yJgeY5YSBBmZJ3LiBD6qisXEjeAVwsPDJZCaJSEv2ZGzQb1PhsPxzmeSvDmuGUPJW3FZYHnTh4JnWyW6CfGm7nH",
  "key14": "5Anti7nPnSEKhjkfcs2YTDrJYtyzNC2hxJgTZPE2sketa7HyXujNxC3XD45S7vb7rnEBJJJ1EFRJe32yxjSd3A4",
  "key15": "34G7ayo6Wj4f1qahpnJoZuQUqmC6KUHaFv4Ns8Xkc5teGasRsaeAodGMSUK8nGZMgVzcUXwQkqQDta3iquwUi5q7",
  "key16": "4ynbSHWnQr8HAcY1DG8U98US6ZLXFMaVm7YHSnvy7wC6swF621zzD2TTxYZpCzcdXvFzvCfrhbXJfDDX9Wo65J3g",
  "key17": "51DSUFM1mkqnkbjR4GVPmJqxSD7Ncj83pVaQpkYhJiHJ4dViT94YMg639j4hbQQtEMGLHb1G3yKFw21o1Uuag5Tv",
  "key18": "4mrbLnXNTbuMP592QEpQcWgdn6iiqTaXtwMzxcARNNHxis5TX6RGoAK7xCnafsp6RHHKALekyQLrJurn4BjjmxTy",
  "key19": "3dfZ1E2pxfRDAYa5rndMd7kuuLoakCMP5wWoEUzF2KGKD6ExBSxArdqrKYCvQhgwNQ6kb7aZ9R3YYuhqUYeNMKwe",
  "key20": "2ojssYrwmQfiCQjoSMPZX3RCFMnMhrAqJZtwt8JFKGcs12tTwKfpH4mj8BpTmfJAUPe4yaAAh8zXW6dZ3CbeenUx",
  "key21": "4YszGRD3YvUZob1WjuWFZK299tU3aNsYgqoCoGUoBVR7EnzxdVcDME8tSE3qBBNkLnt4LG6JPNnTC8hRdyq6LCTQ",
  "key22": "5KxS64o5AvXiczimvnC2gjV8sWqjMybehoUC2rTgksZMGgpzah6GLxiQVhEm5wowHCgKGvQ9sTovuzMHqDtyzfhU",
  "key23": "4a4iJJZoSByFZxeRWHLXEA4EgCTGkno4uiReSzT7Ropag61w8mVFScD6gq51vuYYrqrK6Qh2XjMa62HRZioy79Se",
  "key24": "5FXkSvAQ1zRCFWVDdEtZoufWxDG6dtJWSFozbRSzqESV4LHhE52owJ9w3aodci3RRGpmREFVmc3ZqseSH2pny9uU",
  "key25": "5v8N1w3fFsoutam7QE56NYcTTbYxkLG792DE7ApHXFaH1WK794BMG4oQ2GNsPkfmyL62NV5hiEH5WUKGDTdwSBS9",
  "key26": "4rzT1MFWamcxKYFENRAboF7iaeSS3KXousgjUTnnkQr4Y8rNzZQfLoFWXqefbfYBJzRYRwogzfoQ76TTykoBfTvP",
  "key27": "5ciyNacq7vJwXTYn4JJK5BqAJN3hMPXSCVrC3GkZsmhxET3SHjfNWYx6WELrExMXJM8Dtx6kMZqozQYf3Md5f382",
  "key28": "2w2ocoGGESuuNfP2rsUypZvUa3CtHYTwWbpBEfMmVfaskupwaV164LmQQKLzbKY2tZLbDE3ZL9hQbTz4kkagPDSq",
  "key29": "TNnst9QkBanyyBEkGSHbom37GouLMxSWuV6ADnNQrDyVjPb1BCWCJ6wWrvn3jgaiF7UizHfyCoHDNCFqTxrJVhj",
  "key30": "3zX95PAounvB6EXyvMLEFWYGwQ8c9uAw3HRStZdtVYHNC89aFFG326SKNSsD51Ku2s8uQPdoC5NecYdspwe3g3id"
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
