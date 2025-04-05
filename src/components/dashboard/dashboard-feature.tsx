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
    "4jFmRHPMT68qFjhrkhcFD2qdRPLdiUuf8t2STfMLQ8g3jGNZgbZFnmCMcGnv1c8UjpY3h1vSktxqZMjRKCs7BMk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "467xgk8U7WCs7GvBVzcs2Z9g6YALBvRhzEyEfEHxX3dUL3VRJKXm3M1AE5bqqGsWDtQwtf6yPTcHvFpe86dGib8r",
  "key1": "5JyYxnCjtM2w8D2is4wzbsf3gEks6edGeR5FJqptBgsJBFKrcKfrZwPTxwBnAZQHbzkqD4Txy7zHKRkib4MGgvn7",
  "key2": "5Xx8m4etNn3ejtxMCCYcSd6xMdE3AkwmanhyuUrT7tCW9yPiWj6mqiwooSaz9bQGqn69Acc3WXv9pWiVESziFxKW",
  "key3": "2ZWobxyvL4Y2EADmPPAbJAEbrqAzLiMvyrVMpezmcZeMH35Whb6bHvooE6qPjponhKeP3zxUbmczXz6CLhY3fDwC",
  "key4": "3vxKwkcss17odX95kGcRR1or2XqwQdpAQFQ9N7CY8RLeDh4WL2tWHy8iWgYfHvM7wH3FaKdekshpNm2zgN4eNrQ6",
  "key5": "2pTEYDAa5zd7eYLG4S7Pvp1MbxZ6TBmuuqF6Tg4sXeETyFCa3tQ3rt8afn7REvowAV2QceRoHy3Xiai4c3nUaD2s",
  "key6": "M26tGjUisf93RvQy54WdC2LebhUtYqawmxXQebsyJcXKENZ9whCxDbhz6zDB4AvvqXgjsb4bcLbJSkbXtVuY4bV",
  "key7": "3S9LAntDraSMtAUZthSdxCwdGnc8Pm2mgd15fTWLAJEgSr8vY6QnfbJCdErK6iTW3CJ4fvkFpJ2tbLmNXuweCw4U",
  "key8": "65XppYXK9Sr23H63QrjHA9oo74ihLCASXEkK7J6HjvxaVA69DjA65rXXzMf3YXy5ctcQcgWnhrQNQ8L8zQUe19tV",
  "key9": "3GRBSNVMCWw9y8Tpo4HinyDwqTXfrYypCKXUBR5LZ9V46Z3msK6j4ZLFrF1S4ZyDGZs8Q1NeZw3xM5B9KgLHo6p7",
  "key10": "2NSx26DARsr8gb4KVdsoTwe8AcLyoRuYkPGT1GpQou7zNquF65E4C3CfHoswTcinxkUWWCdRHaL617CmD2b4ecU5",
  "key11": "NLMdoHYg2MQaNhZ8JhxJucJBwP53B36VzC7L6MA43SAam8y3o5jwNLujd33vbY3wdmaxUZiZSMQrdYU4zCdRp2h",
  "key12": "SxjLwPkaDiX8BoAeRvtAJ2tqw4qJWPoCXxUqCNFdMnopJ9kJn4ak87Yu9ogHNLwqMdNUQ3cXD6xc2Xk3tK6AzM2",
  "key13": "RegZhDK6Hqm7twN1xFGVWabu7fyZuE47WUYpTnzRsAXbz9VFrFKvBzByhfqxhdPcQ55Nzpw4oWsgjqQSZbfA26u",
  "key14": "2z6i8FScwzakyPX7kFWzH488JjXhwVwMMhhS1xGSewaTb1rZ2JQSvPwJ9BgCTF5viyc2byHRBtiy9KReiQt5wcyT",
  "key15": "64yhKSzSW14kGSeF8bBLmbesxV2CUBeAPCqd6NixbRvdeFapnXjGdwvqcfECK7Ba9EhdYeTe6jAHZnP6CRErjWMK",
  "key16": "JvbcVEUig1GHBUaYXnc9f74AJtdNM8BstW3ReKcHuDNJneWsWof4MU4GgkLV1VEmScHNxVstG7r1jGy7gVGvjnQ",
  "key17": "QDaNetuo6Av7ZfzNb84ELhpmmx1QjsHkpnBXib1KUpPFku5cSqZaY1srHP7ksGKd4XuUmLk4JD3tX2p5FLsogdf",
  "key18": "RWqAqQC946qjUkyx1QUF9whr3YuPiEcuRQE8K934ssvFLCVSd4AKqQeD9Fob66vvj27zxmjhobJWbm3StLRk3iu",
  "key19": "46vTqE4Au6iPyZN65GzvRmv7Uod2Vv5vc174NZST4WWrAxQjrbQga8ESRFKHgjDnRgCriubguSQMSy7xshs5qGCh",
  "key20": "ooYrVHDYJPRVEmfcfSpN4hK6JqM5NnYsahd4wSHczhQgXx2jzk93Te5eCrin5GYLjhBVPJEAKwkbwkcPi6BAhT2",
  "key21": "63nkpQKLyUoHmgrafp1hVAcKiVgYbSiK24B7bndCqibkD8Zxa6Aa2r9M3KeVZksu9HJxKEU8XwRkt4EMhpmaRqYn",
  "key22": "5f8nr5Nnibj5CTRudKYoHsdmtKAgYeb9TVtmQvsf1cL7MrMc5JLQ5jivZ5nX3tybp2mVt7gLRrAX21FYpH53t6QZ",
  "key23": "5AHHssWTzPFXMooDJPPtTGTkCNfRPmickun2rKd9HCJUeHsRVWSmWGhfut1QpmvDffr8PCUREqJvhwVFViSaYY23",
  "key24": "2oPhjdCMKnw4EqxzzvP4EtUS9GqJnLWmeEZTv1zSQC68cW5mkvfZppK6JNiVMfbJfLtd4UG9UyqFTVUz8VXsg4rz",
  "key25": "2C7V1QTF6WgzDdEnJzotu5JvJeU4rZAcHDYEk54VQ3GeG2bGY6X4bm93j9qxezNRSEtZXtREVqHvcTZs29kBQSrD",
  "key26": "2xF4YZbV68aPLqtUfLXBnicXA3Tc6URv5YawdoisxKnk5vc3EXZLsUuvP6r8npnBxtSpAooLAhjSme7uxCsPKJTz",
  "key27": "VUpYyeE8apf2enM6T4XEecUP4Wx83tno4AcjCQcj1395nnoixPzfphSgXYE7H2eFJJwKGYhUFfRUa3x5Z6XcVxe",
  "key28": "4n1QkKLzcbtWrGUxTm82LLNdTAEGgK98mB1a2KAti3BVUkq9aFURmd3khvv942hkyur9LLYErmbpoaabGcVT8UkR",
  "key29": "4E48BnaeUL3toDxtmnqio5VzPjRuVAUnHghY8g3vXubHh6AXzzJymNhkN2gYzTYtJdhovbfZq536yG1gE4XuxL9P",
  "key30": "SpjjnXrx6qN2in56ribNoe1jy3XUiEabV2pyVwzJQX3vJ2q4Fxdvjrbt3aKySpVjeoujVc5sE9MdLCzSqXKLfDS",
  "key31": "4jp6o4CCAn2LudnndAvwyJ28KVtNAHkf5SnYJxgsubvgY9YGhZMnoduijxZ1TQxQC8DmT1mPLNoHdV6vvXMS3MZV",
  "key32": "55BuPoWXwF1PiQTFkc22XkCHCxT5xVNFVWCcJJN1ht39GPguFyo1dhmpFHD9vKKFSDYXGKgHCu7J1sMtwYhnRc51",
  "key33": "CbV6p9EUvXWiSxfF1KsK5p58mQLLi85TM7E1oZ2FiG7eQvGg7u7vr4Lexydyvxpd1ok4695uDfxHJKr84aMfidi",
  "key34": "3tzrSLhnyVfNpQM3SGYTBU1hsBN4gN3nZVW8WDTfTksS2AG8psbQiX57xLjT67pyTBRuxSBCF5U2kB36AQkipMeB",
  "key35": "5ZtS9gsyzLQNZJmXMixU34fWVnUVRvP9hhKLfRZ6xRNf2B9tFvHJhFBq6xbD1z1dxTAmqU5kaqbYXLZGkrNGLa4W",
  "key36": "2WEvvi4PyEr8JEH4LzQMUAwduUrCCrhc4yg5rHU7jTaRUcSwCmQSQ3L3e82VdyfRVHPXbwADoKHD6vb3W2bJ5ssn",
  "key37": "3Q4XXKjScdfwKvFd36yqcos39rvGTxmc7ap7xXRvChJN46QLNDyth7we4ZUdpq1hdshbfr7n8SZ42EF7oXSNyMnd",
  "key38": "2kYjH1iUGXeE3ggCnQ471ULSWn128sGEMp25SKRCj9hHMQVBer9vCzsuv5CwjKG8poLjkxi7YWcupv8rjLEceQRV",
  "key39": "5M8p1bsYkyTgPATdCdwi4H4HoxwSQd7fbBX1aMPy6ybkSzEAg1gWs7dRyhcp2zin5EpHyKotJZRQ1T6vcXqanx4S",
  "key40": "4kZVN73BAfva9m1ypzfXXgNoauDjFkTwgwHmcuXvHuDvrmkSTrXKb92REqPKcJcxd64hVfKgQWwAKfix4JbWEeDW",
  "key41": "4pzLbcUKNb6aNEU3tP3yHU6MFrsv6KU7dUCj6az6WxGBddiT1La6oQWDXdQLw4j774otpgFk22PgYdsVdgC2XDRG",
  "key42": "MEWqV1nkTS3bBE63DThztmSxi7ysRBhbdkM1qpcnHe3dz5P5BPvB6kpfjJJvBWLRhGjuNsCpjNDJA4omdb63QnJ",
  "key43": "48zkutB8zeZtjoSCxqQFDcTuFXsSKZjtePWdwFjUbYx8RaGjzjHTqGYECVLESDBD8qVsTA72N1DuCnrd1MENKdGt",
  "key44": "g7bGocnpT6DG91JXDHK71xzfERiUfXDAeRVupcKEFELbu3KT4MAP3EfYCyjaJiG6mq8rPeQLkpXU5REBJrYEUHD",
  "key45": "4zReseTJNAq7NkrkCVMPa5jtsoyAVb5mK2EzqueBpG3VgrdgjjmEzhoGGgScUB7XDVnWcy3cSky389FqBym7JQ7S",
  "key46": "5Z544e64hdaFAnrLTZY5JqoPBkejyzYfMWipuuNic7o5ZFHiMuDd5f55ZW1eYm4oEuTwc7Wtod2iDRnCts5Ne4j2",
  "key47": "igkepyCFdMbk9TLwDHf8bi8trbNPqCQnWSS35toA5WxYbXYqLqGAN4JkvMiyLRe7MoTdmKhKbCREyBfuFFHoo4m"
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
