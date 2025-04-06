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
    "5ywt5eQVNzgdiLagWt68a423VKJNhCAWGv6pk8eS8R9WsGj6C5dGWJ2SFAHVKTbshjJp7EGftfqLb6dBzX1DTZMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LKn3t3yzd8vCDoVaTfCLFnKZ5eri295ffqk2aSJxXUjziLffUqrcrNqgfSEVH1gMDeZfBANZFk7ozQz6fTmcT4F",
  "key1": "C8CGCD3L1ZcE1xJumhxyAewJH4eYBetEun63SrkpNFGRgaHesimS7iauYxSm9DKHiTeu28XK7CMChUBuTP9NzqP",
  "key2": "5RS7Yt3L6qGdLFcTTXVx7uXLtabMznHijfDcW7ZfyNgKqgXo3gusKWg4qb1p8v6PC2ZTVLXeUR8igc2Y5ezM2115",
  "key3": "5C663s6H3xCkQQSpYercuMrBSNUPj21HuNKKJNHvLhk6P6wS9ooruXxXGTCXwrwyvcEkY9zFJ22SW5mPqQdumE1z",
  "key4": "2hovyuvQT6oz9AYKsnZhP627x4FeseiuF24pYe62MqsEg5GV72uMFwXpFzUNBHf3h9goD35racfu9F36UUYC3bBz",
  "key5": "3FKKB3JdfaydRctj7M4cS585PsnQLZHH6Ds16gJD3Kpgs1cLh7qvA3wcmDaVrJNoBanRU476JtZGFMMziy1JKMBp",
  "key6": "5k4Hey6YJTMx6pcnZAbaydXVZgb8nwT4jVQ8cUXYc8rEB4D7Yk5GiyqjfWDjdrDH1wJLKpSRkzKtxtqMBR7AZzMo",
  "key7": "4iJ4EVcZEE1TywDaHNZYJn9XnfdYJ2q8K1ZRQgC8F1QRvRSH1JoQ1FVjF6TQ32NRC6noKDnfNPKf69ymeT2xsMie",
  "key8": "5i5fiyYAMMNsrs22cZe4vaGkRxkryvcnNnuNpY2xKVR2zfNseFX5CwiAt5upWEWJcLM61bBqfzesPohwFGB2nbjh",
  "key9": "DZyNmXGSe5U56q1tmgUWXWRYq9nkvAWevtZwTFJJo954fTzSo6AXeeNyft6ZdLR8Z257M9FcG8qY1MbC3k8NTM8",
  "key10": "mndZicuaj6buyVfF6HeAL89a8LfqvLmbgiWwwDT2e5cfTq9se1ZnukZZfPdWjngQ22Sj9Ea5STiSZqyoQuwsAAK",
  "key11": "42uY8Ya2YJwaYy9fPBz3xbjwespnqkQkt5ctRc2Mos3MhbCLRhKBccQUuZ5uTForfQ9RKiYdyAYBxxban14aapuY",
  "key12": "3wZmuvAPmLSqAQWCLEVRpQDzPqrPHsMqB4yHfXzuHrrUDq7bKXj9aSBtaHv71Adcx1H6jhCHvJR5CmnjyzUdXyPW",
  "key13": "62U185LyZEygt3Sr4veH9VTTPK5R84uvqe3QeZooC6DFiZHtjP9u2qEaZJ3jd1GHqRczqgEmdUp6BkebfRUiqh5F",
  "key14": "5rpDaXViSBWtSX5cfTLjbDyQvshCwcxmM6HPrQgAd4Y7HUWQiPWshq2cFAyTo488qfybtzGnpthpqTjPcCLa7X42",
  "key15": "4jPQYYaGDnt6w7GR5XSv7N6K9BssRuuAg5ZcHQceuXwdwagP5SdY7bysyDnmGX3JyNGqocZLHVLmHX8ZaN5SJ3BH",
  "key16": "2Q51MD6bDcsEppNdtDc7QUvaimxhpgZu38egQy4wwdwVpbFWrMQTsqjJouLr9kYnw4FbZGAxrLioDwKVEPgnnZE5",
  "key17": "hd3L5AiirYgo32QuAv9KvLDjZhiqawuKPWrVfpF1sjP5oZ4k7WY7VuxVbdkaEtCKBQdwhXvJVt2YS8obqjtW7dK",
  "key18": "5s2cDU2EMUyiHp9WaUdsbbTqSdWpLogn3B4Hna3kMgmg1VGELXgQPBq7ms2n12K95oAtZSUvoWHCmReRkBjBQkyv",
  "key19": "5iPScJxHJGcxJdJqQcRtnJ8oscTJFDbMLkyENqepP56fDdw2CdLcfLERg42EBSGoEknXeQqxrLHwhtethJV4AAz1",
  "key20": "Rkdeqt3Am5jnNTRJa2FzDB2xpt4rQEC8wJhcAq79Qn7qtzqDPXVfQ8T4ysHkbMmm99nbRSTuE8eWQgYdtAjMsdN",
  "key21": "Ezz4VN5KBGwZPArEX2zHwE8CVcmS2MQEkHGfLSmtne5tZibg5ZrjZqjD2Yagj3Dz3yx39mMvDbrjoDdJWe4hCcY",
  "key22": "2WcLCpc37ZumUh1VFMuuwE6mgEmSMb8Vt1Ny6kTBTpWswkPHUS72EczbWox8LviazXYyPHZrvVcJy8YXYEoPoB4A",
  "key23": "2LdVkkaHBAxbDYawX8w9HfRBUArLx4K9i1zLvFfHbdFSs9HJJkSWSod4Q2Roo9WKrF42jpfkNPAW8KH8azHNC2fL",
  "key24": "EqjWUUAyXf9Ye8a5N1BZWheJqa1hJLvRiT9K6XHUuMy8FTwz473ive3xxguHfqwEeUVP1WkVq38PtWUBN8ZxsWp",
  "key25": "3qemyn41ujAW1WXoxBCesEr1TL6uLLTvgrVWKCKPV7ogzUZ8c2jw79KRiYsji7utEBxyGzm3wuCFKfSS9xvEMC2W",
  "key26": "3j8xcTR53RpAgPNycrNdykzu7rEtVGS3TKkvkLNPzHKHEMg86eZ31BxvXaJoyB83Bsx5HV654AHLF8d6JZ1NT3NX",
  "key27": "5eDaP5GxCoj8rah2mbCiLG6m48qfWioUY2TdjWZnLFujk2qbvuAymRbMHpqEUDHjv7x29Ffew12M8ybh28gr1QLf",
  "key28": "tba11K9JS9paFzNp3EfRkbbQ58wo6RcWkSK5RVaQew5G5YFgrYGYmTavaZSKrcfu5fUP2Upyy1bNSzyJCgYraFQ",
  "key29": "26gzVv3Q69S37yY9bjAyyvrDbRn4LMfAo8pWZKXG847vcz7Gzg34L6qg6vxmN1e9qQ8jNRAwduihd4wrVcL15TxV",
  "key30": "4rrkqhPPmhZbQfzzkEM6qqJcLqu7GzV5uMPjFgZshmtXJ4pKdj3qgoA4nE8Qar7qmpXk4YJQo53cTN7NapAgVHKf",
  "key31": "3JksfPzu7j4tJdxghJ4FxfCuuY7YSv2HVFvc49erebkeND27hBbp56CJSYwpWSAUQ8YcsiekoxoajL6fDgkf6jb9",
  "key32": "rvTJ7sW9CWyxMfBRWmmFP8aZA3MW6iAksreUzbypNVAxcJX1X3JgJidVE8Nn7rWQfyLUdBDJMgXsQhenxJ2U97Q"
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
