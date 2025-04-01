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
    "Jzj5iiviPCV8dYxqmsBkBhwj9r141LwaZjtt4DxkKkPJkiBnQBTHfaBbHnPShM6WWvsGmQLHeG3HnkeuuKTrrTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QtzzEvUQdLTpbCyenzuG1yM8YbE69mbqMfNQXGrBpmVPtEw7jzrn3pWAR8ujQFP78vDidqwEPjpVcPLDWypkqVZ",
  "key1": "4wwe3LDpRuexgofCosuoHKnZWBFzzhFUGAsRHK3hc37kNh7pdjYNHZveHjQFRNLivbrv6JbP3C1ZHatVndSWHorT",
  "key2": "2nmTJA5VC9nqvbFAASjYL8e7WwnKug6wioxgZAYxTHnftquDJS91bVEhpTBWof1kYcDXMdSEZwca1ktUGby37r2v",
  "key3": "HFsNdFua68FJsceN5EaMBWJnmAgG97rGVWmmhovgU7evwsVtDvL2ZMuoJcTZMnHmC1S6tf4MSDGCKP5pr2S8Pgb",
  "key4": "wCiBzve5hBqTMLYAr6a9c7vgRxvF5LYS9moS7LKAPmrAjGkFemPSm8KapidCnGf3m2goeeHtJeoAy1RG1oKtU19",
  "key5": "5EZwqWBWMNeZHDoetAmSXanpfNjHiZU4Zs6z1EDL1GfuEWfxkdy9qrRW3oWG94VQAzWCnjNQoUmo5vCZsCdwAGPP",
  "key6": "3JVJ1uoscW4yjpWZAmzJ8ao4rta6NyAHZTsK9jBx8TNEf4s3vxLnXsumtc52aWRboXUjToqnhYBgaA8UpwXtyvSh",
  "key7": "3JSbDfi4QL92PsRRZZ1P5Wqb5zL7aysNCGYqf3knyqmUKGc3cKSNL6eqoMbMqZ5SepsbG5UEwdqaBBkSE86yK7CR",
  "key8": "8e27NxRfgepfmFXwxYzBWnGCPzun2ggMos4tvFM2zWhdeDhGvuu88g5DTUgM9PzGSmDjvLzX8CPBmLubvF6DjkR",
  "key9": "4XGZpoHSYeR7mnn3i58D4kGPv7ZWgpuCjT3Qj2wd1uEtxyjBDWiUSR8niLJdqJBtH1uFBkF2YZi4pesaPynTcxqe",
  "key10": "2LiHZTCqYWDtwMQgNYc6YGpe1HfjbwSbVLGVnqmNJp5jpRnT3VSyhrKTTbSVb1KhjMzs3iFhdQ7GDwbe2jzfNf97",
  "key11": "eFQght9diCRtskrJYG4PfjDdQWfQ4fmzR1prd4cwVtsPzmadvov5yWYt6exPLuNXtNPWs4wc2RgDk6Nv1iDsMib",
  "key12": "4WtfLWv8vMXmmiLYFoHzpQLbwfZNYBaTg4hL3CLwuBFzJQHz9R29tQDcH6NqfpYCwQtrheBdyReSP9NzXYj836gB",
  "key13": "3YqWVjafED5k6HCubFCo95MhVeztAHemtg4kqLjA9nbBZgfx7PpPwrLBfXaCsmf9PWhP1edQXjFgFPpv3NDGdq3j",
  "key14": "2ijPKEQoM2dba7r4GxqR38HuDRJGKzCPCGV3eEG7FcoVfZXAttRoRGKm23jrhS2imFRDS1xzUkap7mBmGxkPiQwr",
  "key15": "3P6mc7mH5mPskZ48mBFKgQB5uLxy8sMH8jpzCyC9df1DU7CNxb1Jq9U2EHyrdsAogD6TmrEmTY2BxfeochRmvSzg",
  "key16": "5CQpQtLQ33AWVBUtHam6LBzVZV5ETvogiEUmRUuVWVbdpcVdebD3DWJofM83NM2ZTKLbF3ytiHQ4mHs7SUCyHTCJ",
  "key17": "21nvJKmS26BpMfaWEV27Wcy66HryaJVAAXZzSjqpo8RrH6M7r9eH3CgskzngYxqKtoQWsSj1M7JQVRXZuHmiUueW",
  "key18": "RKkkAZkFaRBDevFqVyFcYnkDGsGy2Vxje5KjuAUCkEwHJJ6Jo67k3LD8rZ2V97wgDx4GKq8QFgd6XAKeqsC2Yt3",
  "key19": "4bipLtFAPmMBUia1mvNHKfsoJSoHLGxCSRxmApHKGkLJTMHxEgq5EP3MBWNkdjbdXXaRNwbwZXR3KoBexHhAXE85",
  "key20": "4AqFwuhN7krVEWF76qG21tUdmb2CBvPGFFoVX6dfLxpMwv9H8bitgXUufHHeCTBiotvPp8sFNm1cEuYd7KSeHXGQ",
  "key21": "36ibqA2Zf8Mbxex5J8ejVayBauFFmT1gQ1mMhS4TCmb4wTrV33D4TWMe8EiuwSsdr3UAFubfvMb5xxd5TtFpiNod",
  "key22": "5Mwa9NSAkCQDijVATYevSQXrb9yYWArFpXbEsiwphZAhMZgx7FUP59ikaf3ZaXnv3dSsGez7zVNg5b6bPbEgxiTM",
  "key23": "TGQMG44YTrn7wDx8bdGxmFDgDgER6Vy5Rsfd32vLmaQPHHErwwiVkavxauM5GxcAfhAEmoQGBNK5xc6VWbBKkaF",
  "key24": "5Te9bS1Th2NqPoTm1B3dQd8nLnKNY9gSRaGiZmntGsCHsQfto45RuDscgaPv3kLURG9cENR9oRhnvmVFFDSFkXn2",
  "key25": "3bdDwmPveCevToxM4y7c5nLsREVwgZqh7S7fdT5pEZhyfoZBx6Bsxi24QYBXNK8WUEXEhREzqYm2ajhjgRJH3eci",
  "key26": "2cFGqZBSgVrVNzLQZCyhUU7BvCvxjQ9JDTpoH3Pr5PLNKQfeUANkdHxYjV5oxqcEegyNmsuWZFYaUrwQphevYYxn",
  "key27": "3WZxda49qo9p95z2S9rZAeR8WHX9XcPaXRANqmiXrS1mvHH6Yv53GRJQ6XyyStFByYJMadgMSmqGa2wuY2WkqH8K",
  "key28": "vKC5CUxMrVTNMVUVJffv3UsSzCTtPe8oUJHK8Numo7rbDpdfzsShXNfuo3nR8PUamAspMGTFH7XJAecjdiYR9bf",
  "key29": "5Vc2dGEUoUcJRMZjvt7NAWj3tfpR13CuCAdZg9Ruaazg7s2b7VB8CFtzF4o9AFeThA8GjLte4n571cW3FCdrDJks",
  "key30": "bpb7ipXXLFzV5JeWpT5SoWaJMLVKtkwHSC3Z1WopbkDex8WjEbemEU5cRej5TzdMQ63xMCd8VzojMP4s7mqrWYt",
  "key31": "5zNNcXpXkgYc8XodywB9QuHeKvAwjfdVTzxy5kN8yNyfE1o58vCX2hMixnQ5cuxrcbs1RM6jZNZpZda16FRWrfDM",
  "key32": "56aikZyVeM867zTcfxD9TJeUHVbjnkFZdcApJnqLdPWtzhDdNGbd2e8ncViSE2m288P11pUHxu2TV8K99zcXTL7S",
  "key33": "5NgzR5Tq4eEfEsdjtfwkFv6yy9FriFztE1KsWouQUz6R8MF4qWLzhsPn75nS36wLp6kQRzewpGADKjULn3UepjCa",
  "key34": "2eexzFEycu9irTJqmfn22L8dhCCf5gNUGE87RAmHX7EQVZA7DqLZ5wXjAynCsvRvkj1yD1ZMz6d95vPA32gXLJVf",
  "key35": "3jZL7hYMFpxsjRY3Ruu9yb21h6JkdSXpKjGsRYG8VYwDvFzEuenE5JkcJNEvxDxDkmTcXT9bpANyzUhPELWFJdyN",
  "key36": "43NMdQtcJqJLF16Zb1RqPkHC8i2UDVqMt4sggxEEkoyCGZZFmBgVHRhRsToU97n8U1aC7xvuNzUrGe1hrLsL9Uyf",
  "key37": "3Bhv8cLMvJkHoyde6V9fV148LqZJhXFCaTgmSVzcR1RATrZWWpE1hE9kszQeZHa72Kk5oKxj1veBcPsLHdRsoxoE",
  "key38": "2T78QTeov3Ljcozx4KK57XKM2axynpxQaCqveCJiy6jZuFR8hpFp5gmMKaJ8K85zC6NF3L12dF1E4LGd65TsPYKp",
  "key39": "4fKEVnFRV4GFUvT1thdXF9BMzDMaXYq6zNpxX9tFVxmTUWKkvPxRFqjvXymps4B6pcU15iFWXQCcjaBJZMvndFsL",
  "key40": "5Ydg6to8NvRbicYk9yVj3CKGT7UufRDKbWzwB7Z8VkRKWVoHtk393vmYe5C1uVPPiqu4SSJPcG4SG88YXGtUubCN"
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
