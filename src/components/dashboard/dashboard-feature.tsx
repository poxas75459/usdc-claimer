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
    "4eVeyNCsQP8NEiws6bPSpH6tBeCHWJEzgJhU86LxbbfnUzsc4N2iFnTumfevNwwVj3X9PkjBb9qg6s9uAo9ANxZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WhemwQT5159uyGu7G3ydLRD1hy8d38kX8HnkJgtBBVqn9C9NHY7VkPPVxQ9mqr3QcDq7qnedtdXjG3bb4ZK1Y76",
  "key1": "2WBHffDUcv466TcasZJiDRyRB53BTZ5BCDpn2Hca3kRovzxTSbg9MLt5iC4YUMSUNXQ14utR4pndefUu9Da67xpi",
  "key2": "48oz5ZS5q37VLFLM9LPriRh2YPprW5ATamAnKrhKGak8X4YXqFeX9nb7A6p1YPvaVepTpWoN5GTwQtZjbGJHsTeJ",
  "key3": "BJzgwcnSQN8TQ3Ein471NJ6TcdaeXS5q8fxSA12Wr39n5JDWnBXhYdD5jbXgfX7ZsJPoM83yHrG1iLN6thAmJxe",
  "key4": "VivoEAA3RpTcpaw8HPmxdqAYSixZqzrp6HtsS7uySqYiDzvSCkE1Cfe7FnW3L3HeAcmr7ZaBmUhReHs1dfxiiQs",
  "key5": "64Afri4dNgthB2HbfqKxTuJZLK3mN9oEogkqN32w488SK3xZjej6maZieVrms8BEYadMqe3MVkByqqRekGb8Cjec",
  "key6": "2HyKJJR7L71ZKjySRViascoEPWoWaWZsy8XBekJmpQDUaMM4Pd4p9jkD2vwpBvbWSv8hkavPNM1cNMeFyh2hj8WQ",
  "key7": "5bRhV6bxPcwr3uyAS5ytUaMwsQSfpMQTsgwz6zTkdAqMDjZJQohYqJnEKwtmgZnqsdCDNYeaS9GagWQkE8pYnSgX",
  "key8": "54iJ5hHmEquB473Zv8KcAhxSWD5PtgaL8uWPeePxXUk8A4kmNquY82PWDHtudnx8PXMfDfqSzJk6qqRE2bb5F4ab",
  "key9": "1RmLRN1eYS6ekZAvwJ6L3fyp3tPNaqZvCrAN7NJwKzCfPLcnZCFTLMzJZYaBCVVqVz2yF2TWeRiGUjrM8wwn1bS",
  "key10": "nKiX6X1r27JNEPxkpw8JqvKjV8JHH4NRE1NGzwXw8h85Ao3mEdDuFMvhf8sY5bZPGuFVHx4f9tHxXzDxQj5WNRY",
  "key11": "4T4JDDozbmSQTqEVRaUcN6TLvGGaACBZBkpszV1RGaqBQ5fWds4aPTEv9zce1fEdshD2FXcL1MqJiasE6jPsMcYU",
  "key12": "661tVELhgh5yGcnp4EJ67GRuuGrRtwoeqa7R5sCmoShLUMJT7PsP2herf2sKbJPQk2wCffnNuiZMKRV5bNf2xiYD",
  "key13": "2CGF1RtYY4urkZC46qGtdDjSGbWnuCUqEQBoFxdxMbAP8FfXh3NHyhBcTDz2TFfueJ8um9URqtbhtAChgvZLxqbJ",
  "key14": "3XxNnkoDSgKsi2E7mpPsehGXeCRmjDXueoeLKV4R8UXM34GhEVis5XDvtcyUKuU8cHRhXT1TpjGVPvshbh4Qot8m",
  "key15": "2Q8CoEGdnfcTf19N2CD4h1ASck5eu9LknfwZJPcEki9JdFPWi34TMnP1EHfEAq7jugjW1M3Un6ZGwqNd8ZoTkg6c",
  "key16": "5W4vhLRFWbi1A6uCjGYgTLv8HCEZRtLQQ2AKzR9qzEVC4nBZFm63PboAvwYqGwRubaps8qo7x62Y7kvU3orjbDgR",
  "key17": "4derdiSLUKxpsnk56UkxzLdmbtBpPQkQgVvGJwYnfv1rtHiAivRwP3J2Cpo3R7kF9Hb16zLfVgAKqFkNhujLS5eW",
  "key18": "3Z9bmkmeVR2UUh8E9z2BS4CRvLvAgxjwbwUzPgpsNuYk3FbRXRLh79H5gwyDi25YFCEvRXDpyGfB5hP5Y7gnDz1U",
  "key19": "3uozEP86S7tYBANPXePh6ZvMaG2KFQ73JtcsBLLJNQaMrEQUTg4kibuHnZr3U41uA7XdWzyDpPuqPkmjCe3dmKBZ",
  "key20": "4VSJcLUTRxYChjee4DgqaMEViE5VQrtrJSJMtpgWzCYjtdihFx3MzGiZtjhAisnvdSNu1sNJ89P32U38bzu68BAV",
  "key21": "41pL6PnZ5U3mDmENZgFwfGXXADhpe6GeX5eDDj3yQNKuUQGdirCt2B1YradxXYSpHppiZCSbCrDNZuvzGCbYzqGw",
  "key22": "2Bz5RaVZ3wHvrx1c53jn4gLQTMqvfTxPGB2WvcVoi9MGgxjrRsdFkkvv5pWVPibXqzmVztwKjE5HgBcYV3V7rkXM",
  "key23": "ag7wYwinKi2mQTRGzbuk5xtLk5oDVaej4Cg2BYFXvtdcAi5LzAE5oVjPscjefNfiCGN9UnZd29JFTZ719GH3vAT",
  "key24": "2tTHfpb9Jz1Qy5VBqCZ7FoesbZQC6YrTnXzH8ZDRys2XpbSVsJWWLoZ2iD1qYF3LiAgLv2wdMYVTFtFAS5nUwDYn",
  "key25": "4XFmuUFvv8KiACi5c2YzvZF54VVXzmyrqsFosgzHofrF3FWKrnCdMhSPJcX9jT65i4G86WrpUWue9YWMUYMHi9xK",
  "key26": "416ongbR4mwRqHFnawbqMgPpNUysiaskBFrikjLh63V3guXeV6e351RgACemcM7iA6ZJstur1b6vXWejeZQRK5zL",
  "key27": "2QAFoK55BYYeBt4wjVZkEFyAxvFDwR8g8VBXSKUGpE8hiaqLUmd7yxroF3vu9LdXuXsudJpv9cKznKCJAA9R9bmc",
  "key28": "zwVip6UZV8xeUZGLNuhjLpbT1vLbVdmadQxTAfbAkKbJaBngU4nwrhq4dosXpG7LdP4KJKNnFmjjiQEm47SBmZR",
  "key29": "5uQ6qEnPTW8UhSG2tJRyaFEyvHBH7R7vvef4W3h89gJ6qN2D73MouiX9sih2W4nvi5N1L1Yaz5n5DVcdvu1eWkaM",
  "key30": "5zb24pxJhBLHLH3HHypn4LJw7q5cocQS2wNKqDZTfQpEeEWz3Qs79oSorzuBohgtXD1LEd1fABzFsC4HaPTq8c6g",
  "key31": "3YmXEpvAi25hpjisBV9exPNmSWpnz3fcKTYEYTWavFFiGzaaRuaEuSV6aGRLpV6eFL22oBe2kgkQwVwbuTLhFygF"
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
