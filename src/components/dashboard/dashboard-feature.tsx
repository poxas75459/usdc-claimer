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
    "5MWhGY2dgGLnPbot8yAdf9V6HY7NghnFjM2jYxXPWdoeAdBXQ3ZXLvrvAGbyoPZNeeBbUZYceDtBNYW1WYZSkU6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RZiLzpoLMKuLGgy5XY63u6SZcmexxXqMMo9ZTUgphYvd78WQ4XG6XRTLc7pHAndgzthUHBaCMjNdBmyqGzT7Zyb",
  "key1": "R2yDWs2upJ6xSYZc7XH31qtM7sBtjQmMfbjqWK1iR7aQBQBxZz4fHoPxCPHbDPcmFtDKU4X5qYq2NbCThBoUUhm",
  "key2": "3XEGMBQ6SkrqFhRDpi9hwrN3xL2cypj5Jn1wxKTmVEW56QiwMYuqBoCEsuxGBMmeNVLf4BrhFdduRY9wemALqns1",
  "key3": "3ot89ma6bxCoVsA5FWwKjpNW2s95BEH5qLxZcYNAoqktG5FPnhoAAgEoeEVkK2cDNZKEPM8uTMqA3Y65PhT6X6Vf",
  "key4": "3W4Z4zVUj56FjLz6meWu5jJxC1FQTJppwezH6LxcWxuL42hsG68qZ5X22C5MqXEYB7mxRS9ezYTNpkqXgXi1W62P",
  "key5": "5t6Ls6YeCHWJa8ae3ptaZ5SwuXD1U6z7yPK9f4po5jj6wT2LFVPZjBLMERt9sQY1P4SjfrvMdaVLrs5RfHiPTnBW",
  "key6": "5tDRSbDZwErQLkcouSjddig8TChVjmKzGTBhXAiDUN81PEBWfxQf3vmsVRZfKpGZN85bsbErboFLNp3JtZrWQ4sR",
  "key7": "4KtgBycKbqnfxxMT39369dKWgr6QL9uuP8aM1oEqMvbTo5TBNK34cwopJNmNVDUbfisQMkApjQVwjNCud4javG1b",
  "key8": "2Q7FUHr7JUmGGq1euK1vkTHGvP73Xcq8aN1shpfcMut9R6HmBdmkh71mVzpZwPRg2BwHRybgXt4LJp9mmdJ5dXi8",
  "key9": "4fAb3pfj6gwJ2ZAXTNHnsZdvZHAcDZVxthLGdVGPusxNYK9goAasU82m5kwBYkY8HxkZqfpWVK9q1fqeih7kWpJN",
  "key10": "6417UdNHkeiovbPhQG1pai1SMvacMwvxaCBfKCpG7Xr3szCXJ82syFbfwwiJRJJvXVx3ZdGHtqT6YVURWeWR7hmw",
  "key11": "5Kfo4bBJWMMx7cehXdDB6UWF1897X2CfZPVtLeeNWNDc3hw1ySXikz8Z9DyCRgZ4JTkPGCxFFbZsb4umF9fEKa6J",
  "key12": "3in37RLte6WFN1EG1fEtjSzZDL6xNkX5y1VSU2eEphLKxMBZuwNZARLqTT4fv2HrTvaf87tk4LZHERXPsQq9LMNs",
  "key13": "37J7tfySrkizpD3g6QZX6B7eEFW8FEyYT9o3hwMtwoNGtRZEYEPGosDJAjLdUgPLKFuN9pKEnPFCA4htZmQjYJKh",
  "key14": "5MagaeJypoYrdRri7K5tfEpWbSmpLMxYcownK58xWePFnbNdT2U66JvS9FNwSoBoA6RrSUg6uRhCrTPVyxzvhYXW",
  "key15": "27pmBNJ5Fh8GgutAVsm3D9GMBuEcxavC7eP7tyRXP44Xzdbgyb8bpCiTvdTNVrsNfhauLow1ZiZnPts63nUgowkY",
  "key16": "3dpvqCcA6onvgoCYFKu97er9UxVmFQdcpzcH1JK4wq6g3pPiAYmwopJnwP7AFNiG2wAY3pGADUHRautrn4y84Qbm",
  "key17": "2ApkVPXB4iUeMz9fvMgfjFb3KGVfdNuLggFTU3X9SeCQYZwebBAx7LBeXaYQu4cBvsYLHXe8Pu6vHwB5g3mo11WJ",
  "key18": "4PKk3X9BvCGaQ6Lwcp4g7XcE8Rie2xRhqACUGkmY8iFu243wSD5gRE3MzKpDiZKxJiR9vehE7C31HCtkrwYMAYrr",
  "key19": "5ojszLWSrwxmGHTA8mrxVwLTntn2dDi1fjQ4TSccuBXr3kJ1hWKh6yXrs1yE1yEq5s4LvtGgKUeyzyCvz8MPeE4e",
  "key20": "45X4t1S1kY5H29gHVxXDiSvSFPdJHPSVKGjVEM1x1phS89qRimD5DegNi8nqkBUcZ1M2gx2emDdzEQQhnBLRuPXY",
  "key21": "3D2qjVYxf8yzbiVvnj1wHhVJK7Ca2F24PhuKNr8wFYDmSJeWdqeCsfhwfAcfXhyTbAisUYPivY1r4K3f95vpf1kP",
  "key22": "3WVUgX61kFUAuYX7ky6dapMJd7Zc6ER8G7hnQDuen3taEDs3XjkhoWxZb3xkMNHFRpLGZ1aTq67XamSR6rTyC1QL",
  "key23": "4Jm2Nz9vXQF5vWGiiWJrqaBWW3CTBqEkyrE3xR7ur6XLjhSrVJo4kzUvjPk39xhLG7hSkeHvZYqyDF7bqKP1xAhr",
  "key24": "2cBqssz5Q5s1C7UkF6MGfBVTfWvdbHgF91R3h2DrHehxvWwksmeY4bUZCPvJTcJ5tqz4waZLDyNwJiVE5q3QAyFp",
  "key25": "rt8w5dFspJYyM52VNCrpwGFt6nvW1AhkPnFFvUhq9iGp2Y4C55HNjkHZaiDS6Uom7fhXuC81NW44c7VyRkXfbyd",
  "key26": "4hK7yuym9SDrF4zU52AUywFDPXHbT2Jo1Fg7J5PQDu3dFcdqi8r3amGs3mPoMSxHAbCa1kWrCHUoQHAkwZueVcXE",
  "key27": "5s1zm7TcbP3FX5pT5Wg8p7ydsAbZySaaH1EKSyU5E97sQfLNSUFAjKKXBXYiKH4dcuaHECzm6dHfDeN6WfyZiDmF",
  "key28": "4x4eNVejPWSsgx8s72s8obtePDQnzH7Xp9GGgucS4BShsXD9EPG4Tb898Gnj1pVwsDHZUSynboVncYeR89whyRmn"
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
