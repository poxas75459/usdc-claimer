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
    "4doEuaMUsujFNomnUTkLgZVBgS9oZTHNFFjxthJr17VL4aBBzb85BBXUubjoBx9bfUNN8GjGGwjNVgaMLBSZB3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J6i3kNSdV6qiejLyExVYCpeMoWc1L7Dp636j17g14jiAYceittnxqSFwjGMETsvziCqeZP3vhEmAWB7edgiTPty",
  "key1": "3r43yuSKMRgN4dxagjJjKLbtaqMf86PhCFf6D9a4QrKZnYPob3z66BKcR2xR9LJx8w9pYPsjpDakdN6UKcqimaQz",
  "key2": "2XjyoqpKkwtH6V2wBZnyGTVquMFj9n4WWbMBtsgzsxMH7TD5yiqtqKPZ5DHGSMX8mjDbxyUm1gB9W8UMzveYtgcj",
  "key3": "5mH3w52KgowMTAkorPRKFghk7kDzQRKz4g8cSRYCvXJMS5xh9BQY2DNNomAB77PCwyN2F8ikTrubm9fxiYAqFU4e",
  "key4": "2m6D7zMm2bVGpvdsdp1iApY3KzcabZ7jVfnEo4yZFAh5Lt77bxWC8H6ioqnQtCRnfXMzqTbE3ZGxRDbvgFkvtqm",
  "key5": "5jhsW67toeGws9STZQCDTN54KUqFgURJ97CdmhoVjDnGbpgLfTqQW2ZhcHhgdSVuwoRKTbMyrnr9K8B2hYQoYJXZ",
  "key6": "5fUoW86qeeGquze55QstT1TpfgfMifibVZ7xeQwWxuu8HUwnNmarVpUJLQGSv7hq3m5qkuYfn9VJARySV1PA9VMt",
  "key7": "5Lq4vYCC8bLXHs8y39ApuFs9X3DcV6zAJixi5CVWHtwkKiwcYc4N4XovAqkmMSBzGQZZ2KcetgQZNjqKAxp7oA3y",
  "key8": "3h1oSu7KkDRjv4FbXaDMGQPHcCsQKM7zsW7GTSt3GCGuLjC7AMNLRhQuFo2zBncAeJd2FjLwdEu4hZPjtGN76229",
  "key9": "42n5q3pqLov15ujchjSHMks36Yzbt5DShQm4q7vuxy1KR5UodY4ogdt2a2yyNYRbgi8pu5jobiom4jJWjni26DKW",
  "key10": "2YAC7ZJApnp3cHL371rGFeRS1CABCsmdcfDtuM4sdo3wpb59WBZjn6cbqipHcPkuTaanRC7iqY6H7ZR7Yhj6D3Be",
  "key11": "32Zfhfugy9iwbRCN1wTU3tWP6nAkvvaYKBmKmBj8Py6tUs6Q3dwD7Ss1EkL6At3wdXNTVDV4gAumZMb7WaKDzYY2",
  "key12": "Nrs4paa9DsM5aHRiapE1zdEi1gkoaZMhzknArQCrFCcsnbZmzXkj6ET3hiZBkgvQbwexQiLGwS5ENEQG3rwqba4",
  "key13": "5zAyQHfGf7RKBnDd3yBhzj31zY8HvREJwUdVebQN5pbViW3Dt3aGqJE5PsFTajyazN3FUVnHEpyf6fxKFEmmhczc",
  "key14": "3dvXYfrNYgevWqqyi3Kzq66zYpYkZWcbi2HYkwahwrkTAcvFjky19gQ3WwyHXCSLzijmBdSuoH5s3yBq7sA3rJb2",
  "key15": "jzjkMut71bpcAu69hZvpDk2zQzkdaa4mUwqyKCuTwwU6sFrp6WNGH2pDZSLm2tqzuyimXgn3CsBfLiBBd3cxUeE",
  "key16": "25LW9ZZWiTJeo8AgQgVbFQWAANx4H69Rb71xacyrtCX9Aqo9YRFP1wj7Mb7iVNR5YwXCQCRxbFLaXfWCLciZtjpW",
  "key17": "678yStvKSeG9qjaotrDr2nJPdwgA6rwJHwNgWS4judwyJdZ4VhgVNaPcoLhyghB3bodGhuZT9FY7KhAMnbefamk4",
  "key18": "9oDohXUnPZBgyBg2vnMbPUChGssQ94PpTUBgS5gEwd1HuoqoDf61b1iwz7aWTZBmYNd5dkYgbaTdeQMvpP978EY",
  "key19": "5Rm5gjFiaL8wkLq3Nf5CuzBrfb1RPK76266PwqZCLfJeGGxp5g81tQTy5yuYb7pLnrPcDULRu4GXbrxfUDBeF41G",
  "key20": "5nC66FQkSm25zgDboqJhSGxHDGqHUhi3F36NhfAqGTWJ9ES5UYxuvekFMagFQpw7GAWTRkStorWG2rxYQQHWNoRK",
  "key21": "vvf2aCEA27KQME893xaDE1iwSqoFedjspUZ6Q69v61bZCgQdmmDpScM5LsaTvsxZFqjSzZgRfLXW89j9Wx7KWaG",
  "key22": "39g17GweuyPRTz7YXSdzsB36eMQNjHKpDhm9i83oFKcmtVL75ZmUWtfkEqMDrThxxY6RXBQPoMWkgiYWw3Ltsvi9",
  "key23": "2yaPX1Q5fdLBXrhhxSp8UgPRe5Ahm1chbuYVkgrM3BN7KYnTm18YCfqpQd42nhzrn9yyHGwZuEa1zvGc6Hoo8FR4",
  "key24": "3NxPBGZ82JXGmMpuxpyHuSJgdeSVp1Bk18LmGn4tvgzcozzKxH4kLHsrKwjyUjL1UmF4qozmmUdMJR7gMyyPCcoo",
  "key25": "2rSSPGhKeocs6sXP2nJrC4EgAfEdymyxRY4XW2wKbiHBFwCmP692asbVQMUBTFvmjjD3rxT5bNVs2gCiL1hozBXt",
  "key26": "2bRQv1MHRYDEHybfKT96bXQoiCAz4X1NYfhGLRbUaoNCr2cRrBSi5q3fCKUpTmGpZCGdJRBYmniR9cLzf5tfHXBw",
  "key27": "2HkMZHZ9cfG9NzqxJse13Wy9xEYzKy3AwEVyLqEoYs1jH6wWKVj7hcWQPdSLScWMu4NzDbCe5cbc3mnx59qiZRKX",
  "key28": "5i3KH2juR1s1D1K9WtfgtxRF8Zfy33oCqU9wgtCtyPondjSthnVfmsRDYiakBDcqCL37JeELcKwNrhS4oDHAuUbg",
  "key29": "2mEnGiWrpBFXuUWs69Pn78QDL9UQrSpkRmRodp8PMQWMrPB721DdyNydsUxpi3ujvDCez8dGbQJK96ZXTd5MBrqs",
  "key30": "46ToTg2duq5ennUMTjRkTkmTtMZ6WQnU496Loo6sZCjpPnsr6vfV6bZW4yprFQ2KNyuZnvSWrpRRGUZ37mYQJAei",
  "key31": "RJQe2qkrDHejcUsFB2cmu58WkSx1mvyMQoUkAi8VjPYMFyT9gGNncY6jP7KVxBsdYc4itYfysey5WqumTjqehEp",
  "key32": "2trehKLTPhEWGCeekGENtEfsHtX52gRUCCvt8o9jBiXuQefekGgu6BsgXpdAqbPdBZNxzAhVvJm2scbcViECoXP4",
  "key33": "65uYqco1Rc6hBUHF9TNYjcwt1eYcYHwADKKz2QQrXCxffVDu71DJKY2pKngk6XGdpxqtFAdfCJhvykpEzo3CUHDa",
  "key34": "2adXgn3f4eb2qD3NjyV6LctHickuxA8CJakouFMfAo5AtVbQ8nG6HKAGpYxzs9UKZEXdAj9GUm6xfVsB318eUUjB",
  "key35": "dmqc6qEdda6sZ6Za3fJeXzSLS8i9cU5cocuQNmkiafL9DjBprVw82gLLG6iNQKb7crtdBgjCDif871mxtCGmBtf",
  "key36": "5kwxqf4jSukDWUBavjPVieQDmYAxxA13ThZZuwMDZ5y9jRTJtA4MTsCoZfhkYLiqZErNqCStcpxp2tLQxH3KmH3z",
  "key37": "4VzRzokKfTHF4dhT64LDU5TihCWtUp1kL4bEcanFQHiTHsgdAReUgHMvnnWwj7AajqtZQTcNMm6tJUQuQ7oAmpsN",
  "key38": "eKe15k1dwLs6XSjkS9is5XtnUGa9XYPhDeYBZB8MkUcsn9mmGKeWppUD39VYomMa6gz6MTzp4nQR2LZTqxu1myd",
  "key39": "2bFr7bruY3PaxP73p9hycu4MXAUaYMkpubuqhvLZRBPkuHLWV4htjmvoyVWWAJ1HFEbFbLGQ8JCPFD4HWCfiG5mw",
  "key40": "3vPwc5KgoeYFkkQZJASJRaWfKZUZFRLKttMJFmXY1kWCmi8vWEM9kR597FWkKYj6Rg8Wtq1zytV7oPoYsDUncuVd",
  "key41": "3FtMTg5vmP7nAVngBAHEngwqDmcDobyjCgkASUfPEnGUq2i7tNw9zuKowNh6vfM2UbTMX1pTUMNS2EpBFczBEcPC",
  "key42": "3qabBJNMeV7ckT9ABYgcDmuwnMtL6DCZskGZDzRT5M5vNwyu41L7tEHT2jPXSVSZ8hMtBuonMXHgsmPLFXgFyvgT",
  "key43": "4oKiw3uazSGRPGbcyVq33hY313SghRvgFn1BSshMtnaCwhMY6GDCR2XspcaaBMwzLWLVZTsfdguadfB8J1zNnbL5",
  "key44": "5QbUDm931H99BJX4JjrG9weKAzrSgdZoJpSurSYw63smY6PLcSGW7NL4Q14EKDBcm3RzcJAaSmB3GsPsZTH11Z2J",
  "key45": "rJmnEKYp7GAC3K6x3rEaMaYi1swax8ZmFYsPvWjz1xJVjnhUujL5YzyN5kjkMrSm3rGYx4FZu4w52GUrkWKZ7Ps",
  "key46": "1mAY4DbYVAAySftfREYUZRoaVwjGkNeXHYuGdXxvrsthZSv1cHxpGxG3ckoBB5EkMLabHxKcQFhk3JG4wUGKimw",
  "key47": "32PYm1mzsV6vRV4gNgzF6fq1qe2SmdiSpvbjdrPDYwZzpr7uZ56hRd8YKervHU3UUvvAv4t89djUEcSD2KxHzWjG",
  "key48": "67dzZZBzTHycq7tKxdQq5xsPgHCWkWtPnn3BCs3pF92ZktE2G4KDcfzU8nbC1SNdUWnnty5wxjHtkZ92QDSDR71e",
  "key49": "4FspJvVkr5ECARxp9gcQWSRw88VwdnQKadsYUnkteQ3RgRVNzqb5o8Zs5sXBeBuSwtUX5jgM2K43WN4N6bzMEtMU"
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
