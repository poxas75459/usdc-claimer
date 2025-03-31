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
    "2S5jYVoNF5LXY8oF9LLQgFbrXvGP579EHCYgRNyn6iQtjk6mM1MxowrZFaFk69sqejjwguSjG7DdFoeFfoF47Kwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59RM5MQ4c4Q5DetrsuH2UFegG7UTwTACSBudwJp6w5ADptYknKUJjrBvZouy1QYC2Ddh45oewX3PivKT578cWkk1",
  "key1": "4A4YRm24cMwxQuwkCsKUi7f2ouZF4Lw9hTkCDhdVtHFPQkr7RCJjCNwDWcfAkcrCwRpRCq6P2CRsJygUjyDryW65",
  "key2": "3mA6o4QHN3hMpkNZXG39ZzQ7exiipqfxmjmvd1chiFdJmozygzJV2fbD83NQF3amQ44oNKse9fKESDQFDYmY22Zk",
  "key3": "57tU8swX7AbDoGsr44HesNH4GNYHdmYGGbezmHnRi5seySKYiJBreGyXV1uZQJexeXrGa6xjKxv9TTFMER4SU7Lz",
  "key4": "rtVCGdxfkmM9WX9F3zSToHbRUD4w6iEGBeAJPaRsK39CtqfSNknxxsktMKm9nsohksuVXwsu8N95VA2hqZene7d",
  "key5": "5o8pZJioFEAATDDudwvPJMpvmeqd99wWuK9Z4YPCyevVYUJ1AcSM1U2pCZUgbifGE9Aj9ioY9jvz6BBZT1cwoj5Q",
  "key6": "5zeP7UNpjQ8nYQw9QuH2cWDv8bUxaF49SqACSiRATs1SbBpgVVQAVCdwvnCJ7Jkzue2vSGrEwFtTyTWTpCekZLcX",
  "key7": "4S4d3A9CQGJyWGAVeq9db1Bag7iAah1eRLNyKbQve2N8ncRsT9WSTz8stoZb6bweuhk2ymy24p9aNxCV8EBqtkr2",
  "key8": "4EYLgQ47Psr6SstJh6hA8D3AozuGidUs63H5cdgACSLFDwcGaopL8w4tfKaG7whznuEoYP1tWhT4Xj8SSkZ5WWR5",
  "key9": "2Q6JtA6ish6bacFAYq7sHGq8aDnEhEEJSW2nEvox5cXFJuqGHWUdN5z3DFTPDD9PyGFotZWgNKtUAT2JAsw1C99w",
  "key10": "63r4FGWyNQnttZNBYjno3xBFquWJF8n5C4qzNPt36wgdMx4sXVzKP37fsksard9dhDQa1Ai3LJNkrX9Lwqbc2wws",
  "key11": "GEbTKuWHKvknhcX4pyh6SCSobHBPH3tyV97of2REXQ6GfWVHVGL7U8ibbyDKpQrerKrzy1p4FV1Mqu4QtB2zbz2",
  "key12": "3BJGVN5553LE95EFbggzyLCMzDRoaVRxYJvLeXFHV2dU8gk1G6dMdasdewwXCQJjeDsHVVchdLe2WwXs8WsAToTg",
  "key13": "24oQ3NVYjii95EsSHs55BgdsXfHJXP6woKxkZFHH3snC8pERX8cT3fnsU1RkXwbjojmRALUTphLtUKLG5GMyuTqP",
  "key14": "1Bfd3CLKds5n27L6k2xX7mugzDSdAFebWqdnEVd9TWDx28EfhZV1JotDC7LfJVmiHp5pXrsih6YFcHM4gdQUugC",
  "key15": "5KZbNv7huSjvYY2tJ7NMJGxMeXHUjnG7M9CtjYkS2Es7e2MxE8imeN8ZjN3yqruE3mwSz9PkhRmePx9PD6hjyc1",
  "key16": "5ia3sK5HTXgAj5VaUCTHD2MDnSXCRfeZKymbZUwEv1KJqKxLV6Wg8ELbKXweGyh45BR2bRkRKsimjZhgnbLqDusE",
  "key17": "5KU9qL1gVxDucGzgSYrEzJXnYKzCmrMFt9t1QKyAegVCA7nNqQ25KwcH8pXXBgVpU6r81QQx7KyeU56kgiQe92N6",
  "key18": "585vwXCK8bB4GpV4JSigoiydHcXRpcx8vXpb6zmvWxCKeEgffy2khwMPDkPoBDxcXZsFunvVjvTY8tt46sCCK69P",
  "key19": "3YadbejTkjY8mRrBebMJvrn93MwrXsd3gRe9jHjwzV8KMH3Vi2PHTCsdi5KUs8QLcBXkmk5qBWWeiSdg2bCWaYdQ",
  "key20": "DWUdVJKYEtir7UMYdJ9d8uLo7z2qskvueDeeTishRUBfnpyZKXQtJDP3frtyk98PEg2fxZW1s538HEqcRQnCUwP",
  "key21": "2PxQVNsZszsWe1F8d94wYJq113LQdtCg3zxHSfUqEWLgN9ycYsfgn9GpJXbFmroTfYWwA9C1jQEdzkDu5cZEDsU9",
  "key22": "2zVEqtyXAZ8NrNCPdSqDuMPmsDeLnQSrsHMZKDHbnd5Fc1fpJmxS1ittvHMUur9ZLRZnbNjVrWym1WF3i77RAHtD",
  "key23": "i4WqVRv3gL2EfhbxYBmt4PSWKbYfQxqAENCMM6vg6pH58sqeizwGCK3o8j2PV6SgNwRDmVsoSBu3yR8oKFgfeLz",
  "key24": "34t6qxJfgCMgNiC1nUMtc7CnWXmNFJUWwetsH8EmCSVuTWH5GARDbatd3xhesxftbLeamDxUSYXAJJjLYQ4BcWJm",
  "key25": "5K6Yc8vGA5UNvcvYrSnzasV6MJ76K6F44QSuyEECCdbp5ABhZ4AyV3nHmkmtWwjPq46mYejtouxR9g6q6XTGrBBg",
  "key26": "5pgX7b98yL2nuNA8xapGA4hrZjW2JNEBrZuDbqfcUkipzZ8Ymm6qjasBTUj7mGFHMCGv3zhSp4EU8Xgj6DGhSSqQ",
  "key27": "sS4vCMLJEdy5EvjceqmcranePXEfNwq5FJSuaWp5hAxcWbFSqtGMMm7cFD1vRPftcAEvxH85KmpwDaZy4MsF82Z",
  "key28": "uv6Mz3pGTXJokvxzSPC97PAt5K6qRPG1bXHbGoX6Ciw6Jk5p5uYXtrbucjb5mnMpuJCyHASQTsbi5cVPytAy3Fp",
  "key29": "66XHv5XJ9T2fq615QuebZXFmi3HDgmmV2pbGvmPt5DqwcoLTgyhKau1zaEEWGWfiX8Xk8CWQ5nyhCFYy4f6uF8CX",
  "key30": "5pqE2UF1TaJECBevw8oY8DdkPHhMxjs69BuKR3KYhAdmqUZBBWnt3wg6S4mEWLmPfLHL7uwWxYBE8Kh2eD8ZRbCb",
  "key31": "5976sqHSDmrmnzj4DHqeTPgH8gjoxSr5XVupuf8uTujEncFCxrEe11dWgVA491y6V2Qzy9g9P4btuwFxeAdW8Kp1",
  "key32": "3aGzMZ3vNZqCcBCxHAPdLjZLXXvwhKjqx9Phr3MLGwnkGoo7gi7rdbRHw2hdn1JUKDdATzVG9n5PYU5UeheQze5W",
  "key33": "5cDpdBZhtXgkB9GLwjWb1ktTYsdfLXYtLPh6cKi1bpNfgWizX1TZj2YSAULhm9Y1BmYB7DS5cQLJphK5XHULX4H6",
  "key34": "e7FxYRQpDUmSKt12TzizxL5LLjEuer6H6vR6GSEL7xhK6LnGz9Fj8mV9yCgySaya367RJeeg97LD1TkwJyDAYiE",
  "key35": "54rCRXwt1JZEKiMc17HaqLeBkpU6a7NiaNYi8MdWtg4DH2QmQp5fyDhLbhfLWJJg2Vd4nRy7cj3hRNmpECfZuiXC",
  "key36": "4ajsphwBSH7HhucTNW2a3Lqrt8FUXk3EsqSsa3LrbsyFiuKC9piCXSnM5qQqSmYzMcL9pHRWpneuiof6kMexTxBT",
  "key37": "2Mp1k2PK4wEXY78yC1W9Pf7yVTSUqBLFgCk6cUNYcWZAqZKr1MzwSJ23D7sRMDASb5GM6A1ipVSoQNGxdTp7qPZW",
  "key38": "NNbjyS5WsEgPUxZvCuVU3AUzu43mAhtWHpfgY98iHawec8UcHbB6WUABL3BnmvUAhzvqhwTd9bnzon6YbNVdNyY",
  "key39": "3f3GM6y5BH1JPYqrbAGtAi6kMTgx51kHr37pyPsqAWGYc7w1tUYsVmhq7irj6ywHEuj2qDvo2umsVomivhNYf2oV",
  "key40": "4coT3YdoEQQREoR22wQHgGyQjJXxn1XABgwwTjhWQLxYfAofAm2nYBLPv2i4w3vFbfCwZG5kPsAkUn6NKhyH5mMk",
  "key41": "AFgm7fbUmwi7MpD9dhQ6B8sBKmc7QHq6vSab1w2XAJ23rMiRWqBJL7JvbxCeQ3FJcwgm3KVUFnBhagXnVRohMjS",
  "key42": "4Wk6guw1RnrYVcK8n7c68aeTT5ikTWLhQ8oQZBcxvxwxucHqbVmgK4aEgHi8DKuTZ3tRHo3ZwgCif9oKgxWDQ7KT",
  "key43": "sg1yReJt6NXDMcEaoBLKRkMjwarcL6Pw1ShRdTFJHeD1NoKGWz5ySVW778PpVv4mTu4YPQFs5f2em9D1UQzaLUX"
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
