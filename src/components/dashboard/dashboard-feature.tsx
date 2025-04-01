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
    "4SdasR4v76ySbYYuzMvk4xjHwkZQAx49SD89bhPaa662Nv8gv5iUxsvUrEb3hPeFiyQU4LcErCaU8cQrUBXMcpqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jHq58ya1xqXJ4geCCbAxZckLi9kLcsT77FW89z9TJLgYx4wKAeRWoAp5yjQ95cEPjUXBKnXdueXR5Ghjda6bsV",
  "key1": "3cPStZ73FHHjKtgnXXUcorqTdzGWfDZJpRuBNCbpYzkfwYZzKDQPJbX8paxhoFEJN6nUbVZa7EauNb6Gy73gLcnw",
  "key2": "NUeaeARXtgCyn1xfUSGMpGEaybttrtDwEGBdUXYTYM4CSUgsS6eyqp1eMLQYS7DsTwFx3vQAYfxZyBTcjKJo1KM",
  "key3": "5QKNMUCiM63W8Vu4EV3L3g9mnomqaf4utz2NPLveP7gaoPfatGZJjGmh2KzNEhoaiUXWxyMP3EcXnV7tim5Ak4rw",
  "key4": "3RYHB43NCNh8S3BAcfWCtaeMrFwfS3MVBkynQqws2SC3XJs6oEuVCmtuizSgHTTdj4tfU1MrPfAAJJU4FBreF2fh",
  "key5": "qGEqo8ijLVpuv7o77VkBwNPEpaKh9R9qxruhcxK7d8NdfA8Yzjg1SXFiEAmpLPaKrHrvj8BwybTQAtxUtx4YxeX",
  "key6": "2WHePgdy9vV77qr5hFApWn2g4Thg9qrEHAFNfoeMAjecMzhKmDtpCPrqGMjYjN4hSifUmNFuaUiFGZGx5rU6PjdK",
  "key7": "4QRtwXgHCWBXcKD5w9DmafqGgbUepTRxDnpSF8yi7tVVa9wS1JUMXpn2yNuUdv4DjF67XRJCxZw35r2kbJvjY3FG",
  "key8": "64qcb4R7xMRcmSEKMfL9Fn3WM8CecLbf5uqkWiPd8rj76V2phf1vf2HjpV11yY6Tqjnf3psPPwwaf52ioVKGM4ZB",
  "key9": "4h4h43Vr8h9x5BC83bdpzFg49CsUECK4nXqJxtZ5Magww5gHn4kgxDxXU8Yy6mri4Fvpm4UXhKNgyMdpo7q3mYxD",
  "key10": "28L3mV9ekR5PkGXsPbV8AENTW9CWJGwKUM9ovRVJXtQr1Wv6dcqXy5ZFCP96rsUHTZLT8gyYwitwUNbKficqvvGv",
  "key11": "5gcfcnhw5JLKkHyzK4B3aEJeQ6L2kBPD9SxGanGXTUHAfX8HhDgFyU7GF8QiYWLyrFiaN2cjzxKJYP4nxTTdk36y",
  "key12": "67UCmUMo5Y8wVDqpXNAipohJiwqGALYnmo4DkmKjUeacvJMe2CNvHBGzV1CM1YNfcSTJjyV5yXo2j2Rswbb8diHT",
  "key13": "4D3wYRsVYdcsqnQxh35s4AWmTzQx6siF2XjVT8HQFRYNTgcZQg1L68RKjNDZqNEtxBmuyRgu2VBPA2tYW6btkhxX",
  "key14": "3GECVKdagx4vCzSndWwHqyNFQuLeNeVZ94gwgfYcMUgsdLrY1VTQJUpi8kh1JBYSZMQEMdFDvQW2tMpu88a4fTy2",
  "key15": "2oQtfaYbxWvjbnUN5SZvFEdnuSWBJEZ6miWEcng1dVuza7wQVczox5AWVWTWM36GdPXuvKq2pJJZmjMgNcbi4ba4",
  "key16": "359v5s9VAYbL6veydByVFgMCH6qzgzQz2XRSmGTqcu7awgrRdh8G8RZJXNTc3F5tYMJThG61ofAnB2xRyKABG7sQ",
  "key17": "nVjff5u8gdtsKkKA2gHxovg5BbusDNqz5hL9Amab7wHLip6tj6p3KwoYeTNnyDpnRPLnQ1EZvC7vFV6hAVJBc2E",
  "key18": "4oxrso5E7dgVax4Smtz5PzbSx7XxEbsbdTd5PMJQMi2kXcogsXfCdWWJcCF8ufijcqx43PaXpib4fV7xESEpcJGU",
  "key19": "42pEBgTr5oSpUgCyxroWyBk571Vg4vwYn9PRpXiC59zvivcju9io7j9zQ2F6n9sjub692idgjVusxH4cFMt1qaMR",
  "key20": "5nTgfxYc9qDJWmh5Acjo29W9MDonX6g1WNLW9bCvEPLdAZkHDxiBjSGrLcG9QEFP7Xig2G7FtpKBKuMAtL1zBCm5",
  "key21": "2d2ZXKkJPpH6dhYJL67QB2jNiLy8WUZqXzwxcwW6Zvu2EnzqCC8NPTJPNvSiYXHeTDSRpwomd3g4ZPcBVzPnZsS8",
  "key22": "35uevdo89wZWxs4xbSSrRnaeQtp6XLdbhYRYtvJDMVg9dtdu4dFAFb2EvZXGArdn6MQ79ZYJP6sCyjBeQ6MD534n",
  "key23": "2oMUApvqFVRXhRtdRqQA6CXwF56p2LuNFFQMj1KcGBAqGSFvbLwFvthnJB1jsHcqHMtznnYvSNkXKZiJrsWnQQuX",
  "key24": "xVhHqmeMcY1fGJLocRFAyrsR1WYJ71pzxyy3UBtNnYxKCpugCGRxUmeecwD1xkwgJyEPH4DAZMoJmRBXCjx7eWu",
  "key25": "2wo6x4257kkQmS6zHKSkrMhwNX81ZUu1M3va8rLtSfPhXJFHPYxeDQCyxNR3HccTN8Wz879EtYgh22SCNAwdkGqZ",
  "key26": "5wwymKUcTrA1KkHhZUkthjyup66dn5jEd7bb6BevHaEPq9wB4Jw3cAWgx7N25xMFNqzs13oW7WRqJRSSSxogqKak"
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
