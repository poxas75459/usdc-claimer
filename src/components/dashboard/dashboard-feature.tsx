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
    "5aAAxEg5UrVwUtwvmmS8kddpDthoTBFaKgumFPdaE1ZpdACRp2dy6Ffzh3HuNkhZsBx8TPpwkfVLvJ7gq79esqm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xQCr4DQ8GX7Eq1BEEjCkvjQ73uJSTT1ktjij2b9NQandZjo1RdrkLG2RS3PnHfbNgYumMLdrH1EAiaQvjf3Qq2r",
  "key1": "46q1jtgzy5MkjE2ZWTYJrS6Vwz63U5hraq7NWLt8RmuD9c1xgGq1P4e73byYgquyeBGRoGi4NAaurWbLaFuS7JgF",
  "key2": "4MFWEemVHCwTMUeBP4qUHoPNtUMUUk5hstZt3RpA5YuUnajNAz5MHqVthMqwRKp9sLoSG2bpZDCY54cd8N2V2jB4",
  "key3": "2mx6Xoki6onGLP8dgFiGRzGx5dvvvzAm7JuoVbjpbNeoCgtVC9jh3RWeFVp6EP2injaKJcuthT7mHk2ZMD2Aw4mZ",
  "key4": "3TsFQyN6V3W6fWi4ENKfVzgv5N4DjQvnHPkmrfVixsEqCx3NiLJzGDC4JQGEBvQvL4DW8vYpdFDXvVpmQSNNbEJ8",
  "key5": "4fKUs1SbY7esQLGeEyj8pd51D1ordVHLyzofFL6WGiZjNkq8R8CDiGezRgfQa2nG8Zugp62RVWSoWJ6n8PgSmu52",
  "key6": "xwdSdrfWswDH1rikBHY5ofaq82uydWp6orURbBhBUWJCaeA62qMkvXbZvR9yMgbaq5U7a6bEX1zzCve7yzeqWtP",
  "key7": "5k1HVJeGrMzMtzVibhuYWXEPP7SuYTK6dNuV5hhFMVHixiFLhnWWL2dUb8KiTGyweYNiy1gGryT2K7oLXK3fpa94",
  "key8": "2irhmDFpnzf7cR9miZ9W6S7oDywgSwQsxityz1J8n6ho4XV3ky9C9g3YBHPLKRyBjdbKG2dYLMfXRyLjQxXhR3Gf",
  "key9": "3Ny2AGHw4ZjogmfGXQHKRdWuk2jj1hikW13SxdoS5tV47cer8acpiDqey4neBhUCX2owZGMKbfquntTo4MeE27kr",
  "key10": "2AmwcdZ1sirfXagkvmg45znCkDownzifzr3agqJaWPKD7ULrHLnvrAbhdcULfL7LfKZGMCq1vgp6LXwfwA8nkkyZ",
  "key11": "22ZpCfMt8deh9vm8tWkvc1RhKwUUnSo36ZAo2WqJKHmp5xWr27mFw8MqkLH7FvBNE9EU8eFmdVmKzXsecmAcsXqQ",
  "key12": "2i7Ee51DdZsFw8uq5Me97QEvENTs73vB1PA8J4Jn1up7e6KzfNkydAUTzZ3dn36AkZfBHwj54Kc9HzcANsdvjEDt",
  "key13": "3m9Zzk7BRYVQeaYtKsrtJZWFJB9DfQmZxQz59acCJdKANAUfYD5E56GPpY3mvcHCPBrbxg39HeKEn2TNB5BaV8Pu",
  "key14": "4hRyPXn8buTQmtoVL9rb9rrknNSjkygHqyZx4VBYquTTiWKbqJbgmvBGWn65zjH2ZUHqrFZHBoiK8bLZ9aHRr923",
  "key15": "376wUFvcCTQWwB3ejTihpJvT1eR8WvVGgSovfhueFPGrAzNap7V62g3S7oM9AuCpc2MbvJdyWmD6e3iWLHtLGX9r",
  "key16": "2tByRSfQSbVxBSUjo9s4G1bd8v8FHCUpxc2m7M2WdvPnWSwA3pTXYjTF1TFRhvmNNq8g5dErvtiUrHZwtcevSRY",
  "key17": "2EG4vqRiHdVMpUTC1t2GA65df87Dthz4nNp1d6zty9t9uAmkP5VofdiFfvqs7AFbTvPSfdzWJnLcMoBLE1AGepue",
  "key18": "wTP9bz3yAA2Fbx4aDZgqHpCmMiGXq5W4M5cf5z3PSVbXQRgSsoA5L5veZtXKuzmvaYVPiPwrEYZ9o6y5nrKVzU7",
  "key19": "3u7uZPmJKnsC8KgFUECLz9g1bJeH1XdFEt95f7XYbhfJhfKHY9DErjd3aTWE1BusKakSQPA31ubumexrBLn8HbDc",
  "key20": "3dDvfTpT4kGLbC4goMppxvgxypbWQA6SLJtPV6TnmxL59WdbAkKxvFEgT39UrxSoyfk6UxgcKaqtRL4yBbrYejHm",
  "key21": "iHvZGmyzbiNjvG9skH5JE8oS2bvSor1wmUPPAkdBKv1JzA7uXuKYxdCM5AMzHN9vdEihD4DLwyCCvmsLotq1183",
  "key22": "Ln824dKqswKzpbD2xDPeZ6CdgcXvYrfEPF9N3M2UsTN7CXD2apFb9w8beSz9uv2yngwox2Q1bbbgSC7e8X2bKji",
  "key23": "LseWkh2SaaTb5NrSyEAJBsHQqpdDj4EHHyaQ8xo7aALCsnsXpr7oBWkGd6KT8GjqjYzQbUJ4sezm7eRAZnKdpeQ",
  "key24": "2De8RQDZVHb71oMPmQHeUGYgw46cKeyxsRqbk77H4vhLjSz5928bwtSnz9Zk1pumQJcYvZVpvkX1t28M1rRidZrs",
  "key25": "2hTELfS9twpqAgDkLKsRLvQAeNf6xfwMNUkmYpPXzXbJG9vqRkJwJxgxCPjtCbfnRbu2LjLJx1Ktx14dbvaJL5g",
  "key26": "2QJV6X7SBx1nghQEkfW9SJwo5MGpiDJYTivi24emQxVQSGcVaXugA4qTAX4Q2C9kdCMMes6Ga3NRgD7ogDqxaTvT",
  "key27": "4XmbJ9Lm38AdyGcUtHxdT3wZrYTKsKa4vxvdzdiEfn5SaPQcMYCQ6baAFiGvLopvPkLomoJ9a49sXqyvgDA4EytF",
  "key28": "645HSReZuP5RSdGKsZfghi41qBds8MhotCgxHGknBhJoMDJvj2KYNxmZjrTHVZtHVLvQwTVnTVEjhngzuBpb6NMe",
  "key29": "3MTbGLLf1FjrcShfGRByu794vNe5ceQF6q3rU7toaSStphAFVLdJzHHWfESUB88Je7Cf8LgdEZM26dVP9t8udXqp",
  "key30": "5aqLUAmvynbM6PJLePwctJwyR853MrGebKbyfqpd4GG28D2F8Vit5Px2Wcqry551f8YA8pUmaVVfbWxCEdog13p5",
  "key31": "5QJWj1LcHJCUyz9s4kEYqAyirF6X2tRBUNyrJ411W7Kj8DnzuePCMZW2H8pTDTXFi7pRW4NFHnhUS9ujvhT9hrhJ",
  "key32": "sDDoB79GaELPW2K6iM898coF92bvPGe91hrn6cmhVP11qhUELgpoTkWvS2ij4Tj33f77LHFLneSF3ZD6zAAnCtW",
  "key33": "3CxUfJic1WhLr1WgfhHbAjo7Zbt3zZfXPePqcs1PGvceFtKaze2eBdwZWJ6iuJiUfL3x63GNM6M9fXYyy5RmbzHf",
  "key34": "4HLefqguvC8JZ6BhUaLvpr9honVubymMmUqsC7US32Zmp8n85KPPg16U3JS1SUTxzXgTZYeNvBHF1QFpCfiAXMTv",
  "key35": "5muXVBL4NuvtzW6k9CQ85TwKcMh3VifLFUU6d9Qm3gjLm1n5jXvGHhLbDf8pvLft5JdpPFK9NuV3yk632QhAK1Ao",
  "key36": "3CSjd2EBSNTuJFKmg849KDi6ZLGjCQmJCwtsH4pxPMfiZ1bzFrrXe1wZ4giFQ4CciuP927SAc4KLq4pcD4wEaDrS",
  "key37": "2Vo6BNui6CRZV5Szc9Aij4gw81NQHntkUsLnrbK3DttkUrLHiH4bfstYu4acbGhZs1QaLazdDcJTDrYDBxjABSfR",
  "key38": "46a8KzJYDmFpJvCvTmKCAQFrM8keieEjxBtKmunECCs2w6VzugDyVfjCbPo31BVazvLgKBEDEAo4jV3LmK9jqNRd",
  "key39": "34ycUiShvQDSCM8YdBUH5ihwtXRARTbv3MPbtAmT1JnBnQvkxKbuGreZd1aayED7RHzoW4PsfE6sxt3N5VZ1xUkH",
  "key40": "2JRVCyg6tWEPcJQdnxUQ5mhxjeD985SFpAzgBTXNftG13e467DykGxWwv3oA5VeW7E8etZUk5sDKWFGz6JBkZVF9",
  "key41": "4m95xAyJnAviqMHVXDJZJA5VBuGZhQEhzwyv8Jxsu4X5jrv8oAYnSrY3881ue2842sLszgfGP93yNZd6T2qWrcGX",
  "key42": "2HjbXfSu1LCLTNKRvhh7NH5RjP6h9M3hgqaAW8hHkumLgW62e69vR1hm4csHSe93XsWscSZxWx1qX3e91tWpvP2v",
  "key43": "dEmFBn5RvBfe26ez3FrTQYNbAZZPKegGZDQ4thVp89yGitWJfBV7d5FJWanp8tyoy9eefvyTKUwUo29wuVY5oCP",
  "key44": "23fa3iKuztVHQxPUatQNPUnBiAdXxT5sLriu76vZTj8JNFXZHs6aax7goM8tMPPGsydFeNJzWJnAcK88kr8rdovg",
  "key45": "3dVeYv11s2HPkAwoVNMSMucXLFj9JZxMaXaiwy6NQwXvCkhBThB86391jP2hsxb2mXhyL4YD9xEeQyxo8aW9sNVf",
  "key46": "3YxQyeqFATAMdpuovCEj9YaLxi5E8arJoVHDoco7TeCm7nSLL3SaN1X7GGKEsK67LrRHiTZFMpa1oAXhNfDWM6z9",
  "key47": "3aQny2A5eSx2AM2pZvbG5Ne5qfHCJyHGwFZwYQEeFki9XpHpnjHobSN7ZtLjx8WbPubEgzhpnAcaSNQH992E6Ytt",
  "key48": "2VZ2fgJwbpoMBMaqAaKiPxtLDSdqDyzjA9NjPjy7YYn2VB5psEve1U3js2YGF95ENkZf3jL9t2WmrXQA8sn1Fmgz"
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
