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
    "5rt8t7RZkQpfv6ZExcLWqjXRmcqEm8PM5ecGy8bJWffik7doV7A91Tmh8qWrnJLZNQseyaKwYPYB1nmCTpcskPEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7A74Bhms3fAMpWV7i6HXdm6uYZW2pMKbDyfQpoCJgGGnPar7Bnps58iBeUzz3Au1wxk5LwYbr2i9kg5yu6rU9nP",
  "key1": "54kgwkYQvR17LYtRoiumPE2y2a8bW6xFDTLhVMbHSNkf9aQEbT2QHMYyCQvMErmWcvM1Yaa1uAh1GyBG4AS3ctBL",
  "key2": "4berht78izbvv38iF7weyApXeadK69AXJMFv2j2rQTDxvMP6vHjUUn7wft8asTDMBnk4ZpKQrDvbFTJK5NpzDr8Y",
  "key3": "2oqAdrF6Mbu8kbb158sjiEUoPron1rvEEYHodeCgE5PLSuv6BZSLjDPEexoJAPaubFQykPW3diHQjt69S6aeTt3o",
  "key4": "4BwU98kg7RXNRp5CY9uPNAzLDmVYR6iPqY8nXPGtS7mV4BSiwJuWZ5XhcsxHB3U2rYXGQ2gHAd9rPDmZREs31ebk",
  "key5": "2WgLfX7vKVBptVsS8jCXhwyUogAMjXCWt1D9uvec4jns3hYXeaYdAdFWVsdogSNxbMVGgu5SJkqTopmatw4KbxvX",
  "key6": "AGgGZHPrh3cif9TGrdDFRGiUSptqC5DGnVeZGEFHX8aUdLisP9uRkeZeDPxwAS9EpKPq4ygCNqHGvTKq1xuQBou",
  "key7": "5y3aZMg2TFHjf23NnpabzaZxxHjtBx4UjwGFRtYp4yB85nvEziVwY7DFE9GDdverWvrSjSCj1aEfmMNLV74qZM1v",
  "key8": "3ocND52kWjjVSqxfYQuK1CvM8qH52qY5Cg6CfDrEhyrJsE5gj7TyetBKQd7vGGX5GufuVH5aZZK6oN9niqqzn4uc",
  "key9": "4Zp3KDLY6cwmBbs2KQz88gYGHcd8Q3rbWqqrMJrTZzX23D2YEtEuwGdSgwaTsC17X6j1y1jT6STHbKrsfDpbUq4C",
  "key10": "31py33NQZqXhQ7MVXaUxL4NFiCKFGpfPUBj1yskbSP1KzypC8xGuErrVfoVje8mixYi2zreoPVfCw4VUmHXvngfa",
  "key11": "2uwiT7VfScEdCsv5bicaeNSoD8X6HKCK2faLT1ZPEZ99f6VPiqs7bLJW5zLcP7s6qf21GTKFF188xJp7RVbAJh7Y",
  "key12": "54F5bssHLMW3MNuUYbHX39xW82jiWrPfnVy7jayqZwwg2pckoty3bsYVBjgLBCochiAQkFL2Wc8yVL3GseCG7AkG",
  "key13": "3XVHK2bN8KsHMzYJNLFnmYdhGoPPNVzVAsuwpFXVUyKV6LfDEmFbEJ9Bb9JMzkTSR9tekBBLZ8jPktw7dV2JjXNt",
  "key14": "2UTSKpSLiAU6XgG5XSqN26RBfiMWVu5fiwMQgj23cknwc6qdyZrkhnUqu71xZAGPdzcy5GchEmUSZqdAATiLCgSs",
  "key15": "5caqhwRPD2KeNBJ9WnsL55UZx8LCoZ6xtt5TbfBi1kaQMgUbzoEYGYHXF8RMxv1ocZrWCVbCJ3YGo5tFhPZPsXTg",
  "key16": "Xbz3HCDZKF6iuLE7VX2Qz4rWJ8nEoagCstMmiqxwmTVBh78nP2Kx4iH9crZqd7cPA7i79H5RoeYAV2gMhhbdD5W",
  "key17": "pRy6Wynmuat9F9mySP5dMDSDN8BymoH2d4EwH3bRSuZTzgeLfLWFNP6JTrxpTSb5xaRgQ4YhKbMruD4AtTsr6vZ",
  "key18": "3gdETFesnsC4z1cvBrkCYSdSgZuHfYPURAWb1H3SxBHAGKPzWu5FhAbv7hGhSuafSNQTX3CsKUENhkqh3A8ftEv1",
  "key19": "2tpFno8S1N9fonyiBBVhLybKuNzV2zwtnUyxzJrKTdtayCbJPefhUy5FxU7VbEuaBULhE3UGV2izvhV7qXJqw93y",
  "key20": "5vQszzkYcmLKz8PxoqoksW42Zdb2P5HuspKgpBbyHjkb1YKfkZDZ88Mmi1uePdpi7AfssKhoLRtWSwF4a9XJx96d",
  "key21": "3a2v1WKNm9xK7pRieHjkbMD89h889bTBfXhDj3DCoN6mmN6XJGHFuvh3h38xqrvf13fmva1VE5AZnrNALuS5dLoa",
  "key22": "3EJ5g2sjtyM68sATrE3J7cdfidXiaKkq6hwYN5yJWGkD7jwrrHwTGjgC6zU2cjGVBBVd2D5onJ6Sv1mov833LDKF",
  "key23": "5kFpMjDLTs1N9eRHA6KsjfqfoTpwBmFxNA9Jjh5Mx4cEJfLL3DXUtSfRjXh8Q49L28xNR7jNg6PoxVb55beWSNAz",
  "key24": "2iQiSeC7UQNxjcz29XQcvN7CWrHCfbZ8StVDzrsZu523u43FcLmjtX7NPtdaHktpYhk2sPj1KenLPBy8FM6xtTnp",
  "key25": "CaJTeaLZ4iLanvQ7VVdoWZ9FXBw8TRJx4XsYoi6bFvAsSpwo5vGjpKEQeGVXSdu2xpJ7BB9mfXLEiM6HWtpamyd",
  "key26": "5MyF21QrWpq9aYR1939fzAe3MguvUsooaByTnvW6K4S7qyqFhxJhy2g8FTEnUss7hhj7vuoe7Qh3DqSwjSmbcco3",
  "key27": "3LkfXcs7hiraRyy3m4RaZtrU4h8JzvvAjyCBr6r49Viz1jk7HXnKE6ya6dS64gd2uJa4VwViuLnmRpL6iqFhm296",
  "key28": "2jGPECxs1cUx9g5Uq1BgRi4S4uqkgiUvHffpyQQo2inb2aHKgNgY9usKg2e3mQGBezpSR3rHyTfgjTYgWBwPqxQe",
  "key29": "5wq7dX8sY7E3AG3UafexQyQn3LeLMsinrsQ4jtaRgA5xBhFwRWghfrm2iAbKDgH5L2jsDXNc8g3KzqRa46RkGHUb",
  "key30": "4F5b4hoEzek2LMvFBrLmDXKXAxYbgVXZDPs1V4FdPsYZ1aH51BMhfucSMvqmbUiTYPTuH1yqfFXPTyEVyGFjetJ9",
  "key31": "2wucLivmhWF2eCRUHj99qy11iAAQ3q3gh5ux6P34YZfQfuhtC9cR9Ut6qmvZm1XKeDtMT8ejkAmcwqxHuifxF8yZ",
  "key32": "2DqNptw3DHE77yG5GgQUuULXHEFP6BsGTW5g3RZTdDte28XPr3vVcpEXCFiySiHP8PmzVGqHormoLi3Wy4RpFwr9"
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
