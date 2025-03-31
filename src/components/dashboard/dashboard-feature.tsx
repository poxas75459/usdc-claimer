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
    "3ec5R4uPAvgUMq9QpbBVfGC9cxUBGPGHvYrpU7bnyQ2ewSjaaB2hwmvhdXmUDsRBXCVh7RDfKhbhBr7TsLoRReX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gk8BJAPjhSsDgjKbn45e7saQYVtrA17gsBmGtwQSvWCAnoNfrU6TAhDmeh49Mt6L6xQ5rCMLFdydChMWDtaF7D5",
  "key1": "5zV8RBuSphhWyXpQh9MWB5iWRgfdSE17CLtLLtK572Vjcazs2pf8WsLJ5tQ82VYhCNcNweP9GZeXYbGX6L4qU1kN",
  "key2": "2Sn4nYtsiaDJJFu3JG45UTuTbs8bDg7eB32ENkiobTAFQCN49cvyv5r8CGcDRZks7oDVqJdvPKdS6oPzxZLhY9fz",
  "key3": "4SCJaZZkAtwgqag4zoweho13tiETuagowaZZSv777K61SPnidykBW4BpsBwRSXoYDHcay6npYzcs4PAaKJ3sGZkA",
  "key4": "62bzBJCkKERgA81UFigzHKeFeQnDBAGo75utsiLziZDhTpw1TwEywxNdeAS6G7QMyMGCeG823niN93xBJorBTJXp",
  "key5": "yqESVAPsDVX7FYLgSCh7dgwNL3DvEtcuNtbL32yDKNKqLbZH37BjMyDUcCnW69JgKxFU9Nj8xKG8U9NspQrJuKm",
  "key6": "3cBwy6JoQdtpcdDQkdLQWzME3N9vGheeFx7W3M6QWUgV9iDiQKZYrJBLPRKBNDzqWhK2jQrvgRDK1Fd6svhqtenf",
  "key7": "2FX2iYzPg33qHmt5vQTehbSFMjdU9BJE9etzS1inM4bLdBCpm441VZmyepxjy1ZMnfgc4PxAdToST1wXy4vCUCud",
  "key8": "5NGntPntRZxEhAP7pPFkChL4DfjuqRsQwkLecK9YiDDQJV57SFs3VLwTg93g3vvPNsp84ECTDL8emroC95Kw8JZj",
  "key9": "6226vM3AdLGFsYQn8kLZw55qif2PSgxeKxGybgCTmvZW2mQrUrzwCnt8LbHm1pH3VyHrptNXhBgtsozXadNnFjpB",
  "key10": "4aVHzdfWFCJREqNc12uLgvgFCd21gNcB3i3eDniZx52pCt3HyTdSwtbaRy2UJerfpAqg6VzTuaGmcP2mWe65wfsn",
  "key11": "3yTkBprbTu7UwCUFErs8LNaT1fyqsgcgKGNUxmLBAsrcUnTN1vf541v35JK7TWYk3wr4bzFbfGRpqFW2xCwGEp8X",
  "key12": "65dTvZt1WpaMZFJ8Z2uZGyibNteWzhhhFHBXP1DvjLvSLxVm7Pt5rB3CC2DMBFhGXHzARLWzWmQtg8MRag7onHCD",
  "key13": "2K1UCoMyMRsSuAJDUXFRJsCVNLcmsoLSEJFrnWPt9ftskK1wAwQ2mgzzGNPT1gpaNn98a7z2HDv57yCdU6h5jBzf",
  "key14": "2sbrh7gvMTHVWmh7Q773p99L8hiEyPzLqR3QCCGQWoLmvBexJ8QScJdi89kwGybarxMREj1WekiRmsMcDzW4bfkz",
  "key15": "zjU5FEov4X7CcteARPTcK3sywpwKNbrSsJK4tMh7FAWpYynbBCRHdeZJHq8nvZ1sN33NBmTqeg2hxr4pdvhNbEa",
  "key16": "2VK4gcUJXkrsWFZRtDiBfUCESRmrCyPtk465n1V5kJHEnEvgUMed8edAZYUZPmDvaWtwysPTiccjA3C4WGk3nV7G",
  "key17": "5t5PoV6WpgWcn8rNYWLSfFcgnFsbZGF92xdryk1k585xH6VdUT536eCWw3XPG3d6AyyPvZk736YBm4nTWhJKag6f",
  "key18": "32Key58jQrszrQD5tHxfj4A2tsxTeEG5SQ4pnd5pW1DeiytFQBN3xo78DjS9qfyZHZnuh7M8jCmVFSdbtdngkwVe",
  "key19": "4Vm7WcDkPFkrJ9rBF1MpTNzfKsYy9uFzNwGhwMkXaKgYYpzcUBz2p5QqQFwrUWAH31hRDJ5PenPkNV5XckNxGKcv",
  "key20": "5SQSoGCkk3Rjsm25aFRgmByzbwdp3udTKAGmPH5ztkGENyQ5BGg4nzAutCNV7pLdGf5dwjrUv55W2ZaEasAFfLgy",
  "key21": "19s1BUqi3e3L6G4WZfLFWK9FSHFkCfob5HrbmtSpSkS6kdpbTVV1ZkwfvFA99EYicaAE7gvMWUSdLzdhSbrHowr",
  "key22": "654ufdauctzpA7xkXREKKdXjKsbsSUVRtu2NFgxsSAN9yMDL4SwXdFedZVK3sqpNA63GaSZu1ysoRZ5NyENCtaEc",
  "key23": "2mbz14MUhnxK7mY2WFEHMhmTTgqctAJuWnqqw1kAtn8E6gibGKr8SGMbTTo7verJBEsWvqyr8R8YwbwVTWU6sRiu",
  "key24": "3NRF2LeeNrgkJ1uWKXq3TmnLCed7X78GjGnYv772FhjUGGkpYQspFpiDLwfG6QwfBBfwmkXECcjfwv195vxRCshk",
  "key25": "853ArNjdyntqk9ACreUUzMjL6BuiVA4UXdWndcpqB81EAs65xc5gs1rvJYrQTUynAag8JRB2m36iyHUC7tTsFUb",
  "key26": "3HysLwuPHXcV9EbqTJskd7Uw8ecqwhP6mBYEcktzjHZRJV3W2tucN9Nekyq7EtTYHCDTMJSq13Q6L4LNYRvuvftV"
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
