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
    "5Qh3UpcZy3A2C1UqE81N6vimZhKrYDuVha5WbMqBpGKGmyKQG6ZWu78gfK3QShQsMuoasbjumzszp8EyC8eSpHQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29EtBkduaNnsQXV6vWzPwqoXXgyRzV3Nw1ajtroiK1GjnKvKMshR5Naw9DbmLE84gy4Z6wq8UAP4ES99mKFyHbo5",
  "key1": "3gjKty8ex4WiQDFbk9KcbZocreX3pWgxbJqxLZ6jfa867BF5kj9BFeWpEfFrwth1niGz5P2Tbk8bNBqrXMX4BtmQ",
  "key2": "4op8WWaciyS99K9tfiPr4shB34tyQRtxxxeZdtGTJXXKiEmLqg3jttGk7YKyA6wrpATDDkMTQDfegBgHvFknWi8B",
  "key3": "CPSxZok7UwaAdJXHgmND4gF5BSfvFF2WggpumSBdV2KbS2pjSheFDhFi3jgmgfcCh6bLoyuqdzWPjoLTsR3XoQk",
  "key4": "374Ad86J2TDYqwjuN3y8i5uCDeKTcyXGE2MugscrDEvKrjD8ga8BLKpLZ1SmNTMXFjtxFsLsjBXhkoxk2oPaPNLf",
  "key5": "2ZirQVxUV3zw71v3vh5rzcizfCiYaVcLMNTpjpMi29FE4Lgz9CdgFbyZqiCohmMTPg656dG6Sd4bayouhe1FxKdN",
  "key6": "61DXQBtEWTTh2KHE7JnX1Ucjsm57nu9qn4cAddPyTPaVhJECuhD4aEFjvFz7MVo6tM3kk8gZe4mboUcNZxaFjUsM",
  "key7": "3ffJeB5dRFRQpx5STcjuz47QzxdSykhx9iUFbzTxPViWR4MLn6Nx3BjQug49wTDpQVC2RsoZXS1dbBckukbcgnmX",
  "key8": "b2t4tAtEgDuwjPNsWRuAaqMD67kdgS35g3AtqHaPsZv67nNcEQrKjsLfK3Mj5pzrffxrAqT2x9cRX8vbAWbzqni",
  "key9": "3pVckw4NGQvwZhJzFPhYhep4YHZRr3M9AZtdAPdMo3FD6WfXMYeRM2hcKRwaPWS5f7JuTK44YibAyEHCYLx6zcBc",
  "key10": "6mEaSTA4ACgpmxTQmJerwAogSFXoqrMbMRpn7ZpaJZJCW3jAZvT9BSo2LZxw9YRkWzU7Fjn7FwBekqSuMiRQryF",
  "key11": "5eAD75hH8xzAMediXGD6Jxyc4FqnRr8cZuBDPinWaiKmx8RsGcapnyF35q2CMFEKpx6SRxYv73Gte11LBG2zkFVf",
  "key12": "5BLxnShi3waY4ms5kHDJYWZsA89FoZwtaQEL7oLMPw5rUVWrwLisFZQwZkZQjiH9xDmm2Ag2cEFBkwVkg8CDhAt7",
  "key13": "42TbmrER6XcKs3ZDfkvr9HPPAoKH2ZfB1r7Jqp1EW1eoAW9BWEErYnRqMbZUSW5GwMKvviFZug5MuZZZR54WkwMN",
  "key14": "qeejCiZZrPzXHwH4ytR6ycU9GVrVYkS4W1oFcDcqiHaiGwarGVwusKxsQ94RwJY7gs6tbgY3sME7KHGmUCu5zog",
  "key15": "1xy31pHH51jvFdJSYQAzgPEBznsYNJorUoGn6YLmysreYht23N1w19nVitnAx32nemu4oV4sAyay6eMvFqGQmaJ",
  "key16": "2T8RnWYZTUpcThHGWGip8JXW5e1We4DoHYECzSEP3q365tjnneechPw5AALrbUeHxW4nyKZJSnRvm45uewL7stEd",
  "key17": "5tBmjsfh2KQQ3vWdXbBKVN4EPDUsoVfFDWNf4qSAws6cDwN4nNDmPfcC9iDMRaALAKyCzVvmQaij68XAvoeLcn3W",
  "key18": "4vc7K1coRzcLUPUW2HTUpgAB2AThqYubX3uLNEVnqobK5SGrEZmEnGSELVMoyAk7bSvNRjC1TfuQH8MqFcBbWE1U",
  "key19": "3JuCDGdUjCGTMnU2CzU8yk2WDP6r5JHvFN868RJN4mCBpDDjuRKsm3zeAG9oe9BD6KaoiEbpPAVJ1QiozxFFMi7C",
  "key20": "2J7RNiyp791p3Z3q4Rzq3daxFKVF94jUKUEDJdnxPifSNbBNmg1rxEp64VnSeYLNewgQw7UpaXTjnXUT5ghLfL5K",
  "key21": "4XQbYwhV1QSWsPb7ZErRbkM8U6hnXa2EHhwuvdX2nvKkQqBsqeCFbn2sP6qCFaX9uoiqhokmJjeQjE8KtThB5YKe",
  "key22": "5DtuF3KANQ2DgpD8Ac5NFUWCA1uwE7wh3S7CcJf6QxyCb1uK81WiCes15vXrhVnrtyj5tjMjYXy9ETYHPztSs1Zb",
  "key23": "2xqCD4BKpR6PoaSQ99sB1NijYju3mrLdU9zRE2T1DxdkxcuYcG5oKwK2BxFxrukmJSMdS7AjAcjApevn6S2BTGBx",
  "key24": "2rJ7zKGSZWLZMpu3QwkoruFxsLXfyfTU7sPSXpRBdkudggbihqkG8SiUYSiXQdWeB9mmy2aehMMTtieabdUYbMza",
  "key25": "9z7ZEZyhFEwQieXfFBkex4NqNw66XrBycjqJpsNrZNa7su2cUkPMiiA1EbXMkFTkHsRPMWtTKYQBgJbZ2hamwSN",
  "key26": "3aYd3rwpeYKNVM4oEV66RNixE5KAygnLkoPMYkdwcRpFyj4Btd8m3bbbXVSC7NaB2ppCuBC7jRTq3vZW7Argr9yk",
  "key27": "3nenzK37Z23u8ehsNzTvX3crHmT4VGzX9wbSb8AgJvW7YJRmNQVwBv4v6PBK3MDV64r3Bjoo6ZTc2YFfHD97NGx6",
  "key28": "3fbQXRgM9DBZtktP8wzov5bYNjSwPZokaXXJf733JWis3iDAa99EW4t9N6oNHFkGGr8L4Mtp1fh7QtiCT6AbDF74",
  "key29": "ohtZ5VYi9dux3NQfLXwHbSvwN2QR4wcEWKX6iWhBRueAqKZvU6cGiVdYT9DcDxtcJqCaJar3f1QhTduyXeGBNwC"
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
