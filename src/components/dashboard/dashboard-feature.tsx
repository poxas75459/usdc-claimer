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
    "3Sw52Umtd7k52o5WFRDYpnWvrAbQjLKJr6hVB47YuUFouWfW8FEpE5qRbsXLrM5nvY9jmBFuo6traR7qpPYZWpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSDdiiXWPXHbekEf3U42ALFpzPErWDwYKuow6MjghjH9nfM985erLVKcVtKYdMHJkPGdAB1UFM4C4nHFzsUKccH",
  "key1": "2PbTi5ZKQJFPNR8c1ToX9z8YrexQriw6MpfK67r5WvFA24t15P3rEqm2zzPW7LRFPAREd6gdz2vB9qLQg9GnzXxG",
  "key2": "hFyVkbVaA9WJK23kaT5NKr5Dhx3dXAu2njDUDXo277spBwMfYaaC6VfrYhrQ8y8QU34M7Fwu9HJjFrEoz3kUHCN",
  "key3": "5D6tx13Fi3nXiNfG3HqccNeCfPYhg2BJ61RzarQ9Jwxj4CNTmSUozxNRH35VE2zAUPvCPxPv6W11R9XToq1dKf6",
  "key4": "4Py2NcHQdE7Gh6GfStKKAj7PqNRvRY7gUmDyc25K5b47dANtPSt6EkvAxaRa21jNf27gQokH5XtDAgUAJAxKZU25",
  "key5": "29d166pDRTzAiaYhXcuxy4Hy8LBHumK6BGuLrCfPoe6SipxTK8Mhqp67msnoNyXCBB5FHwwj5WwB12L6Gdmmkths",
  "key6": "vnXcnnt3PykMJifEY5byybvjej4Kn2RTRsuvcamggGAYunuT2wXZV3TAG1CvmmGDYxCQBpBTYtEzchD1eio49qc",
  "key7": "3PgQXperRhVqQ961CNgwHD4rLiAyC7dMU8ZcsawEa8zJmaX2pLBiM9Yhq2LHibimcABkhqei9xhVr1CXGSVu8j3S",
  "key8": "ZtazMkCtHyNdn55ZkNfY6FC3yp5aTcsWJaaXWHp9WLM1ovZh49tvTj7wexjycbKQ7mNgUCQNAazC3iXwZiDJ2qK",
  "key9": "BG28K1YYf1nFAcZaci5MZVEAJstcU6xnFTbjBscLGh4UYW5k34UHK6sMmJ2dzDEr4M6CB7iuQgTWrv3RJW1ut6U",
  "key10": "BkuMKkGPHSom926bU7Mxoj7SM8pmJuMmRkgdtLMTHWY4J9AYjMSbq2uCGbXyQHgp1mf5a2gqwKjPxdGNEayr3AL",
  "key11": "46xe44wtE6deXatUKY6juP1HptoydXoktWEWjFXQqZTXWBErb1peL8E1Yy9iuqNoXj2CryZTu5yTnfdZC9Yg35F4",
  "key12": "Lw2eAC4BfXLvadoQTFE9gDhYuCpNeURNM7PEniDHLmFThu5YroSugHHmz42935chwNpb4RusjHZyeyrxJ5wU3F3",
  "key13": "3kAiT9Cj3g9hi3k3e8DqmgQVRoefVaCTvXyWTwZbA65j2j9DBhRR2Rm5Sy1hJ1TA7ECcy74wpQrSfKwfUvd6Cjay",
  "key14": "n88wLbGN6pdoWfUmJcDzX4o7XxumF5w7j4kbGSayqAVDY86RDn3ufjtLW9J9MDsajbp2TJEduzwNcZkN7xr8P76",
  "key15": "36E1YbtgYosbecKKVwniaqrFpJjUDhiyieuSAyFE92MqogzGALs32ErqLBeyjoTeUCTBbGjDaov65uaNRzrXVs5A",
  "key16": "38JZgZ9v1Sna7toUSTkjT3WDnjworfsCpAPVuoF6HeyX74Xp3bRjAkP4XNYFAbfx4aAUoVhXZPUNdNLPDPy93kLY",
  "key17": "2mcyRMFhzoY7oBfSC7K89u2HAqYy5qoSAzmc3BvjxEknsR8cN7HZQHbbP7mBrBVWvHQhy9zroowtnEDL8gnfCPiY",
  "key18": "5tpDAEBrVGRXrGFFbWufSUdp1576vQCoS4DD6T8RS6JiVUhF6Rp2KJZPBzAUdEs1Ve4mn83swGxRNyW52JSG2ii2",
  "key19": "25eSgjE3857PYBypTWvJUeLJXzs1gxTeFdhVVrzhdjFsqfdSPJKZ6hjM778jzztL3HWpCBPiELZ818s7Bm4AFfiD",
  "key20": "24MPr1W5CeY3H9xyCnXThTBcEDc9i9fX8a5waQHrFfHTKQ8fosSGbfh2ae3LB4SioLX3cRuG23EshvzVnTeSMzhQ",
  "key21": "288VF7wtrJRa4NakELnnwtFxpj3eiwZiZJDXAUiH9mcrUM98z9YtgTyQVLtUYi5xQpRpRGJARNf4mTc16RsdcJU7",
  "key22": "3sV7TwJW5iG79WjcduUyp8LgsW3AntwGy9Rk7L9ttsKY6edKm7QocA1FrYEKueJvo4JaAspdp19gAkmW2cEmGwqS",
  "key23": "4Xp9zALMRwmHujYcCrkS1Cy8259JDaRSmqv6pTft9iCiXeSMqGp6n4wriveP6UX2VmtAQP6j4tTge2Bv8p2zhfrW",
  "key24": "2wMWgKFd5KTqjZpf7kf5Ghfr6v8PzyFF1EgJeaSzmGELqHKDewmrPNhuda2ea5EZPyK1UrYGLX1P2q6TmXdpK9dB",
  "key25": "5KzEPkcVDZ6iQTwuq17JY1EicMxhbDyUJ3G1XZUdVCPDWk5auKWE966n1ZgEGfcqBBLwFiXdnUeiafLXoYFBBDY6",
  "key26": "2xJCWFTWaChrx8A6iCshKf8KZEMcz4j3GSmcqodjCEyabo2zDkRfUxWsMBmpy29p6nwVJuWCikZXPXHm7yzGyWmK",
  "key27": "2M3DmUg4dntqsfKgLkz7nQQx1zMAUcSChGhCKJyAbqoeR679SvsPdbQT7Ygmj7qJXY5asEyVFb2es3QtHqyoHXkB",
  "key28": "4oxJZa69qXEePbtqmDvfoJG4rHENj84im9Vd9hcVpdUEuc3VP9BtAgdsYLw8Jj6T17r91UpfbtY7FDeNZHR4qX5v",
  "key29": "4hDxt3BAbj6bXWZF3f11GYtJLPcyqLeoDYYfR5Bct4oPesVReZeBbRverRrgUqReshkeR1W1ftqqSvyXwMEb6kev",
  "key30": "5dGKSYGXSDzD6eoszNV7v7br7o93KR1aosmkEpQ2S896mJW3YzQodchmex57YTDQNJLYEQpTYLn9ofq5qqHLh8ks",
  "key31": "3CEsL3a4YGjyYXUYP1r5Xbr2cR9RAwviW74Z9Nfbnp9vPMh8R8wmSzsR4iML2nbgxn26AfDMNu3WQwLDHgL7xTeD",
  "key32": "ZTVKcLuUczPY3dq5TH5U1YSgHQWmbvd2Ck6wnqf8exbT5g4dDwjDbGBzw7fxHaCp33DSabuuB9mDe3RhTUBLaQs",
  "key33": "2i33KtqacoxEcUWdHfGme3g1B78F6QeZY4C4dtLPoLSdtaHGZrX19S4Uw457XnkqDWWFDN2WDoXnmpHdCTmW8ZdC",
  "key34": "3jMs9FdRLQMVfuXuTqRpgCLTCqHtkXVEpB3XUH7SU4pFdAFPPg8hLxk1c3HZjsNWMgMGcT5Q7qUdDQrJHSgSNwN",
  "key35": "iWvPdkuGY6z2xwLnckYJmkgs5HdST5zX4qNBjLGCfgDdJmDoqRHnMec1bLhtJwBEmNPcwGGHHK3W8MgtZQGQvNF",
  "key36": "4x7KJKjMKEURFJTFocrf5LP8SGUHT5fUhLT2RqAfvL3DuPdjzdyrYTJgxgwAPx2y5fVUJ7xVaLD9kcqMbqu8uNSX",
  "key37": "5gmq4PBHkUzz7J3RXCrRACPQGrbTAdrz7NM7QiJESMHDbPm9rUr9Q3z1AMunvt8fuMUSs8j5CVfZ9KTakfHvsrjT",
  "key38": "5UCnC9nW7MNX1My2xAcDSB1Ws2P3LmV3HgeLqEPJXWUgm1j1YxtimBgxtEL1DFtDMXbC6RDyfAa4YKK6wE3gGGvZ"
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
