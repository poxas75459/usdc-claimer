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
    "G3t4wWzZsE9sXXiooSACucpkrsSPXfNiEVqqQSX94zUiJyFQ7cPM7jHThD4zeyR7budHi9124MMEM4DgZZMrhy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aECSVviMsNRujgNzuFLwMCje1TRVYPsZQm7bjp6MDi86K9z3ydBa49jpJChNDabi78xw9YH9EZGPJ2ZhLmAwgy5",
  "key1": "67nC6o97mqXhusVK7MzkwRnoraN5RNCw6189CuA4joFPcsBdmYTVx9BLcBPXGYCSGS3wtzKgKuUZmR7N2ZT4jCcP",
  "key2": "52mBrShEY9GYHYGjNX4R5S83JWbLdqpe9P8WmEJ33Zm8Mvym6NriqJDbqRsEpDArKUAKEuw9xbEeGKyaN3G5KDAZ",
  "key3": "4MByBdivDwuA924gZorMB8egxEYaaLLh9CWGD3PpeciPrvXxggxMqE2DjVrJzaMb9fx8UYPNqQif18zH4MCEkeHP",
  "key4": "vSDBqtCtvTnetHMgnj7gAHY2yKaVwMQNFd3q4h6CHgbreTqhu3Qdd4WJg7LqjHEXfoV5xmBQa8nVvUA3t6rSKCk",
  "key5": "4eGBaWfD8SqswNSCrvRXwgTjVacooWfcFUTFQGKbm1RJJxjGB9K5axffSoH2dEp2oNSrGcxSY4ygPzQApXJun8Z",
  "key6": "41cA1iaB8RmfXMe1TrWx8fVGWEmpGddo9XEsfcRr9TNkNYrM1NZ1yqqmnhYjq3RWQrXzkbMLaNL7KG1fkhu8Q3NL",
  "key7": "sYsXEao31ErnxYac78uMVgaYdTkXjLrZWFrzrALhzQoWxZdo4p3qZxTLZJHYeDFmYCU23kwTnzboJMi9H3J9WoN",
  "key8": "2MAGeDTbZU1XDBeqir4ZYZaFapwJSxXMBmwjftBPn3NPEE1hd8Vyp5ZvgMdVzRTGiiG6ju9sSa2Ji1pyc7xdjyJ9",
  "key9": "3pPTiNbCyiAWFLFshSx1S5aFXBxPG5nrHNNHxvA2YoZov3SyYcxWSNbnPGM4n6yVePm7AjTYBj1zM9ERtpbPhEKu",
  "key10": "2jWsheqsBpLT1vFyAahMgdw62D8YZPNcirfP1356EAV1CZHam3ENfG3uLuAsfKFZjcvfkkfXHCnKzYtTEhztafdB",
  "key11": "4RB8JjmHaoFGsePauK6NZndQHSa6J3QUbgSHU1UUA6fgVegoe1DaEjqRH98G4tGRLwtRSobSyirfVfF3dpWPUKyp",
  "key12": "JWFSTmcCc47L7jELGFnpT3oRg18xRJMFmhxb2MBZnxCNAWNjdNib7uEyTVdNs3HtU8xqqSsuVu2yuTxKkSeBCqq",
  "key13": "uFefMYTv9Hu7r6sWyk2gGtGXqRPx6Nh9a7mpEKAgk2EW4PqqCTQymPoyzoU2a9z4uw2xrJJtPkayS2xRhZ4aPe8",
  "key14": "59CpzCv8YubUWaH4a2Ae1h1v6sQ8NgyxEAAyL2wztyjBruSFGLVqnr3dHdht3rMqprXoXneH1mpW73yuxj7BYU5Z",
  "key15": "4VCbvSmBFaYgRHYLLnnQmbZdxCo2gpxaTiyTzv65MDn5UftVUamBHrrmSZZ4c1mFPgnVwh8MGaYrtBkYz2gwim7t",
  "key16": "22cVbt2jq9gH36aeTBaAT6uvuY1zfvoCn7i52aRYhpZnxMoxSpRr5si5U7RK846pHGDenSTPS4JdDLKig3nBYb7e",
  "key17": "YT4pch85mrEQT9DZcZyKqqSzAVAmbiy82xDy6Nyp6zRGnGUobSp8ky8wrvUgy4owWd3zM53wM2Pv222d3qSGrhz",
  "key18": "3UrH2499hVnvqD7X4XDAQ61rZZxLqroPDPi3RsJ7YpUKLH7F3KBpVSaUgsEG7mtq1B7yW5sfbd65xFukrtT6gu3P",
  "key19": "5Se5LuALACzegvrZAp4wL1YWaHGF2U1twbCYaUtZ1mDAEygAmwwm6yHrifSi7UkkCGBBiExfnePHB8bG4s2SmeWh",
  "key20": "4C8qkx5PjxZvqVuZSt7rKkmyzFKJy4wX4tAvoDivTQtNU8MqmChXjZrpW8VnqafRwT99soSc5CqCCeyNEHkaiUpx",
  "key21": "281PwGTLJTg6G2vDpMftikjbPX2S3LaX9UQBQNLfSbM27oWwwYPcaWQcncoKMnqH7YxXVJ9TzK4rYoo4v3eHukp1",
  "key22": "56NYaUuWqVGLcmfJcezG7Qp83SAhZZK7rGLopQaM9S2ZWawM1PnG6ZSAXurhHKJsdenjf1jPS1Hr7gPV8yD3NSEQ",
  "key23": "5SqPEraQZXyKyJ24BK7stJp24PPAm8ppp6iETN9WZVGSFSoTW3mXTrwGRjbcA4sM5dKfhRm74d999tPa5Zw11vFA",
  "key24": "PjfnkyEFT5jukmdzLPM3ik4UDQPk7Qi3TyLtK57GAYRn972med4oFohNKpUNedTM5S9rFLYB2abh6ufSkGZCk4Q",
  "key25": "DB1JZz26gdtc36ZfgwHV75eaYNhNQABzG9oMaBd8QuZ3dYQrAeGYnb6LWCsyQi9LB9SkGGZ7hB26LcZ3GKNfw2r",
  "key26": "5LUEMd2uaRC7VaXMG6CViLPfScnJ4mWsEjpuCGx5ffcbjL7dbLY1Cgw8n7pnF82YyixgNz65BxiCDxpCQ4Sv2C4o",
  "key27": "4Vv5CujikgcERbTy7zrEKSPNBrnPW6qKb5tAnZ4jsqMvMeXRCsnzYJxt6og11Xqp6pMbsejRpaDvKMmBLV5N1FEq",
  "key28": "4FxS3bwFMEBzqKVbuT7MspKqXjGKTZ8t7YCoTYfwfH2avBn4VUFQzf4zKVx6c2DFDPvsesB6jBpGqFiStXjvHfJ8",
  "key29": "4xKRjbpneNCUbMW2XH5hF73t7B9g5UbTUQfQpXFGT1EeBNdkxbWgDqbEp1AwnazbMnS2ug2WKD4ChhA5eCXy1zSY",
  "key30": "3vbu5qfFr762hV5gDeDcfP8JjYRC64Pz3eD5MSRBYKgaincx7teX8kAYYoaRNfV9wu4x55ozqQJ1koPmG5Ju8266",
  "key31": "3ATR9JKATGZFXdn24zjjRE1nRafthpf2imCGdHXoZKLMUj8Eph8v7EM9BzBgfhvttDd2tY45ngpcjQAbEBooiQES",
  "key32": "3gkhYE9Lwmggq1dTELMzkp6etgP4wcnePvh4wqTPmm2TbcRo9qKW7WC4PLrgg816DTo8iDsqyNfprNhLLv2nQKz1",
  "key33": "3azwRfamGgXjyZPwoTeX4da2xtp1b3orsqTuW9GDUHCW3yKwQBzbYs8XourzgPC1pwtY2iMGF6XQifQwyRnTBVaF",
  "key34": "61n98psBR4U6RdEf8CfwPWXSxLaMD4poWTi2yxPrAj3VQ9Q43JrzPQ2qs9ymKE6aQRjChZMJAZ6UzLa81iU6Hwd2",
  "key35": "3EWPwbpYk5F68ucWxhHKHmrrptkbwqMScJrcUpaX6bfXSK8tmsjbZbuMiWJeznxVj1WGYgMpTZ8iQudJRFawN3FW",
  "key36": "rKBZYtNHCAHTxCmnqGKHefddCqCAAWF4T1F2xfdHU1XjapvMLJ2vN8ev3J69SvhYum3iGM6CN3rL3bsAjZ5AZi7",
  "key37": "cLz28T5cVRQD1ykUTyGBEKnmV4S9v7m5oXuV9RBFU65DvinqThiZp89RBEs8fmvjJ9vNvzQBdCsgT1Y7vwcY3h9",
  "key38": "3ubVrLLVcVg6PomHN8jaqJ33rjNJXxtpkopEekeeNUwRrd75L4GpFp1fzZmEQ7CcZLFo17hV42SQ4VotuQJ7yqM8",
  "key39": "3hwg8eRoixrbdbCJBTQbtfrXPP2oszFXCh1dxYFxkNEfsLC8KxKcSuWBe854Mza8BPS8UVYHyKB2DpmU7msnGunJ",
  "key40": "5K5wFXSAnk1o1Ejk3Csz3vD1dLRCGgwS2WNwne1iaWxBsRDL1RBjus9DBExvxT35cSAQiwXon95uwobvjzCQLUsx",
  "key41": "2Qx1k7HS3hHtgTkg9iPuJMqGN6R2e9FybtRTr9i2mdMDJ6RL8XGuBAt7LLuedwprnJjNM2xzZAdiZq2GbVjEjrWY"
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
