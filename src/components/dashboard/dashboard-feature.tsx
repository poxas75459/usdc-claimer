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
    "3vxx2x3fpv2RQY749cyp6LxRJpbetFLuZxmmAHAEw3u4mSz5z15bbRQxW24TM875P5e3eMLH1JHeiYCQXDc6pEfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QTj7j5fpsBzcLx9TyGTCci8pkiD8YsCD1ZkvwsrzxkSTyeyYeMMc6vLmbzLySBfcqHWtEU8e6noyVxXuKbo7iWR",
  "key1": "3jUDUUQ2jSUsyYYnySVirJAwCkR5X1ydT24shgz3xyeWfbs4PMuNts4pz3G86NqXT1GGqtaEcB4xwKoYUMeJDY23",
  "key2": "3gw71JEgGNyBTTxq5F89mDxHRJqCaUHmy4NvEotFfofQFyRv6TWTm1Lx8PEnibzjpQPkSFLZ4VU3JKL3VyzN3pr2",
  "key3": "gAAuKe2Maa3TogcZdNfJ8HbG7PvVsSA1qHchWo4Ai77nKShoDgrh4H592dhvDZPRBZ5kNHP4b1p48VBfFCy5LJH",
  "key4": "5h4WZrCm9qQqtox8dsMHXzEvy4k2siQjAzA5XXqaVNGec1CTrrNomodRJdseSHmowZLayKqdS1ytAhMLn8A3iVMW",
  "key5": "3unQE1G3bQXHvd4n9h7edKoTy7YpF24s2tG1xr6dM71R8graqM5i1QvapmVNPzE3Foi7zo76a4b67vD5V59avGZe",
  "key6": "21qr19LixqobWPoXLn733WjycyfL4vH9NG5A4RXhRUfmTy2gkgKTbXfLmqP4iXTTX5zM1fwSfHeqngYbuXRx9tPz",
  "key7": "4RPTJoP42tq8T4qf1rt2VYft6zjA3jdHUrm6KG8LTGeZmdvs1PwGykezqHwdcX9ZmhzLmaYTP9tVvRdfpYJ2aEHQ",
  "key8": "5vfQt9uBoT5B9jxfg8aDvR4nD4mttpyaUmSejw8Vd9kFBoFCrv96c99Cw6RMKSMDq8qwFDoAqznZv2AhVBftUrmt",
  "key9": "3KpNDGZyEk79WiJU1oFxsxKB8p9G86WUb8YuRFNNCRJcVjnFmoiPWfLhxPm3CAS7fK6UWLEqhe8ZY6TfX7pKUunE",
  "key10": "zq8whTkQmV4CQsn7VbrNHyJ2ws5wjtGsBphXKVpJ3heSdShvB77T6uh9EGtn2zP7MU2TrJd1nmx8fnbZ7ZAMqxx",
  "key11": "3uudKaTBL7EXQkA2QaaLAZbJM112DRsHHpngY3ztg38x45JwHWBEhzgYBwTyRWj6uyPdFA6eaC2DemTvBiiefWZ1",
  "key12": "2QHBTmAAhRD9tg7eSKJhzHN3DYDK9xS9Y4R6HYre8msFQxygHhSTCnueHpxhyc7MHHXLgnwVhZjkg4UAVNrQ3NrJ",
  "key13": "5DKUEsTYxuQ4ba9niUBfjD8ALH3CJAacKjfCvaGaR9qQoeYiRNptAkqWCzfYhSk8cDYWmK1hQ7WuGhS7WAtwcsEb",
  "key14": "5CEmNekwqSUYHTApjzpLt3xHiDHR8fYmW9pucb6HhoLVLXkWe9GrQsNE61gAPcJHoQM3fFcGcXktVmGfdrCHhTHj",
  "key15": "4shpFRhfhXjGWBn3DTZoJiBEjX1mox2CgY68AJZWgR53WAbaBADJmB7PNJsZQzQwYAQ3rfyLTGApj3gzMNoQojjg",
  "key16": "8mqboZ1eRqzVLdBojnQ9oiddR6FNn9Jqjhu3PjGAvnGeL7NX6wbBDuVFdX1hQyE4h8W2fM3pGxzbwerrZAN6Lru",
  "key17": "3imQFRQUjcnwtruLmUTYXQhp4WnJNgLGXp4HS2d2Xq6jiQPcHafUFNQnH957oL5aT2pN1JJ9rGQxacXBpp1Uih3J",
  "key18": "33FEKY8AG2sByk6AAmDRrXbzdoF99zmo1GASFRotvcjx21FUz3fbCnSqR97YjusXdpQA3Dx8XQYoZf9SMLgSmQJy",
  "key19": "4nwNszYZV9urJkodu7V5iqjZoeRWNWWPGbb7Qq8vYbZJHb5eQcPJyZC49NCoH2v3HY3WWfsb3baYkk2wq9ZMDi6n",
  "key20": "whCa3xbuiEyaUGaZjCNMqCqbWhUn9zKEqrWWjrtz5pz5cVThoGPhDp8Rxmu99rRSteQp4Bo9KYFA1VaarqvxMTc",
  "key21": "3reTDrcwSGXnJCz5erhoMPwHGNEinGQoR4cP6zcza5vET2dRyhx4auijkdJwde1J3AWU1s1fnLWquvrPRj6Z1ERs",
  "key22": "d9bFq38qtpNyvxTp5puj2zmyX4FBrDaGamNnmPgJkZaArccPM9aq8gNc4GNDvyrjLG64CZfTL5Xmr5swVxQHj6R",
  "key23": "3QshfgJUXXnQainfsakDnDzB9UQzzsEd88vDMyXqyHsNX5azSKVpNSquVf728d4eiqi32LzJW8PPJu69heQWCvLN",
  "key24": "5uX7YabKG1YXiByLMzbS9KKtaHZK5CYkx3RrsdabXNQZbsRHP66LiUEwjhmZMqGfSxzNPe3Jq93YQdAG81aZhRHY",
  "key25": "bqU2yjWxLGyDmsW41HQfahkxSQX2n4QmpSgNmYXX23W2Jvom2RFVGiqr8dycftSdM6wwTjpMg9tiBdzFL6kYqD3"
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
