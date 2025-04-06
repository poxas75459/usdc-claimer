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
    "2yJgd1intiroKXkvnW8TLdUoZe19ioVkpTJXLGtdAcGLH7gBRS9Q2uAwXPjssvoUey7iFJGUSmcEYjva74DS8XM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637Thgw4E788A3cvoqEHFc3RgS8nKbzZ3VXqdqRZvPGXSqp33cyqZnrWiTJJG72up3KCMaTNF7nx7KFEWASGUecS",
  "key1": "pL2HzA5bxWfPDmk9W9kUMRcXMJy3yM6DmJujQz39eKLjjACJw8k3xf57gNsgCvZp8Q5T8yKZfm7FW8AAPVPixJV",
  "key2": "2BDt15UVqp94D3ePK7YPDfzxtqzYe5EQXwTa3bgPBJuGmdHyrer9jGxtq6DnGMiPPvd69DE5z85hoK52Q9iUsDmX",
  "key3": "5dK5cQMNTRkqW9nX7HFHvMXPZ1K6Af57Gm1bnzq9qef33RFhSKnJt2i8TXnCJVcbJDKJieco3aH1FTkPVb9JTFsv",
  "key4": "2BXbaevkdNWymCJGFCx52wfgDsa4t5gfKojFvEtQZBijrJZQ27CbWKDqQqzcUa8yrLA6hgPSSpY3XikdAEG2aaXd",
  "key5": "2wvQVbew23vobKigpFtHMCz4mb1JPaZyjr3YRWhvkw417t6D1v8K8oyNYpsJ7Duc1AYaCfqNyfHhYfsWyXiBtZks",
  "key6": "4Pti3GM1vNfRkbXoPFzzzybBjJJkVDTYLf9hWm8KekXuuLeFzLJuwxuAZXhkUC7kWRN1fgv1C3dXpRmSJE8Jpbfo",
  "key7": "33KVKXSDq3fuYzWhNWwrmHGEcyH61jxaVBHpe7JGQY7rxD59199Nj2K78LbDFJ6aazzkTP6APwQsCeLdgdinCnEt",
  "key8": "5Tp4nPQoJcnCKpLDgNW9Z9sK3MYpMeAZHPZ3qaXB8SC4GoBMkhXBFXMJknLCwgA2SpbuvnshnQWBDzGEG3KF619p",
  "key9": "3BAssUwjGX3t9DxTXM3U86wYfrqpxDSd6qMndCV1nifwE2vsws7WQpzNbcjNKLdxY1bxxNmzoiH2KFm5RgFzF1Hi",
  "key10": "2oGNe27FoNQbqSmaGt5WFcppAdXo1aQBTh945YqaSH77Dp4UPMkNDKtNTYe9uTGVL1xzB3mc55NH5RrQNEpQcWb4",
  "key11": "3k7QWoGb7K6QqGEMovjLdtK8c38bRrRkVZQuXedbzumvbm19BUoF6kmxWBMiUiMNVD2qG8AvRDkSHcyM7QgkpFVt",
  "key12": "4fkq9X14ye1Eps2UQKqdgpXhfVKuj7UVWTFgZz2KeVVnScvyJeAo5n67CgePK47hAPPR5Xzc64D6UbELAxzCRPgk",
  "key13": "26k1hrSkEwCTNG7G8o1zFW99dq6V76EpiT4iNFXcqM3nwmBpq4gFah6tMcmWe6om6zR33TcFRw7maPXoF5b983uK",
  "key14": "3eKCvkAd4qAT9HSL5ptUVBjVDLN3Jfd36o2YDvPRVs5DXJaJNForCL9QXXqV6UbmrFUreocbQKTp6Hp58C9ZZRaJ",
  "key15": "67nfEgiKKKwWXKkSxXFU4HSGcKA2Kz4UQcm1ApsTbYdCsYdpk95RUZqrWc61nFXr2fwLb3pcdU88udn2xvgr12V5",
  "key16": "81fsgFD6m2xdAtJ6thiAYQazbmeJUWS1PpYo83jqbev2HTETHFEwsocKpbMVEN5GoYx5F9fs1fLU7cMGMygzQhS",
  "key17": "3xrNHCVKdr3gGhtte6BfyB3B6NBF6RcABunBoRUGbokiMm2Y1tduwW4jzDF8FXF6xLmv4FuNrs1AD6Mjz8uL7sWs",
  "key18": "4DNPkjd9gcf3cjvzJ1XzGBMoeNXTavwiGwd67eoSRkCvcoY2uATbDK9KhhX68u8EYMTgAE8AULT2BG7GtMeKi5jE",
  "key19": "4eBVUY8NxnzQhtYjbxu3y7DDRxUgMwboCJbtRtpK2LRYqbLrLEKW6DSELFTAcKNH49YxMaxFXJtWZbwpRsv1qFd1",
  "key20": "2Y9eUJtR28Jty1VHrB9g4DeskQ6h8oJaYuH31ArWfencNFdfGAw7WH6F5R1pjSU3MoNzr6mLsLCTe1ov4a1qPUAw",
  "key21": "4uwCQcd77W6WHng8b3AFHMuVhjBaasmHU9bowxP3iTmVGxCJ7GLqRZrjqZSgpHwcSrGoPiWGQoiWETifwePeAwED",
  "key22": "5JUG3W6LC9uauERiHkmsxuibyNC1jUf8HPGPjyAX9x6dfwKWfwT4xrZnANbuHN4fTHsh8yw1QzmUvNP9D4mkxqdR",
  "key23": "5CVw3U6hSTbfFFQj3CYZxVKemZuJDB4nGZXPK9hgA82aevXpFav7NwE3f8J8uF1afHrFrv1MR8kso8YSoig2iNss",
  "key24": "2ySJCMW8fpiJKZa3wgBfPpJExXD9mQ4q48GXANDCWFYAFzU9XrUTus9qPiHKveYJiHRLtwE9ZoQVZCA6WJJ9zkdW",
  "key25": "MxvDJiD6d3De9eVjpRRmGn161efehU6yF3TWQJCFfrwPBfQppcU5XFDtRYL1zCesfL3wbCPCHWRPnHmsTNa6QVE",
  "key26": "4nk7HcsZ8gmguHxXEQa4fgXv1WyqtDgdj7ZY63vmqGNuqWpU77VCcpK1BJ683xhqAVWKcj6YwVrrpCj333uXQW8D",
  "key27": "5sx6KXbKpNZQoVQDAZ1HWD8EEhCzVNJXeqYyRQ7nSVMvdCTrP4McZ3nu6j4KwXaFxKYDauKxHHSo3vB6eFWKoH4p",
  "key28": "Bt4aQhkm771nnzASMoYZ9b7pivjRuMNS3jxGGKeAAzKVJFiP4J3hTNkqQMMTfLVt8GJAtSdFGRvSmPKie6nFW44",
  "key29": "4b2cS6bRLeUmCtamNybfTiWZr6HxxWGSTuB4F2X4DB7UnZHCV1uz94Wn98QtXbsDj4PaPeKM7K2WZVbdp6yoay9n",
  "key30": "jP1CrSTnmfGSHM6Zro7GnjyNDSj9JJfgQUXZ9bFjaioq3PStih6Wx5R98rH51pwysrvZWpPuyaj9czFQoMaheqN",
  "key31": "3ZnkcZkRECVRzmofeSorSwc4se7up5583rMJmNVwbwWTNt5JdY9vqsBymC2auvHdAFafjJTHJgWvkh9ieTTFziyL",
  "key32": "4oFNrXviHyZX1TfXuPVq7AghQ8nkBxgQwViPCxJosTg5XSkyZyDTUX5opvCSZJZSXWHZ7pwx646bE6kNZLPwpKTs",
  "key33": "3vYrsJTQwoV5zdKuSa2oJ7DQSCkDhuaAJhtugNVhQVXW3Ski8wFpww6SoZkvNBcroZwXdLwB7Uk4yCxjfV1FNrwY",
  "key34": "2KM9FNKfd8Fbq8hkVdRVHFtJNSVZbRhjPMEVYPxgK3P41Ywz7YeBqjJv3983bN8WBkxdzPDpYFvCTZWMbnfpqgz1",
  "key35": "2EKmtJFqhrRXrmY87cFc81JAtNMZ9ynhQ6STc9UFVjTfwSF1hXy4bfZWrPwQHnndT1eAGPFzjvnmqG7CTYvsuKNR",
  "key36": "4BV2MfdEMVCx66Ceqz2Qm9qwpvVdARz4g7WLiiWyDe3QkKEBqMyDVGPytV3kom2u7GGn34xYA69KrsHKFa5cKdkz",
  "key37": "2qCQWWQQKAw1GPhyBJ9z8mPuugJ5AN4MFmp2XZG3CpEZ5Gebtz49YvBgg3NWkGie6uPiqXdfc9AXxbcoj1psTr3x",
  "key38": "4cBPJkrUcT9bbKCLtGnkAR849Y377YPrgR4ggCnJoNJXP4qJnkcK9CXrqJimH2SRitcec9gDX7jPcNxikpr2msWv",
  "key39": "47LcbgqZ62p1sW9U2WAtQVwvQjzNWDxtpBkMZXCw2vsNBygYr3DkSvSL9C6FdqH2NQSTXGi9y2WxHRKWM7xDTFf7",
  "key40": "3JZgHEcKQVCHL2c1e39NCjbuC9imbmbFAdCBp5ExJQ8AZKE6E5185QywwDQwKs3M2jPepVoRAEtRAwpqGEsW8grS",
  "key41": "5utMsyvTTEpCvdH9feQUAwNeMNCfumR1xusADZZ56QdDpwBQrjCbH6ukDt3HTXLaosaKqRE6qg35FfdMwQ9T5vuU",
  "key42": "4Pev4eGQQU1EAHb2vbGTbR6nWHTxUoxueVQxXaxdwxTubxpkx2KxLQQquURW35hqyeG3PmAB7pjBVZFDxwXjzdzq",
  "key43": "5ZmwfBa15Dweq7oZfjJiPTcSR4CeMboWqhC5o6WADQodimGWimJz8eAD8QL978Kx7PEAEreaWn3tTwNFBaJQPtYQ",
  "key44": "4Ay1bucZaRYMH2G3tSXeH1R7srCoFaEf4kbKCVeVCjE9sdUSxg6zRXeFE5cMWuF4kFSDrEsw5nitodqUv4Wxzv3r",
  "key45": "RoZqU2prcbGwQCPMqSTAxYin8rJ5rFiXxTgNCLwHFHJ1VLt98eAcziw2H663a9T758rfi9g7tfhJf3maWoHC6Fp",
  "key46": "Puq1WJpzkZtRW4GRKxyQZ7LKbepJK8aaRCXfbcscpLe7N5S65AxZQywAsFYqxb3CYHsZrhHaXnWpWycp2Asexr1",
  "key47": "5HPUSwaPXjvXhJMDoAnP8SgtzWQ45CxyBMwms4zmJDec3ChWZuCGQQE431acjQPbE3jMCGi5b3xgoMTfXC5n7wEC",
  "key48": "pqbHMQcC7bFPRYqijPqunPfmZ9yiV95iU5HJpr5edXyfqAWNGed3xt91Y7mpPYZ3QPeASiAwH6bKBeG9daL7827",
  "key49": "22EmovGFeiyXRZrKuFm8pgQFTkDhgcdyanvq4rwE76sqf9MzWy3pnkR9qvgZJfxhbLWYYZzGRn2sdNx1RisvQB3b"
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
