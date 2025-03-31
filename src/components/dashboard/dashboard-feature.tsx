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
    "2fzPAjaGAbZfL2USLRA2NosbxdiqjkYKdz7jZ8FwJEQuZQsmKFpsbUra5ZpWfi6J5ehtQX9tjJpD43qpbz7TcQjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ogaKQXg4QnHiupxvrf8ENx5zffvZqh2xoxanUDtFfMqKFSgz98bFz1cmXBjpS5FVvwrRGp6hx93yGk373yWKn73",
  "key1": "4zGgM5XnW28CtKqKdU6aD7ae6NscxjMz84397bzu7Q2zz8ynsUuevWa1zNBktV6GZ62VdWJJ2A9L745BEMHcsE4Z",
  "key2": "3e4gM9YomWK1marhs1KqA1P7fMd2ztioDZbPHepSMrZ27mYxMS1R7QvACVh4qZ9bzDB4USPtkFSWQEAgbcoEaMGB",
  "key3": "88RYjwz6cnYSzEJDnNTrKwrdc8oeoa6BFH2hRsRNrRebeybKQpcaDppW65v9LVNbUaL9UYUZfkbMeNeYW1QVdbe",
  "key4": "k62yX3f4C5TU4f7THueQQtSg2f7qcvx8toVs9hfFGqyS3jnrMoiL68REBeksBpBpL5Y7WoEhMoMaSubtDLZmTFe",
  "key5": "43uAuUppcmHa68aCezPCR4PQbYPRbZcfZgw7UuCgkFm27xUpjQ9tE1cS2cuRMwXKRjP1KKjoPdxpQKPuthLAKbEX",
  "key6": "2tYjmBfapbt1FKbVhvhUfiWdJNKE2kjZSboMqAX9QmPGz77n2oZumc23qm4KcTLKCrw52LB8rpdU9cQhrwrba65e",
  "key7": "4w6KPYf5y6p7Kyir3du6yi77KRdxKk5jkAAKZjDnUxnNnSFvX4Qi61fR6UDHR8QRRpXaVK8y9UeSvc8a2gXKFpsf",
  "key8": "4CEgkdmcfXWw5SXDaBt1XDBZeSBi5YQw78bnzHingWn6mFLDdc3K3EEUvST11qzjrTu1CtKHwJ4mENiroNVgGcn6",
  "key9": "5irpBneEKJ7pCksxqyFt2RGoXJiDBM7UGgykotZfK1d6X6RJ6Uw2pssV6phqHSs92xr2FpwYW3fwCrxfMtMQr4JY",
  "key10": "4zZebydFCa6y5MDq38S4arqa2EAFLGxBTiNcREy2cyqzNZDp1WwW3jDYkUr2fDtbGmbmgHyToc9Kota4QGTbJrBd",
  "key11": "3naQ7g2JxfAomKsYuUrbJNzbGA2Gh3PiW28MmiWfCw23kGscF14Sbk1V2bzLegjDb3Qad26EVGpbd6ZXXdRN9L1U",
  "key12": "2PNTjsdMGyy4wyh7CwMey7aJ34xVeJcSjKoRzq1zkB8KcqywQmoGfX7DxDk1VrdvNouaMQBevutseu3JRvLd2DJe",
  "key13": "4wCaer41uFzcrTTeKTsZWBfRukvkpoDx1dy2CiXAboH1ueE5xUSUSeBZx81CBUrfGCzDcagj91BzKwPK9nfznjqr",
  "key14": "4C7Mby5uoYtPB8dEMgY4H3EGM2xN7wsKAR7txtgnVYf14jPp51r1gVxf7qjGZRYXnUhCuwXRTrosGVgCYd5TeXJq",
  "key15": "D3gk5ZdTuSdYxQy7vgq7R5v8LsPeBAzcDQPLPtEpVv3jmbzRjrjSNjFbBevKYVo4yCSTaAzYeCmKNcdjUceYazW",
  "key16": "3DbFLPDqRMsQx1hxXvXzRDCFUwM5JnREPpNzbqHoCLCpwA78G38mdzHNVJr6HPfV2LFeYyBGA5R25kBrPj2HmvBb",
  "key17": "3rtZ76y5UwbJGowxrZBfoYRVsnE2LocuSH3npYS5AETNpwZNYq5f84En8hQJkthEAPnSwkxjT9DrjhFowinB3yEm",
  "key18": "5fW2zKNnUiR8qNxEBixA92jsxjmw47xAwHaVMJWhGdK763RYTNP6qTwY67GCU2fqbxPTeZ8N5zWGmGN8xMNwbKqR",
  "key19": "pgMYiwYuxzcyDte9kif9rAPiWWR1XNBofNzoNFo2nNYZPNf41gwGMongggLYSfyu9QFtrrf6AdNwpZBJxRGfpRH",
  "key20": "54VzmEgqRXJ3jEPkSWHbxx75QPCfh9FQ8KViWUgVLjYHXGhMDAov3PAiCgXgjyq3bNKqvDskkaD66taCcd3awKA9",
  "key21": "2jqJjuehTrpj7Ef9VLuhB1Wm2Vy5bKfXR3kDdVJ4GLVVZLpDY86wjcptbEXhKxfRLfredFofWxkHzm32nzLcq4D",
  "key22": "47pifA4eqdK3X9838nUZ28bDyQneuuJGs78nj4kyN2oZrHT7ZUmBwwj3wh9XL3LkVn3SFDeRQqZnP3LfH2nJ4uCW",
  "key23": "gFqo4dJhzPeaEZ3EhXstepptuMgiyR9Djm4gJFMGneCqhoVv2X1Tgvf6p76TXU4UvQqxfhk4HBSr1SqmjHZrAgC",
  "key24": "3tWCV4k5f3fPcxpUEDpdQxSYWWiAN8AVu9q2X2VFegeWCszfzvns4jjpwneieUP9DBbYorWW5NQzrvvKxTYSoprK",
  "key25": "4BJq8KyTKB2wDBAErTXwPoHvRx4rjpsm4NDEfvLZfK7ukJi42wuHY5Y62T5Bzpv2yaMFohGC8KrnYAep3J7evAM7",
  "key26": "4Za6mPcLGt57N6ymGSur5YXHchaHK1wCcvckX8zSBSEJWWvhMLy5rjrD11nAs1BdXJXGhcErGYbKaECPYELqDySw",
  "key27": "4T9q7ACD51fgWwW7QWNatbUF1h24TNVt4g7H8xiL7qLEf3pm7i7dk4JGMYtUFCdSrJszjH8QXJUUXEcmaKJDQ3mz"
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
