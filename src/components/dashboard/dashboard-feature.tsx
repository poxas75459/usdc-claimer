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
    "52ALKGSuPm13yiEgykKCDe2YfAhRXMLRxiDr2b8MJdoM64UxZyJ8MsEBUJeE3g28UiU7ZUJF5kNnG35drWWx8YpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xkAzkpXe3G7Zoz91PY2zUsD7NE7JLM1dZY6LxkVUSw2SUrzJJp72y1XWvHA4Z4q7DHW6DRa8j2A6VkagVkJEstP",
  "key1": "562pPhES9wGhNXmMu6pqJjDvXz9HfwJy3hPHtyyw2MPc8KGYS4hNiPpj15mBWnbFTctq75JZejfSsm9c8RvDc6k6",
  "key2": "4LGV3DnF1eqCSqnpU27GzuRkCgHsQdqyen4imdr1MRR5Rgfcp9XCkUfov5jhRHn57m7XCjBJzoPjRPJiC6PffqCT",
  "key3": "2BqfhvoJExW2CAGLcTEJBUecagtCFjvMZ19qCaX87pytWzSeAkKUBt25N2dutBieHtzqMSTcA7ic47jxsZJRcXgQ",
  "key4": "4RciEtG6LbbdLdnW66GpZsrtstsiVabyYh36M2hN4iZh736TRG9gFpeUia8uhPMf7UiQhMMQE5tPz71pdM76S2FV",
  "key5": "53S6JpGsDAuDhqxeGskTS3GPBHosq4ESCSBMkixG8aHTftpybEfr7rkaQCxYPyFpc1Vt247rVtM2d6DanJRa99ci",
  "key6": "4zBWoJfnJ3SWv3eAWu6ggJ6NfcX34W2CFmER3THWwC46qdBx7WvdZosWpYkb6pporyvqeqkZaYiLdp7qt1v2owpP",
  "key7": "3EA24XwcfDPydibD8ScrQoskfwdamHvRDrxRz4sA3dJLbGcSmEjaGeFQAqbi5oab9N6cJQiqv999L3xsDbMx7czU",
  "key8": "2M6jYJC2jcwYt164frHTmePrZQBQCGwtE8oNP7MJUrTKXN2E3aPNYS2sf1ciG54QoHhBWhFjH6UKYpeqs95WKjqT",
  "key9": "4gmZXPwNseNwBE9FDn4YMejj5TeGjfdQCMQHnDFVZ6Tj5WkwvYJZKRdpSppmkV7SexkQhDh4dCQ4yth9iqfRv4Ui",
  "key10": "3cW1jKbptfb8AowihzQA4ydjae2u2U1esBguPtue9HMe1nXobUiqP1295h9J3pVBKNG4gWfjnEC5jvkB6VPnjmL",
  "key11": "5efq8Q5duAacruLDoAdfJdt3Fgyn8WEQ3HcregpT1yzhmhaNrSBLmoRwRpoQf9o3jgniReggkuUvggrSTuk3YXWk",
  "key12": "49r1RyMbiNgH2vcdcEZ96KJuWrv1WG2wKdasKerM7ErvHJcEdFnFhXQz5DrQ4QvenAHttbv5k7DTqNTx1Fi931zD",
  "key13": "o9nSHuXRZ4LDKqprSy7bLSS42WCFNfPVy3cJXxC2ALvAM6HCMwcDpPiAqZUHYtovXT1G9XSCK2ohcu1aPH2hjcD",
  "key14": "5TEsFCptSmmW8Bnabh8V1naaqc5DxEvEbe4WfiyiQosZzB6aMBSUsVuqEECGiTY2QKdZCPqR8cGj1roFvHYND12F",
  "key15": "4poYmJkSG6RdCSjc7mzmYTEHDBT7vgdCYje8gQtH1tcdhivyxvhsSTKQVookoTByDdjKkujkmvtX81nNDtNDidA",
  "key16": "63ahrsVtiF338kC82zR6J1AYAW1pjLJ5HdPtoDSKmp4ycciv5m6JY9nSWT5VzhzSejNBW4wv1FqckpPzhJ8RgCGz",
  "key17": "2mB52xqhwwqX8srbt8jcrjSM71Pdj9Td9gHWovFm7SB11pS5QZvrRZR8mFCoezGVRdwYSyZp9kJ7SShU7q2sHFiW",
  "key18": "2F3vMhRCv5tux8QXLq4NWAgRLyR5TxkZx2roWP3qR476baMPknjXoQ8nAdaA5YtzZUc6EBh5rrS4mnZi2CWEdnvJ",
  "key19": "48DARrT9M6B3hc2y2nyXq3eV5EmRjsCNwh5U9oPaJtHiSvopVsAvJr6sZAhZz1o6Z6qGLAGfTXgcMzucvo74y1AV",
  "key20": "ScoqgsuhLYnatHU8DuHYxCZ2cPGRtWakwrZ4LZZWwyxaz9znnEM336eAXEeVAokno2feyEv5MkPx6KqZGBBHbUF",
  "key21": "5ujsoP9iLsDPqFUVp4nYQrkdvybNe1Y8FUYRgwCYVNfDU1bSBdExH136n6b5FQXU2JcpL4wRfWk54JfCWRcK91st",
  "key22": "Tvv7urd78saLz8qLDmv77ab2k2WteJHwihWVeGXnh3dU2QCsWf7SCrc9crNpkWeWpQH1mtQS4TJDJPEivztZTES",
  "key23": "5cAN92gcfDV8c49NxTiGwhjwYPmvuUjmavk3E6eVvxfta6GqktT1MW6fRWiwhU6p8irBAp8EECLsxn5raLEBDe7T",
  "key24": "EjHkhr95Z26VC3khbivi6noDjVj5Vmwf9WtHWSXfnVo26DWTGFvz1ZRVES4P67XTnTJh3iVAU57b5JFJ5RR27kC",
  "key25": "3ETGRDrR4umy6LjHCsjYHtv9CEVMd8N8dPg1121pwg9YGH8Bb4XoELNEBFfgwPQHAznwAP9XEeXMbbCYX9wBFH2q",
  "key26": "UwmdPWyP9BTUoRkRvCd92cUrLEXzjNDmtHDVYZuMHVJwVypHvsCeqVvVkGbYkTZQUz3PkMYd7eaRsjF9zqmovFC",
  "key27": "3j167UtBTz1Hu9TPD1g5dTT19ny4ThcgCg4psYFbZdeCvuBv19nZ4iYWDmrvQxBbtb7xgQtNEJ5bCzWm7z7Naj2"
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
