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
    "5DWKRAfWg1KZZSPXrphh3PHwgsYiK2uSZ8mTHxwgjzCuczFHvy3yVp7JT8nVSk7bY4YRJ3cFDASYb1wWAj57CBGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4nY4WTC3gBX2f1kjavUkfYTpATns1tdyPfWpqhtd6VSRtCanhuZpHBFzMAasR3WFQyV75whyXtEt5sg4Cp8sZW",
  "key1": "5PcUnsoxCULNzjT5S31EHjecGZyCxrXzHrV9cib45fs35Ra8KhDN4qur7JCyQDHtvhcnD5w5FuC6V2cCpgRbWpYh",
  "key2": "4EVxzhXsrTyAJkcnqchtFL1oJVRScqP8L8vV6BGR9Aes3bfcvY3sT1uX2XJwKj1oLHnpQarxANYZYrpk92p35jVK",
  "key3": "2NsKA8vPzpZAQ3WL9myMVFCNzYXMaZiKEvcvRcRceQB7s62u9ydM3groVUgVzG2m7L8JNse5YCoPAd2hZvcHtPkA",
  "key4": "26nSvbWSBakrrbfvKYcxSmCBjdDsULPFwr7FibZq6nSGstFtCBgxktqLTzhpgFozFQydmF7etg5G5cN2WeR4923H",
  "key5": "5xKpit7EmgZt3Efih3BhFXtUnXQN5gDi9ULn9EKiCHqCyuDbX3q4NXakJ35rg4yj4UaGZmcKAjpfTCsptLTiKdiy",
  "key6": "45feMcLoa7xt6myKWaQ16ehaWjfbmiSFgNhAyiFXtQJgnF2oXLZmCyyE5MEDaMTKWF3Ptgefpa6GYa2rQpkvoZt7",
  "key7": "4VQGEweKDLgLUhSyaLNJKZGVRYZZx2a9JxmUdSxL64fS2Cj5ZP2tPQmKNgRyf1aEmiFjNq66irFH2CrByPMrq7tY",
  "key8": "RQeyBd1WSsHbzxHk2vS8ejRkkNBtD9r7WQ6HPmnFxjjaFK3xELpWNt6hMHQAydYEKQzBsSRobw1a3aALyGPUpR4",
  "key9": "3FgZWy9KmzmLRyTaenFUeaSBN8CSP9SBtEE7n9JzsABBrs5dTKjT2cKESvjLqkNrwnKiAmMqiKaDHBnqh5L9JgH4",
  "key10": "2ZuMLMM2kR4WdvLVFnitqffBuwn1Pe1qSzZ9NadZ2kPSmHY4GRSFtVPcq5ZLjgcNmtWnhWoWJmCg4SW33KFz1Pi3",
  "key11": "42bTJGohjeU78Pv8VMg1S37u1tkJeA6GF9uibb2NXLpNUQTSU5hgvLbeobJk9sMaV7fyjYyuhi4tF5ujzfufYu5G",
  "key12": "2DBoJMJBAmTK2FpRx7a43btU75kTucjrF4ZyRmKdNb7R46AdH9cWYCJsxVj3SjTpygD8cNNVSFdiUZ9eg7aByei7",
  "key13": "5AHwzasCL8FdcKgFtDC7BRuqXKXdq3swR2qK8YpNbLVEpZR4GiFrsb4ExnRg5QB2euUpwBmUxDRQDbGSCqXGYBwM",
  "key14": "5zMaJTZAYtoEtfbLXGkWjnLrciPNYxTVW1fpDyyAy6g6CyxH6qYZASFTdt43yPcMsqbX1UKCr1UUb3gPGhPfAFr5",
  "key15": "4svCZL7fUtbmzhvGoqXpG6oT3Lj2Ds3XGFSZnB8AH2QdH8wSN6dHj3qD1LRyaYCjbejMXGsu7V3757rz69Y4GEjF",
  "key16": "3nu7d94qeWXyJaxMdx8XVfDR3UEh1HAyU8cnbb4mTeQxErZq77VhN2AMW3DBJj7ogMD14g3ubM4N1mwV81rLDJAH",
  "key17": "3DJn5uin9NYwbpM1GH9nmJuCBfQJJ97x6E89Lz6LGDgusMTAqseKr4t7EjX3743GmK8oP3ULs9RfJjD2UosdsJvr",
  "key18": "2Dxu8Fg1TZ8hKpt97cZZdm23oTkV3pEC1P89JMwiRoW4agTgoSqFAULa49Ux979mF4tcsQQ5EmgfZimqS5WaYoC1",
  "key19": "5W3jTEdYQK1vyGXZ8bQT8MC7wxa8q23TAvDmcm37w7XbJXSis1M6xHzKbzmYyEUE2YdXwcGEQqRPPb44J6ybLR9c",
  "key20": "2kVC2EHF9qGx1dqivjRnHdvfg9aiMAgo2HkqNc5JqWRQEWqPLMm5zhBu7kemfycFZcbh4w1n7XyueZ9rhPz4wz8T",
  "key21": "ryrzujURmoEWXB7YKqY29uXQMZ9xmy9jeDuGBFcMNPzzJZ2gQW8H7ckEN2zdxZKNDaNTeaB9uhdJ2DBZLczSE1J",
  "key22": "478jztUC2XHQhWFa5vjHQhpU2Umv1iQqzRgS5KgpgqftMcKFxCw8o4oHypetQFubuUYpX7FVA29kcPJHz5eLfwkC",
  "key23": "64fs6LZR7joeyVF6pUoDfoHbS7WPzVCa7j81nFSuVWyeS7bkpcNJXVGaCQ9wvoAcrhiaSrQfZdbEL6Sc6A3i4QqU",
  "key24": "5dU6ZRvNB4MCj9yTSBDfWUXabgbJ1KhkGZETEut6oDunyVmCozDxMrri76tooXEuJmUArjqVRjr63vMH3wcfCfyU",
  "key25": "5dQq79uEmexSFFVHSAh33qHcUwEY27L7gWXZkYKbormA7338PAcTJDK94xSk4xbYe7AqP4j55AdybBzQDcToJPCy",
  "key26": "5MUveBfR9jgAekSZEjEFQbz2etxrSsmv3R5y61vKoYheBJ29Gj2o1ef1xLVQ6JVE2NHQDSuJd6CkKs9qpYBCdbxW",
  "key27": "4Y4rtf5JWgTgx4GaHDTeSNTA5Gj91naFAiZgxkMmuGPTQaXJ2eMseMzEdhLoCJGjxPrgeMu8EuPwNYrftXqdryYt",
  "key28": "2zsrmgG4vMFpuezMzmdNVk24jUFhn3SwjidiKEwXNfWuEqE6jb8xAo9Zf6GvgAzdfSA1pvhYbwRDPTRXpgQwBnhj",
  "key29": "5mmW7gA6oYMtb6QvjnvcenM1EXETL9cGB7GCS1W7ZQsWFSPMHAEou9ByHRAg1pLNQ8c9z467RSSyS5TUnRoQuFhP",
  "key30": "5u9ukFCCd1UFBq2Grf5zNUeCAuksHQYAU73TQWNu578rN1samhajpbSQf247cu2L1S55rZKrVYrn7D2ZPL5jcakz",
  "key31": "3bqbkaoqJzRJF3RkbJXx1r6Hqr5ha97ceptcrZ426hrb3MTaubxdtpevfK3L8ivPDddwnmLphWqkkPEBDdPWGJg1",
  "key32": "3uAtiVgoANiooQBbQJ7NzoSRDtEmtF3xX363gvGXNyS87AWqY7QQrceKKWc6nHCnnsFDod5p2eoWHWEd5t9Fdrx5",
  "key33": "4tR3UMGWjEcBNfgV8Y7aN6dgrDGDo4XMY44nnpmbLFVgcVF5WjcmnHiV52xLwDkHPgMozsdsv8rCXNHz8Lz2xzMG",
  "key34": "648dCEti9QvTPnC2rLrTcaMg6PxSd2ZRncgvk55jC59hXYMBTEgnXJ8gSZEhV9Rr7m9Kv8qGuwiX3MzNAwE29opb",
  "key35": "3Je4yic9G6oMRq2uj7QdPBuBRCQUEztyhqUmR9rebsqEacXB3XdmmWTuc1gqsYNvjL5LnEKzkXbxajU4zdSvbcwk"
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
