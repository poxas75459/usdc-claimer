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
    "2K9hTMFojDtewCzjUPNrdodXK5p6duGTFHzsC8qYVAWMpA21YPGh3RXV1P9FUpznTwYbPpTk2ix1RvzTEYvE5HoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PK9RMk4esyHzfEV8CVrbYBQoQm6Huj18CsfHieEiATC4evkjJTPbBnymA9NhGv618odvpeHaF3KH5WW9Uqkjipp",
  "key1": "3p881pRq8tSndGfPeXtEy76gduTaNqYjUhVKRXFTtjtCVTDCo7y6FZvkDDvozN3NGgxr8NDgnXffP3v17rfDvFuk",
  "key2": "3ecFY3iRbmtAffSM6tQEpDsCmNAXoiB6PYo8YULk2mSwH1dNJBGFHeH9kPZdQQS2GswrmsZ6YvNYiN1XRfenfgK1",
  "key3": "28fsfwnDxreGNTWQNHkac7ab33NqiB4J7n25YWKUsePyrgbmK87zn8XVcr9zD3E9VfCVo4kkdvBppQzaFaHwWhum",
  "key4": "3EBAyt9A3ejDdgqx7YUC3TW2he86KmhMEHuyeicLevgcTgVD6k4Lgg6ATDZ5bx2VvfG1pWHbY155bWwHPYZcrM5S",
  "key5": "6tQ3P8axQcM8vd6db2AkjGyP1bSqMTqP8CoHw2vUN7sSAV9iRdLwYUFuDttnwamYPEBiprZnZq2VRBYRGHPujwX",
  "key6": "5EJNMGyJWvC88hVRiEwVk7tHeSu4wX7woGjzeQgtbkWXKsJSDcN2BunAwSbiDVMtaZKNzdSZ2yM8dcYsoByzBTbr",
  "key7": "3zQLmZouX1M4bwYj12Zbd3pZwSp8WWRHQAvG7CBYiLvH8Rur4cMxNFnY1zmkg4YjKRs6ZfwFsUUNErPp5WK6xkYY",
  "key8": "4HSgTtDPeGuVfNE5xdxio6WRL3gnWb9Cb46fhQ1W1RgSXfKtB28ST1ya4LvmFB9J77HsdtPNKaGrqXgW2vMTi3cK",
  "key9": "5gD3LWYzY55dcoQVw1vdrm5mcugAyLmpUEswqvAq6Dvf7VCm7nibdMoSTby3h5zM6UXcQMZo9Z9wVLaKxmySDhhK",
  "key10": "5oy4tvrA5VgcBccvc8ZL8aJV2p22qBw4RWuqgEBUpu8TrRWRTyXjAdf9tRQQvc4Buv18ZuzmraPLcrndLETpraxA",
  "key11": "4krqdroExF8mMrAUap2qAcvgkpWbH9YtAvH3Bqy79NNHh7tPFWsXcbhLYGpQCNnqibr5U73tsaujZvVcoc34wWSW",
  "key12": "5Ex7DGNP2Ghs4VAaaC2z1rA1AEF94uwWcmvNUcXjox661XRhtcp71QtaUzkJxWg5YYW9eKpX37KDC5j6T4fyvrDu",
  "key13": "2jDJxT2waeeBViGdBAN4pbn1k9h12TNcRDix3yfA3KJANVEBRuKkbK2jWfFambrA2MamsX8iRDj7zQtDbvFZDbLz",
  "key14": "2Np1x4CA1ZtFb7GxqeHaGfUxT4WPqwjW7Hq6z9D7XmchLqqvohDdByWjC5BXYd3jLWfnpXsRXpHSPPhcNSC6Sn15",
  "key15": "5zqKzSt5T33J4pXGwD8gU4LqQLnjivv56QfVgxm33DRPTeNHiGRrE2TULmhxGrF2ahM89WPcQvWMSpW9oBK1Aj1R",
  "key16": "53QH8fV4XV41RLnrg4wN8QAQwrcnnQ13pstjDjutP8RJiMT2R8FamUgZRXKrHsy4uBq3DhuSahmiCBHKgCBpLSYX",
  "key17": "4g3aHeYhNLXcqskNu59Nhe21RtaqkL78Pces4PSDLMobqxzMcrXtFHp9ouUinVq5fqFbpwYgvDDEQD83657NaoVL",
  "key18": "HE5w3oCBjshQDFEJ93gYasegsXvbHZLYRpJNjrtrWenme94rpBaPeFxebK1BVcZaS7Tgy84QP3a1W5EXSyzCSfe",
  "key19": "3FAp2rUikxBkuvMdrmQAzjw4JeQEmG9EcnYrfsXiLmbixJQixCNgTUTitcCfcowRvPaKLZvoZ6Bj9M7CFZ3SGCMx",
  "key20": "MZEwD785rn8rFRddXG3UYHZfK5ZWc6ry74Enwu5fiipfeVtD5x14GKuDYqFkqycgFPPjKDeBaCX5sd7ut1n3DT2",
  "key21": "G5RwRkZogUoCPMfsZRYDrsUc1KdMXep77AbmfUJ5ThXAsKvkjcWWN432FSm7JaaG8SM2phyREhETTAEhPFnL9gH",
  "key22": "2oAD8EKQ74sv5yduzvVBSoq57pA3sXJbMhzUs4cPfGpg3mby98L7zY68J2EM1n1fyjMK1hj8v6truGt28LxAC1Tc",
  "key23": "2Hwu5hsZicXfYAszU8chkZ6m8xzupVD5qadrMwUkcVGwhNQt34huhDc1Ntho4kDtCWGiP5NZxdHBccHBhmwXE5BY",
  "key24": "5ZYrtDnmSKmDffQKrvUD99YNiL7jfTowQLY9dPUJvWJ1cofUzyaPWUZrh6mHd8raw2dJyq8zGFgHKA9131pnyLhy",
  "key25": "28WQvWTghReBH43V1QbaUNWwGYTFdDXouY83uxs9Rb1Vf7chb4mGwV1nX9TsSYc1r62HWPUf5cFyQ1AcWUDQtp6K",
  "key26": "4KAGozDNe77TS8VS6tHDBGGYnPNMRf6SUHxQURFbgo9ccEgX2sYf1WFMLkoHZ4X6szmXHhtH2sg1twBEtA3a5MoZ",
  "key27": "uGUeqozXfR8hz16BoefEWxhUrvWb9NUBae6WeHQhcZM3NRsCAak4inCYjT8dSV7wxHXV3KJmU2ixaFnN597gm4y",
  "key28": "2kE7HebYu1rzdvJnNxZysW9EwRykHqaWgHQteNLoKZU4AqDAXDbYPn98NnvPHF8NfGhC3WtDHQSqBciCcTbDN5yB",
  "key29": "gqRXCLqc7EGcnMu9BX4kRKB2Qhk1SpxwuEStfkECayq34egcGR2nr9peQK8Z7xbHJn79Mug7h5mXyEhdZ52zjNr",
  "key30": "2KmW6TJRdK966UA3AexijBUF41xQZTRicXXCXX6fHa5WJY4TRg7gxZpE2eVJ8qsH4RtfrWmDvbxX66oXEyjyKJwy",
  "key31": "25aq7js1jVSnFeweo4SCtArCNYim26QK4fV5mEX4MuhBjCh1GAzCtLvTnBxRDrQ6Cfut8jb61T13bGWc9BuH694e"
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
