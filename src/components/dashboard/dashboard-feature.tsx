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
    "3BDSVUA93MWNff6vLADtsZDtJyiETvxq1zTkYgepMDsSzjiPymkvQZTkafmxB4UnRTVT6Vy1HAMANVouChdQJQcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LigGB8zaMdwyRr9aYBP5bWTXxk8dk7taHNL84Xw2VeSiF5V1UH42EwgKCffiLwKZZRrkm8pesECbFQBVSmL7FG",
  "key1": "3WSmkpXWqoxqN2wZFgfAwJxuXr3F2YQ1GVuWsFZvaUt3D1RKbsTRcgTG489VC1EWah6EnAAs2k1pAMEAhu2UuqJh",
  "key2": "5gT93xdF7fE3vrTzBiebpoxvvJPKxB7zz6q2VafVWw1XKE19t3knAVC5m6XXaUiwSg9CYKmSAdfoKrzqmrkDstZX",
  "key3": "32qwbW2iPv6Cp8u2BtHZZCRjgtY1cr9uDSFweSbWfKSiE1xMLj6D5Qfecd4kp64e8Me289KwkjZhZW68VV2wPzG6",
  "key4": "4orPFxS4NB9JT8bUAmUDB9iE5VJcrKRVapadX7Akbj2E2rPmuWHoQJrKa5ZztDit9Yq6GdgK246yFZ2YB5ZEsUDF",
  "key5": "5rfwSgeSiF6K212by66CqyE7Ydctd8TtFiwHJc4BruuKQJSbVM2ZNTniYuU1f9czoN1td2xRQdsGcZHeomydjARr",
  "key6": "QACXCBob8iSdFd5d3DG3pRTMPt4CaEXuUFVyaZLMrsvXSmH9aVmzxtxZeHJd3cWjsfGtiHfuj8qsmgsMk49dj9p",
  "key7": "2KMSqEpgcgNha78vYPJvad4s55iXGEMRa1rrsheVaniAWWHgpVnyq1rtCMstNaTLvi775k19Z2Aq53xUJrKW1NzS",
  "key8": "z4Em7NUFSpQUrBeX9XL5yYVNHTHkfioPZCaGKAFvSFYwDQ4Sk7Ux2a1hsR3XWxMUdt8Z5hm1qdXMXPH9odx1CJz",
  "key9": "4UruWGSTfpFjjPcisFHHhoAcR2dTLFE7NCVZCywJQTQg6ALByBE1j7uZkzHtZJ7KVgoVPeLwNmNxuCwZRPYQXbga",
  "key10": "4i3ifBE7y7yswgPJAj57hCrpVnVXwso611VrW835c4AeETAHjCgZ1XoQe8AsM4kYr3acp3Y5XMMjyDfXcwPFjzfF",
  "key11": "57TJKv8D98Y8ePURLN5i1t5by78psTCLHkMznTgtVG3YGVAKZjmZbg11ifskro2MDSo9Nappp9j1TbikeZr5PGjY",
  "key12": "3w5AgjPncoHP42hUgvB34mNmGFjVNJEEZ12Y2o2kVoxTDsp5PazUdtiC8UxvkR142vaMLEy9b2zBxuTiDfpzCogu",
  "key13": "2WiKC6GcCHgfEvZsMUPdmDeeRrDJDYpQhAfg3r1pTQyqpJLScJvy568m9HxsXDmWNGS5rMiAXyz8AN4ccD9g727n",
  "key14": "448zgXsKReNrPbxsUjnKtarXicvk4VfT38kEfeoP4orLdmRKMY26yYsmathBfXnMk87286JNincZv63xiV83PmyH",
  "key15": "44QuFTc9sy9WjVJe1kofaGkN6ap9DE1377pP79y4Tf3DhN6UR1BESCV6JVkzQbHNsGnkgN74WqPptpvrTZY49CGw",
  "key16": "5gkRRAs1nbsVH1iaBd66FQxd5CpcipLS1WS6a1cornn5U1itSUu2vTUXiwdiTQMaH5iXZdM1eJekL7syVH2FSHPe",
  "key17": "4kUSdyjeyc3sdV5yeY2NmxF7Lu5hjPkafKpURH7GUAhi6eJvcytr6chW7Nw26c6TZrhbaoKPawvoB9cCkkPDb1jh",
  "key18": "4FpVZGAQYqUKsXoNs6si8yycKU4kyggXr3CULv5mbdmFJaT5o4TpjG6ZtVRyQppzPVXBCHupsUUfBkbzzPLJcf4o",
  "key19": "5dUVZUit24eBgVsoWzmE9HwqM2W3MfRYcntMN1TYYzzWdjGVJLc1W8DhxTGg3N1psdS5qKKRcAhhLTk4RuW2BRE3",
  "key20": "UebciMDKN8cRG7HpUYwx3TrXN6VymCtkWiPDU2bE9tn79MLvckbJw5A18wCR3Ph7zwm3UAK2CQgKnCAtgWS2LNY",
  "key21": "2vnrBvm8EBn1kp4x9RWCwfk3f9h1tQG4h9FWsTtEyt5W1zdo49j7CQKZo78m5k6HNkrMtNgtVRW3MdbrDr4FWfaR",
  "key22": "2EsMZoE3A9u1E6GSMnvRDBkdjd2idwnEe8w6BrAbrvF1XfTqqBJ3GFjBon5AWFfJeJ8n2mriCpuHknCUD1i9QGuP",
  "key23": "bPCeUfjAsm8sPA3NBWp9PKojFcVLu1pMDBmHka4rGjy3fq1MnhihrLrrz3qUuPVnhrtPfCti5KsgQGqB7FbR6mr",
  "key24": "3zd4xkjhEZt9TUTwsvL7MEjhN4zE8Mwnk1qB7rrDFziC2SbAWz7bEu5DHjnLZctdakbp1CR28gAW7HeY8sJT6NRW",
  "key25": "5Xwh8uUBLVdjzb2ixpR5dA2wq2g2brXxYWQKU6XNSQANnRwtnj2vVTUnyLJPMN44NmQTae6U8ovRgknUuThSmqXg",
  "key26": "3dC2kMmpLk4F1boDYJqPLjfjoPrQiwrwuNGrUdDELrhYiHTnJUiBFJWXdsHUwhM2QzbJQkBKvH8kuB6JKwPvww2R",
  "key27": "3v9fR7FqA2FGNhTidxj6LpxG134MpYUyPkde3Jn9dSRJLpJ5QAZsBJ1mD6VZ1KEEkwEGGwWt1nyibokG28gsjteo",
  "key28": "3X3ipaNBGeEZxFasPT5VU6vS24UZ35ByryNRzg2sRuekSeC3qgUsSppzgjxDUm8VqJ5NGrnHxpWgFVfnQcydMv7s",
  "key29": "2BTkpSbJA2hD35xwMZSGSbXDMrgQxtAfoCA8CF5xx7ijaPhtnw1ghVkMT8EYuo2BrdC29x4v8kcRjeXg7f3raLr8",
  "key30": "3tiG4xgnaTGFDS33erC5G9894PiS38uiStFzck3E7rQXeo1JKpNLxFA1f9hMoecvWKGGEyowY8k4q4tSWVk6CV1f",
  "key31": "4dsyRJWBjXpMY2LUYrCR9sSmdZJMFk3mfxMW8hybfEZMpQjHCPwkAQSQ22g8HcrokPMBnU7Mbs3T61Z4pjvWwump"
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
