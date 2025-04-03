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
    "4jEDPmSzPuYfN56UrAbRvKv3uycuLrvAE3NYFq18RNvhmgQdApi7YLNuCiCu2T3kLZLxsLAu6GCayFs4wvqZChCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uo8ZHpQMsCdfLs7jfNB7KhPpASNdkFeYUJRYzwt4L1HMGWAZGmQYMuSaHYFQZhb8U4EGHGwYChZZToi1CMvJRPy",
  "key1": "3A6mJgRMwT5VmnCUWdcU6aQ3PGgy5ZB22iy8rXWEvnrRDPrD21v88D8W5BCtNUmmr1gi4UZyDU4XF3SZ1RwnoXnF",
  "key2": "v7zowx1EnbaF1ki69bzkpbjymPPEGzseNczQQPWwVBJuc37wa3y9Ag1NthSHHGqgvYkKHcyXfWXVvUjNH5XRf7s",
  "key3": "5qh12QSekwoVA18baF5uTJSyuaG2prBnTbM3rHHoTV2iFoEkPTfx2edDCUNZNmyvyerAbAHS88cKq7TJvQqpAG7L",
  "key4": "4AZcAXfJND95tx1UuHGm1mMdZDboeb8M3E7p5Pv9nToBeoqoMBeDp8yT1caCpiqWtjYM4M4PXMR5dH9y4fmcZeY2",
  "key5": "5pr3uPjeV3FdKnU59NYri81G2zd4Di19unExXgZ5BNy3ko3h37YNNyeWLD398kZyCX9ATkPbqLJdXmJXLqpJf3NZ",
  "key6": "5L2NYx6vqHcq3P7eeqwzeJtaTJnWAt5gS7Kz65DejP3UZUwfVW3Btw847jxfwytwBkPQ4YL77kn6gxLYo626j3Z7",
  "key7": "48VrSQ8q8q3rCpmWdndN6XTStQpCPxMZCU7hmK82ijFfLdJRparYRU49pheH1QxAn6er1JVAXuXK5z7S56o2igEF",
  "key8": "BsQwjDXm3xw7b7ua4x2tjA5Far2bmaAehSy36aQJVak5ZHWK5XMPrE3uJdVHrXG3hmxij6X7Y55kYdmrwFmBbZe",
  "key9": "63BR4KM4SPCHbpDxdhuTBVv6PmCBDozW2AofGk4MbtLbzvmVGowcysMk73vUxgViWrCBHcwzpbAeK8Zz6GbAvqA8",
  "key10": "2Ux4Ve7Rac36waqVrs6uLVY7Ru4rYaU74iykHe23u3qvtGemZpUcRAQVRigsk41Timi1Dw578QRNUQyuoXvyyjoo",
  "key11": "4ChTVBpqtNHeH9LS9UiH4xZLNwKp5TEAyBj6TtTewCyhqjgiuXEWyHA3wMSzoCT8RU9PeuhGkXFnkz8XjKPdX8bt",
  "key12": "5MFi941AMB2cKgkPd2GJPQwj6bpxhGu2MLC4cLdn4Fp6Y6SRHDvpVnDWzSF4CWorRdQCaaB21nbYBoUFs62DcTSs",
  "key13": "2ApycvE51HSzazsAcdxbF2zmFPzLneqZ1PwmuduBbK7ZNYdgzAmPZrwK86opBiKR2zAqpAK48iYioZdYRphScpHE",
  "key14": "66V3Sw91JW863EdqTpGrP9MBUfju6mi8akSjCh4AM3gRjU6UGrvGvcWpt7hyDTUgehq4mY4YaLP3G5DwMzodUtqH",
  "key15": "DKK6qXaWrg9HiSLFirRjH7BFJraqSRep2twxBPBEsR4xaAUf1bwyyiUYe4DKvxRzqV5DmVfrthYAdEpikGbLD7S",
  "key16": "kAcEBRCpkMWgc4XoesX4c8B5SWcACRiJFbAhnt4bR8txgvWRbmHAkqPoRPmSdUfsR5YFFCjMxWym9Dvsx1PBwnL",
  "key17": "4DtEba4VvgzpHqrPFLDotwPht4nPH8aKQDNwR5DEuMn9Uu8qtKbgK9wgn58bJBJ1pyrpkCoLfWoUFSqgCPHeBJLd",
  "key18": "4tan74jfeFN8MqAMJXwJYKpSthwm8CTjYHTtHU47JjvGmmQdq9ccTxTxNh2TPdQWiiqFT3WwYHGNFcph43Ywr9ay",
  "key19": "4FxR3evApmcNKzFXuJcESUvqaboFFmWdZRz8ZWrRBxTSd8a2Y69SdrcwprPMiSd58b89NuBG1ichc5eCGvf7bcA",
  "key20": "411A3jafhnzBzxE7xR21YmqT1eub21LSgWMPskJiJLkBFSqFaTX2jVoHLqndbmH1ZThQ7XxG7JxFCFNc6EPSqSUv",
  "key21": "wvXVK1LcBa8g1tnoMBsEdzGP2nws897UeGtSkzwoPaNoiq5mMpuXEwsnAmpFwPjPXiV6qCBHSJprYKkkmK6YXwo",
  "key22": "1LeSnGbCFUTN8G9NRczhseQc6eyZWggi2ov4brPABRarxdAMirsytqhcd8PsZnb26sHGbouyfw4QznDhRJmo315",
  "key23": "Kt1avgxirpvPvEKzaqiWAWrwX7TSCrhjnMw4GkxWtdzPdwDTychsjGByRF8aX9UpuLZ6HNw2Rd1QXncNSDaVMaR",
  "key24": "5RUc2kuBxDzrZJNPNt6SfAYmAYy7Rn9FDDi49n71Rxgdihb1AiCUY5M5zNRZevjR5Jx3iGuFyJ7LQoHT7oagdgyZ",
  "key25": "4Usc7pHVbE8M2K3thcxU1WaDSyp6voArdYUKw3x5ixPrsaUk1G4oDHXuS6S4ts6XHN6NayACqwvwKidM3Cgwhppr",
  "key26": "4RK4E3HmCUNz8LzDF6qTE6CdDAHffX6rYj82e1NTLbdGbxBcRapPvC4iSqUwgUVkws2TRfUbuyw2A7UPphpkoUxu",
  "key27": "NQDebXJAxiwyZwdfaBYQgCxabDWPxvnA6p6n8tGn19J12gomUkt9Lwy4pU32juPkwMoNrrBEbJqSqzUy6YuCM52",
  "key28": "inbycQh6ZMw3tzQJTh9THh69yRLJYL7J6EkU2qvn8QXBKd45EsNg8D2vGYGxH6UYCREHv7TBpgxDuPVS5FCPjEo",
  "key29": "4gJcbKyavt61EBBHbKjWqeT2fUNe2DSmbRRJNseoc4GofSJkLNezMHGdRT9dJVahggZZ9tdJAWfpUdpXiVVx4ofe",
  "key30": "4Zdm8rVEeu18KZdGcKrwmci3mgPbgXpFo4pHd3WmJkU7XQZg95Lj9myeSoSzvVprpot2gD7tRCJB225pzc1hoABZ",
  "key31": "36qV8sAiSGZiD2Rsvmp4E2BR5vf95L3v7mbtrhiqnmkohJdwPJsJa9HyNCzXpttiUcUtkZDovzEU92J55hGp3tG8",
  "key32": "2Ky3pogXdEjimFM825iK5tCFZaLVNZJhuyLWWCkSh6CdVxNTBXoi6oW1heMEixkJnmHDHhgb6HTFyFakHiJAje29",
  "key33": "1qHzk1iG85RJKxnvqMrmrxiEG5Ly71UBdZG31GJbeHVVQqwMoETnL6jX2opdiCoVStLq3Z88gSsEM8wtgyZ69SQ",
  "key34": "24PZhFvvsQT957QJxVDHMU1Mrzbh1EN5waLuBQabhhZqazcqXijEnDPDTGG3Sp8NYHyXXn6oXLn5JxagvgDXeHjN",
  "key35": "2Sn6L7Z9tJwtTBN2cppLGEPtte9ggEZV7hchDbRh1gqwqPSW6K6iFz7w7ba6Lj5z61hgyQQFYJTty7veQcZyppAd"
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
