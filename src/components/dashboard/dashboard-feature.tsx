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
    "2SPuumafNWe1Xr3xqUyDeLLfDpqodwrWcWouLWNvB1yfoNWyabXdC2nVtSWR9yXwGwbZoKiMc6vtw8XmadVg6EkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DmiKntDjZPNpZ6hqJkuHJrFZDPe1DDVJRk6jnt3kYmfPWxM82U4554mCamXGNe3FXhyiu2bonSeDcKTssnqBJwR",
  "key1": "54n666jWfv9c2C7xmKy3Jxyy17onVbUBsitmchRJVwKAhq1JbWEbtFdgDVvjTX8VnaxhoxnPz6jDCYjhSptsX4N3",
  "key2": "4pSbmTK4NqVCdnbQSA8d1kqFG7Ltb3exDjbaxTv89CfCyuQdEGbsr3JpXYtme76bszc8hc6TZKf2s4ySkcAk4TxL",
  "key3": "26PzyjvryXGebFpf6SR53dYXm6zptb4KXKMYY3fXwqaonHRFUQqG3mKtQzvvaz9J4J5S7TB16Pi1feubQVp353Hd",
  "key4": "5fiLsRv4kVd3YXe3taTnXZXaaRCaYyrnhYbuh9SAtYXrrJZcbE4qPYYNiUNzuAYgnU93yHYV9Dx9f5FAd3zcpmAr",
  "key5": "dTFD8t88Vm4jvzv6tjit7Ar4BqKKrPwTkXT4VTay4TKXnFTAUXuWU3vPM1UoGviiT4Ymjfb1JKc1dpo9kMSe1wz",
  "key6": "5VPa92KWXMb4ueT3ZRSRXpu6eyMGWB4YAjoqNT95tcdDaBrRnS9xrbG3escgPsq2W5YH6D8jY1rJTbz5ijtPhAv8",
  "key7": "4s2nnthrsXo5cdWWtaUQGg9hZ8kgmZubCmJ8xeSd9GJM2fUSPDeHN7hDYqRdxEYeEhjKFZmtRcdjQJwgHVGKy1Bx",
  "key8": "yiEeQgQxkwFQXjtefb8upYTuwyQuKWjvN13ZorjRUGXa2Gd3oiAutLxHcEKHSgS56XbfuV3Sqy7SdeJxAeFBx2Z",
  "key9": "5qJf53uDSuTJy6vseaJDgSmKrvqcyMiPayBPVwMGaDEjYJJ6iAu1Sa3A8VE8Q211jVwfXoc4XFAJ8E49e2rxruCt",
  "key10": "4NnWL845c8BVwHedQgQDb6YmTc6F46orad11yz3YpzSd9y2kbNbVHjXkkYNBk94v6gH5Gg9tutwu5vd1kM8ogRKs",
  "key11": "2XNxVrTHevSWidqgNKGHXYZ49Bnx6fTFoczY85SsYFR16BFNaxgHKZA92ZaVCXZMx9L4fZiScAYWAc2oGTtiKrrP",
  "key12": "4m8dzdPJHHmqu34NdmdUyDyCqKYegkR9XzwH24Dos4FviCfbhaCzNJXtu7RjnW97L8oCjNjeYrxXt6V2KBBNQiCG",
  "key13": "3mSBs9KMKgv3xo4X8TejUz47qDuaUikibnM8ZnC8RjJeFa5ScFGaDVKrZNideESbDJ7x8pm6xtWHzBJFJbmYNLoC",
  "key14": "3L4ZqfnRcn1RaKV8VQ5NMWTmGXb5Knq36oBWWRBp57dZjXGnMzfZS5YjdjbsetLx7vQWF4zsp9q6wkh494TiX4So",
  "key15": "2D2pjwWZKoR9TkvPFFcTdPyxUQ6xcyMTnnfAZQXkASPnjVif5GMdEKpGFrgkEKabL18WeYdjn57sPsWdyCeQT6Uj",
  "key16": "2ovwmHuyMEWkZjgNWs5evHjkWSBV8dVNww98Rbk7bKNUHEX87T9DXRv3pgZtnrmVhxXkLezvwoE1P9zQ99L2Xgex",
  "key17": "3ax8LPEEHdXgM4XQNrEoi4XKceNWCDW4Rya4696wJ5P5EunfQcyozuC1yMg3xCZeZxHJxYi9Vkd2743sF7kJkqrJ",
  "key18": "3BU6VCxwSga7GVc3WmNGto58PTKX9y4hA5dwfDwq8LPtMLAbKMMuZm4Eo1hX7ZZEXfUFQAgn5N9JbubTS1CYcB65",
  "key19": "2YgsRLnu2CX8Jxq1YsR94PwphbJ7Cuq71Fbq7j1VmEQDvBimEujhqHVpFB1Wf4zaN2hfHr6zGxBMyu81SKqK5QeR",
  "key20": "XRpddcDPMee1doW2tKTnm9zPrEsr533ngin2CABAUTHZR3L9dxHLD9Dbcd9NZJA1xoy8txhCEZq7zz4D2rgCa9X",
  "key21": "5TZe2BjRwvaZWZCBszRMP7bwAFRoo8JPMMeN8zTub9pici685xsvznjvMkbNyeKJV7Wa9nLS6Ht5FUZzNJdXU7z7",
  "key22": "631mSzvYqqbbaJoUu19DvoDucQzTg5qf5oduAQsSmjLEw3QXiWu8Nm3Fi9jmCdSg6gswvMRbaUE1pn2suXV3Ee1D",
  "key23": "s788Kf3TCiESEEFfRqHU21ABT8E7XYPKA7pdysTSSAWA9DpgGbEB7dM2vqJpgT4vSTieL3FF1dV6gCt1shfAWLa",
  "key24": "5Nd5REfTgWaEKJwvUdPJSjwg511EWw3rwXaDnVZg6RUUchGoUCNs5CtXP75VyL2sPiorsZoVYayDYANhHkibgaGx",
  "key25": "35zR6zwSTsX4GhFNogpyaQxGKq1tuFc6uow46U8p43dLoNmDuq5HXPuCmRMfEwofKdmktxCqp2TButHJfwwCDNrg",
  "key26": "4A5pxATnMY6d2Wh7Fug563Rxn5FHuTjoVtVjv4ea3A3cNWXLX8A53TgLRNXFa9MgiHZcXjD7GSTMhAgKeyuPfBQP",
  "key27": "2nmTFxz1NtDtyArN961DkG4S4hWtWd2pY3KgLYj8BTbfCkFSNBW2WSMjUrSJy5W49BVmdgjWP6DvDCTsSPi9KUdn",
  "key28": "2t4WvFFznuFN9k7H4UcjLLvCuCBKh4r8qfNYzE9EqJ8pVttWS8ddonkimA5P5n9vvQ7ez9jipX5ubwYhEswhGzRE",
  "key29": "2sc73KB1YukYLKJg6frdLexpnv7Qck9wafk7pFnuy8q2WM5Qzbov99bGS95sMVxJDvXAFis6NzMdMDrivQjPaneK",
  "key30": "4A48wT6h4hCneBEmoFiCUXwBxWaPyxgyAHftzRtV893N4RTE3iFMhvhxGHzsKDLaxZhUJSze3F5HZziJ7Q43UfrM",
  "key31": "4YGym64Bom4TYAunjrM43d8wGVfxdh9LFohAvRm26cHTsHgF23A6F4s874b3gM1icRytJmEghxYU6qgtTZkNQ45K",
  "key32": "5MFWZ1Cfb8wiXSfLwAj1361EbuMED5VH7nWVsvt9nQJNK6V3qcyupeUR1vuoL6skNwX5cHAjQgiCBYqXhskxuZ6i",
  "key33": "aUyPVn1h7453WLDgJGUb7FuDgYcPyBbXBFo3BY87bBF77Lg5wHBL3LQ36QsDGRitrDycBb1A1tMSs7upxjwd7ZU",
  "key34": "5CJkG6k9o4PUadUSv2fcbWuXWjxbV8r8iCveUyXh4kAJ58kMVdDwz6zfb4GwR5Z1PPWHA9a23VoRPxz2ke67Dxdx",
  "key35": "2LXxQk16AhBued2U5JW7TN98xxLZmJihVstK8mnNJcaUtzicF3X2Z7mRSmsV8xneSDaxd8sKKxST1voFbkkWGBbW",
  "key36": "4YESb4GZcCQFsJr4iqQiq9za9BrgyVkBk6puAfhy1MrDdZSwh3j7B7MJ8BANSSctXJdFTpsn2nww9G1NZ29wmdy4",
  "key37": "3XxxUxcYFdeLFA15nns3QrqCANVevi42qDgJGejQbZY5VG9EvoaDcH3N2TBd8kyXVJu98tYLcZD1w9MRaRst49jq",
  "key38": "3W92WoWfPXUbuZHcCBVU5C8kRC6kC5LJWxHw8ShHpkCGoYGFMNNXs6m33NEs29RfqFodxCNva6jkGem5fqnUNpDW",
  "key39": "3YXjUePgyLQ9y8Vo7RFnXmxMc3VdUvatepNCY6gm1DvApbDZaYGF2DHPkx4Fs7c4HoGqW4ETXUCJq8UgfGZjKcb1",
  "key40": "4kYorEu2sBw4fTt7ErcXsY4GgZMqeMeu3Sz3ujJ4gDD2WSWejbzsisogY58KeRYQtewadNPCMxEG2bdVYT13msDj"
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
