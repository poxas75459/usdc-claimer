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
    "2ipDaVd4x8T6s3MH8Pq13Ewpa4HEUYwXhjLyyrttd58mL97SMN9Y7NH4D2stqn5AQWNFr9cYuRmqN6acnYLBDn3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGc3qPEQq6CVzCKLAEbfKeDHGiN1fd9CDpjqgzsSRcuUCoER9tCuiU9ebXTnoxicTHi3ZzeqYi1Yg1sMSpvJJXh",
  "key1": "5TGYAcLqYvMDNRBxvzwr9odKjwis8A9UAZb3cfgbhinstXxGSrHZC816iiFA7zc6sbA9YMRaFoPrGFyDrf31chxf",
  "key2": "2WEChxdE8ijipV2twZcP3mE262HcRjPaEN9ZarsVNRJrQwCHDxHBgqsJ5JGwQoXpgdSUQ1uqMyuQgHr3BqoocZcS",
  "key3": "3smG3RYkJf6PctTobLoujxQo1Dg3BLq8jCLEv7gBfw74psKwAbFeuhKAxG5vT5gbfa3yj7RJNirKMDnxaVMgh26g",
  "key4": "244BNWbrtkcGH7zbX87oEEJHnRoejU1Uu3V3iJHtf44UasEezMoTYzYnz2A5LMWos79gLiKyFQAD2sknFL8KjcQp",
  "key5": "3NrxReHoHyyFEWBknJQV7aZnM5sJHqbRTKzcjt1b1f911qo1w1uzGaRc8EvTigmifEUvtA7EAfCY6qjdFq855dn1",
  "key6": "37iG8ezzDGQ24AkziXqWNnKqhv4YSfpPSh6jA9u4RD9LK5dJBfRujFq75huSJnYoNraTzJ3UfrU192M4wjELFvc4",
  "key7": "4gjQDGmUjtbKEEsHArztNXcKx1vQuocFzwnncBpm4ngo52MNHRdwuzuKrCD56YUTtMEufrfckGJG74UyXDBpkWkx",
  "key8": "4emEZeQqWhjqwrh7tYomzfgyNmsZyDJYnsH8npw3F7ogSGAMpEgHmVtqaskUgbdpTgoiXuwK6cTUs2B9L6trwXA6",
  "key9": "5HUxW8exZnat5tj7bvmp3TKACVkwqhy9p2esgdiAsszKsSLHvmENKwf2iTa9c8FW5zGgBSYvMchfPRsKQjgjxMGD",
  "key10": "4heXw5Ce2k5XRMZeTMXZSzNU4vA24vepWdpNeUgoAdQESY4kozLK5jRykNqhw44hPdB1WBt8dyQtVxTXhr4CVTcb",
  "key11": "4MRyhYmycnBGxRvrMLeVj2YL9jPAb6h6gjZMZkSEeKGzy4djFpzxYNqUgpa4ipVh3avFvRwNAbtQpvXD8KFWjNQg",
  "key12": "4FXQ6vuRMY49TGHrbgomFNGnWf6dfuGwySx5ipxY2BLKDLYcvg47gq1VPg1ycNVzua61JtqgSqdMkBALspQoDp7m",
  "key13": "2XdKV5pjjb4FZHjcrjnE5M6w1LNemgm1aTYm1aDtQWdhi83vMjq4z7MKBfV69dLuiKXo1frP4TChcdKQzp9mntzw",
  "key14": "5zTLAsGpFSSgpZqNPwZNCTJiE7MWXWp9tCUqzvXAT99LqR212is3Kudnh7mKXDef57V6sdTTXLDm9BimY6v1aZEe",
  "key15": "3am1ahUCAipM5r9Jp5FV43wJdY3cZ9VYytA2BBKV699VWLNBrBGzsGTd4J5HS8pEK7GKxzfuMvyRwE3TYxpJWUup",
  "key16": "57jHCNey1Zriq9Wc1CjT5RZ9ujtVaVcWumtqXiJtWFmzqUBju5KPaP23Sf9ViCodf7g7WKzPeGzwSFAthJqnNSRU",
  "key17": "zdnBrFJNgP7SEdgHGdkyDDrFk3Y6hLCwPh1wP94S2JdPZM4VqwGotYYXvzcvY5wUZsFVdN223VDVuJ2GMdK7no8",
  "key18": "2TYcHBXGeRmZmeLg5G1aNr3GnddpUDnoZvTq2eKZMQMPDLXqrwms6JpDVz9PVseNLzsJcymmhQz8ch76HJ6jxeuD",
  "key19": "W1qZqqBNN9d6ZDDQR8spR1pF8Zg63DA6NCnKu8gi51sRxQV5bNEJ7rJ5Rkfbzj78WsXUYTnGYKbWHjAWHh6BWGC",
  "key20": "4gQ2MgcaUX5HuWxnuVU4Z9Qz5BqurzTDUTvXJxPEMq7iwxCfQwwRxNbhMwVTrt6UYnYooB5QKkHXKTSjTkFLnVAu",
  "key21": "Cw8Mf8BStNBvmaEYeJwVjVxDCn2N2P162dQ6yRiXBX1mPDqvGQGHkAvvSNZHsg4essnrH6PbkBtg5NjqnakDmqg",
  "key22": "47zGXrXRkXY7QoD7o6zWHKrFJk8UBMCYRFdxS5GdGVhHPJehr1u1BhGzpZjRELa3W8cEKEpK95sBvjNqkXbkZA3",
  "key23": "2KQujorzC6uxdxmiBAFNBhzu8msYCyuPcRH1PkDWLvwSu9gY5fMLuUaQP3CDejEuXDN9qmBKP5LQY449HDrtUcyM",
  "key24": "3fbc1ZgDopb55rUEbYXEiNQLQpHSG4PiRuFbvXuZJfdvm7GR7q1djeanQsMRYQQXztwEsoCjHyFV3F7gRQkoEBfi",
  "key25": "4Zc6p6Kum9S6ZVv58XBooA7d23isEHyeXqX1J1BMJYCNQEqV9QjoSWgoZmwaSVccpEXxSBruc3ha4EggFw2GKX8",
  "key26": "4ZYc7buRG6r1h5kHii22nWbSPjcQZdm7Urf2N8mSM1dvxL3pZ46wuZ7fXBkw99by8gUcS8eHyP2txT4GfxodWTkc",
  "key27": "3q4HzUdtPhs49UuxeiLw4sJc6toJgDyS9hpypH8GbDy7VTofh69D2Amc3gMdbcBD4mC7UBu7WY1xpuurs2YXW3rN",
  "key28": "26s6WKncdWhTTZvxu6JoeZ78nzYd8dfvBM2S3L1KLW8BWEuoA4mrC3rAFU8X3FDQcFRhopJrEFUsDCNXwXGTLhin",
  "key29": "4vu9URJ1T833HskhRayoTmE5pUeaahMRYZKk2XdqXHF5JLzHidvxSi4dZ8Qmb53mXJuShqkca1khynGyhqTCfzcw",
  "key30": "42PfG7v7GPfooDPnaZ8jpGrMTDZd4XJL1edmz48he68gNEgQEfFMDdQ2drREGGriuxDi42GGmz41mFWTg4R1eHDd",
  "key31": "4yPHk5op2Q86qUz8F888FwzTMtuKDToL6vmMk8W3NYbBsvxJ688n5LD6CtTDkfCUtM7MaM8aqcNuHJSnJkWwJMNS",
  "key32": "3aNFTjCoUc3qtVYZYKGsiF5J66ukTiEot81TZnAvcyBVrCaqwMaLxsCWhJJdQtvnb7PC7QeUkgnwakmqhMyG7yX1",
  "key33": "TBgNrAySi1h4eKdFu4NZ5A7sGSnQg1qjY137y8A4g1rwxCD1upaLVCGD68zPQ6rPcdiKW6QYJvge4fePwBuhGfo",
  "key34": "3n9WUeMhi2ejmoC8SjxksxMVHYFZUF5LXeWURncktqfpkS8hViiM5pu6jcBjxaJhYiXC75sNZmV8v19jgc3mUxbZ",
  "key35": "3JdvLgr2a2raut8HVz7vRepMfqPNox75jzuaVuBs78awuxgNtTpVa8ZBudtZSDSJjmW92DFCwsdHpAfVGvbEzbiD",
  "key36": "4MSLMtx9DTjoLViEpxB99G4pBSQCms9h4nwpczXbYwVLARJwkHAyzSNL28XXJ9gqwPQ5quRr5TebgrcoHeLZXtEG",
  "key37": "37BwFpmBMxzmLdx5GNy6qkmHM88x3vuZbT8XMw5pcb645bG7WjGKeHN66tKXofXzvLUq6TtuzBwhpU7GXQrMm5Fk",
  "key38": "4t7bSEMyi6F3CLxnjBSAHsSAEJHxERrfZhQaHWEKt7hBgLDmKxzsN2VU4tF678G6tXPmndruKwSUpeuucvZK9UMG",
  "key39": "5R2bFWPa9YhnQPdxjXwEyF1pvw99ory2mqsktTGi4UWoMD59LUokTuydpYAaHMiyFEwXpEt1DSxwXQW1qcb166iC",
  "key40": "4wRfT8zWaWSJNQKcFMEzUiuDvtVr4HyC4Sje5ZimXqrnzsyc7iyeipTNw3ffkxFV23zCV8yuFjVvgrzYMeTrcpqC",
  "key41": "5RrPfSUGnTjbtDrv1Gky587UairsPEAUNMNkfqL981izQ9pWFD98SLQbS4Cz211KW94PRb9Ayx5BCJPyU6ehdCVh",
  "key42": "4PNtQrzS8EevVrp5xW6FhHbeSSBtJm54pXwXjvUd9M2pGQLGfbXPCSDyAbMPfD22QuFv7C5duziFVguC8rN9Wd9z",
  "key43": "5pHCeMVNgdfZFrtYusNo3iwbewmKFe1LMmvxpLjoi8nkXPKxULFXGcbEsCi4NqaqD5LnJ7fKMBoLxYYBKHzT9xsZ",
  "key44": "u5isK6uEnMnWZxonGZjpmSF8fqUrSadMhrtvqqjfL4pNfLjo9LYQpkNuS17fcSmGpMTpcM4iyjRzguCuVMZQ6V7",
  "key45": "swQ8XLvktGUvjfBf2uCiPSwfrq8uFgfE9kmYfykTMPE3vAnfJd3GQCAGesqfGrjwcc5SkemZbRyfUsA4G1fEAvu"
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
