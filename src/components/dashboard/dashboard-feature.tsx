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
    "4oDZ8vnt7KJeShPEJZ18xLfn2MEdar3MJqtX7kca8jG57fr2otrKjbq4zJUKcSTvKJfEN9Br57YR4QrEmssbedtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bTqEbDgidFsLHwvqNvxh9f9ptnsb6FgGChd5beCW27xgXwrpF79yYWZfGmbK7tgVn1HXQZKvR2E7dbGDixCztsY",
  "key1": "21PgvNZkRtGQAwYwiYugZ1iehuKUcdexCSxskQDzk8NCYmeQtzWPZEtAbanwqn6qwLtH4RBzmZcTPGb4g7aMVSk3",
  "key2": "253hFeD5ND42ZqebUqdwM9LAcjkYeqjSsidz5qd8CZ5K3yQxFFqKFgD64ZAb4veAAAj1MkBPwHSvg8rzKKwfbqfK",
  "key3": "vpMoR3ka8x37uzQ5SHj86SvyXQeZnrgWmkXsTeaD4U9mwf3JkGwCZzdjqKcrtz7u9mQzhnNiHvqTmHAYPox5m7P",
  "key4": "4XcjUodQePEXapS1Np1ANuNPFqqBSY7TxxfKxXDsRkowN3F6AYvsRnsH4dAgeXbMaDJXmKxybpLbkBD7N3uSSxjP",
  "key5": "2dhG7cYhRAo5jEuvsp1EHRGpA7fdHoJBWdtykwadibhzvHsEmLSqj5Q3iyBrQ5vJzS4JrYNuy2LcCtnTWaKs75hW",
  "key6": "1Je2mY5GXxvrEi843xUjVzEiY6sfAY42AsJipfCQky5isQo3seAzQYaCtqZGsLcnWGmhrqTDeAomSKKjpgWCNTB",
  "key7": "5Z3c65ieGEvcZXstMsphaXf4kU6yMwi9ZkvN29LkHjGSZ1yJjZgFk4CzCM1BfLPNu7AkH4e7W5JQXT452sdAUY78",
  "key8": "5cp971Q4zrSxTbfZm8kowxAJ6fBAdXLMzNpCYHJAu6pDYtma1PUyJqRKPZWGj5kXjhZqTtG26NHoMfCWgSb75MLC",
  "key9": "3s45AepuPAsLuMgycgJDPbrPxyZt7QWsmUfvDKEvFKeEGQXY82jMNa8TdPhEqsHFFyStQuBqJGQ2rb2ZEX8DTT71",
  "key10": "33rNjwvsdZGLjJNLBRHXJt4uVxbKfLu3ZyHCjjtQR2NNd7NgfoZgWNE7GkqJUAKE9iU8Vz4NTL2N6NvQPzRbjW5c",
  "key11": "hZpvPMvZurtfwgmnESo5zNfGsbozUPuMzxFasP35KekVveYtycPwHdkfDRGsPxsExNcAdyVgHL2Zc6LSKBC2HuK",
  "key12": "54zLXyQjkhbn7a75xEiv1yJUGZnMLyQTr6xpTVtbC52wdbMo3Ls9jgXXPQFjK2L9giUyMYEj2y2yKsYd4xCSi9R",
  "key13": "391cNVRLZnz4kXnnFAG7EapG6Uq8dyZAP5GnSMu9UGN7cmsbAEAmrS6bP6i3D1MMso36NkiLaXcsqgdRbsRWYbeD",
  "key14": "BtiJsgB3wtrYEDM3Y6vP7KRPNERKC5u8GgysUTaXQSFm3yRCpP1sXyTwcW48e9e7wJWZZtMbMfkNk7jRLP7mhLY",
  "key15": "WhB7YvSgmNXSCz6ZUZTJeogYME6pBAeK8UP3X2dxd6pyEX3RnjGZM9LzeXya35mBpJ6LBJn23BHNe86cYC7kuJj",
  "key16": "5sT2EwM7eEBrUK5wRVvdzzvfZt3W4kcJp4Up3HvFXEGk786gxSzK3BeXqMs1hqM4xxHudvKepcXjEbqnxj54wiED",
  "key17": "5Bp9kuiJUgSRAKmB15v7fcVm4QzmNQSLruV25doYa1dyVpJJQ9mFfkxQSBHWLfB4mGGkKLp1nJKpYCM6zWpiYNQa",
  "key18": "3KipJr4ocA8g4vQstEAWjA2HPEw1ywtfGdMYNDShCpFXBtpFohK1VARYvphy1YwrFjTVoikZvtUArqnYuygsP1Xw",
  "key19": "5nvBPYDCrYtG1cDHpU9H2sAbRJJrmqaAEtZVVvFBpDzhb7NJnfacSwn8oETxF2ZsnD71GR7KuApvj52718CppK99",
  "key20": "3kSFm1vJC7hhEDoBo1BAG3rLnFHC78PEGfSvq77eL7ng8j2i6ae7roTpLyR18xqmNaZ7A24HPgke7f7oMgPxj2Fy",
  "key21": "3nj94dXxxJphsMUCwBPT7cy6DL6MWcpYy6Vo3GtKutmqbhQjroXr5nqrnDNydrgyYagFE1ENDbFenz1BXbufg6oN",
  "key22": "2H5HWhVM97VtahqRiab6GZZJd3j3c1iriankXYVwQiwib1SANUMyFy9152PWPSLfT1mg9j2gqsxyxD9bNhS18PFs",
  "key23": "2UD3aBfRL4L44Yw6CwupDHha6a1F4PVfBXmX4YF7sTTQ6s9fUhStvGhU6zNwJR3BKfenePNVoYoTiavXDHNjGQW8",
  "key24": "4LcUnJ41wi3sPxiLc8fvfeiPxAjF6xBVjvViZfP9jDDEWrpejuCQ4eGVJ24PZbuARjvam3JMid7aEmco5Q7FK9rv",
  "key25": "4Pn7eUzJhEXapHwzsxoEB2b6jSDEgd9SmaTt231YfwF3TdT2kiYsjxnvJCGx2K4wzGuc2BfetGni1MVe3pvYtwPU",
  "key26": "5eTWTm4aH3kwvd6sB3gGNDAdHcuJBFj6SKqKCyAKYZiDUfMMBRbuEsctMriiJu2SzEWsovV7pzRTNsvce5GrGUyB",
  "key27": "3wLu7jparsRztSd2eDhTdrqaqks1afyRRXnZ69JB4Tm7e4wGKCapeXjaYMPMbgH4FCFoF4VHN9uYDgNnV9LbSr1a",
  "key28": "4QCCzZ34QuWUa7Xr3gzZUZxGkTRgD5bs7euuSPur7ngoF4RjCLg73vtBNPedtg28RSqmvRYpKkTscfhX4RWLo3RF",
  "key29": "5AuuzKfHz5NyY8kkSXQv3s6RsfLJ7DadUTT1QTnBU2GTKYnrvTFfWJKnD982bzEYyBVGgghZPA2S5s9t1CJyTPqF",
  "key30": "3MutkGP5fShwaKgPXMZ9ArTuq2XbbUTc2F4TcymfHoAPqot1hqHCHm3btkUqkcSYjSU7ZaYJm63jCPxLfnx2cAoR",
  "key31": "4w9fSbbpdZdNZVZw1eLexYmwNrGA4WbwGKf8aXvEqkqcxqDeJbXd58p7DmkTzpVqk2aNJJ2sk8QukFKBSKAixkyx",
  "key32": "2ZrWtackmzAVRj4GqwFqLiNvEfMynoGwVrizkE3R5EW8tALSDahnxG71onsDtVCBUm1LdyE5rEdZ6d4CqRsqQtfk",
  "key33": "66tizLXQZEYW4Ubq4ikuvDzaWzbjUSyhjDQWht4S8bPPuWfwZgdEAESjRUSeN3fisMWALG2t4dhznmGpC8CkFXmS",
  "key34": "4eQGGYEQf9osk5JyX2b1W4i8ce2448oyxLdwM34pS7QYnsKJf9QDE5M9cqcobvDLTg1gJDhB992NuetvMdUW9FhU",
  "key35": "47K2QNpCEZvjtyCXbNojRLhKL4Bztm4sLm7H1BCD9c4zz63K4Lg7tRHGhPtmtq1Q15wDq5q95y7pX37Ff4Lzowts"
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
