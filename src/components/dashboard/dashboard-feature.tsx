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
    "5DidpsbhLYNTm6m9rJEkkJUTaoQoR1cbLrEsTmyu4QT83wNiLuGNbDoZAgHjUAHpvy5mnLdPeVgTMkaHVuAotUbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QhBgHyNaz8NLQiA3wnmb6GxvhhPgnuSQ3nt1wBpr52cD3amde31jkpbFgZwrkGZdrFbB6eadi1oAaitaVGGUvNF",
  "key1": "2ihtxL8NpBdpG2d2L6tGDBcKaXpk5N6YEG12pHW3iSeu8e6LRYcS5Ea6EEQv4nyJqFokVz4myseHiwofz7ygneff",
  "key2": "DxDyKTNgZEPeo9WMtwPVRbZT7AZRooRM5g4BPJJwpQFNDiuzLeBWUgM7BbZt7ctnG5s7vzvgfSz43nmbT8KWgA3",
  "key3": "25YeGbouuQmcRhMU7pnK2WZpjAT8CuuTe5uuaT3PxMtyMSeQhxdwSMf6WpwWREpRswBKVhaV4VuqeuD6h1WHeVAh",
  "key4": "4gv43YiUvdYzQY8M1X41xEpeStJrxhqVpqeZFiEbvcwhVhPjn4cvR9YXQRjkBiAM6Pi4vUeBsSNuLSVXJnyGguDK",
  "key5": "5YuxEKX1hZ9o7A1Cirem2NtjrmBjTyG9QQnN1NbPtpsScUemSczmEXCUM7bWnZ175xPWEbUwtD4whuDk9TLBwtKb",
  "key6": "omL9rVybNqsXpegdX8JbZwrqmFZ1w5FMLGTTweb7S9nEY4oVQCd9XPX8j9Cw3khSeenueMpWpgVHE2QYEbwwQKf",
  "key7": "55MxGt6m83CiYJURDWwr42xWAgU86hExeDcNKGQcMXHDBLow38busyfaE7m8LamG1quYcTyQvHD2ZuZZYpXHAFg2",
  "key8": "3Dx68PsTyAkprK7DFPi4JW3zvBY4Esc2P1B2d5bVaet5XeUZtnbMePtkBSqhL8Jx63Qevkb6e5PEa4QU9yQomu8Y",
  "key9": "4Z3KfPHaJb8Pujo4z99aXSyvL7oVE1gGKSb81iYJRPbgriutjD3QE2XrKqHto8hen5x8ttKTrLM6wSBMmtJE9MAN",
  "key10": "2a5epu84QtJ7RQusLGywpEstWe2d7hoY3zGE2D7XuFDmCvvbaHeYkjBwz8Q9NLkn4oJPfsEDSyw5JMPUxpmQxwqE",
  "key11": "2XkBvSNt5GinSSXtuvEEMUeBAd7AS7xC7VSifboKdCccEu5y1UW9XH6372yxvLW47L8J3dxi5SioQBtPALXJFhNH",
  "key12": "4CEeCUfmZtkZ1oRJC5H8VJm4ZHFmqhpHBDMJv9v7iA9xcBuZNiAJdrFb5K7y9DLe3TrYZoWR2N85NPSRiFtfztMK",
  "key13": "KMmgCd3SdTF2uDxUpNYavoCKCFPP1Ao6ZMw9bGbCDKb1u8Nh3AukTdNfThNJm5mXizXGEEBDpEf7wsCMYmqmm21",
  "key14": "5hFa3s5J99GbubMMaEwWTQ1rnjF3s9vyh8HdzBr1PSr5bEGq6AV4G4q1EjTvepmQ5GmcqzgKGS4AmFC7EfqJEBnT",
  "key15": "qELEzs8RngEA8bZRgfrnkTu8CpfvnWo1Z7U3YBMk85WcP1bCZu5gjetjSGpe7V8wPCRQiN7Jia1RKsKkLQxgBkB",
  "key16": "5UFFbNEjJ4K8SaChyZwbqdA9iNK9JQQHUVV1sEvtWmXuhAVNjDRFDSae3YHrCqezHXcgHmdW68hEzx2tkTgxSqrW",
  "key17": "5Wr1a1p9saqMjSVU2ME9VT1UtyTTSxYu13KxxbUdKVNLhW1XYocC3cxgW8RYkN4HwCLsMbtZH9eoEZLXq7cyNKaP",
  "key18": "eA5KpSKu9BU78ME5YveMFUgoYkXBcScpgEtjfU1JD1cwYpAWxB7nL5A93ZHFGpkFM7q34FJ38PejmsTtAQV9Z2W",
  "key19": "3Jyfqd48EJFb3fnJem4oniTLFSMfCnJZo2YheXhW6s9VUQtLoFKRXPMUE9TFdcBn342iaDPom7dPEPxQxPikhJ1Y",
  "key20": "4HYtBG5Ep4X9tbfiSqjwyzxb2n6Spa6YFmPq97CSECFC9B4GSZ59EYskJdHq3HRHKQ7sYtg4RxNoHVEq7Us7ogxm",
  "key21": "3n5P1KcXgkuVV3UKRHp9Jzb5fq1wjsnVUNhSjGSXeShhoqxqAs8xBZZ6zoRfywapndz2egLMWWUV4e7petT8RYXA",
  "key22": "5akaVKRWbHeKFbxi8LYkvH5Mw7sPB7mp7wczLH67aMJ2oqzQUbP1fD5b2BXT5u6Apa1iA6G3xyPHgsSAJGdmkcyW",
  "key23": "fhCZjYn8JhUmEts8dNhwzN75Te3txbuNxYeVFELmhJ1oD22rSYaaqLFz2Y61G2dYUqw82S1jNuHiSC9xqrrfc4p",
  "key24": "4gEWpBxBDbuNkTZXSqFcchKBNDwmNvgFc8EQbtksjrzYqBHiQYNZX7TUonm88o2njcoYRiYsDZUEPanVeBmhp17r",
  "key25": "2sCvzcz34biZenruCpvPeqLvBxLdB2UFbE2wcu2VQh3vDdtsv6tbemVjsAFEPgaKtVj1JCnKjrUBE6VEj793L881",
  "key26": "55HqCLc8WSSrQ6hb3SzqxCegERnUDr5Cy66YhebGbe9bTYMh5auR3vATiL3Ks3xqcREmF27dnP2Z6mubZWUKtkYq",
  "key27": "67Jxdk4YX8WwNGguBGR4ekHWkpkSEDkFTyspmPKCGSqxJmTfthwGamPQvCjzzsTCPN95uyHxHkP8pWC3gijHXnbJ",
  "key28": "2n91ScVctrD61jBBBx3BofLyGcF83EfEhsptUzKWMfew8M9za2sjXJ8X1zASfEyE33KFumCAy4bjy2Hu6yEJupHV",
  "key29": "3A4j6JnxxVbdg57F9sB76T7YbpcNkK2eTrmJQjJLQoMMHaCaKqUh1HpmmVVE77H8MJ8EzqE8nCLahHMDv3MXDqhk",
  "key30": "5sHP1BS72KTqwz8GksRczuckWMdL69dBG3gDZg6MfYXcCmgJiQ3hGXjcE1Yw8YhqnEic8bdTawrq8DMoaFM98Axx",
  "key31": "3AXzfT4H5E8Gwb4gYk1G3KRWW5CiDUGcjtCv6VHpC7ijh4aEYYGytWAKbQJwsdHG8vsK4z3No59PAv2gNwY7aFVx",
  "key32": "4bes5Z4nFHeQ5SK6qRTExACAharmDprDyHrsSWUrnfUPC6kEQKBdPuK7CjJbyP7YYPzh5uA8KTs5qkTmDCGSdNkd",
  "key33": "2uE8PNeVAxVv8rpnPpicqP1YdHDeS2U2wxsKFQp3WNQDGnZgBrQ4H7u833FXCM1kYUMq37DkHx8Xxj6MrmRipCZF",
  "key34": "3MMjMkZwSoD8aTyjZJSM7NLemWEDYh6AfvsfpRyA3iEvWo5Y94uAMaDHN1CXtnNdyNbdMEVEYxHg5sNLZjPfzbbz",
  "key35": "67JLkCYv9yQxdNZ7RfPbyXPpWKrqrep996MqbMp1Y1XoVYKziCmGk4iJ5NRG77AFcv1FrA6mnFdZC5tcCvMf6P6R"
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
