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
    "5R32gAFh21FffGvucePUcRvs23Nnutmux5voncjDQKrBuBazECcDEynXzYesUSokXu9rztFvex7hQMgGcv4DN7FK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymy82685dyP4dKcixB41v3MkJFoaZWfTHEmsbpXUPvrNyWu6RTtqnwriNDfYuBGV3T9u3eadefsXrW8rryfqjSu",
  "key1": "3Z3dtoxZPWgjNLsCcP4MAgVpxmYsCEmNE4qPoQNjYB7J4TkCGVkCTL4oKmoojDvF9ozUy54jdfVSjskdvfQ3XFRk",
  "key2": "7V7KUAzrjWK9c7TY3iAqbmTsvRCuu4JaQCNwFtdLMpUefv1ZUJdBvDUdks2HrZCGKmKAqBx2ZfFtkqJVnbLEXtb",
  "key3": "upJ8d1pt1BSoen3vxh5JL369fukYbTkwD9Rvk62Yrsy6yVFA2WEWi7eUw5uaKmq77dZSmoX77GSTzJ8sgwyB45Z",
  "key4": "4Hba8WKDj2oRJEJEDEJQ1R2N7uViP1xSqf7HwQSAwduUeB1FjdJSSo5KRQ1B9LmJaXQxwZFuENDxewoi5dU7GkcF",
  "key5": "5r6b71ujGSoqj8huk48upTt2MGizdPY2Uzt3UZMWHLM8E6T4PgdmgoayAGdyUfaSMQKWercT9FjbD8M8hdmjcd1P",
  "key6": "349UsNem4FSAVXwCcgBnXDqurDceUQS4BU2JvyKbCeiUkaWVDMY3zuwB6t7Zhy2GQKTYDiMxVGJBYkdLWom2Sf5c",
  "key7": "3HA5wUaQTUV9j9gffnxrNWVk5C97t5Caw6KXRmzkUFANHvHS8jaNnBXz9nyPDSCAQc58pDEWmUNocmooBHj9V2e8",
  "key8": "4VAJmfeeMAYr14BJsEKKfVVcVhd3EJnCKNXBgWYFnrJuSFiKoRYrW77h4V9hsV4VtrKbXm73Jy5rb7fo5KZzjY9C",
  "key9": "MDD5xRUp6C8ydxeS8YKqhUuvnmp6czVdW2yvAVN5Jxq3CSXWPM1pjwXavFu2XgYAiFyPiWRptjwz8UdFkH3Pj5W",
  "key10": "46tqk3U3e1kSVyCBfEpV3kcnmghP3Cxo9CBhcLKi27YZFhrPsaQDz7BdYMbfdmvvLFqW8h4D3XnPCTvqh51aYpE9",
  "key11": "3kx7huRoKseYVWP3e7rjBf9ReopSKVuaR77cjh7Jt2Bx4LcbCkwL8dzx8eqokn7kDNLF7p9Nnt6JgcaCq8GTAd9W",
  "key12": "3H2qkrqWGm5VxQBf2s4xDugK5QbY5q97LAr6mvEWVoj39u3BTrR7Vh3X4RFMm7vg9UdMhs6UP3fow7ojJEgP2QGA",
  "key13": "E73hyn5DNEwKNVKKewjktgeuNbePxz9tmdXQdmJC13NU1zi8JofWizaUSx6kBcefFLd4ofAtt64UhPiDcQuzmtF",
  "key14": "3bRKVzcQtL4JTurxMnE65cgqGQRhDHPcF9rdriZXgj2hRMhrDsue1LEDvZ6J5kAwr6JLkfs6Um4Jy9fgBCAZYmwZ",
  "key15": "3cV1xyMiAuV7Tyc7JNV3ny2Nc6ZrpLY1besvHeXP566MuFc842scxd8QuQ4fZnqWMca4XqmJmBLbJnscScYAWphZ",
  "key16": "3dBC2QMtW8WLxMdrwoG7uXL667vekvdGuZ1gZCPrrAJnvdeqeJEe8grjFJERiLRWhsWrgNPUquoMTHa5Uuqu4j87",
  "key17": "4xHup6DsnTtNtQWMx2JLMtngp6WS2TEm4MW72rY6w2C9t9fdaHmX6hKVi9GJ3QDsNsHMNFCp1x2zzijD1hcFXTUC",
  "key18": "5gHFgkWnVGuZzBFjF1TaAht5SiSXwwGxCmDYeRzctFcGieLRWL7khwn3wvFG6snX2omGHEkvuc9PhB9Pnuk3CPHi",
  "key19": "5tGFBqtPatMyurRgvPT6zDYvbnQG3enkscNEgNgAJWVxosoy4dbu2JTBqnWvVWuDzCHc5swNKWhQZc3aqvYC7cGJ",
  "key20": "pEBJ7ySCLZtwqbiF8dcvmMVEwLwU44CzkPrSaxvQ5sXC5MwCXuv2dxicadgxr34vUYdu55gC1BxEJsVDCpTSyhK",
  "key21": "3SKJE6zh8ohh98jrA3X48e2ysTQTmHC8r88f6VoY9gkny4TtsTTcLW1PRxNpx13WF7bEZSCRpM3tZhLEb9BGAgNB",
  "key22": "BZ6rsZ3wZJbPaKhjEweHhqwi1Wj7wwa7vVrBrs1PawbHUZVcUHWsXnETmM446wPZ7b3EubYcSDtPqYdTt4j25Qu",
  "key23": "25mf23SbEAykwprECFyPn2mVR1RjJ5JShtTkt2s4oPq2YVzn3Pd1jLiVdeSgmP4N8ws2f8UrQudFHwhPiKeK248s",
  "key24": "63aNaG1smCgSZLcqF7LaMvmRiNT7B7deZjvmaohRqmmUBEYiRMJtfTrcjAAAW9sZEGyC4DPFkK4vDda6c6F9U5A8",
  "key25": "5UEZ2VxMMxBPoivgyro45uX1Nmu1iVovUNXkePLtC38xXnP1t2f6GMHufCoyJKos3vrboR1cy5LesedygeVfkxZ5",
  "key26": "5jiUaaPpXjrbrA7ttKtFQ8PLjMdqoybSJiTYDWuUWvY6Ku24JfWYAJQXYDun7TRAqSLd1LoweNCjLDLLfYAYehX9",
  "key27": "3G4tMQKNSNx5kJj8yPsqCjhbha3eVu4DzwVop77uDdFYJVEBkN2ELQmrretB1WRjt7iSGbtLXWzU2PFx5iGeg3aQ",
  "key28": "4seyCNGgwvXV5TtiMEQHY5uMDGepKjmyCiNXMeyD67cyXEz6f66nQPdDb1zMs5sbHqeJDJBVWATCs1VDTJQgJSAu",
  "key29": "3kcQ4fhjcpyQuL5VKKFYTRq7YWT9vYZSE3PjMJcZSogXRrV8XqhMDwN9j3zHR6irNgQPghDD3exkAX3nssLBoFok",
  "key30": "5wM3pswXoWSybeDmbYXR2Dbu5Px7oaqwQ3mAcZnk5WLidPaAdHKLDnjtFz2Je2kwyf1HsXAvZjt9NWtZEu4uQdkD",
  "key31": "44DP7QCxpi2oueckTJYxuhpKqbSmKZAzvTtaUeC1cFWVShLx255Ltz5aFt8d6opm4io5CVoacrEHXHcANgyMTma",
  "key32": "5ibjxiiNWir9YWyCzCrXUp2wLdnC4r4yUxmk3oJb3khZuGoRHRZGAooXFoHD7RBzQ9YQ9E3V9CiKk3gkYXZbKCab",
  "key33": "5wXgGbBKDqoWiUidA5FnsRi3NuLPMMVLrQTwzaFxUNvgYRm7QecPMYYnWdQA4e8XaQ1QmYpWC9jtpHSfKetdKgnZ",
  "key34": "5uwm5NTBHvrbWLzJoCh8kjoNfxX2JPkfr3xESEP14vddtZD3DpaHx2Kf9e5bXnFAsV7wXSvaiK8GshpA8XSs6AR5",
  "key35": "3S8NfyoNDnt9Znh4bBu7PBmmVJVV76oxruk3ryHhg4XWdrkrFcHBKz39we6pNWEHhpibesQgsAG9JtQSUyMaoiEY",
  "key36": "4ERCW97G7qjKGYvviYjiXFdyDWibHkGY2ZYwa7iJpfzdBawmtRxBJ2HkSScuefn53ha5rkGDvcPu2NH5NLw9rbiN",
  "key37": "5zRVmKd2Xd3qsWX32UFUYZhw3dx5FjdFnhhgfZGP1Mvxw9rPvinUavwcd4A7KVdWLvi6sWy9gHuhwXhniNvDGt48",
  "key38": "2qnrFzAPK22tNvnPjpYMGTF4iXy5WrswbEYD4jbVzCJ7YZgWhSzSm6pt792FtESyQ6zG4BeBQSf1CYWdZrP5UGiW",
  "key39": "5KRw7HEnVNKpXaEg6noVFX3pJwrswdPkCr8r8NLjwNeK9xjufXwxKFNVkCkQWuteQQr3A3iMHoS9z4H3oaAUijRd",
  "key40": "3SPhJPJkDqHep8K791EJVsqGjzNYwNTnnYJbxvY6brrrtCy7g8qFUm55FsZYyf5W4PhBq41qbgurQtPuPqAtSZas",
  "key41": "4XMVUpVowzHFqABnNpFGx2w7aRE56qB6gUuhp26qeVrLwi4Qpsup14B3dTiHyytua78rfN4W9Y2m6qnWgzemHiJG",
  "key42": "3y8HPE95ANJk3b6f9ZdTZgJNGNeCg1jj7TnezH4sC71QHQnW9G1a1o8e63uKmrQbJaWsyaEiGjzxw6CCpEA8kcyG",
  "key43": "23By9NDE4Ztz9HFNNHrxksT3WjFz6MWcKqY3wUioDa955x8b9jzCaMqbWH74EmymwfF74eV641ZW3NPYYHUYh9LM",
  "key44": "yKmq9JbdhospoHnq1v2oo3PMR6Ne3ipudCCFxB17sWo4iULvKVruGKjB5rd8kHCAnxRdTFdmLLUn51hQRGf9Zdv",
  "key45": "3CXbCdDFHEALe8quqMMNxWM9nqUPqsXQpQ96qULhMioSB6NyKXXbaZ9oRCzvzQc5SWHVmvEia8ChWB4MiStvm9NE",
  "key46": "VKPQPn9CDtpDFcJkUrUmNb7o5SuQfHv5DVGvCm19k2yzsb5RtKMDTid2eZMuj6eYeaeYz8UFb7qLTmC5Lh67jKq"
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
