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
    "5w1YnPZ1C52kG4DNywY5UyMNC9Ux3GzaK9uhLCwbz6b4jRT1XPM2MRz1oikxV9sUDaDe3coBeaiZQ6cbSn5Liwi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oeekyPGG2VMeshQQFKSag8jwyncmdHi1L5LKdEXnt2MbaQVwr8n3HsQhDU9NaqNQA3JVGpktDX8ZET1Y1hTteP8",
  "key1": "3pVWyXUv3Sj95G6HKAqpQskDyDtVTUENXUoH2n3FsrYYqENzKFxVboJPDp9WzJFVEDWCyrp57tQtknjC8oNiNRkS",
  "key2": "TgQtBsBopg1wT3FoFeQG7F8yy4d5F14RgPhSeMuXX7EvyUT8j2q2RBDCnnvgLpgvsiP4eF8MFqcsuWdfekQTScg",
  "key3": "2gx9WbaEHNgsFbqEk53bGUbfjwMeAWoF9KudB29mDp4iKmhqa4xfdPhnSTKsqqnTPkuxGmbd1oTpcjYfyVA45Rkg",
  "key4": "ts7FANkjUViysmgx734r6Qbdd2TM3YPm5x2yaf8TGqVTKiEtM6mHp2qMuG7ZUD93AifmaeNNEXXTLroz6cZAfNM",
  "key5": "ZDTvaPiqRrtYioEsdVotKbaQwzdhw4ALry7HXByeDc9S3zod3LDKm2X1Dmqm63Qp35AE49DL2iy4iCGu4z7Y7tK",
  "key6": "2Es6jTp3NPWuocgFcA4YhWM3FV1By212FYdYfZJDhDbbmnXMgrdQDK84nKLJxp9d6ka38UmPQs9toHEuh7oYJCrE",
  "key7": "5YrG5sJ77LjcDN5prrHHXkWje9GM6bMiriewmgmcBQTUoz1od7WsGd3Fec9Z5CaRim5t45Y4GSPezQHqjvf5GXwQ",
  "key8": "4NU8hxriMQH5cEweSeFtRT94cZpVpBLehgNDyRRZ2TtCELhRqr1fdB9CLerhrEhVNuTSjtXCpsRchC4Mhiob3KwR",
  "key9": "5PCQ7FHSBMedDjK5jWLmRmpMio4g2ewWYMRkGz2EyofezbVXZ3haHi9KGxSTRisCc8reTRhL6SYVZXcDpScBUbhQ",
  "key10": "3cppNQ7dfXsdiNGqSZQZVwivnwr365XrVe8p5nn3NH4eeMf5VWcafpmPBbsD6cJwVoNX1YPj1f9A7TMqEYKcTX4B",
  "key11": "4avRzhVrq6nNSkejnfpPi222Vvy1m8R88qdSULsHjGzU57YHzK3kZcfAnihwoJ7JyHzUA69wdFhCABQn53XE39Cf",
  "key12": "237YJhippfqhABe7CmNt5vDSXbqCFE9zaWAF3iBadRhoXuaQ66rxGmwc5pBYk7cdJfiVGEuxLBpgJe4o7NGsMJQt",
  "key13": "4fVJz7zg4a9wArLiGFksfvuUgfKtTuJPR1Kn2yzB8nabGv4ZAm8PYbLNpN7KvjcSU9cscyozWPv6DpptUck6pRQu",
  "key14": "7E1xAo6EpBdQVgsmU9xKifRbDX9diWhgRwCwH41VHWmfphibCkAXeTmBBc1mXqxS36AbD8Z1MNrc5kCcQRaaUVb",
  "key15": "4EeVDTYzj9YWuXsx8fJsmfNeEsoUNriyXapfaqTDrJ4wuBztzfwJdMtzqLvvUjDdvkLSgvxa1nHXd2rTTH2ikXtZ",
  "key16": "KeHbHGsGw7snggGzqeWah2mhYaksq3oYWWbjmY52emU1YA3YD4HMHjg9RyQc5jZC84wvB9XV7aPytS4UcEJ9Ut6",
  "key17": "5KrfA26AqovsQeFuF5NZ9DPNyhMsNY1YncTBxvuj91JQmzEYxxbM3rY7uEUANdBFYJGPo5uFWpqiNqhEWxwcr3sW",
  "key18": "3h7HkzGF8QxZfcVHbc2yXuqm4k517FTXr6jNqtmXmFe1hdeb3SZVLdNs6jewNbgppXzwRz2NVDGrLt2HNsfRtBvN",
  "key19": "4uBb4dpJ1jgZ1FyxkANaUvGvzEjfVtVAnNzFtvsJxvFnQfbnCd2MPmfBLnqA5avBTrBG1iexd3Quhjtvmvng647e",
  "key20": "2nhHtu6y2Lz1HKT32jG9CLsCXqq1suDajUcDciaYpzc6Ck7puMP7p2tNbLuGGDmT4hwx1Q5XanKCHeu2yDyRTvhr",
  "key21": "2edqTcxCygmEm1trZo6r4LZRddCvEBejEvGCNtYqy7aJmbsZhwjc3GoK3LzVuZvDNsKcJzsvbugEdYzmLx5uyNqx",
  "key22": "2eAxnpGQ717en2rqWN5ADXTdxQFyxKaQpWcN5AEkUbvGasJa98LVTVkykziFfR8Wiruy2xeNFbtMHNqs1xrd7iHV",
  "key23": "2gvpv636NyPjWtkz6aEi8KjpQcuBc4uPNYK2nKBPNpgz8WDmAkXANdRBD4MJAWXNmKaWwiSTBEzguVa9cNKeMMSN",
  "key24": "2nS1ahsfz61d4BEr8mZyznDFJb5iFmroksEPTTVEjXsYkZdekUkUshEBiXNjdoo2vFEjNM2wryA1uakGGh9m4xAi",
  "key25": "UbZAo4wM9NK71y2qEPSKw1LeJaWfQR7d4uQj6oujLcWeRQRYCW7Y7xfuiBmXdFL3vGDqvvZCEyuWhCEJcm2Wfpm",
  "key26": "4jJDRXzHdBmTDN4QPJSDi3iZu8ufoc2S5w7yXwpn4WdEPuXWPDhgzApYWe6tjbLDJtp8EUsx3xM43wGZjzM5kUwj",
  "key27": "2ptYVvN61daTriVDa6Ghkp9acFQPtwNqvsrjCHgcdnjSHKT2EpMihDFkGj1vsCt5C5BBftLqv6NdERiakY9a1LMm",
  "key28": "4tfTAonw3dcRZxFqejcteFDaSwDmgJoHhbdwn8JUvD2WhCi2szRKqLg2eEhBLDjSbmeieRp21498a8WVgujkp78n",
  "key29": "5n4HHFppYMLTg4GVGehhemM7HrkzqYMzWXhWFFHqjBkSRiKRBvjW2h2Su3FZbfnnZxme6ezv4nQejfn5Asz7U8U1",
  "key30": "48sEJsdmYreCCurS88RKqhC5B38kn2rT2qjxsijiBpWVCegQbb8Sr2JGExr3xqFQxZmDbiEpEkTCyPQzqXf5RJuh",
  "key31": "5j1XnAVa5YrzXPg9GkJFQCYx8mam96N1UrCiSo7desMySYxnhH68J1sAgetRohxHtkQjdq4yngytpnqvbpsSd2sA",
  "key32": "5n4xDgctsN31ZAJ7Pbb3TMrMFvHMT2u19hWeDKjcLhghPSPagfvQC1hxC3hjWoGsoR1FamSMF7sTr35kHnkWUoEG",
  "key33": "hDRstJiRcb1KJn8kynYLpSQFvTNX8eEJrZvGAQFGZSNSzLMLE8WV3VjzBBU9AbjUByowxkeCPiMvbxHdFZDzNZc"
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
