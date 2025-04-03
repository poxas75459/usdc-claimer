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
    "4ts5gmQfXYaNwpueyFd29ejt9XdPfnsE3gLgdrQQZXMj2x4R2RugLU7doxc1XUcxkYC6sPACdLP76tremSvN7VsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxsDYVVyKZYCECuQx4mjyuttAD4HDYxUYio7dnTTkf8aMnBUaaAxAhuCgJvVeEWLodpdYg5TyuTGd1jurtwTJoo",
  "key1": "jtkxjoSt9iWny65x4EdMw2NphiEa3Wfpkpve746fbALz7fV5BbuA2ZjHNxc23VtZ7bMvSCHPpkznzB75obdn2Ga",
  "key2": "2uwzVVGsp1WzYdCYefe5sRsxTM1biN7N1B226Y46AwSoW47NRYyZniUmidnkLFbgAHWZVbcNFgz1RYAtVGxAEzTd",
  "key3": "5ZgMuyPFuxXhPkzFezgxNx4vkzCakVmzkQvXJ34B1G81rF4UmzWJae9NdNbTiAN3Bkrh4EVvbXGsfpPxgsqGQB5Z",
  "key4": "2gBFsHcYcZW1RqqriGeGcVJ9h5QvqsFSu2ZbiZBeowMZ47eGXdRFiz3j7PJb1JSRsh36zEuXdyiGU54q2r37M8DV",
  "key5": "4Z8dMR4svQMa1v8wDv7TuZvBDAMLWnd5LYFjdxdCBjtDjGC1koXGH5dHspvF2LtmqYjut65dKgVr1LQRfmLW639Y",
  "key6": "3uTLGvgiupnVaA4wt6nrsufnY8ryvduTgXUs1Bt9LhsWNH5QhnuLiQJ5TURKBnfDNLMW8RpyCir9SYVKLzhcU4hV",
  "key7": "fi72wwn95dFbv25W88uskWexgZ28m8QB5JJ32G56XG7RMPdCW2WcWG2TzrRHec8YariVWZrPJ3nmVQZVKrEuA8s",
  "key8": "4T5dp38HfV3chFU7TZPwgrLGp1zSRjwwsec9JpMSP8SZv6TeDvYkj5jb8NiUduLfChK8MoP9JVGqPaTBj6qtVcvr",
  "key9": "5agnuxRdfpR8wywri7Y8qidmBewQZGe5vbjzkFpLprYLfLQPYz2PamuxwvmApb1fJJGThoARYDVmb4NuxCBat3Bn",
  "key10": "36eQVPpHJTfhobvkHKv9MpJ2d17PQNbyLeCHgeCsLQuamHG2emJZaKrEVJBuPz7LYS5gVgjV4bjwZuzLDU4nzSj4",
  "key11": "3N1Zts1zUMAxo9m8CCUYfpdyUhGeM8qU6Lap2BjqFuKDFygnBZWN3PnyQ92zdTcrb6geKSr26y7PEpM4pEifJcAQ",
  "key12": "21LFvNbXQ8y857K3NhhLgqCWtBEYW7mwq9cVyWH7MFiHReLzB3VPmnfdEbTcMQxHZE3VSDNzhjxMY31rAh5guAp7",
  "key13": "2E9PJQCfkAXdN5Y8iRMK5kdfrEEnw5WwZiSLfAjqySZhhozr5hDDxdhmXp94AKoCkZ663KCxkZ6UNi97owsZVNa",
  "key14": "Tr993uFqjNFSSocd4SRxwffHwNzT4qzA1RpWJLZrPemRLjY8gkC2yVtCA1R9jMT8xgoHuhkDCCe4BRuVdFVUXKE",
  "key15": "2jaAmRBBUHCdPwdkh8iwvwrFMzNRDypbmyAxdQFPW3k2dNyB1PBtSmnopnRMLTHe4zvexvW6W6oQzdg1B4uDBruJ",
  "key16": "3Ciumt1zNn1z3ztsCvuav6D2tEf7Fac4KN7Lzm9vRPqeYjiroGmMqXZMpcjgsrrb8Ghnu35rh8w6eTYpjfwtqLpt",
  "key17": "2v7v9KAc2dUNNuEBs9wgyCa1d1py1FaBbmv5mvVk4TtAJkeVNPRT6Cn8EN2HKNmtKGKhiS9JRm2CTCTjz2RhFXgY",
  "key18": "hSa69QcP9n8yqSY5RDy2SvrVS2qo5Sbieap1bBjZP7LUGnbQwYLLokQrJgWiB7i5hEoVhZh3Ywwj9oQ7kSg47YL",
  "key19": "3Gh3BDCpDYbDz9u3GzgvvY1p9QogRbwboZ7aJiaHxphqMR2zpQ1MnaKujrz6kvBVwgYZVUPstLcn3DEfq7D2fJc9",
  "key20": "5zTwsiX48EZP7pJQEHGd4pMPd19XV5KaVhSBrpDaHJVf6CeqfAAnX99vtn61CYzaGu8tRP9tLw5Kf6AFDPiduEfv",
  "key21": "5dGgFyv6tembfnXX5GB2rhX8wEyhZAe36uBhLoSwfu2xPBGNKfz1EUGXqNDrSwRFQV4xfLsJypJv2H3pmy3cT1Ep",
  "key22": "66M1wGma1DH3kAwVMdk94HuccQvWA7hym1buSgJCW3C4gFGhFTDndb8cMJhGZNMQDisFjqTTeXMtgaSUJx8UaE5y",
  "key23": "3E6LnLyjkqBKQXYz5wcDnYdRSHb3LTiFP6fJxDP9RDaQzCTdKoLSEuEZGAjX8TeJKb8YtJWfNXjHuccdR14gJAGw",
  "key24": "621dMZjepbbKbwovqPA2WWn3aFTvkbkdXBPivi7Vpdb6P7sTpERh9MWKyiucLSZBC3wjKJjEWMKjtNMCWyEyYvy1",
  "key25": "5fPoGosat8q1T9rX8WnkxJ7KhytBKxYZxkZsD9EuzvP2KndvXGLnUtBQu1ZdC1aLhXcrVn8xMFVDhN38NP7NrbDW",
  "key26": "Gd8SqQtqatDiMK1oiPQFNmRGZEUonZdXHQRgmUJVXjPGf6ow3VGcmnfWF2AmEMiizAcnVtoF3CGK4iFrUPgYtDd",
  "key27": "5a2qqm2wwegdiksyCAZaDPpECsTQ5f9hcWa4YSBn6YLoWqZTL2u1Gq6wzpW3n5nM6tQpo2JN2ywvpNKCr7DkvWVR",
  "key28": "3khkTEjXKRNQvwGeckF3pfRZnkYGES5XNanQijZfcjkKZLsyDw4k2q1Dt54LKkZZG7ZnBRGX6h6nEu4QnYc6NUtJ",
  "key29": "53t92w4HQewyS9sJnZKATao6X4udAVqoxqf4zS7bMFDcMBC6o2fnFVMG3D3SEWtovXE6Ky5uJ1aQANCdcsGRY6x2",
  "key30": "NFATM6RJmL6pdvXiDpVgVCMgcumimBY6JPS9L1vXy4g7hQKbj8U5EM1QuuxDThysvQd8jdLqSEG1fT9oHcsdyQH",
  "key31": "G2R8cHx5NztEkFMaHvexmkffc4eSS5mmNs11YoPub3Ytah7RZaMSCj4vvigjZZyF33B73d86te7NWarfech7rZU",
  "key32": "4rKUrChVNK8eCbpBbBUZ2czfem2AAHhNnMFbAUwVuBhmaBy7TeG95ZqdcWVqFqLzjynDSSQUU2Hnkc14YSaHNoS1",
  "key33": "5tSHNHGg8QJuaD2fB76EVDTZwygeMUREGuTxRDka4YHU6FqvdCXCN8CNP86w51fcjay183YsBkaqsnBLqPJAeTf2",
  "key34": "5pt2LnoWgToCFmSxMXasN5Lk3uBFm2iK2rmMQaq3uobyDCEdFZFX5sXteeAPt7aqT6XDFej7cQ31GW941bcBTMHZ",
  "key35": "sCzVymKTQWBxiqEdm2eADw5qFuMiyBasqszLpQbuEFBSR7Dz2b9SX7c9eFRzdxKGLcm4RtvbYXCqrDfb1NcNYtU",
  "key36": "61WEoEDt4Z93tBZp296eWsprqWf8g2GW9XnA593S9q4nUqZgRupxB3wxJWVsZRG2GsPsz44Mmx36ELcxR6NwaTXc",
  "key37": "26yAKMV12jpftWP7CvgHsL7rbASEvHJMW9zRVy7jd8ofxPKarFdbgy8QH436j6kj4txTzA71txPht26h6k9ZpVYY",
  "key38": "3qtbNBtB1BV2n7vi8wNNoTrcPHaYqFPJdjUuCrf83G97W9thXbLjmKC28PTQkmyWLgpmTrQ3Wm614owspUMY5AbD",
  "key39": "Vo6SfdNPfZdfdW6X7unkdNtwmsR1fLV43bzyUvFVd65BXExpagYQPg8vhPrBYP6YZpUgwm6vFHJS1DcNWSWnbKF"
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
