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
    "4bYJ7KkmYSqYZbdmEaK1SqWBnniuDKpuEDXEWZUaJMzweMTSuTPw9FfV4frYmyQdvFovt1vT3PoP7ZN1ha2F6kpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eT61zgniUTH5JC55uvNj388KpCvdTWR4LtsAMdwcQSKBgWgz462oiVYYpf7FRNBWxqet4kj174zHrh8rtZ4jKwq",
  "key1": "4XjqEUcnwristFmXWKtAiwZWacqWoSBgLmjZe2t2Yvg8iUYXKhphHZnHJ9o7ospp5rWiY25KpZ9qBr4ZPyZn1cjm",
  "key2": "5A2ND8yyb1wGoig5MYfvRH4c8dBoF6Ue6fmPJC7H9fv2NC6m19aZkuh9uzajD9DZaVV2g3BsqA5CqScSpCyB3vCe",
  "key3": "FBxXbc8pUYewrDBnAgZAFQSuADEmBjt2BD2ZdkvxHSvq59emkCXR6vffkK5bKG9hkU6HhtpwxrFCsTVip41xo3f",
  "key4": "c7Txakm7MnwhkbKFDVrBU4b8ALeAbop2RJWbDwHKbDMgRhbaGzBBaYi2EP7nG9m6xmN1n9n7FrMMrYK2SqqcPTo",
  "key5": "2yQJaU2zdaRameh2PzLvPCRE4kkXCie5xLAVLR2ezBMiNvtng16xVyx2LTpwHherJSWZd4LBY1oE7MntfHRtygdX",
  "key6": "5piQphmwCCLbK4dVdkQUxxEwZLG6qmAjyd8GQazt7bUtPKgQUuq1vHS3iNdin79mzxyqbpf6VBzZ9zMo439D1hxV",
  "key7": "Cu6SgunZEck5VSXK7X7vm9Cpw6JH1NjrtB7yBPSQjGRVV9JTKwYfRkb5zGAcbqTD5uR5DVB6Vo4YwkNay85u5Jr",
  "key8": "3MK8AhNL9BPZSvabgK31Fun7odWeGgWxFcx3g97refVKHtV222PAANqDhnKN3gpojZto9o18ZMPnkDD87Yh9SwDP",
  "key9": "V5GcaA1oWsvgiSfrUcCqNSB2EeHrcckSdicgw4SbRnMJMY2YCdvAjqAxGfnDnfY9FmoY1Au69njrrAEvueWLpC4",
  "key10": "51DwGLH7Qz2f7LBVM9D2rVeyk8Ru1k5DceqxmdsNkk9hoQmBXto6XjpWarAmRUSaSy4b8dpfWC2XzQU3K8dEq528",
  "key11": "eZc7HC27d4GCXgDLLkY2MdMXWpCQqMJWkU6NYCTUVneHyY1h9hGkmaAp5DaPgL2i7pzyexPic4LdZrtRo9AQvXz",
  "key12": "5iHab9SFzK6Ui24S6EigaJMP46sNUk4NykKfuKstYXe2yD4CUqyUrE6jcwvq7aYhz5a2evpEokVE2ZCxp7qJdEsJ",
  "key13": "4qSqJGCEA32squCHmP1eMBVzvgu3pB7t5aaQ9cYJAbYsCzhn2rw8WmbEDLjSiQ1K783imnpKcFDxm3XXzCrNCzAF",
  "key14": "4juVHPXwqaPfd9LdvPwbymk5zKyHCbqozHEmiCBp8GZU7tjbNhHa6CFAC6LhV9e5XCpYFQVYud2FeNE7B5fiEgGh",
  "key15": "4oyxTG5CQE9F7m12ZKq9J9UCzSpbxHMFwrRn4ZjMcu2vg6jEa9TWRa4mM3TffTxSTMGfaNidcrAhCWtokympwn7Z",
  "key16": "22Mki2U32VUbbyXHtPSbLzVfAVxe2YKEL61CBLSCihwrnWHv6JJRipAQVaKzmavxVswRfywRWCac1GYQtHcBuRcR",
  "key17": "2JSgxYJeRrSQuGAFbAivkfiUV1GoJqcwTJBhAFjSPc55Ja7YArnicwwwH3zVV3o5H9HtwdREHyYHpGZ5Cd1HuPyo",
  "key18": "5wVniHnwPDmBRrecoBhoYXrC17Zynus4GTy2NvKm3yQBW9dq43EczAKwUNLFCtj7qE3Vp3CGL8iKiTfPRTjPEskQ",
  "key19": "2qcMDDWWpaCbqZSJdbotUEH98D3TyN2MYhdtU7qNKxbgRnqngsPFSCdmD1asUsYoJ5BsA8mmTDUoqDxnRPJtiGrB",
  "key20": "9TrUtioyytCAESFuMDuhHTPHGD4QNX92pmcatCV1NLMoNPKAqJfSc9M6EJJaRh9mwycMU5jUYMbXZWMyNqbScYG",
  "key21": "2vgDtFKJwWodpZ4pGtngJewxuNrZWZRSLyzJiRuBvUZXJjav2DNTKq7fMY1TinS3nVtC3YTxVQkFT13ze6GCvZcr",
  "key22": "5mD3aZh5yJEfQfLFPn5Vue7PuxgLsEs5QCJ5qjrx2uXDFHNaFt8CXnEP8wyEj59Kqhqj5wfJXSB4eXi1sPaEJU1W",
  "key23": "43UPXvfmcRfdnj4eXnqkBRKCP57PaJSpk3eh63gqGYdoMQiaoSmPGG3sGGqnufLUajmppy2qrWigC8jwJfhSzuCo",
  "key24": "5rkbFDshFtLXYg43R4yaM9VSjxU8ai7jjBziJqkS47w4MKJHnfXrQUB9iSDZQz2rxN5fngTPTY3G1VANENRSdYxG",
  "key25": "2g9E3VLaKxw3ooTV1jVXZ3eDPsNxc8LMwhgEjUwLfHNSNRnntgRBViaQp3AFraFPvNCXgWf8esRdxUYUtw9wcs43",
  "key26": "2bvfTeHcZTbSx4arz2XRFcEqmf5qHEvn79irbqHvf9fauZZt4zickb73oebEXvRUwEp4f2YbJz7G95c69Z5NAAkX",
  "key27": "5vSkqEktt2prMyBVPGoisokqorNEWqy7PiNGMCSc44mnYpqJfkF1TdPMHtYxySFDC3CHQXwoXKdcWXmJhm3yBcZM",
  "key28": "2tA3pnDGCMrx6XYwmHfnh9g37RjpUPL39wY6CSBqZyxX9fNfB473ZLgG98fiN8weC8BBZ7BY8C76JZywHZDiACqu",
  "key29": "2XfnodjaEmyma6ButPFhXRqWy3XBboTjdQbxvjBBGSpmo3j3RyiwxPu6Tbk4o3ycpnM6CfaztYkpwnwYeGtxM6YT",
  "key30": "4L5oxWoUR8K6WSweujHykctm2L2A1mTvLzcCNbshSM12JrT2cv5wFAfM51rxA6faMc3p1pKyVwSPzKh3aRDuSUcE",
  "key31": "bBSzeetgtwvzY5aLC1j77C7jSErptaASY7EioGa4v7S9xAs8nWuhDmtj181tLXxV8ipaBUw1PZpuq8x7siybcfo"
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
