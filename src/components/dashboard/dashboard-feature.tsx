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
    "5znFDArV2JKL2123JQCJHyGPkvagqaH76HMG7sUSJjBuRFZuDZPxaPkB493qFGdsNyPWEdeREmWRGUXzejTbkR5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cdAxH2iCTkGaEwHyh5u3FmmGSJnqDvYap8trhxe5pXGeM3z7XS88rLPeU5Px5XQgj6uXQrhDDYwoLpVui4bgkTW",
  "key1": "25hhTebJYamUFXVMZgsHkcSYNSQBCvgMT2auJeihojX44acqSqpDZbEtCBzb1o9MVExx869isZqjwK1NzKiCBVEG",
  "key2": "6UaifMajZ3mUhS7WYCRk5h2wCohk2QuCFo5BgcBk5xffxjGyTj5MC3p2ZmdJjMd2AW2oYkW8ohxghzS8LktmfmC",
  "key3": "jWYr42ikRm8sWTMahUpGaYB4z6SbPbBofUpEfgJDnVYHzdAE5urd24E8c6XTeSVtnCvB2t4vq4GPLzrfaJqUqPz",
  "key4": "tMQB3Bw2QoJvEhVJPzgJqY7tdWy6RpBePQvnpdnmgmQWgcVwajGw8ZWCYy8o4W7jdnWKFC814ki4JbhtsHDnqfD",
  "key5": "3eVPsfKogAVwia9MowPzC44ZYBWstAy62TmWM2at5KJSc2mBGtS74Nyx25K8LWLEtwdLR8cyGW46voQ4PhNtALdQ",
  "key6": "5ZBecRFtKkTM5L7fZbc6VBstDizjQ1nEN73Lf6SKwP67S92aKjMXj9MJBc5jaVDJg3YQ3hBGPz3YfaSBfH3KHudT",
  "key7": "5eHcJ8vxwx79p283rCwGH8KMFxSXGH37Usax8V55HVbpnqsEtrRqaAFPxeDVc8Abo1njN1evg4638xLkpCwHYHZd",
  "key8": "3Nuz1Tibj2uNxAhboAbcaHSFhCyZWf61ibkGtrugNJd4PKwAzPK6NcKSEZRGswoxb5LtiTqv1BhUpPd8HgznWdiH",
  "key9": "39UPBNWsEFsRgAfkLPLS8VUDNNQx7uAFgJ5r8DLuhy17UXvFPQutxmyRGppp3aXbkqfa1wVACTEFGpWXtKnvY82Z",
  "key10": "33vxqRSYGAmfe3CvroswXf7J5J1oqeQjLTsrZjt1yyDjEBaciSgzCoA6g1qrt4gJ1frcKdsEnc1ZyNks2sKfimmN",
  "key11": "Ni2Wtnmk19tQgVZT3PS68STuj34emphvp2rbtqjYNDdVrb8HWDQZMMVbaccQJK9s1abKUd9R4dc5mf5Bb7Zpeib",
  "key12": "2o88ujXQ7tvo8nFxdf2vKhiebvrYFmdVtBnxPhVgsrJkxrrmS5CwHxffGH5vgvvdwdo889SdaSZ5VysDqZekSUNz",
  "key13": "47i88ViJrVJ3BYazMG5MpSb11s6oWAzVNKUHah2D3kjTEaH8Usq1BkxPXSGzPsbkEQZYHe87b1EZxe7X3oBtdaRo",
  "key14": "31epY7Qw8c57uSfSJnFpprd2Gp2aHarsr8ckbvTxaZ8dWQHZNq6f9JPc2KEX56quugz6x2fdyQBTFBNYzyCK6eGt",
  "key15": "4phytd7Vteah4TyD1546Duvp8becowS1Z2TChEfdsmydcFjZZGZZPbBQNw3zHsgJHzHaNqWJthmp71E1Q9rnSATf",
  "key16": "4BasL6WCYmzS6god7ShhpEUayJU2Zy1L67PWkKpRCvKngi4dZuNFJudzBb3nKVTnQQAj86fZtyGT9Fve5V5wuERm",
  "key17": "4zR99hs1DE4ur3L75cny5xjtTGVvoQzaEQB8CuJF41KwywNBwqammhzmkdARsTzHyY5Rjz8ugBUtwhPBKZzUpGQP",
  "key18": "5ko8KZdPjbCmej4NZjPdt2yG1HyfrHfJmjRg3MJ31QcnXDgRccMs4ZwLMy7bSiwwAmvikJtTbV27LeytDp7nwgs2",
  "key19": "4Uutp92dj6xfUEqcTHzb4W5DVBZPDBY1sGm3UjUEMMtB8dMHsiCJJZRya29yepf9UY7kQuKnx16YjTvw2Z3xFaZt",
  "key20": "4YYiK5vVUshsteH5FRKpibqXvsooe8LPBLtLR3LrsZJyxCJaumG5uw75yWRuDKELkPJ5KfLdvcJWRbwm9NwxtyBS",
  "key21": "2VfmDWQ1dDrsW4meMYVdfRWAbzKy7o28LpFmM1NVeCxRphQVTLoStYtuJZRoEHX1GRtPvtTyPYEh5E5DUfaYWp9w",
  "key22": "4vevj7u8BJALg7Xie28z3TiirgJ4MNUnNneZPMGBThrorN151NGhbnyoLMAu63kSLfkwjc4PtmdseiSYTUxpYSE2",
  "key23": "52VYau1BN2MnDSqAww8MuMyX8J2vcTjzRUKVXq912jzMbpLc71arBjtw93PLQNnEEB214URfCiQaWuRdDTJ1a8F7",
  "key24": "2bHUaaX6ChvSqwg7tXJD2bUBTPGkAyjtG5NhbSGcooc81GsuUySDVpJ1udrWGz5MdHQELQwNbj6HiuNt3LzdcPp1",
  "key25": "qa3cJ6e7o3MDyTzQPB8ErSYb5hMjT6KHZWnQ6MEEGvVTueJrpT2nXc4SUumU9kSRS3n9doDoWS7zo26NjsvBEog",
  "key26": "571Uiq5rvbaVmtQM8ww55gCCMCpe3USwYcpHNuYxS9GUx5R7YcmaVTPztc7KGXM7ELWoa4uMsixqttujQGF9fg18",
  "key27": "2J7cmkabbiFDD9m6Pmbkk6idXdrDZWmSspx7uXssaWGVh2aXs7yAtGERCDZTaXWCBo7UhGmqde13xnLiKBH3j9vx",
  "key28": "5izkQ4CUu8YSEWUTUBpekJqatrMjV38a59voPA5R3KV4qfsb8iWwknTey2cAL7aFaUdvu2DcvGRCZaCxwQWWHvLt",
  "key29": "i3VdVqubkqRV1HpwkHHH7uziUjNYGk7acjda3w8C9bAsvqoreDorjYSojt3yseWQba9yxD889GQ4SwUxZu8YsKU"
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
