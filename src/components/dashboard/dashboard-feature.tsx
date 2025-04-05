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
    "4yywhPuh7PwsY9ronaMn4iPCrpAHqWLy2VzkfF4tfHBJqri8R2MmNvFaS5V8j7UZdhNDeUtP8M2whhsyWoGfPfrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vAdfFHQEwDN2HaBEnJFnnJgdPcsRYrjYsopCygknLLA6Xws5FTg4hcGnG3FEE7EWt1hRsmog5rCC4AiBooAgcoV",
  "key1": "2qFeCtAN3P6mh6EyAYCYq8jRiS7AJHxB1aHCLkhL1bwoNF3WvscAL9SxMZfCgyPpqiuB3uuDAFhbc42wKjk7no4p",
  "key2": "UL6abpC2baMxEsCBzrt1R4cCoEoJA9DXx3unyWmkUChospxEJHnP3RdYU29MGnJxiLbwbvhXfHLqZ1u2aLDn7eB",
  "key3": "3HwKSF3yHYCcXuNTHGuWTbShk7bNKS19fdvFWxXykRQLscLCqs7V7w1zwvLV6MRzG9sZf2VnkSngSNSp1khHbLcZ",
  "key4": "4GxdZNynkADDD5h1h3Hgh9xT2uFjFzL7ZfbxBij4M9EKXaboM16NpAiDU35DiCfWRkte7uEeUSPXN92Avb1qXe5N",
  "key5": "57NDhx4hg5PQRNGq6YeDn451CwQM7T6wiNpPqqBtHpK1AomrmJGzZi64qDEVEgJ9TPoDgeBTtjcPa6hkpt2eqPEw",
  "key6": "3G58GzLHPdvgE23YWKvWrT71jpyhonJnqc5KZD5Vv9GTdMG3yTfeQqN2S235QSJVNiL2u7UkAKmwxnGBBtCdb2s1",
  "key7": "psXGZ9V5hkDqV8nUwqnB5qfg1Zs4PmuiPSyWhR8CAVWKndiH3Ay3ruoNg6XQkU3AZbnmVguhiJk1PLcnCttEYgJ",
  "key8": "28mVMMmjrs9ENMnGWAD992bqq4hMTeaC6qSfpU1u1jCA5TNRKoB36PKriTdZEgPhZLAvg2V8NEBDNduvFnHv3yfZ",
  "key9": "5dS4zYvNryiV7Yvbpgzvx383UB2oKXQNhves8yzgGNAHExnvEB2XmpaGZGVKNtPbhd4L3mWwVkDxeEz9FrMGyo9s",
  "key10": "5Pxt1axLPPChzp42xYzxJkypDXcsz2mC17Hz4gZ1EZudRZfjmguyuUE3jd6Mu4jPgTLwQ6kUEpD5apB2vd5tpbwU",
  "key11": "3aj4GKtyXL1igHwZXfksMdshoDscEA8TmEc2VckLmGG9xujjyEVzu3z9yfN8jwE2zQ9enzmy6ezJAME8Lt8Zv1PE",
  "key12": "4iyZiRU1Dga9pKtJcD8Up1NmpZh5rhhVGyh9KLybCHRf2AokqfvuNtbbKhJDbL4Uem6XqqWt8cT56Tge1c9rh63S",
  "key13": "49oq3ptJfxL1kpB9HVpHozs8B5nEsukJu4RjGNNuCSiU64mse8C8Y51EfjnWRxCXfshcgfrAvoXyxhSva8Ue3amv",
  "key14": "WUpG7Hzrto7hqrzcrwreJHgJ282xVDtYc9vQaAj8RSGHMeg4UMnBDfuaCoupAjXJ1yewmjLLNmESHVYnG9uDeBq",
  "key15": "2TkBbdxZuF1bgY8v9yunQAa8WfcUHCMEYocQaMEsMjyzyos6H3hv4151WygVWKYY9xLbVPvvPgr3TB6AhKqqpK2o",
  "key16": "5zHKTkkpgKiAviqGnEQVPVyhToUWw73nXqYq4U2yLpQ9AH49SGX2EDgaA1g8p2zJpsp9kfmRpRr1RLpHQ1dumYFw",
  "key17": "35XodGwtXhj6XwpEGAXMK5JC6ayZqG9mabH8w4axexaWw2wmzJHVrBEG8quWFGgJDUgivkhfuDsq7MUw7Nab1t7n",
  "key18": "3tEF2cNexnd7LP2qfhTTd8nrXjPwfSxS6mtTkCq9LNbjres8JzrNWJrskZE8goDBRXSEbLaz8vzLEZjw9dxrNBAs",
  "key19": "2pc7BTNA9dLCTeJQKYkL2dBYJHYbsE8zdxbJQx3rVv2zCijQ2FpQE4YeykScUBBzwEwczdc2JQaXwnZdANfaKmVe",
  "key20": "32VpTbkWSgRuccuJxmrhb2QdpPCroHAebJfvodND4d6ZqKoLhr3CzyenwQqtFER9N2pR8zX2hhdWNQvABv98oj5e",
  "key21": "25pVLcsCbrKsegicTxe2b8PwxNNUNsg761PNsdt9XZFMYHA5KKJZHQ4WNkhPxZ7qsvKCaLhgpqSp9MQP4iSCix4w",
  "key22": "2jPJ4iUaZJjoMDsdRcc2dDdTYAKVUBakHHCMarqDFRoCexGke1S6hG2gx9X9jRjKkjra7xMwNS8G2icbhdqgzLcx",
  "key23": "3uojrjRTwxLg1WibWD369tKBPFA39g6Ue6kELVb4K9v4zirjAKGt3h6rz4T14QFMfr89Tj9CyrqBcqSUBBD4vDoJ",
  "key24": "42Z4gkwvKTtbKVwZojmLTn2zD3Tvubi2Y8EPFg9tUBFARnU5hAcrAmbRgYQvH1UqdvLQ1JedaK81DktUc1KfkvTP",
  "key25": "3jdo7RN9fc9XqmrK6N8FwY3Tmnv8WC8ZgjyvwDGp8swJQSgaBb3ie4n89WEKNvAzFJr2yedzCYPD1R1ZJcRZNkTi",
  "key26": "31YuFf2d4xj4wUt58MoA6G7SExbePPhzSAHtbzNEpHmjsy6r2JFXiLLhwULmJ3FiT133gd7uXio88ch92EPcCnTf",
  "key27": "5kVNRhz9VRfakEPJxj7kwjhtB5Rq1b9ENWHttQf9XZiq6qDLBRPEM8tSaa8EhBtpoN8qaeBjjpmdktXgGnPcMScE",
  "key28": "4r3eh4EAT2GeTwx7gQJD1G45rSjCes1PnM7myGDzSSJNRuS6T5WCtSgzq6diLy8YYf1my3guFVjAdRGLWAiwK4XZ",
  "key29": "3QxRTLFSsNDb9amw7Gc92R4txdoSJkCwE58TgERR9zh4yHbZhrRYsC9jk3joMLXCWquemWNoNe1zynqLG6913GRq",
  "key30": "3BLcsrP485yg5pSJuoa4DuzCs5vmQUZLJhCzBBRiAf5SGgozkyL1tb3i2oSQzBwP8wQ1o8XQpCuXd6puSgHwxZRC",
  "key31": "3veFwhqySFDK3X4pdfUx4TfC7Dz1uiSuAHBwxwVRKEKMsWDZ9PzANKcPpsDBt6ZMhsDLbEWATYGgPB2Rb8VhbLVH",
  "key32": "3e8p6fnSG63kaB9NTLPyYCrguKWuzdeQ13AWu8FCHri1HDZS94qtJVWYBe6FRTsDxKY1dnDUSoR4SHML45BVhX6b",
  "key33": "4AvjxHZaXsYzCsnrVDqC9JFRT6Hn5BgyyoWcpawhjMmo5rsVZVKza6pjVgV89ajxKxFFs5oE4K1nuEphmYEqdfrG",
  "key34": "G5MoZbzD4ykWtQk3PsxwFTXba8GPGG1zcdZLGQRYDfcViKrv6nxQMZoCyN4zmQyfDtPTUc6cyZNGPRihUGnF4SC",
  "key35": "ZrtiNXGthVhzdrDKAj2YUqRRb3aiPfnoP9Dbxt6iTpQEWJNpnQNUXh7PikKVt36iPFG21mfpnRHDZRC6EZL99Ae",
  "key36": "48kR49ukAErTLUgNY24GmzF8CsqWLQjen6DSyknSdiWL4XdbXKHahCdfWRUKUagbaf2TPkZP5yfAoRBuy5FdEviT",
  "key37": "5ux9DK37zT4yoWd2fjxh7mp26T7aHBxi11S8RArF9fcrBWT6FRpxsWASr4jE829LDXqxrxkuhNZpEHxhKHGVkTNz",
  "key38": "5hqErb5K8An9GTjtaVACrN15Cvi1EcHvvE7Ar7zghKu9YAk8fj9KWKGQ34wZZo2HyPv7ef2rLWV1yRu8Wzjd63Wn",
  "key39": "3YEPWdAc1XYo1hzwKJH971XSjDZ6vtebC5G9envVLALiVtw1p4sWooY8AE7GfporahA4H5VGznKPy6QAMGL4MxPt",
  "key40": "2vKyeXk6guvAPkcqT5KTaeG7RFbneqouxQFwoV9RT5qkbsrjdt5rTNAc5kwFh9dgUnEQVXGcnMvS9JzrrE5xVQzU",
  "key41": "45tseD3eBMf9dsnAW69oyeFq8ehkkbzbzomSt8Cx4hREcCWFc6RJzGwtF4emYrgLH5ZKSRPP6xGtteyNjYetvxgj",
  "key42": "5euWZQJzeog1bBjknXcxsLksXxnrtP1ASd9WYp5XBGLM7UYggDxmdqfcYTaeo5SXxwrSnWK6ztdUrLx9pJU5pu7p",
  "key43": "41QZsgAitjwkFT7LJdjEmt6cctxc57QBgMgTpriUfwkxsdTW88vFG7kY9k9MohLg2yXqGwXHRWhxvHdg6SQqVoqr",
  "key44": "45c4aEct7UPmcmasjJA8g5MVQiXxsauLaH9pc9LqXwc8PPnzHhqSgf3NJxtnevVq9bLRvw8srMivzs868Amgq3i6",
  "key45": "DdRNHo7ALE12owFrjyZihhUBFNnmtGRaaLbG25qy4moHekpCmmmN5jY2kRo3yFkFwwMS9kF2zAWMh2GXiBzXqUw",
  "key46": "5C87N3ncS1tbQZrBL92UYyBY25HZqLiqpygQRG6wgPCbDahg77gfAmoPCd5QCxrjccfKtGQG1yExV1wEJLbLKQ3f",
  "key47": "2LKd6BqY3wigMtYFR3hqExRdceGYqatpX9Q3zPpN925eZPqSzw8PXfbmxGAX9tTGbsBiFBeZ6LepC1f76QQE6EGB",
  "key48": "2r36B6EPGQK4GnXQ65LpP8S8T9sJsiy9KPk1tNv1YcqGbQbWmr2wTNf5YxKRxbrsHHZEkVJRrGK1DTfycGEL3X2Z"
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
