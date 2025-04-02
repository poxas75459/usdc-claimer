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
    "4wHzsPYCZV8YpKG4F1di1UVHuHysqXpPsr8cuoxxDfvV3fHSt82hVpVGe1tMP6dMTusuTmCZqVBxpt8bSA7HDc3C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5if56fzBR8LwwDL4akwL6xkFzwcpVHEo43okhXWoG3rpmoNQssyUQUicw2DpvRFrnUP27pRi673w8Afav9E4Yk",
  "key1": "241kQCzcxtpTebDiVVB2TEpaamEzprdgWiLduqVssN1HGYsKqX5cbHjdWb3wqVcTGjhbn5AEeSUi3NjZX5zA5k1d",
  "key2": "2YMqorbBT4N78otpUkzuokD6ezurzAMw3GA2NSgJSrk4ZCcg1GnFLja9yUFQ8PJ7nz1P4zBRxyyTKkiurzcveNoh",
  "key3": "5wcDusDzK14DRb2XVpKgMdQqbggn9px1ot1HNKQTdBE7D7HNEBsPMp8z5EqHXReSC7VMGkYCTxuvjkhRtZK7HZu9",
  "key4": "5YCquhVpB2cbFVj7STKZQ8krVmYHSx68RMzacuMpdYot375MmK75ti9CdaFAr62t9ZMVLN2ttiQv6Y9R3RQoPP8P",
  "key5": "3i1KAw3tDo4YUmrcWPxo8d3aB7SZVhLH4r1e63etb5vNCnX3LsuowLYcVqXNrCstNDJYVVyxcvgkSeVw6ENf5Abi",
  "key6": "4TCESmRK5N45gt8kxqJD9HFuYxDGCe2edcH5vScJAsWk8Y6TNxoCMh39MGZ4UAcLDqLBvxfnQmV4nFWQZEEbHdvr",
  "key7": "3J2Zi1Mhd8A6nb7xLkhktXLps4JK2puXiXSmrpp2frFFpL5zWBzfXtEwGE7Te2LKAvQw5Eq9Qajcm7cnpxrpdc62",
  "key8": "31MGatr5QtyYdN3vWsgAGpRbAR4Qp8LMg3vHF71eMSRdBSgYAYcmsY7FBdJscCwJ2pdwPoDG3ngQzNFE1Dms3TyP",
  "key9": "5Fog6QiSHsagvL4YJWNmqXFcMAySz53JtByXyfoPUsUF4HvTSoAqHeAtFvjxkqXL3CVZgkQzecjPQaeTaUSVinBw",
  "key10": "4Phrkmu4opqrqKECSyd2c5AaTjX2pCUazavkf8dkejC2L6kzpHUYWSNnJK2gMbuNkv1YPXN5mtQCHE8DNaQzPWTv",
  "key11": "3bahMBxusi9fef3qNxKvE4GXVJ4NGY3FsMNV5C1CPwuYv2WzZAV82ZGrPVgSKv11SpQJ1UPGZnawEUcC8BhF7Azs",
  "key12": "5x8bi3cCh5nrQgQy4NKDWjikay9mScQUJvxmdbLc3f4u7THirrE46fK7g9kpDMq22q2LUc8F9UT8aYFxbFxf4MSm",
  "key13": "5HDFpF6jN7ALJifxWueMYQwtXKeB46wkfvXfuRN7nPbbFN5L6SjgqNoSadfjKnvJFRsCNzsDAd5jkGAR6sD3vMvH",
  "key14": "2e4ka99RBhLjNxJW446eTxdufKK84USgp6MzJGBLekXAsVhtWqcT7niJa9a264c5szpyfHjh7G23DzEmq1FVMyBU",
  "key15": "3YP1zWjUiNLh5SSc2vm9HfdPwi3GJwsrmxA9r8DPt243L2kvvGBciwiUZWAQeU3yG5NNRccEip88NkvynmLkd6ik",
  "key16": "2WM6GR2getW8b9DPAKevU9GunMxbddkyY4bG6SkgqDPk4CCJyLxvG94moRhzSysV8ViHLMzJzhufujzexfeP2wDh",
  "key17": "2x7Ydt4u3Pe6y9Cnag7Qj5pgbw85dN4Sis85ru8MpFNGqyeXfz91FT6zfsNENW8F5JsUaw8FoWheN7RXVwyWvLzt",
  "key18": "nC3bg1seWdeo1t8VTbKYfnZa6LLX4n5cQRmHjC6pfEek8agGFvfrn8ZafnzkpMAq3bLd75FDLHDKFPWxpaeDydK",
  "key19": "6SNDnH6TCuAkX93d7YunZrK582EpPDfbVrGo2Hyx8H1i8SZjFM9v5JGTS3xuSKUMUaC61PojVaZAWsSgBwK3Lhi",
  "key20": "5bC995ESM316oG5XujDfuz3ZRfsZLWp2ut3MmQ7V876fFV3m66akFW41ckpYbqwz6mXNGonjuEB2Ui3xkymBGr1T",
  "key21": "3hx75neMYVdNdbjBQ44UmvwrvWgECKjcVi2XCzstNq5yTmBHKgWngGSzFUY8WKPyhnHGDYJTeNjBysayUw4naouD",
  "key22": "2VWpEqhSp6nRPvUFcQqu9BrYooYjzhpZFzm3RmtzceWVXtCYKRFL9tAUBoRNWmJdZTG1AuYXgomXqvyJ5zP7885j",
  "key23": "3Lx6Q74gbuHWxjWPv7Eb2Ctdy3wNSTYdZB2yuGM8swxh78ZFxAemmUCAXH8kjrgbse1QK6QoX9q3P3n83YGL4pmm",
  "key24": "65hQB2RLhzxXQLeKERbpJhnb1mQUF1se4qms9kpDBs83rGE1ovoJwNGarBZrpNKLiR6oSaa7qr2jEeczGQUyMtsq",
  "key25": "5MinXdwNzJbehroboq8XoTdUVLpHSir2opjhcmroTQUUM1KLFnifHKF99X2BB2LQznxNznFoBLjDHyikmbUKCbEn",
  "key26": "i7MAM8GF2GMueKzKESNdPuGr9yzCuVWVM61LPUSDQwKhGwRuKfZXNetKfM2TU3kbj285x67oDLqgzK5NFHJ4AqU",
  "key27": "3AmRtuoXYwFGNSdhb5agmMRR92tfppJr5abLQwEgxrke8iDiCyvW86wwuS1Yo8Qd473hVZi31VuGHdaGgFFS4PcE",
  "key28": "2NTem3V1s1TT4N1wqKj19oWTN84Dq5TYciGEi3HeNTFK9g8d5xbeV8vWKo5fg6oG29uswaixnNvifUb8aiabtYfX",
  "key29": "5b9dU178xvbBFgt3whrnfh6szfxcjsPWYANnKFwpXFdGTRoqGRa3GRFQ7VQWUADmwtkKuyvrd9N4Lf5Mpt2SpcWf",
  "key30": "5nN6JrVWEFBqziwW422Lhk2WgoGxNGmqZkDnAgbq1B2FK7WwbS1LNSE1Z13zdPPmauMZSMHvepprNZZwy9P8k8V1",
  "key31": "4taRL2nhH5tNFg2ZEDNm4QqD5SDZXkpwrSxmvq68VaTZBCoJjjdyiiqV9ifnM2yGXQTrpb4ib8Me54vUsApubS43",
  "key32": "5KhrtGqPdJdS3gnEBR94cRrUL1TPYcg81V6gBsAdrWy1zBjufWM99veD8vtV2pTHuNrA8fZLxLfu4vvhyu9J7iq8",
  "key33": "2ZCtiXc663pKVRGKEQHY6pHvMP2izjdtRovDkhJ3pjz5X3rz7hepM4Rf7Y1WXETUXNfVHms6AKUnyJjcsCxENW2v",
  "key34": "hfchepuSki47qrGKpbeH2BA7w4vcHyy3Fu1ma349q38dL5E1onGze3NMSotRkHDhjJ37r8ZsqwJ2kDMis6CXUyS",
  "key35": "ZL8TYru3nNMypxLcLi1PBmScYYbjqeNMz8G97sKJgzgfwjXTefPwxJncg65ahoDypsbynptyLY5rYbkLm5vusz9",
  "key36": "48vk6Q1hAgNNXFaetZd25jX5NHJeTEf6i6r9SsFMNsiKQcGjQYUzenpju8fwhMa31FiPJnh3DV7VzXDYR1fXYY7v"
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
