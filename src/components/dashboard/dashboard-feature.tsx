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
    "3GeJjoSnyK3ZiGeZ4HC99HZEqVLqmjjv52VpmEz5AHJP25Lj15hHe82QLWMQTGUNLMqigfyuVm8xzAbGCjfDWzdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iw8GsYQjDCR31FoUs8B425w4bqZFEq5pVGnBxwwbTPsdamF1ZECU69qHVoL2EvU4aD3S9YZoz7aMdJbQAsbky5n",
  "key1": "3g3SU32qWsVjxKUo86pnQddKZ9qpEMbW3CqXZbGfEJt9ntjPQAj1FkWeoDweXkppup2AhDZFfKqm4chyaMP6wtKi",
  "key2": "3SFL6NQb327rR41DnKHVJ2DmoMdRt7qiv51Mpp4ehFWRAF24wr2Wg7fYWdG8yh9TBTjQBLCVkau3vAmxpUPKR9vX",
  "key3": "5UUhcyggnDzghRVr1RANf5GxKR3wvs8vzEEHrevTJnivHaw91tDUYAi8ct81DMWDZ8FuRLg6FzgCJtFDnRwwB5ZZ",
  "key4": "46PN2LqAbT3ZKgxmAepzgRViStiX2BJWp5piXpzF25BKGesLoCvB4Hv48exr5zCuaYBnqnYAMbPeh1D5T1T7KpiT",
  "key5": "2c7WesJKgwyqQSb2NYiGooGBtqbqzR486PPP92iFEYqzThRTYLKWDvm6q7nh1jco3FgDZt8e3uNUXMQWZpuEbG7Y",
  "key6": "3QhnTTuDSZ4XFBnG3xPaHu8KaRg51VfeFhEZa5SCQLgDupxeZFJAxCbFN1qf7sVxtuUwgCGXJYrytyB4gvtejAeZ",
  "key7": "bH1rdjXpTDZiZU8HRAnMhAWfvurrMxGyUCjFqG3TeWfERECSsJ4a4LMPhrZmpW6jwXC5xhti3pV7G71fo8frci8",
  "key8": "2UVnqETxbUnmFjA6KvpeZKGfChivHEaopPsMwka4FMkArdAPZeBksoF2RoHygZoZ6Yq8fX7cM4dZFYJoXFSpJj5r",
  "key9": "3Fb8Jcub5feuo8PAM4zbvSYFJT3YVSp9TTXmMuk5iTpSswV44cg5ayNCLCjWfPw47ycjRzB9bwqyrpASEfKgZzGC",
  "key10": "2U3NBZjZZw5WtqfVe7KL8XvrGg5hRvAzm8M7J6WpRk21dvrViy4XbqWAY8XvwQSAAeXBe9FZu9RomvoGBHGd3n9t",
  "key11": "459jN7DzkwZb9JSAjL7SnzmnYqe1TL3CMpWR3eMJmYhkXr7rxjjqWqL9s9in1cYL8ac6iuxCXTRK7dnaRLUzYLr7",
  "key12": "372gYbD3LuJEYqBpxkeAGRN5nRY675LSMyxvy9dbuHMyyipNWG2VisXWjTT649jpGM4PRnStNZybUpXe9KUBm6YS",
  "key13": "4h6zyaxu99kt5oTCSmGp42y6aU39D6SUYUFwm4mR8cjECaBnJjVmo6opTftj1Ey7E1aGMnNCuRZraoLMuECetaj7",
  "key14": "uNnjzKioThiGyJrA6wxHTMSVKHrdEvzcEuUSLDXw1VK4XC53vZzSfwkKMtDVvwtpmmBNteqLjgXu73Bu1vWT7Zu",
  "key15": "2tz8ttpPtwHYfcnH3oAnAadGoMfZReP6Q1mFCxTkrpoVf4yKb5cwqRqiAYJxmhMSBm445oC54YQqgvPJLaYsRaMP",
  "key16": "JGrF1npmmyoPt257vha5ZP5qdxgR8ksndNq6VQRy8c5wEQVPtxGXTbtRWbdfHB95Gk6fpcdqytC4LXsGm6pUhR8",
  "key17": "5REJxb7QLoQbUoT43CVTaCD439ttVtNXkCYMStqvFXx27YbGmHtkagqXX43zyUmw5GEhfDu1sbrxmyyWvAspP8CY",
  "key18": "4a35oERb5ACDZCt7hhyamRKyMW3dQCRKV8UQHMqzCXoCVoGtFoRHT7eVnb7MtrxtGb6NS96NEj3ZApMRNBoNZXy7",
  "key19": "5ru255ptxDasoWJuBfXgGdjEYtxTAtPgHmtGDLjSMKd5bDvPpodkvDzvhyjZTzhK3aZGCoMFgwMWkweshze928iN",
  "key20": "4cBQEAqZANgqqcCr8C6DeCgBjV1KimLuWtXfWC8pj5Ft2bZeFpAxHKEf7XJkbfDdaT91rordFzhDSYrXME4RZz7P",
  "key21": "24b24tmByieUnMNWKW1yX2zsEbTJhL8AyVVpfLZks4KCDiBbrNnMnp6zjSH5mx9Z4vcRpvDD4MmraRzqdcYv8qee",
  "key22": "5UXMBNe4mzguYcGZfkLGDG9f4fRLqJZn42vWZKhnuXAaCDGQokfk7Kscqjw5oeKekV3xHGzHfcGQdXt1a4Ns5UF7",
  "key23": "3bkKEboasWXvqfr2yMpjRUmhWDUuHm1NVQcnSA4EZXGXabVD7pwPZCH5E1zvefzcU1Pr5VFV6Bh2AWiKGabmhkp7",
  "key24": "5nnaWnwZasUwvwmYMnpWQvp9FpMp3GhXADiGQ2AvzRhWSATF41tGs72mw9vexDBbxmahFMM1oUwKrv16FAxCm5cA",
  "key25": "2HyVLMi7p26rSrNnsE7tTnG11VWqBBRjysh4P4Smc9cXKWw74dBefdYYmGHLWfa5qqTK8frHWKQEBHJp4fHf1Qok",
  "key26": "45fNaWxWKngBNAi79VN8HKBJvoTyZLP6H6CsgdLe1683RJiwn5miTJc2zkkhyfmC24AzkT1HEBgBW45BpVYSbmun",
  "key27": "2HaUBmjAkop2PBzcK1PMHwZSsavGBSfyhkzn8pAyA8FVsdm1carNuEq6fDCiB2QJqzFsfb91ujq28Eg6op5u1zYp",
  "key28": "W8vVBmzCfLd9bCvks6kk7khcb5Bv1Q8aR1rMFU4nSErLW2Aj4VZLJq4vCSq9eDdsdBAoScUoqAAaaJGECbVdWr3",
  "key29": "2nmc6ZaJH3F5Nw1P4eUN8Nuhh8GWHV6GeCKiAijcZsTSfhRApDAvYGAcCLU3TiKJoDDAQrzokpHU9ovpF63NZUNy",
  "key30": "3YHxKaxfZwyYHLNu5KNcYxZENbbnvam4ryKabQPSXn6kyigq5CJMQfmMWHCTp71nk3y76RNT6KwoJWjJhnuxhLKo",
  "key31": "4PLGqsTcnYnYf61jia2RWrpHZEcwEpG9Qs4SgF2ogipspdngmzTBnNZGVtmzABhjbab4zYTbvRprXZZwuVngn7eL",
  "key32": "RRot2VPXDL5F98f7EMpkqdHgpUHbgLXQRZ5nCRbCwjZjWRtTP4AiAHpSvYPgTscTGpG9FzEp49cHApK61wtv8ht",
  "key33": "Q4nKL1S6vgeQwQ6UGbDCCegDXoZCtgv3XMjFsfKHrah7PUC9sFmjYeFCQAxL8jvTHogx3uxPHysVnE7VrPdWYBU"
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
