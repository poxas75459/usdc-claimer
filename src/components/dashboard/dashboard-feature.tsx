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
    "3bk5mMRtH1mVMKpKaBCNP1d9NU4coJknghfxngM4zdY8UJmDV7Y8Uit2jheRihLARQpzzQcD5L7iAVDkMFYen57o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rTsjrySkmEDZHqHoP7oWVwMqjBpDwgJh6de8iZsMpydQFRy1GXH5Rx5j5oxtofqsCTDnsUHDKFaXPVTMYnzJHEH",
  "key1": "2PfvdRVMyPWXaQQ1kPkZupGDUui6jr4iWT8t8NDckzjdzH5GLbeqMf2BwYRQ6qoXPUZMN8vkw8B5edGXj2aET4rz",
  "key2": "4KWrUjYZ19U8mHCUv4RkQjAKCyhwe8GBua95fM5arUX1NLPeHG8SdJJFJ1g194YcUz7DXWzQezo8bbofD2LYmyxT",
  "key3": "4qbWhGLupuxbcMXumMRfddPX4NZinjH1vSGWspZn31t8Tx6RE7tRWLHCfZG1EvNFrBsYGzBxWcPaG8iC39FBDPbL",
  "key4": "PwNtmwRos2vkGVoLhtk6mroPdfv26njdSQ2Rnvi4wc2PLBVgNZ4hRng3DL3R4jfStKv4AUs6ob4vBsks8ZmbAVF",
  "key5": "3ThU4wHue7T3YKhjJPxdM1KFjTRnjk5wibACsn4b5oBeoxdCRJWqAozbjnBMnxMbVCJZVqXLnWpUzy56En2jEDrN",
  "key6": "4i2m8aoVnfNejxUy8LCFdVgo5pEZh72R9XFDSUHtVqfeX462TAt279HDZhBdKWWdcy23bidvdLF3bNxWQXGesU5M",
  "key7": "2weEFdPfYB3osE77rzdemgp32w4pEy4LZRYA6PUACNQAFa36LgbcZAeq6qmqUXc7R38i3TGjTBLwpUJ4r9Yx8393",
  "key8": "UE2NiQW4qQCfWdBL6V9P4AAooypfrg3ZFx1YfcihNfYF2hd1SBgkCnzoqDgm73P2NYicKGu3Xp8jbEdhwmfAzoy",
  "key9": "3UDRgSJadVxi1sqnTG9qkx2dqgLwbkU5Hce2irk8m6aSCLT5CB2fyjQNKjh4EQR9Q9X7Qi6dg4GqBFbAySAh1qZt",
  "key10": "2hmQAUJMtpX3Bhk5AZSpcD77ofR112YzQTD7rStP2ZPP472CAEVeKKXMCUfUsrEwwUw4xXNjCcdQHmRys63eWwd3",
  "key11": "5JuKNyJVfpB4rEfVRFwarrsyVVYcwFHWs37254GTFLwWYoSFyhd9d5cajnyA6GjHg7dw6Zs9HUGo1i5DwMwmJYEw",
  "key12": "7FPuhGLQ1EaMuUKgymT2vBNg8MTcEFf1WH6V7M8w5iTwTHVGMnTdnP7gqPLxTQVAs3L6v1ex8pkbJBxL7LWuEiJ",
  "key13": "3EpfaywUoMsKz3hk5v999TVjqZVGUUR8amMNzBDngzqz91hfqh5VhjSLzwR8haR8QeAu6z5oU4CoHjD7R3Jm9Tdr",
  "key14": "yUfB7pmRvG8RuauiuR9Tdui2u1AZXPHZV38dgGAySv7CDicgyJBWdtbPDdbS2ayv88xhd1obbarzm5rWVTtjQZs",
  "key15": "4YQSQszzpTqbcoTsPbWDvWGBMJAtepUBgkuoGAiz7xXYcDktLimfrhLbzPwsbpV2AWFyAJ2k3FGjVvn4rVCeNwmR",
  "key16": "5ZwCVbNAyvaC2PCVF78Rpd7mPrZ82cWQKhHpTn1AzGUNj9tCANEzhbWikXDqEnLi66p4JQ8UHKewZQ5WY638BY4X",
  "key17": "3srirXShZ2XJsDoeZZpemGYKBwH462AeEgaBZM6pLkyRz8fuNyW3ix6oP4u5kvMSfnoTjeqkS6HviTv8jdXhpJXC",
  "key18": "4sXjqjr7oPkMBuLCbs2CnexNkkFjeZrUhXRSyY5S5ovUa25bs85cXpKsBAhs6VLiWumFk327PnhKbwWBvZNrd8sL",
  "key19": "5Der5CoFawKEJJoKfZQ3bxWKuXvnGWMBGhNzqcFnEwgT3CiGFxSyy8dFqin8g3eTzir6pVPgmDixyAc7V2EXRkTi",
  "key20": "VDNKEY9MZLKvRbuF8XNMVa1E9jzbyQgsp9SuunvzMdtm5fwJ8LyUX17SF2FfopfdjLDkZyVH9pdotEozHYcNnvA",
  "key21": "VtLM52YnwBc7i3HFUXhv2rcJEu5yagX3dY8E9HGJzpQiH5zT14CdZRmAHwTnEsQhcr6jFFAkt61TSyhfXazEZ1H",
  "key22": "5VjECt6rqaniBfBXFSVstRvjAnza5CwajtNgaibYS8PFU94QEamKLoexzgi1QQ8SnoWf3S5NrXVBDV6wyBNXRa2N",
  "key23": "n1bE1kGhUqEjMCHk5cEHBi1KZkXC1Gh6cEX6CjEbb27QNqY8xKZU27HwkY7MDDGNsov4ueXv8p8dmNCLDr2jqjF",
  "key24": "5HRmXYVSLoUfhp5ShJEykXBndM28LuAEqitKDLuX8ZUivbsZqGJnDjMGap7eCKz4yikKcRCndCDqHunukj8tnWwe",
  "key25": "3K8a1NJXR4kkFqwrYs48SBw4vUkFSJed7tGnV8kgDFpbY37ob6kxUtFiV5jv3jXc4Ef3cH8f9s4KC19UmwL7AXAT",
  "key26": "4ta4e6z8GKy7eXMWuYWDRuKdRBr2cz3uPx3cqYDLwSdXVJdNBYEzv7ckSD6XQK1MAEgW2dSgGsjEMwj9pZe3xy6j",
  "key27": "3qhNpxprvQxoxWeVCpPDAUaF9BJeQFGihBVYXmDXxM97awfiH7gbT566UiAwk1QqZV5zivNZZH7aQogWRusbY8Ls"
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
