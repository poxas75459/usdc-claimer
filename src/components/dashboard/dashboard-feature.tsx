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
    "3UpW64MaB8uZFeVXTEwhtGcNrBunQeRyc2hiRDriHbENqVYCTGQyzhv6q8tw71jsyisZi6JkHG6K1HDuUnrvgfec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7S38nx97rTBkm9dV9TaffDTHPxrvK9p9svXpB7CsVqGWTnJn19VySkMseUaCLUq3cURRyH2A6b4BcswMiYX77C",
  "key1": "R3V6x5QfyQpNnkAHHSvvcva3W1eYueBBE1SN2W58z5Ub7umRZKZfxYFuTUHeSii7eLsnkvkiyBBe8Y2MNV3qZ6A",
  "key2": "5SbUEKvgr7zgX8mdNtMffQVgNbKVdjFEUU5Cx6BRdGhnfdS5pE3B89jVX7XjSvg1ZKrWWsVGeVCdDVyatKib18E9",
  "key3": "2ZXR1J9AC88xqjxpq27SLSqupq5UUwMbjW3eJaewLEhndZvxAafgiymuwZpHW2hECwc3jma5jHjXbY453GVGvWSk",
  "key4": "4gSQZWpVrFDKDNENpnCux8vNcrA75sZFpv1tjiUBRkrxNpAydhcXPVLKSMmtNZqwvNgKyvgztxpyMsURZgfKRv7N",
  "key5": "2yQNtucxqioagoEvmFGvvGU4BHSWXZsBSfcdA1Xv2mpgzH7Sidh9jT5kroWbTMiJA8ArJZF982A1EqocTEwsuzmz",
  "key6": "2ZEMH8PeL3zfExTcvghLpziVbhXnCK8k42hxBEhcZegzfKyNHsvVnuLQVCY5MP1aK5PjNAsH8XVB5wvhbj1nxtws",
  "key7": "3uPpFHgo64sYskWFpJybadmfhXQ8sYC4ArSVgqSdbR1MD63sGMBwWF83PMgfKpkFcKDYDpC49ved62XTwYsMwbLx",
  "key8": "5fuYvYJUHP58xMxTRXo1v1mnFPQpEz6AtPmWQ2zh1QNcTE7qoJDq5uNy3EL2hd41jTNcb8x3ihq8tzyZ88UJAzYE",
  "key9": "34ERcLJyZ7DZTjUhmvN7E6uJr9rfeMibAteZhBL1nmTu9XLFTU8TGEA9GTj4gKV5mw2Gg4ofGFwjBff1bUzBsjmT",
  "key10": "4Ao1HmQ23BCvN1JtSpWbUU1HAbDXiujzK7G9nvFtfeHAjhvufwD4BUCkyDsaZ7c91ZAFTQuDGPWQqbLSpcXmJRNS",
  "key11": "5JHxPTMmq4GXtBHuXXW1TqZKTyBTAB1AfcRygvLzWLNKo3Nx9mgdfWb4f9h6tRgAC6m1U36Lp3tYtfXxrvFy9YTH",
  "key12": "3eZ8KxdbCaGoVmSTQiN57gxgX6u5ac5EC7vh8BZ83X5qxHthnHAaCqKJywJV4doHbUCtEXh8PSZRkd9wXo1Ux2g3",
  "key13": "sf7wQpgWDZLiPbJFd1aBEb7bLt3EW1vPP2N5BbEgRqvdBwjMeoBAVz2muiw9pWkaDMTqGumyRKDuaNibuJaEwwz",
  "key14": "3PPbrRfnxJMZaCV8y7q7VdsEhaxPZZa7VvcUWrVMJdUsZDxA35mvpGrHtBSUCCQE7RssU1Tgx97yPWJSqMMYmqDY",
  "key15": "4xkVzoFAscEkrTrhNt58cNF28YfAjXSaT63DYV3DosYWPvHjyUduFK8iV7DvBnPwrS1KXMtYXVkL2NfJeg7VnDZP",
  "key16": "3fhTY4W7aFX3GmSJnejg8Du5qmRcFtWwLvTAn7XW29WogzyydsXXT31BJM1wFxzfcg53GYjLDRtjBEreqvWEK7a7",
  "key17": "4ezjcagvwv5Crzs9iocw7yJuQVocyXw4cHEWgjg5E6vUf5UL3wXNZ5F4TfDAmjJikDX1cGsX77uqjH2aC1EomYYc",
  "key18": "2LeQpLaxhCDck8EMRmexxT6vMN1Mm5JKESa9XWiGCQ3X39yaD8xLWwbdKKNVeK9LPDuZoRRaPiL425DTEYFeKHNr",
  "key19": "n7Z8jHsBDdRCga12Sx5SbecXmfsdwRY1n1JTCXB89fsFy54YYrrLvEKHLAsxHnz3yVJQCd4S9GghKWW1H4YvGhD",
  "key20": "213SKcnk76f2dhQfrXtYuyFGDSVuH9oZD753dZJ3sS6vy5LoJnNZpRg2N6zfTCJSjZPBBqDTRcf5WHy8PCrXxDer",
  "key21": "3uKjrEMQBDgZoGnSaGrjMP2jwaRBPLPnopKcA63ZdVVZjsgyEzVAZ8KZuhB6tLCVjnZYngMFg27DaAtkdTuk9UAJ",
  "key22": "2U1uscYyJLZ4f44gff5UE5hJqe58TJZXuE6sM6ta2D7QrdWX3A3mUn71HGoCVWx83RpnpCrhVJMyUTUNVR66hwRh",
  "key23": "4y5ikPQ2tkVr2KtwvvVm6HwKEsJjjAC5v36WU6Lzoyz2Z8DJvnJNZFbKRfv8pHHDFo6KbBwv2AghPyXjCmgeRSwq",
  "key24": "2F4Y2kKwGW22yqSyWK4meFcCZxCeVJfP5S9Lf9AmaVoGfPmhH5WiQA5fevEQgns4V51uC6Sg3CKvppNKVS8sfAhe",
  "key25": "2LLSXomQ57JBzWb9HKN3QiQxxTYpfttmEw9NQonmzwmFskLNKQWMNZ5zSaid2Y6L2DzEcWhuwShvTEpjC59DPy48",
  "key26": "2GY2ySzJbxKwzJq3KbZdBhWRfnKnP3QrrqEizxXuTWV3mKqbiSNSCosJFxDygkC3NXE5w4qQAymzVSsTQeH3EnTM",
  "key27": "5enn5K62vbuVQyhUCJVR96YkLHPQA98SYpoU3juBvf2c7qU1H4CiQ7u9qEFcEDBCyoADTXiyauWrK7oCqTefZVTM",
  "key28": "2mRfAANpv7tamyhwx98zAETt75LhSRgsCpEBVFSN9cb5B7jadrW43F8gDYGTzZhBcvk5hu4WcfsASJZoy8YbWebH",
  "key29": "52Z87JtDMRMMCrShqGAPS4RHfvZanC1AbbTyp9UvVZRZyR1aDTzDFWztdmo3jqnQ6j8AgmgXdYw9JLHXR64k4MRf",
  "key30": "3AB1rwB8MWfmqq6inJwNsgJiWso6XrTgAn1PJc67134yLVqCnVnHuAULrDnWyKQmk7TDTMGUP8VZC76YCiTxsjYF",
  "key31": "3bQaZ1xmhejBkkAi6MGLJz1FBVCyYgkWs3r2BbFQyNorPb7JJK138jYYoFi4ruSa2p4txgkATBBJ6asJmBfGucV4",
  "key32": "iBLAyXCxTZZE96AewK1a6knje1rqtvikefXNMqA6pUEt5Fr8e1rSQpVuBe7pwvY86P5cYV4ZQsCYA9z7JZtXWvS"
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
