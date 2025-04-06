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
    "52zMAbH1YwjK2F4pQ31NcasrPG73BeY1nZMHtsiqjertGTpjYG3K5cWr66jzir3WJb85RPZt3x7DKuCb8HPzRJgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rJ5k9F6Dzp6D57VuvitR6rR1Etm5eh9uY3yFjEkPGvbYpf6W5k97F7TgZrPys5m5zPvaqW9P1eqwvwu559TbBUR",
  "key1": "niCv7yoehho5JCSBcVhBwKKrrgSu5XVJVFu4tXxsoyFGRTKWzwiT4tRrym9Q8SWvrKAJ6BiQHP6rZHFzmzFxjZX",
  "key2": "f5EceCisVSSxwFfojGwif6xLFd9BU9dWZXtYygFApwBT37KjBbiHxyj6zzZPe9D2mXscHqrdHbcTUn9JfiKm6Va",
  "key3": "5GW2uA8NZeDkro4decxeMsnkuXdANmpwK8ykmzECK2oMonfiBh7BygivSvFiYNACcD7gJnRLhaDJhHbXTF5CmmEK",
  "key4": "5rNzdaRHpT1UUxfAvLWtobiHwoUYCfRFmbqHdKZkWwDAJyY7DERjC23WTMaKFSR6p36WL8YUuJQ6ovCWZnBaeoNw",
  "key5": "bTQSsCEFsASA6hZr6pW29JZVzaiAoZSUfdPN8Con6dTmRqgv8DgsBBvPdfN31YmtpT3aHXDNynbZmAjDHB4ScRY",
  "key6": "Ab4bW8ck9Y3ScJ348PeHVyCT2NWk8K6cEB7vHvePbU2ErxcUdhvxqpMGzyNc5CaWMbobSBXiYYTXBK7WWoNHRqS",
  "key7": "Y7UweyMw7kY7PatN2Etc5HwK5YDi8tVErHKugVqXnst2a8QLxmSET3RvYwkPtDFhhW1xvSy8u92NcDRqUkxURXC",
  "key8": "3YB89HToTRDQ8qJ4G24rwtPW52cfbn3KPQJS8hNWCzrE747bbmiuH4fr432WTBTnDqEYym5XAWMiFitPimffy7Mr",
  "key9": "4vqRommPUApsRy8RfjVte7G8M67beuiMop8va6BVw2DV53JitBivveL2TthnWuCzgQT1HwWdTYwzf2v52QheR2dP",
  "key10": "KwguzCjvGE3bTB9rmwyZzwmVtn3y2ZL3TCPaMuFCoLxfPWi8WWH5WjJui5gZuF19PhuD3UkqCq6oyUgnciU8Rek",
  "key11": "5pSR1sNd8Yeq7ddX6UQWpPRjLySxpSnQ9B4BuC1f9mhbWSpvcPmjWrogDmyDQLYyfaiE8Gf3MHmujwXGeoT6kcpB",
  "key12": "3BBVdPTHE4ecMgW8BfLCeKSAqWz2eYS4ieCybhMDd6H3zMp59hQtSCyfVqFLQiPXfpyZqU5KszyBynWJsYiyaGFR",
  "key13": "4RRGa1LLeRrZeTEKWUs8dAYkk74GNXibWdFxnhDA5ikbGvVS1vNxa3GbRwgK33Zn7oSZ7rQtnxBoC9aoZGaapq5T",
  "key14": "3kpTWJZR8cmBSvFQQTwrfZNiVE16UetaUua64n19HmWWxJs7jerqbpjc2oyC6diD8MaCBFCv6xVsG2VaesuokrcU",
  "key15": "5d3eq3ZoFEHKZRS87YByMPjFfpK3apNGC2Ex9hR22aFbfBvQwbbx7W8mAhicUd9LFt8ngAeL323Ztz7AqbZLutTp",
  "key16": "2zeYLWaTokzMNqhXx3Tyk7E3WLy5rRacqo5AA4qs9wGX8y7kiwEaqT487oc7Ssp494b2d5ogksaiZMnh1MzDBT8F",
  "key17": "4jt2Y2hsGbf9uZYuKghYPBWbTAt6n4TaJeWxB6DhArZJb6fzmEMiEbetSgGBvKcAK11cHeVqbip6bDKWYU6HMmgd",
  "key18": "4KagZZRTyduNepheN247hiwi9USCv4LPrwQfPcCT5zPqKP7bHKtfSmnV4jVAuMjTcpvZVnavmYGSKCYCFT3E9Btp",
  "key19": "2oYDuCPTSQ6hh1Eu8gorswHwR9FDxUfLb4DqYBfNsVKNSEATVRMnQfejN7o681CCyyH6CHrFvPKxp4MzCDbHuiH",
  "key20": "4caJwuum8hoyeNSUVwAL6v4kGpbCwmjNJg4moqGkWSbxSsC4LTLqomGRQ5a2MXBhaW8WTyUan97VE3iuaVpEThEW",
  "key21": "uXSFRSyzttzisMJSf4SSRJJgdKaTaEQx71kttrWkMt831NLnzcrf1xUBixD9xLHettESQtFzknJ5C54B7KCfLeK",
  "key22": "4wV8XsDfRcZjefcimTmfHEEAM3xohoh76PwGAESmokiLR3wbmR3VC5ioF4sLaepN9br2x1NsyKNYx1BYoZWgbgxA",
  "key23": "29QUMxRT6hVaLzxh2X6XKaUUw7NdW8yX81qrFA8b3t7aJ6Mpuc8JFFxBWLd836fkF4gC2xDAq8nSfZ3subLNBa8a",
  "key24": "5WcBcHyDuXYwjG6bQo8KtmCh48MDB4LrAusNBgMUEuyS39Ko4cEsEtZhtnMNdM8LuKNR7s4yh3JAhQe9isxJKkC3",
  "key25": "4aYHHWQL7WztH78wKUEjdJHwdv5fhzSF2aSunCzMHysSbdWXqNSZKfVh3tp3DFoFhtKZpPNyakPfC4urb2vvh6nM",
  "key26": "3pc4ZtJ6PnC6PcuPo7jcsqbvvXykJeVaP6gU71riGTR1PPZV2wHSKpZKdTJK8w1z9RFQySq6CJfn7j7fxzftWbgA",
  "key27": "4CDyrRngXTXBE1MpUTiVp7WUCchiVkRBsqkVJ8Wo3thXhuDNYPyFVbCfEqYo81MyvNDdCxmFxUQEJ2LPoKNN814T",
  "key28": "5wUFJsK2mpmmWm9ePhQVnSscvxKm6UqwQTtT7AwgcitAo5xxpdQjrZNae56wGc6W5cH9tExsxCGQENNgjm7jdRPe",
  "key29": "4FHdEYj4FfCksqC3o8sikpuanez4pZyNXkq62BEYC2N9W9SPbZgeq6Dd8bNZXSEpz8XdaguF1hbcZFVmePx3em4d",
  "key30": "482bHAy85JTpkwTZhsZXc6Rw3j7Qu1fbD5x2mk7C85BfcJHf2BCTYE9AcEEJ5c4PZrnRa3JpuLyZTTiLhhUNoXSU",
  "key31": "46SUqQ5pzJ6urHXFRN79PuYTUMR81k8uTP2itvQiEkWJoREbRknpmAmej4kUXWwnVPsyM8NjXY7UiyeBGzZ4EPeB",
  "key32": "oa3DpadWXPTNZsZ1gN58z5NZp7S7b938n5vvitCa3hVxhob2JCjf3GfpXFYn3bTueJuqUwaFFMeR8qtUWHKa5hP",
  "key33": "5HMvQdz89PU2XGj96g3aXVD5AY1zksqgMAUvABByLFLXZ7aKpkHLCmFEwvWp1NadMUeuYz9SgXzF1Cbd6CrVHnen",
  "key34": "zhq6FKicdSPxr36NatebMw6VH2gyr6gDSSUKGjR2h6WqtJrKyMxZmSDrHTaeF1ScRBagGqckwHCT6C34GWXyefs",
  "key35": "8sArkvnd3tWbJz6k2J2g4roWDwz1rEgxs1QDYzbfTCzxtPsytfEWTpe9yRC2BuqZgESjK9J5KbwMs6CJnCa4vR6",
  "key36": "5QDMH52bquBtgxBFGd59tivyFs3dK2LW2q3t8SsjbfyyqaNFoUHD9VkW1hTubTJJkuDSFeUCv71fACBZG7BZRp17",
  "key37": "ZQCVmGW4kmfJby1P5th6Cf9p7kWngTZnniqFTnq9zp9wotYzRf1ZHnf3DPw2NxnUYuzMY7Hqw71KZKdXBQYtWQR",
  "key38": "2FGX2EhNviXW5gkGQojntGXdXi3JUz1jAjPQNnUHca7Vo1QwRE9iSjqisMxXAvuZgD2pgCRwyZuFRrQcN7v2wFom",
  "key39": "gnT1hN4TaHMYBcQmF81ScL4F3tZSoGyeDKFYWmMiq1Vy8ZNPBzMsupQxUtMP1YH91TLZJokjzi2r7Y5eUsiSYDJ",
  "key40": "2SZaVtTENen9pLr3KQz7Jr7RjcrxgGWnoNcbFaU7v16yv4PztXjrYv2xFnjyfDbe3LCSGavqu5c8o4LmoFSFBkF8",
  "key41": "2TgVDA8p4AzCEt8vRn7kPQQcGoTkHiz5bfAjVDxhDfnFCfhZPRUbrna7qie2HNyDyLHw1WuKpFtCL5v9uiADa3RM",
  "key42": "4WvRVmT61WXE6mqAQj6oJLT9ivFeyaxzYo2Wz8MGzWxJ4fhMYee6n3X5v7Hd38HbNaMyF9Mj4BNmTwkQvV2Eicrv"
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
