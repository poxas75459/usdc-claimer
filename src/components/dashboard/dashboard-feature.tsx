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
    "5Y5Ac5aPn5wv7Jgqe4JdzEJKkZEhMhgSnxao4QZUMGLVwosyrNacGN4NNuARuPw4SRsXSMjCfzLy6QgWya9E86hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2puYSC7jeSmZbytipwtwbLNKqcNYzX3TSSKqjp3QWpNKawzHUVizwboZGcTMTiuzT3MvtSwYedwGmJ4WjYtLedHN",
  "key1": "5hxY877L61Phx4D73CeSuwGLD4LX3LoDezkjngemvisFQ1kCbmqrs5n39E5CMURWdmjvekCPCBw2j3j2hTFLZPYE",
  "key2": "3zwojC4xvLeNc3T7vcidWccctBtKe13KbLTrbhdDDXXrBvrRY5MUuBgbDFjHuGZW6pJ5SXBGbHukKaVSn1qAGBZB",
  "key3": "2RV2hoXhjcmWMcBhWxQkso7h8gN4UrE7xXQUH4DAfiWfSsfw5H96rSXJ95y4jBCJaD8QoBMpyR8jMrGCkMB1vR3U",
  "key4": "31x8oJXZHP4zird5C5oHsmVXtWfnhRyVw3JCFmsLkEfECkyx2Nfx83L4os86Trif39B45xp4FaxpMDdox1rWAY9r",
  "key5": "3HhFXSxN5DGnVPLJLZiRokqnWKis4KvUfRcLLAi3kew3yN9tLZZXkhMudNtFr23SpUtigyEp52Y1WXuQLbz8oo8H",
  "key6": "3jeNeEi4airpMc1aziqeJpofJXoTeDD2sKEFxukxupdxAN7nKFLtWVkawrweeCD5DtCRxPkf6G2oCRUgtR6HprSH",
  "key7": "3HszVH7eMjg25G1N57SPLRQ9ZqyjYAPceNKZpKet7ZLXgChTK7uyAXfmMZyr2HfhCHfi4T7m3xF6gZgwvaKzyg31",
  "key8": "fjiPdMbh5WyiaWmnhRCoWRhxYgcFgEFUdGv7VMfrwQTwxNPg5SA3ErS1K7WRp6yWgB4MhnQQp6tnKXi6Exnrczi",
  "key9": "5KwtNK4iLcPpLUabpDJ7URUZX75FzSL4u6nEJBXRLmzCrbnYBFmHRKxHz62pNw5w9FUhg1yqV4Di569mf1BnD4p7",
  "key10": "3hpjAWwWPQEJdBAGxyDdhLhbXRiX67u7Haj2Ght9nA7eabxstGDLSa3BajkqKYW3BUc7mn6WbiL1w1WKobQLvgHr",
  "key11": "533ojw4ATxnMzLfHYJ6yHDs8vFgDEMHbHfxnCMCL1pPv84gnf8x97wFFKhJEKXCoWsVgBePNbzJpeyqr9bCPXhSn",
  "key12": "2fJJ8jpiSCJVbLCp1ZUExBm8rsXcDcG2nknHZoiQzhbwkgXEuLdTTDCv62GX62Yuxu4Cx7dFNDZhPMGT8AVgyFqP",
  "key13": "VmsoNHazpFnd6V3M7qtmp515Ruxe69QrBMvyb1sbaKpTnJUvRy1WSWTUrKX1eGvZYUmiAYUU365KSaZeF9e7PXu",
  "key14": "2k8MZ7JoNyECCbWJpASx5Cs5rNQvvxC5hz7aoqPTGbyeJpjz3Z3qCsAkwQ3vu6TTgzXmZpTrrmPQhYesrqkd4RFZ",
  "key15": "5ExTokC18jAw8Q3KJQnw2mff7iUgHJuoasYAu6TknZckRLond24zDc9FmEcK1vrU3hM46dDabRHvW2SrFH2CtkgL",
  "key16": "5NAaWo3hGQwjSonQmpmEFe2HEtMrgjUyVAUciRAnyxZk9myzaGZWA2x6NBUHS252pMqJJW4Sr811eXdrgq3iXxze",
  "key17": "271Kf8qzYSmAP4VmdWHLv41gNmXc2AdQDjdHNc9bYFDk4QjpfKj8fECgnLSB95MBEUKzKxPwniWAsQUa6KXgiT13",
  "key18": "5xcDEZnhbW9oduNsJeLpmXhqEGSVNPuMdXmFz8WGCyYLNjQvQSvCAnVqzmDsQZdoXrUYxD6biSzvXZPyasEVs6bA",
  "key19": "bRRLD1cxngDoBr2DUucjZkZvpv7Ed9ejkTjxmLZ5Af7M2tpXQT7W5MJMtUkdtPb2RBdpbRdESD7FAeuhV52y7wb",
  "key20": "2QLU5Dd8jqimZWvj9FSiZ8ARaPdnKuGgagptKo9jHNZtGrJhfyWSywUicuoNPeMfDqXhupt86S8fQgvC2h18SGG1",
  "key21": "2wcca6aMa8T8gbQJE1NZBebD1QvT1WcQbGnQiJcBP3vtJEzhzDouTfrdoPDveKq1TM4RKVfiaGFRdz9Y5Lb3No4S",
  "key22": "41BkosxHMVciqTkSdrdh5JPchBPRUtezypymGkQrthWGXhuJYoR7uQKT4VcScBBrsHY7gNY6WJYUQR4AWmidtiiP",
  "key23": "3CpqpGTgexEERPTfaGRbo9Z1Nq497zmjeaExWLGK7y9PCGqDYYg27DGGNgsPuxhrCY2D3cdLYvxgDLY3D3s5tpcH",
  "key24": "4WSttZbLVBMP64JixEbubtpyTFF3RxAzhJknbNQt4ctS815zwaHtZShfTUvFnfyztfPNtou6D31SP793WgHaBihE",
  "key25": "4WP72KECxTaieFgWqGkAfHgqhwzyZX5BJpnqwnFzX3QfqoA6yH1iBajXx9e5aUGS4WSNK6D6XvhJLSZQFi1NJkXn",
  "key26": "5AvY6unDrfQdWGb6FfVNbqaGCqcLw8uVKamP7rgy4E8V2UubhTPK2vbzLVV5M4jQuGwAXj4pETQizJFtUyggSns4",
  "key27": "4uiZR1SUn4Do1gnqsEjp9KLVxhnb4JPeJnE5qojhnEfD89ZZdMzBKx1YqELp6Vt54HcHhTnb6ojHEoUz9FF1UDV3"
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
