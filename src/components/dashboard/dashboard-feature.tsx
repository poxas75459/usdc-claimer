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
    "XJWfkRGZgZWun6qJ6mVU95EK4FTDYH2WehSL8bs2pDRWkte4gUt1xC1GDkwvjsD9scPS572YnKNfHxkBQaQWmUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yfd97MzW5MfUSi2VezJ61X59YSbqnSmB2h8yhfpCPgMNHpvPY7UvHir2R37Ukrn6XH4RoTUhWhPK2Ci2nwKCadt",
  "key1": "57eD6dEnrM4UQmUhQ2gM7hRy93ZyUKP1DUSe8rwudbeDkTtdyKAvJE3GLqxuccXsk1X1SA9pTSRidUo1BPyFfECW",
  "key2": "2uXX1ZERuQqfWGMXkUJncGVq9rScaxKTWWrCQA7XswzymUpAnwzF9M2TbVPMDQVQ6FEqCn1hAdR6zVKEwXZm4xgE",
  "key3": "2dG4Lg9KahncXHKS23U98RNrWShFn2xbZnAvQDQVdY9PGmyx5Ra2Kq8kw5yeRyqyQFnQ8f4Un9USun23p5ySRkE7",
  "key4": "5Hn4K1KLB6bPZU4T5Aa2Rzcj7TSTCwqVDcQDZNCvQ57YwzNJMQDb1MYPXwR9Md8SvDD2U77JMK5zPaE2ByzxSctL",
  "key5": "3tjdZxodUgDm9Bhi8YoQZgQhgxZjEw1s49xmk6DetMrvQokeqPoEcDoPv8jtZ2wHHAFQhzmzMHWFBT6xSzQzcf38",
  "key6": "58Lfh1GLHA1qcVXXDnn62YhCUzZ7cDYsroXW68oti6AwVb2aZzQgGLpdqyNDFh3tchpLNtsaWqAU7MZ1NADqCa2M",
  "key7": "33ZDEgx3RBt2KMucj4bRZx4x7QeCBv9mjzyyropwMrFc5Ktoukc6d9nzU6LMQ5gtViGsRKhgWdT3bKZhyFPTQ9Tm",
  "key8": "4SKE4jkviRbKsbVwfeRpJWTR9RXznC1YE4VhfQ71jTqK4hjJaJwRRC9Z2NA9i9GFeoQz5p8SetBCLaDZVts4THyx",
  "key9": "4oiAyTcPDU8ew1iU9BDNtBDcwKw6pUSd1F9vRx3vgZ58gGaAWaCHUcpLZnwT9ZwsDxCRr5ykpGUxgkdLLfQajnV7",
  "key10": "5BnNeF5CVL23jh9HdiEEehgiV3QhNLdPMmXyKFfXymwU7MK8pd57RfFc1d2poEtVMRgxjeTUpG6xBq8z3iFpDdQM",
  "key11": "61YuLdXwAcp9FJsaMYCoR4nzHvoL6VBViDn6YX7fmhHq1fwxYihSf7iCJC8BtrmfwXWdkjSPsxpVrmbKsmJZpuW8",
  "key12": "5CHuUG1LVLjEns5qFriQzdNokukpJeCHeKjknJ3Lj6kzRHay195u5emvVDe2veiqiRD9eigCPihZuoipGjX8bnuC",
  "key13": "2DY7WEFSzNgLH66e6JV46YqYtNZ6cTAUgmzLMMqpEqGskz56adaaAnJC7nRkc6oqbJeJ3u6evLARNXCiYwdWR4Wm",
  "key14": "4LSwffKxqfm6DBuWJtiNMDtaZK9zKxKmoyXSy1kd1ZPTHPJocmv4doubWB1TeFLmhfagYNgf1CdG5BVQg3Qfczb2",
  "key15": "4FjBW9S2b93wanhh6Rm5gqx7hQ4n7JtMFWDFurShySdDXU62HnQnL8gXczDh6cGHEekTi4nzikABs3pJg4YQQz38",
  "key16": "3KHgcUof4TRCA7pQH16ohRrqgWSSp6i52FfRs52ApGtjuTYPxshmNmz7dxLGhj8W9GzsDJUynYuzRVxksqX47zoQ",
  "key17": "3oDhrHADNcMLfJvQBLkDhXri38qsyXoThwY4b7NGD49ptJ91NeoKbwFfmyGaKqB58Ezataoyd4Ty3QXxV9C79cjB",
  "key18": "YmAyA1WThrzHDHbY5CFrvtNbJxyQJYGgDnWMdg59Ka9muFrDTioYgg2KCSvUpAfztMnvLKpyxLUTwHDh1kfJDyN",
  "key19": "64Hks1f2eWTsc8ncFmk8svFYRGGqwxZucTBUA9ACEhZmWSv28n1Vwj213DhyhL1fAfTXEA7NuG5HdpHzEvGN5U4p",
  "key20": "VRVi5s6XvSiMBD1YH3FbbidDo8Q8WVqMke8fAeUjcAWJLHpr9D8BSiYSqZ3iVceKjxkwQuNX4nSmZUpz1wVf8SR",
  "key21": "NqWxtsJmVyp8ZVSY7CFTh3ibpJXY3RG6bKZHPeuFJ2CV4gJVvtSasc7hWGKsiEXibeWd4HEaM6EVNLf1NubgLGq",
  "key22": "2gny6mgEGFMdCE2Jkg772DSuytREZPDcjUyA6gdUrLNVz7u6ZftRVLHznApxQVpRogFoBFQRhaENoUpPJzB8bqeM",
  "key23": "3vYfsa4JHNMvgvmeQaUATqq6YFg7TWhrf7XaJrttq7cPdSyAWtEZG1VFMzi5ba282ogDTqmcgx2MEc4Ue6tviuR4",
  "key24": "3yrrp21MptKFKZiLrp8UBBfnc75WrZeahRtccyvQ81G69E3LfqVdupz3bHQd2Zv31weQ4dekxmthtNWJRM3UV198",
  "key25": "56SiZDbma7UTxKCBpikyXZXNMog3Nfgg6eC4aQEL7aUk5btmV3B4FJ4LAAEqhQtBnxy9v7NRvE1HrYgVjy6h6zPX",
  "key26": "LHiV3Yrn8kiL29w8aih8duazjakXrvDdUCa3vyngZcdxsg72UPYVGRoDKt11kGAV3dLEMsDt3HV9DHVhzQUnsXi",
  "key27": "2qjLTyECmaifLKC4echmbyUykpiYEiwCkFuzSfy9ZsG8pxW7g1TZsC5rXWiXidQV1ttq5AmMrGiMThCR5eE214VP",
  "key28": "5BcBcdQ9ZmXyh4FE5tWjKiuLLPQ9Tv6maSmN7Qo6s9WEwbGqrbLfxEaNFeeaG9o5RSDhMAz9ZmaxKgUuDtaHeC7i",
  "key29": "rNZZHHXTGgUXpnBQaEhLseuBgPZ1Zoy4k1MYNYHRua9ZaN727Xm8xEjfA3cm9zH2gvWjCeEemZ1s6cDKr2HdASZ",
  "key30": "658D19ZaWwgv9svDisYEujDdzVme84unHWcwikU2p1BsSggEhWeo7WjqRXwzQnbFAde44PJpQaScMh4sinCdhtQG",
  "key31": "3vYT3ECTD8K8b34u7jCDDzmWKBVmUidS6BY3sYsom2qc62E81yqpWXJVrs2TuQnEjbBMx2RUdHVqCWeY9SoBjQh5",
  "key32": "2nFUPoBGgBmPdYbGFsTMmMtBDcEqFAvEFrwdF9gjhCHs34qX7eHwF5ppMjDdg9bjUwJmSy6E1rPsbhj7PKsFbLkN",
  "key33": "5E49oKgQWEdm935bCsnzGC58NGSqFVHCubekGA571bZCinxH6HPdq4YAyR6hcpzaokMEBLC8XEVXcQAuu8n2ECuT",
  "key34": "2eke8y3SmxfmyzUVeppgEvsSZc8UFjvXjpUHqijDaPzJQ46ZceVhCWiiHJ1dFbZ7jKZhX2FqzjWEQ7euHYpXoaEV",
  "key35": "4HVf8zibysvrFxA4JCbyKhnMup7QEVzcSuFqiLnvR25rHkhyFMkPjzbx2qwsJ7JvKRyLX7YfxhWdAynNtGWco2sc",
  "key36": "7j3mnz3g8vXWgWrGigudHe1JrRxV1RbSk2Xvqpto5u6zwMYrZE1R4SGqXG8WfAc65x4Fw5kJ2b9qH6Zjy1nqKeY",
  "key37": "3L1GbBBxM8a5ayj5CwX3X4gKJ3Yu7vxbC4vBKxMqzsYyPsJV5yr8fqEqGvTsDw83MpScLXpr7vG2V6SZ2YzjhP4K",
  "key38": "5hua4sE464i91GpuEmjVfxUAQTpkq2wEgHRCordwRnggQSj92Z7e1bvcHdShBkCLFr3sEwwUE6Lb4zzQFoHH5djq",
  "key39": "5BzjKhkELh1vdE1E4gMY55XVTkeStVgKvjM1LEbsuqdKAeCfHTxN4wuRStYpdTVTcPhcHNvBA5APo4yA2GyRCDhD",
  "key40": "2q9nKg5FjZM9LiDTbrw4ccW8ZdSoEwQXDojcKdLjejQdsbRAUFrZgXo3wVRDHK2ZD24trswb4SQpZqSBwUgEojuS",
  "key41": "2uTnSyNNY39pEugD4sAm4SmgY9uz1vWj8vxDKN2oCgc9acb4M7eZcpxUkqHm24aDWUmR36jF3vrLt7Jjh8kU4LdX",
  "key42": "iNKaZQUjbbk9cimxHh3BXpKJWkrcTcWH2xaPCCbX9unyoNNQTqBp3MA4nooZmiLzT1r33n7DnhkG1Urz9ioa8dJ",
  "key43": "2UGz8WpCPjnC1RX9TVRK23GDD2qRykYnzwSYxqv2inE2ddkWixgLdsdUqZVECzp3DqH58QAKevogEtpSV5bToxA4",
  "key44": "DKuWERkwWNLp1uz4NXkQPfQ3GBhbq1X98ToFR8idnCKx2ie42tbBtwjJkGN5dLSFg7wyV3Rfone47UbSEAHABAH",
  "key45": "4kjvBApmKALqsNpWuHz3rAxLAM36ohNZrtXSrPw6PNoujQtVhmRKyR9aG3N9X6Br1EcoBicEJ95Z2hAdP2nTELJD",
  "key46": "4ZvW8b6aG27QnXFzgfGWgm9jSStACCYExVtGEdkhyukghSwYhd7tjAsF3dKRKDyWB9hPvRULXxLdpx9ZyZ7wn2pT",
  "key47": "5R57VSFnnT484okCou8gcchcW7b5j9v5aYZC3nUovJXfFag3oJsUTajxzs63Xnr9qAP6qfj12tWjFJAwmHNekxFj",
  "key48": "54irU9D4UHtyWvvRNcWjmmSUyy1jeSHy3cdVVcpjCpFapP6KPULEAP5uzYpezKR2GoTAkagtCauE2KiPHCrXzFaM"
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
