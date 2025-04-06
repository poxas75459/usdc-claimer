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
    "57xS6VDj65FwqE7yLVAatZJLN6BBGbEF5bJwMsKNTvGun37Smc8VsX6NZUBWVv9WuTqFPfQ1k7KaCdh6oMufwSnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wehMtueCgk65zkDSCfpeXYiiDFeR1T56xXu1jkrgDFDEEwLYUbUPXToS7iZgbdPZGptHhG6TcaQdHJ8u3ZHHHts",
  "key1": "3QSpy3E2Foqsu4reXKUFdAb9rCtAVEPguuBsUqgttRFARL2eYZzhePukyMyNktTp72vTuPYr2ZH9Way5aKXUFmyd",
  "key2": "5g7m7TsijWGGPDnNCvKzKAGwcEeEkMM8xn2KbU87oxPdq4oQQq4Q6Hw3rxTZwm7qWWao7SRTcarwRfaWhoXB4JCS",
  "key3": "4GwZfVp22PVBP2qcirGu4miRs6oUywdENSeouEZjKjdhx29tdAwQC3SLMSRrVWVBKCjZJoiKvytGvnndU93CX6dm",
  "key4": "dJKoW9HkEvXYLowQ3sKanvN8fNZaJDtZEboc1DfKbhCARHZ1dZVxVta7iUwy9kij5egRzpUqNzXPRN1V62Bpwbz",
  "key5": "37CVihZUxwQu91wxE4ZzTXRQrg2m68CvxYXYTMmqYz1QQjyZXc1D8wZU5WtukSU8XdeSNrs3JZozNZ98RUBZEcTf",
  "key6": "3tJ8qVa6M9kpGynnqeCBSHTTZxDwyS22PCZA4bdLYNA89vyVSEfWHYHvTUmSMd8xjvUktJLe3GrJnLg59mRktPJm",
  "key7": "7Z5agrMq2Uzg87QjcVzvXb91jbxKigt8EfBCxgREgmXFm5f64WcHKTK8MBmYk468Hm5KKCV7Emw5b77DPMnf9jW",
  "key8": "4vpe1S1yrkc1yjeFt7DKzTobmpjJnDtWestFThXM1oxiAck9v6wtmWKxvshpb2xbJmRq9bAGbckYdviW2BqJ2s9c",
  "key9": "3jCGXt2GAcSQCCWe3u2xfB25a5XNcFSSr8PnfAX2xdedGYMiiFAGV7GzVWfe8sDXmf4WqVvJ21osY5ui8aJzF2Yd",
  "key10": "56YJGQUUhBsrZ6vwstRSoyhPEZ7fGAF92sbWENtV1ce1TAKcVBEm6nnUhjEt9QmrZ5tVPNbBpD4VAqV2mB7kKxV1",
  "key11": "axgKw1sbPRvM7A5ggBfx4rZR1TSBc59WkZiuftdU8XLW8rro8Di9PBf3ztPWPARj9t4WjC8PyJ3DPf3V64WDaun",
  "key12": "2ttohmxsAZ1rWqnbxK4Ate9M7jWSMgBrCikygeG2WVGyKf2uLM9jMqpsznmiUmTvh8SMKRCZRmz663JWt6jZ7aHQ",
  "key13": "3Rt4UqWQLqPkQYANy8K7Y6ToUBY8WHay9w4RpMpRApmpDnA4ZF4zE1hjoXXgUp9C5fnMMCK2mPuM1ztLzyTYGQw7",
  "key14": "5tpVXG15ShqdTRxeKrE1Q8atCmWpNoCWMHFRMWgcfTmMJzuJF79Dv3nKD2ncrWpzjhs38U9HhkyJoQYDNBw2rDVS",
  "key15": "5BvzoeynBkXuD3DSrCss9T5txef4eCrZ9xjZEfvtB9epZd25dHPJ5RaEHUGUrvpYoXy5aXw2ZzwePRZjeJPaYcd2",
  "key16": "4xCitTto3x6wrQEjBMX939XuoaPnPYoNphjcGwNweipE3tiJSG1AGidMoh78S1xkPaN2HhqYDyVzqxBoUnwf28st",
  "key17": "46jJ5sVGFHsPtd2HAreNRP7oKgUGRzQLdLCS6LyDzDQ79pS9sGyXsd8zmiQqJzMsHn3Mw564bXJZH9TkLy7LySo1",
  "key18": "4VxfJ3xM2hvmSdZGUyfxv16opmkcGx6qH3bCY1oXXHmdH75ujnJTUHVY8wJ3Yg1MFVH7qE4Yhc43ZHawThCJ9HqQ",
  "key19": "4qHb1SgbSJYvQ6uqwMMdvev27FewuTweG15yuGxbkBknUsXayt8GXnkrQHypBPUkYKcKztdWaSxVSCspV5iAqF7q",
  "key20": "26pnbyWT48HYwgaBh5E5L2XDAXXkqrxk2qi3geWSJczscNi7RhVDjJ2hYm29CHc5fxoF6yWaZ5tkU9XJg3vy8oeT",
  "key21": "2EABcgUT15qaTV7iQW17rPur6YXx1tFxMPwqvMxcToS3wUSyPT1LHgq6GBBZwmxHb1pXZXosKcntLt3SCFNGauZg",
  "key22": "p3Yu5iapcsBv1dHuaULmRSQK7DA7zTLn6iNNzUuK9ajyoJuhedPeq6unqWRTeoZ8y4BryNNiyoxDcjDmtFjPUzG",
  "key23": "29aqk2XoaQoxxXU4bBaiXEkhXVctzrdpzfFD6XqZwwTdPE9cq1UTyxVW2ZHRqusEwsuVRGXp3WtJjRhWBUSt4dnS",
  "key24": "cVouPSnr1ShH8PsvLxnVczkA1FkUSGyhNS5CJS8Fvvi2nQupCZbJDq4BmBcL3ox9RAevmuY2FatxAkt2Uwy9Juo",
  "key25": "QbcSuMja1EPSYjoF5zjREEBEopdDmNphSnyHs8EkrkfXDVz6F93zX9hDX2nApB69rV6TCd63ywhoTVpoAsxJnQs"
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
