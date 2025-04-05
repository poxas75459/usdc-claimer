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
    "5PiDd7UgQNzxXTgtsCTJrsQqKQ1hGeC7HVCD96UtkN7T2px58J9yjHcNyg4TmzM3iAdEYvsZeDTceC97AMZoVw2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59i9bpZrsrDs3rQ5iNk6rAvshch9HKMw9t7cwv9cTZa4hxaoHRVBihFKwhXseziahkkxEqfvDUhHevpNjnUn6HiR",
  "key1": "5DyEUTvEG4PMExjYmBRfxq2fAdkvSG3sRT35bygVuBW4uMttnoDq2A64gz2cSAExtoAVsv4syGh4vcv1M7kJvntd",
  "key2": "2xrDSRrPYJrUfTvtEE11pMECtiEgWnEXcVRdPBgn1P7QTh2MGLD3ve2ECArq91Wisv64Br4z7wBYjjhLNirKWWDo",
  "key3": "58ZWJqATiUNcNepmTF6h7FJXpAKTua1A1fUZacRR21hE9WEtoBRGeCKzq3SfoQfyGfxrpmDCHWfZpoNthKGJUgbg",
  "key4": "5kTt4j3KtKZ4DzR4EdoPV62QaWj8AnVrFgeyer7T88o7X3GWinbwn1cg6zU5X2uEuxYRbm9PT57v784vjSsMNfHh",
  "key5": "28XZdMVzjKUPsXYckHQmzAJHe213KgrD17YGvgCM3gJfR7X4EcvwPfTWD5SS9PSPppdR96JBGAT3T4qm7eZBpPgf",
  "key6": "5f1PpLaShXdwozM8sK62FgJxHtVKBStfSp66LBUoRnh74EXkvD362G8y4UQ4pfMcC7UEcZxktM5uMRcdNURgxHE2",
  "key7": "6791WNiBfrmNiCjpokGSnaFeFDtE9dSbWs44zt5rMHywUXqqZaZRm4dCyRv2QqzSmJUoijecR2m1szEC614x7amU",
  "key8": "58NYVKZh955B9L7a6K2XRfrCG8NHc8vjxw9nfa33UokGFxJEZV6miZCWH7tP6NwikpYQYuxGTBG4xefGWRaKXYAC",
  "key9": "4jQmYhKtPX9wzUknqVpTDg4ZemkKuViS6GyNUC2jWF9mj3oHs1WxZnq4wzcFUefJcM6cFFT1wJmMyWxDRsrTWk1o",
  "key10": "22UZz7buuT5guSVUzBm6xv4ATTUiKw9gASy3So6hp6BWycMVgLXMUvfFG1rfbNt89Mpg8eZrrHhW9LGhQjCuohjb",
  "key11": "2ygGwh7NByBKX8gSbAbtTM3dmraBALCguofF7KnvhPrnbWYRysCjAt9FehL7DNXVn4z6yqBeR7XnzaCiKruANExc",
  "key12": "5MZs3CQR9nBYXsKbJLutx2JkDQzYP5jVoAr72hyFqdJyK7wQkuAReSjFA2cRfgHVfvCaM85fBb9MZaWhXmqY4eTX",
  "key13": "4kQKQ7eGs8qnmSosCFG1utCaXQGoV2F4jsaY4KEJ662KBBrzeQW8Y7jdVebPGsWT8P9cR8knB1VFr9gA6NUyyYNQ",
  "key14": "2C7fafXxVV3SG4mNmwRkwabGPepYqhjkkc1F2ZviXKsdZPyte9iSkp5Ws3zEEYUozgFfG5FBmiZW3YFQJ9XamTzv",
  "key15": "2YMiuv9eLm2TV73F5b6Gs4eiYok6gxujGFypBD4jBj4dC4nRjX8CJc2Nf3FeoAQL1ZFfdw2MsScbnbiTyABD6HbH",
  "key16": "63fmThthTaAHNUmMh1zaQ71PavyrPCjwCooGGBqV2VforGUuNorvpcu2jzYkxCgvFy7nF2JgGXM18LoaA66HTmTz",
  "key17": "3RGdhEj2fkeRqQZ15cpAaq6N3tu76QBvLFigSoUmthpU4MuWVbDQgrXskufASjg3vJGoGTAyn1BPPooQoFQfiQVX",
  "key18": "5niNE85DeKygBDsJL2FbrHg2yvVLJcRbQ19GNcTDpmcpUvMVpnfH9MoMz8M9D6FWPmTeoywZsqCSmRV1FHUWw5D2",
  "key19": "2toMLoXfLQw1GiVTo43jJrE9eHEP2oLYXmEx9fYZtAk6kSXBCcPrxQBZ5QaXdMyu2WrLQMT2tMYFV8mS8SaPiC77",
  "key20": "TUoEVK3XuTqyPfY2ikJWsU51h7wmhzqNAxw81MJ1W1EsjbFEon4qHQxqJfatr5nHtCNnmhYXpsLD7xoiZWrDeRv",
  "key21": "5SZNp6H32yAy5h6Mx4hCHkyTQPwQtMHxBMKLptZfQYnQACaPciXx9azaucScwh2BTK7jWGSmtJyLh5Ltf4muNYfU",
  "key22": "2aLz8TDYC7CCnC9BwMzWH8ugwxC1pWktBiMuKujMDLVW3dVKQnTnVw3zggH7PnWepb3yQEF2qgPb52WsqsM37gio",
  "key23": "4b7nQSD4XfvfL8i5j7ju2N2TTetebpm1Y68C3KUtRx27kr1Dk6GTuz66hJC8pXcxaiR4TLivm9g1o5knqAW2fnQv",
  "key24": "jQxN6nrBFJyJ19WvXjvTr1QjJDHGGGC54htJAWiDtknR85LLTd7rvfyp9oUMrdkFJLD4d6Lh8o2uEX1fLYgr2sD",
  "key25": "3kdAiyPZ6WUyqYpyzvcHcCidDcWtEjEYE3cnQHBLkHV54gDqLHEftpEKmzymFbuzzpo2KL9JaiR1wCtByJZySJ4e",
  "key26": "2mg1DPnSW9RPRxZJYsKe3wpggYrzsdCac4Xp5yWPgSV9BzYqZi3Zik3doBcok8q9SFfgsrE9KjJ5yVZAzVAvF4v4",
  "key27": "39KdB6NYtfPaH5JBYiHLynv7QD8NFGh9sjbjYCyjbxFkTKmbsGSi9DKs9SRKiL5mNST2QmCUCgCJRREF4C2ZRMWE",
  "key28": "n9q9drP5x9eD8WAtfndpyTbcxtawTDphywkjqrgkEFc2jaUsrPnNRAu4NegousnWv8DwHsijvMGDn5Adsj69wDK",
  "key29": "5kHpH9MgKwfMji3cE6kd7A556QmN9cf6tnuSdWnUZRyc2ezFYwE1M3BS2Z2BhuHuACEfpiKnao7N3M92BngHWMaU",
  "key30": "2dpRQyziUvFKTGf1KT3XAok5xVcxZBWsq86kZ1YpXv9Sr2P82dHnusJ7fgNzXQsh6vB2TYcBaNDibmgqT888cfmo",
  "key31": "3sQWKfobZKFLNeF7YKCzfLpJ9tNPBTKY2i4Y8YY8Ct19a2w1uWizymQrq8ajQQxknFw33AnFFE7MTnZT2Cc2d4hx"
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
