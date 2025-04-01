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
    "2K3iz2xzSgbZgrE1uUPB6amEvwbmtjRzBFVTU58Bg1wAwbS9aYu5TQHs8ijJPhsbnqc4aH3knjAJocVHabL51io3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59GS8snNiV5421t3PvuxxCijxr544MbairXsYVZzJrdHy4meD2Ko38tKPwh1s2v7ufydU4Bm8ptzx3FQowNS5vpj",
  "key1": "4aJfB5mxjWwkNH3DN9zZNcdTazZA2gTgYJDCFoNfTAY1ezYbh9PvTEtcK81qk27HGvZ5w4hFL4xe8Z3tXCmhRkDf",
  "key2": "3ggcEANbg6GnbPtpBSeCjapmrXNT5FaMJKsT42nghHyj8uWCKfumjn2nF58NUGv57AxkRLhp3G3V3Fvq2m2ougcE",
  "key3": "21qwvKbiFriPKUMumQwe7vSPukteE5hCno9DFtqNoDFFAf1UFfWuDkrunBtU1q2vWzuJKQCs8ywNYnWEkDyvXyk2",
  "key4": "66kEcrzU2gpTetq9VmdaLmzrSxX45DDEAfT95pC2Q61oof5TwqZk4t8MHMepQyk1uCF4waApJVTmDc85F8TDPGyn",
  "key5": "5ybzN6atByR2sSXTgtyGBp1JppWTNXZax6YZTCMFERLNRVxyHWyPxmzmtHuufLpLXqrvukjF7kxUhcyNVxfmK87h",
  "key6": "5JzprRCuxicvpFXxpikzPZm2enu5i5MdeCEecoQBPhcbA7fbi3Cmv6Y8P3DUnkHhG5Fodnn7n53MnC1XQEXXDyrt",
  "key7": "4SEsQH3NwKe6LYHbUGHTiaan6NGWfuVukKp5Py57H2REWfdTGEtHyZnwANct2CBMpv3ex7FVivTF9BYHHcHN9egP",
  "key8": "4i8CyFoZd3WQ5kzfDsjmmAJXYpbEAybwZLYm4E62ss76Nf4ovoP7p3yLxwvYwsvUA2LJGKKdzRZ7N4qYaB8SGjAn",
  "key9": "4kPZmGGKCV5PQkodDKEQzvDy4ZoF37WMnUZQsMPy22fNNbY3jwJRPBRBJgDyTQdTSQxXUZsnQJAysVrRz1VD8FXC",
  "key10": "u2j2UxXJgs3MwjN35t54Mug4Sd2LYkUDpqg6UKSJEvvinm1Nq7jgeatZMoEU42B4SCSxT9BBe584LyiracoKuvM",
  "key11": "2bQk5UpkAKNxx4j8bsxqEQ13N189aSrBB2Z9G3v5xByVF3ebDYsn4HyVxw4oAx5p3P773mFW2A2YNFpoD7iHEpew",
  "key12": "5RWn479GYxazUBw6o3P9ALqVXikLyvWhdavzs9suV3GTk3BmJyF3qXaf9m4ETFbQWB5degxYw9VxnhEKUiV2fKCG",
  "key13": "iTNygFdouc8M4n5dYFosza3MNc4qH9EZaXDNU1yqSbGngJKyaB2WRzHEsTqaDvDbNSFXrDUtUkGdUtoZHDWWFwx",
  "key14": "4nMoVMjd97TGiHrqE1EisDSW6DB6d3uagNuygwvEGagyXZiedRzkKMRUhr38JHwbQ7iwbb6peUnh5QhXhyfWJy7P",
  "key15": "5Cp1e2b1xSt9GqfUzwksEWe8Yrb3w1pNJ7HGaaJ4UTzXFmii5caHx4siEkKJLP1UtFZ3XjLbhiSgRiZ8uRynZpsq",
  "key16": "2FrcbxVqqpxCeuH7EJWytrN8S6taLjhNSQGMsjy7m5G4j7ypYocuBW74tq1nh4H1C8eeXfHg9ceAbWzpzoL4XarZ",
  "key17": "3whXKcwzVf6BsRorHgsfL4Fnf8xihJiZS9HL8ZPaCmfZj7yE14tU8dartht65e4YrGdh7rmg7hYsjrE7vhn9uPV4",
  "key18": "2QS1E593p8D7Qhbsyx3BDVHLzAXAovat7TJAER8zaEJ1nUvpdFkGEckAcDHSYYhzNi96mi3EEtfW82VEEX8ruhEz",
  "key19": "2TnLpFh3aAfznrqtx4uxMJrK2RrGQCzuyVVUtP4XXHrxBmuZZ62gT84gZpSSe7xRXbVQkSrcsWAdBsMdCFocNbtX",
  "key20": "43Yp5Tb9dnLvWtx2yhqWi4ajx6nQGkcZLEgzBDhmYRSYrQMb6haVGoj2EMyEJSpNKwiuVrwsyUU9W7p3zedco7iJ",
  "key21": "5Em7hxSwqAtnQEknURNN5RTDVKQcbkQCqJYddFydkWjcKgF5MJmMJs2MFYos3tFnBEJcH83aLbNtrCsWSt6XWGub",
  "key22": "3sKB1WBTjYzKvBnqHiL1BjNP8wUQr1hh5ir1v2cjD6kDbzHsbCuvr95ijWfEwGHjxeZyWyTGF71JRgyHJjMaWr7L",
  "key23": "4r48qqo9n2UJSwtJpyzyuvMFbVG5vQ4WgRAejRjVScrUAGaG3PrWMZhPbCHabi6WzuaaSL6Ux5yNWzJZPukSJdkd",
  "key24": "4xoQpCbiCf2V2b9dhN3VhRiMmnSqBfHVbUJrnvJoRCBktpEPRbxPfQ3Gth5izW8sS1ZXSZjnVNpLVsKLcrA5ACPQ",
  "key25": "58Ho31BHNZbhhUrxq1mAkTBeAhyMjyVxo8whzbgFJzZ4bPULBXUx43ZAMEt2Su9hrjCGE3jGZtKNpUmok1wFGbJp",
  "key26": "4QzNbWh9eCYJGBnuUtxZAfKkT2TJEJiZbZsquaHD3xSFVcTad8a74WPrphWbDJPNJbjXXxNgrpGkMM1PqTytzbct",
  "key27": "3jqSKY4RJBPg3FzqqkZC6a8Mc5pJnB9ToeXLY6ZCKqmsTVFEL2BZ6BtvwKd2M1Q3VX3sp3bsr9a6zAKaYNF3mTTV",
  "key28": "4a4YofWx2YiiwSzeztpUcUWc57Xnse6Svg5yW4xs856h1p7umP6nJgMu57FSNfkNn1dTm4R1ops5ihhtipFAzt8w",
  "key29": "2k6RAPHEVLTnoAqPwv7XzY8qE5nA2hwH5EiWZrY2jMKxQnMatmN6av2ZZLFysD66BgyuU2DALx1NNguVHmXrdXwr",
  "key30": "4q5jRsDgSq7mNB5ckAf2Ca23zNNh1DijM7XrfX7RhHxSpNmwuWRKuxNPGZCxjydCz4S1V3z1wMhhftAxMcvFzBgU",
  "key31": "4wF4semBWT6fJVSdVYhp6SxUea119hX2ubk7hMwQn8enuHHfdoQJ2xDqRYBd1UnjaXt5esCRsTeXnVPFvrfyPsSB",
  "key32": "H3UECeNWvPbcC53178ZnM4KkVkZMB3MWdQzgdZLbFxavZetmkP81wPgn6vnLnJC4J5W2NKrXXBSH7v2wVRcWBYU",
  "key33": "4C6jMF25GTaBbYxaR36bQudrLLr7PuBuHsr5DxnWHZhwthFoJhhkmz9mctEvqbGxpeoM9B1M3r3MF1opxcfkPB8B",
  "key34": "EFWPwrNgH3dGUNTMyj8tY3dxF2SSNNWA1uChJNbxF7xzk5gi5RTHohY92MxgFYYebz1MTSfqKXGCSuDEvt5wBgo"
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
