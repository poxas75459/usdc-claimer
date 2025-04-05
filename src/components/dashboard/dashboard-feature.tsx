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
    "3YsKJEekXENKRoo56EHuGpXodmuurZCnHspsbD3pFz7SS6W8MGQcXhtqHmMg3LAHvk2mUQsSt8wTVVemcamTw5wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T8JhMqY9GfYoCUvikZ1Nf8AeEXyU2SDVhLWSt4Cdbn9RNgNehhVePmVFEaik9LTQES86BhDYY6C6dwgSUtGRjqb",
  "key1": "2ZyYKArqHTRe1d1fDUdVTosLvXBDuyLzA7c6ybWRuNJchYmvkJuwscshLynKfAjJh4kr2X35yxchJWkdqVMioqyn",
  "key2": "5guaWZD1yx4CH995GAu2JzoUsUKeiMQgpmkwWj5EtPxbhN9Mdeez1EbaorRN2YjuxWw3EVrokod9SJvcyVgh8xr8",
  "key3": "3nfZd6SZ6NSncXBTGpHKLsyuLT6pYNMTW4mFdLrAwrMH4twGwPezGX1ZYuLVVvEbxQV3zWgusncMr2mdkCpto1FJ",
  "key4": "4cq7XbWFEAoRw8meSGJmUytdepA1TyU5z9k6HJWQQVwDgeEzwTdiZJ4WivPAde4w7dX6Bp67p39SaNkqbPWrD5YK",
  "key5": "53G1ekGSCwudnccFpYT4MLAyizHjHKgEJHS7L9ovaYDMEPVB1GQGR1bEjzv2xmHwXNfR5bE48xx2aWRn8MdSztjt",
  "key6": "29PNJfsB2bZG43Yg99o7qQfoiqA6jQcF4ZfRsy4ovMGQbqSTrMNDYxLz6tLxaF7ECR1auJeKYGvo8PCYG4eQGWBp",
  "key7": "2hy6TPdEovj62jRb3dR1XJXncRffVoaXGe6DyEiWaRnReS2SYhwbaie5GY6F4V2Gke3Bk6Loa8r8DY1TRr3RiufT",
  "key8": "6ivhTahSYqujJG6DAc4Vijvjx9FBBbMAAWBU23kgWrjGjKkmzNR7pb3NDaWgKiT4RPtA1LH2NiQtqLRrpsPDRMa",
  "key9": "2BM8DwptGe6Dikte5rGgGMAjZEnQ6swZuYhfayYc8rsnDZ7Ft52xF2J8juArSPLUDvHp3szV3rJPWdCbfxjncczY",
  "key10": "5zHAhhRSMF18hpxAoQY4JFrGYQe73JiLAkADrpZxnoAqruLb83tQV7yrNMX374xBLnkwEqqqLXUtGBu1xDLefjcu",
  "key11": "SK7aURJQPPdwu5oAq44UAS31HE75QQGpK9xXroipZdUq7TwkdQLr2TTp1GiAb28Dmy2c4x24GJLVY4yNp68ymbX",
  "key12": "5AbffphQqpdexGf9QrrT5TZD1q9UAMyGjbDCwRkiteQHY6Di3K5kUom7qPkoBjJwfabgeK834uPdUL2FJZrHVG9E",
  "key13": "52MN4jDr8SS7bamz9AngSrtyH8XNE8tX9G2SLMgr7VARcqFheQpaXcmUVMxxtij2xxDETFAAuHQsup2yacMPbu6C",
  "key14": "2H1CVtBbRAQQW1J5Qu9mH9RFCWV76kvmsWvxhgfL7BkrLSsR1kzPm3PrUQG4DAZyPoY7wzXQhnmzUCy1Y5j9SmYf",
  "key15": "2F6vfkRtEXccK8osv5zczbz97bbArX927dPEyz8ygdZWPWggLEk5WRuMmEGDXbZLkmB2j45h4Y3Mj1PZDupvbqjV",
  "key16": "57pgt6VsgMevFQbbC5gvaFptHwybw2qUiE8VG7esdZUePGxcWzZFDt3B7ZuR1NPuWsjHr369Lk5kBFQxdVepbL3z",
  "key17": "2rMotDbGMWis8MXX4mo2HgLRrq1TDpzJcrAKcmHNfRYmWqZJoJotceT29FkXdY7BfSTioBgKV5Rj4c9Qrv4rpiXZ",
  "key18": "LGUUcc7r83TjrT6zGVv5Ut4pRFKEH8bNgY1ZtMfiGhw9wHLdhY1y15KMtE8DXE4mVMXx5iaoVEyk7XLASY85ZnP",
  "key19": "swoNTJjCMBra2PF8E8fzFqtecRWPFr2RES7PHXVAYYDvneApsneJmGK6one2Qd9E9H3QJvDQ89yU9iMgjRsZjSV",
  "key20": "5c32vWUyEirRG3KdJ2ANe635btj7ftjQ6i2UyYvyycpX2aggToRZbEqwFLZahS5gR6iY2PHgNQ3s3FUJL6g8Co2A",
  "key21": "4iz4oyYeMp96XwBPB9X5axgk2rJ75kVtbgNfu6qszqigsmbY6ogHM2fXFLALdK7mbWr3dgW4JxVNJc9bqpT8R77k",
  "key22": "3F8C6nf8veSv4JKcLoCMnQCEXQduY2LngciUJgMq1skLQoMafKT7VHKFjfcCUfB6FnATE4SgVWGCBjhfYgjsoPmA",
  "key23": "45i9s1yCUffiVGpwoKKGFto1Jpc5ZM9DXpWyoyppZEgh4HQqDbVmPZZywzxziMMCnFvqGAFnJG9Dw7aRp9YuAPzo",
  "key24": "4teUeKubA63VpzznyYpGwDR8BY9ZtJMnfSEjXso3YQoYWQs5ZGcoWzgUVdcL8CzN7YvLWRsAjhkziuMxPcVFfoci",
  "key25": "4xjvheFMLK3eVcsGT8h421JAM9zYGcXnTjpEPwzuxUAPqEkHRge754JmZBrVLwEbYoGrCG7vzJqCqdfnzTJqRU6N",
  "key26": "4UPxh1AVPzWn7yFc5axr76pgpqRjYeg6D78FwtTkkcQaVi7vWRnrvSGNZqWnWPMRqUKyP2Y8nUbC2yjkExsgh6N8",
  "key27": "3FFW9Kr5ak6htwGkoTGBA7uoshy1ESUxCHdT4dc3pbeB5ZsVegGCHTaq2HqQ73ZQgRC9irhh5utYtHrHXPGMBEZf",
  "key28": "2jDJA1U2TmLpH4b2ynK8iGGhuM2TnkQbXUgLDXTVePFGEBB9LRds6amEJv9G5CiPv6oGJgUWn8GtSRB49TnsHiXC",
  "key29": "5KnNLXxGjVNvbKC4wtv6n9PyExmReDKdULUcqf5W15cT8R83mDoN9bAGj1N2jdonsVsuHzWijCgYt8HcU4guysLU",
  "key30": "52jAGwGRTWF2dqDSvCiV57vozoa2X2pD4zWTCnccMxsRpy8NKgErLXf8mk99BKqPca3znztEmfgdaLg47fiA8bQh",
  "key31": "5WKAkg6zo8iQeHUkfbwed6cdrm9sJz8gKeQWBnUz1ziE9X6D6xhUicPvXsShFs4R2CSMAtMcgzxeyRKjVtDuZxUM",
  "key32": "3eAzu5saBMpHii43Aqy9MWQYjJkRUR2d6TW2pdPib8buMDUQdisLbt8bPeU6WypbwUvdFRc6T7C2zFGJuuiXSwD4",
  "key33": "59GqkLPYaMMroZWZoaNKtRDUwVuWE6K3ZWRYj4ioH2XQqNLCSudcKXNwxPd1ZH541yyEH4XFS8pF3Kd9S8NQVb68",
  "key34": "2XSRND5h4BxN2e4nK313XrxbaKPRoFDvyLtdmRtKHNbLwKMAmKoQbzzLNidD7RMe9jjrWUz3KNZaE4iLGXWpmSaE",
  "key35": "4wPM3JixAJ76hKEf6WrhYsKxtaihRM8TqPS3prruZTYqbPUsgoShYkvvxonVA7Zg3Aw3RQQ44xdgGtTAJxuVmuMU",
  "key36": "4W84YFM4Xr6SPGHoyuMuYeGJ6zuN2pMhLddMquvxX6pWNDShVueXAUNrybV799oq6YkaY6n6sNAUeGkREuH74rRY",
  "key37": "5ZU15JcLEEYajD2f5M4QYRg8sJnfr3Lkq8nuQ6SmThkWyCagXDuogVfVYW1hs5vrXckbbDyC7d4AWXWcQJ8KSEEb"
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
