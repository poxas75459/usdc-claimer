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
    "4mqDsqadTR9QWhzjRMaWLsG32xNDDHMEBb7Vpneft4fq2GKjX276h4vNqcnNR5JfK36y8obNF3e9M2syWwoAX21J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m23mEqovcBzLMmTBgPmtQjduY44Bz2SVGfUfNpii469TVLzBbpvjVvr4ctKva8BP8Mo5tMsGapvdSVceZVHsbJh",
  "key1": "4R3xPcFjuVGmLMXYdLCCdPaDXNTNhXeCyBHDSu42ot9frq36cgp9VbjhfGrVvkkJxiqLKT6GvjpHFwtkAsPjv51y",
  "key2": "48277KfJKHHpCNom6tZLgFAuED6jVoSRkKobPdmhRppSEjJeoKFeJCibWAVCrpKeFZ3zTgkXbfavwQHeW8hShWsR",
  "key3": "2AEz6fg7Z9iNcDwncvfR5TJJAqRMuSAD1y2JvQn32YVq6VLzJS6JqQjFFJmzTZZJDQhQdFcvXEzXBy8x2VJhJ6kY",
  "key4": "3SwLdp1twsVYBnc7TUL1risiAGvgtbMUaMNhtdaUh2gjb7cT7kzC9N8DvDKXGZWdyQn5imyTPfU6xYKaSXAF1qyR",
  "key5": "VTDZJhUqtyhTiKKMhznyfcU6Cwnp34wZhCt7JGP6YoH8z5TcQTCJdYEqZJhZuqu4v6bN5AmKrvvofACFvx48fyy",
  "key6": "3DgdbKRjo2vpTAUxhB7qUqxYrvrbQafyyE68GccyDZmMtNPM9mNDqB8c9FpLGp2E9LZTHoufoQ5jb6MyDsaPn4ss",
  "key7": "5Rj3YeiubUKwzMKosvcLLHFaDuW3MDEK3Nn5zoNvpxZ2KJnqA32DQzyudY6SGdmbD4WALi74TmBYRxG7kd1ATSFW",
  "key8": "4TaLHk3UfYCvsktSe6PHrCbuwhvg6hYESed8iHBTCRamqRP8tzhW7sumHiyyv498CsSDeHBWK4hHP6jmadwj7Fvw",
  "key9": "5G9acapm8ts396vXrzojU5ci5TUpMftVascSN8zyg5sTYxXWus8cwpq7vyMdNjPNpdH4dMGoVusKK3jVR31mXPCV",
  "key10": "4j9HzC5TuFT1YaZbfREymKyEvsnsyP4XTk7T1yJDNRPSP8dRFFrQp8zzfhSNT3efaCcqFCGAAPUV2JNKFNQ8vULY",
  "key11": "3SSpGoL2Z9ecFdntdhdGTtVSVHqanpEHMBDAFENvSWenmKD4CezPjcENwcTv2JTS4cc5h2NfBMENYAA86rMQewy5",
  "key12": "3MRjUaBNQoUSu8KBLY19tZaHPjw97fmQJkhLJiJQ4DUY5J2fc1ARpdV6fmTRGPVV52iKCZpaG5KsVi4NqCWcyysx",
  "key13": "gzKEtRNke3ZE4knCtJnUC9vKp4vBwyLokn7gR3TyueJku7N7Zty9Ek9qfANX33TpipJFAUawrmNQfYmgSxCFA17",
  "key14": "66YDSDKQP5FR6QnrFN4SYcUz9B2ujV4Jh5jSVmfspRh6g5bqQQgDq2SVSf8kFbwZF8p8pyjifgCavXV6GBeG4fkg",
  "key15": "3UMbmf7SjpfGhGRRGurYBbFR7NPietMt8tQBCLoPjEzMAR9i7XuVtftq8mYHVoBY5yt82maptcFaPtZAu82F3DLG",
  "key16": "5eohaEY2iw3DhVcSbhwaCNndacmwdW9qVeJ5dwE32eVe7SjbnnBaPrau5neQr5bxU3wxSZmbsT8t9fGqavqrKmQT",
  "key17": "4GTxbxXriREBNGf1y3Mq5oRC17oUXBcx5AZqj7hPrknn7jH98q2ZAKQTAxt4s5JbVrUnttCwJB5dQ12DJ2iPAq4r",
  "key18": "3CrCKqxXpgXoZKo88mSWtb5G1iSiHtBtdux9FFbXo5phhKNiXszfTMgUp5xKtzKUjtfxM1bnhA2WnX11i9N5KnMh",
  "key19": "jxztagozFJUtJHNvBRz2mTAegMaRt5EekfxrqM3SoKgiDmQwh3kyarmXAPx7kXx1pcuKN9a9G7UZEJaE2siVNhj",
  "key20": "4aWjWEjeZtmNqbxXCA5JeX7Ukmcvu91VJVKS1TufJXdGB1ekJiGrb2m9yMcoaajpH4dAwZuFEDJRXDPJBTPzn6D4",
  "key21": "2RBAVGyaFTHX1ZoLGihT4m6xNmNgHun8MzKY342EJduQDghmaNE59YkqdevdymveXqQLGWjjNjvUL9zA4p8YgRLy",
  "key22": "4SWW9w2quWjAeazdYgrGWAQa8Cf5nhuKFcLsLXWczzw9HwhD4YdWhX7somZzygrtkcSEUG8zmn4u1QrEq7v9QET8",
  "key23": "3VDMcLrUaruDG4bHo9HdsXpnCXSzj3nyoti4SHKEz2qMiMvBNEgUFGR7JBy2JDvo9SaXnrEGeT5KwxhDemkwdCip",
  "key24": "4Arw1diJpiAnXTKVsyJZJKh41tyMGbmRcsQkFm5hyzb4s7TDBSTNMARkGUSW7fZYxyqXNff1DDFjuADcFnEVEBDs",
  "key25": "3fejwQZw7qVX52WsmACihBu7KfCPytdxNWqFzySJLUp4C46webcXx5r4cA82R161jnddqzNa1dp3BnuNcAosKjpu",
  "key26": "56xHT4ycdX75BnPUME4YJsf8mPQfGDGGJvmwwYCTPXKkCZupE28ggcFMZ8nCe7Wf1aMXaWzqaykizQPRCELXFzmo",
  "key27": "3cFd5C8q5toPuBJVrbR13TBuqHhSekfpcDpH38DuPmRRaDhg39SfrM959DL8KZj1FU9eFKbWonEkFgaCbKK5y9mE",
  "key28": "5onhpifB7L42co7oiJbExnxhYrRcz4sEBVmGY4fu1ASH46vM8EraERK57VWJA94EzHJdYdpnTFmgChkWY86DFriB",
  "key29": "5EB9f21DaS26arBFb55oDrFX9zon18wBZgw362UUN184V7fgAQ3CnBB7QTrPCUeLyXy7TH9RLYZZtp7yqDP6t1oo",
  "key30": "m9MRNZAa6ZKBKADVqD835khH7RxfiQgnKCrZoigax46d4wAnvj1Ge8cQbGN5yJ2j2cmTyR1Ez4qf3wHspgvtCDy",
  "key31": "5gRPcxduEqV9GQFFxmvpaiGKKB2brGrpFSeLs3aHfTXs9nMKjacKVZuCs8NsYMtRX8QGry9PFchfVTjVhM1TZ2Jx",
  "key32": "3mKrttMKfc9377ji5DbQ8VXfcc8JrGJPvFe3ikNmLbEJ5QFmPgnzHBLPjrcuGsUG4Ug13BcSixQMiQCAu5BAjV7o"
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
