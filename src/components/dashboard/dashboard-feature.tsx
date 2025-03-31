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
    "4vqmLpYG27fHqWsm6SPu5YUzDRkiKGriheCi8ucewep3aGa16ucETy4817jXFtkvDbS5fTt84r6PcaENUk35YXoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFeDnRQQ7ENujQ5ux75ieuEqLxaEebsjDHyYzJwthwFXX4ZWouU5dev7L54PdVU6yb4VTHXEdgwYdacESm3rtc6",
  "key1": "2RqbA1iqubcfHqmvyozWFg3TkH7fvuyCnLDek89ZgDrp6udpdHxf6XevWYhoJ9fCbToK18VYLXoCf6Hp9nhXNHa7",
  "key2": "3N3fHtRafNGYPsN3xNvDXWxyCY1czfNwemvRWKNAz5PTAux5JDKWds2aX8itSgDjkFnKe6VdHurpafwt1ivNuN9v",
  "key3": "4JeMRerYpcYQ9WNTGppp72LrMrKKQY6ARrn2N18L84XvsTYML5qHZ9ufohufGpZRceB7sPfnpn6cXa3DautSgX6X",
  "key4": "2t7toMsCUXK9WVqfmYBuJDT9NRNfpYut13hjpMGZKN5hCEyh25d9XFqTrEEDqbWhyveSSyFRG7irytXJKb93fL9d",
  "key5": "2mMBzmd4pj7y6zRKrJh916y4WXxm4hTQcZvgd7nXiZibtXj7MXtAJnc2g1TgqbL3XQVS18Aa5CtWfGjY1n8Lh9tW",
  "key6": "5rAZ2WPCczhh5xcecwJioNUY5BeLVci5QaBRdtQDPQQ8oYjmvhiuKxLyAe9d2SEFsDgUiiFdhejXqj9Cpf4dozz6",
  "key7": "5MgvPExLfti8GzXbyzgzxWfT8tfE7jxZCzq3VBEpKWRkpCAjbapwm16TcgaLXH7xVpX5TF2NnohYqLwYTMYLBoGH",
  "key8": "dRaSkXqG1r97HSLTp5HkDs2Ci5aeeATdEw3ackWjzf45EqSVAJ69eqKh6XsfbQqAUFV7VQKoXDwsAcVoNiAYErg",
  "key9": "Gm9TigDcTuNBnqxFHA3yVvr656TksCaGGbdmyfHjNAZm5ZNVHFZERt5RKzUQjQ7HSYbdpCuiShGKfZkVTfe7ENG",
  "key10": "2BkErHrLWX4fu8HAv5kzNBNX5RCG8tg2CP22tm7JAV9hSs9VNEizAYBzUpzao6YesqxG4zd9GFzVg9HHXUMHBTjU",
  "key11": "2wvB5GLfdtGbZiob4AaMphTR5aHXixSdfBeVS9gLjtuhTHPbZe9V9NrsX34B9ZodsvtaQJHPXt7jACtkVmcfNQkj",
  "key12": "4xigugRDzGnYPSrkawhLNXpss6HFspXbbmoki44pnEqoMoG5gxjJ98v2ibyfY2kb8vSHV8aGQiqqwjTDEiSWAR3S",
  "key13": "36GqDN95bmim6ioZfYwJ4zPuUUmHDH6JH1S2NfUfWETTaRaNbY7VSZJkFEwiANdcfmL1mVRstmb3uuXpHVHThxkD",
  "key14": "3agbLxA7QiRDuMuXPqiCzBh44Wk5zKT3Jd6cdZSW3qPjDYuPyut564LmKHVBSUxAeMwY797DMcV6mabtLM4khDm2",
  "key15": "4DE2M11sbCmPGyMv83qMTgC8M3fTMEEyUXZye1K8jYQ8c9dDQUBv9Z4fJxeNsR436XciS2R5bWxdRo8uE6rmnBfG",
  "key16": "3fGghFyHtZYaTSvstyQevM7jQ55DTpXs8NGfxBx6ctLey6GRYDyT6RfTHtrP9aWxMZFhjK1xv2p6fpkM9wjsRtq1",
  "key17": "2gsPvQ6KXtpHxhy8qgTPiHV8heGW2cYUTFAZaQ7FcpBntmzsjrC1Au1oVMZt4Z5CPcv5nrNB3gVTChzkXtDYgSr9",
  "key18": "3D1VM4bzDUGs3mtd9ubhvYG9S2fYtFVMTY2cEn3kh81YUfTgZzDW5ryG5My4P5NxcFfYccLRhH41xrLJ9Ew3J8YX",
  "key19": "2sZTQ6wF44szmETh7883KVaDAP5yin96rHG3yadmfxgikjzsqRnGmyFXcfHEmt43Lne9eMeJDqoXXswz7ijupRwK",
  "key20": "3waNTxw5LLw7FYVzoEvLvec61aSVcjuV9Wqp5RoZUqvtnxB1E21s3u4z4kYoPsnSwjqQmkuwtkwV5xuAeFgv5em4",
  "key21": "1VFxcpuM1oK1goNftWUUem3ydGxvMcPrsAERuGFRqseXxTBGq11u7ZeGxa4Gtgnrgx1LiAhC9FXKtJHidJyzdeZ",
  "key22": "4BKYBu6rfHbQRmW4HVewgw8yPvAtqWTyPu16JvJV4a861g5Fe8qHtN3N1hHny9otJSkCYm7XdWepVvB6r4dDjEZT",
  "key23": "52aFZPHdKjVPAjTfp2RFwRzEnAqvq5GEa6YA2NeLGv3Pi6Tb9DKjJYdiBLQmW8JLKqUmELpnEyfJ6qd1Qtm4hmjL",
  "key24": "3rHYcgvQFgizup9QJVC7suCuZHCArkxdnC9MZduyzdD946i82hPqWWuDyJ7o9e2ExBchm5HBMVzDPUgiEatAjyVR",
  "key25": "5AnD6bh1XDzwuEvfK6wmDLXAborbxqUb1A6aoi4idi1brQcm2nsuTU9TuPix6dhebrbManprEsJfvYF9RShoXwmr",
  "key26": "uMndCGE6pEGWDURqBx5aY32AoDDkhyNQcju5eeeytt8npS335se3QHUwLSQyBw7SdPYTvqzxrZfqLtzkRmfXESi",
  "key27": "5zKfrGat5ESLdHt2UWYjHqRCCFjqteNWBTuCY3ANnELSYVcJHiVVEsVk95fSXoRzKCsnBFm5P9sk1xuuSMQEdkir",
  "key28": "4DnhYrLZNLxjbneEvpKsqfxzmrnBxDbg2TurZYypqaQxoNqmq16a1iQnjDmf2FUP25dddBi1jfTFJU9ScKd56gpZ",
  "key29": "2M3CKa85dqfNHHEeMoj1LTNqLknwv7C1J28b4cK6fohpZA8nizyoD1Qz4s6iEUSMaDQf2YRdrtgwxY7WT8yZxpUS",
  "key30": "32Z68mBF8Qz34JsyStksGuhPMuPfR9jV19s5tvoQAUs8xLHVpLYsLnp6javp1KtvSJuaVY27gHMhtePEW1ph6L54",
  "key31": "5jcXNX8JZ7BH1idbqXjiT78w9ayAPWwrwsTWzukTFutsVjgkXRN2M4SPv5UTjxgydXbJgeR66DFtpAGiyH6jaHfY",
  "key32": "3CpjYwuP9LoZVoceNMfHkga7bStX8QatEPmmYXZeDDRwZST2pu2AmC1f8eoeDE5cEARwQGn2knZMofTtXdWsttx1",
  "key33": "393Wpf7PA8YJL7kiYh8dtvCj3QbBD5bniKU5Nc8i6fnpNYuTEtqZSBB91UXiPg9KZuTPppTuF1NqeEURp3D376Q1",
  "key34": "UFkfRYg1ndgc2HH8NAmsDbYfAvXQF9dr5D9gu2ncN8SUp7gbcfeikUjKJErKT6TWwMs11UxLLhZm526749u1439",
  "key35": "EJRyCazGWnbG9huZkx4UfTEKpcuxCrAH4fCXRCsEY87Dx5vTa8KzNQcXfn4ohShxiBPJA7XBjGMdXPi9NWkCECA",
  "key36": "2CpM3tZ5BwFxqj38VggrS3PSPYKbDbqPTTpij83wMgMapCg5NVZsEZhGqrBDNB5JgYgAH2AtUPVDcjkBFT3oztzV",
  "key37": "2c7EMQFT7ZXghQqua2WCZT2bHyFrNXKrTijAnJPhJGNAzVaup5yfZApPxDvdyiMabmK68Zt5PL3Cb9m6aZs5txhZ",
  "key38": "9y48Y6RTnEHCJjMng88hjXGp9FsW5TStagYthH7rPQdDBFycX6MZyRq8CGevVTX4zyE9gT55H6a8YerXEj2rFsa"
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
