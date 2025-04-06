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
    "51FQqUwHj3wzdJY3ovfjZa6oofUovf1wQqDXLUEfnr41cShQDH5XYJ6QfRxjdHg9GhS2wraQrCn8octQMUkqEfQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63s7YHWrJbWY92gH2d5TtCgjVN6vnEJdtccrpUodGDNDs4o3j296Vw1EYz96nuzTw9qL9Qyaz9QkoRDiN1mxtMtR",
  "key1": "4NKZA4WqE3tW3me5bwHjzth9dwEcD98YhjyEBc7w3Gwr13wV8n3bZCdjmw4MYQFXAYgXX7WLB6v1woZjKCddxUsp",
  "key2": "5qQrhaA2von28LiZpYSTGF4rtc13BgBLn3NiEPcZDbpk42zV6D3RaP3KMWfUFuEn47MtVcFPMV5y3rjpBtfJf21U",
  "key3": "4gg9UbVJZMamLXMVdLZqAoArGfzn9Wqr1tkaHEr4LmHyLEGGfK2tesdRrSfyTb6ydsWQpsd2DExz4pvr1Pv65jnF",
  "key4": "2tt4gvjzPiBZhTCB3wakCgNkczuPnTn2T1dXRaxJgZVYM13UNMZwTTB6Jc8Ma5qJDhkuUS14998taKa4HaWbqNVw",
  "key5": "j54z9z2W1RTwoxGiUJVE4gCBAW3zUzMVLHr9LGv8YbDYa8jp7PNeFPDEcTvGSwnQLQ6AbHRDSejgHEbU5VZ8gGX",
  "key6": "5dnaTmBfTDXc6fnEXvU3TWHjrDDQqYuiGiLjVyeFiiDBLUFfLgkX7bgFDDEB1d4813mAVa1SwxMbc3SgSUgU2wgm",
  "key7": "4dAPzSEcpxaAK8qScxQiD2US82MQJ1y5rJ2rEKu6P8h1KEU7QYmzqijkUkNkMPEu6cwnywRbaHVRihbNdnNgMqmB",
  "key8": "PJctwe6ueSQovmcDTp2kTyRrYwa7fG8xdh9WKNoyD9PreZTrm9XhgZGQRVAHs5hmTLu3twLn9x3Wxj9TyA92aqD",
  "key9": "5ieH2MxFZhDzCsMmkZG2kP9qdQBjSacwZtDE7NWyjymuhYTx5gHcsKhahx2m29PaFGzeUAb3XJpjCcn8uqpHZgiS",
  "key10": "5ZJXis2G1mjCw29W6p1LdXygp59hEaeRuoyLwbzVnCW1yuiXkzoWSt5Q4eHZ9d69DVEqxn36eFx16MJp7eomzXXY",
  "key11": "4Sn7orcYWYwChLuDnYYZPMcuqy88nDzx4QvTBbrW9bgiXRZvz4UUi6kAH2SK7VFWnT2Mbqmc8rxC49DpwFCiQXjU",
  "key12": "5FmiRsVqVn3Vahth68uzpvpaiJ5sF7XT1N6poFceKU8Yd2JqZ4A6Vr8tkoga231VUufu4cj9F2gXrB77CxgjDqXr",
  "key13": "2b7u9HL5scmEug9ALjxBeiuXGCfoXGZbFUJgVDDsBRsYuLDyGWmqXpZdQC7XpBqhSd8mgMcW91QXmtGKnecG4tso",
  "key14": "2ZZmMGL5LgcziYz6PksyHwnvY8nE6YgupVe7iQkaxtEFbx95TXTFdWxSfsagmXu5ZkXdQK6TL2TH63GGp5SC2QPm",
  "key15": "4rBtLedmtAYM1KGaTGhFwr3pitnCLHYcvsgjJPec8XJJJJLpSXsfw9B6SmouoqLgGWfxoh94RQcCNv8B2H7EJitA",
  "key16": "3WEEoJo3vg9Xq4ZQJ6khH7GHssKpeezzVcQYXNydfUFYjS4DgWZUGn43XSdtYRpZtP6p5qwhDbm3bALH6LwJPhja",
  "key17": "f7gYTvCNgkWQUgnuDKogn7EaYWAZdWETnxL7pv8AZ7SvpvA7TNfNoK5JJmKvNVSydSgKr2SvjgCyUZLnfdQwMtB",
  "key18": "49LC522U4FzSeUzcvWp5Dxhs9ZNgKqJo1obYSqw2Bu5SooSAVhSc8QApXK3ZcY8oEwxR3skF8cLh3rMmje5mp3H9",
  "key19": "5D8mdxM2pTW67WSYaoryjDuC1k3cwJiGwnx3r7NrrS6pR4DU56WVF1Wd9LMdM3jqAET8HPmYivg7XWp1eFKi453g",
  "key20": "38z4nd2QDBAPeVFjGVxNd3Auu5VpmyyBNHw5uzgfbmy2haMJoZsZHepPpo8XgktYmaXzQg8Z6pSfugxeqCY1toMu",
  "key21": "3LtusyS3yvZaUHtqQAbnRt9gZhRPt4JQFTvSVTTxSLNodWaaK8Btm111871Y7zp4mR2waGV7s4uaZXe26Ai4mdqj",
  "key22": "61fbxEA3RB5xZKAfLS9NMTYNVBu751vVAghuR6eDu3RF8rxAgARLpQaCiegG3edpyxsJG2tbhCDssJ4Z2yufGQr",
  "key23": "65a6kHpnqZdkHeR8Ezxd8WMadBrGEgzkeuz5PJyys4DRPnosu1mhRySZwG22reQeQyp7X86zVELr4zm8veEyJqsV",
  "key24": "7RwMRLv3wJCpZjBT6UnR1WY2YDAxsBRMhsYq3APnBV4Hycz5aYZQ7dZxbbaoYau2wk9T1BdScpAeUVfjhAQZkwr",
  "key25": "5TLp7kJwWwSoEL84pG9ZC3jToAihKomYupib1o1SaUpPRDpVW29Dxm1JuwPqRqDTLsyp7smNmQ8c8BVvrhZxytEv",
  "key26": "4RY6qRLY2LpY7szgKHwVdqWfyDMybKVkcPciFQwq4otkUdVs99LB4V34cHfhfV6iCxyR6Lj8w1TDjAwGUaqoVZdU",
  "key27": "57tjYqUUySZVCtmpKw9LUcTsHdpUboQSDD7CtBWDg36pzLMz6jFFouHPKEWpLZrYCC3tj4NQw8xyF7Vo26ysqSzn",
  "key28": "4u61cVytECJHtLrFmkGyrD5GuNFMLQnhoAwHtZFt3cZmDTnCVNoy9324s8rXF8LLdCqyuedSrGtBa6jaUSrur7Nn",
  "key29": "z7pzXregMGaFWcRgb5Bj9ZbNWfim7V22HkLUwwUciELsodKj5B4G29D3Gr3EByiLd7oyTWtQ4HiURwNUsJr9KT2",
  "key30": "3EdLFJnNd6ZEGv9T4UtueQ4uMYGK3dBqAMeJ1vyHyfb5V5gL1SNU7qKMEDA4xbc6YYnz8MR9zJVoqMbLycLNsBpD",
  "key31": "2jaSMDwQNDMNTVADFwwGKZKkR3NshYHAQNn814XUia91P4cCKvHPu85V34uF1wbBmMhNCW4Z3UryJxyK8hWQEKUZ"
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
