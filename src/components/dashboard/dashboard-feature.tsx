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
    "gmSBzhvS7tUHER5ESVedus4tq1y5md3PeC9nFDTCAbHQ84UgnVGrKBSJBYmBKzredNRHgrTc3ETDNUqwi7D5BGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZf9c829MMHkXxVnm8DP59XDLETXXCTX4MhUuMjPgqzQXiemHcy3QtCTjM4JbB5DPfFzAuhc66pZmLPYj46e9pk",
  "key1": "4W7NCxheLAtV9cRKEYWRQUuTm4VVywPwA3A9LGrSdZhrsU28b5tg6WiZehbzU8zaPfbcwGcXwfcJuUnn67aUyCX4",
  "key2": "8XyrzbC5EmWkD68J46DmoswhR4hduXWGzhGbycwsfT9V9frb8iiPpVk6eHvRV4VkMihh3A5ta1JktGpHk7vNp1R",
  "key3": "3Hah48dfbmE9WsqS9YFasBPxBvwWTG7evt5fzkXM5hTNVd7RnZUDWwfurpyw4NyUafhXq5ZBdJkp9TpBjeBPGPYz",
  "key4": "5AxzXPDAZxWMwZejKbkn8DX9cEipgCngfnL4vedUM93ZzEhSJcJfPeBcqiDXUoCWcTMvwbuQFZgLKvzbRzTJD4SU",
  "key5": "fr6U4Z5AhTpqYGt9kuXdcsA6G4UMdEjescPJ3M4jJVXRoafbUeeHmuzUvUgh6arrhjoUz9QDNkkQobUz2LftwuG",
  "key6": "5CqfUzgLmfDqfLSXQ3Yy3CCPC4eS4XhjNKYUPdUpEmnRPwRKYXn1B6ShbpTtYhaURdoJTx2jgZQzLd7nxweGvD6B",
  "key7": "3mkUV4sSvMETZvo2phJ31cNAMojRw4sxAybAPX8Z4noX1pP889h5YTosR1AvuDutaMkb4aUuzaJQyD7b2aJUjHPh",
  "key8": "5PogtGVYnQQFriSk7N4e3wUnHFS3Z9eMxvSs89vZBzLqa7qL4o38ytpwbLopVQEjAAdudy1T6GSkhawofqP5MAGV",
  "key9": "33mUJesYmqNgFu52Vsvcbh5mjoL2jveuzJHYcMyNhs6ksyZnCc771AHVxRq9CYphyHnyatMeDzp6jBJBcnWATsbT",
  "key10": "2kctipJB3hL1aABYXwKn2p4sHY3pqi3Q2zurYUmca4yZPaTnjBL7LQb6X9E3TeDVzN9MnKdvS94z6Tri1BSm9mnp",
  "key11": "3iRzmhJk3hfE2kPvaLjVYr1sgX7Ysnrfdq8nYfLsd51hUqVJK3Stp8AEkFCiMCNMjGa1oY6DYGrad3nieya3Y3EU",
  "key12": "2dhvJqAZ6BNCZRfNf436vLR7evviRx3fK1mu5nbghifyikRhmkEqhqQaFc5PJWHuL3UavVomDoe4izujKiy7vhpJ",
  "key13": "28TuP7iUQ4ZAie3x43xD5EYdrWcfVE55w3iw3c6zkdDLw5ja2HTYjvahMZkZ2HV2ebRzN2VqvMcfEB5MsAjQ5EKP",
  "key14": "TGAm6ExPEYyqJFH55ZMCLhydQpu5CGorRzxP8fPxNuu3GXz5UoFxqxUCQADXVhyKhCt1HthkDF1VptQX5FYHRjQ",
  "key15": "5pJaM5b1qAFsiSNFMvg3pkesvRaJ28x5hGc1waoRA7YzoWeAYAWRmPfsQLdQRrWkX75kafoxiH4n3crmgrCbxKFo",
  "key16": "5i7Vy9ASV2SgtYPbAQPu7NPxK5bdF8fFuWZfnHoBs4b1Jg1sQLm4mGjiXfqu45uTf1SBwoqcBLuJmf1qxunv3yyW",
  "key17": "5FZSTsamJoARYZft4mV7F2QSoU6SN6G1FJsfG42zNvAfDnGWTG9ege8GNWYNGN6ctEbbRF14vymKxt7dcHmj9CA",
  "key18": "2EkoxyL9g1RixVCyvqE4PZ5kVnz9TcxfFrvYbEkcx4Vto2LTsJmZwkjcAVhSFSxYoAH7TEHVhsTXhqeRVmeAnMGp",
  "key19": "mgAnzTL1yLGrqJxxqToQFN8qti1V84PzmKXC7EWcyZPZLiZe23TvXUintECUsCQnPi97DbMdHm23jSFiARPE17f",
  "key20": "61riNyHY1wmniUcf2ZTt7KbMWEN5APViVRSWdvTX2667Gh9QsBz5YfZChv78Dd2ibFcMPVTF6TK5PoRmG9PoaGWd",
  "key21": "p2ujuV5FUVggjxKSUNZCc2R7vKomsjmkuNTa1oXt1wvewRZi4KiRYGnZWyH3rF3e5sywyaKfHH7GsKEZ26WRAhz",
  "key22": "375TXuhdZYgwQXhAe5hVTDoRokPSMeZrf66DV5RUzr2B444ZEC5vgTN52dUbkyfeMayLFrjth2VWKbuxrWHNftmR",
  "key23": "2mTdccRqTKNugeyufQ6dHMrYg11oPz7x5c9e6ReDLvnyib4kk6iiKtmWbcKv5GhauTwdJNZfQSCEATH61sFNxLvw",
  "key24": "4vYUgLMuPVNHPH54Q4JKrAkiTeJCApcLUHDmTW7D3wPgMhysoCt6nKRHYWGVxM8pgWu5sBc5A6pfPZL67PKo6diX",
  "key25": "2gNue9vhdmrg4W91ip6pMvXmHV8DeovJLTrhAvQa9urn85hCPcM4cGnFew9HAQrbGeyqMnKKb41Gy6XSPJBrCsUM",
  "key26": "3tiRQwNgC9pfD298KLgoDeYqa6SYg5C32HayMRGjDb2jso1LWSPnuHNSi3zVA5qDCExqZCJTvQnJeHKhRwWfUhDF"
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
