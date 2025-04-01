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
    "2JvATYy6y2ixAfAcD411XCkXjaSkPoZDRYwKRo6cDiMKUYQQY9fPcAei1JinaxtwcUAUKhnHQ7rb2VsombtJLhfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KbYQDmvJZSwN8tDE8KgWK3cpnG79XfAYk12JeWg2keqiSRvq8fJ83xv8M5TtvLagC8DcJkgkM5QBYifEsZbRfVJ",
  "key1": "7v86ZLxRTxHuoLXuJiyAX6k7UPvwLSC2fmnjESPbbDmbcvHdDrKQUW1cGjViaZMis8SLWiorZAAbuCiZP9gokp4",
  "key2": "4NsX92S5F1X61PKMyDyWNDu4wyLrAJ9E4aZs3w7CHJeBZW12TZdXRVwojmZkfvj6RbDZkrX6KZJQh6XZVaaRHiFD",
  "key3": "3Kh5Xfzo184qCZGikjxQf9NcHzCFnwLvJBUiE3V9FdRXpFWFfg5S4BRq3GenM6uBiwR9tDDUKgpjjHqmgfWG2rkL",
  "key4": "MZAxr1hNTEM9Br9CQa6rfAVBGcxUXGZ8vA9tVU7kRofAMjXHTr15NaLwZpoaJELn8zLfufeAnzAe5ZmCSegQxKB",
  "key5": "b8ombetGvQFEtcxm9uFtG9CxaDXm1dq66zwJZEXFwusRa4npEp91VvrFdQ4HthCHQ4yBqzzMaUHm2MLRVQSkQjF",
  "key6": "hh1cjx9XBvaZSsSj2qud3qH6qky8XsPSh1rmEnPGrAUYesVTYth2T5PEGvor6p739bTpxazy1y64W6Hp5sZf1cz",
  "key7": "3hkXBKppXvguNQpmSVbkFT5Z2rEWVWYF55twRYnVeBiFHyTWaj8AR5xYpVTVwEMPZ79fviLW7ppwFxbQFp1wqqAc",
  "key8": "4pN2Jq6xBWHyXkZxo7V2qD38h8dR15KVmbsiGASXLVK3GmhmXsD1wJTrHn8D5Mv341bG4m98kmqrWLCu2YjiyY3s",
  "key9": "21w579hUADNsRvnmhGqHW93gMBVKMYcrKEHTgBTcHTjNXj21ie81XnramAYGvw9WEgMDjhKiVFQzpTpEsY4p9vWQ",
  "key10": "4FCdzneGwxfW4XBhg9XUTapWKs3vLfibdQ2twz7TTzDrWLRvk1F5tp189hTyvyuEoM1z5GPeEKDVMjfrS9PzkspN",
  "key11": "qfzjouvtHKqPhpXNFveWAKRKKRKDmhTbzvb5hAofp27kHt3qytM4F4MqrpURcjwNcLsMZv2Ai2chizFqdjvg2cU",
  "key12": "5UnYH4aZyjjrH4PouqBCFb18N9Kd9WPAY1ZXfFJnFEqcF73nQNJwCkb5v3qLnpzn7JfYNJjLxN4Dfm8CLd3EFdJD",
  "key13": "26Q5pfJjQmj6c7chLcZ7VJWntW3e3y9RD2C7NhRifyBoh4yb6SAvwc2Rz57yagtULPWnELaAkN4RpNbCzqowBJFk",
  "key14": "2cq2sN4gWE8Ygmc5qrXrXrQfv5HCsqhcujZhwG4iSKwrSow86FTu9QMCbNgKtcmBtWghZpZHZUF9Hnm2ArxtBdxQ",
  "key15": "5FM2tQjAce3AKGRBshVrFAeDXcry6KvGN6wpkrTDU1QbN3NnWNpeZWnBXA4WcSVUkzQXHtdv3vqeimB8wDy86179",
  "key16": "5xMJydfEWXDiwWVMfPwS7obxV4ksg8sYavK7tfsdkdzotpLaneSdWLFhbe5hopjg6zUoLozVunsszkdN1LVwDBUM",
  "key17": "4NKyaNk2TmMU4inht6Q5rjWd4cE3fsQDM9RRuLbSM3jRjsxcvNLqik8YfDQPHA2UovHvo1L7h1kNFh7osTUrZf7a",
  "key18": "5MJSeBhNKVpeM7da8C2tKvDxUg1T26NMWPqKvVjVjNAxPp4yRoSSWNL9z9WuGCx6pR3YcGjGtSKWsZwoDLZ3t6gm",
  "key19": "4E2we8F8svkdfXEk8S19FSUoTRA1sL8zbb9Py4Qkv5upV4TU5ri37Ze2TYWh7iHq1XgTJM1MnnBRtwcEPM5KfAJb",
  "key20": "4AmYgRWQNSiJKCRLQRE471eiLgVT7Z1JAVJy2SqB1TqbeDRNN5YC3g7joEuePx2HgGpETongYiSEgUR95zKMo8Ft",
  "key21": "2aigag2YegW3tkndYbzyAPhTWm2AM7TQM8DF9VMiRC7az8ucBkWiZ5orq1ZXyvbnig1XXPd1edRKAgmCUiPMhgi6",
  "key22": "29HvmGdCJocbcBX95Xb1k2fUSeaLvGexfaP4ngzBZj2CjbVEugvMoRLroxrT8xEKZK85UU7LtQPykb8vykow6daC",
  "key23": "3HpiwogrLuk55inCze2k2UjnR76MiRnzQuqXCaoMeK2SFGF4qS9z4mjhhp8J67T5s1eLTgc2DsKXP2vtqEta1zB7",
  "key24": "2StUz72xwP82eQzAFfbDXkj3YcziAyMtp2X1CjfvYwPEUaMkspsT4m2X2tTVbuEScWJaju6cvS4b658KbXzb3VKH",
  "key25": "2k1BEusmmkxN48aLrCVeRJauQ3FuwC12k2Roqw4Eg1c9oerwXiLHazHWbcQTAdNY8RBsFpt8yj3a8nhk6SqTZUXn",
  "key26": "5hTH33yChpiikhXrEYs88bv8i48r4jLEn1pKAWhM5ZP9bFNLWSk97zCYkHAqp99Undpv2YLYuY2idJcFW6yjdNse",
  "key27": "46BamouJznG9payUuaqRqJjzW6dTEnNGqrW3SuewQaF1y6nS4eVv8XnY26qwxzWK9XqbJ4yzCiUYteJsqREEa96u",
  "key28": "4uWTTC8v2bcPRY7NwhTrepqQjKu2AbgYP2yno1xj42nGid82zcq6A9PNiiRHorAsHpWJeNbQQFX7mst5SAFr8ZDy",
  "key29": "4HaAnrwoq6pF9DsBdK9LiYDt1omnfajhi7WFDCWQoS9vaA4tVJv4wwKcnQotKVW9YZjb9a471tqdb2XzRM9crC55",
  "key30": "4D4BEiYZ4dCDL5rnCrphjrbSd3epRc5sqQaAUNSUgzReR5uKbn3FMQpRwe15Ek993ZzrsMaFSyrvBeTbaBhv713g",
  "key31": "4VLvbRXr9potBQYvWkuYDnXfhB6gwmLF1Qr1z6yFv5WAv94udWUWDYpeRni2n2T1PRuzGEWCGisueufx3Do6YdhK",
  "key32": "3Zcht7uVZb3XbniAxFyupiTNippiokUSW6Ad2B117ZpARu3W5zvpbdrtVivFxyx6KwmFRerfZNX3h5zYSpvGn9vy"
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
