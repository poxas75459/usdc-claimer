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
    "2vcYD5adxqFuvVM1kxNS1X7RPvoDXefoGwLJm9DWmeSye1JZAvmX76kDbJWb6WUFaBRtjEszLBN8f2SKuUDfEE5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jhvnFdviGYFZ2p5aLko46tqG4sHAzMk8su9aQitU8rcPSPDpzXRwXUX6furLUqHYnyB5EDfeYFpTke69JnVPi1",
  "key1": "2DEkk6kVccN2EAh8bTjVvpjMugB1zExAnDs1TNYoQpyYRVP8NsN1Ev1yQDTuLPcT6byARd6yt5HqhZQFSBCUg9HG",
  "key2": "QX4dpMJQ5R4d7JeKVV2CUVJc6WS89HPvDKTX6iHqzvasufwzzsmaxUXAiZP6Vm9UEnzHRvo4DpovePm5gbQMCdj",
  "key3": "45GCeWt9UHoYTPPr7kF5hJgDjgAc9x4NoCWU24fvDMdYn6T1ERzZ1pZPSLzDfeHBcQT26TafDF4uyooDj2ggnrq8",
  "key4": "3HN6nE5g1HrP4m7yBc4yN9oVCQmPVqhihe59APHvijn2AKccwkEjJub3SZ8y2MoF1WVVYNnz3iaaRtbjMmiLeKEs",
  "key5": "4tFsDDiwFko5oWcNvmTGdAXBtjSd7ZxorRjpewVLDTk8cP9K2zCHMSwEqaGTRCAdeiA5qd5nBA68Fd5LMuqbywAN",
  "key6": "65L83H2YTTcU2JbtUQa7edrHLGy632hUZYrntNKnpLRyZ55aD8oMP6Q2xegFC8MVbKo4pjo1ZNWQbUgojZ84Sm74",
  "key7": "KH9aXuMmu6yJQPvxpyBY1GsqYXiXwVa7VxUrgGeqo3VCwXj7LBniTUZVnJyWkMneBEvioGTffZvEWRr4WaqriGh",
  "key8": "4U6jJVkcNj6yHWCkNXvQjXZP81AnK3JMhoUMfFQwoAURXHRfvtgZ5usC8HyWR7QBSFU9T3Nv5TYa5Jt9mri4eK55",
  "key9": "nMs3E4hcfZE1r6Eb7tuSEZzi9C4xBEdURsSfvJEVQj1Hj9R3BTAgF2szCuXgs8sjR7HkGAci64fyH5B9M91Wfsb",
  "key10": "39G2ipyfHdKqUGgVAqsqrvjKKZuimRN5Zbaw5McnhHNcbtzxv34PdwCawUgRjdC8jcdYj7MLKjiwVuAgxU1ko2Zs",
  "key11": "3X5vesAmJRnDJ9xftQ46nWiNNtmb1mJRCcSsCQsfUBTnRedJwueenPhFX7Qs1QGCXzdXxRVKxLfjxYoHkrMn7CbP",
  "key12": "Kzfq8BxRx2wLPLTdug72CyXSY9mMV5vyaLen8b7B1LThKxV1mn1VwHDqCP3KXLYgAqzRyGZAKR1b5AfMBp6DNcc",
  "key13": "452FZexduMvYQwhpeFqFpNW6HujUVF13oJ6RsqW8zEN3tkZYtj7PNqBdBgvrWmxi7baZxBFCgmnB73ANNtaA2g64",
  "key14": "DaRuGJKfsmX8N5o6ZYUibU33xYkR2NLQXEqtCBpBTBRSokvHboyN9mkFKia22Jmc75UJbGegtrpnadoez7ftCKb",
  "key15": "FyyrC4WwspbibbTBXVS6CuGu2cimCm3eTFNXizoDMrWg2c7Ra4umM2Tvx3UGLFiXAE12waDXYKyibMiJrrT6C52",
  "key16": "4jqhrf299vbW8cMax2jBywWrxHZy3HNS6E84iTQxGdcs946ksoHCLJdsuFaE3TUzN3ufvKwDscTqDqTKJvotwm7L",
  "key17": "46RKmkhUWFBrDSMaoaiF8UbjYaDVVZASDJvJEz27NAtcAb72DRNZoEuBVPnDAg8ua5nu5uCdGQLydsKoqHyDUGBN",
  "key18": "2A7Aqji347WzmzvViT8sLFPHL6jWwdjgX8QgLRKTN2tmR5XF8MW7ngSe6DqLT7Gfb5FGXf1yUD9AM2B8TAt7pejH",
  "key19": "5BwN6xE7bcxzx5tUVJby2z46HQsheNKq6fW56aVp1DmHaAEDmpX5pe124BbdEoHcenmhjndW188F61WxkRj5SjCS",
  "key20": "65oc2QfKktraVMqwJzo2EpYFyVAxHc3Sqqcr5mY6t2v4AXjhfLjMt3BHtp59AqK4tGBHHdYz2z7ZpkAi1VagE38o",
  "key21": "4hABBeF1YkSgTvjStCAJJm3PUKWQpSpnXCaZduGiftm4jZTCV9Pto5EcDqdVwWrYiLwWSRYPWu34nkXXQMCcLtQx",
  "key22": "65v5WXeGe4vcydVJxmPAwiiy57zpfnJ2N9TxDgXCt5QmyiL5Dy2jsp6GU6ppv9u9VVNPwNgCtoVR3PQnVxW9RQP6",
  "key23": "32k9hAthAQFXhA7aBp6ajijKc1Vycf4LwmfaAnh6dcEuGS7m5M7rozpGwcDHQ84ZgANR72XPD6H32UeUxu8SE2za",
  "key24": "STbX7ZtnHhwW39n15c5sPL8dzxvSyUHL2fbpXX9TePc29uZ1C2CjdqsqeqRhLHmvFK5dNwA2EzWw4VgDW8unqoG",
  "key25": "37M7YVG2B3kzRbv8p14d8NwEokEASJyhNptPh4chzNoz8dsD1tw9tn1oChbBhPQ5xyMEWB8CdgkmAZKiKpJfzbvP",
  "key26": "3xyaVWMzto7FBKDAimMYfgNTiJrp2zuFd3cUugcih5uuE1SqRYMzGcFZb71Cg2rkzqFebrK4DkZcdbMWC4MWqfd3",
  "key27": "57gdoLy6pqwsmm5TNYAZRforxd1goVvdrGQ9Ruht3ssgXvbjFKFV2JemppQHGAx9AQSYWRJsABQC6Jtn4ARXgc24",
  "key28": "5496aKvmmf9Hv6rFrP9AckogzhMBtQKfn1mN75fBEYvTY1uAdDVxAqJjNYs9xij7xrwabU5CePYgvKEDpc3mkbWS",
  "key29": "4ru5BmPXmLnDUoKfKf3K5sNWat9RxZdc83qCQAaFfc6aQ1oFU5wXUWMB84xihRtGkRQxJjQEXH9ULWsnijvNZgD2",
  "key30": "GGYC4xmc6y7xcYLLgaqNR52TebriEoGL5xQNXG6M3vzGj9jrWg1PiKryvDbzx3mSyXEeWVMY4ZMmLdRQ9idEP9E",
  "key31": "2aRKfx7DwP1upLrf7KRrMpGY7KRMbdPkUmZgJV3rPeCnMjiSiuRuCn4tDHGFKMrqNtrcAtSN6szKGhGYVpBy8d9U",
  "key32": "3ashPGE75vaydfbvd5Z4rBPedoe39UZYJ87w1N5hH1cJfimeKxboDDxos7RoSi7nZevema5PjVzinHH9p8NFqG7g",
  "key33": "VA48iBK4nUJGsgh8f5uTEE13fgoa3GJJcvgiWLTfp5k9aoEpkqnzKCCFGL8Q9KWMUesbs97CDR4oxHMSc62oZgJ",
  "key34": "4jN4dF3HuJ54JM3Jo4mLcpEfba4qJPTCydh3DbAoKAtnQoBBYqkyJGsbDBjypwa7VE7HUmKwLDc6b5dgJJHACUsZ",
  "key35": "42xDqp9XmYtyfWYAn6o5vNM7mvw5UUARCjrDBwKwnSjGdx5fG5qtEw3arJVUG8EqaUgvHgGfbQGi8MLPJZK7uKLz",
  "key36": "2Rq5KypY3XSxcmwcgmeWtaCnHASkbEZnRAsPDA6Ee4Gp4pJjWXzhTVGpsynkPMQyVqjcdRude9JjMKcTsPNQ2rtu",
  "key37": "3bB4KYhvu7xz3TpHxe193p8KZGpsfHytx5PfpCr4ukoUAe3cXFEyAwpudjtV7VRzWZjpD6DJk1km1QXb3PizghXr",
  "key38": "AUkCoKLudp9jxdVVyxvdzb2iyWj8THX4Lonzo5FM3AKZmJTu97qK1Y8wsuFKLCgRTZR4X6X2jhUVcsQFQ3wmXhn",
  "key39": "35Jr5UsEyJ28eP2Kp9YnvwGhSYSzZm9uyrdc8zHhuAfzztWeApZpvjp8SHv6RPFUCK7RqEjxgA75tohH8UJn3r7V",
  "key40": "2KDV6Q1J9j5FzZW1KDmQ93Xs2gQQhasscL4W5mZbon71n8di9RakEqkBcU8gHSNVJd8PJmRZCKsfDCzakoM9fp3V",
  "key41": "X932DJU2edgifaBSouMVp8wGzXghmzcGrE3R345ZUz92XLzmLmMKKqaXc2LFTVnp29699DGcDTBbJWyd1uL9Qv1",
  "key42": "a6UkAdGp7muGkE1PrW47KvxXCbsgJ3EiMwYTcz8Wd2QhBrYJKDnw6A7BhJqn7E2ekShAdizscrGek5AP4zLUZGN",
  "key43": "3H8NR1bUdo75uJxvyqfkz8ab9hANNL3YEziUFfMDTz3W16GK7afjeDnBGEzozbHEohTECc6pGqPFcFTXePfafUPT",
  "key44": "w215BAJy6zwbLzLuFg8yskHBKFQr9ZMbd5Hd2cACAgDkv6trWHoc19iSkMDN3KD28UtFTQ5rMhLAHtZis2iJaYo",
  "key45": "24um1usfzdnX4bxQrWjegC9QikpDSZpGnitwduiMgdmAsZgXoGVwJ1tvJpRVvN9XuE2RgzqVYPdmJ1T2fgR1g2Pw",
  "key46": "QnCqEJsNSAxkWNRr3gNnNTKUDnzQqNov2zurF994JuMpBa3KhXdp2rAcK6PrDNiDRrV1sHV29H9qu65vURhM7iA",
  "key47": "2AMf6wiYhBb4Fh8B9Yfto34xywdfeBA75UEvWZ58D2M3cpRGB2zPCau7utKgLM1ZxV4fkHdbiDXexsvNCDGmVU8E",
  "key48": "jfviSvbzxbBWmNt4oZ2KNyXuVXTfQHHQNiNYF1BxfHam1EuvVTWX9GAtam2UvKYqpfhEPLLz2NwAj2rsSjxcpo1",
  "key49": "Z4iBuouWck2EdWByFVRZG4FWLbTMdeiMQkMYSakxQ3mfmJLJ5s99krTtYwtxGhugCExaKsN1ziHsVspk8bgHeNA"
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
