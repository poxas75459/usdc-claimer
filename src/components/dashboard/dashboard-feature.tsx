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
    "4DZdKu3YZnqGhRv8V97s4crmth7KHF88jcFZPsDBau5bEiWg9gV8s9QPn3f7knLbZvkhHsiAQTakVtyyV68uLB6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wG5yWnJXUg4AxrLxpqVenGKXhXRaW3Cgdzi6yWseq7g6SMBRoRbtuQpPwkSFAXei4MD2L11a4VAb8mzB6c1oc7K",
  "key1": "37GaPrxg3RY9yHsBroqCb8PhuEdnRU9wfjUJGu8CHMuqzs6evwbmkSsohm2s9KqkhJyaZAvK46U2Javjc9mje2HG",
  "key2": "4wVtjoVdkJkFCC3tBtnFLRC2epNxe3Swh6JrLBsRawBaSszKbzhrVhKBZK5N9WXA1dwDwfZuFKbywGfc3yj3ejtp",
  "key3": "3i68fcSa5j97eTY1iA8Cik8zZUPH6jHvEyoj1zdK56hBYXB6RtRgaxwqiz8rqn7B1HCW67sEMtBbZfCYeWwqT6mc",
  "key4": "5MHdWxKq6Dm9Mvu5BzxLhqdvDZ4Tad7zTBTR9SA1tf2QbeK56rEjWwLirSZVfaUUaRyYNjWzzpabxh1QdLBHQvbw",
  "key5": "2waLrMjQ9EyDtdFvXeNCxY28q4TPA2rTqLCvC7nrXKK4viLD5Ywy38sa1uvTGwzdwRU5orKPJtCRsqN5VbykCvop",
  "key6": "4nRNnyUSa8q5MCZ8kf3NEJpD8oTPSmESeDHeoN42kAciUuYhrFniDxPgzGWYp5qLVfWGRLY8bGbu64jS1FA9y2rQ",
  "key7": "yr3yGf4K7xFcDjvcHXi5rLw8fvg9hEb4Um52baVMDz4oW9vL1qxFobGS7AQzvNmUKx3WbWKfn95ChaWoZpV6M3p",
  "key8": "5syGH1HH3ZWS9NhUti9ks3ACHexrXKnQVjGusrANiLZxghmdSBFZKes48dGpN7ptdyhiN1zb6yGe6wfDpiEWGDem",
  "key9": "4ocbBqnrXFJ498ahCSyTBWrWGY6bWvW95PEt79NJGCmRy1SfrGseyHMcaCkxK3o4MY3U1cjNEH7R2BtKtNmUAXds",
  "key10": "5EXitrNzkuhHrpby4TJ3b5VVubmbLk5f226DiNUtQR6tgpyYzJBtVye7YhH2jTgLXUuKVm5aeKGzojmafHVgsXss",
  "key11": "5CpzmoTqE9c8KT6TTSnrG2RQShkhS9tDHMssJ9JTS3MP9P3TuRW66vpibS5fM6cnn1hNmpRCXKmbJtQ4cPF6wrry",
  "key12": "3oTDeBqm4jGKGfGLYDodUT8QmHD7EcUGm98KFqNx2Ka4HKsZDVKDMzctdkVQ2qzmde8bqsZ5cZRr2oA5UYDvJzFX",
  "key13": "5WrkUm5se7qtKY8g5va97NhKDYFHxw2utGQ2ErL1MKcxLwmGjWza9AMtthTkmMsJ8fwVSAXRSA5tbe9DZExZ3sbP",
  "key14": "59W61FQaVsY3YcVzKUVHRAz8S1bnmy1Rse6ZgrY6XCLA6SaRJy8WqW23j7vkB9nW91DnRGTzYhScGNzNpPvsSGtD",
  "key15": "f9r8jBNcsDVqTynZn98Tk1RWk1KTQ6B5V8sB4B6cNCiujKtAL6JXGpsw4giimcBFizPciye26cxur4QeVfG7tUW",
  "key16": "3Zp57FbPjgZzb9B3T7ED9cBqJepj1y1y88adJhq42cyw74sA1DTzY1NyvD5mu2KSkrxsACCeb6coJ7zTi8d4mhz3",
  "key17": "5RXjffgnyHTQkXShucHR2Db2uMBWxCc1SJuESBUPLKrE61JkfzqD4riQJXZa8EyBSdCsJ1ShDVRruTqpEeyzrxSQ",
  "key18": "5yfdD64X9xByrxrXiY63hLhDJ1EL2LjdQu3E79VfVqGspPgsyScxkLSiRWceovnQMZ45DvBGo8ZSSn2qc8cPPQJc",
  "key19": "2g4Yfab7DamUGMSE3NxCtEPK4vB6tPAmXxqkQ3eyouumqfn3mKUWrQ3cvdMS1cYh9ATCXQaixYHHiqdCKeyi5TP9",
  "key20": "5742zmNVrNrkbiT5kBBoJWRZuKLwRUoZbnRZxegnAfpDd5Db5nGj9JNMgKfywpD2oZB3aox4AvQcsdqaVotFeL8B",
  "key21": "2n3V1SS5E7JseMhEfJwceHQATAosFrjDa32vHS8Gvdkokfw7RfSq2gqfUxcEyXGZkr52zvg6kDwkf5ewomAHzAhP",
  "key22": "53ej9pMyBZg6m7HQZeNBRaRgKnMfJEwDLfMyFzLEd6R9CboudnyAiBVhpeHdNkMDsVd5e6QMdw9A9kFbpVzoG7pP",
  "key23": "Ytrws3RzzvMqWbxTs2r3wZnER1ehcusp6XM4zX38z5uBuCh7UtHhmi7kgnRnS8G8kDefPrBcS4BDn9nhVruQuwp",
  "key24": "5MdKWzz8M45vvTzw72Q1y3EJR5y1NeSPXBKqAd2djDmfkYkqaHDJKZEepDfYr8gbYEzgoVcGX5JrWpRcka341CYp",
  "key25": "pogCXK24nSafQm2QBn1jcLPNuZgz3dj9FNb8HNAMTTSb61LW4d5nRK7Fd6VJHeaEm7ExVuHeCmVcw11RWLbofxA",
  "key26": "41FEWGfv5f1ikYBqvV1811XctUXCxzxR5pbaJcaYuqJhKsoeDaDQTydJkJwB8LXumHtT8fNyWKbAMARLFbUJKdCx",
  "key27": "UymyUyykVzxLPmu1t4geh3FNsFVe1qbBRohQxUDD55keVPqL8Hftcr8tntGCP1MyDBM9VjS7tCmNdL7qEuFrARt",
  "key28": "YqZGifaVC8Go8Mg5fknbUUdjzpX2FsXwhb4XVpv8FwpbKMnqpHN53FHLgBzZehKKT61HyEPh3QCDY6TJmEfzSwg",
  "key29": "vg613Mv2RKRnFciSs5tXfdSGRPCeUk9pJESFHtqXy8FBEFVhtjpXqwMicqnof8i2jub1hrA94tDg7nMz9U6xGYq",
  "key30": "2F8TaQ4unznrL6mqZ6CWRP2f6XGnZpKtXs9XofjQLKte8PJWvAFeSExAqcanatbyRkrWcCnx1iD4zqMUFo1QULxu",
  "key31": "24EWq5yUXZXLrjqpYfJJtqu3DE4Kd2Tt7voRnMrXma5ezZS9YbDRiKq2yMH8LskPwViNpubu6jdGqBZkp2CCfMD8",
  "key32": "293SCDaYDoGGbGRhgRVP7trrVceVQmAZ21EVK7pJFjUvJ4vKdwxqo9YpEgBUU5DHuFVdk2tJepcNFhkzpHwNhZXB",
  "key33": "cEj6kyU8iMSGN1sLfvHaGmEGYs1eLwPsy8YyGwVgFxTGjevKwATG9MuF7xgryVkhN3xY9FqUX6c8QeBqLMyjcp2",
  "key34": "4BwJwZfCXMCS8fgBskLFDqhF7qmb33w6opykVwNJFsdR7Rbh3Cp3FvpWvhbcfK35UNuFjThxykwyv8bLMkeVo2cZ",
  "key35": "23GUsNCU4HtdnnPfnYs3zoZ7M1FGcRNNcPxTJSf8RYbkePFW635UQdkFvPGX9zqnFzsb8xr1eSAoBtMBEVGpmU9i",
  "key36": "3L9wshgh68ZzRu1iLbZ1cbdXqHr7bDe44uC1jk8KxiH2ngcu1Qrf3ySEY8gwP2DpNKq4U5hj2hLRzZ6P3NSF4ck",
  "key37": "48W6M7APhaxAdFhpTyRd9PpuPmgEeLpW48JUq3Ns66WJJJk5S68zD3dm854PkJV7Coyz2iRWgjuf2fnGkwuGkvWP",
  "key38": "4xSKRR2ZbKx5JBB5dzVSqxNY4m7YAkVjckykDXVjz41ftuATuRxAfroXT64qwzD858dHQ4ituPSyW51VbNtvzB5U",
  "key39": "MuupFVKSxxcai3xzqfBxbR4sFBMVpheiRENqtEVCt2GKKts3EN8zZUEY1GEuNhUpoTSmtTsKqVfwECkaZ2jGFst",
  "key40": "2evMJqEkY4SVtL94Lxpxg168truguHGDz4wF4mQXSpLLUhVEqE2YPjDQWwcXQrGaT8MJpWayswXQGmvNoEkEbXQ2",
  "key41": "Gbq7mPXsX4f1nGAYiPVdjP3vQfKBcRbPSgFu9T6z9oHTt6Di4zsrzkiKUgx9iQb4A2FTAWKsYiNuxHKwhweANNF",
  "key42": "54b1FuyqrJAvbERPPxX4Pz3RzrmHTgwvgUySHGCRnJ1FAjkqyA1fXqPTe4BiCfeaKfnhp7eZykECvz7qgWk8AbVV",
  "key43": "58T3jd5vwdeF8JyjwAt21dhYanDh5DShY2yiwqJEWLbyWoPSbszQ1kuGz3AaAo2zQPBpaREQJkBdtUBM2iR6zidX",
  "key44": "2umbB31UtsHEjfG6h2Wr1uVFCmDfDwsqvuJbNgcKf1QD19veJkjpfcjmwtz7BkhKLB3fZS6d4yA7RKprFvudUSgG",
  "key45": "596Z6HHipzQz2chMr4YzBj67LLaeTeRxnD9euH8uoeKCrJieW1HRiJ2ipjWf1Pg3z63H41n89bpYyJoYVA9JEyuh",
  "key46": "dHJKFVue6uapuP52ZTfHQZQpYEHAPCzDQHd8yH6pzZXGFZwsPZcSZ1f7cTp5PzaRHas51rzWFL8aLzNyND33qCA",
  "key47": "4JesgdoS15jpR9ZsQUqpHVnHMkUd8ekeWquVLndmCBh65QDb9v7EhsQjRU46xW2YA14XRLBrgGDC6ZuULtavWHoP"
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
