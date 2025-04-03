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
    "4ioTHPkBJKVBaU8M7TxP5TksmuY2jPUfmkCx3QZ625ePACdQJY4RorLXz3H31TSXaet5dQ5Avf5C2WwFyB2htkxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QKnedt6js5bKgwWbH63ToCgfpJa3G5vo368Y1ty7CYUPq1iJZKUgYDXtJiTMTPNB7w1ryWT7LTWv76MncaSqKS",
  "key1": "3EcJSVBcnghTQtj1HGm3PU22pea11JyJ8RWTPQJuUH58kRaEN17HWxXgtpxadKKaHK9FzuwAWy64D61NuxVoEma6",
  "key2": "4a8BYUEoMdKLZmzB7XnG84VSpeCByNWiWDGLzRpzA2Gh1B8tA7MtEGLZgbyd2aswtniqfDu2PACSEQSsdDx5Fx7K",
  "key3": "4ZSyFsMVqqPAxx78fKyFTUTGGomA8BUTosNEtUGYTEbQMr7mZBvTskGSmKnyEqqyXzgQJQvgJFmzFK7MuvUaSMHs",
  "key4": "3Sk928kiqUdJTk4G6svX67dkPvhmLqsKeofMdN1iWCABX7aHPZ1RBNfXFaVNQ7LHRiT8seyKpdhtiycPRH1fVaCm",
  "key5": "3RFwNhH8DLz8qNPaaAuQUVRoFRfFm4FxsKJBZXeyJxjTKXZF5d2q8gFCEiSQBuLEksP5Sg2sVFhY7Tx7ziV4aqeX",
  "key6": "MoZ3PgRwXX68Qka1v97FriLb7ZGXn2pLvMY3Ar5cCVCbRbX3JwrdWdT2D9LNGK4KS7EuXvkfUFqc92bEC26t91g",
  "key7": "4WDdVtKd4cx9VMjZfNdvuzHi52kdH7Ea4HB5GuYBrw5wgZcGmvDq9njYFoNWBwEx2xiXT4mtYkWq5vkfc3EUN6Q5",
  "key8": "3KWhrPpFA1pAYevM5BFNsRUzWj5M1hNMBiosRbnu1HNUqqQfVnqf2fbdVX4VxS5UQzKZ1Enm6mQNJgTArQHVjdEx",
  "key9": "3KMWUgM59Sqhk1QuD2g8k3EKLCx8gnTDiEV6zDvc5jTmGMAX8WoRHnU4BXWSBVJDMyga4mbRbV29gfjqvXtP928m",
  "key10": "4qVsn7edQvqvrHAUjXNqxkqkTthABwdfbi987wzFU6jNZJ9QECrm5riLn5sF9f59mizxQrHMqqZ56CsSccLr7DrH",
  "key11": "3EXhKBt5ShRDXwByZX7bX1ZU41A9LAAH8h1ccCpszQRK9A45QHrabaAkQagLmYnHVEPqbwHFCoDyHBxjMT9pjFkn",
  "key12": "4KHLV2gu4svwkPh26vVvWXd47wnFEtbBndsi7TEpjzpp4H8MvNbn7nUHJyoQ5ZtWrvgYJtvHtjdAq8hcUKkSbb7Y",
  "key13": "4qaQWnfRK8v9VsQXWKoQwxCmJeJeVaYJLTtJinz1yeYcyFqEHJAerFbb6AHMnoykkQdzHhxdMFqKt2UGMmmzPZ8m",
  "key14": "KfCun6gysobb4KBBArjYx39g2khpvWX1pGJxnXGoBtJJNyzxML7E6N6UYnxRXq7mRxNFajSvJBkSbc7YqqTdtz2",
  "key15": "3XnJYPepMsBPqVAgEXg25d4CL8MVMxJyhsGxxJJQCdhtpnwiooB6S6r8xdue2LL9yXeqEzqH58RPn7im8jxsVYEw",
  "key16": "3qwRbeQizso5dM9xZJmit6Kvu7TNGe1yXJ6AQtMuDrgSyVBruBsqcLZy26euiq4p8iPy1UJ1HmJ1EvNrVjn9hmuc",
  "key17": "5CmgGbi8kdqRMzQX467yjzfnqBUMdJuVgKq9nBSMZSQV2J3ma3UGAkH57LmpDUgkNRXYByLv7auXDbepdTKd9sjB",
  "key18": "2ACyCkvEvppSztMxPNjE7KfKK3U6pa4Dr3bA1rE4AVuzmXbisXccaAaiEkWSxFPDpkhAiPmKpoUJoab3gFBy895z",
  "key19": "5sz3TfcDiLYpCzhkjqbtrTKkkCYSWMdyNUqsd8vpBKfDZPzrSTzqjKDWYzESojhGwN9G57hK9zDH5xURUUoCL1Gu",
  "key20": "aXbqvsiZfR5g1oHEAE3cTWhSBzFfDpuHiG2ETJZUapEFF8zXN93qiWhzvKKqPLcjGHbF8NLXh7m8ivwckq9ac4Z",
  "key21": "3AggV7Ug1s8NDzAhzJHEo2HuK2XaAsf1Gxoq9TcctrohK6yjwco9QYjzA1Wj6XwsLepF6EVyLZUhz9BLhUMbXJUu",
  "key22": "5F39ykfA8tDsT85noGAjJH3NoyFLqdSNj6TbBTtuGWXfzrjGKpPpVPMVyCiKgRhgVvmE23FMseVRC67DN8QrUSYH",
  "key23": "p2ZrdYCK2pWeXBugwVfzp8xCo28Jf81srLqSNwFbvuPqZqVbw3ejHe8FVQKqUAWvYXdUNeA7GV3cm7H5RZCT2vm",
  "key24": "4d7CjvEkJ7fyG1taUc4VfrBqzkwhadhtRHbRK9yTQgHfSLD872BmSpELfsvHPxcVgdYCfJ3kGkpVq6R56U6yXswz",
  "key25": "B7VnRJFoxPqwrXhg1K1y6SSM5ARM8HAh4tfytYie4e9BbSSubKsCfPX4gqKN9k3Set8xNd9K3VexrJwgCN1mnF2",
  "key26": "3k8vwavEuH1SD9HtKb21HwTAq5XLk7YvjAofyrmjvZU6cPWoWqcqWykC2hrX97R6ThrdaLZkptiNqLvtjcpUAMki",
  "key27": "2G8G1NFhVFyMMEVknZFyPKTMjUdzQZfEFgspRgBAW6G4HB3jQu7gzShCakBD3Xb8HQLQ99969NSoWUMUJNr6qu6",
  "key28": "3bQKE32MrpL8viwMyaixNo5HCuNaKwvj1Hd1iNeecJWrDPzgFqawwWvpJSLDSpmKcPiS7GG23N3dbiFk4nyxdDEg",
  "key29": "2kB3wkMsrVkXFNfcezxCbjuYbuEtkzKXa4yUFs8k8XF19id3gb1MUQfnXXEsinNEAhBmt4FtpAmSuYoAkdz7RoKZ",
  "key30": "333xr84WJ6fM34Do7cr28XvPV6sdwttFxmUEavSuCrt2g6TiJZaDcj9VMCNmuXPN5Pu542nKg2S2UrP1p7cMVu3D",
  "key31": "4RtDcr7yf8bNoQjna8d6PrJxqoKUPLrF98ADdtZERR41vXWPJFFMXXc3eBbkukuB2sbNXDHZVeVRMsqaFE4fAZTR",
  "key32": "2np22nc1Ghfsd7gpnN2gXHWRfyV6ubQhiF5pKHxu4eDJoH8qYBAwsKu224qMSYuuUdxba33DVcn1ziC43hAeV66u",
  "key33": "2jKwwZ2Q9qj6b7VJrS72jrZV9262UdvWZq5mW7SsQc3mgAsfHYepH2z1kRSdvF3s1zcJPF7k4HvFNiFSUtcjpEsH",
  "key34": "BTyfP2dsGzVHsKUfxG2UAdK6CMvzaoBt8qa3U1TrFcW7meTnse14sNsAYHK534QSEpbpU3mBdBuznw1zyXe8HiK",
  "key35": "3ukgpoegjwARTbH5D8ALzrnK8j25cr5MKVQTg6djkXf6kqtsKTGVLMpqJLULWbJVKs9fKU2kNpwyaXE7bRYBK6kM",
  "key36": "344saHdZruCAn4nk1eLq4Je1rTDhhgFUyUNqwtamUDfKc21npQJw4TD7CaNm22uW27CL7tNiKdmmzCKfKcbK2QzU"
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
