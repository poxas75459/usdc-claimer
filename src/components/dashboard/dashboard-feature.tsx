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
    "4CaTtUZToD7Rn1aB8hzkEZciS2ehJTuktX6foKq7Yza3hm7VkQpNDyJCqv7FWDGC7GhZX7Fqr2FpN1Y3JQbPsLCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpDhTQ1yNftdgZ7RqEfCTZc2UjmieJKynPnGhkS7uNWJkCtvihM58S74AmDywApetmvTWu6X8uQECcgxP7ynCYE",
  "key1": "5sEsompa7CUbyQpoKi1o6kW1qrrTF2E6cpmXG76xgsSbaFZ6vwtFr3ppUTsvurQ5Qqj3HQTtjMAZDxSm8wifCKst",
  "key2": "xpwt6DBAh9Q9iV3gbUa1g75fih1tKQKRBywBM37dXEd7VmvR2RM71Xib7Kx8r88oMThtUQG26s8Nq52g2nHE4TJ",
  "key3": "Co4Zgr6aRnz83nqjzhu1RkswetRgpsSWsJPxexxkY6mhjpkM36tSurf8nTzwnvFCiYbWLpZmiks9JuMgwYxUDuw",
  "key4": "27HyrwEbY6u9fN33y2NbTBWkStDZEEMV5SavJRkTayWjRCuzFQtqUfap288kp275wyQ79C15TvPMrAxgRULinw4Q",
  "key5": "4SFJdMhYWUYZnLK2cmr8z63mBxgQTdphCdvnQnb5sfPerPcxixKvkXv79Dr2FjU8qfXCXs9E3wBg2TqorS3XNPFA",
  "key6": "2GbQtP7Y2JC2V51u4h4sYyJ97E6NRdrvhEvfDWpYm33tGHf3MFyKVFFtgSiSb9DTCWPjN53ifqaYEqdxgzwAKGys",
  "key7": "2YKfFNd7EqbA7E5wRACkccExXzXRomoLrqCMb9ewWGHnVQkqcyfZJV2nuU4kEt194K1fuv6nGNqQeDPCjofRpv8K",
  "key8": "3CGcNd7MzoofUEPpwaAxwp2Uu9zciMCffAW6Z8EkTN56zY2kwGkNp5CKXCqXRH6yTeEZqRhCRyXE8Vd29KuoeCfH",
  "key9": "2R2t8bMERc1zkk17uA52dpDpMeKhXSH8BssohWyruCVbX3pmf3ceXXL7rJ3Yu9qBSyKuvhhHPxXfvBakb3NffS92",
  "key10": "2mtjAzNphV7GHRmzBtXboJBC2UQogcjQpP9TGzWbfHSzGFWcsC8TceiKeWxvZUU7cNVM3P45nMpd6r24aPbp8SpC",
  "key11": "42APxVE3njc6Add9EHEDvWDnBtpr77d4QJZpxeyBGmDDrijAzgCikGUmrH69WC1xY9buTfRJGvKtDQTJvFevDTCw",
  "key12": "4udh4XLbuVKmaEnL9WTNcEwqmHnzsZuUoKTTtnGZHPaN6CMuqqaDMQYg8rJdsCkwaZvPnFZvSm2U3Fgz1pa6FGc8",
  "key13": "uAirR77wBQGEhMaFeBdCVyoBPQTkKMkn86ADtfxLnK7jVj12VscSdDmpaGJjsSfhKVQ6BMr6s7t6d2zG1u6x78c",
  "key14": "2yNtxcVNpyCBVAFTm7bCktPnRcZXZTPovQkYzJV9dYyC1unaDE5iErq7hCjHjitYL2eT6rSu2s2vFoX1NBtfG2k5",
  "key15": "ccJRujvmHLNGqVQ5BQ5wsAwu3biSfjESLPKoQ42GeDP6GNz93pQdzEuFEnt5p9hPN6iqx4JC4eJBfM4fJUhiiCK",
  "key16": "5UbyobhGk5FNoU1BJgCw88UGJg66V1jrZSJFJUAngfQRSUW3vjBCk8BZi8GXXDTc8R5P3HUrtg2966Uox4XFDpJK",
  "key17": "5FsHj5zUyFV79YqQhSSMy4AWeT5nTsxT9QRcCcC8pxsSVUGYJVhShPmWCMTUMQyMGxxrZT9HxrLtnPjgMnXHPBv7",
  "key18": "27FdWoWcgfB4iucH1ksU4GL2Fb86LZP2JYNpVB2fcQJuNE6q7yhQzMHjbgKw1HgHFbF6sttENp4RBxe3DZd36Gae",
  "key19": "4ieiDRCTBQcu63Y7nTdD2ndybUNKMYdMp8Kdujcw8LRtmje9mcthaoL8gnF5vyEGQnKqwSonK3m2HcJTcDKFgcWW",
  "key20": "Y7qxYhemhEG2tiuriQJGPHunWAQpm2Dbbn2oKy9eRbSpmv7e9NsAyNABG6B9AdHRz6b8AML81FgDYrwJjAgjBuA",
  "key21": "3EaJyGH1W7SRxsYX6UKRetBy55n6HUk7ptcKDFGemWBRfU4tTmEgwvL4S8BnJLqHXazCMobgXDF9Qd1Kooe1vnCd",
  "key22": "zWa3iX3drfVzGWQ2JobzWGskumJuQxPLiEcpnXJUPVNNPAV7R6YpUAMFQQnuyYLxZGA5mx3DsrvEuSi8JPXajNh",
  "key23": "62dGdLNoh1q5PuCkjRz6qjbdhVYZdmUteEpjVBthZRe3sHha246vjoGg3BwZ15XR4aLQP849wpSqe6jF8WR8cg7b",
  "key24": "4SH9PBKVFvuMJcL8FAF1UPGNBka9RWo7ADae3q8EaPBYHuMpX98vCycaXHtppRDYRHmp99BjSqvVzpoYcz8XuUh6",
  "key25": "5AF25ViPmjnF6vk4rbKGP2GkH86sMatYHZj4xoXP3Ey4Bucj8URoTXDCuLa5Ft9C2a8SRUbNaEFovW3TAz6BENoK",
  "key26": "531xpov3B5y2DmYpGMNiSkvMabaECG9iCVgKSWfFz65jSkhKWj71QxJMmh2EJGxNQxM1xtBkmiRNNAdMF9KL87ia",
  "key27": "66aj6J2MQXmA3Z7JF9ojEydYTNiQjWK5o6y2RkA2m8pEgG12jm87YM2gGo6B53D4BqrT59Q5VmrYnBUk1EfaUMCx",
  "key28": "531EoGV3srokXqs4ju7jxBDvshKaWzyWu5suiAdK7wQ6CAHhReQkqwiY9BLznRH6rt81U9G1cX8jfLe35uLU2nKb",
  "key29": "41U5KMYmR8PT9o47NtYJpfr38qzUiBGP3dnaAh7b51qxbPtuLoR77QRNLWAhP2ta4XGVcJnqMwdxzmHCXwfyUenV",
  "key30": "35qzt535SajSXDHpbz8eiDUoFXheUWr1PxUuua2oSpLJMLm9gunHtiiQnJa6847bpBHTi97WCGTPqaAbqppG2CEn",
  "key31": "RfNRpXKK8ckN13fX6RG6qmZbUs6YmCLXtSkxagvkGgkYNqA8uJDWhh8si3zv3SPEWAETZq53Z16bt3rc1LYR4Cn",
  "key32": "3oXL5fcrWe94Vkr6s1eytoxLCq4gezsmLW3Px3LHp7kiwdVkpSGNWir7aPpnTEB3zF6XMEsUPzvyg3xrEN7qmU4M",
  "key33": "X3UgDM1DPA2UFEaVFY59tsXkEsVPUqG3hxriXM9XV1tpsMQEcya6BYw3kwF7tKnQ7BTzETvcd8bNDbnW3DJcWX3",
  "key34": "5jiyVkRrV61NDtK7SzGs45XzPdtefxweW9fuzcAumrwe4V1NXBsicxZ9jkVhgxfEoaJsGkrEH1kksjhviSZ7uBf",
  "key35": "NyCxRwsHGsS3DivnMct6H6EJaNpd9oc1dRd2nEaTkkhrmxzKBGwBmfEZGGkaHFqfoChFCTkHvNxBBKLRAWygFaM",
  "key36": "5xzEzLfmCuCdaksroCgXJHuLLQwqWQVScEutXvZXGbZBUZvxrE81xyHUTZ2UBWeGaDkuezaXb6e3cPh2TSKqGBNW",
  "key37": "A8yN2RX8gq3BNj6npjQGJA5hdUSjvcNZDDZ4WTc5wiZ11scAQjy6ZH7Ffq1NKtYhZwTkSC3aPVpdXDKqmGxDjyV",
  "key38": "bVsYfBy5yRuC1Ct33jdmV9Vwp4gYqdtAjdgPukmonxGhUdwGtt284n1F2ZZCJXA7WojqjF3kjR41aQDbqdMcsBt",
  "key39": "UbPrE5nQjzP9jeaBdscWdn6DDsy3dZ5mTeCiwjJMwWDYq1SZqW4EzaJqNmKVmhdm8Jph2SZ99dxMMCW3BkE1LLk",
  "key40": "3Sj9gXRNr8ef8LcuXFvXY2aCiFaCmsEtNtynHZCXb7uVQdiC87pAbMZKV47pXon61944ezN2PHV1fPEUbnuMpyz1",
  "key41": "5cqCFSbcySJgZ3Uze4G5N74JxMuUCWYeYMbVJwiPctMtGiZnL82iHL8woRNFWYiywbn8xriQgtZkQAQzhcppa4mH",
  "key42": "4NyPhPv7K64xX8zosm6SbFuwj8mMF7Ub82JxDDWfmqh5aZRXJKnXeSiN81zC5iE2yyYwSqoFZqWnHKYkCADAgvqG",
  "key43": "2BZ8dNKK3nS5vuJUtLzWiybnqJTpcnsMqAw4rBrp3dSMgojGsuxxwbWRbz82RmNnmWBA6mvDTeybbyfycccgtBKe",
  "key44": "3yRg1qd2jPUM53mRVxKXYTk58tQcmax5Zv2C4q81aN4qBH2NQu859kQGiMF3N5XtnyvHC82tQFyPNPWHHopkQX8b",
  "key45": "2nT7cFnkPjoqSRNYUyQiCNh3kCA7kd58kBxXuEB32QNYoC5yPrfhDMJF9HM2yoMdbgVFy6S5g2bi42kHdtfwVxRf",
  "key46": "XpPZ4wamNFyEFcy31T93kkp6xQtPg378YkKFm3Di7JgDNU6FctboSbom3RzJwhE7Q7r6cs9rUjQtg8HG6e7TGdn",
  "key47": "36KZhYYv6u1ymN28LNGhDSY331betiZd6mRJZqGtvd6cRn7kttGw3s1dwEDKLFqq7gPfraBez1gzcdKAiD1UNgPJ"
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
