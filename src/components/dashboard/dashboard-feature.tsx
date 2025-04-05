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
    "fu2gai4fg7g9Peb5NMVU9ZTh1y2R3V2WQYHMRgCSojHRg6Kvre3fQpEVcjDzKyAcnqSm2VgB7G5W4eUHruD8GVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSoEtHkVNCpQK8C52P3JKGazeGopramveDhmeP8MHNdZEbMGto2w8pKejcqh9X4KkP5pS4Dyxw9ek3kkUEjubPg",
  "key1": "57J8d3kY5KxCNPk6kA2kymxvLt3K5YGaN3G7H62A5WmLWZtpWPKsAuRT3QjKpEWBWR9Xqbm1gVKP3Cji9ZnisM78",
  "key2": "3ukmRyvUXPoM91WLvFCLJDhQVYwN4Kq2Q5Z8TMCsh9zGpDTDBApKusuBaM8JxDEGbWspHr7vKSoSQuSvnDuYv8Rb",
  "key3": "2UeVR7LsNyuh99vx6F5zSmBm44CD8kxmfE75gwABX5ACr3T4f5rogrhSCrCYDL3oSaBmuyMmQQskLDv1LRHsciFm",
  "key4": "5RAm8A1iuexvQiEjNHZqoraCTxidgaWPmgK4YF5fpYxcbtkrgK44bdQEfSARJSGubGbWB3eQSMmSQsUGhaVWZzo7",
  "key5": "21AfBFZcCECmrkBDHj2WBT1Rqf2tLtixEgtJQ85vJymHtfac6QE1fNMRgxUgVjvWfUZNaiDDbM3WThFkS9MS94cT",
  "key6": "YSPMhQceV1Eoz1WNhon383WvEg7UJZziDwjCdxum1LAqQoCGarhJMVoi79Eq6V9RMD6Ev9HuUpQNUHyWriZePz7",
  "key7": "LDZHvafN7zoDNjLH4fZsKzHxULKG3KYhwziqvNxSA2eat9Vi7JL8iZ6BxawebzbPVeeHtTzCepnovLfKV5Nuev8",
  "key8": "5VxWA1PGfvghcyxUzpyhtvGzm252YoYo6cuXAaFfxnXorC48NN6XF8vu4LFzSWLNU8Ssx1L2vAEYz8kAWsspuiB6",
  "key9": "HcFwEXuiVf7ute6rsv9sLNCjcCxF17AJPaM6x37kjw3X3Du1mDTgwSyVm1KQ5HhxJxoJeSBWQ9ojzkgKBdwpBDM",
  "key10": "3GHbJ2rXbUUcsEMT9r8DnZhxSjqTQXSP97e1fwwmx7iLQerLvvJscM1bKiSzaaM2qiEk3kYwrmFFPbEoj8PtB2ut",
  "key11": "5A7Z11GGXLcSpSApdQgtNjk1m4RK5AV29v1KWUSa1RWyBy5sefFCkyQDHbs38xX1Uoz6kRjqFA2G4cY9RyJeop1k",
  "key12": "2QxnmEwV3PoxoPHe1cPZJbSKyQc631w3FSQovhxxgwHcDktnKb2ZMhFyhumFcR15WRMppJsaMbSEfWMsBXnQxDTx",
  "key13": "5jnZ4xhW33e8TL5fikfgKUptGPhoQxzLoGheuMcFmWtdszrBta7Bs1zgEHtYyyWM6tA4cff5Lm9828DLJHExZoj",
  "key14": "5333Kep3pjx1VdF1FLw7L24Hak5JxZriRUcmAF8xsmZQ6vpEk59DxYRZFRPPSD9DZFnQ9ZNYjayQ4HDBZiKxE44G",
  "key15": "2J7FYQevS23eEUTdVpf33VPdNxJRzBUj7sd4XeiYKYYpiBwoiSWb5Hd3iqVPLKCNGyHLuXF9LFfV4fjVXyBn4wgb",
  "key16": "bbAKYEfDQwUXU2snn73tD6Ldntn6vgEBUVogP9hcitJUPEdTM7Q8WWDdSUm791EpHcuzisf2RcHCugBVq2hvSTT",
  "key17": "56AfuRsJE8Cc2qxfASw88PMRvHmivh3W3WQFiv91JYpcfGTTpoG6F7UZQGBjR3ocdcTLCbXUSzAqPoCKS7xmN5iE",
  "key18": "2Vx56GjQ53VK9Ffwzh3NmqqBwt8Ag8B138MWaXLdLfQhkpAV5vEWALMy34m58124r7FWg6FEwywwoxtdigFsq5KG",
  "key19": "4S2VRMF16jnq9AtjGJD6xxZAAQmqhenHHzXuGTvP46ipuydYyatesMLUnd5HgJgCB4Jn16R6NHBP62fG85L8Y2bD",
  "key20": "3SMfKVWLru3UFntxzHxJUYEf3KKhRkaJ11aGgYqRT2K9P8M5SveoH6U1EqUiPEMuRuFF6DfPEM7ihAZwcemDQMms",
  "key21": "5cHQ2xtMj8UhfeH8Un5ecgwyA8e8sDhYzEeAHoJQqpT5qAy4x4a6gmj1B1SbFT2EdJgZtxc54Yi8qehhtP1LbYdz",
  "key22": "2omnTuYQYA5YJacdCNwJ3uMX2FrNndLFeE7NgBDafRaLSH1bzDT4GS4ughpiK3aU3mQMjWAewz3GL4UmfbkQqDgL",
  "key23": "3iXN5p8hAHG8NTMrsiNngunDiKnPQtXk5UoRV1Y1YMAEEe9gu7xFEKhBbQFbGEfcTUy2g5K9RnfixE4giUwxDSjF",
  "key24": "5P99kQLDkXRoeV98EDTtFfnDa5PKX5RgmGYgb44NcouKuP4LFdUfdza362hqE1UVz9GYfdNjQ53KbUDy5Yxk4e6y",
  "key25": "4NUAKmsRDgcGDCurHHavKUnPMjGbCnzCenWQDzsXQxE1BZypDduLhgKA4KJgd1CFG1D7iTecwXfnmSvgSkUmHCMa",
  "key26": "4MvAejJxchsksm45W5CzMoo9uM3Hd4RrS3RaEJGetD3CA25ikrkMkgjj1qfLTg3KtSknQcbSsWbFoyuTq4D833Hu"
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
