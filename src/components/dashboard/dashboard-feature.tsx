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
    "63zoHzoxSL3dhxMMMgsiaELJ65Bq9jiAn4mUefR6Jhfx4PfpWjymo22EroZEgTCfnYcDiB7LHohN2aoYq4CnCGo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwHEEnXxBCtGGbXz1BKr3LrUbqCadia5zmGrFsdFncfH42tKsYfLAyrsG3HZMxQptS78YDkdi7JZ2jr5wQmJyiy",
  "key1": "2f86AcoEcrnWgEz2iivLcy1kS2tuH3MuiB7hJD57uvMDZ8VbcuGJh6m4oeiAwioUVp6oXpXX3YVsyR5hfd4Ako28",
  "key2": "3K93sMokswBCSBKNFtzLWg6Ko56vRs9raEj1EtFUKSqot4AcdpdjAoZeFpBTgaHyr5akzVnzPJrJJt3uE5CnUqiQ",
  "key3": "3TpBxA2X2tQG52fpCLNRqybRtP5AQi2DwVayKziBqk4rMTG8D37SNN8WZzwXzFyTiA76VLt1ct8SuWCnMa2VkHTh",
  "key4": "4FrfwE1SmLpwuP97bkLGsqe3KNgAnr9iR7jSgMPhVnoMn5jZ5r942KpYyCiqkhE3j7PiTpQqbu2AQqssAWSHp1fe",
  "key5": "3J91YVKPPmxwaw41M3doaLw3MqqpxF4eXMW2TUueiXBKo4CK1bbRqcKv8rp85HTqiT7sfCAoqruHVMenH7TkkxRH",
  "key6": "4oSd3GqMebHaTAe3cedCcEvMMpStNAKfV9zKbpHYJnTH8Y3ApQR2CMXKFDzcaf5BguKEJb5P5iLG7m6UY4DVXb9f",
  "key7": "417TafD3QU9NR4ba6Xg7tLn4gHx1prFwZLhvkCLBGYpAi1JqEPoPhMVLuJHFMXdcqEjKVbEtfH8iWKaKYZ9srDW",
  "key8": "HwfTB897jBcFFYGy79hseEyk6BHQtZjVua4ZffJgEDVrKyEs2wxbpazT6baFekY9ycnWmmHVw5v8NzXgkpZHf9y",
  "key9": "3wRoGjEdQMYVCEF5G3Ec1eWY8BH5J1nPGj17iYZwHrPFZaLqsxMtT1rdVV9qvW9Vfs5AEHTFyjF2KTLov1nEgQfo",
  "key10": "3GBDbhUE5vGeF4RKzjead3noZaMEftAJ4XCZiTCCiaLPQ5gTtVMcA9vt7xii89pM9wzoKkZeyUJ2p86Vugcuy1mP",
  "key11": "4maajzXZ49gJcEZZMFoUpWFMSR8QcDGFsUuUhSPLPKdWfj6WWqCwo9VXo1NMmayyJ9fkdRz7CGSUSB85MUHH95aU",
  "key12": "5Q2iSx2esCiWWzpLJr1kmExK8PyciVy2uuCPhfb9iLEH6cfXc7fjRWTcRV7HCSDzF14PHFZeoheSjqhRLgEiL8qu",
  "key13": "tjARSiqU7ScLrbZpDaS5tvi4wXkuba8vYo67Pvc1ZYVs4JKjUFh26JtfRLHMfJVrT7XMk95hi2BQG7VfCTACso6",
  "key14": "3HX8ZuLdQWETm56gyBMgMyAFXzBf5zBV4NxUg8TNENJMFKetnrgCdGzHua5axaTzR6vYJCctjBeN3gTzZyDaF2i4",
  "key15": "22mPbf2FENgCaMAvztCmcLtPkV6db5UZrWUeytPi7vuBq2MLAh5JhHVHuErtQHqkzmbwTD1Wo1VvbsiyS9qhJEfk",
  "key16": "39vXLNss7A2UMP3deAz34aCLY26sgaKSaJk9hYKTZQQLWa1GynPAT4n3BVKHjThkPkYgGR5aCbqcs8RuehFpip1p",
  "key17": "4jKvbeyXCPByvkrDkyRGJXRTN1yeCVC4DmXTnpZY8Vns883DXJH84HqGUxNSMQUT1Ce3SH2KCugvq7L5D8hY3j1C",
  "key18": "5gYM3nooZLTq2Lux2PLrx3TexcoEMwo17tz4i37956neufoV1tdMJiiSpx6TLSfHadiTZxaE6NSW8NhTdSRRHsgY",
  "key19": "5M5rMz24n6Cq79ZMYgVNm6Aju5qFCwWsmn1GRDDfHbGYm3tSMUoSYQNRVoYLurwb2JzAbpWHBK6AjzRznjUqZWF",
  "key20": "3BLg32VXCQXRQhkrNmXrpeZobFHvsPyWo74g8AYGLmpAoNriN45BeWdh58CdHFxwC23yjF7Zgss1zmVHDmjWZrAo",
  "key21": "4pG3mFZ76YyQrnY7BpAacw1P2sBgEd5u1WqNDyuCkc6etTCYsHES12fUv39TgWqTJhoQLSfRtsXwRJ1uFMESsa5L",
  "key22": "aYgRxNRJVkL2TEYxj6QCDcHtSzKzAew5syQA2azhMj8PpnhS9HQrDgeQk6u2GDwrx715eQp8qenhJAWkwZdfwaw",
  "key23": "5HdhZpCz3L7cZ9qG2tPnyn2jiGgbPTdmkFV875RZUMrnwCjyWTTrQbTxyG7qJuKLRXSYbjc74BLJTMcHigWY4G4T",
  "key24": "dvwGF3ebL1UDrM4iKYAomBC8S1aYrLbKAUMJoyGPSXQ8mv5aZDubbSuCUtf19crDG46NuAJvoPVLbNP25YaQQpD",
  "key25": "5iKcE1NYEsGme7K773xHTZ8L7mB9RS9eursHhQui3hxHVtMNH9W785b4HdL2ajVWjP3oqzNfQhvrLCpTf6kTBk2V",
  "key26": "3YRFdTZjgqWZAUmTreRqgPJ9nYZUZkBVibxzhFiaNLpArjokP2EfwUXdKbFoxFeCNBJp3bJGWmLwtLhFs2ohgpKa",
  "key27": "5Av2PFqBKJhSd4h77SmAhmoNH7dLoNe2TDBZqQMn9HnryMevHQgfV4144CkmunyrHvp5hEvfsKXgeTbvGZraLNs1",
  "key28": "2biDWpUZpNBfVxbsEMSNZPnUhi1u5HUaWDimZAkpBcYqMozhUwnxdGuJ5hbK8jsWf6GU7PPAviktcdz7hAF7Dr5",
  "key29": "5DzEYotkY9o1rrFRB65i26KCpLiD4QboUhmyDLE3LDYYcZTnJAgUHYSAmEjhdmGER5UKosHdVhDnPCQ8JPmF92Xc",
  "key30": "33mrK6Vs2brEiLY9g11hRpFCq5UwJX8uw7mxB2nEMJUQmgBzA9tEEgdgBKUZbLcu7gd8z7gEBb4ytRKLhZ9oCVTx",
  "key31": "3nm3vj2KRBUZAUmViWn4iuAjMGGiGLYFHuYbK5KxFusoJx3mrZbqa5Ajba4GBJWLCajdwc6Uk7WeYMzKuPZYwWdq",
  "key32": "5zmeW67kDhWBWiuAfiaocYaqgwQbayop4a3QH6M6WTx7VAqBPcVgVtqTHJwrEe57sHGym8dhiq1NyqmPj9GALRUV",
  "key33": "1mYXree7W7kyn97tFjHX1V83PF7wBbcY7UEUc2u4d3v9edH5iRCcxvFLh4FuCoKiZcmBDADYY8NF4izTBVdFtmP",
  "key34": "2Wbwtxib6BTbJF5tFbWciQmCELv5PPy8yehxuNBNSC5YhMWiFc6AENCqSXkeNeGXHeyfczLxCP4NxPJtLzHou4D",
  "key35": "5JwGtgN2onFNCj1Vf3UJ7V63R7Ny3Dx2iQ6kSLXqmKbrwrdkUPKLNLK9KnNimNg3QPrFsgH2M25G1P4Jvj8vGwTk",
  "key36": "iFBzRGNuBYAenoM6PTMmYqA3k2U6zwGUeVMj7ovgNHDoMFHLWWHZ1Uqt1broajtNMAFLNG6e3oPRHuerhK1ybET",
  "key37": "XsBLfoFLNXtZzcPYjPVoosHviJbhqD3uaXzeUp3en1CprXLy2LZ8ABgu3CH9kyCEW4oQ9RQaGav4GEW8RjVT2mh",
  "key38": "4EmvAUZRptJJk1Z2jQXZpB2h4cYYQG2nxCXTGz4K3cVpRGB2i8QWDoLFHwcapysrbq1zdHNXJo87riCPtUbKhpwq",
  "key39": "4Ky699KmRQk8HxkoyYPhHH99Tb6e2frA4JWbnu3nV12kGASjNbRvBMFdnxiYBeu4i2CTnZk116YZPCQ1NR3PKUsy",
  "key40": "3kWrx1rS1xF6LXckwdB11SeWDXJ4JpqehsuiXUHt3Z5bx7EFCPigq8VV7CzzoYxZ9e1tjwMMV9SNTye3NyE1Dc3y",
  "key41": "3AvRVQoqoW9AP9jBuo94gEc2StUZL1rA15Yc5YvxXYneV3kkD6U4ts7oQSFthfNVmLG1q6NNqrUUT5UQVHcuVzyF",
  "key42": "mxz4JP9s86s1mAsPK23yvTUaNvxZ1W2JsMNh9dc162z8AJGM2hqXJL3QFGnUfeNaitf6d7roYKBwaycbaUid8ym",
  "key43": "5i7YzLXnpkzKcDnZ9719fj8WZj9krKxuFVNZ8Ha5eLCdGzeDiP6Z6pPuifA1NZLYetUF7Y5cHXwC9u37eQMV5REF",
  "key44": "353XM8CU6zHXpw9hLUnBnYJWWLfBeAvXKT25BNqRAR3SpoSRqbEC7PLPd6beAuzcrV62vifREb2NdcPdpQvuYFsD",
  "key45": "4kwX9HwMkjADjhTe6UAKBf9pvcfF64UdsCFW5KMpdnF6H49t7NjnE2KhgcE9LKhEccscPGdWdbr9NuNcG8nG58e6",
  "key46": "5yaag51nqG7hficMPHyngXKhziKamQUD5guU3VEkE9bPN2kwhCzfLHAhFC3DLkJQNxi1CNTTaowqNR341CifzfLy",
  "key47": "5aQjJJLRpim8z47iSP7fcxXiLoPG7kJH1qZcZ43kpdKH4bK6MbaokUqAsWF5Ag55F9y9E3hjWHVHPaApbjEmBW7x"
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
