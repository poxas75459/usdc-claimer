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
    "5DJ1KBRUWvj5y118A6LAyAvZzhXtqggzpLzEwaDJaajNW2iQdVDsatBvCHKPJj56sbS4MaKDtjh32L5EtYpzdDtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P1CYEpyPwSDEGQGa87Bi1Hh7GD4pXNdGUbYPBYvw5mLMuFqka5GfCgrLESUDyuT7GsYfn9SiqbLGLPGQgwjxzxn",
  "key1": "EVqszwCB3tc6PPVqLEKy4qtTjowQmyLQjPjbPg7PbDGyzLjUp3S62dbbNCjUCko1exfzZh1UqoZhE94NFz8FELk",
  "key2": "QK6TM5G7R3eXWnzFGx2Up9uXUF1trw4DUF9xczbvWAD8P9ZFyM5TBRmKQojQV7NGiPSCwqoXxtSJgA7E5KqrBSj",
  "key3": "2tE62oc2oUqXGotRqDENLD5Jr5AmbLKuvuGMLpWUGo9jbjUmHS3Xtqmf6LX1qEUQnb7Vanpkouqp8cQfnyEm5tHy",
  "key4": "2c136r6J76pS5NxE2iuBabtqrntoKtAWJYchpo5w6yyrcYXWss41MtmXrc96HQqSsLwfWUkXCJgDkpMH23dXYWck",
  "key5": "3bgWNpQLS6fBJhtzk4oVtiHLYEeb4EZ1Ljphd41C93kZKKYvECmB1RVr26tidtiFmjUW2tf7tnZRsRPFLmTPehQj",
  "key6": "2rw6tXY9423fgv7BsBMiaakaV8wdqNHqNKMvcTafwcxmb65cPvVQzQLPH2dq4VsxBgwrsr3w5P4N9zMvwb81sMnY",
  "key7": "4Z8MqtUs7G1GPv4hUfvV72XMWvfBJnyLT8ivvCmDdZFQ4JmTrtWy2jHcxrj6CrsaEfEtPVoWEQk9ZwtF2pXANnPa",
  "key8": "3JrdeFFxWgKCBRGTmVfH3hbh2cY7SXUMXRCXM5sr2nGEsDWPm8CSRCFGeKKzK2VwrjpXSfH7LjoNNR7rsnrokNHd",
  "key9": "25RwvajRUe1CVLELuwBhdnpka7rSqbbLRn1cx2XshVEbEoAunD7bN1zjr9YDiH5FMGPk9Fthq7fkX76s5EXardtm",
  "key10": "3jeugkJa2F3JaxPzBGvszBAGy8E5TEkJSsApq11G5gxV4ux6zgUjdhV1PZFg6jGLdxPtRx9qDS45dR4QwrDtRpJ1",
  "key11": "5zHMmGcwWR9tE3DaykLdnhJwQETbrMEJwbgSC3AD1b8CjQMyyzkLuDmcZ5JG9BHj32a8nzDMScjZhgHmiNQUEkWW",
  "key12": "5exPRndg4Mie6j1b6BJWEvT4dMTRFb1s6SZW76KPM4jW1pSjdK8PSQyxxkfd9KVyjqoWKpFBQpKU5zPRgREADEpt",
  "key13": "msAQ7AqruuuzGeGLMhtR9zZhNsLoozcgKAJ1tyZGZQf7GqL9x5oTw3ovj7HNwrJnExZXaiaVjLbowbgEYfvk3a4",
  "key14": "2RemdoqRRgNdKqT6REEqrdDgdFCh5BwaVEGVVVhN9iZVGr67TvXyNVZzHZKTEWTNJzG4ecWFLrXWeFNuXkx2j1je",
  "key15": "4NpXd1h4UdH2FgjEJYvFtb5PvAXwLnRy7qHLSZBY2vkXvi91YoTfiY63T8M9YDhcFEgps3dThkQzfSZRo8hRe41n",
  "key16": "L6PoR8R8KrCvrJYeCaGBxm27eDp7ftYh45iN4ovA3SB8eqhcJvTZ4kiUu9TrwNmAnwjnEfrSswEerN2RiPEdJgL",
  "key17": "4tscCGGrghDhDkcsDsiYXZv6s2YSQXhqJwFwH6LN9wFjGm453e7KD9gC2DDnozfPWQdUVdmusCMC2Wp9SG8w2ggn",
  "key18": "36ew5G9y4tyc9KpMuJXqCDcwhj8VDdJ4KXrewtrKT73532E5ZirFkEDN5uSCmpiUwBQ4XeihE56EtZJrYg2L5n14",
  "key19": "JQKrPFfAx2XLQUNHDU6jc9RCxgQsCCx3xK7JErf7irxnDrKCwfMP8DrB2e3Qo7kDhmtsP8yyrKrM4Ehncxupno2",
  "key20": "4CJntNzhBtzyJFXe1xyKYqMgAWMN2Q3imauUxLYLYXTSBxqtBkuyADxudwz9PUvXVBgvWJ8KKWBaKhMv8ta7s2GW",
  "key21": "4LfJ6B2mzL8X4HvcEiHRs1MaGrkXZesTaZffrjSfntge7BWb737CeS34ahRdXjw9QGA6XtjSAQbz18ASMnfkh874",
  "key22": "4Ez5Q4JmanyftZ1QcNgTdLmgJx9dWpDKY6mUxAvu2PGWx3GkfzsSYbmGMbxkRj8qi5coE3BPggbccrhYysJJ6g3x",
  "key23": "4FocW4hQcfFfsxCFfzKucskABqrqbqnDvc6EsY6FXeYEb1tRAxgmwbTZdxUuXEJn1ZFsTWvZqfqiDohRdBRDaq4X",
  "key24": "5EnM3Hcpg448gVyDABMr7V8GapBw7q6Mj7CBUE3XbMPs7vPozZdu2mcDnLQJmuZ852DSTVsSbSQR4r5BNw9hEFrs",
  "key25": "2eKwdMVGwLnXtBpW8bvELN84xKy7CYjuEKLLwPFhCSL7kSBmwRRHT1wKfjQLh9KDV9HqKvqEphLs5AvTCwWKxh1e",
  "key26": "67S6M8Rp4xfo7ukuRcmnKiarCMofSGmP27y1g9kQrcE2MRKtFPuQurGxZByE8TeY2r7ZZ2UC7EtFNhanXdbfZLn4",
  "key27": "4AZM3v2HQi73363n2piXHByaYmWCHVyzA94raLyaBfKontGnCLNJ2c8iP2iave8fpxHHPHhqYu4t9vMUMpLPKCmF",
  "key28": "3fkvjQBjgGs4ZQ6bh5iyve2ZNK2WvL64ohZGPWQeuJSBn1ZoKsxzpVZuzZQYc36jHrEeCwfAGMTyYi2KKcnk7a83",
  "key29": "2G6SGFrAmanyX8rq1NGA2baYAWeuJRuyV7Jysv9VYZLSBzqJcEyDAzk8P8nkLCxoUsRerA8CNveziuyPratJeyw8",
  "key30": "4tKoFC45iAg3XqcAiSnSjhucEYzP97ShN1MZCEb2E2igoZHwZLrbvzNHYVVVbiyWrZpKkBAmXkX5agmMSMbSnGi2",
  "key31": "xvRRWp8rnr1LccAFXP5qYzYd2TmADH3jkkBfvPjUNCHq7JC2iZJXqXs9a4HpFMmL9zNTpErir7y4dMyVRSZ3a2S",
  "key32": "67j18Rn2aRB3VuwkwTZYcQ9zLYeJSHiCv9RrTM19ZaKs3kLwAi1X63uBEYYcEUjZ5a6hsA1MJvnQbSBa9tCcdEyG",
  "key33": "3Dn8tjk5YokhfddPyLaqDSKtDiPPJTbsJpmXZs4ns7C1kTjszX1ufCaDG25UvKh2yJj3A8cH8E5aUNKEVwfDWhHW",
  "key34": "4vzBKSZHjJvbTBFyw2Zx1ZS8EL7ZSRHaHdmURuWbxk3KJoxqVrCz1tvbq3hkzwrdW7gmc9UHQ3B78LukH51WYwiC",
  "key35": "2DGqKHJf4VqrYgkqzArPuPqZgxbXKsQvHoYUkvswCYD8PjLdVbeSQRKVQDkEEJpC8ss8TFohWyRHPCNAPaWEu2kq",
  "key36": "CuRhuPHjEcpszhHaAdhKmboyUwkWMbzUSLcxp5v7zdHgtwRF7ryo41ni3Xpr2YiHXNRHaFqYQAXm6DD21c89Cgw",
  "key37": "4XtFR5pPfqyFiH5KZWrt5YEDrABWQFm3dhWTBY9NfgHnMBCNEkBwLRRQAbpLD3Pj51unudMqpHU8Zq9c8FVNb3HB",
  "key38": "4aUwReHF8vaLDbJCjcd4Qpfsb7VP1bCfEKWbmqsY665uev8CGSbsw1uVHeSTu2tVL7p1CdmeJTJ4UoaatX7nASAj",
  "key39": "X7keq25jfNM8e2HzABpUcY8U5Zm7Bh8J7JfKUBumqKQkXfpVQFKeFtE66eDYzFEHzYHAmL46yK3qTxLhmSuNgUg",
  "key40": "QCWyEMHvWoA3SZ977yJbQtZc67AcPoQ4NHEsREt6gVYok8SE6yoWzmsnZXB5D2UsELhTa86quE278brmzMrHmK7",
  "key41": "1FQzQbvjghGRkr9EHQiQvUZ2PN4oHvvi69WUkKEvdupJXSsdnuj4wWuiMEGCebSPbbWFS6pfcgLLweBMzDQHdzD",
  "key42": "4TX1UcgdBqCgA2xQmfCjF4hbx6631FmnrQgi1vfZE3GMgzAp2twtskSfg2Uo3iZ6icednNiEeFjtG7DPK8aNgGYg",
  "key43": "4eLjdgKQ16KUAvcjDXUmHHM1J5V1N5zCdjNG5Hv1gN4JDdua5x5Jta4QyvSM7nkVLLYPnb6qdhJDFzbkanghRXMk"
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
