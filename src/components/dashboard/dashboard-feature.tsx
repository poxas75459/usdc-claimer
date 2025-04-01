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
    "hnzxKqxQ3WVijGQ2L9VrxEQ3bcrqAHTFP5r9THkvZ21WR3eHHRHEFACVAUKehudyN5ZJE3Upphbf2NfJPY4171F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49K93D84PqvAVdWjpSSfMuDZLqJWai2GdeWAPzwXaBDTGGLx2kn7WEGhnD7CDxHgbasQLRLbkYFH7T9znvMAJKii",
  "key1": "5a1o4DsjwxLv2jxhyAA4dduJjLTTxVpfu8oYQ6Qw2THyzjBdASxLuEJ6HKrBGiMunypupUyuytTzJEViffqr3vCK",
  "key2": "5gSDgwYiG23URPNUnyAGLyBMv4ui3qsbHFNahjyT4mG62JZ5VY1n3j8pgHpVEJRvS15mJwxPwsZmKEVxwz3Qf7tm",
  "key3": "4WwaFutZNfSaHsda5zJhWKymucJYUv2jJh7ACTYCFaqtSqXwTYduZDp2ET7NtYoLXzmcWMkXseUo2yLSWquXE3Ju",
  "key4": "4aPZK2rtSAyHSi3gzM3zYTwKsEzpyqWvdrggsX8Vp2BEFbQNavfaLkRXpxi5vVQcdDxKfcM9w4EJ8aCgbKbGXFJ5",
  "key5": "oRSPssZ8ZmXgbLvkeCp1iWKJyt9tvXoMqSMEzXxS3DQbq4wvDCdyd7P1rqBQEDSKVGt7UvsrdYUaMuLs3t5Bkf9",
  "key6": "3Rv9r69YZ81K8uccCw5QKVPC1L17P8RgkCS5nqdR71cpKYKGHTdU8AnC1fXzLAfAWvBBvxke9UajVjzT31nwCKrb",
  "key7": "5U6bnpVnkBdZkgLiS1P7WR8R21NNVX57cPEnxXrCGNv46xm7PbzN91VViwDecuNjwZJ7fRniWkUjJzj4F1kGFahc",
  "key8": "4xMDoyw7XtDrCaetNMUej17fZ2LLgAxyL7Vosmu2KN8wFdHLuZ85WegFrMnLA3qDbh5zmYb8fs4hLcK1PQ6bFiv7",
  "key9": "5DMfnytsFxey9npUjesHxtfByjPqaNGKXiUiiXnKzvJiRBcqhdCEFtYueN54ThExBhg98NFUCkM3AMperomV3q2A",
  "key10": "5oVFV3Vqu7CPpDWxMm924kYEvWMP5LCoykvoUdCH6fjcuQBdPhHveQ5wShXsAESqSA9mpfgajGt2b1wbVhDoLriW",
  "key11": "4h7xE7dMpncChPk6nQFfE9deucnSHKuxKAAPd62Gwb7vRnamyqAa2eetTDmhDxkvNrqyYQ9BfJQHREi8Quwar4VP",
  "key12": "2a9SsJ1k4bjqvupXzu6g5khyt9XY5qfteU3a3PHzXDopvMeCB26NiLQt11gwoNFidiKQkSeUAYHcZ14gtZYWoxAn",
  "key13": "2AJMkWTgQrqje9Aoo7o4QE8qea2j6Xzm7SJDLNEg2RTkBCSqJfX6h1PXghFFbps4ZaMzstwgQFeF2xT4e3fPt3xD",
  "key14": "53KhTHJDBmWno8Sjsm39maw9RKiCRhFbJXyQ9bVwPeEgqQx6sPH2Tm8UNvceQ1JuYDNwKPC39o5sPe9WoisVFNNY",
  "key15": "4wqrt2xBrtwY1ytoFLyVcfLNqHweTZgw1fNP46smQZkBhcXYPGsD2oCrrb6n8enJkKKsK6Rq6HaPYadKUrZzHVxj",
  "key16": "vHXVcbCrNxyeUQTL5iiquxyK5BBAqxzdntyRbMSKWsryuiRJaxZSBKfGkea7cL1FHNhi3SGTRpv4JesjhUKpsjq",
  "key17": "29oVofWWo2FBTufi4gSautV3AECyUxFpAsXjyQUPDq4XvBj1AUSZ4Qcp5WMmCm7zhdwG9eQDQmZM2wDtSTePRA76",
  "key18": "48MXWF4Zi477M9XYWNPgc65tV7gMbroCyPjAw2RinrtZJ13UDFr7vKq79XYyUSypT7aVF8ca9mUpUedAqiRCbdra",
  "key19": "4yVYYyP2FH8uvB6HMphx5H1diAFEGC1hqciP3oHvuz9oash2ckfniivk7VYqUyXiHyrATpw2MH86vBUQ5R1W6RAw",
  "key20": "5wgcU7PgCgsBDfdTewmAKLGk255Jtk29cjndw4dwg31afqCoHN4k46Nqpom6irmT6CXReaYtFHixdgDoTa2CzRHB",
  "key21": "28RMwkqWd6F5TQxLNgtDFbuH4T7caUycUJRwtAKUn8GLoULp3jhJ4wSgi9NwhxQCKoUiVvgomtLpnd7mUSRyvro1",
  "key22": "62NG7GceCuunMqVMcRaPDtRgZ1nZP4uwDsRuRLc62S7Rn9xfiX1jW7A4WQN6tyfENKw7a6qZqGNm4Knaz8u3sNKQ",
  "key23": "jkVu8sCXVULk9ziYwiiRqHQ4WXtMZ9M3aMst5DF3fyKiuZbCofqbWgcJsVtEBfFqrX935Ezbhewa6f2s7Anbur6",
  "key24": "4ZH7P4yYSJgP1DFGHDgbU1JRfTKsDffqw6SWrdbyRJKwvWBzuo4usAN4W5Z2frfY3YZoYireKhbDUVanMZhYYFmS",
  "key25": "4k6zBuqgQNNCuzPNmKZuL5z7eZJg5vEpGPwBLJXoJWpXosEXjzMEnbrV62GRTgCLDXVnCSsrFZDMFQQmrYd89iTq",
  "key26": "5DwYQ7w4wcgP2iiK7njDZdDYJwk9aLbtEvLMpscLUJYmcs2MKGZkCi4aciAXm5FBRFdt1srkoHkKyfujsExobLwU"
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
