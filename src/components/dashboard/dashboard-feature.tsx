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
    "5rG8eDwYjai6aKpmc6CaSURW3qYc4yENRcMmHFtBrDbHGNx4j39QBhZHfwfCBnf59kvgudmYG44ZEZHGa1CqrtGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAb4BMoZBJkawhjs2M14WeuxstxviVDjFj2Ea5KUDNfFT1Ng9FWn3V5Dnm5oBtf53XoqLxrR3S5MqJHH5aW3km5",
  "key1": "2BcsfJ2Jzmfs1VLSPzFBy6PnW4MDYHmsww93CutbbMMdfXDb6qjkufn1nb6nAGcXJwuc8ozucq5K7pB1WBi1Qadm",
  "key2": "5wfDnPHVBUuVkDsErPds7XpejpxC9rQRZXT33xh7ag2dTohU6Z4EvhxS4hHEBhpExau6yLmh3WeqD5LtLxAHenFN",
  "key3": "mLrh7BGDvLadHiPcPKYDpUWRTysM1kzrqcpJnL3gX3N19dwdetnbSneHuvrqbqg4GynPZ7FBmB2sVzSbovasj2h",
  "key4": "3giAeZXc3tKtoB6vH6bwbnRQZn7pwrM6YW5Wqvx1fjKpvJR9nnfMoMsT7r94VN8r9b1kc4hoCT3MtHgY7pB1dFvR",
  "key5": "3vA7mumavu9H2BsvsTHPwmLLfepsgAJaLfJjEtahkmwYDG6Sa5cjcmhej8YdwAsRXXXBzFrwVZLyYMrmfXnJr6fo",
  "key6": "yhhU8aFh49ECRXKh6eY39393DEVFMHStWXy84nQSnuguZtzM59K6pCMbkKVz6WoZ7xkzpaESaxTqE8tRq36aHkr",
  "key7": "3aamT2KxHxvvPVpS2P5ggoEWvVF6dS3EjN1X7ZxqGSt3aWh2djvSM7qeJ9JnQQ6dgyVU1kwQt714xCF3itEQ7pbZ",
  "key8": "5MRWKRsufnqeTHzCbMXC4N8Y1ZBpPN2i16edEQTAJqUh3MXunjekTi9tfbNRx8JL5Dodo3CZKouENgon9Mhcf3RC",
  "key9": "SDeKx9xemcRw6ufRxvKLWF2BrRE7m7LW9U9vySENtHBr24ihJEniWm4yHLezisxWSHfkruo5K1cJTJfEmjdotP7",
  "key10": "46cMp8wtu2T5e2jUpdb2j41xz5GVVexKLvjJvAYQoigDmvBZbyShdBkcizNLmGmmBRChm8uSegCVnHkLakSVzEvr",
  "key11": "4WFwinTLQcNcjKpMoxkFjAkSgdXvh5qrdCntdLbCUhnGkWnsXKwMpkH33fA4wRuBgJdg5dmUA7DBygSqzrnrP5oV",
  "key12": "3xaLX6dYa5piUGDrfNXE1o7cnGSwfHGgXuAH7r1sfVBzdA5aj7sxnhrnHcuZR5Lwb1nBgAzMEhTixey4zLhCuK9j",
  "key13": "3gTB1nKkKhH5VrC2t9FBvi6oLBdAAdPune8VGbn8GkuL4XYVKjvAdA1T8sVCP9JXqZ4JU9X3VZDNcRJiidfgT1Wv",
  "key14": "2vySjNjwXv9fmnut18da122QJfWAZK4BqWSKezpK3He9cCBTM8WK4gtGiQ2gupGGDgNvJndewBBk5fFJSp4oyES",
  "key15": "4WiRH1269yXv21zMMHCcbaFFvbLsbmBQ6zdCWAToLYX4NRsRxn8GU2nDEzbZJqsFK3So2EZEVpzJxXvkSS3jg7Hf",
  "key16": "512SPL1LyqtQhNPJjaYWNueLhWmjb2a3bRZ3bnaYhw8vuXDNLnyrXB6V4ngB4VWQCUmX5suf41V172kLRXCL9caW",
  "key17": "52nkGQDBng6MDLD248UzWMMZnEWwiTwnanhNEEBFbyJDSfbiBhYWEg6HdsX7sdEt1xGyfBZ3BaJiGJTbzERnfBkU",
  "key18": "4AEuZ4647zfuPNtP7UsD1F1SRjeQY3GyLVhCzzz6pc9ihCMXcQpbyhzbS5Q1Ne6c4n9T2yby7wB5p7492BMu2cck",
  "key19": "3qA9La5nGf425xNGjriFTtJLThq3J6wUduyr6uzJtVjDu9pa4qEpFmzsHNjmGfhGHTCyQLQN25jvARd6Kv3W8yAN",
  "key20": "aXVGV2Bs1jMvGnBX92yLyBtiGh1P7Vm7bQ2X9mMLn8p3N7rzUuw8Ei9SHUndf8EPps2XBYHE63DEd84GqGaDPcF",
  "key21": "2Vmu189x3hf7bN31kQFmf4Q78ECYxFtFTehk6zP3kZAnK3LjR62Tyo3mPmL86fGosJtCuHjMQpuqhFGgRPzMrF5C",
  "key22": "2yBtQEEqmxPBkodLAxSnFuPL8pk2nnFADPsr36iAzubmSGd16b92PwVbYGyeH7ysZEPxGM1DD3kjDWV6HhqAoXD9",
  "key23": "5wxPNoAaedsCAKynx84rJs6nnsVDhn2SY67pwJr6uY5yogJ1G4vxycgP7RnctnuFC4awo3F1xs3cbLZiw8PsFciW",
  "key24": "5T2KrtGVV3uqtScw7oUJnUX6RoXWka3QP5V7sc1EYj8db1kfsgUjSEp9Ahfm1uryXHfyLSTXfE61kBfvNLjySgdJ",
  "key25": "4oyBmkNAKSFBnREutjmv9tPrA9HvNiPKBNnKaFm51uGnRbcJYoKzHViNensMUY5oSuSwqND7r2GGbVPX1VL3TBwz",
  "key26": "Vd555c3GHLANRSjAkT4i7xeQZ4quGppRhahhiVy8rsigHPcXiXwek7iMaFnDpZJrxAqB7qcUDYNwadkDjqsVt9f",
  "key27": "4WAH7fqgxx7ZmagxMdddsqRqtCc6xWZDv5VdnakEHjPLbb4JLaSLZBydNhctM8W7gDHroijbXtGNne7EnQjhEDeW",
  "key28": "2TzRtt9abDzEf7UB2Q9wmE7ZoAKanZiys3tgPtxHBc3mKz5mdxuQ1f4M41sMgPuLmJz16zuxQFArjUQf8HYWyGoF",
  "key29": "5G5298fqkT9UFGcbV3SodBXFvRjiVjANYH3HaVK8P5PJYyWwo2KkNfjHbkP4p7KKoLd7k8SR8KJe8d3YDU8EPHug",
  "key30": "2viCWJk5wrjkgbtfwEAnQw5xJ8RqDRSA9PuAcPrkWpVK4KASHCTdGXjrm6tMFSHSt7B3dRJgVejR1XFqFScYf97c",
  "key31": "5oGoS38WoSoWotcjq4NK6GJrnmbS5xwLz6DKTWoGBjm2oHLKY2GUdwk8j6yTmLr9ygGV4e3fmbbimh5Y6X34JieM"
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
