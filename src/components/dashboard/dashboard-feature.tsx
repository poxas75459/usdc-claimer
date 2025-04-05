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
    "8L87FsaqgcposBUfPNnZApGTff9dSrmnYGknKWfZPAGFntPPyRXNrzJk7VyQc1ctdZQqK3ACkfiy6MCw8pfpnvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L3aUCEX6ewQfhGZN8wHjKypSnqkLTLE5xAeUCKD3jWTJueyG5Pgm9ZKagMiHQdZ5Tmfc66EkmMstaWBLm1i6Y13",
  "key1": "64DPSryjXBWsPkJbf6u5Sc3jHHAcrFkkVZT5XWZ4pocaM7XLLbpCLqEn4JF2XdrWTgwq5ZwnRjrexAPjgRr2FeTu",
  "key2": "4iB6samuvdY2NZdeTgovkiLEKkLnaRPfTp36hemujjN5zrqsdMP9kSSVE5UmMbDBZJKABto34siazWeZAQaiTqhJ",
  "key3": "2LHgvFnUxXb5wkoTzFLEiqzbL2n2nixUm2f7p82ECC3TkWz8JTCnNtEVJfakE9MjS9fr5eWGAC9ix6jQUCfq4BzA",
  "key4": "h2jkmDh9Nxdk51CNqeazXCCep4oWxfwV3bLaqxmYT3cAjakBdW9x6vg1RPc1eHxGomR5pX4AEuA5PndzbbWc3Zh",
  "key5": "3o2TbATL6VoD6yZqqnyx2jVteTZuUWdTdiuuLTEDF7VHf7JtCdLG6b2EwJGrA2FanpU8DZKK66z7aYxhyHQUQmnj",
  "key6": "44TejPJU7t9nWarE2s5ejusZvDEL3Ui2CWoh39axSkHuQjAeYZ2LPuqPZSHP8G3SrZC2hKziqosUPGgPubzqgAaY",
  "key7": "4JQN1cpYGVrYrTBttYG4Ad3DdN6jhGCEKNHDVHMy5yHpuwT8eYtrw4gTDwXum4cVKdBroApyMttFVFeMvbxpqguY",
  "key8": "9MTKwSq56B3QuKuwTLnuVpWzGssmC69RDKfx4bZkNff36uDPSMriBgfd978jLcwrMtxz1eWmrSydAwrWgdJFg92",
  "key9": "5aNXpYfRj1HmKZiTzdaunwgfw4vxr7KEtSt31UPvHyxBaWrnn29NNo8RV4ZkrZpwhhLhVmTnkqHNc6aQhnkgNoTP",
  "key10": "3diQbMjybDy4b9jh8hKRrrdbgWzw8boqWzY1YPu3Ak5NHh2XnGHV6JK9UkcDigbCo1ZDtQXpdkqRBu1NzeZ5H9ia",
  "key11": "3hpzCQYtYEEyXNWRs5PYxt5k1BgcEjaLm5ZaQ8HkL4k2Duqvzcw63MgempTd1CQ6Xt1SzgcL4qykoX6M6rvNJsZ3",
  "key12": "2T8T3cB2s5kfffnvn4Ww2a7WqvPCKT7Hmeksup6bTfw5xqKZ6GBgCdUkSU2JCB4EV5kwvYkHgJQa2YtVMyUMXiDZ",
  "key13": "2G6Yind7Xw2Aau2uTnkcm82qrcvvYj6pD2sWPAN5JzjiTrBKYUSfBzQSXYsJaVXWTZyQVX9swy5NbzSisCc87m17",
  "key14": "4UNNa1xNqUxYL9e3N9Ap1NPGoiQkBr3nCYS2sPRxQHjD51YZ17DVB3Z8CxMN1D93CZasbyXftzmWW1inm6yJpHCr",
  "key15": "3oiM8LsocjdVJb6YYrccQxBBNdPUq7ZsKJ92AYxt7gmrB9xqrv2UDugxxgnhCRyWv9r5T1Bn48MG6mYGroUBdmz3",
  "key16": "2d5sstiBMQVQGsjzRV3zSBxHEWV5EbVFMdTQpxCmdokvvY2rsU5C6MpYjDSzVxMgmseosbqE74GXgGE5om8jyixB",
  "key17": "5v1zY37eVVm7C4er92ZiUaEtVBjhuJcGSKPiH2nVfhnaf3HsobzvDJj1SNK8GcHh18esws3ez5ESNiadxe29RfkZ",
  "key18": "3BkZjfXaRuacFa4RKRqzofxNaCM1icD2SFtZdWGtYVSNYqFFy8aBAHLDt8rAHRvn53bxfW8PrB3n2yurJszb887n",
  "key19": "5xTjueW6699WkhTEEWKVd5dLaHvxU5cqDhBWxsQCykvyDg4XPpCB4DYy4uFJPH9DYvry6aHsq98T72g2LS1r4vQL",
  "key20": "5DsJFnUMUd5EvquUmLFaTC2DGGBK1FTEjqL7AEr5nULrhYJahe2aHZY7iXmBRSeEC799J7QDoFfvpYAnUDbWxgr1",
  "key21": "2joS7wL67kN7jG5nMQ4tcSuNuFN4VcuXDr3WkVRuxWF3jyyHHVhENfb7BeybL54rgEzfcc7n7SCPz8KMpF5dm8Xh",
  "key22": "2zbFmfjgQZNRRDR9go66nCX6mZmw6upDMo1ut8JCtdtUtqy4g7BxTTfmH6mtgbb1i9PXrGynr9uQrgt8iyzyZ499",
  "key23": "tHcifPPnKjEU9U8M9gP9CbuNwxLfUJvHhUQnEpbQnBcZNMpfrGPA8Tdj2NGxUL6VCnoGbi1pU3BHJQoEAVkRzPy",
  "key24": "5y2ZnLm1R1AYimMWd4bm3jke85Yq6raHFddeXT8vkLKQnVxGX2jn7LRqKrkeS4PpCgueACpxFk9QLJQ8CwxWRbM8",
  "key25": "5WUYa4FUfFGpKY92aV63gK9tSaHMTBN8J58bBuyrrmm8pUx5CTTJ6WvftaBvPXFmM1Nmzuw18PVu9AUSwFpPGK4N",
  "key26": "59Zv1Vg55ZkPmjqS4qgc8g47oTxnSPqs17cMFEyQHqzQ36Th6eMHdXW3X968VQJijFFsmKLrzhLAgMU5GiSaQfwG",
  "key27": "8xNBozH6XqYh4smDD543p1K6iXpbqNGdu7oSq2Ud8MAmFeo1a2xkX16GGw6PoN1z7BTX9ET9QPEFtVUtxegBwbz",
  "key28": "NTGdLNFXbWgN4B59UnhdW8pzFndTnV2sKBGAyYK5GwcaB6nwEuTubeR1mHTgV6wunFpaMkxzTBXqz4zmUCXrhG5",
  "key29": "1sMCczee3bG7J7srP89bxVh29vhBs8sAereo75V5i32TL6ndJEXk2eXyepeXXCcJQ5PFJYaQGVHps7hMvB3V3z2",
  "key30": "3ebHEHRLc7hPgsjD93Ns1qEVjuyziXKix8bk4pZvnq1yMb88kMLFtyHm9BVu6vhUNwCXRYJ3EZrVvLn3T4W4NPZD",
  "key31": "3Ly3CFm286CJfHAnezNZtNmgW6pr5Zqeuur9WQKbHDDtMJM8kMVohwE54uDNudoJnw8YCgYzBYYLLm44FJu8oun4",
  "key32": "4Zj8RDdpXUFH6gx8XnE9LZFRQNuZtnMs3f9n6H7U6Yz468mMuatSmQy24hn7Y5Rtn3uX516TApuJ6r125bobdAyH",
  "key33": "1ume9Cm24HwotCSVtpHHsugMEPVR4RQRY4BukjLfLub6urycmk4HKddYBYeZYNv5mYfNYmdeWhTeUhWWvCHD8w3",
  "key34": "fiYsDJKqjPuqrRSqAkuYLk5E443eShgNJSCB4dW2nMTUCUPchmZZwkgLFubtyEVPr61FRaxyjE1mMhPKCbg9H28",
  "key35": "538n9TV75qrJAivjyvkskMRSLi96fp7uSkHy6pUeAp1FEsYDRARnHsTRrWYus9JkxXTuSAuxuJxfEFstEwV9mzmo",
  "key36": "5j4mMDq1Av35bnhHyfxvDutegeeCX824t4crv4Ny8K2GRFwfexFZGb2BbLzhNSo8r59gHYzhfyXaeJRj3toTGmJC",
  "key37": "2pKMbnAHTHJnSfoYiLSVnVfM35TtCnxkUoUm3rudrtZ6Cy27FobA35BvfvZhwRQADbxQEQyDUpAigWyxCwvJXZo9"
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
