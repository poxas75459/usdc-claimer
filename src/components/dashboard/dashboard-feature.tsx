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
    "5rTNAbqaJ8ohwEeenLWXG9NnJ1v2Posm6CBJFBqNKuvuYp6NJLaueVotqfMHNYkP1C9bpa2weazmQLSpEzD2qK2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "512PD5pUR9SMqHLNN9CViMfw1cJv1GcgwpTwsuKmoTD3gdVGsneUmEDNgDozpXpSkzrgrgU1p3S687MSiSjyF73N",
  "key1": "3TWA2Av7ytWpHeTQBkqAyqhLsRRwK5vsS4axFvcdLNyYbNu5VPY6DxqnZJ62RnhPiq2p6WSGWp1CSqQBL4TzjKnc",
  "key2": "4sRyv5bHZYTpoy4aG4Aoc1SX3td89GWNyh39x1XPrL8pefbD7BR3JrdZMXJ2e9UgpaPRgzaBExPL6LmzwuVxpbpv",
  "key3": "5APJrFhCKAwtW4RbEd1sXVSbtPMtQMgcNLz9p8krC6t7xhdCjcVWXZxTGbT4jb1kJHny9v2Ldab7zZGPNPGqnwYY",
  "key4": "5kr2wY6TeXHwzH3SbYRx274NHuL2NFtcYevRorbv8gfwMesFyoWA6QcjNCMqQbMxEuSasBzbcBsJYNskmb9FMUXM",
  "key5": "67TBUrWGihNb1bFszYqhX1s54c6FUC269o35RDxLXqC6piq1TpZYCZ81VCqp6nm7AiHRj9D9n6v7afVtMwpnnZ1e",
  "key6": "5F2UtuKAQQWGNy6V7Lugo7uzbLn6Hp9jUXXjHJA2hcm18jri34465G5yhpsTjfrSkt1JYVFhJBMH6qZkupLb9SR3",
  "key7": "3LX46P9ohi4cfH1ZUdAnuTero8624n7LSZM16xykZvjNLQ6MeypTcSYdFbTHyQUGrSpCxNuf7JTZ2JsFMaz8ww1v",
  "key8": "5gvVen967vhaei9guJ4QHs44D6un4RM5pYwrZ2iayZuoUiCjFRVcijRVoPe3xT9CeYdB6TaPSvdKx7WAFL5kmZqu",
  "key9": "F49JNq3EASWLFkea4vdCedBz3VQjSExtgxsfaNLUgXu8fCN1p7J5KgHBv3WSu3BxTgZwGwwSe9zis4725PAXbX5",
  "key10": "2yqntJja5bQSniXsyu1C4udAUgU3er5TcDbudzkUQSxZUo5Jm6oarPaRM5LARvU8wPficDif4F5F75FfsJAkkm3q",
  "key11": "NrS9iePbPT2rLR8TBaSPgz9ihnKrYNYzcwtD8YVnsKX8uUSm7WttCZtWscjEuvDpPpjREjK9dVR7QEVrLFa3H1z",
  "key12": "LJ8M8JuUgNFCYHe7cNHW9CtSEvboC28Hrtad3bt7x1oyY6UawQQ1FiMjry9qTf5AUKU112Aa1fEuMwgxBk8BLR7",
  "key13": "23TeGxZTi6oXuoXV12fsrcr3riPQNWtCky2kADKB9rtyvEYPFUHVmGgJ3XpzQHd81SuDLQYZpUT3KhdBPk7TFHDV",
  "key14": "2eHpKsnLgBrRAsEdrbHFfkkxaNJsYgUcdwgh9CxuGCygDGJhnLzBvwsw4yhXuYAVpWhenTKcCT9wGUtVzP348irA",
  "key15": "4P5RRLXd7vA2RBkSe2KESTttA5qqU2JdheaMXsHcG24bS6f2VpyDdn17Z4JLiJ1AmTscxPuLDdyy8ZVA4zCjpcXb",
  "key16": "f3Lu2ezYkeZSAmUbR6RhfZeMZZ6rmgE652hVcyokEnzn5wg2kw31g5h6EVSZsRktu4bNw6JTCXUTRievEaNfaTS",
  "key17": "5i9kv5HisrNWyk2f4bdaXWeXnGLYBxsgTbrtxuZoLWmBhviP7QSgCAWk1pHw1jqwj434CgGhxcNxxDqp1edWtww3",
  "key18": "uhUhY5GF7eAGhk6DWspNGfryJxr6HfwcsRNFrJzL54NzxKwNajjWBKkwMtVi3gjruQCTtbCyAMhtQp7SKZd92yN",
  "key19": "qBeaXHgVCg3JCcSgpKndzRo7NkpXZrT83dH1uN6v6uBm8XyXioC5aqc2vH2NgixqTJkuFp1u8ae48gvpLdWHveM",
  "key20": "99ak2JbvmcopCG9j7oBfQsoWjMzSnvjwG3AfX3SbddFqAX8vhSFkEBR2ScVrzQDdqcp5pcVJKaRBfn2V8V3TWmw",
  "key21": "3cfujribV92bHDammAFAds2VWupTnoUPvMihk7gZohnyvL9gSyeYZW4s63HvQ8zhs88RkyW8VQARwCSqjn1YctjP",
  "key22": "4nRAzVVCrHgCHsdn5dZJVu5LzrWnWk22xbCK7onu523cQ3RY51f2cjLVJ4f16utugwXRPCkQenhi8q9hNKpr9Eig",
  "key23": "5XoqBqR2NdcqLzbYELJcNHCdjXJW5JNihLjd2gaw49ny2bGpo3R7shjdo22wQf5eZMgsmZ5ua6Aibfg9CBVNUR6B",
  "key24": "2pQWzPENSSu4muKJZ8jSLWBzTnmpDnYfM2HHXNtATP84qtHu34EweFbeQkSNN6UCamc49pn3DP19g94v6BpDYsuz",
  "key25": "3ukr5NTRGf11j39DJ5D8okoBDqWRdjyNUFFdEb6CtnCoFgTTSC57WDE5xwGZufRt5mQsgG4kRRqD2LuM2scqRt2i",
  "key26": "3EnccxHgY8zLo6j5HZwG7KRiikWyzQUzLRXwtEk5oW7DT11NgaNB9dvvk6hppD5nhpyLZhvNTjSFm5fzD6QoB4a3",
  "key27": "5vJw3QWfrZCmSevqKzexoyBkPF9ytVxaP2vaQvga953m6eFTNC5v6EWNnwJwhqS48csrbuMz1yLAo4doiTv5xPqa",
  "key28": "6Ngr8J3f9nBZ5ogiivzSyJo5eeWe2r4qWXrA5Rvf6xxtKfHvrSCCoiF7QERkQjeQu4ho4ZiyiVywgc3E7oxkRVr",
  "key29": "tANEDyXBEm2A5KbivnENUFQ4xhykyfzGyeMAXFXSHqLKzmUuMbgAfgfBAovUz33Fx7CDCaa8HNxiLFA6YNDx76f",
  "key30": "4arijkX9dzrX3uRA88fUnVxa9mssQiRRxwAgEV1fbDzxcnYxJNAF6xK2qNhnnGpx7QeeEsmsTcQJ8G7SzbzfdNAC",
  "key31": "2c4pE9mqKXxdZg33FxC1nHXK7n9EtaxgnCxeshWRV3oPGHUjQF7zW1cBrPKtDK6ZrjvBU1iz6wNEtAbUVN7He1ug",
  "key32": "5xqpjBg1gBHKkoyed47Ev9RBhxQvaK7co6UdH1jm356R2k2yw1geAJ9anTGSAn6eMn6bRbwbDmbbcUohtdsC5ht2",
  "key33": "8UFhKG29mJ6xxUcdswrbHodfGXB9mVax6y77meApXj7XGF2UQHKT2su2keVu61CatuLwzguCUViLCLRgtjWNvvw",
  "key34": "5nAbtjGvbCi2iEHaoCwYbMKFj5JrCJDpwRdBE1tZHNQxLev4P3dPVayjyuofzmDorDmQ2ZvUvo5EYQwSrSvr2sQE",
  "key35": "5N8ZyeXVhvXsnewJQ1XUzgBgmcHBh7fg8pvgzUZZmBs8xAM6SNyAzYki9apJQ3qSTeQTCqAYe3RgaFGYnLngEFrH",
  "key36": "37o6aoZJDQ3XbxMyecDw3Zggr8juYV5ReQbPq6ugY5PUoFVi43pFGrS7nEgEJcDWzvsNHb5rSoYNeegW4re4GNwk",
  "key37": "jEoabA7S85Se48RZ2DWuYpR7bF1EHMYvyMuRdNbnht8N59X1zDh1FtxwJvpCBrxmDdFhCk9YhmUGeUBhVzpLopa",
  "key38": "5UcN73cCeF61XwNSdvuoKMwb6jNgCjFgcTZkU6o24aJCGTxep6zgXeL15yi4iqzfgFgyVFya8ASVFd3XPdJE2Rs1",
  "key39": "2p7kJAUrmiHzcTNiJ9Y9cjncCwDCJYHYWD9CDx4FRa56Co5KdZxobFxzcjLf9oBTseTSMUWBw3kFxqymtHahuWVf",
  "key40": "rRD6PuP24Vv7WvBDvV29PuUhnSU8irJpFKLjZKNryW4rZwzyvA5UpUGvVFp7eEtrZgjv9DfRuMW9izvZJZURWB1",
  "key41": "5qGsnarrvv2asocDFFjmWa3wysYo6z7hKEUcU1j9xHKVS2hzmaW38Gcq8DqdvdCEZMMd1Kaz6Lhz5HAA8bpM2PT9",
  "key42": "5Sp48wdeT1cUhYd7hnkGXJHAU6jeY3rh9ZWHRLttoEsYSbcCeHprrp16XPYgJ6LgyAbWk5E3WTVL3ej2sxqagiVT",
  "key43": "2iTcLqEnCNvRJ9TZqWp9pqesRQ2gyuHSab2c2htD4PTLW4Sbgj92zDwhCaySbq3vDva44ZAHEZxKT6ryGNSrP1Pe",
  "key44": "4DVZuTsXsVdbkqbj6gsTaZSiifnrxvjfpVncsrHr1xNbciz7UCVyYX77uTsGiS3r4zgsrEUPXh5YK5PCEVwiAc44",
  "key45": "5UhrWBgMjrrrRv3Bw9xkdX4hm5U9Rs1WtbXcqvrN7xwStYsE1KhJbj6ihBZupJvsC6y1TDrHQrZcCMwQVwENxvYX",
  "key46": "4rfdEcV17JtiZQMmNnoxWaBEpXknmoLMQVi6kM6zQEgJDNSRjNJQYvVdHdej4fMPbuPBTCVPDUD64GAV8AmrQSHc",
  "key47": "3qUQxuXb4oqrWNYY6jpqRHVrZ4Q38PZtFf8Fp2bN8FK15jp7rpwvcyYux45k8MzHu1yeSU2fny11AywJu7Ngfaz2",
  "key48": "31mmupDnHCkjYDTKnY9mZdA2VhALZgErbA76T8WufncW9Y5kFGW4pZJSoCBkxaPpgSjxTLqn5d7Q543KFkhAfQDr"
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
