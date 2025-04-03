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
    "29pqKAeJBYZys4cfesvc3KjHYeLoAYTUMgsMCKvpncGuUju9Vc1upZWh53viYzQMumxQLbbvnKaANqvd6J1XKUc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sgsRquRB9ZZnQaSbkCgQd8netBBtnzbFEzXcBBK3xAcATwuvDdwtPDkkh6YA7pBLa1mKT5K9oZrRPqTSoBVfEiz",
  "key1": "3P8c7XFskatKoMMw57uoFuWhUwkaADa47o9TmTHnC2vegjFFhUc8SwbQ6CytPt2UiEktNvSuPEa8ewpYhMYp4Atr",
  "key2": "4RFPGzvUbSpihC4JcWFuFvfWmn46LjJ7PgnFssE7Y5MipqqYRVZ9Ps6sgVnxUMw7JFkeMqM9fsvAVBQEdG699o1Q",
  "key3": "2aBneQ7R1odtriCjdd7xXS68gps9LAjb6nLWwjYB8FfnBrG7v27kkDGFRgYwK7HYS4WW31qtYMUHVCUNUn3WGJLN",
  "key4": "66G4E2cXRk4GyzNiYdxprZz6YhyvEq8xeXeAwsvQYaDSiMGLh5W3LKgy8axDQNQ8rEFmJ87792raCorPCf9Rn5v3",
  "key5": "38VstGQr7VedqB1YPVMMR1dMdmkNdFjvFXzrwkbro8WgRCLv94z3WmaRVDdWSYUVr4ZBQYcoCBZMTgJJ3d2hpRg8",
  "key6": "XP66N4hH5Ba175DYuVdoMjPbBhU4ivKdNpSboMZjB2AAgt23jWU2DoQXtUX4BQk7wNqhCLdpDaxMQ7ea2pcDcio",
  "key7": "35VKctPCbyjswfRbNSGzb9xx3oihGiFSaEEb1FXHxSjuD8Fy4ynWVapQcd4qh9J5Sdev1WqFduDdcfSK3945nLX8",
  "key8": "gqksPBXsXUSEUdrCABEiW7rKgDZAxsmK7Yqti7UFoR9ZswTJAb77B1S2iH9X1m9vtoAb5cgV5WTaBSv7aiRz4Nm",
  "key9": "5nXrk4PS6QE7NfXsQVanwZf97doiQNiWsPaWsU7dFHp4Eq3uQ99eELFV2dHVzPnwtdSjxVccc7CuyR69bKobAykL",
  "key10": "2LJMb7fKvskEsirHiHHEPeGPBgDqpKbR1zitPdotCQgghioRPxaQvGTDHUxF4WQV2xmtpcg3rS5QtrzDnkVbu5dw",
  "key11": "sFc9g4HrthFkhGCoaSBTXDcvWPnfTuMxLRNNum82eN16HdUwpBMETHyV2kQjVtczRJmf8LSwbd6SiSDV1ouGPtT",
  "key12": "4EqJAUpjioAiNj8hCjyBh6YmMENoaH9wAhviBtsh5EKP3GsVeRtWhG9CAZSr2sNA1npe4Sn7TqXycYWRbmWaZVo",
  "key13": "2pezLHmkdQ8vNQHDtpVEbaAxYW3SeYXSeN1G59dvgUzNNdtkBrPj3mfvMyMQgH1aKMzNd8NoQt4uz7qAUTxZtFQg",
  "key14": "367pnaE3LVT9tG8d6GkDGQPjJqwrgDnaQ6p8Wcm6yR9iyJz2wgE5Xb67HrUyJ2Y7iEe3jPwHLVzAwHRHiXrgWjRY",
  "key15": "CDYVTdccCdGF1CL9k6JNFhPyfztYkQMzL2XNR9btxDp32hFacoRA5C7MKk9RRAXeaCSxRNju1hN6z2Fx9yfCwmF",
  "key16": "w5rL7pUU1qHL1VqCgKVuTmccEQBgYebRR3Mdgob9Uix3mVU1jy4MKthNRWgkiDa37UUiknqVShvcybzP4oEv68q",
  "key17": "5JCA4GuYWKDfcEsZxdvfuz2eQtaJUTarJzs5rz8K2MFGYj2dYzrpLpAAiaJ6J35vHHWnZgFVxUffkwbjNZPBKKGd",
  "key18": "5Vm7MAHeDtoiugy1qndCG96DALXRi2E1usvC481iPDPamneywKULG7BKyE8wrDk2jaHE4QPYf96FeqTLjcscpnEv",
  "key19": "ZGMRK8zB5UiTgg9tiC6hXsuxfdaavyonu5zXJniLRdJog8GscjE2PC95Ni6gooZnBR822WYe57KVVjjn2TsFvNu",
  "key20": "32uuT4rP7mttLGQgADgh1f3bN414Qap21grcyjnfywMkf2SiqJzaMksGHHfrn6HkouQGZPET6sEMNuieL2sjVber",
  "key21": "a5oxKeTZS3QBQkkQsKJ9ASERqRFosEUzPQ4RS6L6PiYxgKeCRReq42A3KS4H1RXdEP3nXMiW2fZAEASTsWEh9eo",
  "key22": "3dFpTzeRZm5AQCnDtogTfi392NYFDi9pEF4q35okZQBSVCoBZTG5EsfeqnnU8HJrnpvN1d6RvjHWSXb8uGkZpgaL",
  "key23": "22cywnSxwV4mtUYYoW5Rx2BJ5CHj2s8ejWCcucT8WoFLH2gS1jr9tk9gkDUnG92AfT1mC5UWn9eDLZXdcKYPW4ni",
  "key24": "4LbgatxpQajE764aw4UsW2VcXnf3uYDJSMMHCPdb4jFbm3BhzGhTV7QQTgsrTojiczjJmx3tbrShRnH2YdVrD9a1",
  "key25": "3svVpsfcKYsTJr7A4Su9Xfa89eT8r7mvnhMFbVamoi5BvUUHA9f9vWX7tfiG1mUe6zLuaE3ovkcT7QQYmz8wKhsr",
  "key26": "gC11ws4X5mP4y2B8moj2wRxarXwYY21ZABzJxwhvLZUUGvxmaYkP52g94um5zhJj4S4zfSdWoyNQFNvoB7PAhDx",
  "key27": "3TeDgX7CePAL3tzx9FzNqCq3H6aD7VEkBWuUu6exihnzM31VViQzw4ftnhSJVu8C3exBtPUAhvSXckNU9aZ5Meyq"
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
