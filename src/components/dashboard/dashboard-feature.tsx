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
    "66HmJAedAtrPpSuJmGr5n5rsZjU7DGR7k7dgJB5BwgnDVuKf6knUbb1UUDr4mqHbyW1wGpfRhYFEqf9nhFMb8ViA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQ4byqsSuvrdKTmnyfJoSNsskXPXrPxA6NSJReS1MnUYsXxtgrMckA2Kj7GoCRLSN2hMwiDYoV768Q27ki1zX28",
  "key1": "4mLACzeDuuKmbNotAZmNRx8yj47PUDgYz2QadHB6uJUpd6iExAosoRm2JktTn1GJUxDkb88MVoHsvj1Rk6yPeEBn",
  "key2": "3aqUCC6uc4W7saSrumaRFc8Rf74Bwbh2mHCuGBQwkrS1YYfaxLUi6QVs18rPtsD7sbXjzTGwahvo6nn13mEwwhJv",
  "key3": "51aM1hFHvkxpTS8BZV8ZHhjNLhfqjyt3qw2hFTY8MW894wtMsiBwPMKSo5ui9JcpPcySDPgMMueLdirBBa4Z7NCy",
  "key4": "3p1FjqM2qCr5b4EeJYQj9FEvhbKDddeAdvgUYyTY43kLtS1ebXzPh7QKgrq5sy36yyqKftTny2E1rsn739dkYqkT",
  "key5": "5H1g3Ws8jeCGw7ZLNWhzjnkk6gj9Jas1kWwbV4dhqzTBU2wrKThkfiSSbkDKkUBpaFmhxSo9okiw261VMEVzqVu",
  "key6": "3F7oSvfonjdJXSJFj3wFfhE6R5vJWS6UPKJG57r3LzPqEF88qAwMNwqmWzGwapnugAktig6GxhqDYNnTWdd7SCyn",
  "key7": "o1TvoYUJ9NwqnQRycSfkcMBy8hHtKoisYKqPbEyZ2D2oGx1gevaRr4YKkNp3gqFvsKi9A3qrZcRe9cgLPva2iZz",
  "key8": "5wyb5ZGycx5iCorx1cY3hKUYCYw2Z4iGsJXrNqg1LjM2DoN4WZzVnAwY1r5ThqcTszXZDAsAQHDgNmiMBUhiHFLv",
  "key9": "5EY29vnxiCJ2pvnpVb4H2FbzL5kY4ogNNwYDosTqpqNA6znxQjP1pH3xGGzDDwwuwLrmZ8C41QEL9cEzghe7juAp",
  "key10": "5eT1jCxUrsUNDp1ELRR1tTLVoyAtkc162hDieBEe8aJsggJq6UfYXkhE89gBCSVQX6uPV1D3TM3fziZSYLtLzYZn",
  "key11": "4Dv7MDQkmsNPBnxkLTao1X3yDXTXRJXJ7K1u1UYAxSnEQbNLvhbtEPs5LUZaBQhSdUxXmm9x2exE3FfU59AsEAZg",
  "key12": "4jyjUj7GCFgn1i7tPyiQRWnDoDp2FUKD7G3nqxCEXpFv6k4hzCPaMYCXj377kLeq5v4pKG29K4VMXdVUxDozA3Br",
  "key13": "5SmgJFebnzYHcACvkzpde4D3LZEHtMktXqzChbRe8ms8YvEN7kDi7hmQjcoqW4Fop97joVaezKLLpe9Foq5veq7",
  "key14": "2xT4wgFcYX3sM1VkY9LMVoatWrS8VX3abAbE9rdAh5T2ARYazkDnsSzo4RV1M1CVvwiQHUR4scJmhVRrF9ABTCbL",
  "key15": "4F65i2HgMKmZTeJSQadYiMvd3pYF4eSfvEGKSuXW22uNHMNkqr72WRUWpipyJKd1Urcdq64Kahn9a2p8MshvVKKx",
  "key16": "4a6UTeZ1MSbXX7HZneDqBTjvn7cJhcqZXdSJePsDFtxU7stdcr1vMVxhsRrtxr43Q7qCRCp8CsJTMUJ5FFpWWtA7",
  "key17": "QiQhkSqboD4GGqdd3TPPnw58TuDBqmWQEcdRpdvm16sBYr6XdLz58xzoGBWyL53LyNrGi45cip9p2KWpyfecQmJ",
  "key18": "3hGhmHSuf4PNbuu4iSL5o5ci2U13xryzPb1i4tmHL62szVZS4RfkDR4kksqEBvbs6xC11nj7b123imyBV6f4hkgQ",
  "key19": "3J6gBK1jq4F5qHBVtF6T4MWLF5BXtet18jaiCeLRwLFu5Nq2aazP4AYw7huJ5ixRm1nH6NTrB2TipLb6nmZYTGws",
  "key20": "zgyFGV7DY7dxc52FQh4KXspW4VxC3C1S869iksn3MEBkn6Z7dt1GhTkCETDp48MntSjNbU96aywvxnZXeHaU133",
  "key21": "2wcnjapmvHFEbzHDdi1jJN2WZ59Uzqr5TLtbcAhNz4o69WRMFwNiFmL5JEMtyugnJdoep3W85DENKQNBhVHQuJfS",
  "key22": "2ZAunA6ZfasjA8HA5h5JGXaJdZYZzKTQwVd7XAE7Gm1KreQahADRuqiEwQFmwxbMEwfFb7Xdfiq3bGeHH3RZ4JH4",
  "key23": "hf5hiatNsUKpihQqBrcWpMeRHb2P45i39U6ZGTSv5qbZLdazn37gGFFhSYtYCdHysshzAjZEPzqiPCAMZWf98Ad",
  "key24": "2MYMsNn9rYV8SdvMVixYcu3R3B1jszJKCyhwFEFsPWQ5u1jiDAgfpjidhAWQysSTByePJPvhjMYUY2me2yJ8QSpv",
  "key25": "3APPTuSDX5ULchX1H39hsrDpMgHpP2ExEQiBV61noFfszVga6Aq2Drx1tKQ1W8GuXFUqKPu85spHCVCgVM5gCCVS",
  "key26": "1jqPXsJNiYRk7GmzYY7hLWzDNKUcSRUUChv6zPkoeT1bznqzpWgr3QVQgqPZTJr2PiT3PL7JYo7dx838JaZico5",
  "key27": "56S8jNWwMe9WeWxx18vNdJazcTuJMV7LjMu8a6DzbQiWpRNBnHzSgcFp7RZiF4AmgJ1Xtpag9V8SYZnowho8anxX",
  "key28": "2LvY2Hz5fZFfS1pGPNx6jVntsg96dmZueUSQdvaovwPcDERzdJAZ7FfQwmoLY4QLB29oHXFvmffT8FKmf2yES9sA",
  "key29": "4rZ2oTe98C6fWmBeDMPpWJ49T5xZDdQ7wT5xTyJSxqMFNrYt75sgVkAroQ5Xmh2qrrdirbB5L3NLsfgwFomZUbsu",
  "key30": "31zv6SUiLXemGMgM9SVYHJ8wgGPH3mSnrcg1dcHwgNwSQUmvLWfehBgcLtxNzqJ1v4umnqYbjzEahqS2ywYL8EC7",
  "key31": "2EeuGhg4VUn9yzLb1BensponFutyrPLtysWHa9uoGkxQLqhoBDhN1wafPWL6sgXP1bzvQVNQwbj7JEYpMmiBhBgE",
  "key32": "3MuyK9Anm7ospwbq9eJGeEdkJ1ArVThdRQizzSgxRSyhzKNMc9j2MRaqdxkUmmrn1Nx7JEE71d1cjmjs6ytv2oBo",
  "key33": "3y7gFFwM1EPcFLoWmNHLSbAA4EpAJ1NmAv96e3BxjBAGgDK7x1oPmh6AdoNSiqUJfZ1FpeDq57z7VL3mJ1oTYH2f",
  "key34": "2FjmjwQAJy8vbXJyp5TWCgdpkZXAy1xmA14nmSo5ZTG1eoMaXUswyG9VW4URgE3YmeK69J98rrQ48L2NNPNV3wEv",
  "key35": "4fCo71wefWLZpWaBFw2v5F2S7rneQbfBY3qyBkDqKMpeEqgiaYykDtFdvYiQVxyVWpgPp4ZVTQgirYaFCER9ExWZ",
  "key36": "2DKa17npVqmRQXZyov4aLkPqyTinGm8cwQi7RJwq9pSVKuwiGDJ6gg3RLWKSttYiMqTUzk6ZZjW62xYWmiLtGg8A",
  "key37": "5tXnRprHp2swbtJiyTw8Kg9QhAZnYbgAbvHKKwCPEkAcUbxbnaXp5CnwPcS3DuvExFv1jtWr8XScDKMSs1HBM968",
  "key38": "gRmvFt166oDDeNEHcXaEz9m6FtzxM3vq6LfiKVCn8owKoqLyLvS55Ut5kkWAtrxbt2vW6Qwtq2Fo4TNvNXUEEEn",
  "key39": "3puUry4GyKTiue62pCrmoXW63xhiUNux9BPsjmVxyK5uhLDgXQ5SDeoa4Yanpyn33YSXdiHJmqJ3vaUxZmVUQ7af",
  "key40": "qq4tpoNKqzUUGeGiwEFrMzbLJYAZVi3byriW77LEvYC8cfckLcLjuH87PXoNS9tKHnVDXzk2vcCftMtFuwHcyaB",
  "key41": "4jHfRHWF1adueAoX7v2PMcjNWk61HYQLg1vaaK2myQEC1tZgaktkaUVLwt7ANLNf6WJE8BAZYuKLpwawQ7PcpVph",
  "key42": "KyfpY9rr1JH79WtJR1AEKodpVZVqXvbdM5hJzJXdSvtqAcKCh2L1hCm9dBhWyXuBg6HeNzmxuVwzA6KCWqxd6o6",
  "key43": "4dsZq4obKjXB6v6NfzUkC8hS5zNGiGi9p8AvNPdFXrTqigbbXpnfEwq5nytP5UJ1DbRTnifbYCXyMXwk77sHUqDp",
  "key44": "3rn8zmJjhJxvaSHbSKTBx6GhQrbmuMvJ6A6SnRgfintffxxBjVJdEVmmvofzcyBnmN2Rc4V1u5iVeJMbq3vyNc6F",
  "key45": "5asFka8R5Kdv9Y3Qs8TSZUeVLCWpykDiBL8mJ1WR7VhEbHpVX6nFTnbqkvNxDhq94EwjLz6MjgMQaqs1RgMjwMMq",
  "key46": "3ziPrTVzRwkKrrbgtdiwZ4NKwf4vWPK2DqofBx9AAVJrRjSiywYRbtvEupHMqKpy3azPquWgax2qvXqJgbL673hd"
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
