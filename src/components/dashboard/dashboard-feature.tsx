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
    "4zT9wxBRTM4AdFUJPX8zSZ5cBFyJsNkH7UjE8Y2FNRSSHp3QHHyWmn5BUFpD1KWeBURUMFe8CtiGKSg8BYoTs4uH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z97QxDEQFkW9NKR5nXJG1XxvwkPpQLSM4eKZCPYqLmfSi4g1ArDesfwSWX7RZrJRjGKaxhYC4zxe9mRHLynhxWL",
  "key1": "3cVymbu9yU28cS1CUz229Lr7r89SYR63b3BzHbF8QwVB89wV4oYUxJ7ycmf41zBfqE76Knc1m1jBtCQSvepVt5D",
  "key2": "2YwkDp3Kd2XEZ7iNBGGRjonAeEG1yFJrEMYSz5dxSMh54Cb4TFd8i6gXBaDuZpT6aUVQA35rUXSUc6hKP6tY9hws",
  "key3": "3SZPypW22jcE5BD5BfKw4vSL5YrCpd17QDJXxv4BkBFsuWSXPsvmocV8SgneqfxGu4jkPyWranGWAHNU9KBAMjgn",
  "key4": "2XGRnBHP3LxyDwGRga9mRk8J1i7dgd8QjnfATCggx59acCbyUAFjzTkn9iyutZPCMziiBdhgDAt4sQ752rrBRCss",
  "key5": "3cGYWVWRrheLqhyGNMa8VpUZer9ZXbtLCb7i7WjCu7i6t7m1BGBzK8jHvWzqeP9GZZpQbvc1uBfmWNYYjMv24FdK",
  "key6": "5CCWC7hQeymcmas39QTtZmWWUV8FWEHQcnm7JUznsRUriys3hfn19uC7xBAkZSPxNDDMjfEXc95jp3qb77Sc3bEw",
  "key7": "1UwxzvQZdAVY7KydnfnFFL23apJBWmn3DQdxdf5cFnA9poNipuoWQkBDNViehAAmqKdCctLm6bS8qp1YXLvKAvs",
  "key8": "2YAcMHcKjR7DbBotY9H4f5MbSAoRaZpKJ9pbUkUWtjpNFu1gC81P6SThmWUazEXwEPdeQdnJdw2kpxniLzDdndbq",
  "key9": "2H6sfkY3GwYU48cPd61kcfgA1Y3hMBW8Y8wjfDwxQ9cUsjUmQxKTyAqVn3JYuaJPZ8rhNRrSoha2uu8dzACQtudt",
  "key10": "4VvUGRUybkfSqHVUZHtyBZ5XweYVbTsQVBCYJB8mvi7oBgf56MC1Lm2vZv1kjXWAfoZehPYmYkS1jmAUpAApBzWL",
  "key11": "4mfcnkC7tzW9x1bXtGPn3uWpVS24RchdUdhtZ1vsqZVjjREfHpTDNd2mGNiUZWrGLzPWcxAqXD5eheC2aGJyjpqu",
  "key12": "2wACRM2RBeUFzMFf2VUbgx7F1djhMkrHkaeP5njRRdkji8Zjkozz7KMcrfPBu8Wd5dBSKjr5LDifsLGpqPxvjCua",
  "key13": "2fPTzcAJ5c9hg2W3gZU59hBTGPcTX16JnxUVDmmcpbApdiDeHtvqNuws3gkR7vZw6P6S9pWDnom6HtnQA89YjH2w",
  "key14": "5sovZKr5TNKV4GrQ9T16QJbf7be7Gk9d7VupeNQNkz9BRfqyNxPcNVFjMota7Tp58sHVHSZSZjLWDNSZFVh2DmZb",
  "key15": "3rAy4ze7QBbh2rKXELtJoHe4vQmDcx8XrywQXooREWu5TCems77Ww8s58T3U9hbUqRzs7HeHar5HGtbNHimvYEkV",
  "key16": "4ZcQDGnSButtH9JqHk2c3LhLvZHFZEBuJWxUd7N8wPsYjVXw2uHjKmh4FGC1Mj29BfESN9WcwMdrnXhByfZ9Kjrq",
  "key17": "9mmjFAJF72vbXBeSNmvZLnQXME7F5oDh9ViWFsRaHR1KbVBVTbhHQmyg8GzrVtS8KfpJCbrFzET3UK48prDP4NV",
  "key18": "2AjZQCwM3ZQsaHBzHE9B7uw6yaqTzcsPmGnQbS2or1cdG5aKXAjnCx5xNUaqRAzt5CBSguTkEddf1F9fdjSKpya",
  "key19": "yFGqbFas8NPxukuptGEFicSydMqch3L2KkbxJ4ZyQfBjU3tDnpgCpq65E1puE6CSqNUxVAgXFKgoeGBD2eN78Me",
  "key20": "288eZbv3dMYdsErdaAuvjyyGknKU4ceyyudvmCMfUmBTpqrRqARsWcv6CQJuYEtht5pLfrT5Hq61Q3RoU5uzmzoF",
  "key21": "23D8qz3ZYWhNv7TWKt4aL6HKEKFTRF6UsWENjz68GwePY7NmJgCZFmd28DFiMUewQsKJjGoU8uvRYZiTUzqR9du9",
  "key22": "Wf7YpFcY4MeDRCDpCLzBjnMp8Xdw8TvvDSipqnov5ZiNGFne7WQ26y59mCSposc3uvc1Yg3QMhR3EqU6pyw1mBh",
  "key23": "3Cyb8R2a2pQ936DiwNkesjosdMguQgDboFbxKerT9iVqSpChcT4AV5UFLmHZDFHKcD3SpCVisKYXsCs8W9pJ7XTW",
  "key24": "3gciwz91HzCsqmttZaYT4ZrV46E43NcrwKKTEy8ngzh5uWRkzdTbk1iqJvWaAFJWYmjUSjNVXhYz6htznjTimUTy",
  "key25": "57ZJneHA9GHTnzEvPF4nVK8AJwNKXvcQKg4aNrHS2rKT7esnq8j5EA5TDyFBCMr4cgcb4NMYJVbMHm6EpN6KWVL2",
  "key26": "22hTF4zn8N6yAXdwho2tiiT5TsBVKDWDPYM4iHJeYN1TMkW8ynjR4g2REjJuEhVnpN8Nc2S1Lszyy6uhMm3iBT3S",
  "key27": "5CM2fbZ6PdMGnTPKeWoCcUUvZ5pqutF881nBKK6Nv7ZCT4MDHfCEfPu2zKRCWFRT9SWAyjkX19RAM6zwr7tky3mC",
  "key28": "4Rbax6zbAEk8XqEdYFbC2Gu5x8Cqy1yaVTaX8d6izGFHynRAtWx2FvdbKPJp9mrkyz8UKH6UvfjTDiFRxcsZNgNM",
  "key29": "32SJQd4X6WsmCzFbicuBhkS7c2y2pqf83aNJVMVucimTHYD4qTejm5fgiZzdMJ2YZByjajXreNwWijT8WibvSu4K",
  "key30": "5ux4Y2Qpqm7dEfn68D8hAocy1LmFsqKc92gBkYXfSfnXxHYbSeAonLG1aVAmFpjH3yAsHUCvrSF2EDxZZgFFNrtD",
  "key31": "3u8RZrKv6NJyXRw6P6Hr2p7nfYvq9xJdGoZP4njXu2CX4NMXBKPRpyzrP4JTC5tmHB4zhNc2U1kgBo3Cj6njCWFZ",
  "key32": "2ED7LnQKYPSrHuN8Us3qMYXFPgfSiPubqbwZujogn1ZSdXXcVpewQUD1vyJbtkWu8uuM3EYwdkhuZHVrBEr3ZMKc",
  "key33": "4QAtkietVj25Y4joKmJKwGp6h8eE4VzNUq3kKivsEP2JzNkmdF9hbEwKAHbA3D3F9FihXR14vgtQj8CApzzkrmCC",
  "key34": "4bibPD1NCdPUUJv8R1RhutqcSbRRijn9eRj7CVAYLgPuHh7yv7DcSVtU7qtNhM1r2hm7FYKK25HfHcgUQ7CDeWmm",
  "key35": "4medskLRNqWsuBMSFXGRhMgi8YDRpuFLhnHnF7JbNS8eMmWpnqDxKE6kBVeJ2wASvrLBysqNYGo19AYRmxmTk1Hz",
  "key36": "mK64Ezb9WJhKJ1HRuwg9mrvgHej4p6hHVzPqaEP1MQBQQP2XAnoDLQFTWCMv6WT7jBii5dpBJK3MgwE8AVVgtA3",
  "key37": "4is63otnaJUsnxjZnwpsnKZr7jpSbbQJwAxhHtg6msj2dmsh6LjxVut1zdCrzHpsgDvgUYnxTAs1qTnZBjHbMfJ3",
  "key38": "2akB3MKb1WpatKpnvkX4hQDwma3pSqQRhDeN4PzQSuFYi8TtbFbhcNnBhRZrPZgFG5jTyjRfdqVys3qdKGSz6PB5",
  "key39": "2ohU8qwgsXtYC4vmvwaVARVFnXHVnHX1Un3pPje8PPy2XfvdpzagUUzcA2QsE4eHu1YH592GYeEJCCqGToZytQ8g",
  "key40": "2BnP8HZiGq8n2sDxyS76idWtM4uMwxdKZdQPVsXt6dk5e4JLzPpxPP5yjjeS3CMSuHGy3tZn7soxQyLKH6vsYRdY",
  "key41": "48x7AVBrUpGwNRP85QhyidSScd64sJXGqcK8xNDi2AA3BrwFHQJRyJuwjujcJG1prbBMNzjq4kzDpigh2GbL1jVe",
  "key42": "5kWuRD1d7JnjA4PrKsj8rCHfu97iA6Wgp1x1v1nkpwNXiwN5q2sK6SCwA9iyDCxCWdUTdaSMJAqDKrqirMfyAFv4",
  "key43": "dUZxn8fqnbNhXqvvpr1JuyCUACbfRsf46XQYqMGLgMXMBT3yeDTbjBv9XD5ngZn5c3nWmdXax9PfocrGziZnEEq",
  "key44": "5bKzssEhZ2zky2MxZRNZE92knSWzQGqwXLuL3zfBCMUMmkWgKtJ6BJr1r8xTPs7mTzv98BmdwewKrY557tz46pmj",
  "key45": "mTPno7umdGtL2NSW2eNtepZZfq7kfSch8krmPUNYrWQRCPNtBrYZHbYGQSn3Fn6UqYGeXuVKwnEdupXrm7Y569K",
  "key46": "4YBsJ1wfzDJrUgAk4NLZT5dPCd8Uf995LQVz75GU2UhdCXYuJvFb8mEf9JVfhFsL7dh9FXUBP3d6LznuodPsY3gB"
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
