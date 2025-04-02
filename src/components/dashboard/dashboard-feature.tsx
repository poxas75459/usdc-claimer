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
    "4HRDsfr2BHKMDszdvjX3tt3kkTe7QEx2ToHyB8qFTa8H8ULZf3W2QV9tdi3Vn7Tjd9mQAsE8XJNyGNmXU3536cy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h3X6bZq49qeLLkFm5sbMDVP6dXL5kaX1x9Q67HDfEuRDiFtSF5eQZg1pEc4zbtyWhGoXXCt9RC6Tkeo1Xj2c1oC",
  "key1": "4GtkgLEQwgKdCcS2UShpwL5Siwd3UvZ4Y7zTEHHKcPLE78YyWkq6D3YJPHNRQyHGGger2BPBKFxHx4YBseaqZfy5",
  "key2": "5v2tqzYHvda9q8vNkcLrBgigKSRNeNhpxNaEqDojWDxcJqNm3GTdW6vUMHVDP6Lq171ZTByJBvhDu2VWR3kfDxiP",
  "key3": "yNEwViKvmik3FWYzLYQR4vdnrdLxrPuzVob6Ebuy4MU6Kx49FtwhmpwK4XJqmLGkigL7uUvAbzHteo1iw4h9GoV",
  "key4": "5LHmKRjEpi8BVgk79jK9ZZRS5R8WztpPqnAU7eZFphdf3udfizKoic1T6kwDwvCe88DiNecT3yFdz9NES1MrcErQ",
  "key5": "4S8K7LuULDeXP9qB1vz52b1y7SC2XiRS4NwPrm8ASpfJipr3idC88fTNFk9p1NErGLpf7Xt9KuD12N8b6NiBQ7po",
  "key6": "wKVrGG5Aq3nSHtZEJ6kBn217nPphBPzGckcBzpGRZDvv1cLmqPTinkcunoy72m6TK9aGtufjjFuJSXkMA7To4Zz",
  "key7": "KpvokP8tgwkAza3b19rG75DHgBeTnhs4QAghom5nFAxVPmm52ivFFwFATDaQ8i3ozeB1XHY518rDBDZnXf5V967",
  "key8": "4ftFQkDqzCQZNETLR6MnA35TUhDHrKKQypTcnDtbE4rpft2SoZDvubGr3XUgDpnndF6Bp5YfyFkGodTLHD9Yvr4C",
  "key9": "4bgaPw93mFtfVR7kgJZ9ixAfjgLypZTsDniFL7BQ1qMCJgAWxtYPoBcS38t3W5spg3XTRxWCgGgVZqs3o3uVVke",
  "key10": "2XrXAhf7Q3cWVF7pj8gY3rk5hbuJyHVCmGonCB4nM2NFinCjGCwFG3HDbZkz5K4sLTfB97Rs9Y6bwj4CWkKkkYNR",
  "key11": "53XqKqE25Hf7cmqf7rNsRhgdZ8pHU1vns9h1Z2yyEhgmn3As8gFYoe4UaoReCtVARyoPmVtbE9NgRST8cw5HVJkn",
  "key12": "3NKUN2bGvUH2pksxr1ZFVgeAnMP2WyXtcDQoTB2NjpjEzKfshWExaYDyeSmuV8se1GtshApQKZG3sJpn45esLFRF",
  "key13": "4JC7xkAtDsg4hq36AcsjpeXXnbCkLEuRJpR9GZTLL7EU6VpdG5jSAtGUFgR3grq46fAv2GyhTqKoh8URn8dDr6hg",
  "key14": "4z6NcApADveN5KvZruKmyyaNB4zrrk2XXygvc7brGM79G6VDnnsmzyRfmacu4BL8c4VA7VmcKysWE4hPYRYwZqcb",
  "key15": "4ZYHcuyyXS5kLwNcYP6ZMKuopSZosxRfSSzFc1NH9ovX3AVr3XcVcvqNbZnmHRupf1gq1MqGNKmkAbWvjydMj8dS",
  "key16": "5UB8wKUqp5eY521SWtK9rkpykr6H2Xjui8pkGCGvPG2uoVgTDV2eM6p6Q98AG5xG543LLmAhH7oREhkighC5WWM6",
  "key17": "5CdLitav63kUaB4dxpNBC1UStkVSReKYvKg69i7DidVPJY869GJE9LoF8nHoMegqSwD7ZK6UNsxiPPVjPZQzJGzH",
  "key18": "dtee7v8mH8utLRNeXf4xE7mY6P8SKJ7EYAssX8hXzXKkQv3dTaAwkB96MjXkqy5qkvrWYz1nahvhseXqN7cKrx1",
  "key19": "4sVPkPpD4r3Zb4Y3KLNS9CzV6a8W2uh6Uj4iDFMwg4XWHMkNbXBbYHvgs5EqvqSqH9oX9Vgfera5waj95ZqoB9Fw",
  "key20": "2S4w5yhGro3RhHLQRECFfNEPoULpHYFLkzhJn9uqbyeLw2Ra8NghKjocSNqwkSJGqkbCTmMyUx1WQetjo9hfHfZ2",
  "key21": "2fxF6eG71UTcxaD4nm5MkSTadGwyNhBqmwsQE9TLXBLCJu27dZVRoEjxTYenvLmzvPxFCVco4NYJvXSbtkAybyGn",
  "key22": "4cv4yoQGiSMqboRqvvnX9RJwrHww65AqYW6SPozEjbnuwDD3YoNC3koHsVs9TKaqNZTPx1UGXzgpJqGuAcug2KJW",
  "key23": "5pJWnkKjAGKmCCypUReBJnRojZWgF8x7USbFd7m3cfKdowUViaTZbtKAX8VKU9jzz2Rtnb4ZCPfzJrRp4hr5PDY",
  "key24": "3QeRj6eK81rUmyZ4TnpPo8zpGKeVyQNXyUbrekRHeoQiC8RiHTwkGuWiZU3LbUKBLiWaEKBsLWR3FHZ8Da11E5Sq",
  "key25": "2dFEDuPX37DZFaxtHUgR2S8aU8cN1Lfp3ACmC6BJBRhWkkB17mP8HNSSu2c3GHgaHvg7KUwXVSSv3MWCq4Ti9UdY",
  "key26": "y88baXhVLSMnhSEppq5TiPSTP23D6bkmevUEANWDWoWqQjr7ByECxpQKuZdZiaNiFMGKRX4rSfqqb3sr8YftoWx",
  "key27": "2zBd1DGPQzfFedgB3cZrJ1KawqDpTRdy3fALH98UgCXfFt9ynkS9nFsznA3hGTqTbdMRBBkjD5KanCj6dEaSgnEC",
  "key28": "2fsPAN75dMtY581eYZceN9WAaUUcVKhfjGfMfjjc1aBUvQcca8uTB9KTu6JK9UhrpUB1v9b7684NtwVij8bNk6sZ",
  "key29": "47bpakMptdkd2YLxq5W7WRFARG9dLSQmyzt536WRDjcQQoCQTJ4iZUEWfpy23oyFt5d4eBwVFEdfp9cWy73VumDx",
  "key30": "5sX6heskxa7M7Zmz5fkSsQ4QRiMHYXGjKgovrM9xLzUXJZkYzoYyavX28iUM9vLf1FG4wgexq4F8Thw9WafP5Vpb",
  "key31": "2k34fBqiatocKzteNTqVLZoxUwQhhmNXS8aB39moUEhUVZQ2sXBqicnKD7Vir7qSoBEVpvT1fmx334Cy5ZjVor5U",
  "key32": "5ZanKGQrFwwrDvasfpzuRAccTHnLzjMMHnkgx1wLsYao9bpRUH9WA9pnP2BP1fcNuwwcYcLyygTkMwErHdFuTq3i",
  "key33": "ogYgjVyhmFXBYZkaHUQQTkCUoqHbSZRHb64QpXBvwX7ymLH4qjJjwnmFjAgGQtZ6VxhrKycWvfdXxjj3QAkBsF3",
  "key34": "3w211rmLskoPy4nAxtfaxu8T4vvDkniiaX2dzgNSww9dDGwdUpi7rWKDyAeAC5Rqo3iJ9AoJSoxKpkwLVCgeAZEP",
  "key35": "2Ww1P7HWH4msFaB8UmbmCajLScBXJ4HAXfPy7j178feptijT81aTnANX1LQwrcJ6sj4jTpQBiAmVskLF7J3Z33yD",
  "key36": "5FEEwfs4GowmzFT3fg4Jw1UphQMrqpb3FvDQtSfcZ6HcPYRVceCcRxKNmfehBg6fKvyjfqqGXc8p9TabgEwbv1Pz",
  "key37": "67VFCDXZKQZgYvCiAynWaSV8tRzqwA9MBJJiYvNCp87ftD8viBEB7YdLWkmwSqZecpRc2moztiV9SstqPq914fE3",
  "key38": "5SnLW8VgeNyJ2jFgF82fsA94vx8VJWkrVJnXtP6nnEmSMxAU9fzbvYrhLUwv1srZyPLQWYmjZsbkmjGrNutHegR1",
  "key39": "XzMD6PtQTfpNPWF3rC56AqhpfzobwEQLYxFQnYsKaVnxTNkaPrBC4WQbbY96rnpjsVAZC3php1wU9hegT5PJxi7",
  "key40": "64J7UANEdhoVtMpsd9J3LKo2AF6Hjz2kQWGYAetQ9LmGiVQUtfSnSBwgMUFRZFaAPVzngxjh6VBsHzPda8o5wpe9"
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
