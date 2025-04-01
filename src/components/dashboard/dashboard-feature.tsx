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
    "4BfxsesdjfxJ2Z3uxxMnTgYKmxMM43iXrk1mFem9gKLzFoRmbAnPvbyG1GQCaWR7YhkLboCrHv9X1he9dfBybn9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEf2sC1x9jzMLyrvbb9qpNdkf6Qsvwhub4jeJPv4xrkAWxx6cpCUNFjj6g9YvxMDDA6dWnHAAeawD68nzWRmVpy",
  "key1": "4WtuUidToC2dZexqz5VAVqH6axsZS5cQKQ9zpdynfVD7pS9xvWFjs5HnsPvavHsRaPCdWdGh6eoYs7vzHMAFBGyU",
  "key2": "7svwsxASSE56oYCxyqf7MitbHH1pveF6xUx4joKRk8gUubH2stW4sJH6HjWULXHtAHdKg5BPbfAHve7d65yWGrK",
  "key3": "4J8JcRsfoJA3ktjCfhpT12nDSCrA3evdw6oRxdPYDhaUnB1Gr3Y4MH7C9Yyh5YPtTAuB7CjY4StxzV1KS1PHrNsn",
  "key4": "FjTsUBbJc1unihvjrsDx9L8pkdHzmNU6MEAp2Dqo5CGP89sK5KwaJHN1rc5P14zD5cfniekvqPK3TRJ6cHSB2Tb",
  "key5": "5AzX59PUdQ3worhYyP9yUTH8Z8wYAGvYfRizvreJ6KpXz5m8MXnW4aAKLjFQP31u67gTq6zDNZGNozfa3P4QzZiN",
  "key6": "ZCv852HTPY6U8vxvimRurrRt1emRz7MBzqzVJ6wzfSXxAUw8SYBXk5xLR2wisysrjNL5h857hgA2R4J8VAyUNRr",
  "key7": "5moycEh6TyLiiGZnHwKm1Dj6ejz98M8SVnsjASpr9TQ1C3PwJhAZZHTvea6NEHwptbLNKHQDyZf6H77mf7jxQzEy",
  "key8": "3yTk11xfhM8exxy2zkQBJgKVe7eEmndqMWeA5GcMv5n4XUsyH1v9GnfR2qYaftpD2oT9Q55vGncKTpdYGN8VeeHu",
  "key9": "31WuJfTnSpDyr5ttspdyhvuXYq6buFeeBVJ5zNsxxFp2he4NrQmKh7WNuBaXkxZUTWtwdxiHdd9uaCJooEHDMaEL",
  "key10": "2CHzXMAZApRrLYQsBbXTnhUwgaVzZS8ergUK5dRtXtLtYusYg7qLpZxBhWgxtCkMTBZk4pcejqsRcBgMK7eCFkYQ",
  "key11": "5zV8DWSpkHpb4THoRSLkizCB2Ev8BrkBcuyAqgM4BiSgNcYbCGRHWersNZYcufQ2HVbmCc2t35mEXUR9brA3sV8Y",
  "key12": "66stVLnF479tdA9sktWxQftjPvFcdPM7fPPRm3iB4TdL9GHAt3QwZqjdARKqrBYpHMaMsCPLaHC1vLoSAUb3CFdA",
  "key13": "GiKWJuGw1uy3WbajWdeFPk19YRYjKQPhZg3tWnsX7mKjxpEubds8UkWtVKanLkgrmwdZVtmJEdDgzin1fBs6twC",
  "key14": "4toEx6bWMni9d5jQAtQCq7no2pew8twxSb1tWGu1brfoiCsGC9vxTTpMtKwzigAnt59wNo3WfMc8fCUBHbsrMK3M",
  "key15": "38jLMFAtJx8CpyPMU3pguJiZYjVWYTmC5c6uk3nCocCrF2tG1r7fF8xdMmfvZqa7MaW92RfoyoDgDurtWKqLa6EP",
  "key16": "3yDNZDR7f5nk2zqPp4iZuQBTeUxSaSN9TfQQb4YKMuuAoP6ESnM3Tzd6hrmpPEBjxEuZgY6tp7cXLSbZoCpsLof8",
  "key17": "3xEqbHyKStvi5n39ahurWZ7Q5N1vytAd9JQ3GBKvR4n81iVMXimhotGgtyttrKuxTCcaHAcdtQXVhZNmYgcdXWjv",
  "key18": "4sv2Etsyso2SFokYUioph1roi7M5pMQ83CULgjfQgbhVX5cZP4rBPpyhgrkgSZioJwjUFYzekC2wZBB8HnAMmVbV",
  "key19": "34mT175GpdDRotLshH1Bnd6g5YBh5455RUyQtguVPCwxA87pDDEMneec1Pe3nNquckgsf2uniQxBWNpTpx8jAMNJ",
  "key20": "NsRQMF6i7AQMmu47dh34a7vU3W8z9XJbejPTzFo1ckqodRzFAzejJZabiGtom1Tya2yq5qmWpXKE7bwKXUnMGmd",
  "key21": "64kg992QWKYF7CYe9oxMELbCjcae41pLBn3AZAF1zLJfszsexc2zrUnPLmZpMNoinmRxq3kBh1YfmonZ8NEAbkoV",
  "key22": "vtjG37MNUArriR6uZ68ZvsEsPnCeDDxXNjXiqARSF5varhevj4YQrRmw8g9rKyNwzbU1ecHhV5cnMngjRg37FC3",
  "key23": "2z9sbt88Kaoqd1NqGqAceDF3mweUDEFdTbYXM4oCTyd8McSo23TBEqQZvnq65J3fvnDytx7jhedgXFhMTRp9AaKx",
  "key24": "48vhiY4iu9jsPs6RzgPyv63zti2uApPmTHbh87fbAaR9wkaMhZW6w17xXiAxWg86jUnREerqm6LARSG7CHTAjfoV",
  "key25": "5ot4N7ZJCWc4DekVrRzzFdDENYXHoHG6c2p8Zra7CHmJZzwSVzdHfJnA37Eoogoo28YLy5FHgHX83vnf5ZhzZECt",
  "key26": "VfeKpEUdXFDfunLGdZpiTADfeZm9iwVbJ5wk3hMukch4snyAf2NAgyTubEbKVLWNXJSHzH7EwGgpzPXUYHB3xqS",
  "key27": "vuYS7hZNAEDLGZFVCuvyJupCwP3uJwjBt2dDyHwh3ociJDzTLfbqsc1aNFaQmfFSAH9maDykvUKoLFzGtQ9zPP9",
  "key28": "5JHU9MB7qQ3dNoFBZ5krPc4roCcENfXNyAVZ7P8zbSHGSFTp1vKpZHiTdEVWbjkH41w6P8A5mxhtz9FfjrapMnPK",
  "key29": "2QNnrxkpKfSkU1Hw5oonmxd42pGwwd1XVddbFvBJAaGBzEzJdqZMbBUiwx81K5QtJevcH3DmYzdNcNypiU4bUvuj",
  "key30": "33sxZwqLPRR3SScrTYmdPNheEBbY419N2XVSXsfranuHNUuXv5bwTPLsxNTnYRvDmm3zGK6F3FkHELn7PewbH5hJ"
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
