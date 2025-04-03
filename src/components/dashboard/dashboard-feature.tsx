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
    "58xVnpkeh7496mxiyqzvC3mRzwpB3oiRkgywL7BGqvuZHTwwEDpB9sjotmXypuLuPpxe1A3nKYvbm2f9vVXdxtiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29eKsBLF4Wxca4ue4mEMyU1cXp4W3ktgbJsF4CEwqobGC9E5654BrzRb1UNxK2zbGppPqC9pGYzZ3t8hb5tvGhEc",
  "key1": "2c8udmWtMJfjnwVb7cgBJcLJ1asMnVATvNcyJgmwMtodQEYt4oVt4gSGBUgDu52nCpW56S5XzhjWHkV7pe9Q4BfV",
  "key2": "2QErJv785B6RyNvW3hJbxTF5jByebow7oZP3UVMFmUnfq2SiJT4gGBVUVjrKFyF6Eo64ZtCN8qnc6YJqGBB7csYs",
  "key3": "5x6Pe2TZ42vouYAa6j4rpQrDZ362GyN2ceAgSG3Dbb5UjqQMFPjsoLDS72c7kpr8fHpBgAF8UbAXPu5eci4aDjnH",
  "key4": "4q3oXkaZJSxrMi7SRxegLjcG7SAota3WVM53iDLAWQih8oD2DXT9WVzwoVRTvjmtn14nghQ63pD4tpesBwrAP4xQ",
  "key5": "3msfRwz8hyVZp1ojNFAZW3khAAgEpC9h6zbfJqt5jh1KL1e4rYuY7kvTjYRLngfV4kWbs51y9gMHVHeU38oT4ZLv",
  "key6": "4xDf9GRxmaFWFkjDo9R8PHJHNQ4HYpAyDjjN7SfSoVRKMD1YXQj4VssuRGbbgNCvWohNAYAp4vdobQcmFaYyAxmU",
  "key7": "4PTyo8AmUs34yyp5oGnhL1mSyzKPrui8xjwar4ijXs2czCutBqUPQqYthwFUrHURVJYe8M59p4XT2MZVLfyQDU14",
  "key8": "JcBeKKmciPAxMFDy1sQYZySnLeLqE7zUxjvVs42gr5qVmVcqpviFuvFS4e2D5q2capcrediaHx61nnXDyhSisof",
  "key9": "4PzSwg9DE5QKDwpLpEyZ23pp5dQ4uH95oPsyis8naUFuudynY8Eg8ZdZQe2D8znHcbiJyFBA4dm2PudobkEBBvm8",
  "key10": "27pU2ZkMvzUdsr2xSUg5jvUapWz6XPUXyP1MEsTnN4kHSgk959AUPSJGNyphRxHP7cNvbxs1GWC6tANVSB1wxVmi",
  "key11": "3aVZKVTZZNxxheVWjAjSTC22A6qg6MaLDkeBzahr3S6NtJWQQrDA212CCcBQqV9AWCzq4Mye81LxCeQEXJ9ky1jo",
  "key12": "2pVQ4d815fu3mofTBhmzRg7ufThetD9Ji384x6ADGyyJLfT6ZgMFUNn8Pn7qKULQrSzQw6foaqpeqCbYAKyxuqqt",
  "key13": "26D9Pvpavvfk5gLhxhoYzjdBAZXQEP3FZJtnqHSXySkxeVCrgTpiTZEq86FG1rJwChb5LHoFW7hapS1CiqzJcXnm",
  "key14": "jh3DSwX7SMLxTx5hoaD8i1RsXUzidnb3DRR5b7HTakRZt11PjCdji1JqidL49BpMirEoqAPnnrqDbQL1zj2817f",
  "key15": "3MM8yn2MBL1TKfBFez9rDsmPUg6WH5WkF38cX6ykGNHrv22iuiSFggHWWVNZvjgDNU8kwatkggWca2jALoewgazB",
  "key16": "5wkA79Ht9p8xDViSs7fN4HCaB8mXwB19MyqwfkXQ3xaf5sH8P7MFrXdnKhCDzzxWMYFgYZG1ibUPoQeBQLtKL4Sy",
  "key17": "2Bdwuz6c14ZqAs3Hv2FPuR9rSYZuEQ65Ak2jBe7Hb8bX65Q23HS56KFojUdftFRT3pEcDhhv2nV8S4jTgfnLqL9t",
  "key18": "527JYHHB3UTNXXU1LFmPrSwqNhA6426CkPjxDNf7n41nsJRk4QXWeinBNmFdUqY44iMXiA5EwYXyQSTZtb6PfEvh",
  "key19": "52FyVi4Z77ZqyN5BbdfbeWrNYHSamJDSMsKanxBz2JeTYxfZBNkJBEQfNrBciWByUvuWBwtTavh8zmjFXw8Lo7Rk",
  "key20": "4gN4r1uZD7rKqCNG1ALCmwAAe6pmNsVUomjN6z9b8znzwrxsyFEjm1QFi98zzYyLHByocTVFXNYDw8AFTpwjQZtc",
  "key21": "3GLpKTTcaN64SCnUx1poYu8n2wZursLU4g1iKGJpD6UR5ZZDybsy4ZXzJSiwPtYtanYMcxpye6iogu2WVKVDz8ff",
  "key22": "5EZEHc4TRH5aPbKTGb5gGPPjmu4qnWZoHtTakhwcdnUjubqBUr2NC8oYfubfdzLqvR4coUdA61UYu5bcA5EikM3W",
  "key23": "3wpBXU5aYJrGe2TijPmTza6EpgDKqd3ymfhwzP3wCLihzESCNDX5w4PQFYBLmKj8tA4kohNJLFKH36xNxNC7xefs",
  "key24": "3UZv9vn7TJsomLoBUxEyvRWJV2uJec4w5zmamnA6HR4Vvrg2wsTMqwwTEWg8bd3Vi1zwEXN1v53AMH7Wrft1fdPp",
  "key25": "2JCH6DUa9SpjotMwwLTB6NV5yMq1rTJQC8g8wrSAKz7hU3r1sBwxc7TP1ri7gbdLzEJ3Me3UHGnTbm8tiJpp2xv5",
  "key26": "5sFbzXnrU9rWfVJkNo4Asi2Wj2hBZxmhHqwNr8YbZVVBF7p1DPDPsSFjRZN3kqr2ftVFR2d5ChxhnfEPvhL5i4Xv",
  "key27": "smgu1LZYSp459AqujkB6Bwkj21JnVZAJe8Hiv96QS7LW4zTMagQMVP7SGsehHKq7FirkgNimevu7gtx3TQT8VSo",
  "key28": "5MpNpYU88mFfiAhcUXyw5E5afT6PqgMbQJ4EuA284ffjabQTaASdfFbzZyTz4AvszPp8XH8pcuNUHn6rhZ54a3HG",
  "key29": "4MsqqTHSftjoGBeUnrfXbHGrVt3KJ9rP1cgApKvqM4q5T1ojCfQZ3uajLvwAjtYHWhXzsmdQgcEZ7LgvoDze7R2n",
  "key30": "3JP8rWjndETRqJ2Fe8tnXqDpc7GwRQhY84aqmb7boCwKjiBFUdAAL456n3PoSq9f8hfKj37m2L1MF5xWBttKndBK",
  "key31": "2BUsfsKEKJtWYq6fmvMYTAkam3GMRTqN2V2MJdbQxiaMsWzRyjNE8BDYrWYzLSrNEHXQEBBTAJ8MWFnBpUtH3MHB",
  "key32": "2YoKfNEowCpB668QX6AF6PkZJuCVhGRD3GDkwJn86KbzjByLEz14CjBggD3jTUdCRMsgtmjJtXQDKNn3Hd2GVW5i",
  "key33": "4jLwgRYeagv6uB5jkuH8oCbAxcEiqXEARtR7yAZkZfLGoYJHUuz3CMyJNAh2CsgwVjUETDPLZjtcvqgzQjNBtC3k",
  "key34": "4tSHyg3f7tufS9UJwNBu12pVhvXBjiQsfksNoRb4g9tEVr659WBmU9nFCysctmsKicrEwVXYFAHKmv2ZLFrAU9oi",
  "key35": "5zcUvE7kkkw1kVwkuvHdN9yzd5kjryWYbtoxYJw3tGS7qDpurPXRVxxeDW459ZsM5edGBXKBCSJnnShUXSVZXbr2"
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
