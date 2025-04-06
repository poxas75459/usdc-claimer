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
    "4aoLnjDGKbXCe42eDQprd35fr29cE9HC1SWA2SFSDfydNLAB5xo1xQPmEByLWxK9TkFxmRuLoW3qpU14EgH3krKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sc7atXxkBgXn9dPEQt3rkvfvQbt2HBBtoSzdZxDcMEgevVJwgTakctncdnonase5kJ2CiqBXpv7hwUCnxmeN8ew",
  "key1": "5RqrvqLSpkwB51y4daA8QCoEKqAyL4RyRqnA5rUaSALPjzBe9MZbhMs7YWfKRwRaUJzooYL7TtX9QcfLnAsfF8sf",
  "key2": "VYhmcFjBDihyGsLaS672uG9xvvbcLijyXW5qC7PzFFCWMyEYxfeAuqLocLFdqKhV1U51fKddXzzFBAi9ViiVKCH",
  "key3": "3WmVCd2kuYhivgGgKyy2gP4LWj3Rv75VvtbXNDuAWasFsQ3RGSe8aX9Kom6wiDz5ubB4USrgRmv3bft9mMaWPAfi",
  "key4": "4294EPGjiutP3ZTQeRnRivkjdM1JniX2sCmx4wD4fdBTtXqnD1nkRTCtuofj9hwvHKpm5xbPcUKTcJLax4jyfbrj",
  "key5": "4PS5Xw3a7G1T1vjFfAnM2BVkm7n5EwLxBT6JLJeaBBntyaVsknPDF5Gzkg5YR9jGe3fZpV4SSxSNE8Z5sfrM4CYi",
  "key6": "4NHsNEoaDHaGZfEKxaAKf3VUj6jEM9kENvtst75b69QSNkPPzSgj2dEC4a81LnnzKxQywwPej8NiQaYBs1BCMFYh",
  "key7": "2HRj4BEY51Y2wN6Zb7gcimFpEB7kCZN4XBvt3fia8zFPQSt6fnF2avCTQD6Sp8Pd8Q6w7eCHo9YPv9f66CnPGevn",
  "key8": "5VrpebmdzMrRhPUWqtaC18nECvD6R2HRoaJALHX1ZjF5ivb9BDDRmKqRgTWTGMTjyYN5NqPRD34VyPLXwkhpVG5t",
  "key9": "CCXG9d1oo9Xf9qYK6cTQV7PJtVx1Atz7rPrJFxUP4LjDcmE4CHwidUxfAK8ULJq4nEG66pwLGCrJuusJw6X7wMC",
  "key10": "2CBshpVoDCXo3PsM7rbXnAYUtMax9XrDUFcTRuybgTDWzn5xsPXcibsCSjCTrDNhoCJooz1Upo3pu1BeBr36ki8R",
  "key11": "3LgCnXf4wbjhwUhwBUDSj6bsYiVcEu2AucyBXd4ormwtrEUeTJa33kUgpfSLVHSj13QiqPN87ZazWV9tPJ3aToFS",
  "key12": "9eJRzyttjgPNhunRoJnS3cTAYeWVKG6LA2SN8iReETc9EF33ucmbVYMkm4nedwJMKDbwjRgXwUD9k3cuTUZSHej",
  "key13": "4iRBuhVB5sDGWber88APfXfyQV7ubYDmS18cQw6vrSuhYqDQLjVv3uXCbo37wPDgWsPpspk2dxKG3CGkQtJgFSY9",
  "key14": "cK1KVDmf6tUD5HvdXMYA33v1ZbWJVfdDNfreWQnYeRHUmHANAizHp9Sh5EjW1y5AwwxHo1MoEZZeyFDGW9zmPa7",
  "key15": "4kWqroYVShgGPyUFq1n1JHan49vJ2z3wfRcZBvsPbNt9wPdK7zA9vPhMW7n9oAq5GugQVoZ1djdRkfr3vB3RParT",
  "key16": "5qzJ29xmf519VRB5VZDYfjRMqfoAV5mZ7oQrBzd6ikUWCfZ5358usijVmrBPsrya3ibE2XCzdXpL5DS3v59udaMo",
  "key17": "4C82DJtYBYXgWD9ZeQfYQbJigeY2e3vXcCoWg1vbzTNNEHZfDH7PSLNjcFKTu1dwBPtA16Us2VQgpcdx7rvLLGUx",
  "key18": "5Q9jPMjxrfYFtgv7RGfuX1HijvgkviDmhaQgHfvaJEpbSNLBCMrtSfvTZUVtHBLUvUU9VGLsNnEgPqmAA2EKMT5m",
  "key19": "22Qrn2bMqkgzDVg2jYc7VqX8dqfNeexzXsGWRgn19dAm8s6sM8axR8raxrFww1gAMQwKLoQSB73nxBoP6KkWZktB",
  "key20": "4f6oVazK9XjSPrCfKijtpXdbdPSab3d2mop46mymGZ9p8umZQyBCkWCqMvafX2z6X57Wcv1yd1XQpJdU7vDMPenA",
  "key21": "omooknxPmKLCiUWR8NQGJDHuqC1qvNXhporakadHUcgyQY8UY9YMDJkdWfcv467eWvWhELmqc42pU4profjim4G",
  "key22": "479ev3nZdsSjNJAgihkXdmqu1hsrdLSrEoeSXU39bWUQ1suneHChtoJtXA7NUQumaWk3EHXueDYB23YMCJsiwR7W",
  "key23": "NTjCBFCnP6nBLFsoa8X5CTahWMzffaUnhhBz4pUtekp5C3BSFivfviV61goyaD1BZyrBzf7yCXVd8gUKYnCGbNj",
  "key24": "44ZcLzFRGcUfvvoF5mQyv7HPM4aRFjNHr97u94sFyLZoaR4i9yG6iaeFekUA6L4Ex6rLRqaQEmQSydqWwJZZqv3W",
  "key25": "5agZqdRfGFxfiFdVFhtX25AyXWvauYEP2zSkjpAyap7BawxRPyccS1MNhJdUPe4MaTgfuYd7TXExhr2jCpEDUud8",
  "key26": "3ZCeoNsfhZGpbNTovJLNTnM1CAX3Kt23nM3pMSjBFDNuUhPyYnHsipZ4rQLJTKHFHAVx1WMZspxhRVrusacqH6SE",
  "key27": "5c9xMJJCfGW1MMKTqKYCEX4u9dZqDgopw2HUKXWAkR4tDpZrceUdarwzcK5H6vr8UbKYAcXKkAhJ2tMQpuroXDyF",
  "key28": "5X29HaubcdmMVjydMCNcMkDiCXcvPUSNAofEh1zCQsSzg27QQYZTGo2kAXWd6FMekzB123inzBUMfA8N3P4bmbct",
  "key29": "3rHWGamhfyiPcV6LXBZcdTkg8jJwUxeoeDHRpg6YecyD99hnNkpceNrcvGbs18JCm2MjuirktoQGQQQrYi782RnT",
  "key30": "4j5o7REYxJaMmyXfro5pW3k125674oBXnbMgoM3m3izUR6H68TpD4sMBBKvqLw2tDchZ7wfgcHgzfvE1q1AgQERb"
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
