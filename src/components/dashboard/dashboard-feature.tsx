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
    "5sGcqV1jrWzdkVTkMZcTN7jW7bqqQDU6B27gyifR3GrAdMYgE3k7AQnkDQ75mTdmGz656Taqu81E853ucJoojm33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yT9D5ngzPUQ6ADLTXSm6Ku5LFz9NxjsE88ReCni17HAKbEtRNRUkZ36D1QoGPSxttuH7FmK23ycWCGExCbUyS2M",
  "key1": "5QG4aZ9goUMxwRjHcMigRXv4qB5VGPc6LMRV1oeGkyywwkoWjDnQeBeV8KsKpHx2QyDCUGTXDnyrKiaaT37Fa9it",
  "key2": "5MUDUKQryqy9hJjcEq54GHEsiAnJdroCVe74PsERffRjN9U3KPVTRnGtQPrYETPg6iB17reNN8zMzUV9KjzPp5ka",
  "key3": "3SFj9gEUt6ydtgdZ8MHZhsewt5Q4Vr59cJx2VR5UutqYi1BAvJiKRyWcj9DsMVxUE7sy9trSUe6dNi5x5KyyYKLp",
  "key4": "22MtLERveaJKjwwqT7Zy446iSzvPM5R2YJ4UhapUq9nBQpix7t5UshpvLm8PGiM8qaPhmSPqy4WnUDyF8a5dbVK5",
  "key5": "3NxcMYER8q6SPL2NCAeiBngsKXQ4ieRPSM2HpQRqN53jFpR1nQYGCWDGBNNTHVGoK1zTKNbQENgTXVpnvaPLLoKK",
  "key6": "2QPV9WpVTu2aiTnFb124MKRLGU9kzEfPGh1Dj5H6ihL8sbAwHJE5DfaSBRrouYFftmga2iRK2wqrFPF23a9YEx5W",
  "key7": "2sbURVQhaZ2e4CNYSKLor7gyJUjMi1aJWXyFxAaKqZ6ZHeUa5Adm4FGgQevAGv2QeLmumGQ6uLMgfoQA3GdQcorB",
  "key8": "4p5vA71rAia4JqV1xryXKYBjaFHc9eriH5DpzDrLjMiYW3NpULdoibiHiU6WQm5iDcu5eE9BdL7mZ4atpJWbJdDt",
  "key9": "pZTrdX9KELQ4v5xi53UaaR9HZ3JAcU5AW8VXUAJYfC4tgp7TqYqCe2f6yngebQnFTQitELgYw5xYoMMuJrqyYfp",
  "key10": "2QVGnykiPGDg9rR47mf9DdW1RrGBWSjg8yWYPVYjyYqmc4wFT6ZEZogJ8tYUdsPoZWMKHuB9HDx21mMjXhJZegwU",
  "key11": "Z7kJew8yA59cqyj5R3pBxD4f2tQ4KfwbuR8oCxfuGggBLZQp6oeabDi7iFaGw35WcPTjenZYdFNkPETHNEKy1MV",
  "key12": "5wSqwyWc3wNRn4zfvTu2q5cuwKJPDNqibgcxrVd2bRD4KWnqjLMP8WxzFeCmFn8XkJHBmmEfnKvPhBaK8SzJZKDf",
  "key13": "4dzXgPLupUqFgU3vUDWHyvu9UVoanSGsbn8Y42MXPKx1u8nKzfRgFuPJon2H8PRcZYovMWKW77rrMA6mfnDPjaGM",
  "key14": "4urz6tN6J9yAvtQf627HWgKtaCxYUcHN1qWPs2Ehuueub9Kz49dGPakGVEtkHPXTsKgwHsX6Ft8j1NZjyoqdxs5f",
  "key15": "2NRYedAzugJh3EKontfKmvrWRmP77MPyNbw4EJ94nzmbeRbeAxdqqg5bvZ7o8bKNYKioYu5WEFxr3Hbhqc3PsxGr",
  "key16": "5WxRXFnu4WbzmQc9HzsHEzEXrtb1CkhNqhK64iJ8gxWCkCX1aUVbCCjRtLnGoyUFZqEuXgasKZWezsYUw4jvT8vH",
  "key17": "4RRDZViJMYQbRDqX65CT1B4e7BTnNhrqYZstXsikpSKMonHPkE3URAkkg2XDqZojnM5LFpXNAPnE5hN5iP4a6PEm",
  "key18": "zb1gpKevZb2V5WdW2axCkJ6VYzdyojtXFoVSe57CAtcebHpDizoUHPd6i55Z7DFhmidTPEoaBDpqZa7eeHRynNg",
  "key19": "2kJFZTox4dKHzYBKYxbcSb7pHsfpHT4ZwNoq8Jj1iKdHVNCGFvgCcabDXo4P2mfnDcFPsbV2etM5bVevZjx5L35v",
  "key20": "59oQZuKnQ15UQ7SboTWkWS3oHLevNpYoVD8eR5NLDMEfD2rFaVoUn2bA2ARMA1k4qqYAsKtQHEHMPjiHgoW5L295",
  "key21": "4AXqDRpgrjhPyT1NPg5UPKPxd5jipZAFEvPynv69xEJovJKuANscJf4LmYakL9M6HfbeBPwHkThN7iAdaou6TAhK",
  "key22": "3Wurr2qcbXX5u1u7SN5qQYsD2Q7GDPoBJhXBugVNcVdwwggcSiy3RU6uEMg8HS6SweyuxDwu2KyuPvKRX9nXChTY",
  "key23": "2iMmiXW9gCGeRqk599VazXcRo4mjbnvXvNbdyhiDu8jFopBoJby14RXYh6iinxUMUJ12UTaU2Wqa44JCSGwjDPRQ",
  "key24": "48Ds7W85rXW37SQ2TejSdjZ7XNrHdYrSbqagN1hTjuavSNzkFbnfzbeQdeo7G3G4iae6mN9U635zjWTUwfEChrxn",
  "key25": "5ykYxp6EWfLFH5gAGEn5VTKrqoYPfzACLFatzqpnxoTr5PpkBQu9fEfPuafhfHN1Vcj51LPMAn3pq5pXnCVHyBMs",
  "key26": "3UAWorxRzQQLu5Qrgb5AoiLexPKTjZSeet8ubX1sx7SuHWoDcsBZgnihvBvNkL1s4brj7Hm1K6waVN1ajb3oUzqn",
  "key27": "2wPkkUAVEX4wepDUngQgX1ebAFjadHd5FqZxG8puCMM3yRJ8wofkoydT3GAnNXe3ZrQ3NExkPpzRnnifphdmjF7a",
  "key28": "5V8KeXs3jfukrKxCHVveckLfKoSX9zy1PD971kzJeBNf8BK8Yc2NHb1amcLEsWbSDrCQk3NVhWhkdvfQvuKeqjVB",
  "key29": "5XEHaznwbabwbyusA8L392XVdfHrdgYy8tHLSyrs25jmDZpLG8uFYMYp6ugMhTjPsvMbUBAr7vabQnaBuS47AZt1",
  "key30": "4v1bxTdbcJyHYpzaAgJ6dpcK7CT88tLcfW83Srab3bTaHpzLhsqCcRYXwERaMTZbgQPyxfYwQqmAcWaNnDfrL9Y",
  "key31": "4bSYXXR22yTM2QzxVKJUokHLXUuABtmKco9Tee5ST8VPkqcngrwcD55KWpKr5h1JJ6zNgLrYwpH8D4FySAEjxg7M",
  "key32": "2A3oBaEeZqtkKd2SLsBgyVHpFD6jUq4uevgj1E3b3HFNRjQ5jizR7xreoj2rSnUpoXnNSxduQ1xWS2ax8mLdd5ic",
  "key33": "2EMi7fMsfdpTW7iAJP639fWr1gN8E91s9PY3vdtZcVZQP9mSswDQ6VCMY4tqmiF9iDksH3jGGE6seGd4Q7auSQff",
  "key34": "2QNBZ1KCTyvSceVXuFcKMgc5WuZUFmzjV4sh2vns4h2DzENZ5hyYRULbtGES8nTzkSfwk3CTweGvG9Ku5bUajTY9",
  "key35": "uGKr6xEyzcuGubAJ23mr4rMtgqdTmtKGUdEmcpAuYouPsomVTHGkf9PBJbT68JGo2rK6fmW6aK1DbLc4AA2ik7v",
  "key36": "Q72Z767kuVtER2wje2yXkHrfN4tacjMNPbzY9hxxTuhLpiup2gJFisCAiH9WrdqAtQe4NVFAxLFV84wXm7oG7WA",
  "key37": "UTmcj2YuqsV2Vm4iqfSBA7vzJJwRnc8zKHhNzfAJgVGF6KDFk1RSasfNxj8khaaAzfgue1sMFarahRFJ3fsVCBP",
  "key38": "5ybjENEoZEAVAD9bxuvvuy36FwgyZe2FWsvNPMaLjhAoRhuh5SCYnUrC6nTu5xCdUfjkRUfvpmdb46rw4TKTw2rp",
  "key39": "3L3nSvqdCuPmpdmiKcLgp7K5GpJXhhbgutTyZ6WiMCAZxpAMf8zZMjyQzHXu4V7LXCk11v6xf1Mw13yXjzN8kAbN",
  "key40": "63QNiaCxVH9c16oKfGoiBzrwgn1TSfezb7JVkkgwnXGBLaaUoYXrEGSDLkqSWgnQ6rVuzmpZsZ3Sb7SYn4ebtY2Z",
  "key41": "Hx5HABfnoXMwwVANhyxJ91EptfDx6SL7E6FLsEAv3u7Y9DaMpk6zLbPfhxpUopNLa9Tcg5aHNct7JeVrzkQff13",
  "key42": "4CP9dN4gFFsea1vRUUCBThJdMFyrSB4wucF2DcV6UFbLBtZ7a8qbaS1tbRyifTtMaWnPNtNL3C57LtMCobNeSiTm",
  "key43": "yVJAchPuk2qN7UVRhGDePeUy4a154p9z95nn4Sm5UJ7UL5zSkhGnVzQeuhsKCECmx9CZESg8TMdmv7N6Xag9m3e",
  "key44": "34WN46wxeitozbsobngaeiR1iQU5PbchWjAdku4bxAryKZaPtHRMmSpEXPPqtaTyLLuyRrNjPckVUtxYjqfsJp99",
  "key45": "4oBZ1XFY5pcKX3oDrZ6JvWDpCX5VwuXY9pzwwsJLeEVgMi7Mnjzhrm1xDUwkCoMQs2sh7naAVhLwjmDYtwzWCFzY",
  "key46": "33uXzfcjsHeaHNryJZ48jRykVUUBMYs5xqruqcJWrjZAxv76NGcXmQozKBNv8CoEfFK2MbbXixVRrmfcxJghwAbC",
  "key47": "pjwJdg7X8wv2CMcYhzjp3QeEgtS4qTYdnaxDttwJFL786rBW5XUgkByyMvMdzfHAw6JUET4W6ewEYPUGKWE6zRk"
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
