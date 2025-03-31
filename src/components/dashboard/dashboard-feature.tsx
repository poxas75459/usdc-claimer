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
    "21XqAk1RRUj7Ff7wTNou6putPbffGAZ2dbSddVeLUpKGXn99dKWoqEXnGah6TzE3exDrBbPKA5uefQ9c8JY7mZsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WyEZrziVUtN6G8pQnqNRvwSxi12yQqFgAtp34maWbdst9RFT168V4KCMLbUdSwo9DemAwoNdsi9bJBS6hEMprHK",
  "key1": "3tE6qmJNHCf4gv6MsqvFPXEeV7fPGnymywxWyK5fnszTFerS1U8KFJaTESDDbd2XLrsAYDRYNt6WvdkurGC32R7d",
  "key2": "3egnJrkDy7ruvWxReL7v2XPmx8VFMkns9862iMK67uS6PKrL6FeNV3pzCz8CtZdWFdXPn6oQ6ExMiWEUpX977mRC",
  "key3": "3QaxNWTGScn7djFwA7n7t92FkjfXTmtBqxQ72hJLPPuPBLjZuVXaxpcWhXYVsJXZvLnCv9SCRwRV9BGVYu9RF18u",
  "key4": "2fazWCH1Dp2TaES9mDAETHtmpH64DU7gR62V5a9dxhefbGKq2E3e89rR6ZEjCg1EiCyDv6WReivZikPjXZoV7j5m",
  "key5": "2Cbfe8WAZUogNb8sj5YBBN8NtAXiZXmS44QuwXt8fpggErHfB8SmbgLA3jzM48XThUz5WwU245dpJ8GWWmYyBLtE",
  "key6": "4fpuKP4RtXx9tfeS1cxNZFeMwDwxPiUZQ4Z3gv7jctF5CJ6RcR9CFCXPJeEcXr6goYz5dJmZRDyC2xyx4Gie95L1",
  "key7": "3iTGDDKtz1deMFRvREa8VjnTaC25zqxxhj2ac1Qyjtib3UDmJP7pziw81vh84CptDzVy8RDMSyUcqFoVJkNQumnx",
  "key8": "3DGxnqK3idP6vQVWTKttFhou2CcC8ZjV6W97Gpj9hxpAHUMWLw6sQyiomh18bNmyyenN3poyZJ74HPtExP1w34tv",
  "key9": "3EDXPJdm9xPkm2DhNfNgm8vxLQGMf33QNdU5GwjBqo71LJMi1WRek7qwVuPy4z1SAD1AevizHU45gDhUu72aTWqK",
  "key10": "LC2EWprkRfgzomLP13gGV51YYqrUiz8LgMmnK2x6ymFpXe6yo7nVy8SVysfPBs2kDDPvsipPhpGhnjZgRSsp5tk",
  "key11": "h6dAjJefJuSHzKPCN9btrKgkrKTBopW6y1GwYwm8YgEYKdFd9AxrsLqrfREX5uHo6yHYfE7hBUuN95GQaT7aU5X",
  "key12": "2QTd5UVjVCW45DxjQJiGbEoB8WGkQjUNCpkhW7a93szBCA6Y2w8CKuQrLP8ejUWh83LydpWtXkW3Q9q1fnUVvZrF",
  "key13": "2ZtvyCCnJBbN8vkeUHKBSKjGnCpwHRD5HJAXh9AUMZL9xUYVEwyc3GSUDoibAjCVSgj8LNYZmRC81N8WU269dy3S",
  "key14": "3FDTH4iyPHakPJ4XBscZUTVSX8WZ1frMyjjZVQAGzYVH7qz4yhzsvZbNEGazDxhFrtD9vi156pdn2RXhnBgFwdTo",
  "key15": "5p6EFpvjhimtGNRdjimHVw8NVMbA5ApEGiZugjp6fiEk1xtcbWqDnw3E98uaknW6FLsxE8W6pEdtnqkeSiJy6zCH",
  "key16": "51QcqKQ6SjvQaXthaHbxMqgdD3j7Q8aHfV2GGFNSung5AZ22y9uU8tmFoM9DatNeF9Awq6bGzmVxohTUKbn46sSM",
  "key17": "4tZo7jMkPcSF28XnUzEMgt55CNLC7MaNkwQUVu6apSCVC7FowLuPjhz7MVrdwfYNnAYAJwGcFeSGZyBuNCv2ujyZ",
  "key18": "4VVj6tp6CD5LsqUCJiLM87VMNYLtnG4Ak3z1hH49dz3bhhVoGQSQJ6LeDuznYs2xBHRyDWKSqA2KhzZpcEcLYhsW",
  "key19": "C8Fiu5kb5W9dUEyUTtbQrbmawC8AMyTu41j4SiMdafW6XQMAhFddYdrm7EbxerLfzpmiEDYh3Ls25ZEPak8JEmp",
  "key20": "5M2yTTa24nJMkfg7UPRHbVeZHPQpqrnm7oczECenQ5zexEZiJXVY6EFynCoCuUhrkLA1WU7TTYd88Voryapgoefk",
  "key21": "JWyTnJqZc9W7rT7hYcTGBP4bwhT1gB3ZtzyYznD8CvnN5BkXCgeopnYJdnWsf6a1HTXdN9LZa2wqKnMsWAq6PzC",
  "key22": "3Ddrs2KMPkrB38FFW7fNa7r5M4XpPwzHQYUnAe8kLMU4ybv5RRt3siVxjPnygJnwfto4nQLEAMxCPK1B143QMfXd",
  "key23": "3eK2mH8PPWSMZha9FUhar4NQbVjAHgojbFrmMxEs6FSJiFPJ2AQ5Qw4TvQ9b5wRqZNoioRtZtV4TcWg8jt6kfJ7b",
  "key24": "PDa5kMD7UR3qiBS3Rdv2Lp69yWBeVKAKVTU77n9i6omvmUgRdHjKe3MFs5q1WAtvomx9PWHDqgeRK2Xmz7bHZy4",
  "key25": "3w7zpkwmxNKLPYtvQyDweZv6VJMK49EeATqwmxn9SqRioE6Ar1NCwERiAXAQcjRhoVr7BK6rMCADMmom39roDgCc",
  "key26": "2MNjLdRfUdgZJRhJLgPFYGuYEuxziLzSzsReZzM37dipmed9Zx7pRRJu5vsbqrmoKraxEeMMLCXutzBhP8mQn7H4",
  "key27": "2PoNgTJDoF9znSQT42E6iXfdYQWmSHLN8GGaphFzq3bF6EcEmY9ESLNuNFHTSaxQqkdCBUeybaFfjzk5WZXMeQGe",
  "key28": "5JHq8T5BzF41kn1DDjxr6d7T6r2kv3qGxb1MCL1wPbVDPybMyh8JsSWkMCMkvfURNXvQyTdnAkZiJbmQw6Gdsfkk",
  "key29": "3gvDjThsVRDNkz4Ba4ayapeLahZEkspSErQporKybtyV7GrSsyE2oZEb8hNivoviENWksiyZUrgvezvKZvYjqsCR",
  "key30": "2EqCznGa4VpoMKbMJiHomiomPPVw8Dybw52FNGAtvWZXdxNFM1p5d4BheMtZRPjHPdMRYKognfyrRAFxEc8jbnXL",
  "key31": "3dMLC2HnktqKpazEcA7SJAGaTmWA2eH2ui7urzHH6xmVYZXyNWvcXN7z3fKCSc7QJkmyBx4kswcZBQbBfdJFoyFT",
  "key32": "tk2dNwWkJt1Mt5ULb5KdBS4woD4uwT2by6k2nTtcTnD4UiGGN5nprgHzyPYHfDjeuNeKFt4TZobzrpKwCtmrRE8",
  "key33": "45CgQEC2nJQAfcU9MnH6iQVPmbdmEm6LmtuEGv4kpT3ajLord4omv6yTbmrTdji8By7w4F6m2MCQ4UWdLcjQMBXw",
  "key34": "529pnYAkWAECgBSvosue59zUarbF9cNGPB2cuN228raGpdoiDN7AGSDv1dxbao6xSdcKky93fLKxyrhP6jft84Tk",
  "key35": "3KGUKuxxcMWFN8RamhFmkGWnwYTvS6bQ8f73DyN2nFwDThNrsb2Mov6pDoCz4GYXjUC1fTMsfMkMvUWbGBHAiHRN",
  "key36": "5HkGJqRu2JZin9TbjQ23SDZQ9juF3aP4eorCMA8PuXUnk3t2gyhZpZ9VqPW2WWFTJJZe7UthvvCTq4i3yEW9WW9r",
  "key37": "3e1YD8WVNxgwcR1pAAL5VTNBzQ1xeTjKFRNppVo76dFUSZFG9fQt64hsx9Lukj4ftY3jHj8KtcgosFWrF49VmqUZ",
  "key38": "63GmtSxYkrxpfwWS2JPfq5UCq8WsC4rEc1AF34Hk3bCsdTHHMfPyxZoT7TdeVYWbGQq8keu3HuWAGQqsTRrXZeQ5"
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
