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
    "4ByYqiESrQytMw6SG6gwPQcE3wXJhZTuj2o2UjZ3KHAVaM2TEAfAMWUXaPPWmQSWXGaYkJYRo1roE29t3rBmjfUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fdKa8Ra3ShVP7sgt3vbmcUivvLPSeNigp3Norg69zuX9GpRq4bgEjKYKtkuMnLEoeT6cFfCZ3TJhz1ZoiXmEwdY",
  "key1": "2wBaoJ2xbJGd7KkkMhJeCRMLAQkfLMY34yQy4j18R3LXy4uFqwnu1yAPwpU549EihmhX6gvwwz1HkQmmuPMKHZTq",
  "key2": "5d6wt7ktWwLkSA86tyUvV9eij7XrUszqdrGqbvyNQ6E6UDSEWi4ASdmzhUYyjS1YeHGv3Kuz9Pfde4QsCzxQDXRS",
  "key3": "4W1pjs2nHjVYkx1Xbgxc9VsiEaRmCe9u8x7EoFZzhyk4Ky7UbnZXCDDYPVeENiaeCPRxJyBUNAGdoDiKuFpthKB4",
  "key4": "4rqcTY2nKVC5SRph7TdN51sghdZRHqQZNma275WzMUPzx4GmaZ3ccFpA644U68QjrN2iCmkY2krqXeMoj83Y5V9w",
  "key5": "5dbcb1WySeuFvZdeQuQBiHqrNATuqtu8P3waYmVpaH6XuRCojNE6NUJpueDyyozNTiyi4q4dEUooXFWiNdM22b5h",
  "key6": "24oYro1p5sfrGbgFJAamd7MLSDkkEPwNeHm8rancVawpRVb7pQpkkjz8rwymEhkYthKPnWuDPi9cC6wgeJqSrFG2",
  "key7": "24LntPMn2fXEtuBwPVQXx9zBdhhwRX24JouqsRX5rKWpY5gdwmkq1arXw4gyJuHxqmLs8TzUbR87mqwKZGcdSBCc",
  "key8": "2H47922g9yP3Ym6pyVFuFW8ZYdnGqyurf7s1Rp2NkhoJZXbVGh4sCypXHSV3g7JM8uTXCS84endNJih2D1YRwvSW",
  "key9": "XQ3x1VV56s4YYJ9Lv2FaNErhuZNJKFyBm373B44y6rvJXCMumWv5xQmUWS57HbPRKrEJwie3puVvFUHrvzs1J6A",
  "key10": "4S5SPJSQdbDMfYm5gfbcPf2qRzs2wCLVmJPAToNxpSAMVbJPDMqq7BHDyvTr1HAFMsZiLZ6bhamTe6e4ZB9AEFN7",
  "key11": "2huuznA6MjhEhpwwUSnQLv6SPFNhykQq3vE7a9HyDRQmDt6j2fz7DvNdaiAyUGqPfgTADHpmDF4jxzXcwcsAe5Xo",
  "key12": "37C8HqUpXKTkZBFnYDF9vkhWpZRccb2WzYWeLZY7TnDoi5zPUShjzZLYGgA8X4MBpNgShgwp8xvp85hs4sKzeNCo",
  "key13": "4S9S3UeT5d4zVbZTarbSwm7xgXLVDYpkfvysUbxVVpjdfs4xGh7jzLr26urbxxT4ngVGiaCwVdaXvqjLgiuB5GQg",
  "key14": "5gNPpmXVWhCu6ueQjTXAHHExQ61KTGL4e69XUKnd6NqVd4c6y624SebV2MZSeNKVGeYJrAU5VYeyM27cB3Uc7Jnb",
  "key15": "5dCJWqZfHC98TGmRk7UfEvnjuNfA556EptNUhW9x7wfoAPmWp1773ygg7nDf13LSGVWUT8bEDuUAvNFi3rmyQmrt",
  "key16": "568FjUt89BN9SttPL2mTTPHAx5zRnWW8RsUEWjJcJgB3YKo7j9YJVQyaGSQnSxAmQFxvPNjMuVLsg8VQYERRKhrL",
  "key17": "jDt66YPCRyywQoUhxR7CneeiL3HWpTgGpZ9z4bDSEC3yKN6tNBBMDTA8LJFobmSiJ6guicnZSuzicxGR7xn57C8",
  "key18": "4gAUadmeRDiFnfNYauushCQ9SUrfFhy5kAvQUNCRwdQVXr7Qx1KcCX8CP6BYxjSP52vCCZrGeoUh65EYXf2Vj7go",
  "key19": "492L7JbNVzWBBFbHH4TFBEWf2tY29HqnXFy2dPKfpsAkfeS6pG8HiEY7FrzCLr9sVVkdfVdwwmqouQKyUniG7gcz",
  "key20": "5UK8DZF4YftXZ45f92XVke5KWyFF6ifkUMMT1fWo2iaacnszzVcZ9aWhGPGFeVpw6Xs8viMZMwDiWdKveNMi2NGA",
  "key21": "4TSca1QNmD2Pm9zXR7RLDxERjHqF81CAi2UoZaHEnxnDc7BXpTxHzaR89zKBsxKSo22H6s2QwwpZHr4yJhcF6NvG",
  "key22": "WWyqvbJCerXzTeXECczgsHLgZkYpx3ea88H2gv7xX8ejo135pLr9Cwg8azzFawjLQ72pMwvSaTgvTkf4azmgzCo",
  "key23": "5m7wQvVHPUFCEciWGYUshUEqNrgYri7YRCuLj8VnFUwhcWBWU3sjnRiT8ttGoRuaZpc3WzWCjGKs38hkKAHzBGEG",
  "key24": "4s9ZqM4XGsC2rjzsgM5NhRyDxWtau2RCEAKjkBbYjg1HBCrdabn1tmUmtmwix1EBozW2meCqFC3hAmZDRU8KabQy",
  "key25": "3KFwJhuzWZYTcV6Eg7CiNofRHz6gMT9LfxDzWNnKUXsFBAvKMZgjaoEtrgD2EFbq2BD2pPb9hvuDi7LvMTiMAUMc",
  "key26": "5j45oT37svQVCr3Ni1endTAGo8YiREsFhodybNZbmLZgoBKnJ3mp614Hc4ZGUiYhwNduYR5NL6Q232FRHd63wTke",
  "key27": "t8wHXtAszFYoGXdQK3ccXAUQp4e7L9qzN7fqGb7GMeFW5qM4wTaLJyPSfAZx97vvpb9knq9ChPchfzh4d5xmW12",
  "key28": "4PdtF8ETkKP5WtaJo6YUe5CxDQCS7xj18oUuEDHTi6urc9HLaC9pnNgFkBSHsYZJDLjgBnaQ2gnjMbo2VVViGXyn",
  "key29": "3z9GysM9VH8V4MrkFj6b5Xs9CaXQ6pYeEMx8Rm1bStntVHB9VsxNtaJun5LraNKqBaBNP38vGyBg4QkhWRtYpUxW",
  "key30": "bXdvHwWJ6Uk1rvdGexFUUXuR2YGjcr4PWaQ8S51WzibNvr4kDjMSnZNiPbouNRTScM5pZcRCrusdjhKxmQtzr5z",
  "key31": "4DsRFuJmLkVN5bukDrTRhPUpBjzNGDSF4JmeaTN5uEPyGk2NHzV2ZyqhpR9ZRwJumfchA3iogV8UZTq4BaCSHJzG",
  "key32": "3t3fY2Vkc1HbtV1L2idwNVaSrXrn7KDWRbeVuESRnknZRbdSVbLu8YERC6ntLXGBiCwR3zeQNb9jaBCVe49pkCG8",
  "key33": "4vcd11qWdrJpE66gMP9qiqWBTCsQSgW133X3eEucCL28rTJo31nPuuCvkXCsFku2kDGB9uM3PfTDXk6mZuKWeHxe",
  "key34": "3PyQKWEVpBK9V7nGH8EhgW9sumayYu1zdo5s8WBb8oUU5dEcgBX9n3umRCMqRPPeLQkqjm2nFqFrrF4LfHdumEjU",
  "key35": "2MhzVNoBFxZvQyzCKNGnCnajSfbpXJKkVhP8aJ96zN19bMbkbcEc4oAroHhUyT623tjqeYSLnRpEzEav5TbYdi88",
  "key36": "4pBhAqkADpFbxYkSEtoHHdrbFwwkSazox89dA9sdMRWJEYXpnUNmrthTTer5zaSEMm8thVbrmfLURivsinDZzacB",
  "key37": "LjADDL4VPdHL6dMiDzAtUwFwZ1GmiD72yzLwRGo9hHBRZfWHB3BxsmCar1SgyCZ7JJGdUqjeHHFx6yccGWxJ5fK"
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
