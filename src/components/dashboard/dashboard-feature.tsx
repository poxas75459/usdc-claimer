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
    "27kD1o1U8XY52s2xmXNva33vZzEZo7rEyr7xnsYpU91gwo4ARYUoDpmMpwvWtx2KuHwZqbkhLeXA6YFUckzuXCBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FWD8ECV74YgM47q3JXbUfShVTbZz9LKV8TzY9sZ2pvqYH4BkBnWUT3bzn5uhGu12RHdv73SgKpE3LsjRZwE3WAX",
  "key1": "psTcFec8gmGxtBTQ1niViP2LLDt3P86o5N5y2ykdsD2qYCjFx3YV5T1wXeeyrxa2L58o4Se1Er1hzXbWsjWPdFD",
  "key2": "5Mqy3bMHqN89DohV6KCjwe5U2yC75KwTaty4w8aApNP5BAfpEP4B3AE4y4ybqH778qDBFGt5aiRbjhsFsaQoSPhk",
  "key3": "jMNAucy6BMUwmbsL5GKUrHN6MxABf5mSrkRbV5M83vi9eT2vEG8D5P1kKWPPWxwa8kFdhFANrp1nsU8RaRD94Sg",
  "key4": "24dzgCFdvWswokSzPh7X7n5BZuxQrRgo5oxSyhBn7WmQ6JxmmmDZb9w92bN2JkzvmRF3J2ViUYfhuwrYLWg9VEJo",
  "key5": "3xK3kUoe63yzN2YpVCyX4epJhJiDWPek1uzCifEzJ2umm8UFvdsEsKRX3QE1jHaH3kw4jLUcjPCZ6AtJd4NGKSrV",
  "key6": "2Jrh91ruPBZegmqZGhg1mP7ngqjktXwh87CVQ8TQGWDEh64reeVqP7RQSfbWdRRZmtGoLThTcfSciWTtxB4neMUS",
  "key7": "5DR9pNFxX5rSGnHTb8SJrHB93VDoBz699pnWLqWxv3FTESUZZ6dwLZS96otsRNTEoGxYq9SWAdRyFCrdjdRMjA8A",
  "key8": "28weKZPH8Vp8Q7eRFsD3kDLweC4mGcsvua1BVwsfWXZbAUVVB3XswnMvEaE2t8onwZBFaKvcNABEguc5G2YQ7UnF",
  "key9": "66yDdBdtzZ4fecihF6jpnNW2BogSDnaypWJTQqsKGAaMtffp9YisVYZsjvCPRcqkN6LX8KnDaxLMsTgP6XvXTVW4",
  "key10": "2yKubWqjYH5iDM2RQXE9CSuG3fH335nkg8aKhHuGvf6N157UxKVXWv754h1Y2vyWkhtcraqTWhuLpvWvKns5TiAA",
  "key11": "5HoMMoZ35n6EWMVcF29r4WiKvtvhst8P1yCsRDKEZUZSpLtF356TCiKHYtbEuQj3Bv2c5zWU4fky7Tgg2mJqica5",
  "key12": "5HJWS5PwcyrkgyJGuu4mCQVvvhwAPjZ4cXDjeV8kCaeoqE1frpmG4T95nFvLBR7vNsqCWqYfHy9aD1kfKRcoB5fn",
  "key13": "2hGkxrbYUWc2aiVXY8nzs2JpwmGtNQYga22mMWEhrq5QaYJ9zpyn8mGxFLM2breeZwzaJjoAKrHHidBMh7uG5EB2",
  "key14": "42eG5x9eD75r49UWBby4cjuhZBZbv7ArntYfbSFobMnW6PbvPP4jUy6TAMzpZBSyN7cEBHrk8RXctkpjbCBR5x12",
  "key15": "2iA7s2G4g54iaqHPt8UfXPsMRzAcHXSmX9A7AGV2SY9JozExU4oi28GbjXLYRXraq2gQhY7Emdp6cRfwJ8mUFYeW",
  "key16": "2sgzpkSosUUj6ABqGJemkcv13B8pUoz1MVnbpK8fUEGzgNui9cBoA6ugLpuKXxueqcctxFaP34oRpTsHyHEDrXxk",
  "key17": "4iqQfBHpaYBhVJMJuqoXoCsdnkkEPiL1zzuEStyCiaG6TE6MAbELLSnbUqYpeXKJE1eL3wBLc1cgqA35nRLM8p7F",
  "key18": "p9hBPyPZgkGf4xXrqiWm4yw3mHHPQzeMhyX7PEdMgTQkrrh2Af8B8mWK7VRuPUbZidjDym7zQi6pejapgnotCYX",
  "key19": "4dDGAWRkscqN9exYEgnnPz7kAaHHDHM1QQ5FpZHEbmUuDLwVh8k1gBSLyLWdny9DANi7LfggFzrbsShG5DrQ3BTy",
  "key20": "3yfTivWV1gCJtspkPHX8AnB83CzpgQX8WtHyDh1hkFQjq1XUpGigsQwv6y1YZ9HLwWySt9b73McqTEEuifQDusBp",
  "key21": "2yJS3AvK3qCCK91Ps7e9qocoyeMFMEv44rXfi8GMkFpSmMZdt5vtcvFJEgnqbAGcMTqL9YU3LbqfRBeYhaWcmqan",
  "key22": "UfV2BoSKzB3McbGUeBDfXtQpiK77SQ6rB8ZrhYTGHH9c7TBUXqEWrfjEs6Kc53a8qnXC3uwjaWPfuGRKLCHzzui",
  "key23": "2rrjyi6NAi2TeHAAyHu4vBFBqu4AHYoooisr8YhUXAE6WvSq7GT61d5G5bJGXowkEdQY2QvrobNSpbEdRutRuhSn",
  "key24": "4MwN6k7wx8Ho3cSnVTz8Sz3AWt8prq6KPYjnzEpoMwy5j55BG9WeYCS5GpDZ2fEZprVSkmarxqKigPtBkEwJWk9F",
  "key25": "2v8B4CFusp8Nv3X1GCVi1ZhnurfhdNwMYtz5qQVw661oK1485kyTBFgiBrPF8h5ngoHaBv4JF1R5UKBq5ghNjvmR",
  "key26": "4t2x7uALfVWahb2zkWX55PwAMzyhTW6U9h4BWzC4fnMrTASfuofQwYc3vAvpJzCJ7bbn8Fw31wHmgApFdzNS7enN",
  "key27": "121y2b3L9gyYyZWkm6v6gHPGhAxU6iVrB1Uz9tK3FcZMjp4jtMqKvqKDZkUdVNmFgetE5zuRQyV1QyJgfZMMqGTu",
  "key28": "dF6LWa93UP57wMiz37TjfB7o9wijGoF7eapoCJhzZPCnKGYAmGb79GhjusB33BSRi69Hqs1qJfcVztoKJg4QNLj",
  "key29": "2ETXnjfGWqtrvYTSAKDDCwrWANNq1yjB2cH3uD8XB364xVHPnTAhwGvYPrqaU4K1g4bDRjKtFrGhf5QmiUCGRNjZ",
  "key30": "2wXhWCWXedwHEPjgrHGFvGxTuGukx44LukEyzfKUiPyDL4q4UcCkdZEEpEq2HHzGvPU52hiR3ro2t9jhb83mZiBE",
  "key31": "3EamcfGKFeKbKUmmjn6smq9Sr9QExJX8UA444aa7dJfAkkT1c7q6UWiA5368if5Ecv8UtonyrU1bzaHFTyZufx7h",
  "key32": "3xyBqmjwfCKxeJVyQ6gHyKzWj1MF9c8RzRKV1cUEXxSiRFdikqmC8zBx3otXbgn8u8euNtGumUUu6Gs2dq1xPWMs",
  "key33": "2HVPPVkZfvKBvWoQ9QKH77LiuzbHVWmgZVZFREuDkhS9f4oPiQFSypuDC8Wsqex624QRYRfSBGoeipMvCD5wB8xk",
  "key34": "2fLJnbAAMbhhQK16MFfenpmfqLv65WM4hjQXvZCy7EkQqX5iEMSCA6TFAqq152zyciXmeTYD1Yes9W6u8aL26Pb1",
  "key35": "PWVkieZF1EdVqPUD11AYfPMJt9nDwcJY6SG9soq9hobeKn6sQHLth2PGDpKCiBfT74yFU4jbsMHtDqrDZLzcgnb",
  "key36": "3hy6rJv4zA75BRD5Ur8LgS1AQ3RbM5ZDGhBsBtDgKNzkBqpUzmJNNR5nrZs8ffmhNJHT4eQmXbPnyAhMd7VhxQQy",
  "key37": "5s43rc8ttZM9YeVspaRXK8vhsU13PmHbdp1WAcBcCRDq3GEBorM3iC9EcpaYb31fh38qgfv5JqXgEJYeWkPb3q9N",
  "key38": "5d2zdcZeEQ4ujdG2SWdfRfQr1hVgSxUVMmRZpPzQz2iTnQp33SePCHn8dxR5L4tgiBEpds98D1bU4SoqP157YCEh",
  "key39": "5Y5eHNpHm7yukFw6SVuaPr5EfwGsqZGfDHcMsEFEvHn3kSoifDnBbzuqHa79eDRxWnqx1p8sYnNo8Uch878YQyvL",
  "key40": "5JvcgixgjSZev2BLy9fQS16Cx5JaRzoZAehJ4Vfdfon5pdBYVhxB1nEmYuAy2wfZFKz1s4fvpDcNZbToaBKRCerZ",
  "key41": "Yx9C96MDcPM1wbChzCCsaY8sz2wfUMEfxE9jesgezmzWTi2cmCMnreVSVoKZujhnUqynDetH1QWkkL1khaoAe1m",
  "key42": "5ucsJrB8JRTkX4XzhGiUWNdZLi2ZyKyacBerZ92XQrcKTBSwnnxvr4Tx19Mw1KCrbPX5KUx21TvaBivPT2pUz6fL",
  "key43": "66EwnWqu2MWMfGLkyLX77FpXRkCAnsmzTbjLCeYDohkPyyrow5pKaoqn7JAYaqrK6WFziVSuauwXnetiirNuzyEt",
  "key44": "4YukWfAS3JbY6vi6Cya6YhZteZGvhZjLTHmKYwWHVUdJappqLTMoCEahnNipwzboWJ7RH1XCWnbdDSNkMf2w9FJg",
  "key45": "5mVtVnhGX6uJKwge94SqWwpxpCSyivagFirjD7Un8EALS7QofQyNCpYJX3f4ThnGYxZTFgLG8WCnjJucy3KgieGA",
  "key46": "4teWvQsP9iXnN2HfmEUy3uV3jW1TXML7tnvaeD9hJEjNxkVsm3zoejSB5AvobLLrqDxQcnEaSmZWEmiQKLVFyDz7",
  "key47": "598YPh6MaSAP32sbksxNJh9cSHXtoPth4ZmT586FNKDgGLutQoUCnrb4W7UJwZqKNH3Yon9zzb3EV5x7vieLaKmM",
  "key48": "5GpHshipsqrQrzppPFcyfFgW6PkKU972vWvoJ9E83VRYJY4b6PVQwoVxmYu9e9UfthRVMyW2whhNEDKjXVfDrN7T"
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
