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
    "2MviWGovxheSSEt4GW1yK5G2GbLT7eWjXjFgYjedHieH4H7FGQi7D6vagMxb2CpZGaYtmhLRKs2CRCbZrUU7hkq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJSvKX8LkBhLhg9gyGwzzLdcqcoMrK3HXwskXpe7BBc4oDM8MNyt8oe3o7c5e5U1oBmxTWHndYvsHkTyXhmM7aQ",
  "key1": "5RzXrg2971GzmpG2J1pn63oEng7eeEt4XfusgSbRXuTauNwQnxFVKdatNE67WoERRy9wZsPWTpPbpAPDesYWud68",
  "key2": "5mN5mjAJCRrqnKWUrWZ2PDBknEA9wPAaAWPpTTGFWLW5CdNN5XpJMAMnfnBMWCjBd2doVDaxV66W2h9yLvAiabj7",
  "key3": "2nT897jGxDohE6dtJjoUgwXp7rDiTfYFrYMw9CM5WW1zooKBbWG2eAGfheJcMN2UtrJW7BwikyhP5ydiRggRoqov",
  "key4": "5QrD2zaB5BVNjkt1Y16oUMnZmoLgXmpxf7WwhdjdTRRFHj24UTwZUG4w3RBxmYdaddaXaox4yYdMCNomcZNYXXiA",
  "key5": "2r2e57AYg8fZZLZpE4Pq3t342eexxvxAobSAxGRmELFphpvhSEydDrbVSqgWX2raPkFhQnWyAuPgnw3T6kJowPyz",
  "key6": "41d31hQpsmdh5NgEJzcE3nun6XGdqVohk789bMSFsWHkLcBe2FAKbSDBZNeNZYeazXxvx7QZfcAp795gesinK62g",
  "key7": "2ahYPP35kRLVLVABTBjoLcuCBE5JmNrqLoFGf9fdDVeMrBiDgdpA7d59tZH7Zx9QBewTkn1tboQsaLQLz4e5Hh6K",
  "key8": "5Y4ecSteGTvcfdBBouQspLLr6Pi91xCVTAZzunW1u9EHzTMpshkm3otcHLLv9JHFKfMPNbSh17wgeTQ3o5zGh1Ae",
  "key9": "2UA2FRAPsAuZWgNaJ75DidQ5ELPLCKhYroF1N6VqCVA3qzvYyfmQnf2QjoqhPxuRn1pnUwRDtGEee2s4FThfCsh1",
  "key10": "2BuFhqx93RgNP18DTHX6C5AvL23Y8CSQfwCs1MKBpGZujJk6WtX87hSP7kne8riyjJBQKrE4NoSD4nFCejy2gdyD",
  "key11": "2Z8kdpY4HiDdjWPX581eYHjhWgsDGyC1s7hUYn5AAQe8gZJH7vAnPDG9NjEpxC2gUBcRiYY2FjKJvoyNBq3PAAjs",
  "key12": "Qqgew2KjXU2TUHVErbnc32CgVg58ZTQpVuXbVzHTP1HAxDT17QH8v1eoZhmL7qyrG55gXe7QFcfpsYYRKSFdSiV",
  "key13": "4cyqUcw4DWPEW5DJF7Xuc5EGSFJRw2hQrYHnGNS7pEW1G7DzFkoAEyHM7ZZqLZDgq7LdmQUCk3447HYLAYV4nxdK",
  "key14": "5FLdtXeawFAkRM3QWbWTY6LSJGpLfNw1dDVecC7Gm3FXS7z4NYWzPjt3beQtjjWUL2jrru4ehbjiYPKDh4yZubxK",
  "key15": "57xm1pT6hSLGNiX5EnnyJUSVqtvQFwNHQi3snbRAGfmMgeYheSnTzxawHBMoVDCjsWH74U62mZqXxcpwznHLu65s",
  "key16": "5tKxkUg1UP7BG4UdD2nj4S8pWKK5LubZQ56fHYJ1KMcDeC1EFmaGjfhK9V7JXu4mTkC3ng5nYs7TMLGmVSLrLjoA",
  "key17": "xwwJ5smAmTUFRGueio5ARQ5FnjxvLzEud63oXWfgkkuPtS1x2a24QUjKSYQyMHEAdJgJ2U5ver9q9mahaKuKb2z",
  "key18": "ZQviQkt4rmijWHwmhtRXeuVYKtrSDCsbCcLud5orZWwndHcnr8hGvD9fHN9e1yiwoFR8HLHP4ZJMDxW34agEKDS",
  "key19": "aBrkTfSEZewUrVpXm3bW1BzhfhZLRnjn17RYNDqG1bqgNovHA9vPNG9VBjoDe91SMBjK1ZZRkoXTJSg9Sggmniq",
  "key20": "66j2qjGu9FN6rvcLDEXJQn5rSExWCkZyC5SvTQhsdDU22bV9VcAT2LzWWd2dLUZjXmU7dEN1c4bHSeDK3jquK4ds",
  "key21": "3A7uWjGDoPbEzqaeTkUn5LGdEsz3ju2WiX682Lh927XC3edMGT66Y4A6DjmzTSi789BQktmwf2MxKsQANaAjZNmP",
  "key22": "213SGCmMv5xeoRAPHuSyyHRjdTD1NeSMJtJJitES7EHP12ZX8SoquFBPrP64r3ZnpHgdbttD66GS9ymJBG6uqSce",
  "key23": "23SdMYARJfWSHyH137CdjA56hbf42ePdTACSa728BwRoukk3CYKAv5YUsbxtHn71o4dfzovsbUV8JrZZWM6ruSJU",
  "key24": "43GMBLnBamViHHHtyaeaBMKhbubchExRqcys2joMFvcQfVEk5Um9hppvmeMwpMsvJCqWPj69uMgxYEh8QHSm4JDA",
  "key25": "2mM2LjMoDaaRa7KiZAmnHcNDspPqFr37oCGqZS65xCvSnq7mXLZg9mMXWc2oyDAfaj2zzSNuRd4agbbTtE99oLMh",
  "key26": "2sKDdRjx18XTpa8hD2A7vXuuDbo1AGi3ERGJ7i88M4BfCmHS5JxPuW9stVsBARA1AcuQVtHfQqWamhaJFhqnzNU2",
  "key27": "572tiDCsF871jLzhMsa9SEad8wQgQXPX9e83AWwYSdYCWJUnivGeTNjU1z9pBuk3PXeMHY3LhnQytwRjwQ1ZpPvA",
  "key28": "dNQbbv5Grta7G8TCMG3C5To4iw5jPXcmo4T1KJNwh5CJGyvcnXbDYDMrA8eoiwH1skpXsSCSskkiWkMCQ3aDdCr",
  "key29": "3rcapx8KMLhAS8aJg2Dd8gME43nNjpKKUDEt36kZjhD1jNoWZS69vYgEMBvg8RCoecw3DbbYW23EwYmfavQxeCf2",
  "key30": "5nWoukKrkLTP7tumE2RVQX6T3n4ikZ8SbUBEeeMGJzv4jBVd2ot5sczEXScYHEj7kkoYkAJyHFJLr7vrTgeYJpR",
  "key31": "53dJY5VsquSMjBdUhwiEpXTa8GiZusqYvugzS6v5h1NMWjMq8wgKZ7RHNqHovnUTYXcvo7ymHoRGum8Yu4B2BNyC",
  "key32": "2sV5vPCUR2KASf6BnCiKHcjWLKfhUjqEa89XtSsKn3oBfpuBMw6wP3HQwJ4RKk5tRmychvFj3fXotRDSU9D1DXjK",
  "key33": "52oD93byzSBqqnxxE81CyDUnWNe8xDUaHSASFT7VVEiASgm2EHUEVAgFGzizzoWHibJ3L1yE1w4Zt2Swz6dFPybh",
  "key34": "3SFDbqMj7zpW2Aak8U9conwDF29FP6J6MKk1KmJKnyvrzh6viBqom8CWEcrujoZHsT9nZTh5CCbU2A4dCPt45xN6",
  "key35": "4yB8pQ8ETpPCeNvgx9PyoAunLWreBPkSCQJZV7ZsefpCtSW4Jwvr6Rq9rcaCDTmkq1WU4y44BwRuoPe126S1T5Pa",
  "key36": "3FjNZkMV6PmDq9996CM6d4mdT6g1EV8ub4EgnW9LLocoLujDDTjxcs6EGDtmoaHrjoBpjG1YxmmbybJrfPRRc757",
  "key37": "28VfVpUWSDQz5zRuBgcJY5qwtXynHzMpaTEMYaYS8NQGff8dC4GQy4owjHMaU5qvPVf6qJ1Y4VLXXQxTdrEpeWYi",
  "key38": "vevHZwhJxKttVPMzMPwpveAKv6QFdj89pMpEqYT4TfdvV4FVuCyD2FGBvc1CP5h8rbWECccEdtLCY5PsCKKX8wn",
  "key39": "23PhC1BVHR9qnBMtidAravf9Hjsa7kV5F6VhF656zagkWXQWhyCKrpjz3WzDrd9e7QYqVpD6YhnHN26NixL43Zbh",
  "key40": "4okJETH2tWcdzzVz6ss7syxKgRaSvVoWFRPakvi7qe6HhnWkH75xRLYvPM5mAfwZsU63djSd8ZDPNkr6oz43qUDg",
  "key41": "tsPNCknL3ZgE4H2wRJ9dkxSRdy5Ar7kV3qHD44KL1X5ZxSaNjXK8qxKC6WJzmzLdjkQPdHXFvesGCV1itshwbMe",
  "key42": "5jsCPVqN3GbwxB7HPcVeNn9AbN6d1UPneUziPHtV4bF8yWyJ3WLx4ju1aMpdnWhRUoYKx9j43aJEBqx673dsq41Z"
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
