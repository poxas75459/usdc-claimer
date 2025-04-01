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
    "5kSJ2wnZMjZhwm4DWru2ZDSramdV5fvq5KYMPt1kYfyq9hAReW2Pyku5vhZFL1uy7MPBnatsJMbRGZWM5YR7iiXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SCnStybf4U366C1h4xVgf4WgAFwbnTrbryWfKqMPdiXUMRXpSGBHmrvL9mXAHJpyYfhgMtRnimhSRZqUyF3pEb3",
  "key1": "5SjMo25WdBenMyd4iV9Tx67YJUuhT4VQMewvQ9wVXvz84gYrhpGCMk1Ha8kzHjc4P6DUnuMF2KfEg2vW1ADVjmJw",
  "key2": "3mhrHak9bbsbnJmV41M8KRMxXcnRzApZp5B2A8SDPK7Ebsk1GrABN7guYHUjycULGnrbDTVvWkxreJAkr3BSATj4",
  "key3": "2qoqEfxH9HoUK8afoPXfSVGK5pgdGuNQWEgYgRqakyAYQ9T8T3ZDo1QLaT4SV93fAZPm5Ce1aS1wRVvXC1ZXFEhy",
  "key4": "x1WSqemQkfQEG5ewK8iNao9gwqFd1PCnzhup2T6HkqN5rb6NiLqsebDsYPeChgwwAsfmVJuCtFKGjncgQPt2Wvv",
  "key5": "2tWo17HDJBCpFcjuHBh4oeSB2NYmvBiSCyv9NRBdPb4ZGAAyV1KYd2JV5M2kyBCVeCmdFBVAbs9MWLESYhFkvUq5",
  "key6": "354DjHfN45QM6peUrBygYvRSGXNN8umftf4DnjBsRNcPnRXzv37RcFYMJPy7N3qpwp4oHQtfGjBghuqZSzSUg4cp",
  "key7": "3iWsJMg9NoMhSiC8wfzCn6NNbrbLKbVqKJfhmy5RsY9hMmkULUehtewBWAiS9jRyst6fSfbQKeFzevpeB9ert94P",
  "key8": "2wJ5RThiuiyx1522b9vRiMcUxMF1qXViGxDHUxUvq1BV7izEnfRL63GTUu8z5AKHGcUvXmy2wJXy6jyN85ZD6NdY",
  "key9": "MG54ygB8gn8gdGBB7Fi8p5oHBP9SJHtDn7JeYJgau8iyBepEX2okNaqcVK59s3arZ33DV8PoLNZhhVx3HBpRwKP",
  "key10": "33bGeiTMWtCaFAd9vgs5ABXBRVwLKnW2PxF5RauApSVTBn2nvsTrTNF7Nmri1pcU2M67Z4vA86CGiwU92czEYDGb",
  "key11": "5fDoXQ9m8CRFJiiDJHEhw9GoESkCrLeNCiuU1XArT9Ze7JzuVjwPJ7t6HtxyzeHLU5dcEfJ2DJgSNWn1nvva8eV1",
  "key12": "Jtxxj5eFQCaC3ywAhNiDdQqxADMFH2ybvGwRxug9PX8xAzR1TjaovoEibs1b9RYVe3HXAtHLi3MnZHLHoHmGvyo",
  "key13": "24wHQRLjyJi1f2dEqiaPxAJWjwj9HW3XGZRjZgYxsbCTKDvwsjP5jnCRY2m8Hx2VzHevL88s3pgqsxhnr5cfocyT",
  "key14": "2oVj7WsYiWcGiEsZx6sQkUo6JhFCQsWbVC24qx7P4JSAP6XwXFmmYoSu8btWheA7rk5JmCLunPZ5WnJTzvKdZee5",
  "key15": "3bfSVAnTeXvhkApHSGdH3Sbnn7Q3HSWH5jR6TtesyaKcYKf6ZnVEHd2BpTjVpDiZKWcMBP8pjMzvnjsE8EzEkesr",
  "key16": "5GDzh81DvAXx5eXmbovG1KNiev6m1y95ivskeEkiKHoM4Z65zHfXRBM4sNUTdBL5nA4MSXZ5BcCCFZ3G23QkNu9J",
  "key17": "2b5DSYQMou5edgaKnU31uMEraJSmvJybB5bQi9opumSWcGEGScmapwvqfe9txEu1GQtJSGD4r7U5HfQPnbbmJLAz",
  "key18": "2CstJxZwvGzWPse9DGUzaFEjw7GtA7W123UEV77hGFHXmpvgzWbhPfgKSDkQbrzS6bQLpQEpnfQdeNBj1Vx6o25d",
  "key19": "5y65pknNPRigKMLkkVAFaS61aQawX4Wk8Es82ZYDiyZ53GZ45n6mjAAVRD9MnYMF83CrUzxkvbZwsbMb16AEF1Lh",
  "key20": "3MCk1152xHpUA8H1wAccdE4cHgYi537kPBRyTcRHwVc5Mr8A7FvWGCZaFr882adthgHcUiWXa4bjNUxMoJ3NiZSt",
  "key21": "62wG63n9RuQK5oXXJodaH992bHkMFszu6YuKDnJMUivm5jdeouFUnnK6DEf3aD2Tur6RCKZZSRXygVNiuDghr7n9",
  "key22": "3rAwbEGuWA2m98HSzfu3BENN7bXeyWZt3N75929ZALHPpjJyHu7mPGDA5bEDnbE1v8GB2dMZQMkoNXTPfyWP8m3A",
  "key23": "3ewmc86FYVckRFFUyAvU24EYNwigufUWy9qrpcWzTWyjQbUziPKCFrj1bLhAFBWDuzvP5bRzQaoxGGvgLYJvrr2m",
  "key24": "goLuCkfbb5p1sQiHXjxubkMeWRFKYQ41oJNtCTZ7KibRJydur7PeLXuxqR7yUev8DWCssrZaX5EXbAJnwrTMhtP"
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
