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
    "3R9oLF6vGgdaiBJaoDrC8GkCdKHRF93P2tMx31rYd8bFmVEBKyFrWdDvF8mPa6pWQVKVSBNWdiSGsdwNSzoVffxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WznsV9xzBFYqFxKRkJphy6YCvv4HaqfENnxusVsaTi3tZfsw1Ltmnxw4nd8C97fKLb5qUn6Hwak1ebBYCqE9Dus",
  "key1": "ehdaEnohmktXsUqGGD2jQYUv1AcCa6NG8o5K5pAHQrEJU4kcMczUVEpbnzW4o7aFzuWQXBwaYjj6H6X8o4Jq5Bm",
  "key2": "3mETFkqpT2JwctGZnzLZdDfRq3Ge5iXi2R1JFyLTjq3byQakRNa64SgxHwNc7ZiBRVxULGeDAGLstcEwvCMZstt",
  "key3": "4PNhcpiJjGL6ScDGf8iL7KrwbhbEAfUDXoLvWF5XrqbPumyhweMa9KwSsKwtZGJs7avY65dfYdbHWxT7jJUkAT3n",
  "key4": "5co2qLpfD3gcN5gMMWZnk7mz59xCGHGTFUwgpQ2yau58a9KHX5hVVthiteB1Ym1TmkasqTvDmUiFAVY53BHz83FL",
  "key5": "5ov2nMynbWuKPXHMEWfWJFReveQHg7ynCDKo31e34bbzo1TCacFSRhXb5BWrNkPoCe4Jx1qRZnufSFJAXY4aa9d",
  "key6": "4neqFSr7Y1PAwzcU6wmRtRpQ6bYboZJDgGWVskMjJq2ZnTTFYbRbNoBwzzqNqkTKFvugNmT3JjP1HPm2DyTaXinV",
  "key7": "3cNCyJWsSE8zQTXnyNSnYtEnt3VWYvhVsGzN3gTuoJaemUPjhfzbdLPvTYLjxrnCzh9m1Qdo9pMn7LMoiZt59uZd",
  "key8": "4UD5SSUrj6ZYqs8QTNiKNJMZPxCMqtrvJ9ZZNFz7hsEMmfwnjRgmGNgTsGJgyV2Q7xnsov2ir2wX2P27tkjuxrco",
  "key9": "3nYhJePL4fR9xynVDxdC64jXzbMmcR5975txb8uzoQoPJiTRFGJ5uzeWQMxR9MZWNyjtcJuuYretP87Bu52e8SpX",
  "key10": "4vCZ9NNv2BzPFhBZqLa1WmaxM141tsETnhe4yJajeyS81o2amjXapw3Z8cf3ErC8MVtagswUjtDNPccnTe2tCMy5",
  "key11": "63eTL15f66nV1sNMoHCz5LJGAyS9tAx6hQyNiA14pd5iZ2yQ4GeQufMAxeWZaCvUB2BHsosfSNQSaEmHaQ65yiCn",
  "key12": "aypy6RCG6kPBwXtXdch9J8373JDv1VF7HmCmJNJtY3pUpPnoCyZYonWQC3yrabxMoKb5PF17FwLbETpCFHWbE4E",
  "key13": "4sTnAm3nGgLVf1sHE9RYmNdfUJA6zVuhDjUTRugcGNExqbnJreRc7bPpFuJ1G7ojyQbUmexEtS1wC32GpKN4QP6L",
  "key14": "5XDzJLYw5WcSLFhp9zAvc6RJgxL9L2QwsyFcxwV9vKubbK5XuXLwqSxyW3Za6p6ZHkmgKW4eSMoehjeybhgxdrJp",
  "key15": "4V2pnkon3mtc7KfchkqXmrvUfHa3MMP9Z6SK5NYwkGKkq12VtQPxJuM3XXRiP37fQ19G1Muh6wrZMPWycLqDGuL3",
  "key16": "4pTEdRNEqdV6qSYEFSWiMXSbRiFTK2Ne743HuA2hoxdmVLcoZQcLbtpRZ4HodjbsyeU3G2XJGcR9V3z4ZznYJm6c",
  "key17": "3AEu5zjtPqdxo2cdZXyMeNK45Y9j1aZVab4q2m7PPARTPDfru4tkGTr5Mr2WXdCei3dy4mZ3vKg9VrqUTb3yfUoy",
  "key18": "3VxWaMGs8Z5RyBVQ9Y1fLuxC3Gx9SxQdT6m3mLuKoavUyQ4woosE81BFAxn4xNAiTww3sVs2h969VB25S2q62eDo",
  "key19": "bTfGGTUDC64sWe5u9aXSgLt2zDNKtH3DwXQYf92UMszQ5QS6HTwvoamVzY8A92xPMoFfSqE6KEeo92MP3WqQoQZ",
  "key20": "2E6hFb2CSLxQmvV4kaLDnMTQD1wBgkC1f9qX3GgTN4kPGmQSBNKwKuHuDGc4cvJKRKtdXMHmJjCBsZofAhJVeBeS",
  "key21": "3Kc4Xop5Ay4qpKUkH2895t7H8nXK7WcMb8HC9XQrs9e5ckLpvHNmrZXJpW6vyjyXQRnAHDnaCDs9TWdTFafCFySf",
  "key22": "2ydbrxUFwUoKux52qtCW6bGh5eKrpAGPFPRKTf3XWmUKfbz27EjZqzyeEHjEs5aAKBRW4p7GVTXqS1uXDsobudhr",
  "key23": "3E4xwgAStYKXFKQk5333nEFcDekHdRkoXWdRpeeFPEYcL46oGzVjELaCiXQHx4aMH4eMxrs7W67qo9VBFVdyrhNT",
  "key24": "36GEmzDCZxHjH9swYpn8SWozK17bCx5e8UMpFAoqReaf6wi5Yud8pPJW6UrQqZyG7UjFWR4CTCwQj497kDakdAbo",
  "key25": "5ufXUMnceErCD4qsxeAHCQoZQtYnfRAV1nziSGwfsu5NesCVVtrhg741ozncVHpyxDoiFiJN1injbRWrpiqXwXkd",
  "key26": "2syAeZnSkTEhxkwTfG7RKtaXywJ123ymfqUUrWDzCvHnmBT9rPSVp2iw5p9vUpZaWL19dGM1N82iDKu5n8ditDrP"
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
