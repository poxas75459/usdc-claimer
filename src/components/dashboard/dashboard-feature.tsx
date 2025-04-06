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
    "2gm3xsKwx12YzKEzWLtigNKCS69CL7eXEsp55e97TQE78cXbdJeJydLQvJEiUVDgrsw3mCgv2RCX9jAuXWFxQYoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x5xAWE4d8nu7SdvFC6reHhTzCvhH7NGkE8w1TLFg8CH1dY1r1pKLGkvyTX7VkpDnidxqhTmVrzcZpKFsKhVFJb5",
  "key1": "ZMX8WQv7E9PgJ4VfgB9C2G7q8H3pDhhup8B7va295q1Cp6GR8VVNFwykWTQLKKmqTHpDm1XfkCqr1amVvx7DWWc",
  "key2": "4gMw7y3iPKkkud8C82NMGnaQeyVw2epzuZmEwHyMvfTsL9CCoQ9NZzGQANMJ9h1jLYR2MK61NvRz4nTeoZHAeqoa",
  "key3": "yDsAkTPTD4zjpDRtpQhHa4psqJfzj5Mo1amgSUAkQECirQ7cjNvYCnMrrxGZ52sg3jPCNuXcWJSTACiSDuPpmy1",
  "key4": "5TTm46kYFFRvt1HMz9rVj3ozMveLso9jtAaBv2RnVE1mfpD7QtEeBY6TtVzxSnsPc5wPohiLHJanYca6wZNwofb1",
  "key5": "2oCgqpYAnbjk9NFxzYHYJVupAmoVLfP4AGcEf2UnyQEXMZYWVxPv1X976Ma42Ud4LyWFb69GPW47nkWWAjiCrLmw",
  "key6": "Lw61CPQgar38fuvKeDXCGhbeKxz6JwbaNR5aiKosqJJeDCDCqCGFt7E7wTSZb1ZUZD61YCJHJcouXuHWMEAB1u2",
  "key7": "3bSWhgznqNPGx9zXbqLDZpinJGSQ1nr2tx93WcHU1XCEGodMsUGaXphkCWtXcbsVqigctRkHT2BxqjNJUYiv4PGK",
  "key8": "27yucZo8o7v5fH27fTnP1hpwT2XVst5QCVwy8DNaotnZZkZ2vYioJtcsZ1grK9s57EKe8wfnJQLXaQ44R7MmQbte",
  "key9": "5X6gy4GfQKFqaWJMWyfRcX3KVPsJmtoZt67aSJShd7vndGjApy7rK9rMcByMTvpn2n1wSMNp55BrkPqMuTFaUe2N",
  "key10": "5kiJVpZ12NTNYuUVu8eXJRJFwMjTt2H25y5C7HqRTnmSg9ztJygXY1rpwSANn2Uhgw7xyh9WEdJvrxrSKwrPd9sJ",
  "key11": "4RvzUub3hRGMD18D1d9aNHx4xPbfyqZ9uNoQ2Rb9qXpSedu3HjLuJzm1oJ4SHecoYdHK8QoMkUS7GJKbKu1T5sdw",
  "key12": "63W24BRVJtJW2dDhNubWFc8dPKtiTKCAjGrbrQuzPCsnLQc2RnrL1V8AGCSogK5k1h6ioEfgjLEfdNiCmQXdsNTd",
  "key13": "5D9cFrdp57EVDF7kvRXw2jQRng4j8uAUVmWDUtgzD12PKP91RxL2RFPsYqDJjsFkfxogU77n8MsMHr83Raax5G2Q",
  "key14": "3sJ3fEhJKWKtpJ76aogx7FT2vHoEE9e6sDoUC2jRoDaxPhsxVWaeVwAQg5Diob4p24rQNEV65Fdg6EfPXTyuvcBz",
  "key15": "3TidFiKAeW6PZv7rNt46MyC6Bw6Z9qy9V3yGE2vFPziwNVkMswJ6tyG11vbEi1wSoDUpyaaUBFhBZ5ANbnForEv3",
  "key16": "xGAuUB6unLX9GCGyC7uUjHn2RYPs2ubehW1jykNwYymKBDT63CFfw7fJ1FW6FH22pYbyZEkh73joa58DMZ73c4L",
  "key17": "5m59rn8c6s2JhFGcN4NRzLacngpLNpZyZvrm9B3iatJxpDrkoTJaiiCedW1vb2x3ZHuYFDJsv2rbPMNGNdhVwmvd",
  "key18": "4Uf7Mbfqi3fGxqgKqvfsVWkPacFLP9K6xw5KFrM7jnpdgJx5SkaydJwmFBGfFsv932nAsLqRN9NX663bcYu9tMFd",
  "key19": "2n8zPTR58tk8iPuYFkuhJy16p3YeMen71E14aN82FU29Dk5Lr5pcorxLEosHKPNzKTaxSxeru8bc8XcDLfehvGTj",
  "key20": "5cJ68J5i3uA2oNRmBLazyY9Tv5vFpfvqpJLtdwXXTkeMGz2YrSC1BLTRhLBG83j6YL3RuegPdkBfGcnWkrojmHMP",
  "key21": "3VEZfyUVtfhUsfRKFgQ7oyJxwMxnVFnCbLsN2EuiKFqKSpXm2SscfJNkkg4PVZP8kjadTZXGBaidyfkk5cmSQL4M",
  "key22": "3siwg2CLUqNxZYu942JQECvVeXb5hHLsudXpFjYsp7N1sw6YYCaHHq33MWydtdNzsgv2LcnPCdLTuoBN7BtY6ruZ",
  "key23": "2LEf93ZDZe4opZTiMFnF1kHqyA5f9S7Gr2umBZjHxV6rjrU5UFLNUGUkfgZHmsrDFThP9ac4FNnjfTA4btMb7fiW",
  "key24": "5niF4ZqwdwcraCS6cNvjH7hFFRzR2VgmEm7hFPRjV5rxScgtnh55DWQrAaJJKTA9MLegNrPDRwMxwbcacuynpXpN",
  "key25": "4SZF1MKusvMhCzJ7fuHwwGQLk8gNurVfknNsFEedCWLK1ruqJivrqwpaqhUnUcT3XuVzvLuwBJxq9pMFTw3KNHc7",
  "key26": "B88CAEsmGBmTbudH5rCNoqY5WdsZALpq8n67GJK6AGcRkPKWo99nCsJVzooDDvpj8XSjs3cSGhVyU4KuK7V4Lex",
  "key27": "4SZFcpcQ7CLSfK3CfUjj78t5559fLhcXqAhDNBcSEXK5tCrSNvk6eoLW2WgzdTUxSBue3mrAkNJ23hphHLkwHGPG",
  "key28": "2Bhv5Gviv8DrHocBegLfLWYaH2fNj7XRqnS17wwzRp6WVaNDNBVBdoGE2UzAMqj7FMttj1tVhScMwCKMo8iLCWyw",
  "key29": "5VMwnNq2zFpsBzw45xyhKsS1kFkQwRxVUB3UEnLKmchGySRigjwcFP7VCbqUNR586Ea9uhdhTNiJpjersec5X2UZ",
  "key30": "53n4V5zdy4tJuYwfkRWGci5y5Hvm261R9VeNzQyrBv6FmiHpxFgwRABHjtqzJLHX9FfYKzrpt6hXBtrpdZvgnqW2",
  "key31": "3Ad914RZ5mR6i9rtcYp4DcaGcD7jAQYvGdK6QK66K8xCf9gZ4mpbHK7Xje8Tb83C1RgMmaFum4sjS4pwW1Pp9hdb",
  "key32": "UbEBatt5ojtc3GWurCJRyUefyZ1bEWbVsuaKeC7Li8gCw1DNYiuKySYjUUSJpNGeYHbHPtjMfy5mTGhnKFYUy9q",
  "key33": "5AjhZ6SHF7Wmw9bhTK7V4EhjvJ51VApyobvCSxu55cBYJHo6iaNAM9CRfzFYwVz1hnucKGa68LSmnJpFUngAzvAh",
  "key34": "5vJ3rWPyh8LppQNcU1k2bCTvJHnWz1euqALzpTWmig53QjPK7pgvVT7UUksBradELwmRKr55HDW5dzqoSumESfuJ",
  "key35": "5Yp7hgor8o316iU7BsBLVtyGwQNfWEnCyE4VxX8WSYyA9DnMzHYV2LhXpiyoucBt48qTuqHVYb2oWyqt9kWsuAnq"
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
