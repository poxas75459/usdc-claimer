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
    "2i4XiqpwfeSPp265eLktZhiKL8a4bfyNxeC1n8zZAcSpreCD6Wni3Vn4aemem91N8g6ohhgwqyjYA79bSMf7HCnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTMuGVbX96Uuzpv8MrWRnHZQ9bwQNxQ3BxvQ2aA3agYkEbEAyRcho76nThpnwgqWDRi4gnAko3CMCdGR3VH2FMM",
  "key1": "4E6DGk87auV4rbNDT5Mv4KwSuQhFzEoYrSANGEjd97tGzC3ozWHRfWMFZbsVQJKtmB3is9oXiCYFzzA7LwAoRpsG",
  "key2": "yt8acKJzRK29MTqfj2D1G55XmjLguYJExAkptG9Wt2Y3Tg8U5YtdoyEjZXSXP3gZN8eyUY2dTTpP4Q2VyLLDVvx",
  "key3": "q6fYFZ18s4ZUAQTSJNtLfpzt4z1rq1VwMkd6MgnfA5nC5wvcgF8McX1jzhCTCSrtvGHt9sUuBs3xsNGaijcotEz",
  "key4": "3KmLmgRZdPxbGyfmrEjexv26vrRuhHbxbPi17m7CSpBe8SDRdhWb8HV6oWPmjRXmTgfQuX3JSumjbq46ZWU6nDPd",
  "key5": "4RxD96gJRzam7PnZz7VR4MhzhWugAMd8zoDR8HGKFD7JokpgE9nfW92sCvaCahu6DuoXyHaH5HgoaAtdBPurp5DP",
  "key6": "4zFXnicfgr4cSFRGK4uhVYqCz28BZ9Q75pZyraP1Gbbg1kSTZrsLro9Fu1pmYYafMRFNzRSfVy2U1bdrE8fMQQ6w",
  "key7": "3ECoJ2cBfAFh7Q1jCHiozuyRL2d5DHwZaMKDSDfd4ggrxWmBwAjUgeayJCcELK6Lv2JuDbRKAyybhohfSMoZtfy7",
  "key8": "2N9kijH2KLYYFTLMHHca93JWB82ZPwX4KZpwTBCn9GZDzGX13Zuw6Yz4A4VkVU1BxnocNFzC2Bbvif3TQawLeQjN",
  "key9": "4a6djJovcz5qcDfRritQfmZg74ZGZqH8skjoA56t9uKe7geKcEFYiETkV7prE4fLNksnCZmNEFBdMsKGQTqHdJ4q",
  "key10": "4AsmARqGXxytVqB37TY4Ezg6B2v4jHN5x35WFZpNUFZovJto1a8h5gdgSY6f3jPYBEyeXBAbTSHFVnfRq1ErDjJp",
  "key11": "4vpV6StHLQP6yg5rFg1PTdeVPT4Sb2nQFNorM2iGZAXu84j52w8gYUXmcVNaQf5eiwspXizPXyiHvAig9RiPjsqh",
  "key12": "48iwJLk2cNLYXq2Sz1UrZKizFHmqH1it4u3uyVqte2SqvBH6SRrRdxzEE2ZhWAn4TNDYn5XiceRfDYUA7RGdbGQT",
  "key13": "rT85ZBe2LNZjZjE3VjWirsvJztYXpeR4G6P98VjMuSM4Ehhcwm1xz9J4QzkScQMnBzvcpmnfkRkHTc4HWahewC3",
  "key14": "PWXA3rbcGe5YxkhqCH7P9nL6rVYK5DbMzGGvzmCKuUEGjV31oLAHXEwoGTDGWgvbvfFcn8aS7qjQZSyDFjuCq2k",
  "key15": "2Q1JcgBrcSpgmSaPDZCHXe8BrZqsBs7zGeENz2mpEkfH5A93NQwpGrjzF42mFysQa6Nqndz3JkPxGChx8JUgdtMM",
  "key16": "2zjRmcfR4FJnz5kArYbhaSJVLBftepDsvdw33LPbvEJKCNKRQyxyjR5yM42sFmSrsNddu1NpQ6UYhGN53AS8h3AR",
  "key17": "24Yo1dzp4H3f7onFo9FnauaTrAJVWefvxfKfyd2BEXKAjruqtKBXLTcXaW95uMjM994gVBH9tov17QctAuq5ZdZV",
  "key18": "56GiyG9KZR7ATBmusrnVL7rwcyh7Bnan885RBXWsXKjY4ZkrMeENFHGs2W45YqZpSaqnNEFfxTdRCMDqA4VmvjdA",
  "key19": "5hAdirLGgc6JfcWYSbNr3Czp3KLu6pLkqysRsQPiuZ8768Fq4GYmPjUNkqZMX9pyoXN5ycrytLuLHWKcTZ8dUcPg",
  "key20": "5MG7mjxs7pWuiCsEi7uzTumGXe6nQwCiJJt7nPXDtHEqq9V9rtbsLComamfBUe5D4ddMH2Fnc1gDnf5rjVyRDuuN",
  "key21": "3zd7t5KBqBpLj2Z6QoYPKXbCpjhXnErtPJ1p2iZ3LhKjNK2t8RLTpHmkG5vKBb8NNVQm2Ux61RxW475XbxYwciFZ",
  "key22": "nzb8xH3ubdDNwwFhyjVFPfCoUiRVo1r6oPoHuYVHCt5LBoDHZ2C2aR94dC1SuoLkUUK5evcHkrdqmzWf6pQdG4Z",
  "key23": "3Ckf3CrP3xivztn1Kvahs9cu4jmeHGysTmxontLnEzbrW8Tq37mVQNAhyAetxhQoTNDvT1Rbmumr1vcRd9nmsjyS",
  "key24": "4dbitVwixCP9oVzqsgBUW9XQgUmQ5TEmCQcapKDsWpbYEbN6tCPRTPvPBSvxmfvYYzCTCJJakSq3wb3LC211UF2S",
  "key25": "4hD7qGraBtnaMDM1XRnjH7dSvmGGN5Mia89tC4QRqwhSnpFDQFjyk6KHNLrwmBjarSZdgdbCGcR48uRPxEUZWXLs",
  "key26": "35Jxddp2V1vXbjwdhvwcfyYWcgrMsRCfybbtkzro85hohnHmfWSBK2n63bkap2yvfXZzwpA9QfqktEjor2UU2j6W",
  "key27": "4i1v5UiLy1pNQ2SrV5cvnG1pjLCo6Z33wgYiSd1VXPHMn4nt4UXddVevA9SQ9DBNvFja81SAGvRak6aiRJNgsyxq",
  "key28": "2kwFnsFG9pvUnzUe2jsr4rmnFr6E6aWGmA3yUEckXBpRfchiHn9DnmH89QJdtsqb2F9F2AQQjqxm9qJ1NvZ2iuqu"
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
