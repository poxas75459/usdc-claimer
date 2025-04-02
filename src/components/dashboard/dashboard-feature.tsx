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
    "2GmxjpcjW3sU6BfKr3RQnNzs5Kofn3bvgPxbhmqrcRC65hSXP9K9E2eikrECoYYcQRmfmeoJbYpUPNpCtnBCiov6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56RUBtkKwWt1n6ZFyNceqsuTw5rgybjextJKP1h95vBkgK1PTwTLBcW2xthpmhmqvqESNMDpSb8VXCC1rw2vz1z4",
  "key1": "AT7nkfwxRYAVSBKsuRe7JeCJVr5P74suL15LwaG7qf3DKQyRfACge6oR6jfoy61GWcfaJmtZ5ouKv4wwZytBQeA",
  "key2": "56re9srDm9tco1Yvpa4d88kLYzGdG23rfNm9uSLxpgVXxxJ1Z6V7EAjMXQhVw3btSti4YrjnjQvqGrd2TYYsYY7Y",
  "key3": "2Yd75avUXzRDqcFGQ5LiRBVpbv5PNWp5eJtgKVFemAmxMTpL83BV3p8bDCYbXP8FM7zVrg7q1iPUekjVNvEgmy4G",
  "key4": "2KKLmKibKZsRtEZ5BLT1zoVsVe37e8xEdP18iEfxTrnpBkoRAWotD4JAcfHchkTAST7eESSwYjHu8KKdKF2xx86p",
  "key5": "Lwm5rowC7Fh1gxdergeiAeCrXoDR7v2ubPWEZVR7nuVCzWyGLR4VtjiEWe1Tmo38FSbc9acZV1Cazhwk93bvMNe",
  "key6": "5s2YNwmWZZMjVh5ghJkUFLbo3pdiBqCFk65uqF15pnQmeNJv189FungiBVfxh5uoWHSxgheDBZGRzYBbAz4j1W5S",
  "key7": "2Vnwd4yLaTQbqUXkYSCi7ffXBwEUEqwyCGk3kXiNxcRJU7VanBQsXpoR28am3fVtBSy763GfNYp2wwZtiavEHr2a",
  "key8": "5ntVKkwXttf4J7AEBRLP5FEJShcXGBSgcTrvqkHPmyv6XdP5sx8nnRPYuB2TKQ58UEBThhazQLeiKkeVoP67yXGk",
  "key9": "39NZjFCBmu4QXskcminpN2hTyJBXaxQky3gKDsiHWiPihvUY4CS4ruTg7iVNM7i64z4E6TwhasjChPfkgc4zY7w6",
  "key10": "JLzCU3LEp3dst8U1RZJrRNbSnDmxsidKZ3M6HTVbfXwKbJKQgfXzz5y2Cx3cjAciVbqaLN7wct1U74CxY3Nu9MV",
  "key11": "5dfJPcBzHQ5q5KH5qwJyuNuVnKjJp8A7c6Etf2fdGYvhHgh64LwiQ6dTg7emjGn5G8y52soTcNVPFaA4o2jRaQJv",
  "key12": "sehLpSHWMNVp1B5LPf2EiCf76WWBJdWgmzxgaiYEuXDCPqnp8Pxd6bfPQ4Q37D7AnZ4wTFPq2bcHoWaDoBPdGQG",
  "key13": "4aZsGFCJfw3CN71Z9Toq86gDJPA5kyC5kMU8wj3FdnM8igFizhLkz7dyCwEgZ7aC4XXVb8De7aeqNGi9BGnpJs1n",
  "key14": "5zL7WbZ6SDejuqkPvJVS2ERDkhVu2XcaiAS2gEZC8HznpW4aGZKY9E3n1sJh8gBWvy9CVLHVPjLpAtx1iVgBztSF",
  "key15": "3pqaTVfDXWfVDtFgAvBTnyLs2JRrUsywTcdHk57yWdH1gn3oJJKysxZmsr6vvNZacJKynjkJ6ThSbcEHaDNXq6XR",
  "key16": "2bTsFr5e7J3MjmT1accBtu81auE9VafFNBBeSB2DFrvwoq9KkgQeMuyQCEVJ9CLXxSmgJWoFLMuLhdf8vZ129ack",
  "key17": "5HyZJwkXWM1LXLsj76Qr3hWEyimc4ZTqCxHmE52oj3qLaMug8wRd8nUV2aR6NJLv9xRpPrx3XZ82aRVFEWBoTDkZ",
  "key18": "2UjbwwTdFvvqXHDAG9yPFFSguUEivqgRn2C3tLtiTsNus8VXpEuc7CAo3E5ug8fkezmZmLvfL2Jon8VJTbLVXW3i",
  "key19": "4TRodSfNcT5wprzWiiWjPYxKtKmr5ZbN6QLQR1rE9Wp2BaufwDAZAyg8pE6Mszwzow4AKnL9qKiaM5QrKsp27aEu",
  "key20": "5Vdgq4ZkM8EZtFqgoAxunQ3e7JJ7KkpyFTt11t9dyU1A9kaFrbbWuqLXSgP7VsR5sjg6FcVo5WiSd1GLFL9uxif5",
  "key21": "i2Xn5Q7BnT5wYR6FkkS8WfUhQxjdgsmt7qjjNbQhf8GbQhvVWquewEthrycdoFVsaMyDBZkNKpQGvGET6j4ba5e",
  "key22": "gNX3ZZD8BDB1jLUmjJCbnexhXUvDaR148CHGm7c2Jjo91Sb8C3ePpz7BET5FCf7agtgSRPY32npdjfcZQt1EcQ7",
  "key23": "jFJ9M54AHUstjzp3CM1MyeSXbyFTDxAmr2mYFPG7BgEtZQY7xmW3bXHQM8mFJpoXL4e7xaCUVR5MPk8m1xvw4xP",
  "key24": "kNY8jtVWGuNaJaBs7YVoQRVqKKJrvHzFmpTnShghxwfP4egE5BjsbN1SYExrusuxrJuaDMve9JoMW5p1uigQQHc",
  "key25": "3g4dCA1QDUk3swPZjooPQ1C81TA9bWvLMLbzZVH8t3EhBvDj3P1Vb5CH7aznKkCj3XgJWxqJE2uLqnXNZ9P5SFPY",
  "key26": "5A7NbvkRXqgTTViEJGATN2cKBbpSMcZ2VYH1YoZ1qiTTfqoPcesfHEmckwk9Akr6TbrGcGst77jmxKqJZnQDwmiQ",
  "key27": "4YTNKeiaPLeL2j16qvRr7ErkNam9WTpP3MZ3V8bfdhdquEaGpLRXgWmpHhNLBZ1XANGVywMGm148FKifvVx7pAui",
  "key28": "2RyfpBkNcBx5LNeePozP2vx6kQ83EWbRd98GbomBUw1e9a3oPGrpUuCC4UaUAVWx6FAyjRHfbrVvjfgAAXrUUbU1",
  "key29": "4DYr7XpcEkU7db4QwNwf9at93QsnzuNMunPgiewoybJJrjFNmdfNBnSEgcVo6EUqKypo4UFnnaCCyHBnFwdqRbB7",
  "key30": "4vmcxs4K3ydLiqeVTSQ1YNUt33JiiBCrB96xz5QPhg2nd4Y6gsFhVJhRqcYVYcRga1cVehkayBfjC7yseDHprrAx",
  "key31": "N6EhzqEMjbMqzEGQFsA7mUQ8FDBacUjukuXRgCUvTGdHGSUA8FVMJ29pqzmL9PBjdv51GpgLGvdRah9ed6HfDAK",
  "key32": "3t5WSNPVZ5BiNkaRdGadPFesu9qnBc3wWQ3mTqcjPaWzkcABWAfP8oKdQdihaveRFjAq93dosQAy77BfPAkjnt2Q",
  "key33": "5hjVnUQFjyXnrxGM4t5Ubbtzj8bU4Qwmz8vpSSegSsiZsg24SWoPoKQGq1eGQxuk8u6TbqEUEboZKWjNqB4XY2Q7",
  "key34": "zuCf1asxcGfkpfqE3vwyRyQxnrSB1Hxfb9XvVQEhTvzqZTpFaNTkHWjAZKGJLEw3MKkqnguifA7DuDFM9DYLudn",
  "key35": "stv1gXw5YDfnGXKPJ2W4kXNHonH6fCT7tLoaY5B3rjbPD9QFrv8f5YMvPhJ4BovH1uR8Su2c4m8jhiYrGeytuY5"
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
