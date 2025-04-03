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
    "4zQB8hpvSg1AjcbVBEVemfoWWt2LQXnXp8hiuVxDCvuXmRaLWrnufUPeKGMgUC8WbV7sQUn7oQFCKVnmxyBU9bJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxDBAfQy3dadAwNgeai1AY4dGLrSv3yPVrVVDBb6V4Zke3cvowdapA69q59Z1dSNByaWq1Ak12oikTYuRAan9xG",
  "key1": "2NUJCSB5y8ZBCzHDgy95TThrHAzZoY8XMokEiNVQ7gxBouiMdAXpBdw2gHdRAaem6mV6MkDko3qp5BJG6xS18b88",
  "key2": "2F4nha1E92Fd11T4xuq6rYzA3PoKUyggA7cMGYeoXDt9a2HDaCrwPjVp7SEEUz6FpojdXb7SQi5tm4giAF5tapT7",
  "key3": "57q429fmZepcYEL1HrTZEkvgRkTNh3b78cv8xjnJCTvm6y7yxfiU6U8qqnGpWeWMRZTXN4mHFdXv2eJynyrafRCQ",
  "key4": "DzYxzBDMRSfQTk3PeTgtXNNSLZhBgZ2eR9osojhS2KKeArQtFahSqEPuAocEtAsEZuKqRdMESkohQcUmbvdxHnn",
  "key5": "5LcNazZVxcGgoDzJ1TV6RSScbfd314euD6iQisgAqhK2PXSPfUTgenaH267yBzbmKMTr355hnFvsaVKveV1ugfY9",
  "key6": "3fi8FScaMeT7GUPTKFdsUaswfLBNp2xks1FJ9LNXtAmMjpQvS3EHucpbGAtUmDTR1cxMXs41LXu6y3oKnr6uuGtj",
  "key7": "52Mj2hCfU5ShZgSdHKRisNBmnN3GoJuPMyBMDVK9YMDzNtPu4DnvJj99K44r7rMq93fybXPARKGLnwq89k4fxNtb",
  "key8": "dNp6CVwf66cgNgccf3a2HvBowXz3FKCykjs69Rtrbjz6tzbJAVUxAxQk1EyV545WP5XhkuYRJcnhQNrzfd8muhQ",
  "key9": "5zei6EUMiPMU8rYKszns5e6bB3duovswVJvMYD9XAwm53ZsEvdYX8SHne7R62K4z1Jd67QGbk4hBDjS23Jhvf3yG",
  "key10": "qcDfdNP6HhZeahPAhL26sV3ZN3Ahwbs72xMnsMTbEpSp8aKU64UhKUm9KJW75rtStxCf9WRws63vJbtQYPgRsuU",
  "key11": "5huSmXG3Lqqqo12EeFtQyV2rxdcCdBnWW26wSLGMnhqE9XgxfSrRF1YMSN6NJDjfCjG9MwiqtHYvdwiVBspDRKVp",
  "key12": "5KgExcAEawaiiXa7pbeUzFhFWP7QU6Fnnfy7irubFoqErRX4yUxLfHMqrQLpupZ2nxo4n3EWQNrCESDnS8yWQqpv",
  "key13": "67dxsGJycbGkqRtzkuoT3npCMwg3kq85qWDv8QPFcohPizn4WMtLtyAHXhr6qtakczmkVswU3gC5bfqHSLhDVTVp",
  "key14": "ehibY8eWRyCfWsUKAfbSUQKyrBCW4McuvgRQ4Bb7ZxLpFJfv8se3HRK1hQkuicMaczC3FJx7pP9PjECroP4twjE",
  "key15": "56u5z2qh8mtpdEBu5m7GDSY6txwY2vN7hnAWnGSjpfsJzNVjdNFJ5YxAEdPK1iFah15Pv9dAqkVoEHveKCqwm77u",
  "key16": "m4dPFUxUABjpJqwqooDqvyDLTYye8qBXh6ZnyDZMH8Mj1pJx6EoxQkF83uWitgSqqmLdniRmNFR4WKBuvTALrJX",
  "key17": "5kuwWw9SePLwjsXAXwHn4NvPEdjAsmxrpuVPkNQrVQvMPtxAqXiScNa4C9RAapUgfjgnN7rLSSwjdcQUfN8HNimh",
  "key18": "43gBf29d9u9C9WxC9qxADgHSJNTPuYQDZEG21MdnDh7TdQaBmQRcevqkvJY6xf3ybXcmAtKThrQoiqTFvbfHqtNY",
  "key19": "3m2cnsACTN78roMYgkj9gd2GE1D2fApn6zDbRuKEiURyTTFU5MEsTRDPcCg4KXs31qV9orCntQw9gbM1oP1xz2U5",
  "key20": "5u8QHu5gs7p6HwxCHX1ZupwVhwXMx1dgRozVS6Jm2xRFkf3fnkE57fwDrjzu5pU8owVP2cDUako2D1QSjeYjrpjy",
  "key21": "28sBWNUraGHf1yeKNP1Z85RJCLCVJFmJxvpsAvsyjd4XUAXgpWYvpbGRaohDGWPPuufg4tErAWdFnEuzybZTLDe3",
  "key22": "5znbQPXqks3JaTSZuRLDpU4eLH5mhb7ZUBcnQnMPRTg8EnA2yZjv7gzYrdbC5XKrfr6qyNZ2BNzFftTEy4VKGEfz",
  "key23": "28LoXkpo7ysC5VzPBVCjj2J1MG3gsmT1eQVmzsqK5xUDniqaKSRfTPSouEH7B3N5hEELWzBE5zoo391HGRUpr8X3",
  "key24": "5uiNV7552CFg7J6yjNv9WRoS1JH2sxm1ZpLYyquHPukmMCojBmJk2bHVJ6roZyPZwMz4rbkp64Z2hxExuNgwdaMF",
  "key25": "2Bnbcw9vbVCzpRGhE7d7HfULtN9vzhmcKC74xW31KyhaeLMAQXQrobLJNify769qp9zP2DRKCNpgq5FgJK3shp5U"
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
