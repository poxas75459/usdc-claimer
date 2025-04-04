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
    "24ZKQy1jgCEfxuz4GWEruE8ynuDZihP32ewYF42iR7icBDa4qybrMxpYBooToewYtv36LtAaozh8no5deTzait1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WRYYBCvWEoauwKRBeazMKNQTWpAvM4YeXkZQmJVeHTkPhNZJGTpeTmYhuxLuf1TjxyCpGYTTgkj1WriGSt9DBV2",
  "key1": "2mN4Dx3MC5wdm8tJMZcc6ZdWJmbLhdvP1FHaEfpkxQcKavSVVztkczuAR5GFVnpfKdvKBVJ5R8P8q5Wee1F3kdGp",
  "key2": "27mgBBp9gFoz5hahCkPryWdvmYoR2fuQvcjLAGGETiRQ2zVUhkxxYT1rrD2bFpC9ii14RjX8cU8hrq7Mucwzied2",
  "key3": "659eNwu6dvUxdEa4TvMsWzEBy3E6iRr2ENMuePqArcdB7zCci9jCEYfJYDZePLK6cNAd8dYFLPMS2QBTiiR3cyef",
  "key4": "pQAVZr7wtHiXBSTd4i16c4C3o7wD8VAQqscdWAtjNSF9thff7wtvY39pw1vhXjSNRT8r88ugMAAGEMMv1LTVReu",
  "key5": "2jQEnxsHukTrygbFCfMKaAgZDg9FiV4k4q8rNPg8YeCEEmy7yuAVjtdh8qaXGw1rRVVYLt8FKfn6jD1zUYzqnbxP",
  "key6": "5RT3yxHhmX8hb76oU2AnsUcdRZXe8gN2bdTmZSXQejntbN6M6TSkEZmjNcMUma3XFdDHiRoxG9LvuVhcCSc1zWva",
  "key7": "FWJXKLYKRpFshbdCEyzV4zZLcxKXecsqNGRzUvaSLLzioZ56DJHD73vDkPBu9oHBni8JmpHd78ihpbZqoNArLE8",
  "key8": "4pre9hYqDqaNtt7oWiHJokr9ALteKoh6pdF9r1WQUdop1LJar2hkx7KobEbm6yDPfmHKPMa2gFV4n5Qre9e4VaK4",
  "key9": "3eef25emz1HKPQ4kB6bQ6ugxtPbtia5Busmwffe5XP7XLZULwyvVBVtWHecU8NastcSYWAM6CWjY8fdetmxvDXif",
  "key10": "37BwUWjUnnLdXShY558HGAHqcsQCPUDTaQhYDjtymJfbcwKrFF35by4FHFin5k69PkEJayKectLdM7uccsnmtTve",
  "key11": "4HnWa6cJYVUCocgHcD2j8Qy6mc1shvmjFQ78bpBDbZxW3q1kvCKGoux4KoXcN2SqrTxQKxzXJL6yBQTV3t88P5mS",
  "key12": "38rySR5Lq9y5QH66Awj9o8xB3Ro5wG8FA4TZEheS9af3DyLQUodbupfhA7GuyrLgs36fuFgfAFDSYnxC4gnmAvgU",
  "key13": "za7oEvkgTJUMHTKFwmTAKBiezdB85mTvs11SrrdSohyd1J47VuXb4oQWUaA43S4QmMkRTZMJdP7CffLgWNurcYQ",
  "key14": "2afv7VGiPsQq2MLEPtb916eUjM6i3ovKKzPtTydte2LPDWyqqYjpFymjBpvK79oCohHGkAKVZWnvPsnfUiaajPbk",
  "key15": "4bkMymH3rxzgdz7ezmWMZtVfY9HeqMqssjQjVAeG7VYqjy2ojc59gmoXNGwEKsBo5CYZspMQeGN979Lw2auAc1xk",
  "key16": "37hYFjSugjDbziGGiRmorDETopp9PVxsJKVS55pBo4btCfVDwCa3UHEWWURKHC65uDLkyDt2Ev9Dt7bVDrTYU4K4",
  "key17": "4NGucHFK98djgSaKWti61kTUMo286Mxvcw7bYbmnXFVW37id9VuSPnCah2bYSi4RsdQJdAEUDKqrzgRHbrcpghTa",
  "key18": "4ndv86GPwQr8scFRmv9mZWFh2jaF5juv6N17tZ625jsTS2BkbbHiBY3BW5UTKHGJRPJ4fvHTUmqDgv4RbdEpDNMj",
  "key19": "2NSNkpKA2McZg48NKXAn3zEMJchnywTdz5RqF71AftpnPEmBRZjBzT33iWUdagHXcgU6J1Xw6LDcheNLjKNScGL4",
  "key20": "ZGfUcpLKgCKxQMY1JC8v1LzyvEGpPLSx1XeSLCXkW2JdGAXS43hZ15GSETDnBgQsrgwehW5PFsKgrSRMGyMiXR4",
  "key21": "5tDNVnhYQnDDHy7Uhi5FRhA1ukitce9itiuCvBAgvoDwUAduzo1ahRXrKKGdbyvowwByyAUjVod7VV2zk6UphRFD",
  "key22": "34dRJcUbJ4Sf3MYNJ38SqMxSeQ5vFs27Mtz4QQsaJDEyVXBNfiMbDnUTR6GMDZcn8yCfsnyEzzoHaavKS2Q1Y7YJ",
  "key23": "3PPdCr5NgiFfEUZHEzWhush5ZjrEx5zr8VTSBCxzETXTx18KzyqnoAKnqjCFJbhGF3qzmzkkhAoxRW26NiW3h66A",
  "key24": "3c1dnm13tbQd7uH46i3ym2v3jp1aQuHNhyaKoek7Yeo3cJgoqAWKD6fgE65hDmfemknUD7rJGbEADg6wckr7XNpC",
  "key25": "3qRM91YHEicfgHh9L9xGXR8A6UfENgNFQXLKcGqSC1EpP3Mzq7d26roZb885NzmtVZ2aLQ4ZX65evZb5mz3FNm6v",
  "key26": "5tPseRbpWSHixBEPXNp8W9Sm5fBJVcHXNXZmbUo3WCjQauMYCqxWYtMu4VDP3WjsJLGMho6twwiv9vPogHqFfg2m",
  "key27": "23trvetjvHABWJwXFohdubE3iwyU4NPYMkYAH76Y75cFukm3wPa3PbqtWzVRoTkGK4FSiXahxaRtkZXUCNhKkvXY",
  "key28": "47fFSV1qqRZP4LrDQRZEQevGMGzo3L4egRRKSNs2RjpSuCRGPBo6vyL2oCndrg9gfLnRHc9f2pvhPDykKdapU4J8",
  "key29": "5MHSMFDmPJYsVeenYssnWZdGmsJfiJ96DXidY5LmtwrbUd74E3oNMLF2fR471wCdChFLJGsV78uBZuuNoCdpvDdm",
  "key30": "GFYfU8AGH1kiw34W8reEmHhXz7thQSbFAjA2kvYeBcNcYaQBr7tg2LmmzCYjmvPUyEtngGcmsBBMmAAJFJxXcb3",
  "key31": "4FriUf74CkgsJr1rNCrYUNsCkAweU312dHRZXsFUQy7x7pUqHy4VYVDZfjj8zgD7RcvC2kAbn4MZ7F1RxuFq7ZEN"
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
