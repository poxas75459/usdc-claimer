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
    "ooNPk7ufa8uxB46LMy3ug2VVmfQ8JMdi9EM5k2ENfvkNa1P4692Mt9vz2kjdJzyggKPopwvWD2jxmVDpUqPaxow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnhD3oKmp1f9kQGZVY9Ym4jp5s91CftHrbb4dN4m5JRx5Gx8K1wmCvCFjE1UuUysSgdZBQuJKkSnBZALTSkwHQM",
  "key1": "2oH2Qff4dkGkRPcnTy1GVqAnCNWVPWGxFFbJCCRLCJSnjkbby5yV2chD9yBD3wbrprWBZkqN3j2N7ZHrAKyoupST",
  "key2": "cKowc3m6LxsNfRQdDX5Vf6gJBvzf9QSsizQap48vPKK3YH1wG5MJRPGf8drBm2Gr43UuiNev6p35ihoC5RiTarZ",
  "key3": "3934V7nFh4CvwtuqPopaypUxZkYv7dhwsY19WjLMP5c6jXCfV6a3R9UJpCWuFkZp3w9K8zs2Pc9YHwM9WWYZLy7a",
  "key4": "2xc6brcaESeB1uZP9dCCNRBZhBwunKGK4KK9brAbcAzmF1xygBzXxvU6nZGE3Ba3uonHu5v8TPKCCwxZEPrsC1qb",
  "key5": "3Xovi3ZGkdZ78xLUXwYHJTPD4fAcmNd1CiEgbNfyTc53ut8g4HNtJ8uhudnrkZkKwmKEsZQ6WeoXEzvmmpGqGePi",
  "key6": "3fDBDPwDbAK3snWX2FzgLCHGuBXspN1SE8Z4U4xXSVFQXE77KGKZZoSmVDrWuoeG25h2sffmti8FTSipJdenVbXp",
  "key7": "3yZEFBhsH6YEapHeaqaF6Vg41auhH2cbEC9wHEvoA2FpMedZkJZ1Y2sMiXsrGeVb92odTvFg13epukNfmoS78uwv",
  "key8": "38CDZLauesamZR4TvsL9LuajfNcCXygNNNo4crtyVRHaJV2Mse6gK23hGvQMDChdB2UyN38d5KXmnqrVNPoCzNpQ",
  "key9": "2rvwCUtf4MSJFGYqb7LgGeR7hx5xgPVA163PW6teNpuhaUxzSCSZdoUQgz7VWgi5QuP47D2fsC1CpJzkz69kwFAg",
  "key10": "41x9gyQ7izQ1Ezkn6xNYyL1VBDt3qxkGXKHK9RWmwLdcoC8X43SZdmSp6wbJctChyYvidQ1U8KaUe7n5WUfbbaj9",
  "key11": "3N1xwFBR2XexA7tA9e7QWQd5H6RnNuiLgoLF2XiDa2reR2WuNnt637howZZ2RWpgZfNyCjD21awLGsjoVChFt4Co",
  "key12": "2GmQjsLDmajY4Be5KZ2aMifXLSCYwt4TDYnSezRXrzhLAjQ9Y9bzJmXuZfMFeDSZn9LvtiVWDY9DtGknHk5yforV",
  "key13": "2oAXqTzUYDmCF45uBgzxuCSbtyjGeNABtx1sgw2t424cJSPXee1RHJKpT1L5XpXjSUrWcEz8PSt26V4cai6bs4PE",
  "key14": "47NdaAH2EeTXknhdjPSWwmNBG8ZH1iDuGpNNBXfokcNeNP68VzqinLYXhgLD7J6LtxHNjFHWKkeCa5vJkAZ15aWk",
  "key15": "3miJNf5jyLtd34eALFmQdz45sqqiHLF3f3JExmKup57jxsBRNEAfo1KKkkcJVBU6zXdZY9MG47ceQfq4kgCx5AMu",
  "key16": "49wRA9P7kEqje3kEVXXL3aUSgNePjHqKw6CuHtKGbu1JWe75D1SEhGwVkQoyTtNhYx9Z23gM6sNWXUYk6PZDsu8T",
  "key17": "4b5jB5ybsdxxr2ptfYnYqzEVwXVgiVd1qojbBSrLSZrbEK4s8EZAN9Zwgnkz5UpxFe7Efftg7ZmBq47egjvaudxP",
  "key18": "3ggJ5zkCrorjbdPv9zWt4rYqwaYsNHNubjmBfAjciRhrMt2YYZbxCWcEqi7jsqLNSF3Y6h4g5dByT87wJVBvvrnK",
  "key19": "rqLs5Me1TYtv16fJaY2QNmbfk1g44bXNPQADvRANXnpzKPMiJLnxMgHQJbKy2Cpe52kfjAacGhR899UQ38uWUKN",
  "key20": "4tR7pjcVHbRWERbccZ5bYKeEixYN5pyD81nVVWA9YVNeT1eGVXHpcQB9YAZJQK9gUS7vVWwkx993LdiY4vDiN9tu",
  "key21": "3mo8MpwMQdu9YTGHKK97LE3A7AeGqiEaVURJqXawKbgudhNsNTimMdjofe4wqNo4Q2tVhjbnd3df5vrpFSy8fNWQ",
  "key22": "4JYqb4RD91bubEhNYjkqeyU23rSdoH5wYDjqAjfSJsuFknGf3SVFQRqyeybYXWUAeXqGTgLVSfyWnPuEXVi13r3n",
  "key23": "3nd9YJKFs15XReEA16NBWQQzSdhsKfSmvwya6wPJj5PnQ4LeaAC9gZjKCdYeuoB8auqbgPYeV3HfsMZWV9Z67NLE",
  "key24": "4gSczLRnrHh3i7FFzbGBXeiPHW9imv6evTmnApk4DHUrxKvZLSsWbBDkRk8YLFLVdjEyv6dFSdPbQYXeJpYoLfeb"
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
