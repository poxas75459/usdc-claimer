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
    "6bBViKtrN3vp1H3SejUppagW1QFrJpb6hztKH1azGEtfy1piAfKsKhxVan5R7utcRigZwJQVvR676a4JoAwQZDm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PTyHZxaSaqU6VvwEMFcUK1LvCkr1Eh4RGfVPjJVNxf7JWaBHAkMU2dg7eiZEk5WPgBaEgMrJnhcLKDFCES4JefW",
  "key1": "65dUTFdPKrBvK6cuBJ8krRZQx2ETLvfGDowcg536h25nn4Nd21opKvyebpjiuxewW55h4ArbyDkk86EJSgu2oQkp",
  "key2": "4sGyVCWstH94mf3pcCSMKLHwRxhDAWD2TPV2hAfQyTF3V9bkRVFTMYrpy173X85AFw8nMWup24RY63spTh3ninCa",
  "key3": "2wPCx7VBtnx2DQ4NkCDNkeuFktJ2gSQFRh27HRLR7z6wx6yMMasae6EkGWFhEHmNNfebXM4FewbubzvLa37hLhPj",
  "key4": "66xUbEDfswvBHDDC3hGbmKXzyxzFAj8PRUsXmg7uviZPhu8aabvY3hSuDkMpWZFXsYCgA3AQdorTeUNkq3MjiLNz",
  "key5": "26fi7zCUiTqEGyGxczCuJTfT9n6PgaszesXwnPwRG19HMWBgT1o8hgm1cXtB33dWRLgHk1UKfzpxd8sKAVUuYdmL",
  "key6": "2b8LfEbpA6yRYTweLgDVAQd7EmPXoivZNupJZHkGHyXX9HwVFssx5mA7XUFJNkzcLRhN9X5r9vhosEG3VNKE3fze",
  "key7": "4efJt3NPGfKmWM5RQYRA6c8bJxh2cuQVxxNgsasYgdrJsFPDpi56HXg56tYCAiZWsUEou3LLfsVdhrCLHFpxd9am",
  "key8": "4ibzc2TRX8zpcFSp7EZBXJLFFDebnUC2zkoVXastod1u7c2ET7kb4LFTRQdzyDnpz17YNwqd6RfxmGJLXwMrg3vd",
  "key9": "49jDMPBRMG1PmKfLHrv9bsLhqggheCfWq2Ggk4YAQaXBAiW9VoGoUhJSo7oRrQw4jSs1G9XAqQWcNQN8aKmMUWMb",
  "key10": "tb9Fq32TJCZhsjCkEDDs6R5cbESB8vzEZyia4FTNuzS4odXHFGhgU9nB9S5ixYspKyqmcEPqadX4DquiEJmvZhB",
  "key11": "5bWDdnjwiV1C1oXEQQJdXqyerZzW6UJXPtKFciXfBADYd3sYaHVSUf6LbALsvmWDuG2p8cfNyjcq2ZwwyefonKwh",
  "key12": "uCTHuHPxt8qz4t4pdQNWsSucBexY6i6YT5EPzBAy7Djs6CFTFPKvtGWxUf8aWRNvRwvMoMMQ4KQUSLP4ovvvSnz",
  "key13": "884eUBUu9guu7SQiw26bjtmNK1fNBBYz5xPC9XNXhF1JvheygWSBrWevAt8c92z1wuh567JEZ29PiYoAkecuWSk",
  "key14": "31563qyKjLRgdWDxyUNoZdzUCYvs9zLqW5FjsYbyJHLXtadsvrGW3oj79xAHZc4fr2fcCga3ciVkGv7fSG13ueWK",
  "key15": "5tmxSVPN4Fj8EKmpL8d9nw3FmPLhq5A8ktc7QUf1tE8uhbyZPudaakE7Qb9wScJFumH9h8QXHVgd22kp1FkBMjPd",
  "key16": "4GB7vZCjAj2AKbAJyXGTqRf9BhXWhccPXQV5zFw4bzAwTnYDbKsNBsBVVJk1tucM7KUsajdEQG97X6Ys3oV6w497",
  "key17": "5HTPwZzUGdXC3Bg1XetjSyewU3nmoGtyjYXJb5hxkw1Du4CQcCEj8Rwi1iRuR7U14QdBnxg8rDd4f2se9fcwGQ6y",
  "key18": "4nuniqiXcjip1QPaSSVeuGV85dx6czqZeDLThrWDgqbAP1TiwSgCsvuCSrUk3JT52vP4UxnRU2JYGRRJuqsuo7tr",
  "key19": "4AKakcSxjDrWqJtohtwDSqNQj2uRwXMB8R6FjLBEvYLfRP7myrXz6nb3K8mZocaDxFv4ngeu4FEgFGCacDbeoXds",
  "key20": "5JawfPbcd7vj4NxTTPt9v7q5nEKhsLGhnrW2CUocQQbX6yMJgzRouWx2fyhDoiMg9ZsZ2pYwpFHKkA6LmcnjEQcb",
  "key21": "2UdUEsEfngNbgQsn58CCWAWGfmY6Eew8RrWjGgB49eFt6rpPGAobPKbXUBPduXBsWtQLMUTAMe1nBuyTDmfJoVfx",
  "key22": "5xUsRvqFykfLpaySvukkzm7FEdwdv3o7dp5DPzixzWLNK6WFjC3xh8PLyWuDKzC6f6HnMZjhKHHouY7MyeGeWee7",
  "key23": "62Eb7MkomARFwGSBArC5CA6Zd7AFXiHdRJpKqANVDCtrQoznsqEngUxLj6QJLNGMRWto7C3CvvhJLrBrH99PAFoE",
  "key24": "UgDuHf3qDAiLScmVqQ79oo9hvu3jizVNd4PqRCdS5Q9gGb9eNvyk3xqbcWhGEsLNAyqXnqaUVkE8YR6mrdP8nUa",
  "key25": "42LNS7Wn6Qp6KrJYo66VhP7PWRDV1grpNknRzBCJZgFG3W4Ngf3SKmEMNNZRq6UhRbMxHqtBeWbfN9tznCZo33Z9",
  "key26": "54NqjA7rodFfSsKuBgvbfeuWznWhk6LzeitDePKqx16aQ9pUmfLShm1fshfheLA975tCbjjPNb1KGPfTzACS4ikT",
  "key27": "5xnTG6SisGajxTgtrP2j5PxNJuoL2dNJGnoMFA7g8xGPQWe5MSxkFpNJVfnLUH3oguHppUdwuGaynrG5msS7QTgj"
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
