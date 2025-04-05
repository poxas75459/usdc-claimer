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
    "2iGXwJCcprEbhr511pZpYniJncvFqmwchiGmU3jQGT8k5LCPPNSrA11VaCts8ZdVKkZbX1jKWoRvsyLmCwGaB23N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jVMybZxX7UpPfDoRZHboiSjM3nja2SXCXDiR67EnZPryHNQv1aCj5D9JgVj8CymKCQDsppd2pCcR8kuy8ps2Ucm",
  "key1": "uM82kWC3ENAzRn2XoBfwgqYg2GDJLyvtuVWDPxa4goz5rC93razo5rBdDmdrnZjfBBwddPcFw6Bxk8Paz3AFggp",
  "key2": "2bnNRxeHUFZmenT4PQg8P4btkkfq6dDMVRya4Ru9gT12D9FJ2SbhwYXQ1xWPm2HprHVLfxGm61Mv1wAvzS7LTj2L",
  "key3": "4yQq1ocHxxxg5TSYBSac5yPciqodFUowarSbsTe5SsrzmR9GR3JRsa7ES8R8iHJLmJ1SzStJXqsrgd1AMnoY8j2o",
  "key4": "5yW6ozUsuUvzZy5iLhyE1yqmYtTdqXm7vx8gh2JvuNiQ1CfGG1SndqjVBFRTjGN7dJdPLvHff375Uh8GHyEfVY3F",
  "key5": "hTfvteyoteH1bB13ESKmySRJ3LmkM6X8UafJ7k3JC7rRp84WHy3bKbX27NwDJfTRv8X1fhoPJePeVQEjw2jWN9C",
  "key6": "S6Q2vWDrQxuDJLDRdVf4RSbJ9pCLY3J6nWvqPNtgwrt5uYsuYAJqkD3DGbVdVSUcJRvAetfk6FEect5uyGyfCH6",
  "key7": "5JSEzfqSLQwazHFMfiBLn8eJpvVtyi9q5GdhvYfxZKq2RCDrvdgZxD32LKW9iXz8ubPLgT3TdL69tFL6qA2aWVmd",
  "key8": "2a5pXSfYHey39HrZPhMnW7CtkUBxEgJ7HSCCkG1npc1WcR3dKMVzkQzodjX5DW5EECA4NnWbSQquUHL2A3gz7PzL",
  "key9": "2HAo3xJdgJraR5KFtUCoBZERjANJgrpB9ydPk3NSSSkgvCh4Y6Xf3ixaRaWonVUnsJuvHLhr9f2RhSUL5uo7NLwt",
  "key10": "3zQaRTEsZXsDsoFsBww3g1WTkkxTejsYC1WxXCs1Kjw83ZX7nmhi9PVXfBY5bcXQPu7ZLZEdaJKER6Zdh39cgkfe",
  "key11": "359XJ1431FD1j9vaBLLgkN9zL6tdsdAHuvnGfrfFbJz1bftw7ysXLP7Kp1UfZwPXRygsUrR5oJtenupxeuP52jpJ",
  "key12": "3MxiKcknB8SkfBsXkqUYtGhTFKmKqQgpF1RSihj8sDuEeMZtgwEJt9VrgkGH6UQQCDRnRDthzSwUcmU9czx6wnr2",
  "key13": "5YrKCQPVDe3dKoRWihZHHkvqkcegmcd39AvePTTnYEg94uQCirym2JHURc51vFZDNKQgexZ4ipCH7xUVpdXKdW4e",
  "key14": "449QRVWFzo5dADhRZJ31HHLasrqCP1fDzU1XZZYoQzR5ka5gG9MX2SgSD8oto2TsE9Kgr1CF2vxkq55emJAaY6BK",
  "key15": "Vx1jCMTB8LVjpuiVAqss97m9x2fS791Gakjxrj4Sup8ivZ67e7NR1ZCZXa6UvUqEvx33RbXJprZ4PieR99gbonX",
  "key16": "3Nmg2TK8Ynu6oahrjwz8op6pd2z1iJDbUG9F2G1hwoCrE4hg6mfJ26bFkDNuxCQW3sZ4fZpxwkCMz4GsdntWv8M5",
  "key17": "37XF77KwmNabiDQxVu9pzL5DMrbmqV26w6aDoTAPWXgHJqroJJC6XPjQQeCggTMksT6csiRAQLbGm2yBxraayNJV",
  "key18": "2XMnyeWvtH664kjr22YCQViUWUonRXcmXS27NDiCutjEK9Bv67cJvaLhYU8CEKwwP7Lz35eCDSBMuCW9LqwRQYe3",
  "key19": "2So6uKbHnf2dnBoKbAsMeXPYU9muJtMjSYdYPx8Gp3zMrCU5vs9gBxorVziUYLoD2bPnBfXjbhydmQcefLkGt8Ph",
  "key20": "3MvLpRM9c6CB6ApJRvEVDy1jKmVqUfAcQhE94Jj6jtfvqy5Nqc9YrHh9aFNuFaQ2CmbBdR9wFhYNUZRekkEhfdU2",
  "key21": "5qaxJxYEPay385AjTmhzMy95rUuCwP7AuLXkH6pj4Pu1YozUhmVgYYf96xmh4v6H1zmthnU1sPacNUrbG8svVMUJ",
  "key22": "4HovECJAruwoaKskMvipEsNuYFjJpjc9J3dvN4eJeBoxr7FdrBEDQpkodPupzs3TS3To5zKaeSNTPy2UJcUj6xkP",
  "key23": "3cU6bqtL8GgT2V4AWRV4Fp455THPtxdEAkj49SqcvDA2XMaznp4zWK7LqqHhWJ8RzdTDGRTESAv6y8Mf1Jporvnb",
  "key24": "W3R6XQ3tnE197bdzNTgW2kjL4xRw9oVM9aMbUAS7sYypCC2xy8qtmoUwFe5f3i7MJsQn3fL5UBbaeMFfM3qysfi",
  "key25": "446hAjTWyhGEKaw38MqHY2ud3Kz6zNvD8LcZWcqWvrr3mgYvXRuPDA6JQGnrXKBn6zKJ9oHdcxijCqZQ9V9hTfev",
  "key26": "121oXNVB62RXqQK9XasPmAvfSskWLiGRK3Nwvg67pxRty7rd9d7zkdH1yfMWHsiXhcnj1vqpuhCobiCBjBM92dJd",
  "key27": "3LwNEpgrL4nXLRbfycyaZdrtJGYydD8YGei4WcJsJ5mbruZ2JvJpfMKVDQcAwZyn3xjgYJbGJbz7HPZKQn1m44Ad",
  "key28": "3Q8hXV3Zs2B4bZnrc6YYdUQoXHd9XWg5cRaPQQUFm2zxpHLRUbZu46fPYGdJci18RGf6AVh9JYZWpwo3wVzvtNop",
  "key29": "2MQVvqYnf2jBpCLC44FFgCfQC9jdY8Dyf3vt8ftdeDjHcLbnwu4ze4MMAwSdfpF8vQym6AZwEUJwzu2SqmPKrHv4",
  "key30": "3qaXMYYVMMEHwMPC3GP9v93rBmdTvK4XLNB5C77NAjhyNRTioZtQc4MptZZkgPfrNBJgwhZf7wxNcwkJ5vG66k2e",
  "key31": "3dBDLSeu348S2BTwgPZtaGozUyecgwSMufuizM6FZxq4KYhouweBcR6Dtur3M3CGdvommdAj5KJw7RXCgrsTDxqw",
  "key32": "PmexNgRZziejDW8CppYRCVwGziYeBuyiAq2juD4qbHRrtY3godva3X9tx33wor7KhinvYujKGAGYM2xtgpsY439",
  "key33": "3G8QNL6xWHXfM61xbRaiQLXWEuT5oTp3p6r7hLY2XmwGkwHoPAFJ9XqNNWB9BF8ysMT3ERff4D2NPoDuvZ83WkY6",
  "key34": "a5AxBBjbdMgQn6kS5ceARXfUi2bMbTNGZWwBNiq9E4SeFSGoUarQWnh3E6tDi6ZvnBXun8FcWMibgEj3xDqGAAK",
  "key35": "vGvhsZUKYwc55JqqTUfTq3LKihUQz4icVmZb3FweeKb2ybK2qwZYq1gEV5jPWS9f1SsAHbCyGVPCi4PwxKbKNeW",
  "key36": "XTCVdP1mhWmxVxhrXaBB7Mr7QmmWZpzxJZQj99V3hh5gPyNZbJ5W4V4DMLukaetF8iTHrHvQ2pSPcxbTUufibEt",
  "key37": "4CPk3EpkG92uPNgT47RgSfNu5cDCnShMjKMwJ997r8qd4Ta8i9ijpgXAb3CoJEeRB1kk5rLLGDQzUdDhzWPGRCyg",
  "key38": "4YviKR73AFKTArnRXRQcsZ2akHRCa2jySGHmL12ndLyUwczWs2NFUmgfEEVeyHEhuoausY4rLC7WqYv7GkTYCS1u",
  "key39": "4pTKABSwmRfvkkf1GutrujUQna24xJ4ootMbVqaPn9r8EtdbFG9KzzM265JWP43u1RiHtdFJCiBqgKs3anMRmMkL",
  "key40": "2MKz4giH6YY8PN14T8pRSNPyPJ6brHuu28RrTJeMYEMK4bQiR38vi3g8CJhEYTaovqYWDohEUFEiyoJ2V4Dt959s",
  "key41": "44MDFcsPGHVm6QDPwUC4h5L3YKX6Dfik7EWnDBQiNRriJ5nvjphkwaz1gGP3Yc82rZzRw5gaZAjShcAaqqPLSiq7",
  "key42": "25S5JoiBYwf4eZahkAwzihZXgUAqPP57andn67advyJm2eejTRUrorYNjEV7nMePf8SFtYrPQjSdowfYzKC2hEVi",
  "key43": "2iNHY8hjd7EQsquA38T2ycHEeHLuop6f46bMXJ83sjUV9YZtfvdBsoPdMsAsGEAbAuVXG6VEAqV8YCWNZ6wQDi2D",
  "key44": "2RtCdc8yuFUf2sE7Gfb9J2ndtwSaZ4EtaJpsgrttpJkJDjUqsu7MN5GKvcMERRoX9FmqKZ41juT711LctWPn3rTe",
  "key45": "GcGV2E8cXxQEdLkV9rE5DRqxP2EN4kaMxahqigm9ewX9medvF9255Uersygnky824Sv9aT54V1GCMXU29FFsiKF",
  "key46": "23CDHF3WxzoySYxmqWsYYYHEdNFBBFqq3pwYsiARpxY2byWMqHvE96yX5v226kcoFWgAna2WfxqK2mDrk9kvTYBM"
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
