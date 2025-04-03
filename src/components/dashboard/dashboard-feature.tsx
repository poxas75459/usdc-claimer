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
    "cgZXathWoVKA19veTuwxLVaDWnxJiPxXXc9HxpM9FvQe9uXFvp5y7dsEYuDnPjURnRLGvdEy8PGN79eUjbSCxsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hHZYm9mkeR2R5imaJmGbL7kjpTvQmQdhPEEcyN8GrBEg21UfZ3E9kqamV2eELvpkpGuiLuNj57JZopPBr6fChfi",
  "key1": "5RaddJ5skr6UipJcUS37KTrJipm3dvQg67EPidPvoDWKk7wK7jDQugDxW3HQ9Qm9M3PLr12e4uS7PNPqA7pi9d7M",
  "key2": "2tcaW9qy5Y2hDbURyr7dxobKx9hPPVJ4UzzySuVFqAxEckfK9TRnBaCds831xka5zZDhBBi9HyxLVZCmbDPmw3Cj",
  "key3": "596qQZJ1naGouaruN7vFwswnW5UNEj4FPAkLSookh7Xvh5Tw2mVZtB1xkbQrjkhzHP6nR9ppMFyBJafn6p61vijM",
  "key4": "vG5XpjpN8viHvCSDLvZEpeKHNUGPzQLkTu2A7d9LZ9NM8hEFWTYTRmZn17M1HkjNfYWUWL7tpJGy6jaD2Q3DLr2",
  "key5": "3hN5GcUXohN41rNffEQbjy3mfhN2Xraiv24gUEfrJKEmYZfWx7kC38DmUW8H6PBuGfqxWAEY7r1nvcdfENMoyScv",
  "key6": "25KDbVNXVQQF21ThTSzHuUmE9AqKMBFB49pH2nysG5ntj2zwTHyMigRqKvjMhWxrmRgFMXy8WvAX4AnX6UegaG6p",
  "key7": "618KtEVhsoynjV5DdKzeLeZyUUJm5M5vZGGrYaHJ82n6S4GKJA8T18K1FPh6MGpvbwBYCZUURcedc9W8vrYvQkFA",
  "key8": "4mhgksZ3QPUwMgSheszc1XdjHCxvnFx7RmMcsBGBhURHryYAbSzp9t9E2mmfeQSY9CYPVLYMYeYJ6VfrZRz6CMXR",
  "key9": "5pgLJJUBiNKA3eWd1sY3EerkbGLSqE81m2PNPKHirmoVFnmUydEsVDRaghoEVt83eRCfXKXiUs2G51Rm5yE14qu5",
  "key10": "3JsnNkbppyhcHs1WiunEsLD4HGyegxg2fC2CJ6aquTC8ibz5Hv1kyXuZiunEVWyLkiWVmajcD4ZLRjBLR2p315ii",
  "key11": "4sKCP8466vxKVrPxzLYZVYP1FjoeXsSHmCb5XHEWmcZZVdtP6Ui6mWJMQeW4VzR61YetzoUsAeHfLHMZuR5Zihmm",
  "key12": "37uQ9ddi3szJDdMqnoEkXT8p4NCi5d5WVYYAorkbrVFxMBsBPb97DwNASn7tsri9yBWYMXpgKyfbKtyMuNPNJZZx",
  "key13": "ooo1YQsxYdqrhnpgoKGb1zDRUJpbDj5PcZb4Z9S9MinpKeyLpExS8tbEZM8qdMVtwTBXrvBgsFH8da7FYSnvo3y",
  "key14": "Jo2FWzM1C4Dj1bUmKhXeoLAvaKSVYixjq1ow4Mn7WCpGxDb8Vya9H6oJxoacwzwNSnx9SkVpkpi2rhrbw3KdHpS",
  "key15": "52fKsQ66M9WETNDwyGyx4MMBTeAkv4Npb8sUvZdtf4ijWd1YKYhVbwxa4BRMe3VMUgzYocKFp2rv9sK1wFjDvLjC",
  "key16": "3ckciuRohEmqrkQVx2Y9CZnt1BzN6eLvfHd6SrSTrz623sBaFW5XfQSpNMbV26ztxhGKWKBUsJjws2Z7cGPcWpRW",
  "key17": "2pXkf6dhd8WYquHKmSfexghYNQpDRxcEvSyNVkN4LtfdS1FqEgWJN9YpQ8kSpXgUDjxSa6mBaWEy899EpmGgwza6",
  "key18": "2RJio3AqH2Pr3bdeR8i2dM3ibYN9tv7mbUKevLpdxNXNSD8vasCn9eqA9G1Q3qTti4bvPqLWEv2HhvfEyNWqQqQe",
  "key19": "4qvpUs74SiWDCCrjGsdjaZsAR9LtkQmtNdSusymBmqcS7HXAXx8Mry5hZSqvfdL5fP77ib4axjx541YVA3g2Zhwe",
  "key20": "3KPj8MQu95yWR82aKEQ1o6AqdUYRi7DokYPc33cM6hYmCD5K5BiKiSs9AM9gDvUqrkRAPCSWPfez2sSMeWwYMdtD",
  "key21": "44XBRnLMBSxr4P5LWokeQF7QehLKXC3xoopeqv2qNyUH8ZEwiGhh7WM7GaBkGnVPH3yyFBFPQPU4kSn9Thmx1J1d",
  "key22": "3e1k47FS83YzMpoPyUvC5vJ41i5pdW9We8NRYdkjgTmMrYvCAH6kt3jK1dkHArNYp3qccwg8EWVBh8W21GuEbtG6",
  "key23": "4EjZyMr6rzSUvyiabn4PuSYkkbo8YvGxq83pw3qTnRMcXTUHwURxUSMttKUh26TQ1SexvDBtavX3WKcy59m3Fk6i",
  "key24": "2nWPfLsBg4rjP3vJY5w9zL623GTkGzooFTWGwYvQYKDLutfLKgsMQoF6ahXNvTM6r2a4Kqd4G4FDniLRbGjknKT",
  "key25": "3UVQfRct3M9g1BY5aQv565fuf55XzyxWrE7R6y63HvTrh8hkEa1P8oG4rAyZgQm1QeGtMyRiz1sfke97vpxPZoh6",
  "key26": "498i8JPrmugbJPBaBMtrNany5CksZZYkVSPU5dLDBR4PmTPvJutcDxYzq2fZSD7EvWmx2d8waoJGcREfVJWtH41n",
  "key27": "3vVdBK38MdM2jgRnrJAwu2eFM6bjqupF4S1JAx87L5h66BQ24ZQv2duGhaubf9LbKY6ZJfqL5EBti492xMfZbKLt",
  "key28": "3hkQM5dm1Ghcm18sue2prx8wzgPJ7APoDfKvYALurfNuZTpb1pNR8euCuFgVPZ8yjbS7nvsceaAuouaQzp6qnVzH",
  "key29": "3MnsuDkk64dswCR5m8wHFkedzES227r7Z7Chwvbp1vLj7yrTpqdjhdgjwFrTgozcShdFKdKqhMF4hKx2h2ruzeXb",
  "key30": "t3KrTnXbK3rDDsmKsNJR85XEePKzZoDeX4MZWyHwcdJ6nqsgzDKyeNm3KL9mWxJWHd5y2oRXsgiWeCKsPjzY4oX",
  "key31": "5kedWkjrjJ3wAzRmjS1HLPn5n7V4zkjqcEkF9koABZSqKnYNkR4HdnjVbXvakDKm4SCgoU7Z4V5mchUhJmbr83D6",
  "key32": "27tzpxkA91ujAKVG8kZVQRjXk3VdZY9tGvCiVMwq8cZB6kHtu58VwTyCdaaejt6YyPa9P2vd5jWho11THqQ6arUL",
  "key33": "4Vut7aYJRH5u1KA4LwuEVDhjUUBFXQxDeujxdxUqfZpBP2MAitsDj47v3drv7bAvHLj6NgfJXaNzoZVhtkXHDPdn",
  "key34": "5XVEdFnGSQQQCyB4M2Wqnsodst3CWwJUKQKB3iq4G3HfeyKgZDPLM6qVy4gSzpGP1MTkkdgMe1LfLS2ZkfuFCHPk",
  "key35": "cF1DKTkrGDMgnNqGKrjc84Ak2bHEsD2wkmWq5f6RiMGEwVRoveibJrkLRQt9jQ3sRmDqVJs2bC1qFgLUZBWBWFz",
  "key36": "2PtoXKh9tmzimoSHG4oLEf2vMRuMpFHn9zKJH5Z7voDTD8KAtVfnZB4WkUHXfHzRWXZzjEbZiPm1VAvgokn1ftR",
  "key37": "5pSpMnPF3T6LVGpkpuiLiuurJihq9PCrzbKAM673LqKgTSuKKPNTStqSv2hWHisQMGYVJZub65zVEbEBswyiJjUE",
  "key38": "rs5kVREKnuveL18FHq3cYvPpeiJ6EhcjVk34eTnFgdb6o7xHd4mqrPvx5e2gehYDW6AhU3B7BbQxmRKZXRxNUij",
  "key39": "378y7iYrweQ5YJ9omHmv5HjCFWqGeddW1jitDqAfTE2hdNP4hWp58bdKgDMUKwnChzGu81Vv9G6NBseKtHuQERwe",
  "key40": "2hJ1UCXPddY2rdWAZhoPCFBp57h1Zm9w65ieStrEZCEgMyUYMyUG7tsPCf6hHZCBbHe3j7mzEUEGwWT5Z7n8QMjX",
  "key41": "EXMkSqSnWTqvzayC6Toy2whkugbRmYxFRqfTxjhQBk7rMSQ4QZPF5RGZLWQ9WrtGP52CRdCujATTZwiTxayw4ey",
  "key42": "kYpXNjbcj1WisREmcZJS5vozGmT25Vj3FabUNixtjh1YZMEPfAK4kMPnXrFRrKv5QkSkhYba8gwxJQQ1BdJn265",
  "key43": "3z3evFtBXK7JLDhMsc5m9Dv74hh4kPCb8CMeofa9pJ4rx1CnxoEQXc26KiakemZcVoTX61Ud3dpQuFYjykQazr1Q",
  "key44": "4pMQYQwgoEFtbW2p4hr1yNBYjYSC4xpo9YL3NBnqcjxKPrWanpx7d3pJu8a2QKgKoNbCpMZZAnmR14EtALcDKmMk",
  "key45": "43yB9Yzr1jXxmaky6rBDJip6bxT4dPUdnCFdR7oDFinch8keLJ41FtEg6pubiBA4STZhiLx4zBvWSfpo2w7EBj6m"
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
